import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Player, PlayerService} from '../player.service';
import {MenuService} from '../menu.service';

@Component({
    selector: 'app-player-setup',
    templateUrl: './player-setup.component.html',
    styleUrls: ['./player-setup.component.less']
})
export class PlayerSetupComponent implements OnInit, OnDestroy {

    constructor(private router: Router, protected playerService: PlayerService, private menuService: MenuService) {
    }

    ngOnInit() {
        this.menuService.hide();
        this.playerService.unsetActivePlayer();
    }

    ngOnDestroy() {
        this.menuService.show();
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
