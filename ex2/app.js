const list = document.getElementById('navList');

const li = document.createElement('li');
const a = document.createElement('a');

a.href = '';
a.innerHTML = "More";

list.append(li);
li.append(a)