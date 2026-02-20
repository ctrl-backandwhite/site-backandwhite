import {
  createAction,
  props
} from "./chunk-S2XUSEFK.js";
import {
  Injectable,
  Subject,
  filter,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-BM6E27KQ.js";

// src/app/core/services/event.service.ts
var EventService = class _EventService {
  constructor() {
    this.handler = new Subject();
  }
  /**
   * Broadcast the event
   * @param type type of event
   * @param payload payload
   */
  broadcast(type, payload = {}) {
    this.handler.next({ type, payload });
  }
  /**
   * Subscribe to event
   * @param type type of event
   * @param callback call back function
   */
  subscribe(type, callback) {
    return this.handler.pipe(filter((event) => event.type === type)).pipe(map((event) => event.payload)).subscribe(callback);
  }
  static {
    this.\u0275fac = function EventService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventService, factory: _EventService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/store/Chat/chat.action.ts
var fetchchatdata = createAction("[Data] fetch Chat");
var fetchchatSuccess = createAction("[Data] fetch Chat success", props());
var fetchchatFail = createAction("[Data fetch Chat failed]", props());
var fetchchatMessageData = createAction("[Data] fetch ChatMessage");
var fetchchatMessageSuccess = createAction("[Data] fetch ChatMessage success", props());
var fetchchatMessageFail = createAction("[Data fetch ChatMessage failed", props());

export {
  EventService,
  fetchchatdata,
  fetchchatSuccess,
  fetchchatFail,
  fetchchatMessageData,
  fetchchatMessageSuccess,
  fetchchatMessageFail
};
//# sourceMappingURL=chunk-KG6DJZ67.js.map
