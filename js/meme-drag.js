'use strict'

var gStartPos
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']

function addMouseListeners() {
  gElCanvas.addEventListener('mousemove', onMove);
  gElCanvas.addEventListener('mousedown', onDown);
  gElCanvas.addEventListener('mouseup', onUp);
}

function addTouchListeners() {
  gElCanvas.addEventListener('touchmove', onMove);
  gElCanvas.addEventListener('touchstart', onDown);
  gElCanvas.addEventListener('touchend', onUp);
}


function onDown(ev) {
  const pos = getEvPos(ev);
  if (!isLineClicked(pos)) return;
  setLineDrag(true);
  gStartPos = pos;
  document.body.style.cursor = 'grabbing';
}


function onMove(ev) {
  const line = getLineSelected();
  if (line.isDrag) {
    const pos = getEvPos(ev);
    const dx = pos.x - gStartPos.x;
    const dy = pos.y - gStartPos.y;
    gStartPos = pos;
    moveLine(dx, dy);
    renderImg();
  }
}


function onUp() {
  setLineDrag(false);
  document.body.style.cursor = 'grab';
}


function getEvPos(ev) {
  var pos = {
    x: ev.offsetX,
    y: ev.offsetY
  }
  if (gTouchEvs.includes(ev.type)) {
    ev.preventDefault();
    ev = ev.changedTouches[0];
    pos = {
      x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
      y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
    }
  }
  return pos
}


function isLineClicked(clickedPos) {
  const { pos } = getLineSelected();
  const distance = Math.sqrt((pos.x - clickedPos.x) ** 2 + (pos.y - clickedPos.y) ** 2);
  return distance <= getLineSelected().size;
}


function setLineDrag(isDrag) {
  getLineSelected().isDrag = isDrag;
}


function moveLine(dx, dy) {
  getLineSelected().pos.x += dx;
  getLineSelected().pos.y += dy;
}
