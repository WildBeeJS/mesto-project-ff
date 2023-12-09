import { deleteLike, putLike } from "./api.js";

const contentCardTemplate = document.querySelector('#card-template').content;

export const likeCard = (evt, cardId) => {
    const currentLikes = evt.target.parentNode.querySelector(".element__like-count");

    if (evt.target.classList.contains("cards__like_active")) {
        deleteLike(cardId)
        .then((updatedCard) => {
            evt.target.classList.remove("cards__like_active");
            currentLikes.textContent = updatedCard.likes.length;
        })
        .catch((err) => {
            console.log(err);
        });
    } else {
        putLike(cardId)
        .then((updatedCard) => {
            evt.target.classList.add("cards__like_active");
            currentLikes.textContent = updatedCard.likes.length;
        })
        .catch((err) => {
            console.log(err);
        });
    }
};

const createCard = function (card, userId, deleteCard, likeCard, zoomCard) {
    const copyCardTemplate = contentCardTemplate.querySelector('.cards__item').cloneNode(true);
    const cardLikeButton = copyCardTemplate.querySelector('.cards__like');
    const cardDeleteButton = copyCardTemplate.querySelector('.cards__delete');
    const cardsImage = copyCardTemplate.querySelector('.cards__image');
    const cardDescription = copyCardTemplate.querySelector('.cards__description');
    const cardLikeCount = copyCardTemplate.querySelector(".element__like-count");

    copyCardTemplate.dataset.cardId = card._id;
    copyCardTemplate.dataset.ownerId = card.owner._id;
    cardDescription.textContent = card.name;
    cardsImage.src = card.link;
    cardsImage.alt = card.name;

    cardLikeCount.textContent = card.likes.length;
    const isLiked = card.likes.some((like) => like._id === userId);
    if (isLiked) {
    cardLikeButton.classList.add("element__like_active");
}

    if (card.owner._id === userId) {
    cardDeleteButton.addEventListener("click", (evt) => {
        deleteCard(evt, card._id);
    });
    } else {
    cardDeleteButton.remove();
}

    cardLikeButton.addEventListener("click", function(evt){
        likeCard(evt, card._id);
    })

    cardsImage.addEventListener('click', function(){
        zoomCard(cardsImage.src,cardsImage.alt,cardDescription.textContent)
    })

    return copyCardTemplate;
}

export const renderInitialCards = function (card, userId, container, likeCard, deleteCard, zoomCard) {
    const newCard = createCard(card,userId, deleteCard, likeCard, zoomCard);
    container.prepend(newCard)
}