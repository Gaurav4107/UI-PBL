document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const userId = document.getElementById('userid').value.trim();
    const password = document.getElementById('password').value.trim();

    // Define the valid user credentials
    // const validUserId = "exampleUserId"; // Replace with actual user ID or logic to fetch it
    // const validPassword = "examplePassword"; // Replace with actual password or logic to fetch it


        // Retrieve the stored ID and password
        const storedId = localStorage.getItem('passengerId');
        const storedPassword = localStorage.getItem('password');
        // console.log(storedId);
        // console.log(storedPassword);
    

    if (userId === "" || password === "") {
        alert("Please fill in both fields.");
    } else if (userId === storedId && password === storedPassword) {
        // Redirect to the home page
        window.location.href = "home.html";
    } else {
        alert("Invalid User ID or Password.");
    }
});
