   
var submitButton = document.querySelector('.submit-btn');
var frontInput = document.getElementById('frontSide');
var backInput = document.getElementById('backside');
var frontp = document.querySelector('#frontp');
var backp = document.querySelector('#backp');

submitButton.addEventListener('click', e => {
   e.preventDefault();
   frontp.innerHTML = frontInput.value;
   backp.innerHTML = backInput.value;
});