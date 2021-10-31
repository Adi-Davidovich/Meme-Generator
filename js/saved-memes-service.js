'use strict'

var gSavedMemes = [];

function saveMeme(data) {
    if (!gSavedMemes || gSavedMemes.length === 0) gSavedMemes = [data];
    else gSavedMemes.push(data);
    saveToStorage('memeDB', gSavedMemes);
}


function getSavedMemes() {
    let memes = loadFromStorage('memeDB')
    gSavedMemes = memes;
    return gSavedMemes;
}