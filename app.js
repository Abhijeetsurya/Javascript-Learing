// // console.log("Hello")

// /🔆🔆   1. values and variables in javascript */

// // var is functional scoped
// // var myName = "Abhijeet"
// // console.log(myName)

// // let and const is block scoped
// // let Mycity = "Bhopal";

// // const mystate = "M.P.";

// /*===========================variables naming rules======================================== */
// // var myCity = "Chhindwara"  // This is vaild
// // console.log(myCity);

// // var _myAge = 21; // This is vaild
// // console.log(_myAge);

// // var $country = "India" // This is vaild
// // console.log($country);

// var _1my_number = 9303940996; // This is vaild
// console.log(_1my_number);

// //var &myname = "abhi";  //This is invaild

// //var my number = 9303940996 // This is invaild

// //var 24myName = "Abhijeet"  //This is Invaild we cannot start variable name witha number

// //var myname% = "Abhijeet" //This is invaild

// /*=========================================================================================*/

// /* 🔆🔆   ====================Data types============================*/

// var myname = "Abhijeet Suryawanshi" //string
// console.log(myname);
// console.log(typeof (myname));

// var myage = 21; //Number
// console.log(myage);
// console.log(typeof (myage));

// var iAm = true; //Boolean
// console.log(iAm);
// console.log(typeof (iAm));

// var iAm1 = false //Boolean
// console.log(iAm1);
// console.log(typeof (iAm1));

// //=======================================================================================================

// 🔆🔆   Expressions and operator

// //Assignment operator (=)
// var x = 23;

// //Addition assignment operator (+=)
// var x = 23;
// x += 5;
// console.log(x);

// //Substraction Assignment operator (-=)
// var x = 9;
// x -= 5;
// console.log(x);

// //Multiplication Assignment operator (*=)
// var x = 4;
// x *= 3;
// console.log(x);

// //Division Assignment operator (/=)
// var x = 15;
// x /= 3;
// console.log(x);

// //Remainder Assignment operator (%=)
// var x = 19;
// x %= 3;
// console.log(x);

// //Exponentiation Assignment operator (**=)
// var x = 4;
// x **= 2;
// console.log(x);

// //Bitwise Assignment operator
// var x = 5 // Binary no. = 0101
// x &= 2;
// console.log(x);

// //=====================================================================================================

// //Arithemetic operator

// // Addition operator (+)
// console.log(2+4);

// //Substraction operator (-)
// console.log(12-7);

// //Multiplication operator (*)
// console.log(3*4);

// //Division operator (/)
// console.log(12/4);

// //Modulus(remainder) operator (%)
// console.log(76%6);

// //Exponentiation operator (**)
// console.log(4**2);

// //Postfix Increment operator (++)
// var a = 5;
// a++;
// console.log(a);

// //Postfix Decrement operator (--)
// var a = 8;
// a--;
// console.log(a);

// //prefix Increment operator

// var a = 4;
// ++a;
// console.log(a);

// //prefix decrement operator

// var a = 8;
// --a;
// console.log(a);

// //======================================================================================================================

// //Comparison operator

// // Equal to (==) operator

// var a = 10;
// var b = 30;
// var c = 30;
// console.log(a==b); // false
// console.log(b==c); //true
// console.log(a==c); //false

// // Not Equal to (!=)
// var a = 10;
// var b = 30;
// var c = 30;
// console.log(a!=b); //true
// console.log(b!=c); //false
// console.log(a!=c); //true

// // //Greater than (>)
// var a = 24;
// var b = 12;
// var c = 34;
// console.log(a > b); //true
// console.log(b > c); //false
// console.log(a > c); //false

// //Greater than equal to (>=)
// var a = 23;
// var b = 23;
// var c = 12;
// console.log(a >= b); //true
// console.log(b >= c); //true
// console.log(a >= c); //true
// console.log(c >= b); //false

// //less than (<)
// var a = 34;
// var b = 45;
// var c = 12;
// console.log(a < b); //true
// console.log(b < c); //false
// console.log(a < c); //false
// console.log(c < b); //true

// //================================================================================================================================

// //Logical operator

// //logical AND (&&) operator - if both value is true, it return true

// var a = true;
// var b = false;
// var c = true;

// console.log(a && b); // false
// console.log(b && c); //false
// console.log(a && c); //true

// //logical OR (||) operator - if any one is true, it return true

// var x = true;
// var y = false;
// var z = true;
// var x1 = false
// console.log(x || y);
// console.log(x || z);
// console.log(y || z);
// console.log(y || x1);

// // logical NOT (!) operator - reverse the result
// var x = false
// console.log(!x);

// var y = true;
// console.log(!y);

// //========================================================================================================================================

// // string operator
// // concatenation operator (+)  use to join string
// var myName = 'Abhijeet';
// console.log(myName + " Suryawanshi")

// var fname = "Abhijeet";
// var lname = "Suryawanshi";
// var fullname = fname + lname;
// console.log(fullname);

// //===============================================================================================================================================================

//🔆🔆  Control statement & Loops

// var age = 18;

// if(age >= 18){
//     console.log("you are an adult");
// }else{
//     console.log("you are not an adult");
// }

// var age = 16;
// if(age >= 18){
//     console.log("you can vote");
// }else{
//     console.log("you cannot vote");
// }

// var age = 17;
// if(age >=18){
//     console.log("You can drive bike");
// }else{
//     console.log('You can drive only electric bike')
// }

// // Area of triangle, rectrangle, circle
// var area = "rectriangle";
// var PI = 3.142, l = 4, b = 5, r = 2, h = 3;
// if(area == "circle"){
//     console.log("Area of circle " + PI*r**2);
// } else if(area == "triangle"){
//     console.log("Area of trianlge " + 1/2*b*h);
// }else if(area == "rectriangle"){
//     console.log("Area of rectriangle " + l*b);
// }

// // Conditional (Ternary Operator)

// //check are you eligible for vote
// var age = 17;
// console.log((age >=18 ) ? "you are elgibile for vote":"You are not eligible for vote")

// //check are you eligible for driving
// var age = 21;
// console.log((age >= 18) ? " you can drive":"you cannot drive");

