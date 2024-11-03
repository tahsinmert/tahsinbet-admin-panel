document.getElementById('settingsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const siteTitle = document.getElementById('siteTitle').value;
    const siteDescription = document.getElementById('siteDescription').value;
    const adminEmail = document.getElementById('adminEmail').