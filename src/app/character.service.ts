import {Injectable} from '@angular/core';

@Injectable()
export class CharacterService {
    // tslint:disable:max-line-length
    readonly characters: Character[] = [
        new Entree(
            'Hermberg',
            CharacterSubtype.CARNIVORE, 10.99,
            '½ pounder with lettuce, cheese and tomato. This hamburger has some zest. Wouldn\'t want to meet him in a dark alley...',
            83, 57, 75, 94,
            '2%', '9%', '120%'),
        new Entree(
            'Sampson',
            CharacterSubtype.CARNIVORE, 14.99,
            'Wild Alaskan Salmon seared on the grill. Fishy and strong and lip-smacking. <br/> Be careful! this salmon might slap you upside the head!',
            13, 48, 72, 36,
            '-6%', '9%', '125%'),
        new Entree(
            'Virgil',
            CharacterSubtype.HERBIVORE, 11.99,
            'Lettuce, cheese, tomato and creamy Caesar dressing in a grilled Italian Flatbread. <br/> This veggie wrap may end up in piece...',
            53, 42, 16, 47,
            '-18%', '-8%', '155%'),
        new Entree(
            'Sal',
            CharacterSubtype.HERBIVORE, 9.99,
            '¼ iceberg lettuce wedge with choice of vegetables and dressing. Crunchy and crisp. This salad will toss you in a headlock.',
            19, 38, 7, 10,
            '1%', '6%', '120%'),
        new Entree(
            'Sven',
            CharacterSubtype.CARNIVORE, 13.99,
            'Grilled T-Bone steak. This steak is tough and meaty. Make sure you watch your back.',
            68, 52, 67, 79,
            '-6%', '6%', '140%'),
        new Entree(
            'Philbert',
            CharacterSubtype.CARNIVORE, 13.99,
            'Sliced sirloin, peppers, onions, mayo and provolone, on a hoagie roll. Watch out for this Philly Gangster - he will sneak attack when you least expect it.',
            23, 50, 78, 90,
            '-2%', '0%', '130%'),
        new Appetizer(
            'Theo',
            CharacterSubtype.CARNIVORE, 10.99,
            'Beef, lettuce, cheese, tomatoes and sour cream in a crunchy shell. Very self-contained. This taco only protects his own.',
            77, 61, 85, 58,
            '2%', '-6%', '140%'),
        new Appetizer(
            'B.C. Winge',
            CharacterSubtype.CARNIVORE, 9.99,
            'Choice of honey BBQ, spicy sweet Asian chili or spicy buffalo. No matter which seasoned and savory combination you pick, these boneless wings travel in a pack.',
            54, 62, 71, 65,
            '-7%', '-4%', '140%'),
        new Appetizer(
            'S. Archibite',
            CharacterSubtype.HERBIVORE, 8.99,
            'Shredded mozzarella, Parmesan, artichokes, spinach, cream cheese, sour cream in crescent bowls. A splendid mix of gooey, cheesy, firm and flakey. Watch your step, you never know what you will get.',
            34, 46, 57, 35,
            '-1%', '-6%', '125%'),
        new Dessert(
            'Caine',
            CharacterSubtype.HERBIVORE, 6.99,
            'Moist chocolate cake separated by rich chocolate ganache. Although very moist and chewy, this cake will hit you like a lead pipe.',
            90, 96, 63, 74,
            '5%', '0%', '110%'),
        new Dessert(
            'K.L.P.',
            CharacterSubtype.HERBIVORE, 6.99,
            'A tart pie with a graham cracker crust topped with whipped cream. This pie is bittersweet. It will put you in your place.',
            26, 27, 24, 38,
            '2%', '1%', '120%'),
        new Dessert(
            'Ignace',
            CharacterSubtype.HERBIVORE, 6.99,
            'Ice cream topped with chocolate syrup, whipped cream and a maraschino cherry. Although sweetened, this sundae will whip you into shape!',
            87, 80, 2, 8,
            '-15%', '-9%', '170%'),
        new Drink(
            'Sado',
            CharacterSubtype.HERBIVORE, 2.99,
            'Carbonated water, sweetener and natural flavoring served with ice cubes. <br/>Fizzy and exuberant. Beware, this soda will pop you in the mouth!',
            6, 32, 49, 96,
            '-12%', '3%', '150%'),
        new Drink(
            'Berit',
            CharacterSubtype.HERBIVORE, 4.99,
            'Pale lager beer with 5% alcohol by volume.  Hoppy with a little extra zing. Stay out of the way because this beer could knock you on your keister.',
            83, 51, 57, 89,
            '-13%', '-33%', '160%'),
        new Drink(
            'Sangrolina',
            CharacterSubtype.HERBIVORE, 5.99,
            'Red wine and chopped fruit with a splash of orange juice. Full-bodied and refreshing. This wine has a sweet side but don’t let that fool you.',
            91, 45, 53, 14,
            '-8%', '6%', '150%'),
        new Drink(
            'Ye Olde One',
            CharacterSubtype.HERBIVORE, 6.99,
            'Sugar and bitters, with whiskey and a twist of citrus rind. Aged to perfection. <br/>This cocktail will wrap you up and spit you out.',
            97, 62, 85, 74,
            '1%', '5%', '120%'),
        new Drink(
            'Le Slush',
            CharacterSubtype.HERBIVORE, 3.99,
            'Lemonade blended with ice and fruit puree. Citrusy, cool and icy. This lemonade will freeze your melon.',
            8, 15, 37, 18,
            '-15%', '-5%', '150%'),
        new Drink(
            'Marge',
            CharacterSubtype.HERBIVORE, 6.99,
            'Tequila, triple sec and lime juice; salted to perfection around the rim. This Margarita is tangy and will blow your mind.',
            94, 70, 81, 26,
            '-3%', '7%', '145%'),
    ];
    // tslint:enable:max-line-length

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

