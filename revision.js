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


//====================================================================================================


// data types
// undefined
var x;
console.log(x) 
console.log(typeof(x)); // undefined

// boolean

var x1 = true;
console.log(x1);
console.log(typeof(x1)); //boolean


//Number

var y = 34;
console.log(y);
console.log(typeof(y)); //number

var y1 = "Hello world";
console.log(y1);
console.log(typeof(y1)); // string


//===========================================================================================================


//operators

// Assignment operator (=)

var aa = 45;

// addition assignment operator (+=)

var bb = 45;
bb +=5; // bb = bb + 5
console.log(bb);

// substraction assignment operator (-=)

var cc = 69;
cc -= 9; // cc = cc - 9
console.log(cc);

// Multiplication assignment operator (*=)

var dd = 8;
dd *= 6; // dd = dd - 6
console.log(dd);

// division assignment operator (/=)

var ee = 45;
ee /= 5; // ee = ee/5
console.log(ee);

//Remainder assignment operator (%=)

var ff = 67;
ff %= 6; // ff = ff%6
console.log(ff);

// exponentiation Assignment 