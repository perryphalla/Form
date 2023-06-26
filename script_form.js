const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];

  // prompt if user does not pass anything

  if (name.value === "" || name.value == null) {
    messages.push("Name is required or");
  }

  // prompt if password is under 6 characters

  if (password.value.length <= 6) {
    messages.push("Password must be longer than 6 characters");
  }

  // prompt if password is over 20 characters

  if (password.value.length >= 20) {
    messages.push("Password must be less than 20 characters");
  }

  // prompt if password is "password"

  if (password.value === "password") {
    messages.push("Password cannot be password");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});
