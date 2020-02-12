// console.log(x);

// //let and const

// let x = "hi";


// var a = 3;

// console.log(a);

// if(true){

//     let a = 4;

//     console.log(a);

// };

// console.log(a);

// var i = 0;

// for(let i = 0; i < 10; i++){

//     console.log(i);
// }

// console.log("outside", i);

// const obj = {};

// obj["newKey"] = 4;

// console.log(obj);

// let index = 8;

// let mystring = `Hello World ${index}`;

// console.log(mystring);

// const name = 'Jaye';
// const age = 21;

// console.log(`my name is ${name} and i am ${age} years old.`);

// let today = new Date();

// // console.log(today.toDateString());


// console.log(`todays date is ${today.toLocaleDateString()}`);

// let arr = [4, 2, 7, 4, 3, 6];

// let [a, b, c, d, e, f] = arr;

// // let a = arr[0]; //4

// // let b = arr[1]; //2

// console.log(a);

// console.log(b);

//destructoring
// var luke = { occupation: 'jedi', father: 'anakin' };

// let{occupation, father} = luke;

// console.log(occupation);
// console.log(father);

// let job = luke.occupation;
// let father = luke.father;
//arrow function
// let helloWorld = ()=>{
//     console.log(`Hello World`);
// }

// let myFunc = ()=>{
//     console.log(`New function`);
// }

// let add = (a, b) => {
//     return a + b;
// };


// helloWorld();
// myFunc();
// console.log(add(5, 4));


// setTimeout(function(){
//     console.log(`Hello World`)
// }, 1000);

// console.log("print first");

///???????????
// let nums = [5, 7, 3, 4, 9];

// let newArr = nums.map((num)=>{

//     return num * 2;
// });

// console.log(newArr);


// let obj = {
//     x: 5,
//     y: 20,
//     z: 3
// };

// let multiply = (object) =>{
//     let {x, y, z} = object;

//     return x * y * z;
// };

// console.log(multiply(obj));

// let div = document.getElementById('myId');

// div.addEventListener('click', (e)=>{

// });

// let addTwoNums = (a, b) => {
//     a = a || 0;
//     b = b || 0;

//     return a + b;
// };

// console.log(addTwoNums(3));

// let addTwoNums = (a=0, b=0) =>{
//     return a + b;
// };

// console.log(addTwoNums(2, 3));

// console.log(addTwoNums(2));

// console.log(addTwoNums());


// let multiplyNums = () => {

//     for(let i = 0; i <= arguments.length; i++){
//         console.log(arguments[i]);
//     };
// };

// multiplyNums(4, 7, 9);


// let multiplyNums = (...args) =>{

//     let m = 1;
//     for (let i of args){
//         m = m * i;
//     };
//     console.log(m);
// };

// multiplyNums(2, 3);

//spread operators

// let arr1 = [2, 3, 5, 6];

// let arr2 = [...arr1];

// arr2.push(3);
// arr2.push(6);

// console.log(arr2);
// console.log(arr1);


// let a, b, c, d, arr;

// a = [1, 2];
// b = [3, 4];
// c = [5, 6];

// arr = [0, ...a, ...b, ...c, 9];

// console.log(arr);

//swap value

// let a, b;

// a = "first";
// b = "second";

// [b,a] = [a,b];

// console.log(a);
// console.log(b);

//ternary operators//

let a = 4;


// if (a == 4){
//     console.log(`a is equal to 4`);
// }else{
//     console.log(`a isnt equal to 4`);
// };

////(condition)? (true block): (else block)

// (a == 4)? console.log(`a is equal to 4`) : console.log(`a isnt equal to 4`); //a is equal to 4
// class Parent {

//     parentGreeting(){
//         console.log(`Im the parent.`);
//     };

// };

// class Person extends Parent{

//     constructor(fname, lname, age){
//         super();
//         this.fname = fname;
//         this.lname = lname;
//         this.age = age;
//         this.count = 0;
//     };

//     greeting = () =>{
//         console.log(`Hello ${this.fname} ${this.lname}!`);

//         this.count = this.count + 1;
//     };
//     printCount = () =>{
//         console.log(this.count);
//     };
// };

// let jaye = new Person("Jaye", "Jensen", 21);

// console.log(jaye);

// jaye.greeting();

// jaye.printCount();

// jaye.parentGreeting();

// class Character{

//     constructor(health, power){
//         this.health = health;
//         this.power = power;
//     }

//     attack = (enemy) =>{

//         enemy.health -= this.power;
//     }

//     print = () =>{
//         console.log(`The health of ${this.name} is ${this.health} and power is ${this.power}.`);
//     }
// }

// class Hero extends Character{

//     constructor(health, power){
//         super(health, power);
//         this.name = "Hero";
//     }
// }

// class Goblin extends Character{
    
//     constructor(health, power){
//         super(health, power);
//         this.name = "Goblin";
//     }
// }

// let hero = new Hero(10, 4);
// let goblin = new Goblin(8, 5);

// goblin.print();

// hero.attack(goblin);

// goblin.print();

// class Todos{

//     constructor(description){
//         this.description = description;
//     }
// }

// class TodosManager{

//     constructor(){

//         this.todoArray = [];
//     }

//     addTodo = (description) => {

//         let todo = new Todos(description);

//         this.todoArray.push(todo);
//     }

//     displayTodos = () => {

//         //DOM logic to display todos on page
//     }
// }

// let manager = new TodosManager();

// manager.addTodo(description);


//////Regular expressions/////////

// let regex = new RegExp("digital crafts");

// let regex2 = /digital crafts/;

// let someString = "asdasd digital crafts sfsdfafasadas ";

// let result = regex.test(someString);

// console.log(result);


// let pattern = /jaye/ig;

// let someString = "dasdhaslnoafaksdnpa jaYe asdba;sdjobasdbhajsjayevdla;";

// let result = pattern.test(someString);

// console.log(result);

// let array = someString.match(pattern);

// let array2 = someString.replace(pattern, "Jensen");

// console.log(array);

// console.log(array2);

// let pattern = /Batman|Tina Fey/ig;

// let string = "batman is really cool, but not as cool as tina fey."

// let result = string.match(pattern);

// console.log(result);


//333-333-3333

// let phonePattern = /(\d\d\d)-(\d\d\d)-(\d\d\d\d)/;

// let string = "aklsjdajn 333-333-3333 asldhdsa 432-345-6432 asasd";

// let result = string.match(phonePattern);

// console.log(result);


// let pattern = /Bat(man|mobile|copter|bat)/gi;
// let str = "Batman lost a wheel Batmobile";
// let result = str.match(pattern);

// console.log(result);

// let pattern = /(\()?\d\d\d(\))?(-)?(.)?\d\d\d(-)?(.)?\d\d\d\d/g;

// let str = "this is a phone num: (333)333-3333";

// let result = str.match(pattern);

// console.log(result);

// let pattern = /Bat(wo)*man/g;

// let string = " Batwoman ajkdnla Batman asld Batwowowowowowowoman"

// let result = string.match(pattern);

// console.log(result);

// let pattern = /a{2,5}/;

// let str = "b aa brand new world"

// console.log(pattern.test(str));

// let result = str.match(pattern);

// // console.log(result);

let pattern = /\s\s/g;
let str = "this is a veryyyyyyy long day";

let result = str.replace(pattern, " ");

console.log(result);