import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../player.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-select-characters',
  templateUrl: './select-characters.component.html',
  styleUrls: ['./select-characters.component.less']
})
export class SelectCharactersComponent implements OnInit {

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
      if (this.playerService.getActivePlayer() == null) {
          this.router.navigate(['/player', 'setup']);
          return;
      }
  }

}
