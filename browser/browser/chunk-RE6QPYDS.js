import {
  fetchmailData
} from "./chunk-B4G5YK3L.js";
import {
  Editor,
  NgxEditorComponent,
  NgxEditorMenuComponent,
  NgxEditorModule
} from "./chunk-2VAAR5CT.js";
import {
  require_sweetalert2_all
} from "./chunk-FDXGDKOB.js";
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
  ActivatedRoute,
  CommonModule,
  Component,
  NO_ERRORS_SCHEMA,
  NgClass,
  NgModule,
  RouterModule,
  SlicePipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-BM6E27KQ.js";
import {
  __toESM
} from "./chunk-H6NRAODO.js";

// src/app/pages/email/inbox/inbox.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());

// src/app/store/Email/email.selector.ts
var selectDataState = createFeatureSelector("Maillist");
var selectData = createSelector(selectDataState, (state) => state.maildata);
var selectDataLoading = createSelector(selectDataState, (state) => state.loading);
var selectDataError = createSelector(selectDataState, (state) => state.error);

// src/app/pages/email/inbox/inbox.component.ts
var _c0 = (a0) => ({ "unread": a0 });
var _c1 = (a0) => ["../read", a0];
var _c2 = (a0) => ({ "fas": a0 });
function InboxComponent_ng_template_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "h5", 61);
    \u0275\u0275text(2, "New Message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 62);
    \u0275\u0275listener("click", function InboxComponent_ng_template_81_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.modalRef == null ? null : ctx_r3.modalRef.hide());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 63)(5, "form")(6, "div", 64);
    \u0275\u0275element(7, "input", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 64);
    \u0275\u0275element(9, "input", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 64);
    \u0275\u0275element(11, "ngx-editor-menu", 67)(12, "ngx-editor", 68);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 69)(14, "button", 70);
    \u0275\u0275listener("click", function InboxComponent_ng_template_81_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.modalRef == null ? null : ctx_r3.modalRef.hide());
    });
    \u0275\u0275text(15, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 39);
    \u0275\u0275text(17, "Send ");
    \u0275\u0275element(18, "i", 71);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("editor", ctx_r3.editor);
    \u0275\u0275advance();
    \u0275\u0275property("editor", ctx_r3.editor)("ngModel", ctx_r3.html)("disabled", false)("placeholder", "Type here...");
  }
}
function InboxComponent_div_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "a", 73);
    \u0275\u0275text(2, "Updates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 73);
    \u0275\u0275text(4, "Social");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 73);
    \u0275\u0275text(6, "Team Manage");
    \u0275\u0275elementEnd()();
  }
}
function InboxComponent_div_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "a", 73);
    \u0275\u0275text(2, "Updates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 73);
    \u0275\u0275text(4, "Social");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 73);
    \u0275\u0275text(6, "Team Manage");
    \u0275\u0275elementEnd()();
  }
}
function InboxComponent_div_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "a", 74);
    \u0275\u0275listener("click", function InboxComponent_div_107_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.markUnread());
    });
    \u0275\u0275text(2, "Mark as Unread");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 73);
    \u0275\u0275text(4, "Mark as Important");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 73);
    \u0275\u0275text(6, "Add to Tasks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 73);
    \u0275\u0275text(8, "Add Star");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 73);
    \u0275\u0275text(10, "Mute");
    \u0275\u0275elementEnd()();
  }
}
function InboxComponent_For_110_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 52)(1, "div", 75)(2, "div", 76)(3, "input", 77);
    \u0275\u0275listener("change", function InboxComponent_For_110_Template_input_change_3_listener($event) {
      const email_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectMail($event, email_r7.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "label", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 79);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "span", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 81)(9, "a", 82);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 83);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const email_r7 = ctx.$implicit;
    const $index_r8 = ctx.$index;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c0, email_r7.unread === true));
    \u0275\u0275advance(3);
    \u0275\u0275property("id", \u0275\u0275interpolate1("chk-", $index_r8));
    \u0275\u0275advance();
    \u0275\u0275property("for", \u0275\u0275interpolate1("chk-", $index_r8));
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c1, email_r7.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(email_r7.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(15, _c2, email_r7.isIcon == true));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c1, email_r7.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(email_r7.subject);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(email_r7.date);
  }
}
var InboxComponent = class _InboxComponent {
  constructor(modalService, store) {
    this.modalService = modalService;
    this.store = store;
    this.html = "<p>Content of the editor.</p>";
    this.emailIds = [];
    this.page = 1;
    this.pageSize = 15;
    this.totalRecords = 0;
    this.startIndex = 1;
    this.endIndex = 15;
  }
  ngOnInit() {
    this.editor = new Editor();
    this.breadCrumbItems = [{ label: "Email" }, { label: "Inbox", active: true }];
    this.store.dispatch(fetchmailData());
    this.store.select(selectData).subscribe((data) => {
      this.emailData = data;
      this.returnedArray = data;
    });
    this.totalRecords = this.emailData.length;
  }
  ngOnDestroy() {
    this.editor.destroy();
  }
  open(content) {
    this.modalRef = this.modalService.show(content);
  }
  markUnread() {
    for (let i = 0; i < this.emailIds.length; i++) {
      const obj = this.emailData.find((o) => o.id === this.emailIds[i]);
      const index = this.emailData.indexOf(obj);
      this.emailData[index].unread = true;
    }
    this.emailIds = [];
  }
  selectMail(event, id) {
    if (event.target.checked) {
      this.emailIds.push(id);
    } else {
      this.emailIds.splice(this.emailIds.indexOf(id), 1);
    }
  }
  deleteMail() {
    const found = this.emailData.some((r) => this.emailIds.indexOf(r.id) >= 0);
    if (found) {
      for (let i = 0; i < this.emailIds.length; i++) {
        const obj = this.emailData.find((o) => o.id === this.emailIds[i]);
        this.emailData.splice(this.emailData.indexOf(obj), 1);
      }
    }
    this.emailIds = [];
  }
  confirm() {
    import_sweetalert2.default.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#34c38f",
      cancelButtonColor: "#f46a6a",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.value) {
        this.deleteMail();
        import_sweetalert2.default.fire("Deleted!", "Mail has been deleted.", "success");
      }
    });
  }
  /**
   * Handle on page click event
   */
  onPageChange(page) {
    this.startIndex = (page - 1) * this.pageSize + 1;
    this.endIndex = (page - 1) * this.pageSize + this.pageSize;
    if (this.endIndex > this.totalRecords) {
      this.endIndex = this.totalRecords;
    }
    this.emailData = this.returnedArray.slice(this.startIndex - 1, this.endIndex - 1);
  }
  /**
   * Category Filtering
   */
  categoryFilter(e, name) {
    var removeClass = document.querySelectorAll(".mail-list a");
    removeClass.forEach((element) => {
      element.classList.remove("active");
    });
    e.target.closest(".mail-list a").classList.add("active");
    if (name == "all") {
      this.emailData = this.returnedArray;
    } else {
      this.emailData = this.returnedArray.filter((email) => {
        return email.category === name;
      });
    }
  }
  static {
    this.\u0275fac = function InboxComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InboxComponent)(\u0275\u0275directiveInject(BsModalService), \u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InboxComponent, selectors: [["app-inbox"]], decls: 121, vars: 8, consts: [["content", ""], [1, "container-fluid"], ["title", "Inbox", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "email-leftbar", "card"], ["type", "button", "data-toggle", "modal", "data-target", "#composemodal", 1, "btn", "btn-danger", "btn-block", 3, "click"], [1, "mail-list", "mt-4"], ["href", "javascript: void(0);", 1, "active", 3, "click"], [1, "mdi", "mdi-email-outline", "me-2"], [1, "ms-1", "float-end"], ["href", "javascript: void(0);", 3, "click"], [1, "mdi", "mdi-star-outline", "me-2"], [1, "mdi", "mdi-diamond-stone", "me-2"], [1, "mdi", "mdi-file-outline", "me-2"], [1, "mdi", "mdi-email-check-outline", "me-2"], [1, "mdi", "mdi-trash-can-outline", "me-2"], [1, "mt-4"], [1, "mail-list", "mt-1"], ["href", "javascript: void(0);"], [1, "mdi", "mdi-arrow-right-drop-circle", "text-info", "float-end"], [1, "mdi", "mdi-arrow-right-drop-circle", "text-warning", "float-end"], [1, "mdi", "mdi-arrow-right-drop-circle", "text-primary", "float-end"], [1, "mdi", "mdi-arrow-right-drop-circle", "text-danger", "float-end"], [1, "mdi", "mdi-arrow-right-drop-circle", "text-success", "float-end"], [1, "mt-2"], ["href", "javascript: void(0);", 1, "d-flex"], [1, "flex-shrink-0", "me-3"], ["src", "assets/images/users/avatar-2.jpg", "alt", "Generic placeholder image", "height", "36", 1, "rounded-circle"], [1, "flex-grow-1", "chat-user-box"], [1, "user-title", "m-0"], [1, "text-muted"], ["src", "assets/images/users/avatar-3.jpg", "alt", "Generic placeholder image", "height", "36", 1, "rounded-circle"], ["src", "assets/images/users/avatar-4.jpg", "alt", "Generic placeholder image", "height", "36", 1, "rounded-circle"], ["src", "assets/images/users/avatar-6.jpg", "alt", "Generic placeholder image", "height", "36", 1, "rounded-circle"], [1, "email-rightbar", "mb-3"], [1, "card"], ["role", "toolbar", 1, "btn-toolbar", "p-3"], [1, "btn-group", "me-2", "mb-2", "mb-sm-0"], ["type", "button", 1, "btn", "btn-primary"], [1, "fa", "fa-inbox"], [1, "fa", "fa-exclamation-circle"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "far", "fa-trash-alt"], ["dropdown", "", 1, "btn-group", "me-2", "mb-2", "mb-sm-0"], ["type", "button", "dropdownToggle", "", "data-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "fa", "fa-folder"], [1, "mdi", "mdi-chevron-down", "ms-1"], ["class", "dropdown-menu", 4, "dropdownMenu"], [1, "fa", "fa-tag"], [1, "mdi", "mdi-dots-vertical", "ms-2"], [1, "message-list"], [1, "unread", 3, "ngClass"], [1, "row", "justify-content-md-between", "align-items-md-center"], [1, "col-7"], [1, "col-5"], [1, "btn-group", "float-end"], ["type", "button", 1, "btn", "btn-sm", "btn-success", "waves-effect"], [1, "fa", "fa-chevron-left"], [1, "fa", "fa-chevron-right"], [1, "modal-header"], ["id", "composemodalTitle", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "mb-3"], ["type", "email", "placeholder", "To", 1, "form-control"], ["type", "text", "placeholder", "Subject", 1, "form-control"], [3, "editor"], [3, "editor", "ngModel", "disabled", "placeholder"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fab", "fa-telegram-plane", "ms-1"], [1, "dropdown-menu"], ["href", "javascript: void(0);", 1, "dropdown-item"], ["href", "javascript: void(0);", 1, "dropdown-item", 3, "click"], [1, "col-mail", "col-mail-1"], [1, "checkbox-wrapper-mail"], ["type", "checkbox", 3, "change", "id"], [3, "for"], [1, "title", 3, "routerLink"], [1, "star-toggle", "far", "fa-star", 3, "ngClass"], [1, "col-mail", "col-mail-2"], [1, "subject", 3, "routerLink"], [1, "date"]], template: function InboxComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275element(1, "app-page-title", 2);
        \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "button", 6);
        \u0275\u0275listener("click", function InboxComponent_Template_button_click_5_listener() {
          \u0275\u0275restoreView(_r1);
          const content_r2 = \u0275\u0275reference(82);
          return \u0275\u0275resetView(ctx.open(content_r2));
        });
        \u0275\u0275text(6, " Compose ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 7)(8, "a", 8);
        \u0275\u0275listener("click", function InboxComponent_Template_a_click_8_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.categoryFilter($event, "all"));
        });
        \u0275\u0275element(9, "i", 9);
        \u0275\u0275text(10, " Inbox ");
        \u0275\u0275elementStart(11, "span", 10);
        \u0275\u0275text(12, "(18)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "a", 11);
        \u0275\u0275listener("click", function InboxComponent_Template_a_click_13_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.categoryFilter($event, "starred"));
        });
        \u0275\u0275element(14, "i", 12);
        \u0275\u0275text(15, "Starred");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "a", 11);
        \u0275\u0275listener("click", function InboxComponent_Template_a_click_16_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.categoryFilter($event, "important"));
        });
        \u0275\u0275element(17, "i", 13);
        \u0275\u0275text(18, "Important");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "a", 11);
        \u0275\u0275listener("click", function InboxComponent_Template_a_click_19_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.categoryFilter($event, "draft"));
        });
        \u0275\u0275element(20, "i", 14);
        \u0275\u0275text(21, "Draft");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "a", 11);
        \u0275\u0275listener("click", function InboxComponent_Template_a_click_22_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.categoryFilter($event, "sent-mail"));
        });
        \u0275\u0275element(23, "i", 15);
        \u0275\u0275text(24, "Sent Mail");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "a", 11);
        \u0275\u0275listener("click", function InboxComponent_Template_a_click_25_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.categoryFilter($event, "trash"));
        });
        \u0275\u0275element(26, "i", 16);
        \u0275\u0275text(27, "Trash");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "h6", 17);
        \u0275\u0275text(29, "Labels");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 18)(31, "a", 19);
        \u0275\u0275element(32, "span", 20);
        \u0275\u0275text(33, "Theme Support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "a", 19);
        \u0275\u0275element(35, "span", 21);
        \u0275\u0275text(36, "Freelance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "a", 19);
        \u0275\u0275element(38, "span", 22);
        \u0275\u0275text(39, "Social");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "a", 19);
        \u0275\u0275element(41, "span", 23);
        \u0275\u0275text(42, "Friends");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "a", 19);
        \u0275\u0275element(44, "span", 24);
        \u0275\u0275text(45, "Family");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "h6", 17);
        \u0275\u0275text(47, "Chat");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 25)(49, "a", 26)(50, "div", 27);
        \u0275\u0275element(51, "img", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 29)(53, "p", 30);
        \u0275\u0275text(54, "Scott Median");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "p", 31);
        \u0275\u0275text(56, "Hello");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(57, "a", 26)(58, "div", 27);
        \u0275\u0275element(59, "img", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 29)(61, "p", 30);
        \u0275\u0275text(62, "Julian Rosa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "p", 31);
        \u0275\u0275text(64, "What about our next..");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(65, "a", 26)(66, "div", 27);
        \u0275\u0275element(67, "img", 33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "div", 29)(69, "p", 30);
        \u0275\u0275text(70, "David Medina");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "p", 31);
        \u0275\u0275text(72, "Yeah everything is fine");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(73, "a", 26)(74, "div", 27);
        \u0275\u0275element(75, "img", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "div", 29)(77, "p", 30);
        \u0275\u0275text(78, "Jay Baker");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "p", 31);
        \u0275\u0275text(80, "Wow that's great");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(81, InboxComponent_ng_template_81_Template, 19, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "div", 35)(84, "div", 36)(85, "div", 37)(86, "div", 38)(87, "button", 39);
        \u0275\u0275element(88, "i", 40);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "button", 39);
        \u0275\u0275element(90, "i", 41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "button", 42);
        \u0275\u0275listener("click", function InboxComponent_Template_button_click_91_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.confirm());
        });
        \u0275\u0275element(92, "i", 43);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "div", 44)(94, "button", 45);
        \u0275\u0275element(95, "i", 46)(96, "i", 47);
        \u0275\u0275elementEnd();
        \u0275\u0275template(97, InboxComponent_div_97_Template, 7, 0, "div", 48);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "div", 44)(99, "button", 45);
        \u0275\u0275element(100, "i", 49)(101, "i", 47);
        \u0275\u0275elementEnd();
        \u0275\u0275template(102, InboxComponent_div_102_Template, 7, 0, "div", 48);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "div", 44)(104, "button", 45);
        \u0275\u0275text(105, " More");
        \u0275\u0275element(106, "i", 50);
        \u0275\u0275elementEnd();
        \u0275\u0275template(107, InboxComponent_div_107_Template, 11, 0, "div", 48);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(108, "ul", 51);
        \u0275\u0275repeaterCreate(109, InboxComponent_For_110_Template, 13, 19, "li", 52, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275pipe(111, "slice");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(112, "div", 53)(113, "div", 54);
        \u0275\u0275text(114);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "div", 55)(116, "div", 56)(117, "button", 57);
        \u0275\u0275element(118, "i", 58);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "button", 57);
        \u0275\u0275element(120, "i", 59);
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(108);
        \u0275\u0275repeater(\u0275\u0275pipeBind3(111, 4, ctx.emailData, 0, 15));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate3(" Showing ", ctx.startIndex, " - ", ctx.endIndex, " of ", ctx.totalRecords, " ");
      }
    }, dependencies: [CommonModule, NgClass, NgxEditorModule, NgxEditorComponent, NgxEditorMenuComponent, BsDropdownModule, BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective, SlicePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InboxComponent, [{
    type: Component,
    args: [{ selector: "app-inbox", imports: [CommonModule, NgxEditorModule, BsDropdownModule], schemas: [NO_ERRORS_SCHEMA], template: `<div class="container-fluid">\r
  <app-page-title title="Inbox" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
  <div class="row">\r
    <div class="col-12">\r
      <div class="email-leftbar card">\r
        <button type="button" class="btn btn-danger btn-block" data-toggle="modal" data-target="#composemodal"\r
          (click)="open(content)">\r
          Compose\r
        </button>\r
        <div class="mail-list mt-4">\r
          <a href="javascript: void(0);" class="active" (click)="categoryFilter($event,'all')"><i\r
              class="mdi mdi-email-outline me-2"></i> Inbox <span class="ms-1 float-end">(18)</span></a>\r
          <a href="javascript: void(0);" (click)="categoryFilter($event,'starred')"><i\r
              class="mdi mdi-star-outline me-2"></i>Starred</a>\r
          <a href="javascript: void(0);" (click)="categoryFilter($event,'important')"><i\r
              class="mdi mdi-diamond-stone me-2"></i>Important</a>\r
          <a href="javascript: void(0);" (click)="categoryFilter($event,'draft')"><i\r
              class="mdi mdi-file-outline me-2"></i>Draft</a>\r
          <a href="javascript: void(0);" (click)="categoryFilter($event,'sent-mail')"><i\r
              class="mdi mdi-email-check-outline me-2"></i>Sent Mail</a>\r
          <a href="javascript: void(0);" (click)="categoryFilter($event,'trash')"><i\r
              class="mdi mdi-trash-can-outline me-2"></i>Trash</a>\r
        </div>\r
\r
        <h6 class="mt-4">Labels</h6>\r
\r
        <div class="mail-list mt-1">\r
          <a href="javascript: void(0);"><span class="mdi mdi-arrow-right-drop-circle text-info float-end"></span>Theme\r
            Support</a>\r
          <a href="javascript: void(0);"><span\r
              class="mdi mdi-arrow-right-drop-circle text-warning float-end"></span>Freelance</a>\r
          <a href="javascript: void(0);"><span\r
              class="mdi mdi-arrow-right-drop-circle text-primary float-end"></span>Social</a>\r
          <a href="javascript: void(0);"><span\r
              class="mdi mdi-arrow-right-drop-circle text-danger float-end"></span>Friends</a>\r
          <a href="javascript: void(0);"><span\r
              class="mdi mdi-arrow-right-drop-circle text-success float-end"></span>Family</a>\r
        </div>\r
\r
        <h6 class="mt-4">Chat</h6>\r
\r
        <div class="mt-2">\r
          <a href="javascript: void(0);" class="d-flex">\r
            <div class="flex-shrink-0 me-3">\r
              <img class="rounded-circle" src="assets/images/users/avatar-2.jpg" alt="Generic placeholder image"\r
                height="36">\r
            </div>\r
            <div class="flex-grow-1 chat-user-box">\r
              <p class="user-title m-0">Scott Median</p>\r
              <p class="text-muted">Hello</p>\r
            </div>\r
          </a>\r
\r
          <a href="javascript: void(0);" class="d-flex">\r
            <div class="flex-shrink-0 me-3">\r
              <img class="rounded-circle" src="assets/images/users/avatar-3.jpg" alt="Generic placeholder image"\r
                height="36">\r
            </div>\r
            <div class="flex-grow-1 chat-user-box">\r
              <p class="user-title m-0">Julian Rosa</p>\r
              <p class="text-muted">What about our next..</p>\r
            </div>\r
          </a>\r
\r
          <a href="javascript: void(0);" class="d-flex">\r
            <div class="flex-shrink-0 me-3">\r
              <img class="rounded-circle" src="assets/images/users/avatar-4.jpg" alt="Generic placeholder image"\r
                height="36">\r
            </div>\r
            <div class="flex-grow-1 chat-user-box">\r
              <p class="user-title m-0">David Medina</p>\r
              <p class="text-muted">Yeah everything is fine</p>\r
            </div>\r
          </a>\r
\r
          <a href="javascript: void(0);" class="d-flex">\r
            <div class="flex-shrink-0 me-3">\r
              <img class="rounded-circle" src="assets/images/users/avatar-6.jpg" alt="Generic placeholder image"\r
                height="36">\r
            </div>\r
            <div class="flex-grow-1 chat-user-box">\r
              <p class="user-title m-0">Jay Baker</p>\r
              <p class="text-muted">Wow that's great</p>\r
            </div>\r
          </a>\r
        </div>\r
        <ng-template #content let-modal>\r
          <div class="modal-header">\r
            <h5 class="modal-title" id="composemodalTitle">New Message</h5>\r
            <button type="button" class="btn-close" (click)="modalRef?.hide()" aria-label="Close">\r
\r
            </button>\r
          </div>\r
          <div class="modal-body">\r
            <form>\r
              <div class="mb-3">\r
                <input type="email" class="form-control" placeholder="To">\r
              </div>\r
              <div class="mb-3">\r
                <input type="text" class="form-control" placeholder="Subject">\r
              </div>\r
              <div class="mb-3">\r
                <!-- <ckeditor [editor]="Editor" data="<p>Content of the editor.</p>"></ckeditor> -->\r
                <ngx-editor-menu [editor]="editor"> </ngx-editor-menu>\r
                <ngx-editor [editor]="editor" [ngModel]="html" [disabled]="false"\r
                  [placeholder]="'Type here...'"></ngx-editor>\r
              </div>\r
            </form>\r
          </div>\r
          <div class="modal-footer">\r
            <button type="button" class="btn btn-secondary" (click)="modalRef?.hide()">Close</button>\r
            <button type="button" class="btn btn-primary">Send <i class="fab fa-telegram-plane ms-1"></i></button>\r
          </div>\r
        </ng-template>\r
      </div>\r
\r
      <div class="email-rightbar mb-3">\r
\r
        <div class="card">\r
          <div class="btn-toolbar p-3" role="toolbar">\r
            <div class="btn-group me-2 mb-2 mb-sm-0">\r
              <button type="button" class="btn btn-primary"><i class="fa fa-inbox"></i></button>\r
              <button type="button" class="btn btn-primary"><i class="fa fa-exclamation-circle"></i></button>\r
              <button type="button" (click)="confirm()" class="btn btn-primary"><i\r
                  class="far fa-trash-alt"></i></button>\r
            </div>\r
            <div class="btn-group me-2 mb-2 mb-sm-0" dropdown>\r
              <button type="button" class="btn btn-primary dropdown-toggle" dropdownToggle data-toggle="dropdown"\r
                aria-expanded="false">\r
                <i class="fa fa-folder"></i> <i class="mdi mdi-chevron-down ms-1"></i>\r
              </button>\r
              <div class="dropdown-menu" *dropdownMenu>\r
                <a class="dropdown-item" href="javascript: void(0);">Updates</a>\r
                <a class="dropdown-item" href="javascript: void(0);">Social</a>\r
                <a class="dropdown-item" href="javascript: void(0);">Team Manage</a>\r
              </div>\r
            </div>\r
            <div class="btn-group me-2 mb-2 mb-sm-0" dropdown>\r
              <button type="button" class="btn btn-primary dropdown-toggle" dropdownToggle data-toggle="dropdown"\r
                aria-expanded="false">\r
                <i class="fa fa-tag"></i> <i class="mdi mdi-chevron-down ms-1"></i>\r
              </button>\r
              <div class="dropdown-menu" *dropdownMenu>\r
                <a class="dropdown-item" href="javascript: void(0);">Updates</a>\r
                <a class="dropdown-item" href="javascript: void(0);">Social</a>\r
                <a class="dropdown-item" href="javascript: void(0);">Team Manage</a>\r
              </div>\r
            </div>\r
\r
            <div class="btn-group me-2 mb-2 mb-sm-0" dropdown>\r
              <button type="button" class="btn btn-primary dropdown-toggle" dropdownToggle data-toggle="dropdown"\r
                aria-expanded="false">\r
                More<i class="mdi mdi-dots-vertical ms-2"></i>\r
              </button>\r
              <div class="dropdown-menu" *dropdownMenu>\r
                <a class="dropdown-item" (click)="markUnread()" href="javascript: void(0);">Mark as Unread</a>\r
                <a class="dropdown-item" href="javascript: void(0);">Mark as Important</a>\r
                <a class="dropdown-item" href="javascript: void(0);">Add to Tasks</a>\r
                <a class="dropdown-item" href="javascript: void(0);">Add Star</a>\r
                <a class="dropdown-item" href="javascript: void(0);">Mute</a>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <ul class="message-list">\r
            @for(email of emailData | slice:0:15;track $index){\r
            <li class="unread" [ngClass]="{ 'unread': email.unread === true }">\r
              <div class="col-mail col-mail-1">\r
                <div class="checkbox-wrapper-mail">\r
                  <input type="checkbox" id="chk-{{$index}}" (change)="selectMail($event,email.id)" />\r
                  <label for="chk-{{$index}}"></label>\r
                </div>\r
                <a [routerLink]="['../read',email.id]" class="title">{{email.title}}</a>\r
                <span class="star-toggle far fa-star" [ngClass]="{'fas': email.isIcon == true}"></span>\r
              </div>\r
              <div class="col-mail col-mail-2">\r
                <a [routerLink]="['../read',email.id]" class="subject">{{email.subject}}</a>\r
                <div class="date">{{email.date}}</div>\r
              </div>\r
            </li>}\r
          </ul>\r
        </div>\r
        <div class="row justify-content-md-between align-items-md-center">\r
          <div class="col-7">\r
            Showing {{startIndex}} - {{endIndex}} of {{totalRecords}}\r
          </div> <!-- end col-->\r
          <div class="col-5">\r
            <div class="btn-group float-end">\r
              <button type="button" class="btn btn-sm btn-success waves-effect"><i\r
                  class="fa fa-chevron-left"></i></button>\r
              <button type="button" class="btn btn-sm btn-success waves-effect"><i\r
                  class="fa fa-chevron-right"></i></button>\r
            </div>\r
          </div> <!-- end col-->\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>` }]
  }], () => [{ type: BsModalService }, { type: Store }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InboxComponent, { className: "InboxComponent", filePath: "src/app/pages/email/inbox/inbox.component.ts", lineNumber: 22 });
})();

