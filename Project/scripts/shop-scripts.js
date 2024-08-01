document.addEventListener('DOMContentLoaded', function() {
    const typewriterForm = document.getElementById('typewriterForm');
    const orderForm = document.getElementById('orderForm');
    const purchaseForm = document.getElementById('purchaseForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    typewriterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        orderForm.style.display = 'block';
        window.scrollTo({
            top: orderForm.offsetTop,
            behavior: 'smooth'
        });
    });

    purchaseForm.addEventListener('submit', function(event) {
        event.preventDefault();
        confirmationMessage.style.display = 'block';
        orderForm.style.display = 'none';
    });
});