// //check raining
// var raining = true;
// console.log((raining = true) ? "Take umbrella" : "Don't take umbrella");

// //check number is even or odd
// var num = 5;
// console.log((num%2==0) ? "Even Number" : "Odd number");

// var num = 4;
// console.log((num%2==0) ? "Even Number" : "Odd Number");

// // Write a ternary operator that compares two strings, str1 and str2. If they are equal,
// //assign "Strings are equal" to a variable; otherwise, assign "Strings are not equal."

// var a = "Hello";
// var b = "Hello";
// var c = "hello";
// console.log((a==b) ? "String is equal" : "String is not equal");
// console.log((a==c) ? "String is equal" : "String is not equal");

// // Write a JavaScript expression using the ternary operator that checks if a variable isTrue is true.
// // If it's true, assign the string "Yes" to result, otherwise assign "No".

// var a = true
// console.log((a==true) ? "Yes" : "No");

// //==============================================================================================================

// //Switch statement - Switch statement is used to perform different actions based on different conditions

// var area = "triangle"

// var PI = 3.142, l = 4, b = 5, r = 2, h = 3;

// switch(area){
//     case "circle":
//         console.log("Area of circle " + PI*r**2);
//         break;
//     case "triangle":
//         console.log("Area of trianlge " + 1/2*b*h);
//         break;
//     case "rectriangle":
//         console.log("Area of rectriangle " + l*b);
// }

// //-------------------------------------------------------------------

// var area = "circle"

// var PI = 3.142, l = 4, b = 5, r = 2, h = 3;

// switch(area){
//     case "circle":
//         console.log("Area of circle " + PI*r**2);
//         break;
//     case "triangle":
//         console.log("Area of trianlge " + 1/2*b*h);
//         break;
//     case "rectriangle":
//         console.log("Area of rectriangle " + l*b);
// }

// //------------------------------------------------------------------------------------------------

// var area = "rectriangle"

// var PI = 3.142, l = 4, b = 5, r = 2, h = 3;

// switch(area){
//     case "circle":
//         console.log("Area of circle " + PI*r**2);
//         break;
//     case "triangle":
//         console.log("Area of trianlge " + 1/2*b*h);
//         break;
//     case "rectriangle":
//         console.log("Area of rectriangle " + l*b);
// }

// var day = 2;

// var day_name;

// switch(day){
//     case 1:
//         day_name="sunday";
//     break;

//     case 2:
//         day_name="Monday";
//     break;

//     case 3:
//         day_name="tuesday";
//     break;

//     case 4:
//         day_name="wednesday";
//     break;

//     case 5:
//         day_name="thursday";
//     break;

//     case 6:
//         day_name="friday";
//     break;

//     case 7:
//         day_name="saturday";
//     break;

//     default:
//         day_name="invaild day";

// }

// console.log(day_name);

// var str ;

// var result;

// switch(typeof str){
//     case "number":
//         result="Number";
//     break;

//     case "string":
//         result="string";
//     break;

//     case "boolean":
//         result="boolean";
//     break;

//     default:
//         result="something else";

// }

// console.log(result)

// //=============================================================================================================================

// // while loop statement - loops can execute a block of code a slong as a specified condition is true

// let num1 = 0;

// while(num1<=10){
//     console.log(num1);
//     num1++;
// }

// //----------------------------------------------------------------

// let num2 = 2;
// while(num2<=20){
//     console.log(num2);
//     num2++;
// }

// //---------------------------------------------------------------------------

// //Initialize a variable `num` to 2 (the first even number).

// var number_1 = 2;
// while(number_1<=20){
//     console.log(number_1);
//     number_1+=2;
// }

// // Use a while loop to iterate from num to 20.

// var number_2 = 10;
// while(number_2<=20){
//     console.log(number_2);
//     number_2+=2;
// }

// // do while loop statement

// var a = 34;
// do{
//     console.log(a++);
// }while(a<= 40);

// //===========================================================================================================

// //for loop

// for(var a = 1; a <= 10; a+=2){
//     console.log(a);
// }

// for(var a = 2; a<=20; a+=2){
//     console.log(a);
// }

// //=========================================================================================================================================================================

// 🔆🔆 function - a function is block of code design to perform a particular task

// function myfun(){
//     console.log("I am abhijeet");
// }

// myfun()

// var fnum

// var snum

// function add(fnum, snum){
//     console.log(fnum+snum)
// }

// add(12, 23)

// //-----------------------------------------------------------------------------------------------

// function checkvalue(a){
//     var a;
//     if(a>=1){
//         console.log("Positive Number");
//     }else{
//         console.log("Negative Number");
//     }
// }

// checkvalue(23)

// //-------------------------------------------------------------------------------------

// function sub(a, b){
//     console.log(a-b);
// }

// sub(2, 2)

// //-----------------------------------------------------------------------------------------------

// function multiply(x, y){
//     var m=x*y;
//     return m;
// }

// console.log(multiply(2, 3))

// //------------------------------------------------------------------------------------------------

// function intro(name, country){
//     console.log("Hello My Name is " + name + " " +" I live in " + country);
// }

// intro("Jhon", "USA");

// intro("Abhijeet", "Bhopal");

// //-----------------------------------------------------------------------------------------------

// //Function Expression

// function funcexp(a, b){
//     console.log(a%b);
// }

// var expreresult = funcexp(23, 2);

// //============================================================================================================

// //Retrun Keyword

// function add(a, b){
//     return a+b;
// }

// var add1 = add(6, 3);

// console.log("sum of two number is ", add1);

// //======================================================================================================================

// //Anonymous Function

// let Anonymous1 = function(a, b){
//     return a+b
// }

// console.log(Anonymous1(2, 3));

// //--------------------------------------------------------------------------------------------

// let Anonymous2 = function(x, y){
//     if(x>y){
//         return "x is greater";
//     }else{
//         return "y is greater";
//     }
// }

// console.log(Anonymous2(2, 3));

// //==========================================================================================================

// //********************************************************************************************** */

// 🔆🔆 Modern Javascript ES6

// // let vs const vs var

// // let - in let we cannot redeclare variable with same name,
// // but we can reassing a value to variable which already declared
// //let is block scope we cannot access outside block a variable declared with let in a block

// let n = 23;

