const form = document.querySelector("#contactForm");
const cardNumber = document.querySelector("#cardNumber");
const cardError = document.querySelector("#cardError");
const cardExpiration = document.querySelector("#cardExpiration");
const expirationError = document.querySelector("#expirationError");
const cvc = document.querySelector("#cvc");
const cvcError = document.querySelector("#cvcError");
const validForm = document.querySelector(".validForm");
const message = document.querySelector(".message");
const button = document.querySelector(".submit_button");

function validateForm(event) {
  event.preventDefault();

  if (cardNumber.value.trim().length > 0) {
    cardError.style.display = "none";
  } else {
    cardError.style.display = "block";
  }

  if (cardExpiration.value.trim().length > 9) {
    expirationError.style.display = "none";
  } else {
    expirationError.style.display = "block";
  }

  if (validateCvc(cvc.value) === true && cvc.value.trim().length > 5) {
    cvcError.style.display = "none";
  } else {
    cvcError.style.display = "block";
  }

  console.log("hekk");
}

function checkIfButtonIsDisabled() {
  if (
    checkLength(cardNumber.value, 1) &&
    checkLength(cardExpiration.value, 1) &&
    validateCvc(cvc.value, 1)
  ) {
    button.disabled = false;
  } else {
    message.innerHTML = "";
    button.disabled = true;
  }
}

cardNumber.addEventListener("keyup", checkIfButtonIsDisabled);
cardExpiration.addEventListener("keyup", checkIfButtonIsDisabled);

function validateCardNumber(cardNumber) {
  const regEx = /^(?:4[0-9]d{12}(?:[0-9]d{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{d12})$/;
    

  /*regex from: */
  /*https://stackoverflow.com/questions/56896462/regex-to-match-master-visa-card-with-spaces-in-javascript*/

  const matchPattern = regEx.test(cardNumber);
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
