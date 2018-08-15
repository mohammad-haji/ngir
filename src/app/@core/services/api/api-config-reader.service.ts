/**
 * Created by Mohammad.hajiaghazadeh on 8/15/2018
 */
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {loadJSON} from '../../utils/load-sync';

@Injectable()
export class ApiConfigReaderService {
  ngxApiConfig: any;

  constructor(private httpClient: HttpClient) {
    this.ngxApiConfig = loadJSON('./assets/config/api/api-config.json');
  }

  getConfig() {
    return this.ngxApiConfig;
  }
}
