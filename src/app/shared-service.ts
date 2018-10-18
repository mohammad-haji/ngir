import {isPlatformServer} from "@angular/common";
import {Subject} from "rxjs/Rx";
import {Injectable, Inject, PLATFORM_ID} from "@angular/core";
import {ToasterService} from "angular2-toaster";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class SharedService {
  public currentUser: any;
  public currentUser$: Subject<any> = new Subject<any>();
  public isServer: boolean = false;
  public basketItemsList$: Subject<any> = new Subject<any>();
  basketItemsList: any = [];
  activeOrder$: Subject<any> = new Subject<any>();
  activeOrder: any;

  constructor(@Inject(PLATFORM_ID) platformId,
              private toasterService: ToasterService,
              private http: HttpClient) {
    this.isServer = isPlatformServer(platformId);
    if (!this.isServer) {
      const localData: any = localStorage.getItem("user");
      if (localData) {
        this.currentUser = JSON.parse(localData);
      } else {
        this.currentUser = undefined;
      }
    }
  }

  setCurrentUser(user) {
    if (!this.isServer) {
      localStorage.setItem('user', JSON.stringify(user))
    }
    this.currentUser = user;
    this.currentUser$.next(user);
  }

  getBasketItemsList() {
    return this.basketItemsList;
  }

  addProductToBasket(product) {
    if (this.activeOrder) {
      this.toasterService.pop('success', 'افزودن به سبد خرید', 'محصول با موفقیت به سبد خرید اضافه شد')
      let orderItem = {
        product: product._id,
        title: product.title,
        pricing: {price: product.pricing.price},
      };
      this.activeOrder.orderItems.push(orderItem);
      this.basketItemsList = this.activeOrder.orderItems;
      this.basketItemsList$.next(this.basketItemsList);
      this.updateOrder({orderItem: orderItem}, this.activeOrder._id).subscribe((res: any)=> {
        this.basketItemsList = res.data.orderItems;
        this.basketItemsList$.next(this.basketItemsList);
      });
    } else {
      let data = {
        fulfilmentStatus: 'IN_BASKET',
        orderItems: [{
          product: product._id,
          title: product.title,
          pricing: {price: product.pricing.price},
        }]
      };
      this.saveOrder(data).subscribe((res: any)=> {
        this.basketItemsList.push(product);
        this.basketItemsList$.next(res.data.orderItems);
        this.setActiveOrder(res.data);
      });
    }
  }

  popToastNotification(msg: string) {
    this.toasterService.pop('success', '', msg)
  }

  removeProductFromBasket(index) {
    this.basketItemsList.splice(index, 1);
    this.basketItemsList$.next(this.basketItemsList);
  }

  getTotalBasketPrice() {
    return this.basketItemsList.reduce((acumulator, currentValue)=> {
      return acumulator + Number(currentValue.pricing.price);
    }, 0)
  }

  getCurrentUser(cb: any) {
    cb(this.currentUser);
  }

  isCurrentUserAuthenticated(cb) {
    if (!this.isServer) {
      const localData: any = localStorage.getItem("user");
      if (localData) {
        cb(JSON.parse(localData));
      } else {
        cb(this.currentUser);
      }
    }
  }

  isCurrentUserAuthenticated$() {
    return this.currentUser$;
  }

  logout() {
    if (!this.isServer) {
      localStorage.removeItem('user')
    }
    this.currentUser = undefined;
    this.currentUser$.next(this.currentUser);
  }

  isLogedIn() {
    return this.currentUser;
  }


  getActiveOrder() {
    return this.activeOrder;
  }

  setActiveOrder(order: any) {
    this.activeOrder = order;
    this.basketItemsList = order.orderItems;
    this.basketItemsList$.next(this.basketItemsList);
    this.activeOrder$.next(order);
  }

  getUserActiveOrder(): Observable<any> {
    this.basketItemsList = [];
    this.basketItemsList$.next(this.basketItemsList);
    return this.http.get('/public-user-active-order').map((res: any)=> {
      if (res.data && res.data._id) {
        this.setActiveOrder(res.data);
      } else {
        this.activeOrder$.next({});
        this.activeOrder = undefined;
        this.basketItemsList = [];
        this.basketItemsList$.next(this.basketItemsList);
      }
      return res;
    });
  }

  saveOrder(data: any) {
    return this.http.post('/orders', data);
  }

  updateOrder(data: any, orderId: string) {
    return this.http.put(`/public-orders/${orderId}`, data);
  }

  searchProducts(query: string): Observable<any> {
    return this.http.get('/public-product-search/', {
      params: {
        searchQuery: query
      }
    });
  }
}
