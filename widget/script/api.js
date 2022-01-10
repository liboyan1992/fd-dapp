!(function (e) {
  function t(e, t, n, r) {
    return (
      'function' == typeof t && ((r = n), (n = t), (t = void 0)),
      'function' != typeof n && ((r = n), (n = void 0)),
      { url: e, data: t, fnSuc: n, dataType: r }
    )
  }
  function n(e) {
    console.warn(
      '$api.' + e + ' Function need el param, el param must be DOM Element'
    )
  }
  var r = {},
    i = /android/gi.test(navigator.appVersion),
    o = i ? os.localStorage() : e.localStorage
  ;(r.trim = function (e) {
    return String.prototype.trim
      ? null == e
        ? ''
        : String.prototype.trim.call(e)
      : e.replace(/(^\s*)|(\s*$)/g, '')
  }),
    (r.trimAll = function (e) {
      return e.replace(/\s*/g, '')
    }),
    (r.isElement = function (e) {
      return !(!e || 1 != e.nodeType)
    }),
    (r.isArray = function (e) {
      return Array.isArray ? Array.isArray(e) : e instanceof Array
    }),
    (r.isEmptyObject = function (e) {
      return '{}' === JSON.stringify(e) ? !0 : !1
    }),
    (r.addEvt = function (e, t, i, o) {
      return r.isElement(e)
        ? ((o = o || !1),
          void (e.addEventListener && e.addEventListener(t, i, o)))
        : void n('addEvt')
    }),
    (r.rmEvt = function (e, t, i, o) {
      return r.isElement(e)
        ? ((o = o || !1),
          void (e.removeEventListener && e.removeEventListener(t, i, o)))
        : void n('rmEvt')
    }),
    (r.one = function (e, t, i, o) {
      if (!r.isElement(e)) return void n('one')
      o = o || !1
      var s = this,
        a = function () {
          i && i(), s.rmEvt(e, t, a, o)
        }
      s.addEvt(e, t, a, o)
    }),
    (r.dom = function (e, t) {
      if (1 === arguments.length && 'string' == typeof arguments[0]) {
        if (document.querySelector) return document.querySelector(arguments[0])
      } else if (2 === arguments.length && e.querySelector)
        return e.querySelector(t)
    }),
    (r.domAll = function (e, t) {
      if (1 === arguments.length && 'string' == typeof arguments[0]) {
        if (document.querySelectorAll)
          return document.querySelectorAll(arguments[0])
      } else if (2 === arguments.length && e.querySelectorAll)
        return e.querySelectorAll(t)
    }),
    (r.byId = function (e) {
      return document.getElementById(e)
    }),
    (r.first = function (e, t) {
      return 1 === arguments.length
        ? r.isElement(e)
          ? e.children[0]
          : void n('first')
        : 2 === arguments.length
        ? this.dom(e, t + ':first-child')
        : void 0
    }),
    (r.last = function (e, t) {
      if (1 === arguments.length) {
        if (!r.isElement(e)) return void n('last')
        var i = e.children
        return i[i.length - 1]
      }
      return 2 === arguments.length ? this.dom(e, t + ':last-child') : void 0
    }),
    (r.eq = function (e, t) {
      return this.dom(e, ':nth-child(' + t + ')')
    }),
    (r.not = function (e, t) {
      return this.domAll(e, ':not(' + t + ')')
    }),
    (r.prev = function (e) {
      if (!r.isElement(e)) return void n('prev')
      var t = e.previousSibling
      return t.nodeType && 3 === t.nodeType ? (t = t.previousSibling) : void 0
    }),
    (r.next = function (e) {
      if (!r.isElement(e)) return void n('next')
      var t = e.nextSibling
      return t.nodeType && 3 === t.nodeType ? (t = t.nextSibling) : void 0
    }),
    (r.closest = function (e, t) {
      if (!r.isElement(e)) return void n('closest')
      var i,
        o,
        s = function (e, t) {
          var n = 0,
            r = e.length
          for (n; r > n; n++) if (e[n].isSameNode(t)) return e[n]
          return !1
        },
        a = function (e, t) {
          for (i = r.domAll(e.parentNode, t), o = s(i, e); !o; ) {
            if (
              ((e = e.parentNode), null != e && e.nodeType == e.DOCUMENT_NODE)
            )
              return !1
            a(e, t)
          }
          return o
        }
      return a(e, t)
    }),
    (r.contains = function (e, t) {
      var n = !1
      if (t === e) return (n = !0)
      do if (((t = t.parentNode), t === e)) return (n = !0)
      while (t === document.body || t === document.documentElement)
      return n
    }),
    (r.remove = function (e) {
      e && e.parentNode && e.parentNode.removeChild(e)
    }),
    (r.attr = function (e, t, i) {
      return r.isElement(e)
        ? 2 == arguments.length
          ? e.getAttribute(t)
          : 3 == arguments.length
          ? (e.setAttribute(t, i), e)
          : void 0
        : void n('attr')
    }),
    (r.removeAttr = function (e, t) {
      return r.isElement(e)
        ? void (2 === arguments.length && e.removeAttribute(t))
        : void n('removeAttr')
    }),
    (r.hasCls = function (e, t) {
      return r.isElement(e)
        ? e.classList
          ? e.classList.contains(t)
          : new RegExp('(^|\\s)' + t + '(\\s|$)').test(e.className)
        : void n('hasCls')
    }),
    (r.addCls = function (e, t) {
      if (!r.isElement(e)) return void n('addCls')
      if (e.classList) e.classList.add(t)
      else {
        var i = e.className,
          o = i + ' ' + t
        e.className = o
      }
      return e
    }),
    (r.removeCls = function (e, t) {
      if (!r.isElement(e)) return void n('removeCls')
      if (e.classList) e.classList.remove(t)
      else {
        var i = e.className,
          o = i.replace(t, '')
        e.className = o
      }
      return e
    }),
    (r.toggleCls = function (e, t) {
      return r.isElement(e)
        ? (e.classList
            ? e.classList.toggle(t)
            : r.hasCls(e, t)
            ? r.removeCls(e, t)
            : r.addCls(e, t),
          e)
        : void n('toggleCls')
    }),
    (r.val = function (e, t) {
      if (!r.isElement(e)) return void n('val')
      if (1 === arguments.length)
        switch (e.tagName) {
          case 'SELECT':
            var i = e.options[e.selectedIndex].value
            return i
          case 'INPUT':
            return e.value
          case 'TEXTAREA':
            return e.value
        }
      if (2 === arguments.length)
        switch (e.tagName) {
          case 'SELECT':
            return (e.options[e.selectedIndex].value = t), e
          case 'INPUT':
            return (e.value = t), e
          case 'TEXTAREA':
            return (e.value = t), e
        }
    }),
    (r.prepend = function (e, t) {
      return r.isElement(e)
        ? (e.insertAdjacentHTML('afterbegin', t), e)
        : void n('prepend')
    }),
    (r.append = function (e, t) {
      return r.isElement(e)
        ? (e.insertAdjacentHTML('beforeend', t), e)
        : void n('append')
    }),
    (r.before = function (e, t) {
      return r.isElement(e)
        ? (e.insertAdjacentHTML('beforebegin', t), e)
        : void n('before')
    }),
    (r.after = function (e, t) {
      return r.isElement(e)
        ? (e.insertAdjacentHTML('afterend', t), e)
        : void n('after')
    }),
    (r.html = function (e, t) {
      return r.isElement(e)
        ? 1 === arguments.length
          ? e.innerHTML
          : 2 === arguments.length
          ? ((e.innerHTML = t), e)
          : void 0
        : void n('html')
    }),
    (r.text = function (e, t) {
      return r.isElement(e)
        ? 1 === arguments.length
          ? e.textContent
          : 2 === arguments.length
          ? ((e.textContent = t), e)
          : void 0
        : void n('text')
    }),
    (r.offset = function (e) {
      if (!r.isElement(e)) return void n('offset')
      var t = Math.max(
          document.documentElement.scrollLeft,
          document.body.scrollLeft
        ),
        i = Math.max(
          document.documentElement.scrollTop,
          document.body.scrollTop
        ),
        o = e.getBoundingClientRect()
      return {
        l: o.left + t,
        t: o.top + i,
        w: e.offsetWidth,
        h: e.offsetHeight,
      }
    }),
    (r.css = function (e, t) {
      return r.isElement(e)
        ? void (
            'string' == typeof t &&
            t.indexOf(':') > 0 &&
            e.style &&
            (e.style.cssText += ';' + t)
          )
        : void n('css')
    }),
    (r.cssVal = function (t, i) {
      if (!r.isElement(t)) return void n('cssVal')
      if (2 === arguments.length) {
        var o = e.getComputedStyle(t, null)
        return o.getPropertyValue(i)
      }
    }),
    (r.jsonToStr = function (e) {
      return 'object' == typeof e ? JSON && JSON.stringify(e) : void 0
    }),
    (r.strToJson = function (e) {
      return 'string' == typeof e ? JSON && JSON.parse(e) : void 0
    }),
    (r.setStorage = function (e, t) {
      if (2 === arguments.length) {
        var n = t
        'object' == typeof n
          ? ((n = JSON.stringify(n)), (n = 'obj-' + n))
          : (n = 'str-' + n),
          o && o.setItem(e, n)
      }
    }),
    (r.getStorage = function (e) {
      if (o) {
        var t = o.getItem(e)
        if (!t) return
        if (0 === t.indexOf('obj-')) return (t = t.slice(4)), JSON.parse(t)
        if (0 === t.indexOf('str-')) return t.slice(4)
      }
    }),
    (r.rmStorage = function (e) {
      o && e && o.removeItem(e)
    }),
    (r.clearStorage = function () {
      o && o.clear()
    }),
    (r.fixIos7Bar = function (e) {
      return i ? 0 : r.fixStatusBar(e)
    }),
    (r.fixStatusBar = function (e) {
      return r.isElement(e)
        ? ((e.style.paddingTop = api.safeArea.top + 'px'), e.offsetHeight)
        : (n('fixStatusBar'), 0)
    }),
    (r.fixTabBar = function (e) {
      return r.isElement(e)
        ? ((e.style.paddingBottom = api.safeArea.bottom + 'px'), e.offsetHeight)
        : (n('fixTabBar'), 0)
    }),
    (r.toast = function (e, t, n) {
      var r = {},
        i = function (e, t) {
          api.showProgress(e),
            setTimeout(function () {
              api.hideProgress()
            }, t)
        }
      if (1 === arguments.length) {
        var n = n || 500
        'number' == typeof e ? (n = e) : (r.title = e + ''), i(r, n)
      } else if (2 === arguments.length) {
        var n = n || 500,
          t = t
        if ('number' == typeof t) {
          var o = t
          ;(n = o), (t = null)
        }
        e && (r.title = e), t && (r.text = t), i(r, n)
      }
      e && (r.title = e), t && (r.text = t), (n = n || 500), i(r, n)
    }),
    (r.post = function () {
      var e = t.apply(null, arguments),
        n = {},
        r = e.fnSuc
      if ((e.url && (n.url = e.url), e.data && (n.data = e.data), e.dataType)) {
        var i = e.dataType.toLowerCase()
        ;('text' == i || 'json' == i) && (n.dataType = i)
      } else n.dataType = 'json'
      ;(n.method = 'post'),
        api.ajax(n, function (e, t) {
          e && r && r(e)
        })
    }),
    (r.get = function () {
      var e = t.apply(null, arguments),
        n = {},
        r = e.fnSuc
      if ((e.url && (n.url = e.url), e.dataType)) {
        var i = e.dataType.toLowerCase()
        ;('text' == i || 'json' == i) && (n.dataType = i)
      } else n.dataType = 'text'
      ;(n.method = 'get'),
        api.ajax(n, function (e, t) {
          e && r && r(e)
        })
    }),
    (e.$api = r)
})(window)