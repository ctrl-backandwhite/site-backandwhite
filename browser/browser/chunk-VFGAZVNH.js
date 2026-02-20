import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-BM6E27KQ.js";

// src/app/core/services/user.service.ts
var UserProfileService = class _UserProfileService {
  constructor(http) {
    this.http = http;
  }
  /***
   * Get All User
   */
  getAll() {
    return this.http.get(`api/users`);
  }
  /***
   * Facked User Register
   */
  register(user) {
    return this.http.post(`/users/register`, user);
  }
  static {
    this.\u0275fac = function UserProfileService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserProfileService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserProfileService, factory: _UserProfileService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  UserProfileService
};
//# sourceMappingURL=chunk-VFGAZVNH.js.map
