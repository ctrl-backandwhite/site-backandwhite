import {
  fetchprojectData
} from "./chunk-26Y3IFBB.js";
import {
  FlatpickrDirective
} from "./chunk-QLOUBXRC.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-5H32OP7N.js";
import {
  SimplebarAngularComponent,
  SimplebarAngularModule
} from "./chunk-OKDSBIXU.js";
import {
  DROPZONE_CONFIG,
  DropzoneComponent,
  DropzoneModule
} from "./chunk-NBSG53RP.js";
import {
  BsDatepickerModule
} from "./chunk-C3TIYFCT.js";
import {
  TooltipDirective,
  TooltipModule
} from "./chunk-D7IPSTS4.js";
import {
  PaginationComponent,
  PaginationModule
} from "./chunk-AMVJFW2N.js";
import {
  BsModalService
} from "./chunk-BYTMBZOH.js";
import {
  BsDropdownDirective,
  BsDropdownMenuDirective,
  BsDropdownModule,
  BsDropdownToggleDirective
} from "./chunk-MWIFUPBM.js";
import {
  PagetitleComponent
} from "./chunk-WW5M2ABB.js";
import {
  Store,
  createFeatureSelector,
  createSelector
} from "./chunk-S2XUSEFK.js";
import {
  FormsModule,
  NgSelectOption,
  UntypedFormBuilder,
  ɵNgSelectMultipleOption
} from "./chunk-ICQKGMTO.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  Input,
  NgClass,
  NgModule,
  Output,
  RouterLink,
  RouterModule,
  ViewChild,
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
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-BM6E27KQ.js";

// src/app/store/ProjectsData/project-selector.ts
var selectDataState = createFeatureSelector("Projectlist");
var selectData = createSelector(selectDataState, (state) => state.projectdata);
var selectDataLoading = createSelector(selectDataState, (state) => state.loading);
var selectDataError = createSelector(selectDataState, (state) => state.error);

