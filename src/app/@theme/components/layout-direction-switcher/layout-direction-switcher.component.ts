import {Component, OnDestroy, Input, OnInit} from '@angular/core';
import {NbLayoutDirectionService, NbLayoutDirection} from '@nebular/theme';
import {takeWhile} from 'rxjs/operators/takeWhile';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'ngx-layout-direction-switcher',
  template: `
    <ngx-switcher
      [firstValue]="directions.RTL"
      [secondValue]="directions.LTR"
      [firstValueLabel]="'FA'"
      [secondValueLabel]="'EN'"
      [value]="currentDirection"
      (valueChange)="toggleDirection($event, currentDirection)"
      [vertical]="vertical"
    >
    </ngx-switcher>
  `,
})
export class LayoutDirectionSwitcherComponent implements OnDestroy, OnInit {
  directions = NbLayoutDirection;
  currentDirection: NbLayoutDirection;
  alive = true;

  @Input() vertical: boolean = false;

  constructor(private directionService: NbLayoutDirectionService, public translate: TranslateService) {
    translate.addLangs(['fa', 'en']);
    translate.setDefaultLang('fa');
    translate.currentLang = 'fa';

    const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|fa/) ? browserLang : 'fa');
    // translate.use(browserLang.match(/en|fa/) ? browserLang : 'fa');

    this.currentDirection = this.directionService.getDirection();


    this.directionService.onDirectionChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe(newDirection => this.currentDirection = newDirection);
  }

  ngOnInit() {
    // this.toggleDirection('rtl', 'fa');
  }

  toggleDirection(newDirection, lang) {
    let _lang = lang === 'rtl' ? 'en' : 'fa';
    this.translate.use(_lang);
    this.translate.currentLang = _lang;
    this.directionService.setDirection(newDirection);
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
