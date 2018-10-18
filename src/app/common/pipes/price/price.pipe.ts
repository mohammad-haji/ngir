/**
 * Created by Asus on 9/6/2018.
 */

import {Pipe, PipeTransform} from "@angular/core";
import {DecimalPipe} from "@angular/common";
// import {} from "@angular/common";

@Pipe({name: 'price'})
export class PricePipe implements PipeTransform{
  constructor(private decimalPipe: DecimalPipe){}
  transform(input: any): string {
    return this.decimalPipe.transform(input)  + ' تومان'
  }
}
