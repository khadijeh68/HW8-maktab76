// class Student{
//    constructor(_name , _gender){
//     this.name = _name;
//     this.gender = _gender;
//     }
// }
// //let studObj = new Student("john" , "male" ); 
// class studObj extends Student{
//     constructor(_name , _gender , _age){
//         super(_name , _gender);
//         this.age = _age;
//     }   
// }
// let student1 = new Student ("john" , "male");
// let studObj1 = new studObj ("jack" , "male" , 10);
// console.log(student1);
// console.log(studObj1);

function Student(name , gender){
    this.name = name;
    this.gender = gender;
}
Student.prototype.age = 30; 
let studObj1 = new Student();
console.log(`studObj1.age = ${studObj1.age}`);

Student.prototype.age = 20;
let studObj2 = new Student();
console.log(`studObj2.age = ${studObj2.age}`);

