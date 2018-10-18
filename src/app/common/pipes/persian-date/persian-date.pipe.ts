import {Pipe, PipeTransform} from "@angular/core";
import * as moment from 'moment-jalaali';

@Pipe({name: 'persianDate'})
export class PersianDatePipe implements PipeTransform {
  transform(date: any, format: string = "jYYYY/jM/jD"): string {
    if (!date)
      return;
    return moment(date).format(format);
  }
}
