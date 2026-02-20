import {
  FlatpickrDirective
} from "./chunk-QLOUBXRC.js";
import {
  Editor,
  NgxEditorComponent,
  NgxEditorMenuComponent,
  NgxEditorModule,
  Validators as Validators2
} from "./chunk-2VAAR5CT.js";
import {
  NgSelectComponent,
  NgSelectModule
} from "./chunk-7HJT23BB.js";
import {
  CdkStep,
  CdkStepLabel,
  CdkStepperModule,
  CdkStepperNext,
  CdkStepperPrevious,
  NgStepperComponent,
  NgStepperModule
} from "./chunk-W4VCLMXM.js";
import {
  DROPZONE_CONFIG,
  DropzoneComponent,
  DropzoneModule
} from "./chunk-NBSG53RP.js";
import {
  BsDatepickerDirective,
  BsDatepickerInputDirective,
  BsDatepickerModule,
  BsDaterangepickerDirective,
  BsDaterangepickerInputDirective
} from "./chunk-C3TIYFCT.js";
import {
  PagetitleComponent
} from "./chunk-WW5M2ABB.js";
import {
  DefaultValueAccessor,
  FormArrayName,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  ɵNgNoValidate
} from "./chunk-ICQKGMTO.js";
import {
  ApplicationRef,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ComponentFactoryResolver$1,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NO_ERRORS_SCHEMA,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  Pipe,
  Renderer2,
  RouterModule,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  forwardRef,
  inject,
  input,
  isPlatformBrowser,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-BM6E27KQ.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-H6NRAODO.js";

// src/app/pages/form/elements/elements.component.ts
var ElementsComponent = class _ElementsComponent {
  constructor() {
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Forms" }, { label: "Form Elements", active: true }];
  }
  static {
    this.\u0275fac = function ElementsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ElementsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ElementsComponent, selectors: [["app-elements"]], decls: 484, vars: 1, consts: [[1, "container-fluid"], ["title", "Form Elements", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-title-desc"], [1, "mb-3", "row"], ["for", "example-text-input", 1, "col-md-2", "col-form-label"], [1, "col-md-10"], ["type", "text", "value", "Artisanal kale", "id", "example-text-input", 1, "form-control"], ["for", "example-search-input", 1, "col-md-2", "col-form-label"], ["type", "search", "value", "How do I shoot web", "id", "example-search-input", 1, "form-control"], ["for", "example-email-input", 1, "col-md-2", "col-form-label"], ["type", "email", "value", "bootstrap@example.com", "id", "example-email-input", 1, "form-control"], ["for", "example-url-input", 1, "col-md-2", "col-form-label"], ["type", "url", "value", "https://getbootstrap.com", "id", "example-url-input", 1, "form-control"], ["for", "example-tel-input", 1, "col-md-2", "col-form-label"], ["type", "tel", "value", "1-(555)-555-5555", "id", "example-tel-input", 1, "form-control"], ["for", "example-password-input", 1, "col-md-2", "col-form-label"], ["type", "password", "value", "hunter2", "id", "example-password-input", 1, "form-control"], ["for", "example-number-input", 1, "col-md-2", "col-form-label"], ["type", "number", "value", "42", "id", "example-number-input", 1, "form-control"], ["for", "example-datetime-local-input", 1, "col-md-2", "col-form-label"], ["type", "datetime-local", "value", "2019-08-19T13:45:00", "id", "example-datetime-local-input", 1, "form-control"], ["for", "example-date-input", 1, "col-md-2", "col-form-label"], ["type", "date", "value", "2019-08-19", "id", "example-date-input", 1, "form-control"], ["for", "example-month-input", 1, "col-md-2", "col-form-label"], ["type", "month", "value", "2019-08", "id", "example-month-input", 1, "form-control"], ["for", "example-week-input", 1, "col-md-2", "col-form-label"], ["type", "week", "value", "2019-W33", "id", "example-week-input", 1, "form-control"], ["for", "example-time-input", 1, "col-md-2", "col-form-label"], ["type", "time", "value", "13:45:00", "id", "example-time-input", 1, "form-control"], ["for", "example-color-input", 1, "col-md-2", "col-form-label"], ["type", "color", "value", "#556ee6", "id", "example-color-input", 1, "form-control", "form-control-color", "mw-100"], [1, "col-md-2", "col-form-label"], [1, "form-select"], ["for", "exampleDataList", 1, "col-md-2", "col-form-label"], ["list", "datalistOptions", "id", "exampleDataList", "placeholder", "Type to search...", 1, "form-control"], ["id", "datalistOptions"], ["value", "San Francisco"], ["value", "New York"], ["value", "Seattle"], ["value", "Los Angeles"], ["value", "Chicago"], [1, "col-lg-12"], [1, "col-lg-6"], [1, "form-label"], ["type", "text", "placeholder", "Default input", 1, "form-control"], [1, "mt-4"], ["type", "text", "placeholder", ".form-control-sm", 1, "form-control", "form-control-sm"], ["type", "text", "placeholder", ".form-control-lg", 1, "form-control", "form-control-lg"], ["for", "customRange1", 1, "form-label"], ["type", "range", "id", "customRange1", 1, "form-range"], [1, "row", "mt-2"], [1, "font-size-14"], ["type", "range", "min", "0", "max", "5", "id", "customRange2", 1, "form-range"], [1, "col-xl-3", "col-sm-6"], [1, "font-size-14", "mb-4"], [1, "mdi", "mdi-arrow-right", "text-primary", "mr-1"], [1, "form-check", "mb-3"], ["type", "checkbox", "id", "formCheck1", 1, "form-check-input"], ["for", "formCheck1", 1, "form-check-label"], [1, "form-check"], ["type", "checkbox", "id", "formCheck2", "checked", "", 1, "form-check-input"], ["for", "formCheck2", 1, "form-check-label"], [1, "form-check", "form-check-right", "mb-3"], ["type", "checkbox", "id", "formCheckRight1", 1, "form-check-input"], ["for", "formCheckRight1", 1, "form-check-label"], [1, "form-check", "form-check-right"], ["type", "checkbox", "id", "formCheckRight2", "checked", "", 1, "form-check-input"], ["for", "formCheckRight2", 1, "form-check-label"], [1, "sub-header", "mb-4"], [1, "form-check", "form-check-primary", "mb-3"], ["type", "checkbox", "id", "formCheckcolor1", "checked", "", 1, "form-check-input"], ["for", "formCheckcolor1", 1, "form-check-label"], [1, "form-check", "form-check-success", "mb-3"], ["type", "checkbox", "id", "formCheckcolor2", "checked", "", 1, "form-check-input"], ["for", "formCheckcolor2", 1, "form-check-label"], [1, "form-check", "form-check-info", "mb-3"], ["type", "checkbox", "id", "formCheckcolor3", "checked", "", 1, "form-check-input"], ["for", "formCheckcolor3", 1, "form-check-label"], [1, "form-check", "form-check-warning", "mb-3"], ["type", "checkbox", "id", "formCheckcolor4", "checked", "", 1, "form-check-input"], ["for", "formCheckcolor4", 1, "form-check-label"], [1, "form-check", "form-check-danger"], ["type", "checkbox", "id", "formCheckcolor5", "checked", "", 1, "form-check-input"], ["for", "formCheckcolor5", 1, "form-check-label"], [1, "form-check", "form-checkbox-outline", "form-check-primary", "mb-3"], ["type", "checkbox", "id", "customCheckcolor1", "checked", "", 1, "form-check-input"], ["for", "customCheckcolor1", 1, "form-check-label"], [1, "form-check", "form-checkbox-outline", "form-check-success", "mb-3"], ["type", "checkbox", "id", "customCheckcolor2", "checked", "", 1, "form-check-input"], ["for", "customCheckcolor2", 1, "form-check-label"], [1, "form-check", "form-checkbox-outline", "form-check-info", "mb-3"], ["type", "checkbox", "id", "customCheckcolor3", "checked", "", 1, "form-check-input"], ["for", "customCheckcolor3", 1, "form-check-label"], [1, "form-check", "form-checkbox-outline", "form-check-warning", "mb-3"], ["type", "checkbox", "id", "customCheckcolor4", "checked", "", 1, "form-check-input"], ["for", "customCheckcolor4", 1, "form-check-label"], [1, "form-check", "form-checkbox-outline", "form-check-danger"], ["type", "checkbox", "id", "customCheckcolor5", "checked", "", 1, "form-check-input"], ["for", "customCheckcolor5", 1, "form-check-label"], ["type", "radio", "name", "formRadios", "id", "formRadios1", "checked", "", 1, "form-check-input"], ["for", "formRadios1", 1, "form-check-label"], ["type", "radio", "name", "formRadios", "id", "formRadios2", 1, "form-check-input"], ["for", "formRadios2", 1, "form-check-label"], ["type", "radio", "name", "formRadiosRight", "id", "formRadiosRight1", "checked", "", 1, "form-check-input"], ["for", "formRadiosRight1", 1, "form-check-label"], ["type", "radio", "name", "formRadiosRight", "id", "formRadiosRight2", 1, "form-check-input"], ["for", "formRadiosRight2", 1, "form-check-label"], [1, "form-check", "form-radio-primary", "mb-3"], ["type", "radio", "name", "formRadioColor1", "id", "formRadioColor1", "checked", "", 1, "form-check-input"], ["for", "formRadioColor1", 1, "form-check-label"], [1, "form-check", "form-radio-success", "mb-3"], ["type", "radio", "name", "formRadioColor2", "id", "formRadioColor2", "checked", "", 1, "form-check-input"], ["for", "formRadioColor2", 1, "form-check-label"], [1, "form-check", "form-radio-info", "mb-3"], ["type", "radio", "name", "formRadioColor3", "id", "formRadioColor3", "checked", "", 1, "form-check-input"], ["for", "formRadioColor3", 1, "form-check-label"], [1, "form-check", "form-radio-warning", "mb-3"], ["type", "radio", "name", "formRadioColor4", "id", "formRadioColor4", "checked", "", 1, "form-check-input"], ["for", "formRadioColor4", 1, "form-check-label"], [1, "form-check", "form-radio-danger", "mb-3"], ["type", "radio", "name", "formRadioColor5", "id", "formRadioColor5", "checked", "", 1, "form-check-input"], ["for", "formRadioColor5", 1, "form-check-label"], [1, "form-check", "form-radio-outline", "form-radio-primary", "mb-3"], ["type", "radio", "name", "formRadio1", "id", "formRadio1", "checked", "", 1, "form-check-input"], ["for", "formRadio1", 1, "form-check-label"], [1, "form-check", "form-radio-outline", "form-radio-success", "mb-3"], ["type", "radio", "name", "formRadio2", "id", "formRadio2", "checked", "", 1, "form-check-input"], ["for", "formRadio2", 1, "form-check-label"], [1, "form-check", "form-radio-outline", "form-radio-info", "mb-3"], ["type", "radio", "name", "formRadio3", "id", "formRadio3", "checked", "", 1, "form-check-input"], ["for", "formRadio3", 1, "form-check-label"], [1, "form-check", "form-radio-outline", "form-radio-warning", "mb-3"], ["type", "radio", "name", "formRadio4", "id", "formRadio4", "checked", "", 1, "form-check-input"], ["for", "formRadio4", 1, "form-check-label"], [1, "form-check", "form-radio-outline", "form-radio-danger", "mb-3"], ["type", "radio", "name", "formRadio5", "id", "formRadio5", "checked", "", 1, "form-check-input"], ["for", "formRadio5", 1, "form-check-label"], [1, "col-sm-6"], [1, "font-size-14", "mb-3"], [1, "form-check", "form-switch", "mb-3"], ["type", "checkbox", "id", "flexSwitchCheckDefault", 1, "form-check-input"], ["for", "flexSwitchCheckDefault", 1, "form-check-label"], ["type", "checkbox", "id", "flexSwitchCheckChecked", "checked", "", 1, "form-check-input"], ["for", "flexSwitchCheckChecked", 1, "form-check-label"], ["type", "checkbox", "id", "flexSwitchCheckDisabled", "disabled", "", 1, "form-check-input"], ["for", "flexSwitchCheckDisabled", 1, "form-check-label"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "flexSwitchCheckCheckedDisabled", "checked", "", "disabled", "", 1, "form-check-input"], ["for", "flexSwitchCheckCheckedDisabled", 1, "form-check-label"], [1, "mt-4", "mt-sm-0"], ["type", "checkbox", "id", "SwitchCheckSizesm", "checked", "", 1, "form-check-input"], ["for", "SwitchCheckSizesm", 1, "form-check-label"], [1, "form-check", "form-switch", "form-switch-md", "mb-3"], ["type", "checkbox", "id", "SwitchCheckSizemd", 1, "form-check-input"], ["for", "SwitchCheckSizemd", 1, "form-check-label"], [1, "form-check", "form-switch", "form-switch-lg", "mb-3"], ["type", "checkbox", "id", "SwitchCheckSizelg", "checked", "", 1, "form-check-input"], ["for", "SwitchCheckSizelg", 1, "form-check-label"], [1, "card-title", "mb-4"], [1, "mdi", "mdi-arrow-right", "text-primary"], [1, "mt-3"], ["for", "formFile", 1, "form-label"], ["type", "file", "id", "formFile", 1, "form-control"], ["for", "formFileSm", 1, "form-label"], ["id", "formFileSm", "type", "file", 1, "form-control", "form-control-sm"], ["for", "formFileLg", 1, "form-label"], ["id", "formFileLg", "type", "file", 1, "form-control", "form-control-lg"], [1, "mt-4", "pt-2"], [1, "font-size-14", "mb-0"], [1, "input-group", "mb-3"], ["for", "inputGroupFile01", 1, "input-group-text"], ["type", "file", "id", "inputGroupFile01", 1, "form-control"], [1, "input-group"], ["type", "file", "id", "inputGroupFile02", 1, "form-control"], ["for", "inputGroupFile02", 1, "input-group-text"], ["type", "button", "id", "inputGroupFileAddon03", 1, "btn", "btn-primary"], ["type", "file", "id", "inputGroupFile03", "aria-describedby", "inputGroupFileAddon03", "aria-label", "Upload", 1, "form-control"], ["type", "file", "id", "inputGroupFile04", "aria-describedby", "inputGroupFileAddon04", "aria-label", "Upload", 1, "form-control"], ["type", "button", "id", "inputGroupFileAddon04", 1, "btn", "btn-primary"]], template: function ElementsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
        \u0275\u0275text(7, "Textual inputs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 7);
        \u0275\u0275text(9, "Here are examples of ");
        \u0275\u0275elementStart(10, "code");
        \u0275\u0275text(11, ".form-control");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " applied to each textual HTML5 ");
        \u0275\u0275elementStart(13, "code");
        \u0275\u0275text(14, "<input>");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "code");
        \u0275\u0275text(16, "type");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, ".");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 8)(19, "label", 9);
        \u0275\u0275text(20, "Text");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 10);
        \u0275\u0275element(22, "input", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 8)(24, "label", 12);
        \u0275\u0275text(25, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 10);
        \u0275\u0275element(27, "input", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 8)(29, "label", 14);
        \u0275\u0275text(30, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 10);
        \u0275\u0275element(32, "input", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 8)(34, "label", 16);
        \u0275\u0275text(35, "URL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 10);
        \u0275\u0275element(37, "input", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 8)(39, "label", 18);
        \u0275\u0275text(40, "Telephone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 10);
        \u0275\u0275element(42, "input", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 8)(44, "label", 20);
        \u0275\u0275text(45, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 10);
        \u0275\u0275element(47, "input", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 8)(49, "label", 22);
        \u0275\u0275text(50, "Number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "div", 10);
        \u0275\u0275element(52, "input", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "div", 8)(54, "label", 24);
        \u0275\u0275text(55, "Date and time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 10);
        \u0275\u0275element(57, "input", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "div", 8)(59, "label", 26);
        \u0275\u0275text(60, "Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 10);
        \u0275\u0275element(62, "input", 27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div", 8)(64, "label", 28);
        \u0275\u0275text(65, "Month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "div", 10);
        \u0275\u0275element(67, "input", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "div", 8)(69, "label", 30);
        \u0275\u0275text(70, "Week");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "div", 10);
        \u0275\u0275element(72, "input", 31);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "div", 8)(74, "label", 32);
        \u0275\u0275text(75, "Time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "div", 10);
        \u0275\u0275element(77, "input", 33);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(78, "div", 8)(79, "label", 34);
        \u0275\u0275text(80, "Color");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "div", 10);
        \u0275\u0275element(82, "input", 35);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "div", 8)(84, "label", 36);
        \u0275\u0275text(85, "Select");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "div", 10)(87, "select", 37)(88, "option");
        \u0275\u0275text(89, "Select");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "option");
        \u0275\u0275text(91, "Large select");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "option");
        \u0275\u0275text(93, "Small select");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(94, "div", 2)(95, "label", 38);
        \u0275\u0275text(96, "Datalists");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "div", 10);
        \u0275\u0275element(98, "input", 39);
        \u0275\u0275elementStart(99, "datalist", 40);
        \u0275\u0275element(100, "option", 41)(101, "option", 42)(102, "option", 43)(103, "option", 44)(104, "option", 45);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(105, "div", 2)(106, "div", 46)(107, "div", 4)(108, "div", 5)(109, "h4", 6);
        \u0275\u0275text(110, "Sizing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "p", 7);
        \u0275\u0275text(112, "Set heights using classes like ");
        \u0275\u0275elementStart(113, "code");
        \u0275\u0275text(114, ".form-control-lg");
        \u0275\u0275elementEnd();
        \u0275\u0275text(115, " and ");
        \u0275\u0275elementStart(116, "code");
        \u0275\u0275text(117, ".form-control-sm");
        \u0275\u0275elementEnd();
        \u0275\u0275text(118, ".");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "div")(120, "div", 2)(121, "div", 47)(122, "div")(123, "label", 48);
        \u0275\u0275text(124, "Default input");
        \u0275\u0275elementEnd();
        \u0275\u0275element(125, "input", 49);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(126, "div", 2)(127, "div", 47)(128, "div", 50)(129, "label", 48);
        \u0275\u0275text(130, "Small Input");
        \u0275\u0275elementEnd();
        \u0275\u0275element(131, "input", 51);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(132, "div", 47)(133, "div", 50)(134, "label", 48);
        \u0275\u0275text(135, "Large Input");
        \u0275\u0275elementEnd();
        \u0275\u0275element(136, "input", 52);
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(137, "div", 2)(138, "div", 46)(139, "div", 4)(140, "div", 5)(141, "h4", 6);
        \u0275\u0275text(142, "Range Inputs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "p", 7);
        \u0275\u0275text(144, "Create custom ");
        \u0275\u0275elementStart(145, "code");
        \u0275\u0275text(146, '<input type="range">');
        \u0275\u0275elementEnd();
        \u0275\u0275text(147, " controls with ");
        \u0275\u0275elementStart(148, "code");
        \u0275\u0275text(149, ".form-range");
        \u0275\u0275elementEnd();
        \u0275\u0275text(150, ".");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(151, "div", 2)(152, "div", 47)(153, "div")(154, "label", 53);
        \u0275\u0275text(155, "Example range");
        \u0275\u0275elementEnd();
        \u0275\u0275element(156, "input", 54);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(157, "div", 55)(158, "div", 47)(159, "div", 50)(160, "h5", 56);
        \u0275\u0275text(161, "Min and max");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "p", 7);
        \u0275\u0275text(163, "Range inputs have implicit values for min and max\u20140 and 100, respectively.");
        \u0275\u0275elementEnd();
        \u0275\u0275element(164, "input", 57);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(165, "div", 47)(166, "div", 50)(167, "h5", 56);
        \u0275\u0275text(168, "Steps");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(169, "p", 7);
        \u0275\u0275text(170, "By default, range inputs \u201Csnap\u201D to integer values. To change this, you can specify a ");
        \u0275\u0275elementStart(171, "code");
        \u0275\u0275text(172, "step");
        \u0275\u0275elementEnd();
        \u0275\u0275text(173, " value.");
        \u0275\u0275elementEnd();
        \u0275\u0275element(174, "input", 57);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(175, "div", 2)(176, "div", 46)(177, "div", 4)(178, "div", 5)(179, "h4", 6);
        \u0275\u0275text(180, "Checkboxes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(181, "div", 2)(182, "div", 58)(183, "div", 50)(184, "h5", 59);
        \u0275\u0275element(185, "i", 60);
        \u0275\u0275text(186, " Form Checkboxes ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(187, "div", 61);
        \u0275\u0275element(188, "input", 62);
        \u0275\u0275elementStart(189, "label", 63);
        \u0275\u0275text(190, " Form Checkbox ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(191, "div", 64);
        \u0275\u0275element(192, "input", 65);
        \u0275\u0275elementStart(193, "label", 66);
        \u0275\u0275text(194, " Form Checkbox checked ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(195, "div", 58)(196, "div", 50)(197, "h5", 59);
        \u0275\u0275element(198, "i", 60);
        \u0275\u0275text(199, " Form Checkboxes Right");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(200, "div")(201, "div", 67);
        \u0275\u0275element(202, "input", 68);
        \u0275\u0275elementStart(203, "label", 69);
        \u0275\u0275text(204, " Form Checkbox Right ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(205, "div")(206, "div", 70);
        \u0275\u0275element(207, "input", 71);
        \u0275\u0275elementStart(208, "label", 72);
        \u0275\u0275text(209, " Form Checkbox Right checked ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(210, "div", 58)(211, "div", 50)(212, "h5", 56);
        \u0275\u0275element(213, "i", 60);
        \u0275\u0275text(214, " Form Checkboxes colors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(215, "p", 73);
        \u0275\u0275text(216, "Add class ");
        \u0275\u0275elementStart(217, "code");
        \u0275\u0275text(218, ".form-check-* ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(219, " for a color Checkboxes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(220, "div")(221, "div", 74);
        \u0275\u0275element(222, "input", 75);
        \u0275\u0275elementStart(223, "label", 76);
        \u0275\u0275text(224, " Checkbox Primary ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(225, "div", 77);
        \u0275\u0275element(226, "input", 78);
        \u0275\u0275elementStart(227, "label", 79);
        \u0275\u0275text(228, " Checkbox Success ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(229, "div", 80);
        \u0275\u0275element(230, "input", 81);
        \u0275\u0275elementStart(231, "label", 82);
        \u0275\u0275text(232, " Checkbox Info ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(233, "div", 83);
        \u0275\u0275element(234, "input", 84);
        \u0275\u0275elementStart(235, "label", 85);
        \u0275\u0275text(236, " Checkbox Warning ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(237, "div", 86);
        \u0275\u0275element(238, "input", 87);
        \u0275\u0275elementStart(239, "label", 88);
        \u0275\u0275text(240, " Checkbox Danger ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(241, "div", 58)(242, "div", 50)(243, "h5", 56);
        \u0275\u0275element(244, "i", 60);
        \u0275\u0275text(245, " Form Checkboxes Outline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(246, "p", 73);
        \u0275\u0275text(247, "Add class ");
        \u0275\u0275elementStart(248, "code");
        \u0275\u0275text(249, ".form-checkbox-outline");
        \u0275\u0275elementEnd();
        \u0275\u0275text(250, " & ");
        \u0275\u0275elementStart(251, "code");
        \u0275\u0275text(252, ".form-check-* ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(253, " for a color Checkboxes ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(254, "div")(255, "div", 89);
        \u0275\u0275element(256, "input", 90);
        \u0275\u0275elementStart(257, "label", 91);
        \u0275\u0275text(258, " Checkbox Outline Primary ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(259, "div", 92);
        \u0275\u0275element(260, "input", 93);
        \u0275\u0275elementStart(261, "label", 94);
        \u0275\u0275text(262, " Checkbox Outline Success ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(263, "div", 95);
        \u0275\u0275element(264, "input", 96);
        \u0275\u0275elementStart(265, "label", 97);
        \u0275\u0275text(266, " Checkbox Outline Info ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(267, "div", 98);
        \u0275\u0275element(268, "input", 99);
        \u0275\u0275elementStart(269, "label", 100);
        \u0275\u0275text(270, " Checkbox Outline Warning ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(271, "div", 101);
        \u0275\u0275element(272, "input", 102);
        \u0275\u0275elementStart(273, "label", 103);
        \u0275\u0275text(274, " Checkbox Outline Danger ");
        \u0275\u0275elementEnd()()()()()()()()()();
        \u0275\u0275elementStart(275, "div", 2)(276, "div", 46)(277, "div", 4)(278, "div", 5)(279, "h4", 6);
        \u0275\u0275text(280, "Radios");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(281, "div", 2)(282, "div", 58)(283, "div", 50)(284, "h5", 59);
        \u0275\u0275text(285, "Form Radios");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(286, "div", 61);
        \u0275\u0275element(287, "input", 104);
        \u0275\u0275elementStart(288, "label", 105);
        \u0275\u0275text(289, " Form Radio ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(290, "div", 64);
        \u0275\u0275element(291, "input", 106);
        \u0275\u0275elementStart(292, "label", 107);
        \u0275\u0275text(293, " Form Radio checked ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(294, "div", 58)(295, "div", 50)(296, "h5", 59);
        \u0275\u0275text(297, "Form Radios Right");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(298, "div")(299, "div", 67);
        \u0275\u0275element(300, "input", 108);
        \u0275\u0275elementStart(301, "label", 109);
        \u0275\u0275text(302, " Form Radio Right ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(303, "div")(304, "div", 70);
        \u0275\u0275element(305, "input", 110);
        \u0275\u0275elementStart(306, "label", 111);
        \u0275\u0275text(307, " Form Radio Right checked ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(308, "div", 58)(309, "div", 50)(310, "h5", 56);
        \u0275\u0275element(311, "i", 60);
        \u0275\u0275text(312, " Form Radio colors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(313, "p", 73);
        \u0275\u0275text(314, "Add class ");
        \u0275\u0275elementStart(315, "code");
        \u0275\u0275text(316, ".form-radio-* ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(317, " for a color Radios");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(318, "div")(319, "div", 112);
        \u0275\u0275element(320, "input", 113);
        \u0275\u0275elementStart(321, "label", 114);
        \u0275\u0275text(322, " Radio Primary ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(323, "div", 115);
        \u0275\u0275element(324, "input", 116);
        \u0275\u0275elementStart(325, "label", 117);
        \u0275\u0275text(326, " Radio Success ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(327, "div", 118);
        \u0275\u0275element(328, "input", 119);
        \u0275\u0275elementStart(329, "label", 120);
        \u0275\u0275text(330, " Radio Info ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(331, "div", 121);
        \u0275\u0275element(332, "input", 122);
        \u0275\u0275elementStart(333, "label", 123);
        \u0275\u0275text(334, " Radio warning ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(335, "div", 124);
        \u0275\u0275element(336, "input", 125);
        \u0275\u0275elementStart(337, "label", 126);
        \u0275\u0275text(338, " Radio Danger ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(339, "div", 58)(340, "div", 50)(341, "h5", 56);
        \u0275\u0275element(342, "i", 60);
        \u0275\u0275text(343, " Form Radio Outline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(344, "p", 73);
        \u0275\u0275text(345, "Add class ");
        \u0275\u0275elementStart(346, "code");
        \u0275\u0275text(347, "form-radio-outline");
        \u0275\u0275elementEnd();
        \u0275\u0275text(348, " & ");
        \u0275\u0275elementStart(349, "code");
        \u0275\u0275text(350, ".form-radio-* ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(351, " for a color Checkboxes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(352, "div")(353, "div", 127);
        \u0275\u0275element(354, "input", 128);
        \u0275\u0275elementStart(355, "label", 129);
        \u0275\u0275text(356, " Radio Outline Primary ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(357, "div", 130);
        \u0275\u0275element(358, "input", 131);
        \u0275\u0275elementStart(359, "label", 132);
        \u0275\u0275text(360, " Radio Outline Success ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(361, "div", 133);
        \u0275\u0275element(362, "input", 134);
        \u0275\u0275elementStart(363, "label", 135);
        \u0275\u0275text(364, " Radio Outline Info ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(365, "div", 136);
        \u0275\u0275element(366, "input", 137);
        \u0275\u0275elementStart(367, "label", 138);
        \u0275\u0275text(368, " Radio Outline Warning ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(369, "div", 139);
        \u0275\u0275element(370, "input", 140);
        \u0275\u0275elementStart(371, "label", 141);
        \u0275\u0275text(372, " Radio Outline Danger ");
        \u0275\u0275elementEnd()()()()()()()()()();
        \u0275\u0275elementStart(373, "div", 2)(374, "div", 46)(375, "div", 4)(376, "div", 5)(377, "h4", 6);
        \u0275\u0275text(378, "Switches");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(379, "p", 7);
        \u0275\u0275text(380, "A switch has the markup of a custom checkbox but uses the ");
        \u0275\u0275elementStart(381, "code");
        \u0275\u0275text(382, ".form-switch");
        \u0275\u0275elementEnd();
        \u0275\u0275text(383, " class to render a toggle switch. Switches also support the ");
        \u0275\u0275elementStart(384, "code");
        \u0275\u0275text(385, "disabled");
        \u0275\u0275elementEnd();
        \u0275\u0275text(386, " attribute.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(387, "div", 2)(388, "div", 142)(389, "div")(390, "h5", 143);
        \u0275\u0275text(391, "Switch examples");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(392, "div", 144);
        \u0275\u0275element(393, "input", 145);
        \u0275\u0275elementStart(394, "label", 146);
        \u0275\u0275text(395, "Default switch checkbox input");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(396, "div", 144);
        \u0275\u0275element(397, "input", 147);
        \u0275\u0275elementStart(398, "label", 148);
        \u0275\u0275text(399, "Checked switch checkbox input");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(400, "div", 144);
        \u0275\u0275element(401, "input", 149);
        \u0275\u0275elementStart(402, "label", 150);
        \u0275\u0275text(403, "Disabled switch checkbox input");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(404, "div", 151);
        \u0275\u0275element(405, "input", 152);
        \u0275\u0275elementStart(406, "label", 153);
        \u0275\u0275text(407, "Disabled checked switch checkbox input");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(408, "div", 142)(409, "div", 154)(410, "h5", 143);
        \u0275\u0275text(411, "Switch sizes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(412, "div", 144);
        \u0275\u0275element(413, "input", 155);
        \u0275\u0275elementStart(414, "label", 156);
        \u0275\u0275text(415, "Small Size Switch");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(416, "div", 157);
        \u0275\u0275element(417, "input", 158);
        \u0275\u0275elementStart(418, "label", 159);
        \u0275\u0275text(419, "Medium Size Switch");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(420, "div", 160);
        \u0275\u0275element(421, "input", 161);
        \u0275\u0275elementStart(422, "label", 162);
        \u0275\u0275text(423, "Large Size Switch");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(424, "div", 2)(425, "div", 46)(426, "div", 4)(427, "div", 5)(428, "h4", 163);
        \u0275\u0275text(429, "File browser");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(430, "div")(431, "h5", 56);
        \u0275\u0275element(432, "i", 164);
        \u0275\u0275text(433, " Default file input ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(434, "div", 2)(435, "div", 142)(436, "div", 165)(437, "label", 166);
        \u0275\u0275text(438, "Default file input example");
        \u0275\u0275elementEnd();
        \u0275\u0275element(439, "input", 167);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(440, "div", 2)(441, "div", 142)(442, "div", 50)(443, "div")(444, "label", 168);
        \u0275\u0275text(445, "Small file input example");
        \u0275\u0275elementEnd();
        \u0275\u0275element(446, "input", 169);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(447, "div", 142)(448, "div", 50)(449, "div")(450, "label", 170);
        \u0275\u0275text(451, "Large file input example");
        \u0275\u0275elementEnd();
        \u0275\u0275element(452, "input", 171);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(453, "div", 172)(454, "h5", 173);
        \u0275\u0275element(455, "i", 164);
        \u0275\u0275text(456, " Custom file input ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(457, "div", 2)(458, "div", 142)(459, "div", 50)(460, "div")(461, "label", 48);
        \u0275\u0275text(462, "With Label");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(463, "div", 174)(464, "label", 175);
        \u0275\u0275text(465, "Upload");
        \u0275\u0275elementEnd();
        \u0275\u0275element(466, "input", 176);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(467, "div", 177);
        \u0275\u0275element(468, "input", 178);
        \u0275\u0275elementStart(469, "label", 179);
        \u0275\u0275text(470, "Upload");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(471, "div", 142)(472, "div", 50)(473, "div")(474, "label", 48);
        \u0275\u0275text(475, "With Button");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(476, "div", 174)(477, "button", 180);
        \u0275\u0275text(478, "Button");
        \u0275\u0275elementEnd();
        \u0275\u0275element(479, "input", 181);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(480, "div", 177);
        \u0275\u0275element(481, "input", 182);
        \u0275\u0275elementStart(482, "button", 183);
        \u0275\u0275text(483, "Button");
        \u0275\u0275elementEnd()()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
      }
    }, dependencies: [PagetitleComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ElementsComponent, [{
    type: Component,
    args: [{ selector: "app-elements", imports: [PagetitleComponent], template: '<div class="container-fluid">\r\n\r\n    <!-- start page title -->\r\n    <app-page-title title="Form Elements" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r\n    <!-- end page title -->\r\n\r\n    <div class="row">\r\n        <div class="col-12">\r\n            <div class="card">\r\n                <div class="card-body">\r\n\r\n                    <h4 class="card-title">Textual inputs</h4>\r\n                    <p class="card-title-desc">Here are examples of <code>.form-control</code> applied to each\r\n                        textual HTML5 <code>&lt;input&gt;</code> <code>type</code>.</p>\r\n\r\n                    <div class="mb-3 row">\r\n                        <label for="example-text-input" class="col-md-2 col-form-label">Text</label>\r\n                        <div class="col-md-10">\r\n                            <input class="form-control" type="text" value="Artisanal kale" id="example-text-input">\r\n                        </div>\r\n                    </div>\r\n                    <div class="mb-3 row">\r\n                        <label for="example-search-input" class="col-md-2 col-form-label">Search</label>\r\n                        <div class="col-md-10">\r\n                            <input class="form-control" type="search" value="How do I shoot web"\r\n                                id="example-search-input">\r\n                        </div>\r\n                    </div>\r\n                    <div class="mb-3 row">\r\n                        <label for="example-email-input" class="col-md-2 col-form-label">Email</label>\r\n                        <div class="col-md-10">\r\n                            <input class="form-control" type="email" value="bootstrap@example.com"\r\n                                id="example-email-input">\r\n                        </div>\r\n                    </div>\r\n                    <div class="mb-3 row">\r\n                        <label for="example-url-input" class="col-md-2 col-form-label">URL</label>\r\n                        <div class="col-md-10">\r\n                            <input class="form-control" type="url" value="https://getbootstrap.com"\r\n                                id="example-url-input">\r\n                        </div>\r\n                    </div>\r\n                    <div class="mb-3 row">\r\n                        <label for="example-tel-input" class="col-md-2 col-form-label">Telephone</label>\r\n                        <div class="col-md-10">\r\n                            <input class="form-control" type="tel" value="1-(555)-555-5555" id="example-tel-input">\r\n                        </div>\r\n                    </div>\r\n                    <div class="mb-3 row">\r\n                        <label for="example-password-input" class="col-md-2 col-form-label">Password</label>\r\n                        <div class="col-md-10">\r\n                            <input class="form-control" type="password" value="hunter2" id="example-password-input">\r\n                        </div>\r\n                    </div>\r\n                    <div class="mb-3 row">\r\n                        <label for="example-number-input" class="col-md-2 col-form-label">Number</label>\r\n                        <div class="col-md-10">\r\n                            <input class="form-control" type="number" value="42" id="example-number-input">\r\n                        </div>\r\n                    </div>\r\n                    <div class="mb-3 row">\r\n                        <label for="example-datetime-local-input" class="col-md-2 col-form-label">Date and time</label>\r\n                        <div class="col-md-10">\r\n                            <input class="form-control" type="datetime-local" value="2019-08-19T13:45:00"\r\n                                id="example-datetime-local-input">\r\n                        </div>\r\n                    </div>\r\n                    <div class="mb-3 row">\r\n                        <label for="example-date-input" class="col-md-2 col-form-label">Date</label>\r\n                        <div class="col-md-10">\r\n                            <input class="form-control" type="date" value="2019-08-19" id="example-date-input">\r\n                        </div>\r\n                    </div>\r\n                    <div class="mb-3 row">\r\n                        <label for="example-month-input" class="col-md-2 col-form-label">Month</label>\r\n                        <div class="col-md-10">\r\n                            <input class="form-control" type="month" value="2019-08" id="example-month-input">\r\n                        </div>\r\n                    </div>\r\n                    <div class="mb-3 row">\r\n                        <label for="example-week-input" class="col-md-2 col-form-label">Week</label>\r\n                        <div class="col-md-10">\r\n                            <input class="form-control" type="week" value="2019-W33" id="example-week-input">\r\n                        </div>\r\n                    </div>\r\n                    <div class="mb-3 row">\r\n                        <label for="example-time-input" class="col-md-2 col-form-label">Time</label>\r\n                        <div class="col-md-10">\r\n                            <input class="form-control" type="time" value="13:45:00" id="example-time-input">\r\n                        </div>\r\n                    </div>\r\n                    <div class="mb-3 row">\r\n                        <label for="example-color-input" class="col-md-2 col-form-label">Color</label>\r\n                        <div class="col-md-10">\r\n                            <input class="form-control form-control-color mw-100" type="color" value="#556ee6"\r\n                                id="example-color-input">\r\n                        </div>\r\n                    </div>\r\n                    <div class="mb-3 row">\r\n                        <label class="col-md-2 col-form-label">Select</label>\r\n                        <div class="col-md-10">\r\n                            <select class="form-select">\r\n                                <option>Select</option>\r\n                                <option>Large select</option>\r\n                                <option>Small select</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class="row">\r\n                        <label for="exampleDataList" class="col-md-2 col-form-label">Datalists</label>\r\n                        <div class="col-md-10">\r\n                            <input class="form-control" list="datalistOptions" id="exampleDataList"\r\n                                placeholder="Type to search...">\r\n                            <datalist id="datalistOptions">\r\n                                <option value="San Francisco">\r\n                                <option value="New York">\r\n                                <option value="Seattle">\r\n                                <option value="Los Angeles">\r\n                                <option value="Chicago">\r\n                            </datalist>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div> <!-- end col -->\r\n    </div>\r\n    <!-- end row -->\r\n\r\n    <div class="row">\r\n        <div class="col-lg-12">\r\n            <div class="card">\r\n                <div class="card-body">\r\n                    <h4 class="card-title">Sizing</h4>\r\n                    <p class="card-title-desc">Set heights using classes like <code>.form-control-lg</code>\r\n                        and <code>.form-control-sm</code>.</p>\r\n                    <div>\r\n                        <div class="row">\r\n                            <div class="col-lg-6">\r\n                                <div>\r\n                                    <label class="form-label">Default input</label>\r\n                                    <input class="form-control" type="text" placeholder="Default input">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class="row">\r\n                            <div class="col-lg-6">\r\n                                <div class="mt-4">\r\n                                    <label class="form-label">Small Input</label>\r\n                                    <input class="form-control form-control-sm" type="text"\r\n                                        placeholder=".form-control-sm">\r\n                                </div>\r\n                            </div>\r\n                            <div class="col-lg-6">\r\n                                <div class="mt-4">\r\n                                    <label class="form-label">Large Input</label>\r\n                                    <input class="form-control form-control-lg" type="text"\r\n                                        placeholder=".form-control-lg">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- end row -->\r\n\r\n    <div class="row">\r\n        <div class="col-lg-12">\r\n            <div class="card">\r\n                <div class="card-body">\r\n                    <h4 class="card-title">Range Inputs</h4>\r\n                    <p class="card-title-desc">Create custom <code>&lt;input type="range"&gt;</code>\r\n                        controls with <code>.form-range</code>.</p>\r\n\r\n                    <div class="row">\r\n                        <div class="col-lg-6">\r\n                            <div>\r\n                                <label for="customRange1" class="form-label">Example range</label>\r\n                                <input type="range" class="form-range" id="customRange1">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class="row mt-2">\r\n                        <div class="col-lg-6">\r\n                            <div class="mt-4">\r\n                                <h5 class="font-size-14">Min and max</h5>\r\n                                <p class="card-title-desc">Range inputs have implicit values for min and\r\n                                    max\u20140 and 100, respectively.</p>\r\n                                <input type="range" class="form-range" min="0" max="5" id="customRange2">\r\n                            </div>\r\n                        </div>\r\n                        <div class="col-lg-6">\r\n                            <div class="mt-4">\r\n                                <h5 class="font-size-14">Steps</h5>\r\n                                <p class="card-title-desc">By default, range inputs \u201Csnap\u201D to integer\r\n                                    values. To change this, you can specify a <code>step</code> value.</p>\r\n                                <input type="range" class="form-range" min="0" max="5" id="customRange2">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- end row -->\r\n\r\n    <div class="row">\r\n        <div class="col-lg-12">\r\n            <div class="card">\r\n                <div class="card-body">\r\n                    <h4 class="card-title">Checkboxes</h4>\r\n\r\n                    <div class="row">\r\n                        <div class="col-xl-3 col-sm-6">\r\n                            <div class="mt-4">\r\n                                <h5 class="font-size-14 mb-4"><i class="mdi mdi-arrow-right text-primary mr-1"></i> Form\r\n                                    Checkboxes\r\n                                </h5>\r\n                                <div class="form-check mb-3">\r\n                                    <input class="form-check-input" type="checkbox" id="formCheck1">\r\n                                    <label class="form-check-label" for="formCheck1">\r\n                                        Form Checkbox\r\n                                    </label>\r\n                                </div>\r\n                                <div class="form-check">\r\n                                    <input class="form-check-input" type="checkbox" id="formCheck2" checked>\r\n                                    <label class="form-check-label" for="formCheck2">\r\n                                        Form Checkbox checked\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class="col-xl-3 col-sm-6">\r\n                            <div class="mt-4">\r\n                                <h5 class="font-size-14 mb-4"><i class="mdi mdi-arrow-right text-primary mr-1"></i> Form\r\n                                    Checkboxes\r\n                                    Right</h5>\r\n                                <div>\r\n                                    <div class="form-check form-check-right mb-3">\r\n                                        <input class="form-check-input" type="checkbox" id="formCheckRight1">\r\n                                        <label class="form-check-label" for="formCheckRight1">\r\n                                            Form Checkbox Right\r\n                                        </label>\r\n                                    </div>\r\n                                </div>\r\n                                <div>\r\n                                    <div class="form-check form-check-right">\r\n                                        <input class="form-check-input" type="checkbox" id="formCheckRight2" checked>\r\n                                        <label class="form-check-label" for="formCheckRight2">\r\n                                            Form Checkbox Right checked\r\n                                        </label>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class="col-xl-3 col-sm-6">\r\n                            <div class="mt-4">\r\n                                <h5 class="font-size-14"><i class="mdi mdi-arrow-right text-primary mr-1"></i> Form\r\n                                    Checkboxes\r\n                                    colors</h5>\r\n                                <p class="sub-header mb-4">Add class <code>.form-check-* </code> for a color\r\n                                    Checkboxes</p>\r\n\r\n                                <div>\r\n                                    <div class="form-check form-check-primary mb-3">\r\n                                        <input class="form-check-input" type="checkbox" id="formCheckcolor1" checked>\r\n                                        <label class="form-check-label" for="formCheckcolor1">\r\n                                            Checkbox Primary\r\n                                        </label>\r\n                                    </div>\r\n\r\n                                    <div class="form-check form-check-success mb-3">\r\n                                        <input class="form-check-input" type="checkbox" id="formCheckcolor2" checked>\r\n                                        <label class="form-check-label" for="formCheckcolor2">\r\n                                            Checkbox Success\r\n                                        </label>\r\n                                    </div>\r\n\r\n                                    <div class="form-check form-check-info mb-3">\r\n                                        <input class="form-check-input" type="checkbox" id="formCheckcolor3" checked>\r\n                                        <label class="form-check-label" for="formCheckcolor3">\r\n                                            Checkbox Info\r\n                                        </label>\r\n                                    </div>\r\n\r\n                                    <div class="form-check form-check-warning mb-3">\r\n                                        <input class="form-check-input" type="checkbox" id="formCheckcolor4" checked>\r\n                                        <label class="form-check-label" for="formCheckcolor4">\r\n                                            Checkbox Warning\r\n                                        </label>\r\n                                    </div>\r\n\r\n                                    <div class="form-check form-check-danger">\r\n                                        <input class="form-check-input" type="checkbox" id="formCheckcolor5" checked>\r\n                                        <label class="form-check-label" for="formCheckcolor5">\r\n                                            Checkbox Danger\r\n                                        </label>\r\n                                    </div>\r\n\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class="col-xl-3 col-sm-6">\r\n                            <div class="mt-4">\r\n                                <h5 class="font-size-14"><i class="mdi mdi-arrow-right text-primary mr-1"></i> Form\r\n                                    Checkboxes\r\n                                    Outline</h5>\r\n                                <p class="sub-header mb-4">Add class <code>.form-checkbox-outline</code> &\r\n                                    <code>.form-check-* </code> for a color Checkboxes\r\n                                </p>\r\n\r\n                                <div>\r\n                                    <div class="form-check form-checkbox-outline form-check-primary mb-3">\r\n                                        <input class="form-check-input" type="checkbox" id="customCheckcolor1" checked>\r\n                                        <label class="form-check-label" for="customCheckcolor1">\r\n                                            Checkbox Outline Primary\r\n                                        </label>\r\n                                    </div>\r\n\r\n                                    <div class="form-check form-checkbox-outline form-check-success mb-3">\r\n                                        <input class="form-check-input" type="checkbox" id="customCheckcolor2" checked>\r\n                                        <label class="form-check-label" for="customCheckcolor2">\r\n                                            Checkbox Outline Success\r\n                                        </label>\r\n                                    </div>\r\n\r\n                                    <div class="form-check form-checkbox-outline form-check-info mb-3">\r\n                                        <input class="form-check-input" type="checkbox" id="customCheckcolor3" checked>\r\n                                        <label class="form-check-label" for="customCheckcolor3">\r\n                                            Checkbox Outline Info\r\n                                        </label>\r\n                                    </div>\r\n\r\n                                    <div class="form-check form-checkbox-outline form-check-warning mb-3">\r\n                                        <input class="form-check-input" type="checkbox" id="customCheckcolor4" checked>\r\n                                        <label class="form-check-label" for="customCheckcolor4">\r\n                                            Checkbox Outline Warning\r\n                                        </label>\r\n                                    </div>\r\n\r\n                                    <div class="form-check form-checkbox-outline form-check-danger">\r\n                                        <input class="form-check-input" type="checkbox" id="customCheckcolor5" checked>\r\n                                        <label class="form-check-label" for="customCheckcolor5">\r\n                                            Checkbox Outline Danger\r\n                                        </label>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <!-- end row -->\r\n\r\n    <div class="row">\r\n        <div class="col-lg-12">\r\n            <div class="card">\r\n                <div class="card-body">\r\n                    <h4 class="card-title">Radios</h4>\r\n\r\n                    <div class="row">\r\n                        <div class="col-xl-3 col-sm-6">\r\n                            <div class="mt-4">\r\n                                <h5 class="font-size-14 mb-4">Form Radios</h5>\r\n                                <div class="form-check mb-3">\r\n                                    <input class="form-check-input" type="radio" name="formRadios" id="formRadios1"\r\n                                        checked>\r\n                                    <label class="form-check-label" for="formRadios1">\r\n                                        Form Radio\r\n                                    </label>\r\n                                </div>\r\n                                <div class="form-check">\r\n                                    <input class="form-check-input" type="radio" name="formRadios" id="formRadios2">\r\n                                    <label class="form-check-label" for="formRadios2">\r\n                                        Form Radio checked\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class="col-xl-3 col-sm-6">\r\n                            <div class="mt-4">\r\n                                <h5 class="font-size-14 mb-4">Form Radios Right</h5>\r\n                                <div>\r\n                                    <div class="form-check form-check-right mb-3">\r\n                                        <input class="form-check-input" type="radio" name="formRadiosRight"\r\n                                            id="formRadiosRight1" checked>\r\n                                        <label class="form-check-label" for="formRadiosRight1">\r\n                                            Form Radio Right\r\n                                        </label>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div>\r\n                                    <div class="form-check form-check-right">\r\n                                        <input class="form-check-input" type="radio" name="formRadiosRight"\r\n                                            id="formRadiosRight2">\r\n                                        <label class="form-check-label" for="formRadiosRight2">\r\n                                            Form Radio Right checked\r\n                                        </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class="col-xl-3 col-sm-6">\r\n                            <div class="mt-4">\r\n                                <h5 class="font-size-14"><i\r\n                                        class="mdi mdi-arrow-right text-primary mr-1"></i> Form Radio\r\n                                    colors</h5>\r\n                                <p class="sub-header mb-4">Add class <code>.form-radio-* </code> for a\r\n                                    color Radios</p>\r\n\r\n\r\n                                <div>\r\n                                    <div class="form-check form-radio-primary mb-3">\r\n                                        <input class="form-check-input" type="radio" name="formRadioColor1" id="formRadioColor1" checked>\r\n                                        <label class="form-check-label" for="formRadioColor1">\r\n                                            Radio Primary\r\n                                        </label>\r\n                                    </div>\r\n\r\n                                    <div class="form-check form-radio-success mb-3">\r\n                                        <input class="form-check-input" type="radio" name="formRadioColor2" id="formRadioColor2" checked>\r\n                                        <label class="form-check-label" for="formRadioColor2">\r\n                                            Radio Success\r\n                                        </label>\r\n                                    </div>\r\n\r\n                                    <div class="form-check form-radio-info mb-3">\r\n                                        <input class="form-check-input" type="radio" name="formRadioColor3" id="formRadioColor3" checked>\r\n                                        <label class="form-check-label" for="formRadioColor3">\r\n                                            Radio Info\r\n                                        </label>\r\n                                    </div>\r\n\r\n                                    <div class="form-check form-radio-warning mb-3">\r\n                                        <input class="form-check-input" type="radio" name="formRadioColor4" id="formRadioColor4" checked>\r\n                                        <label class="form-check-label" for="formRadioColor4">\r\n                                            Radio warning\r\n                                        </label>\r\n                                    </div>\r\n\r\n                                    <div class="form-check form-radio-danger mb-3">\r\n                                        <input class="form-check-input" type="radio" name="formRadioColor5" id="formRadioColor5" checked>\r\n                                        <label class="form-check-label" for="formRadioColor5">\r\n                                            Radio Danger\r\n                                        </label>\r\n                                    </div>\r\n\r\n                                    \r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class="col-xl-3 col-sm-6">\r\n                            <div class="mt-4">\r\n                                <h5 class="font-size-14"><i\r\n                                        class="mdi mdi-arrow-right text-primary mr-1"></i> Form Radio\r\n                                    Outline</h5>\r\n                                <p class="sub-header mb-4">Add class <code>form-radio-outline</code> &\r\n                                    <code>.form-radio-* </code> for a color Checkboxes</p>\r\n\r\n                                <div>\r\n                                    <div class="form-check form-radio-outline form-radio-primary mb-3">\r\n                                        <input class="form-check-input" type="radio" name="formRadio1" id="formRadio1" checked>\r\n                                        <label class="form-check-label" for="formRadio1">\r\n                                            Radio Outline Primary\r\n                                        </label>\r\n                                    </div>\r\n                                    <div class="form-check form-radio-outline form-radio-success mb-3">\r\n                                        <input class="form-check-input" type="radio" name="formRadio2" id="formRadio2" checked>\r\n                                        <label class="form-check-label" for="formRadio2">\r\n                                            Radio Outline Success\r\n                                        </label>\r\n                                    </div>\r\n                                    <div class="form-check form-radio-outline form-radio-info mb-3">\r\n                                        <input class="form-check-input" type="radio" name="formRadio3" id="formRadio3" checked>\r\n                                        <label class="form-check-label" for="formRadio3">\r\n                                            Radio Outline Info\r\n                                        </label>\r\n                                    </div>\r\n                                    <div class="form-check form-radio-outline form-radio-warning mb-3">\r\n                                        <input class="form-check-input" type="radio" name="formRadio4" id="formRadio4" checked>\r\n                                        <label class="form-check-label" for="formRadio4">\r\n                                            Radio Outline Warning\r\n                                        </label>\r\n                                    </div>\r\n                                    <div class="form-check form-radio-outline form-radio-danger mb-3">\r\n                                        <input class="form-check-input" type="radio" name="formRadio5" id="formRadio5" checked>\r\n                                        <label class="form-check-label" for="formRadio5">\r\n                                            Radio Outline Danger\r\n                                        </label>\r\n                                    </div>\r\n                                    \r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- end row -->\r\n\r\n    <div class="row">\r\n        <div class="col-lg-12">\r\n            <div class="card">\r\n                <div class="card-body">\r\n                    <h4 class="card-title">Switches</h4>\r\n                    <p class="card-title-desc">A switch has the markup of a custom checkbox but uses the\r\n                        <code>.form-switch</code> class to render a toggle switch. Switches also support the\r\n                        <code>disabled</code> attribute.</p>\r\n\r\n                    <div class="row">\r\n\r\n                        <div class="col-sm-6">\r\n                            <div>\r\n                                <h5 class="font-size-14 mb-3">Switch examples</h5>\r\n\r\n                                <div class="form-check form-switch mb-3">\r\n                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">\r\n                                    <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox\r\n                                        input</label>\r\n                                </div>\r\n                                <div class="form-check form-switch mb-3">\r\n                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>\r\n                                    <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox\r\n                                        input</label>\r\n                                </div>\r\n                                <div class="form-check form-switch mb-3">\r\n                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDisabled"\r\n                                        disabled>\r\n                                    <label class="form-check-label" for="flexSwitchCheckDisabled">Disabled switch\r\n                                        checkbox input</label>\r\n                                </div>\r\n                                <div class="form-check form-switch">\r\n                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled"\r\n                                        checked disabled>\r\n                                    <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled\r\n                                        checked switch checkbox input</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class="col-sm-6">\r\n                            <div class="mt-4 mt-sm-0">\r\n                                <h5 class="font-size-14 mb-3">Switch sizes</h5>\r\n\r\n                                <div class="form-check form-switch mb-3">\r\n                                    <input class="form-check-input" type="checkbox" id="SwitchCheckSizesm" checked>\r\n                                    <label class="form-check-label" for="SwitchCheckSizesm">Small Size Switch</label>\r\n                                </div>\r\n\r\n                                <div class="form-check form-switch form-switch-md mb-3">\r\n                                    <input class="form-check-input" type="checkbox" id="SwitchCheckSizemd">\r\n                                    <label class="form-check-label" for="SwitchCheckSizemd">Medium Size Switch</label>\r\n                                </div>\r\n\r\n                                <div class="form-check form-switch form-switch-lg mb-3">\r\n                                    <input class="form-check-input" type="checkbox" id="SwitchCheckSizelg" checked>\r\n                                    <label class="form-check-label" for="SwitchCheckSizelg">Large Size Switch</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- end col -->\r\n    </div>\r\n    <!-- end row -->\r\n\r\n    <div class="row">\r\n\r\n        <div class="col-lg-12">\r\n            <div class="card">\r\n                <div class="card-body">\r\n                    <h4 class="card-title mb-4">File browser</h4>\r\n\r\n                    <div>\r\n                        <h5 class="font-size-14"><i class="mdi mdi-arrow-right text-primary"></i> Default file input\r\n                        </h5>\r\n                        <div class="row">\r\n                            <div class="col-sm-6">\r\n\r\n                                <div class="mt-3">\r\n                                    <label for="formFile" class="form-label">Default file input example</label>\r\n                                    <input class="form-control" type="file" id="formFile">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- end row -->\r\n\r\n                        <div class="row">\r\n                            <div class="col-sm-6">\r\n                                <div class="mt-4">\r\n                                    <div>\r\n                                        <label for="formFileSm" class="form-label">Small file input example</label>\r\n                                        <input class="form-control form-control-sm" id="formFileSm" type="file">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- end col -->\r\n                            <div class="col-sm-6">\r\n                                <div class="mt-4">\r\n                                    <div>\r\n                                        <label for="formFileLg" class="form-label">Large file input example</label>\r\n                                        <input class="form-control form-control-lg" id="formFileLg" type="file">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- end col -->\r\n                        </div>\r\n                        <!-- end row -->\r\n                    </div>\r\n\r\n                    <div class="mt-4 pt-2">\r\n                        <h5 class="font-size-14 mb-0"><i class="mdi mdi-arrow-right text-primary"></i> Custom file input\r\n                        </h5>\r\n                    </div>\r\n\r\n                    <div class="row">\r\n                        <div class="col-sm-6">\r\n                            <div class="mt-4">\r\n\r\n                                <div>\r\n                                    <label class="form-label">With Label</label>\r\n                                    <div class="input-group mb-3">\r\n                                        <label class="input-group-text" for="inputGroupFile01">Upload</label>\r\n                                        <input type="file" class="form-control" id="inputGroupFile01">\r\n                                    </div>\r\n                                    <div class="input-group">\r\n                                        <input type="file" class="form-control" id="inputGroupFile02">\r\n                                        <label class="input-group-text" for="inputGroupFile02">Upload</label>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class="col-sm-6">\r\n                            <div class="mt-4">\r\n\r\n                                <div>\r\n                                    <label class="form-label">With Button</label>\r\n                                    <div class="input-group mb-3">\r\n                                        <button class="btn btn-primary" type="button"\r\n                                            id="inputGroupFileAddon03">Button</button>\r\n                                        <input type="file" class="form-control" id="inputGroupFile03"\r\n                                            aria-describedby="inputGroupFileAddon03" aria-label="Upload">\r\n                                    </div>\r\n\r\n                                    <div class="input-group">\r\n                                        <input type="file" class="form-control" id="inputGroupFile04"\r\n                                            aria-describedby="inputGroupFileAddon04" aria-label="Upload">\r\n                                        <button class="btn btn-primary" type="button"\r\n                                            id="inputGroupFileAddon04">Button</button>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <!-- end row -->\r\n\r\n</div> <!-- container-fluid -->' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ElementsComponent, { className: "ElementsComponent", filePath: "src/app/pages/form/elements/elements.component.ts", lineNumber: 16 });
})();

// src/app/pages/form/validation/validation.mustmatch.ts
function MustMatch(controlName, matchingControlName) {
  return (formGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

// src/app/pages/form/validation/validation.component.ts
var _c0 = (a0) => ({ "is-valid": a0 });
var _c1 = (a0) => ({ "is-invalid": a0 });
function ValidationComponent_Conditional_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Looks good!");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, ValidationComponent_Conditional_17_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.firstName.errors.required ? 1 : -1);
  }
}
function ValidationComponent_Conditional_23_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Looks good!");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, ValidationComponent_Conditional_23_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.lastName.errors.required ? 1 : -1);
  }
}
function ValidationComponent_Conditional_30_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please provide a valid city.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275conditionalCreate(1, ValidationComponent_Conditional_30_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.city.errors.required ? 1 : -1);
  }
}
function ValidationComponent_Conditional_36_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please provide a valid state.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275conditionalCreate(1, ValidationComponent_Conditional_36_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.state.errors.required ? 1 : -1);
  }
}
function ValidationComponent_Conditional_42_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please provide a valid zip.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275conditionalCreate(1, ValidationComponent_Conditional_42_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.zip.errors.required ? 1 : -1);
  }
}
function ValidationComponent_Conditional_72_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Looks good!");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275conditionalCreate(1, ValidationComponent_Conditional_72_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.formData.firstName.errors.required ? 1 : -1);
  }
}
function ValidationComponent_Conditional_78_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Looks good!");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275conditionalCreate(1, ValidationComponent_Conditional_78_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.formData.lastName.errors.required ? 1 : -1);
  }
}
function ValidationComponent_Conditional_88_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please choose a unique and valid username.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275conditionalCreate(1, ValidationComponent_Conditional_88_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.formData.userName.errors.required ? 1 : -1);
  }
}
function ValidationComponent_Conditional_95_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please provide a valid city.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275conditionalCreate(1, ValidationComponent_Conditional_95_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.formData.city.errors.required ? 1 : -1);
  }
}
function ValidationComponent_Conditional_101_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please provide a valid state.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275conditionalCreate(1, ValidationComponent_Conditional_101_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.formData.state.errors.required ? 1 : -1);
  }
}
function ValidationComponent_Conditional_118_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value is required.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275conditionalCreate(1, ValidationComponent_Conditional_118_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.type.text.errors.required ? 1 : -1);
  }
}
function ValidationComponent_Conditional_124_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value is required.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_124_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Password must be at least 6 characters.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275conditionalCreate(1, ValidationComponent_Conditional_124_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(2, ValidationComponent_Conditional_124_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.type.password.errors.required ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.type.password.errors.minlength ? 2 : -1);
  }
}
function ValidationComponent_Conditional_127_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value is required.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_127_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value should be the same.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275conditionalCreate(1, ValidationComponent_Conditional_127_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(2, ValidationComponent_Conditional_127_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.type.confirmpwd.errors.required ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.type.confirmpwd.errors.mustMatch ? 2 : -1);
  }
}
function ValidationComponent_Conditional_133_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value is required.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_133_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value should be a valid email.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275conditionalCreate(1, ValidationComponent_Conditional_133_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(2, ValidationComponent_Conditional_133_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.type.email.errors.required ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.type.email.errors.pattern ? 2 : -1);
  }
}
function ValidationComponent_Conditional_139_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value is required.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_139_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value should be a valid url.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_139_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275conditionalCreate(1, ValidationComponent_Conditional_139_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(2, ValidationComponent_Conditional_139_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.type.url.errors.required ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.type.url.errors.pattern ? 2 : -1);
  }
}
function ValidationComponent_Conditional_145_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value is required.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_145_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value should be digits.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_145_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275conditionalCreate(1, ValidationComponent_Conditional_145_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(2, ValidationComponent_Conditional_145_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.type.digits.errors.required ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.type.digits.errors.pattern ? 2 : -1);
  }
}
function ValidationComponent_Conditional_151_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value is required.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_151_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value should be a valid number.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_151_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275conditionalCreate(1, ValidationComponent_Conditional_151_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(2, ValidationComponent_Conditional_151_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.type.number.errors.required ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.type.number.errors.pattern ? 2 : -1);
  }
}
function ValidationComponent_Conditional_157_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value is required.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_157_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value should be alphanumeric.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_157_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275conditionalCreate(1, ValidationComponent_Conditional_157_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(2, ValidationComponent_Conditional_157_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.type.alphanum.errors.required ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.type.alphanum.errors.pattern ? 2 : -1);
  }
}
function ValidationComponent_Conditional_163_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value is required.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_163_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275conditionalCreate(1, ValidationComponent_Conditional_163_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.type.textarea.errors.required ? 1 : -1);
  }
}
function ValidationComponent_Conditional_182_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value is required.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_182_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value is too short. It should have 6 characters or more.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_182_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275conditionalCreate(1, ValidationComponent_Conditional_182_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(2, ValidationComponent_Conditional_182_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range.minlength.errors.required ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range.minlength.errors.minlength ? 2 : -1);
  }
}
function ValidationComponent_Conditional_188_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value is required.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_188_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value is too long. It should have 6 characters or fewer.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_188_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275conditionalCreate(1, ValidationComponent_Conditional_188_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(2, ValidationComponent_Conditional_188_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range.maxlength.errors.required ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range.maxlength.errors.maxlength ? 2 : -1);
  }
}
function ValidationComponent_Conditional_194_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value is required.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_194_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value length is invalid. It should be between 5 and 10 characters long.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_194_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value length is invalid. It should be between 5 and 10 characters long.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_194_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275conditionalCreate(1, ValidationComponent_Conditional_194_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(2, ValidationComponent_Conditional_194_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(3, ValidationComponent_Conditional_194_Conditional_3_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range.rangelength.errors.required ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range.rangelength.errors.minlength ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range.rangelength.errors.maxlength ? 3 : -1);
  }
}
function ValidationComponent_Conditional_200_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value is required.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_200_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value should be greater than or equal to 6.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_200_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275conditionalCreate(1, ValidationComponent_Conditional_200_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(2, ValidationComponent_Conditional_200_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range.minvalue.errors.required ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range.minvalue.errors.min ? 2 : -1);
  }
}
function ValidationComponent_Conditional_206_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value is required.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_206_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value should be lower than or equal to 6.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_206_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275conditionalCreate(1, ValidationComponent_Conditional_206_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(2, ValidationComponent_Conditional_206_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range.maxvalue.errors.required ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range.maxvalue.errors.max ? 2 : -1);
  }
}
function ValidationComponent_Conditional_212_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value is required.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_212_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value should be between 6 and 100.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_212_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value should be between 6 and 100.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_212_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275conditionalCreate(1, ValidationComponent_Conditional_212_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(2, ValidationComponent_Conditional_212_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(3, ValidationComponent_Conditional_212_Conditional_3_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range.rangevalue.errors.required ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range.rangevalue.errors.min ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range.rangevalue.errors.max ? 3 : -1);
  }
}
function ValidationComponent_Conditional_218_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value is required.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_218_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value seems to be invalid.");
    \u0275\u0275elementEnd();
  }
}
function ValidationComponent_Conditional_218_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275conditionalCreate(1, ValidationComponent_Conditional_218_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(2, ValidationComponent_Conditional_218_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range.regularexp.errors.required ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range.regularexp.errors.pattern ? 2 : -1);
  }
}
var ValidationComponent = class _ValidationComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Forms" }, { label: "Form Validation", active: true }];
    this.validationform = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]],
      lastName: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]],
      city: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]],
      state: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]],
      zip: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]]
    });
    this.tooltipvalidationform = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]],
      lastName: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]],
      userName: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]],
      city: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]],
      state: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]]
    });
    this.typeValidationForm = this.formBuilder.group({
      text: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")]],
      url: ["", [Validators.required, Validators.pattern("https?://.+")]],
      digits: ["", [Validators.required, Validators.pattern("[0-9]+")]],
      number: ["", [Validators.required, Validators.pattern("[0-9]+")]],
      alphanum: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]],
      textarea: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmpwd: ["", Validators.required]
    }, {
      validator: MustMatch("password", "confirmpwd")
    });
    this.rangeValidationForm = this.formBuilder.group({
      minlength: ["", [Validators.required, Validators.minLength(6)]],
      maxlength: ["", [Validators.required, Validators.maxLength(6)]],
      rangelength: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      minvalue: ["", [Validators.required, Validators.min(6)]],
      maxvalue: ["", [Validators.required, Validators.max(6)]],
      rangevalue: ["", [Validators.required, Validators.min(6), Validators.max(100)]],
      regularexp: ["", [Validators.required, Validators.pattern("#[A-Fa-f0-9]{6}")]]
    });
    this.submit = false;
    this.formsubmit = false;
    this.typesubmit = false;
    this.rangesubmit = false;
  }
  /**
   * Returns form
   */
  get form() {
    return this.validationform.controls;
  }
  /**
   * Bootsrap validation form submit method
   */
  validSubmit() {
    this.submit = true;
  }
  /**
   * returns tooltip validation form
   */
  get formData() {
    return this.tooltipvalidationform.controls;
  }
  /**
   * Bootstrap tooltip form validation submit method
   */
  formSubmit() {
    this.formsubmit = true;
  }
  /**
   * Returns the type validation form
   */
  get type() {
    return this.typeValidationForm.controls;
  }
  /**
   * Type validation form submit data
   */
  typeSubmit() {
    this.typesubmit = true;
  }
  /**
   * Returns the range validation form
   */
  get range() {
    return this.rangeValidationForm.controls;
  }
  /**
   * range validation submit data
   */
  rangeSubmit() {
    this.rangesubmit = true;
  }
  static {
    this.\u0275fac = function ValidationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ValidationComponent)(\u0275\u0275directiveInject(UntypedFormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ValidationComponent, selectors: [["app-validation"]], decls: 224, vars: 109, consts: [[1, "container-fluid"], ["title", "Form Validation", 3, "breadcrumbItems"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-title-desc"], [1, "needs-validation", 3, "ngSubmit", "formGroup"], [1, "col-md-6"], [1, "mb-3"], ["for", "validationCustom01"], ["type", "text", "id", "validationCustom01", "formControlName", "firstName", "placeholder", "First name", 1, "form-control", 3, "ngClass"], [1, "valid-feedback"], ["for", "validationCustom02"], ["type", "text", "id", "validationCustom02", "formControlName", "lastName", "placeholder", "Last name", 1, "form-control", 3, "ngClass"], [1, "col-md-4"], ["for", "validationCustom03"], ["type", "text", "id", "validationCustom03", "formControlName", "city", "placeholder", "City", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], ["for", "validationCustom04"], ["type", "text", "id", "validationCustom04", "formControlName", "state", "placeholder", "State", 1, "form-control", 3, "ngClass"], ["for", "validationCustom05"], ["type", "text", "id", "validationCustom05", "formControlName", "zip", "placeholder", "Zip", 1, "form-control", 3, "ngClass"], [1, "form-check", "mb-3"], ["type", "checkbox", "value", "", "id", "invalidCheck", "required", "", 1, "form-check-input"], ["for", "invalidCheck", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary"], [1, "mb-3", "position-relative"], ["for", "validationTooltip01"], ["type", "text", "formControlName", "firstName", "id", "validationTooltip01", "placeholder", "First name", "value", "Mark", 1, "form-control", 3, "ngClass"], [1, "valid-tooltip"], ["for", "validationTooltip02"], ["type", "text", "id", "validationTooltip02", "formControlName", "lastName", "placeholder", "Last name", "value", "Otto", 1, "form-control", 3, "ngClass"], ["for", "validationTooltipUsername"], [1, "input-group"], [1, "input-group-prepend"], ["id", "validationTooltipUsernamePrepend", 1, "input-group-text"], ["type", "text", "id", "validationTooltipUsername", "formControlName", "userName", "placeholder", "Username", "aria-describedby", "validationTooltipUsernamePrepend", 1, "form-control", 3, "ngClass"], [1, "invalid-tooltip"], ["for", "validationTooltip03"], ["type", "text", "id", "validationTooltip03", "placeholder", "City", "formControlName", "city", 1, "form-control", 3, "ngClass"], ["for", "validationTooltip04"], ["type", "text", "id", "validationTooltip04", "placeholder", "State", "formControlName", "state", 1, "form-control", 3, "ngClass"], [3, "ngSubmit", "formGroup"], [1, "form-label"], ["type", "text", "formControlName", "text", "placeholder", "Type something", 1, "form-control", 3, "ngClass"], ["type", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control", 3, "ngClass"], [1, "mt-2"], ["type", "password", "placeholder", "Re-Type Password", "formControlName", "confirmpwd", 1, "form-control", 3, "ngClass"], ["type", "email", "formControlName", "email", "placeholder", "Enter a valid e-mail", 1, "form-control", 3, "ngClass"], ["type", "url", "placeholder", "URL", "formControlName", "url", 1, "form-control", 3, "ngClass"], ["formControlName", "digits", "type", "text", "placeholder", "Enter only digits", 1, "form-control", 3, "ngClass"], ["formControlName", "number", "type", "text", "placeholder", "Enter only numbers", 1, "form-control", 3, "ngClass"], ["formControlName", "alphanum", "type", "text", "placeholder", "Enter alphanumeric value", 1, "form-control", 3, "ngClass"], ["formControlName", "textarea", "rows", "5", 1, "form-control", 3, "ngClass"], [1, "d-flex", "flex-wrap", "gap-2"], ["type", "submit", 1, "btn", "btn-primary", "waves-effect", "waves-light"], ["type", "reset", 1, "btn", "btn-secondary", "waves-effect"], ["type", "text", "formControlName", "minlength", "placeholder", "Min 6 chars.", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "maxlength", "placeholder", "Max 6 chars.", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "rangelength", "placeholder", "Text between 5 - 10 chars length", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "minvalue", "placeholder", "Min value is 6", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "maxvalue", "placeholder", "Max value is 6", 1, "form-control", 3, "ngClass"], ["type", "text range", "formControlName", "rangevalue", "placeholder", "Number between 6 - 100", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "regularexp", "placeholder", "Hex. Color", 1, "form-control", 3, "ngClass"]], template: function ValidationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
        \u0275\u0275text(7, "Bootstrap Validation - Normal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 7);
        \u0275\u0275text(9, "Provide valuable, actionable feedback to your users with HTML5 form validation\u2013available in all our supported browsers.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "form", 8);
        \u0275\u0275listener("ngSubmit", function ValidationComponent_Template_form_ngSubmit_10_listener() {
          return ctx.validSubmit();
        });
        \u0275\u0275elementStart(11, "div", 2)(12, "div", 9)(13, "div", 10)(14, "label", 11);
        \u0275\u0275text(15, "First name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "input", 12);
        \u0275\u0275conditionalCreate(17, ValidationComponent_Conditional_17_Template, 2, 1, "div", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 9)(19, "div", 10)(20, "label", 14);
        \u0275\u0275text(21, "Last name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "input", 15);
        \u0275\u0275conditionalCreate(23, ValidationComponent_Conditional_23_Template, 2, 1, "div", 13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "div", 2)(25, "div", 16)(26, "div", 10)(27, "label", 17);
        \u0275\u0275text(28, "City");
        \u0275\u0275elementEnd();
        \u0275\u0275element(29, "input", 18);
        \u0275\u0275conditionalCreate(30, ValidationComponent_Conditional_30_Template, 2, 1, "div", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 16)(32, "div", 10)(33, "label", 20);
        \u0275\u0275text(34, "State");
        \u0275\u0275elementEnd();
        \u0275\u0275element(35, "input", 21);
        \u0275\u0275conditionalCreate(36, ValidationComponent_Conditional_36_Template, 2, 1, "div", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 16)(38, "div", 10)(39, "label", 22);
        \u0275\u0275text(40, "Zip");
        \u0275\u0275elementEnd();
        \u0275\u0275element(41, "input", 23);
        \u0275\u0275conditionalCreate(42, ValidationComponent_Conditional_42_Template, 2, 1, "div", 19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "div", 24);
        \u0275\u0275element(44, "input", 25);
        \u0275\u0275elementStart(45, "label", 26);
        \u0275\u0275text(46, " Agree to terms and conditions ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 19);
        \u0275\u0275text(48, " You must agree before submitting. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "div")(50, "button", 27);
        \u0275\u0275text(51, "Submit form");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(52, "div", 3)(53, "div", 4)(54, "div", 5)(55, "h4", 6);
        \u0275\u0275text(56, "Bootstrap Validation (Tooltips)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "p", 7);
        \u0275\u0275text(58, "If your form layout allows it, you can swap the ");
        \u0275\u0275elementStart(59, "code");
        \u0275\u0275text(60, ".valid|invalid-feedback");
        \u0275\u0275elementEnd();
        \u0275\u0275text(61, " classes for ");
        \u0275\u0275elementStart(62, "code");
        \u0275\u0275text(63, ".valid|invalid-tooltip");
        \u0275\u0275elementEnd();
        \u0275\u0275text(64, " classes to display validation feedback in a styled tooltip. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "form", 8);
        \u0275\u0275listener("ngSubmit", function ValidationComponent_Template_form_ngSubmit_65_listener() {
          return ctx.formSubmit();
        });
        \u0275\u0275elementStart(66, "div", 2)(67, "div", 16)(68, "div", 28)(69, "label", 29);
        \u0275\u0275text(70, "First name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(71, "input", 30);
        \u0275\u0275conditionalCreate(72, ValidationComponent_Conditional_72_Template, 2, 1, "div", 31);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "div", 16)(74, "div", 28)(75, "label", 32);
        \u0275\u0275text(76, "Last name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(77, "input", 33);
        \u0275\u0275conditionalCreate(78, ValidationComponent_Conditional_78_Template, 2, 1, "div", 31);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "div", 16)(80, "div", 28)(81, "label", 34);
        \u0275\u0275text(82, "Username");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "div", 35)(84, "div", 36)(85, "span", 37);
        \u0275\u0275text(86, "@");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(87, "input", 38);
        \u0275\u0275conditionalCreate(88, ValidationComponent_Conditional_88_Template, 2, 1, "div", 39);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(89, "div", 2)(90, "div", 9)(91, "div", 28)(92, "label", 40);
        \u0275\u0275text(93, "City");
        \u0275\u0275elementEnd();
        \u0275\u0275element(94, "input", 41);
        \u0275\u0275conditionalCreate(95, ValidationComponent_Conditional_95_Template, 2, 1, "div", 39);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(96, "div", 9)(97, "div", 28)(98, "label", 42);
        \u0275\u0275text(99, "State");
        \u0275\u0275elementEnd();
        \u0275\u0275element(100, "input", 43);
        \u0275\u0275conditionalCreate(101, ValidationComponent_Conditional_101_Template, 2, 1, "div", 39);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(102, "div")(103, "button", 27);
        \u0275\u0275text(104, "Submit form");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(105, "div", 2)(106, "div", 3)(107, "div", 4)(108, "div", 5)(109, "h4", 6);
        \u0275\u0275text(110, "Validation type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "p", 7);
        \u0275\u0275text(112, " Parsley is a javascript form validation library. It helps you provide your users with feedback on their form submission before sending it to your server. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "form", 44);
        \u0275\u0275listener("ngSubmit", function ValidationComponent_Template_form_ngSubmit_113_listener() {
          return ctx.typeSubmit();
        });
        \u0275\u0275elementStart(114, "div", 10)(115, "label", 45);
        \u0275\u0275text(116, "Required");
        \u0275\u0275elementEnd();
        \u0275\u0275element(117, "input", 46);
        \u0275\u0275conditionalCreate(118, ValidationComponent_Conditional_118_Template, 2, 1, "div", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "div", 10)(120, "label", 45);
        \u0275\u0275text(121, "Equal To");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "div");
        \u0275\u0275element(123, "input", 47);
        \u0275\u0275conditionalCreate(124, ValidationComponent_Conditional_124_Template, 3, 2, "div", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "div", 48);
        \u0275\u0275element(126, "input", 49);
        \u0275\u0275conditionalCreate(127, ValidationComponent_Conditional_127_Template, 3, 2, "div", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(128, "div", 10)(129, "label", 45);
        \u0275\u0275text(130, "E-Mail");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(131, "div");
        \u0275\u0275element(132, "input", 50);
        \u0275\u0275conditionalCreate(133, ValidationComponent_Conditional_133_Template, 3, 2, "div", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(134, "div", 10)(135, "label", 45);
        \u0275\u0275text(136, "URL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "div");
        \u0275\u0275element(138, "input", 51);
        \u0275\u0275conditionalCreate(139, ValidationComponent_Conditional_139_Template, 3, 2, "div", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(140, "div", 10)(141, "label", 45);
        \u0275\u0275text(142, "Digits");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "div");
        \u0275\u0275element(144, "input", 52);
        \u0275\u0275conditionalCreate(145, ValidationComponent_Conditional_145_Template, 3, 2, "div", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(146, "div", 10)(147, "label", 45);
        \u0275\u0275text(148, "Number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(149, "div");
        \u0275\u0275element(150, "input", 53);
        \u0275\u0275conditionalCreate(151, ValidationComponent_Conditional_151_Template, 3, 2, "div", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(152, "div", 10)(153, "label", 45);
        \u0275\u0275text(154, "Alphanumeric");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(155, "div");
        \u0275\u0275element(156, "input", 54);
        \u0275\u0275conditionalCreate(157, ValidationComponent_Conditional_157_Template, 3, 2, "div", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(158, "div", 10)(159, "label", 45);
        \u0275\u0275text(160, "Textarea");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(161, "div");
        \u0275\u0275element(162, "textarea", 55);
        \u0275\u0275conditionalCreate(163, ValidationComponent_Conditional_163_Template, 2, 1, "div", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(164, "div", 56)(165, "button", 57);
        \u0275\u0275text(166, " Submit ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "button", 58);
        \u0275\u0275text(168, " Cancel ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(169, "div", 3)(170, "div", 4)(171, "div", 5)(172, "h4", 6);
        \u0275\u0275text(173, "Range validation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(174, "p", 7);
        \u0275\u0275text(175, " Parsley is a javascript form validation library. It helps you provide your users with feedback on their form submission before sending it to your server. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(176, "form", 44);
        \u0275\u0275listener("ngSubmit", function ValidationComponent_Template_form_ngSubmit_176_listener() {
          return ctx.rangeSubmit();
        });
        \u0275\u0275elementStart(177, "div", 10)(178, "label");
        \u0275\u0275text(179, "Min Length");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(180, "div");
        \u0275\u0275element(181, "input", 59);
        \u0275\u0275conditionalCreate(182, ValidationComponent_Conditional_182_Template, 3, 2, "div", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(183, "div", 10)(184, "label");
        \u0275\u0275text(185, "Max Length");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(186, "div");
        \u0275\u0275element(187, "input", 60);
        \u0275\u0275conditionalCreate(188, ValidationComponent_Conditional_188_Template, 3, 2, "div", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(189, "div", 10)(190, "label");
        \u0275\u0275text(191, "Range Length");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(192, "div");
        \u0275\u0275element(193, "input", 61);
        \u0275\u0275conditionalCreate(194, ValidationComponent_Conditional_194_Template, 4, 3, "div", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(195, "div", 10)(196, "label");
        \u0275\u0275text(197, "Min Value");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(198, "div");
        \u0275\u0275element(199, "input", 62);
        \u0275\u0275conditionalCreate(200, ValidationComponent_Conditional_200_Template, 3, 2, "div", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(201, "div", 10)(202, "label");
        \u0275\u0275text(203, "Max Value");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(204, "div");
        \u0275\u0275element(205, "input", 63);
        \u0275\u0275conditionalCreate(206, ValidationComponent_Conditional_206_Template, 3, 2, "div", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(207, "div", 10)(208, "label");
        \u0275\u0275text(209, "Range Value");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(210, "div");
        \u0275\u0275element(211, "input", 64);
        \u0275\u0275conditionalCreate(212, ValidationComponent_Conditional_212_Template, 4, 3, "div", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(213, "div", 10)(214, "label");
        \u0275\u0275text(215, "Regular Exp");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(216, "div");
        \u0275\u0275element(217, "input", 65);
        \u0275\u0275conditionalCreate(218, ValidationComponent_Conditional_218_Template, 3, 2, "div", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(219, "div", 56)(220, "button", 57);
        \u0275\u0275text(221, " Submit ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(222, "button", 58);
        \u0275\u0275text(223, " Cancel ");
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(9);
        \u0275\u0275property("formGroup", ctx.validationform);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(57, _c0, ctx.submit && ctx.form.firstName.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submit && ctx.form.firstName.errors ? 17 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(59, _c0, ctx.submit && ctx.form.lastName.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submit && ctx.form.lastName.errors ? 23 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(61, _c1, ctx.submit && ctx.form.city.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submit && ctx.form.city.errors ? 30 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(63, _c1, ctx.submit && ctx.form.state.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submit && ctx.form.state.errors ? 36 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(65, _c1, ctx.submit && ctx.form.zip.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submit && ctx.form.zip.errors ? 42 : -1);
        \u0275\u0275advance(23);
        \u0275\u0275property("formGroup", ctx.tooltipvalidationform);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(67, _c0, ctx.formsubmit && ctx.formData.firstName.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.formsubmit && ctx.formData.firstName.errors ? 72 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(69, _c0, ctx.formsubmit && ctx.formData.lastName.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.formsubmit && ctx.formData.lastName.errors ? 78 : -1);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(71, _c1, ctx.formsubmit && ctx.formData.userName.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.formsubmit && ctx.formData.userName.errors ? 88 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(73, _c1, ctx.formsubmit && ctx.formData.city.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.formsubmit && ctx.formData.city.errors ? 95 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(75, _c1, ctx.formsubmit && ctx.formData.state.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.formsubmit && ctx.formData.state.errors ? 101 : -1);
        \u0275\u0275advance(12);
        \u0275\u0275property("formGroup", ctx.typeValidationForm);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(77, _c1, ctx.typesubmit && ctx.type.text.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.typesubmit && ctx.type.text.errors ? 118 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(79, _c1, ctx.typesubmit && ctx.type.password.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.typesubmit && ctx.type.password.errors ? 124 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(81, _c1, ctx.typesubmit && ctx.type.confirmpwd.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.typesubmit && ctx.type.confirmpwd.errors ? 127 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(83, _c1, ctx.typesubmit && ctx.type.email.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.typesubmit && ctx.type.email.errors ? 133 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(85, _c1, ctx.typesubmit && ctx.type.url.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.typesubmit && ctx.type.url.errors ? 139 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(87, _c1, ctx.typesubmit && ctx.type.digits.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.typesubmit && ctx.type.digits.errors ? 145 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(89, _c1, ctx.typesubmit && ctx.type.number.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.typesubmit && ctx.type.number.errors ? 151 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(91, _c1, ctx.typesubmit && ctx.type.alphanum.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.typesubmit && ctx.type.alphanum.errors ? 157 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(93, _c1, ctx.typesubmit && ctx.type.textarea.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.typesubmit && ctx.type.textarea.errors ? 163 : -1);
        \u0275\u0275advance(13);
        \u0275\u0275property("formGroup", ctx.rangeValidationForm);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(95, _c1, ctx.rangesubmit && ctx.range.minlength.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.rangesubmit && ctx.range.minlength.errors ? 182 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(97, _c1, ctx.rangesubmit && ctx.range.maxlength.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.rangesubmit && ctx.range.minlength.errors ? 188 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(99, _c1, ctx.rangesubmit && ctx.range.rangelength.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.rangesubmit && ctx.range.rangelength.errors ? 194 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(101, _c1, ctx.rangesubmit && ctx.range.minvalue.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.rangesubmit && ctx.range.minvalue.errors ? 200 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(103, _c1, ctx.rangesubmit && ctx.range.maxvalue.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.rangesubmit && ctx.range.maxvalue.errors ? 206 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(105, _c1, ctx.rangesubmit && ctx.range.rangevalue.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.rangesubmit && ctx.range.minlength.errors ? 212 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(107, _c1, ctx.rangesubmit && ctx.range.regularexp.errors));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.rangesubmit && ctx.range.regularexp.errors ? 218 : -1);
      }
    }, dependencies: [CommonModule, NgClass, PagetitleComponent, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValidationComponent, [{
    type: Component,
    args: [{ selector: "app-validation", imports: [CommonModule, PagetitleComponent, ReactiveFormsModule], template: `<div class="container-fluid">\r
\r
  <!-- start page title -->\r
  <app-page-title title="Form Validation" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
  <!-- end page title -->\r
\r
  <div class="row">\r
    <div class="col-xl-6">\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title">Bootstrap Validation - Normal</h4>\r
          <p class="card-title-desc">Provide valuable, actionable feedback to your users with HTML5 form\r
            validation\u2013available in all our supported browsers.</p>\r
          <form class="needs-validation" (ngSubmit)="validSubmit()" [formGroup]="validationform">\r
            <div class="row">\r
              <div class="col-md-6">\r
                <div class="mb-3">\r
                  <label for="validationCustom01">First name</label>\r
                  <input type="text" class="form-control" id="validationCustom01" formControlName="firstName" placeholder="First name" [ngClass]="{'is-valid': submit && form.firstName.errors}">\r
                  @if(submit && form.firstName.errors){\r
                  <div class="valid-feedback">\r
                    @if(form.firstName.errors.required){\r
                    <span>Looks good!</span>\r
                    }\r
                  </div>}\r
                </div>\r
              </div>\r
              <div class="col-md-6">\r
                <div class="mb-3">\r
                  <label for="validationCustom02">Last name</label>\r
                  <input type="text" class="form-control" id="validationCustom02" formControlName="lastName" placeholder="Last name" [ngClass]="{'is-valid': submit && form.lastName.errors}">\r
                  @if(submit && form.lastName.errors){\r
                  <div class="valid-feedback">\r
                    @if(form.lastName.errors.required){\r
                    <span>Looks good!</span>}\r
                  </div>}\r
                </div>\r
              </div>\r
            </div>\r
            <div class="row">\r
              <div class="col-md-4">\r
                <div class="mb-3">\r
                  <label for="validationCustom03">City</label>\r
                  <input type="text" class="form-control" id="validationCustom03" formControlName="city" placeholder="City" [ngClass]="{'is-invalid': submit && form.city.errors}">\r
                  @if(submit && form.city.errors){\r
                  <div class="invalid-feedback">\r
                    @if(form.city.errors.required){\r
                    <span>Please provide a valid city.</span>}\r
                  </div>}\r
                </div>\r
              </div>\r
              <div class="col-md-4">\r
                <div class="mb-3">\r
                  <label for="validationCustom04">State</label>\r
                  <input type="text" class="form-control" id="validationCustom04" formControlName="state" placeholder="State" [ngClass]="{'is-invalid': submit && form.state.errors}">\r
                  @if(submit && form.state.errors){\r
                  <div class="invalid-feedback">\r
                    @if(form.state.errors.required){\r
                    <span>Please provide a valid state.</span>}\r
                  </div>}\r
                </div>\r
              </div>\r
              <div class="col-md-4">\r
                <div class="mb-3">\r
                  <label for="validationCustom05">Zip</label>\r
                  <input type="text" class="form-control" id="validationCustom05" formControlName="zip" placeholder="Zip" [ngClass]="{'is-invalid': submit && form.zip.errors}">\r
                  @if(submit && form.zip.errors){\r
                  <div class="invalid-feedback">\r
                    @if(form.zip.errors.required){\r
                    <span>Please provide a valid zip.</span>}\r
                  </div>}\r
                </div>\r
              </div>\r
            </div>\r
            <div class="form-check mb-3">\r
              <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>\r
              <label class="form-check-label" for="invalidCheck">\r
                Agree to terms and conditions\r
              </label>\r
              <div class="invalid-feedback">\r
                You must agree before submitting.\r
              </div>\r
            </div>\r
            <div>\r
              <button class="btn btn-primary" type="submit">Submit form</button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
      <!-- end card -->\r
    </div> <!-- end col -->\r
\r
    <div class="col-xl-6">\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title">Bootstrap Validation (Tooltips)</h4>\r
          <p class="card-title-desc">If your form layout allows it, you can swap the\r
            <code>.valid|invalid-feedback</code> classes for <code>.valid|invalid-tooltip</code> classes to display\r
            validation feedback in a styled tooltip.\r
          </p>\r
          <form class="needs-validation" (ngSubmit)="formSubmit()" [formGroup]="tooltipvalidationform">\r
            <div class="row">\r
              <div class="col-md-4">\r
                <div class="mb-3 position-relative">\r
                  <label for="validationTooltip01">First name</label>\r
                  <input type="text" class="form-control" formControlName="firstName" id="validationTooltip01" placeholder="First name" value="Mark" [ngClass]="{'is-valid': formsubmit && formData.firstName.errors}">\r
                  @if(formsubmit && formData.firstName.errors){\r
                  <div class="valid-tooltip">\r
                    @if(formData.firstName.errors.required){\r
                    <span>Looks good!</span>\r
                    }\r
                  </div>}\r
                </div>\r
              </div>\r
              <div class="col-md-4">\r
                <div class="mb-3 position-relative">\r
                  <label for="validationTooltip02">Last name</label>\r
                  <input type="text" class="form-control" id="validationTooltip02" formControlName="lastName" placeholder="Last name" value="Otto" [ngClass]="{'is-valid': formsubmit && formData.lastName.errors}">\r
                  @if(formsubmit && formData.lastName.errors){\r
                  <div class="valid-tooltip">\r
                    @if(formData.lastName.errors.required){\r
                    <span>Looks good!</span>}\r
                  </div>}\r
                </div>\r
              </div>\r
              <div class="col-md-4">\r
                <div class="mb-3 position-relative">\r
                  <label for="validationTooltipUsername">Username</label>\r
                  <div class="input-group">\r
                    <div class="input-group-prepend">\r
                      <span class="input-group-text" id="validationTooltipUsernamePrepend">&#64;</span>\r
                    </div>\r
                    <input type="text" class="form-control" id="validationTooltipUsername" formControlName="userName" placeholder="Username" aria-describedby="validationTooltipUsernamePrepend" [ngClass]="{'is-invalid': formsubmit && formData.userName.errors}">\r
                    @if(formsubmit && formData.userName.errors){\r
                    <div class="invalid-tooltip">\r
                      @if(formData.userName.errors.required){\r
                      <span>Please choose a unique and valid username.</span>\r
                      }\r
                    </div>}\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="row">\r
              <div class="col-md-6">\r
                <div class="mb-3 position-relative">\r
                  <label for="validationTooltip03">City</label>\r
                  <input type="text" class="form-control" id="validationTooltip03" placeholder="City" formControlName="city" [ngClass]="{'is-invalid': formsubmit && formData.city.errors}">\r
                  @if(formsubmit && formData.city.errors){\r
                  <div class="invalid-tooltip">\r
                    @if(formData.city.errors.required){\r
                    <span>Please provide a valid city.</span>}\r
                  </div>}\r
                </div>\r
              </div>\r
              <div class="col-md-6">\r
                <div class="mb-3 position-relative">\r
                  <label for="validationTooltip04">State</label>\r
                  <input type="text" class="form-control" id="validationTooltip04" placeholder="State" formControlName="state" [ngClass]="{'is-invalid': formsubmit && formData.state.errors}">\r
                  @if(formsubmit && formData.state.errors){\r
                  <div class="invalid-tooltip">\r
                    @if(formData.state.errors.required){\r
                    <span>Please provide a valid state.</span>}\r
                  </div>}\r
                </div>\r
              </div>\r
            </div>\r
            <div>\r
              <button class="btn btn-primary" type="submit">Submit form</button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
      <!-- end card -->\r
    </div> <!-- end col -->\r
  </div>\r
  <!-- end row -->\r
\r
  <div class="row">\r
    <div class="col-xl-6">\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title">Validation type</h4>\r
          <p class="card-title-desc">\r
            Parsley is a javascript form validation library. It helps you provide your users with feedback on\r
            their form submission before sending it to your server.\r
          </p>\r
          <form (ngSubmit)="typeSubmit()" [formGroup]="typeValidationForm">\r
            <div class="mb-3">\r
              <label class="form-label">Required</label>\r
              <input type="text" class="form-control" formControlName="text" [ngClass]="{'is-invalid': typesubmit && type.text.errors}" placeholder="Type something" />\r
              @if(typesubmit && type.text.errors){\r
              <div class="invalid-feedback">\r
                @if(type.text.errors.required){\r
                <span>This value is required.</span>}\r
              </div>}\r
            </div>\r
            <div class="mb-3">\r
              <label class="form-label">Equal To</label>\r
              <div>\r
                <input type="password" class="form-control" placeholder="Password" formControlName="password" [ngClass]="{'is-invalid': typesubmit && type.password.errors}" />\r
                @if(typesubmit && type.password.errors){\r
                <div class="invalid-feedback">\r
                  @if(type.password.errors.required){\r
                  <span>This value is required.</span>\r
                  }@if(type.password.errors.minlength){\r
                  <span>Password must be at least 6\r
                    characters.</span>}\r
                </div>}\r
              </div>\r
              <div class="mt-2">\r
                <input type="password" class="form-control" placeholder="Re-Type Password" formControlName="confirmpwd" [ngClass]="{'is-invalid': typesubmit && type.confirmpwd.errors}" />\r
                @if(typesubmit && type.confirmpwd.errors){\r
                <div class="invalid-feedback">\r
                  @if(type.confirmpwd.errors.required){\r
                  <span>This value is required.</span>}\r
                  @if(type.confirmpwd.errors.mustMatch){\r
                  <span>This value should be the same.</span>}\r
                </div>}\r
              </div>\r
            </div>\r
            <div class="mb-3">\r
              <label class="form-label">E-Mail</label>\r
              <div>\r
                <input type="email" class="form-control" formControlName="email" [ngClass]="{'is-invalid': typesubmit && type.email.errors}" placeholder="Enter a valid e-mail" />\r
                @if(typesubmit && type.email.errors){\r
                <div class="invalid-feedback">\r
                  @if(type.email.errors.required){\r
                  <span>This value is required.</span>}\r
                  @if(type.email.errors.pattern){\r
                  <span>This value should be a valid email.</span>}\r
                </div>}\r
              </div>\r
            </div>\r
            <div class="mb-3">\r
              <label class="form-label">URL</label>\r
              <div>\r
                <input type="url" class="form-control" placeholder="URL" formControlName="url" [ngClass]="{'is-invalid': typesubmit && type.url.errors}" />\r
                @if(typesubmit && type.url.errors){\r
                <div class="invalid-feedback">\r
                  @if(type.url.errors.required){\r
                  <span>This value is required.</span>}\r
                  @if(type.url.errors.pattern){\r
                  <span>This value should be a valid url.</span>}\r
                </div>}\r
              </div>\r
            </div>\r
            <div class="mb-3">\r
              <label class="form-label">Digits</label>\r
              <div>\r
                <input formControlName="digits" type="text" class="form-control" [ngClass]="{'is-invalid': typesubmit && type.digits.errors}" placeholder="Enter only digits" />\r
                @if(typesubmit && type.digits.errors){\r
                <div class="invalid-feedback">\r
                  @if(type.digits.errors.required){\r
                  <span>This value is required.</span>}\r
                  @if(type.digits.errors.pattern){\r
                  <span>This value should be digits.</span>}\r
                </div>\r
                }\r
              </div>\r
            </div>\r
            <div class="mb-3">\r
              <label class="form-label">Number</label>\r
              <div>\r
                <input formControlName="number" type="text" class="form-control" [ngClass]="{'is-invalid': typesubmit && type.number.errors}" placeholder="Enter only numbers">\r
                @if(typesubmit && type.number.errors){\r
                <div class="invalid-feedback">\r
                  @if(type.number.errors.required){\r
                  <span>This value is required.</span>}\r
                  @if(type.number.errors.pattern){\r
                  <span>This value should be a valid number.</span>}\r
                </div>}\r
              </div>\r
            </div>\r
            <div class="mb-3">\r
              <label class="form-label">Alphanumeric</label>\r
              <div>\r
                <input formControlName="alphanum" type="text" class="form-control" [ngClass]="{'is-invalid': typesubmit && type.alphanum.errors}" placeholder="Enter alphanumeric value" />\r
                @if(typesubmit && type.alphanum.errors){\r
                <div class="invalid-feedback">\r
                  @if(type.alphanum.errors.required){\r
                  <span>This value is required.</span>\r
                  }\r
                  @if(type.alphanum.errors.pattern){\r
                  <span>This value should be alphanumeric.</span>\r
                  }\r
                </div>}\r
              </div>\r
            </div>\r
            <div class="mb-3">\r
              <label class="form-label">Textarea</label>\r
              <div>\r
                <textarea formControlName="textarea" class="form-control" rows="5" [ngClass]="{'is-invalid': typesubmit && type.textarea.errors}"></textarea>\r
                @if(typesubmit && type.textarea.errors){\r
                <div class="invalid-feedback">\r
                  @if(type.textarea.errors.required){\r
                  <span>This value is required.</span>\r
                  }\r
                </div>}\r
              </div>\r
            </div>\r
            <div class="d-flex flex-wrap gap-2">\r
              <button type="submit" class="btn btn-primary waves-effect waves-light">\r
                Submit\r
              </button>\r
              <button type="reset" class="btn btn-secondary waves-effect">\r
                Cancel\r
              </button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="col-xl-6">\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title">Range validation</h4>\r
          <p class="card-title-desc">\r
            Parsley is a javascript form validation library. It helps you provide your users with feedback on\r
            their form submission before sending it to your server.\r
          </p>\r
          <form (ngSubmit)="rangeSubmit()" [formGroup]="rangeValidationForm">\r
            <div class="mb-3">\r
              <label>Min Length</label>\r
              <div>\r
                <input type="text" class="form-control" formControlName="minlength" [ngClass]="{'is-invalid': rangesubmit && range.minlength.errors}" placeholder="Min 6 chars." />\r
                @if(rangesubmit && range.minlength.errors){\r
                <div class="invalid-feedback">\r
                  @if(range.minlength.errors.required){\r
                  <span>This value is required.</span>\r
                  }\r
                  @if(range.minlength.errors.minlength){\r
                  <span>This value is too short. It should have 6\r
                    characters or more.</span>\r
                  }\r
                </div>}\r
              </div>\r
            </div>\r
            <div class="mb-3">\r
              <label>Max Length</label>\r
              <div>\r
                <input type="text" class="form-control" formControlName="maxlength" [ngClass]="{'is-invalid': rangesubmit && range.maxlength.errors}" placeholder="Max 6 chars." />\r
                @if(rangesubmit && range.minlength.errors){\r
                <div class="invalid-feedback">\r
                  @if(range.maxlength.errors.required){\r
                  <span>This value is required.</span>}\r
                  @if(range.maxlength.errors.maxlength){\r
                  <span>This value is too long. It should have 6\r
                    characters or fewer.</span>}\r
                </div>}\r
              </div>\r
            </div>\r
            <div class="mb-3">\r
              <label>Range Length</label>\r
              <div>\r
                <input type="text" class="form-control" formControlName="rangelength" [ngClass]="{'is-invalid': rangesubmit && range.rangelength.errors}" placeholder="Text between 5 - 10 chars length" />\r
                @if(rangesubmit && range.rangelength.errors){\r
                <div class="invalid-feedback">\r
                  @if(range.rangelength.errors.required){\r
                  <span>This value is required.</span>}\r
                  @if(range.rangelength.errors.minlength){\r
                  <span>This value length is invalid. It should\r
                    be between 5 and 10 characters long.</span>}\r
                  @if(range.rangelength.errors.maxlength){\r
                  <span>This value length is invalid. It should\r
                    be between 5 and 10 characters long.</span>}\r
                </div>}\r
              </div>\r
            </div>\r
            <div class="mb-3">\r
              <label>Min Value</label>\r
              <div>\r
                <input type="text" class="form-control" formControlName="minvalue" [ngClass]="{'is-invalid': rangesubmit && range.minvalue.errors}" placeholder="Min value is 6" />\r
                @if(rangesubmit && range.minvalue.errors){\r
                <div class="invalid-feedback">\r
                  @if(range.minvalue.errors.required){\r
                  <span>This value is required.</span>}\r
                  @if(range.minvalue.errors.min){\r
                  <span>This value should be greater than or equal to\r
                    6.</span>}\r
                </div>}\r
              </div>\r
            </div>\r
            <div class="mb-3">\r
              <label>Max Value</label>\r
              <div>\r
                <input type="text" class="form-control" formControlName="maxvalue" [ngClass]="{'is-invalid': rangesubmit && range.maxvalue.errors}" placeholder="Max value is 6" />\r
                @if(rangesubmit && range.maxvalue.errors){\r
                <div class="invalid-feedback">\r
                  @if(range.maxvalue.errors.required){\r
                  <span>This value is required.</span>}\r
                  @if(range.maxvalue.errors.max){\r
                  <span>This value should be lower than or equal to\r
                    6.</span>}\r
                </div>}\r
              </div>\r
            </div>\r
            <div class="mb-3">\r
              <label>Range Value</label>\r
              <div>\r
                <input class="form-control" type="text range" formControlName="rangevalue" [ngClass]="{'is-invalid': rangesubmit && range.rangevalue.errors}" placeholder="Number between 6 - 100" />\r
                @if(rangesubmit && range.minlength.errors){\r
                <div class="invalid-feedback">\r
                  @if(range.rangevalue.errors.required){\r
                  <span>This value is required.</span>}\r
                  @if(range.rangevalue.errors.min){\r
                  <span>This value should be between 6 and 100.</span>}\r
                  @if(range.rangevalue.errors.max){\r
                  <span>This value should be between 6 and 100.</span>}\r
                </div>}\r
              </div>\r
            </div>\r
            <div class="mb-3">\r
              <label>Regular Exp</label>\r
              <div>\r
                <input type="text" class="form-control" formControlName="regularexp" [ngClass]="{'is-invalid': rangesubmit && range.regularexp.errors}" placeholder="Hex. Color" />\r
                @if(rangesubmit && range.regularexp.errors){\r
                <div class="invalid-feedback">\r
                  @if(range.regularexp.errors.required){\r
                  <span>This value is required.</span>}\r
                  @if(range.regularexp.errors.pattern){\r
                  <span>This value seems to be invalid.</span>}\r
                </div>}\r
              </div>\r
            </div>\r
\r
            <div class="d-flex flex-wrap gap-2">\r
              <button type="submit" class="btn btn-primary waves-effect waves-light">\r
                Submit\r
              </button>\r
              <button type="reset" class="btn btn-secondary waves-effect">\r
                Cancel\r
              </button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>` }]
  }], () => [{ type: UntypedFormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ValidationComponent, { className: "ValidationComponent", filePath: "src/app/pages/form/validation/validation.component.ts", lineNumber: 17 });
})();

// src/app/pages/form/editor/editor.component.ts
var EditorComponent = class _EditorComponent {
  constructor() {
    this.toolbar = [
      ["bold", "italic"],
      ["underline", "strike"],
      ["code", "blockquote"],
      ["ordered_list", "bullet_list"],
      [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
      ["link", "image"],
      ["text_color", "background_color"],
      ["align_left", "align_center", "align_right", "align_justify"]
    ];
    this.form = new FormGroup({
      editorContent: new FormControl("", Validators2.required())
    });
  }
  ngOnInit() {
    this.editor = new Editor();
  }
  ngOnDestroy() {
    this.editor.destroy();
  }
  static {
    this.\u0275fac = function EditorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditorComponent, selectors: [["app-editor"]], decls: 10, vars: 4, consts: [[1, "container-fluid"], ["title", "Form Editor", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-3"], [3, "editor", "toolbar"], ["formControlName", "editorContent", 3, "editor"]], template: function EditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
        \u0275\u0275text(7, "NGX Editor");
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "ngx-editor-menu", 7)(9, "ngx-editor", 8);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(7);
        \u0275\u0275property("editor", ctx.editor)("toolbar", ctx.toolbar);
        \u0275\u0275advance();
        \u0275\u0275property("editor", ctx.editor);
      }
    }, dependencies: [PagetitleComponent, NgxEditorModule, NgxEditorComponent, NgxEditorMenuComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditorComponent, [{
    type: Component,
    args: [{ selector: "app-editor", imports: [PagetitleComponent, NgxEditorModule], schemas: [NO_ERRORS_SCHEMA], template: '<div class="container-fluid">\r\n\r\n  <!-- start page title -->\r\n  <app-page-title title="Form Editor" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r\n  <!-- end page title -->\r\n\r\n  <div class="row">\r\n    <div class="col-12">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title mb-3">NGX Editor</h4>\r\n          <ngx-editor-menu [editor]="editor" [toolbar]="toolbar"> </ngx-editor-menu>\r\n          <ngx-editor [editor]="editor" formControlName="editorContent"> </ngx-editor>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditorComponent, { className: "EditorComponent", filePath: "src/app/pages/form/editor/editor.component.ts", lineNumber: 17 });
})();

// src/app/pages/form/uploads/uploads.component.ts
function UploadsComponent_Conditional_13_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 17);
  }
  if (rf & 2) {
    const file_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", file_r2.dataURL, \u0275\u0275sanitizeUrl);
  }
}
function UploadsComponent_Conditional_13_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 17);
  }
  if (rf & 2) {
    const file_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", file_r2, \u0275\u0275sanitizeUrl);
  }
}
function UploadsComponent_Conditional_13_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const file_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(file_r2.name);
  }
}
function UploadsComponent_Conditional_13_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const file_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(file_r2.size);
  }
}
function UploadsComponent_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 12)(1, "div", 13)(2, "div", 14)(3, "div", 15)(4, "div", 16);
    \u0275\u0275conditionalCreate(5, UploadsComponent_Conditional_13_For_2_Conditional_5_Template, 1, 1, "img", 17)(6, UploadsComponent_Conditional_13_For_2_Conditional_6_Template, 1, 1, "img", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 18)(8, "div", 19);
    \u0275\u0275conditionalCreate(9, UploadsComponent_Conditional_13_For_2_Conditional_9_Template, 2, 1, "h5", 20);
    \u0275\u0275conditionalCreate(10, UploadsComponent_Conditional_13_For_2_Conditional_10_Template, 2, 1, "p", 21);
    \u0275\u0275element(11, "strong", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 23)(13, "button", 24);
    \u0275\u0275listener("click", function UploadsComponent_Conditional_13_For_2_Template_button_click_13_listener() {
      const file_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeFile(file_r2));
    });
    \u0275\u0275text(14, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const file_r2 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275conditional(file_r2.dataURL ? 5 : 6);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(file_r2.name ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(file_r2.size ? 10 : -1);
  }
}
function UploadsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 9);
    \u0275\u0275repeaterCreate(1, UploadsComponent_Conditional_13_For_2_Template, 15, 3, "li", 12, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.uploadedFiles);
  }
}
var UploadsComponent = class _UploadsComponent {
  constructor() {
    this.files = [];
    this.dropzoneConfig = {
      clickable: true,
      addRemoveLinks: true,
      previewsContainer: false
    };
    this.uploadedFiles = [];
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Forms" }, { label: "Form File Upload", active: true }];
  }
  onUploadSuccess(event) {
    setTimeout(() => {
      this.uploadedFiles.push(event[0]);
    }, 0);
  }
  // File Remove
  removeFile(event) {
    this.uploadedFiles.splice(this.uploadedFiles.indexOf(event), 1);
  }
  static {
    this.\u0275fac = function UploadsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UploadsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UploadsComponent, selectors: [["app-uploads"]], decls: 17, vars: 4, consts: [[1, "container-fluid"], ["title", "Form File Upload", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-title-desc"], [1, "dropzone", 3, "success", "config", "message"], ["id", "dropzone-preview", 1, "list-unstyled", "mb-0"], [1, "text-center", "mt-4"], ["type", "button", 1, "btn", "btn-primary"], ["id", "dropzone-preview-list", 1, "mt-2"], [1, "border", "rounded"], [1, "d-flex", "p-2"], [1, "flex-shrink-0", "me-3"], [1, "avatar-sm", "bg-light", "rounded"], ["alt", "Dropzone-Image", 1, "img-fluid", "rounded", "d-block", 3, "src"], [1, "flex-grow-1"], [1, "pt-1"], [1, "fs-md", "mb-1"], [1, "fs-sm", "text-muted", "mb-0"], ["data-dz-errormessage", "", 1, "error", "text-danger"], [1, "flex-shrink-0", "ms-3"], [1, "btn", "btn-sm", "btn-danger", 3, "click"]], template: function UploadsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        \u0275\u0275text(7, "Dropzone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 7);
        \u0275\u0275text(9, "DropzoneJS is an open source library that provides drag\u2019n\u2019drop file uploads with image previews. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div")(11, "form")(12, "dropzone", 8);
        \u0275\u0275listener("success", function UploadsComponent_Template_dropzone_success_12_listener($event) {
          return ctx.onUploadSuccess($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(13, UploadsComponent_Conditional_13_Template, 3, 0, "ul", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 10)(15, "button", 11);
        \u0275\u0275text(16, "Send Files");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(11);
        \u0275\u0275property("config", ctx.dropzoneConfig)("message", "Drop files here or click to upload.");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.uploadedFiles ? 13 : -1);
      }
    }, dependencies: [PagetitleComponent, DropzoneModule, DropzoneComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadsComponent, [{
    type: Component,
    args: [{ selector: "app-uploads", imports: [PagetitleComponent, DropzoneModule], template: `<div class="container-fluid">\r
  <app-page-title title="Form File Upload" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
\r
  <div class="row">\r
    <div class="col-12">\r
      <div class="card">\r
        <div class="card-body">\r
          <div class="card-title">Dropzone</div>\r
          <p class="card-title-desc">DropzoneJS is an open source library\r
            that provides drag\u2019n\u2019drop file uploads with image previews.\r
          </p>\r
          <div>\r
            <form>\r
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
                          }@else{\r
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
              </ul>\r
              }\r
              <!-- end dropzon-preview -->\r
            </form>\r
          </div>\r
          <div class="text-center mt-4">\r
            <button type="button" class="btn btn-primary">Send Files</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UploadsComponent, { className: "UploadsComponent", filePath: "src/app/pages/form/uploads/uploads.component.ts", lineNumber: 16 });
})();

// src/app/pages/form/wizard/wizard.component.ts
function WizardComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1, "1.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Seller Details");
    \u0275\u0275elementEnd();
  }
}
function WizardComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "form")(2, "div", 3)(3, "div", 13)(4, "div", 14)(5, "label", 15);
    \u0275\u0275text(6, "First name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 13)(9, "div", 14)(10, "label", 17);
    \u0275\u0275text(11, "Last name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 3)(14, "div", 13)(15, "div", 14)(16, "label", 19);
    \u0275\u0275text(17, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 13)(20, "div", 14)(21, "label", 21);
    \u0275\u0275text(22, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 3)(25, "div", 4)(26, "div", 14)(27, "label", 23);
    \u0275\u0275text(28, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "textarea", 24);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "ul", 25)(31, "li", 26)(32, "button", 27);
    \u0275\u0275text(33, "Previous");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "li", 28)(35, "button", 29);
    \u0275\u0275text(36, "Next");
    \u0275\u0275elementEnd()()()();
  }
}
function WizardComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1, "2.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Company Document");
    \u0275\u0275elementEnd();
  }
}
function WizardComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "form")(2, "div", 3)(3, "div", 13)(4, "div", 14)(5, "label", 30);
    \u0275\u0275text(6, "PAN Card");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 13)(9, "div", 14)(10, "label", 32);
    \u0275\u0275text(11, "VAT/TIN No.");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 3)(14, "div", 13)(15, "div", 14)(16, "label", 34);
    \u0275\u0275text(17, "CST No.");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 13)(20, "div", 14)(21, "label", 36);
    \u0275\u0275text(22, "Service Tax No.");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 3)(25, "div", 13)(26, "div", 14)(27, "label", 38);
    \u0275\u0275text(28, "Company UIN");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 13)(31, "div", 14)(32, "label", 40);
    \u0275\u0275text(33, "Declaration");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 41);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "ul", 25)(36, "li", 26)(37, "button", 27);
    \u0275\u0275text(38, "Previous");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "li", 28)(40, "button", 29);
    \u0275\u0275text(41, "Next");
    \u0275\u0275elementEnd()()()();
  }
}
function WizardComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1, "3.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Bank Details");
    \u0275\u0275elementEnd();
  }
}
function WizardComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div")(2, "form")(3, "div", 3)(4, "div", 13)(5, "div", 14)(6, "label", 42);
    \u0275\u0275text(7, "Name on Card");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 13)(10, "div", 14)(11, "label");
    \u0275\u0275text(12, "Credit Card Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 44)(14, "option", 45);
    \u0275\u0275text(15, "Select Card Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 46);
    \u0275\u0275text(17, "American Express");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 47);
    \u0275\u0275text(19, "Visa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 48);
    \u0275\u0275text(21, "MasterCard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 49);
    \u0275\u0275text(23, "Discover");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(24, "div", 3)(25, "div", 13)(26, "div", 14)(27, "label", 50);
    \u0275\u0275text(28, "Credit Card Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 13)(31, "div", 14)(32, "label", 52);
    \u0275\u0275text(33, "Card Verification Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 53);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 3)(36, "div", 13)(37, "div", 14)(38, "label", 54);
    \u0275\u0275text(39, "Expiration Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 55);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(41, "ul", 25)(42, "li", 26)(43, "button", 27);
    \u0275\u0275text(44, "Previous");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "li", 28)(46, "button", 29);
    \u0275\u0275text(47, "Next");
    \u0275\u0275elementEnd()()()();
  }
}
function WizardComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1, "4.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Confirm Detail");
    \u0275\u0275elementEnd();
  }
}
function WizardComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 56)(2, "div", 13)(3, "div", 57)(4, "div", 58);
    \u0275\u0275element(5, "i", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "h5");
    \u0275\u0275text(8, "Confirm Detail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 60);
    \u0275\u0275text(10, "If several languages coalesce, the grammar of the resulting");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(11, "ul", 25)(12, "li", 26)(13, "button", 27);
    \u0275\u0275text(14, "Previous");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "li", 28)(16, "button", 29);
    \u0275\u0275text(17, "Finish");
    \u0275\u0275elementEnd()()()();
  }
}
function WizardComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1, "1.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Seller Details");
    \u0275\u0275elementEnd();
  }
}
function WizardComponent_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1, "2.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Company Document");
    \u0275\u0275elementEnd();
  }
}
function WizardComponent_ng_template_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1, "3.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Bank Details");
    \u0275\u0275elementEnd();
  }
}
function WizardComponent_ng_template_165_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1, "4.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Confirm Detail");
    \u0275\u0275elementEnd();
  }
}
var WizardComponent = class _WizardComponent {
  constructor() {
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Forms" }, { label: "Form Wizard", active: true }];
  }
  static {
    this.\u0275fac = function WizardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WizardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WizardComponent, selectors: [["app-wizard"]], decls: 184, vars: 15, consts: [["cdkStepper", ""], [1, "container-fluid"], ["title", "Form Wizard", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], ["id", "basic-example"], [1, "wizard", 3, "linear"], [3, "optional"], ["cdkStepLabel", ""], ["id", "vertical-example", 1, "vertical-wizard", 3, "linear"], [1, "col-lg-6"], [1, "mb-3"], ["for", "basicpill-firstname-input"], ["type", "text", "id", "basicpill-firstname-input", "placeholder", "Enter Your First Name", 1, "form-control"], ["for", "basicpill-lastname-input"], ["type", "text", "id", "basicpill-lastname-input", "placeholder", "Enter Your Last Name", 1, "form-control"], ["for", "basicpill-phoneno-input"], ["type", "text", "id", "basicpill-phoneno-input", "placeholder", "Enter Your Phone No.", 1, "form-control"], ["for", "basicpill-email-input"], ["type", "email", "id", "basicpill-email-input", "placeholder", "Enter Your Email ID", 1, "form-control"], ["for", "basicpill-address-input"], ["id", "basicpill-address-input", "rows", "2", "placeholder", "Enter Your Address", 1, "form-control"], [1, "list-inline", "wizard", "d-flex", "justify-content-end", "mb-0"], ["aria-disabled", "true", 1, "previous", "list-inline-item"], ["cdkStepperPrevious", "", 1, "btn", "btn-primary"], ["aria-disabled", "false", 1, "next", "list-inline-item"], ["cdkStepperNext", "", 1, "btn", "btn-primary"], ["for", "basicpill-pancard-input"], ["type", "text", "id", "basicpill-pancard-input", 1, "form-control"], ["for", "basicpill-vatno-input"], ["type", "text", "id", "basicpill-vatno-input", 1, "form-control"], ["for", "basicpill-cstno-input"], ["type", "text", "id", "basicpill-cstno-input", 1, "form-control"], ["for", "basicpill-servicetax-input"], ["type", "text", "id", "basicpill-servicetax-input", 1, "form-control"], ["for", "basicpill-companyuin-input"], ["type", "text", "id", "basicpill-companyuin-input", 1, "form-control"], ["for", "basicpill-declaration-input"], ["type", "text", "id", "basicpill-declaration-input", 1, "form-control"], ["for", "basicpill-namecard-input"], ["type", "text", "id", "basicpill-namecard-input", 1, "form-control"], [1, "form-select"], ["selected", ""], ["value", "AE"], ["value", "VI"], ["value", "MC"], ["value", "DI"], ["for", "basicpill-cardno-input"], ["type", "text", "id", "basicpill-cardno-input", 1, "form-control"], ["for", "basicpill-card-verification-input"], ["type", "text", "id", "basicpill-card-verification-input", 1, "form-control"], ["for", "basicpill-expiration-input"], ["type", "text", "id", "basicpill-expiration-input", 1, "form-control"], [1, "row", "justify-content-center"], [1, "text-center"], [1, "mb-4"], [1, "mdi", "mdi-check-circle-outline", "text-success", "display-4"], [1, "text-muted"], [1, "number"]], template: function WizardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275element(1, "app-page-title", 2);
        \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "h4", 7);
        \u0275\u0275text(7, "Basic Wizard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 8)(9, "ng-stepper", 9, 0)(11, "cdk-step", 10);
        \u0275\u0275template(12, WizardComponent_ng_template_12_Template, 4, 0, "ng-template", 11);
        \u0275\u0275conditionalCreate(13, WizardComponent_Conditional_13_Template, 37, 0, "section");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "cdk-step", 10);
        \u0275\u0275template(15, WizardComponent_ng_template_15_Template, 4, 0, "ng-template", 11);
        \u0275\u0275conditionalCreate(16, WizardComponent_Conditional_16_Template, 42, 0, "section");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "cdk-step", 10);
        \u0275\u0275template(18, WizardComponent_ng_template_18_Template, 4, 0, "ng-template", 11);
        \u0275\u0275conditionalCreate(19, WizardComponent_Conditional_19_Template, 48, 0, "section");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "cdk-step", 10);
        \u0275\u0275template(21, WizardComponent_ng_template_21_Template, 4, 0, "ng-template", 11);
        \u0275\u0275conditionalCreate(22, WizardComponent_Conditional_22_Template, 18, 0, "section");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(23, "div", 3)(24, "div", 4)(25, "div", 5)(26, "div", 6)(27, "h4", 7);
        \u0275\u0275text(28, "Vertical Wizard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "ng-stepper", 12, 0)(31, "cdk-step", 10);
        \u0275\u0275template(32, WizardComponent_ng_template_32_Template, 4, 0, "ng-template", 11);
        \u0275\u0275elementStart(33, "section")(34, "form")(35, "div", 3)(36, "div", 13)(37, "div", 14)(38, "label", 15);
        \u0275\u0275text(39, "First name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(40, "input", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 13)(42, "div", 14)(43, "label", 17);
        \u0275\u0275text(44, "Last name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(45, "input", 18);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "div", 3)(47, "div", 13)(48, "div", 14)(49, "label", 19);
        \u0275\u0275text(50, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275element(51, "input", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 13)(53, "div", 14)(54, "label", 21);
        \u0275\u0275text(55, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(56, "input", 22);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(57, "div", 3)(58, "div", 4)(59, "div", 14)(60, "label", 23);
        \u0275\u0275text(61, "Address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(62, "textarea", 24);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(63, "ul", 25)(64, "li", 26)(65, "button", 27);
        \u0275\u0275text(66, "Previous");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "li", 28)(68, "button", 29);
        \u0275\u0275text(69, "Next");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(70, "cdk-step", 10);
        \u0275\u0275template(71, WizardComponent_ng_template_71_Template, 4, 0, "ng-template", 11);
        \u0275\u0275elementStart(72, "section")(73, "form")(74, "div", 3)(75, "div", 13)(76, "div", 14)(77, "label", 30);
        \u0275\u0275text(78, "PAN Card");
        \u0275\u0275elementEnd();
        \u0275\u0275element(79, "input", 31);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(80, "div", 13)(81, "div", 14)(82, "label", 32);
        \u0275\u0275text(83, "VAT/TIN No.");
        \u0275\u0275elementEnd();
        \u0275\u0275element(84, "input", 33);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(85, "div", 3)(86, "div", 13)(87, "div", 14)(88, "label", 34);
        \u0275\u0275text(89, "CST No.");
        \u0275\u0275elementEnd();
        \u0275\u0275element(90, "input", 35);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(91, "div", 13)(92, "div", 14)(93, "label", 36);
        \u0275\u0275text(94, "Service Tax No.");
        \u0275\u0275elementEnd();
        \u0275\u0275element(95, "input", 37);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(96, "div", 3)(97, "div", 13)(98, "div", 14)(99, "label", 38);
        \u0275\u0275text(100, "Company UIN");
        \u0275\u0275elementEnd();
        \u0275\u0275element(101, "input", 39);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(102, "div", 13)(103, "div", 14)(104, "label", 40);
        \u0275\u0275text(105, "Declaration");
        \u0275\u0275elementEnd();
        \u0275\u0275element(106, "input", 41);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(107, "ul", 25)(108, "li", 26)(109, "button", 27);
        \u0275\u0275text(110, "Previous");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(111, "li", 28)(112, "button", 29);
        \u0275\u0275text(113, "Next");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(114, "cdk-step", 10);
        \u0275\u0275template(115, WizardComponent_ng_template_115_Template, 4, 0, "ng-template", 11);
        \u0275\u0275elementStart(116, "section")(117, "div")(118, "form")(119, "div", 3)(120, "div", 13)(121, "div", 14)(122, "label", 42);
        \u0275\u0275text(123, "Name on Card");
        \u0275\u0275elementEnd();
        \u0275\u0275element(124, "input", 43);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(125, "div", 13)(126, "div", 14)(127, "label");
        \u0275\u0275text(128, "Credit Card Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "select", 44)(130, "option", 45);
        \u0275\u0275text(131, "Select Card Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "option", 46);
        \u0275\u0275text(133, "American Express");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "option", 47);
        \u0275\u0275text(135, "Visa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "option", 48);
        \u0275\u0275text(137, "MasterCard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "option", 49);
        \u0275\u0275text(139, "Discover");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(140, "div", 3)(141, "div", 13)(142, "div", 14)(143, "label", 50);
        \u0275\u0275text(144, "Credit Card Number");
        \u0275\u0275elementEnd();
        \u0275\u0275element(145, "input", 51);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(146, "div", 13)(147, "div", 14)(148, "label", 52);
        \u0275\u0275text(149, "Card Verification Number");
        \u0275\u0275elementEnd();
        \u0275\u0275element(150, "input", 53);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(151, "div", 3)(152, "div", 13)(153, "div", 14)(154, "label", 54);
        \u0275\u0275text(155, "Expiration Date");
        \u0275\u0275elementEnd();
        \u0275\u0275element(156, "input", 55);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(157, "ul", 25)(158, "li", 26)(159, "button", 27);
        \u0275\u0275text(160, "Previous");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(161, "li", 28)(162, "button", 29);
        \u0275\u0275text(163, "Next");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(164, "cdk-step", 10);
        \u0275\u0275template(165, WizardComponent_ng_template_165_Template, 4, 0, "ng-template", 11);
        \u0275\u0275elementStart(166, "section")(167, "div", 56)(168, "div", 13)(169, "div", 57)(170, "div", 58);
        \u0275\u0275element(171, "i", 59);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(172, "div")(173, "h5");
        \u0275\u0275text(174, "Confirm Detail");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(175, "p", 60);
        \u0275\u0275text(176, "If several languages coalesce, the grammar of the resulting");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(177, "ul", 25)(178, "li", 26)(179, "button", 27);
        \u0275\u0275text(180, "Previous");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(181, "li", 28)(182, "button", 29);
        \u0275\u0275text(183, "Finish");
        \u0275\u0275elementEnd()()()()()()()()()()();
      }
      if (rf & 2) {
        const cdkStepper_r1 = \u0275\u0275reference(10);
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(8);
        \u0275\u0275property("linear", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("optional", false);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(cdkStepper_r1.selectedIndex === 0 ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("optional", true);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(cdkStepper_r1.selectedIndex === 1 ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("optional", true);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(cdkStepper_r1.selectedIndex === 2 ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("optional", true);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(cdkStepper_r1.selectedIndex === 3 ? 22 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275property("linear", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("optional", false);
        \u0275\u0275advance(39);
        \u0275\u0275property("optional", true);
        \u0275\u0275advance(44);
        \u0275\u0275property("optional", true);
        \u0275\u0275advance(50);
        \u0275\u0275property("optional", true);
      }
    }, dependencies: [PagetitleComponent, NgStepperModule, NgStepperComponent, CdkStepperModule, CdkStep, CdkStepLabel, CdkStepperNext, CdkStepperPrevious], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WizardComponent, [{
    type: Component,
    args: [{ selector: "app-wizard", imports: [PagetitleComponent, NgStepperModule, CdkStepperModule], template: '<div class="container-fluid">\r\n  <app-page-title title="Form Wizard" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r\n\r\n  <!-- Start Form Wizard Basic row -->\r\n  <div class="row">\r\n    <div class="col-lg-12">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title mb-4">Basic Wizard</h4>\r\n          <div id="basic-example">\r\n            <ng-stepper #cdkStepper [linear]="true" class="wizard">\r\n\r\n              <cdk-step [optional]="false">\r\n                <ng-template cdkStepLabel>\r\n                  <span class="number">1.</span>\r\n                  <span>Seller Details</span>\r\n                </ng-template>\r\n                @if(cdkStepper.selectedIndex === 0){\r\n                <section>\r\n                  <form>\r\n                    <div class="row">\r\n                      <div class="col-lg-6">\r\n                        <div class="mb-3">\r\n                          <label for="basicpill-firstname-input">First name</label>\r\n                          <input type="text" class="form-control" id="basicpill-firstname-input" placeholder="Enter Your First Name">\r\n                        </div>\r\n                      </div>\r\n                      <div class="col-lg-6">\r\n                        <div class="mb-3">\r\n                          <label for="basicpill-lastname-input">Last name</label>\r\n                          <input type="text" class="form-control" id="basicpill-lastname-input" placeholder="Enter Your Last Name">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="row">\r\n                      <div class="col-lg-6">\r\n                        <div class="mb-3">\r\n                          <label for="basicpill-phoneno-input">Phone</label>\r\n                          <input type="text" class="form-control" id="basicpill-phoneno-input" placeholder="Enter Your Phone No.">\r\n                        </div>\r\n                      </div>\r\n                      <div class="col-lg-6">\r\n                        <div class="mb-3">\r\n                          <label for="basicpill-email-input">Email</label>\r\n                          <input type="email" class="form-control" id="basicpill-email-input" placeholder="Enter Your Email ID">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class="row">\r\n                      <div class="col-lg-12">\r\n                        <div class="mb-3">\r\n                          <label for="basicpill-address-input">Address</label>\r\n                          <textarea id="basicpill-address-input" class="form-control" rows="2" placeholder="Enter Your Address"></textarea>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </form>\r\n                  <ul class="list-inline wizard d-flex justify-content-end mb-0">\r\n                    <li class="previous list-inline-item" aria-disabled="true"><button class="btn btn-primary" cdkStepperPrevious>Previous</button></li>\r\n                    <li class="next list-inline-item" aria-disabled="false"><button class="btn btn-primary" cdkStepperNext>Next</button></li>\r\n                  </ul>\r\n                </section>\r\n                }\r\n              </cdk-step>\r\n\r\n              <cdk-step [optional]="true">\r\n                <ng-template cdkStepLabel>\r\n                  <span class="number">2.</span>\r\n                  <span>Company Document</span>\r\n                </ng-template>\r\n                @if(cdkStepper.selectedIndex === 1){\r\n                <section>\r\n                  <form>\r\n                    <div class="row">\r\n                      <div class="col-lg-6">\r\n                        <div class="mb-3">\r\n                          <label for="basicpill-pancard-input">PAN Card</label>\r\n                          <input type="text" class="form-control" id="basicpill-pancard-input">\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="col-lg-6">\r\n                        <div class="mb-3">\r\n                          <label for="basicpill-vatno-input">VAT/TIN No.</label>\r\n                          <input type="text" class="form-control" id="basicpill-vatno-input">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class="row">\r\n                      <div class="col-lg-6">\r\n                        <div class="mb-3">\r\n                          <label for="basicpill-cstno-input">CST No.</label>\r\n                          <input type="text" class="form-control" id="basicpill-cstno-input">\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="col-lg-6">\r\n                        <div class="mb-3">\r\n                          <label for="basicpill-servicetax-input">Service Tax No.</label>\r\n                          <input type="text" class="form-control" id="basicpill-servicetax-input">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class="row">\r\n                      <div class="col-lg-6">\r\n                        <div class="mb-3">\r\n                          <label for="basicpill-companyuin-input">Company UIN</label>\r\n                          <input type="text" class="form-control" id="basicpill-companyuin-input">\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="col-lg-6">\r\n                        <div class="mb-3">\r\n                          <label for="basicpill-declaration-input">Declaration</label>\r\n                          <input type="text" class="form-control" id="basicpill-declaration-input">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </form>\r\n\r\n                  <ul class="list-inline wizard d-flex justify-content-end mb-0">\r\n                    <li class="previous list-inline-item" aria-disabled="true"><button class="btn btn-primary" cdkStepperPrevious>Previous</button></li>\r\n                    <li class="next list-inline-item" aria-disabled="false"><button class="btn btn-primary" cdkStepperNext>Next</button></li>\r\n                  </ul>\r\n                </section>\r\n                }\r\n              </cdk-step>\r\n\r\n              <cdk-step [optional]="true">\r\n                <ng-template cdkStepLabel>\r\n                  <span class="number">3.</span>\r\n                  <span>Bank Details</span>\r\n                </ng-template>\r\n                @if(cdkStepper.selectedIndex === 2){\r\n                <section>\r\n                  <div>\r\n                    <form>\r\n                      <div class="row">\r\n                        <div class="col-lg-6">\r\n                          <div class="mb-3">\r\n                            <label for="basicpill-namecard-input">Name on Card</label>\r\n                            <input type="text" class="form-control" id="basicpill-namecard-input">\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="col-lg-6">\r\n                          <div class="mb-3">\r\n                            <label>Credit Card Type</label>\r\n                            <select class="form-select">\r\n                              <option selected>Select Card Type</option>\r\n                              <option value="AE">American Express</option>\r\n                              <option value="VI">Visa</option>\r\n                              <option value="MC">MasterCard</option>\r\n                              <option value="DI">Discover</option>\r\n                            </select>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class="row">\r\n                        <div class="col-lg-6">\r\n                          <div class="mb-3">\r\n                            <label for="basicpill-cardno-input">Credit Card Number</label>\r\n                            <input type="text" class="form-control" id="basicpill-cardno-input">\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="col-lg-6">\r\n                          <div class="mb-3">\r\n                            <label for="basicpill-card-verification-input">Card Verification Number</label>\r\n                            <input type="text" class="form-control" id="basicpill-card-verification-input">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class="row">\r\n                        <div class="col-lg-6">\r\n                          <div class="mb-3">\r\n                            <label for="basicpill-expiration-input">Expiration Date</label>\r\n                            <input type="text" class="form-control" id="basicpill-expiration-input">\r\n                          </div>\r\n                        </div>\r\n\r\n                      </div>\r\n                    </form>\r\n                  </div>\r\n\r\n                  <ul class="list-inline wizard d-flex justify-content-end mb-0">\r\n                    <li class="previous list-inline-item" aria-disabled="true"><button class="btn btn-primary" cdkStepperPrevious>Previous</button></li>\r\n                    <li class="next list-inline-item" aria-disabled="false"><button class="btn btn-primary" cdkStepperNext>Next</button></li>\r\n                  </ul>\r\n                </section>}\r\n              </cdk-step>\r\n\r\n              <cdk-step [optional]="true">\r\n                <ng-template cdkStepLabel>\r\n                  <span class="number">4.</span>\r\n                  <span>Confirm Detail</span>\r\n                </ng-template>\r\n                @if(cdkStepper.selectedIndex === 3){\r\n                <section>\r\n                  <div class="row justify-content-center">\r\n                    <div class="col-lg-6">\r\n                      <div class="text-center">\r\n                        <div class="mb-4">\r\n                          <i class="mdi mdi-check-circle-outline text-success display-4"></i>\r\n                        </div>\r\n                        <div>\r\n                          <h5>Confirm Detail</h5>\r\n                          <p class="text-muted">If several languages coalesce, the grammar of the resulting</p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <ul class="list-inline wizard d-flex justify-content-end mb-0">\r\n                    <li class="previous list-inline-item" aria-disabled="true"><button class="btn btn-primary" cdkStepperPrevious>Previous</button></li>\r\n                    <li class="next list-inline-item" aria-disabled="false"><button class="btn btn-primary" cdkStepperNext>Finish</button></li>\r\n                  </ul>\r\n                </section>\r\n                }\r\n              </cdk-step>\r\n\r\n            </ng-stepper>\r\n          </div>\r\n\r\n        </div>\r\n        <!-- end card body -->\r\n      </div>\r\n      <!-- end card -->\r\n    </div>\r\n    <!-- end col -->\r\n  </div>\r\n  <!-- end row -->\r\n  <!-- Start Form Wizard vertical row-->\r\n  <div class="row">\r\n    <div class="col-lg-12">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title mb-4">Vertical Wizard</h4>\r\n\r\n          <ng-stepper #cdkStepper [linear]="true" id="vertical-example" class="vertical-wizard">\r\n\r\n            <cdk-step [optional]="false">\r\n              <ng-template cdkStepLabel>\r\n                <span class="number">1.</span>\r\n                <span>Seller Details</span>\r\n              </ng-template>\r\n              <section>\r\n                <form>\r\n                  <div class="row">\r\n                    <div class="col-lg-6">\r\n                      <div class="mb-3">\r\n                        <label for="basicpill-firstname-input">First name</label>\r\n                        <input type="text" class="form-control" id="basicpill-firstname-input" placeholder="Enter Your First Name">\r\n                      </div>\r\n                    </div>\r\n                    <div class="col-lg-6">\r\n                      <div class="mb-3">\r\n                        <label for="basicpill-lastname-input">Last name</label>\r\n                        <input type="text" class="form-control" id="basicpill-lastname-input" placeholder="Enter Your Last Name">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="row">\r\n                    <div class="col-lg-6">\r\n                      <div class="mb-3">\r\n                        <label for="basicpill-phoneno-input">Phone</label>\r\n                        <input type="text" class="form-control" id="basicpill-phoneno-input" placeholder="Enter Your Phone No.">\r\n                      </div>\r\n                    </div>\r\n                    <div class="col-lg-6">\r\n                      <div class="mb-3">\r\n                        <label for="basicpill-email-input">Email</label>\r\n                        <input type="email" class="form-control" id="basicpill-email-input" placeholder="Enter Your Email ID">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class="row">\r\n                    <div class="col-lg-12">\r\n                      <div class="mb-3">\r\n                        <label for="basicpill-address-input">Address</label>\r\n                        <textarea id="basicpill-address-input" class="form-control" rows="2" placeholder="Enter Your Address"></textarea>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n                <ul class="list-inline wizard d-flex justify-content-end mb-0">\r\n                  <li class="previous list-inline-item" aria-disabled="true"><button class="btn btn-primary" cdkStepperPrevious>Previous</button></li>\r\n                  <li class="next list-inline-item" aria-disabled="false"><button class="btn btn-primary" cdkStepperNext>Next</button></li>\r\n                </ul>\r\n              </section>\r\n            </cdk-step>\r\n\r\n            <cdk-step [optional]="true">\r\n              <ng-template cdkStepLabel>\r\n                <span class="number">2.</span>\r\n                <span>Company Document</span>\r\n              </ng-template>\r\n              <section>\r\n                <form>\r\n                  <div class="row">\r\n                    <div class="col-lg-6">\r\n                      <div class="mb-3">\r\n                        <label for="basicpill-pancard-input">PAN Card</label>\r\n                        <input type="text" class="form-control" id="basicpill-pancard-input">\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="col-lg-6">\r\n                      <div class="mb-3">\r\n                        <label for="basicpill-vatno-input">VAT/TIN No.</label>\r\n                        <input type="text" class="form-control" id="basicpill-vatno-input">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class="row">\r\n                    <div class="col-lg-6">\r\n                      <div class="mb-3">\r\n                        <label for="basicpill-cstno-input">CST No.</label>\r\n                        <input type="text" class="form-control" id="basicpill-cstno-input">\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="col-lg-6">\r\n                      <div class="mb-3">\r\n                        <label for="basicpill-servicetax-input">Service Tax No.</label>\r\n                        <input type="text" class="form-control" id="basicpill-servicetax-input">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class="row">\r\n                    <div class="col-lg-6">\r\n                      <div class="mb-3">\r\n                        <label for="basicpill-companyuin-input">Company UIN</label>\r\n                        <input type="text" class="form-control" id="basicpill-companyuin-input">\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="col-lg-6">\r\n                      <div class="mb-3">\r\n                        <label for="basicpill-declaration-input">Declaration</label>\r\n                        <input type="text" class="form-control" id="basicpill-declaration-input">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n\r\n                <ul class="list-inline wizard d-flex justify-content-end mb-0">\r\n                  <li class="previous list-inline-item" aria-disabled="true"><button class="btn btn-primary" cdkStepperPrevious>Previous</button></li>\r\n                  <li class="next list-inline-item" aria-disabled="false"><button class="btn btn-primary" cdkStepperNext>Next</button></li>\r\n                </ul>\r\n              </section>\r\n            </cdk-step>\r\n\r\n            <cdk-step [optional]="true">\r\n              <ng-template cdkStepLabel>\r\n                <span class="number">3.</span>\r\n                <span>Bank Details</span>\r\n              </ng-template>\r\n              <section>\r\n                <div>\r\n                  <form>\r\n                    <div class="row">\r\n                      <div class="col-lg-6">\r\n                        <div class="mb-3">\r\n                          <label for="basicpill-namecard-input">Name on Card</label>\r\n                          <input type="text" class="form-control" id="basicpill-namecard-input">\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="col-lg-6">\r\n                        <div class="mb-3">\r\n                          <label>Credit Card Type</label>\r\n                          <select class="form-select">\r\n                            <option selected>Select Card Type</option>\r\n                            <option value="AE">American Express</option>\r\n                            <option value="VI">Visa</option>\r\n                            <option value="MC">MasterCard</option>\r\n                            <option value="DI">Discover</option>\r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class="row">\r\n                      <div class="col-lg-6">\r\n                        <div class="mb-3">\r\n                          <label for="basicpill-cardno-input">Credit Card Number</label>\r\n                          <input type="text" class="form-control" id="basicpill-cardno-input">\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="col-lg-6">\r\n                        <div class="mb-3">\r\n                          <label for="basicpill-card-verification-input">Card Verification Number</label>\r\n                          <input type="text" class="form-control" id="basicpill-card-verification-input">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class="row">\r\n                      <div class="col-lg-6">\r\n                        <div class="mb-3">\r\n                          <label for="basicpill-expiration-input">Expiration Date</label>\r\n                          <input type="text" class="form-control" id="basicpill-expiration-input">\r\n                        </div>\r\n                      </div>\r\n\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n\r\n                <ul class="list-inline wizard d-flex justify-content-end mb-0">\r\n                  <li class="previous list-inline-item" aria-disabled="true"><button class="btn btn-primary" cdkStepperPrevious>Previous</button></li>\r\n                  <li class="next list-inline-item" aria-disabled="false"><button class="btn btn-primary" cdkStepperNext>Next</button></li>\r\n                </ul>\r\n              </section>\r\n            </cdk-step>\r\n\r\n            <cdk-step [optional]="true">\r\n              <ng-template cdkStepLabel>\r\n                <span class="number">4.</span>\r\n                <span>Confirm Detail</span>\r\n              </ng-template>\r\n              <section>\r\n                <div class="row justify-content-center">\r\n                  <div class="col-lg-6">\r\n                    <div class="text-center">\r\n                      <div class="mb-4">\r\n                        <i class="mdi mdi-check-circle-outline text-success display-4"></i>\r\n                      </div>\r\n                      <div>\r\n                        <h5>Confirm Detail</h5>\r\n                        <p class="text-muted">If several languages coalesce, the grammar of the resulting</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <ul class="list-inline wizard d-flex justify-content-end mb-0">\r\n                  <li class="previous list-inline-item" aria-disabled="true"><button class="btn btn-primary" cdkStepperPrevious>Previous</button></li>\r\n                  <li class="next list-inline-item" aria-disabled="false"><button class="btn btn-primary" cdkStepperNext>Finish</button></li>\r\n                </ul>\r\n              </section>\r\n            </cdk-step>\r\n\r\n          </ng-stepper>\r\n        </div>\r\n      </div>\r\n      <!-- end card -->\r\n    </div>\r\n    <!-- end col -->\r\n  </div>\r\n  <!-- end row -->\r\n</div>' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WizardComponent, { className: "WizardComponent", filePath: "src/app/pages/form/wizard/wizard.component.ts", lineNumber: 17 });
})();

// node_modules/ngx-mask/fesm2022/ngx-mask.mjs
var MaskExpression;
(function(MaskExpression2) {
  MaskExpression2["SEPARATOR"] = "separator";
  MaskExpression2["PERCENT"] = "percent";
  MaskExpression2["IP"] = "IP";
  MaskExpression2["CPF_CNPJ"] = "CPF_CNPJ";
  MaskExpression2["MONTH"] = "M";
  MaskExpression2["MONTHS"] = "M0";
  MaskExpression2["MINUTE"] = "m";
  MaskExpression2["HOUR"] = "h";
  MaskExpression2["HOURS"] = "H";
  MaskExpression2["MINUTES"] = "m0";
  MaskExpression2["HOURS_HOUR"] = "Hh";
  MaskExpression2["SECONDS"] = "s0";
  MaskExpression2["HOURS_MINUTES_SECONDS"] = "Hh:m0:s0";
  MaskExpression2["EMAIL_MASK"] = "A*@A*.A*";
  MaskExpression2["HOURS_MINUTES"] = "Hh:m0";
  MaskExpression2["MINUTES_SECONDS"] = "m0:s0";
  MaskExpression2["DAYS_MONTHS_YEARS"] = "d0/M0/0000";
  MaskExpression2["DAYS_MONTHS"] = "d0/M0";
  MaskExpression2["DAYS"] = "d0";
  MaskExpression2["DAY"] = "d";
  MaskExpression2["SECOND"] = "s";
  MaskExpression2["LETTER_S"] = "S";
  MaskExpression2["DOT"] = ".";
  MaskExpression2["COMMA"] = ",";
  MaskExpression2["CURLY_BRACKETS_LEFT"] = "{";
  MaskExpression2["CURLY_BRACKETS_RIGHT"] = "}";
  MaskExpression2["MINUS"] = "-";
  MaskExpression2["OR"] = "||";
  MaskExpression2["HASH"] = "#";
  MaskExpression2["EMPTY_STRING"] = "";
  MaskExpression2["SYMBOL_STAR"] = "*";
  MaskExpression2["SYMBOL_QUESTION"] = "?";
  MaskExpression2["SLASH"] = "/";
  MaskExpression2["WHITE_SPACE"] = " ";
  MaskExpression2["NUMBER_ZERO"] = "0";
  MaskExpression2["NUMBER_NINE"] = "9";
  MaskExpression2["BACKSPACE"] = "Backspace";
  MaskExpression2["DELETE"] = "Delete";
  MaskExpression2["ARROW_LEFT"] = "ArrowLeft";
  MaskExpression2["ARROW_UP"] = "ArrowUp";
  MaskExpression2["DOUBLE_ZERO"] = "00";
})(MaskExpression || (MaskExpression = {}));
var NGX_MASK_CONFIG = new InjectionToken("ngx-mask config");
var NEW_CONFIG = new InjectionToken("new ngx-mask config");
var INITIAL_CONFIG = new InjectionToken("initial ngx-mask config");
var initialConfig = {
  suffix: "",
  prefix: "",
  thousandSeparator: " ",
  decimalMarker: [".", ","],
  clearIfNotMatch: false,
  showMaskTyped: false,
  instantPrefix: false,
  placeHolderCharacter: "_",
  dropSpecialCharacters: true,
  hiddenInput: false,
  shownMaskExpression: "",
  separatorLimit: "",
  allowNegativeNumbers: false,
  validation: true,
  specialCharacters: ["-", "/", "(", ")", ".", ":", " ", "+", ",", "@", "[", "]", '"', "'"],
  leadZeroDateTime: false,
  apm: false,
  leadZero: false,
  keepCharacterPositions: false,
  triggerOnMaskChange: false,
  inputTransformFn: (value) => value,
  outputTransformFn: (value) => value,
  maskFilled: new EventEmitter(),
  patterns: {
    "0": {
      pattern: new RegExp("\\d")
    },
    "9": {
      pattern: new RegExp("\\d"),
      optional: true
    },
    X: {
      pattern: new RegExp("\\d"),
      symbol: "*"
    },
    A: {
      pattern: new RegExp("[a-zA-Z0-9]")
    },
    S: {
      pattern: new RegExp("[a-zA-Z]")
    },
    U: {
      pattern: new RegExp("[A-Z]")
    },
    L: {
      pattern: new RegExp("[a-z]")
    },
    d: {
      pattern: new RegExp("\\d")
    },
    m: {
      pattern: new RegExp("\\d")
    },
    M: {
      pattern: new RegExp("\\d")
    },
    H: {
      pattern: new RegExp("\\d")
    },
    h: {
      pattern: new RegExp("\\d")
    },
    s: {
      pattern: new RegExp("\\d")
    }
  }
};
var timeMasks = [MaskExpression.HOURS_MINUTES_SECONDS, MaskExpression.HOURS_MINUTES, MaskExpression.MINUTES_SECONDS];
var withoutValidation = [MaskExpression.PERCENT, MaskExpression.HOURS_HOUR, MaskExpression.SECONDS, MaskExpression.MINUTES, MaskExpression.SEPARATOR, MaskExpression.DAYS_MONTHS_YEARS, MaskExpression.DAYS_MONTHS, MaskExpression.DAYS, MaskExpression.MONTHS];
var NgxMaskApplierService = class _NgxMaskApplierService {
  _config = inject(NGX_MASK_CONFIG);
  dropSpecialCharacters = this._config.dropSpecialCharacters;
  hiddenInput = this._config.hiddenInput;
  clearIfNotMatch = this._config.clearIfNotMatch;
  specialCharacters = this._config.specialCharacters;
  patterns = this._config.patterns;
  prefix = this._config.prefix;
  suffix = this._config.suffix;
  thousandSeparator = this._config.thousandSeparator;
  decimalMarker = this._config.decimalMarker;
  customPattern;
  showMaskTyped = this._config.showMaskTyped;
  placeHolderCharacter = this._config.placeHolderCharacter;
  validation = this._config.validation;
  separatorLimit = this._config.separatorLimit;
  allowNegativeNumbers = this._config.allowNegativeNumbers;
  leadZeroDateTime = this._config.leadZeroDateTime;
  leadZero = this._config.leadZero;
  apm = this._config.apm;
  inputTransformFn = this._config.inputTransformFn;
  outputTransformFn = this._config.outputTransformFn;
  keepCharacterPositions = this._config.keepCharacterPositions;
  instantPrefix = this._config.instantPrefix;
  triggerOnMaskChange = this._config.triggerOnMaskChange;
  _shift = /* @__PURE__ */ new Set();
  plusOnePosition = false;
  maskExpression = "";
  actualValue = "";
  showKeepCharacterExp = "";
  shownMaskExpression = this._config.shownMaskExpression;
  deletedSpecialCharacter = false;
  ipError;
  cpfCnpjError;
  applyMask(inputValue, maskExpression, position = 0, justPasted = false, backspaced = false, cb = () => {
  }) {
    if (!maskExpression || typeof inputValue !== "string") {
      return MaskExpression.EMPTY_STRING;
    }
    let cursor = 0;
    let result = "";
    let multi = false;
    let backspaceShift = false;
    let shift = 1;
    let stepBack = false;
    let processedValue = inputValue;
    let processedPosition = position;
    const startsWithPrefix = processedValue.slice(0, this.prefix.length) === this.prefix;
    const pastedFullWithPrefix = justPasted && processedValue.length === this.prefix.length + maskExpression.length;
    const looksLikeFullPrefixPaste = processedValue === this.prefix + processedValue.slice(this.prefix.length);
    if (startsWithPrefix && (pastedFullWithPrefix || looksLikeFullPrefixPaste)) {
      processedValue = processedValue.slice(this.prefix.length);
    }
    if (!!this.suffix && processedValue.length > 0) {
      processedValue = this.checkAndRemoveSuffix(processedValue);
    }
    if (processedValue === "(" && this.prefix) {
      processedValue = "";
    }
    const inputArray = processedValue.toString().split(MaskExpression.EMPTY_STRING);
    if (this.allowNegativeNumbers && processedValue.slice(cursor, cursor + 1) === MaskExpression.MINUS) {
      result += processedValue.slice(cursor, cursor + 1);
    }
    if (maskExpression === MaskExpression.IP) {
      const valuesIP = processedValue.split(MaskExpression.DOT);
      this.ipError = this._validIP(valuesIP);
      maskExpression = "099.099.099.099";
    }
    const arr = [];
    for (let i = 0; i < processedValue.length; i++) {
      if (processedValue[i]?.match("\\d")) {
        arr.push(processedValue[i] ?? MaskExpression.EMPTY_STRING);
      }
    }
    if (maskExpression === MaskExpression.CPF_CNPJ) {
      this.cpfCnpjError = arr.length !== 11 && arr.length !== 14;
      if (arr.length > 11) {
        maskExpression = "00.000.000/0000-00";
      } else {
        maskExpression = "000.000.000-00";
      }
    }
    if (maskExpression.startsWith(MaskExpression.PERCENT)) {
      if (processedValue.match("[a-z]|[A-Z]") || // eslint-disable-next-line no-useless-escape
      processedValue.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/.]/) && !backspaced) {
        processedValue = this._stripToDecimal(processedValue);
        const precision = this.getPrecision(maskExpression);
        processedValue = this.checkInputPrecision(processedValue, precision, this.decimalMarker);
      }
      const decimalMarker = typeof this.decimalMarker === "string" ? this.decimalMarker : MaskExpression.DOT;
      if (processedValue.indexOf(decimalMarker) > 0 && !this.percentage(processedValue.substring(0, processedValue.indexOf(decimalMarker)))) {
        let base = processedValue.substring(0, processedValue.indexOf(decimalMarker) - 1);
        if (this.allowNegativeNumbers && processedValue.slice(cursor, cursor + 1) === MaskExpression.MINUS && !backspaced) {
          base = processedValue.substring(0, processedValue.indexOf(decimalMarker));
        }
        processedValue = `${base}${processedValue.substring(processedValue.indexOf(decimalMarker), processedValue.length)}`;
      }
      let value = "";
      this.allowNegativeNumbers && processedValue.slice(cursor, cursor + 1) === MaskExpression.MINUS ? value = `${MaskExpression.MINUS}${processedValue.slice(cursor + 1, cursor + processedValue.length)}` : value = processedValue;
      if (this.percentage(value)) {
        result = this._splitPercentZero(processedValue);
      } else {
        result = this._splitPercentZero(processedValue.substring(0, processedValue.length - 1));
      }
    } else if (maskExpression.startsWith(MaskExpression.SEPARATOR)) {
      if (processedValue.match("[w\u0430-\u044F\u0410-\u042F]") || processedValue.match("[\u0401\u0451\u0410-\u044F]") || processedValue.match("[a-z]|[A-Z]") || processedValue.match(/[-@#!$%\\^&*()_£¬'+|~=`{}\]:";<>.?/]/) || processedValue.match("[^A-Za-z0-9,]")) {
        processedValue = this._stripToDecimal(processedValue);
      }
      const precision = this.getPrecision(maskExpression);
      let decimalMarker = this.decimalMarker;
      if (Array.isArray(this.decimalMarker)) {
        if (this.actualValue.includes(this.decimalMarker[0]) || this.actualValue.includes(this.decimalMarker[1])) {
          decimalMarker = this.actualValue.includes(this.decimalMarker[0]) ? this.decimalMarker[0] : this.decimalMarker[1];
        } else {
          decimalMarker = this.decimalMarker.find((dm) => dm !== this.thousandSeparator);
        }
      }
      if (backspaced) {
        const {
          decimalMarkerIndex,
          nonZeroIndex
        } = this._findFirstNonZeroAndDecimalIndex(processedValue, decimalMarker);
        const zeroIndexMinus = processedValue[0] === MaskExpression.MINUS;
        const zeroIndexNumberZero = processedValue[0] === MaskExpression.NUMBER_ZERO;
        const zeroIndexDecimalMarker = processedValue[0] === decimalMarker;
        const firstIndexDecimalMarker = processedValue[1] === decimalMarker;
        if (zeroIndexDecimalMarker && !nonZeroIndex || zeroIndexMinus && firstIndexDecimalMarker && !nonZeroIndex || zeroIndexNumberZero && !decimalMarkerIndex && !nonZeroIndex) {
          processedValue = MaskExpression.NUMBER_ZERO;
        }
        if (decimalMarkerIndex && nonZeroIndex && zeroIndexMinus && processedPosition === 1) {
          if (decimalMarkerIndex < nonZeroIndex || decimalMarkerIndex > nonZeroIndex) {
            processedValue = MaskExpression.MINUS + processedValue.slice(nonZeroIndex);
          }
        }
        if (!decimalMarkerIndex && nonZeroIndex && processedValue.length > nonZeroIndex) {
          processedValue = zeroIndexMinus ? MaskExpression.MINUS + processedValue.slice(nonZeroIndex) : processedValue.slice(nonZeroIndex);
        }
        if (decimalMarkerIndex && nonZeroIndex && processedPosition === 0) {
          if (decimalMarkerIndex < nonZeroIndex) {
            processedValue = processedValue.slice(decimalMarkerIndex - 1);
          }
          if (decimalMarkerIndex > nonZeroIndex) {
            processedValue = processedValue.slice(nonZeroIndex);
          }
        }
      }
      if (precision === 0) {
        processedValue = this.allowNegativeNumbers ? processedValue.length > 2 && processedValue[0] === MaskExpression.MINUS && processedValue[1] === MaskExpression.NUMBER_ZERO && processedValue[2] !== this.thousandSeparator && processedValue[2] !== MaskExpression.COMMA && processedValue[2] !== MaskExpression.DOT ? "-" + processedValue.slice(2, processedValue.length) : processedValue[0] === MaskExpression.NUMBER_ZERO && processedValue.length > 1 && processedValue[1] !== this.thousandSeparator && processedValue[1] !== MaskExpression.COMMA && processedValue[1] !== MaskExpression.DOT ? processedValue.slice(1, processedValue.length) : processedValue : processedValue.length > 1 && processedValue[0] === MaskExpression.NUMBER_ZERO && processedValue[1] !== this.thousandSeparator && processedValue[1] !== MaskExpression.COMMA && processedValue[1] !== MaskExpression.DOT ? processedValue.slice(1, processedValue.length) : processedValue;
      } else {
        if (processedValue[0] === decimalMarker && processedValue.length > 1 && !backspaced) {
          processedValue = MaskExpression.NUMBER_ZERO + processedValue.slice(0, processedValue.length + 1);
          this.plusOnePosition = true;
        }
        if (processedValue[0] === MaskExpression.NUMBER_ZERO && processedValue[1] !== decimalMarker && processedValue[1] !== this.thousandSeparator && !backspaced) {
          processedValue = processedValue.length > 1 ? processedValue.slice(0, 1) + decimalMarker + processedValue.slice(1, processedValue.length + 1) : processedValue;
          this.plusOnePosition = true;
        }
        if (this.allowNegativeNumbers && !backspaced && processedValue[0] === MaskExpression.MINUS && (processedValue[1] === decimalMarker || processedValue[1] === MaskExpression.NUMBER_ZERO)) {
          processedValue = processedValue[1] === decimalMarker && processedValue.length > 2 ? processedValue.slice(0, 1) + MaskExpression.NUMBER_ZERO + processedValue.slice(1, processedValue.length) : processedValue[1] === MaskExpression.NUMBER_ZERO && processedValue.length > 2 && processedValue[2] !== decimalMarker ? processedValue.slice(0, 2) + decimalMarker + processedValue.slice(2, processedValue.length) : processedValue;
          this.plusOnePosition = true;
        }
      }
      const thousandSeparatorCharEscaped = this._charToRegExpExpression(this.thousandSeparator);
      let invalidChars = '@#!$%^&*()_+|~=`{}\\[\\]:\\s,\\.";<>?\\/'.replace(thousandSeparatorCharEscaped, "");
      if (Array.isArray(this.decimalMarker)) {
        for (const marker of this.decimalMarker) {
          invalidChars = invalidChars.replace(this._charToRegExpExpression(marker), MaskExpression.EMPTY_STRING);
        }
      } else {
        invalidChars = invalidChars.replace(this._charToRegExpExpression(this.decimalMarker), "");
      }
      const invalidCharRegexp = new RegExp("[" + invalidChars + "]");
      if (processedValue.match(invalidCharRegexp)) {
        processedValue = processedValue.substring(0, processedValue.length - 1);
      }
      processedValue = this.checkInputPrecision(processedValue, precision, this.decimalMarker);
      const strForSep = processedValue.replace(new RegExp(thousandSeparatorCharEscaped, "g"), "");
      result = this._formatWithSeparators(strForSep, this.thousandSeparator, this.decimalMarker, precision);
      const commaShift = result.indexOf(MaskExpression.COMMA) - processedValue.indexOf(MaskExpression.COMMA);
      const shiftStep = result.length - processedValue.length;
      const backspacedDecimalMarkerWithSeparatorLimit = backspaced && result.length < inputValue.length - this.suffix.length && this.separatorLimit;
      if ((result[processedPosition - 1] === this.thousandSeparator || result[processedPosition - this.prefix.length]) && this.prefix && backspaced) {
        processedPosition = processedPosition - 1;
      } else if (shiftStep > 0 && result[processedPosition] !== this.thousandSeparator || backspacedDecimalMarkerWithSeparatorLimit) {
        backspaceShift = true;
        let _shift = 0;
        do {
          this._shift.add(processedPosition + _shift);
          _shift++;
        } while (_shift < shiftStep);
      } else if (result[processedPosition - 1] === this.thousandSeparator || shiftStep === -4 || shiftStep === -3 || result[processedPosition] === this.thousandSeparator) {
        this._shift.clear();
        this._shift.add(processedPosition - 1);
      } else if (commaShift !== 0 && processedPosition > 0 && !(result.indexOf(MaskExpression.COMMA) >= processedPosition && processedPosition > 3) || !(result.indexOf(MaskExpression.DOT) >= processedPosition && processedPosition > 3) && shiftStep <= 0) {
        this._shift.clear();
        backspaceShift = true;
        shift = shiftStep;
        processedPosition += shiftStep;
        this._shift.add(processedPosition);
      } else {
        this._shift.clear();
      }
    } else {
      for (let i = 0, inputSymbol = inputArray[0]; i < inputArray.length; i++, inputSymbol = inputArray[i] ?? MaskExpression.EMPTY_STRING) {
        if (cursor === maskExpression.length) {
          break;
        }
        const symbolStarInPattern = MaskExpression.SYMBOL_STAR in this.patterns;
        if (this._checkSymbolMask(inputSymbol, maskExpression[cursor] ?? MaskExpression.EMPTY_STRING) && maskExpression[cursor + 1] === MaskExpression.SYMBOL_QUESTION) {
          result += inputSymbol;
          cursor += 2;
        } else if (maskExpression[cursor + 1] === MaskExpression.SYMBOL_STAR && multi && this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2] ?? MaskExpression.EMPTY_STRING)) {
          result += inputSymbol;
          cursor += 3;
          multi = false;
        } else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor] ?? MaskExpression.EMPTY_STRING) && maskExpression[cursor + 1] === MaskExpression.SYMBOL_STAR && !symbolStarInPattern) {
          result += inputSymbol;
          multi = true;
        } else if (maskExpression[cursor + 1] === MaskExpression.SYMBOL_QUESTION && this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2] ?? MaskExpression.EMPTY_STRING)) {
          result += inputSymbol;
          cursor += 3;
        } else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor] ?? MaskExpression.EMPTY_STRING)) {
          if (maskExpression[cursor] === MaskExpression.HOURS) {
            if (this.apm ? Number(inputSymbol) > 9 : Number(inputSymbol) > 2) {
              processedPosition = !this.leadZeroDateTime ? processedPosition + 1 : processedPosition;
              cursor += 1;
              this._shiftStep(cursor);
              i--;
              if (this.leadZeroDateTime) {
                result += "0";
              }
              continue;
            }
          }
          if (maskExpression[cursor] === MaskExpression.HOUR) {
            if (this.apm ? result.length === 1 && Number(result) > 1 || result === "1" && Number(inputSymbol) > 2 || processedValue.slice(cursor - 1, cursor).length === 1 && Number(processedValue.slice(cursor - 1, cursor)) > 2 || processedValue.slice(cursor - 1, cursor) === "1" && Number(inputSymbol) > 2 : result === "2" && Number(inputSymbol) > 3 || (result.slice(cursor - 2, cursor) === "2" || result.slice(cursor - 3, cursor) === "2" || result.slice(cursor - 4, cursor) === "2" || result.slice(cursor - 1, cursor) === "2") && Number(inputSymbol) > 3 && cursor > 10) {
              processedPosition = processedPosition + 1;
              cursor += 1;
              i--;
              continue;
            }
          }
          if (maskExpression[cursor] === MaskExpression.MINUTE || maskExpression[cursor] === MaskExpression.SECOND) {
            if (Number(inputSymbol) > 5) {
              processedPosition = !this.leadZeroDateTime ? processedPosition + 1 : processedPosition;
              cursor += 1;
              this._shiftStep(cursor);
              i--;
              if (this.leadZeroDateTime) {
                result += "0";
              }
              continue;
            }
          }
          const daysCount = 31;
          const inputValueCursor = processedValue[cursor];
          const inputValueCursorPlusOne = processedValue[cursor + 1];
          const inputValueCursorPlusTwo = processedValue[cursor + 2];
          const inputValueCursorMinusOne = processedValue[cursor - 1];
          const inputValueCursorMinusTwo = processedValue[cursor - 2];
          const inputValueSliceMinusThreeMinusOne = processedValue.slice(cursor - 3, cursor - 1);
          const inputValueSliceMinusOnePlusOne = processedValue.slice(cursor - 1, cursor + 1);
          const inputValueSliceCursorPlusTwo = processedValue.slice(cursor, cursor + 2);
          const inputValueSliceMinusTwoCursor = processedValue.slice(cursor - 2, cursor);
          if (maskExpression[cursor] === MaskExpression.DAY) {
            const maskStartWithMonth = maskExpression.slice(0, 2) === MaskExpression.MONTHS;
            const startWithMonthInput = maskExpression.slice(0, 2) === MaskExpression.MONTHS && this.specialCharacters.includes(inputValueCursorMinusTwo);
            if (Number(inputSymbol) > 3 && this.leadZeroDateTime || !maskStartWithMonth && (Number(inputValueSliceCursorPlusTwo) > daysCount || Number(inputValueSliceMinusOnePlusOne) > daysCount || this.specialCharacters.includes(inputValueCursorPlusOne)) || (startWithMonthInput ? Number(inputValueSliceMinusOnePlusOne) > daysCount || !this.specialCharacters.includes(inputValueCursor) && this.specialCharacters.includes(inputValueCursorPlusTwo) || this.specialCharacters.includes(inputValueCursor) : Number(inputValueSliceCursorPlusTwo) > daysCount || this.specialCharacters.includes(inputValueCursorPlusOne) && !backspaced)) {
              processedPosition = !this.leadZeroDateTime ? processedPosition + 1 : processedPosition;
              cursor += 1;
              this._shiftStep(cursor);
              i--;
              if (this.leadZeroDateTime) {
                result += "0";
              }
              continue;
            }
          }
          if (maskExpression[cursor] === MaskExpression.MONTH) {
            const monthsCount = 12;
            const withoutDays = cursor === 0 && (Number(inputSymbol) > 2 || Number(inputValueSliceCursorPlusTwo) > monthsCount || this.specialCharacters.includes(inputValueCursorPlusOne) && !backspaced);
            const specialChart = maskExpression.slice(cursor + 2, cursor + 3);
            const day1monthInput = inputValueSliceMinusThreeMinusOne.includes(specialChart) && maskExpression.includes("d0") && (this.specialCharacters.includes(inputValueCursorMinusTwo) && Number(inputValueSliceMinusOnePlusOne) > monthsCount && !this.specialCharacters.includes(inputValueCursor) || this.specialCharacters.includes(inputValueCursor));
            const day2monthInput = Number(inputValueSliceMinusThreeMinusOne) <= daysCount && !this.specialCharacters.includes(inputValueSliceMinusThreeMinusOne) && this.specialCharacters.includes(inputValueCursorMinusOne) && (Number(inputValueSliceCursorPlusTwo) > monthsCount || this.specialCharacters.includes(inputValueCursorPlusOne));
            const day2monthInputDot = Number(inputValueSliceCursorPlusTwo) > monthsCount && cursor === 5 || this.specialCharacters.includes(inputValueCursorPlusOne) && cursor === 5;
            const day1monthPaste = Number(inputValueSliceMinusThreeMinusOne) > daysCount && !this.specialCharacters.includes(inputValueSliceMinusThreeMinusOne) && !this.specialCharacters.includes(inputValueSliceMinusTwoCursor) && Number(inputValueSliceMinusTwoCursor) > monthsCount && maskExpression.includes("d0");
            const day2monthPaste = Number(inputValueSliceMinusThreeMinusOne) <= daysCount && !this.specialCharacters.includes(inputValueSliceMinusThreeMinusOne) && !this.specialCharacters.includes(inputValueCursorMinusOne) && Number(inputValueSliceMinusOnePlusOne) > monthsCount;
            if (Number(inputSymbol) > 1 && this.leadZeroDateTime || withoutDays || day1monthInput || day2monthPaste || day1monthPaste || day2monthInput || day2monthInputDot && !this.leadZeroDateTime) {
              processedPosition = !this.leadZeroDateTime ? processedPosition + 1 : processedPosition;
              cursor += 1;
              this._shiftStep(cursor);
              i--;
              if (this.leadZeroDateTime) {
                result += "0";
              }
              continue;
            }
          }
          result += inputSymbol;
          cursor++;
        } else if (this.specialCharacters.includes(inputSymbol) && maskExpression[cursor] === inputSymbol) {
          result += inputSymbol;
          cursor++;
        } else if (this.specialCharacters.indexOf(maskExpression[cursor] ?? MaskExpression.EMPTY_STRING) !== -1) {
          result += maskExpression[cursor];
          cursor++;
          this._shiftStep(cursor);
          i--;
        } else if (maskExpression[cursor] === MaskExpression.NUMBER_NINE && this.showMaskTyped) {
          this._shiftStep(cursor);
        } else if (this.patterns[maskExpression[cursor] ?? MaskExpression.EMPTY_STRING] && this.patterns[maskExpression[cursor] ?? MaskExpression.EMPTY_STRING]?.optional) {
          if (!!inputArray[cursor] && maskExpression !== "099.099.099.099" && maskExpression !== "000.000.000-00" && maskExpression !== "00.000.000/0000-00" && !maskExpression.match(/^9+\.0+$/) && !this.patterns[maskExpression[cursor] ?? MaskExpression.EMPTY_STRING]?.optional) {
            result += inputArray[cursor];
          }
          if (maskExpression.includes(MaskExpression.NUMBER_NINE + MaskExpression.SYMBOL_STAR) && maskExpression.includes(MaskExpression.NUMBER_ZERO + MaskExpression.SYMBOL_STAR)) {
            cursor++;
          }
          cursor++;
          i--;
        } else if (this.maskExpression[cursor + 1] === MaskExpression.SYMBOL_STAR && this._findSpecialChar(this.maskExpression[cursor + 2] ?? MaskExpression.EMPTY_STRING) && this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2] && multi) {
          cursor += 3;
          result += inputSymbol;
        } else if (this.maskExpression[cursor + 1] === MaskExpression.SYMBOL_QUESTION && this._findSpecialChar(this.maskExpression[cursor + 2] ?? MaskExpression.EMPTY_STRING) && this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2] && multi) {
          cursor += 3;
          result += inputSymbol;
        } else if (this.showMaskTyped && this.specialCharacters.indexOf(inputSymbol) < 0 && inputSymbol !== this.placeHolderCharacter && this.placeHolderCharacter.length === 1) {
          stepBack = true;
        }
      }
    }
    if (result[processedPosition - 1] && result.length + 1 === maskExpression.length && this.specialCharacters.indexOf(maskExpression[maskExpression.length - 1] ?? MaskExpression.EMPTY_STRING) !== -1) {
      result += maskExpression[maskExpression.length - 1];
    }
    let newPosition = processedPosition + 1;
    while (this._shift.has(newPosition)) {
      shift++;
      newPosition++;
    }
    let actualShift = justPasted && !maskExpression.startsWith(MaskExpression.SEPARATOR) ? cursor : this._shift.has(processedPosition) ? shift : 0;
    if (stepBack) {
      actualShift--;
    }
    cb(actualShift, backspaceShift);
    if (shift < 0) {
      this._shift.clear();
    }
    let onlySpecial = false;
    if (backspaced) {
      onlySpecial = inputArray.every((char) => this.specialCharacters.includes(char));
    }
    let res = `${this.prefix}${onlySpecial ? MaskExpression.EMPTY_STRING : result}${this.showMaskTyped ? "" : this.suffix}`;
    if (result.length === 0) {
      res = this.instantPrefix ? `${this.prefix}${result}` : `${result}`;
    }
    const isSpecialCharacterMaskFirstSymbol = processedValue.length === 1 && this.specialCharacters.includes(maskExpression[0]) && processedValue !== maskExpression[0];
    if (!this._checkSymbolMask(processedValue, maskExpression[1]) && isSpecialCharacterMaskFirstSymbol) {
      return "";
    }
    if (result.includes(MaskExpression.MINUS) && this.prefix && this.allowNegativeNumbers) {
      if (backspaced && result === MaskExpression.MINUS) {
        return "";
      }
      res = `${MaskExpression.MINUS}${this.prefix}${result.split(MaskExpression.MINUS).join(MaskExpression.EMPTY_STRING)}${this.suffix}`;
    }
    return res;
  }
  _findDropSpecialChar(inputSymbol) {
    if (Array.isArray(this.dropSpecialCharacters)) {
      return this.dropSpecialCharacters.find((val) => val === inputSymbol);
    }
    return this._findSpecialChar(inputSymbol);
  }
  _findSpecialChar(inputSymbol) {
    return this.specialCharacters.find((val) => val === inputSymbol);
  }
  _checkSymbolMask(inputSymbol, maskSymbol) {
    this.patterns = this.customPattern ? this.customPattern : this.patterns;
    return (this.patterns[maskSymbol]?.pattern && this.patterns[maskSymbol]?.pattern.test(inputSymbol)) ?? false;
  }
  _formatWithSeparators = (str, thousandSeparatorChar, decimalChars, precision) => {
    let x = [];
    let decimalChar = "";
    if (Array.isArray(decimalChars)) {
      const regExp = new RegExp(decimalChars.map((v) => "[\\^$.|?*+()".indexOf(v) >= 0 ? `\\${v}` : v).join("|"));
      x = str.split(regExp);
      decimalChar = str.match(regExp)?.[0] ?? MaskExpression.EMPTY_STRING;
    } else {
      x = str.split(decimalChars);
      decimalChar = decimalChars;
    }
    const decimals = x.length > 1 ? `${decimalChar}${x[1]}` : MaskExpression.EMPTY_STRING;
    let res = x[0] ?? MaskExpression.EMPTY_STRING;
    const separatorLimit = this.separatorLimit.replace(/\s/g, MaskExpression.EMPTY_STRING);
    if (separatorLimit && +separatorLimit) {
      if (res[0] === MaskExpression.MINUS) {
        res = `-${res.slice(1, res.length).slice(0, separatorLimit.length)}`;
      } else {
        res = res.slice(0, separatorLimit.length);
      }
    }
    const rgx = /(\d+)(\d{3})/;
    while (thousandSeparatorChar && rgx.test(res)) {
      res = res.replace(rgx, "$1" + thousandSeparatorChar + "$2");
    }
    if (typeof precision === "undefined") {
      return res + decimals;
    } else if (precision === 0) {
      return res;
    }
    return res + decimals.substring(0, precision + 1);
  };
  percentage = (str) => {
    const sanitizedStr = str.replace(",", ".");
    const value = Number(this.allowNegativeNumbers && str.includes(MaskExpression.MINUS) ? sanitizedStr.slice(1, str.length) : sanitizedStr);
    return !isNaN(value) && value >= 0 && value <= 100;
  };
  getPrecision = (maskExpression) => {
    const x = maskExpression.split(MaskExpression.DOT);
    if (x.length > 1) {
      return Number(x[x.length - 1]);
    }
    return Infinity;
  };
  checkAndRemoveSuffix = (inputValue) => {
    for (let i = this.suffix?.length - 1; i >= 0; i--) {
      const substr = this.suffix.substring(i, this.suffix?.length);
      if (inputValue.includes(substr) && i !== this.suffix?.length - 1 && (i - 1 < 0 || !inputValue.includes(this.suffix.substring(i - 1, this.suffix?.length)))) {
        return inputValue.replace(substr, MaskExpression.EMPTY_STRING);
      }
    }
    return inputValue;
  };
  checkInputPrecision = (inputValue, precision, decimalMarker) => {
    let processedInputValue = inputValue;
    let processedDecimalMarker = decimalMarker;
    if (precision < Infinity) {
      if (Array.isArray(processedDecimalMarker)) {
        const marker = processedDecimalMarker.find((dm) => dm !== this.thousandSeparator);
        processedDecimalMarker = marker ? marker : processedDecimalMarker[0];
      }
      const precisionRegEx = new RegExp(this._charToRegExpExpression(processedDecimalMarker) + `\\d{${precision}}.*$`);
      const precisionMatch = processedInputValue.match(precisionRegEx);
      const precisionMatchLength = (precisionMatch && precisionMatch[0]?.length) ?? 0;
      if (precisionMatchLength - 1 > precision) {
        const diff = precisionMatchLength - 1 - precision;
        processedInputValue = processedInputValue.substring(0, processedInputValue.length - diff);
      }
      if (precision === 0 && this._compareOrIncludes(processedInputValue[processedInputValue.length - 1], processedDecimalMarker, this.thousandSeparator)) {
        processedInputValue = processedInputValue.substring(0, processedInputValue.length - 1);
      }
    }
    return processedInputValue;
  };
  _stripToDecimal(str) {
    return str.split(MaskExpression.EMPTY_STRING).filter((i, idx) => {
      const isDecimalMarker = typeof this.decimalMarker === "string" ? i === this.decimalMarker : (
        // TODO (inepipenko) use utility type
        this.decimalMarker.includes(i)
      );
      return i.match("^-?\\d") || i === this.thousandSeparator || isDecimalMarker || i === MaskExpression.MINUS && idx === 0 && this.allowNegativeNumbers;
    }).join(MaskExpression.EMPTY_STRING);
  }
  _charToRegExpExpression(char) {
    if (char) {
      const charsToEscape = "[\\^$.|?*+()";
      return char === " " ? "\\s" : charsToEscape.indexOf(char) >= 0 ? `\\${char}` : char;
    }
    return char;
  }
  _shiftStep(cursor) {
    this._shift.add(cursor + this.prefix.length || 0);
  }
  _compareOrIncludes(value, comparedValue, excludedValue) {
    return Array.isArray(comparedValue) ? comparedValue.filter((v) => v !== excludedValue).includes(value) : value === comparedValue;
  }
  _validIP(valuesIP) {
    return !(valuesIP.length === 4 && !valuesIP.some((value, index) => {
      if (valuesIP.length !== index + 1) {
        return value === MaskExpression.EMPTY_STRING || Number(value) > 255;
      }
      return value === MaskExpression.EMPTY_STRING || Number(value.substring(0, 3)) > 255;
    }));
  }
  _splitPercentZero(value) {
    if (value === MaskExpression.MINUS && this.allowNegativeNumbers) {
      return value;
    }
    const decimalIndex = typeof this.decimalMarker === "string" ? value.indexOf(this.decimalMarker) : value.indexOf(MaskExpression.DOT);
    const emptyOrMinus = this.allowNegativeNumbers && value.includes(MaskExpression.MINUS) ? "-" : "";
    if (decimalIndex === -1) {
      const parsedValue = parseInt(emptyOrMinus ? value.slice(1, value.length) : value, 10);
      return isNaN(parsedValue) ? MaskExpression.EMPTY_STRING : `${emptyOrMinus}${parsedValue}`;
    } else {
      const integerPart = parseInt(value.replace("-", "").substring(0, decimalIndex), 10);
      const decimalPart = value.substring(decimalIndex + 1);
      const integerString = isNaN(integerPart) ? "" : integerPart.toString();
      const decimal = typeof this.decimalMarker === "string" ? this.decimalMarker : MaskExpression.DOT;
      return integerString === MaskExpression.EMPTY_STRING ? MaskExpression.EMPTY_STRING : `${emptyOrMinus}${integerString}${decimal}${decimalPart}`;
    }
  }
  _findFirstNonZeroAndDecimalIndex(inputString, decimalMarker) {
    let decimalMarkerIndex = null;
    let nonZeroIndex = null;
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i];
      if (char === decimalMarker && decimalMarkerIndex === null) {
        decimalMarkerIndex = i;
      }
      if (char && char >= "1" && char <= "9" && nonZeroIndex === null) {
        nonZeroIndex = i;
      }
      if (decimalMarkerIndex !== null && nonZeroIndex !== null) {
        break;
      }
    }
    return {
      decimalMarkerIndex,
      nonZeroIndex
    };
  }
  static \u0275fac = function NgxMaskApplierService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgxMaskApplierService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NgxMaskApplierService,
    factory: _NgxMaskApplierService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMaskApplierService, [{
    type: Injectable
  }], null, null);
})();
var NgxMaskService = class _NgxMaskService extends NgxMaskApplierService {
  isNumberValue = false;
  maskIsShown = "";
  selStart = null;
  selEnd = null;
  maskChanged = false;
  maskExpressionArray = [];
  previousValue = "";
  currentValue = "";
  /**
   * Whether we are currently in writeValue function, in this case when applying the mask we don't want to trigger onChange function,
   * since writeValue should be a one way only process of writing the DOM value based on the Angular model value.
   */
  writingValue = false;
  isInitialized = false;
  _emitValue = false;
  _start;
  _end;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange = (_) => {
  };
  _elementRef = inject(ElementRef, {
    optional: true
  });
  document = inject(DOCUMENT);
  _config = inject(NGX_MASK_CONFIG);
  _renderer = inject(Renderer2, {
    optional: true
  });
  /**
   * Applies the mask to the input value.
   * @param inputValue The input value to be masked.
   * @param maskExpression The mask expression to apply.
   * @param position The position in the input value.
   * @param justPasted Whether the value was just pasted.
   * @param backspaced Whether the value was backspaced.
   * @param cb Callback function.
   * @returns The masked value.
   */
  applyMask(inputValue, maskExpression, position = 0, justPasted = false, backspaced = false, cb = () => {
  }) {
    if (!maskExpression) {
      return inputValue !== this.actualValue ? this.actualValue : inputValue;
    }
    this.maskIsShown = this.showMaskTyped ? this.showMaskInInput() : MaskExpression.EMPTY_STRING;
    if (this.maskExpression === MaskExpression.IP && this.showMaskTyped) {
      this.maskIsShown = this.showMaskInInput(inputValue || MaskExpression.HASH);
    }
    if (this.maskExpression === MaskExpression.CPF_CNPJ && this.showMaskTyped) {
      this.maskIsShown = this.showMaskInInput(inputValue || MaskExpression.HASH);
    }
    if (!inputValue && this.showMaskTyped) {
      this.formControlResult(this.prefix);
      return `${this.prefix}${this.maskIsShown}${this.suffix}`;
    }
    const getSymbol = !!inputValue && typeof this.selStart === "number" ? inputValue[this.selStart] ?? MaskExpression.EMPTY_STRING : MaskExpression.EMPTY_STRING;
    let newInputValue = "";
    let newPosition = position;
    if ((this.hiddenInput || inputValue && inputValue.indexOf(MaskExpression.SYMBOL_STAR) >= 0) && !this.writingValue) {
      let actualResult = inputValue && inputValue.length === 1 ? inputValue.split(MaskExpression.EMPTY_STRING) : this.actualValue.split(MaskExpression.EMPTY_STRING);
      if (backspaced) {
        actualResult = actualResult.slice(0, position).concat(actualResult.slice(position + 1));
      }
      if (this.showMaskTyped) {
        inputValue = this.removeMask(inputValue);
        actualResult = this.removeMask(actualResult.join("")).split(MaskExpression.EMPTY_STRING);
      }
      if (typeof this.selStart === "object" && typeof this.selEnd === "object") {
        this.selStart = Number(this.selStart);
        this.selEnd = Number(this.selEnd);
      } else {
        if (inputValue !== MaskExpression.EMPTY_STRING && actualResult.length) {
          if (typeof this.selStart === "number" && typeof this.selEnd === "number") {
            if (inputValue.length > actualResult.length) {
              actualResult.splice(this.selStart, 0, getSymbol);
            } else if (inputValue.length < actualResult.length) {
              if (actualResult.length - inputValue.length === 1) {
                if (backspaced) {
                  actualResult.splice(this.selStart - 1, 1);
                } else {
                  actualResult.splice(inputValue.length - 1, 1);
                }
              } else {
                actualResult.splice(this.selStart, this.selEnd - this.selStart);
              }
            }
          }
        } else {
          actualResult = [];
        }
      }
      if (this.showMaskTyped && !this.hiddenInput) {
        newInputValue = this.removeMask(inputValue);
      }
      if (this.actualValue.length) {
        if (actualResult.length < inputValue.length) {
          newInputValue = this.shiftTypedSymbols(actualResult.join(MaskExpression.EMPTY_STRING));
        } else if (actualResult.length === inputValue.length) {
          newInputValue = actualResult.join(MaskExpression.EMPTY_STRING);
        } else {
          newInputValue = inputValue;
        }
      } else {
        newInputValue = inputValue;
      }
    }
    if (justPasted && (this.hiddenInput || !this.hiddenInput)) {
      newInputValue = inputValue;
    }
    if (backspaced && this.specialCharacters.indexOf(this.maskExpression[newPosition] ?? MaskExpression.EMPTY_STRING) !== -1 && this.showMaskTyped && !this.prefix) {
      newInputValue = this.currentValue;
    }
    if (this.deletedSpecialCharacter && newPosition) {
      if (this.specialCharacters.includes(this.actualValue.slice(newPosition, newPosition + 1))) {
        newPosition = newPosition + 1;
      } else if (maskExpression.slice(newPosition - 1, newPosition + 1) !== MaskExpression.MONTHS) {
        newPosition = newPosition - 2;
      }
      this.deletedSpecialCharacter = false;
    }
    if (this.showMaskTyped && this.placeHolderCharacter.length === 1 && !this.leadZeroDateTime) {
      newInputValue = this.removeMask(newInputValue);
    }
    if (this.maskChanged) {
      newInputValue = inputValue;
    } else {
      newInputValue = Boolean(newInputValue) && newInputValue.length ? newInputValue : inputValue;
    }
    if (this.showMaskTyped && this.keepCharacterPositions && this.actualValue && !justPasted && !this.writingValue) {
      const value = this.dropSpecialCharacters ? this.removeMask(this.actualValue) : this.actualValue;
      this.formControlResult(value);
      return this.actualValue ? this.actualValue : `${this.prefix}${this.maskIsShown}${this.suffix}`;
    }
    const result = super.applyMask(newInputValue, maskExpression, newPosition, justPasted, backspaced, cb);
    this.actualValue = this.getActualValue(result);
    if (this.thousandSeparator === MaskExpression.DOT && this.decimalMarker === MaskExpression.DOT) {
      this.decimalMarker = MaskExpression.COMMA;
    }
    if (this.maskExpression.startsWith(MaskExpression.SEPARATOR) && this.dropSpecialCharacters === true) {
      this.specialCharacters = this.specialCharacters.filter(
        (item) => !this._compareOrIncludes(item, this.decimalMarker, this.thousandSeparator)
        //item !== this.decimalMarker, // !
      );
    }
    if (result || result === "") {
      this.previousValue = this.currentValue;
      this.currentValue = result;
      this._emitValue = this.previousValue !== this.currentValue || this.previousValue === this.currentValue && justPasted;
    }
    this._emitValue ? this.formControlResult(result) : "";
    if (!this.showMaskTyped || this.showMaskTyped && this.hiddenInput) {
      if (this.hiddenInput) {
        return `${this.hideInput(result, this.maskExpression)}${this.maskIsShown.slice(result.length)}`;
      }
      return result;
    }
    const resLen = result.length;
    const prefNmask = `${this.prefix}${this.maskIsShown}${this.suffix}`;
    if (this.maskExpression.includes(MaskExpression.HOURS)) {
      const countSkipedSymbol = this._numberSkipedSymbols(result);
      return `${result}${prefNmask.slice(resLen + countSkipedSymbol)}`;
    } else if (this.maskExpression === MaskExpression.IP || this.maskExpression === MaskExpression.CPF_CNPJ) {
      return `${result}${prefNmask}`;
    }
    return `${result}${prefNmask.slice(resLen)}`;
  }
  // get the number of characters that were shifted
  _numberSkipedSymbols(value) {
    const regex = /(^|\D)(\d\D)/g;
    let match = regex.exec(value);
    let countSkipedSymbol = 0;
    while (match != null) {
      countSkipedSymbol += 1;
      match = regex.exec(value);
    }
    return countSkipedSymbol;
  }
  applyValueChanges(position, justPasted, backspaced, cb = () => {
  }) {
    const formElement = this._elementRef?.nativeElement;
    if (!formElement) {
      return;
    }
    formElement.value = this.applyMask(formElement.value, this.maskExpression, position, justPasted, backspaced, cb);
    if (formElement === this._getActiveElement()) {
      return;
    }
    this.clearIfNotMatchFn();
  }
  hideInput(inputValue, maskExpression) {
    return inputValue.split(MaskExpression.EMPTY_STRING).map((curr, index) => {
      if (this.patterns && this.patterns[maskExpression[index] ?? MaskExpression.EMPTY_STRING] && this.patterns[maskExpression[index] ?? MaskExpression.EMPTY_STRING]?.symbol) {
        return this.patterns[maskExpression[index] ?? MaskExpression.EMPTY_STRING]?.symbol;
      }
      return curr;
    }).join(MaskExpression.EMPTY_STRING);
  }
  // this function is not necessary, it checks result against maskExpression
  getActualValue(res) {
    const compare = res.split(MaskExpression.EMPTY_STRING).filter((symbol, i) => {
      const maskChar = this.maskExpression[i] ?? MaskExpression.EMPTY_STRING;
      return this._checkSymbolMask(symbol, maskChar) || this.specialCharacters.includes(maskChar) && symbol === maskChar;
    });
    if (compare.join(MaskExpression.EMPTY_STRING) === res) {
      return compare.join(MaskExpression.EMPTY_STRING);
    }
    return res;
  }
  shiftTypedSymbols(inputValue) {
    let symbolToReplace = "";
    const newInputValue = inputValue && inputValue.split(MaskExpression.EMPTY_STRING).map((currSymbol, index) => {
      if (this.specialCharacters.includes(inputValue[index + 1] ?? MaskExpression.EMPTY_STRING) && inputValue[index + 1] !== this.maskExpression[index + 1]) {
        symbolToReplace = currSymbol;
        return inputValue[index + 1];
      }
      if (symbolToReplace.length) {
        const replaceSymbol = symbolToReplace;
        symbolToReplace = MaskExpression.EMPTY_STRING;
        return replaceSymbol;
      }
      return currSymbol;
    }) || [];
    return newInputValue.join(MaskExpression.EMPTY_STRING);
  }
  /**
   * Convert number value to string
   * 3.1415 -> '3.1415'
   * 1e-7 -> '0.0000001'
   */
  numberToString(value) {
    if (!value && value !== 0 || this.maskExpression.startsWith(MaskExpression.SEPARATOR) && (this.leadZero || !this.dropSpecialCharacters) || this.maskExpression.startsWith(MaskExpression.SEPARATOR) && this.separatorLimit.length > 14 && String(value).length > 14) {
      return String(value);
    }
    return Number(value).toLocaleString("fullwide", {
      useGrouping: false,
      maximumFractionDigits: 20
    }).replace(`/${MaskExpression.MINUS}/`, MaskExpression.MINUS);
  }
  showMaskInInput(inputVal) {
    if (this.showMaskTyped && !!this.shownMaskExpression) {
      if (this.maskExpression.length !== this.shownMaskExpression.length) {
        throw new Error("Mask expression must match mask placeholder length");
      } else {
        return this.shownMaskExpression;
      }
    } else if (this.showMaskTyped) {
      if (inputVal) {
        if (this.maskExpression === MaskExpression.IP) {
          return this._checkForIp(inputVal);
        }
        if (this.maskExpression === MaskExpression.CPF_CNPJ) {
          return this._checkForCpfCnpj(inputVal);
        }
      }
      if (this.placeHolderCharacter.length === this.maskExpression.length) {
        return this.placeHolderCharacter;
      }
      return this.maskExpression.replace(/\w/g, this.placeHolderCharacter);
    }
    return "";
  }
  clearIfNotMatchFn() {
    const formElement = this._elementRef?.nativeElement;
    if (!formElement) {
      return;
    }
    if (this.clearIfNotMatch && this.prefix.length + this.maskExpression.length + this.suffix.length !== formElement.value.replace(this.placeHolderCharacter, MaskExpression.EMPTY_STRING).length) {
      this.formElementProperty = ["value", MaskExpression.EMPTY_STRING];
      this.applyMask("", this.maskExpression);
    }
  }
  set formElementProperty([name, value]) {
    if (!this._renderer || !this._elementRef) {
      return;
    }
    Promise.resolve().then(() => this._renderer?.setProperty(this._elementRef?.nativeElement, name, value));
  }
  checkDropSpecialCharAmount(mask) {
    const chars = mask.split(MaskExpression.EMPTY_STRING).filter((item) => this._findDropSpecialChar(item));
    return chars.length;
  }
  removeMask(inputValue) {
    return this._removeMask(this._removeSuffix(this._removePrefix(inputValue)), this.specialCharacters.concat("_").concat(this.placeHolderCharacter));
  }
  _checkForIp(inputVal) {
    if (inputVal === MaskExpression.HASH) {
      return `${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;
    }
    const arr = [];
    for (let i = 0; i < inputVal.length; i++) {
      const value = inputVal[i] ?? MaskExpression.EMPTY_STRING;
      if (!value) {
        continue;
      }
      if (value.match("\\d")) {
        arr.push(value);
      }
    }
    if (arr.length <= 3) {
      return `${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;
    }
    if (arr.length > 3 && arr.length <= 6) {
      return `${this.placeHolderCharacter}.${this.placeHolderCharacter}`;
    }
    if (arr.length > 6 && arr.length <= 9) {
      return this.placeHolderCharacter;
    }
    if (arr.length > 9 && arr.length <= 12) {
      return "";
    }
    return "";
  }
  _checkForCpfCnpj(inputVal) {
    const cpf = `${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`;
    const cnpj = `${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}/${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`;
    if (inputVal === MaskExpression.HASH) {
      return cpf;
    }
    const arr = [];
    for (let i = 0; i < inputVal.length; i++) {
      const value = inputVal[i] ?? MaskExpression.EMPTY_STRING;
      if (!value) {
        continue;
      }
      if (value.match("\\d")) {
        arr.push(value);
      }
    }
    if (arr.length <= 3) {
      return cpf.slice(arr.length, cpf.length);
    }
    if (arr.length > 3 && arr.length <= 6) {
      return cpf.slice(arr.length + 1, cpf.length);
    }
    if (arr.length > 6 && arr.length <= 9) {
      return cpf.slice(arr.length + 2, cpf.length);
    }
    if (arr.length > 9 && arr.length < 11) {
      return cpf.slice(arr.length + 3, cpf.length);
    }
    if (arr.length === 11) {
      return "";
    }
    if (arr.length === 12) {
      if (inputVal.length === 17) {
        return cnpj.slice(16, cnpj.length);
      }
      return cnpj.slice(15, cnpj.length);
    }
    if (arr.length > 12 && arr.length <= 14) {
      return cnpj.slice(arr.length + 4, cnpj.length);
    }
    return "";
  }
  /**
   * Recursively determine the current active element by navigating the Shadow DOM until the Active Element is found.
   */
  _getActiveElement(document2 = this.document) {
    const shadowRootEl = document2?.activeElement?.shadowRoot;
    if (!shadowRootEl?.activeElement) {
      return document2.activeElement;
    } else {
      return this._getActiveElement(shadowRootEl);
    }
  }
  /**
   * Propogates the input value back to the Angular model by triggering the onChange function. It won't do this if writingValue
   * is true. If that is true it means we are currently in the writeValue function, which is supposed to only update the actual
   * DOM element based on the Angular model value. It should be a one way process, i.e. writeValue should not be modifying the Angular
   * model value too. Therefore, we don't trigger onChange in this scenario.
   * @param inputValue the current form input value
   */
  formControlResult(inputValue) {
    const outputTransformFn = this.outputTransformFn ? this.outputTransformFn : (v) => v;
    this.writingValue = false;
    this.maskChanged = false;
    if (!this.isInitialized && this._emitValue) {
      return;
    }
    if (Array.isArray(this.dropSpecialCharacters)) {
      this.onChange(outputTransformFn(this._toNumber(this._checkSymbols(this._removeMask(this._removeSuffix(this._removePrefix(inputValue)), this.dropSpecialCharacters)))));
    } else if (this.dropSpecialCharacters || !this.dropSpecialCharacters && this.prefix === inputValue) {
      this.onChange(outputTransformFn(this._toNumber(this._checkSymbols(this._removeSuffix(this._removePrefix(inputValue))))));
    } else {
      this.onChange(outputTransformFn(this._toNumber(inputValue)));
    }
  }
  _toNumber(value) {
    if (!this.isNumberValue || value === MaskExpression.EMPTY_STRING) {
      return value;
    }
    if (this.maskExpression.startsWith(MaskExpression.SEPARATOR) && (this.leadZero || !this.dropSpecialCharacters)) {
      return value;
    }
    if (String(value).length > 14 && this.maskExpression.startsWith(MaskExpression.SEPARATOR)) {
      return String(value);
    }
    const num = Number(value);
    if (this.maskExpression.startsWith(MaskExpression.SEPARATOR) && Number.isNaN(num)) {
      const val = String(value).replace(",", ".");
      return Number(val);
    }
    return Number.isNaN(num) ? value : num;
  }
  _removeMask(value, specialCharactersForRemove) {
    if (this.maskExpression.startsWith(MaskExpression.PERCENT) && value.includes(MaskExpression.DOT)) {
      return value;
    }
    return value ? value.replace(this._regExpForRemove(specialCharactersForRemove), MaskExpression.EMPTY_STRING) : value;
  }
  _removePrefix(value) {
    if (!this.prefix) {
      return value;
    }
    return value ? value.replace(this.prefix, MaskExpression.EMPTY_STRING) : value;
  }
  _removeSuffix(value) {
    if (!this.suffix) {
      return value;
    }
    return value ? value.replace(this.suffix, MaskExpression.EMPTY_STRING) : value;
  }
  _retrieveSeparatorValue(result) {
    let specialCharacters = Array.isArray(this.dropSpecialCharacters) ? this.specialCharacters.filter((v) => {
      return this.dropSpecialCharacters.includes(v);
    }) : this.specialCharacters;
    if (!this.deletedSpecialCharacter && this._checkPatternForSpace() && result.includes(MaskExpression.WHITE_SPACE) && this.maskExpression.includes(MaskExpression.SYMBOL_STAR)) {
      specialCharacters = specialCharacters.filter((char) => char !== MaskExpression.WHITE_SPACE);
    }
    return this._removeMask(result, specialCharacters);
  }
  _regExpForRemove(specialCharactersForRemove) {
    return new RegExp(specialCharactersForRemove.map((item) => `\\${item}`).join("|"), "gi");
  }
  _replaceDecimalMarkerToDot(value) {
    const markers = Array.isArray(this.decimalMarker) ? this.decimalMarker : [this.decimalMarker];
    return value.replace(this._regExpForRemove(markers), MaskExpression.DOT);
  }
  _checkSymbols(result) {
    let processedResult = result;
    if (processedResult === MaskExpression.EMPTY_STRING) {
      return processedResult;
    }
    if (this.maskExpression.startsWith(MaskExpression.PERCENT) && this.decimalMarker === MaskExpression.COMMA) {
      processedResult = processedResult.replace(MaskExpression.COMMA, MaskExpression.DOT);
    }
    const separatorPrecision = this._retrieveSeparatorPrecision(this.maskExpression);
    const separatorValue = this.specialCharacters.length === 0 ? this._retrieveSeparatorValue(processedResult) : this._replaceDecimalMarkerToDot(this._retrieveSeparatorValue(processedResult));
    if (!this.isNumberValue) {
      return separatorValue;
    }
    if (separatorPrecision) {
      if (processedResult === this.decimalMarker) {
        return null;
      }
      if (separatorValue.length > 14) {
        return String(separatorValue);
      }
      return this._checkPrecision(this.maskExpression, separatorValue);
    } else {
      return separatorValue;
    }
  }
  _checkPatternForSpace() {
    for (const key in this.patterns) {
      if (this.patterns[key] && this.patterns[key]?.hasOwnProperty("pattern")) {
        const patternString = this.patterns[key]?.pattern.toString();
        const pattern = this.patterns[key]?.pattern;
        if (patternString?.includes(MaskExpression.WHITE_SPACE) && pattern?.test(this.maskExpression)) {
          return true;
        }
      }
    }
    return false;
  }
  // TODO should think about helpers or separting decimal precision to own property
  _retrieveSeparatorPrecision(maskExpretion) {
    const matcher = maskExpretion.match(new RegExp(`^separator\\.([^d]*)`));
    return matcher ? Number(matcher[1]) : null;
  }
  _checkPrecision(separatorExpression, separatorValue) {
    const separatorPrecision = this.getPrecision(separatorExpression);
    let value = separatorValue;
    if (separatorExpression.indexOf("2") > 0 || this.leadZero && Number(separatorPrecision) > 0 && Number.isFinite(separatorPrecision)) {
      if (this.decimalMarker === MaskExpression.COMMA && this.leadZero) {
        value = value.replace(",", ".");
      }
      return this.leadZero ? Number(value).toFixed(Number(separatorPrecision)) : Number(value).toFixed(2);
    }
    return this.numberToString(value);
  }
  _repeatPatternSymbols(maskExp) {
    return maskExp.match(/{[0-9]+}/) && maskExp.split(MaskExpression.EMPTY_STRING).reduce((accum, currVal, index) => {
      this._start = currVal === MaskExpression.CURLY_BRACKETS_LEFT ? index : this._start;
      if (currVal !== MaskExpression.CURLY_BRACKETS_RIGHT) {
        return this._findSpecialChar(currVal) ? accum + currVal : accum;
      }
      this._end = index;
      const repeatNumber = Number(maskExp.slice(this._start + 1, this._end));
      const replaceWith = new Array(repeatNumber + 1).join(maskExp[this._start - 1]);
      if (maskExp.slice(0, this._start).length > 1 && maskExp.includes(MaskExpression.LETTER_S)) {
        const symbols = maskExp.slice(0, this._start - 1);
        return symbols.includes(MaskExpression.CURLY_BRACKETS_LEFT) ? accum + replaceWith : symbols + accum + replaceWith;
      } else {
        return accum + replaceWith;
      }
    }, "") || maskExp;
  }
  currentLocaleDecimalMarker() {
    return 1.1.toLocaleString().substring(1, 2);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275NgxMaskService_BaseFactory;
    return function NgxMaskService_Factory(__ngFactoryType__) {
      return (\u0275NgxMaskService_BaseFactory || (\u0275NgxMaskService_BaseFactory = \u0275\u0275getInheritedFactory(_NgxMaskService)))(__ngFactoryType__ || _NgxMaskService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NgxMaskService,
    factory: _NgxMaskService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMaskService, [{
    type: Injectable
  }], null, null);
})();
function _configFactory() {
  const initConfig = inject(INITIAL_CONFIG);
  const configValue = inject(NEW_CONFIG);
  return configValue instanceof Function ? __spreadValues(__spreadValues({}, initConfig), configValue()) : __spreadValues(__spreadValues({}, initConfig), configValue);
}
function provideNgxMask(configValue) {
  return [{
    provide: NEW_CONFIG,
    useValue: configValue
  }, {
    provide: INITIAL_CONFIG,
    useValue: initialConfig
  }, {
    provide: NGX_MASK_CONFIG,
    useFactory: _configFactory
  }, NgxMaskService];
}
var NgxMaskDirective = class _NgxMaskDirective {
  mask = input("", ...ngDevMode ? [{
    debugName: "mask"
  }] : []);
  specialCharacters = input([], ...ngDevMode ? [{
    debugName: "specialCharacters"
  }] : []);
  patterns = input({}, ...ngDevMode ? [{
    debugName: "patterns"
  }] : []);
  prefix = input("", ...ngDevMode ? [{
    debugName: "prefix"
  }] : []);
  suffix = input("", ...ngDevMode ? [{
    debugName: "suffix"
  }] : []);
  thousandSeparator = input(" ", ...ngDevMode ? [{
    debugName: "thousandSeparator"
  }] : []);
  decimalMarker = input(".", ...ngDevMode ? [{
    debugName: "decimalMarker"
  }] : []);
  dropSpecialCharacters = input(null, ...ngDevMode ? [{
    debugName: "dropSpecialCharacters"
  }] : []);
  hiddenInput = input(null, ...ngDevMode ? [{
    debugName: "hiddenInput"
  }] : []);
  showMaskTyped = input(null, ...ngDevMode ? [{
    debugName: "showMaskTyped"
  }] : []);
  placeHolderCharacter = input(null, ...ngDevMode ? [{
    debugName: "placeHolderCharacter"
  }] : []);
  shownMaskExpression = input(null, ...ngDevMode ? [{
    debugName: "shownMaskExpression"
  }] : []);
  clearIfNotMatch = input(null, ...ngDevMode ? [{
    debugName: "clearIfNotMatch"
  }] : []);
  validation = input(null, ...ngDevMode ? [{
    debugName: "validation"
  }] : []);
  separatorLimit = input("", ...ngDevMode ? [{
    debugName: "separatorLimit"
  }] : []);
  allowNegativeNumbers = input(null, ...ngDevMode ? [{
    debugName: "allowNegativeNumbers"
  }] : []);
  leadZeroDateTime = input(null, ...ngDevMode ? [{
    debugName: "leadZeroDateTime"
  }] : []);
  leadZero = input(null, ...ngDevMode ? [{
    debugName: "leadZero"
  }] : []);
  triggerOnMaskChange = input(null, ...ngDevMode ? [{
    debugName: "triggerOnMaskChange"
  }] : []);
  apm = input(null, ...ngDevMode ? [{
    debugName: "apm"
  }] : []);
  inputTransformFn = input(null, ...ngDevMode ? [{
    debugName: "inputTransformFn"
  }] : []);
  outputTransformFn = input(null, ...ngDevMode ? [{
    debugName: "outputTransformFn"
  }] : []);
  keepCharacterPositions = input(null, ...ngDevMode ? [{
    debugName: "keepCharacterPositions"
  }] : []);
  instantPrefix = input(null, ...ngDevMode ? [{
    debugName: "instantPrefix"
  }] : []);
  maskFilled = output();
  _maskValue = signal("", ...ngDevMode ? [{
    debugName: "_maskValue"
  }] : []);
  _inputValue = signal("", ...ngDevMode ? [{
    debugName: "_inputValue"
  }] : []);
  _position = signal(null, ...ngDevMode ? [{
    debugName: "_position"
  }] : []);
  _code = signal("", ...ngDevMode ? [{
    debugName: "_code"
  }] : []);
  _maskExpressionArray = signal([], ...ngDevMode ? [{
    debugName: "_maskExpressionArray"
  }] : []);
  _justPasted = signal(false, ...ngDevMode ? [{
    debugName: "_justPasted"
  }] : []);
  _isFocused = signal(false, ...ngDevMode ? [{
    debugName: "_isFocused"
  }] : []);
  /**For IME composition event */
  _isComposing = signal(false, ...ngDevMode ? [{
    debugName: "_isComposing"
  }] : []);
  _maskService = inject(NgxMaskService, {
    self: true
  });
  document = inject(DOCUMENT);
  _config = inject(NGX_MASK_CONFIG);
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange = (_) => {
  };
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouch = () => {
  };
  ngOnChanges(changes) {
    const {
      mask,
      specialCharacters,
      patterns,
      prefix,
      suffix,
      thousandSeparator,
      decimalMarker,
      dropSpecialCharacters,
      hiddenInput,
      showMaskTyped,
      placeHolderCharacter,
      shownMaskExpression,
      clearIfNotMatch,
      validation,
      separatorLimit,
      allowNegativeNumbers,
      leadZeroDateTime,
      leadZero,
      triggerOnMaskChange,
      apm,
      inputTransformFn,
      outputTransformFn,
      keepCharacterPositions,
      instantPrefix
    } = changes;
    if (mask) {
      if (mask.currentValue !== mask.previousValue && !mask.firstChange) {
        this._maskService.maskChanged = true;
      }
      if (mask.currentValue && mask.currentValue.split(MaskExpression.OR).length > 1) {
        this._maskExpressionArray.set(mask.currentValue.split(MaskExpression.OR).sort((a, b) => {
          return a.length - b.length;
        }));
        this._setMask();
      } else {
        this._maskExpressionArray.set([]);
        this._maskValue.set(mask.currentValue || MaskExpression.EMPTY_STRING);
        this._maskService.maskExpression = this._maskValue();
      }
    }
    if (specialCharacters) {
      if (!specialCharacters.currentValue || !Array.isArray(specialCharacters.currentValue)) {
        return;
      } else {
        this._maskService.specialCharacters = specialCharacters.currentValue || [];
      }
    }
    if (allowNegativeNumbers) {
      this._maskService.allowNegativeNumbers = allowNegativeNumbers.currentValue;
      if (this._maskService.allowNegativeNumbers) {
        this._maskService.specialCharacters = this._maskService.specialCharacters.filter((c) => c !== MaskExpression.MINUS);
      }
    }
    if (patterns && patterns.currentValue) {
      this._maskService.patterns = patterns.currentValue;
    }
    if (apm && apm.currentValue) {
      this._maskService.apm = apm.currentValue;
    }
    if (instantPrefix) {
      this._maskService.instantPrefix = instantPrefix.currentValue;
    }
    if (prefix) {
      this._maskService.prefix = prefix.currentValue;
    }
    if (suffix) {
      this._maskService.suffix = suffix.currentValue;
    }
    if (thousandSeparator) {
      this._maskService.thousandSeparator = thousandSeparator.currentValue;
      if (thousandSeparator.previousValue && thousandSeparator.currentValue) {
        const previousDecimalMarker = this._maskService.decimalMarker;
        if (thousandSeparator.currentValue === this._maskService.decimalMarker) {
          this._maskService.decimalMarker = thousandSeparator.currentValue === MaskExpression.COMMA ? MaskExpression.DOT : MaskExpression.COMMA;
        }
        if (this._maskService.dropSpecialCharacters === true) {
          this._maskService.specialCharacters = this._config.specialCharacters;
        }
        if (typeof previousDecimalMarker === "string" && typeof this._maskService.decimalMarker === "string") {
          this._inputValue.set(this._inputValue().split(thousandSeparator.previousValue).join("").replace(previousDecimalMarker, this._maskService.decimalMarker));
          this._maskService.actualValue = this._inputValue();
        }
        this._maskService.writingValue = true;
      }
    }
    if (decimalMarker) {
      this._maskService.decimalMarker = decimalMarker.currentValue;
    }
    if (dropSpecialCharacters) {
      this._maskService.dropSpecialCharacters = dropSpecialCharacters.currentValue;
    }
    if (hiddenInput) {
      this._maskService.hiddenInput = hiddenInput.currentValue;
      if (hiddenInput.previousValue === true && hiddenInput.currentValue === false) {
        this._inputValue.set(this._maskService.actualValue);
      }
    }
    if (showMaskTyped) {
      this._maskService.showMaskTyped = showMaskTyped.currentValue;
      if (showMaskTyped.previousValue === false && showMaskTyped.currentValue === true && this._isFocused()) {
        requestAnimationFrame(() => {
          this._maskService._elementRef?.nativeElement.click();
        });
      }
    }
    if (placeHolderCharacter) {
      this._maskService.placeHolderCharacter = placeHolderCharacter.currentValue;
    }
    if (shownMaskExpression) {
      this._maskService.shownMaskExpression = shownMaskExpression.currentValue;
    }
    if (clearIfNotMatch) {
      this._maskService.clearIfNotMatch = clearIfNotMatch.currentValue;
    }
    if (validation) {
      this._maskService.validation = validation.currentValue;
    }
    if (separatorLimit) {
      this._maskService.separatorLimit = separatorLimit.currentValue;
    }
    if (leadZeroDateTime) {
      this._maskService.leadZeroDateTime = leadZeroDateTime.currentValue;
    }
    if (leadZero) {
      this._maskService.leadZero = leadZero.currentValue;
    }
    if (triggerOnMaskChange) {
      this._maskService.triggerOnMaskChange = triggerOnMaskChange.currentValue;
    }
    if (inputTransformFn) {
      this._maskService.inputTransformFn = inputTransformFn.currentValue;
    }
    if (outputTransformFn) {
      this._maskService.outputTransformFn = outputTransformFn.currentValue;
    }
    if (keepCharacterPositions) {
      this._maskService.keepCharacterPositions = keepCharacterPositions.currentValue;
    }
    this._applyMask();
  }
  validate({
    value
  }) {
    const processedValue = typeof value === "number" ? String(value) : value;
    const maskValue = this._maskValue();
    if (!this._maskService.validation || !maskValue) {
      return null;
    }
    if (this._maskService.ipError) {
      return this._createValidationError(processedValue);
    }
    if (this._maskService.cpfCnpjError) {
      return this._createValidationError(processedValue);
    }
    if (maskValue.startsWith(MaskExpression.SEPARATOR)) {
      return null;
    }
    if (withoutValidation.includes(maskValue)) {
      return null;
    }
    if (this._maskService.clearIfNotMatch) {
      return null;
    }
    if (timeMasks.includes(maskValue)) {
      return this._validateTime(processedValue);
    }
    if (maskValue === MaskExpression.EMAIL_MASK) {
      const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
      if (!emailPattern.test(processedValue) && processedValue) {
        return this._createValidationError(processedValue);
      } else {
        return null;
      }
    }
    if (processedValue && processedValue.length >= 1) {
      let counterOfOpt = 0;
      if (maskValue.includes(MaskExpression.CURLY_BRACKETS_LEFT) && maskValue.includes(MaskExpression.CURLY_BRACKETS_RIGHT)) {
        const lengthInsideCurlyBrackets = maskValue.slice(maskValue.indexOf(MaskExpression.CURLY_BRACKETS_LEFT) + 1, maskValue.indexOf(MaskExpression.CURLY_BRACKETS_RIGHT));
        return lengthInsideCurlyBrackets === String(processedValue.length) ? null : this._createValidationError(processedValue);
      }
      if (maskValue.startsWith(MaskExpression.PERCENT)) {
        return null;
      }
      for (const key in this._maskService.patterns) {
        if (this._maskService.patterns[key]?.optional) {
          if (maskValue.indexOf(key) !== maskValue.lastIndexOf(key)) {
            const opt = maskValue.split(MaskExpression.EMPTY_STRING).filter((i) => i === key).join(MaskExpression.EMPTY_STRING);
            counterOfOpt += opt.length;
          } else if (maskValue.indexOf(key) !== -1) {
            counterOfOpt++;
          }
          if (maskValue.indexOf(key) !== -1 && processedValue.length >= maskValue.indexOf(key)) {
            return null;
          }
          if (counterOfOpt === maskValue.length) {
            return null;
          }
        }
      }
      if (maskValue.indexOf(MaskExpression.SYMBOL_STAR) > 1 && processedValue.length < maskValue.indexOf(MaskExpression.SYMBOL_STAR) || maskValue.indexOf(MaskExpression.SYMBOL_QUESTION) > 1 && processedValue.length < maskValue.indexOf(MaskExpression.SYMBOL_QUESTION)) {
        return this._createValidationError(processedValue);
      }
      if (maskValue.indexOf(MaskExpression.SYMBOL_STAR) === -1 || maskValue.indexOf(MaskExpression.SYMBOL_QUESTION) === -1) {
        const array = maskValue.split("*");
        const length = this._maskService.dropSpecialCharacters ? maskValue.length - this._maskService.checkDropSpecialCharAmount(maskValue) - counterOfOpt : this.prefix() ? maskValue.length + this.prefix().length - counterOfOpt : maskValue.length - counterOfOpt;
        if (array.length === 1) {
          if (processedValue.length < length) {
            return this._createValidationError(processedValue);
          }
        }
        if (array.length > 1) {
          const lastIndexArray = array[array.length - 1];
          if (lastIndexArray && this._maskService.specialCharacters.includes(lastIndexArray[0]) && String(processedValue).includes(lastIndexArray[0] ?? "") && !this.dropSpecialCharacters()) {
            const special = value.split(lastIndexArray[0]);
            return special[special.length - 1].length === lastIndexArray.length - 1 ? null : this._createValidationError(processedValue);
          } else if ((lastIndexArray && !this._maskService.specialCharacters.includes(lastIndexArray[0]) || !lastIndexArray || this._maskService.dropSpecialCharacters) && processedValue.length >= length - 1) {
            return null;
          } else {
            return this._createValidationError(processedValue);
          }
        }
      }
      if (maskValue.indexOf(MaskExpression.SYMBOL_STAR) === 1 || maskValue.indexOf(MaskExpression.SYMBOL_QUESTION) === 1) {
        return null;
      }
    }
    if (value) {
      this.maskFilled.emit();
      return null;
    }
    return null;
  }
  onPaste() {
    this._justPasted.set(true);
  }
  onFocus() {
    this._isFocused.set(true);
  }
  onModelChange(value) {
    if ((value === MaskExpression.EMPTY_STRING || value === null || typeof value === "undefined") && this._maskService.actualValue) {
      this._maskService.actualValue = this._maskService.getActualValue(MaskExpression.EMPTY_STRING);
    }
  }
  onInput(e) {
    this._maskService.isInitialized = true;
    if (this._isComposing()) {
      return;
    }
    const el = e.target;
    const transformedValue = this._maskService.inputTransformFn ? this._maskService.inputTransformFn(el.value) : el.value;
    if (el.type !== "number") {
      if (typeof transformedValue === "string" || typeof transformedValue === "number") {
        el.value = transformedValue.toString();
        this._inputValue.set(el.value);
        this._setMask();
        if (!this._maskValue()) {
          this.onChange(el.value);
          return;
        }
        let position = el.selectionStart === 1 ? el.selectionStart + this._maskService.prefix.length : el.selectionStart;
        if (this.showMaskTyped() && this.keepCharacterPositions() && this._maskService.placeHolderCharacter.length === 1) {
          const suffix = this.suffix();
          const prefix = this.prefix();
          const inputSymbol = el.value.slice(position - 1, position);
          const prefixLength = prefix.length;
          const checkSymbols = this._maskService._checkSymbolMask(inputSymbol, this._maskService.maskExpression[position - 1 - prefixLength] ?? MaskExpression.EMPTY_STRING);
          const checkSpecialCharacter = this._maskService._checkSymbolMask(inputSymbol, this._maskService.maskExpression[position + 1 - prefixLength] ?? MaskExpression.EMPTY_STRING);
          const selectRangeBackspace = this._maskService.selStart === this._maskService.selEnd;
          const selStart = Number(this._maskService.selStart) - prefixLength;
          const selEnd = Number(this._maskService.selEnd) - prefixLength;
          const backspaceOrDelete = this._code() === MaskExpression.BACKSPACE || this._code() === MaskExpression.DELETE;
          if (backspaceOrDelete) {
            if (!selectRangeBackspace) {
              if (this._maskService.selStart === prefixLength) {
                this._maskService.actualValue = `${prefix}${this._maskService.maskIsShown.slice(0, selEnd)}${this._inputValue().split(prefix).join("")}`;
              } else if (this._maskService.selStart === this._maskService.maskIsShown.length + prefixLength) {
                this._maskService.actualValue = `${this._inputValue()}${this._maskService.maskIsShown.slice(selStart, selEnd)}`;
              } else {
                this._maskService.actualValue = `${prefix}${this._inputValue().split(prefix).join("").slice(0, selStart)}${this._maskService.maskIsShown.slice(selStart, selEnd)}${this._maskService.actualValue.slice(selEnd + prefixLength, this._maskService.maskIsShown.length + prefixLength)}${suffix}`;
              }
            } else if (!this._maskService.specialCharacters.includes(this._maskService.maskExpression.slice(position - prefixLength, position + 1 - prefixLength)) && selectRangeBackspace) {
              if (selStart === 1 && prefix) {
                this._maskService.actualValue = `${prefix}${this._maskService.placeHolderCharacter}${el.value.split(prefix).join("").split(suffix).join("")}${suffix}`;
                position = position - 1;
              } else {
                const part1 = el.value.substring(0, position);
                const part2 = el.value.substring(position);
                this._maskService.actualValue = `${part1}${this._maskService.placeHolderCharacter}${part2}`;
              }
            }
            position = this._code() === MaskExpression.DELETE ? position + 1 : position;
          }
          if (!backspaceOrDelete) {
            if (!checkSymbols && !checkSpecialCharacter && selectRangeBackspace) {
              position = Number(el.selectionStart) - 1;
            } else if (this._maskService.specialCharacters.includes(el.value.slice(position, position + 1)) && checkSpecialCharacter && !this._maskService.specialCharacters.includes(el.value.slice(position + 1, position + 2))) {
              this._maskService.actualValue = `${el.value.slice(0, position - 1)}${el.value.slice(position, position + 1)}${inputSymbol}${el.value.slice(position + 2)}`;
              position = position + 1;
            } else if (checkSymbols) {
              if (el.value.length === 1 && position === 1) {
                this._maskService.actualValue = `${prefix}${inputSymbol}${this._maskService.maskIsShown.slice(1, this._maskService.maskIsShown.length)}${suffix}`;
              } else {
                this._maskService.actualValue = `${el.value.slice(0, position - 1)}${inputSymbol}${el.value.slice(position + 1).split(suffix).join("")}${suffix}`;
              }
            } else if (prefix && el.value.length === 1 && position - prefixLength === 1 && this._maskService._checkSymbolMask(el.value, this._maskService.maskExpression[position - 1 - prefixLength] ?? MaskExpression.EMPTY_STRING)) {
              this._maskService.actualValue = `${prefix}${el.value}${this._maskService.maskIsShown.slice(1, this._maskService.maskIsShown.length)}${suffix}`;
            }
          }
        }
        let caretShift = 0;
        let backspaceShift = false;
        if (this._code() === MaskExpression.DELETE && MaskExpression.SEPARATOR) {
          this._maskService.deletedSpecialCharacter = true;
        }
        if (this._inputValue().length >= this._maskService.maskExpression.length - 1 && this._code() !== MaskExpression.BACKSPACE && this._maskService.maskExpression === MaskExpression.DAYS_MONTHS_YEARS && position < 10) {
          const inputSymbol = this._inputValue().slice(position - 1, position);
          el.value = this._inputValue().slice(0, position - 1) + inputSymbol + this._inputValue().slice(position + 1);
        }
        if (this._maskService.maskExpression === MaskExpression.DAYS_MONTHS_YEARS && this.leadZeroDateTime()) {
          if (position < 3 && Number(el.value) > 31 && Number(el.value) < 40 || position === 5 && Number(el.value.slice(3, 5)) > 12) {
            position = position + 2;
          }
        }
        if (this._maskService.maskExpression === MaskExpression.HOURS_MINUTES_SECONDS && this.apm()) {
          if (this._justPasted() && el.value.slice(0, 2) === MaskExpression.DOUBLE_ZERO) {
            el.value = el.value.slice(1, 2) + el.value.slice(2, el.value.length);
          }
          el.value = el.value === MaskExpression.DOUBLE_ZERO ? MaskExpression.NUMBER_ZERO : el.value;
        }
        this._maskService.applyValueChanges(position, this._justPasted(), this._code() === MaskExpression.BACKSPACE || this._code() === MaskExpression.DELETE, (shift, _backspaceShift) => {
          this._justPasted.set(false);
          caretShift = shift;
          backspaceShift = _backspaceShift;
        });
        if (this._getActiveElement() !== el) {
          return;
        }
        if (this._maskService.plusOnePosition) {
          position = position + 1;
          this._maskService.plusOnePosition = false;
        }
        if (this._maskExpressionArray().length) {
          if (this._code() === MaskExpression.BACKSPACE) {
            const specialChartMinusOne = this.specialCharacters().includes(this._maskService.actualValue.slice(position - 1, position));
            const allowFewMaskChangeMask = this._maskService.removeMask(this._inputValue())?.length === this._maskService.removeMask(this._maskService.maskExpression)?.length;
            const specialChartPlusOne = this.specialCharacters().includes(this._maskService.actualValue.slice(position, position + 1));
            if (allowFewMaskChangeMask && !specialChartPlusOne) {
              position = el.selectionStart + 1;
            } else {
              position = specialChartMinusOne ? position - 1 : position;
            }
          } else {
            position = el.selectionStart === 1 ? el.selectionStart + this._maskService.prefix.length : el.selectionStart;
          }
        }
        this._position.set(this._position() === 1 && this._inputValue().length === 1 ? null : this._position());
        let positionToApply = this._position() ? this._inputValue().length + position + caretShift : position + (this._code() === MaskExpression.BACKSPACE && !backspaceShift ? 0 : caretShift);
        if (positionToApply > this._getActualInputLength()) {
          positionToApply = el.value === this._maskService.decimalMarker && el.value.length === 1 ? this._getActualInputLength() + 1 : this._getActualInputLength();
        }
        if (positionToApply < 0) {
          positionToApply = 0;
        }
        el.setSelectionRange(positionToApply, positionToApply);
        this._position.set(null);
      } else {
        console.warn("Ngx-mask writeValue work with string | number, your current value:", typeof transformedValue);
      }
    } else {
      if (!this._maskValue()) {
        this.onChange(el.value);
        return;
      }
      this._maskService.applyValueChanges(el.value.length, this._justPasted(), this._code() === MaskExpression.BACKSPACE || this._code() === MaskExpression.DELETE);
    }
  }
  // IME starts
  onCompositionStart() {
    this._isComposing.set(true);
  }
  // IME completes
  onCompositionEnd(e) {
    this._isComposing.set(false);
    this._justPasted.set(true);
    this.onInput(e);
  }
  onBlur(e) {
    if (this._maskValue()) {
      const el = e.target;
      if (this._maskService.leadZero && el.value.length > 0 && typeof this._maskService.decimalMarker === "string") {
        const maskExpression = this._maskService.maskExpression;
        const decimalMarker = this._maskService.decimalMarker;
        const suffix = this._maskService.suffix;
        const precision = Number(this._maskService.maskExpression.slice(maskExpression.length - 1, maskExpression.length));
        if (precision > 0) {
          el.value = suffix ? el.value.split(suffix).join("") : el.value;
          const decimalPart = el.value.split(decimalMarker)[1];
          el.value = el.value.includes(decimalMarker) ? el.value + MaskExpression.NUMBER_ZERO.repeat(precision - decimalPart.length) + suffix : el.value + decimalMarker + MaskExpression.NUMBER_ZERO.repeat(precision) + suffix;
          this._maskService.actualValue = el.value;
        }
      }
      this._maskService.clearIfNotMatchFn();
    }
    this._isFocused.set(false);
    this.onTouch();
  }
  onClick(e) {
    if (!this._maskValue()) {
      return;
    }
    const el = e.target;
    const posStart = 0;
    const posEnd = 0;
    if (el !== null && el.selectionStart !== null && el.selectionStart === el.selectionEnd && el.selectionStart > this._maskService.prefix.length && e.keyCode !== 38) {
      if (this._maskService.showMaskTyped && !this.keepCharacterPositions()) {
        this._maskService.maskIsShown = this._maskService.showMaskInInput();
        if (el.setSelectionRange && this._maskService.prefix + this._maskService.maskIsShown === el.value) {
          el.focus();
          el.setSelectionRange(posStart, posEnd);
        } else {
          if (el.selectionStart > this._maskService.actualValue.length) {
            el.setSelectionRange(this._maskService.actualValue.length, this._maskService.actualValue.length);
          }
        }
      }
    }
    const nextValue = el && (el.value === this._maskService.prefix ? this._maskService.prefix + this._maskService.maskIsShown : el.value);
    if (el && el.value !== nextValue) {
      el.value = nextValue;
    }
    if (el && el.type !== "number" && (el.selectionStart || el.selectionEnd) <= this._maskService.prefix.length) {
      const specialCharactersAtTheStart = this._maskService.maskExpression.match(new RegExp(`^[${this._maskService.specialCharacters.map((c) => `\\${c}`).join("")}]+`))?.[0].length || 0;
      el.selectionStart = this._maskService.prefix.length + specialCharactersAtTheStart;
      return;
    }
    if (el && el.selectionEnd > this._getActualInputLength()) {
      el.selectionEnd = this._getActualInputLength();
    }
  }
  onKeyDown(e) {
    if (!this._maskValue()) {
      return;
    }
    if (this._isComposing()) {
      if (e.key === "Enter") {
        this.onCompositionEnd(e);
      }
      return;
    }
    this._code.set(e.code ? e.code : e.key);
    const el = e.target;
    this._inputValue.set(el.value);
    this._setMask();
    const isTextarea = el.tagName.toLowerCase() === "textarea";
    if (el.type !== "number") {
      if (e.key === MaskExpression.ARROW_UP && !isTextarea) {
        e.preventDefault();
      }
      if (e.key === MaskExpression.ARROW_LEFT || e.key === MaskExpression.BACKSPACE || e.key === MaskExpression.DELETE) {
        if (e.key === MaskExpression.BACKSPACE && el.value.length === 0) {
          el.selectionStart = el.selectionEnd;
        }
        if (e.key === MaskExpression.BACKSPACE && el.selectionStart !== 0) {
          const prefixLength = this.prefix().length;
          const specialCharacters = this.specialCharacters().length ? this.specialCharacters() : this._config.specialCharacters;
          if (prefixLength > 1 && el.selectionStart <= prefixLength) {
            el.setSelectionRange(prefixLength, el.selectionEnd);
          } else {
            if (this._inputValue().length !== el.selectionStart && el.selectionStart !== 1) {
              while (specialCharacters.includes((this._inputValue()[el.selectionStart - 1] ?? MaskExpression.EMPTY_STRING).toString()) && (prefixLength >= 1 && el.selectionStart > prefixLength || prefixLength === 0)) {
                el.setSelectionRange(el.selectionStart - 1, el.selectionEnd);
              }
            }
          }
        }
        this.checkSelectionOnDeletion(el);
        if (this._maskService.prefix.length && el.selectionStart <= this._maskService.prefix.length && el.selectionEnd <= this._maskService.prefix.length) {
          e.preventDefault();
        }
        const cursorStart = el.selectionStart;
        if (e.key === MaskExpression.BACKSPACE && !el.readOnly && cursorStart === 0 && el.selectionEnd === el.value.length && el.value.length !== 0) {
          this._position.set(this._maskService.prefix ? this._maskService.prefix.length : 0);
          this._maskService.applyMask(this._maskService.prefix, this._maskService.maskExpression, this._position());
        }
      }
      if (!!this.suffix() && this.suffix().length > 1 && this._inputValue().length - this.suffix().length < el.selectionStart) {
        el.setSelectionRange(this._inputValue().length - this.suffix().length, this._inputValue().length);
      } else if (e.code === "KeyA" && e.ctrlKey || e.code === "KeyA" && e.metaKey) {
        el.setSelectionRange(0, this._getActualInputLength());
        e.preventDefault();
      }
      this._maskService.selStart = el.selectionStart;
      this._maskService.selEnd = el.selectionEnd;
    }
  }
  /** It writes the value in the input */
  writeValue(controlValue) {
    return __async(this, null, function* () {
      let value = controlValue;
      const inputTransformFn = this._maskService.inputTransformFn;
      if (typeof value === "object" && value !== null && "value" in value) {
        if ("disable" in value) {
          this.setDisabledState(Boolean(value.disable));
        }
        value = value.value;
      }
      if (value !== null) {
        value = inputTransformFn ? inputTransformFn(value) : value;
      }
      if (typeof value === "string" || typeof value === "number" || value === null || typeof value === "undefined") {
        if (value === null || typeof value === "undefined" || value === "") {
          this._maskService.currentValue = "";
          this._maskService.previousValue = "";
        }
        let inputValue = value;
        if (typeof inputValue === "number" || this._maskValue().startsWith(MaskExpression.SEPARATOR)) {
          inputValue = String(inputValue);
          const localeDecimalMarker = this._maskService.currentLocaleDecimalMarker();
          if (!Array.isArray(this._maskService.decimalMarker)) {
            inputValue = this._maskService.decimalMarker !== localeDecimalMarker ? inputValue.replace(localeDecimalMarker, this._maskService.decimalMarker) : inputValue;
          }
          if (this._maskService.leadZero && inputValue && this.mask() && this.dropSpecialCharacters() !== false) {
            inputValue = this._maskService._checkPrecision(this._maskService.maskExpression, inputValue);
          }
          if (this._maskService.decimalMarker === MaskExpression.COMMA || Array.isArray(this._maskService.decimalMarker) && this._maskService.thousandSeparator === MaskExpression.DOT) {
            inputValue = inputValue.toString().replace(MaskExpression.DOT, MaskExpression.COMMA);
          }
          if (this.mask()?.startsWith(MaskExpression.SEPARATOR) && this.leadZero()) {
            requestAnimationFrame(() => {
              this._maskService.applyMask(inputValue?.toString() ?? "", this._maskService.maskExpression);
            });
          }
          this._maskService.isNumberValue = true;
        }
        if (typeof inputValue !== "string" || value === null || typeof value === "undefined") {
          inputValue = "";
        }
        this._inputValue.set(inputValue);
        this._setMask();
        if (inputValue && this._maskService.maskExpression || this._maskService.maskExpression && (this._maskService.prefix || this._maskService.showMaskTyped)) {
          this._maskService.writingValue = true;
          this._maskService.formElementProperty = ["value", this._maskService.applyMask(inputValue, this._maskService.maskExpression)];
          this._maskService.writingValue = false;
          this._maskService.isInitialized = true;
        } else {
          this._maskService.formElementProperty = ["value", inputValue];
          this._maskService.isInitialized = true;
        }
        this._inputValue.set(inputValue);
      } else {
        console.warn("Ngx-mask writeValue work with string | number, your current value:", typeof value);
      }
    });
  }
  registerOnChange(fn) {
    this._maskService.onChange = this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouch = fn;
  }
  _getActiveElement(document2 = this.document) {
    const shadowRootEl = document2?.activeElement?.shadowRoot;
    if (!shadowRootEl?.activeElement) {
      return document2.activeElement;
    } else {
      return this._getActiveElement(shadowRootEl);
    }
  }
  checkSelectionOnDeletion(el) {
    const prefixLength = this.prefix().length;
    const suffixLength = this.suffix().length;
    const inputValueLength = this._inputValue().length;
    el.selectionStart = Math.min(Math.max(prefixLength, el.selectionStart), inputValueLength - suffixLength);
    el.selectionEnd = Math.min(Math.max(prefixLength, el.selectionEnd), inputValueLength - suffixLength);
  }
  /** It disables the input element */
  setDisabledState(isDisabled) {
    this._maskService.formElementProperty = ["disabled", isDisabled];
  }
  _applyMask() {
    this._maskService.maskExpression = this._maskService._repeatPatternSymbols(this._maskValue() || "");
    this._maskService.formElementProperty = ["value", this._maskService.applyMask(this._inputValue(), this._maskService.maskExpression)];
  }
  _validateTime(value) {
    const rowMaskLen = this._maskValue().split(MaskExpression.EMPTY_STRING).filter((s) => s !== ":").length;
    if (!value) {
      return null;
    }
    if (+(value[value.length - 1] ?? -1) === 0 && value.length < rowMaskLen || value.length <= rowMaskLen - 2) {
      return this._createValidationError(value);
    }
    return null;
  }
  _getActualInputLength() {
    return this._maskService.actualValue.length || this._maskService.actualValue.length + this._maskService.prefix.length;
  }
  _createValidationError(actualValue) {
    return {
      mask: {
        requiredMask: this._maskValue(),
        actualValue
      }
    };
  }
  _setMask() {
    this._maskExpressionArray().some((mask) => {
      const specialChart = mask.split(MaskExpression.EMPTY_STRING).some((char) => this._maskService.specialCharacters.includes(char));
      if (specialChart && this._inputValue() && this._areAllCharactersInEachStringSame(this._maskExpressionArray()) || mask.includes(MaskExpression.CURLY_BRACKETS_LEFT)) {
        const test = this._maskService.removeMask(this._inputValue())?.length <= this._maskService.removeMask(mask)?.length;
        if (test) {
          const maskValue = mask.includes(MaskExpression.CURLY_BRACKETS_LEFT) ? this._maskService._repeatPatternSymbols(mask) : mask;
          this._maskValue.set(maskValue);
          this._maskService.maskExpression = maskValue;
          return test;
        } else {
          const expression = this._maskExpressionArray()[this._maskExpressionArray().length - 1] ?? MaskExpression.EMPTY_STRING;
          const maskValue = expression.includes(MaskExpression.CURLY_BRACKETS_LEFT) ? this._maskService._repeatPatternSymbols(expression) : expression;
          this._maskValue.set(maskValue);
          this._maskService.maskExpression = maskValue;
        }
      } else {
        const cleanMask = this._maskService.removeMask(mask);
        const check = this._maskService.removeMask(this._inputValue())?.split(MaskExpression.EMPTY_STRING).every((character, index) => {
          const indexMask = cleanMask.charAt(index);
          return this._maskService._checkSymbolMask(character, indexMask);
        });
        if (check || this._justPasted()) {
          this._maskValue.set(mask);
          this._maskService.maskExpression = mask;
          return check;
        }
      }
    });
  }
  _areAllCharactersInEachStringSame(array) {
    const specialCharacters = this._maskService.specialCharacters;
    function removeSpecialCharacters(str) {
      const regex = new RegExp(`[${specialCharacters.map((ch) => `\\${ch}`).join("")}]`, "g");
      return str.replace(regex, "");
    }
    const processedArr = array.map(removeSpecialCharacters);
    return processedArr.every((str) => {
      const uniqueCharacters = new Set(str);
      return uniqueCharacters.size === 1;
    });
  }
  static \u0275fac = function NgxMaskDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgxMaskDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgxMaskDirective,
    selectors: [["input", "mask", ""], ["textarea", "mask", ""]],
    hostBindings: function NgxMaskDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("paste", function NgxMaskDirective_paste_HostBindingHandler() {
          return ctx.onPaste();
        })("focus", function NgxMaskDirective_focus_HostBindingHandler($event) {
          return ctx.onFocus($event);
        })("ngModelChange", function NgxMaskDirective_ngModelChange_HostBindingHandler($event) {
          return ctx.onModelChange($event);
        })("input", function NgxMaskDirective_input_HostBindingHandler($event) {
          return ctx.onInput($event);
        })("compositionstart", function NgxMaskDirective_compositionstart_HostBindingHandler($event) {
          return ctx.onCompositionStart($event);
        })("compositionend", function NgxMaskDirective_compositionend_HostBindingHandler($event) {
          return ctx.onCompositionEnd($event);
        })("blur", function NgxMaskDirective_blur_HostBindingHandler($event) {
          return ctx.onBlur($event);
        })("click", function NgxMaskDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        })("keydown", function NgxMaskDirective_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        });
      }
    },
    inputs: {
      mask: [1, "mask"],
      specialCharacters: [1, "specialCharacters"],
      patterns: [1, "patterns"],
      prefix: [1, "prefix"],
      suffix: [1, "suffix"],
      thousandSeparator: [1, "thousandSeparator"],
      decimalMarker: [1, "decimalMarker"],
      dropSpecialCharacters: [1, "dropSpecialCharacters"],
      hiddenInput: [1, "hiddenInput"],
      showMaskTyped: [1, "showMaskTyped"],
      placeHolderCharacter: [1, "placeHolderCharacter"],
      shownMaskExpression: [1, "shownMaskExpression"],
      clearIfNotMatch: [1, "clearIfNotMatch"],
      validation: [1, "validation"],
      separatorLimit: [1, "separatorLimit"],
      allowNegativeNumbers: [1, "allowNegativeNumbers"],
      leadZeroDateTime: [1, "leadZeroDateTime"],
      leadZero: [1, "leadZero"],
      triggerOnMaskChange: [1, "triggerOnMaskChange"],
      apm: [1, "apm"],
      inputTransformFn: [1, "inputTransformFn"],
      outputTransformFn: [1, "outputTransformFn"],
      keepCharacterPositions: [1, "keepCharacterPositions"],
      instantPrefix: [1, "instantPrefix"]
    },
    outputs: {
      maskFilled: "maskFilled"
    },
    exportAs: ["mask", "ngxMask"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: _NgxMaskDirective,
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: _NgxMaskDirective,
      multi: true
    }, NgxMaskService]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMaskDirective, [{
    type: Directive,
    args: [{
      selector: "input[mask], textarea[mask]",
      standalone: true,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: NgxMaskDirective,
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: NgxMaskDirective,
        multi: true
      }, NgxMaskService],
      exportAs: "mask,ngxMask"
    }]
  }], null, {
    onPaste: [{
      type: HostListener,
      args: ["paste"]
    }],
    onFocus: [{
      type: HostListener,
      args: ["focus", ["$event"]]
    }],
    onModelChange: [{
      type: HostListener,
      args: ["ngModelChange", ["$event"]]
    }],
    onInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }],
    onCompositionStart: [{
      type: HostListener,
      args: ["compositionstart", ["$event"]]
    }],
    onCompositionEnd: [{
      type: HostListener,
      args: ["compositionend", ["$event"]]
    }],
    onBlur: [{
      type: HostListener,
      args: ["blur", ["$event"]]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var NgxMaskPipe = class _NgxMaskPipe {
  defaultOptions = inject(NGX_MASK_CONFIG);
  _maskService = inject(NgxMaskService);
  _maskExpressionArray = [];
  mask = "";
  transform(value, mask, _a = {}) {
    var _b = _a, {
      patterns
    } = _b, config = __objRest(_b, [
      "patterns"
    ]);
    let processedValue = value;
    const currentConfig = __spreadProps(__spreadValues(__spreadValues({
      maskExpression: mask
    }, this.defaultOptions), config), {
      patterns: __spreadValues(__spreadValues({}, this._maskService.patterns), patterns)
    });
    Object.entries(currentConfig).forEach(([key, val]) => {
      this._maskService[key] = val;
    });
    if (mask.includes("||")) {
      const maskParts = mask.split("||");
      if (maskParts.length > 1) {
        this._maskExpressionArray = maskParts.sort((a, b) => a.length - b.length);
        this._setMask(`${processedValue}`);
        return this._maskService.applyMask(`${processedValue}`, this.mask);
      } else {
        this._maskExpressionArray = [];
        return this._maskService.applyMask(`${processedValue}`, this.mask);
      }
    }
    if (mask.includes(MaskExpression.CURLY_BRACKETS_LEFT)) {
      return this._maskService.applyMask(`${processedValue}`, this._maskService._repeatPatternSymbols(mask));
    }
    if (mask.startsWith(MaskExpression.SEPARATOR)) {
      if (config.decimalMarker) {
        this._maskService.decimalMarker = config.decimalMarker;
      }
      if (config.thousandSeparator) {
        this._maskService.thousandSeparator = config.thousandSeparator;
      }
      if (config.leadZero) {
        this._maskService.leadZero = config.leadZero;
      }
      processedValue = String(processedValue);
      const localeDecimalMarker = this._maskService.currentLocaleDecimalMarker();
      if (!Array.isArray(this._maskService.decimalMarker)) {
        processedValue = this._maskService.decimalMarker !== localeDecimalMarker ? processedValue.replace(localeDecimalMarker, this._maskService.decimalMarker) : processedValue;
      }
      if (this._maskService.leadZero && processedValue && this._maskService.dropSpecialCharacters !== false) {
        processedValue = this._maskService._checkPrecision(mask, processedValue);
      }
      if (this._maskService.decimalMarker === MaskExpression.COMMA) {
        processedValue = processedValue.replace(MaskExpression.DOT, MaskExpression.COMMA);
      }
      this._maskService.isNumberValue = true;
    }
    if (processedValue === null || typeof processedValue === "undefined") {
      return this._maskService.applyMask("", mask);
    }
    return this._maskService.applyMask(`${processedValue}`, mask);
  }
  _setMask(value) {
    if (this._maskExpressionArray.length > 0) {
      this._maskExpressionArray.some((mask) => {
        const test = this._maskService.removeMask(value)?.length <= this._maskService.removeMask(mask)?.length;
        if (value && test) {
          this.mask = mask;
          return test;
        } else {
          this.mask = this._maskExpressionArray[this._maskExpressionArray.length - 1] ?? MaskExpression.EMPTY_STRING;
        }
      });
    }
  }
  static \u0275fac = function NgxMaskPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgxMaskPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
    name: "mask",
    type: _NgxMaskPipe,
    pure: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMaskPipe, [{
    type: Pipe,
    args: [{
      name: "mask",
      pure: true,
      standalone: true
    }]
  }], null, null);
})();

// src/app/pages/form/mask/mask.component.ts
var DEFAULT_DROPZONE_CONFIG = {
  url: "https://httpbin.org/post",
  maxFilesize: 50,
  acceptedFiles: "image/*"
};
var MaskComponent = class _MaskComponent {
  constructor() {
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Forms" }, { label: "Mask", active: true }];
  }
  static {
    this.\u0275fac = function MaskComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MaskComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MaskComponent, selectors: [["app-mask"]], features: [\u0275\u0275ProvidersFeature([
      provideNgxMask(),
      {
        provide: DROPZONE_CONFIG,
        useValue: DEFAULT_DROPZONE_CONFIG
      }
    ])], decls: 86, vars: 1, consts: [[1, "container-fluid"], ["title", "Form mask", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [1, "col-md-6"], ["action", "#"], [1, "mb-4"], ["type", "text", "mask", "00/00/0000", 1, "form-control"], [1, "text-muted"], ["type", "text", "mask", "00:00:00", 1, "form-control"], ["type", "text", "mask", "00/00/0000 00:00:00", 1, "form-control"], ["type", "text", "mask", "00000-000", 1, "form-control"], ["type", "text", "mask", "000.000.000.000.000,00", "data-reverse", "true", 1, "form-control"], ["type", "text", "mask", "0,0000,0000,0000", 1, "form-control"], ["type", "text", "mask", "0000-0000", 1, "form-control"], ["type", "text", "mask", "(00) 0000-0000", 1, "form-control"], ["type", "text", "mask", "(000) 000-0000", 1, "form-control"], ["type", "text", "mask", "(00) 00000-0000", 1, "form-control"], ["type", "text", "mask", "00.000.000/0000-00", "data-reverse", "true", 1, "form-control"], ["type", "text", "mask", "099.099.099.099", "data-reverse", "true", 1, "form-control"]], template: function MaskComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
        \u0275\u0275text(7, "Example");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "form")(9, "div", 2)(10, "div", 7)(11, "form", 8)(12, "div", 9)(13, "label");
        \u0275\u0275text(14, "Date");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "input", 10);
        \u0275\u0275elementStart(16, "span", 11);
        \u0275\u0275text(17, 'e.g "dd/mm/yyyy"');
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 9)(19, "label");
        \u0275\u0275text(20, "Hour");
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "input", 12);
        \u0275\u0275elementStart(22, "span", 11);
        \u0275\u0275text(23, 'e.g "hh:mm:ss"');
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 9)(25, "label");
        \u0275\u0275text(26, "Date & Hour");
        \u0275\u0275elementEnd();
        \u0275\u0275element(27, "input", 13);
        \u0275\u0275elementStart(28, "span", 11);
        \u0275\u0275text(29, 'e.g "dd/mm/yyyy hh:mm:ss"');
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 9)(31, "label");
        \u0275\u0275text(32, "ZIP Code");
        \u0275\u0275elementEnd();
        \u0275\u0275element(33, "input", 14);
        \u0275\u0275elementStart(34, "span", 11);
        \u0275\u0275text(35, 'e.g "xxxxx-xxx"');
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 9)(37, "label");
        \u0275\u0275text(38, "Money");
        \u0275\u0275elementEnd();
        \u0275\u0275element(39, "input", 15);
        \u0275\u0275elementStart(40, "span", 11);
        \u0275\u0275text(41, 'e.g "Your money"');
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 9)(43, "label");
        \u0275\u0275text(44, "4 digit Group");
        \u0275\u0275elementEnd();
        \u0275\u0275element(45, "input", 16);
        \u0275\u0275elementStart(46, "span", 11);
        \u0275\u0275text(47, 'e.g. "x,xxxx,xxxx,xxxx"');
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(48, "div", 7)(49, "form", 8)(50, "div", 9)(51, "label");
        \u0275\u0275text(52, "Telephone");
        \u0275\u0275elementEnd();
        \u0275\u0275element(53, "input", 17);
        \u0275\u0275elementStart(54, "span", 11);
        \u0275\u0275text(55, 'e.g "xxxx-xxxx"');
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "div", 9)(57, "label");
        \u0275\u0275text(58, "Telephone with Code Area");
        \u0275\u0275elementEnd();
        \u0275\u0275element(59, "input", 18);
        \u0275\u0275elementStart(60, "span", 11);
        \u0275\u0275text(61, 'e.g "(xx) xxxx-xxxx"');
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "div", 9)(63, "label");
        \u0275\u0275text(64, "US Telephone");
        \u0275\u0275elementEnd();
        \u0275\u0275element(65, "input", 19);
        \u0275\u0275elementStart(66, "span", 11);
        \u0275\u0275text(67, 'e.g "(xxx) xxx-xxxx"');
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "div", 9)(69, "label");
        \u0275\u0275text(70, "S\xE3o Paulo Celphones");
        \u0275\u0275elementEnd();
        \u0275\u0275element(71, "input", 20);
        \u0275\u0275elementStart(72, "span", 11);
        \u0275\u0275text(73, 'e.g "(xx) xxxxx-xxxx"');
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "div", 9)(75, "label");
        \u0275\u0275text(76, "CNPJ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(77, "input", 21);
        \u0275\u0275elementStart(78, "span", 11);
        \u0275\u0275text(79, 'e.g "xx.xxx.xxx/xxxx-xx"');
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(80, "div", 9)(81, "label");
        \u0275\u0275text(82, "IP Address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(83, "input", 22);
        \u0275\u0275elementStart(84, "span", 11);
        \u0275\u0275text(85, 'e.g "xxx.xxx.xxx.xxx"');
        \u0275\u0275elementEnd()()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
      }
    }, dependencies: [PagetitleComponent, NgxMaskDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaskComponent, [{
    type: Component,
    args: [{ selector: "app-mask", imports: [PagetitleComponent, NgxMaskDirective], providers: [
      provideNgxMask(),
      {
        provide: DROPZONE_CONFIG,
        useValue: DEFAULT_DROPZONE_CONFIG
      }
    ], template: '<div class="container-fluid">\r\n\r\n  <!-- start page title -->\r\n  <app-page-title title="Form mask" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r\n  <!-- end page title -->\r\n  <div class="row">\r\n    <div class="col-lg-12">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title mb-4">Example</h4>\r\n          <form>\r\n            <div class="row">\r\n              <div class="col-md-6">\r\n                <form action="#">\r\n                  <div class="mb-4">\r\n                    <label>Date</label>\r\n                    <input type="text" class="form-control" mask="00/00/0000">\r\n                    <span class="text-muted">e.g "dd/mm/yyyy"</span>\r\n                  </div>\r\n                  <div class="mb-4">\r\n                    <label>Hour</label>\r\n                    <input type="text" class="form-control" mask="00:00:00">\r\n                    <span class="text-muted">e.g "hh:mm:ss"</span>\r\n                  </div>\r\n                  <div class="mb-4">\r\n                    <label>Date & Hour</label>\r\n                    <input type="text" class="form-control" mask="00/00/0000 00:00:00">\r\n                    <span class="text-muted">e.g "dd/mm/yyyy hh:mm:ss"</span>\r\n                  </div>\r\n                  <div class="mb-4">\r\n                    <label>ZIP Code</label>\r\n                    <input type="text" class="form-control" mask="00000-000">\r\n                    <span class="text-muted">e.g "xxxxx-xxx"</span>\r\n                  </div>\r\n                  <div class="mb-4">\r\n                    <label>Money</label>\r\n                    <input type="text" class="form-control" mask="000.000.000.000.000,00" data-reverse="true">\r\n                    <span class="text-muted">e.g "Your money"</span>\r\n                  </div>\r\n                  <div class="mb-4">\r\n                    <label>4 digit Group</label>\r\n                    <input type="text" class="form-control" mask="0,0000,0000,0000">\r\n                    <span class="text-muted">e.g. "x,xxxx,xxxx,xxxx"</span>\r\n                  </div>\r\n\r\n                </form>\r\n              </div> <!-- end col -->\r\n              <div class="col-md-6">\r\n                <form action="#">\r\n                  <div class="mb-4">\r\n                    <label>Telephone</label>\r\n                    <input type="text" class="form-control" mask="0000-0000">\r\n                    <span class="text-muted">e.g "xxxx-xxxx"</span>\r\n                  </div>\r\n                  <div class="mb-4">\r\n                    <label>Telephone with Code Area</label>\r\n                    <input type="text" class="form-control" mask="(00) 0000-0000">\r\n                    <span class="text-muted">e.g "(xx) xxxx-xxxx"</span>\r\n                  </div>\r\n                  <div class="mb-4">\r\n                    <label>US Telephone</label>\r\n                    <input type="text" class="form-control" mask="(000) 000-0000">\r\n                    <span class="text-muted">e.g "(xxx) xxx-xxxx"</span>\r\n                  </div>\r\n                  <div class="mb-4">\r\n                    <label>S\xE3o Paulo Celphones</label>\r\n                    <input type="text" class="form-control" mask="(00) 00000-0000">\r\n                    <span class="text-muted">e.g "(xx) xxxxx-xxxx"</span>\r\n                  </div>\r\n                  <div class="mb-4">\r\n                    <label>CNPJ</label>\r\n                    <input type="text" class="form-control" mask="00.000.000/0000-00" data-reverse="true">\r\n                    <span class="text-muted">e.g "xx.xxx.xxx/xxxx-xx"</span>\r\n                  </div>\r\n                  <div class="mb-4">\r\n                    <label>IP Address</label>\r\n                    <input type="text" class="form-control" mask="099.099.099.099" data-reverse="true">\r\n                    <span class="text-muted">e.g "xxx.xxx.xxx.xxx"</span>\r\n                  </div>\r\n                </form>\r\n              </div> <!-- end col -->\r\n\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MaskComponent, { className: "MaskComponent", filePath: "src/app/pages/form/mask/mask.component.ts", lineNumber: 28 });
})();

// node_modules/ngx-ui-switch/fesm2022/ngx-ui-switch.mjs
var _c02 = ["*"];
function UiSwitchComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 2)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getLabelClass("checked"));
    \u0275\u0275styleProp("color", ctx_r0.getColor("checkedTextColor"));
    \u0275\u0275attribute("aria-label", ctx_r0.checkedLabel);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.checkedLabel);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getLabelClass("unchecked"));
    \u0275\u0275styleProp("color", ctx_r0.getColor("uncheckedTextColor"));
    \u0275\u0275attribute("aria-label", ctx_r0.uncheckedLabel);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.uncheckedLabel);
  }
}
var UI_SWITCH_OPTIONS = new InjectionToken("UI_SWITCH_OPTIONS");
var UI_SWITCH_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => UiSwitchComponent),
  multi: true
};
var UiSwitchComponent = class _UiSwitchComponent {
  cdr;
  _checked;
  _disabled;
  _reverse;
  _loading;
  _beforeChange;
  size;
  color;
  switchOffColor;
  switchColor;
  defaultBgColor;
  defaultBoColor;
  checkedLabel;
  uncheckedLabel;
  checkedTextColor;
  uncheckedTextColor;
  beforeChange;
  ariaLabel;
  set checked(v) {
    this._checked = v !== false;
  }
  get checked() {
    return this._checked;
  }
  set disabled(v) {
    this._disabled = v !== false;
  }
  get disabled() {
    return this._disabled;
  }
  set reverse(v) {
    this._reverse = v !== false;
  }
  get reverse() {
    return this._reverse;
  }
  set loading(v) {
    this._loading = v !== false;
  }
  get loading() {
    return this._loading;
  }
  /**
   * Emits changed value
   */
  // eslint-disable-next-line @angular-eslint/no-output-native
  change = new EventEmitter();
  /**
   * Emits DOM event
   */
  changeEvent = new EventEmitter();
  /**
   * Emits changed value
   */
  valueChange = new EventEmitter();
  constructor(config = {}, cdr) {
    this.cdr = cdr;
    this.size = config && config.size || "medium";
    this.color = config && config.color;
    this.switchOffColor = config && config.switchOffColor;
    this.switchColor = config && config.switchColor;
    this.defaultBgColor = config && config.defaultBgColor;
    this.defaultBoColor = config && config.defaultBoColor;
    this.checkedLabel = config && config.checkedLabel;
    this.uncheckedLabel = config && config.uncheckedLabel;
    this.checkedTextColor = config && config.checkedTextColor;
    this.uncheckedTextColor = config && config.uncheckedTextColor;
  }
  getColor(flag = "") {
    if (flag === "borderColor") {
      return this.defaultBoColor;
    }
    if (flag === "switchColor") {
      if (this.reverse) {
        return !this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
      }
      return this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
    }
    if (flag === "checkedTextColor") {
      return this.reverse ? this.uncheckedTextColor : this.checkedTextColor;
    }
    if (flag === "uncheckedTextColor") {
      return this.reverse ? this.checkedTextColor : this.uncheckedTextColor;
    }
    if (this.reverse) {
      return !this.checked ? this.color : this.defaultBgColor;
    }
    return this.checked ? this.color : this.defaultBgColor;
  }
  getLabelClass(labelType) {
    const checked = labelType === (this.reverse ? "unchecked" : "checked");
    return checked ? "switch-label-checked" : "switch-label-unchecked";
  }
  onClick(event) {
    if (this.disabled) {
      return;
    }
    this.checked = !this.checked;
    this.change.emit(this.checked);
    this.valueChange.emit(this.checked);
    this.changeEvent.emit(event);
    this.onChangeCallback(this.checked);
    this.onTouchedCallback(this.checked);
    this.cdr.markForCheck();
  }
  onToggle(event) {
    if (this.disabled) {
      return;
    }
    if (this.beforeChange) {
      this._beforeChange = this.beforeChange.subscribe((confirm2) => {
        if (confirm2) {
          this.onClick(event);
        }
      });
    } else {
      this.onClick(event);
    }
  }
  writeValue(obj) {
    if (obj !== this.checked) {
      this.checked = !!obj;
    }
    if (this.cdr) {
      this.cdr.markForCheck();
    }
  }
  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn) {
    this.onTouchedCallback = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  onTouchedCallback = (v) => {
  };
  onChangeCallback = (v) => {
  };
  ngOnDestroy() {
    if (this._beforeChange) {
      this._beforeChange.unsubscribe();
    }
  }
  static \u0275fac = function UiSwitchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UiSwitchComponent)(\u0275\u0275directiveInject(UI_SWITCH_OPTIONS, 8), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _UiSwitchComponent,
    selectors: [["ui-switch"]],
    hostBindings: function UiSwitchComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function UiSwitchComponent_click_HostBindingHandler($event) {
          return ctx.onToggle($event);
        });
      }
    },
    inputs: {
      size: "size",
      color: "color",
      switchOffColor: "switchOffColor",
      switchColor: "switchColor",
      defaultBgColor: "defaultBgColor",
      defaultBoColor: "defaultBoColor",
      checkedLabel: "checkedLabel",
      uncheckedLabel: "uncheckedLabel",
      checkedTextColor: "checkedTextColor",
      uncheckedTextColor: "uncheckedTextColor",
      beforeChange: "beforeChange",
      ariaLabel: "ariaLabel",
      checked: "checked",
      disabled: "disabled",
      reverse: "reverse",
      loading: "loading"
    },
    outputs: {
      change: "change",
      changeEvent: "changeEvent",
      valueChange: "valueChange"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([UI_SWITCH_CONTROL_VALUE_ACCESSOR])],
    ngContentSelectors: _c02,
    decls: 4,
    vars: 21,
    consts: [["type", "button", "role", "switch", 1, "switch"], ["class", "switch-pane", 4, "ngIf"], [1, "switch-pane"]],
    template: function UiSwitchComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "button", 0);
        \u0275\u0275template(1, UiSwitchComponent_label_1_Template, 5, 12, "label", 1);
        \u0275\u0275elementStart(2, "small");
        \u0275\u0275projection(3);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("background-color", ctx.getColor())("border-color", ctx.getColor("borderColor"));
        \u0275\u0275classProp("checked", ctx.reverse ? !ctx.checked : ctx.checked)("disabled", ctx.disabled)("loading", ctx.loading)("switch-large", ctx.size === "large")("switch-medium", ctx.size === "medium")("switch-small", ctx.size === "small");
        \u0275\u0275attribute("aria-checked", ctx.reverse ? !ctx.checked : ctx.checked)("aria-label", ctx.ariaLabel);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.checkedLabel || ctx.uncheckedLabel);
        \u0275\u0275advance();
        \u0275\u0275styleProp("background", ctx.getColor("switchColor"));
      }
    },
    dependencies: [NgIf],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UiSwitchComponent, [{
    type: Component,
    args: [{
      selector: "ui-switch",
      providers: [UI_SWITCH_CONTROL_VALUE_ACCESSOR],
      template: `<button
  type="button"
  class="switch"
  role="switch"
  [attr.aria-checked]="reverse ? !checked : checked"
  [attr.aria-label]="ariaLabel"
  [class.checked]="reverse ? !checked : checked"
  [class.disabled]="disabled"
  [class.loading]="loading"
  [class.switch-large]="size === 'large'"
  [class.switch-medium]="size === 'medium'"
  [class.switch-small]="size === 'small'"
  [style.background-color]="getColor()"
  [style.border-color]="getColor('borderColor')"
>
  <label class="switch-pane" *ngIf="checkedLabel || uncheckedLabel">
    <span
      [attr.aria-label]="this.checkedLabel"
      [class]="getLabelClass('checked')"
      [style.color]="getColor('checkedTextColor')"
      >{{ this.checkedLabel }}</span
    >
    <span
      [attr.aria-label]="this.uncheckedLabel"
      [class]="getLabelClass('unchecked')"
      [style.color]="getColor('uncheckedTextColor')"
      >{{ this.uncheckedLabel }}</span
    >
  </label>
  <small [style.background]="getColor('switchColor')">
    <ng-content></ng-content>
  </small>
</button>
`
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [UI_SWITCH_OPTIONS]
      }, {
        type: Optional
      }]
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    size: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    switchOffColor: [{
      type: Input
    }],
    switchColor: [{
      type: Input
    }],
    defaultBgColor: [{
      type: Input
    }],
    defaultBoColor: [{
      type: Input
    }],
    checkedLabel: [{
      type: Input
    }],
    uncheckedLabel: [{
      type: Input
    }],
    checkedTextColor: [{
      type: Input
    }],
    uncheckedTextColor: [{
      type: Input
    }],
    beforeChange: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    checked: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    reverse: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    changeEvent: [{
      type: Output
    }],
    valueChange: [{
      type: Output
    }],
    onToggle: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var UiSwitchModule = class _UiSwitchModule {
  static forRoot(config) {
    return {
      ngModule: _UiSwitchModule,
      providers: [{
        provide: UI_SWITCH_OPTIONS,
        useValue: config || {}
      }]
    };
  }
  static \u0275fac = function UiSwitchModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UiSwitchModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _UiSwitchModule,
    declarations: [UiSwitchComponent],
    imports: [CommonModule, FormsModule],
    exports: [FormsModule, UiSwitchComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, FormsModule, FormsModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UiSwitchModule, [{
    type: NgModule,
    args: [{
      declarations: [UiSwitchComponent],
      imports: [CommonModule, FormsModule],
      exports: [FormsModule, UiSwitchComponent]
    }]
  }], null, null);
})();

// node_modules/ngx-color-picker/fesm2020/ngx-color-picker.mjs
var _c03 = ["dialogPopup"];
var _c12 = ["hueSlider"];
var _c2 = ["alphaSlider"];
function ColorPickerComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(\u0275\u0275interpolate1("arrow arrow-", ctx_r1.cpUsePosition));
    \u0275\u0275styleProp("top", ctx_r1.arrowTop, "px");
  }
}
function ColorPickerComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("newValue", function ColorPickerComponent_div_3_Template_div_newValue_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onColorChange($event));
    })("dragStart", function ColorPickerComponent_div_3_Template_div_dragStart_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragStart("saturation-lightness"));
    })("dragEnd", function ColorPickerComponent_div_3_Template_div_dragEnd_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragEnd("saturation-lightness"));
    });
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r1.hueSliderColor);
    \u0275\u0275property("rgX", 1)("rgY", 1);
    \u0275\u0275advance();
    \u0275\u0275styleProp("top", ctx_r1.slider == null ? null : ctx_r1.slider.v, "px")("left", ctx_r1.slider == null ? null : ctx_r1.slider.s, "px");
  }
}
function ColorPickerComponent__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 29);
    \u0275\u0275element(1, "path", 30)(2, "path", 31);
    \u0275\u0275elementEnd();
  }
}
function ColorPickerComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function ColorPickerComponent_button_9_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAddPresetColor($event, ctx_r1.selectedColor));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cpAddColorButtonClass);
    \u0275\u0275property("disabled", ctx_r1.cpPresetColors && ctx_r1.cpPresetColors.length >= ctx_r1.cpMaxPresetColorsLength);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.cpAddColorButtonText, " ");
  }
}
function ColorPickerComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 33);
  }
}
function ColorPickerComponent_div_21_input_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 39);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_21_input_6_Template_input_keyup_enter_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_input_6_Template_input_newValue_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAlphaInput($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("rg", 1)("value", ctx_r1.cmykText == null ? null : ctx_r1.cmykText.a);
  }
}
function ColorPickerComponent_div_21_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "A");
    \u0275\u0275elementEnd();
  }
}
function ColorPickerComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCyanInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMagentaInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onYellowInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBlackInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ColorPickerComponent_div_21_input_6_Template, 1, 2, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 35)(8, "div");
    \u0275\u0275text(9, "C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11, "M");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div");
    \u0275\u0275text(13, "Y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div");
    \u0275\u0275text(15, "K");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, ColorPickerComponent_div_21_div_16_Template, 2, 0, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r1.format !== 3 ? "none" : "block");
    \u0275\u0275advance(2);
    \u0275\u0275property("rg", 100)("value", ctx_r1.cmykText == null ? null : ctx_r1.cmykText.c);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 100)("value", ctx_r1.cmykText == null ? null : ctx_r1.cmykText.m);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 100)("value", ctx_r1.cmykText == null ? null : ctx_r1.cmykText.y);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 100)("value", ctx_r1.cmykText == null ? null : ctx_r1.cmykText.k);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
  }
}
function ColorPickerComponent_div_22_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 39);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_22_input_5_Template_input_keyup_enter_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_22_input_5_Template_input_newValue_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAlphaInput($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("rg", 1)("value", ctx_r1.hslaText == null ? null : ctx_r1.hslaText.a);
  }
}
function ColorPickerComponent_div_22_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "A");
    \u0275\u0275elementEnd();
  }
}
function ColorPickerComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 35)(2, "input", 41);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHueInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSaturationInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLightnessInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ColorPickerComponent_div_22_input_5_Template, 1, 2, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 35)(7, "div");
    \u0275\u0275text(8, "H");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275text(10, "S");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275text(12, "L");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ColorPickerComponent_div_22_div_13_Template, 2, 0, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r1.format !== 2 ? "none" : "block");
    \u0275\u0275advance(2);
    \u0275\u0275property("rg", 360)("value", ctx_r1.hslaText == null ? null : ctx_r1.hslaText.h);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 100)("value", ctx_r1.hslaText == null ? null : ctx_r1.hslaText.s);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 100)("value", ctx_r1.hslaText == null ? null : ctx_r1.hslaText.l);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
  }
}
function ColorPickerComponent_div_23_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 39);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_23_input_5_Template_input_keyup_enter_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_23_input_5_Template_input_newValue_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAlphaInput($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("rg", 1)("value", ctx_r1.rgbaText == null ? null : ctx_r1.rgbaText.a);
  }
}
function ColorPickerComponent_div_23_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "A");
    \u0275\u0275elementEnd();
  }
}
function ColorPickerComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 35)(2, "input", 43);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_23_Template_input_keyup_enter_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_23_Template_input_newValue_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRedInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 43);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_23_Template_input_keyup_enter_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_23_Template_input_newValue_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onGreenInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 43);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_23_Template_input_keyup_enter_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_23_Template_input_newValue_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBlueInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ColorPickerComponent_div_23_input_5_Template, 1, 2, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 35)(7, "div");
    \u0275\u0275text(8, "R");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275text(10, "G");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275text(12, "B");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ColorPickerComponent_div_23_div_13_Template, 2, 0, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r1.format !== 1 ? "none" : "block");
    \u0275\u0275advance(2);
    \u0275\u0275property("rg", 255)("value", ctx_r1.rgbaText == null ? null : ctx_r1.rgbaText.r);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 255)("value", ctx_r1.rgbaText == null ? null : ctx_r1.rgbaText.g);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 255)("value", ctx_r1.rgbaText == null ? null : ctx_r1.rgbaText.b);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
  }
}
function ColorPickerComponent_div_24_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 39);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_24_input_3_Template_input_keyup_enter_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_24_input_3_Template_input_newValue_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAlphaInput($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("rg", 1)("value", ctx_r1.hexAlpha);
  }
}
function ColorPickerComponent_div_24_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "A");
    \u0275\u0275elementEnd();
  }
}
function ColorPickerComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 35)(2, "input", 45);
    \u0275\u0275listener("blur", function ColorPickerComponent_div_24_Template_input_blur_2_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHexInput(null));
    })("keyup.enter", function ColorPickerComponent_div_24_Template_input_keyup_enter_2_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_24_Template_input_newValue_2_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHexInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ColorPickerComponent_div_24_input_3_Template, 1, 2, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35)(5, "div");
    \u0275\u0275text(6, "Hex");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ColorPickerComponent_div_24_div_7_Template, 2, 0, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r1.format !== 0 ? "none" : "block");
    \u0275\u0275classProp("hex-alpha", ctx_r1.cpAlphaChannel === "forced");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.hexText);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel === "forced");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel === "forced");
  }
}
function ColorPickerComponent_div_25_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 39);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_25_input_3_Template_input_keyup_enter_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_25_input_3_Template_input_newValue_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAlphaInput($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("rg", 1)("value", ctx_r1.hslaText == null ? null : ctx_r1.hslaText.a);
  }
}
function ColorPickerComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 35)(2, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_25_Template_input_keyup_enter_2_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_25_Template_input_newValue_2_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onValueInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ColorPickerComponent_div_25_input_3_Template, 1, 2, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35)(5, "div");
    \u0275\u0275text(6, "V");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div");
    \u0275\u0275text(8, "A");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("rg", 100)("value", ctx_r1.hslaText == null ? null : ctx_r1.hslaText.l);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
  }
}
function ColorPickerComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 48);
    \u0275\u0275listener("click", function ColorPickerComponent_div_26_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFormatToggle(-1));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 48);
    \u0275\u0275listener("click", function ColorPickerComponent_div_26_Template_span_click_2_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFormatToggle(1));
    });
    \u0275\u0275elementEnd()();
  }
}
function ColorPickerComponent_div_27_div_4_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275listener("click", function ColorPickerComponent_div_27_div_4_div_1_span_1_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      const color_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onRemovePresetColor($event, color_r17));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cpRemoveColorButtonClass);
  }
}
function ColorPickerComponent_div_27_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275listener("click", function ColorPickerComponent_div_27_div_4_div_1_Template_div_click_0_listener() {
      const color_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setColorFromString(color_r17));
    });
    \u0275\u0275template(1, ColorPickerComponent_div_27_div_4_div_1_span_1_Template, 1, 2, "span", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const color_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background-color", color_r17);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpAddColorButton);
  }
}
function ColorPickerComponent_div_27_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, ColorPickerComponent_div_27_div_4_div_1_Template, 2, 3, "div", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cpPresetColorsClass);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.cpPresetColors);
  }
}
function ColorPickerComponent_div_27_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cpPresetEmptyMessageClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.cpPresetEmptyMessage);
  }
}
function ColorPickerComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "hr");
    \u0275\u0275elementStart(2, "div", 50);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ColorPickerComponent_div_27_div_4_Template, 2, 3, "div", 51)(5, ColorPickerComponent_div_27_div_5_Template, 2, 3, "div", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.cpPresetLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpPresetColors == null ? null : ctx_r1.cpPresetColors.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.cpPresetColors == null ? null : ctx_r1.cpPresetColors.length) && ctx_r1.cpAddColorButton);
  }
}
function ColorPickerComponent_div_28_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function ColorPickerComponent_div_28_button_1_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCancelColor($event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cpCancelButtonClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.cpCancelButtonText);
  }
}
function ColorPickerComponent_div_28_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function ColorPickerComponent_div_28_button_2_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cpOKButtonClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.cpOKButtonText);
  }
}
function ColorPickerComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275template(1, ColorPickerComponent_div_28_button_1_Template, 2, 3, "button", 57)(2, ColorPickerComponent_div_28_button_2_Template, 2, 3, "button", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpCancelButton);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpOKButton);
  }
}
function ColorPickerComponent_div_29_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ColorPickerComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275template(1, ColorPickerComponent_div_29_ng_container_1_Template, 1, 0, "ng-container", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.cpExtraTemplate);
  }
}
var ColorFormats;
(function(ColorFormats2) {
  ColorFormats2[ColorFormats2["HEX"] = 0] = "HEX";
  ColorFormats2[ColorFormats2["RGBA"] = 1] = "RGBA";
  ColorFormats2[ColorFormats2["HSLA"] = 2] = "HSLA";
  ColorFormats2[ColorFormats2["CMYK"] = 3] = "CMYK";
})(ColorFormats || (ColorFormats = {}));
var Rgba = class {
  constructor(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
};
var Hsva = class {
  constructor(h, s, v, a) {
    this.h = h;
    this.s = s;
    this.v = v;
    this.a = a;
  }
};
var Hsla = class {
  constructor(h, s, l, a) {
    this.h = h;
    this.s = s;
    this.l = l;
    this.a = a;
  }
};
var Cmyk = class {
  constructor(c, m, y, k, a = 1) {
    this.c = c;
    this.m = m;
    this.y = y;
    this.k = k;
    this.a = a;
  }
};
function calculateAutoPositioning(elBounds, triggerElBounds) {
  let usePositionX = "right";
  let usePositionY = "bottom";
  const {
    height,
    width
  } = elBounds;
  const {
    top,
    left
  } = triggerElBounds;
  const bottom = top + triggerElBounds.height;
  const right = left + triggerElBounds.width;
  const collisionTop = top - height < 0;
  const collisionBottom = bottom + height > (window.innerHeight || document.documentElement.clientHeight);
  const collisionLeft = left - width < 0;
  const collisionRight = right + width > (window.innerWidth || document.documentElement.clientWidth);
  const collisionAll = collisionTop && collisionBottom && collisionLeft && collisionRight;
  if (collisionBottom) {
    usePositionY = "top";
  }
  if (collisionTop) {
    usePositionY = "bottom";
  }
  if (collisionLeft) {
    usePositionX = "right";
  }
  if (collisionRight) {
    usePositionX = "left";
  }
  if (collisionAll) {
    const postions = ["left", "right", "top", "bottom"];
    return postions.reduce((prev, next) => elBounds[prev] > elBounds[next] ? prev : next);
  }
  if (collisionLeft && collisionRight) {
    if (collisionTop) {
      return "bottom";
    }
    if (collisionBottom) {
      return "top";
    }
    return top > bottom ? "top" : "bottom";
  }
  if (collisionTop && collisionBottom) {
    if (collisionLeft) {
      return "right";
    }
    if (collisionRight) {
      return "left";
    }
    return left > right ? "left" : "right";
  }
  return `${usePositionY}-${usePositionX}`;
}
function detectIE() {
  let ua = "";
  if (typeof navigator !== "undefined") {
    ua = navigator.userAgent.toLowerCase();
  }
  const msie = ua.indexOf("msie ");
  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
  }
  return false;
}
var TextDirective = class {
  constructor() {
    this.newValue = new EventEmitter();
  }
  inputChange(event) {
    const value = event.target.value;
    if (this.rg === void 0) {
      this.newValue.emit(value);
    } else {
      const numeric = parseFloat(value);
      this.newValue.emit({
        v: numeric,
        rg: this.rg
      });
    }
  }
};
TextDirective.\u0275fac = function TextDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TextDirective)();
};
TextDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: TextDirective,
  selectors: [["", "text", ""]],
  hostBindings: function TextDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("input", function TextDirective_input_HostBindingHandler($event) {
        return ctx.inputChange($event);
      });
    }
  },
  inputs: {
    rg: "rg",
    text: "text"
  },
  outputs: {
    newValue: "newValue"
  },
  standalone: false
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextDirective, [{
    type: Directive,
    args: [{
      selector: "[text]"
    }]
  }], null, {
    rg: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    newValue: [{
      type: Output
    }],
    inputChange: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }]
  });
})();
var SliderDirective = class {
  constructor(elRef) {
    this.elRef = elRef;
    this.dragEnd = new EventEmitter();
    this.dragStart = new EventEmitter();
    this.newValue = new EventEmitter();
    this.listenerMove = (event) => this.move(event);
    this.listenerStop = () => this.stop();
  }
  mouseDown(event) {
    this.start(event);
  }
  touchStart(event) {
    this.start(event);
  }
  move(event) {
    event.preventDefault();
    this.setCursor(event);
  }
  start(event) {
    this.setCursor(event);
    event.stopPropagation();
    document.addEventListener("mouseup", this.listenerStop);
    document.addEventListener("touchend", this.listenerStop);
    document.addEventListener("mousemove", this.listenerMove);
    document.addEventListener("touchmove", this.listenerMove);
    this.dragStart.emit();
  }
  stop() {
    document.removeEventListener("mouseup", this.listenerStop);
    document.removeEventListener("touchend", this.listenerStop);
    document.removeEventListener("mousemove", this.listenerMove);
    document.removeEventListener("touchmove", this.listenerMove);
    this.dragEnd.emit();
  }
  getX(event) {
    const position = this.elRef.nativeElement.getBoundingClientRect();
    const pageX = event.pageX !== void 0 ? event.pageX : event.touches[0].pageX;
    return pageX - position.left - window.pageXOffset;
  }
  getY(event) {
    const position = this.elRef.nativeElement.getBoundingClientRect();
    const pageY = event.pageY !== void 0 ? event.pageY : event.touches[0].pageY;
    return pageY - position.top - window.pageYOffset;
  }
  setCursor(event) {
    const width = this.elRef.nativeElement.offsetWidth;
    const height = this.elRef.nativeElement.offsetHeight;
    const x = Math.max(0, Math.min(this.getX(event), width));
    const y = Math.max(0, Math.min(this.getY(event), height));
    if (this.rgX !== void 0 && this.rgY !== void 0) {
      this.newValue.emit({
        s: x / width,
        v: 1 - y / height,
        rgX: this.rgX,
        rgY: this.rgY
      });
    } else if (this.rgX === void 0 && this.rgY !== void 0) {
      this.newValue.emit({
        v: y / height,
        rgY: this.rgY
      });
    } else if (this.rgX !== void 0 && this.rgY === void 0) {
      this.newValue.emit({
        v: x / width,
        rgX: this.rgX
      });
    }
  }
};
SliderDirective.\u0275fac = function SliderDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SliderDirective)(\u0275\u0275directiveInject(ElementRef));
};
SliderDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: SliderDirective,
  selectors: [["", "slider", ""]],
  hostBindings: function SliderDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("mousedown", function SliderDirective_mousedown_HostBindingHandler($event) {
        return ctx.mouseDown($event);
      })("touchstart", function SliderDirective_touchstart_HostBindingHandler($event) {
        return ctx.touchStart($event);
      });
    }
  },
  inputs: {
    rgX: "rgX",
    rgY: "rgY",
    slider: "slider"
  },
  outputs: {
    dragEnd: "dragEnd",
    dragStart: "dragStart",
    newValue: "newValue"
  },
  standalone: false
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderDirective, [{
    type: Directive,
    args: [{
      selector: "[slider]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    rgX: [{
      type: Input
    }],
    rgY: [{
      type: Input
    }],
    slider: [{
      type: Input
    }],
    dragEnd: [{
      type: Output
    }],
    dragStart: [{
      type: Output
    }],
    newValue: [{
      type: Output
    }],
    mouseDown: [{
      type: HostListener,
      args: ["mousedown", ["$event"]]
    }],
    touchStart: [{
      type: HostListener,
      args: ["touchstart", ["$event"]]
    }]
  });
})();
var SliderPosition = class {
  constructor(h, s, v, a) {
    this.h = h;
    this.s = s;
    this.v = v;
    this.a = a;
  }
};
var SliderDimension = class {
  constructor(h, s, v, a) {
    this.h = h;
    this.s = s;
    this.v = v;
    this.a = a;
  }
};
var ColorPickerService = class {
  constructor() {
    this.active = null;
  }
  setActive(active) {
    if (this.active && this.active !== active && this.active.cpDialogDisplay !== "inline") {
      this.active.closeDialog();
    }
    this.active = active;
  }
  hsva2hsla(hsva) {
    const h = hsva.h, s = hsva.s, v = hsva.v, a = hsva.a;
    if (v === 0) {
      return new Hsla(h, 0, 0, a);
    } else if (s === 0 && v === 1) {
      return new Hsla(h, 1, 1, a);
    } else {
      const l = v * (2 - s) / 2;
      return new Hsla(h, v * s / (1 - Math.abs(2 * l - 1)), l, a);
    }
  }
  hsla2hsva(hsla) {
    const h = Math.min(hsla.h, 1), s = Math.min(hsla.s, 1);
    const l = Math.min(hsla.l, 1), a = Math.min(hsla.a, 1);
    if (l === 0) {
      return new Hsva(h, 0, 0, a);
    } else {
      const v = l + s * (1 - Math.abs(2 * l - 1)) / 2;
      return new Hsva(h, 2 * (v - l) / v, v, a);
    }
  }
  hsvaToRgba(hsva) {
    let r, g, b;
    const h = hsva.h, s = hsva.s, v = hsva.v, a = hsva.a;
    const i = Math.floor(h * 6);
    const f = h * 6 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
    switch (i % 6) {
      case 0:
        r = v, g = t, b = p;
        break;
      case 1:
        r = q, g = v, b = p;
        break;
      case 2:
        r = p, g = v, b = t;
        break;
      case 3:
        r = p, g = q, b = v;
        break;
      case 4:
        r = t, g = p, b = v;
        break;
      case 5:
        r = v, g = p, b = q;
        break;
      default:
        r = 0, g = 0, b = 0;
    }
    return new Rgba(r, g, b, a);
  }
  cmykToRgb(cmyk) {
    const r = (1 - cmyk.c) * (1 - cmyk.k);
    const g = (1 - cmyk.m) * (1 - cmyk.k);
    const b = (1 - cmyk.y) * (1 - cmyk.k);
    return new Rgba(r, g, b, cmyk.a);
  }
  rgbaToCmyk(rgba) {
    const k = 1 - Math.max(rgba.r, rgba.g, rgba.b);
    if (k === 1) {
      return new Cmyk(0, 0, 0, 1, rgba.a);
    } else {
      const c = (1 - rgba.r - k) / (1 - k);
      const m = (1 - rgba.g - k) / (1 - k);
      const y = (1 - rgba.b - k) / (1 - k);
      return new Cmyk(c, m, y, k, rgba.a);
    }
  }
  rgbaToHsva(rgba) {
    let h, s;
    const r = Math.min(rgba.r, 1), g = Math.min(rgba.g, 1);
    const b = Math.min(rgba.b, 1), a = Math.min(rgba.a, 1);
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const v = max, d = max - min;
    s = max === 0 ? 0 : d / max;
    if (max === min) {
      h = 0;
    } else {
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
        default:
          h = 0;
      }
      h /= 6;
    }
    return new Hsva(h, s, v, a);
  }
  rgbaToHex(rgba, allowHex8) {
    let hex = "#" + (1 << 24 | rgba.r << 16 | rgba.g << 8 | rgba.b).toString(16).substr(1);
    if (allowHex8) {
      hex += (1 << 8 | Math.round(rgba.a * 255)).toString(16).substr(1);
    }
    return hex;
  }
  normalizeCMYK(cmyk) {
    return new Cmyk(cmyk.c / 100, cmyk.m / 100, cmyk.y / 100, cmyk.k / 100, cmyk.a);
  }
  denormalizeCMYK(cmyk) {
    return new Cmyk(Math.floor(cmyk.c * 100), Math.floor(cmyk.m * 100), Math.floor(cmyk.y * 100), Math.floor(cmyk.k * 100), cmyk.a);
  }
  denormalizeRGBA(rgba) {
    return new Rgba(Math.round(rgba.r * 255), Math.round(rgba.g * 255), Math.round(rgba.b * 255), rgba.a);
  }
  stringToHsva(colorString = "", allowHex8 = false) {
    let hsva = null;
    colorString = (colorString || "").toLowerCase();
    const stringParsers = [{
      re: /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
      parse: function(execResult) {
        return new Rgba(parseInt(execResult[2], 10) / 255, parseInt(execResult[3], 10) / 255, parseInt(execResult[4], 10) / 255, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
      }
    }, {
      re: /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
      parse: function(execResult) {
        return new Hsla(parseInt(execResult[2], 10) / 360, parseInt(execResult[3], 10) / 100, parseInt(execResult[4], 10) / 100, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
      }
    }];
    if (allowHex8) {
      stringParsers.push({
        re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})?$/,
        parse: function(execResult) {
          return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, parseInt(execResult[4] || "FF", 16) / 255);
        }
      });
    } else {
      stringParsers.push({
        re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
        parse: function(execResult) {
          return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, 1);
        }
      });
    }
    stringParsers.push({
      re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
      parse: function(execResult) {
        return new Rgba(parseInt(execResult[1] + execResult[1], 16) / 255, parseInt(execResult[2] + execResult[2], 16) / 255, parseInt(execResult[3] + execResult[3], 16) / 255, 1);
      }
    });
    for (const key in stringParsers) {
      if (stringParsers.hasOwnProperty(key)) {
        const parser = stringParsers[key];
        const match = parser.re.exec(colorString), color = match && parser.parse(match);
        if (color) {
          if (color instanceof Rgba) {
            hsva = this.rgbaToHsva(color);
          } else if (color instanceof Hsla) {
            hsva = this.hsla2hsva(color);
          }
          return hsva;
        }
      }
    }
    return hsva;
  }
  outputFormat(hsva, outputFormat, alphaChannel) {
    if (outputFormat === "auto") {
      outputFormat = hsva.a < 1 ? "rgba" : "hex";
    }
    switch (outputFormat) {
      case "hsla":
        const hsla = this.hsva2hsla(hsva);
        const hslaText = new Hsla(Math.round(hsla.h * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
        if (hsva.a < 1 || alphaChannel === "always") {
          return "hsla(" + hslaText.h + "," + hslaText.s + "%," + hslaText.l + "%," + hslaText.a + ")";
        } else {
          return "hsl(" + hslaText.h + "," + hslaText.s + "%," + hslaText.l + "%)";
        }
      case "rgba":
        const rgba = this.denormalizeRGBA(this.hsvaToRgba(hsva));
        if (hsva.a < 1 || alphaChannel === "always") {
          return "rgba(" + rgba.r + "," + rgba.g + "," + rgba.b + "," + Math.round(rgba.a * 100) / 100 + ")";
        } else {
          return "rgb(" + rgba.r + "," + rgba.g + "," + rgba.b + ")";
        }
      default:
        const allowHex8 = alphaChannel === "always" || alphaChannel === "forced";
        return this.rgbaToHex(this.denormalizeRGBA(this.hsvaToRgba(hsva)), allowHex8);
    }
  }
};
ColorPickerService.\u0275fac = function ColorPickerService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ColorPickerService)();
};
ColorPickerService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: ColorPickerService,
  factory: ColorPickerService.\u0275fac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerService, [{
    type: Injectable
  }], null, null);
})();
var SUPPORTS_TOUCH = typeof window !== "undefined" && "ontouchstart" in window;
var ColorPickerComponent = class {
  constructor(ngZone, elRef, cdRef, document2, platformId, service) {
    this.ngZone = ngZone;
    this.elRef = elRef;
    this.cdRef = cdRef;
    this.document = document2;
    this.platformId = platformId;
    this.service = service;
    this.isIE10 = false;
    this.dialogArrowSize = 10;
    this.dialogArrowOffset = 15;
    this.dialogInputFields = [ColorFormats.HEX, ColorFormats.RGBA, ColorFormats.HSLA, ColorFormats.CMYK];
    this.useRootViewContainer = false;
    this.eyeDropperSupported = isPlatformBrowser(this.platformId) && "EyeDropper" in this.document.defaultView;
  }
  handleEsc(event) {
    if (this.show && this.cpDialogDisplay === "popup") {
      this.onCancelColor(event);
    }
  }
  handleEnter(event) {
    if (this.show && this.cpDialogDisplay === "popup") {
      this.onAcceptColor(event);
    }
  }
  ngOnInit() {
    this.slider = new SliderPosition(0, 0, 0, 0);
    const hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
    const alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
    this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
    if (this.cpCmykEnabled) {
      this.format = ColorFormats.CMYK;
    } else if (this.cpOutputFormat === "rgba") {
      this.format = ColorFormats.RGBA;
    } else if (this.cpOutputFormat === "hsla") {
      this.format = ColorFormats.HSLA;
    } else {
      this.format = ColorFormats.HEX;
    }
    this.listenerMouseDown = (event) => {
      this.onMouseDown(event);
    };
    this.listenerResize = () => {
      this.onResize();
    };
    this.openDialog(this.initialColor, false);
  }
  ngOnDestroy() {
    this.closeDialog();
  }
  ngAfterViewInit() {
    if (this.cpWidth !== 230 || this.cpDialogDisplay === "inline") {
      const hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
      const alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
      this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
      this.updateColorPicker(false);
      this.cdRef.detectChanges();
    }
  }
  openDialog(color, emit = true) {
    this.service.setActive(this);
    if (!this.width) {
      this.cpWidth = this.directiveElementRef.nativeElement.offsetWidth;
    }
    if (!this.height) {
      this.height = 320;
    }
    this.setInitialColor(color);
    this.setColorFromString(color, emit);
    this.openColorPicker();
  }
  closeDialog() {
    this.closeColorPicker();
  }
  setupDialog(instance, elementRef, color, cpWidth, cpHeight, cpDialogDisplay, cpFallbackColor, cpColorMode, cpCmykEnabled, cpAlphaChannel, cpOutputFormat, cpDisableInput, cpIgnoredElements, cpSaveClickOutside, cpCloseClickOutside, cpUseRootViewContainer, cpPosition, cpPositionOffset, cpPositionRelativeToArrow, cpPresetLabel, cpPresetColors, cpPresetColorsClass, cpMaxPresetColorsLength, cpPresetEmptyMessage, cpPresetEmptyMessageClass, cpOKButton, cpOKButtonClass, cpOKButtonText, cpCancelButton, cpCancelButtonClass, cpCancelButtonText, cpAddColorButton, cpAddColorButtonClass, cpAddColorButtonText, cpRemoveColorButtonClass, cpEyeDropper, cpTriggerElement, cpExtraTemplate) {
    this.setInitialColor(color);
    this.setColorMode(cpColorMode);
    this.isIE10 = detectIE() === 10;
    this.directiveInstance = instance;
    this.directiveElementRef = elementRef;
    this.cpDisableInput = cpDisableInput;
    this.cpCmykEnabled = cpCmykEnabled;
    this.cpAlphaChannel = cpAlphaChannel;
    this.cpOutputFormat = cpOutputFormat;
    this.cpDialogDisplay = cpDialogDisplay;
    this.cpIgnoredElements = cpIgnoredElements;
    this.cpSaveClickOutside = cpSaveClickOutside;
    this.cpCloseClickOutside = cpCloseClickOutside;
    this.useRootViewContainer = cpUseRootViewContainer;
    this.width = this.cpWidth = parseInt(cpWidth, 10);
    this.height = this.cpHeight = parseInt(cpHeight, 10);
    this.cpPosition = cpPosition;
    this.cpPositionOffset = parseInt(cpPositionOffset, 10);
    this.cpOKButton = cpOKButton;
    this.cpOKButtonText = cpOKButtonText;
    this.cpOKButtonClass = cpOKButtonClass;
    this.cpCancelButton = cpCancelButton;
    this.cpCancelButtonText = cpCancelButtonText;
    this.cpCancelButtonClass = cpCancelButtonClass;
    this.cpEyeDropper = cpEyeDropper;
    this.fallbackColor = cpFallbackColor || "#fff";
    this.setPresetConfig(cpPresetLabel, cpPresetColors);
    this.cpPresetColorsClass = cpPresetColorsClass;
    this.cpMaxPresetColorsLength = cpMaxPresetColorsLength;
    this.cpPresetEmptyMessage = cpPresetEmptyMessage;
    this.cpPresetEmptyMessageClass = cpPresetEmptyMessageClass;
    this.cpAddColorButton = cpAddColorButton;
    this.cpAddColorButtonText = cpAddColorButtonText;
    this.cpAddColorButtonClass = cpAddColorButtonClass;
    this.cpRemoveColorButtonClass = cpRemoveColorButtonClass;
    this.cpTriggerElement = cpTriggerElement;
    this.cpExtraTemplate = cpExtraTemplate;
    if (!cpPositionRelativeToArrow) {
      this.dialogArrowOffset = 0;
    }
    if (cpDialogDisplay === "inline") {
      this.dialogArrowSize = 0;
      this.dialogArrowOffset = 0;
    }
    if (cpOutputFormat === "hex" && cpAlphaChannel !== "always" && cpAlphaChannel !== "forced") {
      this.cpAlphaChannel = "disabled";
    }
  }
  setColorMode(mode) {
    switch (mode.toString().toUpperCase()) {
      case "1":
      case "C":
      case "COLOR":
        this.cpColorMode = 1;
        break;
      case "2":
      case "G":
      case "GRAYSCALE":
        this.cpColorMode = 2;
        break;
      case "3":
      case "P":
      case "PRESETS":
        this.cpColorMode = 3;
        break;
      default:
        this.cpColorMode = 1;
    }
  }
  setInitialColor(color) {
    this.initialColor = color;
  }
  setPresetConfig(cpPresetLabel, cpPresetColors) {
    this.cpPresetLabel = cpPresetLabel;
    this.cpPresetColors = cpPresetColors;
  }
  setColorFromString(value, emit = true, update = true) {
    let hsva;
    if (this.cpAlphaChannel === "always" || this.cpAlphaChannel === "forced") {
      hsva = this.service.stringToHsva(value, true);
      if (!hsva && !this.hsva) {
        hsva = this.service.stringToHsva(value, false);
      }
    } else {
      hsva = this.service.stringToHsva(value, false);
    }
    if (!hsva && !this.hsva) {
      hsva = this.service.stringToHsva(this.fallbackColor, false);
    }
    if (hsva) {
      this.hsva = hsva;
      this.sliderH = this.hsva.h;
      if (this.cpOutputFormat === "hex" && this.cpAlphaChannel === "disabled") {
        this.hsva.a = 1;
      }
      this.updateColorPicker(emit, update);
    }
  }
  onResize() {
    if (this.position === "fixed") {
      this.setDialogPosition();
    } else if (this.cpDialogDisplay !== "inline") {
      this.closeColorPicker();
    }
  }
  onDragEnd(slider) {
    this.directiveInstance.sliderDragEnd({
      slider,
      color: this.outputColor
    });
  }
  onDragStart(slider) {
    this.directiveInstance.sliderDragStart({
      slider,
      color: this.outputColor
    });
  }
  onMouseDown(event) {
    if (this.show && !this.isIE10 && this.cpDialogDisplay === "popup" && event.target !== this.directiveElementRef.nativeElement && !this.isDescendant(this.elRef.nativeElement, event.target) && !this.isDescendant(this.directiveElementRef.nativeElement, event.target) && this.cpIgnoredElements.filter((item) => item === event.target).length === 0) {
      this.ngZone.run(() => {
        if (this.cpSaveClickOutside) {
          this.directiveInstance.colorSelected(this.outputColor);
        } else {
          this.hsva = null;
          this.setColorFromString(this.initialColor, false);
          if (this.cpCmykEnabled) {
            this.directiveInstance.cmykChanged(this.cmykColor);
          }
          this.directiveInstance.colorChanged(this.initialColor);
          this.directiveInstance.colorCanceled();
        }
        if (this.cpCloseClickOutside) {
          this.closeColorPicker();
        }
      });
    }
  }
  onAcceptColor(event) {
    event.stopPropagation();
    if (this.outputColor) {
      this.directiveInstance.colorSelected(this.outputColor);
    }
    if (this.cpDialogDisplay === "popup") {
      this.closeColorPicker();
    }
  }
  onCancelColor(event) {
    this.hsva = null;
    event.stopPropagation();
    this.directiveInstance.colorCanceled();
    this.setColorFromString(this.initialColor, true);
    if (this.cpDialogDisplay === "popup") {
      if (this.cpCmykEnabled) {
        this.directiveInstance.cmykChanged(this.cmykColor);
      }
      this.directiveInstance.colorChanged(this.initialColor, true);
      this.closeColorPicker();
    }
  }
  onEyeDropper() {
    if (!this.eyeDropperSupported) return;
    const eyeDropper = new window.EyeDropper();
    eyeDropper.open().then((eyeDropperResult) => {
      this.setColorFromString(eyeDropperResult.sRGBHex, true);
    });
  }
  onFormatToggle(change) {
    const availableFormats = this.dialogInputFields.length - (this.cpCmykEnabled ? 0 : 1);
    const nextFormat = ((this.dialogInputFields.indexOf(this.format) + change) % availableFormats + availableFormats) % availableFormats;
    this.format = this.dialogInputFields[nextFormat];
  }
  onColorChange(value) {
    this.hsva.s = value.s / value.rgX;
    this.hsva.v = value.v / value.rgY;
    this.updateColorPicker();
    this.directiveInstance.sliderChanged({
      slider: "lightness",
      value: this.hsva.v,
      color: this.outputColor
    });
    this.directiveInstance.sliderChanged({
      slider: "saturation",
      value: this.hsva.s,
      color: this.outputColor
    });
  }
  onHueChange(value) {
    this.hsva.h = value.v / value.rgX;
    this.sliderH = this.hsva.h;
    this.updateColorPicker();
    this.directiveInstance.sliderChanged({
      slider: "hue",
      value: this.hsva.h,
      color: this.outputColor
    });
  }
  onValueChange(value) {
    this.hsva.v = value.v / value.rgX;
    this.updateColorPicker();
    this.directiveInstance.sliderChanged({
      slider: "value",
      value: this.hsva.v,
      color: this.outputColor
    });
  }
  onAlphaChange(value) {
    this.hsva.a = value.v / value.rgX;
    this.updateColorPicker();
    this.directiveInstance.sliderChanged({
      slider: "alpha",
      value: this.hsva.a,
      color: this.outputColor
    });
  }
  onHexInput(value) {
    if (value === null) {
      this.updateColorPicker();
    } else {
      if (value && value[0] !== "#") {
        value = "#" + value;
      }
      let validHex = /^#([a-f0-9]{3}|[a-f0-9]{6})$/gi;
      if (this.cpAlphaChannel === "always") {
        validHex = /^#([a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{8})$/gi;
      }
      const valid = validHex.test(value);
      if (valid) {
        if (value.length < 5) {
          value = "#" + value.substring(1).split("").map((c) => c + c).join("");
        }
        if (this.cpAlphaChannel === "forced") {
          value += Math.round(this.hsva.a * 255).toString(16);
        }
        this.setColorFromString(value, true, false);
      }
      this.directiveInstance.inputChanged({
        input: "hex",
        valid,
        value,
        color: this.outputColor
      });
    }
  }
  onRedInput(value) {
    const rgba = this.service.hsvaToRgba(this.hsva);
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      rgba.r = value.v / value.rg;
      this.hsva = this.service.rgbaToHsva(rgba);
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "red",
      valid,
      value: rgba.r,
      color: this.outputColor
    });
  }
  onBlueInput(value) {
    const rgba = this.service.hsvaToRgba(this.hsva);
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      rgba.b = value.v / value.rg;
      this.hsva = this.service.rgbaToHsva(rgba);
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "blue",
      valid,
      value: rgba.b,
      color: this.outputColor
    });
  }
  onGreenInput(value) {
    const rgba = this.service.hsvaToRgba(this.hsva);
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      rgba.g = value.v / value.rg;
      this.hsva = this.service.rgbaToHsva(rgba);
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "green",
      valid,
      value: rgba.g,
      color: this.outputColor
    });
  }
  onHueInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.hsva.h = value.v / value.rg;
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "hue",
      valid,
      value: this.hsva.h,
      color: this.outputColor
    });
  }
  onValueInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.hsva.v = value.v / value.rg;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "value",
      valid,
      value: this.hsva.v,
      color: this.outputColor
    });
  }
  onAlphaInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.hsva.a = value.v / value.rg;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "alpha",
      valid,
      value: this.hsva.a,
      color: this.outputColor
    });
  }
  onLightnessInput(value) {
    const hsla = this.service.hsva2hsla(this.hsva);
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      hsla.l = value.v / value.rg;
      this.hsva = this.service.hsla2hsva(hsla);
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "lightness",
      valid,
      value: hsla.l,
      color: this.outputColor
    });
  }
  onSaturationInput(value) {
    const hsla = this.service.hsva2hsla(this.hsva);
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      hsla.s = value.v / value.rg;
      this.hsva = this.service.hsla2hsva(hsla);
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "saturation",
      valid,
      value: hsla.s,
      color: this.outputColor
    });
  }
  onCyanInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.cmyk.c = value.v;
      this.updateColorPicker(false, true, true);
    }
    this.directiveInstance.inputChanged({
      input: "cyan",
      valid: true,
      value: this.cmyk.c,
      color: this.outputColor
    });
  }
  onMagentaInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.cmyk.m = value.v;
      this.updateColorPicker(false, true, true);
    }
    this.directiveInstance.inputChanged({
      input: "magenta",
      valid: true,
      value: this.cmyk.m,
      color: this.outputColor
    });
  }
  onYellowInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.cmyk.y = value.v;
      this.updateColorPicker(false, true, true);
    }
    this.directiveInstance.inputChanged({
      input: "yellow",
      valid: true,
      value: this.cmyk.y,
      color: this.outputColor
    });
  }
  onBlackInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.cmyk.k = value.v;
      this.updateColorPicker(false, true, true);
    }
    this.directiveInstance.inputChanged({
      input: "black",
      valid: true,
      value: this.cmyk.k,
      color: this.outputColor
    });
  }
  onAddPresetColor(event, value) {
    event.stopPropagation();
    if (!this.cpPresetColors.filter((color) => color === value).length) {
      this.cpPresetColors = this.cpPresetColors.concat(value);
      this.directiveInstance.presetColorsChanged(this.cpPresetColors);
    }
  }
  onRemovePresetColor(event, value) {
    event.stopPropagation();
    this.cpPresetColors = this.cpPresetColors.filter((color) => color !== value);
    this.directiveInstance.presetColorsChanged(this.cpPresetColors);
  }
  // Private helper functions for the color picker dialog status
  openColorPicker() {
    if (!this.show) {
      this.show = true;
      this.hidden = true;
      setTimeout(() => {
        this.hidden = false;
        this.setDialogPosition();
        this.cdRef.detectChanges();
      }, 0);
      this.directiveInstance.stateChanged(true);
      if (!this.isIE10) {
        this.ngZone.runOutsideAngular(() => {
          if (SUPPORTS_TOUCH) {
            document.addEventListener("touchstart", this.listenerMouseDown);
          } else {
            document.addEventListener("mousedown", this.listenerMouseDown);
          }
        });
      }
      window.addEventListener("resize", this.listenerResize);
    }
  }
  closeColorPicker() {
    if (this.show) {
      this.show = false;
      this.directiveInstance.stateChanged(false);
      if (!this.isIE10) {
        if (SUPPORTS_TOUCH) {
          document.removeEventListener("touchstart", this.listenerMouseDown);
        } else {
          document.removeEventListener("mousedown", this.listenerMouseDown);
        }
      }
      window.removeEventListener("resize", this.listenerResize);
      if (!this.cdRef["destroyed"]) {
        this.cdRef.detectChanges();
      }
    }
  }
  updateColorPicker(emit = true, update = true, cmykInput = false) {
    if (this.sliderDimMax) {
      if (this.cpColorMode === 2) {
        this.hsva.s = 0;
      }
      let hue, hsla, rgba;
      const lastOutput = this.outputColor;
      hsla = this.service.hsva2hsla(this.hsva);
      if (!this.cpCmykEnabled) {
        rgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(this.hsva));
      } else {
        if (!cmykInput) {
          rgba = this.service.hsvaToRgba(this.hsva);
          this.cmyk = this.service.denormalizeCMYK(this.service.rgbaToCmyk(rgba));
        } else {
          rgba = this.service.cmykToRgb(this.service.normalizeCMYK(this.cmyk));
          this.hsva = this.service.rgbaToHsva(rgba);
        }
        rgba = this.service.denormalizeRGBA(rgba);
        this.sliderH = this.hsva.h;
      }
      hue = this.service.denormalizeRGBA(this.service.hsvaToRgba(new Hsva(this.sliderH || this.hsva.h, 1, 1, 1)));
      if (update) {
        this.hslaText = new Hsla(Math.round(hsla.h * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
        this.rgbaText = new Rgba(rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100);
        if (this.cpCmykEnabled) {
          this.cmykText = new Cmyk(this.cmyk.c, this.cmyk.m, this.cmyk.y, this.cmyk.k, Math.round(this.cmyk.a * 100) / 100);
        }
        const allowHex8 = this.cpAlphaChannel === "always";
        this.hexText = this.service.rgbaToHex(rgba, allowHex8);
        this.hexAlpha = this.rgbaText.a;
      }
      if (this.cpOutputFormat === "auto") {
        if (this.format !== ColorFormats.RGBA && this.format !== ColorFormats.CMYK && this.format !== ColorFormats.HSLA) {
          if (this.hsva.a < 1) {
            this.format = this.hsva.a < 1 ? ColorFormats.RGBA : ColorFormats.HEX;
          }
        }
      }
      this.hueSliderColor = "rgb(" + hue.r + "," + hue.g + "," + hue.b + ")";
      this.alphaSliderColor = "rgb(" + rgba.r + "," + rgba.g + "," + rgba.b + ")";
      this.outputColor = this.service.outputFormat(this.hsva, this.cpOutputFormat, this.cpAlphaChannel);
      this.selectedColor = this.service.outputFormat(this.hsva, "rgba", null);
      if (this.format !== ColorFormats.CMYK) {
        this.cmykColor = "";
      } else {
        if (this.cpAlphaChannel === "always" || this.cpAlphaChannel === "enabled" || this.cpAlphaChannel === "forced") {
          const alpha = Math.round(this.cmyk.a * 100) / 100;
          this.cmykColor = `cmyka(${this.cmyk.c},${this.cmyk.m},${this.cmyk.y},${this.cmyk.k},${alpha})`;
        } else {
          this.cmykColor = `cmyk(${this.cmyk.c},${this.cmyk.m},${this.cmyk.y},${this.cmyk.k})`;
        }
      }
      this.slider = new SliderPosition((this.sliderH || this.hsva.h) * this.sliderDimMax.h - 8, this.hsva.s * this.sliderDimMax.s - 8, (1 - this.hsva.v) * this.sliderDimMax.v - 8, this.hsva.a * this.sliderDimMax.a - 8);
      if (emit && lastOutput !== this.outputColor) {
        if (this.cpCmykEnabled) {
          this.directiveInstance.cmykChanged(this.cmykColor);
        }
        this.directiveInstance.colorChanged(this.outputColor);
      }
    }
  }
  // Private helper functions for the color picker dialog positioning
  setDialogPosition() {
    if (this.cpDialogDisplay === "inline") {
      this.position = "relative";
    } else {
      let position = "static", transform = "", style;
      let parentNode = null, transformNode = null;
      let node = this.directiveElementRef.nativeElement.parentNode;
      const dialogHeight = this.dialogElement.nativeElement.offsetHeight;
      while (node !== null && node.tagName !== "HTML") {
        style = window.getComputedStyle(node);
        position = style.getPropertyValue("position");
        transform = style.getPropertyValue("transform");
        if (position !== "static" && parentNode === null) {
          parentNode = node;
        }
        if (transform && transform !== "none" && transformNode === null) {
          transformNode = node;
        }
        if (position === "fixed") {
          parentNode = transformNode;
          break;
        }
        node = node.parentNode;
      }
      const boxDirective = this.createDialogBox(this.directiveElementRef.nativeElement, position !== "fixed");
      if (this.useRootViewContainer || position === "fixed" && (!parentNode || parentNode instanceof HTMLUnknownElement)) {
        this.top = boxDirective.top;
        this.left = boxDirective.left;
      } else {
        if (parentNode === null) {
          parentNode = node;
        }
        const boxParent = this.createDialogBox(parentNode, position !== "fixed");
        this.top = boxDirective.top - boxParent.top;
        this.left = boxDirective.left - boxParent.left;
      }
      if (position === "fixed") {
        this.position = "fixed";
      }
      let usePosition = this.cpPosition;
      if (this.cpPosition === "auto") {
        const dialogBounds = this.dialogElement.nativeElement.getBoundingClientRect();
        const triggerBounds = this.cpTriggerElement.nativeElement.getBoundingClientRect();
        usePosition = calculateAutoPositioning(dialogBounds, triggerBounds);
      }
      if (usePosition === "top") {
        this.arrowTop = dialogHeight - 1;
        this.top -= dialogHeight + this.dialogArrowSize;
        this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
      } else if (usePosition === "bottom") {
        this.top += boxDirective.height + this.dialogArrowSize;
        this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
      } else if (usePosition === "top-left" || usePosition === "left-top") {
        this.top -= dialogHeight - boxDirective.height + boxDirective.height * this.cpPositionOffset / 100;
        this.left -= this.cpWidth + this.dialogArrowSize - 2 - this.dialogArrowOffset;
      } else if (usePosition === "top-right" || usePosition === "right-top") {
        this.top -= dialogHeight - boxDirective.height + boxDirective.height * this.cpPositionOffset / 100;
        this.left += boxDirective.width + this.dialogArrowSize - 2 - this.dialogArrowOffset;
      } else if (usePosition === "left" || usePosition === "bottom-left" || usePosition === "left-bottom") {
        this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
        this.left -= this.cpWidth + this.dialogArrowSize - 2;
      } else {
        this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
        this.left += boxDirective.width + this.dialogArrowSize - 2;
      }
      this.cpUsePosition = usePosition;
    }
  }
  // Private helper functions for the color picker dialog positioning and opening
  isDescendant(parent, child) {
    let node = child.parentNode;
    while (node !== null) {
      if (node === parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }
  createDialogBox(element, offset) {
    const {
      top,
      left
    } = element.getBoundingClientRect();
    return {
      top: top + (offset ? window.pageYOffset : 0),
      left: left + (offset ? window.pageXOffset : 0),
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }
};
ColorPickerComponent.\u0275fac = function ColorPickerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ColorPickerComponent)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ColorPickerService));
};
ColorPickerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: ColorPickerComponent,
  selectors: [["color-picker"]],
  viewQuery: function ColorPickerComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 7);
      \u0275\u0275viewQuery(_c12, 7);
      \u0275\u0275viewQuery(_c2, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dialogElement = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.hueSlider = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.alphaSlider = _t.first);
    }
  },
  hostBindings: function ColorPickerComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keyup.esc", function ColorPickerComponent_keyup_esc_HostBindingHandler($event) {
        return ctx.handleEsc($event);
      }, \u0275\u0275resolveDocument)("keyup.enter", function ColorPickerComponent_keyup_enter_HostBindingHandler($event) {
        return ctx.handleEnter($event);
      }, \u0275\u0275resolveDocument);
    }
  },
  standalone: false,
  decls: 30,
  vars: 51,
  consts: [["dialogPopup", ""], ["hueSlider", ""], ["valueSlider", ""], ["alphaSlider", ""], [1, "color-picker", 3, "click"], [3, "class", "top", 4, "ngIf"], ["class", "saturation-lightness", 3, "slider", "rgX", "rgY", "background-color", "newValue", "dragStart", "dragEnd", 4, "ngIf"], [1, "hue-alpha", "box"], [1, "left"], [1, "selected-color-background"], [1, "selected-color", 3, "click"], ["class", "eyedropper-icon", "xmlns", "http://www.w3.org/2000/svg", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#000000", 4, "ngIf"], ["type", "button", 3, "class", "disabled", "click", 4, "ngIf"], [1, "right"], ["style", "height: 16px;", 4, "ngIf"], [1, "hue", 3, "newValue", "dragStart", "dragEnd", "slider", "rgX"], [1, "cursor"], [1, "value", 3, "newValue", "dragStart", "dragEnd", "slider", "rgX"], [1, "alpha", 3, "newValue", "dragStart", "dragEnd", "slider", "rgX"], ["class", "cmyk-text", 3, "display", 4, "ngIf"], ["class", "hsla-text", 3, "display", 4, "ngIf"], ["class", "rgba-text", 3, "display", 4, "ngIf"], ["class", "hex-text", 3, "hex-alpha", "display", 4, "ngIf"], ["class", "value-text", 4, "ngIf"], ["class", "type-policy", 4, "ngIf"], ["class", "preset-area", 4, "ngIf"], ["class", "button-area", 4, "ngIf"], ["class", "extra-template", 4, "ngIf"], [1, "saturation-lightness", 3, "newValue", "dragStart", "dragEnd", "slider", "rgX", "rgY"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#000000", 1, "eyedropper-icon"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M17.66 5.41l.92.92-2.69 2.69-.92-.92 2.69-2.69M17.67 3c-.26 0-.51.1-.71.29l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42l-2.34-2.34c-.2-.19-.45-.29-.7-.29zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"], ["type", "button", 3, "click", "disabled"], [2, "height", "16px"], [1, "cmyk-text"], [1, "box"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "100", 3, "keyup.enter", "newValue", "text", "rg", "value"], ["type", "number", "pattern", "[0-9]+([\\.,][0-9]{1,2})?", "min", "0", "max", "1", "step", "0.1", 3, "text", "rg", "value", "keyup.enter", "newValue", 4, "ngIf"], [4, "ngIf"], ["type", "number", "pattern", "[0-9]+([\\.,][0-9]{1,2})?", "min", "0", "max", "1", "step", "0.1", 3, "keyup.enter", "newValue", "text", "rg", "value"], [1, "hsla-text"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "360", 3, "keyup.enter", "newValue", "text", "rg", "value"], [1, "rgba-text"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "255", 3, "keyup.enter", "newValue", "text", "rg", "value"], [1, "hex-text"], [3, "blur", "keyup.enter", "newValue", "text", "value"], [1, "value-text"], [1, "type-policy"], [1, "type-policy-arrow", 3, "click"], [1, "preset-area"], [1, "preset-label"], [3, "class", 4, "ngIf"], ["class", "preset-color", 3, "backgroundColor", "click", 4, "ngFor", "ngForOf"], [1, "preset-color", 3, "click"], [3, "class", "click", 4, "ngIf"], [3, "click"], [1, "button-area"], ["type", "button", 3, "class", "click", 4, "ngIf"], ["type", "button", 3, "click"], [1, "extra-template"], [4, "ngTemplateOutlet"]],
  template: function ColorPickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4, 0);
      \u0275\u0275listener("click", function ColorPickerComponent_Template_div_click_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView($event.stopPropagation());
      });
      \u0275\u0275template(2, ColorPickerComponent_div_2_Template, 1, 5, "div", 5)(3, ColorPickerComponent_div_3_Template, 2, 8, "div", 6);
      \u0275\u0275elementStart(4, "div", 7)(5, "div", 8);
      \u0275\u0275element(6, "div", 9);
      \u0275\u0275elementStart(7, "div", 10);
      \u0275\u0275listener("click", function ColorPickerComponent_Template_div_click_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.eyeDropperSupported && ctx.cpEyeDropper && ctx.onEyeDropper());
      });
      \u0275\u0275template(8, ColorPickerComponent__svg_svg_8_Template, 3, 0, "svg", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, ColorPickerComponent_button_9_Template, 2, 4, "button", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 13);
      \u0275\u0275template(11, ColorPickerComponent_div_11_Template, 1, 0, "div", 14);
      \u0275\u0275elementStart(12, "div", 15, 1);
      \u0275\u0275listener("newValue", function ColorPickerComponent_Template_div_newValue_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onHueChange($event));
      })("dragStart", function ColorPickerComponent_Template_div_dragStart_12_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDragStart("hue"));
      })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_12_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDragEnd("hue"));
      });
      \u0275\u0275element(14, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 17, 2);
      \u0275\u0275listener("newValue", function ColorPickerComponent_Template_div_newValue_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onValueChange($event));
      })("dragStart", function ColorPickerComponent_Template_div_dragStart_15_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDragStart("value"));
      })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_15_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDragEnd("value"));
      });
      \u0275\u0275element(17, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 18, 3);
      \u0275\u0275listener("newValue", function ColorPickerComponent_Template_div_newValue_18_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onAlphaChange($event));
      })("dragStart", function ColorPickerComponent_Template_div_dragStart_18_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDragStart("alpha"));
      })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_18_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDragEnd("alpha"));
      });
      \u0275\u0275element(20, "div", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(21, ColorPickerComponent_div_21_Template, 17, 12, "div", 19)(22, ColorPickerComponent_div_22_Template, 14, 10, "div", 20)(23, ColorPickerComponent_div_23_Template, 14, 10, "div", 21)(24, ColorPickerComponent_div_24_Template, 8, 7, "div", 22)(25, ColorPickerComponent_div_25_Template, 9, 3, "div", 23)(26, ColorPickerComponent_div_26_Template, 3, 0, "div", 24)(27, ColorPickerComponent_div_27_Template, 6, 3, "div", 25)(28, ColorPickerComponent_div_28_Template, 3, 2, "div", 26)(29, ColorPickerComponent_div_29_Template, 2, 1, "div", 27);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("display", !ctx.show ? "none" : "block")("visibility", ctx.hidden ? "hidden" : "visible")("top", ctx.top, "px")("left", ctx.left, "px")("position", ctx.position)("height", ctx.cpHeight, "px")("width", ctx.cpWidth, "px");
      \u0275\u0275classProp("open", ctx.show);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.cpDialogDisplay === "popup");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (ctx.cpColorMode || 1) === 1);
      \u0275\u0275advance(4);
      \u0275\u0275styleProp("background-color", ctx.selectedColor)("cursor", ctx.eyeDropperSupported && ctx.cpEyeDropper ? "pointer" : null);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.eyeDropperSupported && ctx.cpEyeDropper);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.cpAddColorButton);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.cpAlphaChannel === "disabled");
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", (ctx.cpColorMode || 1) === 1 ? "block" : "none");
      \u0275\u0275property("rgX", 1);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("left", ctx.slider == null ? null : ctx.slider.h, "px");
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", (ctx.cpColorMode || 1) === 2 ? "block" : "none");
      \u0275\u0275property("rgX", 1);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("right", ctx.slider == null ? null : ctx.slider.v, "px");
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.cpAlphaChannel === "disabled" ? "none" : "block")("background-color", ctx.alphaSliderColor);
      \u0275\u0275property("rgX", 1);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("left", ctx.slider == null ? null : ctx.slider.a, "px");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 2);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (ctx.cpPresetColors == null ? null : ctx.cpPresetColors.length) || ctx.cpAddColorButton);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.cpOKButton || ctx.cpCancelButton);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.cpExtraTemplate);
    }
  },
  dependencies: [NgIf, SliderDirective, TextDirective, NgForOf, NgTemplateOutlet],
  styles: ['.color-picker{position:absolute;z-index:1000;width:230px;height:auto;border:#777 solid 1px;cursor:default;-webkit-user-select:none;user-select:none;background-color:#fff}.color-picker *{box-sizing:border-box;margin:0;font-size:11px}.color-picker input{width:0;height:26px;min-width:0;font-size:13px;text-align:center;color:#000}.color-picker input:invalid,.color-picker input:-moz-ui-invalid,.color-picker input:-moz-submit-invalid{box-shadow:none}.color-picker input::-webkit-inner-spin-button,.color-picker input::-webkit-outer-spin-button{margin:0;-webkit-appearance:none}.color-picker .arrow{position:absolute;z-index:999999;width:0;height:0;border-style:solid}.color-picker .arrow.arrow-top{left:8px;border-width:10px 5px;border-color:#777 rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .arrow.arrow-bottom{top:-20px;left:8px;border-width:10px 5px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) #777 rgba(0,0,0,0)}.color-picker .arrow.arrow-top-left,.color-picker .arrow.arrow-left-top{right:-21px;bottom:8px;border-width:5px 10px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #777}.color-picker .arrow.arrow-top-right,.color-picker .arrow.arrow-right-top{bottom:8px;left:-20px;border-width:5px 10px;border-color:rgba(0,0,0,0) #777 rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .arrow.arrow-left,.color-picker .arrow.arrow-left-bottom,.color-picker .arrow.arrow-bottom-left{top:8px;right:-21px;border-width:5px 10px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #777}.color-picker .arrow.arrow-right,.color-picker .arrow.arrow-right-bottom,.color-picker .arrow.arrow-bottom-right{top:8px;left:-20px;border-width:5px 10px;border-color:rgba(0,0,0,0) #777 rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .cursor{position:relative;width:16px;height:16px;border:#222 solid 2px;border-radius:50%;cursor:default}.color-picker .box{display:flex;padding:4px 8px}.color-picker .left{position:relative;padding:16px 8px}.color-picker .right{flex:1 1 auto;padding:12px 8px}.color-picker .button-area{padding:0 16px 16px;text-align:right}.color-picker .button-area button{margin-left:8px}.color-picker .preset-area{padding:4px 15px}.color-picker .preset-area .preset-label{overflow:hidden;width:100%;padding:4px;font-size:11px;white-space:nowrap;text-align:left;text-overflow:ellipsis;color:#555}.color-picker .preset-area .preset-color{position:relative;display:inline-block;width:18px;height:18px;margin:4px 6px 8px;border:#a9a9a9 solid 1px;border-radius:25%;cursor:pointer}.color-picker .preset-area .preset-empty-message{min-height:18px;margin-top:4px;margin-bottom:8px;font-style:italic;text-align:center}.color-picker .hex-text{width:100%;padding:4px 8px;font-size:11px}.color-picker .hex-text .box{padding:0 24px 8px 8px}.color-picker .hex-text .box div{float:left;flex:1 1 auto;text-align:center;color:#555;clear:left}.color-picker .hex-text .box input{flex:1 1 auto;padding:1px;border:#a9a9a9 solid 1px}.color-picker .hex-alpha .box div:first-child,.color-picker .hex-alpha .box input:first-child{flex-grow:3;margin-right:8px}.color-picker .cmyk-text,.color-picker .hsla-text,.color-picker .rgba-text,.color-picker .value-text{width:100%;padding:4px 8px;font-size:11px}.color-picker .cmyk-text .box,.color-picker .hsla-text .box,.color-picker .rgba-text .box{padding:0 24px 8px 8px}.color-picker .value-text .box{padding:0 8px 8px}.color-picker .cmyk-text .box div,.color-picker .hsla-text .box div,.color-picker .rgba-text .box div,.color-picker .value-text .box div{flex:1 1 auto;margin-right:8px;text-align:center;color:#555}.color-picker .cmyk-text .box div:last-child,.color-picker .hsla-text .box div:last-child,.color-picker .rgba-text .box div:last-child,.color-picker .value-text .box div:last-child{margin-right:0}.color-picker .cmyk-text .box input,.color-picker .hsla-text .box input,.color-picker .rgba-text .box input,.color-picker .value-text .box input{float:left;flex:1;padding:1px;margin:0 8px 0 0;border:#a9a9a9 solid 1px}.color-picker .cmyk-text .box input:last-child,.color-picker .hsla-text .box input:last-child,.color-picker .rgba-text .box input:last-child,.color-picker .value-text .box input:last-child{margin-right:0}.color-picker .hue-alpha{align-items:center;margin-bottom:3px}.color-picker .hue{direction:ltr;width:100%;height:16px;margin-bottom:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC)}.color-picker .value{direction:rtl;width:100%;height:16px;margin-bottom:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAACTklEQVR42u3SYUcrABhA4U2SkmRJMmWSJklKJiWZZpKUJJskKUmaTFImKZOUzMySpGRmliRNJilJSpKSJEtmSpIpmWmSdO736/6D+x7OP3gUCoWCv1cqlSQlJZGcnExKSgqpqamkpaWRnp5ORkYGmZmZqFQqsrKyyM7OJicnh9zcXNRqNXl5eeTn56PRaCgoKKCwsJCioiK0Wi3FxcWUlJRQWlpKWVkZ5eXlVFRUUFlZiU6no6qqiurqampqaqitraWurg69Xk99fT0GgwGj0UhDQwONjY00NTXR3NxMS0sLra2ttLW10d7ejslkwmw209HRQWdnJ11dXXR3d9PT00Nvby99fX309/czMDDA4OAgFouFoaEhrFYrw8PDjIyMMDo6ytjYGDabjfHxcSYmJpicnGRqagq73c709DQzMzPMzs4yNzfH/Pw8DocDp9OJy+XC7XazsLDA4uIiS0tLLC8vs7KywurqKmtra3g8HrxeLz6fD7/fz/r6OhsbG2xubrK1tcX29jaBQICdnR2CwSC7u7vs7e2xv7/PwcEBh4eHHB0dcXx8zMnJCaenp5ydnXF+fs7FxQWXl5dcXV1xfX3Nzc0Nt7e33N3dEQqFuL+/5+HhgXA4TCQS4fHxkaenJ56fn3l5eeH19ZVoNMrb2xvv7+98fHwQi8WIx+N8fn6SSCT4+vri+/ubn58ffn9/+VcKgSWwBJbAElgCS2AJLIElsASWwBJYAktgCSyBJbAElsASWAJLYAksgSWwBJbAElgCS2AJLIElsP4/WH8AmJ5Z6jHS4h8AAAAASUVORK5CYII=)}.color-picker .alpha{direction:ltr;width:100%;height:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==)}.color-picker .type-policy{position:absolute;top:218px;right:12px;width:16px;height:24px;background-size:8px 16px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-position:center}.color-picker .type-policy .type-policy-arrow{display:block;width:100%;height:50%}.color-picker .selected-color{position:absolute;top:16px;left:8px;width:40px;height:40px;border:1px solid #a9a9a9;border-radius:50%}.color-picker .selected-color-background{width:40px;height:40px;border-radius:50%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC)}.color-picker .saturation-lightness{direction:ltr;width:100%;height:130px;border:none;cursor:pointer;touch-action:manipulation;background-size:100% 100%;background-image:url(data:image/png;base64,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)}.color-picker .cp-add-color-button-class{position:absolute;display:inline;padding:0;margin:3px -3px;border:0;cursor:pointer;background:transparent}.color-picker .cp-add-color-button-class:hover{text-decoration:underline}.color-picker .cp-add-color-button-class:disabled{cursor:not-allowed;color:#999}.color-picker .cp-add-color-button-class:disabled:hover{text-decoration:none}.color-picker .cp-remove-color-button-class{position:absolute;top:-5px;right:-5px;display:block;width:10px;height:10px;border-radius:50%;cursor:pointer;text-align:center;background:#fff;box-shadow:1px 1px 5px #333}.color-picker .cp-remove-color-button-class:before{content:"x";position:relative;bottom:3.5px;display:inline-block;font-size:10px}.color-picker .eyedropper-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);fill:#fff;mix-blend-mode:exclusion}\n'],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerComponent, [{
    type: Component,
    args: [{
      selector: "color-picker",
      encapsulation: ViewEncapsulation.None,
      template: `<div #dialogPopup class="color-picker" [class.open]="show" [style.display]="!show ? 'none' : 'block'" [style.visibility]="hidden ? 'hidden' : 'visible'" [style.top.px]="top" [style.left.px]="left" [style.position]="position" [style.height.px]="cpHeight" [style.width.px]="cpWidth" (click)="$event.stopPropagation()">
  <div *ngIf="cpDialogDisplay === 'popup'" class="arrow arrow-{{cpUsePosition}}" [style.top.px]="arrowTop"></div>

  <div *ngIf="(cpColorMode ||\xA01) === 1" class="saturation-lightness" [slider] [rgX]="1" [rgY]="1" [style.background-color]="hueSliderColor" (newValue)="onColorChange($event)" (dragStart)="onDragStart('saturation-lightness')" (dragEnd)="onDragEnd('saturation-lightness')">
    <div class="cursor" [style.top.px]="slider?.v" [style.left.px]="slider?.s"></div>
  </div>

  <div class="hue-alpha box">
    <div class="left">
      <div class="selected-color-background"></div>

      <div class="selected-color" [style.background-color]="selectedColor" [style.cursor]="eyeDropperSupported && cpEyeDropper ? 'pointer' : null" (click)="eyeDropperSupported && cpEyeDropper && onEyeDropper()">
        <svg *ngIf="eyeDropperSupported && cpEyeDropper" class="eyedropper-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17.66 5.41l.92.92-2.69 2.69-.92-.92 2.69-2.69M17.67 3c-.26 0-.51.1-.71.29l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42l-2.34-2.34c-.2-.19-.45-.29-.7-.29zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"/></svg>
      </div>

      <button *ngIf="cpAddColorButton" type="button" class="{{cpAddColorButtonClass}}" [disabled]="cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength" (click)="onAddPresetColor($event, selectedColor)">
        {{cpAddColorButtonText}}
      </button>
    </div>

    <div class="right">
      <div *ngIf="cpAlphaChannel==='disabled'" style="height: 16px;"></div>

      <div #hueSlider class="hue" [slider] [rgX]="1" [style.display]="(cpColorMode ||\xA01) === 1 ? 'block' : 'none'" (newValue)="onHueChange($event)" (dragStart)="onDragStart('hue')" (dragEnd)="onDragEnd('hue')">
        <div class="cursor" [style.left.px]="slider?.h"></div>
      </div>

      <div #valueSlider class="value" [slider] [rgX]="1" [style.display]="(cpColorMode ||\xA01) === 2 ? 'block': 'none'" (newValue)="onValueChange($event)" (dragStart)="onDragStart('value')" (dragEnd)="onDragEnd('value')">
        <div class="cursor" [style.right.px]="slider?.v"></div>
      </div>

      <div #alphaSlider class="alpha" [slider] [rgX]="1" [style.display]="cpAlphaChannel === 'disabled' ? 'none' : 'block'" [style.background-color]="alphaSliderColor" (newValue)="onAlphaChange($event)" (dragStart)="onDragStart('alpha')" (dragEnd)="onDragEnd('alpha')">
        <div class="cursor" [style.left.px]="slider?.a"></div>
      </div>
    </div>
  </div>

  <div *ngIf="!cpDisableInput && (cpColorMode ||\xA01) === 1" class="cmyk-text" [style.display]="format !== 3 ? 'none' : 'block'">
    <div class="box">
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="cmykText?.c" (keyup.enter)="onAcceptColor($event)" (newValue)="onCyanInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="cmykText?.m" (keyup.enter)="onAcceptColor($event)" (newValue)="onMagentaInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="cmykText?.y" (keyup.enter)="onAcceptColor($event)" (newValue)="onYellowInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="cmykText?.k" (keyup.enter)="onAcceptColor($event)" (newValue)="onBlackInput($event)" />
      <input *ngIf="cpAlphaChannel!=='disabled'" type="number" pattern="[0-9]+([\\.,][0-9]{1,2})?" min="0" max="1" step="0.1" [text] [rg]="1" [value]="cmykText?.a" (keyup.enter)="onAcceptColor($event)" (newValue)="onAlphaInput($event)" />
    </div>

     <div class="box">
      <div>C</div><div>M</div><div>Y</div><div>K</div><div *ngIf="cpAlphaChannel!=='disabled'" >A</div>
    </div>
  </div>

  <div *ngIf="!cpDisableInput && (cpColorMode ||\xA01) === 1 " class="hsla-text" [style.display]="format !== 2 ? 'none' : 'block'">
    <div class="box">
      <input type="number" pattern="[0-9]*" min="0" max="360" [text] [rg]="360" [value]="hslaText?.h" (keyup.enter)="onAcceptColor($event)" (newValue)="onHueInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="hslaText?.s" (keyup.enter)="onAcceptColor($event)" (newValue)="onSaturationInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="hslaText?.l" (keyup.enter)="onAcceptColor($event)" (newValue)="onLightnessInput($event)" />
      <input *ngIf="cpAlphaChannel!=='disabled'" type="number" pattern="[0-9]+([\\.,][0-9]{1,2})?" min="0" max="1" step="0.1" [text] [rg]="1" [value]="hslaText?.a" (keyup.enter)="onAcceptColor($event)" (newValue)="onAlphaInput($event)" />
    </div>

    <div class="box">
      <div>H</div><div>S</div><div>L</div><div *ngIf="cpAlphaChannel!=='disabled'">A</div>
    </div>
  </div>

  <div *ngIf="!cpDisableInput && (cpColorMode ||\xA01) === 1 " [style.display]="format !== 1 ? 'none' : 'block'" class="rgba-text">
    <div class="box">
      <input type="number" pattern="[0-9]*" min="0" max="255" [text] [rg]="255" [value]="rgbaText?.r" (keyup.enter)="onAcceptColor($event)" (newValue)="onRedInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="255" [text] [rg]="255" [value]="rgbaText?.g" (keyup.enter)="onAcceptColor($event)" (newValue)="onGreenInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="255" [text] [rg]="255" [value]="rgbaText?.b" (keyup.enter)="onAcceptColor($event)" (newValue)="onBlueInput($event)" />
      <input *ngIf="cpAlphaChannel!=='disabled'" type="number" pattern="[0-9]+([\\.,][0-9]{1,2})?" min="0" max="1" step="0.1" [text] [rg]="1" [value]="rgbaText?.a" (keyup.enter)="onAcceptColor($event)" (newValue)="onAlphaInput($event)" />
    </div>

    <div class="box">
      <div>R</div><div>G</div><div>B</div><div *ngIf="cpAlphaChannel!=='disabled'" >A</div>
    </div>
  </div>

  <div *ngIf="!cpDisableInput && (cpColorMode ||\xA01) === 1" class="hex-text" [class.hex-alpha]="cpAlphaChannel==='forced'"
    [style.display]="format !== 0 ? 'none' : 'block'">
    <div class="box">
      <input [text] [value]="hexText" (blur)="onHexInput(null)" (keyup.enter)="onAcceptColor($event)" (newValue)="onHexInput($event)"/>
      <input *ngIf="cpAlphaChannel==='forced'" type="number" pattern="[0-9]+([\\.,][0-9]{1,2})?" min="0" max="1" step="0.1" [text] [rg]="1" [value]="hexAlpha" (keyup.enter)="onAcceptColor($event)" (newValue)="onAlphaInput($event)"/>
    </div>

    <div class="box">
      <div>Hex</div>
      <div *ngIf="cpAlphaChannel==='forced'">A</div>
    </div>
  </div>

  <div *ngIf="!cpDisableInput && (cpColorMode ||\xA01) === 2" class="value-text">
    <div class="box">
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="hslaText?.l" (keyup.enter)="onAcceptColor($event)" (newValue)="onValueInput($event)" />
      <input *ngIf="cpAlphaChannel!=='disabled'" type="number" pattern="[0-9]+([\\.,][0-9]{1,2})?" min="0" max="1" step="0.1"  [text] [rg]="1" [value]="hslaText?.a" (keyup.enter)="onAcceptColor($event)" (newValue)="onAlphaInput($event)" />
    </div>

    <div class="box">
      <div>V</div><div>A</div>
    </div>
  </div>

  <div *ngIf="!cpDisableInput && (cpColorMode ||\xA01) === 1" class="type-policy">
    <span class="type-policy-arrow" (click)="onFormatToggle(-1)"></span>
    <span class="type-policy-arrow" (click)="onFormatToggle(1)"></span>
  </div>

  <div *ngIf="cpPresetColors?.length || cpAddColorButton" class="preset-area">
    <hr>

    <div class="preset-label">{{cpPresetLabel}}</div>

    <div *ngIf="cpPresetColors?.length" class="{{cpPresetColorsClass}}">
      <div *ngFor="let color of cpPresetColors" class="preset-color" [style.backgroundColor]="color" (click)="setColorFromString(color)">
        <span *ngIf="cpAddColorButton" class="{{cpRemoveColorButtonClass}}" (click)="onRemovePresetColor($event, color)"></span>
      </div>
    </div>

    <div *ngIf="!cpPresetColors?.length && cpAddColorButton" class="{{cpPresetEmptyMessageClass}}">{{cpPresetEmptyMessage}}</div>
  </div>

  <div *ngIf="cpOKButton || cpCancelButton" class="button-area">
    <button *ngIf="cpCancelButton" type="button" class="{{cpCancelButtonClass}}" (click)="onCancelColor($event)">{{cpCancelButtonText}}</button>

    <button *ngIf="cpOKButton" type="button" class="{{cpOKButtonClass}}" (click)="onAcceptColor($event)">{{cpOKButtonText}}</button>
  </div>

  <div class="extra-template" *ngIf="cpExtraTemplate">
    <ng-container *ngTemplateOutlet="cpExtraTemplate"></ng-container>
  </div>
</div>
`,
      styles: ['.color-picker{position:absolute;z-index:1000;width:230px;height:auto;border:#777 solid 1px;cursor:default;-webkit-user-select:none;user-select:none;background-color:#fff}.color-picker *{box-sizing:border-box;margin:0;font-size:11px}.color-picker input{width:0;height:26px;min-width:0;font-size:13px;text-align:center;color:#000}.color-picker input:invalid,.color-picker input:-moz-ui-invalid,.color-picker input:-moz-submit-invalid{box-shadow:none}.color-picker input::-webkit-inner-spin-button,.color-picker input::-webkit-outer-spin-button{margin:0;-webkit-appearance:none}.color-picker .arrow{position:absolute;z-index:999999;width:0;height:0;border-style:solid}.color-picker .arrow.arrow-top{left:8px;border-width:10px 5px;border-color:#777 rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .arrow.arrow-bottom{top:-20px;left:8px;border-width:10px 5px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) #777 rgba(0,0,0,0)}.color-picker .arrow.arrow-top-left,.color-picker .arrow.arrow-left-top{right:-21px;bottom:8px;border-width:5px 10px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #777}.color-picker .arrow.arrow-top-right,.color-picker .arrow.arrow-right-top{bottom:8px;left:-20px;border-width:5px 10px;border-color:rgba(0,0,0,0) #777 rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .arrow.arrow-left,.color-picker .arrow.arrow-left-bottom,.color-picker .arrow.arrow-bottom-left{top:8px;right:-21px;border-width:5px 10px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #777}.color-picker .arrow.arrow-right,.color-picker .arrow.arrow-right-bottom,.color-picker .arrow.arrow-bottom-right{top:8px;left:-20px;border-width:5px 10px;border-color:rgba(0,0,0,0) #777 rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .cursor{position:relative;width:16px;height:16px;border:#222 solid 2px;border-radius:50%;cursor:default}.color-picker .box{display:flex;padding:4px 8px}.color-picker .left{position:relative;padding:16px 8px}.color-picker .right{flex:1 1 auto;padding:12px 8px}.color-picker .button-area{padding:0 16px 16px;text-align:right}.color-picker .button-area button{margin-left:8px}.color-picker .preset-area{padding:4px 15px}.color-picker .preset-area .preset-label{overflow:hidden;width:100%;padding:4px;font-size:11px;white-space:nowrap;text-align:left;text-overflow:ellipsis;color:#555}.color-picker .preset-area .preset-color{position:relative;display:inline-block;width:18px;height:18px;margin:4px 6px 8px;border:#a9a9a9 solid 1px;border-radius:25%;cursor:pointer}.color-picker .preset-area .preset-empty-message{min-height:18px;margin-top:4px;margin-bottom:8px;font-style:italic;text-align:center}.color-picker .hex-text{width:100%;padding:4px 8px;font-size:11px}.color-picker .hex-text .box{padding:0 24px 8px 8px}.color-picker .hex-text .box div{float:left;flex:1 1 auto;text-align:center;color:#555;clear:left}.color-picker .hex-text .box input{flex:1 1 auto;padding:1px;border:#a9a9a9 solid 1px}.color-picker .hex-alpha .box div:first-child,.color-picker .hex-alpha .box input:first-child{flex-grow:3;margin-right:8px}.color-picker .cmyk-text,.color-picker .hsla-text,.color-picker .rgba-text,.color-picker .value-text{width:100%;padding:4px 8px;font-size:11px}.color-picker .cmyk-text .box,.color-picker .hsla-text .box,.color-picker .rgba-text .box{padding:0 24px 8px 8px}.color-picker .value-text .box{padding:0 8px 8px}.color-picker .cmyk-text .box div,.color-picker .hsla-text .box div,.color-picker .rgba-text .box div,.color-picker .value-text .box div{flex:1 1 auto;margin-right:8px;text-align:center;color:#555}.color-picker .cmyk-text .box div:last-child,.color-picker .hsla-text .box div:last-child,.color-picker .rgba-text .box div:last-child,.color-picker .value-text .box div:last-child{margin-right:0}.color-picker .cmyk-text .box input,.color-picker .hsla-text .box input,.color-picker .rgba-text .box input,.color-picker .value-text .box input{float:left;flex:1;padding:1px;margin:0 8px 0 0;border:#a9a9a9 solid 1px}.color-picker .cmyk-text .box input:last-child,.color-picker .hsla-text .box input:last-child,.color-picker .rgba-text .box input:last-child,.color-picker .value-text .box input:last-child{margin-right:0}.color-picker .hue-alpha{align-items:center;margin-bottom:3px}.color-picker .hue{direction:ltr;width:100%;height:16px;margin-bottom:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC)}.color-picker .value{direction:rtl;width:100%;height:16px;margin-bottom:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAACTklEQVR42u3SYUcrABhA4U2SkmRJMmWSJklKJiWZZpKUJJskKUmaTFImKZOUzMySpGRmliRNJilJSpKSJEtmSpIpmWmSdO736/6D+x7OP3gUCoWCv1cqlSQlJZGcnExKSgqpqamkpaWRnp5ORkYGmZmZqFQqsrKyyM7OJicnh9zcXNRqNXl5eeTn56PRaCgoKKCwsJCioiK0Wi3FxcWUlJRQWlpKWVkZ5eXlVFRUUFlZiU6no6qqiurqampqaqitraWurg69Xk99fT0GgwGj0UhDQwONjY00NTXR3NxMS0sLra2ttLW10d7ejslkwmw209HRQWdnJ11dXXR3d9PT00Nvby99fX309/czMDDA4OAgFouFoaEhrFYrw8PDjIyMMDo6ytjYGDabjfHxcSYmJpicnGRqagq73c709DQzMzPMzs4yNzfH/Pw8DocDp9OJy+XC7XazsLDA4uIiS0tLLC8vs7KywurqKmtra3g8HrxeLz6fD7/fz/r6OhsbG2xubrK1tcX29jaBQICdnR2CwSC7u7vs7e2xv7/PwcEBh4eHHB0dcXx8zMnJCaenp5ydnXF+fs7FxQWXl5dcXV1xfX3Nzc0Nt7e33N3dEQqFuL+/5+HhgXA4TCQS4fHxkaenJ56fn3l5eeH19ZVoNMrb2xvv7+98fHwQi8WIx+N8fn6SSCT4+vri+/ubn58ffn9/+VcKgSWwBJbAElgCS2AJLIElsASWwBJYAktgCSyBJbAElsASWAJLYAksgSWwBJbAElgCS2AJLIElsP4/WH8AmJ5Z6jHS4h8AAAAASUVORK5CYII=)}.color-picker .alpha{direction:ltr;width:100%;height:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==)}.color-picker .type-policy{position:absolute;top:218px;right:12px;width:16px;height:24px;background-size:8px 16px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-position:center}.color-picker .type-policy .type-policy-arrow{display:block;width:100%;height:50%}.color-picker .selected-color{position:absolute;top:16px;left:8px;width:40px;height:40px;border:1px solid #a9a9a9;border-radius:50%}.color-picker .selected-color-background{width:40px;height:40px;border-radius:50%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC)}.color-picker .saturation-lightness{direction:ltr;width:100%;height:130px;border:none;cursor:pointer;touch-action:manipulation;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACCCAYAAABSD7T3AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwksPWR6lgAAIABJREFUeNrtnVuT47gRrAHN+P//Or/61Y5wONZ7mZ1u3XAeLMjJZGZVgdKsfc5xR3S0RIIUW+CHzCpc2McYo7XGv3ex7UiZd57rjyzzv+v+33X/R/+3r/f7vR386Y+TvKNcf/wdhTLPcv9qU2wZd74uth0t1821jkIZLPcsI/6nWa4XvutquU0Z85mnx80S/ZzgpnLnOtHNt7/ofx1TKXcSNzN/7qbMQ3ju7rNQmMYYd/4s2j9aa+P+gGaMcZrb1M/tdrvf7/d2v99P9/t93O/3cbvdxu12G9frdVwul3E+n8c///nP+2+//Xb66aefxl//+tfx5z//2YK5Al2rgvf4UsbpdGrB52bAvArXpuzjmiqAVSGz5eDmGYXzhbAZmCrnmzddpUU+8Y1dAOYeXCtDUwVwV7YCGH6uAmyMcZ9l5vkUaBPGMUZ7/J5w/792/fvv9Xq93263dr/fTxPECeME8nK5jM/Pz/HTTz/dv337dvrll1/GP/7xj/G3v/1t/OUvfwkVswongjdOp9PzH3U3D3zmWGnZVXn4jCqs7wC2BKP4/8tAzkZsoWx6XrqeHZymvp4ABCBJhTQwKfDT8gzrZCIqi5AhiACjBfEB2rP8/X63MM7f6/V6v9/v7Xa7bYC83W7jcrlsVHIq5ffv30+//fbb+OWXX8ZPP/00/v73v4+ff/75JSvbeu+bL2WMMaFbAlpBNM85QX+ct6qoSqkPAwuQlBVKqGNFSUOAA3Bmu7gC5hNOd15nSwvAOUW7C4giUCV8Sgn5L9hNFIqTsp0GxI0ysioyjAjkY/tGJVEpz+fz+OWXX+7fv38//f777+Pbt2/j119/HT///PP49ddfx8fHRwrmTjV779EXu2px2xhjwtdJZQcAWQIPLPISsMJaSwiD8gzIKrwSyATE5j5nAbR5c1dBUwBlsEWW0h6LqiYsqFPAQxCyRZ3wOSARxmlXMX5k64pQfvv27f75+dk+Pj5OHx8f4/v37+Pbt2/jt99+G9++fRsfHx/jcrmUFLO31gYDWblxRIs/TqfT7ousxJsAxXA2Gc7TA9XdgfdoHbFsj76X2+1WArgI1ageGwA3qupqoHsmcbI6Fu93quggFa9d7LeDtgKfAFHBJ+NEByIkcJ5KervdTmhhGcgJJSZ5vn//fj+fz+18Pp8+Pz/H5+fnmGD+/vvv4/v37+Pj42N8fn6O2+1Ws7JjjP6wraMI5E4RZ8x2vV5TSwkquotV7/d7Tz6HFWsD/qNcdw0CQ3q/321c686TwDVIdbuy73zNldhSHb8I2klZznm+InBS4U6n0302aBFsLhHDAKJVJVglfI9jhvu53W53sLANYNxAiDA6MCeUHx8f9+v12i6XS7tcLqcZW57P5yeY8/fz83Ocz+fnsSmYUyknWEG85WBst9stzSLyMdfr9Qi08iY15UZ0LlDGLhR3o5zK2j7OPUTD0E+nU3tk7Xb/16NFbhloAMuY1zjLUOO3BKeIDe+Z8s3/J4gFo4TM5jPmuRg28foUKKVSwo16TgA5npywcWLHgYl/Pz8/73/605/ab7/91m63W7tcLie0sZj4mao5gTyfz88E0f1+j8EcYzwTPEG2cqjyfHNF0M8fuqEiaOVnRzZZQNh5fwQyHg/HDGfJo89Q1zb/quu5XC6773I2XKfTqd/v9+d3wuqWva/YTdUdEV3fhIv/Viyps6YE3x3r43K5bJQS66zaxVGFsvd+//j4aF+/fm3fv39vt9utff36tf3+++/tdrudvn37ZuNLBaaCMgUzC+rZRiFowxUuJI8YMqcCp9Opq5vagaYU6lGJA1XQqejchw6Cj0Gw5nYBrGw01A2O206n04BGouNNyTfp/FwElhUey6nXrIKw7QQWddxuN2ldL5fL839gSPF8ahu/JvBO48CPSuqMf8Vp9/P53L58+dLu93s7n8/tfr8/39/v9/b5+TkhPJ3P56mQ436/j+/fv+/iSgbzer0+AZx/5+88bv6OMda6S5z6kd21fYC9dxv7cIJJ2d9AOS30fPMzyHiTM8B4DF6XUlYHp4KQW3W+1t77MNB1vGHxWq7Xa7vf78+y5/N5A+H1et29xuP5dbYtyaRu4AksbPq6936fjRzXRxBbPr/b+b18+fKljTHaBBBfn8/n0/1+H1++fBnn8zm0sB8fH5u4cr5GuBhMVk0EEn9RsctgVhM+ixlJtMA23R8B6yysAstBOgFXIKKCMIgToMqNEu2fYMH7ztc732dQKkCj1ytAZtY0Kx8pIr8GGJ+AT3V+2Hirhl++fBmXy2Wz73w+b17P8p+fn8/tUwGVleVkTyUb68DkfayWY4zxNRihU4EpLJPZVrK+u7J4/mgfKqeLW9X2REWlItL1diynbDDb3+jXgYjQqn0rrxWc+NkILP7F7xIbMvx7vV53x40xnlbWJF12ZSag/N0pW6t+ZzmOMzHjajKwDfond78zYTdfq18up97zr2q8v3IioBprRtBl0EZ9og5WBRGOdOHjIjXF7UotFbgOWnXzIJyzYvjG5IYgsmMOxHkz8OsMSrVNWeq5T8DaOcbEv1Od5rbs9aO7YvMet63EkF++fMExq+MRl4/L5bLZN/+ez+fnZ6KazuMqXSQVO5spJXflHAIzes/xJseckRJiDMog9d6VfRrqXMr6KpVV27jRwJacGovOAM1zMdQMnwK1AubK63kdCChvI1C7g0z9nf/D+Xze2Vj8H7Gx4P9duQlsYCrqyN8XqG3Hm/10Oj3jw/n+crlstuM+jPmmxT2dTuPz83Pzt2pn1XsEHX/bnPaVqVmh0xwOt0o6XLLAHePUU203wHfcrspCwmV3TryB5s0Mseeg97x/BwzCjBlbB+pRAPla0BVQuT6V6QHdBlj3d0KG147b+DqxQeUymDO43W4dQar+TIjwmAd0z8/h65vf0/yLv3Pb5XLpru/ydDo9s7ET0I+Pj6dKK9VUEIeKWQWPAOrJ8LKd4vE+t91Y3e7UFlWatg2VwJnb+HPmtvm/sfK59/OaWF3x/eP1UPHvA5DDYDpYXfb0drv1V2DkBkxtw/tEWVVlXWdC9pFYs5/jfh9dS/16vW7s6lTG+TfqsxSJHxkXXq/Xdr1eu4LsfD6P3vsT3N77DkL+zPm5jSdKL4zR3AxQd6rHkLkYlSowsrq7znzu6wSwdsMJOXmA5fBcjxtgMGBYHlr5zokhtsMCTgXLQOW4XC6dEyEMprL8mAQzXRgduix2yZzorxkYsDn3hB1VeMLGsXsVtgl2pW8S3svk0vw7R4hNaHvv4cACl5HFzwIH0Kc6zu4XjDPR/jpAVxWzO1Xk2DDb3vTcxeGU1iWZHkmIDWziWKvirCJ4Dravs6IJ/GG6cTqWdXDy+fArQDVVkLqkVjAoZIITdmmIqXwqa95N3+MGYoZQdRVNO53Y1xRkhO16vY7eu507Ca9lJnbGpxOemQhSw/AQsmmp5zU9BiU8G6wvX76M6/U6Pj4+do0Bz4CpgiknTUeDqwlKBmg3u4OVjrZ1A+rAcgaejWq6eJCvCYFDONSwOgHX4EQRw8lxbzDOdEK6gZ3Hk1b+8g2o1JFtKXyv/fEdTXuWjWXdAZiBp6ADeDrCFiim7B6ZFneeI7Gvm/PMkUDX67W7xI8b0D7/v8dA9qfN5oaCf74WZjH0mf1cmfY1Y0JUFmVrTWu8uzkNcLtEj7u5FXBTkfC6GOA5q8YMxO8KVvF6sAVGdcrUbsKODcQKkLMOMdmlxum642YrPm26AlhZW1YB1R+rrGswE8TaYAWeUMxdf+WjwSvZ2Ef3ytOyfn5+PpVPAaqOn43MtNBqvmjjxbjM4lZjZY4gqNMI5ktaW/sYKNwS+9lFQzGihmMCKPa7+Z0V6Eb0GRmobtpX8JljWu5FMLN5ja6hG9kwQgZqf5+1NH5UxzkFReCdWhJ8XdlGUkxO7HRlYRm4mVO43W7ter12TPJEw/rmEN3L5SKHIWZg9mz+pUoKOYq5bJTJdX2gme1UcxMZQFaEQIlHct32M+Y1BzGkGuzfiyAN9z+ugplZ1symCrDCYYkGxDTpI9RzBy0rHyeDUC1nWaeUaD9n4xkNyYMBDZtzZ3B++fJlY21XFDOcARJlabOyiS3uCpLI9jrZjCDkaVvcCCjwognKShWdzXZWlZMvVTgD8LpqlCLrqgbcB+qYwrgKYpT0ccCqbKyCValkEabn/FynogCrPKfqf51xJ7sGB2ZXcZmxoSOztjx300DZi7a0/2AIR0UlBag9SuDw6KcAzlaB7vHZvWpjK90dyrq6bKyDUZQbR0B05biLQkHIcSUmgIK+SwuqgHCnoio2RQU1yj+BnBy9pphVKLGyC7ZzFK1pxWK+E8IhVCWLN/uLtnUU4ayoYLoaANz8FdtaSvY4pV0BEW2ls61czqllBKpTyKgMAhrZ1cdc1RROtPmvWNkdcKZ7ZKxaWjiPLJMpp7OZKxA+rqG/oJLjxf0pnJlqLoDZo3gyU0mKGys2taKecj/d1C+rJSplBqlTyAqgR+D8KjKlmRL2gtUcAdCtsL+ijCNT1oqqqkH2OHEbG5sDFnUg5Aa+yLou2VU1ptj1S2ZQqv1ORZN9IWzRfgaRBxKoBE8UWyqlJFtrIc0AxNjSjed99CTY/XDfSzCz5M0IZoVEsWnPFNTsl8ooVC1TzbGgqFZNDSgVwKK+1sGDMKqxZCWGVMDysiEr1jVSQJUYwj5iHOlThdHt44SQg9CN+nl8D90NMIgAdgr46JqRiR9I8vRdFvbr17m/yxUMKjNLMiVUADwu2CWGhhi+F55TWM9M9cogzms1dnM4uOF/LAEYWdcqnM7yFmyq3IfwmOROd7Y1iFWtOjoY8To41mTV5IysgFFuRzsbWFGbNIIJCDv1dOo4lZG7jWBwRFtVTKuWyeCByJKOan8oZ3ep9XddNl0tDuaywLz9cXPYeDAA0SpkBO9sbVcTOVWldPv4uyzEkzxHtjvonHoSkFEWNoo1d8DhcQputd2ppNon4BzoAiJ1hBFQg0dVtdbGHHDQWushmNEQukLM2QO1G2Y8bgTXqFhcBJj7EjPgcPts8US8qPpPB/dXznOh5Z438tzH5ec6QgrOKrRRfKmysBmUDB+PhYabMlVPER+GCSITTzr7am2tArH3bgcEzPJm+cr5jJ4NnHNFDVrFXcI5Le9k5Jnw+bedbV+FfRzZIHaOOaOsLY0/7UGs58DjrGwKMIMFIGzOEW1/jGsdAtCN6hEAI4hBe9YXeRROBSVPAVPAqvIM5bx5hVKWAMP6zBRy3iescridVdFBinBxXDnG2GRY2XbCvp1lhvGtO9Bxu5h908XQu42lnSArMFdizMim8uwRCxPGnnOS8lwpnbOiDqTAjsrRN/PcoAScCbaACqVM40ylnjjTBs+bwWlAG23/UKbdkiwKWIQPGzWaczpoSlxPEj822cNWkpS7FyzsDrqpfgpG3jahw2vgbaSQAxuLWZYt7JzyNe8JoZpNAcvDFOdw0wqYT9AK1rZz/DdbSlLPp0ryIxgQJlK9AZlEq7IOXpohg9PIhrCng88JsOxiV4ZWAYfg4sikx/8ky2Z9l862uqwrfscIH8+ugTmVGyiddeVYUgEMn4GZzg14EwIsh9sx2cKKiWXReuOE5gzGOQgdlRKVVdlevqb279Xq0Qnsts2VDaBO0coezsruWtHApu6sKG4IBhN0aGU2kLrMKGRTN3HmbCDwKV14zvkMEDG4QfZVspVlaNU2mhc5TEZ3N1h/zqTheuLpW05ZWTGVjb3dbnNmxKZBnN8JqidaVLKAOyARNLS+MB54Z2+VaqoMLKroVBlngefnTPAcoHNWCSvlfA8CI0HEmBNBnBlXyMrzU7A7WVm94PPqQ2gmqKx+WDGsnvilmcSOBJqOK1nYyAIzuAyesq3UdSK3KfWcYKD95HmfYOU3qser2CtYEUA+FpfqdNvgPBZUBhDrGONRVlQsh8rLcaUCykHG0OOUwTlLBrsh5soEMGezi1E4HRVt1icp5wZEFXdibCkG8Y8vX75sbO4E0iom9z+hjSiOfy3DhpXItpVhE+UGQdvoWjtChmrGHf4YAzKgBNnGtuJxFCeGdhUAfQLLK8kBYAP6gvFJZajMG3Xkycy8KuC0q4Eyymwtwdxdv2M0mIBtK0LKnf640j00Auq4gUkdWGlhs22qJc6dZCsL19oxnlTJG4SYVRIGpD8TPFBuM6OElbS1pldid4mGAyN6ZIupbC5bXJN9fdpbThSxLUaI8IG1XIYBxW3Tjs6KQosKcxfxcQmdnwRGM10GnFcCy2XYunLMyAkdgk4mePiczsLygthcBut6goOqS7YVFXADLjaosB6s6ofcZWAZSIRYqSUkizYwttYab3vUOQ9w2HRxIIg8WwRVeE68xi4UtL3zRphxplzwuZrcqYCq1I3jPI5dnJIygEohMbPqVJSzrwzxBJTs5zN+ReUSgxikPQVF3JVBeNQxbHENrEMNvEdFZVV9lH9+ORGEsNZQpyTNc4C3AG7XF4ngzq+DrO2zbuaaOXgdaFcdkEotoSFBVX2qJ0C8OWZeG4KGlpghA0XfTOPCqV2qqwQ26QWfF2PMLhI2w1lVAa2aPsYd0za25MQRwgcZN6uQDCi+ZxiD4XEM2kZxOT41FnZnaRlcpZouzlRqqdbQVWopQoSB58RV50lBNrHi/AwXS5LrwDVlpY3Fc3ByiYGc52Trist6kOXdwInAQtJpp5QchyaquYOV7Su+fxVMaV3dc0RE2S6mUY0gLt2pMcYqrKIQ9w2l1gpQUMtQYcmmbt5DTNxdhnUCjQqtbK9SUSzvrC0mmhhE1e2FS2+oxypy/ZASutkmtjx3vcBC24PX65nbqkBCRhfjS9kIYPnee8cMagVOhI/3T1fAmdtAWZsCswTJCkQVNa0qWKSKPOpHAUhD9DrbVcyoYkwqhvh17vYAayXLQyKGYdxlUDFp494rBXRjYgO17DDYetNIUj/ezp6S0lnlpEwsWmJMkOwsKXeZKEAjIHn0EQJISaRBcO6UMINz7p/bEjjnw4ft+xmDvksxX4G2rIris7qaeKwAFMP2Oi7n4criuZwtpSUwpfLxSnORSrIqusc5ZFaXysqRWjiZ2DyAWEIL35tVSoQElFACjOeGGSE7AHEQgdo/LSvCOgGBvkxsmDbvlS3Fp5vhaB2TAGqRKrKKMrhLVpaGzEVjZ0OQxDhaCTA+QyRR1d15aQzrJntL3RibsipjG6jlgL4yqbS0sNYg1e84vhbBVrElK64CUcWYXDfKxhpIuxiVJZUxsbMy/uRBKTNRQ4kQ3LdRYLS0rJjRPlTPqY6gdJsEDc+aQXAn+HgsNUCbRuF0Oj0zwnA7bWDkbhO5Ens00qeQhS1laBMl5M/cAaxsLF8rKyql+Tf7ELLEGu/ixiimdCvo0TjfpjKwaggen4eh5v7LokLKbLuyvHhcZG8dhGrEDx7Hg93ZppJF7qBqO3iVveXEDQNInzeoe8Yq6ePaZBZ2JviM3W2UAGotekRCAGq4EkF1X3DOnR11yRsBL1tRa0PVcZiNFXZ2c34FskvomInQQ6lzpJoZbJxk43NwKJFBquJSsrByHydxKOnTxQASBmS3j+JMnsHSla3Ec6K9VWoJVn9zfjwOM7hqYAAqJQwE2a3nA48J2QGegRkpZNivSY+ys3EkKd4oJIwsvIHl3cWgLt5k4NH6OmtLWdpurOkwEMupYc7eMtDRhOcI2ui5JhVIzXzLyto/GAPuZoyo8wkoduVgJglCt7OhGbgID4Mq4si+63zUS1FuFFXFlqyaj2emHlLMcBqYu0FMuR28BbB7lOxRMSiCQXFhCKuwkhZ+pYDiGSgbsKKV8MiSRsuHSIWM9rklRiIlZZuqXjsQK8ooYJMgq3JKWVkhHbhsVxFUzthOWPkYijcbx54IKsSdT+uLr3crGKyoYgFiGR9iBk4kfloUX+JIlQRQqabmpgnhqtpQpb6RVQ1WH5DnrS4hEoGZqaerQ2dhFbz8XePxShmDbo70eISjoorO2vK8SJXI4SUmEU4zWKDzUDtWTYw7xXlbSTEj4FRg7zKnKoGRALv0Gs9Tgc1BpCywGZRQAtqVz2xrBcAMzEpfZwFSa2G5W0QBFjSMapWAEFa3HcGN7CxDzECyIkJ97qwrqWNTWVo876PPsjPkj2wvgroM5lLZKMETKVql/CvnWVFiFa/SzJUQwkoZsr67Y6vlSRV3/2tmNTOY3vnaxYwMuoPKqdzR1w7IqHymlPxaAThfU7Ko2ZXYj4AYJHL+kNdKwRQYESTRa5fsUZ/rVC1TMTyWVyYoqNtuzaHsMyv2tvoarxdfqwYgU1axFo/cnql1FGsqK+uAROV8BX4GU8WcZTATi2q7Qcyi0O0V+GhWBMNRUkn8H1SsWVE5By3Gi0ECqUeJoBfAtDa4amkdXG37AGP5Ggeb84p7UazpoKRzdFzeQ8HkoHGxprKy/Hpm5t12p47J6xTYDEz7uINEXSuxYXvFskYAc+ySxH9sf5ftKzU6IbwVBcUGg5e5FMCEXSErZR0wGayV19woM9guPjTqJdVTqR4uE4nJnLldWVkECCZLd2VLF+xtamex7IpiriSDUpvrpn9lrwGMCHyppMH+ps6LILsuFGUj1XEOXiqbqSHPUKnClpWV68kqtURVNDY4TNaocykoYeTU5ngGEQa/S1DnnE4AeXMcKjHPAmFVjCBENaeyLVNHfr3px8xUstJ94hIpfH4HKE/eDaArK6lSyVVFbdt1gxTIVk3pppVlFXi4pEhVBTObquohU85MLXn1iahvUkHJjSCMc01tLFveVVBx0DodM6jftCu7DOtIzYxrc0qp1JGP2ayYFz2Gb6HvMrO8cnGtV6Gjm3uImSfD2GpWK6uowbZGMxFKQCo1pOMtcMXFpRst+hXGoAomF3sSTBGgTglbBKWwsQ3tZqaYSp0Z1CimRDWFcCJUPYJ00BI5FkKYNoifuQxmN88SWVXWLMaUqqqgC0BmQJR6sk3u9NCf6jYLXxAfqsYEgVLAhRY2AtgtflZNFmFyhxdrLkAdWlk4D88M2ixHyepIdhMHrG/iR1ZGtq0MGpbDbRPYOXeSY1M6Ny4ZstvGSktK+XbFPATj2D371saPEsAMXhXrsZ0km/XStkhhMyBfsa6uXFZe2VCe+YMr1+GKgwrQyNYq1VRrB+EizAow6NsdNKcyVEkYeM73ys6q4kAHp6BiFklTkIrVC5oYV7uzwOGCz4UJ0Stq2lWMJy4wtb+RetL6tZFicnJmBw5UjCvXXMZVJX2MQkbf+XN5EWd78Vz8/JEsMZTBiKNzsm1inLRUQ74H4NidaqI68j5sAFgxcRveC7ieLJXfQYxjZZ2CsiWFewZXJmBIlZ1tdtrX4hSuateKso/RZOtOKW2nmq1oTzeK6dRWAWu2NRVb4hq0SXm1GvtugHrbr5IXqmSktg5CuDE2MSlPwsY5kNE2Wp3AqiZbWVLAxiBF+2iBZbuNj6MB6rsMLC7FyasaYDyo7KkoPyEtw3pEMXfPvxAJi2jAQQgjrz0rLIZSWZlIoNhwd5xK4AR9mYNjWAaLrnuImJeBVN9zBORObVvbr+mTTfFSEJLSRnHo7hEJoIi8MFqjxmvgmF5URZz4zLFgZZ8Ctu2X7ggVccKm9gVxIsOHqxXgNMKnFWZYnf1dBnOhayXq17QwFlWW09eNKyVJFmXqaONGA5aCegMbJ3UUkGY1ic3nKWgjq8qfVYGQG1gRt6rs62a6HiqqUOqdesK5NmX4nGofJoiE1d0dF9lVVkvT1/kEEaaCoYOwFpcVcoLM+7669PxC9rWqktH0sWUYld0VCpuBZ/stVRcGgy9WX2+U1Qthi9SzAqSxzZsy+OiFzBYnySGV6Gku44rD8BCOZBV3BvD5+AKRHNwMEsB6EzHnJpkTAeiUlEGkcECeB6GDZTp5YEJTlvdrknxYjTllMkfNtXwDjM7uVjK5JXUUn43rrqpK2jytaxHW0M5G8DC8rtHMYs7KSgduVQMGTYFqFvVS6rkD3sDJ46afdYFwoq11AOKCBLhvwoUgc8IGANycR6knZrdJPdsuxnyjfd3FovTlRMdEdtOl5CMV5EHsXQBis7TOwvIDZaGj2Vnpbh7cpK63VwYEMLwqbjzyl699sawFFkF1yqjUU31HfC6sW1ZFVFuXVXVgz9keEaw0ys1lWfm+azQAQSWA+hKYVfsZjPncAcUB9oIayy/UZXRNckDGji77GsWbvBo6tPrWPqOyVkBUq+INeqpzNdYs/u0ifh5qmpqIW+33JVSUcwY70KL4U9lYdU6ljtSls7lmfi9g3YzeQfVkaGFaV3ODCnaD2N8wsEDFklE3RzM3ZghdYkWHsszq70FIecnKkVkt8ezMzRq9bkGuKojRLBVSod3Y1yPqKgYW7JRQTPVyy5xIYLjOgxgT52RKJUY1dOrIiRd4futQx/A5AcSmEjz0vFWrkLzvbWAu9HOWbGgxFk1VNTpnBKk6TgwisI/HcxYXP1uAWO72ULFlBTq+aSu2VTUs6hrxM2CF+hEor1VIA9ZmFUaab1lSSgZsVs4sxzHlVLoJHr9H4DhONTkI1XC0/wiY2NoWAG5RlnHFnq6oLccpQddMuJ/O17JVA5OHLi0BqCztq7Y1++ucCd98qLI8MIHBV/cKjxQTme3hFBS3MyCqnDsuym2o80HjvFFTtrURmNaGJsmVahImjTsUXKtQZTAVs7Mvv8/+fzUrZAXcLJ6M4koe6XP0b6SmWWNDzyUpQ8bl+LtWx4tuqZ36cRYV3yuVxPNwvIiqiQCSmu7srgTzR6nkyhpCarXwFy1vGd5iP2cY06lFr5Njhhg1Y6+NB28ftbK83s8rf7kLJbKwDFPbLg25a0AdZJEiqr5phixKMDlRUtcssq1hriLqGoH+zeNgVm9OemjsETV8JdF0NHnkIFxWY1OB4Yrp7rtWJ7NgAAAPXklEQVQ3oNs5nplyVf8u2FoLu1JrHveaZWQjqAkshtFa2gzsSG3Zpkbvg3HafF9slPPlldjFlK80Gysm8Mr4MPhneNWENPGjAIpmilTPATdTRTXlCBYHYAQuPwA36xIpWtGN4q3Y2MhiGsUpuSSnlEJRD8PorC7CFYVw+F51qThgabxsTxWzCGY0ZSsb3lfqAy0OPNjNy8xiQQKsHYFQ2HBZVvVbBuq3m1oWKajqaonsM6uZUr6CjXWNZ0l5E3h3jURma6kP3MJIiy1Lm+kahQq41N2iZja5sjtlLYNZHZrH6qUGm4vMbDp6Rw2CFmvuyFkrBcCyMtFqBaECmsHoK9BZ2LA/lJcRqSaDqnaWbrZdGaz3DLgIvBln4woGztbyJGqslwxkhhHrTjTYFXCtOoKS8uLdofVdAbOylGU6nlYpXWZts4nXBq6WxJitMNokHUJnbnJplQm+aGpY2a5GMV2QD1hRubBPFKdumf5OHkLHz0F9luE5kjBjRa0nFE5CUGqHw32MmjZ6xkgINVnSnZ1VZStK2qKlRaLlQgK7uTq7JFXJwM+3SOEKyhZNI+tJ0I5qMYy9k2qJD7dVWdqKXa0CKNR0Ccjg+B2IYu2fcBZJZkMFgM11r0X92wilghFGgzVnexlqB7xL9mS29SiYUVY2nXOZjNBRsyDsQPRWW5hrZ4XcdC4HVWRbjgJr4sFofK5SzjQ7rhI1UebdPdEbj6sqIvTZQZ5va08rABsAW0UxeWytAk7A2KJ9ZpxzCioB24XFtYAeXYxr6anSqhLgppEqWbGwLunTgrV+IjWlL29ljaAl4EQMGsErp4apeZiquwRXLXAqOCeru32mmydc6oWTSWpFAGdzeTB8RTHVMEtlM90CbbQCYhPjq3egYr1FGdYIQjiuDGZ5zZ/AzobKGOyLxti6c4Rwtv2anyWlLICnlLhxJRXt6A5ebDBWFNONbxWZ2d02mnu4S9YECpeppV1zSWRBWxHYzVIv1CXSouwqqX3jBBBDZdYQbpTQW4ZQlS8r5kH4suSRmg2++3JN10x1PaAmEkmtYlEdeGpJEM6kOuCqCR22oSujj5IV2HdT0zj5prLKTjXFAPjdQlyq7xIBxAQP5yMczG4VxAKw0n6ilZ2QBce2pLulkuxxqnoIzFfgqyqjil9S1VNwBrFmeyeops8yOjZUybZdfS8CuaTIJumzs5tODaNtLpFDQ/PcJGweLhmeL1nB0KqiUDScsiUVD89Di3HtrKtSULw3RLiygZD+7sF8JTObgYsrGvDNUFRGl1iy0Ll1YkUc2aJYMog920I8qW6YDCg1Mqk0JHJFKXkbgbRreI+qpYNOZHrVcDUba7pjsphSJNtK6upgRNAVoOS0mugBeN4bIZgHhuPZ/s1ENaX6KsVr+YNrh1Nb7ipR0PE5zbNRegCbrHRUw6Yf07dLBJl1f8KB9as2V1nNqAsl62LBBhehwalerkHmB1JFIEZKSEusdl5JQj1nJlHXSCF342gJ9CYGrXelknJIXqVP8sD+qtplCR3XH2qfKq0ygMp+KnVkKxNlZ8m2YkIlVMiCnXUwl7qznBKSvQz3m3Pt6oQbXO5b5FixCh/fHxUQW/AEcK6zCNqKQnL9sywqmKuwvqSYzT/aPVNNpVyhvRW21aqciCsjdWvBwILUvh5VyCzbWoC1pJjJ680CWsl+udKB6T5RwG1mlohnlpbg47iz5U9ha0FGtmRLFYBtO99y97Ap0z+ZDTAog6kSLZsMHg/IFkkgp6CpvU2U0cYVSdnmkjwBdOmXbxTWNWzuIbipMioVxEckZEoahSOiy2M3K0jcC1LhVDwaqG0ZvkcWqCnrG4GIxykrqlbWdw6LQyBaZR8HmLRIhQWsHswD42ZXVLNkf9l+FlW0HVQ2lwFsC/Z1FdzlQR0KaPfo+Fdfu+/dwVRICu1CGR7AEIiAhc+AZUF0kOBaPxmUqg4i64vQnU4nFDYJ9Nz+1fVXveH9qmr+kPILx8oKcRV/BFbxbE0JMT0kSD4w6L/lNY8ocsqagVdU3A3MjxhxcGuqzsPH4irpaow1q6OyrVjvp9Npc59E91LldboYVzJWdimWfAW2SNEKcDaX2FmBLLA/uKxlmhh613Is1URQApbKfttwxL02q6Onx5pQxSbPojAg+v5hAnN6LHVRDXIsvKtRjiS0qJUyZTAXVbAK82ElFJWaQdVoqUC1Unt7BVaTQudM6SuqexjQJN4+0icaxv/utbKv83ETbT8H8gjcOKxOJmbUa6OOVXht3dFY6rHv9XoNzFLceEA1o8+pKm0LAHPHZ2rYKjFq0hfZFixsqHJgD3eD5n+U0kb1mFjXkn2lvMSSOsNE/CdIAKF0Sytq6urOHUN5gwg4GZosgbmggM5ucra2qrS2Ig1cbiBBcxYzgzUDNLCvL8GbZXNp6ORy3LmS+Kk83zRIAK6A1ioKa2I9NapIuiUFdfC9766PFZUtqUr6KbWk+zZU1a/ZrIXEztrjTOfz7hwKziCeXIaraHtbZIMz+2pGgazCmw4qWAFvEdhodYp0Xq0pV7G1YWYWbO4qhGq42+Z8BYtrLWvluNPpZAeaFFS1vubPgbgxsqcpnAaszBovKaFoDQ8BGtjfUOl4NAG2nmQV04feJgumvX2fsrQEWZghL0JnVdYkn3DOZIeRN86RqPWCmsvGVqEMRnwxQAxwS8EMYo3IzmY2+BCcLp4MKiuyuhImamlbZFcNoNl7tp+RHd18ZjQIRKyXdFRhN98/hyKqwXWNo7O1wiaXoHN108REZZWEq6grnIfjzeg8jdRf1XEL4kkXa5bBjKxoKaljBjeHlVxQ4GaycpW4lDOAKtnTxHAtOfzOtZwHAM7sqVXkV6yu6kap1nHkXKqWF/4XHqjenNKqBjpR3l1ch3Ejg1+EsgdQhsdG0B4FM9sWAVWpuAyiwTPleZxt9VyZVS2qXfReWqTAilpr9ApoWTjxymit7NwV4JTriZyOA9B0k7HFfULourmKYHVnRQvqGL5HMHdqFcR2qWpmcK6eTwx2dipWrviDilr+fKWq3OWRWdHKwA4eu8wjchbeRzFilqjjZN3ufCpfkJ0/scVpnYk6L0PI77lxdWCZ87WiWm7B/AGquQSnujGKsB8CJmiJq8q1pKIVWyqOiTK66r18BN8r74/AE71fdC3yPS2MxdOpnE1tlVxD9JmVOoggN+r4PjAXVFPa3Eg5jVJGFVUGNolH20GVrUB7BOySWq6WqYQdWR92pcFMYMwckbSgCKCqD67DiiWu1g8MQC9ByfcFqW1L+jL714qNCuznoSxt0da2gtWN1G8F0BK0NN0nuimelUF9dIdAfjO44UT3CjQLoUeLHJFTO3gmpRuIIOvwBQCbqNeo3qtZ9iF6xVK13GRlo4zqimq+CGdTiR1uRY8oqgE02hZBa79kZXPMquxRHKla2saZWN4mRqZUj0vLCKhkjKnqOQHNuSZVJoKvAqS1wpEquvWDC1B2ypwrCPsRMEPVTODMLJMDv6qeKXwi2JYV5Sq4qKyvgGsHCLiuj2jR59V8gMqSJ2FJZRXEHVRHj3sFPrct6OpqlW1GpatQdt0GvwfM6n63InsGVFhJGaBqgqqIV6IsXllZgySPq4R3bnt3wi5cv+cN2yqQLW1T95KYVsWWtKk4cB9W53WQQflQYR6Wl4HaJZjvVE0D5yvq+RKgZCs5qdBEP5sD94cAvQLlSgNaSMAtHx88BuNQ41zdFsX30zKbcs0MLD/ihkpQzl0wiTqKLTfbKmCmyYICnK0IbaieC4CG9iSyLQ7cIMGQwau6TKoq60Apl3WN40LZpca1CKKK9VQyyIEn8w0F8F6CL2h8o3ixGwC7s7EWzCOqmcApYxYD4jsAzVS0sl2t98pA7vrKophCVSonbYpgH6mvSn24pTBV4sdtV3BtMq5k82y+IADvUJ0uAlkCVTxIaPm+UNu/qkV4F1TzHXCGrXIAqItBKypqK99VtAOVs64O4ObX7pHLVCpYHcRmwvLR7TvYAKBBN58LGVzDuFz+hQbWgncQyCZAk+VbsPSouf93261iZgmfCpwRbAvqmSqriU2PwhjaoOyYqtIegVXViTsmyta6bGySpY3gyRrpIyAeaWDDxtpsXwKyalMDKNP7YBXMqEskUsi2uC8FNAPxAKTVfT1o6VzM0E0jF+1rWcUuHvdyg7vgoFplX8HpvHpMCOMRUPHzZkInsqlFKNX/EIO52E0SxSzOwob2VmRLW5D1XIU0rbgM1AzWgyC7fe8G7xUAK/taEBat7luqtyP7EmsaJQOj5F+mrnZfCuYCfBUAWwShyd6pMY/vAHG1UqOYpbI/gy5T0CMKm+UO3gFuC85dgfDVeguPDfITrIBLsLrcgdh3CFgFZjaKJ4Iv3F8ANEqvuxR1tVKOgLoCa1jxboBAkj6v7j/icFbA7f4rfRnQDLRViG13i0vqBQrYVqBbADZT0ZpiHoSzvQpopKIFS3sE1HfBWlHXd0H7LnArqvougMtljHBgZnh3Eoz/BKjLML4Z2Aq0+hEJr9jaVUBbvNzCIUiroC7AWmmFw4o5AK3MtB5VypZMSFgs05JyGVwlwBqsEGAAa2ZU1CjUexXGsE4rKriilBvFzOKKo3AuAroE6QFQU3u8YpNXwS5k+1TZt5UrwouN4KiUEw+k3ZWDp1RXHNRqXb21Ts39945yZSg3VnZFNQ9CF3XeZyr5DgBXKiwCMa2MxeTDYXgP1Fsf9QNKZc0k81RJk3r6EQ3rCmBVyLL75EjZ1pIVDHoFtiOAHoB0BdTVylqBsKKKS+AeBXJVLY+CXASuGvO/Auq7GuEjDfGKg1oKa1z/dmmi9I9SUGNhl0AtfulHAawoYrnSkmNXAVuGEhrEVXvUF+A5Ct2PqNOjDetyna4CmeUolmeXLN4Aq7C5Sj10Q7yjgl+t6CNxSRHmI5X+CpwreYB3Qfdqna4q21KdBuc4GoZsn49ZOOiVinwHqK9WzjvgeweEh2AU5+vtxZ9Cd9Wqkh49V18E5oj6vVyn0RStAyGIO5edXRKd5B0VGVXq2yr3xYp+5Ut+C4QJ4P1N339pQMjRejj4vb/Dcr6rQc3O/0rjmtZpeYCBiCHfCemRbNhbK/pNUPc3wfKy5f2D7OlL3/uPhve/oU4T0F8f+VNM2vyoiv0jK+KHQfdHq+0bncz4oz73/+Y6LbKw1o/5B7eOf1Rl/0du9B9tn/9bvrf/j+v0h6ttn2tp/r/4819y4/zv5391uvzzfwDifz6phT1MPgAAAABJRU5ErkJggg==)}.color-picker .cp-add-color-button-class{position:absolute;display:inline;padding:0;margin:3px -3px;border:0;cursor:pointer;background:transparent}.color-picker .cp-add-color-button-class:hover{text-decoration:underline}.color-picker .cp-add-color-button-class:disabled{cursor:not-allowed;color:#999}.color-picker .cp-add-color-button-class:disabled:hover{text-decoration:none}.color-picker .cp-remove-color-button-class{position:absolute;top:-5px;right:-5px;display:block;width:10px;height:10px;border-radius:50%;cursor:pointer;text-align:center;background:#fff;box-shadow:1px 1px 5px #333}.color-picker .cp-remove-color-button-class:before{content:"x";position:relative;bottom:3.5px;display:inline-block;font-size:10px}.color-picker .eyedropper-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);fill:#fff;mix-blend-mode:exclusion}\n']
    }]
  }], function() {
    return [{
      type: NgZone
    }, {
      type: ElementRef
    }, {
      type: ChangeDetectorRef
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }, {
      type: ColorPickerService
    }];
  }, {
    dialogElement: [{
      type: ViewChild,
      args: ["dialogPopup", {
        static: true
      }]
    }],
    hueSlider: [{
      type: ViewChild,
      args: ["hueSlider", {
        static: true
      }]
    }],
    alphaSlider: [{
      type: ViewChild,
      args: ["alphaSlider", {
        static: true
      }]
    }],
    handleEsc: [{
      type: HostListener,
      args: ["document:keyup.esc", ["$event"]]
    }],
    handleEnter: [{
      type: HostListener,
      args: ["document:keyup.enter", ["$event"]]
    }]
  });
})();
var NG_DEV_MODE = typeof ngDevMode === "undefined" || !!ngDevMode;
var ColorPickerDirective = class {
  constructor(injector, cfr, appRef, vcRef, elRef, _service) {
    this.injector = injector;
    this.cfr = cfr;
    this.appRef = appRef;
    this.vcRef = vcRef;
    this.elRef = elRef;
    this._service = _service;
    this.dialogCreated = false;
    this.ignoreChanges = false;
    this.viewAttachedToAppRef = false;
    this.cpWidth = "230px";
    this.cpHeight = "auto";
    this.cpToggle = false;
    this.cpDisabled = false;
    this.cpIgnoredElements = [];
    this.cpFallbackColor = "";
    this.cpColorMode = "color";
    this.cpCmykEnabled = false;
    this.cpOutputFormat = "auto";
    this.cpAlphaChannel = "enabled";
    this.cpDisableInput = false;
    this.cpDialogDisplay = "popup";
    this.cpSaveClickOutside = true;
    this.cpCloseClickOutside = true;
    this.cpUseRootViewContainer = false;
    this.cpPosition = "auto";
    this.cpPositionOffset = "0%";
    this.cpPositionRelativeToArrow = false;
    this.cpOKButton = false;
    this.cpOKButtonText = "OK";
    this.cpOKButtonClass = "cp-ok-button-class";
    this.cpCancelButton = false;
    this.cpCancelButtonText = "Cancel";
    this.cpCancelButtonClass = "cp-cancel-button-class";
    this.cpEyeDropper = false;
    this.cpPresetLabel = "Preset colors";
    this.cpPresetColorsClass = "cp-preset-colors-class";
    this.cpMaxPresetColorsLength = 6;
    this.cpPresetEmptyMessage = "No colors added";
    this.cpPresetEmptyMessageClass = "preset-empty-message";
    this.cpAddColorButton = false;
    this.cpAddColorButtonText = "Add color";
    this.cpAddColorButtonClass = "cp-add-color-button-class";
    this.cpRemoveColorButtonClass = "cp-remove-color-button-class";
    this.cpInputChange = new EventEmitter(true);
    this.cpToggleChange = new EventEmitter(true);
    this.cpSliderChange = new EventEmitter(true);
    this.cpSliderDragEnd = new EventEmitter(true);
    this.cpSliderDragStart = new EventEmitter(true);
    this.colorPickerOpen = new EventEmitter(true);
    this.colorPickerClose = new EventEmitter(true);
    this.colorPickerCancel = new EventEmitter(true);
    this.colorPickerSelect = new EventEmitter(true);
    this.colorPickerChange = new EventEmitter(false);
    this.cpCmykColorChange = new EventEmitter(true);
    this.cpPresetColorsChange = new EventEmitter(true);
  }
  handleClick() {
    this.inputFocus();
  }
  handleFocus() {
    this.inputFocus();
  }
  handleInput(event) {
    this.inputChange(event);
  }
  ngOnDestroy() {
    if (this.cmpRef != null) {
      if (this.viewAttachedToAppRef) {
        this.appRef.detachView(this.cmpRef.hostView);
      }
      this.cmpRef.destroy();
      this.cmpRef = null;
      this.dialog = null;
    }
  }
  ngOnChanges(changes) {
    if (changes.cpToggle && !this.cpDisabled) {
      if (changes.cpToggle.currentValue) {
        this.openDialog();
      } else if (!changes.cpToggle.currentValue) {
        this.closeDialog();
      }
    }
    if (changes.colorPicker) {
      if (this.dialog && !this.ignoreChanges) {
        if (this.cpDialogDisplay === "inline") {
          this.dialog.setInitialColor(changes.colorPicker.currentValue);
        }
        this.dialog.setColorFromString(changes.colorPicker.currentValue, false);
        if (this.cpUseRootViewContainer && this.cpDialogDisplay !== "inline") {
          this.cmpRef.changeDetectorRef.detectChanges();
        }
      }
      this.ignoreChanges = false;
    }
    if (changes.cpPresetLabel || changes.cpPresetColors) {
      if (this.dialog) {
        this.dialog.setPresetConfig(this.cpPresetLabel, this.cpPresetColors);
      }
    }
  }
  openDialog() {
    if (!this.dialogCreated) {
      let vcRef = this.vcRef;
      this.dialogCreated = true;
      this.viewAttachedToAppRef = false;
      if (this.cpUseRootViewContainer && this.cpDialogDisplay !== "inline") {
        const classOfRootComponent = this.appRef.componentTypes[0];
        const appInstance = this.injector.get(classOfRootComponent, Injector.NULL);
        if (appInstance !== Injector.NULL) {
          vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef;
          if (NG_DEV_MODE && vcRef === this.vcRef) {
            console.warn("You are using cpUseRootViewContainer, but the root component is not exposing viewContainerRef!Please expose it by adding 'public vcRef: ViewContainerRef' to the constructor.");
          }
        } else {
          this.viewAttachedToAppRef = true;
        }
      }
      const compFactory = this.cfr.resolveComponentFactory(ColorPickerComponent);
      if (this.viewAttachedToAppRef) {
        this.cmpRef = compFactory.create(this.injector);
        this.appRef.attachView(this.cmpRef.hostView);
        document.body.appendChild(this.cmpRef.hostView.rootNodes[0]);
      } else {
        const injector = Injector.create({
          providers: [],
          // We shouldn't use `vcRef.parentInjector` since it's been deprecated long time ago and might be removed
          // in newer Angular versions: https://github.com/angular/angular/pull/25174.
          parent: vcRef.injector
        });
        this.cmpRef = vcRef.createComponent(compFactory, 0, injector, []);
      }
      this.cmpRef.instance.setupDialog(this, this.elRef, this.colorPicker, this.cpWidth, this.cpHeight, this.cpDialogDisplay, this.cpFallbackColor, this.cpColorMode, this.cpCmykEnabled, this.cpAlphaChannel, this.cpOutputFormat, this.cpDisableInput, this.cpIgnoredElements, this.cpSaveClickOutside, this.cpCloseClickOutside, this.cpUseRootViewContainer, this.cpPosition, this.cpPositionOffset, this.cpPositionRelativeToArrow, this.cpPresetLabel, this.cpPresetColors, this.cpPresetColorsClass, this.cpMaxPresetColorsLength, this.cpPresetEmptyMessage, this.cpPresetEmptyMessageClass, this.cpOKButton, this.cpOKButtonClass, this.cpOKButtonText, this.cpCancelButton, this.cpCancelButtonClass, this.cpCancelButtonText, this.cpAddColorButton, this.cpAddColorButtonClass, this.cpAddColorButtonText, this.cpRemoveColorButtonClass, this.cpEyeDropper, this.elRef, this.cpExtraTemplate);
      this.dialog = this.cmpRef.instance;
      if (this.vcRef !== vcRef) {
        this.cmpRef.changeDetectorRef.detectChanges();
      }
    } else if (this.dialog) {
      this.dialog.openDialog(this.colorPicker);
    }
  }
  closeDialog() {
    if (this.dialog && this.cpDialogDisplay === "popup") {
      this.dialog.closeDialog();
    }
  }
  cmykChanged(value) {
    this.cpCmykColorChange.emit(value);
  }
  stateChanged(state) {
    this.cpToggleChange.emit(state);
    if (state) {
      this.colorPickerOpen.emit(this.colorPicker);
    } else {
      this.colorPickerClose.emit(this.colorPicker);
    }
  }
  colorChanged(value, ignore = true) {
    this.ignoreChanges = ignore;
    this.colorPickerChange.emit(value);
  }
  colorSelected(value) {
    this.colorPickerSelect.emit(value);
  }
  colorCanceled() {
    this.colorPickerCancel.emit();
  }
  inputFocus() {
    const element = this.elRef.nativeElement;
    const ignored = this.cpIgnoredElements.filter((item) => item === element);
    if (!this.cpDisabled && !ignored.length) {
      if (typeof document !== "undefined" && element === document.activeElement) {
        this.openDialog();
      } else if (!this.dialog || !this.dialog.show) {
        this.openDialog();
      } else {
        this.closeDialog();
      }
    }
  }
  inputChange(event) {
    if (this.dialog) {
      this.dialog.setColorFromString(event.target.value, true);
    } else {
      this.colorPicker = event.target.value;
      this.colorPickerChange.emit(this.colorPicker);
    }
  }
  inputChanged(event) {
    this.cpInputChange.emit(event);
  }
  sliderChanged(event) {
    this.cpSliderChange.emit(event);
  }
  sliderDragEnd(event) {
    this.cpSliderDragEnd.emit(event);
  }
  sliderDragStart(event) {
    this.cpSliderDragStart.emit(event);
  }
  presetColorsChanged(value) {
    this.cpPresetColorsChange.emit(value);
  }
};
ColorPickerDirective.\u0275fac = function ColorPickerDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ColorPickerDirective)(\u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(ComponentFactoryResolver$1), \u0275\u0275directiveInject(ApplicationRef), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ColorPickerService));
};
ColorPickerDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: ColorPickerDirective,
  selectors: [["", "colorPicker", ""]],
  hostBindings: function ColorPickerDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function ColorPickerDirective_click_HostBindingHandler() {
        return ctx.handleClick();
      })("focus", function ColorPickerDirective_focus_HostBindingHandler() {
        return ctx.handleFocus();
      })("input", function ColorPickerDirective_input_HostBindingHandler($event) {
        return ctx.handleInput($event);
      });
    }
  },
  inputs: {
    colorPicker: "colorPicker",
    cpWidth: "cpWidth",
    cpHeight: "cpHeight",
    cpToggle: "cpToggle",
    cpDisabled: "cpDisabled",
    cpIgnoredElements: "cpIgnoredElements",
    cpFallbackColor: "cpFallbackColor",
    cpColorMode: "cpColorMode",
    cpCmykEnabled: "cpCmykEnabled",
    cpOutputFormat: "cpOutputFormat",
    cpAlphaChannel: "cpAlphaChannel",
    cpDisableInput: "cpDisableInput",
    cpDialogDisplay: "cpDialogDisplay",
    cpSaveClickOutside: "cpSaveClickOutside",
    cpCloseClickOutside: "cpCloseClickOutside",
    cpUseRootViewContainer: "cpUseRootViewContainer",
    cpPosition: "cpPosition",
    cpPositionOffset: "cpPositionOffset",
    cpPositionRelativeToArrow: "cpPositionRelativeToArrow",
    cpOKButton: "cpOKButton",
    cpOKButtonText: "cpOKButtonText",
    cpOKButtonClass: "cpOKButtonClass",
    cpCancelButton: "cpCancelButton",
    cpCancelButtonText: "cpCancelButtonText",
    cpCancelButtonClass: "cpCancelButtonClass",
    cpEyeDropper: "cpEyeDropper",
    cpPresetLabel: "cpPresetLabel",
    cpPresetColors: "cpPresetColors",
    cpPresetColorsClass: "cpPresetColorsClass",
    cpMaxPresetColorsLength: "cpMaxPresetColorsLength",
    cpPresetEmptyMessage: "cpPresetEmptyMessage",
    cpPresetEmptyMessageClass: "cpPresetEmptyMessageClass",
    cpAddColorButton: "cpAddColorButton",
    cpAddColorButtonText: "cpAddColorButtonText",
    cpAddColorButtonClass: "cpAddColorButtonClass",
    cpRemoveColorButtonClass: "cpRemoveColorButtonClass",
    cpExtraTemplate: "cpExtraTemplate"
  },
  outputs: {
    cpInputChange: "cpInputChange",
    cpToggleChange: "cpToggleChange",
    cpSliderChange: "cpSliderChange",
    cpSliderDragEnd: "cpSliderDragEnd",
    cpSliderDragStart: "cpSliderDragStart",
    colorPickerOpen: "colorPickerOpen",
    colorPickerClose: "colorPickerClose",
    colorPickerCancel: "colorPickerCancel",
    colorPickerSelect: "colorPickerSelect",
    colorPickerChange: "colorPickerChange",
    cpCmykColorChange: "cpCmykColorChange",
    cpPresetColorsChange: "cpPresetColorsChange"
  },
  exportAs: ["ngxColorPicker"],
  standalone: false,
  features: [\u0275\u0275NgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerDirective, [{
    type: Directive,
    args: [{
      selector: "[colorPicker]",
      exportAs: "ngxColorPicker"
    }]
  }], function() {
    return [{
      type: Injector
    }, {
      type: ComponentFactoryResolver$1
    }, {
      type: ApplicationRef
    }, {
      type: ViewContainerRef
    }, {
      type: ElementRef
    }, {
      type: ColorPickerService
    }];
  }, {
    colorPicker: [{
      type: Input
    }],
    cpWidth: [{
      type: Input
    }],
    cpHeight: [{
      type: Input
    }],
    cpToggle: [{
      type: Input
    }],
    cpDisabled: [{
      type: Input
    }],
    cpIgnoredElements: [{
      type: Input
    }],
    cpFallbackColor: [{
      type: Input
    }],
    cpColorMode: [{
      type: Input
    }],
    cpCmykEnabled: [{
      type: Input
    }],
    cpOutputFormat: [{
      type: Input
    }],
    cpAlphaChannel: [{
      type: Input
    }],
    cpDisableInput: [{
      type: Input
    }],
    cpDialogDisplay: [{
      type: Input
    }],
    cpSaveClickOutside: [{
      type: Input
    }],
    cpCloseClickOutside: [{
      type: Input
    }],
    cpUseRootViewContainer: [{
      type: Input
    }],
    cpPosition: [{
      type: Input
    }],
    cpPositionOffset: [{
      type: Input
    }],
    cpPositionRelativeToArrow: [{
      type: Input
    }],
    cpOKButton: [{
      type: Input
    }],
    cpOKButtonText: [{
      type: Input
    }],
    cpOKButtonClass: [{
      type: Input
    }],
    cpCancelButton: [{
      type: Input
    }],
    cpCancelButtonText: [{
      type: Input
    }],
    cpCancelButtonClass: [{
      type: Input
    }],
    cpEyeDropper: [{
      type: Input
    }],
    cpPresetLabel: [{
      type: Input
    }],
    cpPresetColors: [{
      type: Input
    }],
    cpPresetColorsClass: [{
      type: Input
    }],
    cpMaxPresetColorsLength: [{
      type: Input
    }],
    cpPresetEmptyMessage: [{
      type: Input
    }],
    cpPresetEmptyMessageClass: [{
      type: Input
    }],
    cpAddColorButton: [{
      type: Input
    }],
    cpAddColorButtonText: [{
      type: Input
    }],
    cpAddColorButtonClass: [{
      type: Input
    }],
    cpRemoveColorButtonClass: [{
      type: Input
    }],
    cpExtraTemplate: [{
      type: Input
    }],
    cpInputChange: [{
      type: Output
    }],
    cpToggleChange: [{
      type: Output
    }],
    cpSliderChange: [{
      type: Output
    }],
    cpSliderDragEnd: [{
      type: Output
    }],
    cpSliderDragStart: [{
      type: Output
    }],
    colorPickerOpen: [{
      type: Output
    }],
    colorPickerClose: [{
      type: Output
    }],
    colorPickerCancel: [{
      type: Output
    }],
    colorPickerSelect: [{
      type: Output
    }],
    colorPickerChange: [{
      type: Output
    }],
    cpCmykColorChange: [{
      type: Output
    }],
    cpPresetColorsChange: [{
      type: Output
    }],
    handleClick: [{
      type: HostListener,
      args: ["click"]
    }],
    handleFocus: [{
      type: HostListener,
      args: ["focus"]
    }],
    handleInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }]
  });
})();
var ColorPickerModule = class {
};
ColorPickerModule.\u0275fac = function ColorPickerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ColorPickerModule)();
};
ColorPickerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: ColorPickerModule,
  declarations: [ColorPickerComponent, ColorPickerDirective, TextDirective, SliderDirective],
  imports: [CommonModule],
  exports: [ColorPickerDirective]
});
ColorPickerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [ColorPickerService],
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [ColorPickerDirective],
      providers: [ColorPickerService],
      declarations: [ColorPickerComponent, ColorPickerDirective, TextDirective, SliderDirective],
      entryComponents: [ColorPickerComponent]
    }]
  }], null, null);
})();

// src/app/pages/form/advancedform/advancedform.component.ts
var _c04 = ["dp"];
var _c13 = () => ["#fff", "#000", "#2889e9", "#e920e9", "#fff500", "rgb(236,64,64)"];
var AdvancedformComponent = class _AdvancedformComponent {
  constructor() {
    this.dateRangeSelected = new EventEmitter();
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Forms" }, { label: "Advanced", active: true }];
    this.componentcolor = "#3bafda";
    this.presetcolor = "#2889e9";
    this.rgbcolor = "rgba(0, 194, 255, 0.78)";
    this.inlinecolor = "#400e12";
    this.color = "#8FFF00";
    this.selectValue = ["Alaska", "Hawaii", "California", "Nevada", "Oregon", "Washington", "Arizona", "Colorado", "Idaho", "Montana", "Nebraska", "New Mexico", "North Dakota", "Utah", "Wyoming", "Alabama", "Arkansas", "Illinois", "Iowa"];
    this.selected = "";
    this.hidden = true;
  }
  static {
    this.\u0275fac = function AdvancedformComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdvancedformComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdvancedformComponent, selectors: [["app-advancedform"]], viewQuery: function AdvancedformComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c04, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.datePicker = _t.first);
      }
    }, inputs: { fromDate: "fromDate", toDate: "toDate" }, outputs: { dateRangeSelected: "dateRangeSelected" }, decls: 113, vars: 37, consts: [[1, "container-fluid"], ["title", "Form Advanced", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-title-desc"], [1, "col-lg-6"], [1, "mb-3"], [1, "form-label"], [3, "items"], [3, "items", "multiple"], [1, "sub-header"], ["type", "text", 1, "colorpicker-default", "form-control", 3, "colorPickerChange", "value", "colorPicker", "cpOutputFormat", "cpPosition"], ["id", "component-colorpicker", "title", "Using format option", 1, "input-group"], ["type", "text", 1, "form-control", "input-lg", 3, "value"], [1, "input-group-text"], ["type", "text", 1, "colorpicker-default", "form-control", 3, "colorPickerChange", "value", "colorPicker", "cpDisableInput", "cpPresetColors"], [3, "colorPickerChange", "cpToggle", "cpDialogDisplay", "cpDisableInput", "colorPicker"], [1, "input-group", "clockpicker"], ["bsDatepicker", "", "autoClose", "false", "placeholder", "yyyy-mm-dd", 1, "form-control"], [1, "input-group-append"], [1, "mdi", "mdi-calendar"], ["bsDatepicker", "", "placeholder", "yyyy-mm-dd", 1, "form-control"], ["type", "text", "name", "daterange", "autocomplete", "off", "bsDaterangepicker", "", 1, "form-control", "date", 3, "click", "ngModelChange", "ngModel"], ["action", "#"], ["id", "timepicker-input-group1", 1, "input-group"], ["type", "text", "mwlFlatpickr", "", 1, "form-control", "flatpickr-input", 3, "noCalendar", "enableTime", "dateFormat"], [1, "mdi", "mdi-clock-outline"], [1, "font-size-14", "mb-3"], ["color", "#556ee6", "uncheckedLabel", "off", "checkedLabel", "on", "size", "small", 1, "me-1", 3, "checked"], ["color", "#a2a2a2", "uncheckedLabel", "off", "checkedLabel", "on", "size", "small", 1, "me-1", 3, "checked"], ["color", "#556ee6", "uncheckedLabel", "No", "checkedLabel", "Yes", "size", "small", 1, "me-1", 3, "checked"], ["color", "#a2a2a2", "uncheckedLabel", "No", "checkedLabel", "Yes", "size", "small", 1, "me-1", 3, "checked"], ["color", "#34c38f", "uncheckedLabel", "No", "checkedLabel", "Yes", "size", "small", 1, "me-1", 3, "checked"], ["color", "#50a5f1", "uncheckedLabel", "No", "checkedLabel", "Yes", "size", "small", 1, "me-1", 3, "checked"], ["color", "#f1b44c", "uncheckedLabel", "No", "checkedLabel", "Yes", "size", "small", 1, "me-1", 3, "checked"], ["color", "#f46a6a", "uncheckedLabel", "No", "checkedLabel", "Yes", "size", "small", 1, "me-1", 3, "checked"], ["color", "##343a40", "uncheckedLabel", "No", "checkedLabel", "Yes", "size", "small", 1, "me-1", 3, "checked"]], template: function AdvancedformComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
        \u0275\u0275text(7, "Select2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 7);
        \u0275\u0275text(9, "A mobile and touch friendly input spinner component for Bootstrap");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "form")(11, "div", 2)(12, "div", 8)(13, "div", 9)(14, "label", 10);
        \u0275\u0275text(15, "Single Select");
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "ng-select", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 8)(18, "div", 9)(19, "label", 10);
        \u0275\u0275text(20, "Multiple Select");
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "ng-select", 12);
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(22, "div", 2)(23, "div", 8)(24, "div", 4)(25, "div", 5)(26, "h4", 6);
        \u0275\u0275text(27, "Colorpicker");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p", 13);
        \u0275\u0275text(29, "Bootstrap Colorpicker is a modular color picker plugin for Bootstrap 4");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 9)(31, "label");
        \u0275\u0275text(32, "Simple input field");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "input", 14);
        \u0275\u0275twoWayListener("colorPickerChange", function AdvancedformComponent_Template_input_colorPickerChange_33_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.color, $event) || (ctx.color = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 9)(35, "label");
        \u0275\u0275text(36, "With custom options - RGBA");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "input", 14);
        \u0275\u0275twoWayListener("colorPickerChange", function AdvancedformComponent_Template_input_colorPickerChange_37_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.rgbcolor, $event) || (ctx.rgbcolor = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 9)(39, "label");
        \u0275\u0275text(40, "As Component");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 15);
        \u0275\u0275element(42, "input", 16)(43, "span", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 9)(45, "label");
        \u0275\u0275text(46, "Preset Color");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "input", 18);
        \u0275\u0275twoWayListener("colorPickerChange", function AdvancedformComponent_Template_input_colorPickerChange_47_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.presetcolor, $event) || (ctx.presetcolor = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 9)(49, "label");
        \u0275\u0275text(50, "Inline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "span", 19);
        \u0275\u0275twoWayListener("colorPickerChange", function AdvancedformComponent_Template_span_colorPickerChange_51_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.inlinecolor, $event) || (ctx.inlinecolor = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(52, "div", 8)(53, "div", 4)(54, "div", 5)(55, "h4", 6);
        \u0275\u0275text(56, "Date Picker");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "p", 13);
        \u0275\u0275text(58, "Examples of bootstrap datepicker.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "div")(60, "div", 9)(61, "label");
        \u0275\u0275text(62, "Default Picker");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div", 20);
        \u0275\u0275element(64, "input", 21);
        \u0275\u0275elementStart(65, "div", 22)(66, "span", 17);
        \u0275\u0275element(67, "i", 23);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(68, "div", 9)(69, "label");
        \u0275\u0275text(70, "Auto close");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "div", 20);
        \u0275\u0275element(72, "input", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "div", 9)(74, "label");
        \u0275\u0275text(75, "Date Range");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "input", 25);
        \u0275\u0275listener("click", function AdvancedformComponent_Template_input_click_76_listener() {
          return ctx.hidden = !ctx.hidden;
        });
        \u0275\u0275twoWayListener("ngModelChange", function AdvancedformComponent_Template_input_ngModelChange_76_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selected, $event) || (ctx.selected = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(77, "div", 4)(78, "div", 5)(79, "h4", 6);
        \u0275\u0275text(80, "Timepicker");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "p", 7);
        \u0275\u0275text(82, "Easily select a time for a text input using your mouse or keyboards arrow keys.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "form", 26)(84, "div", 9)(85, "label", 10);
        \u0275\u0275text(86, "Default Time Picker");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "div", 27);
        \u0275\u0275element(88, "input", 28);
        \u0275\u0275elementStart(89, "span", 17);
        \u0275\u0275element(90, "i", 29);
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(91, "div", 2)(92, "div", 3)(93, "div", 4)(94, "div", 5)(95, "h4", 6);
        \u0275\u0275text(96, "Css Switch");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "p", 7);
        \u0275\u0275text(98, "Here are a few types of switches. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "div", 2)(100, "div", 8)(101, "h5", 30);
        \u0275\u0275text(102, "Example switch");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "div");
        \u0275\u0275element(104, "ui-switch", 31)(105, "ui-switch", 32)(106, "ui-switch", 33)(107, "ui-switch", 34)(108, "ui-switch", 35)(109, "ui-switch", 36)(110, "ui-switch", 37)(111, "ui-switch", 38)(112, "ui-switch", 39);
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(15);
        \u0275\u0275property("items", ctx.selectValue);
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.selectValue)("multiple", true);
        \u0275\u0275advance(12);
        \u0275\u0275property("value", ctx.color);
        \u0275\u0275twoWayProperty("colorPicker", ctx.color);
        \u0275\u0275property("cpOutputFormat", "hex")("cpPosition", "bottom");
        \u0275\u0275advance(4);
        \u0275\u0275property("value", ctx.rgbcolor);
        \u0275\u0275twoWayProperty("colorPicker", ctx.rgbcolor);
        \u0275\u0275property("cpOutputFormat", "rgba")("cpPosition", "bottom");
        \u0275\u0275advance(5);
        \u0275\u0275property("value", ctx.componentcolor);
        \u0275\u0275advance(5);
        \u0275\u0275property("value", ctx.presetcolor);
        \u0275\u0275twoWayProperty("colorPicker", ctx.presetcolor);
        \u0275\u0275property("cpDisableInput", true)("cpPresetColors", \u0275\u0275pureFunction0(36, _c13));
        \u0275\u0275advance(4);
        \u0275\u0275styleProp("background", ctx.inlinecolor);
        \u0275\u0275property("cpToggle", true)("cpDialogDisplay", "inline")("cpDisableInput", true);
        \u0275\u0275twoWayProperty("colorPicker", ctx.inlinecolor);
        \u0275\u0275advance(25);
        \u0275\u0275twoWayProperty("ngModel", ctx.selected);
        \u0275\u0275advance(12);
        \u0275\u0275property("noCalendar", true)("enableTime", true)("dateFormat", "H:i");
        \u0275\u0275advance(16);
        \u0275\u0275property("checked", true);
        \u0275\u0275advance();
        \u0275\u0275property("checked", true);
        \u0275\u0275advance();
        \u0275\u0275property("checked", true);
        \u0275\u0275advance();
        \u0275\u0275property("checked", true);
        \u0275\u0275advance();
        \u0275\u0275property("checked", true);
        \u0275\u0275advance();
        \u0275\u0275property("checked", true);
        \u0275\u0275advance();
        \u0275\u0275property("checked", true);
        \u0275\u0275advance();
        \u0275\u0275property("checked", true);
        \u0275\u0275advance();
        \u0275\u0275property("checked", true);
      }
    }, dependencies: [PagetitleComponent, UiSwitchModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, UiSwitchComponent, FlatpickrDirective, NgSelectModule, NgSelectComponent, ColorPickerModule, ColorPickerDirective, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective, BsDaterangepickerDirective, BsDaterangepickerInputDirective], styles: ["\n\n.custom-day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n.custom-day.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n.custom-day.range[_ngcontent-%COMP%], \n.custom-day[_ngcontent-%COMP%]:hover {\n  background-color: #556ee6;\n  color: white;\n}\n.custom-day.faded[_ngcontent-%COMP%] {\n  background-color: #556ee6;\n}\n/*# sourceMappingURL=advancedform.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdvancedformComponent, [{
    type: Component,
    args: [{ selector: "app-advancedform", imports: [PagetitleComponent, UiSwitchModule, FlatpickrDirective, NgSelectModule, ColorPickerModule, BsDatepickerModule], template: `<div class="container-fluid">\r
  <app-page-title title="Form Advanced" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
\r
  <div class="row">\r
    <div class="col-lg-12">\r
        <div class="card">\r
            <div class="card-body">\r
\r
                <h4 class="card-title">Select2</h4>\r
                <p class="card-title-desc">A mobile and touch friendly input spinner component for\r
                    Bootstrap</p>\r
\r
                <form>\r
                    <div class="row">\r
                        <div class="col-lg-6">\r
                            <div class="mb-3">\r
                                <label class="form-label">Single Select</label>\r
                                <ng-select [items]="selectValue"></ng-select>\r
                            </div>\r
                        </div>\r
\r
                        <div class="col-lg-6">\r
                          <div class="mb-3">\r
                            <label class="form-label">Multiple Select</label>\r
                            <ng-select [items]="selectValue" [multiple]="true"></ng-select>\r
                          </div>\r
                        </div>\r
                    </div>\r
\r
                </form>\r
\r
            </div>\r
        </div>\r
        <!-- end select2 -->\r
    </div>\r
</div>\r
<!-- end row -->\r
\r
  <div class="row">\r
    <!-- Color picker -->\r
    <div class="col-lg-6">\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title">Colorpicker</h4>\r
          <p class="sub-header">Bootstrap Colorpicker is a modular color picker plugin for Bootstrap 4</p>\r
\r
          <div class="mb-3">\r
            <label>Simple input field</label>\r
            <input type="text" class="colorpicker-default form-control" [value]="color" [(colorPicker)]="color"\r
              [cpOutputFormat]="'hex'" [cpPosition]="'bottom'">\r
          </div>\r
\r
          <div class="mb-3">\r
            <label>With custom options - RGBA</label>\r
            <input type="text" class="colorpicker-default form-control" [value]="rgbcolor" [(colorPicker)]="rgbcolor"\r
              [cpOutputFormat]="'rgba'" [cpPosition]="'bottom'">\r
          </div>\r
\r
          <div class="mb-3">\r
            <label>As Component</label>\r
            <div id="component-colorpicker" class="input-group" title="Using format option">\r
              <input type="text" class="form-control input-lg" [value]="componentcolor">\r
              <span class="input-group-text">\r
                <!-- <span class="input-group-text colorpicker-input-addon" [style.background]="componentcolor"\r
                  [(colorPicker)]="componentcolor" [cpPosition]="'bottom'"><i></i></span> -->\r
              </span>\r
            </div>\r
          </div>\r
\r
          <div class="mb-3">\r
            <label>Preset Color</label>\r
            <input type="text" class="colorpicker-default form-control" [value]="presetcolor"\r
              [(colorPicker)]="presetcolor" [cpDisableInput]="true"\r
              [cpPresetColors]="['#fff', '#000', '#2889e9', '#e920e9', '#fff500', 'rgb(236,64,64)']">\r
          </div>\r
\r
          <div class="mb-3">\r
            <label>Inline</label>\r
            <span [style.background]="inlinecolor" [cpToggle]="true" [cpDialogDisplay]="'inline'"\r
              [cpDisableInput]="true" [(colorPicker)]="inlinecolor"></span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <!-- End color picker -->\r
\r
    <!-- Date picker -->\r
    <div class="col-lg-6">\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title">Date Picker</h4>\r
          <p class="sub-header">Examples of bootstrap datepicker.</p>\r
\r
          <div>\r
            <div class="mb-3">\r
              <label>Default Picker</label>\r
              <div class="input-group clockpicker">\r
                <input bsDatepicker class="form-control" autoClose="false" placeholder="yyyy-mm-dd">\r
                <div class="input-group-append" >\r
                  <span class="input-group-text"><i class="mdi mdi-calendar"></i></span>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="mb-3">\r
              <label>Auto close</label>\r
              <div class="input-group clockpicker">\r
                <input bsDatepicker class="form-control" placeholder="yyyy-mm-dd" >\r
                <!-- <div class="input-group-append" (click)="d.toggle()">\r
                  <span class="input-group-text"><i class="mdi mdi-calendar"></i></span>\r
                </div> -->\r
              </div>\r
            </div>\r
\r
            <div class="mb-3">\r
              <label>Date Range</label>\r
\r
              <input type="text" class="form-control date" (click)="hidden=!hidden" name="daterange" autocomplete="off"\r
                [(ngModel)]="selected" bsDaterangepicker/>\r
\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="card">\r
        <div class="card-body">\r
\r
            <h4 class="card-title">Timepicker</h4>\r
            <p class="card-title-desc">Easily select a time for a text input using your mouse or\r
                keyboards arrow keys.</p>\r
\r
            <form action="#">\r
                <div class="mb-3">\r
                    <label class="form-label">Default Time Picker</label>\r
                    <div class="input-group" id="timepicker-input-group1">\r
                      <input class="form-control flatpickr-input" type="text" mwlFlatpickr\r
                      [noCalendar]="true" [enableTime]="true" [dateFormat]="'H:i'">\r
                        <span class="input-group-text"><i class="mdi mdi-clock-outline"></i></span>\r
                    </div>\r
                </div>\r
            </form>\r
        </div>\r
      </div>\r
\r
    </div>\r
    <!-- End datepicker -->\r
  </div>\r
  <!-- end row -->\r
\r
  <div class="row">\r
    <div class="col-lg-12">\r
        <div class="card">\r
            <div class="card-body">\r
\r
                <h4 class="card-title">Css Switch</h4>\r
                <p class="card-title-desc">Here are a few types of switches. </p>\r
\r
                <div class="row">\r
                    <div class="col-lg-6">\r
                        <h5 class="font-size-14 mb-3">Example switch</h5>\r
                        <div>\r
                          <ui-switch  color="#556ee6"  [checked]="true" uncheckedLabel="off" checkedLabel="on" size="small" class="me-1"></ui-switch>\r
                          <ui-switch  color="#a2a2a2"  [checked]="true" uncheckedLabel="off" checkedLabel="on" size="small" class="me-1"></ui-switch>\r
                          <ui-switch  color="#556ee6"  [checked]="true" uncheckedLabel="No" checkedLabel="Yes" size="small" class="me-1"></ui-switch>\r
                          <ui-switch  color="#a2a2a2"  [checked]="true" uncheckedLabel="No" checkedLabel="Yes" size="small" class="me-1"></ui-switch>\r
                          <ui-switch  color="#34c38f"  [checked]="true" uncheckedLabel="No" checkedLabel="Yes" size="small" class="me-1"></ui-switch>\r
                          <ui-switch  color="#50a5f1"  [checked]="true" uncheckedLabel="No" checkedLabel="Yes" size="small" class="me-1"></ui-switch>\r
                          <ui-switch  color="#f1b44c"  [checked]="true" uncheckedLabel="No" checkedLabel="Yes" size="small" class="me-1"></ui-switch>\r
                          <ui-switch  color="#f46a6a"  [checked]="true" uncheckedLabel="No" checkedLabel="Yes" size="small" class="me-1"></ui-switch>\r
                          <ui-switch  color="##343a40"  [checked]="true" uncheckedLabel="No" checkedLabel="Yes" size="small" class="me-1"></ui-switch>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
  </div>\r
  <!-- end row -->\r
\r
</div>\r
`, styles: ["/* src/app/pages/form/advancedform/advancedform.component.scss */\n.custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n.custom-day.focused {\n  background-color: #e6e6e6;\n}\n.custom-day.range,\n.custom-day:hover {\n  background-color: #556ee6;\n  color: white;\n}\n.custom-day.faded {\n  background-color: #556ee6;\n}\n/*# sourceMappingURL=advancedform.component.css.map */\n"] }]
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdvancedformComponent, { className: "AdvancedformComponent", filePath: "src/app/pages/form/advancedform/advancedform.component.ts", lineNumber: 20 });
})();

// src/app/pages/form/repeater/repeater.component.ts
function RepeaterComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 32)(2, "div", 33)(3, "label", 34);
    \u0275\u0275text(4, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 33)(7, "label", 36);
    \u0275\u0275text(8, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 33)(11, "label", 38);
    \u0275\u0275text(12, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 33)(15, "label", 40);
    \u0275\u0275text(16, "Resume");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 33)(19, "label", 42);
    \u0275\u0275text(20, "Message");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "textarea", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 44)(23, "div", 45)(24, "input", 46);
    \u0275\u0275listener("click", function RepeaterComponent_For_11_Template_input_click_24_listener() {
      const $index_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeField($index_r2));
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const $index_r2 = ctx.$index;
    \u0275\u0275advance();
    \u0275\u0275property("formGroupName", $index_r2);
  }
}
function RepeaterComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 47);
    \u0275\u0275element(2, "input", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 49)(4, "div", 45)(5, "input", 50);
    \u0275\u0275listener("click", function RepeaterComponent_For_36_Template_input_click_5_listener() {
      const $index_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deletePhone($index_r5));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const $index_r5 = ctx.$index;
    \u0275\u0275property("formGroupName", $index_r5);
  }
}
var RepeaterComponent = class _RepeaterComponent {
  constructor(fb) {
    this.fb = fb;
    this.form = this.fb.group({
      formlist: this.fb.array([])
    }), this.phoneData = this.fb.group({
      phoneValue: this.fb.array([])
    });
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Forms" }, { label: "Form Repeater", active: true }];
    this.formData().push(this.field());
    this.phonedata().push(this.phone());
  }
  formData() {
    return this.form.get("formlist");
  }
  phonedata() {
    return this.phoneData.get("phoneValue");
  }
  phone() {
    return this.fb.group({
      phonenumber: ""
    });
  }
  field() {
    return this.fb.group({
      name: "",
      email: "",
      subject: "",
      file: "",
      msg: ""
    });
  }
  /**
   * Add phone field in list
   */
  addPhone() {
    this.phonedata().push(this.phone());
  }
  /**
   * Remove field from form
   * @param i specified index to remove
   */
  removeField(i) {
    if (confirm("Are you sure you want to delete this element?")) {
      this.formData().removeAt(i);
    }
  }
  /**
   * Delete phone field from list
   * @param i specified index
   */
  deletePhone(i) {
    this.phonedata().removeAt(i);
  }
  /**
   * Add field in form
   */
  addField() {
    this.formData().push(this.field());
  }
  static {
    this.\u0275fac = function RepeaterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RepeaterComponent)(\u0275\u0275directiveInject(UntypedFormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RepeaterComponent, selectors: [["app-repeater"]], decls: 55, vars: 3, consts: [[1, "container-fluid"], ["title", "Form Repeater", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [1, "repeater", 3, "formGroup"], ["formArrayName", "formlist"], ["type", "button", "value", "Add", 1, "btn", "btn-success", "mt-3", "mt-lg-0", 3, "click"], [1, "col-lg-12"], [1, "outer-repeater"], [1, "outer"], [1, "mb-3"], ["for", "formname"], ["type", "text", "id", "formname", "placeholder", "Enter your Name...", 1, "form-control"], ["for", "formemail"], ["type", "email", "id", "formemail", "placeholder", "Enter your Email...", 1, "form-control"], [1, "mb-4"], [1, "mb-3", 3, "formGroup"], ["formArrayName", "phoneValue"], [1, "inner", "mb-3", "row", 3, "formGroupName"], ["type", "button", "value", "Add Number", 1, "btn", "btn-success", "inner", 3, "click"], [1, "d-block", "mb-3"], [1, "form-check", "form-check-inline"], ["type", "radio", "name", "inlineRadioOptions", "id", "inlineRadio1", "value", "option1", 1, "form-check-input"], ["for", "inlineRadio1", 1, "form-check-label"], ["type", "radio", "name", "inlineRadioOptions", "id", "inlineRadio2", "value", "option2", 1, "form-check-input"], ["for", "inlineRadio2", 1, "form-check-label"], ["for", "formmessage"], ["id", "formmessage", "rows", "3", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "row", 3, "formGroupName"], [1, "mb-3", "col-lg-2"], ["for", "name"], ["type", "text", "formControlName", "name", 1, "form-control"], ["for", "email"], ["type", "email", "formControlName", "email", 1, "form-control"], ["for", "subject"], ["type", "text", "formControlName", "subject", 1, "form-control"], ["for", "resume"], ["type", "file", "formControlName", "file", "id", "resume", 1, "form-control-file", "form-control"], ["for", "message"], ["formControlName", "msg", 1, "form-control"], [1, "col-lg-2", "align-self-center"], [1, "d-grid"], ["type", "button", "value", "Delete", 1, "btn", "btn-primary", 3, "click"], [1, "col-md-10", "col-8"], ["type", "text", "formControlName", "phonenumber", "placeholder", "Enter your phone no...", 1, "inner", "form-control"], [1, "col-md-2", "col-4"], ["type", "button", "value", "Delete", 1, "btn", "btn-primary", "inner", 3, "click"]], template: function RepeaterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
        \u0275\u0275text(7, "Example");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "form", 7)(9, "div", 8);
        \u0275\u0275repeaterCreate(10, RepeaterComponent_For_11_Template, 25, 1, "div", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementStart(12, "input", 9);
        \u0275\u0275listener("click", function RepeaterComponent_Template_input_click_12_listener() {
          return ctx.addField();
        });
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(13, "div", 2)(14, "div", 10)(15, "div", 4)(16, "div", 5)(17, "h4", 6);
        \u0275\u0275text(18, "Nested");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "form", 11)(20, "div", 12)(21, "div")(22, "div", 13)(23, "label", 14);
        \u0275\u0275text(24, "Name :");
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "input", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 13)(27, "label", 16);
        \u0275\u0275text(28, "Email :");
        \u0275\u0275elementEnd();
        \u0275\u0275element(29, "input", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 18)(31, "div", 19)(32, "div", 20)(33, "label");
        \u0275\u0275text(34, "Phone no :");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(35, RepeaterComponent_For_36_Template, 6, 1, "div", 21, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "input", 22);
        \u0275\u0275listener("click", function RepeaterComponent_Template_input_click_37_listener() {
          return ctx.addPhone();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 13)(39, "label", 23);
        \u0275\u0275text(40, "Gender :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 24);
        \u0275\u0275element(42, "input", 25);
        \u0275\u0275elementStart(43, "label", 26);
        \u0275\u0275text(44, "Male");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 24);
        \u0275\u0275element(46, "input", 27);
        \u0275\u0275elementStart(47, "label", 28);
        \u0275\u0275text(48, "Female");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "div", 13)(50, "label", 29);
        \u0275\u0275text(51, "Message :");
        \u0275\u0275elementEnd();
        \u0275\u0275element(52, "textarea", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "button", 31);
        \u0275\u0275text(54, "Submit");
        \u0275\u0275elementEnd()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(7);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.formData().controls);
        \u0275\u0275advance(21);
        \u0275\u0275property("formGroup", ctx.phoneData);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.phonedata().controls);
      }
    }, dependencies: [PagetitleComponent, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, FormArrayName], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RepeaterComponent, [{
    type: Component,
    args: [{ selector: "app-repeater", imports: [PagetitleComponent, ReactiveFormsModule], template: '<div class="container-fluid">\r\n\r\n  <!-- start page title -->\r\n  <app-page-title title="Form Repeater" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r\n  <!-- end page title -->\r\n\r\n  <div class="row">\r\n    <div class="col-12">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title mb-4">Example</h4>\r\n          <form class="repeater" [formGroup]="form">\r\n            <div formArrayName="formlist">\r\n              @for(data1 of formData().controls;track $index){\r\n              <div>\r\n                <div [formGroupName]="$index" class="row">\r\n                  <div class="mb-3 col-lg-2">\r\n                    <label for="name">Name</label>\r\n                    <input type="text" formControlName="name" class="form-control">\r\n                  </div>\r\n\r\n                  <div class="mb-3 col-lg-2">\r\n                    <label for="email">Email</label>\r\n                    <input type="email" formControlName="email" class="form-control">\r\n                  </div>\r\n\r\n                  <div class="mb-3 col-lg-2">\r\n                    <label for="subject">Subject</label>\r\n                    <input type="text" formControlName="subject" class="form-control">\r\n                  </div>\r\n\r\n                  <div class="mb-3 col-lg-2">\r\n                    <label for="resume">Resume</label>\r\n                    <input type="file" class="form-control-file form-control" formControlName="file" id="resume">\r\n                  </div>\r\n\r\n                  <div class="mb-3 col-lg-2">\r\n                    <label for="message">Message</label>\r\n                    <textarea class="form-control" formControlName="msg"></textarea>\r\n                  </div>\r\n\r\n                  <div class="col-lg-2 align-self-center">\r\n                    <div class="d-grid">\r\n                      <input type="button" class="btn btn-primary" value="Delete" (click)="removeField($index)">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>}\r\n              <input type="button" class="btn btn-success mt-3 mt-lg-0" value="Add" (click)="addField()">\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="row">\r\n    <div class="col-lg-12">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title mb-4">Nested</h4>\r\n          <form class="outer-repeater">\r\n            <div class="outer">\r\n              <div>\r\n                <div class="mb-3">\r\n                  <label for="formname">Name :</label>\r\n                  <input type="text" class="form-control" id="formname" placeholder="Enter your Name...">\r\n                </div>\r\n\r\n                <div class="mb-3">\r\n                  <label for="formemail">Email :</label>\r\n                  <input type="email" class="form-control" id="formemail" placeholder="Enter your Email...">\r\n                </div>\r\n\r\n                <div class="mb-4">\r\n                  <div class="mb-3" [formGroup]="phoneData">\r\n                    <div formArrayName="phoneValue">\r\n                      <label>Phone no :</label>\r\n                      @for(data1 of phonedata().controls;track $index){\r\n                      <div class="inner mb-3 row" [formGroupName]="$index">\r\n                        <div class="col-md-10 col-8">\r\n                          <input type="text" class="inner form-control" formControlName="phonenumber" placeholder="Enter your phone no...">\r\n                        </div>\r\n                        <div class="col-md-2 col-4">\r\n                          <div class="d-grid">\r\n                            <input type="button" class="btn btn-primary inner" value="Delete" (click)="deletePhone($index)">\r\n                          </div>\r\n                        </div>\r\n                      </div>}\r\n                    </div>\r\n                  </div>\r\n                  <input type="button" class="btn btn-success inner" value="Add Number" (click)="addPhone()">\r\n                </div>\r\n\r\n                <div class="mb-3">\r\n                  <label class="d-block mb-3">Gender :</label>\r\n\r\n                  <div class="form-check form-check-inline">\r\n                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">\r\n                    <label class="form-check-label" for="inlineRadio1">Male</label>\r\n                  </div>\r\n                  <div class="form-check form-check-inline">\r\n                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">\r\n                    <label class="form-check-label" for="inlineRadio2">Female</label>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="mb-3">\r\n                  <label for="formmessage">Message :</label>\r\n                  <textarea id="formmessage" class="form-control" rows="3"></textarea>\r\n                </div>\r\n                <button type="submit" class="btn btn-primary">Submit</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>' }]
  }], () => [{ type: UntypedFormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RepeaterComponent, { className: "RepeaterComponent", filePath: "src/app/pages/form/repeater/repeater.component.ts", lineNumber: 17 });
})();

// src/app/pages/form/layouts/layouts.component.ts
var LayoutsComponent = class _LayoutsComponent {
  constructor() {
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Forms" }, { label: "Form Layouts", active: true }];
  }
  static {
    this.\u0275fac = function LayoutsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LayoutsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutsComponent, selectors: [["app-layouts"]], decls: 194, vars: 1, consts: [[1, "container-fluid"], ["title", "Form Layouts", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-6"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [1, "mb-3"], ["for", "formrow-firstname-input"], ["type", "text", "id", "formrow-firstname-input", "placeholder", "Enter Your First Name", 1, "form-control"], [1, "col-md-6"], ["for", "formrow-email-input"], ["type", "email", "id", "formrow-email-input", "placeholder", "Enter Your Email ID", 1, "form-control"], ["for", "formrow-password-input"], ["type", "password", "id", "formrow-password-input", "placeholder", "Enter Your Password", 1, "form-control"], [1, "col-lg-4"], ["for", "formrow-inputCity"], ["type", "text", "id", "formrow-inputCity", "placeholder", "Enter Your Living City", 1, "form-control"], ["for", "formrow-inputState"], ["id", "formrow-inputState", 1, "form-control"], ["selected", ""], ["for", "formrow-inputZip"], ["type", "text", "id", "formrow-inputZip", "placeholder", "Enter Your Zip Code", 1, "form-control"], [1, "form-check"], ["type", "checkbox", "id", "gridCheck", 1, "form-check-input"], ["for", "gridCheck", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary", "w-md"], [1, "row", "mb-4"], ["for", "horizontal-firstname-input", 1, "col-sm-3", "col-form-label"], [1, "col-sm-9"], ["type", "text", "id", "horizontal-firstname-input", "placeholder", "Enter Your", 1, "form-control"], ["for", "horizontal-email-input", 1, "col-sm-3", "col-form-label"], ["type", "email", "id", "horizontal-email-input", 1, "form-control"], ["for", "horizontal-password-input", 1, "col-sm-3", "col-form-label"], ["type", "password", "id", "horizontal-password-input", 1, "form-control"], [1, "row", "justify-content-end"], [1, "form-check", "mb-4"], ["type", "checkbox", "id", "horizontalLayout-Check", 1, "form-check-input"], ["for", "horizontalLayout-Check", 1, "form-check-label"], [1, "col-lg-12"], [1, "row", "gy-2", "gx-3", "align-items-center"], [1, "col-sm-auto"], ["for", "autoSizingInput", 1, "visually-hidden"], ["type", "text", "id", "autoSizingInput", "placeholder", "Jane Doe", 1, "form-control"], ["for", "autoSizingInputGroup", 1, "visually-hidden"], [1, "input-group"], [1, "input-group-text"], ["type", "text", "id", "autoSizingInputGroup", "placeholder", "Username", 1, "form-control"], ["for", "autoSizingSelect", 1, "visually-hidden"], ["id", "autoSizingSelect", 1, "form-select"], ["value", "1"], ["value", "2"], ["value", "3"], ["type", "checkbox", "id", "autoSizingCheck", 1, "form-check-input"], ["for", "autoSizingCheck", 1, "form-check-label"], [1, "row", "row-cols-lg-auto", "g-3", "align-items-center"], [1, "col-12"], ["for", "inlineFormInputGroupUsername", 1, "visually-hidden"], ["type", "text", "id", "inlineFormInputGroupUsername", "placeholder", "Username", 1, "form-control"], ["for", "inlineFormSelectPref", 1, "visually-hidden"], ["id", "inlineFormSelectPref", 1, "form-select"], ["type", "checkbox", "id", "inlineFormCheck", 1, "form-check-input"], ["for", "inlineFormCheck", 1, "form-check-label"], [1, "col-xl-6"], [1, "card-title"], [1, "card-title-desc"], [1, "form-floating", "mb-3"], ["type", "text", "id", "floatingnameInput", "placeholder", "Enter Name", "value", "Maria Laird", 1, "form-control"], ["for", "floatingnameInput"], ["type", "email", "id", "floatingemailInput", "placeholder", "Enter Email address", "value", "name@example.com", 1, "form-control"], ["for", "floatingemailInput"], ["id", "floatingSelectGrid", "aria-label", "Floating label select example", 1, "form-select"], ["for", "floatingSelectGrid"], ["type", "checkbox", "id", "floatingCheck", 1, "form-check-input"], ["for", "floatingCheck", 1, "form-check-label"]], template: function LayoutsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
        \u0275\u0275text(7, "Form grid layout");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "form")(9, "div", 7)(10, "label", 8);
        \u0275\u0275text(11, "First name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "input", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 2)(14, "div", 10)(15, "div", 7)(16, "label", 11);
        \u0275\u0275text(17, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 10)(20, "div", 7)(21, "label", 13);
        \u0275\u0275text(22, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(23, "input", 14);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "div", 2)(25, "div", 15)(26, "div", 7)(27, "label", 16);
        \u0275\u0275text(28, "City");
        \u0275\u0275elementEnd();
        \u0275\u0275element(29, "input", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 15)(31, "div", 7)(32, "label", 18);
        \u0275\u0275text(33, "State");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "select", 19)(35, "option", 20);
        \u0275\u0275text(36, "Choose...");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "option");
        \u0275\u0275text(38, "...");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(39, "div", 15)(40, "div", 7)(41, "label", 21);
        \u0275\u0275text(42, "Zip");
        \u0275\u0275elementEnd();
        \u0275\u0275element(43, "input", 22);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(44, "div", 7)(45, "div", 23);
        \u0275\u0275element(46, "input", 24);
        \u0275\u0275elementStart(47, "label", 25);
        \u0275\u0275text(48, " Check me out ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "div")(50, "button", 26);
        \u0275\u0275text(51, "Submit");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(52, "div", 3)(53, "div", 4)(54, "div", 5)(55, "h4", 6);
        \u0275\u0275text(56, "Horizontal form layout");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "form")(58, "div", 27)(59, "label", 28);
        \u0275\u0275text(60, "First name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 29);
        \u0275\u0275element(62, "input", 30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div", 27)(64, "label", 31);
        \u0275\u0275text(65, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "div", 29);
        \u0275\u0275element(67, "input", 32);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "div", 27)(69, "label", 33);
        \u0275\u0275text(70, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "div", 29);
        \u0275\u0275element(72, "input", 34);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "div", 35)(74, "div", 29)(75, "div", 36);
        \u0275\u0275element(76, "input", 37);
        \u0275\u0275elementStart(77, "label", 38);
        \u0275\u0275text(78, " Remember me ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "div")(80, "button", 26);
        \u0275\u0275text(81, "Submit");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(82, "div", 2)(83, "div", 39)(84, "div", 4)(85, "div", 5)(86, "h5", 6);
        \u0275\u0275text(87, "Auto Sizing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "form", 40)(89, "div", 41)(90, "label", 42);
        \u0275\u0275text(91, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(92, "input", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "div", 41)(94, "label", 44);
        \u0275\u0275text(95, "Username");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "div", 45)(97, "div", 46);
        \u0275\u0275text(98, "@");
        \u0275\u0275elementEnd();
        \u0275\u0275element(99, "input", 47);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(100, "div", 41)(101, "label", 48);
        \u0275\u0275text(102, "Preference");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "select", 49)(104, "option", 20);
        \u0275\u0275text(105, "Choose...");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "option", 50);
        \u0275\u0275text(107, "One");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "option", 51);
        \u0275\u0275text(109, "Two");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "option", 52);
        \u0275\u0275text(111, "Three");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(112, "div", 41)(113, "div", 23);
        \u0275\u0275element(114, "input", 53);
        \u0275\u0275elementStart(115, "label", 54);
        \u0275\u0275text(116, " Remember me ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(117, "div", 41)(118, "button", 26);
        \u0275\u0275text(119, "Submit");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(120, "div", 2)(121, "div", 39)(122, "div", 4)(123, "div", 5)(124, "h5", 6);
        \u0275\u0275text(125, "Inline forms");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "form", 55)(127, "div", 56)(128, "label", 57);
        \u0275\u0275text(129, "Username");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "div", 45)(131, "div", 46);
        \u0275\u0275text(132, "@");
        \u0275\u0275elementEnd();
        \u0275\u0275element(133, "input", 58);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(134, "div", 56)(135, "label", 59);
        \u0275\u0275text(136, "Preference");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "select", 60)(138, "option", 20);
        \u0275\u0275text(139, "Choose...");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "option", 50);
        \u0275\u0275text(141, "One");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "option", 51);
        \u0275\u0275text(143, "Two");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "option", 52);
        \u0275\u0275text(145, "Three");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(146, "div", 56)(147, "div", 23);
        \u0275\u0275element(148, "input", 61);
        \u0275\u0275elementStart(149, "label", 62);
        \u0275\u0275text(150, " Remember me ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(151, "div", 56)(152, "button", 26);
        \u0275\u0275text(153, "Submit");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(154, "div", 2)(155, "div", 63)(156, "div", 4)(157, "div", 5)(158, "h5", 64);
        \u0275\u0275text(159, "Floating labels");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "p", 65);
        \u0275\u0275text(161, "Create beautifully simple form labels that float over your input fields.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "form")(163, "div", 66);
        \u0275\u0275element(164, "input", 67);
        \u0275\u0275elementStart(165, "label", 68);
        \u0275\u0275text(166, "Name");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(167, "div", 2)(168, "div", 10)(169, "div", 66);
        \u0275\u0275element(170, "input", 69);
        \u0275\u0275elementStart(171, "label", 70);
        \u0275\u0275text(172, "Email address");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(173, "div", 10)(174, "div", 66)(175, "select", 71)(176, "option", 20);
        \u0275\u0275text(177, "Open this select menu");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "option", 50);
        \u0275\u0275text(179, "One");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(180, "option", 51);
        \u0275\u0275text(181, "Two");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(182, "option", 52);
        \u0275\u0275text(183, "Three");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(184, "label", 72);
        \u0275\u0275text(185, "Works with selects");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(186, "div", 7)(187, "div", 23);
        \u0275\u0275element(188, "input", 73);
        \u0275\u0275elementStart(189, "label", 74);
        \u0275\u0275text(190, " Check me out ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(191, "div")(192, "button", 26);
        \u0275\u0275text(193, "Submit");
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
      }
    }, dependencies: [PagetitleComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutsComponent, [{
    type: Component,
    args: [{ selector: "app-layouts", imports: [PagetitleComponent], template: '<div class="container-fluid">\r\n\r\n    <!-- start page title -->\r\n    <app-page-title title="Form Layouts" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r\n    <!-- end page title -->\r\n\r\n    <div class="row">\r\n        <div class="col-lg-6">\r\n            <div class="card">\r\n                <div class="card-body">\r\n                    <h4 class="card-title mb-4">Form grid layout</h4>\r\n\r\n                    <form>\r\n                        <div class="mb-3">\r\n                            <label for="formrow-firstname-input">First name</label>\r\n                            <input type="text" class="form-control" id="formrow-firstname-input" placeholder="Enter Your First Name">\r\n                        </div>\r\n\r\n                        <div class="row">\r\n\r\n                            <div class="col-md-6">\r\n                                <div class="mb-3">\r\n                                    <label for="formrow-email-input">Email</label>\r\n                                    <input type="email" class="form-control" id="formrow-email-input" placeholder="Enter Your Email ID">\r\n                                </div>\r\n                            </div>\r\n                            <div class="col-md-6">\r\n                                <div class="mb-3">\r\n                                    <label for="formrow-password-input">Password</label>\r\n                                    <input type="password" class="form-control" id="formrow-password-input" placeholder="Enter Your Password" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class="row">\r\n                            <div class="col-lg-4">\r\n                                <div class="mb-3">\r\n                                    <label for="formrow-inputCity">City</label>\r\n                                    <input type="text" class="form-control" id="formrow-inputCity" placeholder="Enter Your Living City">\r\n                                </div>\r\n                            </div>\r\n                            <div class="col-lg-4">\r\n                                <div class="mb-3">\r\n                                    <label for="formrow-inputState">State</label>\r\n                                    <select id="formrow-inputState" class="form-control">\r\n                                        <option selected>Choose...</option>\r\n                                        <option>...</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class="col-lg-4">\r\n                                <div class="mb-3">\r\n                                    <label for="formrow-inputZip">Zip</label>\r\n                                    <input type="text" class="form-control" id="formrow-inputZip" placeholder="Enter Your Zip Code">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class="mb-3">\r\n                            <div class="form-check">\r\n                                <input class="form-check-input" type="checkbox" id="gridCheck">\r\n                                <label class="form-check-label" for="gridCheck">\r\n                                    Check me out\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n                        <div>\r\n                            <button type="submit" class="btn btn-primary w-md">Submit</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="col-lg-6">\r\n            <div class="card">\r\n                <div class="card-body">\r\n                    <h4 class="card-title mb-4">Horizontal form layout</h4>\r\n\r\n                    <form>\r\n                        <div class="row mb-4">\r\n                            <label for="horizontal-firstname-input" class="col-sm-3 col-form-label">First name</label>\r\n                            <div class="col-sm-9">\r\n                                <input type="text" class="form-control" id="horizontal-firstname-input" placeholder="Enter Your">\r\n                            </div>\r\n                        </div>\r\n                        <div class="row mb-4">\r\n                            <label for="horizontal-email-input" class="col-sm-3 col-form-label">Email</label>\r\n                            <div class="col-sm-9">\r\n                                <input type="email" class="form-control" id="horizontal-email-input">\r\n                            </div>\r\n                        </div>\r\n                        <div class="row mb-4">\r\n                            <label for="horizontal-password-input" class="col-sm-3 col-form-label">Password</label>\r\n                            <div class="col-sm-9">\r\n                                <input type="password" class="form-control" id="horizontal-password-input">\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class="row justify-content-end">\r\n                            <div class="col-sm-9">\r\n                                <div class="form-check mb-4">\r\n                                    <input class="form-check-input" type="checkbox" id="horizontalLayout-Check">\r\n                                    <label class="form-check-label" for="horizontalLayout-Check">\r\n                                        Remember me\r\n                                    </label>\r\n                                </div>\r\n\r\n                                <div>\r\n                                    <button type="submit" class="btn btn-primary w-md">Submit</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- end row -->\r\n    <div class="row">\r\n        <div class="col-lg-12">\r\n            <div class="card">\r\n                <div class="card-body">\r\n                    <h5 class="card-title mb-4">Auto Sizing</h5>\r\n\r\n                    <form class="row gy-2 gx-3 align-items-center">\r\n                        <div class="col-sm-auto">\r\n                            <label class="visually-hidden" for="autoSizingInput">Name</label>\r\n                            <input type="text" class="form-control" id="autoSizingInput" placeholder="Jane Doe">\r\n                        </div>\r\n                        <div class="col-sm-auto">\r\n                            <label class="visually-hidden" for="autoSizingInputGroup">Username</label>\r\n                            <div class="input-group">\r\n                                <div class="input-group-text">&#64;</div>\r\n                                <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="Username">\r\n                            </div>\r\n                        </div>\r\n                        <div class="col-sm-auto">\r\n                            <label class="visually-hidden" for="autoSizingSelect">Preference</label>\r\n                            <select class="form-select" id="autoSizingSelect">\r\n                                <option selected>Choose...</option>\r\n                                <option value="1">One</option>\r\n                                <option value="2">Two</option>\r\n                                <option value="3">Three</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class="col-sm-auto">\r\n                            <div class="form-check">\r\n                                <input class="form-check-input" type="checkbox" id="autoSizingCheck">\r\n                                <label class="form-check-label" for="autoSizingCheck">\r\n                                    Remember me\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n                        <div class="col-sm-auto">\r\n                            <button type="submit" class="btn btn-primary w-md">Submit</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n                <!-- end card body -->\r\n            </div>\r\n            <!-- end card -->\r\n        </div>\r\n        <!-- end col -->\r\n    </div>\r\n    <!-- end row -->\r\n    <div class="row">\r\n        <div class="col-lg-12">\r\n            <div class="card">\r\n                <div class="card-body">\r\n                    <h5 class="card-title mb-4">Inline forms</h5>\r\n\r\n                    <form class="row row-cols-lg-auto g-3 align-items-center">\r\n                        <div class="col-12">\r\n                            <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>\r\n                            <div class="input-group">\r\n                                <div class="input-group-text">&#64;</div>\r\n                                <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username">\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class="col-12">\r\n                            <label class="visually-hidden" for="inlineFormSelectPref">Preference</label>\r\n                            <select class="form-select" id="inlineFormSelectPref">\r\n                                <option selected>Choose...</option>\r\n                                <option value="1">One</option>\r\n                                <option value="2">Two</option>\r\n                                <option value="3">Three</option>\r\n                            </select>\r\n                        </div>\r\n\r\n                        <div class="col-12">\r\n                            <div class="form-check">\r\n                                <input class="form-check-input" type="checkbox" id="inlineFormCheck">\r\n                                <label class="form-check-label" for="inlineFormCheck">\r\n                                    Remember me\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class="col-12">\r\n                            <button type="submit" class="btn btn-primary w-md">Submit</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n                <!-- end card body -->\r\n            </div>\r\n            <!-- end card -->\r\n        </div>\r\n        <!-- end col -->\r\n    </div>\r\n    <!-- end row -->\r\n    <div class="row">\r\n        <div class="col-xl-6">\r\n            <div class="card">\r\n                <div class="card-body">\r\n                    <h5 class="card-title">Floating labels</h5>\r\n                    <p class="card-title-desc">Create beautifully simple form labels that float over your input fields.</p>\r\n\r\n                    <form>\r\n                        <div class="form-floating mb-3">\r\n                            <input type="text" class="form-control" id="floatingnameInput" placeholder="Enter Name" value="Maria Laird">\r\n                            <label for="floatingnameInput">Name</label>\r\n                        </div>\r\n                        <div class="row">\r\n                            <div class="col-md-6">\r\n                                <div class="form-floating mb-3">\r\n                                    <input type="email" class="form-control" id="floatingemailInput" placeholder="Enter Email address" value="name@example.com">\r\n                                    <label for="floatingemailInput">Email address</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class="col-md-6">\r\n                                <div class="form-floating mb-3">\r\n                                    <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">\r\n                                        <option selected>Open this select menu</option>\r\n                                        <option value="1">One</option>\r\n                                        <option value="2">Two</option>\r\n                                        <option value="3">Three</option>\r\n                                    </select>\r\n                                    <label for="floatingSelectGrid">Works with selects</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class="mb-3">\r\n\r\n                            <div class="form-check">\r\n                                <input class="form-check-input" type="checkbox" id="floatingCheck">\r\n                                <label class="form-check-label" for="floatingCheck">\r\n                                    Check me out\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n                        <div>\r\n                            <button type="submit" class="btn btn-primary w-md">Submit</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n                <!-- end card body -->\r\n            </div>\r\n            <!-- end card -->\r\n        </div>\r\n        <!-- end col -->\r\n    </div>\r\n    <!-- end row -->\r\n</div>' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutsComponent, { className: "LayoutsComponent", filePath: "src/app/pages/form/layouts/layouts.component.ts", lineNumber: 11 });
})();

// src/app/pages/form/form-routing.module.ts
var routes = [
  {
    path: "elements",
    component: ElementsComponent
  },
  {
    path: "validation",
    component: ValidationComponent
  },
  {
    path: "editor",
    component: EditorComponent
  },
  {
    path: "uploads",
    component: UploadsComponent
  },
  {
    path: "wizard",
    component: WizardComponent
  },
  {
    path: "mask",
    component: MaskComponent
  },
  {
    path: "advanced",
    component: AdvancedformComponent
  },
  {
    path: "repeater",
    component: RepeaterComponent
  },
  {
    path: "layouts",
    component: LayoutsComponent
  }
];
var FormRoutingModule = class _FormRoutingModule {
  static {
    this.\u0275fac = function FormRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FormRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/pages/form/form.module.ts
var FormModule = class _FormModule {
  static {
    this.\u0275fac = function FormModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FormModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [FormRoutingModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        FormRoutingModule,
        FlatpickrDirective
      ]
    }]
  }], null, null);
})();

export {
  FormModule
};
//# sourceMappingURL=chunk-S5E22PO7.js.map
