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

// exponentiation Assignment (**=)

var gg = 4;
gg **= 2; // gg = gg**2
console.log(gg);

// Arithmetic operator

// Addition (+)
console.log(45+4);

// substraction

console.log(34 - 6);

//Multiplication (*)
console.log(4*4);

//Exponentiation (**)
console.log(6**2);

//Division (/)
console.log(34/2);

// Modulus/Remainder (%)
console.log(37%4);

//Increment (++)
var In = 34;
In++;
console.log(In);

// Decrement (--)

var de = 56;
de--;
console.log(de);


//======================================================================================================


// comparison operator

// Equal to (==)

console.log(34 == 34);

console.log(45 == 34);

// eqaul tovalue & eqaul type (===)
console.log(34 === 34); 

console.log(23 === "23" );

// not equal to (!=)

console.log(23 != 45);

console.log(67 != 67);

//Not equal or not equal value (!==)
console.log(34 !== "34");

console.log(56 !== 56);

// greater than (>)

console.log(89>56); 

console.log(23>45);

// less than (<)

console.log(34<67);

console.log(45<34);

// greater than equal to (>=)

console.log(78>=45);

console.log(45>=56);

console.log(89 >= 89);

console.log(89 >= '89');

// less than equal to (<=)

console.log(45 <= 56);

console.log(90 <= 56);

console.log(45 <= 45);

console.log(67 <= '67');


//====================================================================================================


//logical operator

// Logical AND (&&) - return true if both are true, if any one condition is false it will be false

console.log(true && true);

console.log(false && true);

console.log(false&&false);

// logcial OR (||) operator - if any one condition is true it will be true

console.log(true||false);

console.log(true||true);

console.log(false || false);

//logical NOT (!)operator - reverse the result

console.log(!false);

console.log(!true);


//======================================================================================================

//condition statement

//if else - checking condition is true or false

var n = 23;
if(n%2==0){
    console.log("even number");
}else{
    console.log('odd number');
}

var age = 18;
if(age >= 18){
    console.log('you can drive');
}else{
    console.log("you cannot drive");
}


var age = 16;
if(age >= 18){
    console.log("you can vote");
}else{
    console.log("you cannot vote");
}

//============================================================================================================

//string operator (+)
var lname = "suryawanshi";
console.log('Abhijeet ' + lname);

var fname = "abhijeet";
var lname = "suryawanshi";
console.log(fname +" "+ lname)


// =======================================================================================================

// ternary operator

var age = 61;
console.log((age>=60)?"you are eligible for pension":"you are not eligible for pension");

var weather = 'raining';
var result = (weather=="raining")?"take umbrella":"not need to take umbrella";
console.log(result);

//=========================================================================================================

//switch statement

var a = 2;
switch(a){
    case 1:
        console.log("1");
    break;
    
    case 2:
        console.log("2");
    break;
    
    case 3:
        console.log("3");
    break;    
    
}

