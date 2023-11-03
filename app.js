console.log("Hello")

/* values and variables in javascript */


// var is functional scoped 
var myName = "Abhijeet" 
console.log(myName)

// let and const is block scoped 
let Mycity = "Bhopal";

const mystate = "M.P.";

/*===========================variables naming rules======================================== */
var myCity = "Chhindwara"  // This is vaild 
console.log(myCity);

var _myAge = 21; // This is vaild 
console.log(_myAge);

var $country = "India" // This is vaild
console.log($country);

var _1my_number = 9303940996; // This is vaild 
console.log(_1my_number);

//var &myname = "abhi";  //This is invaild

//var my number = 9303940996 // This is invaild

//var 24myName = "Abhijeet"  //This is Invaild we cannot start variable name witha number

//var myname% = "Abhijeet" //This is invaild

/*=========================================================================================*/


/*====================Data types============================*/

var myname = "Abhijeet Suryawanshi" //string 
console.log(myname);
console.log(typeof (myname));

var myage = 21; //Number 
console.log(myage);
console.log(typeof (myage));

var iAm = true; //Boolean
console.log(iAm);
console.log(typeof (iAm));

var iAm1 = false //Boolean
console.log(iAm1);
console.log(typeof (iAm1));

//=======================================================================================================

//Expressions and operator

//Assignment operator (=)
var x = 23;

//Addition assignment operator (+=)
var x = 23;
x += 5;
console.log(x);

//Substraction Assignment operator (-=)
var x = 9;
x -= 5;
console.log(x);

//Multiplication Assignment operator (*=)
var x = 4;
x *= 3;
console.log(x);

//Division Assignment operator (/=)
var x = 15;
x /= 3;
console.log(x);

//Remainder Assignment operator (%=)
var x = 19;
x %= 3;
console.log(x);

//Exponentiation Assignment operator (**=)
var x = 4;
x **= 2;
console.log(x);

//Bitwise Assignment operator 
var x = 5 // Binary no. = 0101
x &= 2;
console.log(x);


//=====================================================================================================

//Arithemetic operator

// Addition operator (+)
console.log(2+4);

//Substraction operator (-)
console.log(12-7);


//Multiplication operator (*)
console.log(3*4);

//Division operator (/)
console.log(12/4);

//Modulus(remainder) operator (%)
console.log(76%6);

//Exponentiation operator (**)
console.log(4**2);

//Postfix Increment operator (++)
var a = 5;
a++;
console.log(a);

//Postfix Decrement operator (--)
var a = 8;
a--;
console.log(a);

//prefix Increment operator

var a = 4;
++a;
console.log(a);

//prefix decrement operator

var a = 8;
--a;
console.log(a);

//======================================================================================================================


//Comparison operator

// Equal to (==) operator

var a = 10;
var b = 30;
var c = 30;
console.log(a==b); // false
console.log(b==c); //true
console.log(a==c); //false

// Not Equal to (!=)
var a = 10;
var b = 30;
var c = 30;
console.log(a!=b); //true
console.log(b!=c); //false
console.log(a!=c); //true

// //Greater than (>)
var a = 24;
var b = 12;
var c = 34;
console.log(a > b); //true
console.log(b > c); //false
console.log(a > c); //false

//Greater than equal to (>=)
var a = 23;
var b = 23;
var c = 12;
console.log(a >= b); //true
console.log(b >= c); //true
console.log(a >= c); //true
console.log(c >= b); //false

//less than (<)
var a = 34;
var b = 45;
var c = 12;
console.log(a < b); //true
console.log(b < c); //false
console.log(a < c); //false
console.log(c < b); //true


//================================================================================================================================



//Logical operator

//logical AND (&&) operator - if both value is true, it return true

var a = true;
var b = false;
var c = true;

console.log(a && b); // false
console.log(b && c); //false
console.log(a && c); //true

//logical OR (||) operator - if any one is true, it return true

var x = true;
var y = false;
var z = true;
var x1 = false
console.log(x || y);
console.log(x || z);
console.log(y || z);
console.log(y || x1);

// logical NOT (!) operator - reverse the result
var x = false
console.log(!x);

var y = true;
console.log(!y);



//========================================================================================================================================




// string operator
// concatenation operator (+)  use to join string 
var myName = 'Abhijeet';
console.log(myName + " Suryawanshi")

var fname = "Abhijeet";
var lname = "Suryawanshi";
var fullname = fname + lname;
console.log(fullname);

//===============================================================================================================================================================


// Control statement & Loops

var age = 18;

if(age >= 18){
    console.log("you are an adult");
}else{
    console.log("you are not an adult");
}

var age = 16;
if(age >= 18){
    console.log("you can vote");
}else{
    console.log("you cannot vote");
}

