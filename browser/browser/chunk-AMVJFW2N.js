import {
  NG_VALUE_ACCESSOR
} from "./chunk-ICQKGMTO.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  ElementRef,
  EventEmitter,
  Injectable,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgTemplateOutlet,
  Output,
  forwardRef,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-BM6E27KQ.js";

// node_modules/ngx-bootstrap/pagination/fesm2022/ngx-bootstrap-pagination.mjs
var _c0 = (a0, a1) => ({
  "pull-left": a0,
  "float-left": a1
});
var _c1 = (a0, a1) => ({
  "pull-right": a0,
  "float-right": a1
});
var _c2 = (a0, a1) => ({
  disabled: a0,
  currentPage: a1
});
var _c3 = (a0, a1, a2) => ({
  disabled: a0,
  $implicit: a1,
  currentPage: a2
});
function PaginationComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 11)(1, "a", 12);
    \u0275\u0275listener("click", function PaginationComponent_li_1_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectPage(1, $event));
    });
    \u0275\u0275elementContainer(2, 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const defaultFirstTemplate_r3 = \u0275\u0275reference(13);
    \u0275\u0275classProp("disabled", ctx_r1.noPrevious() || ctx_r1.disabled);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.customFirstTemplate || defaultFirstTemplate_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction2(4, _c2, ctx_r1.noPrevious() || ctx_r1.disabled, ctx_r1.page));
  }
}
function PaginationComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 14)(1, "a", 12);
    \u0275\u0275listener("click", function PaginationComponent_li_2_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectPage(ctx_r1.page - 1, $event));
    });
    \u0275\u0275elementContainer(2, 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const defaultPreviousTemplate_r5 = \u0275\u0275reference(11);
    \u0275\u0275classProp("disabled", ctx_r1.noPrevious() || ctx_r1.disabled);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.customPreviousTemplate || defaultPreviousTemplate_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction2(4, _c2, ctx_r1.noPrevious() || ctx_r1.disabled, ctx_r1.page));
  }
}
function PaginationComponent_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 15)(1, "a", 12);
    \u0275\u0275listener("click", function PaginationComponent_li_3_Template_a_click_1_listener($event) {
      const pg_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectPage(pg_r7.number, $event));
    });
    \u0275\u0275elementContainer(2, 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pg_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    const defaultPageTemplate_r8 = \u0275\u0275reference(7);
    \u0275\u0275classProp("active", pg_r7.active)("disabled", ctx_r1.disabled && !pg_r7.active);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.customPageTemplate || defaultPageTemplate_r8)("ngTemplateOutletContext", \u0275\u0275pureFunction3(6, _c3, ctx_r1.disabled, pg_r7, ctx_r1.page));
  }
}
function PaginationComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 16)(1, "a", 12);
    \u0275\u0275listener("click", function PaginationComponent_li_4_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectPage(ctx_r1.page + 1, $event));
    });
    \u0275\u0275elementContainer(2, 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const defaultNextTemplate_r10 = \u0275\u0275reference(9);
    \u0275\u0275classProp("disabled", ctx_r1.noNext() || ctx_r1.disabled);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.customNextTemplate || defaultNextTemplate_r10)("ngTemplateOutletContext", \u0275\u0275pureFunction2(4, _c2, ctx_r1.noNext() || ctx_r1.disabled, ctx_r1.page));
  }
}
function PaginationComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 17)(1, "a", 12);
    \u0275\u0275listener("click", function PaginationComponent_li_5_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectPage(ctx_r1.totalPages, $event));
    });
    \u0275\u0275elementContainer(2, 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const defaultLastTemplate_r12 = \u0275\u0275reference(15);
    \u0275\u0275classProp("disabled", ctx_r1.noNext() || ctx_r1.disabled);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.customLastTemplate || defaultLastTemplate_r12)("ngTemplateOutletContext", \u0275\u0275pureFunction2(4, _c2, ctx_r1.noNext() || ctx_r1.disabled, ctx_r1.page));
  }
}
function PaginationComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const page_r13 = ctx.$implicit;
    \u0275\u0275textInterpolate(page_r13.text);
  }
}
function PaginationComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate(ctx_r1.getText("next"));
  }
}
function PaginationComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate(ctx_r1.getText("previous"));
  }
}
function PaginationComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate(ctx_r1.getText("first"));
  }
}
function PaginationComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate(ctx_r1.getText("last"));
  }
}
var PaginationConfig = class _PaginationConfig {
  constructor() {
    this.main = {
      itemsPerPage: 10,
      boundaryLinks: false,
      directionLinks: true,
      firstText: "First",
      previousText: "Previous",
      nextText: "Next",
      lastText: "Last",
      pageBtnClass: "",
      rotate: true
    };
    this.pager = {
      itemsPerPage: 15,
      previousText: "\xAB Previous",
      nextText: "Next \xBB",
      pageBtnClass: "",
      align: true
    };
  }
  static {
    this.\u0275fac = function PaginationConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaginationConfig)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _PaginationConfig,
      factory: _PaginationConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PAGER_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PagerComponent),
  multi: true
};
var PagerComponent = class _PagerComponent {
  constructor(elementRef, paginationConfig, changeDetection) {
    this.elementRef = elementRef;
    this.changeDetection = changeDetection;
    this.align = false;
    this.boundaryLinks = false;
    this.directionLinks = true;
    this.firstText = "First";
    this.previousText = "\xAB Previous";
    this.nextText = "Next \xBB";
    this.lastText = "Last";
    this.rotate = true;
    this.pageBtnClass = "";
    this.disabled = false;
    this.numPages = new EventEmitter();
    this.pageChanged = new EventEmitter();
    this.onChange = Function.prototype;
    this.onTouched = Function.prototype;
    this.classMap = "";
    this.inited = false;
    this._itemsPerPage = 15;
    this._totalItems = 0;
    this._totalPages = 0;
    this._page = 1;
    this.elementRef = elementRef;
    if (!this.config) {
      this.configureOptions(Object.assign({}, paginationConfig.main, paginationConfig.pager));
    }
  }
  /** maximum number of items per page. If value less than 1 will display all items on one page */
  get itemsPerPage() {
    return this._itemsPerPage;
  }
  set itemsPerPage(v) {
    this._itemsPerPage = v;
    this.totalPages = this.calculateTotalPages();
  }
  /** total number of items in all pages */
  get totalItems() {
    return this._totalItems;
  }
  set totalItems(v) {
    this._totalItems = v;
    this.totalPages = this.calculateTotalPages();
  }
  get totalPages() {
    return this._totalPages;
  }
  set totalPages(v) {
    this._totalPages = v;
    this.numPages.emit(v);
    if (this.inited) {
      this.selectPage(this.page);
    }
  }
  get page() {
    return this._page;
  }
  set page(value) {
    const _previous = this._page;
    this._page = value > this.totalPages ? this.totalPages : value || 1;
    this.changeDetection.markForCheck();
    if (_previous === this._page || typeof _previous === "undefined") {
      return;
    }
    this.pageChanged.emit({
      page: this._page,
      itemsPerPage: this.itemsPerPage
    });
  }
  configureOptions(config) {
    this.config = Object.assign({}, config);
  }
  ngOnInit() {
    if (typeof window !== "undefined") {
      this.classMap = this.elementRef.nativeElement.getAttribute("class") || "";
    }
    if (typeof this.maxSize === "undefined") {
      this.maxSize = this.config?.maxSize || 0;
    }
    if (typeof this.rotate === "undefined") {
      this.rotate = !!this.config?.rotate;
    }
    if (typeof this.boundaryLinks === "undefined") {
      this.boundaryLinks = !!this.config?.boundaryLinks;
    }
    if (typeof this.directionLinks === "undefined") {
      this.directionLinks = !!this.config?.directionLinks;
    }
    if (typeof this.pageBtnClass === "undefined") {
      this.pageBtnClass = this.config?.pageBtnClass || "";
    }
    if (typeof this.itemsPerPage === "undefined") {
      this.itemsPerPage = this.config?.itemsPerPage || 0;
    }
    this.totalPages = this.calculateTotalPages();
    this.pages = this.getPages(this.page, this.totalPages);
    this.inited = true;
  }
  writeValue(value) {
    this.page = value;
    this.pages = this.getPages(this.page, this.totalPages);
  }
  getText(key) {
    return this[`${key}Text`] || this.config[`${key}Text`];
  }
  noPrevious() {
    return this.page === 1;
  }
  noNext() {
    return this.page === this.totalPages;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  selectPage(page, event) {
    if (event) {
      event.preventDefault();
    }
    if (!this.disabled) {
      if (event && event.target) {
        const target = event.target;
        target.blur();
      }
      this.writeValue(page);
      this.onChange(this.page);
    }
  }
  // Create page object used in template
  makePage(num, text, active) {
    return {
      text,
      number: num,
      active
    };
  }
  getPages(currentPage, totalPages) {
    const pages = [];
    let startPage = 1;
    let endPage = totalPages;
    const isMaxSized = typeof this.maxSize !== "undefined" && this.maxSize < totalPages;
    if (isMaxSized && this.maxSize) {
      if (this.rotate) {
        startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
        endPage = startPage + this.maxSize - 1;
        if (endPage > totalPages) {
          endPage = totalPages;
          startPage = endPage - this.maxSize + 1;
        }
      } else {
        startPage = (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
        endPage = Math.min(startPage + this.maxSize - 1, totalPages);
      }
    }
    for (let num = startPage; num <= endPage; num++) {
      const page = this.makePage(num, num.toString(), num === currentPage);
      pages.push(page);
    }
    if (isMaxSized && !this.rotate) {
      if (startPage > 1) {
        const previousPageSet = this.makePage(startPage - 1, "...", false);
        pages.unshift(previousPageSet);
      }
      if (endPage < totalPages) {
        const nextPageSet = this.makePage(endPage + 1, "...", false);
        pages.push(nextPageSet);
      }
    }
    return pages;
  }
  // base class
  calculateTotalPages() {
    const totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
    return Math.max(totalPages || 0, 1);
  }
  static {
    this.\u0275fac = function PagerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PagerComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(PaginationConfig), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _PagerComponent,
      selectors: [["pager"]],
      inputs: {
        align: "align",
        maxSize: "maxSize",
        boundaryLinks: "boundaryLinks",
        directionLinks: "directionLinks",
        firstText: "firstText",
        previousText: "previousText",
        nextText: "nextText",
        lastText: "lastText",
        rotate: "rotate",
        pageBtnClass: "pageBtnClass",
        disabled: "disabled",
        itemsPerPage: "itemsPerPage",
        totalItems: "totalItems"
      },
      outputs: {
        numPages: "numPages",
        pageChanged: "pageChanged"
      },
      features: [\u0275\u0275ProvidersFeature([PAGER_CONTROL_VALUE_ACCESSOR])],
      decls: 7,
      vars: 22,
      consts: [[1, "pager"], [3, "ngClass"], ["href", "", 3, "click"]],
      template: function PagerComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "ul", 0)(1, "li", 1)(2, "a", 2);
          \u0275\u0275listener("click", function PagerComponent_Template_a_click_2_listener($event) {
            return ctx.selectPage(ctx.page - 1, $event);
          });
          \u0275\u0275text(3);
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(4, "li", 1)(5, "a", 2);
          \u0275\u0275listener("click", function PagerComponent_Template_a_click_5_listener($event) {
            return ctx.selectPage(ctx.page + 1, $event);
          });
          \u0275\u0275text(6);
          \u0275\u0275elementEnd()()();
        }
        if (rf & 2) {
          \u0275\u0275advance();
          \u0275\u0275classMap(ctx.pageBtnClass);
          \u0275\u0275classProp("disabled", ctx.noPrevious())("previous", ctx.align);
          \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(16, _c0, ctx.align, ctx.align));
          \u0275\u0275advance(2);
          \u0275\u0275textInterpolate(ctx.getText("previous"));
          \u0275\u0275advance();
          \u0275\u0275classMap(ctx.pageBtnClass);
          \u0275\u0275classProp("disabled", ctx.noNext())("next", ctx.align);
          \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(19, _c1, ctx.align, ctx.align));
          \u0275\u0275advance(2);
          \u0275\u0275textInterpolate(ctx.getText("next"));
        }
      },
      dependencies: [NgClass],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagerComponent, [{
    type: Component,
    args: [{
      selector: "pager",
      providers: [PAGER_CONTROL_VALUE_ACCESSOR],
      standalone: true,
      imports: [NgClass],
      template: `<ul class="pager">
  <li [class.disabled]="noPrevious()" [class.previous]="align"
      [ngClass]="{'pull-left': align, 'float-left': align}"
      class="{{ pageBtnClass }}">
    <a href (click)="selectPage(page - 1, $event)">{{ getText('previous') }}</a>
  </li>
  <li [class.disabled]="noNext()" [class.next]="align"
      [ngClass]="{'pull-right': align, 'float-right': align}"
      class="{{ pageBtnClass }}">
    <a href (click)="selectPage(page + 1, $event)">{{ getText('next') }}</a>
  </li>
</ul>
`
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: PaginationConfig
  }, {
    type: ChangeDetectorRef
  }], {
    align: [{
      type: Input
    }],
    maxSize: [{
      type: Input
    }],
    boundaryLinks: [{
      type: Input
    }],
    directionLinks: [{
      type: Input
    }],
    firstText: [{
      type: Input
    }],
    previousText: [{
      type: Input
    }],
    nextText: [{
      type: Input
    }],
    lastText: [{
      type: Input
    }],
    rotate: [{
      type: Input
    }],
    pageBtnClass: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    numPages: [{
      type: Output
    }],
    pageChanged: [{
      type: Output
    }],
    itemsPerPage: [{
      type: Input
    }],
    totalItems: [{
      type: Input
    }]
  });
})();
var PAGINATION_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PaginationComponent),
  multi: true
};
var PaginationComponent = class _PaginationComponent {
  constructor(elementRef, paginationConfig, changeDetection) {
    this.elementRef = elementRef;
    this.changeDetection = changeDetection;
    this.align = true;
    this.boundaryLinks = false;
    this.directionLinks = true;
    this.rotate = true;
    this.pageBtnClass = "";
    this.disabled = false;
    this.numPages = new EventEmitter();
    this.pageChanged = new EventEmitter();
    this.onChange = Function.prototype;
    this.onTouched = Function.prototype;
    this.classMap = "";
    this.inited = false;
    this._itemsPerPage = 10;
    this._totalItems = 0;
    this._totalPages = 0;
    this._page = 1;
    this.elementRef = elementRef;
    if (!this.config) {
      this.configureOptions(paginationConfig.main);
    }
  }
  /** maximum number of items per page. If value less than 1 will display all items on one page */
  get itemsPerPage() {
    return this._itemsPerPage;
  }
  set itemsPerPage(v) {
    this._itemsPerPage = v;
    this.totalPages = this.calculateTotalPages();
  }
  /** total number of items in all pages */
  get totalItems() {
    return this._totalItems;
  }
  set totalItems(v) {
    this._totalItems = v;
    this.totalPages = this.calculateTotalPages();
  }
  get totalPages() {
    return this._totalPages;
  }
  set totalPages(v) {
    this._totalPages = v;
    this.numPages.emit(v);
    if (this.inited) {
      this.selectPage(this.page);
    }
  }
  get page() {
    return this._page;
  }
  set page(value) {
    const _previous = this._page;
    this._page = value > this.totalPages ? this.totalPages : value || 1;
    this.changeDetection.markForCheck();
    if (_previous === this._page || typeof _previous === "undefined") {
      return;
    }
    this.pageChanged.emit({
      page: this._page,
      itemsPerPage: this.itemsPerPage
    });
  }
  configureOptions(config) {
    this.config = Object.assign({}, config);
  }
  ngOnInit() {
    if (typeof window !== "undefined") {
      this.classMap = this.elementRef.nativeElement.getAttribute("class") || "";
    }
    if (typeof this.maxSize === "undefined") {
      this.maxSize = this.config?.maxSize || 0;
    }
    if (typeof this.rotate === "undefined") {
      this.rotate = !!this.config?.rotate;
    }
    if (typeof this.boundaryLinks === "undefined") {
      this.boundaryLinks = !!this.config?.boundaryLinks;
    }
    if (typeof this.directionLinks === "undefined") {
      this.directionLinks = !!this.config?.directionLinks;
    }
    if (typeof this.pageBtnClass === "undefined") {
      this.pageBtnClass = this.config?.pageBtnClass || "";
    }
    if (typeof this.itemsPerPage === "undefined") {
      this.itemsPerPage = this.config?.itemsPerPage || 0;
    }
    this.totalPages = this.calculateTotalPages();
    this.pages = this.getPages(this.page, this.totalPages);
    this.inited = true;
  }
  writeValue(value) {
    this.page = value;
    this.pages = this.getPages(this.page, this.totalPages);
  }
  getText(key) {
    return this[`${key}Text`] || this.config[`${key}Text`];
  }
  noPrevious() {
    return this.page === 1;
  }
  noNext() {
    return this.page === this.totalPages;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  selectPage(page, event) {
    if (event) {
      event.preventDefault();
    }
    if (!this.disabled) {
      if (event && event.target) {
        const target = event.target;
        target.blur();
      }
      this.writeValue(page);
      this.onChange(this.page);
    }
  }
  // Create page object used in template
  makePage(num, text, active) {
    return {
      text,
      number: num,
      active
    };
  }
  getPages(currentPage, totalPages) {
    const pages = [];
    let startPage = 1;
    let endPage = totalPages;
    const isMaxSized = typeof this.maxSize !== "undefined" && this.maxSize < totalPages;
    if (isMaxSized && this.maxSize) {
      if (this.rotate) {
        startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
        endPage = startPage + this.maxSize - 1;
        if (endPage > totalPages) {
          endPage = totalPages;
          startPage = endPage - this.maxSize + 1;
        }
      } else {
        startPage = (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
        endPage = Math.min(startPage + this.maxSize - 1, totalPages);
      }
    }
    for (let num = startPage; num <= endPage; num++) {
      const page = this.makePage(num, num.toString(), num === currentPage);
      pages.push(page);
    }
    if (isMaxSized && !this.rotate) {
      if (startPage > 1) {
        const previousPageSet = this.makePage(startPage - 1, "...", false);
        pages.unshift(previousPageSet);
      }
      if (endPage < totalPages) {
        const nextPageSet = this.makePage(endPage + 1, "...", false);
        pages.push(nextPageSet);
      }
    }
    return pages;
  }
  // base class
  calculateTotalPages() {
    const totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
    return Math.max(totalPages || 0, 1);
  }
  static {
    this.\u0275fac = function PaginationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaginationComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(PaginationConfig), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _PaginationComponent,
      selectors: [["pagination"]],
      inputs: {
        align: "align",
        maxSize: "maxSize",
        boundaryLinks: "boundaryLinks",
        directionLinks: "directionLinks",
        firstText: "firstText",
        previousText: "previousText",
        nextText: "nextText",
        lastText: "lastText",
        rotate: "rotate",
        pageBtnClass: "pageBtnClass",
        disabled: "disabled",
        customPageTemplate: "customPageTemplate",
        customNextTemplate: "customNextTemplate",
        customPreviousTemplate: "customPreviousTemplate",
        customFirstTemplate: "customFirstTemplate",
        customLastTemplate: "customLastTemplate",
        itemsPerPage: "itemsPerPage",
        totalItems: "totalItems"
      },
      outputs: {
        numPages: "numPages",
        pageChanged: "pageChanged"
      },
      features: [\u0275\u0275ProvidersFeature([PAGINATION_CONTROL_VALUE_ACCESSOR])],
      decls: 16,
      vars: 6,
      consts: [["defaultPageTemplate", ""], ["defaultNextTemplate", ""], ["defaultPreviousTemplate", ""], ["defaultFirstTemplate", ""], ["defaultLastTemplate", ""], [1, "pagination", 3, "ngClass"], ["class", "pagination-first page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-prev page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-page page-item", 3, "active", "disabled", 4, "ngFor", "ngForOf"], ["class", "pagination-next page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-last page-item", 3, "disabled", 4, "ngIf"], [1, "pagination-first", "page-item"], ["href", "", 1, "page-link", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "pagination-prev", "page-item"], [1, "pagination-page", "page-item"], [1, "pagination-next", "page-item"], [1, "pagination-last", "page-item"]],
      template: function PaginationComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "ul", 5);
          \u0275\u0275template(1, PaginationComponent_li_1_Template, 3, 7, "li", 6)(2, PaginationComponent_li_2_Template, 3, 7, "li", 7)(3, PaginationComponent_li_3_Template, 3, 10, "li", 8)(4, PaginationComponent_li_4_Template, 3, 7, "li", 9)(5, PaginationComponent_li_5_Template, 3, 7, "li", 10);
          \u0275\u0275elementEnd();
          \u0275\u0275template(6, PaginationComponent_ng_template_6_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(8, PaginationComponent_ng_template_8_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(10, PaginationComponent_ng_template_10_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(12, PaginationComponent_ng_template_12_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(14, PaginationComponent_ng_template_14_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
        }
        if (rf & 2) {
          \u0275\u0275property("ngClass", ctx.classMap);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.boundaryLinks);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.directionLinks);
          \u0275\u0275advance();
          \u0275\u0275property("ngForOf", ctx.pages);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.directionLinks);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.boundaryLinks);
        }
      },
      dependencies: [NgClass, NgIf, NgTemplateOutlet, NgForOf],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationComponent, [{
    type: Component,
    args: [{
      selector: "pagination",
      providers: [PAGINATION_CONTROL_VALUE_ACCESSOR],
      standalone: true,
      imports: [NgClass, NgIf, NgTemplateOutlet, NgForOf],
      template: `<ul class="pagination" [ngClass]="classMap">
  <li class="pagination-first page-item"
      *ngIf="boundaryLinks"
      [class.disabled]="noPrevious() || disabled">
    <a class="page-link" href (click)="selectPage(1, $event)">
      <ng-container [ngTemplateOutlet]="customFirstTemplate || defaultFirstTemplate"
                   [ngTemplateOutletContext]="{disabled: noPrevious() || disabled, currentPage: page}">
      </ng-container>
    </a>
  </li>

  <li class="pagination-prev page-item"
      *ngIf="directionLinks"
      [class.disabled]="noPrevious() || disabled">
    <a class="page-link" href (click)="selectPage(page - 1, $event)">
      <ng-container [ngTemplateOutlet]="customPreviousTemplate || defaultPreviousTemplate"
                   [ngTemplateOutletContext]="{disabled: noPrevious() || disabled, currentPage: page}">
      </ng-container>
    </a>
  </li>

  <li *ngFor="let pg of pages"
      [class.active]="pg.active"
      [class.disabled]="disabled && !pg.active"
      class="pagination-page page-item">
    <a class="page-link" href (click)="selectPage(pg.number, $event)">
      <ng-container [ngTemplateOutlet]="customPageTemplate || defaultPageTemplate"
                   [ngTemplateOutletContext]="{disabled: disabled, $implicit: pg, currentPage: page}">
      </ng-container>
    </a>
  </li>

  <li class="pagination-next page-item"
      *ngIf="directionLinks"
      [class.disabled]="noNext() || disabled">
    <a class="page-link" href (click)="selectPage(page + 1, $event)">
      <ng-container [ngTemplateOutlet]="customNextTemplate || defaultNextTemplate"
                   [ngTemplateOutletContext]="{disabled: noNext() || disabled, currentPage: page}">
      </ng-container>
    </a>
  </li>

  <li class="pagination-last page-item"
      *ngIf="boundaryLinks"
      [class.disabled]="noNext() || disabled">
    <a class="page-link" href (click)="selectPage(totalPages, $event)">
      <ng-container [ngTemplateOutlet]="customLastTemplate || defaultLastTemplate"
                   [ngTemplateOutletContext]="{disabled: noNext() || disabled, currentPage: page}">
      </ng-container>
    </a>
  </li>
</ul>

<ng-template #defaultPageTemplate let-page>{{ page.text }}</ng-template>

<ng-template #defaultNextTemplate>{{ getText('next') }}</ng-template>

<ng-template #defaultPreviousTemplate>{{ getText('previous') }}</ng-template>

<ng-template #defaultFirstTemplate>{{ getText('first') }}</ng-template>

<ng-template #defaultLastTemplate>{{ getText('last') }}</ng-template>
`
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: PaginationConfig
  }, {
    type: ChangeDetectorRef
  }], {
    align: [{
      type: Input
    }],
    maxSize: [{
      type: Input
    }],
    boundaryLinks: [{
      type: Input
    }],
    directionLinks: [{
      type: Input
    }],
    firstText: [{
      type: Input
    }],
    previousText: [{
      type: Input
    }],
    nextText: [{
      type: Input
    }],
    lastText: [{
      type: Input
    }],
    rotate: [{
      type: Input
    }],
    pageBtnClass: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    customPageTemplate: [{
      type: Input
    }],
    customNextTemplate: [{
      type: Input
    }],
    customPreviousTemplate: [{
      type: Input
    }],
    customFirstTemplate: [{
      type: Input
    }],
    customLastTemplate: [{
      type: Input
    }],
    numPages: [{
      type: Output
    }],
    pageChanged: [{
      type: Output
    }],
    itemsPerPage: [{
      type: Input
    }],
    totalItems: [{
      type: Input
    }]
  });
})();
var PaginationModule = class _PaginationModule {
  // @deprecated method not required anymore, will be deleted in v19.0.0
  static forRoot() {
    return {
      ngModule: _PaginationModule,
      providers: []
    };
  }
  static {
    this.\u0275fac = function PaginationModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaginationModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _PaginationModule,
      imports: [CommonModule, PagerComponent, PaginationComponent],
      exports: [PagerComponent, PaginationComponent]
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PagerComponent, PaginationComponent],
      exports: [PagerComponent, PaginationComponent]
    }]
  }], null, null);
})();

export {
  PaginationComponent,
  PaginationModule
};
//# sourceMappingURL=chunk-AMVJFW2N.js.map
