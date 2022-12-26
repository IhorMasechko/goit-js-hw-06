let inputElement = document.querySelector('#name-input');
inputElement.addEventListener('input', changeInput);

let outputElement = document.querySelector('#name-output');

function changeInput(event) {
  outputElement.textContent = event.currentTarget.value;
  if (event.currentTarget.value === '') {
    outputElement.textContent = 'Anonymous';
  }
}
