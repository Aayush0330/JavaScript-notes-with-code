/* 

JavaScript Variables can be declared in 4 ways:

Automatically
Using var
Using let
Using const

*/


console.log("variables")

const accountId = 144553  // this is const variable
let accountEmail = "hitesh@google.com" //this is let variable
var accountPassword = "12345" //this is var variable
accountCity = "Jaipur" // this is automatically declared variable
let accountState;

// accountId = 2 // not allowed const cant be changed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope

{
    this curly braces are block scope
}

*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])