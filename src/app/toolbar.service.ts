import {Injectable} from '@angular/core';
import {Router, Event, NavigationStart} from '@angular/router';
import {Subject} from 'rxjs/Subject';

export interface IButton {
    text: Subject<string>|string;
    type: Subject<ButtonType>|ButtonType;
    callback: () => void;
    icon?: Subject<string>|string;
    iconPosition?: Subject<ButtonIconPosition>|ButtonIconPosition;
    disabled?: Subject<boolean>|boolean;
}

export enum ButtonType {
    Primary,
    Secondary
}

export enum ButtonIconPosition {
    Left,
    Center,
    Right
}

@Injectable()
export class ToolbarService {

    private observables: Subject<any>[] = [];

    buttonCount = 0;
    primaryButtons: IButton[] = [];
    secondaryButtons: IButton[] = [];

    constructor(router: Router) {
        router.events.subscribe((event: Event) => {
            if (event instanceof NavigationStart) {
                this.primaryButtons = [];
                this.secondaryButtons = [];
                this.buttonCount = 0;

                this.observables.forEach((ob) => {
                    ob.complete();
                });
                this.observables = [];
            }
        });
    }

    public addButton(button: IButton) {
        if (button.icon == null) {
            button.icon = null;
        }
        if (button.iconPosition == null) {
            button.iconPosition = ButtonIconPosition.Left;
        }
        if (button.disabled == null) {
            button.disabled = false;
        }

        if (button.type === ButtonType.Primary) {
            this.primaryButtons.push(button);
        } else if (button.type === ButtonType.Secondary) {
            this.secondaryButtons.push(button);
        }

        if (button.disabled instanceof Subject) {
            this.observables.push(button.disabled);
            button.disabled.subscribe((value) => {
                button.disabled = value;
            });
        }

        if (button.type instanceof Subject) {
            this.observables.push(button.type);
            button.type.subscribe((value) => {
                button.type = value;
            });
        }

        if (button.text instanceof Subject) {
            this.observables.push(button.text);
            button.text.subscribe((value) => {
                button.text = value;
            });
        }

        if (button.icon instanceof Subject) {
            this.observables.push(button.icon);
            button.icon.subscribe((value) => {
                button.icon = value;
            });
        }

        if (button.iconPosition instanceof Subject) {
            this.observables.push(button.iconPosition);
            button.iconPosition.subscribe((value) => {
                button.iconPosition = value;
            });
        }

        this.buttonCount = this.primaryButtons.length + this.secondaryButtons.length;
    }
}
