(function (e, t, i) {
    function o(i, o, n) {
        var r = t.createElement(i);
        return o && (r.id = Z + o), n && (r.style.cssText = n), e(r)
    }

    function n() {
        return i.innerHeight ? i.innerHeight : e(i).height()
    }

    function r(e) {
        var t = k.length, i = (j + e) % t;
        return 0 > i ? t + i : i
    }

    function h(e, t) {
        return Math.round((/%/.test(e) ? ("x" === t ? E.width() : n()) / 100 : 1) * parseInt(e, 10))
    }

    function s(e, t) {
        return e.photo || e.photoRegex.test(t)
    }

    function l(e, t) {
        return e.retinaUrl && i.devicePixelRatio > 1 ? t.replace(e.photoRegex, e.retinaSuffix) : t
    }

    function a(e) {
        "contains" in g[0] && !g[0].contains(e.target) && (e.stopPropagation(), g.focus())
    }

    function d() {
        var t, i = e.data(N, Y);
        null == i ? (B = e.extend({}, X), console && console.log && console.log("Error: cboxElement missing settings object")) : B = e.extend({}, i);
        for (t in B)e.isFunction(B[t]) && "on" !== t.slice(0, 2) && (B[t] = B[t].call(N));
        B.rel = B.rel || N.rel || e(N).data("rel") || "nofollow", B.href = B.href || e(N).attr("href"), B.title = B.title || N.title, "string" == typeof B.href && (B.href = e.Interior(B.href))
    }

    function c(i, o) {
        e(t).trigger(i), st.triggerHandler(i), e.isFunction(o) && o.call(N)
    }

    function u(i) {
        q || (N = i, d(), k = e(N), j = 0, "nofollow" !== B.rel && (k = e("." + et).filter(function () {
            var t, i = e.data(this, Y);
            return i && (t = e(this).data("rel") || i.rel || this.rel), t === B.rel
        }), j = k.index(N), -1 === j && (k = k.add(N), j = k.length - 1)), w.css({
            opacity: parseFloat(B.opacity),
            cursor: B.overlayClose ? "pointer" : "auto",
            visibility: "visible"
        }).show(), J && g.add(w).removeClass(J), B.className && g.add(w).addClass(B.className), J = B.className, B.closeButton ? K.html(B.close).appendTo(x) : K.appendTo("<div/>"), U || (U = $ = !0, g.css({
            visibility: "hidden",
            display: "block"
        }), H = o(lt, "LoadedContent", "width:0; height:0; overflow:hidden"), x.css({
            width: "",
            height: ""
        }).append(H), O = y.height() + C.height() + x.outerHeight(!0) - x.height(), _ = b.width() + T.width() + x.outerWidth(!0) - x.width(), D = H.outerHeight(!0), A = H.outerWidth(!0), B.w = h(B.initialWidth, "x"), B.h = h(B.initialHeight, "y"), H.css({
            width: "",
            height: B.h
        }), Q.position(), c(tt, B.onOpen), P.add(L).hide(), g.focus(), B.trapFocus && t.addEventListener && (t.addEventListener("focus", a, !0), st.one(rt, function () {
            t.removeEventListener("focus", a, !0)
        })), B.returnFocus && st.one(rt, function () {
            e(N).focus()
        })), m())
    }

    function f() {
        !g && t.body && (V = !1, E = e(i), g = o(lt).attr({
            id: Y,
            "class": e.support.opacity === !1 ? Z + "IE" : "",
            role: "dialog",
            tabindex: "-1"
        }).hide(), w = o(lt, "Overlay").hide(), W = e([o(lt, "LoadingOverlay")[0], o(lt, "LoadingGraphic")[0]]), v = o(lt, "Wrapper"), x = o(lt, "Content").append(L = o(lt, "Title"), S = o(lt, "Current"), I = e('<button type="button"/>').attr({id: Z + "Previous"}), R = e('<button type="button"/>').attr({id: Z + "Next"}), M = o("button", "Slideshow"), W), K = e('<button type="button"/>').attr({id: Z + "Close"}), v.append(o(lt).append(o(lt, "TopLeft"), y = o(lt, "TopCenter"), o(lt, "TopRight")), o(lt, !1, "clear:left").append(b = o(lt, "MiddleLeft"), x, T = o(lt, "MiddleRight")), o(lt, !1, "clear:left").append(o(lt, "BottomLeft"), C = o(lt, "BottomCenter"), o(lt, "BottomRight"))).find("div div").css({"float": "left"}), F = o(lt, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), P = R.add(I).add(S).add(M), e(t.body).append(w, g.append(v, F)))
    }

    function p() {
        function i(e) {
            e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey || (e.preventDefault(), u(this))
        }

        return g ? (V || (V = !0, R.click(function () {
            Q.next()
        }), I.click(function () {
            Q.prev()
        }), K.click(function () {
            Q.close()
        }), w.click(function () {
            B.overlayClose && Q.close()
        }), e(t).bind("keydown." + Z, function (e) {
            var t = e.keyCode;
            U && B.escKey && 27 === t && (e.preventDefault(), Q.close()), U && B.arrowKey && k[1] && !e.altKey && (37 === t ? (e.preventDefault(), I.click()) : 39 === t && (e.preventDefault(), R.click()))
        }), e.isFunction(e.fn.on) ? e(t).on("click." + Z, "." + et, i) : e("." + et).live("click." + Z, i)), !0) : !1
    }

    function m() {
        var n, r, a, u = Q.prep, f = ++at;
        $ = !0, z = !1, N = k[j], d(), c(ht), c(it, B.onLoad), B.h = B.height ? h(B.height, "y") - D - O : B.innerHeight && h(B.innerHeight, "y"), B.w = B.width ? h(B.width, "x") - A - _ : B.innerWidth && h(B.innerWidth, "x"), B.mw = B.w, B.mh = B.h, B.maxWidth && (B.mw = h(B.maxWidth, "x") - A - _, B.mw = B.w && B.w < B.mw ? B.w : B.mw), B.maxHeight && (B.mh = h(B.maxHeight, "y") - D - O, B.mh = B.h && B.h < B.mh ? B.h : B.mh), n = B.href, G = setTimeout(function () {
            W.show()
        }, 100), B.inline ? (a = o(lt).hide().insertBefore(e(n)[0]), st.one(ht, function () {
            a.replaceWith(H.children())
        }), u(e(n))) : B.iframe ? u(" ") : B.html ? u(B.html) : s(B, n) ? (n = l(B, n), z = t.createElement("img"), e(z).addClass(Z + "Photo").bind("error", function () {
            B.title = !1, u(o(lt, "Error").html(B.imgError))
        }).one("load", function () {
            var t;
            f === at && (e.each(["alt", "longdesc", "aria-describedby"], function (t, i) {
                var o = e(N).attr(i) || e(N).attr("data-" + i);
                o && z.setAttribute(i, o)
            }), B.retinaImage && i.devicePixelRatio > 1 && (z.height = z.height / i.devicePixelRatio, z.width = z.width / i.devicePixelRatio), B.scalePhotos && (r = function () {
                z.height -= z.height * t, z.width -= z.width * t
            }, B.mw && z.width > B.mw && (t = (z.width - B.mw) / z.width, r()), B.mh && z.height > B.mh && (t = (z.height - B.mh) / z.height, r())), B.h && (z.style.marginTop = Math.max(B.mh - z.height, 0) / 2 + "px"), k[1] && (B.loop || k[j + 1]) && (z.style.cursor = "pointer", z.onclick = function () {
                Q.next()
            }), z.style.width = z.width + "px", z.style.height = z.height + "px", setTimeout(function () {
                u(z)
            }, 1))
        }), setTimeout(function () {
            z.src = n
        }, 1)) : n && F.load(n, B.data, function (t, i) {
            f === at && u("error" === i ? o(lt, "Error").html(B.xhrError) : e(this).contents())
        })
    }

    var w, g, v, x, y, b, T, C, k, E, H, F, W, L, S, M, R, I, K, P, B, O, _, D, A, N, j, z, U, $, q, G, Q, J, V, X = {
        html: !1,
        photo: !1,
        iframe: !1,
        inline: !1,
        transition: "elastic",
        speed: 300,
        fadeOut: 300,
        width: !1,
        initialWidth: "600",
        innerWidth: !1,
        maxWidth: !1,
        height: !1,
        initialHeight: "450",
        innerHeight: !1,
        maxHeight: !1,
        scalePhotos: !0,
        scrolling: !0,
        href: !1,
        title: !1,
        rel: !1,
        opacity: .9,
        preloading: !0,
        className: !1,
        overlayClose: !0,
        escKey: !0,
        arrowKey: !0,
        top: !1,
        bottom: !1,
        left: !1,
        right: !1,
        fixed: !1,
        data: void 0,
        closeButton: !0,
        fastIframe: !0,
        open: !1,
        reposition: !0,
        loop: !0,
        slideshow: !1,
        slideshowAuto: !0,
        slideshowSpeed: 2500,
        slideshowStart: "start slideshow",
        slideshowStop: "stop slideshow",
        photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr)((#|\?).*)?$/i,
        retinaImage: !1,
        retinaUrl: !1,
        retinaSuffix: "@2x.$1",
        current: "image {current} of {total}",
        previous: "previous",
        next: "next",
        close: "close",
        xhrError: "This content failed to load.",
        imgError: "This image failed to load.",
        returnFocus: !0,
        trapFocus: !0,
        onOpen: !1,
        onLoad: !1,
        onComplete: !1,
        onCleanup: !1,
        onClosed: !1
    }, Y = "colorbox", Z = "cbox", et = Z + "Element", tt = Z + "_open", it = Z + "_load", ot = Z + "_complete", nt = Z + "_cleanup", rt = Z + "_closed", ht = Z + "_purge", st = e("<a/>"), lt = "div", at = 0, dt = {}, ct = function () {
        function e() {
            clearTimeout(h)
        }

        function t() {
            (B.loop || k[j + 1]) && (e(), h = setTimeout(Q.next, B.slideshowSpeed))
        }

        function i() {
            M.html(B.slideshowStop).unbind(l).one(l, o), st.bind(ot, t).bind(it, e), g.removeClass(s + "off").addClass(s + "on")
        }

        function o() {
            e(), st.unbind(ot, t).unbind(it, e), M.html(B.slideshowStart).unbind(l).one(l, function () {
                Q.next(), i()
            }), g.removeClass(s + "on").addClass(s + "off")
        }

        function n() {
            r = !1, M.hide(), e(), st.unbind(ot, t).unbind(it, e), g.removeClass(s + "off " + s + "on")
        }

        var r, h, s = Z + "Slideshow_", l = "click." + Z;
        return function () {
            r ? B.slideshow || (st.unbind(nt, n), n()) : B.slideshow && k[1] && (r = !0, st.one(nt, n), B.slideshowAuto ? i() : o(), M.show())
        }
    }();
    e.colorbox || (e(f), Q = e.fn[Y] = e[Y] = function (t, i) {
        var o = this;
        if (t = t || {}, f(), p()) {
            if (e.isFunction(o))o = e("<a/>"), t.open = !0; else if (!o[0])return o;
            i && (t.onComplete = i), o.each(function () {
                e.data(this, Y, e.extend({}, e.data(this, Y) || X, t))
            }).addClass(et), (e.isFunction(t.open) && t.open.call(o) || t.open) && u(o[0])
        }
        return o
    }, Q.position = function (t, i) {
        function o() {
            y[0].style.width = C[0].style.width = x[0].style.width = parseInt(g[0].style.width, 10) - _ + "px", x[0].style.height = b[0].style.height = T[0].style.height = parseInt(g[0].style.height, 10) - O + "px"
        }

        var r, s, l, a = 0, d = 0, c = g.offset();
        if (E.unbind("resize." + Z), g.css({
                top: -9e4,
                left: -9e4
            }), s = E.scrollTop(), l = E.scrollLeft(), B.fixed ? (c.top -= s, c.left -= l, g.css({position: "fixed"})) : (a = s, d = l, g.css({position: "absolute"})), d += B.right !== !1 ? Math.max(E.width() - B.w - A - _ - h(B.right, "x"), 0) : B.left !== !1 ? h(B.left, "x") : Math.round(Math.max(E.width() - B.w - A - _, 0) / 2), a += B.bottom !== !1 ? Math.max(n() - B.h - D - O - h(B.bottom, "y"), 0) : B.top !== !1 ? h(B.top, "y") : Math.round(Math.max(n() - B.h - D - O, 0) / 2), g.css({
                top: c.top,
                left: c.left,
                visibility: "visible"
            }), v[0].style.width = v[0].style.height = "9999px", r = {
                width: B.w + A + _,
                height: B.h + D + O,
                top: a,
                left: d
            }, t) {
            var u = 0;
            e.each(r, function (e) {
                return r[e] !== dt[e] ? (u = t, void 0) : void 0
            }), t = u
        }
        dt = r, t || g.css(r), g.dequeue().animate(r, {
            duration: t || 0, complete: function () {
                o(), $ = !1, v[0].style.width = B.w + A + _ + "px", v[0].style.height = B.h + D + O + "px", B.reposition && setTimeout(function () {
                    E.bind("resize." + Z, function () {
                        Q.position()
                    })
                }, 1), e.isFunction(i) && i()
            }, step: o
        })
    }, Q.resize = function (e) {
        var t;
        U && (e = e || {}, e.width && (B.w = h(e.width, "x") - A - _), e.innerWidth && (B.w = h(e.innerWidth, "x")), H.css({width: B.w}), e.height && (B.h = h(e.height, "y") - D - O), e.innerHeight && (B.h = h(e.innerHeight, "y")), e.innerHeight || e.height || (t = H.scrollTop(), H.css({height: "auto"}), B.h = H.height()), H.css({height: B.h}), t && H.scrollTop(t), Q.position("none" === B.transition ? 0 : B.speed))
    }, Q.prep = function (i) {
        function n() {
            return B.w = B.w || H.width(), B.w = B.mw && B.mw < B.w ? B.mw : B.w, B.w
        }

        function h() {
            return B.h = B.h || H.height(), B.h = B.mh && B.mh < B.h ? B.mh : B.h, B.h
        }

        if (U) {
            var a, d = "none" === B.transition ? 0 : B.speed;
            H.empty().remove(), H = o(lt, "LoadedContent").append(i), H.hide().appendTo(F.show()).css({
                width: n(),
                overflow: B.scrolling ? "auto" : "hidden"
            }).css({height: h()}).prependTo(x), F.hide(), e(z).css({"float": "none"}), a = function () {
                function i() {
                    e.support.opacity === !1 && g[0].style.removeAttribute("filter")
                }

                var n, h, a = k.length, u = "frameBorder", f = "allowTransparency";
                U && (h = function () {
                    clearTimeout(G), W.hide(), c(ot, B.onComplete)
                }, L.html(B.title).add(H).show(), a > 1 ? ("string" == typeof B.current && S.html(B.current.replace("{current}", j + 1).replace("{total}", a)).show(), R[B.loop || a - 1 > j ? "show" : "hide"]().html(B.next), I[B.loop || j ? "show" : "hide"]().html(B.previous), ct(), B.preloading && e.each([r(-1), r(1)], function () {
                    var i, o, n = k[this], r = e.data(n, Y);
                    r && r.href ? (i = r.href, e.isFunction(i) && (i = i.call(n))) : i = e(n).attr("href"), i && s(r, i) && (i = l(r, i), o = t.createElement("img"), o.src = i)
                })) : P.hide(), B.iframe ? (n = o("iframe")[0], u in n && (n[u] = 0), f in n && (n[f] = "true"), B.scrolling || (n.scrolling = "no"), e(n).attr({
                    src: B.href,
                    name: (new Date).getTime(),
                    "class": Z + "Iframe",
                    allowFullScreen: !0,
                    webkitAllowFullScreen: !0,
                    mozallowfullscreen: !0
                }).one("load", h).appendTo(H), st.one(ht, function () {
                    n.src = "//about:blank"
                }), B.fastIframe && e(n).trigger("load")) : h(), "fade" === B.transition ? g.fadeTo(d, 1, i) : i())
            }, "fade" === B.transition ? g.fadeTo(d, 0, function () {
                Q.position(0, a)
            }) : Q.position(d, a)
        }
    }, Q.next = function () {
        !$ && k[1] && (B.loop || k[j + 1]) && (j = r(1), u(k[j]))
    }, Q.prev = function () {
        !$ && k[1] && (B.loop || j) && (j = r(-1), u(k[j]))
    }, Q.close = function () {
        U && !q && (q = !0, U = !1, c(nt, B.onCleanup), E.unbind("." + Z), w.fadeTo(B.fadeOut || 0, 0), g.stop().fadeTo(B.fadeOut || 0, 0, function () {
            g.add(w).css({opacity: 1, cursor: "auto"}).hide(), c(ht), H.empty().remove(), setTimeout(function () {
                q = !1, c(rt, B.onClosed)
            }, 1)
        }))
    }, Q.remove = function () {
        g && (g.stop(), e.colorbox.close(), g.stop().remove(), w.remove(), q = !1, g = null, e("." + et).removeData(Y).removeClass(et), e(t).unbind("click." + Z))
    }, Q.element = function () {
        return e(N)
    }, Q.settings = X)
})(jQuery, document, window);
jQuery(document).ready(function () {
    jQuery(window).resize(function () {
        jQuery('a.gallery_colorbox').colorbox({
            maxWidth: Math.min(1200, Math.floor(0.95 * jQuery(window).width()) - 80),
            maxHeight: Math.min(1200, Math.floor(0.95 * jQuery(window).height()) - 80)
        });
    });
    jQuery('a.gallery_colorbox').colorbox({
        slideshow: true,
        title: false,
        slideshowAuto: false,
        slideshowSpeed: 5000,
        slideshowStart: 'Play',
        slideshowStop: 'Пауза',
        current: 'Image {current} of {total}',
        scalePhotos: true,
        previous: 'Предыдущее фото',
        next: 'Следующее фото',
        close: 'Закрыть',
        maxWidth: Math.min(1200, Math.floor(0.95 * jQuery(window).width()) - 80),
        maxHeight: Math.min(1200, Math.floor(0.95 * jQuery(window).height()) - 80),
        opacity: 0.8,
        onComplete: function () {
            jQuery("#cboxLoadedContent").css({overflow: 'hidden'});
            jQuery("#colorbox").css({overflow: 'visible'});
        },
        rel: 'group1'
    });
});