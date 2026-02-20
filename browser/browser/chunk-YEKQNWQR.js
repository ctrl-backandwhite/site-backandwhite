import {
  ArcElement,
  BarController,
  BarElement,
  BaseChartDirective,
  CategoryScale,
  Chart,
  DoughnutController,
  LineController,
  LineElement,
  LinearScale,
  PieController,
  PointElement,
  PolarAreaController,
  RadarController,
  RadialLinearScale,
  plugin_legend,
  plugin_title,
  plugin_tooltip
} from "./chunk-YWBWVLPH.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-5H32OP7N.js";
import {
  PagetitleComponent
} from "./chunk-WW5M2ABB.js";
import {
  outputFromObservable,
  outputToObservable
} from "./chunk-YYQHRHVD.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  CommonModule,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Observable,
  Output,
  ReplaySubject,
  RouterModule,
  Subject,
  Subscription,
  asyncScheduler,
  inject,
  input,
  output,
  setClassMetadata,
  switchMap,
  throttleTime,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-BM6E27KQ.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-H6NRAODO.js";

// node_modules/chartist/dist/index.js
var namespaces = {
  svg: "http://www.w3.org/2000/svg",
  xmlns: "http://www.w3.org/2000/xmlns/",
  xhtml: "http://www.w3.org/1999/xhtml",
  xlink: "http://www.w3.org/1999/xlink",
  ct: "http://gionkunz.github.com/chartist-js/ct"
};
var precision = 8;
var escapingMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#039;"
};
function ensureUnit(value, unit) {
  if (typeof value === "number") {
    return value + unit;
  }
  return value;
}
function quantity(input2) {
  if (typeof input2 === "string") {
    const match = /^(\d+)\s*(.*)$/g.exec(input2);
    return {
      value: match ? +match[1] : 0,
      unit: (match === null || match === void 0 ? void 0 : match[2]) || void 0
    };
  }
  return {
    value: Number(input2)
  };
}
function alphaNumerate(n) {
  return String.fromCharCode(97 + n % 26);
}
var EPSILON = 2221e-19;
function orderOfMagnitude(value) {
  return Math.floor(Math.log(Math.abs(value)) / Math.LN10);
}
function projectLength(axisLength, length, bounds) {
  return length / bounds.range * axisLength;
}
function roundWithPrecision(value, digits) {
  const precision$1 = Math.pow(10, digits || precision);
  return Math.round(value * precision$1) / precision$1;
}
function rho(num) {
  if (num === 1) {
    return num;
  }
  function gcd(p, q) {
    if (p % q === 0) {
      return q;
    } else {
      return gcd(q, p % q);
    }
  }
  function f(x) {
    return x * x + 1;
  }
  let x1 = 2;
  let x2 = 2;
  let divisor;
  if (num % 2 === 0) {
    return 2;
  }
  do {
    x1 = f(x1) % num;
    x2 = f(f(x2)) % num;
    divisor = gcd(Math.abs(x1 - x2), num);
  } while (divisor === 1);
  return divisor;
}
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}
function getBounds(axisLength, highLow, scaleMinSpace) {
  let onlyInteger = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  const bounds = {
    high: highLow.high,
    low: highLow.low,
    valueRange: 0,
    oom: 0,
    step: 0,
    min: 0,
    max: 0,
    range: 0,
    numberOfSteps: 0,
    values: []
  };
  bounds.valueRange = bounds.high - bounds.low;
  bounds.oom = orderOfMagnitude(bounds.valueRange);
  bounds.step = Math.pow(10, bounds.oom);
  bounds.min = Math.floor(bounds.low / bounds.step) * bounds.step;
  bounds.max = Math.ceil(bounds.high / bounds.step) * bounds.step;
  bounds.range = bounds.max - bounds.min;
  bounds.numberOfSteps = Math.round(bounds.range / bounds.step);
  const length = projectLength(axisLength, bounds.step, bounds);
  const scaleUp = length < scaleMinSpace;
  const smallestFactor = onlyInteger ? rho(bounds.range) : 0;
  if (onlyInteger && projectLength(axisLength, 1, bounds) >= scaleMinSpace) {
    bounds.step = 1;
  } else if (onlyInteger && smallestFactor < bounds.step && projectLength(axisLength, smallestFactor, bounds) >= scaleMinSpace) {
    bounds.step = smallestFactor;
  } else {
    let optimizationCounter = 0;
    for (; ; ) {
      if (scaleUp && projectLength(axisLength, bounds.step, bounds) <= scaleMinSpace) {
        bounds.step *= 2;
      } else if (!scaleUp && projectLength(axisLength, bounds.step / 2, bounds) >= scaleMinSpace) {
        bounds.step /= 2;
        if (onlyInteger && bounds.step % 1 !== 0) {
          bounds.step *= 2;
          break;
        }
      } else {
        break;
      }
      if (optimizationCounter++ > 1e3) {
        throw new Error("Exceeded maximum number of iterations while optimizing scale step!");
      }
    }
  }
  bounds.step = Math.max(bounds.step, EPSILON);
  function safeIncrement(value, increment) {
    if (value === (value += increment)) {
      value *= 1 + (increment > 0 ? EPSILON : -EPSILON);
    }
    return value;
  }
  let newMin = bounds.min;
  let newMax = bounds.max;
  while (newMin + bounds.step <= bounds.low) {
    newMin = safeIncrement(newMin, bounds.step);
  }
  while (newMax - bounds.step >= bounds.high) {
    newMax = safeIncrement(newMax, -bounds.step);
  }
  bounds.min = newMin;
  bounds.max = newMax;
  bounds.range = bounds.max - bounds.min;
  const values = [];
  for (let i = bounds.min; i <= bounds.max; i = safeIncrement(i, bounds.step)) {
    const value = roundWithPrecision(i);
    if (value !== values[values.length - 1]) {
      values.push(value);
    }
  }
  bounds.values = values;
  return bounds;
}
function extend() {
  let target = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }
  for (let i = 0; i < sources.length; i++) {
    const source = sources[i];
    const targetProto = Object.getPrototypeOf(target);
    for (const prop in source) {
      if (targetProto !== null && prop in targetProto) {
        continue;
      }
      const sourceProp = source[prop];
      if (typeof sourceProp === "object" && sourceProp !== null && !(sourceProp instanceof Array)) {
        target[prop] = extend(target[prop], sourceProp);
      } else {
        target[prop] = sourceProp;
      }
    }
  }
  return target;
}
var noop = (n) => n;
function times(length, filler) {
  return Array.from(
    {
      length
    },
    filler ? (_, i) => filler(i) : () => void 0
  );
}
var sum = (previous, current) => previous + (current ? current : 0);
var serialMap = (array, callback) => times(
  Math.max(...array.map(
    (element2) => element2.length
  )),
  (index) => callback(...array.map(
    (element2) => element2[index]
  ))
);
function safeHasProperty(target, property) {
  return target !== null && typeof target === "object" && Reflect.has(target, property);
}
function isNumeric(value) {
  return value !== null && isFinite(value);
}
function isFalseyButZero(value) {
  return !value && value !== 0;
}
function getNumberOrUndefined(value) {
  return isNumeric(value) ? Number(value) : void 0;
}
function isArrayOfArrays(data2) {
  if (!Array.isArray(data2)) {
    return false;
  }
  return data2.every(Array.isArray);
}
function each(list, callback) {
  let reverse = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  let index = 0;
  list[reverse ? "reduceRight" : "reduce"](
    (_, item, itemIndex) => callback(item, index++, itemIndex),
    void 0
  );
}
function getMetaData(seriesData, index) {
  const value = Array.isArray(seriesData) ? seriesData[index] : safeHasProperty(seriesData, "data") ? seriesData.data[index] : null;
  return safeHasProperty(value, "meta") ? value.meta : void 0;
}
function isDataHoleValue(value) {
  return value === null || value === void 0 || typeof value === "number" && isNaN(value);
}
function isArrayOfSeries(value) {
  return Array.isArray(value) && value.every(
    (_) => Array.isArray(_) || safeHasProperty(_, "data")
  );
}
function isMultiValue(value) {
  return typeof value === "object" && value !== null && (Reflect.has(value, "x") || Reflect.has(value, "y"));
}
function getMultiValue(value) {
  let dimension = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "y";
  if (isMultiValue(value) && safeHasProperty(value, dimension)) {
    return getNumberOrUndefined(value[dimension]);
  } else {
    return getNumberOrUndefined(value);
  }
}
function getHighLow(data2, options, dimension) {
  options = __spreadValues(__spreadValues({}, options), dimension ? dimension === "x" ? options.axisX : options.axisY : {});
  const highLow = {
    high: options.high === void 0 ? -Number.MAX_VALUE : +options.high,
    low: options.low === void 0 ? Number.MAX_VALUE : +options.low
  };
  const findHigh = options.high === void 0;
  const findLow = options.low === void 0;
  function recursiveHighLow(sourceData) {
    if (isDataHoleValue(sourceData)) {
      return;
    } else if (Array.isArray(sourceData)) {
      for (let i = 0; i < sourceData.length; i++) {
        recursiveHighLow(sourceData[i]);
      }
    } else {
      const value = Number(dimension && safeHasProperty(sourceData, dimension) ? sourceData[dimension] : sourceData);
      if (findHigh && value > highLow.high) {
        highLow.high = value;
      }
      if (findLow && value < highLow.low) {
        highLow.low = value;
      }
    }
  }
  if (findHigh || findLow) {
    recursiveHighLow(data2);
  }
  if (options.referenceValue || options.referenceValue === 0) {
    highLow.high = Math.max(options.referenceValue, highLow.high);
    highLow.low = Math.min(options.referenceValue, highLow.low);
  }
  if (highLow.high <= highLow.low) {
    if (highLow.low === 0) {
      highLow.high = 1;
    } else if (highLow.low < 0) {
      highLow.high = 0;
    } else if (highLow.high > 0) {
      highLow.low = 0;
    } else {
      highLow.high = 1;
      highLow.low = 0;
    }
  }
  return highLow;
}
function normalizeData(data2) {
  let reverse = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, multi = arguments.length > 2 ? arguments[2] : void 0, distributed = arguments.length > 3 ? arguments[3] : void 0;
  let labelCount;
  const normalized = {
    labels: (data2.labels || []).slice(),
    series: normalizeSeries(data2.series, multi, distributed)
  };
  const inputLabelCount = normalized.labels.length;
  if (isArrayOfArrays(normalized.series)) {
    labelCount = Math.max(inputLabelCount, ...normalized.series.map(
      (series) => series.length
    ));
    normalized.series.forEach((series) => {
      series.push(...times(Math.max(0, labelCount - series.length)));
    });
  } else {
    labelCount = normalized.series.length;
  }
  normalized.labels.push(...times(
    Math.max(0, labelCount - inputLabelCount),
    () => ""
  ));
  if (reverse) {
    reverseData(normalized);
  }
  return normalized;
}
function reverseData(data2) {
  var ref;
  (ref = data2.labels) === null || ref === void 0 ? void 0 : ref.reverse();
  data2.series.reverse();
  for (const series of data2.series) {
    if (safeHasProperty(series, "data")) {
      series.data.reverse();
    } else if (Array.isArray(series)) {
      series.reverse();
    }
  }
}
function normalizeMulti(value, multi) {
  let x;
  let y;
  if (typeof value !== "object") {
    const num = getNumberOrUndefined(value);
    if (multi === "x") {
      x = num;
    } else {
      y = num;
    }
  } else {
    if (safeHasProperty(value, "x")) {
      x = getNumberOrUndefined(value.x);
    }
    if (safeHasProperty(value, "y")) {
      y = getNumberOrUndefined(value.y);
    }
  }
  if (x === void 0 && y === void 0) {
    return void 0;
  }
  return {
    x,
    y
  };
}
function normalizePrimitive(value, multi) {
  if (isDataHoleValue(value)) {
    return void 0;
  }
  if (multi) {
    return normalizeMulti(value, multi);
  }
  return getNumberOrUndefined(value);
}
function normalizeSingleSeries(series, multi) {
  if (!Array.isArray(series)) {
    return normalizeSingleSeries(series.data, multi);
  }
  return series.map((value) => {
    if (safeHasProperty(value, "value")) {
      return normalizePrimitive(value.value, multi);
    }
    return normalizePrimitive(value, multi);
  });
}
function normalizeSeries(series, multi, distributed) {
  if (isArrayOfSeries(series)) {
    return series.map(
      (_) => normalizeSingleSeries(_, multi)
    );
  }
  const normalizedSeries = normalizeSingleSeries(series, multi);
  if (distributed) {
    return normalizedSeries.map(
      (value) => [
        value
      ]
    );
  }
  return normalizedSeries;
}
function splitIntoSegments(pathCoordinates, valueData, options) {
  const finalOptions = __spreadValues({
    increasingX: false,
    fillHoles: false
  }, options);
  const segments = [];
  let hole = true;
  for (let i = 0; i < pathCoordinates.length; i += 2) {
    if (getMultiValue(valueData[i / 2].value) === void 0) {
      if (!finalOptions.fillHoles) {
        hole = true;
      }
    } else {
      if (finalOptions.increasingX && i >= 2 && pathCoordinates[i] <= pathCoordinates[i - 2]) {
        hole = true;
      }
      if (hole) {
        segments.push({
          pathCoordinates: [],
          valueData: []
        });
        hole = false;
      }
      segments[segments.length - 1].pathCoordinates.push(pathCoordinates[i], pathCoordinates[i + 1]);
      segments[segments.length - 1].valueData.push(valueData[i / 2]);
    }
  }
  return segments;
}
function serialize(data2) {
  let serialized = "";
  if (data2 === null || data2 === void 0) {
    return data2;
  } else if (typeof data2 === "number") {
    serialized = "" + data2;
  } else if (typeof data2 === "object") {
    serialized = JSON.stringify({
      data: data2
    });
  } else {
    serialized = String(data2);
  }
  return Object.keys(escapingMap).reduce(
    (result, key) => result.replaceAll(key, escapingMap[key]),
    serialized
  );
}
var SvgList = class {
  call(method, args) {
    this.svgElements.forEach(
      (element2) => Reflect.apply(element2[method], element2, args)
    );
    return this;
  }
  attr() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("attr", args);
  }
  elem() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("elem", args);
  }
  root() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("root", args);
  }
  getNode() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("getNode", args);
  }
  foreignObject() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("foreignObject", args);
  }
  text() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("text", args);
  }
  empty() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("empty", args);
  }
  remove() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("remove", args);
  }
  addClass() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("addClass", args);
  }
  removeClass() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("removeClass", args);
  }
  removeAllClasses() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("removeAllClasses", args);
  }
  animate() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("animate", args);
  }
  /**
  * @param nodeList An Array of SVG DOM nodes or a SVG DOM NodeList (as returned by document.querySelectorAll)
  */
  constructor(nodeList) {
    this.svgElements = [];
    for (let i = 0; i < nodeList.length; i++) {
      this.svgElements.push(new Svg(nodeList[i]));
    }
  }
};
var easings = {
  easeInSine: [
    0.47,
    0,
    0.745,
    0.715
  ],
  easeOutSine: [
    0.39,
    0.575,
    0.565,
    1
  ],
  easeInOutSine: [
    0.445,
    0.05,
    0.55,
    0.95
  ],
  easeInQuad: [
    0.55,
    0.085,
    0.68,
    0.53
  ],
  easeOutQuad: [
    0.25,
    0.46,
    0.45,
    0.94
  ],
  easeInOutQuad: [
    0.455,
    0.03,
    0.515,
    0.955
  ],
  easeInCubic: [
    0.55,
    0.055,
    0.675,
    0.19
  ],
  easeOutCubic: [
    0.215,
    0.61,
    0.355,
    1
  ],
  easeInOutCubic: [
    0.645,
    0.045,
    0.355,
    1
  ],
  easeInQuart: [
    0.895,
    0.03,
    0.685,
    0.22
  ],
  easeOutQuart: [
    0.165,
    0.84,
    0.44,
    1
  ],
  easeInOutQuart: [
    0.77,
    0,
    0.175,
    1
  ],
  easeInQuint: [
    0.755,
    0.05,
    0.855,
    0.06
  ],
  easeOutQuint: [
    0.23,
    1,
    0.32,
    1
  ],
  easeInOutQuint: [
    0.86,
    0,
    0.07,
    1
  ],
  easeInExpo: [
    0.95,
    0.05,
    0.795,
    0.035
  ],
  easeOutExpo: [
    0.19,
    1,
    0.22,
    1
  ],
  easeInOutExpo: [
    1,
    0,
    0,
    1
  ],
  easeInCirc: [
    0.6,
    0.04,
    0.98,
    0.335
  ],
  easeOutCirc: [
    0.075,
    0.82,
    0.165,
    1
  ],
  easeInOutCirc: [
    0.785,
    0.135,
    0.15,
    0.86
  ],
  easeInBack: [
    0.6,
    -0.28,
    0.735,
    0.045
  ],
  easeOutBack: [
    0.175,
    0.885,
    0.32,
    1.275
  ],
  easeInOutBack: [
    0.68,
    -0.55,
    0.265,
    1.55
  ]
};
function createAnimation(element2, attribute, animationDefinition) {
  let createGuided = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false, eventEmitter = arguments.length > 4 ? arguments[4] : void 0;
  const _a = animationDefinition, { easing } = _a, def = __objRest(_a, ["easing"]);
  const attributeProperties = {};
  let animationEasing;
  let timeout;
  if (easing) {
    animationEasing = Array.isArray(easing) ? easing : easings[easing];
  }
  def.begin = ensureUnit(def.begin, "ms");
  def.dur = ensureUnit(def.dur, "ms");
  if (animationEasing) {
    def.calcMode = "spline";
    def.keySplines = animationEasing.join(" ");
    def.keyTimes = "0;1";
  }
  if (createGuided) {
    def.fill = "freeze";
    attributeProperties[attribute] = def.from;
    element2.attr(attributeProperties);
    timeout = quantity(def.begin || 0).value;
    def.begin = "indefinite";
  }
  const animate = element2.elem("animate", __spreadValues({
    attributeName: attribute
  }, def));
  if (createGuided) {
    setTimeout(() => {
      try {
        animate._node.beginElement();
      } catch (err) {
        attributeProperties[attribute] = def.to;
        element2.attr(attributeProperties);
        animate.remove();
      }
    }, timeout);
  }
  const animateNode = animate.getNode();
  if (eventEmitter) {
    animateNode.addEventListener(
      "beginEvent",
      () => eventEmitter.emit("animationBegin", {
        element: element2,
        animate: animateNode,
        params: animationDefinition
      })
    );
  }
  animateNode.addEventListener("endEvent", () => {
    if (eventEmitter) {
      eventEmitter.emit("animationEnd", {
        element: element2,
        animate: animateNode,
        params: animationDefinition
      });
    }
    if (createGuided) {
      attributeProperties[attribute] = def.to;
      element2.attr(attributeProperties);
      animate.remove();
    }
  });
}
var Svg = class _Svg {
  attr(attributes, ns) {
    if (typeof attributes === "string") {
      if (ns) {
        return this._node.getAttributeNS(ns, attributes);
      } else {
        return this._node.getAttribute(attributes);
      }
    }
    Object.keys(attributes).forEach((key) => {
      if (attributes[key] === void 0) {
        return;
      }
      if (key.indexOf(":") !== -1) {
        const namespacedAttribute = key.split(":");
        this._node.setAttributeNS(namespaces[namespacedAttribute[0]], key, String(attributes[key]));
      } else {
        this._node.setAttribute(key, String(attributes[key]));
      }
    });
    return this;
  }
  /**
  * Create a new SVG element whose wrapper object will be selected for further operations. This way you can also create nested groups easily.
  * @param name The name of the SVG element that should be created as child element of the currently selected element wrapper
  * @param attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
  * @param className This class or class list will be added to the SVG element
  * @param insertFirst If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
  * @return Returns a Svg wrapper object that can be used to modify the containing SVG data
  */
  elem(name, attributes, className) {
    let insertFirst = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    return new _Svg(name, attributes, className, this, insertFirst);
  }
  /**
  * Returns the parent Chartist.SVG wrapper object
  * @return Returns a Svg wrapper around the parent node of the current node. If the parent node is not existing or it's not an SVG node then this function will return null.
  */
  parent() {
    return this._node.parentNode instanceof SVGElement ? new _Svg(this._node.parentNode) : null;
  }
  /**
  * This method returns a Svg wrapper around the root SVG element of the current tree.
  * @return The root SVG element wrapped in a Svg element
  */
  root() {
    let node = this._node;
    while (node.nodeName !== "svg") {
      if (node.parentElement) {
        node = node.parentElement;
      } else {
        break;
      }
    }
    return new _Svg(node);
  }
  /**
  * Find the first child SVG element of the current element that matches a CSS selector. The returned object is a Svg wrapper.
  * @param selector A CSS selector that is used to query for child SVG elements
  * @return The SVG wrapper for the element found or null if no element was found
  */
  querySelector(selector) {
    const foundNode = this._node.querySelector(selector);
    return foundNode ? new _Svg(foundNode) : null;
  }
  /**
  * Find the all child SVG elements of the current element that match a CSS selector. The returned object is a Svg.List wrapper.
  * @param selector A CSS selector that is used to query for child SVG elements
  * @return The SVG wrapper list for the element found or null if no element was found
  */
  querySelectorAll(selector) {
    const foundNodes = this._node.querySelectorAll(selector);
    return new SvgList(foundNodes);
  }
  /**
  * Returns the underlying SVG node for the current element.
  */
  getNode() {
    return this._node;
  }
  /**
  * This method creates a foreignObject (see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) that allows to embed HTML content into a SVG graphic. With the help of foreignObjects you can enable the usage of regular HTML elements inside of SVG where they are subject for SVG positioning and transformation but the Browser will use the HTML rendering capabilities for the containing DOM.
  * @param content The DOM Node, or HTML string that will be converted to a DOM Node, that is then placed into and wrapped by the foreignObject
  * @param attributes An object with properties that will be added as attributes to the foreignObject element that is created. Attributes with undefined values will not be added.
  * @param className This class or class list will be added to the SVG element
  * @param insertFirst Specifies if the foreignObject should be inserted as first child
  * @return New wrapper object that wraps the foreignObject element
  */
  foreignObject(content, attributes, className) {
    let insertFirst = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    let contentNode;
    if (typeof content === "string") {
      const container = document.createElement("div");
      container.innerHTML = content;
      contentNode = container.firstChild;
    } else {
      contentNode = content;
    }
    if (contentNode instanceof Element) {
      contentNode.setAttribute("xmlns", namespaces.xmlns);
    }
    const fnObj = this.elem("foreignObject", attributes, className, insertFirst);
    fnObj._node.appendChild(contentNode);
    return fnObj;
  }
  /**
  * This method adds a new text element to the current Svg wrapper.
  * @param t The text that should be added to the text element that is created
  * @return The same wrapper object that was used to add the newly created element
  */
  text(t) {
    this._node.appendChild(document.createTextNode(t));
    return this;
  }
  /**
  * This method will clear all child nodes of the current wrapper object.
  * @return The same wrapper object that got emptied
  */
  empty() {
    while (this._node.firstChild) {
      this._node.removeChild(this._node.firstChild);
    }
    return this;
  }
  /**
  * This method will cause the current wrapper to remove itself from its parent wrapper. Use this method if you'd like to get rid of an element in a given DOM structure.
  * @return The parent wrapper object of the element that got removed
  */
  remove() {
    var ref;
    (ref = this._node.parentNode) === null || ref === void 0 ? void 0 : ref.removeChild(this._node);
    return this.parent();
  }
  /**
  * This method will replace the element with a new element that can be created outside of the current DOM.
  * @param newElement The new Svg object that will be used to replace the current wrapper object
  * @return The wrapper of the new element
  */
  replace(newElement) {
    var ref;
    (ref = this._node.parentNode) === null || ref === void 0 ? void 0 : ref.replaceChild(newElement._node, this._node);
    return newElement;
  }
  /**
  * This method will append an element to the current element as a child.
  * @param element The Svg element that should be added as a child
  * @param insertFirst Specifies if the element should be inserted as first child
  * @return The wrapper of the appended object
  */
  append(element2) {
    let insertFirst = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (insertFirst && this._node.firstChild) {
      this._node.insertBefore(element2._node, this._node.firstChild);
    } else {
      this._node.appendChild(element2._node);
    }
    return this;
  }
  /**
  * Returns an array of class names that are attached to the current wrapper element. This method can not be chained further.
  * @return A list of classes or an empty array if there are no classes on the current element
  */
  classes() {
    const classNames = this._node.getAttribute("class");
    return classNames ? classNames.trim().split(/\s+/) : [];
  }
  /**
  * Adds one or a space separated list of classes to the current element and ensures the classes are only existing once.
  * @param names A white space separated list of class names
  * @return The wrapper of the current element
  */
  addClass(names) {
    this._node.setAttribute("class", this.classes().concat(names.trim().split(/\s+/)).filter(function(elem, pos, self) {
      return self.indexOf(elem) === pos;
    }).join(" "));
    return this;
  }
  /**
  * Removes one or a space separated list of classes from the current element.
  * @param names A white space separated list of class names
  * @return The wrapper of the current element
  */
  removeClass(names) {
    const removedClasses = names.trim().split(/\s+/);
    this._node.setAttribute("class", this.classes().filter(
      (name) => removedClasses.indexOf(name) === -1
    ).join(" "));
    return this;
  }
  /**
  * Removes all classes from the current element.
  * @return The wrapper of the current element
  */
  removeAllClasses() {
    this._node.setAttribute("class", "");
    return this;
  }
  /**
  * Get element height using `clientHeight`
  * @return The elements height in pixels
  */
  height() {
    return this._node.clientHeight;
  }
  /**
  * Get element width using `clientWidth`
  * @return The elements width in pixels
  */
  width() {
    return this._node.clientWidth;
  }
  /**
  * The animate function lets you animate the current element with SMIL animations. You can add animations for multiple attributes at the same time by using an animation definition object. This object should contain SMIL animation attributes. Please refer to http://www.w3.org/TR/SVG/animate.html for a detailed specification about the available animation attributes. Additionally an easing property can be passed in the animation definition object. This can be a string with a name of an easing function in `Svg.Easing` or an array with four numbers specifying a cubic Bézier curve.
  * **An animations object could look like this:**
  * ```javascript
  * element.animate({
  *   opacity: {
  *     dur: 1000,
  *     from: 0,
  *     to: 1
  *   },
  *   x1: {
  *     dur: '1000ms',
  *     from: 100,
  *     to: 200,
  *     easing: 'easeOutQuart'
  *   },
  *   y1: {
  *     dur: '2s',
  *     from: 0,
  *     to: 100
  *   }
  * });
  * ```
  * **Automatic unit conversion**
  * For the `dur` and the `begin` animate attribute you can also omit a unit by passing a number. The number will automatically be converted to milli seconds.
  * **Guided mode**
  * The default behavior of SMIL animations with offset using the `begin` attribute is that the attribute will keep it's original value until the animation starts. Mostly this behavior is not desired as you'd like to have your element attributes already initialized with the animation `from` value even before the animation starts. Also if you don't specify `fill="freeze"` on an animate element or if you delete the animation after it's done (which is done in guided mode) the attribute will switch back to the initial value. This behavior is also not desired when performing simple one-time animations. For one-time animations you'd want to trigger animations immediately instead of relative to the document begin time. That's why in guided mode Svg will also use the `begin` property to schedule a timeout and manually start the animation after the timeout. If you're using multiple SMIL definition objects for an attribute (in an array), guided mode will be disabled for this attribute, even if you explicitly enabled it.
  * If guided mode is enabled the following behavior is added:
  * - Before the animation starts (even when delayed with `begin`) the animated attribute will be set already to the `from` value of the animation
  * - `begin` is explicitly set to `indefinite` so it can be started manually without relying on document begin time (creation)
  * - The animate element will be forced to use `fill="freeze"`
  * - The animation will be triggered with `beginElement()` in a timeout where `begin` of the definition object is interpreted in milli seconds. If no `begin` was specified the timeout is triggered immediately.
  * - After the animation the element attribute value will be set to the `to` value of the animation
  * - The animate element is deleted from the DOM
  * @param animations An animations object where the property keys are the attributes you'd like to animate. The properties should be objects again that contain the SMIL animation attributes (usually begin, dur, from, and to). The property begin and dur is auto converted (see Automatic unit conversion). You can also schedule multiple animations for the same attribute by passing an Array of SMIL definition objects. Attributes that contain an array of SMIL definition objects will not be executed in guided mode.
  * @param guided Specify if guided mode should be activated for this animation (see Guided mode). If not otherwise specified, guided mode will be activated.
  * @param eventEmitter If specified, this event emitter will be notified when an animation starts or ends.
  * @return The current element where the animation was added
  */
  animate(animations) {
    let guided = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, eventEmitter = arguments.length > 2 ? arguments[2] : void 0;
    Object.keys(animations).forEach((attribute) => {
      const attributeAnimation = animations[attribute];
      if (Array.isArray(attributeAnimation)) {
        attributeAnimation.forEach(
          (animationDefinition) => createAnimation(this, attribute, animationDefinition, false, eventEmitter)
        );
      } else {
        createAnimation(this, attribute, attributeAnimation, guided, eventEmitter);
      }
    });
    return this;
  }
  /**
  * @param name The name of the SVG element to create or an SVG dom element which should be wrapped into Svg
  * @param attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
  * @param className This class or class list will be added to the SVG element
  * @param parent The parent SVG wrapper object where this newly created wrapper and it's element will be attached to as child
  * @param insertFirst If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
  */
  constructor(name, attributes, className, parent, insertFirst = false) {
    if (name instanceof Element) {
      this._node = name;
    } else {
      this._node = document.createElementNS(namespaces.svg, name);
      if (name === "svg") {
        this.attr({
          "xmlns:ct": namespaces.ct
        });
      }
    }
    if (attributes) {
      this.attr(attributes);
    }
    if (className) {
      this.addClass(className);
    }
    if (parent) {
      if (insertFirst && parent._node.firstChild) {
        parent._node.insertBefore(this._node, parent._node.firstChild);
      } else {
        parent._node.appendChild(this._node);
      }
    }
  }
};
Svg.Easing = easings;
function createSvg(container) {
  let width = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "100%", height = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "100%", className = arguments.length > 3 ? arguments[3] : void 0, viewBox = arguments.length > 4 ? arguments[4] : void 0;
  if (!container) {
    throw new Error("Container element is not found");
  }
  Array.from(container.querySelectorAll("svg")).filter(
    (svg) => svg.getAttributeNS(namespaces.xmlns, "ct")
  ).forEach(
    (svg) => container.removeChild(svg)
  );
  const svg1 = new Svg("svg").attr({
    width,
    height
  }).attr({
    // TODO: Check better solution (browser support) and remove inline styles due to CSP
    style: "width: ".concat(width, "; height: ").concat(height, ";")
  });
  if (className) {
    svg1.addClass(className);
  }
  if (viewBox) {
    svg1.attr({
      viewBox: "0 0 ".concat(viewBox.width, " ").concat(viewBox.height)
    });
  }
  container.appendChild(svg1.getNode());
  return svg1;
}
function normalizePadding(padding) {
  return typeof padding === "number" ? {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  } : padding === void 0 ? {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  } : {
    top: typeof padding.top === "number" ? padding.top : 0,
    right: typeof padding.right === "number" ? padding.right : 0,
    bottom: typeof padding.bottom === "number" ? padding.bottom : 0,
    left: typeof padding.left === "number" ? padding.left : 0
  };
}
function createChartRect(svg, options) {
  var ref, ref1, ref2, ref3, ref4, ref5;
  const hasAxis = Boolean(options.axisX || options.axisY);
  const yAxisOffset = ((ref = options.axisY) === null || ref === void 0 ? void 0 : ref.offset) || 0;
  const xAxisOffset = ((ref1 = options.axisX) === null || ref1 === void 0 ? void 0 : ref1.offset) || 0;
  const yAxisPosition = (ref2 = options.axisY) === null || ref2 === void 0 ? void 0 : ref2.position;
  const xAxisPosition = (ref3 = options.axisX) === null || ref3 === void 0 ? void 0 : ref3.position;
  let width = ((ref4 = options.viewBox) === null || ref4 === void 0 ? void 0 : ref4.width) || svg.width() || quantity(options.width).value || 0;
  let height = ((ref5 = options.viewBox) === null || ref5 === void 0 ? void 0 : ref5.height) || svg.height() || quantity(options.height).value || 0;
  const normalizedPadding = normalizePadding(options.chartPadding);
  width = Math.max(width, yAxisOffset + normalizedPadding.left + normalizedPadding.right);
  height = Math.max(height, xAxisOffset + normalizedPadding.top + normalizedPadding.bottom);
  const chartRect = {
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0,
    padding: normalizedPadding,
    width() {
      return this.x2 - this.x1;
    },
    height() {
      return this.y1 - this.y2;
    }
  };
  if (hasAxis) {
    if (xAxisPosition === "start") {
      chartRect.y2 = normalizedPadding.top + xAxisOffset;
      chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
    } else {
      chartRect.y2 = normalizedPadding.top;
      chartRect.y1 = Math.max(height - normalizedPadding.bottom - xAxisOffset, chartRect.y2 + 1);
    }
    if (yAxisPosition === "start") {
      chartRect.x1 = normalizedPadding.left + yAxisOffset;
      chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
    } else {
      chartRect.x1 = normalizedPadding.left;
      chartRect.x2 = Math.max(width - normalizedPadding.right - yAxisOffset, chartRect.x1 + 1);
    }
  } else {
    chartRect.x1 = normalizedPadding.left;
    chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
    chartRect.y2 = normalizedPadding.top;
    chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
  }
  return chartRect;
}
function createGrid(position, index, axis, offset, length, group, classes, eventEmitter) {
  const positionalData = {
    ["".concat(axis.units.pos, "1")]: position,
    ["".concat(axis.units.pos, "2")]: position,
    ["".concat(axis.counterUnits.pos, "1")]: offset,
    ["".concat(axis.counterUnits.pos, "2")]: offset + length
  };
  const gridElement = group.elem("line", positionalData, classes.join(" "));
  eventEmitter.emit("draw", __spreadValues({
    type: "grid",
    axis,
    index,
    group,
    element: gridElement
  }, positionalData));
}
function createGridBackground(gridGroup, chartRect, className, eventEmitter) {
  const gridBackground = gridGroup.elem("rect", {
    x: chartRect.x1,
    y: chartRect.y2,
    width: chartRect.width(),
    height: chartRect.height()
  }, className, true);
  eventEmitter.emit("draw", {
    type: "gridBackground",
    group: gridGroup,
    element: gridBackground
  });
}
function createLabel(position, length, index, label, axis, axisOffset, labelOffset, group, classes, eventEmitter) {
  const positionalData = {
    [axis.units.pos]: position + labelOffset[axis.units.pos],
    [axis.counterUnits.pos]: labelOffset[axis.counterUnits.pos],
    [axis.units.len]: length,
    [axis.counterUnits.len]: Math.max(0, axisOffset - 10)
  };
  const stepLength = Math.round(positionalData[axis.units.len]);
  const stepCounterLength = Math.round(positionalData[axis.counterUnits.len]);
  const content = document.createElement("span");
  content.className = classes.join(" ");
  content.style[axis.units.len] = stepLength + "px";
  content.style[axis.counterUnits.len] = stepCounterLength + "px";
  content.textContent = String(label);
  const labelElement = group.foreignObject(content, __spreadValues({
    style: "overflow: visible;"
  }, positionalData));
  eventEmitter.emit("draw", __spreadValues({
    type: "label",
    axis,
    index,
    group,
    element: labelElement,
    text: label
  }, positionalData));
}
function optionsProvider(options, responsiveOptions, eventEmitter) {
  let currentOptions;
  const mediaQueryListeners = [];
  function updateCurrentOptions(mediaEvent) {
    const previousOptions = currentOptions;
    currentOptions = extend({}, options);
    if (responsiveOptions) {
      responsiveOptions.forEach((responsiveOption) => {
        const mql = window.matchMedia(responsiveOption[0]);
        if (mql.matches) {
          currentOptions = extend({}, currentOptions, responsiveOption[1]);
        }
      });
    }
    if (eventEmitter && mediaEvent) {
      eventEmitter.emit("optionsChanged", {
        previousOptions,
        currentOptions
      });
    }
  }
  function removeMediaQueryListeners() {
    mediaQueryListeners.forEach(
      (mql) => mql.removeEventListener("change", updateCurrentOptions)
    );
  }
  if (!window.matchMedia) {
    throw new Error("window.matchMedia not found! Make sure you're using a polyfill.");
  } else if (responsiveOptions) {
    responsiveOptions.forEach((responsiveOption) => {
      const mql = window.matchMedia(responsiveOption[0]);
      mql.addEventListener("change", updateCurrentOptions);
      mediaQueryListeners.push(mql);
    });
  }
  updateCurrentOptions();
  return {
    removeMediaQueryListeners,
    getCurrentOptions() {
      return currentOptions;
    }
  };
}
var elementDescriptions = {
  m: [
    "x",
    "y"
  ],
  l: [
    "x",
    "y"
  ],
  c: [
    "x1",
    "y1",
    "x2",
    "y2",
    "x",
    "y"
  ],
  a: [
    "rx",
    "ry",
    "xAr",
    "lAf",
    "sf",
    "x",
    "y"
  ]
};
var defaultOptions$3 = {
  // The accuracy in digit count after the decimal point. This will be used to round numbers in the SVG path. If this option is set to false then no rounding will be performed.
  accuracy: 3
};
function element(command, params, pathElements, pos, relative, data2) {
  const pathElement = __spreadValues(__spreadValues({
    command: relative ? command.toLowerCase() : command.toUpperCase()
  }, params), data2 ? {
    data: data2
  } : {});
  pathElements.splice(pos, 0, pathElement);
}
function forEachParam(pathElements, cb) {
  pathElements.forEach((pathElement, pathElementIndex) => {
    elementDescriptions[pathElement.command.toLowerCase()].forEach((paramName, paramIndex) => {
      cb(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
    });
  });
}
var SvgPath = class _SvgPath {
  /**
  * This static function on `SvgPath` is joining multiple paths together into one paths.
  * @param paths A list of paths to be joined together. The order is important.
  * @param close If the newly created path should be a closed path
  * @param options Path options for the newly created path.
  */
  static join(paths) {
    let close = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, options = arguments.length > 2 ? arguments[2] : void 0;
    const joinedPath = new _SvgPath(close, options);
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      for (let j = 0; j < path.pathElements.length; j++) {
        joinedPath.pathElements.push(path.pathElements[j]);
      }
    }
    return joinedPath;
  }
  position(pos) {
    if (pos !== void 0) {
      this.pos = Math.max(0, Math.min(this.pathElements.length, pos));
      return this;
    } else {
      return this.pos;
    }
  }
  /**
  * Removes elements from the path starting at the current position.
  * @param count Number of path elements that should be removed from the current position.
  * @return The current path object for easy call chaining.
  */
  remove(count) {
    this.pathElements.splice(this.pos, count);
    return this;
  }
  /**
  * Use this function to add a new move SVG path element.
  * @param x The x coordinate for the move element.
  * @param y The y coordinate for the move element.
  * @param relative If set to true the move element will be created with relative coordinates (lowercase letter)
  * @param data Any data that should be stored with the element object that will be accessible in pathElement
  * @return The current path object for easy call chaining.
  */
  move(x, y) {
    let relative = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, data2 = arguments.length > 3 ? arguments[3] : void 0;
    element("M", {
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data2);
    return this;
  }
  /**
  * Use this function to add a new line SVG path element.
  * @param x The x coordinate for the line element.
  * @param y The y coordinate for the line element.
  * @param relative If set to true the line element will be created with relative coordinates (lowercase letter)
  * @param data Any data that should be stored with the element object that will be accessible in pathElement
  * @return The current path object for easy call chaining.
  */
  line(x, y) {
    let relative = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, data2 = arguments.length > 3 ? arguments[3] : void 0;
    element("L", {
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data2);
    return this;
  }
  /**
  * Use this function to add a new curve SVG path element.
  * @param x1 The x coordinate for the first control point of the bezier curve.
  * @param y1 The y coordinate for the first control point of the bezier curve.
  * @param x2 The x coordinate for the second control point of the bezier curve.
  * @param y2 The y coordinate for the second control point of the bezier curve.
  * @param x The x coordinate for the target point of the curve element.
  * @param y The y coordinate for the target point of the curve element.
  * @param relative If set to true the curve element will be created with relative coordinates (lowercase letter)
  * @param data Any data that should be stored with the element object that will be accessible in pathElement
  * @return The current path object for easy call chaining.
  */
  curve(x1, y1, x2, y2, x, y) {
    let relative = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : false, data2 = arguments.length > 7 ? arguments[7] : void 0;
    element("C", {
      x1: +x1,
      y1: +y1,
      x2: +x2,
      y2: +y2,
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data2);
    return this;
  }
  /**
  * Use this function to add a new non-bezier curve SVG path element.
  * @param rx The radius to be used for the x-axis of the arc.
  * @param ry The radius to be used for the y-axis of the arc.
  * @param xAr Defines the orientation of the arc
  * @param lAf Large arc flag
  * @param sf Sweep flag
  * @param x The x coordinate for the target point of the curve element.
  * @param y The y coordinate for the target point of the curve element.
  * @param relative If set to true the curve element will be created with relative coordinates (lowercase letter)
  * @param data Any data that should be stored with the element object that will be accessible in pathElement
  * @return The current path object for easy call chaining.
  */
  arc(rx, ry, xAr, lAf, sf, x, y) {
    let relative = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : false, data2 = arguments.length > 8 ? arguments[8] : void 0;
    element("A", {
      rx,
      ry,
      xAr,
      lAf,
      sf,
      x,
      y
    }, this.pathElements, this.pos++, relative, data2);
    return this;
  }
  /**
  * Parses an SVG path seen in the d attribute of path elements, and inserts the parsed elements into the existing path object at the current cursor position. Any closing path indicators (Z at the end of the path) will be ignored by the parser as this is provided by the close option in the options of the path object.
  * @param path Any SVG path that contains move (m), line (l) or curve (c) components.
  * @return The current path object for easy call chaining.
  */
  parse(path) {
    const chunks = path.replace(/([A-Za-z])(-?[0-9])/g, "$1 $2").replace(/([0-9])([A-Za-z])/g, "$1 $2").split(/[\s,]+/).reduce((result, pathElement) => {
      if (pathElement.match(/[A-Za-z]/)) {
        result.push([]);
      }
      result[result.length - 1].push(pathElement);
      return result;
    }, []);
    if (chunks[chunks.length - 1][0].toUpperCase() === "Z") {
      chunks.pop();
    }
    const elements = chunks.map((chunk) => {
      const command = chunk.shift();
      const description = elementDescriptions[command.toLowerCase()];
      return __spreadValues({
        command
      }, description.reduce((result, paramName, index) => {
        result[paramName] = +chunk[index];
        return result;
      }, {}));
    });
    this.pathElements.splice(this.pos, 0, ...elements);
    this.pos += elements.length;
    return this;
  }
  /**
  * This function renders to current SVG path object into a final SVG string that can be used in the d attribute of SVG path elements. It uses the accuracy option to round big decimals. If the close parameter was set in the constructor of this path object then a path closing Z will be appended to the output string.
  */
  stringify() {
    const accuracyMultiplier = Math.pow(10, this.options.accuracy);
    return this.pathElements.reduce((path, pathElement) => {
      const params = elementDescriptions[pathElement.command.toLowerCase()].map((paramName) => {
        const value = pathElement[paramName];
        return this.options.accuracy ? Math.round(value * accuracyMultiplier) / accuracyMultiplier : value;
      });
      return path + pathElement.command + params.join(",");
    }, "") + (this.close ? "Z" : "");
  }
  /**
  * Scales all elements in the current SVG path object. There is an individual parameter for each coordinate. Scaling will also be done for control points of curves, affecting the given coordinate.
  * @param x The number which will be used to scale the x, x1 and x2 of all path elements.
  * @param y The number which will be used to scale the y, y1 and y2 of all path elements.
  * @return The current path object for easy call chaining.
  */
  scale(x, y) {
    forEachParam(this.pathElements, (pathElement, paramName) => {
      pathElement[paramName] *= paramName[0] === "x" ? x : y;
    });
    return this;
  }
  /**
  * Translates all elements in the current SVG path object. The translation is relative and there is an individual parameter for each coordinate. Translation will also be done for control points of curves, affecting the given coordinate.
  * @param x The number which will be used to translate the x, x1 and x2 of all path elements.
  * @param y The number which will be used to translate the y, y1 and y2 of all path elements.
  * @return The current path object for easy call chaining.
  */
  translate(x, y) {
    forEachParam(this.pathElements, (pathElement, paramName) => {
      pathElement[paramName] += paramName[0] === "x" ? x : y;
    });
    return this;
  }
  /**
  * This function will run over all existing path elements and then loop over their attributes. The callback function will be called for every path element attribute that exists in the current path.
  * The method signature of the callback function looks like this:
  * ```javascript
  * function(pathElement, paramName, pathElementIndex, paramIndex, pathElements)
  * ```
  * If something else than undefined is returned by the callback function, this value will be used to replace the old value. This allows you to build custom transformations of path objects that can't be achieved using the basic transformation functions scale and translate.
  * @param transformFnc The callback function for the transformation. Check the signature in the function description.
  * @return The current path object for easy call chaining.
  */
  transform(transformFnc) {
    forEachParam(this.pathElements, (pathElement, paramName, pathElementIndex, paramIndex, pathElements) => {
      const transformed = transformFnc(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
      if (transformed || transformed === 0) {
        pathElement[paramName] = transformed;
      }
    });
    return this;
  }
  /**
  * This function clones a whole path object with all its properties. This is a deep clone and path element objects will also be cloned.
  * @param close Optional option to set the new cloned path to closed. If not specified or false, the original path close option will be used.
  */
  clone() {
    let close = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    const clone = new _SvgPath(close || this.close);
    clone.pos = this.pos;
    clone.pathElements = this.pathElements.slice().map(
      (pathElement) => __spreadValues({}, pathElement)
    );
    clone.options = __spreadValues({}, this.options);
    return clone;
  }
  /**
  * Split a Svg.Path object by a specific command in the path chain. The path chain will be split and an array of newly created paths objects will be returned. This is useful if you'd like to split an SVG path by it's move commands, for example, in order to isolate chunks of drawings.
  * @param command The command you'd like to use to split the path
  */
  splitByCommand(command) {
    const split = [
      new _SvgPath()
    ];
    this.pathElements.forEach((pathElement) => {
      if (pathElement.command === command.toUpperCase() && split[split.length - 1].pathElements.length !== 0) {
        split.push(new _SvgPath());
      }
      split[split.length - 1].pathElements.push(pathElement);
    });
    return split;
  }
  /**
  * Used to construct a new path object.
  * @param close If set to true then this path will be closed when stringified (with a Z at the end)
  * @param options Options object that overrides the default objects. See default options for more details.
  */
  constructor(close = false, options) {
    this.close = close;
    this.pathElements = [];
    this.pos = 0;
    this.options = __spreadValues(__spreadValues({}, defaultOptions$3), options);
  }
};
function none(options) {
  const finalOptions = __spreadValues({
    fillHoles: false
  }, options);
  return function noneInterpolation(pathCoordinates, valueData) {
    const path = new SvgPath();
    let hole = true;
    for (let i = 0; i < pathCoordinates.length; i += 2) {
      const currX = pathCoordinates[i];
      const currY = pathCoordinates[i + 1];
      const currData = valueData[i / 2];
      if (getMultiValue(currData.value) !== void 0) {
        if (hole) {
          path.move(currX, currY, false, currData);
        } else {
          path.line(currX, currY, false, currData);
        }
        hole = false;
      } else if (!finalOptions.fillHoles) {
        hole = true;
      }
    }
    return path;
  };
}
function monotoneCubic(options) {
  const finalOptions = __spreadValues({
    fillHoles: false
  }, options);
  return function monotoneCubicInterpolation(pathCoordinates, valueData) {
    const segments = splitIntoSegments(pathCoordinates, valueData, {
      fillHoles: finalOptions.fillHoles,
      increasingX: true
    });
    if (!segments.length) {
      return none()([], []);
    } else if (segments.length > 1) {
      return SvgPath.join(segments.map(
        (segment) => monotoneCubicInterpolation(segment.pathCoordinates, segment.valueData)
      ));
    } else {
      pathCoordinates = segments[0].pathCoordinates;
      valueData = segments[0].valueData;
      if (pathCoordinates.length <= 4) {
        return none()(pathCoordinates, valueData);
      }
      const xs = [];
      const ys = [];
      const n = pathCoordinates.length / 2;
      const ms = [];
      const ds = [];
      const dys = [];
      const dxs = [];
      for (let i = 0; i < n; i++) {
        xs[i] = pathCoordinates[i * 2];
        ys[i] = pathCoordinates[i * 2 + 1];
      }
      for (let i1 = 0; i1 < n - 1; i1++) {
        dys[i1] = ys[i1 + 1] - ys[i1];
        dxs[i1] = xs[i1 + 1] - xs[i1];
        ds[i1] = dys[i1] / dxs[i1];
      }
      ms[0] = ds[0];
      ms[n - 1] = ds[n - 2];
      for (let i2 = 1; i2 < n - 1; i2++) {
        if (ds[i2] === 0 || ds[i2 - 1] === 0 || ds[i2 - 1] > 0 !== ds[i2] > 0) {
          ms[i2] = 0;
        } else {
          ms[i2] = 3 * (dxs[i2 - 1] + dxs[i2]) / ((2 * dxs[i2] + dxs[i2 - 1]) / ds[i2 - 1] + (dxs[i2] + 2 * dxs[i2 - 1]) / ds[i2]);
          if (!isFinite(ms[i2])) {
            ms[i2] = 0;
          }
        }
      }
      const path = new SvgPath().move(xs[0], ys[0], false, valueData[0]);
      for (let i3 = 0; i3 < n - 1; i3++) {
        path.curve(
          // First control point
          xs[i3] + dxs[i3] / 3,
          ys[i3] + ms[i3] * dxs[i3] / 3,
          // Second control point
          xs[i3 + 1] - dxs[i3] / 3,
          ys[i3 + 1] - ms[i3 + 1] * dxs[i3] / 3,
          // End point
          xs[i3 + 1],
          ys[i3 + 1],
          false,
          valueData[i3 + 1]
        );
      }
      return path;
    }
  };
}
var EventEmitter2 = class {
  on(event, listener) {
    const { allListeners, listeners } = this;
    if (event === "*") {
      allListeners.add(listener);
    } else {
      if (!listeners.has(event)) {
        listeners.set(event, /* @__PURE__ */ new Set());
      }
      listeners.get(event).add(listener);
    }
  }
  off(event, listener) {
    const { allListeners, listeners } = this;
    if (event === "*") {
      if (listener) {
        allListeners.delete(listener);
      } else {
        allListeners.clear();
      }
    } else if (listeners.has(event)) {
      const eventListeners = listeners.get(event);
      if (listener) {
        eventListeners.delete(listener);
      } else {
        eventListeners.clear();
      }
      if (!eventListeners.size) {
        listeners.delete(event);
      }
    }
  }
  /**
  * Use this function to emit an event. All handlers that are listening for this event will be triggered with the data parameter.
  * @param event The event name that should be triggered
  * @param data Arbitrary data that will be passed to the event handler callback functions
  */
  emit(event, data2) {
    const { allListeners, listeners } = this;
    if (listeners.has(event)) {
      listeners.get(event).forEach(
        (listener) => listener(data2)
      );
    }
    allListeners.forEach(
      (listener) => listener(event, data2)
    );
  }
  constructor() {
    this.listeners = /* @__PURE__ */ new Map();
    this.allListeners = /* @__PURE__ */ new Set();
  }
};
var instances = /* @__PURE__ */ new WeakMap();
var BaseChart = class {
  // TODO: Currently we need to re-draw the chart on window resize. This is usually very bad and will affect performance.
  // This is done because we can't work with relative coordinates when drawing the chart because SVG Path does not
  // work with relative positions yet. We need to check if we can do a viewBox hack to switch to percentage.
  // See http://mozilla.6506.n7.nabble.com/Specyfing-paths-with-percentages-unit-td247474.html
  // Update: can be done using the above method tested here: http://codepen.io/gionkunz/pen/KDvLj
  // The problem is with the label offsets that can't be converted into percentage and affecting the chart container
  /**
  * Updates the chart which currently does a full reconstruction of the SVG DOM
  * @param data Optional data you'd like to set for the chart before it will update. If not specified the update method will use the data that is already configured with the chart.
  * @param options Optional options you'd like to add to the previous options for the chart before it will update. If not specified the update method will use the options that have been already configured with the chart.
  * @param override If set to true, the passed options will be used to extend the options that have been configured already. Otherwise the chart default options will be used as the base
  */
  update(data2, options) {
    let override = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (data2) {
      this.data = data2 || {};
      this.data.labels = this.data.labels || [];
      this.data.series = this.data.series || [];
      this.eventEmitter.emit("data", {
        type: "update",
        data: this.data
      });
    }
    if (options) {
      this.options = extend({}, override ? this.options : this.defaultOptions, options);
      if (!this.initializeTimeoutId) {
        var ref;
        (ref = this.optionsProvider) === null || ref === void 0 ? void 0 : ref.removeMediaQueryListeners();
        this.optionsProvider = optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
      }
    }
    if (!this.initializeTimeoutId && this.optionsProvider) {
      this.createChart(this.optionsProvider.getCurrentOptions());
    }
    return this;
  }
  /**
  * This method can be called on the API object of each chart and will un-register all event listeners that were added to other components. This currently includes a window.resize listener as well as media query listeners if any responsive options have been provided. Use this function if you need to destroy and recreate Chartist charts dynamically.
  */
  detach() {
    if (!this.initializeTimeoutId) {
      var ref;
      window.removeEventListener("resize", this.resizeListener);
      (ref = this.optionsProvider) === null || ref === void 0 ? void 0 : ref.removeMediaQueryListeners();
    } else {
      window.clearTimeout(this.initializeTimeoutId);
    }
    instances.delete(this.container);
    return this;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  on(event, listener) {
    this.eventEmitter.on(event, listener);
    return this;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  off(event, listener) {
    this.eventEmitter.off(event, listener);
    return this;
  }
  initialize() {
    window.addEventListener("resize", this.resizeListener);
    this.optionsProvider = optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
    this.eventEmitter.on(
      "optionsChanged",
      () => this.update()
    );
    if (this.options.plugins) {
      this.options.plugins.forEach((plugin) => {
        if (Array.isArray(plugin)) {
          plugin[0](this, plugin[1]);
        } else {
          plugin(this);
        }
      });
    }
    this.eventEmitter.emit("data", {
      type: "initial",
      data: this.data
    });
    this.createChart(this.optionsProvider.getCurrentOptions());
    this.initializeTimeoutId = null;
  }
  constructor(query, data2, defaultOptions2, options, responsiveOptions) {
    this.data = data2;
    this.defaultOptions = defaultOptions2;
    this.options = options;
    this.responsiveOptions = responsiveOptions;
    this.eventEmitter = new EventEmitter2();
    this.resizeListener = () => this.update();
    this.initializeTimeoutId = setTimeout(
      () => this.initialize(),
      0
    );
    const container = typeof query === "string" ? document.querySelector(query) : query;
    if (!container) {
      throw new Error("Target element ".concat(typeof query === "string" ? '"'.concat(query, '"') : "", " is not found"));
    }
    this.container = container;
    const prevInstance = instances.get(container);
    if (prevInstance) {
      prevInstance.detach();
    }
    instances.set(container, this);
  }
};
var axisUnits = {
  x: {
    pos: "x",
    len: "width",
    dir: "horizontal",
    rectStart: "x1",
    rectEnd: "x2",
    rectOffset: "y2"
  },
  y: {
    pos: "y",
    len: "height",
    dir: "vertical",
    rectStart: "y2",
    rectEnd: "y1",
    rectOffset: "x1"
  }
};
var Axis = class {
  createGridAndLabels(gridGroup, labelGroup, chartOptions, eventEmitter) {
    const axisOptions = this.units.pos === "x" ? chartOptions.axisX : chartOptions.axisY;
    const projectedValues = this.ticks.map(
      (tick, i) => this.projectValue(tick, i)
    );
    const labelValues = this.ticks.map(axisOptions.labelInterpolationFnc);
    projectedValues.forEach((projectedValue, index) => {
      const labelValue = labelValues[index];
      const labelOffset = {
        x: 0,
        y: 0
      };
      let labelLength;
      if (projectedValues[index + 1]) {
        labelLength = projectedValues[index + 1] - projectedValue;
      } else {
        labelLength = Math.max(this.axisLength - projectedValue, this.axisLength / this.ticks.length);
      }
      if (labelValue !== "" && isFalseyButZero(labelValue)) {
        return;
      }
      if (this.units.pos === "x") {
        projectedValue = this.chartRect.x1 + projectedValue;
        labelOffset.x = chartOptions.axisX.labelOffset.x;
        if (chartOptions.axisX.position === "start") {
          labelOffset.y = this.chartRect.padding.top + chartOptions.axisX.labelOffset.y + 5;
        } else {
          labelOffset.y = this.chartRect.y1 + chartOptions.axisX.labelOffset.y + 5;
        }
      } else {
        projectedValue = this.chartRect.y1 - projectedValue;
        labelOffset.y = chartOptions.axisY.labelOffset.y - labelLength;
        if (chartOptions.axisY.position === "start") {
          labelOffset.x = this.chartRect.padding.left + chartOptions.axisY.labelOffset.x;
        } else {
          labelOffset.x = this.chartRect.x2 + chartOptions.axisY.labelOffset.x + 10;
        }
      }
      if (axisOptions.showGrid) {
        createGrid(projectedValue, index, this, this.gridOffset, this.chartRect[this.counterUnits.len](), gridGroup, [
          chartOptions.classNames.grid,
          chartOptions.classNames[this.units.dir]
        ], eventEmitter);
      }
      if (axisOptions.showLabel) {
        createLabel(projectedValue, labelLength, index, labelValue, this, axisOptions.offset, labelOffset, labelGroup, [
          chartOptions.classNames.label,
          chartOptions.classNames[this.units.dir],
          axisOptions.position === "start" ? chartOptions.classNames[axisOptions.position] : chartOptions.classNames.end
        ], eventEmitter);
      }
    });
  }
  constructor(units, chartRect, ticks) {
    this.units = units;
    this.chartRect = chartRect;
    this.ticks = ticks;
    this.counterUnits = units === axisUnits.x ? axisUnits.y : axisUnits.x;
    this.axisLength = chartRect[this.units.rectEnd] - chartRect[this.units.rectStart];
    this.gridOffset = chartRect[this.units.rectOffset];
  }
};
var AutoScaleAxis = class extends Axis {
  projectValue(value) {
    const finalValue = Number(getMultiValue(value, this.units.pos));
    return this.axisLength * (finalValue - this.bounds.min) / this.bounds.range;
  }
  constructor(axisUnit, data2, chartRect, options) {
    const highLow = options.highLow || getHighLow(data2, options, axisUnit.pos);
    const bounds = getBounds(chartRect[axisUnit.rectEnd] - chartRect[axisUnit.rectStart], highLow, options.scaleMinSpace || 20, options.onlyInteger);
    const range = {
      min: bounds.min,
      max: bounds.max
    };
    super(axisUnit, chartRect, bounds.values);
    this.bounds = bounds;
    this.range = range;
  }
};
var StepAxis = class extends Axis {
  projectValue(_value, index) {
    return this.stepLength * index;
  }
  constructor(axisUnit, _data, chartRect, options) {
    const ticks = options.ticks || [];
    super(axisUnit, chartRect, ticks);
    const calc = Math.max(1, ticks.length - (options.stretch ? 1 : 0));
    this.stepLength = this.axisLength / calc;
    this.stretch = Boolean(options.stretch);
  }
};
function getSeriesOption(series, options, key) {
  var ref;
  if (safeHasProperty(series, "name") && series.name && ((ref = options.series) === null || ref === void 0 ? void 0 : ref[series.name])) {
    const seriesOptions = options === null || options === void 0 ? void 0 : options.series[series.name];
    const value = seriesOptions[key];
    const result = value === void 0 ? options[key] : value;
    return result;
  } else {
    return options[key];
  }
}
var defaultOptions$2 = {
  // Options for X-Axis
  axisX: {
    // The offset of the labels to the chart area
    offset: 30,
    // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
    position: "end",
    // Allows you to correct label positioning on this axis by positive or negative x and y offset.
    labelOffset: {
      x: 0,
      y: 0
    },
    // If labels should be shown or not
    showLabel: true,
    // If the axis grid should be drawn or not
    showGrid: true,
    // Interpolation function that allows you to intercept the value from the axis label
    labelInterpolationFnc: noop,
    // Set the axis type to be used to project values on this axis. If not defined, Chartist.StepAxis will be used for the X-Axis, where the ticks option will be set to the labels in the data and the stretch option will be set to the global fullWidth option. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
    type: void 0
  },
  // Options for Y-Axis
  axisY: {
    // The offset of the labels to the chart area
    offset: 40,
    // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
    position: "start",
    // Allows you to correct label positioning on this axis by positive or negative x and y offset.
    labelOffset: {
      x: 0,
      y: 0
    },
    // If labels should be shown or not
    showLabel: true,
    // If the axis grid should be drawn or not
    showGrid: true,
    // Interpolation function that allows you to intercept the value from the axis label
    labelInterpolationFnc: noop,
    // Set the axis type to be used to project values on this axis. If not defined, Chartist.AutoScaleAxis will be used for the Y-Axis, where the high and low options will be set to the global high and low options. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
    type: void 0,
    // This value specifies the minimum height in pixel of the scale steps
    scaleMinSpace: 20,
    // Use only integer values (whole numbers) for the scale steps
    onlyInteger: false
  },
  // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
  width: void 0,
  // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
  height: void 0,
  // If the line should be drawn or not
  showLine: true,
  // If dots should be drawn or not
  showPoint: true,
  // If the line chart should draw an area
  showArea: false,
  // The base for the area chart that will be used to close the area shape (is normally 0)
  areaBase: 0,
  // Specify if the lines should be smoothed. This value can be true or false where true will result in smoothing using the default smoothing interpolation function Chartist.Interpolation.cardinal and false results in Chartist.Interpolation.none. You can also choose other smoothing / interpolation functions available in the Chartist.Interpolation module, or write your own interpolation function. Check the examples for a brief description.
  lineSmooth: true,
  // If the line chart should add a background fill to the .ct-grids group.
  showGridBackground: false,
  // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
  low: void 0,
  // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
  high: void 0,
  // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
  chartPadding: {
    top: 15,
    right: 15,
    bottom: 5,
    left: 10
  },
  // When set to true, the last grid line on the x-axis is not drawn and the chart elements will expand to the full available width of the chart. For the last label to be drawn correctly you might need to add chart padding or offset the last label with a draw event handler.
  fullWidth: false,
  // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
  reverseData: false,
  // Override the class names that get used to generate the SVG structure of the chart
  classNames: {
    chart: "ct-chart-line",
    label: "ct-label",
    labelGroup: "ct-labels",
    series: "ct-series",
    line: "ct-line",
    point: "ct-point",
    area: "ct-area",
    grid: "ct-grid",
    gridGroup: "ct-grids",
    gridBackground: "ct-grid-background",
    vertical: "ct-vertical",
    horizontal: "ct-horizontal",
    start: "ct-start",
    end: "ct-end"
  }
};
var LineChart = class extends BaseChart {
  /**
  * Creates a new chart
  */
  createChart(options) {
    const { data: data2 } = this;
    const normalizedData = normalizeData(data2, options.reverseData, true);
    const svg = createSvg(this.container, options.width, options.height, options.classNames.chart, options.viewBox);
    this.svg = svg;
    const gridGroup = svg.elem("g").addClass(options.classNames.gridGroup);
    const seriesGroup = svg.elem("g");
    const labelGroup = svg.elem("g").addClass(options.classNames.labelGroup);
    const chartRect = createChartRect(svg, options);
    let axisX;
    let axisY;
    if (options.axisX.type === void 0) {
      axisX = new StepAxis(axisUnits.x, normalizedData.series, chartRect, __spreadProps(__spreadValues({}, options.axisX), {
        ticks: normalizedData.labels,
        stretch: options.fullWidth
      }));
    } else {
      axisX = new options.axisX.type(axisUnits.x, normalizedData.series, chartRect, options.axisX);
    }
    if (options.axisY.type === void 0) {
      axisY = new AutoScaleAxis(axisUnits.y, normalizedData.series, chartRect, __spreadProps(__spreadValues({}, options.axisY), {
        high: isNumeric(options.high) ? options.high : options.axisY.high,
        low: isNumeric(options.low) ? options.low : options.axisY.low
      }));
    } else {
      axisY = new options.axisY.type(axisUnits.y, normalizedData.series, chartRect, options.axisY);
    }
    axisX.createGridAndLabels(gridGroup, labelGroup, options, this.eventEmitter);
    axisY.createGridAndLabels(gridGroup, labelGroup, options, this.eventEmitter);
    if (options.showGridBackground) {
      createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
    }
    each(data2.series, (series, seriesIndex) => {
      const seriesElement = seriesGroup.elem("g");
      const seriesName = safeHasProperty(series, "name") && series.name;
      const seriesClassName = safeHasProperty(series, "className") && series.className;
      const seriesMeta = safeHasProperty(series, "meta") ? series.meta : void 0;
      if (seriesName) {
        seriesElement.attr({
          "ct:series-name": seriesName
        });
      }
      if (seriesMeta) {
        seriesElement.attr({
          "ct:meta": serialize(seriesMeta)
        });
      }
      seriesElement.addClass([
        options.classNames.series,
        seriesClassName || "".concat(options.classNames.series, "-").concat(alphaNumerate(seriesIndex))
      ].join(" "));
      const pathCoordinates = [];
      const pathData = [];
      normalizedData.series[seriesIndex].forEach((value, valueIndex) => {
        const p = {
          x: chartRect.x1 + axisX.projectValue(value, valueIndex, normalizedData.series[seriesIndex]),
          y: chartRect.y1 - axisY.projectValue(value, valueIndex, normalizedData.series[seriesIndex])
        };
        pathCoordinates.push(p.x, p.y);
        pathData.push({
          value,
          valueIndex,
          meta: getMetaData(series, valueIndex)
        });
      });
      const seriesOptions = {
        lineSmooth: getSeriesOption(series, options, "lineSmooth"),
        showPoint: getSeriesOption(series, options, "showPoint"),
        showLine: getSeriesOption(series, options, "showLine"),
        showArea: getSeriesOption(series, options, "showArea"),
        areaBase: getSeriesOption(series, options, "areaBase")
      };
      let smoothing;
      if (typeof seriesOptions.lineSmooth === "function") {
        smoothing = seriesOptions.lineSmooth;
      } else {
        smoothing = seriesOptions.lineSmooth ? monotoneCubic() : none();
      }
      const path = smoothing(pathCoordinates, pathData);
      if (seriesOptions.showPoint) {
        path.pathElements.forEach((pathElement) => {
          const { data: pathElementData } = pathElement;
          const point = seriesElement.elem("line", {
            x1: pathElement.x,
            y1: pathElement.y,
            x2: pathElement.x + 0.01,
            y2: pathElement.y
          }, options.classNames.point);
          if (pathElementData) {
            let x;
            let y;
            if (safeHasProperty(pathElementData.value, "x")) {
              x = pathElementData.value.x;
            }
            if (safeHasProperty(pathElementData.value, "y")) {
              y = pathElementData.value.y;
            }
            point.attr({
              "ct:value": [
                x,
                y
              ].filter(isNumeric).join(","),
              "ct:meta": serialize(pathElementData.meta)
            });
          }
          this.eventEmitter.emit("draw", {
            type: "point",
            value: pathElementData === null || pathElementData === void 0 ? void 0 : pathElementData.value,
            index: (pathElementData === null || pathElementData === void 0 ? void 0 : pathElementData.valueIndex) || 0,
            meta: pathElementData === null || pathElementData === void 0 ? void 0 : pathElementData.meta,
            series,
            seriesIndex,
            axisX,
            axisY,
            group: seriesElement,
            element: point,
            x: pathElement.x,
            y: pathElement.y,
            chartRect
          });
        });
      }
      if (seriesOptions.showLine) {
        const line = seriesElement.elem("path", {
          d: path.stringify()
        }, options.classNames.line, true);
        this.eventEmitter.emit("draw", {
          type: "line",
          values: normalizedData.series[seriesIndex],
          path: path.clone(),
          chartRect,
          // TODO: Remove redundant
          index: seriesIndex,
          series,
          seriesIndex,
          meta: seriesMeta,
          axisX,
          axisY,
          group: seriesElement,
          element: line
        });
      }
      if (seriesOptions.showArea && axisY.range) {
        const areaBase = Math.max(Math.min(seriesOptions.areaBase, axisY.range.max), axisY.range.min);
        const areaBaseProjected = chartRect.y1 - axisY.projectValue(areaBase);
        path.splitByCommand("M").filter(
          (pathSegment) => pathSegment.pathElements.length > 1
        ).map((solidPathSegments) => {
          const firstElement = solidPathSegments.pathElements[0];
          const lastElement = solidPathSegments.pathElements[solidPathSegments.pathElements.length - 1];
          return solidPathSegments.clone(true).position(0).remove(1).move(firstElement.x, areaBaseProjected).line(firstElement.x, firstElement.y).position(solidPathSegments.pathElements.length + 1).line(lastElement.x, areaBaseProjected);
        }).forEach((areaPath) => {
          const area = seriesElement.elem("path", {
            d: areaPath.stringify()
          }, options.classNames.area, true);
          this.eventEmitter.emit("draw", {
            type: "area",
            values: normalizedData.series[seriesIndex],
            path: areaPath.clone(),
            series,
            seriesIndex,
            axisX,
            axisY,
            chartRect,
            // TODO: Remove redundant
            index: seriesIndex,
            group: seriesElement,
            element: area,
            meta: seriesMeta
          });
        });
      }
    }, options.reverseData);
    this.eventEmitter.emit("created", {
      chartRect,
      axisX,
      axisY,
      svg,
      options
    });
  }
  /**
  * This method creates a new line chart.
  * @param query A selector query string or directly a DOM element
  * @param data The data object that needs to consist of a labels and a series array
  * @param options The options object with options that override the default options. Check the examples for a detailed list.
  * @param responsiveOptions Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
  * @return An object which exposes the API for the created chart
  *
  * @example
  * ```ts
  * // Create a simple line chart
  * const data = {
  *   // A labels array that can contain any sort of values
  *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  *   // Our series array that contains series objects or in this case series data arrays
  *   series: [
  *     [5, 2, 4, 2, 0]
  *   ]
  * };
  *
  * // As options we currently only set a static size of 300x200 px
  * const options = {
  *   width: '300px',
  *   height: '200px'
  * };
  *
  * // In the global name space Chartist we call the Line function to initialize a line chart. As a first parameter we pass in a selector where we would like to get our chart created. Second parameter is the actual data object and as a third parameter we pass in our options
  * new LineChart('.ct-chart', data, options);
  * ```
  *
  * @example
  * ```ts
  * // Use specific interpolation function with configuration from the Chartist.Interpolation module
  *
  * const chart = new LineChart('.ct-chart', {
  *   labels: [1, 2, 3, 4, 5],
  *   series: [
  *     [1, 1, 8, 1, 7]
  *   ]
  * }, {
  *   lineSmooth: Chartist.Interpolation.cardinal({
  *     tension: 0.2
  *   })
  * });
  * ```
  *
  * @example
  * ```ts
  * // Create a line chart with responsive options
  *
  * const data = {
  *   // A labels array that can contain any sort of values
  *   labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  *   // Our series array that contains series objects or in this case series data arrays
  *   series: [
  *     [5, 2, 4, 2, 0]
  *   ]
  * };
  *
  * // In addition to the regular options we specify responsive option overrides that will override the default configutation based on the matching media queries.
  * const responsiveOptions = [
  *   ['screen and (min-width: 641px) and (max-width: 1024px)', {
  *     showPoint: false,
  *     axisX: {
  *       labelInterpolationFnc: function(value) {
  *         // Will return Mon, Tue, Wed etc. on medium screens
  *         return value.slice(0, 3);
  *       }
  *     }
  *   }],
  *   ['screen and (max-width: 640px)', {
  *     showLine: false,
  *     axisX: {
  *       labelInterpolationFnc: function(value) {
  *         // Will return M, T, W etc. on small screens
  *         return value[0];
  *       }
  *     }
  *   }]
  * ];
  *
  * new LineChart('.ct-chart', data, null, responsiveOptions);
  * ```
  */
  constructor(query, data2, options, responsiveOptions) {
    super(query, data2, defaultOptions$2, extend({}, defaultOptions$2, options), responsiveOptions);
    this.data = data2;
  }
};
function getSerialSums(series) {
  return serialMap(series, function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return Array.from(args).reduce((prev, curr) => {
      return {
        x: prev.x + (safeHasProperty(curr, "x") ? curr.x : 0),
        y: prev.y + (safeHasProperty(curr, "y") ? curr.y : 0)
      };
    }, {
      x: 0,
      y: 0
    });
  });
}
var defaultOptions$1 = {
  // Options for X-Axis
  axisX: {
    // The offset of the chart drawing area to the border of the container
    offset: 30,
    // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
    position: "end",
    // Allows you to correct label positioning on this axis by positive or negative x and y offset.
    labelOffset: {
      x: 0,
      y: 0
    },
    // If labels should be shown or not
    showLabel: true,
    // If the axis grid should be drawn or not
    showGrid: true,
    // Interpolation function that allows you to intercept the value from the axis label
    labelInterpolationFnc: noop,
    // This value specifies the minimum width in pixel of the scale steps
    scaleMinSpace: 30,
    // Use only integer values (whole numbers) for the scale steps
    onlyInteger: false
  },
  // Options for Y-Axis
  axisY: {
    // The offset of the chart drawing area to the border of the container
    offset: 40,
    // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
    position: "start",
    // Allows you to correct label positioning on this axis by positive or negative x and y offset.
    labelOffset: {
      x: 0,
      y: 0
    },
    // If labels should be shown or not
    showLabel: true,
    // If the axis grid should be drawn or not
    showGrid: true,
    // Interpolation function that allows you to intercept the value from the axis label
    labelInterpolationFnc: noop,
    // This value specifies the minimum height in pixel of the scale steps
    scaleMinSpace: 20,
    // Use only integer values (whole numbers) for the scale steps
    onlyInteger: false
  },
  // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
  width: void 0,
  // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
  height: void 0,
  // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
  high: void 0,
  // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
  low: void 0,
  // Unless low/high are explicitly set, bar chart will be centered at zero by default. Set referenceValue to null to auto scale.
  referenceValue: 0,
  // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
  chartPadding: {
    top: 15,
    right: 15,
    bottom: 5,
    left: 10
  },
  // Specify the distance in pixel of bars in a group
  seriesBarDistance: 15,
  // If set to true this property will cause the series bars to be stacked. Check the `stackMode` option for further stacking options.
  stackBars: false,
  // If set to true this property will force the stacked bars to draw from the zero line.
  // If set to 'accumulate' this property will form a total for each series point. This will also influence the y-axis and the overall bounds of the chart. In stacked mode the seriesBarDistance property will have no effect.
  // If set to 'accumulate-relative' positive and negative values will be handled separately.
  stackMode: "accumulate",
  // Inverts the axes of the bar chart in order to draw a horizontal bar chart. Be aware that you also need to invert your axis settings as the Y Axis will now display the labels and the X Axis the values.
  horizontalBars: false,
  // If set to true then each bar will represent a series and the data array is expected to be a one dimensional array of data values rather than a series array of series. This is useful if the bar chart should represent a profile rather than some data over time.
  distributeSeries: false,
  // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
  reverseData: false,
  // If the bar chart should add a background fill to the .ct-grids group.
  showGridBackground: false,
  // Override the class names that get used to generate the SVG structure of the chart
  classNames: {
    chart: "ct-chart-bar",
    horizontalBars: "ct-horizontal-bars",
    label: "ct-label",
    labelGroup: "ct-labels",
    series: "ct-series",
    bar: "ct-bar",
    grid: "ct-grid",
    gridGroup: "ct-grids",
    gridBackground: "ct-grid-background",
    vertical: "ct-vertical",
    horizontal: "ct-horizontal",
    start: "ct-start",
    end: "ct-end"
  }
};
var BarChart = class extends BaseChart {
  /**
  * Creates a new chart
  */
  createChart(options) {
    const { data: data2 } = this;
    const normalizedData = normalizeData(data2, options.reverseData, options.horizontalBars ? "x" : "y", true);
    const svg = createSvg(this.container, options.width, options.height, options.classNames.chart + (options.horizontalBars ? " " + options.classNames.horizontalBars : ""), options.viewBox);
    const highLow = options.stackBars && options.stackMode !== true && normalizedData.series.length ? getHighLow([
      getSerialSums(normalizedData.series)
    ], options, options.horizontalBars ? "x" : "y") : getHighLow(normalizedData.series, options, options.horizontalBars ? "x" : "y");
    this.svg = svg;
    const gridGroup = svg.elem("g").addClass(options.classNames.gridGroup);
    const seriesGroup = svg.elem("g");
    const labelGroup = svg.elem("g").addClass(options.classNames.labelGroup);
    if (typeof options.high === "number") {
      highLow.high = options.high;
    }
    if (typeof options.low === "number") {
      highLow.low = options.low;
    }
    const chartRect = createChartRect(svg, options);
    let valueAxis;
    const labelAxisTicks = options.distributeSeries && options.stackBars ? (
      // use only the first label for the step axis
      normalizedData.labels.slice(0, 1)
    ) : (
      // If we are drawing a regular bar chart with two dimensional series data, we just use the labels array
      // as the bars are normalized
      normalizedData.labels
    );
    let labelAxis;
    let axisX;
    let axisY;
    if (options.horizontalBars) {
      if (options.axisX.type === void 0) {
        valueAxis = axisX = new AutoScaleAxis(axisUnits.x, normalizedData.series, chartRect, __spreadProps(__spreadValues({}, options.axisX), {
          highLow,
          referenceValue: 0
        }));
      } else {
        valueAxis = axisX = new options.axisX.type(axisUnits.x, normalizedData.series, chartRect, __spreadProps(__spreadValues({}, options.axisX), {
          highLow,
          referenceValue: 0
        }));
      }
      if (options.axisY.type === void 0) {
        labelAxis = axisY = new StepAxis(axisUnits.y, normalizedData.series, chartRect, {
          ticks: labelAxisTicks
        });
      } else {
        labelAxis = axisY = new options.axisY.type(axisUnits.y, normalizedData.series, chartRect, options.axisY);
      }
    } else {
      if (options.axisX.type === void 0) {
        labelAxis = axisX = new StepAxis(axisUnits.x, normalizedData.series, chartRect, {
          ticks: labelAxisTicks
        });
      } else {
        labelAxis = axisX = new options.axisX.type(axisUnits.x, normalizedData.series, chartRect, options.axisX);
      }
      if (options.axisY.type === void 0) {
        valueAxis = axisY = new AutoScaleAxis(axisUnits.y, normalizedData.series, chartRect, __spreadProps(__spreadValues({}, options.axisY), {
          highLow,
          referenceValue: 0
        }));
      } else {
        valueAxis = axisY = new options.axisY.type(axisUnits.y, normalizedData.series, chartRect, __spreadProps(__spreadValues({}, options.axisY), {
          highLow,
          referenceValue: 0
        }));
      }
    }
    const zeroPoint = options.horizontalBars ? chartRect.x1 + valueAxis.projectValue(0) : chartRect.y1 - valueAxis.projectValue(0);
    const isAccumulateStackMode = options.stackMode === "accumulate";
    const isAccumulateRelativeStackMode = options.stackMode === "accumulate-relative";
    const posStackedBarValues = [];
    const negStackedBarValues = [];
    let stackedBarValues = posStackedBarValues;
    labelAxis.createGridAndLabels(gridGroup, labelGroup, options, this.eventEmitter);
    valueAxis.createGridAndLabels(gridGroup, labelGroup, options, this.eventEmitter);
    if (options.showGridBackground) {
      createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
    }
    each(data2.series, (series, seriesIndex) => {
      const biPol = seriesIndex - (data2.series.length - 1) / 2;
      let periodHalfLength;
      if (options.distributeSeries && !options.stackBars) {
        periodHalfLength = labelAxis.axisLength / normalizedData.series.length / 2;
      } else if (options.distributeSeries && options.stackBars) {
        periodHalfLength = labelAxis.axisLength / 2;
      } else {
        periodHalfLength = labelAxis.axisLength / normalizedData.series[seriesIndex].length / 2;
      }
      const seriesElement = seriesGroup.elem("g");
      const seriesName = safeHasProperty(series, "name") && series.name;
      const seriesClassName = safeHasProperty(series, "className") && series.className;
      const seriesMeta = safeHasProperty(series, "meta") ? series.meta : void 0;
      if (seriesName) {
        seriesElement.attr({
          "ct:series-name": seriesName
        });
      }
      if (seriesMeta) {
        seriesElement.attr({
          "ct:meta": serialize(seriesMeta)
        });
      }
      seriesElement.addClass([
        options.classNames.series,
        seriesClassName || "".concat(options.classNames.series, "-").concat(alphaNumerate(seriesIndex))
      ].join(" "));
      normalizedData.series[seriesIndex].forEach((value, valueIndex) => {
        const valueX = safeHasProperty(value, "x") && value.x;
        const valueY = safeHasProperty(value, "y") && value.y;
        let labelAxisValueIndex;
        if (options.distributeSeries && !options.stackBars) {
          labelAxisValueIndex = seriesIndex;
        } else if (options.distributeSeries && options.stackBars) {
          labelAxisValueIndex = 0;
        } else {
          labelAxisValueIndex = valueIndex;
        }
        let projected;
        if (options.horizontalBars) {
          projected = {
            x: chartRect.x1 + valueAxis.projectValue(valueX || 0, valueIndex, normalizedData.series[seriesIndex]),
            y: chartRect.y1 - labelAxis.projectValue(valueY || 0, labelAxisValueIndex, normalizedData.series[seriesIndex])
          };
        } else {
          projected = {
            x: chartRect.x1 + labelAxis.projectValue(valueX || 0, labelAxisValueIndex, normalizedData.series[seriesIndex]),
            y: chartRect.y1 - valueAxis.projectValue(valueY || 0, valueIndex, normalizedData.series[seriesIndex])
          };
        }
        if (labelAxis instanceof StepAxis) {
          if (!labelAxis.stretch) {
            projected[labelAxis.units.pos] += periodHalfLength * (options.horizontalBars ? -1 : 1);
          }
          projected[labelAxis.units.pos] += options.stackBars || options.distributeSeries ? 0 : biPol * options.seriesBarDistance * (options.horizontalBars ? -1 : 1);
        }
        if (isAccumulateRelativeStackMode) {
          stackedBarValues = valueY >= 0 || valueX >= 0 ? posStackedBarValues : negStackedBarValues;
        }
        const previousStack = stackedBarValues[valueIndex] || zeroPoint;
        stackedBarValues[valueIndex] = previousStack - (zeroPoint - projected[labelAxis.counterUnits.pos]);
        if (value === void 0) {
          return;
        }
        const positions = {
          ["".concat(labelAxis.units.pos, "1")]: projected[labelAxis.units.pos],
          ["".concat(labelAxis.units.pos, "2")]: projected[labelAxis.units.pos]
        };
        if (options.stackBars && (isAccumulateStackMode || isAccumulateRelativeStackMode || !options.stackMode)) {
          positions["".concat(labelAxis.counterUnits.pos, "1")] = previousStack;
          positions["".concat(labelAxis.counterUnits.pos, "2")] = stackedBarValues[valueIndex];
        } else {
          positions["".concat(labelAxis.counterUnits.pos, "1")] = zeroPoint;
          positions["".concat(labelAxis.counterUnits.pos, "2")] = projected[labelAxis.counterUnits.pos];
        }
        positions.x1 = Math.min(Math.max(positions.x1, chartRect.x1), chartRect.x2);
        positions.x2 = Math.min(Math.max(positions.x2, chartRect.x1), chartRect.x2);
        positions.y1 = Math.min(Math.max(positions.y1, chartRect.y2), chartRect.y1);
        positions.y2 = Math.min(Math.max(positions.y2, chartRect.y2), chartRect.y1);
        const metaData = getMetaData(series, valueIndex);
        const bar = seriesElement.elem("line", positions, options.classNames.bar).attr({
          "ct:value": [
            valueX,
            valueY
          ].filter(isNumeric).join(","),
          "ct:meta": serialize(metaData)
        });
        this.eventEmitter.emit("draw", __spreadValues({
          type: "bar",
          value,
          index: valueIndex,
          meta: metaData,
          series,
          seriesIndex,
          axisX,
          axisY,
          chartRect,
          group: seriesElement,
          element: bar
        }, positions));
      });
    }, options.reverseData);
    this.eventEmitter.emit("created", {
      chartRect,
      axisX,
      axisY,
      svg,
      options
    });
  }
  /**
  * This method creates a new bar chart and returns API object that you can use for later changes.
  * @param query A selector query string or directly a DOM element
  * @param data The data object that needs to consist of a labels and a series array
  * @param options The options object with options that override the default options. Check the examples for a detailed list.
  * @param responsiveOptions Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
  * @return An object which exposes the API for the created chart
  *
  * @example
  * ```ts
  * // Create a simple bar chart
  * const data = {
  *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  *   series: [
  *     [5, 2, 4, 2, 0]
  *   ]
  * };
  *
  * // In the global name space Chartist we call the Bar function to initialize a bar chart. As a first parameter we pass in a selector where we would like to get our chart created and as a second parameter we pass our data object.
  * new BarChart('.ct-chart', data);
  * ```
  *
  * @example
  * ```ts
  * // This example creates a bipolar grouped bar chart where the boundaries are limitted to -10 and 10
  * new BarChart('.ct-chart', {
  *   labels: [1, 2, 3, 4, 5, 6, 7],
  *   series: [
  *     [1, 3, 2, -5, -3, 1, -6],
  *     [-5, -2, -4, -1, 2, -3, 1]
  *   ]
  * }, {
  *   seriesBarDistance: 12,
  *   low: -10,
  *   high: 10
  * });
  * ```
  */
  constructor(query, data2, options, responsiveOptions) {
    super(query, data2, defaultOptions$1, extend({}, defaultOptions$1, options), responsiveOptions);
    this.data = data2;
  }
};
var defaultOptions = {
  // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
  width: void 0,
  // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
  height: void 0,
  // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
  chartPadding: 5,
  // Override the class names that are used to generate the SVG structure of the chart
  classNames: {
    chartPie: "ct-chart-pie",
    chartDonut: "ct-chart-donut",
    series: "ct-series",
    slicePie: "ct-slice-pie",
    sliceDonut: "ct-slice-donut",
    label: "ct-label"
  },
  // The start angle of the pie chart in degrees where 0 points north. A higher value offsets the start angle clockwise.
  startAngle: 0,
  // An optional total you can specify. By specifying a total value, the sum of the values in the series must be this total in order to draw a full pie. You can use this parameter to draw only parts of a pie or gauge charts.
  total: void 0,
  // If specified the donut CSS classes will be used and strokes will be drawn instead of pie slices.
  donut: false,
  // Specify the donut stroke width, currently done in javascript for convenience. May move to CSS styles in the future.
  // This option can be set as number or string to specify a relative width (i.e. 100 or '30%').
  donutWidth: 60,
  // If a label should be shown or not
  showLabel: true,
  // Label position offset from the standard position which is half distance of the radius. This value can be either positive or negative. Positive values will position the label away from the center.
  labelOffset: 0,
  // This option can be set to 'inside', 'outside' or 'center'. Positioned with 'inside' the labels will be placed on half the distance of the radius to the border of the Pie by respecting the 'labelOffset'. The 'outside' option will place the labels at the border of the pie and 'center' will place the labels in the absolute center point of the chart. The 'center' option only makes sense in conjunction with the 'labelOffset' option.
  labelPosition: "inside",
  // An interpolation function for the label value
  labelInterpolationFnc: noop,
  // Label direction can be 'neutral', 'explode' or 'implode'. The labels anchor will be positioned based on those settings as well as the fact if the labels are on the right or left side of the center of the chart. Usually explode is useful when labels are positioned far away from the center.
  labelDirection: "neutral",
  // If true empty values will be ignored to avoid drawing unnecessary slices and labels
  ignoreEmptyValues: false,
  // If Nonzero check if a label has overlapping text then move it the number of pixels up and left (Should be half of label font size + 1 but you can tweak it as you prefer)
  preventOverlappingLabelOffset: 0
};
function determineAnchorPosition(center, label, direction) {
  const toTheRight = label.x > center.x;
  if (toTheRight && direction === "explode" || !toTheRight && direction === "implode") {
    return "start";
  } else if (toTheRight && direction === "implode" || !toTheRight && direction === "explode") {
    return "end";
  } else {
    return "middle";
  }
}
var PieChart = class extends BaseChart {
  /**
  * Check if a label has overlapping text then move it the number of pixels up and left based on textSize.
  * @param labelPos - Label position that chartist will be checking does not overlap with the list of LabelPositions.
  * @param existingLabelPos - Label position that has already been placed that chartist will check against.
  * @param textOffset - this is configured with preventOverlappingLabelOffset option.
  * @param length - How many characters long the label is.
  */
  moveLabel(labelPos, existingLabelPos, textOffset, length) {
    if (labelPos.y > existingLabelPos.y - textOffset && labelPos.y < existingLabelPos.y + textOffset && labelPos.x > existingLabelPos.x - length * textOffset && labelPos.x < existingLabelPos.x + length * textOffset) {
      labelPos.y -= textOffset;
      labelPos.x -= textOffset;
      this.moveLabel(labelPos, existingLabelPos, textOffset, length);
    }
  }
  /**
  * Creates the pie chart
  *
  * @param options
  */
  createChart(options) {
    const { data: data2 } = this;
    const normalizedData = normalizeData(data2);
    const seriesGroups = [];
    let labelsGroup;
    const labelPositions = [];
    let labelRadius;
    let startAngle = options.startAngle;
    const svg = createSvg(this.container, options.width, options.height, options.donut ? options.classNames.chartDonut : options.classNames.chartPie, options.viewBox);
    this.svg = svg;
    const chartRect = createChartRect(svg, options);
    let radius = Math.min(chartRect.width() / 2, chartRect.height() / 2);
    const totalDataSum = options.total || normalizedData.series.reduce(sum, 0);
    const donutWidth = quantity(options.donutWidth);
    if (donutWidth.unit === "%") {
      donutWidth.value *= radius / 100;
    }
    radius -= options.donut ? donutWidth.value / 2 : 0;
    if (options.labelPosition === "outside" || options.donut) {
      labelRadius = radius;
    } else if (options.labelPosition === "center") {
      labelRadius = 0;
    } else {
      labelRadius = radius / 2;
    }
    if (options.labelOffset) {
      labelRadius += options.labelOffset;
    }
    const center = {
      x: chartRect.x1 + chartRect.width() / 2,
      y: chartRect.y2 + chartRect.height() / 2
    };
    const hasSingleValInSeries = data2.series.filter(
      (val) => safeHasProperty(val, "value") ? val.value !== 0 : val !== 0
    ).length === 1;
    data2.series.forEach(
      (_, index) => seriesGroups[index] = svg.elem("g")
    );
    if (options.showLabel) {
      labelsGroup = svg.elem("g");
    }
    data2.series.forEach((series, index) => {
      var ref, ref1;
      if (normalizedData.series[index] === 0 && options.ignoreEmptyValues) {
        return;
      }
      const seriesName = safeHasProperty(series, "name") && series.name;
      const seriesClassName = safeHasProperty(series, "className") && series.className;
      const seriesMeta = safeHasProperty(series, "meta") ? series.meta : void 0;
      if (seriesName) {
        seriesGroups[index].attr({
          "ct:series-name": seriesName
        });
      }
      seriesGroups[index].addClass([
        (ref = options.classNames) === null || ref === void 0 ? void 0 : ref.series,
        seriesClassName || "".concat((ref1 = options.classNames) === null || ref1 === void 0 ? void 0 : ref1.series, "-").concat(alphaNumerate(index))
      ].join(" "));
      let endAngle = totalDataSum > 0 ? startAngle + normalizedData.series[index] / totalDataSum * 360 : 0;
      const overlappigStartAngle = Math.max(0, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2));
      if (endAngle - overlappigStartAngle >= 359.99) {
        endAngle = overlappigStartAngle + 359.99;
      }
      const start = polarToCartesian(center.x, center.y, radius, overlappigStartAngle);
      const end = polarToCartesian(center.x, center.y, radius, endAngle);
      const path = new SvgPath(!options.donut).move(end.x, end.y).arc(radius, radius, 0, Number(endAngle - startAngle > 180), 0, start.x, start.y);
      if (!options.donut) {
        path.line(center.x, center.y);
      }
      const pathElement = seriesGroups[index].elem("path", {
        d: path.stringify()
      }, options.donut ? options.classNames.sliceDonut : options.classNames.slicePie);
      pathElement.attr({
        "ct:value": normalizedData.series[index],
        "ct:meta": serialize(seriesMeta)
      });
      if (options.donut) {
        pathElement.attr({
          style: "stroke-width: " + donutWidth.value + "px"
        });
      }
      this.eventEmitter.emit("draw", {
        type: "slice",
        value: normalizedData.series[index],
        totalDataSum,
        index,
        meta: seriesMeta,
        series,
        group: seriesGroups[index],
        element: pathElement,
        path: path.clone(),
        center,
        radius,
        startAngle,
        endAngle,
        chartRect
      });
      if (options.showLabel) {
        let labelPosition;
        if (data2.series.length === 1) {
          labelPosition = {
            x: center.x,
            y: center.y
          };
        } else {
          labelPosition = polarToCartesian(center.x, center.y, labelRadius, startAngle + (endAngle - startAngle) / 2);
        }
        let rawValue;
        if (normalizedData.labels && !isFalseyButZero(normalizedData.labels[index])) {
          rawValue = normalizedData.labels[index];
        } else {
          rawValue = normalizedData.series[index];
        }
        const interpolatedValue = options.labelInterpolationFnc(rawValue, index);
        if (interpolatedValue || interpolatedValue === 0) {
          if (options.preventOverlappingLabelOffset) {
            const textOffset = options.preventOverlappingLabelOffset;
            const length = String(normalizedData.labels[index]).length;
            labelPositions.forEach((item) => {
              this.moveLabel(labelPosition, item, textOffset, length);
            });
            labelPositions.push(labelPosition);
          }
          const labelElement = labelsGroup.elem("text", {
            dx: labelPosition.x,
            dy: labelPosition.y,
            "text-anchor": determineAnchorPosition(center, labelPosition, options.labelDirection)
          }, options.classNames.label).text(String(interpolatedValue));
          this.eventEmitter.emit("draw", __spreadValues({
            type: "label",
            index,
            group: labelsGroup,
            element: labelElement,
            text: "" + interpolatedValue,
            chartRect,
            series,
            meta: seriesMeta
          }, labelPosition));
        }
      }
      startAngle = endAngle;
    });
    this.eventEmitter.emit("created", {
      chartRect,
      svg,
      options
    });
  }
  /**
  * This method creates a new pie chart and returns an object that can be used to redraw the chart.
  * @param query A selector query string or directly a DOM element
  * @param data The data object in the pie chart needs to have a series property with a one dimensional data array. The values will be normalized against each other and don't necessarily need to be in percentage. The series property can also be an array of value objects that contain a value property and a className property to override the CSS class name for the series group.
  * @param options The options object with options that override the default options. Check the examples for a detailed list.
  * @param responsiveOptions Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
  *
  * @example
  * ```ts
  * // Simple pie chart example with four series
  * new PieChart('.ct-chart', {
  *   series: [10, 2, 4, 3]
  * });
  * ```
  *
  * @example
  * ```ts
  * // Drawing a donut chart
  * new PieChart('.ct-chart', {
  *   series: [10, 2, 4, 3]
  * }, {
  *   donut: true
  * });
  * ```
  *
  * @example
  * ```ts
  * // Using donut, startAngle and total to draw a gauge chart
  * new PieChart('.ct-chart', {
  *   series: [20, 10, 30, 40]
  * }, {
  *   donut: true,
  *   donutWidth: 20,
  *   startAngle: 270,
  *   total: 200
  * });
  * ```
  *
  * @example
  * ```ts
  * // Drawing a pie chart with padding and labels that are outside the pie
  * new PieChart('.ct-chart', {
  *   series: [20, 10, 30, 40]
  * }, {
  *   chartPadding: 30,
  *   labelOffset: 50,
  *   labelDirection: 'explode'
  * });
  * ```
  *
  * @example
  * ```ts
  * // Overriding the class names for individual series as well as a name and meta data.
  * // The name will be written as ct:series-name attribute and the meta data will be serialized and written
  * // to a ct:meta attribute.
  * new PieChart('.ct-chart', {
  *   series: [{
  *     value: 20,
  *     name: 'Series 1',
  *     className: 'my-custom-class-one',
  *     meta: 'Meta One'
  *   }, {
  *     value: 10,
  *     name: 'Series 2',
  *     className: 'my-custom-class-two',
  *     meta: 'Meta Two'
  *   }, {
  *     value: 70,
  *     name: 'Series 3',
  *     className: 'my-custom-class-three',
  *     meta: 'Meta Three'
  *   }]
  * });
  * ```
  */
  constructor(query, data2, options, responsiveOptions) {
    super(query, data2, defaultOptions, extend({}, defaultOptions, options), responsiveOptions);
    this.data = data2;
  }
};

// node_modules/ng-chartist/fesm2022/ng-chartist.mjs
var ChartistComponent = class _ChartistComponent {
  elementRef = inject(ElementRef);
  configuration;
  /**
   * Events object where keys are Chartist event names and values are event handler functions.
   *
   * Supported events are: draw, optionsChanged, data, animationBegin, animationEnd, created.
   *
   * Event handler function will receive a data argument which contains event data.
   */
  events;
  /**
   * Event emitted after Chartist chart has been initialized.
   *
   * Event handler function will receive chart instance argument.
   */
  initialized = new EventEmitter();
  chart;
  ngOnInit() {
    if (this.configuration.type && this.configuration.data) {
      this.renderChart();
    }
  }
  ngOnChanges(changes) {
    this.update(changes);
  }
  ngOnDestroy() {
    if (this.chart) {
      this.chart.detach();
      this.chart = null;
    }
  }
  renderChart() {
    const nativeElement = this.elementRef.nativeElement;
    const {
      type,
      data: data2,
      options,
      responsiveOptions
    } = this.configuration;
    if (type === "Bar") {
      this.chart = new BarChart(nativeElement, data2, options, responsiveOptions);
    } else if (type === "Line") {
      this.chart = new LineChart(nativeElement, data2, options, responsiveOptions);
    } else if (type === "Pie") {
      this.chart = new PieChart(nativeElement, data2, options, responsiveOptions);
    } else {
      throw new Error(`${type} is not a known chart type`);
    }
    if (this.events) {
      this.bindEvents();
    }
    this.initialized.emit(this.chart);
  }
  update(changes) {
    const {
      type,
      data: data2,
      options
    } = this.configuration;
    if (!type || !data2) {
      return;
    }
    const changedConfiguration = changes.configuration.currentValue;
    if (!this.chart || changedConfiguration.type !== type) {
      this.renderChart();
    } else if ("data" in changedConfiguration || "options" in changedConfiguration) {
      this.chart.update(data2, options);
    }
  }
  bindEvents() {
    for (const event of Object.keys(this.events)) {
      this.chart.on(event, this.events[event]);
    }
  }
  static \u0275fac = function ChartistComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChartistComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ChartistComponent,
    selectors: [["x-chartist"]],
    inputs: {
      configuration: "configuration",
      events: "events"
    },
    outputs: {
      initialized: "initialized"
    },
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 0,
    vars: 0,
    template: function ChartistComponent_Template(rf, ctx) {
    },
    styles: ["[_nghost-%COMP%]{display:block}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartistComponent, [{
    type: Component,
    args: [{
      selector: "x-chartist",
      template: "",
      styles: [":host{display:block}\n"]
    }]
  }], null, {
    configuration: [{
      type: Input
    }],
    events: [{
      type: Input
    }],
    initialized: [{
      type: Output
    }]
  });
})();
var ChartistModule = class _ChartistModule {
  static \u0275fac = function ChartistModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChartistModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ChartistModule,
    imports: [ChartistComponent],
    exports: [ChartistComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartistModule, [{
    type: NgModule,
    args: [{
      imports: [ChartistComponent],
      exports: [ChartistComponent]
    }]
  }], null, null);
})();

