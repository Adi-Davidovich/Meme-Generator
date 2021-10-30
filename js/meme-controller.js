'use strict'

var gElCanvas;
var gCtx;

function onInit() {
  gElCanvas = document.querySelector('canvas');
  gCtx = gElCanvas.getContext('2d');
  drawImg();
  renderImgs();

}


function renderImgs() {
  let elImagesContainer = document.querySelector(".images-container");
  let images = getImgsForDisplay();
  images.forEach(img => {
    elImagesContainer.innerHTML += `<img class="img img-${img.id}" onclick="onSelectImg(${img.id})" src="${img.url}"/>`
  });
}


function drawImg() {
  var img = new Image();
  img.src = `./meme-imgs (square)/${getImgId()}.jpg`;

  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
    return getLines().map(line => {
      drawText(line.txt, line.pos.x, line.pos.y, line.align, line.font, line.color, line.size);
      if (line.isSelected) drawRect(0 + 10, line.pos.y - 40);
    })

  };
}


function onSelectImg(imgId) {
  const elEditor = document.querySelector('.editor');
  elEditor.style.display = 'flex';
  const elGallery = document.querySelector('.gallery');
  elGallery.style.display = 'none';
  resizeCanvas();
  selectImg(imgId);
  defaultLine();
  drawImg();
}


function drawText(text, x, y, align, font, color, size) {
  gCtx.lineWidth = 2;
  gCtx.strokeStyle = 'black';
  gCtx.textAlign = align;
  gCtx.fillStyle = color;
  gCtx.font = `${size}px ${font}`;
  gCtx.fillText(text, x, y);
  gCtx.strokeText(text, x, y);
}


function onAddLine() {
  addLine();
  changeInputText();
  drawImg();
}


function onDeleteLine() {
  deleteLine();
  drawImg();
}


function onAddText() {
  const elTextEntered = document.querySelector('.text-entered').value;
  addText(elTextEntered);
  drawImg();
}


function onChangeTxtSize(btn) {
  changeTxtSize(btn.innerHTML);
  drawImg();
}


function onChangeLinePos(btn) {
  changeLinePos(btn.innerHTML);
  drawImg();
}


function onSwitchLine() {
  switchLine();
  changeInputText();
  drawImg();
}


function onChangeTxtAlign(align) {
  changeTxtAlign(align);
  drawImg();
}


function onChangeFont(elSelect) {
  const option = elSelect.value;
  changeFont(option);
  drawImg();
}


function onChangeTxtColor(elColor) {
  const color = elColor.value;
  changeColor(color);
  drawImg();
}


function downloadCanvas(elLink) {
  const data = gElCanvas.toDataURL();
  elLink.href = data;
  elLink.download = 'my-meme';
}


function drawRect(x, y) {
  const text = getLineSelected().txt;
  let metrics = gCtx.measureText(text);
  let fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
  gCtx.beginPath();
  gCtx.rect(x, y, gElCanvas.width - 20, fontHeight);
  gCtx.lineWidth = 2;
  gCtx.strokeStyle = 'grey';
  gCtx.stroke();
}


function changeInputText() {
  const text = getLineSelected().txt;
  document.querySelector('.text-entered').value = text;
}


function resizeCanvas() {
  const elContainer = document.querySelector('.canvas-container');
  gElCanvas.width = elContainer.offsetWidth;
  gElCanvas.height = elContainer.offsetHeight;
}


function onCloseEditor() {
  const elEditor = document.querySelector('.editor');
  elEditor.style.display = 'none';
  const elGallery = document.querySelector('.gallery');
  elGallery.style.display = 'block';
  clearCanvas();
}


function clearCanvas() {
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
}
