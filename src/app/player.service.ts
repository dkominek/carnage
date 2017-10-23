import {Injectable} from '@angular/core';
import {Character} from './character.service';

@Injectable()
export class PlayerService {

    playerOne: Player;
    playerTwo: Player;
    playerThree: Player;
    playerFour: Player;
    playerFive: Player;

    constructor() {
    }

    addPlayer(player: Player, index: number) {
        if (index < 1 || index > 5) {
            return;
        }
        if (this.getPlayer(index) != null) {

        } else {
            throw new Error('Cannot add player in slot ' + index + '. Slot is already filled.');
        }
    }

    getPlayer(index: number) {
        if (index < 1 || index > 5) {
            return;
        }

        switch (index) {
            case 1:
                return this.playerOne;
            case 2:
                return this.playerTwo;
            case 3:
                return this.playerThree;
            case 4:
                return this.playerFour;
            case 5:
                return this.playerFive;
        }
    }

    removePlayer(index: number) {
        if (index < 1 || index > 5) {
            return;
        }

        if (this.getPlayer(index) != null) {
            switch (index) {
                case 1:
                    this.playerOne = null;
                    break;
                case 2:
                    this.playerTwo = null;
                    break;
                case 3:
                    this.playerThree = null;
                    break;
                case 4:
                    this.playerFour = null;
                    break;
                case 5:
                    this.playerFive = null;
                    break;
            }
        } else {
            throw new Error('Cannot remove player in slot ' + index + '. Slot is empty.');
        }
    }

    getShortName(player: Player) {
        return player.name.slice(0, 2);
    }
}

export class Player {

    readonly cart: Cart = new Cart();

    private _name = '';
    set name(value: string) {
        this._name = value;
        this._shortName = value.slice(0, 2);
    }
    get name(): string {
        return this._name;
    }

    private _shortName = '';
    get shortName(): string {
        return this._shortName;
    }

    constructor(
        name: string
    ) {
        this.name = name;
    }

    setName(name: string) {}
}

export class Cart {

    readonly items: CartItem[] = [];
    total = 0;

    private calculateTotal() {
        this.total = 0;
        this.items.forEach((item) => {
            this.total += item.character.price * item.quantity;
        });
    }

    addCharacter(character: Character, quantity: number) {
        if (quantity < 1) {
            throw new Error('Cannot add a character with zero quantity.');
        }

        const added = this.items.some((item, index) => {
            if (item.character === character) {
                item.quantity += quantity;
                return true;
            }
            return false;
        });

        if (!added) {
            this.items.push(new CartItem(character, quantity));
        }
        this.calculateTotal();
    }

    setCharacterQuantity(character: Character, quantity: number) {
        this.items.some((item, index) => {
            if (item.character === character) {
                item.quantity = quantity;
                if (item.quantity <= 0) {
                    this.items.splice(index, 1);
                }
                this.calculateTotal();
                return true;
            }
            return false;
        });
    }

    removeCharacter(character: Character, quantity: number) {
        this.items.some((item, index) => {
            if (item.character === character) {
                item.quantity -= quantity;
                if (item.quantity <= 0) {
                    this.items.splice(index, 1);
                }
                this.calculateTotal();
                return true;
            }
            return false;
        });
    }
}

export class CartItem {

    get character(): Character {
        return this._character;
    }

    constructor(
        private _character: Character,
        public quantity: number
    ) {}
}
