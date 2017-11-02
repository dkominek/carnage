import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class MenuService {

  visibilityChanged = new EventEmitter<boolean>();

  constructor() { }

  show() {
    this.visibilityChanged.emit(true);
  }

  hide() {
      this.visibilityChanged.emit(false);
  }
}
