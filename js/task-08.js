// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. 
// Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.



const formEl = document.querySelector('.login-form');

const dataForm = {};

function onFormSubmit(evt) {
    evt.preventDefault();
    const {
        elements: { email, password }
    } = evt.currentTarget;

    console.log(evt.currentTarget);

    if (email.value === "" || password.value === "") {
        alert(`Please fill in all the fields!`);
    } else {
        dataForm.email = email.value,
        dataForm.password = password.value
        
        console.log(dataForm);
    } 
    evt.currentTarget.reset();  
    
}

formEl.addEventListener('submit', onFormSubmit);


