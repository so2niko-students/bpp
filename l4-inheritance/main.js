//Inheritance

class Human{
    constructor(name, surname, dob, gender){
        this.name = name;
        this.surname = surname;
        this.dob = dob;
        this.gender = gender;
    }

    get age(){
        const now = Date.now();
        const dob = new Date(dob);
        const diap = now - dob;

        const age = Math.floor(diap / 1000 / 60 / 60 / 24 / 365);

        return age;
    }

    fullName(){
        return `${ this.surname } ${ this.name }`;
    }
}

class Student extends Human{
    constructor(name, surname, dob, gender, yoe, faculty, courseNumber, studentID){
        super(name, surname, dob, gender);//Виклик конструктора батьківського елементу
        this.yoe = yoe;
        this.faculty = faculty;
        this.courseNumber = courseNumber;
        this.studentID = studentID;
    }

    fullName(){
        return `Студент ${ super.fullName() }`;
    }   
}

//Прототипне наслідування
const human = {
    name : 'Нестор',
    surname : 'Махно',
    dob : '1888-11-7',
    fullName(){
        return `${ this.surname } ${ this.name }`;
    }
};

const student = {
    yoe : 1908,
    studentID : 111888222,
    fullName(){
        return `Студент ${ super.fullName() }`;
    },   
    __proto__ : human
}

console.log(student);
console.log(student.fullName());