import {ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'ngx-lazy-cards',
  templateUrl: './lazy-cards.component.html',
  styleUrls: ['./lazy-cards.component.scss'],
})
export class LazyCardsComponent implements OnInit {
  @Input() config: any;
  @Input() items: any = [];
  @Input() template: string = 'latestProducts';

  @Output() onAdd: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  public myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
  }

  onAddToBasket(evt, item){
    this.onAdd.emit(item);
  }
}
