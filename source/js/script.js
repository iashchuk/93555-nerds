var button = document.querySelector(".contacts__button");
var modal = document.querySelector(".modal");
var closeModal = modal.querySelector(".modal__close");

var message = document.querySelector(".message");
var form = message.querySelector(".message__form");
var fullname = message.querySelector(".message__input--fullname");
var email = message.querySelector(".message__input--email");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("fullname");
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.add("modal__show");
  if (storage) {
    fullname.value = storage;
    email.focus();
  } else {
    fullname.focus();
  }
});

closeModal.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.remove("modal__show");
  modal.classList.remove("modal__error");
});

form.addEventListener("submit", function(evt) {
  if (!fullname.value || !email.value) {
    evt.preventDefault();
    modal.classList.remove("modal__error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal__error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("fullname", fullname.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal__show")) {
      modal.classList.remove("modal__show");
      modal.classList.remove("modal__error");
    }
  }
});
