'use strict'

var gElCanvas;
var gCtx;

function onInit() {
    gElCanvas = document.querySelector('canvas');
    gCtx = gElCanvas.getContext('2d');
    drawImg()
    renderImgs();
}


function renderImgs(){
    let imagesContainer = document.querySelector(".images-container");
    let images = getImgsForDisplay();
    images.forEach(img => {
      imagesContainer.innerHTML += `<img class="img img-${img.id}" onclick="onSelectImg(${img.id})" src="${img.url}"/>`
    });
}


function onSelectImg(imgId) {
    selectImg(imgId);
    drawImg();
}

function drawImg() {
    var img = new Image();
    img.src = `./meme-imgs (square)/${getImgId()}.jpg`;
    img.onload = () => {
      gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
      drawText(getText(), 10, 50);
    };
  }


  function drawText(text, x, y) {
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white';
    gCtx.font = '40px Impact';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
  }

  function onAddText() {
      const elText = document.querySelector('.text').value;
      addText(elText);
      drawImg();
  }