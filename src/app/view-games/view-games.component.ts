import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DiscoverService, DiscoverVideo} from '../discover.service';
import {ButtonType, ToolbarService} from '../toolbar.service';

@Component({
    selector: 'app-view-games',
    templateUrl: './view-games.component.html',
    styleUrls: ['./view-games.component.less']
})
export class ViewGamesComponent implements OnInit {

    selectedVideo: DiscoverVideo;

    constructor(private router: Router, public discoverService: DiscoverService, private toolbarService: ToolbarService) {
    }

    ngOnInit() {
    }
}