// // let n = 56;  this is not allow in let

// n = 56; // we can reassing value to variable

// if(23==23){
//     let n1 = 67;
// }

// // console.log(n1); we cannot acces outside a block

// //-------------------------------------------------------------------------

// // const - if we declare a variable with const we cannot reassing value to variable and redeclare variable name
// // const is block scope cannot acces a variable created in block with const outside a block

// const n2 = 21;

// // n2 = 23; we cannot reassing and redeclare in a variable created with const

// console.log(n2);

// if(21==21){
//     const n3 = "hello";
// }

// // console.log(n3); const is block scope we cannot access outside ablock which created with const in a block

// //------------------------------------------------------------------------------------------------

// //var - var is functional scope, we can reassing and redeclare a variable created with var

// var myfirstname = "Abhijeet";

// var myfirstname = "Abhi";

// function myfunn(){

//     if(true){
//         var mylastname = " suryawanshi";
//         console.log(myfirstname + mylastname)
//     }

//     console.log(mylastname); //we can use outside a block a variable created with var
// }

// myfunn()

// // console.log(mylastname);  we cannot acces outside function a variable created using var

// //--------------------------------------------------------------------------------------------------

// //Template literals - use back-ticks(` `) rather than quotes (" ") to define a string

// var text = `Hello world`;

// var text = `He is often called "Abhi"`;

// var text = `The quick
//             brown fox
//             jumps over
//             the lazy dog`;

// //Interpolation  - allow expression in string

// var age = 21;
// console.log(`My Age is ${age}`);

// for( let a = 1; a<=10; a++){
//     let tableof = 4
//     console.log(`${tableof} * ${a} = ${tableof * a}`);
// }

// //======================================================================================================

// // Default Argument

// function greet(name="Guest"){
//     console.log(`Hello ${name}`);
// }

// greet() // output is Hello Guest
// greet('Abhi'); //output is Hello Abhi

// function multiply(a, b=2){
//     return a*b;
// }

// console.log(multiply(3)) //output is 6

// console.log(multiply(4, 6)) //output is 24

// //==============================================================================================================================

// //Fat arrow/arrow function

// // Arrow function without any parameter

// const greets = () =>{
//     return "Hello world!";
// }

// console.log(greets())

// //----------------------------------------------------------------------------------------------

// const addition1 = () =>{
//     let a = 5, b = 6;
//     return `Sum of Number is ${a+b}`;
// }

// console.log(addition1());

// //---------------------------------------------------------------------------------------------

// //shortest way to write arrow function

// let addition2 = () => `Sum of 6 and 8 = ${(a=6)+(b=8)}`;

// console.log(addition2());

// //===============================================================================================================================

// 🔆🔆 Arrays - A variable which store more than one value, we can store more than one value in a variable

// //Array Declaration

// var arr = ["apple", "banan", "Mango", 23, true];

// //Accessing Elements of array

// console.log(arr[1]); // Access index 1 value

// console.log(arr[3]); // acces index 3 value

// console.log(arr[arr.length-1]); //access last element of array

// //Array Length

// console.log(arr.length)

// //for loop in array - return value one by one

// var arr = ["Apple", "Banana", "Orange"];

// for(var i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// var arr = [2, 4, 6, 8, 10];

// for(var i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// //=================================================================================================

// //for-in loop in array - return index number

// var arr = ["Abhi", "Anu", "Ani"];

// for(let a in arr){
//     console.log(a);
// }

// var arr = [4, 8, 12, 26, 20, 24, 28, 32, 36, 40];

// for(let a in arr){
//     console.log(a);
// }

//------------------------------------------------------------------------

// //for-of loop in array - return elements

// var arr = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

// for(i of arr){
//     console.log(i);
// }

// var arr = ["Apple", "cherry", "graphs", "pineapple"];

// for(i of arr){
//     console.log(i);
// }

//-------------------------------------------------------------------------------------

// // forEach loop in array

// // use function in forEach - creating aynonomus function

// var arr = ["BMW", "Volvo", "Mini"];
// arr.forEach(function(element, index, array){
//     console.log(element, index, array);
// })

// var arr = [5, 10, 15, 20, 25];
// arr.forEach(arr => {
//     console.log(arr)
// })

//=================================================================================================

// //searching and filter in array

// //indexOf() method - search index

// let fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];

// console.log(fruits);

// let index = fruits.indexOf("Apple", -1); // give index no. from last

// console.log("Index of Apple", index);

// let indexofapple = fruits.indexOf("Apple", 3); // start searching from index 3

// console.log("index of apple from index 3", indexofapple)

//---------------------------------------------------------------------------------------------------------------

// //lastindexof - start searching from last

// var animal = ["Dog", "Cow", "buffelo", "bull", "Cow", "Dog"];

// console.log("Index of Cow from last", animal.lastIndexOf("Cow"));

// console.log(animal.lastIndexOf("Pig")); //if value not found return -1

//----------------------------------------------------------------------------------------------------------

// //includes - check value is present or not

// let odd_num = [1, 3, 5, 7, 9, 11];

// console.log(odd_num.includes(3)); // true value is present

//-----------------------------------------------------------------------------------------------------

// let price = [200, 350, 360, 400];

// const item_price = price.find((currentvalue)=>{
//     return currentvalue < 370;
// });

// console.log(item_price);

//-------------------------------------------------------------------------------------------------------

//filter method

// let arr = [200, 300, 400, 500];

// let price = arr.filter((elem, index)=>{
//     return elem <= 400;
// })

// console.log(price);

//----------------------------------------------------------------------------------------------

// var num = [3, 6, 4, 2, 4];

// console.log(num.sort());

// var num = [89, 98, 87, 90];
// console.log(num.sort());

//--------------------------------------------------------------------------------------------------------

//push

// let animals = ['pigs', "cows", "sheep"];

// animals.push("bull"); //add one item

// console.log(animals);

// animals.push("hen", "rabbit"); //add multiple item

// console.log(animals)

//===============================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================

// Array

// const languages = ["Javascript", "Python", "Java", "C++"];

// console.log(languages)

// console.log(languages);
// console.log(languages.length);  //length method

// console.log(languages[2]); //access element by index number

