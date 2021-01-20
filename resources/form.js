const email = document.getElementById("email");
const password = document.getElementById("psw");
const password_repeat = document.getElementById("psw-repeat");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

// Form submit

form.addEventListener("submit", (e) => {
  let messages = [];

  // Email Verification

  let validateEmail = () => {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email.value
      )
    ) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  };

  if (email.value === "" || email.value == null) {
    messages.push("Email is required");
  }

  if (password.value.length <= 6) {
    messages.push("Password must be longer than 6 characters");
  }

  if (password.value.length >= 20) {
    messages.push("Password must be less than 20 characters");
  }

  if (password.value === "password") {
    messages.push("Password cannot be password");
  }

  if (password.value !== password_repeat.value) {
    messages.push("Password must match repeat password");
  }

  // Joins messages

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }

  // Form filled out correctly

  if (messages.length == 0 && validateEmail(email) == true) {
    alert(`Good Job`);
  }
});
