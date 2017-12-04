import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PlayerService} from '../player.service';
import {ButtonIconPosition, ButtonType, ToolbarService} from '../toolbar.service';

@Component({
    selector: 'app-player-setup',
    templateUrl: './player-setup.component.html',
    styleUrls: ['./player-setup.component.less'],
})
export class PlayerSetupComponent implements OnInit {

    constructor(private router: Router, public playerService: PlayerService, public toolbarService: ToolbarService) {
    }

    ngOnInit() {
        const totalQuantity =
            (this.playerService.playerOne ? this.playerService.playerOne.cart.totalQuantity : 0) +
            (this.playerService.playerTwo ? this.playerService.playerTwo.cart.totalQuantity : 0) +
            (this.playerService.playerThree ? this.playerService.playerThree.cart.totalQuantity : 0) +
            (this.playerService.playerFour ? this.playerService.playerFour.cart.totalQuantity : 0) +
            (this.playerService.playerFive ? this.playerService.playerFive.cart.totalQuantity : 0);

        this.toolbarService.addButton({
            text: 'Review Order',
            icon: 'chevron-right',
            iconPosition: ButtonIconPosition.Right,
            callback: () => {
                this.router.navigate(['/review']);
            },
            type: ButtonType.Primary,
            disabled: totalQuantity <= 0
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
