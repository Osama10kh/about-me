/* eslint-disable no-constant-condition */
'use strict';

let finalResult=0;

welcomeMSG();
myName();
myField();
myExperience();
amILoveFootball();
purposeOfWebsite();
myAge();
myTeam();
finalPoint();

function welcomeMSG(){
  let askUser = prompt('hello, what is your name?');
  alert('Welcome '+ askUser + ' ^_^');
}


function myName(){
  let questionOne = prompt('is my name Osama? ',' hint:first char. O').toLocaleLowerCase();
  console.log('user answer about my name= '+ questionOne);
  if (questionOne === 'yes' || questionOne === 'y') {
    alert('correct!');
    finalResult = finalResult+1;
  }else if (questionOne === 'no' || questionOne === 'n') {
    alert('incorretly my name is osama ^-^');
  }else {
    alert('plz submet yes/y or no/n');
  }
}

function myField(){
  let questionTwo = prompt('am I a mechanical engineer?').toLocaleLowerCase();
  console.log('user answer= '+ questionTwo);
  if (questionTwo === 'yes' || questionTwo === 'y') {
    alert('right answer');
    finalResult = finalResult+1;
  }else if (questionTwo === 'no' || questionTwo === 'n') {
    alert('I am a mechanical engineer');
  }else {
    alert('plz submet yes/y or no/n');
  }
}

function myExperience(){
  let questionThree = prompt('Do I have mechanical experiences?').toLocaleLowerCase();
  console.log('user answer if i have experiences = '+ questionThree);
  if (questionThree === 'yes'||questionThree === 'y') {
    alert('NOT YET');
  }else if (questionThree === 'no' || questionThree === 'n') {
    alert('true');
    finalResult = finalResult+1;
  }else {
    alert('plz submet yes/y or no/n');
  }
}

function amILoveFootball(){
  let questionFour = prompt('I love playing football, right?').toLocaleLowerCase();
  console.log('user answer if i love football= '+ questionFour);
  if (questionFour === 'yes'||questionFour === 'y') {
    alert('I love football so much!');
    finalResult = finalResult+1;
  }else if (questionFour === 'no' || questionFour === 'n') {
    alert('I told you I love it');
  }else {
    alert('plz submet yes/y or no/n');
  }
}

function purposeOfWebsite(){
  let questionFive = prompt('Do I made this website for practicing purpose?').toLocaleLowerCase();
  console.log('user answer= ' + questionFive);
  if (questionFive === 'yes' || questionFive === 'y') {
    alert('exactly');
    finalResult = finalResult+1;
  }else if (questionFive === 'no' || questionFive === 'n') {
    alert('TBH, I made it for my assignment >_-');
  }else {
    alert('plz submet yes/y or no/n');
  }
}


function myAge(){
  let age = 23;
  let rightAnswer = false;
  let questionSix = prompt('how old am I?');
  for(let i=4; i>0 ; i--){
    if (questionSix < 18){
      questionSix = prompt('It is too low you still have '+i+' attempt');
    }else if (questionSix > 30){
      questionSix = prompt('It is too high you still have '+i+' attempt');
    }else if (questionSix <= 26 && questionSix > 23 || questionSix >=20 && questionSix < 23){
      questionSix=prompt('answer was almost right '+ i +'attempt');
    }else if(questionSix === '23'){
      alert('correct! great my age is '+ age);
      rightAnswer = true;
      finalResult = finalResult+1;
      break;
    }else{
      questionSix = prompt('plz jsut number, you still have' +i+' attempt');
    }
  }
  if (rightAnswer === false){
    alert('my age is '+age);
  }

}


function myTeam(){
  let myFavoriteTeam=['real', 'barca','liverpool','Cheelsy','AC milan','man u'];
  let questionSeven = prompt('what is my favorite team? ', myFavoriteTeam);
  let answer=false;
  for(let x=6; x>0; x--){
    if(questionSeven.toLocaleLowerCase() === myFavoriteTeam[0]){
      answer=true;
      alert('correct');
      finalResult=finalResult+1;
      break;
    }else if (questionSeven !== myFavoriteTeam[0]){
      questionSeven = prompt('Try agian you still have '+ x +' attempt').toLocaleLowerCase();
    }
  }
  if(answer === false){
    alert ('your attempts are finished my favorite team is '+myFavoriteTeam[0]);
  }
}

function finalPoint(){
  alert('your result is '+ finalResult +' out of 7');
}

