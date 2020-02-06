// var a = 4;

// var b = 5;

// function add(a, b){
//     console.log(a + b);
//     return a+b;
// }


// (function add(a, b){
//     console.log(a + b);
//     return a+b;
// })(2,3)




// var result = add(4, 5);

// console.log(result)

// myArrayOrig = [1, 2, 3, 4, 5, 6, 7];

// myArrayCopy = myArrayOrig;

// console.log(myArrayOrig);
// console.log(myArrayCopy);

// myArrayCopy[0] = 10;

// console.log(myArrayCopy);


// var x = 1;

// if (x == 1) {
//     let x = 2;
//     console.log(x);
//     // expected output: 2
// }

// function test(){

//     var x = 3;
//     return 3;
// }

// test();

// console.log(x);
// // expected output: 1


// let greeting = function (name){
    
//     return name;
// };

// console.log(greeting);


//-------ANONYMOUS FUNCTIONS-------//

// let add = function(num1, num2) {
//     return num1 + num2;
// };

// let subtract = function(num1, num2) {
//     return num1 - num2;
// };

// let calc = function(num1, num2, opFunction) {
//     return opFunction(num1, num2);
// };


// let subresult = calc(3, 4, subtract);


// console.log(subresult);


// let arr = [2, 4, 5, 6, 8, 9];

// // for (let index = 0; index  < arr.length; index++) {
// //     console.log(arr[index]);
// // };

// arr.forEach(function(element){
//     console.log(element);
// })



const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];






// let newcomp = companies.filter(function(category){
//     return category.category == "Retail";
// });

// console.log(newcomp);


// companies.forEach(function(company) {
//     console.log(company.name);
// });


let newArr = companies.map(function(start){
    start["start"] = start.start - 5;
    return start;
});

console.log(newArr);








// let arr = [0, 1, 2, 3, 4, 5];

// let arrSome = arr.some(function(element){
//     return element < 5;
// });

// console.log(arrSome);

// let newArr = arr.filter(function(lessthan2){
//     return lessthan2 < 2;
// });

// console.log(newArr);


// let newArr = [];

// for (let index = 0; index < arr.length; index++){
//     newArr.push(2 * arr[index]);
// }

// let newArr = arr.map(function(element){
//     return 2 * element;
// });

// console.log(newArr);
