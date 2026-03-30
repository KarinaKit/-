export function boxForm() {
    const formEl = document.querySelector('.box');

    return { formEl }
}

export function title() {
    const titleEl = document.getElementById('title');

    return { titleEl }
}

export function allInput() {
    const itemEl = document.querySelector('.item-input');
    const listEl = document.querySelector('.list-input');
    const inputEls = document.querySelectorAll('.input');
    const recordTbody = document.querySelector('#record-tbody');
    const appellationEl = document.querySelector('#appellation');
    const shelfEl = document.querySelector('#shelf');
    const weightEl = document.querySelector('#weight');
    const dateEl = document.querySelector('#weight');

    return { inputEls, listEl, itemEl, recordTbody, appellationEl, shelfEl, weightEl, dateEl }
}

export function errorInput() {
    const errorEl = document.querySelector('.error');
    const errEl = document.querySelector('.err');

    return { errorEl, errEl }
}

export function button() {
    const btnEl = document.querySelector('.btn');

    return { btnEl }
}

export function loader() {
    const loaderEl = document.querySelector('.loader');
    const errLoader = document.querySelector('.error-load');

    return { loaderEl, errLoader }
}

export function spreadsheet() {
    const tableDivEl = document.querySelector('.table-div');
    const tableEl = document.querySelector('.table');

    return { tableDivEl, tableEl }
}

export function addRecords() {
    const addREl = document.querySelector('.add-btn');

    return { addREl }
}

export function tableSort() {
    const nameTbEl = document.querySelector('.name-tb');
    const shelfTbEl = document.querySelector('.shelf-tb');
    const weightTbEl = document.querySelector('.weight-tb');
    const timeTbEl = document.querySelector('.time-tb');

    return { nameTbEl, shelfTbEl, weightTbEl, timeTbEl }
}