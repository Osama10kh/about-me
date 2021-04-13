"use strict";

let askUser = prompt('hello, what is your name?');
alert('Welcome '+ askUser + '^_^');


let q1 = prompt('is my name Osama?','hint:first char. O').toLocaleLowerCase();
console.log('user answer= '+ q1);
if (q1 === 'yes') {
    alert('correct!');
}else if (q1 === 'no') {
    alert('incorretly my name is osama ^-^');
}else {
    alert('plz submet yes or no');
}

let q2 = prompt('am I a mechanical engineer?').toLocaleLowerCase();
console.log('user answer= '+ q2);
if (q2 === 'yes') {
    alert('right answer');
}else if (q2 === 'no') {
    alert('I am a mechanical engineer');
}else {
    alert('plz submet yes or no');
}

let q3 = prompt('Do I have mechanical experiences?').toLocaleLowerCase();
console.log('user answer= '+ q3)
switch (q3) {
    case 'yes':
        alert('NOT YET -_-');
        break;
    case 'no':
        alert('unfortunatly this is true');
        break;
    default:
        alert('just yes or no!');
}

let q4 = prompt('I love playing football, right?').toLocaleLowerCase();
console.log(q4);
if (q4 === 'yes') {
    alert('I love football so much!');
}else if (q4 === 'no') {
    alert('I told you I love it');
}else {
    alert('plz submet yes or no');
}

let q5 = prompt('Do I made this website for practicing purpose?').toLocaleLowerCase();
console.log(q5);
if (q5 === 'yes') {
    alert('exactly');
}else if (q5 === 'no') {
    alert('TBH, I made it for my assignment >_-');
}else {
    alert('plz submet yes or no');
}

alert('we have finished the quizzes ' + askUser);