// node_modules/ngx-echarts/fesm2022/ngx-echarts.mjs
var NGX_ECHARTS_CONFIG = new InjectionToken("NGX_ECHARTS_CONFIG");
var ChangeFilterV2 = class {
  constructor() {
    this.subject = new ReplaySubject(1);
    this.subscriptions = new Subscription();
  }
  doFilter(changes) {
    this.subject.next(changes);
  }
  dispose() {
    this.subscriptions.unsubscribe();
  }
  notEmpty(key, handler) {
    this.subscriptions.add(this.subject.subscribe((changes) => {
      if (changes[key]) {
        const value = changes[key].currentValue;
        if (value !== void 0 && value !== null) {
          handler(value);
        }
      }
    }));
  }
  has(key, handler) {
    this.subscriptions.add(this.subject.subscribe((changes) => {
      if (changes[key]) {
        const value = changes[key].currentValue;
        handler(value);
      }
    }));
  }
  notFirst(key, handler) {
    this.subscriptions.add(this.subject.subscribe((changes) => {
      if (changes[key] && !changes[key].isFirstChange()) {
        const value = changes[key].currentValue;
        handler(value);
      }
    }));
  }
  notFirstAndEmpty(key, handler) {
    this.subscriptions.add(this.subject.subscribe((changes) => {
      if (changes[key] && !changes[key].isFirstChange()) {
        const value = changes[key].currentValue;
        if (value !== void 0 && value !== null) {
          handler(value);
        }
      }
    }));
  }
};
var NgxEchartsDirective = class _NgxEchartsDirective {
  constructor() {
    this.el = inject(ElementRef);
    this.ngZone = inject(NgZone);
    this.config = inject(NGX_ECHARTS_CONFIG);
    this.options = input(null, ...ngDevMode ? [{
      debugName: "options"
    }] : []);
    this.theme = input(this.config.theme ?? null, ...ngDevMode ? [{
      debugName: "theme"
    }] : []);
    this.initOpts = input(null, ...ngDevMode ? [{
      debugName: "initOpts"
    }] : []);
    this.merge = input(null, ...ngDevMode ? [{
      debugName: "merge"
    }] : []);
    this.autoResize = input(true, ...ngDevMode ? [{
      debugName: "autoResize"
    }] : []);
    this.loading = input(false, ...ngDevMode ? [{
      debugName: "loading"
    }] : []);
    this.loadingType = input("default", ...ngDevMode ? [{
      debugName: "loadingType"
    }] : []);
    this.loadingOpts = input(null, ...ngDevMode ? [{
      debugName: "loadingOpts"
    }] : []);
    this.chartInit = output();
    this.optionsError = output();
    this.chartClick = outputFromObservable(this.createLazyEvent("click"));
    this.chartDblClick = outputFromObservable(this.createLazyEvent("dblclick"));
    this.chartMouseDown = outputFromObservable(this.createLazyEvent("mousedown"));
    this.chartMouseMove = outputFromObservable(this.createLazyEvent("mousemove"));
    this.chartMouseUp = outputFromObservable(this.createLazyEvent("mouseup"));
    this.chartMouseOver = outputFromObservable(this.createLazyEvent("mouseover"));
    this.chartMouseOut = outputFromObservable(this.createLazyEvent("mouseout"));
    this.chartGlobalOut = outputFromObservable(this.createLazyEvent("globalout"));
    this.chartContextMenu = outputFromObservable(this.createLazyEvent("contextmenu"));
    this.chartHighlight = outputFromObservable(this.createLazyEvent("highlight"));
    this.chartDownplay = outputFromObservable(this.createLazyEvent("downplay"));
    this.chartSelectChanged = outputFromObservable(this.createLazyEvent("selectchanged"));
    this.chartLegendSelectChanged = outputFromObservable(this.createLazyEvent("legendselectchanged"));
    this.chartLegendSelected = outputFromObservable(this.createLazyEvent("legendselected"));
    this.chartLegendUnselected = outputFromObservable(this.createLazyEvent("legendunselected"));
    this.chartLegendLegendSelectAll = outputFromObservable(this.createLazyEvent("legendselectall"));
    this.chartLegendLegendInverseSelect = outputFromObservable(this.createLazyEvent("legendinverseselect"));
    this.chartLegendScroll = outputFromObservable(this.createLazyEvent("legendscroll"));
    this.chartDataZoom = outputFromObservable(this.createLazyEvent("datazoom"));
    this.chartDataRangeSelected = outputFromObservable(this.createLazyEvent("datarangeselected"));
    this.chartGraphRoam = outputFromObservable(this.createLazyEvent("graphroam"));
    this.chartGeoRoam = outputFromObservable(this.createLazyEvent("georoam"));
    this.chartTreeRoam = outputFromObservable(this.createLazyEvent("treeroam"));
    this.chartTimelineChanged = outputFromObservable(this.createLazyEvent("timelinechanged"));
    this.chartTimelinePlayChanged = outputFromObservable(this.createLazyEvent("timelineplaychanged"));
    this.chartRestore = outputFromObservable(this.createLazyEvent("restore"));
    this.chartDataViewChanged = outputFromObservable(this.createLazyEvent("dataviewchanged"));
    this.chartMagicTypeChanged = outputFromObservable(this.createLazyEvent("magictypechanged"));
    this.chartGeoSelectChanged = outputFromObservable(this.createLazyEvent("geoselectchanged"));
    this.chartGeoSelected = outputFromObservable(this.createLazyEvent("geoselected"));
    this.chartGeoUnselected = outputFromObservable(this.createLazyEvent("geounselected"));
    this.chartAxisAreaSelected = outputFromObservable(this.createLazyEvent("axisareaselected"));
    this.chartBrush = outputFromObservable(this.createLazyEvent("brush"));
    this.chartBrushEnd = outputFromObservable(this.createLazyEvent("brushend"));
    this.chartBrushSelected = outputFromObservable(this.createLazyEvent("brushselected"));
    this.chartGlobalCursorTaken = outputFromObservable(this.createLazyEvent("globalcursortaken"));
    this.chartRendered = outputFromObservable(this.createLazyEvent("rendered"));
    this.chartFinished = outputFromObservable(this.createLazyEvent("finished"));
    this.animationFrameID = null;
    this.chart$ = new ReplaySubject(1);
    this.resize$ = new Subject();
    this.changeFilter = new ChangeFilterV2();
    this.resizeObFired = false;
    this.echarts = this.config.echarts;
  }
  ngOnChanges(changes) {
    this.changeFilter.doFilter(changes);
  }
  ngOnInit() {
    if (!window.ResizeObserver) {
      throw new Error("please install a polyfill for ResizeObserver");
    }
    this.resizeSub = this.resize$.pipe(throttleTime(100, asyncScheduler, {
      leading: false,
      trailing: true
    })).subscribe(() => this.resize());
    if (this.autoResize()) {
      this.resizeOb = this.ngZone.runOutsideAngular(() => new window.ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.target === this.el.nativeElement) {
            if (!this.resizeObFired) {
              this.resizeObFired = true;
            } else {
              this.animationFrameID = window.requestAnimationFrame(() => {
                this.resize$.next();
              });
            }
          }
        }
      }));
      this.resizeOb.observe(this.el.nativeElement);
    }
    this.changeFilter.notFirstAndEmpty("options", (opt) => this.onOptionsChange(opt));
    this.changeFilter.notFirstAndEmpty("merge", (opt) => this.setOption(opt));
    this.changeFilter.has("loading", (v) => this.toggleLoading(!!v));
    this.changeFilter.notFirst("theme", () => this.refreshChart());
  }
  ngOnDestroy() {
    window.clearTimeout(this.initChartTimer);
    if (this.resizeSub) {
      this.resizeSub.unsubscribe();
    }
    if (this.animationFrameID) {
      window.cancelAnimationFrame(this.animationFrameID);
    }
    if (this.resizeOb) {
      this.resizeOb.unobserve(this.el.nativeElement);
    }
    if (this.loadingSub) {
      this.loadingSub.unsubscribe();
    }
    this.changeFilter.dispose();
    this.dispose();
  }
  ngAfterViewInit() {
    this.initChartTimer = window.setTimeout(() => this.initChart());
  }
  dispose() {
    if (this.chart) {
      if (!this.chart.isDisposed()) {
        this.chart.dispose();
      }
      this.chart = null;
    }
  }
  /**
   * resize chart
   */
  resize() {
    if (this.chart) {
      this.chart.resize();
    }
  }
  toggleLoading(loading) {
    if (this.chart) {
      loading ? this.chart.showLoading(this.loadingType(), this.loadingOpts()) : this.chart.hideLoading();
    } else {
      this.loadingSub = this.chart$.subscribe((chart) => loading ? chart.showLoading(this.loadingType(), this.loadingOpts()) : chart.hideLoading());
    }
  }
  setOption(option, opts) {
    if (this.chart) {
      try {
        this.chart.setOption(option, opts);
      } catch (e) {
        console.error(e);
        this.optionsError.emit(e);
      }
    }
  }
  /**
   * dispose old chart and create a new one.
   */
  refreshChart() {
    return __async(this, null, function* () {
      this.dispose();
      yield this.initChart();
    });
  }
  createChart() {
    const dom = this.el.nativeElement;
    if (window && window.getComputedStyle) {
      const prop = window.getComputedStyle(dom, null).getPropertyValue("height");
      if ((!prop || prop === "0px") && (!dom.style.height || dom.style.height === "0px")) {
        dom.style.height = "400px";
      }
    }
    return this.ngZone.runOutsideAngular(() => {
      const load = typeof this.echarts === "function" ? this.echarts : () => Promise.resolve(this.echarts);
      return load().then(({
        init
      }) => init(dom, this.theme() ?? this.config?.theme, this.initOpts()));
    });
  }
  initChart() {
    return __async(this, null, function* () {
      yield this.onOptionsChange(this.options());
      const merge = this.merge();
      if (merge && this.chart) {
        this.setOption(merge);
      }
    });
  }
  onOptionsChange(opt) {
    return __async(this, null, function* () {
      if (!opt) {
        return;
      }
      if (this.chart) {
        this.setOption(this.options(), true);
      } else {
        this.chart = yield this.createChart();
        this.chart$.next(this.chart);
        this.chartInit.emit(this.chart);
        this.setOption(this.options(), true);
      }
    });
  }
  // allows to lazily bind to only those events that are requested through the `output()` by parent components
  // see https://stackoverflow.com/questions/51787972/optimal-reentering-the-ngzone-from-eventemitter-event for more info
  createLazyEvent(eventName) {
    return outputToObservable(this.chartInit).pipe(switchMap((chart) => new Observable((observer) => {
      chart.on(eventName, (data2) => this.ngZone.run(() => observer.next(data2)));
      return () => {
        if (this.chart) {
          if (!this.chart.isDisposed()) {
            chart.off(eventName);
          }
        }
      };
    })));
  }
  static {
    this.\u0275fac = function NgxEchartsDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxEchartsDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgxEchartsDirective,
      selectors: [["echarts"], ["", "echarts", ""]],
      inputs: {
        options: [1, "options"],
        theme: [1, "theme"],
        initOpts: [1, "initOpts"],
        merge: [1, "merge"],
        autoResize: [1, "autoResize"],
        loading: [1, "loading"],
        loadingType: [1, "loadingType"],
        loadingOpts: [1, "loadingOpts"]
      },
      outputs: {
        chartInit: "chartInit",
        optionsError: "optionsError",
        chartClick: "chartClick",
        chartDblClick: "chartDblClick",
        chartMouseDown: "chartMouseDown",
        chartMouseMove: "chartMouseMove",
        chartMouseUp: "chartMouseUp",
        chartMouseOver: "chartMouseOver",
        chartMouseOut: "chartMouseOut",
        chartGlobalOut: "chartGlobalOut",
        chartContextMenu: "chartContextMenu",
        chartHighlight: "chartHighlight",
        chartDownplay: "chartDownplay",
        chartSelectChanged: "chartSelectChanged",
        chartLegendSelectChanged: "chartLegendSelectChanged",
        chartLegendSelected: "chartLegendSelected",
        chartLegendUnselected: "chartLegendUnselected",
        chartLegendLegendSelectAll: "chartLegendLegendSelectAll",
        chartLegendLegendInverseSelect: "chartLegendLegendInverseSelect",
        chartLegendScroll: "chartLegendScroll",
        chartDataZoom: "chartDataZoom",
        chartDataRangeSelected: "chartDataRangeSelected",
        chartGraphRoam: "chartGraphRoam",
        chartGeoRoam: "chartGeoRoam",
        chartTreeRoam: "chartTreeRoam",
        chartTimelineChanged: "chartTimelineChanged",
        chartTimelinePlayChanged: "chartTimelinePlayChanged",
        chartRestore: "chartRestore",
        chartDataViewChanged: "chartDataViewChanged",
        chartMagicTypeChanged: "chartMagicTypeChanged",
        chartGeoSelectChanged: "chartGeoSelectChanged",
        chartGeoSelected: "chartGeoSelected",
        chartGeoUnselected: "chartGeoUnselected",
        chartAxisAreaSelected: "chartAxisAreaSelected",
        chartBrush: "chartBrush",
        chartBrushEnd: "chartBrushEnd",
        chartBrushSelected: "chartBrushSelected",
        chartGlobalCursorTaken: "chartGlobalCursorTaken",
        chartRendered: "chartRendered",
        chartFinished: "chartFinished"
      },
      exportAs: ["echarts"],
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxEchartsDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "echarts, [echarts]",
      exportAs: "echarts"
    }]
  }], null, {
    options: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "options",
        required: false
      }]
    }],
    theme: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "theme",
        required: false
      }]
    }],
    initOpts: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "initOpts",
        required: false
      }]
    }],
    merge: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "merge",
        required: false
      }]
    }],
    autoResize: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "autoResize",
        required: false
      }]
    }],
    loading: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "loading",
        required: false
      }]
    }],
    loadingType: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "loadingType",
        required: false
      }]
    }],
    loadingOpts: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "loadingOpts",
        required: false
      }]
    }],
    chartInit: [{
      type: Output,
      args: ["chartInit"]
    }],
    optionsError: [{
      type: Output,
      args: ["optionsError"]
    }],
    chartClick: [{
      type: Output,
      args: ["chartClick"]
    }],
    chartDblClick: [{
      type: Output,
      args: ["chartDblClick"]
    }],
    chartMouseDown: [{
      type: Output,
      args: ["chartMouseDown"]
    }],
    chartMouseMove: [{
      type: Output,
      args: ["chartMouseMove"]
    }],
    chartMouseUp: [{
      type: Output,
      args: ["chartMouseUp"]
    }],
    chartMouseOver: [{
      type: Output,
      args: ["chartMouseOver"]
    }],
    chartMouseOut: [{
      type: Output,
      args: ["chartMouseOut"]
    }],
    chartGlobalOut: [{
      type: Output,
      args: ["chartGlobalOut"]
    }],
    chartContextMenu: [{
      type: Output,
      args: ["chartContextMenu"]
    }],
    chartHighlight: [{
      type: Output,
      args: ["chartHighlight"]
    }],
    chartDownplay: [{
      type: Output,
      args: ["chartDownplay"]
    }],
    chartSelectChanged: [{
      type: Output,
      args: ["chartSelectChanged"]
    }],
    chartLegendSelectChanged: [{
      type: Output,
      args: ["chartLegendSelectChanged"]
    }],
    chartLegendSelected: [{
      type: Output,
      args: ["chartLegendSelected"]
    }],
    chartLegendUnselected: [{
      type: Output,
      args: ["chartLegendUnselected"]
    }],
    chartLegendLegendSelectAll: [{
      type: Output,
      args: ["chartLegendLegendSelectAll"]
    }],
    chartLegendLegendInverseSelect: [{
      type: Output,
      args: ["chartLegendLegendInverseSelect"]
    }],
    chartLegendScroll: [{
      type: Output,
      args: ["chartLegendScroll"]
    }],
    chartDataZoom: [{
      type: Output,
      args: ["chartDataZoom"]
    }],
    chartDataRangeSelected: [{
      type: Output,
      args: ["chartDataRangeSelected"]
    }],
    chartGraphRoam: [{
      type: Output,
      args: ["chartGraphRoam"]
    }],
    chartGeoRoam: [{
      type: Output,
      args: ["chartGeoRoam"]
    }],
    chartTreeRoam: [{
      type: Output,
      args: ["chartTreeRoam"]
    }],
    chartTimelineChanged: [{
      type: Output,
      args: ["chartTimelineChanged"]
    }],
    chartTimelinePlayChanged: [{
      type: Output,
      args: ["chartTimelinePlayChanged"]
    }],
    chartRestore: [{
      type: Output,
      args: ["chartRestore"]
    }],
    chartDataViewChanged: [{
      type: Output,
      args: ["chartDataViewChanged"]
    }],
    chartMagicTypeChanged: [{
      type: Output,
      args: ["chartMagicTypeChanged"]
    }],
    chartGeoSelectChanged: [{
      type: Output,
      args: ["chartGeoSelectChanged"]
    }],
    chartGeoSelected: [{
      type: Output,
      args: ["chartGeoSelected"]
    }],
    chartGeoUnselected: [{
      type: Output,
      args: ["chartGeoUnselected"]
    }],
    chartAxisAreaSelected: [{
      type: Output,
      args: ["chartAxisAreaSelected"]
    }],
    chartBrush: [{
      type: Output,
      args: ["chartBrush"]
    }],
    chartBrushEnd: [{
      type: Output,
      args: ["chartBrushEnd"]
    }],
    chartBrushSelected: [{
      type: Output,
      args: ["chartBrushSelected"]
    }],
    chartGlobalCursorTaken: [{
      type: Output,
      args: ["chartGlobalCursorTaken"]
    }],
    chartRendered: [{
      type: Output,
      args: ["chartRendered"]
    }],
    chartFinished: [{
      type: Output,
      args: ["chartFinished"]
    }]
  });
})();
function provideEchartsCore(config) {
  return {
    provide: NGX_ECHARTS_CONFIG,
    useValue: config
  };
}
var NgxEchartsModule = class _NgxEchartsModule {
  static forRoot(config) {
    return {
      ngModule: _NgxEchartsModule,
      providers: [provideEchartsCore(config)]
    };
  }
  static forChild() {
    return {
      ngModule: _NgxEchartsModule
    };
  }
  static {
    this.\u0275fac = function NgxEchartsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxEchartsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgxEchartsModule,
      imports: [NgxEchartsDirective],
      exports: [NgxEchartsDirective]
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxEchartsModule, [{
    type: NgModule,
    args: [{
      imports: [NgxEchartsDirective],
      exports: [NgxEchartsDirective]
    }]
  }], null, null);
})();

