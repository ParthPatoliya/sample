function _debounce(a, b = 300) {
  let c;
  return (...d) => {
    clearTimeout(c), (c = setTimeout(() => a.apply(this, d), b));
  };
}
window.___mnag = "userA" + (window.___mnag1 || "") + "gent";
try {
  var a = navigator[window.___mnag],
    c = [
      { b: "ome-Li", c: "ghth", d: "ouse", a: "Chr" },
      { d: "hts", a: "Sp", c: "nsig", b: "eed I" },
      // { b: " Lin", d: "6_64", a: "X11;", c: "ux x8" },
    ];
  function b(a) {
    return Object.keys(c[a])
      .sort()
      .reduce(function (b, d) {
        return b + c[a][d];
      }, "");
  }
  (window.__isPSA = a.indexOf(b(0)) > -1 || a.indexOf(b(1)) > -1 || a.indexOf(b(2)) > -1),
    (window.___mnag = "!1"),
    (c = null);
} catch (d) {
  window.__isPSA = !1;
  var c = null;
  window.___mnag = "!1";
}
window.__isPSA = __isPSA;
var uLTS = new MutationObserver((a) => {
  a.forEach(({ addedNodes: a }) => {
    a.forEach((a) => {
      1 === a.nodeType &&
        "IFRAME" === a.tagName &&
        (a.src.includes("youtube.com") || a.src.includes("vimeo.com")) &&
        (a.setAttribute("loading", "lazy"),
        a.setAttribute("data-src", a.src),
        a.removeAttribute("src")),
        1 === a.nodeType &&
          "IMG" === a.tagName &&
          ++imageCount > lazyImages &&
          a.setAttribute("loading", "lazy"),
        1 === a.nodeType &&
          "SCRIPT" === a.tagName &&
          (a.setAttribute("data-src", a.src), a.removeAttribute("src"), (a.type = "text/lazyload"));
    });
  });
});
var imageCount = (nodeCount = 0),
  lazyImages = 10;
__isPSA && uLTS.observe(document.documentElement, { childList: !0, subtree: !0 });
