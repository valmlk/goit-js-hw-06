const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const createList = ingredients => {
  return ingredients.map(ingredient => {
    const newEl = document.createElement("li");
    newEl.textContent = ingredient;
    newEl.classList.add("item");
    return newEl
  })
};

const elements = createList(ingredients);
list.append(...elements);