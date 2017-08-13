webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-menu></app-menu>\r\n<div class=\"div-router-container\" (click)=\"menu.close()\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<app-footer (click)=\"menu.close()\"></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_menu_service__ = __webpack_require__("../../../../../src/app/providers/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_service__ = __webpack_require__("../../../../../src/app/providers/storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(menu, storageService) {
        this.menu = menu;
        this.storageService = storageService;
        this.title = 'app';
        storageService.setDrive("local");
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_storage_service__["a" /* StorageService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_menu_service__ = __webpack_require__("../../../../../src/app/providers/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_products_service__ = __webpack_require__("../../../../../src/app/providers/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_cart_service__ = __webpack_require__("../../../../../src/app/providers/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_storage_service__ = __webpack_require__("../../../../../src/app/providers/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_menu_menu_component__ = __webpack_require__("../../../../../src/app/components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_logo_logo_component__ = __webpack_require__("../../../../../src/app/components/logo/logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_searchbar_searchbar_component__ = __webpack_require__("../../../../../src/app/components/searchbar/searchbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_cartbar_cartbar_component__ = __webpack_require__("../../../../../src/app/components/cartbar/cartbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_banner_banner_component__ = __webpack_require__("../../../../../src/app/components/banner/banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_product_list_product_list_component__ = __webpack_require__("../../../../../src/app/components/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_product_card_product_card_component__ = __webpack_require__("../../../../../src/app/components/product-card/product-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_home_page_home_page_component__ = __webpack_require__("../../../../../src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_products_page_products_page_component__ = __webpack_require__("../../../../../src/app/pages/products-page/products-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_product_page_product_page_component__ = __webpack_require__("../../../../../src/app/pages/product-page/product-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_error_404_page_error_404_page_component__ = __webpack_require__("../../../../../src/app/pages/error-404-page/error-404-page.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_logo_logo_component__["a" /* LogoComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_searchbar_searchbar_component__["a" /* SearchbarComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_cartbar_cartbar_component__["a" /* CartbarComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_banner_banner_component__["a" /* BannerComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_product_list_product_list_component__["a" /* ProductListComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_product_card_product_card_component__["a" /* ProductCardComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_18__pages_home_page_home_page_component__["a" /* HomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pages_products_page_products_page_component__["a" /* ProductsPageComponent */],
            __WEBPACK_IMPORTED_MODULE_20__pages_product_page_product_page_component__["a" /* ProductPageComponent */],
            __WEBPACK_IMPORTED_MODULE_21__pages_error_404_page_error_404_page_component__["a" /* Error404PageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_router__["a" /* RoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__providers_menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_products_service__["a" /* ProductsService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_storage_service__["a" /* StorageService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_page_home_page_component__ = __webpack_require__("../../../../../src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_product_page_product_page_component__ = __webpack_require__("../../../../../src/app/pages/product-page/product-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_products_page_products_page_component__ = __webpack_require__("../../../../../src/app/pages/products-page/products-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_error_404_page_error_404_page_component__ = __webpack_require__("../../../../../src/app/pages/error-404-page/error-404-page.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__pages_home_page_home_page_component__["a" /* HomePageComponent */]
    },
    {
        path: 'products',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_products_page_products_page_component__["a" /* ProductsPageComponent */]
    },
    {
        path: 'products/:sliug/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_product_page_product_page_component__["a" /* ProductPageComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_4__pages_error_404_page_error_404_page_component__["a" /* Error404PageComponent */]
    }
];
var RoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.router.js.map

/***/ }),

/***/ "../../../../../src/app/components/banner/banner.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-dark is-bold is-medium\">\n  <div class=\"hero-body\">\n    <div class=\"container\">\n      <div class=\"columns is-mobile\">\n        <div class=\"column has-text-right\">\n          <img src=\"assets/sda-control.svg\" alt=\"Semana do Angular\">\n        </div>\n        <div class=\"column has-text-left\">\n          <h1 class=\"title\">\n            90's games\n          </h1>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/banner/banner.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  margin: 15px 0 0 0;\n  font-size: 25px; }\n\nimg {\n  max-width: 210px;\n  margin-top: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/banner/banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerComponent = (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    return BannerComponent;
}());
BannerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-banner',
        template: __webpack_require__("../../../../../src/app/components/banner/banner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/banner/banner.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], BannerComponent);

//# sourceMappingURL=banner.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/cartbar/cartbar.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"nav-item\" (click)=\"clear()\">\n  <span class=\"tag is-danger\">{{cart.items?.length || 0}}</span>\n  <i class=\"fa fa-shopping-cart\"></i>\n</a>"

/***/ }),

