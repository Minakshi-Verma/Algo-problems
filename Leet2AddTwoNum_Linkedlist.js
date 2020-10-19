// # 2. Add Two Numbers

// # You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// # You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// # Example 1:
// # 2===>4===>3
// # 5===>6===>4

// # Solution: 7==>0===>8


// # Input: l1 = [2,4,3], l2 = [5,6,4]
// # Output: [7,0,8]
// # Explanation: 342 + 465 = 807.



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // set the all the variables
    //p is the pointer for the linkedlist, which will help us iterate through the list
    //nums are the node value of both linkedlist
    //current shows the node of added linkedlist
    let p1 = l1
        p2 = l2
        num1= 0
        num2= 0
        carry= 0
        solution= new ListNode(0)
        current= solution

        while(p1 || p2){
            num1 = p1? p1.val: null
            num2 = p2? p2.val: null
            if(num1 + num2 + carry > 9){
              // deduct 10 and pass 1 as carry
                current.next= new ListNode(num1 + num2 + carry - 10)
                current = current.next
                carry=1   
            }else{
                //do nothing and add them as such
                current.next=new ListNode(num1+num2+carry)
                current = current.next
                carry= 0
            }
            if(p1) p1= p1.next
            if(p2) p2= p2.next         
           
        }
        if(carry) current.next = new ListNode(carry)
        return solution.next    
};