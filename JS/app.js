"use strict";


let favoriteTeam = ['real madrid', 'barcelona','liverpool'];
let q7 = prompt('what is my favorite team? '+ favoriteTeam);

while(q7 !== 'real madrid'){
    alert('tray again');
    let q7 = prompt('what is my favorite team?' + favoriteTeam);
    if(q7 = 'real madrid'){
        alert('correct');
        break;
    }
}

    

let q6 = prompt('how old am I?');

while(q6 !== '23'){
    let q6 = prompt('try again');
    if (q6 > 23 && q6 > 26){
        alert('too high');
        let q6 = prompt('try again');
        break;

    }else if (q6 < 23 && q6 < 20){
        alert('too low');
        let q6 = prompt('try again');
        break;
    }else{
        alert('number');
    }
}


let askUser = prompt('hello, what is your name?');
alert('Welcome '+ askUser + '^_^');


let q1 = prompt('is my name Osama?','hint:first char. O').toLocaleLowerCase();
console.log('user answer= '+ q1);
if (q1 === 'yes'||'y') {
    alert('correct!');
}else if (q1 === 'no'||'n') {
    alert('incorretly my name is osama ^-^');
}else {
    alert('plz submet yes or no');
}

let q2 = prompt('am I a mechanical engineer?').toLocaleLowerCase();
console.log('user answer= '+ q2);
if (q2 === 'yes'||'y') {
    alert('right answer');
}else if (q2 === 'no'||'n') {
    alert('I am a mechanical engineer');
}else {
    alert('plz submet yes or no');
}

let q3 = prompt('Do I have mechanical experiences?').toLocaleLowerCase();
console.log('user answer= '+ q3)
switch (q3) {
    case 'yes'||'y':
        alert('NOT YET -_-');
        break;
    case 'no'||'n':
        alert('unfortunatly this is true');
        break;
    default:
        alert('just yes or no!');
}

let q4 = prompt('I love playing football, right?').toLocaleLowerCase();
console.log(q4);
if (q4 === 'yes'||'y') {
    alert('I love football so much!');
}else if (q4 === 'no'||'n') {
    alert('I told you I love it');
}else {
    alert('plz submet yes or no');
}

let q5 = prompt('Do I made this website for practicing purpose?').toLocaleLowerCase();
console.log(q5);
if (q5 === 'yes'||'y') {
    alert('exactly');
}else if (q5 === 'no'||'n') {
    alert('TBH, I made it for my assignment >_-');
}else {
    alert('plz submet yes or no');
}

alert('we have finished the quizzes ' + askUser);
