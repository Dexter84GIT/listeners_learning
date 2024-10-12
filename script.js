'use strict'

const colorChangeButton = document.querySelector('#btn');
const colorChangeSquare = document.querySelector('#square');
const colorInput = document.querySelector('#text');
const destroyTheButton = document.querySelector('#e_btn');
const roundWidthRange = document.querySelector('#range');
const bigRedRound = document.querySelector('#circle');

const changeColor = function() {   
    colorChangeSquare.style.backgroundColor = colorInput.value;
}
const roundWidth = function(e) {
    bigRedRound.style.width = `${e.target.value}%`;
    bigRedRound.style.height = `${e.target.value}%`;
}

colorChangeButton.addEventListener('click', changeColor);
colorInput.addEventListener('input', changeColor);
colorInput.removeEventListener('input', changeColor);
destroyTheButton.style.display = 'none';

roundWidthRange.addEventListener('input', roundWidth)












