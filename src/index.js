import {initialCards} from './scripts/initialCards.js';
import {openModal,closeModal} from './scripts/modal.js'
import {addCards} from './scripts/card.js'
import './pages/index.css';


const editProfileIcon = document.querySelector('.profile__edit-button');
const addCardIcon = document.querySelector('.profile__add-button');
const popupProfile = document.querySelector('#profile-popup');
const popupCards = document.querySelector('#cards-popup');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__about');
const nameInput = popupProfile.querySelector('.popup__input_name_username');
const nameCardInput = popupCards.querySelector('.popup__input_name_username');
const descriptionInput = popupProfile.querySelector('.popup__input_name_about');
const linkCardInput = popupCards.querySelector('.popup__input_name_about');
const cardsArea = document.querySelector('.cards');
const closeButtons = document.querySelectorAll('.popup__close-button');

const openPopupProfile = function () {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  openModal(popupProfile);
}

const addNewCard = function (evt) {
  evt.preventDefault();
  cardsArea.prepend(addCards(nameCardInput.value, linkCardInput.value));
  evt.target.reset()
  closeModal(popupCards);
}

const renderInitialCards = function () {
  initialCards.forEach(function (card) {
    cardsArea.append(addCards(card.name, card.link));
  });
}

renderInitialCards();

const handleProfileFormSubmit = function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(popupProfile);
}


editProfileIcon.addEventListener('click', openPopupProfile);
addCardIcon.addEventListener('click', () => openModal(popupCards));
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closeModal(popup));
});

popupProfile.addEventListener('submit', handleProfileFormSubmit);
popupCards.addEventListener('submit', addNewCard);