import {Component} from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by" i18n="created by">{{'GENERAL.CREATED_BY' | translate}} <b>
      <a href="https://mohammad-haji.github.io" target="_blank"
         i18n="username"> {{'GENERAL.CREATOR' | translate}}</a></b>
    {{'GENERAL.YEAR' | translate}}</span>
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-github"></a>
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a>
      <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