// src/app/pages/chart/apex/data.ts
var linewithDataChart = {
  chart: {
    height: 380,
    type: "line",
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  colors: ["#556ee6", "#34c38f"],
  dataLabels: {
    enabled: true
  },
  stroke: {
    width: [3, 3],
    curve: "straight"
  },
  series: [
    {
      name: "High - 2018",
      data: [26, 24, 32, 36, 33, 31, 33]
    },
    {
      name: "Low - 2018",
      data: [14, 11, 16, 12, 17, 13, 12]
    }
  ],
  title: {
    text: "Average High & Low Temperature",
    align: "left"
  },
  grid: {
    row: {
      colors: ["transparent", "transparent"],
      // takes an array which will be repeated on columns
      opacity: 0.2
    },
    borderColor: "#f1f1f1"
  },
  markers: {
    style: "inverted",
    size: 6
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    title: {
      text: "Month"
    }
  },
  yaxis: {
    title: {
      text: "Temperature"
    },
    min: 5,
    max: 40
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
    floating: true,
    offsetY: -25,
    offsetX: -5
  },
  responsive: [{
    breakpoint: 600,
    options: {
      chart: {
        toolbar: {
          show: false
        }
      },
      legend: {
        show: false
      }
    }
  }]
};
var basicColumChart = {
  chart: {
    height: 350,
    type: "bar",
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      endingShape: "rounded",
      columnWidth: "45%"
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
  colors: ["#34c38f", "#556ee6", "#f46a6a"],
  series: [{
    name: "Net Profit",
    data: [46, 57, 59, 54, 62, 58, 64, 60, 66]
  }, {
    name: "Revenue",
    data: [74, 83, 102, 97, 86, 106, 93, 114, 94]
  }, {
    name: "Free Cash Flow",
    data: [37, 42, 38, 26, 47, 50, 54, 55, 43]
  }],
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]
  },
  yaxis: {
    title: {
      text: "$ (thousands)"
    }
  },
  fill: {
    opacity: 1
  },
  grid: {
    borderColor: "#f1f1f1"
  },
  tooltip: {
    y: {
      formatter: (val) => {
        return "$ " + val + " thousands";
      }
    }
  }
};
var dashedLineChart = {
  chart: {
    height: 380,
    type: "line",
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  colors: ["#556ee6", "#f46a6a", "#34c38f"],
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [3, 4, 3],
    curve: "straight",
    dashArray: [0, 8, 5]
  },
  series: [
    {
      name: "Session Duration",
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    },
    {
      name: "Page Views",
      data: [36, 42, 60, 42, 13, 18, 29, 37, 36, 51, 32, 35]
    },
    {
      name: "Total Visits",
      data: [89, 56, 74, 98, 72, 38, 64, 46, 84, 58, 46, 49]
    }
  ],
  title: {
    text: "Page Statistics",
    align: "left"
  },
  markers: {
    size: 0,
    hover: {
      sizeOffset: 6
    }
  },
  xaxis: {
    categories: [
      "01 Jan",
      "02 Jan",
      "03 Jan",
      "04 Jan",
      "05 Jan",
      "06 Jan",
      "07 Jan",
      "08 Jan",
      "09 Jan",
      "10 Jan",
      "11 Jan",
      "12 Jan"
    ]
  },
  tooltip: {
    y: [{
      title: {
        formatter: (val) => {
          return val + " (mins)";
        }
      }
    }, {
      title: {
        formatter: (val) => {
          return val + " per session";
        }
      }
    }, {
      title: {
        formatter: (val) => {
          return val;
        }
      }
    }]
  },
  grid: {
    borderColor: "#f1f1f1"
  }
};
var columnlabelChart = {
  chart: {
    height: 350,
    type: "bar",
    toolbar: {
      show: false
    }
  },
  colors: ["#556ee6"],
  plotOptions: {
    bar: {
      dataLabels: {
        position: "top"
        // top, center, bottom
      }
    }
  },
  dataLabels: {
    enabled: true,
    formatter: (val) => {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: "12px",
      colors: ["#304758"]
    }
  },
  series: [{
    name: "Inflation",
    data: [2.5, 3.2, 5, 10.1, 4.2, 3.8, 3, 2.4, 4, 1.2, 3.5, 0.8]
  }],
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    position: "top",
    labels: {
      offsetY: -18
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: "gradient",
        gradient: {
          colorFrom: "#D8E3F0",
          colorTo: "#BED1E6",
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5
        }
      }
    },
    tooltip: {
      enabled: true,
      offsetY: -35
    }
  },
  fill: {
    gradient: {
      shade: "light",
      type: "horizontal",
      shadeIntensity: 0.25,
      gradientToColors: void 0,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [50, 0, 100, 100]
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false,
      formatter: (val) => {
        return val + "%";
      }
    }
  },
  title: {
    text: "Monthly Inflation in Argentina, 2002",
    floating: true,
    offsetY: 330,
    align: "center",
    style: {
      color: "#444"
    }
  }
};
var barChart = {
  chart: {
    height: 350,
    type: "bar",
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  dataLabels: {
    enabled: false
  },
  series: [{
    data: [380, 430, 450, 475, 550, 584, 780, 1100, 1220, 1365]
  }],
  colors: ["#34c38f"],
  xaxis: {
    // tslint:disable-next-line: max-line-length
    categories: ["South Korea", "Canada", "United Kingdom", "Netherlands", "Italy", "France", "Japan", "United States", "China", "Germany"]
  },
  grid: {
    borderColor: "#f1f1f1"
  }
};
var lineColumAreaChart = {
  chart: {
    height: 350,
    type: "line",
    stacked: false,
    toolbar: {
      show: false
    }
  },
  stroke: {
    width: [0, 2, 4],
    curve: "smooth"
  },
  plotOptions: {
    bar: {
      columnWidth: "50%"
    }
  },
  colors: ["#f46a6a", "#556ee6", "#34c38f"],
  series: [{
    name: "Team A",
    type: "column",
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
  }, {
    name: "Team B",
    type: "area",
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  }, {
    name: "Team C",
    type: "line",
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  }],
  fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: "light",
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100]
    }
  },
  // tslint:disable-next-line: max-line-length
  labels: ["01/01/2003", "02/01/2003", "03/01/2003", "04/01/2003", "05/01/2003", "06/01/2003", "07/01/2003", "08/01/2003", "09/01/2003", "10/01/2003", "11/01/2003"],
  markers: {
    size: 0
  },
  legend: {
    offsetY: 10
  },
  xaxis: {
    type: "datetime"
  },
  yaxis: {
    title: {
      text: "Points"
    }
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter(y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;
      }
    }
  },
  grid: {
    borderColor: "#f1f1f1"
  }
};
var simplePieChart = {
  chart: {
    height: 320,
    type: "pie"
  },
  series: [44, 55, 41, 17, 15],
  labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
  colors: ["#34c38f", "#556ee6", "#f46a6a", "#50a5f1", "#f1b44c"],
  legend: {
    show: true,
    position: "bottom",
    horizontalAlign: "center",
    verticalAlign: "middle",
    floating: false,
    fontSize: "14px",
    offsetX: 0,
    offsetY: -10
  },
  responsive: [{
    breakpoint: 600,
    options: {
      chart: {
        height: 240
      },
      legend: {
        show: false
      }
    }
  }]
};
var splineAreaChart = {
  chart: {
    height: 350,
    type: "area"
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "smooth",
    width: 3
  },
  series: [{
    name: "series1",
    data: [34, 40, 28, 52, 42, 109, 100]
  }, {
    name: "series2",
    data: [32, 60, 34, 46, 34, 52, 41]
  }],
  colors: ["#556ee6", "#34c38f"],
  xaxis: {
    type: "datetime",
    // tslint:disable-next-line: max-line-length
    categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"]
  },
  grid: {
    borderColor: "#f1f1f1"
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm"
    }
  }
};
var donutChart = {
  chart: {
    height: 320,
    type: "donut"
  },
  series: [44, 55, 41, 17, 15],
  legend: {
    show: true,
    position: "bottom",
    horizontalAlign: "center",
    verticalAlign: "middle",
    floating: false,
    fontSize: "14px",
    offsetX: 0,
    offsetY: -10
  },
  labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
  colors: ["#34c38f", "#556ee6", "#f46a6a", "#50a5f1", "#f1b44c"],
  responsive: [{
    breakpoint: 600,
    options: {
      chart: {
        height: 240
      },
      legend: {
        show: false
      }
    }
  }]
};
var basicRadialBarChart = {
  chart: {
    height: 380,
    type: "radialBar"
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: "22px"
        },
        value: {
          fontSize: "16px"
        },
        total: {
          show: true,
          label: "Total",
          formatter: (w) => {
            return 249;
          }
        }
      }
    }
  },
  colors: ["#556ee6", "#34c38f", "#f46a6a", "#f1b44c"],
  series: [44, 55, 67, 83],
  labels: ["Computer", "Tablet", "Laptop", "Mobile"]
};
var dumbbellTimelineCharts = {
  series: [
    {
      data: [
        {
          x: "Operations",
          y: [2800, 4500]
        },
        {
          x: "Customer Success",
          y: [3200, 4100]
        },
        {
          x: "Engineering",
          y: [2950, 7800]
        },
        {
          x: "Marketing",
          y: [3e3, 4600]
        },
        {
          x: "Product",
          y: [3500, 4100]
        },
        {
          x: "Data Science",
          y: [4500, 6500]
        },
        {
          x: "Sales",
          y: [4100, 5600]
        }
      ]
    }
  ],
  chart: {
    height: 390,
    type: "rangeBar",
    zoom: {
      enabled: false
    }
  },
  colors: ["#556ee6", "#34c38f"],
  plotOptions: {
    bar: {
      horizontal: true,
      isDumbbell: true,
      dumbbellColors: ["#556ee6", "#34c38f"]
    }
  },
  title: {
    text: "Paygap Disparity"
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    position: "top",
    horizontalAlign: "left",
    customLegendItems: ["Female", "Male"]
  },
  fill: {
    type: "gradient",
    gradient: {
      gradientToColors: ["#36BDCB"],
      inverseColors: false,
      stops: [0, 100]
    }
  },
  grid: {
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    }
  }
};
var funnelCharts = {
  series: [
    {
      name: "Funnel Series",
      data: [1380, 1100, 990, 880, 740, 548, 330, 200]
    }
  ],
  chart: {
    type: "bar",
    height: 390
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      horizontal: true,
      barHeight: "80%",
      isFunnel: true
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function(val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
    },
    dropShadow: {
      enabled: true
    }
  },
  colors: ["#556ee6"],
  title: {
    text: "Recruitment Funnel",
    align: "middle"
  },
  xaxis: {
    categories: [
      "Sourced",
      "Screened",
      "Assessed",
      "HR Interview",
      "Technical",
      "Verify",
      "Offered",
      "Hired"
    ]
  },
  legend: {
    show: false
  }
};
var dumbbellcolumnCharts = {
  series: [
    {
      data: [
        {
          x: "2008",
          y: [2800, 4500]
        },
        {
          x: "2009",
          y: [3200, 4100]
        },
        {
          x: "2010",
          y: [2950, 7800]
        },
        {
          x: "2011",
          y: [3e3, 4600]
        },
        {
          x: "2012",
          y: [3500, 4100]
        },
        {
          x: "2013",
          y: [4500, 6500]
        },
        {
          x: "2014",
          y: [4100, 5600]
        }
      ]
    }
  ],
  chart: {
    height: 350,
    type: "rangeBar",
    zoom: {
      enabled: false
    }
  },
  colors: ["#556ee6", "#34c38f"],
  plotOptions: {
    bar: {
      isDumbbell: true,
      columnWidth: 3,
      dumbbellColors: ["#556ee6", "#34c38f"]
    }
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    position: "top",
    horizontalAlign: "left",
    customLegendItems: ["Product A", "Product B"]
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      gradientToColors: ["#00E396"],
      inverseColors: true,
      stops: [0, 100]
    }
  },
  grid: {
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    }
  },
  xaxis: {
    tickPlacement: "on"
  }
};
var rangeareaChart = {
  series: [
    {
      name: "New York Temperature",
      data: [
        {
          x: "Jan",
          y: [-2, 4]
        },
        {
          x: "Feb",
          y: [-1, 6]
        },
        {
          x: "Mar",
          y: [3, 10]
        },
        {
          x: "Apr",
          y: [8, 16]
        },
        {
          x: "May",
          y: [13, 22]
        },
        {
          x: "Jun",
          y: [18, 26]
        },
        {
          x: "Jul",
          y: [21, 29]
        },
        {
          x: "Aug",
          y: [21, 28]
        },
        {
          x: "Sep",
          y: [17, 24]
        },
        {
          x: "Oct",
          y: [11, 18]
        },
        {
          x: "Nov",
          y: [6, 12]
        },
        {
          x: "Dec",
          y: [1, 7]
        }
      ]
    }
  ],
  chart: {
    height: 350,
    type: "rangeArea"
  },
  colors: ["#556ee6"],
  stroke: {
    curve: "straight"
  },
  title: {
    text: "New York Temperature (all year round)"
  },
  markers: {
    hover: {
      sizeOffset: 5
    }
  },
  dataLabels: {
    enabled: false
  },
  yaxis: {
    labels: {
      formatter: function(val) {
        return val + "\xB0C";
      }
    }
  }
};

