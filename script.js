function validateForm() {
    // Get form field values
    var fname = document.getElementById("fname").value.trim();
    var lname = document.getElementById("lname").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
  
    // Check if fields are empty
    if (fname === "" || lname === "" || email === "" || message === "") {
      alert("Please fill in all the fields.");
      return false;
    }
  
    // Email validation using regex
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    // Confirm submission
    var confirmSubmit = confirm("Are you sure you want to submit the form?");
    if (confirmSubmit) {
      alert("Form submitted successfully!");
      return true;
    } else {
      alert("Form submission cancelled.");
      return false;
    }
  }
