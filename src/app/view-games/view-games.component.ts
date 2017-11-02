import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../player.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-games',
  templateUrl: './view-games.component.html',
  styleUrls: ['./view-games.component.less']
})
export class ViewGamesComponent implements OnInit {

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
      if (this.playerService.getActivePlayer() == null) {
          this.router.navigate(['/player', 'setup']);
          return;
      }
  }

}