// languages.push("Dart");  //add element in last

// console.log(languages)

// languages.unshift("Rust"); //add element in start
// console.log(languages);

// languages.pop() // Remove the last element of array
// console.log(languages);

// languages.shift(); //shift method removes the first element of array
// console.log(languages);

//--------------------------------------------------------------------------------------------

//map -  create a new array by performing some operation on each array element, do not change in original array

// let arr  = [3, 4, 5, 6, 8]

// let r = arr.map((value)=>{
//     return value+1
// })

// console.log(r)

// let arr = [3, 5, 7, 9];

// let new_arr = arr.map((value)=>{
//     return value%2
// })

// console.log(new_arr)

//-----------------------------------------------------------------------------------------------

// reduce - reduce method run a reducer function which accumalate result in single value

// let arr = [45, 3, 2, 8]

// let result = arr.reduce((value)=>{
//     return value/2;
// })

// console.log(result)

// let arr = [2, 4, 6, 8]

// let new_arr = arr.reduce((pervious_calu, curvalue)=>{
//     return pervious_calu + curvalue
// })

// console.log(new_arr)

// let arr = [4, 8, 16, 38]

// let new_arr = arr.reduce((previous_res, curvalue)=>{
//     return curvalue - previous_res
// })

// console.log(new_arr)

//------------------------------------------------------------------------------------------------------

// filter - filter an array with values that passes a test, create a new array

// let arr = [18, 19, 20, 21, 22, 23, 24]

// let r = arr.filter((value)=>{
//     return value<21;
// })

// console.log(r)

//-----------------------------------------------------------------------------------------------------

// How to fatten an array
// converting 2D and 3D array into one dimensional array

// const arr = [
//     ['zone_1', 'zone_2'],
//     ['zone_3', 'zone_4'],
//     ['zone_5', 'zone_6'],
//     ['zone_7', 'zone_8'],
// ]

// let flatArr = arr.reduce((accum, curVal)=>{
//     return accum.concat(curVal);
// })

// console.log(flatArr)

/*==========================================================================================
============================================================================================
============================================================================================
============================================================================================*/

// 🔆🔆 String - string is zero or more characters written inside quotes.
//    Javascript string are used fot storing and manipulating text.
//    You can use single or double quotes
//    Strings can be created as peimitives,
//    from string literals, or as objects, using the String() constructor

// let myName = "Abhijeet";
// let Myname = 'Abhijeet';

// let lname = new String("Suryawanshi");    // string constructor

// console.log(myName);
// console.log(lname);

//length of string

// let name = "Abhijeet"
// console.log(name.length)

//Escape character

// let txt = "I\'m learing javascript";

// console.log(txt)

// if you don want to mess, simply use the alternate quotes

// let new_txt = 'I want to learn "react"';

// console.log(new_txt);

// indexof - return the index of (position of) first occurrence of a specified text in a string

// let myBio = "I am abhijeet from Chhindwara";

// console.log(myBio.indexOf("abhijeet"));

// console.log(myBio.indexOf("e", 4)); // start searching from index 4

//lastIndexOf - search from last and return index position

// console.log(myBio.lastIndexOf("o")); // searching from last

// search() - search method search a sring for a specified value and return the position of the match

// let myBio = "I am abhijeet";

// let sData = myBio.search("am");
// console.log(sData)

// let aim  = "I want to a full Stack MERN Developer";

// let target = aim.search("MERN");

// console.log(target)

// Extracting String

//slice(start, end)
//substring(start, end)
//substr(start, length)

// slice - slice extract a part of string and return the extracted part in a new string

// let str = "fox jumps over the lazy dog"

// let sl = str.slice(4, 9); // does not include end index position
// console.log(sl);

// let fruit = "Apple, Banana, Kiwi, Mango";
// let sl_1 = fruit.slice(7, -2) //start with index 7 and end with -2 which is count from last

// console.log(sl_1);

// substring - similar to slice cannot accept negative indexes

// let str = "Apple, Banana, Mango";

// let res = str.slice(7, 15);  //start with index 7 and end in index 15

// console.log(res)

//substr() - first parameter is starting index and second parameter in the length

// let str = "Apple, Banana, Mango";

// let res = str.substr(6, 6); // start with index 6 and return 6 character after that
// console.log(res);

//-------------------------------------------------------------------------------------------------------------------------------

// Replacing string content - replace value

// let myBio = "I am abhijeet V"

// let replacedata = myBio.replace('V', "S")

// console.log(replacedata)

// replaceAll() - replace all matching value in a string

// let myData = "i am abhi, And i want to be developer";

// let rAll = myData.replaceAll('i', 'I')

// console.log(rAll)

//----------------------------------------------------------------------------------------------------------------------

//Extracting String characters

//CharAt(position) - find character which is in a specified index position

// let str = "Hello World";

// let c = str.charAt(3);  //return the characater in index 3
// console.log(c)

//----------------------------------------------------------------------------------------------

//charCodeAt - return unicode specified index in a string

// let str = "Hello World";

// console.log(str.charCodeAt(0)); //Return the unicode of a specified character stored in specified index position

//--------------------------------------------------------------------------------------------------------------

//Property Access
//ECMAScript 5 (2009) allows property access [] on strings

// let str = "HELLO WORLD";
// console.log(str[3]); // return index 3 value

//----------------------------------------------------------------------------------------------

// toUpperCase - convert to capital letter

// let str = "apple, banana, mango";
// console.log(str.toUpperCase())

// toLowerCase - convert to small letter

// let str = "APPLE, BANANA, MANGO";

// console.log(str.toLowerCase())

//--------------------------------------------------------------------------------------------------

// concat() - join two or more string

// let fname = "Abhijeet";
// let lname = "Suryawanshi";

// console.log(fname.concat(" ", lname));

//---------------------------------------------------------------------------------------------

// trim() - trim method remove white space from start and end

// let str = "             Abhijeet Suryawanshi                        ";
// console.log(str);
// console.log(str.trim());

//--------------------------------------------------------------------------------------------

//convert string to array using split() method

// let txt = "a,b,c,d,e";
// console.log(txt.split(",")); // convert array element of string after every comma which is a seprater

