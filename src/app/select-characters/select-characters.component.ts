import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../player.service';
import {Router} from '@angular/router';
import {Character, CharacterService, CharacterSubtype, CharacterType} from '../character.service';
import {ButtonType, ToolbarService} from "../toolbar.service";

@Component({
    selector: 'app-select-characters',
    templateUrl: './select-characters.component.html',
    styleUrls: ['./select-characters.component.less']
})
export class SelectCharactersComponent implements OnInit {

    protected filters: string[] = [];
    protected characters: Character[] = [];

    constructor(
        private router: Router,
        private playerService: PlayerService,
        protected characterService: CharacterService,
        protected toolbarService: ToolbarService
    ) {}

    ngOnInit() {
        this.toolbarService.addButton({
            text: 'Select Player',
            icon: 'chevron-left',
            callback: this.gotoPlayerSelect.bind(this),
            type: ButtonType.Secondary
        });
        this.toolbarService.addButton({
            text: 'Call Server',
            icon: 'phone',
            callback: () => {},
            type: ButtonType.Secondary
        });
        if (this.playerService.getActivePlayer() == null) {
            this.router.navigate(['/player', 'setup']);
            return;
        }

        this.characters = this.characterService.characters.slice(0);
    }

    protected toggleFilter(filterName) {
        const index = this.filters.indexOf(filterName);
        if (index !== -1) {
            this.filters.splice(index, 1);
        } else {
            this.filters.push(filterName);
        }

        const herbivoreIndex = this.filters.indexOf('herbivore');
        const carnivoreIndex = this.filters.indexOf('carnivore');

        if (filterName === 'carnivore' && carnivoreIndex !== -1 && herbivoreIndex !== -1) {
            this.filters.splice(herbivoreIndex, 1);
        }

        if (filterName === 'herbivore' && carnivoreIndex !== -1 && herbivoreIndex !== -1) {
            this.filters.splice(carnivoreIndex, 1);
        }

        this.filterCharacters();
    }

    protected gotoCharacter(character) {
        this.router.navigate(['/character', character.nameLowercase]);
    }

    protected gotoPlayerSelect() {
        this.router.navigate(['/player/setup']);
    }

    protected filterCharacters() {
        this.characters = [];
        const typeFilters = [];
        const subtypeFilters = [];
        this.filters.forEach((f) => {
            switch (f) {
                case 'entree':
                    typeFilters.push((c: Character) => {
                        return c.type === CharacterType.ENTREE;
                    });
                    break;
                case 'drink':
                    typeFilters.push((c: Character) => {
                        return c.type === CharacterType.DRINK;
                    });
                    break;
                case 'appetizer':
                    typeFilters.push((c: Character) => {
                        return c.type === CharacterType.APPETIZER;
                    });
                    break;
                case 'dessert':
                    typeFilters.push((c: Character) => {
                        return c.type === CharacterType.DESSERT;
                    });
                    break;
                case 'herbivore':
                    subtypeFilters.push((c: Character) => {
                        return c.subtype === CharacterSubtype.HERBIVORE;
                    });
                    break;
                case 'carnivore':
                    subtypeFilters.push((c: Character) => {
                        return c.subtype === CharacterSubtype.CARNIVORE;
                    });
                    break;
            }
        });

        if (typeFilters.length > 0) {
            this.characterService.characters.forEach((c) => {
                if (typeFilters.some((fn) => fn(c))) {
                    if (subtypeFilters.length === 0 || subtypeFilters.some((fn) => fn(c))) {
                        this.characters.push(c);
                    }
                }
            });
        } else if (subtypeFilters.length > 0) {
            this.characterService.characters.forEach((c) => {
                if (subtypeFilters.some((fn) => fn(c))) {
                    this.characters.push(c);
                }
            });
        } else {
            this.characters = this.characterService.characters.slice(0);
        }
    }
}
