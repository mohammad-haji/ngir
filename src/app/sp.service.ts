import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class SPService{
  private PAGES_DIR = '/assets/data/pages';
  private pageSchema: any = {};
  constructor(private http: HttpClient){

  }

  private getFilePath(entity, component): string {
    return `${entity.substr(0, entity.length-1)}-${component}.page.json`;
  }

  setPageSchema(data): void{
    this.pageSchema = data;
  }

  load(type, component, entity): Observable<any>{
    return this.http.get(`${this.PAGES_DIR}/${type}/${entity}/${this.getFilePath(entity, component)}`);
  }

  getPageSchema(type, component, entity){
    return this.load(type, component, entity);
  }
}
