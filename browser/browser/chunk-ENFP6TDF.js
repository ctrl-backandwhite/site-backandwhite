import {
  fetchInvoiceListData
} from "./chunk-IFLVDP3C.js";
import {
  TooltipDirective,
  TooltipModule
} from "./chunk-D7IPSTS4.js";
import {
  PagetitleComponent
} from "./chunk-WW5M2ABB.js";
import {
  Store,
  createFeatureSelector,
  createSelector
} from "./chunk-S2XUSEFK.js";
import {
  CommonModule,
  Component,
  NgModule,
  RouterLink,
  RouterModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-BM6E27KQ.js";

// src/app/store/Invoices/invoice-selector.ts
var selectDataState = createFeatureSelector("InvoiceList");
var selectData = createSelector(selectDataState, (state) => state.InvoiceData);
var selectDataLoading = createSelector(selectDataState, (state) => state.loading);
var selectDataError = createSelector(selectDataState, (state) => state.error);

// src/app/pages/invoices/list/list.component.ts
function ListComponent_For_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 12);
  }
  if (rf & 2) {
    const list_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", \u0275\u0275interpolate(list_r1.image), \u0275\u0275sanitizeUrl);
  }
}
function ListComponent_For_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const list_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", list_r1.name.charAt(0), " ");
  }
}
function ListComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 8)(2, "div", 9)(3, "div", 2)(4, "div", 10)(5, "div", 11);
    \u0275\u0275conditionalCreate(6, ListComponent_For_4_Conditional_6_Template, 1, 2, "img", 12)(7, ListComponent_For_4_Conditional_7_Template, 3, 1, "div", 13);
    \u0275\u0275elementStart(8, "h5", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 15);
    \u0275\u0275text(11, "@Back & White");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 16)(13, "div")(14, "a", 17);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "h5", 18);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ul", 19)(19, "li", 20)(20, "h5", 21);
    \u0275\u0275element(21, "i", 22);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "li", 23)(24, "h5", 24);
    \u0275\u0275element(25, "i", 25);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    const list_r1 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275conditional(list_r1.image ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(list_r1.name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Invoice ", list_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(list_r1.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", list_r1.amount, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", list_r1.date);
  }
}
var ListComponent = class _ListComponent {
  constructor(store) {
    this.store = store;
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Invoices" }, { label: "Invoice List", active: true }];
    this.store.dispatch(fetchInvoiceListData());
    this.store.select(selectData).subscribe((data) => {
      this.invoicelists = data;
    });
  }
  static {
    this.\u0275fac = function ListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListComponent, selectors: [["app-list"]], standalone: false, decls: 11, vars: 1, consts: [[1, "container-fluid"], ["title", "Invoice List", 3, "breadcrumbItems"], [1, "row"], [1, "col-xl-4", "col-sm-6"], [1, "col-12"], [1, "text-center", "my-3"], ["href", "javascript:void(0);", 1, "text-success"], [1, "bx", "bx-loader", "bx-spin", "font-size-18", "align-middle", "me-1"], [1, "card"], [1, "card-body"], [1, "col-lg-4"], [1, "text-lg-center"], ["alt", "img", 1, "avatar-sm", "me-3", "mx-lg-auto", "mb-3", "mt-1", "float-start", "float-lg-none", "rounded-circle", 3, "src"], [1, "avatar-sm", "me-3", "mx-lg-auto", "mb-3", "mt-1", "float-start", "float-lg-none"], [1, "mb-1", "font-size-15", "text-truncate"], ["href", "javascript: void(0);", 1, "text-muted"], [1, "col-lg-8"], ["routerLink", "/invoices/detail", 1, "d-block", "text-primary", "text-decoration-underline", "mb-2"], [1, "text-truncate", "mb-4", "mb-lg-5"], [1, "list-inline", "mb-0"], [1, "list-inline-item", "me-3"], ["placement", "top", "tooltip", "Amount", 1, "font-size-14"], [1, "bx", "bx-money", "me-1", "text-muted"], [1, "list-inline-item"], ["placement", "top", "tooltip", "Due Date", 1, "font-size-14"], [1, "bx", "bx-calendar", "me-1", "text-muted"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"]], template: function ListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275repeaterCreate(3, ListComponent_For_4_Template, 27, 6, "div", 3, \u0275\u0275repeaterTrackByIndex);
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
        \u0275\u0275repeater(ctx.invoicelists);
      }
    }, dependencies: [RouterLink, TooltipDirective, PagetitleComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListComponent, [{
    type: Component,
    args: [{ selector: "app-list", standalone: false, template: '<div class="container-fluid">\r\n\r\n  <!-- start page title -->\r\n  <app-page-title title="Invoice List" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r\n  <!-- end page title -->\r\n\r\n  <div class="row">\r\n    @for(list of invoicelists;track $index){\r\n    <div class="col-xl-4 col-sm-6">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <div class="row">\r\n            <div class="col-lg-4">\r\n              <div class="text-lg-center">\r\n                @if(list.image){\r\n                <img src="{{list.image}}"\r\n                  class="avatar-sm me-3 mx-lg-auto mb-3 mt-1 float-start float-lg-none rounded-circle" alt="img">\r\n                }@else{\r\n                <div class="avatar-sm me-3 mx-lg-auto mb-3 mt-1 float-start float-lg-none">\r\n                  <span class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-16">\r\n                    {{ list.name.charAt(0)}}\r\n                  </span>\r\n                </div>}\r\n\r\n                <h5 class="mb-1 font-size-15 text-truncate">{{ list.name }}</h5>\r\n                <a href="javascript: void(0);" class="text-muted">&#64;Back & White</a>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="col-lg-8">\r\n              <div>\r\n                <a routerLink="/invoices/detail" class="d-block text-primary text-decoration-underline mb-2">Invoice {{\r\n                  list.id }}</a>\r\n                <h5 class="text-truncate mb-4 mb-lg-5">{{ list.title }}</h5>\r\n                <ul class="list-inline mb-0">\r\n                  <li class="list-inline-item me-3">\r\n                    <h5 class="font-size-14" placement="top" tooltip="Amount">\r\n                      <i class="bx bx-money me-1 text-muted"></i>{{list.amount}}\r\n                    </h5>\r\n                  </li>\r\n                  <li class="list-inline-item">\r\n                    <h5 class="font-size-14" placement="top" tooltip="Due Date"><i\r\n                        class="bx bx-calendar me-1 text-muted"></i> {{list.date}}</h5>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>}\r\n  </div>\r\n  <!-- end row -->\r\n\r\n  <div class="row">\r\n    <div class="col-12">\r\n      <div class="text-center my-3">\r\n        <a href="javascript:void(0);" class="text-success"><i\r\n            class="bx bx-loader bx-spin font-size-18 align-middle me-1"></i> Load more </a>\r\n      </div>\r\n    </div> <!-- end col-->\r\n  </div>\r\n\r\n</div> <!-- container-fluid -->\r\n' }]
  }], () => [{ type: Store }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListComponent, { className: "ListComponent", filePath: "src/app/pages/invoices/list/list.component.ts", lineNumber: 17 });
})();

// src/app/pages/invoices/detail/detail.component.ts
var DetailComponent = class _DetailComponent {
  constructor() {
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Invoices" }, { label: "Detail", active: true }];
  }
  static {
    this.\u0275fac = function DetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetailComponent, selectors: [["app-detail"]], standalone: false, decls: 114, vars: 1, consts: [[1, "container-fluid"], ["title", "Detail", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "invoice-title"], [1, "float-end", "font-size-16"], [1, "auth-logo", "mb-4"], ["src", "assets/logo.png", "alt", "logo", "height", "20", 1, "auth-logo-dark"], ["src", "assets/images/logo-light.png", "alt", "logo", "height", "20", 1, "auth-logo-light"], [1, "col-6"], [1, "col-6", "text-sm-end"], [1, "col-6", "mt-3"], [1, "col-6", "mt-3", "text-sm-end"], [1, "py-2", "mt-3"], [1, "font-size-15", "fw-bold"], [1, "table-responsive"], [1, "table"], [2, "width", "70px"], [1, "text-end"], ["colspan", "2", 1, "text-end"], ["colspan", "2", 1, "border-0", "text-end"], [1, "border-0", "text-end"], [1, "m-0"], [1, "d-print-none"], [1, "float-end"], ["href", "javascript:window.print()", 1, "btn", "btn-success"], [1, "fa", "fa-print"], ["href", "javascript: void(0);", 1, "btn", "btn-primary", "w-md", "ms-1"]], template: function DetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h4", 7);
        \u0275\u0275text(8, "Order # 12345");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 8);
        \u0275\u0275element(10, "img", 9)(11, "img", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(12, "hr");
        \u0275\u0275elementStart(13, "div", 2)(14, "div", 11)(15, "address")(16, "strong");
        \u0275\u0275text(17, "Billed To:");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "br");
        \u0275\u0275text(19, " John Smith");
        \u0275\u0275element(20, "br");
        \u0275\u0275text(21, " 1234 Main");
        \u0275\u0275element(22, "br");
        \u0275\u0275text(23, " Apt. 4B");
        \u0275\u0275element(24, "br");
        \u0275\u0275text(25, " Springfield, ST 54321 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 12)(27, "address")(28, "strong");
        \u0275\u0275text(29, "Shipped To:");
        \u0275\u0275elementEnd();
        \u0275\u0275element(30, "br");
        \u0275\u0275text(31, " Kenny Rigdon");
        \u0275\u0275element(32, "br");
        \u0275\u0275text(33, " 1234 Main");
        \u0275\u0275element(34, "br");
        \u0275\u0275text(35, " Apt. 4B");
        \u0275\u0275element(36, "br");
        \u0275\u0275text(37, " Springfield, ST 54321 ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(38, "div", 2)(39, "div", 13)(40, "address")(41, "strong");
        \u0275\u0275text(42, "Payment Method:");
        \u0275\u0275elementEnd();
        \u0275\u0275element(43, "br");
        \u0275\u0275text(44, " Visa ending **** 4242");
        \u0275\u0275element(45, "br");
        \u0275\u0275text(46, " jsmith@email.com ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 14)(48, "address")(49, "strong");
        \u0275\u0275text(50, "Order Date:");
        \u0275\u0275elementEnd();
        \u0275\u0275element(51, "br");
        \u0275\u0275text(52, " October 16, 2019");
        \u0275\u0275element(53, "br")(54, "br");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "div", 15)(56, "h3", 16);
        \u0275\u0275text(57, "Order summary");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "div", 17)(59, "table", 18)(60, "thead")(61, "tr")(62, "th", 19);
        \u0275\u0275text(63, "No.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "th");
        \u0275\u0275text(65, "Item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "th", 20);
        \u0275\u0275text(67, "Price");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(68, "tbody")(69, "tr")(70, "td");
        \u0275\u0275text(71, "01");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "td");
        \u0275\u0275text(73, "Back & White - Admin Dashboard Template");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "td", 20);
        \u0275\u0275text(75, "$499.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(76, "tr")(77, "td");
        \u0275\u0275text(78, "02");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "td");
        \u0275\u0275text(80, "Skote - Landing Template");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "td", 20);
        \u0275\u0275text(82, "$399.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "tr")(84, "td");
        \u0275\u0275text(85, "03");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "td");
        \u0275\u0275text(87, "Veltrix - Admin Dashboard Template");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "td", 20);
        \u0275\u0275text(89, "$499.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(90, "tr")(91, "td", 21);
        \u0275\u0275text(92, "Sub Total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "td", 20);
        \u0275\u0275text(94, "$1397.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "tr")(96, "td", 22)(97, "strong");
        \u0275\u0275text(98, "Shipping");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(99, "td", 23);
        \u0275\u0275text(100, "$13.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(101, "tr")(102, "td", 22)(103, "strong");
        \u0275\u0275text(104, "Total");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(105, "td", 23)(106, "h4", 24);
        \u0275\u0275text(107, "$1410.00");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(108, "div", 25)(109, "div", 26)(110, "a", 27);
        \u0275\u0275element(111, "i", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "a", 29);
        \u0275\u0275text(113, "Send");
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
      }
    }, dependencies: [PagetitleComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetailComponent, [{
    type: Component,
    args: [{ selector: "app-detail", standalone: false, template: '<div class="container-fluid">\r\n\r\n  <!-- start page title -->\r\n\r\n  <app-page-title title="Detail" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r\n\r\n  <!-- end page title -->\r\n\r\n  <div class="row">\r\n    <div class="col-lg-12">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <div class="invoice-title">\r\n            <h4 class="float-end font-size-16">Order # 12345</h4>\r\n            <div class="auth-logo mb-4">\r\n              <img src="assets/logo.png" alt="logo" class="auth-logo-dark" height="20" />\r\n              <img src="assets/images/logo-light.png" alt="logo" class="auth-logo-light" height="20" />\r\n            </div>\r\n          </div>\r\n          <hr>\r\n          <div class="row">\r\n            <div class="col-6">\r\n              <address>\r\n                <strong>Billed To:</strong><br>\r\n                John Smith<br>\r\n                1234 Main<br>\r\n                Apt. 4B<br>\r\n                Springfield, ST 54321\r\n              </address>\r\n            </div>\r\n            <div class="col-6 text-sm-end">\r\n              <address>\r\n                <strong>Shipped To:</strong><br>\r\n                Kenny Rigdon<br>\r\n                1234 Main<br>\r\n                Apt. 4B<br>\r\n                Springfield, ST 54321\r\n              </address>\r\n            </div>\r\n          </div>\r\n          <div class="row">\r\n            <div class="col-6 mt-3">\r\n              <address>\r\n                <strong>Payment Method:</strong><br>\r\n                Visa ending **** 4242<br>\r\n                jsmith&#64;email.com\r\n              </address>\r\n            </div>\r\n            <div class="col-6 mt-3 text-sm-end">\r\n              <address>\r\n                <strong>Order Date:</strong><br>\r\n                October 16, 2019<br><br>\r\n              </address>\r\n            </div>\r\n          </div>\r\n          <div class="py-2 mt-3">\r\n            <h3 class="font-size-15 fw-bold">Order summary</h3>\r\n          </div>\r\n          <div class="table-responsive">\r\n            <table class="table">\r\n              <thead>\r\n                <tr>\r\n                  <th style="width: 70px;">No.</th>\r\n                  <th>Item</th>\r\n                  <th class="text-end">Price</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <td>01</td>\r\n                  <td>Back & White - Admin Dashboard Template</td>\r\n                  <td class="text-end">$499.00</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>02</td>\r\n                  <td>Skote - Landing Template</td>\r\n                  <td class="text-end">$399.00</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>03</td>\r\n                  <td>Veltrix - Admin Dashboard Template</td>\r\n                  <td class="text-end">$499.00</td>\r\n                </tr>\r\n                <tr>\r\n                  <td colspan="2" class="text-end">Sub Total</td>\r\n                  <td class="text-end">$1397.00</td>\r\n                </tr>\r\n                <tr>\r\n                  <td colspan="2" class="border-0 text-end">\r\n                    <strong>Shipping</strong>\r\n                  </td>\r\n                  <td class="border-0 text-end">$13.00</td>\r\n                </tr>\r\n                <tr>\r\n                  <td colspan="2" class="border-0 text-end">\r\n                    <strong>Total</strong>\r\n                  </td>\r\n                  <td class="border-0 text-end">\r\n                    <h4 class="m-0">$1410.00</h4>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <div class="d-print-none">\r\n            <div class="float-end">\r\n              <a href="javascript:window.print()" class="btn btn-success"><i class="fa fa-print"></i></a>\r\n              <a href="javascript: void(0);" class="btn btn-primary w-md ms-1">Send</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- end row -->\r\n\r\n</div> <!-- container-fluid -->\r\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetailComponent, { className: "DetailComponent", filePath: "src/app/pages/invoices/detail/detail.component.ts", lineNumber: 13 });
})();

// src/app/pages/invoices/invoices-routing.module.ts
var routes = [
  {
    path: "list",
    component: ListComponent
  },
  {
    path: "detail",
    component: DetailComponent
  }
];
var InvoicesRoutingModule = class _InvoicesRoutingModule {
  static {
    this.\u0275fac = function InvoicesRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InvoicesRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _InvoicesRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvoicesRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/pages/invoices/invoices.module.ts
var InvoicesModule = class _InvoicesModule {
  static {
    this.\u0275fac = function InvoicesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InvoicesModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _InvoicesModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      InvoicesRoutingModule,
      TooltipModule.forRoot()
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvoicesModule, [{
    type: NgModule,
    args: [{
      declarations: [ListComponent, DetailComponent],
      imports: [
        CommonModule,
        InvoicesRoutingModule,
        TooltipModule.forRoot(),
        PagetitleComponent
      ]
    }]
  }], null, null);
})();

export {
  InvoicesModule
};
//# sourceMappingURL=chunk-ENFP6TDF.js.map
