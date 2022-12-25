function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputElemet = document.querySelector('#controls>input');
const btnDataCreate = document.querySelector('button[data-create]');
const btnDataDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

const createBoxes = amount => {
  const result = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    result.push(box);
  }
  return result;
};

const destroyBoxes = () => {
  boxes.innerHTML = '';
};

btnDataCreate.addEventListener('click', () => {
  let newBoxes = createBoxes(inputElemet.value);
  boxes.append(...newBoxes);
});

btnDataDestroy.addEventListener('click', () => {
  let clear = destroyBoxes();
  const inputs = document.querySelectorAll('#controls>input');

  inputs.forEach(input => {
    input.value = '';
  });
});
