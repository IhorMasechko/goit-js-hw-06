function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorName = document.querySelector('span.color');
const changeColorButton = document.querySelector('button.change-color');
const bodyColor = document.querySelector('body');

changeColorButton.addEventListener('click', () => {
  let backColor = getRandomHexColor();
  bodyColor.style.backgroundColor = backColor;
  colorName.textContent = backColor;
});
