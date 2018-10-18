import {SharedService} from "./../../../shared-service";
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  NgZone,
  ViewChild,
  ChangeDetectorRef,
  Inject, PLATFORM_ID, ElementRef
} from "@angular/core";
import {AuthService} from "../auth/auth.service";
import {isPlatformServer} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: "top-head",
  styleUrls: ["./top-head.component.scss"],
  templateUrl: "./top-head.component.html"
})
export class TopHeadComponent implements OnInit {
  public isAuthenticated: boolean = false;
  public displayName: string = "";
  basketItemsList: any = [];
  basketTotalPrice: number = 0;
  activeOrder: any;
  isServer: boolean = false;
  searchQeurry: string = '';
  isSearching: boolean = false;
  searchResultList: any[] = [];
  @ViewChild('searchDropdowm') searchDropdowm;

  constructor(private sharedService: SharedService, private authService: AuthService,
              @Inject(PLATFORM_ID) platformId,
              private router: Router) {
    this.isServer = isPlatformServer(platformId);
    this.sharedService.isCurrentUserAuthenticated((res: any) => {
      if (res && res.user && res.user && res.user.username) {
        this.displayName = res.user.username;
        this.isAuthenticated = !!(res.user.username);
      }
    });
    this.sharedService.currentUser$.subscribe((res: any)=> {
      if (res && res.user && res.user && res.user.username) {
        this.displayName = res.user.username;
        this.isAuthenticated = !!(res.user.username);
      } else {
        this.displayName = '';
        this.isAuthenticated = false;
      }
    });
    this.sharedService.basketItemsList$.subscribe((basketList: any)=> {
      this.basketTotalPrice = this.sharedService.getTotalBasketPrice();
      this.basketItemsList = basketList;
    });
    this.basketTotalPrice = this.sharedService.getTotalBasketPrice();
    this.basketItemsList = this.sharedService.getBasketItemsList();
    this.sharedService.activeOrder$.subscribe((order: any)=> {
      this.activeOrder = order;
      this.triggerChangeDetector();
    });
    this.activeOrder = this.sharedService.getActiveOrder();
  }

  ngOnInit() {
  }

  triggerChangeDetector() {
    if (!this.isServer)
      window.scrollTo(0, 1);
  }

  searchProduct(evt, query: string) {
    evt.stopPropagation();
    if (!this.isServer) {
      // setTimeout(()=> {
      this.isSearching = true;
      // this.triggerChangeDetector();
      this.searchDropdowm.open();

      this.sharedService.searchProducts(query).subscribe((res: any)=> {
        this.triggerChangeDetector();
        this.searchResultList = res.data.docs;
        this.isSearching = false;
        this.searchDropdowm.open();

      });
      // }, 100);
    }
  }

  isSearchResultOpen(evt) {
    console.log(evt);
  }

  goToProductDetail(evt, product) {
    this.searchQeurry = product.title;
    this.router.navigateByUrl(`/product/${product._id}/${product.title}`);
  }

  loginModal() {
    let loginModal = this.authService.openLoginModal();
    loginModal.componentInstance.openRegisterModal$.subscribe(res=> {
      loginModal.close();
      this.signupModal();
    });
    loginModal.result.then((res)=> {
      console.log(res);
    });
  }

  signupModal() {
    let signupModal = this.authService.openSignupModal();
    signupModal.componentInstance.openLoginModal$.subscribe(res=> {
      console.log(res);
      signupModal.close();
      this.loginModal();
    });
    signupModal.result.then(res=> {
      console.log(res);
    })
  }

  onLogout() {
    this.sharedService.logout();
  }

  onLogin() {
    this.loginModal();
  }
}
