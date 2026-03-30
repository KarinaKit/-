import { addRecords, spreadsheet, boxForm, allInput } from './SearchName.js'

const { addREl } = addRecords();
const { tableDivEl, tableEl } = spreadsheet();
const { formEl } = boxForm();
const { inputEls } = allInput();


//привязать клик к кнопке "добавить запись"
addREl.addEventListener('click', function (e) {
    e.preventDefault()

    console.log('Нажали на кнопку "Добавить запись"');

    tableDivEl.style.display = 'none';
    formEl.style.display = 'block';

    inputEls.forEach((input) => {
        input.value = ''; //очистка полей
    })
});