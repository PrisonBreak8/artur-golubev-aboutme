(() => {
  "use strict";
  let e = !0,
    t = (t = 500) => {
      let n = document.querySelector("body");
      if (e) {
        let r = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < r.length; e++) {
            r[e].style.paddingRight = "0px";
          }
          (n.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, t),
          (e = !1),
          setTimeout(function () {
            e = !0;
          }, t);
      }
    },
    n = (t = 500) => {
      let n = document.querySelector("body");
      if (e) {
        let r = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < r.length; e++) {
          r[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (n.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (e = !1),
          setTimeout(function () {
            e = !0;
          }, t);
      }
    };
  function r(e) {
    setTimeout(() => {
      window.FLS && console.log(e);
    }, 0);
  }
  let o = (e, n = !1, o = 500, i = 0) => {
      const s = document.querySelector(e);
      if (s) {
        let a = "",
          u = 0;
        n &&
          ((a = "header.header"), (u = document.querySelector(a).offsetHeight));
        let c = {
          speedAsDuration: !0,
          speed: o,
          header: a,
          offset: i,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (t(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(s, "", c);
        else {
          let e = s.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: u ? e - u : e, behavior: "smooth" });
        }
        r(`[gotoBlock]: Юхуу...едем к ${e}`);
      } else r(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
    },
    i = !1;
  var s, a;
  setTimeout(() => {
    if (i) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    (s = void 0),
    (a = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function t(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      }
      function n() {
        return (n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function r(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      function o(e) {
        return (o = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function i(e, t) {
        return (i =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function s(e, t, n) {
        return (s = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()
          ? Reflect.construct
          : function (e, t, n) {
              var r = [null];
              r.push.apply(r, t);
              var o = new (Function.bind.apply(e, r))();
              return n && i(o, n.prototype), o;
            }).apply(null, arguments);
      }
      function a(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (a = function (e) {
          if (
            null === e ||
            -1 === Function.toString.call(e).indexOf("[native code]")
          )
            return e;
          if ("function" != typeof e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, n);
          }
          function n() {
            return s(e, arguments, o(this).constructor);
          }
          return (
            (n.prototype = Object.create(e.prototype, {
              constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            i(n, e)
          );
        })(e);
      }
      function u(e, t) {
        try {
          var n = e();
        } catch (e) {
          return t(e);
        }
        return n && n.then ? n.then(void 0, t) : n;
      }
      var c;
      "undefined" != typeof Symbol &&
        (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))),
        "undefined" != typeof Symbol &&
          (Symbol.asyncIterator ||
            (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))),
        (function (e) {
          (e[(e.off = 0)] = "off"),
            (e[(e.error = 1)] = "error"),
            (e[(e.warning = 2)] = "warning"),
            (e[(e.info = 3)] = "info"),
            (e[(e.debug = 4)] = "debug");
        })(c || (c = {}));
      var h = c.off,
        f = (function () {
          function e(e) {
            this.t = e;
          }
          (e.getLevel = function () {
            return h;
          }),
            (e.setLevel = function (e) {
              return (h = c[e]);
            });
          var t = e.prototype;
          return (
            (t.error = function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              this.i(console.error, c.error, t);
            }),
            (t.warn = function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              this.i(console.warn, c.warning, t);
            }),
            (t.info = function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              this.i(console.info, c.info, t);
            }),
            (t.debug = function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              this.i(console.log, c.debug, t);
            }),
            (t.i = function (t, n, r) {
              n <= e.getLevel() &&
                t.apply(console, ["[" + this.t + "] "].concat(r));
            }),
            e
          );
        })(),
        l = S,
        d = w,
        p = y,
        v = b,
        m = k,
        g = new RegExp(
          [
            "(\\\\.)",
            "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?",
          ].join("|"),
          "g"
        );
      function y(e, t) {
        for (
          var n,
            r = [],
            o = 0,
            i = 0,
            s = "",
            a = (t && t.delimiter) || "/",
            u = (t && t.whitelist) || void 0,
            c = !1;
          null !== (n = g.exec(e));

        ) {
          var h = n[0],
            f = n[1],
            l = n.index;
          if (((s += e.slice(i, l)), (i = l + h.length), f))
            (s += f[1]), (c = !0);
          else {
            var d = "",
              p = n[2],
              v = n[3],
              m = n[4],
              y = n[5];
            if (!c && s.length) {
              var w = s.length - 1,
                b = s[w];
              (!u || u.indexOf(b) > -1) && ((d = b), (s = s.slice(0, w)));
            }
            s && (r.push(s), (s = ""), (c = !1));
            var x = v || m,
              k = d || a;
            r.push({
              name: p || o++,
              prefix: d,
              delimiter: k,
              optional: "?" === y || "*" === y,
              repeat: "+" === y || "*" === y,
              pattern: x ? P(x) : "[^" + E(k === a ? k : k + a) + "]+?",
            });
          }
        }
        return (s || i < e.length) && r.push(s + e.substr(i)), r;
      }
      function w(e, t) {
        return function (n, r) {
          var o = e.exec(n);
          if (!o) return !1;
          for (
            var i = o[0],
              s = o.index,
              a = {},
              u = (r && r.decode) || decodeURIComponent,
              c = 1;
            c < o.length;
            c++
          )
            if (void 0 !== o[c]) {
              var h = t[c - 1];
              a[h.name] = h.repeat
                ? o[c].split(h.delimiter).map(function (e) {
                    return u(e, h);
                  })
                : u(o[c], h);
            }
          return { path: i, index: s, params: a };
        };
      }
      function b(e, t) {
        for (var n = new Array(e.length), r = 0; r < e.length; r++)
          "object" == typeof e[r] &&
            (n[r] = new RegExp("^(?:" + e[r].pattern + ")$", x(t)));
        return function (t, r) {
          for (
            var o = "",
              i = (r && r.encode) || encodeURIComponent,
              s = !r || !1 !== r.validate,
              a = 0;
            a < e.length;
            a++
          ) {
            var u = e[a];
            if ("string" != typeof u) {
              var c,
                h = t ? t[u.name] : void 0;
              if (Array.isArray(h)) {
                if (!u.repeat)
                  throw new TypeError(
                    'Expected "' + u.name + '" to not repeat, but got array'
                  );
                if (0 === h.length) {
                  if (u.optional) continue;
                  throw new TypeError(
                    'Expected "' + u.name + '" to not be empty'
                  );
                }
                for (var f = 0; f < h.length; f++) {
                  if (((c = i(h[f], u)), s && !n[a].test(c)))
                    throw new TypeError(
                      'Expected all "' +
                        u.name +
                        '" to match "' +
                        u.pattern +
                        '"'
                    );
                  o += (0 === f ? u.prefix : u.delimiter) + c;
                }
              } else if (
                "string" != typeof h &&
                "number" != typeof h &&
                "boolean" != typeof h
              ) {
                if (!u.optional)
                  throw new TypeError(
                    'Expected "' +
                      u.name +
                      '" to be ' +
                      (u.repeat ? "an array" : "a string")
                  );
              } else {
                if (((c = i(String(h), u)), s && !n[a].test(c)))
                  throw new TypeError(
                    'Expected "' +
                      u.name +
                      '" to match "' +
                      u.pattern +
                      '", but got "' +
                      c +
                      '"'
                  );
                o += u.prefix + c;
              }
            } else o += u;
          }
          return o;
        };
      }
      function E(e) {
        return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      }
      function P(e) {
        return e.replace(/([=!:$/()])/g, "\\$1");
      }
      function x(e) {
        return e && e.sensitive ? "" : "i";
      }
      function k(e, t, n) {
        for (
          var r = (n = n || {}).strict,
            o = !1 !== n.start,
            i = !1 !== n.end,
            s = n.delimiter || "/",
            a = []
              .concat(n.endsWith || [])
              .map(E)
              .concat("$")
              .join("|"),
            u = o ? "^" : "",
            c = 0;
          c < e.length;
          c++
        ) {
          var h = e[c];
          if ("string" == typeof h) u += E(h);
          else {
            var f = h.repeat
              ? "(?:" +
                h.pattern +
                ")(?:" +
                E(h.delimiter) +
                "(?:" +
                h.pattern +
                "))*"
              : h.pattern;
            t && t.push(h),
              (u += h.optional
                ? h.prefix
                  ? "(?:" + E(h.prefix) + "(" + f + "))?"
                  : "(" + f + ")?"
                : E(h.prefix) + "(" + f + ")");
          }
        }
        if (i)
          r || (u += "(?:" + E(s) + ")?"),
            (u += "$" === a ? "$" : "(?=" + a + ")");
        else {
          var l = e[e.length - 1],
            d = "string" == typeof l ? l[l.length - 1] === s : void 0 === l;
          r || (u += "(?:" + E(s) + "(?=" + a + "))?"),
            d || (u += "(?=" + E(s) + "|" + a + ")");
        }
        return new RegExp(u, x(n));
      }
      function S(e, t, n) {
        return e instanceof RegExp
          ? (function (e, t) {
              if (!t) return e;
              var n = e.source.match(/\((?!\?)/g);
              if (n)
                for (var r = 0; r < n.length; r++)
                  t.push({
                    name: r,
                    prefix: null,
                    delimiter: null,
                    optional: !1,
                    repeat: !1,
                    pattern: null,
                  });
              return e;
            })(e, t)
          : Array.isArray(e)
          ? (function (e, t, n) {
              for (var r = [], o = 0; o < e.length; o++)
                r.push(S(e[o], t, n).source);
              return new RegExp("(?:" + r.join("|") + ")", x(n));
            })(e, t, n)
          : (function (e, t, n) {
              return k(y(e, n), t, n);
            })(e, t, n);
      }
      (l.match = function (e, t) {
        var n = [];
        return w(S(e, n, t), n);
      }),
        (l.regexpToFunction = d),
        (l.parse = p),
        (l.compile = function (e, t) {
          return b(y(e, t), t);
        }),
        (l.tokensToFunction = v),
        (l.tokensToRegExp = m);
      var A = {
          container: "container",
          history: "history",
          namespace: "namespace",
          prefix: "data-barba",
          prevent: "prevent",
          wrapper: "wrapper",
        },
        L = new ((function () {
          function e() {
            (this.o = A), (this.u = new DOMParser());
          }
          var t = e.prototype;
          return (
            (t.toString = function (e) {
              return e.outerHTML;
            }),
            (t.toDocument = function (e) {
              return this.u.parseFromString(e, "text/html");
            }),
            (t.toElement = function (e) {
              var t = document.createElement("div");
              return (t.innerHTML = e), t;
            }),
            (t.getHtml = function (e) {
              return (
                void 0 === e && (e = document), this.toString(e.documentElement)
              );
            }),
            (t.getWrapper = function (e) {
              return (
                void 0 === e && (e = document),
                e.querySelector(
                  "[" + this.o.prefix + '="' + this.o.wrapper + '"]'
                )
              );
            }),
            (t.getContainer = function (e) {
              return (
                void 0 === e && (e = document),
                e.querySelector(
                  "[" + this.o.prefix + '="' + this.o.container + '"]'
                )
              );
            }),
            (t.removeContainer = function (e) {
              document.body.contains(e) && e.parentNode.removeChild(e);
            }),
            (t.addContainer = function (e, t) {
              var n = this.getContainer();
              n ? this.s(e, n) : t.appendChild(e);
            }),
            (t.getNamespace = function (e) {
              void 0 === e && (e = document);
              var t = e.querySelector(
                "[" + this.o.prefix + "-" + this.o.namespace + "]"
              );
              return t
                ? t.getAttribute(this.o.prefix + "-" + this.o.namespace)
                : null;
            }),
            (t.getHref = function (e) {
              if (e.tagName && "a" === e.tagName.toLowerCase()) {
                if ("string" == typeof e.href) return e.href;
                var t = e.getAttribute("href") || e.getAttribute("xlink:href");
                if (t) return this.resolveUrl(t.baseVal || t);
              }
              return null;
            }),
            (t.resolveUrl = function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              var r = t.length;
              if (0 === r)
                throw new Error(
                  "resolveUrl requires at least one argument; got none."
                );
              var o = document.createElement("base");
              if (((o.href = arguments[0]), 1 === r)) return o.href;
              var i = document.getElementsByTagName("head")[0];
              i.insertBefore(o, i.firstChild);
              for (var s, a = document.createElement("a"), u = 1; u < r; u++)
                (a.href = arguments[u]), (o.href = s = a.href);
              return i.removeChild(o), s;
            }),
            (t.s = function (e, t) {
              t.parentNode.insertBefore(e, t.nextSibling);
            }),
            e
          );
        })())(),
        j = new ((function () {
          function e() {
            (this.h = []), (this.v = -1);
          }
          var r = e.prototype;
          return (
            (r.init = function (e, t) {
              this.l = "barba";
              var n = {
                ns: t,
                scroll: { x: window.scrollX, y: window.scrollY },
                url: e,
              };
              this.h.push(n), (this.v = 0);
              var r = { from: this.l, index: 0, states: [].concat(this.h) };
              window.history && window.history.replaceState(r, "", e);
            }),
            (r.change = function (e, t, n) {
              if (n && n.state) {
                var r = n.state,
                  o = r.index;
                (t = this.m(this.v - o)), this.replace(r.states), (this.v = o);
              } else this.add(e, t);
              return t;
            }),
            (r.add = function (e, t) {
              var n = this.size,
                r = this.p(t),
                o = {
                  ns: "tmp",
                  scroll: { x: window.scrollX, y: window.scrollY },
                  url: e,
                };
              this.h.push(o), (this.v = n);
              var i = { from: this.l, index: n, states: [].concat(this.h) };
              switch (r) {
                case "push":
                  window.history && window.history.pushState(i, "", e);
                  break;
                case "replace":
                  window.history && window.history.replaceState(i, "", e);
              }
            }),
            (r.update = function (e, t) {
              var r = t || this.v,
                o = n({}, this.get(r), {}, e);
              this.set(r, o);
            }),
            (r.remove = function (e) {
              e ? this.h.splice(e, 1) : this.h.pop(), this.v--;
            }),
            (r.clear = function () {
              (this.h = []), (this.v = -1);
            }),
            (r.replace = function (e) {
              this.h = e;
            }),
            (r.get = function (e) {
              return this.h[e];
            }),
            (r.set = function (e, t) {
              return (this.h[e] = t);
            }),
            (r.p = function (e) {
              var t = "push",
                n = e,
                r = A.prefix + "-" + A.history;
              return (
                n.hasAttribute && n.hasAttribute(r) && (t = n.getAttribute(r)),
                t
              );
            }),
            (r.m = function (e) {
              return Math.abs(e) > 1
                ? e > 0
                  ? "forward"
                  : "back"
                : 0 === e
                ? "popstate"
                : e > 0
                ? "back"
                : "forward";
            }),
            t(e, [
              {
                key: "current",
                get: function () {
                  return this.h[this.v];
                },
              },
              {
                key: "state",
                get: function () {
                  return this.h[this.h.length - 1];
                },
              },
              {
                key: "previous",
                get: function () {
                  return this.v < 1 ? null : this.h[this.v - 1];
                },
              },
              {
                key: "size",
                get: function () {
                  return this.h.length;
                },
              },
            ]),
            e
          );
        })())(),
        R = function (e, t) {
          try {
            var n = (function () {
              if (!t.next.html)
                return Promise.resolve(e).then(function (e) {
                  var n = t.next;
                  if (e) {
                    var r = L.toElement(e);
                    (n.namespace = L.getNamespace(r)),
                      (n.container = L.getContainer(r)),
                      (n.html = e),
                      j.update({ ns: n.namespace });
                    var o = L.toDocument(e);
                    document.title = o.title;
                  }
                });
            })();
            return Promise.resolve(
              n && n.then ? n.then(function () {}) : void 0
            );
          } catch (e) {
            return Promise.reject(e);
          }
        },
        q = l,
        O = {
          __proto__: null,
          update: R,
          nextTick: function () {
            return new Promise(function (e) {
              window.requestAnimationFrame(e);
            });
          },
          pathToRegexp: q,
        },
        T = function () {
          return window.location.origin;
        },
        _ = function (e) {
          return void 0 === e && (e = window.location.href), C(e).port;
        },
        C = function (e) {
          var t,
            n = e.match(/:\d+/);
          if (null === n)
            /^http/.test(e) && (t = 80), /^https/.test(e) && (t = 443);
          else {
            var r = n[0].substring(1);
            t = parseInt(r, 10);
          }
          var o,
            i = e.replace(T(), ""),
            s = {},
            a = i.indexOf("#");
          a >= 0 && ((o = i.slice(a + 1)), (i = i.slice(0, a)));
          var u = i.indexOf("?");
          return (
            u >= 0 && ((s = H(i.slice(u + 1))), (i = i.slice(0, u))),
            { hash: o, path: i, port: t, query: s }
          );
        },
        H = function (e) {
          return e.split("&").reduce(function (e, t) {
            var n = t.split("=");
            return (e[n[0]] = n[1]), e;
          }, {});
        },
        B = function (e) {
          return (
            void 0 === e && (e = window.location.href),
            e.replace(/(\/#.*|\/|#.*)$/, "")
          );
        },
        I = {
          __proto__: null,
          getHref: function () {
            return window.location.href;
          },
          getOrigin: T,
          getPort: _,
          getPath: function (e) {
            return void 0 === e && (e = window.location.href), C(e).path;
          },
          parse: C,
          parseQuery: H,
          clean: B,
        };
      function M(e, t, n) {
        return (
          void 0 === t && (t = 2e3),
          new Promise(function (r, o) {
            var i = new XMLHttpRequest();
            (i.onreadystatechange = function () {
              if (i.readyState === XMLHttpRequest.DONE)
                if (200 === i.status) r(i.responseText);
                else if (i.status) {
                  var t = { status: i.status, statusText: i.statusText };
                  n(e, t), o(t);
                }
            }),
              (i.ontimeout = function () {
                var r = new Error("Timeout error [" + t + "]");
                n(e, r), o(r);
              }),
              (i.onerror = function () {
                var t = new Error("Fetch error");
                n(e, t), o(t);
              }),
              i.open("GET", e),
              (i.timeout = t),
              i.setRequestHeader(
                "Accept",
                "text/html,application/xhtml+xml,application/xml"
              ),
              i.setRequestHeader("x-barba", "yes"),
              i.send();
          })
        );
      }
      var N = function (e) {
        return (
          !!e &&
          ("object" == typeof e || "function" == typeof e) &&
          "function" == typeof e.then
        );
      };
      function D(e, t) {
        return (
          void 0 === t && (t = {}),
          function () {
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            var i = !1,
              s = new Promise(function (n, o) {
                t.async = function () {
                  return (
                    (i = !0),
                    function (e, t) {
                      e ? o(e) : n(t);
                    }
                  );
                };
                var s = e.apply(t, r);
                i || (N(s) ? s.then(n, o) : n(s));
              });
            return s;
          }
        );
      }
      var $ = new ((function (e) {
          function t() {
            var t;
            return (
              ((t = e.call(this) || this).logger = new f("@barba/core")),
              (t.all = [
                "ready",
                "page",
                "reset",
                "currentAdded",
                "currentRemoved",
                "nextAdded",
                "nextRemoved",
                "beforeOnce",
                "once",
                "afterOnce",
                "before",
                "beforeLeave",
                "leave",
                "afterLeave",
                "beforeEnter",
                "enter",
                "afterEnter",
                "after",
              ]),
              (t.registered = new Map()),
              t.init(),
              t
            );
          }
          r(t, e);
          var n = t.prototype;
          return (
            (n.init = function () {
              var e = this;
              this.registered.clear(),
                this.all.forEach(function (t) {
                  e[t] ||
                    (e[t] = function (n, r) {
                      e.registered.has(t) || e.registered.set(t, new Set()),
                        e.registered.get(t).add({ ctx: r || {}, fn: n });
                    });
                });
            }),
            (n.do = function (e) {
              for (
                var t = this,
                  n = arguments.length,
                  r = new Array(n > 1 ? n - 1 : 0),
                  o = 1;
                o < n;
                o++
              )
                r[o - 1] = arguments[o];
              if (this.registered.has(e)) {
                var i = Promise.resolve();
                return (
                  this.registered.get(e).forEach(function (e) {
                    i = i.then(function () {
                      return D(e.fn, e.ctx).apply(void 0, r);
                    });
                  }),
                  i.catch(function (n) {
                    t.logger.debug("Hook error [" + e + "]"), t.logger.error(n);
                  })
                );
              }
              return Promise.resolve();
            }),
            (n.clear = function () {
              var e = this;
              this.all.forEach(function (t) {
                delete e[t];
              }),
                this.init();
            }),
            (n.help = function () {
              this.logger.info("Available hooks: " + this.all.join(","));
              var e = [];
              this.registered.forEach(function (t, n) {
                return e.push(n);
              }),
                this.logger.info("Registered hooks: " + e.join(","));
            }),
            t
          );
        })(function () {}))(),
        U = (function () {
          function e(e) {
            if (((this.P = []), "boolean" == typeof e)) this.g = e;
            else {
              var t = Array.isArray(e) ? e : [e];
              this.P = t.map(function (e) {
                return q(e);
              });
            }
          }
          return (
            (e.prototype.checkHref = function (e) {
              if ("boolean" == typeof this.g) return this.g;
              var t = C(e).path;
              return this.P.some(function (e) {
                return null !== e.exec(t);
              });
            }),
            e
          );
        })(),
        F = (function (e) {
          function t(t) {
            var n;
            return ((n = e.call(this, t) || this).k = new Map()), n;
          }
          r(t, e);
          var o = t.prototype;
          return (
            (o.set = function (e, t, n) {
              return (
                this.k.set(e, { action: n, request: t }),
                { action: n, request: t }
              );
            }),
            (o.get = function (e) {
              return this.k.get(e);
            }),
            (o.getRequest = function (e) {
              return this.k.get(e).request;
            }),
            (o.getAction = function (e) {
              return this.k.get(e).action;
            }),
            (o.has = function (e) {
              return !this.checkHref(e) && this.k.has(e);
            }),
            (o.delete = function (e) {
              return this.k.delete(e);
            }),
            (o.update = function (e, t) {
              var r = n({}, this.k.get(e), {}, t);
              return this.k.set(e, r), r;
            }),
            t
          );
        })(U),
        W = function () {
          return !window.history.pushState;
        },
        X = function (e) {
          return !e.el || !e.href;
        },
        K = function (e) {
          var t = e.event;
          return (
            t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey
          );
        },
        Y = function (e) {
          var t = e.el;
          return t.hasAttribute("target") && "_blank" === t.target;
        },
        Q = function (e) {
          var t = e.el;
          return (
            (void 0 !== t.protocol &&
              window.location.protocol !== t.protocol) ||
            (void 0 !== t.hostname && window.location.hostname !== t.hostname)
          );
        },
        z = function (e) {
          var t = e.el;
          return void 0 !== t.port && _() !== _(t.href);
        },
        G = function (e) {
          var t = e.el;
          return (
            t.getAttribute && "string" == typeof t.getAttribute("download")
          );
        },
        V = function (e) {
          return e.el.hasAttribute(A.prefix + "-" + A.prevent);
        },
        J = function (e) {
          return Boolean(
            e.el.closest("[" + A.prefix + "-" + A.prevent + '="all"]')
          );
        },
        Z = function (e) {
          var t = e.href;
          return B(t) === B() && _(t) === _();
        },
        ee = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).suite = []),
              (n.tests = new Map()),
              n.init(),
              n
            );
          }
          r(t, e);
          var n = t.prototype;
          return (
            (n.init = function () {
              this.add("pushState", W),
                this.add("exists", X),
                this.add("newTab", K),
                this.add("blank", Y),
                this.add("corsDomain", Q),
                this.add("corsPort", z),
                this.add("download", G),
                this.add("preventSelf", V),
                this.add("preventAll", J),
                this.add("sameUrl", Z, !1);
            }),
            (n.add = function (e, t, n) {
              void 0 === n && (n = !0),
                this.tests.set(e, t),
                n && this.suite.push(e);
            }),
            (n.run = function (e, t, n, r) {
              return this.tests.get(e)({ el: t, event: n, href: r });
            }),
            (n.checkLink = function (e, t, n) {
              var r = this;
              return this.suite.some(function (o) {
                return r.run(o, e, t, n);
              });
            }),
            t
          );
        })(U),
        te = (function (e) {
          function t(n, r) {
            var o;
            void 0 === r && (r = "Barba error");
            for (
              var i = arguments.length, s = new Array(i > 2 ? i - 2 : 0), a = 2;
              a < i;
              a++
            )
              s[a - 2] = arguments[a];
            return (
              ((o = e.call.apply(e, [this].concat(s)) || this).error = n),
              (o.label = r),
              Error.captureStackTrace &&
                Error.captureStackTrace(
                  (function (e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return e;
                  })(o),
                  t
                ),
              (o.name = "BarbaError"),
              o
            );
          }
          return r(t, e), t;
        })(a(Error)),
        ne = (function () {
          function e(e) {
            void 0 === e && (e = []),
              (this.logger = new f("@barba/core")),
              (this.all = []),
              (this.page = []),
              (this.once = []),
              (this.A = [
                { name: "namespace", type: "strings" },
                { name: "custom", type: "function" },
              ]),
              e && (this.all = this.all.concat(e)),
              this.update();
          }
          var t = e.prototype;
          return (
            (t.add = function (e, t) {
              "rule" === e
                ? this.A.splice(t.position || 0, 0, t.value)
                : this.all.push(t),
                this.update();
            }),
            (t.resolve = function (e, t) {
              var n = this;
              void 0 === t && (t = {});
              var r = t.once ? this.once : this.page;
              r = r.filter(
                t.self
                  ? function (e) {
                      return e.name && "self" === e.name;
                    }
                  : function (e) {
                      return !e.name || "self" !== e.name;
                    }
              );
              var o = new Map(),
                i = r.find(function (r) {
                  var i = !0,
                    s = {};
                  return (
                    !(!t.self || "self" !== r.name) ||
                    (n.A.reverse().forEach(function (t) {
                      i &&
                        ((i = n.R(r, t, e, s)),
                        r.from &&
                          r.to &&
                          (i =
                            n.R(r, t, e, s, "from") && n.R(r, t, e, s, "to")),
                        r.from && !r.to && (i = n.R(r, t, e, s, "from")),
                        !r.from && r.to && (i = n.R(r, t, e, s, "to")));
                    }),
                    o.set(r, s),
                    i)
                  );
                }),
                s = o.get(i),
                a = [];
              if (
                (a.push(t.once ? "once" : "page"), t.self && a.push("self"), s)
              ) {
                var u,
                  c = [i];
                Object.keys(s).length > 0 && c.push(s),
                  (u = this.logger).info.apply(
                    u,
                    ["Transition found [" + a.join(",") + "]"].concat(c)
                  );
              } else
                this.logger.info("No transition found [" + a.join(",") + "]");
              return i;
            }),
            (t.update = function () {
              var e = this;
              (this.all = this.all
                .map(function (t) {
                  return e.T(t);
                })
                .sort(function (e, t) {
                  return e.priority - t.priority;
                })
                .reverse()
                .map(function (e) {
                  return delete e.priority, e;
                })),
                (this.page = this.all.filter(function (e) {
                  return void 0 !== e.leave || void 0 !== e.enter;
                })),
                (this.once = this.all.filter(function (e) {
                  return void 0 !== e.once;
                }));
            }),
            (t.R = function (e, t, n, r, o) {
              var i = !0,
                s = !1,
                a = e,
                u = t.name,
                c = u,
                h = u,
                f = u,
                l = o ? a[o] : a,
                d = "to" === o ? n.next : n.current;
              if (o ? l && l[u] : l[u]) {
                switch (t.type) {
                  case "strings":
                  default:
                    var p = Array.isArray(l[c]) ? l[c] : [l[c]];
                    d[c] && -1 !== p.indexOf(d[c]) && (s = !0),
                      -1 === p.indexOf(d[c]) && (i = !1);
                    break;
                  case "object":
                    var v = Array.isArray(l[h]) ? l[h] : [l[h]];
                    d[h]
                      ? (d[h].name && -1 !== v.indexOf(d[h].name) && (s = !0),
                        -1 === v.indexOf(d[h].name) && (i = !1))
                      : (i = !1);
                    break;
                  case "function":
                    l[f](n) ? (s = !0) : (i = !1);
                }
                s &&
                  (o
                    ? ((r[o] = r[o] || {}), (r[o][u] = a[o][u]))
                    : (r[u] = a[u]));
              }
              return i;
            }),
            (t.O = function (e, t, n) {
              var r = 0;
              return (
                (e[t] || (e.from && e.from[t]) || (e.to && e.to[t])) &&
                  ((r += Math.pow(10, n)),
                  e.from && e.from[t] && (r += 1),
                  e.to && e.to[t] && (r += 2)),
                r
              );
            }),
            (t.T = function (e) {
              var t = this;
              e.priority = 0;
              var n = 0;
              return (
                this.A.forEach(function (r, o) {
                  n += t.O(e, r.name, o + 1);
                }),
                (e.priority = n),
                e
              );
            }),
            e
          );
        })(),
        re = (function () {
          function e(e) {
            void 0 === e && (e = []),
              (this.logger = new f("@barba/core")),
              (this.S = !1),
              (this.store = new ne(e));
          }
          var n = e.prototype;
          return (
            (n.get = function (e, t) {
              return this.store.resolve(e, t);
            }),
            (n.doOnce = function (e) {
              var t = e.data,
                n = e.transition;
              try {
                var r = function () {
                    o.S = !1;
                  },
                  o = this,
                  i = n || {};
                o.S = !0;
                var s = u(
                  function () {
                    return Promise.resolve(o.j("beforeOnce", t, i)).then(
                      function () {
                        return Promise.resolve(o.once(t, i)).then(function () {
                          return Promise.resolve(o.j("afterOnce", t, i)).then(
                            function () {}
                          );
                        });
                      }
                    );
                  },
                  function (e) {
                    (o.S = !1),
                      o.logger.debug("Transition error [before/after/once]"),
                      o.logger.error(e);
                  }
                );
                return Promise.resolve(s && s.then ? s.then(r) : r());
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            (n.doPage = function (e) {
              var t = e.data,
                n = e.transition,
                r = e.page,
                o = e.wrapper;
              try {
                var i = function (e) {
                    if (s) return e;
                    a.S = !1;
                  },
                  s = !1,
                  a = this,
                  c = n || {},
                  h = !0 === c.sync || !1;
                a.S = !0;
                var f = u(
                  function () {
                    function e() {
                      return Promise.resolve(a.j("before", t, c)).then(
                        function () {
                          function e(e) {
                            return Promise.resolve(a.remove(t)).then(
                              function () {
                                return Promise.resolve(a.j("after", t, c)).then(
                                  function () {}
                                );
                              }
                            );
                          }
                          var n = (function () {
                            if (h)
                              return u(
                                function () {
                                  return Promise.resolve(a.add(t, o)).then(
                                    function () {
                                      return Promise.resolve(
                                        a.j("beforeLeave", t, c)
                                      ).then(function () {
                                        return Promise.resolve(
                                          a.j("beforeEnter", t, c)
                                        ).then(function () {
                                          return Promise.resolve(
                                            Promise.all([
                                              a.leave(t, c),
                                              a.enter(t, c),
                                            ])
                                          ).then(function () {
                                            return Promise.resolve(
                                              a.j("afterLeave", t, c)
                                            ).then(function () {
                                              return Promise.resolve(
                                                a.j("afterEnter", t, c)
                                              ).then(function () {});
                                            });
                                          });
                                        });
                                      });
                                    }
                                  );
                                },
                                function (e) {
                                  if (a.M(e))
                                    throw new te(e, "Transition error [sync]");
                                }
                              );
                            var e = function (e) {
                                return u(
                                  function () {
                                    var e = (function () {
                                      if (!1 !== n)
                                        return Promise.resolve(
                                          a.add(t, o)
                                        ).then(function () {
                                          return Promise.resolve(
                                            a.j("beforeEnter", t, c)
                                          ).then(function () {
                                            return Promise.resolve(
                                              a.enter(t, c, n)
                                            ).then(function () {
                                              return Promise.resolve(
                                                a.j("afterEnter", t, c)
                                              ).then(function () {});
                                            });
                                          });
                                        });
                                    })();
                                    if (e && e.then)
                                      return e.then(function () {});
                                  },
                                  function (e) {
                                    if (a.M(e))
                                      throw new te(
                                        e,
                                        "Transition error [before/after/enter]"
                                      );
                                  }
                                );
                              },
                              n = !1,
                              i = u(
                                function () {
                                  return Promise.resolve(
                                    a.j("beforeLeave", t, c)
                                  ).then(function () {
                                    return Promise.resolve(
                                      Promise.all([
                                        a.leave(t, c),
                                        R(r, t),
                                      ]).then(function (e) {
                                        return e[0];
                                      })
                                    ).then(function (e) {
                                      return (
                                        (n = e),
                                        Promise.resolve(
                                          a.j("afterLeave", t, c)
                                        ).then(function () {})
                                      );
                                    });
                                  });
                                },
                                function (e) {
                                  if (a.M(e))
                                    throw new te(
                                      e,
                                      "Transition error [before/after/leave]"
                                    );
                                }
                              );
                            return i && i.then ? i.then(e) : e();
                          })();
                          return n && n.then ? n.then(e) : e();
                        }
                      );
                    }
                    var n = (function () {
                      if (h)
                        return Promise.resolve(R(r, t)).then(function () {});
                    })();
                    return n && n.then ? n.then(e) : e();
                  },
                  function (e) {
                    if (((a.S = !1), e.name && "BarbaError" === e.name))
                      throw (
                        (a.logger.debug(e.label), a.logger.error(e.error), e)
                      );
                    throw (
                      (a.logger.debug("Transition error [page]"),
                      a.logger.error(e),
                      e)
                    );
                  }
                );
                return Promise.resolve(f && f.then ? f.then(i) : i(f));
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            (n.once = function (e, t) {
              try {
                return Promise.resolve($.do("once", e, t)).then(function () {
                  return t.once ? D(t.once, t)(e) : Promise.resolve();
                });
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            (n.leave = function (e, t) {
              try {
                return Promise.resolve($.do("leave", e, t)).then(function () {
                  return t.leave ? D(t.leave, t)(e) : Promise.resolve();
                });
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            (n.enter = function (e, t, n) {
              try {
                return Promise.resolve($.do("enter", e, t)).then(function () {
                  return t.enter ? D(t.enter, t)(e, n) : Promise.resolve();
                });
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            (n.add = function (e, t) {
              try {
                return (
                  L.addContainer(e.next.container, t),
                  $.do("nextAdded", e),
                  Promise.resolve()
                );
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            (n.remove = function (e) {
              try {
                return (
                  L.removeContainer(e.current.container),
                  $.do("currentRemoved", e),
                  Promise.resolve()
                );
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            (n.M = function (e) {
              return e.message
                ? !/Timeout error|Fetch error/.test(e.message)
                : !e.status;
            }),
            (n.j = function (e, t, n) {
              try {
                return Promise.resolve($.do(e, t, n)).then(function () {
                  return n[e] ? D(n[e], n)(t) : Promise.resolve();
                });
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            t(e, [
              {
                key: "isRunning",
                get: function () {
                  return this.S;
                },
                set: function (e) {
                  this.S = e;
                },
              },
              {
                key: "hasOnce",
                get: function () {
                  return this.store.once.length > 0;
                },
              },
              {
                key: "hasSelf",
                get: function () {
                  return this.store.all.some(function (e) {
                    return "self" === e.name;
                  });
                },
              },
              {
                key: "shouldWait",
                get: function () {
                  return this.store.all.some(function (e) {
                    return (e.to && !e.to.route) || e.sync;
                  });
                },
              },
            ]),
            e
          );
        })(),
        oe = (function () {
          function e(e) {
            var t = this;
            (this.names = [
              "beforeLeave",
              "afterLeave",
              "beforeEnter",
              "afterEnter",
            ]),
              (this.byNamespace = new Map()),
              0 !== e.length &&
                (e.forEach(function (e) {
                  t.byNamespace.set(e.namespace, e);
                }),
                this.names.forEach(function (e) {
                  $[e](t.L(e));
                }));
          }
          return (
            (e.prototype.L = function (e) {
              var t = this;
              return function (n) {
                var r = e.match(/enter/i) ? n.next : n.current,
                  o = t.byNamespace.get(r.namespace);
                return o && o[e] ? D(o[e], o)(n) : Promise.resolve();
              };
            }),
            e
          );
        })();
      Element.prototype.matches ||
        (Element.prototype.matches =
          Element.prototype.msMatchesSelector ||
          Element.prototype.webkitMatchesSelector),
        Element.prototype.closest ||
          (Element.prototype.closest = function (e) {
            var t = this;
            do {
              if (t.matches(e)) return t;
              t = t.parentElement || t.parentNode;
            } while (null !== t && 1 === t.nodeType);
            return null;
          });
      var ie = {
        container: null,
        html: "",
        namespace: "",
        url: { hash: "", href: "", path: "", port: null, query: {} },
      };
      return new ((function () {
        function e() {
          (this.version = "2.9.7"),
            (this.schemaPage = ie),
            (this.Logger = f),
            (this.logger = new f("@barba/core")),
            (this.plugins = []),
            (this.hooks = $),
            (this.dom = L),
            (this.helpers = O),
            (this.history = j),
            (this.request = M),
            (this.url = I);
        }
        var r = e.prototype;
        return (
          (r.use = function (e, t) {
            var n = this.plugins;
            n.indexOf(e) > -1
              ? this.logger.warn("Plugin [" + e.name + "] already installed.")
              : "function" == typeof e.install
              ? (e.install(this, t), n.push(e))
              : this.logger.warn(
                  "Plugin [" + e.name + '] has no "install" method.'
                );
          }),
          (r.init = function (e) {
            var t = void 0 === e ? {} : e,
              r = t.transitions,
              o = void 0 === r ? [] : r,
              i = t.views,
              s = void 0 === i ? [] : i,
              a = t.schema,
              u = void 0 === a ? A : a,
              c = t.requestError,
              h = t.timeout,
              l = void 0 === h ? 2e3 : h,
              d = t.cacheIgnore,
              p = void 0 !== d && d,
              v = t.prefetchIgnore,
              m = void 0 !== v && v,
              g = t.preventRunning,
              y = void 0 !== g && g,
              w = t.prevent,
              b = void 0 === w ? null : w,
              E = t.debug,
              P = t.logLevel;
            if (
              (f.setLevel(
                !0 === (void 0 !== E && E) ? "debug" : void 0 === P ? "off" : P
              ),
              this.logger.info(this.version),
              Object.keys(u).forEach(function (e) {
                A[e] && (A[e] = u[e]);
              }),
              (this.$ = c),
              (this.timeout = l),
              (this.cacheIgnore = p),
              (this.prefetchIgnore = m),
              (this.preventRunning = y),
              (this._ = this.dom.getWrapper()),
              !this._)
            )
              throw new Error("[@barba/core] No Barba wrapper found");
            this._.setAttribute("aria-live", "polite"), this.q();
            var x = this.data.current;
            if (!x.container)
              throw new Error("[@barba/core] No Barba container found");
            if (
              ((this.cache = new F(p)),
              (this.prevent = new ee(m)),
              (this.transitions = new re(o)),
              (this.views = new oe(s)),
              null !== b)
            ) {
              if ("function" != typeof b)
                throw new Error("[@barba/core] Prevent should be a function");
              this.prevent.add("preventCustom", b);
            }
            this.history.init(x.url.href, x.namespace),
              (this.B = this.B.bind(this)),
              (this.U = this.U.bind(this)),
              (this.D = this.D.bind(this)),
              this.F(),
              this.plugins.forEach(function (e) {
                return e.init();
              });
            var k = this.data;
            (k.trigger = "barba"),
              (k.next = k.current),
              (k.current = n({}, this.schemaPage)),
              this.hooks.do("ready", k),
              this.once(k),
              this.q();
          }),
          (r.destroy = function () {
            this.q(),
              this.H(),
              this.history.clear(),
              this.hooks.clear(),
              (this.plugins = []);
          }),
          (r.force = function (e) {
            window.location.assign(e);
          }),
          (r.go = function (e, t, n) {
            var r;
            if ((void 0 === t && (t = "barba"), this.transitions.isRunning))
              this.force(e);
            else if (
              !(r =
                "popstate" === t
                  ? this.history.current &&
                    this.url.getPath(this.history.current.url) ===
                      this.url.getPath(e)
                  : this.prevent.run("sameUrl", null, null, e)) ||
              this.transitions.hasSelf
            )
              return (
                (t = this.history.change(e, t, n)),
                n && (n.stopPropagation(), n.preventDefault()),
                this.page(e, t, r)
              );
          }),
          (r.once = function (e) {
            try {
              var t = this;
              return Promise.resolve(t.hooks.do("beforeEnter", e)).then(
                function () {
                  function n() {
                    return Promise.resolve(t.hooks.do("afterEnter", e)).then(
                      function () {}
                    );
                  }
                  var r = (function () {
                    if (t.transitions.hasOnce) {
                      var n = t.transitions.get(e, { once: !0 });
                      return Promise.resolve(
                        t.transitions.doOnce({ transition: n, data: e })
                      ).then(function () {});
                    }
                  })();
                  return r && r.then ? r.then(n) : n();
                }
              );
            } catch (e) {
              return Promise.reject(e);
            }
          }),
          (r.page = function (e, t, r) {
            try {
              var o = function () {
                  var e = i.data;
                  return Promise.resolve(i.hooks.do("page", e)).then(
                    function () {
                      var t = u(
                        function () {
                          var t = i.transitions.get(e, { once: !1, self: r });
                          return Promise.resolve(
                            i.transitions.doPage({
                              data: e,
                              page: s,
                              transition: t,
                              wrapper: i._,
                            })
                          ).then(function () {
                            i.q();
                          });
                        },
                        function () {
                          0 === f.getLevel() && i.force(e.current.url.href);
                        }
                      );
                      if (t && t.then) return t.then(function () {});
                    }
                  );
                },
                i = this;
              (i.data.next.url = n({ href: e }, i.url.parse(e))),
                (i.data.trigger = t);
              var s = i.cache.has(e)
                  ? i.cache.update(e, { action: "click" }).request
                  : i.cache.set(
                      e,
                      i.request(e, i.timeout, i.onRequestError.bind(i, t)),
                      "click"
                    ).request,
                a = (function () {
                  if (i.transitions.shouldWait)
                    return Promise.resolve(R(s, i.data)).then(function () {});
                })();
              return Promise.resolve(a && a.then ? a.then(o) : o());
            } catch (e) {
              return Promise.reject(e);
            }
          }),
          (r.onRequestError = function (e) {
            this.transitions.isRunning = !1;
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            var o = n[0],
              i = n[1],
              s = this.cache.getAction(o);
            return (
              this.cache.delete(o),
              !(
                (this.$ && !1 === this.$(e, s, o, i)) ||
                ("click" === s && this.force(o), 1)
              )
            );
          }),
          (r.prefetch = function (e) {
            var t = this;
            this.cache.has(e) ||
              this.cache.set(
                e,
                this.request(
                  e,
                  this.timeout,
                  this.onRequestError.bind(this, "barba")
                ).catch(function (e) {
                  t.logger.error(e);
                }),
                "prefetch"
              );
          }),
          (r.F = function () {
            !0 !== this.prefetchIgnore &&
              (document.addEventListener("mouseover", this.B),
              document.addEventListener("touchstart", this.B)),
              document.addEventListener("click", this.U),
              window.addEventListener("popstate", this.D);
          }),
          (r.H = function () {
            !0 !== this.prefetchIgnore &&
              (document.removeEventListener("mouseover", this.B),
              document.removeEventListener("touchstart", this.B)),
              document.removeEventListener("click", this.U),
              window.removeEventListener("popstate", this.D);
          }),
          (r.B = function (e) {
            var t = this,
              n = this.I(e);
            if (n) {
              var r = this.dom.getHref(n);
              this.prevent.checkHref(r) ||
                this.cache.has(r) ||
                this.cache.set(
                  r,
                  this.request(
                    r,
                    this.timeout,
                    this.onRequestError.bind(this, n)
                  ).catch(function (e) {
                    t.logger.error(e);
                  }),
                  "enter"
                );
            }
          }),
          (r.U = function (e) {
            var t = this.I(e);
            if (t)
              return this.transitions.isRunning && this.preventRunning
                ? (e.preventDefault(), void e.stopPropagation())
                : void this.go(this.dom.getHref(t), t, e);
          }),
          (r.D = function (e) {
            this.go(this.url.getHref(), "popstate", e);
          }),
          (r.I = function (e) {
            for (var t = e.target; t && !this.dom.getHref(t); )
              t = t.parentNode;
            if (t && !this.prevent.checkLink(t, e, this.dom.getHref(t)))
              return t;
          }),
          (r.q = function () {
            var e = this.url.getHref(),
              t = {
                container: this.dom.getContainer(),
                html: this.dom.getHtml(),
                namespace: this.dom.getNamespace(),
                url: n({ href: e }, this.url.parse(e)),
              };
            (this.C = {
              current: t,
              next: n({}, this.schemaPage),
              trigger: void 0,
            }),
              this.hooks.do("reset", this.data);
          }),
          t(e, [
            {
              key: "data",
              get: function () {
                return this.C;
              },
            },
            {
              key: "wrapper",
              get: function () {
                return this._;
              },
            },
          ]),
          e
        );
      })())();
    }),
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = a())
      : "function" == typeof define && define.amd
      ? define(a)
      : ((s = s || self).barba = a()),
    barba.init({
      transitions: [{ name: "base", async leave(e) {}, async enter() {} }],
    }),
    (window.PrisonBreak = !1),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    (function () {
      let r = document.querySelector(".button");
      const o = document.querySelectorAll(".js-hidden");
      let i = !0,
        s = document.querySelector(".icon-menu");
      r &&
        r.addEventListener("click", () => {
          (r.textContent = i ? "Hide" : "Show more"),
            (i = !i),
            o.forEach((e) => e.classList.toggle("js-hidden"));
        }),
        s &&
          s.addEventListener("click", function (r) {
            e &&
              (((e = 500) => {
                document.documentElement.classList.contains("lock")
                  ? t(e)
                  : n(e);
              })(),
              document.documentElement.classList.toggle("menu-open"));
          });
    })(),
    (function () {
      function e(e) {
        if ("click" === e.type) {
          const t = e.target;
          if (t.closest("[data-goto]")) {
            const n = t.closest("[data-goto]"),
              r = n.dataset.goto ? n.dataset.goto : "",
              i = !!n.hasAttribute("data-goto-header"),
              s = n.dataset.gotoSpeed ? n.dataset.gotoSpeed : "500";
            o(r, i, s), e.preventDefault();
          }
        } else if ("watcherCallback" === e.type && e.detail) {
          const t = e.detail.entry,
            n = t.target;
          if ("navigator" === n.dataset.watch) {
            const e = n.id,
              r =
                (document.querySelector("[data-goto]._navigator-active"),
                document.querySelector(`[data-goto="${e}"]`));
            t.isIntersecting
              ? r && r.classList.add("_navigator-active")
              : r && r.classList.remove("_navigator-active");
          }
        }
      }
      document.addEventListener("click", e),
        document.addEventListener("watcherCallback", e);
    })();
})();
