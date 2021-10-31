'use strict'

var gImgs = [
    { id: 1, url: './meme-imgs (square)/1.jpg', keywords: ['happy', 'animal', 'dog', 'cute', 'two'] },
    { id: 2, url: './meme-imgs (square)/2.jpg', keywords: ['trump', 'fake news'] },
    { id: 3, url: './meme-imgs (square)/3.jpg', keywords: ['sleep', 'animal', 'dog', 'cute', 'two'] },
    { id: 4, url: './meme-imgs (square)/4.jpg', keywords: ['cat', 'meow', 'animal', 'sleep'] },
    { id: 5, url: './meme-imgs (square)/5.jpg', keywords: ['success', 'baby'] },
    { id: 6, url: './meme-imgs (square)/6.jpg', keywords: ['aliens', 'big', 'huge'] },
    { id: 7, url: './meme-imgs (square)/7.jpg', keywords: ['surprise', 'baby', 'cute', 'funny'] },
    { id: 8, url: './meme-imgs (square)/8.jpg', keywords: ['thinking'] },
    { id: 9, url: './meme-imgs (square)/9.jpg', keywords: ['baby', 'laugh'] },
    { id: 10, url: './meme-imgs (square)/10.jpg', keywords: ['obama', 'laugh'] },
    { id: 11, url: './meme-imgs (square)/11.jpg', keywords: ['kiss', 'fight', 'two'] },
    { id: 12, url: './meme-imgs (square)/12.jpg', keywords: ['zadik', 'know', 'right'] },
    { id: 13, url: './meme-imgs (square)/13.jpg', keywords: ['cheers', 'congratulations', 'leonardo', 'dicaprio'] },
    { id: 14, url: './meme-imgs (square)/14.jpg', keywords: ['sunglasses', 'matrix'] },
    { id: 15, url: './meme-imgs (square)/15.jpg', keywords: ['little', 'small', 'know'] },
    { id: 16, url: './meme-imgs (square)/16.jpg', keywords: ['star', 'wars', 'laugh', 'embarrassed'] },
    { id: 17, url: './meme-imgs (square)/17.jpg', keywords: ['putin', 'two'] },
    { id: 18, url: './meme-imgs (square)/18.jpg', keywords: ['toy', 'story', 'all', 'one', 'day'] }
]

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'ENTER TEXT HERE',
            size: 40,
            align: 'center',
            font: 'Impact',
            color: 'white',
            pos: {
                x: getCanvasSize() / 2,
                y: 50
            },
            isSelected: true
        }
    ]
}


function getImgsForDisplay() {
    return gImgs;
}


function selectImg(imgId) {
    gMeme.selectedImgId = imgId;
    if (gMeme.lines.length > 1) {
        gMeme.lines.splice(1);
        gMeme.selectedLineIdx = 0;
        gMeme.lines[0].isSelected = true;
    }
}


function addLine() {
    if (gMeme.lines.length > 1) getLineSelected().isSelected = false;
    const line = {
        txt: 'ENTER TEXT HERE',
        size: 40,
        align: 'center',
        font: 'Impact',
        color: 'white',
        pos: {
            x: getCanvasSize() / 2,
            y: gMeme.lines.length === 1 ? gElCanvas.height - 20 : gElCanvas.height / 2
        },
        isSelected: true
    }
    gMeme.lines.push(line)
    gMeme.selectedLineIdx = gMeme.lines.length - 1;
}


function searchImg(searchValue) {
    return gImgs.filter(img => img.keywords.some(keyword => keyword.startsWith(searchValue)));

}


function deleteLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1);
    gMeme.selectedLineIdx = 0;
    if (gMeme.lines.length > 1) gMeme.lines[0].isSelected = true;
}


function addText(text) {
    getLineSelected().txt = text;
}


function changeTxtSize(size) {
    const line = getLineSelected();
    if (size === 'small') line.size -= 1;
    else line.size += 1;
}


function changeLinePos(position) {
    const line = getLineSelected();
    if (position === 'up') line.pos.y -= 10;
    else line.pos.y += 10;
}


function switchLine() {
    getLineSelected().isSelected = false;
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx = 0;
    else gMeme.selectedLineIdx += 1;
    getLineSelected().isSelected = true;
}


function changeTxtAlign(align) {
    const line = getLineSelected();
    if (align === 'l') {
        line.pos.x = 20;
        line.align = 'left';
    }
    else if (align === 'c') {
        line.pos.x = getCanvasSize() / 2;
        line.align = 'center';
    }
    else if (align = 'r') {
        line.pos.x = getCanvasSize() - 20;
        line.align = 'right';
    }
}


function changeFont(option) {
    const line = getLineSelected();
    if (option === 'impact') {
        line.font = 'Impact';
    }
    else if (option === 'arial') {
        line.font = 'Arial';
    }
}


function changeColor(color) {
    const line = getLineSelected();
    line.color = color;
}


function getImgId() {
    return gMeme.selectedImgId;
}


function getLineSelected() {
    return gMeme.lines[gMeme.selectedLineIdx];
}


function getLines() {
    return gMeme.lines;
}


function getLineSelectedIdx() {
    return gMeme.selectedLineIdx;
}


function _setLineAlign() {
    const lines = gMeme.lines;
    lines.forEach(line => {
        line.align = 'center';
        line.pos.x = 250;
    })
}


function defaultLine() {
    const dl = {
        txt: 'ENTER TEXT HERE',
        size: 40,
        align: 'center',
        font: 'Impact',
        color: 'white',
        pos:
        {
            x: getCanvasSize() / 2,
            y: 50
        },
        isSelected: true
    };
    gMeme.lines = [dl];
}
