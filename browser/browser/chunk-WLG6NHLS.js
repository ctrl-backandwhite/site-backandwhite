import {
  ModalModule
} from "./chunk-BYTMBZOH.js";
import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵinterpolate1,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-BM6E27KQ.js";

// src/app/shared/widget/stat/stat.component.ts
var StatComponent = class _StatComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function StatComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StatComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatComponent, selectors: [["app-stat"]], inputs: { title: "title", value: "value", icon: "icon" }, decls: 12, vars: 5, consts: [[1, "card", "mini-stats-wid"], [1, "card-body"], [1, "d-flex"], [1, "flex-grow-1"], [1, "text-muted", "fw-medium"], [1, "mb-0"], [1, "flex-shrink-0", "align-self-center"], [1, "mini-stat-icon", "avatar-sm", "rounded-circle", "bg-primary"], [1, "avatar-title"]], template: function StatComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p", 4);
        \u0275\u0275text(5);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(6, "h4", 5);
        \u0275\u0275text(7);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(8, "div", 6)(9, "div", 7)(10, "span", 8);
        \u0275\u0275domElement(11, "i");
        \u0275\u0275domElementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.value);
        \u0275\u0275advance(4);
        \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx.icon, " font-size-24"));
      }
    }, dependencies: [ModalModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatComponent, [{
    type: Component,
    args: [{ selector: "app-stat", imports: [ModalModule], template: '<div class="card mini-stats-wid">\r\n  <div class="card-body">\r\n    <div class="d-flex">\r\n      <div class="flex-grow-1">\r\n        <p class="text-muted fw-medium">{{title}}</p>\r\n        <h4 class="mb-0">{{value}}</h4>\r\n      </div>\r\n      <div class="flex-shrink-0 align-self-center">\r\n        <div class="mini-stat-icon avatar-sm rounded-circle bg-primary">\r\n          <span class="avatar-title">\r\n            <i class="bx {{icon}} font-size-24"></i>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- end card-body -->\r\n</div>\r\n<!-- end card -->\r\n' }]
  }], () => [], { title: [{
    type: Input
  }], value: [{
    type: Input
  }], icon: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatComponent, { className: "StatComponent", filePath: "src/app/shared/widget/stat/stat.component.ts", lineNumber: 11 });
})();

export {
  StatComponent
};
//# sourceMappingURL=chunk-WLG6NHLS.js.map