// src/app/pages/chart/apex/apex.component.ts
var ApexComponent = class _ApexComponent {
  constructor() {
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Charts" }, { label: "Apex charts", active: true }];
    this._fetchData();
  }
  /**
   * Fetches the chart data
   */
  _fetchData() {
    this.linewithDataChart = linewithDataChart;
    this.basicColumChart = basicColumChart;
    this.columnlabelChart = columnlabelChart;
    this.lineColumAreaChart = lineColumAreaChart;
    this.basicRadialBarChart = basicRadialBarChart;
    this.simplePieChart = simplePieChart;
    this.donutChart = donutChart;
    this.barChart = barChart;
    this.splineAreaChart = splineAreaChart;
    this.dashedLineChart = dashedLineChart;
    this.dumbbellTimelineCharts = dumbbellTimelineCharts;
    this.funnelCharts = funnelCharts;
    this.dumbbellcolumnCharts = dumbbellcolumnCharts;
    this.rangeareaChart = rangeareaChart;
  }
  static {
    this.\u0275fac = function ApexComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ApexComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApexComponent, selectors: [["app-apex"]], standalone: false, decls: 97, vars: 126, consts: [[1, "container-fluid"], ["title", "Apex charts", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-6"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "colors", "stroke", "dataLabels", "title", "responsive", "legend", "xaxis", "yaxis", "markers"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "dataLabels", "stroke", "colors", "xaxis", "grid", "tooltip", "plotOptions", "fill", "markers", "legend", "yaxis"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "dataLabels", "stroke", "colors", "xaxis", "grid", "tooltip"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "plotOptions", "yaxis", "grid", "tooltip", "stroke", "dataLabels", "xaxis", "colors", "fill"], [1, "col-xl-6"], ["id", "dumbbell_column_charts", "data-colors", '["--bs-primary", "--bs-success"]', "dir", "ltr", 1, "apex-charts"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "plotOptions", "legend", "grid", "xaxis", "colors", "fill"], ["id", "range_area_chart", "data-colors", '["--bs-primary"]', "dir", "ltr", 1, "apex-charts"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "markers", "yaxis", "title", "stroke", "dataLabels", "colors"], ["id", "dumbbell_timeline_charts", "dir", "ltr", 1, "apex-charts"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "plotOptions", "title", "grid", "legend", "colors", "fill"], ["id", "funnel_charts", "dir", "ltr", 1, "apex-charts"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "plotOptions", "title", "legend", "dataLabels", "xaxis", "colors"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "plotOptions", "yaxis", "title", "stroke", "dataLabels", "xaxis", "legend", "colors", "fill"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "plotOptions", "dataLabels", "xaxis", "colors", "grid"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "tooltip", "yaxis", "legend", "plotOptions", "grid", "stroke", "xaxis", "colors", "fill", "labels", "markers"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "plotOptions", "labels", "colors"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "labels", "legend", "colors", "responsive"]], template: function ApexComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
        \u0275\u0275text(7, "Line with Data Labels");
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "apx-chart", 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 3)(10, "div", 4)(11, "div", 5)(12, "h4", 6);
        \u0275\u0275text(13, "Dashed Line");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "apx-chart", 8);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(15, "div", 2)(16, "div", 3)(17, "div", 4)(18, "div", 5)(19, "h4", 6);
        \u0275\u0275text(20, "Spline Area");
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "apx-chart", 9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 3)(23, "div", 4)(24, "div", 5)(25, "h4", 6);
        \u0275\u0275text(26, "Column Charts");
        \u0275\u0275elementEnd();
        \u0275\u0275element(27, "apx-chart", 10);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(28, "div", 2)(29, "div", 11)(30, "div", 4)(31, "div", 5)(32, "h4", 6);
        \u0275\u0275text(33, "Dumbbell Column Chart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 12);
        \u0275\u0275element(35, "apx-chart", 13);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(36, "div", 11)(37, "div", 4)(38, "div", 5)(39, "h4", 6);
        \u0275\u0275text(40, "Range Area Charts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 14);
        \u0275\u0275element(42, "apx-chart", 15);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(43, "div", 2)(44, "div", 11)(45, "div", 4)(46, "div", 5)(47, "h4", 6);
        \u0275\u0275text(48, "Dumbbell Timeline Chart (Horizontal)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "div", 16);
        \u0275\u0275element(50, "apx-chart", 17);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(51, "div", 11)(52, "div", 4)(53, "div", 5)(54, "h4", 6);
        \u0275\u0275text(55, "Funnel Charts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 18);
        \u0275\u0275element(57, "apx-chart", 19);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(58, "div", 2)(59, "div", 3)(60, "div", 4)(61, "div", 5)(62, "h4", 6);
        \u0275\u0275text(63, "Column with Data Labels");
        \u0275\u0275elementEnd();
        \u0275\u0275element(64, "apx-chart", 20);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(65, "div", 3)(66, "div", 4)(67, "div", 5)(68, "h4", 6);
        \u0275\u0275text(69, "Bar Chart");
        \u0275\u0275elementEnd();
        \u0275\u0275element(70, "apx-chart", 21);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(71, "div", 2)(72, "div", 3)(73, "div", 4)(74, "div", 5)(75, "h4", 6);
        \u0275\u0275text(76, "Line, Column & Area Chart");
        \u0275\u0275elementEnd();
        \u0275\u0275element(77, "apx-chart", 22);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(78, "div", 3)(79, "div", 4)(80, "div", 5)(81, "h4", 6);
        \u0275\u0275text(82, "Radial Chart");
        \u0275\u0275elementEnd();
        \u0275\u0275element(83, "apx-chart", 23);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(84, "div", 2)(85, "div", 3)(86, "div", 4)(87, "div", 5)(88, "h4", 6);
        \u0275\u0275text(89, "Pie Chart");
        \u0275\u0275elementEnd();
        \u0275\u0275element(90, "apx-chart", 24);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(91, "div", 3)(92, "div", 4)(93, "div", 5)(94, "h4", 6);
        \u0275\u0275text(95, "Donut Chart");
        \u0275\u0275elementEnd();
        \u0275\u0275element(96, "apx-chart", 24);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(7);
        \u0275\u0275property("series", ctx.linewithDataChart.series)("chart", ctx.linewithDataChart.chart)("colors", ctx.linewithDataChart.colors)("stroke", ctx.linewithDataChart.stroke)("dataLabels", ctx.linewithDataChart.dataLabels)("title", ctx.linewithDataChart.title)("responsive", ctx.linewithDataChart.responsive)("legend", ctx.linewithDataChart.legend)("xaxis", ctx.linewithDataChart.xaxis)("yaxis", ctx.linewithDataChart.yaxis)("stroke", ctx.linewithDataChart.stroke)("markers", ctx.linewithDataChart.markers);
        \u0275\u0275advance(6);
        \u0275\u0275property("series", ctx.dashedLineChart.series)("chart", ctx.dashedLineChart.chart)("dataLabels", ctx.dashedLineChart.dataLabels)("stroke", ctx.dashedLineChart.stroke)("colors", ctx.dashedLineChart.colors)("xaxis", ctx.dashedLineChart.xaxis)("grid", ctx.dashedLineChart.grid)("tooltip", ctx.dashedLineChart.tooltip)("plotOptions", ctx.dashedLineChart.plotOptions)("fill", ctx.dashedLineChart.fill)("markers", ctx.dashedLineChart.markers)("legend", ctx.dashedLineChart.legend)("yaxis", ctx.dashedLineChart.yaxis)("tooltip", ctx.dashedLineChart.tooltip);
        \u0275\u0275advance(7);
        \u0275\u0275property("series", ctx.splineAreaChart.series)("chart", ctx.splineAreaChart.chart)("dataLabels", ctx.splineAreaChart.dataLabels)("stroke", ctx.splineAreaChart.stroke)("colors", ctx.splineAreaChart.colors)("xaxis", ctx.splineAreaChart.xaxis)("grid", ctx.splineAreaChart.grid)("tooltip", ctx.splineAreaChart.tooltip);
        \u0275\u0275advance(6);
        \u0275\u0275property("series", ctx.basicColumChart.series)("chart", ctx.basicColumChart.chart)("plotOptions", ctx.basicColumChart.plotOptions)("yaxis", ctx.basicColumChart.yaxis)("grid", ctx.basicColumChart.grid)("tooltip", ctx.basicColumChart.tooltip)("stroke", ctx.basicColumChart.stroke)("dataLabels", ctx.basicColumChart.dataLabels)("xaxis", ctx.basicColumChart.xaxis)("colors", ctx.basicColumChart.colors)("fill", ctx.basicColumChart.fill);
        \u0275\u0275advance(8);
        \u0275\u0275property("series", ctx.dumbbellcolumnCharts.series)("chart", ctx.dumbbellcolumnCharts.chart)("plotOptions", ctx.dumbbellcolumnCharts.plotOptions)("legend", ctx.dumbbellcolumnCharts.legend)("grid", ctx.dumbbellcolumnCharts.grid)("xaxis", ctx.dumbbellcolumnCharts.xaxis)("colors", ctx.dumbbellcolumnCharts.colors)("fill", ctx.dumbbellcolumnCharts.fill);
        \u0275\u0275advance(7);
        \u0275\u0275property("series", ctx.rangeareaChart.series)("chart", ctx.rangeareaChart.chart)("markers", ctx.rangeareaChart.markers)("yaxis", ctx.rangeareaChart.yaxis)("title", ctx.rangeareaChart.title)("stroke", ctx.rangeareaChart.stroke)("dataLabels", ctx.rangeareaChart.dataLabels)("colors", ctx.rangeareaChart.colors);
        \u0275\u0275advance(8);
        \u0275\u0275property("series", ctx.dumbbellTimelineCharts.series)("chart", ctx.dumbbellTimelineCharts.chart)("plotOptions", ctx.dumbbellTimelineCharts.plotOptions)("title", ctx.dumbbellTimelineCharts.title)("grid", ctx.dumbbellTimelineCharts.grid)("legend", ctx.dumbbellTimelineCharts.legend)("colors", ctx.dumbbellTimelineCharts.colors)("fill", ctx.dumbbellTimelineCharts.fill);
        \u0275\u0275advance(7);
        \u0275\u0275property("series", ctx.funnelCharts.series)("chart", ctx.funnelCharts.chart)("plotOptions", ctx.funnelCharts.plotOptions)("title", ctx.funnelCharts.title)("legend", ctx.funnelCharts.legend)("dataLabels", ctx.funnelCharts.dataLabels)("xaxis", ctx.funnelCharts.xaxis)("colors", ctx.funnelCharts.colors);
        \u0275\u0275advance(7);
        \u0275\u0275property("series", ctx.columnlabelChart.series)("chart", ctx.columnlabelChart.chart)("plotOptions", ctx.columnlabelChart.plotOptions)("yaxis", ctx.columnlabelChart.yaxis)("title", ctx.columnlabelChart.title)("stroke", ctx.columnlabelChart.stroke)("dataLabels", ctx.columnlabelChart.dataLabels)("xaxis", ctx.columnlabelChart.xaxis)("legend", ctx.columnlabelChart.legend)("colors", ctx.columnlabelChart.colors)("fill", ctx.columnlabelChart.fill);
        \u0275\u0275advance(6);
        \u0275\u0275property("series", ctx.barChart.series)("chart", ctx.barChart.chart)("plotOptions", ctx.barChart.plotOptions)("dataLabels", ctx.barChart.dataLabels)("xaxis", ctx.barChart.xaxis)("colors", ctx.barChart.colors)("grid", ctx.barChart.grid);
        \u0275\u0275advance(7);
        \u0275\u0275property("series", ctx.lineColumAreaChart.series)("chart", ctx.lineColumAreaChart.chart)("tooltip", ctx.lineColumAreaChart.tooltip)("yaxis", ctx.lineColumAreaChart.yaxis)("legend", ctx.lineColumAreaChart.legend)("plotOptions", ctx.lineColumAreaChart.plotOptions)("grid", ctx.lineColumAreaChart.grid)("stroke", ctx.lineColumAreaChart.stroke)("xaxis", ctx.lineColumAreaChart.xaxis)("colors", ctx.lineColumAreaChart.colors)("fill", ctx.lineColumAreaChart.fill)("labels", ctx.lineColumAreaChart.labels)("markers", ctx.lineColumAreaChart.markers);
        \u0275\u0275advance(6);
        \u0275\u0275property("series", ctx.basicRadialBarChart.series)("chart", ctx.basicRadialBarChart.chart)("plotOptions", ctx.basicRadialBarChart.plotOptions)("labels", ctx.basicRadialBarChart.labels)("colors", ctx.basicRadialBarChart.colors);
        \u0275\u0275advance(7);
        \u0275\u0275property("series", ctx.simplePieChart.series)("chart", ctx.simplePieChart.chart)("labels", ctx.simplePieChart.labels)("legend", ctx.simplePieChart.legend)("colors", ctx.simplePieChart.colors)("responsive", ctx.simplePieChart.responsive);
        \u0275\u0275advance(6);
        \u0275\u0275property("series", ctx.donutChart.series)("chart", ctx.donutChart.chart)("labels", ctx.donutChart.labels)("legend", ctx.donutChart.legend)("colors", ctx.donutChart.colors)("responsive", ctx.donutChart.responsive);
      }
    }, dependencies: [PagetitleComponent, ChartComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApexComponent, [{
    type: Component,
    args: [{ selector: "app-apex", standalone: false, template: `<div class="container-fluid">\r
\r
  <!-- start page title -->\r
  <app-page-title title="Apex charts" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
  <!-- end page title -->\r
\r
  <div class="row">\r
    <div class="col-lg-6">\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title mb-4">Line with Data Labels</h4>\r
          <apx-chart class="apex-charts" dir="ltr" [series]="linewithDataChart.series" [chart]="linewithDataChart.chart"\r
            [colors]="linewithDataChart.colors" [stroke]="linewithDataChart.stroke"\r
            [dataLabels]="linewithDataChart.dataLabels" [title]="linewithDataChart.title"\r
            [responsive]="linewithDataChart.responsive" [legend]="linewithDataChart.legend"\r
            [xaxis]="linewithDataChart.xaxis" [yaxis]="linewithDataChart.yaxis" [stroke]="linewithDataChart.stroke"\r
            [markers]="linewithDataChart.markers">\r
          </apx-chart>\r
        </div>\r
      </div>\r
      <!--end card-->\r
    </div>\r
\r
    <div class="col-lg-6">\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title mb-4">Dashed Line</h4>\r
          <apx-chart class="apex-charts" dir="ltr" [series]="dashedLineChart.series" [chart]="dashedLineChart.chart"\r
            [dataLabels]="dashedLineChart.dataLabels" [stroke]="dashedLineChart.stroke"\r
            [colors]="dashedLineChart.colors" [xaxis]="dashedLineChart.xaxis" [grid]="dashedLineChart.grid"\r
            [tooltip]="dashedLineChart.tooltip" [plotOptions]="dashedLineChart.plotOptions"\r
            [fill]="dashedLineChart.fill" [markers]="dashedLineChart.markers" [legend]="dashedLineChart.legend"\r
            [yaxis]="dashedLineChart.yaxis" [tooltip]="dashedLineChart.tooltip"></apx-chart>\r
        </div>\r
      </div>\r
      <!--end card-->\r
    </div>\r
  </div>\r
  <!-- end row -->\r
\r
  <div class="row">\r
    <div class="col-lg-6">\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title mb-4">Spline Area</h4>\r
          <apx-chart class="apex-charts" dir="ltr" [series]="splineAreaChart.series" [chart]="splineAreaChart.chart"\r
            [dataLabels]="splineAreaChart.dataLabels" [stroke]="splineAreaChart.stroke"\r
            [colors]="splineAreaChart.colors" [xaxis]="splineAreaChart.xaxis" [grid]="splineAreaChart.grid"\r
            [tooltip]="splineAreaChart.tooltip"></apx-chart>\r
        </div>\r
      </div>\r
      <!--end card-->\r
    </div>\r
\r
    <div class="col-lg-6">\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title mb-4">Column Charts</h4>\r
\r
          <apx-chart class="apex-charts" dir="ltr" [series]="basicColumChart.series" [chart]="basicColumChart.chart"\r
            [plotOptions]="basicColumChart.plotOptions" [yaxis]="basicColumChart.yaxis" [grid]="basicColumChart.grid"\r
            [tooltip]="basicColumChart.tooltip" [stroke]="basicColumChart.stroke"\r
            [dataLabels]="basicColumChart.dataLabels" [xaxis]="basicColumChart.xaxis" [colors]="basicColumChart.colors"\r
            [fill]="basicColumChart.fill">\r
          </apx-chart>\r
        </div>\r
      </div>\r
      <!--end card-->\r
    </div>\r
  </div>\r
  <!-- end row -->\r
\r
  <div class="row">\r
    <div class="col-xl-6">\r
        <div class="card">\r
            <div class="card-body">\r
                <h4 class="card-title mb-4">Dumbbell Column Chart</h4>\r
\r
                <div id="dumbbell_column_charts" data-colors='["--bs-primary", "--bs-success"]' class="apex-charts" dir="ltr">\r
                  <apx-chart class="apex-charts" dir="ltr" [series]="dumbbellcolumnCharts.series" [chart]="dumbbellcolumnCharts.chart"\r
                  [plotOptions]="dumbbellcolumnCharts.plotOptions" [legend]="dumbbellcolumnCharts.legend"\r
                  [grid]="dumbbellcolumnCharts.grid" [xaxis]="dumbbellcolumnCharts.xaxis" [colors]="dumbbellcolumnCharts.colors"\r
                  [fill]="dumbbellcolumnCharts.fill"></apx-chart>\r
                </div>\r
            </div>\r
        </div><!--end card-->\r
    </div>\r
\r
    <div class="col-xl-6">\r
        <div class="card">\r
            <div class="card-body">\r
                <h4 class="card-title mb-4">Range Area Charts</h4>\r
\r
                <div id="range_area_chart" data-colors='["--bs-primary"]' class="apex-charts" dir="ltr">\r
                  <apx-chart class="apex-charts" dir="ltr" [series]="rangeareaChart.series" [chart]="rangeareaChart.chart"\r
                  [markers]="rangeareaChart.markers" [yaxis]="rangeareaChart.yaxis"\r
                  [title]="rangeareaChart.title" [stroke]="rangeareaChart.stroke"\r
                  [dataLabels]="rangeareaChart.dataLabels" [colors]="rangeareaChart.colors"></apx-chart>\r
                </div>\r
            </div>\r
        </div><!--end card-->\r
    </div>\r
</div>\r
<!-- end row -->\r
\r
<div class="row">\r
    <div class="col-xl-6">\r
        <div class="card">\r
            <div class="card-body">\r
                <h4 class="card-title mb-4">Dumbbell Timeline Chart (Horizontal)</h4>\r
\r
                <div id="dumbbell_timeline_charts" class="apex-charts" dir="ltr">\r
                  <apx-chart class="apex-charts" dir="ltr" [series]="dumbbellTimelineCharts.series" [chart]="dumbbellTimelineCharts.chart"\r
                  [plotOptions]="dumbbellTimelineCharts.plotOptions" [title]="dumbbellTimelineCharts.title" [grid]="dumbbellTimelineCharts.grid"\r
                  [legend]="dumbbellTimelineCharts.legend" [colors]="dumbbellTimelineCharts.colors"\r
                  [fill]="dumbbellTimelineCharts.fill"></apx-chart>\r
                </div>\r
            </div>\r
        </div><!--end card-->\r
    </div>\r
\r
    <div class="col-xl-6">\r
        <div class="card">\r
            <div class="card-body">\r
                <h4 class="card-title mb-4">Funnel Charts</h4>\r
\r
                <div id="funnel_charts" class="apex-charts" dir="ltr">\r
                  <apx-chart class="apex-charts" dir="ltr" [series]="funnelCharts.series" [chart]="funnelCharts.chart"\r
                  [plotOptions]="funnelCharts.plotOptions" [title]="funnelCharts.title" [legend]="funnelCharts.legend"\r
                  [dataLabels]="funnelCharts.dataLabels" [xaxis]="funnelCharts.xaxis" [colors]="funnelCharts.colors"></apx-chart>\r
                </div>\r
            </div>\r
        </div><!--end card-->\r
    </div>\r
</div>\r
<!-- end row -->\r
\r
  <div class="row">\r
    <div class="col-lg-6">\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title mb-4">Column with Data Labels</h4>\r
          <!-- Column Chart with Datalabels -->\r
          <apx-chart class="apex-charts" dir="ltr" [series]="columnlabelChart.series" [chart]="columnlabelChart.chart"\r
            [plotOptions]="columnlabelChart.plotOptions" [yaxis]="columnlabelChart.yaxis"\r
            [title]="columnlabelChart.title" [stroke]="columnlabelChart.stroke"\r
            [dataLabels]="columnlabelChart.dataLabels" [xaxis]="columnlabelChart.xaxis"\r
            [legend]="columnlabelChart.legend" [colors]="columnlabelChart.colors" [fill]="columnlabelChart.fill">\r
          </apx-chart>\r
        </div>\r
      </div>\r
      <!--end card-->\r
    </div>\r
    <div class="col-lg-6">\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title mb-4">Bar Chart</h4>\r
          <apx-chart class="apex-charts" dir="ltr" [series]="barChart.series" [chart]="barChart.chart"\r
            [plotOptions]="barChart.plotOptions" [dataLabels]="barChart.dataLabels" [xaxis]="barChart.xaxis"\r
            [colors]="barChart.colors" [grid]="barChart.grid"></apx-chart>\r
        </div>\r
      </div>\r
      <!--end card-->\r
    </div>\r
  </div>\r
  <!-- end row -->\r
\r
  <div class="row">\r
    <div class="col-lg-6">\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title mb-4">Line, Column & Area Chart</h4>\r
\r
          <!-- Line, column & Area chart-->\r
          <apx-chart class="apex-charts" dir="ltr" [series]="lineColumAreaChart.series"\r
            [chart]="lineColumAreaChart.chart" [tooltip]="lineColumAreaChart.tooltip" [yaxis]="lineColumAreaChart.yaxis"\r
            [legend]="lineColumAreaChart.legend" [plotOptions]="lineColumAreaChart.plotOptions"\r
            [grid]="lineColumAreaChart.grid" [stroke]="lineColumAreaChart.stroke" [xaxis]="lineColumAreaChart.xaxis"\r
            [colors]="lineColumAreaChart.colors" [fill]="lineColumAreaChart.fill" [labels]="lineColumAreaChart.labels"\r
            [markers]="lineColumAreaChart.markers">\r
          </apx-chart>\r
        </div>\r
      </div>\r
      <!--end card-->\r
    </div>\r
    <div class="col-lg-6">\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title mb-4">Radial Chart</h4>\r
\r
          <apx-chart class="apex-charts" dir="ltr" [series]="basicRadialBarChart.series"\r
            [chart]="basicRadialBarChart.chart" [plotOptions]="basicRadialBarChart.plotOptions"\r
            [labels]="basicRadialBarChart.labels" [colors]="basicRadialBarChart.colors">\r
          </apx-chart>\r
        </div>\r
      </div>\r
      <!--end card-->\r
    </div>\r
  </div>\r
  <!-- end row -->\r
\r
  <div class="row">\r
    <div class="col-lg-6">\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title mb-4">Pie Chart</h4>\r
          <apx-chart class="apex-charts" dir="ltr" [series]="simplePieChart.series" [chart]="simplePieChart.chart"\r
            [labels]="simplePieChart.labels" [legend]="simplePieChart.legend" [colors]="simplePieChart.colors"\r
            [responsive]="simplePieChart.responsive">\r
          </apx-chart>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="col-lg-6">\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title mb-4">Donut Chart</h4>\r
          <apx-chart class="apex-charts" dir="ltr" [series]="donutChart.series" [chart]="donutChart.chart"\r
            [labels]="donutChart.labels" [legend]="donutChart.legend" [colors]="donutChart.colors"\r
            [responsive]="donutChart.responsive">\r
          </apx-chart>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
  <!-- end row -->\r
\r
</div> <!-- container-fluid -->\r
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApexComponent, { className: "ApexComponent", filePath: "src/app/pages/chart/apex/apex.component.ts", lineNumber: 20 });
})();

// src/app/pages/chart/chartjs/chartjs.component.ts
Chart.register(CategoryScale, LinearScale, BarElement, plugin_title, plugin_tooltip, plugin_legend, LineController, PointElement, LineElement, BarController, DoughnutController, ArcElement, PolarAreaController, RadialLinearScale, PieController, RadarController);
var ChartjsComponent = class _ChartjsComponent {
  constructor() {
    this.lineAreaChart = {
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October"
        ],
        datasets: [
          {
            label: "Sales Analytics",
            fill: true,
            tension: 0.5,
            backgroundColor: "rgba(85, 110, 230, 0.2)",
            borderColor: "#556ee6",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: "miter",
            pointBorderColor: "#556ee6",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#556ee6",
            pointHoverBorderColor: "#fff",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40, 55, 30, 80]
          },
          {
            label: "Monthly Earnings",
            fill: true,
            tension: 0.5,
            backgroundColor: "rgba(235, 239, 242, 0.2)",
            borderColor: "#ebeff2",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: "miter",
            pointBorderColor: "#ebeff2",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#ebeff2",
            pointHoverBorderColor: "#eef0f2",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [80, 23, 56, 65, 23, 35, 85, 25, 92, 36]
          }
        ]
      },
      options: {
        color: "#8791af",
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              color: "rgba(166, 176, 207, 0.1)"
            }
          },
          y: {
            ticks: {
              //   max: 100,
              //   min: 20,
              stepSize: 10
            },
            grid: {
              color: "rgba(166, 176, 207, 0.1)"
            }
          }
        }
      }
    };
    this.barChart = {
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Sales Analytics",
            backgroundColor: "rgba(52, 195, 143, 0.8)",
            borderColor: "rgba(52, 195, 143, 0.2)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(52, 195, 143, 0.9)",
            hoverBorderColor: "rgba(52, 195, 143, 0.9)",
            data: [65, 59, 81, 45, 56, 80, 50, 20],
            barThickness: 40
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              color: "rgba(166, 176, 207, 0.1)"
            }
          },
          y: {
            grid: {
              color: "rgba(166, 176, 207, 0.1)"
            }
          }
        }
      }
    };
    this.pieChart = {
      data: {
        labels: ["Desktops", "Tablets"],
        datasets: [
          {
            data: [300, 180],
            backgroundColor: ["#34c38f", "#ebeff2"],
            hoverBackgroundColor: ["#34c38f", "#ebeff2"],
            hoverBorderColor: "#fff"
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top"
          }
        }
      }
    };
    this.donutChart = {
      data: {
        labels: ["Desktops", "Tablets"],
        datasets: [
          {
            data: [300, 210],
            backgroundColor: ["#556ee6", "#ebeff2"],
            hoverBackgroundColor: ["#556ee6", "#ebeff2"],
            hoverBorderColor: "#fff"
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top"
          }
        }
      }
    };
    this.radarChart = {
      data: {
        labels: [
          "Eating",
          "Drinking",
          "Sleeping",
          "Designing",
          "Coding",
          "Cycling",
          "Running"
        ],
        datasets: [
          {
            label: "Desktops",
            backgroundColor: "rgba(52, 195, 143, 0.2)",
            borderColor: "#34c38f",
            pointBackgroundColor: "#34c38f",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#f46a6a",
            pointHoverBorderColor: "#34c38f",
            data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
            label: "Tablets",
            backgroundColor: "rgba(85, 110, 230, 0.2)",
            borderColor: "#556ee6",
            pointBackgroundColor: "#556ee6",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#556ee6",
            data: [28, 48, 40, 19, 96, 27, 100]
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top"
          }
        }
      }
    };
    this.polarChart = {
      data: {
        labels: ["Series 1", "Series 2", "Series 3", "Series 4"],
        datasets: [
          {
            data: [11, 16, 7, 18],
            backgroundColor: ["#f46a6a", "#34c38f", "#f1b44c", "#556ee6"],
            label: "My dataset",
            hoverBorderColor: "#fff"
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top"
          }
        }
      }
    };
  }
  static {
    this.\u0275fac = function ChartjsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChartjsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChartjsComponent, selectors: [["app-chartjs"]], standalone: false, decls: 143, vars: 19, consts: [[1, "container-fluid"], ["title", "Chartjs chart", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-6"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [1, "row", "text-center"], [1, "col-4"], [1, "mb-0"], [1, "text-muted", "text-truncate"], [1, "chartjs-chart"], ["height", "300", "baseChart", "", 1, "chartjs-chart", 3, "data", "options", "type"], ["baseChart", "", "height", "300", 1, "chartjs-chart", 3, "data", "type", "options"], ["baseChart", "", 1, "chartjs-chart", 3, "data", "type", "options"], [1, ""], ["baseChart", "", "height", "300", 1, "chartjs-chart", 3, "type", "data", "options"]], template: function ChartjsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
        \u0275\u0275text(7, "Line Chart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "h5", 9);
        \u0275\u0275text(11, "86541");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p", 10);
        \u0275\u0275text(13, "Activated");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 8)(15, "h5", 9);
        \u0275\u0275text(16, "2541");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p", 10);
        \u0275\u0275text(18, "Pending");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 8)(20, "h5", 9);
        \u0275\u0275text(21, "102030");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "p", 10);
        \u0275\u0275text(23, "Deactivated");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "div", 11);
        \u0275\u0275element(25, "canvas", 12);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(26, "div", 3)(27, "div", 4)(28, "div", 5)(29, "h4", 6);
        \u0275\u0275text(30, "Bar Chart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 7)(32, "div", 8)(33, "h5", 9);
        \u0275\u0275text(34, "2541");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "p", 10);
        \u0275\u0275text(36, "Activated");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 8)(38, "h5", 9);
        \u0275\u0275text(39, "84845");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "p", 10);
        \u0275\u0275text(41, "Pending");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 8)(43, "h5", 9);
        \u0275\u0275text(44, "12001");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "p", 10);
        \u0275\u0275text(46, "Deactivated");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "div", 11);
        \u0275\u0275element(48, "canvas", 13);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(49, "div", 2)(50, "div", 3)(51, "div", 4)(52, "div", 5)(53, "h4", 6);
        \u0275\u0275text(54, "Pie Chart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 7)(56, "div", 8)(57, "h5", 9);
        \u0275\u0275text(58, "2536");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "p", 10);
        \u0275\u0275text(60, "Activated");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "div", 8)(62, "h5", 9);
        \u0275\u0275text(63, "69421");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "p", 10);
        \u0275\u0275text(65, "Pending");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "div", 8)(67, "h5", 9);
        \u0275\u0275text(68, "89854");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "p", 10);
        \u0275\u0275text(70, "Deactivated");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(71, "div", 11);
        \u0275\u0275element(72, "canvas", 14);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(73, "div", 3)(74, "div", 4)(75, "div", 5)(76, "h4", 6);
        \u0275\u0275text(77, "Donut Chart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "div", 7)(79, "div", 8)(80, "h5", 9);
        \u0275\u0275text(81, "9595");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "p", 10);
        \u0275\u0275text(83, "Activated");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(84, "div", 8)(85, "h5", 9);
        \u0275\u0275text(86, "36524");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "p", 10);
        \u0275\u0275text(88, "Pending");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "div", 8)(90, "h5", 9);
        \u0275\u0275text(91, "62541");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "p", 10);
        \u0275\u0275text(93, "Deactivated");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(94, "div", 15);
        \u0275\u0275element(95, "canvas", 14);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(96, "div", 2)(97, "div", 3)(98, "div", 4)(99, "div", 5)(100, "h4", 6);
        \u0275\u0275text(101, "Polar Chart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "div", 7)(103, "div", 8)(104, "h5", 9);
        \u0275\u0275text(105, "4852");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "p", 10);
        \u0275\u0275text(107, "Activated");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(108, "div", 8)(109, "h5", 9);
        \u0275\u0275text(110, "3652");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "p", 10);
        \u0275\u0275text(112, "Pending");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(113, "div", 8)(114, "h5", 9);
        \u0275\u0275text(115, "85412");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "p", 10);
        \u0275\u0275text(117, "Deactivated");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(118, "div", 11);
        \u0275\u0275element(119, "canvas", 16);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(120, "div", 3)(121, "div", 4)(122, "div", 5)(123, "h4", 6);
        \u0275\u0275text(124, "Radar Chart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "div", 7)(126, "div", 8)(127, "h5", 9);
        \u0275\u0275text(128, "694");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "p", 10);
        \u0275\u0275text(130, "Activated");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(131, "div", 8)(132, "h5", 9);
        \u0275\u0275text(133, "55210");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "p", 10);
        \u0275\u0275text(135, "Pending");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(136, "div", 8)(137, "h5", 9);
        \u0275\u0275text(138, "489498");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "p", 10);
        \u0275\u0275text(140, "Deactivated");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(141, "div", 11);
        \u0275\u0275element(142, "canvas", 14);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(24);
        \u0275\u0275property("data", ctx.lineAreaChart.data)("options", ctx.lineAreaChart.options)("type", "line");
        \u0275\u0275advance(23);
        \u0275\u0275property("data", ctx.barChart.data)("type", "bar")("options", ctx.barChart.options);
        \u0275\u0275advance(24);
        \u0275\u0275property("data", ctx.pieChart.data)("type", "pie")("options", ctx.pieChart.options);
        \u0275\u0275advance(23);
        \u0275\u0275property("data", ctx.donutChart.data)("type", "doughnut")("options", ctx.donutChart.options);
        \u0275\u0275advance(24);
        \u0275\u0275property("type", "polarArea")("data", ctx.polarChart.data)("options", ctx.polarChart.options);
        \u0275\u0275advance(23);
        \u0275\u0275property("data", ctx.radarChart.data)("type", "radar")("options", ctx.radarChart.options);
      }
    }, dependencies: [PagetitleComponent, BaseChartDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartjsComponent, [{
    type: Component,
    args: [{ selector: "app-chartjs", standalone: false, template: `<div class="container-fluid">\r
\r
  <!-- start page title -->\r
  <app-page-title title="Chartjs chart" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r
  <!-- end page title -->\r
\r
  <div class="row">\r
    <div class="col-lg-6">\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title mb-4">Line Chart</h4>\r
          <div class="row text-center">\r
            <div class="col-4">\r
              <h5 class="mb-0">86541</h5>\r
              <p class="text-muted text-truncate">Activated</p>\r
            </div>\r
            <div class="col-4">\r
              <h5 class="mb-0">2541</h5>\r
              <p class="text-muted text-truncate">Pending</p>\r
            </div>\r
            <div class="col-4">\r
              <h5 class="mb-0">102030</h5>\r
              <p class="text-muted text-truncate">Deactivated</p>\r
            </div>\r
          </div>\r
          <div class="chartjs-chart">\r
            <!-- Line Chart -->\r
            <canvas class="chartjs-chart" height="300" baseChart [data]="lineAreaChart.data" [options]="lineAreaChart.options" [type]="'line'"> </canvas>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="col-lg-6">\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title mb-4">Bar Chart</h4>\r
          <div class="row text-center">\r
            <div class="col-4">\r
              <h5 class="mb-0">2541</h5>\r
              <p class="text-muted text-truncate">Activated</p>\r
            </div>\r
            <div class="col-4">\r
              <h5 class="mb-0">84845</h5>\r
              <p class="text-muted text-truncate">Pending</p>\r
            </div>\r
            <div class="col-4">\r
              <h5 class="mb-0">12001</h5>\r
              <p class="text-muted text-truncate">Deactivated</p>\r
            </div>\r
          </div>\r
          <div class="chartjs-chart">\r
            <!-- Bar Chart -->\r
            <canvas class="chartjs-chart" baseChart [data]="barChart.data" [type]="'bar'" [options]="barChart.options" height="300">\r
            </canvas>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="row">\r
    <div class="col-lg-6">\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title mb-4">Pie Chart</h4>\r
          <div class="row text-center">\r
            <div class="col-4">\r
              <h5 class="mb-0">2536</h5>\r
              <p class="text-muted text-truncate">Activated</p>\r
            </div>\r
            <div class="col-4">\r
              <h5 class="mb-0">69421</h5>\r
              <p class="text-muted text-truncate">Pending</p>\r
            </div>\r
            <div class="col-4">\r
              <h5 class="mb-0">89854</h5>\r
              <p class="text-muted text-truncate">Deactivated</p>\r
            </div>\r
          </div>\r
          <div class="chartjs-chart">\r
            <!-- Line Chart -->\r
            <canvas class="chartjs-chart" baseChart [data]="pieChart.data" [type]="'pie'" [options]="pieChart.options">\r
            </canvas>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="col-lg-6">\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title mb-4">Donut Chart</h4>\r
          <div class="row text-center">\r
            <div class="col-4">\r
              <h5 class="mb-0">9595</h5>\r
              <p class="text-muted text-truncate">Activated</p>\r
            </div>\r
            <div class="col-4">\r
              <h5 class="mb-0">36524</h5>\r
              <p class="text-muted text-truncate">Pending</p>\r
            </div>\r
            <div class="col-4">\r
              <h5 class="mb-0">62541</h5>\r
              <p class="text-muted text-truncate">Deactivated</p>\r
            </div>\r
          </div>\r
          <div class="">\r
            <!-- Bar Chart -->\r
            <canvas class="chartjs-chart" baseChart [data]="donutChart.data" [type]="'doughnut'" [options]="donutChart.options">\r
            </canvas>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="row">\r
    <div class="col-lg-6">\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title mb-4">Polar Chart</h4>\r
          <div class="row text-center">\r
            <div class="col-4">\r
              <h5 class="mb-0">4852</h5>\r
              <p class="text-muted text-truncate">Activated</p>\r
            </div>\r
            <div class="col-4">\r
              <h5 class="mb-0">3652</h5>\r
              <p class="text-muted text-truncate">Pending</p>\r
            </div>\r
            <div class="col-4">\r
              <h5 class="mb-0">85412</h5>\r
              <p class="text-muted text-truncate">Deactivated</p>\r
            </div>\r
          </div>\r
          <div class="chartjs-chart">\r
            <!-- Polar Chart Chart -->\r
            <canvas baseChart [type]="'polarArea'" height="300"  class="chartjs-chart" [data]="polarChart.data" [options]="polarChart.options"></canvas>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="col-lg-6">\r
      <div class="card">\r
        <div class="card-body">\r
          <h4 class="card-title mb-4">Radar Chart</h4>\r
          <div class="row text-center">\r
            <div class="col-4">\r
              <h5 class="mb-0">694</h5>\r
              <p class="text-muted text-truncate">Activated</p>\r
            </div>\r
            <div class="col-4">\r
              <h5 class="mb-0">55210</h5>\r
              <p class="text-muted text-truncate">Pending</p>\r
            </div>\r
            <div class="col-4">\r
              <h5 class="mb-0">489498</h5>\r
              <p class="text-muted text-truncate">Deactivated</p>\r
            </div>\r
          </div>\r
          <div class="chartjs-chart">\r
            <!-- Radar Chart -->\r
            <canvas baseChart [data]="radarChart.data" [type]="'radar'" [options]="radarChart.options" class="chartjs-chart">\r
            </canvas>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChartjsComponent, { className: "ChartjsComponent", filePath: "src/app/pages/chart/chartjs/chartjs.component.ts", lineNumber: 52 });
})();

// src/app/pages/chart/chartist/data.ts
var generateResponsiveData = () => {
  const times2 = (n) => {
    return Array.apply(null, new Array(n));
  };
  let data2;
  data2 = times2(52).map(Math.random).reduce((mData, rnd, index) => {
    mData.labels.push(index + 1);
    mData.series.forEach((series) => {
      series.push(Math.random() * 100);
    });
    return mData;
  }, {
    labels: [],
    series: times2(4).map(() => {
      return new Array();
    })
  });
  let options;
  options = {
    showLine: false,
    axisX: {
      labelInterpolationFnc: (value, index) => {
        return index % 13 === 0 ? "W" + value : null;
      }
    },
    height: 300
  };
  let responsiveOptions;
  responsiveOptions = [
    [
      "screen and (min-width: 640px)",
      {
        axisX: {
          labelInterpolationFnc: (value, index) => {
            return index % 4 === 0 ? "W" + value : null;
          }
        }
      }
    ]
  ];
  let type;
  type = "line scatter";
  return {
    options,
    data: data2,
    responsiveOptions,
    type
  };
};
var simpleLineChart = {
  data: {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    series: [
      [12, 9, 7, 8, 5],
      [2, 1, 3.5, 7, 3],
      [1, 3, 4, 5, 6]
    ]
  },
  type: "Line",
  options: {
    height: 300,
    fullWidth: true,
    chartPadding: {
      right: 40
    }
  }
};
var lineScatter = generateResponsiveData();
var areaLineChart = {
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [
      [5, 9, 7, 8, 5, 3, 5, 4]
    ]
  },
  options: {
    low: 0,
    showArea: true,
    height: 300
  },
  type: "Line"
};
var overlappingBarChart = {
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    series: [
      [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
      [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
    ]
  },
  options: {
    seriesBarDistance: 10,
    height: 300
  },
  type: "Bar",
  responsiveOptions: [
    ["screen and (max-width: 640px)", {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: (value) => {
          return value[0];
        }
      }
    }]
  ]
};
var stackBarChart = {
  data: {
    labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"],
    series: [
      [8e5, 12e5, 14e5, 13e5, 152e4, 14e5],
      [2e5, 4e5, 5e5, 3e5, 452e3, 5e5],
      [16e4, 29e4, 41e4, 6e5, 588e3, 41e4]
    ]
  },
  options: {
    stackBars: true,
    axisY: {
      // labelInterpolationFnc: (value) => {
      // return (value / 1000) + 'k';
      // }
    },
    height: 300
  },
  // events: {
  //     draw: (data) => {
  //         if (data.type === 'bar') {
  //             data.element.attr({
  //                 style: 'stroke-width: 30px'
  //             });
  //         }
  //     }
  // },
  type: "Bar"
};
var horizontalBarChart = {
  data: {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    series: [
      [5, 4, 3, 7, 5, 10, 3],
      [3, 2, 9, 5, 4, 6, 4]
    ]
  },
  type: "Bar",
  options: {
    seriesBarDistance: 10,
    reverseData: true,
    horizontalBars: true,
    axisY: {
      offset: 70
    },
    height: 300
  }
};
var donutAnimateChart = {
  data: {
    series: [10, 20, 50, 20, 5, 50, 15],
    labels: [1, 2, 3, 4, 5, 6, 7]
  },
  options: {
    donut: true,
    showLabel: false,
    height: 300
  },
  type: "Pie"
};
var simplePieChart2 = {
  data: {
    series: [5, 3, 4]
  },
  options: {
    height: 300,
    showLabel: false
  },
  type: "Pie"
};

// src/app/pages/chart/chartist/chartist.component.ts
var ChartistComponent2 = class _ChartistComponent {
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Charts" }, { label: "Chartist chart", active: true }];
    this._fetchData();
  }
  /**
   * fetches the chart data
   */
  _fetchData() {
    this.simpleLineChart = simpleLineChart;
    this.lineScatter = lineScatter;
    this.areaLineChart = areaLineChart;
    this.overlappingBarChart = overlappingBarChart;
    this.stackBarChart = stackBarChart;
    this.horizontalBarChart = horizontalBarChart;
    this.donutAnimateChart = donutAnimateChart;
    this.simplePieChart = simplePieChart2;
    var times2 = function(n) {
      return Array.apply(null, new Array(n));
    };
    var data2 = times2(52).map(Math.random).reduce(function(data3, rnd, index) {
      data3.labels.push(index + 1);
      data3.series.forEach(function(series) {
        series.push(Math.random() * 100);
      });
      return data3;
    }, {
      labels: [],
      series: times2(4).map(function() {
        return new Array();
      })
    });
    var options = {
      height: 300,
      showLine: false,
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 13 === 0 ? "W" + value : null;
        }
      }
    };
    var responsiveOptions = [
      ["screen and (min-width: 640px)", {
        axisX: {
          labelInterpolationFnc: function(value, index) {
            return index % 4 === 0 ? "W" + value : null;
          }
        }
      }]
    ];
    new LineChart(this.elementRef.nativeElement.querySelector(".ct-chart-scatter"), data2, options);
  }
  static {
    this.\u0275fac = function ChartistComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChartistComponent)(\u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChartistComponent, selectors: [["app-chartist"]], standalone: false, decls: 54, vars: 8, consts: [[1, "container-fluid"], ["title", "Chartist chart", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-6"], [1, "card"], ["dir", "ltr", 1, "card-body"], [1, "card-title", "mb-4"], [1, "ct-chart", 3, "configuration"], [1, "card-body"], [1, "ct-chart", "ct-chart-scatter"]], template: function ChartistComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
        \u0275\u0275text(7, "Simple line chart");
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "x-chartist", 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 3)(10, "div", 4)(11, "div", 5)(12, "h4", 6);
        \u0275\u0275text(13, "Line chart with area");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "x-chartist", 7);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(15, "div", 2)(16, "div", 3)(17, "div", 4)(18, "div", 5)(19, "h4", 6);
        \u0275\u0275text(20, "Stacked bar chart");
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "x-chartist", 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 3)(23, "div", 4)(24, "div", 8)(25, "h4", 6);
        \u0275\u0275text(26, "Horizontal bar chart");
        \u0275\u0275elementEnd();
        \u0275\u0275element(27, "x-chartist", 7);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(28, "div", 2)(29, "div", 3)(30, "div", 4)(31, "div", 5)(32, "h4", 6);
        \u0275\u0275text(33, "Overlapping bars on mobile");
        \u0275\u0275elementEnd();
        \u0275\u0275element(34, "x-chartist", 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "div", 3)(36, "div", 4)(37, "div", 5)(38, "h4", 6);
        \u0275\u0275text(39, "Line Scatter Diagram");
        \u0275\u0275elementEnd();
        \u0275\u0275element(40, "div", 9);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(41, "div", 2)(42, "div", 3)(43, "div", 4)(44, "div", 8)(45, "h4", 6);
        \u0275\u0275text(46, "Animating a Donut with Svg.animate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(47, "x-chartist", 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "div", 3)(49, "div", 4)(50, "div", 8)(51, "h4", 6);
        \u0275\u0275text(52, "Simple pie chart");
        \u0275\u0275elementEnd();
        \u0275\u0275element(53, "x-chartist", 7);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(7);
        \u0275\u0275property("configuration", ctx.simpleLineChart);
        \u0275\u0275advance(6);
        \u0275\u0275property("configuration", ctx.areaLineChart);
        \u0275\u0275advance(7);
        \u0275\u0275property("configuration", ctx.stackBarChart);
        \u0275\u0275advance(6);
        \u0275\u0275property("configuration", ctx.horizontalBarChart);
        \u0275\u0275advance(7);
        \u0275\u0275property("configuration", ctx.overlappingBarChart);
        \u0275\u0275advance(13);
        \u0275\u0275property("configuration", ctx.donutAnimateChart);
        \u0275\u0275advance(6);
        \u0275\u0275property("configuration", ctx.simplePieChart);
      }
    }, dependencies: [PagetitleComponent, ChartistComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartistComponent2, [{
    type: Component,
    args: [{ selector: "app-chartist", standalone: false, template: '<div class="container-fluid">\r\n  <app-page-title title="Chartist chart" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r\n\r\n  <div class="row">\r\n    <div class="col-lg-6">\r\n      <div class="card">\r\n        <div class="card-body" dir="ltr">\r\n          <h4 class="card-title mb-4">Simple line chart</h4>\r\n          <!-- Simple line chart -->\r\n          <x-chartist class="ct-chart" [configuration]="simpleLineChart"></x-chartist>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="col-lg-6">\r\n      <div class="card">\r\n        <div class="card-body" dir="ltr">\r\n          <h4 class="card-title mb-4">Line chart with area</h4>\r\n          <!-- Line chart with area -->\r\n          <x-chartist class="ct-chart" [configuration]="areaLineChart"></x-chartist>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="row">\r\n    <div class="col-lg-6">\r\n      <div class="card">\r\n        <div class="card-body" dir="ltr">\r\n          <h4 class="card-title mb-4">Stacked bar chart</h4>\r\n          <!-- Stacked bar chart -->\r\n          <x-chartist class="ct-chart" [configuration]="stackBarChart"></x-chartist>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="col-lg-6">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title mb-4">Horizontal bar chart</h4>\r\n          <!-- Horizontal bar chart -->\r\n          <x-chartist class="ct-chart" [configuration]="horizontalBarChart"></x-chartist>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="row">\r\n    <div class="col-lg-6">\r\n      <div class="card">\r\n        <div class="card-body" dir="ltr">\r\n          <h4 class="card-title mb-4">Overlapping bars on mobile</h4>\r\n          <!-- Overlapping bars on mobile -->\r\n          <x-chartist class="ct-chart" [configuration]="overlappingBarChart"></x-chartist>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="col-lg-6">\r\n      <div class="card">\r\n        <div class="card-body" dir="ltr">\r\n          <h4 class="card-title mb-4">Line Scatter Diagram</h4>\r\n          <!-- Line Scatter Diagram -->\r\n          <div class="ct-chart ct-chart-scatter"></div>\r\n          <!-- <x-chartist class="ct-chart ct-chart-scatter" [configuration]="lineScatter"></x-chartist> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="row">\r\n    <div class="col-lg-6">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title mb-4">Animating a Donut with Svg.animate</h4>\r\n          <!-- Animating a Donut with Svg.animate -->\r\n          <x-chartist class="ct-chart" [configuration]="donutAnimateChart"></x-chartist>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="col-lg-6">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title mb-4">Simple pie chart</h4>\r\n          <!-- Simple pie chart -->\r\n          <x-chartist class="ct-chart" [configuration]="simplePieChart"></x-chartist>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>' }]
  }], () => [{ type: ElementRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChartistComponent2, { className: "ChartistComponent", filePath: "src/app/pages/chart/chartist/chartist.component.ts", lineNumber: 22 });
})();

// src/app/pages/chart/echart/data.ts
var lineChart = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    axisLine: {
      lineStyle: {
        color: "#8791af"
      }
    }
  },
  yAxis: {
    type: "value",
    axisLine: {
      lineStyle: {
        color: "#8791af"
      }
    },
    splitLine: {
      lineStyle: {
        color: "rgba(166, 176, 207, 0.1)"
      }
    }
  },
  series: [{
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: "line"
  }],
  color: ["#34c38f"],
  tooltip: {
    trigger: "axis"
  }
};
var barChart2 = {
  color: ["#34c38f"],
  xAxis: {
    axisLine: {
      lineStyle: {
        color: "#8791af"
      }
    },
    splitLine: {
      lineStyle: {
        color: "rgba(166, 176, 207, 0.1)"
      }
    }
  },
  yAxis: {
    axisLine: {
      lineStyle: {
        color: "#8791af"
      }
    },
    splitLine: {
      lineStyle: {
        color: "rgba(166, 176, 207, 0.1)"
      }
    }
  },
  series: [{
    symbolSize: 10,
    data: [
      [10, 8.04],
      [8, 6.95],
      [13, 7.58],
      [9, 8.81],
      [11, 8.33],
      [14, 9.96],
      [6, 7.24],
      [4, 4.26],
      [12, 10.84],
      [7, 4.82],
      [5, 5.68]
    ],
    type: "scatter"
  }]
};
var pieChart = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: "vertical",
    left: "left",
    data: ["Laptop", "Tablet", "Mobile", "Others", "Desktop"],
    textStyle: { color: "#8791af" }
  },
  series: [
    {
      name: "Total sales",
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 335, name: "Laptop" },
        { value: 310, name: "Tablet" },
        { value: 234, name: "Mobile" },
        { value: 135, name: "Others" },
        { value: 1548, name: "Desktop" }
      ]
    }
  ],
  color: ["#556ee6", "#f1b44c", "#f46a6a", "#50a5f1", "#34c38f"]
};
var customPieChart = {
  xAxis: {
    data: ["2017-10-24", "2017-10-25", "2017-10-26", "2017-10-27"],
    axisLine: {
      lineStyle: {
        color: "#8791af"
      }
    },
    splitLine: {
      lineStyle: {
        color: "rgba(166, 176, 207, 0.1)"
      }
    }
  },
  yAxis: {
    axisLine: {
      lineStyle: {
        color: "#8791af"
      }
    },
    splitLine: {
      lineStyle: {
        color: "rgba(166, 176, 207, 0.1)"
      }
    }
  },
  series: [{
    data: [
      [20, 30, 10, 35],
      [40, 35, 30, 55],
      [33, 38, 33, 40],
      [40, 40, 32, 42]
    ]
  }]
};
var lineBarChart = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      crossStyle: {
        color: "#999"
      }
    }
  },
  toolbox: {
    orient: "vertical",
    left: 0,
    top: 20,
    feature: {
      dataZoom: {
        xAxisIndex: "none"
      },
      dataView: { readOnly: false, title: "Data View" },
      magicType: { type: ["line", "bar"], title: { line: "For line chart", bar: "For bar chart" } },
      restore: { title: "restore" },
      saveAsImage: { title: "Download Image" }
    }
  },
  color: ["#34c38f", "#556ee6", "#f46a6a"],
  legend: {
    data: ["Evaporation", "Precipitation", "Average Temperature"],
    textStyle: { color: "#8791af" }
  },
  xAxis: [
    {
      type: "category",
      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      axisPointer: {
        type: "shadow"
      },
      axisLine: {
        lineStyle: {
          color: "#8791af"
        }
      }
    }
  ],
  yAxis: [
    {
      type: "value",
      name: "Water volume",
      min: 0,
      max: 250,
      interval: 50,
      axisLine: {
        lineStyle: {
          color: "#8791af"
        }
      },
      splitLine: {
        lineStyle: {
          color: "rgba(166, 176, 207, 0.1)"
        }
      },
      axisLabel: {
        formatter: "{value} ml"
      }
    },
    {
      type: "value",
      name: "Temperature",
      min: 0,
      max: 25,
      interval: 5,
      axisLine: {
        lineStyle: {
          color: "#8791af"
        }
      },
      splitLine: {
        lineStyle: {
          color: "rgba(166, 176, 207, 0.1)"
        }
      },
      axisLabel: {
        formatter: "{value} \xC3\u201A\xC2\xB0C"
      }
    }
  ],
  series: [
    {
      name: "Evaporation",
      type: "bar",
      data: [2, 4.9, 7, 23.2, 25.6, 76.7, 135.6, 162.2]
    },
    {
      name: "Precipitation",
      type: "bar",
      data: [2.6, 5.9, 9, 26.4, 28.7, 70.7, 175.6, 182.2]
    },
    {
      name: "Average Temperature",
      type: "line",
      yAxisIndex: 1,
      data: [2, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4]
    }
  ]
};
var donughnutChart = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  color: ["#556ee6", "#f1b44c", "#f46a6a", "#50a5f1", "#34c38f"],
  legend: {
    orient: "vertical",
    left: "left",
    data: ["Laptop", "Tablet", "Mobile", "Others", "Desktop"],
    textStyle: { color: "#8791af" }
  },
  series: [
    {
      name: "Total sales",
      type: "pie",
      radius: ["50%", "70%"],
      avoidLabelOverlap: false,
      data: [
        { value: 335, name: "Laptop" },
        { value: 310, name: "Tablet" },
        { value: 234, name: "Mobile" },
        { value: 135, name: "Others" },
        { value: 1548, name: "Desktop" }
      ]
    }
  ]
};
var data = [
  [[28604, 77, 17096869, "Australia", 1990], [31163, 77.4, 27662440, "Canada", 1990], [1516, 68, 1154605773, "China", 1990], [13670, 74.7, 10582082, "Cuba", 1990], [28599, 75, 4986705, "Finland", 1990], [29476, 77.1, 56943299, "France", 1990], [31476, 75.4, 78958237, "Germany", 1990], [28666, 78.1, 254830, "Iceland", 1990], [1777, 57.7, 870601776, "India", 1990], [29550, 79.1, 122249285, "Japan", 1990], [2076, 67.9, 20194354, "North Korea", 1990], [12087, 72, 42972254, "South Korea", 1990], [24021, 75.4, 3397534, "New Zealand", 1990], [43296, 76.8, 4240375, "Norway", 1990], [10088, 70.8, 38195258, "Poland", 1990], [19349, 69.6, 147568552, "Russia", 1990], [10670, 67.3, 53994605, "Turkey", 1990], [26424, 75.7, 57110117, "United Kingdom", 1990], [37062, 75.4, 252847810, "United States", 1990]],
  [[44056, 81.8, 23968973, "Australia", 2015], [43294, 81.7, 35939927, "Canada", 2015], [13334, 76.9, 1376048943, "China", 2015], [21291, 78.5, 11389562, "Cuba", 2015], [38923, 80.8, 5503457, "Finland", 2015], [37599, 81.9, 64395345, "France", 2015], [44053, 81.1, 80688545, "Germany", 2015], [42182, 82.8, 329425, "Iceland", 2015], [5903, 66.8, 1311050527, "India", 2015], [36162, 83.5, 126573481, "Japan", 2015], [1390, 71.4, 25155317, "North Korea", 2015], [34644, 80.7, 50293439, "South Korea", 2015], [34186, 80.6, 4528526, "New Zealand", 2015], [64304, 81.6, 5210967, "Norway", 2015], [24787, 77.3, 38611794, "Poland", 2015], [23038, 73.13, 143456918, "Russia", 2015], [19360, 76.5, 78665830, "Turkey", 2015], [38225, 81.4, 64715810, "United Kingdom", 2015], [53354, 79.1, 321773631, "United States", 2015]]
];
var bubbleChart = {
  legend: {
    right: 10,
    data: ["2018", "2019"]
  },
  xAxis: {
    axisLine: {
      lineStyle: {
        color: "#8791af"
      }
    },
    splitLine: {
      lineStyle: {
        type: "dashed",
        color: "rgba(166, 176, 207, 0.1)"
      }
    }
  },
  yAxis: {
    axisLine: {
      lineStyle: {
        color: "#8791af"
      }
    },
    splitLine: {
      lineStyle: {
        type: "dashed",
        color: "rgba(166, 176, 207, 0.1)"
      }
    },
    scale: true
  },
  series: [{
    name: "2018",
    data: data[0],
    type: "scatter",
    symbolSize: function(data2) {
      return Math.sqrt(data2[2]) / 500;
    },
    emphasis: {
      label: {
        show: true,
        formatter: function(param) {
          return param.data[3];
        },
        position: "top"
      }
    },
    itemStyle: {
      shadowBlur: 10,
      shadowColor: "rgba(85, 110, 230, 0.5)",
      shadowOffsetY: 5,
      color: "#556ee6"
    }
  }, {
    name: "2019",
    data: data[1],
    type: "scatter",
    symbolSize: function(data2) {
      return Math.sqrt(data2[2]) / 500;
    },
    itemStyle: {
      shadowBlur: 10,
      shadowColor: "rgba(52, 195, 143, 0.5)",
      shadowOffsetY: 5,
      color: "#34c38f"
    }
  }],
  tooltip: {
    trigger: "axis"
  }
};
var dataAxis = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T"];
var data1 = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
var dataShadow = [];
var yMax = 500;
for (let i = 0; i < data1.length; i++) {
  dataShadow.push(yMax);
}
var gradientBarChart = {
  xAxis: {
    data: dataAxis,
    axisLabel: {
      inside: true,
      color: "#fff"
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    z: 10
  },
  yAxis: {
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: "#999"
    }
  },
  dataZoom: [
    {
      type: "inside"
    }
  ],
  tooltip: {
    trigger: "axis"
  },
  series: [
    {
      type: "bar",
      itemStyle: {
        color: "rgba(0,0,0,0.05)"
      },
      barGap: "-100%",
      barCategoryGap: "40%",
      data: dataShadow,
      animation: false
    },
    {
      type: "bar",
      data: data1
    }
  ]
};
var gaugeChart = {
  series: [
    {
      type: "gauge",
      axisLine: {
        lineStyle: {
          width: 15,
          color: [
            [0.3, "#67e0e3"],
            [0.7, "#37a2da"],
            [1, "#fd666d"]
          ]
        }
      },
      pointer: {
        itemStyle: {
          color: "inherit"
        }
      },
      axisTick: {
        distance: -14,
        length: 8,
        lineStyle: {
          color: "#fff",
          width: 2
        }
      },
      splitLine: {
        distance: -14,
        length: 20,
        lineStyle: {
          color: "#fff",
          width: 2
        }
      },
      axisLabel: {
        color: "inherit",
        distance: 40,
        fontSize: 15
      },
      detail: {
        valueAnimation: true,
        formatter: "{value} km/h",
        color: "inherit"
      },
      data: [
        {
          value: 70,
          name: "Completion rate"
        }
      ]
    }
  ]
};
var CandleStickChart = {
  grid: {
    left: "1%",
    right: "0%",
    bottom: "0%",
    top: "2%",
    containLabel: true
  },
  color: ["#556ee6", "#34c38f"],
  xAxis: {
    data: ["2017-10-24", "2017-10-25", "2017-10-26", "2017-10-27"],
    axisLine: {
      lineStyle: {
        color: "#858d98"
      }
    },
    splitLine: {
      lineStyle: {
        color: "rgba(133, 141, 152, 0.1)"
      }
    }
  },
  yAxis: {
    axisLine: {
      lineStyle: {
        color: "#858d98"
      }
    },
    splitLine: {
      lineStyle: {
        color: "rgba(133, 141, 152, 0.1)"
      }
    }
  },
  textStyle: {
    fontFamily: "Poppins, sans-serif"
  },
  series: [{
    type: "candlestick",
    data: [
      [20, 34, 10, 38],
      [40, 35, 30, 50],
      [31, 38, 33, 44],
      [38, 15, 5, 42]
    ],
    itemStyle: {}
  }]
};

