import { tableSort } from './SearchName.js'
import { renderTable } from './table.js'

const { nameTbEl, shelfTbEl, weightTbEl, timeTbEl } = tableSort();

// export function recordsSort() {

//     let records = JSON.parse(localStorage.getItem('record')) || [];

//     records.sort((a,b) => a.appellation.localeCompare(b.appellation));

//     localStorage.setItem('record', JSON.stringify(records));

//     renderTable();
// }

let isNameSorted = false;
let isShelfSorted = false;
let isWeightSorted = false;
let isTimeSorted = false;

export function recordsSort() {
    let records = JSON.parse(localStorage.getItem('record')) || [];

    if (!isNameSorted) {
        // Сортируем ОТ А ДО Я
        records.sort((a, b) => (a.appellation || "").localeCompare(b.appellation || ""));
        isNameSorted = true; // Меняем флаг для следующего клика
        console.log('Сортировка: А-Я');
    } else {
        // Сортируем ОТ Я ДО А (обратный порядок)
        records.sort((a, b) => (b.appellation || "").localeCompare(a.appellation || ""));
        isNameSorted = false; // Возвращаем флаг
        console.log('Сортировка: Я-А');
    }

    // Сохраняем и перерисовываем
    localStorage.setItem('record', JSON.stringify(records));
    renderTable();
}

export function initSort() {
    const { nameTbEl } = tableSort();

    if (nameTbEl) {
        nameTbEl.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Клик по сортировке appellation!');
            recordsSort();
            renderTable();
        });
    }
}

export function shelfsSort() {

    let records = JSON.parse(localStorage.getItem('record')) || [];

    if(!isShelfSorted) {
        records.sort((a, b) => (a.shelf || '').localeCompare(b.shelf || '', 'en'));
        isShelfSorted = true;
        console.log('Сортировка по a-z');
    } else {
        records.sort((a, b) => (b.shelf || '').localeCompare(a.shelf || '', 'en'));
        isShelfSorted = false;
        console.log('Сортировка z-a');
    }

    localStorage.setItem('record', JSON.stringify(records));
    renderTable();
}

export function initShelfSort() {
    const { shelfTbEl } = tableSort();

    if(shelfTbEl) {
        shelfTbEl.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Клик по сортировке shelf!');
            shelfsSort();
            renderTable();
        })
    }
}

export function weightSort() {
    let records = JSON.parse(localStorage.getItem('record')) || [];

    if (!isWeightSorted) {
        records.sort((a, b) => Number(a.weight) - Number(b.weight));
        isWeightSorted = true;
        console.log('Сортировка по весу от 1 >');
    } else {
        records.sort((a, b) => Number(b.weight) - Number(a.weight));
        isWeightSorted = false;
        console.log('Сортировка по весу от > 1');
    }

    localStorage.setItem('record', JSON.stringify(records));
    renderTable();
}

export function initWeightSort() {
    const { weightTbEl } = tableSort();

    if(weightTbEl) {
        weightTbEl.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Клик по сортировке weight!');
            weightSort();
        });
    }
}

export function TimeSort() {
    let records = JSON.parse(localStorage.getItem('record')) || [];

    if(!isTimeSorted) {
        // Сравниваем даты (они в формате YYYY-MM-DD, поэтому localeCompare сработает)
        records.sort((a, b) => (a.date || '').localeCompare(b.date || ''));
        isTimeSorted = true;
        console.log('Сортировка по дате >');
    } else {
        records.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
        isTimeSorted = false;
        console.log('Сортировка по дате <');
    }

    localStorage.setItem('record', JSON.stringify(records));
    renderTable();
}

export function initTimeSort() {
    const { timeTbEl } = tableSort();

    if(timeTbEl) {
        timeTbEl.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Клик по сортировке time!');
            TimeSort();
        })
    }
}