// src/app/pages/email/emailread/emailread.component.ts
var _c02 = () => ["../../inbox"];
function EmailreadComponent_ng_template_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "h5", 64);
    \u0275\u0275text(2, "New Message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 65);
    \u0275\u0275listener("click", function EmailreadComponent_ng_template_81_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.modalRef == null ? null : ctx_r3.modalRef.hide());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 66)(5, "form")(6, "div", 67);
    \u0275\u0275element(7, "input", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 67);
    \u0275\u0275element(9, "input", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 67);
    \u0275\u0275element(11, "ngx-editor-menu", 70)(12, "ngx-editor", 71);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 72)(14, "button", 73);
    \u0275\u0275listener("click", function EmailreadComponent_ng_template_81_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.modalRef == null ? null : ctx_r3.modalRef.hide());
    });
    \u0275\u0275text(15, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 39);
    \u0275\u0275text(17, "Send ");
    \u0275\u0275element(18, "i", 74);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("editor", ctx_r3.editor);
    \u0275\u0275advance();
    \u0275\u0275property("editor", ctx_r3.editor)("ngModel", ctx_r3.html)("disabled", false)("placeholder", "Type here...");
  }
}
function EmailreadComponent_div_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "a", 76);
    \u0275\u0275text(2, "Updates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 76);
    \u0275\u0275text(4, "Social");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 76);
    \u0275\u0275text(6, "Team Manage");
    \u0275\u0275elementEnd()();
  }
}
function EmailreadComponent_div_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "a", 76);
    \u0275\u0275text(2, "Updates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 76);
    \u0275\u0275text(4, "Social");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 76);
    \u0275\u0275text(6, "Team Manage");
    \u0275\u0275elementEnd()();
  }
}
function EmailreadComponent_div_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "button", 77);
    \u0275\u0275text(2, "Mark as Unread");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 76);
    \u0275\u0275text(4, "Mark as Important");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 76);
    \u0275\u0275text(6, "Add to Tasks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 76);
    \u0275\u0275text(8, "Add Star");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 76);
    \u0275\u0275text(10, "Mute");
    \u0275\u0275elementEnd()();
  }
}
var EmailreadComponent = class _EmailreadComponent {
  constructor(route, modalService, store) {
    this.route = route;
    this.modalService = modalService;
    this.store = store;
    this.html = "<p>Content of the editor.</p>";
    this.emailId = null;
    this.returnedArray = [];
    this.route.params.subscribe((params) => {
      this.emailId = parseInt(params.id, 10);
      this.index = params.id;
      this.index = params.id;
    });
  }
  ngOnInit() {
    this.editor = new Editor();
    this.breadCrumbItems = [{ label: "Email" }, { label: "Read Email", active: true }];
    this.store.dispatch(fetchmailData());
    this.store.select(selectData).subscribe((data) => {
      this.emailData = data;
      this.returnedArray = data;
    });
  }
  ngOnDestroy() {
    this.editor.destroy();
  }
  open(content) {
    this.modalRef = this.modalService.show(content);
  }
  static {
    this.\u0275fac = function EmailreadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmailreadComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(BsModalService), \u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailreadComponent, selectors: [["app-emailread"]], decls: 144, vars: 15, consts: [["content", ""], [1, "container-fluid"], ["title", "Read Email", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "email-leftbar", "card"], ["type", "button", "data-toggle", "modal", "data-target", "#composemodal", 1, "btn", "btn-danger", "btn-block", 3, "click"], [1, "mail-list", "mt-4"], [1, "active", 3, "routerLink"], [1, "mdi", "mdi-email-outline", "me-2"], [1, "ms-1", "float-end"], [3, "routerLink"], [1, "mdi", "mdi-star-outline", "me-2"], [1, "mdi", "mdi-diamond-stone", "me-2"], [1, "mdi", "mdi-file-outline", "me-2"], [1, "mdi", "mdi-email-check-outline", "me-2"], [1, "mdi", "mdi-trash-can-outline", "me-2"], [1, "mt-4"], [1, "mail-list", "mt-1"], ["href", "javascript: void(0);"], [1, "mdi", "mdi-arrow-right-drop-circle", "text-info", "float-end"], [1, "mdi", "mdi-arrow-right-drop-circle", "text-warning", "float-end"], [1, "mdi", "mdi-arrow-right-drop-circle", "text-primary", "float-end"], [1, "mdi", "mdi-arrow-right-drop-circle", "text-danger", "float-end"], [1, "mdi", "mdi-arrow-right-drop-circle", "text-success", "float-end"], [1, "mt-2"], ["href", "javascript: void(0);", 1, "d-flex"], [1, "flex-shrink-0", "me-3"], ["src", "assets/images/users/avatar-2.jpg", "alt", "Generic placeholder image", "height", "36", 1, "rounded-circle"], [1, "flex-grow-1", "chat-user-box"], [1, "user-title", "m-0"], [1, "text-muted"], ["src", "assets/images/users/avatar-3.jpg", "alt", "Generic placeholder image", "height", "36", 1, "rounded-circle"], ["src", "assets/images/users/avatar-4.jpg", "alt", "Generic placeholder image", "height", "36", 1, "rounded-circle"], ["src", "assets/images/users/avatar-6.jpg", "alt", "Generic placeholder image", "height", "36", 1, "rounded-circle"], [1, "email-rightbar", "mb-3"], [1, "card"], ["role", "toolbar", 1, "btn-toolbar", "p-3"], [1, "btn-group", "me-2", "mb-2", "mb-sm-0"], ["type", "button", 1, "btn", "btn-primary"], [1, "fa", "fa-inbox"], [1, "fa", "fa-exclamation-circle"], [1, "far", "fa-trash-alt"], ["dropdown", "", 1, "btn-group", "me-2", "mb-2", "mb-sm-0"], ["type", "button", "dropdownToggle", "", "data-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "fa", "fa-folder"], [1, "mdi", "mdi-chevron-down", "ms-1"], ["class", "dropdown-menu", 4, "dropdownMenu"], [1, "fa", "fa-tag"], [1, "mdi", "mdi-dots-vertical", "ms-2"], [1, "card-body"], [1, "d-flex", "mb-4"], ["src", "assets/images/users/avatar-2.jpg", "alt", "Generic placeholder image", 1, "rounded-circle", "avatar-sm"], [1, "flex-grow-1"], [1, "font-size-14", "mt-1"], [1, "mt-0", "font-size-16"], [1, "col-xl-2", "col-6"], ["src", "assets/images/small/img-3.jpg", "alt", "Card image cap", 1, "card-img-top", "img-fluid"], [1, "py-2", "text-center"], ["href", "javascript: void(0);", "download", "", 1, "fw-medium"], ["src", "assets/images/small/img-4.jpg", "alt", "Card image cap", 1, "card-img-top", "img-fluid"], ["href", "javascript: void(0);", 1, "btn", "btn-secondary", "mt-4"], [1, "mdi", "mdi-reply"], [1, "modal-header"], ["id", "composemodalTitle", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "mb-3"], ["type", "email", "placeholder", "To", 1, "form-control"], ["type", "text", "placeholder", "Subject", 1, "form-control"], [3, "editor"], [3, "editor", "ngModel", "disabled", "placeholder"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fab", "fa-telegram-plane", "ms-1"], [1, "dropdown-menu"], ["href", "javascript: void(0);", 1, "dropdown-item"], ["type", "button", 1, "dropdown-item"]], template: function EmailreadComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275element(1, "app-page-title", 2);
        \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "button", 6);
        \u0275\u0275listener("click", function EmailreadComponent_Template_button_click_5_listener() {
          \u0275\u0275restoreView(_r1);
          const content_r2 = \u0275\u0275reference(82);
          return \u0275\u0275resetView(ctx.open(content_r2));
        });
        \u0275\u0275text(6, " Compose ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 7)(8, "a", 8);
        \u0275\u0275element(9, "i", 9);
        \u0275\u0275text(10, " Inbox ");
        \u0275\u0275elementStart(11, "span", 10);
        \u0275\u0275text(12, "(18)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "a", 11);
        \u0275\u0275element(14, "i", 12);
        \u0275\u0275text(15, "Starred");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "a", 11);
        \u0275\u0275element(17, "i", 13);
        \u0275\u0275text(18, "Important");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "a", 11);
        \u0275\u0275element(20, "i", 14);
        \u0275\u0275text(21, "Draft");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "a", 11);
        \u0275\u0275element(23, "i", 15);
        \u0275\u0275text(24, "Sent Mail");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "a", 11);
        \u0275\u0275element(26, "i", 16);
        \u0275\u0275text(27, "Trash");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "h6", 17);
        \u0275\u0275text(29, "Labels");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 18)(31, "a", 19);
        \u0275\u0275element(32, "span", 20);
        \u0275\u0275text(33, "Theme Support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "a", 19);
        \u0275\u0275element(35, "span", 21);
        \u0275\u0275text(36, "Freelance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "a", 19);
        \u0275\u0275element(38, "span", 22);
        \u0275\u0275text(39, "Social");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "a", 19);
        \u0275\u0275element(41, "span", 23);
        \u0275\u0275text(42, "Friends");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "a", 19);
        \u0275\u0275element(44, "span", 24);
        \u0275\u0275text(45, "Family");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "h6", 17);
        \u0275\u0275text(47, "Chat");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 25)(49, "a", 26)(50, "div", 27);
        \u0275\u0275element(51, "img", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 29)(53, "p", 30);
        \u0275\u0275text(54, "Scott Median");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "p", 31);
        \u0275\u0275text(56, "Hello");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(57, "a", 26)(58, "div", 27);
        \u0275\u0275element(59, "img", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 29)(61, "p", 30);
        \u0275\u0275text(62, "Julian Rosa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "p", 31);
        \u0275\u0275text(64, "What about our next..");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(65, "a", 26)(66, "div", 27);
        \u0275\u0275element(67, "img", 33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "div", 29)(69, "p", 30);
        \u0275\u0275text(70, "David Medina");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "p", 31);
        \u0275\u0275text(72, "Yeah everything is fine");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(73, "a", 26)(74, "div", 27);
        \u0275\u0275element(75, "img", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "div", 29)(77, "p", 30);
        \u0275\u0275text(78, "Jay Baker");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "p", 31);
        \u0275\u0275text(80, "Wow that's great");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(81, EmailreadComponent_ng_template_81_Template, 19, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "div", 35)(84, "div", 36)(85, "div", 37)(86, "div", 38)(87, "button", 39);
        \u0275\u0275element(88, "i", 40);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "button", 39);
        \u0275\u0275element(90, "i", 41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "button", 39);
        \u0275\u0275element(92, "i", 42);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "div", 43)(94, "button", 44);
        \u0275\u0275element(95, "i", 45)(96, "i", 46);
        \u0275\u0275elementEnd();
        \u0275\u0275template(97, EmailreadComponent_div_97_Template, 7, 0, "div", 47);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "div", 43)(99, "button", 44);
        \u0275\u0275element(100, "i", 48)(101, "i", 46);
        \u0275\u0275elementEnd();
        \u0275\u0275template(102, EmailreadComponent_div_102_Template, 7, 0, "div", 47);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "div", 43)(104, "button", 44);
        \u0275\u0275text(105, " More ");
        \u0275\u0275element(106, "i", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275template(107, EmailreadComponent_div_107_Template, 11, 0, "div", 47);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(108, "div", 50)(109, "div", 51)(110, "div", 27);
        \u0275\u0275element(111, "img", 52);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "div", 53)(113, "h5", 54);
        \u0275\u0275text(114, "Humberto D. Champion");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "small", 31);
        \u0275\u0275text(116, "support@domain.com");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(117, "h4", 55);
        \u0275\u0275text(118);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "p");
        \u0275\u0275text(120, "Dear Lorem Ipsum,");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "p");
        \u0275\u0275text(122);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "p");
        \u0275\u0275text(124, "Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam in dui et porta. Sed bibendum orci non tincidunt ultrices. Vivamus fringilla, mi lacinia dapibus condimentum, ipsum urna lacinia lacus, vel tincidunt mi nibh sit amet lorem.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "p");
        \u0275\u0275text(126, "Sincerly,");
        \u0275\u0275elementEnd();
        \u0275\u0275element(127, "hr");
        \u0275\u0275elementStart(128, "div", 3)(129, "div", 56)(130, "div", 36);
        \u0275\u0275element(131, "img", 57);
        \u0275\u0275elementStart(132, "div", 58)(133, "a", 59);
        \u0275\u0275text(134, "Download");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(135, "div", 56)(136, "div", 36);
        \u0275\u0275element(137, "img", 60);
        \u0275\u0275elementStart(138, "div", 58)(139, "a", 59);
        \u0275\u0275text(140, "Download");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(141, "a", 61);
        \u0275\u0275element(142, "i", 62);
        \u0275\u0275text(143, " Reply");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(7);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c02));
        \u0275\u0275advance(5);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c02));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(11, _c02));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c02));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(13, _c02));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(14, _c02));
        \u0275\u0275advance(93);
        \u0275\u0275textInterpolate(ctx.returnedArray[0] == null ? null : ctx.returnedArray[0].title);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.returnedArray[0] == null ? null : ctx.returnedArray[0].subject, " ");
      }
    }, dependencies: [NgxEditorModule, NgxEditorComponent, NgxEditorMenuComponent, BsDropdownModule, BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailreadComponent, [{
    type: Component,
    args: [{ selector: "app-emailread", imports: [NgxEditorModule, BsDropdownModule], schemas: [NO_ERRORS_SCHEMA], template: `<div class="container-fluid">\r
  <app-page-title title="Read Email" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
\r
  <div class="row">\r
    <div class="col-12">\r
      <div class="email-leftbar card">\r
        <button type="button" class="btn btn-danger btn-block" data-toggle="modal" data-target="#composemodal" (click)="open(content)">\r
          Compose\r
        </button>\r
        <div class="mail-list mt-4">\r
          <a [routerLink]="['../../inbox']" class="active"><i class="mdi mdi-email-outline me-2"></i> Inbox <span class="ms-1 float-end">(18)</span></a>\r
          <a [routerLink]="['../../inbox']"><i class="mdi mdi-star-outline me-2"></i>Starred</a>\r
          <a [routerLink]="['../../inbox']"><i class="mdi mdi-diamond-stone me-2"></i>Important</a>\r
          <a [routerLink]="['../../inbox']"><i class="mdi mdi-file-outline me-2"></i>Draft</a>\r
          <a [routerLink]="['../../inbox']"><i class="mdi mdi-email-check-outline me-2"></i>Sent Mail</a>\r
          <a [routerLink]="['../../inbox']"><i class="mdi mdi-trash-can-outline me-2"></i>Trash</a>\r
        </div>\r
\r
        <h6 class="mt-4">Labels</h6>\r
        <div class="mail-list mt-1">\r
          <a href="javascript: void(0);"><span class="mdi mdi-arrow-right-drop-circle text-info float-end"></span>Theme Support</a>\r
          <a href="javascript: void(0);"><span class="mdi mdi-arrow-right-drop-circle text-warning float-end"></span>Freelance</a>\r
          <a href="javascript: void(0);"><span class="mdi mdi-arrow-right-drop-circle text-primary float-end"></span>Social</a>\r
          <a href="javascript: void(0);"><span class="mdi mdi-arrow-right-drop-circle text-danger float-end"></span>Friends</a>\r
          <a href="javascript: void(0);"><span class="mdi mdi-arrow-right-drop-circle text-success float-end"></span>Family</a>\r
        </div>\r
\r
        <h6 class="mt-4">Chat</h6>\r
\r
        <div class="mt-2">\r
          <a href="javascript: void(0);" class="d-flex">\r
            <div class="flex-shrink-0 me-3">\r
              <img class="rounded-circle" src="assets/images/users/avatar-2.jpg" alt="Generic placeholder image" height="36">\r
            </div>\r
            <div class="flex-grow-1 chat-user-box">\r
              <p class="user-title m-0">Scott Median</p>\r
              <p class="text-muted">Hello</p>\r
            </div>\r
          </a>\r
\r
          <a href="javascript: void(0);" class="d-flex">\r
            <div class="flex-shrink-0 me-3">\r
              <img class="rounded-circle" src="assets/images/users/avatar-3.jpg" alt="Generic placeholder image" height="36">\r
            </div>\r
            <div class="flex-grow-1 chat-user-box">\r
              <p class="user-title m-0">Julian Rosa</p>\r
              <p class="text-muted">What about our next..</p>\r
            </div>\r
          </a>\r
\r
          <a href="javascript: void(0);" class="d-flex">\r
            <div class="flex-shrink-0 me-3">\r
              <img class="rounded-circle" src="assets/images/users/avatar-4.jpg" alt="Generic placeholder image" height="36">\r
            </div>\r
            <div class="flex-grow-1 chat-user-box">\r
              <p class="user-title m-0">David Medina</p>\r
              <p class="text-muted">Yeah everything is fine</p>\r
            </div>\r
          </a>\r
\r
          <a href="javascript: void(0);" class="d-flex">\r
            <div class="flex-shrink-0 me-3">\r
              <img class="rounded-circle" src="assets/images/users/avatar-6.jpg" alt="Generic placeholder image" height="36">\r
            </div>\r
            <div class="flex-grow-1 chat-user-box">\r
              <p class="user-title m-0">Jay Baker</p>\r
              <p class="text-muted">Wow that's great</p>\r
            </div>\r
          </a>\r
        </div>\r
        <ng-template #content let-modal>\r
          <div class="modal-header">\r
            <h5 class="modal-title" id="composemodalTitle">New Message</h5>\r
            <button type="button" class="btn-close" (click)="modalRef?.hide()" aria-label="Close">\r
            </button>\r
          </div>\r
          <div class="modal-body">\r
            <form>\r
              <div class="mb-3">\r
                <input type="email" class="form-control" placeholder="To">\r
              </div>\r
\r
              <div class="mb-3">\r
                <input type="text" class="form-control" placeholder="Subject">\r
              </div>\r
              <div class="mb-3">\r
                <!-- Editor -->\r
                <ngx-editor-menu [editor]="editor"> </ngx-editor-menu>\r
                <ngx-editor [editor]="editor" [ngModel]="html" [disabled]="false"\r
                  [placeholder]="'Type here...'"></ngx-editor>\r
              </div>\r
\r
            </form>\r
          </div>\r
          <div class="modal-footer">\r
            <button type="button" class="btn btn-secondary" (click)="modalRef?.hide()">Close</button>\r
            <button type="button" class="btn btn-primary">Send <i class="fab fa-telegram-plane ms-1"></i></button>\r
          </div>\r
        </ng-template>\r
      </div>\r
\r
      <!-- Right Sidebar -->\r
      <div class="email-rightbar mb-3">\r
\r
        <div class="card">\r
          <div class="btn-toolbar p-3" role="toolbar">\r
            <div class="btn-group me-2 mb-2 mb-sm-0">\r
              <button type="button" class="btn btn-primary"><i class="fa fa-inbox"></i></button>\r
              <button type="button" class="btn btn-primary"><i class="fa fa-exclamation-circle"></i></button>\r
              <button type="button" class="btn btn-primary"><i class="far fa-trash-alt"></i></button>\r
            </div>\r
            <div class="btn-group me-2 mb-2 mb-sm-0" dropdown>\r
              <button type="button" class="btn btn-primary dropdown-toggle" dropdownToggle data-toggle="dropdown" aria-expanded="false">\r
                <i class="fa fa-folder"></i> <i class="mdi mdi-chevron-down ms-1"></i>\r
              </button>\r
              <div class="dropdown-menu" *dropdownMenu>\r
                <a class="dropdown-item" href="javascript: void(0);">Updates</a>\r
                <a class="dropdown-item" href="javascript: void(0);">Social</a>\r
                <a class="dropdown-item" href="javascript: void(0);">Team Manage</a>\r
              </div>\r
            </div>\r
            <div class="btn-group me-2 mb-2 mb-sm-0" dropdown>\r
              <button type="button" class="btn btn-primary dropdown-toggle" dropdownToggle data-toggle="dropdown" aria-expanded="false">\r
                <i class="fa fa-tag"></i> <i class="mdi mdi-chevron-down ms-1"></i>\r
              </button>\r
              <div class="dropdown-menu" *dropdownMenu>\r
                <a class="dropdown-item" href="javascript: void(0);">Updates</a>\r
                <a class="dropdown-item" href="javascript: void(0);">Social</a>\r
                <a class="dropdown-item" href="javascript: void(0);">Team Manage</a>\r
              </div>\r
            </div>\r
\r
            <div class="btn-group me-2 mb-2 mb-sm-0" dropdown>\r
              <button type="button" class="btn btn-primary dropdown-toggle" dropdownToggle data-toggle="dropdown" aria-expanded="false">\r
                More <i class="mdi mdi-dots-vertical ms-2"></i>\r
              </button>\r
              <div class="dropdown-menu" *dropdownMenu>\r
                <button type="button" class="dropdown-item">Mark as Unread</button>\r
                <a class="dropdown-item" href="javascript: void(0);">Mark as Important</a>\r
                <a class="dropdown-item" href="javascript: void(0);">Add to Tasks</a>\r
                <a class="dropdown-item" href="javascript: void(0);">Add Star</a>\r
                <a class="dropdown-item" href="javascript: void(0);">Mute</a>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="card-body">\r
            <div class="d-flex mb-4">\r
              <div class="flex-shrink-0 me-3">\r
                <img class="rounded-circle avatar-sm" src="assets/images/users/avatar-2.jpg" alt="Generic placeholder image">\r
              </div>\r
              <div class="flex-grow-1">\r
                <h5 class="font-size-14 mt-1">Humberto D. Champion</h5>\r
                <small class="text-muted">support&#64;domain.com</small>\r
              </div>\r
            </div>\r
\r
            <h4 class="mt-0 font-size-16">{{returnedArray[0]?.title}}</h4>\r
\r
            <p>Dear Lorem Ipsum,</p>\r
            <p>\r
              {{returnedArray[0]?.subject}}\r
            </p>\r
            <p>Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam eu venenatis tortor, id lacinia\r
              diam. Sed aliquam in dui et porta. Sed bibendum orci non tincidunt ultrices. Vivamus fringilla, mi lacinia\r
              dapibus condimentum, ipsum urna lacinia lacus, vel tincidunt mi nibh sit amet lorem.</p>\r
            <p>Sincerly,</p>\r
            <hr />\r
\r
            <div class="row">\r
              <div class="col-xl-2 col-6">\r
                <div class="card">\r
                  <img class="card-img-top img-fluid" src="assets/images/small/img-3.jpg" alt="Card image cap">\r
                  <div class="py-2 text-center">\r
                    <a href="javascript: void(0);" class="fw-medium" download>Download</a>\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="col-xl-2 col-6">\r
                <div class="card">\r
                  <img class="card-img-top img-fluid" src="assets/images/small/img-4.jpg" alt="Card image cap">\r
                  <div class="py-2 text-center">\r
                    <a href="javascript: void(0);" class="fw-medium" download>Download</a>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <a href="javascript: void(0);" class="btn btn-secondary mt-4"><i class="mdi mdi-reply"></i>\r
              Reply</a>\r
          </div>\r
\r
        </div>\r
      </div>\r
      <!-- card -->\r
    </div>\r
  </div>\r
</div>` }]
  }], () => [{ type: ActivatedRoute }, { type: BsModalService }, { type: Store }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailreadComponent, { className: "EmailreadComponent", filePath: "src/app/pages/email/emailread/emailread.component.ts", lineNumber: 22 });
})();

