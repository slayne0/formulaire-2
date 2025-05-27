const form = document.querySelector("form");
const $firstName = document.querySelector("#name");
const $LastName = document.querySelector("#secondname");
const $Email = document.querySelector("#email");
const $Password = document.querySelector("#password");

const $FirstNameError = document.querySelector(".name-error");
const $LastNameError = document.querySelector(".second-name-error");
const $EmailError = document.querySelector(".email-error");

console.log(form);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // $firstName.value.length > 0
});
