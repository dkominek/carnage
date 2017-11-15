import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PlayerService} from '../player.service';

@Component({
    selector: 'app-player-setup',
    templateUrl: './player-setup.component.html',
    styleUrls: ['./player-setup.component.less']
})
export class PlayerSetupComponent implements OnInit {

    constructor(private router: Router, protected playerService: PlayerService) {
    }

    ngOnInit() {
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
