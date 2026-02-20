import {
  addtasklist,
  fetchtasklistData,
  updatetasklist
} from "./chunk-5ECJQI54.js";
import {
  Editor,
  NgxEditorComponent,
  NgxEditorMenuComponent,
  NgxEditorModule
} from "./chunk-2VAAR5CT.js";
import {
  memberList
} from "./chunk-WL25NFMY.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-5H32OP7N.js";
import {
  BsDatepickerDirective,
  BsDatepickerInputDirective,
  BsDatepickerModule
} from "./chunk-C3TIYFCT.js";
import {
  BsModalService,
  ModalDirective,
  ModalModule
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
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  SelectControlValueAccessor,
  UntypedFormArray,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-ICQKGMTO.js";
import {
  CommonModule,
  Component,
  DatePipe,
  EventEmitter,
  Input,
  NO_ERRORS_SCHEMA,
  NgClass,
  NgModule,
  NgTemplateOutlet,
  Output,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-BM6E27KQ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-H6NRAODO.js";

// src/app/pages/tasks/list/data.ts
var taskChart = {
  chart: {
    height: 280,
    type: "line",
    stacked: false,
    toolbar: {
      show: false
    }
  },
  stroke: {
    width: [0, 2, 5],
    curve: "smooth"
  },
  plotOptions: {
    bar: {
      columnWidth: "20%",
      endingShape: "rounded"
    }
  },
  colors: ["#556ee6", "#34c38f"],
  series: [
    {
      name: "Complete Tasks",
      type: "column",
      data: [23, 11, 22, 27, 13, 22, 52, 21, 44, 22, 30]
    },
    {
      name: "All Tasks",
      type: "line",
      data: [23, 11, 34, 27, 17, 22, 62, 32, 44, 22, 39]
    }
  ],
  fill: {
    gradient: {
      inverseColors: false,
      shade: "light",
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100]
    }
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
  markers: {
    size: 0
  },
  yaxis: {
    min: 0
  }
};
var tasks = [
  {
    index: 1,
    taskType: "upcoming",
    name: "Create a Back & White Dashboard UI",
    images: ["assets/images/users/avatar-2.jpg", "assets/images/users/avatar-1.jpg"],
    status: "Waiting",
    checked: false
  },
  {
    index: 2,
    taskType: "upcoming",
    name: "Create a New Landing UI",
    images: ["assets/images/users/avatar-4.jpg", "assets/images/users/avatar-5.jpg"],
    status: "Approved",
    checked: true
  },
  {
    index: 3,
    taskType: "upcoming",
    name: "Create a Back & White Logo",
    images: ["assets/images/users/avatar-1.jpg"],
    status: "Waiting",
    checked: false
  },
  {
    index: 4,
    taskType: "inprogress",
    name: "Brand logo design",
    images: ["assets/images/users/avatar-7.jpg"],
    status: "Complete",
    checked: true
  },
  {
    index: 5,
    taskType: "inprogress",
    name: "Create a Blog Template UI",
    images: ["assets/images/users/avatar-8.jpg", "assets/images/users/avatar-1.jpg"],
    status: "Pending",
    checked: false
  },
  {
    index: 6,
    taskType: "completed",
    name: "Redesign - Landing page",
    images: ["assets/images/users/avatar-6.jpg"],
    status: "Complete",
    checked: false
  },
  {
    index: 7,
    taskType: "completed",
    name: "Multipurpose Landing",
    images: ["assets/images/users/avatar-7.jpg"],
    status: "Complete",
    checked: true
  },
  {
    index: 8,
    taskType: "completed",
    name: "Create a Blog Template UI",
    images: ["assets/images/users/avatar-4.jpg", "assets/images/users/avatar-2.jpg"],
    status: "Complete",
    checked: false
  }
];

// src/app/pages/tasks/list/list.component.ts
var _c0 = (a0) => ({ "is-invalid": a0 });
var _c1 = (a0, a1) => ({ "badge-soft-primary": a0, "badge-soft-secondary": a1 });
var _c2 = (a0) => ({ "badge-soft-warning": a0 });
function ListComponent_ng_template_9_Conditional_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Name is required.");
    \u0275\u0275elementEnd();
  }
}
function ListComponent_ng_template_9_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275conditionalCreate(1, ListComponent_ng_template_9_Conditional_22_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.name.errors.required ? 1 : -1);
  }
}
function ListComponent_ng_template_9_Conditional_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "File is required.");
    \u0275\u0275elementEnd();
  }
}
function ListComponent_ng_template_9_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275conditionalCreate(1, ListComponent_ng_template_9_Conditional_27_Conditional_1_Template, 2, 0, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.submitted && ctx_r1.form.file.errors.required ? 1 : -1);
  }
}
function ListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "h5", 29);
    \u0275\u0275text(2, "Add Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 30);
    \u0275\u0275listener("click", function ListComponent_ng_template_9_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.modalRef == null ? null : ctx_r1.modalRef.hide());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 31)(5, "form", 32);
    \u0275\u0275listener("ngSubmit", function ListComponent_ng_template_9_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.listData());
    });
    \u0275\u0275elementStart(6, "div", 3)(7, "div", 33)(8, "div", 34)(9, "label", 35);
    \u0275\u0275text(10, "Task Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 36)(12, "option", 37);
    \u0275\u0275text(13, "Inprogress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 38);
    \u0275\u0275text(15, "Upcoming");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 39);
    \u0275\u0275text(17, "Completed");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 34)(19, "label", 40);
    \u0275\u0275text(20, "Task title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 41);
    \u0275\u0275conditionalCreate(22, ListComponent_ng_template_9_Conditional_22_Template, 2, 1, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 34)(24, "label", 43);
    \u0275\u0275text(25, "File");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 44);
    \u0275\u0275listener("change", function ListComponent_ng_template_9_Template_input_change_26_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(27, ListComponent_ng_template_9_Conditional_27_Template, 2, 1, "div", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 34)(29, "label", 46);
    \u0275\u0275text(30, "Task Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "select", 47)(32, "option", 48);
    \u0275\u0275text(33, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 49);
    \u0275\u0275text(35, "Waiting");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 50);
    \u0275\u0275text(37, "Complete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 51);
    \u0275\u0275text(39, "Approved");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(40, "button", 52);
    \u0275\u0275text(41, "Submit");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r1.formData);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c0, ctx_r1.submitted && ctx_r1.form.name.errors));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.submitted && ctx_r1.form.name.errors ? 22 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.submitted && ctx_r1.form.file.touched && ctx_r1.submitted && ctx_r1.form.file.invalid ? 27 : -1);
  }
}
function ListComponent_For_15_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "a", 19);
    \u0275\u0275element(2, "img", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const list_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", \u0275\u0275interpolate(list_r3.images[1]), \u0275\u0275sanitizeUrl);
  }
}
function ListComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 53)(2, "div", 54);
    \u0275\u0275element(3, "input", 55)(4, "label", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "h5", 15)(7, "a", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td")(10, "div", 17)(11, "div", 18)(12, "a", 19);
    \u0275\u0275element(13, "img", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(14, ListComponent_For_15_Conditional_14_Template, 3, 2, "div", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "div", 58)(17, "span", 59);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const list_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("id", \u0275\u0275interpolate1("customCheck", list_r3.index))("checked", list_r3.checked);
    \u0275\u0275advance();
    \u0275\u0275property("for", \u0275\u0275interpolate1("customCheck", list_r3.index));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(list_r3.name);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", \u0275\u0275interpolate(list_r3.images[0]), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional(list_r3.images[1] ? 14 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(11, _c1, list_r3.status === "Approved", list_r3.status === "Waiting"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(list_r3.status);
  }
}
function ListComponent_For_25_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "a", 19);
    \u0275\u0275element(2, "img", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const progresstask_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", \u0275\u0275interpolate(progresstask_r4.images[1]), \u0275\u0275sanitizeUrl);
  }
}
function ListComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 53)(2, "div", 54);
    \u0275\u0275element(3, "input", 55)(4, "label", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "h5", 15)(7, "a", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td")(10, "div", 17)(11, "div", 18)(12, "a", 19);
    \u0275\u0275element(13, "img", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(14, ListComponent_For_25_Conditional_14_Template, 3, 2, "div", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "div", 58)(17, "span", 60);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const progresstask_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("id", \u0275\u0275interpolate1("customCheck", progresstask_r4.index))("checked", progresstask_r4.checked);
    \u0275\u0275advance();
    \u0275\u0275property("for", \u0275\u0275interpolate1("customCheck", progresstask_r4.index));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(progresstask_r4.name);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", \u0275\u0275interpolate(progresstask_r4.images[0]), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional(progresstask_r4.images[1] ? 14 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c2, progresstask_r4.status === "Pending"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(progresstask_r4.status);
  }
}
function ListComponent_For_35_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "a", 19);
    \u0275\u0275element(2, "img", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const completetask_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", \u0275\u0275interpolate(completetask_r6.images[1]), \u0275\u0275sanitizeUrl);
  }
}
function ListComponent_For_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 53)(2, "div", 54)(3, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function ListComponent_For_35_Template_input_ngModelChange_3_listener($event) {
      const completetask_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(completetask_r6.checked, $event) || (completetask_r6.checked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "label", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "h5", 15)(7, "a", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td")(10, "div", 17)(11, "div", 18)(12, "a", 19);
    \u0275\u0275element(13, "img", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(14, ListComponent_For_35_Conditional_14_Template, 3, 2, "div", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "div", 58)(17, "span", 63);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const completetask_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("id", \u0275\u0275interpolate1("customCheck", completetask_r6.index));
    \u0275\u0275twoWayProperty("ngModel", completetask_r6.checked);
    \u0275\u0275advance();
    \u0275\u0275property("for", \u0275\u0275interpolate1("customCheck", completetask_r6.index));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(completetask_r6.name);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", \u0275\u0275interpolate(completetask_r6.images[0]), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional(completetask_r6.images[1] ? 14 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(completetask_r6.status);
  }
}
var ListComponent = class _ListComponent {
  constructor(modalService, formBuilder) {
    this.modalService = modalService;
    this.formBuilder = formBuilder;
    this.submitted = false;
    this.myFiles = [];
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Tasks" }, { label: "Task List", active: true }];
    this.formData = this.formBuilder.group({
      name: ["", [Validators.required]],
      file: new UntypedFormControl("", [Validators.required]),
      taskType: ["", [Validators.required]],
      status: ["", [Validators.required]]
    });
    this._fetchData();
  }
  onFileChange(event) {
    for (var i = 0; i < event.target.files.length; i++) {
      this.myFiles.push("assets/images/users/" + event.target.files[i].name);
    }
  }
  _fetchData() {
    this.inprogressTasks = tasks.filter((t) => t.taskType === "inprogress");
    this.upcomingTasks = tasks.filter((t) => t.taskType === "upcoming");
    this.completedTasks = tasks.filter((t) => t.taskType === "completed");
    this.taskChart = taskChart;
  }
  get form() {
    return this.formData.controls;
  }
  listData() {
    if (this.formData.valid) {
      const name = this.formData.get("name").value;
      const status = this.formData.get("status").value;
      const taskType = this.formData.get("taskType").value;
      tasks.push({
        index: tasks.length + 1,
        name,
        status,
        taskType,
        images: this.myFiles,
        checked: true
      });
    }
    this.modalService.hide();
    this._fetchData();
    this.submitted = false;
  }
  /**
   * Open modal
   * @param content modal content
   */
  openModal(content) {
    this.modalRef = this.modalService.show(content);
  }
  static {
    this.\u0275fac = function ListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListComponent)(\u0275\u0275directiveInject(BsModalService), \u0275\u0275directiveInject(UntypedFormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListComponent, selectors: [["app-list"]], decls: 104, vars: 10, consts: [["content", ""], [1, "container-fluid"], ["title", "Task List", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-8"], [1, "card"], [1, "card-body"], [1, "d-flex", "align-items-start"], [1, "card-title", "mb-4"], ["role", "document"], [1, "table-responsive"], [1, "table", "table-nowrap", "align-middle", "mb-0"], [1, "col-lg-4"], [1, "card-title", "mb-3"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "yaxis", "stroke", "colors", "fill", "plotOptions", "markers", "labels"], [1, "text-truncate", "font-size-14", "m-0"], ["href", "javascript: void(0);", 1, "text-dark"], [1, "avatar-group"], [1, "avatar-group-item"], ["href", "javascript: void(0);", 1, "d-inline-block"], ["src", "assets/images/users/avatar-4.jpg", "alt", "", 1, "rounded-circle", "avatar-xs"], ["src", "assets/images/users/avatar-5.jpg", "alt", "", 1, "rounded-circle", "avatar-xs"], ["src", "assets/images/users/avatar-1.jpg", "alt", "", 1, "rounded-circle", "avatar-xs"], ["src", "assets/images/users/avatar-2.jpg", "alt", "", 1, "rounded-circle", "avatar-xs"], ["src", "assets/images/users/avatar-3.jpg", "alt", "", 1, "rounded-circle", "avatar-xs"], [1, "avatar-xs"], [1, "avatar-title", "rounded-circle", "bg-info", "text-white", "font-size-16"], [1, "avatar-title", "rounded-circle", "bg-danger", "text-white", "font-size-16"], [1, "modal-header"], [1, "modal-title", "mt-0"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "ngSubmit", "formGroup"], [1, "col-12"], [1, "mb-3"], ["for", "tasktype"], ["formControlName", "taskType", 1, "form-select"], ["value", "inprogress"], ["value", "upcoming"], ["value", "completed"], [1, "control-label"], ["placeholder", "Enter title", "type", "text", "name", "title", "formControlName", "name", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], ["for", "file"], ["formControlName", "file", "id", "file", "type", "file", "multiple", "", 1, "form-control", 3, "change"], [1, "alert", "alert-danger"], ["for", "status"], ["formControlName", "status", 1, "form-select"], ["value", "Pending"], ["value", "Waiting"], ["value", "Complete"], ["value", "Approved"], [1, "btn", "btn-success"], [2, "width", "40px"], [1, "form-check", "font-size-16"], ["type", "checkbox", 1, "form-check-input", 3, "id", "checked"], [1, "form-check-label", 3, "for"], ["alt", "", 1, "rounded-circle", "avatar-xs", 3, "src"], [1, "text-center"], [1, "badge", "rounded-pill", "font-size-11", 3, "ngClass"], [1, "badge", "rounded-pill", "badge-soft-success", "font-size-11", 3, "ngClass"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "id", "ngModel"], ["alt", "", 1, "rounded-circle", "avatar-xs", "m-1", 3, "src"], [1, "badge", "rounded-pill", "badge-soft-success", "font-size-11"]], template: function ListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275element(1, "app-page-title", 2);
        \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "div", 7)(7, "h4", 8);
        \u0275\u0275text(8, "Upcoming");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, ListComponent_ng_template_9_Template, 42, 6, "ng-template", 9, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(11, "div", 10)(12, "table", 11)(13, "tbody");
        \u0275\u0275repeaterCreate(14, ListComponent_For_15_Template, 19, 14, "tr", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(16, "div", 5)(17, "div", 6)(18, "div", 7)(19, "h4", 8);
        \u0275\u0275text(20, "In Progress");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 10)(22, "table", 11)(23, "tbody");
        \u0275\u0275repeaterCreate(24, ListComponent_For_25_Template, 19, 13, "tr", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(26, "div", 5)(27, "div", 6)(28, "div", 7)(29, "h4", 8);
        \u0275\u0275text(30, "Completed");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 10)(32, "table", 11)(33, "tbody");
        \u0275\u0275repeaterCreate(34, ListComponent_For_35_Template, 19, 10, "tr", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(36, "div", 12)(37, "div", 5)(38, "div", 6)(39, "h4", 13);
        \u0275\u0275text(40, "Tasks");
        \u0275\u0275elementEnd();
        \u0275\u0275element(41, "apx-chart", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 5)(43, "div", 6)(44, "h4", 8);
        \u0275\u0275text(45, "Recent Tasks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 10)(47, "table", 11)(48, "tbody")(49, "tr")(50, "td")(51, "h5", 15)(52, "a", 16);
        \u0275\u0275text(53, "Brand logo design");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(54, "td")(55, "div", 17)(56, "div", 18)(57, "a", 19);
        \u0275\u0275element(58, "img", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "div", 18)(60, "a", 19);
        \u0275\u0275element(61, "img", 21);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(62, "tr")(63, "td")(64, "h5", 15)(65, "a", 16);
        \u0275\u0275text(66, "Create a Blog Template UI");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(67, "td")(68, "div", 17)(69, "div", 18)(70, "a", 19);
        \u0275\u0275element(71, "img", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "div", 18)(73, "a", 19);
        \u0275\u0275element(74, "img", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(75, "div", 18)(76, "a", 19);
        \u0275\u0275element(77, "img", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(78, "div", 18)(79, "a", 19)(80, "div", 25)(81, "span", 26);
        \u0275\u0275text(82, " D ");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(83, "tr")(84, "td")(85, "h5", 15)(86, "a", 16);
        \u0275\u0275text(87, "Redesign - Landing page");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(88, "td")(89, "div", 17)(90, "div", 18)(91, "a", 19);
        \u0275\u0275element(92, "img", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "div", 18)(94, "a", 19);
        \u0275\u0275element(95, "img", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(96, "div", 18)(97, "a", 19)(98, "div", 25)(99, "span", 27);
        \u0275\u0275text(100, " K ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(101, "div", 18)(102, "a", 19);
        \u0275\u0275element(103, "img", 23);
        \u0275\u0275elementEnd()()()()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(13);
        \u0275\u0275repeater(ctx.upcomingTasks);
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.inprogressTasks);
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.completedTasks);
        \u0275\u0275advance(7);
        \u0275\u0275property("series", ctx.taskChart.series)("chart", ctx.taskChart.chart)("yaxis", ctx.taskChart.yaxis)("stroke", ctx.taskChart.stroke)("colors", ctx.taskChart.colors)("fill", ctx.taskChart.fill)("plotOptions", ctx.taskChart.plotOptions)("markers", ctx.taskChart.markers)("labels", ctx.taskChart.labels);
      }
    }, dependencies: [PagetitleComponent, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgApexchartsModule, ChartComponent, CommonModule, NgClass, FormsModule, NgModel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListComponent, [{
    type: Component,
    args: [{ selector: "app-list", imports: [PagetitleComponent, ReactiveFormsModule, NgApexchartsModule, CommonModule, FormsModule], template: `<div class="container-fluid">\r
\r
  <!-- start page title -->\r
  <app-page-title title="Task List" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
  <!-- end page title -->\r
\r
  <div class="row">\r
    <div class="col-lg-8">\r
      <div class="card">\r
        <div class="card-body">\r
          <div class="d-flex align-items-start">\r
            <h4 class="card-title mb-4">Upcoming</h4>\r
          </div>\r
          <ng-template #content role="document" let-modal>\r
            <div class="modal-header">\r
              <h5 class="modal-title mt-0">Add Customer</h5>\r
              <button type="button" class="btn-close" aria-hidden="true" (click)="modalRef?.hide()"></button>\r
            </div>\r
            <div class="modal-body">\r
              <form (ngSubmit)="listData()" [formGroup]="formData">\r
                <div class="row">\r
                  <div class="col-12">\r
                    <div class="mb-3">\r
                      <label for="tasktype">Task Type</label>\r
                      <select class="form-select" formControlName="taskType">\r
                        <option value="inprogress">Inprogress</option>\r
                        <option value="upcoming">Upcoming</option>\r
                        <option value="completed">Completed</option>\r
                      </select>\r
                    </div>\r
                    <div class="mb-3">\r
                      <label class="control-label">Task title</label>\r
                      <input class="form-control" placeholder="Enter title" type="text" name="title" formControlName="name" [ngClass]="{'is-invalid': submitted && form.name.errors}" />\r
                      @if(submitted && form.name.errors){\r
                      <div class="invalid-feedback">\r
                        @if(form.name.errors.required){\r
                        <span>Name is required.</span>\r
                        }\r
                      </div>\r
                      }\r
                    </div>\r
                    <div class="mb-3">\r
                      <label for="file">File</label>\r
                      <input formControlName="file" id="file" type="file" multiple class="form-control" (change)="onFileChange($event)">\r
                      @if(submitted && form.file.touched && submitted && form.file.invalid){\r
                      <div class="alert alert-danger">\r
                        @if(submitted && form.file.errors.required){\r
                        <div>File is required.</div>\r
                        }\r
                      </div>}\r
                    </div>\r
                    <div class="mb-3">\r
                      <label for="status">Task Status</label>\r
                      <select class="form-select" formControlName="status">\r
                        <option value="Pending">Pending</option>\r
                        <option value="Waiting">Waiting</option>\r
                        <option value="Complete">Complete</option>\r
                        <option value="Approved">Approved</option>\r
                      </select>\r
                    </div>\r
                  </div>\r
                </div>\r
                <button class="btn btn-success">Submit</button>\r
              </form>\r
            </div>\r
\r
          </ng-template>\r
          <div class="table-responsive">\r
            <table class="table table-nowrap align-middle mb-0">\r
              <tbody>\r
                @for(list of upcomingTasks;track $index){\r
                <tr>\r
                  <td style="width: 40px;">\r
                    <div class="form-check font-size-16">\r
                      <input type="checkbox" class="form-check-input" id="customCheck{{list.index}}" [checked]="list.checked">\r
                      <label class="form-check-label" for="customCheck{{list.index}}"></label>\r
                    </div>\r
                  </td>\r
                  <td>\r
                    <h5 class="text-truncate font-size-14 m-0"><a href="javascript: void(0);" class="text-dark">{{list.name}}</a></h5>\r
                  </td>\r
                  <td>\r
                    <div class="avatar-group">\r
                      <div class="avatar-group-item">\r
                        <a href="javascript: void(0);" class="d-inline-block">\r
                          <img src="{{list.images[0]}}" class="rounded-circle avatar-xs" alt="">\r
                        </a>\r
                      </div>\r
                      @if(list.images[1]){\r
                      <div class="avatar-group-item">\r
                        <a href="javascript: void(0);" class="d-inline-block">\r
                          <img src="{{list.images[1]}}" class="rounded-circle avatar-xs" alt="">\r
                        </a>\r
                      </div>\r
                      }\r
                    </div>\r
                  </td>\r
                  <td>\r
                    <div class="text-center">\r
                      <span class="badge rounded-pill font-size-11" [ngClass]="{'badge-soft-primary': list.status  === 'Approved',\r
                      'badge-soft-secondary': list.status === 'Waiting'}">{{list.status}}</span>\r
                    </div>\r
                  </td>\r
                </tr>}\r
              </tbody>\r
            </table>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="card">\r
        <div class="card-body">\r
          <div class="d-flex align-items-start">\r
            <h4 class="card-title mb-4">In Progress</h4>\r
          </div>\r
          <div class="table-responsive">\r
            <table class="table table-nowrap align-middle mb-0">\r
              <tbody>\r
                @for(progresstask of inprogressTasks;track $index){\r
                <tr>\r
                  <td style="width: 40px;">\r
                    <div class="form-check font-size-16">\r
                      <input type="checkbox" class="form-check-input" id="customCheck{{progresstask.index}}" [checked]="progresstask.checked">\r
                      <label class="form-check-label" for="customCheck{{progresstask.index}}"></label>\r
                    </div>\r
                  </td>\r
                  <td>\r
                    <h5 class="text-truncate font-size-14 m-0"><a href="javascript: void(0);" class="text-dark">{{progresstask.name}}</a></h5>\r
                  </td>\r
                  <td>\r
                    <div class="avatar-group">\r
                      <div class="avatar-group-item">\r
                        <a href="javascript: void(0);" class="d-inline-block">\r
                          <img src="{{progresstask.images[0]}}" class="rounded-circle avatar-xs" alt="">\r
                        </a>\r
                      </div>\r
                      @if(progresstask.images[1]){\r
                      <div class="avatar-group-item">\r
                        <a href="javascript: void(0);" class="d-inline-block">\r
                          <img src="{{progresstask.images[1]}}" class="rounded-circle avatar-xs" alt="">\r
                        </a>\r
                      </div>}\r
                    </div>\r
                  </td>\r
                  <td>\r
                    <div class="text-center">\r
                      <span class="badge rounded-pill badge-soft-success font-size-11" [ngClass]="{'badge-soft-warning': progresstask.status  === 'Pending'}">{{progresstask.status}}</span>\r
                    </div>\r
                  </td>\r
                </tr>}\r
              </tbody>\r
            </table>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="card">\r
        <div class="card-body">\r
          <div class="d-flex align-items-start">\r
            <h4 class="card-title mb-4">Completed</h4>\r
          </div>\r
          <div class="table-responsive">\r
            <table class="table table-nowrap align-middle mb-0">\r
              <tbody>\r
                @for(completetask of completedTasks;track $index){\r
                <tr>\r
                  <td style="width: 40px;">\r
                    <div class="form-check font-size-16">\r
                      <input type="checkbox" class="form-check-input" id="customCheck{{completetask.index}}" [(ngModel)]="completetask.checked">\r
                      <label class="form-check-label" for="customCheck{{completetask.index}}"></label>\r
                    </div>\r
                  </td>\r
                  <td>\r
                    <h5 class="text-truncate font-size-14 m-0"><a href="javascript: void(0);" class="text-dark">{{completetask.name}}</a>\r
                    </h5>\r
                  </td>\r
                  <td>\r
                    <div class="avatar-group">\r
                      <div class="avatar-group-item">\r
                        <a href="javascript: void(0);" class="d-inline-block">\r
                          <img src="{{completetask.images[0]}}" class="rounded-circle avatar-xs m-1" alt="">\r
                        </a>\r
                      </div>\r
                      @if(completetask.images[1]){\r
                      <div class="avatar-group-item">\r
                        <a href="javascript: void(0);" class="d-inline-block">\r
                          <img src="{{completetask.images[1]}}" class="rounded-circle avatar-xs m-1" alt="">\r
                        </a>\r
                      </div>}\r
                    </div>\r
                  </td>\r
                  <td>\r
                    <div class="text-center">\r
                      <span class="badge rounded-pill badge-soft-success font-size-11">{{completetask.status}}</span>\r
                    </div>\r
                  </td>\r
                </tr>\r
                }\r
              </tbody>\r
            </table>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <!-- end col -->\r
\r
    <div class="col-lg-4">\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title mb-3">Tasks</h4>\r
\r
          <apx-chart dir="ltr" class="apex-charts" [series]="taskChart.series" [chart]="taskChart.chart" [yaxis]="taskChart.yaxis" [stroke]="taskChart.stroke" [colors]="taskChart.colors" [fill]="taskChart.fill" [plotOptions]="taskChart.plotOptions" [markers]="taskChart.markers" [labels]="taskChart.labels">\r
          </apx-chart>\r
        </div>\r
      </div>\r
\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title mb-4">Recent Tasks</h4>\r
\r
          <div class="table-responsive">\r
            <table class="table table-nowrap align-middle mb-0">\r
              <tbody>\r
                <tr>\r
                  <td>\r
                    <h5 class="text-truncate font-size-14 m-0"><a href="javascript: void(0);" class="text-dark">Brand\r
                        logo design</a></h5>\r
                  </td>\r
                  <td>\r
                    <div class="avatar-group">\r
                      <div class="avatar-group-item">\r
                        <a href="javascript: void(0);" class="d-inline-block">\r
                          <img src="assets/images/users/avatar-4.jpg" alt="" class="rounded-circle avatar-xs">\r
                        </a>\r
                      </div>\r
                      <div class="avatar-group-item">\r
                        <a href="javascript: void(0);" class="d-inline-block">\r
                          <img src="assets/images/users/avatar-5.jpg" alt="" class="rounded-circle avatar-xs">\r
                        </a>\r
                      </div>\r
                    </div>\r
                  </td>\r
                </tr>\r
                <tr>\r
                  <td>\r
                    <h5 class="text-truncate font-size-14 m-0"><a href="javascript: void(0);" class="text-dark">Create a\r
                        Blog Template\r
                        UI</a></h5>\r
                  </td>\r
                  <td>\r
                    <div class="avatar-group">\r
                      <div class="avatar-group-item">\r
                        <a href="javascript: void(0);" class="d-inline-block">\r
                          <img src="assets/images/users/avatar-1.jpg" alt="" class="rounded-circle avatar-xs">\r
                        </a>\r
                      </div>\r
                      <div class="avatar-group-item">\r
                        <a href="javascript: void(0);" class="d-inline-block">\r
                          <img src="assets/images/users/avatar-2.jpg" alt="" class="rounded-circle avatar-xs">\r
                        </a>\r
                      </div>\r
                      <div class="avatar-group-item">\r
                        <a href="javascript: void(0);" class="d-inline-block">\r
                          <img src="assets/images/users/avatar-3.jpg" alt="" class="rounded-circle avatar-xs">\r
                        </a>\r
                      </div>\r
                      <div class="avatar-group-item">\r
                        <a href="javascript: void(0);" class="d-inline-block">\r
                          <div class="avatar-xs">\r
                            <span class="avatar-title rounded-circle bg-info text-white font-size-16">\r
                              D\r
                            </span>\r
                          </div>\r
                        </a>\r
                      </div>\r
                    </div>\r
                  </td>\r
                </tr>\r
                <tr>\r
                  <td>\r
                    <h5 class="text-truncate font-size-14 m-0"><a href="javascript: void(0);" class="text-dark">Redesign\r
                        - Landing page</a>\r
                    </h5>\r
                  </td>\r
                  <td>\r
                    <div class="avatar-group">\r
                      <div class="avatar-group-item">\r
                        <a href="javascript: void(0);" class="d-inline-block">\r
                          <img src="assets/images/users/avatar-4.jpg" alt="" class="rounded-circle avatar-xs">\r
                        </a>\r
                      </div>\r
                      <div class="avatar-group-item">\r
                        <a href="javascript: void(0);" class="d-inline-block">\r
                          <img src="assets/images/users/avatar-5.jpg" alt="" class="rounded-circle avatar-xs">\r
                        </a>\r
                      </div>\r
                      <div class="avatar-group-item">\r
                        <a href="javascript: void(0);" class="d-inline-block">\r
                          <div class="avatar-xs">\r
                            <span class="avatar-title rounded-circle bg-danger text-white font-size-16">\r
                              K\r
                            </span>\r
                          </div>\r
                        </a>\r
                      </div>\r
                      <div class="avatar-group-item">\r
                        <a href="javascript: void(0);" class="d-inline-block">\r
                          <img src="assets/images/users/avatar-2.jpg" alt="" class="rounded-circle avatar-xs">\r
                        </a>\r
                      </div>\r
                    </div>\r
                  </td>\r
                </tr>\r
              </tbody>\r
            </table>\r
          </div>\r
          <!-- end table responsive -->\r
        </div>\r
      </div>\r
\r
    </div>\r
  </div>\r
  <!-- end row -->\r
\r
</div> <!-- container-fluid -->` }]
  }], () => [{ type: BsModalService }, { type: UntypedFormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListComponent, { className: "ListComponent", filePath: "src/app/pages/tasks/list/list.component.ts", lineNumber: 22 });
})();

// src/app/store/Tasks/tasks-selector.ts
var selectDataState = createFeatureSelector("Tasklist");
var selectData = createSelector(selectDataState, (state) => state.tasklist);
var selectDataLoading = createSelector(selectDataState, (state) => state.loading);
var selectDataError = createSelector(selectDataState, (state) => state.error);

// src/app/pages/tasks/kanbanboard/kanbanboard.component.ts
var _c02 = ["modalForm"];
var _c12 = (a0, a1) => ({ task: a0, index: a1 });
var _c22 = (a0, a1) => ({ task: a0, $index: a1 });
var _c3 = (a0, a1, a2, a3) => ({ "badge-soft-secondary": a0, "badge-soft-success": a1, "badge-soft-primary": a2, "badge-soft-warning": a3 });
function KanbanboardComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "a", 49);
    \u0275\u0275text(2, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 49);
    \u0275\u0275text(4, "Delete");
    \u0275\u0275elementEnd()();
  }
}
function KanbanboardComponent_For_15_ng_template_2_Template(rf, ctx) {
}
function KanbanboardComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 50);
    \u0275\u0275listener("dndMoved", function KanbanboardComponent_For_15_Template_div_dndMoved_1_listener() {
      const task_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDragged(task_r3, ctx_r3.upcomingTasks));
    });
    \u0275\u0275template(2, KanbanboardComponent_For_15_ng_template_2_Template, 0, 0, "ng-template", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const task_r3 = ctx.$implicit;
    const $index_r5 = ctx.$index;
    \u0275\u0275nextContext();
    const TaskContent_r6 = \u0275\u0275reference(55);
    \u0275\u0275advance();
    \u0275\u0275property("dndDraggable", task_r3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", TaskContent_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c12, task_r3, $index_r5));
  }
}
function KanbanboardComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "a", 49);
    \u0275\u0275text(2, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 49);
    \u0275\u0275text(4, "Delete");
    \u0275\u0275elementEnd()();
  }
}
function KanbanboardComponent_For_32_ng_template_2_Template(rf, ctx) {
}
function KanbanboardComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 50);
    \u0275\u0275listener("dndMoved", function KanbanboardComponent_For_32_Template_div_dndMoved_1_listener() {
      const task_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDragged(task_r8, ctx_r3.inprogressTasks));
    });
    \u0275\u0275template(2, KanbanboardComponent_For_32_ng_template_2_Template, 0, 0, "ng-template", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const task_r8 = ctx.$implicit;
    const $index_r9 = ctx.$index;
    \u0275\u0275nextContext();
    const TaskContent_r6 = \u0275\u0275reference(55);
    \u0275\u0275advance();
    \u0275\u0275property("dndDraggable", task_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", TaskContent_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c22, task_r8, $index_r9));
  }
}
function KanbanboardComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "a", 49);
    \u0275\u0275text(2, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 49);
    \u0275\u0275text(4, "Delete");
    \u0275\u0275elementEnd()();
  }
}
function KanbanboardComponent_For_49_ng_template_2_Template(rf, ctx) {
}
function KanbanboardComponent_For_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 50);
    \u0275\u0275listener("dndMoved", function KanbanboardComponent_For_49_Template_div_dndMoved_1_listener() {
      const task_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDragged(task_r11, ctx_r3.completedTasks));
    });
    \u0275\u0275template(2, KanbanboardComponent_For_49_ng_template_2_Template, 0, 0, "ng-template", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const task_r11 = ctx.$implicit;
    const $index_r12 = ctx.$index;
    \u0275\u0275nextContext();
    const TaskContent_r6 = \u0275\u0275reference(55);
    \u0275\u0275advance();
    \u0275\u0275property("dndDraggable", task_r11);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", TaskContent_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c22, task_r11, $index_r12));
  }
}
function KanbanboardComponent_ng_template_54_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "a", 66);
    \u0275\u0275listener("click", function KanbanboardComponent_ng_template_54_div_5_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const task_r14 = \u0275\u0275nextContext().task;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateTask(task_r14));
    });
    \u0275\u0275text(2, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 67);
    \u0275\u0275listener("click", function KanbanboardComponent_ng_template_54_div_5_Template_a_click_3_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.delete($event));
    });
    \u0275\u0275text(4, "Delete");
    \u0275\u0275elementEnd()();
  }
}
function KanbanboardComponent_ng_template_54_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "a", 61);
    \u0275\u0275element(2, "img", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r14 = \u0275\u0275nextContext().task;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", \u0275\u0275interpolate(task_r14.user[1]), \u0275\u0275sanitizeUrl);
  }
}
function KanbanboardComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 7)(2, "div", 8)(3, "a", 53);
    \u0275\u0275element(4, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, KanbanboardComponent_ng_template_54_div_5_Template, 5, 0, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 54)(7, "span", 55);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "h5", 56)(11, "a", 57);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p", 58);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 59)(16, "div", 60)(17, "a", 61);
    \u0275\u0275element(18, "img", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(19, KanbanboardComponent_ng_template_54_Conditional_19_Template, 3, 2, "div", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 63)(21, "h5", 64);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 65);
    \u0275\u0275text(24, "Budget");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r14 = ctx.task;
    \u0275\u0275advance(7);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(8, _c3, task_r14.task === "Waiting", task_r14.task === "Complete", task_r14.task === "Approved", task_r14.task === "Pending"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r14.task);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(task_r14.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r14.date);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate(task_r14.user[0]), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional(task_r14.user[1] ? 19 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$ ", task_r14.budget);
  }
}
function KanbanboardComponent_For_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "div", 68)(2, "input", 69);
    \u0275\u0275listener("change", function KanbanboardComponent_For_87_Template_input_change_2_listener() {
      const $index_r17 = \u0275\u0275restoreView(_r16).$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectMember($index_r17));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 70);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "img", 71);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r18 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", data_r18.checked == true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r18.name);
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275interpolate(data_r18.profile), \u0275\u0275sanitizeUrl);
  }
}
var KanbanboardComponent = class _KanbanboardComponent {
  constructor(fb, store, datePipe) {
    this.fb = fb;
    this.store = store;
    this.datePipe = datePipe;
    this.upcomingTasks = [];
    this.inprogressTasks = [];
    this.completedTasks = [];
    this.memberLists = memberList;
    this.breadCrumbItems = [];
    this.assigneeMember = [];
    this.status = "upcoming";
    this.editId = null;
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Tasks" }, { label: "Kanban Board", active: true }];
    this.taskForm = this.fb.group({
      id: [""],
      title: ["", Validators.required],
      taskdesc: ["", Validators.required],
      task: ["", Validators.required],
      budget: ["", Validators.required],
      user: [[]],
      status: [""],
      date: [""]
    });
    this.store.dispatch(fetchtasklistData());
    this.store.select(selectData).subscribe((tasks2) => {
      this.splitTasks(tasks2);
    });
  }
  splitTasks(tasks2) {
    this.upcomingTasks = tasks2.filter((t) => t.status === "upcoming");
    this.inprogressTasks = tasks2.filter((t) => t.status === "inprogress");
    this.completedTasks = tasks2.filter((t) => t.status === "completed");
  }
  onDragged(item, list) {
    list.splice(list.indexOf(item), 1);
  }
  onDrop(event, list, status) {
    if (event.dropEffect === "move") {
      const task = __spreadProps(__spreadValues({}, event.data), { status });
      list.splice(event.index ?? list.length, 0, task);
      this.store.dispatch(updatetasklist({ updatedData: task }));
    }
  }
  deleteTask(task) {
    task.status === "upcoming" && this.upcomingTasks.splice(this.upcomingTasks.indexOf(task), 1);
    task.status === "inprogress" && this.inprogressTasks.splice(this.inprogressTasks.indexOf(task), 1);
    task.status === "completed" && this.completedTasks.splice(this.completedTasks.indexOf(task), 1);
  }
  selectMember(i) {
    const member = this.memberLists[i];
    member.checked = !member.checked;
    if (member.checked) {
      this.assigneeMember.push(member.profile);
    } else {
      this.assigneeMember = this.assigneeMember.filter((p) => p !== member.profile);
    }
  }
  addnewTask(status) {
    this.status = status;
    this.editId = null;
    this.assigneeMember = [];
    this.memberLists.forEach((m) => m.checked = false);
    this.taskForm.reset();
    this.modalForm.show();
  }
  submitForm() {
    if (this.taskForm.invalid)
      return;
    if (this.editId) {
      const updatedTask = __spreadProps(__spreadValues({}, this.taskForm.value), {
        id: this.editId,
        user: this.assigneeMember,
        status: this.status
      });
      this.store.dispatch(updatetasklist({ updatedData: updatedTask }));
    } else {
      const newTask = __spreadProps(__spreadValues({}, this.taskForm.value), {
        id: Date.now(),
        status: this.status,
        user: this.assigneeMember,
        date: this.datePipe.transform(/* @__PURE__ */ new Date(), "dd MMM, yyyy")
      });
      this.store.dispatch(addtasklist({ newData: newTask }));
    }
    this.modalForm.hide();
    this.taskForm.reset();
  }
  updateTask(task) {
    this.editId = task.id;
    this.status = task.status;
    if (Array.isArray(task.user)) {
      this.assigneeMember = [...task.user];
    } else if (task.user) {
      this.assigneeMember = [task.user];
    } else {
      this.assigneeMember = [];
    }
    this.memberLists.forEach((m) => {
      m.checked = this.assigneeMember.includes(m.profile);
    });
    this.taskForm.patchValue({
      id: task.id,
      title: task.title,
      taskdesc: task.taskdesc || "",
      task: task.task,
      budget: task.budget,
      status: task.status,
      date: task.date
    });
    this.modalForm.show();
  }
  static {
    this.\u0275fac = function KanbanboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _KanbanboardComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(DatePipe));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KanbanboardComponent, selectors: [["app-kanbanboard"]], viewQuery: function KanbanboardComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.modalForm = _t.first);
      }
    }, decls: 116, vars: 2, consts: [["TaskContent", ""], ["modalForm", "bs-modal"], [1, "container-fluid"], ["title", "Kanban Board", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-4"], [1, "card"], [1, "card-body"], ["dropdown", "", 1, "dropdown", "float-end"], ["href", "javascript: void(0);", "dropdownToggle", "", 1, "dropdown-toggle", "arrow-none"], [1, "mdi", "mdi-dots-vertical", "m-0", "text-muted", "h5"], ["class", "dropdown-menu dropdown-menu-end", 4, "dropdownMenu"], [1, "card-title", "mb-4"], ["id", "upcoming-task", "dndDropzone", "", "dndEffectAllowed", "move", 1, "pb-1", "task-list", 3, "dndDrop"], ["dndPlaceholderRef", "", 1, "dndPlaceholder"], [1, "text-center", "d-grid"], ["href", "javascript: void(0);", 1, "btn", "btn-primary", 3, "click"], [1, "mdi", "mdi-plus", "me-1"], ["id", "Progress-task", "dndDropzone", "", "dndEffectAllowed", "move", 1, "pb-1", "task-list", 3, "dndDrop"], ["id", "completed-task", "dndDropzone", "", "dndEffectAllowed", "move", 1, "pb-1", "task-list", 3, "dndDrop"], ["bsModal", "", "id", "modalForm", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myLargeModalLabel", "aria-hidden", "true", 1, "modal", "fade", "bs-example-modal-lg"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title", "add-task-title"], [1, "modal-title", "update-task-title", 2, "display", "none"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], ["id", "NewtaskForm", "role", "form", 3, "ngSubmit", "formGroup"], [1, "form-group", "mb-3"], ["for", "taskname", 1, "col-form-label"], [1, "text-danger"], [1, "col-lg-12"], ["id", "taskname", "name", "taskname", "type", "text", "formControlName", "title", "placeholder", "Enter Task Name...", "required", "", 1, "form-control", "validate"], [1, "col-form-label"], ["id", "taskdesc", "name", "taskdesc", "formControlName", "taskdesc", 1, "form-control"], ["id", "taskassignee", 1, "list-unstyled", "user-list", "validate"], [1, "form-group", "mb-4"], ["id", "TaskStatus", "formControlName", "task", "required", "", 1, "form-select", "validate"], ["value", "", "selected", ""], ["value", "Waiting"], ["value", "Approved"], ["value", "Pending"], ["value", "Complete"], ["for", "taskbudget", 1, "col-form-label"], ["id", "taskbudget", "name", "taskbudget", "type", "number", "placeholder", "Enter Task Budget...", "formControlName", "budget", "required", "", 1, "form-control"], [1, "col-lg-10"], ["type", "submit", "id", "addtask", 1, "btn", "btn-primary"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript: void(0);", 1, "dropdown-item"], ["dndEffectAllowed", "move", 3, "dndMoved", "dndDraggable"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "card", "task-box"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", "dropdownToggle", "", 1, "dropdown-toggle", "arrow-none"], [1, "float-end", "ms-2"], [1, "badge", "rounded-pill", "badge-soft-secondary", "font-size-12", 3, "ngClass"], [1, "font-size-15"], ["href", "javascript: void(0);", 1, "text-dark"], [1, "text-muted", "mb-4"], [1, "avatar-group", "float-start"], [1, "avatar-group-item"], ["href", "javascript: void(0);", 1, "d-inline-block"], ["alt", "", 1, "rounded-circle", "avatar-xs", 3, "src"], [1, "text-end"], [1, "font-size-15", "mb-1"], [1, "mb-0", "text-muted"], ["href", "javascript:void(0);", "id", "taskedit", "data-id", "#uptask-2", 1, "dropdown-item", "edittask-details", 3, "click"], ["href", "javascript:void(0);", "data-id", "#uptask-2", 1, "dropdown-item", "deletetask", 3, "click"], [1, "form-check", "form-check-primary", "mb-2", "d-flex", "align-items-center"], ["type", "checkbox", 1, "form-check-input", 3, "change", "checked"], [1, "form-check-label", "ms-2"], ["alt", "", 1, "rounded-circle", "avatar-xs", "m-1", 3, "src"]], template: function KanbanboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275element(1, "app-page-title", 3);
        \u0275\u0275elementStart(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "div", 7)(6, "div", 8)(7, "a", 9);
        \u0275\u0275element(8, "i", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, KanbanboardComponent_div_9_Template, 5, 0, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "h4", 12);
        \u0275\u0275text(11, "Upcoming");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 13);
        \u0275\u0275listener("dndDrop", function KanbanboardComponent_Template_div_dndDrop_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDrop($event, ctx.upcomingTasks, "upcoming-task"));
        });
        \u0275\u0275element(13, "div", 14);
        \u0275\u0275repeaterCreate(14, KanbanboardComponent_For_15_Template, 3, 6, "ng-container", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementStart(16, "div", 15)(17, "a", 16);
        \u0275\u0275listener("click", function KanbanboardComponent_Template_a_click_17_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.addnewTask("upcoming"));
        });
        \u0275\u0275element(18, "i", 17);
        \u0275\u0275text(19, " Add New");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(20, "div", 5)(21, "div", 6)(22, "div", 7)(23, "div", 8)(24, "a", 9);
        \u0275\u0275element(25, "i", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, KanbanboardComponent_div_26_Template, 5, 0, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "h4", 12);
        \u0275\u0275text(28, "In Progress");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 18);
        \u0275\u0275listener("dndDrop", function KanbanboardComponent_Template_div_dndDrop_29_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDrop($event, ctx.inprogressTasks, "Progress-task"));
        });
        \u0275\u0275element(30, "div", 14);
        \u0275\u0275repeaterCreate(31, KanbanboardComponent_For_32_Template, 3, 6, "ng-container", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementStart(33, "div", 15)(34, "a", 16);
        \u0275\u0275listener("click", function KanbanboardComponent_Template_a_click_34_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.addnewTask("inprogress"));
        });
        \u0275\u0275element(35, "i", 17);
        \u0275\u0275text(36, " Add New");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(37, "div", 5)(38, "div", 6)(39, "div", 7)(40, "div", 8)(41, "a", 9);
        \u0275\u0275element(42, "i", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(43, KanbanboardComponent_div_43_Template, 5, 0, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "h4", 12);
        \u0275\u0275text(45, "Completed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 19);
        \u0275\u0275listener("dndDrop", function KanbanboardComponent_Template_div_dndDrop_46_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDrop($event, ctx.completedTasks, "completed-task"));
        });
        \u0275\u0275element(47, "div", 14);
        \u0275\u0275repeaterCreate(48, KanbanboardComponent_For_49_Template, 3, 6, "ng-container", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementStart(50, "div", 15)(51, "a", 16);
        \u0275\u0275listener("click", function KanbanboardComponent_Template_a_click_51_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.addnewTask("completed"));
        });
        \u0275\u0275element(52, "i", 17);
        \u0275\u0275text(53, " Add New");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275template(54, KanbanboardComponent_ng_template_54_Template, 25, 13, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(56, "div", 20, 1)(58, "div", 21)(59, "div", 22)(60, "div", 23)(61, "h5", 24);
        \u0275\u0275text(62, "Add New Task");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "h5", 25);
        \u0275\u0275text(64, "Update Task");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "button", 26);
        \u0275\u0275listener("click", function KanbanboardComponent_Template_button_click_65_listener() {
          \u0275\u0275restoreView(_r1);
          const modalForm_r15 = \u0275\u0275reference(57);
          return \u0275\u0275resetView(modalForm_r15.hide());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "div", 27)(67, "form", 28);
        \u0275\u0275listener("ngSubmit", function KanbanboardComponent_Template_form_ngSubmit_67_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.submitForm());
        });
        \u0275\u0275elementStart(68, "div", 29)(69, "label", 30);
        \u0275\u0275text(70, "Task Name");
        \u0275\u0275elementStart(71, "span", 31);
        \u0275\u0275text(72, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "div", 32);
        \u0275\u0275element(74, "input", 33);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(75, "div", 29)(76, "label", 34);
        \u0275\u0275text(77, "Task Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "div", 32);
        \u0275\u0275element(79, "textarea", 35);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(80, "div", 29)(81, "label", 34);
        \u0275\u0275text(82, "Add Team Member");
        \u0275\u0275elementStart(83, "span", 31);
        \u0275\u0275text(84, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(85, "ul", 36);
        \u0275\u0275repeaterCreate(86, KanbanboardComponent_For_87_Template, 6, 4, "li", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(88, "div", 37)(89, "label", 34);
        \u0275\u0275text(90, "Status");
        \u0275\u0275elementStart(91, "span", 31);
        \u0275\u0275text(92, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "div", 32)(94, "select", 38)(95, "option", 39);
        \u0275\u0275text(96, "Choose..");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "option", 40);
        \u0275\u0275text(98, "Waiting");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "option", 41);
        \u0275\u0275text(100, "Approved");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "option", 42);
        \u0275\u0275text(102, "Pending");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "option", 43);
        \u0275\u0275text(104, "Complete");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(105, "div", 37)(106, "label", 44);
        \u0275\u0275text(107, "Budget");
        \u0275\u0275elementStart(108, "span", 31);
        \u0275\u0275text(109, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(110, "div", 32);
        \u0275\u0275element(111, "input", 45);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(112, "div", 4)(113, "div", 46)(114, "button", 47);
        \u0275\u0275text(115, "Create Task");
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(13);
        \u0275\u0275repeater(ctx.upcomingTasks);
        \u0275\u0275advance(17);
        \u0275\u0275repeater(ctx.inprogressTasks);
        \u0275\u0275advance(17);
        \u0275\u0275repeater(ctx.completedTasks);
        \u0275\u0275advance(19);
        \u0275\u0275property("formGroup", ctx.taskForm);
        \u0275\u0275advance(19);
        \u0275\u0275repeater(ctx.memberLists);
      }
    }, dependencies: [PagetitleComponent, BsDropdownModule, BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, ModalModule, ModalDirective, CommonModule, NgClass, NgTemplateOutlet], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KanbanboardComponent, [{
    type: Component,
    args: [{ selector: "app-kanbanboard", standalone: true, imports: [PagetitleComponent, BsDropdownModule, ReactiveFormsModule, ModalModule, CommonModule], template: `<div class="container-fluid">\r
  <!-- start page title -->\r
  <app-page-title title="Kanban Board" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
  <!-- end page title -->\r
\r
  <div class="row">\r
    <div class="col-lg-4">\r
      <div class="card">\r
        <div class="card-body">\r
          <div class="dropdown float-end" dropdown>\r
            <a href="javascript: void(0);" class="dropdown-toggle arrow-none" dropdownToggle>\r
              <i class="mdi mdi-dots-vertical m-0 text-muted h5"></i>\r
            </a>\r
            <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>\r
              <a class="dropdown-item" href="javascript: void(0);">Edit</a>\r
              <a class="dropdown-item" href="javascript: void(0);">Delete</a>\r
            </div>\r
          </div> <!-- end dropdown -->\r
\r
          <h4 class="card-title mb-4">Upcoming</h4>\r
          <div id="upcoming-task" class="pb-1 task-list" dndDropzone dndEffectAllowed="move" (dndDrop)="onDrop($event, upcomingTasks,'upcoming-task')">\r
            <div class="dndPlaceholder" dndPlaceholderRef></div>\r
            @for(task of upcomingTasks;track $index){\r
            <ng-container>\r
              <div [dndDraggable]="task" dndEffectAllowed="move" (dndMoved)="onDragged(task, upcomingTasks)">\r
                <ng-template [ngTemplateOutlet]="TaskContent" [ngTemplateOutletContext]="{task:task, index: $index}">\r
                </ng-template>\r
              </div>\r
            </ng-container>\r
            }\r
\r
            <div class="text-center d-grid">\r
              <a href="javascript: void(0);" class="btn btn-primary" (click)="addnewTask('upcoming')"><i class="mdi mdi-plus me-1"></i>\r
                Add New</a>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <!-- end col -->\r
\r
    <div class="col-lg-4">\r
      <div class="card">\r
        <div class="card-body">\r
          <div class="dropdown float-end" dropdown>\r
            <a href="javascript: void(0);" class="dropdown-toggle arrow-none" dropdownToggle>\r
              <i class="mdi mdi-dots-vertical m-0 text-muted h5"></i>\r
            </a>\r
            <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>\r
              <a class="dropdown-item" href="javascript: void(0);">Edit</a>\r
              <a class="dropdown-item" href="javascript: void(0);">Delete</a>\r
            </div>\r
          </div> <!-- end dropdown -->\r
\r
          <h4 class="card-title mb-4">In Progress</h4>\r
          <div id="Progress-task" class="pb-1 task-list" dndDropzone dndEffectAllowed="move" (dndDrop)="onDrop($event, inprogressTasks,'Progress-task')">\r
            <div class="dndPlaceholder" dndPlaceholderRef></div>\r
            @for(task of inprogressTasks;track $index){\r
            <ng-container>\r
              <div [dndDraggable]="task" dndEffectAllowed="move" (dndMoved)="onDragged(task, inprogressTasks)">\r
                <ng-template [ngTemplateOutlet]="TaskContent" [ngTemplateOutletContext]="{task:task, $index}">\r
                </ng-template>\r
              </div>\r
            </ng-container>\r
            }\r
            <div class="text-center d-grid">\r
              <a href="javascript: void(0);" class="btn btn-primary" (click)="addnewTask('inprogress')"><i class="mdi mdi-plus me-1"></i>\r
                Add New</a>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="col-lg-4">\r
      <div class="card">\r
        <div class="card-body">\r
          <div class="dropdown float-end" dropdown>\r
            <a href="javascript: void(0);" class="dropdown-toggle arrow-none" dropdownToggle>\r
              <i class="mdi mdi-dots-vertical m-0 text-muted h5"></i>\r
            </a>\r
            <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>\r
              <a class="dropdown-item" href="javascript: void(0);">Edit</a>\r
              <a class="dropdown-item" href="javascript: void(0);">Delete</a>\r
            </div>\r
          </div> <!-- end dropdown -->\r
\r
          <h4 class="card-title mb-4">Completed</h4>\r
          <div id="completed-task" class="pb-1 task-list" dndDropzone dndEffectAllowed="move" (dndDrop)="onDrop($event, completedTasks,'completed-task')">\r
            <div class="dndPlaceholder" dndPlaceholderRef></div>\r
            @for(task of completedTasks;track $index){\r
            <ng-container>\r
              <div [dndDraggable]="task" dndEffectAllowed="move" (dndMoved)="onDragged(task, completedTasks)">\r
                <ng-template [ngTemplateOutlet]="TaskContent" [ngTemplateOutletContext]="{task:task,  $index}">\r
                </ng-template>\r
              </div>\r
            </ng-container>\r
            }\r
\r
            <div class="text-center d-grid">\r
              <a href="javascript: void(0);" class="btn btn-primary" (click)="addnewTask('completed')"><i class="mdi mdi-plus me-1"></i>\r
                Add New</a>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Task  -->\r
<ng-template #TaskContent let-task='task' let-i='index'>\r
  <div class="card task-box">\r
    <div class="card-body">\r
      <div class="dropdown float-end" dropdown>\r
        <a href="javascript:void(0);" class="dropdown-toggle arrow-none" data-bs-toggle="dropdown" aria-expanded="false" dropdownToggle>\r
          <i class="mdi mdi-dots-vertical m-0 text-muted h5"></i>\r
        </a>\r
        <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>\r
          <a class="dropdown-item edittask-details" href="javascript:void(0);" id="taskedit" data-id="#uptask-2" (click)="updateTask(task)">Edit</a>\r
          <a class="dropdown-item deletetask" href="javascript:void(0);" data-id="#uptask-2" (click)="delete($event)">Delete</a>\r
        </div>\r
      </div>\r
      <div class="float-end ms-2">\r
        <span class="badge rounded-pill badge-soft-secondary font-size-12" [ngClass]=" { \r
            'badge-soft-secondary': task.task === 'Waiting',\r
            'badge-soft-success': task.task === 'Complete',\r
            'badge-soft-primary': task.task === 'Approved',\r
            'badge-soft-warning': task.task === 'Pending' }">{{task.task}}</span>\r
      </div>\r
      <div>\r
        <h5 class="font-size-15"><a href="javascript: void(0);" class="text-dark">{{task.title}}</a>\r
        </h5>\r
        <p class="text-muted mb-4">{{task.date}}</p>\r
      </div>\r
\r
      <div class="avatar-group float-start">\r
        <div class="avatar-group-item">\r
          <a href="javascript: void(0);" class="d-inline-block">\r
            <img src="{{ task.user[0]}}" class="rounded-circle avatar-xs" alt="">\r
          </a>\r
        </div>\r
        @if(task.user[1]){\r
        <div class="avatar-group-item">\r
          <a href="javascript: void(0);" class="d-inline-block">\r
            <img src="{{ task.user[1]}}" class="rounded-circle avatar-xs" alt="">\r
          </a>\r
        </div>}\r
      </div>\r
\r
      <div class="text-end">\r
        <h5 class="font-size-15 mb-1">$ {{task.budget}}</h5>\r
        <p class="mb-0 text-muted">Budget</p>\r
      </div>\r
    </div>\r
  </div>\r
</ng-template>\r
\r
<div bsModal #modalForm="bs-modal" id="modalForm" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">\r
  <div class="modal-dialog modal-lg">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h5 class="modal-title add-task-title">Add New Task</h5>\r
        <h5 class="modal-title update-task-title" style="display: none;">Update Task</h5>\r
        <button type="button" class="btn-close" (click)="modalForm.hide()"></button>\r
      </div>\r
      <div class="modal-body">\r
        <form (ngSubmit)="submitForm()" [formGroup]="taskForm" id="NewtaskForm" role="form">\r
          <div class="form-group mb-3">\r
            <label for="taskname" class="col-form-label">Task Name<span class="text-danger">*</span></label>\r
            <div class="col-lg-12">\r
              <input id="taskname" name="taskname" type="text" class="form-control validate" formControlName="title" placeholder="Enter Task Name..." required>\r
            </div>\r
          </div>\r
          <div class="form-group mb-3">\r
            <label class="col-form-label">Task Description</label>\r
            <div class="col-lg-12">\r
              <textarea id="taskdesc" class="form-control" name="taskdesc" formControlName="taskdesc"></textarea>\r
            </div>\r
          </div>\r
\r
          <div class="form-group mb-3">\r
            <label class="col-form-label">Add Team Member<span class="text-danger">*</span></label>\r
            <ul class="list-unstyled user-list validate" id="taskassignee">\r
              @for(data of memberLists;track $index){\r
              <li>\r
                <div class="form-check form-check-primary mb-2 d-flex align-items-center">\r
                  <input class="form-check-input" type="checkbox" [checked]="data.checked == true" (change)="selectMember($index)">\r
                  <label class="form-check-label ms-2">{{data.name}}</label>\r
                  <img src="{{data.profile}}" class="rounded-circle avatar-xs m-1" alt="">\r
                </div>\r
              </li>\r
              }\r
            </ul>\r
          </div>\r
\r
          <div class="form-group mb-4">\r
            <label class="col-form-label">Status<span class="text-danger">*</span></label>\r
            <div class="col-lg-12">\r
              <select class="form-select validate" id="TaskStatus" formControlName="task" required>\r
                <option value="" selected>Choose..</option>\r
                <option value="Waiting">Waiting</option>\r
                <option value="Approved">Approved</option>\r
                <option value="Pending">Pending</option>\r
                <option value="Complete">Complete</option>\r
              </select>\r
            </div>\r
          </div>\r
\r
          <div class="form-group mb-4">\r
            <label for="taskbudget" class="col-form-label">Budget<span class="text-danger">*</span></label>\r
            <div class="col-lg-12">\r
              <input id="taskbudget" name="taskbudget" type="number" placeholder="Enter Task Budget..." formControlName="budget" class="form-control" required>\r
            </div>\r
          </div>\r
          <div class="row">\r
            <div class="col-lg-10">\r
              <button type="submit" class="btn btn-primary" id="addtask">Create Task</button>\r
              <!-- <button type="button" class="btn btn-primary d-none" id="updatetaskdetail">Update Task</button> -->\r
            </div>\r
          </div>\r
        </form>\r
      </div>\r
    </div><!-- /.modal-content -->\r
  </div><!-- /.modal-dialog -->\r
</div><!-- /.modal -->` }]
  }], () => [{ type: UntypedFormBuilder }, { type: Store }, { type: DatePipe }], { modalForm: [{
    type: ViewChild,
    args: ["modalForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KanbanboardComponent, { className: "KanbanboardComponent", filePath: "src/app/pages/tasks/kanbanboard/kanbanboard.component.ts", lineNumber: 21 });
})();

// src/app/pages/tasks/createtask/createtask.component.ts
var _c03 = ["dp"];
function CreatetaskComponent_For_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 31)(2, "div", 32);
    \u0275\u0275element(3, "input", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 34)(5, "div", 35);
    \u0275\u0275element(6, "input", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 37)(8, "div", 38)(9, "input", 39);
    \u0275\u0275listener("click", function CreatetaskComponent_For_35_Template_input_click_9_listener() {
      const $index_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteMember($index_r2));
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const $index_r2 = ctx.$index;
    \u0275\u0275advance(3);
    \u0275\u0275property("formControlName", $index_r2);
  }
}
var CreatetaskComponent = class _CreatetaskComponent {
  /**
   * Returns the form field value
   */
  get member() {
    return this.form.get("member");
  }
  /**
   * Add the member field in form
   */
  addMember() {
    this.member.push(new UntypedFormControl());
  }
  /**
   * Onclick delete member from form
   */
  deleteMember(i) {
    this.member.removeAt(i);
  }
  constructor() {
    this.form = new UntypedFormGroup({
      member: new UntypedFormArray([
        new UntypedFormControl("")
      ])
    });
    this.html = "<p>Content of the editor.</p>";
    this.dateRangeSelected = new EventEmitter();
  }
  ngOnInit() {
    this.editor = new Editor();
    this.breadCrumbItems = [{ label: "Tasks" }, { label: "Create Task", active: true }];
    this.hidden = true;
  }
  ngOnDestroy() {
    this.editor.destroy();
  }
  static {
    this.\u0275fac = function CreatetaskComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CreatetaskComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreatetaskComponent, selectors: [["app-createtask"]], viewQuery: function CreatetaskComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c03, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.datePicker = _t.first);
      }
    }, inputs: { fromDate: "fromDate", toDate: "toDate" }, outputs: { dateRangeSelected: "dateRangeSelected" }, decls: 48, vars: 9, consts: [[1, "container-fluid"], ["title", "Create Task", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [1, "outer-repeater"], ["data-repeater-list", "outer-group", 1, "outer"], ["data-repeater-item", "", 1, "outer"], [1, "row", "mb-4"], ["for", "taskname", 1, "col-form-label", "col-lg-2"], [1, "col-lg-10"], ["id", "taskname", "name", "taskname", "type", "text", "placeholder", "Enter Task Name...", 1, "form-control"], [1, "col-form-label", "col-lg-2"], [1, "col-lg-10", "mb-3"], [2, "height", "230px", 3, "editor"], [3, "editor", "ngModel", "disabled", "placeholder"], [1, "form-group", "row", "mb-4"], [1, "input-daterange", "input-group"], ["type", "text", "placeholder", "Start Date", "name", "start", "bsDatepicker", "", 1, "form-control", 3, "click", "ngModelChange", "ngModel"], ["type", "text", "placeholder", "End Date", "name", "end", "bsDatepicker", "", 1, "form-control", 3, "click", "ngModelChange", "ngModel"], [1, "inner-repeater", "mb-4"], [3, "formGroup"], ["formArrayName", "member", 1, "inner", "mb-0", "row"], [1, "inner", "col-lg-10", "ms-md-auto"], [1, "row", "justify-content-end"], ["data-repeater-create", "", "type", "button", "value", "Add Member", 1, "btn", "btn-success", "inner", 3, "click"], ["for", "taskbudget", 1, "col-form-label", "col-lg-2"], ["id", "taskbudget", "name", "taskbudget", "type", "text", "placeholder", "Enter Task Budget...", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "mb-3", "row", "align-items-center"], [1, "col-md-6"], ["type", "text", "placeholder", "Enter Name...", 1, "inner", "form-control", 3, "formControlName"], [1, "col-md-4"], [1, "mt-4", "mt-md-0"], ["type", "file", 1, "form-control"], [1, "col-md-2"], [1, "mt-2", "mt-md-0", "d-grid"], ["type", "button", "value", "Delete", 1, "btn", "btn-primary", "inner", 3, "click"]], template: function CreatetaskComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
        \u0275\u0275text(7, "Create New Task");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "form", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "label", 11);
        \u0275\u0275text(13, "Task Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 12);
        \u0275\u0275element(15, "input", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 10)(17, "label", 14);
        \u0275\u0275text(18, "Task Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 15);
        \u0275\u0275element(20, "ngx-editor-menu", 16)(21, "ngx-editor", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 18)(23, "label", 14);
        \u0275\u0275text(24, "Task Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 12)(26, "div", 19)(27, "input", 20);
        \u0275\u0275listener("click", function CreatetaskComponent_Template_input_click_27_listener() {
          return ctx.hidden = !ctx.hidden;
        });
        \u0275\u0275twoWayListener("ngModelChange", function CreatetaskComponent_Template_input_ngModelChange_27_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selected, $event) || (ctx.selected = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "input", 21);
        \u0275\u0275listener("click", function CreatetaskComponent_Template_input_click_28_listener() {
          return ctx.hidden = !ctx.hidden;
        });
        \u0275\u0275twoWayListener("ngModelChange", function CreatetaskComponent_Template_input_ngModelChange_28_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selected, $event) || (ctx.selected = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(29, "div", 22)(30, "form", 23)(31, "div", 24)(32, "label", 14);
        \u0275\u0275text(33, "Add Team Member");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(34, CreatetaskComponent_For_35_Template, 10, 1, "div", 25, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 26)(37, "div", 12)(38, "input", 27);
        \u0275\u0275listener("click", function CreatetaskComponent_Template_input_click_38_listener() {
          return ctx.addMember();
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(39, "div", 10)(40, "label", 28);
        \u0275\u0275text(41, "Budget");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 12);
        \u0275\u0275element(43, "input", 29);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(44, "div", 26)(45, "div", 12)(46, "button", 30);
        \u0275\u0275text(47, "Create Task");
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(19);
        \u0275\u0275property("editor", ctx.editor);
        \u0275\u0275advance();
        \u0275\u0275property("editor", ctx.editor)("ngModel", ctx.html)("disabled", false)("placeholder", "Type here...");
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.selected);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.selected);
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.member.controls);
      }
    }, dependencies: [NgxEditorModule, NgxEditorComponent, NgxEditorMenuComponent, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective], styles: ["\n\n.custom-day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n.custom-day.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n.custom-day.range[_ngcontent-%COMP%], \n.custom-day[_ngcontent-%COMP%]:hover {\n  background-color: #7d90ee;\n  color: white;\n}\n.custom-day.faded[_ngcontent-%COMP%] {\n  background-color: #7d90ee;\n}\n/*# sourceMappingURL=createtask.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreatetaskComponent, [{
    type: Component,
    args: [{ selector: "app-createtask", imports: [NgxEditorModule, BsDatepickerModule], schemas: [NO_ERRORS_SCHEMA], template: `<div class="container-fluid">\r
\r
  <!-- start page title -->\r
  <app-page-title title="Create Task" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
  <!-- end page title -->\r
\r
  <div class="row">\r
    <div class="col-lg-12">\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title mb-4">Create New Task</h4>\r
          <form class="outer-repeater">\r
            <div data-repeater-list="outer-group" class="outer">\r
              <div data-repeater-item class="outer">\r
                <div class="row mb-4">\r
                  <label for="taskname" class="col-form-label col-lg-2">Task Name</label>\r
                  <div class="col-lg-10">\r
                    <input id="taskname" name="taskname" type="text" class="form-control"\r
                      placeholder="Enter Task Name...">\r
                  </div>\r
                </div>\r
                <div class="row mb-4">\r
                  <label class="col-form-label col-lg-2">Task Description</label>\r
                  <div class="col-lg-10 mb-3">\r
                    <ngx-editor-menu [editor]="editor" style="height: 230px;"> </ngx-editor-menu>\r
                    <ngx-editor [editor]="editor" [ngModel]="html" [disabled]="false"\r
                      [placeholder]="'Type here...'"></ngx-editor>\r
                  </div>\r
                </div>\r
\r
                <div class="form-group row mb-4">\r
                  <label class="col-form-label col-lg-2">Task Date</label>\r
                  <div class="col-lg-10">\r
                    <div class="input-daterange input-group">\r
                      <input type="text" class="form-control" (click)="hidden=!hidden" placeholder="Start Date"\r
                        name="start" [(ngModel)]="selected" bsDatepicker />\r
                      <input type="text" class="form-control" (click)="hidden=!hidden" placeholder="End Date" name="end"\r
                        [(ngModel)]="selected" bsDatepicker />\r
                    </div>\r
                  </div>\r
                </div>\r
\r
                <div class="inner-repeater mb-4">\r
                  <form [formGroup]="form">\r
                    <div class="inner mb-0 row" formArrayName="member">\r
                      <label class="col-form-label col-lg-2">Add Team Member</label>\r
                      @for(data of member.controls;track $index){\r
                      <div class="inner col-lg-10 ms-md-auto">\r
                        <div class="mb-3 row align-items-center">\r
                          <div class="col-md-6">\r
                            <input type="text" [formControlName]="$index" class="inner form-control"\r
                              placeholder="Enter Name..." />\r
                          </div>\r
                          <div class="col-md-4">\r
                            <div class="mt-4 mt-md-0">\r
                              <input class="form-control" type="file">\r
                            </div>\r
                          </div>\r
                          <div class="col-md-2">\r
                            <div class="mt-2 mt-md-0 d-grid">\r
                              <input type="button" class="btn btn-primary inner" value="Delete"\r
                                (click)="deleteMember($index)" />\r
                            </div>\r
                          </div>\r
                        </div>\r
                      </div>\r
                      }\r
                    </div>\r
                  </form>\r
                  <div class="row justify-content-end">\r
                    <div class="col-lg-10">\r
                      <input data-repeater-create type="button" class="btn btn-success inner" value="Add Member"\r
                        (click)="addMember()" />\r
                    </div>\r
                  </div>\r
                </div>\r
                <div class="row mb-4">\r
                  <label for="taskbudget" class="col-form-label col-lg-2">Budget</label>\r
                  <div class="col-lg-10">\r
                    <input id="taskbudget" name="taskbudget" type="text" placeholder="Enter Task Budget..."\r
                      class="form-control">\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </form>\r
          <div class="row justify-content-end">\r
            <div class="col-lg-10">\r
              <button type="submit" class="btn btn-primary">Create Task</button>\r
            </div>\r
          </div>\r
\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
  <!-- end row -->\r
\r
</div> <!-- container-fluid -->`, styles: ["/* src/app/pages/tasks/createtask/createtask.component.scss */\n.custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n.custom-day.focused {\n  background-color: #e6e6e6;\n}\n.custom-day.range,\n.custom-day:hover {\n  background-color: #7d90ee;\n  color: white;\n}\n.custom-day.faded {\n  background-color: #7d90ee;\n}\n/*# sourceMappingURL=createtask.component.css.map */\n"] }]
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreatetaskComponent, { className: "CreatetaskComponent", filePath: "src/app/pages/tasks/createtask/createtask.component.ts", lineNumber: 18 });
})();

// src/app/pages/tasks/tasks-routing.module.ts
var routes = [
  {
    path: "list",
    component: ListComponent
  },
  {
    path: "kanban",
    component: KanbanboardComponent
  },
  {
    path: "create",
    component: CreatetaskComponent
  }
];
var TasksRoutingModule = class _TasksRoutingModule {
  static {
    this.\u0275fac = function TasksRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TasksRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TasksRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TasksRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/pages/tasks/tasks.module.ts
var TasksModule = class _TasksModule {
  static {
    this.\u0275fac = function TasksModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TasksModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TasksModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [TasksRoutingModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TasksModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        TasksRoutingModule
      ]
    }]
  }], null, null);
})();

export {
  TasksModule
};
//# sourceMappingURL=chunk-K54UPCPM.js.map
