//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // array


let myObj = {                           // boject
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world"); // function
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3 


//null datatype object

// bignumber datatype undefined


// Stack(primitive),
// Heap(non primitive) memory

 let myYtname="aayush"                                                  // it doesn't change value it send a copy of first value

 let myYtname2= myYtname
 myYtname2 = "aayush chandak"

 console.log(myYtname);
 console.log(myYtname2);
 
// for heap  it changes the orignal value for both 

let obj = {
    name: "aayush",
    age: 22
}

let obj2 = obj 

obj2.name = "aayush chandak"
console.log(obj);
console.log(obj2);