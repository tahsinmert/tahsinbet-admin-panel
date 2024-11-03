document.getElementById('logoutBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    document.querySelector('main').innerHTML = `
        <h2>Logout</h2>
        <p>Are you sure you want to log out?</p>
        <button id="confirmLogoutBtn">Yes, Logout</button>
        <button id="cancelLogoutBtn">Cancel</button>
    `;

    // Confirm Logout
    document.getElementById('confirmLogoutBtn').addEventListener('click', function() {
        // Here you would typically send a request to the server to log the user out
        alert("You have been logged out.");
        // Redirect to the login page or homepage
        window.location.href = 'login.html'; // Change this to your actual login page
    });

    // Cancel Logout
    document.getElementById('cancelLogoutBtn').addEventListener('click', function() {
        // Redirect back to the admin panel or simply refresh
        window.location.href = 'index.html'; // Change this to your actual admin panel page
    });
});