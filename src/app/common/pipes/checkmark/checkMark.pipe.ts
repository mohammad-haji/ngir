import {Pipe, PipeTransform} from "@angular/core";
/*
 * Convert Boolean value to checkmark
 * @param {boolean} _input
 * Usage:
 *   value | checkMark
 * Example:
 *   {{isChecked|checkMark}}
 */
@Pipe({name: 'checkMark'})
export class CheckMarkPipe implements PipeTransform {
  transform(_input: boolean):string {
    if(_input)
      return '\u2713';
    else
      return '\u2718';
  }
}
