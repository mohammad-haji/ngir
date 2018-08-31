/**
 * Created by Mohammad.hajiaghazadeh on 8/15/2018
 */
import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Rx";
import {ApiConfigReaderService} from "./api-config-reader.service";
import {ApiDataCleanerService} from "./api-data-cleaner.service";

@Injectable()
export class ApiDataProviderService {
  entityKey: string = '';
  apiConfig: any;
  regexIdInPath = /\:id/;

  constructor(private httpClient: HttpClient,
              private apiConfigReaderService: ApiConfigReaderService,
              private apiDataCleanerService: ApiDataCleanerService) {
    this.apiConfig = this.apiConfigReaderService.getConfig();
  }

  private getApi(url: string, id?: any): string{
    if(this.regexIdInPath.test(url)){
      return url.replace(this.regexIdInPath, id);
    }else{
      return url;
    }
  }

  createApi(entityKey: string) {
    this.entityKey = entityKey;
    return this;
  }

  getAll(id?: any): Observable<any> {
    if (this.isMethodConfigExists) {
      return this.httpClient.get(this.getApi(this.apiConfig[this.entityKey].getAll.url, id));
    }
  }

  getById(id: any ):Observable<any> {
    if (this.isMethodConfigExists) {
      return this.httpClient.get(`${this.apiConfig[this.entityKey].getById.url}/${id}`);
    }
  }

  find(): Observable<any> {
    if (this.isMethodConfigExists) {
      return this.httpClient.get(this.apiConfig[this.entityKey].find.url);
    }
  }

  create(payload: any): Observable<any> {
    if (this.isMethodConfigExists) {
      // const reqPayload = this.apiDataCleanerService.cleanForCreate(this.apiConfig[this.entityKey].create.model, payload);
      return this.httpClient.post(this.apiConfig[this.entityKey].create.url, payload);
    }
  }

  update(payload: any, id: any): Observable<any> {
    if (this.isMethodConfigExists) {
      return this.httpClient.put(this.getApi(this.apiConfig[this.entityKey].update.url, id), payload);
    }
  }

  delete(id: any): Observable<any> {
    if (this.isMethodConfigExists) {
      return this.httpClient.delete(this.getApi(this.apiConfig[this.entityKey].delete.url, id));
    }
  }

  isMethodConfigExists(methodName: string) {
    return this.entityKey[methodName]
  }
}
