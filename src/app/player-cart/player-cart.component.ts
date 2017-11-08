import { Component, OnInit } from '@angular/core';
import {Player, PlayerService} from '../player.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-player-cart',
  templateUrl: './player-cart.component.html',
  styleUrls: ['./player-cart.component.less']
})
export class PlayerCartComponent implements OnInit {

    protected player: Player;

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
      if (this.playerService.getActivePlayer() == null) {
          this.router.navigate(['/player', 'setup']);
          return;
      }

      this.player = this.playerService.getActivePlayer();
  }

}
