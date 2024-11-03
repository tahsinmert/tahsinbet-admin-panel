let users = [];
let userId = 1;

document.getElementById('addUser Btn').addEventListener('click', function() {
    const userName = prompt("Enter user name:");
    const userEmail = prompt("Enter user email:");

    if (userName && userEmail) {
        users.push({ id: userId++, name: userName, email: userEmail });
        renderUsers();
    } else {
        alert("Please enter valid user details.");
    }
});

function renderUsers() {
    const userTableBody = document.getElementById('userTableBody');
    userTableBody.innerHTML = ""; // Clear existing users

    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                <button onclick="editUser (${user.id})">Edit</button>
                <