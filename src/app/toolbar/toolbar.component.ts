import {AfterViewInit, Component, HostListener} from '@angular/core';
import {ButtonIconPosition, ToolbarService} from '../toolbar.service';
import {NavigationEnd, Router, Event} from '@angular/router';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.less']
})
export class ToolbarComponent implements AfterViewInit {

    protected buttonIconPosition = ButtonIconPosition;
    protected isScrolled = false;

    @HostListener('window:scroll')
    onWindowScroll() {
        this.calculateScroll();
    }
    @HostListener('window:resize')
    onWindowResize() {
        this.calculateScroll();
    }

    constructor(protected toolbarService: ToolbarService, router: Router) {
        router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                this.calculateScroll();
            }
        });
    }

    ngAfterViewInit() {
        this.calculateScroll();
    }

    private calculateScroll() {
        const currPos = window.pageYOffset;
        const windowSize = window.innerHeight;
        const bodyHeight = document.body.scrollHeight;

        this.isScrolled = bodyHeight - windowSize - currPos > 0;
    }
}
