// /* eslint-disable no-constant-condition */
// 'use strict';

// let gameScore=0;

// welcomeMSG();
// myName();
// myField();
// myExperience();
// amILoveFootball();
// purposeOfWebsite();
// myAge();
// guessMyfavorate();

// function welcomeMSG(){
//   let askUser = prompt('hello, what is your name?');
//   alert('Welcome '+ askUser + '^_^');
// }


// function myName(){
//   let questionOne = prompt('is my name Osama?','hint:first char. O').toLocaleLowerCase();
//   console.log('user answer= '+ questionOne);
//   if (questionOne === 'yes'||'y') {
//     alert('correct!');
//   }else if (questionOne === 'no'||'n') {
//     alert('incorretly my name is osama ^-^');
//   }else {
//     alert('plz submet yes or no');
//   }
// }

// function myField(){
//   let questionTwo = prompt('am I a mechanical engineer?').toLocaleLowerCase();
//   console.log('user answer= '+ questionTwo);
//   if (questionTwo === 'yes'||'y') {
//     alert('right answer');
//   }else if (questionTwo === 'no'||'n') {
//     alert('I am a mechanical engineer');
//   }else {
//     alert('plz submet yes or no');
//   }
// }

// function myExperience(){
//   let questionThree = prompt('Do I have mechanical experiences?').toLocaleLowerCase();
//   console.log('user answer= '+ questionThree);
//   switch (questionThree) {
//   case 'yes'||'y':
//     alert('NOT YET -_-');
//     break;
//   case 'no'||'n':
//     alert('unfortunatly this is true');
//     break;
//   default:
//     alert('just yes or no!');
//   }
// }

// function amILoveFootball(){
//   let questionFour = prompt('I love playing football, right?').toLocaleLowerCase();
//   console.log(questionFour);
//   if (questionFour === 'yes'||'y') {
//     alert('I love football so much!');
//   }else if (questionFour === 'no'||'n') {
//     alert('I told you I love it');
//   }else {
//     alert('plz submet yes or no');
//   }
// }

// function purposeOfWebsite(){
//   let questionFive = prompt('Do I made this website for practicing purpose?').toLocaleLowerCase();
//   console.log(questionFive);
//   if (questionFive === 'yes'||'y') {
//     alert('exactly');
//   }else if (questionFive === 'no'||'n') {
//     alert('TBH, I made it for my assignment >_-');
//   }else {
//     alert('plz submet yes or no');
//   }
// }


// function myAge(){
//   let age=23;
//   let guesscorrect = false;
//   let questionSix = prompt('how old am I?');
//   for(let i=3; i>0 ; i--){
//     if (questionSix<18){
//       questionSix = prompt('It is too low you still have '+i+' attempt');
//     }else if (questionSix>30){
//       questionSix = prompt('It is too high you still have '+i+' attempt');
//     }else if (questionSix>=25&&questionSix<=31 || questionSix<=23&&questionSix>=20){
//       questionSix=prompt('Too close you still have '+ i +'attempt');
//     // eslint-disable-next-line eqeqeq
//     }else if(questionSix==age){
//       alert('Good job my age is'+ age);
//       guesscorrect = true;
//       gameScore=gameScore+5;
//       break;
//     }
//   }
//   // eslint-disable-next-line eqeqeq
//   if (guesscorrect==false){
//     alert('You have eceed the number of attempt my age is'+age);
//   }

// }



// function guessMyfavorate(){
//   let myFavoriteTeam=['real', 'barca','liverpool','Cheelsy','Alahly','Alwehdat'];
//   let questionSeven = prompt('what is my favorite team?');
//   let correct=false;
//   for(let j=5;j>0;j--){
//     // eslint-disable-next-line for-direction
//     for(let i=0;i>=myFavoriteTeam.length;i++){
//       // eslint-disable-next-line eqeqeq
//       if(questionSeven==myFavoriteTeam.toLowerCase()){
//         correct=true;
//       }
//     }
//     if(correct){
//       alert('Goog job is my favorate team');
//       gameScore=gameScore+5;
//       break;
//     }
//     else{
//       questionSeven=prompt('Try agian you still have'+ j +'attempt');
//     }
//   }
//   if(correct===false){
//     alert ('your attempts are finished the number my favorateteam are'+myFavoriteTeam);
//   }
// }

// function finalAttempt(){
//   alert('Good job your score is '+ gameScore);
// }
// finalAttempt();




// function printName (name,age){
//   console.log('full name: ',name,age);
// }
// // eslint-disable-next-line no-undef
// printName(Baraa,Alosaily);

