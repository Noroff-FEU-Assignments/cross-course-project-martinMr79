const form = document.querySelector("#contactForm");
const cardNumber = document.querySelector("#cardNumber");
const cardError = document.querySelector("#cardError");
const cardExpiration = document.querySelector("#cardExpiration");
const expirationError = document.querySelector("#expirationError");
const cvc = document.querySelector("#cvc");
const cvcError = document.querySelector("#cvcError");

function validateForm(event) {
  event.preventDefault();

if(checkLength(cardNumber.value, 10) === true) {
    cardError.style.display = "none";
} else {
  cardError.style.display = "block";
}

  if (cardExpiration.value.trim().length > 4) {
    expirationError.style.display = "none";
  } else {
    expirationError.style.display = "block";
  }

  if (cvc.value.trim().length > 3) {
    cvcError.style.display = "none";
  } else {
    cvcError.style.display = "block";
  }

  console.log("hekk");
}

form.addEventListener("submit", validateForm);

function validateCardNumber(cardNumber) {
  const regEx =
    /^(?:4[0-9]d{12}(?:[0-9]d{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{d12})$/;
  const matchPattern = regEx.test(cardNumber);
  return matchPattern;
}

/*regex from: */
/*https://stackoverflow.com/questions/56896462/regex-to-match-master-visa-card-with-spaces-in-javascript*/



function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}


