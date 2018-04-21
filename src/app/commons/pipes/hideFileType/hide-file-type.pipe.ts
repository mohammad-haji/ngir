import { Pipe, PipeTransform } from '@angular/core';

declare var _: any;

@Pipe({ name: 'hideFileType' })
export class HideFileTypePipe implements PipeTransform {
    transform(fileName: string): string {
        return _.first(fileName.split('.'));
    }
}
