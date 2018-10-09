'use strict';

alert('Welcome! ');

var username = prompt('What is your name?');

alert('Welcome, ' + username + '! Let\'s get started');

var answerOne = prompt('Do I have more than three pets?').toLowerCase();

if (answerOne === 'yes' || answerOne === 'y') {
    //tell them
    alert('You got it right! I have a dog and four cats for a total of five beasts!');
    //console.log the result
    console.log('user got question 1 correct');
} else {
    //tell them
    alert('you fail, I have five pets')
    //consult.log the result
    console.log('user got question 1 wrong');

}