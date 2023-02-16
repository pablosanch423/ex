const parent = document.getElementById('parentElement');
const second = document.getElementById('childElement')

const h1 = document.createElement('h1');
h1.textContent = "My First JavaScript Project";
console.log(h1)

parent.insertBefore(h1, second)

