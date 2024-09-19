document.getElementById("fetchUsersBtn").addEventListener("click", function() {
    // URL for fetching all users
    let url = "https://jsonplaceholder.typicode.com/users";

    // Fetch all users
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Clear the previous table rows
            const tbody = document.getElementById('usersTbody');
            tbody.innerHTML = ''; // Clear any existing content

            // Loop through the data and create table rows
            data.forEach(user => {
                const row = document.createElement('tr'); // Create a table row

                // Create table data cells for name, phone, and website
                const nameCell = document.createElement('td');
                nameCell.textContent = user.name;

                const phoneCell = document.createElement('td');
                phoneCell.textContent = user.phone;

                const websiteCell = document.createElement('td');
                websiteCell.textContent = user.website;

                const idCell = document.createElement('td');
                idCell.textContent = user.id;

                // Append the cells to the row
                row.appendChild(nameCell);
                row.appendChild(phoneCell);
                row.appendChild(websiteCell);
                row.appendChild(idCell);


                // Append the row to the tbody
                tbody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
});

// Event listener for searching a specific user by ID
document.getElementById("searchUserBtn").addEventListener("click", function() {
    // Get the user ID from the input field
    const userId = document.getElementById("userIdInput").value;

    // Check if the input is valid (i.e., non-empty and positive)
    if (!userId || userId <= 0) {
        alert("Please enter a valid user ID.");
        return;
    }

    // URL for fetching a user by ID
    let url = `https://jsonplaceholder.typicode.com/users/${userId}`;

    // Fetch user by ID
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`User with ID ${userId} not found!`);
            }
            return response.json();
        })
        .then(user => {
            // Clear the table before showing the searched user's data
            const tbody = document.getElementById('usersTbody');
            tbody.innerHTML = ''; // Clear any existing content

            // Create a table row for the found user
            const row = document.createElement('tr');

            // Create table data cells for name, phone, and website
            const nameCell = document.createElement('td');
            nameCell.textContent = user.name;

            const phoneCell = document.createElement('td');
            phoneCell.textContent = user.phone;

            const websiteCell = document.createElement('td');
            websiteCell.textContent = user.website;

            // Append the cells to the row
            row.appendChild(nameCell);
            row.appendChild(phoneCell);
            row.appendChild(websiteCell);

            // Append the row to the tbody
            tbody.appendChild(row);
        })
        .catch(error => {
            alert(error.message); // Display an error if the user is not found
        });
});
