import { spreadsheet, allInput, button } from './SearchName.js'

const { inputEls, recordTbody, appellationEl, shelfEl, weightEl, dateEl } = allInput();
const { tableDivEl, tableEl } = spreadsheet();
const { btnEl } = button();

//реализовать занесение записи в таблицу делается через this.name
export function formFillingTable() {

    const record = {
        id: Date.now(),
        appellation: document.querySelector('#appellation').value,
        shelf: document.querySelector('#shelf').value,
        weight: document.querySelector('#weight').value,
        date: document.querySelector('#date').value
    };

    let records = JSON.parse(localStorage.getItem('record')) || [];
    records.push(record);
    localStorage.setItem('record', JSON.stringify(records));
}


//теперь создаем кнопку удалить к каждой записи
function deleteRecord(id) {
    let records = JSON.parse(localStorage.getItem('record')) || [];

    //фильтруем записи чтобы удалить по id 
    records = records.filter(record => record.id !== id);

    //достаем нужное нам id и переводим обратно в объект
    localStorage.setItem('record', JSON.stringify(records));

    //сразу записываем название будущей функции, которая будет отображать запись в нашей таблице 
    renderTable();
}


//создаем функцию renderTable которая будет отображать запись
export function renderTable() {

    const records = JSON.parse(localStorage.getItem('record')) || [];

    recordTbody.innerHTML = '';

    records.forEach((item) => {
        const row = document.createElement('tr');
        row.classList.add('record-tr')
        row.innerHTML = `
        <td class="record">${item.appellation}</td>
        <td class="record">${item.shelf}</td>
        <td class="record">${item.weight}</td>
        <td class="record">${item.date}</td>
        <td class="record"><button class="dlt" data-id="${item.id}">🗑️</button></td>
        `;

        recordTbody.appendChild(row);
    });

    //вешаем событие на кнопку "удалить"
    document.querySelectorAll('.dlt').forEach(btn => {
        btn.onclick = () => deleteRecord(Number(btn.dataset.id));
    });
}

renderTable();