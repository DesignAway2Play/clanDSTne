const nav = document.querySelector('.navLinks');
const inputD = document.querySelector('#cal');

document.querySelector('.hamburger').addEventListener('click', navToggle);

function navToggle() {
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } 
    else {
        nav.style.display = "block";
        }
    }