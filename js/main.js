/* =========================================================
   JTB Enterprises — small bits of interaction.
   The site works without this file; it just adds:
   1. the "Water where it shouldn't be?" accordion
   2. the services switcher (hover / click a service name)
   3. the review carousel (prev / next buttons)
   4. the projects filter and pop-up on the Projects page
   5. pre-selecting the project type on the Contact form
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 1. Accordion: only one row open at a time ---------- */
  var accButtons = document.querySelectorAll('.acc-btn');
  accButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var wasOpen = btn.getAttribute('aria-expanded') === 'true';
      accButtons.forEach(function (other) { setAcc(other, false); });
      if (!wasOpen) setAcc(btn, true);
    });
  });
  function setAcc(btn, open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.querySelector('.acc-sign').textContent = open ? '−' : '+';
    document.getElementById(btn.getAttribute('aria-controls')).hidden = !open;
  }

  /* ---------- 2. Services switcher ---------- */
  var svcButtons = document.querySelectorAll('.svc-btn');
  function pickService(index) {
    svcButtons.forEach(function (b, i) {
      b.setAttribute('aria-selected', i === index ? 'true' : 'false');
      document.getElementById(b.getAttribute('aria-controls')).hidden = i !== index;
    });
  }
  svcButtons.forEach(function (btn, i) {
    btn.addEventListener('mouseenter', function () { pickService(i); });
    btn.addEventListener('click', function () { pickService(i); });
  });
  // Nav links like index.html#excavation open the right service
  var hashToService = { '#drainage-service': 0, '#excavation': 1, '#landscaping': 2 };
  function serviceFromHash() {
    if (svcButtons.length && location.hash in hashToService) {
      pickService(hashToService[location.hash]);
      document.getElementById('services').scrollIntoView();
    }
  }
  serviceFromHash();
  window.addEventListener('hashchange', serviceFromHash);

  /* ---------- 3. Review carousel (wraps around) ---------- */
  var reviews = document.querySelectorAll('[data-carousel] .review');
  if (reviews.length) {
    var current = 0;
    var pos = document.querySelector('.review-pos');
    function showReview(i) {
      current = (i + reviews.length) % reviews.length;
      reviews.forEach(function (r, n) { r.hidden = n !== current; });
      if (pos) pos.textContent = (current + 1) + ' of ' + reviews.length;
    }
    document.querySelector('[data-review-prev]').addEventListener('click', function () { showReview(current - 1); });
    document.querySelector('[data-review-next]').addEventListener('click', function () { showReview(current + 1); });
    showReview(0);
  }

  /* ---------- 4. Projects page: filter + pop-up ---------- */
  var filterButtons = document.querySelectorAll('.filter-btn');
  var tiles = document.querySelectorAll('.tiles .tile[data-cat]');
  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var cat = btn.getAttribute('data-filter');
      filterButtons.forEach(function (b) { b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
      tiles.forEach(function (t) {
        var cats = t.getAttribute('data-cat').split(' ');
        t.hidden = !(cat === 'all' || cats.indexOf(cat) !== -1);
      });
    });
  });

  var dialog = document.querySelector('.case-dialog');
  if (dialog) {
    var dialogBody = dialog.querySelector('.case-body');
    tiles.forEach(function (tile) {
      tile.addEventListener('click', function () {
        var source = document.getElementById(tile.getAttribute('data-case'));
        dialogBody.innerHTML = '';
        var copy = source.cloneNode(true);
        copy.removeAttribute('id');
        dialogBody.appendChild(copy);
        dialog.showModal();
      });
    });
    dialog.querySelector('.case-close').addEventListener('click', function () { dialog.close(); });
    // Click on the dark area outside the box closes it
    dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });
  }

  /* ---------- 5. Contact form: ?type=drainage pre-selects the project type ---------- */
  var typeSelect = document.getElementById('project-type');
  if (typeSelect) {
    var type = new URLSearchParams(location.search).get('type');
    var option = type && typeSelect.querySelector('option[data-key="' + type + '"]');
    if (option) option.selected = true;
  }
});
