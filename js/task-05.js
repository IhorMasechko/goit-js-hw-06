let inputElement = document.querySelector('#name-input');
inputElement.addEventListener('input', changeInput);

let outputElement = document.querySelector('#name-output');

function changeInput(event) {
  inputElement = event.currentTarget.value;

  inputElement === ' ' ? 'Anonymous' : (outputElement.innerText = inputElement);
}
