import {Component, ElementRef, EventEmitter, Input, OnInit} from '@angular/core';
import {ButtonIconPosition, ToolbarService} from '../toolbar.service';
import {Router, Event, NavigationStart} from '@angular/router';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.less']
})
export class ToolbarComponent implements OnInit {

    @Input() scrollEmitter = new EventEmitter<ElementRef>();

    protected buttonIconPosition = ButtonIconPosition;
    protected isScrolled = false;
    protected chatVisible = false;
    protected splash = true;

    constructor(protected toolbarService: ToolbarService, router: Router) {
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

    private calculateScroll(element) {
        const currPos = element.scrollTop;
        const elementHeight = element.scrollHeight;
        const bodyHeight = document.body.scrollHeight;

        this.isScrolled = elementHeight - currPos - bodyHeight > 0;
    }
}
