document.addEventListener('DOMContentLoaded', function() {
    const supportForm = document.getElementById('supportForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    if (supportForm) {
        supportForm.addEventListener('submit', function(event) {
            event.preventDefault();
            confirmationMessage.style.display = 'block';
            supportForm.reset();
        });
    }
});
