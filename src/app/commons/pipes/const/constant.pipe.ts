import {Pipe, PipeTransform} from "@angular/core";
import {APP_CONST} from "./app.constant";
@Pipe({name: 'constPipe'})
export class ConstPipe implements PipeTransform {
    transform(input: string, key: string): string {
        return APP_CONST[key][input] ? APP_CONST[key][input] : input;
    }
}
