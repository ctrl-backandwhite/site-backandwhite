import {
  StatComponent
} from "./chunk-WLG6NHLS.js";
import {
  CarouselComponent,
  CarouselModule,
  SlideComponent
} from "./chunk-2FQF575I.js";
import {
  EventService,
  fetchchatdata
} from "./chunk-KG6DJZ67.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-5H32OP7N.js";
import {
  SimplebarAngularComponent,
  SimplebarAngularModule
} from "./chunk-OKDSBIXU.js";
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
  BsDropdownConfig,
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
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-ICQKGMTO.js";
import {
  BehaviorSubject,
  CUSTOM_ELEMENTS_SCHEMA,
  CommonModule,
  Component,
  HttpClient,
  Injectable,
  Input,
  NgClass,
  NgModule,
  RouterModule,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
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
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-BM6E27KQ.js";

// src/app/pages/dashboards/default/data.ts
var emailSentBarChart = {
  chart: {
    height: 340,
    type: "bar",
    stacked: true,
    toolbar: {
      show: false
    },
    zoom: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "15%",
      endingShape: "rounded"
    }
  },
  dataLabels: {
    enabled: false
  },
  series: [{
    name: "Series A",
    data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48]
  }, {
    name: "Series B",
    data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22]
  }, {
    name: "Series C",
    data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18]
  }],
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  },
  colors: ["#556ee6", "#f1b44c", "#34c38f"],
  legend: {
    position: "bottom"
  },
  fill: {
    opacity: 1
  }
};
var monthlyEarningChart = {
  chart: {
    height: 200,
    type: "radialBar",
    offsetY: -10,
    offsetX: 0
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: {
          fontSize: "13px",
          color: void 0,
          offsetY: 60
        },
        value: {
          offsetY: 22,
          fontSize: "16px",
          color: void 0,
          formatter: (val) => {
            return val + "%";
          }
        }
      }
    }
  },
  colors: ["#5169da"],
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      shadeIntensity: 0.15,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 65, 91]
    }
  },
  stroke: {
    dashArray: 4
  },
  series: [67],
  labels: ["Series A"]
};

// src/app/shared/widget/transaction/transaction.component.ts
var _c0 = (a0, a1) => ({ "badge-soft-danger": a0, "badge-soft-warning": a1 });
function TransactionComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 30);
    \u0275\u0275element(3, "input", 31)(4, "label", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "a", 33);
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
    \u0275\u0275elementStart(14, "td")(15, "span", 34);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275element(18, "i");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "button", 35);
    \u0275\u0275listener("click", function TransactionComponent_For_24_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r2);
      \u0275\u0275nextContext();
      const content_r3 = \u0275\u0275reference(26);
      return \u0275\u0275resetView(content_r3.show());
    });
    \u0275\u0275text(22, "View Details");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("id", \u0275\u0275interpolate1("transactionCheck", data_r4.index));
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
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(14, _c0, data_r4.status === "Chargeback", data_r4.status === "Refund"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r4.status);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("fab ", data_r4.payment[0], " me-1"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r4.payment[1], " ");
  }
}
var TransactionComponent = class _TransactionComponent {
  constructor(modalService) {
    this.modalService = modalService;
  }
  ngOnInit() {
  }
  /**
   * Open modal
   * @param content modal content
   */
  openModal(content) {
    this.modalRef = this.modalService.show(content);
  }
  static {
    this.\u0275fac = function TransactionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TransactionComponent)(\u0275\u0275directiveInject(BsModalService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransactionComponent, selectors: [["app-transaction"]], inputs: { transactions: "transactions" }, decls: 98, vars: 0, consts: [["content", "bs-modal"], [1, "table-responsive", "mb-0"], [1, "table", "table-centered", "table-nowrap"], [1, "table-light"], [2, "width", "20px"], [1, "form-check", "font-size-16", "align-middle"], ["type", "checkbox", "id", "transactionCheck01", 1, "form-check-input"], ["for", "transactionCheck01", 1, "form-check-label"], [1, "align-middle"], ["bsModal", "", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title", "mt-0"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "mb-2"], [1, "text-primary"], [1, "mb-4"], [1, "table-responsive"], ["scope", "col"], ["scope", "row"], ["src", "assets/images/product/img-7.png", "alt", "", 1, "avatar-sm"], [1, "text-truncate", "font-size-14"], [1, "text-muted", "mb-0"], ["src", "assets/images/product/img-4.png", "alt", "", 1, "avatar-sm"], ["colspan", "2"], [1, "m-0"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "form-check", "font-size-16"], ["type", "checkbox", 1, "form-check-input", 3, "id"], [1, "form-check-label", 3, "for"], ["href", "javascript: void(0);", 1, "text-body", "fw-bold"], [1, "badge", "badge-pill", "badge-soft-success", "font-size-11", 3, "ngClass"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "btn-rounded", 3, "click"]], template: function TransactionComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "table", 2)(2, "thead", 3)(3, "tr")(4, "th", 4)(5, "div", 5);
        \u0275\u0275element(6, "input", 6)(7, "label", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "th", 8);
        \u0275\u0275text(9, "Order ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "th", 8);
        \u0275\u0275text(11, "Billing Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "th", 8);
        \u0275\u0275text(13, "Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "th", 8);
        \u0275\u0275text(15, "Total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "th", 8);
        \u0275\u0275text(17, "Payment Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "th", 8);
        \u0275\u0275text(19, "Payment Method");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "th", 8);
        \u0275\u0275text(21, "View Details");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "tbody");
        \u0275\u0275repeaterCreate(23, TransactionComponent_For_24_Template, 23, 17, "tr", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 9, 0)(27, "div", 10)(28, "div", 11)(29, "div", 12)(30, "h5", 13);
        \u0275\u0275text(31, "Order Details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "button", 14);
        \u0275\u0275listener("click", function TransactionComponent_Template_button_click_32_listener() {
          \u0275\u0275restoreView(_r1);
          const content_r3 = \u0275\u0275reference(26);
          return \u0275\u0275resetView(content_r3 == null ? null : content_r3.hide());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 15)(34, "p", 16);
        \u0275\u0275text(35, " Product id: ");
        \u0275\u0275elementStart(36, "span", 17);
        \u0275\u0275text(37, "#SK2540");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "p", 18);
        \u0275\u0275text(39, " Billing Name: ");
        \u0275\u0275elementStart(40, "span", 17);
        \u0275\u0275text(41, "Neal Matthews");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 19)(43, "table", 2)(44, "thead")(45, "tr")(46, "th", 20);
        \u0275\u0275text(47, "Product");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "th", 20);
        \u0275\u0275text(49, "Product Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "th", 20);
        \u0275\u0275text(51, "Price");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(52, "tbody")(53, "tr")(54, "th", 21)(55, "div");
        \u0275\u0275element(56, "img", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "td")(58, "div")(59, "h5", 23);
        \u0275\u0275text(60, "Wireless Headphone (Black)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "p", 24);
        \u0275\u0275text(62, "$ 225 x 1");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(63, "td");
        \u0275\u0275text(64, "$ 255");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "tr")(66, "th", 21)(67, "div");
        \u0275\u0275element(68, "img", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "td")(70, "div")(71, "h5", 23);
        \u0275\u0275text(72, "Phone patterned cases");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "p", 24);
        \u0275\u0275text(74, "$ 145 x 1");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(75, "td");
        \u0275\u0275text(76, "$ 145");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "tr")(78, "td", 26)(79, "h6", 27);
        \u0275\u0275text(80, "Sub Total:");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "td");
        \u0275\u0275text(82, "$ 400");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "tr")(84, "td", 26)(85, "h6", 27);
        \u0275\u0275text(86, "Shipping:");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(87, "td");
        \u0275\u0275text(88, "Free");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "tr")(90, "td", 26)(91, "h6", 27);
        \u0275\u0275text(92, "Total:");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "td");
        \u0275\u0275text(94, "$ 400");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(95, "div", 28)(96, "button", 29);
        \u0275\u0275listener("click", function TransactionComponent_Template_button_click_96_listener() {
          \u0275\u0275restoreView(_r1);
          const content_r3 = \u0275\u0275reference(26);
          return \u0275\u0275resetView(content_r3.hide());
        });
        \u0275\u0275text(97, "Close");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(23);
        \u0275\u0275repeater(ctx.transactions);
      }
    }, dependencies: [CommonModule, NgClass, ModalModule, ModalDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransactionComponent, [{
    type: Component,
    args: [{ selector: "app-transaction", imports: [CommonModule, ModalModule], template: `<div class="table-responsive mb-0">\r
  <table class="table table-centered table-nowrap">\r
    <thead class="table-light">\r
      <tr>\r
        <th style="width: 20px;">\r
          <div class="form-check font-size-16 align-middle">\r
            <input class="form-check-input" type="checkbox" id="transactionCheck01">\r
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
      </tr>\r
    </thead>\r
    <tbody>\r
      @for(data of transactions;track $index){\r
      <tr>\r
        <td>\r
          <div class="form-check font-size-16">\r
            <input class="form-check-input" type="checkbox" id="transactionCheck{{data.index}}">\r
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
          <i class="fab {{data.payment[0]}} me-1"></i>\r
          {{data.payment[1]}}\r
        </td>\r
        <td>\r
          <!-- Button trigger modal -->\r
          <button type="button" class="btn btn-primary btn-sm btn-rounded" (click)="content.show()">View\r
            Details</button>\r
        </td>\r
      </tr>\r
      }\r
    </tbody>\r
  </table>\r
\r
  <div bsModal #content="bs-modal" class="modal fade" tabindex="-1">\r
    <div class="modal-dialog modal-dialog-centered">\r
      <div class="modal-content">\r
        <div class="modal-header">\r
          <h5 class="modal-title mt-0">Order Details</h5>\r
          <button type="button" class="btn-close" aria-hidden="true" (click)="content?.hide()"></button>\r
        </div>\r
        <div class="modal-body">\r
          <p class="mb-2">\r
            Product id:\r
            <span class="text-primary">#SK2540</span>\r
          </p>\r
          <p class="mb-4">\r
            Billing Name:\r
            <span class="text-primary">Neal Matthews</span>\r
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
          <button class="btn btn-secondary" (click)="content.hide()">Close</button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
<!-- end table -->` }]
  }], () => [{ type: BsModalService }], { transactions: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransactionComponent, { className: "TransactionComponent", filePath: "src/app/shared/widget/transaction/transaction.component.ts", lineNumber: 12 });
})();

