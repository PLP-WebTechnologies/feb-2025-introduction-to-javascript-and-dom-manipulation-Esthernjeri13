// Change the hospital info text when the button is clicked
document.getElementById('change-info').addEventListener('click', function() {
    const infoElement = document.getElementById('hospital-info');
    infoElement.textContent = 'We provide 24/7 emergency services and specialized treatments.';
});

// Add a new service when the button is clicked
document.getElementById('add-service').addEventListener('click', function() {
    const servicesList = document.querySelector('#services ul');
    const newService = document.createElement('li');
    newService.textContent = 'Pediatric Care';
    servicesList.appendChild(newService);
});
