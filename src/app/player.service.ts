import {EventEmitter, Injectable} from '@angular/core';
import {Character} from './character.service';
import {environment} from '../environments/environment';

@Injectable()
export class PlayerService {

    private _playerOne: Player;
    get playerOne(): Player {
        return this._playerOne;
    }
    private _playerTwo: Player;
    get playerTwo(): Player {
        return this._playerTwo;
    }
    private _playerThree: Player;
    get playerThree(): Player {
        return this._playerThree;
    }
    private _playerFour: Player;
    get playerFour(): Player {
        return this._playerFour;
    }
    private _playerFive: Player;
    get playerFive(): Player {
        return this._playerFive;
    }

    private _activePlayer = 0;
    get activePlayerIndex(): number {
        return this._activePlayer;
    }
    public activePlayerChanged: EventEmitter<Player> = new EventEmitter<Player>();

    constructor() {
        if (environment.production === false) {
            this.addPlayer(new Player('Test Customer'), 1);
        }
    }

    addPlayer(player: Player, index: number) {
        if (index < 1 || index > 5) {
            return;
        }
        if (this.getPlayer(index) == null) {
            switch (index) {
                case 1:
                    this._playerOne = player;
                    break;
                case 2:
                    this._playerTwo = player;
                    break;
                case 3:
                    this._playerThree = player;
                    break;
                case 4:
                    this._playerFour = player;
                    break;
                case 5:
                    this._playerFive = player;
                    break;
                default:
                    throw new Error('Invalid player index: ' + index);
            }
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
                return this._playerOne;
            case 2:
                return this._playerTwo;
            case 3:
                return this._playerThree;
            case 4:
                return this._playerFour;
            case 5:
                return this._playerFive;
            default:
                throw new Error('Invalid player index: ' + index);
        }
    }

    removePlayer(index: number) {
        if (index < 1 || index > 5) {
            return;
        }

        if (this.getPlayer(index) != null) {
            switch (index) {
                case 1:
                    this._playerOne = null;
                    break;
                case 2:
                    this._playerTwo = null;
                    break;
                case 3:
                    this._playerThree = null;
                    break;
                case 4:
                    this._playerFour = null;
                    break;
                case 5:
                    this._playerFive = null;
                    break;
                default:
                    throw new Error('Invalid player index: ' + index);
            }
        }
    }

    getActivePlayer(): Player|null {
        switch (this._activePlayer) {
            case 1:
                return this._playerOne;
            case 2:
                return this._playerTwo;
            case 3:
                return this._playerThree;
            case 4:
                return this._playerFour;
            case 5:
                return this._playerFive;
            default:
                return null;
        }
    }

    setActivePlayer(index: number) {
        if (index < 1 || index > 5) {
            throw new Error('Cannot set active player to ' + index + '. Active player must be between 1 and 5.');
        }

        let activePlayer = null;

        switch (index) {
            case 1:
                activePlayer = this.playerOne;
                break;
            case 2:
                activePlayer = this.playerTwo;
                break;
            case 3:
                activePlayer = this.playerThree;
                break;
            case 4:
                activePlayer = this.playerFour;
                break;
            case 5:
                activePlayer = this.playerFive;
                break;
            default:
                throw new Error('Invalid player index: ' + index);
        }

        if (activePlayer == null) {
            throw new Error('Cannot set active player to ' + index + '. The player does not exist.');
        }

        this._activePlayer = index;
        this.activePlayerChanged.emit(this.getActivePlayer());
    }

    unsetActivePlayer() {
        this._activePlayer = 0;
        this.activePlayerChanged.emit(this.getActivePlayer());
    }
}

export class Player {

    readonly cart: Cart = new Cart();

    private _name = '';
    set name(value: string) {
        this._name = value.trim();
        this.setShortName();
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

    private setShortName() {
        let name = this._name.replace(/[^A-Za-z0-9\s._\-]/g, '');
        const words = name.split(/(?=[A-Z])|(?:[\s._\-])/g).filter(n => n);
        name = name.replace(/[\s._\-]/g, '');
        if (words.length >= 2 && words[0].length > 0 && words[1].length > 0) {
            this._shortName = words[0].slice(0, 1).toUpperCase() + words[1].slice(0, 1).toLowerCase();
        } else if (name.length >= 2) {
            this._shortName = name.slice(0, 1).toUpperCase() + name.slice(1, 2).toLowerCase();
        } else if (name.length === 1) {
            this._shortName = name.slice(0, 1).toUpperCase() + '-';
        } else {
            this._shortName = '--';
        }
    }
}

export class Cart {

    readonly items: CartItem[] = [];
    totalPrice = 0;
    totalQuantity = 0;

    private calculateTotal() {
        this.totalPrice = 0;
        this.totalQuantity = 0;
        this.items.forEach((item) => {
            this.totalPrice += item.character.price * item.quantity;
            this.totalQuantity += item.quantity;
        });
    }

    addCharacter(character: Character, quantity: number = 1) {
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
