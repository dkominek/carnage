import {Component, ElementRef, EventEmitter, Input, OnInit} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {PlayerService} from '../player.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

    @Input() scrollEmitter = new EventEmitter<ElementRef>();

    isScrolled = false;
    visible = true;
    splash = true;

    constructor(private router: Router, private playerService: PlayerService) {
    }

    ngOnInit() {
        if (this.scrollEmitter != null) {
            this.scrollEmitter.subscribe((element: ElementRef) => {
                this.calculateScroll(element);
            });
        }

        this.visible = this.playerService.getActivePlayer() != null;

        this.playerService.activePlayerChanged.subscribe((activePlayer) => {
            this.visible = activePlayer != null;
        });

        this.router.events
            .filter((event) => event instanceof NavigationStart)
            .subscribe((event: NavigationStart) => {
                 this.splash = event.url === '/';
            });
    }

    calculateScroll(element) {
        const currPos = element ? element.scrollTop : 0;
        this.isScrolled = currPos > 0;
    }
}
