// Your code goes here
const paragraph = document.getElementById('text');

function loadEvent() {
    paragraph.textContent = 'This is really cool!';
}

document.addEventListener('DOMContentLoaded', loadEvent);