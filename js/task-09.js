// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.


const buttonEl = document.querySelector('.change-color');
console.dir(buttonEl);
const randomBgColor = document.querySelector('.color');
console.log(randomBgColor); 
const bodyColor = document.querySelector('body');
console.log(bodyColor);


buttonEl.addEventListener('click', changeBodyColor);

function changeBodyColor(event) {
  bodyColor.style.backgroundColor = getRandomHexColor();
  randomBgColor.textContent = getRandomHexColor(name);
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}






