import { Injectable } from '@angular/core';

import * as _ from 'lodash';

const products = require('./products.json');
const baseUrl = window.location.href;

@Injectable()
export class ProductsService {

  constructor() { }

  list(): Promise<any[]> {
    return new Promise((res, rej) => {
      products.map((product) => {
        //título no formato slug (name-name-name)
        product.titleSlug = _.kebabCase(product.name);
        product.router = 'products/' + product.titleSlug + '/' + product.id;
        product.url = baseUrl + product.router;
      })
      res(products);
    });
  }

  view(id: number) {
    return new Promise((resolve, reject) => {
      this.list().then(products => {
        let product = _.find(products, (p) => {
          return p.id == id;
        })
        return product ? resolve(product) : reject("product not found");
      })
    })
  }

  search(keyword: string) {
    keyword = keyword.toLocaleLowerCase();

    return new Promise((resolve, reject) => {
      this.list().then(products => {

        let items: any[];

        if (products.length) {
          items = _.filter(products, (p) => {
            return p.name.toLocaleLowerCase().includes(keyword);
          })
        }
        resolve(items);
      });
    });
  }

  scrollTop() {
    document.body.scrollTop = 0;
  }
}
