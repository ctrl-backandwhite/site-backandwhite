import {
  AuthModule
} from "./chunk-G7JVI4TR.js";
import "./chunk-4YIZOYM6.js";
import "./chunk-RPVCMMCJ.js";
import "./chunk-VFGAZVNH.js";
import "./chunk-IDKNDILD.js";
import "./chunk-LJC4I3OA.js";
import "./chunk-S2XUSEFK.js";
import "./chunk-6IBDVRAS.js";
import "./chunk-YYQHRHVD.js";
import "./chunk-ICQKGMTO.js";
import {
  CommonModule,
  NgModule,
  RouterModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-BM6E27KQ.js";
import "./chunk-H6NRAODO.js";

// src/app/account/account-routing.module.ts
var routes = [
  { path: "auth", loadChildren: () => import("./auth.module-G445EWF6.js").then((m) => m.AuthModule) }
];
var AccountRoutingModule = class _AccountRoutingModule {
  static {
    this.\u0275fac = function AccountRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AccountRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/account/account.module.ts
var AccountModule = class _AccountModule {
  static {
    this.\u0275fac = function AccountModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AccountModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      AccountRoutingModule,
      CommonModule,
      AuthModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        AccountRoutingModule,
        CommonModule,
        AuthModule
      ]
    }]
  }], null, null);
})();
export {
  AccountModule
};
//# sourceMappingURL=account.module-DWOSEZ42.js.map
