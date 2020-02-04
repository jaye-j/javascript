
function positiveNumbers(array) {
    newArray = array.sort();
    while (true) {
        if (newArray[0] < 0) {
            newArray.shift();
        } else {
            break;
        }
    }
    console.log(newArray);
    return newArray;
}

positiveNumbers([-2, 3, 5, -3, 9, -10]);