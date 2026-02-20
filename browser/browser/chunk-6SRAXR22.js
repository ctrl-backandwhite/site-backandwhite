import {
  adduserlist,
  deleteuserlist,
  fetchuserGridData,
  fetchuserlistData,
  updateuserlist
} from "./chunk-4YV2U45U.js";
import {
  StatComponent
} from "./chunk-WLG6NHLS.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-5H32OP7N.js";
import {
  PaginationComponent,
  PaginationModule
} from "./chunk-AMVJFW2N.js";
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
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  RequiredValidator,
  SelectMultipleControlValueAccessor,
  UntypedFormBuilder,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-ICQKGMTO.js";
import {
  CommonModule,
  Component,
  NgClass,
  NgModule,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
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

// src/app/store/UserList/userlist-selector.ts
var selectDataState = createFeatureSelector("userList");
var selectData = createSelector(selectDataState, (state) => state.UserListdata);
var selectDataLoading = createSelector(selectDataState, (state) => state.loading);
var selectDataError = createSelector(selectDataState, (state) => state.error);

// src/app/pages/contacts/userlist/userlist.component.ts
var _c0 = ["newContactModal"];
var _c1 = ["removeItemModal"];
function UserlistComponent_For_35_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "img", 97);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275interpolate(data_r3.profile), \u0275\u0275sanitizeUrl);
  }
}
function UserlistComponent_For_35_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "span", 98);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r3.name.charAt(0), " ");
  }
}
function UserlistComponent_For_35_ul_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 99)(1, "li")(2, "a", 100);
    \u0275\u0275listener("click", function UserlistComponent_For_35_ul_34_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const $index_r5 = \u0275\u0275nextContext().$index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.editUser($index_r5));
    });
    \u0275\u0275element(3, "i", 101);
    \u0275\u0275text(4, " Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "li")(6, "a", 102);
    \u0275\u0275listener("click", function UserlistComponent_For_35_ul_34_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const data_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.removeUser(data_r3.id));
    });
    \u0275\u0275element(7, "i", 103);
    \u0275\u0275text(8, " Delete");
    \u0275\u0275elementEnd()()();
  }
}
function UserlistComponent_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275conditionalCreate(2, UserlistComponent_For_35_Conditional_2_Template, 2, 2, "div")(3, UserlistComponent_For_35_Conditional_3_Template, 3, 1, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "h5", 82)(6, "a", 83);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 84);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "div")(14, "a", 85);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 85);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "a", 85);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21, " 152 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td")(23, "ul", 86)(24, "li", 87)(25, "a", 88);
    \u0275\u0275element(26, "i", 89);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "li", 87)(28, "a", 90);
    \u0275\u0275element(29, "i", 91);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "li", 92)(31, "div", 93)(32, "a", 94);
    \u0275\u0275element(33, "i", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, UserlistComponent_For_35_ul_34_Template, 9, 0, "ul", 96);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(data_r3.profile ? 2 : 3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(data_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.position);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.email);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r3.tags[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.tags[1]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.tags[2]);
  }
}
var UserlistComponent = class _UserlistComponent {
  constructor(modalService, formBuilder, store) {
    this.modalService = modalService;
    this.formBuilder = formBuilder;
    this.store = store;
    this.submitted = false;
    this.files = [];
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Contacts" }, { label: "Users List", active: true }];
    setTimeout(() => {
      this.store.dispatch(fetchuserlistData());
      this.store.select(selectData).subscribe((data) => {
        this.contactsList = data;
        this.returnedArray = data;
        this.contactsList = this.returnedArray.slice(0, 10);
      });
      document.getElementById("elmLoader")?.classList.add("d-none");
    }, 1200);
    this.createContactForm = this.formBuilder.group({
      id: [""],
      name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      position: ["", [Validators.required]],
      tags: ["", [Validators.required]],
      profile: ["", [Validators.required]]
    });
  }
  fileChange(event) {
    let fileList = event.target;
    let file = fileList.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result;
      document.querySelectorAll("#member-img").forEach((element) => {
        element.src = this.imageURL;
      });
      this.createContactForm.controls["profile"].setValue(this.imageURL);
    };
    reader.readAsDataURL(file);
  }
  // Save User
  saveUser() {
    if (this.createContactForm.valid) {
      if (this.createContactForm.get("id")?.value) {
        const updatedData = this.createContactForm.value;
        this.store.dispatch(updateuserlist({ updatedData }));
      } else {
        this.createContactForm.controls["id"].setValue((this.contactsList.length + 1).toString());
        const newData = this.createContactForm.value;
        this.store.dispatch(adduserlist({ newData }));
      }
    }
    this.newContactModal?.hide();
    document.querySelectorAll("#member-img").forEach((element) => {
      element.src = "assets/images/users/user-dummy-img.jpg";
    });
    setTimeout(() => {
      this.createContactForm.reset();
    }, 1e3);
  }
  // fiter job
  searchJob() {
    if (this.term) {
      this.contactsList = this.returnedArray.filter((data) => {
        return data.name.toLowerCase().includes(this.term.toLowerCase());
      });
    } else {
      this.contactsList = this.returnedArray;
    }
  }
  // Edit User
  editUser(id) {
    this.submitted = false;
    this.newContactModal?.show();
    var modelTitle = document.querySelector(".modal-title");
    modelTitle.innerHTML = "Edit Profile";
    var updateBtn = document.getElementById("addContact-btn");
    updateBtn.innerHTML = "Update";
    this.createContactForm.patchValue(this.contactsList[id]);
  }
  // pagechanged
  pageChanged(event) {
    const startItem = (event.page - 1) * event.itemsPerPage;
    this.endItem = event.page * event.itemsPerPage;
    this.contactsList = this.returnedArray.slice(startItem, this.endItem);
  }
  // Delete User
  removeUser(id) {
    this.deleteId = id;
    this.removeItemModal?.show();
  }
  confirmDelete(id) {
    this.store.dispatch(deleteuserlist({ id: this.deleteId }));
    this.removeItemModal?.hide();
  }
  static {
    this.\u0275fac = function UserlistComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserlistComponent)(\u0275\u0275directiveInject(BsModalService), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserlistComponent, selectors: [["app-userlist"]], viewQuery: function UserlistComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.newContactModal = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.removeItemModal = _t.first);
      }
    }, decls: 130, vars: 5, consts: [["newContactModal", "bs-modal"], ["removeItemModal", "bs-modal"], [1, "container-fluid"], ["title", "Users List", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "row", "mb-2"], [1, "col-sm-4"], [1, "search-box", "me-2", "mb-2", "d-inline-block"], [1, "position-relative"], ["type", "text", "id", "searchTableList", "placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "bx", "bx-search-alt", "search-icon"], [1, "col-sm-8"], [1, "text-sm-end"], ["type", "button", "data-bs-toggle", "modal", 1, "btn", "btn-success", "btn-rounded", "waves-effect", "waves-light", "addContact-modal", "mb-2", 3, "click"], [1, "mdi", "mdi-plus", "me-1"], [1, "table-responsive"], ["id", "userList-table", 1, "table", "align-middle", "table-nowrap", "table-hover", "dt-responsive", "nowrap", "w-100"], [1, "table-light"], ["scope", "col", 2, "width", "40px"], ["scope", "col"], ["scope", "col", 2, "width", "200px"], [1, "pagination", "pagination-rounded", "justify-content-center", "mt-4"], [1, "pagination-wrap", "hstack", "gap-2", 3, "pageChanged", "totalItems", "itemsPerPage"], ["bsModal", "", "id", "newContactModal", "tabindex", "-1", "aria-labelledby", "newContactModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "newContactModalLabel", 1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], ["autocomplete", "off", "id", "createContact-form", "novalidate", "", 1, "needs-validation", "createContact-form", 3, "ngSubmit", "formGroup"], ["type", "hidden", "id", "userid-input", 1, "form-control"], [1, "text-center", "mb-4"], [1, "position-relative", "d-inline-block"], [1, "position-absolute", "bottom-0", "end-0"], ["for", "member-image-input", "data-bs-toggle", "tooltip", "data-bs-placement", "right", "title", "Select Member Image", 1, "mb-0"], [1, "avatar-xs"], [1, "avatar-title", "bg-light", "border", "rounded-circle", "text-muted", "cursor-pointer"], [1, "bx", "bxs-image-alt"], ["value", "", "id", "member-image-input", "type", "file", "accept", "image/png, image/gif, image/jpeg", 1, "form-control", "d-none", 3, "change"], [1, "avatar-lg"], [1, "avatar-title", "bg-light", "rounded-circle"], ["src", "assets/images/users/user-dummy-img.jpg", "id", "member-img", 1, "avatar-md", "rounded-circle", "h-auto"], [1, "mb-3"], ["for", "username-input", 1, "form-label"], ["type", "text", "id", "username-input", "placeholder", "Enter name", "formControlName", "name", "required", "", 1, "form-control"], [1, "invalid-feedback"], ["for", "designation-input", 1, "form-label"], ["type", "text", "id", "designation-input", "placeholder", "Enter Designation", "formControlName", "position", "required", "", 1, "form-control"], ["for", "email-input", 1, "form-label"], ["type", "email", "id", "email-input", "placeholder", "Enter email", "formControlName", "email", "required", "", 1, "form-control"], ["for", "tag-input", 1, "form-label"], ["id", "tag-input", "multiple", "multiple", "formControlName", "tags", "data-placeholder", "Choose ...", 1, "select2", "form-control", "select2-multiple"], ["value", "Photoshop"], ["value", "illustrator"], ["value", "Html"], ["value", "Css"], ["value", "Javascript"], ["value", "Php"], ["value", "Java"], ["value", "Ruby"], ["value", "Python"], [1, "text-end"], ["type", "button", 1, "btn", "btn-outline-secondary", "me-1", 3, "click"], ["type", "submit", "id", "addContact-btn", 1, "btn", "btn-success"], ["id", "elmLoader", 1, "text-center"], ["role", "status", 1, "spinner-border", "text-primary", "avatar-sm"], [1, "visually-hidden"], ["bsModal", "", "id", "removeItemModal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "px-4", "py-5", "text-center"], ["type", "button", 1, "btn-close", "position-absolute", "end-0", "top-0", "m-3", 3, "click"], [1, "avatar-sm", "mb-4", "mx-auto"], [1, "avatar-title", "bg-primary", "text-primary", "bg-opacity-10", "font-size-20", "rounded-3"], [1, "mdi", "mdi-trash-can-outline"], [1, "text-muted", "font-size-16", "mb-4"], [1, "hstack", "gap-2", "justify-content-center", "mb-0"], ["type", "button", "id", "remove-item", 1, "btn", "btn-danger", "me-1", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "font-size-14", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark"], [1, "text-muted", "mb-0"], ["href", "javascript: void(0);", 1, "badge", "badge-soft-primary", "font-size-11", "m-1"], [1, "list-inline", "font-size-20", "contact-links", "mb-0"], [1, "list-inline-item", "px-2"], ["href", "javascript:void(0);", "tooltip", "Message"], [1, "bx", "bx-message-square-dots"], ["href", "javascript:void(0);", "tooltip", "Profile"], [1, "bx", "bx-user-circle"], [1, "list-inline-item"], ["dropdown", "", 1, "dropdown"], ["dropdownToggle", "", "href", "javascript: void(0);", "aria-expanded", "true", 1, "dropdown-toggle", "card-drop", "px-2", "show"], [1, "mdi", "mdi-dots-horizontal", "font-size-18"], ["class", "dropdown-menu dropdown-menu-end show", "style", "position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 31.25px);", "placement", "bottom-end", 4, "dropdownMenu"], ["alt", "", 1, "rounded-circle", "avatar-xs", 3, "src"], [1, "avatar-title", "rounded-circle"], ["placement", "bottom-end", 1, "dropdown-menu", "dropdown-menu-end", "show", 2, "position", "absolute", "inset", "0px 0px auto auto", "margin", "0px", "transform", "translate(0px, 31.25px)"], ["href", "javascript:void(0);", "data-edit-id", "8", 1, "dropdown-item", "edit-list", 3, "click"], [1, "mdi", "mdi-pencil", "font-size-16", "text-success", "me-1"], ["href", "javascript:void(0);", "data-remove-id", "8", 1, "dropdown-item", "remove-list", 3, "click"], [1, "mdi", "mdi-trash-can", "font-size-16", "text-danger", "me-1"]], template: function UserlistComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275element(1, "app-page-title", 3);
        \u0275\u0275elementStart(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "div", 7)(6, "div", 8)(7, "div", 9)(8, "div", 10)(9, "div", 11)(10, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function UserlistComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.term, $event) || (ctx.term = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function UserlistComponent_Template_input_ngModelChange_10_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.searchJob());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "i", 13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 14)(13, "div", 15)(14, "button", 16);
        \u0275\u0275listener("click", function UserlistComponent_Template_button_click_14_listener() {
          \u0275\u0275restoreView(_r1);
          const newContactModal_r2 = \u0275\u0275reference(41);
          return \u0275\u0275resetView(newContactModal_r2.show());
        });
        \u0275\u0275element(15, "i", 17);
        \u0275\u0275text(16, " New Contact");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(17, "div", 18)(18, "table", 19)(19, "thead", 20)(20, "tr")(21, "th", 21);
        \u0275\u0275text(22, "#");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "th", 22);
        \u0275\u0275text(24, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "th", 22);
        \u0275\u0275text(26, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "th", 22);
        \u0275\u0275text(28, "Tags");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "th", 22);
        \u0275\u0275text(30, "Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "th", 23);
        \u0275\u0275text(32, "Action");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "tbody");
        \u0275\u0275repeaterCreate(34, UserlistComponent_For_35_Template, 35, 7, "tr", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "div", 4)(37, "div", 5)(38, "ul", 24)(39, "pagination", 25);
        \u0275\u0275listener("pageChanged", function UserlistComponent_Template_pagination_pageChanged_39_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.pageChanged($event));
        });
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(40, "div", 26, 0)(42, "div", 27)(43, "div", 28)(44, "div", 29)(45, "h5", 30);
        \u0275\u0275text(46, "Add Contact");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "button", 31);
        \u0275\u0275listener("click", function UserlistComponent_Template_button_click_47_listener() {
          \u0275\u0275restoreView(_r1);
          const newContactModal_r2 = \u0275\u0275reference(41);
          return \u0275\u0275resetView(newContactModal_r2.hide());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 32)(49, "form", 33);
        \u0275\u0275listener("ngSubmit", function UserlistComponent_Template_form_ngSubmit_49_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.saveUser());
        });
        \u0275\u0275elementStart(50, "div", 4)(51, "div", 5);
        \u0275\u0275element(52, "input", 34);
        \u0275\u0275elementStart(53, "div", 35)(54, "div", 36)(55, "div", 37)(56, "label", 38)(57, "div", 39)(58, "div", 40);
        \u0275\u0275element(59, "i", 41);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(60, "input", 42);
        \u0275\u0275listener("change", function UserlistComponent_Template_input_change_60_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.fileChange($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "div", 43)(62, "div", 44);
        \u0275\u0275element(63, "img", 45);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(64, "div", 46)(65, "label", 47);
        \u0275\u0275text(66, "User Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(67, "input", 48);
        \u0275\u0275elementStart(68, "div", 49);
        \u0275\u0275text(69, "Please enter a name.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "div", 46)(71, "label", 50);
        \u0275\u0275text(72, "Designation");
        \u0275\u0275elementEnd();
        \u0275\u0275element(73, "input", 51);
        \u0275\u0275elementStart(74, "div", 49);
        \u0275\u0275text(75, "Please enter a designation.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(76, "div", 46)(77, "label", 52);
        \u0275\u0275text(78, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(79, "input", 53);
        \u0275\u0275elementStart(80, "div", 49);
        \u0275\u0275text(81, "Please enter email.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(82, "div", 46)(83, "label", 54);
        \u0275\u0275text(84, "Tags");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "select", 55)(86, "option", 56);
        \u0275\u0275text(87, "Photoshop");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "option", 57);
        \u0275\u0275text(89, "illustrator");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "option", 58);
        \u0275\u0275text(91, "Html");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "option", 59);
        \u0275\u0275text(93, "Css");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "option", 60);
        \u0275\u0275text(95, "Javascript");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "option", 61);
        \u0275\u0275text(97, "Php");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "option", 62);
        \u0275\u0275text(99, "Java");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "option", 63);
        \u0275\u0275text(101, "Ruby");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "option", 64);
        \u0275\u0275text(103, "Python");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(104, "div", 5)(105, "div", 65)(106, "button", 66);
        \u0275\u0275listener("click", function UserlistComponent_Template_button_click_106_listener() {
          \u0275\u0275restoreView(_r1);
          const newContactModal_r2 = \u0275\u0275reference(41);
          return \u0275\u0275resetView(newContactModal_r2.hide());
        });
        \u0275\u0275text(107, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "button", 67);
        \u0275\u0275text(109, "Add Customer");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(110, "div", 68)(111, "div", 69)(112, "span", 70);
        \u0275\u0275text(113, "Loading...");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(114, "div", 71, 1)(116, "div", 72)(117, "div", 28)(118, "div", 73)(119, "button", 74);
        \u0275\u0275listener("click", function UserlistComponent_Template_button_click_119_listener() {
          \u0275\u0275restoreView(_r1);
          const removeItemModal_r7 = \u0275\u0275reference(115);
          return \u0275\u0275resetView(removeItemModal_r7.hide());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "div", 75)(121, "div", 76);
        \u0275\u0275element(122, "i", 77);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(123, "p", 78);
        \u0275\u0275text(124, "Are you Sure You want to Remove this User ?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "div", 79)(126, "button", 80);
        \u0275\u0275listener("click", function UserlistComponent_Template_button_click_126_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.confirmDelete(ctx.deleteId));
        });
        \u0275\u0275text(127, "Remove Now");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "button", 81);
        \u0275\u0275listener("click", function UserlistComponent_Template_button_click_128_listener() {
          \u0275\u0275restoreView(_r1);
          const removeItemModal_r7 = \u0275\u0275reference(115);
          return \u0275\u0275resetView(removeItemModal_r7.hide());
        });
        \u0275\u0275text(129, "Close");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.term);
        \u0275\u0275advance(24);
        \u0275\u0275repeater(ctx.contactsList);
        \u0275\u0275advance(5);
        \u0275\u0275property("totalItems", ctx.returnedArray == null ? null : ctx.returnedArray.length)("itemsPerPage", 10);
        \u0275\u0275advance(10);
        \u0275\u0275property("formGroup", ctx.createContactForm);
      }
    }, dependencies: [PagetitleComponent, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectMultipleControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, PaginationModule, PaginationComponent, ReactiveFormsModule, FormGroupDirective, FormControlName, BsDropdownModule, BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective, ModalModule, ModalDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserlistComponent, [{
    type: Component,
    args: [{ selector: "app-userlist", imports: [PagetitleComponent, FormsModule, PaginationModule, ReactiveFormsModule, BsDropdownModule, ModalModule], template: '<div class="container-fluid">\r\n\r\n  <app-page-title title="Users List" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r\n\r\n  <div class="row">\r\n    <div class="col-lg-12">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <div class="row mb-2">\r\n            <div class="col-sm-4">\r\n              <div class="search-box me-2 mb-2 d-inline-block">\r\n                <div class="position-relative">\r\n                  <input type="text" class="form-control" id="searchTableList" placeholder="Search..." [(ngModel)]="term" (ngModelChange)="searchJob()">\r\n                  <i class="bx bx-search-alt search-icon"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="col-sm-8">\r\n              <div class="text-sm-end">\r\n                <button type="button" data-bs-toggle="modal" (click)="newContactModal.show()" class="btn btn-success btn-rounded waves-effect waves-light addContact-modal mb-2"><i class="mdi mdi-plus me-1"></i> New Contact</button>\r\n              </div>\r\n            </div><!-- end col-->\r\n          </div>\r\n          <!-- end row -->\r\n          <div class="table-responsive">\r\n            <table class="table align-middle table-nowrap table-hover dt-responsive nowrap w-100" id="userList-table">\r\n              <thead class="table-light">\r\n                <tr>\r\n                  <th scope="col" style="width: 40px;">#</th>\r\n                  <th scope="col">Name</th>\r\n                  <th scope="col">Email</th>\r\n                  <th scope="col">Tags</th>\r\n                  <th scope="col">Projects</th>\r\n                  <th scope="col" style="width: 200px;">Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                @for (data of contactsList; track $index) {\r\n                <tr>\r\n                  <td>\r\n                    @if(data.profile){\r\n                    <div>\r\n                      <img class="rounded-circle avatar-xs" src="{{data.profile}}" alt="">\r\n                    </div>\r\n                    }@else {\r\n                    <div class="avatar-xs">\r\n                      <span class="avatar-title rounded-circle">\r\n                        {{data.name.charAt(0)}}\r\n                      </span>\r\n                    </div>}\r\n                  </td>\r\n                  <td>\r\n                    <h5 class="font-size-14 mb-1"><a href="javascript: void(0);" class="text-dark">{{data.name}}</a>\r\n                    </h5>\r\n                    <p class="text-muted mb-0">{{data.position}}</p>\r\n                  </td>\r\n                  <td>{{data.email}}</td>\r\n                  <td>\r\n                    <div>\r\n                      <a href="javascript: void(0);" class="badge badge-soft-primary font-size-11 m-1">{{data.tags[0]}}</a>\r\n                      <a href="javascript: void(0);" class="badge badge-soft-primary font-size-11 m-1">{{data.tags[1]}}</a>\r\n                      <a href="javascript: void(0);" class="badge badge-soft-primary font-size-11 m-1">{{data.tags[2]}}</a>\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    152\r\n                  </td>\r\n                  <td>\r\n                    <ul class="list-inline font-size-20 contact-links mb-0">\r\n                      <li class="list-inline-item px-2">\r\n                        <a href="javascript:void(0);" tooltip="Message"><i class="bx bx-message-square-dots"></i></a>\r\n                      </li>\r\n                      <li class="list-inline-item px-2">\r\n                        <a href="javascript:void(0);" tooltip="Profile"><i class="bx bx-user-circle"></i></a>\r\n                      </li>\r\n                      <li class="list-inline-item">\r\n                        <div dropdown class="dropdown">\r\n                          <a dropdownToggle href="javascript: void(0);" class="dropdown-toggle card-drop px-2 show" aria-expanded="true"> <i class="mdi mdi-dots-horizontal font-size-18"></i> </a>\r\n                          <ul *dropdownMenu class="dropdown-menu dropdown-menu-end show" style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 31.25px);" placement="bottom-end">\r\n                            <li><a href="javascript:void(0);" (click)="editUser($index)" class="dropdown-item edit-list" data-edit-id="8"><i class="mdi mdi-pencil font-size-16 text-success me-1"></i> Edit</a></li>\r\n                            <li><a href="javascript:void(0);" (click)="removeUser(data.id)" class="dropdown-item remove-list" data-remove-id="8"><i class="mdi mdi-trash-can font-size-16 text-danger me-1"></i> Delete</a></li>\r\n                          </ul>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                  </td>\r\n                </tr>}\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <div class="row">\r\n            <div class="col-lg-12">\r\n              <ul class="pagination pagination-rounded justify-content-center mt-4">\r\n                <pagination class="pagination-wrap hstack gap-2" [totalItems]="returnedArray?.length" [itemsPerPage]="10" (pageChanged)="pageChanged($event)"></pagination>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div bsModal #newContactModal="bs-modal" class="modal fade" id="newContactModal" tabindex="-1" aria-labelledby="newContactModalLabel" aria-hidden="true">\r\n  <div class="modal-dialog modal-dialog-centered">\r\n    <div class="modal-content">\r\n      <div class="modal-header">\r\n        <h5 class="modal-title" id="newContactModalLabel">Add Contact</h5>\r\n        <button type="button" class="btn-close" (click)="newContactModal.hide()"></button>\r\n      </div>\r\n      <div class="modal-body">\r\n        <form (ngSubmit)="saveUser()" [formGroup]="createContactForm" autocomplete="off" class="needs-validation createContact-form" id="createContact-form" novalidate>\r\n          <div class="row">\r\n            <div class="col-lg-12">\r\n              <input type="hidden" class="form-control" id="userid-input">\r\n              <div class="text-center mb-4">\r\n                <div class="position-relative d-inline-block">\r\n                  <div class="position-absolute bottom-0 end-0">\r\n                    <label for="member-image-input" class="mb-0" data-bs-toggle="tooltip" data-bs-placement="right" title="Select Member Image">\r\n                      <div class="avatar-xs">\r\n                        <div class="avatar-title bg-light border rounded-circle text-muted cursor-pointer">\r\n                          <i class="bx bxs-image-alt"></i>\r\n                        </div>\r\n                      </div>\r\n                    </label>\r\n                    <input class="form-control d-none" value="" id="member-image-input" type="file" accept="image/png, image/gif, image/jpeg" (change)="fileChange($event)">\r\n                  </div>\r\n                  <div class="avatar-lg">\r\n                    <div class="avatar-title bg-light rounded-circle">\r\n                      <img src="assets/images/users/user-dummy-img.jpg" id="member-img" class="avatar-md rounded-circle h-auto" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class="mb-3">\r\n                <label for="username-input" class="form-label">User Name</label>\r\n                <input type="text" id="username-input" class="form-control" placeholder="Enter name" formControlName="name" required />\r\n                <div class="invalid-feedback">Please enter a name.</div>\r\n              </div>\r\n              <div class="mb-3">\r\n                <label for="designation-input" class="form-label">Designation</label>\r\n                <input type="text" id="designation-input" class="form-control" placeholder="Enter Designation" formControlName="position" required />\r\n                <div class="invalid-feedback">Please enter a designation.</div>\r\n              </div>\r\n              <div class="mb-3">\r\n                <label for="email-input" class="form-label">Email</label>\r\n                <input type="email" id="email-input" class="form-control" placeholder="Enter email" formControlName="email" required />\r\n                <div class="invalid-feedback">Please enter email.</div>\r\n              </div>\r\n              <div class="mb-3">\r\n                <label for="tag-input" class="form-label">Tags</label>\r\n                <select class="select2 form-control select2-multiple" id="tag-input" multiple="multiple" formControlName="tags" data-placeholder="Choose ...">\r\n                  <option value="Photoshop">Photoshop</option>\r\n                  <option value="illustrator">illustrator</option>\r\n                  <option value="Html">Html</option>\r\n                  <option value="Css">Css</option>\r\n                  <option value="Javascript">Javascript</option>\r\n                  <option value="Php">Php</option>\r\n                  <option value="Java">Java</option>\r\n                  <option value="Ruby">Ruby</option>\r\n                  <option value="Python">Python</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="col-lg-12">\r\n              <div class="text-end">\r\n                <button type="button" class="btn btn-outline-secondary me-1" (click)="newContactModal.hide()">Cancel</button>\r\n                <button type="submit" id="addContact-btn" class="btn btn-success">Add Customer</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <!-- end modal body -->\r\n    </div>\r\n    <!-- end modal-content -->\r\n  </div>\r\n  <!-- end modal-dialog -->\r\n</div>\r\n<!-- end newContactModal -->\r\n<div id="elmLoader" class="text-center">\r\n  <div class="spinner-border text-primary avatar-sm" role="status">\r\n    <span class="visually-hidden">Loading...</span>\r\n  </div>\r\n</div>\r\n\r\n<!-- removeItemModal -->\r\n<div bsModal #removeItemModal="bs-modal" class="modal fade" id="removeItemModal" tabindex="-1" aria-hidden="true">\r\n  <div class="modal-dialog modal-dialog-centered modal-sm">\r\n    <div class="modal-content">\r\n      <div class="modal-body px-4 py-5 text-center">\r\n        <button type="button" class="btn-close position-absolute end-0 top-0 m-3" (click)="removeItemModal.hide()"></button>\r\n        <div class="avatar-sm mb-4 mx-auto">\r\n          <div class="avatar-title bg-primary text-primary bg-opacity-10 font-size-20 rounded-3">\r\n            <i class="mdi mdi-trash-can-outline"></i>\r\n          </div>\r\n        </div>\r\n        <p class="text-muted font-size-16 mb-4">Are you Sure You want to Remove this User ?</p>\r\n\r\n        <div class="hstack gap-2 justify-content-center mb-0">\r\n          <button type="button" class="btn btn-danger me-1" id="remove-item" (click)="confirmDelete(deleteId)">Remove Now</button>\r\n          <button type="button" class="btn btn-secondary" (click)="removeItemModal.hide()">Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- end removeItemModal -->' }]
  }], () => [{ type: BsModalService }, { type: UntypedFormBuilder }, { type: Store }], { newContactModal: [{
    type: ViewChild,
    args: ["newContactModal", { static: false }]
  }], removeItemModal: [{
    type: ViewChild,
    args: ["removeItemModal", { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserlistComponent, { className: "UserlistComponent", filePath: "src/app/pages/contacts/userlist/userlist.component.ts", lineNumber: 24 });
})();

// src/app/store/UserGrid/user-selector.ts
var selectDataState2 = createFeatureSelector("usergrid");
var selectData2 = createSelector(selectDataState2, (state) => state.UserGriddata);
var selectDataLoading2 = createSelector(selectDataState2, (state) => state.loading);
var selectDataError2 = createSelector(selectDataState2, (state) => state.error);

// src/app/pages/contacts/usergrid/usergrid.component.ts
var _c02 = (a0) => ({ "is-invalid": a0 });
var _c12 = () => ({ standalone: true });
function UsergridComponent_ng_template_3_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Username is required.");
    \u0275\u0275elementEnd();
  }
}
function UsergridComponent_ng_template_3_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275conditionalCreate(1, UsergridComponent_ng_template_3_Conditional_12_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.name.errors.required ? 1 : -1);
  }
}
function UsergridComponent_ng_template_3_Conditional_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Username is required.");
    \u0275\u0275elementEnd();
  }
}
function UsergridComponent_ng_template_3_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275conditionalCreate(1, UsergridComponent_ng_template_3_Conditional_17_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.designation.errors.required ? 1 : -1);
  }
}
function UsergridComponent_ng_template_3_Conditional_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Email is required.");
    \u0275\u0275elementEnd();
  }
}
function UsergridComponent_ng_template_3_Conditional_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "This value should be a valid email.");
    \u0275\u0275elementEnd();
  }
}
function UsergridComponent_ng_template_3_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275conditionalCreate(1, UsergridComponent_ng_template_3_Conditional_22_Conditional_1_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(2, UsergridComponent_ng_template_3_Conditional_22_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.email.errors.required ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.email.errors.pattern ? 2 : -1);
  }
}
function UsergridComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "h5", 11);
    \u0275\u0275text(2, "Add Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 12);
    \u0275\u0275listener("click", function UsergridComponent_ng_template_3_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.modalRef == null ? null : ctx_r1.modalRef.hide());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 13)(5, "form", 14);
    \u0275\u0275listener("ngSubmit", function UsergridComponent_ng_template_3_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveUser());
    });
    \u0275\u0275elementStart(6, "div", 3)(7, "div", 6)(8, "div", 15)(9, "label", 16);
    \u0275\u0275text(10, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 17);
    \u0275\u0275conditionalCreate(12, UsergridComponent_ng_template_3_Conditional_12_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 15)(14, "label", 16);
    \u0275\u0275text(15, "Designation");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 19);
    \u0275\u0275conditionalCreate(17, UsergridComponent_ng_template_3_Conditional_17_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 15)(19, "label", 16);
    \u0275\u0275text(20, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 20);
    \u0275\u0275conditionalCreate(22, UsergridComponent_ng_template_3_Conditional_22_Template, 3, 2, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 15)(24, "label", 16);
    \u0275\u0275text(25, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ng-select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function UsergridComponent_ng_template_3_Template_ng_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selected, $event) || (ctx_r1.selected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "button", 22);
    \u0275\u0275text(28, " Save ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r1.userForm);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c02, ctx_r1.submitted && ctx_r1.form.name.errors));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.submitted && ctx_r1.form.name.errors ? 12 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c02, ctx_r1.submitted && ctx_r1.form.designation.errors));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.submitted && ctx_r1.form.designation.errors ? 17 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(15, _c02, ctx_r1.submitted && ctx_r1.form.email.errors));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.submitted && ctx_r1.form.email.errors ? 22 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r1.selectValue)("multiple", true)("ngModelOptions", \u0275\u0275pureFunction0(17, _c12));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selected);
  }
}
function UsergridComponent_For_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "img", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275interpolate(data_r3.image), \u0275\u0275sanitizeUrl);
  }
}
function UsergridComponent_For_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "span", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r3.name.charAt(0), " ");
  }
}
function UsergridComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 23)(2, "div", 24);
    \u0275\u0275conditionalCreate(3, UsergridComponent_For_6_Conditional_3_Template, 2, 2, "div", 25)(4, UsergridComponent_For_6_Conditional_4_Template, 3, 1, "div", 26);
    \u0275\u0275elementStart(5, "h5", 27)(6, "a", 28);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 29);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div")(11, "a", 30);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 30);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 30);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 31)(18, "div", 32)(19, "div", 33)(20, "a", 34);
    \u0275\u0275element(21, "i", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 33)(23, "a", 36);
    \u0275\u0275element(24, "i", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 33)(26, "a", 38);
    \u0275\u0275element(27, "i", 39);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275conditional(data_r3.image ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.designation);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r3.projects[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.projects[1]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.projects[2]);
  }
}
var UsergridComponent = class _UsergridComponent {
  constructor(modalService, formBuilder, store) {
    this.modalService = modalService;
    this.formBuilder = formBuilder;
    this.store = store;
    this.submitted = false;
  }
  ngOnInit() {
    this.selectValue = ["Photoshop", "illustrator", "Html", "Css", "Php", "Java", "Python"];
    this.breadCrumbItems = [{ label: "Contacts" }, { label: "Users Grid", active: true }];
    this.userForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      designation: ["", [Validators.required]]
    });
    this.store.dispatch(fetchuserGridData());
    this.store.select(selectData2).subscribe((data) => {
      this.UserGrid = data;
    });
  }
  get form() {
    return this.userForm.controls;
  }
  /**
   * Open modal
   * @param content modal content
   */
  openModal(content) {
    this.modalRef = this.modalService.show(content);
  }
  static {
    this.\u0275fac = function UsergridComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UsergridComponent)(\u0275\u0275directiveInject(BsModalService), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsergridComponent, selectors: [["app-usergrid"]], decls: 13, vars: 1, consts: [["content", ""], [1, "container-fluid"], ["title", "Users Grid", 3, "breadcrumbItems"], [1, "row"], ["role", "document"], [1, "col-xl-3", "col-sm-6"], [1, "col-12"], [1, "text-center", "my-3"], ["href", "javascript:void(0);", 1, "text-success"], [1, "bx", "bx-hourglass", "bx-spin", "me-1"], [1, "modal-header"], [1, "modal-title", "mt-0"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], [1, "control-label"], ["placeholder", "Enter Username", "type", "text", "name", "name", "formControlName", "name", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], ["placeholder", "Enter designation", "type", "text", "name", "designation", "formControlName", "designation", 1, "form-control", 3, "ngClass"], ["placeholder", "Enter email", "type", "text", "name", "email", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["name", "select", 3, "ngModelChange", "items", "multiple", "ngModelOptions", "ngModel"], ["type", "submit", "id", "btn-save-event", 1, "btn", "btn-success"], [1, "card", "text-center"], [1, "card-body"], [1, "mb-4"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark"], [1, "text-muted"], ["href", "javascript: void(0);", 1, "badge", "bg-primary", "font-size-11", "m-1"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-20"], [1, "flex-fill"], ["href", "javascript: void(0);", "tooltip", "Message"], [1, "bx", "bx-message-square-dots"], ["href", "javascript: void(0);", "tooltip", "Projects"], [1, "bx", "bx-pie-chart-alt"], ["href", "javascript: void(0);", "tooltip", "Profile"], [1, "bx", "bx-user-circle"], ["alt", "", 1, "rounded-circle", "avatar-sm", 3, "src"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"]], template: function UsergridComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275element(1, "app-page-title", 2);
        \u0275\u0275elementStart(2, "div", 3);
        \u0275\u0275template(3, UsergridComponent_ng_template_3_Template, 29, 18, "ng-template", 4, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275repeaterCreate(5, UsergridComponent_For_6_Template, 28, 6, "div", 5, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 3)(8, "div", 6)(9, "div", 7)(10, "a", 8);
        \u0275\u0275element(11, "i", 9);
        \u0275\u0275text(12, " Load more ");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.UserGrid);
      }
    }, dependencies: [CommonModule, NgClass, PagetitleComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsergridComponent, [{
    type: Component,
    args: [{ selector: "app-usergrid", imports: [CommonModule, PagetitleComponent], template: `<div class="container-fluid">\r
\r
  <!-- start page title -->\r
  <app-page-title title="Users Grid" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
  <!-- end page title -->\r
\r
  <div class="row">\r
    <ng-template #content role="document" let-modal>\r
      <div class="modal-header">\r
        <h5 class="modal-title mt-0">Add Customer</h5>\r
        <button type="button" class="btn-close" aria-hidden="true" (click)="modalRef?.hide()"></button>\r
      </div>\r
      <div class="modal-body">\r
        <form (ngSubmit)="saveUser()" [formGroup]="userForm">\r
          <div class="row">\r
            <div class="col-12">\r
              <div class="mb-3">\r
                <label class="control-label">Username</label>\r
                <input class="form-control" placeholder="Enter Username" type="text" name="name" formControlName="name" [ngClass]="{'is-invalid': submitted && form.name.errors}" />\r
                @if(submitted && form.name.errors){\r
                <div class="invalid-feedback">\r
                  @if(form.name.errors.required){\r
                  <span>Username is required.</span>}\r
                </div>}\r
              </div>\r
\r
              <div class="mb-3">\r
                <label class="control-label">Designation</label>\r
                <input class="form-control" placeholder="Enter designation" type="text" name="designation" formControlName="designation" [ngClass]="{'is-invalid': submitted && form.designation.errors}" />\r
                @if(submitted && form.designation.errors){\r
                <div class="invalid-feedback">\r
                  @if(form.designation.errors.required){\r
                  <span>Username is required.</span>}\r
                </div>}\r
              </div>\r
              <div class="mb-3">\r
                <label class="control-label">Email</label>\r
                <input class="form-control" placeholder="Enter email" type="text" name="email" formControlName="email" [ngClass]="{'is-invalid': submitted && form.email.errors}" />\r
                @if(submitted && form.email.errors){\r
                <div class="invalid-feedback">\r
                  @if(form.email.errors.required){\r
                  <span>Email is required.</span>}\r
                  @if(form.email.errors.pattern){\r
                  <span>This value should be a valid email.</span>}\r
                </div>}\r
              </div>\r
              <div class="mb-3">\r
                <label class="control-label">Select</label>\r
                <ng-select [items]="selectValue" [multiple]="true" name="select" [ngModelOptions]="{standalone: true}" [(ngModel)]="selected"></ng-select>\r
              </div>\r
            </div>\r
          </div>\r
          <button type="submit" class="btn btn-success" id="btn-save-event">\r
            Save\r
          </button>\r
        </form>\r
      </div>\r
    </ng-template>\r
\r
\r
    @for(data of UserGrid;track $index){\r
    <div class="col-xl-3 col-sm-6">\r
      <div class="card text-center">\r
        <div class="card-body">\r
\r
          @if(data.image){\r
          <div class="mb-4">\r
            <img class="rounded-circle avatar-sm" src="{{data.image}}" alt />\r
          </div>\r
          }@else{\r
          <div class="avatar-sm mx-auto mb-4">\r
            <span class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-16">\r
              {{data.name.charAt(0)}}\r
            </span>\r
          </div>}\r
          <h5 class="font-size-15 mb-1"><a href="javascript: void(0);" class="text-dark">{{data.name}}</a></h5>\r
          <p class="text-muted">{{data.designation}}</p>\r
          <div>\r
            <a href="javascript: void(0);" class="badge bg-primary font-size-11 m-1">{{data.projects[0]}}</a>\r
            <a href="javascript: void(0);" class="badge bg-primary font-size-11 m-1">{{data.projects[1]}}</a>\r
            <a href="javascript: void(0);" class="badge bg-primary font-size-11 m-1">{{data.projects[2]}}</a>\r
          </div>\r
        </div>\r
        <div class="card-footer bg-transparent border-top">\r
          <div class="contact-links d-flex font-size-20">\r
            <div class="flex-fill">\r
              <a href="javascript: void(0);" tooltip="Message"><i class="bx bx-message-square-dots"></i></a>\r
            </div>\r
            <div class="flex-fill">\r
              <a href="javascript: void(0);" tooltip="Projects"><i class="bx bx-pie-chart-alt"></i></a>\r
            </div>\r
            <div class="flex-fill">\r
              <a href="javascript: void(0);" tooltip="Profile"><i class="bx bx-user-circle"></i></a>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    }\r
  </div>\r
  <!-- end row -->\r
\r
  <div class="row">\r
    <div class="col-12">\r
      <div class="text-center my-3">\r
        <a href="javascript:void(0);" class="text-success"><i class="bx bx-hourglass bx-spin me-1"></i> Load more </a>\r
      </div>\r
    </div> <!-- end col-->\r
  </div>\r
  <!-- end row -->\r
\r
</div> <!-- container-fluid -->` }]
  }], () => [{ type: BsModalService }, { type: UntypedFormBuilder }, { type: Store }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsergridComponent, { className: "UsergridComponent", filePath: "src/app/pages/contacts/usergrid/usergrid.component.ts", lineNumber: 21 });
})();

// src/app/pages/contacts/profile/data.ts
var revenueBarChart = {
  chart: {
    height: 300,
    type: "bar",
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "14%",
      endingShape: "rounded"
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"]
  },
  series: [{
    name: "Revenue",
    data: [42, 85, 101, 56, 37, 105, 38, 58, 92, 82, 72, 32]
  }],
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  },
  yaxis: {
    title: {
      text: "$ (thousands)"
    }
  },
  fill: {
    opacity: 1
  },
  colors: ["#556ee6"]
};
var statData = [
  {
    icon: "bx bx-check-circle",
    title: "Completed Projects",
    value: "125"
  },
  {
    icon: "bx bx-hourglass",
    title: "Pending Projects",
    value: "12"
  },
  {
    icon: "bx bx-package",
    title: "Total Revenue",
    value: "$36,524"
  }
];

