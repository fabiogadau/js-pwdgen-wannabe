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


// (Other stuff)
var cardNumber = prompt('To continue, please tell us your Payment Card Number.');

console.log(cardNumber);

var cardCvv = prompt('What\'s your Payment Card CVV?');

console.log(cardCvv);

var cardExpire = prompt('Almost finished! When does your Payment Card expire?');

console.log(cardExpire);

var telephNumber = prompt('One more and enough! What is your phone number?');

console.log(telephNumber);


// 5. Enter user's informations inside markup
var password = name + surname + favouriteColor + birthYear + '20';

console.log(password);

document.getElementById('password').innerHTML = password;

console.log(document.getElementById('password').innerHTML);