// let txt = "1 | 2 | 4 | 6 | 8 | 10";
// console.log(txt.split("|"));  //convert string character into array string seprater wuth |

/*====================================================================================================
======================================================================================================
=======================================================================================================
========================================================================================================*/

// 🔆🔆 Date and Time in Javascript

// Javascript Date objects represent a single moment in time in a
// platform-independent format. Date objects contain a Number
// that represents milliseconds since 1 January 1970 UTC.

// Creating Date Objects
// There are 4 ways to create a new date objects

// new Date() - Date objects are created with the new Date() constructor.
// new Date() take minimun to arrguments

// console.log(Date.now())   return milisecond

// let TodayDate = new Date(); // Return Today's date and time
// console.log(TodayDate);

// console.log(new Date().toLocaleString()); // return local time

// console.log(new Date().toString());

// set Date, time, minutes, seconds, miliseconds

// let date = new Date(2023, 11, 29, 10, 14, 10)
// console.log(date.toLocaleString())

// new Date(dateString) creates a new date object from a date string

// let date = new Date("December 29, 2023 10:21:23");
// console.log(date.toLocaleString())

// new Date(milliseconds) - create a new date object as zero time plus milliseconds

// if we pass current milliseconds, it return current date and time

// let date = new Date(0);
// console.log(date)

// console.log(Date.now());

// let curDate = new Date(1703869031171);
// console.log(curDate.toLocaleString());

//-------------------------------------------------------------------------------------------------------------

//  🔆 Date Method

// const curDate = new Date()
// console.log(curDate)

// how to get indivisual date
// console.log(curDate.toLocaleString());  // return date in local time zone
// console.log(curDate.getFullYear());    // return current year
// console.log(curDate.getMonth());      // return current month
// console.log(curDate.getDate());      // return today's date
// console.log(curDate.getDay());      // return today's day

//----------------------------------------------------------------------------------------------------------

// 🔆 how to indivisual date

// let date = new Date()
// console.log(date.setFullYear(2023))

//  🔆 Time Methods

// let curTime = new Date()

// console.log(curTime.getTime()); // return the numbers in milliseconds, since January 1, 1970

// console.log(curTime.getHours()); // return the Hours of a date as a number

// console.log(curTime.getMinutes()); // return the Minutes of a date as a number

// console.log(curTime.getSeconds()); // return the seconds of a current time in a number

// console.log(curTime.getMilliseconds()); // return the milliseconds of a current time in a numbers

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// How to set indivisual Time

// let curTime = new Date();

// console.log(curTime.setTime());

/*================================================================================================
=============================================================================================================
=============================================================================================================
==============================================================================================================
*/

// 🔆🔆 Javascript Math Object - Math object allows to perform mathematical tasks on numbers.

// console.log(Math.PI); // return value of PI

// round - return round figure number
// let num = 10.345
// console.log(Math.round(num)); // return round figure number

// let num_1 = 11.56
// console.log(Math.round(num_1))

//pow() - return power of values

// console.log(Math.pow(3, 2)); // it mean the power of 3 is 2(3**2)

// console.log(Math.pow(6, 3)); // the power of 6 is 3

// Math.sqrt() - return the square of value

// console.log(Math.sqrt(81)); // return square root of 81 which is 9

// console.log(Math.sqrt(25));

// console.log(Math.sqrt(55));

// Math.abs() - return the absolute (positive) value

// console.log(Math.abs(-23)); // convert negative value to positive

// console.log(Math.abs(-108));

// console.log(Math.abs(4-10)); // return 6 in the place of -6

// Math.ceil() - return the value of rounded up to its nearest integer

// console.log(Math.ceil(89.1)); //return 90

// console.log(Math.ceil(24.7));

// console.log(Math.ceil(19.1));

// Math.floor() - return the value rounded down to its nearst integer

// console.log(Math.floor(23.8)); //return 23

// console.log(Math.floor(89.124));

// Math.min() - return minimun value
// console.log(Math.min(34, 67, 12, 578, 67)); // return smallest number

// console.log(Math.min(23, 12, 67, 89, -238));

// Math.max() - return maximum value
// console.log(Math.max(67, 23, 57, 12, 98, 45)); // return biggest number

// Math.random() - return random number between 0 (inclusive) and 1 (Exclusive)

// console.log(Math.random()); // it only return 0 to 1 decimal values

// console.log(Math.random()*10); // it return value between 0 to 10

// console.log(Math.floor(Math.random()*10)); // return number between 0 to 9 whole number

// Math.trunc() - return the integer part of number

// console.log(Math.trunc(34.5)); // return only number before decimal

// console.log(Math.trunc(-239))

/*================================================================================================================
===================================================================================================================
===================================================================================================================
=================================================================================================================== */

// 🔆🔆 DOM, BOM, Window object in Javascript

// see in domNavigation and search HTML file

/*==============================================================================================
  ================================================================================================
  ================================================================================================
  ====================================================================================================
  */

// 🔆🔆 Events - check EventsTypes.html file

/* 🔆 HTML events is the things that happen in HTML elements
   When Javascript is used in the HTML pages, Javascript 'react' on the events 
   
   example:-
            An HTML web page has finished loading
            An HTML input field was changed
            An HTML button was clicked       */

// 🔆 4 ways of writing Evenets in Javasript

// 1: using inline events alert();
// 2: By calling a function (most common way of writing)
// 3: using Inline events (HTML onclick="" property and element.onclick)
// 4: using Event Listeners (addEventListener and IE's attachEvent)

// check the EventsTypes.html file

// ----------------------------------------------------------------------------------------------------

// 🔆 Events Object - check EventsObj.html file

// What is Events Object?
// Event object is the parent object of the event object.
// for example
// MouseEvent, focuesEvent, keyboardEvent etc

//----------------------------------------------------------------------------------------------------------------

// 🔆 MouseEvent in javascript - check mouseEnterLeave.html file
//    The MouseEvent Object
//    Events that occur when the mouse interacts with the HTML
//    document belongs to the MouseEvent Object.

//-----------------------------------------------------------------------------------------------------------------

// 🔆 keyboardEvent in Javascript - check keyboardEvent.html file
//    Events that occur when user presses a key on the keyboard,
//    belongs to the keyboardEvent Object.

