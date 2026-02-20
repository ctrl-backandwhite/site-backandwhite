import {
  Login2Component
} from "./chunk-4YIZOYM6.js";
import {
  AlertComponent,
  AlertModule
} from "./chunk-RPVCMMCJ.js";
import {
  UserProfileService
} from "./chunk-VFGAZVNH.js";
import {
  AuthenticationService,
  AuthfakeauthenticationService,
  Register,
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
  NgModule,
  Router,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-BM6E27KQ.js";

// src/app/account/auth/login/login.component.ts
var _c0 = (a0) => ({ "is-invalid": a0 });
var _c1 = (a0, a1) => ({ "mdi-eye-off-outline": a0, "mdi-eye-outline": a1 });
function LoginComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "alert", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("dismissible", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function LoginComponent_Conditional_28_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_28_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Email must be a valid email address");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275conditionalCreate(1, LoginComponent_Conditional_28_Conditional_1_Template, 2, 0, "div");
    \u0275\u0275conditionalCreate(2, LoginComponent_Conditional_28_Conditional_2_Template, 2, 0, "div");
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
function LoginComponent_Conditional_36_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275conditionalCreate(1, LoginComponent_Conditional_36_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.f.password.errors.required ? 1 : -1);
  }
}
var LoginComponent = class _LoginComponent {
  // tslint:disable-next-line: max-line-length
  constructor(formBuilder, route, router, authenticationService, store, authFackservice) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.authenticationService = authenticationService;
    this.store = store;
    this.authFackservice = authFackservice;
    this.submitted = false;
    this.error = "";
    this.year = (/* @__PURE__ */ new Date()).getFullYear();
  }
  ngOnInit() {
    if (localStorage.getItem("currentUser")) {
      this.router.navigate(["/"]);
    }
    this.loginForm = this.formBuilder.group({
      email: ["admin@themesbrand.com", [Validators.required, Validators.email]],
      password: ["123456", [Validators.required]]
    });
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
    const email = this.f["email"].value;
    const password = this.f["password"].value;
    this.store.dispatch(login({ email, password }));
  }
  /**
  * Password Hide/Show
  */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthenticationService), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(AuthfakeauthenticationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 74, vars: 16, consts: [[1, "account-pages", "my-5", "pt-sm-5"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card", "overflow-hidden"], [1, "bg-primary-subtle"], [1, "row"], [1, "col-7"], [1, "text-primary", "p-4"], [1, "text-primary"], [1, "col-5", "align-self-end"], ["src", "assets/images/profile-img.png", "alt", "", 1, "img-fluid"], [1, "card-body", "pt-0"], ["routerLink", "/"], [1, "avatar-md", "profile-user-wid", "mb-4"], [1, "avatar-title", "rounded-circle", "bg-light"], ["src", "assets/logo.png", "alt", "Back & White", "height", "34", 1, "rounded-circle"], [1, "p-2"], [1, "form-horizontal", 3, "ngSubmit", "formGroup"], ["type", "danger", 3, "dismissible"], [1, "mb-3"], ["for", "email"], ["type", "email", "formControlName", "email", "id", "email", "placeholder", "Email", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], ["for", "password"], [1, "input-group", "auth-pass-inputgroup"], ["formControlName", "password", "placeholder", "Enter password", 1, "form-control", 3, "type", "ngClass"], ["type", "button", "id", "password-addon", 1, "btn", "btn-light", "ms-0"], [1, "mdi", "mdi-eye-outline", 3, "click", "ngClass"], [1, "form-check"], ["type", "checkbox", "id", "remember-check", 1, "form-check-input"], ["for", "remember-check", 1, "form-check-label"], ["id", "elmLoader", 1, "text-center", "d-none"], ["role", "status", 1, "spinner-border", "text-primary", "avatar-sm"], [1, "visually-hidden"], [1, "mt-3", "d-grid"], ["type", "submit", 1, "btn", "btn-primary"], [1, "mt-4", "text-center"], [1, "font-size-14", "mb-3"], [1, "list-inline"], [1, "list-inline-item"], ["href", "javascript::void()", 1, "social-list-item", "bg-primary", "text-white", "border-primary"], [1, "mdi", "mdi-facebook"], ["href", "javascript::void()", 1, "social-list-item", "bg-info", "text-white", "border-info"], [1, "mdi", "mdi-twitter"], ["href", "javascript::void()", 1, "social-list-item", "bg-danger", "text-white", "border-danger"], [1, "mdi", "mdi-google"], ["routerLink", "/auth/reset-password", 1, "text-muted"], [1, "mdi", "mdi-lock", "mr-1"], [1, "mt-5", "text-center"], ["routerLink", "/auth/signup", 1, "fw-medium", "text-primary"], [1, "mdi", "mdi-heart", "text-danger"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h5", 9);
        \u0275\u0275text(10, "Welcome Back !");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p");
        \u0275\u0275text(12, "Sign in to continue to Back & White.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 10);
        \u0275\u0275element(14, "img", 11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 12)(16, "div")(17, "a", 13)(18, "div", 14)(19, "span", 15);
        \u0275\u0275element(20, "img", 16);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(21, "div", 17)(22, "form", 18);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_22_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275conditionalCreate(23, LoginComponent_Conditional_23_Template, 2, 2, "alert", 19);
        \u0275\u0275elementStart(24, "div", 20)(25, "label", 21);
        \u0275\u0275text(26, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(27, "input", 22);
        \u0275\u0275conditionalCreate(28, LoginComponent_Conditional_28_Template, 3, 2, "div", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 20)(30, "label", 24);
        \u0275\u0275text(31, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 25);
        \u0275\u0275element(33, "input", 26);
        \u0275\u0275elementStart(34, "button", 27)(35, "i", 28);
        \u0275\u0275listener("click", function LoginComponent_Template_i_click_35_listener() {
          return ctx.toggleFieldTextType();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(36, LoginComponent_Conditional_36_Template, 2, 1, "div", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 29);
        \u0275\u0275element(38, "input", 30);
        \u0275\u0275elementStart(39, "label", 31);
        \u0275\u0275text(40, " Remember me ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 32)(42, "div", 33)(43, "span", 34);
        \u0275\u0275text(44, "Loading...");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "div", 35)(46, "button", 36);
        \u0275\u0275text(47, "Log In");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 37)(49, "h5", 38);
        \u0275\u0275text(50, "Sign in with");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "ul", 39)(52, "li", 40)(53, "a", 41);
        \u0275\u0275element(54, "i", 42);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "li", 40)(56, "a", 43);
        \u0275\u0275element(57, "i", 44);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "li", 40)(59, "a", 45);
        \u0275\u0275element(60, "i", 46);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(61, "div", 37)(62, "a", 47);
        \u0275\u0275element(63, "i", 48);
        \u0275\u0275text(64, " Forgot your password?");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(65, "div", 49)(66, "p");
        \u0275\u0275text(67, "Don't have an account ? ");
        \u0275\u0275elementStart(68, "a", 50);
        \u0275\u0275text(69, " Signup now ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "p");
        \u0275\u0275text(71);
        \u0275\u0275element(72, "i", 51);
        \u0275\u0275text(73, " by Themesbrand");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(22);
        \u0275\u0275property("formGroup", ctx.loginForm);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.error ? 23 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c0, ctx.submitted && ctx.f.email.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submitted && ctx.f.email.errors ? 28 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("type", ctx.fieldTextType ? "text" : "password")("ngClass", \u0275\u0275pureFunction1(11, _c0, ctx.submitted && ctx.f.password.errors));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(13, _c1, !ctx.fieldTextType, ctx.fieldTextType));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submitted && ctx.f.password.errors ? 36 : -1);
        \u0275\u0275advance(35);
        \u0275\u0275textInterpolate1("\xA9 ", ctx.year, " Back & White. Crafted with ");
      }
    }, dependencies: [CommonModule, NgClass, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, AlertModule, AlertComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", imports: [CommonModule, FormsModule, ReactiveFormsModule, AlertModule], template: `<div class="account-pages my-5 pt-sm-5">\r
  <div class="container">\r
    <div class="row justify-content-center">\r
      <div class="col-md-8 col-lg-6 col-xl-5">\r
        <div class="card overflow-hidden">\r
          <div class="bg-primary-subtle">\r
            <div class="row">\r
              <div class="col-7">\r
                <div class="text-primary p-4">\r
                  <h5 class="text-primary">Welcome Back !</h5>\r
                  <p>Sign in to continue to Back & White.</p>\r
                </div>\r
              </div>\r
              <div class="col-5 align-self-end">\r
                <img src="assets/images/profile-img.png" alt="" class="img-fluid">\r
              </div>\r
            </div>\r
          </div>\r
          <div class="card-body pt-0">\r
            <div>\r
              <a routerLink="/">\r
                <div class="avatar-md profile-user-wid mb-4">\r
                  <span class="avatar-title rounded-circle bg-light">\r
                    <img src="assets/logo.png" alt="Back & White" class="rounded-circle" height="34">\r
                  </span>\r
                </div>\r
              </a>\r
            </div>\r
            <div class="p-2">\r
              <form class="form-horizontal" [formGroup]="loginForm" (ngSubmit)="onSubmit()">\r
                @if(error){\r
                <alert type="danger" [dismissible]="false">{{ error }}</alert>\r
                }\r
\r
                <div class="mb-3">\r
                  <label for="email">Email</label>\r
                  <input type="email" formControlName="email" class="form-control" id="email" placeholder="Email"\r
                    [ngClass]="{ 'is-invalid': submitted && f.email.errors }" />\r
                  @if(submitted && f.email.errors){\r
                  <div class="invalid-feedback">\r
                    @if(f.email.errors.required){\r
                    <div>Email is required</div>\r
                    }@if(f.email.errors.email){\r
                    <div>Email must be a valid email address</div>\r
                    }\r
                  </div>\r
                  }\r
                </div>\r
\r
                <div class="mb-3">\r
                  <label for="password">Password</label>\r
                  <div class="input-group auth-pass-inputgroup">\r
                    <input [type]="fieldTextType ? 'text' : 'password'" class="form-control" formControlName="password"\r
                      placeholder="Enter password" [ngClass]="{ 'is-invalid': submitted && f.password.errors }">\r
\r
                    <button class="btn btn-light ms-0" type="button" id="password-addon">\r
                      <i class="mdi mdi-eye-outline"\r
                        [ngClass]="{'mdi-eye-off-outline': !fieldTextType, 'mdi-eye-outline': fieldTextType}"\r
                        (click)="toggleFieldTextType()"></i></button>\r
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
                <div id="elmLoader" class="text-center d-none">\r
                  <div class="spinner-border text-primary avatar-sm" role="status">\r
                    <span class="visually-hidden">Loading...</span>\r
                  </div>\r
                </div>\r
\r
                <div class="mt-3 d-grid">\r
                  <button class="btn btn-primary" type="submit">Log In</button>\r
                </div>\r
                <div class="mt-4 text-center">\r
                  <h5 class="font-size-14 mb-3">Sign in with</h5>\r
\r
                  <ul class="list-inline">\r
                    <li class="list-inline-item">\r
                      <a href="javascript::void()" class="social-list-item bg-primary text-white border-primary">\r
                        <i class="mdi mdi-facebook"></i>\r
                      </a>\r
                    </li>\r
                    <li class="list-inline-item">\r
                      <a href="javascript::void()" class="social-list-item bg-info text-white border-info">\r
                        <i class="mdi mdi-twitter"></i>\r
                      </a>\r
                    </li>\r
                    <li class="list-inline-item">\r
                      <a href="javascript::void()" class="social-list-item bg-danger text-white border-danger">\r
                        <i class="mdi mdi-google"></i>\r
                      </a>\r
                    </li>\r
                  </ul>\r
                </div>\r
                <div class="mt-4 text-center">\r
                  <a routerLink="/auth/reset-password" class="text-muted"><i class="mdi mdi-lock mr-1"></i> Forgot\r
                    your\r
                    password?</a>\r
                </div>\r
              </form>\r
            </div>\r
\r
          </div>\r
        </div>\r
        <div class="mt-5 text-center">\r
          <p>Don't have an account ? <a routerLink="/auth/signup" class="fw-medium text-primary"> Signup\r
              now\r
            </a> </p>\r
          <p>\xA9 {{year}} Back & White. Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesbrand</p>\r
        </div>\r
\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- end container -->\r
</div>\r
<!-- end page -->\r
` }]
  }], () => [{ type: UntypedFormBuilder }, { type: ActivatedRoute }, { type: Router }, { type: AuthenticationService }, { type: Store }, { type: AuthfakeauthenticationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/account/auth/login/login.component.ts", lineNumber: 22 });
})();

// src/app/account/auth/signup/signup.component.ts
var _c02 = (a0) => ({ "is-invalid": a0 });
function SignupComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "alert", 19);
    \u0275\u0275text(1, "Registeration successfull. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("dismissible", false);
  }
}
function SignupComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "alert", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("dismissible", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function SignupComponent_Conditional_29_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Userame is required");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275conditionalCreate(1, SignupComponent_Conditional_29_Conditional_1_Template, 2, 0, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.f.username.errors.required ? 1 : -1);
  }
}
function SignupComponent_Conditional_34_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_34_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Email must be a valid email address");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275conditionalCreate(1, SignupComponent_Conditional_34_Conditional_1_Template, 2, 0, "div");
    \u0275\u0275conditionalCreate(2, SignupComponent_Conditional_34_Conditional_2_Template, 2, 0, "div");
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
function SignupComponent_Conditional_39_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275conditionalCreate(1, SignupComponent_Conditional_39_Conditional_1_Template, 2, 0, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.f.password.errors.required ? 1 : -1);
  }
}
var SignupComponent = class _SignupComponent {
  // tslint:disable-next-line: max-line-length
  constructor(formBuilder, route, router, authenticationService, userService, store) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.authenticationService = authenticationService;
    this.userService = userService;
    this.store = store;
    this.submitted = false;
    this.error = "";
    this.successmsg = false;
    this.year = (/* @__PURE__ */ new Date()).getFullYear();
  }
  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.signupForm.controls;
  }
  /**
   * On submit form
   */
  onSubmit() {
    this.submitted = true;
    const email = this.f["email"].value;
    const name = this.f["username"].value;
    const password = this.f["password"].value;
    this.store.dispatch(Register({ email, username: name, password }));
  }
  static {
    this.\u0275fac = function SignupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignupComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthenticationService), \u0275\u0275directiveInject(UserProfileService), \u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupComponent, selectors: [["app-signup"]], decls: 70, vars: 16, consts: [[1, "account-pages", "my-5", "pt-sm-5"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card", "overflow-hidden"], [1, "bg-primary-subtle"], [1, "row"], [1, "col-7"], [1, "text-primary", "p-4"], [1, "text-primary"], [1, "col-5", "align-self-end"], ["src", "assets/images/profile-img.png", "alt", "", 1, "img-fluid"], [1, "card-body", "pt-0"], ["routerLink", "/"], [1, "avatar-md", "profile-user-wid", "mb-4"], [1, "avatar-title", "rounded-circle", "bg-light"], ["src", "assets/logo.png", "alt", "Back & White", "height", "34", 1, "rounded-circle"], [1, "p-2"], ["name", "signupForm", "novalidate", "", 1, "needs-validation", 3, "ngSubmit", "formGroup"], ["type", "success", 3, "dismissible"], ["type", "danger", 3, "dismissible"], [1, "mb-3"], ["for", "username", 1, "form-label"], ["type", "text", "formControlName", "username", "id", "username", "placeholder", "Enter username", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], ["for", "email", 1, "form-label"], ["type", "email", "formControlName", "email", "id", "email", "placeholder", "Email", 1, "form-control", 3, "ngClass"], ["for", "password", 1, "form-label"], ["type", "password", "formControlName", "password", "id", "password", "placeholder", "Password", 1, "form-control", 3, "ngClass"], [1, "mt-4", "d-grid"], ["type", "submit", 1, "btn", "btn-primary"], [1, "mt-4", "text-center"], [1, "font-size-14", "mb-3"], [1, "list-inline"], [1, "list-inline-item"], ["href", "javascript::void()", 1, "social-list-item", "bg-primary", "text-white", "border-primary"], [1, "mdi", "mdi-facebook"], ["href", "javascript::void()", 1, "social-list-item", "bg-info", "text-white", "border-info"], [1, "mdi", "mdi-twitter"], ["href", "javascript::void()", 1, "social-list-item", "bg-danger", "text-white", "border-danger"], [1, "mdi", "mdi-google"], [1, "mb-0"], ["href", "javascript: void(0);", 1, "text-primary"], [1, "mt-5", "text-center"], ["routerLink", "/auth/login", 1, "fw-medium", "text-primary"], [1, "mdi", "mdi-heart", "text-danger"]], template: function SignupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h5", 9);
        \u0275\u0275text(10, "Free Register");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p");
        \u0275\u0275text(12, "Get your free Back & White account now.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 10);
        \u0275\u0275element(14, "img", 11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 12)(16, "div")(17, "a", 13)(18, "div", 14)(19, "span", 15);
        \u0275\u0275element(20, "img", 16);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(21, "div", 17)(22, "form", 18);
        \u0275\u0275listener("ngSubmit", function SignupComponent_Template_form_ngSubmit_22_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275conditionalCreate(23, SignupComponent_Conditional_23_Template, 2, 1, "alert", 19);
        \u0275\u0275conditionalCreate(24, SignupComponent_Conditional_24_Template, 2, 2, "alert", 20);
        \u0275\u0275elementStart(25, "div", 21)(26, "label", 22);
        \u0275\u0275text(27, "Username");
        \u0275\u0275elementEnd();
        \u0275\u0275element(28, "input", 23);
        \u0275\u0275conditionalCreate(29, SignupComponent_Conditional_29_Template, 2, 1, "div", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 21)(31, "label", 25);
        \u0275\u0275text(32, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(33, "input", 26);
        \u0275\u0275conditionalCreate(34, SignupComponent_Conditional_34_Template, 3, 2, "div", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 21)(36, "label", 27);
        \u0275\u0275text(37, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(38, "input", 28);
        \u0275\u0275conditionalCreate(39, SignupComponent_Conditional_39_Template, 2, 1, "div", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 29)(41, "button", 30);
        \u0275\u0275text(42, "Register");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 31)(44, "h5", 32);
        \u0275\u0275text(45, "Sign in with");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "ul", 33)(47, "li", 34)(48, "a", 35);
        \u0275\u0275element(49, "i", 36);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "li", 34)(51, "a", 37);
        \u0275\u0275element(52, "i", 38);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "li", 34)(54, "a", 39);
        \u0275\u0275element(55, "i", 40);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(56, "div", 31)(57, "p", 41);
        \u0275\u0275text(58, "By registering you agree to the Back & White ");
        \u0275\u0275elementStart(59, "a", 42);
        \u0275\u0275text(60, "Terms of Use");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(61, "div", 43)(62, "p");
        \u0275\u0275text(63, "Already have an account ? ");
        \u0275\u0275elementStart(64, "a", 44);
        \u0275\u0275text(65, " Login");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "p");
        \u0275\u0275text(67);
        \u0275\u0275element(68, "i", 45);
        \u0275\u0275text(69, " by Themesbrand");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(22);
        \u0275\u0275property("formGroup", ctx.signupForm);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.successmsg ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.error ? 24 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c02, ctx.submitted && ctx.f.username.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submitted && ctx.f.username.errors ? 29 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c02, ctx.submitted && ctx.f.email.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submitted && ctx.f.email.errors ? 34 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c02, ctx.submitted && ctx.f.password.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submitted && ctx.f.password.errors ? 39 : -1);
        \u0275\u0275advance(28);
        \u0275\u0275textInterpolate1("\xA9 ", ctx.year, " Back & White. Crafted with ");
      }
    }, dependencies: [CommonModule, NgClass, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignupComponent, [{
    type: Component,
    args: [{ selector: "app-signup", imports: [CommonModule, FormsModule, ReactiveFormsModule], template: `<div class="account-pages my-5 pt-sm-5">\r
  <div class="container">\r
    <div class="row justify-content-center">\r
      <div class="col-md-8 col-lg-6 col-xl-5">\r
        <div class="card overflow-hidden">\r
          <div class="bg-primary-subtle">\r
            <div class="row">\r
              <div class="col-7">\r
                <div class="text-primary p-4">\r
                  <h5 class="text-primary">Free Register</h5>\r
                  <p>Get your free Back & White account now.</p>\r
                </div>\r
              </div>\r
              <div class="col-5 align-self-end">\r
                <img src="assets/images/profile-img.png" alt="" class="img-fluid">\r
              </div>\r
            </div>\r
          </div>\r
          <div class="card-body pt-0">\r
            <div>\r
              <a routerLink="/">\r
                <div class="avatar-md profile-user-wid mb-4">\r
                  <span class="avatar-title rounded-circle bg-light">\r
                    <img src="assets/logo.png" alt="Back & White" class="rounded-circle" height="34">\r
                  </span>\r
                </div>\r
              </a>\r
            </div>\r
            <div class="p-2">\r
\r
              <form class="needs-validation" name="signupForm" [formGroup]="signupForm" (ngSubmit)="onSubmit()"\r
                novalidate>\r
                @if(successmsg){\r
                <alert type="success" [dismissible]="false">Registeration successfull.\r
                </alert>\r
                }\r
                @if(error){\r
                <alert type="danger" [dismissible]="false">{{ error }}</alert>\r
                }\r
                <div class="mb-3">\r
                  <label for="username" class="form-label">Username</label>\r
\r
                  <input type="text" formControlName="username" class="form-control"\r
                    [ngClass]="{ 'is-invalid': submitted && f.username.errors }" id="username"\r
                    placeholder="Enter username" />\r
                  @if(submitted && f.username.errors){\r
                  <div class="invalid-feedback">\r
                    @if(f.username.errors.required){\r
                    <div>Userame is required</div>}\r
                  </div>}\r
                </div>\r
\r
                <div class="mb-3">\r
                  <label for="email" class="form-label">Email</label>\r
\r
                  <input type="email" formControlName="email" class="form-control"\r
                    [ngClass]="{ 'is-invalid': submitted && f.email.errors }" id="email" placeholder="Email" />\r
                  @if(submitted && f.email.errors){\r
                  <div class="invalid-feedback">\r
                    @if(f.email.errors.required){\r
                    <div>Email is required</div>}\r
                    @if(f.email.errors.email){\r
                    <div>Email must be a valid email address</div>}\r
                  </div>}\r
                </div>\r
\r
                <div class="mb-3">\r
                  <label for="password" class="form-label">Password</label>\r
\r
                  <input type="password" formControlName="password" class="form-control"\r
                    [ngClass]="{ 'is-invalid': submitted && f.password.errors }" id="password" placeholder="Password" />\r
                  @if(submitted && f.password.errors){\r
                  <div class="invalid-feedback">\r
                    @if(f.password.errors.required){\r
                    <div>Password is required</div>}\r
                  </div>}\r
                </div>\r
\r
                <div class="mt-4 d-grid">\r
                  <button class="btn btn-primary" type="submit">Register</button>\r
                </div>\r
                <div class="mt-4 text-center">\r
                  <h5 class="font-size-14 mb-3">Sign in with</h5>\r
\r
                  <ul class="list-inline">\r
                    <li class="list-inline-item">\r
                      <a href="javascript::void()" class="social-list-item bg-primary text-white border-primary">\r
                        <i class="mdi mdi-facebook"></i>\r
                      </a>\r
                    </li>\r
                    <li class="list-inline-item">\r
                      <a href="javascript::void()" class="social-list-item bg-info text-white border-info">\r
                        <i class="mdi mdi-twitter"></i>\r
                      </a>\r
                    </li>\r
                    <li class="list-inline-item">\r
                      <a href="javascript::void()" class="social-list-item bg-danger text-white border-danger">\r
                        <i class="mdi mdi-google"></i>\r
                      </a>\r
                    </li>\r
                  </ul>\r
                </div>\r
                <div class="mt-4 text-center">\r
                  <p class="mb-0">By registering you agree to the Back & White <a href="javascript: void(0);"\r
                      class="text-primary">Terms of\r
                      Use</a></p>\r
                </div>\r
              </form>\r
            </div>\r
          </div>\r
        </div>\r
        <!-- end card -->\r
\r
        <div class="mt-5 text-center">\r
          <p>Already have an account ? <a routerLink="/auth/login" class="fw-medium text-primary"> Login</a>\r
          </p>\r
          <p>\xA9 {{year}} Back & White. Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesbrand</p>\r
        </div>\r
      </div> <!-- end col -->\r
    </div>\r
    <!-- end row -->\r
  </div>\r
  <!-- end container -->\r
</div>\r
` }]
  }], () => [{ type: UntypedFormBuilder }, { type: ActivatedRoute }, { type: Router }, { type: AuthenticationService }, { type: UserProfileService }, { type: Store }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupComponent, { className: "SignupComponent", filePath: "src/app/account/auth/signup/signup.component.ts", lineNumber: 19 });
})();

// src/app/account/auth/passwordreset/passwordreset.component.ts
var _c03 = (a0) => ({ "is-invalid": a0 });
function PasswordresetComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "alert", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("dismissible", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function PasswordresetComponent_Conditional_30_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function PasswordresetComponent_Conditional_30_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Email must be a valid email address");
    \u0275\u0275elementEnd();
  }
}
function PasswordresetComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275conditionalCreate(1, PasswordresetComponent_Conditional_30_Conditional_1_Template, 2, 0, "div");
    \u0275\u0275conditionalCreate(2, PasswordresetComponent_Conditional_30_Conditional_2_Template, 2, 0, "div");
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
var PasswordresetComponent = class _PasswordresetComponent {
  // tslint:disable-next-line: max-line-length
  constructor(formBuilder, route, router, authenticationService) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.authenticationService = authenticationService;
    this.submitted = false;
    this.error = "";
    this.success = "";
    this.loading = false;
    this.year = (/* @__PURE__ */ new Date()).getFullYear();
  }
  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }
  ngAfterViewInit() {
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.resetForm.controls;
  }
  /**
   * On submit form
   */
  onSubmit() {
    this.success = "";
    this.submitted = true;
    if (this.resetForm.invalid) {
      return;
    }
    this.authenticationService.resetPassword(this.f.email.value).subscribe(() => {
      this.success = "Password reset email sent successfully";
    }, (error) => {
      this.error = error ? error : "";
    });
  }
  static {
    this.\u0275fac = function PasswordresetComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PasswordresetComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthenticationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PasswordresetComponent, selectors: [["app-passwordreset"]], decls: 43, vars: 7, consts: [[1, "account-pages", "my-5", "pt-sm-5"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card", "overflow-hidden"], [1, "bg-primary-subtle"], [1, "row"], [1, "col-7"], [1, "text-primary", "p-4"], [1, "text-primary"], [1, "col-5", "align-self-end"], ["src", "assets/images/profile-img.png", "alt", "", 1, "img-fluid"], [1, "card-body", "pt-0"], ["routerLink", "/"], [1, "avatar-md", "profile-user-wid", "mb-4"], [1, "avatar-title", "rounded-circle", "bg-light"], ["src", "assets/logo.png", "alt", "Back & White", "height", "34", 1, "rounded-circle"], [1, "p-2"], ["role", "alert", 1, "alert", "alert-success", "text-center", "mb-4"], ["name", "resetForm", "novalidate", "", 1, "needs-validation", 3, "ngSubmit", "formGroup"], ["type", "danger", 3, "dismissible"], [1, "mb-3"], ["for", "email"], ["type", "email", "formControlName", "email", "id", "email", "placeholder", "Enter email", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], [1, "text-end"], ["type", "submit", 1, "btn", "btn-primary", "w-md"], [1, "mt-5", "text-center"], ["routerLink", "/auth/login", 1, "fw-medium", "text-primary"], [1, "mdi", "mdi-heart", "text-danger"]], template: function PasswordresetComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h5", 9);
        \u0275\u0275text(10, " Reset Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p");
        \u0275\u0275text(12, "Reset Password with Back & White.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 10);
        \u0275\u0275element(14, "img", 11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 12)(16, "div")(17, "a", 13)(18, "div", 14)(19, "span", 15);
        \u0275\u0275element(20, "img", 16);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(21, "div", 17)(22, "div", 18);
        \u0275\u0275text(23, " Enter your Email and instructions will be sent to you! ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "form", 19);
        \u0275\u0275listener("ngSubmit", function PasswordresetComponent_Template_form_ngSubmit_24_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275conditionalCreate(25, PasswordresetComponent_Conditional_25_Template, 2, 2, "alert", 20);
        \u0275\u0275elementStart(26, "div", 21)(27, "label", 22);
        \u0275\u0275text(28, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(29, "input", 23);
        \u0275\u0275conditionalCreate(30, PasswordresetComponent_Conditional_30_Template, 3, 2, "div", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 25)(32, "button", 26);
        \u0275\u0275text(33, "Reset");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(34, "div", 27)(35, "p");
        \u0275\u0275text(36, "Remember It ? ");
        \u0275\u0275elementStart(37, "a", 28);
        \u0275\u0275text(38, " Sign In here");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "p");
        \u0275\u0275text(40);
        \u0275\u0275element(41, "i", 29);
        \u0275\u0275text(42, " by Themesbrand");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(24);
        \u0275\u0275property("formGroup", ctx.resetForm);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.error ? 25 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c03, ctx.submitted && ctx.f.email.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submitted && ctx.f.email.errors ? 30 : -1);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1("\xA9 ", ctx.year, " Back & White. Crafted with ");
      }
    }, dependencies: [CommonModule, NgClass, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PasswordresetComponent, [{
    type: Component,
    args: [{ selector: "app-passwordreset", imports: [CommonModule, FormsModule, ReactiveFormsModule], template: `<div class="account-pages my-5 pt-sm-5">\r
  <div class="container">\r
    <div class="row justify-content-center">\r
      <div class="col-md-8 col-lg-6 col-xl-5">\r
        <div class="card overflow-hidden">\r
          <div class="bg-primary-subtle">\r
            <div class="row">\r
              <div class="col-7">\r
                <div class="text-primary p-4">\r
                  <h5 class="text-primary"> Reset Password</h5>\r
                  <p>Reset Password with Back & White.</p>\r
                </div>\r
              </div>\r
              <div class="col-5 align-self-end">\r
                <img src="assets/images/profile-img.png" alt="" class="img-fluid">\r
              </div>\r
            </div>\r
          </div>\r
          <div class="card-body pt-0">\r
            <div>\r
              <a routerLink="/">\r
                <div class="avatar-md profile-user-wid mb-4">\r
                  <span class="avatar-title rounded-circle bg-light">\r
                    <img src="assets/logo.png" alt="Back & White" class="rounded-circle" height="34">\r
                  </span>\r
                </div>\r
              </a>\r
            </div>\r
\r
            <div class="p-2">\r
              <div class="alert alert-success text-center mb-4" role="alert">\r
                Enter your Email and instructions will be sent to you!\r
              </div>\r
\r
              <form class="needs-validation" name="resetForm" [formGroup]="resetForm" (ngSubmit)="onSubmit()"\r
                novalidate>\r
                @if(error){\r
                <alert type="danger" [dismissible]="false">{{ error }}</alert>\r
                }\r
                <div class="mb-3">\r
                  <label for="email">Email</label>\r
\r
                  <input type="email" formControlName="email" class="form-control"\r
                    [ngClass]="{ 'is-invalid': submitted && f.email.errors }" id="email" placeholder="Enter email" />\r
                  @if(submitted && f.email.errors){\r
                  <div class="invalid-feedback">\r
                    @if(f.email.errors.required){\r
                    <div>Email is required</div>}\r
                    @if(f.email.errors.email){\r
                    <div>Email must be a valid email address</div>}\r
                  </div>}\r
                </div>\r
                <div class="text-end">\r
                  <button class="btn btn-primary w-md" type="submit">Reset</button>\r
                </div>\r
              </form>\r
            </div>\r
\r
          </div> <!-- end card-body-->\r
        </div>\r
        <!-- end card -->\r
        <div class="mt-5 text-center">\r
          <p>Remember It ? <a routerLink="/auth/login" class="fw-medium text-primary"> Sign In here</a> </p>\r
          <p>\xA9 {{year}} Back & White. Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesbrand</p>\r
        </div>\r
\r
      </div> <!-- end col -->\r
    </div>\r
    <!-- end row -->\r
  </div>\r
  <!-- end container -->\r
</div>\r
<!-- end page -->\r
` }]
  }], () => [{ type: UntypedFormBuilder }, { type: ActivatedRoute }, { type: Router }, { type: AuthenticationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PasswordresetComponent, { className: "PasswordresetComponent", filePath: "src/app/account/auth/passwordreset/passwordreset.component.ts", lineNumber: 18 });
})();

// src/app/account/auth/register2/register2.component.ts
var _c04 = (a0) => ({ "is-invalid": a0 });
function Register2Component_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "alert", 32);
    \u0275\u0275text(1, "Registeration successfull. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("dismissible", false);
  }
}
function Register2Component_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "alert", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("dismissible", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function Register2Component_Conditional_58_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Userame is required");
    \u0275\u0275elementEnd();
  }
}
function Register2Component_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275conditionalCreate(1, Register2Component_Conditional_58_Conditional_1_Template, 2, 0, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.f.username.errors.required ? 1 : -1);
  }
}
function Register2Component_Conditional_63_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function Register2Component_Conditional_63_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Email must be a valid email address");
    \u0275\u0275elementEnd();
  }
}
function Register2Component_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275conditionalCreate(1, Register2Component_Conditional_63_Conditional_1_Template, 2, 0, "div");
    \u0275\u0275conditionalCreate(2, Register2Component_Conditional_63_Conditional_2_Template, 2, 0, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.f.email.errors.required ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.f.email.errors.required ? 2 : -1);
  }
}
function Register2Component_Conditional_68_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function Register2Component_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275conditionalCreate(1, Register2Component_Conditional_68_Conditional_1_Template, 2, 0, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.f.password.errors.required ? 1 : -1);
  }
}
var Register2Component = class _Register2Component {
  constructor(formBuilder, route, router, authenticationService, userService, store) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.authenticationService = authenticationService;
    this.userService = userService;
    this.store = store;
    this.submitted = false;
    this.error = "";
    this.successmsg = false;
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
    this.signupForm = this.formBuilder.group({
      username: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.signupForm.controls;
  }
  /**
   * On submit form
   */
  onSubmit() {
    this.submitted = true;
    const email = this.f["email"].value;
    const name = this.f["name"].value;
    const password = this.f["password"].value;
    this.store.dispatch(Register({ email, username: name, password }));
  }
  static {
    this.\u0275fac = function Register2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Register2Component)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthenticationService), \u0275\u0275directiveInject(UserProfileService), \u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Register2Component, selectors: [["app-register2"]], decls: 100, vars: 17, consts: [[1, "container-fluid", "p-0"], [1, "row", "g-0"], [1, "col-xl-9"], [1, "auth-full-bg", "pt-lg-5", "p-4"], [1, "w-100"], [1, "bg-overlay"], [1, "d-flex", "h-100", "flex-column"], [1, "p-4", "mt-auto"], [1, "row", "justify-content-center"], [1, "col-lg-7"], [1, "text-center"], [1, "mb-3"], [1, "bx", "bxs-quote-alt-left", "text-primary", "h1", "align-middle", "me-3"], [1, "text-primary"], ["dir", "ltr"], ["dir", "ltr", 1, "owl-theme", "auth-review-carousel", 3, "config"], ["ngxSlickItem", "", 1, "item"], [1, "py-3"], [1, "font-size-16", "mb-4"], [1, "font-size-16", "text-primary"], [1, "font-size-14", "mb-0"], [1, "col-xl-3"], [1, "auth-full-page-content", "p-md-5", "p-4"], [1, "d-flex", "flex-column", "h-100"], [1, "mb-4", "mb-md-5"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/logo.png", "alt", "Back & White", "height", "18", 1, "auth-logo-dark"], ["src", "assets/logo.png", "alt", "Back & White", "height", "18", 1, "auth-logo-light"], [1, "my-auto"], [1, "text-muted"], [1, "mt-4"], [3, "ngSubmit", "formGroup"], ["type", "success", 3, "dismissible"], ["type", "danger", 3, "dismissible"], ["for", "username"], ["type", "text", "formControlName", "username", "id", "username", "placeholder", "Enter username", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], ["for", "useremail"], ["type", "email", "formControlName", "email", "id", "useremail", "placeholder", "Enter email", 1, "form-control", 3, "ngClass"], ["for", "userpassword"], ["type", "password", "formControlName", "password", "id", "userpassword", "placeholder", "Enter password", 1, "form-control", 3, "ngClass"], [1, "mb-0"], ["href", "javascript: void(0);", 1, "text-primary"], [1, "mt-4", "d-grid"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], [1, "mt-4", "text-center"], [1, "font-size-14", "mb-3"], [1, "list-inline"], [1, "list-inline-item"], ["href", "javascript::void()", 1, "social-list-item", "bg-primary", "text-white", "border-primary"], [1, "mdi", "mdi-facebook"], ["href", "javascript::void()", 1, "social-list-item", "bg-info", "text-white", "border-info"], [1, "mdi", "mdi-twitter"], ["href", "javascript::void()", 1, "social-list-item", "bg-danger", "text-white", "border-danger"], [1, "mdi", "mdi-google"], [1, "mt-5", "text-center"], ["routerLink", "/auth/login-2", 1, "fw-medium", "text-primary"], [1, "mt-4", "mt-md-5", "text-center"], [1, "mdi", "mdi-heart", "text-danger"]], template: function Register2Component_Template(rf, ctx) {
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
        \u0275\u0275text(47, "Register account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "p", 29);
        \u0275\u0275text(49, "Get your free Back & White account now.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 30)(51, "form", 31);
        \u0275\u0275listener("ngSubmit", function Register2Component_Template_form_ngSubmit_51_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275conditionalCreate(52, Register2Component_Conditional_52_Template, 2, 1, "alert", 32);
        \u0275\u0275conditionalCreate(53, Register2Component_Conditional_53_Template, 2, 2, "alert", 33);
        \u0275\u0275elementStart(54, "div", 11)(55, "label", 34);
        \u0275\u0275text(56, "Username");
        \u0275\u0275elementEnd();
        \u0275\u0275element(57, "input", 35);
        \u0275\u0275conditionalCreate(58, Register2Component_Conditional_58_Template, 2, 1, "div", 36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "div", 11)(60, "label", 37);
        \u0275\u0275text(61, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(62, "input", 38);
        \u0275\u0275conditionalCreate(63, Register2Component_Conditional_63_Template, 3, 2, "div", 36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "div", 11)(65, "label", 39);
        \u0275\u0275text(66, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(67, "input", 40);
        \u0275\u0275conditionalCreate(68, Register2Component_Conditional_68_Template, 2, 1, "div", 36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "div")(70, "p", 41);
        \u0275\u0275text(71, "By registering you agree to the Back & White ");
        \u0275\u0275elementStart(72, "a", 42);
        \u0275\u0275text(73, "Terms of Use");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(74, "div", 43)(75, "button", 44);
        \u0275\u0275text(76, "Register");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "div", 45)(78, "h5", 46);
        \u0275\u0275text(79, "Sign up using");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "ul", 47)(81, "li", 48)(82, "a", 49);
        \u0275\u0275element(83, "i", 50);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(84, "li", 48)(85, "a", 51);
        \u0275\u0275element(86, "i", 52);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(87, "li", 48)(88, "a", 53);
        \u0275\u0275element(89, "i", 54);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(90, "div", 55)(91, "p");
        \u0275\u0275text(92, "Already have an account ? ");
        \u0275\u0275elementStart(93, "a", 56);
        \u0275\u0275text(94, " Login");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(95, "div", 57)(96, "p", 41);
        \u0275\u0275text(97);
        \u0275\u0275element(98, "i", 58);
        \u0275\u0275text(99, " by Themesbrand");
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275property("config", ctx.slideConfig);
        \u0275\u0275advance(34);
        \u0275\u0275property("formGroup", ctx.signupForm);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.successmsg ? 52 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.error ? 53 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c04, ctx.submitted && ctx.f.username.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submitted && ctx.f.username.errors ? 58 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c04, ctx.submitted && ctx.f.email.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submitted && ctx.f.email.errors ? 63 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(15, _c04, ctx.submitted && ctx.f.password.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submitted && ctx.f.password.errors ? 68 : -1);
        \u0275\u0275advance(29);
        \u0275\u0275textInterpolate1("\xA9 ", ctx.year, " Back & White. Crafted with ");
      }
    }, dependencies: [CommonModule, NgClass, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, SlickCarouselModule, SlickCarouselComponent, SlickItemDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Register2Component, [{
    type: Component,
    args: [{ selector: "app-register2", imports: [CommonModule, FormsModule, ReactiveFormsModule, SlickCarouselModule], template: `<div class="container-fluid p-0">\r
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
                            <div>\r
                                <h5 class="text-primary">Register account</h5>\r
                                <p class="text-muted">Get your free Back & White account now.</p>\r
                            </div>\r
                            <div class="mt-4">\r
                                <form [formGroup]="signupForm" (ngSubmit)="onSubmit()">\r
                                    @if(successmsg){\r
                                    <alert type="success" [dismissible]="false">Registeration\r
                                        successfull.\r
                                    </alert>}\r
                                    @if(error){\r
                                    <alert type="danger" [dismissible]="false">{{ error }}</alert>\r
                                    }\r
                                    <div class="mb-3">\r
                                        <label for="username">Username</label>\r
                                        <input type="text" formControlName="username" class="form-control" id="username"\r
                                            [ngClass]="{ 'is-invalid': submitted && f.username.errors }"\r
                                            placeholder="Enter username">\r
                                        @if(submitted && f.username.errors){\r
                                        <div class="invalid-feedback">\r
                                            @if(f.username.errors.required){\r
                                            <div>Userame is required</div>}\r
                                        </div>}\r
                                    </div>\r
\r
                                    <div class="mb-3">\r
                                        <label for="useremail">Email</label>\r
                                        <input type="email" formControlName="email"\r
                                            [ngClass]="{ 'is-invalid': submitted && f.email.errors }"\r
                                            class="form-control" id="useremail" placeholder="Enter email">\r
                                        @if(submitted && f.email.errors){\r
                                        <div class="invalid-feedback">\r
                                            @if(f.email.errors.required){\r
                                            <div>Email is required</div>}\r
                                            @if(f.email.errors.required){\r
                                            <div>Email must be a valid email address</div>}\r
                                        </div>}\r
                                    </div>\r
\r
                                    <div class="mb-3">\r
                                        <label for="userpassword">Password</label>\r
                                        <input type="password" formControlName="password"\r
                                            [ngClass]="{ 'is-invalid': submitted && f.password.errors }"\r
                                            class="form-control" id="userpassword" placeholder="Enter password">\r
                                        @if(submitted && f.password.errors){\r
                                        <div class="invalid-feedback">\r
                                            @if(f.password.errors.required){\r
                                            <div>Password is required</div>}\r
                                        </div>}\r
                                    </div>\r
\r
                                    <div>\r
                                        <p class="mb-0">By registering you agree to the Back & White <a\r
                                                href="javascript: void(0);" class="text-primary">Terms of Use</a>\r
                                        </p>\r
                                    </div>\r
\r
                                    <div class="mt-4 d-grid">\r
                                        <button class="btn btn-primary btn-block" type="submit">Register</button>\r
                                    </div>\r
\r
                                    <div class="mt-4 text-center">\r
                                        <h5 class="font-size-14 mb-3">Sign up using</h5>\r
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
                                </form>\r
\r
                                <div class="mt-5 text-center">\r
                                    <p>Already have an account ? <a routerLink="/auth/login-2"\r
                                            class="fw-medium text-primary"> Login</a> </p>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <div class="mt-4 mt-md-5 text-center">\r
                            <p class="mb-0">\xA9 {{year}} Back & White. Crafted with <i\r
                                    class="mdi mdi-heart text-danger"></i>\r
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
  }], () => [{ type: UntypedFormBuilder }, { type: ActivatedRoute }, { type: Router }, { type: AuthenticationService }, { type: UserProfileService }, { type: Store }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Register2Component, { className: "Register2Component", filePath: "src/app/account/auth/register2/register2.component.ts", lineNumber: 20 });
})();

