// 9. Palindrome Number
// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
// Follow up: Could you solve it without converting the integer to a string?
// Example 1:
// Input: x = 121
// Output: true

/**
 * @param {number} x
 * @return {boolean}
 */

 // Solution using the string method
var isPalindrome = (x) => {
    let revStr = x.toString().split('').reverse().join("")
   return (x=== revStr) ? true: false
};
console.log(isPalindrome(123))

// solution without string method
var isPalindromeMath = (x) => {
    if (x<0) return false
    //Always going to be true if it is 1 digit
    if(x<10) return true
    if(x%10===0) return false

    let rev = 0   //321 
    while(rev<x){
    rev= rev*10  // 0 -->> 1X10=10 -->> 12X10=120
    rev += x%10 // 1 -->> 10+2=12 -->> 120+3=123
    x= Math.trunc(x/10)    // x=321/10=32 -->>32/10=3 -->> 3/10--     
    }
    console.log(x)
    console.log(rev)
    return rev===x || Math.trunc(rev/10)===x
}
console.log(isPalindromeMath(1221))


// const compare= (x, y)=>{
//     if(x<y){
//         return true
//     }
//     if(x>y){
//         return false
//     }
//     // if(x==y){
//     //     return false
//     // }
// }

// console.log(compare(21, 234))
// console.log(compare(212, 24))