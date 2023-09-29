// Aos library

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : (e.AOS = t());
})(this, function () {
  "use strict";
  var e =
      "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {},
    t = "Expected a function",
    n = NaN,
    o = "[object Symbol]",
    i = /^\s+|\s+$/g,
    a = /^[-+]0x[0-9a-f]+$/i,
    r = /^0b[01]+$/i,
    c = /^0o[0-7]+$/i,
    s = parseInt,
    u = "object" == typeof e && e && e.Object === Object && e,
    d = "object" == typeof self && self && self.Object === Object && self,
    l = u || d || Function("return this")(),
    f = Object.prototype.toString,
    m = Math.max,
    p = Math.min,
    b = function () {
      return l.Date.now();
    };
  function v(e, n, o) {
    var i,
      a,
      r,
      c,
      s,
      u,
      d = 0,
      l = !1,
      f = !1,
      v = !0;
    if ("function" != typeof e) throw new TypeError(t);
    function y(t) {
      var n = i,
        o = a;
      return (i = a = void 0), (d = t), (c = e.apply(o, n));
    }
    function h(e) {
      var t = e - u;
      return void 0 === u || t >= n || t < 0 || (f && e - d >= r);
    }
    function k() {
      var e = b();
      if (h(e)) return x(e);
      s = setTimeout(
        k,
        (function (e) {
          var t = n - (e - u);
          return f ? p(t, r - (e - d)) : t;
        })(e)
      );
    }
    function x(e) {
      return (s = void 0), v && i ? y(e) : ((i = a = void 0), c);
    }
    function O() {
      var e = b(),
        t = h(e);
      if (((i = arguments), (a = this), (u = e), t)) {
        if (void 0 === s)
          return (function (e) {
            return (d = e), (s = setTimeout(k, n)), l ? y(e) : c;
          })(u);
        if (f) return (s = setTimeout(k, n)), y(u);
      }
      return void 0 === s && (s = setTimeout(k, n)), c;
    }
    return (
      (n = w(n) || 0),
      g(o) &&
        ((l = !!o.leading),
        (r = (f = "maxWait" in o) ? m(w(o.maxWait) || 0, n) : r),
        (v = "trailing" in o ? !!o.trailing : v)),
      (O.cancel = function () {
        void 0 !== s && clearTimeout(s), (d = 0), (i = u = a = s = void 0);
      }),
      (O.flush = function () {
        return void 0 === s ? c : x(b());
      }),
      O
    );
  }
  function g(e) {
    var t = typeof e;
    return !!e && ("object" == t || "function" == t);
  }
  function w(e) {
    if ("number" == typeof e) return e;
    if (
      (function (e) {
        return (
          "symbol" == typeof e ||
          ((function (e) {
            return !!e && "object" == typeof e;
          })(e) &&
            f.call(e) == o)
        );
      })(e)
    )
      return n;
    if (g(e)) {
      var t = "function" == typeof e.valueOf ? e.valueOf() : e;
      e = g(t) ? t + "" : t;
    }
    if ("string" != typeof e) return 0 === e ? e : +e;
    e = e.replace(i, "");
    var u = r.test(e);
    return u || c.test(e) ? s(e.slice(2), u ? 2 : 8) : a.test(e) ? n : +e;
  }
  var y = function (e, n, o) {
      var i = !0,
        a = !0;
      if ("function" != typeof e) throw new TypeError(t);
      return (
        g(o) &&
          ((i = "leading" in o ? !!o.leading : i),
          (a = "trailing" in o ? !!o.trailing : a)),
        v(e, n, { leading: i, maxWait: n, trailing: a })
      );
    },
    h = "Expected a function",
    k = NaN,
    x = "[object Symbol]",
    O = /^\s+|\s+$/g,
    j = /^[-+]0x[0-9a-f]+$/i,
    E = /^0b[01]+$/i,
    N = /^0o[0-7]+$/i,
    z = parseInt,
    C = "object" == typeof e && e && e.Object === Object && e,
    A = "object" == typeof self && self && self.Object === Object && self,
    q = C || A || Function("return this")(),
    L = Object.prototype.toString,
    T = Math.max,
    M = Math.min,
    S = function () {
      return q.Date.now();
    };
  function D(e) {
    var t = typeof e;
    return !!e && ("object" == t || "function" == t);
  }
  function H(e) {
    if ("number" == typeof e) return e;
    if (
      (function (e) {
        return (
          "symbol" == typeof e ||
          ((function (e) {
            return !!e && "object" == typeof e;
          })(e) &&
            L.call(e) == x)
        );
      })(e)
    )
      return k;
    if (D(e)) {
      var t = "function" == typeof e.valueOf ? e.valueOf() : e;
      e = D(t) ? t + "" : t;
    }
    if ("string" != typeof e) return 0 === e ? e : +e;
    e = e.replace(O, "");
    var n = E.test(e);
    return n || N.test(e) ? z(e.slice(2), n ? 2 : 8) : j.test(e) ? k : +e;
  }
  var $ = function (e, t, n) {
      var o,
        i,
        a,
        r,
        c,
        s,
        u = 0,
        d = !1,
        l = !1,
        f = !0;
      if ("function" != typeof e) throw new TypeError(h);
      function m(t) {
        var n = o,
          a = i;
        return (o = i = void 0), (u = t), (r = e.apply(a, n));
      }
      function p(e) {
        var n = e - s;
        return void 0 === s || n >= t || n < 0 || (l && e - u >= a);
      }
      function b() {
        var e = S();
        if (p(e)) return v(e);
        c = setTimeout(
          b,
          (function (e) {
            var n = t - (e - s);
            return l ? M(n, a - (e - u)) : n;
          })(e)
        );
      }
      function v(e) {
        return (c = void 0), f && o ? m(e) : ((o = i = void 0), r);
      }
      function g() {
        var e = S(),
          n = p(e);
        if (((o = arguments), (i = this), (s = e), n)) {
          if (void 0 === c)
            return (function (e) {
              return (u = e), (c = setTimeout(b, t)), d ? m(e) : r;
            })(s);
          if (l) return (c = setTimeout(b, t)), m(s);
        }
        return void 0 === c && (c = setTimeout(b, t)), r;
      }
      return (
        (t = H(t) || 0),
        D(n) &&
          ((d = !!n.leading),
          (a = (l = "maxWait" in n) ? T(H(n.maxWait) || 0, t) : a),
          (f = "trailing" in n ? !!n.trailing : f)),
        (g.cancel = function () {
          void 0 !== c && clearTimeout(c), (u = 0), (o = s = i = c = void 0);
        }),
        (g.flush = function () {
          return void 0 === c ? r : v(S());
        }),
        g
      );
    },
    W = function () {};
  function P(e) {
    e &&
      e.forEach(function (e) {
        var t = Array.prototype.slice.call(e.addedNodes),
          n = Array.prototype.slice.call(e.removedNodes);
        if (
          (function e(t) {
            var n = void 0,
              o = void 0;
            for (n = 0; n < t.length; n += 1) {
              if ((o = t[n]).dataset && o.dataset.aos) return !0;
              if (o.children && e(o.children)) return !0;
            }
            return !1;
          })(t.concat(n))
        )
          return W();
      });
  }
  function Y() {
    return (
      window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver
    );
  }
  var _ = {
      isSupported: function () {
        return !!Y();
      },
      ready: function (e, t) {
        var n = window.document,
          o = new (Y())(P);
        (W = t),
          o.observe(n.documentElement, {
            childList: !0,
            subtree: !0,
            removedNodes: !0,
          });
      },
    },
    B = function (e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    },
    F = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    })(),
    I =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
        return e;
      },
    K =
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
    G =
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
    J =
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
    Q =
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
  function R() {
    return navigator.userAgent || navigator.vendor || window.opera || "";
  }
  var U = new ((function () {
      function e() {
        B(this, e);
      }
      return (
        F(e, [
          {
            key: "phone",
            value: function () {
              var e = R();
              return !(!K.test(e) && !G.test(e.substr(0, 4)));
            },
          },
          {
            key: "mobile",
            value: function () {
              var e = R();
              return !(!J.test(e) && !Q.test(e.substr(0, 4)));
            },
          },
          {
            key: "tablet",
            value: function () {
              return this.mobile() && !this.phone();
            },
          },
          {
            key: "ie11",
            value: function () {
              return (
                "-ms-scroll-limit" in document.documentElement.style &&
                "-ms-ime-align" in document.documentElement.style
              );
            },
          },
        ]),
        e
      );
    })())(),
    V = function (e, t) {
      var n = void 0;
      return (
        U.ie11()
          ? (n = document.createEvent("CustomEvent")).initCustomEvent(
              e,
              !0,
              !0,
              { detail: t }
            )
          : (n = new CustomEvent(e, { detail: t })),
        document.dispatchEvent(n)
      );
    },
    X = function (e) {
      return e.forEach(function (e, t) {
        return (function (e, t) {
          var n = e.options,
            o = e.position,
            i = e.node,
            a =
              (e.data,
              function () {
                e.animated &&
                  ((function (e, t) {
                    t &&
                      t.forEach(function (t) {
                        return e.classList.remove(t);
                      });
                  })(i, n.animatedClassNames),
                  V("aos:out", i),
                  e.options.id && V("aos:in:" + e.options.id, i),
                  (e.animated = !1));
              });
          n.mirror && t >= o.out && !n.once
            ? a()
            : t >= o.in
            ? e.animated ||
              ((function (e, t) {
                t &&
                  t.forEach(function (t) {
                    return e.classList.add(t);
                  });
              })(i, n.animatedClassNames),
              V("aos:in", i),
              e.options.id && V("aos:in:" + e.options.id, i),
              (e.animated = !0))
            : e.animated && !n.once && a();
        })(e, window.pageYOffset);
      });
    },
    Z = function (e) {
      for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); )
        (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
          (n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
          (e = e.offsetParent);
      return { top: n, left: t };
    },
    ee = function (e, t, n) {
      var o = e.getAttribute("data-aos-" + t);
      if (void 0 !== o) {
        if ("true" === o) return !0;
        if ("false" === o) return !1;
      }
      return o || n;
    },
    te = function (e, t) {
      return (
        e.forEach(function (e, n) {
          var o = ee(e.node, "mirror", t.mirror),
            i = ee(e.node, "once", t.once),
            a = ee(e.node, "id"),
            r = t.useClassNames && e.node.getAttribute("data-aos"),
            c = [t.animatedClassName]
              .concat(r ? r.split(" ") : [])
              .filter(function (e) {
                return "string" == typeof e;
              });
          t.initClassName && e.node.classList.add(t.initClassName),
            (e.position = {
              in: (function (e, t, n) {
                var o = window.innerHeight,
                  i = ee(e, "anchor"),
                  a = ee(e, "anchor-placement"),
                  r = Number(ee(e, "offset", a ? 0 : t)),
                  c = a || n,
                  s = e;
                i &&
                  document.querySelectorAll(i) &&
                  (s = document.querySelectorAll(i)[0]);
                var u = Z(s).top - o;
                switch (c) {
                  case "top-bottom":
                    break;
                  case "center-bottom":
                    u += s.offsetHeight / 2;
                    break;
                  case "bottom-bottom":
                    u += s.offsetHeight;
                    break;
                  case "top-center":
                    u += o / 2;
                    break;
                  case "center-center":
                    u += o / 2 + s.offsetHeight / 2;
                    break;
                  case "bottom-center":
                    u += o / 2 + s.offsetHeight;
                    break;
                  case "top-top":
                    u += o;
                    break;
                  case "bottom-top":
                    u += o + s.offsetHeight;
                    break;
                  case "center-top":
                    u += o + s.offsetHeight / 2;
                }
                return u + r;
              })(e.node, t.offset, t.anchorPlacement),
              out:
                o &&
                (function (e, t) {
                  window.innerHeight;
                  var n = ee(e, "anchor"),
                    o = ee(e, "offset", t),
                    i = e;
                  return (
                    n &&
                      document.querySelectorAll(n) &&
                      (i = document.querySelectorAll(n)[0]),
                    Z(i).top + i.offsetHeight - o
                  );
                })(e.node, t.offset),
            }),
            (e.options = { once: i, mirror: o, animatedClassNames: c, id: a });
        }),
        e
      );
    },
    ne = function () {
      var e = document.querySelectorAll("[data-aos]");
      return Array.prototype.map.call(e, function (e) {
        return { node: e };
      });
    },
    oe = [],
    ie = !1,
    ae = {
      offset: 120,
      delay: 0,
      easing: "ease",
      duration: 400,
      disable: !1,
      once: !1,
      mirror: !1,
      anchorPlacement: "top-bottom",
      startEvent: "DOMContentLoaded",
      animatedClassName: "aos-animate",
      initClassName: "aos-init",
      useClassNames: !1,
      disableMutationObserver: !1,
      throttleDelay: 99,
      debounceDelay: 50,
    },
    re = function () {
      return document.all && !window.atob;
    },
    ce = function () {
      arguments.length > 0 &&
        void 0 !== arguments[0] &&
        arguments[0] &&
        (ie = !0),
        ie &&
          ((oe = te(oe, ae)),
          X(oe),
          window.addEventListener(
            "scroll",
            y(function () {
              X(oe, ae.once);
            }, ae.throttleDelay)
          ));
    },
    se = function () {
      if (((oe = ne()), de(ae.disable) || re())) return ue();
      ce();
    },
    ue = function () {
      oe.forEach(function (e, t) {
        e.node.removeAttribute("data-aos"),
          e.node.removeAttribute("data-aos-easing"),
          e.node.removeAttribute("data-aos-duration"),
          e.node.removeAttribute("data-aos-delay"),
          ae.initClassName && e.node.classList.remove(ae.initClassName),
          ae.animatedClassName && e.node.classList.remove(ae.animatedClassName);
      });
    },
    de = function (e) {
      return (
        !0 === e ||
        ("mobile" === e && U.mobile()) ||
        ("phone" === e && U.phone()) ||
        ("tablet" === e && U.tablet()) ||
        ("function" == typeof e && !0 === e())
      );
    };
  return {
    init: function (e) {
      return (
        (ae = I(ae, e)),
        (oe = ne()),
        ae.disableMutationObserver ||
          _.isSupported() ||
          (console.info(
            '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '
          ),
          (ae.disableMutationObserver = !0)),
        ae.disableMutationObserver || _.ready("[data-aos]", se),
        de(ae.disable) || re()
          ? ue()
          : (document
              .querySelector("body")
              .setAttribute("data-aos-easing", ae.easing),
            document
              .querySelector("body")
              .setAttribute("data-aos-duration", ae.duration),
            document
              .querySelector("body")
              .setAttribute("data-aos-delay", ae.delay),
            -1 === ["DOMContentLoaded", "load"].indexOf(ae.startEvent)
              ? document.addEventListener(ae.startEvent, function () {
                  ce(!0);
                })
              : window.addEventListener("load", function () {
                  ce(!0);
                }),
            "DOMContentLoaded" === ae.startEvent &&
              ["complete", "interactive"].indexOf(document.readyState) > -1 &&
              ce(!0),
            window.addEventListener("resize", $(ce, ae.debounceDelay, !0)),
            window.addEventListener(
              "orientationchange",
              $(ce, ae.debounceDelay, !0)
            ),
            oe)
      );
    },
    refresh: ce,
    refreshHard: se,
  };
});
/**
 * Swiper 10.2.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: August 17, 2023
 */

var Swiper = (function () {
  "use strict";
  function e(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function t(s, a) {
    void 0 === s && (s = {}),
      void 0 === a && (a = {}),
      Object.keys(a).forEach((i) => {
        void 0 === s[i]
          ? (s[i] = a[i])
          : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i]);
      });
  }
  const s = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function a() {
    const e = "undefined" != typeof document ? document : {};
    return t(e, s), e;
  }
  const i = {
    document: s,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function r() {
    const e = "undefined" != typeof window ? window : {};
    return t(e, i), e;
  }
  function n(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function l() {
    return Date.now();
  }
  function o(e, t) {
    void 0 === t && (t = "x");
    const s = r();
    let a, i, n;
    const l = (function (e) {
      const t = r();
      let s;
      return (
        t.getComputedStyle && (s = t.getComputedStyle(e, null)),
        !s && e.currentStyle && (s = e.currentStyle),
        s || (s = e.style),
        s
      );
    })(e);
    return (
      s.WebKitCSSMatrix
        ? ((i = l.transform || l.webkitTransform),
          i.split(",").length > 6 &&
            (i = i
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (n = new s.WebKitCSSMatrix("none" === i ? "" : i)))
        : ((n =
            l.MozTransform ||
            l.OTransform ||
            l.MsTransform ||
            l.msTransform ||
            l.transform ||
            l
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (a = n.toString().split(","))),
      "x" === t &&
        (i = s.WebKitCSSMatrix
          ? n.m41
          : 16 === a.length
          ? parseFloat(a[12])
          : parseFloat(a[4])),
      "y" === t &&
        (i = s.WebKitCSSMatrix
          ? n.m42
          : 16 === a.length
          ? parseFloat(a[13])
          : parseFloat(a[5])),
      i || 0
    );
  }
  function d(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function c() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ["__proto__", "constructor", "prototype"];
    for (let a = 1; a < arguments.length; a += 1) {
      const i = a < 0 || arguments.length <= a ? void 0 : arguments[a];
      if (
        null != i &&
        ((s = i),
        !("undefined" != typeof window && void 0 !== window.HTMLElement
          ? s instanceof HTMLElement
          : s && (1 === s.nodeType || 11 === s.nodeType)))
      ) {
        const s = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
        for (let t = 0, a = s.length; t < a; t += 1) {
          const a = s[t],
            r = Object.getOwnPropertyDescriptor(i, a);
          void 0 !== r &&
            r.enumerable &&
            (d(e[a]) && d(i[a])
              ? i[a].__swiper__
                ? (e[a] = i[a])
                : c(e[a], i[a])
              : !d(e[a]) && d(i[a])
              ? ((e[a] = {}), i[a].__swiper__ ? (e[a] = i[a]) : c(e[a], i[a]))
              : (e[a] = i[a]));
        }
      }
    }
    var s;
    return e;
  }
  function p(e, t, s) {
    e.style.setProperty(t, s);
  }
  function u(e) {
    let { swiper: t, targetPosition: s, side: a } = e;
    const i = r(),
      n = -t.translate;
    let l,
      o = null;
    const d = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = "none"),
      i.cancelAnimationFrame(t.cssModeFrameID);
    const c = s > n ? "next" : "prev",
      p = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
      u = () => {
        (l = new Date().getTime()), null === o && (o = l);
        const e = Math.max(Math.min((l - o) / d, 1), 0),
          r = 0.5 - Math.cos(e * Math.PI) / 2;
        let c = n + r * (s - n);
        if ((p(c, s) && (c = s), t.wrapperEl.scrollTo({ [a]: c }), p(c, s)))
          return (
            (t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (t.wrapperEl.style.overflow = ""),
                t.wrapperEl.scrollTo({ [a]: c });
            }),
            void i.cancelAnimationFrame(t.cssModeFrameID)
          );
        t.cssModeFrameID = i.requestAnimationFrame(u);
      };
    u();
  }
  function m(e) {
    return (
      e.querySelector(".swiper-slide-transform") ||
      (e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform")) ||
      e
    );
  }
  function h(e, t) {
    return (
      void 0 === t && (t = ""), [...e.children].filter((e) => e.matches(t))
    );
  }
  function f(e, t) {
    void 0 === t && (t = []);
    const s = document.createElement(e);
    return s.classList.add(...(Array.isArray(t) ? t : [t])), s;
  }
  function g(e) {
    const t = r(),
      s = a(),
      i = e.getBoundingClientRect(),
      n = s.body,
      l = e.clientTop || n.clientTop || 0,
      o = e.clientLeft || n.clientLeft || 0,
      d = e === t ? t.scrollY : e.scrollTop,
      c = e === t ? t.scrollX : e.scrollLeft;
    return { top: i.top + d - l, left: i.left + c - o };
  }
  function v(e, t) {
    return r().getComputedStyle(e, null).getPropertyValue(t);
  }
  function w(e) {
    let t,
      s = e;
    if (s) {
      for (t = 0; null !== (s = s.previousSibling); )
        1 === s.nodeType && (t += 1);
      return t;
    }
  }
  function b(e, t) {
    const s = [];
    let a = e.parentElement;
    for (; a; )
      t ? a.matches(t) && s.push(a) : s.push(a), (a = a.parentElement);
    return s;
  }
  function y(e, t) {
    t &&
      e.addEventListener("transitionend", function s(a) {
        a.target === e &&
          (t.call(e, a), e.removeEventListener("transitionend", s));
      });
  }
  function E(e, t, s) {
    const a = r();
    return s
      ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
          parseFloat(
            a
              .getComputedStyle(e, null)
              .getPropertyValue("width" === t ? "margin-right" : "margin-top")
          ) +
          parseFloat(
            a
              .getComputedStyle(e, null)
              .getPropertyValue("width" === t ? "margin-left" : "margin-bottom")
          )
      : e.offsetWidth;
  }
  let x, S, T;
  function M() {
    return (
      x ||
        (x = (function () {
          const e = r(),
            t = a();
          return {
            smoothScroll:
              t.documentElement &&
              t.documentElement.style &&
              "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
          };
        })()),
      x
    );
  }
  function C(e) {
    return (
      void 0 === e && (e = {}),
      S ||
        (S = (function (e) {
          let { userAgent: t } = void 0 === e ? {} : e;
          const s = M(),
            a = r(),
            i = a.navigator.platform,
            n = t || a.navigator.userAgent,
            l = { ios: !1, android: !1 },
            o = a.screen.width,
            d = a.screen.height,
            c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
          let p = n.match(/(iPad).*OS\s([\d_]+)/);
          const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
            m = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            h = "Win32" === i;
          let f = "MacIntel" === i;
          return (
            !p &&
              f &&
              s.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(`${o}x${d}`) >= 0 &&
              ((p = n.match(/(Version)\/([\d.]+)/)),
              p || (p = [0, 1, "13_0_0"]),
              (f = !1)),
            c && !h && ((l.os = "android"), (l.android = !0)),
            (p || m || u) && ((l.os = "ios"), (l.ios = !0)),
            l
          );
        })(e)),
      S
    );
  }
  function P() {
    return (
      T ||
        (T = (function () {
          const e = r();
          let t = !1;
          function s() {
            const t = e.navigator.userAgent.toLowerCase();
            return (
              t.indexOf("safari") >= 0 &&
              t.indexOf("chrome") < 0 &&
              t.indexOf("android") < 0
            );
          }
          if (s()) {
            const s = String(e.navigator.userAgent);
            if (s.includes("Version/")) {
              const [e, a] = s
                .split("Version/")[1]
                .split(" ")[0]
                .split(".")
                .map((e) => Number(e));
              t = e < 16 || (16 === e && a < 2);
            }
          }
          return {
            isSafari: t || s(),
            needPerspectiveFix: t,
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
          };
        })()),
      T
    );
  }
  var L = {
    on(e, t, s) {
      const a = this;
      if (!a.eventsListeners || a.destroyed) return a;
      if ("function" != typeof t) return a;
      const i = s ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          a.eventsListeners[e] || (a.eventsListeners[e] = []),
            a.eventsListeners[e][i](t);
        }),
        a
      );
    },
    once(e, t, s) {
      const a = this;
      if (!a.eventsListeners || a.destroyed) return a;
      if ("function" != typeof t) return a;
      function i() {
        a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
        for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++)
          r[n] = arguments[n];
        t.apply(a, r);
      }
      return (i.__emitterProxy = t), a.on(e, i, s);
    },
    onAny(e, t) {
      const s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ("function" != typeof e) return s;
      const a = t ? "unshift" : "push";
      return (
        s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      const s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off(e, t) {
      const s = this;
      return !s.eventsListeners || s.destroyed
        ? s
        : s.eventsListeners
        ? (e.split(" ").forEach((e) => {
            void 0 === t
              ? (s.eventsListeners[e] = [])
              : s.eventsListeners[e] &&
                s.eventsListeners[e].forEach((a, i) => {
                  (a === t || (a.__emitterProxy && a.__emitterProxy === t)) &&
                    s.eventsListeners[e].splice(i, 1);
                });
          }),
          s)
        : s;
    },
    emit() {
      const e = this;
      if (!e.eventsListeners || e.destroyed) return e;
      if (!e.eventsListeners) return e;
      let t, s, a;
      for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++)
        r[n] = arguments[n];
      "string" == typeof r[0] || Array.isArray(r[0])
        ? ((t = r[0]), (s = r.slice(1, r.length)), (a = e))
        : ((t = r[0].events), (s = r[0].data), (a = r[0].context || e)),
        s.unshift(a);
      return (
        (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
          e.eventsAnyListeners &&
            e.eventsAnyListeners.length &&
            e.eventsAnyListeners.forEach((e) => {
              e.apply(a, [t, ...s]);
            }),
            e.eventsListeners &&
              e.eventsListeners[t] &&
              e.eventsListeners[t].forEach((e) => {
                e.apply(a, s);
              });
        }),
        e
      );
    },
  };
  const z = (e, t) => {
      if (!e || e.destroyed || !e.params) return;
      const s = t.closest(
        e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
      );
      if (s) {
        let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
        !t &&
          e.isElement &&
          (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)),
          t && t.remove();
      }
    },
    A = (e, t) => {
      if (!e.slides[t]) return;
      const s = e.slides[t].querySelector('[loading="lazy"]');
      s && s.removeAttribute("loading");
    },
    $ = (e) => {
      if (!e || e.destroyed || !e.params) return;
      let t = e.params.lazyPreloadPrevNext;
      const s = e.slides.length;
      if (!s || !t || t < 0) return;
      t = Math.min(t, s);
      const a =
          "auto" === e.params.slidesPerView
            ? e.slidesPerViewDynamic()
            : Math.ceil(e.params.slidesPerView),
        i = e.activeIndex;
      if (e.params.grid && e.params.grid.rows > 1) {
        const s = i,
          r = [s - t];
        return (
          r.push(...Array.from({ length: t }).map((e, t) => s + a + t)),
          void e.slides.forEach((t, s) => {
            r.includes(t.column) && A(e, s);
          })
        );
      }
      const r = i + a - 1;
      if (e.params.rewind || e.params.loop)
        for (let a = i - t; a <= r + t; a += 1) {
          const t = ((a % s) + s) % s;
          (t < i || t > r) && A(e, t);
        }
      else
        for (let a = Math.max(i - t, 0); a <= Math.min(r + t, s - 1); a += 1)
          a !== i && (a > r || a < i) && A(e, a);
    };
  var I = {
    updateSize: function () {
      const e = this;
      let t, s;
      const a = e.el;
      (t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : a.clientWidth),
        (s =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : a.clientHeight),
        (0 === t && e.isHorizontal()) ||
          (0 === s && e.isVertical()) ||
          ((t =
            t -
            parseInt(v(a, "padding-left") || 0, 10) -
            parseInt(v(a, "padding-right") || 0, 10)),
          (s =
            s -
            parseInt(v(a, "padding-top") || 0, 10) -
            parseInt(v(a, "padding-bottom") || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(s) && (s = 0),
          Object.assign(e, {
            width: t,
            height: s,
            size: e.isHorizontal() ? t : s,
          }));
    },
    updateSlides: function () {
      const e = this;
      function t(t) {
        return e.isHorizontal()
          ? t
          : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom",
            }[t];
      }
      function s(e, s) {
        return parseFloat(e.getPropertyValue(t(s)) || 0);
      }
      const a = e.params,
        {
          wrapperEl: i,
          slidesEl: r,
          size: n,
          rtlTranslate: l,
          wrongRTL: o,
        } = e,
        d = e.virtual && a.virtual.enabled,
        c = d ? e.virtual.slides.length : e.slides.length,
        u = h(r, `.${e.params.slideClass}, swiper-slide`),
        m = d ? e.virtual.slides.length : u.length;
      let f = [];
      const g = [],
        w = [];
      let b = a.slidesOffsetBefore;
      "function" == typeof b && (b = a.slidesOffsetBefore.call(e));
      let y = a.slidesOffsetAfter;
      "function" == typeof y && (y = a.slidesOffsetAfter.call(e));
      const x = e.snapGrid.length,
        S = e.slidesGrid.length;
      let T = a.spaceBetween,
        M = -b,
        C = 0,
        P = 0;
      if (void 0 === n) return;
      "string" == typeof T && T.indexOf("%") >= 0
        ? (T = (parseFloat(T.replace("%", "")) / 100) * n)
        : "string" == typeof T && (T = parseFloat(T)),
        (e.virtualSize = -T),
        u.forEach((e) => {
          l ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
            (e.style.marginBottom = ""),
            (e.style.marginTop = "");
        }),
        a.centeredSlides &&
          a.cssMode &&
          (p(i, "--swiper-centered-offset-before", ""),
          p(i, "--swiper-centered-offset-after", ""));
      const L = a.grid && a.grid.rows > 1 && e.grid;
      let z;
      L && e.grid.initSlides(m);
      const A =
        "auto" === a.slidesPerView &&
        a.breakpoints &&
        Object.keys(a.breakpoints).filter(
          (e) => void 0 !== a.breakpoints[e].slidesPerView
        ).length > 0;
      for (let i = 0; i < m; i += 1) {
        let r;
        if (
          ((z = 0),
          u[i] && (r = u[i]),
          L && e.grid.updateSlide(i, r, m, t),
          !u[i] || "none" !== v(r, "display"))
        ) {
          if ("auto" === a.slidesPerView) {
            A && (u[i].style[t("width")] = "");
            const n = getComputedStyle(r),
              l = r.style.transform,
              o = r.style.webkitTransform;
            if (
              (l && (r.style.transform = "none"),
              o && (r.style.webkitTransform = "none"),
              a.roundLengths)
            )
              z = e.isHorizontal() ? E(r, "width", !0) : E(r, "height", !0);
            else {
              const e = s(n, "width"),
                t = s(n, "padding-left"),
                a = s(n, "padding-right"),
                i = s(n, "margin-left"),
                l = s(n, "margin-right"),
                o = n.getPropertyValue("box-sizing");
              if (o && "border-box" === o) z = e + i + l;
              else {
                const { clientWidth: s, offsetWidth: n } = r;
                z = e + t + a + i + l + (n - s);
              }
            }
            l && (r.style.transform = l),
              o && (r.style.webkitTransform = o),
              a.roundLengths && (z = Math.floor(z));
          } else
            (z = (n - (a.slidesPerView - 1) * T) / a.slidesPerView),
              a.roundLengths && (z = Math.floor(z)),
              u[i] && (u[i].style[t("width")] = `${z}px`);
          u[i] && (u[i].swiperSlideSize = z),
            w.push(z),
            a.centeredSlides
              ? ((M = M + z / 2 + C / 2 + T),
                0 === C && 0 !== i && (M = M - n / 2 - T),
                0 === i && (M = M - n / 2 - T),
                Math.abs(M) < 0.001 && (M = 0),
                a.roundLengths && (M = Math.floor(M)),
                P % a.slidesPerGroup == 0 && f.push(M),
                g.push(M))
              : (a.roundLengths && (M = Math.floor(M)),
                (P - Math.min(e.params.slidesPerGroupSkip, P)) %
                  e.params.slidesPerGroup ==
                  0 && f.push(M),
                g.push(M),
                (M = M + z + T)),
            (e.virtualSize += z + T),
            (C = z),
            (P += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, n) + y),
        l &&
          o &&
          ("slide" === a.effect || "coverflow" === a.effect) &&
          (i.style.width = `${e.virtualSize + T}px`),
        a.setWrapperSize && (i.style[t("width")] = `${e.virtualSize + T}px`),
        L && e.grid.updateWrapperSize(z, f, t),
        !a.centeredSlides)
      ) {
        const t = [];
        for (let s = 0; s < f.length; s += 1) {
          let i = f[s];
          a.roundLengths && (i = Math.floor(i)),
            f[s] <= e.virtualSize - n && t.push(i);
        }
        (f = t),
          Math.floor(e.virtualSize - n) - Math.floor(f[f.length - 1]) > 1 &&
            f.push(e.virtualSize - n);
      }
      if (d && a.loop) {
        const t = w[0] + T;
        if (a.slidesPerGroup > 1) {
          const s = Math.ceil(
              (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                a.slidesPerGroup
            ),
            i = t * a.slidesPerGroup;
          for (let e = 0; e < s; e += 1) f.push(f[f.length - 1] + i);
        }
        for (
          let s = 0;
          s < e.virtual.slidesBefore + e.virtual.slidesAfter;
          s += 1
        )
          1 === a.slidesPerGroup && f.push(f[f.length - 1] + t),
            g.push(g[g.length - 1] + t),
            (e.virtualSize += t);
      }
      if ((0 === f.length && (f = [0]), 0 !== T)) {
        const s = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
        u.filter(
          (e, t) => !(a.cssMode && !a.loop) || t !== u.length - 1
        ).forEach((e) => {
          e.style[s] = `${T}px`;
        });
      }
      if (a.centeredSlides && a.centeredSlidesBounds) {
        let e = 0;
        w.forEach((t) => {
          e += t + (T || 0);
        }),
          (e -= T);
        const t = e - n;
        f = f.map((e) => (e <= 0 ? -b : e > t ? t + y : e));
      }
      if (a.centerInsufficientSlides) {
        let e = 0;
        if (
          (w.forEach((t) => {
            e += t + (T || 0);
          }),
          (e -= T),
          e < n)
        ) {
          const t = (n - e) / 2;
          f.forEach((e, s) => {
            f[s] = e - t;
          }),
            g.forEach((e, s) => {
              g[s] = e + t;
            });
        }
      }
      if (
        (Object.assign(e, {
          slides: u,
          snapGrid: f,
          slidesGrid: g,
          slidesSizesGrid: w,
        }),
        a.centeredSlides && a.cssMode && !a.centeredSlidesBounds)
      ) {
        p(i, "--swiper-centered-offset-before", -f[0] + "px"),
          p(
            i,
            "--swiper-centered-offset-after",
            e.size / 2 - w[w.length - 1] / 2 + "px"
          );
        const t = -e.snapGrid[0],
          s = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + s));
      }
      if (
        (m !== c && e.emit("slidesLengthChange"),
        f.length !== x &&
          (e.params.watchOverflow && e.checkOverflow(),
          e.emit("snapGridLengthChange")),
        g.length !== S && e.emit("slidesGridLengthChange"),
        a.watchSlidesProgress && e.updateSlidesOffset(),
        !(d || a.cssMode || ("slide" !== a.effect && "fade" !== a.effect)))
      ) {
        const t = `${a.containerModifierClass}backface-hidden`,
          s = e.el.classList.contains(t);
        m <= a.maxBackfaceHiddenSlides
          ? s || e.el.classList.add(t)
          : s && e.el.classList.remove(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
        s = [],
        a = t.virtual && t.params.virtual.enabled;
      let i,
        r = 0;
      "number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const n = (e) => (a ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          (t.visibleSlides || []).forEach((e) => {
            s.push(e);
          });
        else
          for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
            const e = t.activeIndex + i;
            if (e > t.slides.length && !a) break;
            s.push(n(e));
          }
      else s.push(n(t.activeIndex));
      for (i = 0; i < s.length; i += 1)
        if (void 0 !== s[i]) {
          const e = s[i].offsetHeight;
          r = e > r ? e : r;
        }
      (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides,
        s = e.isElement
          ? e.isHorizontal()
            ? e.wrapperEl.offsetLeft
            : e.wrapperEl.offsetTop
          : 0;
      for (let a = 0; a < t.length; a += 1)
        t[a].swiperSlideOffset =
          (e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop) -
          s -
          e.cssOverflowAdjustment();
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      const t = this,
        s = t.params,
        { slides: a, rtlTranslate: i, snapGrid: r } = t;
      if (0 === a.length) return;
      void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
      let n = -e;
      i && (n = e),
        a.forEach((e) => {
          e.classList.remove(s.slideVisibleClass);
        }),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      let l = s.spaceBetween;
      "string" == typeof l && l.indexOf("%") >= 0
        ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size)
        : "string" == typeof l && (l = parseFloat(l));
      for (let e = 0; e < a.length; e += 1) {
        const o = a[e];
        let d = o.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (d -= a[0].swiperSlideOffset);
        const c =
            (n + (s.centeredSlides ? t.minTranslate() : 0) - d) /
            (o.swiperSlideSize + l),
          p =
            (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) /
            (o.swiperSlideSize + l),
          u = -(n - d),
          m = u + t.slidesSizesGrid[e];
        ((u >= 0 && u < t.size - 1) ||
          (m > 1 && m <= t.size) ||
          (u <= 0 && m >= t.size)) &&
          (t.visibleSlides.push(o),
          t.visibleSlidesIndexes.push(e),
          a[e].classList.add(s.slideVisibleClass)),
          (o.progress = i ? -c : c),
          (o.originalProgress = i ? -p : p);
      }
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * s) || 0;
      }
      const s = t.params,
        a = t.maxTranslate() - t.minTranslate();
      let { progress: i, isBeginning: r, isEnd: n, progressLoop: l } = t;
      const o = r,
        d = n;
      if (0 === a) (i = 0), (r = !0), (n = !0);
      else {
        i = (e - t.minTranslate()) / a;
        const s = Math.abs(e - t.minTranslate()) < 1,
          l = Math.abs(e - t.maxTranslate()) < 1;
        (r = s || i <= 0), (n = l || i >= 1), s && (i = 0), l && (i = 1);
      }
      if (s.loop) {
        const s = t.getSlideIndexByData(0),
          a = t.getSlideIndexByData(t.slides.length - 1),
          i = t.slidesGrid[s],
          r = t.slidesGrid[a],
          n = t.slidesGrid[t.slidesGrid.length - 1],
          o = Math.abs(e);
        (l = o >= i ? (o - i) / n : (o + n - r) / n), l > 1 && (l -= 1);
      }
      Object.assign(t, {
        progress: i,
        progressLoop: l,
        isBeginning: r,
        isEnd: n,
      }),
        (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
          t.updateSlidesProgress(e),
        r && !o && t.emit("reachBeginning toEdge"),
        n && !d && t.emit("reachEnd toEdge"),
        ((o && !r) || (d && !n)) && t.emit("fromEdge"),
        t.emit("progress", i);
    },
    updateSlidesClasses: function () {
      const e = this,
        { slides: t, params: s, slidesEl: a, activeIndex: i } = e,
        r = e.virtual && s.virtual.enabled,
        n = (e) => h(a, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
      let l;
      if (
        (t.forEach((e) => {
          e.classList.remove(
            s.slideActiveClass,
            s.slideNextClass,
            s.slidePrevClass
          );
        }),
        r)
      )
        if (s.loop) {
          let t = i - e.virtual.slidesBefore;
          t < 0 && (t = e.virtual.slides.length + t),
            t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
            (l = n(`[data-swiper-slide-index="${t}"]`));
        } else l = n(`[data-swiper-slide-index="${i}"]`);
      else l = t[i];
      if (l) {
        l.classList.add(s.slideActiveClass);
        let e = (function (e, t) {
          const s = [];
          for (; e.nextElementSibling; ) {
            const a = e.nextElementSibling;
            t ? a.matches(t) && s.push(a) : s.push(a), (e = a);
          }
          return s;
        })(l, `.${s.slideClass}, swiper-slide`)[0];
        s.loop && !e && (e = t[0]), e && e.classList.add(s.slideNextClass);
        let a = (function (e, t) {
          const s = [];
          for (; e.previousElementSibling; ) {
            const a = e.previousElementSibling;
            t ? a.matches(t) && s.push(a) : s.push(a), (e = a);
          }
          return s;
        })(l, `.${s.slideClass}, swiper-slide`)[0];
        s.loop && 0 === !a && (a = t[t.length - 1]),
          a && a.classList.add(s.slidePrevClass);
      }
      e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        {
          snapGrid: a,
          params: i,
          activeIndex: r,
          realIndex: n,
          snapIndex: l,
        } = t;
      let o,
        d = e;
      const c = (e) => {
        let s = e - t.virtual.slidesBefore;
        return (
          s < 0 && (s = t.virtual.slides.length + s),
          s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
          s
        );
      };
      if (
        (void 0 === d &&
          (d = (function (e) {
            const { slidesGrid: t, params: s } = e,
              a = e.rtlTranslate ? e.translate : -e.translate;
            let i;
            for (let e = 0; e < t.length; e += 1)
              void 0 !== t[e + 1]
                ? a >= t[e] && a < t[e + 1] - (t[e + 1] - t[e]) / 2
                  ? (i = e)
                  : a >= t[e] && a < t[e + 1] && (i = e + 1)
                : a >= t[e] && (i = e);
            return (
              s.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0), i
            );
          })(t)),
        a.indexOf(s) >= 0)
      )
        o = a.indexOf(s);
      else {
        const e = Math.min(i.slidesPerGroupSkip, d);
        o = e + Math.floor((d - e) / i.slidesPerGroup);
      }
      if ((o >= a.length && (o = a.length - 1), d === r))
        return (
          o !== l && ((t.snapIndex = o), t.emit("snapIndexChange")),
          void (
            t.params.loop &&
            t.virtual &&
            t.params.virtual.enabled &&
            (t.realIndex = c(d))
          )
        );
      let p;
      (p =
        t.virtual && i.virtual.enabled && i.loop
          ? c(d)
          : t.slides[d]
          ? parseInt(
              t.slides[d].getAttribute("data-swiper-slide-index") || d,
              10
            )
          : d),
        Object.assign(t, {
          previousSnapIndex: l,
          snapIndex: o,
          previousRealIndex: n,
          realIndex: p,
          previousIndex: r,
          activeIndex: d,
        }),
        t.initialized && $(t),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        n !== p && t.emit("realIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function (e) {
      const t = this,
        s = t.params,
        a = e.closest(`.${s.slideClass}, swiper-slide`);
      let i,
        r = !1;
      if (a)
        for (let e = 0; e < t.slides.length; e += 1)
          if (t.slides[e] === a) {
            (r = !0), (i = e);
            break;
          }
      if (!a || !r)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = a),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              a.getAttribute("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = i),
        s.slideToClickedSlide &&
          void 0 !== t.clickedIndex &&
          t.clickedIndex !== t.activeIndex &&
          t.slideToClickedSlide();
    },
  };
  var k = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      const { params: t, rtlTranslate: s, translate: a, wrapperEl: i } = this;
      if (t.virtualTranslate) return s ? -a : a;
      if (t.cssMode) return a;
      let r = o(i, e);
      return (r += this.cssOverflowAdjustment()), s && (r = -r), r || 0;
    },
    setTranslate: function (e, t) {
      const s = this,
        { rtlTranslate: a, params: i, wrapperEl: r, progress: n } = s;
      let l,
        o = 0,
        d = 0;
      s.isHorizontal() ? (o = a ? -e : e) : (d = e),
        i.roundLengths && ((o = Math.floor(o)), (d = Math.floor(d))),
        (s.previousTranslate = s.translate),
        (s.translate = s.isHorizontal() ? o : d),
        i.cssMode
          ? (r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal()
              ? -o
              : -d)
          : i.virtualTranslate ||
            (s.isHorizontal()
              ? (o -= s.cssOverflowAdjustment())
              : (d -= s.cssOverflowAdjustment()),
            (r.style.transform = `translate3d(${o}px, ${d}px, 0px)`));
      const c = s.maxTranslate() - s.minTranslate();
      (l = 0 === c ? 0 : (e - s.minTranslate()) / c),
        l !== n && s.updateProgress(e),
        s.emit("setTranslate", s.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e, t, s, a, i) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === s && (s = !0),
        void 0 === a && (a = !0);
      const r = this,
        { params: n, wrapperEl: l } = r;
      if (r.animating && n.preventInteractionOnTransition) return !1;
      const o = r.minTranslate(),
        d = r.maxTranslate();
      let c;
      if (
        ((c = a && e > o ? o : a && e < d ? d : e),
        r.updateProgress(c),
        n.cssMode)
      ) {
        const e = r.isHorizontal();
        if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
        else {
          if (!r.support.smoothScroll)
            return (
              u({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }), !0
            );
          l.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === t
          ? (r.setTransition(0),
            r.setTranslate(c),
            s &&
              (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd")))
          : (r.setTransition(t),
            r.setTranslate(c),
            s &&
              (r.emit("beforeTransitionStart", t, i),
              r.emit("transitionStart")),
            r.animating ||
              ((r.animating = !0),
              r.onTranslateToWrapperTransitionEnd ||
                (r.onTranslateToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.wrapperEl.removeEventListener(
                      "transitionend",
                      r.onTranslateToWrapperTransitionEnd
                    ),
                    (r.onTranslateToWrapperTransitionEnd = null),
                    delete r.onTranslateToWrapperTransitionEnd,
                    s && r.emit("transitionEnd"));
                }),
              r.wrapperEl.addEventListener(
                "transitionend",
                r.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  function O(e) {
    let { swiper: t, runCallbacks: s, direction: a, step: i } = e;
    const { activeIndex: r, previousIndex: n } = t;
    let l = a;
    if (
      (l || (l = r > n ? "next" : r < n ? "prev" : "reset"),
      t.emit(`transition${i}`),
      s && r !== n)
    ) {
      if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
      t.emit(`slideChangeTransition${i}`),
        "next" === l
          ? t.emit(`slideNextTransition${i}`)
          : t.emit(`slidePrevTransition${i}`);
    }
  }
  var D = {
    slideTo: function (e, t, s, a, i) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === s && (s = !0),
        "string" == typeof e && (e = parseInt(e, 10));
      const r = this;
      let n = e;
      n < 0 && (n = 0);
      const {
        params: l,
        snapGrid: o,
        slidesGrid: d,
        previousIndex: c,
        activeIndex: p,
        rtlTranslate: m,
        wrapperEl: h,
        enabled: f,
      } = r;
      if ((r.animating && l.preventInteractionOnTransition) || (!f && !a && !i))
        return !1;
      const g = Math.min(r.params.slidesPerGroupSkip, n);
      let v = g + Math.floor((n - g) / r.params.slidesPerGroup);
      v >= o.length && (v = o.length - 1);
      const w = -o[v];
      if (l.normalizeSlideIndex)
        for (let e = 0; e < d.length; e += 1) {
          const t = -Math.floor(100 * w),
            s = Math.floor(100 * d[e]),
            a = Math.floor(100 * d[e + 1]);
          void 0 !== d[e + 1]
            ? t >= s && t < a - (a - s) / 2
              ? (n = e)
              : t >= s && t < a && (n = e + 1)
            : t >= s && (n = e);
        }
      if (r.initialized && n !== p) {
        if (
          !r.allowSlideNext &&
          (m
            ? w > r.translate && w > r.minTranslate()
            : w < r.translate && w < r.minTranslate())
        )
          return !1;
        if (
          !r.allowSlidePrev &&
          w > r.translate &&
          w > r.maxTranslate() &&
          (p || 0) !== n
        )
          return !1;
      }
      let b;
      if (
        (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"),
        r.updateProgress(w),
        (b = n > p ? "next" : n < p ? "prev" : "reset"),
        (m && -w === r.translate) || (!m && w === r.translate))
      )
        return (
          r.updateActiveIndex(n),
          l.autoHeight && r.updateAutoHeight(),
          r.updateSlidesClasses(),
          "slide" !== l.effect && r.setTranslate(w),
          "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)),
          !1
        );
      if (l.cssMode) {
        const e = r.isHorizontal(),
          s = m ? w : -w;
        if (0 === t) {
          const t = r.virtual && r.params.virtual.enabled;
          t &&
            ((r.wrapperEl.style.scrollSnapType = "none"),
            (r._immediateVirtual = !0)),
            t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
              ? ((r._cssModeVirtualInitialSet = !0),
                requestAnimationFrame(() => {
                  h[e ? "scrollLeft" : "scrollTop"] = s;
                }))
              : (h[e ? "scrollLeft" : "scrollTop"] = s),
            t &&
              requestAnimationFrame(() => {
                (r.wrapperEl.style.scrollSnapType = ""),
                  (r._immediateVirtual = !1);
              });
        } else {
          if (!r.support.smoothScroll)
            return (
              u({ swiper: r, targetPosition: s, side: e ? "left" : "top" }), !0
            );
          h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
        }
        return !0;
      }
      return (
        r.setTransition(t),
        r.setTranslate(w),
        r.updateActiveIndex(n),
        r.updateSlidesClasses(),
        r.emit("beforeTransitionStart", t, a),
        r.transitionStart(s, b),
        0 === t
          ? r.transitionEnd(s, b)
          : r.animating ||
            ((r.animating = !0),
            r.onSlideToWrapperTransitionEnd ||
              (r.onSlideToWrapperTransitionEnd = function (e) {
                r &&
                  !r.destroyed &&
                  e.target === this &&
                  (r.wrapperEl.removeEventListener(
                    "transitionend",
                    r.onSlideToWrapperTransitionEnd
                  ),
                  (r.onSlideToWrapperTransitionEnd = null),
                  delete r.onSlideToWrapperTransitionEnd,
                  r.transitionEnd(s, b));
              }),
            r.wrapperEl.addEventListener(
              "transitionend",
              r.onSlideToWrapperTransitionEnd
            )),
        !0
      );
    },
    slideToLoop: function (e, t, s, a) {
      if (
        (void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === s && (s = !0),
        "string" == typeof e)
      ) {
        e = parseInt(e, 10);
      }
      const i = this;
      let r = e;
      return (
        i.params.loop &&
          (i.virtual && i.params.virtual.enabled
            ? (r += i.virtual.slidesBefore)
            : (r = i.getSlideIndexByData(r))),
        i.slideTo(r, t, s, a)
      );
    },
    slideNext: function (e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const a = this,
        { enabled: i, params: r, animating: n } = a;
      if (!i) return a;
      let l = r.slidesPerGroup;
      "auto" === r.slidesPerView &&
        1 === r.slidesPerGroup &&
        r.slidesPerGroupAuto &&
        (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
      const o = a.activeIndex < r.slidesPerGroupSkip ? 1 : l,
        d = a.virtual && r.virtual.enabled;
      if (r.loop) {
        if (n && !d && r.loopPreventsSliding) return !1;
        a.loopFix({ direction: "next" }),
          (a._clientLeft = a.wrapperEl.clientLeft);
      }
      return r.rewind && a.isEnd
        ? a.slideTo(0, e, t, s)
        : a.slideTo(a.activeIndex + o, e, t, s);
    },
    slidePrev: function (e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const a = this,
        {
          params: i,
          snapGrid: r,
          slidesGrid: n,
          rtlTranslate: l,
          enabled: o,
          animating: d,
        } = a;
      if (!o) return a;
      const c = a.virtual && i.virtual.enabled;
      if (i.loop) {
        if (d && !c && i.loopPreventsSliding) return !1;
        a.loopFix({ direction: "prev" }),
          (a._clientLeft = a.wrapperEl.clientLeft);
      }
      function p(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const u = p(l ? a.translate : -a.translate),
        m = r.map((e) => p(e));
      let h = r[m.indexOf(u) - 1];
      if (void 0 === h && i.cssMode) {
        let e;
        r.forEach((t, s) => {
          u >= t && (e = s);
        }),
          void 0 !== e && (h = r[e > 0 ? e - 1 : e]);
      }
      let f = 0;
      if (
        (void 0 !== h &&
          ((f = n.indexOf(h)),
          f < 0 && (f = a.activeIndex - 1),
          "auto" === i.slidesPerView &&
            1 === i.slidesPerGroup &&
            i.slidesPerGroupAuto &&
            ((f = f - a.slidesPerViewDynamic("previous", !0) + 1),
            (f = Math.max(f, 0)))),
        i.rewind && a.isBeginning)
      ) {
        const i =
          a.params.virtual && a.params.virtual.enabled && a.virtual
            ? a.virtual.slides.length - 1
            : a.slides.length - 1;
        return a.slideTo(i, e, t, s);
      }
      return a.slideTo(f, e, t, s);
    },
    slideReset: function (e, t, s) {
      return (
        void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        this.slideTo(this.activeIndex, e, t, s)
      );
    },
    slideToClosest: function (e, t, s, a) {
      void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        void 0 === a && (a = 0.5);
      const i = this;
      let r = i.activeIndex;
      const n = Math.min(i.params.slidesPerGroupSkip, r),
        l = n + Math.floor((r - n) / i.params.slidesPerGroup),
        o = i.rtlTranslate ? i.translate : -i.translate;
      if (o >= i.snapGrid[l]) {
        const e = i.snapGrid[l];
        o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup);
      } else {
        const e = i.snapGrid[l - 1];
        o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup);
      }
      return (
        (r = Math.max(r, 0)),
        (r = Math.min(r, i.slidesGrid.length - 1)),
        i.slideTo(r, e, t, s)
      );
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, slidesEl: s } = e,
        a =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let i,
        r = e.clickedIndex;
      const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
      if (t.loop) {
        if (e.animating) return;
        (i = parseInt(
          e.clickedSlide.getAttribute("data-swiper-slide-index"),
          10
        )),
          t.centeredSlides
            ? r < e.loopedSlides - a / 2 ||
              r > e.slides.length - e.loopedSlides + a / 2
              ? (e.loopFix(),
                (r = e.getSlideIndex(
                  h(s, `${l}[data-swiper-slide-index="${i}"]`)[0]
                )),
                n(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r)
            : r > e.slides.length - a
            ? (e.loopFix(),
              (r = e.getSlideIndex(
                h(s, `${l}[data-swiper-slide-index="${i}"]`)[0]
              )),
              n(() => {
                e.slideTo(r);
              }))
            : e.slideTo(r);
      } else e.slideTo(r);
    },
  };
  var G = {
    loopCreate: function (e) {
      const t = this,
        { params: s, slidesEl: a } = t;
      if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
      h(a, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
        e.setAttribute("data-swiper-slide-index", t);
      }),
        t.loopFix({
          slideRealIndex: e,
          direction: s.centeredSlides ? void 0 : "next",
        });
    },
    loopFix: function (e) {
      let {
        slideRealIndex: t,
        slideTo: s = !0,
        direction: a,
        setTranslate: i,
        activeSlideIndex: r,
        byController: n,
        byMousewheel: l,
      } = void 0 === e ? {} : e;
      const o = this;
      if (!o.params.loop) return;
      o.emit("beforeLoopFix");
      const {
        slides: d,
        allowSlidePrev: c,
        allowSlideNext: p,
        slidesEl: u,
        params: m,
      } = o;
      if (
        ((o.allowSlidePrev = !0),
        (o.allowSlideNext = !0),
        o.virtual && m.virtual.enabled)
      )
        return (
          s &&
            (m.centeredSlides || 0 !== o.snapIndex
              ? m.centeredSlides && o.snapIndex < m.slidesPerView
                ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
                : o.snapIndex === o.snapGrid.length - 1 &&
                  o.slideTo(o.virtual.slidesBefore, 0, !1, !0)
              : o.slideTo(o.virtual.slides.length, 0, !1, !0)),
          (o.allowSlidePrev = c),
          (o.allowSlideNext = p),
          void o.emit("loopFix")
        );
      const h =
        "auto" === m.slidesPerView
          ? o.slidesPerViewDynamic()
          : Math.ceil(parseFloat(m.slidesPerView, 10));
      let f = m.loopedSlides || h;
      f % m.slidesPerGroup != 0 &&
        (f += m.slidesPerGroup - (f % m.slidesPerGroup)),
        (o.loopedSlides = f);
      const g = [],
        v = [];
      let w = o.activeIndex;
      void 0 === r
        ? (r = o.getSlideIndex(
            o.slides.filter((e) => e.classList.contains(m.slideActiveClass))[0]
          ))
        : (w = r);
      const b = "next" === a || !a,
        y = "prev" === a || !a;
      let E = 0,
        x = 0;
      if (r < f) {
        E = Math.max(f - r, m.slidesPerGroup);
        for (let e = 0; e < f - r; e += 1) {
          const t = e - Math.floor(e / d.length) * d.length;
          g.push(d.length - t - 1);
        }
      } else if (r > o.slides.length - 2 * f) {
        x = Math.max(r - (o.slides.length - 2 * f), m.slidesPerGroup);
        for (let e = 0; e < x; e += 1) {
          const t = e - Math.floor(e / d.length) * d.length;
          v.push(t);
        }
      }
      if (
        (y &&
          g.forEach((e) => {
            (o.slides[e].swiperLoopMoveDOM = !0),
              u.prepend(o.slides[e]),
              (o.slides[e].swiperLoopMoveDOM = !1);
          }),
        b &&
          v.forEach((e) => {
            (o.slides[e].swiperLoopMoveDOM = !0),
              u.append(o.slides[e]),
              (o.slides[e].swiperLoopMoveDOM = !1);
          }),
        o.recalcSlides(),
        "auto" === m.slidesPerView && o.updateSlides(),
        m.watchSlidesProgress && o.updateSlidesOffset(),
        s)
      )
        if (g.length > 0 && y)
          if (void 0 === t) {
            const e = o.slidesGrid[w],
              t = o.slidesGrid[w + E] - e;
            l
              ? o.setTranslate(o.translate - t)
              : (o.slideTo(w + E, 0, !1, !0),
                i &&
                  ((o.touches[o.isHorizontal() ? "startX" : "startY"] += t),
                  (o.touchEventsData.currentTranslate = o.translate)));
          } else
            i &&
              (o.slideToLoop(t, 0, !1, !0),
              (o.touchEventsData.currentTranslate = o.translate));
        else if (v.length > 0 && b)
          if (void 0 === t) {
            const e = o.slidesGrid[w],
              t = o.slidesGrid[w - x] - e;
            l
              ? o.setTranslate(o.translate - t)
              : (o.slideTo(w - x, 0, !1, !0),
                i &&
                  ((o.touches[o.isHorizontal() ? "startX" : "startY"] += t),
                  (o.touchEventsData.currentTranslate = o.translate)));
          } else o.slideToLoop(t, 0, !1, !0);
      if (
        ((o.allowSlidePrev = c),
        (o.allowSlideNext = p),
        o.controller && o.controller.control && !n)
      ) {
        const e = {
          slideRealIndex: t,
          direction: a,
          setTranslate: i,
          activeSlideIndex: r,
          byController: !0,
        };
        Array.isArray(o.controller.control)
          ? o.controller.control.forEach((t) => {
              !t.destroyed &&
                t.params.loop &&
                t.loopFix({
                  ...e,
                  slideTo: t.params.slidesPerView === m.slidesPerView && s,
                });
            })
          : o.controller.control instanceof o.constructor &&
            o.controller.control.params.loop &&
            o.controller.control.loopFix({
              ...e,
              slideTo:
                o.controller.control.params.slidesPerView === m.slidesPerView &&
                s,
            });
      }
      o.emit("loopFix");
    },
    loopDestroy: function () {
      const e = this,
        { params: t, slidesEl: s } = e;
      if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
      e.recalcSlides();
      const a = [];
      e.slides.forEach((e) => {
        const t =
          void 0 === e.swiperSlideIndex
            ? 1 * e.getAttribute("data-swiper-slide-index")
            : e.swiperSlideIndex;
        a[t] = e;
      }),
        e.slides.forEach((e) => {
          e.removeAttribute("data-swiper-slide-index");
        }),
        a.forEach((e) => {
          s.append(e);
        }),
        e.recalcSlides(),
        e.slideTo(e.realIndex, 0);
    },
  };
  function H(e) {
    const t = this,
      s = a(),
      i = r(),
      n = t.touchEventsData;
    n.evCache.push(e);
    const { params: o, touches: d, enabled: c } = t;
    if (!c) return;
    if (!o.simulateTouch && "mouse" === e.pointerType) return;
    if (t.animating && o.preventInteractionOnTransition) return;
    !t.animating && o.cssMode && o.loop && t.loopFix();
    let p = e;
    p.originalEvent && (p = p.originalEvent);
    let u = p.target;
    if ("wrapper" === o.touchEventsTarget && !t.wrapperEl.contains(u)) return;
    if ("which" in p && 3 === p.which) return;
    if ("button" in p && p.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    const m = !!o.noSwipingClass && "" !== o.noSwipingClass,
      h = e.composedPath ? e.composedPath() : e.path;
    m && p.target && p.target.shadowRoot && h && (u = h[0]);
    const f = o.noSwipingSelector
        ? o.noSwipingSelector
        : `.${o.noSwipingClass}`,
      g = !(!p.target || !p.target.shadowRoot);
    if (
      o.noSwiping &&
      (g
        ? (function (e, t) {
            return (
              void 0 === t && (t = this),
              (function t(s) {
                if (!s || s === a() || s === r()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const i = s.closest(e);
                return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
              })(t)
            );
          })(f, u)
        : u.closest(f))
    )
      return void (t.allowClick = !0);
    if (o.swipeHandler && !u.closest(o.swipeHandler)) return;
    (d.currentX = p.pageX), (d.currentY = p.pageY);
    const v = d.currentX,
      w = d.currentY,
      b = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
      y = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
    if (b && (v <= y || v >= i.innerWidth - y)) {
      if ("prevent" !== b) return;
      e.preventDefault();
    }
    Object.assign(n, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (d.startX = v),
      (d.startY = w),
      (n.touchStartTime = l()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      o.threshold > 0 && (n.allowThresholdMove = !1);
    let E = !0;
    u.matches(n.focusableElements) &&
      ((E = !1), "SELECT" === u.nodeName && (n.isTouched = !1)),
      s.activeElement &&
        s.activeElement.matches(n.focusableElements) &&
        s.activeElement !== u &&
        s.activeElement.blur();
    const x = E && t.allowTouchMove && o.touchStartPreventDefault;
    (!o.touchStartForcePreventDefault && !x) ||
      u.isContentEditable ||
      p.preventDefault(),
      o.freeMode &&
        o.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !o.cssMode &&
        t.freeMode.onTouchStart(),
      t.emit("touchStart", p);
  }
  function X(e) {
    const t = a(),
      s = this,
      i = s.touchEventsData,
      { params: r, touches: n, rtlTranslate: o, enabled: d } = s;
    if (!d) return;
    if (!r.simulateTouch && "mouse" === e.pointerType) return;
    let c = e;
    if ((c.originalEvent && (c = c.originalEvent), !i.isTouched))
      return void (
        i.startMoving &&
        i.isScrolling &&
        s.emit("touchMoveOpposite", c)
      );
    const p = i.evCache.findIndex((e) => e.pointerId === c.pointerId);
    p >= 0 && (i.evCache[p] = c);
    const u = i.evCache.length > 1 ? i.evCache[0] : c,
      m = u.pageX,
      h = u.pageY;
    if (c.preventedByNestedSwiper) return (n.startX = m), void (n.startY = h);
    if (!s.allowTouchMove)
      return (
        c.target.matches(i.focusableElements) || (s.allowClick = !1),
        void (
          i.isTouched &&
          (Object.assign(n, {
            startX: m,
            startY: h,
            prevX: s.touches.currentX,
            prevY: s.touches.currentY,
            currentX: m,
            currentY: h,
          }),
          (i.touchStartTime = l()))
        )
      );
    if (r.touchReleaseOnEdges && !r.loop)
      if (s.isVertical()) {
        if (
          (h < n.startY && s.translate <= s.maxTranslate()) ||
          (h > n.startY && s.translate >= s.minTranslate())
        )
          return (i.isTouched = !1), void (i.isMoved = !1);
      } else if (
        (m < n.startX && s.translate <= s.maxTranslate()) ||
        (m > n.startX && s.translate >= s.minTranslate())
      )
        return;
    if (
      t.activeElement &&
      c.target === t.activeElement &&
      c.target.matches(i.focusableElements)
    )
      return (i.isMoved = !0), void (s.allowClick = !1);
    if (
      (i.allowTouchCallbacks && s.emit("touchMove", c),
      c.targetTouches && c.targetTouches.length > 1)
    )
      return;
    (n.currentX = m), (n.currentY = h);
    const f = n.currentX - n.startX,
      g = n.currentY - n.startY;
    if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold)
      return;
    if (void 0 === i.isScrolling) {
      let e;
      (s.isHorizontal() && n.currentY === n.startY) ||
      (s.isVertical() && n.currentX === n.startX)
        ? (i.isScrolling = !1)
        : f * f + g * g >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(g), Math.abs(f))) / Math.PI),
          (i.isScrolling = s.isHorizontal()
            ? e > r.touchAngle
            : 90 - e > r.touchAngle));
    }
    if (
      (i.isScrolling && s.emit("touchMoveOpposite", c),
      void 0 === i.startMoving &&
        ((n.currentX === n.startX && n.currentY === n.startY) ||
          (i.startMoving = !0)),
      i.isScrolling ||
        (s.zoom &&
          s.params.zoom &&
          s.params.zoom.enabled &&
          i.evCache.length > 1))
    )
      return void (i.isTouched = !1);
    if (!i.startMoving) return;
    (s.allowClick = !1),
      !r.cssMode && c.cancelable && c.preventDefault(),
      r.touchMoveStopPropagation && !r.nested && c.stopPropagation();
    let v = s.isHorizontal() ? f : g,
      w = s.isHorizontal()
        ? n.currentX - n.previousX
        : n.currentY - n.previousY;
    r.oneWayMovement &&
      ((v = Math.abs(v) * (o ? 1 : -1)), (w = Math.abs(w) * (o ? 1 : -1))),
      (n.diff = v),
      (v *= r.touchRatio),
      o && ((v = -v), (w = -w));
    const b = s.touchesDirection;
    (s.swipeDirection = v > 0 ? "prev" : "next"),
      (s.touchesDirection = w > 0 ? "prev" : "next");
    const y = s.params.loop && !r.cssMode;
    if (!i.isMoved) {
      if (
        (y && s.loopFix({ direction: s.swipeDirection }),
        (i.startTranslate = s.getTranslate()),
        s.setTransition(0),
        s.animating)
      ) {
        const e = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
        });
        s.wrapperEl.dispatchEvent(e);
      }
      (i.allowMomentumBounce = !1),
        !r.grabCursor ||
          (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
          s.setGrabCursor(!0),
        s.emit("sliderFirstMove", c);
    }
    let E;
    i.isMoved &&
      b !== s.touchesDirection &&
      y &&
      Math.abs(v) >= 1 &&
      (s.loopFix({ direction: s.swipeDirection, setTranslate: !0 }), (E = !0)),
      s.emit("sliderMove", c),
      (i.isMoved = !0),
      (i.currentTranslate = v + i.startTranslate);
    let x = !0,
      S = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (S = 0),
      v > 0
        ? (y &&
            !E &&
            i.currentTranslate >
              (r.centeredSlides
                ? s.minTranslate() - s.size / 2
                : s.minTranslate()) &&
            s.loopFix({
              direction: "prev",
              setTranslate: !0,
              activeSlideIndex: 0,
            }),
          i.currentTranslate > s.minTranslate() &&
            ((x = !1),
            r.resistance &&
              (i.currentTranslate =
                s.minTranslate() -
                1 +
                (-s.minTranslate() + i.startTranslate + v) ** S)))
        : v < 0 &&
          (y &&
            !E &&
            i.currentTranslate <
              (r.centeredSlides
                ? s.maxTranslate() + s.size / 2
                : s.maxTranslate()) &&
            s.loopFix({
              direction: "next",
              setTranslate: !0,
              activeSlideIndex:
                s.slides.length -
                ("auto" === r.slidesPerView
                  ? s.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(r.slidesPerView, 10))),
            }),
          i.currentTranslate < s.maxTranslate() &&
            ((x = !1),
            r.resistance &&
              (i.currentTranslate =
                s.maxTranslate() +
                1 -
                (s.maxTranslate() - i.startTranslate - v) ** S))),
      x && (c.preventedByNestedSwiper = !0),
      !s.allowSlideNext &&
        "next" === s.swipeDirection &&
        i.currentTranslate < i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !s.allowSlidePrev &&
        "prev" === s.swipeDirection &&
        i.currentTranslate > i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      s.allowSlidePrev ||
        s.allowSlideNext ||
        (i.currentTranslate = i.startTranslate),
      r.threshold > 0)
    ) {
      if (!(Math.abs(v) > r.threshold || i.allowThresholdMove))
        return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove)
        return (
          (i.allowThresholdMove = !0),
          (n.startX = n.currentX),
          (n.startY = n.currentY),
          (i.currentTranslate = i.startTranslate),
          void (n.diff = s.isHorizontal()
            ? n.currentX - n.startX
            : n.currentY - n.startY)
        );
    }
    r.followFinger &&
      !r.cssMode &&
      (((r.freeMode && r.freeMode.enabled && s.freeMode) ||
        r.watchSlidesProgress) &&
        (s.updateActiveIndex(), s.updateSlidesClasses()),
      r.freeMode &&
        r.freeMode.enabled &&
        s.freeMode &&
        s.freeMode.onTouchMove(),
      s.updateProgress(i.currentTranslate),
      s.setTranslate(i.currentTranslate));
  }
  function Y(e) {
    const t = this,
      s = t.touchEventsData,
      a = s.evCache.findIndex((t) => t.pointerId === e.pointerId);
    if (
      (a >= 0 && s.evCache.splice(a, 1),
      ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
        e.type
      ))
    ) {
      if (
        !(
          ["pointercancel", "contextmenu"].includes(e.type) &&
          (t.browser.isSafari || t.browser.isWebView)
        )
      )
        return;
    }
    const {
      params: i,
      touches: r,
      rtlTranslate: o,
      slidesGrid: d,
      enabled: c,
    } = t;
    if (!c) return;
    if (!i.simulateTouch && "mouse" === e.pointerType) return;
    let p = e;
    if (
      (p.originalEvent && (p = p.originalEvent),
      s.allowTouchCallbacks && t.emit("touchEnd", p),
      (s.allowTouchCallbacks = !1),
      !s.isTouched)
    )
      return (
        s.isMoved && i.grabCursor && t.setGrabCursor(!1),
        (s.isMoved = !1),
        void (s.startMoving = !1)
      );
    i.grabCursor &&
      s.isMoved &&
      s.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const u = l(),
      m = u - s.touchStartTime;
    if (t.allowClick) {
      const e = p.path || (p.composedPath && p.composedPath());
      t.updateClickedSlide((e && e[0]) || p.target),
        t.emit("tap click", p),
        m < 300 &&
          u - s.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", p);
    }
    if (
      ((s.lastClickTime = l()),
      n(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !s.isTouched ||
        !s.isMoved ||
        !t.swipeDirection ||
        0 === r.diff ||
        s.currentTranslate === s.startTranslate)
    )
      return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
    let h;
    if (
      ((s.isTouched = !1),
      (s.isMoved = !1),
      (s.startMoving = !1),
      (h = i.followFinger
        ? o
          ? t.translate
          : -t.translate
        : -s.currentTranslate),
      i.cssMode)
    )
      return;
    if (i.freeMode && i.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: h });
    let f = 0,
      g = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < d.length;
      e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
    ) {
      const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      void 0 !== d[e + t]
        ? h >= d[e] && h < d[e + t] && ((f = e), (g = d[e + t] - d[e]))
        : h >= d[e] && ((f = e), (g = d[d.length - 1] - d[d.length - 2]));
    }
    let v = null,
      w = null;
    i.rewind &&
      (t.isBeginning
        ? (w =
            i.virtual && i.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (v = 0));
    const b = (h - d[f]) / g,
      y = f < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    if (m > i.longSwipesMs) {
      if (!i.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (b >= i.longSwipesRatio
          ? t.slideTo(i.rewind && t.isEnd ? v : f + y)
          : t.slideTo(f)),
        "prev" === t.swipeDirection &&
          (b > 1 - i.longSwipesRatio
            ? t.slideTo(f + y)
            : null !== w && b < 0 && Math.abs(b) > i.longSwipesRatio
            ? t.slideTo(w)
            : t.slideTo(f));
    } else {
      if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
      (p.target === t.navigation.nextEl || p.target === t.navigation.prevEl)
        ? p.target === t.navigation.nextEl
          ? t.slideTo(f + y)
          : t.slideTo(f)
        : ("next" === t.swipeDirection && t.slideTo(null !== v ? v : f + y),
          "prev" === t.swipeDirection && t.slideTo(null !== w ? w : f));
    }
  }
  function N() {
    const e = this,
      { params: t, el: s } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: a, allowSlidePrev: i, snapGrid: r } = e,
      n = e.virtual && e.params.virtual.enabled;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses();
    const l = n && t.loop;
    !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
    !e.isEnd ||
    e.isBeginning ||
    e.params.centeredSlides ||
    l
      ? e.params.loop && !n
        ? e.slideToLoop(e.realIndex, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0)
      : e.slideTo(e.slides.length - 1, 0, !1, !0),
      e.autoplay &&
        e.autoplay.running &&
        e.autoplay.paused &&
        (clearTimeout(e.autoplay.resizeTimeout),
        (e.autoplay.resizeTimeout = setTimeout(() => {
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.resume();
        }, 500))),
      (e.allowSlidePrev = i),
      (e.allowSlideNext = a),
      e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }
  function B(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function R() {
    const e = this,
      { wrapperEl: t, rtlTranslate: s, enabled: a } = e;
    if (!a) return;
    let i;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const r = e.maxTranslate() - e.minTranslate();
    (i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
      i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  function q(e) {
    const t = this;
    z(t, e.target),
      t.params.cssMode ||
        ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
        t.update();
  }
  let V = !1;
  function F() {}
  const _ = (e, t) => {
    const s = a(),
      { params: i, el: r, wrapperEl: n, device: l } = e,
      o = !!i.nested,
      d = "on" === t ? "addEventListener" : "removeEventListener",
      c = t;
    r[d]("pointerdown", e.onTouchStart, { passive: !1 }),
      s[d]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
      s[d]("pointerup", e.onTouchEnd, { passive: !0 }),
      s[d]("pointercancel", e.onTouchEnd, { passive: !0 }),
      s[d]("pointerout", e.onTouchEnd, { passive: !0 }),
      s[d]("pointerleave", e.onTouchEnd, { passive: !0 }),
      s[d]("contextmenu", e.onTouchEnd, { passive: !0 }),
      (i.preventClicks || i.preventClicksPropagation) &&
        r[d]("click", e.onClick, !0),
      i.cssMode && n[d]("scroll", e.onScroll),
      i.updateOnWindowResize
        ? e[c](
            l.ios || l.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            N,
            !0
          )
        : e[c]("observerUpdate", N, !0),
      r[d]("load", e.onLoad, { capture: !0 });
  };
  const j = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  var W = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function U(e, t) {
    return function (s) {
      void 0 === s && (s = {});
      const a = Object.keys(s)[0],
        i = s[a];
      "object" == typeof i && null !== i
        ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 &&
            !0 === e[a] &&
            (e[a] = { auto: !0 }),
          a in e && "enabled" in i
            ? (!0 === e[a] && (e[a] = { enabled: !0 }),
              "object" != typeof e[a] ||
                "enabled" in e[a] ||
                (e[a].enabled = !0),
              e[a] || (e[a] = { enabled: !1 }),
              c(t, s))
            : c(t, s))
        : c(t, s);
    };
  }
  const K = {
      eventsEmitter: L,
      update: I,
      translate: k,
      transition: {
        setTransition: function (e, t) {
          const s = this;
          s.params.cssMode ||
            ((s.wrapperEl.style.transitionDuration = `${e}ms`),
            (s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
            s.emit("setTransition", e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          const s = this,
            { params: a } = s;
          a.cssMode ||
            (a.autoHeight && s.updateAutoHeight(),
            O({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          const s = this,
            { params: a } = s;
          (s.animating = !1),
            a.cssMode ||
              (s.setTransition(0),
              O({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: D,
      loop: G,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const s =
            "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          t.isElement && (t.__preventObserver__ = !0),
            (s.style.cursor = "move"),
            (s.style.cursor = e ? "grabbing" : "grab"),
            t.isElement &&
              requestAnimationFrame(() => {
                t.__preventObserver__ = !1;
              });
        },
        unsetGrabCursor: function () {
          const e = this;
          (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e.isElement && (e.__preventObserver__ = !0),
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = ""),
            e.isElement &&
              requestAnimationFrame(() => {
                e.__preventObserver__ = !1;
              }));
        },
      },
      events: {
        attachEvents: function () {
          const e = this,
            t = a(),
            { params: s } = e;
          (e.onTouchStart = H.bind(e)),
            (e.onTouchMove = X.bind(e)),
            (e.onTouchEnd = Y.bind(e)),
            s.cssMode && (e.onScroll = R.bind(e)),
            (e.onClick = B.bind(e)),
            (e.onLoad = q.bind(e)),
            V || (t.addEventListener("touchstart", F), (V = !0)),
            _(e, "on");
        },
        detachEvents: function () {
          _(this, "off");
        },
      },
      breakpoints: {
        setBreakpoint: function () {
          const e = this,
            { realIndex: t, initialized: s, params: a, el: i } = e,
            r = a.breakpoints;
          if (!r || (r && 0 === Object.keys(r).length)) return;
          const n = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
          if (!n || e.currentBreakpoint === n) return;
          const l = (n in r ? r[n] : void 0) || e.originalParams,
            o = j(e, a),
            d = j(e, l),
            p = a.enabled;
          o && !d
            ? (i.classList.remove(
                `${a.containerModifierClass}grid`,
                `${a.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !o &&
              d &&
              (i.classList.add(`${a.containerModifierClass}grid`),
              ((l.grid.fill && "column" === l.grid.fill) ||
                (!l.grid.fill && "column" === a.grid.fill)) &&
                i.classList.add(`${a.containerModifierClass}grid-column`),
              e.emitContainerClasses()),
            ["navigation", "pagination", "scrollbar"].forEach((t) => {
              if (void 0 === l[t]) return;
              const s = a[t] && a[t].enabled,
                i = l[t] && l[t].enabled;
              s && !i && e[t].disable(), !s && i && e[t].enable();
            });
          const u = l.direction && l.direction !== a.direction,
            m = a.loop && (l.slidesPerView !== a.slidesPerView || u);
          u && s && e.changeDirection(), c(e.params, l);
          const h = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            p && !h ? e.disable() : !p && h && e.enable(),
            (e.currentBreakpoint = n),
            e.emit("_beforeBreakpoint", l),
            m && s && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
            e.emit("breakpoint", l);
        },
        getBreakpoint: function (e, t, s) {
          if ((void 0 === t && (t = "window"), !e || ("container" === t && !s)))
            return;
          let a = !1;
          const i = r(),
            n = "window" === t ? i.innerHeight : s.clientHeight,
            l = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: n * t, point: e };
              }
              return { value: e, point: e };
            });
          l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < l.length; e += 1) {
            const { point: r, value: n } = l[e];
            "window" === t
              ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r)
              : n <= s.clientWidth && (a = r);
          }
          return a || "max";
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: s } = e,
            { slidesOffsetBefore: a } = s;
          if (a) {
            const t = e.slides.length - 1,
              s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
            e.isLocked = e.size > s;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      classes: {
        addClasses: function () {
          const e = this,
            { classNames: t, params: s, rtl: a, el: i, device: r } = e,
            n = (function (e, t) {
              const s = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((a) => {
                        e[a] && s.push(t + a);
                      })
                    : "string" == typeof e && s.push(t + e);
                }),
                s
              );
            })(
              [
                "initialized",
                s.direction,
                { "free-mode": e.params.freeMode && s.freeMode.enabled },
                { autoheight: s.autoHeight },
                { rtl: a },
                { grid: s.grid && s.grid.rows > 1 },
                {
                  "grid-column":
                    s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
                },
                { android: r.android },
                { ios: r.ios },
                { "css-mode": s.cssMode },
                { centered: s.cssMode && s.centeredSlides },
                { "watch-progress": s.watchSlidesProgress },
              ],
              s.containerModifierClass
            );
          t.push(...n), i.classList.add(...t), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { el: e, classNames: t } = this;
          e.classList.remove(...t), this.emitContainerClasses();
        },
      },
    },
    Z = {};
  class Q {
    constructor() {
      let e, t;
      for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++)
        i[r] = arguments[r];
      1 === i.length &&
      i[0].constructor &&
      "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
        ? (t = i[0])
        : ([e, t] = i),
        t || (t = {}),
        (t = c({}, t)),
        e && !t.el && (t.el = e);
      const n = a();
      if (
        t.el &&
        "string" == typeof t.el &&
        n.querySelectorAll(t.el).length > 1
      ) {
        const e = [];
        return (
          n.querySelectorAll(t.el).forEach((s) => {
            const a = c({}, t, { el: s });
            e.push(new Q(a));
          }),
          e
        );
      }
      const l = this;
      (l.__swiper__ = !0),
        (l.support = M()),
        (l.device = C({ userAgent: t.userAgent })),
        (l.browser = P()),
        (l.eventsListeners = {}),
        (l.eventsAnyListeners = []),
        (l.modules = [...l.__modules__]),
        t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
      const o = {};
      l.modules.forEach((e) => {
        e({
          params: t,
          swiper: l,
          extendParams: U(t, o),
          on: l.on.bind(l),
          once: l.once.bind(l),
          off: l.off.bind(l),
          emit: l.emit.bind(l),
        });
      });
      const d = c({}, W, o);
      return (
        (l.params = c({}, d, Z, t)),
        (l.originalParams = c({}, l.params)),
        (l.passedParams = c({}, t)),
        l.params &&
          l.params.on &&
          Object.keys(l.params.on).forEach((e) => {
            l.on(e, l.params.on[e]);
          }),
        l.params && l.params.onAny && l.onAny(l.params.onAny),
        Object.assign(l, {
          enabled: l.params.enabled,
          el: e,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === l.params.direction,
          isVertical: () => "vertical" === l.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          cssOverflowAdjustment() {
            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
          },
          allowSlideNext: l.params.allowSlideNext,
          allowSlidePrev: l.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: l.params.focusableElements,
            lastClickTime: 0,
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            evCache: [],
          },
          allowClick: !0,
          allowTouchMove: l.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        l.emit("_swiper"),
        l.params.init && l.init(),
        l
      );
    }
    getSlideIndex(e) {
      const { slidesEl: t, params: s } = this,
        a = w(h(t, `.${s.slideClass}, swiper-slide`)[0]);
      return w(e) - a;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(
        this.slides.filter(
          (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
        )[0]
      );
    }
    recalcSlides() {
      const { slidesEl: e, params: t } = this;
      this.slides = h(e, `.${t.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const a = s.minTranslate(),
        i = (s.maxTranslate() - a) * e + a;
      s.translateTo(i, void 0 === t ? 0 : t),
        s.updateActiveIndex(),
        s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ""
        : e.className
            .split(" ")
            .filter(
              (e) =>
                0 === e.indexOf("swiper-slide") ||
                0 === e.indexOf(t.params.slideClass)
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.forEach((s) => {
        const a = e.getSlideClasses(s);
        t.push({ slideEl: s, classNames: a }), e.emit("_slideClass", s, a);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      void 0 === e && (e = "current"), void 0 === t && (t = !1);
      const {
        params: s,
        slides: a,
        slidesGrid: i,
        slidesSizesGrid: r,
        size: n,
        activeIndex: l,
      } = this;
      let o = 1;
      if (s.centeredSlides) {
        let e,
          t = a[l] ? a[l].swiperSlideSize : 0;
        for (let s = l + 1; s < a.length; s += 1)
          a[s] &&
            !e &&
            ((t += a[s].swiperSlideSize), (o += 1), t > n && (e = !0));
        for (let s = l - 1; s >= 0; s -= 1)
          a[s] &&
            !e &&
            ((t += a[s].swiperSlideSize), (o += 1), t > n && (e = !0));
      } else if ("current" === e)
        for (let e = l + 1; e < a.length; e += 1) {
          (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1);
        }
      else
        for (let e = l - 1; e >= 0; e -= 1) {
          i[l] - i[e] < n && (o += 1);
        }
      return o;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: s } = e;
      function a() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let i;
      if (
        (s.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
          t.complete && z(e, t);
        }),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        s.freeMode && s.freeMode.enabled && !s.cssMode)
      )
        a(), s.autoHeight && e.updateAutoHeight();
      else {
        if (
          ("auto" === s.slidesPerView || s.slidesPerView > 1) &&
          e.isEnd &&
          !s.centeredSlides
        ) {
          const t =
            e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
          i = e.slideTo(t.length - 1, 0, !1, !0);
        } else i = e.slideTo(e.activeIndex, 0, !1, !0);
        i || a();
      }
      s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t) {
      void 0 === t && (t = !0);
      const s = this,
        a = s.params.direction;
      return (
        e || (e = "horizontal" === a ? "vertical" : "horizontal"),
        e === a ||
          ("horizontal" !== e && "vertical" !== e) ||
          (s.el.classList.remove(`${s.params.containerModifierClass}${a}`),
          s.el.classList.add(`${s.params.containerModifierClass}${e}`),
          s.emitContainerClasses(),
          (s.params.direction = e),
          s.slides.forEach((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          s.emit("changeDirection"),
          t && s.update()),
        s
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && "rtl" === e) ||
        (!t.rtl && "ltr" === e) ||
        ((t.rtl = "rtl" === e),
        (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
        t.rtl
          ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "rtl"))
          : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "ltr")),
        t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      let s = e || t.params.el;
      if (("string" == typeof s && (s = document.querySelector(s)), !s))
        return !1;
      (s.swiper = t),
        s.parentNode &&
          s.parentNode.host &&
          "SWIPER-CONTAINER" === s.parentNode.host.nodeName &&
          (t.isElement = !0);
      const a = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let i = (() => {
        if (s && s.shadowRoot && s.shadowRoot.querySelector) {
          return s.shadowRoot.querySelector(a());
        }
        return h(s, a())[0];
      })();
      return (
        !i &&
          t.params.createElements &&
          ((i = f("div", t.params.wrapperClass)),
          s.append(i),
          h(s, `.${t.params.slideClass}`).forEach((e) => {
            i.append(e);
          })),
        Object.assign(t, {
          el: s,
          wrapperEl: i,
          slidesEl:
            t.isElement && !s.parentNode.host.slideSlots
              ? s.parentNode.host
              : i,
          hostEl: t.isElement ? s.parentNode.host : s,
          mounted: !0,
          rtl: "rtl" === s.dir.toLowerCase() || "rtl" === v(s, "direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === s.dir.toLowerCase() || "rtl" === v(s, "direction")),
          wrongRTL: "-webkit-box" === v(i, "display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      if (!1 === t.mount(e)) return t;
      t.emit("beforeInit"),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.loop && t.virtual && t.params.virtual.enabled
          ? t.slideTo(
              t.params.initialSlide + t.virtual.slidesBefore,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            )
          : t.slideTo(
              t.params.initialSlide,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            ),
        t.params.loop && t.loopCreate(),
        t.attachEvents();
      const s = [...t.el.querySelectorAll('[loading="lazy"]')];
      return (
        t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
        s.forEach((e) => {
          e.complete
            ? z(t, e)
            : e.addEventListener("load", (e) => {
                z(t, e.target);
              });
        }),
        $(t),
        (t.initialized = !0),
        $(t),
        t.emit("init"),
        t.emit("afterInit"),
        t
      );
    }
    destroy(e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      const s = this,
        { params: a, el: i, wrapperEl: r, slides: n } = s;
      return (
        void 0 === s.params ||
          s.destroyed ||
          (s.emit("beforeDestroy"),
          (s.initialized = !1),
          s.detachEvents(),
          a.loop && s.loopDestroy(),
          t &&
            (s.removeClasses(),
            i.removeAttribute("style"),
            r.removeAttribute("style"),
            n &&
              n.length &&
              n.forEach((e) => {
                e.classList.remove(
                  a.slideVisibleClass,
                  a.slideActiveClass,
                  a.slideNextClass,
                  a.slidePrevClass
                ),
                  e.removeAttribute("style"),
                  e.removeAttribute("data-swiper-slide-index");
              })),
          s.emit("destroy"),
          Object.keys(s.eventsListeners).forEach((e) => {
            s.off(e);
          }),
          !1 !== e &&
            ((s.el.swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(s)),
          (s.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      c(Z, e);
    }
    static get extendedDefaults() {
      return Z;
    }
    static get defaults() {
      return W;
    }
    static installModule(e) {
      Q.prototype.__modules__ || (Q.prototype.__modules__ = []);
      const t = Q.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => Q.installModule(e)), Q)
        : (Q.installModule(e), Q);
    }
  }
  function J(e, t, s, a) {
    return (
      e.params.createElements &&
        Object.keys(a).forEach((i) => {
          if (!s[i] && !0 === s.auto) {
            let r = h(e.el, `.${a[i]}`)[0];
            r || ((r = f("div", a[i])), (r.className = a[i]), e.el.append(r)),
              (s[i] = r),
              (t[i] = r);
          }
        }),
      s
    );
  }
  function ee(e) {
    return (
      void 0 === e && (e = ""),
      `.${e
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }
  function te(e) {
    const t = this,
      { params: s, slidesEl: a } = t;
    s.loop && t.loopDestroy();
    const i = (e) => {
      if ("string" == typeof e) {
        const t = document.createElement("div");
        (t.innerHTML = e), a.append(t.children[0]), (t.innerHTML = "");
      } else a.append(e);
    };
    if ("object" == typeof e && "length" in e)
      for (let t = 0; t < e.length; t += 1) e[t] && i(e[t]);
    else i(e);
    t.recalcSlides(),
      s.loop && t.loopCreate(),
      (s.observer && !t.isElement) || t.update();
  }
  function se(e) {
    const t = this,
      { params: s, activeIndex: a, slidesEl: i } = t;
    s.loop && t.loopDestroy();
    let r = a + 1;
    const n = (e) => {
      if ("string" == typeof e) {
        const t = document.createElement("div");
        (t.innerHTML = e), i.prepend(t.children[0]), (t.innerHTML = "");
      } else i.prepend(e);
    };
    if ("object" == typeof e && "length" in e) {
      for (let t = 0; t < e.length; t += 1) e[t] && n(e[t]);
      r = a + e.length;
    } else n(e);
    t.recalcSlides(),
      s.loop && t.loopCreate(),
      (s.observer && !t.isElement) || t.update(),
      t.slideTo(r, 0, !1);
  }
  function ae(e, t) {
    const s = this,
      { params: a, activeIndex: i, slidesEl: r } = s;
    let n = i;
    a.loop && ((n -= s.loopedSlides), s.loopDestroy(), s.recalcSlides());
    const l = s.slides.length;
    if (e <= 0) return void s.prependSlide(t);
    if (e >= l) return void s.appendSlide(t);
    let o = n > e ? n + 1 : n;
    const d = [];
    for (let t = l - 1; t >= e; t -= 1) {
      const e = s.slides[t];
      e.remove(), d.unshift(e);
    }
    if ("object" == typeof t && "length" in t) {
      for (let e = 0; e < t.length; e += 1) t[e] && r.append(t[e]);
      o = n > e ? n + t.length : n;
    } else r.append(t);
    for (let e = 0; e < d.length; e += 1) r.append(d[e]);
    s.recalcSlides(),
      a.loop && s.loopCreate(),
      (a.observer && !s.isElement) || s.update(),
      a.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
  }
  function ie(e) {
    const t = this,
      { params: s, activeIndex: a } = t;
    let i = a;
    s.loop && ((i -= t.loopedSlides), t.loopDestroy());
    let r,
      n = i;
    if ("object" == typeof e && "length" in e) {
      for (let s = 0; s < e.length; s += 1)
        (r = e[s]), t.slides[r] && t.slides[r].remove(), r < n && (n -= 1);
      n = Math.max(n, 0);
    } else
      (r = e),
        t.slides[r] && t.slides[r].remove(),
        r < n && (n -= 1),
        (n = Math.max(n, 0));
    t.recalcSlides(),
      s.loop && t.loopCreate(),
      (s.observer && !t.isElement) || t.update(),
      s.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
  }
  function re() {
    const e = this,
      t = [];
    for (let s = 0; s < e.slides.length; s += 1) t.push(s);
    e.removeSlide(t);
  }
  function ne(e) {
    const {
      effect: t,
      swiper: s,
      on: a,
      setTranslate: i,
      setTransition: r,
      overwriteParams: n,
      perspective: l,
      recreateShadows: o,
      getEffectParams: d,
    } = e;
    let c;
    a("beforeInit", () => {
      if (s.params.effect !== t) return;
      s.classNames.push(`${s.params.containerModifierClass}${t}`),
        l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
      const e = n ? n() : {};
      Object.assign(s.params, e), Object.assign(s.originalParams, e);
    }),
      a("setTranslate", () => {
        s.params.effect === t && i();
      }),
      a("setTransition", (e, a) => {
        s.params.effect === t && r(a);
      }),
      a("transitionEnd", () => {
        if (s.params.effect === t && o) {
          if (!d || !d().slideShadows) return;
          s.slides.forEach((e) => {
            e.querySelectorAll(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            ).forEach((e) => e.remove());
          }),
            o();
        }
      }),
      a("virtualUpdate", () => {
        s.params.effect === t &&
          (s.slides.length || (c = !0),
          requestAnimationFrame(() => {
            c && s.slides && s.slides.length && (i(), (c = !1));
          }));
      });
  }
  function le(e, t) {
    const s = m(t);
    return (
      s !== t &&
        ((s.style.backfaceVisibility = "hidden"),
        (s.style["-webkit-backface-visibility"] = "hidden")),
      s
    );
  }
  function oe(e) {
    let { swiper: t, duration: s, transformElements: a, allSlides: i } = e;
    const { activeIndex: r } = t;
    if (t.params.virtualTranslate && 0 !== s) {
      let e,
        s = !1;
      (e = i
        ? a
        : a.filter((e) => {
            const s = e.classList.contains("swiper-slide-transform")
              ? ((e) => {
                  if (!e.parentElement)
                    return t.slides.filter(
                      (t) => t.shadowRoot && t.shadowRoot === e.parentNode
                    )[0];
                  return e.parentElement;
                })(e)
              : e;
            return t.getSlideIndex(s) === r;
          })),
        e.forEach((e) => {
          y(e, () => {
            if (s) return;
            if (!t || t.destroyed) return;
            (s = !0), (t.animating = !1);
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
            });
            t.wrapperEl.dispatchEvent(e);
          });
        });
    }
  }
  function de(e, t, s) {
    const a = `swiper-slide-shadow${s ? `-${s}` : ""}${
        e ? ` swiper-slide-shadow-${e}` : ""
      }`,
      i = m(t);
    let r = i.querySelector(`.${a.split(" ").join(".")}`);
    return r || ((r = f("div", a.split(" "))), i.append(r)), r;
  }
  Object.keys(K).forEach((e) => {
    Object.keys(K[e]).forEach((t) => {
      Q.prototype[t] = K[e][t];
    });
  }),
    Q.use([
      function (e) {
        let { swiper: t, on: s, emit: a } = e;
        const i = r();
        let n = null,
          l = null;
        const o = () => {
            t &&
              !t.destroyed &&
              t.initialized &&
              (a("beforeResize"), a("resize"));
          },
          d = () => {
            t && !t.destroyed && t.initialized && a("orientationchange");
          };
        s("init", () => {
          t.params.resizeObserver && void 0 !== i.ResizeObserver
            ? t &&
              !t.destroyed &&
              t.initialized &&
              ((n = new ResizeObserver((e) => {
                l = i.requestAnimationFrame(() => {
                  const { width: s, height: a } = t;
                  let i = s,
                    r = a;
                  e.forEach((e) => {
                    let { contentBoxSize: s, contentRect: a, target: n } = e;
                    (n && n !== t.el) ||
                      ((i = a ? a.width : (s[0] || s).inlineSize),
                      (r = a ? a.height : (s[0] || s).blockSize));
                  }),
                    (i === s && r === a) || o();
                });
              })),
              n.observe(t.el))
            : (i.addEventListener("resize", o),
              i.addEventListener("orientationchange", d));
        }),
          s("destroy", () => {
            l && i.cancelAnimationFrame(l),
              n && n.unobserve && t.el && (n.unobserve(t.el), (n = null)),
              i.removeEventListener("resize", o),
              i.removeEventListener("orientationchange", d);
          });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: a, emit: i } = e;
        const n = [],
          l = r(),
          o = function (e, s) {
            void 0 === s && (s = {});
            const a = new (l.MutationObserver || l.WebkitMutationObserver)(
              (e) => {
                if (t.__preventObserver__) return;
                if (1 === e.length) return void i("observerUpdate", e[0]);
                const s = function () {
                  i("observerUpdate", e[0]);
                };
                l.requestAnimationFrame
                  ? l.requestAnimationFrame(s)
                  : l.setTimeout(s, 0);
              }
            );
            a.observe(e, {
              attributes: void 0 === s.attributes || s.attributes,
              childList: void 0 === s.childList || s.childList,
              characterData: void 0 === s.characterData || s.characterData,
            }),
              n.push(a);
          };
        s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          a("init", () => {
            if (t.params.observer) {
              if (t.params.observeParents) {
                const e = b(t.hostEl);
                for (let t = 0; t < e.length; t += 1) o(e[t]);
              }
              o(t.hostEl, { childList: t.params.observeSlideChildren }),
                o(t.wrapperEl, { attributes: !1 });
            }
          }),
          a("destroy", () => {
            n.forEach((e) => {
              e.disconnect();
            }),
              n.splice(0, n.length);
          });
      },
    ]);
  const ce = [
    function (e) {
      let t,
        { swiper: s, extendParams: i, on: r, emit: n } = e;
      i({
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: !0,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      });
      const l = a();
      s.virtual = {
        cache: {},
        from: void 0,
        to: void 0,
        slides: [],
        offset: 0,
        slidesGrid: [],
      };
      const o = l.createElement("div");
      function d(e, t) {
        const a = s.params.virtual;
        if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
        let i;
        return (
          a.renderSlide
            ? ((i = a.renderSlide.call(s, e, t)),
              "string" == typeof i && ((o.innerHTML = i), (i = o.children[0])))
            : (i = s.isElement
                ? f("swiper-slide")
                : f("div", s.params.slideClass)),
          i.setAttribute("data-swiper-slide-index", t),
          a.renderSlide || (i.innerHTML = e),
          a.cache && (s.virtual.cache[t] = i),
          i
        );
      }
      function c(e) {
        const {
            slidesPerView: t,
            slidesPerGroup: a,
            centeredSlides: i,
            loop: r,
          } = s.params,
          { addSlidesBefore: l, addSlidesAfter: o } = s.params.virtual,
          { from: c, to: p, slides: u, slidesGrid: m, offset: f } = s.virtual;
        s.params.cssMode || s.updateActiveIndex();
        const g = s.activeIndex || 0;
        let v, w, b;
        (v = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top"),
          i
            ? ((w = Math.floor(t / 2) + a + o), (b = Math.floor(t / 2) + a + l))
            : ((w = t + (a - 1) + o), (b = (r ? t : a) + l));
        let y = g - b,
          E = g + w;
        r || ((y = Math.max(y, 0)), (E = Math.min(E, u.length - 1)));
        let x = (s.slidesGrid[y] || 0) - (s.slidesGrid[0] || 0);
        function S() {
          s.updateSlides(),
            s.updateProgress(),
            s.updateSlidesClasses(),
            n("virtualUpdate");
        }
        if (
          (r && g >= b
            ? ((y -= b), i || (x += s.slidesGrid[0]))
            : r && g < b && ((y = -b), i && (x += s.slidesGrid[0])),
          Object.assign(s.virtual, {
            from: y,
            to: E,
            offset: x,
            slidesGrid: s.slidesGrid,
            slidesBefore: b,
            slidesAfter: w,
          }),
          c === y && p === E && !e)
        )
          return (
            s.slidesGrid !== m &&
              x !== f &&
              s.slides.forEach((e) => {
                e.style[v] = x - Math.abs(s.cssOverflowAdjustment()) + "px";
              }),
            s.updateProgress(),
            void n("virtualUpdate")
          );
        if (s.params.virtual.renderExternal)
          return (
            s.params.virtual.renderExternal.call(s, {
              offset: x,
              from: y,
              to: E,
              slides: (function () {
                const e = [];
                for (let t = y; t <= E; t += 1) e.push(u[t]);
                return e;
              })(),
            }),
            void (s.params.virtual.renderExternalUpdate
              ? S()
              : n("virtualUpdate"))
          );
        const T = [],
          M = [],
          C = (e) => {
            let t = e;
            return (
              e < 0 ? (t = u.length + e) : t >= u.length && (t -= u.length), t
            );
          };
        if (e)
          s.slidesEl
            .querySelectorAll(`.${s.params.slideClass}, swiper-slide`)
            .forEach((e) => {
              e.remove();
            });
        else
          for (let e = c; e <= p; e += 1)
            if (e < y || e > E) {
              const t = C(e);
              s.slidesEl
                .querySelectorAll(
                  `.${s.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`
                )
                .forEach((e) => {
                  e.remove();
                });
            }
        const P = r ? -u.length : 0,
          L = r ? 2 * u.length : u.length;
        for (let t = P; t < L; t += 1)
          if (t >= y && t <= E) {
            const s = C(t);
            void 0 === p || e
              ? M.push(s)
              : (t > p && M.push(s), t < c && T.push(s));
          }
        if (
          (M.forEach((e) => {
            s.slidesEl.append(d(u[e], e));
          }),
          r)
        )
          for (let e = T.length - 1; e >= 0; e -= 1) {
            const t = T[e];
            s.slidesEl.prepend(d(u[t], t));
          }
        else
          T.sort((e, t) => t - e),
            T.forEach((e) => {
              s.slidesEl.prepend(d(u[e], e));
            });
        h(s.slidesEl, ".swiper-slide, swiper-slide").forEach((e) => {
          e.style[v] = x - Math.abs(s.cssOverflowAdjustment()) + "px";
        }),
          S();
      }
      r("beforeInit", () => {
        if (!s.params.virtual.enabled) return;
        let e;
        if (void 0 === s.passedParams.virtual.slides) {
          const t = [...s.slidesEl.children].filter((e) =>
            e.matches(`.${s.params.slideClass}, swiper-slide`)
          );
          t &&
            t.length &&
            ((s.virtual.slides = [...t]),
            (e = !0),
            t.forEach((e, t) => {
              e.setAttribute("data-swiper-slide-index", t),
                (s.virtual.cache[t] = e),
                e.remove();
            }));
        }
        e || (s.virtual.slides = s.params.virtual.slides),
          s.classNames.push(`${s.params.containerModifierClass}virtual`),
          (s.params.watchSlidesProgress = !0),
          (s.originalParams.watchSlidesProgress = !0),
          s.params.initialSlide || c();
      }),
        r("setTranslate", () => {
          s.params.virtual.enabled &&
            (s.params.cssMode && !s._immediateVirtual
              ? (clearTimeout(t),
                (t = setTimeout(() => {
                  c();
                }, 100)))
              : c());
        }),
        r("init update resize", () => {
          s.params.virtual.enabled &&
            s.params.cssMode &&
            p(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`);
        }),
        Object.assign(s.virtual, {
          appendSlide: function (e) {
            if ("object" == typeof e && "length" in e)
              for (let t = 0; t < e.length; t += 1)
                e[t] && s.virtual.slides.push(e[t]);
            else s.virtual.slides.push(e);
            c(!0);
          },
          prependSlide: function (e) {
            const t = s.activeIndex;
            let a = t + 1,
              i = 1;
            if (Array.isArray(e)) {
              for (let t = 0; t < e.length; t += 1)
                e[t] && s.virtual.slides.unshift(e[t]);
              (a = t + e.length), (i = e.length);
            } else s.virtual.slides.unshift(e);
            if (s.params.virtual.cache) {
              const e = s.virtual.cache,
                t = {};
              Object.keys(e).forEach((s) => {
                const a = e[s],
                  r = a.getAttribute("data-swiper-slide-index");
                r &&
                  a.setAttribute(
                    "data-swiper-slide-index",
                    parseInt(r, 10) + i
                  ),
                  (t[parseInt(s, 10) + i] = a);
              }),
                (s.virtual.cache = t);
            }
            c(!0), s.slideTo(a, 0);
          },
          removeSlide: function (e) {
            if (null == e) return;
            let t = s.activeIndex;
            if (Array.isArray(e))
              for (let a = e.length - 1; a >= 0; a -= 1)
                s.virtual.slides.splice(e[a], 1),
                  s.params.virtual.cache && delete s.virtual.cache[e[a]],
                  e[a] < t && (t -= 1),
                  (t = Math.max(t, 0));
            else
              s.virtual.slides.splice(e, 1),
                s.params.virtual.cache && delete s.virtual.cache[e],
                e < t && (t -= 1),
                (t = Math.max(t, 0));
            c(!0), s.slideTo(t, 0);
          },
          removeAllSlides: function () {
            (s.virtual.slides = []),
              s.params.virtual.cache && (s.virtual.cache = {}),
              c(!0),
              s.slideTo(0, 0);
          },
          update: c,
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i, emit: n } = e;
      const l = a(),
        o = r();
      function d(e) {
        if (!t.enabled) return;
        const { rtlTranslate: s } = t;
        let a = e;
        a.originalEvent && (a = a.originalEvent);
        const i = a.keyCode || a.charCode,
          r = t.params.keyboard.pageUpDown,
          d = r && 33 === i,
          c = r && 34 === i,
          p = 37 === i,
          u = 39 === i,
          m = 38 === i,
          h = 40 === i;
        if (
          !t.allowSlideNext &&
          ((t.isHorizontal() && u) || (t.isVertical() && h) || c)
        )
          return !1;
        if (
          !t.allowSlidePrev &&
          ((t.isHorizontal() && p) || (t.isVertical() && m) || d)
        )
          return !1;
        if (
          !(
            a.shiftKey ||
            a.altKey ||
            a.ctrlKey ||
            a.metaKey ||
            (l.activeElement &&
              l.activeElement.nodeName &&
              ("input" === l.activeElement.nodeName.toLowerCase() ||
                "textarea" === l.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (
            t.params.keyboard.onlyInViewport &&
            (d || c || p || u || m || h)
          ) {
            let e = !1;
            if (
              b(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 &&
              0 === b(t.el, `.${t.params.slideActiveClass}`).length
            )
              return;
            const a = t.el,
              i = a.clientWidth,
              r = a.clientHeight,
              n = o.innerWidth,
              l = o.innerHeight,
              d = g(a);
            s && (d.left -= a.scrollLeft);
            const c = [
              [d.left, d.top],
              [d.left + i, d.top],
              [d.left, d.top + r],
              [d.left + i, d.top + r],
            ];
            for (let t = 0; t < c.length; t += 1) {
              const s = c[t];
              if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
                if (0 === s[0] && 0 === s[1]) continue;
                e = !0;
              }
            }
            if (!e) return;
          }
          t.isHorizontal()
            ? ((d || c || p || u) &&
                (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
              (((c || u) && !s) || ((d || p) && s)) && t.slideNext(),
              (((d || p) && !s) || ((c || u) && s)) && t.slidePrev())
            : ((d || c || m || h) &&
                (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
              (c || h) && t.slideNext(),
              (d || m) && t.slidePrev()),
            n("keyPress", i);
        }
      }
      function c() {
        t.keyboard.enabled ||
          (l.addEventListener("keydown", d), (t.keyboard.enabled = !0));
      }
      function p() {
        t.keyboard.enabled &&
          (l.removeEventListener("keydown", d), (t.keyboard.enabled = !1));
      }
      (t.keyboard = { enabled: !1 }),
        s({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
        i("init", () => {
          t.params.keyboard.enabled && c();
        }),
        i("destroy", () => {
          t.keyboard.enabled && p();
        }),
        Object.assign(t.keyboard, { enable: c, disable: p });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      const o = r();
      let d;
      s({
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarget: "container",
          thresholdDelta: null,
          thresholdTime: null,
          noMousewheelClass: "swiper-no-mousewheel",
        },
      }),
        (t.mousewheel = { enabled: !1 });
      let c,
        p = l();
      const u = [];
      function m() {
        t.enabled && (t.mouseEntered = !0);
      }
      function h() {
        t.enabled && (t.mouseEntered = !1);
      }
      function f(e) {
        return (
          !(
            t.params.mousewheel.thresholdDelta &&
            e.delta < t.params.mousewheel.thresholdDelta
          ) &&
          !(
            t.params.mousewheel.thresholdTime &&
            l() - p < t.params.mousewheel.thresholdTime
          ) &&
          ((e.delta >= 6 && l() - p < 60) ||
            (e.direction < 0
              ? (t.isEnd && !t.params.loop) ||
                t.animating ||
                (t.slideNext(), i("scroll", e.raw))
              : (t.isBeginning && !t.params.loop) ||
                t.animating ||
                (t.slidePrev(), i("scroll", e.raw)),
            (p = new o.Date().getTime()),
            !1))
        );
      }
      function g(e) {
        let s = e,
          a = !0;
        if (!t.enabled) return;
        if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`))
          return;
        const r = t.params.mousewheel;
        t.params.cssMode && s.preventDefault();
        let o = t.el;
        "container" !== t.params.mousewheel.eventsTarget &&
          (o = document.querySelector(t.params.mousewheel.eventsTarget));
        const p = o && o.contains(s.target);
        if (!t.mouseEntered && !p && !r.releaseOnEdges) return !0;
        s.originalEvent && (s = s.originalEvent);
        let m = 0;
        const h = t.rtlTranslate ? -1 : 1,
          g = (function (e) {
            let t = 0,
              s = 0,
              a = 0,
              i = 0;
            return (
              "detail" in e && (s = e.detail),
              "wheelDelta" in e && (s = -e.wheelDelta / 120),
              "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120),
              "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
              "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = s), (s = 0)),
              (a = 10 * t),
              (i = 10 * s),
              "deltaY" in e && (i = e.deltaY),
              "deltaX" in e && (a = e.deltaX),
              e.shiftKey && !a && ((a = i), (i = 0)),
              (a || i) &&
                e.deltaMode &&
                (1 === e.deltaMode
                  ? ((a *= 40), (i *= 40))
                  : ((a *= 800), (i *= 800))),
              a && !t && (t = a < 1 ? -1 : 1),
              i && !s && (s = i < 1 ? -1 : 1),
              { spinX: t, spinY: s, pixelX: a, pixelY: i }
            );
          })(s);
        if (r.forceToAxis)
          if (t.isHorizontal()) {
            if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
            m = -g.pixelX * h;
          } else {
            if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
            m = -g.pixelY;
          }
        else
          m =
            Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * h : -g.pixelY;
        if (0 === m) return !0;
        r.invert && (m = -m);
        let v = t.getTranslate() + m * r.sensitivity;
        if (
          (v >= t.minTranslate() && (v = t.minTranslate()),
          v <= t.maxTranslate() && (v = t.maxTranslate()),
          (a =
            !!t.params.loop ||
            !(v === t.minTranslate() || v === t.maxTranslate())),
          a && t.params.nested && s.stopPropagation(),
          t.params.freeMode && t.params.freeMode.enabled)
        ) {
          const e = { time: l(), delta: Math.abs(m), direction: Math.sign(m) },
            a =
              c &&
              e.time < c.time + 500 &&
              e.delta <= c.delta &&
              e.direction === c.direction;
          if (!a) {
            c = void 0;
            let l = t.getTranslate() + m * r.sensitivity;
            const o = t.isBeginning,
              p = t.isEnd;
            if (
              (l >= t.minTranslate() && (l = t.minTranslate()),
              l <= t.maxTranslate() && (l = t.maxTranslate()),
              t.setTransition(0),
              t.setTranslate(l),
              t.updateProgress(),
              t.updateActiveIndex(),
              t.updateSlidesClasses(),
              ((!o && t.isBeginning) || (!p && t.isEnd)) &&
                t.updateSlidesClasses(),
              t.params.loop &&
                t.loopFix({
                  direction: e.direction < 0 ? "next" : "prev",
                  byMousewheel: !0,
                }),
              t.params.freeMode.sticky)
            ) {
              clearTimeout(d), (d = void 0), u.length >= 15 && u.shift();
              const s = u.length ? u[u.length - 1] : void 0,
                a = u[0];
              if (
                (u.push(e),
                s && (e.delta > s.delta || e.direction !== s.direction))
              )
                u.splice(0);
              else if (
                u.length >= 15 &&
                e.time - a.time < 500 &&
                a.delta - e.delta >= 1 &&
                e.delta <= 6
              ) {
                const s = m > 0 ? 0.8 : 0.2;
                (c = e),
                  u.splice(0),
                  (d = n(() => {
                    t.slideToClosest(t.params.speed, !0, void 0, s);
                  }, 0));
              }
              d ||
                (d = n(() => {
                  (c = e),
                    u.splice(0),
                    t.slideToClosest(t.params.speed, !0, void 0, 0.5);
                }, 500));
            }
            if (
              (a || i("scroll", s),
              t.params.autoplay &&
                t.params.autoplayDisableOnInteraction &&
                t.autoplay.stop(),
              r.releaseOnEdges &&
                (l === t.minTranslate() || l === t.maxTranslate()))
            )
              return !0;
          }
        } else {
          const s = {
            time: l(),
            delta: Math.abs(m),
            direction: Math.sign(m),
            raw: e,
          };
          u.length >= 2 && u.shift();
          const a = u.length ? u[u.length - 1] : void 0;
          if (
            (u.push(s),
            a
              ? (s.direction !== a.direction ||
                  s.delta > a.delta ||
                  s.time > a.time + 150) &&
                f(s)
              : f(s),
            (function (e) {
              const s = t.params.mousewheel;
              if (e.direction < 0) {
                if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
              } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges)
                return !0;
              return !1;
            })(s))
          )
            return !0;
        }
        return s.preventDefault ? s.preventDefault() : (s.returnValue = !1), !1;
      }
      function v(e) {
        let s = t.el;
        "container" !== t.params.mousewheel.eventsTarget &&
          (s = document.querySelector(t.params.mousewheel.eventsTarget)),
          s[e]("mouseenter", m),
          s[e]("mouseleave", h),
          s[e]("wheel", g);
      }
      function w() {
        return t.params.cssMode
          ? (t.wrapperEl.removeEventListener("wheel", g), !0)
          : !t.mousewheel.enabled &&
              (v("addEventListener"), (t.mousewheel.enabled = !0), !0);
      }
      function b() {
        return t.params.cssMode
          ? (t.wrapperEl.addEventListener(event, g), !0)
          : !!t.mousewheel.enabled &&
              (v("removeEventListener"), (t.mousewheel.enabled = !1), !0);
      }
      a("init", () => {
        !t.params.mousewheel.enabled && t.params.cssMode && b(),
          t.params.mousewheel.enabled && w();
      }),
        a("destroy", () => {
          t.params.cssMode && w(), t.mousewheel.enabled && b();
        }),
        Object.assign(t.mousewheel, { enable: w, disable: b });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      s({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled",
        },
      }),
        (t.navigation = { nextEl: null, prevEl: null });
      const r = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      function n(e) {
        let s;
        return e &&
          "string" == typeof e &&
          t.isElement &&
          ((s = t.el.querySelector(e)), s)
          ? s
          : (e &&
              ("string" == typeof e && (s = [...document.querySelectorAll(e)]),
              t.params.uniqueNavElements &&
                "string" == typeof e &&
                s.length > 1 &&
                1 === t.el.querySelectorAll(e).length &&
                (s = t.el.querySelector(e))),
            e && !s ? e : s);
      }
      function l(e, s) {
        const a = t.params.navigation;
        (e = r(e)).forEach((e) => {
          e &&
            (e.classList[s ? "add" : "remove"](...a.disabledClass.split(" ")),
            "BUTTON" === e.tagName && (e.disabled = s),
            t.params.watchOverflow &&
              t.enabled &&
              e.classList[t.isLocked ? "add" : "remove"](a.lockClass));
        });
      }
      function o() {
        const { nextEl: e, prevEl: s } = t.navigation;
        if (t.params.loop) return l(s, !1), void l(e, !1);
        l(s, t.isBeginning && !t.params.rewind),
          l(e, t.isEnd && !t.params.rewind);
      }
      function d(e) {
        e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) &&
            (t.slidePrev(), i("navigationPrev"));
      }
      function c(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) &&
            (t.slideNext(), i("navigationNext"));
      }
      function p() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = J(
            t,
            t.originalParams.navigation,
            t.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !e.nextEl && !e.prevEl)
        )
          return;
        let s = n(e.nextEl),
          a = n(e.prevEl);
        Object.assign(t.navigation, { nextEl: s, prevEl: a }),
          (s = r(s)),
          (a = r(a));
        const i = (s, a) => {
          s && s.addEventListener("click", "next" === a ? c : d),
            !t.enabled && s && s.classList.add(...e.lockClass.split(" "));
        };
        s.forEach((e) => i(e, "next")), a.forEach((e) => i(e, "prev"));
      }
      function u() {
        let { nextEl: e, prevEl: s } = t.navigation;
        (e = r(e)), (s = r(s));
        const a = (e, s) => {
          e.removeEventListener("click", "next" === s ? c : d),
            e.classList.remove(...t.params.navigation.disabledClass.split(" "));
        };
        e.forEach((e) => a(e, "next")), s.forEach((e) => a(e, "prev"));
      }
      a("init", () => {
        !1 === t.params.navigation.enabled ? m() : (p(), o());
      }),
        a("toEdge fromEdge lock unlock", () => {
          o();
        }),
        a("destroy", () => {
          u();
        }),
        a("enable disable", () => {
          let { nextEl: e, prevEl: s } = t.navigation;
          (e = r(e)),
            (s = r(s)),
            [...e, ...s]
              .filter((e) => !!e)
              .forEach((e) =>
                e.classList[t.enabled ? "remove" : "add"](
                  t.params.navigation.lockClass
                )
              );
        }),
        a("click", (e, s) => {
          let { nextEl: a, prevEl: n } = t.navigation;
          (a = r(a)), (n = r(n));
          const l = s.target;
          if (
            t.params.navigation.hideOnClick &&
            !n.includes(l) &&
            !a.includes(l)
          ) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === l || t.pagination.el.contains(l))
            )
              return;
            let e;
            a.length
              ? (e = a[0].classList.contains(t.params.navigation.hiddenClass))
              : n.length &&
                (e = n[0].classList.contains(t.params.navigation.hiddenClass)),
              i(!0 === e ? "navigationShow" : "navigationHide"),
              [...a, ...n]
                .filter((e) => !!e)
                .forEach((e) =>
                  e.classList.toggle(t.params.navigation.hiddenClass)
                );
          }
        });
      const m = () => {
        t.el.classList.add(
          ...t.params.navigation.navigationDisabledClass.split(" ")
        ),
          u();
      };
      Object.assign(t.navigation, {
        enable: () => {
          t.el.classList.remove(
            ...t.params.navigation.navigationDisabledClass.split(" ")
          ),
            p(),
            o();
        },
        disable: m,
        update: o,
        init: p,
        destroy: u,
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      const r = "swiper-pagination";
      let n;
      s({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${r}-bullet`,
          bulletActiveClass: `${r}-bullet-active`,
          modifierClass: `${r}-`,
          currentClass: `${r}-current`,
          totalClass: `${r}-total`,
          hiddenClass: `${r}-hidden`,
          progressbarFillClass: `${r}-progressbar-fill`,
          progressbarOppositeClass: `${r}-progressbar-opposite`,
          clickableClass: `${r}-clickable`,
          lockClass: `${r}-lock`,
          horizontalClass: `${r}-horizontal`,
          verticalClass: `${r}-vertical`,
          paginationDisabledClass: `${r}-disabled`,
        },
      }),
        (t.pagination = { el: null, bullets: [] });
      let l = 0;
      const o = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      function d() {
        return (
          !t.params.pagination.el ||
          !t.pagination.el ||
          (Array.isArray(t.pagination.el) && 0 === t.pagination.el.length)
        );
      }
      function c(e, s) {
        const { bulletActiveClass: a } = t.params.pagination;
        e &&
          (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
          (e.classList.add(`${a}-${s}`),
          (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
            e.classList.add(`${a}-${s}-${s}`));
      }
      function p(e) {
        const s = e.target.closest(ee(t.params.pagination.bulletClass));
        if (!s) return;
        e.preventDefault();
        const a = w(s) * t.params.slidesPerGroup;
        if (t.params.loop) {
          if (t.realIndex === a) return;
          const e = t.realIndex,
            s = t.getSlideIndexByData(a),
            i = t.getSlideIndexByData(t.realIndex);
          if (s > t.slides.length - t.loopedSlides) {
            const a = t.activeIndex;
            t.loopFix({
              direction: s > i ? "next" : "prev",
              activeSlideIndex: s,
              slideTo: !1,
            });
            a === t.activeIndex && t.slideToLoop(e, 0, !1, !0);
          }
          t.slideToLoop(a);
        } else t.slideTo(a);
      }
      function u() {
        const e = t.rtl,
          s = t.params.pagination;
        if (d()) return;
        let a,
          r,
          p = t.pagination.el;
        p = o(p);
        const u =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          m = t.params.loop
            ? Math.ceil(u / t.params.slidesPerGroup)
            : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((r = t.previousRealIndex || 0),
              (a =
                t.params.slidesPerGroup > 1
                  ? Math.floor(t.realIndex / t.params.slidesPerGroup)
                  : t.realIndex))
            : void 0 !== t.snapIndex
            ? ((a = t.snapIndex), (r = t.previousSnapIndex))
            : ((r = t.previousIndex || 0), (a = t.activeIndex || 0)),
          "bullets" === s.type &&
            t.pagination.bullets &&
            t.pagination.bullets.length > 0)
        ) {
          const i = t.pagination.bullets;
          let o, d, u;
          if (
            (s.dynamicBullets &&
              ((n = E(i[0], t.isHorizontal() ? "width" : "height", !0)),
              p.forEach((e) => {
                e.style[t.isHorizontal() ? "width" : "height"] =
                  n * (s.dynamicMainBullets + 4) + "px";
              }),
              s.dynamicMainBullets > 1 &&
                void 0 !== r &&
                ((l += a - (r || 0)),
                l > s.dynamicMainBullets - 1
                  ? (l = s.dynamicMainBullets - 1)
                  : l < 0 && (l = 0)),
              (o = Math.max(a - l, 0)),
              (d = o + (Math.min(i.length, s.dynamicMainBullets) - 1)),
              (u = (d + o) / 2)),
            i.forEach((e) => {
              const t = [
                ...[
                  "",
                  "-next",
                  "-next-next",
                  "-prev",
                  "-prev-prev",
                  "-main",
                ].map((e) => `${s.bulletActiveClass}${e}`),
              ]
                .map((e) =>
                  "string" == typeof e && e.includes(" ") ? e.split(" ") : e
                )
                .flat();
              e.classList.remove(...t);
            }),
            p.length > 1)
          )
            i.forEach((e) => {
              const i = w(e);
              i === a
                ? e.classList.add(...s.bulletActiveClass.split(" "))
                : t.isElement && e.setAttribute("part", "bullet"),
                s.dynamicBullets &&
                  (i >= o &&
                    i <= d &&
                    e.classList.add(
                      ...`${s.bulletActiveClass}-main`.split(" ")
                    ),
                  i === o && c(e, "prev"),
                  i === d && c(e, "next"));
            });
          else {
            const e = i[a];
            if (
              (e && e.classList.add(...s.bulletActiveClass.split(" ")),
              t.isElement &&
                i.forEach((e, t) => {
                  e.setAttribute("part", t === a ? "bullet-active" : "bullet");
                }),
              s.dynamicBullets)
            ) {
              const e = i[o],
                t = i[d];
              for (let e = o; e <= d; e += 1)
                i[e] &&
                  i[e].classList.add(
                    ...`${s.bulletActiveClass}-main`.split(" ")
                  );
              c(e, "prev"), c(t, "next");
            }
          }
          if (s.dynamicBullets) {
            const a = Math.min(i.length, s.dynamicMainBullets + 4),
              r = (n * a - n) / 2 - u * n,
              l = e ? "right" : "left";
            i.forEach((e) => {
              e.style[t.isHorizontal() ? l : "top"] = `${r}px`;
            });
          }
        }
        p.forEach((e, r) => {
          if (
            ("fraction" === s.type &&
              (e.querySelectorAll(ee(s.currentClass)).forEach((e) => {
                e.textContent = s.formatFractionCurrent(a + 1);
              }),
              e.querySelectorAll(ee(s.totalClass)).forEach((e) => {
                e.textContent = s.formatFractionTotal(m);
              })),
            "progressbar" === s.type)
          ) {
            let i;
            i = s.progressbarOpposite
              ? t.isHorizontal()
                ? "vertical"
                : "horizontal"
              : t.isHorizontal()
              ? "horizontal"
              : "vertical";
            const r = (a + 1) / m;
            let n = 1,
              l = 1;
            "horizontal" === i ? (n = r) : (l = r),
              e.querySelectorAll(ee(s.progressbarFillClass)).forEach((e) => {
                (e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${l})`),
                  (e.style.transitionDuration = `${t.params.speed}ms`);
              });
          }
          "custom" === s.type && s.renderCustom
            ? ((e.innerHTML = s.renderCustom(t, a + 1, m)),
              0 === r && i("paginationRender", e))
            : (0 === r && i("paginationRender", e), i("paginationUpdate", e)),
            t.params.watchOverflow &&
              t.enabled &&
              e.classList[t.isLocked ? "add" : "remove"](s.lockClass);
        });
      }
      function m() {
        const e = t.params.pagination;
        if (d()) return;
        const s =
          t.virtual && t.params.virtual.enabled
            ? t.virtual.slides.length
            : t.slides.length;
        let a = t.pagination.el;
        a = o(a);
        let r = "";
        if ("bullets" === e.type) {
          let a = t.params.loop
            ? Math.ceil(s / t.params.slidesPerGroup)
            : t.snapGrid.length;
          t.params.freeMode && t.params.freeMode.enabled && a > s && (a = s);
          for (let s = 0; s < a; s += 1)
            e.renderBullet
              ? (r += e.renderBullet.call(t, s, e.bulletClass))
              : (r += `<${e.bulletElement} ${
                  t.isElement ? 'part="bullet"' : ""
                } class="${e.bulletClass}"></${e.bulletElement}>`);
        }
        "fraction" === e.type &&
          (r = e.renderFraction
            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          "progressbar" === e.type &&
            (r = e.renderProgressbar
              ? e.renderProgressbar.call(t, e.progressbarFillClass)
              : `<span class="${e.progressbarFillClass}"></span>`),
          (t.pagination.bullets = []),
          a.forEach((s) => {
            "custom" !== e.type && (s.innerHTML = r || ""),
              "bullets" === e.type &&
                t.pagination.bullets.push(
                  ...s.querySelectorAll(ee(e.bulletClass))
                );
          }),
          "custom" !== e.type && i("paginationRender", a[0]);
      }
      function h() {
        t.params.pagination = J(
          t,
          t.originalParams.pagination,
          t.params.pagination,
          { el: "swiper-pagination" }
        );
        const e = t.params.pagination;
        if (!e.el) return;
        let s;
        "string" == typeof e.el &&
          t.isElement &&
          (s = t.el.querySelector(e.el)),
          s ||
            "string" != typeof e.el ||
            (s = [...document.querySelectorAll(e.el)]),
          s || (s = e.el),
          s &&
            0 !== s.length &&
            (t.params.uniqueNavElements &&
              "string" == typeof e.el &&
              Array.isArray(s) &&
              s.length > 1 &&
              ((s = [...t.el.querySelectorAll(e.el)]),
              s.length > 1 &&
                (s = s.filter((e) => b(e, ".swiper")[0] === t.el)[0])),
            Array.isArray(s) && 1 === s.length && (s = s[0]),
            Object.assign(t.pagination, { el: s }),
            (s = o(s)),
            s.forEach((s) => {
              "bullets" === e.type &&
                e.clickable &&
                s.classList.add(...(e.clickableClass || "").split(" ")),
                s.classList.add(e.modifierClass + e.type),
                s.classList.add(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass
                ),
                "bullets" === e.type &&
                  e.dynamicBullets &&
                  (s.classList.add(`${e.modifierClass}${e.type}-dynamic`),
                  (l = 0),
                  e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                "progressbar" === e.type &&
                  e.progressbarOpposite &&
                  s.classList.add(e.progressbarOppositeClass),
                e.clickable && s.addEventListener("click", p),
                t.enabled || s.classList.add(e.lockClass);
            }));
      }
      function f() {
        const e = t.params.pagination;
        if (d()) return;
        let s = t.pagination.el;
        s &&
          ((s = o(s)),
          s.forEach((s) => {
            s.classList.remove(e.hiddenClass),
              s.classList.remove(e.modifierClass + e.type),
              s.classList.remove(
                t.isHorizontal() ? e.horizontalClass : e.verticalClass
              ),
              e.clickable &&
                (s.classList.remove(...(e.clickableClass || "").split(" ")),
                s.removeEventListener("click", p));
          })),
          t.pagination.bullets &&
            t.pagination.bullets.forEach((t) =>
              t.classList.remove(...e.bulletActiveClass.split(" "))
            );
      }
      a("changeDirection", () => {
        if (!t.pagination || !t.pagination.el) return;
        const e = t.params.pagination;
        let { el: s } = t.pagination;
        (s = o(s)),
          s.forEach((s) => {
            s.classList.remove(e.horizontalClass, e.verticalClass),
              s.classList.add(
                t.isHorizontal() ? e.horizontalClass : e.verticalClass
              );
          });
      }),
        a("init", () => {
          !1 === t.params.pagination.enabled ? g() : (h(), m(), u());
        }),
        a("activeIndexChange", () => {
          void 0 === t.snapIndex && u();
        }),
        a("snapIndexChange", () => {
          u();
        }),
        a("snapGridLengthChange", () => {
          m(), u();
        }),
        a("destroy", () => {
          f();
        }),
        a("enable disable", () => {
          let { el: e } = t.pagination;
          e &&
            ((e = o(e)),
            e.forEach((e) =>
              e.classList[t.enabled ? "remove" : "add"](
                t.params.pagination.lockClass
              )
            ));
        }),
        a("lock unlock", () => {
          u();
        }),
        a("click", (e, s) => {
          const a = s.target,
            r = o(t.pagination.el);
          if (
            t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            r &&
            r.length > 0 &&
            !a.classList.contains(t.params.pagination.bulletClass)
          ) {
            if (
              t.navigation &&
              ((t.navigation.nextEl && a === t.navigation.nextEl) ||
                (t.navigation.prevEl && a === t.navigation.prevEl))
            )
              return;
            const e = r[0].classList.contains(t.params.pagination.hiddenClass);
            i(!0 === e ? "paginationShow" : "paginationHide"),
              r.forEach((e) =>
                e.classList.toggle(t.params.pagination.hiddenClass)
              );
          }
        });
      const g = () => {
        t.el.classList.add(t.params.pagination.paginationDisabledClass);
        let { el: e } = t.pagination;
        e &&
          ((e = o(e)),
          e.forEach((e) =>
            e.classList.add(t.params.pagination.paginationDisabledClass)
          )),
          f();
      };
      Object.assign(t.pagination, {
        enable: () => {
          t.el.classList.remove(t.params.pagination.paginationDisabledClass);
          let { el: e } = t.pagination;
          e &&
            ((e = o(e)),
            e.forEach((e) =>
              e.classList.remove(t.params.pagination.paginationDisabledClass)
            )),
            h(),
            m(),
            u();
        },
        disable: g,
        render: m,
        update: u,
        init: h,
        destroy: f,
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i, emit: r } = e;
      const l = a();
      let o,
        d,
        c,
        p,
        u = !1,
        m = null,
        h = null;
      function v() {
        if (!t.params.scrollbar.el || !t.scrollbar.el) return;
        const { scrollbar: e, rtlTranslate: s } = t,
          { dragEl: a, el: i } = e,
          r = t.params.scrollbar,
          n = t.params.loop ? t.progressLoop : t.progress;
        let l = d,
          o = (c - d) * n;
        s
          ? ((o = -o),
            o > 0 ? ((l = d - o), (o = 0)) : -o + d > c && (l = c + o))
          : o < 0
          ? ((l = d + o), (o = 0))
          : o + d > c && (l = c - o),
          t.isHorizontal()
            ? ((a.style.transform = `translate3d(${o}px, 0, 0)`),
              (a.style.width = `${l}px`))
            : ((a.style.transform = `translate3d(0px, ${o}px, 0)`),
              (a.style.height = `${l}px`)),
          r.hide &&
            (clearTimeout(m),
            (i.style.opacity = 1),
            (m = setTimeout(() => {
              (i.style.opacity = 0), (i.style.transitionDuration = "400ms");
            }, 1e3)));
      }
      function w() {
        if (!t.params.scrollbar.el || !t.scrollbar.el) return;
        const { scrollbar: e } = t,
          { dragEl: s, el: a } = e;
        (s.style.width = ""),
          (s.style.height = ""),
          (c = t.isHorizontal() ? a.offsetWidth : a.offsetHeight),
          (p =
            t.size /
            (t.virtualSize +
              t.params.slidesOffsetBefore -
              (t.params.centeredSlides ? t.snapGrid[0] : 0))),
          (d =
            "auto" === t.params.scrollbar.dragSize
              ? c * p
              : parseInt(t.params.scrollbar.dragSize, 10)),
          t.isHorizontal()
            ? (s.style.width = `${d}px`)
            : (s.style.height = `${d}px`),
          (a.style.display = p >= 1 ? "none" : ""),
          t.params.scrollbar.hide && (a.style.opacity = 0),
          t.params.watchOverflow &&
            t.enabled &&
            e.el.classList[t.isLocked ? "add" : "remove"](
              t.params.scrollbar.lockClass
            );
      }
      function b(e) {
        return t.isHorizontal() ? e.clientX : e.clientY;
      }
      function y(e) {
        const { scrollbar: s, rtlTranslate: a } = t,
          { el: i } = s;
        let r;
        (r =
          (b(e) -
            g(i)[t.isHorizontal() ? "left" : "top"] -
            (null !== o ? o : d / 2)) /
          (c - d)),
          (r = Math.max(Math.min(r, 1), 0)),
          a && (r = 1 - r);
        const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
        t.updateProgress(n),
          t.setTranslate(n),
          t.updateActiveIndex(),
          t.updateSlidesClasses();
      }
      function E(e) {
        const s = t.params.scrollbar,
          { scrollbar: a, wrapperEl: i } = t,
          { el: n, dragEl: l } = a;
        (u = !0),
          (o =
            e.target === l
              ? b(e) -
                e.target.getBoundingClientRect()[
                  t.isHorizontal() ? "left" : "top"
                ]
              : null),
          e.preventDefault(),
          e.stopPropagation(),
          (i.style.transitionDuration = "100ms"),
          (l.style.transitionDuration = "100ms"),
          y(e),
          clearTimeout(h),
          (n.style.transitionDuration = "0ms"),
          s.hide && (n.style.opacity = 1),
          t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "none"),
          r("scrollbarDragStart", e);
      }
      function x(e) {
        const { scrollbar: s, wrapperEl: a } = t,
          { el: i, dragEl: n } = s;
        u &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          y(e),
          (a.style.transitionDuration = "0ms"),
          (i.style.transitionDuration = "0ms"),
          (n.style.transitionDuration = "0ms"),
          r("scrollbarDragMove", e));
      }
      function S(e) {
        const s = t.params.scrollbar,
          { scrollbar: a, wrapperEl: i } = t,
          { el: l } = a;
        u &&
          ((u = !1),
          t.params.cssMode &&
            ((t.wrapperEl.style["scroll-snap-type"] = ""),
            (i.style.transitionDuration = "")),
          s.hide &&
            (clearTimeout(h),
            (h = n(() => {
              (l.style.opacity = 0), (l.style.transitionDuration = "400ms");
            }, 1e3))),
          r("scrollbarDragEnd", e),
          s.snapOnRelease && t.slideToClosest());
      }
      function T(e) {
        const { scrollbar: s, params: a } = t,
          i = s.el;
        if (!i) return;
        const r = i,
          n = !!a.passiveListeners && { passive: !1, capture: !1 },
          o = !!a.passiveListeners && { passive: !0, capture: !1 };
        if (!r) return;
        const d = "on" === e ? "addEventListener" : "removeEventListener";
        r[d]("pointerdown", E, n),
          l[d]("pointermove", x, n),
          l[d]("pointerup", S, o);
      }
      function M() {
        const { scrollbar: e, el: s } = t;
        t.params.scrollbar = J(
          t,
          t.originalParams.scrollbar,
          t.params.scrollbar,
          { el: "swiper-scrollbar" }
        );
        const a = t.params.scrollbar;
        if (!a.el) return;
        let i, r;
        "string" == typeof a.el &&
          t.isElement &&
          (i = t.el.querySelector(a.el)),
          i || "string" != typeof a.el
            ? i || (i = a.el)
            : (i = l.querySelectorAll(a.el)),
          t.params.uniqueNavElements &&
            "string" == typeof a.el &&
            i.length > 1 &&
            1 === s.querySelectorAll(a.el).length &&
            (i = s.querySelector(a.el)),
          i.length > 0 && (i = i[0]),
          i.classList.add(
            t.isHorizontal() ? a.horizontalClass : a.verticalClass
          ),
          i &&
            ((r = i.querySelector(`.${t.params.scrollbar.dragClass}`)),
            r || ((r = f("div", t.params.scrollbar.dragClass)), i.append(r))),
          Object.assign(e, { el: i, dragEl: r }),
          a.draggable && t.params.scrollbar.el && t.scrollbar.el && T("on"),
          i &&
            i.classList[t.enabled ? "remove" : "add"](
              t.params.scrollbar.lockClass
            );
      }
      function C() {
        const e = t.params.scrollbar,
          s = t.scrollbar.el;
        s &&
          s.classList.remove(
            t.isHorizontal() ? e.horizontalClass : e.verticalClass
          ),
          t.params.scrollbar.el && t.scrollbar.el && T("off");
      }
      s({
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag",
          scrollbarDisabledClass: "swiper-scrollbar-disabled",
          horizontalClass: "swiper-scrollbar-horizontal",
          verticalClass: "swiper-scrollbar-vertical",
        },
      }),
        (t.scrollbar = { el: null, dragEl: null }),
        i("init", () => {
          !1 === t.params.scrollbar.enabled ? P() : (M(), w(), v());
        }),
        i("update resize observerUpdate lock unlock", () => {
          w();
        }),
        i("setTranslate", () => {
          v();
        }),
        i("setTransition", (e, s) => {
          !(function (e) {
            t.params.scrollbar.el &&
              t.scrollbar.el &&
              (t.scrollbar.dragEl.style.transitionDuration = `${e}ms`);
          })(s);
        }),
        i("enable disable", () => {
          const { el: e } = t.scrollbar;
          e &&
            e.classList[t.enabled ? "remove" : "add"](
              t.params.scrollbar.lockClass
            );
        }),
        i("destroy", () => {
          C();
        });
      const P = () => {
        t.el.classList.add(t.params.scrollbar.scrollbarDisabledClass),
          t.scrollbar.el &&
            t.scrollbar.el.classList.add(
              t.params.scrollbar.scrollbarDisabledClass
            ),
          C();
      };
      Object.assign(t.scrollbar, {
        enable: () => {
          t.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass),
            t.scrollbar.el &&
              t.scrollbar.el.classList.remove(
                t.params.scrollbar.scrollbarDisabledClass
              ),
            M(),
            w(),
            v();
        },
        disable: P,
        updateSize: w,
        setTranslate: v,
        init: M,
        destroy: C,
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ parallax: { enabled: !1 } });
      const i =
          "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
        r = (e, s) => {
          const { rtl: a } = t,
            i = a ? -1 : 1,
            r = e.getAttribute("data-swiper-parallax") || "0";
          let n = e.getAttribute("data-swiper-parallax-x"),
            l = e.getAttribute("data-swiper-parallax-y");
          const o = e.getAttribute("data-swiper-parallax-scale"),
            d = e.getAttribute("data-swiper-parallax-opacity"),
            c = e.getAttribute("data-swiper-parallax-rotate");
          if (
            (n || l
              ? ((n = n || "0"), (l = l || "0"))
              : t.isHorizontal()
              ? ((n = r), (l = "0"))
              : ((l = r), (n = "0")),
            (n =
              n.indexOf("%") >= 0
                ? parseInt(n, 10) * s * i + "%"
                : n * s * i + "px"),
            (l =
              l.indexOf("%") >= 0 ? parseInt(l, 10) * s + "%" : l * s + "px"),
            null != d)
          ) {
            const t = d - (d - 1) * (1 - Math.abs(s));
            e.style.opacity = t;
          }
          let p = `translate3d(${n}, ${l}, 0px)`;
          if (null != o) {
            p += ` scale(${o - (o - 1) * (1 - Math.abs(s))})`;
          }
          if (c && null != c) {
            p += ` rotate(${c * s * -1}deg)`;
          }
          e.style.transform = p;
        },
        n = () => {
          const {
              el: e,
              slides: s,
              progress: a,
              snapGrid: n,
              isElement: l,
            } = t,
            o = h(e, i);
          t.isElement && o.push(...h(t.hostEl, i)),
            o.forEach((e) => {
              r(e, a);
            }),
            s.forEach((e, s) => {
              let l = e.progress;
              t.params.slidesPerGroup > 1 &&
                "auto" !== t.params.slidesPerView &&
                (l += Math.ceil(s / 2) - a * (n.length - 1)),
                (l = Math.min(Math.max(l, -1), 1)),
                e
                  .querySelectorAll(`${i}, [data-swiper-parallax-rotate]`)
                  .forEach((e) => {
                    r(e, l);
                  });
            });
        };
      a("beforeInit", () => {
        t.params.parallax.enabled &&
          ((t.params.watchSlidesProgress = !0),
          (t.originalParams.watchSlidesProgress = !0));
      }),
        a("init", () => {
          t.params.parallax.enabled && n();
        }),
        a("setTranslate", () => {
          t.params.parallax.enabled && n();
        }),
        a("setTransition", (e, s) => {
          t.params.parallax.enabled &&
            (function (e) {
              void 0 === e && (e = t.params.speed);
              const { el: s, hostEl: a } = t,
                r = [...s.querySelectorAll(i)];
              t.isElement && r.push(...a.querySelectorAll(i)),
                r.forEach((t) => {
                  let s =
                    parseInt(
                      t.getAttribute("data-swiper-parallax-duration"),
                      10
                    ) || e;
                  0 === e && (s = 0), (t.style.transitionDuration = `${s}ms`);
                });
            })(s);
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      const n = r();
      s({
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: "swiper-zoom-container",
          zoomedSlideClass: "swiper-slide-zoomed",
        },
      }),
        (t.zoom = { enabled: !1 });
      let l,
        d,
        c = 1,
        p = !1;
      const u = [],
        m = {
          originX: 0,
          originY: 0,
          slideEl: void 0,
          slideWidth: void 0,
          slideHeight: void 0,
          imageEl: void 0,
          imageWrapEl: void 0,
          maxRatio: 3,
        },
        f = {
          isTouched: void 0,
          isMoved: void 0,
          currentX: void 0,
          currentY: void 0,
          minX: void 0,
          minY: void 0,
          maxX: void 0,
          maxY: void 0,
          width: void 0,
          height: void 0,
          startX: void 0,
          startY: void 0,
          touchesStart: {},
          touchesCurrent: {},
        },
        v = {
          x: void 0,
          y: void 0,
          prevPositionX: void 0,
          prevPositionY: void 0,
          prevTime: void 0,
        };
      let w = 1;
      function y() {
        if (u.length < 2) return 1;
        const e = u[0].pageX,
          t = u[0].pageY,
          s = u[1].pageX,
          a = u[1].pageY;
        return Math.sqrt((s - e) ** 2 + (a - t) ** 2);
      }
      function E(e) {
        const s = t.isElement ? "swiper-slide" : `.${t.params.slideClass}`;
        return (
          !!e.target.matches(s) ||
          t.slides.filter((t) => t.contains(e.target)).length > 0
        );
      }
      function x(e) {
        if (("mouse" === e.pointerType && u.splice(0, u.length), !E(e))) return;
        const s = t.params.zoom;
        if (((l = !1), (d = !1), u.push(e), !(u.length < 2))) {
          if (((l = !0), (m.scaleStart = y()), !m.slideEl)) {
            (m.slideEl = e.target.closest(
              `.${t.params.slideClass}, swiper-slide`
            )),
              m.slideEl || (m.slideEl = t.slides[t.activeIndex]);
            let a = m.slideEl.querySelector(`.${s.containerClass}`);
            if (
              (a &&
                (a = a.querySelectorAll(
                  "picture, img, svg, canvas, .swiper-zoom-target"
                )[0]),
              (m.imageEl = a),
              (m.imageWrapEl = a
                ? b(m.imageEl, `.${s.containerClass}`)[0]
                : void 0),
              !m.imageWrapEl)
            )
              return void (m.imageEl = void 0);
            m.maxRatio =
              m.imageWrapEl.getAttribute("data-swiper-zoom") || s.maxRatio;
          }
          if (m.imageEl) {
            const [e, t] = (function () {
              if (u.length < 2) return { x: null, y: null };
              const e = m.imageEl.getBoundingClientRect();
              return [
                (u[0].pageX + (u[1].pageX - u[0].pageX) / 2 - e.x) / c,
                (u[0].pageY + (u[1].pageY - u[0].pageY) / 2 - e.y) / c,
              ];
            })();
            (m.originX = e),
              (m.originY = t),
              (m.imageEl.style.transitionDuration = "0ms");
          }
          p = !0;
        }
      }
      function S(e) {
        if (!E(e)) return;
        const s = t.params.zoom,
          a = t.zoom,
          i = u.findIndex((t) => t.pointerId === e.pointerId);
        i >= 0 && (u[i] = e),
          u.length < 2 ||
            ((d = !0),
            (m.scaleMove = y()),
            m.imageEl &&
              ((a.scale = (m.scaleMove / m.scaleStart) * c),
              a.scale > m.maxRatio &&
                (a.scale = m.maxRatio - 1 + (a.scale - m.maxRatio + 1) ** 0.5),
              a.scale < s.minRatio &&
                (a.scale = s.minRatio + 1 - (s.minRatio - a.scale + 1) ** 0.5),
              (m.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`)));
      }
      function T(e) {
        if (!E(e)) return;
        if ("mouse" === e.pointerType && "pointerout" === e.type) return;
        const s = t.params.zoom,
          a = t.zoom,
          i = u.findIndex((t) => t.pointerId === e.pointerId);
        i >= 0 && u.splice(i, 1),
          l &&
            d &&
            ((l = !1),
            (d = !1),
            m.imageEl &&
              ((a.scale = Math.max(Math.min(a.scale, m.maxRatio), s.minRatio)),
              (m.imageEl.style.transitionDuration = `${t.params.speed}ms`),
              (m.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`),
              (c = a.scale),
              (p = !1),
              a.scale > 1 && m.slideEl
                ? m.slideEl.classList.add(`${s.zoomedSlideClass}`)
                : a.scale <= 1 &&
                  m.slideEl &&
                  m.slideEl.classList.remove(`${s.zoomedSlideClass}`),
              1 === a.scale &&
                ((m.originX = 0), (m.originY = 0), (m.slideEl = void 0))));
      }
      function M(e) {
        if (
          !E(e) ||
          !(function (e) {
            const s = `.${t.params.zoom.containerClass}`;
            return (
              !!e.target.matches(s) ||
              [...t.hostEl.querySelectorAll(s)].filter((t) =>
                t.contains(e.target)
              ).length > 0
            );
          })(e)
        )
          return;
        const s = t.zoom;
        if (!m.imageEl) return;
        if (!f.isTouched || !m.slideEl) return;
        f.isMoved ||
          ((f.width = m.imageEl.offsetWidth),
          (f.height = m.imageEl.offsetHeight),
          (f.startX = o(m.imageWrapEl, "x") || 0),
          (f.startY = o(m.imageWrapEl, "y") || 0),
          (m.slideWidth = m.slideEl.offsetWidth),
          (m.slideHeight = m.slideEl.offsetHeight),
          (m.imageWrapEl.style.transitionDuration = "0ms"));
        const a = f.width * s.scale,
          i = f.height * s.scale;
        if (a < m.slideWidth && i < m.slideHeight) return;
        (f.minX = Math.min(m.slideWidth / 2 - a / 2, 0)),
          (f.maxX = -f.minX),
          (f.minY = Math.min(m.slideHeight / 2 - i / 2, 0)),
          (f.maxY = -f.minY),
          (f.touchesCurrent.x = u.length > 0 ? u[0].pageX : e.pageX),
          (f.touchesCurrent.y = u.length > 0 ? u[0].pageY : e.pageY);
        if (
          (Math.max(
            Math.abs(f.touchesCurrent.x - f.touchesStart.x),
            Math.abs(f.touchesCurrent.y - f.touchesStart.y)
          ) > 5 && (t.allowClick = !1),
          !f.isMoved && !p)
        ) {
          if (
            t.isHorizontal() &&
            ((Math.floor(f.minX) === Math.floor(f.startX) &&
              f.touchesCurrent.x < f.touchesStart.x) ||
              (Math.floor(f.maxX) === Math.floor(f.startX) &&
                f.touchesCurrent.x > f.touchesStart.x))
          )
            return void (f.isTouched = !1);
          if (
            !t.isHorizontal() &&
            ((Math.floor(f.minY) === Math.floor(f.startY) &&
              f.touchesCurrent.y < f.touchesStart.y) ||
              (Math.floor(f.maxY) === Math.floor(f.startY) &&
                f.touchesCurrent.y > f.touchesStart.y))
          )
            return void (f.isTouched = !1);
        }
        e.cancelable && e.preventDefault(),
          e.stopPropagation(),
          (f.isMoved = !0);
        const r = (s.scale - c) / (m.maxRatio - t.params.zoom.minRatio),
          { originX: n, originY: l } = m;
        (f.currentX =
          f.touchesCurrent.x -
          f.touchesStart.x +
          f.startX +
          r * (f.width - 2 * n)),
          (f.currentY =
            f.touchesCurrent.y -
            f.touchesStart.y +
            f.startY +
            r * (f.height - 2 * l)),
          f.currentX < f.minX &&
            (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** 0.8),
          f.currentX > f.maxX &&
            (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** 0.8),
          f.currentY < f.minY &&
            (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** 0.8),
          f.currentY > f.maxY &&
            (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** 0.8),
          v.prevPositionX || (v.prevPositionX = f.touchesCurrent.x),
          v.prevPositionY || (v.prevPositionY = f.touchesCurrent.y),
          v.prevTime || (v.prevTime = Date.now()),
          (v.x =
            (f.touchesCurrent.x - v.prevPositionX) /
            (Date.now() - v.prevTime) /
            2),
          (v.y =
            (f.touchesCurrent.y - v.prevPositionY) /
            (Date.now() - v.prevTime) /
            2),
          Math.abs(f.touchesCurrent.x - v.prevPositionX) < 2 && (v.x = 0),
          Math.abs(f.touchesCurrent.y - v.prevPositionY) < 2 && (v.y = 0),
          (v.prevPositionX = f.touchesCurrent.x),
          (v.prevPositionY = f.touchesCurrent.y),
          (v.prevTime = Date.now()),
          (m.imageWrapEl.style.transform = `translate3d(${f.currentX}px, ${f.currentY}px,0)`);
      }
      function C() {
        const e = t.zoom;
        m.slideEl &&
          t.activeIndex !== t.slides.indexOf(m.slideEl) &&
          (m.imageEl &&
            (m.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
          m.imageWrapEl &&
            (m.imageWrapEl.style.transform = "translate3d(0,0,0)"),
          m.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`),
          (e.scale = 1),
          (c = 1),
          (m.slideEl = void 0),
          (m.imageEl = void 0),
          (m.imageWrapEl = void 0),
          (m.originX = 0),
          (m.originY = 0));
      }
      function P(e) {
        const s = t.zoom,
          a = t.params.zoom;
        if (!m.slideEl) {
          e &&
            e.target &&
            (m.slideEl = e.target.closest(
              `.${t.params.slideClass}, swiper-slide`
            )),
            m.slideEl ||
              (t.params.virtual && t.params.virtual.enabled && t.virtual
                ? (m.slideEl = h(
                    t.slidesEl,
                    `.${t.params.slideActiveClass}`
                  )[0])
                : (m.slideEl = t.slides[t.activeIndex]));
          let s = m.slideEl.querySelector(`.${a.containerClass}`);
          s &&
            (s = s.querySelectorAll(
              "picture, img, svg, canvas, .swiper-zoom-target"
            )[0]),
            (m.imageEl = s),
            (m.imageWrapEl = s
              ? b(m.imageEl, `.${a.containerClass}`)[0]
              : void 0);
        }
        if (!m.imageEl || !m.imageWrapEl) return;
        let i, r, l, o, d, p, u, v, w, y, E, x, S, T, M, C, P, L;
        t.params.cssMode &&
          ((t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.touchAction = "none")),
          m.slideEl.classList.add(`${a.zoomedSlideClass}`),
          void 0 === f.touchesStart.x && e
            ? ((i = e.pageX), (r = e.pageY))
            : ((i = f.touchesStart.x), (r = f.touchesStart.y));
        const z = "number" == typeof e ? e : null;
        1 === c && z && ((i = void 0), (r = void 0)),
          (s.scale =
            z || m.imageWrapEl.getAttribute("data-swiper-zoom") || a.maxRatio),
          (c =
            z || m.imageWrapEl.getAttribute("data-swiper-zoom") || a.maxRatio),
          !e || (1 === c && z)
            ? ((u = 0), (v = 0))
            : ((P = m.slideEl.offsetWidth),
              (L = m.slideEl.offsetHeight),
              (l = g(m.slideEl).left + n.scrollX),
              (o = g(m.slideEl).top + n.scrollY),
              (d = l + P / 2 - i),
              (p = o + L / 2 - r),
              (w = m.imageEl.offsetWidth),
              (y = m.imageEl.offsetHeight),
              (E = w * s.scale),
              (x = y * s.scale),
              (S = Math.min(P / 2 - E / 2, 0)),
              (T = Math.min(L / 2 - x / 2, 0)),
              (M = -S),
              (C = -T),
              (u = d * s.scale),
              (v = p * s.scale),
              u < S && (u = S),
              u > M && (u = M),
              v < T && (v = T),
              v > C && (v = C)),
          z && 1 === s.scale && ((m.originX = 0), (m.originY = 0)),
          (m.imageWrapEl.style.transitionDuration = "300ms"),
          (m.imageWrapEl.style.transform = `translate3d(${u}px, ${v}px,0)`),
          (m.imageEl.style.transitionDuration = "300ms"),
          (m.imageEl.style.transform = `translate3d(0,0,0) scale(${s.scale})`);
      }
      function L() {
        const e = t.zoom,
          s = t.params.zoom;
        if (!m.slideEl) {
          t.params.virtual && t.params.virtual.enabled && t.virtual
            ? (m.slideEl = h(t.slidesEl, `.${t.params.slideActiveClass}`)[0])
            : (m.slideEl = t.slides[t.activeIndex]);
          let e = m.slideEl.querySelector(`.${s.containerClass}`);
          e &&
            (e = e.querySelectorAll(
              "picture, img, svg, canvas, .swiper-zoom-target"
            )[0]),
            (m.imageEl = e),
            (m.imageWrapEl = e
              ? b(m.imageEl, `.${s.containerClass}`)[0]
              : void 0);
        }
        m.imageEl &&
          m.imageWrapEl &&
          (t.params.cssMode &&
            ((t.wrapperEl.style.overflow = ""),
            (t.wrapperEl.style.touchAction = "")),
          (e.scale = 1),
          (c = 1),
          (m.imageWrapEl.style.transitionDuration = "300ms"),
          (m.imageWrapEl.style.transform = "translate3d(0,0,0)"),
          (m.imageEl.style.transitionDuration = "300ms"),
          (m.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
          m.slideEl.classList.remove(`${s.zoomedSlideClass}`),
          (m.slideEl = void 0),
          (m.originX = 0),
          (m.originY = 0));
      }
      function z(e) {
        const s = t.zoom;
        s.scale && 1 !== s.scale ? L() : P(e);
      }
      function A() {
        return {
          passiveListener: !!t.params.passiveListeners && {
            passive: !0,
            capture: !1,
          },
          activeListenerWithCapture: !t.params.passiveListeners || {
            passive: !1,
            capture: !0,
          },
        };
      }
      function $() {
        const e = t.zoom;
        if (e.enabled) return;
        e.enabled = !0;
        const { passiveListener: s, activeListenerWithCapture: a } = A();
        t.wrapperEl.addEventListener("pointerdown", x, s),
          t.wrapperEl.addEventListener("pointermove", S, a),
          ["pointerup", "pointercancel", "pointerout"].forEach((e) => {
            t.wrapperEl.addEventListener(e, T, s);
          }),
          t.wrapperEl.addEventListener("pointermove", M, a);
      }
      function I() {
        const e = t.zoom;
        if (!e.enabled) return;
        e.enabled = !1;
        const { passiveListener: s, activeListenerWithCapture: a } = A();
        t.wrapperEl.removeEventListener("pointerdown", x, s),
          t.wrapperEl.removeEventListener("pointermove", S, a),
          ["pointerup", "pointercancel", "pointerout"].forEach((e) => {
            t.wrapperEl.removeEventListener(e, T, s);
          }),
          t.wrapperEl.removeEventListener("pointermove", M, a);
      }
      Object.defineProperty(t.zoom, "scale", {
        get: () => w,
        set(e) {
          if (w !== e) {
            const t = m.imageEl,
              s = m.slideEl;
            i("zoomChange", e, t, s);
          }
          w = e;
        },
      }),
        a("init", () => {
          t.params.zoom.enabled && $();
        }),
        a("destroy", () => {
          I();
        }),
        a("touchStart", (e, s) => {
          t.zoom.enabled &&
            (function (e) {
              const s = t.device;
              if (!m.imageEl) return;
              if (f.isTouched) return;
              s.android && e.cancelable && e.preventDefault(),
                (f.isTouched = !0);
              const a = u.length > 0 ? u[0] : e;
              (f.touchesStart.x = a.pageX), (f.touchesStart.y = a.pageY);
            })(s);
        }),
        a("touchEnd", (e, s) => {
          t.zoom.enabled &&
            (function () {
              const e = t.zoom;
              if (!m.imageEl) return;
              if (!f.isTouched || !f.isMoved)
                return (f.isTouched = !1), void (f.isMoved = !1);
              (f.isTouched = !1), (f.isMoved = !1);
              let s = 300,
                a = 300;
              const i = v.x * s,
                r = f.currentX + i,
                n = v.y * a,
                l = f.currentY + n;
              0 !== v.x && (s = Math.abs((r - f.currentX) / v.x)),
                0 !== v.y && (a = Math.abs((l - f.currentY) / v.y));
              const o = Math.max(s, a);
              (f.currentX = r), (f.currentY = l);
              const d = f.width * e.scale,
                c = f.height * e.scale;
              (f.minX = Math.min(m.slideWidth / 2 - d / 2, 0)),
                (f.maxX = -f.minX),
                (f.minY = Math.min(m.slideHeight / 2 - c / 2, 0)),
                (f.maxY = -f.minY),
                (f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX)),
                (f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY)),
                (m.imageWrapEl.style.transitionDuration = `${o}ms`),
                (m.imageWrapEl.style.transform = `translate3d(${f.currentX}px, ${f.currentY}px,0)`);
            })();
        }),
        a("doubleTap", (e, s) => {
          !t.animating &&
            t.params.zoom.enabled &&
            t.zoom.enabled &&
            t.params.zoom.toggle &&
            z(s);
        }),
        a("transitionEnd", () => {
          t.zoom.enabled && t.params.zoom.enabled && C();
        }),
        a("slideChange", () => {
          t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C();
        }),
        Object.assign(t.zoom, {
          enable: $,
          disable: I,
          in: P,
          out: L,
          toggle: z,
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      function i(e, t) {
        const s = (function () {
          let e, t, s;
          return (a, i) => {
            for (t = -1, e = a.length; e - t > 1; )
              (s = (e + t) >> 1), a[s] <= i ? (t = s) : (e = s);
            return e;
          };
        })();
        let a, i;
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((i = s(this.x, e)),
                (a = i - 1),
                ((e - this.x[a]) * (this.y[i] - this.y[a])) /
                  (this.x[i] - this.x[a]) +
                  this.y[a])
              : 0;
          }),
          this
        );
      }
      function r() {
        t.controller.control &&
          t.controller.spline &&
          ((t.controller.spline = void 0), delete t.controller.spline);
      }
      s({ controller: { control: void 0, inverse: !1, by: "slide" } }),
        (t.controller = { control: void 0 }),
        a("beforeInit", () => {
          if (
            "undefined" != typeof window &&
            ("string" == typeof t.params.controller.control ||
              t.params.controller.control instanceof HTMLElement)
          ) {
            const e = document.querySelector(t.params.controller.control);
            if (e && e.swiper) t.controller.control = e.swiper;
            else if (e) {
              const s = (a) => {
                (t.controller.control = a.detail[0]),
                  t.update(),
                  e.removeEventListener("init", s);
              };
              e.addEventListener("init", s);
            }
          } else t.controller.control = t.params.controller.control;
        }),
        a("update", () => {
          r();
        }),
        a("resize", () => {
          r();
        }),
        a("observerUpdate", () => {
          r();
        }),
        a("setTranslate", (e, s, a) => {
          t.controller.control &&
            !t.controller.control.destroyed &&
            t.controller.setTranslate(s, a);
        }),
        a("setTransition", (e, s, a) => {
          t.controller.control &&
            !t.controller.control.destroyed &&
            t.controller.setTransition(s, a);
        }),
        Object.assign(t.controller, {
          setTranslate: function (e, s) {
            const a = t.controller.control;
            let r, n;
            const l = t.constructor;
            function o(e) {
              if (e.destroyed) return;
              const s = t.rtlTranslate ? -t.translate : t.translate;
              "slide" === t.params.controller.by &&
                (!(function (e) {
                  t.controller.spline = t.params.loop
                    ? new i(t.slidesGrid, e.slidesGrid)
                    : new i(t.snapGrid, e.snapGrid);
                })(e),
                (n = -t.controller.spline.interpolate(-s))),
                (n && "container" !== t.params.controller.by) ||
                  ((r =
                    (e.maxTranslate() - e.minTranslate()) /
                    (t.maxTranslate() - t.minTranslate())),
                  (!Number.isNaN(r) && Number.isFinite(r)) || (r = 1),
                  (n = (s - t.minTranslate()) * r + e.minTranslate())),
                t.params.controller.inverse && (n = e.maxTranslate() - n),
                e.updateProgress(n),
                e.setTranslate(n, t),
                e.updateActiveIndex(),
                e.updateSlidesClasses();
            }
            if (Array.isArray(a))
              for (let e = 0; e < a.length; e += 1)
                a[e] !== s && a[e] instanceof l && o(a[e]);
            else a instanceof l && s !== a && o(a);
          },
          setTransition: function (e, s) {
            const a = t.constructor,
              i = t.controller.control;
            let r;
            function l(s) {
              s.destroyed ||
                (s.setTransition(e, t),
                0 !== e &&
                  (s.transitionStart(),
                  s.params.autoHeight &&
                    n(() => {
                      s.updateAutoHeight();
                    }),
                  y(s.wrapperEl, () => {
                    i && s.transitionEnd();
                  })));
            }
            if (Array.isArray(i))
              for (r = 0; r < i.length; r += 1)
                i[r] !== s && i[r] instanceof a && l(i[r]);
            else i instanceof a && s !== i && l(i);
          },
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}",
          slideLabelMessage: "{{index}} / {{slidesLength}}",
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null,
          slideRole: "group",
          id: null,
        },
      }),
        (t.a11y = { clicked: !1 });
      let i = null;
      function r(e) {
        const t = i;
        0 !== t.length && ((t.innerHTML = ""), (t.innerHTML = e));
      }
      const n = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      function l(e) {
        (e = n(e)).forEach((e) => {
          e.setAttribute("tabIndex", "0");
        });
      }
      function o(e) {
        (e = n(e)).forEach((e) => {
          e.setAttribute("tabIndex", "-1");
        });
      }
      function d(e, t) {
        (e = n(e)).forEach((e) => {
          e.setAttribute("role", t);
        });
      }
      function c(e, t) {
        (e = n(e)).forEach((e) => {
          e.setAttribute("aria-roledescription", t);
        });
      }
      function p(e, t) {
        (e = n(e)).forEach((e) => {
          e.setAttribute("aria-label", t);
        });
      }
      function u(e) {
        (e = n(e)).forEach((e) => {
          e.setAttribute("aria-disabled", !0);
        });
      }
      function m(e) {
        (e = n(e)).forEach((e) => {
          e.setAttribute("aria-disabled", !1);
        });
      }
      function h(e) {
        if (13 !== e.keyCode && 32 !== e.keyCode) return;
        const s = t.params.a11y,
          a = e.target;
        (t.pagination &&
          t.pagination.el &&
          (a === t.pagination.el || t.pagination.el.contains(e.target)) &&
          !e.target.matches(ee(t.params.pagination.bulletClass))) ||
          (t.navigation &&
            t.navigation.nextEl &&
            a === t.navigation.nextEl &&
            ((t.isEnd && !t.params.loop) || t.slideNext(),
            t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)),
          t.navigation &&
            t.navigation.prevEl &&
            a === t.navigation.prevEl &&
            ((t.isBeginning && !t.params.loop) || t.slidePrev(),
            t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)),
          t.pagination &&
            a.matches(ee(t.params.pagination.bulletClass)) &&
            a.click());
      }
      function g() {
        return (
          t.pagination && t.pagination.bullets && t.pagination.bullets.length
        );
      }
      function v() {
        return g() && t.params.pagination.clickable;
      }
      const b = (e, t, s) => {
          l(e),
            "BUTTON" !== e.tagName &&
              (d(e, "button"), e.addEventListener("keydown", h)),
            p(e, s),
            (function (e, t) {
              (e = n(e)).forEach((e) => {
                e.setAttribute("aria-controls", t);
              });
            })(e, t);
        },
        y = () => {
          t.a11y.clicked = !0;
        },
        E = () => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              t.destroyed || (t.a11y.clicked = !1);
            });
          });
        },
        x = (e) => {
          if (t.a11y.clicked) return;
          const s = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
          if (!s || !t.slides.includes(s)) return;
          const a = t.slides.indexOf(s) === t.activeIndex,
            i =
              t.params.watchSlidesProgress &&
              t.visibleSlides &&
              t.visibleSlides.includes(s);
          a ||
            i ||
            (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) ||
            (t.isHorizontal() ? (t.el.scrollLeft = 0) : (t.el.scrollTop = 0),
            t.slideTo(t.slides.indexOf(s), 0));
        },
        S = () => {
          const e = t.params.a11y;
          e.itemRoleDescriptionMessage &&
            c(t.slides, e.itemRoleDescriptionMessage),
            e.slideRole && d(t.slides, e.slideRole);
          const s = t.slides.length;
          e.slideLabelMessage &&
            t.slides.forEach((a, i) => {
              const r = t.params.loop
                ? parseInt(a.getAttribute("data-swiper-slide-index"), 10)
                : i;
              p(
                a,
                e.slideLabelMessage
                  .replace(/\{\{index\}\}/, r + 1)
                  .replace(/\{\{slidesLength\}\}/, s)
              );
            });
        },
        T = () => {
          const e = t.params.a11y;
          t.el.append(i);
          const s = t.el;
          e.containerRoleDescriptionMessage &&
            c(s, e.containerRoleDescriptionMessage),
            e.containerMessage && p(s, e.containerMessage);
          const a = t.wrapperEl,
            r =
              e.id ||
              a.getAttribute("id") ||
              `swiper-wrapper-${
                ((l = 16),
                void 0 === l && (l = 16),
                "x"
                  .repeat(l)
                  .replace(/x/g, () =>
                    Math.round(16 * Math.random()).toString(16)
                  ))
              }`;
          var l;
          const o =
            t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
          var d;
          (d = r),
            n(a).forEach((e) => {
              e.setAttribute("id", d);
            }),
            (function (e, t) {
              (e = n(e)).forEach((e) => {
                e.setAttribute("aria-live", t);
              });
            })(a, o),
            S();
          let { nextEl: u, prevEl: m } = t.navigation ? t.navigation : {};
          if (
            ((u = n(u)),
            (m = n(m)),
            u && u.forEach((t) => b(t, r, e.nextSlideMessage)),
            m && m.forEach((t) => b(t, r, e.prevSlideMessage)),
            v())
          ) {
            (Array.isArray(t.pagination.el)
              ? t.pagination.el
              : [t.pagination.el]
            ).forEach((e) => {
              e.addEventListener("keydown", h);
            });
          }
          t.el.addEventListener("focus", x, !0),
            t.el.addEventListener("pointerdown", y, !0),
            t.el.addEventListener("pointerup", E, !0);
        };
      a("beforeInit", () => {
        (i = f("span", t.params.a11y.notificationClass)),
          i.setAttribute("aria-live", "assertive"),
          i.setAttribute("aria-atomic", "true");
      }),
        a("afterInit", () => {
          t.params.a11y.enabled && T();
        }),
        a(
          "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
          () => {
            t.params.a11y.enabled && S();
          }
        ),
        a("fromEdge toEdge afterInit lock unlock", () => {
          t.params.a11y.enabled &&
            (function () {
              if (t.params.loop || t.params.rewind || !t.navigation) return;
              const { nextEl: e, prevEl: s } = t.navigation;
              s && (t.isBeginning ? (u(s), o(s)) : (m(s), l(s))),
                e && (t.isEnd ? (u(e), o(e)) : (m(e), l(e)));
            })();
        }),
        a("paginationUpdate", () => {
          t.params.a11y.enabled &&
            (function () {
              const e = t.params.a11y;
              g() &&
                t.pagination.bullets.forEach((s) => {
                  t.params.pagination.clickable &&
                    (l(s),
                    t.params.pagination.renderBullet ||
                      (d(s, "button"),
                      p(
                        s,
                        e.paginationBulletMessage.replace(
                          /\{\{index\}\}/,
                          w(s) + 1
                        )
                      ))),
                    s.matches(ee(t.params.pagination.bulletActiveClass))
                      ? s.setAttribute("aria-current", "true")
                      : s.removeAttribute("aria-current");
                });
            })();
        }),
        a("destroy", () => {
          t.params.a11y.enabled &&
            (function () {
              i && i.remove();
              let { nextEl: e, prevEl: s } = t.navigation ? t.navigation : {};
              (e = n(e)),
                (s = n(s)),
                e && e.forEach((e) => e.removeEventListener("keydown", h)),
                s && s.forEach((e) => e.removeEventListener("keydown", h)),
                v() &&
                  (Array.isArray(t.pagination.el)
                    ? t.pagination.el
                    : [t.pagination.el]
                  ).forEach((e) => {
                    e.removeEventListener("keydown", h);
                  });
              t.el.removeEventListener("focus", x, !0),
                t.el.removeEventListener("pointerdown", y, !0),
                t.el.removeEventListener("pointerup", E, !0);
            })();
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        history: {
          enabled: !1,
          root: "",
          replaceState: !1,
          key: "slides",
          keepQuery: !1,
        },
      });
      let i = !1,
        n = {};
      const l = (e) =>
          e
            .toString()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "")
            .replace(/--+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, ""),
        o = (e) => {
          const t = r();
          let s;
          s = e ? new URL(e) : t.location;
          const a = s.pathname
              .slice(1)
              .split("/")
              .filter((e) => "" !== e),
            i = a.length;
          return { key: a[i - 2], value: a[i - 1] };
        },
        d = (e, s) => {
          const a = r();
          if (!i || !t.params.history.enabled) return;
          let n;
          n = t.params.url ? new URL(t.params.url) : a.location;
          const o = t.slides[s];
          let d = l(o.getAttribute("data-history"));
          if (t.params.history.root.length > 0) {
            let s = t.params.history.root;
            "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)),
              (d = `${s}/${e ? `${e}/` : ""}${d}`);
          } else n.pathname.includes(e) || (d = `${e ? `${e}/` : ""}${d}`);
          t.params.history.keepQuery && (d += n.search);
          const c = a.history.state;
          (c && c.value === d) ||
            (t.params.history.replaceState
              ? a.history.replaceState({ value: d }, null, d)
              : a.history.pushState({ value: d }, null, d));
        },
        c = (e, s, a) => {
          if (s)
            for (let i = 0, r = t.slides.length; i < r; i += 1) {
              const r = t.slides[i];
              if (l(r.getAttribute("data-history")) === s) {
                const s = t.getSlideIndex(r);
                t.slideTo(s, e, a);
              }
            }
          else t.slideTo(0, e, a);
        },
        p = () => {
          (n = o(t.params.url)), c(t.params.speed, n.value, !1);
        };
      a("init", () => {
        t.params.history.enabled &&
          (() => {
            const e = r();
            if (t.params.history) {
              if (!e.history || !e.history.pushState)
                return (
                  (t.params.history.enabled = !1),
                  void (t.params.hashNavigation.enabled = !0)
                );
              (i = !0),
                (n = o(t.params.url)),
                n.key || n.value
                  ? (c(0, n.value, t.params.runCallbacksOnInit),
                    t.params.history.replaceState ||
                      e.addEventListener("popstate", p))
                  : t.params.history.replaceState ||
                    e.addEventListener("popstate", p);
            }
          })();
      }),
        a("destroy", () => {
          t.params.history.enabled &&
            (() => {
              const e = r();
              t.params.history.replaceState ||
                e.removeEventListener("popstate", p);
            })();
        }),
        a("transitionEnd _freeModeNoMomentumRelease", () => {
          i && d(t.params.history.key, t.activeIndex);
        }),
        a("slideChange", () => {
          i && t.params.cssMode && d(t.params.history.key, t.activeIndex);
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, emit: i, on: n } = e,
        l = !1;
      const o = a(),
        d = r();
      s({
        hashNavigation: {
          enabled: !1,
          replaceState: !1,
          watchState: !1,
          getSlideIndex(e, s) {
            if (t.virtual && t.params.virtual.enabled) {
              const e = t.slides.filter(
                (e) => e.getAttribute("data-hash") === s
              )[0];
              if (!e) return 0;
              return parseInt(e.getAttribute("data-swiper-slide-index"), 10);
            }
            return t.getSlideIndex(
              h(
                t.slidesEl,
                `.${t.params.slideClass}[data-hash="${s}"], swiper-slide[data-hash="${s}"]`
              )[0]
            );
          },
        },
      });
      const c = () => {
          i("hashChange");
          const e = o.location.hash.replace("#", ""),
            s =
              t.virtual && t.params.virtual.enabled
                ? t.slidesEl.querySelector(
                    `[data-swiper-slide-index="${t.activeIndex}"]`
                  )
                : t.slides[t.activeIndex];
          if (e !== (s ? s.getAttribute("data-hash") : "")) {
            const s = t.params.hashNavigation.getSlideIndex(t, e);
            if (void 0 === s || Number.isNaN(s)) return;
            t.slideTo(s);
          }
        },
        p = () => {
          if (!l || !t.params.hashNavigation.enabled) return;
          const e =
              t.virtual && t.params.virtual.enabled
                ? t.slidesEl.querySelector(
                    `[data-swiper-slide-index="${t.activeIndex}"]`
                  )
                : t.slides[t.activeIndex],
            s = e
              ? e.getAttribute("data-hash") || e.getAttribute("data-history")
              : "";
          t.params.hashNavigation.replaceState &&
          d.history &&
          d.history.replaceState
            ? (d.history.replaceState(null, null, `#${s}` || ""), i("hashSet"))
            : ((o.location.hash = s || ""), i("hashSet"));
        };
      n("init", () => {
        t.params.hashNavigation.enabled &&
          (() => {
            if (
              !t.params.hashNavigation.enabled ||
              (t.params.history && t.params.history.enabled)
            )
              return;
            l = !0;
            const e = o.location.hash.replace("#", "");
            if (e) {
              const s = 0,
                a = t.params.hashNavigation.getSlideIndex(t, e);
              t.slideTo(a || 0, s, t.params.runCallbacksOnInit, !0);
            }
            t.params.hashNavigation.watchState &&
              d.addEventListener("hashchange", c);
          })();
      }),
        n("destroy", () => {
          t.params.hashNavigation.enabled &&
            t.params.hashNavigation.watchState &&
            d.removeEventListener("hashchange", c);
        }),
        n("transitionEnd _freeModeNoMomentumRelease", () => {
          l && p();
        }),
        n("slideChange", () => {
          l && t.params.cssMode && p();
        });
    },
    function (e) {
      let t,
        s,
        { swiper: i, extendParams: r, on: n, emit: l, params: o } = e;
      (i.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
        r({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        });
      let d,
        c,
        p,
        u,
        m,
        h,
        f,
        g = o && o.autoplay ? o.autoplay.delay : 3e3,
        v = o && o.autoplay ? o.autoplay.delay : 3e3,
        w = new Date().getTime;
      function b(e) {
        i &&
          !i.destroyed &&
          i.wrapperEl &&
          e.target === i.wrapperEl &&
          (i.wrapperEl.removeEventListener("transitionend", b), M());
      }
      const y = () => {
          if (i.destroyed || !i.autoplay.running) return;
          i.autoplay.paused ? (c = !0) : c && ((v = d), (c = !1));
          const e = i.autoplay.paused ? d : w + v - new Date().getTime();
          (i.autoplay.timeLeft = e),
            l("autoplayTimeLeft", e, e / g),
            (s = requestAnimationFrame(() => {
              y();
            }));
        },
        E = (e) => {
          if (i.destroyed || !i.autoplay.running) return;
          cancelAnimationFrame(s), y();
          let a = void 0 === e ? i.params.autoplay.delay : e;
          (g = i.params.autoplay.delay), (v = i.params.autoplay.delay);
          const r = (() => {
            let e;
            if (
              ((e =
                i.virtual && i.params.virtual.enabled
                  ? i.slides.filter((e) =>
                      e.classList.contains("swiper-slide-active")
                    )[0]
                  : i.slides[i.activeIndex]),
              !e)
            )
              return;
            return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
          })();
          !Number.isNaN(r) &&
            r > 0 &&
            void 0 === e &&
            ((a = r), (g = r), (v = r)),
            (d = a);
          const n = i.params.speed,
            o = () => {
              i &&
                !i.destroyed &&
                (i.params.autoplay.reverseDirection
                  ? !i.isBeginning || i.params.loop || i.params.rewind
                    ? (i.slidePrev(n, !0, !0), l("autoplay"))
                    : i.params.autoplay.stopOnLastSlide ||
                      (i.slideTo(i.slides.length - 1, n, !0, !0), l("autoplay"))
                  : !i.isEnd || i.params.loop || i.params.rewind
                  ? (i.slideNext(n, !0, !0), l("autoplay"))
                  : i.params.autoplay.stopOnLastSlide ||
                    (i.slideTo(0, n, !0, !0), l("autoplay")),
                i.params.cssMode &&
                  ((w = new Date().getTime()),
                  requestAnimationFrame(() => {
                    E();
                  })));
            };
          return (
            a > 0
              ? (clearTimeout(t),
                (t = setTimeout(() => {
                  o();
                }, a)))
              : requestAnimationFrame(() => {
                  o();
                }),
            a
          );
        },
        x = () => {
          (i.autoplay.running = !0), E(), l("autoplayStart");
        },
        S = () => {
          (i.autoplay.running = !1),
            clearTimeout(t),
            cancelAnimationFrame(s),
            l("autoplayStop");
        },
        T = (e, s) => {
          if (i.destroyed || !i.autoplay.running) return;
          clearTimeout(t), e || (f = !0);
          const a = () => {
            l("autoplayPause"),
              i.params.autoplay.waitForTransition
                ? i.wrapperEl.addEventListener("transitionend", b)
                : M();
          };
          if (((i.autoplay.paused = !0), s))
            return h && (d = i.params.autoplay.delay), (h = !1), void a();
          const r = d || i.params.autoplay.delay;
          (d = r - (new Date().getTime() - w)),
            (i.isEnd && d < 0 && !i.params.loop) || (d < 0 && (d = 0), a());
        },
        M = () => {
          (i.isEnd && d < 0 && !i.params.loop) ||
            i.destroyed ||
            !i.autoplay.running ||
            ((w = new Date().getTime()),
            f ? ((f = !1), E(d)) : E(),
            (i.autoplay.paused = !1),
            l("autoplayResume"));
        },
        C = () => {
          if (i.destroyed || !i.autoplay.running) return;
          const e = a();
          "hidden" === e.visibilityState && ((f = !0), T(!0)),
            "visible" === e.visibilityState && M();
        },
        P = (e) => {
          "mouse" === e.pointerType &&
            ((f = !0), i.animating || i.autoplay.paused || T(!0));
        },
        L = (e) => {
          "mouse" === e.pointerType && i.autoplay.paused && M();
        };
      n("init", () => {
        i.params.autoplay.enabled &&
          (i.params.autoplay.pauseOnMouseEnter &&
            (i.el.addEventListener("pointerenter", P),
            i.el.addEventListener("pointerleave", L)),
          a().addEventListener("visibilitychange", C),
          (w = new Date().getTime()),
          x());
      }),
        n("destroy", () => {
          i.el.removeEventListener("pointerenter", P),
            i.el.removeEventListener("pointerleave", L),
            a().removeEventListener("visibilitychange", C),
            i.autoplay.running && S();
        }),
        n("beforeTransitionStart", (e, t, s) => {
          !i.destroyed &&
            i.autoplay.running &&
            (s || !i.params.autoplay.disableOnInteraction ? T(!0, !0) : S());
        }),
        n("sliderFirstMove", () => {
          !i.destroyed &&
            i.autoplay.running &&
            (i.params.autoplay.disableOnInteraction
              ? S()
              : ((p = !0),
                (u = !1),
                (f = !1),
                (m = setTimeout(() => {
                  (f = !0), (u = !0), T(!0);
                }, 200))));
        }),
        n("touchEnd", () => {
          if (!i.destroyed && i.autoplay.running && p) {
            if (
              (clearTimeout(m),
              clearTimeout(t),
              i.params.autoplay.disableOnInteraction)
            )
              return (u = !1), void (p = !1);
            u && i.params.cssMode && M(), (u = !1), (p = !1);
          }
        }),
        n("slideChange", () => {
          !i.destroyed && i.autoplay.running && (h = !0);
        }),
        Object.assign(i.autoplay, { start: x, stop: S, pause: T, resume: M });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i } = e;
      s({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-thumbs",
        },
      });
      let r = !1,
        n = !1;
      function l() {
        const e = t.thumbs.swiper;
        if (!e || e.destroyed) return;
        const s = e.clickedIndex,
          a = e.clickedSlide;
        if (a && a.classList.contains(t.params.thumbs.slideThumbActiveClass))
          return;
        if (null == s) return;
        let i;
        (i = e.params.loop
          ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)
          : s),
          t.params.loop ? t.slideToLoop(i) : t.slideTo(i);
      }
      function o() {
        const { thumbs: e } = t.params;
        if (r) return !1;
        r = !0;
        const s = t.constructor;
        if (e.swiper instanceof s)
          (t.thumbs.swiper = e.swiper),
            Object.assign(t.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            Object.assign(t.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            t.thumbs.swiper.update();
        else if (d(e.swiper)) {
          const a = Object.assign({}, e.swiper);
          Object.assign(a, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
            (t.thumbs.swiper = new s(a)),
            (n = !0);
        }
        return (
          t.thumbs.swiper.el.classList.add(
            t.params.thumbs.thumbsContainerClass
          ),
          t.thumbs.swiper.on("tap", l),
          !0
        );
      }
      function c(e) {
        const s = t.thumbs.swiper;
        if (!s || s.destroyed) return;
        const a =
          "auto" === s.params.slidesPerView
            ? s.slidesPerViewDynamic()
            : s.params.slidesPerView;
        let i = 1;
        const r = t.params.thumbs.slideThumbActiveClass;
        if (
          (t.params.slidesPerView > 1 &&
            !t.params.centeredSlides &&
            (i = t.params.slidesPerView),
          t.params.thumbs.multipleActiveThumbs || (i = 1),
          (i = Math.floor(i)),
          s.slides.forEach((e) => e.classList.remove(r)),
          s.params.loop || (s.params.virtual && s.params.virtual.enabled))
        )
          for (let e = 0; e < i; e += 1)
            h(
              s.slidesEl,
              `[data-swiper-slide-index="${t.realIndex + e}"]`
            ).forEach((e) => {
              e.classList.add(r);
            });
        else
          for (let e = 0; e < i; e += 1)
            s.slides[t.realIndex + e] &&
              s.slides[t.realIndex + e].classList.add(r);
        const n = t.params.thumbs.autoScrollOffset,
          l = n && !s.params.loop;
        if (t.realIndex !== s.realIndex || l) {
          const i = s.activeIndex;
          let r, o;
          if (s.params.loop) {
            const e = s.slides.filter(
              (e) =>
                e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`
            )[0];
            (r = s.slides.indexOf(e)),
              (o = t.activeIndex > t.previousIndex ? "next" : "prev");
          } else (r = t.realIndex), (o = r > t.previousIndex ? "next" : "prev");
          l && (r += "next" === o ? n : -1 * n),
            s.visibleSlidesIndexes &&
              s.visibleSlidesIndexes.indexOf(r) < 0 &&
              (s.params.centeredSlides
                ? (r =
                    r > i
                      ? r - Math.floor(a / 2) + 1
                      : r + Math.floor(a / 2) - 1)
                : r > i && s.params.slidesPerGroup,
              s.slideTo(r, e ? 0 : void 0));
        }
      }
      (t.thumbs = { swiper: null }),
        i("beforeInit", () => {
          const { thumbs: e } = t.params;
          if (e && e.swiper)
            if (
              "string" == typeof e.swiper ||
              e.swiper instanceof HTMLElement
            ) {
              const s = a(),
                i = () => {
                  const a =
                    "string" == typeof e.swiper
                      ? s.querySelector(e.swiper)
                      : e.swiper;
                  if (a && a.swiper) (e.swiper = a.swiper), o(), c(!0);
                  else if (a) {
                    const s = (i) => {
                      (e.swiper = i.detail[0]),
                        a.removeEventListener("init", s),
                        o(),
                        c(!0),
                        e.swiper.update(),
                        t.update();
                    };
                    a.addEventListener("init", s);
                  }
                  return a;
                },
                r = () => {
                  if (t.destroyed) return;
                  i() || requestAnimationFrame(r);
                };
              requestAnimationFrame(r);
            } else o(), c(!0);
        }),
        i("slideChange update resize observerUpdate", () => {
          c();
        }),
        i("setTransition", (e, s) => {
          const a = t.thumbs.swiper;
          a && !a.destroyed && a.setTransition(s);
        }),
        i("beforeDestroy", () => {
          const e = t.thumbs.swiper;
          e && !e.destroyed && n && e.destroy();
        }),
        Object.assign(t.thumbs, { init: o, update: c });
    },
    function (e) {
      let { swiper: t, extendParams: s, emit: a, once: i } = e;
      s({
        freeMode: {
          enabled: !1,
          momentum: !0,
          momentumRatio: 1,
          momentumBounce: !0,
          momentumBounceRatio: 1,
          momentumVelocityRatio: 1,
          sticky: !1,
          minimumVelocity: 0.02,
        },
      }),
        Object.assign(t, {
          freeMode: {
            onTouchStart: function () {
              if (t.params.cssMode) return;
              const e = t.getTranslate();
              t.setTranslate(e),
                t.setTransition(0),
                (t.touchEventsData.velocities.length = 0),
                t.freeMode.onTouchEnd({
                  currentPos: t.rtl ? t.translate : -t.translate,
                });
            },
            onTouchMove: function () {
              if (t.params.cssMode) return;
              const { touchEventsData: e, touches: s } = t;
              0 === e.velocities.length &&
                e.velocities.push({
                  position: s[t.isHorizontal() ? "startX" : "startY"],
                  time: e.touchStartTime,
                }),
                e.velocities.push({
                  position: s[t.isHorizontal() ? "currentX" : "currentY"],
                  time: l(),
                });
            },
            onTouchEnd: function (e) {
              let { currentPos: s } = e;
              if (t.params.cssMode) return;
              const {
                  params: r,
                  wrapperEl: n,
                  rtlTranslate: o,
                  snapGrid: d,
                  touchEventsData: c,
                } = t,
                p = l() - c.touchStartTime;
              if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
              else if (s > -t.maxTranslate())
                t.slides.length < d.length
                  ? t.slideTo(d.length - 1)
                  : t.slideTo(t.slides.length - 1);
              else {
                if (r.freeMode.momentum) {
                  if (c.velocities.length > 1) {
                    const e = c.velocities.pop(),
                      s = c.velocities.pop(),
                      a = e.position - s.position,
                      i = e.time - s.time;
                    (t.velocity = a / i),
                      (t.velocity /= 2),
                      Math.abs(t.velocity) < r.freeMode.minimumVelocity &&
                        (t.velocity = 0),
                      (i > 150 || l() - e.time > 300) && (t.velocity = 0);
                  } else t.velocity = 0;
                  (t.velocity *= r.freeMode.momentumVelocityRatio),
                    (c.velocities.length = 0);
                  let e = 1e3 * r.freeMode.momentumRatio;
                  const s = t.velocity * e;
                  let p = t.translate + s;
                  o && (p = -p);
                  let u,
                    m = !1;
                  const h =
                    20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                  let f;
                  if (p < t.maxTranslate())
                    r.freeMode.momentumBounce
                      ? (p + t.maxTranslate() < -h &&
                          (p = t.maxTranslate() - h),
                        (u = t.maxTranslate()),
                        (m = !0),
                        (c.allowMomentumBounce = !0))
                      : (p = t.maxTranslate()),
                      r.loop && r.centeredSlides && (f = !0);
                  else if (p > t.minTranslate())
                    r.freeMode.momentumBounce
                      ? (p - t.minTranslate() > h && (p = t.minTranslate() + h),
                        (u = t.minTranslate()),
                        (m = !0),
                        (c.allowMomentumBounce = !0))
                      : (p = t.minTranslate()),
                      r.loop && r.centeredSlides && (f = !0);
                  else if (r.freeMode.sticky) {
                    let e;
                    for (let t = 0; t < d.length; t += 1)
                      if (d[t] > -p) {
                        e = t;
                        break;
                      }
                    (p =
                      Math.abs(d[e] - p) < Math.abs(d[e - 1] - p) ||
                      "next" === t.swipeDirection
                        ? d[e]
                        : d[e - 1]),
                      (p = -p);
                  }
                  if (
                    (f &&
                      i("transitionEnd", () => {
                        t.loopFix();
                      }),
                    0 !== t.velocity)
                  ) {
                    if (
                      ((e = o
                        ? Math.abs((-p - t.translate) / t.velocity)
                        : Math.abs((p - t.translate) / t.velocity)),
                      r.freeMode.sticky)
                    ) {
                      const s = Math.abs((o ? -p : p) - t.translate),
                        a = t.slidesSizesGrid[t.activeIndex];
                      e =
                        s < a
                          ? r.speed
                          : s < 2 * a
                          ? 1.5 * r.speed
                          : 2.5 * r.speed;
                    }
                  } else if (r.freeMode.sticky) return void t.slideToClosest();
                  r.freeMode.momentumBounce && m
                    ? (t.updateProgress(u),
                      t.setTransition(e),
                      t.setTranslate(p),
                      t.transitionStart(!0, t.swipeDirection),
                      (t.animating = !0),
                      y(n, () => {
                        t &&
                          !t.destroyed &&
                          c.allowMomentumBounce &&
                          (a("momentumBounce"),
                          t.setTransition(r.speed),
                          setTimeout(() => {
                            t.setTranslate(u),
                              y(n, () => {
                                t && !t.destroyed && t.transitionEnd();
                              });
                          }, 0));
                      }))
                    : t.velocity
                    ? (a("_freeModeNoMomentumRelease"),
                      t.updateProgress(p),
                      t.setTransition(e),
                      t.setTranslate(p),
                      t.transitionStart(!0, t.swipeDirection),
                      t.animating ||
                        ((t.animating = !0),
                        y(n, () => {
                          t && !t.destroyed && t.transitionEnd();
                        })))
                    : t.updateProgress(p),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses();
                } else {
                  if (r.freeMode.sticky) return void t.slideToClosest();
                  r.freeMode && a("_freeModeNoMomentumRelease");
                }
                (!r.freeMode.momentum || p >= r.longSwipesMs) &&
                  (t.updateProgress(),
                  t.updateActiveIndex(),
                  t.updateSlidesClasses());
              }
            },
          },
        });
    },
    function (e) {
      let t,
        s,
        a,
        { swiper: i, extendParams: r } = e;
      r({ grid: { rows: 1, fill: "column" } });
      const n = () => {
        let e = i.params.spaceBetween;
        return (
          "string" == typeof e && e.indexOf("%") >= 0
            ? (e = (parseFloat(e.replace("%", "")) / 100) * i.size)
            : "string" == typeof e && (e = parseFloat(e)),
          e
        );
      };
      i.grid = {
        initSlides: (e) => {
          const { slidesPerView: r } = i.params,
            { rows: n, fill: l } = i.params.grid;
          (a = Math.floor(e / n)),
            (t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n),
            "auto" !== r && "row" === l && (t = Math.max(t, r * n)),
            (s = t / n);
        },
        updateSlide: (e, r, l, o) => {
          const { slidesPerGroup: d } = i.params,
            c = n(),
            { rows: p, fill: u } = i.params.grid;
          let m, h, f;
          if ("row" === u && d > 1) {
            const s = Math.floor(e / (d * p)),
              a = e - p * d * s,
              i = 0 === s ? d : Math.min(Math.ceil((l - s * p * d) / p), d);
            (f = Math.floor(a / i)),
              (h = a - f * i + s * d),
              (m = h + (f * t) / p),
              (r.style.order = m);
          } else
            "column" === u
              ? ((h = Math.floor(e / p)),
                (f = e - h * p),
                (h > a || (h === a && f === p - 1)) &&
                  ((f += 1), f >= p && ((f = 0), (h += 1))))
              : ((f = Math.floor(e / s)), (h = e - f * s));
          (r.row = f),
            (r.column = h),
            (r.style[o("margin-top")] = 0 !== f ? c && `${c}px` : "");
        },
        updateWrapperSize: (e, s, a) => {
          const { centeredSlides: r, roundLengths: l } = i.params,
            o = n(),
            { rows: d } = i.params.grid;
          if (
            ((i.virtualSize = (e + o) * t),
            (i.virtualSize = Math.ceil(i.virtualSize / d) - o),
            (i.wrapperEl.style[a("width")] = `${i.virtualSize + o}px`),
            r)
          ) {
            const e = [];
            for (let t = 0; t < s.length; t += 1) {
              let a = s[t];
              l && (a = Math.floor(a)),
                s[t] < i.virtualSize + s[0] && e.push(a);
            }
            s.splice(0, s.length), s.push(...e);
          }
        },
      };
    },
    function (e) {
      let { swiper: t } = e;
      Object.assign(t, {
        appendSlide: te.bind(t),
        prependSlide: se.bind(t),
        addSlide: ae.bind(t),
        removeSlide: ie.bind(t),
        removeAllSlides: re.bind(t),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ fadeEffect: { crossFade: !1 } }),
        ne({
          effect: "fade",
          swiper: t,
          on: a,
          setTranslate: () => {
            const { slides: e } = t;
            t.params.fadeEffect;
            for (let s = 0; s < e.length; s += 1) {
              const e = t.slides[s];
              let a = -e.swiperSlideOffset;
              t.params.virtualTranslate || (a -= t.translate);
              let i = 0;
              t.isHorizontal() || ((i = a), (a = 0));
              const r = t.params.fadeEffect.crossFade
                  ? Math.max(1 - Math.abs(e.progress), 0)
                  : 1 + Math.min(Math.max(e.progress, -1), 0),
                n = le(0, e);
              (n.style.opacity = r),
                (n.style.transform = `translate3d(${a}px, ${i}px, 0px)`);
            }
          },
          setTransition: (e) => {
            const s = t.slides.map((e) => m(e));
            s.forEach((t) => {
              t.style.transitionDuration = `${e}ms`;
            }),
              oe({
                swiper: t,
                duration: e,
                transformElements: s,
                allSlides: !0,
              });
          },
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !t.params.cssMode,
          }),
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
      });
      const i = (e, t, s) => {
        let a = s
            ? e.querySelector(".swiper-slide-shadow-left")
            : e.querySelector(".swiper-slide-shadow-top"),
          i = s
            ? e.querySelector(".swiper-slide-shadow-right")
            : e.querySelector(".swiper-slide-shadow-bottom");
        a ||
          ((a = f(
            "div",
            (
              "swiper-slide-shadow-cube swiper-slide-shadow-" +
              (s ? "left" : "top")
            ).split(" ")
          )),
          e.append(a)),
          i ||
            ((i = f(
              "div",
              (
                "swiper-slide-shadow-cube swiper-slide-shadow-" +
                (s ? "right" : "bottom")
              ).split(" ")
            )),
            e.append(i)),
          a && (a.style.opacity = Math.max(-t, 0)),
          i && (i.style.opacity = Math.max(t, 0));
      };
      ne({
        effect: "cube",
        swiper: t,
        on: a,
        setTranslate: () => {
          const {
              el: e,
              wrapperEl: s,
              slides: a,
              width: r,
              height: n,
              rtlTranslate: l,
              size: o,
              browser: d,
            } = t,
            c = t.params.cubeEffect,
            p = t.isHorizontal(),
            u = t.virtual && t.params.virtual.enabled;
          let m,
            h = 0;
          c.shadow &&
            (p
              ? ((m = t.wrapperEl.querySelector(".swiper-cube-shadow")),
                m ||
                  ((m = f("div", "swiper-cube-shadow")), t.wrapperEl.append(m)),
                (m.style.height = `${r}px`))
              : ((m = e.querySelector(".swiper-cube-shadow")),
                m || ((m = f("div", "swiper-cube-shadow")), e.append(m))));
          for (let e = 0; e < a.length; e += 1) {
            const t = a[e];
            let s = e;
            u && (s = parseInt(t.getAttribute("data-swiper-slide-index"), 10));
            let r = 90 * s,
              n = Math.floor(r / 360);
            l && ((r = -r), (n = Math.floor(-r / 360)));
            const d = Math.max(Math.min(t.progress, 1), -1);
            let m = 0,
              f = 0,
              g = 0;
            s % 4 == 0
              ? ((m = 4 * -n * o), (g = 0))
              : (s - 1) % 4 == 0
              ? ((m = 0), (g = 4 * -n * o))
              : (s - 2) % 4 == 0
              ? ((m = o + 4 * n * o), (g = o))
              : (s - 3) % 4 == 0 && ((m = -o), (g = 3 * o + 4 * o * n)),
              l && (m = -m),
              p || ((f = m), (m = 0));
            const v = `rotateX(${p ? 0 : -r}deg) rotateY(${
              p ? r : 0
            }deg) translate3d(${m}px, ${f}px, ${g}px)`;
            d <= 1 &&
              d > -1 &&
              ((h = 90 * s + 90 * d), l && (h = 90 * -s - 90 * d)),
              (t.style.transform = v),
              c.slideShadows && i(t, d, p);
          }
          if (
            ((s.style.transformOrigin = `50% 50% -${o / 2}px`),
            (s.style["-webkit-transform-origin"] = `50% 50% -${o / 2}px`),
            c.shadow)
          )
            if (p)
              m.style.transform = `translate3d(0px, ${
                r / 2 + c.shadowOffset
              }px, ${-r / 2}px) rotateX(90deg) rotateZ(0deg) scale(${
                c.shadowScale
              })`;
            else {
              const e = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                t =
                  1.5 -
                  (Math.sin((2 * e * Math.PI) / 360) / 2 +
                    Math.cos((2 * e * Math.PI) / 360) / 2),
                s = c.shadowScale,
                a = c.shadowScale / t,
                i = c.shadowOffset;
              m.style.transform = `scale3d(${s}, 1, ${a}) translate3d(0px, ${
                n / 2 + i
              }px, ${-n / 2 / a}px) rotateX(-90deg)`;
            }
          const g =
            (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -o / 2 : 0;
          (s.style.transform = `translate3d(0px,0,${g}px) rotateX(${
            t.isHorizontal() ? 0 : h
          }deg) rotateY(${t.isHorizontal() ? -h : 0}deg)`),
            s.style.setProperty("--swiper-cube-translate-z", `${g}px`);
        },
        setTransition: (e) => {
          const { el: s, slides: a } = t;
          if (
            (a.forEach((t) => {
              (t.style.transitionDuration = `${e}ms`),
                t
                  .querySelectorAll(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  )
                  .forEach((t) => {
                    t.style.transitionDuration = `${e}ms`;
                  });
            }),
            t.params.cubeEffect.shadow && !t.isHorizontal())
          ) {
            const t = s.querySelector(".swiper-cube-shadow");
            t && (t.style.transitionDuration = `${e}ms`);
          }
        },
        recreateShadows: () => {
          const e = t.isHorizontal();
          t.slides.forEach((t) => {
            const s = Math.max(Math.min(t.progress, 1), -1);
            i(t, s, e);
          });
        },
        getEffectParams: () => t.params.cubeEffect,
        perspective: () => !0,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: !1,
          virtualTranslate: !0,
        }),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
      const i = (e, s) => {
        let a = t.isHorizontal()
            ? e.querySelector(".swiper-slide-shadow-left")
            : e.querySelector(".swiper-slide-shadow-top"),
          i = t.isHorizontal()
            ? e.querySelector(".swiper-slide-shadow-right")
            : e.querySelector(".swiper-slide-shadow-bottom");
        a || (a = de("flip", e, t.isHorizontal() ? "left" : "top")),
          i || (i = de("flip", e, t.isHorizontal() ? "right" : "bottom")),
          a && (a.style.opacity = Math.max(-s, 0)),
          i && (i.style.opacity = Math.max(s, 0));
      };
      ne({
        effect: "flip",
        swiper: t,
        on: a,
        setTranslate: () => {
          const { slides: e, rtlTranslate: s } = t,
            a = t.params.flipEffect;
          for (let r = 0; r < e.length; r += 1) {
            const n = e[r];
            let l = n.progress;
            t.params.flipEffect.limitRotation &&
              (l = Math.max(Math.min(n.progress, 1), -1));
            const o = n.swiperSlideOffset;
            let d = -180 * l,
              c = 0,
              p = t.params.cssMode ? -o - t.translate : -o,
              u = 0;
            t.isHorizontal()
              ? s && (d = -d)
              : ((u = p), (p = 0), (c = -d), (d = 0)),
              (n.style.zIndex = -Math.abs(Math.round(l)) + e.length),
              a.slideShadows && i(n, l);
            const m = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
            le(0, n).style.transform = m;
          }
        },
        setTransition: (e) => {
          const s = t.slides.map((e) => m(e));
          s.forEach((t) => {
            (t.style.transitionDuration = `${e}ms`),
              t
                .querySelectorAll(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .forEach((t) => {
                  t.style.transitionDuration = `${e}ms`;
                });
          }),
            oe({ swiper: t, duration: e, transformElements: s });
        },
        recreateShadows: () => {
          t.params.flipEffect,
            t.slides.forEach((e) => {
              let s = e.progress;
              t.params.flipEffect.limitRotation &&
                (s = Math.max(Math.min(e.progress, 1), -1)),
                i(e, s);
            });
        },
        getEffectParams: () => t.params.flipEffect,
        perspective: () => !0,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !t.params.cssMode,
        }),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: !0,
        },
      }),
        ne({
          effect: "coverflow",
          swiper: t,
          on: a,
          setTranslate: () => {
            const { width: e, height: s, slides: a, slidesSizesGrid: i } = t,
              r = t.params.coverflowEffect,
              n = t.isHorizontal(),
              l = t.translate,
              o = n ? e / 2 - l : s / 2 - l,
              d = n ? r.rotate : -r.rotate,
              c = r.depth;
            for (let e = 0, t = a.length; e < t; e += 1) {
              const t = a[e],
                s = i[e],
                l = (o - t.swiperSlideOffset - s / 2) / s,
                p =
                  "function" == typeof r.modifier
                    ? r.modifier(l)
                    : l * r.modifier;
              let u = n ? d * p : 0,
                m = n ? 0 : d * p,
                h = -c * Math.abs(p),
                f = r.stretch;
              "string" == typeof f &&
                -1 !== f.indexOf("%") &&
                (f = (parseFloat(r.stretch) / 100) * s);
              let g = n ? 0 : f * p,
                v = n ? f * p : 0,
                w = 1 - (1 - r.scale) * Math.abs(p);
              Math.abs(v) < 0.001 && (v = 0),
                Math.abs(g) < 0.001 && (g = 0),
                Math.abs(h) < 0.001 && (h = 0),
                Math.abs(u) < 0.001 && (u = 0),
                Math.abs(m) < 0.001 && (m = 0),
                Math.abs(w) < 0.001 && (w = 0);
              const b = `translate3d(${v}px,${g}px,${h}px)  rotateX(${m}deg) rotateY(${u}deg) scale(${w})`;
              if (
                ((le(0, t).style.transform = b),
                (t.style.zIndex = 1 - Math.abs(Math.round(p))),
                r.slideShadows)
              ) {
                let e = n
                    ? t.querySelector(".swiper-slide-shadow-left")
                    : t.querySelector(".swiper-slide-shadow-top"),
                  s = n
                    ? t.querySelector(".swiper-slide-shadow-right")
                    : t.querySelector(".swiper-slide-shadow-bottom");
                e || (e = de("coverflow", t, n ? "left" : "top")),
                  s || (s = de("coverflow", t, n ? "right" : "bottom")),
                  e && (e.style.opacity = p > 0 ? p : 0),
                  s && (s.style.opacity = -p > 0 ? -p : 0);
              }
            }
          },
          setTransition: (e) => {
            t.slides
              .map((e) => m(e))
              .forEach((t) => {
                (t.style.transitionDuration = `${e}ms`),
                  t
                    .querySelectorAll(
                      ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                    )
                    .forEach((t) => {
                      t.style.transitionDuration = `${e}ms`;
                    });
              });
          },
          perspective: () => !0,
          overwriteParams: () => ({ watchSlidesProgress: !0 }),
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        creativeEffect: {
          limitProgress: 1,
          shadowPerProgress: !1,
          progressMultiplier: 1,
          perspective: !0,
          prev: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1,
          },
          next: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1,
          },
        },
      });
      const i = (e) => ("string" == typeof e ? e : `${e}px`);
      ne({
        effect: "creative",
        swiper: t,
        on: a,
        setTranslate: () => {
          const { slides: e, wrapperEl: s, slidesSizesGrid: a } = t,
            r = t.params.creativeEffect,
            { progressMultiplier: n } = r,
            l = t.params.centeredSlides;
          if (l) {
            const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
            s.style.transform = `translateX(calc(50% - ${e}px))`;
          }
          for (let s = 0; s < e.length; s += 1) {
            const a = e[s],
              o = a.progress,
              d = Math.min(
                Math.max(a.progress, -r.limitProgress),
                r.limitProgress
              );
            let c = d;
            l ||
              (c = Math.min(
                Math.max(a.originalProgress, -r.limitProgress),
                r.limitProgress
              ));
            const p = a.swiperSlideOffset,
              u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
              m = [0, 0, 0];
            let h = !1;
            t.isHorizontal() || ((u[1] = u[0]), (u[0] = 0));
            let f = {
              translate: [0, 0, 0],
              rotate: [0, 0, 0],
              scale: 1,
              opacity: 1,
            };
            d < 0
              ? ((f = r.next), (h = !0))
              : d > 0 && ((f = r.prev), (h = !0)),
              u.forEach((e, t) => {
                u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(
                  d * n
                )}))`;
              }),
              m.forEach((e, t) => {
                m[t] = f.rotate[t] * Math.abs(d * n);
              }),
              (a.style.zIndex = -Math.abs(Math.round(o)) + e.length);
            const g = u.join(", "),
              v = `rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`,
              w =
                c < 0
                  ? `scale(${1 + (1 - f.scale) * c * n})`
                  : `scale(${1 - (1 - f.scale) * c * n})`,
              b =
                c < 0
                  ? 1 + (1 - f.opacity) * c * n
                  : 1 - (1 - f.opacity) * c * n,
              y = `translate3d(${g}) ${v} ${w}`;
            if ((h && f.shadow) || !h) {
              let e = a.querySelector(".swiper-slide-shadow");
              if ((!e && f.shadow && (e = de("creative", a)), e)) {
                const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
              }
            }
            const E = le(0, a);
            (E.style.transform = y),
              (E.style.opacity = b),
              f.origin && (E.style.transformOrigin = f.origin);
          }
        },
        setTransition: (e) => {
          const s = t.slides.map((e) => m(e));
          s.forEach((t) => {
            (t.style.transitionDuration = `${e}ms`),
              t.querySelectorAll(".swiper-slide-shadow").forEach((t) => {
                t.style.transitionDuration = `${e}ms`;
              });
          }),
            oe({ swiper: t, duration: e, transformElements: s, allSlides: !0 });
        },
        perspective: () => t.params.creativeEffect.perspective,
        overwriteParams: () => ({
          watchSlidesProgress: !0,
          virtualTranslate: !t.params.cssMode,
        }),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        cardsEffect: {
          slideShadows: !0,
          rotate: !0,
          perSlideRotate: 2,
          perSlideOffset: 8,
        },
      }),
        ne({
          effect: "cards",
          swiper: t,
          on: a,
          setTranslate: () => {
            const { slides: e, activeIndex: s, rtlTranslate: a } = t,
              i = t.params.cardsEffect,
              { startTranslate: r, isTouched: n } = t.touchEventsData,
              l = a ? -t.translate : t.translate;
            for (let o = 0; o < e.length; o += 1) {
              const d = e[o],
                c = d.progress,
                p = Math.min(Math.max(c, -4), 4);
              let u = d.swiperSlideOffset;
              t.params.centeredSlides &&
                !t.params.cssMode &&
                (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`),
                t.params.centeredSlides &&
                  t.params.cssMode &&
                  (u -= e[0].swiperSlideOffset);
              let m = t.params.cssMode ? -u - t.translate : -u,
                h = 0;
              const f = -100 * Math.abs(p);
              let g = 1,
                v = -i.perSlideRotate * p,
                w = i.perSlideOffset - 0.75 * Math.abs(p);
              const b =
                  t.virtual && t.params.virtual.enabled
                    ? t.virtual.from + o
                    : o,
                y =
                  (b === s || b === s - 1) &&
                  p > 0 &&
                  p < 1 &&
                  (n || t.params.cssMode) &&
                  l < r,
                E =
                  (b === s || b === s + 1) &&
                  p < 0 &&
                  p > -1 &&
                  (n || t.params.cssMode) &&
                  l > r;
              if (y || E) {
                const e = (1 - Math.abs((Math.abs(p) - 0.5) / 0.5)) ** 0.5;
                (v += -28 * p * e),
                  (g += -0.5 * e),
                  (w += 96 * e),
                  (h = -25 * e * Math.abs(p) + "%");
              }
              if (
                ((m =
                  p < 0
                    ? `calc(${m}px ${a ? "-" : "+"} (${w * Math.abs(p)}%))`
                    : p > 0
                    ? `calc(${m}px ${a ? "-" : "+"} (-${w * Math.abs(p)}%))`
                    : `${m}px`),
                !t.isHorizontal())
              ) {
                const e = h;
                (h = m), (m = e);
              }
              const x = p < 0 ? "" + (1 + (1 - g) * p) : "" + (1 - (1 - g) * p),
                S = `\n        translate3d(${m}, ${h}, ${f}px)\n        rotateZ(${
                  i.rotate ? (a ? -v : v) : 0
                }deg)\n        scale(${x})\n      `;
              if (i.slideShadows) {
                let e = d.querySelector(".swiper-slide-shadow");
                e || (e = de("cards", d)),
                  e &&
                    (e.style.opacity = Math.min(
                      Math.max((Math.abs(p) - 0.5) / 0.5, 0),
                      1
                    ));
              }
              d.style.zIndex = -Math.abs(Math.round(c)) + e.length;
              le(0, d).style.transform = S;
            }
          },
          setTransition: (e) => {
            const s = t.slides.map((e) => m(e));
            s.forEach((t) => {
              (t.style.transitionDuration = `${e}ms`),
                t.querySelectorAll(".swiper-slide-shadow").forEach((t) => {
                  t.style.transitionDuration = `${e}ms`;
                });
            }),
              oe({ swiper: t, duration: e, transformElements: s });
          },
          perspective: () => !0,
          overwriteParams: () => ({
            watchSlidesProgress: !0,
            virtualTranslate: !t.params.cssMode,
          }),
        });
    },
  ];
  return Q.use(ce), Q;
})();
//# sourceMappingURL=swiper-bundle.min.js.map
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(
        ((t = "undefined" != typeof globalThis ? globalThis : t || self).IMask =
          {})
      );
})(this, function (t) {
  "use strict";
  function e(t) {
    return "string" == typeof t || t instanceof String;
  }
  function s(t) {
    var e;
    return (
      "object" == typeof t &&
      null != t &&
      "Object" === (null == t || null == (e = t.constructor) ? void 0 : e.name)
    );
  }
  function i(t, e) {
    return Array.isArray(e)
      ? i(t, (t, s) => e.includes(s))
      : Object.entries(t).reduce((t, s) => {
          let [i, u] = s;
          return e(u, i) && (t[i] = u), t;
        }, {});
  }
  const u = {
    NONE: "NONE",
    LEFT: "LEFT",
    FORCE_LEFT: "FORCE_LEFT",
    RIGHT: "RIGHT",
    FORCE_RIGHT: "FORCE_RIGHT",
  };
  function a(t) {
    switch (t) {
      case u.LEFT:
        return u.FORCE_LEFT;
      case u.RIGHT:
        return u.FORCE_RIGHT;
      default:
        return t;
    }
  }
  function r(t) {
    return t.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
  }
  function n(t, e) {
    if (e === t) return !0;
    const s = Array.isArray(e),
      i = Array.isArray(t);
    let u;
    if (s && i) {
      if (e.length != t.length) return !1;
      for (u = 0; u < e.length; u++) if (!n(e[u], t[u])) return !1;
      return !0;
    }
    if (s != i) return !1;
    if (e && t && "object" == typeof e && "object" == typeof t) {
      const s = e instanceof Date,
        i = t instanceof Date;
      if (s && i) return e.getTime() == t.getTime();
      if (s != i) return !1;
      const a = e instanceof RegExp,
        r = t instanceof RegExp;
      if (a && r) return e.toString() == t.toString();
      if (a != r) return !1;
      const h = Object.keys(e);
      for (u = 0; u < h.length; u++)
        if (!Object.prototype.hasOwnProperty.call(t, h[u])) return !1;
      for (u = 0; u < h.length; u++) if (!n(t[h[u]], e[h[u]])) return !1;
      return !0;
    }
    return (
      !(!e || !t || "function" != typeof e || "function" != typeof t) &&
      e.toString() === t.toString()
    );
  }
  class h {
    constructor(t) {
      for (
        Object.assign(this, t);
        this.value.slice(0, this.startChangePos) !==
        this.oldValue.slice(0, this.startChangePos);

      )
        --this.oldSelection.start;
    }
    get startChangePos() {
      return Math.min(this.cursorPos, this.oldSelection.start);
    }
    get insertedCount() {
      return this.cursorPos - this.startChangePos;
    }
    get inserted() {
      return this.value.substr(this.startChangePos, this.insertedCount);
    }
    get removedCount() {
      return Math.max(
        this.oldSelection.end - this.startChangePos ||
          this.oldValue.length - this.value.length,
        0
      );
    }
    get removed() {
      return this.oldValue.substr(this.startChangePos, this.removedCount);
    }
    get head() {
      return this.value.substring(0, this.startChangePos);
    }
    get tail() {
      return this.value.substring(this.startChangePos + this.insertedCount);
    }
    get removeDirection() {
      return !this.removedCount || this.insertedCount
        ? u.NONE
        : (this.oldSelection.end !== this.cursorPos &&
            this.oldSelection.start !== this.cursorPos) ||
          this.oldSelection.end !== this.oldSelection.start
        ? u.LEFT
        : u.RIGHT;
    }
  }
  function o(t, e) {
    return new o.InputMask(t, e);
  }
  function l(t) {
    if (null == t) throw new Error("mask property should be defined");
    return t instanceof RegExp
      ? o.MaskedRegExp
      : e(t)
      ? o.MaskedPattern
      : t === Date
      ? o.MaskedDate
      : t === Number
      ? o.MaskedNumber
      : Array.isArray(t) || t === Array
      ? o.MaskedDynamic
      : o.Masked && t.prototype instanceof o.Masked
      ? t
      : o.Masked && t instanceof o.Masked
      ? t.constructor
      : t instanceof Function
      ? o.MaskedFunction
      : (console.warn("Mask not found for mask", t), o.Masked);
  }
  function d(t) {
    if (!t) throw new Error("Options in not defined");
    if (o.Masked) {
      if (t.prototype instanceof o.Masked) return { mask: t };
      const { mask: e, ...u } =
        t instanceof o.Masked
          ? { mask: t }
          : s(t) && t.mask instanceof o.Masked
          ? t
          : {};
      if (e) {
        const t = e.mask;
        return {
          ...i(e, (t, e) => !e.startsWith("_")),
          mask: e.constructor,
          _mask: t,
          ...u,
        };
      }
    }
    return s(t) ? { ...t } : { mask: t };
  }
  function p(t) {
    if (o.Masked && t instanceof o.Masked) return t;
    const e = d(t),
      s = l(e.mask);
    if (!s)
      throw new Error(
        "Masked class is not found for provided mask, appropriate module needs to be imported manually before creating mask."
      );
    return (
      e.mask === s && delete e.mask,
      e._mask && ((e.mask = e._mask), delete e._mask),
      new s(e)
    );
  }
  o.createMask = p;
  class c {
    get selectionStart() {
      let t;
      try {
        t = this._unsafeSelectionStart;
      } catch {}
      return null != t ? t : this.value.length;
    }
    get selectionEnd() {
      let t;
      try {
        t = this._unsafeSelectionEnd;
      } catch {}
      return null != t ? t : this.value.length;
    }
    select(t, e) {
      if (
        null != t &&
        null != e &&
        (t !== this.selectionStart || e !== this.selectionEnd)
      )
        try {
          this._unsafeSelect(t, e);
        } catch {}
    }
    get isActive() {
      return !1;
    }
  }
  o.MaskElement = c;
  class g extends c {
    constructor(t) {
      super(), (this.input = t), (this._handlers = {});
    }
    get rootElement() {
      var t, e, s;
      return null !=
        (t = null == (e = (s = this.input).getRootNode) ? void 0 : e.call(s))
        ? t
        : document;
    }
    get isActive() {
      return this.input === this.rootElement.activeElement;
    }
    bindEvents(t) {
      Object.keys(t).forEach((e) =>
        this._toggleEventHandler(g.EVENTS_MAP[e], t[e])
      );
    }
    unbindEvents() {
      Object.keys(this._handlers).forEach((t) => this._toggleEventHandler(t));
    }
    _toggleEventHandler(t, e) {
      this._handlers[t] &&
        (this.input.removeEventListener(t, this._handlers[t]),
        delete this._handlers[t]),
        e && (this.input.addEventListener(t, e), (this._handlers[t] = e));
    }
  }
  (g.EVENTS_MAP = {
    selectionChange: "keydown",
    input: "input",
    drop: "drop",
    click: "click",
    focus: "focus",
    commit: "blur",
  }),
    (o.HTMLMaskElement = g);
  class k extends g {
    constructor(t) {
      super(t), (this.input = t), (this._handlers = {});
    }
    get _unsafeSelectionStart() {
      return null != this.input.selectionStart
        ? this.input.selectionStart
        : this.value.length;
    }
    get _unsafeSelectionEnd() {
      return this.input.selectionEnd;
    }
    _unsafeSelect(t, e) {
      this.input.setSelectionRange(t, e);
    }
    get value() {
      return this.input.value;
    }
    set value(t) {
      this.input.value = t;
    }
  }
  o.HTMLMaskElement = g;
  class f extends g {
    get _unsafeSelectionStart() {
      const t = this.rootElement,
        e = t.getSelection && t.getSelection(),
        s = e && e.anchorOffset,
        i = e && e.focusOffset;
      return null == i || null == s || s < i ? s : i;
    }
    get _unsafeSelectionEnd() {
      const t = this.rootElement,
        e = t.getSelection && t.getSelection(),
        s = e && e.anchorOffset,
        i = e && e.focusOffset;
      return null == i || null == s || s > i ? s : i;
    }
    _unsafeSelect(t, e) {
      if (!this.rootElement.createRange) return;
      const s = this.rootElement.createRange();
      s.setStart(this.input.firstChild || this.input, t),
        s.setEnd(this.input.lastChild || this.input, e);
      const i = this.rootElement,
        u = i.getSelection && i.getSelection();
      u && (u.removeAllRanges(), u.addRange(s));
    }
    get value() {
      return this.input.textContent || "";
    }
    set value(t) {
      this.input.textContent = t;
    }
  }
  o.HTMLContenteditableMaskElement = f;
  class m {
    constructor(t, e) {
      (this.el =
        t instanceof c
          ? t
          : t.isContentEditable &&
            "INPUT" !== t.tagName &&
            "TEXTAREA" !== t.tagName
          ? new f(t)
          : new k(t)),
        (this.masked = p(e)),
        (this._listeners = {}),
        (this._value = ""),
        (this._unmaskedValue = ""),
        (this._saveSelection = this._saveSelection.bind(this)),
        (this._onInput = this._onInput.bind(this)),
        (this._onChange = this._onChange.bind(this)),
        (this._onDrop = this._onDrop.bind(this)),
        (this._onFocus = this._onFocus.bind(this)),
        (this._onClick = this._onClick.bind(this)),
        (this.alignCursor = this.alignCursor.bind(this)),
        (this.alignCursorFriendly = this.alignCursorFriendly.bind(this)),
        this._bindEvents(),
        this.updateValue(),
        this._onChange();
    }
    maskEquals(t) {
      var e;
      return (
        null == t || (null == (e = this.masked) ? void 0 : e.maskEquals(t))
      );
    }
    get mask() {
      return this.masked.mask;
    }
    set mask(t) {
      if (this.maskEquals(t)) return;
      if (!(t instanceof o.Masked) && this.masked.constructor === l(t))
        return void this.masked.updateOptions({ mask: t });
      const e = t instanceof o.Masked ? t : p({ mask: t });
      (e.unmaskedValue = this.masked.unmaskedValue), (this.masked = e);
    }
    get value() {
      return this._value;
    }
    set value(t) {
      this.value !== t &&
        ((this.masked.value = t), this.updateControl(), this.alignCursor());
    }
    get unmaskedValue() {
      return this._unmaskedValue;
    }
    set unmaskedValue(t) {
      this.unmaskedValue !== t &&
        ((this.masked.unmaskedValue = t),
        this.updateControl(),
        this.alignCursor());
    }
    get typedValue() {
      return this.masked.typedValue;
    }
    set typedValue(t) {
      this.masked.typedValueEquals(t) ||
        ((this.masked.typedValue = t),
        this.updateControl(),
        this.alignCursor());
    }
    get displayValue() {
      return this.masked.displayValue;
    }
    _bindEvents() {
      this.el.bindEvents({
        selectionChange: this._saveSelection,
        input: this._onInput,
        drop: this._onDrop,
        click: this._onClick,
        focus: this._onFocus,
        commit: this._onChange,
      });
    }
    _unbindEvents() {
      this.el && this.el.unbindEvents();
    }
    _fireEvent(t, e) {
      const s = this._listeners[t];
      s && s.forEach((t) => t(e));
    }
    get selectionStart() {
      return this._cursorChanging
        ? this._changingCursorPos
        : this.el.selectionStart;
    }
    get cursorPos() {
      return this._cursorChanging
        ? this._changingCursorPos
        : this.el.selectionEnd;
    }
    set cursorPos(t) {
      this.el &&
        this.el.isActive &&
        (this.el.select(t, t), this._saveSelection());
    }
    _saveSelection() {
      this.displayValue !== this.el.value &&
        console.warn(
          "Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."
        ),
        (this._selection = { start: this.selectionStart, end: this.cursorPos });
    }
    updateValue() {
      (this.masked.value = this.el.value), (this._value = this.masked.value);
    }
    updateControl() {
      const t = this.masked.unmaskedValue,
        e = this.masked.value,
        s = this.displayValue,
        i = this.unmaskedValue !== t || this.value !== e;
      (this._unmaskedValue = t),
        (this._value = e),
        this.el.value !== s && (this.el.value = s),
        i && this._fireChangeEvents();
    }
    updateOptions(t) {
      const { mask: e, ...s } = t,
        i = !this.maskEquals(e),
        u = !n(this.masked, s);
      i && (this.mask = e),
        u && this.masked.updateOptions(s),
        (i || u) && this.updateControl();
    }
    updateCursor(t) {
      null != t && ((this.cursorPos = t), this._delayUpdateCursor(t));
    }
    _delayUpdateCursor(t) {
      this._abortUpdateCursor(),
        (this._changingCursorPos = t),
        (this._cursorChanging = setTimeout(() => {
          this.el &&
            ((this.cursorPos = this._changingCursorPos),
            this._abortUpdateCursor());
        }, 10));
    }
    _fireChangeEvents() {
      this._fireEvent("accept", this._inputEvent),
        this.masked.isComplete && this._fireEvent("complete", this._inputEvent);
    }
    _abortUpdateCursor() {
      this._cursorChanging &&
        (clearTimeout(this._cursorChanging), delete this._cursorChanging);
    }
    alignCursor() {
      this.cursorPos = this.masked.nearestInputPos(
        this.masked.nearestInputPos(this.cursorPos, u.LEFT)
      );
    }
    alignCursorFriendly() {
      this.selectionStart === this.cursorPos && this.alignCursor();
    }
    on(t, e) {
      return (
        this._listeners[t] || (this._listeners[t] = []),
        this._listeners[t].push(e),
        this
      );
    }
    off(t, e) {
      if (!this._listeners[t]) return this;
      if (!e) return delete this._listeners[t], this;
      const s = this._listeners[t].indexOf(e);
      return s >= 0 && this._listeners[t].splice(s, 1), this;
    }
    _onInput(t) {
      if (((this._inputEvent = t), this._abortUpdateCursor(), !this._selection))
        return this.updateValue();
      const e = new h({
          value: this.el.value,
          cursorPos: this.cursorPos,
          oldValue: this.displayValue,
          oldSelection: this._selection,
        }),
        s = this.masked.rawInputValue,
        i = this.masked.splice(
          e.startChangePos,
          e.removed.length,
          e.inserted,
          e.removeDirection,
          { input: !0, raw: !0 }
        ).offset,
        a = s === this.masked.rawInputValue ? e.removeDirection : u.NONE;
      let r = this.masked.nearestInputPos(e.startChangePos + i, a);
      a !== u.NONE && (r = this.masked.nearestInputPos(r, u.NONE)),
        this.updateControl(),
        this.updateCursor(r),
        delete this._inputEvent;
    }
    _onChange() {
      this.displayValue !== this.el.value && this.updateValue(),
        this.masked.doCommit(),
        this.updateControl(),
        this._saveSelection();
    }
    _onDrop(t) {
      t.preventDefault(), t.stopPropagation();
    }
    _onFocus(t) {
      this.alignCursorFriendly();
    }
    _onClick(t) {
      this.alignCursorFriendly();
    }
    destroy() {
      this._unbindEvents(), (this._listeners.length = 0), delete this.el;
    }
  }
  o.InputMask = m;
  class _ {
    static normalize(t) {
      return Array.isArray(t) ? t : [t, new _()];
    }
    constructor(t) {
      Object.assign(
        this,
        { inserted: "", rawInserted: "", skip: !1, tailShift: 0 },
        t
      );
    }
    aggregate(t) {
      return (
        (this.rawInserted += t.rawInserted),
        (this.skip = this.skip || t.skip),
        (this.inserted += t.inserted),
        (this.tailShift += t.tailShift),
        this
      );
    }
    get offset() {
      return this.tailShift + this.inserted.length;
    }
  }
  o.ChangeDetails = _;
  class v {
    constructor(t, e, s) {
      void 0 === t && (t = ""),
        void 0 === e && (e = 0),
        (this.value = t),
        (this.from = e),
        (this.stop = s);
    }
    toString() {
      return this.value;
    }
    extend(t) {
      this.value += String(t);
    }
    appendTo(t) {
      return t
        .append(this.toString(), { tail: !0 })
        .aggregate(t._appendPlaceholder());
    }
    get state() {
      return { value: this.value, from: this.from, stop: this.stop };
    }
    set state(t) {
      Object.assign(this, t);
    }
    unshift(t) {
      if (!this.value.length || (null != t && this.from >= t)) return "";
      const e = this.value[0];
      return (this.value = this.value.slice(1)), e;
    }
    shift() {
      if (!this.value.length) return "";
      const t = this.value[this.value.length - 1];
      return (this.value = this.value.slice(0, -1)), t;
    }
  }
  class E {
    constructor(t) {
      (this._value = ""),
        this._update({ ...E.DEFAULTS, ...t }),
        (this._initialized = !0);
    }
    updateOptions(t) {
      Object.keys(t).length &&
        this.withValueRefresh(this._update.bind(this, t));
    }
    _update(t) {
      Object.assign(this, t);
    }
    get state() {
      return { _value: this.value, _rawInputValue: this.rawInputValue };
    }
    set state(t) {
      this._value = t._value;
    }
    reset() {
      this._value = "";
    }
    get value() {
      return this._value;
    }
    set value(t) {
      this.resolve(t, { input: !0 });
    }
    resolve(t, e) {
      void 0 === e && (e = { input: !0 }),
        this.reset(),
        this.append(t, e, ""),
        this.doCommit();
    }
    get unmaskedValue() {
      return this.value;
    }
    set unmaskedValue(t) {
      this.resolve(t, {});
    }
    get typedValue() {
      return this.parse ? this.parse(this.value, this) : this.unmaskedValue;
    }
    set typedValue(t) {
      this.format
        ? (this.value = this.format(t, this))
        : (this.unmaskedValue = String(t));
    }
    get rawInputValue() {
      return this.extractInput(0, this.value.length, { raw: !0 });
    }
    set rawInputValue(t) {
      this.resolve(t, { raw: !0 });
    }
    get displayValue() {
      return this.value;
    }
    get isComplete() {
      return !0;
    }
    get isFilled() {
      return this.isComplete;
    }
    nearestInputPos(t, e) {
      return t;
    }
    totalInputPositions(t, e) {
      return (
        void 0 === t && (t = 0),
        void 0 === e && (e = this.value.length),
        Math.min(this.value.length, e - t)
      );
    }
    extractInput(t, e, s) {
      return (
        void 0 === t && (t = 0),
        void 0 === e && (e = this.value.length),
        this.value.slice(t, e)
      );
    }
    extractTail(t, e) {
      return (
        void 0 === t && (t = 0),
        void 0 === e && (e = this.value.length),
        new v(this.extractInput(t, e), t)
      );
    }
    appendTail(t) {
      return e(t) && (t = new v(String(t))), t.appendTo(this);
    }
    _appendCharRaw(t, e) {
      return t
        ? ((this._value += t), new _({ inserted: t, rawInserted: t }))
        : new _();
    }
    _appendChar(t, e, s) {
      void 0 === e && (e = {});
      const i = this.state;
      let u;
      if (
        (([t, u] = this.doPrepareChar(t, e)),
        (u = u.aggregate(this._appendCharRaw(t, e))),
        u.inserted)
      ) {
        let t,
          a = !1 !== this.doValidate(e);
        if (a && null != s) {
          const e = this.state;
          !0 === this.overwrite &&
            ((t = s.state), s.unshift(this.value.length - u.tailShift));
          let i = this.appendTail(s);
          (a = i.rawInserted === s.toString()),
            (a && i.inserted) ||
              "shift" !== this.overwrite ||
              ((this.state = e),
              (t = s.state),
              s.shift(),
              (i = this.appendTail(s)),
              (a = i.rawInserted === s.toString())),
            a && i.inserted && (this.state = e);
        }
        a || ((u = new _()), (this.state = i), s && t && (s.state = t));
      }
      return u;
    }
    _appendPlaceholder() {
      return new _();
    }
    _appendEager() {
      return new _();
    }
    append(t, s, i) {
      if (!e(t)) throw new Error("value should be string");
      const u = e(i) ? new v(String(i)) : i;
      let a;
      null != s && s.tail && (s._beforeTailState = this.state),
        ([t, a] = this.doPrepare(t, s));
      for (let e = 0; e < t.length; ++e) {
        const i = this._appendChar(t[e], s, u);
        if (!i.rawInserted && !this.doSkipInvalid(t[e], s, u)) break;
        a.aggregate(i);
      }
      return (
        (!0 === this.eager || "append" === this.eager) &&
          null != s &&
          s.input &&
          t &&
          a.aggregate(this._appendEager()),
        null != u && (a.tailShift += this.appendTail(u).tailShift),
        a
      );
    }
    remove(t, e) {
      return (
        void 0 === t && (t = 0),
        void 0 === e && (e = this.value.length),
        (this._value = this.value.slice(0, t) + this.value.slice(e)),
        new _()
      );
    }
    withValueRefresh(t) {
      if (this._refreshing || !this._initialized) return t();
      this._refreshing = !0;
      const e = this.rawInputValue,
        s = this.value,
        i = t();
      return (
        (this.rawInputValue = e),
        this.value &&
          this.value !== s &&
          0 === s.indexOf(this.value) &&
          this.append(s.slice(this.value.length), {}, ""),
        delete this._refreshing,
        i
      );
    }
    runIsolated(t) {
      if (this._isolated || !this._initialized) return t(this);
      this._isolated = !0;
      const e = this.state,
        s = t(this);
      return (this.state = e), delete this._isolated, s;
    }
    doSkipInvalid(t, e, s) {
      return Boolean(this.skipInvalid);
    }
    doPrepare(t, e) {
      return (
        void 0 === e && (e = {}),
        _.normalize(this.prepare ? this.prepare(t, this, e) : t)
      );
    }
    doPrepareChar(t, e) {
      return (
        void 0 === e && (e = {}),
        _.normalize(this.prepareChar ? this.prepareChar(t, this, e) : t)
      );
    }
    doValidate(t) {
      return (
        (!this.validate || this.validate(this.value, this, t)) &&
        (!this.parent || this.parent.doValidate(t))
      );
    }
    doCommit() {
      this.commit && this.commit(this.value, this);
    }
    splice(t, e, s, i, r) {
      void 0 === i && (i = u.NONE), void 0 === r && (r = { input: !0 });
      const n = t + e,
        h = this.extractTail(n),
        o = !0 === this.eager || "remove" === this.eager;
      let l;
      o && ((i = a(i)), (l = this.extractInput(0, n, { raw: !0 })));
      let d = t;
      const p = new _();
      if (
        (i !== u.NONE &&
          ((d = this.nearestInputPos(t, e > 1 && 0 !== t && !o ? u.NONE : i)),
          (p.tailShift = d - t)),
        p.aggregate(this.remove(d)),
        o && i !== u.NONE && l === this.rawInputValue)
      )
        if (i === u.FORCE_LEFT) {
          let t;
          for (; l === this.rawInputValue && (t = this.value.length); )
            p.aggregate(new _({ tailShift: -1 })).aggregate(this.remove(t - 1));
        } else i === u.FORCE_RIGHT && h.unshift();
      return p.aggregate(this.append(s, r, h));
    }
    maskEquals(t) {
      return this.mask === t;
    }
    typedValueEquals(t) {
      const e = this.typedValue;
      return (
        t === e ||
        (E.EMPTY_VALUES.includes(t) && E.EMPTY_VALUES.includes(e)) ||
        (!!this.format &&
          this.format(t, this) === this.format(this.typedValue, this))
      );
    }
  }
  (E.DEFAULTS = { skipInvalid: !0 }),
    (E.EMPTY_VALUES = [void 0, null, ""]),
    (o.Masked = E);
  class A {
    constructor(t, e) {
      void 0 === t && (t = []),
        void 0 === e && (e = 0),
        (this.chunks = t),
        (this.from = e);
    }
    toString() {
      return this.chunks.map(String).join("");
    }
    extend(t) {
      if (!String(t)) return;
      t = e(t) ? new v(String(t)) : t;
      const s = this.chunks[this.chunks.length - 1],
        i =
          s &&
          (s.stop === t.stop || null == t.stop) &&
          t.from === s.from + s.toString().length;
      if (t instanceof v) i ? s.extend(t.toString()) : this.chunks.push(t);
      else if (t instanceof A) {
        if (null == t.stop) {
          let e;
          for (; t.chunks.length && null == t.chunks[0].stop; )
            (e = t.chunks.shift()), (e.from += t.from), this.extend(e);
        }
        t.toString() && ((t.stop = t.blockIndex), this.chunks.push(t));
      }
    }
    appendTo(t) {
      if (!(t instanceof o.MaskedPattern)) {
        return new v(this.toString()).appendTo(t);
      }
      const e = new _();
      for (let s = 0; s < this.chunks.length && !e.skip; ++s) {
        const i = this.chunks[s],
          u = t._mapPosToBlock(t.value.length),
          a = i.stop;
        let r;
        if (null != a && (!u || u.index <= a)) {
          if (i instanceof A || t._stops.indexOf(a) >= 0) {
            const s = t._appendPlaceholder(a);
            e.aggregate(s);
          }
          r = i instanceof A && t._blocks[a];
        }
        if (r) {
          const s = r.appendTail(i);
          (s.skip = !1), e.aggregate(s), (t._value += s.inserted);
          const u = i.toString().slice(s.rawInserted.length);
          u && e.aggregate(t.append(u, { tail: !0 }));
        } else e.aggregate(t.append(i.toString(), { tail: !0 }));
      }
      return e;
    }
    get state() {
      return {
        chunks: this.chunks.map((t) => t.state),
        from: this.from,
        stop: this.stop,
        blockIndex: this.blockIndex,
      };
    }
    set state(t) {
      const { chunks: e, ...s } = t;
      Object.assign(this, s),
        (this.chunks = e.map((t) => {
          const e = "chunks" in t ? new A() : new v();
          return (e.state = t), e;
        }));
    }
    unshift(t) {
      if (!this.chunks.length || (null != t && this.from >= t)) return "";
      const e = null != t ? t - this.from : t;
      let s = 0;
      for (; s < this.chunks.length; ) {
        const t = this.chunks[s],
          i = t.unshift(e);
        if (t.toString()) {
          if (!i) break;
          ++s;
        } else this.chunks.splice(s, 1);
        if (i) return i;
      }
      return "";
    }
    shift() {
      if (!this.chunks.length) return "";
      let t = this.chunks.length - 1;
      for (; 0 <= t; ) {
        const e = this.chunks[t],
          s = e.shift();
        if (e.toString()) {
          if (!s) break;
          --t;
        } else this.chunks.splice(t, 1);
        if (s) return s;
      }
      return "";
    }
  }
  class F {
    constructor(t, e) {
      (this.masked = t), (this._log = []);
      const { offset: s, index: i } =
        t._mapPosToBlock(e) ||
        (e < 0
          ? { index: 0, offset: 0 }
          : { index: this.masked._blocks.length, offset: 0 });
      (this.offset = s), (this.index = i), (this.ok = !1);
    }
    get block() {
      return this.masked._blocks[this.index];
    }
    get pos() {
      return this.masked._blockStartPos(this.index) + this.offset;
    }
    get state() {
      return { index: this.index, offset: this.offset, ok: this.ok };
    }
    set state(t) {
      Object.assign(this, t);
    }
    pushState() {
      this._log.push(this.state);
    }
    popState() {
      const t = this._log.pop();
      return t && (this.state = t), t;
    }
    bindBlock() {
      this.block ||
        (this.index < 0 && ((this.index = 0), (this.offset = 0)),
        this.index >= this.masked._blocks.length &&
          ((this.index = this.masked._blocks.length - 1),
          (this.offset = this.block.value.length)));
    }
    _pushLeft(t) {
      for (
        this.pushState(), this.bindBlock();
        0 <= this.index;
        --this.index,
          this.offset =
            (null == (e = this.block) ? void 0 : e.value.length) || 0
      ) {
        var e;
        if (t()) return (this.ok = !0);
      }
      return (this.ok = !1);
    }
    _pushRight(t) {
      for (
        this.pushState(), this.bindBlock();
        this.index < this.masked._blocks.length;
        ++this.index, this.offset = 0
      )
        if (t()) return (this.ok = !0);
      return (this.ok = !1);
    }
    pushLeftBeforeFilled() {
      return this._pushLeft(() => {
        if (!this.block.isFixed && this.block.value)
          return (
            (this.offset = this.block.nearestInputPos(
              this.offset,
              u.FORCE_LEFT
            )),
            0 !== this.offset || void 0
          );
      });
    }
    pushLeftBeforeInput() {
      return this._pushLeft(() => {
        if (!this.block.isFixed)
          return (
            (this.offset = this.block.nearestInputPos(this.offset, u.LEFT)), !0
          );
      });
    }
    pushLeftBeforeRequired() {
      return this._pushLeft(() => {
        if (
          !(this.block.isFixed || (this.block.isOptional && !this.block.value))
        )
          return (
            (this.offset = this.block.nearestInputPos(this.offset, u.LEFT)), !0
          );
      });
    }
    pushRightBeforeFilled() {
      return this._pushRight(() => {
        if (!this.block.isFixed && this.block.value)
          return (
            (this.offset = this.block.nearestInputPos(
              this.offset,
              u.FORCE_RIGHT
            )),
            this.offset !== this.block.value.length || void 0
          );
      });
    }
    pushRightBeforeInput() {
      return this._pushRight(() => {
        if (!this.block.isFixed)
          return (
            (this.offset = this.block.nearestInputPos(this.offset, u.NONE)), !0
          );
      });
    }
    pushRightBeforeRequired() {
      return this._pushRight(() => {
        if (
          !(this.block.isFixed || (this.block.isOptional && !this.block.value))
        )
          return (
            (this.offset = this.block.nearestInputPos(this.offset, u.NONE)), !0
          );
      });
    }
  }
  class C {
    constructor(t) {
      Object.assign(this, t), (this._value = ""), (this.isFixed = !0);
    }
    get value() {
      return this._value;
    }
    get unmaskedValue() {
      return this.isUnmasking ? this.value : "";
    }
    get rawInputValue() {
      return this._isRawInput ? this.value : "";
    }
    get displayValue() {
      return this.value;
    }
    reset() {
      (this._isRawInput = !1), (this._value = "");
    }
    remove(t, e) {
      return (
        void 0 === t && (t = 0),
        void 0 === e && (e = this._value.length),
        (this._value = this._value.slice(0, t) + this._value.slice(e)),
        this._value || (this._isRawInput = !1),
        new _()
      );
    }
    nearestInputPos(t, e) {
      void 0 === e && (e = u.NONE);
      const s = this._value.length;
      switch (e) {
        case u.LEFT:
        case u.FORCE_LEFT:
          return 0;
        default:
          return s;
      }
    }
    totalInputPositions(t, e) {
      return (
        void 0 === t && (t = 0),
        void 0 === e && (e = this._value.length),
        this._isRawInput ? e - t : 0
      );
    }
    extractInput(t, e, s) {
      return (
        void 0 === t && (t = 0),
        void 0 === e && (e = this._value.length),
        void 0 === s && (s = {}),
        (s.raw && this._isRawInput && this._value.slice(t, e)) || ""
      );
    }
    get isComplete() {
      return !0;
    }
    get isFilled() {
      return Boolean(this._value);
    }
    _appendChar(t, e) {
      void 0 === e && (e = {});
      const s = new _();
      if (this.isFilled) return s;
      const i = !0 === this.eager || "append" === this.eager,
        u =
          this.char === t &&
          (this.isUnmasking || e.input || e.raw) &&
          (!e.raw || !i) &&
          !e.tail;
      return (
        u && (s.rawInserted = this.char),
        (this._value = s.inserted = this.char),
        (this._isRawInput = u && (e.raw || e.input)),
        s
      );
    }
    _appendEager() {
      return this._appendChar(this.char, { tail: !0 });
    }
    _appendPlaceholder() {
      const t = new _();
      return this.isFilled || (this._value = t.inserted = this.char), t;
    }
    extractTail() {
      return new v("");
    }
    appendTail(t) {
      return e(t) && (t = new v(String(t))), t.appendTo(this);
    }
    append(t, e, s) {
      const i = this._appendChar(t[0], e);
      return null != s && (i.tailShift += this.appendTail(s).tailShift), i;
    }
    doCommit() {}
    get state() {
      return { _value: this._value, _rawInputValue: this.rawInputValue };
    }
    set state(t) {
      (this._value = t._value), (this._isRawInput = Boolean(t._rawInputValue));
    }
  }
  class S {
    constructor(t) {
      const {
        parent: e,
        isOptional: s,
        placeholderChar: i,
        displayChar: u,
        lazy: a,
        eager: r,
        ...n
      } = t;
      (this.masked = p(n)),
        Object.assign(this, {
          parent: e,
          isOptional: s,
          placeholderChar: i,
          displayChar: u,
          lazy: a,
          eager: r,
        });
    }
    reset() {
      (this.isFilled = !1), this.masked.reset();
    }
    remove(t, e) {
      return (
        void 0 === t && (t = 0),
        void 0 === e && (e = this.value.length),
        0 === t && e >= 1
          ? ((this.isFilled = !1), this.masked.remove(t, e))
          : new _()
      );
    }
    get value() {
      return (
        this.masked.value ||
        (this.isFilled && !this.isOptional ? this.placeholderChar : "")
      );
    }
    get unmaskedValue() {
      return this.masked.unmaskedValue;
    }
    get rawInputValue() {
      return this.masked.rawInputValue;
    }
    get displayValue() {
      return (this.masked.value && this.displayChar) || this.value;
    }
    get isComplete() {
      return Boolean(this.masked.value) || this.isOptional;
    }
    _appendChar(t, e) {
      if ((void 0 === e && (e = {}), this.isFilled)) return new _();
      const s = this.masked.state,
        i = this.masked._appendChar(t, this.currentMaskFlags(e));
      return (
        i.inserted &&
          !1 === this.doValidate(e) &&
          ((i.inserted = i.rawInserted = ""), (this.masked.state = s)),
        i.inserted ||
          this.isOptional ||
          this.lazy ||
          e.input ||
          (i.inserted = this.placeholderChar),
        (i.skip = !i.inserted && !this.isOptional),
        (this.isFilled = Boolean(i.inserted)),
        i
      );
    }
    append(t, e, s) {
      return this.masked.append(t, this.currentMaskFlags(e), s);
    }
    _appendPlaceholder() {
      const t = new _();
      return (
        this.isFilled ||
          this.isOptional ||
          ((this.isFilled = !0), (t.inserted = this.placeholderChar)),
        t
      );
    }
    _appendEager() {
      return new _();
    }
    extractTail(t, e) {
      return this.masked.extractTail(t, e);
    }
    appendTail(t) {
      return this.masked.appendTail(t);
    }
    extractInput(t, e, s) {
      return (
        void 0 === t && (t = 0),
        void 0 === e && (e = this.value.length),
        this.masked.extractInput(t, e, s)
      );
    }
    nearestInputPos(t, e) {
      void 0 === e && (e = u.NONE);
      const s = this.value.length,
        i = Math.min(Math.max(t, 0), s);
      switch (e) {
        case u.LEFT:
        case u.FORCE_LEFT:
          return this.isComplete ? i : 0;
        case u.RIGHT:
        case u.FORCE_RIGHT:
          return this.isComplete ? i : s;
        default:
          return i;
      }
    }
    totalInputPositions(t, e) {
      return (
        void 0 === t && (t = 0),
        void 0 === e && (e = this.value.length),
        this.value.slice(t, e).length
      );
    }
    doValidate(t) {
      return (
        this.masked.doValidate(this.currentMaskFlags(t)) &&
        (!this.parent || this.parent.doValidate(this.currentMaskFlags(t)))
      );
    }
    doCommit() {
      this.masked.doCommit();
    }
    get state() {
      return {
        _value: this.value,
        _rawInputValue: this.rawInputValue,
        masked: this.masked.state,
        isFilled: this.isFilled,
      };
    }
    set state(t) {
      (this.masked.state = t.masked), (this.isFilled = t.isFilled);
    }
    currentMaskFlags(t) {
      var e;
      return {
        ...t,
        _beforeTailState:
          (null == t || null == (e = t._beforeTailState) ? void 0 : e.masked) ||
          (null == t ? void 0 : t._beforeTailState),
      };
    }
  }
  S.DEFAULT_DEFINITIONS = {
    0: /\d/,
    a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    "*": /./,
  };
  class D extends E {
    updateOptions(t) {
      super.updateOptions(t);
    }
    _update(t) {
      const e = t.mask;
      e && (t.validate = (t) => t.search(e) >= 0), super._update(t);
    }
  }
  o.MaskedRegExp = D;
  class B extends E {
    constructor(t) {
      super({
        ...B.DEFAULTS,
        ...t,
        definitions: Object.assign(
          {},
          S.DEFAULT_DEFINITIONS,
          null == t ? void 0 : t.definitions
        ),
      });
    }
    updateOptions(t) {
      super.updateOptions(t);
    }
    _update(t) {
      (t.definitions = Object.assign({}, this.definitions, t.definitions)),
        super._update(t),
        this._rebuildMask();
    }
    _rebuildMask() {
      const t = this.definitions;
      (this._blocks = []), (this._stops = []), (this._maskedBlocks = {});
      const e = this.mask;
      if (!e || !t) return;
      let s = !1,
        i = !1;
      for (let u = 0; u < e.length; ++u) {
        if (this.blocks) {
          const t = e.slice(u),
            s = Object.keys(this.blocks).filter((e) => 0 === t.indexOf(e));
          s.sort((t, e) => e.length - t.length);
          const i = s[0];
          if (i) {
            const t = p({
              lazy: this.lazy,
              eager: this.eager,
              placeholderChar: this.placeholderChar,
              displayChar: this.displayChar,
              overwrite: this.overwrite,
              ...d(this.blocks[i]),
              parent: this,
            });
            t &&
              (this._blocks.push(t),
              this._maskedBlocks[i] || (this._maskedBlocks[i] = []),
              this._maskedBlocks[i].push(this._blocks.length - 1)),
              (u += i.length - 1);
            continue;
          }
        }
        let a = e[u],
          r = a in t;
        if (a === B.STOP_CHAR) {
          this._stops.push(this._blocks.length);
          continue;
        }
        if ("{" === a || "}" === a) {
          s = !s;
          continue;
        }
        if ("[" === a || "]" === a) {
          i = !i;
          continue;
        }
        if (a === B.ESCAPE_CHAR) {
          if ((++u, (a = e[u]), !a)) break;
          r = !1;
        }
        const n = r
          ? new S({
              isOptional: i,
              lazy: this.lazy,
              eager: this.eager,
              placeholderChar: this.placeholderChar,
              displayChar: this.displayChar,
              ...d(t[a]),
              parent: this,
            })
          : new C({ char: a, eager: this.eager, isUnmasking: s });
        this._blocks.push(n);
      }
    }
    get state() {
      return { ...super.state, _blocks: this._blocks.map((t) => t.state) };
    }
    set state(t) {
      const { _blocks: e, ...s } = t;
      this._blocks.forEach((t, s) => (t.state = e[s])), (super.state = s);
    }
    reset() {
      super.reset(), this._blocks.forEach((t) => t.reset());
    }
    get isComplete() {
      return this._blocks.every((t) => t.isComplete);
    }
    get isFilled() {
      return this._blocks.every((t) => t.isFilled);
    }
    get isFixed() {
      return this._blocks.every((t) => t.isFixed);
    }
    get isOptional() {
      return this._blocks.every((t) => t.isOptional);
    }
    doCommit() {
      this._blocks.forEach((t) => t.doCommit()), super.doCommit();
    }
    get unmaskedValue() {
      return this._blocks.reduce((t, e) => t + e.unmaskedValue, "");
    }
    set unmaskedValue(t) {
      super.unmaskedValue = t;
    }
    get value() {
      return this._blocks.reduce((t, e) => t + e.value, "");
    }
    set value(t) {
      super.value = t;
    }
    get displayValue() {
      return this._blocks.reduce((t, e) => t + e.displayValue, "");
    }
    appendTail(t) {
      return super.appendTail(t).aggregate(this._appendPlaceholder());
    }
    _appendEager() {
      var t;
      const e = new _();
      let s =
        null == (t = this._mapPosToBlock(this.value.length)) ? void 0 : t.index;
      if (null == s) return e;
      this._blocks[s].isFilled && ++s;
      for (let t = s; t < this._blocks.length; ++t) {
        const s = this._blocks[t]._appendEager();
        if (!s.inserted) break;
        e.aggregate(s);
      }
      return e;
    }
    _appendCharRaw(t, e) {
      void 0 === e && (e = {});
      const s = this._mapPosToBlock(this.value.length),
        i = new _();
      if (!s) return i;
      for (let r = s.index; ; ++r) {
        var u, a;
        const s = this._blocks[r];
        if (!s) break;
        const n = s._appendChar(t, {
            ...e,
            _beforeTailState:
              null == (u = e._beforeTailState) || null == (a = u._blocks)
                ? void 0
                : a[r],
          }),
          h = n.skip;
        if ((i.aggregate(n), h || n.rawInserted)) break;
      }
      return i;
    }
    extractTail(t, e) {
      void 0 === t && (t = 0), void 0 === e && (e = this.value.length);
      const s = new A();
      return (
        t === e ||
          this._forEachBlocksInRange(t, e, (t, e, i, u) => {
            const a = t.extractTail(i, u);
            (a.stop = this._findStopBefore(e)),
              (a.from = this._blockStartPos(e)),
              a instanceof A && (a.blockIndex = e),
              s.extend(a);
          }),
        s
      );
    }
    extractInput(t, e, s) {
      if (
        (void 0 === t && (t = 0),
        void 0 === e && (e = this.value.length),
        void 0 === s && (s = {}),
        t === e)
      )
        return "";
      let i = "";
      return (
        this._forEachBlocksInRange(t, e, (t, e, u, a) => {
          i += t.extractInput(u, a, s);
        }),
        i
      );
    }
    _findStopBefore(t) {
      let e;
      for (let s = 0; s < this._stops.length; ++s) {
        const i = this._stops[s];
        if (!(i <= t)) break;
        e = i;
      }
      return e;
    }
    _appendPlaceholder(t) {
      const e = new _();
      if (this.lazy && null == t) return e;
      const s = this._mapPosToBlock(this.value.length);
      if (!s) return e;
      const i = s.index,
        u = null != t ? t : this._blocks.length;
      return (
        this._blocks.slice(i, u).forEach((s) => {
          if (!s.lazy || null != t) {
            var i;
            const t = s._appendPlaceholder(
              null == (i = s._blocks) ? void 0 : i.length
            );
            (this._value += t.inserted), e.aggregate(t);
          }
        }),
        e
      );
    }
    _mapPosToBlock(t) {
      let e = "";
      for (let s = 0; s < this._blocks.length; ++s) {
        const i = this._blocks[s],
          u = e.length;
        if (((e += i.value), t <= e.length)) return { index: s, offset: t - u };
      }
    }
    _blockStartPos(t) {
      return this._blocks.slice(0, t).reduce((t, e) => t + e.value.length, 0);
    }
    _forEachBlocksInRange(t, e, s) {
      void 0 === e && (e = this.value.length);
      const i = this._mapPosToBlock(t);
      if (i) {
        const t = this._mapPosToBlock(e),
          u = t && i.index === t.index,
          a = i.offset,
          r = t && u ? t.offset : this._blocks[i.index].value.length;
        if ((s(this._blocks[i.index], i.index, a, r), t && !u)) {
          for (let e = i.index + 1; e < t.index; ++e)
            s(this._blocks[e], e, 0, this._blocks[e].value.length);
          s(this._blocks[t.index], t.index, 0, t.offset);
        }
      }
    }
    remove(t, e) {
      void 0 === t && (t = 0), void 0 === e && (e = this.value.length);
      const s = super.remove(t, e);
      return (
        this._forEachBlocksInRange(t, e, (t, e, i, u) => {
          s.aggregate(t.remove(i, u));
        }),
        s
      );
    }
    nearestInputPos(t, e) {
      if ((void 0 === e && (e = u.NONE), !this._blocks.length)) return 0;
      const s = new F(this, t);
      if (e === u.NONE)
        return s.pushRightBeforeInput()
          ? s.pos
          : (s.popState(), s.pushLeftBeforeInput() ? s.pos : this.value.length);
      if (e === u.LEFT || e === u.FORCE_LEFT) {
        if (e === u.LEFT) {
          if ((s.pushRightBeforeFilled(), s.ok && s.pos === t)) return t;
          s.popState();
        }
        if (
          (s.pushLeftBeforeInput(),
          s.pushLeftBeforeRequired(),
          s.pushLeftBeforeFilled(),
          e === u.LEFT)
        ) {
          if (
            (s.pushRightBeforeInput(),
            s.pushRightBeforeRequired(),
            s.ok && s.pos <= t)
          )
            return s.pos;
          if ((s.popState(), s.ok && s.pos <= t)) return s.pos;
          s.popState();
        }
        return s.ok
          ? s.pos
          : e === u.FORCE_LEFT
          ? 0
          : (s.popState(), s.ok ? s.pos : (s.popState(), s.ok ? s.pos : 0));
      }
      return e === u.RIGHT || e === u.FORCE_RIGHT
        ? (s.pushRightBeforeInput(),
          s.pushRightBeforeRequired(),
          s.pushRightBeforeFilled()
            ? s.pos
            : e === u.FORCE_RIGHT
            ? this.value.length
            : (s.popState(),
              s.ok
                ? s.pos
                : (s.popState(),
                  s.ok ? s.pos : this.nearestInputPos(t, u.LEFT))))
        : t;
    }
    totalInputPositions(t, e) {
      void 0 === t && (t = 0), void 0 === e && (e = this.value.length);
      let s = 0;
      return (
        this._forEachBlocksInRange(t, e, (t, e, i, u) => {
          s += t.totalInputPositions(i, u);
        }),
        s
      );
    }
    maskedBlock(t) {
      return this.maskedBlocks(t)[0];
    }
    maskedBlocks(t) {
      const e = this._maskedBlocks[t];
      return e ? e.map((t) => this._blocks[t]) : [];
    }
  }
  (B.DEFAULTS = { lazy: !0, placeholderChar: "_" }),
    (B.STOP_CHAR = "`"),
    (B.ESCAPE_CHAR = "\\"),
    (B.InputDefinition = S),
    (B.FixedDefinition = C),
    (o.MaskedPattern = B);
  class b extends B {
    get _matchFrom() {
      return this.maxLength - String(this.from).length;
    }
    constructor(t) {
      super(t);
    }
    updateOptions(t) {
      super.updateOptions(t);
    }
    _update(t) {
      const {
        to: e = this.to || 0,
        from: s = this.from || 0,
        maxLength: i = this.maxLength || 0,
        autofix: u = this.autofix,
        ...a
      } = t;
      (this.to = e),
        (this.from = s),
        (this.maxLength = Math.max(String(e).length, i)),
        (this.autofix = u);
      const r = String(this.from).padStart(this.maxLength, "0"),
        n = String(this.to).padStart(this.maxLength, "0");
      let h = 0;
      for (; h < n.length && n[h] === r[h]; ) ++h;
      (a.mask =
        n.slice(0, h).replace(/0/g, "\\0") + "0".repeat(this.maxLength - h)),
        super._update(a);
    }
    get isComplete() {
      return super.isComplete && Boolean(this.value);
    }
    boundaries(t) {
      let e = "",
        s = "";
      const [, i, u] = t.match(/^(\D*)(\d*)(\D*)/) || [];
      return (
        u && ((e = "0".repeat(i.length) + u), (s = "9".repeat(i.length) + u)),
        (e = e.padEnd(this.maxLength, "0")),
        (s = s.padEnd(this.maxLength, "9")),
        [e, s]
      );
    }
    doPrepareChar(t, e) {
      let s;
      if (
        (void 0 === e && (e = {}),
        ([t, s] = super.doPrepareChar(t.replace(/\D/g, ""), e)),
        !this.autofix || !t)
      )
        return [t, s];
      const i = String(this.from).padStart(this.maxLength, "0"),
        u = String(this.to).padStart(this.maxLength, "0"),
        a = this.value + t;
      if (a.length > this.maxLength) return ["", s];
      const [r, n] = this.boundaries(a);
      return Number(n) < this.from
        ? [i[a.length - 1], s]
        : Number(r) > this.to
        ? "pad" === this.autofix && a.length < this.maxLength
          ? ["", s.aggregate(this.append(i[a.length - 1] + t, e))]
          : [u[a.length - 1], s]
        : [t, s];
    }
    doValidate(t) {
      const e = this.value;
      if (-1 === e.search(/[^0]/) && e.length <= this._matchFrom) return !0;
      const [s, i] = this.boundaries(e);
      return (
        this.from <= Number(i) && Number(s) <= this.to && super.doValidate(t)
      );
    }
  }
  o.MaskedRange = b;
  class x extends B {
    constructor(t) {
      const { mask: s, pattern: i, ...u } = { ...x.DEFAULTS, ...t };
      super({ ...u, mask: e(s) ? s : i });
    }
    updateOptions(t) {
      super.updateOptions(t);
    }
    _update(t) {
      const { mask: s, pattern: i, blocks: u, ...a } = { ...x.DEFAULTS, ...t },
        r = Object.assign({}, x.GET_DEFAULT_BLOCKS());
      t.min && (r.Y.from = t.min.getFullYear()),
        t.max && (r.Y.to = t.max.getFullYear()),
        t.min &&
          t.max &&
          r.Y.from === r.Y.to &&
          ((r.m.from = t.min.getMonth() + 1),
          (r.m.to = t.max.getMonth() + 1),
          r.m.from === r.m.to &&
            ((r.d.from = t.min.getDate()), (r.d.to = t.max.getDate()))),
        Object.assign(r, this.blocks, u),
        Object.keys(r).forEach((e) => {
          const s = r[e];
          !("autofix" in s) && "autofix" in t && (s.autofix = t.autofix);
        }),
        super._update({ ...a, mask: e(s) ? s : i, blocks: r });
    }
    doValidate(t) {
      const e = this.date;
      return (
        super.doValidate(t) &&
        (!this.isComplete ||
          (this.isDateExist(this.value) &&
            null != e &&
            (null == this.min || this.min <= e) &&
            (null == this.max || e <= this.max)))
      );
    }
    isDateExist(t) {
      return this.format(this.parse(t, this), this).indexOf(t) >= 0;
    }
    get date() {
      return this.typedValue;
    }
    set date(t) {
      this.typedValue = t;
    }
    get typedValue() {
      return this.isComplete ? super.typedValue : null;
    }
    set typedValue(t) {
      super.typedValue = t;
    }
    maskEquals(t) {
      return t === Date || super.maskEquals(t);
    }
  }
  (x.GET_DEFAULT_BLOCKS = () => ({
    d: { mask: b, from: 1, to: 31, maxLength: 2 },
    m: { mask: b, from: 1, to: 12, maxLength: 2 },
    Y: { mask: b, from: 1900, to: 9999 },
  })),
    (x.DEFAULTS = {
      mask: Date,
      pattern: "d{.}`m{.}`Y",
      format: (t, e) => {
        if (!t) return "";
        return [
          String(t.getDate()).padStart(2, "0"),
          String(t.getMonth() + 1).padStart(2, "0"),
          t.getFullYear(),
        ].join(".");
      },
      parse: (t, e) => {
        const [s, i, u] = t.split(".").map(Number);
        return new Date(u, i - 1, s);
      },
    }),
    (o.MaskedDate = x);
  class M extends E {
    constructor(t) {
      super({ ...M.DEFAULTS, ...t }), (this.currentMask = void 0);
    }
    updateOptions(t) {
      super.updateOptions(t);
    }
    _update(t) {
      super._update(t),
        "mask" in t &&
          (this.compiledMasks = Array.isArray(t.mask)
            ? t.mask.map((t) =>
                p({
                  overwrite: this._overwrite,
                  eager: this._eager,
                  skipInvalid: this._skipInvalid,
                  ...d(t),
                })
              )
            : []);
    }
    _appendCharRaw(t, e) {
      void 0 === e && (e = {});
      const s = this._applyDispatch(t, e);
      return (
        this.currentMask &&
          s.aggregate(
            this.currentMask._appendChar(t, this.currentMaskFlags(e))
          ),
        s
      );
    }
    _applyDispatch(t, e, s) {
      void 0 === t && (t = ""),
        void 0 === e && (e = {}),
        void 0 === s && (s = "");
      const i =
          e.tail && null != e._beforeTailState
            ? e._beforeTailState._value
            : this.value,
        u = this.rawInputValue,
        a =
          e.tail && null != e._beforeTailState
            ? e._beforeTailState._rawInputValue
            : u,
        r = u.slice(a.length),
        n = this.currentMask,
        h = new _(),
        o = null == n ? void 0 : n.state;
      if (
        ((this.currentMask = this.doDispatch(t, { ...e }, s)), this.currentMask)
      )
        if (this.currentMask !== n) {
          if ((this.currentMask.reset(), a)) {
            const t = this.currentMask.append(a, { raw: !0 });
            h.tailShift = t.inserted.length - i.length;
          }
          r &&
            (h.tailShift += this.currentMask.append(r, {
              raw: !0,
              tail: !0,
            }).tailShift);
        } else o && (this.currentMask.state = o);
      return h;
    }
    _appendPlaceholder() {
      const t = this._applyDispatch();
      return (
        this.currentMask && t.aggregate(this.currentMask._appendPlaceholder()),
        t
      );
    }
    _appendEager() {
      const t = this._applyDispatch();
      return (
        this.currentMask && t.aggregate(this.currentMask._appendEager()), t
      );
    }
    appendTail(t) {
      const e = new _();
      return (
        t && e.aggregate(this._applyDispatch("", {}, t)),
        e.aggregate(
          this.currentMask
            ? this.currentMask.appendTail(t)
            : super.appendTail(t)
        )
      );
    }
    currentMaskFlags(t) {
      var e, s;
      return {
        ...t,
        _beforeTailState:
          ((null == (e = t._beforeTailState) ? void 0 : e.currentMaskRef) ===
            this.currentMask &&
            (null == (s = t._beforeTailState) ? void 0 : s.currentMask)) ||
          t._beforeTailState,
      };
    }
    doDispatch(t, e, s) {
      return (
        void 0 === e && (e = {}),
        void 0 === s && (s = ""),
        this.dispatch(t, this, e, s)
      );
    }
    doValidate(t) {
      return (
        super.doValidate(t) &&
        (!this.currentMask ||
          this.currentMask.doValidate(this.currentMaskFlags(t)))
      );
    }
    doPrepare(t, e) {
      void 0 === e && (e = {});
      let [s, i] = super.doPrepare(t, e);
      if (this.currentMask) {
        let t;
        ([s, t] = super.doPrepare(s, this.currentMaskFlags(e))),
          (i = i.aggregate(t));
      }
      return [s, i];
    }
    doPrepareChar(t, e) {
      void 0 === e && (e = {});
      let [s, i] = super.doPrepareChar(t, e);
      if (this.currentMask) {
        let t;
        ([s, t] = super.doPrepareChar(s, this.currentMaskFlags(e))),
          (i = i.aggregate(t));
      }
      return [s, i];
    }
    reset() {
      var t;
      null == (t = this.currentMask) || t.reset(),
        this.compiledMasks.forEach((t) => t.reset());
    }
    get value() {
      return this.currentMask ? this.currentMask.value : "";
    }
    set value(t) {
      super.value = t;
    }
    get unmaskedValue() {
      return this.currentMask ? this.currentMask.unmaskedValue : "";
    }
    set unmaskedValue(t) {
      super.unmaskedValue = t;
    }
    get typedValue() {
      return this.currentMask ? this.currentMask.typedValue : "";
    }
    set typedValue(t) {
      let e = String(t);
      this.currentMask &&
        ((this.currentMask.typedValue = t),
        (e = this.currentMask.unmaskedValue)),
        (this.unmaskedValue = e);
    }
    get displayValue() {
      return this.currentMask ? this.currentMask.displayValue : "";
    }
    get isComplete() {
      var t;
      return Boolean(null == (t = this.currentMask) ? void 0 : t.isComplete);
    }
    get isFilled() {
      var t;
      return Boolean(null == (t = this.currentMask) ? void 0 : t.isFilled);
    }
    remove(t, e) {
      const s = new _();
      return (
        this.currentMask &&
          s
            .aggregate(this.currentMask.remove(t, e))
            .aggregate(this._applyDispatch()),
        s
      );
    }
    get state() {
      var t;
      return {
        ...super.state,
        _rawInputValue: this.rawInputValue,
        compiledMasks: this.compiledMasks.map((t) => t.state),
        currentMaskRef: this.currentMask,
        currentMask: null == (t = this.currentMask) ? void 0 : t.state,
      };
    }
    set state(t) {
      const { compiledMasks: e, currentMaskRef: s, currentMask: i, ...u } = t;
      e && this.compiledMasks.forEach((t, s) => (t.state = e[s])),
        null != s && ((this.currentMask = s), (this.currentMask.state = i)),
        (super.state = u);
    }
    extractInput(t, e, s) {
      return this.currentMask ? this.currentMask.extractInput(t, e, s) : "";
    }
    extractTail(t, e) {
      return this.currentMask
        ? this.currentMask.extractTail(t, e)
        : super.extractTail(t, e);
    }
    doCommit() {
      this.currentMask && this.currentMask.doCommit(), super.doCommit();
    }
    nearestInputPos(t, e) {
      return this.currentMask
        ? this.currentMask.nearestInputPos(t, e)
        : super.nearestInputPos(t, e);
    }
    get overwrite() {
      return this.currentMask ? this.currentMask.overwrite : this._overwrite;
    }
    set overwrite(t) {
      this._overwrite = t;
    }
    get eager() {
      return this.currentMask ? this.currentMask.eager : this._eager;
    }
    set eager(t) {
      this._eager = t;
    }
    get skipInvalid() {
      return this.currentMask
        ? this.currentMask.skipInvalid
        : this._skipInvalid;
    }
    set skipInvalid(t) {
      this._skipInvalid = t;
    }
    maskEquals(t) {
      return Array.isArray(t)
        ? this.compiledMasks.every((e, s) => {
            if (!t[s]) return;
            const { mask: i, ...u } = t[s];
            return n(e, u) && e.maskEquals(i);
          })
        : super.maskEquals(t);
    }
    typedValueEquals(t) {
      var e;
      return Boolean(
        null == (e = this.currentMask) ? void 0 : e.typedValueEquals(t)
      );
    }
  }
  (M.DEFAULTS = void 0),
    (M.DEFAULTS = {
      dispatch: (t, e, s, i) => {
        if (!e.compiledMasks.length) return;
        const a = e.rawInputValue,
          r = e.compiledMasks.map((r, n) => {
            const h = e.currentMask === r,
              o = h
                ? r.value.length
                : r.nearestInputPos(r.value.length, u.FORCE_LEFT);
            return (
              r.rawInputValue !== a
                ? (r.reset(), r.append(a, { raw: !0 }))
                : h || r.remove(o),
              r.append(t, e.currentMaskFlags(s)),
              r.appendTail(i),
              {
                index: n,
                weight: r.rawInputValue.length,
                totalInputPositions: r.totalInputPositions(
                  0,
                  Math.max(o, r.nearestInputPos(r.value.length, u.FORCE_LEFT))
                ),
              }
            );
          });
        return (
          r.sort(
            (t, e) =>
              e.weight - t.weight ||
              e.totalInputPositions - t.totalInputPositions
          ),
          e.compiledMasks[r[0].index]
        );
      },
    }),
    (o.MaskedDynamic = M);
  class T extends B {
    updateOptions(t) {
      super.updateOptions(t);
    }
    _update(t) {
      const { enum: e, ...s } = t;
      e && ((s.mask = "*".repeat(e[0].length)), (this.enum = e)),
        super._update(s);
    }
    doValidate(t) {
      return (
        this.enum.some((t) => t.indexOf(this.unmaskedValue) >= 0) &&
        super.doValidate(t)
      );
    }
  }
  o.MaskedEnum = T;
  class I extends E {
    updateOptions(t) {
      super.updateOptions(t);
    }
    _update(t) {
      super._update({ ...t, validate: t.mask });
    }
  }
  o.MaskedFunction = I;
  class w extends E {
    constructor(t) {
      super({ ...w.DEFAULTS, ...t });
    }
    updateOptions(t) {
      super.updateOptions(t);
    }
    _update(t) {
      super._update(t), this._updateRegExps();
    }
    _updateRegExps() {
      const t = "^" + (this.allowNegative ? "[+|\\-]?" : ""),
        e =
          (this.scale
            ? "(" + r(this.radix) + "\\d{0," + this.scale + "})?"
            : "") + "$";
      (this._numberRegExp = new RegExp(t + "\\d*" + e)),
        (this._mapToRadixRegExp = new RegExp(
          "[" + this.mapToRadix.map(r).join("") + "]",
          "g"
        )),
        (this._thousandsSeparatorRegExp = new RegExp(
          r(this.thousandsSeparator),
          "g"
        ));
    }
    _removeThousandsSeparators(t) {
      return t.replace(this._thousandsSeparatorRegExp, "");
    }
    _insertThousandsSeparators(t) {
      const e = t.split(this.radix);
      return (
        (e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator)),
        e.join(this.radix)
      );
    }
    doPrepareChar(t, e) {
      void 0 === e && (e = {}),
        (t = this._removeThousandsSeparators(
          this.scale &&
            this.mapToRadix.length &&
            ((e.input && e.raw) || (!e.input && !e.raw))
            ? t.replace(this._mapToRadixRegExp, this.radix)
            : t
        ));
      const [s, i] = super.doPrepareChar(t, e);
      return (
        t && !s && (i.skip = !0),
        !s ||
          this.allowPositive ||
          this.value ||
          "-" === s ||
          i.aggregate(this._appendChar("-")),
        [s, i]
      );
    }
    _separatorsCount(t, e) {
      void 0 === e && (e = !1);
      let s = 0;
      for (let i = 0; i < t; ++i)
        this._value.indexOf(this.thousandsSeparator, i) === i &&
          (++s, e && (t += this.thousandsSeparator.length));
      return s;
    }
    _separatorsCountFromSlice(t) {
      return (
        void 0 === t && (t = this._value),
        this._separatorsCount(this._removeThousandsSeparators(t).length, !0)
      );
    }
    extractInput(t, e, s) {
      return (
        void 0 === t && (t = 0),
        void 0 === e && (e = this.value.length),
        ([t, e] = this._adjustRangeWithSeparators(t, e)),
        this._removeThousandsSeparators(super.extractInput(t, e, s))
      );
    }
    _appendCharRaw(t, e) {
      if ((void 0 === e && (e = {}), !this.thousandsSeparator))
        return super._appendCharRaw(t, e);
      const s =
          e.tail && e._beforeTailState
            ? e._beforeTailState._value
            : this._value,
        i = this._separatorsCountFromSlice(s);
      this._value = this._removeThousandsSeparators(this.value);
      const u = super._appendCharRaw(t, e);
      this._value = this._insertThousandsSeparators(this._value);
      const a =
          e.tail && e._beforeTailState
            ? e._beforeTailState._value
            : this._value,
        r = this._separatorsCountFromSlice(a);
      return (
        (u.tailShift += (r - i) * this.thousandsSeparator.length),
        (u.skip = !u.rawInserted && t === this.thousandsSeparator),
        u
      );
    }
    _findSeparatorAround(t) {
      if (this.thousandsSeparator) {
        const e = t - this.thousandsSeparator.length + 1,
          s = this.value.indexOf(this.thousandsSeparator, e);
        if (s <= t) return s;
      }
      return -1;
    }
    _adjustRangeWithSeparators(t, e) {
      const s = this._findSeparatorAround(t);
      s >= 0 && (t = s);
      const i = this._findSeparatorAround(e);
      return i >= 0 && (e = i + this.thousandsSeparator.length), [t, e];
    }
    remove(t, e) {
      void 0 === t && (t = 0),
        void 0 === e && (e = this.value.length),
        ([t, e] = this._adjustRangeWithSeparators(t, e));
      const s = this.value.slice(0, t),
        i = this.value.slice(e),
        u = this._separatorsCount(s.length);
      this._value = this._insertThousandsSeparators(
        this._removeThousandsSeparators(s + i)
      );
      const a = this._separatorsCountFromSlice(s);
      return new _({ tailShift: (a - u) * this.thousandsSeparator.length });
    }
    nearestInputPos(t, e) {
      if (!this.thousandsSeparator) return t;
      switch (e) {
        case u.NONE:
        case u.LEFT:
        case u.FORCE_LEFT: {
          const s = this._findSeparatorAround(t - 1);
          if (s >= 0) {
            const i = s + this.thousandsSeparator.length;
            if (t < i || this.value.length <= i || e === u.FORCE_LEFT) return s;
          }
          break;
        }
        case u.RIGHT:
        case u.FORCE_RIGHT: {
          const e = this._findSeparatorAround(t);
          if (e >= 0) return e + this.thousandsSeparator.length;
        }
      }
      return t;
    }
    doValidate(t) {
      let e = Boolean(
        this._removeThousandsSeparators(this.value).match(this._numberRegExp)
      );
      if (e) {
        const t = this.number;
        e =
          e &&
          !isNaN(t) &&
          (null == this.min || this.min >= 0 || this.min <= this.number) &&
          (null == this.max || this.max <= 0 || this.number <= this.max);
      }
      return e && super.doValidate(t);
    }
    doCommit() {
      if (this.value) {
        const t = this.number;
        let e = t;
        null != this.min && (e = Math.max(e, this.min)),
          null != this.max && (e = Math.min(e, this.max)),
          e !== t && (this.unmaskedValue = this.format(e, this));
        let s = this.value;
        this.normalizeZeros && (s = this._normalizeZeros(s)),
          this.padFractionalZeros &&
            this.scale > 0 &&
            (s = this._padFractionalZeros(s)),
          (this._value = s);
      }
      super.doCommit();
    }
    _normalizeZeros(t) {
      const e = this._removeThousandsSeparators(t).split(this.radix);
      return (
        (e[0] = e[0].replace(/^(\D*)(0*)(\d*)/, (t, e, s, i) => e + i)),
        t.length && !/\d$/.test(e[0]) && (e[0] = e[0] + "0"),
        e.length > 1 &&
          ((e[1] = e[1].replace(/0*$/, "")), e[1].length || (e.length = 1)),
        this._insertThousandsSeparators(e.join(this.radix))
      );
    }
    _padFractionalZeros(t) {
      if (!t) return t;
      const e = t.split(this.radix);
      return (
        e.length < 2 && e.push(""),
        (e[1] = e[1].padEnd(this.scale, "0")),
        e.join(this.radix)
      );
    }
    doSkipInvalid(t, e, s) {
      void 0 === e && (e = {});
      const i =
        0 === this.scale &&
        t !== this.thousandsSeparator &&
        (t === this.radix ||
          t === w.UNMASKED_RADIX ||
          this.mapToRadix.includes(t));
      return super.doSkipInvalid(t, e, s) && !i;
    }
    get unmaskedValue() {
      return this._removeThousandsSeparators(
        this._normalizeZeros(this.value)
      ).replace(this.radix, w.UNMASKED_RADIX);
    }
    set unmaskedValue(t) {
      super.unmaskedValue = t;
    }
    get typedValue() {
      return this.parse(this.unmaskedValue, this);
    }
    set typedValue(t) {
      this.rawInputValue = this.format(t, this).replace(
        w.UNMASKED_RADIX,
        this.radix
      );
    }
    get number() {
      return this.typedValue;
    }
    set number(t) {
      this.typedValue = t;
    }
    get allowNegative() {
      return (
        (null != this.min && this.min < 0) || (null != this.max && this.max < 0)
      );
    }
    get allowPositive() {
      return (
        (null != this.min && this.min > 0) || (null != this.max && this.max > 0)
      );
    }
    typedValueEquals(t) {
      return (
        (super.typedValueEquals(t) ||
          (w.EMPTY_VALUES.includes(t) &&
            w.EMPTY_VALUES.includes(this.typedValue))) &&
        !(0 === t && "" === this.value)
      );
    }
  }
  (w.UNMASKED_RADIX = "."),
    (w.EMPTY_VALUES = [...E.EMPTY_VALUES, 0]),
    (w.DEFAULTS = {
      mask: Number,
      radix: ",",
      thousandsSeparator: "",
      mapToRadix: [w.UNMASKED_RADIX],
      min: Number.MIN_SAFE_INTEGER,
      max: Number.MAX_SAFE_INTEGER,
      scale: 2,
      normalizeZeros: !0,
      padFractionalZeros: !1,
      parse: Number,
      format: (t) =>
        t.toLocaleString("en-US", {
          useGrouping: !1,
          maximumFractionDigits: 20,
        }),
    }),
    (o.MaskedNumber = w);
  const V = { MASKED: "value", UNMASKED: "unmaskedValue", TYPED: "typedValue" };
  function P(t, e, s) {
    void 0 === e && (e = V.MASKED), void 0 === s && (s = V.MASKED);
    const i = p(t);
    return (t) => i.runIsolated((i) => ((i[e] = t), i[s]));
  }
  function R(t, e, s, i) {
    return P(e, s, i)(t);
  }
  (o.PIPE_TYPE = V), (o.createPipe = P), (o.pipe = R);
  try {
    globalThis.IMask = o;
  } catch {}
  (t.ChangeDetails = _),
    (t.ChunksTailDetails = A),
    (t.DIRECTION = u),
    (t.HTMLContenteditableMaskElement = f),
    (t.HTMLInputMaskElement = k),
    (t.HTMLMaskElement = g),
    (t.InputMask = m),
    (t.MaskElement = c),
    (t.Masked = E),
    (t.MaskedDate = x),
    (t.MaskedDynamic = M),
    (t.MaskedEnum = T),
    (t.MaskedFunction = I),
    (t.MaskedNumber = w),
    (t.MaskedPattern = B),
    (t.MaskedRange = b),
    (t.MaskedRegExp = D),
    (t.PIPE_TYPE = V),
    (t.PatternFixedDefinition = C),
    (t.PatternInputDefinition = S),
    (t.createMask = p),
    (t.createPipe = P),
    (t.default = o),
    (t.forceDirection = a),
    (t.normalizeOpts = d),
    (t.pipe = R),
    Object.defineProperty(t, "__esModule", { value: !0 });
});

!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.NiceSelect = t())
    : (e.NiceSelect = t());
})(self, function () {
  return (() => {
    "use strict";
    var e = {
        d: (t, i) => {
          for (var s in i)
            e.o(i, s) &&
              !e.o(t, s) &&
              Object.defineProperty(t, s, { enumerable: !0, get: i[s] });
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        r: (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        },
      },
      t = {};
    function i(e) {
      var t = document.createEvent("MouseEvents");
      t.initEvent("click", !0, !1), e.dispatchEvent(t);
    }
    function s(e) {
      var t = document.createEvent("HTMLEvents");
      t.initEvent("change", !0, !1), e.dispatchEvent(t);
    }
    function o(e) {
      var t = document.createEvent("FocusEvent");
      t.initEvent("focusin", !0, !1), e.dispatchEvent(t);
    }
    function n(e) {
      var t = document.createEvent("FocusEvent");
      t.initEvent("focusout", !0, !1), e.dispatchEvent(t);
    }
    function d(e, t) {
      return e.getAttribute(t);
    }
    function r(e, t) {
      return !!e && e.classList.contains(t);
    }
    function l(e, t) {
      if (e) return e.classList.add(t);
    }
    function a(e, t) {
      if (e) return e.classList.remove(t);
    }
    e.r(t), e.d(t, { default: () => p, bind: () => u });
    var c = { data: null, searchable: !1 };
    function p(e, t) {
      (this.el = e),
        (this.config = Object.assign({}, c, t || {})),
        (this.data = this.config.data),
        (this.selectedOptions = []),
        (this.placeholder =
          d(this.el, "placeholder") ||
          this.config.placeholder ||
          "Select an option"),
        (this.dropdown = null),
        (this.multiple = d(this.el, "multiple")),
        (this.disabled = d(this.el, "disabled")),
        this.create();
    }
    function u(e, t) {
      return new p(e, t);
    }
    return (
      (p.prototype.create = function () {
        (this.el.style.display = "none"),
          this.data ? this.processData(this.data) : this.extractData(),
          this.renderDropdown(),
          this.bindEvent();
      }),
      (p.prototype.processData = function (e) {
        var t = [];
        e.forEach((e) => {
          t.push({
            data: e,
            attributes: {
              selected: !1,
              disabled: !1,
              optgroup: "optgroup" == e.value,
            },
          });
        }),
          (this.options = t);
      }),
      (p.prototype.extractData = function () {
        var e = this.el.querySelectorAll("option,optgroup"),
          t = [],
          i = [],
          s = [];
        e.forEach((e) => {
          if ("OPTGROUP" == e.tagName)
            var s = { text: e.label, value: "optgroup" };
          else s = { text: e.innerText, value: e.value };
          var o = {
            selected: null != e.getAttribute("selected"),
            disabled: null != e.getAttribute("disabled"),
            optgroup: "OPTGROUP" == e.tagName,
          };
          t.push(s), i.push({ data: s, attributes: o });
        }),
          (this.data = t),
          (this.options = i),
          this.options.forEach(function (e) {
            e.attributes.selected && s.push(e);
          }),
          (this.selectedOptions = s);
      }),
      (p.prototype.renderDropdown = function () {
        var e = `<div class="${[
          "nice-select",
          d(this.el, "class") || "",
          this.disabled ? "disabled" : "",
          this.multiple ? "has-multiple" : "",
        ].join(" ")}" tabindex="${this.disabled ? null : 0}">\n  <span class="${
          this.multiple ? "multiple-options" : "current"
        }"></span>\n  <div class="nice-select-dropdown">\n  ${
          this.config.searchable
            ? '<div class="nice-select-search-box">\n<input type="text" class="nice-select-search" placeholder="Search..."/>\n</div>'
            : ""
        }\n  <ul class="list"></ul>\n  </div></div>\n`;
        this.el.insertAdjacentHTML("afterend", e),
          (this.dropdown = this.el.nextElementSibling),
          this._renderSelectedItems(),
          this._renderItems();
      }),
      (p.prototype._renderSelectedItems = function () {
        if (this.multiple) {
          var e = "";
          "auto" == window.getComputedStyle(this.dropdown).width ||
          this.selectedOptions.length < 2
            ? (this.selectedOptions.forEach(function (t) {
                e += `<span class="current">${t.data.text}</span>`;
              }),
              (e = "" == e ? this.placeholder : e))
            : (e = this.selectedOptions.length + " selected"),
            (this.dropdown.querySelector(".multiple-options").innerHTML = e);
        } else {
          var t =
            this.selectedOptions.length > 0
              ? this.selectedOptions[0].data.text
              : this.placeholder;
          this.dropdown.querySelector(".current").innerHTML = t;
        }
      }),
      (p.prototype._renderItems = function () {
        var e = this.dropdown.querySelector("ul");
        this.options.forEach((t) => {
          e.appendChild(this._renderItem(t));
        });
      }),
      (p.prototype._renderItem = function (e) {
        var t = document.createElement("li");
        if (((t.innerHTML = e.data.text), e.attributes.optgroup))
          t.classList.add("optgroup");
        else {
          t.setAttribute("data-value", e.data.value);
          var i = [
            "option",
            e.attributes.selected ? "selected" : null,
            e.attributes.disabled ? "disabled" : null,
          ];
          t.addEventListener("click", this._onItemClicked.bind(this, e)),
            t.classList.add(...i);
        }
        return (e.element = t), t;
      }),
      (p.prototype.update = function () {
        if ((this.extractData(), this.dropdown)) {
          var e = r(this.dropdown, "open");
          this.dropdown.parentNode.removeChild(this.dropdown),
            this.create(),
            e && i(this.dropdown);
        }
      }),
      (p.prototype.disable = function () {
        this.disabled || ((this.disabled = !0), l(this.dropdown, "disabled"));
      }),
      (p.prototype.enable = function () {
        this.disabled && ((this.disabled = !1), a(this.dropdown, "disabled"));
      }),
      (p.prototype.clear = function () {
        (this.selectedOptions = []),
          this._renderSelectedItems(),
          this.updateSelectValue(),
          s(this.el);
      }),
      (p.prototype.destroy = function () {
        this.dropdown &&
          (this.dropdown.parentNode.removeChild(this.dropdown),
          (this.el.style.display = ""));
      }),
      (p.prototype.bindEvent = function () {
        this.dropdown.addEventListener("click", this._onClicked.bind(this)),
          this.dropdown.addEventListener(
            "keydown",
            this._onKeyPressed.bind(this)
          ),
          this.dropdown.addEventListener("focusin", o.bind(this, this.el)),
          this.dropdown.addEventListener("focusout", n.bind(this, this.el)),
          window.addEventListener("click", this._onClickedOutside.bind(this)),
          this.config.searchable && this._bindSearchEvent();
      }),
      (p.prototype._bindSearchEvent = function () {
        var e = this.dropdown.querySelector(".nice-select-search");
        e &&
          e.addEventListener("click", function (e) {
            return e.stopPropagation(), !1;
          }),
          e.addEventListener("input", this._onSearchChanged.bind(this));
      }),
      (p.prototype._onClicked = function (e) {
        if (
          (this.multiple
            ? this.dropdown.classList.add("open")
            : this.dropdown.classList.toggle("open"),
          this.dropdown.classList.contains("open"))
        ) {
          var t = this.dropdown.querySelector(".nice-select-search");
          t && ((t.value = ""), t.focus());
          var i = this.dropdown.querySelector(".focus");
          a(i, "focus"),
            l((i = this.dropdown.querySelector(".selected")), "focus"),
            this.dropdown.querySelectorAll("ul li").forEach(function (e) {
              e.style.display = "";
            });
        } else this.dropdown.focus();
      }),
      (p.prototype._onItemClicked = function (e, t) {
        var i = t.target;
        r(i, "disabled") ||
          (this.multiple
            ? r(i, "selected")
              ? (a(i, "selected"),
                this.selectedOptions.splice(this.selectedOptions.indexOf(e), 1),
                (this.el.querySelector(
                  'option[value="' + i.dataset.value + '"]'
                ).selected = !1))
              : (l(i, "selected"), this.selectedOptions.push(e))
            : (this.selectedOptions.forEach(function (e) {
                a(e.element, "selected");
              }),
              l(i, "selected"),
              (this.selectedOptions = [e])),
          this._renderSelectedItems(),
          this.updateSelectValue());
      }),
      (p.prototype.updateSelectValue = function () {
        if (this.multiple) {
          var e = this.el;
          this.selectedOptions.forEach(function (t) {
            var i = e.querySelector('option[value="' + t.data.value + '"]');
            i && i.setAttribute("selected", !0);
          });
        } else
          this.selectedOptions.length > 0 &&
            (this.el.value = this.selectedOptions[0].data.value);
        s(this.el);
      }),
      (p.prototype._onClickedOutside = function (e) {
        this.dropdown.contains(e.target) ||
          this.dropdown.classList.remove("open");
      }),
      (p.prototype._onKeyPressed = function (e) {
        var t = this.dropdown.querySelector(".focus"),
          s = this.dropdown.classList.contains("open");
        if (32 == e.keyCode || 13 == e.keyCode) i(s ? t : this.dropdown);
        else if (40 == e.keyCode) {
          if (s) {
            var o = this._findNext(t);
            o &&
              (a(this.dropdown.querySelector(".focus"), "focus"),
              l(o, "focus"));
          } else i(this.dropdown);
          e.preventDefault();
        } else if (38 == e.keyCode) {
          if (s) {
            var n = this._findPrev(t);
            n &&
              (a(this.dropdown.querySelector(".focus"), "focus"),
              l(n, "focus"));
          } else i(this.dropdown);
          e.preventDefault();
        } else 27 == e.keyCode && s && i(this.dropdown);
        return !1;
      }),
      (p.prototype._findNext = function (e) {
        for (
          e = e
            ? e.nextElementSibling
            : this.dropdown.querySelector(".list .option");
          e;

        ) {
          if (!r(e, "disabled") && "none" != e.style.display) return e;
          e = e.nextElementSibling;
        }
        return null;
      }),
      (p.prototype._findPrev = function (e) {
        for (
          e = e
            ? e.previousElementSibling
            : this.dropdown.querySelector(".list .option:last-child");
          e;

        ) {
          if (!r(e, "disabled") && "none" != e.style.display) return e;
          e = e.previousElementSibling;
        }
        return null;
      }),
      (p.prototype._onSearchChanged = function (e) {
        var t = this.dropdown.classList.contains("open"),
          i = e.target.value;
        if ("" == (i = i.toLowerCase()))
          this.options.forEach(function (e) {
            e.element.style.display = "";
          });
        else if (t) {
          var s = new RegExp(i);
          this.options.forEach(function (e) {
            var t = e.data.text.toLowerCase(),
              i = s.test(t);
            e.element.style.display = i ? "" : "none";
          });
        }
        this.dropdown.querySelectorAll(".focus").forEach(function (e) {
          a(e, "focus");
        }),
          l(this._findNext(null), "focus");
      }),
      t
    );
  })();
});
"object" == typeof navigator &&
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define("Plyr", t)
      : ((e = "undefined" != typeof globalThis ? globalThis : e || self).Plyr =
          t());
  })(this, function () {
    "use strict";
    function e(e, t, i) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var i = e[Symbol.toPrimitive];
            if (void 0 !== i) {
              var s = i.call(e, t || "default");
              if ("object" != typeof s) return s;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = i),
        e
      );
    }
    function t(e, t) {
      for (var i = 0; i < t.length; i++) {
        var s = t[i];
        (s.enumerable = s.enumerable || !1),
          (s.configurable = !0),
          "value" in s && (s.writable = !0),
          Object.defineProperty(e, s.key, s);
      }
    }
    function i(e, t, i) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = i),
        e
      );
    }
    function s(e, t) {
      var i = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        t &&
          (s = s.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          i.push.apply(i, s);
      }
      return i;
    }
    function n(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? s(Object(n), !0).forEach(function (t) {
              i(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : s(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var a = { addCSS: !0, thumbWidth: 15, watch: !0 };
    var l = function (e) {
        return null != e ? e.constructor : null;
      },
      r = function (e, t) {
        return !!(e && t && e instanceof t);
      },
      o = function (e) {
        return null == e;
      },
      c = function (e) {
        return l(e) === Object;
      },
      u = function (e) {
        return l(e) === String;
      },
      h = function (e) {
        return Array.isArray(e);
      },
      d = function (e) {
        return r(e, NodeList);
      },
      m = {
        nullOrUndefined: o,
        object: c,
        number: function (e) {
          return l(e) === Number && !Number.isNaN(e);
        },
        string: u,
        boolean: function (e) {
          return l(e) === Boolean;
        },
        function: function (e) {
          return l(e) === Function;
        },
        array: h,
        nodeList: d,
        element: function (e) {
          return r(e, Element);
        },
        event: function (e) {
          return r(e, Event);
        },
        empty: function (e) {
          return (
            o(e) ||
            ((u(e) || h(e) || d(e)) && !e.length) ||
            (c(e) && !Object.keys(e).length)
          );
        },
      };
    function p(e, t) {
      if (1 > t) {
        var i = (function (e) {
          var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
          return t
            ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0))
            : 0;
        })(t);
        return parseFloat(e.toFixed(i));
      }
      return Math.round(e / t) * t;
    }
    var g = (function () {
      function e(t, i) {
        (function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          m.element(t)
            ? (this.element = t)
            : m.string(t) && (this.element = document.querySelector(t)),
          m.element(this.element) &&
            m.empty(this.element.rangeTouch) &&
            ((this.config = n({}, a, {}, i)), this.init());
      }
      return (
        (function (e, i, s) {
          i && t(e.prototype, i), s && t(e, s);
        })(
          e,
          [
            {
              key: "init",
              value: function () {
                e.enabled &&
                  (this.config.addCSS &&
                    ((this.element.style.userSelect = "none"),
                    (this.element.style.webKitUserSelect = "none"),
                    (this.element.style.touchAction = "manipulation")),
                  this.listeners(!0),
                  (this.element.rangeTouch = this));
              },
            },
            {
              key: "destroy",
              value: function () {
                e.enabled &&
                  (this.config.addCSS &&
                    ((this.element.style.userSelect = ""),
                    (this.element.style.webKitUserSelect = ""),
                    (this.element.style.touchAction = "")),
                  this.listeners(!1),
                  (this.element.rangeTouch = null));
              },
            },
            {
              key: "listeners",
              value: function (e) {
                var t = this,
                  i = e ? "addEventListener" : "removeEventListener";
                ["touchstart", "touchmove", "touchend"].forEach(function (e) {
                  t.element[i](
                    e,
                    function (e) {
                      return t.set(e);
                    },
                    !1
                  );
                });
              },
            },
            {
              key: "get",
              value: function (t) {
                if (!e.enabled || !m.event(t)) return null;
                var i,
                  s = t.target,
                  n = t.changedTouches[0],
                  a = parseFloat(s.getAttribute("min")) || 0,
                  l = parseFloat(s.getAttribute("max")) || 100,
                  r = parseFloat(s.getAttribute("step")) || 1,
                  o = s.getBoundingClientRect(),
                  c = ((100 / o.width) * (this.config.thumbWidth / 2)) / 100;
                return (
                  0 > (i = (100 / o.width) * (n.clientX - o.left))
                    ? (i = 0)
                    : 100 < i && (i = 100),
                  50 > i
                    ? (i -= (100 - 2 * i) * c)
                    : 50 < i && (i += 2 * (i - 50) * c),
                  a + p((i / 100) * (l - a), r)
                );
              },
            },
            {
              key: "set",
              value: function (t) {
                e.enabled &&
                  m.event(t) &&
                  !t.target.disabled &&
                  (t.preventDefault(),
                  (t.target.value = this.get(t)),
                  (function (e, t) {
                    if (e && t) {
                      var i = new Event(t, { bubbles: !0 });
                      e.dispatchEvent(i);
                    }
                  })(t.target, "touchend" === t.type ? "change" : "input"));
              },
            },
          ],
          [
            {
              key: "setup",
              value: function (t) {
                var i =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  s = null;
                if (
                  (m.empty(t) || m.string(t)
                    ? (s = Array.from(
                        document.querySelectorAll(
                          m.string(t) ? t : 'input[type="range"]'
                        )
                      ))
                    : m.element(t)
                    ? (s = [t])
                    : m.nodeList(t)
                    ? (s = Array.from(t))
                    : m.array(t) && (s = t.filter(m.element)),
                  m.empty(s))
                )
                  return null;
                var l = n({}, a, {}, i);
                if (m.string(t) && l.watch) {
                  var r = new MutationObserver(function (i) {
                    Array.from(i).forEach(function (i) {
                      Array.from(i.addedNodes).forEach(function (i) {
                        m.element(i) &&
                          (function (e, t) {
                            return function () {
                              return Array.from(
                                document.querySelectorAll(t)
                              ).includes(this);
                            }.call(e, t);
                          })(i, t) &&
                          new e(i, l);
                      });
                    });
                  });
                  r.observe(document.body, { childList: !0, subtree: !0 });
                }
                return s.map(function (t) {
                  return new e(t, i);
                });
              },
            },
            {
              key: "enabled",
              get: function () {
                return "ontouchstart" in document.documentElement;
              },
            },
          ]
        ),
        e
      );
    })();
    const f = (e) => (null != e ? e.constructor : null),
      y = (e, t) => Boolean(e && t && e instanceof t),
      b = (e) => null == e,
      v = (e) => f(e) === Object,
      w = (e) => f(e) === String,
      T = (e) => "function" == typeof e,
      k = (e) => Array.isArray(e),
      C = (e) => y(e, NodeList),
      A = (e) =>
        b(e) ||
        ((w(e) || k(e) || C(e)) && !e.length) ||
        (v(e) && !Object.keys(e).length);
    var S = {
      nullOrUndefined: b,
      object: v,
      number: (e) => f(e) === Number && !Number.isNaN(e),
      string: w,
      boolean: (e) => f(e) === Boolean,
      function: T,
      array: k,
      weakMap: (e) => y(e, WeakMap),
      nodeList: C,
      element: (e) =>
        null !== e &&
        "object" == typeof e &&
        1 === e.nodeType &&
        "object" == typeof e.style &&
        "object" == typeof e.ownerDocument,
      textNode: (e) => f(e) === Text,
      event: (e) => y(e, Event),
      keyboardEvent: (e) => y(e, KeyboardEvent),
      cue: (e) => y(e, window.TextTrackCue) || y(e, window.VTTCue),
      track: (e) => y(e, TextTrack) || (!b(e) && w(e.kind)),
      promise: (e) => y(e, Promise) && T(e.then),
      url: (e) => {
        if (y(e, window.URL)) return !0;
        if (!w(e)) return !1;
        let t = e;
        (e.startsWith("http://") && e.startsWith("https://")) ||
          (t = `http://${e}`);
        try {
          return !A(new URL(t).hostname);
        } catch (e) {
          return !1;
        }
      },
      empty: A,
    };
    const E = (() => {
      const e = document.createElement("span"),
        t = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        },
        i = Object.keys(t).find((t) => void 0 !== e.style[t]);
      return !!S.string(i) && t[i];
    })();
    function P(e, t) {
      setTimeout(() => {
        try {
          (e.hidden = !0), e.offsetHeight, (e.hidden = !1);
        } catch (e) {}
      }, t);
    }
    var M = {
      isIE: Boolean(window.document.documentMode),
      isEdge: /Edge/g.test(navigator.userAgent),
      isWebKit:
        "WebkitAppearance" in document.documentElement.style &&
        !/Edge/g.test(navigator.userAgent),
      isIPhone:
        /iPhone|iPod/gi.test(navigator.userAgent) &&
        navigator.maxTouchPoints > 1,
      isIPadOS:
        "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1,
      isIos:
        /iPad|iPhone|iPod/gi.test(navigator.userAgent) &&
        navigator.maxTouchPoints > 1,
    };
    function N(e, t) {
      return t.split(".").reduce((e, t) => e && e[t], e);
    }
    function x(e = {}, ...t) {
      if (!t.length) return e;
      const i = t.shift();
      return S.object(i)
        ? (Object.keys(i).forEach((t) => {
            S.object(i[t])
              ? (Object.keys(e).includes(t) || Object.assign(e, { [t]: {} }),
                x(e[t], i[t]))
              : Object.assign(e, { [t]: i[t] });
          }),
          x(e, ...t))
        : e;
    }
    function L(e, t) {
      const i = e.length ? e : [e];
      Array.from(i)
        .reverse()
        .forEach((e, i) => {
          const s = i > 0 ? t.cloneNode(!0) : t,
            n = e.parentNode,
            a = e.nextSibling;
          s.appendChild(e), a ? n.insertBefore(s, a) : n.appendChild(s);
        });
    }
    function I(e, t) {
      S.element(e) &&
        !S.empty(t) &&
        Object.entries(t)
          .filter(([, e]) => !S.nullOrUndefined(e))
          .forEach(([t, i]) => e.setAttribute(t, i));
    }
    function $(e, t, i) {
      const s = document.createElement(e);
      return S.object(t) && I(s, t), S.string(i) && (s.innerText = i), s;
    }
    function _(e, t, i, s) {
      S.element(t) && t.appendChild($(e, i, s));
    }
    function O(e) {
      S.nodeList(e) || S.array(e)
        ? Array.from(e).forEach(O)
        : S.element(e) &&
          S.element(e.parentNode) &&
          e.parentNode.removeChild(e);
    }
    function j(e) {
      if (!S.element(e)) return;
      let { length: t } = e.childNodes;
      for (; t > 0; ) e.removeChild(e.lastChild), (t -= 1);
    }
    function q(e, t) {
      return S.element(t) && S.element(t.parentNode) && S.element(e)
        ? (t.parentNode.replaceChild(e, t), e)
        : null;
    }
    function D(e, t) {
      if (!S.string(e) || S.empty(e)) return {};
      const i = {},
        s = x({}, t);
      return (
        e.split(",").forEach((e) => {
          const t = e.trim(),
            n = t.replace(".", ""),
            a = t.replace(/[[\]]/g, "").split("="),
            [l] = a,
            r = a.length > 1 ? a[1].replace(/["']/g, "") : "";
          switch (t.charAt(0)) {
            case ".":
              S.string(s.class) ? (i.class = `${s.class} ${n}`) : (i.class = n);
              break;
            case "#":
              i.id = t.replace("#", "");
              break;
            case "[":
              i[l] = r;
          }
        }),
        x(s, i)
      );
    }
    function H(e, t) {
      if (!S.element(e)) return;
      let i = t;
      S.boolean(i) || (i = !e.hidden), (e.hidden = i);
    }
    function R(e, t, i) {
      if (S.nodeList(e)) return Array.from(e).map((e) => R(e, t, i));
      if (S.element(e)) {
        let s = "toggle";
        return (
          void 0 !== i && (s = i ? "add" : "remove"),
          e.classList[s](t),
          e.classList.contains(t)
        );
      }
      return !1;
    }
    function F(e, t) {
      return S.element(e) && e.classList.contains(t);
    }
    function V(e, t) {
      const { prototype: i } = Element;
      return (
        i.matches ||
        i.webkitMatchesSelector ||
        i.mozMatchesSelector ||
        i.msMatchesSelector ||
        function () {
          return Array.from(document.querySelectorAll(t)).includes(this);
        }
      ).call(e, t);
    }
    function U(e) {
      return this.elements.container.querySelectorAll(e);
    }
    function B(e) {
      return this.elements.container.querySelector(e);
    }
    function W(e = null, t = !1) {
      S.element(e) && e.focus({ preventScroll: !0, focusVisible: t });
    }
    const z = {
        "audio/ogg": "vorbis",
        "audio/wav": "1",
        "video/webm": "vp8, vorbis",
        "video/mp4": "avc1.42E01E, mp4a.40.2",
        "video/ogg": "theora",
      },
      K = {
        audio: "canPlayType" in document.createElement("audio"),
        video: "canPlayType" in document.createElement("video"),
        check(e, t) {
          const i = K[e] || "html5" !== t;
          return { api: i, ui: i && K.rangeInput };
        },
        pip: !(
          M.isIPhone ||
          (!S.function($("video").webkitSetPresentationMode) &&
            (!document.pictureInPictureEnabled ||
              $("video").disablePictureInPicture))
        ),
        airplay: S.function(window.WebKitPlaybackTargetAvailabilityEvent),
        playsinline: "playsInline" in document.createElement("video"),
        mime(e) {
          if (S.empty(e)) return !1;
          const [t] = e.split("/");
          let i = e;
          if (!this.isHTML5 || t !== this.type) return !1;
          Object.keys(z).includes(i) && (i += `; codecs="${z[e]}"`);
          try {
            return Boolean(i && this.media.canPlayType(i).replace(/no/, ""));
          } catch (e) {
            return !1;
          }
        },
        textTracks: "textTracks" in document.createElement("video"),
        rangeInput: (() => {
          const e = document.createElement("input");
          return (e.type = "range"), "range" === e.type;
        })(),
        touch: "ontouchstart" in document.documentElement,
        transitions: !1 !== E,
        reducedMotion:
          "matchMedia" in window &&
          window.matchMedia("(prefers-reduced-motion)").matches,
      },
      Y = (() => {
        let e = !1;
        try {
          const t = Object.defineProperty({}, "passive", {
            get: () => ((e = !0), null),
          });
          window.addEventListener("test", null, t),
            window.removeEventListener("test", null, t);
        } catch (e) {}
        return e;
      })();
    function Q(e, t, i, s = !1, n = !0, a = !1) {
      if (!e || !("addEventListener" in e) || S.empty(t) || !S.function(i))
        return;
      const l = t.split(" ");
      let r = a;
      Y && (r = { passive: n, capture: a }),
        l.forEach((t) => {
          this &&
            this.eventListeners &&
            s &&
            this.eventListeners.push({
              element: e,
              type: t,
              callback: i,
              options: r,
            }),
            e[s ? "addEventListener" : "removeEventListener"](t, i, r);
        });
    }
    function X(e, t = "", i, s = !0, n = !1) {
      Q.call(this, e, t, i, !0, s, n);
    }
    function J(e, t = "", i, s = !0, n = !1) {
      Q.call(this, e, t, i, !1, s, n);
    }
    function G(e, t = "", i, s = !0, n = !1) {
      const a = (...l) => {
        J(e, t, a, s, n), i.apply(this, l);
      };
      Q.call(this, e, t, a, !0, s, n);
    }
    function Z(e, t = "", i = !1, s = {}) {
      if (!S.element(e) || S.empty(t)) return;
      const n = new CustomEvent(t, {
        bubbles: i,
        detail: { ...s, plyr: this },
      });
      e.dispatchEvent(n);
    }
    function ee() {
      this &&
        this.eventListeners &&
        (this.eventListeners.forEach((e) => {
          const { element: t, type: i, callback: s, options: n } = e;
          t.removeEventListener(i, s, n);
        }),
        (this.eventListeners = []));
    }
    function te() {
      return new Promise((e) =>
        this.ready
          ? setTimeout(e, 0)
          : X.call(this, this.elements.container, "ready", e)
      ).then(() => {});
    }
    function ie(e) {
      S.promise(e) && e.then(null, () => {});
    }
    function se(e) {
      return S.array(e) ? e.filter((t, i) => e.indexOf(t) === i) : e;
    }
    function ne(e, t) {
      return S.array(e) && e.length
        ? e.reduce((e, i) => (Math.abs(i - t) < Math.abs(e - t) ? i : e))
        : null;
    }
    function ae(e) {
      return !(!window || !window.CSS) && window.CSS.supports(e);
    }
    const le = [
      [1, 1],
      [4, 3],
      [3, 4],
      [5, 4],
      [4, 5],
      [3, 2],
      [2, 3],
      [16, 10],
      [10, 16],
      [16, 9],
      [9, 16],
      [21, 9],
      [9, 21],
      [32, 9],
      [9, 32],
    ].reduce((e, [t, i]) => ({ ...e, [t / i]: [t, i] }), {});
    function re(e) {
      if (!(S.array(e) || (S.string(e) && e.includes(":")))) return !1;
      return (S.array(e) ? e : e.split(":")).map(Number).every(S.number);
    }
    function oe(e) {
      if (!S.array(e) || !e.every(S.number)) return null;
      const [t, i] = e,
        s = (e, t) => (0 === t ? e : s(t, e % t)),
        n = s(t, i);
      return [t / n, i / n];
    }
    function ce(e) {
      const t = (e) => (re(e) ? e.split(":").map(Number) : null);
      let i = t(e);
      if (
        (null === i && (i = t(this.config.ratio)),
        null === i &&
          !S.empty(this.embed) &&
          S.array(this.embed.ratio) &&
          ({ ratio: i } = this.embed),
        null === i && this.isHTML5)
      ) {
        const { videoWidth: e, videoHeight: t } = this.media;
        i = [e, t];
      }
      return oe(i);
    }
    function ue(e) {
      if (!this.isVideo) return {};
      const { wrapper: t } = this.elements,
        i = ce.call(this, e);
      if (!S.array(i)) return {};
      const [s, n] = oe(i),
        a = (100 / s) * n;
      if (
        (ae(`aspect-ratio: ${s}/${n}`)
          ? (t.style.aspectRatio = `${s}/${n}`)
          : (t.style.paddingBottom = `${a}%`),
        this.isVimeo && !this.config.vimeo.premium && this.supported.ui)
      ) {
        const e =
            (100 / this.media.offsetWidth) *
            parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
          i = (e - a) / (e / 50);
        this.fullscreen.active
          ? (t.style.paddingBottom = null)
          : (this.media.style.transform = `translateY(-${i}%)`);
      } else this.isHTML5 && t.classList.add(this.config.classNames.videoFixedRatio);
      return { padding: a, ratio: i };
    }
    function he(e, t, i = 0.05) {
      const s = e / t,
        n = ne(Object.keys(le), s);
      return Math.abs(n - s) <= i ? le[n] : [e, t];
    }
    const de = {
      getSources() {
        if (!this.isHTML5) return [];
        return Array.from(this.media.querySelectorAll("source")).filter((e) => {
          const t = e.getAttribute("type");
          return !!S.empty(t) || K.mime.call(this, t);
        });
      },
      getQualityOptions() {
        return this.config.quality.forced
          ? this.config.quality.options
          : de.getSources
              .call(this)
              .map((e) => Number(e.getAttribute("size")))
              .filter(Boolean);
      },
      setup() {
        if (!this.isHTML5) return;
        const e = this;
        (e.options.speed = e.config.speed.options),
          S.empty(this.config.ratio) || ue.call(e),
          Object.defineProperty(e.media, "quality", {
            get() {
              const t = de.getSources
                .call(e)
                .find((t) => t.getAttribute("src") === e.source);
              return t && Number(t.getAttribute("size"));
            },
            set(t) {
              if (e.quality !== t) {
                if (
                  e.config.quality.forced &&
                  S.function(e.config.quality.onChange)
                )
                  e.config.quality.onChange(t);
                else {
                  const i = de.getSources
                    .call(e)
                    .find((e) => Number(e.getAttribute("size")) === t);
                  if (!i) return;
                  const {
                    currentTime: s,
                    paused: n,
                    preload: a,
                    readyState: l,
                    playbackRate: r,
                  } = e.media;
                  (e.media.src = i.getAttribute("src")),
                    ("none" !== a || l) &&
                      (e.once("loadedmetadata", () => {
                        (e.speed = r), (e.currentTime = s), n || ie(e.play());
                      }),
                      e.media.load());
                }
                Z.call(e, e.media, "qualitychange", !1, { quality: t });
              }
            },
          });
      },
      cancelRequests() {
        this.isHTML5 &&
          (O(de.getSources.call(this)),
          this.media.setAttribute("src", this.config.blankVideo),
          this.media.load(),
          this.debug.log("Cancelled network requests"));
      },
    };
    function me(e, ...t) {
      return S.empty(e)
        ? e
        : e.toString().replace(/{(\d+)}/g, (e, i) => t[i].toString());
    }
    const pe = (e = "", t = "", i = "") =>
        e.replace(
          new RegExp(
            t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"),
            "g"
          ),
          i.toString()
        ),
      ge = (e = "") =>
        e
          .toString()
          .replace(
            /\w\S*/g,
            (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()
          );
    function fe(e = "") {
      let t = e.toString();
      return (
        (t = (function (e = "") {
          let t = e.toString();
          return (
            (t = pe(t, "-", " ")),
            (t = pe(t, "_", " ")),
            (t = ge(t)),
            pe(t, " ", "")
          );
        })(t)),
        t.charAt(0).toLowerCase() + t.slice(1)
      );
    }
    function ye(e) {
      const t = document.createElement("div");
      return t.appendChild(e), t.innerHTML;
    }
    const be = {
        pip: "PIP",
        airplay: "AirPlay",
        html5: "HTML5",
        vimeo: "Vimeo",
        youtube: "YouTube",
      },
      ve = {
        get(e = "", t = {}) {
          if (S.empty(e) || S.empty(t)) return "";
          let i = N(t.i18n, e);
          if (S.empty(i)) return Object.keys(be).includes(e) ? be[e] : "";
          const s = { "{seektime}": t.seekTime, "{title}": t.title };
          return (
            Object.entries(s).forEach(([e, t]) => {
              i = pe(i, e, t);
            }),
            i
          );
        },
      };
    class we {
      constructor(t) {
        e(this, "get", (e) => {
          if (!we.supported || !this.enabled) return null;
          const t = window.localStorage.getItem(this.key);
          if (S.empty(t)) return null;
          const i = JSON.parse(t);
          return S.string(e) && e.length ? i[e] : i;
        }),
          e(this, "set", (e) => {
            if (!we.supported || !this.enabled) return;
            if (!S.object(e)) return;
            let t = this.get();
            S.empty(t) && (t = {}), x(t, e);
            try {
              window.localStorage.setItem(this.key, JSON.stringify(t));
            } catch (e) {}
          }),
          (this.enabled = t.config.storage.enabled),
          (this.key = t.config.storage.key);
      }
      static get supported() {
        try {
          if (!("localStorage" in window)) return !1;
          const e = "___test";
          return (
            window.localStorage.setItem(e, e),
            window.localStorage.removeItem(e),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
    }
    function Te(e, t = "text") {
      return new Promise((i, s) => {
        try {
          const s = new XMLHttpRequest();
          if (!("withCredentials" in s)) return;
          s.addEventListener("load", () => {
            if ("text" === t)
              try {
                i(JSON.parse(s.responseText));
              } catch (e) {
                i(s.responseText);
              }
            else i(s.response);
          }),
            s.addEventListener("error", () => {
              throw new Error(s.status);
            }),
            s.open("GET", e, !0),
            (s.responseType = t),
            s.send();
        } catch (e) {
          s(e);
        }
      });
    }
    function ke(e, t) {
      if (!S.string(e)) return;
      const i = "cache",
        s = S.string(t);
      let n = !1;
      const a = () => null !== document.getElementById(t),
        l = (e, t) => {
          (e.innerHTML = t),
            (s && a()) || document.body.insertAdjacentElement("afterbegin", e);
        };
      if (!s || !a()) {
        const a = we.supported,
          r = document.createElement("div");
        if ((r.setAttribute("hidden", ""), s && r.setAttribute("id", t), a)) {
          const e = window.localStorage.getItem(`${i}-${t}`);
          if (((n = null !== e), n)) {
            const t = JSON.parse(e);
            l(r, t.content);
          }
        }
        Te(e)
          .then((e) => {
            if (!S.empty(e)) {
              if (a)
                try {
                  window.localStorage.setItem(
                    `${i}-${t}`,
                    JSON.stringify({ content: e })
                  );
                } catch (e) {}
              l(r, e);
            }
          })
          .catch(() => {});
      }
    }
    const Ce = (e) => Math.trunc((e / 60 / 60) % 60, 10),
      Ae = (e) => Math.trunc((e / 60) % 60, 10),
      Se = (e) => Math.trunc(e % 60, 10);
    function Ee(e = 0, t = !1, i = !1) {
      if (!S.number(e)) return Ee(void 0, t, i);
      const s = (e) => `0${e}`.slice(-2);
      let n = Ce(e);
      const a = Ae(e),
        l = Se(e);
      return (
        (n = t || n > 0 ? `${n}:` : ""),
        `${i && e > 0 ? "-" : ""}${n}${s(a)}:${s(l)}`
      );
    }
    const Pe = {
      getIconUrl() {
        const e = new URL(this.config.iconUrl, window.location),
          t = window.location.host
            ? window.location.host
            : window.top.location.host,
          i = e.host !== t || (M.isIE && !window.svg4everybody);
        return { url: this.config.iconUrl, cors: i };
      },
      findElements() {
        try {
          return (
            (this.elements.controls = B.call(
              this,
              this.config.selectors.controls.wrapper
            )),
            (this.elements.buttons = {
              play: U.call(this, this.config.selectors.buttons.play),
              pause: B.call(this, this.config.selectors.buttons.pause),
              restart: B.call(this, this.config.selectors.buttons.restart),
              rewind: B.call(this, this.config.selectors.buttons.rewind),
              fastForward: B.call(
                this,
                this.config.selectors.buttons.fastForward
              ),
              mute: B.call(this, this.config.selectors.buttons.mute),
              pip: B.call(this, this.config.selectors.buttons.pip),
              airplay: B.call(this, this.config.selectors.buttons.airplay),
              settings: B.call(this, this.config.selectors.buttons.settings),
              captions: B.call(this, this.config.selectors.buttons.captions),
              fullscreen: B.call(
                this,
                this.config.selectors.buttons.fullscreen
              ),
            }),
            (this.elements.progress = B.call(
              this,
              this.config.selectors.progress
            )),
            (this.elements.inputs = {
              seek: B.call(this, this.config.selectors.inputs.seek),
              volume: B.call(this, this.config.selectors.inputs.volume),
            }),
            (this.elements.display = {
              buffer: B.call(this, this.config.selectors.display.buffer),
              currentTime: B.call(
                this,
                this.config.selectors.display.currentTime
              ),
              duration: B.call(this, this.config.selectors.display.duration),
            }),
            S.element(this.elements.progress) &&
              (this.elements.display.seekTooltip =
                this.elements.progress.querySelector(
                  `.${this.config.classNames.tooltip}`
                )),
            !0
          );
        } catch (e) {
          return (
            this.debug.warn(
              "It looks like there is a problem with your custom controls HTML",
              e
            ),
            this.toggleNativeControls(!0),
            !1
          );
        }
      },
      createIcon(e, t) {
        const i = "http://www.w3.org/2000/svg",
          s = Pe.getIconUrl.call(this),
          n = `${s.cors ? "" : s.url}#${this.config.iconPrefix}`,
          a = document.createElementNS(i, "svg");
        I(a, x(t, { "aria-hidden": "true", focusable: "false" }));
        const l = document.createElementNS(i, "use"),
          r = `${n}-${e}`;
        return (
          "href" in l &&
            l.setAttributeNS("http://www.w3.org/1999/xlink", "href", r),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r),
          a.appendChild(l),
          a
        );
      },
      createLabel(e, t = {}) {
        const i = ve.get(e, this.config);
        return $(
          "span",
          {
            ...t,
            class: [t.class, this.config.classNames.hidden]
              .filter(Boolean)
              .join(" "),
          },
          i
        );
      },
      createBadge(e) {
        if (S.empty(e)) return null;
        const t = $("span", { class: this.config.classNames.menu.value });
        return (
          t.appendChild(
            $("span", { class: this.config.classNames.menu.badge }, e)
          ),
          t
        );
      },
      createButton(e, t) {
        const i = x({}, t);
        let s = fe(e);
        const n = {
          element: "button",
          toggle: !1,
          label: null,
          icon: null,
          labelPressed: null,
          iconPressed: null,
        };
        switch (
          (["element", "icon", "label"].forEach((e) => {
            Object.keys(i).includes(e) && ((n[e] = i[e]), delete i[e]);
          }),
          "button" !== n.element ||
            Object.keys(i).includes("type") ||
            (i.type = "button"),
          Object.keys(i).includes("class")
            ? i.class
                .split(" ")
                .some((e) => e === this.config.classNames.control) ||
              x(i, { class: `${i.class} ${this.config.classNames.control}` })
            : (i.class = this.config.classNames.control),
          e)
        ) {
          case "play":
            (n.toggle = !0),
              (n.label = "play"),
              (n.labelPressed = "pause"),
              (n.icon = "play"),
              (n.iconPressed = "pause");
            break;
          case "mute":
            (n.toggle = !0),
              (n.label = "mute"),
              (n.labelPressed = "unmute"),
              (n.icon = "volume"),
              (n.iconPressed = "muted");
            break;
          case "captions":
            (n.toggle = !0),
              (n.label = "enableCaptions"),
              (n.labelPressed = "disableCaptions"),
              (n.icon = "captions-off"),
              (n.iconPressed = "captions-on");
            break;
          case "fullscreen":
            (n.toggle = !0),
              (n.label = "enterFullscreen"),
              (n.labelPressed = "exitFullscreen"),
              (n.icon = "enter-fullscreen"),
              (n.iconPressed = "exit-fullscreen");
            break;
          case "play-large":
            (i.class += ` ${this.config.classNames.control}--overlaid`),
              (s = "play"),
              (n.label = "play"),
              (n.icon = "play");
            break;
          default:
            S.empty(n.label) && (n.label = s), S.empty(n.icon) && (n.icon = e);
        }
        const a = $(n.element);
        return (
          n.toggle
            ? (a.appendChild(
                Pe.createIcon.call(this, n.iconPressed, {
                  class: "icon--pressed",
                })
              ),
              a.appendChild(
                Pe.createIcon.call(this, n.icon, { class: "icon--not-pressed" })
              ),
              a.appendChild(
                Pe.createLabel.call(this, n.labelPressed, {
                  class: "label--pressed",
                })
              ),
              a.appendChild(
                Pe.createLabel.call(this, n.label, {
                  class: "label--not-pressed",
                })
              ))
            : (a.appendChild(Pe.createIcon.call(this, n.icon)),
              a.appendChild(Pe.createLabel.call(this, n.label))),
          x(i, D(this.config.selectors.buttons[s], i)),
          I(a, i),
          "play" === s
            ? (S.array(this.elements.buttons[s]) ||
                (this.elements.buttons[s] = []),
              this.elements.buttons[s].push(a))
            : (this.elements.buttons[s] = a),
          a
        );
      },
      createRange(e, t) {
        const i = $(
          "input",
          x(
            D(this.config.selectors.inputs[e]),
            {
              type: "range",
              min: 0,
              max: 100,
              step: 0.01,
              value: 0,
              autocomplete: "off",
              role: "slider",
              "aria-label": ve.get(e, this.config),
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": 0,
            },
            t
          )
        );
        return (
          (this.elements.inputs[e] = i),
          Pe.updateRangeFill.call(this, i),
          g.setup(i),
          i
        );
      },
      createProgress(e, t) {
        const i = $(
          "progress",
          x(
            D(this.config.selectors.display[e]),
            {
              min: 0,
              max: 100,
              value: 0,
              role: "progressbar",
              "aria-hidden": !0,
            },
            t
          )
        );
        if ("volume" !== e) {
          i.appendChild($("span", null, "0"));
          const t = { played: "played", buffer: "buffered" }[e],
            s = t ? ve.get(t, this.config) : "";
          i.innerText = `% ${s.toLowerCase()}`;
        }
        return (this.elements.display[e] = i), i;
      },
      createTime(e, t) {
        const i = D(this.config.selectors.display[e], t),
          s = $(
            "div",
            x(i, {
              class: `${i.class ? i.class : ""} ${
                this.config.classNames.display.time
              } `.trim(),
              "aria-label": ve.get(e, this.config),
              role: "timer",
            }),
            "00:00"
          );
        return (this.elements.display[e] = s), s;
      },
      bindMenuItemShortcuts(e, t) {
        X.call(
          this,
          e,
          "keydown keyup",
          (i) => {
            if (![" ", "ArrowUp", "ArrowDown", "ArrowRight"].includes(i.key))
              return;
            if ((i.preventDefault(), i.stopPropagation(), "keydown" === i.type))
              return;
            const s = V(e, '[role="menuitemradio"]');
            if (!s && [" ", "ArrowRight"].includes(i.key))
              Pe.showMenuPanel.call(this, t, !0);
            else {
              let t;
              " " !== i.key &&
                ("ArrowDown" === i.key || (s && "ArrowRight" === i.key)
                  ? ((t = e.nextElementSibling),
                    S.element(t) || (t = e.parentNode.firstElementChild))
                  : ((t = e.previousElementSibling),
                    S.element(t) || (t = e.parentNode.lastElementChild)),
                W.call(this, t, !0));
            }
          },
          !1
        ),
          X.call(this, e, "keyup", (e) => {
            "Return" === e.key && Pe.focusFirstMenuItem.call(this, null, !0);
          });
      },
      createMenuItem({
        value: e,
        list: t,
        type: i,
        title: s,
        badge: n = null,
        checked: a = !1,
      }) {
        const l = D(this.config.selectors.inputs[i]),
          r = $(
            "button",
            x(l, {
              type: "button",
              role: "menuitemradio",
              class: `${this.config.classNames.control} ${
                l.class ? l.class : ""
              }`.trim(),
              "aria-checked": a,
              value: e,
            })
          ),
          o = $("span");
        (o.innerHTML = s),
          S.element(n) && o.appendChild(n),
          r.appendChild(o),
          Object.defineProperty(r, "checked", {
            enumerable: !0,
            get: () => "true" === r.getAttribute("aria-checked"),
            set(e) {
              e &&
                Array.from(r.parentNode.children)
                  .filter((e) => V(e, '[role="menuitemradio"]'))
                  .forEach((e) => e.setAttribute("aria-checked", "false")),
                r.setAttribute("aria-checked", e ? "true" : "false");
            },
          }),
          this.listeners.bind(
            r,
            "click keyup",
            (t) => {
              if (!S.keyboardEvent(t) || " " === t.key) {
                switch (
                  (t.preventDefault(), t.stopPropagation(), (r.checked = !0), i)
                ) {
                  case "language":
                    this.currentTrack = Number(e);
                    break;
                  case "quality":
                    this.quality = e;
                    break;
                  case "speed":
                    this.speed = parseFloat(e);
                }
                Pe.showMenuPanel.call(this, "home", S.keyboardEvent(t));
              }
            },
            i,
            !1
          ),
          Pe.bindMenuItemShortcuts.call(this, r, i),
          t.appendChild(r);
      },
      formatTime(e = 0, t = !1) {
        if (!S.number(e)) return e;
        return Ee(e, Ce(this.duration) > 0, t);
      },
      updateTimeDisplay(e = null, t = 0, i = !1) {
        S.element(e) && S.number(t) && (e.innerText = Pe.formatTime(t, i));
      },
      updateVolume() {
        this.supported.ui &&
          (S.element(this.elements.inputs.volume) &&
            Pe.setRange.call(
              this,
              this.elements.inputs.volume,
              this.muted ? 0 : this.volume
            ),
          S.element(this.elements.buttons.mute) &&
            (this.elements.buttons.mute.pressed =
              this.muted || 0 === this.volume));
      },
      setRange(e, t = 0) {
        S.element(e) && ((e.value = t), Pe.updateRangeFill.call(this, e));
      },
      updateProgress(e) {
        if (!this.supported.ui || !S.event(e)) return;
        let t = 0;
        const i = (e, t) => {
          const i = S.number(t) ? t : 0,
            s = S.element(e) ? e : this.elements.display.buffer;
          if (S.element(s)) {
            s.value = i;
            const e = s.getElementsByTagName("span")[0];
            S.element(e) && (e.childNodes[0].nodeValue = i);
          }
        };
        if (e)
          switch (e.type) {
            case "timeupdate":
            case "seeking":
            case "seeked":
              (s = this.currentTime),
                (n = this.duration),
                (t =
                  0 === s || 0 === n || Number.isNaN(s) || Number.isNaN(n)
                    ? 0
                    : ((s / n) * 100).toFixed(2)),
                "timeupdate" === e.type &&
                  Pe.setRange.call(this, this.elements.inputs.seek, t);
              break;
            case "playing":
            case "progress":
              i(this.elements.display.buffer, 100 * this.buffered);
          }
        var s, n;
      },
      updateRangeFill(e) {
        const t = S.event(e) ? e.target : e;
        if (S.element(t) && "range" === t.getAttribute("type")) {
          if (V(t, this.config.selectors.inputs.seek)) {
            t.setAttribute("aria-valuenow", this.currentTime);
            const e = Pe.formatTime(this.currentTime),
              i = Pe.formatTime(this.duration),
              s = ve.get("seekLabel", this.config);
            t.setAttribute(
              "aria-valuetext",
              s.replace("{currentTime}", e).replace("{duration}", i)
            );
          } else if (V(t, this.config.selectors.inputs.volume)) {
            const e = 100 * t.value;
            t.setAttribute("aria-valuenow", e),
              t.setAttribute("aria-valuetext", `${e.toFixed(1)}%`);
          } else t.setAttribute("aria-valuenow", t.value);
          (M.isWebKit || M.isIPadOS) &&
            t.style.setProperty("--value", (t.value / t.max) * 100 + "%");
        }
      },
      updateSeekTooltip(e) {
        var t, i;
        if (
          !this.config.tooltips.seek ||
          !S.element(this.elements.inputs.seek) ||
          !S.element(this.elements.display.seekTooltip) ||
          0 === this.duration
        )
          return;
        const s = this.elements.display.seekTooltip,
          n = `${this.config.classNames.tooltip}--visible`,
          a = (e) => R(s, n, e);
        if (this.touch) return void a(!1);
        let l = 0;
        const r = this.elements.progress.getBoundingClientRect();
        if (S.event(e)) l = (100 / r.width) * (e.pageX - r.left);
        else {
          if (!F(s, n)) return;
          l = parseFloat(s.style.left, 10);
        }
        l < 0 ? (l = 0) : l > 100 && (l = 100);
        const o = (this.duration / 100) * l;
        s.innerText = Pe.formatTime(o);
        const c =
          null === (t = this.config.markers) ||
          void 0 === t ||
          null === (i = t.points) ||
          void 0 === i
            ? void 0
            : i.find(({ time: e }) => e === Math.round(o));
        c && s.insertAdjacentHTML("afterbegin", `${c.label}<br>`),
          (s.style.left = `${l}%`),
          S.event(e) &&
            ["mouseenter", "mouseleave"].includes(e.type) &&
            a("mouseenter" === e.type);
      },
      timeUpdate(e) {
        const t =
          !S.element(this.elements.display.duration) && this.config.invertTime;
        Pe.updateTimeDisplay.call(
          this,
          this.elements.display.currentTime,
          t ? this.duration - this.currentTime : this.currentTime,
          t
        ),
          (e && "timeupdate" === e.type && this.media.seeking) ||
            Pe.updateProgress.call(this, e);
      },
      durationUpdate() {
        if (!this.supported.ui || (!this.config.invertTime && this.currentTime))
          return;
        if (this.duration >= 2 ** 32)
          return (
            H(this.elements.display.currentTime, !0),
            void H(this.elements.progress, !0)
          );
        S.element(this.elements.inputs.seek) &&
          this.elements.inputs.seek.setAttribute(
            "aria-valuemax",
            this.duration
          );
        const e = S.element(this.elements.display.duration);
        !e &&
          this.config.displayDuration &&
          this.paused &&
          Pe.updateTimeDisplay.call(
            this,
            this.elements.display.currentTime,
            this.duration
          ),
          e &&
            Pe.updateTimeDisplay.call(
              this,
              this.elements.display.duration,
              this.duration
            ),
          this.config.markers.enabled && Pe.setMarkers.call(this),
          Pe.updateSeekTooltip.call(this);
      },
      toggleMenuButton(e, t) {
        H(this.elements.settings.buttons[e], !t);
      },
      updateSetting(e, t, i) {
        const s = this.elements.settings.panels[e];
        let n = null,
          a = t;
        if ("captions" === e) n = this.currentTrack;
        else {
          if (
            ((n = S.empty(i) ? this[e] : i),
            S.empty(n) && (n = this.config[e].default),
            !S.empty(this.options[e]) && !this.options[e].includes(n))
          )
            return void this.debug.warn(`Unsupported value of '${n}' for ${e}`);
          if (!this.config[e].options.includes(n))
            return void this.debug.warn(`Disabled value of '${n}' for ${e}`);
        }
        if (
          (S.element(a) || (a = s && s.querySelector('[role="menu"]')),
          !S.element(a))
        )
          return;
        this.elements.settings.buttons[e].querySelector(
          `.${this.config.classNames.menu.value}`
        ).innerHTML = Pe.getLabel.call(this, e, n);
        const l = a && a.querySelector(`[value="${n}"]`);
        S.element(l) && (l.checked = !0);
      },
      getLabel(e, t) {
        switch (e) {
          case "speed":
            return 1 === t ? ve.get("normal", this.config) : `${t}&times;`;
          case "quality":
            if (S.number(t)) {
              const e = ve.get(`qualityLabel.${t}`, this.config);
              return e.length ? e : `${t}p`;
            }
            return ge(t);
          case "captions":
            return xe.getLabel.call(this);
          default:
            return null;
        }
      },
      setQualityMenu(e) {
        if (!S.element(this.elements.settings.panels.quality)) return;
        const t = "quality",
          i =
            this.elements.settings.panels.quality.querySelector(
              '[role="menu"]'
            );
        S.array(e) &&
          (this.options.quality = se(e).filter((e) =>
            this.config.quality.options.includes(e)
          ));
        const s =
          !S.empty(this.options.quality) && this.options.quality.length > 1;
        if (
          (Pe.toggleMenuButton.call(this, t, s),
          j(i),
          Pe.checkMenu.call(this),
          !s)
        )
          return;
        const n = (e) => {
          const t = ve.get(`qualityBadge.${e}`, this.config);
          return t.length ? Pe.createBadge.call(this, t) : null;
        };
        this.options.quality
          .sort((e, t) => {
            const i = this.config.quality.options;
            return i.indexOf(e) > i.indexOf(t) ? 1 : -1;
          })
          .forEach((e) => {
            Pe.createMenuItem.call(this, {
              value: e,
              list: i,
              type: t,
              title: Pe.getLabel.call(this, "quality", e),
              badge: n(e),
            });
          }),
          Pe.updateSetting.call(this, t, i);
      },
      setCaptionsMenu() {
        if (!S.element(this.elements.settings.panels.captions)) return;
        const e = "captions",
          t =
            this.elements.settings.panels.captions.querySelector(
              '[role="menu"]'
            ),
          i = xe.getTracks.call(this),
          s = Boolean(i.length);
        if (
          (Pe.toggleMenuButton.call(this, e, s),
          j(t),
          Pe.checkMenu.call(this),
          !s)
        )
          return;
        const n = i.map((e, i) => ({
          value: i,
          checked: this.captions.toggled && this.currentTrack === i,
          title: xe.getLabel.call(this, e),
          badge:
            e.language && Pe.createBadge.call(this, e.language.toUpperCase()),
          list: t,
          type: "language",
        }));
        n.unshift({
          value: -1,
          checked: !this.captions.toggled,
          title: ve.get("disabled", this.config),
          list: t,
          type: "language",
        }),
          n.forEach(Pe.createMenuItem.bind(this)),
          Pe.updateSetting.call(this, e, t);
      },
      setSpeedMenu() {
        if (!S.element(this.elements.settings.panels.speed)) return;
        const e = "speed",
          t =
            this.elements.settings.panels.speed.querySelector('[role="menu"]');
        this.options.speed = this.options.speed.filter(
          (e) => e >= this.minimumSpeed && e <= this.maximumSpeed
        );
        const i = !S.empty(this.options.speed) && this.options.speed.length > 1;
        Pe.toggleMenuButton.call(this, e, i),
          j(t),
          Pe.checkMenu.call(this),
          i &&
            (this.options.speed.forEach((i) => {
              Pe.createMenuItem.call(this, {
                value: i,
                list: t,
                type: e,
                title: Pe.getLabel.call(this, "speed", i),
              });
            }),
            Pe.updateSetting.call(this, e, t));
      },
      checkMenu() {
        const { buttons: e } = this.elements.settings,
          t = !S.empty(e) && Object.values(e).some((e) => !e.hidden);
        H(this.elements.settings.menu, !t);
      },
      focusFirstMenuItem(e, t = !1) {
        if (this.elements.settings.popup.hidden) return;
        let i = e;
        S.element(i) ||
          (i = Object.values(this.elements.settings.panels).find(
            (e) => !e.hidden
          ));
        const s = i.querySelector('[role^="menuitem"]');
        W.call(this, s, t);
      },
      toggleMenu(e) {
        const { popup: t } = this.elements.settings,
          i = this.elements.buttons.settings;
        if (!S.element(t) || !S.element(i)) return;
        const { hidden: s } = t;
        let n = s;
        if (S.boolean(e)) n = e;
        else if (S.keyboardEvent(e) && "Escape" === e.key) n = !1;
        else if (S.event(e)) {
          const s = S.function(e.composedPath) ? e.composedPath()[0] : e.target,
            a = t.contains(s);
          if (a || (!a && e.target !== i && n)) return;
        }
        i.setAttribute("aria-expanded", n),
          H(t, !n),
          R(this.elements.container, this.config.classNames.menu.open, n),
          n && S.keyboardEvent(e)
            ? Pe.focusFirstMenuItem.call(this, null, !0)
            : n || s || W.call(this, i, S.keyboardEvent(e));
      },
      getMenuSize(e) {
        const t = e.cloneNode(!0);
        (t.style.position = "absolute"),
          (t.style.opacity = 0),
          t.removeAttribute("hidden"),
          e.parentNode.appendChild(t);
        const i = t.scrollWidth,
          s = t.scrollHeight;
        return O(t), { width: i, height: s };
      },
      showMenuPanel(e = "", t = !1) {
        const i = this.elements.container.querySelector(
          `#plyr-settings-${this.id}-${e}`
        );
        if (!S.element(i)) return;
        const s = i.parentNode,
          n = Array.from(s.children).find((e) => !e.hidden);
        if (K.transitions && !K.reducedMotion) {
          (s.style.width = `${n.scrollWidth}px`),
            (s.style.height = `${n.scrollHeight}px`);
          const e = Pe.getMenuSize.call(this, i),
            t = (e) => {
              e.target === s &&
                ["width", "height"].includes(e.propertyName) &&
                ((s.style.width = ""),
                (s.style.height = ""),
                J.call(this, s, E, t));
            };
          X.call(this, s, E, t),
            (s.style.width = `${e.width}px`),
            (s.style.height = `${e.height}px`);
        }
        H(n, !0), H(i, !1), Pe.focusFirstMenuItem.call(this, i, t);
      },
      setDownloadUrl() {
        const e = this.elements.buttons.download;
        S.element(e) && e.setAttribute("href", this.download);
      },
      create(e) {
        const {
          bindMenuItemShortcuts: t,
          createButton: i,
          createProgress: s,
          createRange: n,
          createTime: a,
          setQualityMenu: l,
          setSpeedMenu: r,
          showMenuPanel: o,
        } = Pe;
        (this.elements.controls = null),
          S.array(this.config.controls) &&
            this.config.controls.includes("play-large") &&
            this.elements.container.appendChild(i.call(this, "play-large"));
        const c = $("div", D(this.config.selectors.controls.wrapper));
        this.elements.controls = c;
        const u = { class: "plyr__controls__item" };
        return (
          se(S.array(this.config.controls) ? this.config.controls : []).forEach(
            (l) => {
              if (
                ("restart" === l && c.appendChild(i.call(this, "restart", u)),
                "rewind" === l && c.appendChild(i.call(this, "rewind", u)),
                "play" === l && c.appendChild(i.call(this, "play", u)),
                "fast-forward" === l &&
                  c.appendChild(i.call(this, "fast-forward", u)),
                "progress" === l)
              ) {
                const t = $("div", {
                    class: `${u.class} plyr__progress__container`,
                  }),
                  i = $("div", D(this.config.selectors.progress));
                if (
                  (i.appendChild(
                    n.call(this, "seek", { id: `plyr-seek-${e.id}` })
                  ),
                  i.appendChild(s.call(this, "buffer")),
                  this.config.tooltips.seek)
                ) {
                  const e = $(
                    "span",
                    { class: this.config.classNames.tooltip },
                    "00:00"
                  );
                  i.appendChild(e), (this.elements.display.seekTooltip = e);
                }
                (this.elements.progress = i),
                  t.appendChild(this.elements.progress),
                  c.appendChild(t);
              }
              if (
                ("current-time" === l &&
                  c.appendChild(a.call(this, "currentTime", u)),
                "duration" === l && c.appendChild(a.call(this, "duration", u)),
                "mute" === l || "volume" === l)
              ) {
                let { volume: t } = this.elements;
                if (
                  ((S.element(t) && c.contains(t)) ||
                    ((t = $(
                      "div",
                      x({}, u, { class: `${u.class} plyr__volume`.trim() })
                    )),
                    (this.elements.volume = t),
                    c.appendChild(t)),
                  "mute" === l && t.appendChild(i.call(this, "mute")),
                  "volume" === l && !M.isIos && !M.isIPadOS)
                ) {
                  const i = { max: 1, step: 0.05, value: this.config.volume };
                  t.appendChild(
                    n.call(this, "volume", x(i, { id: `plyr-volume-${e.id}` }))
                  );
                }
              }
              if (
                ("captions" === l && c.appendChild(i.call(this, "captions", u)),
                "settings" === l && !S.empty(this.config.settings))
              ) {
                const s = $(
                  "div",
                  x({}, u, {
                    class: `${u.class} plyr__menu`.trim(),
                    hidden: "",
                  })
                );
                s.appendChild(
                  i.call(this, "settings", {
                    "aria-haspopup": !0,
                    "aria-controls": `plyr-settings-${e.id}`,
                    "aria-expanded": !1,
                  })
                );
                const n = $("div", {
                    class: "plyr__menu__container",
                    id: `plyr-settings-${e.id}`,
                    hidden: "",
                  }),
                  a = $("div"),
                  l = $("div", { id: `plyr-settings-${e.id}-home` }),
                  r = $("div", { role: "menu" });
                l.appendChild(r),
                  a.appendChild(l),
                  (this.elements.settings.panels.home = l),
                  this.config.settings.forEach((i) => {
                    const s = $(
                      "button",
                      x(D(this.config.selectors.buttons.settings), {
                        type: "button",
                        class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
                        role: "menuitem",
                        "aria-haspopup": !0,
                        hidden: "",
                      })
                    );
                    t.call(this, s, i),
                      X.call(this, s, "click", () => {
                        o.call(this, i, !1);
                      });
                    const n = $("span", null, ve.get(i, this.config)),
                      l = $("span", {
                        class: this.config.classNames.menu.value,
                      });
                    (l.innerHTML = e[i]),
                      n.appendChild(l),
                      s.appendChild(n),
                      r.appendChild(s);
                    const c = $("div", {
                        id: `plyr-settings-${e.id}-${i}`,
                        hidden: "",
                      }),
                      u = $("button", {
                        type: "button",
                        class: `${this.config.classNames.control} ${this.config.classNames.control}--back`,
                      });
                    u.appendChild(
                      $("span", { "aria-hidden": !0 }, ve.get(i, this.config))
                    ),
                      u.appendChild(
                        $(
                          "span",
                          { class: this.config.classNames.hidden },
                          ve.get("menuBack", this.config)
                        )
                      ),
                      X.call(
                        this,
                        c,
                        "keydown",
                        (e) => {
                          "ArrowLeft" === e.key &&
                            (e.preventDefault(),
                            e.stopPropagation(),
                            o.call(this, "home", !0));
                        },
                        !1
                      ),
                      X.call(this, u, "click", () => {
                        o.call(this, "home", !1);
                      }),
                      c.appendChild(u),
                      c.appendChild($("div", { role: "menu" })),
                      a.appendChild(c),
                      (this.elements.settings.buttons[i] = s),
                      (this.elements.settings.panels[i] = c);
                  }),
                  n.appendChild(a),
                  s.appendChild(n),
                  c.appendChild(s),
                  (this.elements.settings.popup = n),
                  (this.elements.settings.menu = s);
              }
              if (
                ("pip" === l && K.pip && c.appendChild(i.call(this, "pip", u)),
                "airplay" === l &&
                  K.airplay &&
                  c.appendChild(i.call(this, "airplay", u)),
                "download" === l)
              ) {
                const e = x({}, u, {
                  element: "a",
                  href: this.download,
                  target: "_blank",
                });
                this.isHTML5 && (e.download = "");
                const { download: t } = this.config.urls;
                !S.url(t) &&
                  this.isEmbed &&
                  x(e, { icon: `logo-${this.provider}`, label: this.provider }),
                  c.appendChild(i.call(this, "download", e));
              }
              "fullscreen" === l &&
                c.appendChild(i.call(this, "fullscreen", u));
            }
          ),
          this.isHTML5 && l.call(this, de.getQualityOptions.call(this)),
          r.call(this),
          c
        );
      },
      inject() {
        if (this.config.loadSprite) {
          const e = Pe.getIconUrl.call(this);
          e.cors && ke(e.url, "sprite-plyr");
        }
        this.id = Math.floor(1e4 * Math.random());
        let e = null;
        this.elements.controls = null;
        const t = {
          id: this.id,
          seektime: this.config.seekTime,
          title: this.config.title,
        };
        let i = !0;
        S.function(this.config.controls) &&
          (this.config.controls = this.config.controls.call(this, t)),
          this.config.controls || (this.config.controls = []),
          S.element(this.config.controls) || S.string(this.config.controls)
            ? (e = this.config.controls)
            : ((e = Pe.create.call(this, {
                id: this.id,
                seektime: this.config.seekTime,
                speed: this.speed,
                quality: this.quality,
                captions: xe.getLabel.call(this),
              })),
              (i = !1));
        let s;
        i &&
          S.string(this.config.controls) &&
          (e = ((e) => {
            let i = e;
            return (
              Object.entries(t).forEach(([e, t]) => {
                i = pe(i, `{${e}}`, t);
              }),
              i
            );
          })(e)),
          S.string(this.config.selectors.controls.container) &&
            (s = document.querySelector(
              this.config.selectors.controls.container
            )),
          S.element(s) || (s = this.elements.container);
        if (
          (s[S.element(e) ? "insertAdjacentElement" : "insertAdjacentHTML"](
            "afterbegin",
            e
          ),
          S.element(this.elements.controls) || Pe.findElements.call(this),
          !S.empty(this.elements.buttons))
        ) {
          const e = (e) => {
            const t = this.config.classNames.controlPressed;
            e.setAttribute("aria-pressed", "false"),
              Object.defineProperty(e, "pressed", {
                configurable: !0,
                enumerable: !0,
                get: () => F(e, t),
                set(i = !1) {
                  R(e, t, i),
                    e.setAttribute("aria-pressed", i ? "true" : "false");
                },
              });
          };
          Object.values(this.elements.buttons)
            .filter(Boolean)
            .forEach((t) => {
              S.array(t) || S.nodeList(t)
                ? Array.from(t).filter(Boolean).forEach(e)
                : e(t);
            });
        }
        if ((M.isEdge && P(s), this.config.tooltips.controls)) {
          const { classNames: e, selectors: t } = this.config,
            i = `${t.controls.wrapper} ${t.labels} .${e.hidden}`,
            s = U.call(this, i);
          Array.from(s).forEach((e) => {
            R(e, this.config.classNames.hidden, !1),
              R(e, this.config.classNames.tooltip, !0);
          });
        }
      },
      setMediaMetadata() {
        try {
          "mediaSession" in navigator &&
            (navigator.mediaSession.metadata = new window.MediaMetadata({
              title: this.config.mediaMetadata.title,
              artist: this.config.mediaMetadata.artist,
              album: this.config.mediaMetadata.album,
              artwork: this.config.mediaMetadata.artwork,
            }));
        } catch (e) {}
      },
      setMarkers() {
        var e, t;
        if (!this.duration || this.elements.markers) return;
        const i =
          null === (e = this.config.markers) ||
          void 0 === e ||
          null === (t = e.points) ||
          void 0 === t
            ? void 0
            : t.filter(({ time: e }) => e > 0 && e < this.duration);
        if (null == i || !i.length) return;
        const s = document.createDocumentFragment(),
          n = document.createDocumentFragment();
        let a = null;
        const l = `${this.config.classNames.tooltip}--visible`,
          r = (e) => R(a, l, e);
        i.forEach((e) => {
          const t = $("span", { class: this.config.classNames.marker }, ""),
            i = (e.time / this.duration) * 100 + "%";
          a &&
            (t.addEventListener("mouseenter", () => {
              e.label || ((a.style.left = i), (a.innerHTML = e.label), r(!0));
            }),
            t.addEventListener("mouseleave", () => {
              r(!1);
            })),
            t.addEventListener("click", () => {
              this.currentTime = e.time;
            }),
            (t.style.left = i),
            n.appendChild(t);
        }),
          s.appendChild(n),
          this.config.tooltips.seek ||
            ((a = $("span", { class: this.config.classNames.tooltip }, "")),
            s.appendChild(a)),
          (this.elements.markers = { points: n, tip: a }),
          this.elements.progress.appendChild(s);
      },
    };
    function Me(e, t = !0) {
      let i = e;
      if (t) {
        const e = document.createElement("a");
        (e.href = i), (i = e.href);
      }
      try {
        return new URL(i);
      } catch (e) {
        return null;
      }
    }
    function Ne(e) {
      const t = new URLSearchParams();
      return (
        S.object(e) &&
          Object.entries(e).forEach(([e, i]) => {
            t.set(e, i);
          }),
        t
      );
    }
    const xe = {
        setup() {
          if (!this.supported.ui) return;
          if (
            !this.isVideo ||
            this.isYouTube ||
            (this.isHTML5 && !K.textTracks)
          )
            return void (
              S.array(this.config.controls) &&
              this.config.controls.includes("settings") &&
              this.config.settings.includes("captions") &&
              Pe.setCaptionsMenu.call(this)
            );
          var e, t;
          if (
            (S.element(this.elements.captions) ||
              ((this.elements.captions = $(
                "div",
                D(this.config.selectors.captions)
              )),
              this.elements.captions.setAttribute("dir", "auto"),
              (e = this.elements.captions),
              (t = this.elements.wrapper),
              S.element(e) &&
                S.element(t) &&
                t.parentNode.insertBefore(e, t.nextSibling)),
            M.isIE && window.URL)
          ) {
            const e = this.media.querySelectorAll("track");
            Array.from(e).forEach((e) => {
              const t = e.getAttribute("src"),
                i = Me(t);
              null !== i &&
                i.hostname !== window.location.href.hostname &&
                ["http:", "https:"].includes(i.protocol) &&
                Te(t, "blob")
                  .then((t) => {
                    e.setAttribute("src", window.URL.createObjectURL(t));
                  })
                  .catch(() => {
                    O(e);
                  });
            });
          }
          const i = se(
            (
              navigator.languages || [
                navigator.language || navigator.userLanguage || "en",
              ]
            ).map((e) => e.split("-")[0])
          );
          let s = (
            this.storage.get("language") ||
            this.config.captions.language ||
            "auto"
          ).toLowerCase();
          "auto" === s && ([s] = i);
          let n = this.storage.get("captions");
          if (
            (S.boolean(n) || ({ active: n } = this.config.captions),
            Object.assign(this.captions, {
              toggled: !1,
              active: n,
              language: s,
              languages: i,
            }),
            this.isHTML5)
          ) {
            const e = this.config.captions.update
              ? "addtrack removetrack"
              : "removetrack";
            X.call(this, this.media.textTracks, e, xe.update.bind(this));
          }
          setTimeout(xe.update.bind(this), 0);
        },
        update() {
          const e = xe.getTracks.call(this, !0),
            {
              active: t,
              language: i,
              meta: s,
              currentTrackNode: n,
            } = this.captions,
            a = Boolean(e.find((e) => e.language === i));
          this.isHTML5 &&
            this.isVideo &&
            e
              .filter((e) => !s.get(e))
              .forEach((e) => {
                this.debug.log("Track added", e),
                  s.set(e, { default: "showing" === e.mode }),
                  "showing" === e.mode && (e.mode = "hidden"),
                  X.call(this, e, "cuechange", () => xe.updateCues.call(this));
              }),
            ((a && this.language !== i) || !e.includes(n)) &&
              (xe.setLanguage.call(this, i), xe.toggle.call(this, t && a)),
            this.elements &&
              R(
                this.elements.container,
                this.config.classNames.captions.enabled,
                !S.empty(e)
              ),
            S.array(this.config.controls) &&
              this.config.controls.includes("settings") &&
              this.config.settings.includes("captions") &&
              Pe.setCaptionsMenu.call(this);
        },
        toggle(e, t = !0) {
          if (!this.supported.ui) return;
          const { toggled: i } = this.captions,
            s = this.config.classNames.captions.active,
            n = S.nullOrUndefined(e) ? !i : e;
          if (n !== i) {
            if (
              (t ||
                ((this.captions.active = n), this.storage.set({ captions: n })),
              !this.language && n && !t)
            ) {
              const e = xe.getTracks.call(this),
                t = xe.findTrack.call(
                  this,
                  [this.captions.language, ...this.captions.languages],
                  !0
                );
              return (
                (this.captions.language = t.language),
                void xe.set.call(this, e.indexOf(t))
              );
            }
            this.elements.buttons.captions &&
              (this.elements.buttons.captions.pressed = n),
              R(this.elements.container, s, n),
              (this.captions.toggled = n),
              Pe.updateSetting.call(this, "captions"),
              Z.call(
                this,
                this.media,
                n ? "captionsenabled" : "captionsdisabled"
              );
          }
          setTimeout(() => {
            n &&
              this.captions.toggled &&
              (this.captions.currentTrackNode.mode = "hidden");
          });
        },
        set(e, t = !0) {
          const i = xe.getTracks.call(this);
          if (-1 !== e)
            if (S.number(e))
              if (e in i) {
                if (this.captions.currentTrack !== e) {
                  this.captions.currentTrack = e;
                  const s = i[e],
                    { language: n } = s || {};
                  (this.captions.currentTrackNode = s),
                    Pe.updateSetting.call(this, "captions"),
                    t ||
                      ((this.captions.language = n),
                      this.storage.set({ language: n })),
                    this.isVimeo && this.embed.enableTextTrack(n),
                    Z.call(this, this.media, "languagechange");
                }
                xe.toggle.call(this, !0, t),
                  this.isHTML5 && this.isVideo && xe.updateCues.call(this);
              } else this.debug.warn("Track not found", e);
            else this.debug.warn("Invalid caption argument", e);
          else xe.toggle.call(this, !1, t);
        },
        setLanguage(e, t = !0) {
          if (!S.string(e))
            return void this.debug.warn("Invalid language argument", e);
          const i = e.toLowerCase();
          this.captions.language = i;
          const s = xe.getTracks.call(this),
            n = xe.findTrack.call(this, [i]);
          xe.set.call(this, s.indexOf(n), t);
        },
        getTracks(e = !1) {
          return Array.from((this.media || {}).textTracks || [])
            .filter((t) => !this.isHTML5 || e || this.captions.meta.has(t))
            .filter((e) => ["captions", "subtitles"].includes(e.kind));
        },
        findTrack(e, t = !1) {
          const i = xe.getTracks.call(this),
            s = (e) => Number((this.captions.meta.get(e) || {}).default),
            n = Array.from(i).sort((e, t) => s(t) - s(e));
          let a;
          return (
            e.every((e) => ((a = n.find((t) => t.language === e)), !a)),
            a || (t ? n[0] : void 0)
          );
        },
        getCurrentTrack() {
          return xe.getTracks.call(this)[this.currentTrack];
        },
        getLabel(e) {
          let t = e;
          return (
            !S.track(t) &&
              K.textTracks &&
              this.captions.toggled &&
              (t = xe.getCurrentTrack.call(this)),
            S.track(t)
              ? S.empty(t.label)
                ? S.empty(t.language)
                  ? ve.get("enabled", this.config)
                  : e.language.toUpperCase()
                : t.label
              : ve.get("disabled", this.config)
          );
        },
        updateCues(e) {
          if (!this.supported.ui) return;
          if (!S.element(this.elements.captions))
            return void this.debug.warn("No captions element to render to");
          if (!S.nullOrUndefined(e) && !Array.isArray(e))
            return void this.debug.warn("updateCues: Invalid input", e);
          let t = e;
          if (!t) {
            const e = xe.getCurrentTrack.call(this);
            t = Array.from((e || {}).activeCues || [])
              .map((e) => e.getCueAsHTML())
              .map(ye);
          }
          const i = t.map((e) => e.trim()).join("\n");
          if (i !== this.elements.captions.innerHTML) {
            j(this.elements.captions);
            const e = $("span", D(this.config.selectors.caption));
            (e.innerHTML = i),
              this.elements.captions.appendChild(e),
              Z.call(this, this.media, "cuechange");
          }
        },
      },
      Le = {
        enabled: !0,
        title: "",
        debug: !1,
        autoplay: !1,
        autopause: !0,
        playsinline: !0,
        seekTime: 10,
        volume: 1,
        muted: !1,
        duration: null,
        displayDuration: !0,
        invertTime: !0,
        toggleInvert: !0,
        ratio: null,
        clickToPlay: !0,
        hideControls: !0,
        resetOnEnd: !1,
        disableContextMenu: !0,
        loadSprite: !0,
        iconPrefix: "plyr",
        iconUrl: "https://cdn.plyr.io/3.7.8/plyr.svg",
        blankVideo: "https://cdn.plyr.io/static/blank.mp4",
        quality: {
          default: 576,
          options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
          forced: !1,
          onChange: null,
        },
        loop: { active: !1 },
        speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4] },
        keyboard: { focused: !0, global: !1 },
        tooltips: { controls: !1, seek: !0 },
        captions: { active: !1, language: "auto", update: !1 },
        fullscreen: { enabled: !0, fallback: !0, iosNative: !1 },
        storage: { enabled: !0, key: "plyr" },
        controls: [
          "play-large",
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "captions",
          "settings",
          "pip",
          "airplay",
          "fullscreen",
        ],
        settings: ["captions", "quality", "speed"],
        i18n: {
          restart: "Restart",
          rewind: "Rewind {seektime}s",
          play: "Play",
          pause: "Pause",
          fastForward: "Forward {seektime}s",
          seek: "Seek",
          seekLabel: "{currentTime} of {duration}",
          played: "Played",
          buffered: "Buffered",
          currentTime: "Current time",
          duration: "Duration",
          volume: "Volume",
          mute: "Mute",
          unmute: "Unmute",
          enableCaptions: "Enable captions",
          disableCaptions: "Disable captions",
          download: "Download",
          enterFullscreen: "Enter fullscreen",
          exitFullscreen: "Exit fullscreen",
          frameTitle: "Player for {title}",
          captions: "Captions",
          settings: "Settings",
          pip: "PIP",
          menuBack: "Go back to previous menu",
          speed: "Speed",
          normal: "Normal",
          quality: "Quality",
          loop: "Loop",
          start: "Start",
          end: "End",
          all: "All",
          reset: "Reset",
          disabled: "Disabled",
          enabled: "Enabled",
          advertisement: "Ad",
          qualityBadge: {
            2160: "4K",
            1440: "HD",
            1080: "HD",
            720: "HD",
            576: "SD",
            480: "SD",
          },
        },
        urls: {
          download: null,
          vimeo: {
            sdk: "https://player.vimeo.com/api/player.js",
            iframe: "https://player.vimeo.com/video/{0}?{1}",
            api: "https://vimeo.com/api/oembed.json?url={0}",
          },
          youtube: {
            sdk: "https://www.youtube.com/iframe_api",
            api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}",
          },
          googleIMA: {
            sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js",
          },
        },
        listeners: {
          seek: null,
          play: null,
          pause: null,
          restart: null,
          rewind: null,
          fastForward: null,
          mute: null,
          volume: null,
          captions: null,
          download: null,
          fullscreen: null,
          pip: null,
          airplay: null,
          speed: null,
          quality: null,
          loop: null,
          language: null,
        },
        events: [
          "ended",
          "progress",
          "stalled",
          "playing",
          "waiting",
          "canplay",
          "canplaythrough",
          "loadstart",
          "loadeddata",
          "loadedmetadata",
          "timeupdate",
          "volumechange",
          "play",
          "pause",
          "error",
          "seeking",
          "seeked",
          "emptied",
          "ratechange",
          "cuechange",
          "download",
          "enterfullscreen",
          "exitfullscreen",
          "captionsenabled",
          "captionsdisabled",
          "languagechange",
          "controlshidden",
          "controlsshown",
          "ready",
          "statechange",
          "qualitychange",
          "adsloaded",
          "adscontentpause",
          "adscontentresume",
          "adstarted",
          "adsmidpoint",
          "adscomplete",
          "adsallcomplete",
          "adsimpression",
          "adsclick",
        ],
        selectors: {
          editable: "input, textarea, select, [contenteditable]",
          container: ".plyr",
          controls: { container: null, wrapper: ".plyr__controls" },
          labels: "[data-plyr]",
          buttons: {
            play: '[data-plyr="play"]',
            pause: '[data-plyr="pause"]',
            restart: '[data-plyr="restart"]',
            rewind: '[data-plyr="rewind"]',
            fastForward: '[data-plyr="fast-forward"]',
            mute: '[data-plyr="mute"]',
            captions: '[data-plyr="captions"]',
            download: '[data-plyr="download"]',
            fullscreen: '[data-plyr="fullscreen"]',
            pip: '[data-plyr="pip"]',
            airplay: '[data-plyr="airplay"]',
            settings: '[data-plyr="settings"]',
            loop: '[data-plyr="loop"]',
          },
          inputs: {
            seek: '[data-plyr="seek"]',
            volume: '[data-plyr="volume"]',
            speed: '[data-plyr="speed"]',
            language: '[data-plyr="language"]',
            quality: '[data-plyr="quality"]',
          },
          display: {
            currentTime: ".plyr__time--current",
            duration: ".plyr__time--duration",
            buffer: ".plyr__progress__buffer",
            loop: ".plyr__progress__loop",
            volume: ".plyr__volume--display",
          },
          progress: ".plyr__progress",
          captions: ".plyr__captions",
          caption: ".plyr__caption",
        },
        classNames: {
          type: "plyr--{0}",
          provider: "plyr--{0}",
          video: "plyr__video-wrapper",
          embed: "plyr__video-embed",
          videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
          embedContainer: "plyr__video-embed__container",
          poster: "plyr__poster",
          posterEnabled: "plyr__poster-enabled",
          ads: "plyr__ads",
          control: "plyr__control",
          controlPressed: "plyr__control--pressed",
          playing: "plyr--playing",
          paused: "plyr--paused",
          stopped: "plyr--stopped",
          loading: "plyr--loading",
          hover: "plyr--hover",
          tooltip: "plyr__tooltip",
          cues: "plyr__cues",
          marker: "plyr__progress__marker",
          hidden: "plyr__sr-only",
          hideControls: "plyr--hide-controls",
          isTouch: "plyr--is-touch",
          uiSupported: "plyr--full-ui",
          noTransition: "plyr--no-transition",
          display: { time: "plyr__time" },
          menu: {
            value: "plyr__menu__value",
            badge: "plyr__badge",
            open: "plyr--menu-open",
          },
          captions: {
            enabled: "plyr--captions-enabled",
            active: "plyr--captions-active",
          },
          fullscreen: {
            enabled: "plyr--fullscreen-enabled",
            fallback: "plyr--fullscreen-fallback",
          },
          pip: { supported: "plyr--pip-supported", active: "plyr--pip-active" },
          airplay: {
            supported: "plyr--airplay-supported",
            active: "plyr--airplay-active",
          },
          previewThumbnails: {
            thumbContainer: "plyr__preview-thumb",
            thumbContainerShown: "plyr__preview-thumb--is-shown",
            imageContainer: "plyr__preview-thumb__image-container",
            timeContainer: "plyr__preview-thumb__time-container",
            scrubbingContainer: "plyr__preview-scrubbing",
            scrubbingContainerShown: "plyr__preview-scrubbing--is-shown",
          },
        },
        attributes: {
          embed: {
            provider: "data-plyr-provider",
            id: "data-plyr-embed-id",
            hash: "data-plyr-embed-hash",
          },
        },
        ads: { enabled: !1, publisherId: "", tagUrl: "" },
        previewThumbnails: { enabled: !1, src: "" },
        vimeo: {
          byline: !1,
          portrait: !1,
          title: !1,
          speed: !0,
          transparent: !1,
          customControls: !0,
          referrerPolicy: null,
          premium: !1,
        },
        youtube: {
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          customControls: !0,
          noCookie: !1,
        },
        mediaMetadata: { title: "", artist: "", album: "", artwork: [] },
        markers: { enabled: !1, points: [] },
      },
      Ie = "picture-in-picture",
      $e = "inline",
      _e = { html5: "html5", youtube: "youtube", vimeo: "vimeo" },
      Oe = "audio",
      je = "video";
    const qe = () => {};
    class De {
      constructor(e = !1) {
        (this.enabled = window.console && e),
          this.enabled && this.log("Debugging enabled");
      }
      get log() {
        return this.enabled
          ? Function.prototype.bind.call(console.log, console)
          : qe;
      }
      get warn() {
        return this.enabled
          ? Function.prototype.bind.call(console.warn, console)
          : qe;
      }
      get error() {
        return this.enabled
          ? Function.prototype.bind.call(console.error, console)
          : qe;
      }
    }
    class He {
      constructor(t) {
        e(this, "onChange", () => {
          if (!this.supported) return;
          const e = this.player.elements.buttons.fullscreen;
          S.element(e) && (e.pressed = this.active);
          const t =
            this.target === this.player.media
              ? this.target
              : this.player.elements.container;
          Z.call(
            this.player,
            t,
            this.active ? "enterfullscreen" : "exitfullscreen",
            !0
          );
        }),
          e(this, "toggleFallback", (e = !1) => {
            if (
              (e
                ? (this.scrollPosition = {
                    x: window.scrollX ?? 0,
                    y: window.scrollY ?? 0,
                  })
                : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y),
              (document.body.style.overflow = e ? "hidden" : ""),
              R(
                this.target,
                this.player.config.classNames.fullscreen.fallback,
                e
              ),
              M.isIos)
            ) {
              let t = document.head.querySelector('meta[name="viewport"]');
              const i = "viewport-fit=cover";
              t ||
                ((t = document.createElement("meta")),
                t.setAttribute("name", "viewport"));
              const s = S.string(t.content) && t.content.includes(i);
              e
                ? ((this.cleanupViewport = !s), s || (t.content += `,${i}`))
                : this.cleanupViewport &&
                  (t.content = t.content
                    .split(",")
                    .filter((e) => e.trim() !== i)
                    .join(","));
            }
            this.onChange();
          }),
          e(this, "trapFocus", (e) => {
            if (M.isIos || M.isIPadOS || !this.active || "Tab" !== e.key)
              return;
            const t = document.activeElement,
              i = U.call(
                this.player,
                "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"
              ),
              [s] = i,
              n = i[i.length - 1];
            t !== n || e.shiftKey
              ? t === s && e.shiftKey && (n.focus(), e.preventDefault())
              : (s.focus(), e.preventDefault());
          }),
          e(this, "update", () => {
            if (this.supported) {
              let e;
              (e = this.forceFallback
                ? "Fallback (forced)"
                : He.nativeSupported
                ? "Native"
                : "Fallback"),
                this.player.debug.log(`${e} fullscreen enabled`);
            } else
              this.player.debug.log(
                "Fullscreen not supported and fallback disabled"
              );
            R(
              this.player.elements.container,
              this.player.config.classNames.fullscreen.enabled,
              this.supported
            );
          }),
          e(this, "enter", () => {
            this.supported &&
              (M.isIos && this.player.config.fullscreen.iosNative
                ? this.player.isVimeo
                  ? this.player.embed.requestFullscreen()
                  : this.target.webkitEnterFullscreen()
                : !He.nativeSupported || this.forceFallback
                ? this.toggleFallback(!0)
                : this.prefix
                ? S.empty(this.prefix) ||
                  this.target[`${this.prefix}Request${this.property}`]()
                : this.target.requestFullscreen({ navigationUI: "hide" }));
          }),
          e(this, "exit", () => {
            if (this.supported)
              if (M.isIos && this.player.config.fullscreen.iosNative)
                this.player.isVimeo
                  ? this.player.embed.exitFullscreen()
                  : this.target.webkitEnterFullscreen(),
                  ie(this.player.play());
              else if (!He.nativeSupported || this.forceFallback)
                this.toggleFallback(!1);
              else if (this.prefix) {
                if (!S.empty(this.prefix)) {
                  const e = "moz" === this.prefix ? "Cancel" : "Exit";
                  document[`${this.prefix}${e}${this.property}`]();
                }
              } else
                (document.cancelFullScreen || document.exitFullscreen).call(
                  document
                );
          }),
          e(this, "toggle", () => {
            this.active ? this.exit() : this.enter();
          }),
          (this.player = t),
          (this.prefix = He.prefix),
          (this.property = He.property),
          (this.scrollPosition = { x: 0, y: 0 }),
          (this.forceFallback = "force" === t.config.fullscreen.fallback),
          (this.player.elements.fullscreen =
            t.config.fullscreen.container &&
            (function (e, t) {
              const { prototype: i } = Element;
              return (
                i.closest ||
                function () {
                  let e = this;
                  do {
                    if (V.matches(e, t)) return e;
                    e = e.parentElement || e.parentNode;
                  } while (null !== e && 1 === e.nodeType);
                  return null;
                }
              ).call(e, t);
            })(this.player.elements.container, t.config.fullscreen.container)),
          X.call(
            this.player,
            document,
            "ms" === this.prefix
              ? "MSFullscreenChange"
              : `${this.prefix}fullscreenchange`,
            () => {
              this.onChange();
            }
          ),
          X.call(
            this.player,
            this.player.elements.container,
            "dblclick",
            (e) => {
              (S.element(this.player.elements.controls) &&
                this.player.elements.controls.contains(e.target)) ||
                this.player.listeners.proxy(e, this.toggle, "fullscreen");
            }
          ),
          X.call(this, this.player.elements.container, "keydown", (e) =>
            this.trapFocus(e)
          ),
          this.update();
      }
      static get nativeSupported() {
        return !!(
          document.fullscreenEnabled ||
          document.webkitFullscreenEnabled ||
          document.mozFullScreenEnabled ||
          document.msFullscreenEnabled
        );
      }
      get useNative() {
        return He.nativeSupported && !this.forceFallback;
      }
      static get prefix() {
        if (S.function(document.exitFullscreen)) return "";
        let e = "";
        return (
          ["webkit", "moz", "ms"].some(
            (t) =>
              !(
                !S.function(document[`${t}ExitFullscreen`]) &&
                !S.function(document[`${t}CancelFullScreen`])
              ) && ((e = t), !0)
          ),
          e
        );
      }
      static get property() {
        return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
      }
      get supported() {
        return [
          this.player.config.fullscreen.enabled,
          this.player.isVideo,
          He.nativeSupported || this.player.config.fullscreen.fallback,
          !this.player.isYouTube ||
            He.nativeSupported ||
            !M.isIos ||
            (this.player.config.playsinline &&
              !this.player.config.fullscreen.iosNative),
        ].every(Boolean);
      }
      get active() {
        if (!this.supported) return !1;
        if (!He.nativeSupported || this.forceFallback)
          return F(
            this.target,
            this.player.config.classNames.fullscreen.fallback
          );
        const e = this.prefix
          ? this.target.getRootNode()[`${this.prefix}${this.property}Element`]
          : this.target.getRootNode().fullscreenElement;
        return e && e.shadowRoot
          ? e === this.target.getRootNode().host
          : e === this.target;
      }
      get target() {
        return M.isIos && this.player.config.fullscreen.iosNative
          ? this.player.media
          : this.player.elements.fullscreen ?? this.player.elements.container;
      }
    }
    function Re(e, t = 1) {
      return new Promise((i, s) => {
        const n = new Image(),
          a = () => {
            delete n.onload, delete n.onerror, (n.naturalWidth >= t ? i : s)(n);
          };
        Object.assign(n, { onload: a, onerror: a, src: e });
      });
    }
    const Fe = {
      addStyleHook() {
        R(
          this.elements.container,
          this.config.selectors.container.replace(".", ""),
          !0
        ),
          R(
            this.elements.container,
            this.config.classNames.uiSupported,
            this.supported.ui
          );
      },
      toggleNativeControls(e = !1) {
        e && this.isHTML5
          ? this.media.setAttribute("controls", "")
          : this.media.removeAttribute("controls");
      },
      build() {
        if ((this.listeners.media(), !this.supported.ui))
          return (
            this.debug.warn(
              `Basic support only for ${this.provider} ${this.type}`
            ),
            void Fe.toggleNativeControls.call(this, !0)
          );
        S.element(this.elements.controls) ||
          (Pe.inject.call(this), this.listeners.controls()),
          Fe.toggleNativeControls.call(this),
          this.isHTML5 && xe.setup.call(this),
          (this.volume = null),
          (this.muted = null),
          (this.loop = null),
          (this.quality = null),
          (this.speed = null),
          Pe.updateVolume.call(this),
          Pe.timeUpdate.call(this),
          Pe.durationUpdate.call(this),
          Fe.checkPlaying.call(this),
          R(
            this.elements.container,
            this.config.classNames.pip.supported,
            K.pip && this.isHTML5 && this.isVideo
          ),
          R(
            this.elements.container,
            this.config.classNames.airplay.supported,
            K.airplay && this.isHTML5
          ),
          R(
            this.elements.container,
            this.config.classNames.isTouch,
            this.touch
          ),
          (this.ready = !0),
          setTimeout(() => {
            Z.call(this, this.media, "ready");
          }, 0),
          Fe.setTitle.call(this),
          this.poster &&
            Fe.setPoster.call(this, this.poster, !1).catch(() => {}),
          this.config.duration && Pe.durationUpdate.call(this),
          this.config.mediaMetadata && Pe.setMediaMetadata.call(this);
      },
      setTitle() {
        let e = ve.get("play", this.config);
        if (
          (S.string(this.config.title) &&
            !S.empty(this.config.title) &&
            (e += `, ${this.config.title}`),
          Array.from(this.elements.buttons.play || []).forEach((t) => {
            t.setAttribute("aria-label", e);
          }),
          this.isEmbed)
        ) {
          const e = B.call(this, "iframe");
          if (!S.element(e)) return;
          const t = S.empty(this.config.title) ? "video" : this.config.title,
            i = ve.get("frameTitle", this.config);
          e.setAttribute("title", i.replace("{title}", t));
        }
      },
      togglePoster(e) {
        R(this.elements.container, this.config.classNames.posterEnabled, e);
      },
      setPoster(e, t = !0) {
        return t && this.poster
          ? Promise.reject(new Error("Poster already set"))
          : (this.media.setAttribute("data-poster", e),
            this.elements.poster.removeAttribute("hidden"),
            te
              .call(this)
              .then(() => Re(e))
              .catch((t) => {
                throw (e === this.poster && Fe.togglePoster.call(this, !1), t);
              })
              .then(() => {
                if (e !== this.poster)
                  throw new Error(
                    "setPoster cancelled by later call to setPoster"
                  );
              })
              .then(
                () => (
                  Object.assign(this.elements.poster.style, {
                    backgroundImage: `url('${e}')`,
                    backgroundSize: "",
                  }),
                  Fe.togglePoster.call(this, !0),
                  e
                )
              ));
      },
      checkPlaying(e) {
        R(
          this.elements.container,
          this.config.classNames.playing,
          this.playing
        ),
          R(
            this.elements.container,
            this.config.classNames.paused,
            this.paused
          ),
          R(
            this.elements.container,
            this.config.classNames.stopped,
            this.stopped
          ),
          Array.from(this.elements.buttons.play || []).forEach((e) => {
            Object.assign(e, { pressed: this.playing }),
              e.setAttribute(
                "aria-label",
                ve.get(this.playing ? "pause" : "play", this.config)
              );
          }),
          (S.event(e) && "timeupdate" === e.type) ||
            Fe.toggleControls.call(this);
      },
      checkLoading(e) {
        (this.loading = ["stalled", "waiting"].includes(e.type)),
          clearTimeout(this.timers.loading),
          (this.timers.loading = setTimeout(
            () => {
              R(
                this.elements.container,
                this.config.classNames.loading,
                this.loading
              ),
                Fe.toggleControls.call(this);
            },
            this.loading ? 250 : 0
          ));
      },
      toggleControls(e) {
        const { controls: t } = this.elements;
        if (t && this.config.hideControls) {
          const i = this.touch && this.lastSeekTime + 2e3 > Date.now();
          this.toggleControls(
            Boolean(
              e || this.loading || this.paused || t.pressed || t.hover || i
            )
          );
        }
      },
      migrateStyles() {
        Object.values({ ...this.media.style })
          .filter((e) => !S.empty(e) && S.string(e) && e.startsWith("--plyr"))
          .forEach((e) => {
            this.elements.container.style.setProperty(
              e,
              this.media.style.getPropertyValue(e)
            ),
              this.media.style.removeProperty(e);
          }),
          S.empty(this.media.style) && this.media.removeAttribute("style");
      },
    };
    class Ve {
      constructor(t) {
        e(this, "firstTouch", () => {
          const { player: e } = this,
            { elements: t } = e;
          (e.touch = !0), R(t.container, e.config.classNames.isTouch, !0);
        }),
          e(this, "global", (e = !0) => {
            const { player: t } = this;
            t.config.keyboard.global &&
              Q.call(t, window, "keydown keyup", this.handleKey, e, !1),
              Q.call(t, document.body, "click", this.toggleMenu, e),
              G.call(t, document.body, "touchstart", this.firstTouch);
          }),
          e(this, "container", () => {
            const { player: e } = this,
              { config: t, elements: i, timers: s } = e;
            !t.keyboard.global &&
              t.keyboard.focused &&
              X.call(e, i.container, "keydown keyup", this.handleKey, !1),
              X.call(
                e,
                i.container,
                "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",
                (t) => {
                  const { controls: n } = i;
                  n &&
                    "enterfullscreen" === t.type &&
                    ((n.pressed = !1), (n.hover = !1));
                  let a = 0;
                  ["touchstart", "touchmove", "mousemove"].includes(t.type) &&
                    (Fe.toggleControls.call(e, !0), (a = e.touch ? 3e3 : 2e3)),
                    clearTimeout(s.controls),
                    (s.controls = setTimeout(
                      () => Fe.toggleControls.call(e, !1),
                      a
                    ));
                }
              );
            const n = () => {
                if (!e.isVimeo || e.config.vimeo.premium) return;
                const t = i.wrapper,
                  { active: s } = e.fullscreen,
                  [n, a] = ce.call(e),
                  l = ae(`aspect-ratio: ${n} / ${a}`);
                if (!s)
                  return void (l
                    ? ((t.style.width = null), (t.style.height = null))
                    : ((t.style.maxWidth = null), (t.style.margin = null)));
                const [r, o] = [
                    Math.max(
                      document.documentElement.clientWidth || 0,
                      window.innerWidth || 0
                    ),
                    Math.max(
                      document.documentElement.clientHeight || 0,
                      window.innerHeight || 0
                    ),
                  ],
                  c = r / o > n / a;
                l
                  ? ((t.style.width = c ? "auto" : "100%"),
                    (t.style.height = c ? "100%" : "auto"))
                  : ((t.style.maxWidth = c ? (o / a) * n + "px" : null),
                    (t.style.margin = c ? "0 auto" : null));
              },
              a = () => {
                clearTimeout(s.resized), (s.resized = setTimeout(n, 50));
              };
            X.call(e, i.container, "enterfullscreen exitfullscreen", (t) => {
              const { target: s } = e.fullscreen;
              if (s !== i.container) return;
              if (!e.isEmbed && S.empty(e.config.ratio)) return;
              n();
              ("enterfullscreen" === t.type ? X : J).call(
                e,
                window,
                "resize",
                a
              );
            });
          }),
          e(this, "media", () => {
            const { player: e } = this,
              { elements: t } = e;
            if (
              (X.call(e, e.media, "timeupdate seeking seeked", (t) =>
                Pe.timeUpdate.call(e, t)
              ),
              X.call(
                e,
                e.media,
                "durationchange loadeddata loadedmetadata",
                (t) => Pe.durationUpdate.call(e, t)
              ),
              X.call(e, e.media, "ended", () => {
                e.isHTML5 &&
                  e.isVideo &&
                  e.config.resetOnEnd &&
                  (e.restart(), e.pause());
              }),
              X.call(e, e.media, "progress playing seeking seeked", (t) =>
                Pe.updateProgress.call(e, t)
              ),
              X.call(e, e.media, "volumechange", (t) =>
                Pe.updateVolume.call(e, t)
              ),
              X.call(
                e,
                e.media,
                "playing play pause ended emptied timeupdate",
                (t) => Fe.checkPlaying.call(e, t)
              ),
              X.call(e, e.media, "waiting canplay seeked playing", (t) =>
                Fe.checkLoading.call(e, t)
              ),
              e.supported.ui && e.config.clickToPlay && !e.isAudio)
            ) {
              const i = B.call(e, `.${e.config.classNames.video}`);
              if (!S.element(i)) return;
              X.call(e, t.container, "click", (s) => {
                ([t.container, i].includes(s.target) || i.contains(s.target)) &&
                  ((e.touch && e.config.hideControls) ||
                    (e.ended
                      ? (this.proxy(s, e.restart, "restart"),
                        this.proxy(
                          s,
                          () => {
                            ie(e.play());
                          },
                          "play"
                        ))
                      : this.proxy(
                          s,
                          () => {
                            ie(e.togglePlay());
                          },
                          "play"
                        )));
              });
            }
            e.supported.ui &&
              e.config.disableContextMenu &&
              X.call(
                e,
                t.wrapper,
                "contextmenu",
                (e) => {
                  e.preventDefault();
                },
                !1
              ),
              X.call(e, e.media, "volumechange", () => {
                e.storage.set({ volume: e.volume, muted: e.muted });
              }),
              X.call(e, e.media, "ratechange", () => {
                Pe.updateSetting.call(e, "speed"),
                  e.storage.set({ speed: e.speed });
              }),
              X.call(e, e.media, "qualitychange", (t) => {
                Pe.updateSetting.call(e, "quality", null, t.detail.quality);
              }),
              X.call(e, e.media, "ready qualitychange", () => {
                Pe.setDownloadUrl.call(e);
              });
            const i = e.config.events.concat(["keyup", "keydown"]).join(" ");
            X.call(e, e.media, i, (i) => {
              let { detail: s = {} } = i;
              "error" === i.type && (s = e.media.error),
                Z.call(e, t.container, i.type, !0, s);
            });
          }),
          e(this, "proxy", (e, t, i) => {
            const { player: s } = this,
              n = s.config.listeners[i];
            let a = !0;
            S.function(n) && (a = n.call(s, e)),
              !1 !== a && S.function(t) && t.call(s, e);
          }),
          e(this, "bind", (e, t, i, s, n = !0) => {
            const { player: a } = this,
              l = a.config.listeners[s],
              r = S.function(l);
            X.call(a, e, t, (e) => this.proxy(e, i, s), n && !r);
          }),
          e(this, "controls", () => {
            const { player: e } = this,
              { elements: t } = e,
              i = M.isIE ? "change" : "input";
            if (
              (t.buttons.play &&
                Array.from(t.buttons.play).forEach((t) => {
                  this.bind(
                    t,
                    "click",
                    () => {
                      ie(e.togglePlay());
                    },
                    "play"
                  );
                }),
              this.bind(t.buttons.restart, "click", e.restart, "restart"),
              this.bind(
                t.buttons.rewind,
                "click",
                () => {
                  (e.lastSeekTime = Date.now()), e.rewind();
                },
                "rewind"
              ),
              this.bind(
                t.buttons.fastForward,
                "click",
                () => {
                  (e.lastSeekTime = Date.now()), e.forward();
                },
                "fastForward"
              ),
              this.bind(
                t.buttons.mute,
                "click",
                () => {
                  e.muted = !e.muted;
                },
                "mute"
              ),
              this.bind(t.buttons.captions, "click", () => e.toggleCaptions()),
              this.bind(
                t.buttons.download,
                "click",
                () => {
                  Z.call(e, e.media, "download");
                },
                "download"
              ),
              this.bind(
                t.buttons.fullscreen,
                "click",
                () => {
                  e.fullscreen.toggle();
                },
                "fullscreen"
              ),
              this.bind(
                t.buttons.pip,
                "click",
                () => {
                  e.pip = "toggle";
                },
                "pip"
              ),
              this.bind(t.buttons.airplay, "click", e.airplay, "airplay"),
              this.bind(
                t.buttons.settings,
                "click",
                (t) => {
                  t.stopPropagation(),
                    t.preventDefault(),
                    Pe.toggleMenu.call(e, t);
                },
                null,
                !1
              ),
              this.bind(
                t.buttons.settings,
                "keyup",
                (t) => {
                  [" ", "Enter"].includes(t.key) &&
                    ("Enter" !== t.key
                      ? (t.preventDefault(),
                        t.stopPropagation(),
                        Pe.toggleMenu.call(e, t))
                      : Pe.focusFirstMenuItem.call(e, null, !0));
                },
                null,
                !1
              ),
              this.bind(t.settings.menu, "keydown", (t) => {
                "Escape" === t.key && Pe.toggleMenu.call(e, t);
              }),
              this.bind(t.inputs.seek, "mousedown mousemove", (e) => {
                const i = t.progress.getBoundingClientRect(),
                  s = (100 / i.width) * (e.pageX - i.left);
                e.currentTarget.setAttribute("seek-value", s);
              }),
              this.bind(
                t.inputs.seek,
                "mousedown mouseup keydown keyup touchstart touchend",
                (t) => {
                  const i = t.currentTarget,
                    s = "play-on-seeked";
                  if (
                    S.keyboardEvent(t) &&
                    !["ArrowLeft", "ArrowRight"].includes(t.key)
                  )
                    return;
                  e.lastSeekTime = Date.now();
                  const n = i.hasAttribute(s),
                    a = ["mouseup", "touchend", "keyup"].includes(t.type);
                  n && a
                    ? (i.removeAttribute(s), ie(e.play()))
                    : !a && e.playing && (i.setAttribute(s, ""), e.pause());
                }
              ),
              M.isIos)
            ) {
              const t = U.call(e, 'input[type="range"]');
              Array.from(t).forEach((e) => this.bind(e, i, (e) => P(e.target)));
            }
            this.bind(
              t.inputs.seek,
              i,
              (t) => {
                const i = t.currentTarget;
                let s = i.getAttribute("seek-value");
                S.empty(s) && (s = i.value),
                  i.removeAttribute("seek-value"),
                  (e.currentTime = (s / i.max) * e.duration);
              },
              "seek"
            ),
              this.bind(t.progress, "mouseenter mouseleave mousemove", (t) =>
                Pe.updateSeekTooltip.call(e, t)
              ),
              this.bind(t.progress, "mousemove touchmove", (t) => {
                const { previewThumbnails: i } = e;
                i && i.loaded && i.startMove(t);
              }),
              this.bind(t.progress, "mouseleave touchend click", () => {
                const { previewThumbnails: t } = e;
                t && t.loaded && t.endMove(!1, !0);
              }),
              this.bind(t.progress, "mousedown touchstart", (t) => {
                const { previewThumbnails: i } = e;
                i && i.loaded && i.startScrubbing(t);
              }),
              this.bind(t.progress, "mouseup touchend", (t) => {
                const { previewThumbnails: i } = e;
                i && i.loaded && i.endScrubbing(t);
              }),
              M.isWebKit &&
                Array.from(U.call(e, 'input[type="range"]')).forEach((t) => {
                  this.bind(t, "input", (t) =>
                    Pe.updateRangeFill.call(e, t.target)
                  );
                }),
              e.config.toggleInvert &&
                !S.element(t.display.duration) &&
                this.bind(t.display.currentTime, "click", () => {
                  0 !== e.currentTime &&
                    ((e.config.invertTime = !e.config.invertTime),
                    Pe.timeUpdate.call(e));
                }),
              this.bind(
                t.inputs.volume,
                i,
                (t) => {
                  e.volume = t.target.value;
                },
                "volume"
              ),
              this.bind(t.controls, "mouseenter mouseleave", (i) => {
                t.controls.hover = !e.touch && "mouseenter" === i.type;
              }),
              t.fullscreen &&
                Array.from(t.fullscreen.children)
                  .filter((e) => !e.contains(t.container))
                  .forEach((i) => {
                    this.bind(i, "mouseenter mouseleave", (i) => {
                      t.controls &&
                        (t.controls.hover =
                          !e.touch && "mouseenter" === i.type);
                    });
                  }),
              this.bind(
                t.controls,
                "mousedown mouseup touchstart touchend touchcancel",
                (e) => {
                  t.controls.pressed = ["mousedown", "touchstart"].includes(
                    e.type
                  );
                }
              ),
              this.bind(t.controls, "focusin", () => {
                const { config: i, timers: s } = e;
                R(t.controls, i.classNames.noTransition, !0),
                  Fe.toggleControls.call(e, !0),
                  setTimeout(() => {
                    R(t.controls, i.classNames.noTransition, !1);
                  }, 0);
                const n = this.touch ? 3e3 : 4e3;
                clearTimeout(s.controls),
                  (s.controls = setTimeout(
                    () => Fe.toggleControls.call(e, !1),
                    n
                  ));
              }),
              this.bind(
                t.inputs.volume,
                "wheel",
                (t) => {
                  const i = t.webkitDirectionInvertedFromDevice,
                    [s, n] = [t.deltaX, -t.deltaY].map((e) => (i ? -e : e)),
                    a = Math.sign(Math.abs(s) > Math.abs(n) ? s : n);
                  e.increaseVolume(a / 50);
                  const { volume: l } = e.media;
                  ((1 === a && l < 1) || (-1 === a && l > 0)) &&
                    t.preventDefault();
                },
                "volume",
                !1
              );
          }),
          (this.player = t),
          (this.lastKey = null),
          (this.focusTimer = null),
          (this.lastKeyDown = null),
          (this.handleKey = this.handleKey.bind(this)),
          (this.toggleMenu = this.toggleMenu.bind(this)),
          (this.firstTouch = this.firstTouch.bind(this));
      }
      handleKey(e) {
        const { player: t } = this,
          { elements: i } = t,
          {
            key: s,
            type: n,
            altKey: a,
            ctrlKey: l,
            metaKey: r,
            shiftKey: o,
          } = e,
          c = "keydown" === n,
          u = c && s === this.lastKey;
        if (a || l || r || o) return;
        if (!s) return;
        if (c) {
          const n = document.activeElement;
          if (S.element(n)) {
            const { editable: s } = t.config.selectors,
              { seek: a } = i.inputs;
            if (n !== a && V(n, s)) return;
            if (" " === e.key && V(n, 'button, [role^="menuitem"]')) return;
          }
          switch (
            ([
              " ",
              "ArrowLeft",
              "ArrowUp",
              "ArrowRight",
              "ArrowDown",
              "0",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "c",
              "f",
              "k",
              "l",
              "m",
            ].includes(s) && (e.preventDefault(), e.stopPropagation()),
            s)
          ) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
              u ||
                ((h = parseInt(s, 10)),
                (t.currentTime = (t.duration / 10) * h));
              break;
            case " ":
            case "k":
              u || ie(t.togglePlay());
              break;
            case "ArrowUp":
              t.increaseVolume(0.1);
              break;
            case "ArrowDown":
              t.decreaseVolume(0.1);
              break;
            case "m":
              u || (t.muted = !t.muted);
              break;
            case "ArrowRight":
              t.forward();
              break;
            case "ArrowLeft":
              t.rewind();
              break;
            case "f":
              t.fullscreen.toggle();
              break;
            case "c":
              u || t.toggleCaptions();
              break;
            case "l":
              t.loop = !t.loop;
          }
          "Escape" === s &&
            !t.fullscreen.usingNative &&
            t.fullscreen.active &&
            t.fullscreen.toggle(),
            (this.lastKey = s);
        } else this.lastKey = null;
        var h;
      }
      toggleMenu(e) {
        Pe.toggleMenu.call(this.player, e);
      }
    }
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self && self;
    var Ue = (function (e, t) {
      return e((t = { exports: {} }), t.exports), t.exports;
    })(function (e, t) {
      e.exports = (function () {
        var e = function () {},
          t = {},
          i = {},
          s = {};
        function n(e, t) {
          e = e.push ? e : [e];
          var n,
            a,
            l,
            r = [],
            o = e.length,
            c = o;
          for (
            n = function (e, i) {
              i.length && r.push(e), --c || t(r);
            };
            o--;

          )
            (a = e[o]), (l = i[a]) ? n(a, l) : (s[a] = s[a] || []).push(n);
        }
        function a(e, t) {
          if (e) {
            var n = s[e];
            if (((i[e] = t), n)) for (; n.length; ) n[0](e, t), n.splice(0, 1);
          }
        }
        function l(t, i) {
          t.call && (t = { success: t }),
            i.length ? (t.error || e)(i) : (t.success || e)(t);
        }
        function r(t, i, s, n) {
          var a,
            l,
            o = document,
            c = s.async,
            u = (s.numRetries || 0) + 1,
            h = s.before || e,
            d = t.replace(/[\?|#].*$/, ""),
            m = t.replace(/^(css|img)!/, "");
          (n = n || 0),
            /(^css!|\.css$)/.test(d)
              ? (((l = o.createElement("link")).rel = "stylesheet"),
                (l.href = m),
                (a = "hideFocus" in l) &&
                  l.relList &&
                  ((a = 0), (l.rel = "preload"), (l.as = "style")))
              : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d)
              ? ((l = o.createElement("img")).src = m)
              : (((l = o.createElement("script")).src = t),
                (l.async = void 0 === c || c)),
            (l.onload =
              l.onerror =
              l.onbeforeload =
                function (e) {
                  var o = e.type[0];
                  if (a)
                    try {
                      l.sheet.cssText.length || (o = "e");
                    } catch (e) {
                      18 != e.code && (o = "e");
                    }
                  if ("e" == o) {
                    if ((n += 1) < u) return r(t, i, s, n);
                  } else if ("preload" == l.rel && "style" == l.as)
                    return (l.rel = "stylesheet");
                  i(t, o, e.defaultPrevented);
                }),
            !1 !== h(t, l) && o.head.appendChild(l);
        }
        function o(e, t, i) {
          var s,
            n,
            a = (e = e.push ? e : [e]).length,
            l = a,
            o = [];
          for (
            s = function (e, i, s) {
              if (("e" == i && o.push(e), "b" == i)) {
                if (!s) return;
                o.push(e);
              }
              --a || t(o);
            },
              n = 0;
            n < l;
            n++
          )
            r(e[n], s, i);
        }
        function c(e, i, s) {
          var n, r;
          if ((i && i.trim && (n = i), (r = (n ? s : i) || {}), n)) {
            if (n in t) throw "LoadJS";
            t[n] = !0;
          }
          function c(t, i) {
            o(
              e,
              function (e) {
                l(r, e), t && l({ success: t, error: i }, e), a(n, e);
              },
              r
            );
          }
          if (r.returnPromise) return new Promise(c);
          c();
        }
        return (
          (c.ready = function (e, t) {
            return (
              n(e, function (e) {
                l(t, e);
              }),
              c
            );
          }),
          (c.done = function (e) {
            a(e, []);
          }),
          (c.reset = function () {
            (t = {}), (i = {}), (s = {});
          }),
          (c.isDefined = function (e) {
            return e in t;
          }),
          c
        );
      })();
    });
    function Be(e) {
      return new Promise((t, i) => {
        Ue(e, { success: t, error: i });
      });
    }
    function We(e) {
      e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
        this.media.paused === e &&
          ((this.media.paused = !e),
          Z.call(this, this.media, e ? "play" : "pause"));
    }
    const ze = {
      setup() {
        const e = this;
        R(e.elements.wrapper, e.config.classNames.embed, !0),
          (e.options.speed = e.config.speed.options),
          ue.call(e),
          S.object(window.Vimeo)
            ? ze.ready.call(e)
            : Be(e.config.urls.vimeo.sdk)
                .then(() => {
                  ze.ready.call(e);
                })
                .catch((t) => {
                  e.debug.warn("Vimeo SDK (player.js) failed to load", t);
                });
      },
      ready() {
        const e = this,
          t = e.config.vimeo,
          { premium: i, referrerPolicy: s, ...n } = t;
        let a = e.media.getAttribute("src"),
          l = "";
        S.empty(a)
          ? ((a = e.media.getAttribute(e.config.attributes.embed.id)),
            (l = e.media.getAttribute(e.config.attributes.embed.hash)))
          : (l = (function (e) {
              const t = e.match(
                /^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/
              );
              return t && 5 === t.length ? t[4] : null;
            })(a));
        const r = l ? { h: l } : {};
        i && Object.assign(n, { controls: !1, sidedock: !1 });
        const o = Ne({
            loop: e.config.loop.active,
            autoplay: e.autoplay,
            muted: e.muted,
            gesture: "media",
            playsinline: e.config.playsinline,
            ...r,
            ...n,
          }),
          c =
            ((u = a),
            S.empty(u)
              ? null
              : S.number(Number(u))
              ? u
              : u.match(/^.*(vimeo.com\/|video\/)(\d+).*/)
              ? RegExp.$2
              : u);
        var u;
        const h = $("iframe"),
          d = me(e.config.urls.vimeo.iframe, c, o);
        if (
          (h.setAttribute("src", d),
          h.setAttribute("allowfullscreen", ""),
          h.setAttribute(
            "allow",
            [
              "autoplay",
              "fullscreen",
              "picture-in-picture",
              "encrypted-media",
              "accelerometer",
              "gyroscope",
            ].join("; ")
          ),
          S.empty(s) || h.setAttribute("referrerPolicy", s),
          i || !t.customControls)
        )
          h.setAttribute("data-poster", e.poster), (e.media = q(h, e.media));
        else {
          const t = $("div", {
            class: e.config.classNames.embedContainer,
            "data-poster": e.poster,
          });
          t.appendChild(h), (e.media = q(t, e.media));
        }
        t.customControls ||
          Te(me(e.config.urls.vimeo.api, d)).then((t) => {
            !S.empty(t) &&
              t.thumbnail_url &&
              Fe.setPoster.call(e, t.thumbnail_url).catch(() => {});
          }),
          (e.embed = new window.Vimeo.Player(h, {
            autopause: e.config.autopause,
            muted: e.muted,
          })),
          (e.media.paused = !0),
          (e.media.currentTime = 0),
          e.supported.ui && e.embed.disableTextTrack(),
          (e.media.play = () => (We.call(e, !0), e.embed.play())),
          (e.media.pause = () => (We.call(e, !1), e.embed.pause())),
          (e.media.stop = () => {
            e.pause(), (e.currentTime = 0);
          });
        let { currentTime: m } = e.media;
        Object.defineProperty(e.media, "currentTime", {
          get: () => m,
          set(t) {
            const { embed: i, media: s, paused: n, volume: a } = e,
              l = n && !i.hasPlayed;
            (s.seeking = !0),
              Z.call(e, s, "seeking"),
              Promise.resolve(l && i.setVolume(0))
                .then(() => i.setCurrentTime(t))
                .then(() => l && i.pause())
                .then(() => l && i.setVolume(a))
                .catch(() => {});
          },
        });
        let p = e.config.speed.selected;
        Object.defineProperty(e.media, "playbackRate", {
          get: () => p,
          set(t) {
            e.embed
              .setPlaybackRate(t)
              .then(() => {
                (p = t), Z.call(e, e.media, "ratechange");
              })
              .catch(() => {
                e.options.speed = [1];
              });
          },
        });
        let { volume: g } = e.config;
        Object.defineProperty(e.media, "volume", {
          get: () => g,
          set(t) {
            e.embed.setVolume(t).then(() => {
              (g = t), Z.call(e, e.media, "volumechange");
            });
          },
        });
        let { muted: f } = e.config;
        Object.defineProperty(e.media, "muted", {
          get: () => f,
          set(t) {
            const i = !!S.boolean(t) && t;
            e.embed.setMuted(!!i || e.config.muted).then(() => {
              (f = i), Z.call(e, e.media, "volumechange");
            });
          },
        });
        let y,
          { loop: b } = e.config;
        Object.defineProperty(e.media, "loop", {
          get: () => b,
          set(t) {
            const i = S.boolean(t) ? t : e.config.loop.active;
            e.embed.setLoop(i).then(() => {
              b = i;
            });
          },
        }),
          e.embed
            .getVideoUrl()
            .then((t) => {
              (y = t), Pe.setDownloadUrl.call(e);
            })
            .catch((e) => {
              this.debug.warn(e);
            }),
          Object.defineProperty(e.media, "currentSrc", { get: () => y }),
          Object.defineProperty(e.media, "ended", {
            get: () => e.currentTime === e.duration,
          }),
          Promise.all([e.embed.getVideoWidth(), e.embed.getVideoHeight()]).then(
            (t) => {
              const [i, s] = t;
              (e.embed.ratio = he(i, s)), ue.call(this);
            }
          ),
          e.embed.setAutopause(e.config.autopause).then((t) => {
            e.config.autopause = t;
          }),
          e.embed.getVideoTitle().then((t) => {
            (e.config.title = t), Fe.setTitle.call(this);
          }),
          e.embed.getCurrentTime().then((t) => {
            (m = t), Z.call(e, e.media, "timeupdate");
          }),
          e.embed.getDuration().then((t) => {
            (e.media.duration = t), Z.call(e, e.media, "durationchange");
          }),
          e.embed.getTextTracks().then((t) => {
            (e.media.textTracks = t), xe.setup.call(e);
          }),
          e.embed.on("cuechange", ({ cues: t = [] }) => {
            const i = t.map((e) =>
              (function (e) {
                const t = document.createDocumentFragment(),
                  i = document.createElement("div");
                return (
                  t.appendChild(i), (i.innerHTML = e), t.firstChild.innerText
                );
              })(e.text)
            );
            xe.updateCues.call(e, i);
          }),
          e.embed.on("loaded", () => {
            if (
              (e.embed.getPaused().then((t) => {
                We.call(e, !t), t || Z.call(e, e.media, "playing");
              }),
              S.element(e.embed.element) && e.supported.ui)
            ) {
              e.embed.element.setAttribute("tabindex", -1);
            }
          }),
          e.embed.on("bufferstart", () => {
            Z.call(e, e.media, "waiting");
          }),
          e.embed.on("bufferend", () => {
            Z.call(e, e.media, "playing");
          }),
          e.embed.on("play", () => {
            We.call(e, !0), Z.call(e, e.media, "playing");
          }),
          e.embed.on("pause", () => {
            We.call(e, !1);
          }),
          e.embed.on("timeupdate", (t) => {
            (e.media.seeking = !1),
              (m = t.seconds),
              Z.call(e, e.media, "timeupdate");
          }),
          e.embed.on("progress", (t) => {
            (e.media.buffered = t.percent),
              Z.call(e, e.media, "progress"),
              1 === parseInt(t.percent, 10) &&
                Z.call(e, e.media, "canplaythrough"),
              e.embed.getDuration().then((t) => {
                t !== e.media.duration &&
                  ((e.media.duration = t),
                  Z.call(e, e.media, "durationchange"));
              });
          }),
          e.embed.on("seeked", () => {
            (e.media.seeking = !1), Z.call(e, e.media, "seeked");
          }),
          e.embed.on("ended", () => {
            (e.media.paused = !0), Z.call(e, e.media, "ended");
          }),
          e.embed.on("error", (t) => {
            (e.media.error = t), Z.call(e, e.media, "error");
          }),
          t.customControls && setTimeout(() => Fe.build.call(e), 0);
      },
    };
    function Ke(e) {
      e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
        this.media.paused === e &&
          ((this.media.paused = !e),
          Z.call(this, this.media, e ? "play" : "pause"));
    }
    function Ye(e) {
      return e.noCookie
        ? "https://www.youtube-nocookie.com"
        : "http:" === window.location.protocol
        ? "http://www.youtube.com"
        : void 0;
    }
    const Qe = {
        setup() {
          if (
            (R(this.elements.wrapper, this.config.classNames.embed, !0),
            S.object(window.YT) && S.function(window.YT.Player))
          )
            Qe.ready.call(this);
          else {
            const e = window.onYouTubeIframeAPIReady;
            (window.onYouTubeIframeAPIReady = () => {
              S.function(e) && e(), Qe.ready.call(this);
            }),
              Be(this.config.urls.youtube.sdk).catch((e) => {
                this.debug.warn("YouTube API failed to load", e);
              });
          }
        },
        getTitle(e) {
          Te(me(this.config.urls.youtube.api, e))
            .then((e) => {
              if (S.object(e)) {
                const { title: t, height: i, width: s } = e;
                (this.config.title = t),
                  Fe.setTitle.call(this),
                  (this.embed.ratio = he(s, i));
              }
              ue.call(this);
            })
            .catch(() => {
              ue.call(this);
            });
        },
        ready() {
          const e = this,
            t = e.config.youtube,
            i = e.media && e.media.getAttribute("id");
          if (!S.empty(i) && i.startsWith("youtube-")) return;
          let s = e.media.getAttribute("src");
          S.empty(s) &&
            (s = e.media.getAttribute(this.config.attributes.embed.id));
          const n =
            ((a = s),
            S.empty(a)
              ? null
              : a.match(
                  /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
                )
              ? RegExp.$2
              : a);
          var a;
          const l = $("div", {
            id: `${e.provider}-${Math.floor(1e4 * Math.random())}`,
            "data-poster": t.customControls ? e.poster : void 0,
          });
          if (((e.media = q(l, e.media)), t.customControls)) {
            const t = (e) => `https://i.ytimg.com/vi/${n}/${e}default.jpg`;
            Re(t("maxres"), 121)
              .catch(() => Re(t("sd"), 121))
              .catch(() => Re(t("hq")))
              .then((t) => Fe.setPoster.call(e, t.src))
              .then((t) => {
                t.includes("maxres") ||
                  (e.elements.poster.style.backgroundSize = "cover");
              })
              .catch(() => {});
          }
          e.embed = new window.YT.Player(e.media, {
            videoId: n,
            host: Ye(t),
            playerVars: x(
              {},
              {
                autoplay: e.config.autoplay ? 1 : 0,
                hl: e.config.hl,
                controls: e.supported.ui && t.customControls ? 0 : 1,
                disablekb: 1,
                playsinline:
                  e.config.playsinline && !e.config.fullscreen.iosNative
                    ? 1
                    : 0,
                cc_load_policy: e.captions.active ? 1 : 0,
                cc_lang_pref: e.config.captions.language,
                widget_referrer: window ? window.location.href : null,
              },
              t
            ),
            events: {
              onError(t) {
                if (!e.media.error) {
                  const i = t.data,
                    s =
                      {
                        2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                        5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                        100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                        101: "The owner of the requested video does not allow it to be played in embedded players.",
                        150: "The owner of the requested video does not allow it to be played in embedded players.",
                      }[i] || "An unknown error occurred";
                  (e.media.error = { code: i, message: s }),
                    Z.call(e, e.media, "error");
                }
              },
              onPlaybackRateChange(t) {
                const i = t.target;
                (e.media.playbackRate = i.getPlaybackRate()),
                  Z.call(e, e.media, "ratechange");
              },
              onReady(i) {
                if (S.function(e.media.play)) return;
                const s = i.target;
                Qe.getTitle.call(e, n),
                  (e.media.play = () => {
                    Ke.call(e, !0), s.playVideo();
                  }),
                  (e.media.pause = () => {
                    Ke.call(e, !1), s.pauseVideo();
                  }),
                  (e.media.stop = () => {
                    s.stopVideo();
                  }),
                  (e.media.duration = s.getDuration()),
                  (e.media.paused = !0),
                  (e.media.currentTime = 0),
                  Object.defineProperty(e.media, "currentTime", {
                    get: () => Number(s.getCurrentTime()),
                    set(t) {
                      e.paused && !e.embed.hasPlayed && e.embed.mute(),
                        (e.media.seeking = !0),
                        Z.call(e, e.media, "seeking"),
                        s.seekTo(t);
                    },
                  }),
                  Object.defineProperty(e.media, "playbackRate", {
                    get: () => s.getPlaybackRate(),
                    set(e) {
                      s.setPlaybackRate(e);
                    },
                  });
                let { volume: a } = e.config;
                Object.defineProperty(e.media, "volume", {
                  get: () => a,
                  set(t) {
                    (a = t),
                      s.setVolume(100 * a),
                      Z.call(e, e.media, "volumechange");
                  },
                });
                let { muted: l } = e.config;
                Object.defineProperty(e.media, "muted", {
                  get: () => l,
                  set(t) {
                    const i = S.boolean(t) ? t : l;
                    (l = i),
                      s[i ? "mute" : "unMute"](),
                      s.setVolume(100 * a),
                      Z.call(e, e.media, "volumechange");
                  },
                }),
                  Object.defineProperty(e.media, "currentSrc", {
                    get: () => s.getVideoUrl(),
                  }),
                  Object.defineProperty(e.media, "ended", {
                    get: () => e.currentTime === e.duration,
                  });
                const r = s.getAvailablePlaybackRates();
                (e.options.speed = r.filter((t) =>
                  e.config.speed.options.includes(t)
                )),
                  e.supported.ui &&
                    t.customControls &&
                    e.media.setAttribute("tabindex", -1),
                  Z.call(e, e.media, "timeupdate"),
                  Z.call(e, e.media, "durationchange"),
                  clearInterval(e.timers.buffering),
                  (e.timers.buffering = setInterval(() => {
                    (e.media.buffered = s.getVideoLoadedFraction()),
                      (null === e.media.lastBuffered ||
                        e.media.lastBuffered < e.media.buffered) &&
                        Z.call(e, e.media, "progress"),
                      (e.media.lastBuffered = e.media.buffered),
                      1 === e.media.buffered &&
                        (clearInterval(e.timers.buffering),
                        Z.call(e, e.media, "canplaythrough"));
                  }, 200)),
                  t.customControls && setTimeout(() => Fe.build.call(e), 50);
              },
              onStateChange(i) {
                const s = i.target;
                clearInterval(e.timers.playing);
                switch (
                  (e.media.seeking &&
                    [1, 2].includes(i.data) &&
                    ((e.media.seeking = !1), Z.call(e, e.media, "seeked")),
                  i.data)
                ) {
                  case -1:
                    Z.call(e, e.media, "timeupdate"),
                      (e.media.buffered = s.getVideoLoadedFraction()),
                      Z.call(e, e.media, "progress");
                    break;
                  case 0:
                    Ke.call(e, !1),
                      e.media.loop
                        ? (s.stopVideo(), s.playVideo())
                        : Z.call(e, e.media, "ended");
                    break;
                  case 1:
                    t.customControls &&
                    !e.config.autoplay &&
                    e.media.paused &&
                    !e.embed.hasPlayed
                      ? e.media.pause()
                      : (Ke.call(e, !0),
                        Z.call(e, e.media, "playing"),
                        (e.timers.playing = setInterval(() => {
                          Z.call(e, e.media, "timeupdate");
                        }, 50)),
                        e.media.duration !== s.getDuration() &&
                          ((e.media.duration = s.getDuration()),
                          Z.call(e, e.media, "durationchange")));
                    break;
                  case 2:
                    e.muted || e.embed.unMute(), Ke.call(e, !1);
                    break;
                  case 3:
                    Z.call(e, e.media, "waiting");
                }
                Z.call(e, e.elements.container, "statechange", !1, {
                  code: i.data,
                });
              },
            },
          });
        },
      },
      Xe = {
        setup() {
          this.media
            ? (R(
                this.elements.container,
                this.config.classNames.type.replace("{0}", this.type),
                !0
              ),
              R(
                this.elements.container,
                this.config.classNames.provider.replace("{0}", this.provider),
                !0
              ),
              this.isEmbed &&
                R(
                  this.elements.container,
                  this.config.classNames.type.replace("{0}", "video"),
                  !0
                ),
              this.isVideo &&
                ((this.elements.wrapper = $("div", {
                  class: this.config.classNames.video,
                })),
                L(this.media, this.elements.wrapper),
                (this.elements.poster = $("div", {
                  class: this.config.classNames.poster,
                })),
                this.elements.wrapper.appendChild(this.elements.poster)),
              this.isHTML5
                ? de.setup.call(this)
                : this.isYouTube
                ? Qe.setup.call(this)
                : this.isVimeo && ze.setup.call(this))
            : this.debug.warn("No media element found!");
        },
      };
    class Je {
      constructor(t) {
        e(this, "load", () => {
          this.enabled &&
            (S.object(window.google) && S.object(window.google.ima)
              ? this.ready()
              : Be(this.player.config.urls.googleIMA.sdk)
                  .then(() => {
                    this.ready();
                  })
                  .catch(() => {
                    this.trigger(
                      "error",
                      new Error("Google IMA SDK failed to load")
                    );
                  }));
        }),
          e(this, "ready", () => {
            var e;
            this.enabled ||
              ((e = this).manager && e.manager.destroy(),
              e.elements.displayContainer &&
                e.elements.displayContainer.destroy(),
              e.elements.container.remove()),
              this.startSafetyTimer(12e3, "ready()"),
              this.managerPromise.then(() => {
                this.clearSafetyTimer("onAdsManagerLoaded()");
              }),
              this.listeners(),
              this.setupIMA();
          }),
          e(this, "setupIMA", () => {
            (this.elements.container = $("div", {
              class: this.player.config.classNames.ads,
            })),
              this.player.elements.container.appendChild(
                this.elements.container
              ),
              google.ima.settings.setVpaidMode(
                google.ima.ImaSdkSettings.VpaidMode.ENABLED
              ),
              google.ima.settings.setLocale(this.player.config.ads.language),
              google.ima.settings.setDisableCustomPlaybackForIOS10Plus(
                this.player.config.playsinline
              ),
              (this.elements.displayContainer =
                new google.ima.AdDisplayContainer(
                  this.elements.container,
                  this.player.media
                )),
              (this.loader = new google.ima.AdsLoader(
                this.elements.displayContainer
              )),
              this.loader.addEventListener(
                google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
                (e) => this.onAdsManagerLoaded(e),
                !1
              ),
              this.loader.addEventListener(
                google.ima.AdErrorEvent.Type.AD_ERROR,
                (e) => this.onAdError(e),
                !1
              ),
              this.requestAds();
          }),
          e(this, "requestAds", () => {
            const { container: e } = this.player.elements;
            try {
              const t = new google.ima.AdsRequest();
              (t.adTagUrl = this.tagUrl),
                (t.linearAdSlotWidth = e.offsetWidth),
                (t.linearAdSlotHeight = e.offsetHeight),
                (t.nonLinearAdSlotWidth = e.offsetWidth),
                (t.nonLinearAdSlotHeight = e.offsetHeight),
                (t.forceNonLinearFullSlot = !1),
                t.setAdWillPlayMuted(!this.player.muted),
                this.loader.requestAds(t);
            } catch (e) {
              this.onAdError(e);
            }
          }),
          e(this, "pollCountdown", (e = !1) => {
            if (!e)
              return (
                clearInterval(this.countdownTimer),
                void this.elements.container.removeAttribute("data-badge-text")
              );
            this.countdownTimer = setInterval(() => {
              const e = Ee(Math.max(this.manager.getRemainingTime(), 0)),
                t = `${ve.get("advertisement", this.player.config)} - ${e}`;
              this.elements.container.setAttribute("data-badge-text", t);
            }, 100);
          }),
          e(this, "onAdsManagerLoaded", (e) => {
            if (!this.enabled) return;
            const t = new google.ima.AdsRenderingSettings();
            (t.restoreCustomPlaybackStateOnAdBreakComplete = !0),
              (t.enablePreloading = !0),
              (this.manager = e.getAdsManager(this.player, t)),
              (this.cuePoints = this.manager.getCuePoints()),
              this.manager.addEventListener(
                google.ima.AdErrorEvent.Type.AD_ERROR,
                (e) => this.onAdError(e)
              ),
              Object.keys(google.ima.AdEvent.Type).forEach((e) => {
                this.manager.addEventListener(google.ima.AdEvent.Type[e], (e) =>
                  this.onAdEvent(e)
                );
              }),
              this.trigger("loaded");
          }),
          e(this, "addCuePoints", () => {
            S.empty(this.cuePoints) ||
              this.cuePoints.forEach((e) => {
                if (0 !== e && -1 !== e && e < this.player.duration) {
                  const t = this.player.elements.progress;
                  if (S.element(t)) {
                    const i = (100 / this.player.duration) * e,
                      s = $("span", {
                        class: this.player.config.classNames.cues,
                      });
                    (s.style.left = `${i.toString()}%`), t.appendChild(s);
                  }
                }
              });
          }),
          e(this, "onAdEvent", (e) => {
            const { container: t } = this.player.elements,
              i = e.getAd(),
              s = e.getAdData();
            switch (
              (((e) => {
                Z.call(
                  this.player,
                  this.player.media,
                  `ads${e.replace(/_/g, "").toLowerCase()}`
                );
              })(e.type),
              e.type)
            ) {
              case google.ima.AdEvent.Type.LOADED:
                this.trigger("loaded"),
                  this.pollCountdown(!0),
                  i.isLinear() ||
                    ((i.width = t.offsetWidth), (i.height = t.offsetHeight));
                break;
              case google.ima.AdEvent.Type.STARTED:
                this.manager.setVolume(this.player.volume);
                break;
              case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                this.player.ended
                  ? this.loadAds()
                  : this.loader.contentComplete();
                break;
              case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                this.pauseContent();
                break;
              case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                this.pollCountdown(), this.resumeContent();
                break;
              case google.ima.AdEvent.Type.LOG:
                s.adError &&
                  this.player.debug.warn(
                    `Non-fatal ad error: ${s.adError.getMessage()}`
                  );
            }
          }),
          e(this, "onAdError", (e) => {
            this.cancel(), this.player.debug.warn("Ads error", e);
          }),
          e(this, "listeners", () => {
            const { container: e } = this.player.elements;
            let t;
            this.player.on("canplay", () => {
              this.addCuePoints();
            }),
              this.player.on("ended", () => {
                this.loader.contentComplete();
              }),
              this.player.on("timeupdate", () => {
                t = this.player.currentTime;
              }),
              this.player.on("seeked", () => {
                const e = this.player.currentTime;
                S.empty(this.cuePoints) ||
                  this.cuePoints.forEach((i, s) => {
                    t < i &&
                      i < e &&
                      (this.manager.discardAdBreak(),
                      this.cuePoints.splice(s, 1));
                  });
              }),
              window.addEventListener("resize", () => {
                this.manager &&
                  this.manager.resize(
                    e.offsetWidth,
                    e.offsetHeight,
                    google.ima.ViewMode.NORMAL
                  );
              });
          }),
          e(this, "play", () => {
            const { container: e } = this.player.elements;
            this.managerPromise || this.resumeContent(),
              this.managerPromise
                .then(() => {
                  this.manager.setVolume(this.player.volume),
                    this.elements.displayContainer.initialize();
                  try {
                    this.initialized ||
                      (this.manager.init(
                        e.offsetWidth,
                        e.offsetHeight,
                        google.ima.ViewMode.NORMAL
                      ),
                      this.manager.start()),
                      (this.initialized = !0);
                  } catch (e) {
                    this.onAdError(e);
                  }
                })
                .catch(() => {});
          }),
          e(this, "resumeContent", () => {
            (this.elements.container.style.zIndex = ""),
              (this.playing = !1),
              ie(this.player.media.play());
          }),
          e(this, "pauseContent", () => {
            (this.elements.container.style.zIndex = 3),
              (this.playing = !0),
              this.player.media.pause();
          }),
          e(this, "cancel", () => {
            this.initialized && this.resumeContent(),
              this.trigger("error"),
              this.loadAds();
          }),
          e(this, "loadAds", () => {
            this.managerPromise
              .then(() => {
                this.manager && this.manager.destroy(),
                  (this.managerPromise = new Promise((e) => {
                    this.on("loaded", e), this.player.debug.log(this.manager);
                  })),
                  (this.initialized = !1),
                  this.requestAds();
              })
              .catch(() => {});
          }),
          e(this, "trigger", (e, ...t) => {
            const i = this.events[e];
            S.array(i) &&
              i.forEach((e) => {
                S.function(e) && e.apply(this, t);
              });
          }),
          e(
            this,
            "on",
            (e, t) => (
              S.array(this.events[e]) || (this.events[e] = []),
              this.events[e].push(t),
              this
            )
          ),
          e(this, "startSafetyTimer", (e, t) => {
            this.player.debug.log(`Safety timer invoked from: ${t}`),
              (this.safetyTimer = setTimeout(() => {
                this.cancel(), this.clearSafetyTimer("startSafetyTimer()");
              }, e));
          }),
          e(this, "clearSafetyTimer", (e) => {
            S.nullOrUndefined(this.safetyTimer) ||
              (this.player.debug.log(`Safety timer cleared from: ${e}`),
              clearTimeout(this.safetyTimer),
              (this.safetyTimer = null));
          }),
          (this.player = t),
          (this.config = t.config.ads),
          (this.playing = !1),
          (this.initialized = !1),
          (this.elements = { container: null, displayContainer: null }),
          (this.manager = null),
          (this.loader = null),
          (this.cuePoints = null),
          (this.events = {}),
          (this.safetyTimer = null),
          (this.countdownTimer = null),
          (this.managerPromise = new Promise((e, t) => {
            this.on("loaded", e), this.on("error", t);
          })),
          this.load();
      }
      get enabled() {
        const { config: e } = this;
        return (
          this.player.isHTML5 &&
          this.player.isVideo &&
          e.enabled &&
          (!S.empty(e.publisherId) || S.url(e.tagUrl))
        );
      }
      get tagUrl() {
        const { config: e } = this;
        if (S.url(e.tagUrl)) return e.tagUrl;
        return `https://go.aniview.com/api/adserver6/vast/?${Ne({
          AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
          AV_CHANNELID: "5a0458dc28a06145e4519d21",
          AV_URL: window.location.hostname,
          cb: Date.now(),
          AV_WIDTH: 640,
          AV_HEIGHT: 480,
          AV_CDIM2: e.publisherId,
        })}`;
      }
    }
    function Ge(e = 0, t = 0, i = 255) {
      return Math.min(Math.max(e, t), i);
    }
    const Ze = (e) => {
        const t = [];
        return (
          e.split(/\r\n\r\n|\n\n|\r\r/).forEach((e) => {
            const i = {};
            e.split(/\r\n|\n|\r/).forEach((e) => {
              if (S.number(i.startTime)) {
                if (!S.empty(e.trim()) && S.empty(i.text)) {
                  const t = e.trim().split("#xywh=");
                  ([i.text] = t),
                    t[1] && ([i.x, i.y, i.w, i.h] = t[1].split(","));
                }
              } else {
                const t = e.match(
                  /([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/
                );
                t &&
                  ((i.startTime =
                    60 * Number(t[1] || 0) * 60 +
                    60 * Number(t[2]) +
                    Number(t[3]) +
                    Number(`0.${t[4]}`)),
                  (i.endTime =
                    60 * Number(t[6] || 0) * 60 +
                    60 * Number(t[7]) +
                    Number(t[8]) +
                    Number(`0.${t[9]}`)));
              }
            }),
              i.text && t.push(i);
          }),
          t
        );
      },
      et = (e, t) => {
        const i = {};
        return (
          e > t.width / t.height
            ? ((i.width = t.width), (i.height = (1 / e) * t.width))
            : ((i.height = t.height), (i.width = e * t.height)),
          i
        );
      };
    class tt {
      constructor(t) {
        e(this, "load", () => {
          this.player.elements.display.seekTooltip &&
            (this.player.elements.display.seekTooltip.hidden = this.enabled),
            this.enabled &&
              this.getThumbnails().then(() => {
                this.enabled &&
                  (this.render(),
                  this.determineContainerAutoSizing(),
                  this.listeners(),
                  (this.loaded = !0));
              });
        }),
          e(
            this,
            "getThumbnails",
            () =>
              new Promise((e) => {
                const { src: t } = this.player.config.previewThumbnails;
                if (S.empty(t))
                  throw new Error(
                    "Missing previewThumbnails.src config attribute"
                  );
                const i = () => {
                  this.thumbnails.sort((e, t) => e.height - t.height),
                    this.player.debug.log(
                      "Preview thumbnails",
                      this.thumbnails
                    ),
                    e();
                };
                if (S.function(t))
                  t((e) => {
                    (this.thumbnails = e), i();
                  });
                else {
                  const e = (S.string(t) ? [t] : t).map((e) =>
                    this.getThumbnail(e)
                  );
                  Promise.all(e).then(i);
                }
              })
          ),
          e(
            this,
            "getThumbnail",
            (e) =>
              new Promise((t) => {
                Te(e).then((i) => {
                  const s = { frames: Ze(i), height: null, urlPrefix: "" };
                  s.frames[0].text.startsWith("/") ||
                    s.frames[0].text.startsWith("http://") ||
                    s.frames[0].text.startsWith("https://") ||
                    (s.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                  const n = new Image();
                  (n.onload = () => {
                    (s.height = n.naturalHeight),
                      (s.width = n.naturalWidth),
                      this.thumbnails.push(s),
                      t();
                  }),
                    (n.src = s.urlPrefix + s.frames[0].text);
                });
              })
          ),
          e(this, "startMove", (e) => {
            if (
              this.loaded &&
              S.event(e) &&
              ["touchmove", "mousemove"].includes(e.type) &&
              this.player.media.duration
            ) {
              if ("touchmove" === e.type)
                this.seekTime =
                  this.player.media.duration *
                  (this.player.elements.inputs.seek.value / 100);
              else {
                var t, i;
                const s = this.player.elements.progress.getBoundingClientRect(),
                  n = (100 / s.width) * (e.pageX - s.left);
                (this.seekTime = this.player.media.duration * (n / 100)),
                  this.seekTime < 0 && (this.seekTime = 0),
                  this.seekTime > this.player.media.duration - 1 &&
                    (this.seekTime = this.player.media.duration - 1),
                  (this.mousePosX = e.pageX),
                  (this.elements.thumb.time.innerText = Ee(this.seekTime));
                const a =
                  null === (t = this.player.config.markers) ||
                  void 0 === t ||
                  null === (i = t.points) ||
                  void 0 === i
                    ? void 0
                    : i.find(({ time: e }) => e === Math.round(this.seekTime));
                a &&
                  this.elements.thumb.time.insertAdjacentHTML(
                    "afterbegin",
                    `${a.label}<br>`
                  );
              }
              this.showImageAtCurrentTime();
            }
          }),
          e(this, "endMove", () => {
            this.toggleThumbContainer(!1, !0);
          }),
          e(this, "startScrubbing", (e) => {
            (S.nullOrUndefined(e.button) ||
              !1 === e.button ||
              0 === e.button) &&
              ((this.mouseDown = !0),
              this.player.media.duration &&
                (this.toggleScrubbingContainer(!0),
                this.toggleThumbContainer(!1, !0),
                this.showImageAtCurrentTime()));
          }),
          e(this, "endScrubbing", () => {
            (this.mouseDown = !1),
              Math.ceil(this.lastTime) ===
              Math.ceil(this.player.media.currentTime)
                ? this.toggleScrubbingContainer(!1)
                : G.call(this.player, this.player.media, "timeupdate", () => {
                    this.mouseDown || this.toggleScrubbingContainer(!1);
                  });
          }),
          e(this, "listeners", () => {
            this.player.on("play", () => {
              this.toggleThumbContainer(!1, !0);
            }),
              this.player.on("seeked", () => {
                this.toggleThumbContainer(!1);
              }),
              this.player.on("timeupdate", () => {
                this.lastTime = this.player.media.currentTime;
              });
          }),
          e(this, "render", () => {
            (this.elements.thumb.container = $("div", {
              class:
                this.player.config.classNames.previewThumbnails.thumbContainer,
            })),
              (this.elements.thumb.imageContainer = $("div", {
                class:
                  this.player.config.classNames.previewThumbnails
                    .imageContainer,
              })),
              this.elements.thumb.container.appendChild(
                this.elements.thumb.imageContainer
              );
            const e = $("div", {
              class:
                this.player.config.classNames.previewThumbnails.timeContainer,
            });
            (this.elements.thumb.time = $("span", {}, "00:00")),
              e.appendChild(this.elements.thumb.time),
              this.elements.thumb.imageContainer.appendChild(e),
              S.element(this.player.elements.progress) &&
                this.player.elements.progress.appendChild(
                  this.elements.thumb.container
                ),
              (this.elements.scrubbing.container = $("div", {
                class:
                  this.player.config.classNames.previewThumbnails
                    .scrubbingContainer,
              })),
              this.player.elements.wrapper.appendChild(
                this.elements.scrubbing.container
              );
          }),
          e(this, "destroy", () => {
            this.elements.thumb.container &&
              this.elements.thumb.container.remove(),
              this.elements.scrubbing.container &&
                this.elements.scrubbing.container.remove();
          }),
          e(this, "showImageAtCurrentTime", () => {
            this.mouseDown
              ? this.setScrubbingContainerSize()
              : this.setThumbContainerSizeAndPos();
            const e = this.thumbnails[0].frames.findIndex(
                (e) =>
                  this.seekTime >= e.startTime && this.seekTime <= e.endTime
              ),
              t = e >= 0;
            let i = 0;
            this.mouseDown || this.toggleThumbContainer(t),
              t &&
                (this.thumbnails.forEach((t, s) => {
                  this.loadedImages.includes(t.frames[e].text) && (i = s);
                }),
                e !== this.showingThumb &&
                  ((this.showingThumb = e), this.loadImage(i)));
          }),
          e(this, "loadImage", (e = 0) => {
            const t = this.showingThumb,
              i = this.thumbnails[e],
              { urlPrefix: s } = i,
              n = i.frames[t],
              a = i.frames[t].text,
              l = s + a;
            if (
              this.currentImageElement &&
              this.currentImageElement.dataset.filename === a
            )
              this.showImage(this.currentImageElement, n, e, t, a, !1),
                (this.currentImageElement.dataset.index = t),
                this.removeOldImages(this.currentImageElement);
            else {
              this.loadingImage &&
                this.usingSprites &&
                (this.loadingImage.onload = null);
              const i = new Image();
              (i.src = l),
                (i.dataset.index = t),
                (i.dataset.filename = a),
                (this.showingThumbFilename = a),
                this.player.debug.log(`Loading image: ${l}`),
                (i.onload = () => this.showImage(i, n, e, t, a, !0)),
                (this.loadingImage = i),
                this.removeOldImages(i);
            }
          }),
          e(this, "showImage", (e, t, i, s, n, a = !0) => {
            this.player.debug.log(
              `Showing thumb: ${n}. num: ${s}. qual: ${i}. newimg: ${a}`
            ),
              this.setImageSizeAndOffset(e, t),
              a &&
                (this.currentImageContainer.appendChild(e),
                (this.currentImageElement = e),
                this.loadedImages.includes(n) || this.loadedImages.push(n)),
              this.preloadNearby(s, !0)
                .then(this.preloadNearby(s, !1))
                .then(this.getHigherQuality(i, e, t, n));
          }),
          e(this, "removeOldImages", (e) => {
            Array.from(this.currentImageContainer.children).forEach((t) => {
              if ("img" !== t.tagName.toLowerCase()) return;
              const i = this.usingSprites ? 500 : 1e3;
              if (t.dataset.index !== e.dataset.index && !t.dataset.deleting) {
                t.dataset.deleting = !0;
                const { currentImageContainer: e } = this;
                setTimeout(() => {
                  e.removeChild(t),
                    this.player.debug.log(
                      `Removing thumb: ${t.dataset.filename}`
                    );
                }, i);
              }
            });
          }),
          e(
            this,
            "preloadNearby",
            (e, t = !0) =>
              new Promise((i) => {
                setTimeout(() => {
                  const s = this.thumbnails[0].frames[e].text;
                  if (this.showingThumbFilename === s) {
                    let n;
                    n = t
                      ? this.thumbnails[0].frames.slice(e)
                      : this.thumbnails[0].frames.slice(0, e).reverse();
                    let a = !1;
                    n.forEach((e) => {
                      const t = e.text;
                      if (t !== s && !this.loadedImages.includes(t)) {
                        (a = !0),
                          this.player.debug.log(
                            `Preloading thumb filename: ${t}`
                          );
                        const { urlPrefix: e } = this.thumbnails[0],
                          s = e + t,
                          n = new Image();
                        (n.src = s),
                          (n.onload = () => {
                            this.player.debug.log(
                              `Preloaded thumb filename: ${t}`
                            ),
                              this.loadedImages.includes(t) ||
                                this.loadedImages.push(t),
                              i();
                          });
                      }
                    }),
                      a || i();
                  }
                }, 300);
              })
          ),
          e(this, "getHigherQuality", (e, t, i, s) => {
            if (e < this.thumbnails.length - 1) {
              let n = t.naturalHeight;
              this.usingSprites && (n = i.h),
                n < this.thumbContainerHeight &&
                  setTimeout(() => {
                    this.showingThumbFilename === s &&
                      (this.player.debug.log(
                        `Showing higher quality thumb for: ${s}`
                      ),
                      this.loadImage(e + 1));
                  }, 300);
            }
          }),
          e(this, "toggleThumbContainer", (e = !1, t = !1) => {
            const i =
              this.player.config.classNames.previewThumbnails
                .thumbContainerShown;
            this.elements.thumb.container.classList.toggle(i, e),
              !e &&
                t &&
                ((this.showingThumb = null),
                (this.showingThumbFilename = null));
          }),
          e(this, "toggleScrubbingContainer", (e = !1) => {
            const t =
              this.player.config.classNames.previewThumbnails
                .scrubbingContainerShown;
            this.elements.scrubbing.container.classList.toggle(t, e),
              e ||
                ((this.showingThumb = null),
                (this.showingThumbFilename = null));
          }),
          e(this, "determineContainerAutoSizing", () => {
            (this.elements.thumb.imageContainer.clientHeight > 20 ||
              this.elements.thumb.imageContainer.clientWidth > 20) &&
              (this.sizeSpecifiedInCSS = !0);
          }),
          e(this, "setThumbContainerSizeAndPos", () => {
            const { imageContainer: e } = this.elements.thumb;
            if (this.sizeSpecifiedInCSS) {
              if (e.clientHeight > 20 && e.clientWidth < 20) {
                const t = Math.floor(e.clientHeight * this.thumbAspectRatio);
                e.style.width = `${t}px`;
              } else if (e.clientHeight < 20 && e.clientWidth > 20) {
                const t = Math.floor(e.clientWidth / this.thumbAspectRatio);
                e.style.height = `${t}px`;
              }
            } else {
              const t = Math.floor(
                this.thumbContainerHeight * this.thumbAspectRatio
              );
              (e.style.height = `${this.thumbContainerHeight}px`),
                (e.style.width = `${t}px`);
            }
            this.setThumbContainerPos();
          }),
          e(this, "setThumbContainerPos", () => {
            const e = this.player.elements.progress.getBoundingClientRect(),
              t = this.player.elements.container.getBoundingClientRect(),
              { container: i } = this.elements.thumb,
              s = t.left - e.left + 10,
              n = t.right - e.left - i.clientWidth - 10,
              a = this.mousePosX - e.left - i.clientWidth / 2,
              l = Ge(a, s, n);
            (i.style.left = `${l}px`),
              i.style.setProperty("--preview-arrow-offset", a - l + "px");
          }),
          e(this, "setScrubbingContainerSize", () => {
            const { width: e, height: t } = et(this.thumbAspectRatio, {
              width: this.player.media.clientWidth,
              height: this.player.media.clientHeight,
            });
            (this.elements.scrubbing.container.style.width = `${e}px`),
              (this.elements.scrubbing.container.style.height = `${t}px`);
          }),
          e(this, "setImageSizeAndOffset", (e, t) => {
            if (!this.usingSprites) return;
            const i = this.thumbContainerHeight / t.h;
            (e.style.height = e.naturalHeight * i + "px"),
              (e.style.width = e.naturalWidth * i + "px"),
              (e.style.left = `-${t.x * i}px`),
              (e.style.top = `-${t.y * i}px`);
          }),
          (this.player = t),
          (this.thumbnails = []),
          (this.loaded = !1),
          (this.lastMouseMoveTime = Date.now()),
          (this.mouseDown = !1),
          (this.loadedImages = []),
          (this.elements = { thumb: {}, scrubbing: {} }),
          this.load();
      }
      get enabled() {
        return (
          this.player.isHTML5 &&
          this.player.isVideo &&
          this.player.config.previewThumbnails.enabled
        );
      }
      get currentImageContainer() {
        return this.mouseDown
          ? this.elements.scrubbing.container
          : this.elements.thumb.imageContainer;
      }
      get usingSprites() {
        return Object.keys(this.thumbnails[0].frames[0]).includes("w");
      }
      get thumbAspectRatio() {
        return this.usingSprites
          ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h
          : this.thumbnails[0].width / this.thumbnails[0].height;
      }
      get thumbContainerHeight() {
        if (this.mouseDown) {
          const { height: e } = et(this.thumbAspectRatio, {
            width: this.player.media.clientWidth,
            height: this.player.media.clientHeight,
          });
          return e;
        }
        return this.sizeSpecifiedInCSS
          ? this.elements.thumb.imageContainer.clientHeight
          : Math.floor(
              this.player.media.clientWidth / this.thumbAspectRatio / 4
            );
      }
      get currentImageElement() {
        return this.mouseDown
          ? this.currentScrubbingImageElement
          : this.currentThumbnailImageElement;
      }
      set currentImageElement(e) {
        this.mouseDown
          ? (this.currentScrubbingImageElement = e)
          : (this.currentThumbnailImageElement = e);
      }
    }
    const it = {
      insertElements(e, t) {
        S.string(t)
          ? _(e, this.media, { src: t })
          : S.array(t) &&
            t.forEach((t) => {
              _(e, this.media, t);
            });
      },
      change(e) {
        N(e, "sources.length")
          ? (de.cancelRequests.call(this),
            this.destroy.call(
              this,
              () => {
                (this.options.quality = []),
                  O(this.media),
                  (this.media = null),
                  S.element(this.elements.container) &&
                    this.elements.container.removeAttribute("class");
                const { sources: t, type: i } = e,
                  [{ provider: s = _e.html5, src: n }] = t,
                  a = "html5" === s ? i : "div",
                  l = "html5" === s ? {} : { src: n };
                Object.assign(this, {
                  provider: s,
                  type: i,
                  supported: K.check(i, s, this.config.playsinline),
                  media: $(a, l),
                }),
                  this.elements.container.appendChild(this.media),
                  S.boolean(e.autoplay) && (this.config.autoplay = e.autoplay),
                  this.isHTML5 &&
                    (this.config.crossorigin &&
                      this.media.setAttribute("crossorigin", ""),
                    this.config.autoplay &&
                      this.media.setAttribute("autoplay", ""),
                    S.empty(e.poster) || (this.poster = e.poster),
                    this.config.loop.active &&
                      this.media.setAttribute("loop", ""),
                    this.config.muted && this.media.setAttribute("muted", ""),
                    this.config.playsinline &&
                      this.media.setAttribute("playsinline", "")),
                  Fe.addStyleHook.call(this),
                  this.isHTML5 && it.insertElements.call(this, "source", t),
                  (this.config.title = e.title),
                  Xe.setup.call(this),
                  this.isHTML5 &&
                    Object.keys(e).includes("tracks") &&
                    it.insertElements.call(this, "track", e.tracks),
                  (this.isHTML5 || (this.isEmbed && !this.supported.ui)) &&
                    Fe.build.call(this),
                  this.isHTML5 && this.media.load(),
                  S.empty(e.previewThumbnails) ||
                    (Object.assign(
                      this.config.previewThumbnails,
                      e.previewThumbnails
                    ),
                    this.previewThumbnails &&
                      this.previewThumbnails.loaded &&
                      (this.previewThumbnails.destroy(),
                      (this.previewThumbnails = null)),
                    this.config.previewThumbnails.enabled &&
                      (this.previewThumbnails = new tt(this))),
                  this.fullscreen.update();
              },
              !0
            ))
          : this.debug.warn("Invalid source format");
      },
    };
    class st {
      constructor(t, i) {
        if (
          (e(this, "play", () =>
            S.function(this.media.play)
              ? (this.ads &&
                  this.ads.enabled &&
                  this.ads.managerPromise
                    .then(() => this.ads.play())
                    .catch(() => ie(this.media.play())),
                this.media.play())
              : null
          ),
          e(this, "pause", () =>
            this.playing && S.function(this.media.pause)
              ? this.media.pause()
              : null
          ),
          e(this, "togglePlay", (e) =>
            (S.boolean(e) ? e : !this.playing) ? this.play() : this.pause()
          ),
          e(this, "stop", () => {
            this.isHTML5
              ? (this.pause(), this.restart())
              : S.function(this.media.stop) && this.media.stop();
          }),
          e(this, "restart", () => {
            this.currentTime = 0;
          }),
          e(this, "rewind", (e) => {
            this.currentTime -= S.number(e) ? e : this.config.seekTime;
          }),
          e(this, "forward", (e) => {
            this.currentTime += S.number(e) ? e : this.config.seekTime;
          }),
          e(this, "increaseVolume", (e) => {
            const t = this.media.muted ? 0 : this.volume;
            this.volume = t + (S.number(e) ? e : 0);
          }),
          e(this, "decreaseVolume", (e) => {
            this.increaseVolume(-e);
          }),
          e(this, "airplay", () => {
            K.airplay && this.media.webkitShowPlaybackTargetPicker();
          }),
          e(this, "toggleControls", (e) => {
            if (this.supported.ui && !this.isAudio) {
              const t = F(
                  this.elements.container,
                  this.config.classNames.hideControls
                ),
                i = void 0 === e ? void 0 : !e,
                s = R(
                  this.elements.container,
                  this.config.classNames.hideControls,
                  i
                );
              if (
                (s &&
                  S.array(this.config.controls) &&
                  this.config.controls.includes("settings") &&
                  !S.empty(this.config.settings) &&
                  Pe.toggleMenu.call(this, !1),
                s !== t)
              ) {
                const e = s ? "controlshidden" : "controlsshown";
                Z.call(this, this.media, e);
              }
              return !s;
            }
            return !1;
          }),
          e(this, "on", (e, t) => {
            X.call(this, this.elements.container, e, t);
          }),
          e(this, "once", (e, t) => {
            G.call(this, this.elements.container, e, t);
          }),
          e(this, "off", (e, t) => {
            J(this.elements.container, e, t);
          }),
          e(this, "destroy", (e, t = !1) => {
            if (!this.ready) return;
            const i = () => {
              (document.body.style.overflow = ""),
                (this.embed = null),
                t
                  ? (Object.keys(this.elements).length &&
                      (O(this.elements.buttons.play),
                      O(this.elements.captions),
                      O(this.elements.controls),
                      O(this.elements.wrapper),
                      (this.elements.buttons.play = null),
                      (this.elements.captions = null),
                      (this.elements.controls = null),
                      (this.elements.wrapper = null)),
                    S.function(e) && e())
                  : (ee.call(this),
                    de.cancelRequests.call(this),
                    q(this.elements.original, this.elements.container),
                    Z.call(this, this.elements.original, "destroyed", !0),
                    S.function(e) && e.call(this.elements.original),
                    (this.ready = !1),
                    setTimeout(() => {
                      (this.elements = null), (this.media = null);
                    }, 200));
            };
            this.stop(),
              clearTimeout(this.timers.loading),
              clearTimeout(this.timers.controls),
              clearTimeout(this.timers.resized),
              this.isHTML5
                ? (Fe.toggleNativeControls.call(this, !0), i())
                : this.isYouTube
                ? (clearInterval(this.timers.buffering),
                  clearInterval(this.timers.playing),
                  null !== this.embed &&
                    S.function(this.embed.destroy) &&
                    this.embed.destroy(),
                  i())
                : this.isVimeo &&
                  (null !== this.embed && this.embed.unload().then(i),
                  setTimeout(i, 200));
          }),
          e(this, "supports", (e) => K.mime.call(this, e)),
          (this.timers = {}),
          (this.ready = !1),
          (this.loading = !1),
          (this.failed = !1),
          (this.touch = K.touch),
          (this.media = t),
          S.string(this.media) &&
            (this.media = document.querySelectorAll(this.media)),
          ((window.jQuery && this.media instanceof jQuery) ||
            S.nodeList(this.media) ||
            S.array(this.media)) &&
            (this.media = this.media[0]),
          (this.config = x(
            {},
            Le,
            st.defaults,
            i || {},
            (() => {
              try {
                return JSON.parse(this.media.getAttribute("data-plyr-config"));
              } catch (e) {
                return {};
              }
            })()
          )),
          (this.elements = {
            container: null,
            fullscreen: null,
            captions: null,
            buttons: {},
            display: {},
            progress: {},
            inputs: {},
            settings: { popup: null, menu: null, panels: {}, buttons: {} },
          }),
          (this.captions = {
            active: null,
            currentTrack: -1,
            meta: new WeakMap(),
          }),
          (this.fullscreen = { active: !1 }),
          (this.options = { speed: [], quality: [] }),
          (this.debug = new De(this.config.debug)),
          this.debug.log("Config", this.config),
          this.debug.log("Support", K),
          S.nullOrUndefined(this.media) || !S.element(this.media))
        )
          return void this.debug.error(
            "Setup failed: no suitable element passed"
          );
        if (this.media.plyr)
          return void this.debug.warn("Target already setup");
        if (!this.config.enabled)
          return void this.debug.error("Setup failed: disabled by config");
        if (!K.check().api)
          return void this.debug.error("Setup failed: no support");
        const s = this.media.cloneNode(!0);
        (s.autoplay = !1), (this.elements.original = s);
        const n = this.media.tagName.toLowerCase();
        let a = null,
          l = null;
        switch (n) {
          case "div":
            if (((a = this.media.querySelector("iframe")), S.element(a))) {
              if (
                ((l = Me(a.getAttribute("src"))),
                (this.provider = (function (e) {
                  return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
                    e
                  )
                    ? _e.youtube
                    : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(
                        e
                      )
                    ? _e.vimeo
                    : null;
                })(l.toString())),
                (this.elements.container = this.media),
                (this.media = a),
                (this.elements.container.className = ""),
                l.search.length)
              ) {
                const e = ["1", "true"];
                e.includes(l.searchParams.get("autoplay")) &&
                  (this.config.autoplay = !0),
                  e.includes(l.searchParams.get("loop")) &&
                    (this.config.loop.active = !0),
                  this.isYouTube
                    ? ((this.config.playsinline = e.includes(
                        l.searchParams.get("playsinline")
                      )),
                      (this.config.youtube.hl = l.searchParams.get("hl")))
                    : (this.config.playsinline = !0);
              }
            } else (this.provider = this.media.getAttribute(this.config.attributes.embed.provider)), this.media.removeAttribute(this.config.attributes.embed.provider);
            if (
              S.empty(this.provider) ||
              !Object.values(_e).includes(this.provider)
            )
              return void this.debug.error("Setup failed: Invalid provider");
            this.type = je;
            break;
          case "video":
          case "audio":
            (this.type = n),
              (this.provider = _e.html5),
              this.media.hasAttribute("crossorigin") &&
                (this.config.crossorigin = !0),
              this.media.hasAttribute("autoplay") &&
                (this.config.autoplay = !0),
              (this.media.hasAttribute("playsinline") ||
                this.media.hasAttribute("webkit-playsinline")) &&
                (this.config.playsinline = !0),
              this.media.hasAttribute("muted") && (this.config.muted = !0),
              this.media.hasAttribute("loop") && (this.config.loop.active = !0);
            break;
          default:
            return void this.debug.error("Setup failed: unsupported type");
        }
        (this.supported = K.check(this.type, this.provider)),
          this.supported.api
            ? ((this.eventListeners = []),
              (this.listeners = new Ve(this)),
              (this.storage = new we(this)),
              (this.media.plyr = this),
              S.element(this.elements.container) ||
                ((this.elements.container = $("div")),
                L(this.media, this.elements.container)),
              Fe.migrateStyles.call(this),
              Fe.addStyleHook.call(this),
              Xe.setup.call(this),
              this.config.debug &&
                X.call(
                  this,
                  this.elements.container,
                  this.config.events.join(" "),
                  (e) => {
                    this.debug.log(`event: ${e.type}`);
                  }
                ),
              (this.fullscreen = new He(this)),
              (this.isHTML5 || (this.isEmbed && !this.supported.ui)) &&
                Fe.build.call(this),
              this.listeners.container(),
              this.listeners.global(),
              this.config.ads.enabled && (this.ads = new Je(this)),
              this.isHTML5 &&
                this.config.autoplay &&
                this.once("canplay", () => ie(this.play())),
              (this.lastSeekTime = 0),
              this.config.previewThumbnails.enabled &&
                (this.previewThumbnails = new tt(this)))
            : this.debug.error("Setup failed: no support");
      }
      get isHTML5() {
        return this.provider === _e.html5;
      }
      get isEmbed() {
        return this.isYouTube || this.isVimeo;
      }
      get isYouTube() {
        return this.provider === _e.youtube;
      }
      get isVimeo() {
        return this.provider === _e.vimeo;
      }
      get isVideo() {
        return this.type === je;
      }
      get isAudio() {
        return this.type === Oe;
      }
      get playing() {
        return Boolean(this.ready && !this.paused && !this.ended);
      }
      get paused() {
        return Boolean(this.media.paused);
      }
      get stopped() {
        return Boolean(this.paused && 0 === this.currentTime);
      }
      get ended() {
        return Boolean(this.media.ended);
      }
      set currentTime(e) {
        if (!this.duration) return;
        const t = S.number(e) && e > 0;
        (this.media.currentTime = t ? Math.min(e, this.duration) : 0),
          this.debug.log(`Seeking to ${this.currentTime} seconds`);
      }
      get currentTime() {
        return Number(this.media.currentTime);
      }
      get buffered() {
        const { buffered: e } = this.media;
        return S.number(e)
          ? e
          : e && e.length && this.duration > 0
          ? e.end(0) / this.duration
          : 0;
      }
      get seeking() {
        return Boolean(this.media.seeking);
      }
      get duration() {
        const e = parseFloat(this.config.duration),
          t = (this.media || {}).duration,
          i = S.number(t) && t !== 1 / 0 ? t : 0;
        return e || i;
      }
      set volume(e) {
        let t = e;
        S.string(t) && (t = Number(t)),
          S.number(t) || (t = this.storage.get("volume")),
          S.number(t) || ({ volume: t } = this.config),
          t > 1 && (t = 1),
          t < 0 && (t = 0),
          (this.config.volume = t),
          (this.media.volume = t),
          !S.empty(e) && this.muted && t > 0 && (this.muted = !1);
      }
      get volume() {
        return Number(this.media.volume);
      }
      set muted(e) {
        let t = e;
        S.boolean(t) || (t = this.storage.get("muted")),
          S.boolean(t) || (t = this.config.muted),
          (this.config.muted = t),
          (this.media.muted = t);
      }
      get muted() {
        return Boolean(this.media.muted);
      }
      get hasAudio() {
        return (
          !this.isHTML5 ||
          !!this.isAudio ||
          Boolean(this.media.mozHasAudio) ||
          Boolean(this.media.webkitAudioDecodedByteCount) ||
          Boolean(this.media.audioTracks && this.media.audioTracks.length)
        );
      }
      set speed(e) {
        let t = null;
        S.number(e) && (t = e),
          S.number(t) || (t = this.storage.get("speed")),
          S.number(t) || (t = this.config.speed.selected);
        const { minimumSpeed: i, maximumSpeed: s } = this;
        (t = Ge(t, i, s)),
          (this.config.speed.selected = t),
          setTimeout(() => {
            this.media && (this.media.playbackRate = t);
          }, 0);
      }
      get speed() {
        return Number(this.media.playbackRate);
      }
      get minimumSpeed() {
        return this.isYouTube
          ? Math.min(...this.options.speed)
          : this.isVimeo
          ? 0.5
          : 0.0625;
      }
      get maximumSpeed() {
        return this.isYouTube
          ? Math.max(...this.options.speed)
          : this.isVimeo
          ? 2
          : 16;
      }
      set quality(e) {
        const t = this.config.quality,
          i = this.options.quality;
        if (!i.length) return;
        let s = [
            !S.empty(e) && Number(e),
            this.storage.get("quality"),
            t.selected,
            t.default,
          ].find(S.number),
          n = !0;
        if (!i.includes(s)) {
          const e = ne(i, s);
          this.debug.warn(
            `Unsupported quality option: ${s}, using ${e} instead`
          ),
            (s = e),
            (n = !1);
        }
        (t.selected = s),
          (this.media.quality = s),
          n && this.storage.set({ quality: s });
      }
      get quality() {
        return this.media.quality;
      }
      set loop(e) {
        const t = S.boolean(e) ? e : this.config.loop.active;
        (this.config.loop.active = t), (this.media.loop = t);
      }
      get loop() {
        return Boolean(this.media.loop);
      }
      set source(e) {
        it.change.call(this, e);
      }
      get source() {
        return this.media.currentSrc;
      }
      get download() {
        const { download: e } = this.config.urls;
        return S.url(e) ? e : this.source;
      }
      set download(e) {
        S.url(e) &&
          ((this.config.urls.download = e), Pe.setDownloadUrl.call(this));
      }
      set poster(e) {
        this.isVideo
          ? Fe.setPoster.call(this, e, !1).catch(() => {})
          : this.debug.warn("Poster can only be set for video");
      }
      get poster() {
        return this.isVideo
          ? this.media.getAttribute("poster") ||
              this.media.getAttribute("data-poster")
          : null;
      }
      get ratio() {
        if (!this.isVideo) return null;
        const e = oe(ce.call(this));
        return S.array(e) ? e.join(":") : e;
      }
      set ratio(e) {
        this.isVideo
          ? S.string(e) && re(e)
            ? ((this.config.ratio = oe(e)), ue.call(this))
            : this.debug.error(`Invalid aspect ratio specified (${e})`)
          : this.debug.warn("Aspect ratio can only be set for video");
      }
      set autoplay(e) {
        this.config.autoplay = S.boolean(e) ? e : this.config.autoplay;
      }
      get autoplay() {
        return Boolean(this.config.autoplay);
      }
      toggleCaptions(e) {
        xe.toggle.call(this, e, !1);
      }
      set currentTrack(e) {
        xe.set.call(this, e, !1), xe.setup.call(this);
      }
      get currentTrack() {
        const { toggled: e, currentTrack: t } = this.captions;
        return e ? t : -1;
      }
      set language(e) {
        xe.setLanguage.call(this, e, !1);
      }
      get language() {
        return (xe.getCurrentTrack.call(this) || {}).language;
      }
      set pip(e) {
        if (!K.pip) return;
        const t = S.boolean(e) ? e : !this.pip;
        S.function(this.media.webkitSetPresentationMode) &&
          this.media.webkitSetPresentationMode(t ? Ie : $e),
          S.function(this.media.requestPictureInPicture) &&
            (!this.pip && t
              ? this.media.requestPictureInPicture()
              : this.pip && !t && document.exitPictureInPicture());
      }
      get pip() {
        return K.pip
          ? S.empty(this.media.webkitPresentationMode)
            ? this.media === document.pictureInPictureElement
            : this.media.webkitPresentationMode === Ie
          : null;
      }
      setPreviewThumbnails(e) {
        this.previewThumbnails &&
          this.previewThumbnails.loaded &&
          (this.previewThumbnails.destroy(), (this.previewThumbnails = null)),
          Object.assign(this.config.previewThumbnails, e),
          this.config.previewThumbnails.enabled &&
            (this.previewThumbnails = new tt(this));
      }
      static supported(e, t) {
        return K.check(e, t);
      }
      static loadSprite(e, t) {
        return ke(e, t);
      }
      static setup(e, t = {}) {
        let i = null;
        return (
          S.string(e)
            ? (i = Array.from(document.querySelectorAll(e)))
            : S.nodeList(e)
            ? (i = Array.from(e))
            : S.array(e) && (i = e.filter(S.element)),
          S.empty(i) ? null : i.map((e) => new st(e, t))
        );
      }
    }
    var nt;
    return (st.defaults = ((nt = Le), JSON.parse(JSON.stringify(nt)))), st;
  });
let pageWidth;
let pageWidthAfterScrollRemov;

function removePageScroll() {
  document.body.style.overflow = "hidden";
  pageWidthAfterScrollRemov = document.body.clientWidth;

  if (pageWidthAfterScrollRemov > pageWidth) {
    document.body.style.paddingRight =
      pageWidthAfterScrollRemov - pageWidth + "px";
  } else {
    document.body.style.paddingRight = "";
  }
}

function hamburger() {
  const hamburger = document.querySelector(".hamburger");
  const headerWrapper = document.querySelector(".header");
  const header = document.querySelector(".header-menu");

  if (hamburger) {
    const menuLinks = header.querySelectorAll(".header-menu__link");

    hamburger.addEventListener("click", () => {
      if (!hamburger.classList.contains("open")) {
        hamburger.classList.add("open");
        header.classList.add("open");
        headerWrapper.classList.add("menu-opened");
        removePageScroll();
      } else {
        hamburger.classList.remove("open");
        header.classList.remove("open");
        headerWrapper.classList.remove("menu-opened");
        document.body.style.overflow = "";
      }
    });

    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        header.classList.remove("open");
        headerWrapper.classList.remove("menu-opened");
        document.body.style.overflow = "";
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        hamburger.classList.remove("active");
        header.classList.remove("active");
        headerWrapper.classList.remove("menu-opened");
        document.body.style.overflow = "";
      }
    });
  }
}

function modal() {
  let desktopMedia = window.matchMedia("(max-width: 1024px)");
  const modalTriggers = document.querySelectorAll("[data-trigger-modal]");
  const modals = document.querySelectorAll("[data-modal]");

  modalTriggers.forEach((trigger) => {
    const modalId = trigger.dataset.triggerModal;
    const modal = document.querySelector(`[data-modal="${modalId}"]`);

    trigger.addEventListener("click", () => {
      removePageScroll();
      modals.forEach((modal) => modal.classList.remove("open"));
      modal.classList.add("open");

      const slider = modal.querySelector(".modal__slider");
      const textSlider = modal.querySelector(".modal__text-slider");

      if (slider && !desktopMedia.matches) {
        const boundedHorizSlide = new Swiper(textSlider, {
          direction: "horizontal",
          slidesPerView: 1,
          autoplay: {
            delay: 6000,
          },
          spaceBetween: 20,
          speed: 800,
          loop: true,
          watchSlidesProgress: true,

          navigation: {
            prevEl: modal.querySelector(".modal__arrow:first-child"),
            nextEl: modal.querySelector(".modal__arrow:last-child"),
          },
          pagination: {
            el: modal.querySelector(".modal__side .swiper-pagination"),
            type: "bullets",
            clickable: true,
            modifierClass: "components__pagination",
          },
        });

        const horizSlide = new Swiper(slider, {
          direction: "horizontal",
          slidesPerView: 1,
          autoplay: {
            delay: 6000,
          },
          speed: 800,
          loop: true,
          watchSlidesProgress: true,
          navigation: {
            prevEl: modal.querySelector(".modal__arrow:first-child"),
            nextEl: modal.querySelector(".modal__arrow:last-child"),
          },
          thumbs: {
            swiper: boundedHorizSlide,
          },
          pagination: {
            el: modal.querySelector(".modal__side .swiper-pagination"),
            type: "bullets",
            clickable: true,
            modifierClass: "components__pagination",
          },
        });

        horizSlide.autoplay.pause();
        boundedHorizSlide.autoplay.pause();

        const count = modal.querySelector(".modal__count");
        count.textContent = boundedHorizSlide.realIndex + 1;

        boundedHorizSlide.on("slideChange", () => {
          count.textContent = boundedHorizSlide.realIndex + 1;
        });
      } else if (desktopMedia.matches) {
        const newSlider = modal.querySelector(".modal__mob-slider .swiper");

        const horizSlide = new Swiper(newSlider, {
          direction: "horizontal",
          slidesPerView: 1,
          autoplay: {
            delay: 6000,
          },
          speed: 800,
          loop: true,
          navigation: {
            prevEl: modal.querySelector(".modal__arrow:first-child"),
            nextEl: modal.querySelector(".modal__arrow:last-child"),
          },
          pagination: {
            el: modal.querySelector(".modal__mob-slider .swiper-pagination"),
            type: "bullets",
            clickable: true,
            modifierClass: "components__pagination",
          },
        });

        const count = modal.querySelector(".modal__count");
        count.textContent = horizSlide.realIndex + 1;

        horizSlide.on("slideChange", () => {
          count.textContent = horizSlide.realIndex + 1;
        });
      }
    });
  });

  modals.forEach((modal) => {
    const cancel = modal.querySelector("[data-modal-cancel]");

    if (cancel) {
      cancel.addEventListener("click", () => {
        modals.forEach((modal) => modal.classList.remove("open"));
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      });
    }
  });

  document.addEventListener(
    "click",
    (e) => {
      if (!e.target.closest("[data-modal-window]")) {
        modals.forEach((item) => {
          item.classList.remove("open");
          document.body.style.overflow = "";
          document.body.style.paddingRight = "";
        });
      }
    },
    {
      capture: true,
    }
  );

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modals.forEach((item) => {
        item.classList.remove("open");
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      });
    }
  });
}

function menuSlider() {
  const linksItems = document.querySelectorAll(".header-menu__link");

  const menuSlide = new Swiper(".header-menu__slider", {
    direction: "vertical",
    slidesPerView: 1,
    effect: "creative",
    speed: 800,
    allowTouchMove: false,
    loop: true,
    creativeEffect: {
      prev: {
        shadow: false,
        translate: [0, "0%", -1],
      },
      next: {
        shadow: false,
        translate: [0, "-100%", 1],
      },
    },
  });

  linksItems.forEach((linkItem, i) => {
    linkItem.addEventListener("mousemove", () => {
      if (menuSlide.realIndex != i) {
        menuSlide.slideTo(i);
      }
    });
  });
}

function partialSlider() {
  let desktopMedia = window.matchMedia("(max-width: 1024px)");

  if (!desktopMedia.matches) {
    const partialSlide = new Swiper(".partial-section__slider.vertical", {
      direction: "vertical",
      slidesPerView: 1,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      speed: 800,
      watchSlidesProgress: true,
      loop: true,
      navigation: {
        prevEl: ".partial-section--afisha .partial-section__arrow:first-child",
        nextEl: ".partial-section--afisha .partial-section__arrow:last-child",
      },
      pagination: {
        el: ".partial-section__placeholder--1 .swiper-pagination",
        type: "bullets",
        clickable: true,
        modifierClass: "components__pagination",
      },
    });

    const sliderWrapper = document.querySelector(
      ".partial-section__text-slider"
    );

    if (!desktopMedia.matches) {
      const size = document.querySelector(
        ".partial-section--afisha .partial-section__side-bottom"
      );

      sliderWrapper.style.height = size.clientHeight + "px";
    } else {
      sliderWrapper.style.height = sliderWrapper.clientHeight + "px";
    }

    const boundedSlider = new Swiper(".partial-section__text-slider .swiper", {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 800,
      loop: true,
      watchSlidesProgress: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      thumbs: {
        swiper: partialSlide,
      },
      navigation: {
        prevEl: ".partial-section--afisha .partial-section__arrow:first-child",
        nextEl: ".partial-section--afisha .partial-section__arrow:last-child",
      },
      pagination: {
        el: ".partial-section__placeholder--1 .swiper-pagination",
        type: "bullets",
        clickable: true,
        modifierClass: "components__pagination",
      },
    });
    var indexB = 0;

    partialSlide.on("transitionStart", function (swiper, speed, internal) {
      if (indexB != partialSlide.realIndex) {
        boundedSlider.slideTo(partialSlide.realIndex);
      }
      indexB = partialSlide.realIndex;
    });

    /*var trans = false;
		partialSlide.on('transitionStart', function() {
			if(!trans){
				boundedSlider.slideTo(partialSlide.realIndex);
				trans= true;
			}
		});
		partialSlide.on('transitionEnd', function() {
			boundedSlider.slideTo(partialSlide.realIndex);
			trans= false;
		});
		boundedSlider.on('transitionStart', function() {
			if(!trans){
				partialSlide.slideTo(boundedSlider.realIndex);
				trans= true;
			}
		});
		boundedSlider.on('transitionEnd', function() {
			partialSlide.slideTo(boundedSlider.realIndex);
			trans= false;
		});*/
    /*
        partialSlide.autoplay.pause();
       boundedSlider.autoplay.pause();*/
  } else {
    const boundedSlider = new Swiper(
      ".partial-section__placeholder-mob-slider .swiper",
      {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 800,
        loop: true,
        watchSlidesProgress: true,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
        navigation: {
          prevEl:
            ".partial-section--afisha .partial-section__arrow:first-child",
          nextEl: ".partial-section--afisha .partial-section__arrow:last-child",
        },
        pagination: {
          el: ".partial-section__placeholder-mob-slider .swiper-pagination",
          type: "bullets",
          clickable: true,
          modifierClass: "components__pagination",
        },
      }
    );
  }
}

function tickerSlider() {
  const tickerSlide = new Swiper(".footer__ticker-slider", {
    slidesPerView: "auto",
    autoplay: {
      delay: 0,
    },
    speed: 2500,
    loop: true,
  });

  tickerSlide.autoplay.pause();
}

function heroAnimation() {
  const wrapper = document.querySelector(".hero__container");
  const sides = document.querySelectorAll(".hero__side-img");

  sides.forEach((side, i) => {
    const pic = side.querySelector("picture");
    const img = side.querySelector("img");

    if (i == 0) {
      wrapper.dataset.initialBorderRad = getComputedStyle(pic).borderRadius;
      wrapper.dataset.initialWidth = pic.scrollWidth;
      wrapper.dataset.initialHeight = pic.scrollHeight;
    }

    img.style.width = side.scrollWidth + "px";
    img.style.height = side.scrollHeight + "px";

    side.addEventListener("mouseenter", () => {
      gsap.to(pic, {
        borderRadius: 0,
        width: side.scrollWidth + "px",
        height: side.scrollHeight + "px",
        duration: 0.45,
        ease: "ease-in",
        onStart: function () {
          sides.forEach((sd, k) => {
            if (i != k) {
              gsap.to(sd.querySelector("picture"), {
                borderRadius: wrapper.dataset.initialBorderRad,
                width: wrapper.dataset.initialWidth,
                height: wrapper.dataset.initialHeight,
                duration: 0.45,
                ease: "ease-in",
              });
            }
          });
        },
      });
    });
  });
}

function movePluses() {
  const wrappers = document.querySelectorAll(".modal-section__call-modal");

  wrappers.forEach((wrapper) => {
    let lastKnownScrollPosition = 0;
    let ticking = false;

    const btn = wrapper.querySelector(".modal-section__btn");

    btn.onmouseup = null;

    btn.style.top = "";
    btn.style.left = "";

    wrapper.addEventListener("mousedown", (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          onMouseMove(e);
          ticking = false;
        });

        ticking = true;
      }
    });

    wrapper.addEventListener("mousemove", (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          onMouseMove(e);
          ticking = false;
        });

        ticking = true;
      }
    });

    function moveAt(pageX, pageY) {
      btn.style.left = pageX + "px";
      btn.style.top = pageY + "px";
    }

    function onMouseMove(event) {
      moveAt(event.offsetX, event.offsetY);
    }
  });
}

function slider() {
  let desktopMedia = window.matchMedia("(max-width: 1024px)");
  let changing = false;
  let enableCount = 0;

  const newSlider = new Swiper(".main", {
    direction: "vertical",
    mousewheel: {
      sensitivity: 0.05,
    },
    speed: 1000,
    keyboard: {
      enabled: true,
    },
    grabCursor: false,
    allowTouchMove: false,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: false,
        translate: [0, 0, 0],
      },
      next: {
        shadow: false,
        translate: [0, "200%", 0],
      },
    },
  });
  var cango = true;
  newSlider.on("slideChange", (swiper) => {
    if (swiper.previousRealIndex >= swiper.realIndex + 5) {
      swiper.slides.forEach((item) => {
        item.classList.remove("prev");
      });

      return;
    }

    if (!cango) {
      return;
    }

    let back = false;

    if (swiper.activeIndex >= 2) {
      swiper.slides.forEach((item) => {
        item.classList.remove("prev");
      });

      for (i = 0; i < swiper.activeIndex; i++) {
        swiper.slides[i].classList.add("prev");
      }
    }

    if (swiper.previousRealIndex > swiper.realIndex) {
      back = true;
    }

    partialAnima(
      swiper.slides[swiper.activeIndex - 1],
      back,
      swiper.slides[swiper.activeIndex]
    );
    modalAnima(
      swiper.slides[swiper.activeIndex],
      back,
      swiper.slides[swiper.activeIndex]
    );
    fullscreenAnima(swiper.slides[swiper.activeIndex], back);

    if (swiper.slides.length - 2 == swiper.activeIndex) {
      console.log("Удаления ивента");
      document.removeEventListener("wheel", showHideFooter);
      document.removeEventListener("keydown", showHideFooter);
    } else if (swiper.slides.length - 1 == swiper.activeIndex) {
      setTimeout(function () {
        console.log("Добавление ивента, последний слайд");
        document.addEventListener("wheel", showHideFooter);
        document.addEventListener("keydown", showHideFooter);
      }, 1540);
    }
  });

  const nextBtns = document.querySelectorAll(".next-slide-btn");

  nextBtns.forEach((nextBtn) => {
    nextBtn.addEventListener("click", () => {
      newSlider.slideNext();
    });
  });

  const arrowTop = document.querySelector(".footer__arrow-top");

  arrowTop.addEventListener("click", () => {
    gsap.to(document.querySelector(".main"), {
      y: 0,
      duration: 1,
      onComplete: function () {
        newSlider.slideTo(0, 100, false);
        newSlider.mousewheel.enable();
        newSlider.keyboard.enable();

        const resetSections = document.querySelectorAll(".section");
        const partials = document.querySelectorAll(".partial-section");

        resetSections.forEach((section) => {
          const items = section.querySelectorAll("[style]");

          items.forEach((item) => {
            item.style.cssText = "";
            item.setAttribute("style", "");
          });

          partials.forEach((partial) => {
            partial.style.opacity = "0";
            partial.style.visibility = "hidden";
          });
        });

        const slider = document.querySelector(".fullimage-section__slider");

        slider.classList.remove("over");

        document.removeEventListener("wheel", showHideFooter);
        document.removeEventListener("keydown", showHideFooter);
      },
    });
  });

  function showHideFooter(e) {
    if (changing == true) {
      return false;
    }

    if (e.type == "wheel") {
      if (e.deltaY >= 0) {
        changing = true;

        gsap.to(document.querySelector(".main"), {
          y: -document.documentElement.clientHeight + 200,
          duration: 1,
          onComplete: function () {
            changing = false;
            enableCount = 0;
          },
        });

        newSlider.mousewheel.disable();
        newSlider.keyboard.disable();
      } else {
        changing = true;
        document.removeEventListener("wheel", showHideFooter);
        document.removeEventListener("keydown", showHideFooter);
        //newSlider.mousewheel.enable();
        // newSlider.keyboard.enable();
        newSlider.mousewheel.disable();
        newSlider.keyboard.disable();
        gsap.to(document.querySelector(".main"), {
          y: 0,
          onComplete: function () {
            changing = false;
            enableCount += 1;
            console.log("completion");
            setTimeout(function () {
              newSlider.mousewheel.enable();
              newSlider.keyboard.enable();
            }, 1500);
            if (enableCount >= 2) {
              var keyboardEvent = document.createEvent("KeyboardEvent");
              var initMethod =
                typeof keyboardEvent.initKeyboardEvent !== "undefined"
                  ? "initKeyboardEvent"
                  : "initKeyEvent";

              keyboardEvent[initMethod](
                "keydown",
                true,
                true,
                window,
                false,
                false,
                false,
                false,
                38,
                0
              );

              newSlider.slidePrev();
            }
          },
        });

        console.log("enable");
        console.log(newSlider.mousewheel);
        console.log(newSlider.keyboard);
      }
    } else if (e.type == "keydown") {
      if (e.keyCode == 34 || e.keyCode == 40) {
        changing = true;

        gsap.to(document.querySelector(".main"), {
          y: -document.documentElement.clientHeight + 200,
          duration: 1,
          onComplete: function () {
            changing = false;
          },
        });

        newSlider.mousewheel.disable();
        newSlider.keyboard.disable();
      } else if (e.keyCode == 38 || e.keyCode == 33) {
        changing = true;

        gsap.to(document.querySelector(".main"), {
          y: 0,
          onComplete: function () {
            changing = false;
          },
        });

        console.log("enable");
        newSlider.mousewheel.enable();
        newSlider.keyboard.enable();
      }
    }
  }

  function modalAnima(section, back, backSection) {
    const modal = section.querySelector(".modal-section__window");
    const toHide = document.querySelector(
      ".partial-section--conception .partial-section__side:last-child"
    );

    if (modal) {
      const textAnimas = modal.querySelectorAll("[data-text-anima]");
      const img = modal.querySelector(".modal-section__img");

      if (!back) {
        textAnimas.forEach((text) => {
          text.style.height = text.scrollHeight + "px";
          const spans = text.querySelectorAll(".outer");
          const rows = text.querySelectorAll(".row");

          gsap.fromTo(
            text,
            {
              y: 15,
            },
            {
              y: -10,
              duration: 1,
              ease: "ease",
            }
          );

          if (rows.length == 0) {
            spans.forEach((span) => {
              let tween = gsap.fromTo(
                span,
                { height: 0 },
                { height: "auto", duration: 0.75, delay: 0.88, ease: "linear" }
              );
              tween.play();
            });
          } else {
            rows.forEach((row) => {
              const span = text.querySelector(".outer");
              row.style.height = span.scrollHeight + "px";
            });

            spans.forEach((span) => {
              let tween = gsap.fromTo(
                span,
                { height: 0 },
                { height: "auto", duration: 0.65, delay: 0.88, ease: "ease" }
              );
              tween.play();
            });
          }
        });
      }

      if (!back) {
        gsap.fromTo(
          img.querySelector("img"),
          {
            scale: 1.2,
          },
          {
            scale: 1,
            duration: 1,
            delay: 0.35,
            ease: "linear",
          }
        );
      }

      if (!back) {
        /*gsap.to(toHide, {
                    opacity: 0,
                    duration: 0.6,
                });*/
      }
    }

    if (
      back &&
      backSection.dataset.section == 2 &&
      backSection.dataset.subSection == 1
    ) {
      gsap.to(toHide, {
        opacity: 1,
        duration: 0.6,
      });
    }

    console.log(backSection);
  }

  function partialAnima(section, back, backSection) {
    let fullImage;
    let partial;
    let emergingBg;

    if (!back) {
      fullImage = section.querySelector(".section__container");
      partial = section.querySelector(".partial-section");
      emergingBg = section.querySelector(".section__emerging-bg");
    } else {
      fullImage = backSection.querySelector(".section__container");
      partial = backSection.querySelector(".partial-section");
      emergingBg = backSection.querySelector(".section__emerging-bg");
    }

    if (partial) {
      let delays = {
        flyDel: 0,
        rtxDel: 0.45,
        txtDel: 0.45,

        arrDel: 0,
        strpDl: 0,
        titDel: 0,

        lstDel: 0.35,
      };

      if (emergingBg) {
        delays.flyDel = 0.6;
        delays.rtxDel = 0.6;
        delays.txtDel = 0.6;
        delays.arrDel = 0.6;
        delays.strpDl = 0.6;
        delays.titDel = 0.6;
        delays.lstDel = 0.6;

        if (back) {
          delays.flyDel = 0;
          delays.rtxDel = 0.45;
          delays.txtDel = 0.45;
          delays.arrDel = 0;
          delays.strpDl = 0;
          delays.titDel = 0;
          delays.lstDel = 0.35;
        }
      }

      if (!back) {
        partial.style.opacity = "";
        partial.style.visibility = "";
      } else {
        gsap.to(partial, {
          opacity: 0,
          visibility: "hidden",
          duration: 0.6,
        });
      }

      const textAnimas = partial.querySelectorAll("[data-text-anima]");

      if (!back) {
        textAnimas.forEach((text) => {
          text.style.height = text.scrollHeight + "px";
          const spans = text.querySelectorAll(".outer");
          const rows = text.querySelectorAll(".row");

          gsap.fromTo(
            text,
            {
              y: 15,
            },
            {
              y: -10,
              duration: 1,
              delay: delays.flyDel,
              ease: "ease",
            }
          );

          if (rows.length == 0) {
            spans.forEach((span) => {
              let tween = gsap.fromTo(
                span,
                { height: 0 },
                {
                  height: "auto",
                  duration: 0.85,
                  delay: delays.rtxDel,
                  ease: "linear",
                }
              );
              tween.play();
            });
          } else {
            rows.forEach((row) => {
              const span = text.querySelector(".outer");
              row.style.height = span.scrollHeight + "px";
            });

            spans.forEach((span) => {
              let tween = gsap.fromTo(
                span,
                { height: 0 },
                {
                  height: "auto",
                  duration: 0.65,
                  delay: delays.txtDel,
                  ease: "ease-in",
                }
              );
              tween.play();
            });
          }
        });
      }

      const arrows = fullImage.querySelectorAll(".btn--arrow");

      if (arrows.length != 0) {
        if (!back) {
          arrows.forEach((arrow) => {
            gsap.to(arrow, {
              scale: 0,
              duration: 0.3,
              delay: 0.2,
            });
          });
        } else {
          arrows.forEach((arrow) => {
            gsap.to(arrow, {
              scale: 1,
              duration: 0.3,
              delay: delays.arrDel,
            });
          });
        }
      }

      const parArrows = partial.querySelectorAll(".btn--arrow");

      if (parArrows.length != 0) {
        parArrows.forEach((arrow) => {
          gsap.from(arrow, {
            scale: 0,
            duration: 0.45,
            delay: delays.arrDel,
          });
        });
      }

      const strip = fullImage.querySelector(".fullimage-section__strip");
      const palceholderStrip = partial.querySelector(
        ".partial-section__strip-place"
      );
      const sCords = strip.getBoundingClientRect().y;
      const pCords = palceholderStrip.getBoundingClientRect().y;

      if (!back) {
        let strRight = section.classList.contains("double-strip")
          ? palceholderStrip.scrollWidth + "px"
          : "0";

        gsap.to(strip, {
          ["--strBg"]: partial.classList.contains("dark")
            ? "rgba(64, 32, 32, 0.20)"
            : "rgba(220, 197, 183, 0.20)",
          ["--strWidth"]: palceholderStrip.scrollWidth + "px",
          ["--strWidthRight"]: strRight,
          y: pCords - sCords,
          duration: 0.6,
          delay: delays.strpDl,
        });
      } else {
        gsap.to(strip, {
          ["--strBg"]: "rgba(220, 197, 183, 0.20)",
          ["--strWidth"]: "50%",
          ["--strWidthRight"]: "50%",
          y: 0,
          duration: 0.6,
          delay: delays.strpDl,
        });
      }

      const title = fullImage.querySelector(".fullimage-section__title");
      const titlePlaceholder = partial.querySelector(
        ".partial-section__placeholder-title"
      );

      if (!back) {
        title.dataset.initialFz = getComputedStyle(title).fontSize.replace(
          "px",
          ""
        );
        title.dataset.initialColor = getComputedStyle(title).color;
        title.dataset.endY =
          titlePlaceholder.getBoundingClientRect().y -
          title.getBoundingClientRect().y;

        gsap.to(title, {
          y: title.dataset.endY,
          fontSize: getComputedStyle(titlePlaceholder).fontSize.replace(
            "px",
            ""
          ),
          height: getComputedStyle(titlePlaceholder).fontSize.replace("px", ""),
          duration: 0.6,
          delay: delays.titDel,
          color: partial.classList.contains("dark") ? "#402020" : "",
        });
      } else {
        gsap.to(title, {
          y: 0,
          fontSize: title.dataset.initialFz,
          duration: 0.6,
          height: title.dataset.initialHeight,
          delay: delays.titDel,
          color: title.dataset.initialColor,
        });
      }

      const listItems = document.querySelectorAll(".components__list-item");

      if (listItems.length != 0) {
        listItems.forEach((listItem) => {
          gsap.fromTo(
            listItem,
            {
              opacity: 0,
              y: 55,
            },
            {
              opacity: 1,
              y: -15,
              duration: 0.95,
              delay: delays.lstDel,
              ease: "ease",
            }
          );
        });
      }

      const firstSlider = document.querySelector(
        ".partial-section__placeholder--1"
      );

      if (firstSlider) {
        gsap.fromTo(
          firstSlider,
          {
            opacity: 0,
            y: 75,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            delay: 0.52,
            ease: "linear",
          }
        );
      }

      const modalAbs = partial.querySelector(".modal-section__window--abs");

      if (modalAbs) {
        const modalInner = modalAbs.querySelector(
          ".modal-section__window-wrapper"
        );

        if (!modalInner.getAttribute("[data-initial-height]")) {
          let mHeight = modalInner.clientHeight;
          modalInner.dataset.initialHeight = mHeight;
        }

        modalAbs.style.opacity = 0;
        modalAbs.style.visibility = "hidden";

        gsap.fromTo(
          modalAbs,
          {
            y: modalInner.dataset.initialHeight,
          },
          {
            y: 0,
            duration: 0.8,
            delay: 1.3,
            ease: "ease",
            onStart: function () {
              modalAbs.style.opacity = "";
              modalAbs.style.visibility = "";
            },
          }
        );
      }

      const stdBtns = document.querySelectorAll(".partial-section__btn");

      if (stdBtns.length != 0) {
        stdBtns.forEach((stdBtn) => {
          gsap.fromTo(
            stdBtn,
            {
              y: 150,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              ease: "linear",
              delay: 0.95,
              duration: 0.45,
            }
          );
        });
      }
    }

    if (
      section.dataset.section == 2 &&
      section.dataset.subSection == 0 &&
      !back
    ) {
      const beforeSec = document.querySelector(
        "[data-section][data-sub-section]"
      );
      const placeholder = beforeSec.querySelector(
        ".partial-section__placeholder"
      );
      const img = beforeSec.querySelector(".fullimage-section__bg");

      img.dataset.initialWidth = img.clientWidth;
      img.dataset.initialHeight = img.clientHeight;

      gsap.to(img, {
        top: placeholder.offsetTop,
        left: placeholder.getBoundingClientRect().x,
        width: placeholder.scrollWidth,
        height: placeholder.scrollHeight,
        duration: 0.6,
      });

      gsap.fromTo(
        img.querySelector("img"),
        {
          scale: 1.1,
        },
        {
          scale: 1,
          duration: 0.6,
        }
      );
    } else if (section.dataset.section == 1 && back) {
      const beforeSec = document.querySelector(
        "[data-section][data-sub-section]"
      );
      const img = beforeSec.querySelector(".fullimage-section__bg");

      gsap.to(img, {
        top: 0,
        left: 0,
        width: img.dataset.initialWidth,
        height: img.dataset.initialHeight,
        duration: 0.6,
      });
    }

    if (
      back &&
      section.dataset.section == 2 &&
      section.dataset.subSection == 2
    ) {
      const placeholder = document.querySelector(
        "[data-section='2'] .partial-section__placeholder"
      );

      placeholder.style.visibility = "hidden";
      placeholder.style.opacity = "0";
    }

    if (
      section.dataset.section == 4 &&
      section.dataset.subSection == 0 &&
      !back
    ) {
      const firstTitle = fullImage.querySelector(".fullimage-section__title");
      const titleNew = document.querySelector(".partial-section__title-overed");
      const titlePlaceholder = partial.querySelector(
        ".partial-section__placeholder-title"
      );

      firstTitle.dataset.initialFz = getComputedStyle(
        firstTitle
      ).fontSize.replace("px", "");
      firstTitle.dataset.initialColor = getComputedStyle(firstTitle).color;
      titleNew.dataset.endFz = getComputedStyle(
        titlePlaceholder
      ).fontSize.replace("px", "");

      gsap.to(titleNew, {
        y:
          titlePlaceholder.getBoundingClientRect().y -
          titleNew.getBoundingClientRect().y,
        height: titleNew.dataset.endFz + "px",
        fontSize: titleNew.dataset.endFz,
        duration: 0.8,
        delay: 0.2,
        onStart: function () {
          titleNew.style.opacity = "0";
        },
        onComplete: function () {
          titleNew.style.opacity = "1";
          firstTitle.style.opacity = 0;
        },
      });
    } else if (
      section.dataset.section == 3 &&
      section.dataset.subSection == 1 &&
      back
    ) {
      const firstTitle = fullImage.querySelector(".fullimage-section__title");
      const titleNew = document.querySelector(".partial-section__title-overed");

      gsap.fromTo(
        firstTitle,
        {
          y: firstTitle.dataset.endY,
          fontSize: titleNew.dataset.endFz,
          onStart: function () {
            firstTitle.style.opacity = 1;
          },
        },
        {
          y: 0,
          fontSize: firstTitle.dataset.initialFz,
          duration: 0.3,
          delay: 0.3,
          onStart: function () {
            firstTitle.style.opacity = 1;
          },
          onComplete: function () {
            titleNew.style.opacity = 0;
          },
        }
      );
    }

    if (
      section.dataset.section == 6 &&
      section.dataset.subSection == 0 &&
      !back
    ) {
      const beforeWrapper = document.querySelector(
        "[data-section='6'][data-sub-section='0']"
      );
      const slider = beforeWrapper.querySelector(".fullimage-section__slider");
      const placeholder = beforeWrapper.querySelector(
        ".partial-section__placeholder--2"
      );
      slider.dataset.initialWidth = slider.clientWidth;
      slider.dataset.initialHeight = slider.clientHeight;
      const curSlider = document.querySelector(".partial-section__mob-slider");

      gsap.to(slider, {
        y: placeholder.offsetTop,
        x: placeholder.getBoundingClientRect().x,
        width: placeholder.scrollWidth,
        height: placeholder.scrollHeight - 25,
        duration: 0.8,
        ease: "linear",
        onComplete: function () {
          curSlider.style.opacity = "1";
          curSlider.style.visibility = "visible";
          curSlider.style.display = "block";

          slider.style.display = "none";

          // slider.classList.add("over");
          // console.log(slider);
          // console.dir(slider);

          // if (!slider.swiper) {
          const horizSlide = new Swiper(curSlider, {
            direction: "horizontal",
            slidesPerView: 1,
            autoplay: {
              delay: 6000,
            },
            speed: 800,
            loop: true,
            pagination: {
              el: ".partial-section__placeholder--2 .swiper-pagination",
              type: "bullets",
              clickable: true,
              modifierClass: "components__pagination",
            },
            navigation: {
              prevEl:
                ".partial-section--interior .partial-section__arrow:first-child",
              nextEl:
                ".partial-section--interior .partial-section__arrow:last-child",
            },
          });

          //     horizSlide.autoplay.pause();
          // }
        },
      });
    } else if (
      section.dataset.section == 5 &&
      section.dataset.subSection == 1 &&
      back
    ) {
      const beforeWrapper = document.querySelector(
        "[data-section='6'][data-sub-section='0']"
      );
      const slider = beforeWrapper.querySelector(".fullimage-section__slider");
      const curSlider = document.querySelector(".partial-section__mob-slider");

      gsap.to(slider, {
        y: 0,
        x: 0,
        width: slider.dataset.initialWidth,
        height: slider.dataset.initialHeight,
        duration: 0.8,
        ease: "linear",
        onStart: function () {
          slider.classList.remove("over");
          slider.style.display = "block";
          curSlider.style.opacity = "0";
          curSlider.style.visibility = "hidden";
        },
      });
    }
    console.log("TTTTT");
    console.log(section.dataset.section);
    const header = document.querySelector(".header");

    if (emergingBg) {
      if (!back) {
        if (section.dataset.section == 5 && section.dataset.subSection == 0) {
        } else {
          header.classList.add("dark");
        }

        console.log("add dark");

        gsap.to(emergingBg, {
          scaleY: 1,
          delay: 0.32,
          duration: 0.58,
          ease: "linear",
        });
      } else {
        console.log("remove dark back");

        header.classList.remove("dark");
        gsap.to(emergingBg, {
          scaleY: 0,
          delay: 0.18,
          duration: 0.38,
          ease: "linear",
        });
      }
    } else {
      if (back) {
        let emergBack = section.querySelector(".section__emerging-bg");

        if (emergBack) {
          if (
            !(section.dataset.section == 5 && section.dataset.subSection == 0)
          ) {
            header.classList.add("dark");
          }
        }
      } else {
        console.log("remove dark");
        header.classList.remove("dark");
      }
    }
  }

  function fullscreenAnima(section, back) {
    if (section.classList.contains("fullimage-section")) {
      const container = section.querySelector(".section__container");
      const img = container.querySelector(".fullimage-section__bg");
      const textAnimas = container.querySelectorAll("[data-text-anima]");

      if (!back) {
        textAnimas.forEach((text) => {
          text.style.height = text.scrollHeight + "px";
          text.dataset.initialHeight = text.scrollHeight + "px";
          const spans = text.querySelectorAll(".outer");

          spans.forEach((span) => {
            let tween = gsap.fromTo(
              span,
              { height: 0 },
              { height: "auto", duration: 0.6, delay: 0.77, ease: "linear" }
            );
            tween.play();
          });
        });
      }

      if (!back) {
        gsap.fromTo(
          img.querySelector("img"),
          {
            scale: 1.08,
          },
          {
            scale: 1,
            duration: 1.4,
            delay: 0.3,
            ease: "ease",
          }
        );
      } else {
        gsap.fromTo(
          img.querySelector("img"),
          {
            scale: 1.08,
          },
          {
            scale: 1,
            duration: 1.4,
            delay: 0.3,
            ease: "ease",
          }
        );
      }

      const arrows = container.querySelectorAll(".btn--arrow");

      if (!back) {
        if (arrows.length != 0) {
          arrows.forEach((arrow) => {
            gsap.from(arrow, {
              scale: 0,
              duration: 0.8,
              delay: 0.85,
            });
          });
        }
      }
    }
  }

  const linksItems = document.querySelectorAll(".header-menu__link");

  linksItems.forEach((linkItem) => {
    linkItem.addEventListener("click", () => {
      if (linkItem.dataset.slideIndex == newSlider.slides.length) {
        newSlider.slideTo(newSlider.slides.length, 0, false);

        newSlider.mousewheel.disable();
        newSlider.keyboard.disable();
      } else {
        newSlider.slideTo(linkItem.dataset.slideIndex, 0, false);
        newSlider.mousewheel.enable();
        newSlider.keyboard.enable();
      }

      if (newSlider.activeIndex >= 2) {
        newSlider.slides.forEach((item) => {
          item.classList.remove("prev");
        });

        for (i = 0; i < newSlider.activeIndex; i++) {
          newSlider.slides[i].classList.add("prev");
        }
      }

      const resetSections = document.querySelectorAll(".section");
      const partials = document.querySelectorAll(".partial-section");

      resetSections.forEach((section) => {
        const items = section.querySelectorAll("[style]");

        items.forEach((item) => {
          item.style.cssText = "";
          item.setAttribute("style", "");
        });

        partials.forEach((partial) => {
          partial.style.opacity = "0";
          partial.style.visibility = "hidden";
        });
      });

      if (linkItem.dataset.slideIndex == newSlider.slides.length) {
      } else {
        const containers = newSlider.slides[
          linkItem.dataset.slideIndex
        ].querySelectorAll(".section__container");

        containers.forEach((item) => {
          item.style.transition = "initial";
        });

        setTimeout(() => {
          containers.forEach((item) => {
            item.style.transition = "";
          });
        }, 500);
      }

      const slider = document.querySelector(".fullimage-section__slider");
      slider.classList.remove("over");

      if (linkItem.dataset.slideIndex == newSlider.slides.length) {
        document.addEventListener("wheel", showHideFooter);
        document.addEventListener("keydown", showHideFooter);

        gsap.to(document.querySelector(".main"), {
          y: -document.documentElement.clientHeight + 200,
          duration: 1,
          onComplete: function () {
            changing = false;
          },
        });
      } else {
        document.removeEventListener("wheel", showHideFooter);
        document.removeEventListener("keydown", showHideFooter);
      }

      for (i = 1; i <= newSlider.activeIndex; i++) {
        console.log("i", newSlider.slides[i]);
        modalAnima(newSlider.slides[i], false);
        partialAnima(newSlider.slides[i - 1], false, newSlider.slides[i]);
        fullscreenAnima(newSlider.slides[i], false);
      }
    });
  });

  window.addEventListener("resize", () => {
    if (newSlider && desktopMedia.matches) {
      newSlider.destroy();
    }
  });
}

function ordinarySliders() {
  const sliders = document.querySelectorAll(".ordinary-slider .swiper");

  let observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.swiper) {
          entry.target.swiper.autoplay.resume();
        }
      } else {
        if (entry.target.swiper) {
          entry.target.swiper.autoplay.pause();
        }
      }
    });
  });

  sliders.forEach((slider) => {
    observer.observe(slider);
  });
}

function lastSlider() {
  const horizSlide = new Swiper(".partial-section__mob-slider", {
    direction: "horizontal",
    slidesPerView: 1,
    autoplay: {
      delay: 6000,
    },
    speed: 800,
    pagination: {
      el: ".partial-section__placeholder--2 .swiper-pagination",
      type: "bullets",
      clickable: true,
      modifierClass: "components__pagination",
    },
    loop: true,
    navigation: {
      prevEl: ".partial-section--interior .partial-section__arrow:first-child",
      nextEl: ".partial-section--interior .partial-section__arrow:last-child",
    },
  });

  horizSlide.autoplay.pause();
}

function titleScrolling() {
  const titles = document.querySelectorAll(".fullimage-section__title");

  titles.forEach((title) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: title.parentElement.parentElement,
        start: "top top-=100px",
        end: "bottom+=200px top",
        scrub: true,
      },
    });

    tl.to(title, {
      x: -(title.scrollWidth * 1.2),
      duration: 2,
    });
  });
}

function turningHeader() {
  const header = document.querySelector(".header");
  const sections = document.querySelectorAll(".partial-section.dark");

  console.log(sections);
  sections.forEach((section) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom",
        scrub: true,
      },
    });

    tl.to(header, {
      y: 0,
      onStart: function () {
        header.classList.add("dark");
      },
      onComplete: function () {
        header.classList.remove("dark");
      },
    });
  });
}

function arrowWork() {
  const triggers = document.querySelectorAll("[data-scroll-to]");

  triggers.forEach((trigger) => {
    const id = trigger.dataset.scrollTo;
    const target = document.querySelector(`[data-scroll-target="${id}"]`);
    trigger.addEventListener("click", () => {
      console.log(target);
      target.scrollIntoView();
    });
  });

  const toTop = document.querySelector(".footer__arrow-top");

  toTop.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
}

function detectingCurtain() {
  const items = document.querySelectorAll("[data-abs-curtain]");

  function get_ya_browser() {
    const ua = navigator.userAgent;
    if (ua.search(/YaBrowser/) > 0) return true;
    return false;
  }

  const browser = get_ya_browser();

  function iOS() {
    return (
      [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod",
      ].includes(navigator.platform) ||
      // iPad on iOS 13 detection
      (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    );
  }

  const ios = iOS();

  if (ios || browser) {
    items.forEach((item) => {
      item.setAttribute("data-abs-curtain", "true");
    });

    if (ios) {
      items.forEach((item) => {
        item.setAttribute("data-safari-brows", "true");
      });
    }
  }
}

function mobileAnchors() {
  const sections = document.querySelectorAll("[data-mobile-anchor]");

  sections.forEach((section) => {
    section.setAttribute("id", section.dataset.mobileAnchor);
  });
}

function validation() {
  let inputWrappers = document.querySelectorAll(".sign-up__field-wrapper");
  const passwordFields = document.querySelectorAll(
    ".sign-up__field-wrapper--password"
  );

  inputWrappers.forEach((wrapper) => {
    const input = wrapper.querySelector(".sign-up__field");

    if (input) {
      if (wrapper.classList.contains("sign-up__field-wrapper--name")) {
        input.addEventListener("input", (e) => {
          if (input.value.length >= 45) {
            input.value = input.value.slice(0, 45);
            e.preventDefault();
          }
        });
      }

      input.addEventListener("input", () => {
        if (wrapper.classList.contains("sign-up__field-wrapper--name")) {
          if (input.value.match(/[^a-zA-Zа-яА-Я\s]/)) {
            wrapper.classList.add("error");
          } else {
            wrapper.classList.remove("error");
          }
        } else if (wrapper.classList.contains("sign-up__field-wrapper--tel")) {
          let rawValue = input.value.replace(/\s/g, "");
          if (rawValue.length < 12) {
            wrapper.classList.add("error");
          } else {
            wrapper.classList.remove("error");
          }
        } else if (
          wrapper.classList.contains("sign-up__field-wrapper--email")
        ) {
          if (
            input.value.match(
              /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
            )
          ) {
            console.log("error");
            wrapper.classList.remove("error");
          } else {
            console.log("unerror");
            wrapper.classList.add("error");
          }
        }
      });

      input.addEventListener("input", () => {
        if (input.value.length !== 0) {
          wrapper.classList.add("correct");
        } else {
          wrapper.classList.remove("correct");
        }
      });
    }
  });

  passwordFields.forEach((passwordField) => {
    const input = passwordField.querySelector(".sign-up__field");
    const eye = passwordField.querySelector(".sign-up__eye");

    eye.addEventListener("click", () => {
      if (passwordField.classList.contains("open-pas")) {
        input.setAttribute("type", "password");
        passwordField.classList.remove("open-pas");
      } else {
        input.setAttribute("type", "text");
        passwordField.classList.add("open-pas");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  pageWidth = document.body.clientWidth;
  let desktopMedia = window.matchMedia("(max-width: 1024px)");

  const phones = document.querySelectorAll(
    ".modal-form__field-wrapper--tel input"
  );
  const maskOptions = {
    mask: "+0 (000) 000-00-00",
    placeholderChar: "_",
  };

  phones.forEach((phone) => {
    const mask = IMask(phone, maskOptions);
    phone.classList.add("placeholder");
  });

  hamburger();
  modal();
  menuSlider();
  partialSlider();
  tickerSlider();
  // ordinarySliders();
  detectingCurtain();

  if (desktopMedia.matches) {
    gsap.registerPlugin(ScrollTrigger);
    console.log("match");
    turningHeader();
    lastSlider();
    titleScrolling();
    arrowWork();
    mobileAnchors();
  } else {
    slider();
    heroAnimation();
    movePluses();
  }
});
