import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PlayerService} from '../player.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, OnDestroy {
    protected isScrolled = false;
    protected visible = true;

    @HostListener('window:scroll') onWindowScroll(evt) {
        const currPos = window.pageYOffset;
        this.isScrolled = currPos > 0;
    }

    constructor(private router: Router, private playerService: PlayerService) {
    }

    ngOnInit() {
        this.visible = this.playerService.getActivePlayer() != null;
        this.playerService.activePlayerChanged.subscribe((activePlayer) => {
            this.visible = activePlayer != null;
        });
    }

    ngOnDestroy() {

    }
}
