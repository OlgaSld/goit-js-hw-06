// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. 
// Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const inputQuantity = document.querySelector('#controls');
console.dir(inputQuantity);
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const newBoxEl = document.querySelector('#boxes');

buttonCreate.addEventListener('click', createBoxes);

buttonDestroy.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = inputQuantity.firstElementChild.value;
  console.log(amount);
  const boxes = [];

  if (amount > 0) {
    for (let i = 0; i <= amount; i += 1) {
      const item = document.createElement('div');
      const size = 30 + i * 10;
      const color = getRandomHexColor();

      item.style.width = `${size}px`;
      item.style.height = `${size}px`;
      item.style.backgroundColor = color;

      boxes.push(item);

    // item.style.width = 30 + (10 * 1) + 'px';
    // item.style.height = 30 + (10 * 1) + 'px';
    // item.style.backgroundColor = getRandomHexColor();

    newBoxEl.append(...boxes);
  }
  }
}

function destroyBoxes() {
  newBoxEl.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

