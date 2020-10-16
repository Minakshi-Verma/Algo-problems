//INHERITANCE
//Functional Classes

//====================EXAMPLE 1=================
function Fruit(type){
    this.type= type
    this.color= "unknown"
    this. getInfo= getInform // you can give any name here
}

function getInform(){
    return 'This' + this.type + 'is' + this.color 
}

// lets create a new fruit from Fruit class---Lime
 
let lime = new Fruit('Maxican lime')
Console.log(lime.getInfo())
// This Maxican lime is unknown

lime.color= "green"
console.log(lime.getInfo())
// This Maxican lime is green



//===========EXAMPLE 2=================================

//Another approach or writing style
// you can define your method right in the functional class

function Fruit(type){
    this.type = type
    this. color= "unknown"
    this.getInfo = function (){
        return 'This' + this.type + 'is' + this.color 
    }
}

// you can access the method as example 1

//=================EXAMPLE 3==================
//===add function to constructor function's prototype===

function Fruit(type){
    this.type= type
    this.color= "unknown"
}

Fruit.prototype.getInfo= function(){
    return 'This' + this.type + 'is' + this.color 
}
//You can use access the method on new object the same way as example 1


//============You can use object literals===========================

let lime = {
    type: "Mexican lime",
    color: 'green',
    getInfo: function(){
        return 'This' + this.type + 'is' + this.color   
    }
}
console.log(getInfo())
lime.color = "Yellow"
//Change the lime color to Yellow

//-------------------------------
//CLASSES
//Other way to define a class is using class declaration
//Syntactical sugar(introduced inES6 )over JS existing prototype based inhritnace
//More simple and clear to deal with inheritance

class Polygon {
    constructor(height, width){
        this.height = height
        this.width = width
    }
    get area(){
        return this.height * this.width
    }
}

let p = new Polygon(1, 20)

//IMPORTNAT: Functional declaration are hoisted( you can reference them before there are declared) 
// constructor method is a special method that we use to create and initialize the object of a class
// we can use super keyword to call parent class constructor