    static readonly SHORT_STORY_LENGTH = 250;

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
                       public avatarVerticalOffset: string = '0px',
                       public scaling: string = '120%') {
        this.nameLowercase = name.toLowerCase().replace(/\s/g, '_');
        this.priceString = '$' + price.toFixed(2);
        if (story.length > Character.SHORT_STORY_LENGTH) {
            this.storyShort = story != null ? story.slice(0, Character.SHORT_STORY_LENGTH).trim() + '...' : null;
        } else {
            this.storyShort = story;
        }
    }

    get iconUrl(): string {
        return '/assets/icons/' + this.typeSafe.toLowerCase() + '-' + this.subtype.toLowerCase() + '.svg';
    }

    get avatarUrl(): string {
        return '/assets/characters/avatar/' + this.nameLowercase + '.png';
    }

    get imageUrl(): string {
        return '/assets/characters/' + this.nameLowercase + '.png';
    }

    abstract get type(): string;

    abstract get typeSafe(): string;

    abstract get descriptorOneLeft(): string;

    abstract get descriptorOneRight(): string;

    abstract get descriptorTwoLeft(): string;

    abstract get descriptorTwoRight(): string;

    abstract get descriptorThreeLeft(): string;

    abstract get descriptorThreeRight(): string;

    abstract get descriptorFourLeft(): string;

    abstract get descriptorFourRight(): string;
}

export class Appetizer extends Character {
    get type(): string {
        return CharacterType.APPETIZER;
    }

    get typeSafe(): string {
        return this.type;
    }

    get descriptorOneLeft(): string {
        return 'Mild';
    }

    get descriptorOneRight(): string {
        return 'Zesty';
    }

    get descriptorTwoLeft(): string {
        return 'Sweet';
    }

    get descriptorTwoRight(): string {
        return 'Spicy';
    }

    get descriptorThreeLeft(): string {
        return 'Cold';
    }

    get descriptorThreeRight(): string {
        return 'Warm';
    }

    get descriptorFourLeft(): string {
        return 'Light';
    }

    get descriptorFourRight(): string {
        return 'Heavy';
    }
}

export class Drink extends Character {
    get type(): string {
        return CharacterType.DRINK;
    }

    get typeSafe(): string {
        return this.type;
    }

    get descriptorOneLeft(): string {
        return 'Non-alcoholic';
    }

    get descriptorOneRight(): string {
        return 'Alcoholic';
    }

    get descriptorTwoLeft(): string {
        return 'Sweet';
    }

    get descriptorTwoRight(): string {
        return 'Sour';
    }

    get descriptorThreeLeft(): string {
        return 'Weak';
    }

    get descriptorThreeRight(): string {
        return 'Strong';
    }

    get descriptorFourLeft(): string {
        return 'Flat';
    }

    get descriptorFourRight(): string {
        return 'Bubbly';
    }
}

export class Entree extends Character {
    get type(): string {
        return CharacterType.ENTREE;
    }

    get typeSafe(): string {
        return 'Entree';
    }

    get descriptorOneLeft(): string {
        return 'Mild';
    }

    get descriptorOneRight(): string {
        return 'Zesty';
    }

    get descriptorTwoLeft(): string {
        return 'Sweet';
    }

    get descriptorTwoRight(): string {
        return 'Spicy';
    }

    get descriptorThreeLeft(): string {
        return 'Cold';
    }

    get descriptorThreeRight(): string {
        return 'Warm';
    }

    get descriptorFourLeft(): string {
        return 'Light';
    }

    get descriptorFourRight(): string {
        return 'Heavy';
    }
}

export class Dessert extends Character {
    get type(): string {
        return CharacterType.DESSERT;
    }

    get typeSafe(): string {
        return this.type;
    }

    get descriptorOneLeft(): string {
        return 'Tart';
    }

    get descriptorOneRight(): string {
        return 'Sweet';
    }

    get descriptorTwoLeft(): string {
        return 'Fruity';
    }

    get descriptorTwoRight(): string {
        return 'Sugary';
    }

    get descriptorThreeLeft(): string {
        return 'Cold';
    }

    get descriptorThreeRight(): string {
        return 'Warm';
    }

    get descriptorFourLeft(): string {
        return 'Light';
    }

    get descriptorFourRight(): string {
        return 'Heavy';
    }
}