/***/ "../../../../../src/app/components/cartbar/cartbar.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n  margin-top: 8px; }\n\n.tag {\n  padding: 0;\n  height: 18px;\n  border: 2px solid #fff;\n  font-weight: bold;\n  position: absolute;\n  margin: -10px 0 0 11px;\n  width: 19px; }\n\ni {\n  margin-top: 2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cartbar/cartbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_providers_cart_service__ = __webpack_require__("../../../../../src/app/providers/cart.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartbarComponent = (function () {
    function CartbarComponent(cart) {
        this.cart = cart;
    }
    CartbarComponent.prototype.ngOnInit = function () {
    };
    CartbarComponent.prototype.clear = function () {
        console.info('esvaziando carrinho..');
        this.cart.clear();
    };
    return CartbarComponent;
}());
CartbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-cartbar',
        template: __webpack_require__("../../../../../src/app/components/cartbar/cartbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/cartbar/cartbar.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_providers_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_providers_cart_service__["a" /* CartService */]) === "function" && _a || Object])
], CartbarComponent);

var _a;
//# sourceMappingURL=cartbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"content has-text-centered\">\n      <p>\n        <strong>Super Store</strong><br /><br /><small>Uma PWA construída utilizando Angular 4, Bulma, Font Awesome, Animate.css, Lodash e jQuery. O fonte deste projeto foi desenvolvido durante o workshop online<br /> <a href=\"https://www.semanadoangular.com.br?utm_source=superstore&utm_medium=footer&utm_campaign=sda17\">Semana do Angular 2017</a></small> \n      </p>\n      <small>\n        Feito com carinho por <a href=\"https://stewan.io?utm_source=superstore&utm_medium=footer&utm_campaign=sda17\">Stewan & Team</a>\n      </small>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  padding-top: 120px;\n  border-top: 1px solid rgba(204, 204, 204, 0.69); }\n\n.content {\n  max-width: 520px;\n  margin: 0 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<app-searchbar [ngClass]=\"{'is-hidden': !modal}\" (closeSearch)=\"hideSearch()\"></app-searchbar>\n\n<nav class=\"navbar nav-fixed-top\">\n  <div class=\"navbar-brand\">\n    <div class=\"navbar-burger burger\" (click)=\"menu.open()\">\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n    <app-logo></app-logo>\n  </div>\n\n  <div class=\"navbar-menu\">\n    <div class=\"navbar-start\">\n      \n    </div>\n\n    <div class=\"navbar-end\">\n      <a class=\"nav-item\" (click)=\"showSearch()\">\n        <i class=\"fa fa-search\"></i>\n      </a>\n\n      <app-cartbar></app-cartbar>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-burger {\n  display: block; }\n\n.nav-fixed-top {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1; }\n\n.navbar-end {\n  padding-right: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_providers_menu_service__ = __webpack_require__("../../../../../src/app/providers/menu.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(menu) {
        this.menu = menu;
        this.modal = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.hideSearch = function () {
        this.modal = false;
    };
    HeaderComponent.prototype.showSearch = function () {
        this.modal = true;
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/header/header.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_providers_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_providers_menu_service__["a" /* MenuService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/logo/logo.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"assets/super-store.svg\" alt=\"Super Store\" />"

/***/ }),

