import {
  OnChange
} from "./chunk-6IBDVRAS.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Injectable,
  Input,
  NgClass,
  NgIf,
  NgModule,
  Output,
  __decorate,
  __metadata,
  setClassMetadata,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-BM6E27KQ.js";

// node_modules/ngx-bootstrap/alert/fesm2022/ngx-bootstrap-alert.mjs
var _c0 = ["*"];
function AlertComponent_ng_template_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function AlertComponent_ng_template_0_ng_template_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "\xD7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 4);
    \u0275\u0275text(4, "Close");
    \u0275\u0275elementEnd()();
  }
}
function AlertComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, AlertComponent_ng_template_0_ng_template_1_Template, 5, 0, "ng-template", 0);
    \u0275\u0275projection(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap("alert alert-" + ctx_r1.type);
    \u0275\u0275property("ngClass", ctx_r1.classes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.dismissible);
  }
}
var AlertConfig = class _AlertConfig {
  constructor() {
    this.type = "warning";
    this.dismissible = false;
    this.dismissOnTimeout = void 0;
  }
  static {
    this.\u0275fac = function AlertConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AlertConfig)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _AlertConfig,
      factory: _AlertConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var AlertComponent = class _AlertComponent {
  constructor(_config, changeDetection) {
    this.changeDetection = changeDetection;
    this.type = "warning";
    this.dismissible = false;
    this.isOpen = true;
    this.onClose = new EventEmitter();
    this.onClosed = new EventEmitter();
    this.classes = "";
    this.dismissibleChange = new EventEmitter();
    Object.assign(this, _config);
    this.dismissibleChange.subscribe(() => {
      this.classes = this.dismissible ? "alert-dismissible" : "";
      this.changeDetection.markForCheck();
    });
  }
  ngOnInit() {
    if (this.dismissOnTimeout) {
      setTimeout(() => this.close(), parseInt(this.dismissOnTimeout, 10));
    }
  }
  // todo: animation ` If the .fade and .in classes are present on the element,
  // the alert will fade out before it is removed`
  /**
   * Closes an alert by removing it from the DOM.
   */
  close() {
    if (!this.isOpen) {
      return;
    }
    this.onClose.emit(this);
    this.isOpen = false;
    this.changeDetection.markForCheck();
    this.onClosed.emit(this);
  }
  static {
    this.\u0275fac = function AlertComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AlertComponent)(\u0275\u0275directiveInject(AlertConfig), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _AlertComponent,
      selectors: [["alert"], ["bs-alert"]],
      inputs: {
        type: "type",
        dismissible: "dismissible",
        dismissOnTimeout: "dismissOnTimeout",
        isOpen: "isOpen"
      },
      outputs: {
        onClose: "onClose",
        onClosed: "onClosed"
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 1,
      consts: [[3, "ngIf"], ["role", "alert", 3, "ngClass"], ["type", "button", "aria-label", "Close", 1, "close", "btn-close", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "sr-only", "visually-hidden"]],
      template: function AlertComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275template(0, AlertComponent_ng_template_0_Template, 3, 4, "ng-template", 0);
        }
        if (rf & 2) {
          \u0275\u0275property("ngIf", ctx.isOpen);
        }
      },
      dependencies: [NgIf, NgClass],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
__decorate([OnChange(), __metadata("design:type", Object)], AlertComponent.prototype, "dismissible", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertComponent, [{
    type: Component,
    args: [{
      selector: "alert,bs-alert",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [NgIf, NgClass],
      template: `<ng-template [ngIf]="isOpen">
  <div [class]="'alert alert-' + type" role="alert" [ngClass]="classes">
    <ng-template [ngIf]="dismissible">
      <button type="button" class="close btn-close" aria-label="Close" (click)="close()">
        <span aria-hidden="true" class="visually-hidden">&times;</span>
        <span class="sr-only visually-hidden">Close</span>
      </button>
    </ng-template>
    <ng-content></ng-content>
  </div>
</ng-template>
`
    }]
  }], () => [{
    type: AlertConfig
  }, {
    type: ChangeDetectorRef
  }], {
    type: [{
      type: Input
    }],
    dismissible: [{
      type: Input
    }],
    dismissOnTimeout: [{
      type: Input
    }],
    isOpen: [{
      type: Input
    }],
    onClose: [{
      type: Output
    }],
    onClosed: [{
      type: Output
    }]
  });
})();
var AlertModule = class _AlertModule {
  // @deprecated method not required anymore, will be deleted in v19.0.0
  static forRoot() {
    return {
      ngModule: _AlertModule,
      providers: []
    };
  }
  static {
    this.\u0275fac = function AlertModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AlertModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _AlertModule,
      imports: [AlertComponent],
      exports: [AlertComponent]
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertModule, [{
    type: NgModule,
    args: [{
      imports: [AlertComponent],
      exports: [AlertComponent]
    }]
  }], null, null);
})();

export {
  AlertComponent,
  AlertModule
};
//# sourceMappingURL=chunk-RPVCMMCJ.js.map
