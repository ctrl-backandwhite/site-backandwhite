import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-BM6E27KQ.js";

// src/app/extrapages/page404/page404.component.ts
var Page404Component = class _Page404Component {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function Page404Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Page404Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Page404Component, selectors: [["app-page404"]], decls: 18, vars: 0, consts: [[1, "account-pages", "my-5", "pt-5"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], [1, "text-uppercase"], [1, "mt-5", "text-center"], ["routerLink", "/", 1, "btn", "btn-primary"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "assets/images/error-img.png", "alt", "", 1, "img-fluid"]], template: function Page404Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
        \u0275\u0275text(6, "4");
        \u0275\u0275domElement(7, "i", 6);
        \u0275\u0275text(8, "4");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(9, "h4", 7);
        \u0275\u0275text(10, "Sorry, page not found");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(11, "div", 8)(12, "a", 9);
        \u0275\u0275text(13, "Back to Dashboard");
        \u0275\u0275domElementEnd()()()()();
        \u0275\u0275domElementStart(14, "div", 10)(15, "div", 11)(16, "div");
        \u0275\u0275domElement(17, "img", 12);
        \u0275\u0275domElementEnd()()()()();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Page404Component, [{
    type: Component,
    args: [{ selector: "app-page404", imports: [], template: '<div class="account-pages my-5 pt-5">\r\n    <div class="container">\r\n        <div class="row">\r\n            <div class="col-lg-12">\r\n                <div class="text-center mb-5">\r\n                    <h1 class="display-2 fw-medium">4<i class="bx bx-buoy bx-spin text-primary display-3"></i>4</h1>\r\n                    <h4 class="text-uppercase">Sorry, page not found</h4>\r\n                    <div class="mt-5 text-center">\r\n                        <a class="btn btn-primary" routerLink="/">Back to Dashboard</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="row justify-content-center">\r\n            <div class="col-md-8 col-xl-6">\r\n                <div>\r\n                    <img src="assets/images/error-img.png" alt="" class="img-fluid">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Page404Component, { className: "Page404Component", filePath: "src/app/extrapages/page404/page404.component.ts", lineNumber: 13 });
})();

export {
  Page404Component
};
//# sourceMappingURL=chunk-WFKJO5UX.js.map
