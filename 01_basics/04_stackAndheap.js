//Stack (primitive).........Heap (non primitive)

//stack (primitive)    
//Stack: Used for storing primitive values and function calls in a Last-In-First-Out (LIFO) order
let myName="john";

let anOtherName = myName;

anOtherName= "wick";
console.log(anOtherName);


console.log(myName);

//heap (non primitive)
//Heap: Used for storing objects and reference types in dynamic, unordered memory.

let userOne = {
   email : "john@gmail.com",
   id :142356
}

userTwo = userOne;

userTwo.email = "wick@gmail.com;"

console.log(userOne.email);
console.log(userTwo.email);