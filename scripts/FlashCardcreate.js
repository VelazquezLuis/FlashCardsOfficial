(function () {
  'use strict';

  function Person () {
    this.front = document.querySelector('#frontSide').value;
    this.back = document.querySelector('#backside').value;
    
  }

  var submitButton = document.querySelector('#add1');
  var submitButton = document.querySelector('#add2');
  var frontInput = document.getElementById('frontSide');
  var backInput = document.getElementById('backside');

  frontInput.addEventListener('submit', e => {
    e.preventDefault();
    document.querySelector('#frontp').innerHTML = frontInput.value;
  });
  
  backInput.addEventListener('submit', e => {
    e.preventDefault();
    let frontInput = document.getElementById("frontSide"),
        backInput = document.getElementById("backside");
  
  
    frontInput.addEventListener("submit", e => {
      e.preventDefault();
      document.querySelector("p.frontp").innerHTML = frontInput.value;
    });
  
    backInput.addEventListener("submit", e => {
      e.preventDefault();
      document.querySelector("p.backp").innerHTML = backInput.value;
    });
  
    document.querySelector('p.backp').innerHTML = backInput.value;
  });

}());

// let 
//     frontInput = document.getElementById('frontSide'),
//     backInput = document.getElementById('backside');
    


// frontInput.addEventListener('keyup', e => {
//   e.preventDefault();
//   document.querySelector('p.frontp').innerHTML = frontInput.value;
// });

// backInput.addEventListener('keyup', e => {
//   e.preventDefault();let frontInput = document.getElementById("frontSide"),
//       backInput = document.getElementById("backside");


//   frontInput.addEventListener("keyup", e => {
//     e.preventDefault();
//     document.querySelector("p.frontp").innerHTML = frontInput.value;
//   });

//   backInput.addEventListener("keyup", e => {
//     e.preventDefault();
//     document.querySelector("p.backp").innerHTML = backInput.value;
//   });

//   document.querySelector('p.backp').innerHTML = backInput.value;
// });