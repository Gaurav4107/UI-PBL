document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const dob = new Date(document.getElementById('dob').value);
    const email = document.getElementById('email').value.trim();
    const contactNumber = document.getElementById('contactNumber').value.trim();
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    // first store in local storage for homePage
    localStorage.setItem('firstName', firstName);

    // Reset messages
    errorMessage.textContent = '';
    successMessage.textContent = '';

    // Date validation
    const minDate = new Date('1924-01-01');
    if (dob < minDate) {
        errorMessage.textContent = "Choose a date greater than 1/1/1924";
        return;
    }

    // Contact number validation
    const contactNumberPattern = /^\d{10}$/;
    if (!contactNumberPattern.test(contactNumber)) {
        errorMessage.textContent = "Enter a valid contact number";
        return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Enter a valid mail id";
        return;
    }

    // Generate Passenger ID and Password
    const passengerId = Math.floor(Math.random() * 1000000);
    const password = firstName.substring(0, 4) + '@123';

    // Store in localStorage
    localStorage.setItem('passengerId', passengerId);
    localStorage.setItem('password', password);

    // Display success message
    // successMessage.innerHTML = `
    //     Passenger Registration is successful.<br>
    //     Passenger ID: ${passengerId}<br>
    //     Password: ${password}
    // `;

    // alert window to shoe PassengerID and Password
    alert(`Your Passenger ID is ${passengerId}\nYour Password is ${password}`);


    // Redirect to login page after a delay (optional)
    setTimeout(() => {
        window.location.href = "index.html";
    }, 500); // Redirect after 500 mili seconds
});
