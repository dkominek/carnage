import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../player.service';
import {Router} from '@angular/router';
import {CharacterService} from '../character.service';

@Component({
    selector: 'app-select-characters',
    templateUrl: './select-characters.component.html',
    styleUrls: ['./select-characters.component.less']
})
export class SelectCharactersComponent implements OnInit {

    constructor(private router: Router, private playerService: PlayerService, protected characterService: CharacterService) {
    }

    ngOnInit() {
        /*if (this.playerService.getActivePlayer() == null) {
            this.router.navigate(['/player', 'setup']);
            return;
        }*/
    }

    protected toggleFilter(filterName) {
        // todo
    }

    protected gotoCharacter(character) {
        this.router.navigate(['/character', character.name.toLowerCase()]);
    }
}
