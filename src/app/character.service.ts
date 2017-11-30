import {Injectable} from '@angular/core';

@Injectable()
export class CharacterService {
    readonly characters: Character[] = [
        new Entree(
            'Hermberg',
            CharacterSubtype.CARNIVORE, 10.99,
            '½ pounder with lettuce, cheese and tomato. This hamburger has some zest. Wouldn\'t want to meet him in a dark ally',
            10, 15, 24, 85,
            '5px', '10px'),
        new Entree(
            'Sampson',
            CharacterSubtype.CARNIVORE, 14.99,
            'Wild Alaskan Salmon seared on the grill. Fishy and strong and lip-smacking. Be careful this salmon might slap you upside the head.',
            34, 57, 91, 45),
        new Entree(
            'Virgil',
            CharacterSubtype.HERBIVORE, 11.99,
            'Lettuce, cheese, tomato and creamy Caesar dressing in a grilled Italian Flatbread. This veggie wrap may end up in pieces…..',
            34, 57, 91, 45),
        new Entree(
            'Sal',
            CharacterSubtype.HERBIVORE, 9.99,
            '¼ iceberg lettuce with choice of vegetables and dressing. Crunchy and crisp. This salad will toss you in a headlock.',
            34, 57, 91, 45),
        new Entree(
            'Stake',
            CharacterSubtype.CARNIVORE, 13.99,
            'Grilled T-Bone steak. This steak is tough and meaty. Make sure you watch your back.',
            34, 57, 91, 45),
        new Appetizer(
            'Tacho',
            CharacterSubtype.CARNIVORE, 10.99,
            'Beef, lettuce, cheese, tomatoes and sour cream in a crunchy shell. Very self-contained. This taco only protects his own.',
            73, 49, 23, 58),
        new Appetizer(
            'B.C. Winge',
            CharacterSubtype.CARNIVORE, 9.99,
            'Choice of honey BBQ, spicy sweet Asian chili or spicy buffalo. No matter which seasoned and savory combination you pick, these boneless wings travel/attack in a pack.',
            73, 49, 23, 58),
        new Appetizer(
            'S. Archibite',
            CharacterSubtype.HERBIVORE, 8.99,
            'Shredded mozzarella, Parmesan, artichokes, spinach, cream cheese, sour cream in crescent bowls. A splendid mix of gooey, cheesy, firm and flakey. Watch your step/Watch out/Be careful, you never know what you will get.',
            73, 49, 23, 58),
        new Dessert(
            'Choco Cak',
            CharacterSubtype.CARNIVORE, 6.99,
            'Moist chocolate cake separated by rich chocolate ganache. Although very moist and chewy, this cake will hit you like a lead pipe.',
            73, 49, 23, 58),
        new Dessert(
            'K.L.P.',
            CharacterSubtype.HERBIVORE, 6.99,
            'A tart pie with a graham cracker crust topped with whipped cream. This pie is bittersweet. It will put you in your place.',
            73, 49, 23, 58),
        new Drink(
            'Sado',
            CharacterSubtype.HERBIVORE, 2.99,
            'Carbonated water, sweetener and natural flavoring served with ice cubes. Fizzy and exuberant. Beware, this soda will pop you in the mouth!',
            73, 49, 23, 58),
        new Drink(
            'Bier',
            CharacterSubtype.HERBIVORE, 4.99,
            'Pale lager beer with 5% alcohol by volume. Hoppy with a little extra zing. Stay out of the way because this beer could knock you on your keister.',
            73, 49, 23, 58),
        new Drink(
            'Weinstein',
            CharacterSubtype.HERBIVORE, 5.99,
            'Red wine and chopped fruit with a splash of orange juice. Full-bodied and refreshing. This wine has a sweet side but don’t let that fool you.',
            73, 49, 23, 58),
        new Drink(
            'Ye Olde One',
            CharacterSubtype.HERBIVORE, 6.99,
            'Sugar and bitters, with whiskey and a twist of citrus rind. Aged to perfection. This cocktail will wrap you up and spit you out.',
            73, 49, 23, 58),
        new Drink(
            'Le Slush',
            CharacterSubtype.HERBIVORE, 3.99,
            'Lemonade blended with ice and fruit puree.  Citrusy, cool and icy. This lemonade will freeze your melon.',
            73, 49, 23, 58),
        new Drink(
            'Marge',
            CharacterSubtype.HERBIVORE, 6.99,
            'Tequila, triple sec and lime juice; salted to perfection around the rim. This Margarita is tangy and will blow you to the moon/blow your mind. (Tang is the juice for astronauts)\n',
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

    public constructor(public name: string,
                       public subtype: string,
                       public price: number,
                       public story: string,
                       public attributeOne: number,
                       public attributeTwo: number,
                       public attributeThree: number,
                       public attributeFour: number,
                       public avatarHorizontalOffset: string = '0px',
                       public avatarVerticalOffset: string = '0px') {
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