// src/app/pages/email/basic/basic.component.ts
var BasicComponent = class _BasicComponent {
  constructor() {
    this.year = (/* @__PURE__ */ new Date()).getFullYear();
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Email Template" }, { label: "Basic Action", active: true }];
  }
  static {
    this.\u0275fac = function BasicComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BasicComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BasicComponent, selectors: [["app-basic"]], decls: 33, vars: 2, consts: [[1, "container-fluid"], ["title", "Basic Action", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "body-wrap", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "width", "100%", "background-color", "transparent", "margin", "0"], [2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "margin", "0"], ["valign", "top", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "vertical-align", "top", "margin", "0"], ["width", "600", "valign", "top", 1, "container", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "vertical-align", "top", "display", "block !important", "max-width", "600px !important", "clear", "both !important", "margin", "0 auto"], [1, "content", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "max-width", "600px", "display", "block", "margin", "0 auto", "padding", "20px"], ["width", "100%", "cellpadding", "0", "cellspacing", "0", "itemprop", "action", "itemscope", "", "itemtype", "http://schema.org/ConfirmAction", 1, "main", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "border-radius", "3px", "margin", "0", "border", "none"], ["valign", "top", 1, "content-wrap", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "color", "#495057", "font-size", "14px", "vertical-align", "top", "margin", "0", "padding", "30px", "box-shadow", "0 0.75rem 1.5rem rgba(18,38,63,.03)", ";border-radius", "7px", "background-color", "#fff"], ["itemprop", "name", "content", "Confirm Email", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "margin", "0"], ["width", "100%", "cellpadding", "0", "cellspacing", "0", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "margin", "0"], ["valign", "top", 1, "content-block", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "vertical-align", "top", "margin", "0", "padding", "0 0 20px"], ["itemprop", "handler", "itemscope", "", "itemtype", "http://schema.org/HttpActionHandler", "valign", "top", 1, "content-block", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "vertical-align", "top", "margin", "0", "padding", "0 0 20px"], ["href", "javascript: void(0);", "itemprop", "url", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "color", "#FFF", "text-decoration", "none", "line-height", "2em", "font-weight", "bold", "text-align", "center", "cursor", "pointer", "display", "inline-block", "border-radius", "5px", "text-transform", "capitalize", "background-color", "#34c38f", "margin", "0", "border-color", "#34c38f", "border-style", "solid", "border-width", "8px 16px"], ["valign", "top", 1, "content-block", 2, "text-align", "center", "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "vertical-align", "top", "margin", "0", "padding", "0"]], template: function BasicComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "table", 4)(5, "tr", 5);
        \u0275\u0275element(6, "td", 6);
        \u0275\u0275elementStart(7, "td", 7)(8, "div", 8)(9, "table", 9)(10, "tr", 5)(11, "td", 10);
        \u0275\u0275element(12, "meta", 11);
        \u0275\u0275elementStart(13, "table", 12)(14, "tr", 5)(15, "td", 13);
        \u0275\u0275text(16, " Please confirm your email address by clicking the link below. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "tr", 5)(18, "td", 13);
        \u0275\u0275text(19, " We may need to send you critical information about our service and it is important that we have an accurate email address. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "tr", 5)(21, "td", 14)(22, "a", 15);
        \u0275\u0275text(23, "Confirm email address");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "tr", 5)(25, "td", 13)(26, "b");
        \u0275\u0275text(27, "Skote");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p");
        \u0275\u0275text(29, "Support Team");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "tr", 5)(31, "td", 16);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd()()()()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(31);
        \u0275\u0275textInterpolate1(" \xA9 ", ctx.year, " Skote ");
      }
    }, dependencies: [PagetitleComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BasicComponent, [{
    type: Component,
    args: [{ selector: "app-basic", imports: [PagetitleComponent], template: `<div class="container-fluid">\r
    <app-page-title title="Basic Action" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
<div class="row">\r
    <div class="col-12">\r
        <table class="body-wrap"\r
            style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: transparent; margin: 0;">\r
            <tr\r
                style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                <td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;"\r
                    valign="top"></td>\r
                <td class="container" width="600"\r
                    style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;"\r
                    valign="top">\r
                    <div class="content"\r
                        style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;">\r
                        <table class="main" width="100%" cellpadding="0" cellspacing="0" itemprop="action" itemscope\r
                            itemtype="http://schema.org/ConfirmAction"\r
                            style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; margin: 0; border: none;">\r
                            <tr\r
                                style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                                <td class="content-wrap"\r
                                    style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; color: #495057; font-size: 14px; vertical-align: top; margin: 0;padding: 30px; box-shadow: 0 0.75rem 1.5rem rgba(18,38,63,.03); ;border-radius: 7px; background-color: #fff;"\r
                                    valign="top">\r
                                    <meta itemprop="name" content="Confirm Email"\r
                                        style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;" />\r
                                    <table width="100%" cellpadding="0" cellspacing="0"\r
                                        style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                                        <tr\r
                                            style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                                            <td class="content-block"\r
                                                style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;"\r
                                                valign="top">\r
                                                Please confirm your email address by clicking the link below.\r
                                            </td>\r
                                        </tr>\r
                                        <tr\r
                                            style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                                            <td class="content-block"\r
                                                style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;"\r
                                                valign="top">\r
                                                We may need to send you critical information about our service and it is\r
                                                important that we have an accurate email address.\r
                                            </td>\r
                                        </tr>\r
                                        <tr\r
                                            style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                                            <td class="content-block" itemprop="handler" itemscope\r
                                                itemtype="http://schema.org/HttpActionHandler"\r
                                                style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;"\r
                                                valign="top">\r
                                                <a href="javascript: void(0);" itemprop="url"\r
                                                    style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; color: #FFF; text-decoration: none; line-height: 2em; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; text-transform: capitalize; background-color: #34c38f; margin: 0; border-color: #34c38f; border-style: solid; border-width: 8px 16px;">Confirm\r
                                                    email address</a>\r
                                            </td>\r
                                        </tr>\r
                                        <tr\r
                                            style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                                            <td class="content-block"\r
                                                style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;"\r
                                                valign="top">\r
                                                <b>Skote</b>\r
                                                <p>Support Team</p>\r
                                            </td>\r
                                        </tr>\r
\r
                                        <tr\r
                                            style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                                            <td class="content-block"\r
                                                style="text-align: center;font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0;"\r
                                                valign="top">\r
                                                \xA9 {{year}} Skote\r
                                            </td>\r
                                        </tr>\r
                                    </table>\r
                                </td>\r
                            </tr>\r
                        </table>\r
                    </div>\r
                </td>\r
            </tr>\r
        </table>\r
        <!-- end table -->\r
    </div>\r
</div>\r
<!-- end row -->\r
</div>` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BasicComponent, { className: "BasicComponent", filePath: "src/app/pages/email/basic/basic.component.ts", lineNumber: 11 });
})();

// src/app/pages/email/billing/billing.component.ts
var BillingComponent = class _BillingComponent {
  constructor() {
    this.year = (/* @__PURE__ */ new Date()).getFullYear();
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Email Template" }, { label: "Billing Email", active: true }];
  }
  static {
    this.\u0275fac = function BillingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BillingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BillingComponent, selectors: [["app-billing"]], decls: 60, vars: 2, consts: [[1, "container-fluid"], ["title", "Billing Email", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "body-wrap", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "width", "100%", "background-color", "transparent", "margin", "0"], [2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "margin", "0"], ["valign", "top", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "vertical-align", "top", "margin", "0"], ["width", "600", "valign", "top", 1, "container", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "vertical-align", "top", "display", "block !important", "max-width", "600px !important", "clear", "both !important", "margin", "0 auto"], [1, "content", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "max-width", "600px", "display", "block", "margin", "0 auto", "padding", "20px"], ["width", "100%", "cellpadding", "0", "cellspacing", "0", 1, "main", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "border-radius", "3px", "margin", "0", "border", "none"], ["align", "center", "valign", "top", 1, "content-wrap", "aligncenter", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "vertical-align", "top", "margin", "0", "padding", "20px", "color", "#495057", "border", "2px solid #1d1e3a", "border-radius", "7px", "background-color", "#fff"], ["width", "100%", "cellpadding", "0", "cellspacing", "0", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "margin", "0"], ["valign", "top", 1, "content-block", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "vertical-align", "top", "margin", "0", "padding", "0 0 20px"], ["align", "center", 1, "aligncenter", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif", "box-sizing", "border-box", "font-size", "24px", "color", "#000", "line-height", "1.2em", "font-weight", "400", "text-align", "center", "margin", "40px 0 0"], [2, "font-weight", "600", "text-transform", "uppercase"], ["align", "center", "valign", "top", 1, "content-block", "aligncenter", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "vertical-align", "top", "text-align", "center", "margin", "0", "padding", "0 0 20px"], [1, "invoice", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "text-align", "left", "width", "80%", "margin", "40px auto"], ["valign", "top", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "vertical-align", "top", "margin", "0", "padding", "5px 0"], ["cellpadding", "0", "cellspacing", "0", 1, "invoice-items", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "width", "100%", "margin", "0"], ["valign", "top", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "vertical-align", "top", "border-top-width", "1px", "border-top-color", "#eee", "border-top-style", "solid", "margin", "0", "padding", "5px 0"], ["align", "right", "valign", "top", 1, "alignright", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "vertical-align", "top", "text-align", "right", "border-top-width", "1px", "border-top-color", "#eee", "border-top-style", "solid", "margin", "0", "padding", "5px 0"], [1, "total", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "margin", "0"], ["width", "80%", "align", "right", "valign", "top", 1, "alignright", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "vertical-align", "top", "text-align", "right", "border-top-width", "2px", "border-top-color", "#333", "border-top-style", "solid", "border-bottom-color", "#333", "border-bottom-width", "2px", "border-bottom-style", "solid", "font-weight", "700", "margin", "0", "padding", "5px 0"], ["align", "right", "valign", "top", 1, "alignright", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "vertical-align", "top", "text-align", "right", "border-top-width", "2px", "border-top-color", "#333", "border-top-style", "solid", "border-bottom-color", "#333", "border-bottom-width", "2px", "border-bottom-style", "solid", "font-weight", "700", "margin", "0", "padding", "5px 0"], ["valign", "top", 1, "content-block", 2, "text-align", "center", "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "vertical-align", "top", "margin", "0", "padding", "0"]], template: function BillingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "table", 4)(5, "tr", 5);
        \u0275\u0275element(6, "td", 6);
        \u0275\u0275elementStart(7, "td", 7)(8, "div", 8)(9, "table", 9)(10, "tr", 5)(11, "td", 10)(12, "table", 11)(13, "tr", 5)(14, "td", 12)(15, "h2", 13);
        \u0275\u0275text(16, "Thanks for using ");
        \u0275\u0275elementStart(17, "b", 14);
        \u0275\u0275text(18, "Skote");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19, ". ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "tr", 5)(21, "td", 15)(22, "table", 16)(23, "tr", 5)(24, "td", 17)(25, "b");
        \u0275\u0275text(26, "Company Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(27, "br", 5);
        \u0275\u0275text(28, "Invoice #6521 ");
        \u0275\u0275element(29, "br", 5);
        \u0275\u0275text(30, "August 01 2017 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "tr", 5)(32, "td", 17)(33, "table", 18)(34, "tr", 5)(35, "td", 19);
        \u0275\u0275text(36, "BS-200 (1 Pc) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "td", 20);
        \u0275\u0275text(38, "$10.99 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "tr", 5)(40, "td", 19);
        \u0275\u0275text(41, "BS-400 (2 Pcs) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "td", 20);
        \u0275\u0275text(43, "$60.00 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "tr", 5)(45, "td", 19);
        \u0275\u0275text(46, "BS-1000 (1 Pc) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "td", 20);
        \u0275\u0275text(48, "$600.00 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "tr", 21)(50, "td", 22);
        \u0275\u0275text(51, "Total ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "td", 23);
        \u0275\u0275text(53, "$670.99 ");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(54, "tr", 5)(55, "td", 15);
        \u0275\u0275text(56, " Skote Inc. 2896 Howell Rd, Russellville, AR, 72823 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "tr", 5)(58, "td", 24);
        \u0275\u0275text(59);
        \u0275\u0275elementEnd()()()()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(58);
        \u0275\u0275textInterpolate1(" \xA9 ", ctx.year, " Skote ");
      }
    }, dependencies: [PagetitleComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BillingComponent, [{
    type: Component,
    args: [{ selector: "app-billing", imports: [PagetitleComponent], template: `<div class="container-fluid">\r
    <app-page-title title="Billing Email" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
<div class="row">\r
    <div class="col-12">\r
        <table class="body-wrap"\r
            style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: transparent; margin: 0;">\r
            <tr\r
                style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                <td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;"\r
                    valign="top"></td>\r
                <td class="container" width="600"\r
                    style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;"\r
                    valign="top">\r
                    <div class="content"\r
                        style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;">\r
                        <table class="main" width="100%" cellpadding="0" cellspacing="0"\r
                            style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px;  margin: 0; border: none;">\r
                            <tr\r
                                style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                                <td class="content-wrap aligncenter"\r
                                    style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;padding: 20px; color: #495057; border: 2px solid #1d1e3a;border-radius: 7px; background-color: #fff;"\r
                                    align="center" valign="top">\r
                                    <table width="100%" cellpadding="0" cellspacing="0"\r
                                        style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                                        <tr\r
                                            style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                                            <td class="content-block"\r
                                                style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;"\r
                                                valign="top">\r
                                                <h2 class="aligncenter"\r
                                                    style="font-family: 'Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; box-sizing: border-box; font-size: 24px; color: #000; line-height: 1.2em; font-weight: 400; text-align: center; margin: 40px 0 0;"\r
                                                    align="center">Thanks for using <b\r
                                                        style="font-weight: 600; text-transform: uppercase;">Skote</b>.\r
                                                </h2>\r
                                            </td>\r
                                        </tr>\r
                                        <tr\r
                                            style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                                            <td class="content-block aligncenter"\r
                                                style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: center; margin: 0; padding: 0 0 20px;"\r
                                                align="center" valign="top">\r
                                                <table class="invoice"\r
                                                    style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; text-align: left; width: 80%; margin: 40px auto;">\r
                                                    <tr\r
                                                        style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                                                        <td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0;"\r
                                                            valign="top"><b>Company Name</b>\r
                                                            <br\r
                                                                style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;" />Invoice\r
                                                            #6521\r
                                                            <br\r
                                                                style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;" />August\r
                                                            01 2017\r
                                                        </td>\r
                                                    </tr>\r
                                                    <tr\r
                                                        style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                                                        <td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0;"\r
                                                            valign="top">\r
                                                            <table class="invoice-items" cellpadding="0" cellspacing="0"\r
                                                                style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; margin: 0;">\r
                                                                <tr\r
                                                                    style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                                                                    <td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; border-top-width: 1px; border-top-color: #eee; border-top-style: solid; margin: 0; padding: 5px 0;"\r
                                                                        valign="top">BS-200 (1 Pc)\r
                                                                    </td>\r
                                                                    <td class="alignright"\r
                                                                        style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: right; border-top-width: 1px; border-top-color: #eee; border-top-style: solid; margin: 0; padding: 5px 0;"\r
                                                                        align="right" valign="top">$10.99\r
                                                                    </td>\r
                                                                </tr>\r
                                                                <tr\r
                                                                    style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                                                                    <td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; border-top-width: 1px; border-top-color: #eee; border-top-style: solid; margin: 0; padding: 5px 0;"\r
                                                                        valign="top">BS-400 (2 Pcs)\r
                                                                    </td>\r
                                                                    <td class="alignright"\r
                                                                        style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: right; border-top-width: 1px; border-top-color: #eee; border-top-style: solid; margin: 0; padding: 5px 0;"\r
                                                                        align="right" valign="top">$60.00\r
                                                                    </td>\r
                                                                </tr>\r
                                                                <tr\r
                                                                    style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                                                                    <td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; border-top-width: 1px; border-top-color: #eee; border-top-style: solid; margin: 0; padding: 5px 0;"\r
                                                                        valign="top">BS-1000 (1 Pc)\r
                                                                    </td>\r
                                                                    <td class="alignright"\r
                                                                        style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: right; border-top-width: 1px; border-top-color: #eee; border-top-style: solid; margin: 0; padding: 5px 0;"\r
                                                                        align="right" valign="top">$600.00\r
                                                                    </td>\r
                                                                </tr>\r
                                                                <tr class="total"\r
                                                                    style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                                                                    <td class="alignright" width="80%"\r
                                                                        style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: right; border-top-width: 2px; border-top-color: #333; border-top-style: solid; border-bottom-color: #333; border-bottom-width: 2px; border-bottom-style: solid; font-weight: 700; margin: 0; padding: 5px 0;"\r
                                                                        align="right" valign="top">Total\r
                                                                    </td>\r
                                                                    <td class="alignright"\r
                                                                        style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: right; border-top-width: 2px; border-top-color: #333; border-top-style: solid; border-bottom-color: #333; border-bottom-width: 2px; border-bottom-style: solid; font-weight: 700; margin: 0; padding: 5px 0;"\r
                                                                        align="right" valign="top">$670.99\r
                                                                    </td>\r
                                                                </tr>\r
                                                            </table>\r
                                                        </td>\r
                                                    </tr>\r
                                                </table>\r
                                            </td>\r
                                        </tr>\r
                                        <tr\r
                                            style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                                            <td class="content-block aligncenter"\r
                                                style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: center; margin: 0; padding: 0 0 20px;"\r
                                                align="center" valign="top">\r
                                                Skote Inc. 2896 Howell Rd, Russellville, AR, 72823\r
                                            </td>\r
                                        </tr>\r
\r
                                        <tr\r
                                            style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                                            <td class="content-block"\r
                                                style="text-align: center;font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0;"\r
                                                valign="top">\r
                                                \xA9 {{year}} Skote\r
                                            </td>\r
                                        </tr>\r
                                    </table>\r
                                </td>\r
                            </tr>\r
                        </table>\r
                    </div>\r
                </td>\r
            </tr>\r
        </table>\r
        <!-- end table -->\r
    </div>\r
</div>\r
<!-- end row -->\r
</div>` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BillingComponent, { className: "BillingComponent", filePath: "src/app/pages/email/billing/billing.component.ts", lineNumber: 11 });
})();

// src/app/pages/email/alert/alert.component.ts
var AlertComponent = class _AlertComponent {
  constructor() {
    this.year = (/* @__PURE__ */ new Date()).getFullYear();
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Email Template" }, { label: "Alert Email", active: true }];
  }
  static {
    this.\u0275fac = function AlertComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AlertComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlertComponent, selectors: [["app-alert"]], decls: 45, vars: 2, consts: [[1, "container-fluid"], ["title", "Alert Email", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "body-wrap", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "width", "100%", "background-color", "transparent", "margin", "0"], [2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "margin", "0"], ["valign", "top", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "vertical-align", "top", "margin", "0"], ["width", "600", "valign", "top", 1, "container", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "vertical-align", "top", "display", "block !important", "max-width", "600px !important", "clear", "both !important", "margin", "0 auto"], [1, "content", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "max-width", "600px", "display", "block", "margin", "0 auto", "padding", "20px"], ["width", "100%", "cellpadding", "0", "cellspacing", "0", "bgcolor", "#fff", 1, "main", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "border-radius", "7px", "background-color", "#fff", "color", "#495057", "margin", "0", "box-shadow", "0 0.75rem 1.5rem rgba(18,38,63,.03)"], ["align", "center", "bgcolor", "#71b6f9", "valign", "top", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "16px", "vertical-align", "top", "color", "#fff", "font-weight", "500", "text-align", "center", "border-radius", "7px 7px 0 0", "background-color", "#556ee6", "margin", "0", "padding", "20px"], ["valign", "top", 1, "content-wrap", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "vertical-align", "top", "margin", "0", "padding", "20px"], ["width", "100%", "cellpadding", "0", "cellspacing", "0", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "margin", "0"], ["valign", "top", 1, "content-block", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "vertical-align", "top", "margin", "0", "padding", "0 0 20px"], [2, "background-color", "#f46a6a", "color", "#ffffff", "padding", "5px 8px", "font-size", "12px", "border-radius", "4px"], ["href", "javascript: void(0);", 2, "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "color", "#FFF", "text-decoration", "none", "line-height", "2em", "font-weight", "bold", "text-align", "center", "cursor", "pointer", "display", "inline-block", "border-radius", "5px", "text-transform", "capitalize", "background-color", "#34c38f", "margin", "0", "border-color", "#34c38f", "border-style", "solid", "border-width", "8px 16px"], ["valign", "top", 1, "content-block", 2, "text-align", "center", "font-family", "'Helvetica Neue',Helvetica,Arial,sans-serif", "box-sizing", "border-box", "font-size", "14px", "vertical-align", "top", "margin", "0", "padding", "0"]], template: function AlertComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "table", 4)(5, "tr", 5);
        \u0275\u0275element(6, "td", 6);
        \u0275\u0275elementStart(7, "td", 7)(8, "div", 8)(9, "table", 9)(10, "tr", 5)(11, "td", 10);
        \u0275\u0275text(12, " Warning: You're approaching your limit. Please upgrade. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "tr", 5)(14, "td", 11)(15, "table", 12)(16, "tr", 5)(17, "td", 13);
        \u0275\u0275text(18, " You have ");
        \u0275\u0275elementStart(19, "strong", 5)(20, "span", 14);
        \u0275\u0275text(21, "1 free report");
        \u0275\u0275elementEnd()();
        \u0275\u0275text(22, " remaining. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "tr", 5)(24, "td", 13);
        \u0275\u0275text(25, " Add your credit card now to upgrade your account to a premium plan to ensure you don't miss out on any reports. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "tr", 5)(27, "td", 13)(28, "a", 15);
        \u0275\u0275text(29, "Upgrade my account");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "tr", 5)(31, "td", 13);
        \u0275\u0275text(32, " Thanks for choosing ");
        \u0275\u0275elementStart(33, "b");
        \u0275\u0275text(34, "Skote");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, " Admin. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "tr", 5)(37, "td", 13)(38, "b");
        \u0275\u0275text(39, "Skote");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "p");
        \u0275\u0275text(41, "Support Team");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "tr", 5)(43, "td", 16);
        \u0275\u0275text(44);
        \u0275\u0275elementEnd()()()()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(43);
        \u0275\u0275textInterpolate1(" \xA9 ", ctx.year, " Skote ");
      }
    }, dependencies: [PagetitleComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertComponent, [{
    type: Component,
    args: [{ selector: "app-alert", imports: [PagetitleComponent], template: `<div class="container-fluid">\r
    <app-page-title title="Alert Email" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
<div class="row">\r
    <div class="col-12">\r
        <table class="body-wrap"\r
            style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: transparent; margin: 0;">\r
            <tr\r
                style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                <td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;"\r
                    valign="top"></td>\r
                <td class="container" width="600"\r
                    style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;"\r
                    valign="top">\r
                    <div class="content"\r
                        style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;">\r
                        <table class="main" width="100%" cellpadding="0" cellspacing="0"\r
                            style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 7px; background-color: #fff; color: #495057; margin: 0; box-shadow: 0 0.75rem 1.5rem rgba(18,38,63,.03);"\r
                            bgcolor="#fff">\r
                            <tr\r
                                style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                                <td\r
                                    style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 16px; vertical-align: top; color: #fff; font-weight: 500; text-align: center; border-radius: 7px 7px 0 0; background-color: #556ee6; margin: 0; padding: 20px;"\r
                                    align="center" bgcolor="#71b6f9" valign="top">\r
                                    Warning: You're approaching your limit. Please upgrade.\r
                                </td>\r
                            </tr>\r
                            <tr\r
                                style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                                <td class="content-wrap"\r
                                    style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 20px;"\r
                                    valign="top">\r
                                    <table width="100%" cellpadding="0" cellspacing="0"\r
                                        style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                                        <tr\r
                                            style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                                            <td class="content-block"\r
                                                style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;"\r
                                                valign="top">\r
                                                You have <strong\r
                                                    style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><span\r
                                                        style="background-color: #f46a6a;color: #ffffff;padding: 5px 8px; font-size: 12px; border-radius: 4px">1\r
                                                        free report</span></strong> remaining.\r
                                            </td>\r
                                        </tr>\r
                                        <tr\r
                                            style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                                            <td class="content-block"\r
                                                style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;"\r
                                                valign="top">\r
                                                Add your credit card now to upgrade your account to a premium plan to\r
                                                ensure you don't miss out on any reports.\r
                                            </td>\r
                                        </tr>\r
                                        <tr\r
                                            style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                                            <td class="content-block"\r
                                                style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;"\r
                                                valign="top">\r
                                                <a href="javascript: void(0);"\r
                                                    style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; color: #FFF; text-decoration: none; line-height: 2em; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; text-transform: capitalize; background-color: #34c38f; margin: 0; border-color: #34c38f; border-style: solid; border-width: 8px 16px;">Upgrade\r
                                                    my account</a>\r
                                            </td>\r
                                        </tr>\r
                                        <tr\r
                                            style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                                            <td class="content-block"\r
                                                style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;"\r
                                                valign="top">\r
                                                Thanks for choosing <b>Skote</b> Admin.\r
                                            </td>\r
                                        </tr>\r
                                        <tr\r
                                            style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                                            <td class="content-block"\r
                                                style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;"\r
                                                valign="top">\r
                                                <b>Skote</b>\r
                                                <p>Support Team</p>\r
                                            </td>\r
                                        </tr>\r
\r
                                        <tr\r
                                            style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">\r
                                            <td class="content-block"\r
                                                style="text-align: center;font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0;"\r
                                                valign="top">\r
                                                \xA9 {{year}} Skote\r
                                            </td>\r
                                        </tr>\r
                                    </table>\r
                                </td>\r
                            </tr>\r
                        </table>\r
                    </div>\r
                </td>\r
            </tr>\r
        </table>\r
        <!-- end table -->\r
    </div>\r
</div>\r
<!-- end row -->\r
</div>\r
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlertComponent, { className: "AlertComponent", filePath: "src/app/pages/email/alert/alert.component.ts", lineNumber: 11 });
})();

// src/app/pages/email/email-routing.module.ts
var routes = [
  {
    path: "inbox",
    component: InboxComponent
  },
  {
    path: "read/:id",
    component: EmailreadComponent
  },
  {
    path: "basic",
    component: BasicComponent
  },
  {
    path: "billing",
    component: BillingComponent
  },
  {
    path: "alert",
    component: AlertComponent
  }
];
var EmailRoutingModule = class _EmailRoutingModule {
  static {
    this.\u0275fac = function EmailRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmailRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EmailRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/pages/email/email.module.ts
var EmailModule = class _EmailModule {
  static {
    this.\u0275fac = function EmailModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmailModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EmailModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [EmailRoutingModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        EmailRoutingModule
      ]
    }]
  }], null, null);
})();

export {
  EmailModule
};
//# sourceMappingURL=chunk-RE6QPYDS.js.map
