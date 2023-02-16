const body = document.body;

const div = document.createElement('div');
const p = document.createElement('p');

div.textContent = 'div content';
p.textContent = 'p content';

div.append(p)
body.append(div);
