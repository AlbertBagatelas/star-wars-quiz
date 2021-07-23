let usernames = [];
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
    {
        question: 'What was Darth Vaders response to luke skywalker when he said "He told me enough, he told me you killed him? 2"',
        choice1: 'No, I am your Father',
        choice2: 'Luke, I am your Father',
        choice3: 'I am your Father',
        choice4: 'Obi-wan was your Father',
        answer: 1,
    },
    {
        question: 'Which part of the first death star had to be shot at to destroy it? 3',
        choice1: 'The Engines',
        choice2: 'The Sheild Generator',
        choice3: 'The Exhaust Port',
        choice4: 'The Outer Walls',
        answer: 3,
    },
    {
        question: 'What was Darth Vaders response to luke skywalker when he said "He told me enough, he told me you killed him?" 3',
        choice1: 'No, I am your Father',
        choice2: 'Luke, I am your Father',
        choice3: 'I am your Father',
        choice4: 'Obi-wan was your Father',
        answer: 1,
    },
    {
        question: 'Which part of the first death star had to be shot at to destroy it? 3',
        choice1: 'The Engines',
        choice2: 'The Sheild Generator',
        choice3: 'The Exhaust Port',
        choice4: 'The Outer Walls',
        answer: 3,
    },
]

function displayQuestion(index){
    selected_question =  questions[index];
    console.log(selected_question);
    document.getElementById('question').innerText = selected_question['question'];

}

function startGame(){
    score = 0;
    timer = 60;
    displayQuestion(3);
}

startGame();