var age = 17;
if(age >=18){
    console.log("You can drive bike");
}else{
    console.log('You can drive only electric bike')
}


// Area of triangle, rectrangle, circle
var area = "rectriangle";
var PI = 3.142, l = 4, b = 5, r = 2, h = 3;
if(area == "circle"){
    console.log("Area of circle " + PI*r**2);
} else if(area == "triangle"){
    console.log("Area of trianlge " + 1/2*b*h);
}else if(area == "rectriangle"){
    console.log("Area of rectriangle " + l*b);
}


// Conditional (Ternary Operator)

//check are you eligible for vote
var age = 17;
console.log((age >=18 ) ? "you are elgibile for vote":"You are not eligible for vote")

//check are you eligible for driving
var age = 21;
console.log((age >= 18) ? " you can drive":"you cannot drive");

//check raining 
var raining = true;
console.log((raining = true) ? "Take umbrella" : "Don't take umbrella");

//check number is even or odd
var num = 5;
console.log((num%2==0) ? "Even Number" : "Odd number");

var num = 4;
console.log((num%2==0) ? "Even Number" : "Odd Number");

// Write a ternary operator that compares two strings, str1 and str2. If they are equal, 
//assign "Strings are equal" to a variable; otherwise, assign "Strings are not equal."

var a = "Hello";
var b = "Hello";
var c = "hello";
console.log((a==b) ? "String is equal" : "String is not equal");
console.log((a==c) ? "String is equal" : "String is not equal");


// Write a JavaScript expression using the ternary operator that checks if a variable isTrue is true. 
// If it's true, assign the string "Yes" to result, otherwise assign "No".

var a = true
console.log((a==true) ? "Yes" : "No");


//==============================================================================================================

//Switch statement - Switch statement is used to perform different actions based on different conditions

var area = "triangle"

var PI = 3.142, l = 4, b = 5, r = 2, h = 3;

switch(area){
    case "circle":
        console.log("Area of circle " + PI*r**2);
        break;
    case "triangle":
        console.log("Area of trianlge " + 1/2*b*h);
        break;
    case "rectriangle":
        console.log("Area of rectriangle " + l*b);   
}


//-------------------------------------------------------------------

var area = "circle"

var PI = 3.142, l = 4, b = 5, r = 2, h = 3;

switch(area){
    case "circle":
        console.log("Area of circle " + PI*r**2);
        break;
    case "triangle":
        console.log("Area of trianlge " + 1/2*b*h);
        break;
    case "rectriangle":
        console.log("Area of rectriangle " + l*b);   
}

//------------------------------------------------------------------------------------------------

var area = "rectriangle"

var PI = 3.142, l = 4, b = 5, r = 2, h = 3;

switch(area){
    case "circle":
        console.log("Area of circle " + PI*r**2);
        break;
    case "triangle":
        console.log("Area of trianlge " + 1/2*b*h);
        break;
    case "rectriangle":
        console.log("Area of rectriangle " + l*b);   
}


var day = 2;

var day_name;

switch(day){
    case 1:
        day_name="sunday";
    break;

    case 2:
        day_name="Monday";
    break;

    case 3:
        day_name="tuesday";
    break;
    
    case 4:
        day_name="wednesday";
    break;
    
    case 5:
        day_name="thursday";
    break;
    
    case 6:
        day_name="friday";
    break;
    
    case 7:
        day_name="saturday";
    break;

    default:
        day_name="invaild day";

}

console.log(day_name);

var str ;

var result;

switch(typeof str){
    case "number":
        result="Number";
    break;
    
    case "string":
        result="string";
    break;
    
    case "boolean":
        result="boolean";
    break;
    
    default:
        result="something else";
        
}

console.log(result)

//=============================================================================================================================


// while loop statement - loops can execute a block of code a slong as a specified condition is true

let num1 = 0;

while(num1<=10){
    console.log(num1);
    num1++;
}

//----------------------------------------------------------------

let num2 = 2;
while(num2<=20){
    console.log(num2);
    num2++;
}

//---------------------------------------------------------------------------

//Initialize a variable `num` to 2 (the first even number).

var number_1 = 2;
while(number_1<=20){
    console.log(number_1);
    number_1+=2;
}

// Use a while loop to iterate from num to 20.

var number_2 = 10;
while(number_2<=20){
    console.log(number_2);
    number_2+=2;
}



// do while loop statement 

var a = 34;
do{
    console.log(a++);
}while(a<= 40);


//===========================================================================================================

//for loop

for(var a = 1; a <= 10; a+=2){
    console.log(a);
}

for(var a = 2; a<=20; a+=2){
    console.log(a);
}

