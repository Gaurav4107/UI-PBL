document.getElementById('homeLink').addEventListener('click', function() {
    window.location.href = 'index.html'; // Redirect to home page
});

document.getElementById('profileLink').addEventListener('click', function() {
    alert('Redirecting to Profile Page...'); // Placeholder for actual redirection
    // window.location.href = 'profile.html';
});

document.getElementById('tripsLink').addEventListener('click', function() {
    alert('Redirecting to My Trips Page...'); // Placeholder for actual redirection
    // window.location.href = 'trips.html';
});

document.getElementById('logoutLink').addEventListener('click', function() {
    window.location.href = 'login.html'; // Redirect to login page
});

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Searching for Flights...'); // Placeholder for search functionality
});

        
// Retrieve the firstName from localStorage
const storedfirstName = localStorage.getItem('firstName');
document.getElementById('passengerName').innerText = storedfirstName;
