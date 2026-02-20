import {
  NgSelectComponent,
  NgSelectModule
} from "./chunk-7HJT23BB.js";
import {
  NgxSliderModule,
  SliderComponent
} from "./chunk-PSQ5PIEG.js";
import {
  require_sweetalert2_all
} from "./chunk-FDXGDKOB.js";
import {
  addCustomerlist,
  addEcoOrders,
  deleteEcoOrders,
  fetchCartData,
  fetchCustomerData,
  fetchEcoorderDataData,
  updateCustomerlist,
  updateEcoOrders
} from "./chunk-JJUXV4IW.js";
import {
  cartData
} from "./chunk-WL25NFMY.js";
import {
  SlickCarouselComponent,
  SlickCarouselModule,
  SlickItemDirective
} from "./chunk-LJC4I3OA.js";
import {
  DROPZONE_CONFIG,
  DropzoneComponent,
  DropzoneModule
} from "./chunk-NBSG53RP.js";
import {
  BsDatepickerDirective,
  BsDatepickerInputDirective,
  BsDatepickerModule
} from "./chunk-C3TIYFCT.js";
import {
  PaginationComponent,
  PaginationModule
} from "./chunk-AMVJFW2N.js";
import {
  BsModalService,
  ModalDirective,
  ModalModule
} from "./chunk-BYTMBZOH.js";
import {
  TabDirective,
  TabHeadingDirective,
  TabsModule,
  TabsetComponent
} from "./chunk-36X3QJLK.js";
import {
  BsDropdownDirective,
  BsDropdownMenuDirective,
  BsDropdownModule,
  BsDropdownToggleDirective
} from "./chunk-MWIFUPBM.js";
import {
  PagetitleComponent
} from "./chunk-WW5M2ABB.js";
import {
  Store,
  createFeatureSelector,
  createSelector
} from "./chunk-S2XUSEFK.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  RequiredValidator,
  SelectControlValueAccessor,
  UntypedFormBuilder,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-ICQKGMTO.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  HttpClient,
  NgClass,
  NgModule,
  RouterLink,
  RouterModule,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵinterpolate2,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-BM6E27KQ.js";
import {
  __spreadValues,
  __toESM
} from "./chunk-H6NRAODO.js";

// src/app/pages/ecommerce/product.model.ts
var productList = [
  {
    id: 1,
    category: "T-shirts",
    name: "Half sleeve T-shirt",
    ratings: 4.5,
    reviewCount: 0,
    discount: 10,
    oriRate: 450,
    disRate: 405,
    feature: ["Fit Type: Regular Fit", "highest quality fabric", "Suitable for all weather condition", "Excellent Washing and Light Fastness"],
    specification: [
      {
        key: "size",
        value: "M"
      },
      {
        key: "color",
        value: "red"
      }
    ],
    images: ["assets/images/product/img-1.png", "assets/images/product/img-1a.png", "assets/images/product/img-1b.png"],
    colorVariant: [
      {
        key: "red",
        value: "assets/images/product/img-1.png"
      },
      {
        key: "black",
        value: "assets/images/product/img-2.png"
      }
    ]
  },
  {
    id: 2,
    category: "T-shirts",
    name: "Light blue T-shirt",
    ratings: 4.2,
    reviewCount: 0,
    discount: 5,
    oriRate: 225,
    disRate: 175,
    feature: ["Fit Type: Regular Fit", "highest quality fabric", "Suitable for all weather condition", "Excellent Washing and Light Fastness"],
    specification: [
      {
        key: "size",
        value: "M"
      },
      {
        key: "color",
        value: "Light Blue"
      }
    ],
    images: ["assets/images/product/img-2.png", "assets/images/product/img-2a.png", "assets/images/product/img-2b.png"],
    colorVariant: [
      {
        key: "red",
        value: "assets/images/product/img-2.png"
      },
      {
        key: "yellow",
        value: "assets/images/product/img-2a.png"
      },
      {
        key: "green",
        value: "assets/images/product/img-2b.png"
      }
    ]
  },
  {
    id: 3,
    category: "T-shirts",
    name: "Black Color T-shirt",
    ratings: 4,
    reviewCount: 0,
    discount: 12,
    oriRate: 177,
    disRate: 152,
    feature: ["Fit Type: Regular Fit", "highest quality fabric", "Suitable for all weather condition", "Excellent Washing and Light Fastness"],
    specification: [
      {
        key: "size",
        value: "M"
      },
      {
        key: "color",
        value: "black"
      }
    ],
    images: ["assets/images/product/img-3.png", "assets/images/product/img-3a.png", "assets/images/product/img-3b.png"],
    colorVariant: [
      {
        key: "blue",
        value: "assets/images/product/img-3a.png"
      },
      {
        key: "yellow",
        value: "assets/images/product/img-3.png"
      }
    ]
  },
  {
    id: 4,
    category: "T-shirts",
    name: "Hoodie (Blue)",
    ratings: 3.5,
    reviewCount: 152,
    oriRate: 145,
    disRate: 145,
    feature: ["Fit Type: Regular Fit", "highest quality fabric", "Suitable for all weather condition", "Excellent Washing and Light Fastness"],
    specification: [
      {
        key: "size",
        value: "M"
      },
      {
        key: "color",
        value: "blue"
      }
    ],
    images: ["assets/images/product/img-4.png", "assets/images/product/img-4a.png", "assets/images/product/img-4b.png"],
    colorVariant: [
      {
        key: "pink",
        value: "assets/images/product/img-4.png"
      },
      {
        key: "blue",
        value: "assets/images/product/img-4b.png"
      }
    ]
  },
  {
    id: 5,
    category: "T-shirts",
    name: "Half sleeve T-shirt",
    ratings: 4.3,
    reviewCount: 0,
    discount: 22,
    oriRate: 138,
    disRate: 152,
    feature: ["Fit Type: Regular Fit", "highest quality fabric", "Suitable for all weather condition", "Excellent Washing and Light Fastness"],
    specification: [
      {
        key: "size",
        value: "M"
      },
      {
        key: "color",
        value: "pink"
      }
    ],
    images: ["assets/images/product/img-5.png", "assets/images/product/img-5a.png", "assets/images/product/img-5b.png"],
    colorVariant: [
      {
        key: "pink",
        value: "assets/images/product/img-5b.png"
      },
      {
        key: "green",
        value: "assets/images/product/img-5a.png"
      }
    ]
  },
  {
    id: 6,
    category: "T-shirts",
    name: "Green color T-shirt",
    ratings: 1,
    reviewCount: 0,
    discount: 28,
    oriRate: 135,
    disRate: 100,
    feature: ["Fit Type: Regular Fit", "highest quality fabric", "Suitable for all weather condition", "Excellent Washing and Light Fastness"],
    specification: [
      {
        key: "size",
        value: "M"
      },
      {
        key: "color",
        value: "green"
      }
    ],
    images: ["assets/images/product/img-6.png", "assets/images/product/img-6a.png", "assets/images/product/img-6b.png"],
    colorVariant: [
      {
        key: "black",
        value: "assets/images/product/img-6.png"
      },
      {
        key: "yellow",
        value: "assets/images/product/img-6a.png"
      }
    ]
  }
];

