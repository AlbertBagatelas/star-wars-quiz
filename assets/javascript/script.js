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