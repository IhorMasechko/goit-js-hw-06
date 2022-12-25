const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ulList = document.querySelector('#ingredients');
const ingr = [];

ingredients.forEach(ingredient => {
  const list = document.createElement('li');
  list.className = 'item';
  list.textContent = ingredient;
  ingr.push(list);
});

ulList.append(...ingr);
