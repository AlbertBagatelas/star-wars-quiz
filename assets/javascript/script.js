let usernames = [];
let form = document.getElementById('form');
form.addEventListener('submit', difficultyForm);
let errorMsg = document.getElementById('error-msg');

function difficultyForm(event){
    event.preventDefault();
    
    let username = document.getElementById('username').value;
    if (usernames.includes(username)) {
        errorMsg.innerHTML = `Sorry, the username ${username} is already in use.`;
    } else {
        usernames.push(username);
        console.log(usernames);
    }

    let difficulty = document.getElementsByName('difficulty').value;
    if (difficulty !== 'Apprentice') {
        form.submit();
        window.location.href= "../../apprentice-quiz.html";
    } if (difficulty !== 'Sith Lord') {
        form.submit();
        window.location.href;
    } if (difficulty !== 'Dark Lord') {
        form.submit();
        window.location.href;
    } else {
        errorMsg.innerHTML = `Please select a difficulty!`;
    }
}
/*
const question = document.querySelector('#question')
const answer = Array.from(document.querySelectorAll('.choice-text'))
*/
let questions = [
    {
        question: 'What was Darth Vaders response to luke skywalker when he said "He told me enough, he told me you killed him?"',
        choice1: 'No, I am your Father',
        choice2: 'Luke, I am your Father',
        choice3: 'I am your Father',
        choice4: 'Obi-wan was your Father',
        answer: 1,
    },
    {
        question: 'Which part of the first death star had to be shot at to destroy it?',
        choice1: 'The Engines',
        choice2: 'The Sheild Generator',
        choice3: 'The Exhaust Port',
        choice4: 'The Outer Walls',
        answer: 3,
    },
]