// src/app/pages/chart/echart/echart.component.ts
var EchartComponent = class _EchartComponent {
  constructor() {
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Charts" }, { label: "E Chart", active: true }];
    this._fetchData();
  }
  /**
   * Fetch the chart data
   */
  _fetchData() {
    this.lineChart = lineChart;
    this.barChart = barChart2;
    this.pieChart = pieChart;
    this.customPieChart = customPieChart;
    this.gradientBarChart = gradientBarChart;
    this.lineBarChart = lineBarChart;
    this.donughnutChart = donughnutChart;
    this.bubbleChart = bubbleChart;
    this.gaugeChart = gaugeChart;
    this.CandleStickChart = CandleStickChart;
  }
  static {
    this.\u0275fac = function EchartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EchartComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EchartComponent, selectors: [["app-echart"]], standalone: false, decls: 61, vars: 10, consts: [[1, "container-fluid"], ["title", "E Chart", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-6"], [1, "card"], [1, "card-body"], [1, "card-title"], ["echarts", "", 1, "demo-chart", 3, "options"], [1, "col-lg-12"]], template: function EchartComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
        \u0275\u0275text(7, "Line Chart");
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "div", 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 3)(10, "div", 4)(11, "div", 5)(12, "h4", 6);
        \u0275\u0275text(13, "Mixed Line-Bar chart");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "div", 7);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(15, "div", 2)(16, "div", 3)(17, "div", 4)(18, "div", 5)(19, "h4", 6);
        \u0275\u0275text(20, "Doughnut Chart");
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "div", 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 3)(23, "div", 4)(24, "div", 5)(25, "h4", 6);
        \u0275\u0275text(26, "Pie chart");
        \u0275\u0275elementEnd();
        \u0275\u0275element(27, "div", 7);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(28, "div", 2)(29, "div", 3)(30, "div", 4)(31, "div", 5)(32, "h4", 6);
        \u0275\u0275text(33, "Scatter Chart");
        \u0275\u0275elementEnd();
        \u0275\u0275element(34, "div", 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "div", 3)(36, "div", 4)(37, "div", 5)(38, "h4", 6);
        \u0275\u0275text(39, "Bubble chart");
        \u0275\u0275elementEnd();
        \u0275\u0275element(40, "div", 7);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(41, "div", 2)(42, "div", 3)(43, "div", 4)(44, "div", 5)(45, "h4", 6);
        \u0275\u0275text(46, "Candlestick Chart");
        \u0275\u0275elementEnd();
        \u0275\u0275element(47, "div", 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "div", 3)(49, "div", 4)(50, "div", 5)(51, "h4", 6);
        \u0275\u0275text(52, "Gauge Chart");
        \u0275\u0275elementEnd();
        \u0275\u0275element(53, "div", 7);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(54, "div", 2)(55, "div", 8)(56, "div", 4)(57, "div", 5)(58, "h4", 6);
        \u0275\u0275text(59, "Gradient Bar chart (zoom)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(60, "div", 7);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.lineChart);
        \u0275\u0275advance(6);
        \u0275\u0275property("options", ctx.lineBarChart);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.donughnutChart);
        \u0275\u0275advance(6);
        \u0275\u0275property("options", ctx.pieChart);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.barChart);
        \u0275\u0275advance(6);
        \u0275\u0275property("options", ctx.bubbleChart);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.CandleStickChart);
        \u0275\u0275advance(6);
        \u0275\u0275property("options", ctx.gaugeChart);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.gradientBarChart);
      }
    }, dependencies: [PagetitleComponent, NgxEchartsDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EchartComponent, [{
    type: Component,
    args: [{ selector: "app-echart", standalone: false, template: '<div class="container-fluid">\r\n  <app-page-title title="E Chart" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r\n\r\n  <div class="row">\r\n    <div class="col-lg-6">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title">Line Chart</h4>\r\n          <div echarts [options]="lineChart" class="demo-chart"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="col-lg-6">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title">Mixed Line-Bar chart</h4>\r\n          <div echarts [options]="lineBarChart" class="demo-chart"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n   \r\n  </div>\r\n\r\n  <div class="row">\r\n    <div class="col-lg-6">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title">Doughnut Chart</h4>\r\n          <div echarts [options]="donughnutChart" class="demo-chart"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="col-lg-6">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title">Pie chart</h4>\r\n          <div echarts [options]="pieChart" class="demo-chart"></div>\r\n        </div>\r\n      </div>\r\n    </div>    \r\n  </div>\r\n\r\n  <div class="row">\r\n    <div class="col-lg-6">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title">Scatter Chart</h4>\r\n          <div echarts [options]="barChart" class="demo-chart"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="col-lg-6">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title">Bubble chart</h4>\r\n          <div echarts [options]="bubbleChart" class="demo-chart"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n       \r\n  </div>\r\n\r\n  <div class="row">\r\n\r\n    <div class="col-lg-6">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title">Candlestick Chart</h4>\r\n          <div echarts [options]="CandleStickChart" class="demo-chart"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class="col-lg-6">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title">Gauge Chart</h4>\r\n          <div echarts [options]="gaugeChart" class="demo-chart"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class="row">\r\n    <div class="col-lg-12">\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h4 class="card-title">Gradient Bar chart (zoom)</h4>\r\n          <div echarts [options]="gradientBarChart" class="demo-chart"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EchartComponent, { className: "EchartComponent", filePath: "src/app/pages/chart/echart/echart.component.ts", lineNumber: 17 });
})();

// src/app/pages/chart/chart-routing.module.ts
var routes = [
  {
    path: "apex",
    component: ApexComponent
  },
  {
    path: "chartjs",
    component: ChartjsComponent
  },
  {
    path: "chartist",
    component: ChartistComponent2
  },
  {
    path: "echart",
    component: EchartComponent
  }
];
var ChartRoutingModule = class _ChartRoutingModule {
  static {
    this.\u0275fac = function ChartRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChartRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ChartRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/pages/chart/chart.module.ts
var ChartModule = class _ChartModule {
  static {
    this.\u0275fac = function ChartModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChartModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ChartModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      ChartRoutingModule,
      NgApexchartsModule,
      ChartistModule,
      NgxEchartsModule.forRoot({
        echarts: () => import("./echarts-62JQPGUU.js")
      })
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartModule, [{
    type: NgModule,
    args: [{
      declarations: [
        ApexComponent,
        ChartjsComponent,
        ChartistComponent2,
        EchartComponent
      ],
      imports: [
        CommonModule,
        ChartRoutingModule,
        PagetitleComponent,
        NgApexchartsModule,
        BaseChartDirective,
        ChartistModule,
        NgxEchartsModule.forRoot({
          echarts: () => import("./echarts-62JQPGUU.js")
        })
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }]
  }], null, null);
})();

export {
  ChartModule
};
//# sourceMappingURL=chunk-YEKQNWQR.js.map
