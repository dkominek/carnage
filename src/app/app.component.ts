import {Component, ElementRef, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {FadeAnimation} from './routing/router.transition';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    animations: [FadeAnimation]
})
export class AppComponent implements OnInit {
    protected title = 'app';

    @ViewChild('body') body: ElementRef = null;
    protected onScroll = new EventEmitter<ElementRef>();

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.router.navigate(['/']);

        this.router.events
            .filter((event) => event instanceof NavigationStart)
            .subscribe((event) => {
                this.body.nativeElement.scrollTop = 0;
            });
    }

    getRouterOutletState(outlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }

    triggerOnScroll() {
        setTimeout(() => { this.onScroll.emit(this.body.nativeElement); });
    }
}
