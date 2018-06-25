(function () {
  'use strict';

  function Person () {
    this.name = document.querySelector('#name').value;
    this.email = document.querySelector('#email').value;
    this.phone = document.querySelector('#phone').value;
    this.description = document.querySelector('#description').value;
  }

  var submitButton = document.querySelector('button[type=submit]');
  var formElement = document.querySelector('form');
  var formElement1 = document.forms[0];

  // formElement.addEventListener('submit', () => {
  //   var p = new Person();
  //   alert('thank you, ' + p.name);
  // })

  submitButton.addEventListener('click', (lui) => {
    //lui.stopPropagation();
    lui.preventDefault();
    var p = new Person();
    console.log(p.name);
    var p = new Person();
    console.log(p.email);
    var p = new Person();
    console.log(p.phone);
    var p = new Person();
    console.log(p.description);
  });

}());