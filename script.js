(function () {
  var el = document.getElementById('email-link');
  if (el) {
    var u = 'emailfrompage+anthonyperniah';
    var d = 'gmail.com';
    el.href = 'mailto:' + u + '@' + d;
  }

  var yearEl = document.getElementById('footer-year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  var btn = document.getElementById('theme-toggle');
  if (btn) {
    var root = document.documentElement;
    var sync = function () { btn.textContent = root.dataset.theme === 'light' ? 'Dark' : 'Light'; };
    sync();
    btn.addEventListener('click', function () {
      var next = root.dataset.theme === 'light' ? 'dark' : 'light';
      root.dataset.theme = next;
      try { localStorage.theme = next; } catch (e) {}
      sync();
    });
  }
})();
