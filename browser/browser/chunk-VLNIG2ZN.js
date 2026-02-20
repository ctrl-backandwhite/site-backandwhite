import {
  CdkStep,
  CdkStepLabel,
  CdkStepperModule,
  CdkStepperNext,
  CdkStepperPrevious,
  NgStepperComponent,
  NgStepperModule
} from "./chunk-W4VCLMXM.js";
import {
  fetchorderData
} from "./chunk-NUQ7UBHJ.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-5H32OP7N.js";
import {
  SimplebarAngularComponent,
  SimplebarAngularModule
} from "./chunk-OKDSBIXU.js";
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
  ModalModule
} from "./chunk-BYTMBZOH.js";
import {
  TabDirective,
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
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-ICQKGMTO.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  NgClass,
  NgModule,
  NgTemplateOutlet,
  RouterModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction3,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BM6E27KQ.js";

// src/app/store/Crypto/crypto-selector.ts
var selectDataState = createFeatureSelector("Order");
var selectData = createSelector(selectDataState, (state) => state.orders);
var selectDataLoading = createSelector(selectDataState, (state) => state.loading);
var selectDataError = createSelector(selectDataState, (state) => state.error);

// src/app/pages/crypto/wallet/data.ts
var OveviewChart = {
  series: [{
    type: "area",
    name: "BTC",
    data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
  }, {
    type: "area",
    name: "ETH",
    data: [28, 41, 52, 42, 13, 18, 29, 18, 36, 51, 55, 35]
  }, {
    type: "line",
    name: "LTC",
    data: [45, 52, 38, 24, 33, 65, 45, 75, 54, 18, 28, 10]
  }],
  chart: {
    height: 220,
    type: "line",
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "smooth",
    width: 2,
    dashArray: [0, 0, 3]
  },
  fill: {
    type: "solid",
    opacity: [0.15, 0.05, 1]
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  },
  colors: ["#f1b44c", "#3452e1", "#50a5f1"]
};

// src/app/pages/crypto/wallet/wallet.component.ts
function WalletComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "a", 81);
    \u0275\u0275text(2, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 81);
    \u0275\u0275text(4, "Another action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 81);
    \u0275\u0275text(6, "Something else here");
    \u0275\u0275elementEnd()();
  }
}
function WalletComponent_For_168_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 82);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const table_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", table_r1.id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r1.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r1.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", table_r1.coin, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r1.usd);
  }
}
function WalletComponent_For_215_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "td");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const table_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", table_r2.id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r2.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", table_r2.type, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", table_r2.coin, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r2.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r2.usd);
  }
}
function WalletComponent_For_215_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275conditionalCreate(1, WalletComponent_For_215_Conditional_1_Template, 12, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const table_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(table_r2.type == "Buy" ? 1 : -1);
  }
}
function WalletComponent_For_258_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "td");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const table_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(table_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", table_r3.type, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r3.coin);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r3.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r3.usd);
  }
}
function WalletComponent_For_258_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275conditionalCreate(1, WalletComponent_For_258_Conditional_1_Template, 12, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const table_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(table_r3.type == "Sell" ? 1 : -1);
  }
}
var WalletComponent = class _WalletComponent {
  constructor(store) {
    this.store = store;
    this.endItem = 10;
    this.direction = "asc";
    this.pageSize = 10;
    this.startItem = 0;
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Crypto" }, { label: "Wallets", active: true }];
    this.OveviewChart = OveviewChart;
    this.store.dispatch(fetchorderData());
    this.store.select(selectData).subscribe((data) => {
      this.orderList = data;
      this.returnedArray = data;
      this.orderList = this.returnedArray.slice(0, 10);
    });
  }
  // pageper item selected
  updatePageSize() {
    this.orderList = this.returnedArray.slice(0, this.pageSize);
  }
  /**
  * Sort table data
  * @param param0 sort the column
  *
  */
  // Sort Data
  onSort(column) {
    if (this.direction == "asc") {
      this.direction = "desc";
    } else {
      this.direction = "asc";
    }
    const sortedArray = [...this.storagetable];
    sortedArray.sort((a, b) => {
      const res = this.compare(a[column], b[column]);
      return this.direction === "asc" ? res : -res;
    });
    this.storagetable = sortedArray;
  }
  compare(v1, v2) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
  }
  // pagechanged
  pageChanged(event) {
    this.startItem = (event.page - 1) * event.itemsPerPage;
    this.endItem = event.page * event.itemsPerPage;
    this.filterdata();
  }
  // filterdata
  filterdata() {
    let data = this.returnedArray;
    if (this.term) {
      data = this.returnedArray.filter((el) => el.type.toLowerCase().includes(this.term.toLowerCase()));
    }
    this.orderList = data.slice(this.startItem, this.endItem);
  }
  static {
    this.\u0275fac = function WalletComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WalletComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WalletComponent, selectors: [["app-wallet"]], features: [\u0275\u0275ProvidersFeature([DecimalPipe])], decls: 263, vars: 30, consts: [[1, "container-fluid"], ["title", "Wallets", 3, "breadcrumbItems"], [1, "row"], [1, "col-xl-4"], [1, "card"], [1, "card-body"], [1, "d-flex"], [1, "flex-shrink-0", "me-4"], [1, "mdi", "mdi-account-circle", "text-primary", "h1"], [1, "flex-grow-1"], [1, "text-muted"], [1, "mb-1"], [1, "mb-0"], ["dropdown", "", 1, "dropdown", "ms-2"], ["href", "javascript: void(0);", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "dropdownToggle", "", 1, "text-muted", "dropdown-toggle"], [1, "mdi", "mdi-dots-horizontal", "font-size-18"], ["class", "dropdown-menu dropdown-menu-end", 4, "dropdownMenu"], [1, "card-body", "border-top"], [1, "col-sm-6"], [1, "text-muted", "mb-2"], [1, "text-sm-end", "mt-4", "mt-sm-0"], [1, "badge", "bg-success", "ms-1", "align-bottom"], [1, "text-muted", "mb-4"], [1, "text-center"], [1, "col-sm-4"], [1, "font-size-24", "text-primary", "mb-2"], [1, "bx", "bx-send"], [1, "mt-3"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "btn-sm", "w-md"], [1, "mt-4", "mt-sm-0"], [1, "bx", "bx-import"], [1, "bx", "bx-wallet"], [1, "col-xl-8"], [1, "card", "mini-stats-wid"], [1, "flex-shrink-0", "me-3", "align-self-center"], [1, "mdi", "mdi-bitcoin", "h2", "text-warning", "mb-0"], [1, "font-size-14", "text-muted"], [1, "mdi", "mdi-ethereum", "h2", "text-primary", "mb-0"], [1, "mdi", "mdi-litecoin", "h2", "text-info", "mb-0"], [1, "card-title", "mb-3"], ["id", "overview-chart", "dir", "ltr", 1, "apex-charts"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "colors", "stroke", "dataLabels", "fill", "xaxis"], [1, "col-lg-12"], [1, "card-title", "mb-4"], [1, "nav-tabs", "nav-tabs-custom"], ["heading", "All", 1, "mt-4"], [1, "row", "mb-md-2"], [1, "col-sm-12", "col-md-6"], ["id", "tickets-table_length", 1, "dataTables_length", "text-center", "text-md-start"], [1, "d-inline-flex", "align-items-center"], ["name", "tickets-table_length", "aria-controls", "tickets-table", "name", "pageSize", 1, "custom-select", "custom-select-sm", "form-control", "form-control-sm", "mx-2", 3, "ngModelChange", "change", "ngModel"], [3, "ngValue"], ["id", "tickets-table_filter", 1, "dataTables_filter", "text-md-end", "text-center"], ["type", "text", "id", "select", "name", "searchTerm", "aria-controls", "tickets-table", 1, "form-control", "form-control-sm", "ms-2", 3, "ngModelChange", "ngModel"], ["id", "basic-datatable", 1, "table", "datatables", "dt-responsive", "nowrap", "table-responsive"], ["sortable", "id", 3, "click"], ["sortable", "date", 3, "click"], ["sortable", "type", 3, "click"], ["sortable", "currency", 3, "click"], ["sortable", "amount", 3, "click"], ["sortable", "usd", 3, "click"], [1, "row", "justify-content-md-between", "align-items-md-center", "mt-2"], [1, "col-sm-12", "col-md-5"], ["id", "tickets-table_info", "role", "status", "aria-live", "polite", 1, "dataTables_info", "mb-2"], [1, "text-md-right", "float-md-end", "pagination-rounded"], [1, "pagination", "pagination-rounded", "justify-content-end", "mb-2"], [3, "pageChanged", "totalItems", "itemsPerPage"], ["heading", "Buy", 1, "mt-4"], ["id", "tickets-table_length", 1, "dataTables_length"], ["name", "tickets-table_length", "aria-controls", "tickets-table", "name", "pageSize", 1, "custom-select", "custom-select-sm", "form-control", "form-control-sm", "mx-2"], ["id", "tickets-table_filter", 1, "dataTables_filter", "text-md-end"], ["type", "text", "name", "searchTerm", "aria-controls", "tickets-table", 1, "form-control", "form-control-sm", "ms-2"], ["id", "basic-datatable", 1, "table", "datatables", "dt-responsive", "nowrap"], ["sortable", "id", 3, "sort"], ["sortable", "date", 3, "sort"], ["sortable", "type", 3, "sort"], ["sortable", "currency", 3, "sort"], ["sortable", "amount", 3, "sort"], ["sortable", "usd", 3, "sort"], ["heading", "Sell", 1, "mt-4"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript: void(0);", 1, "dropdown-item"], [1, "text-body", "fw-bold"]], template: function WalletComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        \u0275\u0275element(8, "i", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 9)(10, "div", 10)(11, "h5");
        \u0275\u0275text(12, "Henry Wells");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "p", 11);
        \u0275\u0275text(14, "henrywells@abc.com");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "p", 12);
        \u0275\u0275text(16, "Id no: #SK0234");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 13)(18, "a", 14);
        \u0275\u0275element(19, "i", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275template(20, WalletComponent_div_20_Template, 7, 0, "div", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 17)(22, "div", 2)(23, "div", 18)(24, "div")(25, "p", 19);
        \u0275\u0275text(26, "Available Balance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "h5");
        \u0275\u0275text(28, "$ 9148.23");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 18)(30, "div", 20)(31, "p", 19);
        \u0275\u0275text(32, "Since last month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "h5");
        \u0275\u0275text(34, "+ $ 248.35 ");
        \u0275\u0275elementStart(35, "span", 21);
        \u0275\u0275text(36, "+ 1.3 %");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(37, "div", 17)(38, "p", 22);
        \u0275\u0275text(39, "In this month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 23)(41, "div", 2)(42, "div", 24)(43, "div")(44, "div", 25);
        \u0275\u0275element(45, "i", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "p", 19);
        \u0275\u0275text(47, "Send");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "h5");
        \u0275\u0275text(49, "$ 654.42");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 27)(51, "a", 28);
        \u0275\u0275text(52, "Send");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(53, "div", 24)(54, "div", 29)(55, "div", 25);
        \u0275\u0275element(56, "i", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "p", 19);
        \u0275\u0275text(58, "receive");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "h5");
        \u0275\u0275text(60, "$ 1054.32");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 27)(62, "a", 28);
        \u0275\u0275text(63, "Receive");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(64, "div", 24)(65, "div", 29)(66, "div", 25);
        \u0275\u0275element(67, "i", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "p", 19);
        \u0275\u0275text(69, "Withdraw");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "h5");
        \u0275\u0275text(71, "$ 824.34");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div", 27)(73, "a", 28);
        \u0275\u0275text(74, "Withdraw");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(75, "div", 32)(76, "div", 2)(77, "div", 24)(78, "div", 33)(79, "div", 5)(80, "div", 6)(81, "div", 34);
        \u0275\u0275element(82, "i", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "div", 9)(84, "p", 19);
        \u0275\u0275text(85, "Bitcoin Wallet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "h5", 12);
        \u0275\u0275text(87, "1.02356 BTC ");
        \u0275\u0275elementStart(88, "span", 36);
        \u0275\u0275text(89, "= $ 9148.00");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(90, "div", 24)(91, "div", 33)(92, "div", 5)(93, "div", 6)(94, "div", 34);
        \u0275\u0275element(95, "i", 37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "div", 9)(97, "p", 19);
        \u0275\u0275text(98, "Ethereum Wallet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "h5", 12);
        \u0275\u0275text(100, "0.04121 ETH ");
        \u0275\u0275elementStart(101, "span", 36);
        \u0275\u0275text(102, "= $ 8235.00");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(103, "div", 24)(104, "div", 33)(105, "div", 5)(106, "div", 6)(107, "div", 34);
        \u0275\u0275element(108, "i", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "div", 9)(110, "p", 19);
        \u0275\u0275text(111, "litecoin Wallet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "h5", 12);
        \u0275\u0275text(113, "0.00356 BTC ");
        \u0275\u0275elementStart(114, "span", 36);
        \u0275\u0275text(115, "= $ 4721.00");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(116, "div", 4)(117, "div", 5)(118, "h4", 39);
        \u0275\u0275text(119, "Overview");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "div");
        \u0275\u0275element(121, "div", 40)(122, "apx-chart", 41);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(123, "div", 2)(124, "div", 42)(125, "div", 4)(126, "div", 5)(127, "h4", 43);
        \u0275\u0275text(128, "Activities");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "tabset", 44)(130, "tab", 45)(131, "div", 46)(132, "div", 47)(133, "div", 48)(134, "label", 49);
        \u0275\u0275text(135, "Show ");
        \u0275\u0275elementStart(136, "select", 50);
        \u0275\u0275twoWayListener("ngModelChange", function WalletComponent_Template_select_ngModelChange_136_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.pageSize, $event) || (ctx.pageSize = $event);
          return $event;
        });
        \u0275\u0275listener("change", function WalletComponent_Template_select_change_136_listener() {
          return ctx.updatePageSize();
        });
        \u0275\u0275elementStart(137, "option", 51);
        \u0275\u0275text(138, "10");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "option", 51);
        \u0275\u0275text(140, "25");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "option", 51);
        \u0275\u0275text(142, "50");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "option", 51);
        \u0275\u0275text(144, "100");
        \u0275\u0275elementEnd()();
        \u0275\u0275text(145, " entries");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(146, "div", 47)(147, "div", 52)(148, "label", 49);
        \u0275\u0275text(149, "Search: ");
        \u0275\u0275elementStart(150, "input", 53);
        \u0275\u0275twoWayListener("ngModelChange", function WalletComponent_Template_input_ngModelChange_150_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.term, $event) || (ctx.term = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function WalletComponent_Template_input_ngModelChange_150_listener() {
          return ctx.filterdata();
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(151, "table", 54)(152, "thead")(153, "tr")(154, "th", 55);
        \u0275\u0275listener("click", function WalletComponent_Template_th_click_154_listener() {
          return ctx.onSort("id");
        });
        \u0275\u0275text(155, "ID No");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "th", 56);
        \u0275\u0275listener("click", function WalletComponent_Template_th_click_156_listener() {
          return ctx.onSort("date");
        });
        \u0275\u0275text(157, "Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "th", 57);
        \u0275\u0275listener("click", function WalletComponent_Template_th_click_158_listener() {
          return ctx.onSort("type");
        });
        \u0275\u0275text(159, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "th", 58);
        \u0275\u0275listener("click", function WalletComponent_Template_th_click_160_listener() {
          return ctx.onSort("currency");
        });
        \u0275\u0275text(161, "Currency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "th", 59);
        \u0275\u0275listener("click", function WalletComponent_Template_th_click_162_listener() {
          return ctx.onSort("amount");
        });
        \u0275\u0275text(163, "Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "th", 60);
        \u0275\u0275listener("click", function WalletComponent_Template_th_click_164_listener() {
          return ctx.onSort("usd");
        });
        \u0275\u0275text(165, "Amount in USD");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(166, "tbody");
        \u0275\u0275repeaterCreate(167, WalletComponent_For_168_Template, 13, 6, "tr", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(169, "div", 61)(170, "div", 62)(171, "div", 63);
        \u0275\u0275text(172);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(173, "div", 62)(174, "div", 64)(175, "ul", 65)(176, "pagination", 66);
        \u0275\u0275listener("pageChanged", function WalletComponent_Template_pagination_pageChanged_176_listener($event) {
          return ctx.pageChanged($event);
        });
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(177, "tab", 67)(178, "div", 46)(179, "div", 47)(180, "div", 68)(181, "label", 49);
        \u0275\u0275text(182, "Show ");
        \u0275\u0275elementStart(183, "select", 69)(184, "option", 51);
        \u0275\u0275text(185, "10");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(186, "option", 51);
        \u0275\u0275text(187, "25");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(188, "option", 51);
        \u0275\u0275text(189, "50");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(190, "option", 51);
        \u0275\u0275text(191, "100");
        \u0275\u0275elementEnd()();
        \u0275\u0275text(192, " entries");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(193, "div", 47)(194, "div", 70)(195, "label", 49);
        \u0275\u0275text(196, "Search: ");
        \u0275\u0275element(197, "input", 71);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(198, "table", 72)(199, "thead")(200, "tr")(201, "th", 73);
        \u0275\u0275listener("sort", function WalletComponent_Template_th_sort_201_listener($event) {
          return ctx.onSort($event);
        });
        \u0275\u0275text(202, "ID No");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(203, "th", 74);
        \u0275\u0275listener("sort", function WalletComponent_Template_th_sort_203_listener($event) {
          return ctx.onSort($event);
        });
        \u0275\u0275text(204, "Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(205, "th", 75);
        \u0275\u0275listener("sort", function WalletComponent_Template_th_sort_205_listener($event) {
          return ctx.onSort($event);
        });
        \u0275\u0275text(206, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(207, "th", 76);
        \u0275\u0275listener("sort", function WalletComponent_Template_th_sort_207_listener($event) {
          return ctx.onSort($event);
        });
        \u0275\u0275text(208, "Currency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(209, "th", 77);
        \u0275\u0275listener("sort", function WalletComponent_Template_th_sort_209_listener($event) {
          return ctx.onSort($event);
        });
        \u0275\u0275text(210, "Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(211, "th", 78);
        \u0275\u0275listener("sort", function WalletComponent_Template_th_sort_211_listener($event) {
          return ctx.onSort($event);
        });
        \u0275\u0275text(212, "Amount in USD");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(213, "tbody");
        \u0275\u0275repeaterCreate(214, WalletComponent_For_215_Template, 2, 1, "tr", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(216, "div", 61)(217, "div", 62)(218, "div", 63);
        \u0275\u0275text(219);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(220, "tab", 79)(221, "div", 46)(222, "div", 47)(223, "div", 68)(224, "label", 49);
        \u0275\u0275text(225, "Show ");
        \u0275\u0275elementStart(226, "select", 69)(227, "option", 51);
        \u0275\u0275text(228, "10");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(229, "option", 51);
        \u0275\u0275text(230, "25");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(231, "option", 51);
        \u0275\u0275text(232, "50");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(233, "option", 51);
        \u0275\u0275text(234, "100");
        \u0275\u0275elementEnd()();
        \u0275\u0275text(235, " entries");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(236, "div", 47)(237, "div", 70)(238, "label", 49);
        \u0275\u0275text(239, "Search: ");
        \u0275\u0275element(240, "input", 71);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(241, "table", 72)(242, "thead")(243, "tr")(244, "th", 55);
        \u0275\u0275listener("click", function WalletComponent_Template_th_click_244_listener() {
          return ctx.onSort("id");
        });
        \u0275\u0275text(245, "ID No");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(246, "th", 56);
        \u0275\u0275listener("click", function WalletComponent_Template_th_click_246_listener() {
          return ctx.onSort("date");
        });
        \u0275\u0275text(247, "Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(248, "th", 57);
        \u0275\u0275listener("click", function WalletComponent_Template_th_click_248_listener() {
          return ctx.onSort("type");
        });
        \u0275\u0275text(249, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(250, "th", 58);
        \u0275\u0275listener("click", function WalletComponent_Template_th_click_250_listener() {
          return ctx.onSort("coin");
        });
        \u0275\u0275text(251, "Currency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(252, "th", 59);
        \u0275\u0275listener("click", function WalletComponent_Template_th_click_252_listener() {
          return ctx.onSort("value");
        });
        \u0275\u0275text(253, "Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(254, "th", 60);
        \u0275\u0275listener("click", function WalletComponent_Template_th_click_254_listener() {
          return ctx.onSort("usd");
        });
        \u0275\u0275text(255, "Amount in USD");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(256, "tbody");
        \u0275\u0275repeaterCreate(257, WalletComponent_For_258_Template, 2, 1, "tr", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(259, "div", 61)(260, "div", 62)(261, "div", 63);
        \u0275\u0275text(262);
        \u0275\u0275elementEnd()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(121);
        \u0275\u0275property("series", ctx.OveviewChart.series)("chart", ctx.OveviewChart.chart)("colors", ctx.OveviewChart.colors)("stroke", ctx.OveviewChart.stroke)("dataLabels", ctx.OveviewChart.dataLabels)("fill", ctx.OveviewChart.fill)("xaxis", ctx.OveviewChart.xaxis);
        \u0275\u0275advance(14);
        \u0275\u0275twoWayProperty("ngModel", ctx.pageSize);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", 10);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngValue", 25);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngValue", 50);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngValue", 100);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.term);
        \u0275\u0275advance(17);
        \u0275\u0275repeater(ctx.orderList);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2(" Showing ", ctx.orderList == null ? null : ctx.orderList.length, " of ", ctx.returnedArray == null ? null : ctx.returnedArray.length, " entries ");
        \u0275\u0275advance(4);
        \u0275\u0275property("totalItems", ctx.returnedArray == null ? null : ctx.returnedArray.length)("itemsPerPage", 10);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngValue", 10);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngValue", 25);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngValue", 50);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngValue", 100);
        \u0275\u0275advance(24);
        \u0275\u0275repeater(ctx.orderList);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2(" Showing ", ctx.orderList == null ? null : ctx.orderList.length, " of ", ctx.returnedArray == null ? null : ctx.returnedArray.length, " entries ");
        \u0275\u0275advance(8);
        \u0275\u0275property("ngValue", 10);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngValue", 25);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngValue", 50);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngValue", 100);
        \u0275\u0275advance(24);
        \u0275\u0275repeater(ctx.orderList);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2(" Showing ", ctx.orderList == null ? null : ctx.orderList.length, " of ", ctx.returnedArray == null ? null : ctx.returnedArray.length, " entries ");
      }
    }, dependencies: [PagetitleComponent, NgApexchartsModule, ChartComponent, TabsModule, TabDirective, TabsetComponent, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, PaginationModule, PaginationComponent, BsDropdownModule, BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WalletComponent, [{
    type: Component,
    args: [{ selector: "app-wallet", providers: [DecimalPipe], imports: [PagetitleComponent, NgApexchartsModule, TabsModule, FormsModule, PaginationModule, BsDropdownModule], template: `<div class="container-fluid">\r
\r
  <app-page-title title="Wallets" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
\r
  <div class="row">\r
    <div class="col-xl-4">\r
      <div class="card">\r
        <div class="card-body">\r
          <div class="d-flex">\r
            <div class="flex-shrink-0 me-4">\r
              <i class="mdi mdi-account-circle text-primary h1"></i>\r
            </div>\r
\r
            <div class="flex-grow-1">\r
              <div class="text-muted">\r
                <h5>Henry Wells</h5>\r
                <p class="mb-1">henrywells&#64;abc.com</p>\r
                <p class="mb-0">Id no: #SK0234</p>\r
              </div>\r
\r
            </div>\r
\r
            <div class="dropdown ms-2" dropdown>\r
              <a class="text-muted dropdown-toggle" href="javascript: void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" dropdownToggle>\r
                <i class="mdi mdi-dots-horizontal font-size-18"></i>\r
              </a>\r
              <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>\r
                <a class="dropdown-item" href="javascript: void(0);">Action</a>\r
                <a class="dropdown-item" href="javascript: void(0);">Another action</a>\r
                <a class="dropdown-item" href="javascript: void(0);">Something else here</a>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="card-body border-top">\r
\r
          <div class="row">\r
            <div class="col-sm-6">\r
              <div>\r
                <p class="text-muted mb-2">Available Balance</p>\r
                <h5>$ 9148.23</h5>\r
              </div>\r
            </div>\r
            <div class="col-sm-6">\r
              <div class="text-sm-end mt-4 mt-sm-0">\r
                <p class="text-muted mb-2">Since last month</p>\r
                <h5>+ $ 248.35 <span class="badge bg-success ms-1 align-bottom">+ 1.3 %</span></h5>\r
\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="card-body border-top">\r
          <p class="text-muted mb-4">In this month</p>\r
          <div class="text-center">\r
            <div class="row">\r
              <div class="col-sm-4">\r
                <div>\r
                  <div class="font-size-24 text-primary mb-2">\r
                    <i class="bx bx-send"></i>\r
                  </div>\r
\r
                  <p class="text-muted mb-2">Send</p>\r
                  <h5>$ 654.42</h5>\r
\r
                  <div class="mt-3">\r
                    <a href="javascript:void(0);" class="btn btn-primary btn-sm w-md">Send</a>\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="col-sm-4">\r
                <div class="mt-4 mt-sm-0">\r
                  <div class="font-size-24 text-primary mb-2">\r
                    <i class="bx bx-import"></i>\r
                  </div>\r
\r
                  <p class="text-muted mb-2">receive</p>\r
                  <h5>$ 1054.32</h5>\r
\r
                  <div class="mt-3">\r
                    <a href="javascript:void(0);" class="btn btn-primary btn-sm w-md">Receive</a>\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="col-sm-4">\r
                <div class="mt-4 mt-sm-0">\r
                  <div class="font-size-24 text-primary mb-2">\r
                    <i class="bx bx-wallet"></i>\r
                  </div>\r
\r
                  <p class="text-muted mb-2">Withdraw</p>\r
                  <h5>$ 824.34</h5>\r
\r
                  <div class="mt-3">\r
                    <a href="javascript:void(0);" class="btn btn-primary btn-sm w-md">Withdraw</a>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="col-xl-8">\r
      <div class="row">\r
        <div class="col-sm-4">\r
          <div class="card mini-stats-wid">\r
            <div class="card-body">\r
              <div class="d-flex">\r
                <div class="flex-shrink-0 me-3 align-self-center">\r
                  <i class="mdi mdi-bitcoin h2 text-warning mb-0"></i>\r
                </div>\r
                <div class="flex-grow-1">\r
                  <p class="text-muted mb-2">Bitcoin Wallet</p>\r
                  <h5 class="mb-0">1.02356 BTC <span class="font-size-14 text-muted">= $\r
                  9148.00</span></h5>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="col-sm-4">\r
          <div class="card mini-stats-wid">\r
            <div class="card-body">\r
              <div class="d-flex">\r
                <div class="flex-shrink-0 me-3 align-self-center">\r
                  <i class="mdi mdi-ethereum h2 text-primary mb-0"></i>\r
                </div>\r
                <div class="flex-grow-1">\r
                  <p class="text-muted mb-2">Ethereum Wallet</p>\r
                  <h5 class="mb-0">0.04121 ETH <span class="font-size-14 text-muted">= $\r
                  8235.00</span></h5>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="col-sm-4">\r
          <div class="card mini-stats-wid">\r
            <div class="card-body">\r
              <div class="d-flex">\r
                <div class="flex-shrink-0 me-3 align-self-center">\r
                  <i class="mdi mdi-litecoin h2 text-info mb-0"></i>\r
                </div>\r
                <div class="flex-grow-1">\r
                  <p class="text-muted mb-2">litecoin Wallet</p>\r
                  <h5 class="mb-0">0.00356 BTC <span class="font-size-14 text-muted">= $\r
                  4721.00</span></h5>\r
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
          <h4 class="card-title mb-3">Overview</h4>\r
\r
          <div>\r
            <div id="overview-chart" class="apex-charts" dir="ltr"></div>\r
            <apx-chart class="apex-charts" dir="ltr" [series]="OveviewChart.series" [chart]="OveviewChart.chart" [colors]="OveviewChart.colors" [stroke]="OveviewChart.stroke" [dataLabels]="OveviewChart.dataLabels" [fill]="OveviewChart.fill" [xaxis]="OveviewChart.xaxis">\r
            </apx-chart>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
  <!-- end row -->\r
\r
  <div class="row">\r
    <div class="col-lg-12">\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title mb-4">Activities</h4>\r
          <tabset class="nav-tabs nav-tabs-custom">\r
            <tab heading="All" class="mt-4">\r
              <div class="row mb-md-2">\r
                <div class="col-sm-12 col-md-6">\r
                  <div class="dataTables_length text-center text-md-start" id="tickets-table_length"><label class="d-inline-flex align-items-center">Show\r
                    <select name="tickets-table_length" [(ngModel)]="pageSize" (change)="updatePageSize()" aria-controls="tickets-table" name="pageSize" class="custom-select custom-select-sm form-control form-control-sm mx-2">\r
                      <option [ngValue]="10">10</option>\r
                      <option [ngValue]="25">25</option>\r
                      <option [ngValue]="50">50</option>\r
                      <option [ngValue]="100">100</option>\r
                    </select> entries</label></div>\r
                  </div>\r
                  <!-- Search -->\r
                  <div class="col-sm-12 col-md-6">\r
                    <div id="tickets-table_filter" class="dataTables_filter text-md-end text-center"><label class="d-inline-flex align-items-center">Search:\r
                      <input type="text" id="select" name="searchTerm"  [(ngModel)]="term" (ngModelChange)="filterdata()" class="form-control form-control-sm ms-2" aria-controls="tickets-table"></label></div>\r
                    </div>\r
                    <!-- End search -->\r
                  </div>\r
                  <!-- Table -->\r
                  <table id="basic-datatable" class="table datatables dt-responsive nowrap table-responsive">\r
                    <thead>\r
                      <tr>\r
                        <th sortable="id" (click)="onSort('id')">ID No</th>\r
                        <th sortable="date" (click)="onSort('date')">Date</th>\r
                        <th sortable="type" (click)="onSort('type')">Type</th>\r
                        <th sortable="currency" (click)="onSort('currency')">Currency</th>\r
                        <th sortable="amount" (click)="onSort('amount')">Amount</th>\r
                        <th sortable="usd" (click)="onSort('usd')">Amount in USD</th>\r
                      </tr>\r
                    </thead>\r
                    <tbody>\r
                      @for (table of orderList; track $index) {\r
                        <tr>\r
                          <td class="text-body fw-bold">{{table.id}} </td>\r
                          <td>{{table.date}}</td>\r
                          <td>{{table.type}}</td>\r
                          <td>{{table.coin}} </td>\r
                          <td>{{table.value}}</td>\r
                          <td>{{table.usd}}</td>\r
                        </tr>}\r
                      </tbody>\r
                    </table>\r
                    <!-- End table -->\r
                    <div class="row justify-content-md-between align-items-md-center mt-2">\r
                      <div class="col-sm-12 col-md-5">\r
                        <div class="dataTables_info mb-2" id="tickets-table_info" role="status" aria-live="polite">\r
                          Showing {{orderList?.length}} of\r
                          {{returnedArray?.length}}\r
                          entries\r
                        </div>\r
                      </div>\r
                      <!-- Pagination -->\r
                      <div class="col-sm-12 col-md-5">\r
                        <div class="text-md-right float-md-end pagination-rounded">\r
                          <ul class="pagination pagination-rounded justify-content-end mb-2">\r
                            <pagination [totalItems]="returnedArray?.length" [itemsPerPage]="10" (pageChanged)="pageChanged($event)"></pagination>\r
                          </ul>\r
                        </div>\r
                      </div>\r
                      <!-- End Pagination -->\r
                    </div>\r
                  </tab>\r
                  <tab heading="Buy" class="mt-4">\r
                    <div class="row mb-md-2">\r
                      <div class="col-sm-12 col-md-6">\r
                        <div class="dataTables_length" id="tickets-table_length"><label class="d-inline-flex align-items-center">Show\r
                          <select name="tickets-table_length" aria-controls="tickets-table" name="pageSize" class="custom-select custom-select-sm form-control form-control-sm mx-2">\r
                            <option [ngValue]="10">10</option>\r
                            <option [ngValue]="25">25</option>\r
                            <option [ngValue]="50">50</option>\r
                            <option [ngValue]="100">100</option>\r
                          </select> entries</label></div>\r
                        </div>\r
                        <!-- Search -->\r
                        <div class="col-sm-12 col-md-6">\r
                          <div id="tickets-table_filter" class="dataTables_filter text-md-end"><label class="d-inline-flex align-items-center">Search:\r
                            <input type="text" name="searchTerm" class="form-control form-control-sm ms-2" aria-controls="tickets-table"></label></div>\r
                          </div>\r
                          <!-- End search -->\r
                        </div>\r
                        <!-- Table -->\r
                        <table id="basic-datatable" class="table datatables dt-responsive nowrap">\r
                          <thead>\r
                            <tr>\r
                              <th sortable="id" (sort)="onSort($event)">ID No</th>\r
                              <th sortable="date" (sort)="onSort($event)">Date</th>\r
                              <th sortable="type" (sort)="onSort($event)">Type</th>\r
                              <th sortable="currency" (sort)="onSort($event)">Currency</th>\r
                              <th sortable="amount" (sort)="onSort($event)">Amount</th>\r
                              <th sortable="usd" (sort)="onSort($event)">Amount in USD</th>\r
                            </tr>\r
                          </thead>\r
                          <tbody>\r
                            @for (table of orderList; track $index) {\r
                              <tr>\r
                                @if (table.type == 'Buy') {\r
                                  <td class="text-body fw-bold">{{table.id}} </td>\r
                                  <td>{{table.date}}</td>\r
                                  <td>{{table.type}} </td>\r
                                  <td>{{table.coin}} </td>\r
                                  <td>{{table.value}}</td>\r
                                  <td>{{table.usd}}</td>\r
                                }\r
                              </tr>}\r
                            </tbody>\r
                          </table>\r
                          <!-- End table -->\r
                          <div class="row justify-content-md-between align-items-md-center mt-2">\r
                            <div class="col-sm-12 col-md-5">\r
                              <div class="dataTables_info mb-2" id="tickets-table_info" role="status" aria-live="polite">\r
                                Showing {{orderList?.length}} of\r
                                {{returnedArray?.length}}\r
                                entries\r
                              </div>\r
                            </div>\r
                          </div>\r
                        </tab>\r
                        <tab heading="Sell" class="mt-4">\r
                          <div class="row mb-md-2">\r
                            <div class="col-sm-12 col-md-6">\r
                              <div class="dataTables_length" id="tickets-table_length"><label class="d-inline-flex align-items-center">Show\r
                                <select name="tickets-table_length" aria-controls="tickets-table" name="pageSize" class="custom-select custom-select-sm form-control form-control-sm mx-2">\r
                                  <option [ngValue]="10">10</option>\r
                                  <option [ngValue]="25">25</option>\r
                                  <option [ngValue]="50">50</option>\r
                                  <option [ngValue]="100">100</option>\r
                                </select> entries</label></div>\r
                              </div>\r
                              <!-- Search -->\r
                              <div class="col-sm-12 col-md-6">\r
                                <div id="tickets-table_filter" class="dataTables_filter text-md-end"><label class="d-inline-flex align-items-center">Search:\r
                                  <input type="text" name="searchTerm" class="form-control form-control-sm ms-2" aria-controls="tickets-table"></label></div>\r
                                </div>\r
                                <!-- End search -->\r
                              </div>\r
                              <!-- Table -->\r
                              <table id="basic-datatable" class="table datatables dt-responsive nowrap">\r
                                <thead>\r
                                  <tr>\r
                                    <th sortable="id" (click)="onSort('id')">ID No</th>\r
                                    <th sortable="date" (click)="onSort('date')">Date</th>\r
                                    <th sortable="type" (click)="onSort('type')">Type</th>\r
                                    <th sortable="currency" (click)="onSort('coin')">Currency</th>\r
                                    <th sortable="amount" (click)="onSort('value')">Amount</th>\r
                                    <th sortable="usd" (click)="onSort('usd')">Amount in USD</th>\r
                                  </tr>\r
                                </thead>\r
                                <tbody>\r
                                  @for (table of orderList; track $index) {\r
                                    <tr>\r
                                      @if (table.type == 'Sell') {\r
                                        <td class="text-body fw-bold">{{table.id}}</td>\r
                                        <td>{{table.id}}</td>\r
                                        <td>{{table.type}} </td>\r
                                        <td>{{table.coin}}</td>\r
                                        <td>{{table.value}}</td>\r
                                        <td>{{table.usd}}</td>\r
                                      }\r
                                    </tr>}\r
                                  </tbody>\r
                                </table>\r
                                <!-- End table -->\r
                                <div class="row justify-content-md-between align-items-md-center mt-2">\r
                                  <div class="col-sm-12 col-md-5">\r
                                    <div class="dataTables_info mb-2" id="tickets-table_info" role="status" aria-live="polite">\r
                                      Showing {{orderList?.length}} of\r
                                      {{returnedArray?.length}}\r
                                      entries\r
                                    </div>\r
                                  </div>\r
                                </div>\r
                              </tab>\r
                            </tabset>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </div>` }]
  }], () => [{ type: Store }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WalletComponent, { className: "WalletComponent", filePath: "src/app/pages/crypto/wallet/wallet.component.ts", lineNumber: 25 });
})();

// src/app/pages/crypto/buysell/buysell.component.ts
function BuysellComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "div")(3, "p", 54);
    \u0275\u0275text(4, "Available Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h5", 55);
    \u0275\u0275text(6, "$ 9148.23");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(7, "div", 56);
    \u0275\u0275elementStart(8, "a", 57);
    \u0275\u0275text(9, " BTC : ");
    \u0275\u0275elementStart(10, "span", 6);
    \u0275\u0275text(11, "1.02356");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "a", 57);
    \u0275\u0275text(13, " ETH : ");
    \u0275\u0275elementStart(14, "span", 6);
    \u0275\u0275text(15, "0.04121");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "a", 57);
    \u0275\u0275text(17, " LTC : ");
    \u0275\u0275elementStart(18, "span", 6);
    \u0275\u0275text(19, "0.00356");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "div", 56);
    \u0275\u0275elementStart(21, "a", 58);
    \u0275\u0275text(22, " Learn more ");
    \u0275\u0275elementEnd()();
  }
}
var BuysellComponent = class _BuysellComponent {
  constructor() {
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Crypto" }, { label: "Buy/Sell", active: true }];
  }
  static {
    this.\u0275fac = function BuysellComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BuysellComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuysellComponent, selectors: [["app-buysell"]], decls: 181, vars: 1, consts: [[1, "container-fluid"], ["title", "Buy/Sell", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "float-end"], ["dropdown", "", 1, "dropdown"], ["type", "button", "dropdownToggle", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-light", "dropdown-toggle"], [1, "mdi", "mdi-wallet", "me-1"], [1, "d-none", "d-sm-inline-block"], [1, "mdi", "mdi-chevron-down"], ["class", "dropdown-menu dropdown-menu-end", 4, "bsDropdownMenu"], [1, "card-title", "mb-4"], [1, "nav-tabs", "nav-tabs-custom"], ["heading", "Buy", 1, "mt-4"], [1, "mb-2"], [1, "col-xl-2", "col-sm-4"], [1, "mb-3"], [1, "card-radio-label", "mb-2"], ["type", "radio", "name", "currency", "id", "buycurrencyoption1", "checked", "", 1, "card-radio-input"], [1, "card-radio"], [1, "mdi", "mdi-bitcoin", "font-size-24", "text-warning", "align-middle", "me-2"], [1, "text-muted", "mb-1"], [1, "font-size-16"], ["type", "radio", "name", "currency", "id", "buycurrencyoption2", 1, "card-radio-input"], [1, "mdi", "mdi-ethereum", "font-size-24", "text-primary", "align-middle", "me-2"], ["type", "radio", "name", "currency", "id", "buycurrencyoption3", 1, "card-radio-input"], [1, "mdi", "mdi-litecoin", "font-size-24", "text-info", "align-middle", "me-2"], [1, "card-radio-label", "mb-3"], ["type", "radio", "name", "pay-method", "id", "pay-methodoption1", 1, "card-radio-input"], [1, "fab", "fa-cc-mastercard", "font-size-24", "text-primary", "align-middle", "me-2"], ["type", "radio", "name", "pay-method", "id", "pay-methodoption3", "checked", "", 1, "card-radio-input"], [1, "fab", "fa-cc-paypal", "font-size-24", "text-primary", "align-middle", "me-2"], [1, "col-sm-6"], [1, "input-group", "mb-2", "currency-value"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "text", "placeholder", "Bitcoin", 1, "form-control"], [1, "input-group", "mb-2"], ["type", "text", "placeholder", "USD Amount", 1, "form-control", "text-sm-right"], [1, "input-group-append"], ["type", "text", "placeholder", "Wallet Address", 1, "form-control"], [1, "text-center", "mt-4"], ["type", "button", 1, "btn", "btn-success"], ["heading", "Sell", 1, "mt-4"], ["type", "radio", "name", "currency", "id", "sellcurrencyoption1", "placeholder", "Bitcoin", "checked", "", 1, "card-radio-input"], ["type", "radio", "name", "currency", "id", "sellcurrencyoption2", 1, "card-radio-input"], ["type", "radio", "name", "currency", "id", "sellcurrencyoption3", 1, "card-radio-input"], ["type", "email", 1, "form-control"], ["type", "text", "placeholder", "Crypto value", 1, "form-control"], ["type", "button", 1, "btn", "btn-danger"], [1, "dropdown-menu", "dropdown-menu-end"], [1, "dropdown-item-text"], [1, "text-muted", "mb-2"], [1, "mb-0"], [1, "dropdown-divider"], ["href", "javascript: void(0);", 1, "dropdown-item"], ["href", "javascript: void(0);", 1, "dropdown-item", "text-primary", "text-center"]], template: function BuysellComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "button", 8);
        \u0275\u0275element(9, "i", 9);
        \u0275\u0275elementStart(10, "span", 10);
        \u0275\u0275text(11, "Wallet Balance ");
        \u0275\u0275element(12, "i", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(13, BuysellComponent_div_13_Template, 23, 0, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "h4", 13);
        \u0275\u0275text(15, "Buy/Sell Crypto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "tabset", 14)(17, "tab", 15)(18, "form")(19, "div", 16)(20, "label");
        \u0275\u0275text(21, "Currency :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 2)(23, "div", 17)(24, "div", 18)(25, "label", 19);
        \u0275\u0275element(26, "input", 20);
        \u0275\u0275elementStart(27, "div", 21)(28, "div");
        \u0275\u0275element(29, "i", 22);
        \u0275\u0275elementStart(30, "span");
        \u0275\u0275text(31, "Bitcoin");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(32, "div")(33, "p", 23);
        \u0275\u0275text(34, "Current price :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "h5", 24);
        \u0275\u0275text(36, "0.00016 BTC");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(37, "div", 17)(38, "div", 18)(39, "label", 19);
        \u0275\u0275element(40, "input", 25);
        \u0275\u0275elementStart(41, "div", 21)(42, "div");
        \u0275\u0275element(43, "i", 26);
        \u0275\u0275elementStart(44, "span");
        \u0275\u0275text(45, "Ethereum");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(46, "div")(47, "p", 23);
        \u0275\u0275text(48, "Current price :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "h5", 24);
        \u0275\u0275text(50, "0.0073 ETH");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(51, "div", 17)(52, "div", 18)(53, "label", 19);
        \u0275\u0275element(54, "input", 27);
        \u0275\u0275elementStart(55, "div", 21)(56, "div");
        \u0275\u0275element(57, "i", 28);
        \u0275\u0275elementStart(58, "span");
        \u0275\u0275text(59, "litecoin");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(60, "div")(61, "p", 23);
        \u0275\u0275text(62, "Current price :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "h5", 24);
        \u0275\u0275text(64, "0.025 LTC");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(65, "div", 16)(66, "label");
        \u0275\u0275text(67, "Payment method :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "div", 2)(69, "div", 17)(70, "label", 29);
        \u0275\u0275element(71, "input", 30);
        \u0275\u0275elementStart(72, "div", 21);
        \u0275\u0275element(73, "i", 31);
        \u0275\u0275elementStart(74, "span");
        \u0275\u0275text(75, "Credit / Debit Card");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(76, "div", 17)(77, "label", 29);
        \u0275\u0275element(78, "input", 32);
        \u0275\u0275elementStart(79, "div", 21);
        \u0275\u0275element(80, "i", 33);
        \u0275\u0275elementStart(81, "span");
        \u0275\u0275text(82, "Paypal");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(83, "div", 18)(84, "label");
        \u0275\u0275text(85, "Add value :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "div", 2)(87, "div", 34)(88, "div", 35)(89, "div", 36)(90, "span", 37);
        \u0275\u0275text(91, "Bitcoin");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(92, "input", 38);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "div", 34)(94, "div", 39);
        \u0275\u0275element(95, "input", 40);
        \u0275\u0275elementStart(96, "div", 41)(97, "span", 37);
        \u0275\u0275text(98, "USD Amount");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(99, "div", 18)(100, "label");
        \u0275\u0275text(101, "Wallet Address :");
        \u0275\u0275elementEnd();
        \u0275\u0275element(102, "input", 42);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "div", 43)(104, "button", 44);
        \u0275\u0275text(105, "Buy Crypto currency");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(106, "tab", 45)(107, "form")(108, "div", 16)(109, "label");
        \u0275\u0275text(110, "Currency :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "div", 2)(112, "div", 17)(113, "div", 18)(114, "label", 19);
        \u0275\u0275element(115, "input", 46);
        \u0275\u0275elementStart(116, "div", 21)(117, "div");
        \u0275\u0275element(118, "i", 22);
        \u0275\u0275elementStart(119, "span");
        \u0275\u0275text(120, "Bitcoin");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(121, "div")(122, "p", 23);
        \u0275\u0275text(123, "Current price :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "h5", 24);
        \u0275\u0275text(125, "0.00016 BTC");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(126, "div", 17)(127, "div", 18)(128, "label", 19);
        \u0275\u0275element(129, "input", 47);
        \u0275\u0275elementStart(130, "div", 21)(131, "div");
        \u0275\u0275element(132, "i", 26);
        \u0275\u0275elementStart(133, "span");
        \u0275\u0275text(134, "Ethereum");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(135, "div")(136, "p", 23);
        \u0275\u0275text(137, "Current price :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "h5", 24);
        \u0275\u0275text(139, "0.0073 ETH");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(140, "div", 17)(141, "div", 18)(142, "label", 19);
        \u0275\u0275element(143, "input", 48);
        \u0275\u0275elementStart(144, "div", 21)(145, "div");
        \u0275\u0275element(146, "i", 28);
        \u0275\u0275elementStart(147, "span");
        \u0275\u0275text(148, "litecoin");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(149, "div")(150, "p", 23);
        \u0275\u0275text(151, "Current price :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(152, "h5", 24);
        \u0275\u0275text(153, "0.025 LTC");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(154, "div", 18)(155, "label");
        \u0275\u0275text(156, "Email :");
        \u0275\u0275elementEnd();
        \u0275\u0275element(157, "input", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "div", 18)(159, "label");
        \u0275\u0275text(160, "Add value :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(161, "div", 2)(162, "div", 34)(163, "div", 35)(164, "div", 36)(165, "span", 37);
        \u0275\u0275text(166, "Crypto value");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(167, "input", 50);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(168, "div", 34)(169, "div", 39);
        \u0275\u0275element(170, "input", 40);
        \u0275\u0275elementStart(171, "div", 41)(172, "span", 37);
        \u0275\u0275text(173, "USD Amount");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(174, "div", 18)(175, "label");
        \u0275\u0275text(176, "Wallet Address :");
        \u0275\u0275elementEnd();
        \u0275\u0275element(177, "input", 42);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "div", 43)(179, "button", 51);
        \u0275\u0275text(180, "Sell Crypto currency");
        \u0275\u0275elementEnd()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
      }
    }, dependencies: [PagetitleComponent, TabsModule, TabDirective, TabsetComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuysellComponent, [{
    type: Component,
    args: [{ selector: "app-buysell", imports: [PagetitleComponent, TabsModule], template: '<div class="container-fluid">\r\n    <!-- page title -->\r\n    <app-page-title title="Buy/Sell" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r\n\r\n    <div class="row">\r\n        <div class="col-lg-12">\r\n            <div class="card">\r\n                <div class="card-body">\r\n                    <div class="float-end">\r\n                        <div class="dropdown" dropdown>\r\n                            <button type="button" class="btn btn-light dropdown-toggle" dropdownToggle data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="mdi mdi-wallet me-1"></i> <span class="d-none d-sm-inline-block">Wallet Balance <i class="mdi mdi-chevron-down"></i></span></button>\r\n                            <div class="dropdown-menu dropdown-menu-end" *bsDropdownMenu>\r\n                                <div class="dropdown-item-text">\r\n                                    <div>\r\n                                        <p class="text-muted mb-2">Available Balance</p>\r\n                                        <h5 class="mb-0">$ 9148.23</h5>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class="dropdown-divider"></div>\r\n\r\n                                <a class="dropdown-item" href="javascript: void(0);">\r\n                                    BTC : <span class="float-end">1.02356</span>\r\n                                </a>\r\n                                <a class="dropdown-item" href="javascript: void(0);">\r\n                                    ETH : <span class="float-end">0.04121</span>\r\n                                </a>\r\n                                <a class="dropdown-item" href="javascript: void(0);">\r\n                                    LTC : <span class="float-end">0.00356</span>\r\n                                </a>\r\n\r\n                                <div class="dropdown-divider"></div>\r\n\r\n                                <a class="dropdown-item text-primary text-center" href="javascript: void(0);">\r\n                                    Learn more\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <h4 class="card-title mb-4">Buy/Sell Crypto</h4>\r\n                    <tabset class="nav-tabs nav-tabs-custom">\r\n                        <tab heading="Buy" class="mt-4">\r\n                            <form>\r\n                                <div class="mb-2">\r\n                                    <label>Currency :</label>\r\n\r\n                                    <div class="row">\r\n                                        <div class="col-xl-2 col-sm-4">\r\n                                            <div class="mb-3">\r\n                                                <label class="card-radio-label mb-2">\r\n                                                    <input type="radio" name="currency" id="buycurrencyoption1" class="card-radio-input" checked>\r\n\r\n                                                    <div class="card-radio">\r\n                                                        <div>\r\n                                                            <i class="mdi mdi-bitcoin font-size-24 text-warning align-middle me-2"></i>\r\n                                                            <span>Bitcoin</span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </label>\r\n\r\n                                                <div>\r\n                                                    <p class="text-muted mb-1">Current price :</p>\r\n                                                    <h5 class="font-size-16">0.00016 BTC</h5>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class="col-xl-2 col-sm-4">\r\n                                            <div class="mb-3">\r\n                                                <label class="card-radio-label mb-2">\r\n                                                    <input type="radio" name="currency" id="buycurrencyoption2" class="card-radio-input">\r\n\r\n                                                    <div class="card-radio">\r\n                                                        <div>\r\n                                                            <i class="mdi mdi-ethereum font-size-24 text-primary align-middle me-2"></i>\r\n                                                            <span>Ethereum</span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </label>\r\n\r\n                                                <div>\r\n                                                    <p class="text-muted mb-1">Current price :</p>\r\n                                                    <h5 class="font-size-16">0.0073 ETH</h5>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class="col-xl-2 col-sm-4">\r\n                                            <div class="mb-3">\r\n                                                <label class="card-radio-label mb-2">\r\n                                                    <input type="radio" name="currency" id="buycurrencyoption3" class="card-radio-input">\r\n\r\n                                                    <div class="card-radio">\r\n                                                        <div>\r\n                                                            <i class="mdi mdi-litecoin font-size-24 text-info align-middle me-2"></i>\r\n                                                            <span>litecoin</span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </label>\r\n\r\n                                                <div>\r\n                                                    <p class="text-muted mb-1">Current price :</p>\r\n                                                    <h5 class="font-size-16">0.025 LTC</h5>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n\r\n                                </div>\r\n\r\n                                <div class="mb-2">\r\n                                    <label>Payment method :</label>\r\n\r\n                                    <div class="row">\r\n                                        <div class="col-xl-2 col-sm-4">\r\n                                            <label class="card-radio-label mb-3">\r\n                                                <input type="radio" name="pay-method" id="pay-methodoption1" class="card-radio-input">\r\n\r\n                                                <div class="card-radio">\r\n                                                    <i class="fab fa-cc-mastercard font-size-24 text-primary align-middle me-2"></i>\r\n\r\n                                                    <span>Credit / Debit Card</span>\r\n                                                </div>\r\n                                            </label>\r\n                                        </div>\r\n\r\n\r\n                                        <div class="col-xl-2 col-sm-4">\r\n                                            <label class="card-radio-label mb-3">\r\n                                                <input type="radio" name="pay-method" id="pay-methodoption3" class="card-radio-input" checked>\r\n\r\n                                                <div class="card-radio">\r\n                                                    <i class="fab fa-cc-paypal font-size-24 text-primary align-middle me-2"></i>\r\n\r\n                                                    <span>Paypal</span>\r\n                                                </div>\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class="mb-3">\r\n                                    <label>Add value :</label>\r\n\r\n                                    <div class="row">\r\n                                        <div class="col-sm-6">\r\n                                            <div class="input-group mb-2 currency-value">\r\n                                                <div class="input-group-prepend">\r\n                                                    <span class="input-group-text">Bitcoin</span>\r\n                                                </div>\r\n                                                <input type="text" class="form-control" placeholder="Bitcoin">\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class="col-sm-6">\r\n                                            <div class="input-group mb-2">\r\n                                                <input type="text" class="form-control text-sm-right" placeholder="USD Amount">\r\n\r\n                                                <div class="input-group-append">\r\n                                                    <span class="input-group-text">USD Amount</span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class="mb-3">\r\n                                    <label>Wallet Address :</label>\r\n                                    <input type="text" class="form-control" placeholder="Wallet Address">\r\n                                </div>\r\n                                <div class="text-center mt-4">\r\n                                    <button type="button" class="btn btn-success">Buy Crypto currency</button>\r\n                                </div>\r\n                            </form>\r\n                        </tab>\r\n                        <tab heading="Sell" class="mt-4">\r\n                            <form>\r\n                                <div class="mb-2">\r\n                                    <label>Currency :</label>\r\n\r\n                                    <div class="row">\r\n                                        <div class="col-xl-2 col-sm-4">\r\n                                            <div class="mb-3">\r\n                                                <label class="card-radio-label mb-2">\r\n                                                    <input type="radio" name="currency" id="sellcurrencyoption1" class="card-radio-input" placeholder="Bitcoin" checked>\r\n\r\n                                                    <div class="card-radio">\r\n                                                        <div>\r\n                                                            <i class="mdi mdi-bitcoin font-size-24 text-warning align-middle me-2"></i>\r\n                                                            <span>Bitcoin</span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </label>\r\n                                                <div>\r\n                                                    <p class="text-muted mb-1">Current price :</p>\r\n                                                    <h5 class="font-size-16">0.00016 BTC</h5>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class="col-xl-2 col-sm-4">\r\n                                            <div class="mb-3">\r\n                                                <label class="card-radio-label mb-2">\r\n                                                    <input type="radio" name="currency" id="sellcurrencyoption2" class="card-radio-input">\r\n\r\n                                                    <div class="card-radio">\r\n                                                        <div>\r\n                                                            <i class="mdi mdi-ethereum font-size-24 text-primary align-middle me-2"></i>\r\n                                                            <span>Ethereum</span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </label>\r\n                                                <div>\r\n                                                    <p class="text-muted mb-1">Current price :</p>\r\n                                                    <h5 class="font-size-16">0.0073 ETH</h5>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class="col-xl-2 col-sm-4">\r\n                                            <div class="mb-3">\r\n                                                <label class="card-radio-label mb-2">\r\n                                                    <input type="radio" name="currency" id="sellcurrencyoption3" class="card-radio-input">\r\n\r\n                                                    <div class="card-radio">\r\n                                                        <div>\r\n                                                            <i class="mdi mdi-litecoin font-size-24 text-info align-middle me-2"></i>\r\n                                                            <span>litecoin</span>\r\n                                                        </div>\r\n\r\n                                                    </div>\r\n                                                </label>\r\n\r\n                                                <div>\r\n                                                    <p class="text-muted mb-1">Current price :</p>\r\n                                                    <h5 class="font-size-16">0.025 LTC</h5>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n\r\n                                </div>\r\n\r\n                                <div class="mb-3">\r\n                                    <label>Email :</label>\r\n                                    <input type="email" class="form-control">\r\n                                </div>\r\n\r\n                                <div class="mb-3">\r\n                                    <label>Add value :</label>\r\n\r\n                                    <div class="row">\r\n                                        <div class="col-sm-6">\r\n                                            <div class="input-group mb-2 currency-value">\r\n                                                <div class="input-group-prepend">\r\n                                                    <span class="input-group-text">Crypto value</span>\r\n                                                </div>\r\n                                                <input type="text" class="form-control" placeholder="Crypto value">\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class="col-sm-6">\r\n                                            <div class="input-group mb-2">\r\n                                                <input type="text" class="form-control text-sm-right" placeholder="USD Amount">\r\n\r\n                                                <div class="input-group-append">\r\n                                                    <span class="input-group-text">USD Amount</span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class="mb-3">\r\n                                    <label>Wallet Address :</label>\r\n                                    <input type="text" class="form-control" placeholder="Wallet Address">\r\n                                </div>\r\n                                <div class="text-center mt-4">\r\n                                    <button type="button" class="btn btn-danger">Sell Crypto currency</button>\r\n                                </div>\r\n                            </form>\r\n                        </tab>\r\n\r\n                    </tabset>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuysellComponent, { className: "BuysellComponent", filePath: "src/app/pages/crypto/buysell/buysell.component.ts", lineNumber: 11 });
})();

// src/app/pages/crypto/exchange/data.ts
var priceCandlestickChart = {
  series: [{
    data: [
      {
        x: /* @__PURE__ */ new Date(15387786e5),
        y: [6629.81, 6650.5, 6623.04, 6633.33]
      },
      {
        x: /* @__PURE__ */ new Date(15387804e5),
        y: [6632.01, 6643.59, 6620, 6630.11]
      },
      {
        x: /* @__PURE__ */ new Date(15387822e5),
        y: [6630.71, 6648.95, 6623.34, 6635.65]
      },
      {
        x: /* @__PURE__ */ new Date(1538784e6),
        y: [6635.65, 6651, 6629.67, 6638.24]
      },
      {
        x: /* @__PURE__ */ new Date(15387858e5),
        y: [6638.24, 6640, 6620, 6624.47]
      },
      {
        x: /* @__PURE__ */ new Date(15387876e5),
        y: [6624.53, 6636.03, 6621.68, 6624.31]
      },
      {
        x: /* @__PURE__ */ new Date(15387894e5),
        y: [6624.61, 6632.2, 6617, 6626.02]
      },
      {
        x: /* @__PURE__ */ new Date(15387912e5),
        y: [6627, 6627.62, 6584.22, 6603.02]
      },
      {
        x: /* @__PURE__ */ new Date(1538793e6),
        y: [6605, 6608.03, 6598.95, 6604.01]
      },
      {
        x: /* @__PURE__ */ new Date(15387948e5),
        y: [6604.5, 6614.4, 6602.26, 6608.02]
      },
      {
        x: /* @__PURE__ */ new Date(15387966e5),
        y: [6608.02, 6610.68, 6601.99, 6608.91]
      },
      {
        x: /* @__PURE__ */ new Date(15387984e5),
        y: [6608.91, 6618.99, 6608.01, 6612]
      },
      {
        x: /* @__PURE__ */ new Date(15388002e5),
        y: [6612, 6615.13, 6605.09, 6612]
      },
      {
        x: /* @__PURE__ */ new Date(1538802e6),
        y: [6612, 6624.12, 6608.43, 6622.95]
      },
      {
        x: /* @__PURE__ */ new Date(15388038e5),
        y: [6623.91, 6623.91, 6615, 6615.67]
      },
      {
        x: /* @__PURE__ */ new Date(15388056e5),
        y: [6618.69, 6618.74, 6610, 6610.4]
      },
      {
        x: /* @__PURE__ */ new Date(15388074e5),
        y: [6611, 6622.78, 6610.4, 6614.9]
      },
      {
        x: /* @__PURE__ */ new Date(15388092e5),
        y: [6614.9, 6626.2, 6613.33, 6623.45]
      },
      {
        x: /* @__PURE__ */ new Date(1538811e6),
        y: [6623.48, 6627, 6618.38, 6620.35]
      },
      {
        x: /* @__PURE__ */ new Date(15388128e5),
        y: [6619.43, 6620.35, 6610.05, 6615.53]
      },
      {
        x: /* @__PURE__ */ new Date(15388146e5),
        y: [6615.53, 6617.93, 6610, 6615.19]
      },
      {
        x: /* @__PURE__ */ new Date(15388164e5),
        y: [6615.19, 6621.6, 6608.2, 6620]
      },
      {
        x: /* @__PURE__ */ new Date(15388182e5),
        y: [6619.54, 6625.17, 6614.15, 6620]
      },
      {
        x: /* @__PURE__ */ new Date(153882e7),
        y: [6620.33, 6634.15, 6617.24, 6624.61]
      },
      {
        x: /* @__PURE__ */ new Date(15388218e5),
        y: [6625.95, 6626, 6611.66, 6617.58]
      },
      {
        x: /* @__PURE__ */ new Date(15388236e5),
        y: [6619, 6625.97, 6595.27, 6598.86]
      },
      {
        x: /* @__PURE__ */ new Date(15388254e5),
        y: [6598.86, 6598.88, 6570, 6587.16]
      },
      {
        x: /* @__PURE__ */ new Date(15388272e5),
        y: [6588.86, 6600, 6580, 6593.4]
      },
      {
        x: /* @__PURE__ */ new Date(1538829e6),
        y: [6593.99, 6598.89, 6585, 6587.81]
      },
      {
        x: /* @__PURE__ */ new Date(15388308e5),
        y: [6587.81, 6592.73, 6567.14, 6578]
      },
      {
        x: /* @__PURE__ */ new Date(15388326e5),
        y: [6578.35, 6581.72, 6567.39, 6579]
      },
      {
        x: /* @__PURE__ */ new Date(15388344e5),
        y: [6579.38, 6580.92, 6566.77, 6575.96]
      },
      {
        x: /* @__PURE__ */ new Date(15388362e5),
        y: [6575.96, 6589, 6571.77, 6588.92]
      },
      {
        x: /* @__PURE__ */ new Date(1538838e6),
        y: [6588.92, 6594, 6577.55, 6589.22]
      },
      {
        x: /* @__PURE__ */ new Date(15388398e5),
        y: [6589.3, 6598.89, 6589.1, 6596.08]
      },
      {
        x: /* @__PURE__ */ new Date(15388416e5),
        y: [6597.5, 6600, 6588.39, 6596.25]
      },
      {
        x: /* @__PURE__ */ new Date(15388434e5),
        y: [6598.03, 6600, 6588.73, 6595.97]
      },
      {
        x: /* @__PURE__ */ new Date(15388452e5),
        y: [6595.97, 6602.01, 6588.17, 6602]
      },
      {
        x: /* @__PURE__ */ new Date(1538847e6),
        y: [6602, 6607, 6596.51, 6599.95]
      },
      {
        x: /* @__PURE__ */ new Date(15388488e5),
        y: [6600.63, 6601.21, 6590.39, 6591.02]
      },
      {
        x: /* @__PURE__ */ new Date(15388506e5),
        y: [6591.02, 6603.08, 6591, 6591]
      },
      {
        x: /* @__PURE__ */ new Date(15388524e5),
        y: [6591, 6601.32, 6585, 6592]
      },
      {
        x: /* @__PURE__ */ new Date(15388542e5),
        y: [6593.13, 6596.01, 6590, 6593.34]
      },
      {
        x: /* @__PURE__ */ new Date(1538856e6),
        y: [6593.34, 6604.76, 6582.63, 6593.86]
      },
      {
        x: /* @__PURE__ */ new Date(15388578e5),
        y: [6593.86, 6604.28, 6586.57, 6600.01]
      },
      {
        x: /* @__PURE__ */ new Date(15388596e5),
        y: [6601.81, 6603.21, 6592.78, 6596.25]
      },
      {
        x: /* @__PURE__ */ new Date(15388614e5),
        y: [6596.25, 6604.2, 6590, 6602.99]
      },
      {
        x: /* @__PURE__ */ new Date(15388632e5),
        y: [6602.99, 6606, 6584.99, 6587.81]
      },
      {
        x: /* @__PURE__ */ new Date(1538865e6),
        y: [6587.81, 6595, 6583.27, 6591.96]
      },
      {
        x: /* @__PURE__ */ new Date(15388668e5),
        y: [6591.97, 6596.07, 6585, 6588.39]
      },
      {
        x: /* @__PURE__ */ new Date(15388686e5),
        y: [6587.6, 6598.21, 6587.6, 6594.27]
      },
      {
        x: /* @__PURE__ */ new Date(15388704e5),
        y: [6596.44, 6601, 6590, 6596.55]
      },
      {
        x: /* @__PURE__ */ new Date(15388722e5),
        y: [6598.91, 6605, 6596.61, 6600.02]
      },
      {
        x: /* @__PURE__ */ new Date(1538874e6),
        y: [6600.55, 6605, 6589.14, 6593.01]
      },
      {
        x: /* @__PURE__ */ new Date(15388758e5),
        y: [6593.15, 6605, 6592, 6603.06]
      },
      {
        x: /* @__PURE__ */ new Date(15388776e5),
        y: [6603.07, 6604.5, 6599.09, 6603.89]
      },
      {
        x: /* @__PURE__ */ new Date(15388794e5),
        y: [6604.44, 6604.44, 6600, 6603.5]
      },
      {
        x: /* @__PURE__ */ new Date(15388812e5),
        y: [6603.5, 6603.99, 6597.5, 6603.86]
      },
      {
        x: /* @__PURE__ */ new Date(1538883e6),
        y: [6603.85, 6605, 6600, 6604.07]
      },
      {
        x: /* @__PURE__ */ new Date(15388848e5),
        y: [6604.98, 6606, 6604.07, 6606]
      }
    ]
  }],
  chart: {
    type: "candlestick",
    height: 290,
    toolbar: false,
    zoom: {
      enabled: true
    }
  },
  plotOptions: {
    candlestick: {
      colors: {
        upward: "#34c38f",
        downward: "#f46a6a"
      }
    }
  },
  xaxis: {
    type: "datetime"
  },
  yaxis: {
    tooltip: {
      enabled: true
    }
  }
};
var notificationData = [
  {
    date: "15 Mar ",
    text: "If several languages coalesce of the resulting."
  },
  {
    date: "14 Mar ",
    text: "New common language will be more simple and regular than the existing"
  },
  {
    date: "10 Mar",
    text: "It will seem like simplified English as a skeptical Cambridge"
  },
  {
    date: "13 Mar",
    text: "To achieve this, it would be necessary"
  },
  {
    date: "12 Mar ",
    text: "Cum sociis natoque penatibus et magnis dis"
  },
  {
    date: "11 Mar ",
    text: "New common language will be more simple and regular than the existing"
  },
  {
    date: "10 Mar ",
    text: "It will seem like simplified English as a skeptical Cambridge"
  },
  {
    date: "09 Mar ",
    text: "To achieve this, it would be necessary"
  }
];

// src/app/pages/crypto/exchange/exchange.component.ts
function ExchangeComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61)(2, "div")(3, "p", 27);
    \u0275\u0275text(4, "Available Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h5", 12);
    \u0275\u0275text(6, "$ 9148.23");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(7, "div", 62);
    \u0275\u0275elementStart(8, "a", 63);
    \u0275\u0275text(9, " BTC : ");
    \u0275\u0275elementStart(10, "span", 64);
    \u0275\u0275text(11, "1.02356");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "a", 63);
    \u0275\u0275text(13, " ETH : ");
    \u0275\u0275elementStart(14, "span", 64);
    \u0275\u0275text(15, "0.04121");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "a", 63);
    \u0275\u0275text(17, " LTC : ");
    \u0275\u0275elementStart(18, "span", 64);
    \u0275\u0275text(19, "0.00356");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "div", 62);
    \u0275\u0275elementStart(21, "a", 65);
    \u0275\u0275text(22, " Learn more ");
    \u0275\u0275elementEnd()();
  }
}
function ExchangeComponent_For_242_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 59)(1, "div", 66);
    \u0275\u0275element(2, "i", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22)(4, "div", 7)(5, "h5", 68);
    \u0275\u0275text(6);
    \u0275\u0275element(7, "i", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 70)(9, "div");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(data_r1.date);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", data_r1.text, " ");
  }
}
var ExchangeComponent = class _ExchangeComponent {
  constructor() {
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Crypto" }, { label: "Exchange", active: true }];
    this.priceCandlestickChart = priceCandlestickChart;
    this.notificationData = notificationData;
  }
  static {
    this.\u0275fac = function ExchangeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExchangeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExchangeComponent, selectors: [["app-exchange"]], decls: 243, vars: 6, consts: [[1, "container-fluid"], ["title", "Exchange", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "d-flex", "align-items-start"], [1, "flex-shrink-0", "me-3"], ["src", "assets/images/users/avatar-1.jpg", "alt", "", 1, "avatar-md", "rounded-circle", "img-thumbnail"], [1, "flex-grow-1", "align-self-center"], [1, "text-muted"], [1, "mb-1"], [1, "mb-0"], ["dropdown", "", 1, "dropdown"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "dropdownToggle", "", 1, "btn", "btn-light", "dropdown-toggle"], [1, "mdi", "mdi-wallet", "me-1"], [1, "d-none", "d-sm-inline-block"], [1, "mdi", "mdi-chevron-down"], ["class", "dropdown-menu dropdown-menu-end dropdown-menu-md", 4, "dropdownMenu"], [1, "col-xl-8"], [1, "card-title", "mb-4"], [1, "col-xl-3", "col-sm-4"], [1, "d-flex"], [1, "avatar-sm"], [1, "avatar-title", "rounded-circle", "bg-warning-subtle", "text-warning", "font-size-22"], [1, "mdi", "mdi-bitcoin"], [1, "media-body"], [1, "text-muted", "mb-2"], [1, "mt-4", "mt-sm-0"], [1, "mdi", "mdi-arrow-up", "text-success"], [1, "mt-4"], ["id", "candlestick-chart", "dir", "ltr", 1, "apex-charts"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "plotOptions", "yaxis", "xaxis"], [1, "col-xl-4"], [1, "nav-pills", "rounded", "tab-bg"], ["heading", "Buy", 1, "mt-4"], [1, "font-size-14", "mb-4"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "form-select", 2, "max-width", "90px"], ["value", "BT", "selected", ""], ["value", "ET"], ["value", "LT"], ["type", "text", 1, "form-control"], ["type", "text", "placeholder", "Price", 1, "form-control"], [1, "input-group-append"], ["type", "text", "placeholder", "Total", 1, "form-control"], [1, "text-center"], ["type", "button", 1, "btn", "btn-success", "w-md"], ["heading", "Sell", 1, "mt-4"], ["type", "button", 1, "btn", "btn-danger", "w-md"], [1, "col-xl-6"], [1, "table-responsive"], [1, "table", "table-bordered", "mb-0"], ["colspan", "3"], ["scope", "col"], [2, "height", "310px"], [1, "verti-timeline", "list-unstyled"], [1, "event-list"], [1, "dropdown-menu", "dropdown-menu-end", "dropdown-menu-md"], [1, "dropdown-item-text"], [1, "dropdown-divider"], ["href", "javascript: void(0);", 1, "dropdown-item"], [1, "float-end"], ["href", "javascript: void(0);", 1, "dropdown-item", "text-primary", "text-center"], [1, "event-timeline-dot"], [1, "bx", "bx-right-arrow-circle", "font-size-18"], [1, "font-size-14"], [1, "bx", "bx-right-arrow-alt", "font-size-16", "text-primary", "align-middle", "ms-2"], [1, "flex-grow-1"]], template: function ExchangeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        \u0275\u0275element(8, "img", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 9)(10, "div", 10)(11, "h5");
        \u0275\u0275text(12, "Henry wells");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "p", 11);
        \u0275\u0275text(14, "henrywells@abc.com");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "p", 12);
        \u0275\u0275text(16, "Id no: #SK0234");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 13)(18, "button", 14);
        \u0275\u0275element(19, "i", 15);
        \u0275\u0275elementStart(20, "span", 16);
        \u0275\u0275text(21, "Wallet Balance ");
        \u0275\u0275element(22, "i", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(23, ExchangeComponent_div_23_Template, 23, 0, "div", 18);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(24, "div", 2)(25, "div", 19)(26, "div", 4)(27, "div", 5)(28, "h4", 20);
        \u0275\u0275text(29, "Price");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 2)(31, "div", 21)(32, "div", 22)(33, "div", 7)(34, "div", 23)(35, "span", 24);
        \u0275\u0275element(36, "i", 25);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "div", 26)(38, "p", 27);
        \u0275\u0275text(39, "Bitcoin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "h5");
        \u0275\u0275text(41, "1.02356 BTC");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(42, "div", 21)(43, "div", 28)(44, "p", 27);
        \u0275\u0275text(45, "In USD");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "h5");
        \u0275\u0275text(47, "6310.22 USD");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "div", 21)(49, "div", 28)(50, "p", 27);
        \u0275\u0275text(51, "Last 24 hrs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "h5");
        \u0275\u0275text(53, "0.24 % ");
        \u0275\u0275element(54, "i", 29);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(55, "div", 30);
        \u0275\u0275element(56, "div", 31)(57, "apx-chart", 32);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(58, "div", 33)(59, "div", 4)(60, "div", 5)(61, "h4", 20);
        \u0275\u0275text(62, "Buy / Sell");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div")(64, "p", 27);
        \u0275\u0275element(65, "i", 15);
        \u0275\u0275text(66, " Wallet Balance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "h5");
        \u0275\u0275text(68, "$ 9148.23");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "div", 30)(70, "tabset", 34)(71, "tab", 35)(72, "h5", 36);
        \u0275\u0275text(73, "Buy Coin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "div")(75, "div")(76, "label");
        \u0275\u0275text(77, "Add Amount :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "div", 37)(79, "div", 38)(80, "label", 39);
        \u0275\u0275text(81, "Amount");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(82, "select", 40)(83, "option", 41);
        \u0275\u0275text(84, "BTC");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "option", 42);
        \u0275\u0275text(86, "ETH");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "option", 43);
        \u0275\u0275text(88, "LTC");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(89, "input", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "div", 37)(91, "div", 38)(92, "label", 39);
        \u0275\u0275text(93, "Price");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(94, "input", 45);
        \u0275\u0275elementStart(95, "div", 46)(96, "label", 39);
        \u0275\u0275text(97, "$");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(98, "div", 37)(99, "div", 38)(100, "label", 39);
        \u0275\u0275text(101, "Total");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(102, "input", 47);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(103, "div", 48)(104, "button", 49);
        \u0275\u0275text(105, "Buy Coin");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(106, "tab", 50)(107, "h5", 36);
        \u0275\u0275text(108, "Sell Coin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "div")(110, "div")(111, "label");
        \u0275\u0275text(112, "Add Amount :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "div", 37)(114, "div", 38)(115, "label", 39);
        \u0275\u0275text(116, "Amount");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(117, "select", 40)(118, "option", 41);
        \u0275\u0275text(119, "BTC");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "option", 42);
        \u0275\u0275text(121, "ETH");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "option", 43);
        \u0275\u0275text(123, "LTC");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(124, "input", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "div", 37)(126, "div", 38)(127, "label", 39);
        \u0275\u0275text(128, "Price");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(129, "input", 44);
        \u0275\u0275elementStart(130, "div", 46)(131, "label", 39);
        \u0275\u0275text(132, "$");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(133, "div", 37)(134, "div", 38)(135, "label", 39);
        \u0275\u0275text(136, "Total");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(137, "input", 44);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(138, "div", 48)(139, "button", 51);
        \u0275\u0275text(140, "Sell Coin");
        \u0275\u0275elementEnd()()()()()()()()()();
        \u0275\u0275elementStart(141, "div", 2)(142, "div", 52)(143, "div", 4)(144, "div", 5)(145, "h4", 20);
        \u0275\u0275text(146, "Order book");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "div", 53)(148, "table", 54)(149, "thead")(150, "tr", 48)(151, "th", 55);
        \u0275\u0275text(152, "Buy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "th", 55);
        \u0275\u0275text(154, "Sell");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(155, "tr")(156, "th", 56);
        \u0275\u0275text(157, "Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "th", 56);
        \u0275\u0275text(159, "Total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "th", 56);
        \u0275\u0275text(161, "Price");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "th", 56);
        \u0275\u0275text(163, "Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "th", 56);
        \u0275\u0275text(165, "Total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(166, "th", 56);
        \u0275\u0275text(167, "Price");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(168, "tbody")(169, "tr")(170, "td");
        \u0275\u0275text(171, "0.0412");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(172, "td");
        \u0275\u0275text(173, "0.0412");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(174, "td");
        \u0275\u0275text(175, "256.18");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(176, "td");
        \u0275\u0275text(177, "0.0201");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "td");
        \u0275\u0275text(179, "0.0201");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(180, "td");
        \u0275\u0275text(181, "124.98");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(182, "tr")(183, "td");
        \u0275\u0275text(184, "0.0301");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(185, "td");
        \u0275\u0275text(186, "0.0301");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(187, "td");
        \u0275\u0275text(188, "187.16");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(189, "td");
        \u0275\u0275text(190, "0.0165");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(191, "td");
        \u0275\u0275text(192, "0.0165");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(193, "td");
        \u0275\u0275text(194, "102.60");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(195, "tr")(196, "td");
        \u0275\u0275text(197, "0.0523");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(198, "td");
        \u0275\u0275text(199, "0.0523");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(200, "td");
        \u0275\u0275text(201, "325.21");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(202, "td");
        \u0275\u0275text(203, "0.0348");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(204, "td");
        \u0275\u0275text(205, "0.0348");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(206, "td");
        \u0275\u0275text(207, "216.39");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(208, "tr")(209, "td");
        \u0275\u0275text(210, "0.0432");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(211, "td");
        \u0275\u0275text(212, "0.0432");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(213, "td");
        \u0275\u0275text(214, "268.62");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(215, "td");
        \u0275\u0275text(216, "0.0321");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(217, "td");
        \u0275\u0275text(218, "0.0321");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(219, "td");
        \u0275\u0275text(220, "199.60");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(221, "tr")(222, "td");
        \u0275\u0275text(223, "0.0246");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(224, "td");
        \u0275\u0275text(225, "0.0246");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(226, "td");
        \u0275\u0275text(227, "152.96");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(228, "td");
        \u0275\u0275text(229, "0.0403");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(230, "td");
        \u0275\u0275text(231, "0.0403");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(232, "td");
        \u0275\u0275text(233, "250.59");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(234, "div", 52)(235, "div", 4)(236, "div", 5)(237, "h4", 20);
        \u0275\u0275text(238, "Notifications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(239, "ngx-simplebar", 57)(240, "ul", 58);
        \u0275\u0275repeaterCreate(241, ExchangeComponent_For_242_Template, 11, 2, "li", 59, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(56);
        \u0275\u0275property("series", ctx.priceCandlestickChart.series)("chart", ctx.priceCandlestickChart.chart)("plotOptions", ctx.priceCandlestickChart.plotOptions)("yaxis", ctx.priceCandlestickChart.yaxis)("xaxis", ctx.priceCandlestickChart.xaxis);
        \u0275\u0275advance(184);
        \u0275\u0275repeater(ctx.notificationData);
      }
    }, dependencies: [PagetitleComponent, TabsModule, TabDirective, TabsetComponent, NgApexchartsModule, ChartComponent, SimplebarAngularModule, SimplebarAngularComponent, BsDropdownModule, BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExchangeComponent, [{
    type: Component,
    args: [{ selector: "app-exchange", imports: [PagetitleComponent, TabsModule, NgApexchartsModule, SimplebarAngularModule, BsDropdownModule], template: '<div class="container-fluid">\r\n\r\n    <app-page-title title="Exchange" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r\n\r\n    <div class="row">\r\n        <div class="col-lg-12">\r\n            <div class="card">\r\n                <div class="card-body">\r\n                    <div class="d-flex align-items-start">\r\n                        <div class="flex-shrink-0 me-3">\r\n                            <img src="assets/images/users/avatar-1.jpg" alt="" class="avatar-md rounded-circle img-thumbnail">\r\n                        </div>\r\n                        <div class="flex-grow-1 align-self-center">\r\n                            <div class="text-muted">\r\n                                <h5>Henry wells</h5>\r\n                                <p class="mb-1">henrywells&#64;abc.com</p>\r\n                                <p class="mb-0">Id no: #SK0234</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class="dropdown" dropdown>\r\n                            <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" dropdownToggle><i class="mdi mdi-wallet me-1"></i> <span class="d-none d-sm-inline-block">Wallet Balance <i class="mdi mdi-chevron-down"></i></span></button>\r\n                            <div class="dropdown-menu dropdown-menu-end dropdown-menu-md" *dropdownMenu>\r\n                                <div class="dropdown-item-text">\r\n                                    <div>\r\n                                        <p class="text-muted mb-2">Available Balance</p>\r\n                                        <h5 class="mb-0">$ 9148.23</h5>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class="dropdown-divider"></div>\r\n\r\n                                <a class="dropdown-item" href="javascript: void(0);">\r\n                                    BTC : <span class="float-end">1.02356</span>\r\n                                </a>\r\n                                <a class="dropdown-item" href="javascript: void(0);">\r\n                                    ETH : <span class="float-end">0.04121</span>\r\n                                </a>\r\n                                <a class="dropdown-item" href="javascript: void(0);">\r\n                                    LTC : <span class="float-end">0.00356</span>\r\n                                </a>\r\n\r\n                                <div class="dropdown-divider"></div>\r\n\r\n                                <a class="dropdown-item text-primary text-center" href="javascript: void(0);">\r\n                                    Learn more\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n        <div class="col-xl-8">\r\n            <div class="card">\r\n                <div class="card-body">\r\n                    <h4 class="card-title mb-4">Price</h4>\r\n\r\n                    <div class="row">\r\n                        <div class="col-xl-3 col-sm-4">\r\n                            <div class="d-flex">\r\n                                <div class="flex-shrink-0 me-3">\r\n                                    <div class="avatar-sm">\r\n                                        <span class="avatar-title rounded-circle bg-warning-subtle text-warning font-size-22">\r\n                                            <i class="mdi mdi-bitcoin"></i>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class="media-body">\r\n                                    <p class="text-muted mb-2">Bitcoin</p>\r\n                                    <h5>1.02356 BTC</h5>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class="col-xl-3 col-sm-4">\r\n                            <div class="mt-4 mt-sm-0">\r\n                                <p class="text-muted mb-2">In USD</p>\r\n                                <h5>6310.22 USD</h5>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class="col-xl-3 col-sm-4">\r\n                            <div class="mt-4 mt-sm-0">\r\n                                <p class="text-muted mb-2">Last 24 hrs</p>\r\n                                <h5>0.24 % <i class="mdi mdi-arrow-up text-success"></i></h5>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class="mt-4">\r\n                        <div id="candlestick-chart" class="apex-charts" dir="ltr"></div>\r\n                        <apx-chart class="apex-charts" dir="ltr" [series]="priceCandlestickChart.series" [chart]="priceCandlestickChart.chart" [plotOptions]="priceCandlestickChart.plotOptions" [yaxis]="priceCandlestickChart.yaxis" [xaxis]="priceCandlestickChart.xaxis">\r\n                        </apx-chart>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="col-xl-4">\r\n            <div class="card">\r\n                <div class="card-body">\r\n                    <h4 class="card-title mb-4">Buy / Sell</h4>\r\n                    <div>\r\n                        <p class="text-muted mb-2"><i class="mdi mdi-wallet me-1"></i> Wallet Balance</p>\r\n                        <h5>$ 9148.23</h5>\r\n                    </div>\r\n                    <div class="mt-4">\r\n                        <tabset class="nav-pills rounded tab-bg">\r\n                            <tab heading="Buy" class="mt-4">\r\n                                <h5 class="font-size-14 mb-4">Buy Coin</h5>\r\n                                <div>\r\n                                    <div>\r\n                                        <label>Add Amount :</label>\r\n                                        <div class="input-group mb-3">\r\n                                            <div class="input-group-prepend">\r\n                                                <label class="input-group-text">Amount</label>\r\n                                            </div>\r\n                                            <select class="form-select" style="max-width: 90px;">\r\n                                                <option value="BT" selected>BTC</option>\r\n                                                <option value="ET">ETH</option>\r\n                                                <option value="LT">LTC</option>\r\n                                            </select>\r\n                                            <input type="text" class="form-control">\r\n                                        </div>\r\n\r\n                                        <div class="input-group mb-3">\r\n                                            <div class="input-group-prepend">\r\n                                                <label class="input-group-text">Price</label>\r\n                                            </div>\r\n                                            <input type="text" class="form-control" placeholder="Price">\r\n                                            <div class="input-group-append">\r\n                                                <label class="input-group-text">$</label>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class="input-group mb-3">\r\n                                            <div class="input-group-prepend">\r\n                                                <label class="input-group-text">Total</label>\r\n                                            </div>\r\n                                            <input type="text" class="form-control" placeholder="Total">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class="text-center">\r\n                                        <button type="button" class="btn btn-success w-md">Buy Coin</button>\r\n                                    </div>\r\n                                </div>\r\n                            </tab>\r\n                            <tab heading="Sell" class="mt-4">\r\n                                <h5 class="font-size-14 mb-4">Sell Coin</h5>\r\n\r\n                                <div>\r\n                                    <div>\r\n                                        <label>Add Amount :</label>\r\n                                        <div class="input-group mb-3">\r\n                                            <div class="input-group-prepend">\r\n                                                <label class="input-group-text">Amount</label>\r\n                                            </div>\r\n                                            <select class="form-select" style="max-width: 90px;">\r\n                                                <option value="BT" selected>BTC</option>\r\n                                                <option value="ET">ETH</option>\r\n                                                <option value="LT">LTC</option>\r\n                                            </select>\r\n                                            <input type="text" class="form-control">\r\n                                        </div>\r\n\r\n                                        <div class="input-group mb-3">\r\n                                            <div class="input-group-prepend">\r\n                                                <label class="input-group-text">Price</label>\r\n                                            </div>\r\n                                            <input type="text" class="form-control">\r\n                                            <div class="input-group-append">\r\n                                                <label class="input-group-text">$</label>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class="input-group mb-3">\r\n                                            <div class="input-group-prepend">\r\n                                                <label class="input-group-text">Total</label>\r\n                                            </div>\r\n                                            <input type="text" class="form-control">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class="text-center">\r\n                                        <button type="button" class="btn btn-danger w-md">Sell Coin</button>\r\n                                    </div>\r\n                                </div>\r\n                            </tab>\r\n                        </tabset>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- end row -->\r\n\r\n    <div class="row">\r\n        <div class="col-xl-6">\r\n            <div class="card">\r\n                <div class="card-body">\r\n                    <h4 class="card-title mb-4">Order book</h4>\r\n\r\n                    <div class="table-responsive">\r\n                        <table class="table table-bordered mb-0">\r\n                            <thead>\r\n                                <tr class="text-center">\r\n                                    <th colspan="3">Buy</th>\r\n                                    <th colspan="3">Sell</th>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th scope="col">Amount</th>\r\n                                    <th scope="col">Total</th>\r\n                                    <th scope="col">Price</th>\r\n                                    <th scope="col">Amount</th>\r\n                                    <th scope="col">Total</th>\r\n                                    <th scope="col">Price</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>0.0412</td>\r\n                                    <td>0.0412</td>\r\n                                    <td>256.18</td>\r\n                                    <td>0.0201</td>\r\n                                    <td>0.0201</td>\r\n                                    <td>124.98</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>0.0301</td>\r\n                                    <td>0.0301</td>\r\n                                    <td>187.16</td>\r\n                                    <td>0.0165</td>\r\n                                    <td>0.0165</td>\r\n                                    <td>102.60</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>0.0523</td>\r\n                                    <td>0.0523</td>\r\n                                    <td>325.21</td>\r\n                                    <td>0.0348</td>\r\n                                    <td>0.0348</td>\r\n                                    <td>216.39</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>0.0432</td>\r\n                                    <td>0.0432</td>\r\n                                    <td>268.62</td>\r\n                                    <td>0.0321</td>\r\n                                    <td>0.0321</td>\r\n                                    <td>199.60</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>0.0246</td>\r\n                                    <td>0.0246</td>\r\n                                    <td>152.96</td>\r\n                                    <td>0.0403</td>\r\n                                    <td>0.0403</td>\r\n                                    <td>250.59</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="col-xl-6">\r\n            <div class="card">\r\n                <div class="card-body">\r\n                    <h4 class="card-title mb-4">Notifications</h4>\r\n                    <ngx-simplebar style="height: 310px;">\r\n                        <ul class="verti-timeline list-unstyled">\r\n                            @for (data of notificationData; track $index) {\r\n                            <li class="event-list">\r\n                                <div class="event-timeline-dot">\r\n                                    <i class="bx bx-right-arrow-circle font-size-18"></i>\r\n                                </div>\r\n                                <div class="d-flex">\r\n                                    <div class="flex-shrink-0 me-3">\r\n                                        <h5 class="font-size-14">{{data.date}}<i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>\r\n                                        </h5>\r\n                                    </div>\r\n                                    <div class="flex-grow-1">\r\n                                        <div>\r\n                                            {{data.text}}\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </li>}\r\n                        </ul>\r\n                    </ngx-simplebar>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExchangeComponent, { className: "ExchangeComponent", filePath: "src/app/pages/crypto/exchange/exchange.component.ts", lineNumber: 18 });
})();

// src/app/pages/crypto/lending/lending.component.ts
function LendingComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "a", 62);
    \u0275\u0275text(2, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 62);
    \u0275\u0275text(4, "Another action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 62);
    \u0275\u0275text(6, "Something else here");
    \u0275\u0275elementEnd()();
  }
}
var LendingComponent = class _LendingComponent {
  constructor() {
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Crypto" }, { label: "Lending", active: true }];
  }
  static {
    this.\u0275fac = function LendingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LendingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LendingComponent, selectors: [["app-lending"]], standalone: false, decls: 312, vars: 1, consts: [[1, "container-fluid"], ["title", "Lending", 3, "breadcrumbItems"], [1, "row"], [1, "col-xl-4"], [1, "card"], [1, "card-body", "border-bottom"], ["dropdown", "", 1, "float-end", "dropdown", "ms-2"], ["href", "javascript: void(0);", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "dropdownToggle", "", 1, "text-muted", "dropdown-toggle"], [1, "mdi", "mdi-dots-horizontal", "font-size-18"], ["class", "dropdown-menu dropdown-menu-end", 4, "dropdownMenu"], [1, "mb-4", "me-3"], [1, "mdi", "mdi-account-circle", "text-primary", "h1"], [1, ""], [1, "text-muted", "mb-1"], [1, "text-muted", "mb-0"], [1, "col-sm-6"], [1, "text-muted", "mb-2"], [1, "text-sm-end", "mt-4", "mt-sm-0"], [1, "badge", "bg-success", "ms-1", "align-bottom"], [1, "card-body"], [1, "card-title", "mb-4"], [1, "verti-timeline", "list-unstyled"], [1, "event-list"], [1, "event-timeline-dot"], [1, "bx", "bx-right-arrow-circle"], [1, "d-flex"], [1, "flex-shrink-0", "me-3"], [1, "bx", "bx-user-plus", "h2", "text-primary"], [1, "flex-grow-1"], [1, "font-size-14"], [1, "text-muted"], [1, "bx", "bx-copy-alt", "h2", "text-primary"], [1, "bx", "bx-cloud-download", "h2", "text-primary"], [1, "col-xl-8"], [1, "card-title"], [1, "col-lg-4"], [1, "border", "p-3", "rounded", "mt-4"], [1, "d-flex", "align-items-center", "mb-3"], [1, "avatar-xs", "me-3"], [1, "avatar-title", "rounded-circle", "bg-warning-subtle", "text-warning", "font-size-18"], [1, "mdi", "mdi-bitcoin"], [1, "font-size-14", "mb-0"], [1, "col-lg-6"], [1, "text-muted", "mt-3"], [1, "mb-0"], [1, "col-lg-6", "align-self-end"], [1, "float-end", "mt-3"], ["href", "javascript: void(0);", 1, "btn", "btn-primary"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-18"], [1, "mdi", "mdi-ethereum"], [1, "avatar-title", "rounded-circle", "bg-info-subtle", "text-info", "font-size-18"], [1, "mdi", "mdi-litecoin"], [1, "table-responsive"], [1, "table", "table-nowrap", "align-middle", "mb-0"], ["scope", "col"], ["scope", "col", "colspan", "2"], ["scope", "row"], [1, "d-flex", "align-items-center"], [1, "font-size-14", "mb-1"], [2, "width", "120px"], ["href", "javascript: void(0);", 1, "btn", "btn-primary", "btn-sm", "w-xs"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript: void(0);", 1, "dropdown-item"]], template: function LendingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "a", 7);
        \u0275\u0275element(8, "i", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, LendingComponent_div_9_Template, 7, 0, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div")(11, "div", 10);
        \u0275\u0275element(12, "i", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div")(14, "h5", 12);
        \u0275\u0275text(15, "Henry Wells");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "p", 13);
        \u0275\u0275text(17, "henrywells@abc.com");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p", 14);
        \u0275\u0275text(19, "Id no: #SK0234");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(20, "div", 5)(21, "div")(22, "div", 2)(23, "div", 15)(24, "div")(25, "p", 16);
        \u0275\u0275text(26, "Available Balance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "h5");
        \u0275\u0275text(28, "$ 9148.00");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 15)(30, "div", 17)(31, "p", 16);
        \u0275\u0275text(32, "Since last month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "h5");
        \u0275\u0275text(34, "+ $ 215.53 ");
        \u0275\u0275elementStart(35, "span", 18);
        \u0275\u0275text(36, "+ 1.3 %");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(37, "div", 4)(38, "div", 19)(39, "h4", 20);
        \u0275\u0275text(40, "How it work");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div")(42, "ul", 21)(43, "li", 22)(44, "div", 23);
        \u0275\u0275element(45, "i", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 25)(47, "div", 26);
        \u0275\u0275element(48, "i", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "div", 28)(50, "div")(51, "h5", 29);
        \u0275\u0275text(52, "Register account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "p", 30);
        \u0275\u0275text(54, "New common language will be more simple and regular than the existing.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(55, "li", 22)(56, "div", 23);
        \u0275\u0275element(57, "i", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 25)(59, "div", 26);
        \u0275\u0275element(60, "i", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 28)(62, "div")(63, "h5", 29);
        \u0275\u0275text(64, "Select Deposit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "p", 30);
        \u0275\u0275text(66, "To achieve this, it would be necessary to have uniform grammar.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(67, "li", 22)(68, "div", 23);
        \u0275\u0275element(69, "i", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "div", 25)(71, "div", 26);
        \u0275\u0275element(72, "i", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div", 28)(74, "div")(75, "h5", 29);
        \u0275\u0275text(76, "Get Earnings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "p", 30);
        \u0275\u0275text(78, "New common language will be more simple and regular than the existing.");
        \u0275\u0275elementEnd()()()()()()()()()();
        \u0275\u0275elementStart(79, "div", 33)(80, "div", 4)(81, "div", 19)(82, "h4", 34);
        \u0275\u0275text(83, "Deposits");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "div", 2)(85, "div", 35)(86, "div", 36)(87, "div", 37)(88, "div", 38)(89, "span", 39);
        \u0275\u0275element(90, "i", 40);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(91, "h5", 41);
        \u0275\u0275text(92, "Bitcoin");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "div", 2)(94, "div", 42)(95, "div", 43)(96, "p");
        \u0275\u0275text(97, "Annual Yield");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "h4");
        \u0275\u0275text(99, "4.05 %");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "p", 44);
        \u0275\u0275text(101, "0.00745 BTC");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(102, "div", 45)(103, "div", 46)(104, "a", 47);
        \u0275\u0275text(105, "Select");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(106, "div", 35)(107, "div", 36)(108, "div", 37)(109, "div", 38)(110, "span", 48);
        \u0275\u0275element(111, "i", 49);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(112, "h5", 41);
        \u0275\u0275text(113, "Ethereum");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(114, "div", 2)(115, "div", 42)(116, "div", 43)(117, "p");
        \u0275\u0275text(118, "Annual Yield");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "h4");
        \u0275\u0275text(120, "5.08 %");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "p", 44);
        \u0275\u0275text(122, "0.0056 ETH");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(123, "div", 45)(124, "div", 46)(125, "a", 47);
        \u0275\u0275text(126, "Select");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(127, "div", 35)(128, "div", 36)(129, "div", 37)(130, "div", 38)(131, "span", 50);
        \u0275\u0275element(132, "i", 51);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(133, "h5", 41);
        \u0275\u0275text(134, "Litecoin");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(135, "div", 2)(136, "div", 42)(137, "div", 43)(138, "p");
        \u0275\u0275text(139, "Annual Yield");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "h4");
        \u0275\u0275text(141, "4.12 %");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "p", 44);
        \u0275\u0275text(143, "0.00245 LTC");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(144, "div", 45)(145, "div", 46)(146, "a", 47);
        \u0275\u0275text(147, "Select");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(148, "div", 4)(149, "div", 19)(150, "h4", 20);
        \u0275\u0275text(151, "My Assets");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(152, "div", 52)(153, "table", 53)(154, "thead")(155, "tr")(156, "th", 54);
        \u0275\u0275text(157, "Token");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "th", 54);
        \u0275\u0275text(159, "Price");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "th", 54);
        \u0275\u0275text(161, "Invest");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "th", 54);
        \u0275\u0275text(163, "Loans");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "th", 55);
        \u0275\u0275text(165, "Total");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(166, "tbody")(167, "tr")(168, "th", 56)(169, "div", 57)(170, "div", 38)(171, "span", 39);
        \u0275\u0275element(172, "i", 40);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(173, "span");
        \u0275\u0275text(174, "BTC");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(175, "td")(176, "div", 30);
        \u0275\u0275text(177, " $ 7525.47 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(178, "td")(179, "h5", 58);
        \u0275\u0275text(180, "1.2601");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(181, "div", 30);
        \u0275\u0275text(182, "$6225.74");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(183, "td")(184, "h5", 58);
        \u0275\u0275text(185, "0.1512");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(186, "div", 30);
        \u0275\u0275text(187, "$742.32");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(188, "td")(189, "h5", 58);
        \u0275\u0275text(190, "4.2562");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(191, "div", 30);
        \u0275\u0275text(192, "$6425.42");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(193, "td", 59)(194, "a", 60);
        \u0275\u0275text(195, "View");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(196, "tr")(197, "th", 56)(198, "div", 57)(199, "div", 38)(200, "span", 48);
        \u0275\u0275element(201, "i", 49);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(202, "span");
        \u0275\u0275text(203, "ETH");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(204, "td")(205, "div", 30);
        \u0275\u0275text(206, " $ 4235.78 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(207, "td")(208, "h5", 58);
        \u0275\u0275text(209, "0.0814");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(210, "div", 30);
        \u0275\u0275text(211, "$3256.29");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(212, "td")(213, "h5", 58);
        \u0275\u0275text(214, "0.0253");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(215, "div", 30);
        \u0275\u0275text(216, "$675.04");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(217, "td")(218, "h5", 58);
        \u0275\u0275text(219, "0.0921");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(220, "div", 30);
        \u0275\u0275text(221, "$4536.24");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(222, "td")(223, "a", 60);
        \u0275\u0275text(224, "View");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(225, "tr")(226, "th", 56)(227, "div", 57)(228, "div", 38)(229, "span", 50);
        \u0275\u0275element(230, "i", 51);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(231, "span");
        \u0275\u0275text(232, "LTC");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(233, "td")(234, "div", 30);
        \u0275\u0275text(235, " $ 3726.06 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(236, "td")(237, "h5", 58);
        \u0275\u0275text(238, "0.0682");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(239, "div", 30);
        \u0275\u0275text(240, "$2936.14");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(241, "td")(242, "h5", 58);
        \u0275\u0275text(243, "0.0234");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(244, "div", 30);
        \u0275\u0275text(245, "$523.17");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(246, "td")(247, "h5", 58);
        \u0275\u0275text(248, "0.0823");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(249, "div", 30);
        \u0275\u0275text(250, "$3254.23");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(251, "td")(252, "a", 60);
        \u0275\u0275text(253, "View");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(254, "tr")(255, "th", 56)(256, "div", 57)(257, "div", 38)(258, "span", 39);
        \u0275\u0275element(259, "i", 40);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(260, "span");
        \u0275\u0275text(261, "BTC");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(262, "td")(263, "div", 30);
        \u0275\u0275text(264, " $ 7525.47 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(265, "td")(266, "h5", 58);
        \u0275\u0275text(267, "1.2601");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(268, "div", 30);
        \u0275\u0275text(269, "$6225.74");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(270, "td")(271, "h5", 58);
        \u0275\u0275text(272, "0.1512");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(273, "div", 30);
        \u0275\u0275text(274, "$742.32");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(275, "td")(276, "h5", 58);
        \u0275\u0275text(277, "4.2562");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(278, "div", 30);
        \u0275\u0275text(279, "$6425.42");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(280, "td")(281, "a", 60);
        \u0275\u0275text(282, "View");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(283, "tr")(284, "th", 56)(285, "div", 57)(286, "div", 38)(287, "span", 48);
        \u0275\u0275element(288, "i", 49);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(289, "span");
        \u0275\u0275text(290, "ETH");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(291, "td")(292, "div", 30);
        \u0275\u0275text(293, " $ 4235.78 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(294, "td")(295, "h5", 58);
        \u0275\u0275text(296, "0.0814");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(297, "div", 30);
        \u0275\u0275text(298, "$3256.29");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(299, "td")(300, "h5", 58);
        \u0275\u0275text(301, "0.0253");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(302, "div", 30);
        \u0275\u0275text(303, "$675.04");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(304, "td")(305, "h5", 58);
        \u0275\u0275text(306, "0.0921");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(307, "div", 30);
        \u0275\u0275text(308, "$4536.24");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(309, "td")(310, "a", 60);
        \u0275\u0275text(311, "View");
        \u0275\u0275elementEnd()()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
      }
    }, dependencies: [BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective, PagetitleComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LendingComponent, [{
    type: Component,
    args: [{ selector: "app-lending", standalone: false, template: '<div class="container-fluid">\r\n\r\n    <app-page-title title="Lending" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r\n\r\n    <div class="row">\r\n        <div class="col-xl-4">\r\n            <div class="card">\r\n                <div class="card-body border-bottom">\r\n                    <div class="float-end dropdown ms-2" dropdown>\r\n                        <a class="text-muted dropdown-toggle" href="javascript: void(0);" role="button"\r\n                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" dropdownToggle>\r\n                            <i class="mdi mdi-dots-horizontal font-size-18"></i>\r\n                        </a>\r\n\r\n                        <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>\r\n                            <a class="dropdown-item" href="javascript: void(0);">Action</a>\r\n                            <a class="dropdown-item" href="javascript: void(0);">Another action</a>\r\n                            <a class="dropdown-item" href="javascript: void(0);">Something else here</a>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div>\r\n                        <div class="mb-4 me-3">\r\n                            <i class="mdi mdi-account-circle text-primary h1"></i>\r\n                        </div>\r\n\r\n                        <div>\r\n                            <h5 class="">Henry Wells</h5>\r\n                            <p class="text-muted mb-1">henrywells&#64;abc.com</p>\r\n                            <p class="text-muted mb-0">Id no: #SK0234</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class="card-body border-bottom">\r\n                    <div>\r\n                        <div class="row">\r\n                            <div class="col-sm-6">\r\n                                <div>\r\n                                    <p class="text-muted mb-2">Available Balance</p>\r\n                                    <h5>$ 9148.00</h5>\r\n                                </div>\r\n                            </div>\r\n                            <div class="col-sm-6">\r\n                                <div class="text-sm-end mt-4 mt-sm-0">\r\n                                    <p class="text-muted mb-2">Since last month</p>\r\n                                    <h5>+ $ 215.53 <span class="badge bg-success ms-1 align-bottom">+ 1.3 %</span>\r\n                                    </h5>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class="card">\r\n                <div class="card-body">\r\n                    <h4 class="card-title mb-4">How it work</h4>\r\n\r\n                    <div>\r\n                        <ul class="verti-timeline list-unstyled">\r\n                            <li class="event-list">\r\n                                <div class="event-timeline-dot">\r\n                                    <i class="bx bx-right-arrow-circle"></i>\r\n                                </div>\r\n                                <div class="d-flex">\r\n                                    <div class="flex-shrink-0 me-3">\r\n                                        <i class="bx bx-user-plus h2 text-primary"></i>\r\n                                    </div>\r\n                                    <div class="flex-grow-1">\r\n                                        <div>\r\n                                            <h5 class="font-size-14">Register account</h5>\r\n                                            <p class="text-muted">New common language will be more simple and regular\r\n                                                than the existing.</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li class="event-list">\r\n                                <div class="event-timeline-dot">\r\n                                    <i class="bx bx-right-arrow-circle"></i>\r\n                                </div>\r\n                                <div class="d-flex">\r\n                                    <div class="flex-shrink-0 me-3">\r\n                                        <i class="bx bx-copy-alt h2 text-primary"></i>\r\n                                    </div>\r\n                                    <div class="flex-grow-1">\r\n                                        <div>\r\n                                            <h5 class="font-size-14">Select Deposit</h5>\r\n                                            <p class="text-muted">To achieve this, it would be necessary to have uniform\r\n                                                grammar.</p>\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n\r\n                            <li class="event-list">\r\n                                <div class="event-timeline-dot">\r\n                                    <i class="bx bx-right-arrow-circle"></i>\r\n                                </div>\r\n                                <div class="d-flex">\r\n                                    <div class="flex-shrink-0 me-3">\r\n                                        <i class="bx bx-cloud-download h2 text-primary"></i>\r\n                                    </div>\r\n                                    <div class="flex-grow-1">\r\n                                        <div>\r\n                                            <h5 class="font-size-14">Get Earnings</h5>\r\n                                            <p class="text-muted">New common language will be more simple and regular\r\n                                                than the existing.</p>\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="col-xl-8">\r\n            <div class="card">\r\n                <div class="card-body">\r\n                    <h4 class="card-title">Deposits</h4>\r\n\r\n                    <div class="row">\r\n                        <div class="col-lg-4">\r\n                            <div class="border p-3 rounded mt-4">\r\n                                <div class="d-flex align-items-center mb-3">\r\n                                    <div class="avatar-xs me-3">\r\n                                        <span\r\n                                            class="avatar-title rounded-circle bg-warning-subtle text-warning font-size-18">\r\n                                            <i class="mdi mdi-bitcoin"></i>\r\n                                        </span>\r\n                                    </div>\r\n                                    <h5 class="font-size-14 mb-0">Bitcoin</h5>\r\n                                </div>\r\n\r\n                                <div class="row">\r\n                                    <div class="col-lg-6">\r\n                                        <div class="text-muted mt-3">\r\n                                            <p>Annual Yield</p>\r\n                                            <h4>4.05 %</h4>\r\n                                            <p class="mb-0">0.00745 BTC</p>\r\n\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class="col-lg-6 align-self-end">\r\n                                        <div class="float-end mt-3">\r\n                                            <a href="javascript: void(0);" class="btn btn-primary">Select</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class="col-lg-4">\r\n                            <div class="border p-3 rounded mt-4">\r\n                                <div class="d-flex align-items-center mb-3">\r\n                                    <div class="avatar-xs me-3">\r\n                                        <span\r\n                                            class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-18">\r\n                                            <i class="mdi mdi-ethereum"></i>\r\n                                        </span>\r\n                                    </div>\r\n                                    <h5 class="font-size-14 mb-0">Ethereum</h5>\r\n                                </div>\r\n\r\n                                <div class="row">\r\n                                    <div class="col-lg-6">\r\n                                        <div class="text-muted mt-3">\r\n                                            <p>Annual Yield</p>\r\n                                            <h4>5.08 %</h4>\r\n                                            <p class="mb-0">0.0056 ETH</p>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class="col-lg-6 align-self-end">\r\n                                        <div class="float-end mt-3">\r\n                                            <a href="javascript: void(0);" class="btn btn-primary">Select</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class="col-lg-4">\r\n                            <div class="border p-3 rounded mt-4">\r\n                                <div class="d-flex align-items-center mb-3">\r\n                                    <div class="avatar-xs me-3">\r\n                                        <span class="avatar-title rounded-circle bg-info-subtle text-info font-size-18">\r\n                                            <i class="mdi mdi-litecoin"></i>\r\n                                        </span>\r\n                                    </div>\r\n                                    <h5 class="font-size-14 mb-0">Litecoin</h5>\r\n                                </div>\r\n\r\n                                <div class="row">\r\n                                    <div class="col-lg-6">\r\n                                        <div class="text-muted mt-3">\r\n                                            <p>Annual Yield</p>\r\n                                            <h4>4.12 %</h4>\r\n                                            <p class="mb-0">0.00245 LTC</p>\r\n\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class="col-lg-6 align-self-end">\r\n                                        <div class="float-end mt-3">\r\n                                            <a href="javascript: void(0);" class="btn btn-primary">Select</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div class="card">\r\n                <div class="card-body">\r\n                    <h4 class="card-title mb-4">My Assets</h4>\r\n\r\n                    <div class="table-responsive">\r\n                        <table class="table table-nowrap align-middle mb-0">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th scope="col">Token</th>\r\n                                    <th scope="col">Price</th>\r\n                                    <th scope="col">Invest</th>\r\n                                    <th scope="col">Loans</th>\r\n                                    <th scope="col" colspan="2">Total</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <th scope="row">\r\n                                        <div class="d-flex align-items-center">\r\n                                            <div class="avatar-xs me-3">\r\n                                                <span\r\n                                                    class="avatar-title rounded-circle bg-warning-subtle text-warning font-size-18">\r\n                                                    <i class="mdi mdi-bitcoin"></i>\r\n                                                </span>\r\n                                            </div>\r\n                                            <span>BTC</span>\r\n                                        </div>\r\n                                    </th>\r\n                                    <td>\r\n                                        <div class="text-muted">\r\n                                            $ 7525.47\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <h5 class="font-size-14 mb-1">1.2601</h5>\r\n                                        <div class="text-muted">$6225.74</div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <h5 class="font-size-14 mb-1">0.1512</h5>\r\n                                        <div class="text-muted">$742.32</div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <h5 class="font-size-14 mb-1">4.2562</h5>\r\n                                        <div class="text-muted">$6425.42</div>\r\n                                    </td>\r\n                                    <td style="width: 120px;">\r\n                                        <a href="javascript: void(0);" class="btn btn-primary btn-sm w-xs">View</a>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th scope="row">\r\n                                        <div class="d-flex align-items-center">\r\n                                            <div class="avatar-xs me-3">\r\n                                                <span\r\n                                                    class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-18">\r\n                                                    <i class="mdi mdi-ethereum"></i>\r\n                                                </span>\r\n                                            </div>\r\n                                            <span>ETH</span>\r\n                                        </div>\r\n                                    </th>\r\n                                    <td>\r\n                                        <div class="text-muted">\r\n                                            $ 4235.78\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <h5 class="font-size-14 mb-1">0.0814</h5>\r\n                                        <div class="text-muted">$3256.29</div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <h5 class="font-size-14 mb-1">0.0253</h5>\r\n                                        <div class="text-muted">$675.04</div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <h5 class="font-size-14 mb-1">0.0921</h5>\r\n                                        <div class="text-muted">$4536.24</div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <a href="javascript: void(0);" class="btn btn-primary btn-sm w-xs">View</a>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th scope="row">\r\n                                        <div class="d-flex align-items-center">\r\n                                            <div class="avatar-xs me-3">\r\n                                                <span\r\n                                                    class="avatar-title rounded-circle bg-info-subtle text-info font-size-18">\r\n                                                    <i class="mdi mdi-litecoin"></i>\r\n                                                </span>\r\n                                            </div>\r\n                                            <span>LTC</span>\r\n                                        </div>\r\n                                    </th>\r\n                                    <td>\r\n                                        <div class="text-muted">\r\n                                            $ 3726.06\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <h5 class="font-size-14 mb-1">0.0682</h5>\r\n                                        <div class="text-muted">$2936.14</div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <h5 class="font-size-14 mb-1">0.0234</h5>\r\n                                        <div class="text-muted">$523.17</div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <h5 class="font-size-14 mb-1">0.0823</h5>\r\n                                        <div class="text-muted">$3254.23</div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <a href="javascript: void(0);" class="btn btn-primary btn-sm w-xs">View</a>\r\n                                    </td>\r\n                                </tr>\r\n\r\n                                <tr>\r\n                                    <th scope="row">\r\n                                        <div class="d-flex align-items-center">\r\n                                            <div class="avatar-xs me-3">\r\n                                                <span\r\n                                                    class="avatar-title rounded-circle bg-warning-subtle text-warning font-size-18">\r\n                                                    <i class="mdi mdi-bitcoin"></i>\r\n                                                </span>\r\n                                            </div>\r\n                                            <span>BTC</span>\r\n                                        </div>\r\n                                    </th>\r\n                                    <td>\r\n                                        <div class="text-muted">\r\n                                            $ 7525.47\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <h5 class="font-size-14 mb-1">1.2601</h5>\r\n                                        <div class="text-muted">$6225.74</div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <h5 class="font-size-14 mb-1">0.1512</h5>\r\n                                        <div class="text-muted">$742.32</div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <h5 class="font-size-14 mb-1">4.2562</h5>\r\n                                        <div class="text-muted">$6425.42</div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <a href="javascript: void(0);" class="btn btn-primary btn-sm w-xs">View</a>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th scope="row">\r\n                                        <div class="d-flex align-items-center">\r\n                                            <div class="avatar-xs me-3">\r\n                                                <span\r\n                                                    class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-18">\r\n                                                    <i class="mdi mdi-ethereum"></i>\r\n                                                </span>\r\n                                            </div>\r\n                                            <span>ETH</span>\r\n                                        </div>\r\n                                    </th>\r\n                                    <td>\r\n                                        <div class="text-muted">\r\n                                            $ 4235.78\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <h5 class="font-size-14 mb-1">0.0814</h5>\r\n                                        <div class="text-muted">$3256.29</div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <h5 class="font-size-14 mb-1">0.0253</h5>\r\n                                        <div class="text-muted">$675.04</div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <h5 class="font-size-14 mb-1">0.0921</h5>\r\n                                        <div class="text-muted">$4536.24</div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <a href="javascript: void(0);" class="btn btn-primary btn-sm w-xs">View</a>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- end row -->\r\n</div>' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LendingComponent, { className: "LendingComponent", filePath: "src/app/pages/crypto/lending/lending.component.ts", lineNumber: 9 });
})();

// src/app/pages/crypto/kycapplication/kycapplication.component.ts
function KycapplicationComponent_ng_template_20_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1, "1.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Personal Info");
    \u0275\u0275elementEnd();
  }
}
function KycapplicationComponent_ng_template_20_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 25)(2, "form")(3, "div", 26)(4, "div", 44)(5, "div", 28)(6, "label", 45);
    \u0275\u0275text(7, "First name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 44)(10, "div", 28)(11, "label", 47);
    \u0275\u0275text(12, "Last name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 26)(15, "div", 44)(16, "div", 28)(17, "label", 49);
    \u0275\u0275text(18, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 44)(21, "div", 28)(22, "label", 51);
    \u0275\u0275text(23, "Date of birth");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 52);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 26)(26, "div", 27)(27, "div", 28)(28, "label", 53);
    \u0275\u0275text(29, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "select", 54)(31, "option", 55);
    \u0275\u0275text(32, "San Francisco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 56);
    \u0275\u0275text(34, "Los Angeles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 57);
    \u0275\u0275text(36, "San Diego");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(37, "ul", 34)(38, "li", 37)(39, "button", 38);
    \u0275\u0275text(40, "Next");
    \u0275\u0275elementEnd()()()();
  }
}
function KycapplicationComponent_ng_template_20_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1, "2.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Confirm email");
    \u0275\u0275elementEnd();
  }
}
function KycapplicationComponent_ng_template_20_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1, "3.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Document Verification");
    \u0275\u0275elementEnd();
  }
}
function KycapplicationComponent_ng_template_20_Conditional_38_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 63);
  }
  if (rf & 2) {
    const file_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", file_r6.dataURL, \u0275\u0275sanitizeUrl);
  }
}
function KycapplicationComponent_ng_template_20_Conditional_38_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 63);
  }
  if (rf & 2) {
    const file_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", file_r6, \u0275\u0275sanitizeUrl);
  }
}
function KycapplicationComponent_ng_template_20_Conditional_38_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const file_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(file_r6.name);
  }
}
function KycapplicationComponent_ng_template_20_Conditional_38_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const file_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(file_r6.size);
  }
}
function KycapplicationComponent_ng_template_20_Conditional_38_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 58)(1, "div", 59)(2, "div", 60)(3, "div", 61)(4, "div", 62);
    \u0275\u0275conditionalCreate(5, KycapplicationComponent_ng_template_20_Conditional_38_For_2_Conditional_5_Template, 1, 1, "img", 63)(6, KycapplicationComponent_ng_template_20_Conditional_38_For_2_Conditional_6_Template, 1, 1, "img", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 64)(8, "div", 65);
    \u0275\u0275conditionalCreate(9, KycapplicationComponent_ng_template_20_Conditional_38_For_2_Conditional_9_Template, 2, 1, "h5", 66);
    \u0275\u0275conditionalCreate(10, KycapplicationComponent_ng_template_20_Conditional_38_For_2_Conditional_10_Template, 2, 1, "p", 67);
    \u0275\u0275element(11, "strong", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 69)(13, "button", 70);
    \u0275\u0275listener("click", function KycapplicationComponent_ng_template_20_Conditional_38_For_2_Template_button_click_13_listener() {
      const file_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.removeFile(file_r6));
    });
    \u0275\u0275text(14, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const file_r6 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275conditional(file_r6.dataURL ? 5 : 6);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(file_r6.name ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(file_r6.size ? 10 : -1);
  }
}
function KycapplicationComponent_ng_template_20_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 40);
    \u0275\u0275repeaterCreate(1, KycapplicationComponent_ng_template_20_Conditional_38_For_2_Template, 15, 3, "li", 58, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.uploadedFiles);
  }
}
function KycapplicationComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "h5", 19);
    \u0275\u0275text(2, "Verify your Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 20);
    \u0275\u0275listener("click", function KycapplicationComponent_ng_template_20_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.modalRef == null ? null : ctx_r3.modalRef.hide());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 21)(5, "ng-stepper", 22, 1)(7, "cdk-step", 23);
    \u0275\u0275template(8, KycapplicationComponent_ng_template_20_ng_template_8_Template, 4, 0, "ng-template", 24);
    \u0275\u0275conditionalCreate(9, KycapplicationComponent_ng_template_20_Conditional_9_Template, 41, 0, "section");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "cdk-step", 23);
    \u0275\u0275template(11, KycapplicationComponent_ng_template_20_ng_template_11_Template, 4, 0, "ng-template", 24);
    \u0275\u0275elementStart(12, "div", 25)(13, "form")(14, "div", 26)(15, "div", 27)(16, "div", 28)(17, "label", 29);
    \u0275\u0275text(18, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 28)(21, "label", 31);
    \u0275\u0275text(22, "Confirm code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 28);
    \u0275\u0275text(25, " Didn't recieve code ? ");
    \u0275\u0275elementStart(26, "button", 33);
    \u0275\u0275text(27, "Resend Code");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(28, "ul", 34)(29, "li", 35)(30, "button", 36);
    \u0275\u0275text(31, "Previous");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "li", 37)(33, "button", 38);
    \u0275\u0275text(34, "Next");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "cdk-step", 23);
    \u0275\u0275template(36, KycapplicationComponent_ng_template_20_ng_template_36_Template, 4, 0, "ng-template", 24);
    \u0275\u0275elementStart(37, "dropzone", 39);
    \u0275\u0275listener("success", function KycapplicationComponent_ng_template_20_Template_dropzone_success_37_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onUploadSuccess($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(38, KycapplicationComponent_ng_template_20_Conditional_38_Template, 3, 0, "ul", 40);
    \u0275\u0275elementStart(39, "ul", 41)(40, "li", 35)(41, "button", 42);
    \u0275\u0275text(42, "Previous");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const cdkStepper_r7 = \u0275\u0275reference(6);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("linear", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("optional", false);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(cdkStepper_r7.selectedIndex === 0 ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("optional", true);
    \u0275\u0275advance(25);
    \u0275\u0275property("optional", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("config", ctx_r3.dropzoneConfig)("message", "Drop files here or click to upload.");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.uploadedFiles ? 38 : -1);
  }
}
var KycapplicationComponent = class _KycapplicationComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.files = [];
    this.dropzoneConfig = {
      clickable: true,
      addRemoveLinks: true,
      previewsContainer: false
    };
    this.uploadedFiles = [];
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Crypto" }, { label: "KYC Application", active: true }];
  }
  /**
   * Open modal
   * @param content modal content
   */
  verificationModal(content) {
    this.modalRef = this.modalService.show(content, { class: "modal-lg" });
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
    this.\u0275fac = function KycapplicationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _KycapplicationComponent)(\u0275\u0275directiveInject(BsModalService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KycapplicationComponent, selectors: [["app-kycapplication"]], standalone: false, decls: 22, vars: 1, consts: [["content", ""], ["cdkStepper", ""], [1, "container-fluid"], ["title", "KYC Application", 3, "breadcrumbItems"], [1, "row", "justify-content-center", "mt-lg-5"], [1, "col-xl-5", "col-sm-8"], [1, "card"], [1, "card-body"], [1, "text-center"], [1, "row", "justify-content-center"], [1, "col-lg-10"], [1, "mt-4", "fw-semibold"], [1, "text-muted", "mt-3"], [1, "mt-4"], ["type", "button", "data-toggle", "modal", "data-target", "#verificationModal", 1, "btn", "btn-primary", 3, "click"], [1, "row", "justify-content-center", "mt-5", "mb-2"], [1, "col-sm-6", "col-8"], ["src", "assets/images/verification-img.png", "alt", "", 1, "img-fluid"], [1, "modal-header"], [1, "modal-title", "mt-0"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "wizard", 3, "linear"], [3, "optional"], ["cdkStepLabel", ""], [1, "kyc-tab-content"], [1, "row"], [1, "col-lg-12"], [1, "mb-3"], ["for", "kycemail-input"], ["type", "email", "id", "kycemail-input", "placeholder", "Enter Email Address", 1, "form-control"], ["for", "kycconfirmcode-input"], ["type", "email", "id", "kycconfirmcode-input", "placeholder", "Enter Confirm code", 1, "form-control"], ["type", "button", 1, "btn", "btn-link"], [1, "list-inline", "wizard", "mb-0"], [1, "previous", "list-inline-item"], ["cdkStepperPrevious", "", 1, "btn", "btn-primary"], [1, "next", "list-inline-item", "float-end"], ["cdkStepperNext", "", 1, "btn", "btn-primary"], [1, "dropzone", 3, "success", "config", "message"], ["id", "dropzone-preview", 1, "list-unstyled", "mb-0"], [1, "list-inline", "wizard", "mt-2", "mb-0"], ["awPreviousStep", "", 1, "btn", "btn-primary"], [1, "number"], [1, "col-lg-6"], ["for", "kycfirstname-input"], ["type", "text", "id", "kycfirstname-input", "placeholder", "Enter First name", 1, "form-control"], ["for", "kyclastname-input"], ["type", "text", "id", "kyclastname-input", "placeholder", "Enter Last name", 1, "form-control"], ["for", "kycphoneno-input"], ["type", "text", "id", "kycphoneno-input", "placeholder", "Enter Phone number", 1, "form-control"], ["for", "kycbirthdate-input"], ["type", "text", "id", "kycbirthdate-input", "placeholder", "Enter Date of birth", "bsDatepicker", "", 1, "form-control"], ["for", "kycselectcity-input"], ["id", "kycselectcity-input", 1, "form-select"], ["value", "SF", "selected", ""], ["value", "LA"], ["value", "SD"], ["id", "dropzone-preview-list", 1, "mt-2"], [1, "border", "rounded"], [1, "d-flex", "p-2"], [1, "flex-shrink-0", "me-3"], [1, "avatar-sm", "bg-light", "rounded"], ["alt", "Dropzone-Image", 1, "img-fluid", "rounded", "d-block", 3, "src"], [1, "flex-grow-1"], [1, "pt-1"], [1, "fs-md", "mb-1"], [1, "fs-sm", "text-muted", "mb-0"], ["data-dz-errormessage", "", 1, "error", "text-danger"], [1, "flex-shrink-0", "ms-3"], [1, "btn", "btn-sm", "btn-danger", 3, "click"]], template: function KycapplicationComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275element(1, "app-page-title", 3);
        \u0275\u0275elementStart(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "div", 7)(6, "div", 8)(7, "div", 9)(8, "div", 10)(9, "h4", 11);
        \u0275\u0275text(10, "KYC Verification");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p", 12);
        \u0275\u0275text(12, "Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis perferendis asperiores repellat.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 13)(14, "button", 14);
        \u0275\u0275listener("click", function KycapplicationComponent_Template_button_click_14_listener() {
          \u0275\u0275restoreView(_r1);
          const content_r2 = \u0275\u0275reference(21);
          return \u0275\u0275resetView(ctx.verificationModal(content_r2));
        });
        \u0275\u0275text(15, " Click here for Verification ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(16, "div", 15)(17, "div", 16)(18, "div");
        \u0275\u0275element(19, "img", 17);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(20, KycapplicationComponent_ng_template_20_Template, 43, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
      }
    }, dependencies: [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, NgControlStatusGroup, NgForm, BsDatepickerDirective, BsDatepickerInputDirective, CdkStep, CdkStepLabel, CdkStepperNext, CdkStepperPrevious, NgStepperComponent, DropzoneComponent, PagetitleComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KycapplicationComponent, [{
    type: Component,
    args: [{ selector: "app-kycapplication", standalone: false, template: `<div class="container-fluid">\r
    <app-page-title title="KYC Application" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
\r
    <div class="row justify-content-center mt-lg-5">\r
        <div class="col-xl-5 col-sm-8">\r
            <div class="card">\r
                <div class="card-body">\r
                    <div class="text-center">\r
                        <div class="row justify-content-center">\r
                            <div class="col-lg-10">\r
                                <h4 class="mt-4 fw-semibold">KYC Verification</h4>\r
                                <p class="text-muted mt-3">Itaque earum rerum hic tenetur a sapiente delectus ut aut\r
                                    reiciendis perferendis asperiores repellat.</p>\r
\r
                                <div class="mt-4">\r
                                    <!-- Button trigger modal -->\r
                                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#verificationModal" (click)="verificationModal(content)">\r
                                        Click here for Verification\r
                                    </button>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <div class="row justify-content-center mt-5 mb-2">\r
                            <div class="col-sm-6 col-8">\r
                                <div>\r
                                    <img src="assets/images/verification-img.png" alt="" class="img-fluid">\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Extra Large Modal -->\r
                    <ng-template #content let-modal>\r
                        <div class="modal-header">\r
                            <h5 class="modal-title mt-0">Verify your Account</h5>\r
                            <button type="button" class="btn-close" aria-label="Close" (click)="modalRef?.hide()">\r
                            </button>\r
                        </div>\r
                        <div class="modal-body">\r
                            <ng-stepper #cdkStepper [linear]="true" class="wizard">\r
\r
                                <cdk-step [optional]="false">\r
                                    <ng-template cdkStepLabel>\r
                                        <span class="number">1.</span>\r
                                        <span>Personal Info</span>\r
                                    </ng-template>\r
                                    @if(cdkStepper.selectedIndex === 0){\r
                                    <section>\r
                                        <div class="kyc-tab-content">\r
                                            <form>\r
                                                <div class="row">\r
                                                    <div class="col-lg-6">\r
                                                        <div class="mb-3">\r
                                                            <label for="kycfirstname-input">First name</label>\r
                                                            <input type="text" class="form-control" id="kycfirstname-input" placeholder="Enter First name">\r
                                                        </div>\r
                                                    </div>\r
                                                    <div class="col-lg-6">\r
                                                        <div class="mb-3">\r
                                                            <label for="kyclastname-input">Last name</label>\r
                                                            <input type="text" class="form-control" id="kyclastname-input" placeholder="Enter Last name">\r
                                                        </div>\r
                                                    </div>\r
                                                </div>\r
\r
                                                <div class="row">\r
                                                    <div class="col-lg-6">\r
                                                        <div class="mb-3">\r
                                                            <label for="kycphoneno-input">Phone</label>\r
                                                            <input type="text" class="form-control" id="kycphoneno-input" placeholder="Enter Phone number">\r
                                                        </div>\r
                                                    </div>\r
                                                    <div class="col-lg-6">\r
                                                        <div class="mb-3">\r
                                                            <label for="kycbirthdate-input">Date of birth</label>\r
                                                            <input type="text" class="form-control" id="kycbirthdate-input" placeholder="Enter Date of birth" bsDatepicker>\r
                                                        </div>\r
                                                    </div>\r
                                                </div>\r
                                                <div class="row">\r
                                                    <div class="col-lg-12">\r
                                                        <div class="mb-3">\r
                                                            <label for="kycselectcity-input">City</label>\r
                                                            <select class="form-select" id="kycselectcity-input">\r
                                                                <option value="SF" selected="">San Francisco</option>\r
                                                                <option value="LA">Los Angeles</option>\r
                                                                <option value="SD">San Diego</option>\r
                                                            </select>\r
                                                        </div>\r
                                                    </div>\r
                                                </div>\r
                                            </form>\r
                                        </div>\r
                                        <ul class="list-inline wizard mb-0">\r
                                            <li class="next list-inline-item float-end"><button class="btn btn-primary" cdkStepperNext>Next</button>\r
                                            </li>\r
                                        </ul>\r
                                    </section>\r
                                    }\r
                                </cdk-step>\r
\r
                                <cdk-step [optional]="true">\r
                                    <ng-template cdkStepLabel>\r
                                        <span class="number">2.</span>\r
                                        <span>Confirm email</span>\r
                                    </ng-template>\r
                                    <div class="kyc-tab-content">\r
                                        <form>\r
                                            <div class="row">\r
                                                <div class="col-lg-12">\r
                                                    <div class="mb-3">\r
                                                        <label for="kycemail-input">Email</label>\r
                                                        <input type="email" class="form-control" id="kycemail-input" placeholder="Enter Email Address">\r
                                                    </div>\r
\r
                                                    <div class="mb-3">\r
                                                        <label for="kycconfirmcode-input">Confirm code</label>\r
                                                        <input type="email" class="form-control" id="kycconfirmcode-input" placeholder="Enter Confirm code">\r
                                                    </div>\r
\r
                                                    <div class="mb-3">\r
                                                        Didn't recieve code ?\r
                                                        <button type="button" class="btn btn-link">Resend Code</button>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                        </form>\r
                                    </div>\r
                                    <ul class="list-inline wizard mb-0">\r
                                        <li class="previous list-inline-item"><button class="btn btn-primary" cdkStepperPrevious>Previous</button>\r
                                        </li>\r
                                        <li class="next list-inline-item float-end"><button class="btn btn-primary" cdkStepperNext>Next</button>\r
                                        </li>\r
                                    </ul>\r
                                </cdk-step>\r
\r
                                <cdk-step [optional]="true">\r
                                    <ng-template cdkStepLabel>\r
                                        <span class="number">3.</span>\r
                                        <span>Document Verification</span>\r
                                    </ng-template>\r
                                    <dropzone class="dropzone" [config]="dropzoneConfig" [message]="'Drop files here or click to upload.'" (success)="onUploadSuccess($event)">\r
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
                                                            }@else{\r
                                                            <img class="img-fluid rounded d-block" [src]="file" alt="Dropzone-Image" />\r
                                                            }\r
                                                        </div>\r
                                                    </div>\r
                                                    <div class="flex-grow-1">\r
                                                        <div class="pt-1">\r
                                                            @if(file.name){\r
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
                                        </li>}\r
                                    </ul>\r
                                    }\r
                                    <!-- end dropzon-preview -->\r
                                    <!-- </div> -->\r
                                    <ul class="list-inline wizard mt-2 mb-0">\r
                                        <li class="previous list-inline-item"><button class="btn btn-primary" awPreviousStep>Previous</button>\r
                                        </li>\r
                                    </ul>\r
                                </cdk-step>\r
\r
                            </ng-stepper>\r
                        </div>\r
                    </ng-template>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
    <!-- end row -->\r
</div>` }]
  }], () => [{ type: BsModalService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KycapplicationComponent, { className: "KycapplicationComponent", filePath: "src/app/pages/crypto/kycapplication/kycapplication.component.ts", lineNumber: 11 });
})();

// src/app/pages/crypto/orders/orders.component.ts
var _c0 = (a0, a1, a2) => ({ "bg-success": a0, "bg-warning": a1, "bg-danger": a2 });
function OrdersComponent_ng_template_55_Template(rf, ctx) {
}
function OrdersComponent_ng_template_57_Template(rf, ctx) {
}
function OrdersComponent_ng_template_58_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 43);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4.coin);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4.usd);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(7, _c0, data_r4.status === "Completed", data_r4.status === "Pending", data_r4.status === "Failed"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r4.status);
  }
}
function OrdersComponent_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "div", 30)(3, "label", 31);
    \u0275\u0275text(4, "Show ");
    \u0275\u0275elementStart(5, "select", 32);
    \u0275\u0275twoWayListener("ngModelChange", function OrdersComponent_ng_template_58_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.pageSize, $event) || (ctx_r2.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function OrdersComponent_ng_template_58_Template_select_change_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatePageSize());
    });
    \u0275\u0275elementStart(6, "option", 33);
    \u0275\u0275text(7, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 33);
    \u0275\u0275text(9, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 33);
    \u0275\u0275text(11, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 33);
    \u0275\u0275text(13, "100");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(14, " entries");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 29)(16, "div", 34)(17, "label", 31);
    \u0275\u0275text(18, "Search: ");
    \u0275\u0275elementStart(19, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function OrdersComponent_ng_template_58_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.term, $event) || (ctx_r2.term = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function OrdersComponent_ng_template_58_Template_input_ngModelChange_19_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterdata());
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(20, "table", 36)(21, "thead")(22, "tr")(23, "th");
    \u0275\u0275text(24, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "Coin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th");
    \u0275\u0275text(30, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th");
    \u0275\u0275text(32, "Value in USD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th");
    \u0275\u0275text(34, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "tbody");
    \u0275\u0275repeaterCreate(36, OrdersComponent_ng_template_58_For_37_Template, 14, 11, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 37)(39, "div", 38)(40, "div", 39);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 38)(43, "div", 40)(44, "ul", 41)(45, "pagination", 42);
    \u0275\u0275listener("pageChanged", function OrdersComponent_ng_template_58_Template_pagination_pageChanged_45_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.pageChanged($event));
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 25);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 50);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 100);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.term);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r2.orderList);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" Showing ", ctx_r2.orderList == null ? null : ctx_r2.orderList.length, " of ", ctx_r2.returnedArray == null ? null : ctx_r2.returnedArray.length, " entries ");
    \u0275\u0275advance(4);
    \u0275\u0275property("totalItems", ctx_r2.returnedArray == null ? null : ctx_r2.returnedArray.length)("itemsPerPage", 10);
  }
}
var OrdersComponent = class _OrdersComponent {
  constructor(store) {
    this.store = store;
    this.endItem = 10;
    this.pageSize = 10;
    this.startItem = 0;
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Crypto" }, { label: "Orders", active: true }];
    setTimeout(() => {
      this.store.dispatch(fetchorderData());
      this.store.select(selectData).subscribe((data) => {
        this.orderList = data;
        this.returnedArray = data;
        this.orderList = this.returnedArray.slice(0, 10);
      });
      document.getElementById("elmLoader")?.classList.add("d-none");
    }, 1200);
  }
  // pagechanged
  pageChanged(event) {
    this.startItem = (event.page - 1) * event.itemsPerPage;
    this.endItem = event.page * event.itemsPerPage;
    this.filterdata();
  }
  // fiter job
  searchCoin() {
    var coin = document.getElementById("select2").value;
    if (coin) {
      this.orderList = this.returnedArray.filter((es) => {
        return es.coin === coin;
      });
    } else {
      this.orderList = this.returnedArray;
    }
  }
  // filterdata
  filterdata() {
    let data = this.returnedArray;
    if (this.term) {
      data = this.returnedArray.filter((el) => el.type.toLowerCase().includes(this.term.toLowerCase()));
    }
    this.orderList = data.slice(this.startItem, this.endItem);
  }
  // pageper item selected
  updatePageSize() {
    this.orderList = this.returnedArray.slice(0, this.pageSize);
  }
  // search buy
  searchType() {
    var type = document.getElementById("select3").value;
    if (type) {
      this.orderList = this.returnedArray.filter((es) => {
        return es.type === type;
      });
    } else {
      this.orderList = this.returnedArray;
    }
  }
  // search buy
  searchStatus() {
    var status = document.getElementById("select4").value;
    if (status) {
      this.orderList = this.returnedArray.filter((es) => {
        return es.status === status;
      });
    } else {
      this.orderList = this.returnedArray;
    }
  }
  static {
    this.\u0275fac = function OrdersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrdersComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrdersComponent, selectors: [["app-orders"]], standalone: false, decls: 60, vars: 3, consts: [["TaskContent", ""], [1, "container-fluid"], ["title", "Orders", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-3"], [1, "nav-tabs", "nav-tabs-custom"], ["heading", "All Orders", 1, "mt-4"], [1, "col-xl", "col-sm-6"], [1, "mb-3"], ["placeholder", "yyyy-mm-dd", "name", "dp", "bsDatepicker", "", "autocomplete", "off", 1, "form-control"], ["id", "select2", 1, "form-control", "select2-search-disable", 3, "click"], ["value", "", "selected", ""], ["value", "Bitcoin"], ["value", "Ethereum"], ["value", "Litecoin"], ["id", "select3", 1, "form-control", "select2-search-disable", 3, "click"], ["value", "Buy"], ["value", "Sell"], ["id", "select4", 1, "form-control", "select2-search-disable", 3, "click"], ["value", "Completed"], ["value", "Pending"], [1, "col-xl", "col-sm-6", "align-self-end"], ["type", "button", 1, "btn", "btn-primary", "w-md"], [3, "ngTemplateOutlet"], ["heading", "Processing", 1, "mt-4"], [1, "row", "mb-md-2", "mt-1"], [1, "col-sm-12", "col-md-6"], ["id", " tickets-table_length", 1, "dataTables_length"], [1, "d-inline-flex", "align-items-center"], ["name", "tickets-table_length", "aria-controls", "tickets-table", "name", "pageSize", 1, "custom-select", "custom-select-sm", "form-control", "form-control-sm", "mx-2", 3, "ngModelChange", "change", "ngModel"], [3, "ngValue"], ["id", "tickets-table_filter", 1, "dataTables_filter", "text-md-end", "text-sm-center"], ["type", "text", "name", "searchTerm", "aria-controls", "tickets-table", 1, "form-control", "form-control-sm", "ms-2", 3, "ngModelChange", "ngModel"], ["id", "basic-datatable", 1, "table", "datatables", "dt-responsive", "nowrap"], [1, "row", "justify-content-md-between", "align-items-md-center", "mt-2"], [1, "col-sm-12", "col-md-5"], ["id", "tickets-table_info", "role", "status", "aria-live", "polite", 1, "dataTables_info", "mb-2"], [1, "text-md-right", "float-md-end"], [1, "pagination", "justify-content-end", "mb-2"], [1, "pagination-wrap", "hstack", "gap-2", 3, "pageChanged", "totalItems", "itemsPerPage"], [1, "badge", "font-size-10", 3, "ngClass"]], template: function OrdersComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275element(1, "app-page-title", 2);
        \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "h4", 7);
        \u0275\u0275text(7, "Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "tabset", 8)(9, "tab", 9)(10, "div", 3)(11, "div", 10)(12, "div", 11)(13, "label");
        \u0275\u0275text(14, "Date :");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "input", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 10)(17, "div", 11)(18, "label");
        \u0275\u0275text(19, "Coin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "select", 13);
        \u0275\u0275listener("click", function OrdersComponent_Template_select_click_20_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.searchCoin());
        });
        \u0275\u0275elementStart(21, "option", 14);
        \u0275\u0275text(22, "Select Coin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "option", 15);
        \u0275\u0275text(24, "Bitcoin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "option", 16);
        \u0275\u0275text(26, "Ethereum");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "option", 17);
        \u0275\u0275text(28, "Litecoin");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(29, "div", 10)(30, "div", 11)(31, "label");
        \u0275\u0275text(32, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "select", 18);
        \u0275\u0275listener("click", function OrdersComponent_Template_select_click_33_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.searchType());
        });
        \u0275\u0275elementStart(34, "option", 14);
        \u0275\u0275text(35, "Select Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "option", 19);
        \u0275\u0275text(37, "Buy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "option", 20);
        \u0275\u0275text(39, "Sell");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(40, "div", 10)(41, "div", 11)(42, "label");
        \u0275\u0275text(43, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "select", 21);
        \u0275\u0275listener("click", function OrdersComponent_Template_select_click_44_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.searchStatus());
        });
        \u0275\u0275elementStart(45, "option", 14);
        \u0275\u0275text(46, "Select Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "option", 22);
        \u0275\u0275text(48, "Completed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "option", 23);
        \u0275\u0275text(50, "Pending");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(51, "div", 24)(52, "div", 11)(53, "button", 25);
        \u0275\u0275text(54, "Add Order");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(55, OrdersComponent_ng_template_55_Template, 0, 0, "ng-template", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "tab", 27);
        \u0275\u0275template(57, OrdersComponent_ng_template_57_Template, 0, 0, "ng-template", 26);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275template(58, OrdersComponent_ng_template_58_Template, 46, 10, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const TaskContent_r5 = \u0275\u0275reference(59);
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(54);
        \u0275\u0275property("ngTemplateOutlet", TaskContent_r5);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", TaskContent_r5);
      }
    }, dependencies: [NgClass, NgTemplateOutlet, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, PaginationComponent, TabDirective, TabsetComponent, BsDatepickerDirective, BsDatepickerInputDirective, PagetitleComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrdersComponent, [{
    type: Component,
    args: [{ selector: "app-orders", standalone: false, template: `<div class="container-fluid">\r
    <app-page-title title="Orders" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
\r
    <div class="row">\r
        <div class="col-lg-12">\r
            <div class="card">\r
                <div class="card-body">\r
                    <h4 class="card-title mb-3">Orders</h4>\r
                    <tabset class="nav-tabs nav-tabs-custom">\r
                        <tab heading="All Orders" class="mt-4">\r
                            <div class="row">\r
                                <div class="col-xl col-sm-6">\r
                                    <div class="mb-3">\r
                                        <label>Date :</label>\r
                                        <input class="form-control" placeholder="yyyy-mm-dd" name="dp" bsDatepicker autocomplete="off">\r
                                    </div>\r
                                </div>\r
\r
                                <div class="col-xl col-sm-6">\r
                                    <div class="mb-3">\r
                                        <label>Coin</label>\r
                                        <select class="form-control select2-search-disable" id="select2" (click)="searchCoin()">\r
                                            <option value="" selected>Select Coin</option>\r
                                            <option value="Bitcoin">Bitcoin</option>\r
                                            <option value="Ethereum">Ethereum</option>\r
                                            <option value="Litecoin">Litecoin</option>\r
                                        </select>\r
                                    </div>\r
                                </div>\r
\r
                                <div class="col-xl col-sm-6">\r
                                    <div class="mb-3">\r
                                        <label>Type</label>\r
                                        <select class="form-control select2-search-disable" id="select3" (click)="searchType()">\r
                                            <option value="" selected>Select Type</option>\r
                                            <option value="Buy">Buy</option>\r
                                            <option value="Sell">Sell</option>\r
                                        </select>\r
                                    </div>\r
                                </div>\r
\r
                                <div class="col-xl col-sm-6">\r
                                    <div class="mb-3">\r
                                        <label>Status</label>\r
                                        <select class="form-control select2-search-disable" id="select4" (click)="searchStatus()">\r
                                            <option value="" selected>Select Status</option>\r
                                            <option value="Completed">Completed</option>\r
                                            <option value="Pending">Pending</option>\r
                                        </select>\r
                                    </div>\r
                                </div>\r
\r
                                <div class="col-xl col-sm-6 align-self-end">\r
                                    <div class="mb-3">\r
                                        <button type="button" class="btn btn-primary w-md">Add Order</button>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <ng-template [ngTemplateOutlet]="TaskContent"></ng-template>\r
                            <!-- </ng-template> -->\r
                        </tab>\r
                        <tab heading="Processing" class="mt-4">\r
                            <!-- <a ngbNavLink>Processing</a>\r
                            <ng-template ngbNavContent> -->\r
                            <ng-template [ngTemplateOutlet]="TaskContent"></ng-template>\r
                            <!-- </ng-template> -->\r
                        </tab>\r
                    </tabset>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<ng-template #TaskContent>\r
    <div class="row mb-md-2 mt-1">\r
        <div class="col-sm-12 col-md-6">\r
            <div class="dataTables_length" id=" tickets-table_length"><label class="d-inline-flex align-items-center">Show\r
                    <select name="tickets-table_length" [(ngModel)]="pageSize" (change)="updatePageSize()" aria-controls="tickets-table" name="pageSize" class="custom-select custom-select-sm form-control form-control-sm mx-2">\r
                        <option [ngValue]="10">10</option>\r
                        <option [ngValue]="25">25</option>\r
                        <option [ngValue]="50">50</option>\r
                        <option [ngValue]="100">100</option>\r
                    </select> entries</label></div>\r
        </div>\r
        <!-- Search -->\r
        <div class="col-sm-12 col-md-6">\r
            <div id="tickets-table_filter" class="dataTables_filter text-md-end  text-sm-center">\r
                <label class="d-inline-flex align-items-center">Search:\r
                    <input type="text" name="searchTerm" class="form-control form-control-sm ms-2" aria-controls="tickets-table" [(ngModel)]="term" (ngModelChange)="filterdata()"></label>\r
            </div>\r
        </div>\r
        <!-- End search -->\r
    </div>\r
    <!-- Table -->\r
    <table id="basic-datatable" class="table datatables dt-responsive nowrap">\r
        <thead>\r
            <tr>\r
                <th>Date</th>\r
                <th>Type</th>\r
                <th>Coin</th>\r
                <th>Value</th>\r
                <th>Value in USD</th>\r
                <th>Status</th>\r
            </tr>\r
        </thead>\r
        <tbody>\r
            @for (data of orderList; track $index) {\r
            <tr>\r
                <td>{{data.date}}</td>\r
                <td>{{data.type}}</td>\r
                <td>{{data.coin}}</td>\r
                <td>{{data.value}}</td>\r
                <td>{{data.usd}}</td>\r
                <td>\r
                    <span class="badge font-size-10" [ngClass]="{'bg-success': data.status === 'Completed','bg-warning': data.status === 'Pending',\r
                        'bg-danger': data.status === 'Failed'}">{{data.status}}</span>\r
                </td>\r
            </tr>}\r
        </tbody>\r
    </table>\r
    <!-- End table -->\r
    <div class="row justify-content-md-between align-items-md-center mt-2">\r
        <div class="col-sm-12 col-md-5">\r
            <div class="dataTables_info mb-2" id="tickets-table_info" role="status" aria-live="polite">\r
                Showing\r
                {{orderList?.length}} of\r
                {{returnedArray?.length}}\r
                entries\r
            </div>\r
        </div>\r
\r
        <div class="col-sm-12 col-md-5">\r
            <div class="text-md-right float-md-end">\r
                <ul class="pagination justify-content-end mb-2">\r
                    <pagination class="pagination-wrap hstack gap-2" [totalItems]="returnedArray?.length" [itemsPerPage]="10" (pageChanged)="pageChanged($event)"></pagination>\r
                </ul>\r
            </div>\r
        </div>\r
    </div>\r
</ng-template>` }]
  }], () => [{ type: Store }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrdersComponent, { className: "OrdersComponent", filePath: "src/app/pages/crypto/orders/orders.component.ts", lineNumber: 16 });
})();

// src/app/pages/crypto/crypto-routing.module.ts
var routes = [
  {
    path: "wallet",
    component: WalletComponent
  },
  {
    path: "buy-sell",
    component: BuysellComponent
  },
  {
    path: "exchange",
    component: ExchangeComponent
  },
  {
    path: "lending",
    component: LendingComponent
  },
  {
    path: "orders",
    component: OrdersComponent
  },
  {
    path: "kyc-application",
    component: KycapplicationComponent
  }
];
var CryptoRoutingModule = class _CryptoRoutingModule {
  static {
    this.\u0275fac = function CryptoRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CryptoRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CryptoRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CryptoRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/pages/crypto/crypto.module.ts
var DEFAULT_DROPZONE_CONFIG = {
  // Change this to your upload POST address:
  url: "https://httpbin.org/post",
  maxFilesize: 50,
  acceptedFiles: "image/*"
};
var CryptoModule = class _CryptoModule {
  static {
    this.\u0275fac = function CryptoModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CryptoModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CryptoModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
      {
        provide: DROPZONE_CONFIG,
        useValue: DEFAULT_DROPZONE_CONFIG
      }
    ], imports: [
      CommonModule,
      CryptoRoutingModule,
      BsDropdownModule.forRoot(),
      NgApexchartsModule,
      FormsModule,
      ReactiveFormsModule,
      PaginationModule.forRoot(),
      TabsModule.forRoot(),
      ModalModule.forRoot(),
      BsDatepickerModule.forRoot(),
      CdkStepperModule,
      NgStepperModule,
      SimplebarAngularModule,
      DropzoneModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CryptoModule, [{
    type: NgModule,
    args: [{
      declarations: [LendingComponent, KycapplicationComponent, OrdersComponent],
      imports: [
        CommonModule,
        CryptoRoutingModule,
        BsDropdownModule.forRoot(),
        NgApexchartsModule,
        FormsModule,
        ReactiveFormsModule,
        PaginationModule.forRoot(),
        TabsModule.forRoot(),
        ModalModule.forRoot(),
        BsDatepickerModule.forRoot(),
        CdkStepperModule,
        NgStepperModule,
        SimplebarAngularModule,
        DropzoneModule,
        PagetitleComponent
      ],
      providers: [
        {
          provide: DROPZONE_CONFIG,
          useValue: DEFAULT_DROPZONE_CONFIG
        }
      ]
    }]
  }], null, null);
})();

export {
  CryptoModule
};
//# sourceMappingURL=chunk-VLNIG2ZN.js.map
