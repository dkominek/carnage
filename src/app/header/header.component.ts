import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MenuService} from '../menu.service';

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

    constructor(private router: Router, private menuService: MenuService) {
    }

    ngOnInit() {
        this.menuService.visibilityChanged.subscribe((visible) => {
            this.visible = visible;
        });
    }

    ngOnDestroy() {

    }
}
