import { Injectable } from "@angular/core";

@Injectable()
export class AppService{
  private pageData: any = {};
  constructor(){

  }

  setPageDate(data): void{
    this.pageData = data;
  }

  getPageData(){
    return this.pageData;
  }
}
