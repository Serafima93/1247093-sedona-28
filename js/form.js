
var button = document.querySelector(".button-search");
var form = document.querySelector(".formsearch");
var enter = form.querySelector(".enter");
var sent = form.querySelector(".button");
var exit = form.querySelector(".exit");




button.addEventListener("click", function () {
  form.classList.add("hidden");
  enter.focus();
});

form.addEventListener("submit", function (evt) {
  if (!enter.value || !exit.value) {
    evt.preventDefault();
     }
});
