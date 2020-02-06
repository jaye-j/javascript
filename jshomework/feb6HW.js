//1. positive numbers
//Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.

// let arr = [-1, -3, -4, 2, 3, 4];

// let posArr = arr.filter(function(element){
//     return element >= 0;
// });

// console.log(posArr);


//2.Even Numbers
//Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.

// let arr = [-1, -3, -4, 2, 3, 4];

// let evenArr = arr.filter(function(element){
//     if (element % 2 == 0){
//         if (element >= 0){
//             return element;
//         };
//     };
// });

// console.log(evenArr);


//3. Square the Numbers
//Write a function which takes an array of numbers as input and returns a new array containing 
//result of squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].

// let arr = [1, 2 , 3, 4, 5];

// let sqrArr = arr.map(function(element){
//     return element ** 2;
// });

// console.log(sqrArr);


//4. Cities 1

// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 } ];

// var cityTemp = cities.filter(function(temperature){
//     return temperature.temperature <= 70;
// });

// console.log(cityTemp);


//5. Cities 2

// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 } ];

// function citynames(arr){
//     return arr.map(function(object) {
//         return object.name;
//     });
// }
//     console.log(citynames(cities));


//6. Good job!

// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// function grats(array){
//     return array.map(function(object){
//         return "Good job, " + object + "!";
//     });
// };
//     console.log(grats(people));

//7. Sort an array

// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// function abcOrder(array){
//     return array.sort();
// };

// console.log(abcOrder(people));

//8. Sort an array 2

// var people = ['Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben'];

// people.sort(function (a, b) {
//     return a.length - b.length;
// });

// console.log(people);


//9. sort an array 3

// var arr = [
//     [1, 3, 4],
//     [2, 4, 6, 8],
//     [3, 6] ];

// let sum = function(array) {
//     let result = 0;
//     for (let i = 0; i < array.length; i++) {
//         result += array[i];
//     }
//     return result;
// };

// arr.sort(function(a, b) {
//     return sum(a) - sum(b);
// });

// console.log(arr);


//10. 3 times

// function call3Times(fun) { fun(); fun(); fun(); }

// let fun = function (){
//     console.log("Hello, world!");
// };

// call3Times(fun);


//11. n times

// function hello(){
//     console.log("Hello, world!");
// };

// function callNTimes(times, callback){
//     for(i = 0; i < times; i++){
//         callback()
//     };
// };

// callNTimes(5, hello);


//12. sum an array

var numbers = [175, 50, 25, 1];

var sum = numbers.reduce(function(num1, num2){
    return num1 + num2;
});

console.log(sum);



//13. Acronym