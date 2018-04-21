import {Pipe, PipeTransform} from "@angular/core";
/*
* Convert english number to persian number
* takes english string
* Usage:
*   value | enToFaNumber
* Example:
*   {{EnglishNumber|enToFaNumber}}
 */

@Pipe({name: 'enToFaNumber'})
export class EnToFaNumberPipe implements PipeTransform{
  transform(faNum: string): string{
    if (faNum === undefined || faNum === null)
      return;
    let enNum: string = "",
      symbolMap = {
      '1' : '۱',
      '2' : '۲',
      '3' : '۳',
      '4' : '۴',
      '5' : '۵',
      '6' : '۶',
      '7' : '۷',
      '8' : '۸',
      '9' : '۹',
      '0' : '۰'
    };
    faNum = faNum.toString();
    let faNumLen = faNum.length, i = 0;
    for (i; i < faNumLen; i++)
      if (symbolMap[faNum[i]])
        enNum += symbolMap[faNum[i]];
      else
        enNum += faNum[i];
    return enNum;
  }
}
