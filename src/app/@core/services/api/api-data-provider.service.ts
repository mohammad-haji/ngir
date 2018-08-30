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

  createApi(entityKey: string) {
    this.entityKey = entityKey;
    return this;
  }

  getAll(id?: any): Observable<any> {
    if (this.isMethodConfigExists) {
      if(this.regexIdInPath.test(this.apiConfig[this.entityKey].getAll.url)){
        return this.httpClient.get(this.apiConfig[this.entityKey].getAll.url
          .replace(this.regexIdInPath, id));
      }
      return this.httpClient.get(this.apiConfig[this.entityKey].getAll.url);
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
      const reqPayload = this.apiDataCleanerService.cleanForCreate(this.apiConfig[this.entityKey].create.model, payload);
      return this.httpClient.post(this.apiConfig[this.entityKey].create.url, reqPayload);
    }
  }

  update(): Observable<any> {
    if (this.isMethodConfigExists) {
      return this.httpClient.get(this.apiConfig[this.entityKey].update.url);
    }
  }

  delete(): Observable<any> {
    if (this.isMethodConfigExists) {
      return this.httpClient.get(this.apiConfig[this.entityKey].delete.url);
    }
  }

  isMethodConfigExists(methodName: string) {
    return this.entityKey[methodName]
  }
}
