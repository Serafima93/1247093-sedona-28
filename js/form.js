var buttonSearch = document.querySelector(".button-search");
var form = document.querySelector(".formsearch");
var enter = form.querySelector(".enter");
var sent = form.querySelector(".button");
var exit = form.querySelector(".exit");

if (buttonSearch) {
	buttonSearch.addEventListener("click", function () {
		form.classList.toggle("hidden");
		form.classList.toggle("visible");
		enter.focus();
	});
}
if (form) {
	form.addEventListener("submit", function (evt) {
		evt.preventDefault();
		if (!(enter.value || exit.value)) {
			return;
		}
	});
}
