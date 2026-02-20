import {
  createAction,
  props
} from "./chunk-S2XUSEFK.js";
import {
  BehaviorSubject,
  HttpClient,
  Injectable,
  map,
  of,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-BM6E27KQ.js";

// src/app/core/services/authfake.service.ts
var AuthfakeauthenticationService = class _AuthfakeauthenticationService {
  constructor(http) {
    this.http = http;
    this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem("currentUser")));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  get currentUserValue() {
    return this.currentUserSubject.value;
  }
  login(email, password) {
    return this.http.post(`/users/authenticate`, { email, password }).pipe(map((user) => {
      if (user && user.token) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        this.currentUserSubject.next(user);
      }
      return user;
    }));
  }
  logout() {
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }
  static {
    this.\u0275fac = function AuthfakeauthenticationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthfakeauthenticationService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthfakeauthenticationService, factory: _AuthfakeauthenticationService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthfakeauthenticationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/core/services/auth.service.ts
var AuthenticationService = class _AuthenticationService {
  constructor() {
  }
  /**
   * Returns the current user
   */
  currentUser() {
    const authUser = sessionStorage.getItem("authUser");
    return authUser ? JSON.parse(authUser) : null;
  }
  /**
   * Performs the auth
   * @param email email of user
   * @param password password of user
   */
  login(email, password) {
    const authUser = sessionStorage.getItem("authUser");
    return of(authUser ? JSON.parse(authUser) : null);
  }
  /**
   * Performs the register
   * @param email email
   * @param password password
   */
  register(user) {
    return of(user);
  }
  /**
   * Reset password
   * @param email email
   */
  resetPassword(email) {
    return of({ message: "Password reset email sent" });
  }
  /**
   * Logout the user
   */
  logout() {
    sessionStorage.removeItem("authUser");
  }
  static {
    this.\u0275fac = function AuthenticationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthenticationService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthenticationService, factory: _AuthenticationService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthenticationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/store/Authentication/authentication.actions.ts
var Register = createAction("[Authentication] Register", props());
var RegisterSuccess = createAction("[Authentication] Register Success", props());
var RegisterFailure = createAction("[Authentication] Register Failure", props());
var login = createAction("[Authentication] Login", props());
var loginSuccess = createAction("[Authentication] Login Success", props());
var loginFailure = createAction("[Authentication] Login Failure", props());
var logout = createAction("[Authentication] Logout");
var logoutSuccess = createAction("[Auth] Logout Success");

export {
  AuthenticationService,
  AuthfakeauthenticationService,
  Register,
  RegisterSuccess,
  RegisterFailure,
  login,
  loginSuccess,
  loginFailure,
  logout,
  logoutSuccess
};
//# sourceMappingURL=chunk-IDKNDILD.js.map
