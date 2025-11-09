document.addEventListener('DOMContentLoaded', () => {
  const rainRoot = document.querySelector('.rain');
  if (!rainRoot) return;

  const DROPS = 180;
  for (let i = 0; i < DROPS; i++) {
    const span = document.createElement('span');

    const x = Math.random() * 100;                // left position in %
    const h = 10 + Math.random() * 20;            // height px
    const dur = 1.0 + Math.random() * 1.4;        // seconds
    const delay = -Math.random() * 2.0;           // negative to desync starts

    span.style.setProperty('--x', x.toFixed(2) + '%');
    span.style.setProperty('--h', h.toFixed(1) + 'px');
    span.style.setProperty('--dur', dur.toFixed(2) + 's');
    span.style.setProperty('--del', delay.toFixed(2) + 's');

    rainRoot.appendChild(span);
  }
});
