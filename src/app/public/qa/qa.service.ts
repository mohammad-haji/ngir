import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable()
export  class QAService{
  constructor(private httpClient: HttpClient){

  }

  getQAList(): Observable<any>{
    return this.httpClient.get('/assets/data/qa.json');
  }
}