// src/app/pages/ecommerce/products/products.component.ts
var _c0 = (a0) => ["/ecommerce/product-detail", a0];
function ProductsComponent_For_121_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", product_r1.discount, "%");
  }
}
function ProductsComponent_For_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 4)(2, "div", 5)(3, "div", 60)(4, "div", 61);
    \u0275\u0275conditionalCreate(5, ProductsComponent_For_121_Conditional_5_Template, 2, 1, "span", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "img", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 64)(8, "div", 65)(9, "h5", 66)(10, "a", 67);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 68);
    \u0275\u0275element(13, "i", 69);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 70)(16, "h5", 71)(17, "b");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275conditional(product_r1.discount ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275interpolate(product_r1.images[0]), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, product_r1.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r1.ratings);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("$", product_r1.oriRate);
  }
}
var ProductsComponent = class _ProductsComponent {
  constructor(http) {
    this.http = http;
    this.pricevalue = 100;
    this.minVal = 100;
    this.maxVal = 500;
    this.page = 1;
    this.priceoption = {
      floor: 0,
      ceil: 800,
      translate: (value) => {
        return "$" + value;
      }
    };
    this.log = "";
    this.discountRates = [];
    this.products = [];
    this.productTemp = [];
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Ecommerce" }, { label: "Products", active: true }];
    this.products = Object.assign([], productList);
  }
  searchFilter(e) {
    const searchStr = e.target.value;
    this.products = productList.filter((product) => {
      return product.name.toLowerCase().search(searchStr.toLowerCase()) !== -1;
    });
  }
  discountLessFilter(e, percentage) {
    if (e.target.checked && this.discountRates.length === 0) {
      this.products = productList.filter((product) => {
        return product.discount < percentage;
      });
    } else {
      this.products = productList.filter((product) => {
        return product.discount >= Math.max.apply(null, this);
      }, this.discountRates);
    }
  }
  discountMoreFilter(e, percentage) {
    if (e.target.checked) {
      this.discountRates.push(percentage);
    } else {
      this.discountRates.splice(this.discountRates.indexOf(percentage), 1);
    }
    this.products = productList.filter((product) => {
      return product.discount >= Math.max.apply(null, this);
    }, this.discountRates);
  }
  valueChange(value, boundary) {
    if (boundary) {
      this.minVal = value;
    } else {
      this.maxVal = value;
      this.products = productList.filter(function(product) {
        return product.disRate <= value && product.disRate >= this;
      }, this.minVal);
    }
  }
  static {
    this.\u0275fac = function ProductsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductsComponent)(\u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductsComponent, selectors: [["app-products"]], standalone: false, decls: 128, vars: 4, consts: [[1, "container-fluid"], ["title", "Products", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-3"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [1, "font-size-14", "mb-3"], [1, "list-unstyled", "product-list"], ["href", "javascript: void(0);"], [1, "mdi", "mdi-chevron-right", "me-1"], [1, "tablist-name"], [1, "mt-4", "pt-3"], [3, "valueChange", "highValueChange", "value", "highValue", "options"], ["id", "discount-filter", 1, "mt-4", "pt-3"], [1, "form-check", "mt-2"], ["type", "checkbox", "name", "discountCheckbox", "value", "0", "id", "productdiscountCheck1", 1, "form-check-input", 3, "change"], ["for", "productdiscountCheck1", 1, "form-check-label"], ["type", "checkbox", "name", "discountCheckbox", "id", "productdiscountCheck2", 1, "form-check-input", 3, "change"], ["for", "productdiscountCheck2", 1, "form-check-label"], ["type", "checkbox", "name", "discountCheckbox", "id", "productdiscountCheck3", 1, "form-check-input", 3, "change"], ["for", "productdiscountCheck3", 1, "form-check-label"], ["type", "checkbox", "name", "discountCheckbox", "id", "productdiscountCheck4", 1, "form-check-input", 3, "change"], ["for", "productdiscountCheck4", 1, "form-check-label"], ["type", "checkbox", "name", "discountCheckbox", "id", "productdiscountCheck5", 1, "form-check-input", 3, "change"], ["for", "productdiscountCheck5", 1, "form-check-label"], ["type", "checkbox", "name", "discountCheckbox", "id", "productdiscountCheck6", 1, "form-check-input", 3, "change"], ["for", "productdiscountCheck6", 1, "form-check-label"], ["id", "rating-filter"], ["type", "checkbox", "id", "productratingCheck1", 1, "form-check-input"], ["for", "productratingCheck1", 1, "form-check-label"], [1, "rate-value"], [1, "bx", "bxs-star", "text-warning"], ["type", "checkbox", "id", "productratingCheck2", 1, "form-check-input"], ["for", "productratingCheck2", 1, "form-check-label"], ["type", "checkbox", "id", "productratingCheck3", 1, "form-check-input"], ["for", "productratingCheck3", 1, "form-check-label"], ["type", "checkbox", "id", "productratingCheck4", 1, "form-check-input"], ["for", "productratingCheck4", 1, "form-check-label"], [1, "col-lg-9"], [1, "row", "mb-3"], [1, "col-xl-4", "col-sm-6"], [1, "mt-2"], [1, "col-lg-8", "col-sm-6"], [1, "mt-4", "mt-sm-0", "float-sm-end", "d-flex", "align-items-center"], [1, "search-box", "me-2"], [1, "position-relative"], ["type", "text", "id", "searchProductList", "autocomplete", "off", "placeholder", "Search...", 1, "form-control", "border-0", 3, "input"], [1, "bx", "bx-search-alt", "search-icon"], [1, "nav", "nav-pills", "product-view-nav"], [1, "nav-item"], ["href", "javascript: void(0);", 1, "nav-link", "active"], [1, "bx", "bx-grid-alt", "align-middle"], ["href", "javascript: void(0);", 1, "nav-link"], [1, "bx", "bx-list-ul", "align-middle"], ["id", "product-list", 1, "row"], [1, "col-lg-12"], [1, "text-center", "mt-2", "mb-5"], ["href", "javascript:void(0);", 1, "text-success"], [1, "bx", "bx-loader", "bx-spin", "font-size-18", "align-middle", "me-1"], [1, "product-img", "position-relative"], [1, "avatar-sm", "product-ribbon"], [1, "avatar-title", "rounded-circle", "bg-primary"], ["alt", "", 1, "img-fluid", "mx-auto", "d-block", 3, "src"], [1, "mt-4", "d-flex", "align-items-center"], [1, "flex-grow-1"], [1, "mb-1", "text-truncate"], ["href", "javascript: void(0);", 1, "text-dark", 3, "routerLink"], [1, "badge", "bg-success", "font-size-11"], [1, "bx", "bxs-star", "me-1"], [1, "flex-shrink-0"], [1, "my-0"]], template: function ProductsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
        \u0275\u0275text(7, "Filter");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div")(9, "h5", 7);
        \u0275\u0275text(10, "Clothes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "ul", 8)(12, "li")(13, "a", 9);
        \u0275\u0275element(14, "i", 10);
        \u0275\u0275elementStart(15, "span", 11);
        \u0275\u0275text(16, "All");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "li")(18, "a", 9);
        \u0275\u0275element(19, "i", 10);
        \u0275\u0275elementStart(20, "span", 11);
        \u0275\u0275text(21, "T-shirts");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "li")(23, "a", 9);
        \u0275\u0275element(24, "i", 10);
        \u0275\u0275elementStart(25, "span", 11);
        \u0275\u0275text(26, "Shirts");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "li")(28, "a", 9);
        \u0275\u0275element(29, "i", 10);
        \u0275\u0275elementStart(30, "span", 11);
        \u0275\u0275text(31, "Jeans");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "li")(33, "a", 9);
        \u0275\u0275element(34, "i", 10);
        \u0275\u0275elementStart(35, "span", 11);
        \u0275\u0275text(36, "Jackets");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(37, "div", 12)(38, "h5", 7);
        \u0275\u0275text(39, "Price");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "ngx-slider", 13);
        \u0275\u0275twoWayListener("valueChange", function ProductsComponent_Template_ngx_slider_valueChange_40_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.pricevalue, $event) || (ctx.pricevalue = $event);
          return $event;
        })("highValueChange", function ProductsComponent_Template_ngx_slider_highValueChange_40_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.maxVal, $event) || (ctx.maxVal = $event);
          return $event;
        });
        \u0275\u0275listener("valueChange", function ProductsComponent_Template_ngx_slider_valueChange_40_listener($event) {
          return ctx.valueChange($event, true);
        })("highValueChange", function ProductsComponent_Template_ngx_slider_highValueChange_40_listener($event) {
          return ctx.valueChange($event, false);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 14)(42, "h5", 7);
        \u0275\u0275text(43, "Discount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 15)(45, "input", 16);
        \u0275\u0275listener("change", function ProductsComponent_Template_input_change_45_listener($event) {
          return ctx.discountLessFilter($event, 10);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "label", 17);
        \u0275\u0275text(47, "Less than 10%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 15)(49, "input", 18);
        \u0275\u0275listener("change", function ProductsComponent_Template_input_change_49_listener($event) {
          return ctx.discountMoreFilter($event, 10);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "label", 19);
        \u0275\u0275text(51, "10% or more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 15)(53, "input", 20);
        \u0275\u0275listener("change", function ProductsComponent_Template_input_change_53_listener($event) {
          return ctx.discountMoreFilter($event, 20);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "label", 21);
        \u0275\u0275text(55, "20% or more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "div", 15)(57, "input", 22);
        \u0275\u0275listener("change", function ProductsComponent_Template_input_change_57_listener($event) {
          return ctx.discountMoreFilter($event, 30);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "label", 23);
        \u0275\u0275text(59, "30% or more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 15)(61, "input", 24);
        \u0275\u0275listener("change", function ProductsComponent_Template_input_change_61_listener($event) {
          return ctx.discountMoreFilter($event, 40);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "label", 25);
        \u0275\u0275text(63, "40% or more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "div", 15)(65, "input", 26);
        \u0275\u0275listener("change", function ProductsComponent_Template_input_change_65_listener($event) {
          return ctx.discountMoreFilter($event, 50);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "label", 27);
        \u0275\u0275text(67, "50% or more");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(68, "div", 12)(69, "h5", 7);
        \u0275\u0275text(70, "Customer Rating");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "div", 28)(72, "div", 15);
        \u0275\u0275element(73, "input", 29);
        \u0275\u0275elementStart(74, "label", 30)(75, "span", 31);
        \u0275\u0275text(76, "4");
        \u0275\u0275elementEnd();
        \u0275\u0275element(77, "i", 32);
        \u0275\u0275text(78, " & Above");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "div", 15);
        \u0275\u0275element(80, "input", 33);
        \u0275\u0275elementStart(81, "label", 34)(82, "span", 31);
        \u0275\u0275text(83, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275element(84, "i", 32);
        \u0275\u0275text(85, " & Above");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "div", 15);
        \u0275\u0275element(87, "input", 35);
        \u0275\u0275elementStart(88, "label", 36)(89, "span", 31);
        \u0275\u0275text(90, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275element(91, "i", 32);
        \u0275\u0275text(92, " & Above");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "div", 15);
        \u0275\u0275element(94, "input", 37);
        \u0275\u0275elementStart(95, "label", 38)(96, "span", 31);
        \u0275\u0275text(97, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275element(98, "i", 32);
        \u0275\u0275text(99, " & Above");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(100, "div", 39)(101, "div", 40)(102, "div", 41)(103, "div", 42)(104, "h5");
        \u0275\u0275text(105, "Clothes");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(106, "div", 43)(107, "form", 44)(108, "div", 45)(109, "div", 46)(110, "input", 47);
        \u0275\u0275listener("input", function ProductsComponent_Template_input_input_110_listener($event) {
          return ctx.searchFilter($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(111, "i", 48);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(112, "ul", 49)(113, "li", 50)(114, "a", 51);
        \u0275\u0275element(115, "i", 52);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(116, "li", 50)(117, "a", 53);
        \u0275\u0275element(118, "i", 54);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(119, "div", 55);
        \u0275\u0275repeaterCreate(120, ProductsComponent_For_121_Template, 19, 9, "div", 41, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "div", 2)(123, "div", 56)(124, "div", 57)(125, "a", 58);
        \u0275\u0275element(126, "i", 59);
        \u0275\u0275text(127, " Load more ");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(39);
        \u0275\u0275twoWayProperty("value", ctx.pricevalue)("highValue", ctx.maxVal);
        \u0275\u0275property("options", ctx.priceoption);
        \u0275\u0275advance(80);
        \u0275\u0275repeater(ctx.products);
      }
    }, dependencies: [RouterLink, \u0275NgNoValidate, NgControlStatusGroup, NgForm, SliderComponent, PagetitleComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductsComponent, [{
    type: Component,
    args: [{ selector: "app-products", standalone: false, template: `<!-- page title -->\r
<div class="container-fluid">\r
  <!-- page title -->\r
  <app-page-title title="Products" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
\r
  <div class="row">\r
    <div class="col-lg-3">\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title mb-4">Filter</h4>\r
          <div>\r
            <h5 class="font-size-14 mb-3">Clothes</h5>\r
            <ul class="list-unstyled product-list">\r
              <li><a href="javascript: void(0);"><i class="mdi mdi-chevron-right me-1"></i> <span class="tablist-name">All</span></a></li>\r
              <li><a href="javascript: void(0);"><i class="mdi mdi-chevron-right me-1"></i> <span class="tablist-name">T-shirts</span></a></li>\r
              <li><a href="javascript: void(0);"><i class="mdi mdi-chevron-right me-1"></i> <span class="tablist-name">Shirts</span></a></li>\r
              <li><a href="javascript: void(0);"><i class="mdi mdi-chevron-right me-1"></i> <span class="tablist-name">Jeans</span></a></li>\r
              <li><a href="javascript: void(0);"><i class="mdi mdi-chevron-right me-1"></i> <span class="tablist-name">Jackets</span></a></li>\r
            </ul>\r
          </div>\r
          <div class="mt-4 pt-3">\r
            <h5 class="font-size-14 mb-3">Price</h5>\r
            <ngx-slider [(value)]="pricevalue" [(highValue)]="maxVal" [options]="priceoption" (valueChange)="valueChange($event,true)" (highValueChange)="valueChange($event,false)"></ngx-slider>\r
          </div>\r
\r
          <div class="mt-4 pt-3" id="discount-filter">\r
            <h5 class="font-size-14 mb-3">Discount</h5>\r
            <div class="form-check mt-2">\r
              <input type="checkbox" name="discountCheckbox" value="0" class="form-check-input" id="productdiscountCheck1" (change)="discountLessFilter($event,10)">\r
              <label class="form-check-label" for="productdiscountCheck1">Less than 10%</label>\r
            </div>\r
            <div class="form-check mt-2">\r
              <input type="checkbox" name="discountCheckbox" class="form-check-input" id="productdiscountCheck2" (change)="discountMoreFilter($event,10)">\r
              <label class="form-check-label" for="productdiscountCheck2">10% or more</label>\r
            </div>\r
            <div class="form-check mt-2">\r
              <input type="checkbox" name="discountCheckbox" class="form-check-input" id="productdiscountCheck3" (change)="discountMoreFilter($event,20)">\r
              <label class="form-check-label" for="productdiscountCheck3">20% or more</label>\r
            </div>\r
            <div class="form-check mt-2">\r
              <input type="checkbox" name="discountCheckbox" class="form-check-input" id="productdiscountCheck4" (change)="discountMoreFilter($event,30)">\r
              <label class="form-check-label" for="productdiscountCheck4">30% or more</label>\r
            </div>\r
            <div class="form-check mt-2">\r
              <input type="checkbox" name="discountCheckbox" class="form-check-input" id="productdiscountCheck5" (change)="discountMoreFilter($event,40)">\r
              <label class="form-check-label" for="productdiscountCheck5">40% or more</label>\r
            </div>\r
            <div class="form-check mt-2">\r
              <input type="checkbox" name="discountCheckbox" class="form-check-input" id="productdiscountCheck6" (change)="discountMoreFilter($event,50)">\r
              <label class="form-check-label" for="productdiscountCheck6">50% or more</label>\r
            </div>\r
          </div>\r
\r
          <div class="mt-4 pt-3">\r
            <h5 class="font-size-14 mb-3">Customer Rating</h5>\r
            <div id="rating-filter">\r
              <div class="form-check mt-2">\r
                <input type="checkbox" class="form-check-input" id="productratingCheck1">\r
                <label class="form-check-label" for="productratingCheck1"><span class="rate-value">4</span> <i class="bx bxs-star text-warning"></i>\r
                  & Above</label>\r
              </div>\r
              <div class="form-check mt-2">\r
                <input type="checkbox" class="form-check-input" id="productratingCheck2">\r
                <label class="form-check-label" for="productratingCheck2"><span class="rate-value">3</span> <i class="bx bxs-star text-warning"></i>\r
                  & Above</label>\r
              </div>\r
              <div class="form-check mt-2">\r
                <input type="checkbox" class="form-check-input" id="productratingCheck3">\r
                <label class="form-check-label" for="productratingCheck3"><span class="rate-value">2</span> <i class="bx bxs-star text-warning"></i>\r
                  & Above</label>\r
              </div>\r
              <div class="form-check mt-2">\r
                <input type="checkbox" class="form-check-input" id="productratingCheck4">\r
                <label class="form-check-label" for="productratingCheck4"><span class="rate-value">1</span> <i class="bx bxs-star text-warning"></i> & Above</label>\r
              </div>\r
\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="col-lg-9">\r
      <div class="row mb-3">\r
        <div class="col-xl-4 col-sm-6">\r
          <div class="mt-2">\r
            <h5>Clothes</h5>\r
          </div>\r
        </div>\r
        <div class="col-lg-8 col-sm-6">\r
          <form class="mt-4 mt-sm-0 float-sm-end d-flex align-items-center">\r
            <div class="search-box me-2">\r
              <div class="position-relative">\r
                <input type="text" class="form-control border-0" id="searchProductList" autocomplete="off" placeholder="Search..." (input)="searchFilter($event)">\r
                <i class="bx bx-search-alt search-icon"></i>\r
              </div>\r
            </div>\r
            <ul class="nav nav-pills product-view-nav">\r
              <li class="nav-item">\r
                <a class="nav-link active" href="javascript: void(0);"><i class="bx bx-grid-alt align-middle"></i></a>\r
              </li>\r
              <li class="nav-item">\r
                <a class="nav-link" href="javascript: void(0);"><i class="bx bx-list-ul align-middle"></i></a>\r
              </li>\r
            </ul>\r
          </form>\r
        </div>\r
      </div>\r
      <div class="row" id="product-list">\r
        @for(product of products;track $index){\r
        <div class="col-xl-4 col-sm-6">\r
          <div class="card">\r
            <div class="card-body">\r
              <div class="product-img position-relative">\r
                <div class="avatar-sm product-ribbon">\r
                  @if(product.discount){<span class="avatar-title rounded-circle bg-primary">{{product.discount}}%</span>}\r
                </div> <img src="{{product.images[0]}}" alt="" class="img-fluid mx-auto d-block">\r
              </div>\r
              <div class="mt-4 d-flex align-items-center">\r
                <div class="flex-grow-1">\r
                  <h5 class="mb-1 text-truncate"><a href="javascript: void(0);" [routerLink]="['/ecommerce/product-detail',product.id]" class="text-dark">{{product.name}}</a></h5>\r
                  <div class="badge bg-success font-size-11"><i class="bx bxs-star me-1"></i>{{product.ratings}}</div>\r
                </div>\r
                <div class="flex-shrink-0">\r
                  <h5 class="my-0"><b>\${{product.oriRate}}</b></h5>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        }\r
      </div>\r
      <div class="row">\r
        <div class="col-lg-12">\r
          <div class="text-center mt-2 mb-5">\r
            <a href="javascript:void(0);" class="text-success"><i class="bx bx-loader bx-spin font-size-18 align-middle me-1"></i> Load more </a>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <!-- end row -->\r
  </div>\r
</div>` }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductsComponent, { className: "ProductsComponent", filePath: "src/app/pages/ecommerce/products/products.component.ts", lineNumber: 17 });
})();

// src/app/pages/ecommerce/productdetail/productdetail.component.ts
var _c02 = ["slickModal"];
function ProductdetailComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "img", 78);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275interpolate(tab_r2.image), \u0275\u0275sanitizeUrl);
  }
}
function ProductdetailComponent_For_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 51);
    \u0275\u0275element(2, "i", 79);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", i_r3);
  }
}
function ProductdetailComponent_For_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 51);
    \u0275\u0275element(2, "i", 79);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", i_r4);
  }
}
function ProductdetailComponent_For_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 41)(1, "div", 80);
    \u0275\u0275element(2, "img", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", \u0275\u0275interpolate(i_r5.value), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r5.key);
  }
}
function ProductdetailComponent_For_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 82);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6.value);
  }
}
var ProductdetailComponent = class _ProductdetailComponent {
  constructor(route) {
    this.route = route;
    this.carouselOptions = {
      items: 1,
      nav: false,
      dots: false,
      loop: false,
      autoplay: false
      // You can set this to true if you want automatic sliding.
    };
    this.tabs = [
      { image: "assets/images/product/img-1.png", selected: true },
      { image: "assets/images/product/img-2.png", selected: false },
      { image: "assets/images/product/img-3.png", selected: false },
      { image: "assets/images/product/img-4.png", selected: false }
      // Add more tabs and images as needed
    ];
    this.slideConfig = {
      slidesToShow: 1,
      slidesToScroll: 1
      // rtl: this.isRTL
    };
    this.config = {
      slidesToShow: 5,
      slidesToScroll: 1,
      vertical: true,
      arrows: false
    };
    this.route.params.subscribe((params) => this.productDetail = productList.filter(function(product) {
      return product.id == parseInt(params.id);
    }));
    this.isImage = this.productDetail[0].images[0];
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Ecommerce" }, { label: "Product Detail", active: true }];
  }
  /**
   * onclick Image show
   * @param event image passed
   */
  imageShow(event) {
    const image = event.target.src;
    this.isImage = image;
    const expandImg = document.getElementById("expandedImg");
    expandImg.src = image;
  }
  // slick tab change
  slickChange(event) {
    const swiper = document.querySelectorAll(".nav-link");
  }
  slidePreview(id, event) {
    const swiper = document.querySelectorAll(".nav-link");
    swiper.forEach((el) => {
      el.classList.remove("active");
    });
    event.target.closest(".nav-link").classList.add("active");
    this.slickModal.slickGoTo(id);
  }
  static {
    this.\u0275fac = function ProductdetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductdetailComponent)(\u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductdetailComponent, selectors: [["app-productdetail"]], viewQuery: function ProductdetailComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.slickModal = _t.first);
      }
    }, standalone: false, decls: 237, vars: 9, consts: [["slickModal", "slick-carousel"], [1, "container-fluid"], ["title", "Product Detail", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "col-xl-6"], [1, "product-detai-imgs"], [1, "col-md-2", "col-sm-3", "col-4"], ["dir", "ltr", "id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills", 3, "config"], ["id", "product-1-tab", "data-bs-toggle", "pill", "href", "#product-1", "role", "tab", "aria-controls", "product-1", "aria-selected", "true", "ngxSlickItem", "", 1, "nav-link", "active", 3, "click"], ["src", " assets/images/product/img-1.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block", "rounded"], ["id", "product-2-tab", "data-bs-toggle", "pill", "href", "#product-2", "role", "tab", "aria-controls", "product-2", "aria-selected", "false", "ngxSlickItem", "", 1, "nav-link", 3, "click"], ["src", "assets/images/product/img-2.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block", "rounded"], ["id", "product-3-tab", "data-bs-toggle", "pill", "href", "#product-3", "role", "tab", "aria-controls", "product-3", "aria-selected", "false", "ngxSlickItem", "", 1, "nav-link", 3, "click"], ["src", "assets/images/product/img-3.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block", "rounded"], ["id", "product-4-tab", "data-bs-toggle", "pill", "href", "#product-4", "role", "tab", "aria-controls", "product-4", "aria-selected", "false", "ngxSlickItem", "", 1, "nav-link", 3, "click"], ["src", "assets/images/product/img-4.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block", "rounded"], [1, "col-md-7", "offset-md-1", "col-sm-9", "col-8"], ["dir", "ltr", "id", "v-pills-tabContent", 1, "tab-content", "carousel", 3, "afterChange", "config"], ["ngxSlickItem", "", "carouselSlide", "tab.selected", "role", "tabpanel", 1, "swiperlist", "tab-pane", "fade", "show"], [1, "text-center"], ["type", "button", 1, "btn", "btn-primary", "waves-effect", "waves-light", "mt-2", "me-1"], [1, "bx", "bx-cart", "me-2"], ["type", "button", 1, "btn", "btn-success", "waves-effect", "mt-2", "waves-light"], [1, "bx", "bx-shopping-bag", "me-2"], [1, "mt-4", "mt-xl-3"], ["href", "javascript: void(0);", 1, "text-primary"], [1, "mt-1", "mb-3"], [1, "text-muted", "float-left", "me-3"], [1, "bx", "bxs-star", "text-warning"], [1, "bx", "bxs-star"], [1, "text-muted", "mb-4"], [1, "text-success", "text-uppercase"], [1, "mb-4"], [1, "text-muted", "me-2"], [1, "row", "mb-3"], [1, "col-md-6"], [1, "product-color"], [1, "font-size-15"], ["href", "javascript: void(0);", 1, "active"], [1, "mt-5"], [1, "mb-3"], [1, "table-responsive"], [1, "table", "mb-0", "table-bordered"], [1, "d-flex", "py-3", "border-bottom"], [1, "flex-shrink-0", "me-3"], ["src", "assets/images/users/avatar-2.jpg", "alt", "img", 1, "avatar-xs", "me-3", "rounded-circle"], [1, "flex-grow-1"], [1, "mb-1", "font-size-15"], [1, "text-muted"], [1, "list-inline", "float-sm-end", "mb-sm-0"], [1, "list-inline-item"], ["href", "javascript: void(0);"], [1, "far", "fa-thumbs-up", "me-1"], [1, "far", "fa-comment-dots", "me-1"], [1, "text-muted", "font-size-12"], [1, "far", "fa-calendar-alt", "text-primary", "me-1"], ["src", "assets/images/users/avatar-4.jpg", "alt", "img", 1, "avatar-xs", "me-3", "rounded-circle"], [1, "font-size-15", "mb-1"], [1, "d-flex", "mt-4"], [1, "flex-shrink-0", "me-2"], ["src", "assets/images/users/avatar-5.jpg", "alt", "img", 1, "avatar-xs", "me-3", "rounded-circle"], [1, "avatar-xs"], [1, "avatar-title", "bg-primary-subtle", "text-primary", "rounded-circle", "font-size-16"], [1, "row", "mt-3"], [1, "col-xl-4", "col-sm-6"], [1, "row", "align-items-center"], [1, "col-md-4"], ["src", "assets/images/product/img-7.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], [1, "col-md-8"], [1, "text-center", "text-md-start", "pt-3", "pt-md-0"], [1, "text-truncate"], ["href", "javascript: void(0);", 1, "text-dark"], [1, "my-0"], ["src", "assets/images/product/img-4.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/product/img-6.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["alt", "", 1, "img-fluid", "mx-auto", 3, "src"], [1, "bx", "bx-caret-right", "font-size-16", "align-middle", "text-primary", "mr-1"], [1, "product-color-item", "border", "rounded"], ["alt", "", 1, "avatar-md", 3, "src"], ["scope", "row", 2, "width", "400px"]], template: function ProductdetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275element(1, "app-page-title", 2);
        \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "div", 3)(7, "div", 7)(8, "div", 8)(9, "div", 3)(10, "div", 9)(11, "ngx-slick-carousel", 10)(12, "div", 11);
        \u0275\u0275listener("click", function ProductdetailComponent_Template_div_click_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.slidePreview("0", $event));
        });
        \u0275\u0275element(13, "img", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 13);
        \u0275\u0275listener("click", function ProductdetailComponent_Template_div_click_14_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.slidePreview("1", $event));
        });
        \u0275\u0275element(15, "img", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 15);
        \u0275\u0275listener("click", function ProductdetailComponent_Template_div_click_16_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.slidePreview("2", $event));
        });
        \u0275\u0275element(17, "img", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 17);
        \u0275\u0275listener("click", function ProductdetailComponent_Template_div_click_18_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.slidePreview("3", $event));
        });
        \u0275\u0275element(19, "img", 18);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 19)(21, "ngx-slick-carousel", 20, 0);
        \u0275\u0275listener("afterChange", function ProductdetailComponent_Template_ngx_slick_carousel_afterChange_21_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.slickChange($event));
        });
        \u0275\u0275repeaterCreate(23, ProductdetailComponent_For_24_Template, 2, 2, "div", 21, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 22)(26, "button", 23);
        \u0275\u0275element(27, "i", 24);
        \u0275\u0275text(28, " Add to cart ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "button", 25);
        \u0275\u0275element(30, "i", 26);
        \u0275\u0275text(31, "Buy now ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(32, "div", 7)(33, "div", 27)(34, "a", 28);
        \u0275\u0275text(35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "h4", 29);
        \u0275\u0275text(37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "p", 30);
        \u0275\u0275element(39, "span", 31)(40, "span", 31)(41, "span", 31)(42, "span", 31)(43, "span", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "p", 33);
        \u0275\u0275text(45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "h6", 34);
        \u0275\u0275text(47);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "h5", 35);
        \u0275\u0275text(49, "Price : ");
        \u0275\u0275elementStart(50, "span", 36)(51, "del");
        \u0275\u0275text(52);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "b");
        \u0275\u0275text(54);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "p", 33);
        \u0275\u0275text(56, "To achieve this, it would be necessary to have uniform grammar pronunciation and more common words If several languages coalesce");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "div", 37)(58, "div", 38);
        \u0275\u0275repeaterCreate(59, ProductdetailComponent_For_60_Template, 4, 1, "div", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 38);
        \u0275\u0275repeaterCreate(62, ProductdetailComponent_For_63_Template, 4, 1, "div", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "div", 39)(65, "h5", 40);
        \u0275\u0275text(66, "Color :");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(67, ProductdetailComponent_For_68_Template, 5, 3, "a", 41, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(69, "div", 42)(70, "h5", 43);
        \u0275\u0275text(71, "Specifications :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div", 44)(73, "table", 45)(74, "tbody");
        \u0275\u0275repeaterCreate(75, ProductdetailComponent_For_76_Template, 5, 2, "tr", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(77, "div", 42)(78, "h5", 35);
        \u0275\u0275text(79, "Reviews :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "div", 46)(81, "div", 47);
        \u0275\u0275element(82, "img", 48);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "div", 49)(84, "h5", 50);
        \u0275\u0275text(85, "Brian");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "p", 51);
        \u0275\u0275text(87, "If several languages coalesce, the grammar of the resulting language.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "ul", 52)(89, "li", 53)(90, "a", 54);
        \u0275\u0275element(91, "i", 55);
        \u0275\u0275text(92, " Like");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "li", 53)(94, "a", 54);
        \u0275\u0275element(95, "i", 56);
        \u0275\u0275text(96, " Comment");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(97, "div", 57);
        \u0275\u0275element(98, "i", 58);
        \u0275\u0275text(99, " 5 hrs ago ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(100, "div", 46)(101, "div", 47);
        \u0275\u0275element(102, "img", 59);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "div", 49)(104, "h5", 60);
        \u0275\u0275text(105, "Denver");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "p", 51);
        \u0275\u0275text(107, "To an English person, it will seem like simplified English, as a skeptical Cambridge ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "ul", 52)(109, "li", 53)(110, "a", 54);
        \u0275\u0275element(111, "i", 55);
        \u0275\u0275text(112, " Like");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(113, "li", 53)(114, "a", 54);
        \u0275\u0275element(115, "i", 56);
        \u0275\u0275text(116, " Comment");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(117, "div", 57);
        \u0275\u0275element(118, "i", 58);
        \u0275\u0275text(119, " 07 Oct, 2019 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "div", 61)(121, "div", 62);
        \u0275\u0275element(122, "img", 63);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "div", 49)(124, "h5", 50);
        \u0275\u0275text(125, "Henry");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "p", 51);
        \u0275\u0275text(127, "Their separate existence is a myth. For science, music, sport, etc.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "ul", 52)(129, "li", 53)(130, "a", 54);
        \u0275\u0275element(131, "i", 55);
        \u0275\u0275text(132, " Like");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(133, "li", 53)(134, "a", 54);
        \u0275\u0275element(135, "i", 56);
        \u0275\u0275text(136, " Comment");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(137, "div", 57);
        \u0275\u0275element(138, "i", 58);
        \u0275\u0275text(139, " 08 Oct, 2019");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(140, "div", 46)(141, "div", 47)(142, "div", 64)(143, "span", 65);
        \u0275\u0275text(144, " N ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(145, "div", 49)(146, "h5", 50);
        \u0275\u0275text(147, "Neal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(148, "p", 51);
        \u0275\u0275text(149, "Everyone realizes why a new common language would be desirable.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(150, "ul", 52)(151, "li", 53)(152, "a", 54);
        \u0275\u0275element(153, "i", 55);
        \u0275\u0275text(154, " Like");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(155, "li", 53)(156, "a", 54);
        \u0275\u0275element(157, "i", 56);
        \u0275\u0275text(158, " Comment");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(159, "div", 57);
        \u0275\u0275element(160, "i", 58);
        \u0275\u0275text(161, " 05 Oct, 2019 ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(162, "div", 66)(163, "div", 4)(164, "div")(165, "h5", 43);
        \u0275\u0275text(166, "Recent product :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "div", 3)(168, "div", 67)(169, "div", 5)(170, "div", 6)(171, "div", 68)(172, "div", 69);
        \u0275\u0275element(173, "img", 70);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(174, "div", 71)(175, "div", 72)(176, "h5", 73)(177, "a", 74);
        \u0275\u0275text(178, "Wirless Headphone");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(179, "p", 33);
        \u0275\u0275element(180, "i", 31)(181, "i", 31)(182, "i", 31)(183, "i", 31)(184, "i", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(185, "h5", 75)(186, "span", 36)(187, "del");
        \u0275\u0275text(188, "$240");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(189, "b");
        \u0275\u0275text(190, "$225");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(191, "div", 67)(192, "div", 5)(193, "div", 6)(194, "div", 68)(195, "div", 69);
        \u0275\u0275element(196, "img", 76);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(197, "div", 71)(198, "div", 72)(199, "h5", 73)(200, "a", 74);
        \u0275\u0275text(201, "Phone patterned cases");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(202, "p", 33);
        \u0275\u0275element(203, "i", 31)(204, "i", 31)(205, "i", 31)(206, "i", 31)(207, "i", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(208, "h5", 75)(209, "span", 36)(210, "del");
        \u0275\u0275text(211, "$150");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(212, "b");
        \u0275\u0275text(213, "$145");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(214, "div", 67)(215, "div", 5)(216, "div", 6)(217, "div", 68)(218, "div", 69);
        \u0275\u0275element(219, "img", 77);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(220, "div", 71)(221, "div", 72)(222, "h5", 73)(223, "a", 74);
        \u0275\u0275text(224, "Phone Dark Patterned cases");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(225, "p", 33);
        \u0275\u0275element(226, "i", 31)(227, "i", 31)(228, "i", 31)(229, "i", 31)(230, "i", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(231, "h5", 75)(232, "span", 36)(233, "del");
        \u0275\u0275text(234, "$138");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(235, "b");
        \u0275\u0275text(236, "$135");
        \u0275\u0275elementEnd()()()()()()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(10);
        \u0275\u0275property("config", ctx.config);
        \u0275\u0275advance(10);
        \u0275\u0275property("config", ctx.slideConfig);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.tabs);
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.productDetail[0].category);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.productDetail[0].name);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("( ", ctx.productDetail[0].reviewCount, " Customers Review )");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.productDetail[0].discount, " % Off");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("$", ctx.productDetail[0].oriRate, " USD");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("$", ctx.productDetail[0].disRate, " USD");
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.productDetail[0].feature);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.productDetail[0].feature);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.productDetail[0].colorVariant);
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.productDetail[0].specification);
      }
    }, dependencies: [PagetitleComponent, SlickCarouselComponent, SlickItemDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductdetailComponent, [{
    type: Component,
    args: [{ selector: "app-productdetail", standalone: false, template: `<div class="container-fluid">\r
\r
  <!-- start page title -->\r
  <app-page-title title="Product Detail" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
\r
  <div class="row">\r
    <div class="col-lg-12">\r
      <div class="card">\r
        <div class="card-body">\r
          <div class="row">\r
            <div class="col-xl-6">\r
              <div class="product-detai-imgs">\r
                <div class="row">\r
\r
                  <div class="col-md-2 col-sm-3 col-4">\r
                    <ngx-slick-carousel dir="ltr" [config]="config" class="nav flex-column nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">\r
                      <div class="nav-link active" id="product-1-tab" data-bs-toggle="pill" href="#product-1" role="tab" aria-controls="product-1" aria-selected="true" ngxSlickItem (click)="slidePreview('0',$event)">\r
                        <img src=" assets/images/product/img-1.png" alt="" class="img-fluid mx-auto d-block rounded">\r
                      </div>\r
                      <div class="nav-link" id="product-2-tab" data-bs-toggle="pill" href="#product-2" role="tab" aria-controls="product-2" aria-selected="false" (click)="slidePreview('1',$event)" ngxSlickItem>\r
                        <img src="assets/images/product/img-2.png" alt="" class="img-fluid mx-auto d-block rounded">\r
                      </div>\r
                      <div class="nav-link" id="product-3-tab" data-bs-toggle="pill" href="#product-3" role="tab" aria-controls="product-3" aria-selected="false" (click)="slidePreview('2',$event)" ngxSlickItem>\r
                        <img src="assets/images/product/img-3.png" alt="" class="img-fluid mx-auto d-block rounded">\r
                      </div>\r
                      <div class="nav-link" id="product-4-tab" data-bs-toggle="pill" href="#product-4" role="tab" aria-controls="product-4" aria-selected="false" (click)="slidePreview('3',$event)" ngxSlickItem>\r
                        <img src="assets/images/product/img-4.png" alt="" class="img-fluid mx-auto d-block rounded">\r
                      </div>\r
                    </ngx-slick-carousel>\r
                  </div>\r
                  <div class="col-md-7 offset-md-1 col-sm-9 col-8">\r
                    <ngx-slick-carousel dir="ltr" class=" tab-content carousel" id="v-pills-tabContent" #slickModal="slick-carousel" [config]="slideConfig" (afterChange)="slickChange($event)">\r
                      @for (tab of tabs; track $index) {\r
                      <div ngxSlickItem carouselSlide="tab.selected" role="tabpanel" class="swiperlist tab-pane fade  show">\r
                        <img src="{{tab.image}}" alt="" class="img-fluid mx-auto">\r
                      </div>\r
                      }\r
                    </ngx-slick-carousel>\r
                    <div class="text-center">\r
                      <button type="button" class="btn btn-primary waves-effect waves-light mt-2 me-1">\r
                        <i class="bx bx-cart me-2"></i> Add to cart\r
                      </button>\r
                      <button type="button" class="btn btn-success waves-effect  mt-2 waves-light">\r
                        <i class="bx bx-shopping-bag me-2"></i>Buy now\r
                      </button>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="col-xl-6">\r
              <div class="mt-4 mt-xl-3">\r
                <a href="javascript: void(0);" class="text-primary">{{productDetail[0].category}}</a>\r
                <h4 class="mt-1 mb-3">{{productDetail[0].name}}</h4>\r
\r
                <p class="text-muted float-left me-3">\r
                  <span class="bx bxs-star text-warning"></span>\r
                  <span class="bx bxs-star text-warning"></span>\r
                  <span class="bx bxs-star text-warning"></span>\r
                  <span class="bx bxs-star text-warning"></span>\r
                  <span class="bx bxs-star"></span>\r
                </p>\r
                <p class="text-muted mb-4">( {{productDetail[0].reviewCount}} Customers Review )</p>\r
\r
                <h6 class="text-success text-uppercase">{{productDetail[0].discount}} % Off</h6>\r
                <h5 class="mb-4">Price : <span class="text-muted me-2"><del>\${{productDetail[0].oriRate}}\r
                      USD</del></span> <b>\${{productDetail[0].disRate}} USD</b></h5>\r
                <p class="text-muted mb-4">To achieve this, it would be necessary to have uniform grammar pronunciation\r
                  and more common words If several languages coalesce</p>\r
                <div class="row mb-3">\r
                  <div class="col-md-6">\r
                    @for(i of productDetail[0].feature;track $index){\r
                    <div>\r
                      <p class="text-muted"><i class="bx bx-caret-right font-size-16 align-middle text-primary mr-1"></i>\r
                        {{i}}</p>\r
                    </div>\r
                    }\r
                  </div>\r
                  <div class="col-md-6">\r
                    @for(i of productDetail[0].feature;track $index){\r
                    <div>\r
                      <p class="text-muted"><i class="bx bx-caret-right font-size-16 align-middle text-primary mr-1"></i>\r
                        {{i}}</p>\r
                    </div>\r
                    }\r
                  </div>\r
                </div>\r
\r
                <div class="product-color">\r
                  <h5 class="font-size-15">Color :</h5>\r
                  @for(i of productDetail[0].colorVariant;track $index){\r
                  <a href="javascript: void(0);" class="active">\r
                    <div class="product-color-item border rounded">\r
                      <img src={{i.value}} alt="" class="avatar-md">\r
                    </div>\r
                    <p>{{i.key}}</p>\r
                  </a>\r
                  }\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <!-- end row -->\r
\r
          <div class="mt-5">\r
            <h5 class="mb-3">Specifications :</h5>\r
\r
            <div class="table-responsive">\r
              <table class="table mb-0 table-bordered">\r
                <tbody>\r
                  @for(i of productDetail[0].specification;track $index){\r
                  <tr>\r
                    <th scope="row" style="width: 400px;">{{i.key}}</th>\r
                    <td>{{i.value}}</td>\r
                  </tr>\r
                  }\r
                </tbody>\r
              </table>\r
            </div>\r
          </div>\r
          <!-- end Specifications -->\r
\r
          <div class="mt-5">\r
            <h5 class="mb-4">Reviews :</h5>\r
\r
            <div class="d-flex py-3 border-bottom">\r
              <div class="flex-shrink-0 me-3">\r
                <img src="assets/images/users/avatar-2.jpg" class="avatar-xs me-3 rounded-circle" alt="img" />\r
              </div>\r
              <div class="flex-grow-1">\r
                <h5 class="mb-1 font-size-15">Brian</h5>\r
                <p class="text-muted">If several languages coalesce, the grammar of the resulting language.</p>\r
                <ul class="list-inline float-sm-end mb-sm-0">\r
                  <li class="list-inline-item">\r
                    <a href="javascript: void(0);"><i class="far fa-thumbs-up me-1"></i> Like</a>\r
                  </li>\r
                  <li class="list-inline-item">\r
                    <a href="javascript: void(0);"><i class="far fa-comment-dots me-1"></i> Comment</a>\r
                  </li>\r
                </ul>\r
                <div class="text-muted font-size-12"><i class="far fa-calendar-alt text-primary me-1"></i> 5 hrs ago\r
                </div>\r
              </div>\r
            </div>\r
            <div class="d-flex py-3 border-bottom">\r
              <div class="flex-shrink-0 me-3">\r
                <img src="assets/images/users/avatar-4.jpg" class="avatar-xs me-3 rounded-circle" alt="img" />\r
              </div>\r
              <div class="flex-grow-1">\r
                <h5 class="font-size-15 mb-1">Denver</h5>\r
                <p class="text-muted">To an English person, it will seem like simplified English, as a skeptical\r
                  Cambridge\r
                </p>\r
                <ul class="list-inline float-sm-end mb-sm-0">\r
                  <li class="list-inline-item">\r
                    <a href="javascript: void(0);"><i class="far fa-thumbs-up me-1"></i> Like</a>\r
                  </li>\r
                  <li class="list-inline-item">\r
                    <a href="javascript: void(0);"><i class="far fa-comment-dots me-1"></i> Comment</a>\r
                  </li>\r
                </ul>\r
                <div class="text-muted font-size-12"><i class="far fa-calendar-alt text-primary me-1"></i> 07 Oct, 2019\r
                </div>\r
                <div class="d-flex mt-4">\r
                  <div class="flex-shrink-0 me-2">\r
                    <img src="assets/images/users/avatar-5.jpg" class="avatar-xs me-3 rounded-circle" alt="img" />\r
                  </div>\r
                  <div class="flex-grow-1">\r
                    <h5 class="mb-1 font-size-15">Henry</h5>\r
                    <p class="text-muted">Their separate existence is a myth. For science, music, sport, etc.</p>\r
                    <ul class="list-inline float-sm-end mb-sm-0">\r
                      <li class="list-inline-item">\r
                        <a href="javascript: void(0);"><i class="far fa-thumbs-up me-1"></i> Like</a>\r
                      </li>\r
                      <li class="list-inline-item">\r
                        <a href="javascript: void(0);"><i class="far fa-comment-dots me-1"></i> Comment</a>\r
                      </li>\r
                    </ul>\r
                    <div class="text-muted font-size-12"><i class="far fa-calendar-alt text-primary me-1"></i> 08 Oct,\r
                      2019</div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="d-flex py-3 border-bottom">\r
              <div class="flex-shrink-0 me-3">\r
                <div class="avatar-xs">\r
                  <span class="avatar-title bg-primary-subtle text-primary rounded-circle font-size-16">\r
                    N\r
                  </span>\r
                </div>\r
              </div>\r
              <div class="flex-grow-1">\r
                <h5 class="mb-1 font-size-15">Neal</h5>\r
                <p class="text-muted">Everyone realizes why a new common language would be desirable.</p>\r
                <ul class="list-inline float-sm-end mb-sm-0">\r
                  <li class="list-inline-item">\r
                    <a href="javascript: void(0);"><i class="far fa-thumbs-up me-1"></i> Like</a>\r
                  </li>\r
                  <li class="list-inline-item">\r
                    <a href="javascript: void(0);"><i class="far fa-comment-dots me-1"></i> Comment</a>\r
                  </li>\r
                </ul>\r
                <div class="text-muted font-size-12"><i class="far fa-calendar-alt text-primary me-1"></i> 05 Oct, 2019\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
        </div>\r
      </div>\r
\r
\r
      <div class="row mt-3">\r
        <div class="col-lg-12">\r
          <div>\r
            <h5 class="mb-3">Recent product :</h5>\r
\r
            <div class="row">\r
              <div class="col-xl-4 col-sm-6">\r
                <div class="card">\r
                  <div class="card-body">\r
                    <div class="row align-items-center">\r
                      <div class="col-md-4">\r
                        <img src="assets/images/product/img-7.png" alt="" class="img-fluid mx-auto d-block">\r
                      </div>\r
                      <div class="col-md-8">\r
                        <div class="text-center text-md-start pt-3 pt-md-0">\r
                          <h5 class="text-truncate"><a href="javascript: void(0);" class="text-dark">Wirless\r
                              Headphone</a></h5>\r
                          <p class="text-muted mb-4">\r
                            <i class="bx bxs-star text-warning"></i>\r
                            <i class="bx bxs-star text-warning"></i>\r
                            <i class="bx bxs-star text-warning"></i>\r
                            <i class="bx bxs-star text-warning"></i>\r
                            <i class="bx bxs-star"></i>\r
                          </p>\r
                          <h5 class="my-0"><span class="text-muted me-2"><del>$240</del></span> <b>$225</b></h5>\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="col-xl-4 col-sm-6">\r
                <div class="card">\r
                  <div class="card-body">\r
                    <div class="row align-items-center">\r
                      <div class="col-md-4">\r
                        <img src="assets/images/product/img-4.png" alt="" class="img-fluid mx-auto d-block">\r
                      </div>\r
                      <div class="col-md-8">\r
                        <div class="text-center text-md-start pt-3 pt-md-0">\r
                          <h5 class="text-truncate"><a href="javascript: void(0);" class="text-dark">Phone patterned\r
                              cases</a></h5>\r
                          <p class="text-muted mb-4">\r
                            <i class="bx bxs-star text-warning"></i>\r
                            <i class="bx bxs-star text-warning"></i>\r
                            <i class="bx bxs-star text-warning"></i>\r
                            <i class="bx bxs-star text-warning"></i>\r
                            <i class="bx bxs-star"></i>\r
                          </p>\r
                          <h5 class="my-0"><span class="text-muted me-2"><del>$150</del></span> <b>$145</b></h5>\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="col-xl-4 col-sm-6">\r
                <div class="card">\r
                  <div class="card-body">\r
                    <div class="row align-items-center">\r
                      <div class="col-md-4">\r
                        <img src="assets/images/product/img-6.png" alt="" class="img-fluid mx-auto d-block">\r
                      </div>\r
                      <div class="col-md-8">\r
                        <div class="text-center text-md-start pt-3 pt-md-0">\r
\r
                          <h5 class="text-truncate"><a href="javascript: void(0);" class="text-dark">Phone Dark\r
                              Patterned cases</a></h5>\r
                          <p class="text-muted mb-4">\r
                            <i class="bx bxs-star text-warning"></i>\r
                            <i class="bx bxs-star text-warning"></i>\r
                            <i class="bx bxs-star text-warning"></i>\r
                            <i class="bx bxs-star text-warning"></i>\r
                            <i class="bx bxs-star"></i>\r
                          </p>\r
                          <h5 class="my-0"><span class="text-muted me-2"><del>$138</del></span> <b>$135</b></h5>\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
            <!-- end row -->\r
          </div>\r
        </div>\r
      </div>\r
      <!-- end row -->` }]
  }], () => [{ type: ActivatedRoute }], { slickModal: [{
    type: ViewChild,
    args: ["slickModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductdetailComponent, { className: "ProductdetailComponent", filePath: "src/app/pages/ecommerce/productdetail/productdetail.component.ts", lineNumber: 16 });
})();

// src/app/pages/ecommerce/shops/data.ts
var shopsData = [
  {
    title: "Brendle's",
    poducts: 112,
    balance: "$13,575",
    color: "primary"
  },
  {
    title: "Tech Hifi",
    poducts: 104,
    balance: "$11,145",
    color: "warning"
  },
  {
    title: "Lafayette",
    poducts: 126,
    balance: "$12,356",
    color: "danger"
  },
  {
    title: "Packer",
    poducts: 102,
    balance: "$11,228",
    color: "success"
  },
  {
    title: "Nedick's",
    poducts: 96,
    balance: "$9,235",
    color: "info"
  },
  {
    title: "Hudson's",
    poducts: 120,
    balance: "$14,794",
    color: "dark"
  },
  {
    title: "Tech Hifi",
    poducts: 104,
    balance: "$11,145",
    color: "dark"
  },
  {
    title: "Brendle's",
    poducts: 112,
    balance: "$13,575",
    color: "primary"
  },
  {
    title: "Lafayette",
    poducts: 126,
    balance: "$12,356",
    color: "success"
  }
];

// src/app/pages/ecommerce/shops/shops.component.ts
function ShopsComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 8)(2, "div", 2)(3, "div", 9)(4, "div", 10)(5, "div", 11)(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "h5", 12);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 13)(11, "div", 14)(12, "div", 2)(13, "div", 15)(14, "div")(15, "p", 16);
    \u0275\u0275text(16, "Products");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "h5");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 15)(20, "div")(21, "p", 16);
    \u0275\u0275text(22, "Wallet Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "h5");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 17)(26, "a", 18);
    \u0275\u0275text(27, "See Profile ");
    \u0275\u0275element(28, "i", 19);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275classMap(\u0275\u0275interpolate2("avatar-title rounded-circle bg-", data_r1.color, "-subtle text-", data_r1.color, " font-size-16"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r1.title.charAt(0), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.title);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(data_r1.poducts);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(data_r1.balance);
  }
}
var ShopsComponent = class _ShopsComponent {
  constructor() {
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Ecommerce" }, { label: "Shops", active: true }];
    this._fetchData();
  }
  /**
   * Fetches the data
   */
  _fetchData() {
    this.shopsData = shopsData;
  }
  static {
    this.\u0275fac = function ShopsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ShopsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShopsComponent, selectors: [["app-shops"]], standalone: false, decls: 11, vars: 1, consts: [[1, "container-fluid"], ["title", "Shops", 3, "breadcrumbItems"], [1, "row"], [1, "col-xl-4", "col-sm-6"], [1, "col-12"], [1, "text-center", "my-3"], ["href", "javascript:void(0);", 1, "text-success"], [1, "bx", "bx-loader", "bx-spin", "font-size-18", "align-middle", "me-1"], [1, "card"], [1, "col-xl-5"], [1, "text-center", "p-4", "border-end"], [1, "avatar-sm", "mx-auto", "mb-3", "mt-1"], [1, "text-truncate", "pb-1"], [1, "col-xl-7"], [1, "p-4", "text-center", "text-xl-start"], [1, "col-md-6"], [1, "text-muted", "mb-2", "text-truncate"], [1, "mt-4"], ["href", "javascript: void(0);", 1, "text-decoration-underline", "text-reset"], [1, "mdi", "mdi-arrow-right"]], template: function ShopsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275repeaterCreate(3, ShopsComponent_For_4_Template, 29, 8, "div", 3, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 2)(6, "div", 4)(7, "div", 5)(8, "a", 6);
        \u0275\u0275element(9, "i", 7);
        \u0275\u0275text(10, " Load more ");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.shopsData);
      }
    }, dependencies: [PagetitleComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShopsComponent, [{
    type: Component,
    args: [{ selector: "app-shops", standalone: false, template: '<div class="container-fluid">\r\n\r\n  <app-page-title title="Shops" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r\n\r\n  <div class="row">\r\n    @for(data of shopsData;track $index){\r\n    <div class="col-xl-4 col-sm-6">\r\n      <div class="card">\r\n        <div class="row">\r\n          <div class="col-xl-5">\r\n            <div class="text-center p-4 border-end">\r\n              <div class="avatar-sm mx-auto mb-3 mt-1">\r\n                <span class="avatar-title rounded-circle bg-{{data.color}}-subtle text-{{data.color}} font-size-16">\r\n                  {{data.title.charAt(0)}}\r\n                </span>\r\n              </div>\r\n              <h5 class="text-truncate pb-1">{{data.title}}</h5>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="col-xl-7">\r\n            <div class="p-4 text-center text-xl-start">\r\n              <div class="row">\r\n                <div class="col-md-6">\r\n                  <div>\r\n                    <p class="text-muted mb-2 text-truncate">Products</p>\r\n                    <h5>{{data.poducts}}</h5>\r\n                  </div>\r\n                </div>\r\n                <div class="col-md-6">\r\n                  <div>\r\n                    <p class="text-muted mb-2 text-truncate">Wallet Balance</p>\r\n                    <h5>{{data.balance}}</h5>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class="mt-4">\r\n                <a href="javascript: void(0);" class="text-decoration-underline text-reset">See Profile\r\n                  <i class="mdi mdi-arrow-right"></i></a>\r\n\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>}\r\n  </div>\r\n  <!--  end row -->\r\n\r\n  <div class="row">\r\n    <div class="col-12">\r\n      <div class="text-center my-3">\r\n        <a href="javascript:void(0);" class="text-success"><i class="bx bx-loader bx-spin font-size-18 align-middle me-1"></i> Load more </a>\r\n      </div>\r\n    </div> <!-- end col-->\r\n  </div>\r\n  <!-- end row -->\r\n</div> <!-- container-fluid -->' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShopsComponent, { className: "ShopsComponent", filePath: "src/app/pages/ecommerce/shops/shops.component.ts", lineNumber: 17 });
})();

// src/app/pages/ecommerce/checkout/checkout.component.ts
function CheckoutComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 91);
    \u0275\u0275elementStart(1, "p", 92);
    \u0275\u0275text(2, "Shipping Info");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_ng_template_170_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 93);
    \u0275\u0275elementStart(1, "p", 92);
    \u0275\u0275text(2, "Payment Info");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_ng_template_229_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 94);
    \u0275\u0275elementStart(1, "p", 92);
    \u0275\u0275text(2, "Confirmation");
    \u0275\u0275elementEnd();
  }
}
var CheckoutComponent = class _CheckoutComponent {
  constructor() {
    this.selectValue = [];
    this.stateValue = [];
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Ecommerce" }, { label: "Checkout", active: true }];
    this.selectValue = [
      "Afghanistan",
      "Albania",
      "Algeria",
      "American Samoa",
      "Andorra",
      "Angola",
      "Anguilla",
      "Antarctica",
      "Argentina",
      "Hawaii",
      "California",
      "Colombia",
      "Congo",
      "Dominica",
      "Denmark",
      "Nevada",
      "Oregon",
      "Washington",
      "Ecuador",
      "Idaho",
      "Montana",
      "Namibia",
      "Nauru",
      "Nepal",
      "Netherlands",
      "Nicaragua",
      "New Caledonia",
      "North Dakota",
      "Tonga",
      "Tunisia",
      "Thailand",
      "Turkey",
      "Illinois",
      "Tuvalu",
      "Uganda",
      "Uruguay",
      "United Arab Emirates",
      "United Kingdom",
      "Venezuela",
      "Zimbabwe",
      "Uruguay"
    ];
    this.stateValue = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Delaware", "Florida", "Georgia", "Hawaii", "Montana", "Nevada", "New Mexico", "New York", "North Dakota", "Texas", "Virginia", "Wisconsin", "Wyoming"];
  }
  static {
    this.\u0275fac = function CheckoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutComponent, selectors: [["app-checkout"]], standalone: false, decls: 300, vars: 4, consts: [[1, "container-fluid"], ["title", "Checkout", 3, "breadcrumbItems"], [1, "checkout-tabs"], [1, "row"], [1, "col-xl-12"], [1, "nav-pills", "flex-column", "ecommerce-checkout-tab", 3, "vertical"], ["tabHeading", ""], [1, "card"], [1, "card-body"], ["id", "v-pills-tabContent", 1, "tab-content"], ["id", "v-pills-shipping", "role", "tabpanel", "aria-labelledby", "v-pills-shipping-tab", 1, "tab-pane", "fade", "show", "active"], [1, "card-title"], [1, "card-title-desc"], [1, "row", "mb-4"], ["for", "billing-name", 1, "col-md-2", "col-form-label"], [1, "col-md-10"], ["type", "text", "id", "billing-name", "placeholder", "Enter your name", 1, "form-control"], ["for", "billing-email-address", 1, "col-md-2", "col-form-label"], ["type", "email", "id", "billing-email-address", "placeholder", "Enter your email", 1, "form-control"], ["for", "billing-phone", 1, "col-md-2", "col-form-label"], ["type", "text", "id", "billing-phone", "placeholder", "Enter your Phone no.", 1, "form-control"], ["for", "billing-address", 1, "col-md-2", "col-form-label"], ["id", "billing-address", "rows", "3", "placeholder", "Enter full address", 1, "form-control"], [1, "col-md-2", "col-form-label"], [3, "items"], [1, "row", "mb-0"], ["for", "example-textarea", 1, "col-md-2", "col-form-label"], ["id", "example-textarea", "rows", "3", "placeholder", "Write some note..", 1, "form-control"], ["id", "v-pills-payment", "role", "tabpanel", "aria-labelledby", "v-pills-payment-tab", 1, "tab-pane", "fade"], [1, "custom-control", "custom-radio", "custom-control-inline", "mr-4"], ["type", "radio", "id", "customRadioInline1", "name", "customRadioInline1", 1, "custom-control-input"], ["for", "customRadioInline1", 1, "custom-control-label"], [1, "fab", "fa-cc-mastercard", "me-1", "font-size-20", "align-top"], ["type", "radio", "id", "customRadioInline2", "name", "customRadioInline1", 1, "custom-control-input"], ["for", "customRadioInline2", 1, "custom-control-label"], [1, "fab", "fa-cc-paypal", "me-1", "font-size-20", "align-top"], ["type", "radio", "id", "customRadioInline3", "name", "customRadioInline1", "checked", "", 1, "custom-control-input"], ["for", "customRadioInline3", 1, "custom-control-label"], [1, "far", "fa-money-bill-alt", "me-1", "font-size-20", "align-top"], [1, "mt-5", "mb-3", "font-size-15"], [1, "p-4", "border"], [1, "mb-0"], ["for", "cardnumberInput"], ["type", "text", "id", "cardnumberInput", "placeholder", "0000 0000 0000 0000", 1, "form-control"], [1, "col-lg-6"], [1, "mt-4", "mb-0"], ["for", "cardnameInput"], ["type", "text", "id", "cardnameInput", "placeholder", "Name on Card", 1, "form-control"], [1, "col-lg-3"], ["for", "expirydateInput"], ["type", "text", "id", "expirydateInput", "placeholder", "MM/YY", 1, "form-control"], ["for", "cvvcodeInput"], ["type", "text", "id", "cvvcodeInput", "placeholder", "Enter CVV Code", 1, "form-control"], ["id", "v-pills-confir", "role", "tabpanel", "aria-labelledby", "v-pills-confir-tab", 1, "tab-pane", "fade"], [1, "card", "shadow-none", "border", "mb-0"], [1, "card-title", "mb-4"], [1, "table-responsive"], [1, "table", "table-centered", "mb-0", "table-nowrap"], [1, "thead-light"], ["scope", "col"], ["scope", "row"], ["src", "assets/images/product/img-1.png", "alt", "product-img", "title", "product-img", 1, "avatar-md"], [1, "font-size-14", "text-truncate"], ["routerLink", "/ecommerce/product-detail", 1, "text-dark"], [1, "text-muted", "mb-0"], ["src", "assets/images/product/img-7.png", "alt", "product-img", "title", "product-img", 1, "avatar-md"], ["colspan", "2"], [1, "m-0"], ["colspan", "3"], [1, "bg-primary-subtle", "p-3", "rounded"], [1, "font-size-14", "text-primary", "mb-0"], [1, "fas", "fa-shipping-fast", "me-2"], [1, "float-end"], [1, "row", "my-4"], [1, "col-sm-2"], [1, "col-sm-4"], ["routerLink", "/ecommerce/cart", 1, "btn", "text-muted", "d-none", "d-sm-inline-block", "btn-link"], [1, "mdi", "mdi-arrow-left", "me-1"], [1, "col-sm-6"], [1, "text-sm-end"], ["routerLink", "/ecommerce/checkout", 1, "btn", "btn-success"], [1, "mdi", "mdi-truck-fast", "me-1"], [1, "form-check", "form-check-inline", "font-size-16"], ["type", "radio", "name", "paymentoptionsRadio", "id", "paymentoptionsRadio1", "checked", "", 1, "form-check-input"], ["for", "paymentoptionsRadio1", 1, "form-check-label", "font-size-13"], ["type", "radio", "name", "paymentoptionsRadio", "id", "paymentoptionsRadio2", 1, "form-check-input"], ["for", "paymentoptionsRadio2", 1, "form-check-label", "font-size-13"], ["type", "radio", "name", "paymentoptionsRadio", "id", "paymentoptionsRadio3", 1, "form-check-input"], ["for", "paymentoptionsRadio3", 1, "form-check-label", "font-size-13"], [1, "table", "align-middle", "mb-0", "table-nowrap"], [1, "table-light"], [1, "bx", "bxs-truck", "d-block", "check-nav-icon", "mt-4", "mb-2"], [1, "fw-bold", "mb-4"], [1, "bx", "bx-money", "d-block", "check-nav-icon", "mt-4", "mb-2"], [1, "bx", "bx-badge-check", "d-block", "check-nav-icon", "mt-4", "mb-2"]], template: function CheckoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "tabset", 5)(6, "tab");
        \u0275\u0275template(7, CheckoutComponent_ng_template_7_Template, 3, 0, "ng-template", 6);
        \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div")(13, "h4", 11);
        \u0275\u0275text(14, "Shipping information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "p", 12);
        \u0275\u0275text(16, "Fill all information below");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "form")(18, "div", 13)(19, "label", 14);
        \u0275\u0275text(20, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 15);
        \u0275\u0275element(22, "input", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 13)(24, "label", 17);
        \u0275\u0275text(25, "Email Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 15);
        \u0275\u0275element(27, "input", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 13)(29, "label", 19);
        \u0275\u0275text(30, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 15);
        \u0275\u0275element(32, "input", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 13)(34, "label", 21);
        \u0275\u0275text(35, "Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 15);
        \u0275\u0275element(37, "textarea", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 13)(39, "label", 23);
        \u0275\u0275text(40, "Country");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 15);
        \u0275\u0275element(42, "ng-select", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 13)(44, "label", 23);
        \u0275\u0275text(45, "States");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 15);
        \u0275\u0275element(47, "ng-select", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 25)(49, "label", 26);
        \u0275\u0275text(50, "Order Notes:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "div", 15);
        \u0275\u0275element(52, "textarea", 27);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(53, "div", 28)(54, "div")(55, "h4", 11);
        \u0275\u0275text(56, "Payment information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "p", 12);
        \u0275\u0275text(58, "Fill all information below");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "div")(60, "div", 29);
        \u0275\u0275element(61, "input", 30);
        \u0275\u0275elementStart(62, "label", 31);
        \u0275\u0275element(63, "i", 32);
        \u0275\u0275text(64, " Credit / Debit Card");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "div", 29);
        \u0275\u0275element(66, "input", 33);
        \u0275\u0275elementStart(67, "label", 34);
        \u0275\u0275element(68, "i", 35);
        \u0275\u0275text(69, " Paypal");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "div", 29);
        \u0275\u0275element(71, "input", 36);
        \u0275\u0275elementStart(72, "label", 37);
        \u0275\u0275element(73, "i", 38);
        \u0275\u0275text(74, " Cash on Delivery");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(75, "h5", 39);
        \u0275\u0275text(76, "For card Payment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "div", 40)(78, "form")(79, "div", 41)(80, "label", 42);
        \u0275\u0275text(81, "Card Number");
        \u0275\u0275elementEnd();
        \u0275\u0275element(82, "input", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "div", 3)(84, "div", 44)(85, "div", 45)(86, "label", 46);
        \u0275\u0275text(87, "Name on card");
        \u0275\u0275elementEnd();
        \u0275\u0275element(88, "input", 47);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "div", 48)(90, "div", 45)(91, "label", 49);
        \u0275\u0275text(92, "Expiry date");
        \u0275\u0275elementEnd();
        \u0275\u0275element(93, "input", 50);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(94, "div", 48)(95, "div", 45)(96, "label", 51);
        \u0275\u0275text(97, "CVV Code");
        \u0275\u0275elementEnd();
        \u0275\u0275element(98, "input", 52);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(99, "div", 53)(100, "div", 54)(101, "div", 8)(102, "h4", 55);
        \u0275\u0275text(103, "Order Summary");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "div", 56)(105, "table", 57)(106, "thead", 58)(107, "tr")(108, "th", 59);
        \u0275\u0275text(109, "Product");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "th", 59);
        \u0275\u0275text(111, "Product Desc");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "th", 59);
        \u0275\u0275text(113, "Price");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(114, "tbody");
        \u0275\u0275text(115, " sssssssssssssssssssss ");
        \u0275\u0275elementStart(116, "tr")(117, "th", 60);
        \u0275\u0275element(118, "img", 61);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "td")(120, "h5", 62)(121, "a", 63);
        \u0275\u0275text(122, "Half sleeve T-shirt (64GB) ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(123, "p", 64);
        \u0275\u0275text(124, "$ 450 x 1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(125, "td");
        \u0275\u0275text(126, "$ 450");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(127, "tr")(128, "th", 60);
        \u0275\u0275element(129, "img", 65);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "td")(131, "h5", 62)(132, "a", 63);
        \u0275\u0275text(133, "Wirless Headphone");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(134, "p", 64);
        \u0275\u0275text(135, "$ 225 x 1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(136, "td");
        \u0275\u0275text(137, "$ 225");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(138, "tr")(139, "td", 66)(140, "h6", 67);
        \u0275\u0275text(141, "Sub Total:");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(142, "td");
        \u0275\u0275text(143, " $ 675 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(144, "tr")(145, "td", 68)(146, "div", 69)(147, "h5", 70);
        \u0275\u0275element(148, "i", 71);
        \u0275\u0275text(149, " Shipping ");
        \u0275\u0275elementStart(150, "span", 72);
        \u0275\u0275text(151, "Free");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(152, "tr")(153, "td", 66)(154, "h6", 67);
        \u0275\u0275text(155, "Total:");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(156, "td");
        \u0275\u0275text(157, " $ 675 ");
        \u0275\u0275elementEnd()()()()()()()()()()();
        \u0275\u0275elementStart(158, "div", 73);
        \u0275\u0275element(159, "div", 74);
        \u0275\u0275elementStart(160, "div", 75)(161, "a", 76);
        \u0275\u0275element(162, "i", 77);
        \u0275\u0275text(163, " Back to Shopping Cart ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(164, "div", 78)(165, "div", 79)(166, "a", 80);
        \u0275\u0275element(167, "i", 81);
        \u0275\u0275text(168, " Proceed to Shipping ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(169, "tab");
        \u0275\u0275template(170, CheckoutComponent_ng_template_170_Template, 3, 0, "ng-template", 6);
        \u0275\u0275elementStart(171, "div", 7)(172, "div", 8)(173, "h4", 11);
        \u0275\u0275text(174, "Payment information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(175, "p", 12);
        \u0275\u0275text(176, "Fill all information below");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(177, "div")(178, "div", 82);
        \u0275\u0275element(179, "input", 83);
        \u0275\u0275elementStart(180, "label", 84);
        \u0275\u0275element(181, "i", 32);
        \u0275\u0275text(182, " Credit / Debit Card");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(183, "div", 82);
        \u0275\u0275element(184, "input", 85);
        \u0275\u0275elementStart(185, "label", 86);
        \u0275\u0275element(186, "i", 35);
        \u0275\u0275text(187, " Paypal");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(188, "div", 82);
        \u0275\u0275element(189, "input", 87);
        \u0275\u0275elementStart(190, "label", 88);
        \u0275\u0275element(191, "i", 38);
        \u0275\u0275text(192, " Cash on Delivery");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(193, "h5", 39);
        \u0275\u0275text(194, "For card Payment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(195, "div", 40)(196, "form")(197, "div", 41)(198, "label", 42);
        \u0275\u0275text(199, "Card Number");
        \u0275\u0275elementEnd();
        \u0275\u0275element(200, "input", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(201, "div", 3)(202, "div", 44)(203, "div", 45)(204, "label", 46);
        \u0275\u0275text(205, "Name on card");
        \u0275\u0275elementEnd();
        \u0275\u0275element(206, "input", 47);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(207, "div", 48)(208, "div", 45)(209, "label", 49);
        \u0275\u0275text(210, "Expiry date");
        \u0275\u0275elementEnd();
        \u0275\u0275element(211, "input", 50);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(212, "div", 48)(213, "div", 45)(214, "label", 51);
        \u0275\u0275text(215, "CVV Code");
        \u0275\u0275elementEnd();
        \u0275\u0275element(216, "input", 52);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(217, "div", 73);
        \u0275\u0275element(218, "div", 74);
        \u0275\u0275elementStart(219, "div", 75)(220, "a", 76);
        \u0275\u0275element(221, "i", 77);
        \u0275\u0275text(222, " Back to Shopping Cart ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(223, "div", 78)(224, "div", 79)(225, "a", 80);
        \u0275\u0275element(226, "i", 81);
        \u0275\u0275text(227, " Proceed to Shipping ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(228, "tab");
        \u0275\u0275template(229, CheckoutComponent_ng_template_229_Template, 3, 0, "ng-template", 6);
        \u0275\u0275elementStart(230, "div", 7)(231, "div", 8)(232, "div", 54)(233, "div", 8)(234, "h4", 55);
        \u0275\u0275text(235, "Order Summary");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(236, "div", 56)(237, "table", 89)(238, "thead", 90)(239, "tr")(240, "th", 59);
        \u0275\u0275text(241, "Product");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(242, "th", 59);
        \u0275\u0275text(243, "Product Desc");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(244, "th", 59);
        \u0275\u0275text(245, "Price");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(246, "tbody")(247, "tr")(248, "th", 60);
        \u0275\u0275element(249, "img", 61);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(250, "td")(251, "h5", 62)(252, "a", 63);
        \u0275\u0275text(253, "Half sleeve T-shirt (64GB) ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(254, "p", 64);
        \u0275\u0275text(255, "$ 450 x 1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(256, "td");
        \u0275\u0275text(257, "$ 450");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(258, "tr")(259, "th", 60);
        \u0275\u0275element(260, "img", 65);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(261, "td")(262, "h5", 62)(263, "a", 63);
        \u0275\u0275text(264, "Wirless Headphone ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(265, "p", 64);
        \u0275\u0275text(266, "$ 225 x 1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(267, "td");
        \u0275\u0275text(268, "$ 225");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(269, "tr")(270, "td", 66)(271, "h6", 67);
        \u0275\u0275text(272, "Sub Total:");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(273, "td");
        \u0275\u0275text(274, " $ 675 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(275, "tr")(276, "td", 68)(277, "div", 69)(278, "h5", 70);
        \u0275\u0275element(279, "i", 71);
        \u0275\u0275text(280, " Shipping ");
        \u0275\u0275elementStart(281, "span", 72);
        \u0275\u0275text(282, "Free");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(283, "tr")(284, "td", 66)(285, "h6", 67);
        \u0275\u0275text(286, "Total:");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(287, "td");
        \u0275\u0275text(288, " $ 675 ");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(289, "div", 73);
        \u0275\u0275element(290, "div", 74);
        \u0275\u0275elementStart(291, "div", 75)(292, "a", 76);
        \u0275\u0275element(293, "i", 77);
        \u0275\u0275text(294, " Back to Shopping Cart ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(295, "div", 78)(296, "div", 79)(297, "a", 80);
        \u0275\u0275element(298, "i", 81);
        \u0275\u0275text(299, " Proceed to Shipping ");
        \u0275\u0275elementEnd()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(4);
        \u0275\u0275property("vertical", true);
        \u0275\u0275advance(37);
        \u0275\u0275property("items", ctx.selectValue);
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.stateValue);
      }
    }, dependencies: [RouterLink, TabDirective, TabsetComponent, TabHeadingDirective, \u0275NgNoValidate, NgControlStatusGroup, NgForm, NgSelectComponent, PagetitleComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutComponent, [{
    type: Component,
    args: [{ selector: "app-checkout", standalone: false, template: '<div class="container-fluid">\r\n  <app-page-title title="Checkout" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r\n  <div class="checkout-tabs">\r\n    <div class="row">\r\n      <div class="col-xl-12">\r\n        <tabset [vertical]="true" class="nav-pills flex-column ecommerce-checkout-tab">\r\n          <tab>\r\n            <ng-template tabHeading>\r\n              <i class="bx bxs-truck d-block check-nav-icon mt-4 mb-2"></i>\r\n              <p class="fw-bold mb-4">Shipping Info</p>\r\n            </ng-template>\r\n\r\n            <div class="card">\r\n              <div class="card-body">\r\n                <div class="tab-content" id="v-pills-tabContent">\r\n                  <div class="tab-pane fade show active" id="v-pills-shipping" role="tabpanel" aria-labelledby="v-pills-shipping-tab">\r\n                    <div>\r\n                      <h4 class="card-title">Shipping information</h4>\r\n                      <p class="card-title-desc">Fill all information below</p>\r\n                      <form>\r\n                        <div class="row mb-4">\r\n                          <label for="billing-name" class="col-md-2 col-form-label">Name</label>\r\n                          <div class="col-md-10">\r\n                            <input type="text" class="form-control" id="billing-name" placeholder="Enter your name">\r\n                          </div>\r\n                        </div>\r\n                        <div class="row mb-4">\r\n                          <label for="billing-email-address" class="col-md-2 col-form-label">Email Address</label>\r\n                          <div class="col-md-10">\r\n                            <input type="email" class="form-control" id="billing-email-address" placeholder="Enter your email">\r\n                          </div>\r\n                        </div>\r\n                        <div class="row mb-4">\r\n                          <label for="billing-phone" class="col-md-2 col-form-label">Phone</label>\r\n                          <div class="col-md-10">\r\n                            <input type="text" class="form-control" id="billing-phone" placeholder="Enter your Phone no.">\r\n                          </div>\r\n                        </div>\r\n                        <div class="row mb-4">\r\n                          <label for="billing-address" class="col-md-2 col-form-label">Address</label>\r\n                          <div class="col-md-10">\r\n                            <textarea class="form-control" id="billing-address" rows="3" placeholder="Enter full address"></textarea>\r\n                          </div>\r\n                        </div>\r\n                        <div class="row mb-4">\r\n                          <label class="col-md-2 col-form-label">Country</label>\r\n                          <div class="col-md-10">\r\n                            <ng-select [items]="selectValue"></ng-select>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="row mb-4">\r\n                          <label class="col-md-2 col-form-label">States</label>\r\n                          <div class="col-md-10">\r\n                            <ng-select [items]="stateValue"></ng-select>\r\n                          </div>\r\n                        </div>\r\n                        <div class="row mb-0">\r\n                          <label for="example-textarea" class="col-md-2 col-form-label">Order Notes:</label>\r\n                          <div class="col-md-10">\r\n                            <textarea class="form-control" id="example-textarea" rows="3" placeholder="Write some note.."></textarea>\r\n                          </div>\r\n                        </div>\r\n\r\n                      </form>\r\n                    </div>\r\n                  </div>\r\n                  <div class="tab-pane fade" id="v-pills-payment" role="tabpanel" aria-labelledby="v-pills-payment-tab">\r\n                    <div>\r\n                      <h4 class="card-title">Payment information</h4>\r\n                      <p class="card-title-desc">Fill all information below</p>\r\n\r\n                      <div>\r\n\r\n                        <div class="custom-control custom-radio custom-control-inline mr-4">\r\n                          <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input">\r\n                          <label class="custom-control-label" for="customRadioInline1"><i class="fab fa-cc-mastercard me-1 font-size-20 align-top"></i> Credit / Debit\r\n                            Card</label>\r\n                        </div>\r\n                        <div class="custom-control custom-radio custom-control-inline mr-4">\r\n                          <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input">\r\n                          <label class="custom-control-label" for="customRadioInline2"><i class="fab fa-cc-paypal me-1 font-size-20 align-top"></i> Paypal</label>\r\n                        </div>\r\n                        <div class="custom-control custom-radio custom-control-inline mr-4">\r\n                          <input type="radio" id="customRadioInline3" name="customRadioInline1" class="custom-control-input" checked>\r\n                          <label class="custom-control-label" for="customRadioInline3"><i class="far fa-money-bill-alt me-1 font-size-20 align-top"></i> Cash on Delivery</label>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <h5 class="mt-5 mb-3 font-size-15">For card Payment</h5>\r\n                      <div class="p-4 border">\r\n                        <form>\r\n                          <div class="mb-0">\r\n                            <label for="cardnumberInput">Card Number</label>\r\n                            <input type="text" class="form-control" id="cardnumberInput" placeholder="0000 0000 0000 0000">\r\n                          </div>\r\n                          <div class="row">\r\n                            <div class="col-lg-6">\r\n                              <div class="mt-4 mb-0">\r\n                                <label for="cardnameInput">Name on card</label>\r\n                                <input type="text" class="form-control" id="cardnameInput" placeholder="Name on Card">\r\n                              </div>\r\n                            </div>\r\n                            <div class="col-lg-3">\r\n                              <div class="mt-4 mb-0">\r\n                                <label for="expirydateInput">Expiry date</label>\r\n                                <input type="text" class="form-control" id="expirydateInput" placeholder="MM/YY">\r\n                              </div>\r\n                            </div>\r\n                            <div class="col-lg-3">\r\n                              <div class="mt-4 mb-0">\r\n                                <label for="cvvcodeInput">CVV Code</label>\r\n                                <input type="text" class="form-control" id="cvvcodeInput" placeholder="Enter CVV Code">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </form>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class="tab-pane fade" id="v-pills-confir" role="tabpanel" aria-labelledby="v-pills-confir-tab">\r\n                    <div class="card shadow-none border mb-0">\r\n                      <div class="card-body">\r\n                        <h4 class="card-title mb-4">Order Summary</h4>\r\n\r\n                        <div class="table-responsive">\r\n                          <table class="table table-centered mb-0 table-nowrap">\r\n                            <thead class="thead-light">\r\n                              <tr>\r\n                                <th scope="col">Product</th>\r\n                                <th scope="col">Product Desc</th>\r\n                                <th scope="col">Price</th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                              sssssssssssssssssssss\r\n                              <tr>\r\n                                <th scope="row"><img src="assets/images/product/img-1.png" alt="product-img" title="product-img" class="avatar-md"></th>\r\n                                <td>\r\n                                  <h5 class="font-size-14 text-truncate"><a routerLink="/ecommerce/product-detail" class="text-dark">Half sleeve T-shirt (64GB) </a></h5>\r\n                                  <p class="text-muted mb-0">$ 450 x 1</p>\r\n                                </td>\r\n                                <td>$ 450</td>\r\n                              </tr>\r\n                              <tr>\r\n                                <th scope="row"><img src="assets/images/product/img-7.png" alt="product-img" title="product-img" class="avatar-md"></th>\r\n                                <td>\r\n                                  <h5 class="font-size-14 text-truncate"><a routerLink="/ecommerce/product-detail" class="text-dark">Wirless Headphone</a></h5>\r\n                                  <p class="text-muted mb-0">$ 225 x 1</p>\r\n                                </td>\r\n                                <td>$ 225</td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td colspan="2">\r\n                                  <h6 class="m-0">Sub Total:</h6>\r\n                                </td>\r\n                                <td>\r\n                                  $ 675\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td colspan="3">\r\n                                  <div class="bg-primary-subtle p-3 rounded">\r\n                                    <h5 class="font-size-14 text-primary mb-0"><i class="fas fa-shipping-fast me-2"></i>\r\n                                      Shipping <span class="float-end">Free</span></h5>\r\n                                  </div>\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td colspan="2">\r\n                                  <h6 class="m-0">Total:</h6>\r\n                                </td>\r\n                                <td>\r\n                                  $ 675\r\n                                </td>\r\n                              </tr>\r\n                            </tbody>\r\n                          </table>\r\n\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="row my-4">\r\n\r\n              <div class="col-sm-2"></div>\r\n              <div class="col-sm-4">\r\n                <a routerLink="/ecommerce/cart" class="btn text-muted d-none d-sm-inline-block btn-link">\r\n                  <i class="mdi mdi-arrow-left me-1"></i> Back to Shopping Cart </a>\r\n              </div> <!-- end col -->\r\n              <div class="col-sm-6">\r\n                <div class="text-sm-end">\r\n                  <a routerLink="/ecommerce/checkout" class="btn btn-success">\r\n                    <i class="mdi mdi-truck-fast me-1"></i> Proceed to Shipping </a>\r\n                </div>\r\n              </div> <!-- end col -->\r\n            </div>\r\n          </tab>\r\n\r\n          <tab>\r\n            <ng-template tabHeading>\r\n              <i class="bx bx-money d-block check-nav-icon mt-4 mb-2"></i>\r\n              <p class="fw-bold mb-4">Payment Info</p>\r\n            </ng-template>\r\n            <div class="card">\r\n              <div class="card-body">\r\n                <h4 class="card-title">Payment information</h4>\r\n                <p class="card-title-desc">Fill all information below</p>\r\n\r\n                <div>\r\n                  <div class="form-check form-check-inline font-size-16">\r\n                    <input class="form-check-input" type="radio" name="paymentoptionsRadio" id="paymentoptionsRadio1" checked>\r\n                    <label class="form-check-label font-size-13" for="paymentoptionsRadio1"><i class="fab fa-cc-mastercard me-1 font-size-20 align-top"></i> Credit / Debit Card</label>\r\n                  </div>\r\n                  <div class="form-check form-check-inline font-size-16">\r\n                    <input class="form-check-input" type="radio" name="paymentoptionsRadio" id="paymentoptionsRadio2">\r\n                    <label class="form-check-label font-size-13" for="paymentoptionsRadio2"><i class="fab fa-cc-paypal me-1 font-size-20 align-top"></i> Paypal</label>\r\n                  </div>\r\n                  <div class="form-check form-check-inline font-size-16">\r\n                    <input class="form-check-input" type="radio" name="paymentoptionsRadio" id="paymentoptionsRadio3">\r\n                    <label class="form-check-label font-size-13" for="paymentoptionsRadio3"><i class="far fa-money-bill-alt me-1 font-size-20 align-top"></i> Cash on Delivery</label>\r\n                  </div>\r\n                </div>\r\n\r\n                <h5 class="mt-5 mb-3 font-size-15">For card Payment</h5>\r\n                <div class="p-4 border">\r\n                  <form>\r\n                    <div class="mb-0">\r\n                      <label for="cardnumberInput">Card Number</label>\r\n                      <input type="text" class="form-control" id="cardnumberInput" placeholder="0000 0000 0000 0000">\r\n                    </div>\r\n                    <div class="row">\r\n                      <div class="col-lg-6">\r\n                        <div class="mt-4 mb-0">\r\n                          <label for="cardnameInput">Name on card</label>\r\n                          <input type="text" class="form-control" id="cardnameInput" placeholder="Name on Card">\r\n                        </div>\r\n                      </div>\r\n                      <div class="col-lg-3">\r\n                        <div class="mt-4 mb-0">\r\n                          <label for="expirydateInput">Expiry date</label>\r\n                          <input type="text" class="form-control" id="expirydateInput" placeholder="MM/YY">\r\n                        </div>\r\n                      </div>\r\n                      <div class="col-lg-3">\r\n                        <div class="mt-4 mb-0">\r\n                          <label for="cvvcodeInput">CVV Code</label>\r\n                          <input type="text" class="form-control" id="cvvcodeInput" placeholder="Enter CVV Code">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="row my-4">\r\n\r\n              <div class="col-sm-2"></div>\r\n              <div class="col-sm-4">\r\n                <a routerLink="/ecommerce/cart" class="btn text-muted d-none d-sm-inline-block btn-link">\r\n                  <i class="mdi mdi-arrow-left me-1"></i> Back to Shopping Cart </a>\r\n              </div> <!-- end col -->\r\n              <div class="col-sm-6">\r\n                <div class="text-sm-end">\r\n                  <a routerLink="/ecommerce/checkout" class="btn btn-success">\r\n                    <i class="mdi mdi-truck-fast me-1"></i> Proceed to Shipping </a>\r\n                </div>\r\n              </div> <!-- end col -->\r\n            </div>\r\n          </tab>\r\n          <tab>\r\n            <ng-template tabHeading>\r\n              <i class="bx bx-badge-check d-block check-nav-icon mt-4 mb-2"></i>\r\n              <p class="fw-bold mb-4">Confirmation</p>\r\n            </ng-template>\r\n            <div class="card">\r\n              <div class="card-body">\r\n                <div class="card shadow-none border mb-0">\r\n                  <div class="card-body">\r\n                    <h4 class="card-title mb-4">Order Summary</h4>\r\n\r\n                    <div class="table-responsive">\r\n                      <table class="table align-middle mb-0 table-nowrap">\r\n                        <thead class="table-light">\r\n                          <tr>\r\n                            <th scope="col">Product</th>\r\n                            <th scope="col">Product Desc</th>\r\n                            <th scope="col">Price</th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr>\r\n                            <th scope="row"><img src="assets/images/product/img-1.png" alt="product-img" title="product-img" class="avatar-md"></th>\r\n                            <td>\r\n                              <h5 class="font-size-14 text-truncate"><a routerLink="/ecommerce/product-detail" class="text-dark">Half sleeve T-shirt (64GB) </a></h5>\r\n                              <p class="text-muted mb-0">$ 450 x 1</p>\r\n                            </td>\r\n                            <td>$ 450</td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th scope="row"><img src="assets/images/product/img-7.png" alt="product-img" title="product-img" class="avatar-md"></th>\r\n                            <td>\r\n                              <h5 class="font-size-14 text-truncate"><a routerLink="/ecommerce/product-detail" class="text-dark">Wirless Headphone </a></h5>\r\n                              <p class="text-muted mb-0">$ 225 x 1</p>\r\n                            </td>\r\n                            <td>$ 225</td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td colspan="2">\r\n                              <h6 class="m-0">Sub Total:</h6>\r\n                            </td>\r\n                            <td>\r\n                              $ 675\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td colspan="3">\r\n                              <div class="bg-primary-subtle p-3 rounded">\r\n                                <h5 class="font-size-14 text-primary mb-0"><i class="fas fa-shipping-fast me-2"></i>\r\n                                  Shipping\r\n                                  <span class="float-end">Free</span>\r\n                                </h5>\r\n                              </div>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td colspan="2">\r\n                              <h6 class="m-0">Total:</h6>\r\n                            </td>\r\n                            <td>\r\n                              $ 675\r\n                            </td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="row my-4">\r\n\r\n              <div class="col-sm-2"></div>\r\n              <div class="col-sm-4">\r\n                <a routerLink="/ecommerce/cart" class="btn text-muted d-none d-sm-inline-block btn-link">\r\n                  <i class="mdi mdi-arrow-left me-1"></i> Back to Shopping Cart </a>\r\n              </div> <!-- end col -->\r\n              <div class="col-sm-6">\r\n                <div class="text-sm-end">\r\n                  <a routerLink="/ecommerce/checkout" class="btn btn-success">\r\n                    <i class="mdi mdi-truck-fast me-1"></i> Proceed to Shipping </a>\r\n                </div>\r\n              </div> <!-- end col -->\r\n            </div>\r\n          </tab>\r\n        </tabset>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "src/app/pages/ecommerce/checkout/checkout.component.ts", lineNumber: 13 });
})();

// src/app/pages/ecommerce/cart/cart.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());

// src/app/store/Cart/cart-selector.ts
var selectDataState = createFeatureSelector("CartList");
var selectData = createSelector(selectDataState, (state) => state.cartdata);
var selectDataLoading = createSelector(selectDataState, (state) => state.loading);
var selectDataError = createSelector(selectDataState, (state) => state.error);

// src/app/pages/ecommerce/cart/cart.component.ts
function CartComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 10)(1, "td");
    \u0275\u0275element(2, "img", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "h5", 47)(5, "a", 48);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 49);
    \u0275\u0275text(8, "Color : ");
    \u0275\u0275elementStart(9, "span", 50);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12, "$");
    \u0275\u0275elementStart(13, "span", 51);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "div", 52)(17, "div", 53)(18, "div", 54)(19, "button", 55);
    \u0275\u0275listener("click", function CartComponent_For_22_Template_button_click_19_listener() {
      const ctx_r1 = \u0275\u0275restoreView(_r1);
      const product_r3 = ctx_r1.$implicit;
      const $index_r4 = ctx_r1.$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.calculateQty("1", product_r3.qty, $index_r4));
    });
    \u0275\u0275text(20, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "input", 56);
    \u0275\u0275elementStart(22, "div", 57)(23, "button", 55);
    \u0275\u0275listener("click", function CartComponent_For_22_Template_button_click_23_listener() {
      const ctx_r5 = \u0275\u0275restoreView(_r1);
      const product_r3 = ctx_r5.$implicit;
      const $index_r4 = ctx_r5.$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.calculateQty("0", product_r3.qty, $index_r4));
    });
    \u0275\u0275text(24, "-");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275text(26, "$");
    \u0275\u0275elementStart(27, "span", 58);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td")(30, "div", 59)(31, "a", 60);
    \u0275\u0275listener("click", function CartComponent_For_22_Template_a_click_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.delete($event));
    });
    \u0275\u0275element(32, "i", 61);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", \u0275\u0275interpolate(product_r3.image), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(product_r3.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(product_r3.color);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", product_r3.price);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", \u0275\u0275interpolate(product_r3.qty));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(product_r3.total);
  }
}
var CartComponent = class _CartComponent {
  constructor(store) {
    this.store = store;
    this.cartData = cartData;
    this.subtotal = 0;
    this.discountRate = 0.15;
    this.shippingRate = "65.00";
    this.taxRate = 0.125;
    this.qty = 0;
  }
  // ... (Component setup)
  ngOnInit() {
    this.value = 4;
    this.breadCrumbItems = [{ label: "Ecommerce" }, { label: "Cart", active: true }];
    this.subtotal = 0;
    this.store.dispatch(fetchCartData());
    this.store.select(selectData).subscribe((data) => {
      this.cartData = data.map((x) => {
        const itemCopy = __spreadValues({}, x);
        itemCopy["total"] = (itemCopy["qty"] * itemCopy["price"]).toFixed(2);
        this.subtotal += parseFloat(itemCopy["total"]);
        return itemCopy;
      });
      this.subtotal = parseFloat(this.subtotal.toFixed(2));
      const subtotalNum = this.subtotal;
      const discountRateNum = this.discountRate;
      const taxRateNum = this.taxRate;
      const shippingRateNum = parseFloat(this.shippingRate);
      this.discount = (subtotalNum * discountRateNum).toFixed(2);
      this.tax = (subtotalNum * taxRateNum).toFixed(2);
      const totalPriceNum = subtotalNum + parseFloat(this.tax) + shippingRateNum - parseFloat(this.discount);
      this.totalprice = totalPriceNum.toFixed(2);
    });
  }
  delete(event) {
    const swalWithBootstrapButtons = import_sweetalert2.default.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger ms-2"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      showCancelButton: true
    }).then((result) => {
      if (result.value) {
        swalWithBootstrapButtons.fire("Deleted!", "Your file has been deleted.", "success");
        event.target.closest("tr")?.remove();
      }
    });
  }
  calculateQty(id, qty, i) {
    this.subtotal = 0;
    let productToUpdate = __spreadValues({}, this.cartData[i]);
    if (id === "0" && qty > 1) {
      productToUpdate.qty = qty - 1;
    } else if (id === "1") {
      productToUpdate.qty = qty + 1;
    }
    if (productToUpdate.qty !== this.cartData[i].qty) {
      productToUpdate.total = (productToUpdate.qty * productToUpdate.price).toFixed(2);
      this.cartData[i] = productToUpdate;
    }
    this.cartData.map((x) => {
      this.subtotal += parseFloat(x["total"]);
    });
    this.subtotal = parseFloat(this.subtotal.toFixed(2));
    const subtotalNum = this.subtotal;
    const discountRateNum = this.discountRate;
    const taxRateNum = this.taxRate;
    const shippingRateNum = this.shippingRate;
    this.discount = (subtotalNum * discountRateNum).toFixed(2);
    this.tax = (subtotalNum * taxRateNum).toFixed(2);
    const totalPriceNum = subtotalNum + subtotalNum * taxRateNum + shippingRateNum - subtotalNum * discountRateNum;
    this.totalprice = totalPriceNum.toFixed(2);
  }
  static {
    this.\u0275fac = function CartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], standalone: false, decls: 114, vars: 6, consts: [[1, "container-fluid"], ["title", "Cart", 3, "breadcrumbItems"], [1, "row"], [1, "col-xl-8"], [1, "card"], [1, "card-body"], [1, "table-responsive"], [1, "table", "table-centered", "mb-0", "table-nowrap", "align-middle"], [1, "table-light"], ["colspan", "2"], [1, "product"], [1, "row", "mt-4"], [1, "col-sm-6"], ["routerLink", "/ecommerce/products", 1, "btn", "btn-secondary"], [1, "mdi", "mdi-arrow-left", "me-1"], [1, "text-sm-end", "mt-2", "mt-sm-0"], ["routerLink", "/ecommerce/checkout", 1, "btn", "btn-success"], [1, "mdi", "mdi-cart-arrow-right", "me-1"], [1, "col-xl-4"], [1, "card-title", "mb-4"], [1, "card", "bg-primary", "text-white", "visa-card", "mb-0"], [1, "bx", "bxl-visa", "visa-pattern"], [1, "float-end"], [1, "bx", "bxl-visa", "visa-logo", "display-3"], [1, "bx", "bx-chip", "h1", "text-warning"], [1, "row", "mt-5"], [1, "col-4"], [1, "fas", "fa-star-of-life", "m-1"], [1, "mt-5"], [1, "text-white", "float-end", "mb-0"], [1, "text-white", "mb-0"], [1, "card-title", "mb-3"], [1, "table", "mb-0"], [1, "bg-light"], ["id", "removeItemModal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-content"], [1, "modal-body", "px-4", "py-5", "text-center"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "position-absolute", "end-0", "top-0", "m-3"], [1, "avatar-sm", "mb-4", "mx-auto"], [1, "avatar-title", "bg-primary", "text-primary", "bg-opacity-10", "font-size-20", "rounded-3"], [1, "mdi", "mdi-trash-can-outline"], [1, "text-muted", "font-size-16", "mb-4"], [1, "hstack", "gap-2", "justify-content-center", "mb-0"], ["type", "button", "id", "close-removeProductModal", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "id", "remove-item", 1, "btn", "btn-danger"], ["alt", "product-img", "title", "product-img", 1, "avatar-md", 3, "src"], [1, "font-size-14", "text-truncate"], ["routerLink", "/ecommerce/product-detail/1", 1, "text-dark"], [1, "mb-0"], [1, "fw-medium"], [1, "product-price"], [1, "me-3", 2, "width", "120px"], [1, "input-group"], [1, "input-group-prepend"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["name", "demo_vertical", "type", "text", "min", "0", "max", "100", "readonly", "", 1, "form-control", 3, "value"], [1, "input-group-append"], [1, "product-line-price"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Remove", 1, "d-inline-block"], ["href", "javascript:void(0);", 1, "action-icon", "text-danger", 3, "click"], [1, "mdi", "mdi-trash-can", "font-size-18"]], template: function CartComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "table", 7)(8, "thead", 8)(9, "tr")(10, "th");
        \u0275\u0275text(11, "Product");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "th");
        \u0275\u0275text(13, "Product Desc");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "th");
        \u0275\u0275text(15, "Price");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "th");
        \u0275\u0275text(17, "Quantity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "th", 9);
        \u0275\u0275text(19, "Total");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "tbody");
        \u0275\u0275repeaterCreate(21, CartComponent_For_22_Template, 33, 8, "tr", 10, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 11)(24, "div", 12)(25, "a", 13);
        \u0275\u0275element(26, "i", 14);
        \u0275\u0275text(27, " Continue Shopping ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 12)(29, "div", 15)(30, "a", 16);
        \u0275\u0275element(31, "i", 17);
        \u0275\u0275text(32, " Checkout ");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(33, "div", 18)(34, "div", 4)(35, "div", 5)(36, "h5", 19);
        \u0275\u0275text(37, "Card Details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 20)(39, "div", 5)(40, "div");
        \u0275\u0275element(41, "i", 21);
        \u0275\u0275elementStart(42, "div", 22);
        \u0275\u0275element(43, "i", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div");
        \u0275\u0275element(45, "i", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 25)(47, "div", 26)(48, "p");
        \u0275\u0275element(49, "i", 27)(50, "i", 27)(51, "i", 27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 26)(53, "p");
        \u0275\u0275element(54, "i", 27)(55, "i", 27)(56, "i", 27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div", 26)(58, "p");
        \u0275\u0275element(59, "i", 27)(60, "i", 27)(61, "i", 27);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(62, "div", 28)(63, "h5", 29);
        \u0275\u0275text(64, "12/22");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "h5", 30);
        \u0275\u0275text(66, "Fredrick Taylor");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(67, "div", 4)(68, "div", 5)(69, "h4", 31);
        \u0275\u0275text(70, "Order Summary");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "div", 6)(72, "table", 32)(73, "tbody")(74, "tr")(75, "td");
        \u0275\u0275text(76, "Grand Total :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "td");
        \u0275\u0275text(78);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "tr")(80, "td");
        \u0275\u0275text(81, "Discount : ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "td");
        \u0275\u0275text(83);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(84, "tr")(85, "td");
        \u0275\u0275text(86, "Shipping Charge :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "td");
        \u0275\u0275text(88);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "tr")(90, "td");
        \u0275\u0275text(91, "Estimated Tax(12.5%) : ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "td");
        \u0275\u0275text(93);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(94, "tr", 33)(95, "th");
        \u0275\u0275text(96, "Total :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "th");
        \u0275\u0275text(98);
        \u0275\u0275elementEnd()()()()()()()()()();
        \u0275\u0275elementStart(99, "div", 34)(100, "div", 35)(101, "div", 36)(102, "div", 37);
        \u0275\u0275element(103, "button", 38);
        \u0275\u0275elementStart(104, "div", 39)(105, "div", 40);
        \u0275\u0275element(106, "i", 41);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(107, "p", 42);
        \u0275\u0275text(108, "Are you Sure You want to Remove this Product ?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "div", 43)(110, "button", 44);
        \u0275\u0275text(111, "Close");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "button", 45);
        \u0275\u0275text(113, "Remove Now");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(20);
        \u0275\u0275repeater(ctx.cartData);
        \u0275\u0275advance(57);
        \u0275\u0275textInterpolate1("$ ", ctx.subtotal);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("- $ ", ctx.discount);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("$ ", ctx.shippingRate);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("$ ", ctx.tax);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("$ ", ctx.totalprice);
      }
    }, dependencies: [RouterLink, PagetitleComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartComponent, [{
    type: Component,
    args: [{ selector: "app-cart", standalone: false, template: `<div class="container-fluid">\r
\r
  <!-- page title -->\r
  <app-page-title title="Cart" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
\r
  <div class="row">\r
    <div class="col-xl-8">\r
      <div class="card">\r
        <div class="card-body">\r
          <div class="table-responsive">\r
            <table class="table table-centered mb-0 table-nowrap align-middle">\r
              <thead class="table-light">\r
                <tr>\r
                  <th>Product</th>\r
                  <th>Product Desc</th>\r
                  <th>Price</th>\r
                  <th>Quantity</th>\r
                  <th colspan="2">Total</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                @for (product of cartData; track $index) {\r
                <tr class="product">\r
                  <td>\r
                    <img src="{{ product.image }}" alt="product-img" title="product-img" class="avatar-md" />\r
                  </td>\r
                  <td>\r
                    <h5 class="font-size-14 text-truncate"><a routerLink="/ecommerce/product-detail/1"\r
                        class="text-dark">{{ product.name }}</a></h5>\r
                    <p class="mb-0">Color : <span class="fw-medium">{{ product.color }}</span></p>\r
                  </td>\r
                  <td>$<span class="product-price"> {{ product.price }}</span></td>\r
                  <td>\r
                    <div class="me-3" style="width: 120px;">\r
                      <div class="input-group">\r
                        <div class="input-group-prepend"><button type="button" class="btn btn-primary"\r
                            (click)="calculateQty('1',product.qty,$index)">+</button></div>\r
                        <input name="demo_vertical" value="{{product.qty}}" type="text" class="form-control" min="0"\r
                          max="100" readonly>\r
                        <div class="input-group-append"><button type="button" class="btn btn-primary"\r
                            (click)="calculateQty('0',product.qty,$index)">-</button></div>\r
                      </div>\r
                    </div>\r
                  </td>\r
                  <td>$<span class="product-line-price">{{ product.total }}</span></td>\r
                  <td>\r
                    <div class="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove">\r
                      <a href="javascript:void(0);" class="action-icon text-danger" (click)="delete($event)"> <i\r
                          class="mdi mdi-trash-can font-size-18"></i></a>\r
                    </div>\r
                  </td>\r
                </tr>\r
                }\r
              </tbody>\r
            </table>\r
          </div>\r
          <div class="row mt-4">\r
            <div class="col-sm-6">\r
              <a routerLink="/ecommerce/products" class="btn btn-secondary">\r
                <i class="mdi mdi-arrow-left me-1"></i> Continue Shopping </a>\r
            </div> <!-- end col -->\r
            <div class="col-sm-6">\r
              <div class="text-sm-end mt-2 mt-sm-0">\r
                <a routerLink="/ecommerce/checkout" class="btn btn-success">\r
                  <i class="mdi mdi-cart-arrow-right me-1"></i> Checkout </a>\r
              </div>\r
            </div> <!-- end col -->\r
          </div> <!-- end row-->\r
        </div>\r
      </div>\r
    </div>\r
    <div class="col-xl-4">\r
      <div class="card">\r
        <div class="card-body">\r
          <h5 class="card-title mb-4">Card Details</h5>\r
\r
          <div class="card bg-primary text-white visa-card mb-0">\r
            <div class="card-body">\r
              <div>\r
                <i class="bx bxl-visa visa-pattern"></i>\r
\r
                <div class="float-end">\r
                  <i class="bx bxl-visa visa-logo display-3"></i>\r
                </div>\r
\r
                <div>\r
                  <i class="bx bx-chip h1 text-warning"></i>\r
                </div>\r
              </div>\r
\r
              <div class="row mt-5">\r
                <div class="col-4">\r
                  <p>\r
                    <i class="fas fa-star-of-life m-1"></i>\r
                    <i class="fas fa-star-of-life m-1"></i>\r
                    <i class="fas fa-star-of-life m-1"></i>\r
                  </p>\r
                </div>\r
                <div class="col-4">\r
                  <p>\r
                    <i class="fas fa-star-of-life m-1"></i>\r
                    <i class="fas fa-star-of-life m-1"></i>\r
                    <i class="fas fa-star-of-life m-1"></i>\r
                  </p>\r
                </div>\r
                <div class="col-4">\r
                  <p>\r
                    <i class="fas fa-star-of-life m-1"></i>\r
                    <i class="fas fa-star-of-life m-1"></i>\r
                    <i class="fas fa-star-of-life m-1"></i>\r
                  </p>\r
                </div>\r
              </div>\r
\r
              <div class="mt-5">\r
                <h5 class="text-white float-end mb-0">12/22</h5>\r
                <h5 class="text-white mb-0">Fredrick Taylor</h5>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title mb-3">Order Summary</h4>\r
\r
          <div class="table-responsive">\r
            <table class="table mb-0">\r
              <tbody>\r
                <tr>\r
                  <td>Grand Total :</td>\r
                  <td>$ {{subtotal}}</td>\r
                </tr>\r
                <tr>\r
                  <td>Discount : </td>\r
                  <td>- $ {{discount}}</td>\r
                </tr>\r
                <tr>\r
                  <td>Shipping Charge :</td>\r
                  <td>$ {{shippingRate}}</td>\r
                </tr>\r
                <tr>\r
                  <td>Estimated Tax(12.5%) : </td>\r
                  <td>$ {{tax}}</td>\r
                </tr>\r
                <tr class="bg-light">\r
                  <th>Total :</th>\r
                  <th>$ {{totalprice}}</th>\r
                </tr>\r
              </tbody>\r
            </table>\r
          </div>\r
          <!-- end table-responsive -->\r
        </div>\r
      </div>\r
      <!-- end card -->\r
    </div>\r
  </div>\r
  <!-- end row -->\r
\r
</div> <!-- container-fluid -->\r
\r
<!-- Modal -->\r
<div class="modal fade" id="removeItemModal" tabindex="-1" aria-hidden="true">\r
  <div class="modal-dialog modal-dialog-centered modal-sm">\r
    <div class="modal-content">\r
      <div class="modal-body px-4 py-5 text-center">\r
        <button type="button" class="btn-close position-absolute end-0 top-0 m-3" data-bs-dismiss="modal"\r
          aria-label="Close"></button>\r
        <div class="avatar-sm mb-4 mx-auto">\r
          <div class="avatar-title bg-primary text-primary bg-opacity-10 font-size-20 rounded-3">\r
            <i class="mdi mdi-trash-can-outline"></i>\r
          </div>\r
        </div>\r
        <p class="text-muted font-size-16 mb-4">Are you Sure You want to Remove this Product ?</p>\r
\r
        <div class="hstack gap-2 justify-content-center mb-0">\r
          <button type="button" class="btn btn-secondary" id="close-removeProductModal"\r
            data-bs-dismiss="modal">Close</button>\r
          <button type="button" class="btn btn-danger" id="remove-item">Remove Now</button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
<!-- end removeItemModal -->` }]
  }], () => [{ type: Store }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src/app/pages/ecommerce/cart/cart.component.ts", lineNumber: 18 });
})();

// src/app/pages/ecommerce/addproduct/addproduct.component.ts
var _c03 = (a0) => ({ "is-invalid": a0 });
var _c1 = () => ["Alaska", "Hawaii"];
var _c2 = () => ["Alaska", "Hawaii", "California", "Nevada", "Oregon", "Washington"];
function AddproductComponent_Conditional_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Name is required.");
    \u0275\u0275elementEnd();
  }
}
function AddproductComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, AddproductComponent_Conditional_17_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.name.errors.required ? 1 : -1);
  }
}
function AddproductComponent_Conditional_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Manufacturer name is required.");
    \u0275\u0275elementEnd();
  }
}
function AddproductComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, AddproductComponent_Conditional_22_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.manufacture_name.errors.required ? 1 : -1);
  }
}
function AddproductComponent_Conditional_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Manufacturer brand is required.");
    \u0275\u0275elementEnd();
  }
}
function AddproductComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, AddproductComponent_Conditional_27_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.manufacture_brand.errors.required ? 1 : -1);
  }
}
function AddproductComponent_Conditional_32_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Price is required.");
    \u0275\u0275elementEnd();
  }
}
function AddproductComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, AddproductComponent_Conditional_32_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.price.errors.required ? 1 : -1);
  }
}
function AddproductComponent_Conditional_56_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 43);
  }
  if (rf & 2) {
    const file_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", file_r3.dataURL, \u0275\u0275sanitizeUrl);
  }
}
function AddproductComponent_Conditional_56_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 43);
  }
  if (rf & 2) {
    const file_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", file_r3, \u0275\u0275sanitizeUrl);
  }
}
function AddproductComponent_Conditional_56_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const file_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(file_r3.name);
  }
}
function AddproductComponent_Conditional_56_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const file_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(file_r3.size);
  }
}
function AddproductComponent_Conditional_56_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 38)(1, "div", 39)(2, "div", 40)(3, "div", 41)(4, "div", 42);
    \u0275\u0275conditionalCreate(5, AddproductComponent_Conditional_56_For_2_Conditional_5_Template, 1, 1, "img", 43)(6, AddproductComponent_Conditional_56_For_2_Conditional_6_Template, 1, 1, "img", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 44)(8, "div", 45);
    \u0275\u0275conditionalCreate(9, AddproductComponent_Conditional_56_For_2_Conditional_9_Template, 2, 1, "h5", 46);
    \u0275\u0275conditionalCreate(10, AddproductComponent_Conditional_56_For_2_Conditional_10_Template, 2, 1, "p", 47);
    \u0275\u0275element(11, "strong", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 49)(13, "button", 50);
    \u0275\u0275listener("click", function AddproductComponent_Conditional_56_For_2_Template_button_click_13_listener() {
      const file_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeFile(file_r3));
    });
    \u0275\u0275text(14, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const file_r3 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275conditional(file_r3.dataURL ? 5 : 6);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(file_r3.name ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(file_r3.size ? 10 : -1);
  }
}
function AddproductComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 30);
    \u0275\u0275repeaterCreate(1, AddproductComponent_Conditional_56_For_2_Template, 15, 3, "li", 38, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.uploadedFiles);
  }
}
var AddproductComponent = class _AddproductComponent {
  constructor(formBuilder, http) {
    this.formBuilder = formBuilder;
    this.http = http;
    this.files = [];
    this.dropzoneConfig = {
      clickable: true,
      addRemoveLinks: true,
      previewsContainer: false
    };
    this.uploadedFiles = [];
  }
  /**
   * Returns form
   */
  get form() {
    return this.productForm.controls;
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Ecommerce" }, { label: "Add Product", active: true }];
    this.productForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]],
      manufacture_name: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]],
      manufacture_brand: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]],
      price: ["", [Validators.required]],
      category: ["Category", [Validators.required]],
      features: ["Features", [Validators.required]]
    });
    this.submit = false;
  }
  /**
   * Bootsrap validation form submit method
   */
  validSubmit() {
    this.submit = true;
    const formData = new FormData();
    formData.append("name", this.productForm.get("name").value);
    formData.append("manufacture_name", this.productForm.get("manufacture_name").value);
    formData.append("manufacture_brand", this.productForm.get("manufacture_brand").value);
    formData.append("price", this.productForm.get("price").value);
    this.http.post(`http://localhost:8000/api/products`, formData).subscribe((data) => {
      return data;
    });
  }
  onUploadSuccess(event) {
    setTimeout(() => {
      this.uploadedFiles.push(event[0]);
    }, 100);
  }
  // File Remove
  removeFile(event) {
    this.uploadedFiles.splice(this.uploadedFiles.indexOf(event), 1);
  }
  static {
    this.\u0275fac = function AddproductComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddproductComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddproductComponent, selectors: [["app-addproduct"]], standalone: false, decls: 84, vars: 26, consts: [[1, "container-fluid"], ["title", "Add Product", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-title-desc"], [3, "ngSubmit", "formGroup"], [1, "col-sm-6"], [1, "mb-3"], ["for", "productname"], ["id", "productname", "name", "productname", "type", "text", "placeholder", "Product Name", "formControlName", "name", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], ["for", "manufacturername"], ["id", "manufacturername", "name", "manufacturername", "placeholder", "Manufacturer Name", "type", "text", "formControlName", "manufacture_name", 1, "form-control", 3, "ngClass"], ["for", "manufacturerbrand"], ["id", "manufacturerbrand", "name", "manufacturerbrand", "type", "text", "placeholder", "Manufacturer Brand", "formControlName", "manufacture_brand", 1, "form-control", 3, "ngClass"], ["for", "price"], ["id", "price", "name", "price", "type", "text", "placeholder", "Price", "formControlName", "price", 1, "form-control", 3, "ngClass"], [1, "control-label"], ["formControlName", "category", 3, "items"], ["formControlName", "features", 3, "items", "multiple"], ["for", "productdesc"], ["id", "productdesc", "placeholder", "Product Description", "rows", "5", 1, "form-control"], [1, "d-flex", "flex-wrap", "gap-2", "mt-2"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "submit", 1, "btn", "btn-secondary"], [1, "card-title", "mb-3"], [1, "dropzone", 3, "success", "config", "message"], ["id", "dropzone-preview", 1, "list-unstyled", "mb-0"], ["for", "metatitle"], ["id", "metatitle", "placeholder", "Metatitle", "name", "productname", "type", "text", 1, "form-control"], ["for", "metakeywords"], ["id", "metakeywords", "placeholder", "Meta Keywords", "name", "manufacturername", "type", "text", 1, "form-control"], ["for", "metadescription"], ["placeholder", "Meta Description", "id", "metadescription", "rows", "5", 1, "form-control"], [1, "d-flex", "flex-wrap", "gap-2"], ["id", "dropzone-preview-list", 1, "mt-2"], [1, "border", "rounded"], [1, "d-flex", "p-2"], [1, "flex-shrink-0", "me-3"], [1, "avatar-sm", "bg-light", "rounded"], ["alt", "Dropzone-Image", 1, "img-fluid", "rounded", "d-block", 3, "src"], [1, "flex-grow-1"], [1, "pt-1"], [1, "fs-md", "mb-1"], [1, "fs-sm", "text-muted", "mb-0"], ["data-dz-errormessage", "", 1, "error", "text-danger"], [1, "flex-shrink-0", "ms-3"], [1, "btn", "btn-sm", "btn-danger", 3, "click"]], template: function AddproductComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
        \u0275\u0275text(7, "Basic Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 7);
        \u0275\u0275text(9, "Fill all information below");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "form", 8);
        \u0275\u0275listener("ngSubmit", function AddproductComponent_Template_form_ngSubmit_10_listener() {
          return ctx.validSubmit();
        });
        \u0275\u0275elementStart(11, "div", 2)(12, "div", 9)(13, "div", 10)(14, "label", 11);
        \u0275\u0275text(15, "Product Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "input", 12);
        \u0275\u0275conditionalCreate(17, AddproductComponent_Conditional_17_Template, 2, 1, "div", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 10)(19, "label", 14);
        \u0275\u0275text(20, "Manufacturer Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "input", 15);
        \u0275\u0275conditionalCreate(22, AddproductComponent_Conditional_22_Template, 2, 1, "div", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 10)(24, "label", 16);
        \u0275\u0275text(25, "Manufacturer Brand");
        \u0275\u0275elementEnd();
        \u0275\u0275element(26, "input", 17);
        \u0275\u0275conditionalCreate(27, AddproductComponent_Conditional_27_Template, 2, 1, "div", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 10)(29, "label", 18);
        \u0275\u0275text(30, "Price");
        \u0275\u0275elementEnd();
        \u0275\u0275element(31, "input", 19);
        \u0275\u0275conditionalCreate(32, AddproductComponent_Conditional_32_Template, 2, 1, "div", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 9)(34, "div", 10)(35, "label", 20);
        \u0275\u0275text(36, "Category");
        \u0275\u0275elementEnd();
        \u0275\u0275element(37, "ng-select", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 10)(39, "label", 20);
        \u0275\u0275text(40, "Features");
        \u0275\u0275elementEnd();
        \u0275\u0275element(41, "ng-select", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 10)(43, "label", 23);
        \u0275\u0275text(44, "Product Description");
        \u0275\u0275elementEnd();
        \u0275\u0275element(45, "textarea", 24);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "div", 25)(47, "button", 26);
        \u0275\u0275text(48, "Save Changes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "button", 27);
        \u0275\u0275text(50, "Cancel");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(51, "div", 4)(52, "div", 5)(53, "h4", 28);
        \u0275\u0275text(54, "Product Images");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "dropzone", 29);
        \u0275\u0275listener("success", function AddproductComponent_Template_dropzone_success_55_listener($event) {
          return ctx.onUploadSuccess($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(56, AddproductComponent_Conditional_56_Template, 3, 0, "ul", 30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div", 4)(58, "div", 5)(59, "h4", 6);
        \u0275\u0275text(60, "Meta Data");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "p", 7);
        \u0275\u0275text(62, "Fill all information below");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "form")(64, "div", 2)(65, "div", 9)(66, "div", 10)(67, "label", 31);
        \u0275\u0275text(68, "Meta title");
        \u0275\u0275elementEnd();
        \u0275\u0275element(69, "input", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "div", 10)(71, "label", 33);
        \u0275\u0275text(72, "Meta Keywords");
        \u0275\u0275elementEnd();
        \u0275\u0275element(73, "input", 34);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "div", 9)(75, "div", 10)(76, "label", 35);
        \u0275\u0275text(77, "Meta Description");
        \u0275\u0275elementEnd();
        \u0275\u0275element(78, "textarea", 36);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(79, "div", 37)(80, "button", 26);
        \u0275\u0275text(81, "Save Changes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "button", 27);
        \u0275\u0275text(83, "Cancel");
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(9);
        \u0275\u0275property("formGroup", ctx.productForm);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(16, _c03, ctx.submit && ctx.form.name.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submit && ctx.form.name.errors ? 17 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(18, _c03, ctx.submit && ctx.form.manufacture_name.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submit && ctx.form.manufacture_name.errors ? 22 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(20, _c03, ctx.submit && ctx.form.manufacture_brand.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submit && ctx.form.manufacture_brand.errors ? 27 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(22, _c03, ctx.submit && ctx.form.price.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submit && ctx.form.price.errors ? 32 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("items", \u0275\u0275pureFunction0(24, _c1));
        \u0275\u0275advance(4);
        \u0275\u0275property("items", \u0275\u0275pureFunction0(25, _c2))("multiple", true);
        \u0275\u0275advance(14);
        \u0275\u0275property("config", ctx.dropzoneConfig)("message", "Drop files here or click to upload.");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.uploadedFiles ? 56 : -1);
      }
    }, dependencies: [NgClass, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgForm, FormGroupDirective, FormControlName, NgSelectComponent, DropzoneComponent, PagetitleComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddproductComponent, [{
    type: Component,
    args: [{ selector: "app-addproduct", standalone: false, template: `<div class="container-fluid">\r
\r
  <!-- start page title -->\r
  <app-page-title title="Add Product" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
  <!-- end page title -->\r
\r
  <div class="row">\r
    <div class="col-12">\r
      <div class="card">\r
        <div class="card-body">\r
\r
          <h4 class="card-title">Basic Information</h4>\r
          <p class="card-title-desc">Fill all information below</p>\r
\r
          <form [formGroup]="productForm" (ngSubmit)="validSubmit()">\r
            <div class="row">\r
              <div class="col-sm-6">\r
                <div class="mb-3">\r
                  <label for="productname">Product Name</label>\r
                  <input id="productname" name="productname" type="text" placeholder="Product Name" class="form-control" formControlName="name" [ngClass]="{'is-invalid': submit && form.name.errors}">\r
                  @if(submit && form.name.errors){\r
                  <div class="invalid-feedback">\r
                    @if(form.name.errors.required){\r
                    <span>Name is required.</span>\r
                    }\r
                  </div>}\r
                </div>\r
                <div class="mb-3">\r
                  <label for="manufacturername">Manufacturer Name</label>\r
                  <input id="manufacturername" name="manufacturername" placeholder="Manufacturer Name" type="text" class="form-control" formControlName="manufacture_name" [ngClass]="{'is-invalid': submit && form.manufacture_name.errors}">\r
                  @if(submit && form.manufacture_name.errors){\r
                  <div class="invalid-feedback">\r
                    @if(form.manufacture_name.errors.required){\r
                    <span>Manufacturer name is required.</span>}\r
                  </div>}\r
                </div>\r
                <div class="mb-3">\r
                  <label for="manufacturerbrand">Manufacturer Brand</label>\r
                  <input id="manufacturerbrand" name="manufacturerbrand" type="text" placeholder="Manufacturer Brand" class="form-control" formControlName="manufacture_brand" [ngClass]="{'is-invalid': submit &&\r
                    form.manufacture_brand.errors}">\r
                  @if(submit && form.manufacture_brand.errors){\r
                  <div class="invalid-feedback">\r
                    @if(form.manufacture_brand.errors.required){\r
                    <span>Manufacturer brand is required.</span>}\r
                  </div>}\r
                </div>\r
                <div class="mb-3">\r
                  <label for="price">Price</label>\r
                  <input id="price" name="price" type="text" class="form-control" placeholder="Price" formControlName="price" [ngClass]="{'is-invalid': submit &&\r
                  form.price.errors}">\r
                  @if(submit && form.price.errors){\r
                  <div class="invalid-feedback">\r
                    @if(form.price.errors.required){\r
                    <span>Price is required.</span>}\r
                  </div>}\r
                </div>\r
              </div>\r
\r
              <div class="col-sm-6">\r
                <div class="mb-3">\r
                  <label class="control-label">Category</label>\r
                  <ng-select formControlName="category" [items]="['Alaska','Hawaii']"></ng-select>\r
                </div>\r
                <div class="mb-3">\r
                  <label class="control-label">Features</label>\r
                  <ng-select formControlName="features" [items]="['Alaska','Hawaii','California','Nevada','Oregon','Washington']" [multiple]="true"></ng-select>\r
                </div>\r
                <div class="mb-3">\r
                  <label for="productdesc">Product Description</label>\r
                  <textarea class="form-control" id="productdesc" placeholder="Product Description" rows="5"></textarea>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="d-flex flex-wrap gap-2 mt-2">\r
              <button type="submit" class="btn btn-primary">Save Changes</button>\r
              <button type="submit" class="btn btn-secondary">Cancel</button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title mb-3">Product Images</h4>\r
\r
          <dropzone class="dropzone" [config]="dropzoneConfig" [message]="'Drop files here or click to upload.'"  (success)="onUploadSuccess($event)">\r
          </dropzone>\r
          @if(uploadedFiles){\r
          <ul class="list-unstyled mb-0" id="dropzone-preview">\r
            @for (file of uploadedFiles; track $index) {\r
            <li class="mt-2" id="dropzone-preview-list">\r
              <!-- This is used as the file preview template -->\r
              <div class="border rounded">\r
                <div class="d-flex p-2">\r
                  <div class="flex-shrink-0 me-3">\r
                    <div class="avatar-sm bg-light rounded">\r
                      @if(file.dataURL){\r
                      <img class="img-fluid rounded d-block" [src]="file.dataURL" alt="Dropzone-Image" />\r
                      }@else {\r
                      <img class="img-fluid rounded d-block" [src]="file" alt="Dropzone-Image" />\r
                      }\r
                    </div>\r
                  </div>\r
                  <div class="flex-grow-1">\r
                    <div class="pt-1">\r
                      @if (file.name) {\r
                      <h5 class="fs-md mb-1">{{ file.name }}</h5>\r
                      }\r
                      @if(file.size){\r
                      <p class="fs-sm text-muted mb-0">{{ file.size }}</p>\r
                      }\r
                      <strong class="error text-danger" data-dz-errormessage></strong>\r
                    </div>\r
                  </div>\r
                  <div class="flex-shrink-0 ms-3">\r
                    <button (click)="removeFile(file)" class="btn btn-sm btn-danger">Delete</button>\r
                  </div>\r
                </div>\r
              </div>\r
            </li>\r
            }\r
          </ul>}\r
          <!-- end dropzon-preview -->\r
        </div>\r
\r
      </div>\r
\r
      <div class="card">\r
        <div class="card-body">\r
\r
          <h4 class="card-title">Meta Data</h4>\r
          <p class="card-title-desc">Fill all information below</p>\r
\r
          <form>\r
            <div class="row">\r
              <div class="col-sm-6">\r
                <div class="mb-3">\r
                  <label for="metatitle">Meta title</label>\r
                  <input id="metatitle" placeholder="Metatitle" name="productname" type="text" class="form-control">\r
                </div>\r
                <div class="mb-3">\r
                  <label for="metakeywords">Meta Keywords</label>\r
                  <input id="metakeywords" placeholder="Meta Keywords" name="manufacturername" type="text" class="form-control">\r
                </div>\r
              </div>\r
\r
              <div class="col-sm-6">\r
                <div class="mb-3">\r
                  <label for="metadescription">Meta Description</label>\r
                  <textarea class="form-control" placeholder="Meta Description" id="metadescription" rows="5"></textarea>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="d-flex flex-wrap gap-2">\r
              <button type="submit" class="btn btn-primary">Save Changes</button>\r
              <button type="submit" class="btn btn-secondary">Cancel</button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
  <!-- end row -->\r
\r
</div> <!-- container-fluid -->` }]
  }], () => [{ type: UntypedFormBuilder }, { type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddproductComponent, { className: "AddproductComponent", filePath: "src/app/pages/ecommerce/addproduct/addproduct.component.ts", lineNumber: 17 });
})();

// src/app/pages/ecommerce/customers/customers.component.ts
var import_sweetalert22 = __toESM(require_sweetalert2_all());

// src/app/store/customer/customer-selector.ts
var selectDataState2 = createFeatureSelector("Customer");
var selectData2 = createSelector(selectDataState2, (state) => state.customer);
var selectDataLoading2 = createSelector(selectDataState2, (state) => state.loading);
var selectDataError2 = createSelector(selectDataState2, (state) => state.error);

// src/app/pages/ecommerce/customers/customers.component.ts
var _c04 = (a0) => ({ "is-invalid": a0 });
function CustomersComponent_For_39_ul_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 46)(1, "li")(2, "a", 47);
    \u0275\u0275listener("click", function CustomersComponent_For_39_ul_28_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const $index_r4 = \u0275\u0275nextContext().$index;
      const ctx_r4 = \u0275\u0275nextContext();
      const content_r2 = \u0275\u0275reference(43);
      return \u0275\u0275resetView(ctx_r4.editDataGet($index_r4, content_r2));
    });
    \u0275\u0275element(3, "i", 48);
    \u0275\u0275text(4, " Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "li")(6, "a", 47);
    \u0275\u0275listener("click", function CustomersComponent_For_39_ul_28_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const customers_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.delete(customers_r6.id));
    });
    \u0275\u0275element(7, "i", 49);
    \u0275\u0275text(8, " Delete");
    \u0275\u0275elementEnd()()();
  }
}
function CustomersComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 19)(1, "td")(2, "div", 35);
    \u0275\u0275element(3, "input", 36);
    \u0275\u0275elementStart(4, "label", 37);
    \u0275\u0275text(5, "\xA0");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "p", 38);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 39);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 40);
    \u0275\u0275element(17, "i", 41);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td")(25, "div", 42)(26, "a", 43);
    \u0275\u0275element(27, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, CustomersComponent_For_39_ul_28_Template, 9, 0, "ul", 45);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const customers_r6 = ctx.$implicit;
    \u0275\u0275property("id", \u0275\u0275interpolate1("c_", customers_r6.id));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(customers_r6.username);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(customers_r6.phone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(customers_r6.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(customers_r6.address);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", customers_r6.rating, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(customers_r6.balance);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 9, customers_r6.date, "dd/MM/yyyy"));
  }
}
function CustomersComponent_ng_template_42_Conditional_20_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Email is required.");
    \u0275\u0275elementEnd();
  }
}
function CustomersComponent_ng_template_42_Conditional_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value should be a valid email.");
    \u0275\u0275elementEnd();
  }
}
function CustomersComponent_ng_template_42_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275conditionalCreate(1, CustomersComponent_ng_template_42_Conditional_20_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(2, CustomersComponent_ng_template_42_Conditional_20_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.form.email.errors.required ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.form.email.errors.pattern ? 2 : -1);
  }
}
function CustomersComponent_ng_template_42_Conditional_25_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Phone is required.");
    \u0275\u0275elementEnd();
  }
}
function CustomersComponent_ng_template_42_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275conditionalCreate(1, CustomersComponent_ng_template_42_Conditional_25_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.form.phone.errors.required ? 1 : -1);
  }
}
function CustomersComponent_ng_template_42_Conditional_30_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Address is required.");
    \u0275\u0275elementEnd();
  }
}
function CustomersComponent_ng_template_42_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275conditionalCreate(1, CustomersComponent_ng_template_42_Conditional_30_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.form.address.errors.required ? 1 : -1);
  }
}
function CustomersComponent_ng_template_42_Conditional_35_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "balance is required.");
    \u0275\u0275elementEnd();
  }
}
function CustomersComponent_ng_template_42_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275conditionalCreate(1, CustomersComponent_ng_template_42_Conditional_35_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.form.balance.errors.required ? 1 : -1);
  }
}
function CustomersComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "h5", 51);
    \u0275\u0275text(2, "Add Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 52);
    \u0275\u0275listener("click", function CustomersComponent_ng_template_42_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.modalRef == null ? null : ctx_r4.modalRef.hide());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 53)(5, "form", 54);
    \u0275\u0275listener("ngSubmit", function CustomersComponent_ng_template_42_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.saveCustomer());
    });
    \u0275\u0275elementStart(6, "div", 3)(7, "div", 4);
    \u0275\u0275element(8, "input", 55);
    \u0275\u0275elementStart(9, "div", 56)(10, "label", 57);
    \u0275\u0275text(11, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 58);
    \u0275\u0275elementStart(13, "div", 59)(14, "span");
    \u0275\u0275text(15, "Username is required.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 56)(17, "label", 57);
    \u0275\u0275text(18, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 60);
    \u0275\u0275conditionalCreate(20, CustomersComponent_ng_template_42_Conditional_20_Template, 3, 2, "div", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 56)(22, "label", 57);
    \u0275\u0275text(23, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 61);
    \u0275\u0275conditionalCreate(25, CustomersComponent_ng_template_42_Conditional_25_Template, 2, 1, "div", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 56)(27, "label", 57);
    \u0275\u0275text(28, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 62);
    \u0275\u0275conditionalCreate(30, CustomersComponent_ng_template_42_Conditional_30_Template, 2, 1, "div", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 56)(32, "label", 57);
    \u0275\u0275text(33, "Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 63);
    \u0275\u0275conditionalCreate(35, CustomersComponent_ng_template_42_Conditional_35_Template, 2, 1, "div", 59);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "button", 64);
    \u0275\u0275text(37, " Save ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r4.formData);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c04, ctx_r4.submitted && ctx_r4.form["username"].errors));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c04, ctx_r4.submitted && ctx_r4.form.email.errors));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.submitted && ctx_r4.form.email.errors ? 20 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c04, ctx_r4.submitted && ctx_r4.form.phone.errors));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.submitted && ctx_r4.form.phone.errors ? 25 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(16, _c04, ctx_r4.submitted && ctx_r4.form.address.errors));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.submitted && ctx_r4.form.address.errors ? 30 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(18, _c04, ctx_r4.submitted && ctx_r4.form.address.errors));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.submitted && ctx_r4.form.balance.errors ? 35 : -1);
  }
}
var CustomersComponent = class _CustomersComponent {
  constructor(modalService, formBuilder, datePipe, store) {
    this.modalService = modalService;
    this.formBuilder = formBuilder;
    this.datePipe = datePipe;
    this.store = store;
    this.submitted = false;
    this.page = 1;
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Ecommerce" }, { label: "Customers", active: true }];
    this.formData = this.formBuilder.group({
      id: [""],
      username: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      email: ["", [Validators.required]],
      address: ["", [Validators.required]],
      rating: [""],
      balance: ["", [Validators.required]],
      date: null
    });
    this.currentpage = 1;
    this.store.dispatch(fetchCustomerData());
    this.store.select(selectData2).subscribe((data) => {
      this.customersData = data;
      this.returnedArray = data;
      this.customersData = this.returnedArray.slice(0, 8);
    });
  }
  get form() {
    return this.formData.controls;
  }
  validateForm() {
    const form = this.formData;
    if (form.invalid) {
      form.markAllAsTouched();
      return false;
    }
    return true;
  }
  /**
   * Open modal
   * @param content modal content
  */
  openModal(content) {
    this.submitted = false;
    this.modalRef = this.modalService.show(content);
  }
  /**
   * Open Edit modal
   * @param content modal content
   */
  editDataGet(id, content) {
    this.submitted = false;
    this.modalRef = this.modalService.show(content, { class: "modal-md" });
    var modelTitle = document.querySelector(".modal-title");
    modelTitle.innerHTML = "Edit Customer";
    var updateBtn = document.getElementById("btn-save-event");
    updateBtn.innerHTML = "Update";
    this.formData.patchValue(this.customersData[id]);
  }
  // Save customer
  saveCustomer() {
    if (this.formData.valid) {
      if (this.formData.get("id")?.value) {
        const updatedData = this.formData.value;
        this.store.dispatch(updateCustomerlist({ updatedData }));
      } else {
        const dates = /* @__PURE__ */ new Date();
        const formattedDate = this.datePipe.transform(dates, "dd MMM, yyyy");
        this.formData.controls["date"].setValue(formattedDate);
        const newData = this.formData.value;
        this.store.dispatch(addCustomerlist({ newData }));
      }
      this.modalService?.hide();
      setTimeout(() => {
        this.formData.reset();
      }, 2e3);
      this.submitted = true;
    }
  }
  // Delete Data
  delete(id) {
    const swalWithBootstrapButtons = import_sweetalert22.default.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger ms-2"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      showCancelButton: true
    }).then((result) => {
      if (result.value) {
        swalWithBootstrapButtons.fire("Deleted!", "Your file has been deleted.", "success");
        document.getElementById("c_" + id)?.remove();
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === import_sweetalert22.default.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  }
  // pagechanged
  pageChanged(event) {
    const startItem = (event.page - 1) * event.itemsPerPage;
    this.endItem = event.page * event.itemsPerPage;
    this.customersData = this.returnedArray.slice(startItem, this.endItem);
  }
  // fiter job
  selectname() {
    if (this.term) {
      this.customersData = this.returnedArray.filter((es) => {
        return es.username.toLowerCase().includes(this.term.toLowerCase());
      });
    } else {
      this.customersData = this.returnedArray;
    }
  }
  static {
    this.\u0275fac = function CustomersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomersComponent)(\u0275\u0275directiveInject(BsModalService), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomersComponent, selectors: [["app-customers"]], standalone: false, features: [\u0275\u0275ProvidersFeature([DecimalPipe, CommonModule])], decls: 59, vars: 4, consts: [["content", ""], [1, "container-fluid"], ["title", "Customers", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "row", "mb-2"], [1, "col-sm-4"], [1, "search-box", "me-2", "mb-2", "d-inline-block"], [1, "position-relative"], ["type", "text", "id", "select2", "placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "bx", "bx-search-alt", "search-icon"], [1, "col-sm-8"], [1, "text-sm-end"], ["type", "button", 1, "btn", "btn-success", "btn-rounded", "mb-2", "me-2", 3, "click"], [1, "mdi", "mdi-plus", "me-1"], [1, "table-responsive"], ["id", "customerList-table", 1, "table", "align-middle", "table-nowrap", "dt-responsive", "nowrap", "w-100"], [3, "id"], [1, "pagination", "pagination-rounded", "justify-content-end", "mb-2"], [3, "pageChanged", "totalItems", "itemsPerPage"], ["role", "document"], ["id", "removeItemModal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-content"], [1, "modal-body", "px-4", "py-5", "text-center"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "position-absolute", "end-0", "top-0", "m-3"], [1, "avatar-sm", "mb-4", "mx-auto"], [1, "avatar-title", "bg-primary", "text-primary", "bg-opacity-10", "font-size-20", "rounded-3"], [1, "mdi", "mdi-trash-can-outline"], [1, "text-muted", "font-size-16", "mb-4"], [1, "hstack", "gap-2", "justify-content-center", "mb-0"], ["type", "button", "id", "remove-item", 1, "btn", "btn-danger"], ["type", "button", "id", "close-removeCustomerModal", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], [1, "form-check", "font-size-16"], ["id", "customCheck", "type", "checkbox", 1, "form-check-input"], ["for", "customCheck", 1, "form-check-label"], [1, "mb-1"], [1, "mb-0"], [1, "badge", "bg-success", "font-size-12"], [1, "mdi", "mdi-star", "me-1"], ["dropdown", "", "placement", "bottom-right", 1, "dropdown"], ["href", "javascript: void(0);", "data-toggle", "dropdown", "dropdownToggle", "", "aria-expanded", "false", 1, "dropdown-toggle", "card-drop"], [1, "mdi", "mdi-dots-horizontal", "font-size-18"], ["class", "dropdown-menu dropdown-menu-end", 4, "dropdownMenu"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript: void(0);", 1, "dropdown-item", 3, "click"], [1, "fas", "fa-pencil-alt", "text-success", "me-1"], [1, "fas", "fa-trash-alt", "text-danger", "me-1"], [1, "modal-header"], [1, "modal-title", "mt-0"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "ngSubmit", "formGroup"], ["type", "hidden", "name", "id", "value", "", "formControlName", "ids"], [1, "mb-3"], [1, "control-label"], ["placeholder", "Enter Username", "type", "text", "name", "title", "autocomplete", "off", "formControlName", "username", "required", "", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], ["placeholder", "Enter email", "type", "text", "name", "email", "autocomplete", "off", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["placeholder", "Enter phone", "type", "text", "name", "phone", "autocomplete", "off", "formControlName", "phone", 1, "form-control", 3, "ngClass"], ["placeholder", "Enter address", "type", "text", "autocomplete", "off", "name", "address", "formControlName", "address", 1, "form-control", 3, "ngClass"], ["placeholder", "Enter balance", "type", "text", "autocomplete", "off", "name", "balance", "formControlName", "balance", 1, "form-control", 3, "ngClass"], ["type", "submit", "id", "btn-save-event", 1, "btn", "btn-success"]], template: function CustomersComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275element(1, "app-page-title", 2);
        \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "div", 7)(7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function CustomersComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.term, $event) || (ctx.term = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function CustomersComponent_Template_input_ngModelChange_10_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.selectname());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "i", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 13)(13, "div", 14)(14, "button", 15);
        \u0275\u0275listener("click", function CustomersComponent_Template_button_click_14_listener() {
          \u0275\u0275restoreView(_r1);
          const content_r2 = \u0275\u0275reference(43);
          return \u0275\u0275resetView(ctx.openModal(content_r2));
        });
        \u0275\u0275element(15, "i", 16);
        \u0275\u0275text(16, " New Customers ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(17, "div", 17)(18, "table", 18)(19, "thead")(20, "tr")(21, "th");
        \u0275\u0275text(22, "#");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "th");
        \u0275\u0275text(24, "Username");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "th");
        \u0275\u0275text(26, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "th");
        \u0275\u0275text(28, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "th");
        \u0275\u0275text(30, "Rating");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "th");
        \u0275\u0275text(32, "Wallet Balance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "th");
        \u0275\u0275text(34, "Joining Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "th");
        \u0275\u0275text(36, "Action");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "tbody");
        \u0275\u0275repeaterCreate(38, CustomersComponent_For_39_Template, 29, 12, "tr", 19, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "ul", 20)(41, "pagination", 21);
        \u0275\u0275listener("pageChanged", function CustomersComponent_Template_pagination_pageChanged_41_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.pageChanged($event));
        });
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275template(42, CustomersComponent_ng_template_42_Template, 38, 20, "ng-template", 22, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(44, "div", 23)(45, "div", 24)(46, "div", 25)(47, "div", 26);
        \u0275\u0275element(48, "button", 27);
        \u0275\u0275elementStart(49, "div", 28)(50, "div", 29);
        \u0275\u0275element(51, "i", 30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "p", 31);
        \u0275\u0275text(53, "Are you Sure You want to Remove this User ?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "div", 32)(55, "button", 33);
        \u0275\u0275text(56, "Remove Now");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "button", 34);
        \u0275\u0275text(58, "Close");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.term);
        \u0275\u0275advance(28);
        \u0275\u0275repeater(ctx.customersData);
        \u0275\u0275advance(3);
        \u0275\u0275property("totalItems", ctx.returnedArray == null ? null : ctx.returnedArray.length)("itemsPerPage", 8);
      }
    }, dependencies: [NgClass, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective, FormGroupDirective, FormControlName, PaginationComponent, PagetitleComponent, DatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomersComponent, [{
    type: Component,
    args: [{ selector: "app-customers", providers: [DecimalPipe, CommonModule], standalone: false, template: `<div class="container-fluid">\r
\r
  <app-page-title title="Customers" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
\r
  <div class="row">\r
    <div class="col-12">\r
      <div class="card">\r
        <div class="card-body">\r
          <div class="row mb-2">\r
            <div class="col-sm-4">\r
              <div class="search-box me-2 mb-2 d-inline-block">\r
                <div class="position-relative">\r
                  <input type="text" class="form-control" id="select2" placeholder="Search..." [(ngModel)]="term" (ngModelChange)="selectname()" />\r
                  <i class="bx bx-search-alt search-icon"></i>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="col-sm-8">\r
              <div class="text-sm-end">\r
                <button type="button" class="btn btn-success btn-rounded mb-2 me-2" (click)="openModal(content)">\r
                  <i class="mdi mdi-plus me-1"></i> New Customers\r
                </button>\r
              </div>\r
            </div>\r
            <!-- end col-->\r
          </div>\r
          <div class="table-responsive">\r
            <table class="table align-middle table-nowrap dt-responsive nowrap w-100" id="customerList-table">\r
              <thead>\r
                <tr>\r
                  <th>#</th>\r
                  <th>Username</th>\r
                  <th>Email</th>\r
                  <th>Phone</th>\r
                  <th>Rating</th>\r
                  <th>Wallet Balance</th>\r
                  <th>Joining Date</th>\r
                  <th>Action</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                @for (customers of customersData; track $index) {\r
                <tr id="c_{{customers.id}}">\r
                  <td>\r
                    <div class="form-check font-size-16">\r
                      <input id="customCheck" type="checkbox" class="form-check-input" />\r
                      <label class="form-check-label" for="customCheck">&nbsp;</label>\r
                    </div>\r
                  </td>\r
                  <td>{{customers.username}}</td>\r
                  <td>\r
                    <p class="mb-1">{{customers.phone}}</p>\r
                    <p class="mb-0">{{customers.email}}</p>\r
                  </td>\r
\r
                  <td>{{customers.address}}</td>\r
                  <td>\r
                    <span class="badge bg-success font-size-12">\r
                      <i class="mdi mdi-star me-1"></i>\r
                      {{customers.rating}}\r
                    </span>\r
                  </td>\r
                  <td>{{customers.balance}}</td>\r
                  <td>{{customers.date | date:'dd/MM/yyyy' }}</td>\r
                  <td>\r
                    <div class="dropdown" dropdown placement="bottom-right">\r
                      <a href="javascript: void(0);" class="dropdown-toggle card-drop" data-toggle="dropdown" dropdownToggle aria-expanded="false">\r
                        <i class="mdi mdi-dots-horizontal font-size-18"></i>\r
                      </a>\r
                      <ul class="dropdown-menu dropdown-menu-end" *dropdownMenu>\r
                        <li><a href="javascript: void(0);" class="dropdown-item" (click)="editDataGet($index,content  )"><i class="fas fa-pencil-alt text-success me-1"></i>\r
                            Edit</a></li>\r
                        <li><a href="javascript: void(0);" class="dropdown-item" (click)="delete(customers.id)"><i class="fas fa-trash-alt text-danger me-1"></i>\r
                            Delete</a></li>\r
                      </ul>\r
                    </div>\r
                  </td>\r
                </tr>}\r
              </tbody>\r
            </table>\r
          </div>\r
          <!-- pagination -->\r
          <ul class="pagination pagination-rounded justify-content-end mb-2">\r
            <pagination [totalItems]="returnedArray?.length" [itemsPerPage]="8" (pageChanged)="pageChanged($event)"></pagination>\r
          </ul>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
  <!-- end row -->\r
</div>\r
\r
<!-- Standard Modal -->\r
<ng-template #content role="document" let-modal>\r
  <div class="modal-header">\r
    <h5 class="modal-title mt-0">Add Customer</h5>\r
    <button type="button" class="btn-close" aria-hidden="true" (click)="modalRef?.hide()"></button>\r
  </div>\r
  <div class="modal-body">\r
    <form (ngSubmit)="saveCustomer()" [formGroup]="formData">\r
      <div class="row">\r
        <div class="col-12">\r
          <input type="hidden" name="id" value="" formControlName="ids" />\r
          <div class="mb-3">\r
            <label class="control-label">Username</label>\r
            <input class="form-control" placeholder="Enter Username" type="text" name="title" autocomplete="off" formControlName="username" [ngClass]="{'is-invalid': submitted && form['username'].errors}" required />\r
            <div class="invalid-feedback">\r
              <span>Username is required.</span>\r
            </div>\r
          </div>\r
          <div class="mb-3">\r
            <label class="control-label">Email</label>\r
            <input class="form-control" placeholder="Enter email" type="text" name="email" autocomplete="off" formControlName="email" [ngClass]="{'is-invalid': submitted && form.email.errors}" />\r
            @if(submitted && form.email.errors){\r
            <div class="invalid-feedback">\r
              @if(form.email.errors.required){\r
              <span>Email is required.</span>}\r
              @if(form.email.errors.pattern){\r
              <span>This value should be a valid email.</span>}\r
            </div>}\r
          </div>\r
          <div class="mb-3">\r
            <label class="control-label">Phone</label>\r
            <input class="form-control" placeholder="Enter phone" type="text" name="phone" autocomplete="off" formControlName="phone" [ngClass]="{'is-invalid': submitted && form.phone.errors}" />\r
            @if(submitted && form.phone.errors){\r
            <div class="invalid-feedback">\r
              @if(form.phone.errors.required){\r
              <span>Phone is required.</span>}\r
            </div>}\r
          </div>\r
          <div class="mb-3">\r
            <label class="control-label">Address</label>\r
            <input class="form-control" placeholder="Enter address" type="text" autocomplete="off" name="address" formControlName="address" [ngClass]="{'is-invalid': submitted && form.address.errors}" />\r
            @if(submitted && form.address.errors){\r
            <div class="invalid-feedback">\r
              @if(form.address.errors.required){\r
              <span>Address is required.</span>}\r
            </div>}\r
          </div>\r
          <div class="mb-3">\r
            <label class="control-label">Balance</label>\r
            <input class="form-control" placeholder="Enter balance" type="text" autocomplete="off" name="balance" formControlName="balance" [ngClass]="{'is-invalid': submitted && form.address.errors}" />\r
            @if(submitted && form.balance.errors){\r
            <div class="invalid-feedback">\r
              @if(form.balance.errors.required){\r
              <span>balance is required.</span>}\r
            </div>}\r
          </div>\r
        </div>\r
      </div>\r
      <button type="submit" class="btn btn-success" id="btn-save-event">\r
        Save\r
      </button>\r
    </form>\r
  </div>\r
</ng-template>\r
\r
<!-- Modal -->\r
<div class="modal fade" id="removeItemModal" tabindex="-1" aria-hidden="true">\r
  <div class="modal-dialog modal-dialog-centered modal-sm">\r
    <div class="modal-content">\r
      <div class="modal-body px-4 py-5 text-center">\r
        <button type="button" class="btn-close position-absolute end-0 top-0 m-3" data-bs-dismiss="modal" aria-label="Close"></button>\r
        <div class="avatar-sm mb-4 mx-auto">\r
          <div class="avatar-title bg-primary text-primary bg-opacity-10 font-size-20 rounded-3">\r
            <i class="mdi mdi-trash-can-outline"></i>\r
          </div>\r
        </div>\r
        <p class="text-muted font-size-16 mb-4">Are you Sure You want to Remove this User ?</p>\r
\r
        <div class="hstack gap-2 justify-content-center mb-0">\r
          <button type="button" class="btn btn-danger" id="remove-item">Remove Now</button>\r
          <button type="button" class="btn btn-secondary" id="close-removeCustomerModal" data-bs-dismiss="modal">Close</button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
<!-- end removeItemModal -->` }]
  }], () => [{ type: BsModalService }, { type: UntypedFormBuilder }, { type: DatePipe }, { type: Store }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomersComponent, { className: "CustomersComponent", filePath: "src/app/pages/ecommerce/customers/customers.component.ts", lineNumber: 21 });
})();

