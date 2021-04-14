/* eslint-disable no-constant-condition */
'use strict';

welcomeMSG();
myName();
myField();
myExperience();
amILoveFootball();
purposeOfWebsite();
myAge();
myFavoriteTeam();

function welcomeMSG(){
  let askUser = prompt('hello, what is your name?');
  alert('Welcome '+ askUser + '^_^');
}


function myName(){
  let q1 = prompt('is my name Osama?','hint:first char. O').toLocaleLowerCase();
  console.log('user answer= '+ q1);
  if (q1 === 'yes'||'y') {
    alert('correct!');
  }else if (q1 === 'no'||'n') {
    alert('incorretly my name is osama ^-^');
  }else {
    alert('plz submet yes or no');
  }
}

function myField(){
  let q2 = prompt('am I a mechanical engineer?').toLocaleLowerCase();
  console.log('user answer= '+ q2);
  if (q2 === 'yes'||'y') {
    alert('right answer');
  }else if (q2 === 'no'||'n') {
    alert('I am a mechanical engineer');
  }else {
    alert('plz submet yes or no');
  }
}

function myExperience(){
  let q3 = prompt('Do I have mechanical experiences?').toLocaleLowerCase();
  console.log('user answer= '+ q3);
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
}

function amILoveFootball(){
  let q4 = prompt('I love playing football, right?').toLocaleLowerCase();
  console.log(q4);
  if (q4 === 'yes'||'y') {
    alert('I love football so much!');
  }else if (q4 === 'no'||'n') {
    alert('I told you I love it');
  }else {
    alert('plz submet yes or no');
  }
}

function purposeOfWebsite(){
  let q5 = prompt('Do I made this website for practicing purpose?').toLocaleLowerCase();
  console.log(q5);
  if (q5 === 'yes'||'y') {
    alert('exactly');
  }else if (q5 === 'no'||'n') {
    alert('TBH, I made it for my assignment >_-');
  }else {
    alert('plz submet yes or no');
  }
}


function myAge(){
  let q6 = prompt('how old am I?').toLocaleLowerCase();

  if (q6 === '23'){
    alert('correct');
  }
  while(q6 !== '23'){
    let q6 = prompt('try again');
    for(let i=0; i<4; i++){
      if (q6 > 23 && q6 > 26){
        alert('too high');
        q6 = prompt('try again');
        break;
      }else if (q6 < 23 && q6 < 20){
        alert('too low');
        q6 = prompt('try again');
        break;
      }else{
        alert('number');
      }
    }
  }
}



let myFavoriteTeam=['real madrid', 'barcelona','liverpool'];
// eslint-disable-next-line no-undef
let q7 = prompt('what is my favorite team?  '+ myFavoriteTeam);
let i =0;
while (q7 !== 'real madrid'){
  for(i=0; i<6; i++){
    alert('wrong');
  }
}



alert('we have finished the quizzes ');
