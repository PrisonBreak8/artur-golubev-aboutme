// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

// ======== Показать еще карточки
const btnshowMoreCards = document.querySelector('.button-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');


// ======== Клик по кнопке и показ тзуч скрытых карточек
btnshowMoreCards.addEventListener('click', function () {
	hiddenCards.forEach(function (card) {
		card.classList.remove('card-link--hidden');
	})
});