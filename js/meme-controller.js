'use strict'

var gElCanvas;
var gCtx;
var gSelectedImgUrl;

function onInit() {
  gElCanvas = document.querySelector('canvas');
  gCtx = gElCanvas.getContext('2d');
  drawImg();
  renderImgs();
}


function renderImgs(imageList = getImgsForDisplay()) {
  let elImagesContainer = document.querySelector(".images-container");
  elImagesContainer.innerHTML = '';
  imageList.forEach(img => {
    elImagesContainer.innerHTML += `<img class="img img-${img.id}" onclick="onSelectImg(${img.id})" src="${img.url}"/>`
  });
}


function onSelectImg(imgId) {
  const elEditor = document.querySelector('.editor');
  elEditor.style.display = 'flex';
  const elGallery = document.querySelector('.gallery');
  elGallery.style.display = 'none';
  resizeCanvas();
  selectImg(imgId);
  defaultLine();
  _setFont();
  _clearInputTxt();
  renderImg();
}


function renderImg(){
  drawImg();
}


function drawImg() {
  var img = new Image();
  img.src = `./meme-imgs (square)/${getImgId()}.jpg`;
  gSelectedImgUrl = img.src;
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
    return getLines().map(line => {
      drawText(line.txt, line.pos.x, line.pos.y, line.align, line.font, line.color, line.size);
      if (line.isSelected) drawRect(0 + 10, line.pos.y - 40);
    })

  };
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


function onSearchImg(searchValue) {
  const filteredList = searchImg(searchValue);
  renderImgs(filteredList);
}


function onAddLine() {
  addLine();
  _clearInputTxt();
  renderImg();
}


function onDeleteLine() {
  deleteLine();
  renderImg();
}


function onAddText(txt) {
  addText(txt);
  renderImg();
}


function onChangeTxtSize(size) {
  changeTxtSize(size);
  renderImg();
}


function onChangeLinePos(position) {
  changeLinePos(position);
  renderImg();
}


function onSwitchLine() {
  switchLine();
  document.querySelector('.text-entered').value = getLineSelected().txt;
  renderImg();
}


function onChangeTxtAlign(align) {
  changeTxtAlign(align);
  renderImg();
}


function onChangeFont(font) {
  changeFont(font);
  renderImg();
}


function onChangeTxtColor(elColor) {
  const color = elColor.value;
  changeColor(color);
  renderImg();
}


function onDownloadCanvas(elLink) {
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


function _clearInputTxt() {
  const txt = getLineSelected().txt;
  const elInputTxt = document.querySelector('.text-entered');
  elInputTxt.placeholder = txt;
  elInputTxt.value = '';
}


function _setFont() {
  const elSelect = document.querySelector('[name="fonts"]');
  elSelect.value = 'Impact';
}


function getFont() {
  const elSelect = document.querySelector('[name="fonts"]');
  return elSelect.value;
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
