import {openModal,closeModal, closeModalByOverlay} from './scripts/modal.js'
import {renderInitialCards, likeCard} from './scripts/card.js'
import {clearValidation, enableValidation} from "./scripts/validation.js";
import {getInitialInfo, postNewCard, updateUserAvatar, updateUserProfile,
deleteCard as deleteCardFromServer} from "./scripts/api.js";
import './pages/index.css';


const editProfileIcon = document.querySelector('.profile__edit-button');
const addCardIcon = document.querySelector('.profile__add-button');
const popupProfile = document.querySelector('#profile-popup');
const popupCards = document.querySelector('#cards-popup');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__about');
const nameInput = popupProfile.querySelector('.popup__input_name_username');
const descriptionInput = popupProfile.querySelector('.popup__input_name_about');
const cardsArea = document.querySelector('.cards');
const closeButtons = document.querySelectorAll('.popup__close-button');
const popupImageZoom = document.querySelector('#image-popup');
const popupImageZoomDescription = popupImageZoom.querySelector('.popup__description');
const popupImageZoomImage = popupImageZoom.querySelector('.popup__image');
const popupProfileForm = document.forms["popup"];
const popupCardForm = document.forms["mesto"];
const profileAvatar = document.querySelector(".profile__avatar");
const popupConfirm = document.querySelector(".popup_type_confirm");
const popupConfirmButton = popupConfirm.querySelector(".popup__submit-button");
const popupAvatarForm = document.forms["edit-avatar"];
const avatarEditButton = document.querySelector(".profile__avatar-container");
const popupAvatar = document.querySelector(".popup_type_avatar");

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__disabled-button",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
let userId;

const fillProfileInfo = (userInfo) => {
  profileName.textContent = userInfo.name;
  profileDescription.textContent = userInfo.about;
  profileAvatar.style.backgroundImage = `url(${userInfo.avatar})`;
};

const renderCards = (initialCards, userId) => {
  initialCards.forEach((card) => {
    renderInitialCards(card, userId, cardsArea, likeCard, deleteCard, openImagePopup);
  });
};

const renderLoading = (isLoading, button) => {
  button.textContent = isLoading ? "Сохранение..." : "Сохранить";
};

const deleteCard = (evt, cardId) => {
  openModal(popupConfirm);
  popupConfirm.dataset.cardId = cardId;
};

const openPopupProfile = function () {
  clearValidation(popupProfileForm, validationConfig);
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  openModal(popupProfile);
}

const handleAvatarFormSubmit = async (evt) => {
  evt.preventDefault();
  renderLoading(true, popupAvatarForm.querySelector(".popup__submit-button"));
  updateUserAvatar(popupAvatarForm.link.value)
    .then((updatedProfile) => {
      fillProfileInfo(updatedProfile);
      closeModal(popupAvatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, popupAvatarForm.querySelector(".popup__submit-button"));
    });
};

const openImagePopup = (imageSrc, imageAlt, imageTitle) => {
  popupImageZoomImage.src = imageSrc;
  popupImageZoomImage.alt = imageAlt;
  popupImageZoomDescription.textContent = imageTitle;
  openModal(popupImageZoom);
};

const handleProfileFormSubmit = async (evt) => {
  evt.preventDefault();
  renderLoading(true, popupProfileForm.querySelector(".popup__submit-button"));
  updateUserProfile({
    name: popupProfileForm.userName.value,
    about: popupProfileForm.nameAbout.value,
  })
    .then((updatedProfile) => {
      fillProfileInfo(updatedProfile);
      closeModal(popupProfile);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, popupProfileForm.querySelector(".popup__submit-button"));
    });
};

const handleConfirmDelete = async (evt) => {
  deleteCardFromServer(popupConfirm.dataset.cardId)
    .then((result) => {
      const card = document.querySelector(`[data-card-id="${popupConfirm.dataset.cardId}"]`);
      card.remove();
      closeModal(popupConfirm);
    })
    .catch((err) => {
      console.log(err);
    });
};

const handleNewCardFormSubmit = async (evt) => {
  evt.preventDefault();
  renderLoading(true, popupCardForm.querySelector(".popup__submit-button"));
  const name = popupCardForm.elements.mestoName.value;
  const link = popupCardForm.elements.linkImage.value;
  postNewCard({ name, link })
    .then((newCard) => {
      renderInitialCards(newCard, userId, cardsArea, likeCard, deleteCard, openImagePopup);
      closeModal(popupCards);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, popupCardForm.querySelector(".popup__submit-button"));
    });
};

avatarEditButton.addEventListener("click", (evt) => {
  clearValidation(popupAvatarForm, validationConfig);
  popupAvatarForm.reset();
  openModal(popupAvatar);
});


editProfileIcon.addEventListener('click', openPopupProfile);
addCardIcon.addEventListener('click', () => {
  popupCardForm.reset();
  clearValidation(popupCardForm, validationConfig);
  openModal(popupCards)
});
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closeModal(popup));
});

popupProfile.addEventListener('submit', handleProfileFormSubmit);
popupCards.addEventListener('submit', handleNewCardFormSubmit);
popupAvatarForm.addEventListener("submit", handleAvatarFormSubmit);

document.addEventListener('click', closeModalByOverlay);
popupConfirmButton.addEventListener("click", handleConfirmDelete);

getInitialInfo()
  .then((result) => {
    const userInfo = result[0];
    userId = userInfo._id;
    const initialCards = result[1];
    fillProfileInfo(userInfo);
    renderCards(initialCards, userId);
  })
  .catch((err) => {
    console.log(err);
  });

enableValidation(validationConfig);