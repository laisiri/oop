//OOP 
class Person {
    constructor(fName,lName,bDate) {
        this.fName = fName;
        this.lName = lName;
        this.bDate = bDate;
    }
}
Person.prototype.age = function() {
    const d = new Date();
    //console.log(d.getFullYear());
    //console.log(this.bDate);
    return d.getFullYear() - this.bDate;
}
Person.prototype.fullName = function() {

                         return this.fName + " " + this.lName;

}

const p1 = new Person('Suttipong','Laisiri',1965);
console.log(p1);
console.log(p1.fName);
console.log(p1.fullName());
console.log(p1.age());
const p2 = new Person('Taweep','Laisiri',2002);
console.log(p2);
console.log(p2.fName);
console.log(p2.fullName());
console.log(p2.age());
class Student extends Person {
    
    constructor(fName,lName,bDate,grade) {
        super(fName,lName,bDate);
        this.grade = grade;
    }
}
const std1 = new Student('Sorawich','Laisiri',2004,9);
console.log(std1);
console.log(std1.fullName());
console.log(std1.age());
console.log(std1.grade);
 
class A {
    constructor(num) {
        this.num = num;
    }
}
const a = new A(99);
console.log(a);