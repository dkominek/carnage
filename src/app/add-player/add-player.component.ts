import {Component, OnDestroy, OnInit} from '@angular/core';
import {Player, PlayerService} from '../player.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuService} from '../menu.service';

@Component({
    selector: 'app-add-player',
    templateUrl: './add-player.component.html',
    styleUrls: ['./add-player.component.less']
})
export class AddPlayerComponent implements OnInit, OnDestroy {
    player: Player;
    playerIndex: number;

    protected get avatarClass(): any {
        return {
            one: this.playerIndex === 1,
            two: this.playerIndex === 2,
            three: this.playerIndex === 3,
            four: this.playerIndex === 4,
            five: this.playerIndex === 5
        };
    }

    constructor(private route: ActivatedRoute, private router: Router, private playerService: PlayerService, private menuService: MenuService) {
    }

    ngOnInit() {
        this.menuService.hide();
        this.playerService.unsetActivePlayer();
        this.route.params.subscribe((params) => {
            const playerIndex = +params['number'];
            if (playerIndex <= 0 || playerIndex > 5 || this.playerService.getPlayer(playerIndex) != null) {
                this.router.navigate(['/player', 'setup']);
                return;
            }
            this.playerIndex = playerIndex;
            this.player = new Player('');
        });
    }

    ngOnDestroy(): void {
        this.menuService.show();
    }

    addPlayer() {
        this.playerService.addPlayer(this.player, this.playerIndex);
        this.router.navigate(['/player', 'setup']);
    }

    cancel() {
        this.router.navigate(['/player', 'setup']);
    }
}
