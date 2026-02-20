import {
  Page404Component
} from "./chunk-WFKJO5UX.js";
import {
  Login2Component
} from "./chunk-4YIZOYM6.js";
import "./chunk-IDKNDILD.js";
import {
  SlickCarouselComponent,
  SlickCarouselModule,
  SlickItemDirective
} from "./chunk-LJC4I3OA.js";
import "./chunk-S2XUSEFK.js";
import "./chunk-YYQHRHVD.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormGroup,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  PatternValidator,
  ReactiveFormsModule
} from "./chunk-ICQKGMTO.js";
import {
  Component,
  DOCUMENT,
  Inject,
  Injector,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  Output,
  RouterLink,
  RouterModule,
  Subject,
  forwardRef,
  interval,
  map,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-BM6E27KQ.js";
import "./chunk-H6NRAODO.js";

// src/app/extrapages/maintenance/maintenance.component.ts
var MaintenanceComponent = class _MaintenanceComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function MaintenanceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MaintenanceComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MaintenanceComponent, selectors: [["app-maintenance"]], decls: 47, vars: 0, consts: [[1, "home-btn", "d-none", "d-sm-block"], ["routerLink", "/", 1, "text-dark"], [1, "fas", "fa-home", "h2"], [1, "my-5", "pt-sm-5"], [1, "container"], [1, "row"], [1, "col-12", "text-center"], [1, "home-wrapper"], [1, "mb-5"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/logo.png", "alt", "", "height", "20", 1, "auth-logo-dark", "mx-auto"], ["src", "assets/images/logo-light.png", "alt", "", "height", "20", 1, "auth-logo-light", "mx-auto"], [1, "row", "justify-content-center"], [1, "col-sm-4"], [1, "maintenance-img"], ["src", "assets/images/maintenance.svg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], [1, "mt-5"], [1, "col-md-4"], [1, "card", "mt-4", "maintenance-box"], [1, "card-body"], [1, "bx", "bx-broadcast", "mb-4", "h1", "text-primary"], [1, "font-size-15", "text-uppercase"], [1, "text-muted", "mb-0"], [1, "bx", "bx-time-five", "mb-4", "h1", "text-primary"], [1, "bx", "bx-envelope", "mb-4", "h1", "text-primary"], ["href", "mailto:no-reply@domain.com", 1, "text-decoration-underline"]], template: function MaintenanceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275domElement(2, "i", 2);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "a", 9);
        \u0275\u0275domElement(10, "img", 10)(11, "img", 11);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(12, "div", 12)(13, "div", 13)(14, "div", 14);
        \u0275\u0275domElement(15, "img", 15);
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(16, "h3", 16);
        \u0275\u0275text(17, "Site is Under Maintenance");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(18, "p");
        \u0275\u0275text(19, "Please check back in sometime.");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(20, "div", 5)(21, "div", 17)(22, "div", 18)(23, "div", 19);
        \u0275\u0275domElement(24, "i", 20);
        \u0275\u0275domElementStart(25, "h5", 21);
        \u0275\u0275text(26, "Why is the Site Down?");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(27, "p", 22);
        \u0275\u0275text(28, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.");
        \u0275\u0275domElementEnd()()()();
        \u0275\u0275domElementStart(29, "div", 17)(30, "div", 18)(31, "div", 19);
        \u0275\u0275domElement(32, "i", 23);
        \u0275\u0275domElementStart(33, "h5", 21);
        \u0275\u0275text(34, " What is the Downtime?");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(35, "p", 22);
        \u0275\u0275text(36, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.");
        \u0275\u0275domElementEnd()()()();
        \u0275\u0275domElementStart(37, "div", 17)(38, "div", 18)(39, "div", 19);
        \u0275\u0275domElement(40, "i", 24);
        \u0275\u0275domElementStart(41, "h5", 21);
        \u0275\u0275text(42, " Do you need Support?");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(43, "p", 22);
        \u0275\u0275text(44, "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embar.. ");
        \u0275\u0275domElementStart(45, "a", 25);
        \u0275\u0275text(46, "no-reply@domain.com");
        \u0275\u0275domElementEnd()()()()()()()()()()();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaintenanceComponent, [{
    type: Component,
    args: [{ selector: "app-maintenance", imports: [], template: `<div class="home-btn d-none d-sm-block">\r
  <a routerLink="/" class="text-dark"><i class="fas fa-home h2"></i></a>\r
</div>\r
\r
<section class="my-5 pt-sm-5">\r
  <div class="container">\r
    <div class="row">\r
      <div class="col-12 text-center">\r
        <div class="home-wrapper">\r
          <div class="mb-5">\r
            <a routerLink="/" class="d-block auth-logo">\r
              <img src="assets/logo.png" alt="" height="20" class="auth-logo-dark mx-auto">\r
              <img src="assets/images/logo-light.png" alt="" height="20" class="auth-logo-light mx-auto">\r
            </a>\r
          </div>\r
\r
          <div class="row justify-content-center">\r
            <div class="col-sm-4">\r
              <div class="maintenance-img">\r
                <img src="assets/images/maintenance.svg" alt="" class="img-fluid mx-auto d-block">\r
              </div>\r
            </div>\r
          </div>\r
          <h3 class="mt-5">Site is Under Maintenance</h3>\r
          <p>Please check back in sometime.</p>\r
\r
          <div class="row">\r
            <div class="col-md-4">\r
              <div class="card mt-4 maintenance-box">\r
                <div class="card-body">\r
                  <i class="bx bx-broadcast mb-4 h1 text-primary"></i>\r
                  <h5 class="font-size-15 text-uppercase">Why is the Site Down?</h5>\r
                  <p class="text-muted mb-0">There are many variations of passages of\r
                    Lorem Ipsum available, but the majority have suffered alteration.</p>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="col-md-4">\r
              <div class="card mt-4 maintenance-box">\r
                <div class="card-body">\r
                  <i class="bx bx-time-five mb-4 h1 text-primary"></i>\r
                  <h5 class="font-size-15 text-uppercase">\r
                    What is the Downtime?</h5>\r
                  <p class="text-muted mb-0">Contrary to popular belief, Lorem Ipsum is not\r
                    simply random text. It has roots in a piece of classical.</p>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="col-md-4">\r
              <div class="card mt-4 maintenance-box">\r
                <div class="card-body">\r
                  <i class="bx bx-envelope mb-4 h1 text-primary"></i>\r
                  <h5 class="font-size-15 text-uppercase">\r
                    Do you need Support?</h5>\r
                  <p class="text-muted mb-0">If you are going to use a passage of Lorem\r
                    Ipsum, you need to be sure there isn't anything embar.. <a href="mailto:no-reply@domain.com"\r
                      class="text-decoration-underline">no-reply&#64;domain.com</a></p>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <!-- end row -->\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MaintenanceComponent, { className: "MaintenanceComponent", filePath: "src/app/extrapages/maintenance/maintenance.component.ts", lineNumber: 13 });
})();

// src/app/extrapages/page500/page500.component.ts
var Page500Component = class _Page500Component {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function Page500Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Page500Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Page500Component, selectors: [["app-page500"]], decls: 18, vars: 0, consts: [[1, "account-pages", "my-5", "pt-5"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], [1, "text-uppercase"], [1, "mt-5", "text-center"], ["routerLink", "/", 1, "btn", "btn-primary"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "assets/images/error-img.png", "alt", "", 1, "img-fluid"]], template: function Page500Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
        \u0275\u0275text(6, "5");
        \u0275\u0275domElement(7, "i", 6);
        \u0275\u0275text(8, "0");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(9, "h4", 7);
        \u0275\u0275text(10, "Internal Server Error");
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Page500Component, [{
    type: Component,
    args: [{ selector: "app-page500", imports: [], template: '<div class="account-pages my-5 pt-5">\r\n  <div class="container">\r\n    <div class="row">\r\n      <div class="col-lg-12">\r\n        <div class="text-center mb-5">\r\n          <h1 class="display-2 fw-medium">5<i class="bx bx-buoy bx-spin text-primary display-3"></i>0</h1>\r\n          <h4 class="text-uppercase">Internal Server Error</h4>\r\n          <div class="mt-5 text-center">\r\n            <a class="btn btn-primary" routerLink="/">Back to Dashboard</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="row justify-content-center">\r\n      <div class="col-md-8 col-xl-6">\r\n        <div>\r\n          <img src="assets/images/error-img.png" alt="" class="img-fluid">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Page500Component, { className: "Page500Component", filePath: "src/app/extrapages/page500/page500.component.ts", lineNumber: 13 });
})();

// src/app/extrapages/lockscreen/lockscreen.component.ts
var LockscreenComponent = class _LockscreenComponent {
  constructor() {
    this.year = (/* @__PURE__ */ new Date()).getFullYear();
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function LockscreenComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockscreenComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockscreenComponent, selectors: [["app-lockscreen"]], decls: 43, vars: 1, consts: [[1, "account-pages", "my-5", "pt-sm-5"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card", "overflow-hidden"], [1, "bg-primary-subtle"], [1, "row"], [1, "col-7"], [1, "text-primary", "p-4"], [1, "text-primary"], [1, "col-5", "align-self-end"], ["src", "assets/images/profile-img.png", "alt", "", 1, "img-fluid"], [1, "card-body", "pt-0"], ["routerLink", "/dashboard"], [1, "avatar-md", "profile-user-wid", "mb-4"], [1, "avatar-title", "rounded-circle", "bg-light"], ["src", "assets/logo.png", "alt", "Back & White", "height", "34", 1, "rounded-circle"], [1, "p-2"], [1, "user-thumb", "text-center", "mb-4"], ["src", "assets/images/users/avatar-1.jpg", "alt", "thumbnail", 1, "rounded-circle", "img-thumbnail", "avatar-md"], [1, "font-size-15", "mt-3"], [1, "mb-3"], ["for", "userpassword"], ["type", "password", "id", "userpassword", "placeholder", "Enter password", 1, "form-control"], [1, "text-end"], ["type", "submit", 1, "btn", "btn-primary", "w-md"], [1, "mt-5", "text-center"], ["routerLink", "/auth/login-1", 1, "fw-medium", "text-primary"], [1, "mdi", "mdi-heart", "text-danger"]], template: function LockscreenComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h5", 9);
        \u0275\u0275text(10, "Lock screen");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(11, "p");
        \u0275\u0275text(12, "Enter your password to unlock the screen!");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(13, "div", 10);
        \u0275\u0275domElement(14, "img", 11);
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(15, "div", 12)(16, "div")(17, "a", 13)(18, "div", 14)(19, "span", 15);
        \u0275\u0275domElement(20, "img", 16);
        \u0275\u0275domElementEnd()()()();
        \u0275\u0275domElementStart(21, "div", 17)(22, "form")(23, "div", 18);
        \u0275\u0275domElement(24, "img", 19);
        \u0275\u0275domElementStart(25, "h5", 20);
        \u0275\u0275text(26, "Maria Laird");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(27, "div", 21)(28, "label", 22);
        \u0275\u0275text(29, "Password");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElement(30, "input", 23);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(31, "div", 24)(32, "button", 25);
        \u0275\u0275text(33, "Unlock");
        \u0275\u0275domElementEnd()()()()()();
        \u0275\u0275domElementStart(34, "div", 26)(35, "p");
        \u0275\u0275text(36, "Not you ? return ");
        \u0275\u0275domElementStart(37, "a", 27);
        \u0275\u0275text(38, " Sign In ");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(39, "p");
        \u0275\u0275text(40);
        \u0275\u0275domElement(41, "i", 28);
        \u0275\u0275text(42, " by Themesbrand");
        \u0275\u0275domElementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(40);
        \u0275\u0275textInterpolate1("\xA9 ", ctx.year, " Skote. Crafted with ");
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockscreenComponent, [{
    type: Component,
    args: [{ selector: "app-lockscreen", imports: [], template: '<div class="account-pages my-5 pt-sm-5">\r\n  <div class="container">\r\n    <div class="row justify-content-center">\r\n      <div class="col-md-8 col-lg-6 col-xl-5">\r\n        <div class="card overflow-hidden">\r\n          <div class="bg-primary-subtle">\r\n            <div class="row">\r\n              <div class="col-7">\r\n                <div class="text-primary p-4">\r\n                  <h5 class="text-primary">Lock screen</h5>\r\n                  <p>Enter your password to unlock the screen!</p>\r\n                </div>\r\n              </div>\r\n              <div class="col-5 align-self-end">\r\n                <img src="assets/images/profile-img.png" alt="" class="img-fluid">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class="card-body pt-0">\r\n            <div>\r\n              <a routerLink="/dashboard">\r\n                <div class="avatar-md profile-user-wid mb-4">\r\n                  <span class="avatar-title rounded-circle bg-light">\r\n                    <img src="assets/logo.png" alt="Back & White" class="rounded-circle" height="34">\r\n                  </span>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class="p-2">\r\n              <form>\r\n\r\n                <div class="user-thumb text-center mb-4">\r\n                  <img src="assets/images/users/avatar-1.jpg" class="rounded-circle img-thumbnail avatar-md"\r\n                    alt="thumbnail">\r\n                  <h5 class="font-size-15 mt-3">Maria Laird</h5>\r\n                </div>\r\n                <div class="mb-3">\r\n                  <label for="userpassword">Password</label>\r\n                  <input type="password" class="form-control" id="userpassword" placeholder="Enter password">\r\n                </div>\r\n\r\n                <div class="text-end">\r\n                  <button class="btn btn-primary w-md" type="submit">Unlock</button>\r\n                </div>\r\n\r\n              </form>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <div class="mt-5 text-center">\r\n          <p>Not you ? return <a routerLink="/auth/login-1" class="fw-medium text-primary"> Sign In </a> </p>\r\n          <p>\xA9 {{year}} Skote. Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesbrand</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockscreenComponent, { className: "LockscreenComponent", filePath: "src/app/extrapages/lockscreen/lockscreen.component.ts", lineNumber: 13 });
})();

// src/app/extrapages/lockscreen2/lockscreen2.component.ts
var Lockscreen2Component = class _Lockscreen2Component {
  constructor() {
    this.year = (/* @__PURE__ */ new Date()).getFullYear();
    this.slideConfig = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    };
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function Lockscreen2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Lockscreen2Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Lockscreen2Component, selectors: [["app-lockscreen2"]], decls: 74, vars: 2, consts: [[1, "container-fluid", "p-0"], [1, "row", "g-0"], [1, "col-xl-9"], [1, "auth-full-bg", "pt-lg-5", "p-4"], [1, "w-100"], [1, "bg-overlay"], [1, "d-flex", "h-100", "flex-column"], [1, "p-4", "mt-auto"], [1, "row", "justify-content-center"], [1, "col-lg-7"], [1, "text-center"], [1, "mb-3"], [1, "bx", "bxs-quote-alt-left", "text-primary", "h1", "align-middle", "me-3"], [1, "text-primary"], ["dir", "ltr"], ["dir", "ltr", 1, "owl-theme", "auth-review-carousel", 3, "config"], ["ngxSlickItem", "", 1, "item"], [1, "py-3"], [1, "font-size-16", "mb-4"], [1, "font-size-16", "text-primary"], [1, "font-size-14", "mb-0"], [1, "col-xl-3"], [1, "auth-full-page-content", "p-md-5", "p-4"], [1, "d-flex", "flex-column", "h-100"], [1, "mb-4", "mb-md-5"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/logo.png", "alt", "", "height", "18", 1, "auth-logo-dark"], ["src", "assets/images/logo-light.png", "alt", "", "height", "18", 1, "auth-logo-light"], [1, "my-auto"], [1, "text-muted"], [1, "mt-4"], [1, "form-horizontal"], [1, "user-thumb", "text-center", "mb-4"], ["src", "assets/images/users/avatar-1.jpg", "alt", "thumbnail", 1, "rounded-circle", "img-thumbnail", "avatar-md"], [1, "font-size-15", "mt-3"], ["for", "userpassword"], ["type", "password", "id", "userpassword", "placeholder", "Enter password", 1, "form-control"], [1, "text-end"], ["type", "submit", 1, "btn", "btn-primary", "w-md", "waves-effect", "waves-light"], [1, "mt-5", "text-center"], ["routerLink", "/auth/login-2", 1, "fw-medium", "text-primary"], [1, "mt-4", "mt-md-5", "text-center"], [1, "mb-0"], [1, "mdi", "mdi-heart", "text-danger"]], template: function Lockscreen2Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4);
        \u0275\u0275element(6, "div", 5);
        \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "h4", 11);
        \u0275\u0275element(13, "i", 12);
        \u0275\u0275elementStart(14, "span", 13);
        \u0275\u0275text(15, "5k");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, "+ Satisfied clients");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 14)(18, "ngx-slick-carousel", 15)(19, "div", 16)(20, "div", 17)(21, "p", 18);
        \u0275\u0275text(22, `" Fantastic theme with a ton of options. If you just want the HTML to integrate with your project, then this is the package. You can find the files in the 'dist' folder...no need to install git and all the other stuff the documentation talks about. " `);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div")(24, "h4", 19);
        \u0275\u0275text(25, "Abs1981");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "p", 20);
        \u0275\u0275text(27, "- Skote User");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(28, "div", 16)(29, "div", 17)(30, "p", 18);
        \u0275\u0275text(31, '" If Every Vendor on Envato are as supportive as Themesbrand, Development with be a nice experience. You guys are Wonderful. Keep us the good work. "');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div")(33, "h4", 19);
        \u0275\u0275text(34, "nezerious");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "p", 20);
        \u0275\u0275text(36, "- Skote User");
        \u0275\u0275elementEnd()()()()()()()()()()()()()();
        \u0275\u0275elementStart(37, "div", 21)(38, "div", 22)(39, "div", 4)(40, "div", 23)(41, "div", 24)(42, "a", 25);
        \u0275\u0275element(43, "img", 26)(44, "img", 27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 28)(46, "div")(47, "h5", 13);
        \u0275\u0275text(48, "Lock screen");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "p", 29);
        \u0275\u0275text(50, "Enter your password to unlock the screen!");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 30)(52, "form", 31)(53, "div", 32);
        \u0275\u0275element(54, "img", 33);
        \u0275\u0275elementStart(55, "h5", 34);
        \u0275\u0275text(56, "Maria Laird");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div", 11)(58, "label", 35);
        \u0275\u0275text(59, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(60, "input", 36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 37)(62, "button", 38);
        \u0275\u0275text(63, "Unlock");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(64, "div", 39)(65, "p");
        \u0275\u0275text(66, "Not you ? return ");
        \u0275\u0275elementStart(67, "a", 40);
        \u0275\u0275text(68, " Sign In ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(69, "div", 41)(70, "p", 42);
        \u0275\u0275text(71);
        \u0275\u0275element(72, "i", 43);
        \u0275\u0275text(73, " by Themesbrand");
        \u0275\u0275elementEnd()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(18);
        \u0275\u0275property("config", ctx.slideConfig);
        \u0275\u0275advance(53);
        \u0275\u0275textInterpolate1("\xA9", ctx.year, "Skote. Crafted with ");
      }
    }, dependencies: [SlickCarouselModule, SlickCarouselComponent, SlickItemDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Lockscreen2Component, [{
    type: Component,
    args: [{ selector: "app-lockscreen2", imports: [SlickCarouselModule], template: `<div>\r
    <div class="container-fluid p-0">\r
        <div class="row g-0">\r
\r
            <div class="col-xl-9">\r
                <div class="auth-full-bg pt-lg-5 p-4">\r
                    <div class="w-100">\r
                        <div class="bg-overlay"></div>\r
                        <div class="d-flex h-100 flex-column">\r
\r
                            <div class="p-4 mt-auto">\r
                                <div class="row justify-content-center">\r
                                    <div class="col-lg-7">\r
                                        <div class="text-center">\r
\r
                                            <h4 class="mb-3"><i\r
                                                    class="bx bxs-quote-alt-left text-primary h1 align-middle me-3"></i><span\r
                                                    class="text-primary">5k</span>+ Satisfied clients</h4>\r
\r
                                            <div dir="ltr">\r
                                                <ngx-slick-carousel dir="ltr" class="owl-theme auth-review-carousel"\r
                                                    [config]="slideConfig">\r
                                                    <div class="item" ngxSlickItem>\r
                                                        <div class="py-3">\r
                                                            <p class="font-size-16 mb-4">" Fantastic theme with a\r
                                                                ton of\r
                                                                options. If you just want the HTML to integrate with\r
                                                                your project, then this is the package. You can find\r
                                                                the\r
                                                                files in the 'dist' folder...no need to install git\r
                                                                and\r
                                                                all the other stuff the documentation talks about. "\r
                                                            </p>\r
\r
                                                            <div>\r
                                                                <h4 class="font-size-16 text-primary">Abs1981</h4>\r
                                                                <p class="font-size-14 mb-0">- Skote User</p>\r
                                                            </div>\r
                                                        </div>\r
                                                    </div>\r
                                                    <div class="item" ngxSlickItem>\r
                                                        <div class="py-3">\r
                                                            <p class="font-size-16 mb-4">" If Every Vendor on Envato\r
                                                                are\r
                                                                as supportive as Themesbrand, Development with be a\r
                                                                nice\r
                                                                experience. You guys are Wonderful. Keep us the good\r
                                                                work. "</p>\r
\r
                                                            <div>\r
                                                                <h4 class="font-size-16 text-primary">nezerious</h4>\r
                                                                <p class="font-size-14 mb-0">- Skote User</p>\r
                                                            </div>\r
                                                        </div>\r
                                                    </div>\r
                                                </ngx-slick-carousel>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
            <!-- end col -->\r
\r
            <div class="col-xl-3">\r
                <div class="auth-full-page-content p-md-5 p-4">\r
                    <div class="w-100">\r
\r
                        <div class="d-flex flex-column h-100">\r
                            <div class="mb-4 mb-md-5">\r
                                <a routerLink="/" class="d-block auth-logo">\r
                                    <img src="assets/logo.png" alt="" height="18" class="auth-logo-dark">\r
                                    <img src="assets/images/logo-light.png" alt="" height="18" class="auth-logo-light">\r
                                </a>\r
                            </div>\r
                            <div class="my-auto">\r
\r
                                <div>\r
                                    <h5 class="text-primary">Lock screen</h5>\r
                                    <p class="text-muted">Enter your password to unlock the screen!</p>\r
                                </div>\r
\r
                                <div class="mt-4">\r
                                    <form class="form-horizontal">\r
\r
                                        <div class="user-thumb text-center mb-4">\r
                                            <img src="assets/images/users/avatar-1.jpg"\r
                                                class="rounded-circle img-thumbnail avatar-md" alt="thumbnail">\r
                                            <h5 class="font-size-15 mt-3">Maria Laird</h5>\r
                                        </div>\r
\r
\r
                                        <div class="mb-3">\r
                                            <label for="userpassword">Password</label>\r
                                            <input type="password" class="form-control" id="userpassword"\r
                                                placeholder="Enter password">\r
                                        </div>\r
\r
                                        <div class="text-end">\r
                                            <button class="btn btn-primary w-md waves-effect waves-light"\r
                                                type="submit">Unlock</button>\r
                                        </div>\r
                                    </form>\r
                                    <div class="mt-5 text-center">\r
                                        <p>Not you ? return <a routerLink="/auth/login-2"\r
                                                class="fw-medium text-primary"> Sign In </a> </p>\r
                                    </div>\r
                                </div>\r
                            </div>\r
\r
                            <div class="mt-4 mt-md-5 text-center">\r
                                <p class="mb-0">\xA9{{year}}Skote. Crafted with <i class="mdi mdi-heart text-danger"></i>\r
                                    by Themesbrand</p>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
            <!-- end col -->\r
        </div>\r
        <!-- end row -->\r
    </div>\r
    <!-- end container-fluid -->\r
</div>\r
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Lockscreen2Component, { className: "Lockscreen2Component", filePath: "src/app/extrapages/lockscreen2/lockscreen2.component.ts", lineNumber: 10 });
})();

// src/app/extrapages/confirmmail/confirmmail.component.ts
var ConfirmmailComponent = class _ConfirmmailComponent {
  constructor() {
    this.year = (/* @__PURE__ */ new Date()).getFullYear();
  }
  ngOnInit() {
    document.body.classList.remove("auth-body-bg");
  }
  static {
    this.\u0275fac = function ConfirmmailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfirmmailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmmailComponent, selectors: [["app-confirmmail"]], decls: 32, vars: 1, consts: [[1, "account-pages", "my-5", "pt-sm-5"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center", "mb-5", "text-muted"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/logo.png", "alt", "", "height", "20", 1, "auth-logo-dark", "mx-auto"], ["src", "assets/images/logo-light.png", "alt", "", "height", "20", 1, "auth-logo-light", "mx-auto"], [1, "mt-3"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card"], [1, "card-body"], [1, "p-2"], [1, "text-center"], [1, "avatar-md", "mx-auto"], [1, "avatar-title", "rounded-circle", "bg-light"], [1, "bx", "bx-mail-send", "h1", "mb-0", "text-primary"], [1, "p-2", "mt-4"], [1, "text-muted"], [1, "mt-4"], ["routerLink", "/", 1, "btn", "btn-success"], [1, "mt-5", "text-center"], [1, "mdi", "mdi-heart", "text-danger"]], template: function ConfirmmailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
        \u0275\u0275element(6, "img", 6)(7, "img", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 8);
        \u0275\u0275text(9, "Responsive Bootstrap 5 Admin Dashboard");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "div", 14)(16, "div", 15)(17, "div", 16);
        \u0275\u0275element(18, "i", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 18)(20, "h4");
        \u0275\u0275text(21, "Success !");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "p", 19);
        \u0275\u0275text(23, "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 20)(25, "a", 21);
        \u0275\u0275text(26, "Back to Home");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(27, "div", 22)(28, "p");
        \u0275\u0275text(29);
        \u0275\u0275element(30, "i", 23);
        \u0275\u0275text(31, " by Themesbrand");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(29);
        \u0275\u0275textInterpolate1("\xA9 ", ctx.year, " Skote. Crafted with ");
      }
    }, dependencies: [RouterModule, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmmailComponent, [{
    type: Component,
    args: [{ selector: "app-confirmmail", imports: [RouterModule], template: '<div class="account-pages my-5 pt-sm-5">\r\n    <div class="container">\r\n        <div class="row">\r\n            <div class="col-lg-12">\r\n                <div class="text-center mb-5 text-muted">\r\n                    <a routerLink="/" class="d-block auth-logo">\r\n                        <img src="assets/logo.png" alt="" height="20" class="auth-logo-dark mx-auto">\r\n                        <img src="assets/images/logo-light.png" alt="" height="20" class="auth-logo-light mx-auto">\r\n                    </a>\r\n                    <p class="mt-3">Responsive Bootstrap 5 Admin Dashboard</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- end row -->\r\n        <div class="row justify-content-center">\r\n            <div class="col-md-8 col-lg-6 col-xl-5">\r\n                <div class="card">\r\n\r\n                    <div class="card-body">\r\n\r\n                        <div class="p-2">\r\n                            <div class="text-center">\r\n\r\n                                <div class="avatar-md mx-auto">\r\n                                    <div class="avatar-title rounded-circle bg-light">\r\n                                        <i class="bx bx-mail-send h1 mb-0 text-primary"></i>\r\n                                    </div>\r\n                                </div>\r\n                                <div class="p-2 mt-4">\r\n                                    <h4>Success !</h4>\r\n                                    <p class="text-muted">At vero eos et accusamus et iusto odio dignissimos ducimus qui\r\n                                        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et</p>\r\n                                    <div class="mt-4">\r\n                                        <a routerLink="/" class="btn btn-success">Back to Home</a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class="mt-5 text-center">\r\n\r\n                    <p>\xA9 {{year}} Skote. Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesbrand</p>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmmailComponent, { className: "ConfirmmailComponent", filePath: "src/app/extrapages/confirmmail/confirmmail.component.ts", lineNumber: 10 });
})();

// src/app/extrapages/confirmmail2/confirmmail2.component.ts
var Confirmmail2Component = class _Confirmmail2Component {
  constructor() {
    this.year = (/* @__PURE__ */ new Date()).getFullYear();
    this.slideConfig = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    };
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function Confirmmail2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Confirmmail2Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Confirmmail2Component, selectors: [["app-confirmmail2"]], decls: 63, vars: 2, consts: [[1, "container-fluid", "p-0"], [1, "row", "g-0"], [1, "col-xl-9"], [1, "auth-full-bg", "pt-lg-5", "p-4"], [1, "w-100"], [1, "bg-overlay"], [1, "d-flex", "h-100", "flex-column"], [1, "p-4", "mt-auto"], [1, "row", "justify-content-center"], [1, "col-lg-7"], [1, "text-center"], [1, "mb-3"], [1, "bx", "bxs-quote-alt-left", "text-primary", "h1", "align-middle", "me-3"], [1, "text-primary"], ["dir", "ltr"], ["dir", "ltr", 1, "owl-theme", "auth-review-carousel", 3, "config"], ["ngxSlickItem", "", 1, "item"], [1, "py-3"], [1, "font-size-16", "mb-4"], [1, "font-size-16", "text-primary"], [1, "font-size-14", "mb-0"], [1, "col-xl-3"], [1, "auth-full-page-content", "p-md-5", "p-4"], [1, "d-flex", "flex-column", "h-100"], [1, "mb-4", "mb-md-5"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/logo.png", "alt", "", "height", "18", 1, "auth-logo-dark"], ["src", "assets/images/logo-light.png", "alt", "", "height", "18", 1, "auth-logo-light"], [1, "my-auto"], [1, "avatar-md", "mx-auto"], [1, "avatar-title", "rounded-circle", "bg-light"], [1, "bx", "bx-mail-send", "h1", "mb-0", "text-primary"], [1, "p-2", "mt-4"], [1, "text-muted"], [1, "mt-4"], ["routerLink", "/", 1, "btn", "btn-success"], [1, "mt-4", "mt-md-5", "text-center"], [1, "mb-0"], [1, "mdi", "mdi-heart", "text-danger"]], template: function Confirmmail2Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4);
        \u0275\u0275element(6, "div", 5);
        \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "h4", 11);
        \u0275\u0275element(13, "i", 12);
        \u0275\u0275elementStart(14, "span", 13);
        \u0275\u0275text(15, "5k");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, "+ Satisfied clients");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 14)(18, "ngx-slick-carousel", 15)(19, "div", 16)(20, "div", 17)(21, "p", 18);
        \u0275\u0275text(22, `" Fantastic theme with a ton of options. If you just want the HTML to integrate with your project, then this is the package. You can find the files in the 'dist' folder...no need to install git and all the other stuff the documentation talks about. " `);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div")(24, "h4", 19);
        \u0275\u0275text(25, "Abs1981");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "p", 20);
        \u0275\u0275text(27, "- Skote User");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(28, "div", 16)(29, "div", 17)(30, "p", 18);
        \u0275\u0275text(31, '" If Every Vendor on Envato are as supportive as Themesbrand, Development with be a nice experience. You guys are Wonderful. Keep us the good work. "');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div")(33, "h4", 19);
        \u0275\u0275text(34, "nezerious");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "p", 20);
        \u0275\u0275text(36, "- Skote User");
        \u0275\u0275elementEnd()()()()()()()()()()()()()();
        \u0275\u0275elementStart(37, "div", 21)(38, "div", 22)(39, "div", 4)(40, "div", 23)(41, "div", 24)(42, "a", 25);
        \u0275\u0275element(43, "img", 26)(44, "img", 27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 28)(46, "div", 10)(47, "div", 29)(48, "div", 30);
        \u0275\u0275element(49, "i", 31);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 32)(51, "h4");
        \u0275\u0275text(52, "Success !");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "p", 33);
        \u0275\u0275text(54, "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 34)(56, "a", 35);
        \u0275\u0275text(57, "Back to Home");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(58, "div", 36)(59, "p", 37);
        \u0275\u0275text(60);
        \u0275\u0275element(61, "i", 38);
        \u0275\u0275text(62, " by Themesbrand");
        \u0275\u0275elementEnd()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(18);
        \u0275\u0275property("config", ctx.slideConfig);
        \u0275\u0275advance(42);
        \u0275\u0275textInterpolate1("\xA9 ", ctx.year, " Skote. Crafted with ");
      }
    }, dependencies: [SlickCarouselModule, SlickCarouselComponent, SlickItemDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Confirmmail2Component, [{
    type: Component,
    args: [{ selector: "app-confirmmail2", imports: [SlickCarouselModule], template: `<div>\r
    <div class="container-fluid p-0">\r
        <div class="row g-0">\r
\r
            <div class="col-xl-9">\r
                <div class="auth-full-bg pt-lg-5 p-4">\r
                    <div class="w-100">\r
                        <div class="bg-overlay"></div>\r
                        <div class="d-flex h-100 flex-column">\r
\r
                            <div class="p-4 mt-auto">\r
                                <div class="row justify-content-center">\r
                                    <div class="col-lg-7">\r
                                        <div class="text-center">\r
\r
                                            <h4 class="mb-3"><i\r
                                                    class="bx bxs-quote-alt-left text-primary h1 align-middle me-3"></i><span\r
                                                    class="text-primary">5k</span>+ Satisfied clients</h4>\r
\r
                                            <div dir="ltr">\r
                                                <ngx-slick-carousel dir="ltr" class="owl-theme auth-review-carousel"\r
                                                    [config]="slideConfig">\r
                                                    <div class="item" ngxSlickItem>\r
                                                        <div class="py-3">\r
                                                            <p class="font-size-16 mb-4">" Fantastic theme with a\r
                                                                ton of\r
                                                                options. If you just want the HTML to integrate with\r
                                                                your project, then this is the package. You can find\r
                                                                the\r
                                                                files in the 'dist' folder...no need to install git\r
                                                                and\r
                                                                all the other stuff the documentation talks about. "\r
                                                            </p>\r
\r
                                                            <div>\r
                                                                <h4 class="font-size-16 text-primary">Abs1981</h4>\r
                                                                <p class="font-size-14 mb-0">- Skote User</p>\r
                                                            </div>\r
                                                        </div>\r
                                                    </div>\r
                                                    <div class="item" ngxSlickItem>\r
                                                        <div class="py-3">\r
                                                            <p class="font-size-16 mb-4">" If Every Vendor on Envato\r
                                                                are\r
                                                                as supportive as Themesbrand, Development with be a\r
                                                                nice\r
                                                                experience. You guys are Wonderful. Keep us the good\r
                                                                work. "</p>\r
\r
                                                            <div>\r
                                                                <h4 class="font-size-16 text-primary">nezerious</h4>\r
                                                                <p class="font-size-14 mb-0">- Skote User</p>\r
                                                            </div>\r
                                                        </div>\r
                                                    </div>\r
                                                </ngx-slick-carousel>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
            <!-- end col -->\r
\r
            <div class="col-xl-3">\r
                <div class="auth-full-page-content p-md-5 p-4">\r
                    <div class="w-100">\r
\r
                        <div class="d-flex flex-column h-100">\r
                            <div class="mb-4 mb-md-5">\r
                                <a routerLink="/" class="d-block auth-logo">\r
                                    <img src="assets/logo.png" alt="" height="18" class="auth-logo-dark">\r
                                    <img src="assets/images/logo-light.png" alt="" height="18" class="auth-logo-light">\r
                                </a>\r
                            </div>\r
                            <div class="my-auto">\r
\r
                                <div class="text-center">\r
\r
                                    <div class="avatar-md mx-auto">\r
                                        <div class="avatar-title rounded-circle bg-light">\r
                                            <i class="bx bx-mail-send h1 mb-0 text-primary"></i>\r
                                        </div>\r
                                    </div>\r
                                    <div class="p-2 mt-4">\r
                                        <h4>Success !</h4>\r
                                        <p class="text-muted">At vero eos et accusamus et iusto odio dignissimos ducimus\r
                                            qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores\r
                                            et</p>\r
                                        <div class="mt-4">\r
                                            <a routerLink="/" class="btn btn-success">Back to Home</a>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
\r
                            <div class="mt-4 mt-md-5 text-center">\r
                                <p class="mb-0">\xA9 {{year}} Skote. Crafted with <i class="mdi mdi-heart text-danger"></i>\r
                                    by Themesbrand</p>\r
                            </div>\r
                        </div>\r
\r
\r
                    </div>\r
                </div>\r
            </div>\r
            <!-- end col -->\r
        </div>\r
        <!-- end row -->\r
    </div>\r
    <!-- end container-fluid -->\r
</div>\r
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Confirmmail2Component, { className: "Confirmmail2Component", filePath: "src/app/extrapages/confirmmail2/confirmmail2.component.ts", lineNumber: 10 });
})();

// src/app/extrapages/verification/verification.component.ts
var VerificationComponent = class _VerificationComponent {
  constructor() {
    this.year = (/* @__PURE__ */ new Date()).getFullYear();
  }
  ngOnInit() {
    document.body.classList.remove("auth-body-bg");
  }
  static {
    this.\u0275fac = function VerificationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VerificationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VerificationComponent, selectors: [["app-verification"]], decls: 39, vars: 1, consts: [[1, "account-pages", "my-5", "pt-sm-5"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center", "mb-5", "text-muted"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/logo.png", "alt", "", "height", "20", 1, "auth-logo-dark", "mx-auto"], ["src", "assets/images/logo-light.png", "alt", "", "height", "20", 1, "auth-logo-light", "mx-auto"], [1, "mt-3"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card"], [1, "card-body"], [1, "p-2"], [1, "text-center"], [1, "avatar-md", "mx-auto"], [1, "avatar-title", "rounded-circle", "bg-light"], [1, "bx", "bxs-envelope", "h1", "mb-0", "text-primary"], [1, "p-2", "mt-4"], [1, "fw-semibold"], [1, "mt-4"], ["routerLink", "/", 1, "btn", "btn-success", "w-md"], [1, "mt-5", "text-center"], ["href", "javascript: void(0);", 1, "fw-medium", "text-primary"], [1, "mdi", "mdi-heart", "text-danger"]], template: function VerificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
        \u0275\u0275domElement(6, "img", 6)(7, "img", 7);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(8, "p", 8);
        \u0275\u0275text(9, "Responsive Bootstrap 4 Admin Dashboard");
        \u0275\u0275domElementEnd()()()();
        \u0275\u0275domElementStart(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "div", 14)(16, "div", 15)(17, "div", 16);
        \u0275\u0275domElement(18, "i", 17);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(19, "div", 18)(20, "h4");
        \u0275\u0275text(21, "Verify your email");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(22, "p");
        \u0275\u0275text(23, "We have sent you verification email ");
        \u0275\u0275domElementStart(24, "span", 19);
        \u0275\u0275text(25, "example@abc.com");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(26, ", Please check it");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(27, "div", 20)(28, "a", 21);
        \u0275\u0275text(29, "Verify email");
        \u0275\u0275domElementEnd()()()()()()();
        \u0275\u0275domElementStart(30, "div", 22)(31, "p");
        \u0275\u0275text(32, "Did't receive an email ? ");
        \u0275\u0275domElementStart(33, "a", 23);
        \u0275\u0275text(34, " Resend ");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(35, "p");
        \u0275\u0275text(36);
        \u0275\u0275domElement(37, "i", 24);
        \u0275\u0275text(38, " by Themesbrand");
        \u0275\u0275domElementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(36);
        \u0275\u0275textInterpolate1("\xA9 ", ctx.year, " Skote. Crafted with ");
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VerificationComponent, [{
    type: Component,
    args: [{ selector: "app-verification", imports: [], template: `<div class="account-pages my-5 pt-sm-5">\r
    <div class="container">\r
        <div class="row">\r
            <div class="col-lg-12">\r
                <div class="text-center mb-5 text-muted">\r
                    <a routerLink="/" class="d-block auth-logo">\r
                        <img src="assets/logo.png" alt="" height="20" class="auth-logo-dark mx-auto">\r
                        <img src="assets/images/logo-light.png" alt="" height="20" class="auth-logo-light mx-auto">\r
                    </a>\r
                    <p class="mt-3">Responsive Bootstrap 4 Admin Dashboard</p>\r
                </div>\r
            </div>\r
        </div>\r
        <!-- end row -->\r
        <div class="row justify-content-center">\r
            <div class="col-md-8 col-lg-6 col-xl-5">\r
                <div class="card">\r
                    <div class="card-body">\r
                        <div class="p-2">\r
                            <div class="text-center">\r
                                <div class="avatar-md mx-auto">\r
                                    <div class="avatar-title rounded-circle bg-light">\r
                                        <i class="bx bxs-envelope h1 mb-0 text-primary"></i>\r
                                    </div>\r
                                </div>\r
                                <div class="p-2 mt-4">\r
                                    <h4>Verify your email</h4>\r
                                    <p>We have sent you verification email <span\r
                                            class="fw-semibold">example&#64;abc.com</span>, Please check it</p>\r
                                    <div class="mt-4">\r
                                        <a routerLink="/" class="btn btn-success w-md">Verify email</a>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                    </div>\r
                </div>\r
                <div class="mt-5 text-center">\r
                    <p>Did't receive an email ? <a href="javascript: void(0);" class="fw-medium text-primary"> Resend\r
                        </a> </p>\r
                    <p>\xA9 {{year}} Skote. Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesbrand</p>\r
                </div>\r
\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VerificationComponent, { className: "VerificationComponent", filePath: "src/app/extrapages/verification/verification.component.ts", lineNumber: 9 });
})();

// src/app/extrapages/verification2/verification2.component.ts
var Verification2Component = class _Verification2Component {
  constructor() {
    this.year = (/* @__PURE__ */ new Date()).getFullYear();
    this.slideConfig = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    };
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function Verification2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Verification2Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Verification2Component, selectors: [["app-verification2"]], decls: 66, vars: 2, consts: [[1, "container-fluid", "p-0"], [1, "row", "g-0"], [1, "col-xl-9"], [1, "auth-full-bg", "pt-lg-5", "p-4"], [1, "w-100"], [1, "bg-overlay"], [1, "d-flex", "h-100", "flex-column"], [1, "p-4", "mt-auto"], [1, "row", "justify-content-center"], [1, "col-lg-7"], [1, "text-center"], [1, "mb-3"], [1, "bx", "bxs-quote-alt-left", "text-primary", "h1", "align-middle", "me-3"], [1, "text-primary"], ["dir", "ltr"], ["dir", "ltr", 1, "owl-theme", "auth-review-carousel", 3, "config"], ["ngxSlickItem", "", 1, "item"], [1, "py-3"], [1, "font-size-16", "mb-4"], [1, "font-size-16", "text-primary"], [1, "font-size-14", "mb-0"], [1, "col-xl-3"], [1, "auth-full-page-content", "p-md-5", "p-4"], [1, "d-flex", "flex-column", "h-100"], [1, "mb-4", "mb-md-5"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/logo.png", "alt", "", "height", "18", 1, "auth-logo-dark"], ["src", "assets/images/logo-light.png", "alt", "", "height", "18", 1, "auth-logo-light"], [1, "my-auto"], [1, "avatar-md", "mx-auto"], [1, "avatar-title", "rounded-circle", "bg-light"], [1, "bx", "bxs-envelope", "h1", "mb-0", "text-primary"], [1, "p-2", "mt-4"], [1, "fw-semibold"], [1, "mt-4"], ["routerLink", "/", 1, "btn", "btn-success", "w-md"], [1, "mt-4", "mt-md-5", "text-center"], [1, "mb-0"], [1, "mdi", "mdi-heart", "text-danger"]], template: function Verification2Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4);
        \u0275\u0275element(6, "div", 5);
        \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "h4", 11);
        \u0275\u0275element(13, "i", 12);
        \u0275\u0275elementStart(14, "span", 13);
        \u0275\u0275text(15, "5k");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, "+ Satisfied clients");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 14)(18, "ngx-slick-carousel", 15)(19, "div", 16)(20, "div", 17)(21, "p", 18);
        \u0275\u0275text(22, `" Fantastic theme with a ton of options. If you just want the HTML to integrate with your project, then this is the package. You can find the files in the 'dist' folder...no need to install git and all the other stuff the documentation talks about. " `);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div")(24, "h4", 19);
        \u0275\u0275text(25, "Abs1981");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "p", 20);
        \u0275\u0275text(27, "- Skote User");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(28, "div", 16)(29, "div", 17)(30, "p", 18);
        \u0275\u0275text(31, '" If Every Vendor on Envato are as supportive as Themesbrand, Development with be a nice experience. You guys are Wonderful. Keep us the good work. "');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div")(33, "h4", 19);
        \u0275\u0275text(34, "nezerious");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "p", 20);
        \u0275\u0275text(36, "- Skote User");
        \u0275\u0275elementEnd()()()()()()()()()()()()()();
        \u0275\u0275elementStart(37, "div", 21)(38, "div", 22)(39, "div", 4)(40, "div", 23)(41, "div", 24)(42, "a", 25);
        \u0275\u0275element(43, "img", 26)(44, "img", 27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 28)(46, "div", 10)(47, "div", 29)(48, "div", 30);
        \u0275\u0275element(49, "i", 31);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 32)(51, "h4");
        \u0275\u0275text(52, "Verify your email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "p");
        \u0275\u0275text(54, "We have sent you verification email ");
        \u0275\u0275elementStart(55, "span", 33);
        \u0275\u0275text(56, "example@abc.com");
        \u0275\u0275elementEnd();
        \u0275\u0275text(57, ", Please check it");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 34)(59, "a", 35);
        \u0275\u0275text(60, "Verify email");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(61, "div", 36)(62, "p", 37);
        \u0275\u0275text(63);
        \u0275\u0275element(64, "i", 38);
        \u0275\u0275text(65, " by Themesbrand");
        \u0275\u0275elementEnd()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(18);
        \u0275\u0275property("config", ctx.slideConfig);
        \u0275\u0275advance(45);
        \u0275\u0275textInterpolate1("\xA9 ", ctx.year, " Skote. Crafted with ");
      }
    }, dependencies: [SlickCarouselModule, SlickCarouselComponent, SlickItemDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Verification2Component, [{
    type: Component,
    args: [{ selector: "app-verification2", imports: [SlickCarouselModule], template: `<div>\r
    <div class="container-fluid p-0">\r
        <div class="row g-0">\r
\r
            <div class="col-xl-9">\r
                <div class="auth-full-bg pt-lg-5 p-4">\r
                    <div class="w-100">\r
                        <div class="bg-overlay"></div>\r
                        <div class="d-flex h-100 flex-column">\r
\r
                            <div class="p-4 mt-auto">\r
                                <div class="row justify-content-center">\r
                                    <div class="col-lg-7">\r
                                        <div class="text-center">\r
\r
                                            <h4 class="mb-3"><i\r
                                                    class="bx bxs-quote-alt-left text-primary h1 align-middle me-3"></i><span\r
                                                    class="text-primary">5k</span>+ Satisfied clients</h4>\r
\r
                                            <div dir="ltr">\r
                                                <ngx-slick-carousel dir="ltr" class="owl-theme auth-review-carousel"\r
                                                    [config]="slideConfig">\r
                                                    <div class="item" ngxSlickItem>\r
                                                        <div class="py-3">\r
                                                            <p class="font-size-16 mb-4">" Fantastic theme with a\r
                                                                ton of\r
                                                                options. If you just want the HTML to integrate with\r
                                                                your project, then this is the package. You can find\r
                                                                the\r
                                                                files in the 'dist' folder...no need to install git\r
                                                                and\r
                                                                all the other stuff the documentation talks about. "\r
                                                            </p>\r
\r
                                                            <div>\r
                                                                <h4 class="font-size-16 text-primary">Abs1981</h4>\r
                                                                <p class="font-size-14 mb-0">- Skote User</p>\r
                                                            </div>\r
                                                        </div>\r
                                                    </div>\r
                                                    <div class="item" ngxSlickItem>\r
                                                        <div class="py-3">\r
                                                            <p class="font-size-16 mb-4">" If Every Vendor on Envato\r
                                                                are\r
                                                                as supportive as Themesbrand, Development with be a\r
                                                                nice\r
                                                                experience. You guys are Wonderful. Keep us the good\r
                                                                work. "</p>\r
\r
                                                            <div>\r
                                                                <h4 class="font-size-16 text-primary">nezerious</h4>\r
                                                                <p class="font-size-14 mb-0">- Skote User</p>\r
                                                            </div>\r
                                                        </div>\r
                                                    </div>\r
                                                </ngx-slick-carousel>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
            <!-- end col -->\r
\r
            <div class="col-xl-3">\r
                <div class="auth-full-page-content p-md-5 p-4">\r
                    <div class="w-100">\r
\r
                        <div class="d-flex flex-column h-100">\r
                            <div class="mb-4 mb-md-5">\r
                                <a routerLink="/" class="d-block auth-logo">\r
                                    <img src="assets/logo.png" alt="" height="18" class="auth-logo-dark">\r
                                    <img src="assets/images/logo-light.png" alt="" height="18" class="auth-logo-light">\r
                                </a>\r
                            </div>\r
                            <div class="my-auto">\r
\r
                                <div class="text-center">\r
\r
                                    <div class="avatar-md mx-auto">\r
                                        <div class="avatar-title rounded-circle bg-light">\r
                                            <i class="bx bxs-envelope h1 mb-0 text-primary"></i>\r
                                        </div>\r
                                    </div>\r
                                    <div class="p-2 mt-4">\r
                                        <h4>Verify your email</h4>\r
                                        <p>We have sent you verification email <span\r
                                                class="fw-semibold">example&#64;abc.com</span>, Please check it</p>\r
                                        <div class="mt-4">\r
                                            <a routerLink="/" class="btn btn-success w-md">Verify email</a>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
\r
                            <div class="mt-4 mt-md-5 text-center">\r
                                <p class="mb-0">\xA9 {{year}} Skote. Crafted with <i class="mdi mdi-heart text-danger"></i>\r
                                    by Themesbrand</p>\r
                            </div>\r
                        </div>\r
\r
\r
                    </div>\r
                </div>\r
            </div>\r
            <!-- end col -->\r
        </div>\r
        <!-- end row -->\r
    </div>\r
    <!-- end container-fluid -->\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Verification2Component, { className: "Verification2Component", filePath: "src/app/extrapages/verification2/verification2.component.ts", lineNumber: 10 });
})();

// node_modules/ng-otp-input/fesm2022/ng-otp-input.mjs
var _c0 = (a0) => ({
  "error-input": a0
});
function NgOtpInputComponent_div_0_ng_container_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.config.separator, " ");
  }
}
function NgOtpInputComponent_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "input", 5, 0);
    \u0275\u0275listener("paste", function NgOtpInputComponent_div_0_ng_container_2_Template_input_paste_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handlePaste($event));
    })("keyup", function NgOtpInputComponent_div_0_ng_container_2_Template_input_keyup_1_listener($event) {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onKeyUp($event, i_r4));
    })("input", function NgOtpInputComponent_div_0_ng_container_2_Template_input_input_1_listener($event) {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onInput($event, i_r4));
    })("keydown", function NgOtpInputComponent_div_0_ng_container_2_Template_input_keydown_1_listener($event) {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onKeyDown($event, i_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, NgOtpInputComponent_div_0_ng_container_2_span_3_Template, 2, 1, "span", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r4 = ctx.index;
    const last_r6 = ctx.last;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("otp-input ", ctx_r1.config.inputClass));
    \u0275\u0275property("pattern", ctx_r1.config.allowNumbersOnly ? "\\d*" : "")("type", ctx_r1.inputType)("placeholder", (ctx_r1.config == null ? null : ctx_r1.config.placeholder) || "")("ngStyle", ctx_r1.config.inputStyles)("formControl", ctx_r1.otpForm.controls[item_r5])("id", ctx_r1.getBoxId(i_r4))("ngClass", \u0275\u0275pureFunction1(11, _c0, (ctx_r1.config == null ? null : ctx_r1.config.showError) && (ctx_r1.formControl == null ? null : ctx_r1.formControl.invalid) && ((ctx_r1.formControl == null ? null : ctx_r1.formControl.dirty) || (ctx_r1.formControl == null ? null : ctx_r1.formControl.touched))));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.config.separator && !last_r6);
  }
}
function NgOtpInputComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("focusin", function NgOtpInputComponent_div_0_Template_div_focusin_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFocusIn());
    })("focusout", function NgOtpInputComponent_div_0_Template_div_focusout_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFocusOut());
    });
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275template(2, NgOtpInputComponent_div_0_ng_container_2_Template, 4, 13, "ng-container", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(\u0275\u0275interpolate1("ng-otp-input-wrapper wrapper ", ctx_r1.config.containerClass));
    \u0275\u0275property("id", \u0275\u0275interpolate1("c_", ctx_r1.componentKey))("ngStyle", ctx_r1.config.containerStyles);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.controlKeys);
  }
}
var KeyboardUtil = class {
  static ifTab(event) {
    return this.ifKey(event, "Tab");
  }
  static ifDelete(event) {
    return this.ifKey(event, "Delete;Del");
  }
  static ifBackspace(event) {
    return this.ifKey(event, "Backspace");
  }
  static ifRightArrow(event) {
    return this.ifKey(event, "ArrowRight;Right");
  }
  static ifLeftArrow(event) {
    return this.ifKey(event, "ArrowLeft;Left");
  }
  static ifSpacebar(event) {
    return this.ifKey(event, "Spacebar; ");
  }
  static ifKey(event, keys) {
    let keysToCheck = keys.split(";");
    return keysToCheck.some((k) => k === event.key);
  }
};
var ObjectUtil = class {
  static keys(obj) {
    if (!obj) return [];
    return Object.keys(obj);
  }
};
var NgOtpInputComponent = class _NgOtpInputComponent {
  set disabled(isDisabled) {
    this.setDisabledState(isDisabled);
  }
  get inputType() {
    return this.config?.isPasswordInput ? "password" : this.config?.allowNumbersOnly ? "tel" : "text";
  }
  get controlKeys() {
    return ObjectUtil.keys(this.otpForm?.controls);
  }
  get formControl() {
    return this.formCtrl ?? this.inj?.get(NgControl);
  }
  constructor(document2, inj) {
    this.document = document2;
    this.inj = inj;
    this.config = {
      length: 4
    };
    this.onBlur = new Subject();
    this.onInputChange = new Subject();
    this.inputControls = new Array(this.config.length);
    this.componentKey = Math.random().toString(36).substring(2) + (/* @__PURE__ */ new Date()).getTime().toString(36);
    this.destroy$ = new Subject();
    this.activeFocusCount = 0;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this._isDisabled = false;
  }
  ngOnInit() {
    this.otpForm = new FormGroup({});
    for (let index = 0; index < this.config.length; index++) {
      this.otpForm.addControl(this.getControlName(index), new FormControl());
    }
    this.otpForm.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((v) => {
      ObjectUtil.keys(this.otpForm.controls).forEach((k) => {
        var val = this.otpForm.controls[k].value;
        if (val && val.length > 1) {
          if (val.length >= this.config.length) {
            this.setValue(val);
          } else {
            this.rebuildValue();
          }
        }
      });
    });
  }
  setDisabledState(isDisabled) {
    this._isDisabled = isDisabled;
    if (this.otpForm) {
      if (isDisabled) {
        this.otpForm.disable({
          emitEvent: false
        });
      } else {
        this.otpForm.enable({
          emitEvent: false
        });
      }
    }
  }
  writeValue(value) {
    this.currentVal = !this.hasVal(value) ? null : value;
    this.setValue(this.currentVal);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  onFocusIn() {
    this.onTouched();
    this.activeFocusCount++;
  }
  onFocusOut() {
    setTimeout(() => {
      this.activeFocusCount--;
      if (this.activeFocusCount === 0) {
        this.onTouched();
        this.onBlur.next();
      }
    }, 0);
  }
  ngAfterViewInit() {
    if (!this.config.disableAutoFocus) {
      const containerItem = this.document.getElementById(`c_${this.componentKey}`);
      if (containerItem) {
        const ele = containerItem.getElementsByClassName("otp-input")[0];
        if (ele && ele.focus) {
          ele.focus();
        }
      }
    }
  }
  getControlName(idx) {
    return `ctrl_${idx}`;
  }
  onKeyDown($event, inputIdx) {
    const prevInputId = this.getBoxId(inputIdx - 1);
    const currentInputId = this.getBoxId(inputIdx);
    if (KeyboardUtil.ifKey($event, "Enter")) {
      let inp = this.document.getElementById(currentInputId);
      const form = inp?.closest("form");
      if (form) {
        $event.preventDefault();
        const submitEvent = new Event("submit", {
          bubbles: true,
          cancelable: true
        });
        form.dispatchEvent(submitEvent);
        return;
      }
    }
    if (KeyboardUtil.ifSpacebar($event)) {
      $event.preventDefault();
      return false;
    }
    if (KeyboardUtil.ifBackspace($event)) {
      if (!$event.target.value) {
        this.clearInput(prevInputId, inputIdx - 1);
        this.setSelected(prevInputId);
      } else {
        this.clearInput(currentInputId, inputIdx);
      }
      this.rebuildValue();
      return;
    }
    if (KeyboardUtil.ifDelete($event)) {
      if (!$event.target.value) {
        this.clearInput(prevInputId, inputIdx - 1);
        this.setSelected(prevInputId);
      } else {
        this.clearInput(currentInputId, inputIdx);
      }
      this.rebuildValue();
      return;
    }
  }
  hasVal(val) {
    return val != null && val != void 0 && (!val?.trim || val.trim() != "");
  }
  onInput($event, inputIdx) {
    let newVal = this.hasVal(this.currentVal) ? `${this.currentVal}${$event.target.value}` : $event.target.value;
    if (this.config.allowNumbersOnly && !this.validateNumber(newVal)) {
      $event.target.value = null;
      $event.stopPropagation();
      $event.preventDefault();
      this.clearInput(null, inputIdx);
      return;
    }
    if (this.ifValidKeyCode(null, $event.target.value)) {
      const nextInputId = this.getBoxId(inputIdx + 1);
      this.setSelected(nextInputId);
      this.rebuildValue();
    } else {
      $event.target.value = null;
      let ctrlName = this.getControlName(inputIdx);
      this.otpForm.controls[ctrlName]?.setValue(null);
      this.rebuildValue();
    }
  }
  onKeyUp($event, inputIdx) {
    if (KeyboardUtil.ifTab($event)) {
      inputIdx -= 1;
    }
    const nextInputId = this.getBoxId(inputIdx + 1);
    const prevInputId = this.getBoxId(inputIdx - 1);
    if (KeyboardUtil.ifRightArrow($event)) {
      $event.preventDefault();
      this.setSelected(nextInputId);
      return;
    }
    if (KeyboardUtil.ifLeftArrow($event)) {
      $event.preventDefault();
      this.setSelected(prevInputId);
      return;
    }
  }
  validateNumber(val) {
    return val && /^[0-9]+$/.test(val);
  }
  getBoxId(idx) {
    return `otp_${idx}_${this.componentKey}`;
  }
  clearInput(eleId, inputIdx) {
    let ctrlName = this.getControlName(inputIdx);
    this.otpForm.controls[ctrlName]?.setValue(null);
    if (eleId) {
      const ele = this.document.getElementById(eleId);
      if (ele && ele instanceof HTMLInputElement) {
        ele.value = null;
      }
    }
  }
  setSelected(eleId) {
    this.focusTo(eleId);
    const ele = this.document.getElementById(eleId);
    if (ele && ele.setSelectionRange) {
      setTimeout(() => {
        ele.setSelectionRange(0, 1);
      }, 0);
    }
  }
  ifValidKeyCode(event, val) {
    const inp = val ?? event.key;
    if (this.config?.allowNumbersOnly) {
      return this.validateNumber(inp);
    }
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return isMobile || /^[a-zA-Z0-9%*_\-@#$!]$/.test(inp) && inp.length == 1;
  }
  focusTo(eleId) {
    const ele = this.document.getElementById(eleId);
    if (ele) {
      ele.focus();
    }
  }
  // method to set component value
  setValue(value) {
    if (this.config.allowNumbersOnly && isNaN(value)) {
      return;
    }
    this.otpForm?.reset();
    if (!this.hasVal(value)) {
      this.rebuildValue();
      return;
    }
    value = value.toString().replace(/\s/g, "");
    Array.from(value).forEach((c, idx) => {
      if (this.otpForm.get(this.getControlName(idx))) {
        this.otpForm.get(this.getControlName(idx)).setValue(c);
      }
    });
    if (!this.config.disableAutoFocus) {
      setTimeout(() => {
        const containerItem = this.document.getElementById(`c_${this.componentKey}`);
        var indexOfElementToFocus = value.length < this.config.length ? value.length : this.config.length - 1;
        let ele = containerItem.getElementsByClassName("otp-input")[indexOfElementToFocus];
        if (ele && ele.focus) {
          setTimeout(() => {
            ele.focus();
          }, 1);
        }
      }, 0);
    }
    this.rebuildValue();
  }
  rebuildValue() {
    let val = null;
    ObjectUtil.keys(this.otpForm.controls).forEach((k) => {
      let ctrlVal = this.otpForm.controls[k].value;
      if (ctrlVal) {
        let isLengthExceed = ctrlVal.length > 1;
        let isCaseTransformEnabled = !this.config.allowNumbersOnly && this.config.letterCase && (this.config.letterCase.toLocaleLowerCase() == "upper" || this.config.letterCase.toLocaleLowerCase() == "lower");
        ctrlVal = ctrlVal[0];
        let transformedVal = isCaseTransformEnabled ? this.config.letterCase.toLocaleLowerCase() == "upper" ? ctrlVal.toUpperCase() : ctrlVal.toLowerCase() : ctrlVal;
        if (isCaseTransformEnabled && transformedVal == ctrlVal) {
          isCaseTransformEnabled = false;
        } else {
          ctrlVal = transformedVal;
        }
        if (val == null) {
          val = ctrlVal;
        } else {
          val += ctrlVal;
        }
        if (isLengthExceed || isCaseTransformEnabled) {
          this.otpForm.controls[k].setValue(ctrlVal);
        }
      }
    });
    if (this.currentVal != val) {
      this.currentVal = val;
      this.onChange(val);
      if (this.formCtrl?.setValue) {
        this.formCtrl.setValue(val);
      }
      this.onInputChange.next(val);
    }
  }
  handlePaste(e) {
    let clipboardData = e.clipboardData || window["clipboardData"];
    if (clipboardData) {
      var pastedData = clipboardData.getData("Text");
    }
    e.stopPropagation();
    e.preventDefault();
    if (!pastedData || this.config.allowNumbersOnly && !this.validateNumber(pastedData)) {
      return;
    }
    this.setValue(pastedData);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static {
    this.\u0275fac = function NgOtpInputComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgOtpInputComponent)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(Injector));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgOtpInputComponent,
      selectors: [["ng-otp-input"], ["ngx-otp-input"]],
      inputs: {
        config: "config",
        formCtrl: "formCtrl",
        disabled: "disabled"
      },
      outputs: {
        onBlur: "onBlur",
        onInputChange: "onInputChange"
      },
      features: [\u0275\u0275ProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NgOtpInputComponent),
        multi: true
      }])],
      decls: 1,
      vars: 1,
      consts: [["inp", ""], ["tabindex", "0", 3, "class", "id", "ngStyle", "focusin", "focusout", 4, "ngIf"], ["tabindex", "0", 3, "focusin", "focusout", "id", "ngStyle"], [1, "n-o-c"], [4, "ngFor", "ngForOf"], ["autocomplete", "one-time-code", 3, "paste", "keyup", "input", "keydown", "pattern", "type", "placeholder", "ngStyle", "formControl", "id", "ngClass"], [4, "ngIf"]],
      template: function NgOtpInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275template(0, NgOtpInputComponent_div_0_Template, 3, 7, "div", 1);
        }
        if (rf & 2) {
          \u0275\u0275property("ngIf", ctx.otpForm == null ? null : ctx.otpForm.controls);
        }
      },
      dependencies: [ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, PatternValidator, FormControlDirective, NgIf, NgForOf, NgStyle, NgClass],
      styles: [".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.ng-otp-input-wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]{margin:0 .51rem}.ng-otp-input-wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:first-child{margin-left:0}.ng-otp-input-wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:last-child{margin-right:0}.n-o-c[_ngcontent-%COMP%]{display:flex;align-items:center}.error-input[_ngcontent-%COMP%]{border-color:red}@media screen and (max-width: 767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgOtpInputComponent, [{
    type: Component,
    args: [{
      selector: "ng-otp-input, ngx-otp-input",
      imports: [ReactiveFormsModule, NgIf, NgForOf, NgStyle, NgClass],
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgOtpInputComponent),
        multi: true
      }],
      template: `<div class="ng-otp-input-wrapper wrapper {{config.containerClass}}" id="c_{{componentKey}}" *ngIf="otpForm?.controls"\r
  [ngStyle]="config.containerStyles" tabindex="0" \r
  (focusin)="onFocusIn()" \r
  (focusout)="onFocusOut()">\r
  <div class="n-o-c">\r
    <ng-container *ngFor="let item of controlKeys;let i=index;let last=last">\r
      <input (paste)="handlePaste($event)" [pattern]="config.allowNumbersOnly ? '\\\\d*' : ''" [type]="inputType"  [placeholder]="config?.placeholder || ''"\r
      [ngStyle]="config.inputStyles" \r
      class="otp-input {{config.inputClass}}" autocomplete="one-time-code" \r
      [formControl]="otpForm.controls[item]" #inp [id]="getBoxId(i)" \r
      (keyup)="onKeyUp($event,i)" (input)="onInput($event,i)" (keydown)="onKeyDown($event,i)" [ngClass]="{'error-input': (config?.showError && formControl?.invalid && (formControl?.dirty || formControl?.touched))}">\r
      <span *ngIf="config.separator && !last">\r
        {{config.separator}}\r
      </span>\r
    </ng-container>\r
  </div>  \r
</div>`,
      styles: [".otp-input{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.ng-otp-input-wrapper .otp-input{margin:0 .51rem}.ng-otp-input-wrapper .otp-input:first-child{margin-left:0}.ng-otp-input-wrapper .otp-input:last-child{margin-right:0}.n-o-c{display:flex;align-items:center}.error-input{border-color:red}@media screen and (max-width: 767px){.otp-input{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input{width:30px;font-size:18px;height:30px}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Injector
  }], {
    config: [{
      type: Input
    }],
    formCtrl: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    onBlur: [{
      type: Output
    }],
    onInputChange: [{
      type: Output
    }]
  });
})();
var NgOtpInputModule = class _NgOtpInputModule {
  static {
    this.\u0275fac = function NgOtpInputModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgOtpInputModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgOtpInputModule,
      imports: [NgOtpInputComponent],
      exports: [NgOtpInputComponent]
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [NgOtpInputComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgOtpInputModule, [{
    type: NgModule,
    args: [{
      imports: [NgOtpInputComponent],
      exports: [NgOtpInputComponent]
    }]
  }], null, null);
})();

// src/app/extrapages/steptwoverification/steptwoverification.component.ts
var SteptwoverificationComponent = class _SteptwoverificationComponent {
  constructor() {
    this.config = {
      allowNumbersOnly: true,
      length: 4,
      isPasswordInput: false,
      disableAutoFocus: false,
      placeholder: "",
      inputStyles: {
        "width": "80px",
        "height": "50px"
      }
    };
    this.year = (/* @__PURE__ */ new Date()).getFullYear();
  }
  ngOnInit() {
    document.body.classList.remove("auth-body-bg");
  }
  static {
    this.\u0275fac = function SteptwoverificationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SteptwoverificationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SteptwoverificationComponent, selectors: [["app-steptwoverification"]], decls: 40, vars: 2, consts: [[1, "account-pages", "my-5", "pt-sm-5"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center", "mb-5", "text-muted"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/logo.png", "alt", "", "height", "20", 1, "auth-logo-dark", "mx-auto"], ["src", "assets/images/logo-light.png", "alt", "", "height", "20", 1, "auth-logo-light", "mx-auto"], [1, "mt-3"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card"], [1, "card-body"], [1, "p-2"], [1, "text-center"], [1, "avatar-md", "mx-auto"], [1, "avatar-title", "rounded-circle", "bg-light"], [1, "bx", "bxs-envelope", "h1", "mb-0", "text-primary"], [1, "p-2", "mt-4"], [1, "mb-5"], [1, "fw-semibold"], [3, "config"], [1, "mt-4"], ["routerLink", "/", 1, "btn", "btn-success", "w-md"], [1, "mt-5", "text-center"], ["href", "javascript: void(0);", 1, "fw-medium", "text-primary"], [1, "mdi", "mdi-heart", "text-danger"]], template: function SteptwoverificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
        \u0275\u0275element(6, "img", 6)(7, "img", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 8);
        \u0275\u0275text(9, "Responsive Bootstrap 4 Admin Dashboard");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "div", 14)(16, "div", 15)(17, "div", 16);
        \u0275\u0275element(18, "i", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 18)(20, "h4");
        \u0275\u0275text(21, "Verify your email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "p", 19);
        \u0275\u0275text(23, "Please enter the 4 digit code sent to ");
        \u0275\u0275elementStart(24, "span", 20);
        \u0275\u0275text(25, "example@abc.com");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "form");
        \u0275\u0275element(27, "ng-otp-input", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 22)(29, "a", 23);
        \u0275\u0275text(30, "Confirm");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(31, "div", 24)(32, "p");
        \u0275\u0275text(33, "Did't receive a code ? ");
        \u0275\u0275elementStart(34, "a", 25);
        \u0275\u0275text(35, " Resend ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "p");
        \u0275\u0275text(37);
        \u0275\u0275element(38, "i", 26);
        \u0275\u0275text(39, " by Themesbrand");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(27);
        \u0275\u0275property("config", ctx.config);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1("\xA9 ", ctx.year, " Skote. Crafted with ");
      }
    }, dependencies: [NgOtpInputModule, NgOtpInputComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SteptwoverificationComponent, [{
    type: Component,
    args: [{ selector: "app-steptwoverification", imports: [NgOtpInputModule], template: `<div class="account-pages my-5 pt-sm-5">\r
    <div class="container">\r
        <div class="row">\r
            <div class="col-lg-12">\r
                <div class="text-center mb-5 text-muted">\r
                    <a routerLink="/" class="d-block auth-logo">\r
                        <img src="assets/logo.png" alt="" height="20" class="auth-logo-dark mx-auto">\r
                        <img src="assets/images/logo-light.png" alt="" height="20" class="auth-logo-light mx-auto">\r
                    </a>\r
                    <p class="mt-3">Responsive Bootstrap 4 Admin Dashboard</p>\r
                </div>\r
            </div>\r
        </div>\r
        <!-- end row -->\r
        <div class="row justify-content-center">\r
            <div class="col-md-8 col-lg-6 col-xl-5">\r
                <div class="card">\r
\r
                    <div class="card-body">\r
\r
                        <div class="p-2">\r
                            <div class="text-center">\r
\r
                                <div class="avatar-md mx-auto">\r
                                    <div class="avatar-title rounded-circle bg-light">\r
                                        <i class="bx bxs-envelope h1 mb-0 text-primary"></i>\r
                                    </div>\r
                                </div>\r
                                <div class="p-2 mt-4">\r
\r
                                    <h4>Verify your email</h4>\r
                                    <p class="mb-5">Please enter the 4 digit code sent to <span\r
                                            class="fw-semibold">example&#64;abc.com</span></p>\r
\r
                                    <form>\r
                                        <ng-otp-input [config]="config"></ng-otp-input>\r
                                    </form>\r
\r
                                    <div class="mt-4">\r
                                        <a routerLink="/" class="btn btn-success w-md">Confirm</a>\r
                                    </div>\r
                                </div>\r
\r
                            </div>\r
                        </div>\r
\r
                    </div>\r
                </div>\r
                <div class="mt-5 text-center">\r
                    <p>Did't receive a code ? <a href="javascript: void(0);" class="fw-medium text-primary"> Resend </a>\r
                    </p>\r
                    <p>\xA9 {{year}} Skote. Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesbrand</p>\r
                </div>\r
\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SteptwoverificationComponent, { className: "SteptwoverificationComponent", filePath: "src/app/extrapages/steptwoverification/steptwoverification.component.ts", lineNumber: 10 });
})();

// src/app/extrapages/steptwoverification2/steptwoverification2.component.ts
var Steptwoverification2Component = class _Steptwoverification2Component {
  constructor() {
    this.year = (/* @__PURE__ */ new Date()).getFullYear();
    this.config = {
      allowNumbersOnly: true,
      length: 4,
      isPasswordInput: false,
      disableAutoFocus: false,
      placeholder: "",
      inputStyles: {
        "width": "80px",
        "height": "50px"
      }
    };
    this.slideConfig = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    };
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function Steptwoverification2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Steptwoverification2Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Steptwoverification2Component, selectors: [["app-steptwoverification2"]], decls: 66, vars: 3, consts: [[1, "container-fluid", "p-0"], [1, "row", "g-0"], [1, "col-xl-9"], [1, "auth-full-bg", "pt-lg-5", "p-4"], [1, "w-100"], [1, "bg-overlay"], [1, "d-flex", "h-100", "flex-column"], [1, "p-4", "mt-auto"], [1, "row", "justify-content-center"], [1, "col-lg-7"], [1, "text-center"], [1, "mb-3"], [1, "bx", "bxs-quote-alt-left", "text-primary", "h1", "align-middle", "me-3"], [1, "text-primary"], ["dir", "ltr"], ["dir", "ltr", 1, "owl-theme", "auth-review-carousel", 3, "config"], ["ngxSlickItem", "", 1, "item"], [1, "py-3"], [1, "font-size-16", "mb-4"], [1, "font-size-16", "text-primary"], [1, "font-size-14", "mb-0"], [1, "col-xl-3"], [1, "auth-full-page-content", "p-md-5", "p-4"], [1, "d-flex", "flex-column", "h-100"], [1, "mb-4", "mb-md-5"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/logo.png", "alt", "", "height", "18", 1, "auth-logo-dark"], ["src", "assets/images/logo-light.png", "alt", "", "height", "18", 1, "auth-logo-light"], [1, "my-auto"], [1, "avatar-md", "mx-auto"], [1, "avatar-title", "rounded-circle", "bg-light"], [1, "bx", "bxs-envelope", "h1", "mb-0", "text-primary"], [1, "p-2", "mt-4", "full-step"], [1, "mb-5"], [1, "fw-semibold"], [3, "config"], [1, "mt-4"], ["routerLink", "/", 1, "btn", "btn-success", "w-md"], [1, "mt-4", "mt-md-5", "text-center"], [1, "mb-0"], [1, "mdi", "mdi-heart", "text-danger"]], template: function Steptwoverification2Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "div", 5);
        \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "h4", 11);
        \u0275\u0275element(12, "i", 12);
        \u0275\u0275elementStart(13, "span", 13);
        \u0275\u0275text(14, "5k");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, "+ Satisfied clients");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 14)(17, "ngx-slick-carousel", 15)(18, "div", 16)(19, "div", 17)(20, "p", 18);
        \u0275\u0275text(21, `" Fantastic theme with a ton of options. If you just want the HTML to integrate with your project, then this is the package. You can find the files in the 'dist' folder...no need to install git and all the other stuff the documentation talks about. " `);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div")(23, "h4", 19);
        \u0275\u0275text(24, "Abs1981");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p", 20);
        \u0275\u0275text(26, "- Skote User");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(27, "div", 16)(28, "div", 17)(29, "p", 18);
        \u0275\u0275text(30, '" If Every Vendor on Envato are as supportive as Themesbrand, Development with be a nice experience. You guys are Wonderful. Keep us the good work. "');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div")(32, "h4", 19);
        \u0275\u0275text(33, "nezerious");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "p", 20);
        \u0275\u0275text(35, "- Skote User");
        \u0275\u0275elementEnd()()()()()()()()()()()()()();
        \u0275\u0275elementStart(36, "div", 21)(37, "div", 22)(38, "div", 4)(39, "div", 23)(40, "div", 24)(41, "a", 25);
        \u0275\u0275element(42, "img", 26)(43, "img", 27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 28)(45, "div", 10)(46, "div", 29)(47, "div", 30);
        \u0275\u0275element(48, "i", 31);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "div", 32)(50, "h4");
        \u0275\u0275text(51, "Verify your email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "p", 33);
        \u0275\u0275text(53, "Please enter the 4 digit code sent to ");
        \u0275\u0275elementStart(54, "span", 34);
        \u0275\u0275text(55, "example@abc.com");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "form");
        \u0275\u0275element(57, "ng-otp-input", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 36)(59, "a", 37);
        \u0275\u0275text(60, "Confirm");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(61, "div", 38)(62, "p", 39);
        \u0275\u0275text(63);
        \u0275\u0275element(64, "i", 40);
        \u0275\u0275text(65, " by Themesbrand");
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275property("config", ctx.slideConfig);
        \u0275\u0275advance(40);
        \u0275\u0275property("config", ctx.config);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("\xA9 ", ctx.year, " Skote. Crafted with ");
      }
    }, dependencies: [NgOtpInputModule, NgOtpInputComponent, SlickCarouselModule, SlickCarouselComponent, SlickItemDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Steptwoverification2Component, [{
    type: Component,
    args: [{ selector: "app-steptwoverification2", imports: [NgOtpInputModule, SlickCarouselModule], template: `<div class="container-fluid p-0">\r
    <div class="row g-0">\r
\r
        <div class="col-xl-9">\r
            <div class="auth-full-bg pt-lg-5 p-4">\r
                <div class="w-100">\r
                    <div class="bg-overlay"></div>\r
                    <div class="d-flex h-100 flex-column">\r
\r
                        <div class="p-4 mt-auto">\r
                            <div class="row justify-content-center">\r
                                <div class="col-lg-7">\r
                                    <div class="text-center">\r
\r
                                        <h4 class="mb-3"><i\r
                                                class="bx bxs-quote-alt-left text-primary h1 align-middle me-3"></i><span\r
                                                class="text-primary">5k</span>+ Satisfied clients</h4>\r
\r
                                        <div dir="ltr">\r
                                            <ngx-slick-carousel dir="ltr" class="owl-theme auth-review-carousel"\r
                                                [config]="slideConfig">\r
                                                <div class="item" ngxSlickItem>\r
                                                    <div class="py-3">\r
                                                        <p class="font-size-16 mb-4">" Fantastic theme with a\r
                                                            ton of\r
                                                            options. If you just want the HTML to integrate with\r
                                                            your project, then this is the package. You can find\r
                                                            the\r
                                                            files in the 'dist' folder...no need to install git\r
                                                            and\r
                                                            all the other stuff the documentation talks about. "\r
                                                        </p>\r
\r
                                                        <div>\r
                                                            <h4 class="font-size-16 text-primary">Abs1981</h4>\r
                                                            <p class="font-size-14 mb-0">- Skote User</p>\r
                                                        </div>\r
                                                    </div>\r
                                                </div>\r
                                                <div class="item" ngxSlickItem>\r
                                                    <div class="py-3">\r
                                                        <p class="font-size-16 mb-4">" If Every Vendor on Envato\r
                                                            are\r
                                                            as supportive as Themesbrand, Development with be a\r
                                                            nice\r
                                                            experience. You guys are Wonderful. Keep us the good\r
                                                            work. "</p>\r
\r
                                                        <div>\r
                                                            <h4 class="font-size-16 text-primary">nezerious</h4>\r
                                                            <p class="font-size-14 mb-0">- Skote User</p>\r
                                                        </div>\r
                                                    </div>\r
                                                </div>\r
                                            </ngx-slick-carousel>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <!-- end col -->\r
\r
        <div class="col-xl-3">\r
            <div class="auth-full-page-content p-md-5 p-4">\r
                <div class="w-100">\r
\r
                    <div class="d-flex flex-column h-100">\r
                        <div class="mb-4 mb-md-5">\r
                            <a routerLink="/" class="d-block auth-logo">\r
                                <img src="assets/logo.png" alt="" height="18" class="auth-logo-dark">\r
                                <img src="assets/images/logo-light.png" alt="" height="18" class="auth-logo-light">\r
                            </a>\r
                        </div>\r
                        <div class="my-auto">\r
                            <div class="text-center">\r
\r
                                <div class="avatar-md mx-auto">\r
                                    <div class="avatar-title rounded-circle bg-light">\r
                                        <i class="bx bxs-envelope h1 mb-0 text-primary"></i>\r
                                    </div>\r
                                </div>\r
                                <div class="p-2 mt-4 full-step">\r
                                    <h4>Verify your email</h4>\r
                                    <p class="mb-5">Please enter the 4 digit code sent to <span\r
                                            class="fw-semibold">example&#64;abc.com</span></p>\r
                                    <form>\r
                                        <ng-otp-input [config]="config"></ng-otp-input>\r
                                    </form>\r
                                    <div class="mt-4">\r
                                        <a routerLink="/" class="btn btn-success w-md">Confirm</a>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <div class="mt-4 mt-md-5 text-center">\r
                            <p class="mb-0">\xA9 {{year}} Skote. Crafted with <i class="mdi mdi-heart text-danger"></i>\r
                                by Themesbrand</p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <!-- end col -->\r
    </div>\r
    <!-- end row -->\r
</div>\r
<!-- end container-fluid -->\r
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Steptwoverification2Component, { className: "Steptwoverification2Component", filePath: "src/app/extrapages/steptwoverification2/steptwoverification2.component.ts", lineNumber: 11 });
})();

// src/app/extrapages/comingsoon/comingsoon.component.ts
var ComingsoonComponent = class _ComingsoonComponent {
  constructor() {
  }
  ngOnInit() {
    this._trialEndsAt = "2026-12-31";
    interval(1e3).pipe(map((x) => {
      this._diff = Date.parse(this._trialEndsAt) - Date.parse((/* @__PURE__ */ new Date()).toString());
    })).subscribe((x) => {
      this._days = this.getDays(this._diff);
      this._hours = this.getHours(this._diff);
      this._minutes = this.getMinutes(this._diff);
      this._seconds = this.getSeconds(this._diff);
    });
  }
  getDays(t) {
    return Math.floor(t / (1e3 * 60 * 60 * 24));
  }
  getHours(t) {
    return Math.floor(t / (1e3 * 60 * 60) % 24);
  }
  getMinutes(t) {
    return Math.floor(t / 1e3 / 60 % 60);
  }
  getSeconds(t) {
    return Math.floor(t / 1e3 % 60);
  }
  static {
    this.\u0275fac = function ComingsoonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ComingsoonComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComingsoonComponent, selectors: [["app-comingsoon"]], decls: 38, vars: 4, consts: [[1, "home-btn", "d-none", "d-sm-block"], ["routerLink", "/", 1, "text-white"], [1, "fas", "fa-home", "h2"], [1, "my-5", "pt-sm-5"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/logo.png", "alt", "", "height", "20", 1, "auth-logo-dark", "mx-auto"], ["src", "assets/images/logo-light.png", "alt", "", "height", "20", 1, "auth-logo-light", "mx-auto"], [1, "row", "justify-content-center", "mt-5"], [1, "col-sm-4"], [1, "maintenance-img"], ["src", "assets/images/coming-soon.svg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], [1, "mt-5"], [1, "text-muted"], [1, "col-md-8"], ["inputDate", "December 31, 2026", 1, "counter-number", "ico-countdown"], [1, "coming-box"]], template: function ComingsoonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275element(2, "i", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "a", 8);
        \u0275\u0275element(9, "img", 9)(10, "img", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 11)(12, "div", 12)(13, "div", 13);
        \u0275\u0275element(14, "img", 14);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "h4", 15);
        \u0275\u0275text(16, "Let's get started with Skote");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p", 16);
        \u0275\u0275text(18, "It will be as simple as Occidental in fact it will be Occidental.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 11)(20, "div", 17)(21, "div", 18)(22, "div", 19);
        \u0275\u0275text(23);
        \u0275\u0275elementStart(24, "span");
        \u0275\u0275text(25, "Days");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 19);
        \u0275\u0275text(27);
        \u0275\u0275elementStart(28, "span");
        \u0275\u0275text(29, "Hours");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 19);
        \u0275\u0275text(31);
        \u0275\u0275elementStart(32, "span");
        \u0275\u0275text(33, "Minutes");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 19);
        \u0275\u0275text(35);
        \u0275\u0275elementStart(36, "span");
        \u0275\u0275text(37, "Seconds");
        \u0275\u0275elementEnd()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx._days);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx._hours);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx._minutes);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx._seconds);
      }
    }, dependencies: [RouterModule, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComingsoonComponent, [{
    type: Component,
    args: [{ selector: "app-comingsoon", imports: [RouterModule], template: `<div class="home-btn d-none d-sm-block">\r
    <a routerLink="/" class="text-white"><i class="fas fa-home h2"></i></a>\r
</div>\r
\r
<div class="my-5 pt-sm-5">\r
    <div class="container">\r
        <div class="row">\r
            <div class="col-lg-12">\r
                <div class="text-center">\r
                    <a routerLink="/" class="d-block auth-logo">\r
                        <img src="assets/logo.png" alt="" height="20" class="auth-logo-dark mx-auto">\r
                        <img src="assets/images/logo-light.png" alt="" height="20" class="auth-logo-light mx-auto">\r
                    </a>\r
                    <div class="row justify-content-center mt-5">\r
                        <div class="col-sm-4">\r
                            <div class="maintenance-img">\r
                                <img src="assets/images/coming-soon.svg" alt="" class="img-fluid mx-auto d-block">\r
                            </div>\r
                        </div>\r
                    </div>\r
                    <h4 class="mt-5">Let's get started with Skote</h4>\r
                    <p class="text-muted">It will be as simple as Occidental in fact it will be Occidental.</p>\r
\r
                    <div class="row justify-content-center mt-5">\r
                        <div class="col-md-8">\r
                            <div inputDate="December 31, 2026" class="counter-number ico-countdown">\r
                                <div class="coming-box">{{_days}}<span>Days</span>\r
                                </div>\r
                                <div class="coming-box">{{_hours}}<span>Hours</span>\r
                                </div>\r
                                <div class="coming-box">{{_minutes}}<span>Minutes</span>\r
                                </div>\r
                                <div class="coming-box">{{_seconds}}<span>Seconds</span>\r
                                </div>\r
                            </div>\r
                        </div> <!-- end col-->\r
                    </div> <!-- end row-->\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComingsoonComponent, { className: "ComingsoonComponent", filePath: "src/app/extrapages/comingsoon/comingsoon.component.ts", lineNumber: 16 });
})();

// src/app/extrapages/extrapages-routing.module.ts
var routes = [
  {
    path: "maintenance",
    component: MaintenanceComponent
  },
  {
    path: "coming-soon",
    component: ComingsoonComponent
  },
  {
    path: "404",
    component: Page404Component
  },
  {
    path: "500",
    component: Page500Component
  },
  {
    path: "login-2",
    component: Login2Component
  },
  {
    path: "lock-screen-1",
    component: LockscreenComponent
  },
  {
    path: "lock-screen-2",
    component: Lockscreen2Component
  },
  {
    path: "confirm-mail",
    component: ConfirmmailComponent
  },
  {
    path: "confirm-mail-2",
    component: Confirmmail2Component
  },
  {
    path: "email-verification",
    component: VerificationComponent
  },
  {
    path: "email-verification-2",
    component: Verification2Component
  },
  {
    path: "two-step-verification",
    component: SteptwoverificationComponent
  },
  {
    path: "two-step-verification-2",
    component: Steptwoverification2Component
  }
];
var ExtrapagesRoutingModule = class _ExtrapagesRoutingModule {
  static {
    this.\u0275fac = function ExtrapagesRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExtrapagesRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ExtrapagesRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExtrapagesRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/extrapages/extrapages.module.ts
var ExtrapagesModule = class _ExtrapagesModule {
  static {
    this.\u0275fac = function ExtrapagesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExtrapagesModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ExtrapagesModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [ExtrapagesRoutingModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExtrapagesModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        ExtrapagesRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  ExtrapagesModule
};
//# sourceMappingURL=extrapages.module-PYLJAM23.js.map
