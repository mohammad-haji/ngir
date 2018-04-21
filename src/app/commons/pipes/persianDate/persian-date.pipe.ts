import {Pipe, PipeTransform} from "@angular/core";

declare var persianDate: any;

// TODO implement get format from user

@Pipe({name: 'persianDate'})

export class PersianDatePipe implements PipeTransform {
  transform(input: any): string {
    return new persianDate(new Date(parseInt(input))).format('YYYY/MM/DD');
  }
}
