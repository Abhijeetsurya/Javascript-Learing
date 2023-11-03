// variables - var, let const

//var
var a = 3;

var a = 9 ;

// let
let b = 23;

// let b = 34 - we cannot redeclear variable name created using let 

b = 45; // but we can reassing value to it

//const - we cannot redeclear and reassing value to a variable created by const

const c = 67;

//c = 45; we cannot reassing value 

// var is function scope

function myfun(){
    var num = 45;
    console.log(num);
}

myfun()

//console.log(num); we cannot access a variable outside a function created using var 

