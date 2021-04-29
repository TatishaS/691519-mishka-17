//Модальное окно "Добавить в корзину"
var cart = document.querySelector(".button--cart");
var overlay = document.querySelector(".modal-overlay");
var modal = document.querySelector(".cart-modal");
var size = modal.querySelector("[name=size]");

cart.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Клик по ссылке Заказать");
  overlay.classList.add("modal-overlay--show");
  modal.classList.add("cart-modal--show");
  size.focus();
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Закрытие модального окна");
  overlay.classList.remove("modal-overlay--show");
  modal.classList.remove("cart-modal--show");
});
