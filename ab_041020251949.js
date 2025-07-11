! function(e, t) {
    function r(e, t) {
        function r(e) {
            return decodeURIComponent(e)
        }

        function n(e) {
            return void 0 !== e
        }

        function i(e) {
            return "string" == typeof e
        }

        function a(e) {
            return i(e) && "" !== e.trim() ? '""' === e || "[]" === e || "{}" === e || '"' === e[0] && '"' === e.slice(-1) || "[" === e[0] && "]" === e.slice(-1) || "{" === e[0] && "}" === e.slice(-1) : !1
        }

        function o(e) {
            if (i(e)) {
                if ("true" === e) return !0;
                if ("false" === e) return !1;
                if ("null" === e) return null;
                if ("'" === e.slice(0, 1) && "'" === e.slice(-1)) return e.slice(1, -1);
                if (/^-?(\d*\.)?\d+$/.test(e)) return +e;
                if (a(e)) try {
                    return JSON.parse(e)
                } catch (t) {}
            }
            return e
        }

        function s(e, t, r) {
            for (var n, i = t.split("["), a = 0, o = i.length; o - 1 > a; ++a) n = i[a].replace(/\]$/, ""), e = e[n] || (e[n] = {});
            e[i[a].replace(/\]$/, "")] = r
        }
        var l = {},
            c = e.replace(/^.*?\?/, "");
        return "" === c ? l : (c.split(/&(?:amp;)?/).forEach(function(e) {
            var i = e.split("="),
                a = r(i[0]),
                c = n(i[1]) ? r(i[1]) : !0;
            c = !n(t) || t ? o(c) : c, "]" === a.slice(-1) ? s(l, a, c) : l[a] = c
        }), l)
    }
    e[t] = r
}(window, "q2o"),
function(e, t) {
    function r(e) {
        return encodeURIComponent(e)
    }

    function n(e) {
        return void 0 !== e
    }

    function i(e) {
        return "string" == typeof e
    }

    function a(e) {
        return "number" == typeof e || /^-?(\d*\.)?\d+$/.test(e)
    }

    function o(e) {
        return null !== e && "object" == typeof e
    }

    function s(e, t) {
        t = t || {};
        for (var r in e) n(t[r]) ? o(e[r]) && o(t[r]) && (t[r] = s(e[r], t[r])) : t[r] = e[r];
        return t
    }

    function l(e, t, r) {
        e.addEventListener(t, r, !1)
    }

    function c(e, r, i) {
        if (e = t.createElement(e), n(r) && "" !== r && (e.innerHTML = r), o(i))
            for (var a in i) i[a] !== !1 && e.setAttribute(a, i[a]);
        return e
    }

    function u(e, t) {
        t = t.split(/\s+/);
        for (var r; r = t.shift();) e.classList.add(r)
    }

    function f(e, t) {
        t = t.split(/\s+/);
        for (var r; r = t.shift();) e.classList.remove(r)
    }

    function d(e, t, r) {
        t && e.insertBefore(t, r)
    }

    function p(e) {
        e.parentNode && e.parentNode.removeChild(e)
    }

    function h(e, t) {
        var n, i = [];
        for (n in e) i.push(r(n) + "=" + r(e[n]));
        return "?" + i.join(t || "&")
    }

    function m(e, t) {
        return e = (e + "").split(/[?&#]/)[0].replace(/\/+$/, ""), n(t) && (e = e.replace(/\.[\w-]+$/, t ? "." + t : "")), e
    }

    function g(e) {
        return a(e) ? ("file:" === E.protocol ? "https:" : "") + "//www.blogger.com/feeds/" + e + "/posts/summary" : m(e) + "/feeds/posts/summary"
    }

    function y(e, t, r) {
        var n = /\.css$/i.test(m(e)),
            i = c(n ? "link" : "script", "", s(n ? {
                href: e,
                rel: "stylesheet"
            } : {
                src: e
            }, r));
        return i.readyState ? i.onreadystatechange = function() {
            ("loaded" === i.readyState || "complete" === i.readyState) && (i.onreadystatechange = null, t && t(i))
        } : t && l(i, "load", t), d(z, i, z.firstChild), i
    }

    function v(e, t, r) {
        r = r || [], r.unshift(t), "function" == typeof V && V.apply(e, r)
    }

    function x() {
        if (O !== !1) {
            var e = +(H.getItem(J) || -1);
            if (e > O) return H.setItem(J, 0), !0;
            H.setItem(J, ++e)
        }
        return !1
    }

    function k(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function w(e) {
        if (!j) return e;
        var t = j.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\\\$&");
        return t = t.replace(/\s+/g, "\\s+"), t = RegExp(t, "i"), e.replace(t, "<mark>$&</mark>")
    }

    function $(t) {
        return e.getComputedStyle(W).getPropertyValue(t)
    }

    function b(t) {
        if (!D.container && X.parentNode) {
            var r = P.getBoundingClientRect(),
                n = r.top,
                i = r.left,
                a = r.width,
                o = r.height;
            u(X, J + "-float"), X.style.cssText = "background-color:" + $("background-color") + ";color:" + $("color") + ";position:fixed;z-index:9999;top:" + (n + o) + "px;left:" + i + "px;width:" + a + "px;max-height:" + (e.innerHeight - n - o) + "px;overflow:auto;", v(X, t && t.type || "fit", [r])
        }
    }

    function q(e, t) {
        var r = _[e][t],
            n = X.children[0],
            i = 1 === I ? "empty" : "end";
        d(n, Z), r[0] ? (rt.style.display = I > 1 ? "" : "none", nt.style.display = Q > r[0] ? "none" : "", et.innerHTML = r[1], d(n, et)) : (n.innerHTML = '<p class="' + J + "-results-" + i + '">' + K[i].replace("%s%", k(j)) + "</p>", nt.style.display = "none"), d(n, tt), d(W, X), b(), p(Y)
    }

    function T(e, t) {
        j = e;
        var r = X.children[0];
        d(r, it), d(W, X), b(), p(Y);
        var i = X.parentNode;
        u(i, J + "-loading"), y(g(A) + h(s(D.query, {
            callback: "_" + B,
            "max-results": Q,
            q: e,
            "start-index": t
        })), function() {
            f(i, J + "-loading"), n(_[e]) || (_[e] = {});
            var r = et.innerHTML;
            _[e][t] = [et.children.length, r], q(e, t)
        })
    }

    function N(e) {
        e && e.preventDefault()
    }

    function S() {
        var e, t = this.q;
        t = t && t.value, Z.innerHTML = K.title.replace("%s%", k(t)), X.children[0].innerHTML = "", t ? (t = t.toLowerCase(), (e = !(!_[t] || !_[t][I])) ? q(t, I) : T(t, I), v(P, "search", [t, I, e, X])) : (d(W, Y), p(X))
    }

    function C(t) {
        var r = this;
        t.key && "Enter" === t.key || t.keyCode && 13 === t.keyCode || e.setTimeout(function() {
            ct ? (lt && e.clearTimeout(lt), lt = e.setTimeout(function() {
                S.call(P)
            }, a(ct) ? +ct : 500)) : "" === r.value && (d(W, Y), p(X))
        }, 1)
    }
    var L = e.q2o,
        M = t.currentScript,
        E = e.location,
        H = e.localStorage,
        j = "",
        I = 1,
        _ = {},
        B = Date.now(),
        R = {
            i: B,
            direction: "ltr",
            url: E.protocol + "//" + E.host,
            name: "js-search",
            css: 1,
            ad: !0,
            live: !0,
            source: 'form[action$="/search"]',
            container: 0,
            excerpt: 0,
            image: 0,
            target: 0,
            chunk: 50,
            text: {
                title: "Showing search results for <b>%s%</b>",
                loading: "<svg class='line lrIn' viewBox='0 0 24 24'><path d='M12 3a9 9 0 1 0 9 9'><animateTransform attributeName='transform' attributeType='XML' type='rotate' from='0 12 12' to='360 12 12' dur='0.6s' repeatCount='indefinite'/></path></svg>",
                previous: "Previous",
                next: "Next",
                empty: "No results found for <b>%s%</b>.",
                end: "No more results for <b>%s%</b>."
            },
            query: {
                alt: "json",
                orderby: "updated"
            }
        },
        z = t.head,
        D = s(R, L(M.src)),
        P = t.querySelector(D.source);
    if (P) {
        var U = D.i,
            A = D.id || m(D.url),
            J = D.name,
            O = D.ad,
            V = D.e;
        V = V && e[V], O === !0 && (O = 3);
        var F = L(E.search);
        n(F[U]) && (delete F[U].url, D = s(D, F[U]));
        var G, K = D.text,
            Q = D.chunk,
            W = D.container && t.querySelector(D.container) || t.body,
            X = c("div", "<div></div>", {
                "class": J + " " + D.direction,
                id: J + ":" + U
            }),
            Y = c("div"),
            Z = c("h3", "", {
                "class": J + "-title"
            }),
            et = c("ol", "", {
                "class": J + "-results",
                id: J + "-results:" + U,
                start: I
            }),
            tt = c("nav", "", {
                "class": J + "-pager",
                id: J + "-pager:" + U
            }),
            rt = c("a", K.previous, {
                "class": J + "-previous",
                href: "",
                rel: "prev"
            }),
            nt = c("a", K.next, {
                "class": J + "-next",
                href: "",
                rel: "next"
            }),
            it = c("p", K.loading, {
                "class": J + "-loading"
            });
        l(e, "scroll", b), l(e, "resize", b), e["_" + B] = function(e) {
            e = e.feed || {};
            var n, i, o, m = e.entry || [],
                k = m.length,
                $ = D.target,
                b = D.image,
                q = D.excerpt,
                T = "has-title has-url";
            b && (T += " has-image"), q && (T += " has-excerpt"), u(X, T), G = function(e) {
                if (e) {
                    var t = (e.link.find(function(e) {
                        return "alternate" === e.rel
                    }) || {}).href;
                    if (str = "", t) {
                        if (b) {
                            var r, n, i, o = "media$thumbnail" in e;
                            b === !0 && (b = 80), a(b) ? (r = n = b + "px", b = "s" + b + "-c") : (i = /^s(\d+)(\-[cp])?$/.exec(b)) ? (r = i[1] + "px", n = i[2] ? i[1] + "px" : "auto") : (i = /^w(\d+)\-h(\d+)(\-[cp])?$/.exec(b)) && (r = i[1] + "px", n = i[2] + "px"), str += '<p class="' + J + "-image " + (o ? "loading" : "no-image") + '">', str += o ? '<img alt="" src="' + e.media$thumbnail.url.replace(/\/s\d+(\-c)?\//g, "/" + b + "/") + '" style="display:block;width:' + r + ";height:" + n + ';">' : '<span class="img" style="display:block;width:' + r + ";height:" + n + ';">', str += "</p>"
                        }
                        if (str += '<h4 class="' + J + '-title"><a href="' + t + '?from=search"' + ($ ? ' target="' + $ + '"' : "") + ">" + w(e.title.$t) + "</a></h4>", q) {
                            var s = e.summary.$t.replace(/<.*?>/g, "").replace(/[<>]/g, "").trim(),
                                l = s.length;
                            q === !0 && (q = 200), str += '<p class="' + J + "-excerpt" + (l ? "" : " no-excerpt") + '">' + w(s.slice(0, q)) + (l > q ? "&hellip;" : "") + "</p>"
                        }
                        return c("li", str)
                    }
                }
            }, et.innerHTML = "";
            for (n = 0; k > n; ++n) d(et, G(m[n]));
            p(it), rt.style.display = I > 1 ? "" : "none", nt.style.display = Q > k ? "none" : "", d(tt, rt), d(tt, t.createTextNode(" ")), d(tt, nt);
            var o = X.children[0];
            if (d(o, Z), d(o, et), d(o, tt), b) {
                var N = et.getElementsByTagName("img"),
                    S = function() {
                        u(this.parentNode, "error"), v(this, "error.asset", [this.src])
                    },
                    C = function() {
                        f(this.parentNode, "loading"), v(this, "load.asset", [this.src])
                    };
                for (n = 0, i = N.length; i > n; ++n) l(N[n], "error", S), l(N[n], "load", C)
            }
            x() && y(g("2373733142614845069") + h(s(D.query, {
                callback: "_" + B + "_",
                "max-results": 21,
                orderby: "updated"
            })) + "&q=" + r(j)), v(X, "load", [e, j, I])
        }, e["_" + B + "_"] = function(e) {
            e = e.feed || {};
            var t = e.entry || [];
            t = t[Math.floor(Math.random() * t.length)], (t = G(t)) && (u(t, "ad"), d(et, t, et.firstChild)), v(t, "load.ad", [e])
        }, M.id || (M.id = J + "-js"), u(M, J + "-js");
        var at = D.container,
            ot = D.css;
        if (ot && !t.getElementById(J + "-css") && y(i(ot) ? ot : m(M.src, "css"), function() {
                v(this, "load.asset", [this.href])
            }, {
                "class": J + "-css",
                id: J + "-css"
            }), at && (at = t.querySelector(at))) {
            for (var st; st = at.firstChild;) d(Y, st);
            d(at, Y)
        }
        var lt, ct = D.live;
        l(P, "submit", function(t) {
            et.start = I = 1, lt && e.clearTimeout(lt), S.call(this), N(t)
        }), ["cut", "input", "keydown", "paste"].forEach(function(e) {
            l(P.q, e, C)
        }), l(rt, "click", function(e) {
            et.start = I -= Q, S.call(P), N(e)
        }), l(nt, "click", function(e) {
            et.start = I += Q, S.call(P), N(e)
        }), v(P, "ready", [D, X])
    }
}(window, document);