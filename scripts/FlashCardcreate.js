
let 
    frontInput = document.getElementById('frontSide'),
    backInput = document.getElementById('backside');
    

const buttonElement = document.getElementById('btn');

buttonElement.addEventListener('click', function (event) {
  alert('Element clicked through function!');
});
frontInput.addEventListener('keyup', e => {
  e.preventDefault();
  document.querySelector('p.frontp').innerHTML = frontInput.value;
});

backInput.addEventListener('keyup', e => {
  e.preventDefault();let frontInput = document.getElementById("frontSide"),
      backInput = document.getElementById("backside");


  frontInput.addEventListener("keyup", e => {
    e.preventDefault();
    document.querySelector("p.frontp").innerHTML = frontInput.value;
  });

  backInput.addEventListener("keyup", e => {
    e.preventDefault();
    document.querySelector("p.backp").innerHTML = backInput.value;
  });

  document.querySelector('p.backp').innerHTML = backInput.value;
}); 


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