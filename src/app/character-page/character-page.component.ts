import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Character, CharacterService} from '../character.service';
import {PlayerService} from '../player.service';
import {ButtonIconPosition, ButtonType, ToolbarService} from '../toolbar.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
    selector: 'app-character-page',
    templateUrl: './character-page.component.html',
    styleUrls: ['./character-page.component.less']
})
export class CharacterPageComponent implements OnInit {

    addText: BehaviorSubject<string> = new BehaviorSubject<string>('');
    addDisabled: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    character: Character;
    error = false;
    storyExpanded = false;
    shortStoryLength = Character.SHORT_STORY_LENGTH;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private characterService: CharacterService,
                private playerService: PlayerService,
                private toolbarService: ToolbarService) {
    }

    ngOnInit() {
        this.addButtons();
        if (this.playerService.getActivePlayer() == null) {
            this.router.navigate(['/player', 'setup']);
            return;
        }

        this.route.params.subscribe(params => {
            this.character = this.characterService.characters.find((c) => c.nameLowercase === params['name'].toLowerCase());
            if (this.character == null) {
                this.router.navigate(['/devour']);
            }
        });
    }

    protected addToCart() {
        this.playerService.getActivePlayer().cart.addCharacter(this.character);
        this.addDisabled.next(true);
        this.addText.next('Added');
        setTimeout(() => {
            this.addDisabled.next(false);
            this.addText.next('Add To Cart');
        }, 1500);
    }

    protected gotoCharacterSelect() {
        this.router.navigate(['/devour']);
    }

    protected navigateToCharacter(character: Character) {
        if (character != null) {
            this.router.navigate(['/character', character.nameLowercase]);
            this.addButtons();
        }
    }

    protected navigateNext() {
        const nextCharacter = this.getCharacter(1);
        this.navigateToCharacter(nextCharacter);
    }

    protected navigatePrevious() {
        const previousCharacter = this.getCharacter(-1);
        this.navigateToCharacter(previousCharacter);
    }

    private getCharacter(offset: number = 0): Character {
        let index = this.characterService.characters.indexOf(this.character);

        if (index !== -1) {
            index += offset;

            const lastIndex = this.characterService.characters.length - 1;
            while (index < 0) {
                index = lastIndex + index;
            }
            while (index > lastIndex) {
                index -= lastIndex;
            }
            return this.characterService.characters[index];
        }
        return null;
    }
    private addButtons() {
        this.toolbarService.addButton({
            text: 'Browse Menu',
            icon: 'chevron-left',
            callback: this.gotoCharacterSelect.bind(this),
            type: ButtonType.Secondary
        });

        this.addText = new BehaviorSubject<string>('');
        this.addDisabled = new BehaviorSubject<boolean>(false);
        this.toolbarService.addButton({
            text: this.addText,
            icon: 'plus',
            callback: this.addToCart.bind(this),
            type: ButtonType.Primary,
            disabled: this.addDisabled
        });
        this.addDisabled.next(false);
        this.addText.next('Add To Cart');

        this.toolbarService.addButton({
            text: 'Cart',
            icon: 'shopping-cart',
            callback: () => {
                this.router.navigate(['/player', 'cart']);
            },
            iconPosition: ButtonIconPosition.Center,
            type: ButtonType.Primary,
        });
    }
}
