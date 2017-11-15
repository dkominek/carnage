import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DiscoverService, DiscoverVideo} from '../discover.service';

@Component({
    selector: 'app-view-games',
    templateUrl: './view-games.component.html',
    styleUrls: ['./view-games.component.less']
})
export class ViewGamesComponent implements OnInit {

    protected selectedVideo: DiscoverVideo;

    constructor(private router: Router, protected discoverService: DiscoverService) {
    }

    ngOnInit() {

    }
}
