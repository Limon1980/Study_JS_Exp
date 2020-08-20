'use strict';


const inp = document.querySelector('input');


let inpText = inp.oninput = function(){
 return inp.value;
};

function clear() {
  inp.value = '';
  }

const but = document.querySelector('button');

but.addEventListener('click', function(){
  let liAll = document.querySelectorAll('li');
  let len = liAll.length;
  console.log(liAll);
  liAll[len-1].insertAdjacentHTML('afterend', `<li>${inpText()[0].toUpperCase() + inpText().substr(1)}</li>`);
  console.log('Номер');
  clear();
});