/***/ "../../../../../src/app/components/logo/logo.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  height: 13px;\n  margin: 19px 0 0 6px; }\n\na {\n  padding: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/logo/logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoComponent = (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    return LogoComponent;
}());
LogoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-logo',
        template: __webpack_require__("../../../../../src/app/components/logo/logo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/logo/logo.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], LogoComponent);

//# sourceMappingURL=logo.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"menu1\" class=\"hero outer is-fullheight animated slideInLeft\" [ngClass]=\"{'slideOutLeft': !menu.opened, 'is-hidden': !menu.loadSite}\">\n  <div class=\"hero-body outer\">\n    <div class=\"container\">\n\n      <section class=\"hero inner is-danger is-bold animated fadeIn\">\n        <div class=\"hero-body inner\">\n          <div class=\"container\">\n            <img src=\"assets/avatar.png\" />\n          </div>\n        </div>\n      </section>\n\n      <br />\n\n      <ul>\n        <li *ngFor=\"let option of menu.options\">\n          <a class=\"columns is-mobile\" [routerLink]=\"option.route\" (click)=\"menu.close()\">\n            <div class=\"column has-text-right is-one-quarter\">\n              <i class=\"{{ option.icon }}\"></i>\n            </div>\n            <div class=\"column\">\n              <strong>\n                {{ option.text }}\n              </strong>\n            </div>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section {\n  width: 260px;\n  z-index: 2; }\n\nsection.outer {\n  box-shadow: 1px 6px 12px rgba(0, 0, 0, 0.24);\n  border-right: 1px solid #fff;\n  position: fixed; }\n\nsection.inner {\n  position: relative; }\n\nimg {\n  border-radius: 50%;\n  max-width: 95px;\n  margin: 0 auto;\n  display: block; }\n\n.hero-body {\n  -webkit-box-align: start !important;\n      -ms-flex-align: start !important;\n          align-items: flex-start !important; }\n\n.hero-body.outer {\n  padding: 0; }\n\n.hero-body.inner {\n  padding: 25px; }\n\ni {\n  color: #aaa;\n  font-size: 18px;\n  padding-top: 3px; }\n\nul li {\n  margin-bottom: 10px; }\n\n.margin-fix {\n  margin-top: 0px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_menu_service__ = __webpack_require__("../../../../../src/app/providers/menu.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = (function () {
    function MenuComponent(menu) {
        this.menu = menu;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/components/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/menu/menu.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_menu_service__["a" /* MenuService */]) === "function" && _a || Object])
], MenuComponent);

var _a;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/product-card/product-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-image\">\n    <figure class=\"image is-4by3\">\n      <img src=\"assets/games/{{product.image}}\" alt=\"Image\" />\n    </figure>\n  </div>\n\n  <div class=\"card-content\">\n\n    <div class=\"columns is-mobile\">\n      <div class=\"column\">\n        <h2 class=\"title is-4\"><a [routerLink]=\"product.router\">{{ product.name }}</a></h2>\n      </div>\n      <div class=\"column is-one-third has-text-right\" *ngIf=\"view==false\">\n        <span class=\"tag is-warning is-medium\">{{ product.price |  currency:'BRL':true }}</span>\n      </div>\n    </div>\n\n    <div class=\"content\" *ngIf=\"view==true\">\n      <small class=\"year\">Ano: {{ product.year }}</small>\n      <br />\n      <div [innerHTML]=\"product.description\"> </div>\n    </div>\n  </div>\n\n  <footer class=\"card-footer\">\n    <div class=\"card-footer-item\" *ngIf=\"view==true\">\n      <span class=\"icon\">\n        <i class=\"fa fa-bolt\"></i>\n      </span>\n      <small>{{ product.type }} · {{ product.price |  currency:'BRL':true }}</small>\n    </div>\n    <a class=\"card-footer-item\" [routerLink]=\"product.router\" *ngIf=\"view==false\">\n      <span class=\"icon\">\n        <i class=\"fa fa-share\"></i>\n      </span>\n      </a>\n    <a class=\"card-footer-item\" (click)=\"addToCart(product)\">\n      <span class=\"icon\">\n        <i class=\"fa fa-cart-plus\"></i>\n      </span>\n    </a>\n  </footer>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/product-card/product-card.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image.is-4by3 {\n  padding-top: 58%; }\n\n.dots {\n  width: 179px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.year {\n  margin-top: -15px;\n  display: block; }\n\n.card {\n  margin: 20px 0 20px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/product-card/product-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_products_service__ = __webpack_require__("../../../../../src/app/providers/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cart_service__ = __webpack_require__("../../../../../src/app/providers/cart.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// importando dependencias do angular core

// importando os providers


// decorando o componente para informar como o angular deve trabalhar
var ProductCardComponent = (function () {
    function ProductCardComponent(
        // instanciando nossos providers
        products, cart) {
        this.products = products;
        this.cart = cart;
        // declarando uma váriavel objeto do tipo any que irá armazenar o produto assim que for resolvido pelo provider mais a frente
        this.product = {};
        this.view = false;
    }
    ProductCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            // scroll to top
            _this.products.scrollTop();
        }, 0);
    };
    // adiciona ao carrinho
    ProductCardComponent.prototype.addToCart = function (item) {
        this.cart.add(item).then(function () {
            console.info(item.name + ' adicionado/atualizado no carrinho');
        }).catch(console.warn);
    };
    return ProductCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], ProductCardComponent.prototype, "product", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], ProductCardComponent.prototype, "view", void 0);
ProductCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-product-card',
        template: __webpack_require__("../../../../../src/app/components/product-card/product-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/product-card/product-card.component.sass")]
    })
    // exportando a classe deste componente para ser importável por outros arquivos (no caso, o app.module.ts)
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_products_service__["a" /* ProductsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_cart_service__["a" /* CartService */]) === "function" && _b || Object])
], ProductCardComponent);