// ----------------------------------------------------------------------------------------------------------------------------

// 🔆 InputEvents in Javascript
// The onchange event occurs when the value of an element has been changed.
// For radiobuttons and checkboxes, the onchange event occurs when the checked state has changed.

//--------------------------------------------------------------------------------------------------------------------

// 🔆🔆 Timing Based Events in Javascript - check Timing Events folder

// The windows object allows execution of code at specified time intervals.
// These time intervals are called timing events.
// The two key methods to use with Javascript are:-

// 🔆 setTimeout(function, milliseconds)
// Executes a function , after waiting a specified number of milliseconds.

// 🔆 setInterval(function, milliseconds)
// Same as setTimeout(), but repeats the execution of the function continuosly.

// 1) setTimeOut()
// 2) clearTimeout()
// 3) setInterval()
// 4) clearInterval()

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------

// 🔆🔆 Object Oriented Programming in Javascript

// 🔆 1) What is Object Literal?

// Object literal is simply a key:value pair data structure.
// storing variables and functions together in one container,
// we can refer this as an objects.

/*let bioData = {
    myName : "Abhijeet",
    city: "Bhopal",
    Age: 21,
    getdata : function(){
        console.log(`My Name is ${bioData.myName}, My age is ${bioData.Age}`)
    }
}
bioData.getdata()*/

// object literal
// 2nd way no need to write functions as well after ES6

/*
let bioData = {
    myName : "Abhijeet",
    city: "Bhopal",
    Age: 21,
    getdata(){
        console.log(`My Name is ${bioData.myName}, My age is ${bioData.Age}`)
    }
}
bioData.getdata(); */

// what if we want object as a value inside an object

// let bioData = {
//     myName : "Abhijeet",
//     city: "Bhopal",
//     Age: 21,
//     getdata(){
//         console.log(`My Name is ${bioData.myName}, My age is ${bioData.Age}`)
//     }
// }
// bioData.getdata();

// console.log(bioData.Age);

// -----------------------------------------------------------------------------------------------------------------------------------

// 🔆 What is this object?

//  The definition of "this " object is that it contain the current context.

// The this object can have different values depending on where it is placed.

//  // For Example 1
// console.log(this);
// it refers to the current context and that is window global object

// console.log(alert(this))

// function myfun(){
//     console.log(this)
// }
// myfun()

// var myName = "Abhijeet"; // We can convert a local variable into global using 'this' keyword
// function myfun(){
//     console.log(this.myName);
// }

// myfun()

//--------------------------------------------------------------------------------------------------------------

// const obj = {
//     Name : "Abhijeet",
//     Age: 21,
//     city: "Bhopal",
//     myName() {
//         console.log(this.Name)
//     }
// }

// obj.myName();

// --------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------

// 🌞🌞  ECMAScript 2015 to 2020

// 🔆🔆 Destructuring in ES6
// The destructuring assignment syntax is a Javascript expression
// that makes it possible to unpack value from arrays,
// or properties from objects, into sidtinct variables.

//  ➡ Array Destructuring ⛳

//  const myBioData = ['abhijeet', 'suryawanshi', 21];

// let myfname = myBioData[0];
// let mylname = myBioData[1];
// let myAge = myBioData[2];

// console.log(myfname);

// let [myfname, mylname, myAge] = myBioData;

// console.log(myAge);

// we can add values too

// let [myfname, mylname, myAge, mydegree = 'Engineering diploma'] = myBioData

// console.log(mydegree)

//-------------------------------------------------------------------------------------------------

// 🔆 Object Properties

// ➡ we can use Dynamic Peoperties

// let myName = 'Abhijeet';

// const myBio = {
//     [myName]: 'How are you?',
//     city : 'I am from chhindwara'
// }

// console.log(myBio)

// ➡ no need to write key and value, name and key has same name

// let myName = "Abhijeet"

// let myAge = 21

// const myBio = {
//     myName,
//     myAge
// }

// console.log(myBio)

//-----------------------------------------------------------------------------------------------------------------

// 🔆 Spread Operator

// const colors = ['red', 'yellow', 'blue', 'skyblue'];

// // const myColor = ['red', 'yellow', 'blue', 'skyblue', 'white', 'yellow', 'black']  - we dont need to write again

// const Myfavcolor = [...colors, 'white', 'yellow', 'black']

// console.log(Myfavcolor);

//-----------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------

// 🔆🔆 ES7 features - 2016

// 🔆 includes method

// const colors = ['red', 'yellow', 'blue', 'green', 'skyblue']

// const isPresent = colors.includes('yellow');  // if value is present in array return true

// console.log(isPresent)

// ----------------------------------------------------------------------------------------------------

// 🔆 Exponentional operator

// console.log(2**2); //return the power of 2

// console.log(5**6); // return the power of 5

// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------

// 🔆🔆 ES8 - 2017

//  String padding - for giving blank space in starting and ending of string
//  Object.values() - convert object to array
//  Object.entries()

// console.log("abhijeet".padStart(5))

// console.log("abhijeet".padEnd(4))

//-------------------------------------------------------------------------------------------------------

// const person = {name: "abhi", age: 21};

// let value = Object.values(person);
// console.log(value)

// const myBio = {
//     name : "abhijeet",
//     city : "bhopal",
//     age : 21,
//     eduction: "diploma"
// }

// let value = Object.values(myBio) // convert object into array and return only value in a array
// console.log(value)

// --------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------

// 🔆🔆  ES9 - 2018

// spread operator

// const person = {name:'abhijeet', age:21};

// const sPerson = {...person, city : "bhopal"}

// console.log(sPerson)

// --------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------

// 🔆🔆  ES10 - 2019

// converting 2D and 3D array into one dimesional array
// const arr = [
//     ['zone_1', 'zone_2'],
//     ['zone_3', 'zone_4'],
//     ['zone_5', 'zone_6']
// ]

// console.log(arr.flat());

// const arr_1 = [
//     ['zone_1', 'zone_2'],
//     ['zone_3', 'zone_4'],
//     ['zone_5', 'zone_6'],
//     ['zone_7', ['zone_7.1', ['zone_7.1.1', 'zone_7.1.2']]]
// ];

