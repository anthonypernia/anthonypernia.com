(function () {
  var el = document.getElementById('email-link');
  if (el) {
    var u = 'emailfrompage+anthonyperniah';
    var d = 'gmail.com';
    el.href = 'mailto:' + u + '@' + d;
  }

  var yearEl = document.getElementById('footer-year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
})();
