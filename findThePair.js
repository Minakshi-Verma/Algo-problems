// Two Sum 

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

var twoSum = function(nums, target) {
    //loop through the array
    //At each value, find the pair (target- current number)
    //Check if that number is in object
    //if not save it in there
    let numsObj = {}
    for(let i = 0; i< nums.length; i++){
        let current = nums[i]
        let match = target- current
        if(match in numsObj){
            return [i, numsObj[match]]
        }else{
           numbsObj[current] =i 
        }

        
    }
};