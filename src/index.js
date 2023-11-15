import {initialCards} from './scripts/initialCards.js';
import {openModal,closeModal, closeModalByOverlay} from './scripts/modal.js'
import {renderInitialCards} from './scripts/card.js'
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
const popupImageZoom = document.querySelector('#image-popup');
const popupImageZoomDescription = popupImageZoom.querySelector('.popup__description');
const popupImageZoomImage = popupImageZoom.querySelector('.popup__image');

const openPopupProfile = function () {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  openModal(popupProfile);
}

const openImagePopup = (imageSrc, imageAlt, imageTitle) => {
  popupImageZoomImage.src = imageSrc;
  popupImageZoomImage.alt = imageAlt;
  popupImageZoomDescription.textContent = imageTitle;
  openModal(popupImageZoom);
};

const likeCard = function(evt){
  evt.target.classList.toggle('cards__like_active');
}

const deleteCard = function(evt){
  evt.target.closest('.cards__item').remove();
}

initialCards.forEach((card) =>
renderInitialCards(card, cardsArea, likeCard, deleteCard, openImagePopup),
);

const addNewCard = function (evt) {
  evt.preventDefault();
  const name = nameCardInput.value;
  const link = linkCardInput.value
  const description = name;
  const card = {name, link, description};
  renderInitialCards(card, cardsArea, likeCard, deleteCard, openImagePopup);
  evt.target.reset()
  closeModal(popupCards);
}

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

document.addEventListener('click', closeModalByOverlay);