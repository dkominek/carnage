import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Character, CharacterService} from '../character.service';
import {PlayerService} from '../player.service';

@Component({
    selector: 'app-character-page',
    templateUrl: './character-page.component.html',
    styleUrls: ['./character-page.component.less']
})
export class CharacterPageComponent implements OnInit {

    character: Character;
    error = false;
    storyExpanded = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private characterService: CharacterService,
        private playerService: PlayerService
    ) {}

    ngOnInit() {
        // todo remove comments
        if (this.playerService.getActivePlayer() == null) {
            this.router.navigate(['/player', 'setup']);
            return;
        }

        this.route.params.subscribe(params => {
            this.character = this.characterService.characters.find((c) => c.name.toLowerCase() === params['name'].toLowerCase());
            if (this.character == null) {
                this.router.navigate(['/devour']);
            }
        });
    }

    addToCart() {
        this.playerService.getActivePlayer().cart.addCharacter(this.character);
    }
}
