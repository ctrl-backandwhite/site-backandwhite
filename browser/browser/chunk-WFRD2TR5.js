import {
  addJoblist,
  fetchCandidatelistData,
  fetchJobApplyData,
  fetchJobgridData,
  fetchJoblistData,
  updateJoblist
} from "./chunk-7HY25OZM.js";
import {
  CollapseDirective,
  CollapseModule
} from "./chunk-3GL362SR.js";
import {
  require_sweetalert2_all
} from "./chunk-FDXGDKOB.js";
import {
  BsDatepickerDirective,
  BsDatepickerInputDirective,
  BsDatepickerModule
} from "./chunk-C3TIYFCT.js";
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
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  RequiredValidator,
  SelectControlValueAccessor,
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
  RouterLink,
  RouterModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
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
  ɵɵtwoWayProperty
} from "./chunk-BM6E27KQ.js";
import {
  __commonJS,
  __toESM
} from "./chunk-H6NRAODO.js";

// node_modules/lodash/lodash.js
var require_lodash = __commonJS({
  "node_modules/lodash/lodash.js"(exports, module) {
    (function() {
      var undefined;
      var VERSION = "4.17.23";
      var LARGE_ARRAY_SIZE = 200;
      var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_MEMOIZE_SIZE = 500;
      var PLACEHOLDER = "__lodash_placeholder__";
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
      var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [
        ["ary", WRAP_ARY_FLAG],
        ["bind", WRAP_BIND_FLAG],
        ["bindKey", WRAP_BIND_KEY_FLAG],
        ["curry", WRAP_CURRY_FLAG],
        ["curryRight", WRAP_CURRY_RIGHT_FLAG],
        ["flip", WRAP_FLIP_FLAG],
        ["partial", WRAP_PARTIAL_FLAG],
        ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
        ["rearg", WRAP_REARG_FLAG]
      ];
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrimStart = /^\s+/;
      var reWhitespace = /\s/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reApos = RegExp(rsApos, "g");
      var reComboMark = RegExp(rsCombo, "g");
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
        rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
        rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
        rsUpper + "+" + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
      ].join("|"), "g");
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        // Latin-1 Supplement block.
        "\xC0": "A",
        "\xC1": "A",
        "\xC2": "A",
        "\xC3": "A",
        "\xC4": "A",
        "\xC5": "A",
        "\xE0": "a",
        "\xE1": "a",
        "\xE2": "a",
        "\xE3": "a",
        "\xE4": "a",
        "\xE5": "a",
        "\xC7": "C",
        "\xE7": "c",
        "\xD0": "D",
        "\xF0": "d",
        "\xC8": "E",
        "\xC9": "E",
        "\xCA": "E",
        "\xCB": "E",
        "\xE8": "e",
        "\xE9": "e",
        "\xEA": "e",
        "\xEB": "e",
        "\xCC": "I",
        "\xCD": "I",
        "\xCE": "I",
        "\xCF": "I",
        "\xEC": "i",
        "\xED": "i",
        "\xEE": "i",
        "\xEF": "i",
        "\xD1": "N",
        "\xF1": "n",
        "\xD2": "O",
        "\xD3": "O",
        "\xD4": "O",
        "\xD5": "O",
        "\xD6": "O",
        "\xD8": "O",
        "\xF2": "o",
        "\xF3": "o",
        "\xF4": "o",
        "\xF5": "o",
        "\xF6": "o",
        "\xF8": "o",
        "\xD9": "U",
        "\xDA": "U",
        "\xDB": "U",
        "\xDC": "U",
        "\xF9": "u",
        "\xFA": "u",
        "\xFB": "u",
        "\xFC": "u",
        "\xDD": "Y",
        "\xFD": "y",
        "\xFF": "y",
        "\xC6": "Ae",
        "\xE6": "ae",
        "\xDE": "Th",
        "\xFE": "th",
        "\xDF": "ss",
        // Latin Extended-A block.
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010A": "C",
        "\u010C": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010B": "c",
        "\u010D": "c",
        "\u010E": "D",
        "\u0110": "D",
        "\u010F": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011A": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011B": "e",
        "\u011C": "G",
        "\u011E": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011D": "g",
        "\u011F": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012A": "I",
        "\u012C": "I",
        "\u012E": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012B": "i",
        "\u012D": "i",
        "\u012F": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013B": "L",
        "\u013D": "L",
        "\u013F": "L",
        "\u0141": "L",
        "\u013A": "l",
        "\u013C": "l",
        "\u013E": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014A": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014B": "n",
        "\u014C": "O",
        "\u014E": "O",
        "\u0150": "O",
        "\u014D": "o",
        "\u014F": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015A": "S",
        "\u015C": "S",
        "\u015E": "S",
        "\u0160": "S",
        "\u015B": "s",
        "\u015D": "s",
        "\u015F": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016A": "U",
        "\u016C": "U",
        "\u016E": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016B": "u",
        "\u016D": "u",
        "\u016F": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017B": "Z",
        "\u017D": "Z",
        "\u017A": "z",
        "\u017C": "z",
        "\u017E": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017F": "s"
      };
      var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      };
      var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var freeParseFloat = parseFloat, freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = (function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      })();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEvery(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }
      function arrayIncludesWith(array, value, comparator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      var asciiSize = baseProperty("length");
      function asciiToArray(string) {
        return string.split("");
      }
      function asciiWords(string) {
        return string.match(reAsciiWord) || [];
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection2) {
          if (predicate(value, key, collection2)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
      }
      function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (comparator(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN;
      }
      function baseProperty(key) {
        return function(object) {
          return object == null ? undefined : object[key];
        };
      }
      function basePropertyOf(object) {
        return function(key) {
          return object == null ? undefined : object[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
      function baseSum(array, iteratee) {
        var result, index = -1, length = array.length;
        while (++index < length) {
          var current = iteratee(array[index]);
          if (current !== undefined) {
            result = result === undefined ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object, props) {
        return arrayMap(props, function(key) {
          return [key, object[key]];
        });
      }
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function baseValues(object, props) {
        return arrayMap(props, function(key) {
          return object[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function countHolders(array, placeholder) {
        var length = array.length, result = 0;
        while (length--) {
          if (array[length] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr];
      }
      function getValue(object, key) {
        return object == null ? undefined : object[key];
      }
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
      }
      function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function replaceHolders(array, placeholder) {
        var index = -1, length = array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (value === placeholder || value === PLACEHOLDER) {
            array[index] = PLACEHOLDER;
            result[resIndex++] = index;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      function setToPairs(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = [value, value];
        });
        return result;
      }
      function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--) {
          if (array[index] === value) {
            return index;
          }
        }
        return index;
      }
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
      }
      var runInContext = (function runInContext2(context) {
        context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
        var Array2 = context.Array, Date = context.Date, Error = context.Error, Function2 = context.Function, Math = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String = context.String, TypeError = context.TypeError;
        var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
        var coreJsData = context["__core-js_shared__"];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = (function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        })();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object2);
        var oldDash = root._;
        var reIsNative = RegExp2(
          "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        );
        var Buffer = moduleExports ? context.Buffer : undefined, Symbol = context.Symbol, Uint8Array = context.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined, symIterator = Symbol ? Symbol.iterator : undefined, symToStringTag = Symbol ? Symbol.toStringTag : undefined;
        var defineProperty = (function() {
          try {
            var func = getNative(Object2, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e) {
          }
        })();
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date && Date.now !== root.Date.now && Date.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        var nativeCeil = Math.ceil, nativeFloor = Math.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math.max, nativeMin = Math.min, nativeNow = Date.now, nativeParseInt = context.parseInt, nativeRandom = Math.random, nativeReverse = arrayProto.reverse;
        var DataView = getNative(context, "DataView"), Map = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
        var metaMap = WeakMap && new WeakMap();
        var realNames = {};
        var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
        var symbolProto = Symbol ? Symbol.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined, symbolToString = symbolProto ? symbolProto.toString : undefined;
        function lodash(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, "__wrapped__")) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        var baseCreate = /* @__PURE__ */ (function() {
          function object() {
          }
          return function(proto) {
            if (!isObject(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object.prototype = proto;
            var result2 = new object();
            object.prototype = undefined;
            return result2;
          };
        })();
        function baseLodash() {
        }
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined;
        }
        lodash.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "escape": reEscape,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "evaluate": reEvaluate,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "interpolate": reInterpolate,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          "variable": "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          "imports": {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            "_": lodash
          }
        };
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result2 = new LazyWrapper(this.__wrapped__);
          result2.__actions__ = copyArray(this.__actions__);
          result2.__dir__ = this.__dir__;
          result2.__filtered__ = this.__filtered__;
          result2.__iteratees__ = copyArray(this.__iteratees__);
          result2.__takeCount__ = this.__takeCount__;
          result2.__views__ = copyArray(this.__views__);
          return result2;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result2 = new LazyWrapper(this);
            result2.__dir__ = -1;
            result2.__filtered__ = true;
          } else {
            result2 = this.clone();
            result2.__dir__ *= -1;
          }
          return result2;
        }
        function lazyValue() {
          var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length && takeCount == length) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result2 = [];
          outer:
            while (length-- && resIndex < takeCount) {
              index += dir;
              var iterIndex = -1, value = array[index];
              while (++iterIndex < iterLength) {
                var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
                if (type == LAZY_MAP_FLAG) {
                  value = computed;
                } else if (!computed) {
                  if (type == LAZY_FILTER_FLAG) {
                    continue outer;
                  } else {
                    break outer;
                  }
                }
              }
              result2[resIndex++] = value;
            }
          return result2;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        function hashDelete(key) {
          var result2 = this.has(key) && delete this.__data__[key];
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result2 = data[key];
            return result2 === HASH_UNDEFINED ? undefined : result2;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
          return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        function listCacheDelete(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          --this.size;
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          return index < 0 ? undefined : data[index][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash(),
            "map": new (Map || ListCache)(),
            "string": new Hash()
          };
        }
        function mapCacheDelete(key) {
          var result2 = getMapData(this, key)["delete"](key);
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          var data = getMapData(this, key), size2 = data.size;
          data.set(key, value);
          this.size += data.size == size2 ? 0 : 1;
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values2) {
          var index = -1, length = values2 == null ? 0 : values2.length;
          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values2[index]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        function stackDelete(key) {
          var data = this.__data__, result2 = data["delete"](key);
          this.size = data.size;
          return result2;
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String) : [], length = result2.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
            isIndex(key, length)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function arraySample(array) {
          var length = array.length;
          return length ? array[baseRandom(0, length - 1)] : undefined;
        }
        function arraySampleSize(array, n) {
          return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
        }
        function arrayShuffle(array) {
          return shuffleSelf(copyArray(array));
        }
        function assignMergeValue(object, key, value) {
          if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee2, accumulator) {
          baseEach(collection, function(value, key, collection2) {
            setter(accumulator, value, iteratee2(value), collection2);
          });
          return accumulator;
        }
        function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object);
        }
        function baseAssignIn(object, source) {
          return object && copyObject(source, keysIn(source), object);
        }
        function baseAssignValue(object, key, value) {
          if (key == "__proto__" && defineProperty) {
            defineProperty(object, key, {
              "configurable": true,
              "enumerable": true,
              "value": value,
              "writable": true
            });
          } else {
            object[key] = value;
          }
        }
        function baseAt(object, paths) {
          var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
          while (++index < length) {
            result2[index] = skip ? undefined : get(object, paths[index]);
          }
          return result2;
        }
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        function baseClone(value, bitmask, customizer, key, object, stack) {
          var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
          if (customizer) {
            result2 = object ? customizer(value, key, object, stack) : customizer(value);
          }
          if (result2 !== undefined) {
            return result2;
          }
          if (!isObject(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result2 = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result2);
            }
          } else {
            var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object) {
              result2 = isFlat || isFunc ? {} : initCloneObject(value);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object ? value : {};
              }
              result2 = initCloneByTag(value, tag, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result2);
          if (isSet(value)) {
            value.forEach(function(subValue) {
              result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
          } else if (isMap(value)) {
            value.forEach(function(subValue, key2) {
              result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
          var props = isArr ? undefined : keysFunc(value);
          arrayEach(props || value, function(subValue, key2) {
            if (props) {
              key2 = subValue;
              subValue = value[key2];
            }
            assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
          return result2;
        }
        function baseConforms(source) {
          var props = keys(source);
          return function(object) {
            return baseConformsTo(object, source, props);
          };
        }
        function baseConformsTo(object, source, props) {
          var length = props.length;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (length--) {
            var key = props[length], predicate = source[key], value = object[key];
            if (value === undefined && !(key in object) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        function baseDelay(func, wait, args) {
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return setTimeout2(function() {
            func.apply(undefined, args);
          }, wait);
        }
        function baseDifference(array, values2, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
          if (!length) {
            return result2;
          }
          if (iteratee2) {
            values2 = arrayMap(values2, baseUnary(iteratee2));
          }
          if (comparator) {
            includes2 = arrayIncludesWith;
            isCommon = false;
          } else if (values2.length >= LARGE_ARRAY_SIZE) {
            includes2 = cacheHas;
            isCommon = false;
            values2 = new SetCache(values2);
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var valuesIndex = valuesLength;
                while (valuesIndex--) {
                  if (values2[valuesIndex] === computed) {
                    continue outer;
                  }
                }
                result2.push(value);
              } else if (!includes2(values2, computed, comparator)) {
                result2.push(value);
              }
            }
          return result2;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result2 = true;
          baseEach(collection, function(value, index, collection2) {
            result2 = !!predicate(value, index, collection2);
            return result2;
          });
          return result2;
        }
        function baseExtremum(array, iteratee2, comparator) {
          var index = -1, length = array.length;
          while (++index < length) {
            var value = array[index], current = iteratee2(value);
            if (current != null && (computed === undefined ? current === current && !isSymbol(current) : comparator(current, computed))) {
              var computed = current, result2 = value;
            }
          }
          return result2;
        }
        function baseFill(array, value, start, end) {
          var length = array.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end === undefined || end > length ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array[start++] = value;
          }
          return array;
        }
        function baseFilter(collection, predicate) {
          var result2 = [];
          baseEach(collection, function(value, index, collection2) {
            if (predicate(value, index, collection2)) {
              result2.push(value);
            }
          });
          return result2;
        }
        function baseFlatten(array, depth, predicate, isStrict, result2) {
          var index = -1, length = array.length;
          predicate || (predicate = isFlattenable);
          result2 || (result2 = []);
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result2);
              } else {
                arrayPush(result2, value);
              }
            } else if (!isStrict) {
              result2[result2.length] = value;
            }
          }
          return result2;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object, iteratee2) {
          return object && baseFor(object, iteratee2, keys);
        }
        function baseForOwnRight(object, iteratee2) {
          return object && baseForRight(object, iteratee2, keys);
        }
        function baseFunctions(object, props) {
          return arrayFilter(props, function(key) {
            return isFunction(object[key]);
          });
        }
        function baseGet(object, path) {
          path = castPath(path, object);
          var index = 0, length = path.length;
          while (object != null && index < length) {
            object = object[toKey(path[index++])];
          }
          return index && index == length ? object : undefined;
        }
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result2 = keysFunc(object);
          return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
        }
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
        }
        function baseGt(value, other) {
          return value > other;
        }
        function baseHas(object, key) {
          return object != null && hasOwnProperty.call(object, key);
        }
        function baseHasIn(object, key) {
          return object != null && key in Object2(object);
        }
        function baseInRange(number, start, end) {
          return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee2, comparator) {
          var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
          while (othIndex--) {
            var array = arrays[othIndex];
            if (othIndex && iteratee2) {
              array = arrayMap(array, baseUnary(iteratee2));
            }
            maxLength = nativeMin(array.length, maxLength);
            caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined;
          }
          array = arrays[0];
          var index = -1, seen = caches[0];
          outer:
            while (++index < length && result2.length < maxLength) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
                othIndex = othLength;
                while (--othIndex) {
                  var cache = caches[othIndex];
                  if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                    continue outer;
                  }
                }
                if (seen) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseInverter(object, setter, iteratee2, accumulator) {
          baseForOwn(object, function(value, key, object2) {
            setter(accumulator, iteratee2(value), key, object2);
          });
          return accumulator;
        }
        function baseInvoke(object, path, args) {
          path = castPath(path, object);
          object = parent(object, path);
          var func = object == null ? object : object[toKey(last(path))];
          return func == null ? undefined : apply(func, object, args);
        }
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        function baseIsArrayBuffer(value) {
          return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        function baseIsDate(value) {
          return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length, length = index, noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0], objValue = object[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result2 = customizer(objValue, srcValue, key, object, source, stack);
              }
              if (!(result2 === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        function baseIsRegExp(value) {
          return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        function baseIsSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        function baseIteratee(value) {
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == "object") {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result2 = [];
          for (var key in Object2(object)) {
            if (hasOwnProperty.call(object, key) && key != "constructor") {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseKeysIn(object) {
          if (!isObject(object)) {
            return nativeKeysIn(object);
          }
          var isProto = isPrototype(object), result2 = [];
          for (var key in object) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseLt(value, other) {
          return value < other;
        }
        function baseMap(collection, iteratee2) {
          var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value, key, collection2) {
            result2[++index] = iteratee2(value, key, collection2);
          });
          return result2;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function(object) {
            var objValue = get(object, path);
            return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        function baseMerge(object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return;
          }
          baseFor(source, function(srcValue, key) {
            stack || (stack = new Stack());
            if (isObject(srcValue)) {
              baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined;
              if (newValue === undefined) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          }, keysIn);
        }
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined;
          var isCommon = newValue === undefined;
          if (isCommon) {
            var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject(objValue) || isFunction(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack["delete"](srcValue);
          }
          assignMergeValue(object, key, newValue);
        }
        function baseNth(array, n) {
          var length = array.length;
          if (!length) {
            return;
          }
          n += n < 0 ? length : 0;
          return isIndex(n, length) ? array[n] : undefined;
        }
        function baseOrderBy(collection, iteratees, orders) {
          if (iteratees.length) {
            iteratees = arrayMap(iteratees, function(iteratee2) {
              if (isArray(iteratee2)) {
                return function(value) {
                  return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                };
              }
              return iteratee2;
            });
          } else {
            iteratees = [identity];
          }
          var index = -1;
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          var result2 = baseMap(collection, function(value, key, collection2) {
            var criteria = arrayMap(iteratees, function(iteratee2) {
              return iteratee2(value);
            });
            return { "criteria": criteria, "index": ++index, "value": value };
          });
          return baseSortBy(result2, function(object, other) {
            return compareMultiple(object, other, orders);
          });
        }
        function basePick(object, paths) {
          return basePickBy(object, paths, function(value, path) {
            return hasIn(object, path);
          });
        }
        function basePickBy(object, paths, predicate) {
          var index = -1, length = paths.length, result2 = {};
          while (++index < length) {
            var path = paths[index], value = baseGet(object, path);
            if (predicate(value, path)) {
              baseSet(result2, castPath(path, object), value);
            }
          }
          return result2;
        }
        function basePropertyDeep(path) {
          return function(object) {
            return baseGet(object, path);
          };
        }
        function basePullAll(array, values2, iteratee2, comparator) {
          var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
          if (array === values2) {
            values2 = copyArray(values2);
          }
          if (iteratee2) {
            seen = arrayMap(array, baseUnary(iteratee2));
          }
          while (++index < length) {
            var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
            while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
              if (seen !== array) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0, lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array, index, 1);
              } else {
                baseUnset(array, index);
              }
            }
          }
          return array;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
          while (length--) {
            result2[fromRight ? length : ++index] = start;
            start += step;
          }
          return result2;
        }
        function baseRepeat(string, n) {
          var result2 = "";
          if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
            return result2;
          }
          do {
            if (n % 2) {
              result2 += string;
            }
            n = nativeFloor(n / 2);
            if (n) {
              string += string;
            }
          } while (n);
          return result2;
        }
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + "");
        }
        function baseSample(collection) {
          return arraySample(values(collection));
        }
        function baseSampleSize(collection, n) {
          var array = values(collection);
          return shuffleSelf(array, baseClamp(n, 0, array.length));
        }
        function baseSet(object, path, value, customizer) {
          if (!isObject(object)) {
            return object;
          }
          path = castPath(path, object);
          var index = -1, length = path.length, lastIndex = length - 1, nested = object;
          while (nested != null && ++index < length) {
            var key = toKey(path[index]), newValue = value;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object;
            }
            if (index != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined;
              if (newValue === undefined) {
                newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object;
        }
        var baseSetData = !metaMap ? identity : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty ? identity : function(func, string) {
          return defineProperty(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string),
            "writable": true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values(collection));
        }
        function baseSlice(array, start, end) {
          var index = -1, length = array.length;
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;
          var result2 = Array2(length);
          while (++index < length) {
            result2[index] = array[index + start];
          }
          return result2;
        }
        function baseSome(collection, predicate) {
          var result2;
          baseEach(collection, function(value, index, collection2) {
            result2 = predicate(value, index, collection2);
            return !result2;
          });
          return !!result2;
        }
        function baseSortedIndex(array, value, retHighest) {
          var low = 0, high = array == null ? low : array.length;
          if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1, computed = array[mid];
              if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array, value, identity, retHighest);
        }
        function baseSortedIndexBy(array, value, iteratee2, retHighest) {
          var low = 0, high = array == null ? 0 : array.length;
          if (high === 0) {
            return 0;
          }
          value = iteratee2(value);
          var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed <= value : computed < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array, iteratee2) {
          var index = -1, length = array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
            if (!index || !eq(computed, seen)) {
              var seen = computed;
              result2[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result2;
        }
        function baseToNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          if (isArray(value)) {
            return arrayMap(value, baseToString) + "";
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function baseUniq(array, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
          if (comparator) {
            isCommon = false;
            includes2 = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set2 = iteratee2 ? null : createSet(array);
            if (set2) {
              return setToArray(set2);
            }
            isCommon = false;
            includes2 = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee2 ? [] : result2;
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var seenIndex = seen.length;
                while (seenIndex--) {
                  if (seen[seenIndex] === computed) {
                    continue outer;
                  }
                }
                if (iteratee2) {
                  seen.push(computed);
                }
                result2.push(value);
              } else if (!includes2(seen, computed, comparator)) {
                if (seen !== result2) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseUnset(object, path) {
          path = castPath(path, object);
          var index = -1, length = path.length;
          if (!length) {
            return true;
          }
          var isRootPrimitive = object == null || typeof object !== "object" && typeof object !== "function";
          while (++index < length) {
            var key = path[index];
            if (typeof key !== "string") {
              continue;
            }
            if (key === "__proto__" && !hasOwnProperty.call(object, "__proto__")) {
              return false;
            }
            if (key === "constructor" && index + 1 < length && typeof path[index + 1] === "string" && path[index + 1] === "prototype") {
              if (isRootPrimitive && index === 0) {
                continue;
              }
              return false;
            }
          }
          var obj = parent(object, path);
          return obj == null || delete obj[toKey(last(path))];
        }
        function baseUpdate(object, path, updater, customizer) {
          return baseSet(object, path, updater(baseGet(object, path)), customizer);
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length, index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
          }
          return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        function baseWrapperValue(value, actions) {
          var result2 = value;
          if (result2 instanceof LazyWrapper) {
            result2 = result2.value();
          }
          return arrayReduce(actions, function(result3, action) {
            return action.func.apply(action.thisArg, arrayPush([result3], action.args));
          }, result2);
        }
        function baseXor(arrays, iteratee2, comparator) {
          var length = arrays.length;
          if (length < 2) {
            return length ? baseUniq(arrays[0]) : [];
          }
          var index = -1, result2 = Array2(length);
          while (++index < length) {
            var array = arrays[index], othIndex = -1;
            while (++othIndex < length) {
              if (othIndex != index) {
                result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
        }
        function baseZipObject(props, values2, assignFunc) {
          var index = -1, length = props.length, valsLength = values2.length, result2 = {};
          while (++index < length) {
            var value = index < valsLength ? values2[index] : undefined;
            assignFunc(result2, props[index], value);
          }
          return result2;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == "function" ? value : identity;
        }
        function castPath(value, object) {
          if (isArray(value)) {
            return value;
          }
          return isKey(value, object) ? [value] : stringToPath(toString(value));
        }
        var castRest = baseRest;
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined ? length : end;
          return !start && end >= length ? array : baseSlice(array, start, end);
        }
        var clearTimeout = ctxClearTimeout || function(id) {
          return root.clearTimeout(id);
        };
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
          buffer.copy(result2);
          return result2;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array(result2).set(new Uint8Array(arrayBuffer));
          return result2;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp(regexp) {
          var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result2.lastIndex = regexp.lastIndex;
          return result2;
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
            var othIsDefined = other !== undefined, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object, other, orders) {
          var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
          while (++index < length) {
            var result2 = compareAscending(objCriteria[index], othCriteria[index]);
            if (result2) {
              if (index >= ordersLength) {
                return result2;
              }
              var order = orders[index];
              return result2 * (order == "desc" ? -1 : 1);
            }
          }
          return object.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result2[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result2[leftIndex++] = args[argsIndex++];
          }
          return result2;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result2[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result2[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result2;
        }
        function copyArray(source, array) {
          var index = -1, length = source.length;
          array || (array = Array2(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        function copyObject(source, props, object, customizer) {
          var isNew = !object;
          object || (object = {});
          var index = -1, length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
            if (newValue === undefined) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object, key, newValue);
            } else {
              assignValue(object, key, newValue);
            }
          }
          return object;
        }
        function copySymbols(source, object) {
          return copyObject(source, getSymbols(source), object);
        }
        function copySymbolsIn(source, object) {
          return copyObject(source, getSymbolsIn(source), object);
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee2) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function(object, sources) {
            var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined, guard = length > 2 ? sources[2] : undefined;
            customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined : customizer;
              length = 1;
            }
            object = Object2(object);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object, source, index, customizer);
              }
            }
            return object;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee2) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee2);
            }
            var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee2(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object, iteratee2, keysFunc) {
            var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee2(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function(string) {
            string = toString(string);
            var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function(string) {
            return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
          };
        }
        function createCtor(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
            return isObject(result2) ? result2 : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                undefined,
                args,
                holders,
                undefined,
                undefined,
                arity - length
              );
            }
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object2(collection);
            if (!isArrayLike(collection)) {
              var iteratee2 = getIteratee(predicate, 3);
              collection = keys(collection);
              predicate = function(key) {
                return iteratee2(iterable[key], key, iterable);
              };
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined;
          };
        }
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != "function") {
                throw new TypeError(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value = args[0];
              if (wrapper && args.length == 1 && isArray(value)) {
                return wrapper.plant(value).value();
              }
              var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
              while (++index2 < length) {
                result2 = funcs[index2].call(this, result2);
              }
              return result2;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined : createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length;
            while (index--) {
              args[index] = arguments[index];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                thisArg,
                args,
                newHolders,
                argPos,
                ary2,
                arity - length
              );
            }
            var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary2 < length) {
              args.length = ary2;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function(object, iteratee2) {
            return baseInverter(object, setter, toIteratee(iteratee2), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function(value, other) {
            var result2;
            if (value === undefined && other === undefined) {
              return defaultValue;
            }
            if (value !== undefined) {
              result2 = value;
            }
            if (other !== undefined) {
              if (result2 === undefined) {
                return other;
              }
              if (typeof value == "string" || typeof other == "string") {
                value = baseToString(value);
                other = baseToString(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result2 = operator(value, other);
            }
            return result2;
          };
        }
        function createOver(arrayFunc) {
          return flatRest(function(iteratees) {
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            return baseRest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee2) {
                return apply(iteratee2, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined ? " " : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function(start, end, step) {
            if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
              end = step = undefined;
            }
            start = toFinite(start);
            if (end === undefined) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined ? start < end ? 1 : -1 : toFinite(step);
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function(value, other) {
            if (!(typeof value == "string" && typeof other == "string")) {
              value = toNumber(value);
              other = toNumber(other);
            }
            return operator(value, other);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined, newHoldersRight = isCurry ? undefined : holders, newPartials = isCurry ? partials : undefined, newPartialsRight = isCurry ? undefined : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
          }
          var newData = [
            func,
            bitmask,
            thisArg,
            newPartials,
            newHolders,
            newPartialsRight,
            newHoldersRight,
            argPos,
            ary2,
            arity
          ];
          var result2 = wrapFunc.apply(undefined, newData);
          if (isLaziable(func)) {
            setData(result2, newData);
          }
          result2.placeholder = placeholder;
          return setWrapToString(result2, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math[methodName];
          return function(number, precision) {
            number = toNumber(number);
            precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
            if (precision && nativeIsFinite(number)) {
              var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
              pair = (toString(value) + "e").split("e");
              return +(pair[0] + "e" + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function(values2) {
          return new Set(values2);
        };
        function createToPairs(keysFunc) {
          return function(object) {
            var tag = getTag(object);
            if (tag == mapTag) {
              return mapToArray(object);
            }
            if (tag == setTag) {
              return setToPairs(object);
            }
            return baseToPairs(object, keysFunc(object));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
            partials = holders = undefined;
          }
          ary2 = ary2 === undefined ? ary2 : nativeMax(toInteger(ary2), 0);
          arity = arity === undefined ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials, holdersRight = holders;
            partials = holders = undefined;
          }
          var data = isBindKey ? undefined : getData(func);
          var newData = [
            func,
            bitmask,
            thisArg,
            partials,
            holders,
            partialsRight,
            holdersRight,
            argPos,
            ary2,
            arity
          ];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result2 = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result2 = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result2 = createPartial(func, bitmask, thisArg, partials);
          } else {
            result2 = createHybrid.apply(undefined, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result2, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object) {
          if (objValue === undefined || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            return srcValue;
          }
          return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
          if (isObject(objValue) && isObject(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
            stack["delete"](srcValue);
          }
          return objValue;
        }
        function customOmitClone(value) {
          return isPlainObject(value) ? undefined : value;
        }
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array;
          }
          var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
          stack.set(array, other);
          stack.set(other, array);
          while (++index < arrLength) {
            var arrValue = array[index], othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined) {
              if (compared) {
                continue;
              }
              result2 = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result2 = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result2 = false;
              break;
            }
          }
          stack["delete"](array);
          stack["delete"](other);
          return result2;
        }
        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object, +other);
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case regexpTag:
            case stringTag:
              return object == other + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object, other);
              var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object);
              return result2;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object;
          }
          var result2 = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key], othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result2 = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result2 && !skipCtor) {
            var objCtor = object.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result2 = false;
            }
          }
          stack["delete"](object);
          stack["delete"](other);
          return result2;
        }
        function flatRest(func) {
          return setToString(overRest(func, undefined, flatten), func + "");
        }
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }
        function getAllKeysIn(object) {
          return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
          while (length--) {
            var data = array[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result2;
        }
        function getHolder(func) {
          var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
          return object.placeholder;
        }
        function getIteratee() {
          var result2 = lodash.iteratee || iteratee;
          result2 = result2 === iteratee ? baseIteratee : result2;
          return arguments.length ? result2(arguments[0], arguments[1]) : result2;
        }
        function getMapData(map2, key) {
          var data = map2.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getMatchData(object) {
          var result2 = keys(object), length = result2.length;
          while (length--) {
            var key = result2[length], value = object[key];
            result2[length] = [key, value, isStrictComparable(value)];
          }
          return result2;
        }
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined;
        }
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
          try {
            value[symToStringTag] = undefined;
            var unmasked = true;
          } catch (e) {
          }
          var result2 = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result2;
        }
        var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
          if (object == null) {
            return [];
          }
          object = Object2(object);
          return arrayFilter(nativeGetSymbols(object), function(symbol) {
            return propertyIsEnumerable.call(object, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
          var result2 = [];
          while (object) {
            arrayPush(result2, getSymbols(object));
            object = getPrototype(object);
          }
          return result2;
        };
        var getTag = baseGetTag;
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
          getTag = function(value) {
            var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result2;
          };
        }
        function getView(start, end, transforms) {
          var index = -1, length = transforms.length;
          while (++index < length) {
            var data = transforms[index], size2 = data.size;
            switch (data.type) {
              case "drop":
                start += size2;
                break;
              case "dropRight":
                end -= size2;
                break;
              case "take":
                end = nativeMin(end, start + size2);
                break;
              case "takeRight":
                start = nativeMax(start, end - size2);
                break;
            }
          }
          return { "start": start, "end": end };
        }
        function getWrapDetails(source) {
          var match = source.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object, path, hasFunc) {
          path = castPath(path, object);
          var index = -1, length = path.length, result2 = false;
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result2 = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result2 || ++index != length) {
            return result2;
          }
          length = object == null ? 0 : object.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
        }
        function initCloneArray(array) {
          var length = array.length, result2 = new array.constructor(length);
          if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
            result2.index = array.index;
            result2.input = array.input;
          }
          return result2;
        }
        function initCloneObject(object) {
          return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }
        function initCloneByTag(object, tag, isDeep) {
          var Ctor = object.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object);
            case boolTag:
            case dateTag:
              return new Ctor(+object);
            case dataViewTag:
              return cloneDataView(object, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object, isDeep);
            case mapTag:
              return new Ctor();
            case numberTag:
            case stringTag:
              return new Ctor(object);
            case regexpTag:
              return cloneRegExp(object);
            case setTag:
              return new Ctor();
            case symbolTag:
              return cloneSymbol(object);
          }
        }
        function insertWrapDetails(source, details) {
          var length = details.length;
          if (!length) {
            return source;
          }
          var lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
          details = details.join(length > 2 ? ", " : " ");
          return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
        }
        function isFlattenable(value) {
          return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex(value, length) {
          var type = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
        }
        function isIterateeCall(value, index, object) {
          if (!isObject(object)) {
            return false;
          }
          var type = typeof index;
          if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
            return eq(object[index], value);
          }
          return false;
        }
        function isKey(value, object) {
          if (isArray(value)) {
            return false;
          }
          var type = typeof value;
          if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
        }
        function isKeyable(value) {
          var type = typeof value;
          return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func), other = lodash[funcName];
          if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue && (srcValue !== undefined || key in Object2(object));
          };
        }
        function memoizeCapped(func) {
          var result2 = memoize(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result2.cache;
          return result2;
        }
        function mergeData(data, source) {
          var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function nativeKeysIn(object) {
          var result2 = [];
          if (object != null) {
            for (var key in Object2(object)) {
              result2.push(key);
            }
          }
          return result2;
        }
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }
        function overRest(func, start, transform2) {
          start = nativeMax(start === undefined ? func.length - 1 : start, 0);
          return function() {
            var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array2(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform2(array);
            return apply(func, this, otherArgs);
          };
        }
        function parent(object, path) {
          return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
        }
        function reorder(array, indexes) {
          var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
          while (length--) {
            var index = indexes[length];
            array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
          }
          return array;
        }
        function safeGet(object, key) {
          if (key === "constructor" && typeof object[key] === "function") {
            return;
          }
          if (key == "__proto__") {
            return;
          }
          return object[key];
        }
        var setData = shortOut(baseSetData);
        var setTimeout2 = ctxSetTimeout || function(func, wait) {
          return root.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source = reference + "";
          return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined, arguments);
          };
        }
        function shuffleSelf(array, size2) {
          var index = -1, length = array.length, lastIndex = length - 1;
          size2 = size2 === undefined ? length : size2;
          while (++index < size2) {
            var rand = baseRandom(index, lastIndex), value = array[rand];
            array[rand] = array[index];
            array[index] = value;
          }
          array.length = size2;
          return array;
        }
        var stringToPath = memoizeCapped(function(string) {
          var result2 = [];
          if (string.charCodeAt(0) === 46) {
            result2.push("");
          }
          string.replace(rePropName, function(match, number, quote, subString) {
            result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
          });
          return result2;
        });
        function toKey(value) {
          if (typeof value == "string" || isSymbol(value)) {
            return value;
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {
            }
            try {
              return func + "";
            } catch (e) {
            }
          }
          return "";
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function(pair) {
            var value = "_." + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result2.__actions__ = copyArray(wrapper.__actions__);
          result2.__index__ = wrapper.__index__;
          result2.__values__ = wrapper.__values__;
          return result2;
        }
        function chunk(array, size2, guard) {
          if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined) {
            size2 = 1;
          } else {
            size2 = nativeMax(toInteger(size2), 0);
          }
          var length = array == null ? 0 : array.length;
          if (!length || size2 < 1) {
            return [];
          }
          var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
          while (index < length) {
            result2[resIndex++] = baseSlice(array, index, index += size2);
          }
          return result2;
        }
        function compact(array) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index];
            if (value) {
              result2[resIndex++] = value;
            }
          }
          return result2;
        }
        function concat() {
          var length = arguments.length;
          if (!length) {
            return [];
          }
          var args = Array2(length - 1), array = arguments[0], index = length;
          while (index--) {
            args[index - 1] = arguments[index];
          }
          return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
        }
        var difference = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function(array, values2) {
          var iteratee2 = last(values2);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
        });
        var differenceWith = baseRest(function(array, values2) {
          var comparator = last(values2);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined, comparator) : [];
        });
        function drop(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined ? 1 : toInteger(n);
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function dropRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        function fill(array, value, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array, value, start, end);
        }
        function findIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        function findLastIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== undefined) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        function flatten(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, 1) : [];
        }
        function flattenDeep(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, INFINITY) : [];
        }
        function flattenDepth(array, depth) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          depth = depth === undefined ? 1 : toInteger(depth);
          return baseFlatten(array, depth);
        }
        function fromPairs(pairs) {
          var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
          while (++index < length) {
            var pair = pairs[index];
            result2[pair[0]] = pair[1];
          }
          return result2;
        }
        function head(array) {
          return array && array.length ? array[0] : undefined;
        }
        function indexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseIndexOf(array, value, index);
        }
        function initial(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 0, -1) : [];
        }
        var intersection = baseRest(function(arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee2 === last(mapped)) {
            iteratee2 = undefined;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
        });
        var intersectionWith = baseRest(function(arrays) {
          var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          comparator = typeof comparator == "function" ? comparator : undefined;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined, comparator) : [];
        });
        function join(array, separator) {
          return array == null ? "" : nativeJoin.call(array, separator);
        }
        function last(array) {
          var length = array == null ? 0 : array.length;
          return length ? array[length - 1] : undefined;
        }
        function lastIndexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined) {
            index = toInteger(fromIndex);
            index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
        }
        function nth(array, n) {
          return array && array.length ? baseNth(array, toInteger(n)) : undefined;
        }
        var pull = baseRest(pullAll);
        function pullAll(array, values2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
        }
        function pullAllBy(array, values2, iteratee2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
        }
        function pullAllWith(array, values2, comparator) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined, comparator) : array;
        }
        var pullAt = flatRest(function(array, indexes) {
          var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
          basePullAt(array, arrayMap(indexes, function(index) {
            return isIndex(index, length) ? +index : index;
          }).sort(compareAscending));
          return result2;
        });
        function remove(array, predicate) {
          var result2 = [];
          if (!(array && array.length)) {
            return result2;
          }
          var index = -1, indexes = [], length = array.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result2.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array, indexes);
          return result2;
        }
        function reverse(array) {
          return array == null ? array : nativeReverse.call(array);
        }
        function slice(array, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined ? length : toInteger(end);
          }
          return baseSlice(array, start, end);
        }
        function sortedIndex(array, value) {
          return baseSortedIndex(array, value);
        }
        function sortedIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
        }
        function sortedIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value);
            if (index < length && eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedLastIndex(array, value) {
          return baseSortedIndex(array, value, true);
        }
        function sortedLastIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
        }
        function sortedLastIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value, true) - 1;
            if (eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedUniq(array) {
          return array && array.length ? baseSortedUniq(array) : [];
        }
        function sortedUniqBy(array, iteratee2) {
          return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function tail(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 1, length) : [];
        }
        function take(array, n, guard) {
          if (!(array && array.length)) {
            return [];
          }
          n = guard || n === undefined ? 1 : toInteger(n);
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function takeRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function takeRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        var union = baseRest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
        });
        var unionWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
        });
        function uniq(array) {
          return array && array.length ? baseUniq(array) : [];
        }
        function uniqBy(array, iteratee2) {
          return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function uniqWith(array, comparator) {
          comparator = typeof comparator == "function" ? comparator : undefined;
          return array && array.length ? baseUniq(array, undefined, comparator) : [];
        }
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter(array, function(group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function(index) {
            return arrayMap(array, baseProperty(index));
          });
        }
        function unzipWith(array, iteratee2) {
          if (!(array && array.length)) {
            return [];
          }
          var result2 = unzip(array);
          if (iteratee2 == null) {
            return result2;
          }
          return arrayMap(result2, function(group) {
            return apply(iteratee2, undefined, group);
          });
        }
        var without = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
        });
        var xor = baseRest(function(arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
        });
        var xorWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined;
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values2) {
          return baseZipObject(props || [], values2 || [], assignValue);
        }
        function zipObjectDeep(props, values2) {
          return baseZipObject(props || [], values2 || [], baseSet);
        }
        var zipWith = baseRest(function(arrays) {
          var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined;
          iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined;
          return unzipWith(arrays, iteratee2);
        });
        function chain(value) {
          var result2 = lodash(value);
          result2.__chain__ = true;
          return result2;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = flatRest(function(paths) {
          var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
            return baseAt(object, paths);
          };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            "func": thru,
            "args": [interceptor],
            "thisArg": undefined
          });
          return new LodashWrapper(value, this.__chain__).thru(function(array) {
            if (length && !array.length) {
              array.push(undefined);
            }
            return array;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length, value = done ? undefined : this.__values__[this.__index__++];
          return { "done": done, "value": value };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result2, parent2 = this;
          while (parent2 instanceof baseLodash) {
            var clone2 = wrapperClone(parent2);
            clone2.__index__ = 0;
            clone2.__values__ = undefined;
            if (result2) {
              previous.__wrapped__ = clone2;
            } else {
              result2 = clone2;
            }
            var previous = clone2;
            parent2 = parent2.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result2;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              "func": thru,
              "args": [reverse],
              "thisArg": undefined
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            ++result2[key];
          } else {
            baseAssignValue(result2, key, 1);
          }
        });
        function every(collection, predicate, guard) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), 1);
        }
        function flatMapDeep(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), INFINITY);
        }
        function flatMapDepth(collection, iteratee2, depth) {
          depth = depth === undefined ? 1 : toInteger(depth);
          return baseFlatten(map(collection, iteratee2), depth);
        }
        function forEach(collection, iteratee2) {
          var func = isArray(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function forEachRight(collection, iteratee2) {
          var func = isArray(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee2, 3));
        }
        var groupBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            result2[key].push(value);
          } else {
            baseAssignValue(result2, key, [value]);
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function(collection, path, args) {
          var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value) {
            result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
          });
          return result2;
        });
        var keyBy = createAggregator(function(result2, value, key) {
          baseAssignValue(result2, key, value);
        });
        function map(collection, iteratee2) {
          var func = isArray(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined : orders;
          if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function(result2, value, key) {
          result2[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var func = isArray(collection) ? arraySample : baseSample;
          return func(collection);
        }
        function sampleSize(collection, n, guard) {
          if (guard ? isIterateeCall(collection, n, guard) : n === undefined) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          var func = isArray(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n);
        }
        function shuffle(collection) {
          var func = isArray(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        function size(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        function some(collection, predicate, guard) {
          var func = isArray(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function() {
          return root.Date.now();
        };
        function after(n, func) {
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard) {
          n = guard ? undefined : n;
          n = func && n == null ? func.length : n;
          return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
        }
        function before(n, func) {
          var result2;
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n > 0) {
              result2 = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined;
            }
            return result2;
          };
        }
        var bind = baseRest(function(func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function(object, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined : arity;
          var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
          result2.placeholder = curry.placeholder;
          return result2;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined : arity;
          var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
          result2.placeholder = curryRight.placeholder;
          return result2;
        }
        function debounce(func, wait, options) {
          var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options)) {
            leading = !!options.leading;
            maxing = "maxWait" in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = undefined;
            lastInvokeTime = time;
            result2 = func.apply(thisArg, args);
            return result2;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout2(timerExpired, wait);
            return leading ? invokeFunc(time) : result2;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout2(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined;
            return result2;
          }
          function cancel() {
            if (timerId !== undefined) {
              clearTimeout(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined;
          }
          function flush() {
            return timerId === undefined ? result2 : trailingEdge(now());
          }
          function debounced() {
            var time = now(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout(timerId);
                timerId = setTimeout2(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined) {
              timerId = setTimeout2(timerExpired, wait);
            }
            return result2;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = baseRest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function(func, wait, args) {
          return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result2 = func.apply(this, args);
            memoized.cache = cache.set(key, result2) || cache;
            return result2;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = castRest(function(func, transforms) {
          transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function(args) {
            var index = -1, length = nativeMin(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
        });
        var partialRight = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
        });
        var rearg = flatRest(function(func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
        });
        function rest(func, start) {
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          start = start === undefined ? start : toInteger(start);
          return baseRest(func, start);
        }
        function spread(func, start) {
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          start = start == null ? 0 : nativeMax(toInteger(start), 0);
          return baseRest(function(args) {
            var array = args[start], otherArgs = castSlice(args, 0, start);
            if (array) {
              arrayPush(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait, options) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (isObject(options)) {
            leading = "leading" in options ? !!options.leading : leading;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value, wrapper) {
          return partial(castFunction(wrapper), value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray(value) ? value : [value];
        }
        function clone(value) {
          return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        function cloneWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined;
          return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        function cloneDeep2(value) {
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        function cloneDeepWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined;
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        function conformsTo(object, source) {
          return source == null || baseConformsTo(object, source, keys(source));
        }
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value, other) {
          return value >= other;
        });
        var isArguments = baseIsArguments(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? baseIsArguments : function(value) {
          return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        var isArray = Array2.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean(value) {
          return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag = getTag(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined;
          var result2 = customizer ? customizer(value, other) : undefined;
          return result2 === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result2;
        }
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
        }
        function isFinite(value) {
          return typeof value == "number" && nativeIsFinite(value);
        }
        function isFunction(value) {
          if (!isObject(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        function isInteger(value) {
          return typeof value == "number" && value == toInteger(value);
        }
        function isLength(value) {
          return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject(value) {
          var type = typeof value;
          return value != null && (type == "object" || type == "function");
        }
        function isObjectLike(value) {
          return value != null && typeof value == "object";
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object, source) {
          return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        function isMatchWith(object, source, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined;
          return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        function isNaN(value) {
          return isNumber(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error(CORE_ERROR_TEXT);
          }
          return baseIsNative(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber(value) {
          return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        function isPlainObject(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString(value) {
          return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value) {
          return value === undefined;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value, other) {
          return value <= other;
        });
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString(value) ? stringToArray(value) : copyArray(value);
          }
          if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
          }
          var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger(value) {
          var result2 = toFinite(value), remainder = result2 % 1;
          return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = baseTrim(value);
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }
        var assign = createAssigner(function(object, source) {
          if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function(object, source) {
          copyObject(source, keysIn(source), object);
        });
        var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object, customizer);
        });
        var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keys(source), object, customizer);
        });
        var at = flatRest(baseAt);
        function create(prototype, properties) {
          var result2 = baseCreate(prototype);
          return properties == null ? result2 : baseAssign(result2, properties);
        }
        var defaults = baseRest(function(object, sources) {
          object = Object2(object);
          var index = -1;
          var length = sources.length;
          var guard = length > 2 ? sources[2] : undefined;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            length = 1;
          }
          while (++index < length) {
            var source = sources[index];
            var props = keysIn(source);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value = object[key];
              if (value === undefined || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                object[key] = source[key];
              }
            }
          }
          return object;
        });
        var defaultsDeep = baseRest(function(args) {
          args.push(undefined, customDefaultsMerge);
          return apply(mergeWith, undefined, args);
        });
        function findKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object, iteratee2) {
          return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forInRight(object, iteratee2) {
          return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forOwn(object, iteratee2) {
          return object && baseForOwn(object, getIteratee(iteratee2, 3));
        }
        function forOwnRight(object, iteratee2) {
          return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
        }
        function functions(object) {
          return object == null ? [] : baseFunctions(object, keys(object));
        }
        function functionsIn(object) {
          return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        function get(object, path, defaultValue) {
          var result2 = object == null ? undefined : baseGet(object, path);
          return result2 === undefined ? defaultValue : result2;
        }
        function has(object, path) {
          return object != null && hasPath(object, path, baseHas);
        }
        function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
        var invert = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          result2[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          if (hasOwnProperty.call(result2, value)) {
            result2[value].push(key);
          } else {
            result2[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        function keysIn(object) {
          return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        function mapKeys(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, iteratee2(value, key, object2), value);
          });
          return result2;
        }
        function mapValues(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, key, iteratee2(value, key, object2));
          });
          return result2;
        }
        var merge = createAssigner(function(object, source, srcIndex) {
          baseMerge(object, source, srcIndex);
        });
        var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
          baseMerge(object, source, srcIndex, customizer);
        });
        var omit = flatRest(function(object, paths) {
          var result2 = {};
          if (object == null) {
            return result2;
          }
          var isDeep = false;
          paths = arrayMap(paths, function(path) {
            path = castPath(path, object);
            isDeep || (isDeep = path.length > 1);
            return path;
          });
          copyObject(object, getAllKeysIn(object), result2);
          if (isDeep) {
            result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
          }
          var length = paths.length;
          while (length--) {
            baseUnset(result2, paths[length]);
          }
          return result2;
        });
        function omitBy(object, predicate) {
          return pickBy(object, negate(getIteratee(predicate)));
        }
        var pick = flatRest(function(object, paths) {
          return object == null ? {} : basePick(object, paths);
        });
        function pickBy(object, predicate) {
          if (object == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object), function(prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object, props, function(value, path) {
            return predicate(value, path[0]);
          });
        }
        function result(object, path, defaultValue) {
          path = castPath(path, object);
          var index = -1, length = path.length;
          if (!length) {
            length = 1;
            object = undefined;
          }
          while (++index < length) {
            var value = object == null ? undefined : object[toKey(path[index])];
            if (value === undefined) {
              index = length;
              value = defaultValue;
            }
            object = isFunction(value) ? value.call(object) : value;
          }
          return object;
        }
        function set(object, path, value) {
          return object == null ? object : baseSet(object, path, value);
        }
        function setWith(object, path, value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined;
          return object == null ? object : baseSet(object, path, value, customizer);
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform(object, iteratee2, accumulator) {
          var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
          iteratee2 = getIteratee(iteratee2, 4);
          if (accumulator == null) {
            var Ctor = object && object.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject(object)) {
              accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
            return iteratee2(accumulator, value, index, object2);
          });
          return accumulator;
        }
        function unset(object, path) {
          return object == null ? true : baseUnset(object, path);
        }
        function update(object, path, updater) {
          return object == null ? object : baseUpdate(object, path, castFunction(updater));
        }
        function updateWith(object, path, updater, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined;
          return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
        }
        function values(object) {
          return object == null ? [] : baseValues(object, keys(object));
        }
        function valuesIn(object) {
          return object == null ? [] : baseValues(object, keysIn(object));
        }
        function clamp(number, lower, upper) {
          if (upper === undefined) {
            upper = lower;
            lower = undefined;
          }
          if (upper !== undefined) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        function inRange(number, start, end) {
          start = toFinite(start);
          if (end === undefined) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          number = toNumber(number);
          return baseInRange(number, start, end);
        }
        function random(lower, upper, floating) {
          if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined;
          }
          if (floating === undefined) {
            if (typeof upper == "boolean") {
              floating = upper;
              upper = undefined;
            } else if (typeof lower == "boolean") {
              floating = lower;
              lower = undefined;
            }
          }
          if (lower === undefined && upper === undefined) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function(result2, word, index) {
          word = word.toLowerCase();
          return result2 + (index ? capitalize(word) : word);
        });
        function capitalize(string) {
          return upperFirst(toString(string).toLowerCase());
        }
        function deburr(string) {
          string = toString(string);
          return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
        }
        function endsWith(string, target, position) {
          string = toString(string);
          target = baseToString(target);
          var length = string.length;
          position = position === undefined ? length : baseClamp(toInteger(position), 0, length);
          var end = position;
          position -= target.length;
          return position >= 0 && string.slice(position, end) == target;
        }
        function escape(string) {
          string = toString(string);
          return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
          string = toString(string);
          return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
        }
        var kebabCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "-" : "") + word.toLowerCase();
        });
        var lowerCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst("toLowerCase");
        function pad(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          if (!length || strLength >= length) {
            return string;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        function padStart(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        function parseInt2(string, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
        }
        function repeat(string, n, guard) {
          if (guard ? isIterateeCall(string, n, guard) : n === undefined) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          return baseRepeat(toString(string), n);
        }
        function replace() {
          var args = arguments, string = toString(args[0]);
          return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "_" : "") + word.toLowerCase();
        });
        function split(string, separator, limit) {
          if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
            separator = limit = undefined;
          }
          limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string = toString(string);
          if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string)) {
              return castSlice(stringToArray(string), 0, limit);
            }
          }
          return string.split(separator, limit);
        }
        var startCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + upperFirst(word);
        });
        function startsWith(string, target, position) {
          string = toString(string);
          position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
          target = baseToString(target);
          return string.slice(position, position + target.length) == target;
        }
        function template(string, options, guard) {
          var settings = lodash.templateSettings;
          if (guard && isIterateeCall(string, options, guard)) {
            options = undefined;
          }
          string = toString(string);
          options = assignInWith({}, options, settings, customDefaultsAssignIn);
          var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
          var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
          var reDelimiters = RegExp2(
            (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
            "g"
          );
          var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
          string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = hasOwnProperty.call(options, "variable") && options.variable;
          if (!variable) {
            source = "with (obj) {\n" + source + "\n}\n";
          } else if (reForbiddenIdentifierChars.test(variable)) {
            throw new Error(INVALID_TEMPL_VAR_ERROR_TEXT);
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
          source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
          var result2 = attempt(function() {
            return Function2(importsKeys, sourceURL + "return " + source).apply(undefined, importsValues);
          });
          result2.source = source;
          if (isError(result2)) {
            throw result2;
          }
          return result2;
        }
        function toLower(value) {
          return toString(value).toLowerCase();
        }
        function toUpper(value) {
          return toString(value).toUpperCase();
        }
        function trim(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined)) {
            return baseTrim(string);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join("");
        }
        function trimEnd(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined)) {
            return string.slice(0, trimmedEndIndex(string) + 1);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join("");
        }
        function trimStart(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined)) {
            return string.replace(reTrimStart, "");
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join("");
        }
        function truncate(string, options) {
          var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
          if (isObject(options)) {
            var separator = "separator" in options ? options.separator : separator;
            length = "length" in options ? toInteger(options.length) : length;
            omission = "omission" in options ? baseToString(options.omission) : omission;
          }
          string = toString(string);
          var strLength = string.length;
          if (hasUnicode(string)) {
            var strSymbols = stringToArray(string);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
          if (separator === undefined) {
            return result2 + omission;
          }
          if (strSymbols) {
            end += result2.length - end;
          }
          if (isRegExp(separator)) {
            if (string.slice(end).search(separator)) {
              var match, substring = result2;
              if (!separator.global) {
                separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring)) {
                var newEnd = match.index;
              }
              result2 = result2.slice(0, newEnd === undefined ? end : newEnd);
            }
          } else if (string.indexOf(baseToString(separator), end) != end) {
            var index = result2.lastIndexOf(separator);
            if (index > -1) {
              result2 = result2.slice(0, index);
            }
          }
          return result2 + omission;
        }
        function unescape(string) {
          string = toString(string);
          return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        var upperCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toUpperCase();
        });
        var upperFirst = createCaseFirst("toUpperCase");
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined : pattern;
          if (pattern === undefined) {
            return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
          }
          return string.match(pattern) || [];
        }
        var attempt = baseRest(function(func, args) {
          try {
            return apply(func, undefined, args);
          } catch (e) {
            return isError(e) ? e : new Error(e);
          }
        });
        var bindAll = flatRest(function(object, methodNames) {
          arrayEach(methodNames, function(key) {
            key = toKey(key);
            baseAssignValue(object, key, bind(object[key], object));
          });
          return object;
        });
        function cond(pairs) {
          var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap(pairs, function(pair) {
            if (typeof pair[1] != "function") {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function(args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        function constant(value) {
          return function() {
            return value;
          };
        }
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        function matches(source) {
          return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function(path, args) {
          return function(object) {
            return baseInvoke(object, path, args);
          };
        });
        var methodOf = baseRest(function(object, args) {
          return function(path) {
            return baseInvoke(object, path, args);
          };
        });
        function mixin(object, source, options) {
          var props = keys(source), methodNames = baseFunctions(source, props);
          if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object;
            object = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
          arrayEach(methodNames, function(methodName) {
            var func = source[methodName];
            object[methodName] = func;
            if (isFunc) {
              object.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain2 || chainAll) {
                  var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                  actions.push({ "func": func, "args": arguments, "thisArg": object });
                  result2.__chain__ = chainAll;
                  return result2;
                }
                return func.apply(object, arrayPush([this.value()], arguments));
              };
            }
          });
          return object;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop() {
        }
        function nthArg(n) {
          n = toInteger(n);
          return baseRest(function(args) {
            return baseNth(args, n);
          });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        function propertyOf(object) {
          return function(path) {
            return object == null ? undefined : baseGet(object, path);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return "";
        }
        function stubTrue() {
          return true;
        }
        function times(n, iteratee2) {
          n = toInteger(n);
          if (n < 1 || n > MAX_SAFE_INTEGER) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
          iteratee2 = getIteratee(iteratee2);
          n -= MAX_ARRAY_LENGTH;
          var result2 = baseTimes(length, iteratee2);
          while (++index < n) {
            iteratee2(index);
          }
          return result2;
        }
        function toPath(value) {
          if (isArray(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
        }
        function uniqueId(prefix) {
          var id = ++idCounter;
          return toString(prefix) + id;
        }
        var add = createMathOperation(function(augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound("ceil");
        var divide = createMathOperation(function(dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor = createRound("floor");
        function max(array) {
          return array && array.length ? baseExtremum(array, identity, baseGt) : undefined;
        }
        function maxBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined;
        }
        function mean(array) {
          return baseMean(array, identity);
        }
        function meanBy(array, iteratee2) {
          return baseMean(array, getIteratee(iteratee2, 2));
        }
        function min(array) {
          return array && array.length ? baseExtremum(array, identity, baseLt) : undefined;
        }
        function minBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined;
        }
        var multiply = createMathOperation(function(multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round = createRound("round");
        var subtract = createMathOperation(function(minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array) {
          return array && array.length ? baseSum(array, identity) : 0;
        }
        function sumBy(array, iteratee2) {
          return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
        }
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.concat = concat;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith = differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatMap = flatMap;
        lodash.flatMapDeep = flatMapDeep;
        lodash.flatMapDepth = flatMapDepth;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.nthArg = nthArg;
        lodash.omit = omit;
        lodash.omitBy = omitBy;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pickBy = pickBy;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAllWith = pullAllWith;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.reverse = reverse;
        lodash.sampleSize = sampleSize;
        lodash.set = set;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.toArray = toArray;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.unary = unary;
        lodash.union = union;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.update = update;
        lodash.updateWith = updateWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.without = without;
        lodash.words = words;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        lodash.entries = toPairs;
        lodash.entriesIn = toPairsIn;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        mixin(lodash, lodash);
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp = clamp;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep2;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.conformsTo = conformsTo;
        lodash.deburr = deburr;
        lodash.defaultTo = defaultTo;
        lodash.divide = divide;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isArrayBuffer = isArrayBuffer;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction;
        lodash.isInteger = isInteger;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN;
        lodash.isNative = isNative;
        lodash.isNil = isNil;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet;
        lodash.isString = isString;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.meanBy = meanBy;
        lodash.min = min;
        lodash.minBy = minBy;
        lodash.stubArray = stubArray;
        lodash.stubFalse = stubFalse;
        lodash.stubObject = stubObject;
        lodash.stubString = stubString;
        lodash.stubTrue = stubTrue;
        lodash.multiply = multiply;
        lodash.nth = nth;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart;
        lodash.parseInt = parseInt2;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.replace = replace;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext2;
        lodash.sample = sample;
        lodash.size = size;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum = sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toFinite = toFinite;
        lodash.toInteger = toInteger;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString;
        lodash.toUpper = toUpper;
        lodash.trim = trim;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId;
        lodash.upperCase = upperCase;
        lodash.upperFirst = upperFirst;
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.first = head;
        mixin(lodash, (function() {
          var source = {};
          baseForOwn(lodash, function(func, methodName) {
            if (!hasOwnProperty.call(lodash.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        })(), { "chain": false });
        lodash.VERSION = VERSION;
        arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
          lodash[methodName].placeholder = lodash;
        });
        arrayEach(["drop", "take"], function(methodName, index) {
          LazyWrapper.prototype[methodName] = function(n) {
            n = n === undefined ? 1 : nativeMax(toInteger(n), 0);
            var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
            if (result2.__filtered__) {
              result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
            } else {
              result2.__views__.push({
                "size": nativeMin(n, MAX_ARRAY_LENGTH),
                "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
              });
            }
            return result2;
          };
          LazyWrapper.prototype[methodName + "Right"] = function(n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
          var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee2) {
            var result2 = this.clone();
            result2.__iteratees__.push({
              "iteratee": getIteratee(iteratee2, 3),
              "type": type
            });
            result2.__filtered__ = result2.__filtered__ || isFilter;
            return result2;
          };
        });
        arrayEach(["head", "last"], function(methodName, index) {
          var takeName = "take" + (index ? "Right" : "");
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(["initial", "tail"], function(methodName, index) {
          var dropName = "drop" + (index ? "" : "Right");
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
          if (typeof path == "function") {
            return new LazyWrapper(this);
          }
          return this.map(function(value) {
            return baseInvoke(value, path, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start, end) {
          start = toInteger(start);
          var result2 = this;
          if (result2.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result2);
          }
          if (start < 0) {
            result2 = result2.takeRight(-start);
          } else if (start) {
            result2 = result2.drop(start);
          }
          if (end !== undefined) {
            end = toInteger(end);
            result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
          }
          return result2;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash.prototype[methodName] = function() {
            var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
            var interceptor = function(value2) {
              var result3 = lodashFunc.apply(lodash, arrayPush([value2], args));
              return isTaker && chainAll ? result3[0] : result3;
            };
            if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result2 = func.apply(value, args);
              result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined });
              return new LodashWrapper(result2, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result2 = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
          };
        });
        arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
          var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray(value) ? value : [], args);
            }
            return this[chainName](function(value2) {
              return func.apply(isArray(value2) ? value2 : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + "";
            if (!hasOwnProperty.call(realNames, key)) {
              realNames[key] = [];
            }
            realNames[key].push({ "name": methodName, "func": lodashFunc });
          }
        });
        realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
          "name": "wrapper",
          "func": undefined
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        lodash.prototype.first = lodash.prototype.head;
        if (symIterator) {
          lodash.prototype[symIterator] = wrapperToIterator;
        }
        return lodash;
      });
      var _ = runInContext();
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        root._ = _;
        define(function() {
          return _;
        });
      } else if (freeModule) {
        (freeModule.exports = _)._ = _;
        freeExports._ = _;
      } else {
        root._ = _;
      }
    }).call(exports);
  }
});

// src/app/pages/jobs/list/list.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());

// src/app/store/Job/job-selector.ts
var selectDataState = createFeatureSelector("Joblist");
var selectData = createSelector(selectDataState, (state) => state.joblist);
var selecDatagrid = createSelector(selectDataState, (state) => state.jobGrid);
var selecDatapply = createSelector(selectDataState, (state) => state.JobApply);
var selectDataLoading = createSelector(selectDataState, (state) => state.loading);
var selectDataError = createSelector(selectDataState, (state) => state.error);

// src/app/pages/jobs/list/list.component.ts
var _c0 = () => ({ showWeekNumbers: false });
var _c1 = (a0, a1, a2, a3) => ({ "badge-soft-success": a0, "badge-soft-danger": a1, "badge-soft-info": a2, "badge-soft-warning": a3 });
var _c2 = (a0, a1, a2) => ({ "bg-success": a0, "bg-info": a1, "bg-danger": a2 });
var _c3 = (a0) => ({ "is-invalid": a0 });
function ListComponent_ul_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 43)(1, "li")(2, "a", 44);
    \u0275\u0275text(3, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "li")(5, "a", 44);
    \u0275\u0275text(6, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "li")(8, "a", 44);
    \u0275\u0275text(9, "Something else here");
    \u0275\u0275elementEnd()()();
  }
}
function ListComponent_For_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "th", 45);
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 46);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17, "02 Nov 2023");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19, " 25 Nov 2023");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "span", 47);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td")(24, "ul", 48)(25, "li", 49)(26, "a", 50);
    \u0275\u0275element(27, "i", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "li", 52)(29, "a", 53);
    \u0275\u0275listener("click", function ListComponent_For_80_Template_a_click_29_listener() {
      const data_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      const content_r2 = \u0275\u0275reference(85);
      return \u0275\u0275resetView(ctx_r4.editDataGet(data_r4.id, content_r2));
    });
    \u0275\u0275element(30, "i", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "li", 55)(32, "a", 56);
    \u0275\u0275listener("click", function ListComponent_For_80_Template_a_click_32_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.delete($event));
    });
    \u0275\u0275element(33, "i", 57);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4.location);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4.experience);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4.position);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge badge-soft-", data_r4.type_color));
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(13, _c1, data_r4.type === "Full Time", data_r4.type === "Part Time", data_r4.type === "Freelance", data_r4.type === "Internship"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r4.type);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(18, _c2, data_r4.status === "Active", data_r4.status === "New", data_r4.status === "Close"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r4.status);
  }
}
function ListComponent_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 58)(2, "p", 59);
    \u0275\u0275text(3, "Showing ");
    \u0275\u0275elementStart(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " of ");
    \u0275\u0275elementStart(7, "b");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " entries");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 60)(11, "div", 61)(12, "ul", 62)(13, "pagination", 63);
    \u0275\u0275listener("pageChanged", function ListComponent_Conditional_81_Template_pagination_pageChanged_13_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.pageChanged($event));
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r4.lists == null ? null : ctx_r4.lists.length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.joblist == null ? null : ctx_r4.joblist.length);
    \u0275\u0275advance(5);
    \u0275\u0275property("totalItems", ctx_r4.joblist == null ? null : ctx_r4.joblist.length)("itemsPerPage", 8);
  }
}
function ListComponent_ng_template_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "h5", 65);
    \u0275\u0275text(2, "Order Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 66);
    \u0275\u0275listener("click", function ListComponent_ng_template_82_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.modalRef == null ? null : ctx_r4.modalRef.hide());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 67)(5, "p", 68);
    \u0275\u0275text(6, " Product id: ");
    \u0275\u0275elementStart(7, "span", 69);
    \u0275\u0275text(8, "#SK2540");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 70);
    \u0275\u0275text(10, " Billing Name: ");
    \u0275\u0275elementStart(11, "span", 69);
    \u0275\u0275text(12, "Neal Matthews");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 38)(14, "table", 71)(15, "thead")(16, "tr")(17, "th", 40);
    \u0275\u0275text(18, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 40);
    \u0275\u0275text(20, "Product Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 40);
    \u0275\u0275text(22, "Price");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "tbody")(24, "tr")(25, "th", 45)(26, "div");
    \u0275\u0275element(27, "img", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "td")(29, "div")(30, "h5", 73);
    \u0275\u0275text(31, "Wireless Headphone (Black)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 59);
    \u0275\u0275text(33, "$ 225 x 1");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "td");
    \u0275\u0275text(35, "$ 255");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "tr")(37, "th", 45)(38, "div");
    \u0275\u0275element(39, "img", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "td")(41, "div")(42, "h5", 73);
    \u0275\u0275text(43, "Phone patterned cases");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p", 59);
    \u0275\u0275text(45, "$ 145 x 1");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "td");
    \u0275\u0275text(47, "$ 145");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "tr")(49, "td", 75)(50, "h6", 76);
    \u0275\u0275text(51, "Sub Total:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "td");
    \u0275\u0275text(53, "$ 400");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "tr")(55, "td", 75)(56, "h6", 76);
    \u0275\u0275text(57, "Shipping:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "td");
    \u0275\u0275text(59, "Free");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "tr")(61, "td", 75)(62, "h6", 76);
    \u0275\u0275text(63, "Total:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "td");
    \u0275\u0275text(65, "$ 400");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(66, "div", 77)(67, "button", 78);
    \u0275\u0275listener("click", function ListComponent_ng_template_82_Template_button_click_67_listener() {
      const modal_r8 = \u0275\u0275restoreView(_r7).$implicit;
      return \u0275\u0275resetView(modal_r8.close("Close click"));
    });
    \u0275\u0275text(68, "Close");
    \u0275\u0275elementEnd()();
  }
}
function ListComponent_ng_template_84_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Jobs Title is required");
    \u0275\u0275elementEnd();
  }
}
function ListComponent_ng_template_84_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275conditionalCreate(1, ListComponent_ng_template_84_Conditional_11_Conditional_1_Template, 2, 0, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.form["title"].errors["required"] ? 1 : -1);
  }
}
function ListComponent_ng_template_84_Conditional_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Company Name is required");
    \u0275\u0275elementEnd();
  }
}
function ListComponent_ng_template_84_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275conditionalCreate(1, ListComponent_ng_template_84_Conditional_16_Conditional_1_Template, 2, 0, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.form["name"].errors["required"] ? 1 : -1);
  }
}
function ListComponent_ng_template_84_Conditional_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Location is required");
    \u0275\u0275elementEnd();
  }
}
function ListComponent_ng_template_84_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275conditionalCreate(1, ListComponent_ng_template_84_Conditional_21_Conditional_1_Template, 2, 0, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.form["location"].errors["required"] ? 1 : -1);
  }
}
function ListComponent_ng_template_84_Conditional_26_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Experience is required");
    \u0275\u0275elementEnd();
  }
}
function ListComponent_ng_template_84_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275conditionalCreate(1, ListComponent_ng_template_84_Conditional_26_Conditional_1_Template, 2, 0, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.form["experience"].errors["required"] ? 1 : -1);
  }
}
function ListComponent_ng_template_84_Conditional_31_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Position is required");
    \u0275\u0275elementEnd();
  }
}
function ListComponent_ng_template_84_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275conditionalCreate(1, ListComponent_ng_template_84_Conditional_31_Conditional_1_Template, 2, 0, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.form["position"].errors["required"] ? 1 : -1);
  }
}
function ListComponent_ng_template_84_Conditional_42_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Type is required");
    \u0275\u0275elementEnd();
  }
}
function ListComponent_ng_template_84_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275conditionalCreate(1, ListComponent_ng_template_84_Conditional_42_Conditional_1_Template, 2, 0, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.form["type"].errors["required"] ? 1 : -1);
  }
}
function ListComponent_ng_template_84_Conditional_55_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Status is required");
    \u0275\u0275elementEnd();
  }
}
function ListComponent_ng_template_84_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275conditionalCreate(1, ListComponent_ng_template_84_Conditional_55_Conditional_1_Template, 2, 0, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.form["status"].errors["required"] ? 1 : -1);
  }
}
function ListComponent_ng_template_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "h5", 79);
    \u0275\u0275text(2, "Add Jobs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 80);
    \u0275\u0275listener("click", function ListComponent_ng_template_84_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.modalRef == null ? null : ctx_r4.modalRef.hide());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "form", 81);
    \u0275\u0275listener("ngSubmit", function ListComponent_ng_template_84_Template_form_ngSubmit_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.saveUser());
    });
    \u0275\u0275elementStart(5, "div", 67);
    \u0275\u0275element(6, "input", 82);
    \u0275\u0275elementStart(7, "div", 83)(8, "label", 84);
    \u0275\u0275text(9, "Jobs Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 85);
    \u0275\u0275conditionalCreate(11, ListComponent_ng_template_84_Conditional_11_Template, 2, 1, "div", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 83)(13, "label", 84);
    \u0275\u0275text(14, "Company Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 87);
    \u0275\u0275conditionalCreate(16, ListComponent_ng_template_84_Conditional_16_Template, 2, 1, "div", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 83)(18, "label", 84);
    \u0275\u0275text(19, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 88);
    \u0275\u0275conditionalCreate(21, ListComponent_ng_template_84_Conditional_21_Template, 2, 1, "div", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 83)(23, "label", 84);
    \u0275\u0275text(24, "Experience");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 89);
    \u0275\u0275conditionalCreate(26, ListComponent_ng_template_84_Conditional_26_Template, 2, 1, "div", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 83)(28, "label", 84);
    \u0275\u0275text(29, "Position");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 90);
    \u0275\u0275conditionalCreate(31, ListComponent_ng_template_84_Conditional_31_Template, 2, 1, "div", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 83)(33, "label", 91);
    \u0275\u0275text(34, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "select", 92)(36, "option", 23);
    \u0275\u0275text(37, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 29);
    \u0275\u0275text(39, "Full Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option", 30);
    \u0275\u0275text(41, "Part Time");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(42, ListComponent_ng_template_84_Conditional_42_Template, 2, 1, "div", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 83)(44, "label", 91);
    \u0275\u0275text(45, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "select", 93)(47, "option", 23);
    \u0275\u0275text(48, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "option", 24);
    \u0275\u0275text(50, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "option", 25);
    \u0275\u0275text(52, "New");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "option", 26);
    \u0275\u0275text(54, "Close");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(55, ListComponent_ng_template_84_Conditional_55_Template, 2, 1, "div", 86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 77)(57, "div", 94)(58, "button", 95);
    \u0275\u0275listener("click", function ListComponent_ng_template_84_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.modalRef == null ? null : ctx_r4.modalRef.hide());
    });
    \u0275\u0275text(59, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "button", 96);
    \u0275\u0275text(61, "Add Order");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r4.jobListForm);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(15, _c3, ctx_r4.submitted && ctx_r4.form["title"].errors));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.submitted && ctx_r4.form["title"].errors ? 11 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(17, _c3, ctx_r4.submitted && ctx_r4.form["name"].errors));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.submitted && ctx_r4.form["name"].errors ? 16 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(19, _c3, ctx_r4.submitted && ctx_r4.form["location"].errors));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.submitted && ctx_r4.form["location"].errors ? 21 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(21, _c3, ctx_r4.submitted && ctx_r4.form["experience"].errors));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.submitted && ctx_r4.form["experience"].errors ? 26 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(23, _c3, ctx_r4.submitted && ctx_r4.form["position"].errors));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.submitted && ctx_r4.form["position"].errors ? 31 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(25, _c3, ctx_r4.submitted && ctx_r4.form["type"].errors));
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r4.submitted && ctx_r4.form["type"].errors ? 42 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(27, _c3, ctx_r4.submitted && ctx_r4.form["status"].errors));
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r4.submitted && ctx_r4.form["status"].errors ? 55 : -1);
  }
}
var ListComponent = class _ListComponent {
  constructor(modalService, formBuilder, store) {
    this.modalService = modalService;
    this.formBuilder = formBuilder;
    this.store = store;
    this.page = 1;
    this.submitted = false;
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Jobs" }, { label: "Jobs List", active: true }];
    this.jobListForm = this.formBuilder.group({
      id: [""],
      title: ["", [Validators.required]],
      name: ["", [Validators.required]],
      location: ["", [Validators.required]],
      experience: ["", [Validators.required]],
      position: ["", [Validators.required]],
      type: ["", [Validators.required]],
      status: ["", [Validators.required]]
    });
    this.store.dispatch(fetchJoblistData());
    this.store.select(selectData).subscribe((data) => {
      this.lists = data;
      this.joblist = data;
      this.lists = this.joblist.slice(0, 8);
    });
  }
  /**
  * Open modal
  * @param content modal content
  */
  openViewModal(content) {
    this.modalRef = this.modalService.show(content);
  }
  // The master checkbox will check/ uncheck all items
  checkUncheckAll(ev) {
    this.lists.forEach((x) => x.state = ev.target.checked);
  }
  // Delete Data
  delete(event) {
    const swalWithBootstrapButtons = import_sweetalert2.default.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger ms-2"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      showCancelButton: true
    }).then((result) => {
      if (result.value) {
        swalWithBootstrapButtons.fire("Deleted!", "Your file has been deleted.", "success");
        event.target.closest("tr")?.remove();
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === import_sweetalert2.default.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  }
  /**
   * Open modal
   * @param content modal content
   */
  openModal(content) {
    this.submitted = false;
    this.modalRef = this.modalService.show(content, { class: "modal-md" });
  }
  /**
   * Form data get
   */
  get form() {
    return this.jobListForm.controls;
  }
  /**
  * Save user
  */
  saveUser() {
    if (this.jobListForm.valid) {
      if (this.jobListForm.get("id")?.value) {
        const updatedData = this.jobListForm.value;
        this.store.dispatch(updateJoblist({ updatedData }));
      } else {
        this.jobListForm.controls["id"].setValue(this.joblist.length + 1);
        const newData = this.jobListForm.value;
        this.store.dispatch(addJoblist({ newData }));
      }
    }
    this.modalService?.hide();
    setTimeout(() => {
      this.jobListForm.reset();
    }, 1e3);
  }
  /**}
   * Open Edit modal
   * @param content modal content
   */
  editDataGet(id, content) {
    this.submitted = false;
    this.modalRef = this.modalService.show(content, { class: "modal-md" });
    var modelTitle = document.querySelector(".modal-title");
    modelTitle.innerHTML = "Edit Order";
    var updateBtn = document.getElementById("add-btn");
    updateBtn.innerHTML = "Update";
    var listData = this.lists.filter((data) => data.id === id);
    this.jobListForm.controls["title"].setValue(listData[0].title);
    this.jobListForm.controls["name"].setValue(listData[0].name);
    this.jobListForm.controls["location"].setValue(listData[0].location);
    this.jobListForm.controls["experience"].setValue(listData[0].experience);
    this.jobListForm.controls["position"].setValue(listData[0].position);
    this.jobListForm.controls["type"].setValue(listData[0].type);
    this.jobListForm.controls["status"].setValue(listData[0].status);
    this.jobListForm.controls["id"].setValue(listData[0].id);
  }
  // Search Data
  performSearch() {
    this.searchResults = this.joblist.filter((item) => {
      return item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || item.status.toLowerCase().includes(this.searchTerm.toLowerCase()) || item.type.toLowerCase().includes(this.searchTerm.toLowerCase()) || item.date.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
    this.lists = this.searchResults.slice(0, 8);
  }
  // pagination
  pageChanged(event) {
    const startItem = (event.page - 1) * event.itemsPerPage;
    this.endItem = event.page * event.itemsPerPage;
    this.lists = this.joblist.slice(startItem, this.endItem);
  }
  // fiter job
  searchJob() {
    if (this.term) {
      this.lists = this.joblist.filter((data) => {
        return data.title.toLowerCase().includes(this.term.toLowerCase());
      });
    } else {
      this.lists = this.joblist;
    }
  }
  selectstatus() {
    var status = document.getElementById("idStatus").value;
    if (status) {
      this.lists = this.joblist.filter((es) => {
        return es.status === status;
      });
    } else {
      this.lists = this.joblist;
    }
  }
  selectType() {
    var type = document.getElementById("idType").value;
    if (type) {
      this.lists = this.joblist.filter((es) => {
        return es.type === type;
      });
    } else {
      this.lists = this.joblist;
    }
  }
  static {
    this.\u0275fac = function ListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListComponent)(\u0275\u0275directiveInject(BsModalService), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListComponent, selectors: [["app-list"]], standalone: false, decls: 86, vars: 5, consts: [["ViewContent", ""], ["content", ""], [1, "container-fluid"], ["title", "Jobs List", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], ["ngClass", "card"], [1, "card-body", "border-bottom"], [1, "d-flex", "align-items-center"], [1, "mb-0", "card-title", "flex-grow-1"], [1, "flex-shrink-0", "d-flex", "gap-1"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", 3, "click"], ["href", "javascript:void(0);", 1, "btn", "btn-light"], [1, "mdi", "mdi-refresh"], ["dropdown", "", 1, "dropdown", "d-inline-block"], ["type", "menu", "id", "*dropdownMenuButton1", "data-bs-toggle", "dropdown", "aria-expanded", "false", "dropdownToggle", "", 1, "btn", "btn-success"], [1, "mdi", "mdi-dots-vertical"], ["class", "dropdown-menu dropdown-menu dropdown-menu-end show", "aria-labelledby", "*dropdownMenuButton1", 4, "dropdownMenu"], [1, "row", "g-3"], [1, "col-xxl-4", "col-lg-6"], ["type", "search", "id", "searchInput", "placeholder", "Search for ...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-xxl-2", "col-lg-6"], ["id", "idStatus", "aria-label", "Default select example", 1, "form-select", 3, "click"], ["value", ""], ["value", "Active"], ["value", "New"], ["value", "Close"], [1, "col-xxl-2", "col-lg-4"], ["id", "idType", "aria-label", "Default select example", 1, "form-select", 3, "click"], ["value", "Full Time"], ["value", "Part Time"], ["value", "Internship"], ["value", "Freelance"], ["id", "datepicker1"], ["type", "text", "placeholder", "Datepicker", "bsDatepicker", "", 1, "form-control", 3, "bsConfig"], ["type", "button", 1, "btn", "btn-soft-secondary", "w-100"], [1, "mdi", "mdi-filter-outline", "align-middle"], [1, "card-body"], [1, "table-responsive"], ["id", "job-list", 1, "table", "align-middle", "dt-responsive", "nowrap", "w-100", "table-check"], ["scope", "col"], [1, "row", "justify-content-between", "align-items-center"], ["role", "document"], ["aria-labelledby", "*dropdownMenuButton1", 1, "dropdown-menu", "dropdown-menu", "dropdown-menu-end", "show"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["scope", "row"], [3, "ngClass"], [1, "badge", 3, "ngClass"], [1, "list-unstyled", "hstack", "gap-1", "mb-0"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "View"], ["routerLink", "/jobs/details", 1, "btn", "btn-sm", "btn-soft-primary"], [1, "mdi", "mdi-eye-outline"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Edit"], ["href", "javascript:void(0);", 1, "btn", "btn-sm", "btn-soft-info", 3, "click"], [1, "mdi", "mdi-pencil-outline"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", 1, "btn", "btn-sm", "btn-soft-danger", 3, "click"], [1, "mdi", "mdi-delete-outline"], [1, "col-auto", "me-auto"], [1, "text-muted", "mb-0"], [1, "col-auto"], [1, "text-md-right", "float-md-end", "pagination-rounded"], [1, "pagination", "pagination-rounded", "justify-content-end", "mb-2"], [3, "pageChanged", "totalItems", "itemsPerPage"], [1, "modal-header"], [1, "modal-title", "mt-0"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "mb-2"], [1, "text-primary"], [1, "mb-4"], [1, "table", "table-centered", "table-nowrap"], ["src", "assets/images/product/img-7.png", "alt", "", 1, "avatar-sm"], [1, "text-truncate", "font-size-14"], ["src", "assets/images/product/img-4.png", "alt", "", 1, "avatar-sm"], ["colspan", "2"], [1, "m-0"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", "id", "close-modal", 1, "btn-close", 3, "click"], [3, "ngSubmit", "formGroup"], ["type", "hidden", "name", "id", "value", "", "formControlName", "id"], [1, "mb-3"], ["for", "customername-field", 1, "form-label"], ["type", "text", "id", "customername-field", "placeholder", "Enter Name", "required", "", "formControlName", "title", 1, "form-control", 3, "ngClass"], ["align", "left", 1, "invalid-feedback"], ["type", "text", "id", "customername-field", "placeholder", "Enter Name", "required", "", "formControlName", "name", 1, "form-control", 3, "ngClass"], ["type", "text", "id", "customername-field", "placeholder", "Enter Location", "required", "", "formControlName", "location", 1, "form-control", 3, "ngClass"], ["type", "text", "id", "customername-field", "placeholder", "Enter Experience", "required", "", "formControlName", "experience", 1, "form-control", 3, "ngClass"], ["type", "text", "id", "customername-field", "placeholder", "Enter Position", "required", "", "formControlName", "position", 1, "form-control", 3, "ngClass"], ["for", "payment-field", 1, "form-label"], ["data-trigger", "", "name", "payment-method", "id", "payment-field", "formControlName", "type", 1, "form-control", 3, "ngClass"], ["data-trigger", "", "name", "payment-method", "id", "payment-field", "formControlName", "status", 1, "form-control", 3, "ngClass"], [1, "hstack", "gap-2", "justify-content-end"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-light", 3, "click"], ["type", "submit", "id", "add-btn", 1, "btn", "btn-success"]], template: function ListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275element(1, "app-page-title", 3);
        \u0275\u0275elementStart(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "div", 7)(6, "div", 8)(7, "h5", 9);
        \u0275\u0275text(8, "Jobs Lists");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 10)(10, "a", 11);
        \u0275\u0275listener("click", function ListComponent_Template_a_click_10_listener() {
          \u0275\u0275restoreView(_r1);
          const content_r2 = \u0275\u0275reference(85);
          return \u0275\u0275resetView(ctx.openModal(content_r2));
        });
        \u0275\u0275text(11, "Add New Job");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "a", 12);
        \u0275\u0275element(13, "i", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 14)(15, "button", 15);
        \u0275\u0275element(16, "i", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275template(17, ListComponent_ul_17_Template, 10, 0, "ul", 17);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(18, "div", 7)(19, "div", 18)(20, "div", 19)(21, "input", 20);
        \u0275\u0275twoWayListener("ngModelChange", function ListComponent_Template_input_ngModelChange_21_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.term, $event) || (ctx.term = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function ListComponent_Template_input_ngModelChange_21_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.searchJob());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 21)(23, "select", 22);
        \u0275\u0275listener("click", function ListComponent_Template_select_click_23_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.selectstatus());
        });
        \u0275\u0275elementStart(24, "option", 23);
        \u0275\u0275text(25, "Select Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "option", 24);
        \u0275\u0275text(27, "Active");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "option", 25);
        \u0275\u0275text(29, "New");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "option", 26);
        \u0275\u0275text(31, "Close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "div", 27)(33, "select", 28);
        \u0275\u0275listener("click", function ListComponent_Template_select_click_33_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.selectType());
        });
        \u0275\u0275elementStart(34, "option", 23);
        \u0275\u0275text(35, "Select Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "option", 29);
        \u0275\u0275text(37, "Full Time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "option", 30);
        \u0275\u0275text(39, "Part Time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "option", 31);
        \u0275\u0275text(41, "Internship");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "option", 32);
        \u0275\u0275text(43, "Freelance");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(44, "div", 27)(45, "div", 33);
        \u0275\u0275element(46, "input", 34);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 27)(48, "button", 35);
        \u0275\u0275element(49, "i", 36);
        \u0275\u0275text(50, " Filter");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(51, "div", 37)(52, "div", 38)(53, "table", 39)(54, "thead")(55, "tr")(56, "th", 40);
        \u0275\u0275text(57, "No");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "th", 40);
        \u0275\u0275text(59, "Job Title");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "th", 40);
        \u0275\u0275text(61, "Company Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "th", 40);
        \u0275\u0275text(63, "Location");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "th", 40);
        \u0275\u0275text(65, "Experience");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "th", 40);
        \u0275\u0275text(67, "Position");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "th", 40);
        \u0275\u0275text(69, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "th", 40);
        \u0275\u0275text(71, "Posted Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "th", 40);
        \u0275\u0275text(73, "Last Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "th", 40);
        \u0275\u0275text(75, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "th", 40);
        \u0275\u0275text(77, "Action");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(78, "tbody");
        \u0275\u0275repeaterCreate(79, ListComponent_For_80_Template, 34, 22, "tr", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(81, ListComponent_Conditional_81_Template, 14, 4, "div", 41);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(82, ListComponent_ng_template_82_Template, 69, 0, "ng-template", 42, 0, \u0275\u0275templateRefExtractor)(84, ListComponent_ng_template_84_Template, 62, 29, "ng-template", 42, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(20);
        \u0275\u0275twoWayProperty("ngModel", ctx.term);
        \u0275\u0275advance(25);
        \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(4, _c0));
        \u0275\u0275advance(33);
        \u0275\u0275repeater(ctx.lists);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.joblist == null ? null : ctx.joblist.length) > 0 ? 81 : -1);
      }
    }, dependencies: [NgClass, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, FormGroupDirective, FormControlName, BsDatepickerDirective, BsDatepickerInputDirective, PaginationComponent, BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective, RouterLink, PagetitleComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListComponent, [{
    type: Component,
    args: [{ selector: "app-list", standalone: false, template: `<div class="container-fluid">\r
  <app-page-title title="Jobs List" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
\r
  <div class="row">\r
    <div class="col-12">\r
      <div ngClass="card">\r
        <div class="card-body border-bottom">\r
          <div class="d-flex align-items-center">\r
            <h5 class="mb-0 card-title flex-grow-1">Jobs Lists</h5>\r
            <div class="flex-shrink-0 d-flex gap-1">\r
              <a href="javascript:void(0);" class="btn btn-primary" (click)="openModal(content)">Add New Job</a>\r
              <a href="javascript:void(0);" class="btn btn-light"><i class="mdi mdi-refresh"></i></a>\r
              <div class="dropdown d-inline-block" dropdown>\r
                <button type="menu" class="btn btn-success" id="*dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" dropdownToggle><i class="mdi mdi-dots-vertical"></i></button>\r
                <ul class="dropdown-menu dropdown-menu dropdown-menu-end show" aria-labelledby="*dropdownMenuButton1" *dropdownMenu>\r
                  <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>\r
                  <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>\r
                  <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>\r
                </ul>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="card-body border-bottom">\r
          <div class="row g-3">\r
            <div class="col-xxl-4 col-lg-6">\r
              <input type="search" class="form-control" id="searchInput" placeholder="Search for ..." [(ngModel)]="term" (ngModelChange)="searchJob()">\r
            </div>\r
            <div class="col-xxl-2 col-lg-6">\r
              <select class="form-select" id="idStatus" aria-label="Default select example" (click)="selectstatus()">\r
                <option value="">Select Status</option>\r
                <option value="Active">Active</option>\r
                <option value="New">New</option>\r
                <option value="Close">Close</option>\r
              </select>\r
            </div>\r
            <div class="col-xxl-2 col-lg-4">\r
              <select class="form-select" id="idType" aria-label="Default select example" (click)="selectType()">\r
                <option value="">Select Type</option>\r
                <option value="Full Time">Full Time</option>\r
                <option value="Part Time">Part Time</option>\r
                <option value="Internship">Internship</option>\r
                <option value="Freelance">Freelance</option>\r
              </select>\r
            </div>\r
            <div class="col-xxl-2 col-lg-4">\r
              <div id="datepicker1">\r
                <input type="text" placeholder="Datepicker" class="form-control " bsDatepicker [bsConfig]="{ showWeekNumbers: false }">\r
\r
              </div><!-- input-group -->\r
            </div>\r
            <div class="col-xxl-2 col-lg-4">\r
              <button type="button" class="btn btn-soft-secondary w-100"><i class="mdi mdi-filter-outline align-middle"></i> Filter</button>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="card-body">\r
\r
          <div class="table-responsive">\r
            <table class="table align-middle dt-responsive nowrap w-100 table-check" id="job-list">\r
              <thead>\r
                <tr>\r
                  <th scope="col">No</th>\r
                  <th scope="col">Job Title</th>\r
                  <th scope="col">Company Name</th>\r
                  <th scope="col">Location</th>\r
                  <th scope="col">Experience</th>\r
                  <th scope="col">Position</th>\r
                  <th scope="col">Type</th>\r
                  <th scope="col">Posted Date</th>\r
                  <th scope="col">Last Date</th>\r
                  <th scope="col">Status</th>\r
                  <th scope="col">Action</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                @for(data of lists;track $index){\r
                <tr>\r
                  <th scope="row">{{data.id}}</th>\r
                  <td>{{data.title}}</td>\r
                  <td>{{data.name}}</td>\r
                  <td>{{data.location}}</td>\r
                  <td>{{data.experience}}</td>\r
                  <td>{{data.position}}</td>\r
                  <td><span class="badge badge-soft-{{data.type_color}}" [ngClass]="{'badge-soft-success': data.type === 'Full Time','badge-soft-danger': data.type === 'Part Time','badge-soft-info': data.type === 'Freelance','badge-soft-warning': data.type === 'Internship'}">{{data.type}}</span></td>\r
                  <td>02 Nov 2023</td>\r
                  <td> 25 Nov 2023</td>\r
                  <td><span class="badge" [ngClass]="{ 'bg-success': data.status === 'Active', 'bg-info': data.status === 'New', 'bg-danger': data.status === 'Close'}">{{data.status}}</span></td>\r
                  <td>\r
                    <ul class="list-unstyled hstack gap-1 mb-0">\r
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">\r
                        <a routerLink="/jobs/details" class="btn btn-sm btn-soft-primary"><i class="mdi mdi-eye-outline"></i></a>\r
                      </li>\r
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">\r
                        <a href="javascript:void(0);" class="btn btn-sm btn-soft-info" (click)="editDataGet(data.id,content)"><i class="mdi mdi-pencil-outline"></i></a>\r
                      </li>\r
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">\r
                        <a href="javascript:void(0);" data-bs-toggle="modal" class="btn btn-sm btn-soft-danger" (click)="delete($event)"><i class="mdi mdi-delete-outline"></i></a>\r
                      </li>\r
                    </ul>\r
                  </td>\r
                </tr>}\r
              </tbody>\r
            </table>\r
          </div>\r
          @if(joblist?.length > 0){\r
          <div class="row justify-content-between align-items-center">\r
            <div class="col-auto me-auto">\r
              <p class="text-muted mb-0">Showing <b>{{lists?.length}}</b> of <b>{{joblist?.length}}</b> entries</p>\r
            </div>\r
            <div class="col-auto">\r
              <div class="text-md-right float-md-end pagination-rounded">\r
                <ul class="pagination pagination-rounded justify-content-end mb-2">\r
                  <pagination [totalItems]="joblist?.length" [itemsPerPage]="8" (pageChanged)="pageChanged($event)"></pagination>\r
                </ul>\r
              </div>\r
            </div>\r
            <!--end col-->\r
          </div>}\r
          <!--end row-->\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- View Details Model -->\r
<ng-template #ViewContent role="document" let-modal>\r
  <div class="modal-header">\r
    <h5 class="modal-title mt-0">Order Details</h5>\r
    <button type="button" class="btn-close" aria-hidden="true" (click)="modalRef?.hide()"></button>\r
  </div>\r
  <div class="modal-body">\r
    <p class="mb-2">\r
      Product id:\r
      <span class="text-primary">#SK2540</span>\r
    </p>\r
    <p class="mb-4">\r
      Billing Name:\r
      <span class="text-primary">Neal Matthews</span>\r
    </p>\r
    <div class="table-responsive">\r
      <table class="table table-centered table-nowrap">\r
        <thead>\r
          <tr>\r
            <th scope="col">Product</th>\r
            <th scope="col">Product Name</th>\r
            <th scope="col">Price</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr>\r
            <th scope="row">\r
              <div>\r
                <img src="assets/images/product/img-7.png" alt class="avatar-sm" />\r
              </div>\r
            </th>\r
            <td>\r
              <div>\r
                <h5 class="text-truncate font-size-14">Wireless Headphone (Black)</h5>\r
                <p class="text-muted mb-0">$ 225 x 1</p>\r
              </div>\r
            </td>\r
            <td>$ 255</td>\r
          </tr>\r
          <tr>\r
            <th scope="row">\r
              <div>\r
                <img src="assets/images/product/img-4.png" alt class="avatar-sm" />\r
              </div>\r
            </th>\r
            <td>\r
              <div>\r
                <h5 class="text-truncate font-size-14">Phone patterned cases</h5>\r
                <p class="text-muted mb-0">$ 145 x 1</p>\r
              </div>\r
            </td>\r
            <td>$ 145</td>\r
          </tr>\r
          <tr>\r
            <td colspan="2">\r
              <h6 class="m-0">Sub Total:</h6>\r
            </td>\r
            <td>$ 400</td>\r
          </tr>\r
          <tr>\r
            <td colspan="2">\r
              <h6 class="m-0">Shipping:</h6>\r
            </td>\r
            <td>Free</td>\r
          </tr>\r
          <tr>\r
            <td colspan="2">\r
              <h6 class="m-0">Total:</h6>\r
            </td>\r
            <td>$ 400</td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
  <div class="modal-footer">\r
    <button class="btn btn-secondary" (click)="modal.close('Close click')">Close</button>\r
  </div>\r
</ng-template>\r
\r
<!-- Order Create Model -->\r
<ng-template #content role="document" let-modal>\r
  <div class="modal-header">\r
    <h5 class="modal-title" id="exampleModalLabel">Add Jobs</h5>\r
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="close-modal" (click)="modalRef?.hide()"></button>\r
  </div>\r
  <form (ngSubmit)="saveUser()" [formGroup]="jobListForm">\r
    <div class="modal-body">\r
      <input type="hidden" name="id" value="" formControlName="id" />\r
      <div class="mb-3">\r
        <label for="customername-field" class="form-label">Jobs Title</label>\r
        <input type="text" id="customername-field" class="form-control" placeholder="Enter Name" required formControlName="title" [ngClass]="{ 'is-invalid': submitted && form['title'].errors }" />\r
        @if(submitted && form['title'].errors){\r
        <div class="invalid-feedback" align="left">\r
          @if(form['title'].errors['required']){\r
          <div>Jobs Title is required</div>\r
          }\r
        </div>\r
        }\r
      </div>\r
\r
      <div class="mb-3">\r
        <label for="customername-field" class="form-label">Company Name</label>\r
        <input type="text" id="customername-field" class="form-control" placeholder="Enter Name" required formControlName="name" [ngClass]="{ 'is-invalid': submitted && form['name'].errors }" />\r
        @if(submitted && form['name'].errors){\r
        <div class="invalid-feedback" align="left">\r
          @if(form['name'].errors['required']){\r
          <div>Company Name is required</div>}\r
        </div>}\r
      </div>\r
\r
      <div class="mb-3">\r
        <label for="customername-field" class="form-label">Location</label>\r
        <input type="text" id="customername-field" class="form-control" placeholder="Enter Location" required formControlName="location" [ngClass]="{ 'is-invalid': submitted && form['location'].errors }" />\r
        @if(submitted && form['location'].errors){\r
        <div class="invalid-feedback" align="left">\r
          @if(form['location'].errors['required']){\r
          <div>Location is required</div>}\r
        </div>}\r
      </div>\r
\r
      <div class="mb-3">\r
        <label for="customername-field" class="form-label">Experience</label>\r
        <input type="text" id="customername-field" class="form-control" placeholder="Enter Experience" required formControlName="experience" [ngClass]="{ 'is-invalid': submitted && form['experience'].errors }" />\r
        @if(submitted && form['experience'].errors){\r
        <div class="invalid-feedback" align="left">\r
          @if(form['experience'].errors['required']){\r
          <div>Experience is required</div>}\r
        </div>}\r
      </div>\r
\r
      <div class="mb-3">\r
        <label for="customername-field" class="form-label">Position</label>\r
        <input type="text" id="customername-field" class="form-control" placeholder="Enter Position" required formControlName="position" [ngClass]="{ 'is-invalid': submitted && form['position'].errors }" />\r
        @if(submitted && form['position'].errors){\r
        <div class="invalid-feedback" align="left">\r
          @if(form['position'].errors['required']){\r
          <div>Position is required</div>}\r
        </div>}\r
      </div>\r
\r
      <div class="mb-3">\r
        <label for="payment-field" class="form-label">Type</label>\r
        <select class="form-control" data-trigger name="payment-method" id="payment-field" formControlName="type" [ngClass]="{ 'is-invalid': submitted && form['type'].errors }">\r
          <option value="">Type</option>\r
          <option value="Full Time">Full Time</option>\r
          <option value="Part Time">Part Time</option>\r
        </select>\r
        @if(submitted && form['type'].errors){\r
        <div class="invalid-feedback" align="left">\r
          @if(form['type'].errors['required']){\r
          <div>Type is required</div>\r
          }\r
        </div>}\r
      </div>\r
\r
      <div class="mb-3">\r
        <label for="payment-field" class="form-label">Status</label>\r
        <select class="form-control" data-trigger name="payment-method" id="payment-field" formControlName="status" [ngClass]="{ 'is-invalid': submitted && form['status'].errors }">\r
          <option value="">Status</option>\r
          <option value="Active">Active</option>\r
          <option value="New">New</option>\r
          <option value="Close">Close</option>\r
        </select>\r
        @if(submitted && form['status'].errors){\r
        <div class="invalid-feedback" align="left">\r
          @if(form['status'].errors['required']){\r
          <div>Status is required</div>}\r
        </div>}\r
      </div>\r
\r
    </div>\r
    <div class="modal-footer">\r
      <div class="hstack gap-2 justify-content-end">\r
        <button type="button" class="btn btn-light" data-bs-dismiss="modal" (click)=" modalRef?.hide()">Close</button>\r
        <button type="submit" class="btn btn-success" id="add-btn">Add Order</button>\r
      </div>\r
    </div>\r
  </form>\r
</ng-template>\r
<!--End Modal -->` }]
  }], () => [{ type: BsModalService }, { type: UntypedFormBuilder }, { type: Store }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListComponent, { className: "ListComponent", filePath: "src/app/pages/jobs/list/list.component.ts", lineNumber: 21 });
})();