// src/app/pages/contacts/profile/profile.component.ts
function ProfileComponent_For_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "app-stat", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("title", stat_r1.title)("value", stat_r1.value)("icon", stat_r1.icon);
  }
}
var ProfileComponent = class _ProfileComponent {
  constructor() {
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Contacts" }, { label: "Profile", active: true }];
    this._fetchData();
  }
  /**
   * Fetches the data
   */
  _fetchData() {
    this.revenueBarChart = revenueBarChart;
    this.statData = statData;
  }
  static {
    this.\u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProfileComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], decls: 220, vars: 10, consts: [[1, "container-fluid"], ["title", "Profile", 3, "breadcrumbItems"], [1, "row"], [1, "col-xl-4"], [1, "card", "overflow-hidden"], [1, "bg-primary-subtle"], [1, "col-7"], [1, "text-primary", "p-3"], [1, "text-primary"], [1, "col-5", "align-self-end"], ["src", "assets/images/profile-img.png", "alt", "", 1, "img-fluid"], [1, "card-body", "pt-0"], [1, "col-sm-4"], [1, "avatar-md", "profile-user-wid", "mb-4"], ["src", "assets/images/users/avatar-1.jpg", "alt", "", 1, "img-thumbnail", "rounded-circle"], [1, "font-size-15", "text-truncate"], [1, "text-muted", "mb-0", "text-truncate"], [1, "col-sm-8"], [1, "pt-4"], [1, "col-6"], [1, "font-size-15"], [1, "text-muted", "mb-0"], [1, "mt-4"], ["href", "javascript: void(0);", 1, "btn", "btn-primary", "btn-sm"], [1, "mdi", "mdi-arrow-right", "ms-1"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [1, "text-muted", "mb-4"], [1, "table-responsive"], [1, "table", "table-nowrap", "mb-0"], ["scope", "row"], [1, "card-title", "mb-5"], [1, ""], [1, "verti-timeline", "list-unstyled"], [1, "event-list", "active"], [1, "event-timeline-dot"], [1, "bx", "bx-right-arrow-circle", "bx-fade-right"], [1, "d-flex"], [1, "flex-shrink-0", "me-3"], [1, "bx", "bx-server", "h4", "text-primary"], [1, "flex-grow-1"], ["href", "javascript: void(0);", 1, "text-dark"], [1, "event-list"], [1, "bx", "bx-right-arrow-circle"], [1, "bx", "bx-code", "h4", "text-primary"], [1, "bx", "bx-edit", "h4", "text-primary"], [1, "col-xl-8"], [1, "col-md-4"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "xaxis", "colors", "yaxis", "dataLabels", "stroke", "plotOptions", "fill"], [1, "table", "table-nowrap", "table-hover", "mb-0"], ["scope", "col"], [3, "title", "value", "icon"]], template: function ProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 2)(7, "div", 6)(8, "div", 7)(9, "h5", 8);
        \u0275\u0275text(10, "Welcome Back !");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p");
        \u0275\u0275text(12, "It will seem like simplified");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 9);
        \u0275\u0275element(14, "img", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 11)(16, "div", 2)(17, "div", 12)(18, "div", 13);
        \u0275\u0275element(19, "img", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "h5", 15);
        \u0275\u0275text(21, "Cynthia Price");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "p", 16);
        \u0275\u0275text(23, "UI/UX Designer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 17)(25, "div", 18)(26, "div", 2)(27, "div", 19)(28, "h5", 20);
        \u0275\u0275text(29, "125");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "p", 21);
        \u0275\u0275text(31, "Projects");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 19)(33, "h5", 20);
        \u0275\u0275text(34, "$1245");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "p", 21);
        \u0275\u0275text(36, "Revenue");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "div", 22)(38, "a", 23);
        \u0275\u0275text(39, "View Profile ");
        \u0275\u0275element(40, "i", 24);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(41, "div", 25)(42, "div", 26)(43, "h4", 27);
        \u0275\u0275text(44, "Personal Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "p", 28);
        \u0275\u0275text(46, "Hi I'm Cynthia Price,has been the industry's standard dummy text To an English person, it will seem like simplified English, as a skeptical Cambridge.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 29)(48, "table", 30)(49, "tbody")(50, "tr")(51, "th", 31);
        \u0275\u0275text(52, "Full Name :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "td");
        \u0275\u0275text(54, "Cynthia Price");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "tr")(56, "th", 31);
        \u0275\u0275text(57, "Mobile :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "td");
        \u0275\u0275text(59, "(123) 123 1234");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "tr")(61, "th", 31);
        \u0275\u0275text(62, "E-mail :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "td");
        \u0275\u0275text(64, "cynthiaskote@gmail.com");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "tr")(66, "th", 31);
        \u0275\u0275text(67, "Location :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "td");
        \u0275\u0275text(69, "California, United States");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(70, "div", 25)(71, "div", 26)(72, "h4", 32);
        \u0275\u0275text(73, "Experience");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "div", 33)(75, "ul", 34)(76, "li", 35)(77, "div", 36);
        \u0275\u0275element(78, "i", 37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "div", 38)(80, "div", 39);
        \u0275\u0275element(81, "i", 40);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "div", 41)(83, "div")(84, "h5", 20)(85, "a", 42);
        \u0275\u0275text(86, "Back end Developer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(87, "span", 8);
        \u0275\u0275text(88, "2016 - 19");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(89, "li", 43)(90, "div", 36);
        \u0275\u0275element(91, "i", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "div", 38)(93, "div", 39);
        \u0275\u0275element(94, "i", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "div", 41)(96, "div")(97, "h5", 20)(98, "a", 42);
        \u0275\u0275text(99, "Front end Developer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(100, "span", 8);
        \u0275\u0275text(101, "2013 - 16");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(102, "li", 43)(103, "div", 36);
        \u0275\u0275element(104, "i", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "div", 38)(106, "div", 39);
        \u0275\u0275element(107, "i", 46);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "div", 41)(109, "div")(110, "h5", 20)(111, "a", 42);
        \u0275\u0275text(112, "UI /UX Designer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(113, "span", 8);
        \u0275\u0275text(114, "2011 - 13");
        \u0275\u0275elementEnd()()()()()()()()()();
        \u0275\u0275elementStart(115, "div", 47)(116, "div", 2);
        \u0275\u0275repeaterCreate(117, ProfileComponent_For_118_Template, 2, 3, "div", 48, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "div", 25)(120, "div", 26)(121, "h4", 27);
        \u0275\u0275text(122, "Revenue");
        \u0275\u0275elementEnd();
        \u0275\u0275element(123, "apx-chart", 49);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(124, "div", 25)(125, "div", 26)(126, "h4", 27);
        \u0275\u0275text(127, "My Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "div", 29)(129, "table", 50)(130, "thead")(131, "tr")(132, "th", 51);
        \u0275\u0275text(133, "#");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "th", 51);
        \u0275\u0275text(135, "Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "th", 51);
        \u0275\u0275text(137, "Start Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "th", 51);
        \u0275\u0275text(139, "Deadline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "th", 51);
        \u0275\u0275text(141, "Budget");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(142, "tbody")(143, "tr")(144, "th", 31);
        \u0275\u0275text(145, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "td");
        \u0275\u0275text(147, "Skote admin UI");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(148, "td");
        \u0275\u0275text(149, "2 Sep, 2019");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(150, "td");
        \u0275\u0275text(151, "20 Oct, 2019");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(152, "td");
        \u0275\u0275text(153, "$506");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(154, "tr")(155, "th", 31);
        \u0275\u0275text(156, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(157, "td");
        \u0275\u0275text(158, "Skote admin Logo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(159, "td");
        \u0275\u0275text(160, "1 Sep, 2019");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(161, "td");
        \u0275\u0275text(162, "2 Sep, 2019");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(163, "td");
        \u0275\u0275text(164, "$94");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(165, "tr")(166, "th", 31);
        \u0275\u0275text(167, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(168, "td");
        \u0275\u0275text(169, "Redesign - Landing page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(170, "td");
        \u0275\u0275text(171, "21 Sep, 2019");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(172, "td");
        \u0275\u0275text(173, "29 Sep, 2019");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(174, "td");
        \u0275\u0275text(175, "$156");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(176, "tr")(177, "th", 31);
        \u0275\u0275text(178, "4");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(179, "td");
        \u0275\u0275text(180, "App Landing UI");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(181, "td");
        \u0275\u0275text(182, "29 Sep, 2019");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "td");
        \u0275\u0275text(184, "04 Oct, 2019");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(185, "td");
        \u0275\u0275text(186, "$122");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(187, "tr")(188, "th", 31);
        \u0275\u0275text(189, "5");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(190, "td");
        \u0275\u0275text(191, "Blog Template");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(192, "td");
        \u0275\u0275text(193, "05 Oct, 2019");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(194, "td");
        \u0275\u0275text(195, "16 Oct, 2019");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(196, "td");
        \u0275\u0275text(197, "$164");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(198, "tr")(199, "th", 31);
        \u0275\u0275text(200, "6");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(201, "td");
        \u0275\u0275text(202, "Redesign - Multipurpose Landing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(203, "td");
        \u0275\u0275text(204, "17 Oct, 2019");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(205, "td");
        \u0275\u0275text(206, "05 Nov, 2019");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(207, "td");
        \u0275\u0275text(208, "$192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(209, "tr")(210, "th", 31);
        \u0275\u0275text(211, "7");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(212, "td");
        \u0275\u0275text(213, "Logo Branding");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(214, "td");
        \u0275\u0275text(215, "04 Nov, 2019");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(216, "td");
        \u0275\u0275text(217, "05 Nov, 2019");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(218, "td");
        \u0275\u0275text(219, "$94");
        \u0275\u0275elementEnd()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(116);
        \u0275\u0275repeater(ctx.statData);
        \u0275\u0275advance(6);
        \u0275\u0275property("series", ctx.revenueBarChart.series)("chart", ctx.revenueBarChart.chart)("xaxis", ctx.revenueBarChart.xaxis)("colors", ctx.revenueBarChart.colors)("yaxis", ctx.revenueBarChart.yaxis)("dataLabels", ctx.revenueBarChart.dataLabels)("stroke", ctx.revenueBarChart.stroke)("plotOptions", ctx.revenueBarChart.plotOptions)("fill", ctx.revenueBarChart.fill);
      }
    }, dependencies: [PagetitleComponent, NgApexchartsModule, ChartComponent, StatComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{ selector: "app-profile", imports: [PagetitleComponent, NgApexchartsModule, StatComponent, NgApexchartsModule], template: `<div class="container-fluid">\r
\r
  <app-page-title title="Profile" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
\r
  <div class="row">\r
    <div class="col-xl-4">\r
      <div class="card overflow-hidden">\r
        <div class="bg-primary-subtle">\r
          <div class="row">\r
            <div class="col-7">\r
              <div class="text-primary p-3">\r
                <h5 class="text-primary">Welcome Back !</h5>\r
                <p>It will seem like simplified</p>\r
              </div>\r
            </div>\r
            <div class="col-5 align-self-end">\r
              <img src="assets/images/profile-img.png" alt="" class="img-fluid">\r
            </div>\r
          </div>\r
        </div>\r
        <div class="card-body pt-0">\r
          <div class="row">\r
            <div class="col-sm-4">\r
              <div class="avatar-md profile-user-wid mb-4">\r
                <img src="assets/images/users/avatar-1.jpg" alt="" class="img-thumbnail rounded-circle">\r
              </div>\r
              <h5 class="font-size-15 text-truncate">Cynthia Price</h5>\r
              <p class="text-muted mb-0 text-truncate">UI/UX Designer</p>\r
            </div>\r
\r
            <div class="col-sm-8">\r
              <div class="pt-4">\r
\r
                <div class="row">\r
                  <div class="col-6">\r
                    <h5 class="font-size-15">125</h5>\r
                    <p class="text-muted mb-0">Projects</p>\r
                  </div>\r
                  <div class="col-6">\r
                    <h5 class="font-size-15">$1245</h5>\r
                    <p class="text-muted mb-0">Revenue</p>\r
                  </div>\r
                </div>\r
                <div class="mt-4">\r
                  <a href="javascript: void(0);" class="btn btn-primary btn-sm">View Profile <i class="mdi mdi-arrow-right ms-1"></i></a>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
      <!-- end card -->\r
\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title mb-4">Personal Information</h4>\r
\r
          <p class="text-muted mb-4">Hi I'm Cynthia Price,has been the industry's standard dummy text To an English\r
            person, it will seem like simplified English, as a skeptical Cambridge.</p>\r
          <div class="table-responsive">\r
            <table class="table table-nowrap mb-0">\r
              <tbody>\r
                <tr>\r
                  <th scope="row">Full Name :</th>\r
                  <td>Cynthia Price</td>\r
                </tr>\r
                <tr>\r
                  <th scope="row">Mobile :</th>\r
                  <td>(123) 123 1234</td>\r
                </tr>\r
                <tr>\r
                  <th scope="row">E-mail :</th>\r
                  <td>cynthiaskote&#64;gmail.com</td>\r
                </tr>\r
                <tr>\r
                  <th scope="row">Location :</th>\r
                  <td>California, United States</td>\r
                </tr>\r
              </tbody>\r
            </table>\r
          </div>\r
        </div>\r
      </div>\r
      <!-- end card -->\r
\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title mb-5">Experience</h4>\r
          <div class="">\r
            <ul class="verti-timeline list-unstyled">\r
              <li class="event-list active">\r
                <div class="event-timeline-dot">\r
                  <i class="bx bx-right-arrow-circle bx-fade-right"></i>\r
                </div>\r
                <div class="d-flex">\r
                  <div class="flex-shrink-0 me-3">\r
                    <i class="bx bx-server h4 text-primary"></i>\r
                  </div>\r
                  <div class="flex-grow-1">\r
                    <div>\r
                      <h5 class="font-size-15"><a href="javascript: void(0);" class="text-dark">Back end Developer</a></h5>\r
                      <span class="text-primary">2016 - 19</span>\r
                    </div>\r
                  </div>\r
                </div>\r
              </li>\r
              <li class="event-list">\r
                <div class="event-timeline-dot">\r
                  <i class="bx bx-right-arrow-circle"></i>\r
                </div>\r
                <div class="d-flex">\r
                  <div class="flex-shrink-0 me-3">\r
                    <i class="bx bx-code h4 text-primary"></i>\r
                  </div>\r
                  <div class="flex-grow-1">\r
                    <div>\r
                      <h5 class="font-size-15"><a href="javascript: void(0);" class="text-dark">Front end Developer</a></h5>\r
                      <span class="text-primary">2013 - 16</span>\r
                    </div>\r
                  </div>\r
                </div>\r
              </li>\r
              <li class="event-list">\r
                <div class="event-timeline-dot">\r
                  <i class="bx bx-right-arrow-circle"></i>\r
                </div>\r
                <div class="d-flex">\r
                  <div class="flex-shrink-0 me-3">\r
                    <i class="bx bx-edit h4 text-primary"></i>\r
                  </div>\r
                  <div class="flex-grow-1">\r
                    <div>\r
                      <h5 class="font-size-15"><a href="javascript: void(0);" class="text-dark">UI /UX Designer</a></h5>\r
                      <span class="text-primary">2011 - 13</span>\r
                    </div>\r
                  </div>\r
                </div>\r
              </li>\r
            </ul>\r
          </div>\r
\r
        </div>\r
      </div>\r
      <!-- end card -->\r
    </div>\r
\r
    <div class="col-xl-8">\r
\r
      <div class="row">\r
        @for (stat of statData; track $index) {\r
        <div class="col-md-4">\r
          <app-stat [title]="stat.title" [value]="stat.value" [icon]="stat.icon"></app-stat>\r
        </div>\r
        }\r
      </div>\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title mb-4">Revenue</h4>\r
          <apx-chart dir="ltr" class="apex-charts" [series]="revenueBarChart.series" [chart]="revenueBarChart.chart" [xaxis]="revenueBarChart.xaxis" [colors]="revenueBarChart.colors" [yaxis]="revenueBarChart.yaxis" [dataLabels]="revenueBarChart.dataLabels" [stroke]="revenueBarChart.stroke" [plotOptions]="revenueBarChart.plotOptions" [fill]="revenueBarChart.fill">\r
          </apx-chart>\r
        </div>\r
      </div>\r
\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title mb-4">My Projects</h4>\r
          <div class="table-responsive">\r
            <table class="table table-nowrap table-hover mb-0">\r
              <thead>\r
                <tr>\r
                  <th scope="col">#</th>\r
                  <th scope="col">Projects</th>\r
                  <th scope="col">Start Date</th>\r
                  <th scope="col">Deadline</th>\r
                  <th scope="col">Budget</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                <tr>\r
                  <th scope="row">1</th>\r
                  <td>Skote admin UI</td>\r
                  <td>2 Sep, 2019</td>\r
                  <td>20 Oct, 2019</td>\r
                  <td>$506</td>\r
                </tr>\r
\r
                <tr>\r
                  <th scope="row">2</th>\r
                  <td>Skote admin Logo</td>\r
                  <td>1 Sep, 2019</td>\r
                  <td>2 Sep, 2019</td>\r
                  <td>$94</td>\r
                </tr>\r
                <tr>\r
                  <th scope="row">3</th>\r
                  <td>Redesign - Landing page</td>\r
                  <td>21 Sep, 2019</td>\r
                  <td>29 Sep, 2019</td>\r
                  <td>$156</td>\r
                </tr>\r
                <tr>\r
                  <th scope="row">4</th>\r
                  <td>App Landing UI</td>\r
                  <td>29 Sep, 2019</td>\r
                  <td>04 Oct, 2019</td>\r
                  <td>$122</td>\r
                </tr>\r
                <tr>\r
                  <th scope="row">5</th>\r
                  <td>Blog Template</td>\r
                  <td>05 Oct, 2019</td>\r
                  <td>16 Oct, 2019</td>\r
                  <td>$164</td>\r
                </tr>\r
                <tr>\r
                  <th scope="row">6</th>\r
                  <td>Redesign - Multipurpose Landing</td>\r
                  <td>17 Oct, 2019</td>\r
                  <td>05 Nov, 2019</td>\r
                  <td>$192</td>\r
                </tr>\r
                <tr>\r
                  <th scope="row">7</th>\r
                  <td>Logo Branding</td>\r
                  <td>04 Nov, 2019</td>\r
                  <td>05 Nov, 2019</td>\r
                  <td>$94</td>\r
                </tr>\r
              </tbody>\r
            </table>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
  <!-- end row -->\r
</div>` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/pages/contacts/profile/profile.component.ts", lineNumber: 21 });
})();

// src/app/pages/contacts/contacts-routing.module.ts
var routes = [
  {
    path: "list",
    component: UserlistComponent
  },
  {
    path: "grid",
    component: UsergridComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  }
];
var ContactsRoutingModule = class _ContactsRoutingModule {
  static {
    this.\u0275fac = function ContactsRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContactsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ContactsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/pages/contacts/contacts.module.ts
var ContactsModule = class _ContactsModule {
  static {
    this.\u0275fac = function ContactsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContactsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ContactsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [ContactsRoutingModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactsModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        ContactsRoutingModule
      ]
    }]
  }], null, null);
})();

export {
  ContactsModule
};
//# sourceMappingURL=chunk-6SRAXR22.js.map
