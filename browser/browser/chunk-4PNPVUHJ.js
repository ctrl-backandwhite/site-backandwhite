import {
  SlickCarouselComponent,
  SlickCarouselModule,
  SlickItemDirective
} from "./chunk-LJC4I3OA.js";
import {
  TabDirective,
  TabHeadingDirective,
  TabsModule,
  TabsetComponent
} from "./chunk-36X3QJLK.js";
import {
  PagetitleComponent
} from "./chunk-WW5M2ABB.js";
import {
  Component,
  NgModule,
  RouterModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-BM6E27KQ.js";

// src/app/pages/utility/starter/starter.component.ts
var StarterComponent = class _StarterComponent {
  constructor() {
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Utility" }, { label: "Starter Page", active: true }];
  }
  static {
    this.\u0275fac = function StarterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StarterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StarterComponent, selectors: [["app-starter"]], decls: 2, vars: 1, consts: [[1, "container-fluid"], ["title", "Starter Page", 3, "breadcrumbItems"]], template: function StarterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
      }
    }, dependencies: [PagetitleComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StarterComponent, [{
    type: Component,
    args: [{ selector: "app-starter", imports: [PagetitleComponent], template: '<div class="container-fluid">\r\n    <app-page-title title="Starter Page" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r\n</div>' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StarterComponent, { className: "StarterComponent", filePath: "src/app/pages/utility/starter/starter.component.ts", lineNumber: 14 });
})();

// src/app/pages/utility/timeline/timeline.component.ts
var TimelineComponent = class _TimelineComponent {
  constructor() {
    this.slideConfig = {
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    };
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Utility" }, { label: "Timeline", active: true }];
  }
  static {
    this.\u0275fac = function TimelineComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimelineComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimelineComponent, selectors: [["app-timeline"]], decls: 144, vars: 2, consts: [[1, "container-fluid"], ["title", "Timeline", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [1, "hori-timeline"], ["dir", "ltr", 1, "events", "navs-carousel", 3, "config"], ["ngxSlickItem", ""], [1, "item", "event-list"], [1, "event-date"], [1, "text-primary", "mb-1"], [1, "mb-4"], [1, "event-down-icon"], [1, "bx", "bx-down-arrow-circle", "h1", "text-primary", "down-arrow-icon"], [1, "mt-3", "px-3"], [1, "text-muted"], [1, "item", "event-list", "active"], [1, "card-title", "mb-5"], [1, ""], [1, "verti-timeline", "list-unstyled"], [1, "event-list"], [1, "event-timeline-dot"], [1, "bx", "bx-right-arrow-circle"], [1, "d-flex"], [1, "flex-shrink-0", "me-3"], [1, "bx", "bx-copy-alt", "h2", "text-primary"], [1, "flex-grow-1"], [1, "bx", "bx-package", "h2", "text-primary"], [1, "event-list", "active"], [1, "bx", "bx-right-arrow-circle", "bx-fade-right"], [1, "bx", "bx-car", "h2", "text-primary"], [1, "bx", "bx-badge-check", "h2", "text-primary"]], template: function TimelineComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
        \u0275\u0275text(7, "Horizontal Timeline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 7)(9, "ngx-slick-carousel", 8)(10, "div", 9)(11, "div", 10)(12, "div")(13, "div", 11)(14, "div", 12);
        \u0275\u0275text(15, "12 September");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "h5", 13);
        \u0275\u0275text(17, "First event");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 14);
        \u0275\u0275element(19, "i", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 16)(21, "p", 17);
        \u0275\u0275text(22, "It will be as simple as occidental in fact it will be Cambridge");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(23, "div", 9)(24, "div", 10)(25, "div")(26, "div", 11)(27, "div", 12);
        \u0275\u0275text(28, "06 October");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "h5", 13);
        \u0275\u0275text(30, "Second event");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 14);
        \u0275\u0275element(32, "i", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 16)(34, "p", 17);
        \u0275\u0275text(35, "To an English person, it will seem like simplified English existence.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(36, "div", 9)(37, "div", 18)(38, "div")(39, "div", 11)(40, "div", 12);
        \u0275\u0275text(41, "06 October");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "h5", 13);
        \u0275\u0275text(43, "Third event");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 14);
        \u0275\u0275element(45, "i", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 16)(47, "p", 17);
        \u0275\u0275text(48, "For science, music, sport, etc, Europe uses the same vocabulary.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(49, "div", 9)(50, "div", 10)(51, "div")(52, "div", 11)(53, "div", 12);
        \u0275\u0275text(54, "04 November");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "h5", 13);
        \u0275\u0275text(56, "Fourth event");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div", 14);
        \u0275\u0275element(58, "i", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "div", 16)(60, "p", 17);
        \u0275\u0275text(61, "New common language will be more simple than existing. ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(62, "div", 9)(63, "div", 10)(64, "div")(65, "div", 11)(66, "div", 12);
        \u0275\u0275text(67, "19 November");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "h5", 13);
        \u0275\u0275text(69, "Fifth event");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "div", 14);
        \u0275\u0275element(71, "i", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div", 16)(73, "p", 17);
        \u0275\u0275text(74, "It will be as simple as occidental in fact it will be Cambridge");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(75, "div", 9)(76, "div", 10)(77, "div")(78, "div", 11)(79, "div", 12);
        \u0275\u0275text(80, "21 December");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "h5", 13);
        \u0275\u0275text(82, "Sixth event");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "div", 14);
        \u0275\u0275element(84, "i", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "div", 16)(86, "p", 17);
        \u0275\u0275text(87, "To an English person, it will seem like simplified English existence.");
        \u0275\u0275elementEnd()()()()()()()()()()();
        \u0275\u0275elementStart(88, "div", 2)(89, "div", 3)(90, "div", 4)(91, "div", 5)(92, "h4", 19);
        \u0275\u0275text(93, "Vertical Timeline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "div", 20)(95, "ul", 21)(96, "li", 22)(97, "div", 23);
        \u0275\u0275element(98, "i", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "div", 25)(100, "div", 26);
        \u0275\u0275element(101, "i", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "div", 28)(103, "div")(104, "h5");
        \u0275\u0275text(105, "Ordered");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "p", 17);
        \u0275\u0275text(107, "New common language will be more simple and regular than the existing.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(108, "li", 22)(109, "div", 23);
        \u0275\u0275element(110, "i", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "div", 25)(112, "div", 26);
        \u0275\u0275element(113, "i", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "div", 28)(115, "div")(116, "h5");
        \u0275\u0275text(117, "Packed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "p", 17);
        \u0275\u0275text(119, "To achieve this, it would be necessary to have uniform grammar.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(120, "li", 30)(121, "div", 23);
        \u0275\u0275element(122, "i", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "div", 25)(124, "div", 26);
        \u0275\u0275element(125, "i", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "div", 28)(127, "div")(128, "h5");
        \u0275\u0275text(129, "Shipped");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "p", 17);
        \u0275\u0275text(131, "It will be as simple as Occidental in fact, it will be Occidental..");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(132, "li", 22)(133, "div", 23);
        \u0275\u0275element(134, "i", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "div", 25)(136, "div", 26);
        \u0275\u0275element(137, "i", 33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "div", 28)(139, "div")(140, "h5");
        \u0275\u0275text(141, "Delivered");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "p", 17);
        \u0275\u0275text(143, "To an English person, it will seem like simplified English.");
        \u0275\u0275elementEnd()()()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(8);
        \u0275\u0275property("config", ctx.slideConfig);
      }
    }, dependencies: [PagetitleComponent, SlickCarouselModule, SlickCarouselComponent, SlickItemDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineComponent, [{
    type: Component,
    args: [{ selector: "app-timeline", imports: [PagetitleComponent, SlickCarouselModule], template: '<div class="container-fluid">\r\n  <app-page-title title="Timeline" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r\n\r\n  <div class="row">\r\n    <div class="col-lg-12">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title mb-4">Horizontal Timeline</h4>\r\n\r\n          <div class="hori-timeline">\r\n            <ngx-slick-carousel dir="ltr" [config]="slideConfig" class="events navs-carousel">\r\n              <div ngxSlickItem>\r\n                <div class="item event-list">\r\n                  <div>\r\n                    <div class="event-date">\r\n                      <div class="text-primary mb-1">12 September</div>\r\n                      <h5 class="mb-4">First event</h5>\r\n                    </div>\r\n                    <div class="event-down-icon">\r\n                      <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>\r\n                    </div>\r\n\r\n                    <div class="mt-3 px-3">\r\n                      <p class="text-muted">It will be as simple as occidental in fact it will be\r\n                        Cambridge</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div ngxSlickItem>\r\n                <div class="item event-list">\r\n                  <div>\r\n                    <div class="event-date">\r\n                      <div class="text-primary mb-1">06 October</div>\r\n                      <h5 class="mb-4">Second event</h5>\r\n                    </div>\r\n                    <div class="event-down-icon">\r\n                      <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>\r\n                    </div>\r\n\r\n                    <div class="mt-3 px-3">\r\n                      <p class="text-muted">To an English person, it will seem like simplified\r\n                        English\r\n                        existence.</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div ngxSlickItem>\r\n                <div class="item event-list active">\r\n                  <div>\r\n                    <div class="event-date">\r\n                      <div class="text-primary mb-1">06 October</div>\r\n                      <h5 class="mb-4">Third event</h5>\r\n                    </div>\r\n                    <div class="event-down-icon">\r\n                      <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>\r\n                    </div>\r\n\r\n                    <div class="mt-3 px-3">\r\n                      <p class="text-muted">For science, music, sport, etc, Europe uses the same\r\n                        vocabulary.</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div ngxSlickItem>\r\n                <div class="item event-list">\r\n                  <div>\r\n                    <div class="event-date">\r\n                      <div class="text-primary mb-1">04 November</div>\r\n                      <h5 class="mb-4">Fourth event</h5>\r\n                    </div>\r\n                    <div class="event-down-icon">\r\n                      <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>\r\n                    </div>\r\n\r\n                    <div class="mt-3 px-3">\r\n                      <p class="text-muted">New common language will be more simple than existing.\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div ngxSlickItem>\r\n                <div class="item event-list">\r\n                  <div>\r\n                    <div class="event-date">\r\n                      <div class="text-primary mb-1">19 November</div>\r\n                      <h5 class="mb-4">Fifth event</h5>\r\n                    </div>\r\n                    <div class="event-down-icon">\r\n                      <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>\r\n                    </div>\r\n\r\n                    <div class="mt-3 px-3">\r\n                      <p class="text-muted">It will be as simple as occidental in fact it will be\r\n                        Cambridge</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div ngxSlickItem>\r\n                <div class="item event-list">\r\n                  <div>\r\n                    <div class="event-date">\r\n                      <div class="text-primary mb-1">21 December</div>\r\n                      <h5 class="mb-4">Sixth event</h5>\r\n                    </div>\r\n                    <div class="event-down-icon">\r\n                      <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>\r\n                    </div>\r\n\r\n                    <div class="mt-3 px-3">\r\n                      <p class="text-muted">To an English person, it will seem like simplified\r\n                        English\r\n                        existence.</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ngx-slick-carousel>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- end card -->\r\n    </div>\r\n  </div>\r\n  <!-- end row -->\r\n\r\n  <div class="row">\r\n    <div class="col-lg-12">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title mb-5">Vertical Timeline</h4>\r\n          <div class="">\r\n            <ul class="verti-timeline list-unstyled">\r\n              <li class="event-list">\r\n                <div class="event-timeline-dot">\r\n                  <i class="bx bx-right-arrow-circle"></i>\r\n                </div>\r\n                <div class="d-flex">\r\n                  <div class="flex-shrink-0 me-3">\r\n                    <i class="bx bx-copy-alt h2 text-primary"></i>\r\n                  </div>\r\n                  <div class="flex-grow-1">\r\n                    <div>\r\n                      <h5>Ordered</h5>\r\n                      <p class="text-muted">New common language will be more simple and regular than the existing.</p>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class="event-list">\r\n                <div class="event-timeline-dot">\r\n                  <i class="bx bx-right-arrow-circle"></i>\r\n                </div>\r\n                <div class="d-flex">\r\n                  <div class="flex-shrink-0 me-3">\r\n                    <i class="bx bx-package h2 text-primary"></i>\r\n                  </div>\r\n                  <div class="flex-grow-1">\r\n                    <div>\r\n                      <h5>Packed</h5>\r\n                      <p class="text-muted">To achieve this, it would be necessary to have uniform grammar.</p>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class="event-list active">\r\n                <div class="event-timeline-dot">\r\n                  <i class="bx bx-right-arrow-circle bx-fade-right"></i>\r\n                </div>\r\n                <div class="d-flex">\r\n                  <div class="flex-shrink-0 me-3">\r\n                    <i class="bx bx-car h2 text-primary"></i>\r\n                  </div>\r\n                  <div class="flex-grow-1">\r\n                    <div>\r\n                      <h5>Shipped</h5>\r\n                      <p class="text-muted">It will be as simple as Occidental in fact, it will be Occidental..</p>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class="event-list">\r\n                <div class="event-timeline-dot">\r\n                  <i class="bx bx-right-arrow-circle"></i>\r\n                </div>\r\n                <div class="d-flex">\r\n                  <div class="flex-shrink-0 me-3">\r\n                    <i class="bx bx-badge-check h2 text-primary"></i>\r\n                  </div>\r\n                  <div class="flex-grow-1">\r\n                    <div>\r\n                      <h5>Delivered</h5>\r\n                      <p class="text-muted">To an English person, it will seem like simplified English.</p>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimelineComponent, { className: "TimelineComponent", filePath: "src/app/pages/utility/timeline/timeline.component.ts", lineNumber: 15 });
})();

// src/app/pages/utility/pricing/data.ts
var pricingData = [
  {
    name: "Starter",
    text: "Neque quis est",
    icon: "bx-walk",
    price: 19
  },
  {
    name: "Professional",
    text: "Quis autem iure",
    icon: "bx-run",
    price: 29
  },
  {
    name: "Enterprise",
    text: "Sed ut neque unde",
    icon: "bx-cycling",
    price: 39
  },
  {
    name: "Unlimited",
    text: "Itaque earum hic",
    icon: "bx-car",
    price: 49
  }
];

// src/app/pages/utility/pricing/pricing.component.ts
function PricingComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "div", 11)(5, "h5");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 5);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 12);
    \u0275\u0275element(10, "i");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 13)(12, "h2")(13, "sup")(14, "small");
    \u0275\u0275text(15, "$");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(16);
    \u0275\u0275elementStart(17, "span", 14);
    \u0275\u0275text(18, "Per month");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 15)(20, "a", 16);
    \u0275\u0275text(21, "Sign up Now");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 17)(23, "p");
    \u0275\u0275element(24, "i", 18);
    \u0275\u0275text(25, " Free Live Support ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p");
    \u0275\u0275element(27, "i", 18);
    \u0275\u0275text(28, " Unlimited User ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p");
    \u0275\u0275element(30, "i", 18);
    \u0275\u0275text(31, " No Time Tracking ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p");
    \u0275\u0275element(33, "i", 18);
    \u0275\u0275text(34, " Free Setup ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(data_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.text);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", data_r1.icon, " h1 text-primary"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", data_r1.price, "/ ");
  }
}
var PricingComponent = class _PricingComponent {
  constructor() {
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Utility" }, { label: "Pricing", active: true }];
    this.pricingData = pricingData;
  }
  static {
    this.\u0275fac = function PricingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PricingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PricingComponent, selectors: [["app-pricing"]], decls: 12, vars: 1, consts: [[1, "container-fluid"], ["title", "Pricing", 3, "breadcrumbItems"], [1, "row", "justify-content-center"], [1, "col-lg-6"], [1, "text-center", "mb-5"], [1, "text-muted"], [1, "row"], [1, "col-xl-3", "col-md-6"], [1, "card", "plan-box"], [1, "card-body", "p-4"], [1, "d-flex"], [1, "flex-grow-1"], [1, "flex-shrink-0", "ms-3"], [1, "py-4"], [1, "font-size-13"], [1, "text-center", "plan-btn"], ["href", "javascript: void(0);", 1, "btn", "btn-primary", "btn-sm", "position-relative"], [1, "plan-features", "mt-5"], [1, "bx", "bx-checkbox-square", "text-primary", "me-2"]], template: function PricingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4");
        \u0275\u0275text(6, "Choose your Pricing plan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8, "To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words If several languages coalesce");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(9, "div", 6);
        \u0275\u0275repeaterCreate(10, PricingComponent_For_11_Template, 35, 6, "div", 7, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(9);
        \u0275\u0275repeater(ctx.pricingData);
      }
    }, dependencies: [PagetitleComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PricingComponent, [{
    type: Component,
    args: [{ selector: "app-pricing", imports: [PagetitleComponent], template: '<div class="container-fluid">\r\n  <app-page-title title="Pricing" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r\n\r\n  <div class="row justify-content-center">\r\n    <div class="col-lg-6">\r\n      <div class="text-center mb-5">\r\n        <h4>Choose your Pricing plan</h4>\r\n        <p class="text-muted">To achieve this, it would be necessary to have uniform grammar, pronunciation and more\r\n          common words If several languages coalesce</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class="row">\r\n    @for(data of pricingData;track $index){\r\n    <div class="col-xl-3 col-md-6">\r\n      <div class="card plan-box">\r\n        <div class="card-body p-4">\r\n          <div class="d-flex">\r\n            <div class="flex-grow-1">\r\n              <h5>{{data.name}}</h5>\r\n              <p class="text-muted">{{data.text}}</p>\r\n            </div>\r\n            <div class="flex-shrink-0 ms-3">\r\n              <i class="bx {{data.icon}} h1 text-primary"></i>\r\n            </div>\r\n          </div>\r\n          <div class="py-4">\r\n            <h2>\r\n              <sup>\r\n                <small>$</small>\r\n              </sup>\r\n              {{data.price}}/\r\n              <span class="font-size-13">Per month</span>\r\n            </h2>\r\n          </div>\r\n          <div class="text-center plan-btn">\r\n            <a href="javascript: void(0);" class="btn btn-primary btn-sm position-relative">Sign up Now</a>\r\n          </div>\r\n\r\n          <div class="plan-features mt-5">\r\n            <p>\r\n              <i class="bx bx-checkbox-square text-primary me-2"></i> Free Live Support\r\n            </p>\r\n            <p>\r\n              <i class="bx bx-checkbox-square text-primary me-2"></i> Unlimited User\r\n            </p>\r\n            <p>\r\n              <i class="bx bx-checkbox-square text-primary me-2"></i> No Time Tracking\r\n            </p>\r\n            <p>\r\n              <i class="bx bx-checkbox-square text-primary me-2"></i> Free Setup\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>}\r\n  </div>\r\n</div>' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PricingComponent, { className: "PricingComponent", filePath: "src/app/pages/utility/pricing/pricing.component.ts", lineNumber: 18 });
})();

// src/app/pages/utility/faqs/faqs.component.ts
function FaqsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 18);
    \u0275\u0275elementStart(1, "p", 19);
    \u0275\u0275text(2, "General Questions");
    \u0275\u0275elementEnd();
  }
}
function FaqsComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 20);
    \u0275\u0275elementStart(1, "p", 19);
    \u0275\u0275text(2, "Privacy Policy");
    \u0275\u0275elementEnd();
  }
}
function FaqsComponent_ng_template_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 21);
    \u0275\u0275elementStart(1, "p", 19);
    \u0275\u0275text(2, "Support");
    \u0275\u0275elementEnd();
  }
}
var FaqsComponent = class _FaqsComponent {
  constructor() {
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Utility" }, { label: "FAQs", active: true }];
  }
  static {
    this.\u0275fac = function FaqsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FaqsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FaqsComponent, selectors: [["app-faqs"]], decls: 147, vars: 2, consts: [[1, "container-fluid"], ["title", "FAQs", 3, "breadcrumbItems"], [1, "checkout-tabs"], [1, "row"], [1, "col-xl-12"], [1, "flex-column", "nav-pills", "ecommerce-checkout-tab", 3, "vertical"], ["tabHeading", ""], [1, "card"], [1, "card-body"], ["id", "v-pills-gen-ques", 1, "fade", "active", "show"], [1, "card-title", "mb-5"], [1, "faq-box", "d-flex", "mb-4"], [1, "flex-shrink-0", "me-3", "faq-icon"], [1, "bx", "bx-help-circle", "font-size-20", "text-success"], [1, "flex-grow-1"], [1, "font-size-15"], [1, "text-muted"], [1, "tab-pane"], [1, "bx", "bx-question-mark", "d-block", "check-nav-icon", "mt-4", "mb-2"], [1, "fw-bold", "mb-4"], [1, "bx", "bx-check-shield", "d-block", "check-nav-icon", "mt-4", "mb-2"], [1, "bx", "bx-support", "d-block", "check-nav-icon", "mt-4", "mb-2"]], template: function FaqsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "tabset", 5)(6, "tab");
        \u0275\u0275template(7, FaqsComponent_ng_template_7_Template, 3, 0, "ng-template", 6);
        \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "h4", 10);
        \u0275\u0275text(12, "General Questions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 11)(14, "div", 12);
        \u0275\u0275element(15, "i", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 14)(17, "h5", 15);
        \u0275\u0275text(18, "What is Lorem Ipsum?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "p", 16);
        \u0275\u0275text(20, "New common language will be more simple and regular than the existing European languages. It will be as simple as occidental.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 11)(22, "div", 12);
        \u0275\u0275element(23, "i", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 14)(25, "h5", 15);
        \u0275\u0275text(26, "Where does it come from?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "p", 16);
        \u0275\u0275text(28, "Everyone realizes why a new common language would be desirable one could refuse to pay expensive translators.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 11)(30, "div", 12);
        \u0275\u0275element(31, "i", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 14)(33, "h5", 15);
        \u0275\u0275text(34, "Where can I get some?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "p", 16);
        \u0275\u0275text(36, "If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "div", 11)(38, "div", 12);
        \u0275\u0275element(39, "i", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 14)(41, "h5", 15);
        \u0275\u0275text(42, "Why do we use it?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "p", 16);
        \u0275\u0275text(44, "Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "div", 11)(46, "div", 12);
        \u0275\u0275element(47, "i", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 14)(49, "h5", 15);
        \u0275\u0275text(50, "Where can I get some?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "p", 16);
        \u0275\u0275text(52, "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(53, "tab");
        \u0275\u0275template(54, FaqsComponent_ng_template_54_Template, 3, 0, "ng-template", 6);
        \u0275\u0275elementStart(55, "div", 7)(56, "div", 8)(57, "div", 17)(58, "h4", 10);
        \u0275\u0275text(59, "Privacy Policy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 11)(61, "div", 12);
        \u0275\u0275element(62, "i", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div", 14)(64, "h5", 15);
        \u0275\u0275text(65, "Where does it come from?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "p", 16);
        \u0275\u0275text(67, "Everyone realizes why a new common language would be desirable one could refuse to pay expensive translators.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(68, "div", 11)(69, "div", 12);
        \u0275\u0275element(70, "i", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "div", 14)(72, "h5", 15);
        \u0275\u0275text(73, "Where can I get some?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "p", 16);
        \u0275\u0275text(75, "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(76, "div", 11)(77, "div", 12);
        \u0275\u0275element(78, "i", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "div", 14)(80, "h5", 15);
        \u0275\u0275text(81, "What is Lorem Ipsum?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "p", 16);
        \u0275\u0275text(83, "New common language will be more simple and regular than the existing European languages. It will be as simple as occidental.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(84, "div", 11)(85, "div", 12);
        \u0275\u0275element(86, "i", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "div", 14)(88, "h5", 15);
        \u0275\u0275text(89, "Why do we use it?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "p", 16);
        \u0275\u0275text(91, "Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(92, "div", 11)(93, "div", 12);
        \u0275\u0275element(94, "i", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "div", 14)(96, "h5", 15);
        \u0275\u0275text(97, "Where can I get some?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "p", 16);
        \u0275\u0275text(99, "If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(100, "tab");
        \u0275\u0275template(101, FaqsComponent_ng_template_101_Template, 3, 0, "ng-template", 6);
        \u0275\u0275elementStart(102, "div", 7)(103, "div", 8)(104, "div", 17)(105, "h4", 10);
        \u0275\u0275text(106, "Support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "div", 11)(108, "div", 12);
        \u0275\u0275element(109, "i", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "div", 14)(111, "h5", 15);
        \u0275\u0275text(112, "Where can I get some?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "p", 16);
        \u0275\u0275text(114, "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(115, "div", 11)(116, "div", 12);
        \u0275\u0275element(117, "i", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "div", 14)(119, "h5", 15);
        \u0275\u0275text(120, "Where does it come from?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "p", 16);
        \u0275\u0275text(122, "Everyone realizes why a new common language would be desirable one could refuse to pay expensive translators.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(123, "div", 11)(124, "div", 12);
        \u0275\u0275element(125, "i", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "div", 14)(127, "h5", 15);
        \u0275\u0275text(128, "Why do we use it?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "p", 16);
        \u0275\u0275text(130, "Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(131, "div", 11)(132, "div", 12);
        \u0275\u0275element(133, "i", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "div", 14)(135, "h5", 15);
        \u0275\u0275text(136, "Where can I get some?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "p", 16);
        \u0275\u0275text(138, "If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(139, "div", 11)(140, "div", 12);
        \u0275\u0275element(141, "i", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "div", 14)(143, "h5", 15);
        \u0275\u0275text(144, "What is Lorem Ipsum?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "p", 16);
        \u0275\u0275text(146, "New common language will be more simple and regular than the existing European languages. It will be as simple as occidental.");
        \u0275\u0275elementEnd()()()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(4);
        \u0275\u0275property("vertical", true);
      }
    }, dependencies: [PagetitleComponent, TabsModule, TabDirective, TabsetComponent, TabHeadingDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaqsComponent, [{
    type: Component,
    args: [{ selector: "app-faqs", imports: [PagetitleComponent, TabsModule], template: '<div class="container-fluid">\r\n  <app-page-title title="FAQs" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r\n\r\n  <div class="checkout-tabs">\r\n    <div class="row">\r\n      <div class="col-xl-12">\r\n        <tabset [vertical]="true" class="flex-column nav-pills ecommerce-checkout-tab">\r\n        \r\n          <tab>\r\n            <ng-template tabHeading>\r\n              <i class="bx bx-question-mark d-block check-nav-icon mt-4 mb-2"></i>\r\n              <p class="fw-bold mb-4">General Questions</p>\r\n            </ng-template>\r\n            <!-- <ng-template ngbNavContent> -->\r\n              <div class="card">\r\n                <div class="card-body">\r\n                  <div class="fade active show" id="v-pills-gen-ques">\r\n                    <h4 class="card-title mb-5">General Questions</h4>\r\n                    <div class="faq-box d-flex mb-4">\r\n                      <div class="flex-shrink-0 me-3 faq-icon">\r\n                        <i class="bx bx-help-circle font-size-20 text-success"></i>\r\n                      </div>\r\n                      <div class="flex-grow-1">\r\n                        <h5 class="font-size-15">What is Lorem Ipsum?</h5>\r\n                        <p class="text-muted">New common language will be more simple and regular than the existing\r\n                          European\r\n                          languages. It will be as simple as occidental.</p>\r\n                      </div>\r\n                    </div>\r\n                    <div class="faq-box d-flex mb-4">\r\n                      <div class="flex-shrink-0 me-3 faq-icon">\r\n                        <i class="bx bx-help-circle font-size-20 text-success"></i>\r\n                      </div>\r\n                      <div class="flex-grow-1">\r\n                        <h5 class="font-size-15">Where does it come from?</h5>\r\n                        <p class="text-muted">Everyone realizes why a new common language would be desirable one could\r\n                          refuse\r\n                          to pay expensive translators.</p>\r\n                      </div>\r\n                    </div>\r\n                    <div class="faq-box d-flex mb-4">\r\n                      <div class="flex-shrink-0 me-3 faq-icon">\r\n                        <i class="bx bx-help-circle font-size-20 text-success"></i>\r\n                      </div>\r\n                      <div class="flex-grow-1">\r\n                        <h5 class="font-size-15">Where can I get some?</h5>\r\n                        <p class="text-muted">If several languages coalesce, the grammar of the resulting language is\r\n                          more\r\n                          simple and regular than that of the individual languages.</p>\r\n                      </div>\r\n                    </div>\r\n                    <div class="faq-box d-flex mb-4">\r\n                      <div class="flex-shrink-0 me-3 faq-icon">\r\n                        <i class="bx bx-help-circle font-size-20 text-success"></i>\r\n                      </div>\r\n                      <div class="flex-grow-1">\r\n                        <h5 class="font-size-15">Why do we use it?</h5>\r\n                        <p class="text-muted">Their separate existence is a myth. For science, music, sport, etc, Europe\r\n                          uses\r\n                          the same vocabulary.</p>\r\n                      </div>\r\n                    </div>\r\n                    <div class="faq-box d-flex mb-4">\r\n                      <div class="flex-shrink-0 me-3 faq-icon">\r\n                        <i class="bx bx-help-circle font-size-20 text-success"></i>\r\n                      </div>\r\n                      <div class="flex-grow-1">\r\n                        <h5 class="font-size-15">Where can I get some?</h5>\r\n                        <p class="text-muted">To an English person, it will seem like simplified English, as a skeptical\r\n                          Cambridge friend of mine told me what Occidental</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            <!-- </ng-template> -->\r\n          </tab>\r\n          <tab>\r\n            <ng-template tabHeading>\r\n              <i class="bx bx-check-shield d-block check-nav-icon mt-4 mb-2"></i>\r\n              <p class="fw-bold mb-4">Privacy Policy</p>\r\n            </ng-template>\r\n              <div class="card">\r\n                <div class="card-body">\r\n                  <div class="tab-pane">\r\n                    <h4 class="card-title mb-5">Privacy Policy</h4>\r\n\r\n                    <div class="faq-box d-flex mb-4">\r\n                      <div class="flex-shrink-0 me-3 faq-icon">\r\n                        <i class="bx bx-help-circle font-size-20 text-success"></i>\r\n                      </div>\r\n                      <div class="flex-grow-1">\r\n                        <h5 class="font-size-15">Where does it come from?</h5>\r\n                        <p class="text-muted">Everyone realizes why a new common language would be desirable one could\r\n                          refuse\r\n                          to pay expensive translators.</p>\r\n                      </div>\r\n                    </div>\r\n                    <div class="faq-box d-flex mb-4">\r\n                      <div class="flex-shrink-0 me-3 faq-icon">\r\n                        <i class="bx bx-help-circle font-size-20 text-success"></i>\r\n                      </div>\r\n                      <div class="flex-grow-1">\r\n                        <h5 class="font-size-15">Where can I get some?</h5>\r\n                        <p class="text-muted">To an English person, it will seem like simplified English, as a skeptical\r\n                          Cambridge friend of mine told me what Occidental</p>\r\n                      </div>\r\n                    </div>\r\n                    <div class="faq-box d-flex mb-4">\r\n                      <div class="flex-shrink-0 me-3 faq-icon">\r\n                        <i class="bx bx-help-circle font-size-20 text-success"></i>\r\n                      </div>\r\n                      <div class="flex-grow-1">\r\n                        <h5 class="font-size-15">What is Lorem Ipsum?</h5>\r\n                        <p class="text-muted">New common language will be more simple and regular than the existing\r\n                          European\r\n                          languages. It will be as simple as occidental.</p>\r\n                      </div>\r\n                    </div>\r\n                    <div class="faq-box d-flex mb-4">\r\n                      <div class="flex-shrink-0 me-3 faq-icon">\r\n                        <i class="bx bx-help-circle font-size-20 text-success"></i>\r\n                      </div>\r\n                      <div class="flex-grow-1">\r\n                        <h5 class="font-size-15">Why do we use it?</h5>\r\n                        <p class="text-muted">Their separate existence is a myth. For science, music, sport, etc, Europe\r\n                          uses\r\n                          the same vocabulary.</p>\r\n                      </div>\r\n                    </div>\r\n                    <div class="faq-box d-flex mb-4">\r\n                      <div class="flex-shrink-0 me-3 faq-icon">\r\n                        <i class="bx bx-help-circle font-size-20 text-success"></i>\r\n                      </div>\r\n                      <div class="flex-grow-1">\r\n                        <h5 class="font-size-15">Where can I get some?</h5>\r\n                        <p class="text-muted">If several languages coalesce, the grammar of the resulting language is\r\n                          more\r\n                          simple and regular than that of the individual languages.</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          </tab>\r\n          <tab>\r\n            <ng-template tabHeading>\r\n              <i class="bx bx-support d-block check-nav-icon mt-4 mb-2"></i>\r\n              <p class="fw-bold mb-4">Support</p>\r\n            </ng-template>\r\n              <div class="card">\r\n                <div class="card-body">\r\n                  <div class="tab-pane">\r\n                    <h4 class="card-title mb-5">Support</h4>\r\n\r\n                    <div class="faq-box d-flex mb-4">\r\n                      <div class="flex-shrink-0 me-3 faq-icon">\r\n                        <i class="bx bx-help-circle font-size-20 text-success"></i>\r\n                      </div>\r\n                      <div class="flex-grow-1">\r\n                        <h5 class="font-size-15">Where can I get some?</h5>\r\n                        <p class="text-muted">To an English person, it will seem like simplified English, as a skeptical\r\n                          Cambridge friend of mine told me what Occidental</p>\r\n                      </div>\r\n                    </div>\r\n                    <div class="faq-box d-flex mb-4">\r\n                      <div class="flex-shrink-0 me-3 faq-icon">\r\n                        <i class="bx bx-help-circle font-size-20 text-success"></i>\r\n                      </div>\r\n                      <div class="flex-grow-1">\r\n                        <h5 class="font-size-15">Where does it come from?</h5>\r\n                        <p class="text-muted">Everyone realizes why a new common language would be desirable one could\r\n                          refuse\r\n                          to pay expensive translators.</p>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="faq-box d-flex mb-4">\r\n                      <div class="flex-shrink-0 me-3 faq-icon">\r\n                        <i class="bx bx-help-circle font-size-20 text-success"></i>\r\n                      </div>\r\n                      <div class="flex-grow-1">\r\n                        <h5 class="font-size-15">Why do we use it?</h5>\r\n                        <p class="text-muted">Their separate existence is a myth. For science, music, sport, etc, Europe\r\n                          uses\r\n                          the same vocabulary.</p>\r\n                      </div>\r\n                    </div>\r\n                    <div class="faq-box d-flex mb-4">\r\n                      <div class="flex-shrink-0 me-3 faq-icon">\r\n                        <i class="bx bx-help-circle font-size-20 text-success"></i>\r\n                      </div>\r\n                      <div class="flex-grow-1">\r\n                        <h5 class="font-size-15">Where can I get some?</h5>\r\n                        <p class="text-muted">If several languages coalesce, the grammar of the resulting language is\r\n                          more\r\n                          simple and regular than that of the individual languages.</p>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="faq-box d-flex mb-4">\r\n                      <div class="flex-shrink-0 me-3 faq-icon">\r\n                        <i class="bx bx-help-circle font-size-20 text-success"></i>\r\n                      </div>\r\n                      <div class="flex-grow-1">\r\n                        <h5 class="font-size-15">What is Lorem Ipsum?</h5>\r\n                        <p class="text-muted">New common language will be more simple and regular than the existing\r\n                          European\r\n                          languages. It will be as simple as occidental.</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          </tab>\r\n        </tabset>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FaqsComponent, { className: "FaqsComponent", filePath: "src/app/pages/utility/faqs/faqs.component.ts", lineNumber: 15 });
})();

// src/app/pages/utility/utility-routing.module.ts
var routes = [
  {
    path: "starter",
    component: StarterComponent
  },
  {
    path: "timeline",
    component: TimelineComponent
  },
  {
    path: "pricing",
    component: PricingComponent
  },
  {
    path: "faqs",
    component: FaqsComponent
  }
];
var UtiliytRoutingModule = class _UtiliytRoutingModule {
  static {
    this.\u0275fac = function UtiliytRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UtiliytRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _UtiliytRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtiliytRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/pages/utility/utility.module.ts
var UtilityModule = class _UtilityModule {
  static {
    this.\u0275fac = function UtilityModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UtilityModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _UtilityModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [UtiliytRoutingModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtilityModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        UtiliytRoutingModule
      ]
    }]
  }], null, null);
})();

export {
  UtilityModule
};
//# sourceMappingURL=chunk-4PNPVUHJ.js.map
