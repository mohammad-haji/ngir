import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class HomeService {
  constructor(private httpClient: HttpClient) {
  }

  getLatestProductList(): Observable<any> {
    return this.httpClient.get('/public-products');
  }
}
