import { Injectable, EventEmitter } from "@angular/core";
import { Subject, BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class NgxSchemaPageService{
  onAction$: Subject<any> = new Subject();
  constructor(){}
}
