const h1 = document.getElementById('color');
const h1parent = h1.parentElement;

const p = document.createElement('p');
p.setAttribute('id', 'color');
p.textContent = 'new replacement element';

h1parent.replaceChild(p, h1)