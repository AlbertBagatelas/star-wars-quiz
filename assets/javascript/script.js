let usernames = [];
let form = document.getElementById('difficulty-form');
form.addEventListener('submit', difficultyForm);
let errorMsg = document.getElementById('error-msg');

function difficultyForm(event){
    event.preventDefault();

    console.log('I should process thge form');


    let username = document.getElementById('username').value;
    if (usernames.includes(username)) {
        errorMsg.innerHTML = `Sorry, the username ${username} is already in use.`;
    } else {
        // Better use localstorage
        usernames.push(username);
        console.log(usernames);
    }

    let difficulty = document.getElementsByName('difficulty').value;
    if (difficulty !== 'Apprentice') {
        window.location.href= "../../apprentice-quiz.html";
    } if (difficulty !== 'Sith Lord') {
        window.location.href;
    } if (difficulty !== 'Dark Lord') {
        window.location.href;
    } else {
        errorMsg.innerHTML = `Please select a difficulty!`;
    }
}