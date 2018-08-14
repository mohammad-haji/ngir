/**
 * Created by Mohammad.hajiaghazadeh on 8/13/2018
 */
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Meta, Title} from "@angular/platform-browser";
import {Injectable, OnInit} from "@angular/core";
import {getNestedValue} from "../utils/nested-object-value";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PageTitleTagsService implements OnInit {
  private titleTags: any;
  private JSON_DIR: string = '/assets/config/title-tags/title-tags.config.json';

  constructor(private readonly router: Router,
              private readonly activatedRoute: ActivatedRoute,
              private titleService: Title,
              private httpClient: HttpClient,
              private meta: Meta) {

  }

  ngOnInit() {
    this.loadTitleTags();
  }


  /**
   * load title tags
   */
  loadTitleTags() {
    this.httpClient.get(this.JSON_DIR).subscribe(titleTags => {
      this.titleTags = titleTags;
    })
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
        if (this.titleTags) {
          if (event['TITLE_TAG_KEY']) {
            let PAGE_TITLE_TAGS = getNestedValue(this.titleTags, event['TITLE_TAG_KEY']);
            PAGE_TITLE_TAGS['metaTags'].forEach((tag: any) => {
              this.meta.updateTag(tag, `name='${tag.name}'`);
            });
            this.titleService.setTitle(PAGE_TITLE_TAGS['title']);
          } else {
            this.titleService.setTitle('NG_IR')
          }
        } else {
          this.loadTitleTags();
        }
      });
  }
}