var _a, _b;
//# sourceMappingURL=product-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"products\">\n  <div class=\"container\">\n    <h2 class=\"subtitle loading\" [hidden]=\"!loading\">\n      <br /><br /> <br />\n      <span>Carregando <strong>games...</strong></span>\n      <br /><br /> <br />\n    </h2>\n\n    <div class=\"columns is-desktop is-multiline\">\n      <app-product-card [ngClass]=\"{'is-half':i==0||i%11==0, 'is-one-quarter':i>0&&i%11!=0}\" \n        class=\"column\" *ngFor=\"let product of items; let i = index\"\n        [product]=\"product\"></app-product-card>\n    </div>\n\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/product-list/product-list.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\n.loading {\n  margin: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_providers_products_service__ = __webpack_require__("../../../../../src/app/providers/products.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductListComponent = (function () {
    function ProductListComponent(products) {
        this.products = products;
        this.loading = true;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.products.list().then(function (products) {
            setTimeout(function () {
                _this.items = products;
                _this.loading = false;
            }, 1 * 1000);
        });
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-product-list',
        template: __webpack_require__("../../../../../src/app/components/product-list/product-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/product-list/product-list.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_providers_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_providers_products_service__["a" /* ProductsService */]) === "function" && _a || Object])
], ProductListComponent);

var _a;
//# sourceMappingURL=product-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/searchbar/searchbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal animated slideInUp\">\n  <div class=\"modal-background\"></div>\n  <div class=\"modal-content\">\n    <!-- Any other Bulma elements you want -->\n    <nav class=\"nav\">\n      <div class=\"nav-left\">\n        <a class=\"close\" (click)=\"hideModal()\"><i class=\"fa fa-long-arrow-left\"></i></a>\n        <form novalidate (submit)=\"submit($event)\">\n          <input [(ngModel)]=\"keyword\" name=\"keyword\" class=\"\" type=\"text\" placeholder=\"buscar..\">\n        </form>\n      </div>\n\n      <div class=\"nav-center\">\n      </div>\n\n      <div class=\"nav-right\">\n      </div>\n    </nav>\n\n    <div class=\"container\">\n      <article (click)=\"goTo(item)\" class=\"media animated slideInDown\" *ngFor=\"let item of items\">\n        <figure class=\"media-left\">\n          <p class=\"image is-64x64\">\n            <img src=\"assets/games/{{item.image}}\">\n          </p>\n        </figure>\n        <div class=\"media-content\">\n          <div class=\"content\">\n            <p>\n              <strong>{{item.name}}</strong>             \n              <br>\n              <small>{{item.type}} · {{item.year}}</small>\n            </p>\n          </div>\n\n        </div>\n      </article>\n\n      <small *ngIf=\"keyword==null\">digite e pressione enter</small>\n      <small *ngIf=\"!items.length && submitted == true\">nada encontrado =(</small>\n\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/searchbar/searchbar.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n  margin-top: 8px; }\n\n.modal {\n  display: inherit; }\n  .modal .close {\n    position: relative;\n    color: #333;\n    margin: 15px; }\n  .modal .modal-content {\n    margin: 0; }\n  .modal input {\n    color: #444;\n    font-size: 15px;\n    margin-top: 14px;\n    outline: none;\n    border: none; }\n  .modal .modal-background {\n    background-color: white; }\n\n.nav {\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  margin-bottom: 6px; }\n\n.container {\n  padding: 20px; }\n\n.media + .media {\n  padding-bottom: 15px; }\n\n.modal-content, .modal-card {\n  max-height: calc(100vh - 20px); }\n\n.modal-content, .modal-card {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/searchbar/searchbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_products_service__ = __webpack_require__("../../../../../src/app/providers/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchbarComponent = (function () {
    function SearchbarComponent(products, router) {
        this.products = products;
        this.router = router;
        this.submitted = false;
        this.keyword = null;
        this.items = [];
        this.closeSearch = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */];
    }
    SearchbarComponent.prototype.ngOnInit = function () {
    };
    SearchbarComponent.prototype.submit = function (e) {
        var _this = this;
        e.preventDefault(); // previnir reload no browser
        if (this.keyword) {
            this.submitted = true;
            this.products.search(this.keyword).then(function (items) {
                _this.items = items;
                if (items.length)
                    _this.submitted = false;
            });
        }
    };
    SearchbarComponent.prototype.hideModal = function () {
        this.closeSearch.emit();
    };
    SearchbarComponent.prototype.goTo = function (item) {
        this.hideModal();
        this.router.navigate([item.router]);
        this.products.scrollTop();
    };
    return SearchbarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Output */])(),
    __metadata("design:type", Object)
], SearchbarComponent.prototype, "closeSearch", void 0);
SearchbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-searchbar',
        template: __webpack_require__("../../../../../src/app/components/searchbar/searchbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/searchbar/searchbar.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_products_service__["a" /* ProductsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SearchbarComponent);

var _a, _b;
//# sourceMappingURL=searchbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/error-404-page/error-404-page.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"hero is-warning is-fullheight\">\n  <div class=\"hero-body\">\n    <div class=\"container\">\n      <h1 class=\"title is-4\">\n        Página não encontrada\n      </h1>\n      <br />\n      <h2 class=\"subtitle is-6\">\n        <a routerLink=\"/\">\n        <span class=\"icon\">\n          <i class=\"fa fa-long-arrow-left\"></i>\n        </span>\n        <span>\n          Voltar\n        </span>\n        </a>\n      </h2>\n    </div>\n  </div>\n</section> -->\n"

/***/ }),

