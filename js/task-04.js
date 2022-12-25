let valueElement = Number(document.querySelector('#value').textContent);

let counterValue = document.querySelector('#value');

const decrementBtn = document.querySelector('#counter').firstElementChild;
const incrementBtn = document.querySelector('#counter').lastElementChild;

incrementBtn.addEventListener('click', event => {
  valueElement += 1;

  counterValue.innerText = valueElement;
});

decrementBtn.addEventListener('click', event => {
  valueElement -= 1;
  counterValue.innerText = valueElement;
});
