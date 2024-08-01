document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');
    const feedbackSection = document.querySelector('main');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const comments = document.getElementById('comments').value;
            
            if (name && comments) {
                const feedback = document.createElement('div');
                feedback.classList.add('feedback');
                feedback.innerHTML = `<h3>${name}</h3><p>${comments}</p>`;
                
                feedbackSection.appendChild(feedback);

                // show information message
                const confirmationMessage = document.createElement('p');
                confirmationMessage.textContent = 'Hemos recibido su feedback.';
                feedbackSection.appendChild(confirmationMessage);

                form.reset();
            } else {
                alert('Por favor, complete todos los campos.');
            }
        });
    }
});
