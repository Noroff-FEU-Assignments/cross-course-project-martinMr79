const form = document.querySelector("#contactForm");
const nameInput = document.querySelector("#name");
const cardError = document.querySelector("#cardError");
const cardExpiration = document.querySelector("#cardExpiration");
const expirationError = document.querySelector("#expirationError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const adressError = document.querySelector("#adressError");
const validForm = document.querySelector(".validForm");
const message = document.querySelector(".message");
const button = document.querySelector("button");

function validateForm(event) {
  event.preventDefault();

  if (nameInput.value.trim().length > 0) {
    cardError.style.display = "none";
  } else {
    cardError.style.display = "block";
  }

  if (cardExpiration.value.trim().length > 9) {
    expirationError.style.display = "none";
  } else {
    expirationError.style.display = "block";
  }

  if (validateEmail(email.value) === true && email.value.trim().length > 5) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  console.log("hekk");
}


function checkIfButtonIsDisabled() {
  if (
    checkLength(nameInput.value, 1) &&
    checkLength(cardExpiration.value, 10) &&
    validateEmail(email.value, 5)
  ) {
    button.disabled = false;
  } else {
    message.innerHTML = "";
    button.disabled = true;
  }
}



nameInput.addEventListener("keyup", checkIfButtonIsDisabled);
cardExpiration.addEventListener("keyup", checkIfButtonIsDisabled);

function validateEmail(email) {
  const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  const matchPattern = regEx.test(email);
  return matchPattern;
}

function submitForm(event) {
  event.preventDefault();
  console.log(event.preventDefault());
  message.innerHTML = '<div class="message">form passed successfully</div>';
  form.reset();
}

form.addEventListener("submit", validateForm);
form.addEventListener("submit", submitForm);

function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}
