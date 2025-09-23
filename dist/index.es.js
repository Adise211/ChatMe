import * as d from "react";
import Ve, { forwardRef as dn, createElement as Ut, useState as U, useRef as Jt, useEffect as Be, useMemo as Qo } from "react";
import * as es from "react-dom";
import ts from "react-dom";
var Qe = { exports: {} }, Fe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hr;
function rs() {
  if (hr) return Fe;
  hr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, o, s) {
    var a = null;
    if (s !== void 0 && (a = "" + s), o.key !== void 0 && (a = "" + o.key), "key" in o) {
      s = {};
      for (var i in o)
        i !== "key" && (s[i] = o[i]);
    } else s = o;
    return o = s.ref, {
      $$typeof: e,
      type: n,
      key: a,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return Fe.Fragment = t, Fe.jsx = r, Fe.jsxs = r, Fe;
}
var Ue = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pr;
function ns() {
  return pr || (pr = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(b) {
      if (b == null) return null;
      if (typeof b == "function")
        return b.$$typeof === fe ? null : b.displayName || b.name || null;
      if (typeof b == "string") return b;
      switch (b) {
        case g:
          return "Fragment";
        case A:
          return "Profiler";
        case x:
          return "StrictMode";
        case w:
          return "Suspense";
        case P:
          return "SuspenseList";
        case q:
          return "Activity";
      }
      if (typeof b == "object")
        switch (typeof b.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), b.$$typeof) {
          case y:
            return "Portal";
          case E:
            return (b.displayName || "Context") + ".Provider";
          case D:
            return (b._context.displayName || "Context") + ".Consumer";
          case _:
            var z = b.render;
            return b = b.displayName, b || (b = z.displayName || z.name || "", b = b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef"), b;
          case T:
            return z = b.displayName || null, z !== null ? z : e(b.type) || "Memo";
          case j:
            z = b._payload, b = b._init;
            try {
              return e(b(z));
            } catch {
            }
        }
      return null;
    }
    function t(b) {
      return "" + b;
    }
    function r(b) {
      try {
        t(b);
        var z = !1;
      } catch {
        z = !0;
      }
      if (z) {
        z = console;
        var $ = z.error, R = typeof Symbol == "function" && Symbol.toStringTag && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return $.call(
          z,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          R
        ), t(b);
      }
    }
    function n(b) {
      if (b === g) return "<>";
      if (typeof b == "object" && b !== null && b.$$typeof === j)
        return "<...>";
      try {
        var z = e(b);
        return z ? "<" + z + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var b = Ee.A;
      return b === null ? null : b.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function a(b) {
      if (xe.call(b, "key")) {
        var z = Object.getOwnPropertyDescriptor(b, "key").get;
        if (z && z.isReactWarning) return !1;
      }
      return b.key !== void 0;
    }
    function i(b, z) {
      function $() {
        ae || (ae = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          z
        ));
      }
      $.isReactWarning = !0, Object.defineProperty(b, "key", {
        get: $,
        configurable: !0
      });
    }
    function u() {
      var b = e(this.type);
      return ee[b] || (ee[b] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), b = this.props.ref, b !== void 0 ? b : null;
    }
    function l(b, z, $, R, L, X, je, F) {
      return $ = X.ref, b = {
        $$typeof: v,
        type: b,
        key: z,
        props: X,
        _owner: L
      }, ($ !== void 0 ? $ : null) !== null ? Object.defineProperty(b, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(b, "ref", { enumerable: !1, value: null }), b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(b, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(b, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: je
      }), Object.defineProperty(b, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: F
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    }
    function f(b, z, $, R, L, X, je, F) {
      var H = z.children;
      if (H !== void 0)
        if (R)
          if (Xe(H)) {
            for (R = 0; R < H.length; R++)
              p(H[R]);
            Object.freeze && Object.freeze(H);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(H);
      if (xe.call(z, "key")) {
        H = e(b);
        var re = Object.keys(z).filter(function(Le) {
          return Le !== "key";
        });
        R = 0 < re.length ? "{key: someKey, " + re.join(": ..., ") + ": ...}" : "{key: someKey}", Me[H + R] || (re = 0 < re.length ? "{" + re.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          R,
          H,
          re,
          H
        ), Me[H + R] = !0);
      }
      if (H = null, $ !== void 0 && (r($), H = "" + $), a(z) && (r(z.key), H = "" + z.key), "key" in z) {
        $ = {};
        for (var me in z)
          me !== "key" && ($[me] = z[me]);
      } else $ = z;
      return H && i(
        $,
        typeof b == "function" ? b.displayName || b.name || "Unknown" : b
      ), l(
        b,
        H,
        X,
        L,
        o(),
        $,
        je,
        F
      );
    }
    function p(b) {
      typeof b == "object" && b !== null && b.$$typeof === v && b._store && (b._store.validated = 1);
    }
    var h = Ve, v = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), D = Symbol.for("react.consumer"), E = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), q = Symbol.for("react.activity"), fe = Symbol.for("react.client.reference"), Ee = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, xe = Object.prototype.hasOwnProperty, Xe = Array.isArray, ye = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(b) {
        return b();
      }
    };
    var ae, ee = {}, oe = h.react_stack_bottom_frame.bind(
      h,
      s
    )(), S = ye(n(s)), Me = {};
    Ue.Fragment = g, Ue.jsx = function(b, z, $, R, L) {
      var X = 1e4 > Ee.recentlyCreatedOwnerStacks++;
      return f(
        b,
        z,
        $,
        !1,
        R,
        L,
        X ? Error("react-stack-top-frame") : oe,
        X ? ye(n(b)) : S
      );
    }, Ue.jsxs = function(b, z, $, R, L) {
      var X = 1e4 > Ee.recentlyCreatedOwnerStacks++;
      return f(
        b,
        z,
        $,
        !0,
        R,
        L,
        X ? Error("react-stack-top-frame") : oe,
        X ? ye(n(b)) : S
      );
    };
  })()), Ue;
}
var gr;
function os() {
  return gr || (gr = 1, process.env.NODE_ENV === "production" ? Qe.exports = rs() : Qe.exports = ns()), Qe.exports;
}
var c = os();
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ss = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), as = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), vr = (e) => {
  const t = as(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, fn = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), is = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var cs = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ls = dn(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: o = "",
    children: s,
    iconNode: a,
    ...i
  }, u) => Ut(
    "svg",
    {
      ref: u,
      ...cs,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: fn("lucide", o),
      ...!s && !is(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...a.map(([l, f]) => Ut(l, f)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q = (e, t) => {
  const r = dn(
    ({ className: n, ...o }, s) => Ut(ls, {
      ref: s,
      iconNode: t,
      className: fn(
        `lucide-${ss(vr(e))}`,
        `lucide-${e}`,
        n
      ),
      ...o
    })
  );
  return r.displayName = vr(e), r;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const us = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
], Wt = Q("check-check", us);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ds = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], br = Q("check", ds);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fs = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], ms = Q("clock", fs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hs = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
], ps = Q("ellipsis-vertical", hs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gs = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
], vs = Q("mail", gs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bs = [
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
      key: "1miecu"
    }
  ]
], xs = Q("paperclip", bs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], ws = Q("phone", ys);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], ks = Q("plus", _s);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ns = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], Es = Q("search", Ns);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], Cs = Q("send", js);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const As = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Ss = Q("trash-2", As);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ds = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], gt = Q("user", Ds);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], mn = Q("x", zs), Ts = ({
  onSearch: e,
  onNewConversationDialog: t
}) => {
  const [r, n] = U(""), o = (a) => {
    const i = a.target.value;
    n(i), e(i);
  }, s = (a) => {
    a.currentTarget.blur(), t();
  };
  return /* @__PURE__ */ c.jsx("div", { className: "p-4 border-b border-gray-200 bg-white", children: /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "flex-1 relative", children: [
      /* @__PURE__ */ c.jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ c.jsx(Es, { className: "h-5 w-5 text-gray-400" }) }),
      /* @__PURE__ */ c.jsx(
        "input",
        {
          type: "text",
          value: r,
          onChange: o,
          placeholder: "Search conversations...",
          className: "block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
        }
      )
    ] }),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: s,
        className: "flex-shrink-0 w-8 h-8 bg-primary hover:bg-gray-800 text-white rounded-lg flex items-center justify-center transition-all duration-200 hover:shadow-md active:scale-95",
        style: { borderRadius: "8px" },
        title: "New Conversation",
        children: /* @__PURE__ */ c.jsx(ks, { className: "w-4 h-4" })
      }
    )
  ] }) });
};
function m(e, t, r) {
  function n(i, u) {
    var l;
    Object.defineProperty(i, "_zod", {
      value: i._zod ?? {},
      enumerable: !1
    }), (l = i._zod).traits ?? (l.traits = /* @__PURE__ */ new Set()), i._zod.traits.add(e), t(i, u);
    for (const f in a.prototype)
      f in i || Object.defineProperty(i, f, { value: a.prototype[f].bind(i) });
    i._zod.constr = a, i._zod.def = u;
  }
  const o = r?.Parent ?? Object;
  class s extends o {
  }
  Object.defineProperty(s, "name", { value: e });
  function a(i) {
    var u;
    const l = r?.Parent ? new s() : this;
    n(l, i), (u = l._zod).deferred ?? (u.deferred = []);
    for (const f of l._zod.deferred)
      f();
    return l;
  }
  return Object.defineProperty(a, "init", { value: n }), Object.defineProperty(a, Symbol.hasInstance, {
    value: (i) => r?.Parent && i instanceof r.Parent ? !0 : i?._zod?.traits?.has(e)
  }), Object.defineProperty(a, "name", { value: e }), a;
}
class Te extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class hn extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const pn = {};
function _e(e) {
  return pn;
}
function Is(e) {
  const t = Object.values(e).filter((n) => typeof n == "number");
  return Object.entries(e).filter(([n, o]) => t.indexOf(+n) === -1).map(([n, o]) => o);
}
function Vt(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function Qt(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function er(e) {
  return e == null;
}
function tr(e) {
  const t = e.startsWith("^") ? 1 : 0, r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, r);
}
function Rs(e, t) {
  const r = (e.toString().split(".")[1] || "").length, n = t.toString();
  let o = (n.split(".")[1] || "").length;
  if (o === 0 && /\d?e-\d?/.test(n)) {
    const u = n.match(/\d?e-(\d?)/);
    u?.[1] && (o = Number.parseInt(u[1]));
  }
  const s = r > o ? r : o, a = Number.parseInt(e.toFixed(s).replace(".", "")), i = Number.parseInt(t.toFixed(s).replace(".", ""));
  return a % i / 10 ** s;
}
const xr = Symbol("evaluating");
function O(e, t, r) {
  let n;
  Object.defineProperty(e, t, {
    get() {
      if (n !== xr)
        return n === void 0 && (n = xr, n = r()), n;
    },
    set(o) {
      Object.defineProperty(e, t, {
        value: o
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function Ps(e) {
  return Object.create(Object.getPrototypeOf(e), Object.getOwnPropertyDescriptors(e));
}
function ve(e, t, r) {
  Object.defineProperty(e, t, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function $e(...e) {
  const t = {};
  for (const r of e) {
    const n = Object.getOwnPropertyDescriptors(r);
    Object.assign(t, n);
  }
  return Object.defineProperties({}, t);
}
function yr(e) {
  return JSON.stringify(e);
}
const gn = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function vt(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const $s = Qt(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function Ge(e) {
  if (vt(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const r = t.prototype;
  return !(vt(r) === !1 || Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1);
}
function vn(e) {
  return Ge(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const Os = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function _t(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function be(e, t, r) {
  const n = new e._zod.constr(t ?? e._zod.def);
  return (!t || r?.parent) && (n._zod.parent = e), n;
}
function C(e) {
  const t = e;
  if (!t)
    return {};
  if (typeof t == "string")
    return { error: () => t };
  if (t?.message !== void 0) {
    if (t?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return delete t.message, typeof t.error == "string" ? { ...t, error: () => t.error } : t;
}
function Zs(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const Ms = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function Ls(e, t) {
  const r = e._zod.def, n = $e(e._zod.def, {
    get shape() {
      const o = {};
      for (const s in t) {
        if (!(s in r.shape))
          throw new Error(`Unrecognized key: "${s}"`);
        t[s] && (o[s] = r.shape[s]);
      }
      return ve(this, "shape", o), o;
    },
    checks: []
  });
  return be(e, n);
}
function Fs(e, t) {
  const r = e._zod.def, n = $e(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape };
      for (const s in t) {
        if (!(s in r.shape))
          throw new Error(`Unrecognized key: "${s}"`);
        t[s] && delete o[s];
      }
      return ve(this, "shape", o), o;
    },
    checks: []
  });
  return be(e, n);
}
function Us(e, t) {
  if (!Ge(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const r = e._zod.def.checks;
  if (r && r.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const o = $e(e._zod.def, {
    get shape() {
      const s = { ...e._zod.def.shape, ...t };
      return ve(this, "shape", s), s;
    },
    checks: []
  });
  return be(e, o);
}
function Ws(e, t) {
  if (!Ge(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const r = {
    ...e._zod.def,
    get shape() {
      const n = { ...e._zod.def.shape, ...t };
      return ve(this, "shape", n), n;
    },
    checks: e._zod.def.checks
  };
  return be(e, r);
}
function Vs(e, t) {
  const r = $e(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape, ...t._zod.def.shape };
      return ve(this, "shape", n), n;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return be(e, r);
}
function Bs(e, t, r) {
  const n = $e(t._zod.def, {
    get shape() {
      const o = t._zod.def.shape, s = { ...o };
      if (r)
        for (const a in r) {
          if (!(a in o))
            throw new Error(`Unrecognized key: "${a}"`);
          r[a] && (s[a] = e ? new e({
            type: "optional",
            innerType: o[a]
          }) : o[a]);
        }
      else
        for (const a in o)
          s[a] = e ? new e({
            type: "optional",
            innerType: o[a]
          }) : o[a];
      return ve(this, "shape", s), s;
    },
    checks: []
  });
  return be(t, n);
}
function Gs(e, t, r) {
  const n = $e(t._zod.def, {
    get shape() {
      const o = t._zod.def.shape, s = { ...o };
      if (r)
        for (const a in r) {
          if (!(a in s))
            throw new Error(`Unrecognized key: "${a}"`);
          r[a] && (s[a] = new e({
            type: "nonoptional",
            innerType: o[a]
          }));
        }
      else
        for (const a in o)
          s[a] = new e({
            type: "nonoptional",
            innerType: o[a]
          });
      return ve(this, "shape", s), s;
    },
    checks: []
  });
  return be(t, n);
}
function ze(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let r = t; r < e.issues.length; r++)
    if (e.issues[r]?.continue !== !0)
      return !0;
  return !1;
}
function bn(e, t) {
  return t.map((r) => {
    var n;
    return (n = r).path ?? (n.path = []), r.path.unshift(e), r;
  });
}
function et(e) {
  return typeof e == "string" ? e : e?.message;
}
function ke(e, t, r) {
  const n = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const o = et(e.inst?._zod.def?.error?.(e)) ?? et(t?.error?.(e)) ?? et(r.customError?.(e)) ?? et(r.localeError?.(e)) ?? "Invalid input";
    n.message = o;
  }
  return delete n.inst, delete n.continue, t?.reportInput || delete n.input, n;
}
function rr(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function He(...e) {
  const [t, r, n] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: r,
    inst: n
  } : { ...t };
}
const xn = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, Vt, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, yn = m("$ZodError", xn), wn = m("$ZodError", xn, { Parent: Error });
function Hs(e, t = (r) => r.message) {
  const r = {}, n = [];
  for (const o of e.issues)
    o.path.length > 0 ? (r[o.path[0]] = r[o.path[0]] || [], r[o.path[0]].push(t(o))) : n.push(t(o));
  return { formErrors: n, fieldErrors: r };
}
function Ys(e, t) {
  const r = t || function(s) {
    return s.message;
  }, n = { _errors: [] }, o = (s) => {
    for (const a of s.issues)
      if (a.code === "invalid_union" && a.errors.length)
        a.errors.map((i) => o({ issues: i }));
      else if (a.code === "invalid_key")
        o({ issues: a.issues });
      else if (a.code === "invalid_element")
        o({ issues: a.issues });
      else if (a.path.length === 0)
        n._errors.push(r(a));
      else {
        let i = n, u = 0;
        for (; u < a.path.length; ) {
          const l = a.path[u];
          u === a.path.length - 1 ? (i[l] = i[l] || { _errors: [] }, i[l]._errors.push(r(a))) : i[l] = i[l] || { _errors: [] }, i = i[l], u++;
        }
      }
  };
  return o(e), n;
}
const nr = (e) => (t, r, n, o) => {
  const s = n ? Object.assign(n, { async: !1 }) : { async: !1 }, a = t._zod.run({ value: r, issues: [] }, s);
  if (a instanceof Promise)
    throw new Te();
  if (a.issues.length) {
    const i = new (o?.Err ?? e)(a.issues.map((u) => ke(u, s, _e())));
    throw gn(i, o?.callee), i;
  }
  return a.value;
}, or = (e) => async (t, r, n, o) => {
  const s = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let a = t._zod.run({ value: r, issues: [] }, s);
  if (a instanceof Promise && (a = await a), a.issues.length) {
    const i = new (o?.Err ?? e)(a.issues.map((u) => ke(u, s, _e())));
    throw gn(i, o?.callee), i;
  }
  return a.value;
}, kt = (e) => (t, r, n) => {
  const o = n ? { ...n, async: !1 } : { async: !1 }, s = t._zod.run({ value: r, issues: [] }, o);
  if (s instanceof Promise)
    throw new Te();
  return s.issues.length ? {
    success: !1,
    error: new (e ?? yn)(s.issues.map((a) => ke(a, o, _e())))
  } : { success: !0, data: s.value };
}, qs = /* @__PURE__ */ kt(wn), Nt = (e) => async (t, r, n) => {
  const o = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let s = t._zod.run({ value: r, issues: [] }, o);
  return s instanceof Promise && (s = await s), s.issues.length ? {
    success: !1,
    error: new e(s.issues.map((a) => ke(a, o, _e())))
  } : { success: !0, data: s.value };
}, Ks = /* @__PURE__ */ Nt(wn), Xs = (e) => (t, r, n) => {
  const o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return nr(e)(t, r, o);
}, Js = (e) => (t, r, n) => nr(e)(t, r, n), Qs = (e) => async (t, r, n) => {
  const o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return or(e)(t, r, o);
}, ea = (e) => async (t, r, n) => or(e)(t, r, n), ta = (e) => (t, r, n) => {
  const o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return kt(e)(t, r, o);
}, ra = (e) => (t, r, n) => kt(e)(t, r, n), na = (e) => async (t, r, n) => {
  const o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Nt(e)(t, r, o);
}, oa = (e) => async (t, r, n) => Nt(e)(t, r, n), sa = /^[cC][^\s-]{8,}$/, aa = /^[0-9a-z]+$/, ia = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, ca = /^[0-9a-vA-V]{20}$/, la = /^[A-Za-z0-9]{27}$/, ua = /^[a-zA-Z0-9_-]{21}$/, da = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, fa = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, wr = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, ma = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, ha = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function pa() {
  return new RegExp(ha, "u");
}
const ga = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, va = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, ba = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, xa = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, ya = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, _n = /^[A-Za-z0-9_-]*$/, wa = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, _a = /^\+(?:[0-9]){6,14}[0-9]$/, kn = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", ka = /* @__PURE__ */ new RegExp(`^${kn}$`);
function Nn(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Na(e) {
  return new RegExp(`^${Nn(e)}$`);
}
function Ea(e) {
  const t = Nn({ precision: e.precision }), r = ["Z"];
  e.local && r.push(""), e.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const n = `${t}(?:${r.join("|")})`;
  return new RegExp(`^${kn}T(?:${n})$`);
}
const ja = (e) => {
  const t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, Ca = /^-?\d+$/, Aa = /^-?\d+(?:\.\d+)?/, Sa = /^(?:true|false)$/i, Da = /^[^A-Z]*$/, za = /^[^a-z]*$/, J = /* @__PURE__ */ m("$ZodCheck", (e, t) => {
  var r;
  e._zod ?? (e._zod = {}), e._zod.def = t, (r = e._zod).onattach ?? (r.onattach = []);
}), En = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, jn = /* @__PURE__ */ m("$ZodCheckLessThan", (e, t) => {
  J.init(e, t);
  const r = En[typeof t.value];
  e._zod.onattach.push((n) => {
    const o = n._zod.bag, s = (t.inclusive ? o.maximum : o.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    t.value < s && (t.inclusive ? o.maximum = t.value : o.exclusiveMaximum = t.value);
  }), e._zod.check = (n) => {
    (t.inclusive ? n.value <= t.value : n.value < t.value) || n.issues.push({
      origin: r,
      code: "too_big",
      maximum: t.value,
      input: n.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), Cn = /* @__PURE__ */ m("$ZodCheckGreaterThan", (e, t) => {
  J.init(e, t);
  const r = En[typeof t.value];
  e._zod.onattach.push((n) => {
    const o = n._zod.bag, s = (t.inclusive ? o.minimum : o.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    t.value > s && (t.inclusive ? o.minimum = t.value : o.exclusiveMinimum = t.value);
  }), e._zod.check = (n) => {
    (t.inclusive ? n.value >= t.value : n.value > t.value) || n.issues.push({
      origin: r,
      code: "too_small",
      minimum: t.value,
      input: n.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), Ta = /* @__PURE__ */ m("$ZodCheckMultipleOf", (e, t) => {
  J.init(e, t), e._zod.onattach.push((r) => {
    var n;
    (n = r._zod.bag).multipleOf ?? (n.multipleOf = t.value);
  }), e._zod.check = (r) => {
    if (typeof r.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof r.value == "bigint" ? r.value % t.value === BigInt(0) : Rs(r.value, t.value) === 0) || r.issues.push({
      origin: typeof r.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ia = /* @__PURE__ */ m("$ZodCheckNumberFormat", (e, t) => {
  J.init(e, t), t.format = t.format || "float64";
  const r = t.format?.includes("int"), n = r ? "int" : "number", [o, s] = Ms[t.format];
  e._zod.onattach.push((a) => {
    const i = a._zod.bag;
    i.format = t.format, i.minimum = o, i.maximum = s, r && (i.pattern = Ca);
  }), e._zod.check = (a) => {
    const i = a.value;
    if (r) {
      if (!Number.isInteger(i)) {
        a.issues.push({
          expected: n,
          format: t.format,
          code: "invalid_type",
          continue: !1,
          input: i,
          inst: e
        });
        return;
      }
      if (!Number.isSafeInteger(i)) {
        i > 0 ? a.issues.push({
          input: i,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: n,
          continue: !t.abort
        }) : a.issues.push({
          input: i,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: n,
          continue: !t.abort
        });
        return;
      }
    }
    i < o && a.issues.push({
      origin: "number",
      input: i,
      code: "too_small",
      minimum: o,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    }), i > s && a.issues.push({
      origin: "number",
      input: i,
      code: "too_big",
      maximum: s,
      inst: e
    });
  };
}), Ra = /* @__PURE__ */ m("$ZodCheckMaxLength", (e, t) => {
  var r;
  J.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const o = n.value;
    return !er(o) && o.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const o = n._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < o && (n._zod.bag.maximum = t.maximum);
  }), e._zod.check = (n) => {
    const o = n.value;
    if (o.length <= t.maximum)
      return;
    const a = rr(o);
    n.issues.push({
      origin: a,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: o,
      inst: e,
      continue: !t.abort
    });
  };
}), Pa = /* @__PURE__ */ m("$ZodCheckMinLength", (e, t) => {
  var r;
  J.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const o = n.value;
    return !er(o) && o.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const o = n._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > o && (n._zod.bag.minimum = t.minimum);
  }), e._zod.check = (n) => {
    const o = n.value;
    if (o.length >= t.minimum)
      return;
    const a = rr(o);
    n.issues.push({
      origin: a,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: o,
      inst: e,
      continue: !t.abort
    });
  };
}), $a = /* @__PURE__ */ m("$ZodCheckLengthEquals", (e, t) => {
  var r;
  J.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const o = n.value;
    return !er(o) && o.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const o = n._zod.bag;
    o.minimum = t.length, o.maximum = t.length, o.length = t.length;
  }), e._zod.check = (n) => {
    const o = n.value, s = o.length;
    if (s === t.length)
      return;
    const a = rr(o), i = s > t.length;
    n.issues.push({
      origin: a,
      ...i ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Et = /* @__PURE__ */ m("$ZodCheckStringFormat", (e, t) => {
  var r, n;
  J.init(e, t), e._zod.onattach.push((o) => {
    const s = o._zod.bag;
    s.format = t.format, t.pattern && (s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(t.pattern));
  }), t.pattern ? (r = e._zod).check ?? (r.check = (o) => {
    t.pattern.lastIndex = 0, !t.pattern.test(o.value) && o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: o.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: e,
      continue: !t.abort
    });
  }) : (n = e._zod).check ?? (n.check = () => {
  });
}), Oa = /* @__PURE__ */ m("$ZodCheckRegex", (e, t) => {
  Et.init(e, t), e._zod.check = (r) => {
    t.pattern.lastIndex = 0, !t.pattern.test(r.value) && r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: r.value,
      pattern: t.pattern.toString(),
      inst: e,
      continue: !t.abort
    });
  };
}), Za = /* @__PURE__ */ m("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = Da), Et.init(e, t);
}), Ma = /* @__PURE__ */ m("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = za), Et.init(e, t);
}), La = /* @__PURE__ */ m("$ZodCheckIncludes", (e, t) => {
  J.init(e, t);
  const r = _t(t.includes), n = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${r}` : r);
  t.pattern = n, e._zod.onattach.push((o) => {
    const s = o._zod.bag;
    s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(n);
  }), e._zod.check = (o) => {
    o.value.includes(t.includes, t.position) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Fa = /* @__PURE__ */ m("$ZodCheckStartsWith", (e, t) => {
  J.init(e, t);
  const r = new RegExp(`^${_t(t.prefix)}.*`);
  t.pattern ?? (t.pattern = r), e._zod.onattach.push((n) => {
    const o = n._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(r);
  }), e._zod.check = (n) => {
    n.value.startsWith(t.prefix) || n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ua = /* @__PURE__ */ m("$ZodCheckEndsWith", (e, t) => {
  J.init(e, t);
  const r = new RegExp(`.*${_t(t.suffix)}$`);
  t.pattern ?? (t.pattern = r), e._zod.onattach.push((n) => {
    const o = n._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(r);
  }), e._zod.check = (n) => {
    n.value.endsWith(t.suffix) || n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Wa = /* @__PURE__ */ m("$ZodCheckOverwrite", (e, t) => {
  J.init(e, t), e._zod.check = (r) => {
    r.value = t.tx(r.value);
  };
});
class Va {
  constructor(t = []) {
    this.content = [], this.indent = 0, this && (this.args = t);
  }
  indented(t) {
    this.indent += 1, t(this), this.indent -= 1;
  }
  write(t) {
    if (typeof t == "function") {
      t(this, { execution: "sync" }), t(this, { execution: "async" });
      return;
    }
    const n = t.split(`
`).filter((a) => a), o = Math.min(...n.map((a) => a.length - a.trimStart().length)), s = n.map((a) => a.slice(o)).map((a) => " ".repeat(this.indent * 2) + a);
    for (const a of s)
      this.content.push(a);
  }
  compile() {
    const t = Function, r = this?.args, o = [...(this?.content ?? [""]).map((s) => `  ${s}`)];
    return new t(...r, o.join(`
`));
  }
}
const Ba = {
  major: 4,
  minor: 1,
  patch: 8
}, W = /* @__PURE__ */ m("$ZodType", (e, t) => {
  var r;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Ba;
  const n = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && n.unshift(e);
  for (const o of n)
    for (const s of o._zod.onattach)
      s(e);
  if (n.length === 0)
    (r = e._zod).deferred ?? (r.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const o = (a, i, u) => {
      let l = ze(a), f;
      for (const p of i) {
        if (p._zod.def.when) {
          if (!p._zod.def.when(a))
            continue;
        } else if (l)
          continue;
        const h = a.issues.length, v = p._zod.check(a);
        if (v instanceof Promise && u?.async === !1)
          throw new Te();
        if (f || v instanceof Promise)
          f = (f ?? Promise.resolve()).then(async () => {
            await v, a.issues.length !== h && (l || (l = ze(a, h)));
          });
        else {
          if (a.issues.length === h)
            continue;
          l || (l = ze(a, h));
        }
      }
      return f ? f.then(() => a) : a;
    }, s = (a, i, u) => {
      if (ze(a))
        return a.aborted = !0, a;
      const l = o(i, n, u);
      if (l instanceof Promise) {
        if (u.async === !1)
          throw new Te();
        return l.then((f) => e._zod.parse(f, u));
      }
      return e._zod.parse(l, u);
    };
    e._zod.run = (a, i) => {
      if (i.skipChecks)
        return e._zod.parse(a, i);
      if (i.direction === "backward") {
        const l = e._zod.parse({ value: a.value, issues: [] }, { ...i, skipChecks: !0 });
        return l instanceof Promise ? l.then((f) => s(f, a, i)) : s(l, a, i);
      }
      const u = e._zod.parse(a, i);
      if (u instanceof Promise) {
        if (i.async === !1)
          throw new Te();
        return u.then((l) => o(l, n, i));
      }
      return o(u, n, i);
    };
  }
  e["~standard"] = {
    validate: (o) => {
      try {
        const s = qs(e, o);
        return s.success ? { value: s.data } : { issues: s.error?.issues };
      } catch {
        return Ks(e, o).then((a) => a.success ? { value: a.data } : { issues: a.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), sr = /* @__PURE__ */ m("$ZodString", (e, t) => {
  W.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? ja(e._zod.bag), e._zod.parse = (r, n) => {
    if (t.coerce)
      try {
        r.value = String(r.value);
      } catch {
      }
    return typeof r.value == "string" || r.issues.push({
      expected: "string",
      code: "invalid_type",
      input: r.value,
      inst: e
    }), r;
  };
}), Z = /* @__PURE__ */ m("$ZodStringFormat", (e, t) => {
  Et.init(e, t), sr.init(e, t);
}), Ga = /* @__PURE__ */ m("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = fa), Z.init(e, t);
}), Ha = /* @__PURE__ */ m("$ZodUUID", (e, t) => {
  if (t.version) {
    const n = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (n === void 0)
      throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = wr(n));
  } else
    t.pattern ?? (t.pattern = wr());
  Z.init(e, t);
}), Ya = /* @__PURE__ */ m("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = ma), Z.init(e, t);
}), qa = /* @__PURE__ */ m("$ZodURL", (e, t) => {
  Z.init(e, t), e._zod.check = (r) => {
    try {
      const n = r.value.trim(), o = new URL(n);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(o.hostname) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: wa.source,
        input: r.value,
        inst: e,
        continue: !t.abort
      })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(o.protocol.endsWith(":") ? o.protocol.slice(0, -1) : o.protocol) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: r.value,
        inst: e,
        continue: !t.abort
      })), t.normalize ? r.value = o.href : r.value = n;
      return;
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "url",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), Ka = /* @__PURE__ */ m("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = pa()), Z.init(e, t);
}), Xa = /* @__PURE__ */ m("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = ua), Z.init(e, t);
}), Ja = /* @__PURE__ */ m("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = sa), Z.init(e, t);
}), Qa = /* @__PURE__ */ m("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = aa), Z.init(e, t);
}), ei = /* @__PURE__ */ m("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = ia), Z.init(e, t);
}), ti = /* @__PURE__ */ m("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = ca), Z.init(e, t);
}), ri = /* @__PURE__ */ m("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = la), Z.init(e, t);
}), ni = /* @__PURE__ */ m("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = Ea(t)), Z.init(e, t);
}), oi = /* @__PURE__ */ m("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = ka), Z.init(e, t);
}), si = /* @__PURE__ */ m("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = Na(t)), Z.init(e, t);
}), ai = /* @__PURE__ */ m("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = da), Z.init(e, t);
}), ii = /* @__PURE__ */ m("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = ga), Z.init(e, t), e._zod.onattach.push((r) => {
    const n = r._zod.bag;
    n.format = "ipv4";
  });
}), ci = /* @__PURE__ */ m("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = va), Z.init(e, t), e._zod.onattach.push((r) => {
    const n = r._zod.bag;
    n.format = "ipv6";
  }), e._zod.check = (r) => {
    try {
      new URL(`http://[${r.value}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), li = /* @__PURE__ */ m("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = ba), Z.init(e, t);
}), ui = /* @__PURE__ */ m("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = xa), Z.init(e, t), e._zod.check = (r) => {
    const n = r.value.split("/");
    try {
      if (n.length !== 2)
        throw new Error();
      const [o, s] = n;
      if (!s)
        throw new Error();
      const a = Number(s);
      if (`${a}` !== s)
        throw new Error();
      if (a < 0 || a > 128)
        throw new Error();
      new URL(`http://[${o}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
function An(e) {
  if (e === "")
    return !0;
  if (e.length % 4 !== 0)
    return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
const di = /* @__PURE__ */ m("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = ya), Z.init(e, t), e._zod.onattach.push((r) => {
    r._zod.bag.contentEncoding = "base64";
  }), e._zod.check = (r) => {
    An(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function fi(e) {
  if (!_n.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (n) => n === "-" ? "+" : "/"), r = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return An(r);
}
const mi = /* @__PURE__ */ m("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = _n), Z.init(e, t), e._zod.onattach.push((r) => {
    r._zod.bag.contentEncoding = "base64url";
  }), e._zod.check = (r) => {
    fi(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), hi = /* @__PURE__ */ m("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = _a), Z.init(e, t);
});
function pi(e, t = null) {
  try {
    const r = e.split(".");
    if (r.length !== 3)
      return !1;
    const [n] = r;
    if (!n)
      return !1;
    const o = JSON.parse(atob(n));
    return !("typ" in o && o?.typ !== "JWT" || !o.alg || t && (!("alg" in o) || o.alg !== t));
  } catch {
    return !1;
  }
}
const gi = /* @__PURE__ */ m("$ZodJWT", (e, t) => {
  Z.init(e, t), e._zod.check = (r) => {
    pi(r.value, t.alg) || r.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Sn = /* @__PURE__ */ m("$ZodNumber", (e, t) => {
  W.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? Aa, e._zod.parse = (r, n) => {
    if (t.coerce)
      try {
        r.value = Number(r.value);
      } catch {
      }
    const o = r.value;
    if (typeof o == "number" && !Number.isNaN(o) && Number.isFinite(o))
      return r;
    const s = typeof o == "number" ? Number.isNaN(o) ? "NaN" : Number.isFinite(o) ? void 0 : "Infinity" : void 0;
    return r.issues.push({
      expected: "number",
      code: "invalid_type",
      input: o,
      inst: e,
      ...s ? { received: s } : {}
    }), r;
  };
}), vi = /* @__PURE__ */ m("$ZodNumber", (e, t) => {
  Ia.init(e, t), Sn.init(e, t);
}), bi = /* @__PURE__ */ m("$ZodBoolean", (e, t) => {
  W.init(e, t), e._zod.pattern = Sa, e._zod.parse = (r, n) => {
    if (t.coerce)
      try {
        r.value = !!r.value;
      } catch {
      }
    const o = r.value;
    return typeof o == "boolean" || r.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: o,
      inst: e
    }), r;
  };
}), xi = /* @__PURE__ */ m("$ZodUnknown", (e, t) => {
  W.init(e, t), e._zod.parse = (r) => r;
}), yi = /* @__PURE__ */ m("$ZodNever", (e, t) => {
  W.init(e, t), e._zod.parse = (r, n) => (r.issues.push({
    expected: "never",
    code: "invalid_type",
    input: r.value,
    inst: e
  }), r);
}), wi = /* @__PURE__ */ m("$ZodDate", (e, t) => {
  W.init(e, t), e._zod.parse = (r, n) => {
    if (t.coerce)
      try {
        r.value = new Date(r.value);
      } catch {
      }
    const o = r.value, s = o instanceof Date;
    return s && !Number.isNaN(o.getTime()) || r.issues.push({
      expected: "date",
      code: "invalid_type",
      input: o,
      ...s ? { received: "Invalid Date" } : {},
      inst: e
    }), r;
  };
});
function _r(e, t, r) {
  e.issues.length && t.issues.push(...bn(r, e.issues)), t.value[r] = e.value;
}
const _i = /* @__PURE__ */ m("$ZodArray", (e, t) => {
  W.init(e, t), e._zod.parse = (r, n) => {
    const o = r.value;
    if (!Array.isArray(o))
      return r.issues.push({
        expected: "array",
        code: "invalid_type",
        input: o,
        inst: e
      }), r;
    r.value = Array(o.length);
    const s = [];
    for (let a = 0; a < o.length; a++) {
      const i = o[a], u = t.element._zod.run({
        value: i,
        issues: []
      }, n);
      u instanceof Promise ? s.push(u.then((l) => _r(l, r, a))) : _r(u, r, a);
    }
    return s.length ? Promise.all(s).then(() => r) : r;
  };
});
function bt(e, t, r, n) {
  e.issues.length && t.issues.push(...bn(r, e.issues)), e.value === void 0 ? r in n && (t.value[r] = void 0) : t.value[r] = e.value;
}
function Dn(e) {
  const t = Object.keys(e.shape);
  for (const n of t)
    if (!e.shape?.[n]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${n}": expected a Zod schema`);
  const r = Zs(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(r)
  };
}
function zn(e, t, r, n, o, s) {
  const a = [], i = o.keySet, u = o.catchall._zod, l = u.def.type;
  for (const f of Object.keys(t)) {
    if (i.has(f))
      continue;
    if (l === "never") {
      a.push(f);
      continue;
    }
    const p = u.run({ value: t[f], issues: [] }, n);
    p instanceof Promise ? e.push(p.then((h) => bt(h, r, f, t))) : bt(p, r, f, t);
  }
  return a.length && r.issues.push({
    code: "unrecognized_keys",
    keys: a,
    input: t,
    inst: s
  }), e.length ? Promise.all(e).then(() => r) : r;
}
const ki = /* @__PURE__ */ m("$ZodObject", (e, t) => {
  W.init(e, t);
  const r = Qt(() => Dn(t));
  O(e._zod, "propValues", () => {
    const a = t.shape, i = {};
    for (const u in a) {
      const l = a[u]._zod;
      if (l.values) {
        i[u] ?? (i[u] = /* @__PURE__ */ new Set());
        for (const f of l.values)
          i[u].add(f);
      }
    }
    return i;
  });
  const n = vt, o = t.catchall;
  let s;
  e._zod.parse = (a, i) => {
    s ?? (s = r.value);
    const u = a.value;
    if (!n(u))
      return a.issues.push({
        expected: "object",
        code: "invalid_type",
        input: u,
        inst: e
      }), a;
    a.value = {};
    const l = [], f = s.shape;
    for (const p of s.keys) {
      const v = f[p]._zod.run({ value: u[p], issues: [] }, i);
      v instanceof Promise ? l.push(v.then((y) => bt(y, a, p, u))) : bt(v, a, p, u);
    }
    return o ? zn(l, u, a, i, r.value, e) : l.length ? Promise.all(l).then(() => a) : a;
  };
}), Ni = /* @__PURE__ */ m("$ZodObjectJIT", (e, t) => {
  ki.init(e, t);
  const r = e._zod.parse, n = Qt(() => Dn(t)), o = (h) => {
    const v = new Va(["shape", "payload", "ctx"]), y = n.value, g = (E) => {
      const _ = yr(E);
      return `shape[${_}]._zod.run({ value: input[${_}], issues: [] }, ctx)`;
    };
    v.write("const input = payload.value;");
    const x = /* @__PURE__ */ Object.create(null);
    let A = 0;
    for (const E of y.keys)
      x[E] = `key_${A++}`;
    v.write("const newResult = {};");
    for (const E of y.keys) {
      const _ = x[E], w = yr(E);
      v.write(`const ${_} = ${g(E)};`), v.write(`
        if (${_}.issues.length) {
          payload.issues = payload.issues.concat(${_}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${w}, ...iss.path] : [${w}]
          })));
        }
        
        
        if (${_}.value === undefined) {
          if (${w} in input) {
            newResult[${w}] = undefined;
          }
        } else {
          newResult[${w}] = ${_}.value;
        }
        
      `);
    }
    v.write("payload.value = newResult;"), v.write("return payload;");
    const D = v.compile();
    return (E, _) => D(h, E, _);
  };
  let s;
  const a = vt, i = !pn.jitless, l = i && $s.value, f = t.catchall;
  let p;
  e._zod.parse = (h, v) => {
    p ?? (p = n.value);
    const y = h.value;
    return a(y) ? i && l && v?.async === !1 && v.jitless !== !0 ? (s || (s = o(t.shape)), h = s(h, v), f ? zn([], y, h, v, p, e) : h) : r(h, v) : (h.issues.push({
      expected: "object",
      code: "invalid_type",
      input: y,
      inst: e
    }), h);
  };
});
function kr(e, t, r, n) {
  for (const s of e)
    if (s.issues.length === 0)
      return t.value = s.value, t;
  const o = e.filter((s) => !ze(s));
  return o.length === 1 ? (t.value = o[0].value, o[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: r,
    errors: e.map((s) => s.issues.map((a) => ke(a, n, _e())))
  }), t);
}
const Ei = /* @__PURE__ */ m("$ZodUnion", (e, t) => {
  W.init(e, t), O(e._zod, "optin", () => t.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), O(e._zod, "optout", () => t.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), O(e._zod, "values", () => {
    if (t.options.every((o) => o._zod.values))
      return new Set(t.options.flatMap((o) => Array.from(o._zod.values)));
  }), O(e._zod, "pattern", () => {
    if (t.options.every((o) => o._zod.pattern)) {
      const o = t.options.map((s) => s._zod.pattern);
      return new RegExp(`^(${o.map((s) => tr(s.source)).join("|")})$`);
    }
  });
  const r = t.options.length === 1, n = t.options[0]._zod.run;
  e._zod.parse = (o, s) => {
    if (r)
      return n(o, s);
    let a = !1;
    const i = [];
    for (const u of t.options) {
      const l = u._zod.run({
        value: o.value,
        issues: []
      }, s);
      if (l instanceof Promise)
        i.push(l), a = !0;
      else {
        if (l.issues.length === 0)
          return l;
        i.push(l);
      }
    }
    return a ? Promise.all(i).then((u) => kr(u, o, e, s)) : kr(i, o, e, s);
  };
}), ji = /* @__PURE__ */ m("$ZodIntersection", (e, t) => {
  W.init(e, t), e._zod.parse = (r, n) => {
    const o = r.value, s = t.left._zod.run({ value: o, issues: [] }, n), a = t.right._zod.run({ value: o, issues: [] }, n);
    return s instanceof Promise || a instanceof Promise ? Promise.all([s, a]).then(([u, l]) => Nr(r, u, l)) : Nr(r, s, a);
  };
});
function Bt(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (Ge(e) && Ge(t)) {
    const r = Object.keys(t), n = Object.keys(e).filter((s) => r.indexOf(s) !== -1), o = { ...e, ...t };
    for (const s of n) {
      const a = Bt(e[s], t[s]);
      if (!a.valid)
        return {
          valid: !1,
          mergeErrorPath: [s, ...a.mergeErrorPath]
        };
      o[s] = a.data;
    }
    return { valid: !0, data: o };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const r = [];
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = t[n], a = Bt(o, s);
      if (!a.valid)
        return {
          valid: !1,
          mergeErrorPath: [n, ...a.mergeErrorPath]
        };
      r.push(a.data);
    }
    return { valid: !0, data: r };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Nr(e, t, r) {
  if (t.issues.length && e.issues.push(...t.issues), r.issues.length && e.issues.push(...r.issues), ze(e))
    return e;
  const n = Bt(t.value, r.value);
  if (!n.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(n.mergeErrorPath)}`);
  return e.value = n.data, e;
}
const Ci = /* @__PURE__ */ m("$ZodEnum", (e, t) => {
  W.init(e, t);
  const r = Is(t.entries), n = new Set(r);
  e._zod.values = n, e._zod.pattern = new RegExp(`^(${r.filter((o) => Os.has(typeof o)).map((o) => typeof o == "string" ? _t(o) : o.toString()).join("|")})$`), e._zod.parse = (o, s) => {
    const a = o.value;
    return n.has(a) || o.issues.push({
      code: "invalid_value",
      values: r,
      input: a,
      inst: e
    }), o;
  };
}), Ai = /* @__PURE__ */ m("$ZodTransform", (e, t) => {
  W.init(e, t), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      throw new hn(e.constructor.name);
    const o = t.transform(r.value, r);
    if (n.async)
      return (o instanceof Promise ? o : Promise.resolve(o)).then((a) => (r.value = a, r));
    if (o instanceof Promise)
      throw new Te();
    return r.value = o, r;
  };
});
function Er(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const Si = /* @__PURE__ */ m("$ZodOptional", (e, t) => {
  W.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", O(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), O(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${tr(r.source)})?$`) : void 0;
  }), e._zod.parse = (r, n) => {
    if (t.innerType._zod.optin === "optional") {
      const o = t.innerType._zod.run(r, n);
      return o instanceof Promise ? o.then((s) => Er(s, r.value)) : Er(o, r.value);
    }
    return r.value === void 0 ? r : t.innerType._zod.run(r, n);
  };
}), Di = /* @__PURE__ */ m("$ZodNullable", (e, t) => {
  W.init(e, t), O(e._zod, "optin", () => t.innerType._zod.optin), O(e._zod, "optout", () => t.innerType._zod.optout), O(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${tr(r.source)}|null)$`) : void 0;
  }), O(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (r, n) => r.value === null ? r : t.innerType._zod.run(r, n);
}), zi = /* @__PURE__ */ m("$ZodDefault", (e, t) => {
  W.init(e, t), e._zod.optin = "optional", O(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(r, n);
    if (r.value === void 0)
      return r.value = t.defaultValue, r;
    const o = t.innerType._zod.run(r, n);
    return o instanceof Promise ? o.then((s) => jr(s, t)) : jr(o, t);
  };
});
function jr(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const Ti = /* @__PURE__ */ m("$ZodPrefault", (e, t) => {
  W.init(e, t), e._zod.optin = "optional", O(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => (n.direction === "backward" || r.value === void 0 && (r.value = t.defaultValue), t.innerType._zod.run(r, n));
}), Ii = /* @__PURE__ */ m("$ZodNonOptional", (e, t) => {
  W.init(e, t), O(e._zod, "values", () => {
    const r = t.innerType._zod.values;
    return r ? new Set([...r].filter((n) => n !== void 0)) : void 0;
  }), e._zod.parse = (r, n) => {
    const o = t.innerType._zod.run(r, n);
    return o instanceof Promise ? o.then((s) => Cr(s, e)) : Cr(o, e);
  };
});
function Cr(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const Ri = /* @__PURE__ */ m("$ZodCatch", (e, t) => {
  W.init(e, t), O(e._zod, "optin", () => t.innerType._zod.optin), O(e._zod, "optout", () => t.innerType._zod.optout), O(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(r, n);
    const o = t.innerType._zod.run(r, n);
    return o instanceof Promise ? o.then((s) => (r.value = s.value, s.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: s.issues.map((a) => ke(a, n, _e()))
      },
      input: r.value
    }), r.issues = []), r)) : (r.value = o.value, o.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: o.issues.map((s) => ke(s, n, _e()))
      },
      input: r.value
    }), r.issues = []), r);
  };
}), Pi = /* @__PURE__ */ m("$ZodPipe", (e, t) => {
  W.init(e, t), O(e._zod, "values", () => t.in._zod.values), O(e._zod, "optin", () => t.in._zod.optin), O(e._zod, "optout", () => t.out._zod.optout), O(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (r, n) => {
    if (n.direction === "backward") {
      const s = t.out._zod.run(r, n);
      return s instanceof Promise ? s.then((a) => tt(a, t.in, n)) : tt(s, t.in, n);
    }
    const o = t.in._zod.run(r, n);
    return o instanceof Promise ? o.then((s) => tt(s, t.out, n)) : tt(o, t.out, n);
  };
});
function tt(e, t, r) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, r);
}
const $i = /* @__PURE__ */ m("$ZodReadonly", (e, t) => {
  W.init(e, t), O(e._zod, "propValues", () => t.innerType._zod.propValues), O(e._zod, "values", () => t.innerType._zod.values), O(e._zod, "optin", () => t.innerType._zod.optin), O(e._zod, "optout", () => t.innerType._zod.optout), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(r, n);
    const o = t.innerType._zod.run(r, n);
    return o instanceof Promise ? o.then(Ar) : Ar(o);
  };
});
function Ar(e) {
  return e.value = Object.freeze(e.value), e;
}
const Oi = /* @__PURE__ */ m("$ZodCustom", (e, t) => {
  J.init(e, t), W.init(e, t), e._zod.parse = (r, n) => r, e._zod.check = (r) => {
    const n = r.value, o = t.fn(n);
    if (o instanceof Promise)
      return o.then((s) => Sr(s, r, n, e));
    Sr(o, r, n, e);
  };
});
function Sr(e, t, r, n) {
  if (!e) {
    const o = {
      code: "custom",
      input: r,
      inst: n,
      // incorporates params.error into issue reporting
      path: [...n._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !n._zod.def.abort
      // params: inst._zod.def.params,
    };
    n._zod.def.params && (o.params = n._zod.def.params), t.issues.push(He(o));
  }
}
class Zi {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...r) {
    const n = r[0];
    if (this._map.set(t, n), n && typeof n == "object" && "id" in n) {
      if (this._idmap.has(n.id))
        throw new Error(`ID ${n.id} already exists in the registry`);
      this._idmap.set(n.id, t);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const r = this._map.get(t);
    return r && typeof r == "object" && "id" in r && this._idmap.delete(r.id), this._map.delete(t), this;
  }
  get(t) {
    const r = t._zod.parent;
    if (r) {
      const n = { ...this.get(r) ?? {} };
      delete n.id;
      const o = { ...n, ...this._map.get(t) };
      return Object.keys(o).length ? o : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function Mi() {
  return new Zi();
}
const rt = /* @__PURE__ */ Mi();
function Li(e, t) {
  return new e({
    type: "string",
    ...C(t)
  });
}
function Fi(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
function Dr(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
function Ui(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
function Wi(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...C(t)
  });
}
function Vi(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...C(t)
  });
}
function Bi(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...C(t)
  });
}
function Gi(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
function Hi(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
function Yi(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
function qi(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
function Ki(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
function Xi(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
function Ji(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
function Qi(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
function ec(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
function tc(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
function rc(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
function nc(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
function oc(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
function sc(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
function ac(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
function ic(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
function cc(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...C(t)
  });
}
function lc(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...C(t)
  });
}
function uc(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...C(t)
  });
}
function dc(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...C(t)
  });
}
function fc(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...C(t)
  });
}
function mc(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...C(t)
  });
}
function hc(e, t) {
  return new e({
    type: "boolean",
    ...C(t)
  });
}
function pc(e) {
  return new e({
    type: "unknown"
  });
}
function gc(e, t) {
  return new e({
    type: "never",
    ...C(t)
  });
}
function vc(e, t) {
  return new e({
    type: "date",
    ...C(t)
  });
}
function zr(e, t) {
  return new jn({
    check: "less_than",
    ...C(t),
    value: e,
    inclusive: !1
  });
}
function ft(e, t) {
  return new jn({
    check: "less_than",
    ...C(t),
    value: e,
    inclusive: !0
  });
}
function Tr(e, t) {
  return new Cn({
    check: "greater_than",
    ...C(t),
    value: e,
    inclusive: !1
  });
}
function mt(e, t) {
  return new Cn({
    check: "greater_than",
    ...C(t),
    value: e,
    inclusive: !0
  });
}
function Ir(e, t) {
  return new Ta({
    check: "multiple_of",
    ...C(t),
    value: e
  });
}
function Tn(e, t) {
  return new Ra({
    check: "max_length",
    ...C(t),
    maximum: e
  });
}
function xt(e, t) {
  return new Pa({
    check: "min_length",
    ...C(t),
    minimum: e
  });
}
function In(e, t) {
  return new $a({
    check: "length_equals",
    ...C(t),
    length: e
  });
}
function bc(e, t) {
  return new Oa({
    check: "string_format",
    format: "regex",
    ...C(t),
    pattern: e
  });
}
function xc(e) {
  return new Za({
    check: "string_format",
    format: "lowercase",
    ...C(e)
  });
}
function yc(e) {
  return new Ma({
    check: "string_format",
    format: "uppercase",
    ...C(e)
  });
}
function wc(e, t) {
  return new La({
    check: "string_format",
    format: "includes",
    ...C(t),
    includes: e
  });
}
function _c(e, t) {
  return new Fa({
    check: "string_format",
    format: "starts_with",
    ...C(t),
    prefix: e
  });
}
function kc(e, t) {
  return new Ua({
    check: "string_format",
    format: "ends_with",
    ...C(t),
    suffix: e
  });
}
function Ke(e) {
  return new Wa({
    check: "overwrite",
    tx: e
  });
}
function Nc(e) {
  return Ke((t) => t.normalize(e));
}
function Ec() {
  return Ke((e) => e.trim());
}
function jc() {
  return Ke((e) => e.toLowerCase());
}
function Cc() {
  return Ke((e) => e.toUpperCase());
}
function Ac(e, t, r) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...C(r)
  });
}
function Sc(e, t, r) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...C(r)
  });
}
function Dc(e) {
  const t = zc((r) => (r.addIssue = (n) => {
    if (typeof n == "string")
      r.issues.push(He(n, r.value, t._zod.def));
    else {
      const o = n;
      o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = r.value), o.inst ?? (o.inst = t), o.continue ?? (o.continue = !t._zod.def.abort), r.issues.push(He(o));
    }
  }, e(r.value, r)));
  return t;
}
function zc(e, t) {
  const r = new J({
    check: "custom",
    ...C(t)
  });
  return r._zod.check = e, r;
}
const Tc = /* @__PURE__ */ m("ZodISODateTime", (e, t) => {
  ni.init(e, t), M.init(e, t);
});
function Ic(e) {
  return cc(Tc, e);
}
const Rc = /* @__PURE__ */ m("ZodISODate", (e, t) => {
  oi.init(e, t), M.init(e, t);
});
function Pc(e) {
  return lc(Rc, e);
}
const $c = /* @__PURE__ */ m("ZodISOTime", (e, t) => {
  si.init(e, t), M.init(e, t);
});
function Oc(e) {
  return uc($c, e);
}
const Zc = /* @__PURE__ */ m("ZodISODuration", (e, t) => {
  ai.init(e, t), M.init(e, t);
});
function Mc(e) {
  return dc(Zc, e);
}
const Lc = (e, t) => {
  yn.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (r) => Ys(e, r)
      // enumerable: false,
    },
    flatten: {
      value: (r) => Hs(e, r)
      // enumerable: false,
    },
    addIssue: {
      value: (r) => {
        e.issues.push(r), e.message = JSON.stringify(e.issues, Vt, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (r) => {
        e.issues.push(...r), e.message = JSON.stringify(e.issues, Vt, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return e.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, te = m("ZodError", Lc, {
  Parent: Error
}), Fc = /* @__PURE__ */ nr(te), Uc = /* @__PURE__ */ or(te), Wc = /* @__PURE__ */ kt(te), Vc = /* @__PURE__ */ Nt(te), Bc = /* @__PURE__ */ Xs(te), Gc = /* @__PURE__ */ Js(te), Hc = /* @__PURE__ */ Qs(te), Yc = /* @__PURE__ */ ea(te), qc = /* @__PURE__ */ ta(te), Kc = /* @__PURE__ */ ra(te), Xc = /* @__PURE__ */ na(te), Jc = /* @__PURE__ */ oa(te), V = /* @__PURE__ */ m("ZodType", (e, t) => (W.init(e, t), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...r) => e.clone(
  {
    ...t,
    checks: [
      ...t.checks ?? [],
      ...r.map((n) => typeof n == "function" ? { _zod: { check: n, def: { check: "custom" }, onattach: [] } } : n)
    ]
  }
  // { parent: true }
), e.clone = (r, n) => be(e, r, n), e.brand = () => e, e.register = ((r, n) => (r.add(e, n), e)), e.parse = (r, n) => Fc(e, r, n, { callee: e.parse }), e.safeParse = (r, n) => Wc(e, r, n), e.parseAsync = async (r, n) => Uc(e, r, n, { callee: e.parseAsync }), e.safeParseAsync = async (r, n) => Vc(e, r, n), e.spa = e.safeParseAsync, e.encode = (r, n) => Bc(e, r, n), e.decode = (r, n) => Gc(e, r, n), e.encodeAsync = async (r, n) => Hc(e, r, n), e.decodeAsync = async (r, n) => Yc(e, r, n), e.safeEncode = (r, n) => qc(e, r, n), e.safeDecode = (r, n) => Kc(e, r, n), e.safeEncodeAsync = async (r, n) => Xc(e, r, n), e.safeDecodeAsync = async (r, n) => Jc(e, r, n), e.refine = (r, n) => e.check(Vl(r, n)), e.superRefine = (r) => e.check(Bl(r)), e.overwrite = (r) => e.check(Ke(r)), e.optional = () => Or(e), e.nullable = () => Zr(e), e.nullish = () => Or(Zr(e)), e.nonoptional = (r) => Ol(e, r), e.array = () => $n(e), e.or = (r) => Cl([e, r]), e.and = (r) => Sl(e, r), e.transform = (r) => Mr(e, zl(r)), e.default = (r) => Rl(e, r), e.prefault = (r) => $l(e, r), e.catch = (r) => Ml(e, r), e.pipe = (r) => Mr(e, r), e.readonly = () => Ul(e), e.describe = (r) => {
  const n = e.clone();
  return rt.add(n, { description: r }), n;
}, Object.defineProperty(e, "description", {
  get() {
    return rt.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...r) => {
  if (r.length === 0)
    return rt.get(e);
  const n = e.clone();
  return rt.add(n, r[0]), n;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e)), Rn = /* @__PURE__ */ m("_ZodString", (e, t) => {
  sr.init(e, t), V.init(e, t);
  const r = e._zod.bag;
  e.format = r.format ?? null, e.minLength = r.minimum ?? null, e.maxLength = r.maximum ?? null, e.regex = (...n) => e.check(bc(...n)), e.includes = (...n) => e.check(wc(...n)), e.startsWith = (...n) => e.check(_c(...n)), e.endsWith = (...n) => e.check(kc(...n)), e.min = (...n) => e.check(xt(...n)), e.max = (...n) => e.check(Tn(...n)), e.length = (...n) => e.check(In(...n)), e.nonempty = (...n) => e.check(xt(1, ...n)), e.lowercase = (n) => e.check(xc(n)), e.uppercase = (n) => e.check(yc(n)), e.trim = () => e.check(Ec()), e.normalize = (...n) => e.check(Nc(...n)), e.toLowerCase = () => e.check(jc()), e.toUpperCase = () => e.check(Cc());
}), Qc = /* @__PURE__ */ m("ZodString", (e, t) => {
  sr.init(e, t), Rn.init(e, t), e.email = (r) => e.check(Fi(el, r)), e.url = (r) => e.check(Gi(tl, r)), e.jwt = (r) => e.check(ic(gl, r)), e.emoji = (r) => e.check(Hi(rl, r)), e.guid = (r) => e.check(Dr(Rr, r)), e.uuid = (r) => e.check(Ui(nt, r)), e.uuidv4 = (r) => e.check(Wi(nt, r)), e.uuidv6 = (r) => e.check(Vi(nt, r)), e.uuidv7 = (r) => e.check(Bi(nt, r)), e.nanoid = (r) => e.check(Yi(nl, r)), e.guid = (r) => e.check(Dr(Rr, r)), e.cuid = (r) => e.check(qi(ol, r)), e.cuid2 = (r) => e.check(Ki(sl, r)), e.ulid = (r) => e.check(Xi(al, r)), e.base64 = (r) => e.check(oc(ml, r)), e.base64url = (r) => e.check(sc(hl, r)), e.xid = (r) => e.check(Ji(il, r)), e.ksuid = (r) => e.check(Qi(cl, r)), e.ipv4 = (r) => e.check(ec(ll, r)), e.ipv6 = (r) => e.check(tc(ul, r)), e.cidrv4 = (r) => e.check(rc(dl, r)), e.cidrv6 = (r) => e.check(nc(fl, r)), e.e164 = (r) => e.check(ac(pl, r)), e.datetime = (r) => e.check(Ic(r)), e.date = (r) => e.check(Pc(r)), e.time = (r) => e.check(Oc(r)), e.duration = (r) => e.check(Mc(r));
});
function G(e) {
  return Li(Qc, e);
}
const M = /* @__PURE__ */ m("ZodStringFormat", (e, t) => {
  Z.init(e, t), Rn.init(e, t);
}), el = /* @__PURE__ */ m("ZodEmail", (e, t) => {
  Ya.init(e, t), M.init(e, t);
}), Rr = /* @__PURE__ */ m("ZodGUID", (e, t) => {
  Ga.init(e, t), M.init(e, t);
}), nt = /* @__PURE__ */ m("ZodUUID", (e, t) => {
  Ha.init(e, t), M.init(e, t);
}), tl = /* @__PURE__ */ m("ZodURL", (e, t) => {
  qa.init(e, t), M.init(e, t);
}), rl = /* @__PURE__ */ m("ZodEmoji", (e, t) => {
  Ka.init(e, t), M.init(e, t);
}), nl = /* @__PURE__ */ m("ZodNanoID", (e, t) => {
  Xa.init(e, t), M.init(e, t);
}), ol = /* @__PURE__ */ m("ZodCUID", (e, t) => {
  Ja.init(e, t), M.init(e, t);
}), sl = /* @__PURE__ */ m("ZodCUID2", (e, t) => {
  Qa.init(e, t), M.init(e, t);
}), al = /* @__PURE__ */ m("ZodULID", (e, t) => {
  ei.init(e, t), M.init(e, t);
}), il = /* @__PURE__ */ m("ZodXID", (e, t) => {
  ti.init(e, t), M.init(e, t);
}), cl = /* @__PURE__ */ m("ZodKSUID", (e, t) => {
  ri.init(e, t), M.init(e, t);
}), ll = /* @__PURE__ */ m("ZodIPv4", (e, t) => {
  ii.init(e, t), M.init(e, t);
}), ul = /* @__PURE__ */ m("ZodIPv6", (e, t) => {
  ci.init(e, t), M.init(e, t);
}), dl = /* @__PURE__ */ m("ZodCIDRv4", (e, t) => {
  li.init(e, t), M.init(e, t);
}), fl = /* @__PURE__ */ m("ZodCIDRv6", (e, t) => {
  ui.init(e, t), M.init(e, t);
}), ml = /* @__PURE__ */ m("ZodBase64", (e, t) => {
  di.init(e, t), M.init(e, t);
}), hl = /* @__PURE__ */ m("ZodBase64URL", (e, t) => {
  mi.init(e, t), M.init(e, t);
}), pl = /* @__PURE__ */ m("ZodE164", (e, t) => {
  hi.init(e, t), M.init(e, t);
}), gl = /* @__PURE__ */ m("ZodJWT", (e, t) => {
  gi.init(e, t), M.init(e, t);
}), Pn = /* @__PURE__ */ m("ZodNumber", (e, t) => {
  Sn.init(e, t), V.init(e, t), e.gt = (n, o) => e.check(Tr(n, o)), e.gte = (n, o) => e.check(mt(n, o)), e.min = (n, o) => e.check(mt(n, o)), e.lt = (n, o) => e.check(zr(n, o)), e.lte = (n, o) => e.check(ft(n, o)), e.max = (n, o) => e.check(ft(n, o)), e.int = (n) => e.check(Pr(n)), e.safe = (n) => e.check(Pr(n)), e.positive = (n) => e.check(Tr(0, n)), e.nonnegative = (n) => e.check(mt(0, n)), e.negative = (n) => e.check(zr(0, n)), e.nonpositive = (n) => e.check(ft(0, n)), e.multipleOf = (n, o) => e.check(Ir(n, o)), e.step = (n, o) => e.check(Ir(n, o)), e.finite = () => e;
  const r = e._zod.bag;
  e.minValue = Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? 0.5), e.isFinite = !0, e.format = r.format ?? null;
});
function vl(e) {
  return fc(Pn, e);
}
const bl = /* @__PURE__ */ m("ZodNumberFormat", (e, t) => {
  vi.init(e, t), Pn.init(e, t);
});
function Pr(e) {
  return mc(bl, e);
}
const xl = /* @__PURE__ */ m("ZodBoolean", (e, t) => {
  bi.init(e, t), V.init(e, t);
});
function ar(e) {
  return hc(xl, e);
}
const yl = /* @__PURE__ */ m("ZodUnknown", (e, t) => {
  xi.init(e, t), V.init(e, t);
});
function $r() {
  return pc(yl);
}
const wl = /* @__PURE__ */ m("ZodNever", (e, t) => {
  yi.init(e, t), V.init(e, t);
});
function _l(e) {
  return gc(wl, e);
}
const kl = /* @__PURE__ */ m("ZodDate", (e, t) => {
  wi.init(e, t), V.init(e, t), e.min = (n, o) => e.check(mt(n, o)), e.max = (n, o) => e.check(ft(n, o));
  const r = e._zod.bag;
  e.minDate = r.minimum ? new Date(r.minimum) : null, e.maxDate = r.maximum ? new Date(r.maximum) : null;
});
function ge(e) {
  return vc(kl, e);
}
const Nl = /* @__PURE__ */ m("ZodArray", (e, t) => {
  _i.init(e, t), V.init(e, t), e.element = t.element, e.min = (r, n) => e.check(xt(r, n)), e.nonempty = (r) => e.check(xt(1, r)), e.max = (r, n) => e.check(Tn(r, n)), e.length = (r, n) => e.check(In(r, n)), e.unwrap = () => e.element;
});
function $n(e, t) {
  return Ac(Nl, e, t);
}
const El = /* @__PURE__ */ m("ZodObject", (e, t) => {
  Ni.init(e, t), V.init(e, t), O(e, "shape", () => t.shape), e.keyof = () => Ie(Object.keys(e._zod.def.shape)), e.catchall = (r) => e.clone({ ...e._zod.def, catchall: r }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: $r() }), e.loose = () => e.clone({ ...e._zod.def, catchall: $r() }), e.strict = () => e.clone({ ...e._zod.def, catchall: _l() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (r) => Us(e, r), e.safeExtend = (r) => Ws(e, r), e.merge = (r) => Vs(e, r), e.pick = (r) => Ls(e, r), e.omit = (r) => Fs(e, r), e.partial = (...r) => Bs(On, e, r[0]), e.required = (...r) => Gs(Zn, e, r[0]);
});
function yt(e, t) {
  const r = {
    type: "object",
    get shape() {
      return ve(this, "shape", e ? Ps(e) : {}), this.shape;
    },
    ...C(t)
  };
  return new El(r);
}
const jl = /* @__PURE__ */ m("ZodUnion", (e, t) => {
  Ei.init(e, t), V.init(e, t), e.options = t.options;
});
function Cl(e, t) {
  return new jl({
    type: "union",
    options: e,
    ...C(t)
  });
}
const Al = /* @__PURE__ */ m("ZodIntersection", (e, t) => {
  ji.init(e, t), V.init(e, t);
});
function Sl(e, t) {
  return new Al({
    type: "intersection",
    left: e,
    right: t
  });
}
const Gt = /* @__PURE__ */ m("ZodEnum", (e, t) => {
  Ci.init(e, t), V.init(e, t), e.enum = t.entries, e.options = Object.values(t.entries);
  const r = new Set(Object.keys(t.entries));
  e.extract = (n, o) => {
    const s = {};
    for (const a of n)
      if (r.has(a))
        s[a] = t.entries[a];
      else
        throw new Error(`Key ${a} not found in enum`);
    return new Gt({
      ...t,
      checks: [],
      ...C(o),
      entries: s
    });
  }, e.exclude = (n, o) => {
    const s = { ...t.entries };
    for (const a of n)
      if (r.has(a))
        delete s[a];
      else
        throw new Error(`Key ${a} not found in enum`);
    return new Gt({
      ...t,
      checks: [],
      ...C(o),
      entries: s
    });
  };
});
function Ie(e, t) {
  const r = Array.isArray(e) ? Object.fromEntries(e.map((n) => [n, n])) : e;
  return new Gt({
    type: "enum",
    entries: r,
    ...C(t)
  });
}
const Dl = /* @__PURE__ */ m("ZodTransform", (e, t) => {
  Ai.init(e, t), V.init(e, t), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      throw new hn(e.constructor.name);
    r.addIssue = (s) => {
      if (typeof s == "string")
        r.issues.push(He(s, r.value, t));
      else {
        const a = s;
        a.fatal && (a.continue = !1), a.code ?? (a.code = "custom"), a.input ?? (a.input = r.value), a.inst ?? (a.inst = e), r.issues.push(He(a));
      }
    };
    const o = t.transform(r.value, r);
    return o instanceof Promise ? o.then((s) => (r.value = s, r)) : (r.value = o, r);
  };
});
function zl(e) {
  return new Dl({
    type: "transform",
    transform: e
  });
}
const On = /* @__PURE__ */ m("ZodOptional", (e, t) => {
  Si.init(e, t), V.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Or(e) {
  return new On({
    type: "optional",
    innerType: e
  });
}
const Tl = /* @__PURE__ */ m("ZodNullable", (e, t) => {
  Di.init(e, t), V.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Zr(e) {
  return new Tl({
    type: "nullable",
    innerType: e
  });
}
const Il = /* @__PURE__ */ m("ZodDefault", (e, t) => {
  zi.init(e, t), V.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Rl(e, t) {
  return new Il({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : vn(t);
    }
  });
}
const Pl = /* @__PURE__ */ m("ZodPrefault", (e, t) => {
  Ti.init(e, t), V.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function $l(e, t) {
  return new Pl({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : vn(t);
    }
  });
}
const Zn = /* @__PURE__ */ m("ZodNonOptional", (e, t) => {
  Ii.init(e, t), V.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Ol(e, t) {
  return new Zn({
    type: "nonoptional",
    innerType: e,
    ...C(t)
  });
}
const Zl = /* @__PURE__ */ m("ZodCatch", (e, t) => {
  Ri.init(e, t), V.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Ml(e, t) {
  return new Zl({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const Ll = /* @__PURE__ */ m("ZodPipe", (e, t) => {
  Pi.init(e, t), V.init(e, t), e.in = t.in, e.out = t.out;
});
function Mr(e, t) {
  return new Ll({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const Fl = /* @__PURE__ */ m("ZodReadonly", (e, t) => {
  $i.init(e, t), V.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Ul(e) {
  return new Fl({
    type: "readonly",
    innerType: e
  });
}
const Wl = /* @__PURE__ */ m("ZodCustom", (e, t) => {
  Oi.init(e, t), V.init(e, t);
});
function Vl(e, t = {}) {
  return Sc(Wl, e, t);
}
function Bl(e) {
  return Dc(e);
}
var Gl = /* @__PURE__ */ ((e) => (e.PENDING = "pending", e.ACTIVE = "active", e.ARCHIVED = "archived", e))(Gl || {}), B = /* @__PURE__ */ ((e) => (e.PENDING = "pending", e.SENT = "sent", e.DELIVERED = "delivered", e.READ = "read", e.FAILED = "failed", e))(B || {}), jt = /* @__PURE__ */ ((e) => (e.INBOUND = "inbound", e.OUTBOUND = "outbound", e))(jt || {}), Hl = /* @__PURE__ */ ((e) => (e.IMAGE = "image", e.VIDEO = "video", e.AUDIO = "audio", e.DOCUMENT = "document", e.OTHER = "other", e))(Hl || {}), Yl = /* @__PURE__ */ ((e) => (e.CONTACTS = "contacts", e.CONVERSATIONS = "conversations", e.MESSAGES = "messages", e))(Yl || {});
const ql = yt({
  id: G().optional().describe("The ID of the contact"),
  firstName: G().min(1, "First name is required").describe("The first name of the contact"),
  lastName: G().min(1, "Last name is required").describe("The last name of the contact"),
  email: G().email("Invalid email address").optional().describe("The email of the contact"),
  phoneNumber: G().min(9, "Phone number must be at least 9 digits").max(15, "Phone number must be less than 15 digits").describe("The phone number of the contact"),
  avatarUrl: G().optional().default("").describe("The avatar of the contact"),
  isActive: ar().default(!0).describe("Whether the contact is active"),
  notes: G().optional().describe("The notes of the contact"),
  createdAt: ge().describe("The date the contact was created"),
  updatedAt: ge().describe("The date the contact was updated").optional()
}), Kl = yt({
  id: G().optional().describe("The ID of the conversation"),
  contactId: G().min(1, "Contact ID is required").describe("The ID of the contact"),
  lastMessage: G().optional().default("").describe("The last message of the conversation"),
  lastMessageAt: ge().optional().describe("The date the last message was sent"),
  // TODO: Refine - if lastMessage is not provided, lastMessageId is not required
  lastMessageId: G().min(1, "Last message ID is required").describe("The ID of the last message"),
  unreadCount: vl().default(0).describe("The number of unread messages"),
  lastMessageStatus: Ie(B).default(B.PENDING).describe("The status of the last message"),
  lastMessageDirection: Ie(jt).optional().describe("The direction of the last message"),
  isActive: ar().default(!0).describe("Whether the conversation is active"),
  createdAt: ge().describe("The date the conversation was created"),
  updatedAt: ge().describe("The date the conversation was updated").optional()
}), Xl = yt({
  id: G().optional().describe("The ID of the message"),
  contactId: G().min(1, "Contact ID is required").describe("The ID of the contact"),
  conversationId: G().min(1, "Conversation ID is required").describe("The ID of the conversation"),
  content: G().min(1, "Content is required").describe("The content of the message"),
  senderId: G().min(1, "Sender ID is required").describe("The ID of the sender"),
  receiverId: G().min(1, "Receiver ID is required").describe("The ID of the receiver"),
  mediaType: G().nullable().optional().describe("The type of the media"),
  mediaUrl: G().nullable().optional().describe("The URL of the media"),
  direction: Ie(jt).describe("The direction of the message"),
  currentStatus: Ie(B).default(B.PENDING).describe("The current status of the message"),
  statusHistory: $n(
    yt({
      status: Ie(B),
      at: ge().describe("The date the status was updated"),
      reason: G().optional().describe("The reason for the status change")
    })
  ).describe("The status history of the message"),
  isActive: ar().default(!0).describe("Whether the message is active"),
  createdAt: ge().describe("The date the message was created"),
  updatedAt: ge().describe("The date the message was updated").optional()
}), Jl = ql.omit({ id: !0 }), um = Kl.omit({ id: !0 }), dm = Xl.omit({ id: !0 }).partial({
  // Will be filed by the user/server
  senderId: !0
}), Lr = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), n = (l, f) => {
    const p = typeof l == "function" ? l(t) : l;
    if (!Object.is(p, t)) {
      const h = t;
      t = f ?? (typeof p != "object" || p === null) ? p : Object.assign({}, t, p), r.forEach((v) => v(t, h));
    }
  }, o = () => t, i = { setState: n, getState: o, getInitialState: () => u, subscribe: (l) => (r.add(l), () => r.delete(l)) }, u = t = e(n, o, i);
  return i;
}, Ql = ((e) => e ? Lr(e) : Lr), eu = (e) => e;
function tu(e, t = eu) {
  const r = Ve.useSyncExternalStore(
    e.subscribe,
    Ve.useCallback(() => t(e.getState()), [e, t]),
    Ve.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return Ve.useDebugValue(r), r;
}
const Fr = (e) => {
  const t = Ql(e), r = (n) => tu(t, n);
  return Object.assign(r, t), r;
}, ru = ((e) => e ? Fr(e) : Fr), Ct = ru((e, t) => ({
  contacts: [],
  conversations: [],
  messages: [],
  // Setters
  setContacts: (r) => e({ contacts: r }),
  setConversations: (r) => e({ conversations: r }),
  setMessages: (r) => e({ messages: r }),
  // Resetters
  resetAll: () => e({ contacts: [], conversations: [], messages: [] }),
  reset: (r) => e({ [r]: [] }),
  // Add methods
  addContact: (r) => e({ contacts: [...t().contacts, r] }),
  addConversation: (r) => e({ conversations: [...t().conversations, r] }),
  addMessage: (r) => e({ messages: [...t().messages, r] }),
  updateConversation: (r, n) => e({
    conversations: t().conversations.map(
      (o) => o.id === r ? { ...o, ...n } : o
    )
  })
})), nu = (e) => e.split(" ").map((t) => t.charAt(0)).join(""), Mn = () => Ct.getState(), Ln = (e) => {
  const { contacts: t } = Mn();
  return t.find((r) => r.id === e);
}, ou = (e) => ({
  ...e,
  lastMessageStatus: B.READ
}), Ur = (e) => {
  const { messages: t } = Mn();
  return t.filter(
    (r) => r.conversationId === e
  );
}, su = ({
  conversationItem: e,
  isSelected: t,
  onClick: r,
  onContactInfo: n,
  onConfirmDeleteDialog: o
}) => {
  const [s, a] = U(!1), [i, u] = U(null), [l, f] = U(!1), p = Jt(null), h = Ct((_) => _.contacts), v = (_, w) => `https://ui-avatars.com/api/?name=${_.trim()}+${w.trim()}`;
  Be(() => {
    const _ = Ln(e.contactId);
    u(_ || null), f(!1);
  }, [e, h]);
  const y = () => {
    f(!0);
  }, g = (_) => {
    if (!_) return "";
    const w = new Date(_), T = ((/* @__PURE__ */ new Date()).getTime() - w.getTime()) / (1e3 * 60 * 60);
    return T < 24 ? w.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: !0
    }) : T < 48 ? "Yesterday" : w.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric"
    });
  };
  Be(() => {
    const _ = (w) => {
      p.current && !p.current.contains(w.target) && a(!1);
    };
    return s && document.addEventListener("mousedown", _), () => {
      document.removeEventListener("mousedown", _);
    };
  }, [s]);
  const x = (_) => {
    _.stopPropagation(), a(!s);
  }, A = (_) => {
    _.stopPropagation(), a(!1), n && n(i);
  }, D = (_) => {
    _.stopPropagation(), a(!1), o && o(e);
  }, E = () => {
    a(!1), r && r(e);
  };
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: p,
      className: `flex items-center p-4 cursor-pointer transition-all duration-200 hover:bg-gray-50 relative ${t ? "bg-blue-50 border-r-2 border-blue-500" : ""}`,
      onClick: E,
      children: [
        /* @__PURE__ */ c.jsx("div", { className: "flex-shrink-0 mr-3", children: /* @__PURE__ */ c.jsx("div", { className: "w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-semibold text-sm", children: i?.avatarUrl && !l ? /* @__PURE__ */ c.jsx(
          "img",
          {
            src: i.avatarUrl,
            alt: `${i.firstName} ${i.lastName}`,
            className: "w-12 h-12 rounded-full object-cover",
            onError: y
          }
        ) : i ? /* @__PURE__ */ c.jsx(
          "img",
          {
            src: v(
              i.firstName,
              i.lastName
            ),
            alt: `${i.firstName} ${i.lastName}`,
            className: "w-12 h-12 rounded-full object-cover",
            onError: y
          }
        ) : nu("") }) }),
        /* @__PURE__ */ c.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
            /* @__PURE__ */ c.jsx(
              "h5",
              {
                className: `text-sm font-medium truncate ${e.unreadCount > 0 ? "font-semibold" : ""}`,
                children: i ? `${i.firstName} ${i.lastName}` : ""
              }
            ),
            /* @__PURE__ */ c.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ c.jsx("span", { className: "text-xs text-gray-500 flex-shrink-0 mr-2", children: g(e?.lastMessageAt || /* @__PURE__ */ new Date()) }),
              /* @__PURE__ */ c.jsx(
                "button",
                {
                  onClick: (_) => x(_),
                  className: "p-1 rounded-full hover:bg-gray-200 transition-colors duration-200",
                  children: /* @__PURE__ */ c.jsx(ps, { className: "w-4 h-4 text-gray-500" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ c.jsx(
              "p",
              {
                className: `text-sm truncate ${e.unreadCount > 0 ? "text-gray-900 font-medium" : "text-gray-600"}`,
                children: e.lastMessage || "No messages yet"
              }
            ),
            /* @__PURE__ */ c.jsx("div", { className: "flex items-center ml-2", children: e.unreadCount > 0 ? /* @__PURE__ */ c.jsx("div", { className: "bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium", children: e.unreadCount > 99 ? "99+" : e.unreadCount }) : e.lastMessageStatus === B.DELIVERED && e.lastMessageDirection === "outbound" && /* @__PURE__ */ c.jsx(Wt, { className: "w-4 h-4 text-blue-500" }) })
          ] })
        ] }),
        s && /* @__PURE__ */ c.jsx("div", { className: "absolute right-2 top-12 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-48", children: /* @__PURE__ */ c.jsxs("div", { className: "py-1", children: [
          /* @__PURE__ */ c.jsxs(
            "button",
            {
              onClick: A,
              className: "flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200",
              children: [
                /* @__PURE__ */ c.jsx(gt, { className: "w-4 h-4 mr-3 text-gray-500" }),
                "Contact Info"
              ]
            }
          ),
          /* @__PURE__ */ c.jsxs(
            "button",
            {
              onClick: D,
              className: "flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200",
              children: [
                /* @__PURE__ */ c.jsx(Ss, { className: "w-4 h-4 mr-3 text-red-500" }),
                "Delete Conversation"
              ]
            }
          )
        ] }) })
      ]
    }
  );
};
function au(e, t) {
  const r = d.createContext(t), n = (s) => {
    const { children: a, ...i } = s, u = d.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ c.jsx(r.Provider, { value: u, children: a });
  };
  n.displayName = e + "Provider";
  function o(s) {
    const a = d.useContext(r);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [n, o];
}
function Fn(e, t = []) {
  let r = [];
  function n(s, a) {
    const i = d.createContext(a), u = r.length;
    r = [...r, a];
    const l = (p) => {
      const { scope: h, children: v, ...y } = p, g = h?.[e]?.[u] || i, x = d.useMemo(() => y, Object.values(y));
      return /* @__PURE__ */ c.jsx(g.Provider, { value: x, children: v });
    };
    l.displayName = s + "Provider";
    function f(p, h) {
      const v = h?.[e]?.[u] || i, y = d.useContext(v);
      if (y) return y;
      if (a !== void 0) return a;
      throw new Error(`\`${p}\` must be used within \`${s}\``);
    }
    return [l, f];
  }
  const o = () => {
    const s = r.map((a) => d.createContext(a));
    return function(i) {
      const u = i?.[e] || s;
      return d.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: u } }),
        [i, u]
      );
    };
  };
  return o.scopeName = e, [n, iu(o, ...t)];
}
function iu(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const a = n.reduce((i, { useScope: u, scopeName: l }) => {
        const p = u(s)[`__scope${l}`];
        return { ...i, ...p };
      }, {});
      return d.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function Wr(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Un(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((o) => {
      const s = Wr(o, t);
      return !r && typeof s == "function" && (r = !0), s;
    });
    if (r)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const s = n[o];
          typeof s == "function" ? s() : Wr(e[o], null);
        }
      };
  };
}
function le(...e) {
  return d.useCallback(Un(...e), e);
}
function ce(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(o) {
    if (e?.(o), r === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
var Ye = globalThis?.document ? d.useLayoutEffect : () => {
}, cu = d[" useId ".trim().toString()] || (() => {
}), lu = 0;
function zt(e) {
  const [t, r] = d.useState(cu());
  return Ye(() => {
    r((n) => n ?? String(lu++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var uu = d[" useInsertionEffect ".trim().toString()] || Ye;
function du({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: n
}) {
  const [o, s, a] = fu({
    defaultProp: t,
    onChange: r
  }), i = e !== void 0, u = i ? e : o;
  {
    const f = d.useRef(e !== void 0);
    d.useEffect(() => {
      const p = f.current;
      p !== i && console.warn(
        `${n} is changing from ${p ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = i;
    }, [i, n]);
  }
  const l = d.useCallback(
    (f) => {
      if (i) {
        const p = mu(f) ? f(e) : f;
        p !== e && a.current?.(p);
      } else
        s(f);
    },
    [i, e, s, a]
  );
  return [u, l];
}
function fu({
  defaultProp: e,
  onChange: t
}) {
  const [r, n] = d.useState(e), o = d.useRef(r), s = d.useRef(t);
  return uu(() => {
    s.current = t;
  }, [t]), d.useEffect(() => {
    o.current !== r && (s.current?.(r), o.current = r);
  }, [r, o]), [r, n, s];
}
function mu(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function ir(e) {
  const t = /* @__PURE__ */ pu(e), r = d.forwardRef((n, o) => {
    const { children: s, ...a } = n, i = d.Children.toArray(s), u = i.find(vu);
    if (u) {
      const l = u.props.children, f = i.map((p) => p === u ? d.Children.count(l) > 1 ? d.Children.only(null) : d.isValidElement(l) ? l.props.children : null : p);
      return /* @__PURE__ */ c.jsx(t, { ...a, ref: o, children: d.isValidElement(l) ? d.cloneElement(l, void 0, f) : null });
    }
    return /* @__PURE__ */ c.jsx(t, { ...a, ref: o, children: s });
  });
  return r.displayName = `${e}.Slot`, r;
}
var hu = /* @__PURE__ */ ir("Slot");
// @__NO_SIDE_EFFECTS__
function pu(e) {
  const t = d.forwardRef((r, n) => {
    const { children: o, ...s } = r;
    if (d.isValidElement(o)) {
      const a = xu(o), i = bu(s, o.props);
      return o.type !== d.Fragment && (i.ref = n ? Un(n, a) : a), d.cloneElement(o, i);
    }
    return d.Children.count(o) > 1 ? d.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Wn = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function gu(e) {
  const t = ({ children: r }) => /* @__PURE__ */ c.jsx(c.Fragment, { children: r });
  return t.displayName = `${e}.Slottable`, t.__radixId = Wn, t;
}
function vu(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Wn;
}
function bu(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], s = t[n];
    /^on[A-Z]/.test(n) ? o && s ? r[n] = (...i) => {
      const u = s(...i);
      return o(...i), u;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...s } : n === "className" && (r[n] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function xu(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var yu = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], ue = yu.reduce((e, t) => {
  const r = /* @__PURE__ */ ir(`Primitive.${t}`), n = d.forwardRef((o, s) => {
    const { asChild: a, ...i } = o, u = a ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ c.jsx(u, { ...i, ref: s });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function wu(e, t) {
  e && es.flushSync(() => e.dispatchEvent(t));
}
function qe(e) {
  const t = d.useRef(e);
  return d.useEffect(() => {
    t.current = e;
  }), d.useMemo(() => (...r) => t.current?.(...r), []);
}
function _u(e, t = globalThis?.document) {
  const r = qe(e);
  d.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var ku = "DismissableLayer", Ht = "dismissableLayer.update", Nu = "dismissableLayer.pointerDownOutside", Eu = "dismissableLayer.focusOutside", Vr, Vn = d.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Bn = d.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: a,
      onDismiss: i,
      ...u
    } = e, l = d.useContext(Vn), [f, p] = d.useState(null), h = f?.ownerDocument ?? globalThis?.document, [, v] = d.useState({}), y = le(t, (T) => p(T)), g = Array.from(l.layers), [x] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), A = g.indexOf(x), D = f ? g.indexOf(f) : -1, E = l.layersWithOutsidePointerEventsDisabled.size > 0, _ = D >= A, w = Au((T) => {
      const j = T.target, q = [...l.branches].some((fe) => fe.contains(j));
      !_ || q || (o?.(T), a?.(T), T.defaultPrevented || i?.());
    }, h), P = Su((T) => {
      const j = T.target;
      [...l.branches].some((fe) => fe.contains(j)) || (s?.(T), a?.(T), T.defaultPrevented || i?.());
    }, h);
    return _u((T) => {
      D === l.layers.size - 1 && (n?.(T), !T.defaultPrevented && i && (T.preventDefault(), i()));
    }, h), d.useEffect(() => {
      if (f)
        return r && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Vr = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(f)), l.layers.add(f), Br(), () => {
          r && l.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Vr);
        };
    }, [f, h, r, l]), d.useEffect(() => () => {
      f && (l.layers.delete(f), l.layersWithOutsidePointerEventsDisabled.delete(f), Br());
    }, [f, l]), d.useEffect(() => {
      const T = () => v({});
      return document.addEventListener(Ht, T), () => document.removeEventListener(Ht, T);
    }, []), /* @__PURE__ */ c.jsx(
      ue.div,
      {
        ...u,
        ref: y,
        style: {
          pointerEvents: E ? _ ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: ce(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: ce(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: ce(
          e.onPointerDownCapture,
          w.onPointerDownCapture
        )
      }
    );
  }
);
Bn.displayName = ku;
var ju = "DismissableLayerBranch", Cu = d.forwardRef((e, t) => {
  const r = d.useContext(Vn), n = d.useRef(null), o = le(t, n);
  return d.useEffect(() => {
    const s = n.current;
    if (s)
      return r.branches.add(s), () => {
        r.branches.delete(s);
      };
  }, [r.branches]), /* @__PURE__ */ c.jsx(ue.div, { ...e, ref: o });
});
Cu.displayName = ju;
function Au(e, t = globalThis?.document) {
  const r = qe(e), n = d.useRef(!1), o = d.useRef(() => {
  });
  return d.useEffect(() => {
    const s = (i) => {
      if (i.target && !n.current) {
        let u = function() {
          Gn(
            Nu,
            r,
            l,
            { discrete: !0 }
          );
        };
        const l = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = u, t.addEventListener("click", o.current, { once: !0 })) : u();
      } else
        t.removeEventListener("click", o.current);
      n.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current);
    };
  }, [t, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function Su(e, t = globalThis?.document) {
  const r = qe(e), n = d.useRef(!1);
  return d.useEffect(() => {
    const o = (s) => {
      s.target && !n.current && Gn(Eu, r, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function Br() {
  const e = new CustomEvent(Ht);
  document.dispatchEvent(e);
}
function Gn(e, t, r, { discrete: n }) {
  const o = r.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? wu(o, s) : o.dispatchEvent(s);
}
var Tt = "focusScope.autoFocusOnMount", It = "focusScope.autoFocusOnUnmount", Gr = { bubbles: !1, cancelable: !0 }, Du = "FocusScope", Hn = d.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...a
  } = e, [i, u] = d.useState(null), l = qe(o), f = qe(s), p = d.useRef(null), h = le(t, (g) => u(g)), v = d.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  d.useEffect(() => {
    if (n) {
      let g = function(E) {
        if (v.paused || !i) return;
        const _ = E.target;
        i.contains(_) ? p.current = _ : pe(p.current, { select: !0 });
      }, x = function(E) {
        if (v.paused || !i) return;
        const _ = E.relatedTarget;
        _ !== null && (i.contains(_) || pe(p.current, { select: !0 }));
      }, A = function(E) {
        if (document.activeElement === document.body)
          for (const w of E)
            w.removedNodes.length > 0 && pe(i);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", x);
      const D = new MutationObserver(A);
      return i && D.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", x), D.disconnect();
      };
    }
  }, [n, i, v.paused]), d.useEffect(() => {
    if (i) {
      Yr.add(v);
      const g = document.activeElement;
      if (!i.contains(g)) {
        const A = new CustomEvent(Tt, Gr);
        i.addEventListener(Tt, l), i.dispatchEvent(A), A.defaultPrevented || (zu($u(Yn(i)), { select: !0 }), document.activeElement === g && pe(i));
      }
      return () => {
        i.removeEventListener(Tt, l), setTimeout(() => {
          const A = new CustomEvent(It, Gr);
          i.addEventListener(It, f), i.dispatchEvent(A), A.defaultPrevented || pe(g ?? document.body, { select: !0 }), i.removeEventListener(It, f), Yr.remove(v);
        }, 0);
      };
    }
  }, [i, l, f, v]);
  const y = d.useCallback(
    (g) => {
      if (!r && !n || v.paused) return;
      const x = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, A = document.activeElement;
      if (x && A) {
        const D = g.currentTarget, [E, _] = Tu(D);
        E && _ ? !g.shiftKey && A === _ ? (g.preventDefault(), r && pe(E, { select: !0 })) : g.shiftKey && A === E && (g.preventDefault(), r && pe(_, { select: !0 })) : A === D && g.preventDefault();
      }
    },
    [r, n, v.paused]
  );
  return /* @__PURE__ */ c.jsx(ue.div, { tabIndex: -1, ...a, ref: h, onKeyDown: y });
});
Hn.displayName = Du;
function zu(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (pe(n, { select: t }), document.activeElement !== r) return;
}
function Tu(e) {
  const t = Yn(e), r = Hr(t, e), n = Hr(t.reverse(), e);
  return [r, n];
}
function Yn(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Hr(e, t) {
  for (const r of e)
    if (!Iu(r, { upTo: t })) return r;
}
function Iu(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Ru(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function pe(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && Ru(e) && t && e.select();
  }
}
var Yr = Pu();
function Pu() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && r?.pause(), e = qr(e, t), e.unshift(t);
    },
    remove(t) {
      e = qr(e, t), e[0]?.resume();
    }
  };
}
function qr(e, t) {
  const r = [...e], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function $u(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Ou = "Portal", qn = d.forwardRef((e, t) => {
  const { container: r, ...n } = e, [o, s] = d.useState(!1);
  Ye(() => s(!0), []);
  const a = r || o && globalThis?.document?.body;
  return a ? ts.createPortal(/* @__PURE__ */ c.jsx(ue.div, { ...n, ref: t }), a) : null;
});
qn.displayName = Ou;
function Zu(e, t) {
  return d.useReducer((r, n) => t[r][n] ?? r, e);
}
var At = (e) => {
  const { present: t, children: r } = e, n = Mu(t), o = typeof r == "function" ? r({ present: n.isPresent }) : d.Children.only(r), s = le(n.ref, Lu(o));
  return typeof r == "function" || n.isPresent ? d.cloneElement(o, { ref: s }) : null;
};
At.displayName = "Presence";
function Mu(e) {
  const [t, r] = d.useState(), n = d.useRef(null), o = d.useRef(e), s = d.useRef("none"), a = e ? "mounted" : "unmounted", [i, u] = Zu(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return d.useEffect(() => {
    const l = ot(n.current);
    s.current = i === "mounted" ? l : "none";
  }, [i]), Ye(() => {
    const l = n.current, f = o.current;
    if (f !== e) {
      const h = s.current, v = ot(l);
      e ? u("MOUNT") : v === "none" || l?.display === "none" ? u("UNMOUNT") : u(f && h !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, u]), Ye(() => {
    if (t) {
      let l;
      const f = t.ownerDocument.defaultView ?? window, p = (v) => {
        const g = ot(n.current).includes(CSS.escape(v.animationName));
        if (v.target === t && g && (u("ANIMATION_END"), !o.current)) {
          const x = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
          });
        }
      }, h = (v) => {
        v.target === t && (s.current = ot(n.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        f.clearTimeout(l), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      u("ANIMATION_END");
  }, [t, u]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: d.useCallback((l) => {
      n.current = l ? getComputedStyle(l) : null, r(l);
    }, [])
  };
}
function ot(e) {
  return e?.animationName || "none";
}
function Lu(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var Rt = 0;
function Fu() {
  d.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Kr()), document.body.insertAdjacentElement("beforeend", e[1] ?? Kr()), Rt++, () => {
      Rt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Rt--;
    };
  }, []);
}
function Kr() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var se = function() {
  return se = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, se.apply(this, arguments);
};
function Kn(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function Uu(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, s; n < o; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var ht = "right-scroll-bar-position", pt = "width-before-scroll-bar", Wu = "with-scroll-bars-hidden", Vu = "--removed-body-scroll-bar-size";
function Pt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Bu(e, t) {
  var r = U(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var o = r.value;
          o !== n && (r.value = n, r.callback(n, o));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
var Gu = typeof window < "u" ? d.useLayoutEffect : d.useEffect, Xr = /* @__PURE__ */ new WeakMap();
function Hu(e, t) {
  var r = Bu(null, function(n) {
    return e.forEach(function(o) {
      return Pt(o, n);
    });
  });
  return Gu(function() {
    var n = Xr.get(r);
    if (n) {
      var o = new Set(n), s = new Set(e), a = r.current;
      o.forEach(function(i) {
        s.has(i) || Pt(i, null);
      }), s.forEach(function(i) {
        o.has(i) || Pt(i, a);
      });
    }
    Xr.set(r, e);
  }, [e]), r;
}
function Yu(e) {
  return e;
}
function qu(e, t) {
  t === void 0 && (t = Yu);
  var r = [], n = !1, o = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(s) {
      var a = t(s, n);
      return r.push(a), function() {
        r = r.filter(function(i) {
          return i !== a;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (n = !0; r.length; ) {
        var a = r;
        r = [], a.forEach(s);
      }
      r = {
        push: function(i) {
          return s(i);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(s) {
      n = !0;
      var a = [];
      if (r.length) {
        var i = r;
        r = [], i.forEach(s), a = r;
      }
      var u = function() {
        var f = a;
        a = [], f.forEach(s);
      }, l = function() {
        return Promise.resolve().then(u);
      };
      l(), r = {
        push: function(f) {
          a.push(f), l();
        },
        filter: function(f) {
          return a = a.filter(f), r;
        }
      };
    }
  };
  return o;
}
function Ku(e) {
  e === void 0 && (e = {});
  var t = qu(null);
  return t.options = se({ async: !0, ssr: !1 }, e), t;
}
var Xn = function(e) {
  var t = e.sideCar, r = Kn(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return d.createElement(n, se({}, r));
};
Xn.isSideCarExport = !0;
function Xu(e, t) {
  return e.useMedium(t), Xn;
}
var Jn = Ku(), $t = function() {
}, St = d.forwardRef(function(e, t) {
  var r = d.useRef(null), n = d.useState({
    onScrollCapture: $t,
    onWheelCapture: $t,
    onTouchMoveCapture: $t
  }), o = n[0], s = n[1], a = e.forwardProps, i = e.children, u = e.className, l = e.removeScrollBar, f = e.enabled, p = e.shards, h = e.sideCar, v = e.noRelative, y = e.noIsolation, g = e.inert, x = e.allowPinchZoom, A = e.as, D = A === void 0 ? "div" : A, E = e.gapMode, _ = Kn(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), w = h, P = Hu([r, t]), T = se(se({}, _), o);
  return d.createElement(
    d.Fragment,
    null,
    f && d.createElement(w, { sideCar: Jn, removeScrollBar: l, shards: p, noRelative: v, noIsolation: y, inert: g, setCallbacks: s, allowPinchZoom: !!x, lockRef: r, gapMode: E }),
    a ? d.cloneElement(d.Children.only(i), se(se({}, T), { ref: P })) : d.createElement(D, se({}, T, { className: u, ref: P }), i)
  );
});
St.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
St.classNames = {
  fullWidth: pt,
  zeroRight: ht
};
var Ju = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Qu() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Ju();
  return t && e.setAttribute("nonce", t), e;
}
function ed(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function td(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var rd = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = Qu()) && (ed(t, r), td(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, nd = function() {
  var e = rd();
  return function(t, r) {
    d.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, Qn = function() {
  var e = nd(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, od = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ot = function(e) {
  return parseInt(e || "", 10) || 0;
}, sd = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ot(r), Ot(n), Ot(o)];
}, ad = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return od;
  var t = sd(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, id = Qn(), Re = "data-scroll-locked", cd = function(e, t, r, n) {
  var o = e.left, s = e.top, a = e.right, i = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(Wu, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(i, "px ").concat(n, `;
  }
  body[`).concat(Re, `] {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(i, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(ht, ` {
    right: `).concat(i, "px ").concat(n, `;
  }
  
  .`).concat(pt, ` {
    margin-right: `).concat(i, "px ").concat(n, `;
  }
  
  .`).concat(ht, " .").concat(ht, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(pt, " .").concat(pt, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(Re, `] {
    `).concat(Vu, ": ").concat(i, `px;
  }
`);
}, Jr = function() {
  var e = parseInt(document.body.getAttribute(Re) || "0", 10);
  return isFinite(e) ? e : 0;
}, ld = function() {
  d.useEffect(function() {
    return document.body.setAttribute(Re, (Jr() + 1).toString()), function() {
      var e = Jr() - 1;
      e <= 0 ? document.body.removeAttribute(Re) : document.body.setAttribute(Re, e.toString());
    };
  }, []);
}, ud = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n;
  ld();
  var s = d.useMemo(function() {
    return ad(o);
  }, [o]);
  return d.createElement(id, { styles: cd(s, !t, o, r ? "" : "!important") });
}, Yt = !1;
if (typeof window < "u")
  try {
    var st = Object.defineProperty({}, "passive", {
      get: function() {
        return Yt = !0, !0;
      }
    });
    window.addEventListener("test", st, st), window.removeEventListener("test", st, st);
  } catch {
    Yt = !1;
  }
var Ce = Yt ? { passive: !1 } : !1, dd = function(e) {
  return e.tagName === "TEXTAREA";
}, eo = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !dd(e) && r[t] === "visible")
  );
}, fd = function(e) {
  return eo(e, "overflowY");
}, md = function(e) {
  return eo(e, "overflowX");
}, Qr = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = to(e, n);
    if (o) {
      var s = ro(e, n), a = s[1], i = s[2];
      if (a > i)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, hd = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, pd = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, to = function(e, t) {
  return e === "v" ? fd(t) : md(t);
}, ro = function(e, t) {
  return e === "v" ? hd(t) : pd(t);
}, gd = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, vd = function(e, t, r, n, o) {
  var s = gd(e, window.getComputedStyle(t).direction), a = s * n, i = r.target, u = t.contains(i), l = !1, f = a > 0, p = 0, h = 0;
  do {
    if (!i)
      break;
    var v = ro(e, i), y = v[0], g = v[1], x = v[2], A = g - x - s * y;
    (y || A) && to(e, i) && (p += A, h += y);
    var D = i.parentNode;
    i = D && D.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? D.host : D;
  } while (
    // portaled content
    !u && i !== document.body || // self content
    u && (t.contains(i) || t === i)
  );
  return (f && Math.abs(p) < 1 || !f && Math.abs(h) < 1) && (l = !0), l;
}, at = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, en = function(e) {
  return [e.deltaX, e.deltaY];
}, tn = function(e) {
  return e && "current" in e ? e.current : e;
}, bd = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, xd = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, yd = 0, Ae = [];
function wd(e) {
  var t = d.useRef([]), r = d.useRef([0, 0]), n = d.useRef(), o = d.useState(yd++)[0], s = d.useState(Qn)[0], a = d.useRef(e);
  d.useEffect(function() {
    a.current = e;
  }, [e]), d.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = Uu([e.lockRef.current], (e.shards || []).map(tn), !0).filter(Boolean);
      return g.forEach(function(x) {
        return x.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(x) {
          return x.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = d.useCallback(function(g, x) {
    if ("touches" in g && g.touches.length === 2 || g.type === "wheel" && g.ctrlKey)
      return !a.current.allowPinchZoom;
    var A = at(g), D = r.current, E = "deltaX" in g ? g.deltaX : D[0] - A[0], _ = "deltaY" in g ? g.deltaY : D[1] - A[1], w, P = g.target, T = Math.abs(E) > Math.abs(_) ? "h" : "v";
    if ("touches" in g && T === "h" && P.type === "range")
      return !1;
    var j = Qr(T, P);
    if (!j)
      return !0;
    if (j ? w = T : (w = T === "v" ? "h" : "v", j = Qr(T, P)), !j)
      return !1;
    if (!n.current && "changedTouches" in g && (E || _) && (n.current = w), !w)
      return !0;
    var q = n.current || w;
    return vd(q, x, g, q === "h" ? E : _);
  }, []), u = d.useCallback(function(g) {
    var x = g;
    if (!(!Ae.length || Ae[Ae.length - 1] !== s)) {
      var A = "deltaY" in x ? en(x) : at(x), D = t.current.filter(function(w) {
        return w.name === x.type && (w.target === x.target || x.target === w.shadowParent) && bd(w.delta, A);
      })[0];
      if (D && D.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!D) {
        var E = (a.current.shards || []).map(tn).filter(Boolean).filter(function(w) {
          return w.contains(x.target);
        }), _ = E.length > 0 ? i(x, E[0]) : !a.current.noIsolation;
        _ && x.cancelable && x.preventDefault();
      }
    }
  }, []), l = d.useCallback(function(g, x, A, D) {
    var E = { name: g, delta: x, target: A, should: D, shadowParent: _d(A) };
    t.current.push(E), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== E;
      });
    }, 1);
  }, []), f = d.useCallback(function(g) {
    r.current = at(g), n.current = void 0;
  }, []), p = d.useCallback(function(g) {
    l(g.type, en(g), g.target, i(g, e.lockRef.current));
  }, []), h = d.useCallback(function(g) {
    l(g.type, at(g), g.target, i(g, e.lockRef.current));
  }, []);
  d.useEffect(function() {
    return Ae.push(s), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", u, Ce), document.addEventListener("touchmove", u, Ce), document.addEventListener("touchstart", f, Ce), function() {
      Ae = Ae.filter(function(g) {
        return g !== s;
      }), document.removeEventListener("wheel", u, Ce), document.removeEventListener("touchmove", u, Ce), document.removeEventListener("touchstart", f, Ce);
    };
  }, []);
  var v = e.removeScrollBar, y = e.inert;
  return d.createElement(
    d.Fragment,
    null,
    y ? d.createElement(s, { styles: xd(o) }) : null,
    v ? d.createElement(ud, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function _d(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const kd = Xu(Jn, wd);
var no = d.forwardRef(function(e, t) {
  return d.createElement(St, se({}, e, { ref: t, sideCar: kd }));
});
no.classNames = St.classNames;
var Nd = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Se = /* @__PURE__ */ new WeakMap(), it = /* @__PURE__ */ new WeakMap(), ct = {}, Zt = 0, oo = function(e) {
  return e && (e.host || oo(e.parentNode));
}, Ed = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = oo(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, jd = function(e, t, r, n) {
  var o = Ed(t, Array.isArray(e) ? e : [e]);
  ct[r] || (ct[r] = /* @__PURE__ */ new WeakMap());
  var s = ct[r], a = [], i = /* @__PURE__ */ new Set(), u = new Set(o), l = function(p) {
    !p || i.has(p) || (i.add(p), l(p.parentNode));
  };
  o.forEach(l);
  var f = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(h) {
      if (i.has(h))
        f(h);
      else
        try {
          var v = h.getAttribute(n), y = v !== null && v !== "false", g = (Se.get(h) || 0) + 1, x = (s.get(h) || 0) + 1;
          Se.set(h, g), s.set(h, x), a.push(h), g === 1 && y && it.set(h, !0), x === 1 && h.setAttribute(r, "true"), y || h.setAttribute(n, "true");
        } catch (A) {
          console.error("aria-hidden: cannot operate on ", h, A);
        }
    });
  };
  return f(t), i.clear(), Zt++, function() {
    a.forEach(function(p) {
      var h = Se.get(p) - 1, v = s.get(p) - 1;
      Se.set(p, h), s.set(p, v), h || (it.has(p) || p.removeAttribute(n), it.delete(p)), v || p.removeAttribute(r);
    }), Zt--, Zt || (Se = /* @__PURE__ */ new WeakMap(), Se = /* @__PURE__ */ new WeakMap(), it = /* @__PURE__ */ new WeakMap(), ct = {});
  };
}, Cd = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = Nd(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live], script"))), jd(n, o, r, "aria-hidden")) : function() {
    return null;
  };
}, Dt = "Dialog", [so, ao] = Fn(Dt), [Ad, ne] = so(Dt), io = (e) => {
  const {
    __scopeDialog: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: s,
    modal: a = !0
  } = e, i = d.useRef(null), u = d.useRef(null), [l, f] = du({
    prop: n,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Dt
  });
  return /* @__PURE__ */ c.jsx(
    Ad,
    {
      scope: t,
      triggerRef: i,
      contentRef: u,
      contentId: zt(),
      titleId: zt(),
      descriptionId: zt(),
      open: l,
      onOpenChange: f,
      onOpenToggle: d.useCallback(() => f((p) => !p), [f]),
      modal: a,
      children: r
    }
  );
};
io.displayName = Dt;
var co = "DialogTrigger", lo = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = ne(co, r), s = le(t, o.triggerRef);
    return /* @__PURE__ */ c.jsx(
      ue.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": ur(o.open),
        ...n,
        ref: s,
        onClick: ce(e.onClick, o.onOpenToggle)
      }
    );
  }
);
lo.displayName = co;
var cr = "DialogPortal", [Sd, uo] = so(cr, {
  forceMount: void 0
}), fo = (e) => {
  const { __scopeDialog: t, forceMount: r, children: n, container: o } = e, s = ne(cr, t);
  return /* @__PURE__ */ c.jsx(Sd, { scope: t, forceMount: r, children: d.Children.map(n, (a) => /* @__PURE__ */ c.jsx(At, { present: r || s.open, children: /* @__PURE__ */ c.jsx(qn, { asChild: !0, container: o, children: a }) })) });
};
fo.displayName = cr;
var wt = "DialogOverlay", mo = d.forwardRef(
  (e, t) => {
    const r = uo(wt, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, s = ne(wt, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ c.jsx(At, { present: n || s.open, children: /* @__PURE__ */ c.jsx(zd, { ...o, ref: t }) }) : null;
  }
);
mo.displayName = wt;
var Dd = /* @__PURE__ */ ir("DialogOverlay.RemoveScroll"), zd = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = ne(wt, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ c.jsx(no, { as: Dd, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ c.jsx(
        ue.div,
        {
          "data-state": ur(o.open),
          ...n,
          ref: t,
          style: { pointerEvents: "auto", ...n.style }
        }
      ) })
    );
  }
), Ne = "DialogContent", ho = d.forwardRef(
  (e, t) => {
    const r = uo(Ne, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, s = ne(Ne, e.__scopeDialog);
    return /* @__PURE__ */ c.jsx(At, { present: n || s.open, children: s.modal ? /* @__PURE__ */ c.jsx(Td, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(Id, { ...o, ref: t }) });
  }
);
ho.displayName = Ne;
var Td = d.forwardRef(
  (e, t) => {
    const r = ne(Ne, e.__scopeDialog), n = d.useRef(null), o = le(t, r.contentRef, n);
    return d.useEffect(() => {
      const s = n.current;
      if (s) return Cd(s);
    }, []), /* @__PURE__ */ c.jsx(
      po,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: ce(e.onCloseAutoFocus, (s) => {
          s.preventDefault(), r.triggerRef.current?.focus();
        }),
        onPointerDownOutside: ce(e.onPointerDownOutside, (s) => {
          const a = s.detail.originalEvent, i = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || i) && s.preventDefault();
        }),
        onFocusOutside: ce(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), Id = d.forwardRef(
  (e, t) => {
    const r = ne(Ne, e.__scopeDialog), n = d.useRef(!1), o = d.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      po,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          e.onCloseAutoFocus?.(s), s.defaultPrevented || (n.current || r.triggerRef.current?.focus(), s.preventDefault()), n.current = !1, o.current = !1;
        },
        onInteractOutside: (s) => {
          e.onInteractOutside?.(s), s.defaultPrevented || (n.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const a = s.target;
          r.triggerRef.current?.contains(a) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), po = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: o, onCloseAutoFocus: s, ...a } = e, i = ne(Ne, r), u = d.useRef(null), l = le(t, u);
    return Fu(), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(
        Hn,
        {
          asChild: !0,
          loop: !0,
          trapped: n,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ c.jsx(
            Bn,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": ur(i.open),
              ...a,
              ref: l,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(Pd, { titleId: i.titleId }),
        /* @__PURE__ */ c.jsx(Od, { contentRef: u, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), lr = "DialogTitle", go = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = ne(lr, r);
    return /* @__PURE__ */ c.jsx(ue.h2, { id: o.titleId, ...n, ref: t });
  }
);
go.displayName = lr;
var vo = "DialogDescription", bo = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = ne(vo, r);
    return /* @__PURE__ */ c.jsx(ue.p, { id: o.descriptionId, ...n, ref: t });
  }
);
bo.displayName = vo;
var xo = "DialogClose", yo = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = ne(xo, r);
    return /* @__PURE__ */ c.jsx(
      ue.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: ce(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
yo.displayName = xo;
function ur(e) {
  return e ? "open" : "closed";
}
var wo = "DialogTitleWarning", [Rd, _o] = au(wo, {
  contentName: Ne,
  titleName: lr,
  docsSlug: "dialog"
}), Pd = ({ titleId: e }) => {
  const t = _o(wo), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return d.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, $d = "DialogDescriptionWarning", Od = ({ contentRef: e, descriptionId: t }) => {
  const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${_o($d).contentName}}.`;
  return d.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(n));
  }, [n, e, t]), null;
}, ko = io, Zd = lo, No = fo, Eo = mo, jo = ho, Co = go, Ao = bo, dr = yo, So = "AlertDialog", [Md, fm] = Fn(So, [
  ao
]), de = ao(), Do = (e) => {
  const { __scopeAlertDialog: t, ...r } = e, n = de(t);
  return /* @__PURE__ */ c.jsx(ko, { ...n, ...r, modal: !0 });
};
Do.displayName = So;
var Ld = "AlertDialogTrigger", Fd = d.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = de(r);
    return /* @__PURE__ */ c.jsx(Zd, { ...o, ...n, ref: t });
  }
);
Fd.displayName = Ld;
var Ud = "AlertDialogPortal", zo = (e) => {
  const { __scopeAlertDialog: t, ...r } = e, n = de(t);
  return /* @__PURE__ */ c.jsx(No, { ...n, ...r });
};
zo.displayName = Ud;
var Wd = "AlertDialogOverlay", To = d.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = de(r);
    return /* @__PURE__ */ c.jsx(Eo, { ...o, ...n, ref: t });
  }
);
To.displayName = Wd;
var Pe = "AlertDialogContent", [Vd, Bd] = Md(Pe), Gd = /* @__PURE__ */ gu("AlertDialogContent"), Io = d.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, children: n, ...o } = e, s = de(r), a = d.useRef(null), i = le(t, a), u = d.useRef(null);
    return /* @__PURE__ */ c.jsx(
      Rd,
      {
        contentName: Pe,
        titleName: Ro,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ c.jsx(Vd, { scope: r, cancelRef: u, children: /* @__PURE__ */ c.jsxs(
          jo,
          {
            role: "alertdialog",
            ...s,
            ...o,
            ref: i,
            onOpenAutoFocus: ce(o.onOpenAutoFocus, (l) => {
              l.preventDefault(), u.current?.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (l) => l.preventDefault(),
            onInteractOutside: (l) => l.preventDefault(),
            children: [
              /* @__PURE__ */ c.jsx(Gd, { children: n }),
              /* @__PURE__ */ c.jsx(Yd, { contentRef: a })
            ]
          }
        ) })
      }
    );
  }
);
Io.displayName = Pe;
var Ro = "AlertDialogTitle", Po = d.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = de(r);
    return /* @__PURE__ */ c.jsx(Co, { ...o, ...n, ref: t });
  }
);
Po.displayName = Ro;
var $o = "AlertDialogDescription", Oo = d.forwardRef((e, t) => {
  const { __scopeAlertDialog: r, ...n } = e, o = de(r);
  return /* @__PURE__ */ c.jsx(Ao, { ...o, ...n, ref: t });
});
Oo.displayName = $o;
var Hd = "AlertDialogAction", Zo = d.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = de(r);
    return /* @__PURE__ */ c.jsx(dr, { ...o, ...n, ref: t });
  }
);
Zo.displayName = Hd;
var Mo = "AlertDialogCancel", Lo = d.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, { cancelRef: o } = Bd(Mo, r), s = de(r), a = le(t, o);
    return /* @__PURE__ */ c.jsx(dr, { ...s, ...n, ref: a });
  }
);
Lo.displayName = Mo;
var Yd = ({ contentRef: e }) => {
  const t = `\`${Pe}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Pe}\` by passing a \`${$o}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Pe}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return d.useEffect(() => {
    document.getElementById(
      e.current?.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, qd = Do, Kd = zo, Xd = To, Jd = Io, Qd = Zo, ef = Lo, tf = Po, rf = Oo;
function Fo(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Fo(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Uo() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Fo(e)) && (n && (n += " "), n += t);
  return n;
}
const fr = "-", nf = (e) => {
  const t = sf(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      const i = a.split(fr);
      return i[0] === "" && i.length !== 1 && i.shift(), Wo(i, t) || of(a);
    },
    getConflictingClassGroupIds: (a, i) => {
      const u = r[a] || [];
      return i && n[a] ? [...u, ...n[a]] : u;
    }
  };
}, Wo = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? Wo(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(fr);
  return t.validators.find(({
    validator: a
  }) => a(s))?.classGroupId;
}, rn = /^\[(.+)\]$/, of = (e) => {
  if (rn.test(e)) {
    const t = rn.exec(e)[1], r = t?.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, sf = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in r)
    qt(r[o], n, o, t);
  return n;
}, qt = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : nn(t, o);
      s.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (af(o)) {
        qt(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([s, a]) => {
      qt(a, nn(t, s), r, n);
    });
  });
}, nn = (e, t) => {
  let r = e;
  return t.split(fr).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, af = (e) => e.isThemeGetter, cf = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (s, a) => {
    r.set(s, a), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let a = r.get(s);
      if (a !== void 0)
        return a;
      if ((a = n.get(s)) !== void 0)
        return o(s, a), a;
    },
    set(s, a) {
      r.has(s) ? r.set(s, a) : o(s, a);
    }
  };
}, Kt = "!", Xt = ":", lf = Xt.length, uf = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (o) => {
    const s = [];
    let a = 0, i = 0, u = 0, l;
    for (let y = 0; y < o.length; y++) {
      let g = o[y];
      if (a === 0 && i === 0) {
        if (g === Xt) {
          s.push(o.slice(u, y)), u = y + lf;
          continue;
        }
        if (g === "/") {
          l = y;
          continue;
        }
      }
      g === "[" ? a++ : g === "]" ? a-- : g === "(" ? i++ : g === ")" && i--;
    }
    const f = s.length === 0 ? o : o.substring(u), p = df(f), h = p !== f, v = l && l > u ? l - u : void 0;
    return {
      modifiers: s,
      hasImportantModifier: h,
      baseClassName: p,
      maybePostfixModifierPosition: v
    };
  };
  if (t) {
    const o = t + Xt, s = n;
    n = (a) => a.startsWith(o) ? s(a.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: a,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const o = n;
    n = (s) => r({
      className: s,
      parseClassName: o
    });
  }
  return n;
}, df = (e) => e.endsWith(Kt) ? e.substring(0, e.length - 1) : e.startsWith(Kt) ? e.substring(1) : e, ff = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((n) => [n, !0]));
  return (n) => {
    if (n.length <= 1)
      return n;
    const o = [];
    let s = [];
    return n.forEach((a) => {
      a[0] === "[" || t[a] ? (o.push(...s.sort(), a), s = []) : s.push(a);
    }), o.push(...s.sort()), o;
  };
}, mf = (e) => ({
  cache: cf(e.cacheSize),
  parseClassName: uf(e),
  sortModifiers: ff(e),
  ...nf(e)
}), hf = /\s+/, pf = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, a = [], i = e.trim().split(hf);
  let u = "";
  for (let l = i.length - 1; l >= 0; l -= 1) {
    const f = i[l], {
      isExternal: p,
      modifiers: h,
      hasImportantModifier: v,
      baseClassName: y,
      maybePostfixModifierPosition: g
    } = r(f);
    if (p) {
      u = f + (u.length > 0 ? " " + u : u);
      continue;
    }
    let x = !!g, A = n(x ? y.substring(0, g) : y);
    if (!A) {
      if (!x) {
        u = f + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (A = n(y), !A) {
        u = f + (u.length > 0 ? " " + u : u);
        continue;
      }
      x = !1;
    }
    const D = s(h).join(":"), E = v ? D + Kt : D, _ = E + A;
    if (a.includes(_))
      continue;
    a.push(_);
    const w = o(A, x);
    for (let P = 0; P < w.length; ++P) {
      const T = w[P];
      a.push(E + T);
    }
    u = f + (u.length > 0 ? " " + u : u);
  }
  return u;
};
function gf() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Vo(t)) && (n && (n += " "), n += r);
  return n;
}
const Vo = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Vo(e[n])) && (r && (r += " "), r += t);
  return r;
};
function vf(e, ...t) {
  let r, n, o, s = a;
  function a(u) {
    const l = t.reduce((f, p) => p(f), e());
    return r = mf(l), n = r.cache.get, o = r.cache.set, s = i, i(u);
  }
  function i(u) {
    const l = n(u);
    if (l)
      return l;
    const f = pf(u, r);
    return o(u, f), f;
  }
  return function() {
    return s(gf.apply(null, arguments));
  };
}
const Y = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Bo = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Go = /^\((?:(\w[\w-]*):)?(.+)\)$/i, bf = /^\d+\/\d+$/, xf = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, yf = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, wf = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, _f = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, kf = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, De = (e) => bf.test(e), I = (e) => !!e && !Number.isNaN(Number(e)), he = (e) => !!e && Number.isInteger(Number(e)), Mt = (e) => e.endsWith("%") && I(e.slice(0, -1)), ie = (e) => xf.test(e), Nf = () => !0, Ef = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  yf.test(e) && !wf.test(e)
), Ho = () => !1, jf = (e) => _f.test(e), Cf = (e) => kf.test(e), Af = (e) => !k(e) && !N(e), Sf = (e) => Oe(e, Ko, Ho), k = (e) => Bo.test(e), we = (e) => Oe(e, Xo, Ef), Lt = (e) => Oe(e, Rf, I), on = (e) => Oe(e, Yo, Ho), Df = (e) => Oe(e, qo, Cf), lt = (e) => Oe(e, Jo, jf), N = (e) => Go.test(e), We = (e) => Ze(e, Xo), zf = (e) => Ze(e, Pf), sn = (e) => Ze(e, Yo), Tf = (e) => Ze(e, Ko), If = (e) => Ze(e, qo), ut = (e) => Ze(e, Jo, !0), Oe = (e, t, r) => {
  const n = Bo.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, Ze = (e, t, r = !1) => {
  const n = Go.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, Yo = (e) => e === "position" || e === "percentage", qo = (e) => e === "image" || e === "url", Ko = (e) => e === "length" || e === "size" || e === "bg-size", Xo = (e) => e === "length", Rf = (e) => e === "number", Pf = (e) => e === "family-name", Jo = (e) => e === "shadow", $f = () => {
  const e = Y("color"), t = Y("font"), r = Y("text"), n = Y("font-weight"), o = Y("tracking"), s = Y("leading"), a = Y("breakpoint"), i = Y("container"), u = Y("spacing"), l = Y("radius"), f = Y("shadow"), p = Y("inset-shadow"), h = Y("text-shadow"), v = Y("drop-shadow"), y = Y("blur"), g = Y("perspective"), x = Y("aspect"), A = Y("ease"), D = Y("animate"), E = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], _ = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], w = () => [..._(), N, k], P = () => ["auto", "hidden", "clip", "visible", "scroll"], T = () => ["auto", "contain", "none"], j = () => [N, k, u], q = () => [De, "full", "auto", ...j()], fe = () => [he, "none", "subgrid", N, k], Ee = () => ["auto", {
    span: ["full", he, N, k]
  }, he, N, k], xe = () => [he, "auto", N, k], Xe = () => ["auto", "min", "max", "fr", N, k], ye = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], ae = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], ee = () => ["auto", ...j()], oe = () => [De, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...j()], S = () => [e, N, k], Me = () => [..._(), sn, on, {
    position: [N, k]
  }], b = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], z = () => ["auto", "cover", "contain", Tf, Sf, {
    size: [N, k]
  }], $ = () => [Mt, We, we], R = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    N,
    k
  ], L = () => ["", I, We, we], X = () => ["solid", "dashed", "dotted", "double"], je = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], F = () => [I, Mt, sn, on], H = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    y,
    N,
    k
  ], re = () => ["none", I, N, k], me = () => ["none", I, N, k], Le = () => [I, N, k], Je = () => [De, "full", ...j()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ie],
      breakpoint: [ie],
      color: [Nf],
      container: [ie],
      "drop-shadow": [ie],
      ease: ["in", "out", "in-out"],
      font: [Af],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ie],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ie],
      shadow: [ie],
      spacing: ["px", I],
      text: [ie],
      "text-shadow": [ie],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", De, k, N, x]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [I, k, N, i]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": E()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": E()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: w()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: P()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": P()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": P()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: T()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": T()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": T()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: q()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": q()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": q()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: q()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: q()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: q()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: q()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: q()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: q()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [he, "auto", N, k]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [De, "full", "auto", i, ...j()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [I, De, "auto", "initial", "none", k]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", I, N, k]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", I, N, k]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [he, "first", "last", "none", N, k]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": fe()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: Ee()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": xe()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": xe()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": fe()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: Ee()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": xe()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": xe()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": Xe()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Xe()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: j()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": j()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": j()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...ye(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...ae(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...ae()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ye()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...ae(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...ae(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": ye()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...ae(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...ae()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: j()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: j()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: j()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: j()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: j()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: j()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: j()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: j()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: j()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: ee()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: ee()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: ee()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: ee()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: ee()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: ee()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: ee()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: ee()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: ee()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": j()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": j()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: oe()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [i, "screen", ...oe()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          i,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...oe()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          i,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [a]
          },
          ...oe()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...oe()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...oe()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...oe()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, We, we]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [n, N, Lt]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Mt, k]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [zf, k, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [o, N, k]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [I, "none", N, Lt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...j()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", N, k]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", N, k]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: S()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: S()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...X(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [I, "from-font", "auto", N, we]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: S()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [I, "auto", N, k]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: j()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", N, k]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", N, k]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: Me()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: b()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: z()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, he, N, k],
          radial: ["", N, k],
          conic: [he, N, k]
        }, If, Df]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: S()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: $()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: $()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: $()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: S()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: S()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: S()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: R()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": R()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": R()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": R()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": R()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": R()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": R()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": R()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": R()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": R()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": R()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": R()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": R()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": R()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": R()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: L()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": L()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": L()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": L()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": L()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": L()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": L()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": L()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": L()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": L()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": L()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...X(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...X(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: S()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": S()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": S()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": S()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": S()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": S()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": S()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": S()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": S()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: S()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...X(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [I, N, k]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", I, We, we]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: S()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          f,
          ut,
          lt
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: S()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", p, ut, lt]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": S()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: L()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: S()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [I, we]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": S()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": L()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": S()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", h, ut, lt]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": S()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [I, N, k]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...je(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": je()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [I]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": F()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": F()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": S()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": S()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": F()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": F()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": S()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": S()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": F()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": F()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": S()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": S()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": F()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": F()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": S()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": S()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": F()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": F()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": S()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": S()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": F()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": F()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": S()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": S()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": F()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": F()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": S()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": S()
      }],
      "mask-image-radial": [{
        "mask-radial": [N, k]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": F()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": F()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": S()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": S()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": _()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [I]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": F()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": F()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": S()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": S()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: Me()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: b()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: z()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", N, k]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          N,
          k
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: H()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [I, N, k]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [I, N, k]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          v,
          ut,
          lt
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": S()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", I, N, k]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [I, N, k]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", I, N, k]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [I, N, k]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", I, N, k]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          N,
          k
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": H()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [I, N, k]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [I, N, k]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", I, N, k]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [I, N, k]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", I, N, k]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [I, N, k]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [I, N, k]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", I, N, k]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": j()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": j()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": j()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", N, k]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [I, "initial", N, k]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", A, N, k]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [I, N, k]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", D, N, k]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [g, N, k]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": w()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: re()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": re()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": re()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": re()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: me()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": me()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": me()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": me()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: Le()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Le()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Le()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [N, k, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: w()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Je()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Je()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Je()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Je()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: S()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: S()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", N, k]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": j()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": j()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": j()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": j()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": j()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": j()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": j()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": j()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": j()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": j()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": j()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": j()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": j()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": j()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": j()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": j()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": j()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": j()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", N, k]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...S()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [I, We, we, Lt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...S()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Of = /* @__PURE__ */ vf($f);
function K(...e) {
  return Of(Uo(e));
}
const an = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, cn = Uo, Zf = (e, t) => (r) => {
  var n;
  if (t?.variants == null) return cn(e, r?.class, r?.className);
  const { variants: o, defaultVariants: s } = t, a = Object.keys(o).map((l) => {
    const f = r?.[l], p = s?.[l];
    if (f === null) return null;
    const h = an(f) || an(p);
    return o[l][h];
  }), i = r && Object.entries(r).reduce((l, f) => {
    let [p, h] = f;
    return h === void 0 || (l[p] = h), l;
  }, {}), u = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((l, f) => {
    let { class: p, className: h, ...v } = f;
    return Object.entries(v).every((y) => {
      let [g, x] = y;
      return Array.isArray(x) ? x.includes({
        ...s,
        ...i
      }[g]) : {
        ...s,
        ...i
      }[g] === x;
    }) ? [
      ...l,
      p,
      h
    ] : l;
  }, []);
  return cn(e, a, u, r?.class, r?.className);
}, mr = Zf(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Ft({
  className: e,
  variant: t,
  size: r,
  asChild: n = !1,
  ...o
}) {
  const s = n ? hu : "button";
  return /* @__PURE__ */ c.jsx(
    s,
    {
      "data-slot": "button",
      className: K(mr({ variant: t, size: r, className: e })),
      ...o
    }
  );
}
function Mf({
  ...e
}) {
  return /* @__PURE__ */ c.jsx(qd, { "data-slot": "alert-dialog", ...e });
}
function Lf({
  ...e
}) {
  return /* @__PURE__ */ c.jsx(Kd, { "data-slot": "alert-dialog-portal", ...e });
}
function Ff({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c.jsx(
    Xd,
    {
      "data-slot": "alert-dialog-overlay",
      className: K(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function Uf({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c.jsxs(Lf, { children: [
    /* @__PURE__ */ c.jsx(Ff, {}),
    /* @__PURE__ */ c.jsx(
      Jd,
      {
        "data-slot": "alert-dialog-content",
        className: K(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          e
        ),
        ...t
      }
    )
  ] });
}
function Wf({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: K("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function Vf({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c.jsx(
    tf,
    {
      "data-slot": "alert-dialog-title",
      className: K("text-lg font-semibold", e),
      ...t
    }
  );
}
function Bf({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c.jsx(
    rf,
    {
      "data-slot": "alert-dialog-description",
      className: K("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function Gf({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c.jsx(
    Qd,
    {
      className: K(mr(), e),
      ...t
    }
  );
}
function Hf({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c.jsx(
    ef,
    {
      className: K(mr({ variant: "outline" }), e),
      ...t
    }
  );
}
function dt({
  className: e,
  type: t,
  error: r,
  ...n
}) {
  return /* @__PURE__ */ c.jsxs("div", { className: "w-full relative", children: [
    /* @__PURE__ */ c.jsx(
      "input",
      {
        type: t,
        "data-slot": "input",
        className: K(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          !!r && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/50",
          e
        ),
        ...n
      }
    ),
    r && /* @__PURE__ */ c.jsx("p", { className: "text-red-500 text-sm mt-1 absolute ", children: r })
  ] });
}
function Yf({
  className: e,
  error: t,
  ...r
}) {
  return /* @__PURE__ */ c.jsxs("div", { className: "relative w-full", children: [
    /* @__PURE__ */ c.jsx(
      "textarea",
      {
        "data-slot": "textarea",
        className: K(
          "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          e,
          !!t && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/50"
        ),
        ...r
      }
    ),
    t && /* @__PURE__ */ c.jsx("p", { className: "text-red-500 text-sm mt-1 absolute", children: t })
  ] });
}
const qf = ({
  isOpen: e,
  onClose: t,
  onCreateNewConversation: r
}) => {
  const n = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    notes: "",
    avatarUrl: "",
    isActive: !0,
    createdAt: /* @__PURE__ */ new Date(),
    updatedAt: /* @__PURE__ */ new Date()
  }, [o, s] = U(n), [a, i] = U(!1), [u, l] = U({}), f = (v) => {
    const { name: y, value: g } = v.target;
    s((x) => ({
      ...x,
      [y]: g
    }));
  }, p = async (v) => {
    v.preventDefault();
    try {
      const y = Jl.safeParse(o);
      if (y.success) {
        l({}), i(!0);
        const g = {
          firstName: o.firstName.trim(),
          lastName: o.lastName.trim(),
          phoneNumber: o.phoneNumber.trim(),
          email: o.email.trim(),
          notes: o.notes.trim(),
          avatarUrl: "",
          isActive: !0,
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date()
        }, x = {
          contactId: "",
          lastMessage: "",
          lastMessageAt: /* @__PURE__ */ new Date(),
          lastMessageId: "",
          unreadCount: 0,
          lastMessageStatus: B.PENDING,
          isActive: !0,
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date()
        };
        r && r(g, x), h();
      } else {
        const g = y.error.issues.reduce(
          (x, A) => (x[A.path[0]] = A.message, x),
          {}
        );
        l(g), console.error(g);
        return;
      }
    } catch (y) {
      console.error("Error creating conversation:", y), alert("Failed to create conversation. Please try again.");
    } finally {
      i(!1);
    }
  }, h = () => {
    s(n), l({}), i(!1), t && t();
  };
  return /* @__PURE__ */ c.jsx(Mf, { open: e, onOpenChange: (v) => !v && h(), children: /* @__PURE__ */ c.jsxs(Uf, { className: "max-w-md", children: [
    /* @__PURE__ */ c.jsxs(Wf, { children: [
      /* @__PURE__ */ c.jsx(Vf, { className: "text-xl font-semibold text-gray-900", children: "New Conversation" }),
      /* @__PURE__ */ c.jsx(Bf, { children: "Create a new conversation by adding contact details below." })
    ] }),
    /* @__PURE__ */ c.jsxs("form", { onSubmit: p, className: "space-y-5", children: [
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx(
          "label",
          {
            htmlFor: "firstName",
            className: "block text-sm font-medium text-gray-700 mb-2",
            children: "First Name *"
          }
        ),
        /* @__PURE__ */ c.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ c.jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ c.jsx(gt, { className: "h-5 w-5 text-gray-400" }) }),
          /* @__PURE__ */ c.jsx(
            dt,
            {
              type: "text",
              id: "firstName",
              name: "firstName",
              value: o.firstName,
              onChange: f,
              placeholder: "Enter first name",
              className: "pl-10",
              required: !0,
              error: u.firstName
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx(
          "label",
          {
            htmlFor: "lastName",
            className: "block text-sm font-medium text-gray-700 mb-2",
            children: "Last Name *"
          }
        ),
        /* @__PURE__ */ c.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ c.jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ c.jsx(gt, { className: "h-5 w-5 text-gray-400" }) }),
          /* @__PURE__ */ c.jsx(
            dt,
            {
              type: "text",
              id: "lastName",
              name: "lastName",
              value: o.lastName,
              onChange: f,
              placeholder: "Enter last name",
              className: "pl-10",
              required: !0,
              error: u.lastName
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx(
          "label",
          {
            htmlFor: "phoneNumber",
            className: "block text-sm font-medium text-gray-700 mb-2",
            children: "Phone Number"
          }
        ),
        /* @__PURE__ */ c.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ c.jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ c.jsx(ws, { className: "h-5 w-5 text-gray-400" }) }),
          /* @__PURE__ */ c.jsx(
            dt,
            {
              type: "tel",
              id: "phoneNumber",
              name: "phoneNumber",
              value: o.phoneNumber,
              onChange: f,
              placeholder: "Enter phone number",
              className: "pl-10",
              error: u.phoneNumber
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx(
          "label",
          {
            htmlFor: "email",
            className: "block text-sm font-medium text-gray-700 mb-2",
            children: "Email Address"
          }
        ),
        /* @__PURE__ */ c.jsxs("div", { className: "relative flex items-center", children: [
          /* @__PURE__ */ c.jsx(vs, { className: "h-5 w-5 text-gray-400 absolute left-3" }),
          /* @__PURE__ */ c.jsx(
            dt,
            {
              type: "email",
              id: "email",
              name: "email",
              value: o.email,
              onChange: f,
              placeholder: "Enter email address",
              className: "pl-10",
              error: u.email
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx(
          "label",
          {
            htmlFor: "notes",
            className: "block text-sm font-medium text-gray-700 mb-2",
            children: "Notes (Optional)"
          }
        ),
        /* @__PURE__ */ c.jsx(
          Yf,
          {
            id: "notes",
            name: "notes",
            value: o.notes,
            onChange: f,
            placeholder: "Add any notes about this contact...",
            rows: 3,
            className: "resize-none",
            error: u.notes
          }
        )
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "flex justify-end space-x-2 mt-6", children: [
        /* @__PURE__ */ c.jsx(Hf, { disabled: a, children: "Cancel" }),
        /* @__PURE__ */ c.jsx(
          Gf,
          {
            onClick: (v) => {
              v.preventDefault(), p({
                preventDefault: () => {
                }
              });
            },
            disabled: a,
            className: "flex items-center space-x-2",
            children: a ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
              /* @__PURE__ */ c.jsx("div", { className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" }),
              /* @__PURE__ */ c.jsx("span", { children: "Creating..." })
            ] }) : /* @__PURE__ */ c.jsx("span", { children: "Create Conversation" })
          }
        )
      ] })
    ] })
  ] }) });
};
function Kf({
  ...e
}) {
  return /* @__PURE__ */ c.jsx(ko, { "data-slot": "dialog", ...e });
}
function Xf({
  ...e
}) {
  return /* @__PURE__ */ c.jsx(No, { "data-slot": "dialog-portal", ...e });
}
function Jf({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c.jsx(
    Eo,
    {
      "data-slot": "dialog-overlay",
      className: K(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function Qf({
  className: e,
  children: t,
  showCloseButton: r = !0,
  ...n
}) {
  return /* @__PURE__ */ c.jsxs(Xf, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ c.jsx(Jf, {}),
    /* @__PURE__ */ c.jsxs(
      jo,
      {
        "data-slot": "dialog-content",
        className: K(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          e
        ),
        ...n,
        children: [
          t,
          r && /* @__PURE__ */ c.jsxs(
            dr,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ c.jsx(mn, {}),
                /* @__PURE__ */ c.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function em({ className: e, ...t }) {
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: K("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function tm({ className: e, ...t }) {
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      "data-slot": "dialog-footer",
      className: K(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        e
      ),
      ...t
    }
  );
}
function rm({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c.jsx(
    Co,
    {
      "data-slot": "dialog-title",
      className: K("text-lg leading-none font-semibold", e),
      ...t
    }
  );
}
function nm({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c.jsx(
    Ao,
    {
      "data-slot": "dialog-description",
      className: K("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
const om = ({
  isOpen: e,
  onClose: t,
  type: r,
  // 'contact' or 'delete' or 'none'
  currentContact: n,
  // contact data for contact info modal
  currentConversation: o,
  // conversation data for delete confirmation
  onConfirmDelete: s
}) => {
  const a = () => {
    const l = (f) => f ? new Date(f).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }) : "N/A";
    return /* @__PURE__ */ c.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ c.jsx("div", { className: "flex-shrink-0", children: n?.avatarUrl ? /* @__PURE__ */ c.jsx(
          "img",
          {
            src: n.avatarUrl,
            alt: `${n.firstName} ${n.lastName}`,
            className: "w-16 h-16 rounded-full object-cover border-2 border-gray-200"
          }
        ) : /* @__PURE__ */ c.jsx("div", { className: "w-16 h-16 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center", children: /* @__PURE__ */ c.jsx(gt, { className: "w-8 h-8 text-gray-400" }) }) }),
        /* @__PURE__ */ c.jsxs("div", { children: [
          /* @__PURE__ */ c.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: n ? `${n.firstName} ${n.lastName}` : "" }),
          /* @__PURE__ */ c.jsx("p", { className: "text-sm text-gray-500", children: n?.phoneNumber || "N/A" })
        ] })
      ] }),
      /* @__PURE__ */ c.jsx("div", { className: "border-t border-gray-200 my-4" }),
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Name" }),
        /* @__PURE__ */ c.jsx("p", { className: "text-gray-900", children: n ? `${n.firstName} ${n.lastName}` : "" })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Email" }),
        /* @__PURE__ */ c.jsx("p", { className: "text-gray-900", children: n?.email || "N/A" })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Created" }),
        /* @__PURE__ */ c.jsx("p", { className: "text-gray-900", children: l(n?.createdAt || /* @__PURE__ */ new Date()) })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Status" }),
        /* @__PURE__ */ c.jsx("p", { className: "text-gray-900", children: /* @__PURE__ */ c.jsx(
          "span",
          {
            className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${n?.isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`,
            children: n?.isActive ? "Active" : "Inactive"
          }
        ) })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Notes" }),
        /* @__PURE__ */ c.jsx("p", { className: "text-gray-900", children: n?.notes || "No notes available" })
      ] })
    ] });
  }, i = () => /* @__PURE__ */ c.jsx("div", { className: "space-y-4" }), u = () => {
    s(o), t();
  };
  return /* @__PURE__ */ c.jsx(Kf, { open: e, onOpenChange: t, children: /* @__PURE__ */ c.jsxs(Qf, { className: "sm:max-w-md", children: [
    /* @__PURE__ */ c.jsxs(em, { children: [
      /* @__PURE__ */ c.jsx(rm, { children: r === "contact" ? "Contact Information" : "Confirm Delete" }),
      r === "delete" && /* @__PURE__ */ c.jsxs(nm, { children: [
        "Are you sure you want to delete the conversation with",
        " ",
        /* @__PURE__ */ c.jsx("span", { className: "font-medium", children: n ? `${n.firstName} ${n.lastName}` : "" }),
        "? This action cannot be undone."
      ] })
    ] }),
    r === "contact" && a(),
    r === "delete" && i(),
    /* @__PURE__ */ c.jsxs(tm, { children: [
      r === "contact" && /* @__PURE__ */ c.jsx(Ft, { variant: "outline", onClick: t, children: "Close" }),
      r === "delete" && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(Ft, { variant: "outline", onClick: t, children: "Cancel" }),
        /* @__PURE__ */ c.jsx(Ft, { variant: "destructive", onClick: u, children: "Delete" })
      ] })
    ] })
  ] }) });
}, mm = ({
  onConversationSelect: e,
  onNewConversation: t,
  onContactInfo: r,
  onDeleteConversation: n
}) => {
  const o = Ct((w) => w.conversations), [s, a] = U(null), [i, u] = U(""), [l, f] = U(!1), [p, h] = U({
    isOpen: !1,
    type: "none",
    contact: null,
    conversation: null
  }), v = Qo(() => i.trim() ? o.filter((w) => {
    const P = Ln(w.contactId);
    return (P ? `${P.firstName} ${P.lastName}` : "").toLowerCase().includes(i.toLowerCase()) || w.lastMessage.toLowerCase().includes(i.toLowerCase());
  }).sort(
    (w, P) => new Date(P.lastMessageAt || /* @__PURE__ */ new Date()).getTime() - new Date(w.lastMessageAt || /* @__PURE__ */ new Date()).getTime()
  ) : o.sort(
    (w, P) => new Date(P.lastMessageAt || /* @__PURE__ */ new Date()).getTime() - new Date(w.lastMessageAt || /* @__PURE__ */ new Date()).getTime()
  ), [i, o]), y = (w) => {
    u(w);
  }, g = (w) => {
    ou(w), a(w), e && e(w);
  }, x = () => {
    f(!0);
  }, A = (w, P) => {
    t && t(w, P);
  }, D = (w) => {
    h({
      isOpen: !0,
      type: "contact",
      contact: w,
      conversation: null
    }), r && r(w);
  }, E = (w) => {
    h({
      isOpen: !0,
      type: "delete",
      contact: null,
      conversation: w
    });
  }, _ = (w) => {
    n && n(w);
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col h-full bg-white border-r border-gray-200", children: [
    /* @__PURE__ */ c.jsx(
      Ts,
      {
        onSearch: y,
        onNewConversationDialog: x
      }
    ),
    /* @__PURE__ */ c.jsx(
      "div",
      {
        className: "flex-1 overflow-y-auto min-h-0",
        style: {
          scrollbarWidth: "thin",
          scrollbarColor: "#d1d5db #f3f4f6",
          maxHeight: "calc(100vh - 80px)"
        },
        children: v.length > 0 ? v.map((w) => /* @__PURE__ */ c.jsx(
          su,
          {
            conversationItem: w,
            isSelected: s?.id === w.id,
            onClick: g,
            onContactInfo: D,
            onConfirmDeleteDialog: E
          },
          w.id
        )) : /* @__PURE__ */ c.jsx("div", { className: "flex flex-col items-center justify-center h-full text-gray-500", children: /* @__PURE__ */ c.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ c.jsx("p", { className: "text-lg font-medium mb-2", children: "No conversations found" }),
          /* @__PURE__ */ c.jsx("p", { className: "text-sm", children: i ? `No results for "${i}"` : "Start a new conversation" })
        ] }) })
      }
    ),
    /* @__PURE__ */ c.jsx(
      qf,
      {
        isOpen: l,
        onClose: () => f(!1),
        onCreateNewConversation: A
      }
    ),
    /* @__PURE__ */ c.jsx(
      om,
      {
        isOpen: p.isOpen,
        onClose: () => h({
          isOpen: !1,
          type: "none",
          contact: null,
          conversation: null
        }),
        type: p.type,
        currentContact: p.contact,
        currentConversation: p.conversation,
        onConfirmDelete: _
      }
    )
  ] });
}, ln = ({
  src: e,
  alt: t,
  className: r,
  style: n
}) => {
  const [o, s] = U(!0), [a, i] = U(!1), u = () => {
    s(!1);
  }, l = () => {
    s(!1), i(!0);
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "relative", children: [
    o && /* @__PURE__ */ c.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-gray-200 rounded-lg", children: /* @__PURE__ */ c.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ c.jsx("div", { className: "animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500" }),
      /* @__PURE__ */ c.jsx("span", { className: "text-sm text-gray-500", children: "Loading..." })
    ] }) }),
    a ? /* @__PURE__ */ c.jsx(
      "div",
      {
        className: "flex items-center justify-center bg-gray-200 rounded-lg",
        style: n,
        children: /* @__PURE__ */ c.jsxs("div", { className: "text-center p-4", children: [
          /* @__PURE__ */ c.jsx("div", { className: "text-gray-400 text-4xl mb-2", children: "📷" }),
          /* @__PURE__ */ c.jsx("p", { className: "text-sm text-gray-500", children: "Failed to load image" })
        ] })
      }
    ) : /* @__PURE__ */ c.jsx(
      "img",
      {
        src: e,
        alt: t,
        className: r,
        style: n,
        onLoad: u,
        onError: l
      }
    )
  ] });
}, un = ({ src: e, className: t, style: r }) => {
  const [n, o] = U(!0), [s, a] = U(!1), i = () => {
    o(!0);
  }, u = () => {
    o(!1);
  }, l = () => {
    o(!1), a(!0);
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "relative", children: [
    n && /* @__PURE__ */ c.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-gray-200 rounded-lg z-10", children: /* @__PURE__ */ c.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ c.jsx("div", { className: "animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500" }),
      /* @__PURE__ */ c.jsx("span", { className: "text-sm text-gray-500", children: "Loading video..." })
    ] }) }),
    s ? /* @__PURE__ */ c.jsx(
      "div",
      {
        className: "flex items-center justify-center bg-gray-200 rounded-lg",
        style: r,
        children: /* @__PURE__ */ c.jsxs("div", { className: "text-center p-4", children: [
          /* @__PURE__ */ c.jsx("div", { className: "text-gray-400 text-4xl mb-2", children: "🎥" }),
          /* @__PURE__ */ c.jsx("p", { className: "text-sm text-gray-500", children: "Failed to load video" })
        ] })
      }
    ) : /* @__PURE__ */ c.jsx(
      "video",
      {
        src: e,
        controls: !0,
        className: t,
        style: r,
        onLoadStart: i,
        onCanPlay: u,
        onError: l
      }
    )
  ] });
}, sm = ({ message: e }) => {
  const t = e.direction === "outbound", r = e.direction === "inbound", n = e.createdAt, o = e.mediaUrl, s = e.mediaType, a = (l) => l ? new Date(l).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }) : "", i = () => {
    if (!t) return null;
    switch (e.currentStatus) {
      case B.PENDING:
        return /* @__PURE__ */ c.jsx(ms, { className: "w-3 h-3 text-gray-400" });
      case B.SENT:
        return /* @__PURE__ */ c.jsx(br, { className: "w-3 h-3 text-gray-400" });
      case B.DELIVERED:
        return /* @__PURE__ */ c.jsx(Wt, { className: "w-3 h-3 text-blue-400" });
      case B.READ:
        return /* @__PURE__ */ c.jsx(Wt, { className: "w-3 h-3 text-green-400" });
      case B.FAILED:
        return /* @__PURE__ */ c.jsx(mn, { className: "w-3 h-3 text-red-400" });
      default:
        return /* @__PURE__ */ c.jsx(br, { className: "w-3 h-3 text-gray-400" });
    }
  }, u = () => {
    if (!t) return "Received";
    switch (e.currentStatus) {
      case B.PENDING:
        return "Pending";
      case B.SENT:
        return "Sent";
      case B.DELIVERED:
        return "Delivered";
      case B.READ:
        return "Read";
      case B.FAILED:
        return "Failed";
      default:
        return "Sent";
    }
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col gap-3 px-4 py-2", children: [
    t && /* @__PURE__ */ c.jsx("div", { className: "flex justify-end mb-2", children: /* @__PURE__ */ c.jsxs("div", { className: "relative flex-shrink-0", style: { maxWidth: "75%" }, children: [
      /* @__PURE__ */ c.jsxs("div", { className: "bg-blue-600 text-white px-4 py-3 rounded-2xl rounded-br-md shadow-md", children: [
        o && s && /* @__PURE__ */ c.jsxs("div", { className: "mb-2", children: [
          s === "image" && /* @__PURE__ */ c.jsx(
            ln,
            {
              src: o,
              alt: "Message attachment",
              className: "max-w-full h-auto rounded-lg",
              style: { maxHeight: "200px" }
            }
          ),
          s === "video" && /* @__PURE__ */ c.jsx(
            un,
            {
              src: o,
              className: "max-w-full h-auto rounded-lg",
              style: { maxHeight: "200px" }
            }
          ),
          s === "audio" && /* @__PURE__ */ c.jsx("audio", { src: o, controls: !0, className: "w-full" }),
          s === "document" && /* @__PURE__ */ c.jsx("div", { className: "bg-blue-500 p-2 rounded-lg", children: /* @__PURE__ */ c.jsx(
            "a",
            {
              href: o,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-white text-sm flex items-center",
              children: "📄 Document"
            }
          ) })
        ] }),
        e.content && /* @__PURE__ */ c.jsx("p", { className: "text-sm leading-relaxed break-words mb-0", children: e.content })
      ] }),
      /* @__PURE__ */ c.jsx("div", { className: "flex justify-end mt-1 mr-1", children: /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-1 min-w-[70px]", children: [
          i(),
          /* @__PURE__ */ c.jsx("span", { className: "text-xs text-gray-400", children: u() })
        ] }),
        /* @__PURE__ */ c.jsx("span", { className: "text-xs text-gray-400", children: a(n) })
      ] }) })
    ] }) }),
    r && /* @__PURE__ */ c.jsx("div", { className: "flex justify-start mb-2", children: /* @__PURE__ */ c.jsxs("div", { className: "relative flex-shrink-0", style: { maxWidth: "75%" }, children: [
      /* @__PURE__ */ c.jsxs("div", { className: "bg-gray-100 text-gray-800 px-4 py-3 rounded-2xl rounded-bl-md shadow-sm border border-gray-200", children: [
        o && s && /* @__PURE__ */ c.jsxs("div", { className: "mb-2", children: [
          s === "image" && /* @__PURE__ */ c.jsx(
            ln,
            {
              src: o,
              alt: "Message attachment",
              className: "max-w-full h-auto rounded-lg",
              style: { maxHeight: "200px" }
            }
          ),
          s === "video" && /* @__PURE__ */ c.jsx(
            un,
            {
              src: o,
              className: "max-w-full h-auto rounded-lg",
              style: { maxHeight: "200px" }
            }
          ),
          s === "audio" && /* @__PURE__ */ c.jsx("audio", { src: o, controls: !0, className: "w-full" }),
          s === "document" && /* @__PURE__ */ c.jsx("div", { className: "bg-gray-200 p-2 rounded-lg", children: /* @__PURE__ */ c.jsx(
            "a",
            {
              href: o,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-gray-800 text-sm flex items-center",
              children: "📄 Document"
            }
          ) })
        ] }),
        e.content && /* @__PURE__ */ c.jsx("p", { className: "text-sm leading-relaxed break-words mb-0", children: e.content })
      ] }),
      /* @__PURE__ */ c.jsx("div", { className: "flex justify-start mt-1 ml-1", children: /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ c.jsx("span", { className: "text-xs text-gray-400", children: "Received" }),
        /* @__PURE__ */ c.jsx("span", { className: "text-xs text-gray-400", children: a(n) })
      ] }) })
    ] }) })
  ] });
}, am = ({ date: e }) => {
  const t = (r) => new Date(r).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return /* @__PURE__ */ c.jsx("div", { className: "flex justify-center my-4", children: /* @__PURE__ */ c.jsx("div", { className: "bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium shadow-sm", children: t(e) }) });
}, im = ({ onSendMessage: e }) => {
  const [t, r] = U(""), [n, o] = U(!1), [s, a] = U(!1), [i, u] = U(null), l = Jt(null), f = async () => {
    (t.trim() || i) && !s && (a(!0), o(!1), await new Promise((E) => setTimeout(E, 300)), e && e(t.trim(), i), r(""), u(null), a(!1));
  }, p = (E) => {
    E.key === "Enter" && !E.shiftKey && (E.preventDefault(), f());
  }, h = (E) => {
    r(E.target.value), o(E.target.value.length > 0);
  }, v = (E) => {
    const _ = E.target.files?.[0];
    _ && u(_);
  }, y = () => {
    l.current?.click();
  }, g = () => {
    u(null), l.current && (l.current.value = "");
  }, x = 160, A = t.length, D = A > x;
  return /* @__PURE__ */ c.jsxs("div", { className: "border-t border-gray-200 bg-white p-4", children: [
    /* @__PURE__ */ c.jsx(
      "input",
      {
        type: "file",
        ref: l,
        onChange: v,
        accept: "image/*,video/*,audio/*,.pdf,.doc,.docx,.txt",
        className: "hidden"
      }
    ),
    i && /* @__PURE__ */ c.jsx("div", { className: "mb-3 p-3 bg-gray-50 rounded-lg border border-gray-200", children: /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ c.jsxs("span", { className: "text-sm text-gray-600", children: [
          "📎 ",
          i.name
        ] }),
        /* @__PURE__ */ c.jsxs("span", { className: "text-xs text-gray-400", children: [
          "(",
          (i.size / 1024).toFixed(1),
          " KB)"
        ] })
      ] }),
      /* @__PURE__ */ c.jsx(
        "button",
        {
          onClick: g,
          className: "text-red-500 hover:text-red-700 text-sm",
          children: "✕"
        }
      )
    ] }) }),
    /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ c.jsx(
        "button",
        {
          onClick: y,
          className: "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-transparent hover:bg-gray-200 text-gray-600 transition-colors",
          children: /* @__PURE__ */ c.jsx(xs, { className: "w-6 h-6" })
        }
      ),
      /* @__PURE__ */ c.jsxs("div", { className: "flex-1 relative", children: [
        /* @__PURE__ */ c.jsx(
          "textarea",
          {
            value: t,
            onChange: h,
            onKeyPress: p,
            placeholder: "Type your message...",
            className: `w-full resize-none border border-gray-300 rounded-2xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${D ? "border-red-300 focus:ring-red-500" : ""}`,
            rows: 1,
            style: { minHeight: "44px", maxHeight: "120px" }
          }
        ),
        /* @__PURE__ */ c.jsx("div", { className: "absolute bottom-2 right-3", children: /* @__PURE__ */ c.jsxs(
          "span",
          {
            className: `text-xs ${D ? "text-red-500" : A > x * 0.8 ? "text-yellow-500" : "text-gray-400"}`,
            children: [
              A,
              "/",
              x
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ c.jsx(
        "button",
        {
          onClick: f,
          disabled: !t.trim() && !i || D || s,
          className: "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95",
          children: /* @__PURE__ */ c.jsx(
            Cs,
            {
              className: `w-6 h-6 transition-all duration-300 ${s ? "text-blue-500 animate-bounce" : (t.trim() || i) && !D ? "text-blue-600 hover:text-blue-700" : "text-gray-400"}`
            }
          )
        }
      )
    ] }),
    n && /* @__PURE__ */ c.jsx("div", { className: "mt-2 text-xs text-gray-500 animate-pulse", children: "Typing..." }),
    s && /* @__PURE__ */ c.jsx("div", { className: "mt-2 text-xs text-blue-500 animate-pulse", children: "Sending..." }),
    D && /* @__PURE__ */ c.jsxs("div", { className: "mt-2 text-xs text-red-500", children: [
      "Message exceeds ",
      x,
      " character limit"
    ] })
  ] });
}, hm = ({
  selectedConversation: e,
  onMessageSent: t
}) => {
  const r = Jt(null), n = Ct((h) => h.messages), [o, s] = U(() => e?.id ? Ur(e.id) : []);
  Be(() => {
    if (e?.id) {
      const h = Ur(e.id);
      s(h);
    } else
      s([]);
  }, [e, n]);
  const a = () => {
    if (r.current && o.length > 0) {
      const h = r.current.parentElement;
      h && (h.scrollTop = h.scrollHeight);
    }
  };
  Be(() => {
    o.length > 0 && a();
  }, [o]);
  const i = (h, v) => {
    try {
      const y = e?.contactId || "", g = e?.id || "", x = {
        contactId: y,
        conversationId: g,
        content: h,
        senderId: "",
        // user id
        receiverId: y,
        direction: jt.OUTBOUND,
        currentStatus: B.PENDING,
        statusHistory: [],
        mediaUrl: v ? URL.createObjectURL(v) : null,
        mediaType: v ? u(v.type) : null,
        isActive: !0,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      };
      t && t(x, g);
    } catch (y) {
      console.error(y);
    }
  }, u = (h) => h.startsWith("image/") ? "image" : h.startsWith("video/") ? "video" : h.startsWith("audio/") ? "audio" : "document", f = ((h) => {
    const v = {};
    return h.forEach((y) => {
      const x = new Date(y.createdAt).toDateString();
      v[x] || (v[x] = []), v[x].push(y);
    }), Object.keys(v).forEach((y) => {
      v[y].sort(
        (g, x) => new Date(g.createdAt).getTime() - new Date(x.createdAt).getTime()
      );
    }), v;
  })(o), p = Object.keys(f).sort(
    (h, v) => new Date(h).getTime() - new Date(v).getTime()
  );
  return e ? /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "flex-1 overflow-y-auto pb-4", children: [
      p.map((h) => /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx(am, { date: new Date(h).toDateString() }),
        f[h].map((v) => /* @__PURE__ */ c.jsx(
          "div",
          {
            className: "animate-fadeIn",
            children: /* @__PURE__ */ c.jsx(sm, { message: v })
          },
          v.id || v.createdAt.toString()
        ))
      ] }, h)),
      /* @__PURE__ */ c.jsx("div", { ref: r })
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ c.jsx(im, { onSendMessage: i }) })
  ] }) : /* @__PURE__ */ c.jsx("div", { className: "flex flex-col h-full bg-gray-50", children: /* @__PURE__ */ c.jsx("div", { className: "flex-1 flex items-center justify-center", children: /* @__PURE__ */ c.jsxs("div", { className: "text-center text-gray-500", children: [
    /* @__PURE__ */ c.jsx("h3", { className: "text-lg font-medium mb-2", children: "Select a conversation" }),
    /* @__PURE__ */ c.jsx("p", { className: "text-sm", children: "Choose a conversation from the list to start messaging" })
  ] }) }) });
}, pm = (e = 768) => {
  const [t, r] = U(!1);
  return Be(() => {
    const n = () => {
      r(window.innerWidth < e);
    };
    return n(), window.addEventListener("resize", n), () => window.removeEventListener("resize", n);
  }, [e]), t;
};
export {
  mm as ConversationList,
  Gl as ConversationStatus,
  hm as ConversationView,
  Yl as FieldType,
  Hl as MediaType,
  jt as MessageDirection,
  B as MessageStatus,
  ql as contactSchema,
  Kl as conversationSchema,
  Xl as messageSchema,
  Jl as newContactSchema,
  um as newConversationSchema,
  dm as newMessageSchema,
  pm as useIsMobile
};
