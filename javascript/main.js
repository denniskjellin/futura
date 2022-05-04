"use strict"

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

// variabels
let currentLocation = location.href;
let menuItem = document.querySelectorAll('nav a');
let menuLength = menuItem.length;

//looping trough
for (let i = 0; i < menuLength; i++) {
    //giving the navbar-links + active class on the current navbar href tag
    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = "active";
    }
}