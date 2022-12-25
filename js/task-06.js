let inputElement = document.getElementById('validation-input');

let normalLenght = inputElement.getAttribute('data-length');
let totalLenght = parseInt(normalLenght, 10);

document.getElementById('validation-input').onblur = function () {
  console.log(this.value.length);

  if (this.value.length === totalLenght) {
    this.classList.remove('invalid');
    this.classList.add('valid');
  } else if (this.value.length === 0) {
    this.classList.remove('invalid');
    this.classList.remove('valid');
  } else if (this.value.length !== totalLenght && this.value.length !== 0) {
    this.classList.add('invalid');
  }
};