// src/app/pages/jobs/grid/grid.component.ts
var _c02 = () => ({ showWeekNumbers: false });
function GridComponent_For_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 57)(2, "div", 58)(3, "div", 59)(4, "a", 60);
    \u0275\u0275element(5, "i", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "img", 62);
    \u0275\u0275elementStart(7, "h5", 63)(8, "a", 64);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "small", 65);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "ul", 66)(13, "li", 67)(14, "p", 68);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "li", 67)(17, "p", 69);
    \u0275\u0275element(18, "i", 70);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "li", 67)(21, "p", 69);
    \u0275\u0275element(22, "i", 71);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 72)(25, "span", 73);
    \u0275\u0275text(26, "Full Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 74);
    \u0275\u0275text(28, "Urgent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 75);
    \u0275\u0275text(30, "Private");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 76)(32, "a", 77);
    \u0275\u0275text(33, "View Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "a", 78);
    \u0275\u0275listener("click", function GridComponent_For_83_Template_a_click_34_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      const content_r4 = \u0275\u0275reference(91);
      return \u0275\u0275resetView(ctx_r2.openModal(content_r4));
    });
    \u0275\u0275text(35, "Apply Now");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275property("src", \u0275\u0275interpolate(data_r5.image), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", data_r5.year, " Yrs Exp.)");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r5.company);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", data_r5.location);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", data_r5.price, " / month");
  }
}
function GridComponent_ng_template_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79)(1, "h5", 80);
    \u0275\u0275text(2, "Apply For This Job");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 81);
    \u0275\u0275listener("click", function GridComponent_ng_template_90_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.modalRef == null ? null : ctx_r2.modalRef.hide());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 82)(5, "form")(6, "div", 3)(7, "div", 4)(8, "div", 83)(9, "label", 84);
    \u0275\u0275text(10, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 86)(13, "div", 83)(14, "label", 87);
    \u0275\u0275text(15, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 86)(18, "div", 83)(19, "label", 89);
    \u0275\u0275text(20, "Phone Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 4)(23, "div", 83)(24, "label", 91);
    \u0275\u0275text(25, "Upload Resume");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 92);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 4)(28, "div", 93)(29, "label", 94);
    \u0275\u0275text(30, "Message");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "textarea", 95);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 4)(33, "div", 96)(34, "button", 97);
    \u0275\u0275text(35, "Send Application ");
    \u0275\u0275element(36, "i", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 99);
    \u0275\u0275text(38, "Cancel");
    \u0275\u0275elementEnd()()()()()();
  }
}
var GridComponent = class _GridComponent {
  constructor(formBuilder, modalService, store) {
    this.formBuilder = formBuilder;
    this.modalService = modalService;
    this.store = store;
    this.isCollapsed = true;
    this.submitted = false;
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Jobs" }, { label: "Jobs Grid", active: true }];
    this.store.dispatch(fetchJobgridData());
    this.store.select(selecDatagrid).subscribe((data) => {
      this.grids = data;
      this.gridata = data;
      this.grids = this.gridata.slice(0, 8);
    });
  }
  /**
   * Open modal
   * @param content modal content
   */
  openModal(content) {
    this.submitted = false;
    this.modalRef = this.modalService.show(content, { class: "modal-md" });
  }
  // pagechanged
  pageChanged(event) {
    const startItem = (event.page - 1) * event.itemsPerPage;
    this.endItem = event.page * event.itemsPerPage;
    this.grids = this.gridata.slice(startItem, this.endItem);
  }
  // fiter job
  searchJob() {
    if (this.term) {
      this.grids = this.gridata.filter((data) => {
        return data.title.toLowerCase().includes(this.term.toLowerCase());
      });
    } else {
      this.grids = this.gridata;
    }
    this.updateNoResultDisplay();
  }
  // no result 
  updateNoResultDisplay() {
    const paginationElement = document.getElementById("pagination-element");
    if (this.term && this.grids.length === 0) {
      paginationElement.style.display = "none";
    } else {
      paginationElement.style.display = "block";
    }
  }
  // location
  Location() {
    if (this.term) {
      this.grids = this.gridata.filter((el) => {
        return el.location.toLowerCase().includes(this.term.toLowerCase());
      });
    } else {
      this.grids = this.gridata;
    }
  }
  static {
    this.\u0275fac = function GridComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GridComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(BsModalService), \u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GridComponent, selectors: [["app-grid"]], standalone: false, decls: 92, vars: 9, consts: [["content", ""], [1, "container-fluid"], ["title", "Jobs Grid", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-12"], [1, "card", "job-filter"], [1, "card-body", "p-3"], [1, "row", "g-3"], [1, "col-xxl-4", "col-lg-4"], [1, "position-relative"], ["type", "text", "id", "searchJob", "autocomplete", "off", "placeholder", "Search your job", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-xxl-2", "col-lg-4"], ["type", "text", "id", "locationInput", "autocomplete", "off", "placeholder", "San Francisco, LA", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "id", "jobCategories", "autocomplete", "off", "placeholder", "Job Categories", 1, "form-control"], [1, "col-xxl-2", "col-lg-6"], ["id", "datepicker1"], ["type", "text", "placeholder", "Datepicker", "bsDatepicker", "", 1, "form-control", 3, "bsConfig"], [1, "position-relative", "h-100", "hstack", "gap-3"], ["type", "submit", 1, "btn", "btn-primary", "h-100", "w-100"], [1, "bx", "bx-search-alt", "align-middle"], ["href", "javascript:void(0);", "aria-controls", "collapseExample", 1, "btn", "btn-secondary", "h-100", "w-100", 3, "click"], [1, "bx", "bx-filter-alt", "align-middle"], ["id", "collapseExample", 1, "collapse", 3, "collapse"], [1, "pt-4"], [1, "col-xxl-4", "col-lg-6"], ["for", "experience", 1, "form-label"], [1, "form-check", "form-check-inline"], ["type", "checkbox", "id", "inlineCheckbox1", "value", "option1", 1, "form-check-input"], ["for", "inlineCheckbox1", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox2", "value", "option1", 1, "form-check-input"], ["for", "inlineCheckbox2", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox3", "value", "option2", 1, "form-check-input"], ["for", "inlineCheckbox3", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox4", "value", "option2", 1, "form-check-input"], ["for", "inlineCheckbox4", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox5", "value", "option3", 1, "form-check-input"], ["for", "inlineCheckbox5", 1, "form-check-label"], ["for", "jobType", 1, "form-label"], ["type", "checkbox", "id", "inlineCheckbox6", "value", "option3", 1, "form-check-input"], ["for", "inlineCheckbox6", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox7", "value", "option3", 1, "form-check-input"], ["for", "inlineCheckbox7", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox8", "value", "option3", 1, "form-check-input"], ["for", "inlineCheckbox8", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox9", "value", "option3", 1, "form-check-input"], ["for", "inlineCheckbox9", 1, "form-check-label"], ["for", "qualificationInput", 1, "form-label"], ["type", "text", "id", "qualificationInput", "autocomplete", "off", "placeholder", "Qualification", 1, "form-control"], [1, "ri-government-line", "filter-icon"], ["id", "jobgrid-list", 1, "row"], [1, "col-xl-3", "col-md-6"], [1, "row", "mb-3"], [1, "d-flex", "justify-content-center"], ["aria-label", "Page navigation example", "id", "pagination-element", 1, "mb-0"], [1, "pagination-block", "pagination", "pagination-rounded"], [3, "pageChanged", "totalItems", "itemsPerPage"], ["role", "document"], [1, "card"], [1, "card-body"], [1, "favorite-icon"], ["href", "javascript:void(0)"], [1, "uil", "uil-heart-alt", "fs-18"], ["alt", "", "height", "50", 1, "mb-3", 3, "src"], [1, "fs-17", "mb-2"], ["href", "javascript:void(0);", 1, "text-dark"], [1, "text-muted", "fw-normal"], [1, "list-inline", "mb-0"], [1, "list-inline-item"], [1, "text-muted", "fs-14", "mb-1"], [1, "text-muted", "fs-14", "mb-0"], [1, "mdi", "mdi-map-marker"], [1, "uil", "uil-wallet"], [1, "mt-3", "hstack", "gap-2"], [1, "badge", "rounded-1", "badge-soft-success"], [1, "badge", "rounded-1", "badge-soft-warning"], [1, "badge", "rounded-1", "badge-soft-info"], [1, "mt-4", "hstack", "gap-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", 1, "btn", "btn-soft-success", "w-100"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", 1, "btn", "btn-soft-primary", "w-100", 3, "click"], [1, "modal-header"], ["id", "applyJobsLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", "id", "close-modal", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "mb-3"], ["for", "fullnameInput", 1, "form-label"], ["type", "text", "id", "fullnameInput", "placeholder", "Enter your name", 1, "form-control"], [1, "col-lg-6"], ["for", "emailInput", 1, "form-label"], ["type", "email", "id", "emailInput", "placeholder", "Enter your email", 1, "form-control"], ["for", "phoneNumberInput", 1, "form-label"], ["type", "email", "id", "phoneNumberInput", "placeholder", "Enter your number", 1, "form-control"], ["for", "uploadResume", 1, "form-label"], ["type", "file", "id", "uploadResume", "placeholder", "Upload resume", 1, "form-control"], [1, "mb-4"], ["for", "messageInput", 1, "form-label"], ["id", "messageInput", "rows", "3", "placeholder", "Enter your message", 1, "form-control"], [1, "text-end"], [1, "btn", "btn-success", "me-1"], [1, "bx", "bx-send", "align-middle"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-secondary"]], template: function GridComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275element(1, "app-page-title", 2);
        \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "div", 7)(7, "div", 8)(8, "div", 9)(9, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function GridComponent_Template_input_ngModelChange_9_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.term, $event) || (ctx.term = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function GridComponent_Template_input_ngModelChange_9_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.searchJob());
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 11)(11, "div", 9)(12, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function GridComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.searchterm, $event) || (ctx.searchterm = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function GridComponent_Template_input_ngModelChange_12_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.Location());
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 11)(14, "div", 9);
        \u0275\u0275element(15, "input", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 14)(17, "div", 9)(18, "div", 15);
        \u0275\u0275element(19, "input", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 14)(21, "div", 17)(22, "button", 18);
        \u0275\u0275element(23, "i", 19);
        \u0275\u0275text(24, " Find Jobs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "a", 20);
        \u0275\u0275listener("click", function GridComponent_Template_a_click_25_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.isCollapsed = !ctx.isCollapsed);
        });
        \u0275\u0275element(26, "i", 21);
        \u0275\u0275text(27, " Advance");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "div", 22)(29, "div", 23)(30, "div", 7)(31, "div", 24)(32, "div")(33, "label", 25);
        \u0275\u0275text(34, "Experience");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 26);
        \u0275\u0275element(36, "input", 27);
        \u0275\u0275elementStart(37, "label", 28);
        \u0275\u0275text(38, "All");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 26);
        \u0275\u0275element(40, "input", 29);
        \u0275\u0275elementStart(41, "label", 30);
        \u0275\u0275text(42, "Fresher");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 26);
        \u0275\u0275element(44, "input", 31);
        \u0275\u0275elementStart(45, "label", 32);
        \u0275\u0275text(46, "1-2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 26);
        \u0275\u0275element(48, "input", 33);
        \u0275\u0275elementStart(49, "label", 34);
        \u0275\u0275text(50, "2-3");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 26);
        \u0275\u0275element(52, "input", 35);
        \u0275\u0275elementStart(53, "label", 36);
        \u0275\u0275text(54, "4+");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "div", 24)(56, "div")(57, "label", 37);
        \u0275\u0275text(58, "Job Type");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "div", 26);
        \u0275\u0275element(60, "input", 38);
        \u0275\u0275elementStart(61, "label", 39);
        \u0275\u0275text(62, "Full Time");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div", 26);
        \u0275\u0275element(64, "input", 40);
        \u0275\u0275elementStart(65, "label", 41);
        \u0275\u0275text(66, "Part Time");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "div", 26);
        \u0275\u0275element(68, "input", 42);
        \u0275\u0275elementStart(69, "label", 43);
        \u0275\u0275text(70, "Freelance");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "div", 26);
        \u0275\u0275element(72, "input", 44);
        \u0275\u0275elementStart(73, "label", 45);
        \u0275\u0275text(74, "Internship");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(75, "div", 8)(76, "div", 9)(77, "label", 46);
        \u0275\u0275text(78, "Qualification");
        \u0275\u0275elementEnd();
        \u0275\u0275element(79, "input", 47)(80, "i", 48);
        \u0275\u0275elementEnd()()()()()()()()()();
        \u0275\u0275elementStart(81, "div", 49);
        \u0275\u0275repeaterCreate(82, GridComponent_For_83_Template, 36, 7, "div", 50, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "div", 51)(85, "div", 4)(86, "div", 52)(87, "nav", 53)(88, "div", 54)(89, "pagination", 55);
        \u0275\u0275listener("pageChanged", function GridComponent_Template_pagination_pageChanged_89_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.pageChanged($event));
        });
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275template(90, GridComponent_ng_template_90_Template, 39, 0, "ng-template", 56, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.term);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchterm);
        \u0275\u0275advance(7);
        \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(8, _c02));
        \u0275\u0275advance(6);
        \u0275\u0275attribute("aria-expanded", !ctx.isCollapsed);
        \u0275\u0275advance(3);
        \u0275\u0275property("collapse", ctx.isCollapsed);
        \u0275\u0275advance(54);
        \u0275\u0275repeater(ctx.grids);
        \u0275\u0275advance(7);
        \u0275\u0275property("totalItems", ctx.gridata == null ? null : ctx.gridata.length)("itemsPerPage", 8);
      }
    }, dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, BsDatepickerDirective, BsDatepickerInputDirective, PaginationComponent, CollapseDirective, PagetitleComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridComponent, [{
    type: Component,
    args: [{ selector: "app-grid", standalone: false, template: '<div class="container-fluid">\r\n    <app-page-title title="Jobs Grid" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r\n\r\n    <div class="row">\r\n        <div class="col-lg-12">\r\n            <div class="card job-filter">\r\n                <div class="card-body p-3">\r\n                    <div class="row g-3">\r\n                        <div class="col-xxl-4 col-lg-4">\r\n                            <div class="position-relative">\r\n                                <input type="text" class="form-control" id="searchJob" autocomplete="off" placeholder="Search your job" [(ngModel)]="term" (ngModelChange)="searchJob()">\r\n                            </div>\r\n                        </div>\r\n                        <!--end col-->\r\n                        <div class="col-xxl-2 col-lg-4">\r\n                            <div class="position-relative">\r\n                                <input type="text" class="form-control" id="locationInput" autocomplete="off" placeholder="San Francisco, LA" [(ngModel)]="searchterm" (ngModelChange)="Location()">\r\n                            </div>\r\n                        </div>\r\n                        <!--end col-->\r\n                        <div class="col-xxl-2 col-lg-4">\r\n                            <div class="position-relative">\r\n                                <input type="text" class="form-control" id="jobCategories" autocomplete="off" placeholder="Job Categories">\r\n                            </div>\r\n                        </div>\r\n                        <!--end col-->\r\n                        <div class="col-xxl-2 col-lg-6">\r\n                            <div class="position-relative">\r\n                                <div id="datepicker1">\r\n                                    <input type="text" placeholder="Datepicker" class="form-control" bsDatepicker [bsConfig]="{ showWeekNumbers: false }">\r\n                                </div><!-- input-group -->\r\n                            </div>\r\n                        </div>\r\n                        <!--end col-->\r\n\r\n                        <div class="col-xxl-2 col-lg-6">\r\n                            <div class="position-relative h-100 hstack gap-3">\r\n                                <button type="submit" class="btn btn-primary h-100 w-100"><i class="bx bx-search-alt align-middle"></i> Find Jobs</button>\r\n                                <a href="javascript:void(0);" class="btn btn-secondary h-100 w-100" (click)="isCollapsed = !isCollapsed" [attr.aria-expanded]="!isCollapsed" aria-controls="collapseExample"><i class="bx bx-filter-alt align-middle"></i> Advance</a>\r\n                            </div>\r\n                        </div>\r\n                        <!--end col-->\r\n                        <div class="collapse" id="collapseExample" [collapse]="isCollapsed">\r\n                            <div class="pt-4">\r\n                                <div class="row g-3">\r\n                                    <div class="col-xxl-4 col-lg-6">\r\n                                        <div>\r\n                                            <label for="experience" class="form-label">Experience</label>\r\n                                        </div>\r\n                                        <div class="form-check form-check-inline">\r\n                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">\r\n                                            <label class="form-check-label" for="inlineCheckbox1">All</label>\r\n                                        </div>\r\n                                        <div class="form-check form-check-inline">\r\n                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option1">\r\n                                            <label class="form-check-label" for="inlineCheckbox2">Fresher</label>\r\n                                        </div>\r\n                                        <div class="form-check form-check-inline">\r\n                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option2">\r\n                                            <label class="form-check-label" for="inlineCheckbox3">1-2</label>\r\n                                        </div>\r\n                                        <div class="form-check form-check-inline">\r\n                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="option2">\r\n                                            <label class="form-check-label" for="inlineCheckbox4">2-3</label>\r\n                                        </div>\r\n                                        <div class="form-check form-check-inline">\r\n                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox5" value="option3">\r\n                                            <label class="form-check-label" for="inlineCheckbox5">4+</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class="col-xxl-4 col-lg-6">\r\n                                        <div>\r\n                                            <label for="jobType" class="form-label">Job Type</label>\r\n                                        </div>\r\n                                        <div class="form-check form-check-inline">\r\n                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox6" value="option3">\r\n                                            <label class="form-check-label" for="inlineCheckbox6">Full Time</label>\r\n                                        </div>\r\n                                        <div class="form-check form-check-inline">\r\n                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox7" value="option3">\r\n                                            <label class="form-check-label" for="inlineCheckbox7">Part Time</label>\r\n                                        </div>\r\n                                        <div class="form-check form-check-inline">\r\n                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox8" value="option3">\r\n                                            <label class="form-check-label" for="inlineCheckbox8">Freelance</label>\r\n                                        </div>\r\n                                        <div class="form-check form-check-inline">\r\n                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox9" value="option3">\r\n                                            <label class="form-check-label" for="inlineCheckbox9">Internship</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class="col-xxl-4 col-lg-4">\r\n                                        <div class="position-relative">\r\n                                            <label for="qualificationInput" class="form-label">Qualification</label>\r\n                                            <input type="text" class="form-control" id="qualificationInput" autocomplete="off" placeholder="Qualification">\r\n                                            <i class="ri-government-line filter-icon"></i>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--end row-->\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--end col-->\r\n    </div>\r\n    <!--end row-->\r\n\r\n    <div class="row" id="jobgrid-list">\r\n        @for(data of grids;track $index){\r\n        <div class="col-xl-3 col-md-6">\r\n            <div class="card">\r\n                <div class="card-body">\r\n                    <div class="favorite-icon">\r\n                        <a href="javascript:void(0)"><i class="uil uil-heart-alt fs-18"></i></a>\r\n                    </div>\r\n                    <img src="{{data.image}}" alt="" height="50" class="mb-3">\r\n                    <h5 class="fs-17 mb-2"><a href="javascript:void(0);" class="text-dark">{{data.title}}</a> <small class="text-muted fw-normal">({{data.year}} Yrs Exp.)</small></h5>\r\n                    <ul class="list-inline mb-0">\r\n                        <li class="list-inline-item">\r\n                            <p class="text-muted fs-14 mb-1">{{data.company}}</p>\r\n                        </li>\r\n                        <li class="list-inline-item">\r\n                            <p class="text-muted fs-14 mb-0"><i class="mdi mdi-map-marker"></i> {{data.location}}</p>\r\n                        </li>\r\n                        <li class="list-inline-item">\r\n                            <p class="text-muted fs-14 mb-0"><i class="uil uil-wallet"></i> {{data.price}} / month</p>\r\n                        </li>\r\n                    </ul>\r\n                    <div class="mt-3 hstack gap-2">\r\n                        <span class="badge rounded-1 badge-soft-success">Full Time</span>\r\n                        <span class="badge rounded-1 badge-soft-warning">Urgent</span>\r\n                        <span class="badge rounded-1 badge-soft-info">Private</span>\r\n                    </div>\r\n                    <div class="mt-4 hstack gap-2">\r\n                        <a href="javascript:void(0);" data-bs-toggle="modal" class="btn btn-soft-success w-100">View Profile</a>\r\n                        <a href="javascript:void(0);" data-bs-toggle="modal" class="btn btn-soft-primary w-100" (click)="openModal(content)">Apply Now</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>}\r\n        <!--end col-->\r\n    </div><!--end row-->\r\n\r\n    <div class="row mb-3">\r\n        <div class="col-lg-12">\r\n            <div class="d-flex justify-content-center">\r\n                <nav aria-label="Page navigation example" id="pagination-element" class="mb-0">\r\n                    <div class="pagination-block pagination pagination-rounded">\r\n                        <pagination [totalItems]="gridata?.length" [itemsPerPage]="8" (pageChanged)="pageChanged($event)"></pagination>\r\n                    </div>\r\n                </nav>\r\n            </div>\r\n        </div><!--end col-->\r\n    </div>\r\n</div>\r\n\r\n<!-- Order Create Model -->\r\n<ng-template #content role="document" let-modal>\r\n    <div class="modal-header">\r\n        <h5 class="modal-title" id="applyJobsLabel">Apply For This Job</h5>\r\n        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="close-modal" (click)="modalRef?.hide()"></button>\r\n    </div>\r\n    <div class="modal-body">\r\n        <form>\r\n            <div class="row">\r\n                <div class="col-lg-12">\r\n                    <div class="mb-3">\r\n                        <label for="fullnameInput" class="form-label">Full Name</label>\r\n                        <input type="text" class="form-control" id="fullnameInput" placeholder="Enter your name">\r\n                    </div>\r\n                </div><!--end col-->\r\n                <div class="col-lg-6">\r\n                    <div class="mb-3">\r\n                        <label for="emailInput" class="form-label">Email</label>\r\n                        <input type="email" class="form-control" id="emailInput" placeholder="Enter your email">\r\n                    </div>\r\n                </div><!--end col-->\r\n                <div class="col-lg-6">\r\n                    <div class="mb-3">\r\n                        <label for="phoneNumberInput" class="form-label">Phone Number</label>\r\n                        <input type="email" class="form-control" id="phoneNumberInput" placeholder="Enter your number">\r\n                    </div>\r\n                </div><!--end col-->\r\n                <div class="col-lg-12">\r\n                    <div class="mb-3">\r\n                        <label for="uploadResume" class="form-label">Upload Resume</label>\r\n                        <input type="file" class="form-control" id="uploadResume" placeholder="Upload resume">\r\n                    </div>\r\n                </div><!--end col-->\r\n                <div class="col-lg-12">\r\n                    <div class="mb-4">\r\n                        <label for="messageInput" class="form-label">Message</label>\r\n                        <textarea class="form-control" id="messageInput" rows="3" placeholder="Enter your message"></textarea>\r\n                    </div>\r\n                </div><!--end col-->\r\n                <div class="col-lg-12">\r\n                    <div class="text-end">\r\n                        <button class="btn btn-success me-1">Send Application <i class="bx bx-send align-middle"></i></button>\r\n                        <button class="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>\r\n                    </div>\r\n                </div><!--end col-->\r\n            </div><!--end row-->\r\n        </form>\r\n    </div>\r\n</ng-template>\r\n<!--End Modal -->' }]
  }], () => [{ type: UntypedFormBuilder }, { type: BsModalService }, { type: Store }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GridComponent, { className: "GridComponent", filePath: "src/app/pages/jobs/grid/grid.component.ts", lineNumber: 20 });
})();