// src/app/account/auth/recoverpwd2/recoverpwd2.component.ts
var _c05 = (a0) => ({ "is-invalid": a0 });
function Recoverpwd2Component_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "alert", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("dismissible", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function Recoverpwd2Component_Conditional_60_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function Recoverpwd2Component_Conditional_60_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Email must be a valid email address");
    \u0275\u0275elementEnd();
  }
}
function Recoverpwd2Component_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275conditionalCreate(1, Recoverpwd2Component_Conditional_60_Conditional_1_Template, 2, 0, "div");
    \u0275\u0275conditionalCreate(2, Recoverpwd2Component_Conditional_60_Conditional_2_Template, 2, 0, "div");
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
var Recoverpwd2Component = class _Recoverpwd2Component {
  constructor(formBuilder, route, router, authenticationService) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.authenticationService = authenticationService;
    this.year = (/* @__PURE__ */ new Date()).getFullYear();
    this.submitted = false;
    this.error = "";
    this.success = "";
    this.loading = false;
    this.slideConfig = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    };
  }
  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.resetForm.controls;
  }
  /**
   * On submit form
   */
  onSubmit() {
    this.success = "";
    this.submitted = true;
    if (this.resetForm.invalid) {
      return;
    }
    this.authenticationService.resetPassword(this.f.email.value).subscribe(() => {
      this.success = "Password reset email sent successfully";
    }, (error) => {
      this.error = error ? error : "";
    });
  }
  static {
    this.\u0275fac = function Recoverpwd2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Recoverpwd2Component)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthenticationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Recoverpwd2Component, selectors: [["app-recoverpwd2"]], decls: 74, vars: 8, consts: [[1, "container-fluid", "p-0"], [1, "row", "g-0"], [1, "col-xl-9"], [1, "auth-full-bg", "pt-lg-5", "p-4"], [1, "w-100"], [1, "bg-overlay"], [1, "d-flex", "h-100", "flex-column"], [1, "p-4", "mt-auto"], [1, "row", "justify-content-center"], [1, "col-lg-7"], [1, "text-center"], [1, "mb-3"], [1, "bx", "bxs-quote-alt-left", "text-primary", "h1", "align-middle", "me-3"], [1, "text-primary"], ["dir", "ltr"], ["dir", "ltr", 1, "owl-theme", "auth-review-carousel", 3, "config"], ["ngxSlickItem", "", 1, "item"], [1, "py-3"], [1, "font-size-16", "mb-4"], [1, "font-size-16", "text-primary"], [1, "font-size-14", "mb-0"], [1, "col-xl-3"], [1, "auth-full-page-content", "p-md-5", "p-4"], [1, "d-flex", "flex-column", "h-100"], [1, "mb-4", "mb-md-5"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/logo.png", "alt", "Back & White", "height", "18", 1, "auth-logo-dark"], ["src", "assets/logo.png", "alt", "Back & White", "height", "18", 1, "auth-logo-light"], [1, "my-auto"], [1, "text-muted"], [1, "mt-4"], ["role", "alert", 1, "alert", "alert-success", "text-center", "mb-4"], [3, "ngSubmit", "formGroup"], ["type", "danger", 3, "dismissible"], ["for", "useremail"], ["type", "email", "formControlName", "email", "id", "useremail", "placeholder", "Enter email", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], [1, "text-end"], ["type", "submit", 1, "btn", "btn-primary", "w-md"], [1, "mt-5", "text-center"], ["routerLink", "/auth/login-2", 1, "fw-medium", "text-primary"], [1, "mt-4", "mt-md-5", "text-center"], [1, "mb-0"], [1, "mdi", "mdi-heart", "text-danger"]], template: function Recoverpwd2Component_Template(rf, ctx) {
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
        \u0275\u0275text(27, "- Back & White User");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(28, "div", 16)(29, "div", 17)(30, "p", 18);
        \u0275\u0275text(31, '" If Every Vendor on Envato are as supportive as Themesbrand, Development with be a nice experience. You guys are Wonderful. Keep us the good work. "');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div")(33, "h4", 19);
        \u0275\u0275text(34, "nezerious");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "p", 20);
        \u0275\u0275text(36, "- Back & White User");
        \u0275\u0275elementEnd()()()()()()()()()()()()()();
        \u0275\u0275elementStart(37, "div", 21)(38, "div", 22)(39, "div", 4)(40, "div", 23)(41, "div", 24)(42, "a", 25);
        \u0275\u0275element(43, "img", 26)(44, "img", 27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 28)(46, "div")(47, "h5", 13);
        \u0275\u0275text(48, " Reset Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "p", 29);
        \u0275\u0275text(50, "Reset Password with Back & White.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 30)(52, "div", 31);
        \u0275\u0275text(53, " Enter your Email and instructions will be sent to you! ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "form", 32);
        \u0275\u0275listener("ngSubmit", function Recoverpwd2Component_Template_form_ngSubmit_54_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275conditionalCreate(55, Recoverpwd2Component_Conditional_55_Template, 2, 2, "alert", 33);
        \u0275\u0275elementStart(56, "div", 11)(57, "label", 34);
        \u0275\u0275text(58, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(59, "input", 35);
        \u0275\u0275conditionalCreate(60, Recoverpwd2Component_Conditional_60_Template, 3, 2, "div", 36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 37)(62, "button", 38);
        \u0275\u0275text(63, "Reset");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(64, "div", 39)(65, "p");
        \u0275\u0275text(66, "Remember It ? ");
        \u0275\u0275elementStart(67, "a", 40);
        \u0275\u0275text(68, " Sign In here");
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
        \u0275\u0275advance(36);
        \u0275\u0275property("formGroup", ctx.resetForm);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.error ? 55 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c05, ctx.submitted && ctx.f.email.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submitted && ctx.f.email.errors ? 60 : -1);
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate1("\xA9", ctx.year, " Skote. Crafted with ");
      }
    }, dependencies: [CommonModule, NgClass, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, SlickCarouselModule, SlickCarouselComponent, SlickItemDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Recoverpwd2Component, [{
    type: Component,
    args: [{ selector: "app-recoverpwd2", imports: [CommonModule, FormsModule, ReactiveFormsModule, SlickCarouselModule], template: `<div>\r
    <div class="container-fluid p-0">\r
        <div class="row g-0">\r
\r
            <div class="col-xl-9">\r
                <div class="auth-full-bg pt-lg-5 p-4">\r
                    <div class="w-100">\r
                        <div class="bg-overlay"></div>\r
                        <div class="d-flex h-100 flex-column">\r
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
                                <div>\r
                                    <h5 class="text-primary"> Reset Password</h5>\r
                                    <p class="text-muted">Reset Password with Back & White.</p>\r
                                </div>\r
\r
                                <div class="mt-4">\r
                                    <div class="alert alert-success text-center mb-4" role="alert">\r
                                        Enter your Email and instructions will be sent to you!\r
                                    </div>\r
                                    <form [formGroup]="resetForm" (ngSubmit)="onSubmit()">\r
                                        @if(error){\r
                                        <alert type="danger" [dismissible]="false">{{ error }}</alert>\r
                                        }\r
                                        <div class="mb-3">\r
                                            <label for="useremail">Email</label>\r
                                            <input type="email" formControlName="email"\r
                                                [ngClass]="{ 'is-invalid': submitted && f.email.errors }"\r
                                                class="form-control" id="useremail" placeholder="Enter email">\r
                                            @if(submitted && f.email.errors){\r
                                            <div class="invalid-feedback">\r
                                                @if(f.email.errors.required){\r
                                                <div>Email is required</div>}\r
                                                @if(f.email.errors.email){\r
                                                <div>Email must be a valid email address</div>}\r
                                            </div>}\r
                                        </div>\r
\r
                                        <div class="text-end">\r
                                            <button class="btn btn-primary w-md" type="submit">Reset</button>\r
                                        </div>\r
\r
                                    </form>\r
                                    <div class="mt-5 text-center">\r
                                        <p>Remember It ? <a routerLink="/auth/login-2" class="fw-medium text-primary">\r
                                                Sign In here</a> </p>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div class="mt-4 mt-md-5 text-center">\r
                                <p class="mb-0">\xA9{{year}} Skote. Crafted with <i class="mdi mdi-heart text-danger"></i>\r
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
  }], () => [{ type: UntypedFormBuilder }, { type: ActivatedRoute }, { type: Router }, { type: AuthenticationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Recoverpwd2Component, { className: "Recoverpwd2Component", filePath: "src/app/account/auth/recoverpwd2/recoverpwd2.component.ts", lineNumber: 15 });
})();

// src/app/account/auth/auth-routing.ts
var routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "signup-2",
    component: Register2Component
  },
  {
    path: "reset-password",
    component: PasswordresetComponent
  },
  {
    path: "recoverpwd-2",
    component: Recoverpwd2Component
  },
  {
    path: "login-2",
    component: Login2Component
  }
];
var AuthRoutingModule = class _AuthRoutingModule {
  static {
    this.\u0275fac = function AuthRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/account/auth/auth.module.ts
var AuthModule = class _AuthModule {
  static {
    this.\u0275fac = function AuthModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [AuthRoutingModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        AuthRoutingModule
      ]
    }]
  }], null, null);
})();

export {
  AuthModule
};
//# sourceMappingURL=chunk-G7JVI4TR.js.map
