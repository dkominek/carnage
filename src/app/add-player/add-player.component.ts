import {Component, OnInit} from '@angular/core';
import {Player, PlayerService} from '../player.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ButtonType, ToolbarService} from '../toolbar.service';
import {Subject} from 'rxjs/Subject';

@Component({
    selector: 'app-add-player',
    templateUrl: './add-player.component.html',
    styleUrls: ['./add-player.component.less']
})
export class AddPlayerComponent implements OnInit {
    player: Player;
    playerIndex: number;
    addDisabled: Subject<boolean> = new Subject<boolean>();

    errorMessage: string = '';

    protected get avatarClass(): any {
        return {
            one: this.playerIndex === 1,
            two: this.playerIndex === 2,
            three: this.playerIndex === 3,
            four: this.playerIndex === 4,
            five: this.playerIndex === 5
        };
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private playerService: PlayerService,
        private toolbarService: ToolbarService
    ) {}

    ngOnInit() {
        this.toolbarService.addButton({
            text: 'Call Server',
            icon: 'phone',
            callback: () => {},
            type: ButtonType.Secondary
        });
        this.toolbarService.addButton({
            text: 'Add',
            icon: 'plus',
            callback: this.addPlayer.bind(this),
            disabled: this.addDisabled,
            type: ButtonType.Primary
        });
        this.playerService.unsetActivePlayer();
        this.route.params.subscribe((params) => {
            const playerIndex = +params['number'];
            if (playerIndex <= 0 || playerIndex > 5 || this.playerService.getPlayer(playerIndex) != null) {
                this.router.navigate(['/player', 'setup']);
                return;
            }
            this.playerIndex = playerIndex;
            this.player = new Player('');
            this.addDisabled.next(true);
        });
    }

    setPlayerName(name) {
        name = name.replace(/\s/g, '');
        this.player.name = name;
        const length = name.length < 6;
        this.addDisabled.next(length);
        this.errorMessage = length ? 'Your gamer tag must be more than 6 characters...' : '';
    }

    addPlayer() {
        if (this.player.name.length >= 6) {
            this.playerService.addPlayer(this.player, this.playerIndex);
            this.playerService.setActivePlayer(this.playerIndex);
            this.router.navigate(['/devour']);
        }
    }

    cancel() {
        this.router.navigate(['/player', 'setup']);
    }
}
