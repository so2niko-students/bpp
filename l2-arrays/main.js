//Створення масиву

const arr = [];//літеральний
const arr2 = [123, 453, 33, ' dfas fdsf', {}, [232, 2]]; //літеральний

const arr3 = new Array(1, 2, 3);
// console.log(arr3);

const arr4 = new Array(100);
const arr5 = new Array('Hello');

const arr7 = new Array(3.14, undefined);
const arr6 = new Array(-3, undefined);

// console.log(arr4);
// console.log(arr5);
// console.log(arr6);
// console.log(arr7);

const nums = [1, 2, 3, 4, 5, 6, 7];

//! Проход по масиву і/або виклик функції
// for(let i = 0; i < nums.length; i++){
//     console.log(nums[i]);
// }

// nums.forEach((el) => console.log('array: ', el));

//! Формування з масиву нового масиву(обробленого)
const numsMM = [];
const multi = 1000;
for(let i = 0; i < nums.length; i++){
    const mm = nums[i] * multi;
    numsMM.push(mm);
}

const numsMM2 = nums.map(el => el * multi);

console.log(numsMM, numsMM2);

//! Фільтрація
const numsEven = [];
for(let i = 0; i < nums.length; i++){
    if(nums[i] % 2 == 0){
        numsEven.push(nums[i]);
    }    
}

const notNums = [1, 11, 111];
const notNums2 = [4, 44, 144, 444];

const numsEven2 = nums.filter(el => !(el % 2));
const numsNot1And3 = nums.filter(el => el != 1 && el != 3);
const numsNotSpecNums = nums.filter(el => !el.includes([...notNums, ...notNums2]));

console.log(numsEven, numsEven2);

// Пошук елемента
let finded;
for(let i = 0; i < notNums2.length; i++){
    if(notNums2[i] >= 100 && notNums2[i] <= 200){
        finded = notNums2;
        break;
    }
}

finded = notNums2.find(el => el >= 100 && el <= 200);

// Хоча-б один елемент масиву задовільняв умові
const users = [
    {
        name : 'Ivan',
        isMember : false,
        age : 22
    },
    {
        name : 'Petro',
        isMember : false,
        age : 100
    },
    {
        name : 'Anton',
        isMember : true,
        age : 33
    },
    {
        name : 'Mykola',
        isMember : false,
        age : 5
    }
];

let isOpen = false;
for(let i = 0; i < users.length; i++){
    if(users[i].isMember){
        isOpen = true;
        break;
    }
}

isOpen = users.some(el => el.isMember);

// Усі елементи мають задовільняти умовам
let isAdult = true;
for(let i = 0; i < users.length; i++){
    const isAdult = users[i].age >= 18;
    if(!isAdult) break;
}

isAdult = users.every(el => el.age >= 18);

//! REDUCE