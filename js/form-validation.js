$(document).ready(function () { //Ensures that the script runs only after the HTML DOM is fully loaded. Prevents the code from executing before the page elements (like the form) are available.
    $('#contactForm').validate({ //Activates the validation plugin for the form with the id="contactForm".Applies validation rules and messages to the form's fields.
      rules: { //Defines validation rules for each form field.
        name: { required: true }, //Refers to the input field with name="name".required: true -> Makes this field mandatory.
        email: { required: true, email: true }, //Must be filled out and Must contain a valid email address.
        message: { required: true }, //Must be filled out.
      },
      messages: { //Defines custom error messages for each validation rule.
        name: "Please enter your name.",
        email: "Please enter a valid email address.",
        message: "Please enter your message.",
      },
      submitHandler: function (form) { //Specifies what happens when the form passes validation.
        alert("Form submitted successfully!"); //Displays an alert box to confirm that the form has been successfully validated and is being submitted.
        form.submit();//Submits the form to the server for processing.
      },
    });
  });