import {
  AuthenticationService,
  AuthfakeauthenticationService,
  login
} from "./chunk-IDKNDILD.js";
import {
  SlickCarouselComponent,
  SlickCarouselModule,
  SlickItemDirective
} from "./chunk-LJC4I3OA.js";
import {
  Store
} from "./chunk-S2XUSEFK.js";
import {
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  ɵNgNoValidate
} from "./chunk-ICQKGMTO.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  NgClass,
  Router,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-BM6E27KQ.js";

// src/app/account/auth/login2/login2.component.ts
var _c0 = (a0) => ({ "is-invalid": a0 });
function Login2Component_Conditional_56_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function Login2Component_Conditional_56_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Email must be a valid email address ");
    \u0275\u0275elementEnd();
  }
}
function Login2Component_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275conditionalCreate(1, Login2Component_Conditional_56_Conditional_1_Template, 2, 0, "div");
    \u0275\u0275conditionalCreate(2, Login2Component_Conditional_56_Conditional_2_Template, 2, 0, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.f.email.errors.required ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.f.email.errors.email ? 2 : -1);
  }
}
function Login2Component_Conditional_67_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function Login2Component_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275conditionalCreate(1, Login2Component_Conditional_67_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.f.password.errors.required ? 1 : -1);
  }
}
var Login2Component = class _Login2Component {
  constructor(formBuilder, route, router, authenticationService, authFackservice, store) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.authenticationService = authenticationService;
    this.authFackservice = authFackservice;
    this.store = store;
    this.submitted = false;
    this.error = "";
    this.year = (/* @__PURE__ */ new Date()).getFullYear();
    this.slideConfig = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    };
  }
  ngOnInit() {
    document.body.classList.add("auth-body-bg");
    this.loginForm = this.formBuilder.group({
      email: ["admin@themesbrand.com", [Validators.required, Validators.email]],
      password: ["123456", [Validators.required]]
    });
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }
  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;
    this.submitted = true;
    const email = this.f["email"].value;
    const password = this.f["password"].value;
    this.store.dispatch(login({ email, password }));
  }
  static {
    this.\u0275fac = function Login2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Login2Component)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthenticationService), \u0275\u0275directiveInject(AuthfakeauthenticationService), \u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Login2Component, selectors: [["app-login2"]], decls: 98, vars: 11, consts: [[1, "container-fluid", "p-0"], [1, "row", "g-0"], [1, "col-xl-9"], [1, "auth-full-bg", "pt-lg-5", "p-4"], [1, "w-100"], [1, "bg-overlay"], [1, "d-flex", "h-100", "flex-column"], [1, "p-4", "mt-auto"], [1, "row", "justify-content-center"], [1, "col-lg-7"], [1, "text-center"], [1, "mb-3"], [1, "bx", "bxs-quote-alt-left", "text-primary", "h1", "align-middle", "me-3"], [1, "text-primary"], ["dir", "ltr"], ["dir", "ltr", 1, "owl-theme", "auth-review-carousel", 3, "config"], ["ngxSlickItem", "", 1, "item"], [1, "py-3"], [1, "font-size-16", "mb-4"], [1, "font-size-16", "text-primary"], [1, "font-size-14", "mb-0"], [1, "col-xl-3"], [1, "auth-full-page-content", "p-md-5", "p-4"], [1, "d-flex", "flex-column", "h-100"], [1, "mb-4", "mb-md-5"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/logo.png", "alt", "Back & White", "height", "18", 1, "auth-logo-dark"], ["src", "assets/logo.png", "alt", "Back & White", "height", "18", 1, "auth-logo-light"], [1, "my-auto"], [1, "text-muted"], [1, "mt-4"], [3, "ngSubmit", "formGroup"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Enter email", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], [1, "float-end"], ["routerLink", "/auth/recoverpwd-2", 1, "text-muted"], ["for", "userpassword"], [1, "input-group", "auth-pass-inputgroup"], ["type", "password", "formControlName", "password", "placeholder", "Enter password", "aria-label", "Password", "aria-describedby", "password-addon", 1, "form-control", 3, "ngClass"], ["type", "button", "id", "password-addon", 1, "btn", "btn-light"], [1, "mdi", "mdi-eye-outline"], [1, "form-check"], ["type", "checkbox", "id", "remember-check", 1, "form-check-input"], ["for", "remember-check", 1, "form-check-label"], [1, "mt-3", "d-grid"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], [1, "mt-4", "text-center"], [1, "font-size-14", "mb-3"], [1, "list-inline"], [1, "list-inline-item"], ["href", "javascript::void()", 1, "social-list-item", "bg-primary", "text-white", "border-primary"], [1, "mdi", "mdi-facebook"], ["href", "javascript::void()", 1, "social-list-item", "bg-info", "text-white", "border-info"], [1, "mdi", "mdi-twitter"], ["href", "javascript::void()", 1, "social-list-item", "bg-danger", "text-white", "border-danger"], [1, "mdi", "mdi-google"], [1, "mt-5", "text-center"], ["routerLink", "/auth/signup-2", 1, "fw-medium", "text-primary"], [1, "mt-4", "mt-md-5", "text-center"], [1, "mb-0"], [1, "mdi", "mdi-heart", "text-danger"]], template: function Login2Component_Template(rf, ctx) {
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
        \u0275\u0275text(26, "- Back & White User");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(27, "div", 16)(28, "div", 17)(29, "p", 18);
        \u0275\u0275text(30, '" If Every Vendor on Envato are as supportive as Themesbrand, Development with be a nice experience. You guys are Wonderful. Keep us the good work. "');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div")(32, "h4", 19);
        \u0275\u0275text(33, "nezerious");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "p", 20);
        \u0275\u0275text(35, "- Back & White User");
        \u0275\u0275elementEnd()()()()()()()()()()()()()();
        \u0275\u0275elementStart(36, "div", 21)(37, "div", 22)(38, "div", 4)(39, "div", 23)(40, "div", 24)(41, "a", 25);
        \u0275\u0275element(42, "img", 26)(43, "img", 27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 28)(45, "div")(46, "h5", 13);
        \u0275\u0275text(47, "Welcome Back !");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "p", 29);
        \u0275\u0275text(49, "Sign in to continue to Back & White.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 30)(51, "form", 31);
        \u0275\u0275listener("ngSubmit", function Login2Component_Template_form_ngSubmit_51_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(52, "div", 11)(53, "label", 32);
        \u0275\u0275text(54, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(55, "input", 33);
        \u0275\u0275conditionalCreate(56, Login2Component_Conditional_56_Template, 3, 2, "div", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "div", 11)(58, "div", 35)(59, "a", 36);
        \u0275\u0275text(60, "Forgot password?");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "label", 37);
        \u0275\u0275text(62, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div", 38);
        \u0275\u0275element(64, "input", 39);
        \u0275\u0275elementStart(65, "button", 40);
        \u0275\u0275element(66, "i", 41);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(67, Login2Component_Conditional_67_Template, 2, 1, "div", 34);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "div", 42);
        \u0275\u0275element(69, "input", 43);
        \u0275\u0275elementStart(70, "label", 44);
        \u0275\u0275text(71, " Remember me ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "div", 45)(73, "button", 46);
        \u0275\u0275text(74, "Log In");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(75, "div", 47)(76, "h5", 48);
        \u0275\u0275text(77, "Sign in with");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "ul", 49)(79, "li", 50)(80, "a", 51);
        \u0275\u0275element(81, "i", 52);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(82, "li", 50)(83, "a", 53);
        \u0275\u0275element(84, "i", 54);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(85, "li", 50)(86, "a", 55);
        \u0275\u0275element(87, "i", 56);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(88, "div", 57)(89, "p");
        \u0275\u0275text(90, "Don't have an account ? ");
        \u0275\u0275elementStart(91, "a", 58);
        \u0275\u0275text(92, " Signup now ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(93, "div", 59)(94, "p", 60);
        \u0275\u0275text(95);
        \u0275\u0275element(96, "i", 61);
        \u0275\u0275text(97, " by Themesbrand");
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275property("config", ctx.slideConfig);
        \u0275\u0275advance(34);
        \u0275\u0275property("formGroup", ctx.loginForm);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c0, ctx.submitted && ctx.f.email.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submitted && ctx.f.password.errors ? 56 : -1);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c0, ctx.submitted && ctx.f.password.errors));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.submitted && ctx.f.password.errors ? 67 : -1);
        \u0275\u0275advance(28);
        \u0275\u0275textInterpolate1("\xA9 ", ctx.year, " Back & White. Crafted with ");
      }
    }, dependencies: [CommonModule, NgClass, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, SlickCarouselModule, SlickCarouselComponent, SlickItemDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Login2Component, [{
    type: Component,
    args: [{ selector: "app-login2", imports: [CommonModule, FormsModule, ReactiveFormsModule, SlickCarouselModule], template: `<div class="container-fluid p-0">\r
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
                                                            <p class="font-size-14 mb-0">- Back & White User</p>\r
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
                                                            <p class="font-size-14 mb-0">- Back & White User</p>\r
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
                                <img src="assets/logo.png" alt="Back & White" height="18" class="auth-logo-dark">\r
                                <img src="assets/logo.png" alt="Back & White" height="18" class="auth-logo-light">\r
                            </a>\r
                        </div>\r
                        <div class="my-auto">\r
\r
                            <div>\r
                                <h5 class="text-primary">Welcome Back !</h5>\r
                                <p class="text-muted">Sign in to continue to Back & White.</p>\r
                            </div>\r
\r
                            <div class="mt-4">\r
                                <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">\r
\r
                                    <div class="mb-3">\r
                                        <label for="email">Email</label>\r
                                        <input type="email" class="form-control" id="email" formControlName="email"\r
                                            [ngClass]="{ 'is-invalid': submitted && f.email.errors }"\r
                                            placeholder="Enter email">\r
                                        @if(submitted && f.password.errors){\r
                                        <div class="invalid-feedback">\r
                                            @if(f.email.errors.required){\r
                                            <div>Email is required</div>\r
                                            }\r
                                            @if(f.email.errors.email){\r
                                            <div>Email must be a valid email address\r
                                            </div>}\r
                                        </div>}\r
                                    </div>\r
\r
                                    <div class="mb-3">\r
                                        <div class="float-end">\r
                                            <a routerLink="/auth/recoverpwd-2" class="text-muted">Forgot\r
                                                password?</a>\r
                                        </div>\r
                                        <label for="userpassword">Password</label>\r
                                        <div class="input-group auth-pass-inputgroup">\r
                                            <input type="password" class="form-control" formControlName="password"\r
                                                [ngClass]="{ 'is-invalid': submitted && f.password.errors }"\r
                                                placeholder="Enter password" aria-label="Password"\r
                                                aria-describedby="password-addon">\r
                                            <button class="btn btn-light " type="button" id="password-addon"><i\r
                                                    class="mdi mdi-eye-outline"></i></button>\r
                                            @if(submitted && f.password.errors){\r
                                            <div class="invalid-feedback">\r
                                                @if(f.password.errors.required){\r
                                                <span>Password is required</span>\r
                                                }\r
                                            </div>}\r
                                        </div>\r
                                    </div>\r
\r
                                    <div class="form-check">\r
                                        <input class="form-check-input" type="checkbox" id="remember-check">\r
                                        <label class="form-check-label" for="remember-check">\r
                                            Remember me\r
                                        </label>\r
                                    </div>\r
\r
                                    <div class="mt-3 d-grid">\r
                                        <button class="btn btn-primary btn-block" type="submit">Log In</button>\r
                                    </div>\r
\r
\r
                                    <div class="mt-4 text-center">\r
                                        <h5 class="font-size-14 mb-3">Sign in with</h5>\r
\r
                                        <ul class="list-inline">\r
                                            <li class="list-inline-item">\r
                                                <a href="javascript::void()"\r
                                                    class="social-list-item bg-primary text-white border-primary">\r
                                                    <i class="mdi mdi-facebook"></i>\r
                                                </a>\r
                                            </li>\r
                                            <li class="list-inline-item">\r
                                                <a href="javascript::void()"\r
                                                    class="social-list-item bg-info text-white border-info">\r
                                                    <i class="mdi mdi-twitter"></i>\r
                                                </a>\r
                                            </li>\r
                                            <li class="list-inline-item">\r
                                                <a href="javascript::void()"\r
                                                    class="social-list-item bg-danger text-white border-danger">\r
                                                    <i class="mdi mdi-google"></i>\r
                                                </a>\r
                                            </li>\r
                                        </ul>\r
                                    </div>\r
\r
                                </form>\r
                                <div class="mt-5 text-center">\r
                                    <p>Don't have an account ? <a routerLink="/auth/signup-2"\r
                                            class="fw-medium text-primary"> Signup now </a> </p>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <div class="mt-4 mt-md-5 text-center">\r
                            <p class="mb-0">\xA9\r
                                {{year}} Back & White. Crafted with <i class="mdi mdi-heart text-danger"></i> by\r
                                Themesbrand</p>\r
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
  }], () => [{ type: UntypedFormBuilder }, { type: ActivatedRoute }, { type: Router }, { type: AuthenticationService }, { type: AuthfakeauthenticationService }, { type: Store }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Login2Component, { className: "Login2Component", filePath: "src/app/account/auth/login2/login2.component.ts", lineNumber: 20 });
})();

export {
  Login2Component
};
//# sourceMappingURL=chunk-4YIZOYM6.js.map
