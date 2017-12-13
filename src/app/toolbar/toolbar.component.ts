import {Component, ElementRef, EventEmitter, Input, OnInit} from '@angular/core';
import {ButtonIconPosition, ToolbarService} from '../toolbar.service';
import {Router, Event, NavigationStart} from '@angular/router';
import {PlayerService} from "../player.service";

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.less']
})
export class ToolbarComponent implements OnInit {

    @Input() scrollEmitter = new EventEmitter<ElementRef>();

    callServerTimeoutHandle = null;
    callServerActive = false;
    buttonIconPosition = ButtonIconPosition;
    isScrolled = false;
    chatVisible = false;
    splash = true;

    constructor(public toolbarService: ToolbarService, private playerService: PlayerService, private router: Router) {
        router.events.subscribe((event: Event) => {
            if (event instanceof NavigationStart) {
                this.splash = event.url === '/';
            }
        });
    }

    ngOnInit() {
        if (this.scrollEmitter != null) {
            this.scrollEmitter.subscribe((element: ElementRef) => {
                this.calculateScroll(element);
            });
        }
    }

    showCallServerPopup() {
        this.callServerActive = true;
        clearTimeout(this.callServerTimeoutHandle);


        this.callServerTimeoutHandle = setTimeout(() => {
            this.callServerActive = false;
        }, 10000);
    }

    reset() {
        this.playerService.removePlayer(1);
        this.playerService.removePlayer(2);
        this.playerService.removePlayer(3);
        this.playerService.removePlayer(4);
        this.playerService.removePlayer(5);
        this.router.navigate(['/']);
    }

    private calculateScroll(element) {
        const currPos = element.scrollTop;
        const elementHeight = element.scrollHeight;
        const bodyHeight = document.body.scrollHeight;

        this.isScrolled = elementHeight - currPos - bodyHeight > 0;
    }
}