// src/app/pages/jobs/apply/apply.component.ts
var import_sweetalert22 = __toESM(require_sweetalert2_all());
var _c03 = (a0, a1, a2, a3) => ({ "badge-soft-success": a0, "badge-soft-danger": a1, "badge-soft-info": a2, "badge-soft-warning": a3 });
var _c12 = (a0, a1, a2) => ({ "bg-success": a0, "bg-info": a1, "bg-danger": a2 });
function ApplyComponent_For_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "th", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 28);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 28);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "ul", 29)(17, "li", 30)(18, "a", 31);
    \u0275\u0275element(19, "i", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "li", 33)(21, "a", 34);
    \u0275\u0275listener("click", function ApplyComponent_For_40_Template_a_click_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.delete($event));
    });
    \u0275\u0275element(22, "i", 35);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.company);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(8, _c03, data_r3.type === "Full Time", data_r3.type === "Part Time", data_r3.type === "Freelance", data_r3.type === "Internship"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r3.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.date);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(13, _c12, data_r3.status === "Active", data_r3.status === "New", data_r3.status === "Close"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r3.status);
  }
}
var ApplyComponent = class _ApplyComponent {
  constructor(modalService, formBuilder, store) {
    this.modalService = modalService;
    this.formBuilder = formBuilder;
    this.store = store;
    this.submitted = false;
    this.page = 1;
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Jobs" }, { label: "Job Apply", active: true }];
    this.store.dispatch(fetchJobApplyData());
    this.store.select(selecDatapply).subscribe((data) => {
      this.applies = data;
      this.applyjob = data;
      this.applies = this.applyjob.slice(0, 8);
    });
  }
  // Delete Data
  delete(event) {
    const swalWithBootstrapButtons = import_sweetalert22.default.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger ms-2"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      showCancelButton: true
    }).then((result) => {
      if (result.value) {
        swalWithBootstrapButtons.fire("Deleted!", "Your file has been deleted.", "success");
        event.target.closest("tr")?.remove();
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === import_sweetalert22.default.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  }
  // pagination
  pagechanged(event) {
    const startItem = (event.page - 1) * event.itemsPerPage;
    this.endItem = event.page * event.itemsPerPage;
    this.applies = this.applyjob(startItem, this.endItem);
  }
  static {
    this.\u0275fac = function ApplyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ApplyComponent)(\u0275\u0275directiveInject(BsModalService), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApplyComponent, selectors: [["app-apply"]], standalone: false, decls: 59, vars: 5, consts: [[1, "container-fluid"], ["title", "Job Apply", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body", "border-bottom"], [1, "d-flex", "align-items-center"], [1, "mb-0", "card-title", "flex-grow-1"], [1, "flex-shrink-0"], ["aria-label", "Default select example", 1, "form-select"], ["value", "Today", "selected", ""], ["value", "1 Monthly"], ["value", "6 Month"], ["value", "1 Years"], [1, "card-body"], [1, "table-responsive"], [1, "table", "table-bordered", "align-middle", "nowrap"], ["scope", "col"], [1, "row", "justify-content-between", "align-items-center"], [1, "col-auto", "me-auto"], [1, "text-muted", "mb-0"], [1, "col-auto"], [1, "card", "d-inline-block", "ms-auto", "mb-0"], [1, "card-body", "p-2"], ["aria-label", "Page navigation example", 1, "mb-0"], [1, "pagination", "mb-0"], [3, "pagechanged", "totalItems", "itemsPerPage"], ["scope", "row"], [1, "badge", 3, "ngClass"], [1, "list-unstyled", "hstack", "gap-1", "mb-0"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "View"], ["routerLink", "/jobs/details", 1, "btn", "btn-sm", "btn-soft-primary"], [1, "mdi", "mdi-eye-outline"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", 1, "btn", "btn-sm", "btn-soft-danger", 3, "click"], [1, "mdi", "mdi-delete-outline"]], template: function ApplyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h5", 7);
        \u0275\u0275text(8, "Applied Jobs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 8)(10, "select", 9)(11, "option", 10);
        \u0275\u0275text(12, "Today");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "option", 11);
        \u0275\u0275text(14, "1 Month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "option", 12);
        \u0275\u0275text(16, "6 Month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "option", 13);
        \u0275\u0275text(18, "1 Year");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(19, "div", 14)(20, "div", 15)(21, "table", 16)(22, "thead")(23, "tr")(24, "th", 17);
        \u0275\u0275text(25, "No");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "th", 17);
        \u0275\u0275text(27, "Job Title");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "th", 17);
        \u0275\u0275text(29, "Company Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "th", 17);
        \u0275\u0275text(31, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "th", 17);
        \u0275\u0275text(33, "Apply Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "th", 17);
        \u0275\u0275text(35, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "th", 17);
        \u0275\u0275text(37, "Action");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(38, "tbody");
        \u0275\u0275repeaterCreate(39, ApplyComponent_For_40_Template, 23, 17, "tr", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "div", 18)(42, "div", 19)(43, "p", 20);
        \u0275\u0275text(44, "Showing ");
        \u0275\u0275elementStart(45, "b");
        \u0275\u0275text(46);
        \u0275\u0275elementEnd();
        \u0275\u0275text(47, " to ");
        \u0275\u0275elementStart(48, "b");
        \u0275\u0275text(49);
        \u0275\u0275elementEnd();
        \u0275\u0275text(50, " of ");
        \u0275\u0275element(51, "b");
        \u0275\u0275text(52, " entries");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "div", 21)(54, "div", 22)(55, "div", 23)(56, "nav", 24)(57, "ul", 25)(58, "pagination", 26);
        \u0275\u0275listener("pagechanged", function ApplyComponent_Template_pagination_pagechanged_58_listener($event) {
          return ctx.pagechanged($event);
        });
        \u0275\u0275elementEnd()()()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(38);
        \u0275\u0275repeater(ctx.applies);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.applies == null ? null : ctx.applies.length);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.applyjob == null ? null : ctx.applyjob.length);
        \u0275\u0275advance(9);
        \u0275\u0275property("totalItems", ctx.applyjob == null ? null : ctx.applyjob.length)("itemsPerPage", 8);
      }
    }, dependencies: [NgClass, NgSelectOption, \u0275NgSelectMultipleOption, PaginationComponent, RouterLink, PagetitleComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplyComponent, [{
    type: Component,
    args: [{ selector: "app-apply", standalone: false, template: `<div class="container-fluid">\r
    <app-page-title title="Job Apply" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
\r
    <div class="row">\r
        <div class="col-lg-12">\r
            <div class="card">\r
                <div class="card-body border-bottom">\r
                    <div class="d-flex align-items-center">\r
                        <h5 class="mb-0 card-title flex-grow-1">Applied Jobs</h5>\r
                        <div class="flex-shrink-0">\r
                            <select class="form-select" aria-label="Default select example">\r
                                <option value="Today" selected>Today</option>\r
                                <option value="1 Monthly">1 Month</option>\r
                                <option value="6 Month">6 Month</option>\r
                                <option value="1 Years">1 Year</option>\r
                            </select>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="card-body">\r
                    <div class="table-responsive">\r
                        <table class="table table-bordered align-middle nowrap">\r
                            <thead>\r
                                <tr>\r
                                    <th scope="col">No</th>\r
                                    <th scope="col">Job Title</th>\r
                                    <th scope="col">Company Name</th>\r
                                    <th scope="col">Type</th>\r
                                    <th scope="col">Apply Date</th>\r
                                    <th scope="col">Status</th>\r
                                    <th scope="col">Action</th>\r
                                </tr>\r
                            </thead>\r
                            <tbody>\r
                                @for(data of applies;track $index){\r
                                <tr>\r
                                    <th scope="row">{{data.id}}</th>\r
                                    <td>{{data.title}}</td>\r
                                    <td>{{data.company}}</td>\r
                                    <td><span class="badge" [ngClass]="{'badge-soft-success': data.type === 'Full Time','badge-soft-danger': data.type === 'Part Time','badge-soft-info': data.type === 'Freelance','badge-soft-warning': data.type === 'Internship'}">{{data.type}}</span></td>\r
                                    <td>{{data.date}}</td>\r
                                    <td><span class="badge" [ngClass]="{ 'bg-success': data.status === 'Active', 'bg-info': data.status === 'New', 'bg-danger': data.status === 'Close'}">{{data.status}}</span></td>\r
                                    <td>\r
                                        <ul class="list-unstyled hstack gap-1 mb-0">\r
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">\r
                                                <a routerLink="/jobs/details" class="btn btn-sm btn-soft-primary"><i class="mdi mdi-eye-outline"></i></a>\r
                                            </li>\r
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">\r
                                                <a href="javascript:void(0);" data-bs-toggle="modal" class="btn btn-sm btn-soft-danger" (click)="delete($event)"><i class="mdi mdi-delete-outline"></i></a>\r
                                            </li>\r
                                        </ul>\r
                                    </td>\r
                                </tr>}\r
                            </tbody>\r
                        </table>\r
                    </div>\r
                    <div class="row justify-content-between align-items-center">\r
                        <div class="col-auto me-auto">\r
                            <p class="text-muted mb-0">Showing <b>{{applies?.length}}</b> to <b>{{applyjob?.length}}</b> of <b></b> entries</p>\r
                        </div>\r
                        <div class="col-auto">\r
                            <div class="card d-inline-block ms-auto mb-0">\r
                                <div class="card-body p-2">\r
                                    <nav aria-label="Page navigation example" class="mb-0">\r
                                        <ul class="pagination mb-0">\r
                                            <pagination [totalItems]="applyjob?.length" [itemsPerPage]="8" (pagechanged)="pagechanged($event)"></pagination>\r
                                        </ul>\r
                                    </nav>\r
                                </div>\r
                            </div>\r
                        </div>\r
                        <!--end col-->\r
                    </div>\r
                    <!--end row-->\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>` }]
  }], () => [{ type: BsModalService }, { type: UntypedFormBuilder }, { type: Store }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApplyComponent, { className: "ApplyComponent", filePath: "src/app/pages/jobs/apply/apply.component.ts", lineNumber: 23 });
})();

