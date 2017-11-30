import { Component, OnInit } from '@angular/core';
import {Player, PlayerService} from '../player.service';
import {Router} from '@angular/router';
import {ButtonIconPosition, ButtonType, ToolbarService} from '../toolbar.service';

@Component({
  selector: 'app-player-cart',
  templateUrl: './player-cart.component.html',
  styleUrls: ['./player-cart.component.less']
})
export class PlayerCartComponent implements OnInit {

    protected player: Player;

  constructor(private router: Router, private playerService: PlayerService, private toolbarService: ToolbarService) { }

  ngOnInit() {
      this.player = this.playerService.getActivePlayer();

      if (this.player == null) {
          this.router.navigate(['/player', 'setup']);
          return;
      }

      this.toolbarService.addButton({
          text: 'Return To Menu',
          icon: 'chevron-left',
          callback: () => {
              this.router.navigate(['devour']);
          },
          type: ButtonType.Secondary
      });

      this.toolbarService.addButton({
          text: 'Review Order',
          icon: 'chevron-right',
          iconPosition: ButtonIconPosition.Right,
          callback: () => {
              this.router.navigate(['/review']);
          },
          disabled: this.player.cart.items.length === 0,
          type: ButtonType.Primary
      });
  }

}
