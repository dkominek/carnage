import {Injectable} from '@angular/core';

@Injectable()
export class CharacterService {
    readonly characters: Character[] = [
        new Entree(
            'Hermberg',
            CharacterSubtype.CARNIVORE, 10.99,
            'This hamburger has some zest. Wouldn\'t want to meet him in a dark ally',
            10, 15, 24, 85,
            '5px', '10px'),
        new Appetizer(
            'Taco',
            CharacterSubtype.CARNIVORE, 9.99,
            null,
            73, 49, 23, 58),
        new Entree(
            'Salmon',
            CharacterSubtype.CARNIVORE, 9.99,
            null,
            34, 57, 91, 45),
        new Appetizer(
            'Boneless Wings',
            CharacterSubtype.CARNIVORE, 9.99,
            null,
            73, 49, 23, 58),
        new Dessert(
            'Cake',
            CharacterSubtype.CARNIVORE, 9.99,
            null,
            73, 49, 23, 58),
        new Drink(
            'Pop',
            CharacterSubtype.HERBIVORE, 9.99,
            null,
            73, 49, 23, 58),
    ];

    public constructor() {
        this.characters.sort((a, b) => {
            const nameA = a.name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
    }
}

export class CharacterType {
    static readonly APPETIZER = 'Appetizer';
    static readonly DRINK = 'Drink';
    static readonly ENTREE = 'Entrée';
    static readonly DESSERT = 'Dessert';
}

export class CharacterSubtype {
    static readonly CARNIVORE = 'Carnivore';
    static readonly HERBIVORE = 'Herbivore';
}

export abstract class Character {

    public nameLowercase = '';
    public priceString = '';
    public storyShort = '';

    public constructor(
        public name: string,
        public subtype: string,
        public price: number,
        public story: string,
        public attributeOne: number,
        public attributeTwo: number,
        public attributeThree: number,
        public attributeFour: number,
        public avatarHorizontalOffset: string = '0px',
        public avatarVerticalOffset: string = '0px'
    ) {
        this.nameLowercase = name.toLowerCase().replace(/\s/g, '_');
        this.priceString = '$' + price.toFixed(2);
        this.storyShort = story != null ? story.slice(0, 100).trim() + '...' : null;
    }

    get iconUrl(): string {
        return '/assets/icons/' + this.typeSafe.toLowerCase() + '-' + this.subtype.toLowerCase() + '.svg';
    }

    get avatarUrl(): string {
        return '/assets/characters/avatar/' + this.nameLowercase + '.png';
    }

    get imageUrl(): string {
        return '/assets/characters/' + this.nameLowercase + '.svg';
    }

    abstract get type(): string;

    abstract get typeSafe(): string;

    abstract get descriptorOne(): string;

    abstract get descriptorTwo(): string;

    abstract get descriptorThree(): string;

    abstract get descriptorFour(): string;
}

export class Appetizer extends Character {
    get type(): string {
        return CharacterType.APPETIZER;
    }

    get typeSafe(): string {
        return this.type;
    }

    get descriptorOne(): string {
        return 'Descriptor One';
    }

    get descriptorTwo(): string {
        return 'Descriptor Two';
    }

    get descriptorThree(): string {
        return 'Descriptor Three';
    }

    get descriptorFour(): string {
        return 'Descriptor Four';
    }
}

export class Drink extends Character {
    get type(): string {
        return CharacterType.DRINK;
    }

    get typeSafe(): string {
        return this.type;
    }

    get descriptorOne(): string {
        return 'Descriptor One';
    }

    get descriptorTwo(): string {
        return 'Descriptor Two';
    }

    get descriptorThree(): string {
        return 'Descriptor Three';
    }

    get descriptorFour(): string {
        return 'Descriptor Four';
    }
}

export class Entree extends Character {
    get type(): string {
        return CharacterType.ENTREE;
    }

    get typeSafe(): string {
        return 'Entree';
    }

    get descriptorOne(): string {
        return 'Descriptor One';
    }

    get descriptorTwo(): string {
        return 'Descriptor Two';
    }

    get descriptorThree(): string {
        return 'Descriptor Three';
    }

    get descriptorFour(): string {
        return 'Descriptor Four';
    }
}

export class Dessert extends Character {
    get type(): string {
        return CharacterType.DESSERT;
    }

    get typeSafe(): string {
        return this.type;
    }

    get descriptorOne(): string {
        return 'Descriptor One';
    }

    get descriptorTwo(): string {
        return 'Descriptor Two';
    }

    get descriptorThree(): string {
        return 'Descriptor Three';
    }

    get descriptorFour(): string {
        return 'Descriptor Four';
    }
}
