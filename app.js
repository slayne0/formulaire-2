const form = document.querySelector("form");
const $firstName = document.querySelector("#name");
const $lastName = document.querySelector("#secondname");
const $email = document.querySelector("#email");
const $password = document.querySelector("#password");

const $firstNameError = document.querySelector(".name-error");
const $lastNameError = document.querySelector(".second-name-error");
const $emailError = document.querySelector(".email-error");
const $passwordError = document.querySelector(".password-error");

console.log($email.value);

console.log(form);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if ($firstName.value === "") {
    $firstNameError.classList.remove("hidden");
  }

  if ($lastName.value === "") {
    $lastNameError.classList.remove("hidden");
  }

  if ($email.value === "") {
    $emailError.classList.remove("hidden");
  }

  if ($password.value.length < 8) {
    $passwordError.classList.remove("hidden");
  }

  // $firstName.value.length > 0
});