// src/app/pages/jobs/details/details.component.ts
var DetailsComponent = class _DetailsComponent {
  constructor() {
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Jobs" }, { label: "Job Details", active: true }];
  }
  static {
    this.\u0275fac = function DetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetailsComponent, selectors: [["app-details"]], standalone: false, decls: 207, vars: 1, consts: [[1, "container-fluid"], ["title", "Job Details", 3, "breadcrumbItems"], [1, "row"], [1, "col-xl-3"], [1, "card"], [1, "card-body"], [1, "fw-semibold"], [1, "table-responsive"], [1, "table"], ["scope", "col"], ["scope", "row"], [1, "badge", "badge-soft-success"], [1, "badge", "badge-soft-info"], [1, "hstack", "gap-2"], [1, "btn", "btn-soft-primary", "w-100"], [1, "btn", "btn-soft-danger", "w-100"], [1, "text-center"], ["src", "assets/images/companies/adobe-photoshop.svg", "alt", "", "height", "50", 1, "mx-auto", "d-block"], [1, "mt-3", "mb-1"], [1, "text-muted", "mb-0"], [1, "list-unstyled", "mt-4"], [1, "d-flex"], [1, "bx", "bx-phone", "text-primary", "fs-4"], [1, "ms-3"], [1, "fs-14", "mb-2"], [1, "text-muted", "fs-14", "mb-0"], [1, "mt-3"], [1, "bx", "bx-mail-send", "text-primary", "fs-4"], [1, "bx", "bx-globe", "text-primary", "fs-4"], [1, "text-muted", "fs-14", "text-break", "mb-0"], [1, "bx", "bx-map", "text-primary", "fs-4"], [1, "mt-4"], ["href", "javascript:void(0);", 1, "btn", "btn-soft-primary", "btn-hover", "w-100", "rounded"], [1, "mdi", "mdi-eye"], [1, "col-xl-9"], [1, "card-body", "border-bottom"], ["src", "assets/images/companies/wechat.svg", "alt", "", "height", "50"], [1, "flex-grow-1", "ms-3"], [1, "list-unstyled", "hstack", "gap-2", "mb-0"], [1, "bx", "bx-building-house"], [1, "text-muted"], [1, "bx", "bx-map"], [1, "fw-semibold", "mb-3"], [1, "vstack", "gap-3"], [1, "vstack", "gap-3", "mb-0"], [1, "mt-4", "d-flex", "gap-1"], [1, "badge", "badge-soft-warning"], [1, "list-inline", "mb-0"], [1, "list-inline-item", "mt-1"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-primary", "btn-hover"], [1, "uil", "uil-facebook-f"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-danger", "btn-hover"], [1, "uil", "uil-google"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-success", "btn-hover"], [1, "uil", "uil-linkedin-alt"]], template: function DetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5", 6);
        \u0275\u0275text(7, "Overview");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 7)(9, "table", 8)(10, "tbody")(11, "tr")(12, "th", 9);
        \u0275\u0275text(13, "Job Title");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "td", 9);
        \u0275\u0275text(15, "Magento Developer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "tr")(17, "th", 10);
        \u0275\u0275text(18, "Experience:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "td");
        \u0275\u0275text(20, "0-2 Years");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "tr")(22, "th", 10);
        \u0275\u0275text(23, "Vacancy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "td");
        \u0275\u0275text(25, "12");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "tr")(27, "th", 10);
        \u0275\u0275text(28, "Job Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "td")(30, "span", 11);
        \u0275\u0275text(31, "Full Time");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "tr")(33, "th", 10);
        \u0275\u0275text(34, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "td")(36, "span", 12);
        \u0275\u0275text(37, "New");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(38, "tr")(39, "th", 10);
        \u0275\u0275text(40, "Posted Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "td");
        \u0275\u0275text(42, "25 June, 2022");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "tr")(44, "th", 10);
        \u0275\u0275text(45, "Close Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "td");
        \u0275\u0275text(47, "13 April, 2022");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(48, "div", 13)(49, "button", 14);
        \u0275\u0275text(50, "Apply Now");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "button", 15);
        \u0275\u0275text(52, "Contact Us");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(53, "div", 4)(54, "div", 5)(55, "div", 16);
        \u0275\u0275element(56, "img", 17);
        \u0275\u0275elementStart(57, "h5", 18);
        \u0275\u0275text(58, "Themesbrand");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "p", 19);
        \u0275\u0275text(60, "Since July 2017");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "ul", 20)(62, "li")(63, "div", 21);
        \u0275\u0275element(64, "i", 22);
        \u0275\u0275elementStart(65, "div", 23)(66, "h6", 24);
        \u0275\u0275text(67, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "p", 25);
        \u0275\u0275text(69, "+589 560 56555");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(70, "li", 26)(71, "div", 21);
        \u0275\u0275element(72, "i", 27);
        \u0275\u0275elementStart(73, "div", 23)(74, "h6", 24);
        \u0275\u0275text(75, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "p", 25);
        \u0275\u0275text(77, "themesbrand@gmail.com");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(78, "li", 26)(79, "div", 21);
        \u0275\u0275element(80, "i", 28);
        \u0275\u0275elementStart(81, "div", 23)(82, "h6", 24);
        \u0275\u0275text(83, "Website");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "p", 29);
        \u0275\u0275text(85, "www.themesbrand.com");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(86, "li", 26)(87, "div", 21);
        \u0275\u0275element(88, "i", 30);
        \u0275\u0275elementStart(89, "div", 23)(90, "h6", 24);
        \u0275\u0275text(91, "Location");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "p", 25);
        \u0275\u0275text(93, "Oakridge Lane Richardson.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(94, "div", 31)(95, "a", 32);
        \u0275\u0275element(96, "i", 33);
        \u0275\u0275text(97, " View Profile");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(98, "div", 34)(99, "div", 4)(100, "div", 35)(101, "div", 21);
        \u0275\u0275element(102, "img", 36);
        \u0275\u0275elementStart(103, "div", 37)(104, "h5", 6);
        \u0275\u0275text(105, "Magento Developer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "ul", 38)(107, "li");
        \u0275\u0275element(108, "i", 39);
        \u0275\u0275elementStart(109, "span", 40);
        \u0275\u0275text(110, "Themesbrand");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(111, "li");
        \u0275\u0275element(112, "i", 41);
        \u0275\u0275elementStart(113, "span", 40);
        \u0275\u0275text(114, "California");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(115, "div", 5)(116, "h5", 42);
        \u0275\u0275text(117, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "p", 40);
        \u0275\u0275text(119, "We are looking to hire a skilled Magento developer to build and maintain eCommerce websites for our clients. As a Magento developer, you will be responsible for liaising with the design team, setting up Magento 1x and 2x sites, building modules and customizing extensions, testing the performance of each site, and maintaining security and feature updates after the installation is complete.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "h5", 42);
        \u0275\u0275text(121, "Responsibilities:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "ul", 43)(123, "li");
        \u0275\u0275text(124, " Meeting with the design team to discuss the needs of the company. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "li");
        \u0275\u0275text(126, " Building and configuring Magento 1x and 2x eCommerce websites. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "li");
        \u0275\u0275text(128, " Coding of the Magento templates. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "li");
        \u0275\u0275text(130, " Developing Magento modules in PHP using best practices. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(131, "li");
        \u0275\u0275text(132, " Designing themes and interfaces. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "li");
        \u0275\u0275text(134, " Setting performance tasks and goals. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "li");
        \u0275\u0275text(136, " Updating website features and security patches. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(137, "h5", 42);
        \u0275\u0275text(138, "Requirements:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "ul", 43)(140, "li");
        \u0275\u0275text(141, " Bachelor\u2019s degree in computer science or related field. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "li");
        \u0275\u0275text(143, " Advanced knowledge of Magento, JavaScript, HTML, PHP, CSS, and MySQL. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "li");
        \u0275\u0275text(145, " Experience with complete eCommerce lifecycle development. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "li");
        \u0275\u0275text(147, " Understanding of modern UI/UX trends. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(148, "li");
        \u0275\u0275text(149, " Knowledge of Google Tag Manager, SEO, Google Analytics, PPC, and A/B Testing. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(150, "li");
        \u0275\u0275text(151, " Good working knowledge of Adobe Photoshop and Adobe Illustrator. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(152, "li");
        \u0275\u0275text(153, " Strong attention to detail. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(154, "li");
        \u0275\u0275text(155, " Ability to project-manage and work to strict deadlines. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "li");
        \u0275\u0275text(157, " Ability to work in a team environment. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(158, "h5", 42);
        \u0275\u0275text(159, "Qualification:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "ul", 43)(161, "li");
        \u0275\u0275text(162, " B.C.A / M.C.A under National University course complete. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(163, "li");
        \u0275\u0275text(164, " 3 or more years of professional design experience ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(165, "li");
        \u0275\u0275text(166, " Advanced degree or equivalent experience in graphic and web design ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(167, "h5", 42);
        \u0275\u0275text(168, "Skill & Experience:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(169, "ul", 44)(170, "li");
        \u0275\u0275text(171, " Understanding of key Design Principal ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(172, "li");
        \u0275\u0275text(173, " Proficiency With HTML, CSS, Bootstrap ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(174, "li");
        \u0275\u0275text(175, " WordPress: 1 year (Required) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(176, "li");
        \u0275\u0275text(177, " Experience designing and developing responsive design websites ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "li");
        \u0275\u0275text(179, " web designing: 1 year (Preferred) ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(180, "div", 45)(181, "span", 46);
        \u0275\u0275text(182, "PHP");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "span", 46);
        \u0275\u0275text(184, "Magento");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(185, "span", 46);
        \u0275\u0275text(186, "Marketing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(187, "span", 46);
        \u0275\u0275text(188, "WordPress");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(189, "span", 46);
        \u0275\u0275text(190, "Bootstrap");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(191, "div", 31)(192, "ul", 47)(193, "li", 48);
        \u0275\u0275text(194, " Share this job: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(195, "li", 48)(196, "a", 49);
        \u0275\u0275element(197, "i", 50);
        \u0275\u0275text(198, " Facebook");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(199, "li", 48)(200, "a", 51);
        \u0275\u0275element(201, "i", 52);
        \u0275\u0275text(202, " Google+");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(203, "li", 48)(204, "a", 53);
        \u0275\u0275element(205, "i", 54);
        \u0275\u0275text(206, " linkedin");
        \u0275\u0275elementEnd()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
      }
    }, dependencies: [PagetitleComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetailsComponent, [{
    type: Component,
    args: [{ selector: "app-details", standalone: false, template: '<div class="container-fluid">\r\n    <app-page-title title="Job Details" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r\n\r\n    <div class="row">\r\n        <div class="col-xl-3">\r\n            <div class="card">\r\n                <div class="card-body">\r\n                    <h5 class="fw-semibold">Overview</h5>\r\n\r\n                    <div class="table-responsive">\r\n                        <table class="table">\r\n                            <tbody>\r\n                                <tr>\r\n                                    <th scope="col">Job Title</th>\r\n                                    <td scope="col">Magento Developer</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th scope="row">Experience:</th>\r\n                                    <td>0-2 Years</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th scope="row">Vacancy</th>\r\n                                    <td>12</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th scope="row">Job Type</th>\r\n                                    <td><span class="badge badge-soft-success">Full Time</span></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th scope="row">Status</th>\r\n                                    <td><span class="badge badge-soft-info">New</span></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th scope="row">Posted Date</th>\r\n                                    <td>25 June, 2022</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th scope="row">Close Date</th>\r\n                                    <td>13 April, 2022</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                    <div class="hstack gap-2">\r\n                        <button class="btn btn-soft-primary w-100">Apply Now</button>\r\n                        <button class="btn btn-soft-danger w-100">Contact Us</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class="card">\r\n                <div class="card-body">\r\n                    <div class="text-center">\r\n                        <img src="assets/images/companies/adobe-photoshop.svg" alt="" height="50" class="mx-auto d-block">\r\n                        <h5 class="mt-3 mb-1">Themesbrand</h5>\r\n                        <p class="text-muted mb-0">Since July 2017</p>\r\n                    </div>\r\n\r\n                    <ul class="list-unstyled mt-4">\r\n                        <li>\r\n                            <div class="d-flex">\r\n                                <i class="bx bx-phone text-primary fs-4"></i>\r\n                                <div class="ms-3">\r\n                                    <h6 class="fs-14 mb-2">Phone</h6>\r\n                                    <p class="text-muted fs-14 mb-0">+589 560 56555</p>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                        <li class="mt-3">\r\n                            <div class="d-flex">\r\n                                <i class="bx bx-mail-send text-primary fs-4"></i>\r\n                                <div class="ms-3">\r\n                                    <h6 class="fs-14 mb-2">Email</h6>\r\n                                    <p class="text-muted fs-14 mb-0">themesbrand&#64;gmail.com</p>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                        <li class="mt-3">\r\n                            <div class="d-flex">\r\n                                <i class="bx bx-globe text-primary fs-4"></i>\r\n                                <div class="ms-3">\r\n                                    <h6 class="fs-14 mb-2">Website</h6>\r\n                                    <p class="text-muted fs-14 text-break mb-0">www.themesbrand.com</p>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                        <li class="mt-3">\r\n                            <div class="d-flex">\r\n                                <i class="bx bx-map text-primary fs-4"></i>\r\n                                <div class="ms-3">\r\n                                    <h6 class="fs-14 mb-2">Location</h6>\r\n                                    <p class="text-muted fs-14 mb-0">Oakridge Lane Richardson.</p>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                    <div class="mt-4">\r\n                        <a href="javascript:void(0);" class="btn btn-soft-primary btn-hover w-100 rounded"><i class="mdi mdi-eye"></i> View Profile</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div><!--end col-->\r\n        <div class="col-xl-9">\r\n            <div class="card">\r\n                <div class="card-body border-bottom">\r\n                    <div class="d-flex">\r\n                        <img src="assets/images/companies/wechat.svg" alt="" height="50">\r\n                        <div class="flex-grow-1 ms-3">\r\n                            <h5 class="fw-semibold">Magento Developer</h5>\r\n                            <ul class="list-unstyled hstack gap-2 mb-0">\r\n                                <li>\r\n                                    <i class="bx bx-building-house"></i> <span class="text-muted">Themesbrand</span>\r\n                                </li>\r\n                                <li>\r\n                                    <i class="bx bx-map"></i> <span class="text-muted">California</span>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class="card-body">\r\n                    <h5 class="fw-semibold mb-3">Description</h5>\r\n                    <p class="text-muted">We are looking to hire a skilled Magento developer to build and maintain eCommerce websites for our clients. As a Magento developer, you will be responsible for liaising with the design team, setting up Magento 1x and 2x sites, building modules and customizing extensions, testing the performance of each site, and maintaining security and feature updates after the installation is complete.</p>\r\n                    \r\n                    <h5 class="fw-semibold mb-3">Responsibilities:</h5>\r\n                    <ul class="vstack gap-3">\r\n                        <li>\r\n                            Meeting with the design team to discuss the needs of the company.\r\n                        </li>\r\n                        <li>\r\n                            Building and configuring Magento 1x and 2x eCommerce websites.\r\n                        </li>\r\n                        <li>\r\n                            Coding of the Magento templates.\r\n                        </li>\r\n                        <li>\r\n                            Developing Magento modules in PHP using best practices.\r\n                        </li>\r\n                        <li>\r\n                            Designing themes and interfaces.\r\n                        </li>\r\n                        <li>\r\n                            Setting performance tasks and goals.\r\n                        </li>\r\n                        <li>\r\n                            Updating website features and security patches.\r\n                        </li>\r\n                    </ul>\r\n\r\n                    <h5 class="fw-semibold mb-3">Requirements:</h5>\r\n                    <ul class="vstack gap-3">\r\n                        <li>\r\n                            Bachelor\u2019s degree in computer science or related field.\r\n                        </li>\r\n                        <li>\r\n                            Advanced knowledge of Magento, JavaScript, HTML, PHP, CSS, and MySQL.\r\n                        </li>\r\n                        <li>\r\n                            Experience with complete eCommerce lifecycle development.\r\n                        </li>\r\n                        <li>\r\n                            Understanding of modern UI/UX trends.\r\n                        </li>\r\n                        <li>\r\n                            Knowledge of Google Tag Manager, SEO, Google Analytics, PPC, and A/B Testing.\r\n                        </li>\r\n                        <li>\r\n                            Good working knowledge of Adobe Photoshop and Adobe Illustrator.\r\n                        </li>\r\n                        <li>\r\n                            Strong attention to detail.\r\n                        </li>\r\n                        <li>\r\n                            Ability to project-manage and work to strict deadlines.\r\n                        </li>\r\n                        <li>\r\n                            Ability to work in a team environment.\r\n                        </li>\r\n                    </ul>\r\n\r\n                    <h5 class="fw-semibold mb-3">Qualification:</h5>\r\n                    <ul class="vstack gap-3">\r\n                        <li>\r\n                            B.C.A / M.C.A under National University course complete.\r\n                        </li>\r\n                        <li>\r\n                            3 or more years of professional design experience\r\n                        </li>\r\n                        <li>\r\n                            Advanced degree or equivalent experience in graphic and web design\r\n                        </li>\r\n                    </ul>\r\n\r\n                    <h5 class="fw-semibold mb-3">Skill & Experience:</h5>\r\n                    <ul class="vstack gap-3 mb-0">\r\n                        <li>\r\n                            Understanding of key Design Principal\r\n                        </li>\r\n                        <li>\r\n                            Proficiency With HTML, CSS, Bootstrap\r\n                        </li>\r\n                        <li>\r\n                            WordPress: 1 year (Required)\r\n                        </li>\r\n                        <li>\r\n                            Experience designing and developing responsive design websites\r\n                        </li>\r\n                        <li>\r\n                            web designing: 1 year (Preferred)\r\n                        </li>\r\n                    </ul>\r\n\r\n                    <div class="mt-4 d-flex gap-1">\r\n                        <span class="badge badge-soft-warning">PHP</span>\r\n                        <span class="badge badge-soft-warning">Magento</span>\r\n                        <span class="badge badge-soft-warning">Marketing</span>\r\n                        <span class="badge badge-soft-warning">WordPress</span>\r\n                        <span class="badge badge-soft-warning">Bootstrap</span>\r\n                    </div>\r\n\r\n                    <div class="mt-4">\r\n                        <ul class="list-inline mb-0">\r\n                            <li class="list-inline-item mt-1">\r\n                                Share this job:\r\n                            </li>\r\n                            <li class="list-inline-item mt-1">\r\n                                <a href="javascript:void(0)" class="btn btn-outline-primary btn-hover"><i class="uil uil-facebook-f"></i> Facebook</a>\r\n                            </li>\r\n                            <li class="list-inline-item mt-1">\r\n                                <a href="javascript:void(0)" class="btn btn-outline-danger btn-hover"><i class="uil uil-google"></i> Google+</a>\r\n                            </li>\r\n                            <li class="list-inline-item mt-1">\r\n                                <a href="javascript:void(0)" class="btn btn-outline-success btn-hover"><i class="uil uil-linkedin-alt"></i> linkedin</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div><!--end col-->\r\n    </div><!--end row-->\r\n\r\n</div>' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetailsComponent, { className: "DetailsComponent", filePath: "src/app/pages/jobs/details/details.component.ts", lineNumber: 13 });
})();

// src/app/pages/jobs/categories/categories.component.ts
var CategoriesComponent = class _CategoriesComponent {
  constructor() {
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Jobs" }, { label: "Job Categories", active: true }];
  }
  static {
    this.\u0275fac = function CategoriesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CategoriesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoriesComponent, selectors: [["app-categories"]], standalone: false, decls: 150, vars: 1, consts: [[1, "container-fluid"], ["title", "Job Categories", 3, "breadcrumbItems"], [1, "row", "justify-content-center", "text-center"], [1, "col-xl-4"], [1, "mb-4"], [1, "text-muted"], [1, "row"], [1, "col-xl-3", "col-md-6"], [1, "card", "jobs-categories"], [1, "card-body"], ["href", "javascript:void(0);", 1, "px-3", "py-2", "rounded", "bg-light", "bg-opacity-50", "d-block", "mb-2"], [1, "badge", "text-bg-info", "float-end", "bg-opacity-100"], ["href", "javascript:void(0);", 1, "px-3", "py-2", "rounded", "bg-light", "bg-opacity-50", "d-block"]], template: function CategoriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4");
        \u0275\u0275text(6, "Browse Job By Categories");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8, "Post a job to tell us about your project. We'll quickly match you with the right freelancers.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "a", 10);
        \u0275\u0275text(14, "Accounting & Finance ");
        \u0275\u0275elementStart(15, "span", 11);
        \u0275\u0275text(16, "52");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "a", 10);
        \u0275\u0275text(18, "Development ");
        \u0275\u0275elementStart(19, "span", 11);
        \u0275\u0275text(20, "10");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "a", 10);
        \u0275\u0275text(22, "Customer Service ");
        \u0275\u0275elementStart(23, "span", 11);
        \u0275\u0275text(24, "64");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "a", 10);
        \u0275\u0275text(26, "Marketing ");
        \u0275\u0275elementStart(27, "span", 11);
        \u0275\u0275text(28, "105");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "a", 10);
        \u0275\u0275text(30, "Human Resource ");
        \u0275\u0275elementStart(31, "span", 11);
        \u0275\u0275text(32, "142");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "a", 10);
        \u0275\u0275text(34, "Health and Care ");
        \u0275\u0275elementStart(35, "span", 11);
        \u0275\u0275text(36, "01");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "a", 10);
        \u0275\u0275text(38, "Project Management");
        \u0275\u0275elementStart(39, "span", 11);
        \u0275\u0275text(40, "254");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "a", 12);
        \u0275\u0275text(42, "Automotive Jobs ");
        \u0275\u0275elementStart(43, "span", 11);
        \u0275\u0275text(44, "79");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(45, "div", 7)(46, "div", 8)(47, "div", 9)(48, "a", 10);
        \u0275\u0275text(49, "Accounting & Finance ");
        \u0275\u0275elementStart(50, "span", 11);
        \u0275\u0275text(51, "85");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "a", 10);
        \u0275\u0275text(53, "Development ");
        \u0275\u0275elementStart(54, "span", 11);
        \u0275\u0275text(55, "19");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "a", 10);
        \u0275\u0275text(57, "Customer Service ");
        \u0275\u0275elementStart(58, "span", 11);
        \u0275\u0275text(59, "48");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "a", 10);
        \u0275\u0275text(61, "Marketing ");
        \u0275\u0275elementStart(62, "span", 11);
        \u0275\u0275text(63, "34");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "a", 10);
        \u0275\u0275text(65, "Human Resource ");
        \u0275\u0275elementStart(66, "span", 11);
        \u0275\u0275text(67, "33");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "a", 10);
        \u0275\u0275text(69, "Health and Care ");
        \u0275\u0275elementStart(70, "span", 11);
        \u0275\u0275text(71, "748");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "a", 10);
        \u0275\u0275text(73, "Project Management");
        \u0275\u0275elementStart(74, "span", 11);
        \u0275\u0275text(75, "16");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(76, "a", 12);
        \u0275\u0275text(77, "Automotive Jobs ");
        \u0275\u0275elementStart(78, "span", 11);
        \u0275\u0275text(79, "94");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(80, "div", 7)(81, "div", 8)(82, "div", 9)(83, "a", 10);
        \u0275\u0275text(84, "Accounting & Finance ");
        \u0275\u0275elementStart(85, "span", 11);
        \u0275\u0275text(86, "17");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(87, "a", 10);
        \u0275\u0275text(88, "Development ");
        \u0275\u0275elementStart(89, "span", 11);
        \u0275\u0275text(90, "64");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(91, "a", 10);
        \u0275\u0275text(92, "Customer Service ");
        \u0275\u0275elementStart(93, "span", 11);
        \u0275\u0275text(94, "72");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "a", 10);
        \u0275\u0275text(96, "Marketing ");
        \u0275\u0275elementStart(97, "span", 11);
        \u0275\u0275text(98, "19");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(99, "a", 10);
        \u0275\u0275text(100, "Human Resource ");
        \u0275\u0275elementStart(101, "span", 11);
        \u0275\u0275text(102, "305");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(103, "a", 10);
        \u0275\u0275text(104, "Health and Care ");
        \u0275\u0275elementStart(105, "span", 11);
        \u0275\u0275text(106, "64");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(107, "a", 10);
        \u0275\u0275text(108, "Project Management");
        \u0275\u0275elementStart(109, "span", 11);
        \u0275\u0275text(110, "112");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(111, "a", 12);
        \u0275\u0275text(112, "Automotive Jobs ");
        \u0275\u0275elementStart(113, "span", 11);
        \u0275\u0275text(114, "31");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(115, "div", 7)(116, "div", 8)(117, "div", 9)(118, "a", 10);
        \u0275\u0275text(119, "Accounting & Finance ");
        \u0275\u0275elementStart(120, "span", 11);
        \u0275\u0275text(121, "85");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(122, "a", 10);
        \u0275\u0275text(123, "Development ");
        \u0275\u0275elementStart(124, "span", 11);
        \u0275\u0275text(125, "19");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(126, "a", 10);
        \u0275\u0275text(127, "Customer Service ");
        \u0275\u0275elementStart(128, "span", 11);
        \u0275\u0275text(129, "48");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(130, "a", 10);
        \u0275\u0275text(131, "Marketing ");
        \u0275\u0275elementStart(132, "span", 11);
        \u0275\u0275text(133, "34");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(134, "a", 10);
        \u0275\u0275text(135, "Human Resource ");
        \u0275\u0275elementStart(136, "span", 11);
        \u0275\u0275text(137, "33");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(138, "a", 10);
        \u0275\u0275text(139, "Health and Care ");
        \u0275\u0275elementStart(140, "span", 11);
        \u0275\u0275text(141, "748");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(142, "a", 10);
        \u0275\u0275text(143, "Project Management");
        \u0275\u0275elementStart(144, "span", 11);
        \u0275\u0275text(145, "16");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(146, "a", 12);
        \u0275\u0275text(147, "Automotive Jobs ");
        \u0275\u0275elementStart(148, "span", 11);
        \u0275\u0275text(149, "94");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
      }
    }, dependencies: [PagetitleComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoriesComponent, [{
    type: Component,
    args: [{ selector: "app-categories", standalone: false, template: `<div class="container-fluid">\r
    <app-page-title title="Job Categories" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
\r
    <div class="row justify-content-center text-center">\r
        <div class="col-xl-4">\r
            <div class="mb-4">\r
                <h4>Browse Job By Categories</h4>\r
                <p class="text-muted">Post a job to tell us about your project. We'll quickly match you with the right freelancers.</p>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <div class="row">\r
        <div class="col-xl-3 col-md-6">\r
            <div class="card jobs-categories">\r
                <div class="card-body">\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Accounting & Finance <span class="badge text-bg-info float-end bg-opacity-100">52</span></a>\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Development <span class="badge text-bg-info float-end bg-opacity-100">10</span></a>\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Customer Service <span class="badge text-bg-info float-end bg-opacity-100">64</span></a>\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Marketing <span class="badge text-bg-info float-end bg-opacity-100">105</span></a>\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Human Resource <span class="badge text-bg-info float-end bg-opacity-100">142</span></a>\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Health and Care <span class="badge text-bg-info float-end bg-opacity-100">01</span></a>\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Project Management<span class="badge text-bg-info float-end bg-opacity-100">254</span></a>\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block">Automotive Jobs <span class="badge text-bg-info float-end bg-opacity-100">79</span></a>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="col-xl-3 col-md-6">\r
            <div class="card jobs-categories">\r
                <div class="card-body">\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Accounting & Finance <span class="badge text-bg-info float-end bg-opacity-100">85</span></a>\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Development <span class="badge text-bg-info float-end bg-opacity-100">19</span></a>\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Customer Service <span class="badge text-bg-info float-end bg-opacity-100">48</span></a>\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Marketing <span class="badge text-bg-info float-end bg-opacity-100">34</span></a>\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Human Resource <span class="badge text-bg-info float-end bg-opacity-100">33</span></a>\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Health and Care <span class="badge text-bg-info float-end bg-opacity-100">748</span></a>\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Project Management<span class="badge text-bg-info float-end bg-opacity-100">16</span></a>\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block">Automotive Jobs <span class="badge text-bg-info float-end bg-opacity-100">94</span></a>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="col-xl-3 col-md-6">\r
            <div class="card jobs-categories">\r
                <div class="card-body">\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Accounting & Finance <span class="badge text-bg-info float-end bg-opacity-100">17</span></a>\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Development <span class="badge text-bg-info float-end bg-opacity-100">64</span></a>\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Customer Service <span class="badge text-bg-info float-end bg-opacity-100">72</span></a>\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Marketing <span class="badge text-bg-info float-end bg-opacity-100">19</span></a>\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Human Resource <span class="badge text-bg-info float-end bg-opacity-100">305</span></a>\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Health and Care <span class="badge text-bg-info float-end bg-opacity-100">64</span></a>\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Project Management<span class="badge text-bg-info float-end bg-opacity-100">112</span></a>\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block">Automotive Jobs <span class="badge text-bg-info float-end bg-opacity-100">31</span></a>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="col-xl-3 col-md-6">\r
            <div class="card jobs-categories">\r
                <div class="card-body">\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Accounting & Finance <span class="badge text-bg-info float-end bg-opacity-100">85</span></a>\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Development <span class="badge text-bg-info float-end bg-opacity-100">19</span></a>\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Customer Service <span class="badge text-bg-info float-end bg-opacity-100">48</span></a>\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Marketing <span class="badge text-bg-info float-end bg-opacity-100">34</span></a>\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Human Resource <span class="badge text-bg-info float-end bg-opacity-100">33</span></a>\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Health and Care <span class="badge text-bg-info float-end bg-opacity-100">748</span></a>\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2">Project Management<span class="badge text-bg-info float-end bg-opacity-100">16</span></a>\r
                    <a href="javascript:void(0);" class="px-3 py-2 rounded bg-light bg-opacity-50 d-block">Automotive Jobs <span class="badge text-bg-info float-end bg-opacity-100">94</span></a>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
\r
</div>` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoriesComponent, { className: "CategoriesComponent", filePath: "src/app/pages/jobs/categories/categories.component.ts", lineNumber: 13 });
})();

// src/app/store/Candidate/candidate-selector.ts
var selectDataState2 = createFeatureSelector("CandidateList");
var selectData2 = createSelector(selectDataState2, (state) => state.candidateList);
var selectDataLoading2 = createSelector(selectDataState2, (state) => state.loading);
var selectDataError2 = createSelector(selectDataState2, (state) => state.error);

// src/app/pages/jobs/candidate-list/candidate-list.component.ts
var import_lodash = __toESM(require_lodash());
var _c04 = () => ({ showWeekNumbers: false });
var _c13 = (a0, a1, a2, a3) => ({ "badge-soft-success": a0, "badge-soft-danger": a1, "badge-soft-info": a2, "badge-soft-warning": a3 });
var _c22 = (a0) => ({ "active": a0 });
function CandidateListComponent_For_94_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r4);
  }
}
function CandidateListComponent_For_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55)(2, "div", 56)(3, "div", 57)(4, "div", 58)(5, "span", 59);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 60);
    \u0275\u0275listener("click", function CandidateListComponent_For_94_Template_button_click_7_listener() {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeMenu(data_r2.id));
    });
    \u0275\u0275element(8, "i", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 62);
    \u0275\u0275element(10, "img", 63);
    \u0275\u0275elementStart(11, "h6", 64);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 65);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 66)(16, "div");
    \u0275\u0275element(17, "i", 67);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 68);
    \u0275\u0275element(20, "i", 69);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 70);
    \u0275\u0275repeaterCreate(23, CandidateListComponent_For_94_For_24_Template, 2, 1, "span", 71, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 72)(26, "a", 73);
    \u0275\u0275text(27, "View Profile");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(12, _c13, data_r2.type === "Full Time", data_r2.type === "Part Time", data_r2.type === "Freelance", data_r2.type === "Internship"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r2.type);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("btn btn-light btn-sm like-btn active_", data_r2.id));
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(17, _c22, data_r2.active == true));
    \u0275\u0275advance(3);
    \u0275\u0275property("src", \u0275\u0275interpolate(data_r2.profile), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.position);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", data_r2.location, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" $", data_r2.price, " / hrs");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(data_r2.tags);
  }
}
var CandidateListComponent = class _CandidateListComponent {
  constructor(store) {
    this.store = store;
    this.isCollapsed = true;
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Jobs" }, { label: "Candidate List", active: true }];
    this.store.dispatch(fetchCandidatelistData());
    this.store.select(selectData2).subscribe((data) => {
      this.lists = data;
      this.alllists = (0, import_lodash.cloneDeep)(data);
      this.lists = this.alllists.slice(0, 8);
    });
  }
  // filter status
  taskFilter() {
    var status = document.getElementById("idType").value;
    if (status) {
      this.lists = this.alllists.filter((data) => {
        return data.type === status;
      });
    } else {
      this.lists = this.alllists;
    }
  }
  // search term
  searchTerm() {
    if (this.term) {
      this.lists = this.alllists.filter((el) => {
        return el.name.toLowerCase().includes(this.term.toLowerCase());
      });
    } else {
      this.lists = this.alllists;
    }
  }
  // location
  Location() {
    if (this.searchterm) {
      this.lists = this.alllists.filter((el) => {
        return el.location.toLowerCase().includes(this.searchterm.toLowerCase());
      });
    } else {
      this.lists = this.alllists;
    }
  }
  /**
   * Active Toggle navbar
   */
  activeMenu(id) {
    document.querySelector(".active_" + id)?.classList.toggle("active");
  }
  static {
    this.\u0275fac = function CandidateListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CandidateListComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CandidateListComponent, selectors: [["app-candidate-list"]], standalone: false, decls: 95, vars: 7, consts: [[1, "container-fluid"], ["title", "Candidate List", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-12"], [1, "card", "job-filter"], [1, "card-body", "p-3"], ["action", "javascript:void(0);"], [1, "row", "g-3"], [1, "col-xxl-4", "col-lg-4"], [1, "position-relative"], ["type", "text", "id", "searchList", "autocomplete", "off", "placeholder", "Search your candidate", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-xxl-2", "col-lg-4"], ["type", "text", "id", "locationInput", "autocomplete", "off", "placeholder", "San Francisco, LA", 1, "form-control", 3, "ngModelChange", "ngModel"], ["id", "idType", "aria-label", "Default select example", 1, "form-select", 3, "click"], ["value", ""], ["value", "Freelance"], ["value", "Full Time"], ["value", "Part Time"], ["value", "Internship"], [1, "col-xxl-2", "col-lg-6"], ["id", "datepicker1"], ["type", "text", "placeholder", "Datepicker", "bsDatepicker", "", 1, "form-control", 3, "bsConfig"], [1, "position-relative", "h-100", "hstack", "gap-3"], ["type", "submit", 1, "btn", "btn-primary", "h-100", "w-100"], [1, "bx", "bx-search-alt", "align-middle"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "aria-controls", "collapseExample", 1, "btn", "btn-secondary", "h-100", "w-100", 3, "click"], [1, "bx", "bx-filter-alt", "align-middle"], ["id", "collapseExample", 1, "collapse", 3, "collapse"], [1, "col-xxl-4", "col-lg-6"], ["for", "experience", 1, "form-label"], [1, "form-check", "form-check-inline"], ["type", "checkbox", "id", "inlineCheckbox1", "value", "option1", 1, "form-check-input"], ["for", "inlineCheckbox1", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox2", "value", "option1", 1, "form-check-input"], ["for", "inlineCheckbox2", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox3", "value", "option2", 1, "form-check-input"], ["for", "inlineCheckbox3", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox4", "value", "option2", 1, "form-check-input"], ["for", "inlineCheckbox4", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox5", "value", "option3", 1, "form-check-input"], ["for", "inlineCheckbox5", 1, "form-check-label"], ["for", "jobType", 1, "form-label"], ["type", "checkbox", "id", "inlineCheckbox6", "value", "option3", 1, "form-check-input"], ["for", "inlineCheckbox6", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox7", "value", "option3", 1, "form-check-input"], ["for", "inlineCheckbox7", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox8", "value", "option3", 1, "form-check-input"], ["for", "inlineCheckbox8", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox9", "value", "option3", 1, "form-check-input"], ["for", "inlineCheckbox9", 1, "form-check-label"], ["for", "qualificationInput", 1, "form-label"], ["type", "text", "id", "qualificationInput", "autocomplete", "off", "placeholder", "Qualification", 1, "form-control"], [1, "ri-government-line", "filter-icon"], ["id", "candidate-list", 1, "row"], [1, "col-xl-3", "col-md-6"], [1, "card"], [1, "card-body"], [1, "d-flex", "align-start", "mb-3"], [1, "flex-grow-1"], [1, "badge", 3, "ngClass"], ["type", "button", "data-bs-toggle", "button", 3, "click", "ngClass"], [1, "bx", "bx-heart"], [1, "text-center", "mb-3"], ["alt", "", 1, "avatar-sm", "rounded-circle", 3, "src"], [1, "font-size-15", "mt-3", "mb-1"], [1, "mb-0", "text-muted"], [1, "d-flex", "mb-3", "justify-content-center", "gap-2", "text-muted"], [1, "bx", "bx-map", "align-middle", "text-primary"], [1, "mb-0", "text-center"], [1, "bx", "bx-money", "align-middle", "text-primary"], [1, "hstack", "gap-2", "justify-content-center"], [1, "badge", "badge-soft-secondary"], [1, "mt-4", "pt-1"], ["routerLink", "/jobs/candidate-overview", 1, "btn", "btn-soft-primary", "d-block"]], template: function CandidateListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function CandidateListComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.term, $event) || (ctx.term = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function CandidateListComponent_Template_input_ngModelChange_10_listener() {
          return ctx.searchTerm();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 11)(12, "div", 9)(13, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function CandidateListComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchterm, $event) || (ctx.searchterm = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function CandidateListComponent_Template_input_ngModelChange_13_listener() {
          return ctx.Location();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "div", 11)(15, "div", 9)(16, "select", 13);
        \u0275\u0275listener("click", function CandidateListComponent_Template_select_click_16_listener() {
          return ctx.taskFilter();
        });
        \u0275\u0275elementStart(17, "option", 14);
        \u0275\u0275text(18, "Select for");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "option", 15);
        \u0275\u0275text(20, "Freelance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "option", 16);
        \u0275\u0275text(22, "Full Time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "option", 17);
        \u0275\u0275text(24, "Part Time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "option", 18);
        \u0275\u0275text(26, "Internship");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(27, "div", 19)(28, "div", 9)(29, "div", 20);
        \u0275\u0275element(30, "input", 21);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 19)(32, "div", 22)(33, "button", 23);
        \u0275\u0275element(34, "i", 24);
        \u0275\u0275text(35, " Find Jobs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "a", 25);
        \u0275\u0275listener("click", function CandidateListComponent_Template_a_click_36_listener() {
          return ctx.isCollapsed = !ctx.isCollapsed;
        });
        \u0275\u0275element(37, "i", 26);
        \u0275\u0275text(38, " Advance");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "div", 27)(40, "div")(41, "div", 7)(42, "div", 28)(43, "div")(44, "label", 29);
        \u0275\u0275text(45, "Experience");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 30);
        \u0275\u0275element(47, "input", 31);
        \u0275\u0275elementStart(48, "label", 32);
        \u0275\u0275text(49, "All");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 30);
        \u0275\u0275element(51, "input", 33);
        \u0275\u0275elementStart(52, "label", 34);
        \u0275\u0275text(53, "Fresher");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "div", 30);
        \u0275\u0275element(55, "input", 35);
        \u0275\u0275elementStart(56, "label", 36);
        \u0275\u0275text(57, "1-2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "div", 30);
        \u0275\u0275element(59, "input", 37);
        \u0275\u0275elementStart(60, "label", 38);
        \u0275\u0275text(61, "2-3");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "div", 30);
        \u0275\u0275element(63, "input", 39);
        \u0275\u0275elementStart(64, "label", 40);
        \u0275\u0275text(65, "4+");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(66, "div", 28)(67, "div")(68, "label", 41);
        \u0275\u0275text(69, "Job Type");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "div", 30);
        \u0275\u0275element(71, "input", 42);
        \u0275\u0275elementStart(72, "label", 43);
        \u0275\u0275text(73, "Full Time");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "div", 30);
        \u0275\u0275element(75, "input", 44);
        \u0275\u0275elementStart(76, "label", 45);
        \u0275\u0275text(77, "Part Time");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(78, "div", 30);
        \u0275\u0275element(79, "input", 46);
        \u0275\u0275elementStart(80, "label", 47);
        \u0275\u0275text(81, "Freelance");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(82, "div", 30);
        \u0275\u0275element(83, "input", 48);
        \u0275\u0275elementStart(84, "label", 49);
        \u0275\u0275text(85, "Internship");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(86, "div", 8)(87, "div", 9)(88, "label", 50);
        \u0275\u0275text(89, "Qualification");
        \u0275\u0275elementEnd();
        \u0275\u0275element(90, "input", 51)(91, "i", 52);
        \u0275\u0275elementEnd()()()()()()()()()()();
        \u0275\u0275elementStart(92, "div", 53);
        \u0275\u0275repeaterCreate(93, CandidateListComponent_For_94_Template, 28, 19, "div", 54, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.term);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchterm);
        \u0275\u0275advance(17);
        \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(6, _c04));
        \u0275\u0275advance(6);
        \u0275\u0275attribute("aria-expanded", !ctx.isCollapsed);
        \u0275\u0275advance(3);
        \u0275\u0275property("collapse", ctx.isCollapsed);
        \u0275\u0275advance(54);
        \u0275\u0275repeater(ctx.lists);
      }
    }, dependencies: [NgClass, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgModel, BsDatepickerDirective, BsDatepickerInputDirective, CollapseDirective, RouterLink, PagetitleComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CandidateListComponent, [{
    type: Component,
    args: [{ selector: "app-candidate-list", standalone: false, template: `<div class="container-fluid">\r
    <app-page-title title="Candidate List" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
\r
    <div class="row">\r
        <div class="col-lg-12">\r
            <div class="card job-filter">\r
                <div class="card-body p-3">\r
                    <div action="javascript:void(0);">\r
                        <div class="row g-3">\r
                            <div class="col-xxl-4 col-lg-4">\r
                                <div class="position-relative">\r
                                    <input type="text" class="form-control" id="searchList" autocomplete="off" placeholder="Search your candidate" [(ngModel)]="term" (ngModelChange)="searchTerm()">\r
                                </div>\r
                            </div>\r
                            <!--end col-->\r
                            <div class="col-xxl-2 col-lg-4">\r
                                <div class="position-relative">\r
                                    <input type="text" class="form-control" id="locationInput" autocomplete="off" [(ngModel)]="searchterm" (ngModelChange)="Location()" placeholder="San Francisco, LA">\r
                                </div>\r
                            </div>\r
                            <!--end col-->\r
                            <div class="col-xxl-2 col-lg-4">\r
                                <div class="position-relative">\r
                                    <select class="form-select" id="idType" aria-label="Default select example" (click)="taskFilter()">\r
                                        <option value="">Select for</option>\r
                                        <option value="Freelance">Freelance</option>\r
                                        <option value="Full Time">Full Time</option>\r
                                        <option value="Part Time">Part Time</option>\r
                                        <option value="Internship">Internship</option>\r
                                    </select>\r
                                </div>\r
                            </div>\r
                            <!--end col-->\r
                            <div class="col-xxl-2 col-lg-6">\r
                                <div class="position-relative">\r
                                    <div id="datepicker1">\r
                                        <input type="text" placeholder="Datepicker" class="form-control" bsDatepicker [bsConfig]="{ showWeekNumbers: false }">\r
                                    </div><!-- input-group -->\r
                                </div>\r
                            </div>\r
                            <!--end col-->\r
\r
                            <div class="col-xxl-2 col-lg-6">\r
                                <div class="position-relative h-100 hstack gap-3">\r
                                    <button type="submit" class="btn btn-primary h-100 w-100"><i class="bx bx-search-alt align-middle"></i> Find Jobs</button>\r
                                    <a href="javascript:void(0);" data-bs-toggle="collapse" class="btn btn-secondary h-100 w-100" (click)="isCollapsed = !isCollapsed" [attr.aria-expanded]="!isCollapsed" aria-controls="collapseExample"><i class="bx bx-filter-alt align-middle"></i> Advance</a>\r
                                </div>\r
                            </div>\r
                            <!--end col-->\r
                            <div class="collapse" id="collapseExample" [collapse]="isCollapsed">\r
                                <div>\r
                                    <div class="row g-3">\r
                                        <div class="col-xxl-4 col-lg-6">\r
                                            <div>\r
                                                <label for="experience" class="form-label">Experience</label>\r
                                            </div>\r
                                            <div class="form-check form-check-inline">\r
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">\r
                                                <label class="form-check-label" for="inlineCheckbox1">All</label>\r
                                            </div>\r
                                            <div class="form-check form-check-inline">\r
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option1">\r
                                                <label class="form-check-label" for="inlineCheckbox2">Fresher</label>\r
                                            </div>\r
                                            <div class="form-check form-check-inline">\r
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option2">\r
                                                <label class="form-check-label" for="inlineCheckbox3">1-2</label>\r
                                            </div>\r
                                            <div class="form-check form-check-inline">\r
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="option2">\r
                                                <label class="form-check-label" for="inlineCheckbox4">2-3</label>\r
                                            </div>\r
                                            <div class="form-check form-check-inline">\r
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox5" value="option3">\r
                                                <label class="form-check-label" for="inlineCheckbox5">4+</label>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-xxl-4 col-lg-6">\r
                                            <div>\r
                                                <label for="jobType" class="form-label">Job Type</label>\r
                                            </div>\r
                                            <div class="form-check form-check-inline">\r
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox6" value="option3">\r
                                                <label class="form-check-label" for="inlineCheckbox6">Full Time</label>\r
                                            </div>\r
                                            <div class="form-check form-check-inline">\r
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox7" value="option3">\r
                                                <label class="form-check-label" for="inlineCheckbox7">Part Time</label>\r
                                            </div>\r
                                            <div class="form-check form-check-inline">\r
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox8" value="option3">\r
                                                <label class="form-check-label" for="inlineCheckbox8">Freelance</label>\r
                                            </div>\r
                                            <div class="form-check form-check-inline">\r
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox9" value="option3">\r
                                                <label class="form-check-label" for="inlineCheckbox9">Internship</label>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-xxl-4 col-lg-4">\r
                                            <div class="position-relative">\r
                                                <label for="qualificationInput" class="form-label">Qualification</label>\r
                                                <input type="text" class="form-control" id="qualificationInput" autocomplete="off" placeholder="Qualification">\r
                                                <i class="ri-government-line filter-icon"></i>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                        <!--end row-->\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <!--end col-->\r
    </div>\r
    <!--end row-->\r
\r
    <div class="row" id="candidate-list">\r
        @for(data of lists;track $index){\r
        <div class="col-xl-3 col-md-6">\r
            <div class="card">\r
                <div class="card-body">\r
                    <div class="d-flex align-start mb-3">\r
                        <div class="flex-grow-1">\r
                            <span class="badge" [ngClass]="{'badge-soft-success': data.type === 'Full Time','badge-soft-danger': data.type === 'Part Time','badge-soft-info': data.type === 'Freelance','badge-soft-warning': data.type === 'Internship'}">{{data.type}}</span>\r
                        </div>\r
                        <button type="button" class="btn btn-light btn-sm like-btn active_{{data.id}}" data-bs-toggle="button" [ngClass]="{'active': data.active == true}" (click)="activeMenu(data.id)"><i class="bx bx-heart"></i></button>\r
                    </div>\r
                    <div class="text-center mb-3">\r
                        <img src="{{data.profile}}" alt="" class="avatar-sm rounded-circle" />\r
                        <h6 class="font-size-15 mt-3 mb-1">{{data.name}}</h6>\r
                        <p class="mb-0 text-muted">{{data.position}}</p>\r
                    </div>\r
                    <div class="d-flex mb-3 justify-content-center gap-2 text-muted">\r
                        <div>\r
                            <i class='bx bx-map align-middle text-primary'></i> {{data.location}}\r
                        </div>\r
                        <p class="mb-0 text-center"><i class='bx bx-money align-middle text-primary'></i> \${{data.price}} / hrs</p>\r
                    </div>\r
                    <div class="hstack gap-2 justify-content-center">\r
                        @for(tag of data.tags;track $index){\r
                        <span class="badge badge-soft-secondary">{{tag}}</span>\r
                        }\r
                    </div>\r
\r
                    <div class="mt-4 pt-1">\r
                        <a routerLink="/jobs/candidate-overview" class="btn btn-soft-primary d-block">View Profile</a>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        }\r
    </div>\r
\r
</div>` }]
  }], () => [{ type: Store }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CandidateListComponent, { className: "CandidateListComponent", filePath: "src/app/pages/jobs/candidate-list/candidate-list.component.ts", lineNumber: 18 });
})();

// src/app/pages/jobs/candidate-overview/candidate-overview.component.ts
var CandidateOverviewComponent = class _CandidateOverviewComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function CandidateOverviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CandidateOverviewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CandidateOverviewComponent, selectors: [["app-candidate-overview"]], standalone: false, decls: 278, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col-lg-12"], [1, "card", "mx-n4", "mt-n4", "bg-info-subtle"], [1, "card-body"], [1, "text-center", "mb-4"], ["src", "assets/images/users/avatar-6.jpg", "alt", "", 1, "avatar-md", "rounded-circle", "mx-auto", "d-block"], [1, "mt-3", "mb-1"], [1, "text-muted", "mb-3"], [1, "mx-auto", "d-flex", "gap-1", "justify-content-center"], [1, "badge", "text-bg-info"], [1, "badge", "text-bg-success"], [1, "badge", "text-bg-warning"], [1, "d-flex", "align-items-center"], [1, "list-unstyled", "hstack", "gap-3", "mb-0", "flex-grow-1"], [1, "bx", "bx-map", "align-middle"], [1, "bx", "bx-money", "align-middle"], [1, "bx", "bx-time", "align-middle"], [1, "hstack", "gap-2"], ["type", "button", 1, "btn", "btn-primary"], [1, "bx", "bx-download", "align-baseline", "ms-1"], ["type", "button", 1, "btn", "btn-light"], [1, "bx", "bx-bookmark", "align-baseline"], [1, "col-lg-3"], [1, "card"], [1, "list-unstyled", "vstack", "gap-3", "mb-0"], [1, "d-flex"], [1, "bx", "bx-calendar", "font-size-18", "text-primary"], [1, "ms-3"], [1, "mb-1", "fw-semibold"], [1, "text-muted"], [1, "bx", "bx-money", "font-size-18", "text-primary"], [1, "bx", "bx-user", "font-size-18", "text-primary"], [1, "mdi", "mdi-book-education", "font-size-18", "text-primary"], [1, "mdi", "mdi-google-translate", "font-size-18", "text-primary"], [1, "hstack", "gap-2", "mt-3"], ["href", "javascript:void(0);", 1, "btn", "btn-soft-primary", "w-100"], ["href", "javascript:void(0);", 1, "btn", "btn-soft-danger", "w-100"], [1, "col-lg-9"], [1, "mb-3"], [1, "text-muted", "mb-4"], [1, "verti-timeline", "list-unstyled"], [1, "event-list"], [1, "event-timeline-dot"], [1, "bx", "bx-right-arrow-circle"], [1, "flex-grow-1"], [1, "font-size-14", "mb-1"], [1, "text-muted", "mb-0"], [1, "col-xl-4"], [1, "flex-shrink-0", "me-4"], [1, "avatar-md"], [1, "avatar-title", "rounded-circle", "bg-light", "text-danger", "font-size-16"], ["src", "assets/images/companies/img-1.png", "alt", "", "height", "30"], [1, "flex-grow-1", "overflow-hidden"], [1, "text-truncate", "font-size-15"], ["href", "javascript: void(0);", 1, "text-dark"], [1, "avatar-group"], [1, "avatar-group-item"], ["href", "javascript: void(0);", 1, "d-inline-block"], ["src", "assets/images/users/avatar-4.jpg", "alt", "", 1, "rounded-circle", "avatar-xs"], ["src", "assets/images/users/avatar-5.jpg", "alt", "", 1, "rounded-circle", "avatar-xs"], [1, "avatar-xs"], [1, "avatar-title", "rounded-circle", "bg-success", "text-white", "font-size-16"], ["src", "assets/images/users/avatar-2.jpg", "alt", "", 1, "rounded-circle", "avatar-xs"], [1, "px-4", "py-3", "border-top"], [1, "list-inline", "mb-0"], [1, "list-inline-item", "me-3"], [1, "badge", "bg-success"], [1, "bx", "bx-calendar", "me-1"], [1, "bx", "bx-comment-dots", "me-1"], ["src", "assets/images/companies/img-4.png", "alt", "", "height", "30"], [1, "avatar-title", "rounded-circle", "bg-pink", "text-white", "font-size-16"], ["src", "assets/images/companies/img-5.png", "alt", "", "height", "30"], ["src", "assets/images/users/avatar-1.jpg", "alt", "", 1, "rounded-circle", "avatar-xs"], ["src", "assets/images/users/avatar-3.jpg", "alt", "", 1, "rounded-circle", "avatar-xs"], [1, "avatar-title", "rounded-circle", "bg-danger", "text-white", "font-size-16"], [1, "card-body", "border-bottom"], ["href", "javascript:void(0);", 1, "btn", "btn-soft-primary"], [1, "bx", "bxl-facebook", "align-middle", "me-1"], ["href", "javascript:void(0);", 1, "btn", "btn-soft-info"], [1, "bx", "bxl-twitter", "align-middle", "me-1"], ["href", "javascript:void(0);", 1, "btn", "btn-soft-pink"], [1, "bx", "bxl-instagram", "align-middle", "me-1"], ["href", "javascript:void(0);", 1, "btn", "btn-soft-success"], [1, "bx", "bxl-whatsapp", "align-middle", "me-1"]], template: function CandidateOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275element(6, "img", 6);
        \u0275\u0275elementStart(7, "h5", 7);
        \u0275\u0275text(8, "Steven Franklin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 8);
        \u0275\u0275text(10, "UI/UX Designer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 9)(12, "span", 10);
        \u0275\u0275text(13, "Freelance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 11);
        \u0275\u0275text(15, "Active");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span", 12);
        \u0275\u0275text(17, "Adobe XD");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 12);
        \u0275\u0275text(19, "Figma");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 12);
        \u0275\u0275text(21, "Sketch");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 13)(23, "ul", 14)(24, "li");
        \u0275\u0275element(25, "i", 15);
        \u0275\u0275text(26, " California ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "li");
        \u0275\u0275element(28, "i", 16);
        \u0275\u0275text(29, " $87 / hrs ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "li");
        \u0275\u0275element(31, "i", 17);
        \u0275\u0275text(32, " 5 days working ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 18)(34, "button", 19);
        \u0275\u0275text(35, "Download CV ");
        \u0275\u0275element(36, "i", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "button", 21);
        \u0275\u0275element(38, "i", 22);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(39, "div", 1)(40, "div", 23)(41, "div", 24)(42, "div", 4)(43, "ul", 25)(44, "li")(45, "div", 26);
        \u0275\u0275element(46, "i", 27);
        \u0275\u0275elementStart(47, "div", 28)(48, "h6", 29);
        \u0275\u0275text(49, "Experience:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "span", 30);
        \u0275\u0275text(51, "2+ Years");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(52, "li")(53, "div", 26);
        \u0275\u0275element(54, "i", 31);
        \u0275\u0275elementStart(55, "div", 28)(56, "h6", 29);
        \u0275\u0275text(57, "Current Salary:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "span", 30);
        \u0275\u0275text(59, "$ 3451");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(60, "li")(61, "div", 26);
        \u0275\u0275element(62, "i", 31);
        \u0275\u0275elementStart(63, "div", 28)(64, "h6", 29);
        \u0275\u0275text(65, "Expected Salary:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "span", 30);
        \u0275\u0275text(67, "$ 4000+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(68, "li")(69, "div", 26);
        \u0275\u0275element(70, "i", 32);
        \u0275\u0275elementStart(71, "div", 28)(72, "h6", 29);
        \u0275\u0275text(73, "Gender:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(74, " Male ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(75, "li")(76, "div", 26);
        \u0275\u0275element(77, "i", 33);
        \u0275\u0275elementStart(78, "div", 28)(79, "h6", 29);
        \u0275\u0275text(80, "Qualification:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "span", 30);
        \u0275\u0275text(82, "Master Degree");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(83, "li")(84, "div", 26);
        \u0275\u0275element(85, "i", 34);
        \u0275\u0275elementStart(86, "div", 28)(87, "h6", 29);
        \u0275\u0275text(88, "Languages:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "span", 30);
        \u0275\u0275text(90, "English, France");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(91, "li", 35)(92, "a", 36);
        \u0275\u0275text(93, "Hire Now");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "a", 37);
        \u0275\u0275text(95, "Contact Us");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(96, "div", 38)(97, "div", 24)(98, "div", 4)(99, "h5", 39);
        \u0275\u0275text(100, "About Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "p", 30);
        \u0275\u0275text(102, "Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "p", 40);
        \u0275\u0275text(104, "As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience lies in successfully conceptualizing, designing, and modifying consumer products specific to interior design and home furnishings.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "h5", 39);
        \u0275\u0275text(106, "Education");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "ul", 41)(108, "li", 42)(109, "div", 43);
        \u0275\u0275element(110, "i", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "div", 26)(112, "div", 45)(113, "div")(114, "h6", 46);
        \u0275\u0275text(115, "BCA - Bachelor of Computer Applications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "p", 30);
        \u0275\u0275text(117, "International University - (2004-2010)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "p", 47);
        \u0275\u0275text(119, "There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(120, "li", 42)(121, "div", 43);
        \u0275\u0275element(122, "i", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "div", 26)(124, "div", 45)(125, "div")(126, "h6", 46);
        \u0275\u0275text(127, "MCA - Master of Computer Application");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "p", 30);
        \u0275\u0275text(129, "International University - (2010-2012)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "p", 47);
        \u0275\u0275text(131, "There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(132, "li", 42)(133, "div", 43);
        \u0275\u0275element(134, "i", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "div", 26)(136, "div", 45)(137, "div")(138, "h6", 46);
        \u0275\u0275text(139, "Design Communication Visual");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "p", 30);
        \u0275\u0275text(141, "International University - (2012-2015)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "p", 47);
        \u0275\u0275text(143, "There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(144, "div", 1)(145, "div", 2)(146, "h5", 39);
        \u0275\u0275text(147, "Projects");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(148, "div", 48)(149, "div", 24)(150, "div", 4)(151, "div", 26)(152, "div", 49)(153, "div", 50)(154, "span", 51);
        \u0275\u0275element(155, "img", 52);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(156, "div", 53)(157, "h5", 54)(158, "a", 55);
        \u0275\u0275text(159, "New admin Design");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(160, "p", 40);
        \u0275\u0275text(161, "It will be as simple as Occidental");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "div", 56)(163, "div", 57)(164, "a", 58);
        \u0275\u0275element(165, "img", 59);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(166, "div", 57)(167, "a", 58);
        \u0275\u0275element(168, "img", 60);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(169, "div", 57)(170, "a", 58)(171, "div", 61)(172, "span", 62);
        \u0275\u0275text(173, " A ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(174, "div", 57)(175, "a", 58);
        \u0275\u0275element(176, "img", 63);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(177, "div", 64)(178, "ul", 65)(179, "li", 66)(180, "span", 67);
        \u0275\u0275text(181, "Completed");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(182, "li", 66);
        \u0275\u0275element(183, "i", 68);
        \u0275\u0275text(184, " 15 Oct, 22 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(185, "li", 66);
        \u0275\u0275element(186, "i", 69);
        \u0275\u0275text(187, " 214 ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(188, "div", 48)(189, "div", 24)(190, "div", 4)(191, "div", 26)(192, "div", 49)(193, "div", 50)(194, "span", 51);
        \u0275\u0275element(195, "img", 70);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(196, "div", 53)(197, "h5", 54)(198, "a", 55);
        \u0275\u0275text(199, "App Landing UI");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(200, "p", 40);
        \u0275\u0275text(201, "To achieve it would be necessary");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(202, "div", 56)(203, "div", 57)(204, "a", 58)(205, "div", 61)(206, "span", 71);
        \u0275\u0275text(207, " L ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(208, "div", 57)(209, "a", 58);
        \u0275\u0275element(210, "img", 63);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(211, "div", 64)(212, "ul", 65)(213, "li", 66)(214, "span", 67);
        \u0275\u0275text(215, "Completed");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(216, "li", 66);
        \u0275\u0275element(217, "i", 68);
        \u0275\u0275text(218, " 11 Oct, 22 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(219, "li", 66);
        \u0275\u0275element(220, "i", 69);
        \u0275\u0275text(221, " 185 ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(222, "div", 48)(223, "div", 24)(224, "div", 4)(225, "div", 26)(226, "div", 49)(227, "div", 50)(228, "span", 51);
        \u0275\u0275element(229, "img", 72);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(230, "div", 53)(231, "h5", 54)(232, "a", 55);
        \u0275\u0275text(233, "Skote Dashboard UI");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(234, "p", 40);
        \u0275\u0275text(235, "Separate existence is a myth");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(236, "div", 56)(237, "div", 57)(238, "a", 58);
        \u0275\u0275element(239, "img", 73);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(240, "div", 57)(241, "a", 58);
        \u0275\u0275element(242, "img", 74);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(243, "div", 57)(244, "a", 58)(245, "div", 61)(246, "span", 75);
        \u0275\u0275text(247, " 3+ ");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(248, "div", 64)(249, "ul", 65)(250, "li", 66)(251, "span", 67);
        \u0275\u0275text(252, "Completed");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(253, "li", 66);
        \u0275\u0275element(254, "i", 68);
        \u0275\u0275text(255, " 13 Oct, 22 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(256, "li", 66);
        \u0275\u0275element(257, "i", 69);
        \u0275\u0275text(258, " 194 ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(259, "div", 1)(260, "div", 2)(261, "div", 24)(262, "div", 76)(263, "h5", 39);
        \u0275\u0275text(264, "Social Media");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(265, "div", 18)(266, "a", 77);
        \u0275\u0275element(267, "i", 78);
        \u0275\u0275text(268, " Facebook ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(269, "a", 79);
        \u0275\u0275element(270, "i", 80);
        \u0275\u0275text(271, " Twitter");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(272, "a", 81);
        \u0275\u0275element(273, "i", 82);
        \u0275\u0275text(274, " Instagram");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(275, "a", 83);
        \u0275\u0275element(276, "i", 84);
        \u0275\u0275text(277, " Whatsapp");
        \u0275\u0275elementEnd()()()()()()()()();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CandidateOverviewComponent, [{
    type: Component,
    args: [{ selector: "app-candidate-overview", standalone: false, template: `<div class="container-fluid">\r
    <div class="row">\r
        <div class="col-lg-12">\r
            <div class="card mx-n4 mt-n4 bg-info-subtle">\r
                <div class="card-body">\r
                    <div class="text-center mb-4">\r
                        <img src="assets/images/users/avatar-6.jpg" alt="" class="avatar-md rounded-circle mx-auto d-block" />\r
                        <h5 class="mt-3 mb-1">Steven Franklin</h5>\r
                        <p class="text-muted mb-3">UI/UX Designer</p>\r
                        <div class="mx-auto d-flex gap-1 justify-content-center">\r
                            <span class="badge text-bg-info">Freelance</span>\r
                            <span class="badge text-bg-success">Active</span>\r
                            <span class="badge text-bg-warning">Adobe XD</span>\r
                            <span class="badge text-bg-warning">Figma</span>\r
                            <span class="badge text-bg-warning">Sketch</span>\r
                        </div>\r
                    </div>\r
                    <div class="d-flex align-items-center">\r
                        <ul class="list-unstyled hstack gap-3 mb-0 flex-grow-1">\r
                            <li>\r
                                <i class="bx bx-map align-middle"></i> California\r
                            </li>\r
                            <li>\r
                                <i class="bx bx-money align-middle"></i> $87 / hrs\r
                            </li>\r
                            <li>\r
                                <i class="bx bx-time align-middle"></i> 5 days working\r
                            </li>\r
                        </ul>\r
                        <div class="hstack gap-2">\r
                            <button type="button" class="btn btn-primary">Download CV <i class='bx bx-download align-baseline ms-1'></i></button>\r
                            <button type="button" class="btn btn-light"><i class='bx bx-bookmark align-baseline'></i></button>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
\r
\r
    <div class="row">\r
        <div class="col-lg-3">\r
            <div class="card">\r
                <div class="card-body">\r
                    <ul class="list-unstyled vstack gap-3 mb-0">\r
                        <li>\r
                            <div class="d-flex">\r
                                <i class='bx bx-calendar font-size-18 text-primary'></i>\r
                                <div class="ms-3">\r
                                    <h6 class="mb-1 fw-semibold">Experience:</h6>\r
                                    <span class="text-muted">2+ Years</span>\r
                                </div>\r
                            </div>\r
                        </li>\r
                        <li>\r
                            <div class="d-flex">\r
                                <i class='bx bx-money font-size-18 text-primary'></i>\r
                                <div class="ms-3">\r
                                    <h6 class="mb-1 fw-semibold">Current Salary:</h6>\r
                                    <span class="text-muted">$ 3451</span>\r
                                </div>\r
                            </div>\r
                        </li>\r
                        <li>\r
                            <div class="d-flex">\r
                                <i class='bx bx-money font-size-18 text-primary'></i>\r
                                <div class="ms-3">\r
                                    <h6 class="mb-1 fw-semibold">Expected Salary:</h6>\r
                                    <span class="text-muted">$ 4000+</span>\r
                                </div>\r
                            </div>\r
                        </li>\r
                        <li>\r
                            <div class="d-flex">\r
                                <i class='bx bx-user font-size-18 text-primary'></i>\r
                                <div class="ms-3">\r
                                    <h6 class="mb-1 fw-semibold">Gender:</h6>\r
                                    Male\r
                                </div>\r
                            </div>\r
                        </li>\r
                        <li>\r
                            <div class="d-flex">\r
                                <i class='mdi mdi-book-education font-size-18 text-primary'></i>\r
                                <div class="ms-3">\r
                                    <h6 class="mb-1 fw-semibold">Qualification:</h6>\r
                                    <span class="text-muted">Master Degree</span>\r
                                </div>\r
                            </div>\r
                        </li>\r
                        <li>\r
                            <div class="d-flex">\r
                                <i class='mdi mdi-google-translate font-size-18 text-primary'></i>\r
                                <div class="ms-3">\r
                                    <h6 class="mb-1 fw-semibold">Languages:</h6>\r
                                    <span class="text-muted">English, France</span>\r
                                </div>\r
                            </div>\r
                        </li>\r
                        <li class="hstack gap-2 mt-3">\r
                            <a href="javascript:void(0);" class="btn btn-soft-primary w-100">Hire Now</a>\r
                            <a href="javascript:void(0);" class="btn btn-soft-danger w-100">Contact Us</a>\r
                        </li>\r
                    </ul>\r
                </div>\r
            </div>\r
        </div><!--end col-->\r
        <div class="col-lg-9">\r
            <div class="card">\r
                <div class="card-body">\r
                    <h5 class="mb-3">About Us</h5>\r
                    <p class="text-muted">Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.</p>\r
                    <p class="text-muted mb-4">As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience lies in successfully conceptualizing, designing, and modifying consumer products specific to interior design and home furnishings.</p>\r
\r
                    <h5 class="mb-3">Education</h5>\r
                    <ul class="verti-timeline list-unstyled">\r
                        <li class="event-list">\r
                            <div class="event-timeline-dot">\r
                                <i class="bx bx-right-arrow-circle"></i>\r
                            </div>\r
                            <div class="d-flex">\r
                                <div class="flex-grow-1">\r
                                    <div>\r
                                        <h6 class="font-size-14 mb-1">BCA - Bachelor of Computer Applications</h6>\r
                                        <p class="text-muted">International University - (2004-2010)</p>\r
\r
                                        <p class="text-muted mb-0">There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.</p>\r
\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </li>\r
                        <li class="event-list">\r
                            <div class="event-timeline-dot">\r
                                <i class="bx bx-right-arrow-circle"></i>\r
                            </div>\r
                            <div class="d-flex">\r
                                <div class="flex-grow-1">\r
                                    <div>\r
                                        <h6 class="font-size-14 mb-1">MCA - Master of Computer Application</h6>\r
                                        <p class="text-muted">International University - (2010-2012)</p>\r
\r
                                        <p class="text-muted mb-0">There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.</p>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </li>\r
                        <li class="event-list">\r
                            <div class="event-timeline-dot">\r
                                <i class="bx bx-right-arrow-circle"></i>\r
                            </div>\r
                            <div class="d-flex">\r
                                <div class="flex-grow-1">\r
                                    <div>\r
                                        <h6 class="font-size-14 mb-1">Design Communication Visual</h6>\r
                                        <p class="text-muted">International University - (2012-2015)</p>\r
\r
                                        <p class="text-muted mb-0">There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.</p>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </li>\r
                    </ul>\r
                </div>\r
            </div>\r
            <div class="row">\r
                <div class="col-lg-12">\r
                    <h5 class="mb-3">Projects</h5>\r
                </div>\r
                <div class="col-xl-4">\r
                    <div class="card">\r
                        <div class="card-body">\r
                            <div class="d-flex">\r
                                <div class="flex-shrink-0 me-4">\r
                                    <div class="avatar-md">\r
                                        <span class="avatar-title rounded-circle bg-light text-danger font-size-16">\r
                                            <img src="assets/images/companies/img-1.png" alt="" height="30">\r
                                        </span>\r
                                    </div>\r
                                </div>\r
\r
\r
                                <div class="flex-grow-1 overflow-hidden">\r
                                    <h5 class="text-truncate font-size-15"><a href="javascript: void(0);" class="text-dark">New admin Design</a></h5>\r
                                    <p class="text-muted mb-4">It will be as simple as Occidental</p>\r
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
                                                    <span class="avatar-title rounded-circle bg-success text-white font-size-16">\r
                                                        A\r
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
                                </div>\r
                            </div>\r
                        </div>\r
                        <div class="px-4 py-3 border-top">\r
                            <ul class="list-inline mb-0">\r
                                <li class="list-inline-item me-3">\r
                                    <span class="badge bg-success">Completed</span>\r
                                </li>\r
                                <li class="list-inline-item me-3">\r
                                    <i class="bx bx-calendar me-1"></i> 15 Oct, 22\r
                                </li>\r
                                <li class="list-inline-item me-3">\r
                                    <i class="bx bx-comment-dots me-1"></i> 214\r
                                </li>\r
                            </ul>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="col-xl-4">\r
                    <div class="card">\r
                        <div class="card-body">\r
                            <div class="d-flex">\r
                                <div class="flex-shrink-0 me-4">\r
                                    <div class="avatar-md">\r
                                        <span class="avatar-title rounded-circle bg-light text-danger font-size-16">\r
                                            <img src="assets/images/companies/img-4.png" alt="" height="30">\r
                                        </span>\r
                                    </div>\r
                                </div>\r
\r
                                <div class="flex-grow-1 overflow-hidden">\r
                                    <h5 class="text-truncate font-size-15"><a href="javascript: void(0);" class="text-dark">App Landing UI</a></h5>\r
                                    <p class="text-muted mb-4">To achieve it would be necessary</p>\r
                                    <div class="avatar-group">\r
                                        <div class="avatar-group-item">\r
                                            <a href="javascript: void(0);" class="d-inline-block">\r
                                                <div class="avatar-xs">\r
                                                    <span class="avatar-title rounded-circle bg-pink text-white font-size-16">\r
                                                        L\r
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
                                </div>\r
                            </div>\r
                        </div>\r
                        <div class="px-4 py-3 border-top">\r
                            <ul class="list-inline mb-0">\r
                                <li class="list-inline-item me-3">\r
                                    <span class="badge bg-success">Completed</span>\r
                                </li>\r
                                <li class="list-inline-item me-3">\r
                                    <i class="bx bx-calendar me-1"></i> 11 Oct, 22\r
                                </li>\r
                                <li class="list-inline-item me-3">\r
                                    <i class="bx bx-comment-dots me-1"></i> 185\r
                                </li>\r
                            </ul>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="col-xl-4">\r
                    <div class="card">\r
                        <div class="card-body">\r
                            <div class="d-flex">\r
                                <div class="flex-shrink-0 me-4">\r
                                    <div class="avatar-md">\r
                                        <span class="avatar-title rounded-circle bg-light text-danger font-size-16">\r
                                            <img src="assets/images/companies/img-5.png" alt="" height="30">\r
                                        </span>\r
                                    </div>\r
                                </div>\r
\r
                                <div class="flex-grow-1 overflow-hidden">\r
                                    <h5 class="text-truncate font-size-15"><a href="javascript: void(0);" class="text-dark">Skote Dashboard UI</a></h5>\r
                                    <p class="text-muted mb-4">Separate existence is a myth</p>\r
                                    <div class="avatar-group">\r
                                        <div class="avatar-group-item">\r
                                            <a href="javascript: void(0);" class="d-inline-block">\r
                                                <img src="assets/images/users/avatar-1.jpg" alt="" class="rounded-circle avatar-xs">\r
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
                                                    <span class="avatar-title rounded-circle bg-danger text-white font-size-16">\r
                                                        3+\r
                                                    </span>\r
                                                </div>\r
                                            </a>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                        <div class="px-4 py-3 border-top">\r
                            <ul class="list-inline mb-0">\r
                                <li class="list-inline-item me-3">\r
                                    <span class="badge bg-success">Completed</span>\r
                                </li>\r
                                <li class="list-inline-item me-3">\r
                                    <i class="bx bx-calendar me-1"></i> 13 Oct, 22\r
                                </li>\r
                                <li class="list-inline-item me-3">\r
                                    <i class="bx bx-comment-dots me-1"></i> 194\r
                                </li>\r
                            </ul>\r
                        </div>\r
                    </div>\r
                </div><!--end col-->\r
            </div><!--end row-->\r
\r
            <div class="row">\r
                <div class="col-lg-12">\r
                    <div class="card">\r
                        <div class="card-body border-bottom">\r
                            <h5 class="mb-3">Social Media</h5>\r
                            <div class="hstack gap-2">\r
                                <a href="javascript:void(0);" class="btn btn-soft-primary"><i class="bx bxl-facebook align-middle me-1"></i> Facebook </a>\r
                                <a href="javascript:void(0);" class="btn btn-soft-info"><i class="bx bxl-twitter align-middle me-1"></i> Twitter</a>\r
                                <a href="javascript:void(0);" class="btn btn-soft-pink"><i class="bx bxl-instagram align-middle me-1"></i> Instagram</a>\r
                                <a href="javascript:void(0);" class="btn btn-soft-success"><i class="bx bxl-whatsapp align-middle me-1"></i> Whatsapp</a>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
\r
        </div><!--end col-->\r
    </div><!--end row-->\r
</div>` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CandidateOverviewComponent, { className: "CandidateOverviewComponent", filePath: "src/app/pages/jobs/candidate-overview/candidate-overview.component.ts", lineNumber: 13 });
})();

// src/app/pages/jobs/jobs-routing.module.ts
var routes = [
  {
    path: "list",
    component: ListComponent
  },
  {
    path: "grid",
    component: GridComponent
  },
  {
    path: "apply",
    component: ApplyComponent
  },
  {
    path: "details",
    component: DetailsComponent
  },
  {
    path: "categories",
    component: CategoriesComponent
  },
  {
    path: "candidate-list",
    component: CandidateListComponent
  },
  {
    path: "candidate-overview",
    component: CandidateOverviewComponent
  }
];
var JobsRoutingModule = class _JobsRoutingModule {
  static {
    this.\u0275fac = function JobsRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JobsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _JobsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JobsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/pages/jobs/jobs.module.ts
var JobsModule = class _JobsModule {
  static {
    this.\u0275fac = function JobsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JobsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _JobsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      BsDatepickerModule.forRoot(),
      PaginationModule.forRoot(),
      BsDropdownModule.forRoot(),
      CollapseModule.forRoot(),
      JobsRoutingModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JobsModule, [{
    type: NgModule,
    args: [{
      declarations: [
        ListComponent,
        GridComponent,
        ApplyComponent,
        DetailsComponent,
        CategoriesComponent,
        CandidateListComponent,
        CandidateOverviewComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BsDatepickerModule.forRoot(),
        PaginationModule.forRoot(),
        BsDropdownModule.forRoot(),
        CollapseModule.forRoot(),
        JobsRoutingModule,
        PagetitleComponent
      ]
    }]
  }], null, null);
})();

export {
  JobsModule
};
/*! Bundled license information:

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
//# sourceMappingURL=chunk-WFRD2TR5.js.map
