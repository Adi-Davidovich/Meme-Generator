'use strict'

var gImgs = [
    { id: 1, url: './meme-imgs (square)/1.jpg', keywords: ['happy'] },
    { id: 2, url: './meme-imgs (square)/2.jpg', keywords: ['trump', 'fake news'] },
    { id: 3, url: './meme-imgs (square)/3.jpg', keywords: ['sleep'] },
    { id: 4, url: './meme-imgs (square)/4.jpg', keywords: ['cat', 'meow'] },
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
            txt: 'Idgsgs',
            size: 40,
            align: 'center',
            color: 'white',
            pos: {
                x: 200,
                y: 50
            }
        }
    ]
}


function getImgsForDisplay() {
    return gImgs;
}

function selectImg(imgId) {
    gMeme.selectedImgId = imgId;
}

function addText(text) {
    gMeme.lines[gMeme.selectedLineIdx].txt = text;
}

function changeTxtSize(btn) {
    if (btn === '-') gMeme.lines[gMeme.selectedLineIdx].size -= 1;
    else gMeme.lines[gMeme.selectedLineIdx].size += 1;
}


function changeLinePos(btn) {
    if (btn === '↑') gMeme.lines[gMeme.selectedLineIdx].pos.y -= 10;
    else gMeme.lines[gMeme.selectedLineIdx].pos.y += 10;
}

function getImgId() {
    return gMeme.selectedImgId;
}


function getLine() {
    return gMeme.lines[gMeme.selectedLineIdx];
}
