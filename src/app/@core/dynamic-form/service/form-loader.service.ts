/**
 * Created by Mohammad.hajiaghazadeh on 8/13/2018
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FormLoaderService implements Resolve<Observable<any>> {
  private JSON_DIR = '/assets/data/forms/';
  public requestList: any = [];

  constructor(private httpClient: HttpClient) {

  }

  /**
   * load form from forms directory
   * @param form
   * @returns {Observable<Object>}
   */
  load(form) {
    return this.httpClient.get(`${this.JSON_DIR}${form.path}.form.schema.json`);
  }

  /**
   * resolve forms
   * @param {ActivatedRouteSnapshot} route
   * @returns {any}
   */
  resolve(route: ActivatedRouteSnapshot) {
    Object.keys(route.data.forms).forEach((formKey) => {
      this.requestList.push(this.load(route.data.forms[formKey]));
    });

    return Observable.forkJoin(this.requestList).map(results => {
      Object.keys(route.data.forms).forEach((formKey, index) => {
        route.data.forms[formKey].schema = results[index];
      });
      delete route.data.form;
      return {};
    }).catch(err => Observable.throw(err));
  }
}
