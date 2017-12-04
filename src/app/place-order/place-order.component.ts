import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PlayerService} from '../player.service';

@Component({
    selector: 'app-place-order',
    templateUrl: './place-order.component.html',
    styleUrls: ['./place-order.component.less']
})
export class PlaceOrderComponent implements OnInit, AfterViewInit {

    progressSeconds = 10;
    scrolling = false;

    constructor(private router: Router, private playerService: PlayerService) {
    }

    ngOnInit() {
        if (this.playerService.playerOne == null &&
            this.playerService.playerTwo == null &&
            this.playerService.playerThree == null &&
            this.playerService.playerFour == null &&
            this.playerService.playerFive == null
        ) {
            this.router.navigate(['/player', 'setup']);
            return;
        }

        setTimeout(this.stepProgress.bind(this), 1000);
    }

    ngAfterViewInit(): void {
        this.scrolling = true;
    }

    private stepProgress() {
        if (this.progressSeconds > 0) {
            this.progressSeconds--;
            if (this.progressSeconds > 0) {
                setTimeout(this.stepProgress.bind(this), 1000);
            } else {
                this.playerService.removePlayer(1);
                this.playerService.removePlayer(2);
                this.playerService.removePlayer(3);
                this.playerService.removePlayer(4);
                this.playerService.removePlayer(5);
                this.router.navigate(['/']);
            }
        }
    }
}
