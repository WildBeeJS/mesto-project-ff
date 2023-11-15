const contentCardTemplate = document.querySelector('#card-template').content;

const createCard = function (card, deleteCard, likeCard, zoomCard) {
    const copyCardTemplate = contentCardTemplate.querySelector('.cards__item').cloneNode(true);
    const cardLikeButton = copyCardTemplate.querySelector('.cards__like');
    const cardDeleteButton = copyCardTemplate.querySelector('.cards__delete');
    const cardsImage = copyCardTemplate.querySelector('.cards__image');
    const cardDescription = copyCardTemplate.querySelector('.cards__description');

    cardDescription.textContent = card.name;
    cardsImage.src = card.link;
    cardsImage.alt = card.name;

    cardLikeButton.addEventListener("click", function(evt){
        likeCard(evt);
    })

    cardDeleteButton.addEventListener('click',function(evt){
        deleteCard(evt);
    })

    cardsImage.addEventListener('click', function(){
        zoomCard(cardsImage.src,cardsImage.alt,cardDescription.textContent)
    })

    return copyCardTemplate;
}

export const renderInitialCards = function (card, container, likeCard, deleteCard, zoomCard) {
    const newCard = createCard(card, deleteCard, likeCard, zoomCard);
    container.prepend(newCard)
}