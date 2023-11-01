console.log("Hello")

/* values and variables in javascript */

var myName = "Abhijeet"
console.log(myName)

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
// concatenation operator (+) - use to join string 
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

// Conditional (Ternary Operator)

var age = 17;
console.log((age >=18 ) ? "you are elgibile for vote":"You are not eligible for vote")

var age = 21;
console.log((age >= 18) ? " you can drive":"you cannot drive");