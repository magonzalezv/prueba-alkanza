import { Component } from '@angular/core';
import { PoemService } from './services/service.index';
import { LineService } from './services/line/line.service';
import { UtilsService } from './services/utils/utils.service';
import { IMG } from './repo/repo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  poems = [];
 constructor(
   public _poemService: PoemService,
   public _utilsService: UtilsService

 ) {
  }

  show: boolean;
  img = '';

  loadPoem() {
    this.poems = this._poemService.getPoem();
    this.img = IMG + this._utilsService.getRandomInt(1, 1084);
    this.show = !this.show;
  }

  hidePoem() {
    this.show = !this.show;
  }
}
