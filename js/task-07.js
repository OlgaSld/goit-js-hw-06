// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>


const sizeInput = document.querySelector('#font-size-control');
console.dir(sizeInput);

const textSpan = document.querySelector('#text');
console.log(textSpan);


const changeSizeInput = () => {
    textSpan.style.fontSize = `${sizeInput.value}px`;
};

sizeInput.addEventListener('input', changeSizeInput);











// const sizeInput = document.querySelector('#font-size-control');
// console.dir(sizeInput);

// const textSpan = document.querySelector('#text');
// console.log(textSpan);

// const changeSizeInput = (evt) => {
//     textSpan.style.fontSize = evt.currentTarget.value + 'px';
//     console.log(evt.currentTarget.value);
// }

// sizeInput.addEventListener('input', changeSizeInput);