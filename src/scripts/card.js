import {openModal} from '../scripts/modal'

const popupImageZoom = document.querySelector('#image-popup');
const popupImageZoomDescription = popupImageZoom.querySelector('.popup__description');
const popupImageZoomImage = popupImageZoom.querySelector('.popup__image');


export const addCards = function (name, link) {
    const contentCardTemplate = document.querySelector('#card-template').content;
    const copyCardTemplate = contentCardTemplate.querySelector('.cards__item').cloneNode(true);
    const cardsImage = copyCardTemplate.querySelector('.cards__image');
    const cardDescription = copyCardTemplate.querySelector('.cards__description');

    cardDescription.textContent = name;
    cardsImage.src = link;
    cardsImage.alt = name;

    copyCardTemplate.querySelector('.cards__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('cards__like_active');
    });

    copyCardTemplate.querySelector('.cards__delete').addEventListener('click', function (evt) {
    evt.target.closest('.cards__item').remove();
    });

    const getZoomImages = function () {
    popupImageZoomDescription.textContent = name;
    popupImageZoomImage.src = link;
    popupImageZoomImage.alt = name;
    openModal(popupImageZoom);
    }

    cardsImage.addEventListener('click', getZoomImages);

    return copyCardTemplate;
}