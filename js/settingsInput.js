import { boxForm, allInput, errorInput, button, loader, spreadsheet} from "./SearchName.js";
import { formFillingTable, renderTable } from './table.js'
import { initSort } from "./sortRecords.js";
import { initShelfSort } from "./sortRecords.js";
import { initTimeSort } from './sortRecords.js'
import { initWeightSort } from "./sortRecords.js";


const { formEl } = boxForm();
const { inputEls, listEl, itemEl } = allInput();
const { errorEl, errEl } = errorInput();
const { btnEl } = button();
const { loaderEl, errLoader } = loader();
const { tableDivEl, tableEl } = spreadsheet();


//проходимся по всем #input 
//повесили событие на инпут наиминования 
inputEls.forEach(input => {
    input.addEventListener('input', function (e) {

    // this.value = this.value.replace(/\d/g, ''); //удаляем числа
    const val = this.value.trim();

        if(val === '') {
            errorEl.style.display = 'block'
            errorEl.textContent = 'Поле не может быть пустым'
            errorEl.style.color = 'red'
        } else {
            errorEl.textContent = ''
            errorEl.style.display = 'none'
        }
    });
});

//повесим событие на btnEl для проверки заполнения input 
btnEl.addEventListener('click', function (e) {
    e.preventDefault();

    const hasEmpty = Array.from(inputEls).some(input => input.value.trim() === '')

    if (hasEmpty) {
        errEl.style.display = 'block'
        errEl.textContent = 'Заполните все поля!'
        errEl.style.color = 'red'
        errEl.style.fontSize = '14px'
    } else {
        //скрываем форму
        formEl.style.display = 'none';
        loaderEl.style.display = 'block';
        btnEl.disabled = true; //блокирует кнопку

        const startTime = Date.now(); //засекли начало времени

        const errorTimeout = setTimeout(() => {
            errLoader.style.display = 'block'
            errLoader.textContent = 'Медленное соединение с интернетом'
            errLoader.style.backgroundColor = 'red'
            errLoader.style.color = 'white'
            errLoader.style.width = '30%'
            errLoader.style.padding = '8px 23px'
            errLoader.style.textAlign = 'center'
            errLoader.style.borderRadius = '24px'
            errLoader.style.margin = '0 auto'
            errLoader.style.marginTop = '100px'
        }, 2000);

        setTimeout(() => {

            const endTime = Date.now(); //конец загрузки
            const duration = (endTime - startTime) / 1000 //переводим в секунды

            //включаем анимацию загрузки
            loaderEl.style.display = 'none';
            btnEl.disabled = false;

            formFillingTable();

            renderTable();

            if (duration >= 3) {
                loaderEl.style.display = 'none'
                errLoader.style.display = 'none'
                btnEl.disabled = false;
                //показываем таблицу
                tableDivEl.style.display = 'block';
                initSort();
                initShelfSort();
                initWeightSort();
                initTimeSort();
            }
        }, 9000);
    }
});