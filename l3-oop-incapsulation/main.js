const txt = 'Hello';

console.log(txt);
console.log(txt.split('e'));
console.log(txt.length);


//camelCase
//PascalCase
//Функція-конструктор

function Tea(type, weight, packagingType, countryFrom, countryManuf){
    const UID = Math.floor(Math.random() * 1000000000000000).toString(16);
    this.type = type;
    this.weight = weight;
    this.packagingType = packagingType;
    this.countryFrom = countryFrom;
    this.countryManuf = countryManuf;
    this.getUID = function(){
        return UID;
    }
}

const t1 = new Tea('black', 0.1, 'dry', 'India', 'India');

console.log(t1);
t1.type = 'green';
console.log(t1);
console.log(t1.getUID());


//Closure
const c = {
    i : 0,
    add : function(){
        this.i++;
        return this.i;
    }
};

// console.log(c.i);
// console.log(c.add());
// console.log(c.add());
// console.log(c.i);

function createCounter(){
    let i = 0;
    return {
        add : function(){
            i++;
            return i;
        },
        minus : function(){
            i--;
            return i;
        },
        count : function(){
            return i;
        }
    }
}

const c1 = createCounter();
const c2 = createCounter();
const c3 = createCounter();
console.log(c1.add());
console.log(c2.minus());
console.log(c3.count());

class Coffee{
    static #count = 0;
    #UID;
    #roastingDate;
    constructor(type, packagingType, roasting, country, roastingDate){
        Coffee.#count++;
        this.#UID = this.#generateUID();
        this.type = type;
        this.packagingType = packagingType;
        this.roasting = roasting;
        this.country = country;
        this.#roastingDate = roastingDate;
    }

    #generateUID(){
        return Math.floor(Math.random() * 1000000000000000).toString(16);
    }

    getUID(){
        return this.#UID;
    }

    setUID(UID){
        //Перевірка
        this.#UID = UID;
    }

    get roastingDate(){
        return this.#roastingDate;
    }

    get roastingTime(){
        const now = Date.now();
        const roast = new Date(this.#roastingDate);
        const time = now - roast;
        const days = Math.floor(time / 1000 / 60 / 60 / 24);
        return days;
    }

    static get count(){
        return Coffee.#count;
    }

    set roastingDate(date){
        const roast = new Date(date);
        const now = Date.now();
        if(now < roast){
            console.log(`ERROR in roasting Date: ${ date }`);
            return;
        }

        this.#roastingDate = date;
    }
}

const co1 = new Coffee('monosort', 'beans', 3, 'Brazil', '2022-11-3');
const co2 = new Coffee('monosort', 'beans', '5', 'Nigeria', '2022-01-01');
console.log(co1);
console.log(co1.getUID());
console.log(co1.roastingDate);
co1.roastingDate = '2022-10-14';
console.log(co1.roastingDate);
console.log(co1.roastingTime);


//Static
//Static properties
//Static methods
Coffee.count = 222;
console.log(Coffee.count);
