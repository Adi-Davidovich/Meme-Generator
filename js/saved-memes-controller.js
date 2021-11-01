'use strict'


function renderSavedMemes() {
    let memes = getSavedMemes();
    let elMemesContainer = document.querySelector('.memes-container');
    if (!memes || memes.length === 0) return;
    else {
        memes.forEach(meme => elMemesContainer.innerHTML += `<img class="img" src="${meme}"/>`);
    }
}


function onSaveMeme(elBtn) {
    let img = new Image()
    img.src = gSelectedImgUrl;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        const lines = getLines().map(line =>drawText(line.txt, line.pos.x, line.pos.y, line.align, line.font, line.color, line.size));
        const data = gElCanvas.toDataURL();
        saveMeme(data);
        renderSavedMemes();
        elBtn.innerHTML = 'Saved!'
        setTimeout(()=> elBtn.innerHTML = 'Save',1500);
        return lines;
    }
}

