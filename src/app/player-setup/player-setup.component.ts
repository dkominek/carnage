import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PlayerService} from '../player.service';

@Component({
    selector: 'app-player-setup',
    templateUrl: './player-setup.component.html',
    styleUrls: ['./player-setup.component.less']
})
export class PlayerSetupComponent implements OnInit {

    constructor(private router: Router, public playerService: PlayerService) {
    }

    ngOnInit() {
    }
}
