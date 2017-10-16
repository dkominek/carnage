import {Injectable} from '@angular/core';

@Injectable()
export class CharacterService {
    readonly characters: Character[] = [
        new Entree('Hermberg', 'This hamberger has some zest. Wouldn\'t want to meet him in a dark ally', 10, 15, 24, 85)
    ];
}

export abstract class Character {

    public constructor(
        public name: string,
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
        return 'appetizer';
    }

    get descriptorOne(): string {
        throw new Error('Method not implemented.');
    }

    get descriptorTwo(): string {
        throw new Error('Method not implemented.');
    }

    get descriptorThree(): string {
        throw new Error('Method not implemented.');
    }

    get descriptorFour(): string {
        throw new Error('Method not implemented.');
    }
}

export class Drink extends Character {
    get type(): string {
        return 'drink';
    }

    get descriptorOne(): string {
        throw new Error('Method not implemented.');
    }

    get descriptorTwo(): string {
        throw new Error('Method not implemented.');
    }

    get descriptorThree(): string {
        throw new Error('Method not implemented.');
    }

    get descriptorFour(): string {
        throw new Error('Method not implemented.');
    }
}

export class Entree extends Character {
    get type(): string {
        return 'entree';
    }

    get descriptorOne(): string {
        return 'Saltiness';
    }

    get descriptorTwo(): string {
        return 'Saltiness';
    }

    get descriptorThree(): string {
        return 'Saltiness';
    }

    get descriptorFour(): string {
        return 'Saltiness';
    }
}

export class Dessert extends Character {
    get type(): string {
        return 'dessert';
    }

    get descriptorOne(): string {
        throw new Error('Method not implemented.');
    }

    get descriptorTwo(): string {
        throw new Error('Method not implemented.');
    }

    get descriptorThree(): string {
        throw new Error('Method not implemented.');
    }

    get descriptorFour(): string {
        throw new Error('Method not implemented.');
    }
}
