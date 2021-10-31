'use strict'

function onOpenMenu() {
    document.body.classList.add('menu-open');
}

function onShowPage(page) {
    document.body.classList.remove('menu-open');
    const elGallery = document.querySelector('.gallery');
    const elEditor = document.querySelector('.editor');
    const elSavedMemes = document.querySelector('.saved-memes');
    if (page === 'gallery'){
        elGallery.style.display = 'block';
        elEditor.style.display = 'none';
        elSavedMemes.style.display = 'none';
    }
    else if (page === 'savedMemes') {
        elGallery.style.display = 'none';
        elEditor.style.display = 'none';
        elSavedMemes.style.display = 'block';
    }
}

function getCanvasSize() {
    const elCanvas = document.querySelector('canvas');
    return elCanvas.width;
}
