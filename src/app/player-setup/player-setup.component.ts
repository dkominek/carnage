import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PlayerService} from '../player.service';
import {ButtonIconPosition, ButtonType, ToolbarService} from '../toolbar.service';

@Component({
    selector: 'app-player-setup',
    templateUrl: './player-setup.component.html',
    styleUrls: ['./player-setup.component.less']
})
export class PlayerSetupComponent implements OnInit {

    constructor(private router: Router, protected playerService: PlayerService, protected toolbarService: ToolbarService) {
    }

    ngOnInit() {
        this.toolbarService.addButton({
            text: 'Ready to Order',
            icon: 'chevron-right',
            iconPosition: ButtonIconPosition.Right,
            callback: () => {},
            type: ButtonType.Primary
        });
        this.playerService.unsetActivePlayer();
    }

    addOrSelectPlayer(playerIndex: number) {
        if (this.playerService.getPlayer(playerIndex) != null) {
            this.playerService.setActivePlayer(playerIndex);
            this.router.navigate(['/devour']);
        } else {
            this.router.navigate(['/player', 'add', playerIndex]);
        }
    }
}
