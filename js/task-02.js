// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.querySelector("#ingredients");

const itemEl = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = ingredient;
  return li;
})

console.log(itemEl);

listEl.append(...itemEl);






// ingredients.forEach(function (ingredient) {

// const itemEl = document.createElement('li');
// itemEl.textContent = ingredient;
// itemEl.classList.add('item');
//   console.log(itemEl); 
  
// const ingrEl = document.querySelector('#ingredients')
// console.log(ingrEl);

//   ingrEl.appendChild(itemEl);

// })