//challenge 1

// function collatz(n){
//     while (n != 1){
//         if (n % 2 == 0){
//             n /= 2;
//         }else{
//             n = n * 3 + 1;
//         };
//         console.log(n);
//     };
// };

// collatz(15);


//challenge 2

function flipInt(n){
    var digit, result = 0

    while( n ){
        digit = n % 10                  //  Get last digit. Ex. 123/10 → 12.3 → 3
        result = (result * 10) + digit  //  Ex. 123 → 1230 + 4 → 1234
        n = n/10|0                      //  Remove last digit. Ex. 123 → 12.3 → 12
    }  

    return result
}


function palindrome(num1, num2) {
    while ((num1 * num2) == flipInt((num1 * num2))){
        return num1 * num2;
    };
};

console.log(palindrome(913, 993));

////////

// function largestPalindromicNum() {
//     let largestPalindromic = 0;
//     let product1 = 0;
//     let product2 = 0;
//     for (let i = 100; i <= 999; i++) {
//       if (i == 913) {
//         let dummvar = 1;
//       }
//       for (let ii = 100; ii <= 999; ii++) {
//         if (ii == 993) {
//           let dummyvar2 = 1;
//         }
//         let palinNum = i * ii;
//         palinNum = String(palinNum); //convert out number to a string so we can iterate over it
//         let palinNumSplit = palinNum.split(''); //convert to an array
//         let palinNumReverse = palinNumSplit.reverse(); //reverse the array
//         let palinNumJoined = palinNumReverse.join(''); //turn the array back into a string
//         if (palinNum == palinNumJoined) {
//           if (Number(palinNum) > Number(largestPalindromic)) {
//             largestPalindromic = palinNum;
//             product1 = i;
//             product2 = ii;
//           }
//         }
//       }
//     }
//     console.log(
//       'Largest palindromic number of three digits is: ' + largestPalindromic
//     );
//     console.log('Made of the product of: ' + product1 + ' and ' + product2 + '.');
//   }
//   largestPalindromicNum();



//challenge 3

// function smallest(){

//     var i = 2520; // smallest 1-10 divisible numbers
    
//     var found = false;
    
//     while (found==false){
//       i+= 2520;
//       var isDivisible = true;
      
//       for(var j=11; j<=20; j++){
//         console.log(i, j)
//         if (i%j != 0){
//           isDivisible = false;
//           break; // break out of the for loop, continue while loop incrementing i by 2520
//         }
//       }
//       if(isDivisible == true){
//         found = true; 
//       }
//     }
    
//     return i;
  
//   }
  
//   smallest();