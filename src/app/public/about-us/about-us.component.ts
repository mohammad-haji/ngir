/**
 * Created by Asus on 9/6/2018.
 */

import {Component} from "@angular/core";
@Component({
  selector: 'contact-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})

export class AboutUsComponent {
  sliderConfig = {
    grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
    slide: 1,
    speed: 400,
    interval: 3000,
    point: {
      visible: true
    },
    load: 2,
    RTL: true,
    touch: true,
    loop: true,
  };

  myfunc(event: Event) {}
}