/***/ "../../../../../src/app/pages/error-404-page/error-404-page.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/error-404-page/error-404-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error404PageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Error404PageComponent = (function () {
    function Error404PageComponent() {
    }
    Error404PageComponent.prototype.ngOnInit = function () {
    };
    return Error404PageComponent;
}());
Error404PageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-error-404-page',
        template: __webpack_require__("../../../../../src/app/pages/error-404-page/error-404-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/error-404-page/error-404-page.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], Error404PageComponent);

//# sourceMappingURL=error-404-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-banner></app-banner>\r\n<app-product-list></app-product-list>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/pages/home-page/home-page.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_providers_products_service__ = __webpack_require__("../../../../../src/app/providers/products.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePageComponent = (function () {
    function HomePageComponent(productsService) {
        this.productsService = productsService;
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.productsService.list().then(function (products) { return console.log(products); });
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home-page',
        template: __webpack_require__("../../../../../src/app/pages/home-page/home-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/home-page/home-page.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_providers_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_providers_products_service__["a" /* ProductsService */]) === "function" && _a || Object])
], HomePageComponent);

var _a;
//# sourceMappingURL=home-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/product-page/product-page.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"container\">\n  <app-product-card [product]=\"product\" [view]=\"true\"></app-product-card>\n</div> "

/***/ }),

/***/ "../../../../../src/app/pages/product-page/product-page.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.container {\n  max-width: 750px;\n  padding-top: 50px;\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/product-page/product-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_products_service__ = __webpack_require__("../../../../../src/app/providers/products.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductPageComponent = (function () {
    function ProductPageComponent(router, activatedRoute, productsService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.productsService = productsService;
        this.product = {};
    }
    ProductPageComponent.prototype.ngOnInit = function () {
        this.initProduct();
    };
    ProductPageComponent.prototype.initProduct = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.productsService.view(params['id'])
                .then(function (product) {
                _this.product = product;
            })
                .catch(function (e) {
                console.error(e);
                _this.router.navigate(['/404']);
            });
        });
    };
    return ProductPageComponent;
}());
ProductPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-product-page',
        template: __webpack_require__("../../../../../src/app/pages/product-page/product-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/product-page/product-page.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_products_service__["a" /* ProductsService */]) === "function" && _c || Object])
], ProductPageComponent);

var _a, _b, _c;
//# sourceMappingURL=product-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/products-page/products-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  products-page works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/products-page/products-page.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/products-page/products-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsPageComponent = (function () {
    function ProductsPageComponent() {
    }
    ProductsPageComponent.prototype.ngOnInit = function () {
    };
    return ProductsPageComponent;
}());
ProductsPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-products-page',
        template: __webpack_require__("../../../../../src/app/pages/products-page/products-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/products-page/products-page.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], ProductsPageComponent);

//# sourceMappingURL=products-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/providers/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_service__ = __webpack_require__("../../../../../src/app/providers/storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartService = (function () {
    function CartService(storage) {
        this.storage = storage;
        this.newItem = {
            qty: 0,
            product: {}
        };
        this.items = [];
        this.items = storage.get('cart') || [];
    }
    // adiciona um item ao carrinho
    CartService.prototype.add = function (item) {
        var _this = this;
        if (item === void 0) { item = {}; }
        return new Promise(function (resolve, reject) {
            if (!item.id) {
                reject('é necessário um item');
            }
            else {
                var exists_1 = false;
                _this.items.map(function (row) {
                    // se o item ja estiver no carrinho, atualiza a quantidade
                    if (row.product.id == item.id) {
                        row.qty++;
                        exists_1 = true;
                    }
                });
                if (!exists_1) {
                    // senao adiciona um novo item
                    _this.newItem.product = item;
                    _this.newItem.qty = 1;
                    _this.items.push(_this.newItem);
                }
                _this.storage.set('cart', _this.items); // atualiza o storage
                resolve(_this.items); // apenas resolve a promessa
            }
        });
    };
    CartService.prototype.clear = function () {
        this.storage.set('cart', []);
        this.items = [];
        console.info('carrinho vazio');
    };
    return CartService;
}());
CartService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__storage_service__["a" /* StorageService */]) === "function" && _a || Object])
], CartService);

