// Magnific Popup Initialization
$(document).ready(function () { //Ensures the script runs only after the HTML DOM is fully loaded.Prevents errors by making sure all elements (e.g., .popup-link) are available in the DOM before trying to initialize the plugin.
  //Selects all elements with the popup-link class and initializes Magnific Popup on them.Binds the Magnific Popup functionality to the selected elements.Clicking on any of these elements will trigger the lightbox effect.
  $(".popup-link").magnificPopup({ type: "image", gallery: { enabled: true } });
  // type: "image"->Specifies the content type for the popup.Configures the popup to handle images (e.g., JPEG, PNG, etc.).Clicking on an element with popup-link will open the linked image in a popup.
  //gallery: { enabled: true }-> Enables gallery mode. Allows users to navigate between images in the gallery using next and previous controls.If multiple popup-link elements are grouped, they are treated as part of the same gallery.
});
