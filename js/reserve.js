$(document).ready(function () {
    // Handle form submission
    $('form').on('submit', function (e) {
      let isValid = true;

      // Clear previous error messages
      $('.error-message').remove();
      $('input, select').removeClass('border-red-600');

      // Validate date
      const today = new Date();
      const date = new Date($('#date').val());
      if (!date || date < today.setHours(0, 0, 0, 0)) {
        $('#date').after('<p class="error-message text-red-600 text-sm mt-2">Please select a valid future date.</p>');
        $('#date').addClass('border-red-600');
        isValid = false;
      }

      // Validate time
      const time = $('#time').val();
      if (!time) {
        $('#time').after('<p class="error-message text-red-600 text-sm mt-2">Please select a time.</p>');
        $('#time').addClass('border-red-600');
        isValid = false;
      }

      // Validate party size
      const partySize = $('#party-size').val();
      if (!partySize) {
        $('#party-size').after('<p class="error-message text-red-600 text-sm mt-2">Please select the party size.</p>');
        $('#party-size').addClass('border-red-600');
        isValid = false;
      }

      // Validate contact information (phone or email)
      const contact = $('#contact').val();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email regex
      const phoneRegex = /^\+?[0-9]{10,15}$/; // Phone regex: allows + and 10-15 digits
      if (!contact || (!emailRegex.test(contact) && !phoneRegex.test(contact))) {
        $('#contact').after(
          '<p class="error-message text-red-600 text-sm mt-2">Please provide a valid email or phone number.</p>'
        );
        $('#contact').addClass('border-red-600');
        isValid = false;
      }

      // Prevent form submission if invalid
      if (!isValid) {
        e.preventDefault();
      }
    });

    // Real-time validation feedback
    $('input, select').on('input change', function () {
      $(this).removeClass('border-red-600');
      $(this).next('.error-message').remove();

      if ($(this).is('#contact')) {
        const contact = $(this).val();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\+?[0-9]{10,15}$/;
        if (!emailRegex.test(contact) && !phoneRegex.test(contact)) {
          $(this).addClass('border-red-600');
          $(this).after('<p class="error-message text-red-600 text-sm mt-2">Invalid email or phone number.</p>');
        }
      }
    });
  });