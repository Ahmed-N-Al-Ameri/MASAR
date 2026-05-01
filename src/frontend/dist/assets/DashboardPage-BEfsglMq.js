import { c as createLucideIcon, o, b as clsx, r as reactExports, j as jsxRuntimeExports, C as ChartColumn, g as getDashboardStats, d as getAlerts, e as getProjects } from "./index-D0P90mBY.js";
import { S as StatusBadge } from "./StatusBadge-Co9tVlmU.js";
import { B as Building2 } from "./building-2-BTG3rz8B.js";
import { T as TrendingUp } from "./trending-up-sej8Zq6u.js";
import { C as CircleCheck } from "./circle-check-Cc45yqBS.js";
import { T as TriangleAlert } from "./triangle-alert-DTxpIMzu.js";
import { C as Clock } from "./clock-CzToB0k_.js";
import { S as Shape, f as filterProps, a as adaptEventsOfChild, A as Animate, i as interpolateNumber, L as Layer, b as isEqual, c as LabelList, m as mathSign, d as isFunction, G as Global, e as findPositionOfBar, g as getBaseValueOfBar, h as findAllByType, C as Cell, t as truncateByDomain, j as getValueByDataKey, k as getCateCoordinateOfBar, l as getTooltipItem, p as polarToCartesian, n as generateCategoricalChart, P as PolarAngleAxis, o as PolarRadiusAxis, q as formatAxisMap, R as ResponsiveContainer, r as PieChart, s as Pie, T as Tooltip, u as Legend, B as BarChart, v as CartesianGrid, X as XAxis, Y as YAxis, w as Bar } from "./PieChart-DK7zRIBE.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "10", x2: "10", y1: "15", y2: "9", key: "c1nkhi" }],
  ["line", { x1: "14", x2: "14", y1: "15", y2: "9", key: "h65svq" }]
];
const CirclePause = createLucideIcon("circle-pause", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const FileWarning = createLucideIcon("file-warning", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M5 22h14", key: "ehvnwv" }],
  ["path", { d: "M5 2h14", key: "pdyrp9" }],
  [
    "path",
    {
      d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",
      key: "1d314k"
    }
  ],
  [
    "path",
    { d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2", key: "1vvvr6" }
  ]
];
const Hourglass = createLucideIcon("hourglass", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6"
    }
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }]
];
const Wallet = createLucideIcon("wallet", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
function _typeof$1(o2) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof$1(o2);
}
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e);
    r && (o2 = o2.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o2);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$1(obj, key, value) {
  key = _toPropertyKey$1(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}
function _toPrimitive$1(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function parseCornerRadius(cornerRadius) {
  if (typeof cornerRadius === "string") {
    return parseInt(cornerRadius, 10);
  }
  return cornerRadius;
}
function typeGuardSectorProps(option, props) {
  var cxValue = "".concat(props.cx || option.cx);
  var cx = Number(cxValue);
  var cyValue = "".concat(props.cy || option.cy);
  var cy = Number(cyValue);
  return _objectSpread$1(_objectSpread$1(_objectSpread$1({}, props), option), {}, {
    cx,
    cy
  });
}
function RadialBarSector(props) {
  return /* @__PURE__ */ o.createElement(Shape, _extends$1({
    shapeType: "sector",
    propTransformer: typeGuardSectorProps
  }, props));
}
var _excluded = ["shape", "activeShape", "activeIndex", "cornerRadius"], _excluded2 = ["value", "background"];
function _typeof(o2) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof(o2);
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e);
    r && (o2 = o2.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o2);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper(t, o2, e) {
  return o2 = _getPrototypeOf(o2), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o2, e || [], _getPrototypeOf(t).constructor) : o2.apply(t, e));
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _getPrototypeOf(o2) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o3) {
    return o3.__proto__ || Object.getPrototypeOf(o3);
  };
  return _getPrototypeOf(o2);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o2, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p2) {
    o3.__proto__ = p2;
    return o3;
  };
  return _setPrototypeOf(o2, p);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var RadialBar = /* @__PURE__ */ function(_PureComponent) {
  function RadialBar2() {
    var _this;
    _classCallCheck(this, RadialBar2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, RadialBar2, [].concat(args));
    _defineProperty(_this, "state", {
      isAnimationFinished: false
    });
    _defineProperty(_this, "handleAnimationEnd", function() {
      var onAnimationEnd = _this.props.onAnimationEnd;
      _this.setState({
        isAnimationFinished: true
      });
      if (isFunction(onAnimationEnd)) {
        onAnimationEnd();
      }
    });
    _defineProperty(_this, "handleAnimationStart", function() {
      var onAnimationStart = _this.props.onAnimationStart;
      _this.setState({
        isAnimationFinished: false
      });
      if (isFunction(onAnimationStart)) {
        onAnimationStart();
      }
    });
    return _this;
  }
  _inherits(RadialBar2, _PureComponent);
  return _createClass(RadialBar2, [{
    key: "getDeltaAngle",
    value: function getDeltaAngle() {
      var _this$props = this.props, startAngle = _this$props.startAngle, endAngle = _this$props.endAngle;
      var sign = mathSign(endAngle - startAngle);
      var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);
      return sign * deltaAngle;
    }
  }, {
    key: "renderSectorsStatically",
    value: function renderSectorsStatically(sectors) {
      var _this2 = this;
      var _this$props2 = this.props, shape = _this$props2.shape, activeShape = _this$props2.activeShape, activeIndex = _this$props2.activeIndex, cornerRadius = _this$props2.cornerRadius, others = _objectWithoutProperties(_this$props2, _excluded);
      var baseProps = filterProps(others, false);
      return sectors.map(function(entry, i) {
        var isActive = i === activeIndex;
        var props = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, baseProps), {}, {
          cornerRadius: parseCornerRadius(cornerRadius)
        }, entry), adaptEventsOfChild(_this2.props, entry, i)), {}, {
          className: "recharts-radial-bar-sector ".concat(entry.className),
          forceCornerRadius: others.forceCornerRadius,
          cornerIsExternal: others.cornerIsExternal,
          isActive,
          option: isActive ? activeShape : shape
        });
        return /* @__PURE__ */ o.createElement(RadialBarSector, _extends({}, props, {
          key: "sector-".concat(i)
        }));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function renderSectorsWithAnimation() {
      var _this3 = this;
      var _this$props3 = this.props, data = _this$props3.data, isAnimationActive = _this$props3.isAnimationActive, animationBegin = _this$props3.animationBegin, animationDuration = _this$props3.animationDuration, animationEasing = _this$props3.animationEasing, animationId = _this$props3.animationId;
      var prevData = this.state.prevData;
      return /* @__PURE__ */ o.createElement(Animate, {
        begin: animationBegin,
        duration: animationDuration,
        isActive: isAnimationActive,
        easing: animationEasing,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "radialBar-".concat(animationId),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function(_ref) {
        var t = _ref.t;
        var stepData = data.map(function(entry, index) {
          var prev = prevData && prevData[index];
          if (prev) {
            var interpolatorStartAngle = interpolateNumber(prev.startAngle, entry.startAngle);
            var interpolatorEndAngle = interpolateNumber(prev.endAngle, entry.endAngle);
            return _objectSpread(_objectSpread({}, entry), {}, {
              startAngle: interpolatorStartAngle(t),
              endAngle: interpolatorEndAngle(t)
            });
          }
          var endAngle = entry.endAngle, startAngle = entry.startAngle;
          var interpolator = interpolateNumber(startAngle, endAngle);
          return _objectSpread(_objectSpread({}, entry), {}, {
            endAngle: interpolator(t)
          });
        });
        return /* @__PURE__ */ o.createElement(Layer, null, _this3.renderSectorsStatically(stepData));
      });
    }
  }, {
    key: "renderSectors",
    value: function renderSectors() {
      var _this$props4 = this.props, data = _this$props4.data, isAnimationActive = _this$props4.isAnimationActive;
      var prevData = this.state.prevData;
      if (isAnimationActive && data && data.length && (!prevData || !isEqual(prevData, data))) {
        return this.renderSectorsWithAnimation();
      }
      return this.renderSectorsStatically(data);
    }
  }, {
    key: "renderBackground",
    value: function renderBackground(sectors) {
      var _this4 = this;
      var cornerRadius = this.props.cornerRadius;
      var backgroundProps = filterProps(this.props.background, false);
      return sectors.map(function(entry, i) {
        entry.value;
        var background = entry.background, rest = _objectWithoutProperties(entry, _excluded2);
        if (!background) {
          return null;
        }
        var props = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
          cornerRadius: parseCornerRadius(cornerRadius)
        }, rest), {}, {
          fill: "#eee"
        }, background), backgroundProps), adaptEventsOfChild(_this4.props, entry, i)), {}, {
          index: i,
          className: clsx("recharts-radial-bar-background-sector", backgroundProps === null || backgroundProps === void 0 ? void 0 : backgroundProps.className),
          option: background,
          isActive: false
        });
        return /* @__PURE__ */ o.createElement(RadialBarSector, _extends({}, props, {
          key: "sector-".concat(i)
        }));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props, hide = _this$props5.hide, data = _this$props5.data, className = _this$props5.className, background = _this$props5.background, isAnimationActive = _this$props5.isAnimationActive;
      if (hide || !data || !data.length) {
        return null;
      }
      var isAnimationFinished = this.state.isAnimationFinished;
      var layerClass = clsx("recharts-area", className);
      return /* @__PURE__ */ o.createElement(Layer, {
        className: layerClass
      }, background && /* @__PURE__ */ o.createElement(Layer, {
        className: "recharts-radial-bar-background"
      }, this.renderBackground(data)), /* @__PURE__ */ o.createElement(Layer, {
        className: "recharts-radial-bar-sectors"
      }, this.renderSectors()), (!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(_objectSpread({}, this.props), data));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.animationId !== prevState.prevAnimationId) {
        return {
          prevAnimationId: nextProps.animationId,
          curData: nextProps.data,
          prevData: prevState.curData
        };
      }
      if (nextProps.data !== prevState.curData) {
        return {
          curData: nextProps.data
        };
      }
      return null;
    }
  }]);
}(reactExports.PureComponent);
_defineProperty(RadialBar, "displayName", "RadialBar");
_defineProperty(RadialBar, "defaultProps", {
  angleAxisId: 0,
  radiusAxisId: 0,
  minPointSize: 0,
  hide: false,
  legendType: "rect",
  data: [],
  isAnimationActive: !Global.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  forceCornerRadius: false,
  cornerIsExternal: false
});
_defineProperty(RadialBar, "getComposedData", function(_ref2) {
  var item = _ref2.item, props = _ref2.props, radiusAxis = _ref2.radiusAxis, radiusAxisTicks = _ref2.radiusAxisTicks, angleAxis = _ref2.angleAxis, angleAxisTicks = _ref2.angleAxisTicks, displayedData = _ref2.displayedData, dataKey = _ref2.dataKey, stackedData = _ref2.stackedData, barPosition = _ref2.barPosition, bandSize = _ref2.bandSize, dataStartIndex = _ref2.dataStartIndex;
  var pos = findPositionOfBar(barPosition, item);
  if (!pos) {
    return null;
  }
  var cx = angleAxis.cx, cy = angleAxis.cy;
  var layout = props.layout;
  var _item$props = item.props, children = _item$props.children, minPointSize = _item$props.minPointSize;
  var numericAxis = layout === "radial" ? angleAxis : radiusAxis;
  var stackedDomain = stackedData ? numericAxis.scale.domain() : null;
  var baseValue = getBaseValueOfBar({
    numericAxis
  });
  var cells = findAllByType(children, Cell);
  var sectors = displayedData.map(function(entry, index) {
    var value, innerRadius, outerRadius, startAngle, endAngle, backgroundSector;
    if (stackedData) {
      value = truncateByDomain(stackedData[dataStartIndex + index], stackedDomain);
    } else {
      value = getValueByDataKey(entry, dataKey);
      if (!Array.isArray(value)) {
        value = [baseValue, value];
      }
    }
    if (layout === "radial") {
      innerRadius = getCateCoordinateOfBar({
        axis: radiusAxis,
        ticks: radiusAxisTicks,
        bandSize,
        offset: pos.offset,
        entry,
        index
      });
      endAngle = angleAxis.scale(value[1]);
      startAngle = angleAxis.scale(value[0]);
      outerRadius = innerRadius + pos.size;
      var deltaAngle = endAngle - startAngle;
      if (Math.abs(minPointSize) > 0 && Math.abs(deltaAngle) < Math.abs(minPointSize)) {
        var delta = mathSign(deltaAngle || minPointSize) * (Math.abs(minPointSize) - Math.abs(deltaAngle));
        endAngle += delta;
      }
      backgroundSector = {
        background: {
          cx,
          cy,
          innerRadius,
          outerRadius,
          startAngle: props.startAngle,
          endAngle: props.endAngle
        }
      };
    } else {
      innerRadius = radiusAxis.scale(value[0]);
      outerRadius = radiusAxis.scale(value[1]);
      startAngle = getCateCoordinateOfBar({
        axis: angleAxis,
        ticks: angleAxisTicks,
        bandSize,
        offset: pos.offset,
        entry,
        index
      });
      endAngle = startAngle + pos.size;
      var deltaRadius = outerRadius - innerRadius;
      if (Math.abs(minPointSize) > 0 && Math.abs(deltaRadius) < Math.abs(minPointSize)) {
        var _delta = mathSign(deltaRadius || minPointSize) * (Math.abs(minPointSize) - Math.abs(deltaRadius));
        outerRadius += _delta;
      }
    }
    return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, entry), backgroundSector), {}, {
      payload: entry,
      value: stackedData ? value : value[1],
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle
    }, cells && cells[index] && cells[index].props), {}, {
      tooltipPayload: [getTooltipItem(item, entry)],
      tooltipPosition: polarToCartesian(cx, cy, (innerRadius + outerRadius) / 2, (startAngle + endAngle) / 2)
    });
  });
  return {
    data: sectors,
    layout
  };
});
var RadialBarChart = generateCategoricalChart({
  chartName: "RadialBarChart",
  GraphicalChild: RadialBar,
  legendContent: "children",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: PolarAngleAxis
  }, {
    axisType: "radiusAxis",
    AxisComp: PolarRadiusAxis
  }],
  formatAxisMap,
  defaultProps: {
    layout: "radial",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
});
function formatCurrency(value) {
  if (value >= 1e12) {
    return `${(value / 1e12).toFixed(3)} تريليون دينار`;
  }
  if (value >= 1e9) {
    return `${(value / 1e9).toFixed(2)} مليار دينار`;
  }
  if (value >= 1e6) {
    return `${(value / 1e6).toFixed(1)} مليون دينار`;
  }
  return value.toLocaleString("ar-IQ");
}
const stats = getDashboardStats();
const alerts = getAlerts();
const allProjects = getProjects();
const statusChartData = [
  { name: "مستمر", value: stats.continuing, fill: "#3b82f6" },
  { name: "متوقف", value: stats.stopped, fill: "#ef4444" },
  { name: "داخل للخدمة", value: stats.inService, fill: "#06b6d4" },
  { name: "استلام نهائي", value: stats.finalAccepted, fill: "#8b5cf6" },
  { name: "تسوية مالية", value: stats.financialSettlement, fill: "#f59e0b" }
].filter((d) => d.value > 0);
const beneficiaryRaw = {
  "شركة خطوط الأنابيب": 0,
  "شركة توزيع المنتجات": 0,
  "وزارة الكهرباء": 0,
  "شركة تسويق النفط": 0,
  "شركة غاز الجنوب": 0,
  "شركة الغاز الوطنية": 0
};
for (const p of allProjects) {
  if (p.beneficiary) {
    const key = Object.keys(beneficiaryRaw).find(
      (k) => p.beneficiary.includes(k.split(" ").slice(-1)[0])
    );
    if (key) beneficiaryRaw[key]++;
    else {
      const otherKey = "أخرى";
      beneficiaryRaw[otherKey] = (beneficiaryRaw[otherKey] || 0) + 1;
    }
  }
}
const beneficiaryData = Object.entries(beneficiaryRaw).filter(([, v]) => v > 0).sort((a, b) => b[1] - a[1]).map(([name, count]) => ({
  name: name.length > 20 ? `${name.slice(0, 20)}...` : name,
  count
}));
const comparisonData = [
  { id: 1, shortName: "إيصال الوقود", progress: 71.9, spending: 27.98 },
  { id: 2, shortName: "طاقات الخزن", progress: 82.4, spending: 90.5 },
  { id: 7, shortName: "تحسين الشبكات", progress: 44.1, spending: 33.3 },
  { id: 5, shortName: "الطاقات التصديرية", progress: 45, spending: 36.6 },
  { id: 12, shortName: "الغاز الشرقي", progress: 28, spending: 19.6 },
  { id: 8, shortName: "مستودع كربلاء", progress: 99.3, spending: 98.8 }
];
const totalCostCalc = allProjects.reduce((s, p) => s + p.totalCost, 0);
const totalSpentCalc = allProjects.reduce((s, p) => s + p.spent, 0);
const overallProgress = 57.8;
const overallSpending = Math.round(totalSpentCalc / totalCostCalc * 100 * 10) / 10;
const progressGaugeData = [
  { name: "نسبة الإنجاز", value: overallProgress, fill: "#3b82f6" }
];
const spendingGaugeData = [
  { name: "نسبة الصرف", value: overallSpending, fill: "#f59e0b" }
];
const realAlerts = {
  notUpdated: alerts.notUpdated,
  missingDocs: alerts.missingDocs,
  pendingAction: alerts.pendingAction
};
const kpiCountCards = [
  {
    label: "إجمالي المشاريع",
    value: stats.totalProjects,
    suffix: "مشروع",
    icon: Building2,
    accentColor: "#3b82f6",
    borderTop: "border-t-[#3b82f6]",
    valueCls: "text-blue-600",
    bgBadge: "bg-blue-50 text-blue-600",
    ocid: "dashboard.kpi.total",
    pct: null
  },
  {
    label: "المشاريع المستمرة",
    subtitle: "قيد التنفيذ",
    value: stats.continuing,
    suffix: "مشروع",
    icon: TrendingUp,
    accentColor: "#22c55e",
    borderTop: "border-t-[#22c55e]",
    valueCls: "text-green-600",
    bgBadge: "bg-green-50 text-green-700",
    ocid: "dashboard.kpi.continuing",
    pct: Math.round(stats.continuing / stats.totalProjects * 100)
  },
  {
    label: "المشاريع المتوقفة",
    value: stats.stopped,
    suffix: "مشروع",
    icon: CirclePause,
    accentColor: "#ef4444",
    borderTop: "border-t-[#ef4444]",
    valueCls: "text-red-600",
    bgBadge: "bg-red-50 text-red-700",
    ocid: "dashboard.kpi.stopped",
    pct: Math.round(stats.stopped / stats.totalProjects * 100)
  },
  {
    label: "داخل للخدمة / استلام نهائي",
    value: stats.inService + stats.finalAccepted,
    suffix: "مشروع",
    icon: CircleCheck,
    accentColor: "#8b5cf6",
    borderTop: "border-t-[#8b5cf6]",
    valueCls: "text-violet-600",
    bgBadge: "bg-violet-50 text-violet-700",
    ocid: "dashboard.kpi.completed",
    pct: Math.round(
      (stats.inService + stats.finalAccepted) / stats.totalProjects * 100
    )
  }
];
const kpiFinancialCards = [
  {
    label: "إجمالي الكلف",
    value: formatCurrency(stats.totalCost),
    rawValue: stats.totalCost,
    icon: Building2,
    accentColor: "#1d4ed8",
    borderTop: "border-t-[#1d4ed8]",
    valueCls: "text-blue-800",
    bgBadge: "bg-blue-100 text-blue-800",
    ocid: "dashboard.kpi.total-cost"
  },
  {
    label: "المصروف التراكمي",
    value: formatCurrency(stats.totalSpent),
    rawValue: stats.totalSpent,
    icon: Wallet,
    accentColor: "#0d9488",
    borderTop: "border-t-[#0d9488]",
    valueCls: "text-teal-700",
    bgBadge: "bg-teal-50 text-teal-700",
    ocid: "dashboard.kpi.total-spent",
    pctOfTotal: Math.round(stats.totalSpent / stats.totalCost * 100)
  },
  {
    label: "المبلغ المتبقي",
    value: formatCurrency(stats.totalRemaining),
    rawValue: stats.totalRemaining,
    icon: Hourglass,
    accentColor: "#d97706",
    borderTop: "border-t-[#d97706]",
    valueCls: "text-amber-700",
    bgBadge: "bg-amber-50 text-amber-700",
    ocid: "dashboard.kpi.total-remaining",
    pctOfTotal: Math.round(stats.totalRemaining / stats.totalCost * 100)
  }
];
function SectionTitle({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-bold text-primary flex items-center gap-2 mb-4", children });
}
function AlertItem({
  project,
  detail,
  badge,
  index,
  ocidPrefix
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex items-start justify-between gap-3 py-2.5 border-b border-border last:border-0",
      "data-ocid": `${ocidPrefix}.item.${index}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground truncate leading-snug", children: project.name }),
          detail && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: detail })
        ] }),
        badge
      ]
    }
  );
}
function AlertCard({
  title,
  icon,
  borderCls,
  bgCls,
  items,
  renderDetail,
  renderBadge,
  ocidPrefix,
  ocid
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `bg-card rounded-xl border border-border shadow-card flex flex-col border-r-4 ${borderCls}`,
      "data-ocid": ocid,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex items-center gap-2 px-4 py-3 rounded-t-xl ${bgCls}`,
            children: [
              icon,
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-foreground", children: title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-auto text-xs bg-card text-muted-foreground rounded-full px-2 py-0.5 font-semibold border border-border", children: items.length })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 flex-1", children: items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-xs text-muted-foreground py-4 text-center",
            "data-ocid": `${ocidPrefix}.empty_state`,
            children: "لا توجد مشاريع في هذه الفئة"
          }
        ) : items.slice(0, 4).map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          AlertItem,
          {
            project: p,
            detail: renderDetail == null ? void 0 : renderDetail(p),
            badge: renderBadge == null ? void 0 : renderBadge(p),
            index: idx + 1,
            ocidPrefix
          },
          p.id
        )) })
      ]
    }
  );
}
const ComparisonTooltip = ({
  active,
  payload,
  label
}) => {
  if (active && payload && payload.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border rounded-lg shadow-elevated p-3 text-sm min-w-[160px]",
        dir: "rtl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mb-2 text-xs leading-snug", children: label }),
          payload.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center justify-between gap-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-muted-foreground text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "w-2 h-2 rounded-sm inline-block",
                      style: { background: entry.color }
                    }
                  ),
                  entry.name
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-foreground", children: [
                  entry.value,
                  "%"
                ] })
              ]
            },
            entry.name
          ))
        ]
      }
    );
  }
  return null;
};
const PieTooltip = ({
  active,
  payload
}) => {
  if (active && payload && payload.length) {
    const item = payload[0];
    const pct = Math.round(item.value / stats.totalProjects * 100);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border rounded-lg shadow-elevated p-3 text-sm",
        dir: "rtl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "w-3 h-3 rounded-sm",
                style: { background: item.payload.fill }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: item.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-xs mt-1", children: [
            item.value,
            " ",
            item.value === 1 ? "مشروع" : "مشاريع",
            " (",
            pct,
            "%)"
          ] })
        ]
      }
    );
  }
  return null;
};
function GaugePanel({
  value,
  color,
  label,
  subLabel,
  gaugeData
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", style: { width: 160, height: 160 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: 160, height: 160, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        RadialBarChart,
        {
          cx: "50%",
          cy: "50%",
          innerRadius: 50,
          outerRadius: 72,
          startAngle: 90,
          endAngle: 90 - 360 * (value / 100),
          data: gaugeData,
          barSize: 20,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            RadialBar,
            {
              background: { fill: "oklch(0.92 0.01 0)" },
              dataKey: "value",
              cornerRadius: 8,
              fill: color
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-2xl font-bold tabular-nums", style: { color }, children: [
        value,
        "%"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: subLabel })
    ] })
  ] });
}
function DashboardPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", "data-ocid": "dashboard.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "dashboard.kpi.section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionTitle, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-4 h-4" }),
        "مؤشرات المتابعة العامة"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-4", children: kpiCountCards.map((card) => {
        const Icon = card.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `bg-card rounded-xl shadow-card border border-border border-t-4 ${card.borderTop} p-4 flex flex-col gap-3 hover:shadow-elevated transition-smooth`,
            "data-ocid": card.ocid,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Icon,
                  {
                    className: "w-5 h-5 flex-shrink-0",
                    style: { color: card.accentColor }
                  }
                ),
                card.pct !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: `text-xs font-semibold px-1.5 py-0.5 rounded-md ${card.bgBadge}`,
                    children: [
                      card.pct,
                      "%"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `text-3xl font-bold tabular-nums ${card.valueCls}`,
                  children: card.value
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground leading-tight", children: card.label }),
                "subtitle" in card && card.subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: card.subtitle })
              ] })
            ]
          },
          card.ocid
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: kpiFinancialCards.map((card) => {
        const Icon = card.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `bg-card rounded-xl shadow-card border border-border border-t-4 ${card.borderTop} px-5 py-4 flex items-center gap-4 hover:shadow-elevated transition-smooth`,
            "data-ocid": card.ocid,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                  style: { background: `${card.accentColor}15` },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Icon,
                    {
                      className: "w-5 h-5",
                      style: { color: card.accentColor }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-medium", children: card.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: `text-base font-bold tabular-nums mt-0.5 ${card.valueCls} break-words`,
                    children: card.value
                  }
                )
              ] }),
              "pctOfTotal" in card && card.pctOfTotal !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: `text-xs font-semibold px-2 py-1 rounded-full flex-shrink-0 ${card.bgBadge}`,
                  children: [
                    card.pctOfTotal,
                    "%"
                  ]
                }
              )
            ]
          },
          card.ocid
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "dashboard.alerts.section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionTitle, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4" }),
        "آخر التحديثات والتنبيهات"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AlertCard,
          {
            title: "مشاريع بحاجة إلى تحديث",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-amber-600" }),
            borderCls: "border-r-amber-400",
            bgCls: "bg-amber-50/60",
            items: realAlerts.notUpdated,
            renderDetail: (p) => {
              if (!p.lastUpdated) return "لا يوجد تاريخ تحديث";
              const days = Math.round(
                ((/* @__PURE__ */ new Date("2026-04-23")).getTime() - new Date(p.lastUpdated).getTime()) / (1e3 * 60 * 60 * 24)
              );
              if (days > 180) return `${Math.round(days / 30)} أشهر بدون تحديث`;
              if (days > 30) return `${Math.round(days / 7)} أسبوع بدون تحديث`;
              return `${days} يوم بدون تحديث`;
            },
            renderBadge: (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: p.status }),
            ocidPrefix: "dashboard.alerts.not-updated",
            ocid: "dashboard.alerts.not-updated.card"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AlertCard,
          {
            title: "مشاريع تعاني من نقص في الوثائق",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileWarning, { className: "w-4 h-4 text-orange-600" }),
            borderCls: "border-r-orange-400",
            bgCls: "bg-orange-50/60",
            items: realAlerts.missingDocs,
            renderDetail: (p) => {
              if (p.id === 11) return "وثائق الصرف الختامي ناقصة";
              if (p.id === 4) return "وثائق الموافقة الأمنية ناقصة";
              return "بعض الوثائق الأساسية ناقصة";
            },
            renderBadge: () => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-700 border border-orange-200 flex-shrink-0", children: "نقص في الوثائق" }),
            ocidPrefix: "dashboard.alerts.missing-docs",
            ocid: "dashboard.alerts.missing-docs.card"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AlertCard,
          {
            title: "مشاريع بانتظار إجراء أو رد",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-red-600" }),
            borderCls: "border-r-red-400",
            bgCls: "bg-red-50/60",
            items: realAlerts.pendingAction,
            renderDetail: (p) => {
              if (p.id === 7) return "بانتظار تخصيصات مالية إضافية";
              if (p.id === 5) return "بانتظار موافقة المخططات الهندسية";
              if (p.id === 12) return "بانتظار موافقة المسار";
              if (p.id === 6) return "بانتظار وصول المعدات المستوردة";
              return "بانتظار إجراء عاجل";
            },
            renderBadge: () => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700 border border-red-200 flex-shrink-0", children: "إجراء عاجل" }),
            ocidPrefix: "dashboard.alerts.pending-action",
            ocid: "dashboard.alerts.pending-action.card"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "dashboard.charts.section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionTitle, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-4 h-4" }),
        "المؤشرات البيانية"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card rounded-xl border border-border shadow-card p-5",
            "data-ocid": "dashboard.chart.status",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-primary mb-1", children: "توزيع المشاريع حسب الموقف" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-4", children: [
                stats.totalProjects,
                " مشروع — موزعة حسب الحالة الحالية"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 260, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Pie,
                  {
                    data: statusChartData,
                    cx: "50%",
                    cy: "50%",
                    innerRadius: 72,
                    outerRadius: 104,
                    paddingAngle: 3,
                    dataKey: "value",
                    children: statusChartData.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: entry.fill }, entry.name))
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(PieTooltip, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Legend,
                  {
                    iconType: "circle",
                    iconSize: 8,
                    wrapperStyle: {
                      fontSize: "11px",
                      direction: "rtl",
                      paddingTop: "8px"
                    }
                  }
                )
              ] }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card rounded-xl border border-border shadow-card p-5",
            "data-ocid": "dashboard.chart.beneficiary",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-primary mb-1", children: "توزيع المشاريع حسب الجهة المستفيدة" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "عدد المشاريع لكل جهة" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 260, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                BarChart,
                {
                  data: beneficiaryData,
                  layout: "vertical",
                  margin: { top: 4, right: 32, left: 8, bottom: 4 },
                  barCategoryGap: "18%",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CartesianGrid,
                      {
                        strokeDasharray: "3 3",
                        stroke: "oklch(0.88 0.01 0)",
                        horizontal: false
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      XAxis,
                      {
                        type: "number",
                        tick: { fontSize: 10, fill: "oklch(0.5 0 0)" },
                        axisLine: false,
                        tickLine: false,
                        allowDecimals: false,
                        domain: [0, 5]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      YAxis,
                      {
                        type: "category",
                        dataKey: "name",
                        tick: { fontSize: 10, fill: "oklch(0.35 0 0)" },
                        axisLine: false,
                        tickLine: false,
                        width: 130,
                        orientation: "right"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Tooltip,
                      {
                        formatter: (val) => [`${val} مشاريع`, "عدد المشاريع"],
                        contentStyle: { direction: "rtl", fontSize: "12px" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Bar,
                      {
                        dataKey: "count",
                        name: "عدد المشاريع",
                        radius: [0, 4, 4, 0],
                        maxBarSize: 22,
                        children: beneficiaryData.map((entry, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Cell,
                          {
                            fill: `oklch(${0.6 - idx * 0.04} 0.15 ${265 - idx * 8})`
                          },
                          entry.name
                        ))
                      }
                    )
                  ]
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card rounded-xl border border-border shadow-card p-5",
            "data-ocid": "dashboard.chart.comparison",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-primary mb-1", children: "مقارنة نسب الإنجاز مع نسب الصرف" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "أبرز 6 مشاريع حسب الكلفة" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 270, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                BarChart,
                {
                  data: comparisonData,
                  margin: { top: 8, right: 8, left: -10, bottom: 48 },
                  barCategoryGap: "22%",
                  barGap: 3,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CartesianGrid,
                      {
                        strokeDasharray: "3 3",
                        stroke: "oklch(0.88 0.01 0)",
                        vertical: false
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      XAxis,
                      {
                        dataKey: "shortName",
                        tick: { fontSize: 9, fill: "oklch(0.5 0 0)" },
                        angle: -35,
                        textAnchor: "end",
                        interval: 0,
                        axisLine: false,
                        tickLine: false,
                        height: 64
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      YAxis,
                      {
                        tickFormatter: (v) => `${v}%`,
                        tick: { fontSize: 10, fill: "oklch(0.5 0 0)" },
                        axisLine: false,
                        tickLine: false,
                        domain: [0, 110]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Tooltip,
                      {
                        content: /* @__PURE__ */ jsxRuntimeExports.jsx(ComparisonTooltip, {}),
                        cursor: { fill: "oklch(0.95 0.01 262 / 0.4)" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Legend,
                      {
                        wrapperStyle: {
                          fontSize: "11px",
                          paddingTop: "8px",
                          direction: "rtl"
                        },
                        iconType: "square",
                        iconSize: 10
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Bar,
                      {
                        dataKey: "progress",
                        name: "نسبة الإنجاز",
                        fill: "#3b82f6",
                        radius: [4, 4, 0, 0],
                        maxBarSize: 32
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Bar,
                      {
                        dataKey: "spending",
                        name: "نسبة الصرف",
                        fill: "#f59e0b",
                        radius: [4, 4, 0, 0],
                        maxBarSize: 32
                      }
                    )
                  ]
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card rounded-xl border border-border shadow-card p-5",
            "data-ocid": "dashboard.chart.progress-gauges",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-primary mb-1", children: "نسبة التقدم الإجمالية" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-6", children: "متوسط الإنجاز الموزون ونسبة الصرف الكلية لجميع المشاريع" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-around gap-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  GaugePanel,
                  {
                    value: overallProgress,
                    color: "#3b82f6",
                    label: "نسبة الإنجاز الإجمالية",
                    subLabel: "متوسط موزون — جميع المشاريع",
                    gaugeData: progressGaugeData
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-32 bg-border" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  GaugePanel,
                  {
                    value: overallSpending,
                    color: "#f59e0b",
                    label: "نسبة الصرف الإجمالية",
                    subLabel: `${formatCurrency(totalSpentCalc)} من أصل ${formatCurrency(totalCostCalc)}`,
                    gaugeData: spendingGaugeData
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-4 border-t border-border grid grid-cols-3 gap-3 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold tabular-nums text-blue-600", children: stats.continuing }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "مستمر" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold tabular-nums text-red-500", children: stats.stopped }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "متوقف" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold tabular-nums text-violet-600", children: stats.inService + stats.finalAccepted + stats.financialSettlement }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "منجز / منتهٍ" })
                ] })
              ] })
            ]
          }
        )
      ] })
    ] })
  ] });
}
export {
  DashboardPage as default
};
