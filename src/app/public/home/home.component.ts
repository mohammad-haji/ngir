import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {NguCarousel} from '@ngu/carousel';
import {HOME_CONFIG} from "./home.config";
import {HomeService} from "./home.service";
import {SharedService} from "../../shared-service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public sliderConfig: NguCarousel = HOME_CONFIG.sliderConfig;
  public productsConfig = HOME_CONFIG.productsConfig;
  public homeSlider: any[] = HOME_CONFIG.homeSlider;
  public featuredProducts: any[] = [];

  constructor(public homeService: HomeService,
              private sharedService: SharedService) {

  }

  ngOnInit() {
    this.getLatestProducts();
  }

  private getLatestProducts(): void {
    this.homeService.getLatestProductList().subscribe((res: any) => {
      this.featuredProducts = res.data.docs;
    })
  }

  onAddProductToBasket(product: any){
    this.sharedService.addProductToBasket(product);
  }

}
