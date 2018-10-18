/**
 * Created by Asus on 9/6/2018.
 */

import {Component, OnInit} from "@angular/core";
import {QAService} from "./qa.service";
import * as _ from 'lodash';
@Component({
  selector: 'qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.scss']
})

export class QAComponent implements OnInit {
  qaList: any = [];
  selectedQA: any = {
    index: 0,
    title: '',
    qaList: []
  };

  constructor(private qaService: QAService) {
  }

  ngOnInit() {
    this.qaService.getQAList().subscribe((res: any)=> {
      this.qaList = res;
      this.selectedQA = _.first(res);
      this.selectedQA.index = 0;
    });
  }

  onQaClick(index): void {
    this.selectedQA = this.qaList[index];
    this.selectedQA.index = index;
  }

}
