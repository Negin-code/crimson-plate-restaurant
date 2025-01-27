
    $(document).ready(function () {
      //Ensures that the script runs only after the DOM (HTML structure) has fully loaded.

      new Typed("#typed-text", {
        //Creates a new instance of the Typed.js class and targets the element with the id="typed-text".
        strings: [
          //An array of strings that will be typed one after the other.
          "Welcome to Crimson Plate", //First, it types:"Welcome to Crimson Plate"
          "Delicious Meals Await You", //then: "Delicious Meals Await You"
          "An Experience You'll Love", //Finally,"An Experience You'll Love"
        ],
        typeSpeed: 50, //Controls the speed of typing each character (in milliseconds).
        backSpeed: 30, //Controls the speed of deleting (backspacing) characters.
        loop: true, //Enables the typing effect to repeat indefinitely.After typing all strings, it starts over from the beginning
        showCursor: false, //If false, it hides the blinking cursor at the end of the typed text.
      });
    });
