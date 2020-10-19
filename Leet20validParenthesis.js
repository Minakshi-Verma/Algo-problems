// 20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //create a reference object
    // get a stack
    //iterate throughthe string
    //check if character in object
    // if it is valid, add that to stack
    //if not, pop it off
    
    let bracket = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    
    let stack = []

    for(let char of s ){
        if(bracket[char]){
            stack.push(bracket[char])
        }else{
            if(stack.pop() !== char) return false
        }
        return (!stack.length)        
    }
};