// src/app/pages/projects/projectgrid/projectgrid.component.ts
var _c0 = (a0, a1, a2) => ({ "bg-success": a0, "bg-warning": a1, "bg-danger": a2 });
function ProjectgridComponent_For_4_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "a", 20);
    \u0275\u0275element(2, "img", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const grid_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", \u0275\u0275interpolate(grid_r1.users[1]), \u0275\u0275sanitizeUrl);
  }
}
function ProjectgridComponent_For_4_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "a", 20);
    \u0275\u0275element(2, "img", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const grid_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", \u0275\u0275interpolate(grid_r1.users[2]), \u0275\u0275sanitizeUrl);
  }
}
function ProjectgridComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "div", 11)(6, "span", 12);
    \u0275\u0275element(7, "img", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 14)(9, "h5", 15)(10, "a", 16);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 17);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 18)(15, "div", 19)(16, "a", 20);
    \u0275\u0275element(17, "img", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(18, ProjectgridComponent_For_4_Conditional_18_Template, 3, 2, "div", 19)(19, ProjectgridComponent_For_4_Conditional_19_Template, 3, 2, "div", 19);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 22)(21, "ul", 23)(22, "li", 24)(23, "span", 25);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "li", 26);
    \u0275\u0275element(26, "i", 27);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "li", 28);
    \u0275\u0275element(29, "i", 29);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const grid_r1 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275property("src", \u0275\u0275interpolate(grid_r1.image), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(grid_r1.text);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(grid_r1.subtext);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate(grid_r1.users[0]), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional(grid_r1.users[1] ? 18 : grid_r1.users[2] ? 19 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(11, _c0, grid_r1.status === "Completed", grid_r1.status === "Pending", grid_r1.status === "Delay"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(grid_r1.status);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", grid_r1.date, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", grid_r1.comment, " ");
  }
}
var ProjectgridComponent = class _ProjectgridComponent {
  constructor(modalService, store, formBuilder) {
    this.modalService = modalService;
    this.store = store;
    this.formBuilder = formBuilder;
    this.page = 1;
    this.endItem = 12;
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Projects" }, { label: "Projects Grid", active: true }];
    this.store.dispatch(fetchprojectData());
    this.store.select(selectData).subscribe((data) => {
      this.projectData = data;
      this.returnedArray = data;
      this.projectData = this.returnedArray.slice(0, 9);
    });
  }
  // page change event
  pageChanged(event) {
    const startItem = (event.page - 1) * event.itemsPerPage;
    this.endItem = event.page * event.itemsPerPage;
    this.projectData = this.returnedArray.slice(startItem, this.endItem);
  }
  static {
    this.\u0275fac = function ProjectgridComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectgridComponent)(\u0275\u0275directiveInject(BsModalService), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(UntypedFormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectgridComponent, selectors: [["app-projectgrid"]], standalone: false, decls: 9, vars: 3, consts: [[1, "container-fluid"], ["title", "Projects Grid", 3, "breadcrumbItems"], [1, "row"], [1, "col-xl-4", "col-sm-6"], [1, "col-lg-12"], [1, "pagination", "justify-content-end", "mb-2", "pagination-rounded", "justify-content-center", "p-2"], [1, "pagination-wrap", "hstack", "gap-2", 3, "pageChanged", "totalItems", "itemsPerPage"], [1, "card"], [1, "card-body"], [1, "d-flex"], [1, "flex-shrink-0", "me-4"], [1, "avatar-md"], [1, "avatar-title", "rounded-circle", "bg-light", "text-danger", "font-size-16"], ["alt", "", "height", "30", 3, "src"], [1, "flex-grow-1", "overflow-hidden"], [1, "text-truncate", "font-size-15"], ["href", "javascript: void(0);", 1, "text-dark"], [1, "text-muted", "mb-4"], [1, "avatar-group"], [1, "avatar-group-item"], ["href", "javascript: void(0);", 1, "d-inline-block"], ["alt", "", 1, "rounded-circle", "avatar-xs", 3, "src"], [1, "px-4", "py-3", "border-top"], [1, "list-inline", "mb-0"], [1, "list-inline-item", "me-3"], [1, "badge", 3, "ngClass"], ["title", "Due Date", "tooltip", "Due Date", 1, "list-inline-item", "me-3"], [1, "bx", "bx-calendar", "me-1"], ["title", "Comments", "tooltip", "Comments", 1, "list-inline-item", "me-3"], [1, "bx", "bx-comment-dots", "me-1"]], template: function ProjectgridComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275repeaterCreate(3, ProjectgridComponent_For_4_Template, 31, 15, "div", 3, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 2)(6, "div", 4)(7, "ul", 5)(8, "pagination", 6);
        \u0275\u0275listener("pageChanged", function ProjectgridComponent_Template_pagination_pageChanged_8_listener($event) {
          return ctx.pageChanged($event);
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.projectData);
        \u0275\u0275advance(5);
        \u0275\u0275property("totalItems", ctx.returnedArray == null ? null : ctx.returnedArray.length)("itemsPerPage", 9);
      }
    }, dependencies: [NgClass, TooltipDirective, PaginationComponent, PagetitleComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectgridComponent, [{
    type: Component,
    args: [{ selector: "app-projectgrid", standalone: false, template: `<div class="container-fluid">\r
  <app-page-title title="Projects Grid" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
\r
  <div class="row">\r
    @for(grid of projectData;track $index){\r
    <div class=" col-xl-4 col-sm-6">\r
      <div class="card">\r
        <div class="card-body">\r
          <div class="d-flex">\r
            <div class="flex-shrink-0 me-4">\r
              <div class="avatar-md">\r
                <span class="avatar-title rounded-circle bg-light text-danger font-size-16">\r
                  <img src="{{grid.image}}" alt height="30" />\r
                </span>\r
              </div>\r
            </div>\r
\r
            <div class="flex-grow-1 overflow-hidden">\r
              <h5 class="text-truncate font-size-15">\r
                <a href="javascript: void(0);" class="text-dark">{{grid.text}}</a>\r
              </h5>\r
              <p class="text-muted mb-4">{{grid.subtext}}</p>\r
              <div class="avatar-group">\r
                <div class="avatar-group-item">\r
                  <a href="javascript: void(0);" class="d-inline-block">\r
                    <img src="{{grid.users[0]}}" class="rounded-circle avatar-xs" alt />\r
                  </a>\r
                </div>\r
                @if(grid.users[1]){\r
                <div class="avatar-group-item">\r
                  <a href="javascript: void(0);" class="d-inline-block">\r
                    <img src="{{grid.users[1]}}" class="rounded-circle avatar-xs" alt />\r
                  </a>\r
                </div>}@else if (grid.users[2]) {\r
                <div class="avatar-group-item">\r
                  <a href="javascript: void(0);" class="d-inline-block">\r
                    <img src="{{grid.users[2]}}" class="rounded-circle avatar-xs" alt />\r
                  </a>\r
                </div>}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="px-4 py-3 border-top">\r
          <ul class="list-inline mb-0">\r
            <li class="list-inline-item me-3">\r
              <span class="badge" [ngClass]="{ 'bg-success': grid.status === 'Completed',\r
                    'bg-warning': grid.status === 'Pending',\r
                    'bg-danger': grid.status === 'Delay' }">{{grid.status}}</span>\r
            </li>\r
            <li class="list-inline-item me-3" title="Due Date" tooltip="Due Date">\r
              <i class="bx bx-calendar me-1"></i>\r
              {{grid.date}}\r
            </li>\r
            <li class="list-inline-item me-3" title="Comments" tooltip="Comments">\r
              <i class="bx bx-comment-dots me-1"></i>\r
              {{grid.comment}}\r
            </li>\r
          </ul>\r
        </div>\r
      </div>\r
    </div>\r
    }\r
  </div>\r
\r
  <div class="row">\r
    <div class="col-lg-12">\r
\r
      <ul class="pagination justify-content-end mb-2 pagination-rounded justify-content-center p-2">\r
        <pagination class="pagination-wrap hstack gap-2" [totalItems]="returnedArray?.length" [itemsPerPage]="9" (pageChanged)="pageChanged($event)"></pagination>\r
      </ul>\r
    </div>\r
  </div>\r
  <!-- end row -->\r
</div>` }]
  }], () => [{ type: BsModalService }, { type: Store }, { type: UntypedFormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectgridComponent, { className: "ProjectgridComponent", filePath: "src/app/pages/projects/projectgrid/projectgrid.component.ts", lineNumber: 22 });
})();

// src/app/pages/projects/projectlist/projectlist.component.ts
var _c02 = (a0, a1, a2) => ({ "bg-success": a0, "bg-warning": a1, "bg-danger": a2 });
function ProjectlistComponent_For_36_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "a", 30);
    \u0275\u0275element(2, "img", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const project_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", \u0275\u0275interpolate(project_r1.users[1]), \u0275\u0275sanitizeUrl);
  }
}
function ProjectlistComponent_For_36_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "a", 37);
    \u0275\u0275text(2, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 37);
    \u0275\u0275text(4, "Another action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 37);
    \u0275\u0275text(6, "Something else here");
    \u0275\u0275elementEnd()();
  }
}
function ProjectlistComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "img", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "h5", 24)(5, "a", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 26);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 27);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "div", 28)(16, "div", 29)(17, "a", 30);
    \u0275\u0275element(18, "img", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(19, ProjectlistComponent_For_36_Conditional_19_Template, 3, 2, "div", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td")(21, "div", 32)(22, "a", 33);
    \u0275\u0275element(23, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, ProjectlistComponent_For_36_div_24_Template, 7, 0, "div", 35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const project_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", \u0275\u0275interpolate(project_r1.image), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(project_r1.text);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r1.subtext);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r1.date);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(10, _c02, project_r1.status === "Completed", project_r1.status === "Pending", project_r1.status === "Delay"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(project_r1.status);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", \u0275\u0275interpolate(project_r1.users[0]), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional(project_r1.users[1] ? 19 : -1);
  }
}
var ProjectlistComponent = class _ProjectlistComponent {
  constructor(store) {
    this.store = store;
    this.totalItems = 12;
    this.page = 1;
    this.endItem = 12;
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Projects" }, { label: "Projects List", active: true }];
    this.store.dispatch(fetchprojectData());
    this.store.select(selectData).subscribe((data) => {
      this.projectlist = data;
      this.returnedArray = data;
      this.projectlist = this.returnedArray.slice(0, 6);
    });
  }
  pageChanged(event) {
    const startItem = (event.page - 1) * event.itemsPerPage;
    this.endItem = event.page * event.itemsPerPage;
    this.projectlist = this.returnedArray.slice(startItem, this.endItem);
  }
  static {
    this.\u0275fac = function ProjectlistComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectlistComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectlistComponent, selectors: [["app-projectlist"]], standalone: false, decls: 41, vars: 3, consts: [[1, "container-fluid"], ["title", "Projects List", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-12"], [1, "card", "bg-transparent"], [1, "card-body"], [1, "row", "mb-2"], [1, "col-sm"], [1, "search-box", "me-2", "d-inline-block"], [1, "position-relative"], ["type", "text", "autocomplete", "off", "id", "searchTableList", "placeholder", "Search...", 1, "form-control"], [1, "bx", "bx-search-alt", "search-icon"], [1, "col-sm-auto"], [1, "text-sm-end"], ["routerLink", "/projects/create", "id", "addProject-btn", 1, "btn", "btn-success", "btn-rounded"], [1, "mdi", "mdi-plus", "me-1"], [1, ""], [1, "table-responsive"], ["id", "projectList-table", 1, "table", "project-list-table", "align-middle", "table-nowrap", "dt-responsive", "nowrap", "w-100", "table-borderless"], ["scope", "col", 2, "width", "100px"], ["scope", "col"], [1, "pagination", "pagination-rounded", "justify-content-center", "mt-2", "mb-5"], [1, "pagination-wrap", "hstack", "gap-2", 3, "pageChanged", "totalItems", "itemsPerPage"], ["alt", "", 1, "avatar-sm", 3, "src"], [1, "text-truncate", "font-size-14"], ["href", "javascript: void(0);", 1, "text-dark"], [1, "text-muted", "mb-0"], [1, "badge", 3, "ngClass"], [1, "avatar-group"], [1, "avatar-group-item"], ["href", "javascript: void(0);", 1, "d-inline-block"], ["alt", "", 1, "rounded-circle", "avatar-xs", 3, "src"], ["dropdown", "", "placement", "bottom-right", 1, "dropdown"], ["href", "javascript: void(0);", "dropdownToggle", "", 1, "dropdown-toggle", "card-drop"], [1, "mdi", "mdi-dots-horizontal", "font-size-18"], ["class", "dropdown-menu dropdown-menu-end", 4, "dropdownMenu"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript: void(0);", 1, "dropdown-item"]], template: function ProjectlistComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9);
        \u0275\u0275element(10, "input", 10)(11, "i", 11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 12)(13, "div", 13)(14, "a", 14);
        \u0275\u0275element(15, "i", 15);
        \u0275\u0275text(16, " Add New Project");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(17, "div", 16)(18, "div", 17)(19, "table", 18)(20, "thead")(21, "tr")(22, "th", 19);
        \u0275\u0275text(23, "#");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "th", 20);
        \u0275\u0275text(25, "Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "th", 20);
        \u0275\u0275text(27, "Due Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "th", 20);
        \u0275\u0275text(29, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "th", 20);
        \u0275\u0275text(31, "Team");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "th", 20);
        \u0275\u0275text(33, "Action");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "tbody");
        \u0275\u0275repeaterCreate(35, ProjectlistComponent_For_36_Template, 25, 14, "tr", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(37, "div", 2)(38, "div", 3)(39, "ul", 21)(40, "pagination", 22);
        \u0275\u0275listener("pageChanged", function ProjectlistComponent_Template_pagination_pageChanged_40_listener($event) {
          return ctx.pageChanged($event);
        });
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(34);
        \u0275\u0275repeater(ctx.projectlist);
        \u0275\u0275advance(5);
        \u0275\u0275property("totalItems", ctx.returnedArray == null ? null : ctx.returnedArray.length)("itemsPerPage", 6);
      }
    }, dependencies: [NgClass, RouterLink, BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective, PaginationComponent, PagetitleComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectlistComponent, [{
    type: Component,
    args: [{ selector: "app-projectlist", standalone: false, template: `<div class="container-fluid">\r
  <app-page-title title="Projects List" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
\r
  <div class="row">\r
    <div class="col-lg-12">\r
      <div class="card bg-transparent">\r
        <div class=" card-body">\r
          <div class=" row mb-2">\r
            <div class="col-sm">\r
              <div class="search-box me-2 d-inline-block">\r
                <div class="position-relative">\r
                  <input type="text" class="form-control" autocomplete="off" id="searchTableList" placeholder="Search...">\r
                  <i class="bx bx-search-alt search-icon"></i>\r
                </div>\r
              </div>\r
            </div>\r
            <!-- end col -->\r
            <div class="col-sm-auto">\r
              <div class="text-sm-end">\r
                <a routerLink="/projects/create" class="btn btn-success btn-rounded" id="addProject-btn"><i class="mdi mdi-plus me-1"></i> Add New Project</a>\r
              </div>\r
            </div>\r
            <!-- end col -->\r
          </div>\r
          <!-- end row -->\r
          <div class>\r
            <div class="table-responsive">\r
              <table class="table project-list-table align-middle table-nowrap dt-responsive nowrap w-100 table-borderless" id="projectList-table">\r
                <thead>\r
                  <tr>\r
                    <th scope="col" style="width: 100px">#</th>\r
                    <th scope="col">Projects</th>\r
                    <th scope="col">Due Date</th>\r
                    <th scope="col">Status</th>\r
                    <th scope="col">Team</th>\r
                    <th scope="col">Action</th>\r
                  </tr>\r
                </thead>\r
                <tbody>\r
                  @for(project of projectlist;track $index){\r
                  <tr>\r
                    <td>\r
                      <img src="{{project.image}}" alt class="avatar-sm" />\r
                    </td>\r
                    <td>\r
                      <h5 class="text-truncate font-size-14">\r
                        <a href="javascript: void(0);" class="text-dark">{{project.text}}</a>\r
                      </h5>\r
                      <p class="text-muted mb-0">{{project.subtext}}</p>\r
                    </td>\r
                    <td>{{project.date}}</td>\r
                    <td>\r
                      <span class="badge" [ngClass]="{ 'bg-success': project.status === 'Completed',\r
                    'bg-warning': project.status === 'Pending',\r
                    'bg-danger': project.status === 'Delay' }">{{project.status}}</span>\r
                    </td>\r
                    <td>\r
                      <div class="avatar-group">\r
                        <div class="avatar-group-item">\r
                          <a href="javascript: void(0);" class="d-inline-block">\r
                            <img src="{{project.users[0]}}" class="rounded-circle avatar-xs" alt />\r
                          </a>\r
                        </div>\r
                        @if(project.users[1]){\r
                        <div class="avatar-group-item">\r
                          <a href="javascript: void(0);" class="d-inline-block">\r
                            <img src="{{project.users[1]}}" class="rounded-circle avatar-xs" alt />\r
                          </a>\r
                        </div>\r
                        }\r
                      </div>\r
                    </td>\r
                    <td>\r
                      <div class="dropdown" dropdown placement="bottom-right">\r
                        <a href="javascript: void(0);" class="dropdown-toggle card-drop" dropdownToggle>\r
                          <i class="mdi mdi-dots-horizontal font-size-18"></i>\r
                        </a>\r
                        <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>\r
                          <a class="dropdown-item" href="javascript: void(0);">Action</a>\r
                          <a class="dropdown-item" href="javascript: void(0);">Another action</a>\r
                          <a class="dropdown-item" href="javascript: void(0);">Something else here</a>\r
                        </div>\r
                      </div>\r
                    </td>\r
                  </tr>}\r
                </tbody>\r
              </table>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
      <!-- end row -->\r
      <div class="row">\r
        <div class="col-lg-12">\r
          <ul class="pagination pagination-rounded justify-content-center mt-2 mb-5">\r
            <pagination class="pagination-wrap hstack gap-2" [totalItems]="returnedArray?.length" [itemsPerPage]="6" (pageChanged)="pageChanged($event)"></pagination>\r
          </ul>\r
        </div>\r
      </div>\r
      <!-- end row -->\r
\r
    </div>\r
  </div>\r
</div>` }]
  }], () => [{ type: Store }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectlistComponent, { className: "ProjectlistComponent", filePath: "src/app/pages/projects/projectlist/projectlist.component.ts", lineNumber: 18 });
})();