var _a;
//# sourceMappingURL=cart.service.js.map

/***/ }),

/***/ "../../../../../src/app/providers/menu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
// estado de abertura
// opcoes do menu
// comportamento de abrir
// comportamento de fechar
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuService = (function () {
    function MenuService() {
        this.opened = false;
        this.options = [
            {
                icon: 'fa fa-home',
                text: 'Home',
                route: '/'
            },
            {
                icon: 'fa fa-gamepad',
                text: 'Produtos',
                route: '/products'
            }
        ];
    }
    MenuService.prototype.open = function () {
        this.loadSite = true;
        this.opened = true;
    };
    MenuService.prototype.close = function () {
        this.opened = false;
    };
    return MenuService;
}());
MenuService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MenuService);

//# sourceMappingURL=menu.service.js.map

/***/ }),

/***/ "../../../../../src/app/providers/products.json":
/***/ (function(module, exports) {

module.exports = [
	{
		"id": 1,
		"name": "Street Fighter",
		"year": 1990,
		"price": 9.9,
		"type": "Luta",
		"image": "street-fighter.jpg",
		"description": "Street Fighter, popularmente abreviado para SF, é uma popular série de jogos de luta na qual o jogador controla lutadores de diversas partes do mundo, cada qual com seus golpes especiais."
	},
	{
		"id": 2,
		"name": "Mortal Kombat",
		"year": 1992,
		"price": 9.9,
		"type": "Luta",
		"image": "mortal-kombat.jpg",
		"description": "Mortal Kombat é uma série de jogos criados pelo estúdio de Chicago da Midway Games. Em 2011, depois da falência da Midway, a produção de Mortal Kombat foi adquirida pela Warner Bros, tonando-se de seguida na Netherealm"
	},
	{
		"id": 3,
		"name": "Top Gear",
		"year": 1992,
		"price": 9.9,
		"type": "Corrida",
		"image": "topgear.jpg",
		"description": "Top Gear, conhecido no Japão como Top Racer é um jogo eletrônico lançado em 1992 para o Super NES. Foi desenvolvido pela Gremlin Graphics e publicado pela Kemco. Este é o primeiro jogo da franquia Top Gear."
	},
	{
		"id": 4,
		"name": "Super Mario World",
		"year": 1990,
		"price": 9.9,
		"type": "Aventura",
		"image": "mario.jpg",
		"description": "Super Mario World, subintitulado Super Mario Bros. 4 na versâo japonesa, é um jogo de plataforma desenvolvido e publicado pela Nintendo como um título que acompanhava o console Super Nintendo Entertainment System."
	},
	{
		"id": 5,
		"name": "F-Zero",
		"year": 1990,
		"price": 9.9,
		"type": "Corrida",
		"image": "fzero.jpg",
		"description": "F-Zero é um jogo de corrida futurista de SNES desenvolvido pela Nintendo e publicado pela mesma em 1990 no Japão e em 1991 nos Estados Unidos. É o primeiro título da série de videojogos e foi relançado no Virtual Console para Wii, Wii U e 3DS."
	},
	{
		"id": 6,
		"name": "Mega Man III",
		"year": 1990,
		"price": 9.9,
		"type": "Aventura",
		"image": "megaman.png",
		"description": "Mega Man III é um jogo de videogame criado pela Capcom em 1990. Foi lançado somente para o Nintendo Entertainment System, e faz parte da série Mega Man, composta de oito episódios."
	},
	{
		"id": 7,
		"name": "Metal Gear 2: Solid Snake",
		"year": 1990,
		"price": 9.9,
		"type": "Aventura",
		"image": "metal-gear.jpg",
		"description": "Metal Gear 2: Solid Snake é um jogo de espionagem escrito e dirigido por Hideo Kojima, e desenvolvido e publicado pela Konami."
	},
	{
		"id": 8,
		"name": "Cadillacs and Dinosaurs",
		"year": 1993,
		"price": 9.9,
		"type": "Aventura",
		"image": "cdino.jpg",
		"description": "Cadillacs and Dinosaurs é um jogo de beat 'em up para arcade lançado em 1993 pela Capcom e baseado nos quadrinhos Xenozoic Tales de Mark Schultz."
	},
	{
		"id": 9,
		"name": "Captain Commando",
		"year": 1991,
		"price": 9.9,
		"type": "Aventura",
		"image": "captain.jpg",
		"description": "Capitão Comando é jogo de arcade produzido pela Capcom em 1991, tendo como personagem principal Captain Commando. É um jogo no estilo beat 'em up, que se passa em Metro City no ano de 2026."
	},
	{
		"id": 10,
		"name": "Final Fight",
		"year": 1989,
		"price": 9.9,
		"type": "Luta",
		"image": "final-fight.jpg",
		"description": "Final Fight é um jogo eletrônico beat-'em-up side-scrolling originalmente lançado pela Capcom como um video game operado a base de moedas em 1989, um dos jogos mais famosos para esse estilo de jogo."
	},
	{
		"id": 11,
		"name": "Goof Troop",
		"year": 1993,
		"price": 9.9,
		"type": "Aventura",
		"image": "goof.jpg",
		"description": "Goof Troop é um jogo de ação-aventura e puzzles desenvolvido pela Capcom e lançado em 1993 na América do Norte e Europa e em 1994 no Japão. O jogo é baseado na série de mesmo nome."
	},
	{
		"id": 12,
		"name": "Chrono Trigger",
		"year": 1999,
		"price": 9.9,
		"type": "RPG",
		"image": "chrono.jpg",
		"description": "Chrono Trigger é um jogo de RPG eletrônico desenvolvido pela Square Co. Foi lançado para o console Super Nintendo no Japão em março de 1995, e uma versão aprimorada para PlayStation foi lançada em novembro de 1999."
	},
	{
		"id": 13,
		"name": "The Legend of Zelda: Ocarina of Time",
		"year": 1998,
		"price": 9.9,
		"type": "Aventura",
		"image": "zelda.jpg",
		"description": "The Legend of Zelda: Ocarina of Time é um jogo eletrônico de ação-aventura desenvolvido e publicado pela Nintendo EAD para o console Nintendo 64"
	},
	{
		"id": 14,
		"name": "Diablo",
		"year": 1994,
		"price": 9.9,
		"type": "RPG",
		"image": "diablo.jpg",
		"description": "Diablo é um jogo de computador estilo Action RPG, passado em época medieval fictícia. Produzido pela Blizzard North e distribuído pela Blizzard Entertainment, foi lançado em 1996"
	},
	{
		"id": 15,
		"name": "Donkey Kong Country",
		"year": 1994,
		"price": 9.9,
		"type": "Aventura",
		"image": "dk.jpg",
		"description": "Donkey Kong Country é um jogo de plataforma em 2D desenvolvido pela Rare e publicado pela Nintendo para o Super Nintendo Entertainment System. Foi lançado em Novembro de 1994, sob o nome Super Donkey Kong no Japão. "
	},
	{
		"id": 16,
		"name": "Doom",
		"year": 1993,
		"price": 9.9,
		"type": "Tiro",
		"image": "doom.jpg",
		"description": "Doom é um jogo de computador lançado em 1993 pela id Software e um dos títulos que geraram o gênero tiro em primeira pessoa"
	},
	{
		"id": 17,
		"name": "Tomb Raider",
		"year": 1995,
		"price": 9.9,
		"type": "Aventura",
		"image": "tomb.jpg",
		"description": "Tomb Raider é um jogo de videogame desenvolvido pela Core Design e publicado pela Eidos Interactive. Ele foi lançado originalmente em 1996 para o Sega Saturn, e depois para o MS-DOS e PlayStation."
	},
	{
		"id": 18,
		"name": "Super Metroid",
		"year": 1994,
		"price": 9.9,
		"type": "Aventura",
		"image": "sm.jpg",
		"description": "Super Metroid, conhecido também por Metroid 3, é um jogo eletrônico de plataforma com elementos de ação e aventura lançado em 1994 para o Super Nintendo Entertainment System"
	},
	{
		"id": 19,
		"name": "Killer Instinct",
		"year": 1994,
		"price": 9.9,
		"type": "Luta",
		"image": "ki.jpg",
		"description": "Killer Instinct é um jogo de luta para arcades desenvolvido pela Rare, lançado em 1994. Ele teve uma versão para o Super Nintendo, lançada em 1995 e para o Game Boy"
	},
	{
		"id": 20,
		"name": "Pokémon",
		"year": 1996,
		"price": 9.9,
		"type": "RPG",
		"image": "pokemon.jpg",
		"description": "Pokémon Red Version e Pokémon Blue Version são as versões ocidentais dos primeiros jogos da série multimilionária Pokémon."
	},
	{
		"id": 21,
		"name": "Sonic the Hedgehog 2",
		"year": 1992,
		"price": 9.9,
		"type": "Aventura",
		"image": "sonic2.jpg",
		"description": "Sonic the Hedgehog 2, ou Sonic 2, é um jogo eletrônico de plataforma lançado em 1992 em 16-bit para o Mega Drive. É o segundo jogo da série Sonic"
	},
	{
		"id": 22,
		"name": "Golden Axe II",
		"year": 1991,
		"price": 9.9,
		"type": "Luta",
		"image": "ga.jpg",
		"description": "Golden Axe II é um jogo de combate, liberado para o Sega Mega Drive em 26 de dezembro de 1991. É a continuação do popular jogo:Golden Axe, que marca o segundo jogo da série"
	},
	{
		"id": 23,
		"name": "Sunset Riders",
		"year": 1993,
		"price": 9.9,
		"type": "Aventura",
		"image": "sunset.jpg",
		"description": "Sunset Riders é um jogo de faroeste, no estilo plataforma, desenvolvido pela Konami em 1991 para arcade. Posteriormente em 1992 e 1993 foi portado para os consoles Mega Drive e Super Nintendo"
	},
	{
		"id": 24,
		"name": "Rock N' Roll Racing",
		"year": 1993,
		"price": 9.9,
		"type": "Corrida",
		"image": "rock.jpg",
		"description": "Rock N' Roll Racing é um jogo eletrônico de corrida que possui um estilo único para um jogo de 1993. "
	},
	{
		"id": 25,
		"name": "Super Bomberman",
		"year": 1993,
		"price": 9.9,
		"type": "Estratégia",
		"image": "bomber.jpg",
		"description": "Super Bomberman é um jogo da série Bomberman lançado para Super Famicom. É o primeiro jogo desta série a ser lançado para o console."
	}
];

/***/ }),