// console.log(arr_1.flat(Infinity)); // flat all dimensional array

// ---------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------

// 🔆🔆  ES11 - 2020

// 🔆 BigInt

// let oldNum = Number.MAX_SAFE_INTEGER; // we cannot use more than max number which is 9007199254740991
// console.log(oldNum)

// create bigInt

// let newNum = 9007199254740991n + 10n;

// console.log(newNum)
// console.log(typeof newNum);

// -----------------------------------------------------------------------------------------------

// Nullish coalescing - check value is falsey or truthy

// const foo = null ?? 'default string';

// console.log(foo);

// ---------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

// ES2014

//  use strict mode

// "use strict";
// x = 3.12;

// console.log(x)

// ------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------

// 🔆🔆 Advance Javascript - check Advance JS folder

// What is Event Propagation ?

// The Event Propagation mode determines in which order the elements receive the event.

// ------------------------------------------------------------------------------------------

// 🔆 Higher order function - accept other function as arrgument

// const add = (a, b) => {
//     return a+b;
// }

// const sub = (a, b) =>{
//     return a-b;
// }

// const mult = (a, b) => {
//     return a*b;
// }

// const divid = (a, b) => {
//     return a/b;
// }

// const reminder = (a, b) => {
//     return a%b;
// }

// const calculator = (num1, num2, operator) => {
//     return operator(num1, num2);
// }

// console.log(calculator(4, 4, add))

// console.log(calculator(5, 7, sub))

// ----------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------

// 🔆 Hoisting in Javascript

// we have a creation phase and execution phase.

// Hoisting in javascript is a mechanism where variables and functions
// declarations are moved to the top of thier scope before the code execute.

// For Example -
// console.log(myName); // value is now undefined

// var myName = "Abhijeet";

// hoisting is not supporting in after ES6

// -----------------------------------------------------------------------------------------------

// 🔆 What is Scope chain and Lexical Scoping in Javascript

// The scope chain is used to resolve the value of variable names in javascript
// scope chain in javascript is lexically defined, which means that we be by looking at the code.
// At the top, we have the global scope, which is the window object in the browser.
// Lexical scoping means now, the inner function can get access to their parent functions varibales bu the vice-versa is not true

// let a = 'Hello guys ';

// const first = () => {
//     let b = 'How are you ? ';

//     const second = () =>{
//        let c = 'Hi, I am fine Thank You';

//         console.log(a+b+c);
//     }
//     second()
//     // console.log(c); // we cannot access a variable declared into the function which created using lewt and const
// }

// first()

// ------------------------------------------------------------------------------------------------------------------------------

// 🔆 What is Closures in Javascript ?

// A closure is the combination of a function bundled together (enclosed) with references
// to its surronding state (the lexical environment).

// In other words, a closure gives you access to an outer fucntion's scope from inner function.

// In Javascript, closures are created every time a function is created at function creation time.

// for Example

// it same like lexical scope

// Example:-

// const outerfun = (a) =>{
//     let b = 10;
//     const innerfun = () => {
//         let sum = a+b;
//         console.log(sum);
//     }
//     innerfun();
// }
// outerfun(5);

// --------------------------------------------------------------------------------------------------------

// 🔆 Use strict - if we use strict mode we cannot declare a variable without var, let, const

// "use strict"

// // x = "Abhijeet";  // this is not possible if we use strict mode
// let x = "Abhi";
// console.log(x)

//----------------------------------------------------------------------------------------------------------------------

// 🔆 function Currying - takes first one and return second function

// function sum(num1){
//     return function (num2) {
//         return function(num3){
//             console.log(num1 + num2 + num3)
//         }
//     }
// }

// sum(5)(3)(8);

// 🔆 using fat arrow function

// const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3);

// sum(3)(5)(8);

// -------------------------------------------------------------------------------------------------------------------

// 🔆 CallBack Hell

// setTimeout(()=>{
//     console.log('1 work is done');
//     setTimeout(()=>{
//         console.log('2 work is done')
//         setTimeout(()=>{
//             console.log('3 work is done')
//             setTimeout(()=>{
//                 console.log('4 work is done')
//                 setTimeout(()=>{
//                     console.log('5 work is done')
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// },1000)

// ----------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

// 🔆🔆 JSON - Javascript Object Notation

// 🔆 JSON.Stringify turns a Javascript object into JSON text and stores that JSON text in a string

// Example:

// var my_object = {key_1: "some text", key_2: true, key_3: 2};

// 🔆 convert object into JSON using JSON.Stringfy

// var convert_into_Json = JSON.stringify(my_object); // Now the data type is string because data type of JSON is string

// console.log(convert_into_Json)

// console.log(typeof(convert_into_Json)); // JSON is string type

// ------------------------------------------------------------------

// 🔆 convert JSON into object using JSON.parse

// var convert_into_Json = JSON.stringify(my_object); // this is converted JSON file now we can change into object

// var json_into_obj = JSON.parse(convert_into_Json); // now this is object

// console.log(json_into_obj)

// console.log(typeof(json_into_obj))

// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------

// 🔆🔆 Promises, fetch API
//  return data

// Syncronous programming
// console.log("I am abhijeet");
// console.log("I am currently learing Javascript");

// Asynchronous programming
// setTimeout(function () {
//   console.log("i want to be a web developer");
// }, 2000);
// console.log("wait for 2 seconds");

// callBack function - a function which is passed as an argument to another function is called callBack

// function waitforThreeSeconds() {
//   let ms = 3000 + new Date().getTime();
//   while (new Date() < ms) {}
// }

// function register(callback) {
//   setTimeout(() => {
//     console.log("register End");
//     callback();
//   }, 2000);
// }

// function sendEmail(callback) {
//   setTimeout(() => {
//     console.log("SendEmail");
//     callback();
//   }, 5000);
// }

// function login(callback) {
//   setTimeout(() => {
//     console.log("login");
//     callback();
//   }, 1000);
// }

// function getUserData(callback) {
//   setTimeout(() => {
//     console.log("Get User Data");
//     callback();
//   }, 1000);
// }

// function displayUserData() {
//   setTimeout(() => {
//     console.log("Display User Data");
//   }, 1000);
// }

// callback hell

