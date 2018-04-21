import {Injectable} from '@angular/core';
import {BaseRequestOptions, RequestOptions} from '@angular/http';

@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {

  constructor() {
    super();
    console.log('angular interceptor');
    this.url = 'http://test.com/';
    // Set the default 'Content-Type' header
    this.headers.set('Content-Type', 'application/json');
  }
}

export const requestOptionsProvider = {provide: RequestOptions, useClass: DefaultRequestOptions};
