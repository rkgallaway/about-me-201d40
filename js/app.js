'use strict';

alert('Welcome! ');

var username = prompt('What is your name?');

alert('Welcome, ' + username + '! Let\'s get started');

var answerOne = prompt('Do I have a pet?').toLowerCase();

if (answerOne === 'yes' || answerOne === 'y') {
  //tell them
  alert('You got it right! I have a dog; her name is Wiener, Wiener The Dog!');
  //console.log the result
  console.log('user got question 1 correct');
} else {
  //tell them
  alert('you FAIL, I have a dog; her name is Wiener, Wiener The Dog!')
  //consult.log the result
  console.log('user got question 1 wrong');
}

var answerTwo = prompt('Do I live in Seattle?').toLowerCase();

if (answerTwo === 'yes' || answerTwo === 'y') {
  //tell them
  alert('You got it right! I live in Seattle in the Beacon Hill neighborhood!');
  //console.log the result
  console.log('user got question 2 correct');
} else {
  //tell them
  alert('you FAIL, I live in Seattle in the Beacon Hill neighborhood!')
  //consult.log the result
  console.log('user got question 2 wrong');
}

var answerThree = prompt('Do I like Baseball?').toLowerCase();

if (answerThree === 'yes' || answerThree === 'y'){
  alert('Yes I do!  I\'m not super baseball-wise yet, but I love going to see a Mariners game -food and drinks!');
  console.log('user got question 3 correct')
} else {
  alert('you Fail,  I\'m not super baseball-wise yet, but I love going to see a Mariners game -food and drinks!')
  console.log('user got question 3 wrong');
}

var answerFour = prompt('Do I like Foodball?').toLowerCase();

if (answerFour === 'no' || answerFour === 'n'){
  alert('That\'s correct!  I dont\'t love the football... even with food and drinks!');
  console.log('user got question 4 correct')
} else {
  alert('you Fail,  I don\'t love the football, even with food and drink!')
  console.log('user got question 4 wrong');
}

var answerFive = prompt('Do I drive to school?').toLowerCase();

if (answerFive === 'no' || answerFive === 'n'){
  alert('That\'s correct! I do NOT drive to school, traffic makes me sad!');
  console.log('user got question 5 correct')
} else {
  alert('you Fail,  I do NOT drive to school, traffic makes me sad!')
  console.log('user got question 5 wrong');
}
//begin question 6

var counterQuestionSix = 4
while(counterQuestionSix > 0 && answerSix !== 17){
  var answerSix = Number(prompt('Ok, So I collect Fiesta ware and I\'m kind of a Fiesta-fanatic. Can you guess how many colors I have? You have ' + counterQuestionSix + ' attempts remaining'));
  console.log(counterQuestionSix);
  counterQuestionSix --;

  if (answerSix === 17){
    alert('That\'s correct! Impressive!');
    console.log('user got question 6, correct!')
  } else if (answerSix > 17){
    alert('Unfortunately no that number is too high, but don\'t worry, you get ' + counterQuestionSix + ' more trys');
    console.log('user got attempt wrong, too high')
  } else if (answerSix <17){
    alert('Unfortunately no that number is too low, but don\'t worry, you get ' + counterQuestionSix + ' more trys');
    console.log('user got attempt wrong, too low')
  }
  if (counterQuestionSix === 0){
    alert('unfortunately you are out of guesses, the correct answer is 17.  Thanks for trying ' + username +'!')
  } 
}

//Question six finishes -don't break it Ryan
//begin Question 7

//establish array use for loop?!
var favoriteColors = ['peacock', 'turquoise', 'persimmon']

var counterQuestionSeven = 6

while(counterQuestionSeven > 0 && answerSeven !== favoriteColors[i]){

  var answerSeven = prompt('Ok, So we\'ve established that I like my Fiesta ware. Can you guess one of my favorite colors? You have ' + counterQuestionSeven + ' attempts').toLowerCase();
  console.log(counterQuestionSeven);
  counterQuestionSeven --;
}


for (var i = 0; i < favoriteColors[i]; i++) if (answerSeven === favoriteColors[i]){
  alert('Correct! That\'s on of my faves! Impressive! My favorite three colors are Peacock, Persimmon, and Turquoise');
  console.log('user got question 7 correct')
} else if (answerSeven !== favoriteColors[i]){
  alert('Unfortunately no that is not one of my favorite colors, ' + counterQuestionSix + ' more trys');
  console.log('user got question 7 wrong')
} 
if (counterQuestionSeven === 0){
  alert('unfortunately you are out of guesses. My favorite three colors are Peacock, Persimmon, and Turquoise.  Thanks for trying ' + username +'!')
}
