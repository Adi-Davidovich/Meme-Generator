'use strict'

var gImgs = [
    { id: 1, url: './meme-imgs (square)/1.jpg', keywords: ['happy'] },
    { id: 2, url: './meme-imgs (square)/2.jpg', keywords: ['trump', 'fake news'] },
    { id: 3, url: './meme-imgs (square)/3.jpg', keywords: ['sleep'] },
    { id: 4, url: './meme-imgs (square)/4.jpg', keywords: ['cat', 'meow', 'animal'] },
    { id: 5, url: './meme-imgs (square)/5.jpg', keywords: ['success', 'baby'] },
    { id: 6, url: './meme-imgs (square)/6.jpg', keywords: ['aliens'] },
    { id: 7, url: './meme-imgs (square)/7.jpg', keywords: [''] },
    { id: 8, url: './meme-imgs (square)/8.jpg', keywords: [''] },
    { id: 9, url: './meme-imgs (square)/9.jpg', keywords: [''] },
    { id: 10, url: './meme-imgs (square)/10.jpg', keywords: [''] },
    { id: 11, url: './meme-imgs (square)/11.jpg', keywords: [''] },
    { id: 12, url: './meme-imgs (square)/12.jpg', keywords: [''] },
    { id: 13, url: './meme-imgs (square)/13.jpg', keywords: [''] },
    { id: 14, url: './meme-imgs (square)/14.jpg', keywords: [''] },
    { id: 15, url: './meme-imgs (square)/15.jpg', keywords: [''] },
    { id: 16, url: './meme-imgs (square)/16.jpg', keywords: [''] },
    { id: 17, url: './meme-imgs (square)/17.jpg', keywords: [''] },
    { id: 18, url: './meme-imgs (square)/18.jpg', keywords: [''] }
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
                x: 250,
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
    gMeme.lines[gMeme.selectedLineIdx].isSelected = false;
    const line = {
        txt: 'ENTER TEXT HERE',
        size: 40,
        align: 'center',
        font: 'Impact',
        color: 'white',
        pos: {
            x: gElCanvas.width / 2,
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
    gMeme.lines[0].isSelected = true;
}


function addText(text) {
    gMeme.lines[gMeme.selectedLineIdx].txt = text;
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
    gMeme.lines[gMeme.selectedLineIdx].isSelected = false;
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx = 0;
    else gMeme.selectedLineIdx += 1;
    gMeme.lines[gMeme.selectedLineIdx].isSelected = true;
}


function changeTxtAlign(align) {
    const line = getLineSelected();
    if (align === 'l') {
        line.pos.x = 22;
        line.align = 'left';
    }
    else if (align === 'c') {
        line.pos.x = gElCanvas.width / 2;
        line.align = 'center';
    }
    else if (align = 'r') {
        line.pos.x = gElCanvas.width - 22;
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
            x: gElCanvas.width / 2,
            y: 50
        },
        isSelected: true
    };
    gMeme.lines = [dl];
}
