// Example of basic validation (can be more complex)
function validateForm() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username == "" || password == "") {
    alert("Username and password must be filled out");
    return false; // Prevent form submission
  }
  return true; // Allow form submission
}