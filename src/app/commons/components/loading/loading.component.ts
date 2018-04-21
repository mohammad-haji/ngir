import {Component, OnInit} from "@angular/core";
import {LoadingService} from "./loading.service";
import {SharedService} from "../../../config/shared.service";

@Component({
  selector: 'loading',
  templateUrl: 'loading.component.html',
  styleUrls: ['loading.component.css']
})

export class LoadingComponent implements OnInit {
  hideLoading: Boolean = true;

  constructor(public loadingService: LoadingService, public sharedService: SharedService) {
    this.sharedService.loadingObserver.subscribe(isShow=> {
      this.showHide(isShow)
    });
  }

  ngOnInit() {
    this.loadingService.observer.subscribe(isShow=>this.showHide(isShow));
  }


  public showHide(hide: boolean) {
    this.hideLoading = !hide;
  }
}
