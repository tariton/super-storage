import { Component, OnInit } from '@angular/core';

import { ProductsService } from "app/providers/products.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  loading: boolean = true;
  items: any[];

  constructor(public products: ProductsService) { }

  ngOnInit() {
    this.products.list().then(products => {
      setTimeout(() =>{
        this.items = products;
        this.loading = false;
      }, 1 * 1000);
    });
  }

}
