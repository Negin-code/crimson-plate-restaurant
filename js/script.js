// Hamburger Menu Toggle
// menuToggle: Refers to the hamburger menu button (<button id="menu-toggle">).
// The getElementById method retrieves this button by its id.
// menu:Refers to the navigation menu (<nav id="menu">).
// The getElementById method retrieves the menu by its id.
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
//Adds a click event listener to the hamburger menu button (menuToggle).
//Executes the code inside the callback function (() => {}) whenever the button is clicked.

//Uses the classList.toggle method to dynamically add or remove CSS classes from the menu element.
//menu.classList.toggle('hidden'):If the menu element has the hidden class, it removes it (making the menu visible).If the menu element does not have the hidden class, it adds it (hiding the menu).
//menu.classList.toggle('flex'): If the menu element does not have the flex class, it adds it (making the menu visible and using the flexbox layout).If the menu element already has the flex class, it removes it (hiding the menu).
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
});