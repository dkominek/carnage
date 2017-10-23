import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Character, CharacterService} from '../character.service';

@Component({
    selector: 'app-character-page',
    templateUrl: './character-page.component.html',
    styleUrls: ['./character-page.component.less']
})
export class CharacterPageComponent implements OnInit {

    character: Character;
    error: boolean;
    storyExpanded: boolean;

    constructor(private route: ActivatedRoute, private router: Router, private characterService: CharacterService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.character = this.characterService.characters.find((c) => c.name.toLowerCase() === params['name'].toLowerCase());
            this.error = (this.character == null);
        });
    }
}