// src/app/store/orders/order-selector.ts
var selectDataState3 = createFeatureSelector("EcoOrderList");
var selectData3 = createSelector(selectDataState3, (state) => state.orderDatas);
var selectDataLoading3 = createSelector(selectDataState3, (state) => state.loading);
var selectDataError3 = createSelector(selectDataState3, (state) => state.error);

// src/app/pages/ecommerce/orders/orders.component.ts
var _c05 = ["showModal"];
var _c12 = ["removeItemModal"];
var _c22 = (a0) => ({ "is-invalid": a0 });
var _c3 = (a0, a1) => ({ "badge-soft-danger": a0, "badge-soft-warning": a1 });
function OrdersComponent_For_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 27)(1, "td")(2, "div", 76)(3, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function OrdersComponent_For_43_Template_input_ngModelChange_3_listener($event) {
      const data_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(data_r4.state, $event) || (data_r4.state = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "label", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "a", 79);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 80);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275element(18, "i");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "button", 81);
    \u0275\u0275listener("click", function OrdersComponent_For_43_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r4 = \u0275\u0275nextContext();
      const ViewContent_r6 = \u0275\u0275reference(47);
      return \u0275\u0275resetView(ctx_r4.openViewModal(ViewContent_r6));
    });
    \u0275\u0275text(22, "View Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td")(24, "div", 82)(25, "a", 83);
    \u0275\u0275listener("click", function OrdersComponent_For_43_Template_a_click_25_listener() {
      const $index_r7 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.editModal($index_r7));
    });
    \u0275\u0275element(26, "i", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "a", 85);
    \u0275\u0275listener("click", function OrdersComponent_For_43_Template_a_click_27_listener() {
      const data_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.confirm(data_r4.id));
    });
    \u0275\u0275element(28, "i", 86);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    \u0275\u0275property("id", \u0275\u0275interpolate1("o_", data_r4.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("id", \u0275\u0275interpolate1("transactionCheck", data_r4.index))("value", \u0275\u0275interpolate(data_r4.id));
    \u0275\u0275twoWayProperty("ngModel", data_r4.state);
    \u0275\u0275advance();
    \u0275\u0275property("for", \u0275\u0275interpolate1("transactionCheck", data_r4.index));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4.total);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(19, _c3, data_r4.status === "Chargeback", data_r4.status === "Refund"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r4.status);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("", data_r4.payment_icon, " me-1"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r4.payment, " ");
  }
}
function OrdersComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "h5", 87);
    \u0275\u0275text(2, "Order Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 88);
    \u0275\u0275listener("click", function OrdersComponent_ng_template_46_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.modalRef == null ? null : ctx_r4.modalRef.hide());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 37)(5, "p", 89);
    \u0275\u0275text(6, " Product id: ");
    \u0275\u0275elementStart(7, "span", 90);
    \u0275\u0275text(8, "#SK2540");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 91);
    \u0275\u0275text(10, " Billing Name: ");
    \u0275\u0275elementStart(11, "span", 92);
    \u0275\u0275text(12, "Neal Matthews");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 93)(14, "table", 94)(15, "thead")(16, "tr")(17, "th", 95);
    \u0275\u0275text(18, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 95);
    \u0275\u0275text(20, "Product Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 95);
    \u0275\u0275text(22, "Price");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "tbody")(24, "tr")(25, "th", 96)(26, "div");
    \u0275\u0275element(27, "img", 97);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "td")(29, "div")(30, "h5", 98);
    \u0275\u0275text(31, "Wireless Headphone (Black)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 99);
    \u0275\u0275text(33, "$ 225 x 1");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "td");
    \u0275\u0275text(35, "$ 255");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "tr")(37, "th", 96)(38, "div");
    \u0275\u0275element(39, "img", 100);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "td")(41, "div")(42, "h5", 98);
    \u0275\u0275text(43, "Phone patterned cases");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p", 99);
    \u0275\u0275text(45, "$ 145 x 1");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "td");
    \u0275\u0275text(47, "$ 145");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "tr")(49, "td", 101)(50, "h6", 102);
    \u0275\u0275text(51, "Sub Total:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "td");
    \u0275\u0275text(53, "$ 400");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "tr")(55, "td", 101)(56, "h6", 102);
    \u0275\u0275text(57, "Shipping:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "td");
    \u0275\u0275text(59, "Free");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "tr")(61, "td", 101)(62, "h6", 102);
    \u0275\u0275text(63, "Total:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "td");
    \u0275\u0275text(65, "$ 400");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(66, "div", 103)(67, "button", 104);
    \u0275\u0275listener("click", function OrdersComponent_ng_template_46_Template_button_click_67_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.modalRef == null ? null : ctx_r4.modalRef.hide());
    });
    \u0275\u0275text(68, "Close");
    \u0275\u0275elementEnd()();
  }
}
function OrdersComponent_Conditional_65_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Please enter a name.");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275conditionalCreate(1, OrdersComponent_Conditional_65_Conditional_1_Template, 2, 0, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.form["name"].errors["required"] ? 1 : -1);
  }
}
function OrdersComponent_Conditional_76_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Please enter amount.");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275conditionalCreate(1, OrdersComponent_Conditional_76_Conditional_1_Template, 2, 0, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.form["total"].errors["required"] ? 1 : -1);
  }
}
function OrdersComponent_Conditional_88_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Please select a payment status.");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275conditionalCreate(1, OrdersComponent_Conditional_88_Conditional_1_Template, 2, 0, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.form["status"].errors["required"] ? 1 : -1);
  }
}
function OrdersComponent_Conditional_102_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Please select a payment method.");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275conditionalCreate(1, OrdersComponent_Conditional_102_Conditional_1_Template, 2, 0, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.form["payment"].errors["required"] ? 1 : -1);
  }
}
var OrdersComponent = class _OrdersComponent {
  constructor(modalService, formBuilder, datePipe, store) {
    this.modalService = modalService;
    this.formBuilder = formBuilder;
    this.datePipe = datePipe;
    this.store = store;
    this.submitted = false;
    this.page = 1;
    this.checkedValGet = [];
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Ecommerce" }, { label: "O rders", active: true }];
    this.ordersForm = this.formBuilder.group({
      id: [""],
      name: ["", [Validators.required]],
      date: ["", [Validators.required]],
      total: ["", [Validators.required]],
      status: ["", [Validators.required]],
      payment: ["", [Validators.required]]
    });
    this.store.dispatch(fetchEcoorderDataData());
    this.store.select(selectData3).subscribe((data) => {
      this.orderlist = data;
      this.Allorderlist = data;
    });
  }
  /**
   * Open modal
   * @param content modal content
   */
  openViewModal(content) {
    this.modalRef = this.modalService.show(content);
  }
  // The master checkbox will check/ uncheck all items
  checkUncheckAll(ev) {
    this.orderes.forEach((x) => x.state = ev.target.checked);
  }
  // Delete Data
  deleteData(id) {
    if (id) {
      document.getElementById("lj_" + id)?.remove();
    } else {
      this.checkedValGet.forEach((item) => {
        document.getElementById("lj_" + item)?.remove();
      });
    }
  }
  // Delete Data
  confirm(id) {
    this.deletId = id;
    this.removeItemModal.show();
  }
  // delete order
  deleteOrder() {
    this.store.dispatch(deleteEcoOrders({ ids: this.deletId }));
    this.removeItemModal.hide();
  }
  // fiter job
  searchOrder() {
    if (this.term) {
      this.orderlist = this.Allorderlist.filter((data) => {
        return data.name.toLowerCase().includes(this.term.toLowerCase());
      });
    } else {
      this.orderlist = this.Allorderlist;
    }
  }
  /**
   * Open modal
   * @param content modal content
   */
  openModal(content) {
    this.submitted = false;
    this.modalRef = this.modalService.show(content, { class: "modal-md" });
  }
  /**
   * Form data get
   */
  get form() {
    return this.ordersForm.controls;
  }
  /**
  * Save user
  */
  saveUser() {
    if (this.ordersForm.valid) {
      if (this.ordersForm.get("id")?.value) {
        const updatedData = this.ordersForm.value;
        this.store.dispatch(updateEcoOrders({ updatedData }));
      } else {
        this.ordersForm.controls["id"].setValue(this.orderlist.length + 1);
        const currentDate = /* @__PURE__ */ new Date();
        const formattedDate = this.datePipe.transform(currentDate, "yyyy-mm-dd");
        this.ordersForm.controls["date"].setValue(formattedDate);
        const newData = this.ordersForm.value;
        this.store.dispatch(addEcoOrders({ newData }));
      }
      this.showModal?.hide();
      setTimeout(() => {
        this.ordersForm.reset();
      }, 0);
      this.submitted = true;
    }
  }
  /**
   * Open Edit modal
   * @param content modal content
   */
  editModal(id) {
    this.submitted = false;
    this.showModal?.show();
    var modelTitle = document.querySelector(".modal-title");
    modelTitle.innerHTML = "Edit Order";
    var updateBtn = document.getElementById("addNewOrder-btn");
    updateBtn.innerHTML = "Update";
    this.ordersForm.patchValue(this.orderlist[id]);
  }
  // pagination
  pagechanged(event) {
    const startItem = (event.page - 1) * event.itemsPerPage;
    this.enditem = event.page * event.itemsPerPage;
    this.orderlist = this.orderlist.slice(startItem, this.enditem);
  }
  static {
    this.\u0275fac = function OrdersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrdersComponent)(\u0275\u0275directiveInject(BsModalService), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrdersComponent, selectors: [["app-orders"]], viewQuery: function OrdersComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c05, 5);
        \u0275\u0275viewQuery(_c12, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.showModal = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.removeItemModal = _t.first);
      }
    }, standalone: false, decls: 125, vars: 22, consts: [["ViewContent", ""], ["showModal", "bs-modal"], ["removeItemModal", "bs-modal"], [1, "container-fluid"], ["title", "Orders", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "row", "mb-2"], [1, "col-sm-4"], [1, "search-box", "me-2", "mb-2", "d-inline-block"], [1, "position-relative"], ["type", "text", "autocomplete", "off", "id", "searchTableList", "placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "bx", "bx-search-alt", "search-icon"], [1, "col-sm-8"], [1, "text-sm-end"], ["type", "button", 1, "btn", "btn-success", "btn-rounded", "mb-2", "me-2", 3, "click"], [1, "mdi", "mdi-plus", "mr-1"], [1, "table-responsive", "mb-0"], ["id", "order-list", 1, "table", "align-middle", "table-nowrap", "dt-responsive", "nowrap", "w-100", "table-check"], [1, "table-light"], [2, "width", "20px"], [1, "form-check", "font-size-16", "align-middle"], ["type", "checkbox", "id", "transactionCheck01", 1, "form-check-input", 3, "ngModelChange", "change", "ngModel"], ["for", "transactionCheck01", 1, "form-check-label"], [1, "align-middle"], [3, "id"], [1, "pagination", "pagination-rounded", "justify-content-end", "mb-2"], [3, "pagechanged", "totalItems", "itemsPerPage"], ["role", "document"], ["bsModal", "", "id", "showModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "id", "close-modal", 1, "btn-close", 3, "click"], [1, "modal-body"], ["id", "createorder-form", "novalidate", "", 1, "needs-validation", "createorder-form", 3, "ngSubmit", "formGroup"], [1, "col-lg-12"], ["type", "hidden", "id", "orderid-input", 1, "form-control"], [1, "mb-3"], ["for", "customername-field", 1, "form-label"], ["type", "text", "id", "customername-field", "placeholder", "Enter name", "required", "", "formControlName", "name", 1, "form-control", 3, "ngClass"], ["align", "left", 1, "invalid-feedback"], ["for", "orderdate-input", 1, "form-label"], ["bsDatepicker", "", "placeholder", "yyyy-mm-dd", "formControlName", "date", 1, "form-control"], [1, "invalid-feedback"], ["for", "payamount-input", 1, "form-label"], ["type", "text", "id", "customername-field", "placeholder", "Enter amount", "required", "", "formControlName", "total", 1, "form-control", 3, "ngClass"], [1, "col-lg-6"], ["for", "paystatus-input", 1, "form-label"], ["name", "productname-field", "id", "productname-field", "formControlName", "status", 1, "form-control", 3, "ngClass"], ["value", "Chargeback"], ["value", "Paid", "selected", ""], ["value", "Refund"], ["for", "paymethod-input", 1, "form-label"], ["name", "payment-method", "id", "paymethod-input", "formControlName", "payment", 1, "form-control", 3, "ngClass"], ["value", "Mastercard"], ["value", "Visa"], ["value", "Paypal"], ["value", "COD"], [1, "text-end"], ["type", "button", 1, "btn", "btn-outline-secondary", "me-1", 3, "click"], ["type", "submit", "id", "addNewOrder-btn", 1, "btn", "btn-success"], ["bsModal", "", "id", "removeItemModal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-md"], [1, "modal-body", "px-4", "py-5", "text-center"], ["type", "button", 1, "btn-close", "position-absolute", "end-0", "top-0", "m-3", 3, "click"], [1, "avatar-sm", "mb-4", "mx-auto"], [1, "avatar-title", "bg-primary", "text-primary", "bg-opacity-10", "font-size-20", "rounded-3"], [1, "mdi", "mdi-trash-can-outline"], [1, "text-muted", "font-size-16", "mb-4"], [1, "hstack", "gap-2", "justify-content-center", "mb-0"], ["type", "button", "id", "remove-item", 1, "btn", "btn-danger", 3, "click"], ["type", "button", "id", "close-removeOrderModal", 1, "btn", "btn-secondary", 3, "click"], [1, "form-check", "font-size-16"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "id", "value", "ngModel"], [1, "form-check-label", 3, "for"], ["href", "javascript: void(0);", 1, "text-body", "fw-bold"], [1, "badge", "badge-pill", "badge-soft-success", "font-size-11", 3, "ngClass"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "btn-rounded", 3, "click"], [1, "d-flex", "gap-3"], ["href", "javascript:void(0);", 1, "text-success", 3, "click"], [1, "mdi", "mdi-pencil", "font-size-18"], ["href", "javascript:void(0);", 1, "text-danger", 3, "click"], [1, "mdi", "mdi-delete", "font-size-18"], ["id", "orderdetailsModalLabel", 1, "modal-title", "mt-0"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], ["id", "orderlist-overview", 1, "mb-2"], [1, "list-id", "text-primary"], [1, "mb-4"], [1, "orderlist-customer", "text-primary"], [1, "table-responsive"], [1, "table", "table-centered", "table-nowrap"], ["scope", "col"], ["scope", "row"], ["src", "assets/images/product/img-7.png", "alt", "", 1, "avatar-sm"], [1, "text-truncate", "font-size-14"], [1, "text-muted", "mb-0"], ["src", "assets/images/product/img-4.png", "alt", "", 1, "avatar-sm"], ["colspan", "2"], [1, "m-0"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"]], template: function OrdersComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 3);
        \u0275\u0275element(1, "app-page-title", 4);
        \u0275\u0275elementStart(2, "div", 5)(3, "div", 6)(4, "div", 7)(5, "div", 8)(6, "div", 9)(7, "div", 10)(8, "div", 11)(9, "div", 12)(10, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function OrdersComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.term, $event) || (ctx.term = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function OrdersComponent_Template_input_ngModelChange_10_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.searchOrder());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "i", 14);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 15)(13, "div", 16)(14, "button", 17);
        \u0275\u0275listener("click", function OrdersComponent_Template_button_click_14_listener() {
          \u0275\u0275restoreView(_r1);
          const showModal_r2 = \u0275\u0275reference(49);
          return \u0275\u0275resetView(showModal_r2.show());
        });
        \u0275\u0275element(15, "i", 18);
        \u0275\u0275text(16, " Add New Order");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(17, "div", 19)(18, "table", 20)(19, "thead", 21)(20, "tr")(21, "th", 22)(22, "div", 23)(23, "input", 24);
        \u0275\u0275twoWayListener("ngModelChange", function OrdersComponent_Template_input_ngModelChange_23_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.masterSelected, $event) || (ctx.masterSelected = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("change", function OrdersComponent_Template_input_change_23_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.checkUncheckAll($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(24, "label", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "th", 26);
        \u0275\u0275text(26, "Order ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "th", 26);
        \u0275\u0275text(28, "Billing Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "th", 26);
        \u0275\u0275text(30, "Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "th", 26);
        \u0275\u0275text(32, "Total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "th", 26);
        \u0275\u0275text(34, "Payment Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "th", 26);
        \u0275\u0275text(36, "Payment Method");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "th", 26);
        \u0275\u0275text(38, "View Details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "th", 26);
        \u0275\u0275text(40, "Action");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "tbody");
        \u0275\u0275repeaterCreate(42, OrdersComponent_For_43_Template, 29, 22, "tr", 27, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(44, "ul", 28)(45, "pagination", 29);
        \u0275\u0275listener("pagechanged", function OrdersComponent_Template_pagination_pagechanged_45_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.pagechanged($event));
        });
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275template(46, OrdersComponent_ng_template_46_Template, 69, 0, "ng-template", 30, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(48, "div", 31, 1)(50, "div", 32)(51, "div", 33)(52, "div", 34)(53, "h5", 35);
        \u0275\u0275text(54, "Add New Order");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "button", 36);
        \u0275\u0275listener("click", function OrdersComponent_Template_button_click_55_listener() {
          \u0275\u0275restoreView(_r1);
          const showModal_r2 = \u0275\u0275reference(49);
          return \u0275\u0275resetView(showModal_r2.hide());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "div", 37)(57, "form", 38);
        \u0275\u0275listener("ngSubmit", function OrdersComponent_Template_form_ngSubmit_57_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.saveUser());
        });
        \u0275\u0275elementStart(58, "div", 5)(59, "div", 39);
        \u0275\u0275element(60, "input", 40);
        \u0275\u0275elementStart(61, "div", 41)(62, "label", 42);
        \u0275\u0275text(63, "Customer Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(64, "input", 43);
        \u0275\u0275conditionalCreate(65, OrdersComponent_Conditional_65_Template, 2, 1, "div", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "div", 41)(67, "label", 45);
        \u0275\u0275text(68, "Order Date");
        \u0275\u0275elementEnd();
        \u0275\u0275element(69, "input", 46);
        \u0275\u0275elementStart(70, "div", 47);
        \u0275\u0275text(71, "Please select a date.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "div", 41)(73, "label", 48);
        \u0275\u0275text(74, "Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275element(75, "input", 49);
        \u0275\u0275conditionalCreate(76, OrdersComponent_Conditional_76_Template, 2, 1, "div", 44);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "div", 50)(78, "div", 41)(79, "label", 51);
        \u0275\u0275text(80, "Payment Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "select", 52)(82, "option", 53);
        \u0275\u0275text(83, "Chargeback");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "option", 54);
        \u0275\u0275text(85, "Paid");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "option", 55);
        \u0275\u0275text(87, "Refund");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(88, OrdersComponent_Conditional_88_Template, 2, 1, "div", 44);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "div", 50)(90, "div", 41)(91, "label", 56);
        \u0275\u0275text(92, "Payment Method");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "select", 57)(94, "option", 58);
        \u0275\u0275text(95, "Mastercard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "option", 59);
        \u0275\u0275text(97, "Visa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "option", 60);
        \u0275\u0275text(99, "Paypal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "option", 61);
        \u0275\u0275text(101, "COD");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(102, OrdersComponent_Conditional_102_Template, 2, 1, "div", 44);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(103, "div", 39)(104, "div", 62)(105, "button", 63);
        \u0275\u0275listener("click", function OrdersComponent_Template_button_click_105_listener() {
          \u0275\u0275restoreView(_r1);
          const showModal_r2 = \u0275\u0275reference(49);
          return \u0275\u0275resetView(showModal_r2.hide());
        });
        \u0275\u0275text(106, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "button", 64);
        \u0275\u0275text(108, "Create");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(109, "div", 65, 2)(111, "div", 66)(112, "div", 33)(113, "div", 67)(114, "button", 68);
        \u0275\u0275listener("click", function OrdersComponent_Template_button_click_114_listener() {
          \u0275\u0275restoreView(_r1);
          const removeItemModal_r9 = \u0275\u0275reference(110);
          return \u0275\u0275resetView(removeItemModal_r9.hide());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "div", 69)(116, "div", 70);
        \u0275\u0275element(117, "i", 71);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(118, "p", 72);
        \u0275\u0275text(119, "Are you Sure You want to Remove this Order ?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "div", 73)(121, "button", 74);
        \u0275\u0275listener("click", function OrdersComponent_Template_button_click_121_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.deleteOrder());
        });
        \u0275\u0275text(122, "Remove Now");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "button", 75);
        \u0275\u0275listener("click", function OrdersComponent_Template_button_click_123_listener() {
          \u0275\u0275restoreView(_r1);
          const removeItemModal_r9 = \u0275\u0275reference(110);
          return \u0275\u0275resetView(removeItemModal_r9.hide());
        });
        \u0275\u0275text(124, "Close");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.term);
        \u0275\u0275advance(13);
        \u0275\u0275twoWayProperty("ngModel", ctx.masterSelected);
        \u0275\u0275advance(19);
        \u0275\u0275repeater(ctx.orderlist);
        \u0275\u0275advance(3);
        \u0275\u0275property("totalItems", ctx.orderlist == null ? null : ctx.orderlist.legnth)("itemsPerPage", 8);
        \u0275\u0275advance(12);
        \u0275\u0275property("formGroup", ctx.ordersForm);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c22, ctx.submitted && ctx.form["name"].errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submitted && ctx.form["name"].errors ? 65 : -1);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(16, _c22, ctx.submitted && ctx.form["total"].errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submitted && ctx.form["total"].errors ? 76 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(18, _c22, ctx.submitted && ctx.form["status"].errors));
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.submitted && ctx.form["status"].errors ? 88 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(20, _c22, ctx.submitted && ctx.form["payment"].errors));
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.submitted && ctx.form["payment"].errors ? 102 : -1);
      }
    }, dependencies: [NgClass, ModalDirective, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, FormGroupDirective, FormControlName, PaginationComponent, BsDatepickerDirective, BsDatepickerInputDirective, PagetitleComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrdersComponent, [{
    type: Component,
    args: [{ selector: "app-orders", standalone: false, template: `<div class="container-fluid">\r
  <app-page-title title="Orders" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
\r
  <div class="row">\r
    <div class="col-12">\r
      <div class="card">\r
        <div class="card-body">\r
          <div class="row mb-2">\r
            <div class="col-sm-4">\r
              <div class="search-box me-2 mb-2 d-inline-block">\r
                <div class="position-relative">\r
                  <input type="text" class="form-control" autocomplete="off" id="searchTableList" placeholder="Search..." [(ngModel)]="term" (ngModelChange)="searchOrder()">\r
                  <i class="bx bx-search-alt search-icon"></i>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="col-sm-8">\r
              <div class="text-sm-end">\r
                <button type="button" class="btn btn-success btn-rounded mb-2 me-2" (click)="showModal.show()"><i class="mdi mdi-plus mr-1"></i>\r
                  Add New Order</button>\r
              </div>\r
            </div><!-- end col-->\r
          </div>\r
          <!-- Table data -->\r
          <div class="table-responsive mb-0">\r
            <table class="table align-middle table-nowrap dt-responsive nowrap w-100 table-check" id="order-list">\r
              <thead class="table-light">\r
                <tr>\r
                  <th style="width: 20px;">\r
                    <div class="form-check font-size-16 align-middle">\r
                      <input class="form-check-input" type="checkbox" id="transactionCheck01" [(ngModel)]="masterSelected" (change)="checkUncheckAll($event)">\r
                      <label class="form-check-label" for="transactionCheck01"></label>\r
                    </div>\r
                  </th>\r
                  <th class="align-middle">Order ID</th>\r
                  <th class="align-middle">Billing Name</th>\r
                  <th class="align-middle">Date</th>\r
                  <th class="align-middle">Total</th>\r
                  <th class="align-middle">Payment Status</th>\r
                  <th class="align-middle">Payment Method</th>\r
                  <th class="align-middle">View Details</th>\r
                  <th class="align-middle">Action</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                @for (data of orderlist; track $index) {\r
                <tr id="o_{{data.id}}">\r
                  <td>\r
                    <div class="form-check font-size-16">\r
                      <input class="form-check-input" type="checkbox" id="transactionCheck{{data.index}}" value="{{data.id}}" [(ngModel)]="data.state">\r
                      <label class="form-check-label" for="transactionCheck{{data.index}}"></label>\r
                    </div>\r
                  </td>\r
                  <td>\r
                    <a href="javascript: void(0);" class="text-body fw-bold">{{data.id}}</a>\r
                  </td>\r
                  <td>{{data.name}}</td>\r
                  <td>{{data.date}}</td>\r
                  <td>{{data.total}}</td>\r
                  <td>\r
                    <span class="badge badge-pill badge-soft-success font-size-11" [ngClass]=" { 'badge-soft-danger': data.status === 'Chargeback',\r
                                  'badge-soft-warning':data.status === 'Refund' }">{{data.status}}</span>\r
                  </td>\r
                  <td>\r
                    <i :class="{{data.payment_icon}} me-1"></i>\r
                    {{data.payment}}\r
                  </td>\r
                  <td>\r
                    <!-- Button trigger modal -->\r
                    <button type="button" class="btn btn-primary btn-sm btn-rounded" (click)="openViewModal(ViewContent)">View\r
                      Details</button>\r
                  </td>\r
                  <td>\r
                    <div class="d-flex gap-3">\r
                      <a href="javascript:void(0);" class="text-success" (click)="editModal($index)"><i class="mdi mdi-pencil font-size-18"></i></a>\r
                      <a href="javascript:void(0);" class="text-danger" (click)="confirm(data.id)"><i class="mdi mdi-delete font-size-18"></i></a>\r
                    </div>\r
                  </td>\r
                </tr>}\r
              </tbody>\r
            </table>\r
          </div>\r
          <!-- end table -->\r
          <ul class="pagination pagination-rounded justify-content-end mb-2">\r
            <pagination [totalItems]="orderlist?.legnth" [itemsPerPage]="8" (pagechanged)="pagechanged($event)"></pagination>\r
          </ul>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- View Details Model -->\r
<ng-template #ViewContent role="document" let-modal>\r
  <div class="modal-header">\r
    <h5 class="modal-title mt-0" id="orderdetailsModalLabel">Order Details</h5>\r
    <button type="button" class="btn-close" aria-hidden="true" (click)="modalRef?.hide()"></button>\r
  </div>\r
  <div class="modal-body">\r
    <p class="mb-2" id="orderlist-overview">\r
      Product id:\r
      <span class="list-id text-primary">#SK2540</span>\r
    </p>\r
    <p class="mb-4">\r
      Billing Name:\r
      <span class="orderlist-customer text-primary">Neal Matthews</span>\r
    </p>\r
    <div class="table-responsive">\r
      <table class="table table-centered table-nowrap">\r
        <thead>\r
          <tr>\r
            <th scope="col">Product</th>\r
            <th scope="col">Product Name</th>\r
            <th scope="col">Price</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr>\r
            <th scope="row">\r
              <div>\r
                <img src="assets/images/product/img-7.png" alt class="avatar-sm" />\r
              </div>\r
            </th>\r
            <td>\r
              <div>\r
                <h5 class="text-truncate font-size-14">Wireless Headphone (Black)</h5>\r
                <p class="text-muted mb-0">$ 225 x 1</p>\r
              </div>\r
            </td>\r
            <td>$ 255</td>\r
          </tr>\r
          <tr>\r
            <th scope="row">\r
              <div>\r
                <img src="assets/images/product/img-4.png" alt class="avatar-sm" />\r
              </div>\r
            </th>\r
            <td>\r
              <div>\r
                <h5 class="text-truncate font-size-14">Phone patterned cases</h5>\r
                <p class="text-muted mb-0">$ 145 x 1</p>\r
              </div>\r
            </td>\r
            <td>$ 145</td>\r
          </tr>\r
          <tr>\r
            <td colspan="2">\r
              <h6 class="m-0">Sub Total:</h6>\r
            </td>\r
            <td>$ 400</td>\r
          </tr>\r
          <tr>\r
            <td colspan="2">\r
              <h6 class="m-0">Shipping:</h6>\r
            </td>\r
            <td>Free</td>\r
          </tr>\r
          <tr>\r
            <td colspan="2">\r
              <h6 class="m-0">Total:</h6>\r
            </td>\r
            <td>$ 400</td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
  <div class="modal-footer">\r
    <button class="btn btn-secondary" (click)="modalRef?.hide()">Close</button>\r
  </div>\r
</ng-template>\r
\r
<!-- Order Create Model -->\r
\r
<div bsModal #showModal="bs-modal" class="modal fade" id="showModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">\r
  <div class="modal-dialog modal-dialog-centered">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h5 class="modal-title" id="exampleModalLabel">Add New Order</h5>\r
        <button type="button" class="btn-close" id="close-modal" (click)="showModal.hide()"></button>\r
      </div>\r
      <div class="modal-body">\r
        <form (ngSubmit)="saveUser()" [formGroup]="ordersForm" class="needs-validation createorder-form" id="createorder-form" novalidate>\r
          <div class="row">\r
            <div class="col-lg-12">\r
              <input type="hidden" class="form-control" id="orderid-input">\r
              <div class="mb-3">\r
                <label for="customername-field" class="form-label">Customer Name</label>\r
                <input type="text" id="customername-field" class="form-control" placeholder="Enter name" required formControlName="name" [ngClass]="{ 'is-invalid': submitted && form['name'].errors }" />\r
                @if(submitted && form['name'].errors){\r
                <div class="invalid-feedback" align="left">\r
                  @if(form['name'].errors['required']){\r
                  <div>Please enter a name.</div>}\r
                </div>}\r
              </div>\r
              <div class="mb-3">\r
                <label for="orderdate-input" class="form-label">Order Date</label>\r
                <input bsDatepicker class="form-control" placeholder="yyyy-mm-dd" formControlName="date">\r
                <div class="invalid-feedback">Please select a date.</div>\r
              </div>\r
              <div class="mb-3">\r
                <label for="payamount-input" class="form-label">Amount</label>\r
                <input type="text" id="customername-field" class="form-control" placeholder="Enter amount" required formControlName="total" [ngClass]="{ 'is-invalid': submitted && form['total'].errors }" />\r
                @if(submitted && form['total'].errors){\r
                <div class="invalid-feedback" align="left">\r
                  @if(form['total'].errors['required']){\r
                  <div>Please enter amount.</div>}\r
                </div>}\r
              </div>\r
            </div>\r
            <div class="col-lg-6">\r
              <div class="mb-3">\r
                <label for="paystatus-input" class="form-label">Payment Status</label>\r
\r
                <select class="form-control" name="productname-field" id="productname-field" formControlName="status" [ngClass]="{ 'is-invalid': submitted && form['status'].errors }">\r
                  <option value="Chargeback">Chargeback</option>\r
                  <option value="Paid" selected>Paid</option>\r
                  <option value="Refund">Refund</option>\r
                </select>\r
                @if(submitted && form['status'].errors){\r
                <div class="invalid-feedback" align="left">\r
                  @if(form['status'].errors['required']){\r
                  <div>Please select a payment status.</div>}\r
                </div>}\r
              </div>\r
            </div>\r
            <div class="col-lg-6">\r
              <div class="mb-3">\r
                <label for="paymethod-input" class="form-label">Payment Method</label>\r
                <select class="form-control" name="payment-method" id="paymethod-input" formControlName="payment" [ngClass]="{ 'is-invalid': submitted && form['payment'].errors }">\r
                  <option value="Mastercard">Mastercard</option>\r
                  <option value="Visa">Visa</option>\r
                  <option value="Paypal">Paypal</option>\r
                  <option value="COD">COD</option>\r
                </select>\r
                @if(submitted && form['payment'].errors){\r
                <div class="invalid-feedback" align="left">\r
                  @if(form['payment'].errors['required']){\r
                  <div>Please select a payment method.</div>\r
                  }\r
                </div>}\r
              </div>\r
            </div>\r
            <div class="col-lg-12">\r
              <div class="text-end">\r
                <button type="button" class="btn btn-outline-secondary me-1" (click)="showModal.hide()">Cancel</button>\r
                <button type="submit" id="addNewOrder-btn" class="btn btn-success">Create</button>\r
              </div>\r
            </div>\r
          </div>\r
        </form>\r
      </div>\r
      <!-- end modal body -->\r
    </div>\r
  </div>\r
</div>\r
<!--End Modal -->\r
\r
<!-- Modal -->\r
<div bsModal #removeItemModal="bs-modal" class="modal fade" id="removeItemModal" tabindex="-1" aria-hidden="true">\r
  <div class="modal-dialog modal-dialog-centered modal-md">\r
    <div class="modal-content">\r
      <div class="modal-body px-4 py-5 text-center">\r
        <button type="button" class="btn-close position-absolute end-0 top-0 m-3" (click)="removeItemModal.hide()"></button>\r
        <div class="avatar-sm mb-4 mx-auto">\r
          <div class="avatar-title bg-primary text-primary bg-opacity-10 font-size-20 rounded-3">\r
            <i class="mdi mdi-trash-can-outline"></i>\r
          </div>\r
        </div>\r
        <p class="text-muted font-size-16 mb-4">Are you Sure You want to Remove this Order ?</p>\r
\r
        <div class="hstack gap-2 justify-content-center mb-0">\r
          <button type="button" class="btn btn-danger" id="remove-item" (click)="deleteOrder()">Remove Now</button>\r
          <button type="button" class="btn btn-secondary" id="close-removeOrderModal" (click)="removeItemModal.hide()">Close</button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
<!-- end removeItemModal -->` }]
  }], () => [{ type: BsModalService }, { type: UntypedFormBuilder }, { type: DatePipe }, { type: Store }], { showModal: [{
    type: ViewChild,
    args: ["showModal", { static: false }]
  }], removeItemModal: [{
    type: ViewChild,
    args: ["removeItemModal", { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrdersComponent, { className: "OrdersComponent", filePath: "src/app/pages/ecommerce/orders/orders.component.ts", lineNumber: 25 });
})();

// src/app/pages/ecommerce/ecommerce-routing.module.ts
var routes = [
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "product-detail/:id",
    component: ProductdetailComponent
  },
  {
    path: "shops",
    component: ShopsComponent
  },
  {
    path: "checkout",
    component: CheckoutComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "add-product",
    component: AddproductComponent
  },
  {
    path: "customers",
    component: CustomersComponent
  },
  {
    path: "orders",
    component: OrdersComponent
  }
];
var EcommerceRoutingModule = class _EcommerceRoutingModule {
  static {
    this.\u0275fac = function EcommerceRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EcommerceRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EcommerceRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EcommerceRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/pages/ecommerce/ecommerce.module.ts
var DEFAULT_DROPZONE_CONFIG = {
  // Change this to your upload POST address:
  url: "https://httpbin.org/post",
  maxFilesize: 50,
  acceptedFiles: "image/*"
};
var EcommerceModule = class _EcommerceModule {
  static {
    this.\u0275fac = function EcommerceModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EcommerceModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EcommerceModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
      DatePipe,
      {
        provide: DROPZONE_CONFIG,
        useValue: DEFAULT_DROPZONE_CONFIG
      }
    ], imports: [
      CommonModule,
      EcommerceRoutingModule,
      TabsModule.forRoot(),
      ModalModule.forRoot(),
      FormsModule,
      BsDropdownModule.forRoot(),
      ReactiveFormsModule,
      NgxSliderModule,
      NgSelectModule,
      PaginationModule.forRoot(),
      BsDatepickerModule.forRoot(),
      DropzoneModule,
      SlickCarouselModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EcommerceModule, [{
    type: NgModule,
    args: [{
      declarations: [ProductsComponent, ProductdetailComponent, ShopsComponent, CheckoutComponent, CartComponent, AddproductComponent, CustomersComponent, OrdersComponent],
      imports: [
        CommonModule,
        EcommerceRoutingModule,
        TabsModule.forRoot(),
        ModalModule.forRoot(),
        FormsModule,
        BsDropdownModule.forRoot(),
        ReactiveFormsModule,
        NgxSliderModule,
        NgSelectModule,
        PaginationModule.forRoot(),
        BsDatepickerModule.forRoot(),
        DropzoneModule,
        PagetitleComponent,
        SlickCarouselModule
      ],
      providers: [
        DatePipe,
        {
          provide: DROPZONE_CONFIG,
          useValue: DEFAULT_DROPZONE_CONFIG
        }
      ]
    }]
  }], null, null);
})();

export {
  EcommerceModule
};
//# sourceMappingURL=chunk-XUEP7BWI.js.map
