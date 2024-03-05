document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Here you should have a server-side script to handle the email sending.
    // For demonstration purposes, let's assume a dummy function isEmailSent is called,
    // which returns true if the email is sent successfully and false otherwise.

    var isEmailSent = true; // Change this based on your server-side logic

    if (isEmailSent) {
        document.getElementById('status-message').innerText = "Email sent successfully!";
    } else {
        document.getElementById('status-message').innerText = "Failed to send email. Please try again later.";
    }
});
