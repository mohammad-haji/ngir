/**
 * Created by Mohammad.hajiaghazadeh on 8/13/2018
 */
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Meta, Title} from "@angular/platform-browser";
import {Injectable} from "@angular/core";
import {PAGE_TITLE_TAGS_CONST} from "../../config/tags/page-title-tags.const";
import {getNestedValue} from "../utils/nested-object-value";

@Injectable()
export class PageTitleTagsService {
  constructor(private readonly router: Router,
              private readonly activatedRoute: ActivatedRoute,
              private titleService: Title,
              private meta: Meta) {

  }

  /**
   * update page title tags
   */
  updatePageTitleTags(): void {
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((event) => {
        if (event['TITLE_TAG_KEY']) {
          let PAGE_TITLE_TAGS = getNestedValue(PAGE_TITLE_TAGS_CONST, event['TITLE_TAG_KEY']);
          PAGE_TITLE_TAGS['metaTags'].forEach((tag: any) => {
            this.meta.updateTag(tag, `name='${tag.name}'`);
          });
          this.titleService.setTitle(PAGE_TITLE_TAGS['title']);
        } else {
          this.titleService.setTitle('NG_IR')
        }
      });
  }
}
