'use strict';

alert('Welcome! ');

var username = prompt('What is your name?');

alert('Welcome, ' + username + '! Let\'s get started');

var answerOne = prompt('Do I have a pet?').toLowerCase();

if (answerOne === 'yes' || answerOne === 'y') {
    //tell them
    alert('You got it right! I have a dog; her name is Weiner: The Dog!');
    //console.log the result
    console.log('user got question 1 correct');
} else {
    //tell them
    alert('you FAIL, I have a dog; her name is Weiner : The Dog')
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

