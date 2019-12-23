import { Injectable } from '@angular/core';
import { CoreService } from '../core/core.service';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class MenuService extends CoreService {

  constructor(http: HttpClient) {
    super('menu', http);
  }

  getTodaysMenu() {
    const todaysDate = moment().format('YYYY-MM-DD');
    return this.get(`${this.endpoint}/?date=${todaysDate}`);
  }

}