// src/app/pages/projects/overview/data.ts
var overviewBarChart = {
  chart: {
    height: 290,
    type: "bar",
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      columnWidth: "14%",
      endingShape: "rounded"
    }
  },
  dataLabels: {
    enabled: false
  },
  series: [{
    name: "Overview",
    data: [42, 56, 40, 64, 26, 42, 56, 35, 62]
  }],
  yaxis: {
    title: {
      text: "% (Percentage)"
    }
  },
  xaxis: {
    labels: {
      rotate: -90
    },
    categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    title: {
      text: "Week"
    }
  },
  colors: ["#556ee6"]
};

// src/app/pages/projects/overview/overview.component.ts
var OverviewComponent = class _OverviewComponent {
  constructor() {
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Projects" }, { label: "Projects Overview", active: true }];
    this.overviewBarChart = overviewBarChart;
  }
  static {
    this.\u0275fac = function OverviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OverviewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OverviewComponent, selectors: [["app-overview"]], standalone: false, decls: 247, vars: 9, consts: [[1, "container-fluid"], ["title", "Projects Overview", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-8"], [1, "card"], [1, "card-body"], [1, "d-flex"], [1, "flex-shrink-0", "me-4"], ["src", "assets/images/companies/img-1.png", "alt", "", 1, "avatar-sm"], [1, "flex-grow-1", "overflow-hidden"], [1, "text-truncate", "font-size-15"], [1, "text-muted"], [1, "font-size-15", "mt-4"], [1, "text-muted", "mt-4"], [1, "mdi", "mdi-chevron-right", "text-primary", "me-1"], [1, "row", "task-dates"], [1, "col-sm-4", "col-6"], [1, "mt-4"], [1, "font-size-14"], [1, "bx", "bx-calendar", "me-1", "text-primary"], [1, "text-muted", "mb-0"], [1, "bx", "bx-calendar-check", "me-1", "text-primary"], [1, "col-lg-4"], [1, "card-title", "mb-4"], [1, "table-responsive"], [1, "table", "align-middle", "table-nowrap"], [2, "width", "50px"], ["src", "assets/images/users/avatar-2.jpg", "alt", "", 1, "rounded-circle", "avatar-xs"], [1, "font-size-14", "m-0"], ["href", "", 1, "text-dark"], ["href", "javascript: void(0);", 1, "badge", "bg-primary-subtle", "text-primary", "font-size-11"], ["href", "javascript: void(0);", 1, "badge", "bg-primary-subtle", "text-primary", "font-size-11", "ms-1"], ["src", "assets/images/users/avatar-1.jpg", "alt", "", 1, "rounded-circle", "avatar-xs"], [1, "avatar-xs"], [1, "avatar-title", "rounded-circle", "bg-primary", "text-white", "font-size-16"], ["src", "assets/images/users/avatar-4.jpg", "alt", "", 1, "rounded-circle", "avatar-xs"], [1, "card-body", "pb-2"], ["dir", "ltr", 1, "apex-charts", 3, "series", "dataLabels", "chart", "xaxis", "colors", "yaxis", "plotOptions"], [1, "table", "table-nowrap", "align-middle", "table-hover", "mb-0"], [2, "width", "45px"], [1, "avatar-sm"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-24"], [1, "bx", "bxs-file-doc"], [1, "font-size-14", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark"], [1, "text-center"], [1, "bx", "bx-download", "h3", "m-0"], [1, "d-flex", "mb-4"], [1, "flex-shrink-0", "me-3"], ["alt", "", "src", "assets/images/users/avatar-2.jpg", 1, "d-flex-object", "rounded-circle", "avatar-xs"], [1, "flex-grow-1"], [1, "font-size-13", "mb-1"], [1, "text-muted", "mb-1"], [1, "ms-3"], ["href", "javascript: void(0);", 1, "text-primary"], ["alt", "", "src", "assets/images/users/avatar-3.jpg", 1, "d-flex-object", "rounded-circle", "avatar-xs"], ["href", "javascript: void(0);", 1, "text-success"], [1, "d-flex", "mt-3"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], [1, "text-center", "mt-4", "pt-2"], ["href", "javascript: void(0);", 1, "btn", "btn-primary", "btn-sm"]], template: function OverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        \u0275\u0275element(8, "img", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 9)(10, "h5", 10);
        \u0275\u0275text(11, "Back & White Dashboard UI");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p", 11);
        \u0275\u0275text(13, "Separate existence is a myth. For science, music, sport, etc.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "h5", 12);
        \u0275\u0275text(15, "Project Details :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "p", 11);
        \u0275\u0275text(17, "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 13)(19, "p");
        \u0275\u0275element(20, "i", 14);
        \u0275\u0275text(21, " To achieve this, it would be necessary");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "p");
        \u0275\u0275element(23, "i", 14);
        \u0275\u0275text(24, " Separate existence is a myth.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p");
        \u0275\u0275element(26, "i", 14);
        \u0275\u0275text(27, " If several languages coalesce");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 15)(29, "div", 16)(30, "div", 17)(31, "h5", 18);
        \u0275\u0275element(32, "i", 19);
        \u0275\u0275text(33, " Start Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "p", 20);
        \u0275\u0275text(35, "08 Sept, 2019");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "div", 16)(37, "div", 17)(38, "h5", 18);
        \u0275\u0275element(39, "i", 21);
        \u0275\u0275text(40, " Due Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "p", 20);
        \u0275\u0275text(42, "12 Oct, 2019");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(43, "div", 22)(44, "div", 4)(45, "div", 5)(46, "h4", 23);
        \u0275\u0275text(47, "Team Members");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 24)(49, "table", 25)(50, "tbody")(51, "tr")(52, "td", 26);
        \u0275\u0275element(53, "img", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "td")(55, "h5", 28)(56, "a", 29);
        \u0275\u0275text(57, "Daniel Canales");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(58, "td")(59, "div")(60, "a", 30);
        \u0275\u0275text(61, "Frontend");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "a", 31);
        \u0275\u0275text(63, "UI");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(64, "tr")(65, "td");
        \u0275\u0275element(66, "img", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "td")(68, "h5", 28)(69, "a", 29);
        \u0275\u0275text(70, "Jennifer Walker");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(71, "td")(72, "div")(73, "a", 30);
        \u0275\u0275text(74, "UI / UX");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(75, "tr")(76, "td")(77, "div", 33)(78, "span", 34);
        \u0275\u0275text(79, " C ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(80, "td")(81, "h5", 28)(82, "a", 29);
        \u0275\u0275text(83, "Carl Mackay");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(84, "td")(85, "div")(86, "a", 30);
        \u0275\u0275text(87, "Backend");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(88, "tr")(89, "td");
        \u0275\u0275element(90, "img", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "td")(92, "h5", 28)(93, "a", 29);
        \u0275\u0275text(94, "Janice Cole");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(95, "td")(96, "div")(97, "a", 30);
        \u0275\u0275text(98, "Frontend");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "a", 31);
        \u0275\u0275text(100, "UI");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(101, "tr")(102, "td")(103, "div", 33)(104, "span", 34);
        \u0275\u0275text(105, " T ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(106, "td")(107, "h5", 28)(108, "a", 29);
        \u0275\u0275text(109, "Tony Brafford");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(110, "td")(111, "div")(112, "a", 30);
        \u0275\u0275text(113, "Backend");
        \u0275\u0275elementEnd()()()()()()()()()()();
        \u0275\u0275elementStart(114, "div", 2)(115, "div", 22)(116, "div", 4)(117, "div", 36)(118, "h4", 23);
        \u0275\u0275text(119, "Overview");
        \u0275\u0275elementEnd();
        \u0275\u0275element(120, "apx-chart", 37);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(121, "div", 22)(122, "div", 4)(123, "div", 5)(124, "h4", 23);
        \u0275\u0275text(125, "Attached Files");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "div", 24)(127, "table", 38)(128, "tbody")(129, "tr")(130, "td", 39)(131, "div", 40)(132, "span", 41);
        \u0275\u0275element(133, "i", 42);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(134, "td")(135, "h5", 43)(136, "a", 44);
        \u0275\u0275text(137, "Back & White Landing.Zip");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(138, "small");
        \u0275\u0275text(139, "Size : 3.25 MB");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(140, "td")(141, "div", 45)(142, "a", 44);
        \u0275\u0275element(143, "i", 46);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(144, "tr")(145, "td")(146, "div", 40)(147, "span", 41);
        \u0275\u0275element(148, "i", 42);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(149, "td")(150, "h5", 43)(151, "a", 44);
        \u0275\u0275text(152, "Back & White Admin.Zip");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(153, "small");
        \u0275\u0275text(154, "Size : 3.15 MB");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(155, "td")(156, "div", 45)(157, "a", 44);
        \u0275\u0275element(158, "i", 46);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(159, "tr")(160, "td")(161, "div", 40)(162, "span", 41);
        \u0275\u0275element(163, "i", 42);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(164, "td")(165, "h5", 43)(166, "a", 44);
        \u0275\u0275text(167, "Back & White Logo.Zip");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(168, "small");
        \u0275\u0275text(169, "Size : 2.02 MB");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(170, "td")(171, "div", 45)(172, "a", 44);
        \u0275\u0275element(173, "i", 46);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(174, "tr")(175, "td")(176, "div", 40)(177, "span", 41);
        \u0275\u0275element(178, "i", 42);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(179, "td")(180, "h5", 18)(181, "a", 44);
        \u0275\u0275text(182, "Veltrix admin.Zip");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(183, "small");
        \u0275\u0275text(184, "Size : 2.25 MB");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(185, "td")(186, "div", 45)(187, "a", 44);
        \u0275\u0275element(188, "i", 46);
        \u0275\u0275elementEnd()()()()()()()()()();
        \u0275\u0275elementStart(189, "div", 22)(190, "div", 4)(191, "div", 5)(192, "h4", 23);
        \u0275\u0275text(193, "Comments");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(194, "div", 47)(195, "div", 48);
        \u0275\u0275element(196, "img", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(197, "div", 50)(198, "h5", 51);
        \u0275\u0275text(199, "David Lambert");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(200, "p", 52);
        \u0275\u0275text(201, " Separate existence is a myth. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(202, "div", 53)(203, "a", 54);
        \u0275\u0275text(204, "Reply");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(205, "div", 47)(206, "div", 48);
        \u0275\u0275element(207, "img", 55);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(208, "div", 50)(209, "h5", 51);
        \u0275\u0275text(210, "Steve Foster");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(211, "p", 52)(212, "a", 56);
        \u0275\u0275text(213, "@Henry");
        \u0275\u0275elementEnd();
        \u0275\u0275text(214, " To an English person it will like simplified ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(215, "div", 57)(216, "div", 48)(217, "div", 33)(218, "span", 58);
        \u0275\u0275text(219, " J ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(220, "div", 50)(221, "h5", 51);
        \u0275\u0275text(222, "Jeffrey Walker");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(223, "p", 52);
        \u0275\u0275text(224, " as a skeptical Cambridge friend ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(225, "div", 53)(226, "a", 54);
        \u0275\u0275text(227, "Reply");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(228, "div", 53)(229, "a", 54);
        \u0275\u0275text(230, "Reply");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(231, "div", 47)(232, "div", 48)(233, "div", 33)(234, "span", 58);
        \u0275\u0275text(235, " S ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(236, "div", 50)(237, "h5", 51);
        \u0275\u0275text(238, "Steven Carlson");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(239, "p", 52);
        \u0275\u0275text(240, " Separate existence is a myth. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(241, "div", 53)(242, "a", 54);
        \u0275\u0275text(243, "Reply");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(244, "div", 59)(245, "a", 60);
        \u0275\u0275text(246, "View more");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(119);
        \u0275\u0275property("series", ctx.overviewBarChart.series)("dataLabels", ctx.overviewBarChart.dataLabels)("chart", ctx.overviewBarChart.chart)("xaxis", ctx.overviewBarChart.xaxis)("colors", ctx.overviewBarChart.colors)("yaxis", ctx.overviewBarChart.yaxis)("xaxis", ctx.overviewBarChart.xaxis)("plotOptions", ctx.overviewBarChart.plotOptions);
      }
    }, dependencies: [ChartComponent, PagetitleComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverviewComponent, [{
    type: Component,
    args: [{ selector: "app-overview", standalone: false, template: '<div class="container-fluid">\r\n  <!-- start page title -->\r\n  <app-page-title title="Projects Overview" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r\n  <!-- end page title -->\r\n\r\n  <div class="row">\r\n    <div class="col-lg-8">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <div class="d-flex">\r\n            <div class="flex-shrink-0 me-4">\r\n              <img src="assets/images/companies/img-1.png" alt="" class="avatar-sm">\r\n            </div>\r\n\r\n            <div class="flex-grow-1 overflow-hidden">\r\n              <h5 class="text-truncate font-size-15">Back & White Dashboard UI</h5>\r\n              <p class="text-muted">Separate existence is a myth. For science, music, sport, etc.</p>\r\n            </div>\r\n          </div>\r\n\r\n          <h5 class="font-size-15 mt-4">Project Details :</h5>\r\n\r\n          <p class="text-muted">To an English person, it will seem like simplified English, as a skeptical Cambridge\r\n            friend of mine told me what Occidental is. The European languages are members of the same family. Their\r\n            separate existence is a myth. For science, music, sport, etc,</p>\r\n\r\n          <div class="text-muted mt-4">\r\n            <p><i class="mdi mdi-chevron-right text-primary me-1"></i> To achieve this, it would be necessary</p>\r\n            <p><i class="mdi mdi-chevron-right text-primary me-1"></i> Separate existence is a myth.</p>\r\n            <p><i class="mdi mdi-chevron-right text-primary me-1"></i> If several languages coalesce</p>\r\n          </div>\r\n\r\n          <div class="row task-dates">\r\n            <div class="col-sm-4 col-6">\r\n              <div class="mt-4">\r\n                <h5 class="font-size-14"><i class="bx bx-calendar me-1 text-primary"></i> Start Date</h5>\r\n                <p class="text-muted mb-0">08 Sept, 2019</p>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="col-sm-4 col-6">\r\n              <div class="mt-4">\r\n                <h5 class="font-size-14"><i class="bx bx-calendar-check me-1 text-primary"></i> Due Date</h5>\r\n                <p class="text-muted mb-0">12 Oct, 2019</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- end col -->\r\n\r\n    <div class="col-lg-4">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title mb-4">Team Members</h4>\r\n\r\n          <div class="table-responsive">\r\n            <table class="table align-middle table-nowrap">\r\n              <tbody>\r\n                <tr>\r\n                  <td style="width: 50px;"><img src="assets/images/users/avatar-2.jpg" class="rounded-circle avatar-xs"\r\n                      alt=""></td>\r\n                  <td>\r\n                    <h5 class="font-size-14 m-0"><a href="" class="text-dark">Daniel Canales</a></h5>\r\n                  </td>\r\n                  <td>\r\n                    <div>\r\n                      <a href="javascript: void(0);"\r\n                        class="badge bg-primary-subtle text-primary font-size-11">Frontend</a>\r\n                      <a href="javascript: void(0);"\r\n                        class="badge bg-primary-subtle text-primary font-size-11 ms-1">UI</a>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td><img src="assets/images/users/avatar-1.jpg" class="rounded-circle avatar-xs" alt=""></td>\r\n                  <td>\r\n                    <h5 class="font-size-14 m-0"><a href="" class="text-dark">Jennifer Walker</a></h5>\r\n                  </td>\r\n                  <td>\r\n                    <div>\r\n                      <a href="javascript: void(0);" class="badge bg-primary-subtle text-primary font-size-11">UI /\r\n                        UX</a>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                    <div class="avatar-xs">\r\n                      <span class="avatar-title rounded-circle bg-primary text-white font-size-16">\r\n                        C\r\n                      </span>\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <h5 class="font-size-14 m-0"><a href="" class="text-dark">Carl Mackay</a></h5>\r\n                  </td>\r\n                  <td>\r\n                    <div>\r\n                      <a href="javascript: void(0);"\r\n                        class="badge bg-primary-subtle text-primary font-size-11">Backend</a>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td><img src="assets/images/users/avatar-4.jpg" class="rounded-circle avatar-xs" alt=""></td>\r\n                  <td>\r\n                    <h5 class="font-size-14 m-0"><a href="" class="text-dark">Janice Cole</a></h5>\r\n                  </td>\r\n                  <td>\r\n                    <div>\r\n                      <a href="javascript: void(0);"\r\n                        class="badge bg-primary-subtle text-primary font-size-11">Frontend</a>\r\n                      <a href="javascript: void(0);"\r\n                        class="badge bg-primary-subtle text-primary font-size-11 ms-1">UI</a>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                    <div class="avatar-xs">\r\n                      <span class="avatar-title rounded-circle bg-primary text-white font-size-16">\r\n                        T\r\n                      </span>\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <h5 class="font-size-14 m-0"><a href="" class="text-dark">Tony Brafford</a></h5>\r\n                  </td>\r\n                  <td>\r\n                    <div>\r\n                      <a href="javascript: void(0);"\r\n                        class="badge bg-primary-subtle text-primary font-size-11">Backend</a>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- end col -->\r\n  </div>\r\n  <!-- end row -->\r\n\r\n  <div class="row">\r\n    <div class="col-lg-4">\r\n      <div class="card">\r\n        <div class="card-body pb-2">\r\n          <h4 class="card-title mb-4">Overview</h4>\r\n          <apx-chart dir="ltr" class="apex-charts" [series]="overviewBarChart.series"\r\n            [dataLabels]="overviewBarChart.dataLabels" [chart]="overviewBarChart.chart" [xaxis]="overviewBarChart.xaxis"\r\n            [colors]="overviewBarChart.colors" [yaxis]="overviewBarChart.yaxis" [xaxis]="overviewBarChart.xaxis"\r\n            [plotOptions]="overviewBarChart.plotOptions">\r\n          </apx-chart>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- end col -->\r\n\r\n    <div class="col-lg-4">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title mb-4">Attached Files</h4>\r\n          <div class="table-responsive">\r\n            <table class="table table-nowrap align-middle table-hover mb-0">\r\n              <tbody>\r\n                <tr>\r\n                  <td style="width: 45px;">\r\n                    <div class="avatar-sm">\r\n                      <span class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-24">\r\n                        <i class="bx bxs-file-doc"></i>\r\n                      </span>\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <h5 class="font-size-14 mb-1"><a href="javascript: void(0);" class="text-dark">Back & White\r\n                        Landing.Zip</a></h5>\r\n                    <small>Size : 3.25 MB</small>\r\n                  </td>\r\n                  <td>\r\n                    <div class="text-center">\r\n                      <a href="javascript: void(0);" class="text-dark"><i class="bx bx-download h3 m-0"></i></a>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                    <div class="avatar-sm">\r\n                      <span class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-24">\r\n                        <i class="bx bxs-file-doc"></i>\r\n                      </span>\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <h5 class="font-size-14 mb-1"><a href="javascript: void(0);" class="text-dark">Back & White\r\n                        Admin.Zip</a></h5>\r\n                    <small>Size : 3.15 MB</small>\r\n                  </td>\r\n                  <td>\r\n                    <div class="text-center">\r\n                      <a href="javascript: void(0);" class="text-dark"><i class="bx bx-download h3 m-0"></i></a>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                    <div class="avatar-sm">\r\n                      <span class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-24">\r\n                        <i class="bx bxs-file-doc"></i>\r\n                      </span>\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <h5 class="font-size-14 mb-1"><a href="javascript: void(0);" class="text-dark">Back & White\r\n                        Logo.Zip</a></h5>\r\n                    <small>Size : 2.02 MB</small>\r\n                  </td>\r\n                  <td>\r\n                    <div class="text-center">\r\n                      <a href="javascript: void(0);" class="text-dark"><i class="bx bx-download h3 m-0"></i></a>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                    <div class="avatar-sm">\r\n                      <span class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-24">\r\n                        <i class="bx bxs-file-doc"></i>\r\n                      </span>\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <h5 class="font-size-14"><a href="javascript: void(0);" class="text-dark">Veltrix admin.Zip</a></h5>\r\n                    <small>Size : 2.25 MB</small>\r\n                  </td>\r\n                  <td>\r\n                    <div class="text-center">\r\n                      <a href="javascript: void(0);" class="text-dark"><i class="bx bx-download h3 m-0"></i></a>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- end col -->\r\n\r\n    <div class="col-lg-4">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title mb-4">Comments</h4>\r\n\r\n          <div class="d-flex mb-4">\r\n            <div class="flex-shrink-0 me-3">\r\n              <img class="d-flex-object rounded-circle avatar-xs" alt="" src="assets/images/users/avatar-2.jpg">\r\n            </div>\r\n            <div class="flex-grow-1">\r\n              <h5 class="font-size-13 mb-1">David Lambert</h5>\r\n              <p class="text-muted mb-1">\r\n                Separate existence is a myth.\r\n              </p>\r\n            </div>\r\n            <div class="ms-3">\r\n              <a href="javascript: void(0);" class="text-primary">Reply</a>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="d-flex mb-4">\r\n            <div class="flex-shrink-0 me-3">\r\n              <img class="d-flex-object rounded-circle avatar-xs" alt="" src="assets/images/users/avatar-3.jpg">\r\n            </div>\r\n            <div class="flex-grow-1">\r\n              <h5 class="font-size-13 mb-1">Steve Foster</h5>\r\n              <p class="text-muted mb-1">\r\n                <a href="javascript: void(0);" class="text-success">&#64;Henry</a>\r\n                To an English person it will like simplified\r\n              </p>\r\n              <div class="d-flex mt-3">\r\n                <div class="flex-shrink-0 me-3">\r\n                  <div class="avatar-xs">\r\n                    <span class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-16">\r\n                      J\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class="flex-grow-1">\r\n                  <h5 class="font-size-13 mb-1">Jeffrey Walker</h5>\r\n                  <p class="text-muted mb-1">\r\n                    as a skeptical Cambridge friend\r\n                  </p>\r\n                </div>\r\n                <div class="ms-3">\r\n                  <a href="javascript: void(0);" class="text-primary">Reply</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="ms-3">\r\n              <a href="javascript: void(0);" class="text-primary">Reply</a>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="d-flex mb-4">\r\n            <div class="flex-shrink-0 me-3">\r\n              <div class="avatar-xs">\r\n                <span class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-16">\r\n                  S\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class="flex-grow-1">\r\n              <h5 class="font-size-13 mb-1">Steven Carlson</h5>\r\n              <p class="text-muted mb-1">\r\n                Separate existence is a myth.\r\n              </p>\r\n            </div>\r\n            <div class="ms-3">\r\n              <a href="javascript: void(0);" class="text-primary">Reply</a>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="text-center mt-4 pt-2">\r\n            <a href="javascript: void(0);" class="btn btn-primary btn-sm">View more</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- end col -->\r\n  </div>\r\n  <!-- end row -->\r\n</div>\r\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OverviewComponent, { className: "OverviewComponent", filePath: "src/app/pages/projects/overview/overview.component.ts", lineNumber: 17 });
})();

// src/app/pages/projects/create/data.ts
var member = [
  {
    "id": 1,
    "name": "Tommie Metzler",
    "avatar": "assets/images/users/avatar-2.jpg",
    "checked": "0"
  },
  {
    "id": 2,
    "name": "Paul Barone",
    "avatar": "assets/images/users/avatar-3.jpg",
    "checked": "0"
  },
  {
    "id": 3,
    "name": "Chris Lucas",
    "avatar": "assets/images/users/avatar-4.jpg",
    "checked": "0"
  },
  {
    "id": 4,
    "name": "Shirley North",
    "avatar": "assets/images/users/avatar-1.jpg",
    "checked": "0"
  },
  {
    "id": 5,
    "name": "Patricia Pierce",
    "avatar": "assets/images/users/avatar-5.jpg",
    "checked": "0"
  },
  {
    "id": 6,
    "name": "William Max",
    "avatar": "assets/images/users/avatar-6.jpg",
    "checked": "0"
  },
  {
    "id": 7,
    "name": "Johnnie Walton",
    "avatar": "assets/images/users/avatar-7.jpg",
    "checked": "0"
  },
  {
    "id": 8,
    "name": "Miriam Crum",
    "avatar": "assets/images/users/avatar-8.jpg",
    "checked": "0"
  }
];

// src/app/pages/projects/create/create.component.ts
var _c03 = ["dp"];
var _c1 = (a0) => ({ "active": a0 });
function CreateComponent_Conditional_36_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 50);
    \u0275\u0275element(1, "img", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275interpolate(data_r1.avatar), \u0275\u0275sanitizeUrl);
  }
}
function CreateComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275repeaterCreate(1, CreateComponent_Conditional_36_For_2_Template, 2, 2, "a", 50, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.assignList);
  }
}
function CreateComponent_div_45_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 55);
    \u0275\u0275listener("click", function CreateComponent_div_45_For_4_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.slectMember(ctx_r1.i));
    });
    \u0275\u0275elementStart(2, "div", 56);
    \u0275\u0275element(3, "img", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 58);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c1, data_r4.checked == "1"));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", \u0275\u0275interpolate(data_r4.avatar), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4.name);
  }
}
function CreateComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "ngx-simplebar", 53)(2, "ul", 54);
    \u0275\u0275repeaterCreate(3, CreateComponent_div_45_For_4_Template, 6, 6, "li", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.assignMember);
  }
}
function CreateComponent_Conditional_50_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 64);
  }
  if (rf & 2) {
    const file_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", file_r6.dataURL, \u0275\u0275sanitizeUrl);
  }
}
function CreateComponent_Conditional_50_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 64);
  }
  if (rf & 2) {
    const file_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", file_r6, \u0275\u0275sanitizeUrl);
  }
}
function CreateComponent_Conditional_50_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const file_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(file_r6.name);
  }
}
function CreateComponent_Conditional_50_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const file_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(file_r6.size);
  }
}
function CreateComponent_Conditional_50_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 59)(1, "div", 60)(2, "div", 61)(3, "div", 62)(4, "div", 63);
    \u0275\u0275conditionalCreate(5, CreateComponent_Conditional_50_For_2_Conditional_5_Template, 1, 1, "img", 64)(6, CreateComponent_Conditional_50_For_2_Conditional_6_Template, 1, 1, "img", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 58)(8, "div", 65);
    \u0275\u0275conditionalCreate(9, CreateComponent_Conditional_50_For_2_Conditional_9_Template, 2, 1, "h5", 66);
    \u0275\u0275conditionalCreate(10, CreateComponent_Conditional_50_For_2_Conditional_10_Template, 2, 1, "p", 67);
    \u0275\u0275element(11, "strong", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 69)(13, "button", 70);
    \u0275\u0275listener("click", function CreateComponent_Conditional_50_For_2_Template_button_click_13_listener() {
      const file_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeFile(file_r6));
    });
    \u0275\u0275text(14, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const file_r6 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275conditional(file_r6.dataURL ? 5 : 6);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(file_r6.name ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(file_r6.size ? 10 : -1);
  }
}
function CreateComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 34);
    \u0275\u0275repeaterCreate(1, CreateComponent_Conditional_50_For_2_Template, 15, 3, "li", 59, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.uploadedFiles);
  }
}
var CreateComponent = class _CreateComponent {
  constructor() {
    this.files = [];
    this.dateRangeSelected = new EventEmitter();
    this.assignList = [];
    this.dropzoneConfig = {
      clickable: true,
      addRemoveLinks: true,
      previewsContainer: false
    };
    this.uploadedFiles = [];
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Projects" }, { label: "Create New", active: true }];
    this.selected = "";
    this.hidden = true;
    this.assignMember = member;
  }
  onSelect(event) {
    this.files.push(...event.addedFiles);
    let file = event.addedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result;
      setTimeout(() => {
      }, 100);
    };
    reader.readAsDataURL(file);
  }
  slectMember(id) {
    if (this.assignMember[id].checked == "0") {
      this.assignMember[id].checked = "1";
      this.assignList.push(this.assignMember[id]);
    } else {
      this.assignMember[id].checked = "0";
      this.assignList.pop(this.assignMember[id]);
    }
  }
  fileChange(event) {
    let fileList = event.target;
    let file = fileList.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageURLs = reader.result;
      document.querySelectorAll("#projectlogo-img").forEach((element) => {
        element.src = this.imageURLs;
      });
    };
  }
  // File Upload
  onUploadSuccess(event) {
    setTimeout(() => {
      this.uploadedFiles.push(event[0]);
    }, 100);
  }
  // File Remove
  removeFile(event) {
    this.uploadedFiles.splice(this.uploadedFiles.indexOf(event), 1);
  }
  static {
    this.\u0275fac = function CreateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CreateComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateComponent, selectors: [["app-create"]], viewQuery: function CreateComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c03, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.datePicker = _t.first);
      }
    }, inputs: { fromDate: "fromDate", toDate: "toDate" }, outputs: { dateRangeSelected: "dateRangeSelected" }, standalone: false, decls: 89, vars: 5, consts: [[1, "container-fluid"], [1, "row"], [1, "col-lg-8"], [1, "card"], [1, "card-body"], ["type", "hidden", "id", "formAction", "name", "formAction", "value", "add", 1, "form-control"], ["type", "hidden", "id", "project-id-input", 1, "form-control"], [1, "mb-3"], ["for", "projectname-input", 1, "form-label"], ["id", "projectname-input", "name", "projectname-input", "type", "text", "placeholder", "Enter project name...", "required", "", 1, "form-control"], [1, "invalid-feedback"], [1, "form-label"], [1, "text-center"], [1, "position-relative", "d-inline-block"], [1, "position-absolute", "bottom-0", "end-0"], ["for", "project-image-input", "data-bs-toggle", "tooltip", "data-bs-placement", "right", "title", "Select Image", 1, "mb-0"], [1, "avatar-xs"], [1, "avatar-title", "bg-light", "border", "rounded-circle", "text-muted", "cursor-pointer", "shadow", "font-size-16"], [1, "bx", "bxs-image-alt"], ["value", "", "id", "project-image-input", "type", "file", "accept", "image/png, image/gif, image/jpeg", 1, "form-control", "d-none", 3, "change"], [1, "avatar-lg"], [1, "avatar-title", "bg-light", "rounded-circle"], ["src", "", "id", "projectlogo-img", 1, "avatar-md", "h-auto", "rounded-circle"], ["for", "projectdesc-input", 1, "form-label"], ["id", "projectdesc-input", "rows", "3", "placeholder", "Enter project description...", "required", "", 1, "form-control"], [1, "mb-3", "position-relative"], ["for", "task-assign-input", 1, "form-label"], ["id", "assignee-member", 1, "avatar-group", "justify-content-center"], ["id", "select-element", "dropdown", "", 1, "select-element"], ["dropdownToggle", "", "type", "button", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "false", 1, "btn", "btn-light", "w-100", "d-flex", "justify-content-between"], ["id", "total-assignee", 1, "mx-1"], [1, "mdi", "mdi-chevron-down"], ["class", "dropdown-menu w-100", 4, "dropdownMenu"], [1, "dropzone", 3, "success", "config", "message"], ["id", "dropzone-preview", 1, "list-unstyled", "mb-0"], [1, "col-lg-4"], [1, "card-title", "mb-3"], ["for", "project-status-input", 1, "form-label"], ["id", "project-status-input", 1, "form-select"], ["value", "Completed"], ["value", "Inprogress", "selected", ""], ["value", "Delay"], ["for", "project-visibility-input", 1, "form-label"], ["id", "project-visibility-input", 1, "form-select"], ["value", "Private"], ["value", "Public"], ["value", "Team"], ["type", "text", "mwlFlatpickr", "", 1, "form-control", "flatpickr-input"], [1, "text-end", "mb-4"], ["type", "submit", 1, "btn", "btn-primary"], ["href", "javascript: void(0);", "data-img", "assets/images/users/avatar-1.jpg", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "aria-label", "Shirley North", "data-bs-original-title", "Shirley North", 1, "avatar-group-item", "mb-2"], ["alt", "", 1, "rounded-circle", "avatar-xs", 3, "src"], [1, "dropdown-menu", "w-100"], [2, "max-height", "172px"], [1, "list-unstyled", "mb-0", "assignto-list"], ["href", "javascript:void(0);", 1, "dropdown-item", "d-flex", "align-items-center", 3, "click", "ngClass"], [1, "avatar-xs", "flex-shrink-0", "me-2"], ["alt", "", 1, "img-fluid", "rounded-circle", 3, "src"], [1, "flex-grow-1"], ["id", "dropzone-preview-list", 1, "mt-2"], [1, "border", "rounded"], [1, "d-flex", "p-2"], [1, "flex-shrink-0", "me-3"], [1, "avatar-sm", "bg-light", "rounded"], ["alt", "Dropzone-Image", 1, "img-fluid", "rounded", "d-block", 3, "src"], [1, "pt-1"], [1, "fs-md", "mb-1"], [1, "fs-sm", "text-muted", "mb-0"], ["data-dz-errormessage", "", 1, "error", "text-danger"], [1, "flex-shrink-0", "ms-3"], [1, "btn", "btn-sm", "btn-danger", 3, "click"]], template: function CreateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "input", 5)(6, "input", 6);
        \u0275\u0275elementStart(7, "div", 7)(8, "label", 8);
        \u0275\u0275text(9, "Project Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "input", 9);
        \u0275\u0275elementStart(11, "div", 10);
        \u0275\u0275text(12, "Please enter a project name.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 7)(14, "label", 11);
        \u0275\u0275text(15, "Project Image");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "label", 15)(20, "div", 16)(21, "div", 17);
        \u0275\u0275element(22, "i", 18);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "input", 19);
        \u0275\u0275listener("change", function CreateComponent_Template_input_change_23_listener($event) {
          return ctx.fileChange($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 20)(25, "div", 21);
        \u0275\u0275element(26, "img", 22);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(27, "div", 7)(28, "label", 23);
        \u0275\u0275text(29, "Project Description");
        \u0275\u0275elementEnd();
        \u0275\u0275element(30, "textarea", 24);
        \u0275\u0275elementStart(31, "div", 10);
        \u0275\u0275text(32, "Please enter a project description.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 25)(34, "label", 26);
        \u0275\u0275text(35, "Assigned To");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(36, CreateComponent_Conditional_36_Template, 3, 0, "div", 27);
        \u0275\u0275elementStart(37, "div", 28)(38, "button", 29)(39, "span");
        \u0275\u0275text(40, "Assigned To");
        \u0275\u0275elementStart(41, "b", 30);
        \u0275\u0275text(42);
        \u0275\u0275elementEnd();
        \u0275\u0275text(43, "Members");
        \u0275\u0275elementEnd();
        \u0275\u0275element(44, "i", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275template(45, CreateComponent_div_45_Template, 5, 0, "div", 32);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div")(47, "label", 11);
        \u0275\u0275text(48, "Attached Files");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "dropzone", 33);
        \u0275\u0275listener("success", function CreateComponent_Template_dropzone_success_49_listener($event) {
          return ctx.onUploadSuccess($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(50, CreateComponent_Conditional_50_Template, 3, 0, "ul", 34);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(51, "div", 35)(52, "div", 3)(53, "div", 4)(54, "h5", 36);
        \u0275\u0275text(55, "Publish");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 7)(57, "label", 37);
        \u0275\u0275text(58, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "select", 38)(60, "option", 39);
        \u0275\u0275text(61, "Completed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "option", 40);
        \u0275\u0275text(63, "Inprogress");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "option", 41);
        \u0275\u0275text(65, "Delay");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "div", 10);
        \u0275\u0275text(67, "Please select project status.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "div")(69, "label", 42);
        \u0275\u0275text(70, "Visibility");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "select", 43)(72, "option", 44);
        \u0275\u0275text(73, "Private");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "option", 45);
        \u0275\u0275text(75, "Public");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "option", 46);
        \u0275\u0275text(77, "Team");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(78, "div", 3)(79, "div", 4)(80, "h5", 36);
        \u0275\u0275text(81, "Due Date");
        \u0275\u0275elementEnd();
        \u0275\u0275element(82, "input", 47);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "div", 10);
        \u0275\u0275text(84, "Please select due date.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(85, "div", 2)(86, "div", 48)(87, "button", 49);
        \u0275\u0275text(88, "Create Project");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(36);
        \u0275\u0275conditional(ctx.assignList ? 36 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.assignList == null ? null : ctx.assignList.length);
        \u0275\u0275advance(7);
        \u0275\u0275property("config", ctx.dropzoneConfig)("message", "Drop files here or click to upload.");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.uploadedFiles ? 50 : -1);
      }
    }, dependencies: [NgClass, BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective, NgSelectOption, \u0275NgSelectMultipleOption, SimplebarAngularComponent, FlatpickrDirective, DropzoneComponent], styles: ["\n\n.custom-day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n.custom-day.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n.custom-day.range[_ngcontent-%COMP%], \n.custom-day[_ngcontent-%COMP%]:hover {\n  background-color: #556ee6;\n  color: white;\n}\n.custom-day.faded[_ngcontent-%COMP%] {\n  background-color: #556ee6;\n}\n/*# sourceMappingURL=create.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateComponent, [{
    type: Component,
    args: [{ selector: "app-create", standalone: false, template: `<div class="container-fluid">\r
    <div class="row">\r
        <div class="col-lg-8">\r
            <div class="card">\r
                <div class="card-body">\r
                    <input type="hidden" class="form-control" id="formAction" name="formAction" value="add">\r
                    <input type="hidden" class="form-control" id="project-id-input">\r
                    <div class="mb-3">\r
                        <label for="projectname-input" class="form-label">Project Name</label>\r
\r
                        <input id="projectname-input" name="projectname-input" type="text" class="form-control" placeholder="Enter project name..." required>\r
                        <div class="invalid-feedback">Please enter a project name.</div>\r
                    </div>\r
                    <div class="mb-3">\r
                        <label class="form-label">Project Image</label>\r
\r
                        <div class="text-center">\r
                            <div class="position-relative d-inline-block">\r
                                <div class="position-absolute bottom-0 end-0">\r
                                    <label for="project-image-input" class="mb-0" data-bs-toggle="tooltip" data-bs-placement="right" title="Select Image">\r
                                        <div class="avatar-xs">\r
                                            <div class="avatar-title bg-light border rounded-circle text-muted cursor-pointer shadow font-size-16">\r
                                                <i class='bx bxs-image-alt'></i>\r
                                            </div>\r
                                        </div>\r
                                    </label>\r
                                    <input class="form-control d-none" value="" id="project-image-input" type="file" accept="image/png, image/gif, image/jpeg" (change)="fileChange($event)">\r
                                </div>\r
                                <div class="avatar-lg">\r
                                    <div class="avatar-title bg-light rounded-circle">\r
                                        <img src="" id="projectlogo-img" class="avatar-md h-auto rounded-circle" />\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                    <div class="mb-3">\r
                        <label for="projectdesc-input" class="form-label">Project Description</label>\r
                        <textarea class="form-control" id="projectdesc-input" rows="3" placeholder="Enter project description..." required></textarea>\r
                        <div class="invalid-feedback">Please enter a project description.</div>\r
                    </div>\r
                    <div class="mb-3 position-relative">\r
                        <label for="task-assign-input" class="form-label">Assigned To</label>\r
                        @if(assignList){\r
                        <div class="avatar-group justify-content-center" id="assignee-member">\r
                            @for(data of assignList;track $index){\r
                            <a href="javascript: void(0);" class="avatar-group-item mb-2" data-img="assets/images/users/avatar-1.jpg" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Shirley North" data-bs-original-title="Shirley North">\r
                                <img src="{{data.avatar}}" alt="" class="rounded-circle avatar-xs">\r
                            </a>\r
                            }\r
                        </div>}\r
                        <div class="select-element" id="select-element" dropdown>\r
                            <button class="btn btn-light w-100 d-flex justify-content-between" dropdownToggle type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">\r
                                <span>Assigned To<b id="total-assignee" class="mx-1">{{assignList?.length}}</b>Members</span> <i class="mdi mdi-chevron-down"></i>\r
                            </button>\r
                            <div class="dropdown-menu w-100" *dropdownMenu>\r
                                <ngx-simplebar style="max-height: 172px">\r
                                    <ul class="list-unstyled mb-0 assignto-list">\r
                                        @for(data of assignMember;track $index){\r
                                        <li>\r
                                            <a class="dropdown-item d-flex align-items-center" [ngClass]="{'active':data.checked == '1'}" href="javascript:void(0);" (click)="slectMember(i)">\r
                                                <div class="avatar-xs flex-shrink-0 me-2">\r
                                                    <img src="{{data.avatar}}" alt="" class="img-fluid rounded-circle" />\r
                                                </div>\r
                                                <div class="flex-grow-1">{{data.name}}</div>\r
                                            </a>\r
                                        </li>}\r
                                    </ul>\r
                                </ngx-simplebar>\r
                            </div>\r
                        </div>\r
                    </div>\r
                    <div>\r
                        <label class="form-label">Attached Files</label>\r
\r
                        <dropzone class="dropzone" [config]="dropzoneConfig" [message]="'Drop files here or click to upload.'" (success)="onUploadSuccess($event)">\r
                        </dropzone>\r
                        @if(uploadedFiles){\r
                        <ul class="list-unstyled mb-0" id="dropzone-preview">\r
                            @for(file of uploadedFiles;track $index){\r
                            <li class="mt-2" id="dropzone-preview-list">\r
                                <!-- This is used as the file preview template -->\r
                                <div class="border rounded">\r
                                    <div class="d-flex p-2">\r
                                        <div class="flex-shrink-0 me-3">\r
                                            <div class="avatar-sm bg-light rounded">\r
                                                @if(file.dataURL){\r
                                                <img class="img-fluid rounded d-block" [src]="file.dataURL" alt="Dropzone-Image" />\r
                                                }@else {\r
                                                <img class="img-fluid rounded d-block" [src]="file" alt="Dropzone-Image" />\r
                                                }\r
                                            </div>\r
                                        </div>\r
                                        <div class="flex-grow-1">\r
                                            <div class="pt-1">\r
                                                @if(file.name){\r
                                                <h5 class="fs-md mb-1">{{ file.name }}</h5>\r
                                                }\r
                                                @if(file.size){\r
                                                <p class="fs-sm text-muted mb-0">{{ file.size }}</p>\r
                                                }\r
                                                <strong class="error text-danger" data-dz-errormessage></strong>\r
                                            </div>\r
                                        </div>\r
                                        <div class="flex-shrink-0 ms-3">\r
                                            <button (click)="removeFile(file)" class="btn btn-sm btn-danger">Delete</button>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </li>}\r
                        </ul>}\r
                        <!-- end dropzon-preview -->\r
                    </div>\r
                </div>\r
                <!-- end card body -->\r
            </div>\r
            <!-- end card -->\r
\r
        </div>\r
        <!-- end col -->\r
        <div class="col-lg-4">\r
            <div class="card">\r
                <div class="card-body">\r
                    <h5 class="card-title mb-3">Publish</h5>\r
\r
                    <div class="mb-3">\r
                        <label class="form-label" for="project-status-input">Status</label>\r
                        <select class="form-select" id="project-status-input">\r
                            <option value="Completed">Completed</option>\r
                            <option value="Inprogress" selected>Inprogress</option>\r
                            <option value="Delay">Delay</option>\r
                        </select>\r
                        <div class="invalid-feedback">Please select project status.</div>\r
                    </div>\r
\r
                    <div>\r
                        <label class="form-label" for="project-visibility-input">Visibility</label>\r
                        <select class="form-select" id="project-visibility-input">\r
                            <option value="Private">Private</option>\r
                            <option value="Public">Public</option>\r
                            <option value="Team">Team</option>\r
                        </select>\r
                    </div>\r
                </div>\r
                <!-- end card body -->\r
            </div>\r
            <!-- end card -->\r
\r
            <div class="card">\r
                <div class="card-body">\r
                    <h5 class="card-title mb-3">Due Date</h5>\r
                    <input class="form-control flatpickr-input" type="text" mwlFlatpickr>\r
                </div>\r
                <div class="invalid-feedback">Please select due date.</div>\r
            </div>\r
            <!-- end card body -->\r
        </div>\r
        <!-- end card -->\r
    </div>\r
    <!-- end col -->\r
\r
    <div class="col-lg-8">\r
        <div class="text-end mb-4">\r
            <button type="submit" class="btn btn-primary">Create Project</button>\r
        </div>\r
    </div>\r
    <!-- end row -->\r
</div>`, styles: ["/* src/app/pages/projects/create/create.component.scss */\n.custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n.custom-day.focused {\n  background-color: #e6e6e6;\n}\n.custom-day.range,\n.custom-day:hover {\n  background-color: #556ee6;\n  color: white;\n}\n.custom-day.faded {\n  background-color: #556ee6;\n}\n/*# sourceMappingURL=create.component.css.map */\n"] }]
  }], () => [], { fromDate: [{
    type: Input
  }], toDate: [{
    type: Input
  }], dateRangeSelected: [{
    type: Output
  }], datePicker: [{
    type: ViewChild,
    args: ["dp", { static: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateComponent, { className: "CreateComponent", filePath: "src/app/pages/projects/create/create.component.ts", lineNumber: 16 });
})();

// src/app/pages/projects/projects-routing.module.ts
var routes = [
  {
    path: "grid",
    component: ProjectgridComponent
  },
  {
    path: "list",
    component: ProjectlistComponent
  },
  {
    path: "overview",
    component: OverviewComponent
  },
  {
    path: "create",
    component: CreateComponent
  }
];
var ProjectsRoutingModule = class _ProjectsRoutingModule {
  static {
    this.\u0275fac = function ProjectsRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ProjectsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/pages/projects/projects.module.ts
var DEFAULT_DROPZONE_CONFIG = {
  maxFilesize: 50,
  acceptedFiles: "image/*"
};
var ProjectsModule = class _ProjectsModule {
  static {
    this.\u0275fac = function ProjectsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ProjectsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [{
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }], imports: [
      CommonModule,
      ProjectsRoutingModule,
      BsDropdownModule.forRoot(),
      TooltipModule.forRoot(),
      NgApexchartsModule,
      FormsModule,
      BsDatepickerModule.forRoot(),
      PaginationModule.forRoot(),
      SimplebarAngularModule,
      DropzoneModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectsModule, [{
    type: NgModule,
    args: [{
      declarations: [ProjectgridComponent, ProjectlistComponent, OverviewComponent, CreateComponent],
      imports: [
        CommonModule,
        ProjectsRoutingModule,
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        NgApexchartsModule,
        FormsModule,
        BsDatepickerModule.forRoot(),
        PaginationModule.forRoot(),
        SimplebarAngularModule,
        FlatpickrDirective,
        PagetitleComponent,
        DropzoneModule
      ],
      providers: [{
        provide: DROPZONE_CONFIG,
        useValue: DEFAULT_DROPZONE_CONFIG
      }]
    }]
  }], null, null);
})();

export {
  ProjectsModule
};
//# sourceMappingURL=chunk-SVHWVQC6.js.map
