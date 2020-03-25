console.log('JS is working!');

// 1. Ask for user's name
var name = prompt('What\'s your name?');

console.log(name);


// 2. Aks for user's surname
var surname = prompt('What\'s your surname?');

console.log(surname);


// 3. Ask for user's favourite color
var favouriteColor = prompt('What\'s your favourite color?');

console.log(favouriteColor);


// 4. Ask for user's year of birth
var birthYear = prompt('What\'s your year of birth?');

console.log(birthYear);


// 5. Enter user's informations inside markup
document.getElementById('password').innerHTML = name + surname + favouriteColor + birthYear + '20';

console.log(document.getElementById('password').innerHTML);
