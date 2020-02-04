// 02/04/2020 class work //
// console.log('hello');

// document.body.innerHTML = 'Hello World';

// //
// var school = 'dig crafts'; //string

// console.log(school);

// function myFunction(){

// };

// //
// var multiLineString = `This
// is a
// multi line
// string`;

// console.log(multiLineString);
// console.log(multiLineString.length);

// var myInt = 2.1; //float

// var myBool = true; //boolean

// var num = 1; //int

// var num2 = 1.2; //float

// console.log(school + ' ' + multiLineString); //concatenation

// var concat = "hello" + ' ' + "world";
// console.log(concat.indexOf("world"));

// var boolean = true; //true
// console.log(boolean);

// var not = !boolean; //false  ! = not
// console.log(not);

// var and = boolean && false; //false  && = and
// console.log(and);

// var or = boolean || false; //true  || = or
// console.log(or);

// var equals = true == false; //false  == = equals
// console.log(equals);

// var a = 4;
// var b = 4;

// if (a == b) {
//     console.log("equality")
// };


// var age = 18;

// if (age >= 21) {
//     console.log('you get free beer.')
// }
// else if (age < 18) {
//     console.log('what are you even doing here.')
// }
// else {
//     console.log('sorry no beer for you.')
// };

//

var expr = "Papayas";

if(expr == "Oranges"){
    console.log("Oranges are 59cents a lb.")
}
else if(expr == "Mangos"){
    console.log("Mangos")
}
else if(expr == "Papayas"){
    console.log("Papayas and mangos are 2.79 a lb.")
}
else{
    console.log("sorry we are out of " + expr + ".")
};


var expr = "Papayas";

switch(expr){
    case "Oranges":
        console.log("Oranges are 59cents a lb.")
        break;
    case "Mangos":
        console.log("Mangos")
        break;
    case "Papayas":
        console.log("Papayas and mangos are 2.79 a lb.")
        break;
    default:
        console.log("sorry we are out of " + expr + ".")
        break;
}