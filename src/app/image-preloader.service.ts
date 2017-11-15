import { Injectable } from '@angular/core';

@Injectable()
export class ImagePreloaderService {

  private images: any[] = [];

  constructor() { }

    public preload(...images: string[]) {
        for (let i = 0; i < images.length; i++) {
            this.images[i] = new Image();
            this.images[i].src = images[i];
        }
    }

}
