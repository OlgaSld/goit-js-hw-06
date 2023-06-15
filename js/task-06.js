// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.


const textInput = document.querySelector('#validation-input');
console.dir(textInput);
const inputDataLength = textInput.getAttribute('data-length');
console.log(inputDataLength);

const checkInputValueLength = () => {
    if (Number(textInput.value.length) === Number(inputDataLength)) {
        if (textInput.classList.contains('invalid')) {
            textInput.classList.replace('invalid', 'valid');
        } else {textInput.classList.add('valid'); 
        }
    } else {
        if (textInput.classList.contains('valid')) {
            textInput.classList.replace('valid', 'invalid');
        } else {
        textInput.classList.add('invalid')
        }
    };
}

textInput.addEventListener('blur', checkInputValueLength);







