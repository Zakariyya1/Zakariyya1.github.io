document
  .getElementById('contact-form')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const email = e.target.querySelector('input[type="email"]').value;
    const message = e.target.querySelector('textarea').value;

    // Basic validation
    if (!email || !message) {
      alert('Please fill in all fields');
      return;
    }

    // Log the form data (for now)
    console.log('Form submitted:', { email, message });

    // Show success message
    alert('Thanks for your message! This feature will be implemented soon.');

    // Clear the form
    e.target.reset();
  });
