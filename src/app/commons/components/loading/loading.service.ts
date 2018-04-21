import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";

@Injectable()
export class LoadingService {
    public observer: Subject<any> = new Subject();
    show() {
      this.observer.next(true);
      console.log('shooooooo');
    }

    hide() {
      this.observer.next(false);
    }
}
