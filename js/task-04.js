// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


let counterValue = 0;

const buttonEl = document.querySelectorAll("button");
const spanEl = document.querySelector("#value");
console.log(buttonEl[0].dataset.action);
console.log(buttonEl[1].dataset.action);
console.log(spanEl.textContent);

const decrClick = () => {
    console.log("клік на кнопці");
    counterValue -= 1;
    spanEl.textContent = counterValue;
}

buttonEl[0].addEventListener('click', decrClick);


const incClick = () => {
    console.log("клік на кнопці");
    counterValue += 1;
    spanEl.textContent = counterValue;
}

buttonEl[1].addEventListener('click', incClick);





