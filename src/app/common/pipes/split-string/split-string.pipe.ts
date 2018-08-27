import {Pipe, PipeTransform} from '@angular/core';
@Pipe({name: 'splitString'})
export class SplitStringPipe implements PipeTransform {
  transform(str: string, len: number = 10): string {
    if (!str)
      return;
    return str.slice(0, len) + (str.length > len ? '...' : '');
  }
}