// register(function () {
//   sendEmail(function () {
//     login(function () {
//       getUserData(function () {
//         displayUserData();
//       });
//     });
//   });
// });

// ----------------------------------------------------------------

// Promisses - resolve the problem of callback hell

// function register(){
//   return new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     console.log('Registrition is completed')
//     resolve()
//   }, 2000)
//  })
// }

// function sendEmail(){
//   return new Promise((resolve, reject) =>{
//   setTimeout(()=>{
//     console.log('Email Send Successfully')
//     resolve()
//   }, 2000)
// })
// }


// function login(){
//   return new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     console.log('login Successfully');
//     resolve()
//   }, 4000)
// })
// }

// function getUserData(){
//   return new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     console.log('Getting User Data Wait...')
//     resolve()
//   }, 1000)
// })
// }

// function DisplayData(){
//   return new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     let data = {
//       Name: 'Abhijeet',
//       Age: 21,
//       City: "Bhopal"
//     }
//     console.log(data);
//   })
//   resolve()
// })
// }

// register()
// .then(sendEmail)
// .then(login)
// .then(getUserData)
// .then(DisplayData)


// -------------------------------------------------------------

// catch/error hanlding

// function register(){
//   return new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     return reject('Error')
//     console.log('Registrition is completed')
    
//   }, 2000)
//  })
// }

// function sendEmail(){
//   return new Promise((resolve, reject) =>{
//   setTimeout(()=>{
//     console.log('Email Send Successfully')
//     resolve()
//   }, 2000)
// })
// }


// function login(){
//   return new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     console.log('login Successfully');
//     resolve()
//   }, 4000)
// })
// }

// function getUserData(){
//   return new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     console.log('Getting User Data Wait...')
//     resolve()
//   }, 1000)
// })
// }

// function DisplayData(){
//   return new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     let data = {
//       Name: 'Abhijeet',
//       Age: 21,
//       City: "Bhopal"
//     }
//     console.log(data);
//   })
//   resolve()
// })
// }

// register()
// .then(sendEmail)
// .then(login)
// .then(getUserData)
// .then(DisplayData)
// .catch((err)=>{
//   console.log('Error')
// })


// ------------------------------------------------------------------------------------------------------------


// Async/Await

// function register(){
  //   return new Promise((resolve, reject) => {
  //   setTimeout(()=>{
  //     console.log('Registrition is completed')
  //     resolve()
  //   }, 2000)
  //  })
  // }
  
  // function sendEmail(){
  //   return new Promise((resolve, reject) =>{
  //   setTimeout(()=>{
  //     console.log('Email Send Successfully')
  //     resolve()
  //   }, 2000)
  // })
  // }
  
  
  // function login(){
  //   return new Promise((resolve, reject) => {
  //   setTimeout(()=>{
  //     console.log('login Successfully');
  //     resolve()
  //   }, 4000)
  // })
  // }
  
  // function getUserData(){
  //   return new Promise((resolve, reject) => {
  //   setTimeout(()=>{
  //     console.log('Getting User Data Wait...')
  //     resolve()
  //   }, 1000)
  // })
  // }
  
  // function DisplayData(){
  //   return new Promise((resolve, reject) => {
  //   setTimeout(()=>{
  //     let data = {
  //       Name: 'Abhijeet',
  //       Age: 21,
  //       City: "Bhopal"
  //     }
  //     console.log(data);
  //   })
  //   resolve()
  // })
  // }
  
  // register()
  // .then(sendEmail)
  // .then(login)
  // .then(getUserData)
  // .then(DisplayData)
  
  
  // -------------------------------------------------------------
  
  // Async/await
  
//   function register() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Registration is completed');
//             resolve();
//         }, 2000);
//     });
// }

// function sendEmail() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Email Send Successfully');
//             resolve();
//         }, 2000);
//     });
// }

// function login() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Login Successfully');
//             resolve();
//         }, 4000);
//     });
// }

// function getUserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Getting User Data Wait...');
//             resolve();
//         }, 1000);
//     });
// }

// function DisplayData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let data = {
//                 Name: 'Abhijeet',
//                 Age: 21,
//                 City: "Bhopal"
//             };
//             console.log(data);
//             resolve();
//         }, 1000);
//     });
// }



// async function myfun(){
//   await register()

//   await sendEmail()
   
//   await login()

//   await getUserData()

//   await  DisplayData()
// }

// myfun().then(()=>{
//   console.log('All Set')
// })


// ------------------------------------------------------------------------------------------------------------------


// Error Handling and catch



//   function register() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Registration is completed');
//             resolve();
//         }, 2000);
//     });
// }

// function sendEmail() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Email Send Successfully');
//             return reject('Invaild email')
//         }, 2000);
//     });
// }

// function login() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Login Successfully');
//             resolve();
//         }, 4000);
//     });
// }

// function getUserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Getting User Data Wait...');
//             resolve();
//         }, 1000);
//     });
// }

// function DisplayData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let data = {
//                 Name: 'Abhijeet',
//                 Age: 21,
//                 City: "Bhopal"
//             };
//             console.log(data);
//             resolve();
//         }, 1000);
//     });
// }



// async function myfun(){
//   await register()

//   await sendEmail()
   
//   await login()

//   await getUserData()

//   await  DisplayData()
// }

// myfun().then(()=>{
//   console.log('All Set')
// }).catch((err)=>{
//   console.log(err)
// })


// -------------------------------------------------------------------------------------------------------



function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Registration is completed');
            resolve();
        }, 2000);
    });
}

function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Email Send Successfully');
            reject('Error invalid email')
        }, 2000);
    });
}

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Login Successfully');
            resolve();
        }, 4000);
    });
}

function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting User Data Wait...');
            resolve();
        }, 1000);
    });
}

function DisplayData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = {
                Name: 'Abhijeet',
                Age: 21,
                City: "Bhopal"
            };
            console.log(data);
            resolve();
        }, 1000);
    });
}



async function myfun(){
 try{  
  await register()

  await sendEmail()
   
  await login()

  await getUserData()

  await  DisplayData()

} catch(err){
  console.log(err)

  throw new Error();
}
}

myfun().then(()=>{
  console.log('All Set')
}).catch((err)=>{
  console.log(err)
})