/***/ "../../../../../src/app/providers/products.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var products = __webpack_require__("../../../../../src/app/providers/products.json");
var baseUrl = window.location.href;
var ProductsService = (function () {
    function ProductsService() {
    }
    ProductsService.prototype.list = function () {
        return new Promise(function (res, rej) {
            products.map(function (product) {
                //título no formato slug (name-name-name)
                product.titleSlug = __WEBPACK_IMPORTED_MODULE_1_lodash__["kebabCase"](product.name);
                product.router = 'products/' + product.titleSlug + '/' + product.id;
                product.url = baseUrl + product.router;
            });
            res(products);
        });
    };
    ProductsService.prototype.view = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.list().then(function (products) {
                var product = __WEBPACK_IMPORTED_MODULE_1_lodash__["find"](products, function (p) {
                    return p.id == id;
                });
                return product ? resolve(product) : reject("product not found");
            });
        });
    };
    ProductsService.prototype.search = function (keyword) {
        var _this = this;
        keyword = keyword.toLocaleLowerCase();
        return new Promise(function (resolve, reject) {
            _this.list().then(function (products) {
                var items;
                if (products.length) {
                    items = __WEBPACK_IMPORTED_MODULE_1_lodash__["filter"](products, function (p) {
                        return p.name.toLocaleLowerCase().includes(keyword);
                    });
                }
                resolve(items);
            });
        });
    };
    ProductsService.prototype.scrollTop = function () {
        document.body.scrollTop = 0;
    };
    return ProductsService;
}());
ProductsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ProductsService);

//# sourceMappingURL=products.service.js.map

/***/ }),

/***/ "../../../../../src/app/providers/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
var StorageService = (function () {
    function StorageService() {
        this._drive = 'sessionStorage';
    }
    StorageService.prototype.drive = function () {
        return this._drive;
    };
    StorageService.prototype.setDrive = function (v) {
        return this._drive = v + 'Storage';
    };
    StorageService.prototype.get = function (k) {
        return JSON.parse(window[this.drive()].getItem(k));
    };
    StorageService.prototype.set = function (k, v) {
        window[this.drive()].setItem(k, JSON.stringify(v));
    };
    StorageService.prototype.clear = function () {
        window[this.drive()].clear();
    };
    return StorageService;
}());

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map