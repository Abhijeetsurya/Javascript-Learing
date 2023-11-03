// variables - var, let const

//var
var a = 3;

var a = 9 ;


// var is function scope

function myfun(){
    var num = 45;
    console.log(num);
}

myfun()

//console.log(num); we cannot access a variable outside a function created using var 



//=========================================================================================================




// let
let b = 23;

// let b = 34 - we cannot redeclear variable name created using let 

b = 45; // but we can reassing value to it

if(34=='34'){
    let num1 = 32;
    console.log(num1);
}

//console.log(num1) we cannot acces outside a block which created using let and const



//--------------------------------------------------------------------------------------------



//const - we cannot redeclear and reassing value to a variable created by const

const c = 67;

//c = 45; we cannot reassing value 

// let & const is block scope 

if(34=='34'){
    let num1 = 32;
    console.log(num1);
}

if(24=="24"){
    const num2 = 67;
    console.log(num2);
}

//console.log(num2); 


