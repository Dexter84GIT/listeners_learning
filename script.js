'use strict'

let colorChangeButton = document.querySelector('#btn');
let colorChangeSquare = document.querySelector('#square');
let colorInput = document.querySelector('#text');
let destroyTheButton = document.querySelector('#e_btn');
let roundWidthRange = document.querySelector('#range');
let bigRedRound = document.querySelector('#circle');

const changeColor = function() {   
    colorInput.addEventListener('input', changeColor);
    colorChangeSquare.style.backgroundColor = colorInput.value;
    colorInput.removeEventListener('input', changeColor);
}
colorChangeButton.addEventListener('click', changeColor);

destroyTheButton.style.display = 'none';

let roundWidth = function(e) {
    bigRedRound.style.width = `${e.target.value}%`;
    bigRedRound.style.height = `${e.target.value}%`;
}
roundWidthRange.addEventListener('change', roundWidth)












