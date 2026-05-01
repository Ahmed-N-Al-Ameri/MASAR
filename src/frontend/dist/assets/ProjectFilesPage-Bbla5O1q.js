import { c as createLucideIcon, o, r as reactExports, x as vt, t as getObstacles, k as getDocuments, j as jsxRuntimeExports, z as ChevronLeft, F as FolderOpen, a as cn, l as FileText, D as DollarSign, e as getProjects } from "./index-D0P90mBY.js";
import { C as CirclePlus } from "./circle-plus-CIlpzYnG.js";
import { T as TrendingUp } from "./trending-up-sej8Zq6u.js";
import { F as Folder } from "./folder-Bwq3q-WF.js";
import { C as Clock } from "./clock-CzToB0k_.js";
import { T as TriangleAlert } from "./triangle-alert-DTxpIMzu.js";
import { C as ChartNoAxesColumn } from "./chart-no-axes-column-SaYlgiRR.js";
import { C as CircleCheck } from "./circle-check-Cc45yqBS.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$6 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$6);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
];
const CircleX = createLucideIcon("circle-x", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
];
const LayoutGrid = createLucideIcon("layout-grid", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
];
const List = createLucideIcon("list", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
const RefreshCw = createLucideIcon("refresh-cw", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
  ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
];
const TrendingDown = createLucideIcon("trending-down", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
];
const Upload = createLucideIcon("upload", __iconNode);
var jt = (n) => {
  switch (n) {
    case "success":
      return ee;
    case "info":
      return ae;
    case "warning":
      return oe;
    case "error":
      return se;
    default:
      return null;
  }
}, te = Array(12).fill(0), Yt = ({ visible: n, className: e }) => o.createElement("div", { className: ["sonner-loading-wrapper", e].filter(Boolean).join(" "), "data-visible": n }, o.createElement("div", { className: "sonner-spinner" }, te.map((t, a) => o.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${a}` })))), ee = o.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, o.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), oe = o.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, o.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), ae = o.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, o.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), se = o.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, o.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), Ot = o.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, o.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), o.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }));
var Ft = () => {
  let [n, e] = o.useState(document.hidden);
  return o.useEffect(() => {
    let t = () => {
      e(document.hidden);
    };
    return document.addEventListener("visibilitychange", t), () => window.removeEventListener("visibilitychange", t);
  }, []), n;
};
var bt = 1, yt = class {
  constructor() {
    this.subscribe = (e) => (this.subscribers.push(e), () => {
      let t = this.subscribers.indexOf(e);
      this.subscribers.splice(t, 1);
    });
    this.publish = (e) => {
      this.subscribers.forEach((t) => t(e));
    };
    this.addToast = (e) => {
      this.publish(e), this.toasts = [...this.toasts, e];
    };
    this.create = (e) => {
      var S;
      let { message: t, ...a } = e, u = typeof (e == null ? void 0 : e.id) == "number" || ((S = e.id) == null ? void 0 : S.length) > 0 ? e.id : bt++, f = this.toasts.find((g) => g.id === u), w = e.dismissible === void 0 ? true : e.dismissible;
      return this.dismissedToasts.has(u) && this.dismissedToasts.delete(u), f ? this.toasts = this.toasts.map((g) => g.id === u ? (this.publish({ ...g, ...e, id: u, title: t }), { ...g, ...e, id: u, dismissible: w, title: t }) : g) : this.addToast({ title: t, ...a, dismissible: w, id: u }), u;
    };
    this.dismiss = (e) => (this.dismissedToasts.add(e), e || this.toasts.forEach((t) => {
      this.subscribers.forEach((a) => a({ id: t.id, dismiss: true }));
    }), this.subscribers.forEach((t) => t({ id: e, dismiss: true })), e);
    this.message = (e, t) => this.create({ ...t, message: e });
    this.error = (e, t) => this.create({ ...t, message: e, type: "error" });
    this.success = (e, t) => this.create({ ...t, type: "success", message: e });
    this.info = (e, t) => this.create({ ...t, type: "info", message: e });
    this.warning = (e, t) => this.create({ ...t, type: "warning", message: e });
    this.loading = (e, t) => this.create({ ...t, type: "loading", message: e });
    this.promise = (e, t) => {
      if (!t) return;
      let a;
      t.loading !== void 0 && (a = this.create({ ...t, promise: e, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 }));
      let u = e instanceof Promise ? e : e(), f = a !== void 0, w, S = u.then(async (i) => {
        if (w = ["resolve", i], o.isValidElement(i)) f = false, this.create({ id: a, type: "default", message: i });
        else if (ie(i) && !i.ok) {
          f = false;
          let T = typeof t.error == "function" ? await t.error(`HTTP error! status: ${i.status}`) : t.error, F = typeof t.description == "function" ? await t.description(`HTTP error! status: ${i.status}`) : t.description;
          this.create({ id: a, type: "error", message: T, description: F });
        } else if (t.success !== void 0) {
          f = false;
          let T = typeof t.success == "function" ? await t.success(i) : t.success, F = typeof t.description == "function" ? await t.description(i) : t.description;
          this.create({ id: a, type: "success", message: T, description: F });
        }
      }).catch(async (i) => {
        if (w = ["reject", i], t.error !== void 0) {
          f = false;
          let D = typeof t.error == "function" ? await t.error(i) : t.error, T = typeof t.description == "function" ? await t.description(i) : t.description;
          this.create({ id: a, type: "error", message: D, description: T });
        }
      }).finally(() => {
        var i;
        f && (this.dismiss(a), a = void 0), (i = t.finally) == null || i.call(t);
      }), g = () => new Promise((i, D) => S.then(() => w[0] === "reject" ? D(w[1]) : i(w[1])).catch(D));
      return typeof a != "string" && typeof a != "number" ? { unwrap: g } : Object.assign(a, { unwrap: g });
    };
    this.custom = (e, t) => {
      let a = (t == null ? void 0 : t.id) || bt++;
      return this.create({ jsx: e(a), id: a, ...t }), a;
    };
    this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id));
    this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}, v = new yt(), ne = (n, e) => {
  let t = (e == null ? void 0 : e.id) || bt++;
  return v.addToast({ title: n, ...e, id: t }), t;
}, ie = (n) => n && typeof n == "object" && "ok" in n && typeof n.ok == "boolean" && "status" in n && typeof n.status == "number", le = ne, ce = () => v.toasts, de = () => v.getActiveToasts(), ue = Object.assign(le, { success: v.success, info: v.info, warning: v.warning, error: v.error, custom: v.custom, message: v.message, promise: v.promise, dismiss: v.dismiss, loading: v.loading }, { getHistory: ce, getToasts: de });
function wt(n, { insertAt: e } = {}) {
  if (typeof document == "undefined") return;
  let t = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
  a.type = "text/css", e === "top" && t.firstChild ? t.insertBefore(a, t.firstChild) : t.appendChild(a), a.styleSheet ? a.styleSheet.cssText = n : a.appendChild(document.createTextNode(n));
}
wt(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function tt(n) {
  return n.label !== void 0;
}
var pe = 3, me = "32px", ge = "16px", Wt = 4e3, he = 356, be = 14, ye = 20, we = 200;
function M(...n) {
  return n.filter(Boolean).join(" ");
}
function xe(n) {
  let [e, t] = n.split("-"), a = [];
  return e && a.push(e), t && a.push(t), a;
}
var ve = (n) => {
  var Dt, Pt, Nt, Bt, Ct, kt, It, Mt, Ht, At, Lt;
  let { invert: e, toast: t, unstyled: a, interacting: u, setHeights: f, visibleToasts: w, heights: S, index: g, toasts: i, expanded: D, removeToast: T, defaultRichColors: F, closeButton: et, style: ut, cancelButtonStyle: ft, actionButtonStyle: l, className: ot = "", descriptionClassName: at = "", duration: X, position: st, gap: pt, loadingIcon: rt, expandByDefault: B, classNames: s, icons: P, closeButtonAriaLabel: nt = "Close toast", pauseWhenPageIsHidden: it } = n, [Y, C] = o.useState(null), [lt, J] = o.useState(null), [W, H] = o.useState(false), [A, mt] = o.useState(false), [L, z] = o.useState(false), [ct, d] = o.useState(false), [h, y] = o.useState(false), [R, j] = o.useState(0), [p, _] = o.useState(0), O = o.useRef(t.duration || X || Wt), G = o.useRef(null), k = o.useRef(null), Vt = g === 0, Ut = g + 1 <= w, N = t.type, V = t.dismissible !== false, Kt = t.className || "", Xt = t.descriptionClassName || "", dt = o.useMemo(() => S.findIndex((r) => r.toastId === t.id) || 0, [S, t.id]), Jt = o.useMemo(() => {
    var r;
    return (r = t.closeButton) != null ? r : et;
  }, [t.closeButton, et]), Tt = o.useMemo(() => t.duration || X || Wt, [t.duration, X]), gt = o.useRef(0), U = o.useRef(0), St = o.useRef(0), K = o.useRef(null), [Gt, Qt] = st.split("-"), Rt = o.useMemo(() => S.reduce((r, m, c) => c >= dt ? r : r + m.height, 0), [S, dt]), Et = Ft(), qt = t.invert || e, ht = N === "loading";
  U.current = o.useMemo(() => dt * pt + Rt, [dt, Rt]), o.useEffect(() => {
    O.current = Tt;
  }, [Tt]), o.useEffect(() => {
    H(true);
  }, []), o.useEffect(() => {
    let r = k.current;
    if (r) {
      let m = r.getBoundingClientRect().height;
      return _(m), f((c) => [{ toastId: t.id, height: m, position: t.position }, ...c]), () => f((c) => c.filter((b) => b.toastId !== t.id));
    }
  }, [f, t.id]), o.useLayoutEffect(() => {
    if (!W) return;
    let r = k.current, m = r.style.height;
    r.style.height = "auto";
    let c = r.getBoundingClientRect().height;
    r.style.height = m, _(c), f((b) => b.find((x) => x.toastId === t.id) ? b.map((x) => x.toastId === t.id ? { ...x, height: c } : x) : [{ toastId: t.id, height: c, position: t.position }, ...b]);
  }, [W, t.title, t.description, f, t.id]);
  let $ = o.useCallback(() => {
    mt(true), j(U.current), f((r) => r.filter((m) => m.toastId !== t.id)), setTimeout(() => {
      T(t);
    }, we);
  }, [t, T, f, U]);
  o.useEffect(() => {
    if (t.promise && N === "loading" || t.duration === 1 / 0 || t.type === "loading") return;
    let r;
    return D || u || it && Et ? (() => {
      if (St.current < gt.current) {
        let b = (/* @__PURE__ */ new Date()).getTime() - gt.current;
        O.current = O.current - b;
      }
      St.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      O.current !== 1 / 0 && (gt.current = (/* @__PURE__ */ new Date()).getTime(), r = setTimeout(() => {
        var b;
        (b = t.onAutoClose) == null || b.call(t, t), $();
      }, O.current));
    })(), () => clearTimeout(r);
  }, [D, u, t, N, it, Et, $]), o.useEffect(() => {
    t.delete && $();
  }, [$, t.delete]);
  function Zt() {
    var r, m, c;
    return P != null && P.loading ? o.createElement("div", { className: M(s == null ? void 0 : s.loader, (r = t == null ? void 0 : t.classNames) == null ? void 0 : r.loader, "sonner-loader"), "data-visible": N === "loading" }, P.loading) : rt ? o.createElement("div", { className: M(s == null ? void 0 : s.loader, (m = t == null ? void 0 : t.classNames) == null ? void 0 : m.loader, "sonner-loader"), "data-visible": N === "loading" }, rt) : o.createElement(Yt, { className: M(s == null ? void 0 : s.loader, (c = t == null ? void 0 : t.classNames) == null ? void 0 : c.loader), visible: N === "loading" });
  }
  return o.createElement("li", { tabIndex: 0, ref: k, className: M(ot, Kt, s == null ? void 0 : s.toast, (Dt = t == null ? void 0 : t.classNames) == null ? void 0 : Dt.toast, s == null ? void 0 : s.default, s == null ? void 0 : s[N], (Pt = t == null ? void 0 : t.classNames) == null ? void 0 : Pt[N]), "data-sonner-toast": "", "data-rich-colors": (Nt = t.richColors) != null ? Nt : F, "data-styled": !(t.jsx || t.unstyled || a), "data-mounted": W, "data-promise": !!t.promise, "data-swiped": h, "data-removed": A, "data-visible": Ut, "data-y-position": Gt, "data-x-position": Qt, "data-index": g, "data-front": Vt, "data-swiping": L, "data-dismissible": V, "data-type": N, "data-invert": qt, "data-swipe-out": ct, "data-swipe-direction": lt, "data-expanded": !!(D || B && W), style: { "--index": g, "--toasts-before": g, "--z-index": i.length - g, "--offset": `${A ? R : U.current}px`, "--initial-height": B ? "auto" : `${p}px`, ...ut, ...t.style }, onDragEnd: () => {
    z(false), C(null), K.current = null;
  }, onPointerDown: (r) => {
    ht || !V || (G.current = /* @__PURE__ */ new Date(), j(U.current), r.target.setPointerCapture(r.pointerId), r.target.tagName !== "BUTTON" && (z(true), K.current = { x: r.clientX, y: r.clientY }));
  }, onPointerUp: () => {
    var x, Q, q, Z;
    if (ct || !V) return;
    K.current = null;
    let r = Number(((x = k.current) == null ? void 0 : x.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), m = Number(((Q = k.current) == null ? void 0 : Q.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), c = (/* @__PURE__ */ new Date()).getTime() - ((q = G.current) == null ? void 0 : q.getTime()), b = Y === "x" ? r : m, I = Math.abs(b) / c;
    if (Math.abs(b) >= ye || I > 0.11) {
      j(U.current), (Z = t.onDismiss) == null || Z.call(t, t), J(Y === "x" ? r > 0 ? "right" : "left" : m > 0 ? "down" : "up"), $(), d(true), y(false);
      return;
    }
    z(false), C(null);
  }, onPointerMove: (r) => {
    var Q, q, Z, zt;
    if (!K.current || !V || ((Q = window.getSelection()) == null ? void 0 : Q.toString().length) > 0) return;
    let c = r.clientY - K.current.y, b = r.clientX - K.current.x, I = (q = n.swipeDirections) != null ? q : xe(st);
    !Y && (Math.abs(b) > 1 || Math.abs(c) > 1) && C(Math.abs(b) > Math.abs(c) ? "x" : "y");
    let x = { x: 0, y: 0 };
    Y === "y" ? (I.includes("top") || I.includes("bottom")) && (I.includes("top") && c < 0 || I.includes("bottom") && c > 0) && (x.y = c) : Y === "x" && (I.includes("left") || I.includes("right")) && (I.includes("left") && b < 0 || I.includes("right") && b > 0) && (x.x = b), (Math.abs(x.x) > 0 || Math.abs(x.y) > 0) && y(true), (Z = k.current) == null || Z.style.setProperty("--swipe-amount-x", `${x.x}px`), (zt = k.current) == null || zt.style.setProperty("--swipe-amount-y", `${x.y}px`);
  } }, Jt && !t.jsx ? o.createElement("button", { "aria-label": nt, "data-disabled": ht, "data-close-button": true, onClick: ht || !V ? () => {
  } : () => {
    var r;
    $(), (r = t.onDismiss) == null || r.call(t, t);
  }, className: M(s == null ? void 0 : s.closeButton, (Bt = t == null ? void 0 : t.classNames) == null ? void 0 : Bt.closeButton) }, (Ct = P == null ? void 0 : P.close) != null ? Ct : Ot) : null, t.jsx || reactExports.isValidElement(t.title) ? t.jsx ? t.jsx : typeof t.title == "function" ? t.title() : t.title : o.createElement(o.Fragment, null, N || t.icon || t.promise ? o.createElement("div", { "data-icon": "", className: M(s == null ? void 0 : s.icon, (kt = t == null ? void 0 : t.classNames) == null ? void 0 : kt.icon) }, t.promise || t.type === "loading" && !t.icon ? t.icon || Zt() : null, t.type !== "loading" ? t.icon || (P == null ? void 0 : P[N]) || jt(N) : null) : null, o.createElement("div", { "data-content": "", className: M(s == null ? void 0 : s.content, (It = t == null ? void 0 : t.classNames) == null ? void 0 : It.content) }, o.createElement("div", { "data-title": "", className: M(s == null ? void 0 : s.title, (Mt = t == null ? void 0 : t.classNames) == null ? void 0 : Mt.title) }, typeof t.title == "function" ? t.title() : t.title), t.description ? o.createElement("div", { "data-description": "", className: M(at, Xt, s == null ? void 0 : s.description, (Ht = t == null ? void 0 : t.classNames) == null ? void 0 : Ht.description) }, typeof t.description == "function" ? t.description() : t.description) : null), reactExports.isValidElement(t.cancel) ? t.cancel : t.cancel && tt(t.cancel) ? o.createElement("button", { "data-button": true, "data-cancel": true, style: t.cancelButtonStyle || ft, onClick: (r) => {
    var m, c;
    tt(t.cancel) && V && ((c = (m = t.cancel).onClick) == null || c.call(m, r), $());
  }, className: M(s == null ? void 0 : s.cancelButton, (At = t == null ? void 0 : t.classNames) == null ? void 0 : At.cancelButton) }, t.cancel.label) : null, reactExports.isValidElement(t.action) ? t.action : t.action && tt(t.action) ? o.createElement("button", { "data-button": true, "data-action": true, style: t.actionButtonStyle || l, onClick: (r) => {
    var m, c;
    tt(t.action) && ((c = (m = t.action).onClick) == null || c.call(m, r), !r.defaultPrevented && $());
  }, className: M(s == null ? void 0 : s.actionButton, (Lt = t == null ? void 0 : t.classNames) == null ? void 0 : Lt.actionButton) }, t.action.label) : null));
};
function _t() {
  if (typeof window == "undefined" || typeof document == "undefined") return "ltr";
  let n = document.documentElement.getAttribute("dir");
  return n === "auto" || !n ? window.getComputedStyle(document.documentElement).direction : n;
}
function Te(n, e) {
  let t = {};
  return [n, e].forEach((a, u) => {
    let f = u === 1, w = f ? "--mobile-offset" : "--offset", S = f ? ge : me;
    function g(i) {
      ["top", "right", "bottom", "left"].forEach((D) => {
        t[`${w}-${D}`] = typeof i == "number" ? `${i}px` : i;
      });
    }
    typeof a == "number" || typeof a == "string" ? g(a) : typeof a == "object" ? ["top", "right", "bottom", "left"].forEach((i) => {
      a[i] === void 0 ? t[`${w}-${i}`] = S : t[`${w}-${i}`] = typeof a[i] == "number" ? `${a[i]}px` : a[i];
    }) : g(S);
  }), t;
}
reactExports.forwardRef(function(e, t) {
  let { invert: a, position: u = "bottom-right", hotkey: f = ["altKey", "KeyT"], expand: w, closeButton: S, className: g, offset: i, mobileOffset: D, theme: T = "light", richColors: F, duration: et, style: ut, visibleToasts: ft = pe, toastOptions: l, dir: ot = _t(), gap: at = be, loadingIcon: X, icons: st, containerAriaLabel: pt = "Notifications", pauseWhenPageIsHidden: rt } = e, [B, s] = o.useState([]), P = o.useMemo(() => Array.from(new Set([u].concat(B.filter((d) => d.position).map((d) => d.position)))), [B, u]), [nt, it] = o.useState([]), [Y, C] = o.useState(false), [lt, J] = o.useState(false), [W, H] = o.useState(T !== "system" ? T : typeof window != "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), A = o.useRef(null), mt = f.join("+").replace(/Key/g, "").replace(/Digit/g, ""), L = o.useRef(null), z = o.useRef(false), ct = o.useCallback((d) => {
    s((h) => {
      var y;
      return (y = h.find((R) => R.id === d.id)) != null && y.delete || v.dismiss(d.id), h.filter(({ id: R }) => R !== d.id);
    });
  }, []);
  return o.useEffect(() => v.subscribe((d) => {
    if (d.dismiss) {
      s((h) => h.map((y) => y.id === d.id ? { ...y, delete: true } : y));
      return;
    }
    setTimeout(() => {
      vt.flushSync(() => {
        s((h) => {
          let y = h.findIndex((R) => R.id === d.id);
          return y !== -1 ? [...h.slice(0, y), { ...h[y], ...d }, ...h.slice(y + 1)] : [d, ...h];
        });
      });
    });
  }), []), o.useEffect(() => {
    if (T !== "system") {
      H(T);
      return;
    }
    if (T === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? H("dark") : H("light")), typeof window == "undefined") return;
    let d = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      d.addEventListener("change", ({ matches: h }) => {
        H(h ? "dark" : "light");
      });
    } catch (h) {
      d.addListener(({ matches: y }) => {
        try {
          H(y ? "dark" : "light");
        } catch (R) {
          console.error(R);
        }
      });
    }
  }, [T]), o.useEffect(() => {
    B.length <= 1 && C(false);
  }, [B]), o.useEffect(() => {
    let d = (h) => {
      var R, j;
      f.every((p) => h[p] || h.code === p) && (C(true), (R = A.current) == null || R.focus()), h.code === "Escape" && (document.activeElement === A.current || (j = A.current) != null && j.contains(document.activeElement)) && C(false);
    };
    return document.addEventListener("keydown", d), () => document.removeEventListener("keydown", d);
  }, [f]), o.useEffect(() => {
    if (A.current) return () => {
      L.current && (L.current.focus({ preventScroll: true }), L.current = null, z.current = false);
    };
  }, [A.current]), o.createElement("section", { ref: t, "aria-label": `${pt} ${mt}`, tabIndex: -1, "aria-live": "polite", "aria-relevant": "additions text", "aria-atomic": "false", suppressHydrationWarning: true }, P.map((d, h) => {
    var j;
    let [y, R] = d.split("-");
    return B.length ? o.createElement("ol", { key: d, dir: ot === "auto" ? _t() : ot, tabIndex: -1, ref: A, className: g, "data-sonner-toaster": true, "data-theme": W, "data-y-position": y, "data-lifted": Y && B.length > 1 && !w, "data-x-position": R, style: { "--front-toast-height": `${((j = nt[0]) == null ? void 0 : j.height) || 0}px`, "--width": `${he}px`, "--gap": `${at}px`, ...ut, ...Te(i, D) }, onBlur: (p) => {
      z.current && !p.currentTarget.contains(p.relatedTarget) && (z.current = false, L.current && (L.current.focus({ preventScroll: true }), L.current = null));
    }, onFocus: (p) => {
      p.target instanceof HTMLElement && p.target.dataset.dismissible === "false" || z.current || (z.current = true, L.current = p.relatedTarget);
    }, onMouseEnter: () => C(true), onMouseMove: () => C(true), onMouseLeave: () => {
      lt || C(false);
    }, onDragEnd: () => C(false), onPointerDown: (p) => {
      p.target instanceof HTMLElement && p.target.dataset.dismissible === "false" || J(true);
    }, onPointerUp: () => J(false) }, B.filter((p) => !p.position && h === 0 || p.position === d).map((p, _) => {
      var O, G;
      return o.createElement(ve, { key: p.id, icons: st, index: _, toast: p, defaultRichColors: F, duration: (O = l == null ? void 0 : l.duration) != null ? O : et, className: l == null ? void 0 : l.className, descriptionClassName: l == null ? void 0 : l.descriptionClassName, invert: a, visibleToasts: ft, closeButton: (G = l == null ? void 0 : l.closeButton) != null ? G : S, interacting: lt, position: d, style: l == null ? void 0 : l.style, unstyled: l == null ? void 0 : l.unstyled, classNames: l == null ? void 0 : l.classNames, cancelButtonStyle: l == null ? void 0 : l.cancelButtonStyle, actionButtonStyle: l == null ? void 0 : l.actionButtonStyle, removeToast: ct, toasts: B.filter((k) => k.position == p.position), heights: nt.filter((k) => k.position == p.position), setHeights: it, expandByDefault: w, gap: at, loadingIcon: X, expanded: Y, pauseWhenPageIsHidden: rt, swipeDirections: e.swipeDirections });
    })) : null;
  }));
});
const projectComponents = {
  1: [
    {
      name: "خط نقل المياه الرئيسي",
      contractor: "شركة المياه المتحدة",
      status: "مستمر",
      plannedProgress: 70,
      actualProgress: 65,
      contractCost: 28e7,
      startDate: "2024-01-15",
      duration: "18 شهراً"
    },
    {
      name: "محطة الضخ الفرعية",
      contractor: "شركة الهندسة الكهربائية",
      status: "مستمر",
      plannedProgress: 60,
      actualProgress: 58,
      contractCost: 95e6,
      startDate: "2024-03-01",
      duration: "12 شهراً"
    },
    {
      name: "شبكة التوزيع المحلية",
      contractor: "مؤسسة البناء الحديث",
      status: "لم يباشر به",
      plannedProgress: 0,
      actualProgress: 0,
      contractCost: 75e6,
      startDate: "2024-09-01",
      duration: "10 أشهر"
    }
  ],
  2: [
    {
      name: "الطريق الرئيسي - المقطع الأول",
      contractor: "شركة الطرق الحديثة",
      status: "متوقف",
      plannedProgress: 55,
      actualProgress: 40,
      contractCost: 52e7,
      startDate: "2023-08-01",
      duration: "24 شهراً"
    },
    {
      name: "جسر التقاطع الشمالي",
      contractor: "شركة الجسور والأنفاق",
      status: "غير موقع",
      plannedProgress: 0,
      actualProgress: 0,
      contractCost: 3e8,
      startDate: "",
      duration: "18 شهراً"
    }
  ],
  3: [
    {
      name: "مبنى المركز الرئيسي",
      contractor: "مجموعة الإنشاءات الصحية",
      status: "استلام نهائي",
      plannedProgress: 100,
      actualProgress: 100,
      contractCost: 2e8,
      startDate: "2022-03-01",
      duration: "30 شهراً"
    },
    {
      name: "الأجهزة الطبية والتجهيزات",
      contractor: "شركة المعدات الطبية",
      status: "منجز تام",
      plannedProgress: 100,
      actualProgress: 100,
      contractCost: 12e7,
      startDate: "2023-06-01",
      duration: "12 شهراً"
    }
  ],
  4: [
    {
      name: "منظومة الألواح الشمسية",
      contractor: "شركة الطاقة الخضراء",
      status: "مستمر",
      plannedProgress: 85,
      actualProgress: 78,
      contractCost: 42e7,
      startDate: "2024-02-01",
      duration: "20 شهراً"
    },
    {
      name: "نظام تخزين الطاقة",
      contractor: "شركة التقنيات المتقدمة",
      status: "مستمر",
      plannedProgress: 70,
      actualProgress: 68,
      contractCost: 23e7,
      startDate: "2024-04-01",
      duration: "16 شهراً"
    }
  ],
  5: [
    {
      name: "المبنى الدراسي الرئيسي",
      contractor: "شركة التشييد التعليمي",
      status: "متوقف",
      plannedProgress: 45,
      actualProgress: 35,
      contractCost: 13e7,
      startDate: "2024-05-01",
      duration: "18 شهراً"
    },
    {
      name: "الملاعب والمرافق الرياضية",
      contractor: "شركة المنشآت الرياضية",
      status: "لم يباشر به",
      plannedProgress: 0,
      actualProgress: 0,
      contractCost: 5e7,
      startDate: "",
      duration: "8 أشهر"
    }
  ],
  6: [
    {
      name: "الأرصفة البحرية - المرحلة الأولى",
      contractor: "مجموعة البناء البحري",
      status: "مستمر",
      plannedProgress: 60,
      actualProgress: 55,
      contractCost: 75e7,
      startDate: "2023-06-01",
      duration: "36 شهراً"
    },
    {
      name: "المباني الإدارية والخدمية",
      contractor: "شركة الإنشاءات التجارية",
      status: "مستمر",
      plannedProgress: 45,
      actualProgress: 40,
      contractCost: 45e7,
      startDate: "2023-10-01",
      duration: "30 شهراً"
    }
  ],
  7: [
    {
      name: "خط الصرف الرئيسي",
      contractor: "شركة البيئة والصرف",
      status: "تسوية مالية",
      plannedProgress: 15,
      actualProgress: 10,
      contractCost: 18e7,
      startDate: "2025-01-01",
      duration: "18 شهراً"
    },
    {
      name: "محطة المعالجة",
      contractor: "غير محدد",
      status: "غير موقع",
      plannedProgress: 0,
      actualProgress: 0,
      contractCost: 11e7,
      startDate: "",
      duration: "24 شهراً"
    }
  ],
  8: [
    {
      name: "التشجير وتجهيز التربة",
      contractor: "شركة التشجير والبيئة",
      status: "داخل للخدمة",
      plannedProgress: 100,
      actualProgress: 100,
      contractCost: 55e6,
      startDate: "2022-09-01",
      duration: "18 شهراً"
    },
    {
      name: "الممرات والبنية التحتية",
      contractor: "شركة البناء الحضري",
      status: "منجز تام",
      plannedProgress: 100,
      actualProgress: 100,
      contractCost: 4e7,
      startDate: "2022-09-01",
      duration: "12 شهراً"
    }
  ]
};
const projectUpdates = {
  1: [
    {
      date: "2026-04-10",
      type: "تحديث الإنجاز",
      desc: "تحديث نسبة إنجاز خط نقل المياه الرئيسي إلى 65%",
      by: "شعبة المتابعة",
      actionBy: "شعبة التنفيذ"
    },
    {
      date: "2026-03-28",
      type: "استلام كتاب",
      desc: "استلام كتاب من شركة المياه المتحدة بشأن جدول تسليم المواد",
      by: "وحدة التقارير",
      actionBy: "الشركة المنفذة"
    },
    {
      date: "2026-03-15",
      type: "إجراء مكتمل",
      desc: "إكمال اختبارات الضغط للمرحلة الأولى من الخط الرئيسي",
      by: "شعبة الجودة",
      actionBy: "شعبة المتابعة"
    }
  ],
  2: [
    {
      date: "2026-03-20",
      type: "تسجيل معوق",
      desc: "توقف الأعمال بسبب اكتشاف آثار أثرية في موقع الحفر",
      by: "شعبة الإحصاء",
      actionBy: "هيئة الآثار"
    },
    {
      date: "2026-02-28",
      type: "تحديث الإنجاز",
      desc: "تحديث نسبة إنجاز المقطع الأول من الطريق إلى 40%",
      by: "شعبة المتابعة",
      actionBy: "شعبة التنفيذ"
    }
  ],
  3: [
    {
      date: "2024-08-30",
      type: "استلام نهائي",
      desc: "إتمام الاستلام النهائي للمشروع وتسليمه للجهة المستفيدة",
      by: "لجنة الاستلام",
      actionBy: "وزارة الصحة"
    },
    {
      date: "2024-07-15",
      type: "إجراء مكتمل",
      desc: "انتهاء فترة الضمان وإصدار شهادة الإنجاز النهائية",
      by: "شعبة الجودة",
      actionBy: "الشركة المنفذة"
    }
  ],
  4: [
    {
      date: "2026-04-15",
      type: "تحديث الإنجاز",
      desc: "تحديث نسبة إنجاز منظومة الألواح الشمسية إلى 78%",
      by: "شعبة المتابعة",
      actionBy: "شعبة التنفيذ"
    },
    {
      date: "2026-04-01",
      type: "استلام كتاب",
      desc: "استلام شهادة اختبار الدفعة الثالثة من الألواح الشمسية",
      by: "وحدة التقارير",
      actionBy: "الشركة المنفذة"
    }
  ],
  5: [
    {
      date: "2026-02-05",
      type: "تسجيل معوق",
      desc: "توقف العمل بسبب نزاع على حدود قطعة الأرض",
      by: "شعبة المتابعة",
      actionBy: "البلدية المختصة"
    },
    {
      date: "2026-01-20",
      type: "استلام كتاب",
      desc: "استلام كتاب من وزارة التعليم بشأن الموقف من استئناف العمل",
      by: "وحدة التقارير",
      actionBy: "وزارة التعليم"
    }
  ],
  6: [
    {
      date: "2026-04-01",
      type: "تحديث الإنجاز",
      desc: "تحديث نسبة إنجاز المرحلة الأولى من الأرصفة البحرية إلى 55%",
      by: "شعبة المتابعة",
      actionBy: "شعبة التنفيذ"
    },
    {
      date: "2026-03-10",
      type: "إجراء مكتمل",
      desc: "اعتماد المخططات التفصيلية للمرحلة الثانية من المباني",
      by: "شعبة الهندسة",
      actionBy: "الهيئة العامة للموانئ"
    }
  ],
  7: [
    {
      date: "2025-12-15",
      type: "تسجيل معوق",
      desc: "تسجيل معوق قلة التخصيصات المالية للسنة 2026",
      by: "شعبة الإحصاء",
      actionBy: "وزارة النفط"
    },
    {
      date: "2025-11-20",
      type: "استلام كتاب",
      desc: "استلام كتاب من البلدية بشأن تأخر إجراءات نزع الملكية",
      by: "وحدة التقارير",
      actionBy: "بلدية المدينة المنورة"
    }
  ],
  8: [
    {
      date: "2024-03-31",
      type: "استلام نهائي",
      desc: "إتمام الاستلام النهائي للحديقة وتسليمها لأمانة الرياض",
      by: "لجنة الاستلام",
      actionBy: "أمانة منطقة الرياض"
    },
    {
      date: "2024-02-15",
      type: "إجراء مكتمل",
      desc: "إتمام زراعة جميع المساحات الخضراء وتشغيل نظام الري",
      by: "شعبة الجودة",
      actionBy: "شعبة التنفيذ"
    }
  ]
};
const componentStatusConfig = {
  مستمر: {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-200"
  },
  متوقف: { bg: "bg-red-50", text: "text-red-700", border: "border-red-200" },
  "داخل للخدمة": {
    bg: "bg-cyan-50",
    text: "text-cyan-700",
    border: "border-cyan-200"
  },
  "استلام نهائي": {
    bg: "bg-purple-50",
    text: "text-purple-700",
    border: "border-purple-200"
  },
  "منجز تام": {
    bg: "bg-green-50",
    text: "text-green-700",
    border: "border-green-200"
  },
  "غير موقع": {
    bg: "bg-orange-50",
    text: "text-orange-700",
    border: "border-orange-200"
  },
  "تسوية مالية": {
    bg: "bg-yellow-50",
    text: "text-yellow-700",
    border: "border-yellow-200"
  },
  "متعلقات مالية": {
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-200"
  },
  "لم يباشر به": {
    bg: "bg-muted",
    text: "text-muted-foreground",
    border: "border-border"
  }
};
function ComponentStatusBadge({ status }) {
  const cfg = componentStatusConfig[status] ?? {
    bg: "bg-muted",
    text: "text-muted-foreground",
    border: "border-border"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: cn(
        "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border",
        cfg.bg,
        cfg.text,
        cfg.border
      ),
      children: status
    }
  );
}
function formatCost(val) {
  if (val >= 1e9) return `${(val / 1e9).toFixed(2)} مليار دينار`;
  if (val >= 1e6) return `${(val / 1e6).toFixed(0)} مليون دينار`;
  return `${val.toLocaleString("ar-IQ")} دينار`;
}
const FOLDER_LABELS = [
  { key: "Study", label: "إضبارة الدراسة", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 20 }) },
  { key: "Contract", label: "إضبارة العقد", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 20 }) },
  { key: "Execution", label: "إضبارة التنفيذ", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 20 }) },
  {
    key: "Correspondence",
    label: "إضبارة المخاطبات",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 20 })
  },
  {
    key: "Disbursement",
    label: "إضبارة الصرف",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { size: 20 })
  }
];
const UPDATE_ICONS = {
  "تحديث الإنجاز": /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 14, className: "text-emerald-600" }),
  "استلام كتاب": /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 14, className: "text-blue-600" }),
  "تسجيل معوق": /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { size: 14, className: "text-red-600" }),
  "إجراء مكتمل": /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 14, className: "text-purple-600" }),
  "استلام نهائي": /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 14, className: "text-green-600" })
};
function getObstacleStatusLabel(s) {
  if (s === "Open")
    return {
      label: "مفتوح",
      cls: "bg-red-50 text-red-700 border-red-200"
    };
  if (s === "InProgress")
    return {
      label: "قيد المعالجة",
      cls: "bg-amber-50 text-amber-700 border-amber-200"
    };
  return {
    label: "تم الحل",
    cls: "bg-emerald-50 text-emerald-700 border-emerald-200"
  };
}
function CircularProgress({
  value,
  size = 80
}) {
  const r = (size - 10) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - value / 100 * circ;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      width: size,
      height: size,
      className: "-rotate-90",
      "aria-label": `${value}%`,
      role: "img",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: size / 2,
            cy: size / 2,
            r,
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "6",
            className: "text-muted/30"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: size / 2,
            cy: size / 2,
            r,
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "6",
            strokeDasharray: circ,
            strokeDashoffset: offset,
            strokeLinecap: "round",
            className: value >= 70 ? "text-emerald-500" : value >= 40 ? "text-amber-500" : "text-red-500"
          }
        )
      ]
    }
  );
}
const projectStatusMap = {
  OnTrack: {
    label: "قيد التنفيذ",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-200"
  },
  Delayed: {
    label: "متأخر",
    bg: "bg-red-50",
    text: "text-red-700",
    border: "border-red-200"
  },
  Completed: {
    label: "مكتمل",
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200"
  },
  Pending: {
    label: "قيد الانتظار",
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-200"
  }
};
function ProjectStatusPill({ status }) {
  const cfg = projectStatusMap[status] ?? {
    label: status,
    bg: "bg-muted",
    text: "text-muted-foreground",
    border: "border-border"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border",
        cfg.bg,
        cfg.text,
        cfg.border
      ),
      children: cfg.label
    }
  );
}
const TABS = [
  { id: "summary", label: "ملخص المشروع", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { size: 15 }) },
  { id: "components", label: "المكونات والعقود", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(List, { size: 15 }) },
  {
    id: "documents",
    label: "الوثائق والإضابير",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { size: 15 })
  },
  {
    id: "updates",
    label: "التحديثات والمعوقات",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 15 })
  },
  { id: "financial", label: "البيانات المالية", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { size: 15 }) }
];
function ProjectFilesPage() {
  var _a;
  const allProjects = getProjects();
  const [selectedProjectId, setSelectedProjectId] = reactExports.useState(
    null
  );
  const [activeTab, setActiveTab] = reactExports.useState("summary");
  const [filterStatus, setFilterStatus] = reactExports.useState("");
  const [filterType, setFilterType] = reactExports.useState("");
  const [filterLocation, setFilterLocation] = reactExports.useState("");
  const [filterYear, setFilterYear] = reactExports.useState("");
  const [openFolder, setOpenFolder] = reactExports.useState(null);
  const selectedProject = allProjects.find((p) => p.id === selectedProjectId);
  const components = selectedProjectId ? projectComponents[selectedProjectId] ?? [] : [];
  const updates = selectedProjectId ? projectUpdates[selectedProjectId] ?? [] : [];
  const obstacles = selectedProjectId ? getObstacles(selectedProjectId) : [];
  const documents = selectedProjectId ? getDocuments(selectedProjectId) : [];
  const statuses = [...new Set(allProjects.map((p) => p.status))];
  const types = [...new Set(allProjects.map((p) => p.projectType))];
  const locations = [...new Set(allProjects.map((p) => p.location))];
  const years = [...new Set(allProjects.map((p) => p.year))].sort(
    (a, b) => b - a
  );
  const filtered = allProjects.filter((p) => {
    if (filterStatus && p.status !== filterStatus) return false;
    if (filterType && p.projectType !== filterType) return false;
    if (filterLocation && p.location !== filterLocation) return false;
    if (filterYear && p.year !== Number(filterYear)) return false;
    return true;
  });
  function openProject(id) {
    setSelectedProjectId(id);
    setActiveTab("summary");
    setOpenFolder(null);
  }
  function backToList() {
    setSelectedProjectId(null);
    setOpenFolder(null);
  }
  function handleComingSoon() {
    ue.info("هذه الميزة قيد التطوير وستكون متاحة قريباً");
  }
  if (selectedProject) {
    const comps = components;
    const totalCost = selectedProject.totalCost;
    const spent = selectedProject.spent;
    const remaining = totalCost - spent;
    const spentPct = totalCost > 0 ? Math.round(spent / totalCost * 100) : 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", dir: "rtl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: backToList,
            className: "flex items-center gap-1.5 text-primary hover:underline font-medium",
            "data-ocid": "project-files.back_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 }),
              "ملفات المشاريع"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 13, className: "text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold truncate max-w-xs", children: selectedProject.name })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl p-5 shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { size: 22, className: "text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded", children: [
                "#",
                selectedProject.id
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectStatusPill, { status: selectedProject.status })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-black text-foreground leading-tight", children: selectedProject.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-0.5", children: [
              selectedProject.location,
              " — ",
              selectedProject.projectType,
              " — سنة ",
              selectedProject.year
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handleComingSoon,
            className: "flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors",
            "data-ocid": "project-files.edit_button",
            children: "تعديل الملف"
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex border-b border-border overflow-x-auto", children: TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setActiveTab(tab.id),
            className: cn(
              "flex items-center gap-2 px-5 py-3.5 text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-px",
              activeTab === tab.id ? "border-primary text-primary bg-primary/5" : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"
            ),
            "data-ocid": `project-files.tab.${tab.id}`,
            children: [
              tab.icon,
              tab.label
            ]
          },
          tab.id
        )) }),
        activeTab === "summary" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-6 space-y-6",
            "data-ocid": "project-files.summary.panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-border rounded-xl p-4 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "الكلفة الكلية" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-black text-foreground leading-snug", children: formatCost(totalCost) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-border rounded-xl p-4 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "المصروف التراكمي" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-black text-blue-600 leading-snug", children: formatCost(spent) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-border rounded-xl p-4 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "المبلغ المتبقي" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-black text-amber-600 leading-snug", children: formatCost(remaining) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-border rounded-xl p-4 flex flex-col items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "نسبة الإنجاز" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CircularProgress,
                      {
                        value: selectedProject.progress,
                        size: 72
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute text-sm font-black text-foreground", children: [
                      selectedProject.progress,
                      "%"
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                { label: "اسم المشروع", value: selectedProject.name },
                { label: "نوع المشروع", value: selectedProject.projectType },
                { label: "موقع المشروع", value: selectedProject.location },
                {
                  label: "سنة الإدراج",
                  value: String(selectedProject.year)
                },
                {
                  label: "الجهة المستفيدة",
                  value: selectedProject.beneficiary ?? "—"
                },
                {
                  label: "الجهة المنفذة",
                  value: selectedProject.contractor ?? "—"
                },
                {
                  label: "تاريخ المباشرة",
                  value: selectedProject.startDate
                },
                {
                  label: "تاريخ الإنجاز المتوقع",
                  value: selectedProject.endDate
                },
                {
                  label: "رقم العقد",
                  value: selectedProject.contractNumber ?? "—"
                },
                {
                  label: "آخر تحديث",
                  value: selectedProject.lastUpdated ?? "—"
                }
              ].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex gap-3 bg-muted/30 rounded-lg p-3",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-muted-foreground w-36 flex-shrink-0", children: row.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground font-medium", children: row.value })
                  ]
                },
                row.label
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 rounded-xl p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground mb-2", children: "الوصف الموجز" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground leading-relaxed", children: [
                  "مشروع ",
                  selectedProject.projectType,
                  ' لخدمة الجهة المستفيدة "',
                  selectedProject.beneficiary ?? "غير محدد",
                  '" في منطقة',
                  " ",
                  selectedProject.location,
                  "، بكلفة إجمالية",
                  " ",
                  formatCost(totalCost),
                  " ونسبة إنجاز حالية",
                  " ",
                  selectedProject.progress,
                  "%."
                ] })
              ] })
            ]
          }
        ),
        activeTab === "components" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-6 space-y-4",
            "data-ocid": "project-files.components.panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-foreground text-sm", children: [
                  "المكونات والعقود التابعة للمشروع (",
                  comps.length,
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: handleComingSoon,
                    className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold hover:bg-primary/20 transition-colors",
                    "data-ocid": "project-files.add_component.button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { size: 14 }),
                      "إضافة مكون"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-xl border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-muted/50 text-right", children: [
                  "اسم المكون/العقد",
                  "الشركة المنفذة",
                  "الموقف الحالي",
                  "الإنجاز المخطط",
                  "إنجاز تقدم العمل",
                  "الانحراف",
                  "مدة المشروع",
                  "مجموع الكلفة"
                ].map((col) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "th",
                  {
                    className: "px-4 py-3 text-xs font-bold text-muted-foreground border-b border-border",
                    children: col
                  },
                  col
                )) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: comps.map((comp, i) => {
                  const deviation = comp.plannedProgress - comp.actualProgress;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "tr",
                    {
                      className: cn(
                        "border-b border-border/60 hover:bg-muted/30 transition-colors",
                        i % 2 === 1 ? "bg-muted/10" : "bg-background"
                      ),
                      "data-ocid": `project-files.component.item.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-semibold text-foreground", children: comp.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: comp.contractor }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ComponentStatusBadge, { status: comp.status }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-center text-muted-foreground", children: [
                          comp.plannedProgress,
                          "%"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-muted rounded-full h-1.5 min-w-[60px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "h-1.5 rounded-full bg-primary",
                              style: {
                                width: `${comp.actualProgress}%`
                              }
                            }
                          ) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-foreground w-8", children: [
                            comp.actualProgress,
                            "%"
                          ] })
                        ] }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            className: cn(
                              "flex items-center justify-center gap-1 text-xs font-bold",
                              deviation > 0 ? "text-emerald-600" : deviation < 0 ? "text-red-600" : "text-muted-foreground"
                            ),
                            children: [
                              deviation > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 12 }) : deviation < 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { size: 12 }) : null,
                              deviation > 0 ? "+" : "",
                              deviation,
                              "%"
                            ]
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground text-center", children: comp.duration }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-left font-semibold text-foreground", children: formatCost(comp.contractCost) })
                      ]
                    },
                    `comp-${comp.name}`
                  );
                }) })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground bg-muted/40 rounded-lg px-4 py-2.5 border border-border", children: "📌 البيانات التفصيلية تُحدَّث بصورة دورية من الشعب المختصة" })
            ]
          }
        ),
        activeTab === "documents" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-6 space-y-4",
            "data-ocid": "project-files.documents.panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground text-sm", children: "الإضابير والوثائق" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: handleComingSoon,
                    className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold hover:bg-primary/20 transition-colors",
                    "data-ocid": "project-files.upload_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 14 }),
                      "رفع وثيقة"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3", children: FOLDER_LABELS.map((folder) => {
                const count = documents.filter(
                  (d) => d.folder === folder.key
                ).length;
                const isOpen = openFolder === folder.key;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setOpenFolder(isOpen ? null : folder.key),
                    className: cn(
                      "flex flex-col items-center gap-2 p-4 rounded-xl border transition-all text-center",
                      isOpen ? "bg-primary/10 border-primary/40 shadow-sm" : "bg-background border-border hover:bg-muted/40"
                    ),
                    "data-ocid": `project-files.folder.${folder.key.toLowerCase()}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: cn(
                            isOpen ? "text-primary" : "text-muted-foreground"
                          ),
                          children: isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { size: 32 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { size: 32 })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground leading-tight", children: folder.label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full", children: [
                        count,
                        " وثيقة"
                      ] })
                    ]
                  },
                  folder.key
                );
              }) }),
              openFolder && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-xl overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 bg-muted/40 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: (_a = FOLDER_LABELS.find((f) => f.key === openFolder)) == null ? void 0 : _a.label }) }),
                documents.filter((d) => d.folder === openFolder).length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "p-8 text-center text-muted-foreground text-sm",
                    "data-ocid": "project-files.documents.empty_state",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { size: 32, className: "mx-auto mb-2 opacity-30" }),
                      "لا توجد وثائق في هذه الإضبارة بعد"
                    ]
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border", children: documents.filter((d) => d.folder === openFolder).map((doc) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "li",
                  {
                    className: "flex items-center gap-3 px-4 py-3 hover:bg-muted/30 transition-colors",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        FileText,
                        {
                          size: 16,
                          className: "text-primary flex-shrink-0"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground truncate", children: doc.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                          doc.docNumber,
                          " — ",
                          doc.date
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: handleComingSoon,
                          className: "text-xs text-primary hover:underline flex-shrink-0",
                          children: "عرض"
                        }
                      )
                    ]
                  },
                  doc.id
                )) })
              ] })
            ]
          }
        ),
        activeTab === "updates" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-6 space-y-6",
            "data-ocid": "project-files.updates.panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground text-sm", children: "آخر التحديثات والمعوقات" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: handleComingSoon,
                    className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold hover:bg-primary/20 transition-colors",
                    "data-ocid": "project-files.add_update.button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { size: 14 }),
                      "تسجيل تحديث جديد"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3", children: "آخر التحديثات" }),
                updates.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "text-center py-8 text-muted-foreground text-sm",
                    "data-ocid": "project-files.updates.empty_state",
                    children: "لا توجد تحديثات مسجلة"
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: updates.map((upd, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex gap-3 bg-muted/20 border border-border rounded-xl p-4 hover:bg-muted/40 transition-colors",
                    "data-ocid": `project-files.update.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5", children: UPDATE_ICONS[upd.type] ?? /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Clock,
                        {
                          size: 14,
                          className: "text-muted-foreground"
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded", children: upd.type }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: upd.date })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-snug", children: upd.desc }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                          "بواسطة: ",
                          upd.by,
                          " — ينتظر رد:",
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: upd.actionBy })
                        ] })
                      ] })
                    ]
                  },
                  `upd-${upd.date}-${i}`
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3", children: "المعوقات المسجلة" }),
                obstacles.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "text-center py-6 text-muted-foreground text-sm",
                    "data-ocid": "project-files.obstacles.empty_state",
                    children: "لا توجد معوقات مسجلة لهذا المشروع"
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: obstacles.map((obs, i) => {
                  const st = getObstacleStatusLabel(obs.status);
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-start gap-3 bg-muted/20 border border-border rounded-xl p-4",
                      "data-ocid": `project-files.obstacle.item.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          TriangleAlert,
                          {
                            size: 16,
                            className: cn(
                              "flex-shrink-0 mt-0.5",
                              obs.priority === "عالية" ? "text-red-500" : obs.priority === "متوسطة" ? "text-amber-500" : "text-muted-foreground"
                            )
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: obs.description }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1.5 flex-wrap", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: cn(
                                  "text-xs font-medium px-2 py-0.5 rounded-full border",
                                  st.cls
                                ),
                                children: st.label
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                              "الأولوية:",
                              " ",
                              obs.priority === "عالية" ? "عالية" : obs.priority === "متوسطة" ? "متوسطة" : "منخفضة"
                            ] })
                          ] })
                        ] })
                      ]
                    },
                    obs.id
                  );
                }) })
              ] })
            ]
          }
        ),
        activeTab === "financial" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-6 space-y-6",
            "data-ocid": "project-files.financial.panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground text-sm", children: "الموقف المالي للمشروع" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4", children: [
                {
                  label: "الكلفة الكلية للمشروع",
                  value: formatCost(totalCost),
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { size: 18, className: "text-primary" }),
                  sub: "إجمالي تكلفة المشروع"
                },
                {
                  label: "التخصيص المقترح للسنة الحالية",
                  value: formatCost(Math.round(totalCost * 0.25)),
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { size: 18, className: "text-blue-500" }),
                  sub: "السنة المالية 2026"
                },
                {
                  label: "المصروف السنوي",
                  value: formatCost(Math.round(spent * 0.35)),
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 18, className: "text-emerald-500" }),
                  sub: "مصروف السنة الحالية"
                },
                {
                  label: "المصروف التراكمي",
                  value: formatCost(spent),
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { size: 18, className: "text-blue-600" }),
                  sub: "إجمالي ما صُرف"
                },
                {
                  label: "المبلغ المتبقي",
                  value: formatCost(remaining),
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { size: 18, className: "text-amber-500" }),
                  sub: "رصيد غير منصرف"
                },
                {
                  label: "نسبة الصرف",
                  value: `${spentPct}%`,
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { size: 18, className: "text-purple-500" }),
                  sub: "من إجمالي الكلفة"
                }
              ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "bg-background border border-border rounded-xl p-4",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-muted flex items-center justify-center", children: item.icon }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground leading-tight", children: item.label })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-black text-foreground", children: item.value }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-0.5", children: item.sub })
                  ]
                },
                item.label
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-border rounded-xl p-5 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: "مقارنة نسبة الإنجاز مع نسبة الصرف" }),
                [
                  {
                    label: "نسبة الإنجاز الفعلي",
                    value: selectedProject.progress,
                    color: "bg-emerald-500"
                  },
                  {
                    label: "نسبة الصرف التراكمي",
                    value: spentPct,
                    color: "bg-blue-500"
                  }
                ].map((bar) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: bar.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-black text-foreground", children: [
                      bar.value,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: cn("h-full rounded-full", bar.color),
                      style: { width: `${bar.value}%` }
                    }
                  ) })
                ] }, bar.label)),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground pt-1", children: Math.abs(selectedProject.progress - spentPct) <= 5 ? "✅ نسبة الإنجاز والصرف متوازنتان" : selectedProject.progress > spentPct ? "✅ الإنجاز متقدم على الصرف — مؤشر جيد" : "⚠️ الصرف متقدم على الإنجاز — يستوجب المراجعة" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 border border-border rounded-xl p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground mb-1.5", children: "ملاحظات مالية" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-relaxed", children: "جميع البيانات المالية محدّثة وفق آخر كشف حساب معتمد. التخصيص المقترح للسنة الحالية يشمل أعمال المرحلة الجارية فقط." })
              ] })
            ]
          }
        )
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", dir: "rtl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-black text-foreground", children: "ملفات المشاريع" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "السجل الإلكتروني الشامل لجميع المشاريع" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: handleComingSoon,
          className: "flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors shadow-sm",
          "data-ocid": "project-files.add_project.button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { size: 16 }),
            "إضافة مشروع جديد"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground mb-3 uppercase tracking-wide", children: "تصفية المشاريع" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "filter-status",
              className: "text-xs text-muted-foreground mb-1 block",
              children: "حالة الموقف"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              id: "filter-status",
              value: filterStatus,
              onChange: (e) => setFilterStatus(e.target.value),
              className: "w-full bg-background border border-input rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30",
              "data-ocid": "project-files.filter.status.select",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "الكل" }),
                statuses.map((s) => {
                  var _a2;
                  return /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: ((_a2 = projectStatusMap[s]) == null ? void 0 : _a2.label) ?? s }, s);
                })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "filter-type",
              className: "text-xs text-muted-foreground mb-1 block",
              children: "نوع المشروع"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              id: "filter-type",
              value: filterType,
              onChange: (e) => setFilterType(e.target.value),
              className: "w-full bg-background border border-input rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30",
              "data-ocid": "project-files.filter.type.select",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "الكل" }),
                types.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t, children: t }, t))
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "filter-location",
              className: "text-xs text-muted-foreground mb-1 block",
              children: "الموقع"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              id: "filter-location",
              value: filterLocation,
              onChange: (e) => setFilterLocation(e.target.value),
              className: "w-full bg-background border border-input rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30",
              "data-ocid": "project-files.filter.location.select",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "الكل" }),
                locations.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: l, children: l }, l))
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "filter-year",
              className: "text-xs text-muted-foreground mb-1 block",
              children: "سنة الإدراج"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              id: "filter-year",
              value: filterYear,
              onChange: (e) => setFilterYear(e.target.value),
              className: "w-full bg-background border border-input rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30",
              "data-ocid": "project-files.filter.year.select",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "الكل" }),
                years.map((y) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: y, children: y }, y))
              ]
            }
          )
        ] })
      ] }),
      (filterStatus || filterType || filterLocation || filterYear) && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            setFilterStatus("");
            setFilterType("");
            setFilterLocation("");
            setFilterYear("");
          },
          className: "mt-3 text-xs text-primary hover:underline",
          "data-ocid": "project-files.filter.clear.button",
          children: "مسح التصفية"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
      "عرض ",
      filtered.length,
      " من ",
      allProjects.length,
      " مشروع"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl overflow-hidden shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-muted/50 text-right border-b border-border", children: [
        "التسلسل",
        "اسم المشروع",
        "الموقع",
        "الحالة",
        "نسبة الإنجاز",
        "الكلفة الكلية",
        "المصروف التراكمي",
        "المكونات",
        ""
      ].map((col) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "th",
        {
          className: "px-4 py-3.5 text-xs font-bold text-muted-foreground",
          children: col
        },
        col
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "td",
        {
          colSpan: 9,
          className: "px-4 py-12 text-center text-muted-foreground",
          "data-ocid": "project-files.list.empty_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { size: 36, className: "mx-auto mb-2 opacity-30" }),
            "لا توجد مشاريع تطابق معايير التصفية المحددة"
          ]
        }
      ) }) : filtered.map((project, i) => {
        const compsCount = (projectComponents[project.id] ?? []).length;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: cn(
              "border-b border-border/60 hover:bg-primary/5 transition-colors group",
              i % 2 === 1 ? "bg-muted/10" : "bg-background"
            ),
            "data-ocid": `project-files.project.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3.5 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center w-7 h-7 rounded-full bg-muted text-xs font-bold text-muted-foreground", children: project.id }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground group-hover:text-primary transition-colors leading-tight", children: project.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                  project.projectType,
                  " — ",
                  project.year
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3.5 text-muted-foreground", children: project.location }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectStatusPill, { status: project.status }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-[100px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-muted rounded-full h-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: cn(
                      "h-1.5 rounded-full",
                      project.progress >= 70 ? "bg-emerald-500" : project.progress >= 40 ? "bg-amber-500" : "bg-red-500"
                    ),
                    style: { width: `${project.progress}%` }
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-foreground w-8 text-left", children: [
                  project.progress,
                  "%"
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3.5 text-left font-semibold text-foreground", children: formatCost(project.totalCost) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3.5 text-left text-muted-foreground", children: formatCost(project.spent) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3.5 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold", children: compsCount }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => openProject(project.id),
                  className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap",
                  "data-ocid": `project-files.open_button.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { size: 13 }),
                    "عرض الملف"
                  ]
                }
              ) })
            ]
          },
          project.id
        );
      }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4", children: [
      {
        label: "إجمالي الكلفة",
        value: formatCost(filtered.reduce((s, p) => s + p.totalCost, 0)),
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { size: 18, className: "text-primary" })
      },
      {
        label: "إجمالي المصروف",
        value: formatCost(filtered.reduce((s, p) => s + p.spent, 0)),
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 18, className: "text-emerald-500" })
      },
      {
        label: "إجمالي المتبقي",
        value: formatCost(
          filtered.reduce((s, p) => s + (p.totalCost - p.spent), 0)
        ),
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { size: 18, className: "text-amber-500" })
      }
    ].map((card) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border rounded-xl p-4 flex items-center gap-3 shadow-card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0", children: card.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: card.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-black text-foreground", children: card.value })
          ] })
        ]
      },
      card.label
    )) })
  ] });
}
export {
  ProjectFilesPage as default
};
