//! Функції

show('bla');

//declarative
function show(txt){
    //тіло функції
    console.log(Date.now(), txt);
}

show('Hello');

//functional
const redShow = function(txt){
    const t = `%c${Date.now()}: ${txt}`;
    console.log(t, "color: red");
    return true;
}

redShow('Bye');

redShow('bla');

//Відмінності
//1 Нема arguments
//2 Нема this - контекст виконання функції

const redShow2 = (txt) => {
    const t = `%c${Date.now()}: ${txt}`;
    console.log(t, "color: red");
}

const redShow3 = txt => console.log(`%c${Date.now()}: ${txt}`, "color: red");

const sum2 = function(){
    console.log(this);
    // console.log(arguments);
    let summa = 0;
    for(let i = 0; i < arguments.length; i++){
        summa += Number(arguments[i]);
    }
    return summa;
}

const sum = (...args) => args.reduce((acc, el) => acc + Number(el), 0);

function test(func, args, result, text){
    console.log(func(...args) == result ? '👌' : '👅', text);
}

test(sum, [1, 2], 3, 'sum(1, 2) == 3');
test(sum, [0, 0], 0, 'sum, [0, 0], 0');
test(sum, [-1, 32], 31, 'sum, [-1, 32], 31');
test(sum, [1, '1'], 2, 'sum(1, "1") == 2');
test(sum, [1, 2, 3], 6, 'sum(1, 2, 3) == 6');
test(sum2, [1, 2, 3, 343], 349, 'sum(1, 2, 3, 343) == 349');

//! функції конструктори

const a2 = {
    name : 'a',
    age : 234
};

function TrafficLighter(redTime, greenTIme){
    this.redTime = redTime;
    this.greenTIme = greenTIme;
    this._status = 0;
    this.statuses = ['red', 'yellow', 'green'];

    this.changeStatus = function(){
        this._status = (this._status + 1) % 3;
    }

    this.status = function(){
        return this.statuses[this._status];
    }

    return this;
}

const tl = new TrafficLighter(100, 30);
console.log(tl);

//Data types
/*
Примітивні типи даних:

    Number
    String
    Boolean
    undefined
    null
    BigInt
    Symbol

Складний тип даних:

    Object
*/

let one = 1;
let two = one;

two = 2;
console.log(one);

let dog = { name : 'Patron' };
let dog2 = dog;

dog2.name = 'Alpha';

console.log(dog);

function changeName(obj){
    obj.name = Math.random();
}

changeName(dog);

console.log(dog);

function random(from = 0, to = 100){
    return Math.floor(Math.random() * (to - from) + from + 1);
}

function random2Numbers(from = 0, to = 100){
    const a = random(from, to);
    const b = random(from, to);

    // return [a, b];
    return { a, b };
}

// const [ a3, b4 ] = random2Numbers();
const { a, b } = random2Numbers();
// console.log(a3, b4);
console.log(a, b);