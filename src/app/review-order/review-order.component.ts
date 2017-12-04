import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PlayerService} from '../player.service';
import {ToolbarService, ButtonType, ButtonIconPosition} from '../toolbar.service';

@Component({
    selector: 'app-review-order',
    templateUrl: './review-order.component.html',
    styleUrls: ['./review-order.component.less']
})
export class ReviewOrderComponent implements OnInit {

    totalPrice = 0;
    totalQuantity = 0;

    constructor(private router: Router, public playerService: PlayerService, private toolbarService: ToolbarService) {
    }

    ngOnInit() {
        this.totalPrice =
            (this.playerService.playerOne ? this.playerService.playerOne.cart.totalPrice : 0) +
            (this.playerService.playerTwo ? this.playerService.playerTwo.cart.totalPrice : 0) +
            (this.playerService.playerThree ? this.playerService.playerThree.cart.totalPrice : 0) +
            (this.playerService.playerFour ? this.playerService.playerFour.cart.totalPrice : 0) +
            (this.playerService.playerFive ? this.playerService.playerFive.cart.totalPrice : 0);
        this.totalQuantity =
            (this.playerService.playerOne ? this.playerService.playerOne.cart.totalQuantity : 0) +
            (this.playerService.playerTwo ? this.playerService.playerTwo.cart.totalQuantity : 0) +
            (this.playerService.playerThree ? this.playerService.playerThree.cart.totalQuantity : 0) +
            (this.playerService.playerFour ? this.playerService.playerFour.cart.totalQuantity : 0) +
            (this.playerService.playerFive ? this.playerService.playerFive.cart.totalQuantity : 0);

        this.toolbarService.addButton({
            text: 'Player Select',
            icon: 'chevron-left',
            callback: () => {
                this.router.navigate(['/player', 'setup']);
            },
            type: ButtonType.Secondary
        });
        this.toolbarService.addButton({
            text: 'Place Order',
            icon: 'chevron-right',
            callback: () => {
                this.router.navigate(['/success']);
            },
            iconPosition: ButtonIconPosition.Right,
            type: ButtonType.Primary,
            disabled: this.totalQuantity <= 0
        });
    }

    gotoCart(playerIndex: number) {
        this.playerService.setActivePlayer(playerIndex);
        this.router.navigate(['/player', 'cart']);
    }

}
