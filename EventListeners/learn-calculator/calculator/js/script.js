let buttons = document.querySelector(".buttons");
let input = document.querySelector(".input");
let equals = document.querySelector(".equal");
let numStorage = [];
let numToBeAdd = [];
let numToBeSub = [];
let numToBeMult = [];
let numToBeDiv = [];

//functions
// function addNums(x, y){
//     let equals = x + y;
//     input.append(equals)
// }
// function subNums(x, y){
//     let equals = x - y;
// }
// function multNums(x, y){
//     let equals = x * y;
// }
// function divNums(x, y){
//     let equals = x / y;
// }

function joinNumsOnOperationAdd(){
    let joined = numStorage.join("");
    let joinedNum = parseInt(joined);
    numToBeAdd.push(joinedNum);
    numStorage = [];
}
function joinNumsOnOperationSub(){
    let joined = numStorage.join("");
    let joinedNum = parseInt(joined);
    numToBeSub.push(joinedNum);
    numStorage = [];
}
function joinNumsOnOperationMult(){
    let joined = numStorage.join("");
    let joinedNum = parseInt(joined);
    numToBeMult.push(joinedNum);
    numStorage = [];
}
function joinNumsOnOperationDiv(){
    let joined = numStorage.join("");
    let joinedNum = parseInt(joined);
    numToBeDiv.push(joinedNum);
    numStorage = [];
}

buttons.addEventListener('click', function(e){

    // console.log(e.target.textContent)

    switch(e.target.id) {
        case ("0"):
            input.append("0");
            numStorage.push(0);
            break;
        case ("1"):
            input.append("1");
            numStorage.push(1);
            break;
        case ("2"):
            input.append("2");
            numStorage.push(2);
            break;
        case ("3"):
            input.append("3");
            numStorage.push(3);
            break;
        case ("4"):
            input.append("4");
            numStorage.push(4);
            break;
        case ("5"):
            input.append("5");
            numStorage.push(5);
            break;
        case ("6"):
            input.append("6");
            numStorage.push(6);
            break;
        case ("7"):
            input.append("7");
            numStorage.push(7);
            break;
        case ("8"):
            input.append("8");
            numStorage.push(8);
            break;
        case ("9"):
            input.append("9");
            numStorage.push(9);
            break;
        case ("clear"):
            input.append("clear");
            break;
        case ("add"):
            input.append("+");
            joinNumsOnOperationAdd();
            break;
        case ("sub"):
            input.append("-");
            joinNumsOnOperationSub();
            break;
        case ("mult"):
            input.append("x");
            joinNumsOnOperationMult();
            break;
        case ("div"):
            input.append("/");
            joinNumsOnOperationDiv();
            break;
    }
});

equals.addEventListener('click', function(e){
    input.append("=");
})
