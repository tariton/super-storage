import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { ProductsService } from "../../providers/products.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.sass']
})
export class ProductPageComponent implements OnInit {

  product: any = {};

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public productsService: ProductsService
  ) { }

  ngOnInit() {
    this.initProduct();
  }

  initProduct() {
    this.activatedRoute.params
      .subscribe(
      params => {
        this.productsService.view(params['id'])
          .then(product => {
            this.product = product;
          })
          .catch(e => {
            console.error(e);

            this.router.navigate(['/404']);
          })

      })
  }


}
