import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementContainerEnd,
  ɵɵdomElementContainerStart,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-BM6E27KQ.js";

// src/app/shared/ui/pagetitle/pagetitle.component.ts
function PagetitleComponent_For_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li", 6);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", item_r1.label, " ");
  }
}
function PagetitleComponent_For_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li", 7)(1, "a", 8);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
function PagetitleComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementContainerStart(0);
    \u0275\u0275conditionalCreate(1, PagetitleComponent_For_8_Conditional_1_Template, 2, 1, "li", 6)(2, PagetitleComponent_For_8_Conditional_2_Template, 3, 1, "li", 7);
    \u0275\u0275domElementContainerEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r1.active ? 1 : 2);
  }
}
var PagetitleComponent = class _PagetitleComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function PagetitleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PagetitleComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PagetitleComponent, selectors: [["app-page-title"]], inputs: { breadcrumbItems: "breadcrumbItems", title: "title" }, decls: 9, vars: 1, consts: [[1, "row"], [1, "col-12"], [1, "page-title-box", "d-sm-flex", "align-items-center", "justify-content-between"], [1, "mb-0", "font-size-18"], [1, "page-title-right"], [1, "breadcrumb", "m-0"], [1, "breadcrumb-item", "active"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"]], template: function PagetitleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        \u0275\u0275text(4);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(5, "div", 4)(6, "ol", 5);
        \u0275\u0275repeaterCreate(7, PagetitleComponent_For_8_Template, 3, 1, "ng-container", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275domElementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.breadcrumbItems);
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagetitleComponent, [{
    type: Component,
    args: [{ selector: "app-page-title", imports: [], template: '<!-- breadcrumb item -->\r\n<div class="row">\r\n  <div class="col-12">\r\n    <div class="page-title-box d-sm-flex align-items-center justify-content-between">\r\n      <h4 class="mb-0 font-size-18">{{ title }}</h4>\r\n      <div class="page-title-right">\r\n        <ol class="breadcrumb m-0">\r\n          @for(item of breadcrumbItems;track $index){\r\n          <ng-container>\r\n            @if(item.active){\r\n            <li class="breadcrumb-item active">{{ item.label }}\r\n            </li>\r\n            }@else{\r\n            <li class="breadcrumb-item"><a href="javascript: void(0);">{{ item.label }}</a>\r\n            </li>}\r\n          </ng-container>\r\n          }\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>' }]
  }], () => [], { breadcrumbItems: [{
    type: Input
  }], title: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PagetitleComponent, { className: "PagetitleComponent", filePath: "src/app/shared/ui/pagetitle/pagetitle.component.ts", lineNumber: 10 });
})();

export {
  PagetitleComponent
};
//# sourceMappingURL=chunk-WW5M2ABB.js.map
