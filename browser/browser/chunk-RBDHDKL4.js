import {
  PaginationComponent,
  PaginationModule
} from "./chunk-AMVJFW2N.js";
import {
  BsDropdownDirective,
  BsDropdownMenuDirective,
  BsDropdownModule,
  BsDropdownToggleDirective
} from "./chunk-MWIFUPBM.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-JVTCHJKU.js";
import {
  ComponentLoaderFactory,
  PositioningService
} from "./chunk-Z5ZJREKB.js";
import {
  PagetitleComponent
} from "./chunk-WW5M2ABB.js";
import {
  Utils
} from "./chunk-6IBDVRAS.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControl,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-ICQKGMTO.js";
import {
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DecimalPipe,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  HostListener,
  Injectable,
  Input,
  NgForOf,
  NgIf,
  NgModule,
  NgTemplateOutlet,
  Output,
  Renderer2,
  RouterModule,
  Subject,
  Subscription,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  debounceTime,
  delay,
  filter,
  from,
  isObservable,
  mergeMap,
  of,
  setClassMetadata,
  switchMap,
  tap,
  toArray,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-BM6E27KQ.js";

// node_modules/ngx-bootstrap/typeahead/fesm2022/ngx-bootstrap-typeahead.mjs
var _c0 = ["ulElement"];
var _c1 = ["liElements"];
var _c2 = (a0, a1, a2, a3) => ({
  matches: a0,
  itemTemplate: a1,
  query: a2,
  $implicit: a3
});
var _c3 = (a0, a1, a2, a3) => ({
  item: a0,
  index: a1,
  match: a2,
  query: a3
});
function TypeaheadContainerComponent_ng_template_0_Template(rf, ctx) {
}
function TypeaheadContainerComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const match_r1 = ctx.match;
    const query_r2 = ctx.query;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHtml", ctx_r2.highlight(match_r1, query_r2), \u0275\u0275sanitizeHtml);
  }
}
function TypeaheadContainerComponent_ng_template_3_ng_template_0_h6_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const match_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(match_r4);
  }
}
function TypeaheadContainerComponent_ng_template_3_ng_template_0_ng_template_1_ng_template_2_Template(rf, ctx) {
}
function TypeaheadContainerComponent_ng_template_3_ng_template_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9, 2);
    \u0275\u0275listener("click", function TypeaheadContainerComponent_ng_template_3_ng_template_0_ng_template_1_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const match_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectMatch(match_r4, $event));
    })("mouseenter", function TypeaheadContainerComponent_ng_template_3_ng_template_0_ng_template_1_Template_button_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r5);
      const match_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectActive(match_r4));
    });
    \u0275\u0275template(2, TypeaheadContainerComponent_ng_template_3_ng_template_0_ng_template_1_ng_template_2_Template, 0, 0, "ng-template", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    const match_r4 = ctx_r5.$implicit;
    const i_r7 = ctx_r5.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    const bsItemTemplate_r8 = \u0275\u0275reference(2);
    \u0275\u0275classProp("active", ctx_r2.isActive(match_r4));
    \u0275\u0275property("id", ctx_r2.popupId + "-" + i_r7)("@typeaheadAnimation", ctx_r2.animationState);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.itemTemplate || bsItemTemplate_r8)("ngTemplateOutletContext", \u0275\u0275pureFunction4(6, _c3, match_r4.item, i_r7, match_r4, ctx_r2.query));
  }
}
function TypeaheadContainerComponent_ng_template_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TypeaheadContainerComponent_ng_template_3_ng_template_0_h6_0_Template, 2, 1, "h6", 6)(1, TypeaheadContainerComponent_ng_template_3_ng_template_0_ng_template_1_Template, 3, 11, "ng-template", 7);
  }
  if (rf & 2) {
    const match_r4 = ctx.$implicit;
    \u0275\u0275property("ngIf", match_r4.isHeader());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !match_r4.isHeader());
  }
}
function TypeaheadContainerComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TypeaheadContainerComponent_ng_template_3_ng_template_0_Template, 2, 2, "ng-template", 5);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngForOf", ctx_r2.matches);
  }
}
var latinMap = {
  "\xC1": "A",
  "\u0102": "A",
  "\u1EAE": "A",
  "\u1EB6": "A",
  "\u1EB0": "A",
  "\u1EB2": "A",
  "\u1EB4": "A",
  "\u01CD": "A",
  "\xC2": "A",
  "\u1EA4": "A",
  "\u1EAC": "A",
  "\u1EA6": "A",
  "\u1EA8": "A",
  "\u1EAA": "A",
  "\xC4": "A",
  "\u01DE": "A",
  "\u0226": "A",
  "\u01E0": "A",
  "\u1EA0": "A",
  "\u0200": "A",
  "\xC0": "A",
  "\u1EA2": "A",
  "\u0202": "A",
  "\u0100": "A",
  "\u0104": "A",
  "\xC5": "A",
  "\u01FA": "A",
  "\u1E00": "A",
  "\u023A": "A",
  "\xC3": "A",
  "\uA732": "AA",
  "\xC6": "AE",
  "\u01FC": "AE",
  "\u01E2": "AE",
  "\uA734": "AO",
  "\uA736": "AU",
  "\uA738": "AV",
  "\uA73A": "AV",
  "\uA73C": "AY",
  "\u1E02": "B",
  "\u1E04": "B",
  "\u0181": "B",
  "\u1E06": "B",
  "\u0243": "B",
  "\u0182": "B",
  "\u0106": "C",
  "\u010C": "C",
  "\xC7": "C",
  "\u1E08": "C",
  "\u0108": "C",
  "\u010A": "C",
  "\u0187": "C",
  "\u023B": "C",
  "\u010E": "D",
  "\u1E10": "D",
  "\u1E12": "D",
  "\u1E0A": "D",
  "\u1E0C": "D",
  "\u018A": "D",
  "\u1E0E": "D",
  "\u01F2": "D",
  "\u01C5": "D",
  "\u0110": "D",
  "\u018B": "D",
  "\u01F1": "DZ",
  "\u01C4": "DZ",
  "\xC9": "E",
  "\u0114": "E",
  "\u011A": "E",
  "\u0228": "E",
  "\u1E1C": "E",
  "\xCA": "E",
  "\u1EBE": "E",
  "\u1EC6": "E",
  "\u1EC0": "E",
  "\u1EC2": "E",
  "\u1EC4": "E",
  "\u1E18": "E",
  "\xCB": "E",
  "\u0116": "E",
  "\u1EB8": "E",
  "\u0204": "E",
  "\xC8": "E",
  "\u1EBA": "E",
  "\u0206": "E",
  "\u0112": "E",
  "\u1E16": "E",
  "\u1E14": "E",
  "\u0118": "E",
  "\u0246": "E",
  "\u1EBC": "E",
  "\u1E1A": "E",
  "\uA76A": "ET",
  "\u1E1E": "F",
  "\u0191": "F",
  "\u01F4": "G",
  "\u011E": "G",
  "\u01E6": "G",
  "\u0122": "G",
  "\u011C": "G",
  "\u0120": "G",
  "\u0193": "G",
  "\u1E20": "G",
  "\u01E4": "G",
  "\u1E2A": "H",
  "\u021E": "H",
  "\u1E28": "H",
  "\u0124": "H",
  "\u2C67": "H",
  "\u1E26": "H",
  "\u1E22": "H",
  "\u1E24": "H",
  "\u0126": "H",
  "\xCD": "I",
  "\u012C": "I",
  "\u01CF": "I",
  "\xCE": "I",
  "\xCF": "I",
  "\u1E2E": "I",
  "\u0130": "I",
  "\u1ECA": "I",
  "\u0208": "I",
  "\xCC": "I",
  "\u1EC8": "I",
  "\u020A": "I",
  "\u012A": "I",
  "\u012E": "I",
  "\u0197": "I",
  "\u0128": "I",
  "\u1E2C": "I",
  "\uA779": "D",
  "\uA77B": "F",
  "\uA77D": "G",
  "\uA782": "R",
  "\uA784": "S",
  "\uA786": "T",
  "\uA76C": "IS",
  "\u0134": "J",
  "\u0248": "J",
  "\u1E30": "K",
  "\u01E8": "K",
  "\u0136": "K",
  "\u2C69": "K",
  "\uA742": "K",
  "\u1E32": "K",
  "\u0198": "K",
  "\u1E34": "K",
  "\uA740": "K",
  "\uA744": "K",
  "\u0139": "L",
  "\u023D": "L",
  "\u013D": "L",
  "\u013B": "L",
  "\u1E3C": "L",
  "\u1E36": "L",
  "\u1E38": "L",
  "\u2C60": "L",
  "\uA748": "L",
  "\u1E3A": "L",
  "\u013F": "L",
  "\u2C62": "L",
  "\u01C8": "L",
  "\u0141": "L",
  "\u01C7": "LJ",
  "\u1E3E": "M",
  "\u1E40": "M",
  "\u1E42": "M",
  "\u2C6E": "M",
  "\u0143": "N",
  "\u0147": "N",
  "\u0145": "N",
  "\u1E4A": "N",
  "\u1E44": "N",
  "\u1E46": "N",
  "\u01F8": "N",
  "\u019D": "N",
  "\u1E48": "N",
  "\u0220": "N",
  "\u01CB": "N",
  "\xD1": "N",
  "\u01CA": "NJ",
  "\xD3": "O",
  "\u014E": "O",
  "\u01D1": "O",
  "\xD4": "O",
  "\u1ED0": "O",
  "\u1ED8": "O",
  "\u1ED2": "O",
  "\u1ED4": "O",
  "\u1ED6": "O",
  "\xD6": "O",
  "\u022A": "O",
  "\u022E": "O",
  "\u0230": "O",
  "\u1ECC": "O",
  "\u0150": "O",
  "\u020C": "O",
  "\xD2": "O",
  "\u1ECE": "O",
  "\u01A0": "O",
  "\u1EDA": "O",
  "\u1EE2": "O",
  "\u1EDC": "O",
  "\u1EDE": "O",
  "\u1EE0": "O",
  "\u020E": "O",
  "\uA74A": "O",
  "\uA74C": "O",
  "\u014C": "O",
  "\u1E52": "O",
  "\u1E50": "O",
  "\u019F": "O",
  "\u01EA": "O",
  "\u01EC": "O",
  "\xD8": "O",
  "\u01FE": "O",
  "\xD5": "O",
  "\u1E4C": "O",
  "\u1E4E": "O",
  "\u022C": "O",
  "\u01A2": "OI",
  "\uA74E": "OO",
  "\u0190": "E",
  "\u0186": "O",
  "\u0222": "OU",
  "\u1E54": "P",
  "\u1E56": "P",
  "\uA752": "P",
  "\u01A4": "P",
  "\uA754": "P",
  "\u2C63": "P",
  "\uA750": "P",
  "\uA758": "Q",
  "\uA756": "Q",
  "\u0154": "R",
  "\u0158": "R",
  "\u0156": "R",
  "\u1E58": "R",
  "\u1E5A": "R",
  "\u1E5C": "R",
  "\u0210": "R",
  "\u0212": "R",
  "\u1E5E": "R",
  "\u024C": "R",
  "\u2C64": "R",
  "\uA73E": "C",
  "\u018E": "E",
  "\u015A": "S",
  "\u1E64": "S",
  "\u0160": "S",
  "\u1E66": "S",
  "\u015E": "S",
  "\u015C": "S",
  "\u0218": "S",
  "\u1E60": "S",
  "\u1E62": "S",
  "\u1E68": "S",
  "\u0164": "T",
  "\u0162": "T",
  "\u1E70": "T",
  "\u021A": "T",
  "\u023E": "T",
  "\u1E6A": "T",
  "\u1E6C": "T",
  "\u01AC": "T",
  "\u1E6E": "T",
  "\u01AE": "T",
  "\u0166": "T",
  "\u2C6F": "A",
  "\uA780": "L",
  "\u019C": "M",
  "\u0245": "V",
  "\uA728": "TZ",
  "\xDA": "U",
  "\u016C": "U",
  "\u01D3": "U",
  "\xDB": "U",
  "\u1E76": "U",
  "\xDC": "U",
  "\u01D7": "U",
  "\u01D9": "U",
  "\u01DB": "U",
  "\u01D5": "U",
  "\u1E72": "U",
  "\u1EE4": "U",
  "\u0170": "U",
  "\u0214": "U",
  "\xD9": "U",
  "\u1EE6": "U",
  "\u01AF": "U",
  "\u1EE8": "U",
  "\u1EF0": "U",
  "\u1EEA": "U",
  "\u1EEC": "U",
  "\u1EEE": "U",
  "\u0216": "U",
  "\u016A": "U",
  "\u1E7A": "U",
  "\u0172": "U",
  "\u016E": "U",
  "\u0168": "U",
  "\u1E78": "U",
  "\u1E74": "U",
  "\uA75E": "V",
  "\u1E7E": "V",
  "\u01B2": "V",
  "\u1E7C": "V",
  "\uA760": "VY",
  "\u1E82": "W",
  "\u0174": "W",
  "\u1E84": "W",
  "\u1E86": "W",
  "\u1E88": "W",
  "\u1E80": "W",
  "\u2C72": "W",
  "\u1E8C": "X",
  "\u1E8A": "X",
  "\xDD": "Y",
  "\u0176": "Y",
  "\u0178": "Y",
  "\u1E8E": "Y",
  "\u1EF4": "Y",
  "\u1EF2": "Y",
  "\u01B3": "Y",
  "\u1EF6": "Y",
  "\u1EFE": "Y",
  "\u0232": "Y",
  "\u024E": "Y",
  "\u1EF8": "Y",
  "\u0179": "Z",
  "\u017D": "Z",
  "\u1E90": "Z",
  "\u2C6B": "Z",
  "\u017B": "Z",
  "\u1E92": "Z",
  "\u0224": "Z",
  "\u1E94": "Z",
  "\u01B5": "Z",
  "\u0132": "IJ",
  "\u0152": "OE",
  "\u1D00": "A",
  "\u1D01": "AE",
  "\u0299": "B",
  "\u1D03": "B",
  "\u1D04": "C",
  "\u1D05": "D",
  "\u1D07": "E",
  "\uA730": "F",
  "\u0262": "G",
  "\u029B": "G",
  "\u029C": "H",
  "\u026A": "I",
  "\u0281": "R",
  "\u1D0A": "J",
  "\u1D0B": "K",
  "\u029F": "L",
  "\u1D0C": "L",
  "\u1D0D": "M",
  "\u0274": "N",
  "\u1D0F": "O",
  "\u0276": "OE",
  "\u1D10": "O",
  "\u1D15": "OU",
  "\u1D18": "P",
  "\u0280": "R",
  "\u1D0E": "N",
  "\u1D19": "R",
  "\uA731": "S",
  "\u1D1B": "T",
  "\u2C7B": "E",
  "\u1D1A": "R",
  "\u1D1C": "U",
  "\u1D20": "V",
  "\u1D21": "W",
  "\u028F": "Y",
  "\u1D22": "Z",
  "\xE1": "a",
  "\u0103": "a",
  "\u1EAF": "a",
  "\u1EB7": "a",
  "\u1EB1": "a",
  "\u1EB3": "a",
  "\u1EB5": "a",
  "\u01CE": "a",
  "\xE2": "a",
  "\u1EA5": "a",
  "\u1EAD": "a",
  "\u1EA7": "a",
  "\u1EA9": "a",
  "\u1EAB": "a",
  "\xE4": "a",
  "\u01DF": "a",
  "\u0227": "a",
  "\u01E1": "a",
  "\u1EA1": "a",
  "\u0201": "a",
  "\xE0": "a",
  "\u1EA3": "a",
  "\u0203": "a",
  "\u0101": "a",
  "\u0105": "a",
  "\u1D8F": "a",
  "\u1E9A": "a",
  "\xE5": "a",
  "\u01FB": "a",
  "\u1E01": "a",
  "\u2C65": "a",
  "\xE3": "a",
  "\uA733": "aa",
  "\xE6": "ae",
  "\u01FD": "ae",
  "\u01E3": "ae",
  "\uA735": "ao",
  "\uA737": "au",
  "\uA739": "av",
  "\uA73B": "av",
  "\uA73D": "ay",
  "\u1E03": "b",
  "\u1E05": "b",
  "\u0253": "b",
  "\u1E07": "b",
  "\u1D6C": "b",
  "\u1D80": "b",
  "\u0180": "b",
  "\u0183": "b",
  "\u0275": "o",
  "\u0107": "c",
  "\u010D": "c",
  "\xE7": "c",
  "\u1E09": "c",
  "\u0109": "c",
  "\u0255": "c",
  "\u010B": "c",
  "\u0188": "c",
  "\u023C": "c",
  "\u010F": "d",
  "\u1E11": "d",
  "\u1E13": "d",
  "\u0221": "d",
  "\u1E0B": "d",
  "\u1E0D": "d",
  "\u0257": "d",
  "\u1D91": "d",
  "\u1E0F": "d",
  "\u1D6D": "d",
  "\u1D81": "d",
  "\u0111": "d",
  "\u0256": "d",
  "\u018C": "d",
  "\u0131": "i",
  "\u0237": "j",
  "\u025F": "j",
  "\u0284": "j",
  "\u01F3": "dz",
  "\u01C6": "dz",
  "\xE9": "e",
  "\u0115": "e",
  "\u011B": "e",
  "\u0229": "e",
  "\u1E1D": "e",
  "\xEA": "e",
  "\u1EBF": "e",
  "\u1EC7": "e",
  "\u1EC1": "e",
  "\u1EC3": "e",
  "\u1EC5": "e",
  "\u1E19": "e",
  "\xEB": "e",
  "\u0117": "e",
  "\u1EB9": "e",
  "\u0205": "e",
  "\xE8": "e",
  "\u1EBB": "e",
  "\u0207": "e",
  "\u0113": "e",
  "\u1E17": "e",
  "\u1E15": "e",
  "\u2C78": "e",
  "\u0119": "e",
  "\u1D92": "e",
  "\u0247": "e",
  "\u1EBD": "e",
  "\u1E1B": "e",
  "\uA76B": "et",
  "\u1E1F": "f",
  "\u0192": "f",
  "\u1D6E": "f",
  "\u1D82": "f",
  "\u01F5": "g",
  "\u011F": "g",
  "\u01E7": "g",
  "\u0123": "g",
  "\u011D": "g",
  "\u0121": "g",
  "\u0260": "g",
  "\u1E21": "g",
  "\u1D83": "g",
  "\u01E5": "g",
  "\u1E2B": "h",
  "\u021F": "h",
  "\u1E29": "h",
  "\u0125": "h",
  "\u2C68": "h",
  "\u1E27": "h",
  "\u1E23": "h",
  "\u1E25": "h",
  "\u0266": "h",
  "\u1E96": "h",
  "\u0127": "h",
  "\u0195": "hv",
  "\xED": "i",
  "\u012D": "i",
  "\u01D0": "i",
  "\xEE": "i",
  "\xEF": "i",
  "\u1E2F": "i",
  "\u1ECB": "i",
  "\u0209": "i",
  "\xEC": "i",
  "\u1EC9": "i",
  "\u020B": "i",
  "\u012B": "i",
  "\u012F": "i",
  "\u1D96": "i",
  "\u0268": "i",
  "\u0129": "i",
  "\u1E2D": "i",
  "\uA77A": "d",
  "\uA77C": "f",
  "\u1D79": "g",
  "\uA783": "r",
  "\uA785": "s",
  "\uA787": "t",
  "\uA76D": "is",
  "\u01F0": "j",
  "\u0135": "j",
  "\u029D": "j",
  "\u0249": "j",
  "\u1E31": "k",
  "\u01E9": "k",
  "\u0137": "k",
  "\u2C6A": "k",
  "\uA743": "k",
  "\u1E33": "k",
  "\u0199": "k",
  "\u1E35": "k",
  "\u1D84": "k",
  "\uA741": "k",
  "\uA745": "k",
  "\u013A": "l",
  "\u019A": "l",
  "\u026C": "l",
  "\u013E": "l",
  "\u013C": "l",
  "\u1E3D": "l",
  "\u0234": "l",
  "\u1E37": "l",
  "\u1E39": "l",
  "\u2C61": "l",
  "\uA749": "l",
  "\u1E3B": "l",
  "\u0140": "l",
  "\u026B": "l",
  "\u1D85": "l",
  "\u026D": "l",
  "\u0142": "l",
  "\u01C9": "lj",
  "\u017F": "s",
  "\u1E9C": "s",
  "\u1E9B": "s",
  "\u1E9D": "s",
  "\u1E3F": "m",
  "\u1E41": "m",
  "\u1E43": "m",
  "\u0271": "m",
  "\u1D6F": "m",
  "\u1D86": "m",
  "\u0144": "n",
  "\u0148": "n",
  "\u0146": "n",
  "\u1E4B": "n",
  "\u0235": "n",
  "\u1E45": "n",
  "\u1E47": "n",
  "\u01F9": "n",
  "\u0272": "n",
  "\u1E49": "n",
  "\u019E": "n",
  "\u1D70": "n",
  "\u1D87": "n",
  "\u0273": "n",
  "\xF1": "n",
  "\u01CC": "nj",
  "\xF3": "o",
  "\u014F": "o",
  "\u01D2": "o",
  "\xF4": "o",
  "\u1ED1": "o",
  "\u1ED9": "o",
  "\u1ED3": "o",
  "\u1ED5": "o",
  "\u1ED7": "o",
  "\xF6": "o",
  "\u022B": "o",
  "\u022F": "o",
  "\u0231": "o",
  "\u1ECD": "o",
  "\u0151": "o",
  "\u020D": "o",
  "\xF2": "o",
  "\u1ECF": "o",
  "\u01A1": "o",
  "\u1EDB": "o",
  "\u1EE3": "o",
  "\u1EDD": "o",
  "\u1EDF": "o",
  "\u1EE1": "o",
  "\u020F": "o",
  "\uA74B": "o",
  "\uA74D": "o",
  "\u2C7A": "o",
  "\u014D": "o",
  "\u1E53": "o",
  "\u1E51": "o",
  "\u01EB": "o",
  "\u01ED": "o",
  "\xF8": "o",
  "\u01FF": "o",
  "\xF5": "o",
  "\u1E4D": "o",
  "\u1E4F": "o",
  "\u022D": "o",
  "\u01A3": "oi",
  "\uA74F": "oo",
  "\u025B": "e",
  "\u1D93": "e",
  "\u0254": "o",
  "\u1D97": "o",
  "\u0223": "ou",
  "\u1E55": "p",
  "\u1E57": "p",
  "\uA753": "p",
  "\u01A5": "p",
  "\u1D71": "p",
  "\u1D88": "p",
  "\uA755": "p",
  "\u1D7D": "p",
  "\uA751": "p",
  "\uA759": "q",
  "\u02A0": "q",
  "\u024B": "q",
  "\uA757": "q",
  "\u0155": "r",
  "\u0159": "r",
  "\u0157": "r",
  "\u1E59": "r",
  "\u1E5B": "r",
  "\u1E5D": "r",
  "\u0211": "r",
  "\u027E": "r",
  "\u1D73": "r",
  "\u0213": "r",
  "\u1E5F": "r",
  "\u027C": "r",
  "\u1D72": "r",
  "\u1D89": "r",
  "\u024D": "r",
  "\u027D": "r",
  "\u2184": "c",
  "\uA73F": "c",
  "\u0258": "e",
  "\u027F": "r",
  "\u015B": "s",
  "\u1E65": "s",
  "\u0161": "s",
  "\u1E67": "s",
  "\u015F": "s",
  "\u015D": "s",
  "\u0219": "s",
  "\u1E61": "s",
  "\u1E63": "s",
  "\u1E69": "s",
  "\u0282": "s",
  "\u1D74": "s",
  "\u1D8A": "s",
  "\u023F": "s",
  "\u0261": "g",
  "\u1D11": "o",
  "\u1D13": "o",
  "\u1D1D": "u",
  "\u0165": "t",
  "\u0163": "t",
  "\u1E71": "t",
  "\u021B": "t",
  "\u0236": "t",
  "\u1E97": "t",
  "\u2C66": "t",
  "\u1E6B": "t",
  "\u1E6D": "t",
  "\u01AD": "t",
  "\u1E6F": "t",
  "\u1D75": "t",
  "\u01AB": "t",
  "\u0288": "t",
  "\u0167": "t",
  "\u1D7A": "th",
  "\u0250": "a",
  "\u1D02": "ae",
  "\u01DD": "e",
  "\u1D77": "g",
  "\u0265": "h",
  "\u02AE": "h",
  "\u02AF": "h",
  "\u1D09": "i",
  "\u029E": "k",
  "\uA781": "l",
  "\u026F": "m",
  "\u0270": "m",
  "\u1D14": "oe",
  "\u0279": "r",
  "\u027B": "r",
  "\u027A": "r",
  "\u2C79": "r",
  "\u0287": "t",
  "\u028C": "v",
  "\u028D": "w",
  "\u028E": "y",
  "\uA729": "tz",
  "\xFA": "u",
  "\u016D": "u",
  "\u01D4": "u",
  "\xFB": "u",
  "\u1E77": "u",
  "\xFC": "u",
  "\u01D8": "u",
  "\u01DA": "u",
  "\u01DC": "u",
  "\u01D6": "u",
  "\u1E73": "u",
  "\u1EE5": "u",
  "\u0171": "u",
  "\u0215": "u",
  "\xF9": "u",
  "\u1EE7": "u",
  "\u01B0": "u",
  "\u1EE9": "u",
  "\u1EF1": "u",
  "\u1EEB": "u",
  "\u1EED": "u",
  "\u1EEF": "u",
  "\u0217": "u",
  "\u016B": "u",
  "\u1E7B": "u",
  "\u0173": "u",
  "\u1D99": "u",
  "\u016F": "u",
  "\u0169": "u",
  "\u1E79": "u",
  "\u1E75": "u",
  "\u1D6B": "ue",
  "\uA778": "um",
  "\u2C74": "v",
  "\uA75F": "v",
  "\u1E7F": "v",
  "\u028B": "v",
  "\u1D8C": "v",
  "\u2C71": "v",
  "\u1E7D": "v",
  "\uA761": "vy",
  "\u1E83": "w",
  "\u0175": "w",
  "\u1E85": "w",
  "\u1E87": "w",
  "\u1E89": "w",
  "\u1E81": "w",
  "\u2C73": "w",
  "\u1E98": "w",
  "\u1E8D": "x",
  "\u1E8B": "x",
  "\u1D8D": "x",
  "\xFD": "y",
  "\u0177": "y",
  "\xFF": "y",
  "\u1E8F": "y",
  "\u1EF5": "y",
  "\u1EF3": "y",
  "\u01B4": "y",
  "\u1EF7": "y",
  "\u1EFF": "y",
  "\u0233": "y",
  "\u1E99": "y",
  "\u024F": "y",
  "\u1EF9": "y",
  "\u017A": "z",
  "\u017E": "z",
  "\u1E91": "z",
  "\u0291": "z",
  "\u2C6C": "z",
  "\u017C": "z",
  "\u1E93": "z",
  "\u0225": "z",
  "\u1E95": "z",
  "\u1D76": "z",
  "\u1D8E": "z",
  "\u0290": "z",
  "\u01B6": "z",
  "\u0240": "z",
  "\uFB00": "ff",
  "\uFB03": "ffi",
  "\uFB04": "ffl",
  "\uFB01": "fi",
  "\uFB02": "fl",
  "\u0133": "ij",
  "\u0153": "oe",
  "\uFB06": "st",
  "\u2090": "a",
  "\u2091": "e",
  "\u1D62": "i",
  "\u2C7C": "j",
  "\u2092": "o",
  "\u1D63": "r",
  "\u1D64": "u",
  "\u1D65": "v",
  "\u2093": "x"
};
var TypeaheadMatch = class {
  constructor(item, value = item, header = false) {
    this.item = item;
    this.value = value;
    this.header = header;
  }
  isHeader() {
    return this.header;
  }
  toString() {
    return this.value;
  }
};
function latinize(str) {
  if (!str) {
    return "";
  }
  return str.replace(/[^A-Za-z0-9[\] ]/g, function(a) {
    return latinMap[a] || a;
  });
}
function tokenize(str, wordRegexDelimiters = " ", phraseRegexDelimiters = "", delimitersForMultipleSearch) {
  let result = [];
  if (!delimitersForMultipleSearch) {
    result = tokenizeWordsAndPhrases(str, wordRegexDelimiters, phraseRegexDelimiters);
  } else {
    const multipleSearchRegexStr = `([${delimitersForMultipleSearch}]+)`;
    const delimitedTokens = str.split(new RegExp(multipleSearchRegexStr, "g"));
    const lastToken = delimitedTokens[delimitedTokens.length - 1];
    if (lastToken > "") {
      if (wordRegexDelimiters && phraseRegexDelimiters) {
        result = tokenizeWordsAndPhrases(lastToken, wordRegexDelimiters, phraseRegexDelimiters);
      } else {
        result.push(lastToken);
      }
    }
  }
  return result;
}
function tokenizeWordsAndPhrases(str, wordRegexDelimiters, phraseRegexDelimiters) {
  const result = [];
  const regexStr = `(?:[${phraseRegexDelimiters}])([^${phraseRegexDelimiters}]+)(?:[${phraseRegexDelimiters}])|([^${wordRegexDelimiters}]+)`;
  const preTokenized = str.split(new RegExp(regexStr, "g"));
  const preTokenizedLength = preTokenized.length;
  let token;
  const replacePhraseDelimiters = new RegExp(`[${phraseRegexDelimiters}]+`, "g");
  for (let i = 0; i < preTokenizedLength; i += 1) {
    token = preTokenized[i];
    if (token && token.length && token !== wordRegexDelimiters) {
      result.push(token.replace(replacePhraseDelimiters, ""));
    }
  }
  return result;
}
function getValueFromObject(object, option) {
  if (!option || typeof object !== "object") {
    return object.toString();
  }
  if (option.endsWith("()")) {
    const functionName = option.slice(0, option.length - 2);
    return object[functionName]().toString();
  }
  const properties = option.replace(/\[(\w+)\]/g, ".$1").replace(/^\./, "");
  const propertiesArray = properties.split(".");
  for (const property of propertiesArray) {
    if (property in object) {
      object = object[property];
    }
  }
  if (!object) {
    return "";
  }
  return object.toString();
}
var TYPEAHEAD_ANIMATION_TIMING = "220ms cubic-bezier(0, 0, 0.2, 1)";
var typeaheadAnimation = trigger("typeaheadAnimation", [state("animated-down", style({
  height: "*",
  overflow: "hidden"
})), transition("* => animated-down", [style({
  height: 0,
  overflow: "hidden"
}), animate(TYPEAHEAD_ANIMATION_TIMING)]), state("animated-up", style({
  height: "*",
  overflow: "hidden"
})), transition("* => animated-up", [style({
  height: "*",
  overflow: "hidden"
}), animate(TYPEAHEAD_ANIMATION_TIMING)]), transition("* => unanimated", animate("0s"))]);
var nextWindowId = 0;
var TypeaheadContainerComponent = class _TypeaheadContainerComponent {
  get typeaheadTemplateMethods() {
    return {
      selectMatch: this.selectMatch.bind(this),
      selectActive: this.selectActive.bind(this),
      isActive: this.isActive.bind(this)
    };
  }
  constructor(positionService, renderer, element, changeDetectorRef) {
    this.positionService = positionService;
    this.renderer = renderer;
    this.element = element;
    this.changeDetectorRef = changeDetectorRef;
    this.activeChangeEvent = new EventEmitter();
    this.isFocused = false;
    this.positionServiceSubscription = new Subscription();
    this.height = 0;
    this.popupId = `ngb-typeahead-${nextWindowId++}`;
    this._matches = [];
    this.renderer.setAttribute(this.element.nativeElement, "id", this.popupId);
    this.positionServiceSubscription.add(this.positionService.event$?.subscribe(() => {
      if (this.isAnimated) {
        this.animationState = this.isTopPosition ? "animated-up" : "animated-down";
        this.changeDetectorRef.detectChanges();
        return;
      }
      this.animationState = "unanimated";
      this.changeDetectorRef.detectChanges();
    }));
  }
  get active() {
    return this._active;
  }
  set active(active) {
    this._active = active;
    this.activeChanged();
  }
  get matches() {
    return this._matches;
  }
  set matches(value) {
    this.positionService.setOptions({
      modifiers: {
        flip: {
          enabled: this.adaptivePosition
        }
      },
      allowedPositions: ["top", "bottom"]
    });
    this._matches = value;
    this.needScrollbar = this.typeaheadScrollable && this.typeaheadOptionsInScrollableView < this.matches.length;
    if (this.typeaheadScrollable) {
      setTimeout(() => {
        this.setScrollableMode();
      });
    }
    if (this.typeaheadIsFirstItemActive && this._matches.length > 0) {
      this.setActive(this._matches[0]);
      if (this._active?.isHeader()) {
        this.nextActiveMatch();
      }
    }
    if (this._active && !this.typeaheadIsFirstItemActive) {
      const concurrency = this._matches.find((match) => match.value === this._active?.value);
      if (concurrency) {
        this.selectActive(concurrency);
        return;
      }
      this.active = void 0;
    }
  }
  get isTopPosition() {
    return this.element.nativeElement.classList.contains("top");
  }
  get optionsListTemplate() {
    return this.parent ? this.parent.optionsListTemplate : void 0;
  }
  get isAnimated() {
    return this.parent ? this.parent.isAnimated : false;
  }
  get adaptivePosition() {
    return this.parent ? this.parent.adaptivePosition : false;
  }
  get typeaheadScrollable() {
    return this.parent ? this.parent.typeaheadScrollable : false;
  }
  get typeaheadOptionsInScrollableView() {
    return this.parent ? this.parent.typeaheadOptionsInScrollableView : 5;
  }
  get typeaheadIsFirstItemActive() {
    return this.parent ? this.parent.typeaheadIsFirstItemActive : true;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get itemTemplate() {
    return this.parent ? this.parent.typeaheadItemTemplate : void 0;
  }
  get canSelectItemsOnBlur() {
    return !!this.parent?.selectItemOnBlur;
  }
  selectActiveMatch(isActiveItemChanged) {
    if (this._active && this.parent?.typeaheadSelectFirstItem) {
      this.selectMatch(this._active);
    }
    if (!this.parent?.typeaheadSelectFirstItem && isActiveItemChanged) {
      this.selectMatch(this._active);
    }
  }
  activeChanged() {
    if (!this._active) {
      return;
    }
    const index = this.matches.indexOf(this._active);
    this.activeChangeEvent.emit(`${this.popupId}-${index}`);
  }
  prevActiveMatch() {
    if (!this._active) {
      return;
    }
    const index = this.matches.indexOf(this._active);
    this.setActive(this.matches[index - 1 < 0 ? this.matches.length - 1 : index - 1]);
    if (this._active.isHeader()) {
      this.prevActiveMatch();
    }
    if (this.typeaheadScrollable) {
      this.scrollPrevious(index);
    }
  }
  nextActiveMatch() {
    const index = this._active ? this.matches.indexOf(this._active) : -1;
    this.setActive(this.matches[index + 1 > this.matches.length - 1 ? 0 : index + 1]);
    if (this._active?.isHeader()) {
      this.nextActiveMatch();
    }
    if (this.typeaheadScrollable) {
      this.scrollNext(index);
    }
  }
  selectActive(value) {
    this.isFocused = true;
    this.setActive(value);
  }
  highlight(match, query) {
    let itemStr = match.value;
    let itemStrHelper = (this.parent && this.parent.typeaheadLatinize ? latinize(itemStr) : itemStr).toLowerCase();
    let startIdx;
    let tokenLen;
    if (typeof query === "object") {
      const queryLen = query.length;
      const PLACEHOLDER_CHAR = "\u2063";
      const STRONG_PLACEHOLDER_COUNT = 17;
      for (let i = 0; i < queryLen; i += 1) {
        startIdx = itemStrHelper.indexOf(query[i]);
        tokenLen = query[i].length;
        if (startIdx >= 0 && tokenLen > 0) {
          itemStr = `${itemStr.substring(0, startIdx)}<strong>${itemStr.substring(startIdx, startIdx + tokenLen)}</strong>${itemStr.substring(startIdx + tokenLen)}`;
          itemStrHelper = `${itemStrHelper.substring(0, startIdx)}${PLACEHOLDER_CHAR.repeat(STRONG_PLACEHOLDER_COUNT + tokenLen)}${itemStrHelper.substring(startIdx + tokenLen)}`;
        }
      }
    } else if (query) {
      startIdx = itemStrHelper.indexOf(query);
      tokenLen = query.length;
      if (startIdx >= 0 && tokenLen > 0) {
        itemStr = `${itemStr.substring(0, startIdx)}<strong>${itemStr.substring(startIdx, startIdx + tokenLen)}</strong>${itemStr.substring(startIdx + tokenLen)}`;
      }
    }
    return itemStr;
  }
  focusLost() {
    this.isFocused = false;
    if (!this.canSelectItemsOnBlur) {
      this.setActive(void 0);
    }
  }
  isActive(value) {
    return this.active === value;
  }
  selectMatch(value, event) {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    this.parent?.changeModel(value);
    setTimeout(() => this.parent?.typeaheadOnSelect.emit(value), 0);
    return false;
  }
  setScrollableMode() {
    if (!this.ulElement) {
      this.ulElement = this.element;
    }
    if (this.liElements?.first) {
      const ulStyles = Utils.getStyles(this.ulElement.nativeElement);
      const liStyles = Utils.getStyles(this.liElements.first.nativeElement);
      const ulPaddingBottom = parseFloat((ulStyles["padding-bottom"] ? ulStyles["padding-bottom"] : "").replace("px", ""));
      const ulPaddingTop = parseFloat((ulStyles["padding-top"] ? ulStyles["padding-top"] : "0").replace("px", ""));
      const optionHeight = parseFloat((liStyles.height ? liStyles.height : "0").replace("px", ""));
      const height = this.typeaheadOptionsInScrollableView * optionHeight;
      this.guiHeight = `${height + ulPaddingTop + ulPaddingBottom}px`;
    }
    this.renderer.setStyle(this.element.nativeElement, "visibility", "visible");
  }
  scrollPrevious(index) {
    if (index === 0) {
      this.scrollToBottom();
      return;
    }
    if (this.liElements && this.ulElement) {
      const liElement = this.liElements.toArray()[index - 1];
      if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
        this.ulElement.nativeElement.scrollTop = liElement.nativeElement.offsetTop;
      }
    }
  }
  scrollNext(index) {
    if (index + 1 > this.matches.length - 1) {
      this.scrollToTop();
      return;
    }
    if (this.liElements && this.ulElement) {
      const liElement = this.liElements.toArray()[index + 1];
      if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
        this.ulElement.nativeElement.scrollTop = liElement.nativeElement.offsetTop - Number(this.ulElement.nativeElement.offsetHeight) + Number(liElement.nativeElement.offsetHeight);
      }
    }
  }
  ngOnDestroy() {
    this.positionServiceSubscription.unsubscribe();
  }
  setActive(value) {
    this._active = value;
    let preview;
    if (!(this._active == null || this._active.isHeader())) {
      preview = value;
    }
    this.parent?.typeaheadOnPreview.emit(preview);
  }
  isScrolledIntoView(elem) {
    if (!this.ulElement) {
      return false;
    }
    const containerViewTop = this.ulElement.nativeElement.scrollTop;
    const containerViewBottom = containerViewTop + Number(this.ulElement.nativeElement.offsetHeight);
    const elemTop = elem.offsetTop;
    const elemBottom = elemTop + elem.offsetHeight;
    return elemBottom <= containerViewBottom && elemTop >= containerViewTop;
  }
  scrollToBottom() {
    if (!this.ulElement?.nativeElement) {
      return;
    }
    this.ulElement.nativeElement.scrollTop = this.ulElement.nativeElement.scrollHeight;
  }
  scrollToTop() {
    if (!this.ulElement?.nativeElement) {
      return;
    }
    this.ulElement.nativeElement.scrollTop = 0;
  }
  static {
    this.\u0275fac = function TypeaheadContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TypeaheadContainerComponent)(\u0275\u0275directiveInject(PositioningService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _TypeaheadContainerComponent,
      selectors: [["typeahead-container"]],
      viewQuery: function TypeaheadContainerComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c0, 5);
          \u0275\u0275viewQuery(_c1, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.ulElement = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.liElements = _t);
        }
      },
      hostAttrs: [1, "dropdown", "open", "bottom", "dropdown-menu", 2, "position", "absolute", "display", "block"],
      hostVars: 7,
      hostBindings: function TypeaheadContainerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("mouseleave", function TypeaheadContainerComponent_mouseleave_HostBindingHandler() {
            return ctx.focusLost();
          })("blur", function TypeaheadContainerComponent_blur_HostBindingHandler() {
            return ctx.focusLost();
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("role", "listbox");
          \u0275\u0275styleProp("height", ctx.needScrollbar ? ctx.guiHeight : "auto")("visibility", "inherit");
          \u0275\u0275classProp("dropup", ctx.dropup);
        }
      },
      outputs: {
        activeChangeEvent: "activeChange"
      },
      features: [\u0275\u0275ProvidersFeature([PositioningService])],
      decls: 5,
      vars: 7,
      consts: [["bsItemTemplate", ""], ["bs4Template", ""], ["liElements", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHtml"], ["ngFor", "", 3, "ngForOf"], ["class", "dropdown-header", 4, "ngIf"], [3, "ngIf"], [1, "dropdown-header"], ["role", "option", 1, "dropdown-item", 3, "click", "mouseenter", "id"]],
      template: function TypeaheadContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275template(0, TypeaheadContainerComponent_ng_template_0_Template, 0, 0, "ng-template", 3)(1, TypeaheadContainerComponent_ng_template_1_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, TypeaheadContainerComponent_ng_template_3_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        }
        if (rf & 2) {
          const bsItemTemplate_r8 = \u0275\u0275reference(2);
          const bs4Template_r9 = \u0275\u0275reference(4);
          \u0275\u0275property("ngTemplateOutlet", ctx.optionsListTemplate || bs4Template_r9)("ngTemplateOutletContext", \u0275\u0275pureFunction4(2, _c2, ctx.matches, ctx.itemTemplate || bsItemTemplate_r8, ctx.query, ctx.typeaheadTemplateMethods));
        }
      },
      dependencies: [NgTemplateOutlet, NgForOf, NgIf],
      styles: [".dropdown[_nghost-%COMP%]{z-index:1000}.dropdown-menu[_nghost-%COMP%], .dropdown-menu[_ngcontent-%COMP%]{overflow-y:auto;height:100px}"],
      data: {
        animation: [typeaheadAnimation]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TypeaheadContainerComponent, [{
    type: Component,
    args: [{
      selector: "typeahead-container",
      host: {
        class: "dropdown open bottom dropdown-menu",
        "[style.height]": `needScrollbar ? guiHeight: 'auto'`,
        "[style.visibility]": `'inherit'`,
        "[class.dropup]": "dropup",
        style: "position: absolute;display: block;",
        "[attr.role]": `'listbox'`
      },
      animations: [typeaheadAnimation],
      standalone: true,
      imports: [NgTemplateOutlet, NgForOf, NgIf],
      providers: [PositioningService],
      template: `<!-- inject options list template -->
<ng-template [ngTemplateOutlet]="optionsListTemplate || bs4Template"
             [ngTemplateOutletContext]="{
               matches: matches,
               itemTemplate: itemTemplate || bsItemTemplate,
               query: query,
               $implicit: typeaheadTemplateMethods
             }">
</ng-template>

<!-- default options item template -->
<ng-template #bsItemTemplate let-match="match" let-query="query">
  <span [innerHtml]="highlight(match, query)"></span>
</ng-template>

<!-- Bootstrap 4 options list template -->
<ng-template #bs4Template>
  <ng-template ngFor let-match let-i="index" [ngForOf]="matches">
    <h6 *ngIf="match.isHeader()" class="dropdown-header">{{ match }}</h6>
    <ng-template [ngIf]="!match.isHeader()">
      <button #liElements
              [id]="popupId + '-' + i"
              role="option"
              [@typeaheadAnimation]="animationState"
              class="dropdown-item"
              (click)="selectMatch(match, $event)"
              (mouseenter)="selectActive(match)"
              [class.active]="isActive(match)">
        <ng-template [ngTemplateOutlet]="itemTemplate || bsItemTemplate"
                     [ngTemplateOutletContext]="{item: match.item, index: i, match: match, query: query}">
        </ng-template>
      </button>
    </ng-template>
  </ng-template>
</ng-template>
`,
      styles: [":host.dropdown{z-index:1000}:host.dropdown-menu,.dropdown-menu{overflow-y:auto;height:100px}\n"]
    }]
  }], () => [{
    type: PositioningService
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], {
    activeChangeEvent: [{
      type: Output,
      args: ["activeChange"]
    }],
    ulElement: [{
      type: ViewChild,
      args: ["ulElement", {
        static: false
      }]
    }],
    liElements: [{
      type: ViewChildren,
      args: ["liElements"]
    }],
    focusLost: [{
      type: HostListener,
      args: ["mouseleave"]
    }, {
      type: HostListener,
      args: ["blur"]
    }]
  });
})();
var TypeaheadConfig = class _TypeaheadConfig {
  constructor() {
    this.adaptivePosition = false;
    this.isAnimated = false;
    this.hideResultsOnBlur = true;
    this.cancelRequestOnFocusLost = false;
    this.selectFirstItem = true;
    this.isFirstItemActive = true;
    this.minLength = 1;
    this.selectItemOnBlur = false;
  }
  static {
    this.\u0275fac = function TypeaheadConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TypeaheadConfig)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _TypeaheadConfig,
      factory: _TypeaheadConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TypeaheadConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TypeaheadDirective = class _TypeaheadDirective {
  constructor(cis, config, changeDetection, element, ngControl, renderer, viewContainerRef) {
    this.changeDetection = changeDetection;
    this.element = element;
    this.ngControl = ngControl;
    this.renderer = renderer;
    this.typeaheadMinLength = 1;
    this.adaptivePosition = false;
    this.isAnimated = false;
    this.typeaheadWaitMs = 0;
    this.typeaheadLatinize = true;
    this.typeaheadSingleWords = true;
    this.typeaheadWordDelimiters = " ";
    this.typeaheadMultipleSearchDelimiters = ",";
    this.typeaheadPhraseDelimiters = `'"`;
    this.typeaheadScrollable = false;
    this.typeaheadOptionsInScrollableView = 5;
    this.typeaheadSelectFirstItem = true;
    this.typeaheadIsFirstItemActive = true;
    this.typeaheadLoading = new EventEmitter();
    this.typeaheadNoResults = new EventEmitter();
    this.typeaheadOnSelect = new EventEmitter();
    this.typeaheadOnPreview = new EventEmitter();
    this.typeaheadOnBlur = new EventEmitter();
    this.dropup = false;
    this.isOpen = false;
    this.list = "list";
    this.isActiveItemChanged = false;
    this.isFocused = false;
    this.cancelRequestOnFocusLost = false;
    this.selectItemOnBlur = false;
    this.keyUpEventEmitter = new EventEmitter();
    this.placement = "bottom left";
    this._matches = [];
    this._subscriptions = [];
    this._outsideClickListener = () => void 0;
    this._typeahead = cis.createLoader(element, viewContainerRef, renderer).provide({
      provide: TypeaheadConfig,
      useValue: config
    });
    Object.assign(this, {
      typeaheadHideResultsOnBlur: config.hideResultsOnBlur,
      cancelRequestOnFocusLost: config.cancelRequestOnFocusLost,
      typeaheadSelectFirstItem: config.selectFirstItem,
      typeaheadIsFirstItemActive: config.isFirstItemActive,
      typeaheadMinLength: config.minLength,
      adaptivePosition: config.adaptivePosition,
      isAnimated: config.isAnimated,
      selectItemOnBlur: config.selectItemOnBlur
    });
  }
  get matches() {
    return this._matches;
  }
  ngOnInit() {
    this.typeaheadOptionsLimit = this.typeaheadOptionsLimit || 20;
    this.typeaheadMinLength = this.typeaheadMinLength === void 0 ? 1 : this.typeaheadMinLength;
    if (this.typeaheadAsync === void 0 && !isObservable(this.typeahead)) {
      this.typeaheadAsync = false;
    }
    if (isObservable(this.typeahead)) {
      this.typeaheadAsync = true;
    }
    if (this.typeaheadAsync) {
      this.asyncActions();
    } else {
      this.syncActions();
    }
    this.checkDelimitersConflict();
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onInput(e) {
    const value = e.target.value !== void 0 ? e.target.value : e.target.textContent !== void 0 ? e.target.textContent : e.target.innerText;
    if (value != null && value.trim().length >= this.typeaheadMinLength) {
      this.typeaheadLoading.emit(true);
      this.keyUpEventEmitter.emit(e.target.value);
    } else {
      this.typeaheadLoading.emit(false);
      this.typeaheadNoResults.emit(false);
      this.hide();
    }
  }
  onChange(event) {
    if (this._container) {
      if (event.keyCode === 27 || event.key === "Escape") {
        this.hide();
        return;
      }
      if (event.keyCode === 38 || event.key === "ArrowUp") {
        this.isActiveItemChanged = true;
        this._container.prevActiveMatch();
        return;
      }
      if (event.keyCode === 40 || event.key === "ArrowDown") {
        this.isActiveItemChanged = true;
        this._container.nextActiveMatch();
        return;
      }
      if (event.keyCode === 13 || event.key === "Enter") {
        this._container.selectActiveMatch();
        return;
      }
    }
  }
  onFocus() {
    this.isFocused = true;
    setTimeout(() => {
      if (this.typeaheadMinLength === 0) {
        this.typeaheadLoading.emit(true);
        this.keyUpEventEmitter.emit(this.element.nativeElement.value || "");
      }
    }, 0);
  }
  onBlur() {
    this.isFocused = false;
    if (this._container && !this._container.isFocused) {
      this.typeaheadOnBlur.emit(this._container.active);
    }
    if (!this.container && this._matches?.length === 0) {
      this.typeaheadOnBlur.emit(new TypeaheadMatch(this.element.nativeElement.value, this.element.nativeElement.value, false));
    }
  }
  onKeydown(event) {
    if (!this._container) {
      return;
    }
    if (event.keyCode === 9 || event.key === "Tab") {
      this.onBlur();
    }
    if (event.keyCode === 9 || event.key === "Tab" || event.keyCode === 13 || event.key === "Enter") {
      event.preventDefault();
      if (this.typeaheadSelectFirstItem) {
        this._container.selectActiveMatch();
        return;
      }
      if (!this.typeaheadSelectFirstItem) {
        this._container.selectActiveMatch(this.isActiveItemChanged);
        this.isActiveItemChanged = false;
        this.hide();
      }
    }
  }
  changeModel(match) {
    if (!match) {
      return;
    }
    let valueStr;
    if (this.typeaheadMultipleSearch && this._allEnteredValue) {
      const tokens = this._allEnteredValue.split(new RegExp(`([${this.typeaheadMultipleSearchDelimiters}]+)`));
      this._allEnteredValue = tokens.slice(0, tokens.length - 1).concat(match.value).join("");
      valueStr = this._allEnteredValue;
    } else {
      valueStr = match.value;
    }
    this.ngControl.viewToModelUpdate(valueStr);
    this.ngControl.control?.setValue(valueStr);
    this.changeDetection.markForCheck();
    this.hide();
  }
  show() {
    this._typeahead.attach(TypeaheadContainerComponent).to(this.container).position({
      attachment: `${this.dropup ? "top" : "bottom"} left`
    }).show({
      typeaheadRef: this,
      placement: this.placement,
      animation: false,
      dropup: this.dropup
    });
    this._outsideClickListener = this.renderer.listen("document", "click", (event) => {
      if (this.typeaheadMinLength === 0 && this.element.nativeElement.contains(event.target)) {
        return;
      }
      if (!this.typeaheadHideResultsOnBlur || this.element.nativeElement.contains(event.target)) {
        return;
      }
      this.onOutsideClick();
    });
    if (!this._typeahead.instance || !this.ngControl.control) {
      return;
    }
    this._container = this._typeahead.instance;
    this._container.parent = this;
    const normalizedQuery = (this.typeaheadLatinize ? latinize(this.ngControl.control.value) : this.ngControl.control.value).toString().toLowerCase();
    this._container.query = this.tokenizeQuery(normalizedQuery);
    this._container.matches = this._matches;
    this.element.nativeElement.focus();
    this._container.activeChangeEvent.subscribe((activeId) => {
      this.activeDescendant = activeId;
      this.changeDetection.markForCheck();
    });
    this.isOpen = true;
  }
  hide() {
    if (this._typeahead.isShown) {
      this._typeahead.hide();
      this._outsideClickListener();
      this._container = void 0;
      this.isOpen = false;
      this.changeDetection.markForCheck();
    }
    this.typeaheadOnPreview.emit();
  }
  onOutsideClick() {
    if (this._container && !this._container.isFocused) {
      this.hide();
    }
  }
  ngOnDestroy() {
    for (const sub of this._subscriptions) {
      sub.unsubscribe();
    }
    this._typeahead.dispose();
  }
  asyncActions() {
    this._subscriptions.push(this.keyUpEventEmitter.pipe(debounceTime(this.typeaheadWaitMs), tap((value) => this._allEnteredValue = value), switchMap(() => {
      if (!this.typeahead) {
        return EMPTY;
      }
      return this.typeahead;
    })).subscribe((matches2) => {
      this.finalizeAsyncCall(matches2);
    }));
  }
  syncActions() {
    this._subscriptions.push(this.keyUpEventEmitter.pipe(debounceTime(this.typeaheadWaitMs), mergeMap((value) => {
      this._allEnteredValue = value;
      const normalizedQuery = this.normalizeQuery(value);
      if (!this.typeahead) {
        return EMPTY;
      }
      const typeahead = isObservable(this.typeahead) ? this.typeahead : from(this.typeahead);
      return typeahead.pipe(filter((option) => {
        return !!option && this.testMatch(this.normalizeOption(option), normalizedQuery);
      }), toArray());
    })).subscribe((matches2) => {
      this.finalizeAsyncCall(matches2);
    }));
  }
  normalizeOption(option) {
    const optionValue = getValueFromObject(option, this.typeaheadOptionField);
    const normalizedOption = this.typeaheadLatinize ? latinize(optionValue) : optionValue;
    return normalizedOption.toLowerCase();
  }
  tokenizeQuery(currentQuery) {
    let query = currentQuery;
    if (this.typeaheadMultipleSearch && this.typeaheadSingleWords) {
      if (!this.haveCommonCharacters(`${this.typeaheadPhraseDelimiters}${this.typeaheadWordDelimiters}`, this.typeaheadMultipleSearchDelimiters)) {
        query = tokenize(query, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters, this.typeaheadMultipleSearchDelimiters);
      }
    } else if (this.typeaheadSingleWords) {
      query = tokenize(query, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters);
    } else {
      query = tokenize(query, void 0, void 0, this.typeaheadMultipleSearchDelimiters);
    }
    return query;
  }
  normalizeQuery(value) {
    let normalizedQuery = (this.typeaheadLatinize ? latinize(value) : value).toString().toLowerCase();
    normalizedQuery = this.tokenizeQuery(normalizedQuery);
    return normalizedQuery;
  }
  testMatch(match, test) {
    let spaceLength;
    if (typeof test === "object") {
      spaceLength = test.length;
      for (let i = 0; i < spaceLength; i += 1) {
        if (test[i].length > 0 && match.indexOf(test[i]) < 0) {
          return false;
        }
      }
      return true;
    }
    return match.indexOf(test) >= 0;
  }
  finalizeAsyncCall(matches2) {
    this.prepareMatches(matches2 || []);
    this.typeaheadLoading.emit(false);
    this.typeaheadNoResults.emit(!this.hasMatches());
    if (!this.hasMatches()) {
      this.hide();
      return;
    }
    if (!this.isFocused && this.cancelRequestOnFocusLost) {
      return;
    }
    if (this._container && this.ngControl.control) {
      const _controlValue = (this.typeaheadLatinize ? latinize(this.ngControl.control.value) : this.ngControl.control.value) || "";
      const normalizedQuery = _controlValue.toString().toLowerCase();
      this._container.query = this.tokenizeQuery(normalizedQuery);
      this._container.matches = this._matches;
    } else {
      this.show();
    }
  }
  prepareMatches(options) {
    const limited = options.slice(0, this.typeaheadOptionsLimit);
    const sorted = !this.typeaheadOrderBy ? limited : this.orderMatches(limited);
    if (this.typeaheadGroupField) {
      let matches2 = [];
      const groups = sorted.map((option) => getValueFromObject(option, this.typeaheadGroupField)).filter((v, i, a) => a.indexOf(v) === i);
      groups.forEach((group) => {
        matches2.push(new TypeaheadMatch(group, group, true));
        matches2 = matches2.concat(sorted.filter((option) => getValueFromObject(option, this.typeaheadGroupField) === group).map((option) => new TypeaheadMatch(option, getValueFromObject(option, this.typeaheadOptionField))));
      });
      this._matches = matches2;
    } else {
      this._matches = sorted.map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (option) => new TypeaheadMatch(option, getValueFromObject(option, this.typeaheadOptionField))
      );
    }
  }
  orderMatches(options) {
    if (!options.length) {
      return options;
    }
    if (this.typeaheadOrderBy !== null && this.typeaheadOrderBy !== void 0 && typeof this.typeaheadOrderBy === "object" && Object.keys(this.typeaheadOrderBy).length === 0) {
      console.error("Field and direction properties for typeaheadOrderBy have to be set according to documentation!");
      return options;
    }
    const {
      field,
      direction
    } = this.typeaheadOrderBy || {};
    if (!direction || !(direction === "asc" || direction === "desc")) {
      console.error('typeaheadOrderBy direction has to equal "asc" or "desc". Please follow the documentation.');
      return options;
    }
    if (typeof options[0] === "string") {
      return direction === "asc" ? options.sort() : options.sort().reverse();
    }
    if (!field || typeof field !== "string") {
      console.error("typeaheadOrderBy field has to set according to the documentation.");
      return options;
    }
    return options.sort((a, b) => {
      const stringA = getValueFromObject(a, field);
      const stringB = getValueFromObject(b, field);
      if (stringA < stringB) {
        return direction === "asc" ? -1 : 1;
      }
      if (stringA > stringB) {
        return direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  }
  hasMatches() {
    return this._matches.length > 0;
  }
  checkDelimitersConflict() {
    if (this.typeaheadMultipleSearch && this.typeaheadSingleWords && this.haveCommonCharacters(`${this.typeaheadPhraseDelimiters}${this.typeaheadWordDelimiters}`, this.typeaheadMultipleSearchDelimiters)) {
      throw new Error(`Delimiters used in typeaheadMultipleSearchDelimiters must be different
          from delimiters used in typeaheadWordDelimiters (current value: ${this.typeaheadWordDelimiters}) and
          typeaheadPhraseDelimiters (current value: ${this.typeaheadPhraseDelimiters}).
          Please refer to the documentation`);
    }
  }
  haveCommonCharacters(str1, str2) {
    for (let i = 0; i < str1.length; i++) {
      if (str1.charAt(i).indexOf(str2) > -1) {
        return true;
      }
    }
    return false;
  }
  static {
    this.\u0275fac = function TypeaheadDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TypeaheadDirective)(\u0275\u0275directiveInject(ComponentLoaderFactory), \u0275\u0275directiveInject(TypeaheadConfig), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgControl), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ViewContainerRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _TypeaheadDirective,
      selectors: [["", "typeahead", ""]],
      hostVars: 4,
      hostBindings: function TypeaheadDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("input", function TypeaheadDirective_input_HostBindingHandler($event) {
            return ctx.onInput($event);
          })("keyup", function TypeaheadDirective_keyup_HostBindingHandler($event) {
            return ctx.onChange($event);
          })("click", function TypeaheadDirective_click_HostBindingHandler() {
            return ctx.onFocus();
          })("focus", function TypeaheadDirective_focus_HostBindingHandler() {
            return ctx.onFocus();
          })("blur", function TypeaheadDirective_blur_HostBindingHandler() {
            return ctx.onBlur();
          })("keydown", function TypeaheadDirective_keydown_HostBindingHandler($event) {
            return ctx.onKeydown($event);
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("aria-activedescendant", ctx.activeDescendant)("aria-owns", ctx.isOpen ? ctx._container.popupId : null)("aria-expanded", ctx.isOpen)("aria-autocomplete", ctx.list);
        }
      },
      inputs: {
        typeahead: "typeahead",
        typeaheadMinLength: "typeaheadMinLength",
        adaptivePosition: "adaptivePosition",
        isAnimated: "isAnimated",
        typeaheadWaitMs: "typeaheadWaitMs",
        typeaheadOptionsLimit: "typeaheadOptionsLimit",
        typeaheadOptionField: "typeaheadOptionField",
        typeaheadGroupField: "typeaheadGroupField",
        typeaheadOrderBy: "typeaheadOrderBy",
        typeaheadAsync: "typeaheadAsync",
        typeaheadLatinize: "typeaheadLatinize",
        typeaheadSingleWords: "typeaheadSingleWords",
        typeaheadWordDelimiters: "typeaheadWordDelimiters",
        typeaheadMultipleSearch: "typeaheadMultipleSearch",
        typeaheadMultipleSearchDelimiters: "typeaheadMultipleSearchDelimiters",
        typeaheadPhraseDelimiters: "typeaheadPhraseDelimiters",
        typeaheadItemTemplate: "typeaheadItemTemplate",
        optionsListTemplate: "optionsListTemplate",
        typeaheadScrollable: "typeaheadScrollable",
        typeaheadOptionsInScrollableView: "typeaheadOptionsInScrollableView",
        typeaheadHideResultsOnBlur: "typeaheadHideResultsOnBlur",
        typeaheadSelectFirstItem: "typeaheadSelectFirstItem",
        typeaheadIsFirstItemActive: "typeaheadIsFirstItemActive",
        container: "container",
        dropup: "dropup"
      },
      outputs: {
        typeaheadLoading: "typeaheadLoading",
        typeaheadNoResults: "typeaheadNoResults",
        typeaheadOnSelect: "typeaheadOnSelect",
        typeaheadOnPreview: "typeaheadOnPreview",
        typeaheadOnBlur: "typeaheadOnBlur"
      },
      exportAs: ["bs-typeahead"],
      features: [\u0275\u0275ProvidersFeature([ComponentLoaderFactory, PositioningService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TypeaheadDirective, [{
    type: Directive,
    args: [{
      selector: "[typeahead]",
      exportAs: "bs-typeahead",
      host: {
        "[attr.aria-activedescendant]": "activeDescendant",
        "[attr.aria-owns]": "isOpen ? this._container.popupId : null",
        "[attr.aria-expanded]": "isOpen",
        "[attr.aria-autocomplete]": "list"
      },
      standalone: true,
      providers: [ComponentLoaderFactory, PositioningService]
    }]
  }], () => [{
    type: ComponentLoaderFactory
  }, {
    type: TypeaheadConfig
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgControl
  }, {
    type: Renderer2
  }, {
    type: ViewContainerRef
  }], {
    typeahead: [{
      type: Input
    }],
    typeaheadMinLength: [{
      type: Input
    }],
    adaptivePosition: [{
      type: Input
    }],
    isAnimated: [{
      type: Input
    }],
    typeaheadWaitMs: [{
      type: Input
    }],
    typeaheadOptionsLimit: [{
      type: Input
    }],
    typeaheadOptionField: [{
      type: Input
    }],
    typeaheadGroupField: [{
      type: Input
    }],
    typeaheadOrderBy: [{
      type: Input
    }],
    typeaheadAsync: [{
      type: Input
    }],
    typeaheadLatinize: [{
      type: Input
    }],
    typeaheadSingleWords: [{
      type: Input
    }],
    typeaheadWordDelimiters: [{
      type: Input
    }],
    typeaheadMultipleSearch: [{
      type: Input
    }],
    typeaheadMultipleSearchDelimiters: [{
      type: Input
    }],
    typeaheadPhraseDelimiters: [{
      type: Input
    }],
    typeaheadItemTemplate: [{
      type: Input
    }],
    optionsListTemplate: [{
      type: Input
    }],
    typeaheadScrollable: [{
      type: Input
    }],
    typeaheadOptionsInScrollableView: [{
      type: Input
    }],
    typeaheadHideResultsOnBlur: [{
      type: Input
    }],
    typeaheadSelectFirstItem: [{
      type: Input
    }],
    typeaheadIsFirstItemActive: [{
      type: Input
    }],
    typeaheadLoading: [{
      type: Output
    }],
    typeaheadNoResults: [{
      type: Output
    }],
    typeaheadOnSelect: [{
      type: Output
    }],
    typeaheadOnPreview: [{
      type: Output
    }],
    typeaheadOnBlur: [{
      type: Output
    }],
    container: [{
      type: Input
    }],
    dropup: [{
      type: Input
    }],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }],
    onChange: [{
      type: HostListener,
      args: ["keyup", ["$event"]]
    }],
    onFocus: [{
      type: HostListener,
      args: ["click"]
    }, {
      type: HostListener,
      args: ["focus"]
    }],
    onBlur: [{
      type: HostListener,
      args: ["blur"]
    }],
    onKeydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var TypeaheadModule = class _TypeaheadModule {
  // @deprecated method not required anymore, will be deleted in v19.0.0
  static forRoot() {
    return {
      ngModule: _TypeaheadModule,
      providers: []
    };
  }
  static {
    this.\u0275fac = function TypeaheadModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TypeaheadModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _TypeaheadModule,
      imports: [CommonModule, TypeaheadContainerComponent, TypeaheadDirective],
      exports: [TypeaheadContainerComponent, TypeaheadDirective]
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TypeaheadModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TypeaheadContainerComponent, TypeaheadDirective],
      exports: [TypeaheadContainerComponent, TypeaheadDirective]
    }]
  }], null, null);
})();

// src/app/pages/tables/basic/basic.component.ts
var BasicComponent = class _BasicComponent {
  constructor() {
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Tables" }, { label: "Basic Tables", active: true }];
  }
  static {
    this.\u0275fac = function BasicComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BasicComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BasicComponent, selectors: [["app-basic"]], decls: 629, vars: 1, consts: [[1, "container-fluid"], ["title", "Basic Tables", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-title-desc"], [1, "table-responsive"], [1, "table", "mb-0"], [1, "thead-dark"], ["scope", "row"], [1, "table", "table-dark", "mb-0"], [1, "table-light"], [1, "table", "table-striped", "mb-0"], [1, "table", "table-bordered", "mb-0"], [1, "table", "table-borderless", "mb-0"], [1, "table", "table-hover", "mb-0"], [1, "table", "table-sm", "m-0"], [1, "table-success"], [1, "table-info"], [1, "table-warning"], [1, "table-danger"], [1, "col-lg-12"]], template: function BasicComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
        \u0275\u0275text(7, "Basic example");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 7);
        \u0275\u0275text(9, "For basic styling\u2014light padding and only horizontal dividers\u2014add the base class ");
        \u0275\u0275elementStart(10, "code");
        \u0275\u0275text(11, ".table");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " to any ");
        \u0275\u0275elementStart(13, "code");
        \u0275\u0275text(14, "<table>");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, ". ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 8)(17, "table", 9)(18, "thead", 10)(19, "tr")(20, "th");
        \u0275\u0275text(21, "#");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "th");
        \u0275\u0275text(23, "First Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "th");
        \u0275\u0275text(25, "Last Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "th");
        \u0275\u0275text(27, "Username");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "tbody")(29, "tr")(30, "th", 11);
        \u0275\u0275text(31, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "td");
        \u0275\u0275text(33, "Mark");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "td");
        \u0275\u0275text(35, "Otto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "td");
        \u0275\u0275text(37, "@mdo");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "tr")(39, "th", 11);
        \u0275\u0275text(40, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "td");
        \u0275\u0275text(42, "Jacob");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "td");
        \u0275\u0275text(44, "Thornton");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "td");
        \u0275\u0275text(46, "@fat");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "tr")(48, "th", 11);
        \u0275\u0275text(49, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "td");
        \u0275\u0275text(51, "Larry");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "td");
        \u0275\u0275text(53, "the Bird");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "td");
        \u0275\u0275text(55, "@twitter");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(56, "div", 3)(57, "div", 4)(58, "div", 5)(59, "h4", 6);
        \u0275\u0275text(60, "Dark table");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "p", 7);
        \u0275\u0275text(62, "You can also invert the colors\u2014with light text on dark backgrounds\u2014with ");
        \u0275\u0275elementStart(63, "code");
        \u0275\u0275text(64, ".table-dark");
        \u0275\u0275elementEnd();
        \u0275\u0275text(65, ". ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "div", 8)(67, "table", 12)(68, "thead")(69, "tr")(70, "th");
        \u0275\u0275text(71, "#");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "th");
        \u0275\u0275text(73, "First Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "th");
        \u0275\u0275text(75, "Last Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "th");
        \u0275\u0275text(77, "Username");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(78, "tbody")(79, "tr")(80, "th", 11);
        \u0275\u0275text(81, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "td");
        \u0275\u0275text(83, "Mark");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "td");
        \u0275\u0275text(85, "Otto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "td");
        \u0275\u0275text(87, "@mdo");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(88, "tr")(89, "th", 11);
        \u0275\u0275text(90, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "td");
        \u0275\u0275text(92, "Jacob");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "td");
        \u0275\u0275text(94, "Thornton");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "td");
        \u0275\u0275text(96, "@fat");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(97, "tr")(98, "th", 11);
        \u0275\u0275text(99, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "td");
        \u0275\u0275text(101, "Larry");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "td");
        \u0275\u0275text(103, "the Bird");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "td");
        \u0275\u0275text(105, "@twitter");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(106, "div", 2)(107, "div", 3)(108, "div", 4)(109, "div", 5)(110, "h4", 6);
        \u0275\u0275text(111, "Table head");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "p", 7);
        \u0275\u0275text(113, "Use one of two modifier classes to make ");
        \u0275\u0275elementStart(114, "code");
        \u0275\u0275text(115, "<thead>");
        \u0275\u0275elementEnd();
        \u0275\u0275text(116, "s appear light or dark gray.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "div", 8)(118, "table", 9)(119, "thead", 13)(120, "tr")(121, "th");
        \u0275\u0275text(122, "#");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "th");
        \u0275\u0275text(124, "First Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "th");
        \u0275\u0275text(126, "Last Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "th");
        \u0275\u0275text(128, "Username");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(129, "tbody")(130, "tr")(131, "th", 11);
        \u0275\u0275text(132, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "td");
        \u0275\u0275text(134, "Mark");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "td");
        \u0275\u0275text(136, "Otto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "td");
        \u0275\u0275text(138, "@mdo");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(139, "tr")(140, "th", 11);
        \u0275\u0275text(141, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "td");
        \u0275\u0275text(143, "Jacob");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "td");
        \u0275\u0275text(145, "Thornton");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "td");
        \u0275\u0275text(147, "@fat");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(148, "tr")(149, "th", 11);
        \u0275\u0275text(150, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(151, "td");
        \u0275\u0275text(152, "Larry");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "td");
        \u0275\u0275text(154, "the Bird");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(155, "td");
        \u0275\u0275text(156, "@twitter");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(157, "div", 3)(158, "div", 4)(159, "div", 5)(160, "h4", 6);
        \u0275\u0275text(161, "Striped rows");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "p", 7);
        \u0275\u0275text(163, "Use ");
        \u0275\u0275elementStart(164, "code");
        \u0275\u0275text(165, ".table-striped");
        \u0275\u0275elementEnd();
        \u0275\u0275text(166, " to add zebra-striping to any table row within the ");
        \u0275\u0275elementStart(167, "code");
        \u0275\u0275text(168, "<tbody>");
        \u0275\u0275elementEnd();
        \u0275\u0275text(169, ".");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(170, "div", 8)(171, "table", 14)(172, "thead")(173, "tr")(174, "th");
        \u0275\u0275text(175, "#");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(176, "th");
        \u0275\u0275text(177, "First Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "th");
        \u0275\u0275text(179, "Last Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(180, "th");
        \u0275\u0275text(181, "Username");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(182, "tbody")(183, "tr")(184, "th", 11);
        \u0275\u0275text(185, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(186, "td");
        \u0275\u0275text(187, "Mark");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(188, "td");
        \u0275\u0275text(189, "Otto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(190, "td");
        \u0275\u0275text(191, "@mdo");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(192, "tr")(193, "th", 11);
        \u0275\u0275text(194, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(195, "td");
        \u0275\u0275text(196, "Jacob");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(197, "td");
        \u0275\u0275text(198, "Thornton");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(199, "td");
        \u0275\u0275text(200, "@fat");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(201, "tr")(202, "th", 11);
        \u0275\u0275text(203, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(204, "td");
        \u0275\u0275text(205, "Larry");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(206, "td");
        \u0275\u0275text(207, "the Bird");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(208, "td");
        \u0275\u0275text(209, "@twitter");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(210, "div", 2)(211, "div", 3)(212, "div", 4)(213, "div", 5)(214, "h4", 6);
        \u0275\u0275text(215, "Bordered table");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(216, "p", 7);
        \u0275\u0275text(217, "Add ");
        \u0275\u0275elementStart(218, "code");
        \u0275\u0275text(219, ".table-bordered");
        \u0275\u0275elementEnd();
        \u0275\u0275text(220, " for borders on all sides of the table and cells. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(221, "div", 8)(222, "table", 15)(223, "thead")(224, "tr")(225, "th");
        \u0275\u0275text(226, "#");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(227, "th");
        \u0275\u0275text(228, "First Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(229, "th");
        \u0275\u0275text(230, "Last Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(231, "th");
        \u0275\u0275text(232, "Username");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(233, "tbody")(234, "tr")(235, "th", 11);
        \u0275\u0275text(236, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(237, "td");
        \u0275\u0275text(238, "Mark");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(239, "td");
        \u0275\u0275text(240, "Otto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(241, "td");
        \u0275\u0275text(242, "@mdo");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(243, "tr")(244, "th", 11);
        \u0275\u0275text(245, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(246, "td");
        \u0275\u0275text(247, "Jacob");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(248, "td");
        \u0275\u0275text(249, "Thornton");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(250, "td");
        \u0275\u0275text(251, "@fat");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(252, "tr")(253, "th", 11);
        \u0275\u0275text(254, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(255, "td");
        \u0275\u0275text(256, "Larry");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(257, "td");
        \u0275\u0275text(258, "the Bird");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(259, "td");
        \u0275\u0275text(260, "@twitter");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(261, "div", 3)(262, "div", 4)(263, "div", 5)(264, "h4", 6);
        \u0275\u0275text(265, "Borderless table");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(266, "p", 7);
        \u0275\u0275text(267, " Add ");
        \u0275\u0275elementStart(268, "code");
        \u0275\u0275text(269, ".table-borderless");
        \u0275\u0275elementEnd();
        \u0275\u0275text(270, " for a table without borders.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(271, "div", 8)(272, "table", 16)(273, "thead")(274, "tr")(275, "th");
        \u0275\u0275text(276, "#");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(277, "th");
        \u0275\u0275text(278, "First Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(279, "th");
        \u0275\u0275text(280, "Last Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(281, "th");
        \u0275\u0275text(282, "Username");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(283, "tbody")(284, "tr")(285, "th", 11);
        \u0275\u0275text(286, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(287, "td");
        \u0275\u0275text(288, "Mark");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(289, "td");
        \u0275\u0275text(290, "Otto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(291, "td");
        \u0275\u0275text(292, "@mdo");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(293, "tr")(294, "th", 11);
        \u0275\u0275text(295, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(296, "td");
        \u0275\u0275text(297, "Jacob");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(298, "td");
        \u0275\u0275text(299, "Thornton");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(300, "td");
        \u0275\u0275text(301, "@fat");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(302, "tr")(303, "th", 11);
        \u0275\u0275text(304, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(305, "td");
        \u0275\u0275text(306, "Larry");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(307, "td");
        \u0275\u0275text(308, "the Bird");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(309, "td");
        \u0275\u0275text(310, "@twitter");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(311, "div", 2)(312, "div", 3)(313, "div", 4)(314, "div", 5)(315, "h4", 6);
        \u0275\u0275text(316, "Hoverable rows");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(317, "p", 7);
        \u0275\u0275text(318, "Add ");
        \u0275\u0275elementStart(319, "code");
        \u0275\u0275text(320, ".table-hover");
        \u0275\u0275elementEnd();
        \u0275\u0275text(321, " to enable a hover state on table rows within a ");
        \u0275\u0275elementStart(322, "code");
        \u0275\u0275text(323, "<tbody>");
        \u0275\u0275elementEnd();
        \u0275\u0275text(324, ".");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(325, "div", 8)(326, "table", 17)(327, "thead")(328, "tr")(329, "th");
        \u0275\u0275text(330, "#");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(331, "th");
        \u0275\u0275text(332, "First Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(333, "th");
        \u0275\u0275text(334, "Last Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(335, "th");
        \u0275\u0275text(336, "Username");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(337, "tbody")(338, "tr")(339, "th", 11);
        \u0275\u0275text(340, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(341, "td");
        \u0275\u0275text(342, "Mark");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(343, "td");
        \u0275\u0275text(344, "Otto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(345, "td");
        \u0275\u0275text(346, "@mdo");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(347, "tr")(348, "th", 11);
        \u0275\u0275text(349, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(350, "td");
        \u0275\u0275text(351, "Jacob");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(352, "td");
        \u0275\u0275text(353, "Thornton");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(354, "td");
        \u0275\u0275text(355, "@fat");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(356, "tr")(357, "th", 11);
        \u0275\u0275text(358, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(359, "td");
        \u0275\u0275text(360, "Larry");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(361, "td");
        \u0275\u0275text(362, "the Bird");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(363, "td");
        \u0275\u0275text(364, "@twitter");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(365, "div", 3)(366, "div", 4)(367, "div", 5)(368, "h4", 6);
        \u0275\u0275text(369, "Small table");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(370, "p", 7);
        \u0275\u0275text(371, " Add ");
        \u0275\u0275elementStart(372, "code");
        \u0275\u0275text(373, ".table-sm");
        \u0275\u0275elementEnd();
        \u0275\u0275text(374, " to make tables more compact by cutting cell padding in half.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(375, "div", 8)(376, "table", 18)(377, "thead")(378, "tr")(379, "th");
        \u0275\u0275text(380, "#");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(381, "th");
        \u0275\u0275text(382, "First Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(383, "th");
        \u0275\u0275text(384, "Last Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(385, "th");
        \u0275\u0275text(386, "Username");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(387, "tbody")(388, "tr")(389, "th", 11);
        \u0275\u0275text(390, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(391, "td");
        \u0275\u0275text(392, "Mark");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(393, "td");
        \u0275\u0275text(394, "Otto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(395, "td");
        \u0275\u0275text(396, "@mdo");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(397, "tr")(398, "th", 11);
        \u0275\u0275text(399, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(400, "td");
        \u0275\u0275text(401, "Jacob");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(402, "td");
        \u0275\u0275text(403, "Thornton");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(404, "td");
        \u0275\u0275text(405, "@fat");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(406, "tr")(407, "th", 11);
        \u0275\u0275text(408, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(409, "td");
        \u0275\u0275text(410, "Larry");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(411, "td");
        \u0275\u0275text(412, "the Bird");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(413, "td");
        \u0275\u0275text(414, "@twitter");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(415, "tr")(416, "th", 11);
        \u0275\u0275text(417, "4");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(418, "td");
        \u0275\u0275text(419, "Mark");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(420, "td");
        \u0275\u0275text(421, "Otto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(422, "td");
        \u0275\u0275text(423, "@mdo");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(424, "tr")(425, "th", 11);
        \u0275\u0275text(426, "5");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(427, "td");
        \u0275\u0275text(428, "Jacob");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(429, "td");
        \u0275\u0275text(430, "Thornton");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(431, "td");
        \u0275\u0275text(432, "@fat");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(433, "div", 2)(434, "div", 3)(435, "div", 4)(436, "div", 5)(437, "h4", 6);
        \u0275\u0275text(438, "Contextual classes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(439, "p", 7);
        \u0275\u0275text(440, "Use contextual classes to color table rows or individual cells.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(441, "div", 8)(442, "table", 9)(443, "thead")(444, "tr")(445, "th");
        \u0275\u0275text(446, "#");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(447, "th");
        \u0275\u0275text(448, "Column heading");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(449, "th");
        \u0275\u0275text(450, "Column heading");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(451, "th");
        \u0275\u0275text(452, "Column heading");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(453, "tbody")(454, "tr", 13)(455, "th", 11);
        \u0275\u0275text(456, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(457, "td");
        \u0275\u0275text(458, "Column content");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(459, "td");
        \u0275\u0275text(460, "Column content");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(461, "td");
        \u0275\u0275text(462, "Column content");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(463, "tr", 19)(464, "th", 11);
        \u0275\u0275text(465, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(466, "td");
        \u0275\u0275text(467, "Column content");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(468, "td");
        \u0275\u0275text(469, "Column content");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(470, "td");
        \u0275\u0275text(471, "Column content");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(472, "tr", 20)(473, "th", 11);
        \u0275\u0275text(474, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(475, "td");
        \u0275\u0275text(476, "Column content");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(477, "td");
        \u0275\u0275text(478, "Column content");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(479, "td");
        \u0275\u0275text(480, "Column content");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(481, "tr", 21)(482, "th", 11);
        \u0275\u0275text(483, "4");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(484, "td");
        \u0275\u0275text(485, "Column content");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(486, "td");
        \u0275\u0275text(487, "Column content");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(488, "td");
        \u0275\u0275text(489, "Column content");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(490, "tr", 22)(491, "th", 11);
        \u0275\u0275text(492, "5");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(493, "td");
        \u0275\u0275text(494, "Column content");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(495, "td");
        \u0275\u0275text(496, "Column content");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(497, "td");
        \u0275\u0275text(498, "Column content");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(499, "div", 3)(500, "div", 4)(501, "div", 5)(502, "h4", 6);
        \u0275\u0275text(503, "Captions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(504, "p", 7);
        \u0275\u0275text(505, "A ");
        \u0275\u0275elementStart(506, "code");
        \u0275\u0275text(507, "<caption>");
        \u0275\u0275elementEnd();
        \u0275\u0275text(508, " functions like a heading for a table. It helps users with screen readers to find a table and understand what it\u2019s about and decide if they want to read it.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(509, "div", 8)(510, "table", 9)(511, "caption");
        \u0275\u0275text(512, "List of users");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(513, "thead")(514, "tr")(515, "th");
        \u0275\u0275text(516, "#");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(517, "th");
        \u0275\u0275text(518, "First Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(519, "th");
        \u0275\u0275text(520, "Last Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(521, "th");
        \u0275\u0275text(522, "Username");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(523, "tbody")(524, "tr")(525, "th", 11);
        \u0275\u0275text(526, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(527, "td");
        \u0275\u0275text(528, "Mark");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(529, "td");
        \u0275\u0275text(530, "Otto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(531, "td");
        \u0275\u0275text(532, "@mdo");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(533, "tr")(534, "th", 11);
        \u0275\u0275text(535, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(536, "td");
        \u0275\u0275text(537, "Jacob");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(538, "td");
        \u0275\u0275text(539, "Thornton");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(540, "td");
        \u0275\u0275text(541, "@fat");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(542, "tr")(543, "th", 11);
        \u0275\u0275text(544, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(545, "td");
        \u0275\u0275text(546, "Larry");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(547, "td");
        \u0275\u0275text(548, "the Bird");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(549, "td");
        \u0275\u0275text(550, "@twitter");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(551, "div", 2)(552, "div", 23)(553, "div", 4)(554, "div", 5)(555, "h4", 6);
        \u0275\u0275text(556, "Responsive tables");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(557, "p", 7);
        \u0275\u0275text(558, " Create responsive tables by wrapping any ");
        \u0275\u0275elementStart(559, "code");
        \u0275\u0275text(560, ".table");
        \u0275\u0275elementEnd();
        \u0275\u0275text(561, " in ");
        \u0275\u0275elementStart(562, "code");
        \u0275\u0275text(563, ".table-responsive");
        \u0275\u0275elementEnd();
        \u0275\u0275text(564, " to make them scroll horizontally on small devices (under 768px). ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(565, "div", 8)(566, "table", 9)(567, "thead")(568, "tr")(569, "th");
        \u0275\u0275text(570, "#");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(571, "th");
        \u0275\u0275text(572, "Table heading");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(573, "th");
        \u0275\u0275text(574, "Table heading");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(575, "th");
        \u0275\u0275text(576, "Table heading");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(577, "th");
        \u0275\u0275text(578, "Table heading");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(579, "th");
        \u0275\u0275text(580, "Table heading");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(581, "th");
        \u0275\u0275text(582, "Table heading");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(583, "tbody")(584, "tr")(585, "th", 11);
        \u0275\u0275text(586, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(587, "td");
        \u0275\u0275text(588, "Table cell");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(589, "td");
        \u0275\u0275text(590, "Table cell");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(591, "td");
        \u0275\u0275text(592, "Table cell");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(593, "td");
        \u0275\u0275text(594, "Table cell");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(595, "td");
        \u0275\u0275text(596, "Table cell");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(597, "td");
        \u0275\u0275text(598, "Table cell");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(599, "tr")(600, "th", 11);
        \u0275\u0275text(601, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(602, "td");
        \u0275\u0275text(603, "Table cell");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(604, "td");
        \u0275\u0275text(605, "Table cell");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(606, "td");
        \u0275\u0275text(607, "Table cell");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(608, "td");
        \u0275\u0275text(609, "Table cell");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(610, "td");
        \u0275\u0275text(611, "Table cell");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(612, "td");
        \u0275\u0275text(613, "Table cell");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(614, "tr")(615, "th", 11);
        \u0275\u0275text(616, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(617, "td");
        \u0275\u0275text(618, "Table cell");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(619, "td");
        \u0275\u0275text(620, "Table cell");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(621, "td");
        \u0275\u0275text(622, "Table cell");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(623, "td");
        \u0275\u0275text(624, "Table cell");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(625, "td");
        \u0275\u0275text(626, "Table cell");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(627, "td");
        \u0275\u0275text(628, "Table cell");
        \u0275\u0275elementEnd()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
      }
    }, dependencies: [PagetitleComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BasicComponent, [{
    type: Component,
    args: [{ selector: "app-basic", imports: [PagetitleComponent], template: '<div class="container-fluid">\r\n  <app-page-title title="Basic Tables" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r\n  <div class="row">\r\n    <div class="col-lg-6">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title">Basic example</h4>\r\n          <p class="card-title-desc">For basic styling\u2014light padding and\r\n            only horizontal dividers\u2014add the base class <code>.table</code> to any\r\n            <code>&lt;table&gt;</code>.\r\n          </p>\r\n\r\n          <div class="table-responsive">\r\n            <table class="table mb-0">\r\n\r\n              <thead class="thead-dark">\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>First Name</th>\r\n                  <th>Last Name</th>\r\n                  <th>Username</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <th scope="row">1</th>\r\n                  <td>Mark</td>\r\n                  <td>Otto</td>\r\n                  <td>&#64;mdo</td>\r\n                </tr>\r\n                <tr>\r\n                  <th scope="row">2</th>\r\n                  <td>Jacob</td>\r\n                  <td>Thornton</td>\r\n                  <td>&#64;fat</td>\r\n                </tr>\r\n                <tr>\r\n                  <th scope="row">3</th>\r\n                  <td>Larry</td>\r\n                  <td>the Bird</td>\r\n                  <td>&#64;twitter</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="col-lg-6">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title">Dark table</h4>\r\n          <p class="card-title-desc">You can also invert the colors\u2014with light text on dark backgrounds\u2014with\r\n            <code>.table-dark</code>.\r\n          </p>\r\n\r\n          <div class="table-responsive">\r\n            <table class="table table-dark mb-0">\r\n\r\n              <thead>\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>First Name</th>\r\n                  <th>Last Name</th>\r\n                  <th>Username</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <th scope="row">1</th>\r\n                  <td>Mark</td>\r\n                  <td>Otto</td>\r\n                  <td>&#64;mdo</td>\r\n                </tr>\r\n                <tr>\r\n                  <th scope="row">2</th>\r\n                  <td>Jacob</td>\r\n                  <td>Thornton</td>\r\n                  <td>&#64;fat</td>\r\n                </tr>\r\n                <tr>\r\n                  <th scope="row">3</th>\r\n                  <td>Larry</td>\r\n                  <td>the Bird</td>\r\n                  <td>&#64;twitter</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- end row -->\r\n\r\n  <div class="row">\r\n    <div class="col-lg-6">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title">Table head</h4>\r\n          <p class="card-title-desc">Use one of two modifier classes to make <code>&lt;thead&gt;</code>s appear light or\r\n            dark gray.</p>\r\n\r\n          <div class="table-responsive">\r\n            <table class="table mb-0">\r\n\r\n              <thead class="table-light">\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>First Name</th>\r\n                  <th>Last Name</th>\r\n                  <th>Username</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <th scope="row">1</th>\r\n                  <td>Mark</td>\r\n                  <td>Otto</td>\r\n                  <td>&#64;mdo</td>\r\n                </tr>\r\n                <tr>\r\n                  <th scope="row">2</th>\r\n                  <td>Jacob</td>\r\n                  <td>Thornton</td>\r\n                  <td>&#64;fat</td>\r\n                </tr>\r\n                <tr>\r\n                  <th scope="row">3</th>\r\n                  <td>Larry</td>\r\n                  <td>the Bird</td>\r\n                  <td>&#64;twitter</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="col-lg-6">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title">Striped rows</h4>\r\n          <p class="card-title-desc">Use <code>.table-striped</code> to add zebra-striping to any table row within the\r\n            <code>&lt;tbody&gt;</code>.</p>\r\n\r\n          <div class="table-responsive">\r\n            <table class="table table-striped mb-0">\r\n\r\n              <thead>\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>First Name</th>\r\n                  <th>Last Name</th>\r\n                  <th>Username</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <th scope="row">1</th>\r\n                  <td>Mark</td>\r\n                  <td>Otto</td>\r\n                  <td>&#64;mdo</td>\r\n                </tr>\r\n                <tr>\r\n                  <th scope="row">2</th>\r\n                  <td>Jacob</td>\r\n                  <td>Thornton</td>\r\n                  <td>&#64;fat</td>\r\n                </tr>\r\n                <tr>\r\n                  <th scope="row">3</th>\r\n                  <td>Larry</td>\r\n                  <td>the Bird</td>\r\n                  <td>&#64;twitter</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- end row -->\r\n\r\n  <div class="row">\r\n    <div class="col-lg-6">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title">Bordered table</h4>\r\n          <p class="card-title-desc">Add <code>.table-bordered</code> for borders on all sides of the table and cells.\r\n          </p>\r\n\r\n          <div class="table-responsive">\r\n            <table class="table table-bordered mb-0">\r\n\r\n              <thead>\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>First Name</th>\r\n                  <th>Last Name</th>\r\n                  <th>Username</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <th scope="row">1</th>\r\n                  <td>Mark</td>\r\n                  <td>Otto</td>\r\n                  <td>&#64;mdo</td>\r\n                </tr>\r\n                <tr>\r\n                  <th scope="row">2</th>\r\n                  <td>Jacob</td>\r\n                  <td>Thornton</td>\r\n                  <td>&#64;fat</td>\r\n                </tr>\r\n                <tr>\r\n                  <th scope="row">3</th>\r\n                  <td>Larry</td>\r\n                  <td>the Bird</td>\r\n                  <td>&#64;twitter</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="col-lg-6">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title">Borderless table</h4>\r\n          <p class="card-title-desc"> Add <code>.table-borderless</code> for a table without borders.</p>\r\n\r\n          <div class="table-responsive">\r\n            <table class="table table-borderless mb-0">\r\n\r\n              <thead>\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>First Name</th>\r\n                  <th>Last Name</th>\r\n                  <th>Username</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <th scope="row">1</th>\r\n                  <td>Mark</td>\r\n                  <td>Otto</td>\r\n                  <td>&#64;mdo</td>\r\n                </tr>\r\n                <tr>\r\n                  <th scope="row">2</th>\r\n                  <td>Jacob</td>\r\n                  <td>Thornton</td>\r\n                  <td>&#64;fat</td>\r\n                </tr>\r\n                <tr>\r\n                  <th scope="row">3</th>\r\n                  <td>Larry</td>\r\n                  <td>the Bird</td>\r\n                  <td>&#64;twitter</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- end row -->\r\n\r\n  <div class="row">\r\n    <div class="col-lg-6">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title">Hoverable rows</h4>\r\n          <p class="card-title-desc">Add <code>.table-hover</code> to enable a hover state on table rows within a\r\n            <code>&lt;tbody&gt;</code>.</p>\r\n\r\n          <div class="table-responsive">\r\n            <table class="table table-hover mb-0">\r\n\r\n              <thead>\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>First Name</th>\r\n                  <th>Last Name</th>\r\n                  <th>Username</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <th scope="row">1</th>\r\n                  <td>Mark</td>\r\n                  <td>Otto</td>\r\n                  <td>&#64;mdo</td>\r\n                </tr>\r\n                <tr>\r\n                  <th scope="row">2</th>\r\n                  <td>Jacob</td>\r\n                  <td>Thornton</td>\r\n                  <td>&#64;fat</td>\r\n                </tr>\r\n                <tr>\r\n                  <th scope="row">3</th>\r\n                  <td>Larry</td>\r\n                  <td>the Bird</td>\r\n                  <td>&#64;twitter</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="col-lg-6">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title">Small table</h4>\r\n          <p class="card-title-desc"> Add <code>.table-sm</code> to make tables more compact by cutting cell padding in\r\n            half.</p>\r\n\r\n          <div class="table-responsive">\r\n            <table class="table table-sm m-0">\r\n              <thead>\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>First Name</th>\r\n                  <th>Last Name</th>\r\n                  <th>Username</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <th scope="row">1</th>\r\n                  <td>Mark</td>\r\n                  <td>Otto</td>\r\n                  <td>&#64;mdo</td>\r\n                </tr>\r\n                <tr>\r\n                  <th scope="row">2</th>\r\n                  <td>Jacob</td>\r\n                  <td>Thornton</td>\r\n                  <td>&#64;fat</td>\r\n                </tr>\r\n                <tr>\r\n                  <th scope="row">3</th>\r\n                  <td>Larry</td>\r\n                  <td>the Bird</td>\r\n                  <td>&#64;twitter</td>\r\n                </tr>\r\n                <tr>\r\n                  <th scope="row">4</th>\r\n                  <td>Mark</td>\r\n                  <td>Otto</td>\r\n                  <td>&#64;mdo</td>\r\n                </tr>\r\n                <tr>\r\n                  <th scope="row">5</th>\r\n                  <td>Jacob</td>\r\n                  <td>Thornton</td>\r\n                  <td>&#64;fat</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- end row -->\r\n\r\n  <div class="row">\r\n    <div class="col-lg-6">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title">Contextual classes</h4>\r\n          <p class="card-title-desc">Use contextual classes to color table rows or individual cells.</p>\r\n\r\n          <div class="table-responsive">\r\n            <table class="table mb-0">\r\n              <thead>\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>Column heading</th>\r\n                  <th>Column heading</th>\r\n                  <th>Column heading</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr class="table-light">\r\n                  <th scope="row">1</th>\r\n                  <td>Column content</td>\r\n                  <td>Column content</td>\r\n                  <td>Column content</td>\r\n                </tr>\r\n\r\n                <tr class="table-success">\r\n                  <th scope="row">2</th>\r\n                  <td>Column content</td>\r\n                  <td>Column content</td>\r\n                  <td>Column content</td>\r\n                </tr>\r\n\r\n                <tr class="table-info">\r\n                  <th scope="row">3</th>\r\n                  <td>Column content</td>\r\n                  <td>Column content</td>\r\n                  <td>Column content</td>\r\n                </tr>\r\n\r\n                <tr class="table-warning">\r\n                  <th scope="row">4</th>\r\n                  <td>Column content</td>\r\n                  <td>Column content</td>\r\n                  <td>Column content</td>\r\n                </tr>\r\n\r\n                <tr class="table-danger">\r\n                  <th scope="row">5</th>\r\n                  <td>Column content</td>\r\n                  <td>Column content</td>\r\n                  <td>Column content</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="col-lg-6">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title">Captions</h4>\r\n          <p class="card-title-desc">A <code>&lt;caption&gt;</code> functions like a heading for a table. It helps users\r\n            with screen readers to find a table and understand what it\u2019s about and decide if they want to read it.</p>\r\n\r\n          <div class="table-responsive">\r\n            <table class="table mb-0">\r\n              <caption>List of users</caption>\r\n              <thead>\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>First Name</th>\r\n                  <th>Last Name</th>\r\n                  <th>Username</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <th scope="row">1</th>\r\n                  <td>Mark</td>\r\n                  <td>Otto</td>\r\n                  <td>&#64;mdo</td>\r\n                </tr>\r\n                <tr>\r\n                  <th scope="row">2</th>\r\n                  <td>Jacob</td>\r\n                  <td>Thornton</td>\r\n                  <td>&#64;fat</td>\r\n                </tr>\r\n                <tr>\r\n                  <th scope="row">3</th>\r\n                  <td>Larry</td>\r\n                  <td>the Bird</td>\r\n                  <td>&#64;twitter</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- end row -->\r\n\r\n  <div class="row">\r\n    <div class="col-lg-12">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title">Responsive tables</h4>\r\n          <p class="card-title-desc">\r\n            Create responsive tables by wrapping any <code>.table</code> in <code>.table-responsive</code>\r\n            to make them scroll horizontally on small devices (under 768px).\r\n          </p>\r\n\r\n          <div class="table-responsive">\r\n            <table class="table mb-0">\r\n              <thead>\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>Table heading</th>\r\n                  <th>Table heading</th>\r\n                  <th>Table heading</th>\r\n                  <th>Table heading</th>\r\n                  <th>Table heading</th>\r\n                  <th>Table heading</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <th scope="row">1</th>\r\n                  <td>Table cell</td>\r\n                  <td>Table cell</td>\r\n                  <td>Table cell</td>\r\n                  <td>Table cell</td>\r\n                  <td>Table cell</td>\r\n                  <td>Table cell</td>\r\n                </tr>\r\n                <tr>\r\n                  <th scope="row">2</th>\r\n                  <td>Table cell</td>\r\n                  <td>Table cell</td>\r\n                  <td>Table cell</td>\r\n                  <td>Table cell</td>\r\n                  <td>Table cell</td>\r\n                  <td>Table cell</td>\r\n                </tr>\r\n                <tr>\r\n                  <th scope="row">3</th>\r\n                  <td>Table cell</td>\r\n                  <td>Table cell</td>\r\n                  <td>Table cell</td>\r\n                  <td>Table cell</td>\r\n                  <td>Table cell</td>\r\n                  <td>Table cell</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- end row -->\r\n</div>\r\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BasicComponent, { className: "BasicComponent", filePath: "src/app/pages/tables/basic/basic.component.ts", lineNumber: 14 });
})();

// src/app/pages/tables/advancedtable/data.ts
var tableData = [
  {
    name: "Timoteo Lyddy",
    position: "Recruiting Manager",
    office: "Vidago",
    age: "29",
    date: "2018/12/04",
    salary: "$11700"
  },
  {
    name: "Cherye Bleby",
    position: "Quality Engineer",
    office: "La Concordia",
    age: "62",
    date: "2018/10/04",
    salary: "$14700"
  },
  {
    name: "Zacharias O'Shaughnessy",
    position: "Senior Editor",
    office: "Maungatapere",
    age: "26",
    date: "2018/07/30",
    salary: "$11600"
  },
  {
    name: "Odie Jentin",
    position: "Programmer II",
    office: "Grabovci",
    age: "26",
    date: "2019/05/16",
    salary: "$11200"
  },
  {
    name: "Eugenie Sang",
    position: "Operator",
    office: "Oxbow",
    age: "59",
    date: "2019/07/16",
    salary: "$15200"
  },
  {
    name: "Sammy Guyers",
    position: "Mechanical Systems Engineer",
    office: "Sanhe",
    age: "53",
    date: "2019/07/09",
    salary: "$14200"
  },
  {
    name: "Tarah Blick",
    position: "Paralegal",
    office: "Fyl\xED",
    age: "23",
    date: "2018/12/14",
    salary: "$15200"
  },
  {
    name: "Jemie Ormshaw",
    position: "Systems Administrator II",
    office: "Vila Fria",
    age: "28",
    date: "2019/05/15",
    salary: "$14400"
  },
  {
    name: "Gerrie Semeradova",
    position: "Research Associate",
    office: "Balykchy",
    age: "26",
    date: "2018/09/28",
    salary: "$14900"
  },
  {
    name: "Ottilie Mostyn",
    position: "Accounting Assistant II",
    office: "Eskilstuna",
    age: "43",
    date: "2018/08/20",
    salary: "$11300"
  },
  {
    name: "Lombard Crepin",
    position: "Project Manager",
    office: "Novoul\u2019yanovsk",
    age: "63",
    date: "2019/04/28",
    salary: "$13300"
  },
  {
    name: "Fons Sopp",
    position: "Structural Analysis Engineer",
    office: "Bealanana",
    age: "47",
    date: "2019/02/22",
    salary: "$13300"
  },
  {
    name: "Berenice Wildey",
    position: "Sales Representative",
    office: "Mark\xF3poulo Oropo\xFA",
    age: "49",
    date: "2018/10/19",
    salary: "$14700"
  },
  {
    name: "Maybelle Cullotey",
    position: "Senior Financial Analyst",
    office: "Arcos de Valdevez",
    age: "33",
    date: "2019/02/06",
    salary: "$14700"
  },
  {
    name: "Mikkel Lingner",
    position: "Assistant Media Planner",
    office: "Celestyn\xF3w",
    age: "32",
    date: "2018/08/12",
    salary: "$11400"
  },
  {
    name: "Silvano Hartil",
    position: "Assistant Manager",
    office: "Leles",
    age: "26",
    date: "2019/04/30",
    salary: "$11500"
  },
  {
    name: "Maddi Mansell",
    position: "Assistant Media Planner",
    office: "Doug An",
    age: "48",
    date: "2019/05/29",
    salary: "$14600"
  },
  {
    name: "Mohandas Course",
    position: "Staff Accountant II",
    office: "Wuping",
    age: "59",
    date: "2019/07/18",
    salary: "$12900"
  },
  {
    name: "Ericha Clilverd",
    position: "Desktop Support Technician",
    office: "Conde",
    age: "37",
    date: "2018/09/12",
    salary: "$14400"
  },
  {
    name: "Elspeth Leap",
    position: "Paralegal",
    office: "H\xE4gersten",
    age: "42",
    date: "2019/02/15",
    salary: "$14400"
  },
  {
    name: "Sam Chinge",
    position: "Assistant Media Planner",
    office: "Arai",
    age: "55",
    date: "2019/05/26",
    salary: "$11800"
  },
  {
    name: "Lucinda Stickley",
    position: "Data Coordiator",
    office: "Sirnarasa",
    age: "31",
    date: "2018/07/29",
    salary: "$13600"
  },
  {
    name: "Henrietta Carsberg",
    position: "Data Coordiator",
    office: "Paninggaran",
    age: "59",
    date: "2019/07/13",
    salary: "$13700"
  },
  {
    name: "Phylys David",
    position: "Senior Developer",
    office: "New Glasgow",
    age: "52",
    date: "2019/04/08",
    salary: "$15200"
  },
  {
    name: "Brena Shivell",
    position: "Graphic Designer",
    office: "Caen",
    age: "50",
    date: "2018/12/14",
    salary: "$15800"
  },
  {
    name: "Carmon Tuiller",
    position: "Marketing Assistant",
    office: "Jiangbei",
    age: "46",
    date: "2019/06/19",
    salary: "$12800"
  },
  {
    name: "Tina Strattan",
    position: "Account Representative III",
    office: "S\xE3o Miguel da Carreira",
    age: "31",
    date: "2019/07/08",
    salary: "$13900"
  },
  {
    name: "Jon Tarbox",
    position: "Senior Cost Accountant",
    office: "Ryazhsk",
    age: "61",
    date: "2019/02/22",
    salary: "$16000"
  },
  {
    name: "Carmine Hollibone",
    position: "Assistant Manager",
    office: "Punta del Este",
    age: "50",
    date: "2019/04/23",
    salary: "$15000"
  },
  {
    name: "Cora Germann",
    position: "Automation Specialist III",
    office: "Heshui",
    age: "47",
    date: "2019/03/27",
    salary: "$11300"
  },
  {
    name: "Dawna Hillyatt",
    position: "Biostatistician I",
    office: "Suresnes",
    age: "37",
    date: "2018/12/02",
    salary: "$14800"
  },
  {
    name: "Natty Casini",
    position: "Senior Developer",
    office: "Pucallpa",
    age: "31",
    date: "2018/08/19",
    salary: "$11900"
  },
  {
    name: "Vittorio Lauder",
    position: "Developer II",
    office: "T\xF8nsberg",
    age: "54",
    date: "2018/12/10",
    salary: "$16200"
  },
  {
    name: "Chery Cardenas",
    position: "Senior Developer",
    office: "Santo Tomas",
    age: "26",
    date: "2018/12/07",
    salary: "$11100"
  },
  {
    name: "Hilde McFfaden",
    position: "Senior Financial Analyst",
    office: "Cruz",
    age: "43",
    date: "2018/11/05",
    salary: "$14100"
  },
  {
    name: "Siward Kindred",
    position: "Office Assistant III",
    office: "B\xE9ziers",
    age: "39",
    date: "2018/09/26",
    salary: "$15500"
  },
  {
    name: "Tamera Caneo",
    position: "Executive Secretary",
    office: "Hetian",
    age: "38",
    date: "2018/09/28",
    salary: "$12300"
  },
  {
    name: "Munmro Rendell",
    position: "Marketing Manager",
    office: "Castelo",
    age: "60",
    date: "2018/11/15",
    salary: "$12400"
  },
  {
    name: "Nerta Eddisforth",
    position: "Social Worker",
    office: "Al \u1E28ayfah",
    age: "33",
    date: "2018/12/01",
    salary: "$14900"
  },
  {
    name: "Laraine Hamlyn",
    position: "Chemical Engineer",
    office: "Ba\u0161ka Voda",
    age: "44",
    date: "2019/03/25",
    salary: "$12800"
  },
  {
    name: "Judie Hug",
    position: "Operator",
    office: "Verkhniy Rohachyk",
    age: "32",
    date: "2018/11/18",
    salary: "$11300"
  },
  {
    name: "Lulita Espasa",
    position: "Operator",
    office: "Sabi",
    age: "59",
    date: "2019/06/06",
    salary: "$13600"
  },
  {
    name: "Kandy Fulker",
    position: "Human Resources Assistant I",
    office: "Murowana Go\u015Blina",
    age: "57",
    date: "2019/05/01",
    salary: "$13100"
  },
  {
    name: "Bradley Gunbie",
    position: "Assistant Media Planner",
    office: "Bundoran",
    age: "34",
    date: "2019/03/16",
    salary: "$13700"
  },
  {
    name: "Katie Proctor",
    position: "Quality Engineer",
    office: "Qingxi",
    age: "34",
    date: "2018/10/14",
    salary: "$12400"
  },
  {
    name: "Lin Gallaccio",
    position: "VP Quality Control",
    office: "Rongcheng",
    age: "23",
    date: "2018/08/27",
    salary: "$10300"
  },
  {
    name: "Christy Ranaghan",
    position: "Nurse Practicioner",
    office: "Naval",
    age: "42",
    date: "2018/11/02",
    salary: "$15700"
  },
  {
    name: "Concordia Varrow",
    position: "Environmental Specialist",
    office: "Rashaant",
    age: "48",
    date: "2018/12/11",
    salary: "$12500"
  },
  {
    name: "Normand Tropman",
    position: "Legal Assistant",
    office: "Yl\xE4ne",
    age: "52",
    date: "2019/01/21",
    salary: "$14600"
  },
  {
    name: "Oswald Cruikshank",
    position: "Help Desk Operator",
    office: "Armenia",
    age: "57",
    date: "2019/05/16",
    salary: "$15700"
  },
  {
    name: "Debbie Pinchin",
    position: "Tax Accountant",
    office: "Seara",
    age: "35",
    date: "2018/08/29",
    salary: "$12100"
  },
  {
    name: "Wells Dartan",
    position: "Financial Analyst",
    office: "Bhalw\u0101l",
    age: "44",
    date: "2019/03/03",
    salary: "$10500"
  },
  {
    name: "Kelsey Zucker",
    position: "Accountant III",
    office: "Douz",
    age: "44",
    date: "2018/11/09",
    salary: "$15700"
  },
  {
    name: "Lothaire Rubinchik",
    position: "Operator",
    office: "Paringin",
    age: "37",
    date: "2018/07/26",
    salary: "$13800"
  },
  {
    name: "Dmitri Marrow",
    position: "Quality Engineer",
    office: "Kirzhach",
    age: "30",
    date: "2018/11/25",
    salary: "$13400"
  },
  {
    name: "Virgie Bullivant",
    position: "Dental Hygienist",
    office: "Mungyeong",
    age: "34",
    date: "2019/07/16",
    salary: "$14600"
  },
  {
    name: "Simmonds Moughtin",
    position: "Programmer III",
    office: "Loma",
    age: "44",
    date: "2018/10/20",
    salary: "$13900"
  },
  {
    name: "Ralina Bounds",
    position: "Associate Professor",
    office: "Cacocum",
    age: "52",
    date: "2019/05/12",
    salary: "$11400"
  },
  {
    name: "Bettye Hearons",
    position: "Food Chemist",
    office: "Guayabetal",
    age: "30",
    date: "2018/12/29",
    salary: "$16000"
  },
  {
    name: "Cortie Andreacci",
    position: "Assistant Manager",
    office: "Yongheshi",
    age: "33",
    date: "2018/11/23",
    salary: "$11200"
  }
];

// src/app/pages/tables/advancedtable/advanced.service.ts
var compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(tables, column, direction) {
  if (direction === "" || column === "") {
    return tables;
  } else {
    return [...tables].sort((a, b) => {
      const res = compare(`${a[column]}`, `${b[column]}`);
      return direction === "asc" ? res : -res;
    });
  }
}
function matches(tables, term, pipe) {
  return tables.name.toLowerCase().includes(term.toLowerCase()) || tables.position.toLowerCase().includes(term) || tables.office.toLowerCase().includes(term) || pipe.transform(tables.age).includes(term) || tables.date.toLowerCase().includes(term) || tables.salary.toLowerCase().includes(term);
}
var AdvancedService = class _AdvancedService {
  constructor(pipe) {
    this.pipe = pipe;
    this._loading$ = new BehaviorSubject(true);
    this._search$ = new Subject();
    this._tables$ = new BehaviorSubject([]);
    this._total$ = new BehaviorSubject(0);
    this._state = {
      page: 1,
      pageSize: 10,
      searchTerm: "",
      sortColumn: "",
      sortDirection: "",
      startIndex: 0,
      endIndex: 9,
      totalRecords: 0
    };
    this._search$.pipe(tap(() => this._loading$.next(true)), debounceTime(200), switchMap(() => this._search()), delay(200), tap(() => this._loading$.next(false))).subscribe((result) => {
      this._tables$.next(result.tables);
      this._total$.next(result.total);
    });
    this._search$.next();
  }
  /**
   * Returns the value
   */
  get tables$() {
    return this._tables$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }
  get page() {
    return this._state.page;
  }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }
  get startIndex() {
    return this._state.startIndex;
  }
  get endIndex() {
    return this._state.endIndex;
  }
  get totalRecords() {
    return this._state.totalRecords;
  }
  /**
   * set the value
   */
  // tslint:disable-next-line: adjacent-overload-signatures
  set page(page) {
    this._set({ page });
  }
  // tslint:disable-next-line: adjacent-overload-signatures
  set pageSize(pageSize) {
    this._set({ pageSize });
  }
  // tslint:disable-next-line: adjacent-overload-signatures
  // tslint:disable-next-line: adjacent-overload-signatures
  set startIndex(startIndex) {
    this._set({ startIndex });
  }
  // tslint:disable-next-line: adjacent-overload-signatures
  set endIndex(endIndex) {
    this._set({ endIndex });
  }
  // tslint:disable-next-line: adjacent-overload-signatures
  set totalRecords(totalRecords) {
    this._set({ totalRecords });
  }
  // tslint:disable-next-line: adjacent-overload-signatures
  set searchTerm(searchTerm) {
    this._set({ searchTerm });
  }
  set sortColumn(sortColumn) {
    this._set({ sortColumn });
  }
  set sortDirection(sortDirection) {
    this._set({ sortDirection });
  }
  _set(patch) {
    Object.assign(this._state, patch);
    this._search$.next();
  }
  /**
   * Search Method
   */
  _search() {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
    let tables = sort(tableData, sortColumn, sortDirection);
    tables = tables.filter((table) => matches(table, searchTerm, this.pipe));
    const total = tables.length;
    this.totalRecords = tables.length;
    this._state.startIndex = (page - 1) * this.pageSize + 1;
    this._state.endIndex = (page - 1) * this.pageSize + this.pageSize;
    if (this.endIndex > this.totalRecords) {
      this.endIndex = this.totalRecords;
    }
    tables = tables.slice(this._state.startIndex - 1, this._state.endIndex);
    return of({ tables, total });
  }
  static {
    this.\u0275fac = function AdvancedService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdvancedService)(\u0275\u0275inject(DecimalPipe));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdvancedService, factory: _AdvancedService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdvancedService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: DecimalPipe }], null);
})();

// src/app/pages/tables/advancedtable/advanced-sortable.directive.ts
var rotate = { asc: "desc", desc: "", "": "asc" };
var AdvancedSortableDirective = class _AdvancedSortableDirective {
  constructor() {
    this.direction = "";
    this.sort = new EventEmitter();
  }
  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable, direction: this.direction });
  }
  static {
    this.\u0275fac = function AdvancedSortableDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdvancedSortableDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _AdvancedSortableDirective, selectors: [["th", "sortable", ""]], hostVars: 4, hostBindings: function AdvancedSortableDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function AdvancedSortableDirective_click_HostBindingHandler() {
          return ctx.rotate();
        });
      }
      if (rf & 2) {
        \u0275\u0275classProp("asc", ctx.direction === "asc")("desc", ctx.direction === "desc");
      }
    }, inputs: { sortable: "sortable", direction: "direction" }, outputs: { sort: "sort" } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdvancedSortableDirective, [{
    type: Directive,
    args: [{
      // tslint:disable-next-line: directive-selector
      selector: "th[sortable]",
      // tslint:disable-next-line: no-host-metadata-property
      host: {
        "[class.asc]": 'direction === "asc"',
        "[class.desc]": 'direction === "desc"',
        "(click)": "rotate()"
      },
      standalone: true
    }]
  }], () => [], { sortable: [{
    type: Input
  }], direction: [{
    type: Input
  }], sort: [{
    type: Output
  }] });
})();

// src/app/pages/tables/advancedtable/advancedtable.component.ts
function AdvancedtableComponent_For_50_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "a", 38);
    \u0275\u0275element(2, "i", 39);
    \u0275\u0275text(3, "Add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 38);
    \u0275\u0275element(5, "i", 40);
    \u0275\u0275text(6, "Edit");
    \u0275\u0275elementEnd()();
  }
}
function AdvancedtableComponent_For_50_Conditional_21_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const table_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r5.name);
  }
}
function AdvancedtableComponent_For_50_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 36);
    \u0275\u0275element(1, "td", 31);
    \u0275\u0275elementStart(2, "td", 41)(3, "table", 42)(4, "thead", 43)(5, "tr")(6, "th");
    \u0275\u0275text(7, "CountryName");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Price/Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Sales Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Buy Account");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, AdvancedtableComponent_For_50_Conditional_21_For_16_Template, 9, 4, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(17, 0, ctx_r3.tables$));
  }
}
function AdvancedtableComponent_For_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tbody")(1, "tr")(2, "td", 31)(3, "a", 32);
    \u0275\u0275listener("click", function AdvancedtableComponent_For_50_Template_a_click_3_listener() {
      const $index_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.changeValue($index_r3));
    });
    \u0275\u0275text(4, " + ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "div", 33);
    \u0275\u0275element(19, "i", 34);
    \u0275\u0275template(20, AdvancedtableComponent_For_50_div_20_Template, 7, 0, "div", 35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(21, AdvancedtableComponent_For_50_Conditional_21_Template, 18, 2, "tr", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const table_r6 = ctx.$implicit;
    const $index_r3 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(table_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", table_r6.position, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r6.office);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", table_r6.age, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r6.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r6.salary);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r3.hideme[$index_r3] ? 21 : -1);
  }
}
function AdvancedtableComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "h5", 45);
    \u0275\u0275text(2, "Modal Heading");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 46);
    \u0275\u0275listener("click", function AdvancedtableComponent_ng_template_60_Template_button_click_3_listener() {
      const modal_r8 = \u0275\u0275restoreView(_r7).$implicit;
      return \u0275\u0275resetView(modal_r8.dismiss("Cross click"));
    });
    \u0275\u0275text(4, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 47)(6, "h5");
    \u0275\u0275text(7, "Overflowing text to show scroll behavior");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 48)(15, "button", 49);
    \u0275\u0275listener("click", function AdvancedtableComponent_ng_template_60_Template_button_click_15_listener() {
      const modal_r8 = \u0275\u0275restoreView(_r7).$implicit;
      return \u0275\u0275resetView(modal_r8.close("Close click"));
    });
    \u0275\u0275text(16, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 50);
    \u0275\u0275text(18, "Save changes");
    \u0275\u0275elementEnd()();
  }
}
var AdvancedtableComponent = class _AdvancedtableComponent {
  constructor(service) {
    this.service = service;
    this.hideme = [];
    this.isCollapsed = true;
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Tables" }, { label: "Advanced Table", active: true }];
    this._fetchData();
  }
  changeValue(i) {
    this.hideme[i] = !this.hideme[i];
  }
  /**
   * fetches the table value
   */
  _fetchData() {
    this.tableData = tableData;
    for (let i = 0; i <= this.tableData.length; i++) {
      this.hideme.push(true);
    }
  }
  /**
   * Sort table data
   * @param param0 sort the column
   *
   */
  onSort({ column, direction }) {
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = "";
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
  static {
    this.\u0275fac = function AdvancedtableComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdvancedtableComponent)(\u0275\u0275directiveInject(AdvancedService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdvancedtableComponent, selectors: [["app-advancedtable"]], viewQuery: function AdvancedtableComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(AdvancedSortableDirective, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headers = _t);
      }
    }, features: [\u0275\u0275ProvidersFeature([AdvancedService, DecimalPipe])], decls: 62, vars: 16, consts: [["content", ""], [1, "container-fluid"], ["title", "Advanced Table", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-sub-title"], [1, "row", "mb-md-2"], [1, "col-sm-12", "col-md-6"], ["id", "tickets-table_length", 1, "dataTables_length"], [1, "d-inline-flex", "align-items-center"], ["name", "tickets-table_length", "aria-controls", "tickets-table", "name", "pageSize", 1, "form-control", "form-control-sm", "mx-2", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["id", "tickets-table_filter", 1, "dataTables_filter", "text-md-end"], ["type", "text", "name", "searchTerm", "aria-controls", "tickets-table", 1, "form-control", "form-control-sm", "ms-2", 3, "ngModelChange", "ngModel"], [1, "table-responsive"], ["id", "basic-datatable", 1, "table", "table-bordered", "dt-responsive", "nowrap", "datatables", "no-footer", "dtr-inline"], ["sortable", "name", 3, "sort"], ["sortable", "position", 3, "sort"], ["sortable", "office", 3, "sort"], ["sortable", "age", 3, "sort"], ["sortable", "date", 3, "sort"], ["sortable", "salary", 3, "sort"], [1, "row", "justify-content-md-between", "align-items-md-center", "mt-2"], [1, "col-sm-12", "col-md-5"], ["id", "tickets-table_info", "role", "status", "aria-live", "polite", 1, "dataTables_info", "mb-2"], [1, "text-md-right", "float-md-end", "pagination-rounded"], [3, "ngModelChange", "totalItems", "ngModel"], ["role", "document"], ["align", "center"], [1, "expand-row", 3, "click"], ["dropdown", "", "placement", "bottom-left", 1, "dropdown"], ["dropdownToggle", "", "data-toggle", "dropdown", "aria-expanded", "true", 1, "mdi", "mdi-dots-vertical", "dropdown-toggle"], ["class", "dropdown-menu dropdown-menu-end", 4, "dropdownMenu"], [1, "sub-table", "no-bg"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript: void(0);", 1, "dropdown-item"], [1, "mdi", "mdi-plus"], [1, "mdi", "mdi-account-edit"], ["colspan", "15", 1, "p-0"], [1, "table", "mb-0", "table-striped"], [1, "bg-dark", "text-white"], [1, "modal-header"], [1, "modal-title", "mt-0"], ["type", "button", "aria-hidden", "true", 1, "close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"], ["type", "button", 1, "btn", "btn-primary"]], template: function AdvancedtableComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275element(1, "app-page-title", 2);
        \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "h4", 7);
        \u0275\u0275text(7, "Advanced Data Table");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 8);
        \u0275\u0275text(9, " Example of datatable. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "label", 12);
        \u0275\u0275text(14, "Show ");
        \u0275\u0275elementStart(15, "select", 13);
        \u0275\u0275twoWayListener("ngModelChange", function AdvancedtableComponent_Template_select_ngModelChange_15_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.service.pageSize, $event) || (ctx.service.pageSize = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(16, "option", 14);
        \u0275\u0275text(17, "10");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "option", 14);
        \u0275\u0275text(19, "25");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "option", 14);
        \u0275\u0275text(21, "50");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "option", 14);
        \u0275\u0275text(23, "100");
        \u0275\u0275elementEnd()();
        \u0275\u0275text(24, " entries");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "div", 10)(26, "div", 15)(27, "label", 12);
        \u0275\u0275text(28, "Search: ");
        \u0275\u0275elementStart(29, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function AdvancedtableComponent_Template_input_ngModelChange_29_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.service.searchTerm, $event) || (ctx.service.searchTerm = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(30, "div", 17)(31, "table", 18)(32, "thead")(33, "tr");
        \u0275\u0275element(34, "th");
        \u0275\u0275elementStart(35, "th", 19);
        \u0275\u0275listener("sort", function AdvancedtableComponent_Template_th_sort_35_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSort($event));
        });
        \u0275\u0275text(36, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "th", 20);
        \u0275\u0275listener("sort", function AdvancedtableComponent_Template_th_sort_37_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSort($event));
        });
        \u0275\u0275text(38, "Position");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "th", 21);
        \u0275\u0275listener("sort", function AdvancedtableComponent_Template_th_sort_39_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSort($event));
        });
        \u0275\u0275text(40, "Office");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "th", 22);
        \u0275\u0275listener("sort", function AdvancedtableComponent_Template_th_sort_41_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSort($event));
        });
        \u0275\u0275text(42, "Age");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "th", 23);
        \u0275\u0275listener("sort", function AdvancedtableComponent_Template_th_sort_43_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSort($event));
        });
        \u0275\u0275text(44, "Start date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "th", 24);
        \u0275\u0275listener("sort", function AdvancedtableComponent_Template_th_sort_45_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSort($event));
        });
        \u0275\u0275text(46, "Salary");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "th");
        \u0275\u0275text(48, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275repeaterCreate(49, AdvancedtableComponent_For_50_Template, 22, 7, "tbody", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275pipe(51, "async");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 25)(53, "div", 26)(54, "div", 27);
        \u0275\u0275text(55);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "div", 26)(57, "div", 28)(58, "pagination", 29);
        \u0275\u0275pipe(59, "async");
        \u0275\u0275twoWayListener("ngModelChange", function AdvancedtableComponent_Template_pagination_ngModelChange_58_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.service.page, $event) || (ctx.service.page = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275template(60, AdvancedtableComponent_ng_template_60_Template, 19, 0, "ng-template", 30, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(14);
        \u0275\u0275twoWayProperty("ngModel", ctx.service.pageSize);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", 10);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngValue", 25);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngValue", 50);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngValue", 100);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.service.searchTerm);
        \u0275\u0275advance(20);
        \u0275\u0275repeater(\u0275\u0275pipeBind1(51, 12, ctx.tables$));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate3("Showing ", ctx.service.startIndex, " to ", ctx.service.endIndex, " of ", ctx.service.totalRecords, " entries ");
        \u0275\u0275advance(3);
        \u0275\u0275property("totalItems", \u0275\u0275pipeBind1(59, 14, ctx.total$));
        \u0275\u0275twoWayProperty("ngModel", ctx.service.page);
      }
    }, dependencies: [PagetitleComponent, CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, PaginationModule, PaginationComponent, AdvancedSortableDirective, BsDropdownModule, BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective, AsyncPipe], styles: ['\n\n@media all {\n  body[_ngcontent-%COMP%] {\n    overflow: auto !important;\n    width: 100% !important;\n  }\n  html[_ngcontent-%COMP%], \n   body[_ngcontent-%COMP%] {\n    background-color: #e4e5e6;\n  }\n  html[_ngcontent-%COMP%] {\n    position: relative;\n    min-height: 100%;\n  }\n  .card[_ngcontent-%COMP%] {\n    border-radius: 4px;\n  }\n  .card-header[_ngcontent-%COMP%]:first-child {\n    border-radius: 4px 4px 0px 0px;\n  }\n  html[_ngcontent-%COMP%], \n   body[_ngcontent-%COMP%] {\n    font-family: "Roboto", sans-serif;\n    font-weight: 400;\n    font-size: 13px;\n  }\n  body[_ngcontent-%COMP%] {\n    padding-top: 52px;\n  }\n  input[_ngcontent-%COMP%], \n   textarea[_ngcontent-%COMP%], \n   select[_ngcontent-%COMP%] {\n    font-family: "Roboto", sans-serif;\n  }\n  .row[_ngcontent-%COMP%] {\n    margin-right: -8px;\n    margin-left: -8px;\n  }\n  .col[_ngcontent-%COMP%], \n   .col-1[_ngcontent-%COMP%], \n   .col-10[_ngcontent-%COMP%], \n   .col-11[_ngcontent-%COMP%], \n   .col-12[_ngcontent-%COMP%], \n   .col-2[_ngcontent-%COMP%], \n   .col-3[_ngcontent-%COMP%], \n   .col-4[_ngcontent-%COMP%], \n   .col-5[_ngcontent-%COMP%], \n   .col-6[_ngcontent-%COMP%], \n   .col-7[_ngcontent-%COMP%], \n   .col-8[_ngcontent-%COMP%], \n   .col-9[_ngcontent-%COMP%], \n   .col-auto[_ngcontent-%COMP%], \n   .col-lg[_ngcontent-%COMP%], \n   .col-lg-1[_ngcontent-%COMP%], \n   .col-lg-10[_ngcontent-%COMP%], \n   .col-lg-11[_ngcontent-%COMP%], \n   .col-lg-12[_ngcontent-%COMP%], \n   .col-lg-2[_ngcontent-%COMP%], \n   .col-lg-3[_ngcontent-%COMP%], \n   .col-lg-4[_ngcontent-%COMP%], \n   .col-lg-5[_ngcontent-%COMP%], \n   .col-lg-6[_ngcontent-%COMP%], \n   .col-lg-7[_ngcontent-%COMP%], \n   .col-lg-8[_ngcontent-%COMP%], \n   .col-lg-9[_ngcontent-%COMP%], \n   .col-lg-auto[_ngcontent-%COMP%], \n   .col-md[_ngcontent-%COMP%], \n   .col-md-1[_ngcontent-%COMP%], \n   .col-md-10[_ngcontent-%COMP%], \n   .col-md-11[_ngcontent-%COMP%], \n   .col-md-12[_ngcontent-%COMP%], \n   .col-md-2[_ngcontent-%COMP%], \n   .col-md-3[_ngcontent-%COMP%], \n   .col-md-4[_ngcontent-%COMP%], \n   .col-md-5[_ngcontent-%COMP%], \n   .col-md-6[_ngcontent-%COMP%], \n   .col-md-7[_ngcontent-%COMP%], \n   .col-md-8[_ngcontent-%COMP%], \n   .col-md-9[_ngcontent-%COMP%], \n   .col-md-auto[_ngcontent-%COMP%], \n   .col-sm[_ngcontent-%COMP%], \n   .col-sm-1[_ngcontent-%COMP%], \n   .col-sm-10[_ngcontent-%COMP%], \n   .col-sm-11[_ngcontent-%COMP%], \n   .col-sm-12[_ngcontent-%COMP%], \n   .col-sm-2[_ngcontent-%COMP%], \n   .col-sm-3[_ngcontent-%COMP%], \n   .col-sm-4[_ngcontent-%COMP%], \n   .col-sm-5[_ngcontent-%COMP%], \n   .col-sm-6[_ngcontent-%COMP%], \n   .col-sm-7[_ngcontent-%COMP%], \n   .col-sm-8[_ngcontent-%COMP%], \n   .col-sm-9[_ngcontent-%COMP%], \n   .col-sm-auto[_ngcontent-%COMP%], \n   .col-xl[_ngcontent-%COMP%], \n   .col-xl-1[_ngcontent-%COMP%], \n   .col-xl-10[_ngcontent-%COMP%], \n   .col-xl-11[_ngcontent-%COMP%], \n   .col-xl-12[_ngcontent-%COMP%], \n   .col-xl-2[_ngcontent-%COMP%], \n   .col-xl-3[_ngcontent-%COMP%], \n   .col-xl-4[_ngcontent-%COMP%], \n   .col-xl-5[_ngcontent-%COMP%], \n   .col-xl-6[_ngcontent-%COMP%], \n   .col-xl-7[_ngcontent-%COMP%], \n   .col-xl-8[_ngcontent-%COMP%], \n   .col-xl-9[_ngcontent-%COMP%], \n   .col-xl-auto[_ngcontent-%COMP%] {\n    padding-right: 8px;\n    padding-left: 8px;\n  }\n  .card-header[_ngcontent-%COMP%] {\n    background-color: #f0f3f5;\n    border-bottom: 1px solid #c8ced3;\n    font-size: 13px;\n    font-weight: 600;\n    color: #464646;\n    text-transform: uppercase;\n    padding: 0.75rem 8px;\n  }\n  .cnstr-record[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    padding: 0.45rem 0.2rem;\n    font-size: 13px;\n    border-bottom-width: 0px !important;\n  }\n  .cnstr-record[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    background: #f0f3f5;\n  }\n  .cnstr-record[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    font-size: 13px;\n    padding: 0px 0rem 0px 0.2rem;\n    height: calc(2rem + 2px);\n  }\n  .cnstr-record[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n    padding-left: 0.05rem;\n  }\n  .cnstr-record[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n   .cnstr-record[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    vertical-align: middle;\n  }\n  .cnstr-record[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.3rem;\n  }\n  .cnstr-record[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    margin: 0px;\n  }\n  .wp-50[_ngcontent-%COMP%] {\n    width: 50px;\n  }\n  .wp-60[_ngcontent-%COMP%] {\n    width: 60px;\n  }\n  .wp-70[_ngcontent-%COMP%] {\n    width: 70px;\n  }\n  .wp-80[_ngcontent-%COMP%] {\n    width: 80px;\n  }\n  .wp-90[_ngcontent-%COMP%] {\n    width: 90px;\n  }\n  .wp-100[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n  .mw-auto[_ngcontent-%COMP%] {\n    min-width: inherit;\n  }\n  .expand-row[_ngcontent-%COMP%] {\n    width: 100%;\n    border: solid 1px #596269;\n    display: inline-block;\n    border-radius: 3px;\n    width: 16px;\n    height: 16px;\n    line-height: 16px;\n    vertical-align: top;\n    background: #596269;\n    color: #ffffff !important;\n  }\n  .expand-row[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n  .expand-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    vertical-align: top;\n    position: relative;\n    top: 2px;\n  }\n  .sub-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 12px;\n  }\n  .sub-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    background: #efefef;\n  }\n  .no-bg[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    background: inherit;\n  }\n  .mw-100[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=advancedtable.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdvancedtableComponent, [{
    type: Component,
    args: [{ selector: "app-advancedtable", providers: [AdvancedService, DecimalPipe], imports: [PagetitleComponent, CommonModule, FormsModule, PaginationModule, AdvancedSortableDirective, BsDropdownModule], template: `<div class="container-fluid">\r
  <app-page-title title="Advanced Table" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
  <div class="row">\r
    <div class="col-12">\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title">Advanced Data Table</h4>\r
          <p class="card-sub-title">\r
            Example of datatable.\r
          </p>\r
          <div class="row mb-md-2">\r
            <div class="col-sm-12 col-md-6">\r
              <div class="dataTables_length" id="tickets-table_length"><label class="d-inline-flex align-items-center">Show\r
                  <select name="tickets-table_length" aria-controls="tickets-table" name="pageSize" [(ngModel)]="service.pageSize" class="form-control form-control-sm mx-2">\r
                    <option [ngValue]="10">10</option>\r
                    <option [ngValue]="25">25</option>\r
                    <option [ngValue]="50">50</option>\r
                    <option [ngValue]="100">100</option>\r
                  </select> entries</label></div>\r
            </div>\r
            <!-- Search -->\r
            <div class="col-sm-12 col-md-6">\r
              <div id="tickets-table_filter" class="dataTables_filter text-md-end"><label class="d-inline-flex align-items-center">Search:\r
                  <input type="text" name="searchTerm" class="form-control form-control-sm ms-2" aria-controls="tickets-table" [(ngModel)]="service.searchTerm"></label></div>\r
            </div>\r
            <!-- End search -->\r
          </div>\r
          <!-- Table -->\r
          <div class="table-responsive">\r
            <table id="basic-datatable" class="table table-bordered dt-responsive nowrap datatables no-footer dtr-inline">\r
              <thead>\r
                <tr>\r
                  <th></th>\r
                  <th sortable="name" (sort)="onSort($event)">Name</th>\r
                  <th sortable="position" (sort)="onSort($event)">Position</th>\r
                  <th sortable="office" (sort)="onSort($event)">Office</th>\r
                  <th sortable="age" (sort)="onSort($event)">Age</th>\r
                  <th sortable="date" (sort)="onSort($event)">Start date</th>\r
                  <th sortable="salary" (sort)="onSort($event)">Salary</th>\r
                  <th>Actions</th>\r
                </tr>\r
              </thead>\r
              @for(table of tables$ | async;track $index){\r
              <tbody>\r
                <tr>\r
                  <td align="center">\r
                    <a class="expand-row" (click)="changeValue($index)">\r
                      +\r
                    </a>\r
                  </td>\r
                  <td>{{table.name}}</td>\r
                  <td>{{table.position}} </td>\r
                  <td>{{table.office}}</td>\r
                  <td>{{table.age}} </td>\r
                  <td>{{table.date}}</td>\r
                  <td>{{table.salary}}</td>\r
                  <td>\r
                    <div class="dropdown" dropdown placement="bottom-left">\r
                      <i class="mdi mdi-dots-vertical dropdown-toggle" dropdownToggle data-toggle="dropdown" aria-expanded="true"></i>\r
                      <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>\r
                        <a class="dropdown-item" href="javascript: void(0);"><i class="mdi mdi-plus"></i>Add</a>\r
                        <a class="dropdown-item" href="javascript: void(0);"><i class="mdi mdi-account-edit"></i>Edit</a>\r
                      </div>\r
                    </div>\r
                  </td>\r
                </tr>\r
                @if(!hideme[$index]){\r
                <tr class="sub-table no-bg">\r
                  <td align="center"> </td>\r
                  <td colspan="15" class="p-0">\r
                    <table class="table mb-0 table-striped">\r
                      <thead class="bg-dark text-white">\r
                        <tr>\r
                          <th>CountryName</th>\r
                          <th>Price/Unit</th>\r
                          <th>Sales Account</th>\r
                          <th>Buy Account</th>\r
\r
                        </tr>\r
                      </thead>\r
                      <tbody>\r
                        @for(table of tables$ | async;track $index){\r
                        <tr>\r
                          <td>{{table.name}}</td>\r
                          <td>{{table.name}}</td>\r
                          <td>{{table.name}}</td>\r
                          <td>{{table.name}}</td>\r
                        </tr>\r
                        }\r
                      </tbody>\r
                    </table>\r
                  </td>\r
                </tr>}\r
              </tbody>}\r
            </table>\r
          </div>\r
          <!-- End table -->\r
          <div class="row justify-content-md-between align-items-md-center mt-2">\r
            <div class="col-sm-12 col-md-5">\r
              <div class="dataTables_info mb-2" id="tickets-table_info" role="status" aria-live="polite">Showing\r
                {{service.startIndex}} to\r
                {{service.endIndex}} of {{service.totalRecords}}\r
                entries\r
              </div>\r
            </div>\r
            <!-- Pagination -->\r
            <div class="col-sm-12 col-md-5">\r
              <div class="text-md-right float-md-end pagination-rounded">\r
                <pagination [totalItems]="total$ | async" [(ngModel)]="service.page">\r
                </pagination>\r
              </div>\r
            </div>\r
            <!-- End Pagination -->\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
<ng-template #content role="document" let-modal>\r
  <div class="modal-header">\r
    <h5 class="modal-title mt-0">Modal Heading</h5>\r
    <button type="button" class="close" aria-hidden="true" (click)="modal.dismiss('Cross click')">\xD7</button>\r
  </div>\r
  <div class="modal-body">\r
    <h5>Overflowing text to show scroll behavior</h5>\r
    <p>Cras mattis consectetur purus sit amet fermentum.\r
      Cras justo odio, dapibus ac facilisis in,\r
      egestas eget quam. Morbi leo risus, porta ac\r
      consectetur ac, vestibulum at eros.</p>\r
    <p>Praesent commodo cursus magna, vel scelerisque\r
      nisl consectetur et. Vivamus sagittis lacus vel\r
      augue laoreet rutrum faucibus dolor auctor.</p>\r
    <p>Aenean lacinia bibendum nulla sed consectetur.\r
      Praesent commodo cursus magna, vel scelerisque\r
      nisl consectetur et. Donec sed odio dui. Donec\r
      ullamcorper nulla non metus auctor\r
      fringilla.</p>\r
  </div>\r
  <div class="modal-footer">\r
    <button type="button" class="btn btn-light" (click)="modal.close('Close click')">Close</button>\r
    <button type="button" class="btn btn-primary">Save changes</button>\r
  </div>\r
</ng-template>`, styles: ['/* src/app/pages/tables/advancedtable/advancedtable.component.scss */\n@media all {\n  body {\n    overflow: auto !important;\n    width: 100% !important;\n  }\n  html,\n  body {\n    background-color: #e4e5e6;\n  }\n  html {\n    position: relative;\n    min-height: 100%;\n  }\n  .card {\n    border-radius: 4px;\n  }\n  .card-header:first-child {\n    border-radius: 4px 4px 0px 0px;\n  }\n  html,\n  body {\n    font-family: "Roboto", sans-serif;\n    font-weight: 400;\n    font-size: 13px;\n  }\n  body {\n    padding-top: 52px;\n  }\n  input,\n  textarea,\n  select {\n    font-family: "Roboto", sans-serif;\n  }\n  .row {\n    margin-right: -8px;\n    margin-left: -8px;\n  }\n  .col,\n  .col-1,\n  .col-10,\n  .col-11,\n  .col-12,\n  .col-2,\n  .col-3,\n  .col-4,\n  .col-5,\n  .col-6,\n  .col-7,\n  .col-8,\n  .col-9,\n  .col-auto,\n  .col-lg,\n  .col-lg-1,\n  .col-lg-10,\n  .col-lg-11,\n  .col-lg-12,\n  .col-lg-2,\n  .col-lg-3,\n  .col-lg-4,\n  .col-lg-5,\n  .col-lg-6,\n  .col-lg-7,\n  .col-lg-8,\n  .col-lg-9,\n  .col-lg-auto,\n  .col-md,\n  .col-md-1,\n  .col-md-10,\n  .col-md-11,\n  .col-md-12,\n  .col-md-2,\n  .col-md-3,\n  .col-md-4,\n  .col-md-5,\n  .col-md-6,\n  .col-md-7,\n  .col-md-8,\n  .col-md-9,\n  .col-md-auto,\n  .col-sm,\n  .col-sm-1,\n  .col-sm-10,\n  .col-sm-11,\n  .col-sm-12,\n  .col-sm-2,\n  .col-sm-3,\n  .col-sm-4,\n  .col-sm-5,\n  .col-sm-6,\n  .col-sm-7,\n  .col-sm-8,\n  .col-sm-9,\n  .col-sm-auto,\n  .col-xl,\n  .col-xl-1,\n  .col-xl-10,\n  .col-xl-11,\n  .col-xl-12,\n  .col-xl-2,\n  .col-xl-3,\n  .col-xl-4,\n  .col-xl-5,\n  .col-xl-6,\n  .col-xl-7,\n  .col-xl-8,\n  .col-xl-9,\n  .col-xl-auto {\n    padding-right: 8px;\n    padding-left: 8px;\n  }\n  .card-header {\n    background-color: #f0f3f5;\n    border-bottom: 1px solid #c8ced3;\n    font-size: 13px;\n    font-weight: 600;\n    color: #464646;\n    text-transform: uppercase;\n    padding: 0.75rem 8px;\n  }\n  .cnstr-record th {\n    white-space: nowrap;\n    padding: 0.45rem 0.2rem;\n    font-size: 13px;\n    border-bottom-width: 0px !important;\n  }\n  .cnstr-record thead {\n    background: #f0f3f5;\n  }\n  .cnstr-record .form-control {\n    font-size: 13px;\n    padding: 0px 0rem 0px 0.2rem;\n    height: calc(2rem + 2px);\n  }\n  .cnstr-record select.form-control {\n    padding-left: 0.05rem;\n  }\n  .cnstr-record .table td,\n  .cnstr-record .table th {\n    vertical-align: middle;\n  }\n  .cnstr-record .table td {\n    padding: 0.3rem;\n  }\n  .cnstr-record .table td h4 {\n    margin: 0px;\n  }\n  .wp-50 {\n    width: 50px;\n  }\n  .wp-60 {\n    width: 60px;\n  }\n  .wp-70 {\n    width: 70px;\n  }\n  .wp-80 {\n    width: 80px;\n  }\n  .wp-90 {\n    width: 90px;\n  }\n  .wp-100 {\n    width: 100px;\n  }\n  .mw-auto {\n    min-width: inherit;\n  }\n  .expand-row {\n    width: 100%;\n    border: solid 1px #596269;\n    display: inline-block;\n    border-radius: 3px;\n    width: 16px;\n    height: 16px;\n    line-height: 16px;\n    vertical-align: top;\n    background: #596269;\n    color: #ffffff !important;\n  }\n  .expand-row:hover {\n    cursor: pointer;\n  }\n  .expand-row img {\n    vertical-align: top;\n    position: relative;\n    top: 2px;\n  }\n  .sub-table th {\n    font-weight: 400;\n    font-size: 12px;\n  }\n  .sub-table td {\n    background: #efefef;\n  }\n  .no-bg td {\n    background: inherit;\n  }\n  .mw-100 {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=advancedtable.component.css.map */\n'] }]
  }], () => [{ type: AdvancedService }], { headers: [{
    type: ViewChildren,
    args: [AdvancedSortableDirective]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdvancedtableComponent, { className: "AdvancedtableComponent", filePath: "src/app/pages/tables/advancedtable/advancedtable.component.ts", lineNumber: 28 });
})();

// src/app/pages/tables/tables-routing.module.ts
var routes = [
  {
    path: "basic",
    component: BasicComponent
  },
  {
    path: "advanced",
    component: AdvancedtableComponent
  }
];
var TablesRoutingModule = class _TablesRoutingModule {
  static {
    this.\u0275fac = function TablesRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TablesRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TablesRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TablesRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/pages/tables/tables.module.ts
var TablesModule = class _TablesModule {
  static {
    this.\u0275fac = function TablesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TablesModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TablesModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      TablesRoutingModule,
      PaginationModule.forRoot(),
      TypeaheadModule.forRoot(),
      BsDropdownModule.forRoot(),
      FormsModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TablesModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        TablesRoutingModule,
        PaginationModule.forRoot(),
        TypeaheadModule.forRoot(),
        BsDropdownModule.forRoot(),
        FormsModule
      ]
    }]
  }], null, null);
})();

export {
  TablesModule
};
//# sourceMappingURL=chunk-RBDHDKL4.js.map
