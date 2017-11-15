import { Component, OnInit } from '@angular/core';
import {Player, PlayerService} from '../player.service';

@Component({
  selector: 'app-player-indicator',
  templateUrl: './player-indicator.component.html',
  styleUrls: ['./player-indicator.component.less']
})
export class PlayerIndicatorComponent implements OnInit {

  visible = true;

  protected player: Player;
  protected get avatarClass(): any {
    return {
      one: this.playerService.activePlayerIndex === 1,
      two: this.playerService.activePlayerIndex === 2,
      three: this.playerService.activePlayerIndex === 3,
      four: this.playerService.activePlayerIndex === 4,
      five: this.playerService.activePlayerIndex === 5
    };
  }

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.activePlayerChanged.subscribe((newPlayer) => {
        this.player = newPlayer;
    });
  }
}
