document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var fullName = document.getElementById("fullName").value.trim();
  var email = document.getElementById("email").value.trim();
  var country = document.getElementById("country").value;
  var comments = document.getElementById("comments").value.trim();
  var error = document.getElementById("errorMessage");

  if (fullName === "" || email === "" || country === "" || comments === "") {
    error.textContent = "Please fill in all fields before submitting.";
    return;
  }

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    error.textContent = "Please enter a valid email address.";
    return;
  }

  error.textContent = "";
  alert("Thank you, " + fullName + "! Your form was submitted successfully.");
  this.reset();
});
