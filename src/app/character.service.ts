import {Injectable} from '@angular/core';

@Injectable()
export class CharacterService {
    readonly characters: Character[] = [
        new Entree(
            'Hermberg',
            CharacterSubtype.CARNIVORE, 10.99,
            'This hamburger has some zest. Wouldn\'t want to meet him in a dark ally',
            10, 15, 24, 85),
        new Appetizer(
            'Taco',
            CharacterSubtype.CARNIVORE, 9.99,
            null,
            73, 49, 23, 58),
        new Entree(
            'Salmon',
            CharacterSubtype.CARNIVORE, 9.99,
            'Lorem ipsum dolor sit amet, rebum temporibus neglegentur quo no, ei vis propriae percipit. Idque volumus vel ea, fabellas scripserit quo ad, ius ex accumsan scripserit. Phaedrum quaerendum nam ut, ius audire oblique argumentum ex. Summo albucius in pro, case fugit deterruisset at sit. Ex dicat iracundia adipiscing mei, semper consulatu intellegam eam te, vim quaeque incorrupte no.\n' +
            '\n' +
            'Eu augue voluptatibus eam. Inani mundi vim id. No mollis lucilius eum, idque ignota ius id, te natum nostrud iudicabit vim. Ei cetero ornatus est, quis quas etiam eum ad. Usu ceteros repudiare eloquentiam te, vim et doming nostrud propriae. Pri senserit referrentur adversarium et, at eos tollit recteque.\n' +
            '\n' +
            'Qui eu utinam pertinax liberavisse, his latine fabellas eloquentiam te. His ut inani novum scripta, has diam convenire te, delenit mandamus laboramus te per. Id amet minim pri, elit movet facilis vel eu. Eu sed appareat maluisset, aliquid convenire intellegebat duo no. Id tantas maluisset elaboraret sea. Eu delenit erroribus definiebas mel, sumo dico eu nec.\n' +
            '\n' +
            'Omnes definitiones vis ne. Ut diam tota mollis nam, commune copiosae ex usu. At viris praesent pri, eum illud perpetua ex. Id eos mentitum luptatum, eu ius error utinam conclusionemque. Tractatos democritum et sea. Cu usu reque debet maiestatis.\n' +
            '\n' +
            'Vis dolore civibus delectus no. Vim nonumes assentior at, cu qui prima viderer scribentur. Vis nobis recusabo convenire no, discere eruditi duo et. Cum ei utinam qualisque voluptaria, qui at amet salutandi, ius libris delicata iracundia ad. Ea ius mandamus appellantur, accusam electram his cu.',
            34, 57, 91, 45)
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

    public constructor(
        public name: string,
        public subtype: string,
        public price: number,
        public story: string,
        public attributeOne: number,
        public attributeTwo: number,
        public attributeThree: number,
        public attributeFour: number
    ) {}

    abstract get type(): string;

    abstract get descriptorOne(): string;

    abstract get descriptorTwo(): string;

    abstract get descriptorThree(): string;

    abstract get descriptorFour(): string;
}

export class Appetizer extends Character {
    get type(): string {
        return CharacterType.APPETIZER;
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
