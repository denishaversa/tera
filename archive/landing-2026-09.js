
(function () {
  // Topographic contours: the "terra" motif. One gold ring marks the decision.
  var svg = document.getElementById('topo');
  var NS = 'http://www.w3.org/2000/svg';
  var rings = 20, cx = 300, cy = 300, decisionRing = 12;
  for (var i = 0; i < rings; i++) {
    var base = 26 + i * 13.5, pts = [], steps = 140;
    for (var s = 0; s < steps; s++) {
      var a = (s / steps) * Math.PI * 2;
      var r = base + 7 * Math.sin(3 * a + i * 0.35) + 5 * Math.sin(5 * a - i * 0.25) + i * 0.9 * Math.sin(2 * a + 1.2);
      pts.push((cx + r * Math.cos(a)).toFixed(1) + ',' + (cy + r * Math.sin(a)).toFixed(1));
    }
    var p = document.createElementNS(NS, 'path');
    p.setAttribute('d', 'M' + pts.join('L') + 'Z');
    p.setAttribute('pathLength', '1');
    p.style.setProperty('--i', i);
    if (i === decisionRing) p.setAttribute('class', 'decision');
    svg.appendChild(p);
  }

  // Demo drawers
  function wire(btnId, drawerId) {
    var btn = document.getElementById(btnId), drawer = document.getElementById(drawerId);
    btn.addEventListener('click', function () {
      var open = drawer.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  wire('btn-evidence', 'drawer-evidence');
  wire('btn-alts', 'drawer-alts');
})();
