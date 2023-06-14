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
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const newBoxEl = document.querySelector('#boxes');

buttonCreate.addEventListener('click', createBoxes());

buttonDestroy.addEventListener('click', () => {
  inputQuantity.innerHTML = '';
});

let amount = Number(inputQuantity.value);

function createBoxes(amount) {
  if (amount > 0) {
  for (let i = 0, i <= amount; i += 1) {
    const item = document.createElement('div');

    item.style.width = 30 + (10 * 1) + 'px';
    item.style.height = 30 + (10 * 1) + 'px';
    item.style.backgroundColor = getRandomHexColor();

    newBoxEl.append(item);
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