// src/app/core/services/loader.service.ts
var LoaderService = class _LoaderService {
  constructor() {
    this.isLoading = new BehaviorSubject(false);
  }
  static {
    this.\u0275fac = function LoaderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoaderService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LoaderService, factory: _LoaderService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/shared/ui/loader/loader.component.ts
function LoaderComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275domElement(3, "div", 3)(4, "div", 3)(5, "div", 3)(6, "div", 3)(7, "div", 3)(8, "div", 3);
    \u0275\u0275domElementEnd()()();
  }
}
var LoaderComponent = class _LoaderComponent {
  constructor(loaderService) {
    this.loaderService = loaderService;
    this.loading = true;
    this.loaderService.isLoading.subscribe((v) => {
      setTimeout(() => {
        this.loading = v;
      }, 1500);
    });
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function LoaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoaderComponent)(\u0275\u0275directiveInject(LoaderService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoaderComponent, selectors: [["app-loader"]], decls: 1, vars: 1, consts: [["id", "preloader"], ["id", "status"], [1, "spinner-chase"], [1, "chase-dot"]], template: function LoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, LoaderComponent_Conditional_0_Template, 9, 0, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.loading ? 0 : -1);
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderComponent, [{
    type: Component,
    args: [{ selector: "app-loader", imports: [], template: '@if(loading){\r\n<div id="preloader">\r\n    <div id="status">\r\n        <div class="spinner-chase">\r\n            <div class="chase-dot"></div>\r\n            <div class="chase-dot"></div>\r\n            <div class="chase-dot"></div>\r\n            <div class="chase-dot"></div>\r\n            <div class="chase-dot"></div>\r\n            <div class="chase-dot"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n}' }]
  }], () => [{ type: LoaderService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoaderComponent, { className: "LoaderComponent", filePath: "src/app/shared/ui/loader/loader.component.ts", lineNumber: 11 });
})();

// src/app/core/services/config.service.ts
var ConfigService = class _ConfigService {
  constructor(http) {
    this.http = http;
    this.URL = "assets/dashboard.json";
  }
  getConfig() {
    return this.http.get(`${this.URL}`);
  }
  static {
    this.\u0275fac = function ConfigService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfigService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConfigService, factory: _ConfigService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/pages/dashboards/default/default.component.ts
var _c02 = (a0) => ({ "active": a0 });
function DefaultComponent_For_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "app-stat", 95);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("title", stat_r1.title)("value", stat_r1.value)("icon", stat_r1.icon);
  }
}
var DefaultComponent = class _DefaultComponent {
  constructor(configService, eventService) {
    this.configService = configService;
    this.eventService = eventService;
  }
  ngOnInit() {
    const attribute = document.body.getAttribute("data-layout");
    this.isVisible = attribute;
    const vertical = document.getElementById("layout-vertical");
    if (vertical != null) {
      vertical.setAttribute("checked", "true");
    }
    if (attribute == "horizontal") {
      const horizontal = document.getElementById("layout-horizontal");
      if (horizontal != null) {
        horizontal.setAttribute("checked", "true");
      }
    }
    this.fetchData();
  }
  /**
   * Fetches the data
   */
  fetchData() {
    this.emailSentBarChart = emailSentBarChart;
    this.monthlyEarningChart = monthlyEarningChart;
    const initialActive = "year";
    this.isActive = initialActive;
    this.configService.getConfig().subscribe((data) => {
      this.transactions = data.transactions;
      this.statData = data.statData;
    });
  }
  weeklyreport() {
    this.isActive = "week";
    this.emailSentBarChart.series = [{
      name: "Series A",
      data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48]
    }, {
      name: "Series B",
      data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18]
    }, {
      name: "Series C",
      data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22]
    }];
  }
  monthlyreport() {
    this.isActive = "month";
    this.emailSentBarChart.series = [{
      name: "Series A",
      data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48]
    }, {
      name: "Series B",
      data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22]
    }, {
      name: "Series C",
      data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18]
    }];
  }
  yearlyreport() {
    this.isActive = "year";
    this.emailSentBarChart.series = [{
      name: "Series A",
      data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22]
    }, {
      name: "Series B",
      data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18]
    }, {
      name: "Series C",
      data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48]
    }];
  }
  /**
   * Change the layout onclick
   * @param layout Change the layout
   */
  changeLayout(layout) {
    this.eventService.broadcast("changeLayout", layout);
  }
  static {
    this.\u0275fac = function DefaultComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DefaultComponent)(\u0275\u0275directiveInject(ConfigService), \u0275\u0275directiveInject(EventService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DefaultComponent, selectors: [["app-default"]], decls: 255, vars: 25, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "page-title-box", "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0", "font-size-18"], [1, "page-title-right"], [1, "breadcrumb", "m-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "col-xl-4"], [1, "card", "overflow-hidden"], [1, "bg-primary-subtle"], [1, "col-7"], [1, "text-primary", "p-3"], [1, "text-primary"], [1, "col-5", "align-self-end"], ["src", "assets/images/profile-img.png", "alt", "", 1, "img-fluid"], [1, "card-body", "pt-0"], [1, "col-sm-4"], [1, "avatar-md", "profile-user-wid", "mb-4"], ["src", "assets/images/users/avatar-1.jpg", "alt", "", 1, "img-thumbnail", "rounded-circle"], [1, "font-size-15", "text-truncate"], [1, "text-muted", "mb-0", "text-truncate"], [1, "col-sm-8"], [1, "pt-4"], [1, "col-6"], [1, "font-size-15"], [1, "text-muted", "mb-0"], [1, "mt-4"], ["href", "", 1, "btn", "btn-primary", "btn-sm"], [1, "mdi", "mdi-arrow-right", "ms-1"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [1, "col-sm-6"], [1, "text-muted"], [1, "text-success", "me-2"], [1, "mdi", "mdi-arrow-up"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "legend", "colors", "labels", "stroke", "plotOptions"], [1, "text-muted", "mb-0", "mt-1"], [1, "col-xl-8"], [1, "col-md-4"], [1, "d-sm-flex", "flex-wrap"], [1, "ms-auto"], [1, "nav", "nav-pills"], [1, "nav-item"], ["href", "javascript: void(0);", 1, "nav-link", 3, "click", "ngClass"], ["dir", "ltr", 1, "apex-charts", 3, "chart", "series", "legend", "colors", "fill", "dataLabels", "xaxis", "plotOptions"], [1, "text-center"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "font-size-24"], [1, "mdi", "mdi-facebook", "text-primary"], [1, "font-16", "text-muted", "mb-2"], ["href", "javascript: void(0);", 1, "text-dark"], [1, "text-muted", "font-16"], ["href", "javascript: void(0);", 1, "text-primary", "font-16"], [1, "mdi", "mdi-chevron-right"], [1, "row", "mt-4"], [1, "col-4"], [1, "social-source", "text-center", "mt-3"], [1, "avatar-xs", "mx-auto", "mb-3"], [1, "avatar-title", "rounded-circle", "bg-primary", "font-size-16"], [1, "mdi", "mdi-facebook", "text-white"], [1, "avatar-title", "rounded-circle", "bg-info", "font-size-16"], [1, "mdi", "mdi-twitter", "text-white"], [1, "avatar-title", "rounded-circle", "bg-pink", "font-size-16"], [1, "mdi", "mdi-instagram", "text-white"], [1, "card-title", "mb-5"], [1, "verti-timeline", "list-unstyled"], [1, "event-list"], [1, "event-timeline-dot"], [1, "bx", "bx-right-arrow-circle", "font-size-18"], [1, "d-flex"], [1, "flex-shrink-0", "me-3"], [1, "font-size-14"], [1, "bx", "bx-right-arrow-alt", "font-size-16", "text-primary", "align-middle", "ms-2"], [1, "flex-grow-1"], [1, "event-list", "active"], [1, "bx", "bxs-right-arrow-circle", "font-size-18", "bx-fade-right"], [1, "text-center", "mt-4"], ["href", "javascript: void(0);", 1, "btn", "btn-primary", "btn-sm"], [1, "mb-4"], [1, "bx", "bx-map-pin", "text-primary", "display-4"], [1, "table-responsive", "mt-4"], [1, "table", "table-centered", "align-middle", "table-nowrap"], [2, "width", "30%"], [1, "mb-0"], [2, "width", "25%"], [1, "progress", "bg-transparent", "progress-sm"], ["role", "progressbar", "aria-valuenow", "94", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", "rounded", 2, "width", "94%"], ["role", "progressbar", "aria-valuenow", "82", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", "rounded", 2, "width", "82%"], ["role", "progressbar", "aria-valuenow", "70", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", "rounded", 2, "width", "70%"], [1, "col-lg-12"], [3, "transactions"], [3, "title", "value", "icon"]], template: function DefaultComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-loader");
        \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h4", 4);
        \u0275\u0275text(6, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5)(8, "ol", 6);
        \u0275\u0275elementContainerStart(9);
        \u0275\u0275elementStart(10, "li", 7)(11, "a", 8);
        \u0275\u0275text(12, "Dashboards");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "li", 9);
        \u0275\u0275text(14, "Dashboard ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(15, "div", 1)(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "div", 1)(20, "div", 13)(21, "div", 14)(22, "h5", 15);
        \u0275\u0275text(23, "Welcome Back !");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "p");
        \u0275\u0275text(25, "Skote Dashboard");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "div", 16);
        \u0275\u0275element(27, "img", 17);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "div", 18)(29, "div", 1)(30, "div", 19)(31, "div", 20);
        \u0275\u0275element(32, "img", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "h5", 22);
        \u0275\u0275text(34, "Henry Price");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "p", 23);
        \u0275\u0275text(36, "UI/UX Designer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 24)(38, "div", 25)(39, "div", 1)(40, "div", 26)(41, "h5", 27);
        \u0275\u0275text(42, "125");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "p", 28);
        \u0275\u0275text(44, "Projects");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 26)(46, "h5", 27);
        \u0275\u0275text(47, "$1245");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "p", 28);
        \u0275\u0275text(49, "Revenue");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "div", 29)(51, "a", 30);
        \u0275\u0275text(52, "View Profile ");
        \u0275\u0275element(53, "i", 31);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(54, "div", 32)(55, "div", 33)(56, "h4", 34);
        \u0275\u0275text(57, "Monthly Earning");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 1)(59, "div", 35)(60, "p", 36);
        \u0275\u0275text(61, "This month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "h3");
        \u0275\u0275text(63, "$34,252");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "p", 36)(65, "span", 37);
        \u0275\u0275text(66, " 12% ");
        \u0275\u0275element(67, "i", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275text(68, " From previous period");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "div", 29)(70, "a", 30);
        \u0275\u0275text(71, "View More ");
        \u0275\u0275element(72, "i", 31);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(73, "div", 35);
        \u0275\u0275element(74, "apx-chart", 39);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(75, "p", 40);
        \u0275\u0275text(76, "We craft digital, graphic and dimensional thinking.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(77, "div", 41)(78, "div", 1);
        \u0275\u0275repeaterCreate(79, DefaultComponent_For_80_Template, 2, 3, "div", 42, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "div", 32)(82, "div", 33)(83, "div", 43)(84, "h4", 34);
        \u0275\u0275text(85, "Email Sent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "div", 44)(87, "ul", 45)(88, "li", 46)(89, "a", 47);
        \u0275\u0275listener("click", function DefaultComponent_Template_a_click_89_listener() {
          return ctx.weeklyreport();
        });
        \u0275\u0275text(90, "Week");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(91, "li", 46)(92, "a", 47);
        \u0275\u0275listener("click", function DefaultComponent_Template_a_click_92_listener() {
          return ctx.monthlyreport();
        });
        \u0275\u0275text(93, "Month");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(94, "li", 46)(95, "a", 47);
        \u0275\u0275listener("click", function DefaultComponent_Template_a_click_95_listener() {
          return ctx.yearlyreport();
        });
        \u0275\u0275text(96, "Year");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275element(97, "apx-chart", 48);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(98, "div", 1)(99, "div", 10)(100, "div", 32)(101, "div", 33)(102, "h4", 34);
        \u0275\u0275text(103, "Social Source");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "div", 49)(105, "div", 50)(106, "span", 51);
        \u0275\u0275element(107, "i", 52);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(108, "p", 53);
        \u0275\u0275elementStart(109, "h5")(110, "a", 54);
        \u0275\u0275text(111, "Facebook - ");
        \u0275\u0275elementStart(112, "span", 55);
        \u0275\u0275text(113, "125 sales");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(114, "p", 36);
        \u0275\u0275text(115, "Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "a", 56);
        \u0275\u0275text(117, "Learn more ");
        \u0275\u0275element(118, "i", 57);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(119, "div", 58)(120, "div", 59)(121, "div", 60)(122, "div", 61)(123, "span", 62);
        \u0275\u0275element(124, "i", 63);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(125, "h5", 27);
        \u0275\u0275text(126, "Facebook");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "p", 28);
        \u0275\u0275text(128, "125 sales");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(129, "div", 59)(130, "div", 60)(131, "div", 61)(132, "span", 64);
        \u0275\u0275element(133, "i", 65);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(134, "h5", 27);
        \u0275\u0275text(135, "Twitter");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "p", 28);
        \u0275\u0275text(137, "112 sales");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(138, "div", 59)(139, "div", 60)(140, "div", 61)(141, "span", 66);
        \u0275\u0275element(142, "i", 67);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(143, "h5", 27);
        \u0275\u0275text(144, "Instagram");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "p", 28);
        \u0275\u0275text(146, "104 sales");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(147, "div", 10)(148, "div", 32)(149, "div", 33)(150, "h4", 68);
        \u0275\u0275text(151, "Activity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(152, "ul", 69)(153, "li", 70)(154, "div", 71);
        \u0275\u0275element(155, "i", 72);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "div", 73)(157, "div", 74)(158, "h5", 75);
        \u0275\u0275text(159, "22 Nov ");
        \u0275\u0275element(160, "i", 76);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(161, "div", 77)(162, "div");
        \u0275\u0275text(163, " Responded to need \u201CVolunteer Activities ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(164, "li", 70)(165, "div", 71);
        \u0275\u0275element(166, "i", 72);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "div", 73)(168, "div", 74)(169, "h5", 75);
        \u0275\u0275text(170, "17 Nov ");
        \u0275\u0275element(171, "i", 76);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(172, "div", 77)(173, "div");
        \u0275\u0275text(174, " Everyone realizes why a new common language would be desirable... ");
        \u0275\u0275elementStart(175, "a", 8);
        \u0275\u0275text(176, "Read more");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(177, "li", 78)(178, "div", 71);
        \u0275\u0275element(179, "i", 79);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(180, "div", 73)(181, "div", 74)(182, "h5", 75);
        \u0275\u0275text(183, "15 Nov ");
        \u0275\u0275element(184, "i", 76);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(185, "div", 77)(186, "div");
        \u0275\u0275text(187, " Joined the group \u201CBoardsmanship Forum\u201D ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(188, "li", 70)(189, "div", 71);
        \u0275\u0275element(190, "i", 72);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(191, "div", 73)(192, "div", 74)(193, "h5", 75);
        \u0275\u0275text(194, "12 Nov ");
        \u0275\u0275element(195, "i", 76);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(196, "div", 77)(197, "div");
        \u0275\u0275text(198, " Responded to need \u201CIn-Kind Opportunity\u201D ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(199, "div", 80)(200, "a", 81);
        \u0275\u0275text(201, "View More ");
        \u0275\u0275element(202, "i", 31);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(203, "div", 10)(204, "div", 32)(205, "div", 33)(206, "h4", 34);
        \u0275\u0275text(207, "Top Cities Selling Product");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(208, "div", 49)(209, "div", 82);
        \u0275\u0275element(210, "i", 83);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(211, "h3");
        \u0275\u0275text(212, "1,456");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(213, "p");
        \u0275\u0275text(214, "San Francisco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(215, "div", 84)(216, "table", 85)(217, "tbody")(218, "tr")(219, "td", 86)(220, "p", 87);
        \u0275\u0275text(221, "San Francisco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(222, "td", 88)(223, "h5", 87);
        \u0275\u0275text(224, "1,456");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(225, "td")(226, "div", 89);
        \u0275\u0275element(227, "div", 90);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(228, "tr")(229, "td")(230, "p", 87);
        \u0275\u0275text(231, "Los Angeles");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(232, "td")(233, "h5", 87);
        \u0275\u0275text(234, "1,123");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(235, "td")(236, "div", 89);
        \u0275\u0275element(237, "div", 91);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(238, "tr")(239, "td")(240, "p", 87);
        \u0275\u0275text(241, "San Diego");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(242, "td")(243, "h5", 87);
        \u0275\u0275text(244, "1,026");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(245, "td")(246, "div", 89);
        \u0275\u0275element(247, "div", 92);
        \u0275\u0275elementEnd()()()()()()()()()();
        \u0275\u0275elementStart(248, "div", 1)(249, "div", 93)(250, "div", 32)(251, "div", 33)(252, "h4", 34);
        \u0275\u0275text(253, "Latest Transaction");
        \u0275\u0275elementEnd();
        \u0275\u0275element(254, "app-transaction", 94);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(74);
        \u0275\u0275property("series", ctx.monthlyEarningChart.series)("chart", ctx.monthlyEarningChart.chart)("legend", ctx.monthlyEarningChart.legend)("colors", ctx.monthlyEarningChart.colors)("labels", ctx.monthlyEarningChart.labels)("stroke", ctx.monthlyEarningChart.stroke)("plotOptions", ctx.monthlyEarningChart.plotOptions);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.statData);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(19, _c02, ctx.isActive === "week"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(21, _c02, ctx.isActive === "month"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(23, _c02, ctx.isActive === "year"));
        \u0275\u0275advance(2);
        \u0275\u0275property("chart", ctx.emailSentBarChart.chart)("series", ctx.emailSentBarChart.series)("legend", ctx.emailSentBarChart.legend)("colors", ctx.emailSentBarChart.colors)("fill", ctx.emailSentBarChart.fill)("dataLabels", ctx.emailSentBarChart.dataLabels)("xaxis", ctx.emailSentBarChart.xaxis)("plotOptions", ctx.emailSentBarChart.plotOptions);
        \u0275\u0275advance(157);
        \u0275\u0275property("transactions", ctx.transactions);
      }
    }, dependencies: [LoaderComponent, CommonModule, NgClass, NgApexchartsModule, ChartComponent, BsDropdownModule, TransactionComponent, StatComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultComponent, [{
    type: Component,
    args: [{ selector: "app-default", imports: [LoaderComponent, CommonModule, NgApexchartsModule, BsDropdownModule, TransactionComponent, StatComponent], template: `<app-loader></app-loader>\r
<div class="container-fluid">\r
    <!-- start page title -->\r
    <div class="row">\r
        <div class="col-12">\r
            <div class="page-title-box d-flex align-items-center justify-content-between">\r
                <h4 class="mb-0 font-size-18">Dashboard</h4>\r
                <div class="page-title-right">\r
                    <ol class="breadcrumb m-0">\r
                        <ng-container>\r
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Dashboards</a>\r
                            </li>\r
                            <li class="breadcrumb-item active">Dashboard\r
                            </li>\r
                        </ng-container>\r
                    </ol>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
    <!-- end page title -->\r
\r
    <div class="row">\r
        <div class="col-xl-4">\r
            <div class="card overflow-hidden">\r
                <div class="bg-primary-subtle">\r
                    <div class="row">\r
                        <div class="col-7">\r
                            <div class="text-primary p-3">\r
                                <h5 class="text-primary">Welcome Back !</h5>\r
                                <p>Skote Dashboard</p>\r
                            </div>\r
                        </div>\r
                        <div class="col-5 align-self-end">\r
                            <img src="assets/images/profile-img.png" alt="" class="img-fluid">\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="card-body pt-0">\r
                    <div class="row">\r
                        <div class="col-sm-4">\r
                            <div class="avatar-md profile-user-wid mb-4">\r
                                <img src="assets/images/users/avatar-1.jpg" alt="" class="img-thumbnail rounded-circle">\r
                            </div>\r
                            <h5 class="font-size-15 text-truncate">Henry Price</h5>\r
                            <p class="text-muted mb-0 text-truncate">UI/UX Designer</p>\r
                        </div>\r
\r
                        <div class="col-sm-8">\r
                            <div class="pt-4">\r
                                <div class="row">\r
                                    <div class="col-6">\r
                                        <h5 class="font-size-15">125</h5>\r
                                        <p class="text-muted mb-0">Projects</p>\r
                                    </div>\r
                                    <div class="col-6">\r
                                        <h5 class="font-size-15">$1245</h5>\r
                                        <p class="text-muted mb-0">Revenue</p>\r
                                    </div>\r
                                </div>\r
                                <div class="mt-4">\r
                                    <a href="" class="btn btn-primary btn-sm">View Profile <i\r
                                            class="mdi mdi-arrow-right ms-1"></i></a>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
            <div class="card">\r
                <div class="card-body">\r
                    <h4 class="card-title mb-4">Monthly Earning</h4>\r
                    <div class="row">\r
                        <div class="col-sm-6">\r
                            <p class="text-muted">This month</p>\r
                            <h3>$34,252</h3>\r
                            <p class="text-muted"><span class="text-success me-2"> 12% <i class="mdi mdi-arrow-up"></i>\r
                                </span> From\r
                                previous period</p>\r
\r
                            <div class="mt-4">\r
                                <a href="" class="btn btn-primary btn-sm">View More <i\r
                                        class="mdi mdi-arrow-right ms-1"></i></a>\r
                            </div>\r
                        </div>\r
                        <div class="col-sm-6">\r
                            <apx-chart dir="ltr" class="apex-charts" [series]="monthlyEarningChart.series"\r
                                [chart]="monthlyEarningChart.chart" [legend]="monthlyEarningChart.legend"\r
                                [colors]="monthlyEarningChart.colors" [labels]="monthlyEarningChart.labels"\r
                                [stroke]="monthlyEarningChart.stroke" [plotOptions]="monthlyEarningChart.plotOptions">\r
                            </apx-chart>\r
                        </div>\r
                    </div>\r
                    <p class="text-muted mb-0 mt-1">We craft digital, graphic and dimensional thinking.</p>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="col-xl-8">\r
            <div class="row">\r
                @for (stat of statData; track $index) {\r
                <div class="col-md-4">\r
                    <app-stat [title]="stat.title" [value]="stat.value" [icon]="stat.icon"></app-stat>\r
                </div>}\r
            </div>\r
            <!-- end row -->\r
\r
            <div class="card">\r
                <div class="card-body">\r
                    <div class="d-sm-flex flex-wrap">\r
                        <h4 class="card-title mb-4">Email Sent</h4>\r
                        <div class="ms-auto">\r
                            <ul class="nav nav-pills">\r
                                <li class="nav-item">\r
                                    <a class="nav-link" href="javascript: void(0);"\r
                                        [ngClass]="{'active': isActive === 'week'}" (click)="weeklyreport()">Week</a>\r
                                </li>\r
                                <li class="nav-item">\r
                                    <a class="nav-link" href="javascript: void(0);" (click)="monthlyreport()"\r
                                        [ngClass]="{'active': isActive === 'month'}">Month</a>\r
                                </li>\r
                                <li class="nav-item">\r
                                    <a class="nav-link" href="javascript: void(0);" (click)="yearlyreport()"\r
                                        [ngClass]="{'active': isActive === 'year'}">Year</a>\r
                                </li>\r
                            </ul>\r
                        </div>\r
                    </div>\r
                    <apx-chart dir="ltr" class="apex-charts" [chart]="emailSentBarChart.chart"\r
                        [series]="emailSentBarChart.series" [legend]="emailSentBarChart.legend"\r
                        [colors]="emailSentBarChart.colors" [fill]="emailSentBarChart.fill"\r
                        [dataLabels]="emailSentBarChart.dataLabels" [xaxis]="emailSentBarChart.xaxis"\r
                        [plotOptions]="emailSentBarChart.plotOptions">\r
                    </apx-chart>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
    <!-- end row -->\r
\r
    <div class="row">\r
        <div class="col-xl-4">\r
            <div class="card">\r
                <div class="card-body">\r
                    <h4 class="card-title mb-4">Social Source</h4>\r
                    <div class="text-center">\r
                        <div class="avatar-sm mx-auto mb-4">\r
                            <span class="avatar-title rounded-circle bg-primary-subtle font-size-24">\r
                                <i class="mdi mdi-facebook text-primary"></i>\r
                            </span>\r
                        </div>\r
                        <p class="font-16 text-muted mb-2"></p>\r
                        <h5><a href="javascript: void(0);" class="text-dark">Facebook - <span\r
                                    class="text-muted font-16">125\r
                                    sales</span> </a></h5>\r
                        <p class="text-muted">Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero\r
                            venenatis\r
                            faucibus tincidunt.</p>\r
                        <a href="javascript: void(0);" class="text-primary font-16">Learn more <i\r
                                class="mdi mdi-chevron-right"></i></a>\r
                    </div>\r
                    <div class="row mt-4">\r
                        <div class="col-4">\r
                            <div class="social-source text-center mt-3">\r
                                <div class="avatar-xs mx-auto mb-3">\r
                                    <span class="avatar-title rounded-circle bg-primary font-size-16">\r
                                        <i class="mdi mdi-facebook text-white"></i>\r
                                    </span>\r
                                </div>\r
                                <h5 class="font-size-15">Facebook</h5>\r
                                <p class="text-muted mb-0">125 sales</p>\r
                            </div>\r
                        </div>\r
                        <div class="col-4">\r
                            <div class="social-source text-center mt-3">\r
                                <div class="avatar-xs mx-auto mb-3">\r
                                    <span class="avatar-title rounded-circle bg-info font-size-16">\r
                                        <i class="mdi mdi-twitter text-white"></i>\r
                                    </span>\r
                                </div>\r
                                <h5 class="font-size-15">Twitter</h5>\r
                                <p class="text-muted mb-0">112 sales</p>\r
                            </div>\r
                        </div>\r
                        <div class="col-4">\r
                            <div class="social-source text-center mt-3">\r
                                <div class="avatar-xs mx-auto mb-3">\r
                                    <span class="avatar-title rounded-circle bg-pink font-size-16">\r
                                        <i class="mdi mdi-instagram text-white"></i>\r
                                    </span>\r
                                </div>\r
                                <h5 class="font-size-15">Instagram</h5>\r
                                <p class="text-muted mb-0">104 sales</p>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </div>\r
        <div class="col-xl-4">\r
            <div class="card">\r
                <div class="card-body">\r
                    <h4 class="card-title mb-5">Activity</h4>\r
                    <ul class="verti-timeline list-unstyled">\r
                        <li class="event-list">\r
                            <div class="event-timeline-dot">\r
                                <i class="bx bx-right-arrow-circle font-size-18"></i>\r
                            </div>\r
                            <div class="d-flex">\r
                                <div class="flex-shrink-0 me-3">\r
                                    <h5 class="font-size-14">22 Nov <i\r
                                            class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>\r
                                    </h5>\r
                                </div>\r
                                <div class="flex-grow-1">\r
                                    <div>\r
                                        Responded to need \u201CVolunteer Activities\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </li>\r
                        <li class="event-list">\r
                            <div class="event-timeline-dot">\r
                                <i class="bx bx-right-arrow-circle font-size-18"></i>\r
                            </div>\r
                            <div class="d-flex">\r
                                <div class="flex-shrink-0 me-3">\r
                                    <h5 class="font-size-14">17 Nov <i\r
                                            class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>\r
                                    </h5>\r
                                </div>\r
                                <div class="flex-grow-1">\r
                                    <div>\r
                                        Everyone realizes why a new common language would be desirable... <a\r
                                            href="javascript: void(0);">Read more</a>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </li>\r
                        <li class="event-list active">\r
                            <div class="event-timeline-dot">\r
                                <i class="bx bxs-right-arrow-circle font-size-18 bx-fade-right"></i>\r
                            </div>\r
                            <div class="d-flex">\r
                                <div class="flex-shrink-0 me-3">\r
                                    <h5 class="font-size-14">15 Nov <i\r
                                            class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>\r
                                    </h5>\r
                                </div>\r
                                <div class="flex-grow-1">\r
                                    <div>\r
                                        Joined the group \u201CBoardsmanship Forum\u201D\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </li>\r
                        <li class="event-list">\r
                            <div class="event-timeline-dot">\r
                                <i class="bx bx-right-arrow-circle font-size-18"></i>\r
                            </div>\r
                            <div class="d-flex">\r
                                <div class="flex-shrink-0 me-3">\r
                                    <h5 class="font-size-14">12 Nov <i\r
                                            class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>\r
                                    </h5>\r
                                </div>\r
                                <div class="flex-grow-1">\r
                                    <div>\r
                                        Responded to need \u201CIn-Kind Opportunity\u201D\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </li>\r
                    </ul>\r
                    <div class="text-center mt-4"><a href="javascript: void(0);" class="btn btn-primary btn-sm">View\r
                            More <i class="mdi mdi-arrow-right ms-1"></i></a></div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <div class="col-xl-4">\r
            <div class="card">\r
                <div class="card-body">\r
                    <h4 class="card-title mb-4">Top Cities Selling Product</h4>\r
\r
                    <div class="text-center">\r
                        <div class="mb-4">\r
                            <i class="bx bx-map-pin text-primary display-4"></i>\r
                        </div>\r
                        <h3>1,456</h3>\r
                        <p>San Francisco</p>\r
                    </div>\r
\r
                    <div class="table-responsive mt-4">\r
                        <table class="table table-centered align-middle table-nowrap">\r
                            <tbody>\r
                                <tr>\r
                                    <td style="width: 30%">\r
                                        <p class="mb-0">San Francisco</p>\r
                                    </td>\r
                                    <td style="width: 25%">\r
                                        <h5 class="mb-0">1,456</h5>\r
                                    </td>\r
                                    <td>\r
                                        <div class="progress bg-transparent progress-sm">\r
                                            <div class="progress-bar bg-primary rounded" role="progressbar"\r
                                                style="width: 94%" aria-valuenow="94" aria-valuemin="0"\r
                                                aria-valuemax="100"></div>\r
                                        </div>\r
                                    </td>\r
                                </tr>\r
                                <tr>\r
                                    <td>\r
                                        <p class="mb-0">Los Angeles</p>\r
                                    </td>\r
                                    <td>\r
                                        <h5 class="mb-0">1,123</h5>\r
                                    </td>\r
                                    <td>\r
                                        <div class="progress bg-transparent progress-sm">\r
                                            <div class="progress-bar bg-success rounded" role="progressbar"\r
                                                style="width: 82%" aria-valuenow="82" aria-valuemin="0"\r
                                                aria-valuemax="100"></div>\r
                                        </div>\r
                                    </td>\r
                                </tr>\r
                                <tr>\r
                                    <td>\r
                                        <p class="mb-0">San Diego</p>\r
                                    </td>\r
                                    <td>\r
                                        <h5 class="mb-0">1,026</h5>\r
                                    </td>\r
                                    <td>\r
                                        <div class="progress bg-transparent progress-sm">\r
                                            <div class="progress-bar bg-warning rounded" role="progressbar"\r
                                                style="width: 70%" aria-valuenow="70" aria-valuemin="0"\r
                                                aria-valuemax="100"></div>\r
                                        </div>\r
                                    </td>\r
                                </tr>\r
                            </tbody>\r
                        </table>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <div class="row">\r
        <div class="col-lg-12">\r
            <div class="card">\r
                <div class="card-body">\r
                    <h4 class="card-title mb-4">Latest Transaction</h4>\r
                    <app-transaction [transactions]="transactions"></app-transaction>\r
                    <!-- end table -->\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
` }]
  }], () => [{ type: ConfigService }, { type: EventService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DefaultComponent, { className: "DefaultComponent", filePath: "src/app/pages/dashboards/default/default.component.ts", lineNumber: 19 });
})();

// src/app/pages/dashboards/saas/data.ts
var earningLineChart = {
  series: [{
    name: "series1",
    data: [31, 40, 36, 51, 49, 72, 69, 56, 68, 82, 68, 76]
  }],
  chart: {
    height: 288,
    type: "line",
    toolbar: "false",
    dropShadow: {
      enabled: true,
      color: "#000",
      top: 18,
      left: 7,
      blur: 8,
      opacity: 0.2
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: ["#556ee6"],
  stroke: {
    curve: "smooth",
    width: 3
  }
};
var salesAnalyticsDonutChart = {
  series: [56, 38, 26],
  chart: {
    type: "donut",
    height: 240
  },
  labels: ["Series A", "Series B", "Series C"],
  colors: ["#556ee6", "#34c38f", "#f46a6a"],
  legend: {
    show: false
  },
  plotOptions: {
    pie: {
      donut: {
        size: "70%"
      }
    }
  }
};

// src/app/store/Chat/chat-selector.ts
var selectDataState = createFeatureSelector("chatList");
var selectchatData = createSelector(selectDataState, (state) => state.chatMessage);
var selectData = createSelector(selectDataState, (state) => state.chat);
var selectDataLoading = createSelector(selectDataState, (state) => state.loading);
var selectDataError = createSelector(selectDataState, (state) => state.error);

// src/app/pages/dashboards/saas/shared/sellingchart/sellingchart.component.ts
var SellingchartComponent = class _SellingchartComponent {
  constructor() {
  }
  ngOnInit() {
    this.chartData = {
      series: [this.value],
      chart: {
        type: "radialBar",
        width: 60,
        height: 60,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: [this.Chartcolor],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "60%"
          },
          track: {
            margin: 0
          },
          dataLabels: {
            show: false
          }
        }
      }
    };
  }
  static {
    this.\u0275fac = function SellingchartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SellingchartComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SellingchartComponent, selectors: [["app-sellingchart"]], inputs: { Chartcolor: "Chartcolor", value: "value" }, decls: 1, vars: 5, consts: [["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "colors", "plotOptions", "dataLabels"]], template: function SellingchartComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElement(0, "apx-chart", 0);
      }
      if (rf & 2) {
        \u0275\u0275domProperty("series", ctx.chartData.series)("chart", ctx.chartData.chart)("colors", ctx.chartData.colors)("plotOptions", ctx.chartData.plotOptions)("dataLabels", ctx.chartData.dataLabels);
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SellingchartComponent, [{
    type: Component,
    args: [{ selector: "app-sellingchart", standalone: true, schemas: [CUSTOM_ELEMENTS_SCHEMA], template: '<apx-chart class="apex-charts" dir="ltr" [series]="chartData.series" [chart]="chartData.chart"\r\n    [colors]="chartData.colors" [plotOptions]="chartData.plotOptions" [dataLabels]="chartData.dataLabels">\r\n</apx-chart>' }]
  }], () => [], { Chartcolor: [{
    type: Input
  }], value: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SellingchartComponent, { className: "SellingchartComponent", filePath: "src/app/pages/dashboards/saas/shared/sellingchart/sellingchart.component.ts", lineNumber: 12 });
})();

// src/app/pages/dashboards/saas/saas.component.ts
var _c03 = ["scrollRef"];
var _c1 = (a0) => ({ "is-invalid": a0 });
var _c2 = (a0) => ({ "right": a0 });
function SaasComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138)(1, "a", 139);
    \u0275\u0275text(2, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 139);
    \u0275\u0275text(4, "Another action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 139);
    \u0275\u0275text(6, "Something else");
    \u0275\u0275elementEnd()();
  }
}
function SaasComponent_For_142_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 7)(2, "div", 12)(3, "div", 140)(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "span", 141);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "a", 142);
    \u0275\u0275text(14, "View Details ");
    \u0275\u0275element(15, "i", 143);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 61)(17, "p", 13);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "h5");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 144);
    \u0275\u0275element(22, "apx-chart", 145);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.amount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" + ", item_r2.revenue, "% ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.time);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(item_r2.month);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.previousamount);
    \u0275\u0275advance(2);
    \u0275\u0275property("series", item_r2.series)("chart", ctx_r2.earningLineChart.chart)("colors", ctx_r2.earningLineChart.colors)("stroke", ctx_r2.earningLineChart.stroke)("dataLabels", ctx_r2.earningLineChart.dataLabels);
  }
}
function SaasComponent_For_194_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "h5", 152);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 77);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275element(7, "app-sellingchart", 153);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "p", 154);
    \u0275\u0275text(10, "Sales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h5", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.text);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", \u0275\u0275interpolate(item_r4.sales))("Chartcolor", \u0275\u0275interpolate(item_r4.chartVariant));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", item_r4.sales, " %");
  }
}
function SaasComponent_For_194_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 146)(2, "p", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 147)(7, "span", 148);
    \u0275\u0275text(8);
    \u0275\u0275element(9, "i", 149);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " From previous period");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 150)(12, "table", 151)(13, "tbody");
    \u0275\u0275repeaterCreate(14, SaasComponent_For_194_For_15_Template, 13, 7, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r5.amount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", data_r5.revenue, "% ");
    \u0275\u0275advance(6);
    \u0275\u0275repeater(data_r5.list);
  }
}
function SaasComponent_ng_template_202_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 155);
    \u0275\u0275text(1, "In Process");
    \u0275\u0275elementEnd();
  }
}
function SaasComponent_ng_template_348_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 155);
    \u0275\u0275text(1, "Upcoming");
    \u0275\u0275elementEnd();
  }
}
function SaasComponent_div_513_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 156)(1, "form", 157)(2, "div", 158)(3, "div", 159);
    \u0275\u0275element(4, "input", 160);
    \u0275\u0275elementStart(5, "div", 161)(6, "button", 162);
    \u0275\u0275element(7, "i", 163);
    \u0275\u0275elementEnd()()()()()();
  }
}
function SaasComponent_div_518_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138)(1, "a", 139);
    \u0275\u0275text(2, "View Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 139);
    \u0275\u0275text(4, "Clear chat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 139);
    \u0275\u0275text(6, "Muted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 139);
    \u0275\u0275text(8, "Delete");
    \u0275\u0275elementEnd()();
  }
}
function SaasComponent_div_523_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138)(1, "a", 139);
    \u0275\u0275text(2, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 139);
    \u0275\u0275text(4, "Another action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 139);
    \u0275\u0275text(6, "Something else");
    \u0275\u0275elementEnd()();
  }
}
function SaasComponent_For_535_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 172)(1, "a", 139);
    \u0275\u0275text(2, "Copy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 139);
    \u0275\u0275text(4, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 139);
    \u0275\u0275text(6, "Forward");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 139);
    \u0275\u0275text(8, "Delete");
    \u0275\u0275elementEnd()();
  }
}
function SaasComponent_For_535_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 119)(1, "div", 164)(2, "div", 107)(3, "a", 165);
    \u0275\u0275element(4, "i", 166);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SaasComponent_For_535_div_5_Template, 9, 0, "div", 167);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 168)(7, "div", 169);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 170);
    \u0275\u0275element(12, "i", 171);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r6 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c2, data_r6.align === "right"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(data_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r6.message, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", data_r6.time);
  }
}
function SaasComponent_Conditional_541_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Message is required.");
    \u0275\u0275elementEnd();
  }
}
function SaasComponent_Conditional_541_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125);
    \u0275\u0275conditionalCreate(1, SaasComponent_Conditional_541_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.form.message.errors.required ? 1 : -1);
  }
}
var SaasComponent = class _SaasComponent {
  constructor(formBuilder, configService, store) {
    this.formBuilder = formBuilder;
    this.configService = configService;
    this.store = store;
  }
  /**
   * Returns form
   */
  get form() {
    return this.formData.controls;
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Dashboards" }, { label: "Saas", active: true }];
    this.store.dispatch(fetchchatdata());
    this.store.select(selectData).subscribe((data) => {
      this.ChatData = data;
    });
    this._fetchData();
    this.formData = this.formBuilder.group({
      message: ["", [Validators.required]]
    });
    this.configService.getConfig().subscribe((response) => {
      this.sassEarning = response.sassEarning;
      this.sassTopSelling = response.sassTopSelling;
    });
  }
  /**
   * Save the message in chat
   */
  messageSave() {
    const message = this.formData.get("message").value;
    const currentDate = /* @__PURE__ */ new Date();
    if (this.formData.valid && message) {
      this.ChatData.push({
        align: "right",
        name: "Henry Wells",
        message,
        time: currentDate.getHours() + ":" + currentDate.getMinutes()
      });
      this.onListScroll();
      this.formData = this.formBuilder.group({
        message: null
      });
    }
    this.chatSubmit = true;
  }
  _fetchData() {
    this.earningLineChart = earningLineChart;
    this.salesAnalyticsDonutChart = salesAnalyticsDonutChart;
  }
  ngAfterViewInit() {
    this.scrollRef.SimpleBar.getScrollElement().scrollTop = 500;
  }
  onListScroll() {
    if (this.scrollRef !== void 0) {
      setTimeout(() => {
        this.scrollRef.SimpleBar.getScrollElement().scrollTop = this.scrollRef.SimpleBar.getScrollElement().scrollHeight + 1500;
      }, 500);
    }
  }
  selectMonth(value) {
    let data = value.target.value;
    switch (data) {
      case "january":
        this.sassEarning = [
          {
            name: "This month",
            amount: "$2007.35",
            revenue: "0.2",
            time: "From previous period",
            month: "Last month",
            previousamount: "$784.04",
            series: [
              {
                name: "series1",
                data: [22, 35, 20, 41, 51, 42, 49, 45, 58, 42, 75, 48]
              }
            ]
          }
        ];
        break;
      case "december":
        this.sassEarning = [
          {
            name: "This month",
            amount: "$2007.35",
            revenue: "0.2",
            time: "From previous period",
            month: "Last month",
            previousamount: "$784.04",
            series: [
              {
                name: "series1",
                data: [22, 28, 31, 34, 40, 52, 29, 45, 68, 60, 47, 12]
              }
            ]
          }
        ];
        break;
      case "november":
        this.sassEarning = [
          {
            name: "This month",
            amount: "$2887.35",
            revenue: "0.4",
            time: "From previous period",
            month: "Last month",
            previousamount: "$684.04",
            series: [
              {
                name: "series1",
                data: [28, 30, 48, 50, 47, 40, 35, 48, 56, 42, 65, 41]
              }
            ]
          }
        ];
        break;
      case "october":
        this.sassEarning = [
          {
            name: "This month",
            amount: "$2100.35",
            revenue: "0.4",
            time: "From previous period",
            month: "Last month",
            previousamount: "$674.04",
            series: [
              {
                name: "series1",
                data: [28, 48, 39, 47, 48, 41, 28, 46, 25, 32, 24, 28]
              }
            ]
          }
        ];
        break;
    }
  }
  sellingProduct(event) {
    let month = event.target.value;
    switch (month) {
      case "january":
        this.sassTopSelling = [
          {
            title: "Product B",
            amount: "$ 7842",
            revenue: "0.4",
            list: [
              {
                name: "Product D",
                text: "Neque quis est",
                sales: 41,
                chartVariant: "#34c38f"
              },
              {
                name: "Product E",
                text: "Quis autem iure",
                sales: 14,
                chartVariant: "#556ee6"
              },
              {
                name: "Product F",
                text: "Sed aliquam mauris.",
                sales: 85,
                chartVariant: "#f46a6a"
              }
            ]
          }
        ];
        break;
      case "december":
        this.sassTopSelling = [
          {
            title: "Product A",
            amount: "$ 6385",
            revenue: "0.6",
            list: [
              {
                name: "Product A",
                text: "Neque quis est",
                sales: 37,
                chartVariant: "#556ee6"
              },
              {
                name: "Product B",
                text: "Quis autem iure",
                sales: 72,
                chartVariant: "#f46a6a"
              },
              {
                name: "Product C",
                text: "Sed aliquam mauris.",
                sales: 54,
                chartVariant: "#34c38f"
              }
            ]
          }
        ];
        break;
      case "november":
        this.sassTopSelling = [
          {
            title: "Product C",
            amount: "$ 4745",
            revenue: "0.8",
            list: [
              {
                name: "Product G",
                text: "Neque quis est",
                sales: 37,
                chartVariant: "#34c38f"
              },
              {
                name: "Product H",
                text: "Quis autem iure",
                sales: 42,
                chartVariant: "#556ee6"
              },
              {
                name: "Product I",
                text: "Sed aliquam mauris.",
                sales: 63,
                chartVariant: "#f46a6a"
              }
            ]
          }
        ];
        break;
      case "october":
        this.sassTopSelling = [
          {
            title: "Product A",
            amount: "$ 6385",
            revenue: "0.6",
            list: [
              {
                name: "Product A",
                text: "Neque quis est",
                sales: 37,
                chartVariant: "#f46a6a"
              },
              {
                name: "Product B",
                text: "Quis autem iure",
                sales: 72,
                chartVariant: "#556ee6"
              },
              {
                name: "Product C",
                text: "Sed aliquam mauris.",
                sales: 54,
                chartVariant: "#34c38f"
              }
            ]
          }
        ];
        break;
      default:
        this.sassTopSelling = [
          {
            title: "Product A",
            amount: "$ 6385",
            revenue: "0.6",
            list: [
              {
                name: "Product A",
                text: "Neque quis est",
                sales: 37,
                chartVariant: "#556ee6"
              },
              {
                name: "Product B",
                text: "Quis autem iure",
                sales: 72,
                chartVariant: "#34c38f"
              },
              {
                name: "Product C",
                text: "Sed aliquam mauris.",
                sales: 54,
                chartVariant: "#f46a6a"
              }
            ]
          }
        ];
        break;
    }
  }
  static {
    this.\u0275fac = function SaasComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SaasComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(ConfigService), \u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SaasComponent, selectors: [["app-saas"]], viewQuery: function SaasComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c03, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollRef = _t.first);
      }
    }, decls: 558, vars: 12, consts: [["scrollRef", ""], [1, "container-fluid"], ["title", "Saas", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "col-lg-4"], [1, "d-flex"], [1, "flex-shrink-0", "me-3"], ["src", "assets/images/users/avatar-1.jpg", "alt", "", 1, "avatar-md", "rounded-circle", "img-thumbnail"], [1, "flex-grow-1", "align-self-center"], [1, "text-muted"], [1, "mb-2"], [1, "mb-1"], [1, "mb-0"], [1, "col-lg-4", "align-self-center"], [1, "text-lg-center", "mt-4", "mt-lg-0"], [1, "col-4"], [1, "text-muted", "text-truncate", "mb-2"], [1, "col-lg-4", "d-none", "d-lg-block"], [1, "clearfix", "mt-4", "mt-lg-0"], ["dropdown", "", 1, "dropdown", "float-end"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "dropdownToggle", "", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "bx", "bxs-cog", "align-middle", "me-1"], ["class", "dropdown-menu dropdown-menu-end", 4, "dropdownMenu"], [1, "col-xl-4"], [1, "card", "bg-primary-subtle"], [1, "col-7"], [1, "text-primary", "p-3"], [1, "text-primary"], [1, "ps-3", "mb-0"], [1, "py-1"], [1, "col-5", "align-self-end"], ["src", "assets/images/profile-img.png", "alt", "", 1, "img-fluid"], [1, "col-xl-8"], [1, "col-sm-4"], [1, "d-flex", "align-items-center", "mb-3"], [1, "avatar-xs", "me-3"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-18"], [1, "bx", "bx-copy-alt"], [1, "font-size-14", "mb-0"], [1, "text-muted", "mt-4"], [1, "mdi", "mdi-chevron-up", "ms-1", "text-success"], [1, "badge", "badge-soft-success", "font-size-12"], [1, "ms-2", "text-truncate"], [1, "bx", "bx-archive-in"], [1, "bx", "bx-purchase-tag-alt"], [1, "badge", "badge-soft-warning", "font-size-12"], [1, "clearfix"], [1, "float-end"], [1, "input-group", "input-group-sm"], [1, "form-select", "form-select-sm", 3, "change"], ["value", "january", "selected", ""], ["value", "december"], ["value", "november"], ["value", "october"], [1, "input-group-text"], [1, "card-title", "mb-4"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "colors", "plotOptions", "legend", "labels"], [1, "text-center", "text-muted"], [1, "mt-4"], [1, "mb-2", "text-truncate"], [1, "mdi", "mdi-circle", "text-primary", "me-1"], [1, "mdi", "mdi-circle", "text-success", "me-1"], [1, "mdi", "mdi-circle", "text-danger", "me-1"], [1, "nav-pills", "tab-bg", "bg-light", "rounded"], ["tabHeading", ""], [2, "height", "250px", "margin-top", "20px"], [1, "table-responsive"], [1, "table", "table-nowrap", "align-middle", "table-hover", "mb-0"], [2, "width", "50px"], [1, "form-check"], ["type", "checkbox", "id", "tasklistCheck01", 1, "form-check-input"], ["for", "tasklistCheck01", 1, "form-check-label"], [1, "text-truncate", "font-size-14", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark"], [1, "text-muted", "mb-0"], [2, "width", "90px"], [1, "list-inline", "mb-0", "font-size-16"], [1, "list-inline-item"], ["href", "javascript: void(0);", 1, "text-success", "p-1"], [1, "bx", "bxs-edit-alt"], ["href", "javascript: void(0);", 1, "text-danger", "p-1"], [1, "bx", "bxs-trash"], ["type", "checkbox", "id", "tasklistCheck02", 1, "form-check-input"], ["for", "tasklistCheck02", 1, "form-check-label"], ["type", "checkbox", "id", "tasklistCheck04", 1, "form-check-input"], ["for", "tasklistCheck04", 1, "form-check-label"], ["type", "checkbox", "id", "tasklistCheck05", 1, "form-check-input"], ["for", "tasklistCheck05", 1, "form-check-label"], ["type", "checkbox", "id", "tasklistCheck06", 1, "form-check-input"], ["for", "tasklistCheck06", 1, "form-check-label"], ["type", "checkbox", "id", "tasklistCheck07", 1, "form-check-input"], ["for", "tasklistCheck07", 1, "form-check-label"], [1, "table-responsive", "mb-0"], [1, "table", "table-nowrap", "align-middle", "table-centered", "table-hover"], [1, "card-footer", "bg-transparent", "border-top"], [1, "text-center"], ["href", "javascript: void(0);", 1, "btn", "btn-primary"], [1, "card-body", "border-bottom"], [1, "col-md-4", "col-9"], [1, "font-size-15", "mb-1"], [1, "mdi", "mdi-circle", "text-success", "align-middle", "me-1"], [1, "col-md-8", "col-3"], [1, "list-inline", "user-chat-nav", "text-end", "mb-0"], [1, "list-inline-item", "d-none", "d-sm-inline-block"], ["dropdown", "", 1, "dropdown"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "dropdownToggle", "", 1, "btn", "nav-btn", "dropdown-toggle"], [1, "bx", "bx-search-alt-2"], ["class", "dropdown-menu dropdown-menu-end dropdown-menu-md", 4, "dropdownMenu"], [1, "bx", "bx-cog"], [1, "bx", "bx-dots-horizontal-rounded"], [1, "card-body", "pb-0"], [1, "chat-conversation"], [1, "list-unstyled"], [2, "height", "260px"], [1, "chat-day-title"], [1, "title"], [3, "ngClass"], [1, "p-3", "chat-input-section"], [1, "row", 3, "ngSubmit", "formGroup"], [1, "col"], [1, "position-relative"], ["type", "text", "placeholder", "Enter Message...", "formControlName", "message", 1, "form-control", "rounded", "chat-input", 3, "ngClass"], [1, "invalid-feedback"], [1, "chat-input-links"], [1, "list-inline", "mb-0"], ["href", "javascript: void(0);", "placement", "top", "tooltip", "Emoji"], [1, "mdi", "mdi-emoticon-happy-outline"], ["href", "javascript: void(0);", "placement", "top", "tooltip", "Images"], [1, "mdi", "mdi-file-image-outline"], ["href", "javascript: void(0);", "placement", "top", "tooltip", "Add Files"], [1, "mdi", "mdi-file-document-outline"], [1, "col-auto"], ["type", "submit", 1, "btn", "btn-primary", "chat-send", "w-md"], [1, "d-none", "d-sm-inline-block", "me-2"], [1, "mdi", "mdi-send"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript: void(0);", 1, "dropdown-item"], [1, "mb-4"], [1, "badge", "badge-soft-success", "font-size-12", "me-1"], ["href", "javascript: void(0);", 1, "btn", "btn-primary", "btn-sm"], [1, "mdi", "mdi-chevron-right", "ms-1"], [1, "col-lg-8"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "colors", "stroke", "dataLabels"], [1, "text-muted", "text-center"], [1, "mt-4", "mb-0"], [1, "badge", "badge-soft-success", "font-size-11", "me-2"], [1, "mdi", "mdi-arrow-up"], [1, "table-responsive", "mt-4"], [1, "table", "align-middle", "mb-0"], [1, "font-size-14", "mb-1"], [3, "value", "Chartcolor"], [1, "text-muted", "mb-1"], [1, "fw-bold", "mb-0"], [1, "dropdown-menu", "dropdown-menu-end", "dropdown-menu-md"], [1, "p-3"], [1, "m-0"], [1, "input-group"], ["type", "text", "placeholder", "Search ...", "aria-label", "Recipient's username", 1, "form-control"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary"], [1, "mdi", "mdi-magnify"], [1, "conversation-list"], ["href", "javascript: void(0);", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "dropdownToggle", "", 1, "dropdown-toggle"], [1, "bx", "bx-dots-vertical-rounded"], ["class", "dropdown-menu", 4, "dropdownMenu"], [1, "ctext-wrap"], [1, "conversation-name"], [1, "chat-time", "mb-0"], [1, "bx", "bx-time-five", "align-middle", "mr-1"], [1, "dropdown-menu"]], template: function SaasComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275element(1, "app-page-title", 2);
        \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "div", 3)(7, "div", 7)(8, "div", 8)(9, "div", 9);
        \u0275\u0275element(10, "img", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 11)(12, "div", 12)(13, "p", 13);
        \u0275\u0275text(14, "Welcome to skote dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "h5", 14);
        \u0275\u0275text(16, "Henry wells");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p", 15);
        \u0275\u0275text(18, "UI / UX Designer");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(19, "div", 16)(20, "div", 17)(21, "div", 3)(22, "div", 18)(23, "div")(24, "p", 19);
        \u0275\u0275text(25, "Total Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "h5", 15);
        \u0275\u0275text(27, "48");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "div", 18)(29, "div")(30, "p", 19);
        \u0275\u0275text(31, "Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "h5", 15);
        \u0275\u0275text(33, "40");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 18)(35, "div")(36, "p", 19);
        \u0275\u0275text(37, "Clients");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "h5", 15);
        \u0275\u0275text(39, "18");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(40, "div", 20)(41, "div", 21)(42, "div", 22)(43, "button", 23);
        \u0275\u0275element(44, "i", 24);
        \u0275\u0275text(45, " Setting ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(46, SaasComponent_div_46_Template, 7, 0, "div", 25);
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(47, "div", 3)(48, "div", 26)(49, "div", 27)(50, "div")(51, "div", 3)(52, "div", 28)(53, "div", 29)(54, "h5", 30);
        \u0275\u0275text(55, "Welcome Back !");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "p");
        \u0275\u0275text(57, "Skote Saas Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "ul", 31)(59, "li", 32);
        \u0275\u0275text(60, "7 + Layouts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "li", 32);
        \u0275\u0275text(62, "Multiple apps");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(63, "div", 33);
        \u0275\u0275element(64, "img", 34);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(65, "div", 35)(66, "div", 3)(67, "div", 36)(68, "div", 5)(69, "div", 6)(70, "div", 37)(71, "div", 38)(72, "span", 39);
        \u0275\u0275element(73, "i", 40);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "h5", 41);
        \u0275\u0275text(75, "Orders");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(76, "div", 42)(77, "h4");
        \u0275\u0275text(78, "1,452 ");
        \u0275\u0275element(79, "i", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "div", 8)(81, "span", 44);
        \u0275\u0275text(82, " + 0.2% ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "span", 45);
        \u0275\u0275text(84, "From previous period");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(85, "div", 36)(86, "div", 5)(87, "div", 6)(88, "div", 37)(89, "div", 38)(90, "span", 39);
        \u0275\u0275element(91, "i", 46);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(92, "h5", 41);
        \u0275\u0275text(93, "Revenue");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(94, "div", 42)(95, "h4");
        \u0275\u0275text(96, "$ 28,452 ");
        \u0275\u0275element(97, "i", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "div", 8)(99, "span", 44);
        \u0275\u0275text(100, " + 0.2% ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "span", 45);
        \u0275\u0275text(102, "From previous period");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(103, "div", 36)(104, "div", 5)(105, "div", 6)(106, "div", 37)(107, "div", 38)(108, "span", 39);
        \u0275\u0275element(109, "i", 47);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(110, "h5", 41);
        \u0275\u0275text(111, "Average Price");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(112, "div", 42)(113, "h4");
        \u0275\u0275text(114, "$ 16.2 ");
        \u0275\u0275element(115, "i", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "div", 8)(117, "span", 48);
        \u0275\u0275text(118, " 0% ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "span", 45);
        \u0275\u0275text(120, "From previous period");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(121, "div", 3)(122, "div", 35)(123, "div", 5)(124, "div", 6)(125, "div", 49)(126, "div", 50)(127, "div", 51)(128, "select", 52);
        \u0275\u0275listener("change", function SaasComponent_Template_select_change_128_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.selectMonth($event));
        });
        \u0275\u0275elementStart(129, "option", 53);
        \u0275\u0275text(130, "Jan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(131, "option", 54);
        \u0275\u0275text(132, "Dec");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "option", 55);
        \u0275\u0275text(134, "Nov");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "option", 56);
        \u0275\u0275text(136, "Oct");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(137, "label", 57);
        \u0275\u0275text(138, "Month");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(139, "h4", 58);
        \u0275\u0275text(140, "Earning");
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(141, SaasComponent_For_142_Template, 23, 11, "div", 3, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(143, "div", 26)(144, "div", 5)(145, "div", 6)(146, "h4", 58);
        \u0275\u0275text(147, "Sales Analytics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(148, "div");
        \u0275\u0275element(149, "apx-chart", 59);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(150, "div", 60)(151, "div", 3)(152, "div", 18)(153, "div", 61)(154, "p", 62);
        \u0275\u0275element(155, "i", 63);
        \u0275\u0275text(156, " Product A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(157, "h5");
        \u0275\u0275text(158, "$ 2,132");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(159, "div", 18)(160, "div", 61)(161, "p", 62);
        \u0275\u0275element(162, "i", 64);
        \u0275\u0275text(163, " Product B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "h5");
        \u0275\u0275text(165, "$ 1,763");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(166, "div", 18)(167, "div", 61)(168, "p", 62);
        \u0275\u0275element(169, "i", 65);
        \u0275\u0275text(170, " Product C");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(171, "h5");
        \u0275\u0275text(172, "$ 973");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(173, "div", 3)(174, "div", 26)(175, "div", 5)(176, "div", 6)(177, "div", 49)(178, "div", 50)(179, "div", 51)(180, "select", 52);
        \u0275\u0275listener("change", function SaasComponent_Template_select_change_180_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.sellingProduct($event));
        });
        \u0275\u0275elementStart(181, "option", 53);
        \u0275\u0275text(182, "Jan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "option", 54);
        \u0275\u0275text(184, "Dec");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(185, "option", 55);
        \u0275\u0275text(186, "Nov");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(187, "option", 56);
        \u0275\u0275text(188, "Oct");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(189, "label", 57);
        \u0275\u0275text(190, "Month");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(191, "h4", 58);
        \u0275\u0275text(192, "Top Selling product");
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(193, SaasComponent_For_194_Template, 16, 3, "div", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(195, "div", 26)(196, "div", 5)(197, "div", 6)(198, "h4", 58);
        \u0275\u0275text(199, "Tasks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(200, "tabset", 66)(201, "tab");
        \u0275\u0275template(202, SaasComponent_ng_template_202_Template, 2, 0, "ng-template", 67);
        \u0275\u0275elementStart(203, "ngx-simplebar", 68)(204, "div", 69)(205, "table", 70)(206, "tbody")(207, "tr")(208, "td", 71)(209, "div", 72);
        \u0275\u0275element(210, "input", 73)(211, "label", 74);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(212, "td")(213, "h5", 75)(214, "a", 76);
        \u0275\u0275text(215, "Skote Saas Dashboard");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(216, "p", 77);
        \u0275\u0275text(217, "Assigned to Mark");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(218, "td", 78)(219, "div")(220, "ul", 79)(221, "li", 80)(222, "a", 81);
        \u0275\u0275element(223, "i", 82);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(224, "li", 80)(225, "a", 83);
        \u0275\u0275element(226, "i", 84);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(227, "tr")(228, "td", 71)(229, "div", 72);
        \u0275\u0275element(230, "input", 85)(231, "label", 86);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(232, "td")(233, "h5", 75)(234, "a", 76);
        \u0275\u0275text(235, "New Landing UI");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(236, "p", 77);
        \u0275\u0275text(237, "Assigned to Team A");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(238, "td")(239, "div")(240, "ul", 79)(241, "li", 80)(242, "a", 81);
        \u0275\u0275element(243, "i", 82);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(244, "li", 80)(245, "a", 83);
        \u0275\u0275element(246, "i", 84);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(247, "tr")(248, "td", 71)(249, "div", 72);
        \u0275\u0275element(250, "input", 85)(251, "label", 86);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(252, "td")(253, "h5", 75)(254, "a", 76);
        \u0275\u0275text(255, "Brand logo design");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(256, "p", 77);
        \u0275\u0275text(257, "Assigned to Janis");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(258, "td")(259, "div")(260, "ul", 79)(261, "li", 80)(262, "a", 81);
        \u0275\u0275element(263, "i", 82);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(264, "li", 80)(265, "a", 83);
        \u0275\u0275element(266, "i", 84);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(267, "tr")(268, "td", 71)(269, "div", 72);
        \u0275\u0275element(270, "input", 87)(271, "label", 88);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(272, "td")(273, "h5", 75)(274, "a", 76);
        \u0275\u0275text(275, "Blog Template UI");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(276, "p", 77);
        \u0275\u0275text(277, "Assigned to Dianna");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(278, "td")(279, "div")(280, "ul", 79)(281, "li", 80)(282, "a", 81);
        \u0275\u0275element(283, "i", 82);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(284, "li", 80)(285, "a", 83);
        \u0275\u0275element(286, "i", 84);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(287, "tr")(288, "td", 71)(289, "div", 72);
        \u0275\u0275element(290, "input", 89)(291, "label", 90);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(292, "td")(293, "h5", 75)(294, "a", 76);
        \u0275\u0275text(295, "Multipurpose Landing");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(296, "p", 77);
        \u0275\u0275text(297, "Assigned to Team B");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(298, "td")(299, "div")(300, "ul", 79)(301, "li", 80)(302, "a", 81);
        \u0275\u0275element(303, "i", 82);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(304, "li", 80)(305, "a", 83);
        \u0275\u0275element(306, "i", 84);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(307, "tr")(308, "td", 71)(309, "div", 72);
        \u0275\u0275element(310, "input", 91)(311, "label", 92);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(312, "td")(313, "h5", 75)(314, "a", 76);
        \u0275\u0275text(315, "Redesign - Landing page");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(316, "p", 77);
        \u0275\u0275text(317, "Assigned to Jerry");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(318, "td")(319, "div")(320, "ul", 79)(321, "li", 80)(322, "a", 81);
        \u0275\u0275element(323, "i", 82);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(324, "li", 80)(325, "a", 83);
        \u0275\u0275element(326, "i", 84);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(327, "tr")(328, "td", 71)(329, "div", 72);
        \u0275\u0275element(330, "input", 93)(331, "label", 94);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(332, "td")(333, "h5", 75)(334, "a", 76);
        \u0275\u0275text(335, "Skote Crypto Dashboard");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(336, "p", 77);
        \u0275\u0275text(337, "Assigned to Eric");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(338, "td")(339, "div")(340, "ul", 79)(341, "li", 80)(342, "a", 81);
        \u0275\u0275element(343, "i", 82);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(344, "li", 80)(345, "a", 83);
        \u0275\u0275element(346, "i", 84);
        \u0275\u0275elementEnd()()()()()()()()()()();
        \u0275\u0275elementStart(347, "tab");
        \u0275\u0275template(348, SaasComponent_ng_template_348_Template, 2, 0, "ng-template", 67);
        \u0275\u0275elementStart(349, "ngx-simplebar", 68)(350, "div", 95)(351, "table", 96)(352, "tbody")(353, "tr")(354, "td", 71)(355, "div", 72);
        \u0275\u0275element(356, "input", 73)(357, "label", 74);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(358, "td")(359, "h5", 75)(360, "a", 76);
        \u0275\u0275text(361, "Skote Saas Dashboard");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(362, "p", 77);
        \u0275\u0275text(363, "Assigned to Mark");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(364, "td", 78)(365, "div")(366, "ul", 79)(367, "li", 80)(368, "a", 81);
        \u0275\u0275element(369, "i", 82);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(370, "li", 80)(371, "a", 83);
        \u0275\u0275element(372, "i", 84);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(373, "tr")(374, "td")(375, "div", 72);
        \u0275\u0275element(376, "input", 85)(377, "label", 86);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(378, "td")(379, "h5", 75)(380, "a", 76);
        \u0275\u0275text(381, "New Landing UI");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(382, "p", 77);
        \u0275\u0275text(383, "Assigned to Team A");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(384, "td")(385, "div")(386, "ul", 79)(387, "li", 80)(388, "a", 81);
        \u0275\u0275element(389, "i", 82);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(390, "li", 80)(391, "a", 83);
        \u0275\u0275element(392, "i", 84);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(393, "tr")(394, "td")(395, "div", 72);
        \u0275\u0275element(396, "input", 85)(397, "label", 86);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(398, "td")(399, "h5", 75)(400, "a", 76);
        \u0275\u0275text(401, "Brand logo design");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(402, "p", 77);
        \u0275\u0275text(403, "Assigned to Janis");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(404, "td")(405, "div")(406, "ul", 79)(407, "li", 80)(408, "a", 81);
        \u0275\u0275element(409, "i", 82);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(410, "li", 80)(411, "a", 83);
        \u0275\u0275element(412, "i", 84);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(413, "tr")(414, "td")(415, "div", 72);
        \u0275\u0275element(416, "input", 87)(417, "label", 88);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(418, "td")(419, "h5", 75)(420, "a", 76);
        \u0275\u0275text(421, "Blog Template UI");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(422, "p", 77);
        \u0275\u0275text(423, "Assigned to Dianna");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(424, "td")(425, "div")(426, "ul", 79)(427, "li", 80)(428, "a", 81);
        \u0275\u0275element(429, "i", 82);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(430, "li", 80)(431, "a", 83);
        \u0275\u0275element(432, "i", 84);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(433, "tr")(434, "td")(435, "div", 72);
        \u0275\u0275element(436, "input", 89)(437, "label", 90);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(438, "td")(439, "h5", 75)(440, "a", 76);
        \u0275\u0275text(441, "Multipurpose Landing");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(442, "p", 77);
        \u0275\u0275text(443, "Assigned to Team B");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(444, "td")(445, "div")(446, "ul", 79)(447, "li", 80)(448, "a", 81);
        \u0275\u0275element(449, "i", 82);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(450, "li", 80)(451, "a", 83);
        \u0275\u0275element(452, "i", 84);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(453, "tr")(454, "td")(455, "div", 72);
        \u0275\u0275element(456, "input", 91)(457, "label", 92);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(458, "td")(459, "h5", 75)(460, "a", 76);
        \u0275\u0275text(461, "Redesign - Landing page");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(462, "p", 77);
        \u0275\u0275text(463, "Assigned to Jerry");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(464, "td")(465, "div")(466, "ul", 79)(467, "li", 80)(468, "a", 81);
        \u0275\u0275element(469, "i", 82);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(470, "li", 80)(471, "a", 83);
        \u0275\u0275element(472, "i", 84);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(473, "tr")(474, "td")(475, "div", 72);
        \u0275\u0275element(476, "input", 93)(477, "label", 94);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(478, "td")(479, "h5", 75)(480, "a", 76);
        \u0275\u0275text(481, "Skote Crypto Dashboard");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(482, "p", 77);
        \u0275\u0275text(483, "Assigned to Eric");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(484, "td")(485, "div")(486, "ul", 79)(487, "li", 80)(488, "a", 81);
        \u0275\u0275element(489, "i", 82);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(490, "li", 80)(491, "a", 83);
        \u0275\u0275element(492, "i", 84);
        \u0275\u0275elementEnd()()()()()()()()()()()()();
        \u0275\u0275elementStart(493, "div", 97)(494, "div", 98)(495, "a", 99);
        \u0275\u0275text(496, " Add new Task");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(497, "div", 26)(498, "div", 5)(499, "div", 100)(500, "div", 3)(501, "div", 101)(502, "h5", 102);
        \u0275\u0275text(503, "Steven Franklin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(504, "p", 77);
        \u0275\u0275element(505, "i", 103);
        \u0275\u0275text(506, " Active now");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(507, "div", 104)(508, "ul", 105)(509, "li", 106)(510, "div", 107)(511, "button", 108);
        \u0275\u0275element(512, "i", 109);
        \u0275\u0275elementEnd();
        \u0275\u0275template(513, SaasComponent_div_513_Template, 8, 0, "div", 110);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(514, "li", 106)(515, "div", 107)(516, "button", 108);
        \u0275\u0275element(517, "i", 111);
        \u0275\u0275elementEnd();
        \u0275\u0275template(518, SaasComponent_div_518_Template, 9, 0, "div", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(519, "li", 80)(520, "div", 107)(521, "button", 108);
        \u0275\u0275element(522, "i", 112);
        \u0275\u0275elementEnd();
        \u0275\u0275template(523, SaasComponent_div_523_Template, 7, 0, "div", 25);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(524, "div", 113)(525, "div")(526, "div", 114)(527, "ul", 115)(528, "ngx-simplebar", 116, 0)(530, "li")(531, "div", 117)(532, "span", 118);
        \u0275\u0275text(533, "Today");
        \u0275\u0275elementEnd()()();
        \u0275\u0275repeaterCreate(534, SaasComponent_For_535_Template, 14, 6, "li", 119, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(536, "div", 120)(537, "form", 121);
        \u0275\u0275listener("ngSubmit", function SaasComponent_Template_form_ngSubmit_537_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.messageSave());
        });
        \u0275\u0275elementStart(538, "div", 122)(539, "div", 123);
        \u0275\u0275element(540, "input", 124);
        \u0275\u0275conditionalCreate(541, SaasComponent_Conditional_541_Template, 2, 1, "div", 125);
        \u0275\u0275elementStart(542, "div", 126)(543, "ul", 127)(544, "li", 80)(545, "a", 128);
        \u0275\u0275element(546, "i", 129);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(547, "li", 80)(548, "a", 130);
        \u0275\u0275element(549, "i", 131);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(550, "li", 80)(551, "a", 132);
        \u0275\u0275element(552, "i", 133);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(553, "div", 134)(554, "button", 135)(555, "span", 136);
        \u0275\u0275text(556, "Send");
        \u0275\u0275elementEnd();
        \u0275\u0275element(557, "i", 137);
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(140);
        \u0275\u0275repeater(ctx.sassEarning);
        \u0275\u0275advance(8);
        \u0275\u0275property("series", ctx.salesAnalyticsDonutChart.series)("chart", ctx.salesAnalyticsDonutChart.chart)("colors", ctx.salesAnalyticsDonutChart.colors)("plotOptions", ctx.salesAnalyticsDonutChart.plotOptions)("legend", ctx.salesAnalyticsDonutChart.legend)("labels", ctx.salesAnalyticsDonutChart.labels);
        \u0275\u0275advance(44);
        \u0275\u0275repeater(ctx.sassTopSelling);
        \u0275\u0275advance(341);
        \u0275\u0275repeater(ctx.ChatData);
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.formData);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c1, ctx.chatSubmit && ctx.form.message.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.chatSubmit && ctx.form.message.errors ? 541 : -1);
      }
    }, dependencies: [PagetitleComponent, CommonModule, NgClass, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, SimplebarAngularModule, SimplebarAngularComponent, TabsModule, TabDirective, TabsetComponent, TabHeadingDirective, NgApexchartsModule, ChartComponent, SellingchartComponent, BsDropdownModule, BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SaasComponent, [{
    type: Component,
    args: [{ selector: "app-saas", imports: [PagetitleComponent, CommonModule, ReactiveFormsModule, SimplebarAngularModule, TabsModule, NgApexchartsModule, SellingchartComponent, BsDropdownModule], template: `<div class="container-fluid">\r
    <app-page-title title="Saas" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
    <div class="row">\r
        <div class="col-lg-12">\r
            <div class="card">\r
                <div class="card-body">\r
                    <div class="row">\r
                        <div class="col-lg-4">\r
                            <div class="d-flex">\r
                                <div class="flex-shrink-0 me-3">\r
                                    <img src="assets/images/users/avatar-1.jpg" alt="" class="avatar-md rounded-circle img-thumbnail">\r
                                </div>\r
                                <div class="flex-grow-1 align-self-center">\r
                                    <div class="text-muted">\r
                                        <p class="mb-2">Welcome to skote dashboard</p>\r
                                        <h5 class="mb-1">Henry wells</h5>\r
                                        <p class="mb-0">UI / UX Designer</p>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <div class="col-lg-4 align-self-center">\r
                            <div class="text-lg-center mt-4 mt-lg-0">\r
                                <div class="row">\r
                                    <div class="col-4">\r
                                        <div>\r
                                            <p class="text-muted text-truncate mb-2">Total Projects</p>\r
                                            <h5 class="mb-0">48</h5>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-4">\r
                                        <div>\r
                                            <p class="text-muted text-truncate mb-2">Projects</p>\r
                                            <h5 class="mb-0">40</h5>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-4">\r
                                        <div>\r
                                            <p class="text-muted text-truncate mb-2">Clients</p>\r
                                            <h5 class="mb-0">18</h5>\r
\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <div class="col-lg-4 d-none d-lg-block">\r
                            <div class="clearfix  mt-4 mt-lg-0">\r
                                <div class="dropdown float-end" dropdown>\r
                                    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" dropdownToggle>\r
                                        <i class="bx bxs-cog align-middle me-1"></i> Setting\r
                                    </button>\r
                                    <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>\r
                                        <a class="dropdown-item" href="javascript: void(0);">Action</a>\r
                                        <a class="dropdown-item" href="javascript: void(0);">Another action</a>\r
                                        <a class="dropdown-item" href="javascript: void(0);">Something else</a>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                    <!-- end row -->\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <div class="row">\r
        <div class="col-xl-4">\r
            <div class="card bg-primary-subtle">\r
                <div>\r
                    <div class="row">\r
                        <div class="col-7">\r
                            <div class="text-primary p-3">\r
                                <h5 class="text-primary">Welcome Back !</h5>\r
                                <p>Skote Saas Dashboard</p>\r
\r
                                <ul class="ps-3 mb-0">\r
                                    <li class="py-1">7 + Layouts</li>\r
                                    <li class="py-1">Multiple apps</li>\r
                                </ul>\r
                            </div>\r
                        </div>\r
                        <div class="col-5 align-self-end">\r
                            <img src="assets/images/profile-img.png" alt="" class="img-fluid">\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="col-xl-8">\r
            <div class="row">\r
                <div class="col-sm-4">\r
                    <div class="card">\r
                        <div class="card-body">\r
                            <div class="d-flex align-items-center mb-3">\r
                                <div class="avatar-xs me-3">\r
                                    <span class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-18">\r
                                        <i class="bx bx-copy-alt"></i>\r
                                    </span>\r
                                </div>\r
                                <h5 class="font-size-14 mb-0">Orders</h5>\r
                            </div>\r
                            <div class="text-muted mt-4">\r
                                <h4>1,452 <i class="mdi mdi-chevron-up ms-1 text-success"></i></h4>\r
                                <div class="d-flex">\r
                                    <span class="badge badge-soft-success font-size-12"> + 0.2% </span> <span class="ms-2 text-truncate">From previous period</span>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div class="col-sm-4">\r
                    <div class="card">\r
                        <div class="card-body">\r
                            <div class="d-flex align-items-center mb-3">\r
                                <div class="avatar-xs me-3">\r
                                    <span class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-18">\r
                                        <i class="bx bx-archive-in"></i>\r
                                    </span>\r
                                </div>\r
                                <h5 class="font-size-14 mb-0">Revenue</h5>\r
                            </div>\r
                            <div class="text-muted mt-4">\r
                                <h4>$ 28,452 <i class="mdi mdi-chevron-up ms-1 text-success"></i></h4>\r
                                <div class="d-flex">\r
                                    <span class="badge badge-soft-success font-size-12"> + 0.2% </span> <span class="ms-2 text-truncate">From previous period</span>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div class="col-sm-4">\r
                    <div class="card">\r
                        <div class="card-body">\r
                            <div class="d-flex align-items-center mb-3">\r
                                <div class="avatar-xs me-3">\r
                                    <span class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-18">\r
                                        <i class="bx bx-purchase-tag-alt"></i>\r
                                    </span>\r
                                </div>\r
                                <h5 class="font-size-14 mb-0">Average Price</h5>\r
                            </div>\r
                            <div class="text-muted mt-4">\r
                                <h4>$ 16.2 <i class="mdi mdi-chevron-up ms-1 text-success"></i></h4>\r
\r
                                <div class="d-flex">\r
                                    <span class="badge badge-soft-warning font-size-12"> 0% </span> <span class="ms-2 text-truncate">From previous period</span>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
            <!-- end row -->\r
        </div>\r
    </div>\r
\r
    <div class="row">\r
        <div class="col-xl-8">\r
            <div class="card">\r
                <div class="card-body">\r
                    <div class="clearfix">\r
                        <div class="float-end">\r
                            <div class="input-group input-group-sm">\r
                                <select class="form-select form-select-sm" (change)="selectMonth($event)">\r
                                    <option value="january" selected>Jan</option>\r
                                    <option value="december">Dec</option>\r
                                    <option value="november">Nov</option>\r
                                    <option value="october">Oct</option>\r
                                </select>\r
                                <label class="input-group-text">Month</label>\r
                            </div>\r
                        </div>\r
                        <h4 class="card-title mb-4">Earning</h4>\r
                    </div>\r
                    @for (item of sassEarning; track $index) {\r
                    <div class="row">\r
                        <div class="col-lg-4">\r
                            <div class="text-muted">\r
                                <div class="mb-4">\r
                                    <p>{{item.name}}</p>\r
                                    <h4>{{ item.amount }}</h4>\r
                                    <div><span class="badge badge-soft-success font-size-12 me-1"> + {{ item.revenue }}%\r
                                        </span> {{ item.time }}</div>\r
                                </div>\r
\r
                                <div>\r
                                    <a href="javascript: void(0);" class="btn btn-primary btn-sm">View Details <i class="mdi mdi-chevron-right ms-1"></i></a>\r
                                </div>\r
\r
                                <div class="mt-4">\r
                                    <p class="mb-2">{{ item.month }}</p>\r
                                    <h5>{{ item.previousamount }}</h5>\r
                                </div>\r
\r
                            </div>\r
                        </div>\r
\r
                        <div class="col-lg-8">\r
                            <apx-chart class="apex-charts" dir="ltr" [series]="item.series" [chart]="earningLineChart.chart" [colors]="earningLineChart.colors" [stroke]="earningLineChart.stroke" [dataLabels]="earningLineChart.dataLabels">\r
                            </apx-chart>\r
                        </div>\r
                    </div>}\r
                </div>\r
            </div>\r
        </div>\r
\r
        <div class="col-xl-4">\r
            <div class="card">\r
                <div class="card-body">\r
                    <h4 class="card-title mb-4">Sales Analytics</h4>\r
\r
                    <div>\r
                        <apx-chart class="apex-charts" dir="ltr" [series]="salesAnalyticsDonutChart.series" [chart]="salesAnalyticsDonutChart.chart" [colors]="salesAnalyticsDonutChart.colors" [plotOptions]="salesAnalyticsDonutChart.plotOptions" [legend]="salesAnalyticsDonutChart.legend" [labels]="salesAnalyticsDonutChart.labels">\r
                        </apx-chart>\r
                    </div>\r
\r
                    <div class="text-center text-muted">\r
                        <div class="row">\r
                            <div class="col-4">\r
                                <div class="mt-4">\r
                                    <p class="mb-2 text-truncate"><i class="mdi mdi-circle text-primary me-1"></i>\r
                                        Product A</p>\r
                                    <h5>$ 2,132</h5>\r
                                </div>\r
                            </div>\r
                            <div class="col-4">\r
                                <div class="mt-4">\r
                                    <p class="mb-2 text-truncate"><i class="mdi mdi-circle text-success me-1"></i>\r
                                        Product B</p>\r
                                    <h5>$ 1,763</h5>\r
                                </div>\r
                            </div>\r
                            <div class="col-4">\r
                                <div class="mt-4">\r
                                    <p class="mb-2 text-truncate"><i class="mdi mdi-circle text-danger me-1"></i>\r
                                        Product C</p>\r
                                    <h5>$ 973</h5>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
    <!-- end row -->\r
\r
    <div class="row">\r
        <div class="col-xl-4">\r
            <div class="card">\r
                <div class="card-body">\r
                    <div class="clearfix">\r
                        <div class="float-end">\r
                            <div class="input-group input-group-sm">\r
                                <select class="form-select form-select-sm" (change)="sellingProduct($event)">\r
                                    <option value="january" selected>Jan</option>\r
                                    <option value="december">Dec</option>\r
                                    <option value="november">Nov</option>\r
                                    <option value="october">Oct</option>\r
                                </select>\r
                                <label class="input-group-text">Month</label>\r
\r
                            </div>\r
                        </div>\r
                        <h4 class="card-title mb-4">Top Selling product</h4>\r
                    </div>\r
                    @for (data of sassTopSelling; track $index) {\r
                    <div>\r
                        <div class=" text-muted text-center">\r
                            <p class="mb-2">{{ data.title }}</p>\r
                            <h4>{{ data.amount }}</h4>\r
                            <p class="mt-4 mb-0"><span class="badge badge-soft-success font-size-11 me-2"> {{\r
                                    data.revenue }}% <i class="mdi mdi-arrow-up"></i> </span> From previous period</p>\r
                        </div>\r
\r
                        <div class="table-responsive mt-4">\r
                            <table class="table align-middle mb-0">\r
                                <tbody>\r
                                    @for (item of data.list; track $index) {\r
                                    <tr>\r
                                        <td>\r
                                            <h5 class="font-size-14 mb-1">{{ item.name }}</h5>\r
                                            <p class="text-muted mb-0">{{ item.text }}</p>\r
                                        </td>\r
\r
                                        <td>\r
                                            <app-sellingchart value="{{item.sales}}" Chartcolor="{{item.chartVariant}}">\r
                                            </app-sellingchart>\r
                                        </td>\r
                                        <td>\r
                                            <p class="text-muted mb-1">Sales</p>\r
                                            <h5 class="mb-0">{{ item.sales }} %</h5>\r
                                        </td>\r
                                    </tr>\r
                                    }\r
\r
                                </tbody>\r
                            </table>\r
                        </div>\r
                    </div>\r
                    }\r
                </div>\r
            </div>\r
        </div>\r
\r
        <div class="col-xl-4">\r
            <div class="card">\r
                <div class="card-body">\r
                    <h4 class="card-title mb-4">Tasks</h4>\r
                    <tabset class="nav-pills tab-bg bg-light rounded">\r
                        <tab>\r
                            <ng-template tabHeading>\r
                                <p class="fw-bold mb-0">In Process</p>\r
                            </ng-template>\r
                            <ngx-simplebar style="height: 250px; margin-top:20px ;">\r
                                <div class="table-responsive">\r
                                    <table class="table table-nowrap align-middle table-hover mb-0">\r
                                        <tbody>\r
                                            <tr>\r
                                                <td style="width: 50px;">\r
                                                    <div class="form-check">\r
                                                        <input class="form-check-input" type="checkbox" id="tasklistCheck01">\r
                                                        <label class="form-check-label" for="tasklistCheck01"></label>\r
                                                    </div>\r
                                                </td>\r
                                                <td>\r
                                                    <h5 class="text-truncate font-size-14 mb-1"><a href="javascript: void(0);" class="text-dark">Skote Saas\r
                                                            Dashboard</a></h5>\r
                                                    <p class="text-muted mb-0">Assigned to Mark</p>\r
                                                </td>\r
                                                <td style="width: 90px;">\r
                                                    <div>\r
                                                        <ul class="list-inline mb-0 font-size-16">\r
                                                            <li class="list-inline-item">\r
                                                                <a href="javascript: void(0);" class="text-success p-1"><i class="bx bxs-edit-alt"></i></a>\r
                                                            </li>\r
                                                            <li class="list-inline-item">\r
                                                                <a href="javascript: void(0);" class="text-danger p-1"><i class="bx bxs-trash"></i></a>\r
                                                            </li>\r
                                                        </ul>\r
                                                    </div>\r
                                                </td>\r
                                            </tr>\r
\r
                                            <tr>\r
                                                <td style="width: 50px;">\r
                                                    <div class="form-check">\r
                                                        <input class="form-check-input" type="checkbox" id="tasklistCheck02">\r
                                                        <label class="form-check-label" for="tasklistCheck02"></label>\r
                                                    </div>\r
                                                </td>\r
                                                <td>\r
                                                    <h5 class="text-truncate font-size-14 mb-1"><a href="javascript: void(0);" class="text-dark">New\r
                                                            Landing UI</a>\r
                                                    </h5>\r
                                                    <p class="text-muted mb-0">Assigned to Team A</p>\r
                                                </td>\r
                                                <td>\r
                                                    <div>\r
                                                        <ul class="list-inline mb-0 font-size-16">\r
                                                            <li class="list-inline-item">\r
                                                                <a href="javascript: void(0);" class="text-success p-1"><i class="bx bxs-edit-alt"></i></a>\r
                                                            </li>\r
                                                            <li class="list-inline-item">\r
                                                                <a href="javascript: void(0);" class="text-danger p-1"><i class="bx bxs-trash"></i></a>\r
                                                            </li>\r
                                                        </ul>\r
                                                    </div>\r
                                                </td>\r
                                            </tr>\r
\r
                                            <tr>\r
                                                <td style="width: 50px;">\r
                                                    <div class="form-check">\r
                                                        <input class="form-check-input" type="checkbox" id="tasklistCheck02">\r
                                                        <label class="form-check-label" for="tasklistCheck02"></label>\r
                                                    </div>\r
                                                </td>\r
                                                <td>\r
                                                    <h5 class="text-truncate font-size-14 mb-1"><a href="javascript: void(0);" class="text-dark">Brand logo\r
                                                            design</a></h5>\r
                                                    <p class="text-muted mb-0">Assigned to Janis</p>\r
                                                </td>\r
                                                <td>\r
                                                    <div>\r
                                                        <ul class="list-inline mb-0 font-size-16">\r
                                                            <li class="list-inline-item">\r
                                                                <a href="javascript: void(0);" class="text-success p-1"><i class="bx bxs-edit-alt"></i></a>\r
                                                            </li>\r
                                                            <li class="list-inline-item">\r
                                                                <a href="javascript: void(0);" class="text-danger p-1"><i class="bx bxs-trash"></i></a>\r
                                                            </li>\r
                                                        </ul>\r
                                                    </div>\r
                                                </td>\r
                                            </tr>\r
\r
                                            <tr>\r
                                                <td style="width: 50px;">\r
                                                    <div class="form-check">\r
                                                        <input class="form-check-input" type="checkbox" id="tasklistCheck04">\r
                                                        <label class="form-check-label" for="tasklistCheck04"></label>\r
                                                    </div>\r
                                                </td>\r
                                                <td>\r
                                                    <h5 class="text-truncate font-size-14 mb-1"><a href="javascript: void(0);" class="text-dark">Blog\r
                                                            Template\r
                                                            UI</a></h5>\r
                                                    <p class="text-muted mb-0">Assigned to Dianna</p>\r
                                                </td>\r
                                                <td>\r
                                                    <div>\r
                                                        <ul class="list-inline mb-0 font-size-16">\r
                                                            <li class="list-inline-item">\r
                                                                <a href="javascript: void(0);" class="text-success p-1"><i class="bx bxs-edit-alt"></i></a>\r
                                                            </li>\r
                                                            <li class="list-inline-item">\r
                                                                <a href="javascript: void(0);" class="text-danger p-1"><i class="bx bxs-trash"></i></a>\r
                                                            </li>\r
                                                        </ul>\r
                                                    </div>\r
                                                </td>\r
                                            </tr>\r
\r
                                            <tr>\r
                                                <td style="width: 50px;">\r
                                                    <div class="form-check">\r
                                                        <input class="form-check-input" type="checkbox" id="tasklistCheck05">\r
                                                        <label class="form-check-label" for="tasklistCheck05"></label>\r
                                                    </div>\r
                                                </td>\r
                                                <td>\r
                                                    <h5 class="text-truncate font-size-14 mb-1"><a href="javascript: void(0);" class="text-dark">Multipurpose\r
                                                            Landing</a></h5>\r
                                                    <p class="text-muted mb-0">Assigned to Team B</p>\r
                                                </td>\r
                                                <td>\r
                                                    <div>\r
                                                        <ul class="list-inline mb-0 font-size-16">\r
                                                            <li class="list-inline-item">\r
                                                                <a href="javascript: void(0);" class="text-success p-1"><i class="bx bxs-edit-alt"></i></a>\r
                                                            </li>\r
                                                            <li class="list-inline-item">\r
                                                                <a href="javascript: void(0);" class="text-danger p-1"><i class="bx bxs-trash"></i></a>\r
                                                            </li>\r
                                                        </ul>\r
                                                    </div>\r
                                                </td>\r
                                            </tr>\r
                                            <tr>\r
                                                <td style="width: 50px;">\r
                                                    <div class="form-check">\r
                                                        <input class="form-check-input" type="checkbox" id="tasklistCheck06">\r
                                                        <label class="form-check-label" for="tasklistCheck06"></label>\r
                                                    </div>\r
                                                </td>\r
                                                <td>\r
                                                    <h5 class="text-truncate font-size-14 mb-1"><a href="javascript: void(0);" class="text-dark">Redesign -\r
                                                            Landing\r
                                                            page</a></h5>\r
                                                    <p class="text-muted mb-0">Assigned to Jerry</p>\r
                                                </td>\r
                                                <td>\r
                                                    <div>\r
                                                        <ul class="list-inline mb-0 font-size-16">\r
                                                            <li class="list-inline-item">\r
                                                                <a href="javascript: void(0);" class="text-success p-1"><i class="bx bxs-edit-alt"></i></a>\r
                                                            </li>\r
                                                            <li class="list-inline-item">\r
                                                                <a href="javascript: void(0);" class="text-danger p-1"><i class="bx bxs-trash"></i></a>\r
                                                            </li>\r
                                                        </ul>\r
                                                    </div>\r
                                                </td>\r
                                            </tr>\r
                                            <tr>\r
                                                <td style="width: 50px;">\r
                                                    <div class="form-check">\r
                                                        <input class="form-check-input" type="checkbox" id="tasklistCheck07">\r
                                                        <label class="form-check-label" for="tasklistCheck07"></label>\r
                                                    </div>\r
                                                </td>\r
                                                <td>\r
                                                    <h5 class="text-truncate font-size-14 mb-1"><a href="javascript: void(0);" class="text-dark">Skote\r
                                                            Crypto\r
                                                            Dashboard</a></h5>\r
                                                    <p class="text-muted mb-0">Assigned to Eric</p>\r
                                                </td>\r
                                                <td>\r
                                                    <div>\r
                                                        <ul class="list-inline mb-0 font-size-16">\r
                                                            <li class="list-inline-item">\r
                                                                <a href="javascript: void(0);" class="text-success p-1"><i class="bx bxs-edit-alt"></i></a>\r
                                                            </li>\r
                                                            <li class="list-inline-item">\r
                                                                <a href="javascript: void(0);" class="text-danger p-1"><i class="bx bxs-trash"></i></a>\r
                                                            </li>\r
                                                        </ul>\r
                                                    </div>\r
                                                </td>\r
                                            </tr>\r
                                        </tbody>\r
                                    </table>\r
                                </div>\r
                            </ngx-simplebar>\r
                        </tab>\r
                        <tab>\r
                            <ng-template tabHeading>\r
                                <p class="fw-bold mb-0">Upcoming</p>\r
                            </ng-template>\r
                            <ngx-simplebar style="height: 250px; margin-top:20px">\r
                                <div class="table-responsive mb-0">\r
                                    <table class="table table-nowrap align-middle table-centered table-hover">\r
                                        <tbody>\r
                                            <tr>\r
                                                <td style="width: 50px;">\r
                                                    <div class="form-check">\r
                                                        <input class="form-check-input" type="checkbox" id="tasklistCheck01">\r
                                                        <label class="form-check-label" for="tasklistCheck01"></label>\r
                                                    </div>\r
                                                </td>\r
                                                <td>\r
                                                    <h5 class="text-truncate font-size-14 mb-1"><a href="javascript: void(0);" class="text-dark">Skote Saas\r
                                                            Dashboard</a></h5>\r
                                                    <p class="text-muted mb-0">Assigned to Mark</p>\r
                                                </td>\r
                                                <td style="width: 90px;">\r
                                                    <div>\r
                                                        <ul class="list-inline mb-0 font-size-16">\r
                                                            <li class="list-inline-item">\r
                                                                <a href="javascript: void(0);" class="text-success p-1"><i class="bx bxs-edit-alt"></i></a>\r
                                                            </li>\r
                                                            <li class="list-inline-item">\r
                                                                <a href="javascript: void(0);" class="text-danger p-1"><i class="bx bxs-trash"></i></a>\r
                                                            </li>\r
                                                        </ul>\r
                                                    </div>\r
                                                </td>\r
                                            </tr>\r
\r
                                            <tr>\r
                                                <td>\r
                                                    <div class="form-check">\r
                                                        <input class="form-check-input" type="checkbox" id="tasklistCheck02">\r
                                                        <label class="form-check-label" for="tasklistCheck02"></label>\r
                                                    </div>\r
                                                </td>\r
                                                <td>\r
                                                    <h5 class="text-truncate font-size-14 mb-1"><a href="javascript: void(0);" class="text-dark">New\r
                                                            Landing UI</a>\r
                                                    </h5>\r
                                                    <p class="text-muted mb-0">Assigned to Team A</p>\r
                                                </td>\r
                                                <td>\r
                                                    <div>\r
                                                        <ul class="list-inline mb-0 font-size-16">\r
                                                            <li class="list-inline-item">\r
                                                                <a href="javascript: void(0);" class="text-success p-1"><i class="bx bxs-edit-alt"></i></a>\r
                                                            </li>\r
                                                            <li class="list-inline-item">\r
                                                                <a href="javascript: void(0);" class="text-danger p-1"><i class="bx bxs-trash"></i></a>\r
                                                            </li>\r
                                                        </ul>\r
                                                    </div>\r
                                                </td>\r
                                            </tr>\r
\r
                                            <tr>\r
                                                <td>\r
                                                    <div class="form-check">\r
                                                        <input class="form-check-input" type="checkbox" id="tasklistCheck02">\r
                                                        <label class="form-check-label" for="tasklistCheck02"></label>\r
                                                    </div>\r
                                                </td>\r
                                                <td>\r
                                                    <h5 class="text-truncate font-size-14 mb-1"><a href="javascript: void(0);" class="text-dark">Brand logo\r
                                                            design</a></h5>\r
                                                    <p class="text-muted mb-0">Assigned to Janis</p>\r
                                                </td>\r
                                                <td>\r
                                                    <div>\r
                                                        <ul class="list-inline mb-0 font-size-16">\r
                                                            <li class="list-inline-item">\r
                                                                <a href="javascript: void(0);" class="text-success p-1"><i class="bx bxs-edit-alt"></i></a>\r
                                                            </li>\r
                                                            <li class="list-inline-item">\r
                                                                <a href="javascript: void(0);" class="text-danger p-1"><i class="bx bxs-trash"></i></a>\r
                                                            </li>\r
                                                        </ul>\r
                                                    </div>\r
                                                </td>\r
                                            </tr>\r
\r
                                            <tr>\r
                                                <td>\r
                                                    <div class="form-check">\r
                                                        <input class="form-check-input" type="checkbox" id="tasklistCheck04">\r
                                                        <label class="form-check-label" for="tasklistCheck04"></label>\r
                                                    </div>\r
                                                </td>\r
                                                <td>\r
                                                    <h5 class="text-truncate font-size-14 mb-1"><a href="javascript: void(0);" class="text-dark">Blog\r
                                                            Template\r
                                                            UI</a></h5>\r
                                                    <p class="text-muted mb-0">Assigned to Dianna</p>\r
                                                </td>\r
                                                <td>\r
                                                    <div>\r
                                                        <ul class="list-inline mb-0 font-size-16">\r
                                                            <li class="list-inline-item">\r
                                                                <a href="javascript: void(0);" class="text-success p-1"><i class="bx bxs-edit-alt"></i></a>\r
                                                            </li>\r
                                                            <li class="list-inline-item">\r
                                                                <a href="javascript: void(0);" class="text-danger p-1"><i class="bx bxs-trash"></i></a>\r
                                                            </li>\r
                                                        </ul>\r
                                                    </div>\r
                                                </td>\r
                                            </tr>\r
\r
                                            <tr>\r
                                                <td>\r
                                                    <div class="form-check">\r
                                                        <input class="form-check-input" type="checkbox" id="tasklistCheck05">\r
                                                        <label class="form-check-label" for="tasklistCheck05"></label>\r
                                                    </div>\r
                                                </td>\r
                                                <td>\r
                                                    <h5 class="text-truncate font-size-14 mb-1"><a href="javascript: void(0);" class="text-dark">Multipurpose\r
                                                            Landing</a></h5>\r
                                                    <p class="text-muted mb-0">Assigned to Team B</p>\r
                                                </td>\r
                                                <td>\r
                                                    <div>\r
                                                        <ul class="list-inline mb-0 font-size-16">\r
                                                            <li class="list-inline-item">\r
                                                                <a href="javascript: void(0);" class="text-success p-1"><i class="bx bxs-edit-alt"></i></a>\r
                                                            </li>\r
                                                            <li class="list-inline-item">\r
                                                                <a href="javascript: void(0);" class="text-danger p-1"><i class="bx bxs-trash"></i></a>\r
                                                            </li>\r
                                                        </ul>\r
                                                    </div>\r
                                                </td>\r
                                            </tr>\r
                                            <tr>\r
                                                <td>\r
                                                    <div class="form-check">\r
                                                        <input class="form-check-input" type="checkbox" id="tasklistCheck06">\r
                                                        <label class="form-check-label" for="tasklistCheck06"></label>\r
                                                    </div>\r
                                                </td>\r
                                                <td>\r
                                                    <h5 class="text-truncate font-size-14 mb-1"><a href="javascript: void(0);" class="text-dark">Redesign -\r
                                                            Landing\r
                                                            page</a></h5>\r
                                                    <p class="text-muted mb-0">Assigned to Jerry</p>\r
                                                </td>\r
                                                <td>\r
                                                    <div>\r
                                                        <ul class="list-inline mb-0 font-size-16">\r
                                                            <li class="list-inline-item">\r
                                                                <a href="javascript: void(0);" class="text-success p-1"><i class="bx bxs-edit-alt"></i></a>\r
                                                            </li>\r
                                                            <li class="list-inline-item">\r
                                                                <a href="javascript: void(0);" class="text-danger p-1"><i class="bx bxs-trash"></i></a>\r
                                                            </li>\r
                                                        </ul>\r
                                                    </div>\r
                                                </td>\r
                                            </tr>\r
                                            <tr>\r
                                                <td>\r
                                                    <div class="form-check">\r
                                                        <input class="form-check-input" type="checkbox" id="tasklistCheck07">\r
                                                        <label class="form-check-label" for="tasklistCheck07"></label>\r
                                                    </div>\r
                                                </td>\r
                                                <td>\r
                                                    <h5 class="text-truncate font-size-14 mb-1"><a href="javascript: void(0);" class="text-dark">Skote\r
                                                            Crypto\r
                                                            Dashboard</a></h5>\r
                                                    <p class="text-muted mb-0">Assigned to Eric</p>\r
                                                </td>\r
                                                <td>\r
                                                    <div>\r
                                                        <ul class="list-inline mb-0 font-size-16">\r
                                                            <li class="list-inline-item">\r
                                                                <a href="javascript: void(0);" class="text-success p-1"><i class="bx bxs-edit-alt"></i></a>\r
                                                            </li>\r
                                                            <li class="list-inline-item">\r
                                                                <a href="javascript: void(0);" class="text-danger p-1"><i class="bx bxs-trash"></i></a>\r
                                                            </li>\r
                                                        </ul>\r
                                                    </div>\r
                                                </td>\r
                                            </tr>\r
                                        </tbody>\r
                                    </table>\r
                                </div>\r
                            </ngx-simplebar>\r
                        </tab>\r
                    </tabset>\r
                </div>\r
\r
                <div class="card-footer bg-transparent border-top">\r
                    <div class="text-center">\r
                        <a href="javascript: void(0);" class="btn btn-primary"> Add new\r
                            Task</a>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <div class="col-xl-4">\r
            <div class="card">\r
                <div class="card-body border-bottom">\r
                    <div class="row">\r
                        <div class="col-md-4 col-9">\r
                            <h5 class="font-size-15 mb-1">Steven Franklin</h5>\r
                            <p class="text-muted mb-0"><i class="mdi mdi-circle text-success align-middle me-1"></i>\r
                                Active now</p>\r
                        </div>\r
                        <div class="col-md-8 col-3">\r
                            <ul class="list-inline user-chat-nav text-end mb-0">\r
                                <li class="list-inline-item d-none d-sm-inline-block">\r
                                    <div class="dropdown" dropdown>\r
                                        <button class="btn nav-btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" dropdownToggle>\r
                                            <i class="bx bx-search-alt-2"></i>\r
                                        </button>\r
                                        <div class="dropdown-menu dropdown-menu-end dropdown-menu-md" *dropdownMenu>\r
                                            <form class="p-3">\r
                                                <div class="m-0">\r
                                                    <div class="input-group">\r
                                                        <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username">\r
                                                        <div class="input-group-append">\r
                                                            <button class="btn btn-primary" type="submit"><i class="mdi mdi-magnify"></i></button>\r
                                                        </div>\r
                                                    </div>\r
                                                </div>\r
                                            </form>\r
                                        </div>\r
                                    </div>\r
                                </li>\r
                                <li class="list-inline-item d-none d-sm-inline-block">\r
                                    <div class="dropdown" dropdown>\r
                                        <button class="btn nav-btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" dropdownToggle>\r
                                            <i class="bx bx-cog"></i>\r
                                        </button>\r
                                        <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>\r
                                            <a class="dropdown-item" href="javascript: void(0);">View Profile</a>\r
                                            <a class="dropdown-item" href="javascript: void(0);">Clear chat</a>\r
                                            <a class="dropdown-item" href="javascript: void(0);">Muted</a>\r
                                            <a class="dropdown-item" href="javascript: void(0);">Delete</a>\r
                                        </div>\r
                                    </div>\r
                                </li>\r
\r
                                <li class="list-inline-item">\r
                                    <div class="dropdown" dropdown>\r
                                        <button class="btn nav-btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" dropdownToggle>\r
                                            <i class="bx bx-dots-horizontal-rounded"></i>\r
                                        </button>\r
                                        <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>\r
                                            <a class="dropdown-item" href="javascript: void(0);">Action</a>\r
                                            <a class="dropdown-item" href="javascript: void(0);">Another action</a>\r
                                            <a class="dropdown-item" href="javascript: void(0);">Something else</a>\r
                                        </div>\r
                                    </div>\r
                                </li>\r
\r
                            </ul>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="card-body pb-0">\r
                    <div>\r
                        <div class="chat-conversation">\r
                            <ul class="list-unstyled">\r
                                <ngx-simplebar style="height: 260px;" #scrollRef>\r
                                    <li>\r
                                        <div class="chat-day-title">\r
                                            <span class="title">Today</span>\r
                                        </div>\r
                                    </li>\r
                                    @for (data of ChatData; track $index) {\r
                                    <li [ngClass]="{ 'right': data.align === 'right' }">\r
                                        <div class="conversation-list">\r
                                            <div class="dropdown" dropdown>\r
                                                <a class="dropdown-toggle" href="javascript: void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" dropdownToggle>\r
                                                    <i class="bx bx-dots-vertical-rounded"></i>\r
                                                </a>\r
                                                <div class="dropdown-menu" *dropdownMenu>\r
                                                    <a class="dropdown-item" href="javascript: void(0);">Copy</a>\r
                                                    <a class="dropdown-item" href="javascript: void(0);">Save</a>\r
                                                    <a class="dropdown-item" href="javascript: void(0);">Forward</a>\r
                                                    <a class="dropdown-item" href="javascript: void(0);">Delete</a>\r
                                                </div>\r
                                            </div>\r
                                            <div class="ctext-wrap">\r
                                                <div class="conversation-name">{{data.name}}</div>\r
                                                <p>\r
                                                    {{data.message}}\r
                                                </p>\r
                                                <p class="chat-time mb-0"><i class="bx bx-time-five align-middle mr-1"></i>\r
                                                    {{data.time}}</p>\r
                                            </div>\r
                                        </div>\r
                                    </li>}\r
                                </ngx-simplebar>\r
                            </ul>\r
                        </div>\r
\r
                    </div>\r
                </div>\r
\r
                <div class="p-3 chat-input-section">\r
\r
                    <form (ngSubmit)="messageSave()" [formGroup]="formData" class="row">\r
                        <div class="col">\r
                            <div class="position-relative">\r
                                <input type="text" class="form-control rounded chat-input" placeholder="Enter Message..." formControlName="message" [ngClass]="{'is-invalid': chatSubmit && form.message.errors}">\r
                                @if(chatSubmit && form.message.errors){\r
                                <div class="invalid-feedback">\r
                                    @if(form.message.errors.required){\r
                                    <span>Message is required.</span>\r
                                    }\r
                                </div>\r
                                }\r
                                <div class="chat-input-links">\r
                                    <ul class="list-inline mb-0">\r
                                        <li class="list-inline-item"><a href="javascript: void(0);" placement="top" tooltip="Emoji"><i class="mdi mdi-emoticon-happy-outline"></i></a>\r
                                        </li>\r
                                        <li class="list-inline-item"><a href="javascript: void(0);" placement="top" tooltip="Images"><i class="mdi mdi-file-image-outline"></i></a></li>\r
                                        <li class="list-inline-item"><a href="javascript: void(0);" placement="top" tooltip="Add Files"><i class="mdi mdi-file-document-outline"></i></a>\r
                                        </li>\r
                                    </ul>\r
                                </div>\r
                            </div>\r
                        </div>\r
                        <div class="col-auto">\r
                            <button type="submit" class="btn btn-primary chat-send w-md"><span class="d-none d-sm-inline-block me-2">Send</span> <i class="mdi mdi-send"></i></button>\r
                        </div>\r
                    </form>\r
\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
\r
</div>` }]
  }], () => [{ type: UntypedFormBuilder }, { type: ConfigService }, { type: Store }], { scrollRef: [{
    type: ViewChild,
    args: ["scrollRef"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SaasComponent, { className: "SaasComponent", filePath: "src/app/pages/dashboards/saas/saas.component.ts", lineNumber: 27 });
})();

// src/app/pages/dashboards/crypto/data.ts
var walletRadialChart = {
  series: [76, 67, 61],
  labels: ["Ethereum", "Bitcoin", " Litecoin"],
  chart: {
    height: 280,
    type: "radialBar"
  },
  plotOptions: {
    radialBar: {
      offsetY: 0,
      startAngle: 0,
      endAngle: 270,
      hollow: {
        margin: 5,
        size: "35%",
        background: "transparent",
        image: void 0
      },
      track: {
        show: true,
        startAngle: void 0,
        endAngle: void 0,
        background: "#f2f2f2",
        strokeWidth: "97%",
        opacity: 1,
        margin: 12,
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5
        }
      },
      dataLabels: {
        name: {
          show: true,
          fontSize: "16px",
          fontWeight: 600,
          offsetY: -10
        },
        value: {
          show: true,
          fontSize: "14px",
          offsetY: 4,
          formatter: function(val) {
            return val + "%";
          }
        },
        total: {
          show: true,
          label: "Total",
          color: "#999",
          fontSize: "16px",
          fontFamily: void 0,
          fontWeight: 600,
          formatter: function(w) {
            return w.globals.seriesTotals.reduce(function(a, b) {
              return a + b;
            }, 0) + "%";
          }
        }
      }
    }
  },
  stroke: {
    lineCap: "round"
  },
  colors: ["#3452e1", "#f1b44c", "#50a5f1"],
  legend: {
    show: false
  }
};
var overviewChart = {
  series: [{
    name: "BTC",
    data: [
      [13273596e5, 30.95],
      [1327446e6, 31.34],
      [13275324e5, 31.18],
      [13276188e5, 31.05],
      [1327878e6, 31],
      [13279644e5, 30.95],
      [13280508e5, 31.24],
      [13281372e5, 31.29],
      [13282236e5, 31.85],
      [13284828e5, 31.86],
      [13285692e5, 32.28],
      [13286556e5, 32.1],
      [1328742e6, 32.65],
      [13288284e5, 32.21],
      [13290876e5, 32.35],
      [1329174e6, 32.44],
      [13292604e5, 32.46],
      [13293468e5, 32.86],
      [13294332e5, 32.75],
      [13297788e5, 32.54],
      [13298652e5, 32.33],
      [13299516e5, 32.97],
      [1330038e6, 33.41],
      [13302972e5, 33.27],
      [13303836e5, 33.27],
      [133047e7, 32.89],
      [13305564e5, 33.1],
      [13306428e5, 33.73],
      [1330902e6, 33.22],
      [13309884e5, 31.99],
      [13310748e5, 32.41],
      [13311612e5, 33.05],
      [13312476e5, 33.64],
      [13315068e5, 33.56],
      [13315932e5, 34.22],
      [13316796e5, 33.77],
      [1331766e6, 34.17],
      [13318524e5, 33.82],
      [13321116e5, 34.51],
      [1332198e6, 33.16],
      [13322844e5, 33.56],
      [13323708e5, 33.71],
      [13324572e5, 33.81],
      [13327128e5, 34.4],
      [13327992e5, 34.63],
      [13328856e5, 34.46],
      [1332972e6, 34.48],
      [13330584e5, 34.31],
      [13333176e5, 34.7],
      [1333404e6, 34.31],
      [13334904e5, 33.46],
      [13335768e5, 33.59],
      [13339224e5, 33.22],
      [13340088e5, 32.61],
      [13340952e5, 33.01],
      [13341816e5, 33.55],
      [1334268e6, 33.18],
      [13345272e5, 32.84],
      [13346136e5, 33.84],
      [13347e8, 33.39],
      [13347864e5, 32.91],
      [13348728e5, 33.06],
      [1335132e6, 32.62],
      [13352184e5, 32.4],
      [13353048e5, 33.13],
      [13353912e5, 33.26],
      [13354776e5, 33.58],
      [13357368e5, 33.55],
      [13358232e5, 33.77],
      [13359096e5, 33.76],
      [1335996e6, 33.32],
      [13360824e5, 32.61],
      [13363416e5, 32.52],
      [1336428e6, 32.67],
      [13365144e5, 32.52],
      [13366008e5, 31.92],
      [13366872e5, 32.2],
      [13369464e5, 32.23],
      [13370328e5, 32.33],
      [13371192e5, 32.36],
      [13372056e5, 32.01],
      [1337292e6, 31.31],
      [13375512e5, 32.01],
      [13376376e5, 32.01],
      [1337724e6, 32.18],
      [13378104e5, 31.54],
      [13378968e5, 31.6],
      [13382424e5, 32.05],
      [13383288e5, 31.29],
      [13384152e5, 31.05],
      [13385016e5, 29.82],
      [13387608e5, 30.31],
      [13388472e5, 30.7],
      [13389336e5, 31.69],
      [133902e7, 31.32],
      [13391064e5, 31.65],
      [13393656e5, 31.13],
      [1339452e6, 31.77],
      [13395384e5, 31.79],
      [13396248e5, 31.67],
      [13397112e5, 32.39],
      [13399704e5, 32.63],
      [13400568e5, 32.89],
      [13401432e5, 31.99],
      [13402296e5, 31.23],
      [1340316e6, 31.57],
      [13405752e5, 30.84],
      [13406616e5, 31.07],
      [1340748e6, 31.41],
      [13408344e5, 31.17],
      [13409208e5, 32.37],
      [134118e7, 32.19],
      [13412664e5, 32.51],
      [13414392e5, 32.53],
      [13415256e5, 31.37],
      [13417848e5, 30.43],
      [13418712e5, 30.44],
      [13419576e5, 30.2],
      [1342044e6, 30.14],
      [13421304e5, 30.65],
      [13423896e5, 30.4],
      [1342476e6, 30.65],
      [13425624e5, 31.43],
      [13426488e5, 31.89],
      [13427352e5, 31.38],
      [13429944e5, 30.64],
      [13430808e5, 30.02],
      [13431672e5, 30.33],
      [13432536e5, 30.95],
      [134334e7, 31.89],
      [13435992e5, 31.01],
      [13436856e5, 30.88],
      [1343772e6, 30.69],
      [13438584e5, 30.58],
      [13439448e5, 32.02],
      [1344204e6, 32.14],
      [13442904e5, 32.37],
      [13443768e5, 32.51],
      [13444632e5, 32.65],
      [13445496e5, 32.64],
      [13448088e5, 32.27],
      [13448952e5, 32.1],
      [13449816e5, 32.91],
      [1345068e6, 33.65],
      [13451544e5, 33.8],
      [13454136e5, 33.92],
      [13455e8, 33.75],
      [13455864e5, 33.84],
      [13456728e5, 33.5],
      [13457592e5, 32.26],
      [13460184e5, 32.32],
      [13461048e5, 32.06],
      [13461912e5, 31.96],
      [13462776e5, 31.46],
      [1346364e6, 31.27],
      [13467096e5, 31.43],
      [1346796e6, 32.26],
      [13468824e5, 32.79],
      [13469688e5, 32.46],
      [1347228e6, 32.13],
      [13473144e5, 32.43],
      [13474008e5, 32.42],
      [13474872e5, 32.81],
      [13475736e5, 33.34],
      [13478328e5, 33.41],
      [13479192e5, 32.57],
      [13480056e5, 33.12],
      [1348092e6, 34.53],
      [13481784e5, 33.83],
      [13484376e5, 33.41],
      [1348524e6, 32.9],
      [13486104e5, 32.53],
      [13486968e5, 32.8],
      [13487832e5, 32.44],
      [13490424e5, 32.62],
      [13491288e5, 32.57],
      [13492152e5, 32.6],
      [13493016e5, 32.68],
      [1349388e6, 32.47],
      [13496472e5, 32.23],
      [13497336e5, 31.68],
      [134982e7, 31.51],
      [13499064e5, 31.78],
      [13499928e5, 31.94],
      [1350252e6, 32.33],
      [13503384e5, 33.24],
      [13504248e5, 33.44],
      [13505112e5, 33.48],
      [13505976e5, 33.24],
      [13508568e5, 33.49],
      [13509432e5, 33.31],
      [13510296e5, 33.36],
      [1351116e6, 33.4],
      [13512024e5, 34.01],
      [1351638e6, 34.02],
      [13517244e5, 34.36],
      [13518108e5, 34.39],
      [135207e7, 34.24],
      [13521564e5, 34.39],
      [13522428e5, 33.47],
      [13523292e5, 32.98],
      [13524156e5, 32.9],
      [13526748e5, 32.7],
      [13527612e5, 32.54],
      [13528476e5, 32.23],
      [1352934e6, 32.64],
      [13530204e5, 32.65],
      [13532796e5, 32.92],
      [1353366e6, 32.64],
      [13534524e5, 32.84],
      [13536252e5, 33.4],
      [13538844e5, 33.3],
      [13539708e5, 33.18],
      [13540572e5, 33.88],
      [13541436e5, 34.09],
      [135423e7, 34.61],
      [13544892e5, 34.7],
      [13545756e5, 35.3],
      [1354662e6, 35.4],
      [13547484e5, 35.14],
      [13548348e5, 35.48],
      [1355094e6, 35.75],
      [13551804e5, 35.54],
      [13552668e5, 35.96],
      [13553532e5, 35.53],
      [13554396e5, 37.56],
      [13556988e5, 37.42],
      [13557852e5, 37.49],
      [13558716e5, 38.09],
      [1355958e6, 37.87],
      [13560444e5, 37.71],
      [13563036e5, 37.53],
      [13564764e5, 37.55],
      [13565628e5, 37.3],
      [13566492e5, 36.9],
      [13569084e5, 37.68],
      [13570812e5, 38.34],
      [13571676e5, 37.75],
      [1357254e6, 38.13],
      [13575132e5, 37.94],
      [13575996e5, 38.14],
      [1357686e6, 38.66],
      [13577724e5, 38.62],
      [13578588e5, 38.09],
      [1358118e6, 38.16],
      [13582044e5, 38.15],
      [13582908e5, 37.88],
      [13583772e5, 37.73],
      [13584636e5, 37.98],
      [13588092e5, 37.95],
      [13588956e5, 38.25],
      [1358982e6, 38.1],
      [13590684e5, 38.32],
      [13593276e5, 38.24],
      [1359414e6, 38.52],
      [13595004e5, 37.94],
      [13595868e5, 37.83],
      [13596732e5, 38.34],
      [13599324e5, 38.1],
      [13600188e5, 38.51],
      [13601052e5, 38.4],
      [13601916e5, 38.07],
      [1360278e6, 39.12],
      [13605372e5, 38.64],
      [13606236e5, 38.89],
      [136071e7, 38.81],
      [13607964e5, 38.61],
      [13608828e5, 38.63],
      [13612284e5, 38.99],
      [13613148e5, 38.77],
      [13614012e5, 38.34],
      [13614876e5, 38.55],
      [13617468e5, 38.11],
      [13618332e5, 38.59],
      [13619196e5, 39.6]
    ]
  }],
  chart: {
    type: "area",
    height: 220,
    toolbar: "false"
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "smooth",
    width: 2
  },
  markers: {
    size: 0,
    style: "hollow"
  },
  xaxis: {
    type: "datetime",
    min: (/* @__PURE__ */ new Date("01 Mar 2012")).getTime(),
    tickAmount: 6
  },
  tooltip: {
    x: {
      format: "dd MMM yyyy"
    }
  },
  colors: ["#f1b44c"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.6,
      opacityTo: 0.05,
      stops: [42, 100, 100, 100]
    }
  }
};
var bitconinChart = {
  series: [{
    name: "BTC",
    data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
  }],
  chart: {
    type: "area",
    height: 40,
    sparkline: {
      enabled: true
    }
  },
  stroke: {
    curve: "smooth",
    width: 2
  },
  colors: ["#f1b44c"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [25, 100, 100, 100]
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    marker: {
      show: false
    }
  }
};
var ethereumChart = {
  series: [{
    name: "ETH",
    data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
  }],
  chart: {
    type: "area",
    height: 40,
    sparkline: {
      enabled: true
    }
  },
  stroke: {
    curve: "smooth",
    width: 2
  },
  colors: ["#3452e1"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [25, 100, 100, 100]
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    marker: {
      show: false
    }
  }
};
var litecoinChart = {
  series: [{
    name: "LTC",
    data: [35, 53, 93, 47, 54, 24, 47, 75, 65, 19, 14]
  }],
  chart: {
    type: "area",
    height: 40,
    sparkline: {
      enabled: true
    }
  },
  stroke: {
    curve: "smooth",
    width: 2
  },
  colors: ["#50a5f1"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [25, 100, 100, 100]
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    marker: {
      show: false
    }
  }
};
var transactionsData = [
  {
    icon: "bx-down-arrow-circle",
    color: "primary",
    name: "Buy BTC",
    date: "14 Mar, 2020",
    text: "0.016 BTC",
    price: "$125.20"
  },
  {
    icon: "bx-up-arrow-circle",
    color: "danger",
    name: "Sell ETH",
    date: "15 Mar, 2020",
    text: "0.56 ETH",
    price: "$112.34"
  },
  {
    icon: "bx-down-arrow-circle",
    color: "primary",
    name: "Buy LTC",
    date: "16 Mar, 2020",
    text: "1.88 LTC",
    price: "$94.22"
  },
  {
    icon: "bx-down-arrow-circle",
    color: "primary",
    name: "Buy ETH",
    date: "17 Mar, 2020",
    text: "0.42 ETH",
    price: "$84.32"
  },
  {
    icon: "bx-up-arrow-circle",
    color: "danger",
    name: "Sell BTC",
    date: "18 Mar, 2020",
    text: "0.018 BTC",
    price: "$145.80"
  },
  {
    icon: "bx-down-arrow-circle",
    color: "primary",
    name: "Buy BTC",
    date: "14 Mar, 2020",
    text: "0.016 BTC",
    price: "$125.20"
  },
  {
    icon: "bx-up-arrow-circle",
    color: "danger",
    name: "Sell ETH",
    date: "14 Mar, 2020",
    text: "0.56 ETH",
    price: "$112.34"
  }
];

// src/app/pages/dashboards/crypto/crypto.component.ts
var _c04 = ["chart"];
function CryptoComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106)(1, "a", 107);
    \u0275\u0275text(2, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 107);
    \u0275\u0275text(4, "Another action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 107);
    \u0275\u0275text(6, "Something else here");
    \u0275\u0275elementEnd()();
  }
}
function CryptoComponent_For_144_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116)(1, "p", 110);
    \u0275\u0275element(2, "i");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h5");
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span", 117);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("mdi mdi-circle align-middle font-size-10 me-2 text-", item_r2.color));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.text, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r2.coin, " = ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.amount);
  }
}
function CryptoComponent_For_144_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 108)(2, "div", 109)(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 45);
    \u0275\u0275text(8);
    \u0275\u0275element(9, "i", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 3)(11, "div", 47)(12, "div")(13, "p", 110);
    \u0275\u0275text(14, "Income");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "h5");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 47)(18, "div")(19, "p", 110);
    \u0275\u0275text(20, "Expense");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "h5");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 109)(24, "a", 111);
    \u0275\u0275text(25, "View more ");
    \u0275\u0275element(26, "i", 112);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 113)(28, "div");
    \u0275\u0275element(29, "apx-chart", 114);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 115);
    \u0275\u0275repeaterCreate(31, CryptoComponent_For_144_For_32_Template, 8, 6, "div", 116, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r3.text);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r3.subamount, " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(data_r3.income);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(data_r3.expense);
    \u0275\u0275advance(7);
    \u0275\u0275property("series", data_r3.chartSeries)("chart", ctx_r3.walletRadialChart.chart)("colors", ctx_r3.walletRadialChart.colors)("stroke", ctx_r3.walletRadialChart.stroke)("plotOptions", ctx_r3.walletRadialChart.plotOptions)("legend", ctx_r3.walletRadialChart.legend)("labels", ctx_r3.walletRadialChart.labels);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(data_r3.balancelist);
  }
}
function CryptoComponent_For_176_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 118)(2, "div");
    \u0275\u0275element(3, "i");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div")(6, "h5", 119);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td")(11, "div", 120)(12, "h5", 121);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "td")(15, "div", 120)(16, "h5", 122);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("font-size-22 text-", data_r5.color));
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", data_r5.icon));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r5.date);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r5.text);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r5.price);
  }
}
function CryptoComponent_For_182_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 118)(2, "div");
    \u0275\u0275element(3, "i");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div")(6, "h5", 119);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td")(11, "div", 120)(12, "h5", 121);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "td")(15, "div", 120)(16, "h5", 122);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("font-size-22 text-", data_r6.color));
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", data_r6.icon));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r6.date);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r6.text);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r6.price);
  }
}
function CryptoComponent_For_188_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 118)(2, "div");
    \u0275\u0275element(3, "i");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div")(6, "h5", 119);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td")(11, "div", 120)(12, "h5", 121);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "td")(15, "div", 120)(16, "h5", 122);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("font-size-22 text-", data_r7.color));
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", data_r7.icon));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r7.date);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r7.text);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r7.price);
  }
}
var CryptoComponent = class _CryptoComponent {
  constructor(configService) {
    this.configService = configService;
    this.activeOptionButton = "all";
    this.updateOptionsData = {
      "1m": {
        xaxis: {
          min: (/* @__PURE__ */ new Date("28 Jan 2013")).getTime(),
          max: (/* @__PURE__ */ new Date("27 Feb 2013")).getTime()
        }
      },
      "6m": {
        xaxis: {
          min: (/* @__PURE__ */ new Date("27 Sep 2012")).getTime(),
          max: (/* @__PURE__ */ new Date("27 Feb 2013")).getTime()
        }
      },
      "1y": {
        xaxis: {
          min: (/* @__PURE__ */ new Date("27 Feb 2012")).getTime(),
          max: (/* @__PURE__ */ new Date("27 Feb 2013")).getTime()
        }
      },
      "1yd": {
        xaxis: {
          min: (/* @__PURE__ */ new Date("01 Jan 2013")).getTime(),
          max: (/* @__PURE__ */ new Date("27 Feb 2013")).getTime()
        }
      },
      all: {
        xaxis: {
          min: void 0,
          max: void 0
        }
      }
    };
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Dashboards" }, { label: "Crypto", active: true }];
    this.configService.getConfig().subscribe((response) => {
      this.walletBalanceData = response.cryptoWalletBalance;
    });
    this._fetchData();
  }
  updateOptions(option) {
    this.activeOptionButton = option;
    this.chart.updateOptions(this.updateOptionsData[option], false, true, true);
  }
  getBalanceData(data) {
    let month = data.target.value;
    switch (month) {
      case "january":
        this.walletBalanceData = [
          {
            text: "Available Balance",
            amount: "$ 1211.39",
            subamount: "+ 0.0014.23 ( 0.2 % )",
            income: "$ 468.46",
            expense: "$ 127.38",
            chartSeries: [47, 68, 49],
            balancelist: [
              {
                text: "Ethereum",
                coin: "2.5701 ETH",
                amount: "$ 723.64"
              },
              {
                text: "Bitcoin",
                coin: "0.8552 BTC",
                amount: "$ 1225.32"
              },
              {
                text: "Litecoin",
                coin: "35.7411 LTC",
                amount: "$ 4563.09"
              }
            ]
          }
        ];
        break;
      case "february":
        this.walletBalanceData = [
          {
            text: "Available Balance",
            amount: "$ 2111.39",
            subamount: "+ 0.0014.23 ( 0.2 % )",
            income: "$ 2168.46",
            expense: "$ 927.38",
            chartSeries: [38, 78, 48],
            balancelist: [
              {
                text: "Ethereum",
                coin: "2.5701 ETH",
                amount: "$ 1123.64"
              },
              {
                text: "Bitcoin",
                coin: "0.8552 BTC",
                amount: "$ 4025.32"
              },
              {
                text: "Litecoin",
                coin: "35.7411 LTC",
                amount: "$ 2263.09"
              }
            ]
          }
        ];
        break;
      case "march":
        this.walletBalanceData = [
          {
            text: "Available Balance",
            amount: "$ 1011.39",
            subamount: "+ 0.0014.23 ( 0.2 % )",
            income: "$ 668.46",
            expense: "$ 427.38",
            chartSeries: [36, 58, 78],
            balancelist: [
              {
                text: "Ethereum",
                coin: "2.5701 ETH",
                amount: "$ 523.64"
              },
              {
                text: "Bitcoin",
                coin: "0.8552 BTC",
                amount: "$ 1025.32"
              },
              {
                text: "Litecoin",
                coin: "14.7411 LTC",
                amount: "$ 6563.09"
              }
            ]
          }
        ];
        break;
      case "december":
        this.walletBalanceData = [
          {
            text: "Available Balance",
            amount: "$ 1011.39",
            subamount: "+ 0.0014.23 ( 0.2 % )",
            income: "$ 668.46",
            expense: "$ 427.38",
            chartSeries: [25, 58, 47],
            balancelist: [
              {
                text: "Ethereum",
                coin: "2.5701 ETH",
                amount: "$ 523.64"
              },
              {
                text: "Bitcoin",
                coin: "0.8552 BTC",
                amount: "$ 1025.32"
              },
              {
                text: "Litecoin",
                coin: "14.7411 LTC",
                amount: "$ 6563.09"
              }
            ]
          }
        ];
        break;
    }
  }
  _fetchData() {
    this.walletRadialChart = walletRadialChart;
    this.overviewChart = overviewChart;
    this.transactionsData = transactionsData;
    this.bitconinChart = bitconinChart;
    this.ethereumChart = ethereumChart;
    this.litecoinChart = litecoinChart;
  }
  static {
    this.\u0275fac = function CryptoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CryptoComponent)(\u0275\u0275directiveInject(ConfigService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CryptoComponent, selectors: [["app-crypto"]], viewQuery: function CryptoComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c04, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
      }
    }, decls: 354, vars: 32, consts: [["chart", ""], [1, "container-fluid"], ["title", "Crypto", 3, "breadcrumbItems"], [1, "row"], [1, "col-xl-4"], [1, "card"], [1, "card-body"], ["dropdown", "", 1, "float-end", "dropdown", "ms-2"], ["href", "javascript: void(0);", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "dropdownToggle", "", 1, "text-muted", "dropdown-toggle"], [1, "mdi", "mdi-dots-horizontal", "font-size-18"], ["class", "dropdown-menu dropdown-menu-end", 4, "dropdownMenu"], [1, "mb-4", "me-3"], [1, "mdi", "mdi-account-circle", "text-primary", "h1"], [1, "text-muted", "mb-1"], [1, "text-muted", "mb-0"], [1, "card-body", "border-top"], [1, "col-sm-6"], [1, "fw-medium", "mb-2"], [1, "mt-4", "mt-sm-0"], [1, "d-inline-flex", "align-items-center", "mt-1"], ["href", "javascript: void(0);", "placement", "top", "tooltip", "Bitcoin", 1, "m-1"], [1, "avatar-xs"], [1, "avatar-title", "rounded-circle", "bg-warning-subtle", "text-warning", "font-size-18"], [1, "mdi", "mdi-bitcoin"], ["href", "javascript: void(0);", "placement", "top", "tooltip", "Ethereum", 1, "m-1"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-18"], [1, "mdi", "mdi-ethereum"], ["href", "javascript: void(0);", "placement", "top", "tooltip", "Litecoin", 1, "m-1"], [1, "avatar-title", "rounded-circle", "bg-info-subtle", "text-info", "font-size-18"], [1, "mdi", "mdi-litecoin"], [1, "card-footer", "bg-transparent", "border-top"], [1, "text-center"], ["href", "javascript: void(0);", 1, "btn", "btn-outline-light", "me-2", "w-md"], ["href", "javascript: void(0);", 1, "btn", "btn-primary", "me-2", "w-md"], [1, "col-xl-8"], [1, "col-lg-9", "col-sm-8"], [1, "p-4"], [1, "text-primary"], [1, "text-muted"], [1, "mb-1"], [1, "mdi", "mdi-circle-medium", "align-middle", "text-primary", "me-1"], [1, "mb-0"], [1, "col-lg-3", "col-sm-4", "align-self-center"], ["src", "assets/images/crypto/features-img/img-1.png", "alt", "", 1, "img-fluid", "d-block"], [1, "col-sm-4"], [1, "text-muted", "mb-4"], [1, "mdi", "mdi-bitcoin", "h2", "text-warning", "align-middle", "mb-0", "me-3"], [1, "col-6"], [1, "text-muted", "text-truncate", "mb-0"], [1, "mdi", "mdi-arrow-up", "ms-1", "text-success"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "stroke", "colors", "fill"], [1, "mdi", "mdi-ethereum", "h2", "text-primary", "align-middle", "mb-0", "me-3"], [1, "mdi", "mdi-arrow-down", "ms-1", "text-danger"], [1, "mdi", "mdi-litecoin", "h2", "text-info", "align-middle", "mb-0", "me-3"], [1, "float-end"], [1, "form-select", "form-select-sm", "ms-2", 3, "change"], ["value", "march", "selected", ""], ["value", "february"], ["value", "january"], ["value", "december"], [1, "card-title", "mb-3"], ["id", "overview-chart", "dir", "ltr", 1, "apex-charts"], [1, "toolbar", "button-items", "text-center", "d-flex", "gap-2", "justify-content-center"], ["type", "button", "id", "one_month", 1, "btn", "btn-light", "btn-sm", 3, "click"], ["type", "button", "id", "six_months", 1, "btn", "btn-light", "btn-sm", 3, "click"], ["type", "button", "id", "one_year", 1, "btn", "btn-light", "btn-sm", "active", 3, "click"], ["type", "button", "id", "all", 1, "btn", "btn-light", "btn-sm", 3, "click"], ["id", "overview-chart-timeline"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "dataLabels", "stroke", "markers", "xaxis", "colors", "fill"], [1, "card-title", "mb-4"], [1, "nav-pills", "tab-bg", "bg-light", "rounded"], ["heading", "All"], [2, "height", "330px"], [1, "table", "align-middle", "table-nowrap"], ["heading", "Buy"], ["heading", "Sell"], [1, "list-group"], [2, "height", "390px"], [1, "list-group-item", "border-0"], [1, "d-flex"], [1, "flex-shrink-0", "me-3"], [1, "avatar-title", "rounded-circle", "bg-light"], ["src", "assets/images/companies/img-1.png", "alt", "", "height", "18"], [1, "flex-grow-1"], [1, "font-size-14"], [1, "mdi", "mdi-account", "me-1"], ["src", "assets/images/companies/img-2.png", "alt", "", "height", "18"], ["src", "assets/images/companies/img-3.png", "alt", "", "height", "18"], ["heading", "Buy", 1, "mt-4"], [1, "float-end", "ms-2"], [1, "bx", "bx-wallet", "text-primary", "font-size-16", "align-middle", "me-1"], [1, "font-size-14", "mb-4"], [1, "mb-3"], [1, "form-select"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "form-select", 2, "max-width", "90px"], ["value", "BT", "selected", ""], ["value", "ET"], ["value", "LT"], ["type", "text", 1, "form-control"], ["type", "button", 1, "btn", "btn-success", "w-md"], ["heading", "Sell", 1, "mt-4"], ["type", "email", 1, "form-control"], ["type", "button", 1, "btn", "btn-danger", "w-md"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript: void(0);", 1, "dropdown-item"], [1, "col-lg-4"], [1, "mt-4"], [1, "mb-2"], ["href", "javascript: void(0);", 1, "btn", "btn-primary", "btn-sm"], [1, "mdi", "mdi-arrow-right", "ms-1"], [1, "col-lg-4", "col-sm-6"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "colors", "stroke", "plotOptions", "legend", "labels"], [1, "col-lg-4", "col-sm-6", "align-self-center"], [1, "mt-4", "pt-2"], [1, "text-muted", "font-size-14"], [2, "width", "50px"], [1, "font-size-14", "mb-1"], [1, "text-end"], [1, "font-size-14", "mb-0"], [1, "font-size-14", "text-muted", "mb-0"]], template: function CryptoComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "app-loader");
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275element(2, "app-page-title", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "a", 8);
        \u0275\u0275element(9, "i", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, CryptoComponent_div_10_Template, 7, 0, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div")(12, "div", 11);
        \u0275\u0275element(13, "i", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div")(15, "h5");
        \u0275\u0275text(16, "Henry Wells");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p", 13);
        \u0275\u0275text(18, "henrywells@abc.com");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "p", 14);
        \u0275\u0275text(20, "Id no: #SK0234");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(21, "div", 15)(22, "div", 3)(23, "div", 16)(24, "div")(25, "p", 17);
        \u0275\u0275text(26, "Balance :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "h4");
        \u0275\u0275text(28, "$ 6134.39");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 16)(30, "div", 18)(31, "p", 17);
        \u0275\u0275text(32, "Coin :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 19)(34, "a", 20)(35, "div", 21)(36, "span", 22);
        \u0275\u0275element(37, "i", 23);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(38, "a", 24)(39, "div", 21)(40, "span", 25);
        \u0275\u0275element(41, "i", 26);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "a", 27)(43, "div", 21)(44, "span", 28);
        \u0275\u0275element(45, "i", 29);
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(46, "div", 30)(47, "div", 31)(48, "a", 32);
        \u0275\u0275text(49, "Deposit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "a", 33);
        \u0275\u0275text(51, "Buy / Sell");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(52, "div", 34)(53, "div", 5)(54, "div")(55, "div", 3)(56, "div", 35)(57, "div", 36)(58, "h5", 37);
        \u0275\u0275text(59, "Welcome Back !");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "p");
        \u0275\u0275text(61, "Skote Crypto Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "div", 38)(63, "p", 39);
        \u0275\u0275element(64, "i", 40);
        \u0275\u0275text(65, " If several languages coalesce");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "p", 39);
        \u0275\u0275element(67, "i", 40);
        \u0275\u0275text(68, " Sed ut perspiciatis unde");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "p", 41);
        \u0275\u0275element(70, "i", 40);
        \u0275\u0275text(71, " It would be necessary");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(72, "div", 42)(73, "div");
        \u0275\u0275element(74, "img", 43);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(75, "div", 3)(76, "div", 44)(77, "div", 5)(78, "div", 6)(79, "p", 45);
        \u0275\u0275element(80, "i", 46);
        \u0275\u0275text(81, " Bitcoin ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "div", 3)(83, "div", 47)(84, "div")(85, "h5");
        \u0275\u0275text(86, "$ 9134.39");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "p", 48);
        \u0275\u0275text(88, "+ 0.0012 ( 0.2 % ) ");
        \u0275\u0275element(89, "i", 49);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(90, "div", 47)(91, "div");
        \u0275\u0275element(92, "apx-chart", 50);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(93, "div", 44)(94, "div", 5)(95, "div", 6)(96, "p", 45);
        \u0275\u0275element(97, "i", 51);
        \u0275\u0275text(98, " Ethereum ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "div", 3)(100, "div", 47)(101, "div")(102, "h5");
        \u0275\u0275text(103, "$ 245.44");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "p", 48);
        \u0275\u0275text(105, "- 4.102 ( 0.1 % ) ");
        \u0275\u0275element(106, "i", 52);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(107, "div", 47)(108, "div");
        \u0275\u0275element(109, "apx-chart", 50);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(110, "div", 44)(111, "div", 5)(112, "div", 6)(113, "p", 45);
        \u0275\u0275element(114, "i", 53);
        \u0275\u0275text(115, " litecoin ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "div", 3)(117, "div", 47)(118, "div")(119, "h5");
        \u0275\u0275text(120, "$ 63.61");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "p", 48);
        \u0275\u0275text(122, "+ 1.792 ( 0.1 % ) ");
        \u0275\u0275element(123, "i", 49);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(124, "div", 47)(125, "div");
        \u0275\u0275element(126, "apx-chart", 50);
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(127, "div", 3)(128, "div", 34)(129, "div", 5)(130, "div", 6)(131, "div", 54)(132, "select", 55);
        \u0275\u0275listener("change", function CryptoComponent_Template_select_change_132_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.getBalanceData($event));
        });
        \u0275\u0275elementStart(133, "option", 56);
        \u0275\u0275text(134, "March");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "option", 57);
        \u0275\u0275text(136, "February");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "option", 58);
        \u0275\u0275text(138, "January");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "option", 59);
        \u0275\u0275text(140, "December");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(141, "h4", 60);
        \u0275\u0275text(142, "Wallet Balance");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(143, CryptoComponent_For_144_Template, 33, 12, "div", 3, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(145, "div", 4)(146, "div", 5)(147, "div", 6)(148, "h4", 60);
        \u0275\u0275text(149, "Overview");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(150, "div")(151, "div", 61)(152, "div", 62)(153, "button", 63);
        \u0275\u0275listener("click", function CryptoComponent_Template_button_click_153_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.updateOptions("1m"));
        });
        \u0275\u0275text(154, " 1M ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(155, "button", 64);
        \u0275\u0275listener("click", function CryptoComponent_Template_button_click_155_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.updateOptions("6m"));
        });
        \u0275\u0275text(156, " 6M ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(157, "button", 65);
        \u0275\u0275listener("click", function CryptoComponent_Template_button_click_157_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.updateOptions("1y"));
        });
        \u0275\u0275text(158, " 1Y ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(159, "button", 66);
        \u0275\u0275listener("click", function CryptoComponent_Template_button_click_159_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.updateOptions("all"));
        });
        \u0275\u0275text(160, " ALL ");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(161, "div", 67)(162, "apx-chart", 68, 0);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(164, "div", 3)(165, "div", 4)(166, "div", 5)(167, "div", 6)(168, "h4", 69);
        \u0275\u0275text(169, "Transactions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(170, "tabset", 70)(171, "tab", 71)(172, "ngx-simplebar", 72)(173, "table", 73)(174, "tbody");
        \u0275\u0275repeaterCreate(175, CryptoComponent_For_176_Template, 18, 10, "tr", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(177, "tab", 74)(178, "ngx-simplebar", 72)(179, "table", 73)(180, "tbody");
        \u0275\u0275repeaterCreate(181, CryptoComponent_For_182_Template, 18, 10, "tr", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(183, "tab", 75)(184, "ngx-simplebar", 72)(185, "table", 73)(186, "tbody");
        \u0275\u0275repeaterCreate(187, CryptoComponent_For_188_Template, 18, 10, "tr", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(189, "div", 4)(190, "div", 5)(191, "div", 6)(192, "h4", 69);
        \u0275\u0275text(193, "Notifications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(194, "ul", 76)(195, "ngx-simplebar", 77)(196, "li", 78)(197, "div", 79)(198, "div", 80)(199, "div", 21)(200, "span", 81);
        \u0275\u0275element(201, "img", 82);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(202, "div", 83)(203, "h5", 84);
        \u0275\u0275text(204, "Donec vitae sapien ut");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(205, "p", 38);
        \u0275\u0275text(206, "If several languages coalesce, the grammar of the resulting language");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(207, "div", 54)(208, "p", 14);
        \u0275\u0275element(209, "i", 85);
        \u0275\u0275text(210, " Joseph");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(211, "p", 14);
        \u0275\u0275text(212, "12 Mar, 2020");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(213, "li", 78)(214, "div", 79)(215, "div", 80)(216, "div", 21)(217, "span", 81);
        \u0275\u0275element(218, "img", 86);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(219, "div", 83)(220, "h5", 84);
        \u0275\u0275text(221, "Cras ultricies mi eu turpis");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(222, "p", 38);
        \u0275\u0275text(223, "To an English person, it will seem like simplified English, as a skeptical cambridge");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(224, "div", 54)(225, "p", 14);
        \u0275\u0275element(226, "i", 85);
        \u0275\u0275text(227, " Jerry");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(228, "p", 14);
        \u0275\u0275text(229, "13 Mar, 2020");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(230, "li", 78)(231, "div", 79)(232, "div", 80)(233, "div", 21)(234, "span", 81);
        \u0275\u0275element(235, "img", 87);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(236, "div", 83)(237, "h5", 84);
        \u0275\u0275text(238, "Duis arcu tortor suscipit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(239, "p", 38);
        \u0275\u0275text(240, "It va esser tam simplic quam occidental in fact, it va esser occidental.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(241, "div", 54)(242, "p", 14);
        \u0275\u0275element(243, "i", 85);
        \u0275\u0275text(244, " Calvin");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(245, "p", 14);
        \u0275\u0275text(246, "14 Mar, 2020");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(247, "li", 78)(248, "div", 79)(249, "div", 80)(250, "div", 21)(251, "span", 81);
        \u0275\u0275element(252, "img", 82);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(253, "div", 83)(254, "h5", 84);
        \u0275\u0275text(255, "Donec vitae sapien ut");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(256, "p", 38);
        \u0275\u0275text(257, "If several languages coalesce, the grammar of the resulting language");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(258, "div", 54)(259, "p", 14);
        \u0275\u0275element(260, "i", 85);
        \u0275\u0275text(261, " Joseph");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(262, "p", 14);
        \u0275\u0275text(263, "12 Mar, 2020");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(264, "div", 4)(265, "div", 5)(266, "div", 6)(267, "h4", 69);
        \u0275\u0275text(268, "Buy / Sell");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(269, "tabset", 70)(270, "tab", 88)(271, "div", 89)(272, "h5", 84);
        \u0275\u0275element(273, "i", 90);
        \u0275\u0275text(274, " $4235.23");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(275, "h5", 91);
        \u0275\u0275text(276, "Buy Coin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(277, "div")(278, "div", 92)(279, "label");
        \u0275\u0275text(280, "Payment method :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(281, "select", 93)(282, "option");
        \u0275\u0275text(283, "Credit / Debit Card");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(284, "option");
        \u0275\u0275text(285, "Paypal");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(286, "div")(287, "label");
        \u0275\u0275text(288, "Add Amount :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(289, "div", 94)(290, "div", 95)(291, "label", 96);
        \u0275\u0275text(292, "Amount");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(293, "select", 97)(294, "option", 98);
        \u0275\u0275text(295, "BTC");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(296, "option", 99);
        \u0275\u0275text(297, "ETH");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(298, "option", 100);
        \u0275\u0275text(299, "LTC");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(300, "input", 101);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(301, "div", 94)(302, "label", 96);
        \u0275\u0275text(303, "Price");
        \u0275\u0275elementEnd();
        \u0275\u0275element(304, "input", 101);
        \u0275\u0275elementStart(305, "label", 96);
        \u0275\u0275text(306, "$");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(307, "div", 94)(308, "label", 96);
        \u0275\u0275text(309, "Total");
        \u0275\u0275elementEnd();
        \u0275\u0275element(310, "input", 101);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(311, "div", 31)(312, "button", 102);
        \u0275\u0275text(313, "Buy Coin");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(314, "tab", 103)(315, "div", 89)(316, "h5", 84);
        \u0275\u0275element(317, "i", 90);
        \u0275\u0275text(318, " $4235.23");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(319, "h5", 91);
        \u0275\u0275text(320, "Sell Coin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(321, "div")(322, "div", 92)(323, "label");
        \u0275\u0275text(324, "Email :");
        \u0275\u0275elementEnd();
        \u0275\u0275element(325, "input", 104);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(326, "div")(327, "label");
        \u0275\u0275text(328, "Add Amount :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(329, "div", 94)(330, "div", 95)(331, "label", 96);
        \u0275\u0275text(332, "Amount");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(333, "select", 97)(334, "option", 98);
        \u0275\u0275text(335, "BTC");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(336, "option", 99);
        \u0275\u0275text(337, "ETH");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(338, "option", 100);
        \u0275\u0275text(339, "LTC");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(340, "input", 101);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(341, "div", 94)(342, "label", 96);
        \u0275\u0275text(343, "Price");
        \u0275\u0275elementEnd();
        \u0275\u0275element(344, "input", 101);
        \u0275\u0275elementStart(345, "label", 96);
        \u0275\u0275text(346, "$");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(347, "div", 94)(348, "label", 96);
        \u0275\u0275text(349, "Total");
        \u0275\u0275elementEnd();
        \u0275\u0275element(350, "input", 101);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(351, "div", 31)(352, "button", 105);
        \u0275\u0275text(353, "Sell Coin");
        \u0275\u0275elementEnd()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(90);
        \u0275\u0275property("series", ctx.bitconinChart.series)("chart", ctx.bitconinChart.chart)("stroke", ctx.bitconinChart.stroke)("colors", ctx.bitconinChart.colors)("fill", ctx.bitconinChart.fill);
        \u0275\u0275advance(17);
        \u0275\u0275property("series", ctx.ethereumChart.series)("chart", ctx.ethereumChart.chart)("stroke", ctx.ethereumChart.stroke)("colors", ctx.ethereumChart.colors)("fill", ctx.ethereumChart.fill);
        \u0275\u0275advance(17);
        \u0275\u0275property("series", ctx.litecoinChart.series)("chart", ctx.litecoinChart.chart)("stroke", ctx.litecoinChart.stroke)("colors", ctx.litecoinChart.colors)("fill", ctx.litecoinChart.fill);
        \u0275\u0275advance(17);
        \u0275\u0275repeater(ctx.walletBalanceData);
        \u0275\u0275advance(10);
        \u0275\u0275classProp("active", ctx.activeOptionButton == "1m");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeOptionButton == "6m");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeOptionButton == "1y");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeOptionButton == "all");
        \u0275\u0275advance(3);
        \u0275\u0275property("series", ctx.overviewChart.series)("chart", ctx.overviewChart.chart)("dataLabels", ctx.overviewChart.dataLabels)("stroke", ctx.overviewChart.stroke)("markers", ctx.overviewChart.markers)("xaxis", ctx.overviewChart.xaxis)("colors", ctx.overviewChart.colors)("fill", ctx.overviewChart.fill);
        \u0275\u0275advance(13);
        \u0275\u0275repeater(ctx.transactionsData);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.transactionsData);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.transactionsData);
      }
    }, dependencies: [PagetitleComponent, LoaderComponent, BsDropdownModule, BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective, NgApexchartsModule, ChartComponent, TabsModule, TabDirective, TabsetComponent, SimplebarAngularModule, SimplebarAngularComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CryptoComponent, [{
    type: Component,
    args: [{ selector: "app-crypto", imports: [PagetitleComponent, LoaderComponent, BsDropdownModule, NgApexchartsModule, TabsModule, SimplebarAngularModule], template: `<app-loader></app-loader>\r
<div class="container-fluid">\r
    <app-page-title title="Crypto" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
    <div class="row">\r
        <div class="col-xl-4">\r
            <div class="card">\r
                <div class="card-body">\r
                    <div class="float-end dropdown ms-2" dropdown>\r
                        <a class="text-muted dropdown-toggle" href="javascript: void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" dropdownToggle>\r
                            <i class="mdi mdi-dots-horizontal font-size-18"></i>\r
                        </a>\r
                        <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>\r
                            <a class="dropdown-item" href="javascript: void(0);">Action</a>\r
                            <a class="dropdown-item" href="javascript: void(0);">Another action</a>\r
                            <a class="dropdown-item" href="javascript: void(0);">Something else here</a>\r
                        </div>\r
                    </div>\r
                    <div>\r
                        <div class="mb-4 me-3">\r
                            <i class="mdi mdi-account-circle text-primary h1"></i>\r
                        </div>\r
                        <div>\r
                            <h5>Henry Wells</h5>\r
                            <p class="text-muted mb-1">henrywells&#64;abc.com</p>\r
                            <p class="text-muted mb-0">Id no: #SK0234</p>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div class="card-body border-top">\r
                    <div class="row">\r
                        <div class="col-sm-6">\r
                            <div>\r
                                <p class="fw-medium mb-2">Balance :</p>\r
                                <h4>$ 6134.39</h4>\r
                            </div>\r
                        </div>\r
                        <div class="col-sm-6">\r
                            <div class="mt-4 mt-sm-0">\r
                                <p class="fw-medium mb-2">Coin :</p>\r
                                <div class="d-inline-flex align-items-center mt-1">\r
\r
                                    <a href="javascript: void(0);" class="m-1" placement="top" tooltip="Bitcoin">\r
                                        <div class="avatar-xs">\r
                                            <span class="avatar-title rounded-circle bg-warning-subtle text-warning font-size-18">\r
                                                <i class="mdi mdi-bitcoin"></i>\r
                                            </span>\r
                                        </div>\r
                                    </a>\r
                                    <a href="javascript: void(0);" class="m-1" placement="top" tooltip="Ethereum">\r
                                        <div class="avatar-xs">\r
                                            <span class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-18">\r
                                                <i class="mdi mdi-ethereum"></i>\r
                                            </span>\r
                                        </div>\r
                                    </a>\r
                                    <a href="javascript: void(0);" class="m-1" placement="top" tooltip="Litecoin">\r
                                        <div class="avatar-xs">\r
                                            <span class="avatar-title rounded-circle bg-info-subtle text-info font-size-18">\r
                                                <i class="mdi mdi-litecoin"></i>\r
                                            </span>\r
                                        </div>\r
                                    </a>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div class="card-footer bg-transparent border-top">\r
                    <div class="text-center">\r
                        <a href="javascript: void(0);" class="btn btn-outline-light me-2 w-md">Deposit</a>\r
                        <a href="javascript: void(0);" class="btn btn-primary me-2 w-md">Buy / Sell</a>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <div class="col-xl-8">\r
            <div class="card">\r
                <div>\r
                    <div class="row">\r
                        <div class="col-lg-9 col-sm-8">\r
                            <div class="p-4">\r
                                <h5 class="text-primary">Welcome Back !</h5>\r
                                <p>Skote Crypto Dashboard</p>\r
\r
                                <div class="text-muted">\r
                                    <p class="mb-1"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i>\r
                                        If several languages coalesce</p>\r
                                    <p class="mb-1"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i>\r
                                        Sed ut perspiciatis unde</p>\r
                                    <p class="mb-0"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i>\r
                                        It would be necessary</p>\r
                                </div>\r
                            </div>\r
                        </div>\r
                        <div class="col-lg-3 col-sm-4 align-self-center">\r
                            <div>\r
                                <img src="assets/images/crypto/features-img/img-1.png" alt="" class="img-fluid d-block">\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
            <div class="row">\r
                <div class="col-sm-4">\r
                    <div class="card">\r
                        <div class="card-body">\r
                            <p class="text-muted mb-4"><i class="mdi mdi-bitcoin h2 text-warning align-middle mb-0 me-3"></i> Bitcoin </p>\r
\r
                            <div class="row">\r
                                <div class="col-6">\r
                                    <div>\r
                                        <h5>$ 9134.39</h5>\r
                                        <p class="text-muted text-truncate mb-0">+ 0.0012 ( 0.2 % ) <i class="mdi mdi-arrow-up ms-1 text-success"></i></p>\r
                                    </div>\r
                                </div>\r
                                <div class="col-6">\r
                                    <div>\r
                                        <apx-chart class="apex-charts" dir="ltr" [series]="bitconinChart.series" [chart]="bitconinChart.chart" [stroke]="bitconinChart.stroke" [colors]="bitconinChart.colors" [fill]="bitconinChart.fill"></apx-chart>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="col-sm-4">\r
                    <div class="card">\r
                        <div class="card-body">\r
                            <p class="text-muted mb-4"><i class="mdi mdi-ethereum h2 text-primary align-middle mb-0 me-3"></i> Ethereum </p>\r
\r
                            <div class="row">\r
                                <div class="col-6">\r
                                    <div>\r
                                        <h5>$ 245.44</h5>\r
                                        <p class="text-muted text-truncate mb-0">- 4.102 ( 0.1 % ) <i class="mdi mdi-arrow-down ms-1 text-danger"></i></p>\r
                                    </div>\r
                                </div>\r
                                <div class="col-6">\r
                                    <div>\r
                                        <apx-chart class="apex-charts" dir="ltr" [series]="ethereumChart.series" [chart]="ethereumChart.chart" [stroke]="ethereumChart.stroke" [colors]="ethereumChart.colors" [fill]="ethereumChart.fill"></apx-chart>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="col-sm-4">\r
                    <div class="card">\r
                        <div class="card-body">\r
                            <p class="text-muted mb-4"><i class="mdi mdi-litecoin h2 text-info align-middle mb-0 me-3"></i> litecoin </p>\r
\r
                            <div class="row">\r
                                <div class="col-6">\r
                                    <div>\r
                                        <h5>$ 63.61</h5>\r
                                        <p class="text-muted text-truncate mb-0">+ 1.792 ( 0.1 % ) <i class="mdi mdi-arrow-up ms-1 text-success"></i></p>\r
                                    </div>\r
                                </div>\r
                                <div class="col-6">\r
                                    <div>\r
                                        <apx-chart class="apex-charts" dir="ltr" [series]="litecoinChart.series" [chart]="litecoinChart.chart" [stroke]="litecoinChart.stroke" [colors]="litecoinChart.colors" [fill]="litecoinChart.fill"></apx-chart>\r
                                    </div>\r
                                </div>\r
                            </div>\r
\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
\r
        </div>\r
    </div>\r
    <!-- end row -->\r
\r
    <div class="row">\r
        <div class="col-xl-8">\r
            <div class="card">\r
                <div class="card-body">\r
                    <div class="float-end">\r
                        <select class="form-select form-select-sm ms-2" (change)="getBalanceData($event)">\r
                            <option value="march" selected>March</option>\r
                            <option value="february">February</option>\r
                            <option value="january">January</option>\r
                            <option value="december">December</option>\r
                        </select>\r
                    </div>\r
                    <h4 class="card-title mb-3">Wallet Balance</h4>\r
                    @for (data of walletBalanceData; track $index) {\r
                    <div class="row">\r
                        <div class="col-lg-4">\r
                            <div class="mt-4">\r
                                <p>{{data.text}}</p>\r
                                <h4>{{ data.amount }}</h4>\r
\r
                                <p class="text-muted mb-4"> {{data.subamount}} <i class="mdi mdi-arrow-up ms-1 text-success"></i></p>\r
\r
                                <div class="row">\r
                                    <div class="col-6">\r
                                        <div>\r
                                            <p class="mb-2">Income</p>\r
                                            <h5>{{ data.income }}</h5>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-6">\r
                                        <div>\r
                                            <p class="mb-2">Expense</p>\r
                                            <h5>{{ data.expense }}</h5>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
\r
                                <div class="mt-4">\r
                                    <a href="javascript: void(0);" class="btn btn-primary btn-sm">View more <i class="mdi mdi-arrow-right ms-1"></i></a>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <div class="col-lg-4 col-sm-6">\r
                            <div>\r
                                <apx-chart class="apex-charts" dir="ltr" [series]="data.chartSeries" [chart]="walletRadialChart.chart" [colors]="walletRadialChart.colors" [stroke]="walletRadialChart.stroke" [plotOptions]="walletRadialChart.plotOptions" [legend]="walletRadialChart.legend" [labels]="walletRadialChart.labels">\r
                                </apx-chart>\r
                            </div>\r
                        </div>\r
\r
                        <div class="col-lg-4 col-sm-6 align-self-center">\r
                            @for (item of data.balancelist; track $index) {\r
                            <div class="mt-4 pt-2">\r
                                <p class="mb-2"><i class="mdi mdi-circle align-middle font-size-10 me-2 text-{{item.color}}"></i> {{ item.text }}\r
                                </p>\r
                                <h5>{{ item.coin }} = <span class="text-muted font-size-14">{{ item.amount }}</span></h5>\r
                            </div>\r
                            }\r
                        </div>\r
                    </div>}\r
                </div>\r
            </div>\r
        </div>\r
        <div class="col-xl-4">\r
            <div class="card">\r
                <div class="card-body">\r
                    <h4 class="card-title mb-3">Overview</h4>\r
\r
                    <div>\r
                        <div id="overview-chart" class="apex-charts" dir="ltr">\r
                            <div class="toolbar button-items text-center d-flex gap-2 justify-content-center">\r
                                <button type="button" class="btn btn-light btn-sm" id="one_month" (click)="updateOptions( '1m' )" [class.active]="activeOptionButton=='1m'">\r
                                    1M\r
                                </button>\r
                                <button (click)="updateOptions( '6m' )" type="button" [class.active]="activeOptionButton=='6m'" class="btn btn-light btn-sm" id="six_months">\r
                                    6M\r
                                </button>\r
                                <button type="button" (click)="updateOptions( '1y' )" [class.active]="activeOptionButton=='1y'" class="btn btn-light btn-sm active" id="one_year">\r
                                    1Y\r
                                </button>\r
                                <button type="button" class="btn btn-light btn-sm" (click)="updateOptions( 'all' )" [class.active]="activeOptionButton=='all'" id="all">\r
                                    ALL\r
                                </button>\r
                            </div>\r
                            <div id="overview-chart-timeline"></div>\r
                            <apx-chart class="apex-charts" #chart dir="ltr" [series]="overviewChart.series" [chart]="overviewChart.chart" [dataLabels]="overviewChart.dataLabels" [stroke]="overviewChart.stroke" [markers]="overviewChart.markers" [xaxis]="overviewChart.xaxis" [colors]="overviewChart.colors" [fill]="overviewChart.fill">\r
                            </apx-chart>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <div class="row">\r
        <div class="col-xl-4">\r
            <div class="card">\r
                <div class="card-body">\r
                    <h4 class="card-title mb-4">Transactions</h4>\r
                    <tabset class="nav-pills tab-bg bg-light rounded">\r
                        <tab heading="All">\r
                            <ngx-simplebar style="height: 330px;">\r
                                <table class="table align-middle table-nowrap">\r
                                    <tbody>\r
                                        @for (data of transactionsData; track $index) {\r
                                        <tr>\r
                                            <td style="width: 50px;">\r
                                                <div class="font-size-22 text-{{data.color}}">\r
                                                    <i class="bx {{data.icon}}"></i>\r
                                                </div>\r
                                            </td>\r
                                            <td>\r
                                                <div>\r
                                                    <h5 class="font-size-14 mb-1">{{data.name}}</h5>\r
                                                    <p class="text-muted mb-0">{{data.date}}</p>\r
                                                </div>\r
                                            </td>\r
                                            <td>\r
                                                <div class="text-end">\r
                                                    <h5 class="font-size-14 mb-0">{{data.text}}</h5>\r
                                                </div>\r
                                            </td>\r
                                            <td>\r
                                                <div class="text-end">\r
                                                    <h5 class="font-size-14 text-muted mb-0">{{data.price}}</h5>\r
                                                </div>\r
                                            </td>\r
                                        </tr>}\r
                                    </tbody>\r
                                </table>\r
                            </ngx-simplebar>\r
                        </tab>\r
                        <tab heading="Buy">\r
                            <ngx-simplebar style="height: 330px;">\r
                                <table class="table align-middle table-nowrap">\r
                                    <tbody>\r
                                        @for (data of transactionsData; track $index) {\r
                                        <tr>\r
                                            <td style="width: 50px;">\r
                                                <div :class="font-size-22 text-{{data.color}}">\r
                                                    <i :class="bx {{data.icon}}"></i>\r
                                                </div>\r
                                            </td>\r
                                            <td>\r
                                                <div>\r
                                                    <h5 class="font-size-14 mb-1">{{data.name}}</h5>\r
                                                    <p class="text-muted mb-0">{{data.date}}</p>\r
                                                </div>\r
                                            </td>\r
                                            <td>\r
                                                <div class="text-end">\r
                                                    <h5 class="font-size-14 mb-0">{{data.text}}</h5>\r
                                                </div>\r
                                            </td>\r
                                            <td>\r
                                                <div class="text-end">\r
                                                    <h5 class="font-size-14 text-muted mb-0">{{data.price}}</h5>\r
                                                </div>\r
                                            </td>\r
                                        </tr>}\r
                                    </tbody>\r
                                </table>\r
                            </ngx-simplebar>\r
                        </tab>\r
                        <tab heading="Sell">\r
                            <ngx-simplebar style="height: 330px;">\r
                                <table class="table align-middle table-nowrap">\r
                                    <tbody>\r
                                        @for (data of transactionsData; track $index) {\r
                                        <tr>\r
                                            <td style="width: 50px;">\r
                                                <div :class="font-size-22 text-{{data.color}}">\r
                                                    <i :class="bx {{data.icon}}"></i>\r
                                                </div>\r
                                            </td>\r
                                            <td>\r
                                                <div>\r
                                                    <h5 class="font-size-14 mb-1">{{data.name}}</h5>\r
                                                    <p class="text-muted mb-0">{{data.date}}</p>\r
                                                </div>\r
                                            </td>\r
                                            <td>\r
                                                <div class="text-end">\r
                                                    <h5 class="font-size-14 mb-0">{{data.text}}</h5>\r
                                                </div>\r
                                            </td>\r
                                            <td>\r
                                                <div class="text-end">\r
                                                    <h5 class="font-size-14 text-muted mb-0">{{data.price}}</h5>\r
                                                </div>\r
                                            </td>\r
                                        </tr>\r
                                        }\r
                                    </tbody>\r
                                </table>\r
                            </ngx-simplebar>\r
                        </tab>\r
                    </tabset>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <div class="col-xl-4">\r
            <div class="card">\r
                <div class="card-body">\r
                    <h4 class="card-title mb-4">Notifications</h4>\r
\r
                    <ul class="list-group">\r
                        <ngx-simplebar style="height: 390px;">\r
                            <li class="list-group-item border-0">\r
                                <div class="d-flex">\r
                                    <div class="flex-shrink-0 me-3">\r
                                        <div class="avatar-xs">\r
                                            <span class="avatar-title rounded-circle bg-light">\r
                                                <img src="assets/images/companies/img-1.png" alt="" height="18">\r
                                            </span>\r
                                        </div>\r
                                    </div>\r
                                    <div class="flex-grow-1">\r
                                        <h5 class="font-size-14">Donec vitae sapien ut</h5>\r
                                        <p class="text-muted">If several languages coalesce, the grammar of the\r
                                            resulting\r
                                            language</p>\r
\r
                                        <div class="float-end">\r
                                            <p class="text-muted mb-0"><i class="mdi mdi-account me-1"></i> Joseph</p>\r
                                        </div>\r
                                        <p class="text-muted mb-0">12 Mar, 2020</p>\r
                                    </div>\r
                                </div>\r
                            </li>\r
                            <li class="list-group-item border-0">\r
                                <div class="d-flex">\r
                                    <div class="flex-shrink-0 me-3">\r
                                        <div class="avatar-xs">\r
                                            <span class="avatar-title rounded-circle bg-light">\r
                                                <img src="assets/images/companies/img-2.png" alt="" height="18">\r
                                            </span>\r
                                        </div>\r
                                    </div>\r
                                    <div class="flex-grow-1">\r
                                        <h5 class="font-size-14">Cras ultricies mi eu turpis</h5>\r
                                        <p class="text-muted">To an English person, it will seem like simplified\r
                                            English, as\r
                                            a skeptical cambridge</p>\r
\r
                                        <div class="float-end">\r
                                            <p class="text-muted mb-0"><i class="mdi mdi-account me-1"></i> Jerry</p>\r
                                        </div>\r
                                        <p class="text-muted mb-0">13 Mar, 2020</p>\r
                                    </div>\r
                                </div>\r
                            </li>\r
                            <li class="list-group-item border-0">\r
                                <div class="d-flex">\r
                                    <div class="flex-shrink-0 me-3">\r
                                        <div class="avatar-xs">\r
                                            <span class="avatar-title rounded-circle bg-light">\r
                                                <img src="assets/images/companies/img-3.png" alt="" height="18">\r
                                            </span>\r
                                        </div>\r
                                    </div>\r
                                    <div class="flex-grow-1">\r
                                        <h5 class="font-size-14">Duis arcu tortor suscipit</h5>\r
                                        <p class="text-muted">It va esser tam simplic quam occidental in fact, it va\r
                                            esser\r
                                            occidental.</p>\r
\r
                                        <div class="float-end">\r
                                            <p class="text-muted mb-0"><i class="mdi mdi-account me-1"></i> Calvin</p>\r
                                        </div>\r
                                        <p class="text-muted mb-0">14 Mar, 2020</p>\r
                                    </div>\r
                                </div>\r
                            </li>\r
                            <li class="list-group-item border-0">\r
                                <div class="d-flex">\r
                                    <div class="flex-shrink-0 me-3">\r
                                        <div class="avatar-xs">\r
                                            <span class="avatar-title rounded-circle bg-light">\r
                                                <img src="assets/images/companies/img-1.png" alt="" height="18">\r
                                            </span>\r
                                        </div>\r
                                    </div>\r
                                    <div class="flex-grow-1">\r
                                        <h5 class="font-size-14">Donec vitae sapien ut</h5>\r
                                        <p class="text-muted">If several languages coalesce, the grammar of the\r
                                            resulting\r
                                            language</p>\r
\r
                                        <div class="float-end">\r
                                            <p class="text-muted mb-0"><i class="mdi mdi-account me-1"></i> Joseph</p>\r
                                        </div>\r
                                        <p class="text-muted mb-0">12 Mar, 2020</p>\r
                                    </div>\r
                                </div>\r
                            </li>\r
                        </ngx-simplebar>\r
                    </ul>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <div class="col-xl-4">\r
            <div class="card">\r
                <div class="card-body">\r
                    <h4 class="card-title mb-4">Buy / Sell</h4>\r
                    <tabset class="nav-pills tab-bg bg-light rounded">\r
                        <tab heading="Buy" class="mt-4">\r
                            <div class="float-end ms-2">\r
                                <h5 class="font-size-14"><i class="bx bx-wallet text-primary font-size-16 align-middle me-1"></i>\r
                                    $4235.23</h5>\r
                            </div>\r
                            <h5 class="font-size-14 mb-4">Buy Coin</h5>\r
\r
                            <div>\r
\r
                                <div class="mb-3">\r
                                    <label>Payment method :</label>\r
                                    <select class="form-select">\r
                                        <option>Credit / Debit Card</option>\r
                                        <option>Paypal</option>\r
                                    </select>\r
                                </div>\r
\r
                                <div>\r
                                    <label>Add Amount :</label>\r
                                    <div class="input-group mb-3">\r
                                        <div class="input-group-prepend">\r
                                            <label class="input-group-text">Amount</label>\r
                                        </div>\r
                                        <select class="form-select" style="max-width: 90px;">\r
                                            <option value="BT" selected>BTC</option>\r
                                            <option value="ET">ETH</option>\r
                                            <option value="LT">LTC</option>\r
                                        </select>\r
                                        <input type="text" class="form-control">\r
                                    </div>\r
\r
                                    <div class="input-group mb-3">\r
                                        <label class="input-group-text">Price</label>\r
                                        <input type="text" class="form-control">\r
                                        <label class="input-group-text">$</label>\r
                                    </div>\r
\r
                                    <div class="input-group mb-3">\r
                                        <label class="input-group-text">Total</label>\r
                                        <input type="text" class="form-control">\r
                                    </div>\r
                                </div>\r
\r
                                <div class="text-center">\r
                                    <button type="button" class="btn btn-success w-md">Buy Coin</button>\r
                                </div>\r
                            </div>\r
                        </tab>\r
                        <tab heading="Sell" class="mt-4">\r
                            <div class="float-end ms-2">\r
                                <h5 class="font-size-14"><i class="bx bx-wallet text-primary font-size-16 align-middle me-1"></i>\r
                                    $4235.23</h5>\r
                            </div>\r
                            <h5 class="font-size-14 mb-4">Sell Coin</h5>\r
\r
                            <div>\r
                                <div class="mb-3">\r
                                    <label>Email :</label>\r
                                    <input type="email" class="form-control">\r
                                </div>\r
                                <div>\r
                                    <label>Add Amount :</label>\r
                                    <div class="input-group mb-3">\r
                                        <div class="input-group-prepend">\r
                                            <label class="input-group-text">Amount</label>\r
                                        </div>\r
                                        <select class="form-select" style="max-width: 90px;">\r
                                            <option value="BT" selected>BTC</option>\r
                                            <option value="ET">ETH</option>\r
                                            <option value="LT">LTC</option>\r
                                        </select>\r
                                        <input type="text" class="form-control">\r
                                    </div>\r
\r
                                    <div class="input-group mb-3">\r
\r
                                        <label class="input-group-text">Price</label>\r
\r
                                        <input type="text" class="form-control">\r
\r
                                        <label class="input-group-text">$</label>\r
                                    </div>\r
\r
                                    <div class="input-group mb-3">\r
                                        <label class="input-group-text">Total</label>\r
                                        <input type="text" class="form-control">\r
                                    </div>\r
                                </div>\r
\r
                                <div class="text-center">\r
                                    <button type="button" class="btn btn-danger w-md">Sell Coin</button>\r
                                </div>\r
                            </div>\r
                        </tab>\r
                    </tabset>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>` }]
  }], () => [{ type: ConfigService }], { chart: [{
    type: ViewChild,
    args: ["chart", { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CryptoComponent, { className: "CryptoComponent", filePath: "src/app/pages/dashboards/crypto/crypto.component.ts", lineNumber: 21 });
})();

// src/app/pages/dashboards/blog/data.ts
var visitorsOptions = {
  series: [{
    name: "Current",
    data: [18, 21, 45, 36, 65, 47, 51, 32, 40, 28, 31, 26]
  }, {
    name: "Previous",
    data: [30, 11, 22, 18, 32, 23, 58, 45, 30, 36, 15, 34]
  }],
  chart: {
    height: 330,
    type: "area",
    toolbar: {
      show: false
    }
  },
  colors: ["#556ee6", "#f1b44c"],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "smooth",
    width: 2
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [20, 100, 100, 100]
    }
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  },
  markers: {
    size: 3,
    strokeWidth: 3,
    hover: {
      size: 4,
      sizeOffset: 2
    }
  },
  legend: {
    position: "top",
    horizontalAlign: "right"
  }
};
var popularPostData = [
  {
    image: "assets/images/small/img-2.jpg",
    title: "Beautiful Day with Friends",
    date: "10 Nov, 2020",
    likes: 125,
    comments: 68
  },
  {
    image: "assets/images/small/img-6.jpg",
    title: "Drawing a sketch",
    date: "02 Nov, 2020",
    likes: 102,
    comments: 48
  },
  {
    image: "assets/images/small/img-1.jpg",
    title: "Riding bike on road",
    date: "24 Oct, 2020",
    likes: 98,
    comments: 35
  },
  {
    image: "assets/images/small/img-2.jpg",
    title: "Project discussion with team",
    date: "15 Oct, 2020",
    likes: 92,
    comments: 22
  }
];

// src/app/pages/dashboards/blog/blog.component.ts
var _c05 = ["chart"];
function BlogComponent_div_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130)(1, "a", 131);
    \u0275\u0275text(2, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 131);
    \u0275\u0275text(4, "Another action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 131);
    \u0275\u0275text(6, "Something else");
    \u0275\u0275elementEnd()();
  }
}
function BlogComponent_div_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130)(1, "a", 131);
    \u0275\u0275text(2, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 131);
    \u0275\u0275text(4, "Another action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 131);
    \u0275\u0275text(6, "Something else here");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 132);
    \u0275\u0275elementStart(8, "a", 131);
    \u0275\u0275text(9, "Separated link");
    \u0275\u0275elementEnd()();
  }
}
function BlogComponent_div_181_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130)(1, "a", 133);
    \u0275\u0275text(2, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 133);
    \u0275\u0275text(4, "Another action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 133);
    \u0275\u0275text(6, "Something else here");
    \u0275\u0275elementEnd()();
  }
}
function BlogComponent_div_196_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130)(1, "a", 133);
    \u0275\u0275text(2, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 133);
    \u0275\u0275text(4, "Another action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 133);
    \u0275\u0275text(6, "Something else here");
    \u0275\u0275elementEnd()();
  }
}
function BlogComponent_div_211_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130)(1, "a", 133);
    \u0275\u0275text(2, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 133);
    \u0275\u0275text(4, "Another action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 133);
    \u0275\u0275text(6, "Something else here");
    \u0275\u0275elementEnd()();
  }
}
function BlogComponent_div_226_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130)(1, "a", 133);
    \u0275\u0275text(2, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 133);
    \u0275\u0275text(4, "Another action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 133);
    \u0275\u0275text(6, "Something else here");
    \u0275\u0275elementEnd()();
  }
}
function BlogComponent_div_244_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130)(1, "a", 133);
    \u0275\u0275text(2, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 133);
    \u0275\u0275text(4, "Another action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 133);
    \u0275\u0275text(6, "Something else here");
    \u0275\u0275elementEnd()();
  }
}
function BlogComponent_div_259_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130)(1, "a", 133);
    \u0275\u0275text(2, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 133);
    \u0275\u0275text(4, "Another action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 133);
    \u0275\u0275text(6, "Something else here");
    \u0275\u0275elementEnd()();
  }
}
function BlogComponent_div_274_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130)(1, "a", 133);
    \u0275\u0275text(2, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 133);
    \u0275\u0275text(4, "Another action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 133);
    \u0275\u0275text(6, "Something else here");
    \u0275\u0275elementEnd()();
  }
}
function BlogComponent_div_289_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130)(1, "a", 133);
    \u0275\u0275text(2, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 133);
    \u0275\u0275text(4, "Another action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 133);
    \u0275\u0275text(6, "Something else here");
    \u0275\u0275elementEnd()();
  }
}
function BlogComponent_div_300_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130)(1, "a", 131);
    \u0275\u0275text(2, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 131);
    \u0275\u0275text(4, "Another action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 131);
    \u0275\u0275text(6, "Something else here");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 132);
    \u0275\u0275elementStart(8, "a", 131);
    \u0275\u0275text(9, "Separated link");
    \u0275\u0275elementEnd()();
  }
}
function BlogComponent_div_379_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130)(1, "a", 131);
    \u0275\u0275text(2, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 131);
    \u0275\u0275text(4, "Another action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 131);
    \u0275\u0275text(6, "Something else here");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 132);
    \u0275\u0275elementStart(8, "a", 131);
    \u0275\u0275text(9, "Separated link");
    \u0275\u0275elementEnd()();
  }
}
function BlogComponent_div_434_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130)(1, "a", 131);
    \u0275\u0275text(2, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 131);
    \u0275\u0275text(4, "Another action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 131);
    \u0275\u0275text(6, "Something else here");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 132);
    \u0275\u0275elementStart(8, "a", 131);
    \u0275\u0275text(9, "Separated link");
    \u0275\u0275elementEnd()();
  }
}
function BlogComponent_div_515_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130)(1, "a", 131);
    \u0275\u0275text(2, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 131);
    \u0275\u0275text(4, "Another action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 131);
    \u0275\u0275text(6, "Something else here");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 132);
    \u0275\u0275elementStart(8, "a", 131);
    \u0275\u0275text(9, "Separated link");
    \u0275\u0275elementEnd()();
  }
}
function BlogComponent_For_530_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130)(1, "a", 131);
    \u0275\u0275text(2, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 131);
    \u0275\u0275text(4, "Another action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 131);
    \u0275\u0275text(6, "Something else here");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 132);
    \u0275\u0275elementStart(8, "a", 131);
    \u0275\u0275text(9, "Separated link");
    \u0275\u0275elementEnd()();
  }
}
function BlogComponent_For_530_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 134);
    \u0275\u0275element(2, "img", 135);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "h5", 136)(5, "a", 80);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 81);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275element(10, "i", 137);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275element(13, "i", 138);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "div", 139)(17, "a", 48);
    \u0275\u0275element(18, "i", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, BlogComponent_For_530_div_19_Template, 10, 0, "div", 43);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", \u0275\u0275interpolate(item_r2.image), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.date);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r2.likes);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r2.comments);
  }
}
function BlogComponent_ng_template_531_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130)(1, "a", 141);
    \u0275\u0275text(2, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 131);
    \u0275\u0275text(4, "Another action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 131);
    \u0275\u0275text(6, "Something else here");
    \u0275\u0275elementEnd()();
  }
}
function BlogComponent_ng_template_531_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "a", 140);
    \u0275\u0275element(2, "i", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, BlogComponent_ng_template_531_div_3_Template, 7, 0, "div", 43);
    \u0275\u0275elementEnd();
  }
}
var BlogComponent = class _BlogComponent {
  constructor() {
    this.activeOptionButton = "all";
    this.updateOptionsData = {
      "1m": {
        series: [{
          name: "Current",
          data: [12, 22, 38, 42, 32, 40, 51, 36, 51, 29, 38, 36]
        }, {
          name: "Previous",
          data: [22, 31, 36, 26, 47, 56, 42, 64, 61, 52, 42, 31]
        }]
      },
      "6m": {
        series: [{
          name: "Current",
          data: [31, 40, 28, 51, 42, 40, 51, 36, 40, 39, 31, 36]
        }, {
          name: "Previous",
          data: [11, 32, 45, 32, 34, 22, 51, 60, 51, 52, 40, 31]
        }]
      },
      "1y": {
        series: [{
          name: "Current",
          data: [28, 22, 38, 42, 32, 40, 51, 36, 51, 29, 38, 36]
        }, {
          name: "Previous",
          data: [22, 31, 36, 26, 47, 56, 42, 64, 61, 52, 42, 31]
        }]
      },
      all: {
        series: [{
          name: "Current",
          data: [18, 21, 45, 36, 65, 47, 51, 32, 40, 28, 31, 26]
        }, {
          name: "Previous",
          data: [30, 11, 22, 18, 32, 23, 58, 45, 30, 36, 15, 34]
        }]
      }
    };
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Dashboards" }, { label: "Blog", active: true }];
    this._fetchData();
  }
  updateOptions(option) {
    this.activeOptionButton = option;
    this.chart.updateOptions(this.updateOptionsData[option], false, true, true);
  }
  _fetchData() {
    this.visitorsOptions = visitorsOptions;
    this.popularPostData = popularPostData;
  }
  static {
    this.\u0275fac = function BlogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BlogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogComponent, selectors: [["app-blog"]], viewQuery: function BlogComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c05, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
      }
    }, decls: 533, vars: 17, consts: [["chart", ""], ["dropdown", ""], [1, "container-fluid"], ["title", "Blog", 3, "breadcrumbItems"], [1, "row"], [1, "col-xl-8"], [1, "col-lg-4"], [1, "card", "mini-stats-wid"], [1, "card-body"], [1, "d-flex", "flex-wrap"], [1, "mr-3"], [1, "text-muted", "mb-2"], [1, "mb-0"], [1, "avatar-sm", "ms-auto"], [1, "avatar-title", "bg-light", "rounded-circle", "text-primary", "font-size-20"], [1, "bx", "bxs-book-bookmark"], [1, "card", "blog-stats-wid"], [1, "me-3"], [1, "bx", "bxs-note"], [1, "bx", "bxs-message-square-dots"], [1, "card"], [1, "card-title", "me-2"], [1, "ms-auto"], [1, "toolbar", "button-items", "text-end", "d-flex", "gap-2", "justify-content-center"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-light", "btn-sm", "active", 3, "click"], [1, "row", "text-center"], [1, "mt-4"], [1, "text-muted", "mb-1"], [1, "text-success", "font-size-13"], [1, "mdi", "mdi-arrow-up", "ms-1"], [1, "mb-4"], ["dir", "ltr", 1, "apex-charts", 3, "chart", "series", "legend", "colors", "fill", "dataLabels", "xaxis", "stroke"], [1, "col-xl-4"], [1, "d-flex"], [1, "flex-shrink-0", "me-3"], ["src", "assets/images/users/avatar-1.jpg", "alt", "", 1, "avatar-sm", "rounded-circle", "img-thumbnail"], [1, "flex-grow-1"], [1, "text-muted"], [1, "mb-1"], ["dropdown", "", 1, "flex-shrink-0", "dropdown", "ms-2"], ["dropdownToggle", "", "type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-light", "btn-sm"], [1, "bx", "bxs-cog", "align-middle", "me-1"], ["class", "dropdown-menu dropdown-menu-end", 4, "dropdownMenu"], [1, "col-4"], [1, "text-muted", "text-truncate", "mb-2"], [1, "card-title", "mb-3", "me-2"], ["dropdown", "", 1, "dropdown", "ms-auto"], ["dropdownToggle", "", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", 1, "text-muted", "dropdown-toggle", "font-size-16"], [1, "mdi", "mdi-dots-horizontal"], [1, "mb-3"], [1, "text-success", "mb-0"], [1, "mdi", "mdi-arrow-top-right", "ms-1"], [1, "ms-auto", "align-self-end"], [1, "bx", "bx-group", "display-4", "text-light"], [1, "card-body", "p-4"], [1, "text-center"], [1, "avatar-md", "mx-auto", "mb-4"], [1, "avatar-title", "bg-light", "rounded-circle", "text-primary", "h1"], [1, "mdi", "mdi-email-open"], [1, "row", "justify-content-center"], [1, "col-xl-10"], [1, "text-primary"], [1, "text-muted", "font-size-14", "mb-4"], [1, "input-group", "bg-light", "rounded"], ["type", "email", "placeholder", "Enter Email address", "aria-label", "Recipient's username", "aria-describedby", "button-addon2", 1, "form-control", "bg-transparent", "border-0"], ["type", "button", "id", "button-addon2", 1, "btn", "btn-primary"], [1, "bx", "bxs-paper-plane"], [1, "col-xl-4", "col-lg-6"], [1, "d-flex", "flex-wrap", "align-items-start"], [1, "me-2"], [1, "card-title", "mb-0"], [1, "nav-tabs", "nav-tabs-custom", "card-header-tabs", "custom-widget-nav", "ms-auto"], ["heading", "Recent", 1, "mt-4"], [2, "max-height", "272px"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "py-3"], ["src", "assets/images/small/img-2.jpg", "alt", "", 1, "avatar-md", "h-auto", "d-block", "rounded"], [1, "align-self-center", "overflow-hidden", "me-auto"], [1, "font-size-14", "text-truncate"], ["href", "javascript: void(0);", 1, "text-dark"], [1, "text-muted", "mb-0"], ["dropdown", "", 1, "dropdown", "ms-2"], ["href", "javascript:void(0);", "role", "button", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "dropdownToggle", "", 1, "text-muted", "font-size-14"], ["src", "assets/images/small/img-6.jpg", "alt", "", 1, "avatar-md", "h-auto", "d-block", "rounded"], ["src", "assets/images/small/img-1.jpg", "alt", "", 1, "avatar-md", "h-auto", "d-block", "rounded"], ["heading", "Popular", 1, "mt-4"], [2, "height", "272px"], [1, "mr-2"], [1, "card-title", "mb-3"], [2, "height", "310px"], [1, "avatar-xs"], [1, "avatar-title", "rounded-circle", "bg-light", "text-primary"], [1, "bx", "bxs-user"], [1, "font-size-14", "mb-1"], [1, "text-muted", "float-end"], ["href", "javascript: void(0);", 1, "text-success"], [1, "mdi", "mdi-reply", "mr-1"], ["src", "assets/images/users/avatar-2.jpg", "alt", "", 1, "img-fluid", "d-block", "rounded-circle"], [1, "mdi", "mdi-reply"], [1, "d-flex", "pt-3"], [1, "avatar-xs", "me-3"], [1, "col-6"], [1, "mt-3"], [1, "list-group-item"], [1, "py-2"], [1, "font-size-14"], [1, "float-end"], [1, "progress", "animated-progess", "progress-sm"], ["role", "progressbar", "aria-valuenow", "78", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "78%"], ["role", "progressbar", "aria-valuenow", "69", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "69%"], ["role", "progressbar", "aria-valuenow", "61", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "61%"], [1, "card-title", "mb-4"], [2, "height", "285px"], [1, "verti-timeline", "list-unstyled"], [1, "event-list", "active"], [1, "event-timeline-dot"], [1, "bx", "bxs-right-arrow-circle", "font-size-18", "bx-fade-right"], [1, "bx", "bx-right-arrow-alt", "font-size-16", "text-primary", "align-middle", "ms-2"], [1, "fw-semibold"], ["href", "javascript: void(0);"], [1, "event-list"], [1, "bx", "bx-right-arrow-circle", "font-size-18"], [1, "text-center", "mt-4"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "waves-effect", "waves-light", "btn-sm"], [1, "mdi", "mdi-arrow-right", "ms-1"], [1, "table-responsive"], [1, "table", "align-middle", "table-nowrap", "mb-0"], ["scope", "col", "colspan", "2"], ["scope", "col"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript: void(0);", 1, "dropdown-item"], [1, "dropdown-divider"], ["href", "javascript:void(0);", 1, "dropdown-item"], [2, "width", "100px"], ["alt", "", 1, "avatar-md", "h-auto", "d-block", "rounded", 3, "src"], [1, "font-size-13", "text-truncate", "mb-1"], [1, "bx", "bx-like", "align-middle", "me-1"], [1, "bx", "bx-comment-dots", "align-middle", "me-1"], ["dropdown", "", 1, "dropdown"], ["dropdownToggle", "", "href", "javascript: void(0);", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "text-muted", "dropdown-toggle", "font-size-14"], ["href", "javascript::void(0);", 1, "dropdown-item"]], template: function BlogComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275element(1, "app-page-title", 3);
        \u0275\u0275elementStart(2, "div", 4)(3, "div", 5)(4, "div", 4)(5, "div", 6)(6, "div", 7)(7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "p", 11);
        \u0275\u0275text(11, "Total Post");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "h5", 12);
        \u0275\u0275text(13, "120");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 13)(15, "div", 14);
        \u0275\u0275element(16, "i", 15);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(17, "div", 6)(18, "div", 16)(19, "div", 8)(20, "div", 9)(21, "div", 17)(22, "p", 11);
        \u0275\u0275text(23, "Pages");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "h5", 12);
        \u0275\u0275text(25, "86");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 13)(27, "div", 14);
        \u0275\u0275element(28, "i", 18);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(29, "div", 6)(30, "div", 16)(31, "div", 8)(32, "div", 9)(33, "div", 10)(34, "p", 11);
        \u0275\u0275text(35, "Comments");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "h5", 12);
        \u0275\u0275text(37, "4,235");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 13)(39, "div", 14);
        \u0275\u0275element(40, "i", 19);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(41, "div", 20)(42, "div", 8)(43, "div", 9)(44, "h5", 21);
        \u0275\u0275text(45, "Visitors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 22)(47, "div", 23)(48, "button", 24);
        \u0275\u0275listener("click", function BlogComponent_Template_button_click_48_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.updateOptions("all"));
        });
        \u0275\u0275text(49, " ALL ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "button", 24);
        \u0275\u0275listener("click", function BlogComponent_Template_button_click_50_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.updateOptions("1m"));
        });
        \u0275\u0275text(51, " 1M ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "button", 24);
        \u0275\u0275listener("click", function BlogComponent_Template_button_click_52_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.updateOptions("6m"));
        });
        \u0275\u0275text(53, " 6M ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "button", 25);
        \u0275\u0275listener("click", function BlogComponent_Template_button_click_54_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.updateOptions("1y"));
        });
        \u0275\u0275text(55, " 1Y ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(56, "div", 26)(57, "div", 6)(58, "div", 27)(59, "p", 28);
        \u0275\u0275text(60, "Today");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "h5");
        \u0275\u0275text(62, "1024");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(63, "div", 6)(64, "div", 27)(65, "p", 28);
        \u0275\u0275text(66, "This Month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "h5");
        \u0275\u0275text(68, "12356 ");
        \u0275\u0275elementStart(69, "span", 29);
        \u0275\u0275text(70, "0.2 % ");
        \u0275\u0275element(71, "i", 30);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(72, "div", 6)(73, "div", 27)(74, "p", 28);
        \u0275\u0275text(75, "This Year");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "h5");
        \u0275\u0275text(77, "102354 ");
        \u0275\u0275elementStart(78, "span", 29);
        \u0275\u0275text(79, "0.1 % ");
        \u0275\u0275element(80, "i", 30);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275element(81, "hr", 31)(82, "apx-chart", 32, 0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(84, "div", 33)(85, "div", 20)(86, "div", 8)(87, "div", 34)(88, "div", 35);
        \u0275\u0275element(89, "img", 36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "div", 37)(91, "div", 34)(92, "div", 37)(93, "div", 38)(94, "h5", 39);
        \u0275\u0275text(95, "Henry wells");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "p", 12);
        \u0275\u0275text(97, "UI / UX Designer");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(98, "div", 40)(99, "button", 41);
        \u0275\u0275element(100, "i", 42);
        \u0275\u0275text(101, " Setting ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(102, BlogComponent_div_102_Template, 7, 0, "div", 43);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(103, "hr");
        \u0275\u0275elementStart(104, "div", 4)(105, "div", 44)(106, "div")(107, "p", 45);
        \u0275\u0275text(108, "Total Post");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "h5", 12);
        \u0275\u0275text(110, "32");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(111, "div", 44)(112, "div")(113, "p", 45);
        \u0275\u0275text(114, "Subscribes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "h5", 12);
        \u0275\u0275text(116, "10k");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(117, "div", 20)(118, "div", 8)(119, "div", 9)(120, "h5", 46);
        \u0275\u0275text(121, "Subscribes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "div", 47)(123, "a", 48);
        \u0275\u0275element(124, "i", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275template(125, BlogComponent_div_125_Template, 10, 0, "div", 43);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(126, "div", 9)(127, "div")(128, "p", 28);
        \u0275\u0275text(129, "Total Subscribe");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "h4", 50);
        \u0275\u0275text(131, "10,512");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "p", 51)(133, "span");
        \u0275\u0275text(134, "0.6 % ");
        \u0275\u0275element(135, "i", 52);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(136, "div", 53);
        \u0275\u0275element(137, "i", 54);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(138, "div", 20)(139, "div", 55)(140, "div", 56)(141, "div", 57)(142, "div", 58);
        \u0275\u0275element(143, "i", 59);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(144, "div", 60)(145, "div", 61)(146, "h4", 62);
        \u0275\u0275text(147, "Subscribe !");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(148, "p", 63);
        \u0275\u0275text(149, "Subscribe our newletter and get notification to stay update.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(150, "div", 64);
        \u0275\u0275element(151, "input", 65);
        \u0275\u0275elementStart(152, "button", 66);
        \u0275\u0275element(153, "i", 67);
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(154, "div", 4)(155, "div", 68)(156, "div", 20)(157, "div", 8)(158, "div", 69)(159, "div", 70)(160, "h5", 71);
        \u0275\u0275text(161, "Posts");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(162, "div", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(163, "tabset", 72)(164, "tab", 73)(165, "ngx-simplebar", 74)(166, "ul", 75)(167, "li", 76)(168, "div", 34)(169, "div", 17);
        \u0275\u0275element(170, "img", 77);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(171, "div", 78)(172, "div")(173, "h5", 79)(174, "a", 80);
        \u0275\u0275text(175, "Beautiful Day with Friends");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(176, "p", 81);
        \u0275\u0275text(177, "10 Nov, 2020");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(178, "div", 82)(179, "a", 83);
        \u0275\u0275element(180, "i", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275template(181, BlogComponent_div_181_Template, 7, 0, "div", 43);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(182, "li", 76)(183, "div", 34)(184, "div", 17);
        \u0275\u0275element(185, "img", 84);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(186, "div", 78)(187, "div")(188, "h5", 79)(189, "a", 80);
        \u0275\u0275text(190, "Drawing a sketch");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(191, "p", 81);
        \u0275\u0275text(192, "02 Nov, 2020");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(193, "div", 82)(194, "a", 83);
        \u0275\u0275element(195, "i", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275template(196, BlogComponent_div_196_Template, 7, 0, "div", 43);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(197, "li", 76)(198, "div", 34)(199, "div", 17);
        \u0275\u0275element(200, "img", 77);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(201, "div", 78)(202, "div")(203, "h5", 79)(204, "a", 80);
        \u0275\u0275text(205, "Project discussion with team");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(206, "p", 81);
        \u0275\u0275text(207, "24 Oct, 2020");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(208, "div", 82)(209, "a", 83);
        \u0275\u0275element(210, "i", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275template(211, BlogComponent_div_211_Template, 7, 0, "div", 43);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(212, "li", 76)(213, "div", 34)(214, "div", 17);
        \u0275\u0275element(215, "img", 85);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(216, "div", 78)(217, "div")(218, "h5", 79)(219, "a", 80);
        \u0275\u0275text(220, "Riding bike on road");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(221, "p", 81);
        \u0275\u0275text(222, "20 Oct, 2020");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(223, "div", 82)(224, "a", 83);
        \u0275\u0275element(225, "i", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275template(226, BlogComponent_div_226_Template, 7, 0, "div", 43);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(227, "tab", 86)(228, "ngx-simplebar", 87)(229, "ul", 75)(230, "li", 76)(231, "div", 34)(232, "div", 17);
        \u0275\u0275element(233, "img", 84);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(234, "div", 78)(235, "div")(236, "h5", 79)(237, "a", 80);
        \u0275\u0275text(238, "Drawing a sketch");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(239, "p", 81);
        \u0275\u0275text(240, "02 Nov, 2020");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(241, "div", 82)(242, "a", 83);
        \u0275\u0275element(243, "i", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275template(244, BlogComponent_div_244_Template, 7, 0, "div", 43);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(245, "li", 76)(246, "div", 34)(247, "div", 17);
        \u0275\u0275element(248, "img", 77);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(249, "div", 78)(250, "div")(251, "h5", 79)(252, "a", 80);
        \u0275\u0275text(253, "Beautiful Day with Friends");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(254, "p", 81);
        \u0275\u0275text(255, "10 Nov, 2020");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(256, "div", 82)(257, "a", 83);
        \u0275\u0275element(258, "i", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275template(259, BlogComponent_div_259_Template, 7, 0, "div", 43);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(260, "li", 76)(261, "div", 34)(262, "div", 17);
        \u0275\u0275element(263, "img", 85);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(264, "div", 78)(265, "div")(266, "h5", 79)(267, "a", 80);
        \u0275\u0275text(268, "Riding bike on road");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(269, "p", 81);
        \u0275\u0275text(270, "20 Oct, 2020");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(271, "div", 82)(272, "a", 83);
        \u0275\u0275element(273, "i", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275template(274, BlogComponent_div_274_Template, 7, 0, "div", 43);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(275, "li", 76)(276, "div", 34)(277, "div", 17);
        \u0275\u0275element(278, "img", 77);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(279, "div", 78)(280, "div")(281, "h5", 79)(282, "a", 80);
        \u0275\u0275text(283, "Project discussion with team");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(284, "p", 81);
        \u0275\u0275text(285, "24 Oct, 2020");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(286, "div", 82)(287, "a", 83);
        \u0275\u0275element(288, "i", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275template(289, BlogComponent_div_289_Template, 7, 0, "div", 43);
        \u0275\u0275elementEnd()()()()()()()()()();
        \u0275\u0275elementStart(290, "div", 68)(291, "div", 20)(292, "div", 8)(293, "div", 9)(294, "div", 88)(295, "h5", 89);
        \u0275\u0275text(296, "Comments");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(297, "div", 47)(298, "a", 48);
        \u0275\u0275element(299, "i", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275template(300, BlogComponent_div_300_Template, 10, 0, "div", 43);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(301, "ngx-simplebar", 90)(302, "ul", 75)(303, "li", 76)(304, "div", 34)(305, "div", 35)(306, "div", 91)(307, "div", 92);
        \u0275\u0275element(308, "i", 93);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(309, "div", 37)(310, "h5", 94);
        \u0275\u0275text(311, "Delores Williams ");
        \u0275\u0275elementStart(312, "small", 95);
        \u0275\u0275text(313, "1 hr Ago");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(314, "p", 38);
        \u0275\u0275text(315, "If several languages coalesce, the grammar of the resulting of the individual");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(316, "div")(317, "a", 96);
        \u0275\u0275element(318, "i", 97);
        \u0275\u0275text(319, " Reply");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(320, "li", 76)(321, "div", 34)(322, "div", 35)(323, "div", 91);
        \u0275\u0275element(324, "img", 98);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(325, "div", 37)(326, "h5", 94);
        \u0275\u0275text(327, "Clarence Smith ");
        \u0275\u0275elementStart(328, "small", 95);
        \u0275\u0275text(329, "2 hrs Ago");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(330, "p", 38);
        \u0275\u0275text(331, "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(332, "div")(333, "a", 96);
        \u0275\u0275element(334, "i", 99);
        \u0275\u0275text(335, " Reply");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(336, "div", 100)(337, "div", 35)(338, "div", 91)(339, "div", 92);
        \u0275\u0275element(340, "i", 93);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(341, "div", 37)(342, "h5", 94);
        \u0275\u0275text(343, "Silvia Martinez ");
        \u0275\u0275elementStart(344, "small", 95);
        \u0275\u0275text(345, "2 hrs Ago");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(346, "p", 38);
        \u0275\u0275text(347, "To take a trivial example, which of us ever undertakes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(348, "div")(349, "a", 96);
        \u0275\u0275element(350, "i", 99);
        \u0275\u0275text(351, " Reply");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(352, "li", 76)(353, "div", 34)(354, "div", 35)(355, "div", 101)(356, "div", 92);
        \u0275\u0275element(357, "i", 93);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(358, "div", 37)(359, "h5", 94);
        \u0275\u0275text(360, "Keith McCoy ");
        \u0275\u0275elementStart(361, "small", 95);
        \u0275\u0275text(362, "12 Aug");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(363, "p", 38);
        \u0275\u0275text(364, "Donec posuere vulputate arcu. phasellus accumsan cursus velit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(365, "div")(366, "a", 96);
        \u0275\u0275element(367, "i", 99);
        \u0275\u0275text(368, " Reply");
        \u0275\u0275elementEnd()()()()()()()()()();
        \u0275\u0275elementStart(369, "div", 33)(370, "div", 20)(371, "div", 8)(372, "div", 9)(373, "div", 70)(374, "h5", 89);
        \u0275\u0275text(375, "Top Visitors");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(376, "div", 47)(377, "a", 48);
        \u0275\u0275element(378, "i", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275template(379, BlogComponent_div_379_Template, 10, 0, "div", 43);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(380, "div", 26)(381, "div", 102)(382, "div", 103)(383, "p", 28);
        \u0275\u0275text(384, "Today");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(385, "h5");
        \u0275\u0275text(386, "1024");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(387, "div", 102)(388, "div", 103)(389, "p", 28);
        \u0275\u0275text(390, "This Month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(391, "h5");
        \u0275\u0275text(392, "12356 ");
        \u0275\u0275elementStart(393, "span", 29);
        \u0275\u0275text(394, "0.2 % ");
        \u0275\u0275element(395, "i", 30);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275element(396, "hr");
        \u0275\u0275elementStart(397, "div")(398, "ul", 75)(399, "li", 104)(400, "div", 105)(401, "h5", 106);
        \u0275\u0275text(402, "California ");
        \u0275\u0275elementStart(403, "span", 107);
        \u0275\u0275text(404, "78%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(405, "div", 108);
        \u0275\u0275element(406, "div", 109);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(407, "li", 104)(408, "div", 105)(409, "h5", 106);
        \u0275\u0275text(410, "Nevada ");
        \u0275\u0275elementStart(411, "span", 107);
        \u0275\u0275text(412, "69%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(413, "div", 108);
        \u0275\u0275element(414, "div", 110);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(415, "li", 104)(416, "div", 105)(417, "h5", 106);
        \u0275\u0275text(418, "Texas ");
        \u0275\u0275elementStart(419, "span", 107);
        \u0275\u0275text(420, "61%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(421, "div", 108);
        \u0275\u0275element(422, "div", 111);
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(423, "div", 4)(424, "div", 33)(425, "div", 20)(426, "div", 8)(427, "div", 34)(428, "div", 70)(429, "h5", 112);
        \u0275\u0275text(430, "Activity");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(431, "div", 47)(432, "a", 48);
        \u0275\u0275element(433, "i", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275template(434, BlogComponent_div_434_Template, 10, 0, "div", 43);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(435, "ngx-simplebar", 113)(436, "ul", 114)(437, "li", 115)(438, "div", 116);
        \u0275\u0275element(439, "i", 117);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(440, "div", 34)(441, "div", 35)(442, "h5", 106);
        \u0275\u0275text(443, "10 Nov ");
        \u0275\u0275element(444, "i", 118);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(445, "div", 37)(446, "div");
        \u0275\u0275text(447, " Posted ");
        \u0275\u0275elementStart(448, "span", 119);
        \u0275\u0275text(449, "Beautiful Day with Friends");
        \u0275\u0275elementEnd();
        \u0275\u0275text(450, " blog... ");
        \u0275\u0275elementStart(451, "a", 120);
        \u0275\u0275text(452, "View");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(453, "li", 121)(454, "div", 116);
        \u0275\u0275element(455, "i", 122);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(456, "div", 34)(457, "div", 35)(458, "h5", 106);
        \u0275\u0275text(459, "08 Nov ");
        \u0275\u0275element(460, "i", 118);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(461, "div", 37)(462, "div");
        \u0275\u0275text(463, " If several languages coalesce, the grammar of the resulting... ");
        \u0275\u0275elementStart(464, "a", 120);
        \u0275\u0275text(465, "Read");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(466, "li", 121)(467, "div", 116);
        \u0275\u0275element(468, "i", 122);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(469, "div", 34)(470, "div", 35)(471, "h5", 106);
        \u0275\u0275text(472, "02 Nov ");
        \u0275\u0275element(473, "i", 118);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(474, "div", 37)(475, "div");
        \u0275\u0275text(476, " Create ");
        \u0275\u0275elementStart(477, "span", 119);
        \u0275\u0275text(478, "Drawing a sketch blog");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(479, "li", 121)(480, "div", 116);
        \u0275\u0275element(481, "i", 122);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(482, "div", 34)(483, "div", 35)(484, "h5", 106);
        \u0275\u0275text(485, "24 Oct ");
        \u0275\u0275element(486, "i", 118);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(487, "div", 37)(488, "div");
        \u0275\u0275text(489, " In enim justo, rhoncus ut, imperdiet a venenatis vitae ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(490, "li", 121)(491, "div", 116);
        \u0275\u0275element(492, "i", 122);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(493, "div", 34)(494, "div", 35)(495, "h5", 106);
        \u0275\u0275text(496, "21 Oct ");
        \u0275\u0275element(497, "i", 118);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(498, "div", 37)(499, "div");
        \u0275\u0275text(500, " Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(501, "div", 123)(502, "a", 124);
        \u0275\u0275text(503, "View More ");
        \u0275\u0275element(504, "i", 125);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(505, "div", 5)(506, "div", 20)(507, "div", 8)(508, "div", 34)(509, "div", 70)(510, "h5", 112);
        \u0275\u0275text(511, "Popular post");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(512, "div", 47)(513, "a", 48);
        \u0275\u0275element(514, "i", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275template(515, BlogComponent_div_515_Template, 10, 0, "div", 43);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(516, "div", 126)(517, "table", 127)(518, "thead")(519, "tr")(520, "th", 128);
        \u0275\u0275text(521, "Post");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(522, "th", 129);
        \u0275\u0275text(523, "Likes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(524, "th", 129);
        \u0275\u0275text(525, "Comments");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(526, "th", 129);
        \u0275\u0275text(527, "Action");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(528, "tbody");
        \u0275\u0275repeaterCreate(529, BlogComponent_For_530_Template, 20, 6, "tr", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275template(531, BlogComponent_ng_template_531_Template, 4, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(47);
        \u0275\u0275classProp("active", ctx.activeOptionButton == "all");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeOptionButton == "1m");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeOptionButton == "6m");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeOptionButton == "1y");
        \u0275\u0275advance(28);
        \u0275\u0275property("chart", ctx.visitorsOptions.chart)("series", ctx.visitorsOptions.series)("legend", ctx.visitorsOptions.legend)("colors", ctx.visitorsOptions.colors)("fill", ctx.visitorsOptions.fill)("dataLabels", ctx.visitorsOptions.dataLabels)("xaxis", ctx.visitorsOptions.xaxis)("stroke", ctx.visitorsOptions.stroke);
        \u0275\u0275advance(447);
        \u0275\u0275repeater(ctx.popularPostData);
      }
    }, dependencies: [PagetitleComponent, NgApexchartsModule, ChartComponent, TabsModule, TabDirective, TabsetComponent, SimplebarAngularModule, SimplebarAngularComponent, BsDropdownModule, BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective], styles: ["\n\n.blog-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.25rem 0 0;\n}\n/*# sourceMappingURL=blog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlogComponent, [{
    type: Component,
    args: [{ selector: "app-blog", imports: [PagetitleComponent, NgApexchartsModule, TabsModule, SimplebarAngularModule, BsDropdownModule], template: `<div class="container-fluid">\r
    <app-page-title title="Blog" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
    <div class="row">\r
        <div class="col-xl-8">\r
            <div class="row">\r
                <div class="col-lg-4">\r
                    <div class="card mini-stats-wid">\r
                        <div class="card-body">\r
                            <div class="d-flex flex-wrap">\r
                                <div class="mr-3">\r
                                    <p class="text-muted mb-2">Total Post</p>\r
                                    <h5 class="mb-0">120</h5>\r
                                </div>\r
                                <div class="avatar-sm ms-auto">\r
                                    <div class="avatar-title bg-light rounded-circle text-primary font-size-20">\r
                                        <i class="bx bxs-book-bookmark"></i>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div class="col-lg-4">\r
                    <div class="card blog-stats-wid">\r
                        <div class="card-body">\r
                            <div class="d-flex flex-wrap">\r
                                <div class="me-3">\r
                                    <p class="text-muted mb-2">Pages</p>\r
                                    <h5 class="mb-0">86</h5>\r
                                </div>\r
                                <div class="avatar-sm ms-auto">\r
                                    <div class="avatar-title bg-light rounded-circle text-primary font-size-20">\r
                                        <i class="bx bxs-note"></i>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="col-lg-4">\r
                    <div class="card blog-stats-wid">\r
                        <div class="card-body">\r
                            <div class="d-flex flex-wrap">\r
                                <div class="mr-3">\r
                                    <p class="text-muted mb-2">Comments</p>\r
                                    <h5 class="mb-0">4,235</h5>\r
                                </div>\r
                                <div class="avatar-sm ms-auto">\r
                                    <div class="avatar-title bg-light rounded-circle text-primary font-size-20">\r
                                        <i class="bx bxs-message-square-dots"></i>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
            <!-- end row -->\r
\r
            <div class="card">\r
                <div class="card-body">\r
                    <div class="d-flex flex-wrap">\r
                        <h5 class="card-title me-2">Visitors</h5>\r
                        <div class="ms-auto">\r
                            <div class="toolbar button-items text-end d-flex gap-2 justify-content-center">\r
                                <button type="button" class="btn btn-light btn-sm" (click)="updateOptions( 'all' )" [class.active]="activeOptionButton=='all'">\r
                                    ALL\r
                                </button>\r
                                <button type="button" class="btn btn-light btn-sm" (click)="updateOptions( '1m' )" [class.active]="activeOptionButton=='1m'">\r
                                    1M\r
                                </button>\r
                                <button type="button" class="btn btn-light btn-sm" (click)="updateOptions( '6m' )" [class.active]="activeOptionButton=='6m'">\r
                                    6M\r
                                </button>\r
                                <button type="button" class="btn btn-light btn-sm active" (click)="updateOptions( '1y' )" [class.active]="activeOptionButton=='1y'">\r
                                    1Y\r
                                </button>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="row text-center">\r
                        <div class="col-lg-4">\r
                            <div class="mt-4">\r
                                <p class="text-muted mb-1">Today</p>\r
                                <h5>1024</h5>\r
                            </div>\r
                        </div>\r
\r
                        <div class="col-lg-4">\r
                            <div class="mt-4">\r
                                <p class="text-muted mb-1">This Month</p>\r
                                <h5>12356 <span class="text-success font-size-13">0.2 % <i class="mdi mdi-arrow-up ms-1"></i></span></h5>\r
                            </div>\r
                        </div>\r
\r
                        <div class="col-lg-4">\r
                            <div class="mt-4">\r
                                <p class="text-muted mb-1">This Year</p>\r
                                <h5>102354 <span class="text-success font-size-13">0.1 % <i class="mdi mdi-arrow-up ms-1"></i></span></h5>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <hr class="mb-4">\r
\r
                    <apx-chart dir="ltr" #chart class="apex-charts" [chart]="visitorsOptions.chart" [series]="visitorsOptions.series" [legend]="visitorsOptions.legend" [colors]="visitorsOptions.colors" [fill]="visitorsOptions.fill" [dataLabels]="visitorsOptions.dataLabels" [xaxis]="visitorsOptions.xaxis" [stroke]="visitorsOptions.stroke">\r
                    </apx-chart>\r
                </div>\r
            </div>\r
        </div>\r
        <!-- end col -->\r
\r
        <div class="col-xl-4">\r
            <div class="card">\r
                <div class="card-body">\r
                    <div class="d-flex">\r
                        <div class="flex-shrink-0 me-3">\r
                            <img src="assets/images/users/avatar-1.jpg" alt="" class="avatar-sm rounded-circle img-thumbnail">\r
                        </div>\r
                        <div class="flex-grow-1">\r
                            <div class="d-flex">\r
                                <div class="flex-grow-1">\r
                                    <div class="text-muted">\r
                                        <h5 class="mb-1">Henry wells</h5>\r
                                        <p class="mb-0">UI / UX Designer</p>\r
                                    </div>\r
\r
                                </div>\r
\r
                                <div class="flex-shrink-0 dropdown ms-2" dropdown>\r
                                    <button class="btn btn-light btn-sm" dropdownToggle type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\r
                                        <i class="bx bxs-cog align-middle me-1"></i> Setting\r
                                    </button>\r
                                    <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>\r
                                        <a class="dropdown-item" href="javascript: void(0);">Action</a>\r
                                        <a class="dropdown-item" href="javascript: void(0);">Another action</a>\r
                                        <a class="dropdown-item" href="javascript: void(0);">Something else</a>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <hr>\r
                            <div class="row">\r
                                <div class="col-4">\r
                                    <div>\r
                                        <p class="text-muted text-truncate mb-2">Total Post</p>\r
                                        <h5 class="mb-0">32</h5>\r
                                    </div>\r
                                </div>\r
                                <div class="col-4">\r
                                    <div>\r
                                        <p class="text-muted text-truncate mb-2">Subscribes</p>\r
                                        <h5 class="mb-0">10k</h5>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <div class="card">\r
                <div class="card-body">\r
                    <div class="d-flex flex-wrap">\r
                        <h5 class="card-title mb-3 me-2">Subscribes</h5>\r
\r
                        <div class="dropdown ms-auto" dropdown>\r
                            <a class="text-muted dropdown-toggle font-size-16" dropdownToggle role="button" data-toggle="dropdown" aria-haspopup="true">\r
                                <i class="mdi mdi-dots-horizontal"></i>\r
                            </a>\r
\r
                            <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>\r
                                <a class="dropdown-item" href="javascript: void(0);">Action</a>\r
                                <a class="dropdown-item" href="javascript: void(0);">Another action</a>\r
                                <a class="dropdown-item" href="javascript: void(0);">Something else here</a>\r
                                <div class="dropdown-divider"></div>\r
                                <a class="dropdown-item" href="javascript: void(0);">Separated link</a>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="d-flex flex-wrap">\r
                        <div>\r
                            <p class="text-muted mb-1">Total Subscribe</p>\r
                            <h4 class="mb-3">10,512</h4>\r
                            <p class="text-success mb-0"><span>0.6 % <i class="mdi mdi-arrow-top-right ms-1"></i></span>\r
                            </p>\r
                        </div>\r
                        <div class="ms-auto align-self-end">\r
                            <i class="bx bx-group display-4 text-light"></i>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <div class="card">\r
                <div class="card-body p-4">\r
                    <div class="text-center">\r
                        <div class="avatar-md mx-auto mb-4">\r
                            <div class="avatar-title bg-light rounded-circle text-primary h1">\r
                                <i class="mdi mdi-email-open"></i>\r
                            </div>\r
                        </div>\r
\r
                        <div class="row justify-content-center">\r
                            <div class="col-xl-10">\r
                                <h4 class="text-primary">Subscribe !</h4>\r
                                <p class="text-muted font-size-14 mb-4">Subscribe our newletter and get notification to\r
                                    stay update.</p>\r
\r
                                <div class="input-group bg-light rounded">\r
                                    <input type="email" class="form-control bg-transparent border-0" placeholder="Enter Email address" aria-label="Recipient's username" aria-describedby="button-addon2">\r
\r
                                    <button class="btn btn-primary" type="button" id="button-addon2">\r
                                        <i class="bx bxs-paper-plane"></i>\r
                                    </button>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <!-- end col -->\r
\r
    </div>\r
    <!-- end row -->\r
\r
    <div class="row">\r
        <div class="col-xl-4 col-lg-6">\r
            <div class="card">\r
                <div class="card-body">\r
                    <div class="d-flex flex-wrap align-items-start">\r
                        <div class="me-2">\r
                            <h5 class="card-title mb-0">Posts</h5>\r
                        </div>\r
                        <div class="ms-auto">\r
\r
                        </div>\r
                    </div>\r
                    <tabset class="nav-tabs nav-tabs-custom card-header-tabs custom-widget-nav ms-auto">\r
                        <tab heading="Recent" class="mt-4">\r
                            <ngx-simplebar style="max-height: 272px;">\r
                                <ul class="list-group list-group-flush">\r
                                    <li class="list-group-item py-3">\r
                                        <div class="d-flex">\r
                                            <div class="me-3">\r
                                                <img src="assets/images/small/img-2.jpg" alt="" class="avatar-md h-auto d-block rounded">\r
                                            </div>\r
\r
                                            <div class="align-self-center overflow-hidden me-auto">\r
                                                <div>\r
                                                    <h5 class="font-size-14 text-truncate"><a href="javascript: void(0);" class="text-dark">Beautiful\r
                                                            Day\r
                                                            with Friends</a>\r
                                                    </h5>\r
                                                    <p class="text-muted mb-0">10 Nov, 2020</p>\r
                                                </div>\r
                                            </div>\r
\r
                                            <div class="dropdown ms-2" dropdown>\r
                                                <a class="text-muted font-size-14" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" dropdownToggle>\r
                                                    <i class="mdi mdi-dots-horizontal"></i>\r
                                                </a>\r
\r
                                                <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>\r
                                                    <a class="dropdown-item" href="javascript:void(0);">Action</a>\r
                                                    <a class="dropdown-item" href="javascript:void(0);">Another\r
                                                        action</a>\r
                                                    <a class="dropdown-item" href="javascript:void(0);">Something\r
                                                        else\r
                                                        here</a>\r
                                                </div>\r
                                            </div>\r
\r
                                        </div>\r
                                    </li>\r
\r
                                    <li class="list-group-item py-3">\r
                                        <div class="d-flex">\r
                                            <div class="me-3">\r
                                                <img src="assets/images/small/img-6.jpg" alt="" class="avatar-md h-auto d-block rounded">\r
                                            </div>\r
                                            <div class="align-self-center overflow-hidden me-auto">\r
                                                <div>\r
                                                    <h5 class="font-size-14 text-truncate"><a href="javascript: void(0);" class="text-dark">Drawing a\r
                                                            sketch</a></h5>\r
                                                    <p class="text-muted mb-0">02 Nov, 2020</p>\r
                                                </div>\r
                                            </div>\r
\r
                                            <div class="dropdown ms-2" dropdown>\r
                                                <a class="text-muted font-size-14" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" dropdownToggle>\r
                                                    <i class="mdi mdi-dots-horizontal"></i>\r
                                                </a>\r
\r
                                                <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>\r
                                                    <a class="dropdown-item" href="javascript:void(0);">Action</a>\r
                                                    <a class="dropdown-item" href="javascript:void(0);">Another\r
                                                        action</a>\r
                                                    <a class="dropdown-item" href="javascript:void(0);">Something\r
                                                        else\r
                                                        here</a>\r
                                                </div>\r
                                            </div>\r
\r
                                        </div>\r
                                    </li>\r
\r
                                    <li class="list-group-item py-3">\r
                                        <div class="d-flex">\r
                                            <div class="me-3">\r
                                                <img src="assets/images/small/img-2.jpg" alt="" class="avatar-md h-auto d-block rounded">\r
                                            </div>\r
\r
                                            <div class="align-self-center overflow-hidden me-auto">\r
                                                <div>\r
                                                    <h5 class="font-size-14 text-truncate"><a href="javascript: void(0);" class="text-dark">Project\r
                                                            discussion with\r
                                                            team</a>\r
                                                    </h5>\r
                                                    <p class="text-muted mb-0">24 Oct, 2020</p>\r
                                                </div>\r
                                            </div>\r
\r
                                            <div class="dropdown ms-2" dropdown>\r
                                                <a class="text-muted font-size-14" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" dropdownToggle>\r
                                                    <i class="mdi mdi-dots-horizontal"></i>\r
                                                </a>\r
\r
                                                <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>\r
                                                    <a class="dropdown-item" href="javascript:void(0);">Action</a>\r
                                                    <a class="dropdown-item" href="javascript:void(0);">Another\r
                                                        action</a>\r
                                                    <a class="dropdown-item" href="javascript:void(0);">Something\r
                                                        else\r
                                                        here</a>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </li>\r
\r
                                    <li class="list-group-item py-3">\r
                                        <div class="d-flex">\r
                                            <div class="me-3">\r
                                                <img src="assets/images/small/img-1.jpg" alt="" class="avatar-md h-auto d-block rounded">\r
                                            </div>\r
\r
                                            <div class="align-self-center overflow-hidden me-auto">\r
                                                <div>\r
                                                    <h5 class="font-size-14 text-truncate"><a href="javascript: void(0);" class="text-dark">Riding\r
                                                            bike on road</a></h5>\r
                                                    <p class="text-muted mb-0">20 Oct, 2020</p>\r
                                                </div>\r
                                            </div>\r
\r
                                            <div class="dropdown ms-2" dropdown>\r
                                                <a class="text-muted font-size-14" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" dropdownToggle>\r
                                                    <i class="mdi mdi-dots-horizontal"></i>\r
                                                </a>\r
\r
                                                <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>\r
                                                    <a class="dropdown-item" href="javascript:void(0);">Action</a>\r
                                                    <a class="dropdown-item" href="javascript:void(0);">Another\r
                                                        action</a>\r
                                                    <a class="dropdown-item" href="javascript:void(0);">Something\r
                                                        else\r
                                                        here</a>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </li>\r
                                </ul>\r
                            </ngx-simplebar>\r
                        </tab>\r
                        <tab heading="Popular" class="mt-4">\r
                            <ngx-simplebar style="height: 272px;">\r
                                <ul class="list-group list-group-flush">\r
\r
                                    <li class="list-group-item py-3">\r
                                        <div class="d-flex">\r
                                            <div class="me-3">\r
                                                <img src="assets/images/small/img-6.jpg" alt="" class="avatar-md h-auto d-block rounded">\r
                                            </div>\r
\r
                                            <div class="align-self-center overflow-hidden me-auto">\r
                                                <div>\r
                                                    <h5 class="font-size-14 text-truncate"><a href="javascript: void(0);" class="text-dark">Drawing a\r
                                                            sketch</a></h5>\r
                                                    <p class="text-muted mb-0">02 Nov, 2020</p>\r
                                                </div>\r
                                            </div>\r
\r
                                            <div class="dropdown ms-2" dropdown>\r
                                                <a class="text-muted font-size-14" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" dropdownToggle>\r
                                                    <i class="mdi mdi-dots-horizontal"></i>\r
                                                </a>\r
\r
                                                <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>\r
                                                    <a class="dropdown-item" href="javascript:void(0);">Action</a>\r
                                                    <a class="dropdown-item" href="javascript:void(0);">Another\r
                                                        action</a>\r
                                                    <a class="dropdown-item" href="javascript:void(0);">Something\r
                                                        else\r
                                                        here</a>\r
                                                </div>\r
                                            </div>\r
\r
                                        </div>\r
                                    </li>\r
\r
                                    <li class="list-group-item py-3">\r
                                        <div class="d-flex">\r
                                            <div class="me-3">\r
                                                <img src="assets/images/small/img-2.jpg" alt="" class="avatar-md h-auto d-block rounded">\r
                                            </div>\r
\r
                                            <div class="align-self-center overflow-hidden me-auto">\r
                                                <div>\r
                                                    <h5 class="font-size-14 text-truncate"><a href="javascript: void(0);" class="text-dark">Beautiful\r
                                                            Day\r
                                                            with Friends</a>\r
                                                    </h5>\r
                                                    <p class="text-muted mb-0">10 Nov, 2020</p>\r
                                                </div>\r
                                            </div>\r
                                            <div class="dropdown ms-2" dropdown>\r
                                                <a class="text-muted font-size-14" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" dropdownToggle>\r
                                                    <i class="mdi mdi-dots-horizontal"></i>\r
                                                </a>\r
\r
                                                <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>\r
                                                    <a class="dropdown-item" href="javascript:void(0);">Action</a>\r
                                                    <a class="dropdown-item" href="javascript:void(0);">Another\r
                                                        action</a>\r
                                                    <a class="dropdown-item" href="javascript:void(0);">Something\r
                                                        else\r
                                                        here</a>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </li>\r
\r
                                    <li class="list-group-item py-3">\r
                                        <div class="d-flex">\r
                                            <div class="me-3">\r
                                                <img src="assets/images/small/img-1.jpg" alt="" class="avatar-md h-auto d-block rounded">\r
                                            </div>\r
\r
                                            <div class="align-self-center overflow-hidden me-auto">\r
                                                <div>\r
                                                    <h5 class="font-size-14 text-truncate"><a href="javascript: void(0);" class="text-dark">Riding\r
                                                            bike on\r
                                                            road</a></h5>\r
                                                    <p class="text-muted mb-0">20 Oct, 2020</p>\r
                                                </div>\r
                                            </div>\r
                                            <div class="dropdown ms-2" dropdown>\r
                                                <a class="text-muted font-size-14" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" dropdownToggle>\r
                                                    <i class="mdi mdi-dots-horizontal"></i>\r
                                                </a>\r
\r
                                                <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>\r
                                                    <a class="dropdown-item" href="javascript:void(0);">Action</a>\r
                                                    <a class="dropdown-item" href="javascript:void(0);">Another\r
                                                        action</a>\r
                                                    <a class="dropdown-item" href="javascript:void(0);">Something\r
                                                        else\r
                                                        here</a>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </li>\r
\r
                                    <li class="list-group-item py-3">\r
                                        <div class="d-flex">\r
                                            <div class="me-3">\r
                                                <img src="assets/images/small/img-2.jpg" alt="" class="avatar-md h-auto d-block rounded">\r
                                            </div>\r
\r
                                            <div class="align-self-center overflow-hidden me-auto">\r
                                                <div>\r
                                                    <h5 class="font-size-14 text-truncate"><a href="javascript: void(0);" class="text-dark">Project\r
                                                            discussion with\r
                                                            team</a>\r
                                                    </h5>\r
                                                    <p class="text-muted mb-0">24 Oct, 2020</p>\r
                                                </div>\r
                                            </div>\r
                                            <div class="dropdown ms-2" dropdown>\r
                                                <a class="text-muted font-size-14" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" dropdownToggle>\r
                                                    <i class="mdi mdi-dots-horizontal"></i>\r
                                                </a>\r
\r
                                                <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>\r
                                                    <a class="dropdown-item" href="javascript:void(0);">Action</a>\r
                                                    <a class="dropdown-item" href="javascript:void(0);">Another\r
                                                        action</a>\r
                                                    <a class="dropdown-item" href="javascript:void(0);">Something\r
                                                        else\r
                                                        here</a>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </li>\r
                                </ul>\r
                            </ngx-simplebar>\r
                        </tab>\r
                    </tabset>\r
                </div>\r
            </div>\r
        </div>\r
        <!-- end col -->\r
\r
        <div class="col-xl-4 col-lg-6">\r
            <div class="card">\r
                <div class="card-body">\r
                    <div class="d-flex flex-wrap">\r
                        <div class="mr-2">\r
                            <h5 class="card-title mb-3">Comments</h5>\r
                        </div>\r
                        <div class="dropdown ms-auto" dropdown>\r
                            <a class="text-muted dropdown-toggle font-size-16" dropdownToggle role="button" data-toggle="dropdown" aria-haspopup="true">\r
                                <i class="mdi mdi-dots-horizontal"></i>\r
                            </a>\r
\r
                            <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>\r
                                <a class="dropdown-item" href="javascript: void(0);">Action</a>\r
                                <a class="dropdown-item" href="javascript: void(0);">Another action</a>\r
                                <a class="dropdown-item" href="javascript: void(0);">Something else here</a>\r
                                <div class="dropdown-divider"></div>\r
                                <a class="dropdown-item" href="javascript: void(0);">Separated link</a>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <ngx-simplebar style="height: 310px;">\r
                        <ul class="list-group list-group-flush">\r
                            <li class="list-group-item py-3">\r
                                <div class="d-flex">\r
                                    <div class="flex-shrink-0 me-3">\r
\r
                                        <div class="avatar-xs">\r
                                            <div class="avatar-title rounded-circle bg-light text-primary">\r
                                                <i class="bx bxs-user"></i>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                    <div class="flex-grow-1">\r
                                        <h5 class="font-size-14 mb-1">Delores Williams <small class="text-muted float-end">1 hr Ago</small></h5>\r
                                        <p class="text-muted">If several languages coalesce, the grammar of the\r
                                            resulting of the individual</p>\r
                                        <div>\r
                                            <a href="javascript: void(0);" class="text-success"><i class="mdi mdi-reply mr-1"></i> Reply</a>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </li>\r
\r
                            <li class="list-group-item py-3">\r
                                <div class="d-flex">\r
                                    <div class="flex-shrink-0 me-3">\r
                                        <div class="avatar-xs">\r
                                            <img src="assets/images/users/avatar-2.jpg" alt="" class="img-fluid d-block rounded-circle">\r
                                        </div>\r
                                    </div>\r
                                    <div class="flex-grow-1">\r
                                        <h5 class="font-size-14 mb-1">Clarence Smith <small class="text-muted float-end">2 hrs Ago</small></h5>\r
                                        <p class="text-muted">Neque porro quisquam est, qui dolorem ipsum quia dolor\r
                                            sit\r
                                            amet</p>\r
                                        <div>\r
                                            <a href="javascript: void(0);" class="text-success"><i class="mdi mdi-reply"></i> Reply</a>\r
                                        </div>\r
\r
                                        <div class="d-flex pt-3">\r
                                            <div class="flex-shrink-0 me-3">\r
                                                <div class="avatar-xs">\r
                                                    <div class="avatar-title rounded-circle bg-light text-primary">\r
                                                        <i class="bx bxs-user"></i>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                            <div class="flex-grow-1">\r
                                                <h5 class="font-size-14 mb-1">Silvia Martinez <small class="text-muted float-end">2 hrs Ago</small></h5>\r
                                                <p class="text-muted">To take a trivial example, which of us ever\r
                                                    undertakes</p>\r
                                                <div>\r
                                                    <a href="javascript: void(0);" class="text-success"><i class="mdi mdi-reply"></i> Reply</a>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </li>\r
\r
                            <li class="list-group-item py-3">\r
                                <div class="d-flex">\r
                                    <div class="flex-shrink-0 me-3">\r
                                        <div class="avatar-xs me-3">\r
                                            <div class="avatar-title rounded-circle bg-light text-primary">\r
                                                <i class="bx bxs-user"></i>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                    <div class="flex-grow-1">\r
                                        <h5 class="font-size-14 mb-1">Keith McCoy <small class="text-muted float-end">12\r
                                                Aug</small></h5>\r
                                        <p class="text-muted">Donec posuere vulputate arcu. phasellus accumsan\r
                                            cursus\r
                                            velit</p>\r
                                        <div>\r
                                            <a href="javascript: void(0);" class="text-success"><i class="mdi mdi-reply"></i> Reply</a>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </li>\r
                        </ul>\r
                    </ngx-simplebar>\r
                </div>\r
            </div>\r
        </div>\r
        <!-- end col -->\r
\r
        <div class="col-xl-4">\r
            <div class="card">\r
                <div class="card-body">\r
                    <div class="d-flex flex-wrap">\r
                        <div class="me-2">\r
                            <h5 class="card-title mb-3">Top Visitors</h5>\r
                        </div>\r
                        <div class="dropdown ms-auto" dropdown>\r
                            <a class="text-muted dropdown-toggle font-size-16" dropdownToggle role="button" data-toggle="dropdown" aria-haspopup="true">\r
                                <i class="mdi mdi-dots-horizontal"></i>\r
                            </a>\r
                            <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>\r
                                <a class="dropdown-item" href="javascript: void(0);">Action</a>\r
                                <a class="dropdown-item" href="javascript: void(0);">Another action</a>\r
                                <a class="dropdown-item" href="javascript: void(0);">Something else here</a>\r
                                <div class="dropdown-divider"></div>\r
                                <a class="dropdown-item" href="javascript: void(0);">Separated link</a>\r
                            </div>\r
                        </div>\r
                    </div>\r
                    <div class="row text-center">\r
                        <div class="col-6">\r
                            <div class="mt-3">\r
                                <p class="text-muted mb-1">Today</p>\r
                                <h5>1024</h5>\r
                            </div>\r
                        </div>\r
\r
                        <div class="col-6">\r
                            <div class="mt-3">\r
                                <p class="text-muted mb-1">This Month</p>\r
                                <h5>12356 <span class="text-success font-size-13">0.2 % <i class="mdi mdi-arrow-up ms-1"></i></span></h5>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <hr>\r
\r
                    <div>\r
                        <ul class="list-group list-group-flush">\r
                            <li class="list-group-item">\r
                                <div class="py-2">\r
                                    <h5 class="font-size-14">California <span class="float-end">78%</span></h5>\r
                                    <div class="progress animated-progess progress-sm">\r
                                        <div class="progress-bar" role="progressbar" style="width: 78%" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"></div>\r
                                    </div>\r
                                </div>\r
                            </li>\r
                            <li class="list-group-item">\r
                                <div class="py-2">\r
                                    <h5 class="font-size-14">Nevada <span class="float-end">69%</span></h5>\r
                                    <div class="progress animated-progess progress-sm">\r
                                        <div class="progress-bar bg-warning" role="progressbar" style="width: 69%" aria-valuenow="69" aria-valuemin="0" aria-valuemax="100"></div>\r
                                    </div>\r
                                </div>\r
                            </li>\r
                            <li class="list-group-item">\r
                                <div class="py-2">\r
                                    <h5 class="font-size-14">Texas <span class="float-end">61%</span></h5>\r
                                    <div class="progress animated-progess progress-sm">\r
                                        <div class="progress-bar bg-success" role="progressbar" style="width: 61%" aria-valuenow="61" aria-valuemin="0" aria-valuemax="100"></div>\r
                                    </div>\r
                                </div>\r
                            </li>\r
                        </ul>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <!-- end col -->\r
    </div>\r
    <!-- end row -->\r
\r
\r
    <div class="row">\r
        <div class="col-xl-4">\r
            <div class="card">\r
                <div class="card-body">\r
                    <div class="d-flex">\r
                        <div class="me-2">\r
                            <h5 class="card-title mb-4">Activity</h5>\r
                        </div>\r
                        <div class="dropdown ms-auto" dropdown>\r
                            <a class="text-muted dropdown-toggle font-size-16" dropdownToggle role="button" data-toggle="dropdown" aria-haspopup="true">\r
                                <i class="mdi mdi-dots-horizontal"></i>\r
                            </a>\r
\r
                            <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>\r
                                <a class="dropdown-item" href="javascript: void(0);">Action</a>\r
                                <a class="dropdown-item" href="javascript: void(0);">Another action</a>\r
                                <a class="dropdown-item" href="javascript: void(0);">Something else here</a>\r
                                <div class="dropdown-divider"></div>\r
                                <a class="dropdown-item" href="javascript: void(0);">Separated link</a>\r
                            </div>\r
                        </div>\r
                    </div>\r
                    <ngx-simplebar style="height: 285px;">\r
                        <ul class="verti-timeline list-unstyled">\r
                            <li class="event-list active">\r
                                <div class="event-timeline-dot">\r
                                    <i class="bx bxs-right-arrow-circle font-size-18 bx-fade-right"></i>\r
                                </div>\r
                                <div class="d-flex">\r
                                    <div class="flex-shrink-0 me-3">\r
                                        <h5 class="font-size-14">10 Nov <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>\r
                                        </h5>\r
                                    </div>\r
                                    <div class="flex-grow-1">\r
                                        <div>\r
                                            Posted <span class="fw-semibold">Beautiful Day with Friends</span>\r
                                            blog... <a href="javascript: void(0);">View</a>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </li>\r
                            <li class="event-list">\r
                                <div class="event-timeline-dot">\r
                                    <i class="bx bx-right-arrow-circle font-size-18"></i>\r
                                </div>\r
                                <div class="d-flex">\r
                                    <div class="flex-shrink-0 me-3">\r
                                        <h5 class="font-size-14">08 Nov <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>\r
                                        </h5>\r
                                    </div>\r
                                    <div class="flex-grow-1">\r
                                        <div>\r
                                            If several languages coalesce, the grammar of the resulting... <a href="javascript: void(0);">Read</a>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </li>\r
                            <li class="event-list">\r
                                <div class="event-timeline-dot">\r
                                    <i class="bx bx-right-arrow-circle font-size-18"></i>\r
                                </div>\r
                                <div class="d-flex">\r
                                    <div class="flex-shrink-0 me-3">\r
                                        <h5 class="font-size-14">02 Nov <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>\r
                                        </h5>\r
                                    </div>\r
                                    <div class="flex-grow-1">\r
                                        <div>\r
                                            Create <span class="fw-semibold">Drawing a sketch blog</span>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </li>\r
                            <li class="event-list">\r
                                <div class="event-timeline-dot">\r
                                    <i class="bx bx-right-arrow-circle font-size-18"></i>\r
                                </div>\r
                                <div class="d-flex">\r
                                    <div class="flex-shrink-0 me-3">\r
                                        <h5 class="font-size-14">24 Oct <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>\r
                                        </h5>\r
                                    </div>\r
                                    <div class="flex-grow-1">\r
                                        <div>\r
                                            In enim justo, rhoncus ut, imperdiet a venenatis vitae\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </li>\r
                            <li class="event-list">\r
                                <div class="event-timeline-dot">\r
                                    <i class="bx bx-right-arrow-circle font-size-18"></i>\r
                                </div>\r
                                <div class="d-flex">\r
                                    <div class="flex-shrink-0 me-3">\r
                                        <h5 class="font-size-14">21 Oct <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>\r
                                        </h5>\r
                                    </div>\r
                                    <div class="flex-grow-1">\r
                                        <div>\r
                                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </li>\r
                        </ul>\r
                    </ngx-simplebar>\r
\r
                    <div class="text-center mt-4"><a href="javascript:void(0);" class="btn btn-primary waves-effect waves-light btn-sm">View More <i class="mdi mdi-arrow-right ms-1"></i></a></div>\r
                </div>\r
            </div>\r
            <!-- end card -->\r
        </div>\r
        <!-- end col -->\r
        <div class="col-xl-8">\r
            <div class="card">\r
                <div class="card-body">\r
                    <div class="d-flex">\r
                        <div class="me-2">\r
                            <h5 class="card-title mb-4">Popular post</h5>\r
                        </div>\r
                        <div class="dropdown ms-auto" dropdown>\r
                            <a class="text-muted dropdown-toggle font-size-16" dropdownToggle role="button" data-toggle="dropdown" aria-haspopup="true">\r
                                <i class="mdi mdi-dots-horizontal"></i>\r
                            </a>\r
\r
                            <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>\r
                                <a class="dropdown-item" href="javascript: void(0);">Action</a>\r
                                <a class="dropdown-item" href="javascript: void(0);">Another action</a>\r
                                <a class="dropdown-item" href="javascript: void(0);">Something else here</a>\r
                                <div class="dropdown-divider"></div>\r
                                <a class="dropdown-item" href="javascript: void(0);">Separated link</a>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="table-responsive">\r
                        <table class="table align-middle table-nowrap mb-0">\r
                            <thead>\r
                                <tr>\r
                                    <th scope="col" colspan="2">Post</th>\r
                                    <th scope="col">Likes</th>\r
                                    <th scope="col">Comments</th>\r
                                    <th scope="col">Action</th>\r
                                </tr>\r
                            </thead>\r
                            <tbody>\r
                                @for (item of popularPostData; track $index) {\r
                                <tr>\r
                                    <td style="width: 100px;"><img src="{{item.image}}" alt="" class="avatar-md h-auto d-block rounded"></td>\r
                                    <td>\r
                                        <h5 class="font-size-13 text-truncate mb-1"><a href="javascript: void(0);" class="text-dark">{{item.title}}</a></h5>\r
                                        <p class="text-muted mb-0">{{item.date}}</p>\r
                                    </td>\r
                                    <td><i class="bx bx-like align-middle me-1"></i> {{item.likes}}</td>\r
                                    <td><i class="bx bx-comment-dots align-middle me-1"></i> {{item.comments}}</td>\r
                                    <td>\r
                                        <div class="dropdown" dropdown>\r
                                            <a class="text-muted dropdown-toggle font-size-16" dropdownToggle role="button" data-toggle="dropdown" aria-haspopup="true">\r
                                                <i class="mdi mdi-dots-horizontal"></i>\r
                                            </a>\r
\r
                                            <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>\r
                                                <a class="dropdown-item" href="javascript: void(0);">Action</a>\r
                                                <a class="dropdown-item" href="javascript: void(0);">Another\r
                                                    action</a>\r
                                                <a class="dropdown-item" href="javascript: void(0);">Something else\r
                                                    here</a>\r
                                                <div class="dropdown-divider"></div>\r
                                                <a class="dropdown-item" href="javascript: void(0);">Separated\r
                                                    link</a>\r
                                            </div>\r
                                        </div>\r
                                    </td>\r
                                </tr>}\r
\r
                            </tbody>\r
                        </table>\r
\r
\r
                    </div>\r
                </div>\r
            </div>\r
            <!-- end card -->\r
        </div>\r
        <!-- end col -->\r
    </div>\r
    <!-- end row -->\r
</div>\r
\r
<ng-template #dropdown>\r
    <div class="dropdown ms-2" dropdown>\r
        <a class="text-muted dropdown-toggle font-size-14" dropdownToggle href="javascript: void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\r
            <i class="mdi mdi-dots-horizontal"></i>\r
        </a>\r
\r
        <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>\r
            <a class="dropdown-item" href="javascript::void(0);">Action</a>\r
            <a class="dropdown-item" href="javascript: void(0);">Another\r
                action</a>\r
            <a class="dropdown-item" href="javascript: void(0);">Something\r
                else\r
                here</a>\r
        </div>\r
    </div>\r
</ng-template>`, styles: ["/* src/app/pages/dashboards/blog/blog.component.scss */\n.blog-card .card-body {\n  padding: 1.25rem 0 0;\n}\n/*# sourceMappingURL=blog.component.css.map */\n"] }]
  }], () => [], { chart: [{
    type: ViewChild,
    args: ["chart", { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogComponent, { className: "BlogComponent", filePath: "src/app/pages/dashboards/blog/blog.component.ts", lineNumber: 22 });
})();

// src/app/pages/dashboards/jobs/data.ts
var jobViewChart = {
  series: [{
    name: "Job View",
    data: [36, 21, 65, 22, 35, 50, 87, 98]
  }],
  chart: {
    width: 130,
    height: 46,
    type: "area",
    sparkline: {
      enabled: true
    },
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "smooth",
    width: 1.5
  },
  colors: ["#34c38f"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [50, 100, 100, 100]
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function(seriesName) {
          return "";
        }
      }
    },
    marker: {
      show: false
    }
  }
};
var ApplicationChart = {
  series: [{
    name: "New Application",
    data: [36, 48, 10, 74, 35, 50, 70, 73]
  }],
  chart: {
    width: 130,
    height: 46,
    type: "area",
    sparkline: {
      enabled: true
    },
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "smooth",
    width: 1.5
  },
  colors: ["#34c38f"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [50, 100, 100, 100]
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function(seriesName) {
          return "";
        }
      }
    },
    marker: {
      show: false
    }
  }
};
var ApprovedChart = {
  series: [{
    name: "Total Approved",
    data: [60, 14, 5, 60, 30, 43, 65, 84]
  }],
  chart: {
    width: 130,
    height: 46,
    type: "area",
    sparkline: {
      enabled: true
    },
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "smooth",
    width: 1.5
  },
  colors: ["#34c38f"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [50, 100, 100, 100]
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function(seriesName) {
          return "";
        }
      }
    },
    marker: {
      show: false
    }
  }
};
var RejectedChart = {
  series: [{
    name: "Total Rejected",
    data: [32, 22, 7, 55, 20, 45, 36, 20]
  }],
  chart: {
    width: 130,
    height: 46,
    type: "area",
    sparkline: {
      enabled: true
    },
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "smooth",
    width: 1.5
  },
  colors: ["#f46a6a"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [50, 100, 100, 100]
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function(seriesName) {
          return "";
        }
      }
    },
    marker: {
      show: false
    }
  }
};
var emailSentBarChart2 = {
  series: [{
    name: "Companay",
    type: "column",
    data: [30, 48, 28, 74, 39, 87, 54, 36, 50, 87, 84]
  }, {
    name: "New Jobs",
    type: "column",
    data: [20, 50, 42, 10, 24, 28, 60, 35, 47, 64, 78]
  }, {
    name: "Total Jobs",
    type: "area",
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  }, {
    name: "Job View",
    type: "line",
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  }],
  chart: {
    height: 350,
    type: "line",
    stacked: false,
    toolbar: {
      show: false
    }
  },
  legend: {
    show: true,
    offsetY: 10
  },
  stroke: {
    width: [0, 0, 2, 2],
    curve: "smooth"
  },
  plotOptions: {
    bar: {
      columnWidth: "30%"
    }
  },
  fill: {
    opacity: [1, 1, 0.1, 1],
    gradient: {
      inverseColors: false,
      shade: "light",
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100]
    }
  },
  labels: [
    "01/01/2022",
    "02/01/2022",
    "03/01/2022",
    "04/01/2022",
    "05/01/2022",
    "06/01/2022",
    "07/01/2022",
    "08/01/2022",
    "09/01/2022",
    "10/01/2022",
    "11/01/2022"
  ],
  dataLabels: {
    enabled: false
  },
  colors: ["#556ee6", "#34c38f", "#f1b44c", "#50a5f1"],
  markers: {
    size: 0
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function(y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;
      }
    }
  }
};
var vacancyData = [
  {
    image: "assets/images/companies/airbnb.svg",
    title: "Project Manager",
    brand: "Themesbrand",
    location: "California",
    vacancy: 8
  },
  {
    image: "assets/images/companies/mailchimp.svg",
    title: "Marketing Director",
    brand: "Themesbrand",
    location: "Danemark",
    vacancy: 12
  },
  {
    image: "assets/images/companies/reddit.svg",
    title: "Product Designer",
    brand: "Themesbrand",
    location: "France",
    vacancy: 25
  },
  {
    image: "assets/images/companies/amazon.svg",
    title: "Magento Developer",
    brand: "Themesbrand",
    location: "Hong-Kong",
    vacancy: 8
  },
  {
    image: "assets/images/companies/adobe-photoshop.svg",
    title: "Product Sales Specialist",
    brand: "Themesbrand",
    location: "Louisiana",
    vacancy: 1
  },
  {
    image: "assets/images/companies/line.svg",
    title: "Business Associate",
    brand: "Themesbrand",
    location: "Phoenix",
    vacancy: 15
  }
];
var receivedTimeChart = {
  series: [{
    name: "Received Application",
    data: [34, 44, 54, 21, 12, 43, 33, 80, 66]
  }],
  chart: {
    type: "line",
    height: 378,
    toolbar: {
      show: false
    }
  },
  stroke: {
    width: 3,
    curve: "smooth"
  },
  labels: [
    "8 PM",
    "9 PM",
    "10 PM",
    "11 PM",
    "12 PM",
    "1 AM",
    "2 AM",
    "3 AM",
    "4 AM"
  ],
  dataLabels: {
    enabled: false
  },
  colors: ["#556ee6", "#34c38f", "#f1b44c", "#50a5f1"],
  markers: {
    hover: {
      sizeOffset: 4
    }
  }
};
var recentJobsData = [
  {
    image: "assets/images/companies/wechat.svg",
    title: "Marketing Director",
    brand: "Themesbrand",
    location: "USA",
    time: 53
  },
  {
    image: "assets/images/companies/sass.svg",
    title: "Frontend Developer",
    brand: "Themesbrand",
    location: "Hong-Kong",
    time: 47
  },
  {
    image: "assets/images/companies/adobe.svg",
    title: "React Developer",
    brand: "Creative Agency",
    location: "Danemark",
    time: 1
  },
  {
    image: "assets/images/companies/airbnb.svg",
    title: "NodeJs Developer",
    brand: "Skote Themes",
    location: "Louisiana",
    time: 2
  },
  {
    image: "assets/images/companies/flutter.svg",
    title: "Digital Marketing",
    brand: "Web Technology pvt.Ltd",
    location: "Danemark",
    time: 8
  },
  {
    image: "assets/images/companies/mailchimp.svg",
    title: "Marketing Director",
    brand: "Skote Technology",
    location: "Dominica",
    time: 1
  },
  {
    image: "assets/images/companies/spotify.svg",
    title: "Business Associate",
    brand: "Themesbrand",
    location: "Russia",
    time: 2
  },
  {
    image: "assets/images/companies/reddit.svg",
    title: "Backend Developer",
    brand: "Adobe Agency",
    location: "Malaysia",
    time: 3
  }
];

// src/app/pages/dashboards/jobs/jobs.component.ts
var _c06 = ["chart"];
function JobsComponent_ul_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 85)(1, "li")(2, "a", 86);
    \u0275\u0275text(3, "View Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "li")(5, "a", 87);
    \u0275\u0275text(6, "Download CV");
    \u0275\u0275elementEnd()()();
  }
}
function JobsComponent_ul_154_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 88)(1, "li", 89)(2, "a", 86);
    \u0275\u0275text(3, "View Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "li", 89)(5, "a", 87);
    \u0275\u0275text(6, "Download CV");
    \u0275\u0275elementEnd()()();
  }
}
function JobsComponent_For_165_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 26)(2, "div", 90)(3, "div", 91);
    \u0275\u0275element(4, "img", 92);
    \u0275\u0275elementStart(5, "a", 93)(6, "h5", 94);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 46);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 14)(11, "p", 95);
    \u0275\u0275element(12, "i", 96);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 46)(15, "b");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Vacancy");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate(data_r1.image), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.brand);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", data_r1.location);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r1.vacancy);
  }
}
function JobsComponent_div_176_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "a", 87);
    \u0275\u0275text(2, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 87);
    \u0275\u0275text(4, "Another action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 87);
    \u0275\u0275text(6, "Something else here");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 98);
    \u0275\u0275elementStart(8, "a", 87);
    \u0275\u0275text(9, "Separated link");
    \u0275\u0275elementEnd()();
  }
}
function JobsComponent_For_278_ul_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 104)(1, "li")(2, "a", 105);
    \u0275\u0275text(3, "View Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "li")(5, "a", 87);
    \u0275\u0275text(6, "Apply Now");
    \u0275\u0275elementEnd()()();
  }
}
function JobsComponent_For_278_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "img", 99);
    \u0275\u0275elementStart(2, "div", 100)(3, "h6", 101)(4, "a", 93);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 7);
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "b");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " sec ago");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 48)(12, "button", 102);
    \u0275\u0275element(13, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, JobsComponent_For_278_ul_14_Template, 7, 0, "ul", 103);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275interpolate(data_r2.image), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", data_r2.brand, ", ", data_r2.location, " - ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.time);
  }
}
var JobsComponent = class _JobsComponent {
  constructor() {
    this.isDropup = true;
  }
  ngOnInit() {
    this._fetchData();
  }
  _fetchData() {
    this.jobViewChart = jobViewChart;
    this.ApplicationChart = ApplicationChart;
    this.ApprovedChart = ApprovedChart;
    this.RejectedChart = RejectedChart;
    this.emailSentBarChart = emailSentBarChart2;
    this.vacancyData = vacancyData;
    this.receivedTimeChart = receivedTimeChart;
    this.recentJobsData = recentJobsData;
  }
  // on click chart render
  weeklyreport() {
    this.isActive = "week";
    this.emailSentBarChart.series = [{
      name: "Series A",
      data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48]
    }, {
      name: "Series B",
      data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18]
    }, {
      name: "Series C",
      data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22]
    }];
  }
  monthlyreport() {
    this.isActive = "month";
    this.emailSentBarChart.series = [{
      name: "Series A",
      data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48]
    }, {
      name: "Series B",
      data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22]
    }, {
      name: "Series C",
      data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18]
    }];
  }
  yearlyreport() {
    this.isActive = "year";
    this.emailSentBarChart.series = [{
      name: "Series A",
      data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22]
    }, {
      name: "Series B",
      data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18]
    }, {
      name: "Series C",
      data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48]
    }];
  }
  static {
    this.\u0275fac = function JobsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JobsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JobsComponent, selectors: [["app-jobs"]], viewQuery: function JobsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c06, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
      }
    }, decls: 279, vars: 40, consts: [[1, "container-fluid"], [1, "row", "mb-4"], [1, "col-lg-12"], [1, "d-flex", "align-items-center"], ["src", "assets/images/users/avatar-1.jpg", "alt", "", 1, "avatar-sm", "rounded"], [1, "ms-3", "flex-grow-1"], [1, "mb-2", "card-title"], [1, "text-muted", "mb-0"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"], [1, "bx", "bx-plus", "align-middle"], [1, "row"], [1, "col-lg-3"], [1, "card", "mini-stats-wid"], [1, "card-body"], [1, "d-flex"], [1, "flex-grow-1"], [1, "text-muted", "fw-medium"], [1, "mb-0"], [1, "flex-shrink-0", "align-self-center"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "stroke", "colors", "fill", "tooltip"], [1, "card-body", "border-top", "py-3"], [1, "badge", "badge-soft-success", "me-1"], [1, "bx", "bx-trending-up", "align-bottom", "me-1"], [1, "badge", "badge-soft-danger", "me-1"], [1, "bx", "bx-trending-down", "align-bottom", "me-1"], [1, "col-lg-8"], [1, "card"], [1, "d-sm-flex", "flex-wrap"], [1, "card-title", "mb-4"], [1, "ms-auto"], [1, "nav", "nav-pills"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "nav-link", 3, "click"], ["href", "javascript:void(0);", 1, "nav-link", "active", 3, "click"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "legend", "stroke", "plotOptions", "fill", "labels", "dataLabels", "colors", "markers"], [1, "col-lg-4"], [1, "card-title", "mb-3"], [1, "text-muted"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "btn-sm"], [1, "bx", "bx-user-plus", "align-middle"], ["src", "assets/images/jobs.png", "alt", "", "height", "130"], [1, "bg-light", "p-3", "d-flex", "mb-3", "rounded"], ["src", "assets/images/users/avatar-4.jpg", "alt", "", 1, "avatar-sm", "rounded", "me-3"], [1, "font-size-15", "mb-2"], ["routerLink", "/jobs/candidate-overview", 1, "text-body"], [1, "badge", "badge-soft-info"], [1, "mb-0", "text-muted"], [1, "bx", "bx-map", "text-body", "align-middle"], ["dropdown", "", 1, "dropdown"], ["type", "button", "id", "*dropdownMenuButton11", "data-bs-toggle", "dropdown", "aria-expanded", "false", "dropdownToggle", "", 1, "btn", "btn-soft-primary"], [1, "bx", "bx-dots-vertical-rounded"], ["class", "dropdown-menu dropdown-menu-end", "aria-labelledby", "*dropdownMenuButton11", 4, "dropdownMenu"], [1, "bg-light", "p-3", "d-flex"], ["src", "assets/images/users/avatar-2.jpg", "alt", "", 1, "avatar-sm", "rounded", "me-3"], [1, "badge", "badge-soft-success"], ["dropdown", "", 1, "dropdown", 3, "dropup"], ["type", "button", "id", "*dropdownMenuButton12", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "dropdownToggle", "", 1, "btn", "btn-soft-primary"], ["class", "dropdown-menu", "aria-labelledby", "*dropdownMenuButton12", 4, "dropdownMenu"], [1, "card-title", "mb-4", "flex-grow-1"], ["routerLink", "/jobs/list", 1, "btn", "btn-primary", "btn-sm"], [1, "bx", "bx-right-arrow-alt"], [1, "col-lg-2"], [1, "card-title"], ["dropdown", "", 1, "dropdown", "ms-auto"], ["role", "button", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "dropdownToggle", "", 1, "text-muted", "font-size-16"], [1, "mdi", "mdi-dots-horizontal"], ["class", "dropdown-menu dropdown-menu-end", 4, "dropdownMenu"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "stroke", "colors", "fill"], [2, "max-height", "376px"], [1, "verti-timeline", "list-unstyled"], [1, "event-list"], [1, "event-timeline-dot"], [1, "bx", "bx-right-arrow-circle", "font-size-18"], [1, "flex-shrink-0", "me-3"], ["src", "assets/images/users/avatar-5.jpg", "alt", "", 1, "avatar-xs", "rounded-circle"], [1, "avatar-xs"], [1, "avatar-title", "bg-primary-subtle", "text-primary", "rounded-circle"], [1, "bx", "bx-revision", "font-size-14"], ["href", "javascript: void(0);"], [1, "avatar-title", "bg-primary-subtle", "text-primary", "t", "rounded-circle"], ["src", "assets/images/users/avatar-2.jpg", "alt", "", 1, "avatar-xs", "rounded-circle"], [1, "text-center", "mt-4"], ["href", "javascript: void(0);", 1, "btn", "btn-primary", "waves-effect", "waves-light", "btn-sm"], [1, "mdi", "mdi-arrow-right", "ms-1"], [1, "vstack", "gap-4"], ["aria-labelledby", "*dropdownMenuButton11", 1, "dropdown-menu", "dropdown-menu-end"], ["routerLink", "/jobs/candidate-overview", 1, "dropdown-item"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["aria-labelledby", "*dropdownMenuButton12", 1, "dropdown-menu"], ["role", "menuitem"], [1, "card-body", "p-4"], [1, "text-center", "mb-3"], ["alt", "", 1, "avatar-sm", 3, "src"], ["routerLink", "/jobs/details", 1, "text-body"], [1, "mt-4", "mb-2", "font-size-15"], [1, "mb-0", "flex-grow-1", "text-muted"], [1, "bx", "bx-map", "text-body"], [1, "dropdown-menu", "dropdown-menu-end"], [1, "dropdown-divider"], ["alt", "", "height", "40", 1, "rounded", 3, "src"], [1, "ms-2", "flex-grow-1"], [1, "mb-1", "font-size-15"], ["type", "button", "id", "*dropdownMenuButton1", "data-bs-toggle", "dropdown", "aria-expanded", "false", "dropdownToggle", "", 1, "btn", "btn-light"], ["class", "dropdown-menu dropdown-menu-end", "aria-labelledby", "*dropdownMenuButton1", 4, "dropdownMenu"], ["aria-labelledby", "*dropdownMenuButton1", 1, "dropdown-menu", "dropdown-menu-end"], ["routerLink", "/jobs/details", 1, "dropdown-item"]], template: function JobsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "img", 4);
        \u0275\u0275elementStart(5, "div", 5)(6, "h5", 6);
        \u0275\u0275text(7, "Hello, Henry Franklin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 7);
        \u0275\u0275text(9, "Ready to jump back in?");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div")(11, "a", 8);
        \u0275\u0275element(12, "i", 9);
        \u0275\u0275text(13, " Add New Jobs");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "div", 15)(20, "p", 16);
        \u0275\u0275text(21, "Job View");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "h4", 17);
        \u0275\u0275text(23, "14,487");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 18);
        \u0275\u0275element(25, "apx-chart", 19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "div", 20)(27, "p", 17)(28, "span", 21);
        \u0275\u0275element(29, "i", 22);
        \u0275\u0275text(30, " 18.89%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(31, " Increase last month");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(32, "div", 11)(33, "div", 12)(34, "div", 13)(35, "div", 14)(36, "div", 15)(37, "p", 16);
        \u0275\u0275text(38, "New Application");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "h4", 17);
        \u0275\u0275text(40, "7,402");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 18);
        \u0275\u0275element(42, "apx-chart", 19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "div", 20)(44, "p", 17)(45, "span", 21);
        \u0275\u0275element(46, "i", 22);
        \u0275\u0275text(47, " 24.07%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(48, " Increase last month");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(49, "div", 11)(50, "div", 12)(51, "div", 13)(52, "div", 14)(53, "div", 15)(54, "p", 16);
        \u0275\u0275text(55, "Total Approved");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "h4", 17);
        \u0275\u0275text(57, "12,487");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "div", 18);
        \u0275\u0275element(59, "apx-chart", 19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(60, "div", 20)(61, "p", 17)(62, "span", 21);
        \u0275\u0275element(63, "i", 22);
        \u0275\u0275text(64, " 8.41%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(65, " Increase last month");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(66, "div", 11)(67, "div", 12)(68, "div", 13)(69, "div", 14)(70, "div", 15)(71, "p", 16);
        \u0275\u0275text(72, "Total Rejected");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "h4", 17);
        \u0275\u0275text(74, "12,487");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(75, "div", 18);
        \u0275\u0275element(76, "apx-chart", 19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(77, "div", 20)(78, "p", 17)(79, "span", 23);
        \u0275\u0275element(80, "i", 24);
        \u0275\u0275text(81, " 20.63%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(82, " Decrease last month");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(83, "div", 10)(84, "div", 25)(85, "div", 26)(86, "div", 13)(87, "div", 27)(88, "h4", 28);
        \u0275\u0275text(89, "Statistics Applications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "div", 29)(91, "ul", 30)(92, "li", 31)(93, "a", 32);
        \u0275\u0275listener("click", function JobsComponent_Template_a_click_93_listener() {
          return ctx.weeklyreport();
        });
        \u0275\u0275text(94, "Week");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "li", 31)(96, "a", 32);
        \u0275\u0275listener("click", function JobsComponent_Template_a_click_96_listener() {
          return ctx.monthlyreport();
        });
        \u0275\u0275text(97, "Month");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(98, "li", 31)(99, "a", 33);
        \u0275\u0275listener("click", function JobsComponent_Template_a_click_99_listener() {
          return ctx.yearlyreport();
        });
        \u0275\u0275text(100, " Year");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275element(101, "apx-chart", 34);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(102, "div", 35)(103, "div", 26)(104, "div", 13)(105, "div", 14)(106, "div")(107, "h4", 36);
        \u0275\u0275text(108, "Invite your friends to Skote");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "p", 37);
        \u0275\u0275text(110, "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "div")(112, "a", 38);
        \u0275\u0275element(113, "i", 39);
        \u0275\u0275text(114, " Invite Friends");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(115, "div");
        \u0275\u0275element(116, "img", 40);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(117, "div", 26)(118, "div", 13)(119, "h4", 36);
        \u0275\u0275text(120, "Popular Candidate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "carousel")(122, "slide")(123, "div", 41);
        \u0275\u0275element(124, "img", 42);
        \u0275\u0275elementStart(125, "div", 15)(126, "h5", 43)(127, "a", 44);
        \u0275\u0275text(128, "Stephen Hadley");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "span", 45);
        \u0275\u0275text(130, "Freelance");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(131, "p", 46);
        \u0275\u0275element(132, "i", 47);
        \u0275\u0275text(133, " Germany ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(134, "div")(135, "div", 48)(136, "button", 49);
        \u0275\u0275element(137, "i", 50);
        \u0275\u0275elementEnd();
        \u0275\u0275template(138, JobsComponent_ul_138_Template, 7, 0, "ul", 51);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(139, "div", 52);
        \u0275\u0275element(140, "img", 53);
        \u0275\u0275elementStart(141, "div", 15)(142, "h5", 43)(143, "a", 44);
        \u0275\u0275text(144, "Charles Brown");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "span", 54);
        \u0275\u0275text(146, "Full Time");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(147, "p", 46);
        \u0275\u0275element(148, "i", 47);
        \u0275\u0275text(149, " Cambodia ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(150, "div")(151, "div", 55)(152, "button", 56);
        \u0275\u0275element(153, "i", 50);
        \u0275\u0275elementEnd();
        \u0275\u0275template(154, JobsComponent_ul_154_Template, 7, 0, "ul", 57);
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(155, "div", 10)(156, "div", 2)(157, "div", 14)(158, "h4", 58);
        \u0275\u0275text(159, "New Job Vacancy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "div")(161, "a", 59);
        \u0275\u0275text(162, "View All ");
        \u0275\u0275element(163, "i", 60);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275repeaterCreate(164, JobsComponent_For_165_Template, 18, 6, "div", 61, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(166, "div", 10)(167, "div", 35)(168, "div", 26)(169, "div", 13)(170, "div", 14)(171, "h4", 62);
        \u0275\u0275text(172, "Applications Received Time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(173, "div", 63)(174, "a", 64);
        \u0275\u0275element(175, "i", 65);
        \u0275\u0275elementEnd();
        \u0275\u0275template(176, JobsComponent_div_176_Template, 10, 0, "div", 66);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(177, "apx-chart", 67);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(178, "div", 35)(179, "div", 26)(180, "div", 13)(181, "h4", 28);
        \u0275\u0275text(182, "Activity Feed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "ngx-simplebar", 68)(184, "ul", 69)(185, "li", 70)(186, "div", 71);
        \u0275\u0275element(187, "i", 72);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(188, "div", 14)(189, "div", 73);
        \u0275\u0275element(190, "img", 74);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(191, "div", 15)(192, "div")(193, "b");
        \u0275\u0275text(194, "Charles Brown");
        \u0275\u0275elementEnd();
        \u0275\u0275text(195, " applied for the job ");
        \u0275\u0275elementStart(196, "b");
        \u0275\u0275text(197, "Sr.frontend Developer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(198, "p", 46);
        \u0275\u0275text(199, "3 min ago");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(200, "li", 70)(201, "div", 71);
        \u0275\u0275element(202, "i", 72);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(203, "div", 14)(204, "div", 73)(205, "div", 75)(206, "div", 76);
        \u0275\u0275element(207, "i", 77);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(208, "div", 15)(209, "div");
        \u0275\u0275text(210, " Your subscription expires today ");
        \u0275\u0275elementStart(211, "a", 78);
        \u0275\u0275text(212, "Renew Now");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(213, "p", 7);
        \u0275\u0275text(214, "53 min ago");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(215, "li", 70)(216, "div", 71);
        \u0275\u0275element(217, "i", 72);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(218, "div", 14)(219, "div", 73)(220, "div", 75)(221, "div", 79);
        \u0275\u0275text(222, " JA ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(223, "div", 15)(224, "div")(225, "b");
        \u0275\u0275text(226, "Jennifer Alexandar");
        \u0275\u0275elementEnd();
        \u0275\u0275text(227, " created a new account as a ");
        \u0275\u0275elementStart(228, "b");
        \u0275\u0275text(229, "Freelance");
        \u0275\u0275elementEnd();
        \u0275\u0275text(230, ". ");
        \u0275\u0275elementStart(231, "p", 7);
        \u0275\u0275text(232, "1 hrs ago");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(233, "li", 70)(234, "div", 71);
        \u0275\u0275element(235, "i", 72);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(236, "div", 14)(237, "div", 73);
        \u0275\u0275element(238, "img", 80);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(239, "div", 15)(240, "div")(241, "b");
        \u0275\u0275text(242, "Mark Ellison");
        \u0275\u0275elementEnd();
        \u0275\u0275text(243, " applied for the job ");
        \u0275\u0275elementStart(244, "b");
        \u0275\u0275text(245, "Project Manager");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(246, "p", 46);
        \u0275\u0275text(247, "3 hrs ago");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(248, "li", 70)(249, "div", 71);
        \u0275\u0275element(250, "i", 72);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(251, "div", 14)(252, "div", 73)(253, "div", 75)(254, "div", 76);
        \u0275\u0275text(255, " AZ ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(256, "div", 15)(257, "div")(258, "b");
        \u0275\u0275text(259, "Acolin Zelton");
        \u0275\u0275elementEnd();
        \u0275\u0275text(260, " created a new account as a ");
        \u0275\u0275elementStart(261, "b");
        \u0275\u0275text(262, "Freelance");
        \u0275\u0275elementEnd();
        \u0275\u0275text(263, ". ");
        \u0275\u0275elementStart(264, "p", 7);
        \u0275\u0275text(265, "1 hrs ago");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(266, "div", 81)(267, "a", 82);
        \u0275\u0275text(268, "View More ");
        \u0275\u0275element(269, "i", 83);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(270, "div", 35)(271, "div", 26)(272, "div", 13)(273, "h4", 28);
        \u0275\u0275text(274, "Recent Added Jobs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(275, "ngx-simplebar", 68)(276, "div", 84);
        \u0275\u0275repeaterCreate(277, JobsComponent_For_278_Template, 15, 6, "div", 14, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(25);
        \u0275\u0275property("series", ctx.jobViewChart.series)("chart", ctx.jobViewChart.chart)("stroke", ctx.jobViewChart.stroke)("colors", ctx.jobViewChart.colors)("fill", ctx.jobViewChart.fill)("tooltip", ctx.jobViewChart.tooltip);
        \u0275\u0275advance(17);
        \u0275\u0275property("series", ctx.ApplicationChart.series)("chart", ctx.ApplicationChart.chart)("stroke", ctx.ApplicationChart.stroke)("colors", ctx.ApplicationChart.colors)("fill", ctx.ApplicationChart.fill)("tooltip", ctx.ApplicationChart.tooltip);
        \u0275\u0275advance(17);
        \u0275\u0275property("series", ctx.jobViewChart.series)("chart", ctx.jobViewChart.chart)("stroke", ctx.jobViewChart.stroke)("colors", ctx.jobViewChart.colors)("fill", ctx.jobViewChart.fill)("tooltip", ctx.jobViewChart.tooltip);
        \u0275\u0275advance(17);
        \u0275\u0275property("series", ctx.RejectedChart.series)("chart", ctx.RejectedChart.chart)("stroke", ctx.RejectedChart.stroke)("colors", ctx.RejectedChart.colors)("fill", ctx.RejectedChart.fill)("tooltip", ctx.RejectedChart.tooltip);
        \u0275\u0275advance(25);
        \u0275\u0275property("series", ctx.emailSentBarChart.series)("chart", ctx.emailSentBarChart.chart)("legend", ctx.emailSentBarChart.legend)("stroke", ctx.emailSentBarChart.stroke)("plotOptions", ctx.emailSentBarChart.plotOptions)("fill", ctx.emailSentBarChart.fill)("labels", ctx.emailSentBarChart.labels)("dataLabels", ctx.emailSentBarChart.dataLabels)("colors", ctx.emailSentBarChart.colors)("markers", ctx.emailSentBarChart.markers);
        \u0275\u0275advance(50);
        \u0275\u0275property("dropup", ctx.isDropup);
        \u0275\u0275advance(13);
        \u0275\u0275repeater(ctx.vacancyData);
        \u0275\u0275advance(13);
        \u0275\u0275property("series", ctx.receivedTimeChart.series)("chart", ctx.receivedTimeChart.chart)("stroke", ctx.receivedTimeChart.stroke)("colors", ctx.receivedTimeChart.colors)("fill", ctx.receivedTimeChart.fill);
        \u0275\u0275advance(100);
        \u0275\u0275repeater(ctx.recentJobsData);
      }
    }, dependencies: [NgApexchartsModule, ChartComponent, SimplebarAngularModule, SimplebarAngularComponent, BsDropdownModule, BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective, CarouselModule, SlideComponent, CarouselComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JobsComponent, [{
    type: Component,
    args: [{ selector: "app-jobs", imports: [NgApexchartsModule, SimplebarAngularModule, BsDropdownModule, CarouselModule], template: `<div class="container-fluid">\r
    <div class="row mb-4">\r
        <div class="col-lg-12">\r
            <div class="d-flex align-items-center">\r
                <img src="assets/images/users/avatar-1.jpg" alt="" class="avatar-sm rounded">\r
                <div class="ms-3 flex-grow-1">\r
                    <h5 class="mb-2 card-title">Hello, Henry Franklin</h5>\r
                    <p class="text-muted mb-0">Ready to jump back in?</p>\r
                </div>\r
                <div>\r
                    <a href="javascript:void(0);" class="btn btn-primary"><i class="bx bx-plus align-middle"></i> Add\r
                        New Jobs</a>\r
                </div>\r
            </div>\r
        </div><!--end col-->\r
    </div><!--end row-->\r
\r
    <div class="row">\r
        <div class="col-lg-3">\r
            <div class="card mini-stats-wid">\r
                <div class="card-body">\r
                    <div class="d-flex">\r
                        <div class="flex-grow-1">\r
                            <p class="text-muted fw-medium">Job View</p>\r
                            <h4 class="mb-0">14,487</h4>\r
                        </div>\r
\r
                        <div class="flex-shrink-0 align-self-center">\r
                            <apx-chart class="apex-charts" dir="ltr" [series]="jobViewChart.series" [chart]="jobViewChart.chart" [stroke]="jobViewChart.stroke" [colors]="jobViewChart.colors" [fill]="jobViewChart.fill" [tooltip]="jobViewChart.tooltip"></apx-chart>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="card-body border-top py-3">\r
                    <p class="mb-0"> <span class="badge badge-soft-success me-1"><i class="bx bx-trending-up align-bottom me-1"></i> 18.89%</span> Increase last month</p>\r
                </div>\r
            </div>\r
        </div><!--end col-->\r
        <div class="col-lg-3">\r
            <div class="card mini-stats-wid">\r
                <div class="card-body">\r
                    <div class="d-flex">\r
                        <div class="flex-grow-1">\r
                            <p class="text-muted fw-medium">New Application</p>\r
                            <h4 class="mb-0">7,402</h4>\r
                        </div>\r
\r
                        <div class="flex-shrink-0 align-self-center">\r
                            <apx-chart class="apex-charts" dir="ltr" [series]="ApplicationChart.series" [chart]="ApplicationChart.chart" [stroke]="ApplicationChart.stroke" [colors]="ApplicationChart.colors" [fill]="ApplicationChart.fill" [tooltip]="ApplicationChart.tooltip"></apx-chart>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="card-body border-top py-3">\r
                    <p class="mb-0"> <span class="badge badge-soft-success me-1"><i class="bx bx-trending-up align-bottom me-1"></i> 24.07%</span> Increase last month</p>\r
                </div>\r
            </div>\r
        </div><!--end col-->\r
        <div class="col-lg-3">\r
            <div class="card mini-stats-wid">\r
                <div class="card-body">\r
                    <div class="d-flex">\r
                        <div class="flex-grow-1">\r
                            <p class="text-muted fw-medium">Total Approved</p>\r
                            <h4 class="mb-0">12,487</h4>\r
                        </div>\r
\r
                        <div class="flex-shrink-0 align-self-center">\r
                            <apx-chart class="apex-charts" dir="ltr" [series]="jobViewChart.series" [chart]="jobViewChart.chart" [stroke]="jobViewChart.stroke" [colors]="jobViewChart.colors" [fill]="jobViewChart.fill" [tooltip]="jobViewChart.tooltip"></apx-chart>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="card-body border-top py-3">\r
                    <p class="mb-0"> <span class="badge badge-soft-success me-1"><i class="bx bx-trending-up align-bottom me-1"></i> 8.41%</span> Increase last month</p>\r
                </div>\r
            </div>\r
        </div><!--end col-->\r
        <div class="col-lg-3">\r
            <div class="card mini-stats-wid">\r
                <div class="card-body">\r
                    <div class="d-flex">\r
                        <div class="flex-grow-1">\r
                            <p class="text-muted fw-medium">Total Rejected</p>\r
                            <h4 class="mb-0">12,487</h4>\r
                        </div>\r
\r
                        <div class="flex-shrink-0 align-self-center">\r
                            <apx-chart class="apex-charts" dir="ltr" [series]="RejectedChart.series" [chart]="RejectedChart.chart" [stroke]="RejectedChart.stroke" [colors]="RejectedChart.colors" [fill]="RejectedChart.fill" [tooltip]="RejectedChart.tooltip"></apx-chart>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="card-body border-top py-3">\r
                    <p class="mb-0"> <span class="badge badge-soft-danger me-1"><i class="bx bx-trending-down align-bottom me-1"></i> 20.63%</span> Decrease last month</p>\r
                </div>\r
            </div>\r
        </div><!--end col-->\r
    </div><!--end row-->\r
\r
    <div class="row">\r
        <div class="col-lg-8">\r
            <div class="card">\r
                <div class="card-body">\r
                    <div class="d-sm-flex flex-wrap">\r
                        <h4 class="card-title mb-4">Statistics Applications</h4>\r
                        <div class="ms-auto">\r
                            <ul class="nav nav-pills">\r
                                <li class="nav-item">\r
                                    <a class="nav-link" href="javascript:void(0);" (click)="weeklyreport()">Week</a>\r
                                </li>\r
                                <li class=" nav-item">\r
                                    <a class="nav-link" href="javascript:void(0);" (click)="monthlyreport()">Month</a>\r
                                </li>\r
                                <li class="nav-item">\r
                                    <a class="nav-link active" href="javascript:void(0);" (click)="yearlyreport()"> Year</a>\r
                                </li>\r
                            </ul>\r
                        </div>\r
                    </div>\r
                    <apx-chart dir="ltr" class="apex-charts" [series]="emailSentBarChart.series" [chart]="emailSentBarChart.chart" [legend]="emailSentBarChart.legend" [stroke]="emailSentBarChart.stroke" [plotOptions]="emailSentBarChart.plotOptions" [fill]="emailSentBarChart.fill" [labels]="emailSentBarChart.labels" [dataLabels]="emailSentBarChart.dataLabels" [colors]="emailSentBarChart.colors" [markers]="emailSentBarChart.markers">\r
                    </apx-chart>\r
                </div>\r
            </div>\r
        </div><!--end col-->\r
        <div class="col-lg-4">\r
            <div class="card">\r
                <div class="card-body">\r
                    <div class="d-flex">\r
                        <div>\r
                            <h4 class="card-title mb-3">Invite your friends to Skote</h4>\r
                            <p class="text-muted">Nor again is there anyone who loves or pursues or desires to obtain\r
                                pain of itself, because it is pain, but because occasionally.</p>\r
                            <div>\r
                                <a href="javascript:void(0);" class="btn btn-primary btn-sm"><i class='bx bx-user-plus align-middle'></i> Invite Friends</a>\r
                            </div>\r
                        </div>\r
                        <div>\r
                            <img src="assets/images/jobs.png" alt="" height="130">\r
                        </div>\r
                    </div>\r
                </div>\r
            </div><!--end card-->\r
            <div class="card">\r
                <div class="card-body">\r
                    <h4 class="card-title mb-3">Popular Candidate</h4>\r
                    <carousel>\r
                        <slide>\r
                            <div class="bg-light p-3 d-flex mb-3 rounded">\r
                                <img src="assets/images/users/avatar-4.jpg" alt="" class="avatar-sm rounded me-3">\r
                                <div class="flex-grow-1">\r
                                    <h5 class="font-size-15 mb-2"><a routerLink="/jobs/candidate-overview" class="text-body">Stephen Hadley</a> <span class="badge badge-soft-info">Freelance</span></h5>\r
                                    <p class="mb-0 text-muted"><i class="bx bx-map text-body align-middle"></i> Germany\r
                                    </p>\r
                                </div>\r
                                <div>\r
                                    <div class="dropdown" dropdown>\r
                                        <button class="btn btn-soft-primary" type="button" id="*dropdownMenuButton11" data-bs-toggle="dropdown" aria-expanded="false" dropdownToggle>\r
                                            <i class='bx bx-dots-vertical-rounded'></i>\r
                                        </button>\r
                                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="*dropdownMenuButton11" *dropdownMenu>\r
                                            <li><a class="dropdown-item" routerLink="/jobs/candidate-overview">View\r
                                                    Details</a></li>\r
                                            <li><a class="dropdown-item" href="javascript:void(0);">Download CV</a></li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div class="bg-light p-3 d-flex">\r
                                <img src="assets/images/users/avatar-2.jpg" alt="" class="avatar-sm rounded me-3">\r
                                <div class="flex-grow-1">\r
                                    <h5 class="font-size-15 mb-2"><a routerLink="/jobs/candidate-overview" class="text-body">Charles Brown</a> <span class="badge badge-soft-success">Full Time</span></h5>\r
                                    <p class="mb-0 text-muted"><i class="bx bx-map text-body align-middle"></i> Cambodia\r
                                    </p>\r
                                </div>\r
                                <div>\r
                                    <div class="dropdown" [dropup]="isDropup" dropdown>\r
                                        <button class="btn btn-soft-primary" type="button" id="*dropdownMenuButton12" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" dropdownToggle>\r
                                            <i class='bx bx-dots-vertical-rounded'></i>\r
                                        </button>\r
                                        <ul class="dropdown-menu" aria-labelledby="*dropdownMenuButton12" *dropdownMenu>\r
                                            <li role="menuitem"><a class="dropdown-item" routerLink="/jobs/candidate-overview">View\r
                                                    Details</a></li>\r
                                            <li role="menuitem"><a class="dropdown-item" href="javascript:void(0);">Download CV</a></li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </slide>\r
                    </carousel>\r
                </div>\r
            </div><!--end card-->\r
        </div><!--end col-->\r
    </div><!--end row-->\r
\r
    <div class="row">\r
        <div class="col-lg-12">\r
            <div class="d-flex">\r
                <h4 class="card-title mb-4 flex-grow-1">New Job Vacancy</h4>\r
                <div>\r
                    <a routerLink="/jobs/list" class="btn btn-primary btn-sm">View All <i class="bx bx-right-arrow-alt"></i></a>\r
                </div>\r
            </div>\r
        </div><!--end col-->\r
        @for (data of vacancyData; track $index) {\r
        <div class="col-lg-2">\r
            <div class="card">\r
                <div class="card-body p-4">\r
                    <div class="text-center mb-3">\r
                        <img src="{{data.image}}" alt="" class="avatar-sm">\r
                        <a routerLink="/jobs/details" class="text-body">\r
                            <h5 class="mt-4 mb-2 font-size-15">{{data.title}}</h5>\r
                        </a>\r
                        <p class="mb-0 text-muted">{{data.brand}}</p>\r
                    </div>\r
\r
                    <div class="d-flex">\r
                        <p class="mb-0 flex-grow-1 text-muted"><i class="bx bx-map text-body"></i> {{data.location}}</p>\r
                        <p class="mb-0 text-muted"><b>{{data.vacancy}}</b> Vacancy</p>\r
                    </div>\r
                </div>\r
            </div><!--end card-->\r
        </div>}<!--end col-->\r
\r
    </div><!--end row-->\r
\r
    <div class="row">\r
        <div class="col-lg-4">\r
            <div class="card">\r
                <div class="card-body">\r
                    <div class="d-flex">\r
                        <h4 class="card-title">Applications Received Time</h4>\r
                        <div class="dropdown ms-auto" dropdown>\r
                            <a class="text-muted font-size-16" role="button" data-bs-toggle="dropdown" aria-haspopup="true" dropdownToggle>\r
                                <i class="mdi mdi-dots-horizontal"></i>\r
                            </a>\r
\r
                            <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>\r
                                <a class="dropdown-item" href="javascript:void(0);">Action</a>\r
                                <a class="dropdown-item" href="javascript:void(0);">Another action</a>\r
                                <a class="dropdown-item" href="javascript:void(0);">Something else here</a>\r
                                <div class="dropdown-divider"></div>\r
                                <a class="dropdown-item" href="javascript:void(0);">Separated link</a>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <apx-chart class="apex-charts" dir="ltr" [series]="receivedTimeChart.series" [chart]="receivedTimeChart.chart" [stroke]="receivedTimeChart.stroke" [colors]="receivedTimeChart.colors" [fill]="receivedTimeChart.fill"></apx-chart>\r
                </div>\r
            </div><!--end card-->\r
        </div><!--end col-->\r
        <div class="col-lg-4">\r
            <div class="card">\r
                <div class="card-body">\r
                    <h4 class="card-title mb-4">Activity Feed</h4>\r
                    <ngx-simplebar style="max-height: 376px;">\r
                        <ul class="verti-timeline list-unstyled">\r
                            <li class="event-list">\r
                                <div class="event-timeline-dot">\r
                                    <i class="bx bx-right-arrow-circle font-size-18"></i>\r
                                </div>\r
                                <div class="d-flex">\r
                                    <div class="flex-shrink-0 me-3">\r
                                        <img src="assets/images/users/avatar-5.jpg" alt="" class="avatar-xs rounded-circle">\r
                                    </div>\r
                                    <div class="flex-grow-1">\r
                                        <div>\r
                                            <b>Charles Brown</b> applied for the job <b>Sr.frontend Developer</b>\r
                                            <p class="mb-0 text-muted">3 min ago</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </li>\r
                            <li class="event-list">\r
                                <div class="event-timeline-dot">\r
                                    <i class="bx bx-right-arrow-circle font-size-18"></i>\r
                                </div>\r
                                <div class="d-flex">\r
                                    <div class="flex-shrink-0 me-3">\r
                                        <div class="avatar-xs">\r
                                            <div class="avatar-title bg-primary-subtle text-primary rounded-circle">\r
                                                <i class='bx bx-revision font-size-14'></i>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                    <div class="flex-grow-1">\r
                                        <div>\r
                                            Your subscription expires today <a href="javascript: void(0);">Renew Now</a>\r
                                            <p class="text-muted mb-0">53 min ago</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </li>\r
                            <li class="event-list">\r
                                <div class="event-timeline-dot">\r
                                    <i class="bx bx-right-arrow-circle font-size-18"></i>\r
                                </div>\r
                                <div class="d-flex">\r
                                    <div class="flex-shrink-0 me-3">\r
                                        <div class="avatar-xs">\r
                                            <div class="avatar-title bg-primary-subtle text-primary t rounded-circle">\r
                                                JA\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                    <div class="flex-grow-1">\r
                                        <div>\r
                                            <b>Jennifer Alexandar</b> created a new account as a <b>Freelance</b>.\r
                                            <p class="text-muted mb-0">1 hrs ago</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </li>\r
                            <li class="event-list">\r
                                <div class="event-timeline-dot">\r
                                    <i class="bx bx-right-arrow-circle font-size-18"></i>\r
                                </div>\r
                                <div class="d-flex">\r
                                    <div class="flex-shrink-0 me-3">\r
                                        <img src="assets/images/users/avatar-2.jpg" alt="" class="avatar-xs rounded-circle">\r
                                    </div>\r
                                    <div class="flex-grow-1">\r
                                        <div>\r
                                            <b>Mark Ellison</b> applied for the job <b>Project Manager</b>\r
                                            <p class="mb-0 text-muted">3 hrs ago</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </li>\r
                            <li class="event-list">\r
                                <div class="event-timeline-dot">\r
                                    <i class="bx bx-right-arrow-circle font-size-18"></i>\r
                                </div>\r
                                <div class="d-flex">\r
                                    <div class="flex-shrink-0 me-3">\r
                                        <div class="avatar-xs">\r
                                            <div class="avatar-title bg-primary-subtle text-primary rounded-circle">\r
                                                AZ\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                    <div class="flex-grow-1">\r
                                        <div>\r
                                            <b>Acolin Zelton</b> created a new account as a <b>Freelance</b>.\r
                                            <p class="text-muted mb-0">1 hrs ago</p>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </li>\r
                        </ul>\r
                        <div class="text-center mt-4"><a href="javascript: void(0);" class="btn btn-primary waves-effect waves-light btn-sm">View More <i class="mdi mdi-arrow-right ms-1"></i></a></div>\r
                    </ngx-simplebar>\r
                </div>\r
            </div><!--end card-->\r
        </div><!--end col-->\r
        <div class="col-lg-4">\r
            <div class="card">\r
                <div class="card-body">\r
                    <h4 class="card-title mb-4">Recent Added Jobs</h4>\r
                    <ngx-simplebar style="max-height: 376px;">\r
                        <div class="vstack gap-4">\r
                            @for (data of recentJobsData; track $index) {\r
                            <div class="d-flex">\r
                                <img src="{{data.image}}" alt="" height="40" class="rounded">\r
                                <div class="ms-2 flex-grow-1">\r
                                    <h6 class="mb-1 font-size-15"><a routerLink="/jobs/details" class="text-body">{{data.title}}</a></h6>\r
                                    <p class="text-muted mb-0">{{data.brand}}, {{data.location}} - <b>{{data.time}}</b>\r
                                        sec ago</p>\r
                                </div>\r
                                <div class="dropdown" dropdown>\r
                                    <button class="btn btn-light" type="button" id="*dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" dropdownToggle>\r
                                        <i class="bx bx-dots-vertical-rounded"></i>\r
                                    </button>\r
                                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="*dropdownMenuButton1" *dropdownMenu>\r
                                        <li><a class="dropdown-item" routerLink="/jobs/details">View Details</a></li>\r
                                        <li><a class="dropdown-item" href="javascript:void(0);">Apply Now</a></li>\r
                                    </ul>\r
                                </div>\r
                            </div>}\r
                        </div>\r
                    </ngx-simplebar>\r
                </div>\r
            </div><!--end card-->\r
        </div><!--end col-->\r
    </div><!--end row-->\r
\r
</div> <!-- container-fluid -->` }]
  }], () => [], { chart: [{
    type: ViewChild,
    args: ["chart", { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JobsComponent, { className: "JobsComponent", filePath: "src/app/pages/dashboards/jobs/jobs.component.ts", lineNumber: 20 });
})();

// src/app/pages/dashboards/dashboards-routing.module.ts
var routes = [
  {
    path: "default",
    component: DefaultComponent
  },
  {
    path: "saas",
    component: SaasComponent
  },
  {
    path: "crypto",
    component: CryptoComponent
  },
  {
    path: "blog",
    component: BlogComponent
  },
  {
    path: "jobs",
    component: JobsComponent
  }
];
var DashboardsRoutingModule = class _DashboardsRoutingModule {
  static {
    this.\u0275fac = function DashboardsRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DashboardsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/pages/dashboards/dashboards.module.ts
var DashboardsModule = class _DashboardsModule {
  static {
    this.\u0275fac = function DashboardsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DashboardsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [BsDropdownConfig], imports: [DashboardsRoutingModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardsModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        DashboardsRoutingModule
      ],
      providers: [BsDropdownConfig]
    }]
  }], null, null);
})();

export {
  LoaderComponent,
  selectchatData,
  selectData,
  DefaultComponent,
  DashboardsModule
};
//# sourceMappingURL=chunk-HZ7USBNZ.js.map
