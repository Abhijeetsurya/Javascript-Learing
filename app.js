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



