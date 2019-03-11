import { Injectable } from '@angular/core';
import { LineService } from '../line/line.service';
import { UtilsService } from '../utils/utils.service';


@Injectable({
  providedIn: 'root'
})
export class PoemService {

   lines = [];
  constructor(
    public _lineService: LineService,
    public _utilsService: UtilsService
  ) { }

  getPoem() {
    for (let i = 0; i < 5; i++) {
      this.lines[i] = this._lineService.getLine();
      this._lineService.emptyLine();
    }
    return this.lines;
  }
}
