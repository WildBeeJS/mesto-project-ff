function escapeListener(evt) {
        if (evt.key==="Escape"){
        const activePopup = document.querySelector('.popup_opened');
        closeModal(activePopup);
    }
}

export const openModal = function (popupName) {
    popupName.classList.add('popup_opened');
    document.addEventListener('keydown', escapeListener);
}

export const closeModal = function (popupName) {
    popupName.classList.remove('popup_opened');
    document.removeEventListener('keydown', escapeListener);
}

document.addEventListener('click', function(evt){
    if (evt.target.classList.contains('popup_opened')){
    closeModal(evt.target)
    }
})