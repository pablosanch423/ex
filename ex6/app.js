const navigation = document.getElementById('navigation');
navigation.classList.add('hello', 'lol')
navigation.classList.remove('hello', 'lol')

console.log(navigation.className);
console.log(navigation.classList);

if(navigation.className === 'hello'){
    console.log('true')
}
else{
    console.log('false')
}