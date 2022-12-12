//querySelector - 1
const id = '#first-li';
const firstLi = document.querySelector(id);
firstLi.style.color = 'red';
const even1 = document.querySelector('.even');
even1.style.color = 'green';

//querySelectorAll - []
// const evenAll = Array.from(document.querySelectorAll('.even'));
const evenAll = [...document.querySelectorAll('.even')];
console.log(evenAll);

/*
getElementById
getElementsByClassName
getElementByTagName
getElementsByName
*/

console.dir(firstLi);
firstLi.innerText += 1111;

const btnCreate = document.querySelector('.btn-create');
const inpCount = document.querySelector('.inp-count');
const container = document.querySelector('.container');

btnCreate.onclick = () => {
    const count = inpCount.value || 5;

    //Видалення елементів
    // deleteAllChildsObj(container);
    deleteAllChildsStr(container);

    //Створення стиль
    // createNumberOfChildObj(container, count);
    createNumberOfChildStr(container, count);
}

function deleteAllChildsObj(parent){
    while(parent.hasChildNodes()){
        parent.removeChild(parent.firstChild);
    }
}

function deleteAllChildsStr(parent){
    parent.innerHTML = '';
}

function createNumberOfChildObj(parent, count){
    for(let i = 0; i < count; i += 1){
        const el = document.createElement('div');
        // el.className = 'el';
        el.classList.add('el');
        el.innerText = i;
        parent.appendChild(el);
    }
}

function createNumberOfChildStr(parent, count){
    let divHTML = '';
    for(let i = 0; i < count; i += 1){
        divHTML += `<div class="el">${ i }</div>`;
    }

    console.log(divHTML);

    parent.innerHTML = divHTML;
}