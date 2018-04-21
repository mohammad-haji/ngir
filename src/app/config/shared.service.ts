import {Injectable} from '@angular/core';
import {Subject, Observable, Observer} from 'rxjs';
import {APP_CONFIG_CONST} from "./app-config.const";
// import {AppService} from "../app.service";
declare var $: any;
declare var _: any;
@Injectable()
export class SharedService {
  public userConfig: Subject<any>;
  public isRegisterd: any = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).registered : false;
  public userRegisterd: Subject<any>;
  public loading;
  public loadingObserver: Subject<any>;
  public config: any;
  public states: any;
  public stateList: any;
  public isManagementEnable: Subject<any>;

  constructor() {
    this.userRegisterd = new Subject();

    this.loadingObserver = new Subject();
    this.userConfig = new Subject();
    this.states = new Subject();
    this.isManagementEnable = new Subject();
  }

  setUserRegistrationStatus(status) {
    this.isRegisterd = status;
    this.userRegisterd.next(status);
  }

  setUserConfig(_config: any) {
    this.config = _config;
    this.userConfig.next(this.config);
  }


  private buildDownloadFileUrl(fileId: string): string {
    return ((APP_CONFIG_CONST.api_prod_base_url ? APP_CONFIG_CONST.api_prod_base_url : APP_CONFIG_CONST.api_prod_base_url) + 'documents/download?documentId=' + fileId);
  }

  downloadFile(fileId: string, title: string): void {
    let link = document.createElement("a");
    link.download = title;
    link.href = this.buildDownloadFileUrl(fileId);
    link.click();
  }

  showLoading() {
    $($('div#appLoading.waiting-dialog')[0]).removeClass('elem-hidden');
    this.loadingObserver.next(true);
  }

  hideLoading() {
    $($('div#appLoading.waiting-dialog')[0]).addClass('elem-hidden');
    this.loadingObserver.next(false);
  }

}
