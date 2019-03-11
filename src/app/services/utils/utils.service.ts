import { Injectable } from '@angular/core';
import { EXCLUDED_IMAGES } from 'src/app/repo/repo';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  ///////////////////////////////////
  /// Return a random number
  ///////////////////////////////////
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomInt;

    randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

    for (let i = 0; i < EXCLUDED_IMAGES.length; i++) {
      if (randomInt === EXCLUDED_IMAGES[i]) {
        randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
      }
    }

    return randomInt;
  }

  ///////////////////////////////////
  //// Select random item from array
  ///////////////////////////////////
  selectRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
}
