//Challenge - 1

var a = 10 + "20";  
console.log(a) //output is 1020
console.log(typeof (a));  // string data type

var a = 9 - "4";
console.log(a); //output is 5
console.log(typeof (a));  //Number data type

var a = "java"+"script";
console.log(a); //output is javascript
console.log(typeof (a)); //string data type

var a = " " + " ";  
console.log(a); // output is blank string
console.log(typeof (a)); // string data type

var a = " " + 0;
console.log(a); //output is " 0"
console.log(typeof (a)); //string data type

var a  = "Abhi" - "jeet";
console.log(a); //output is Nan
console.log(typeof (a)); // Number data type

var a = true + true;
console.log(a);  //output is 2
console.log(typeof (a)); // data type is number

var a = true - true;
console.log(a); // output is 0
console.log(typeof (a)); // number data type

var a = true + false;
console.log(a);  // output is 1
console.log(typeof (a)); // data type is number

var a = true - false;
console.log(a); //output is 1
console.log(typeof (a)); //data type is number

var a = false - true;
console.log(a); //output is -1

//==========================================================================================================================//

//challenge - 2

console.log(NaN===NaN); //false

console.log(Number.NaN===NaN); //false

console.log(isNaN(NaN));  // true 

console.log(isNaN(Number.NaN)); //true

console.log(Number.isNaN(NaN)); //true

//============================================================================================================================

// challenge - 3
//What will be the output of 3**3

console.log(3**3); // 3*3*3 output is 27  

//What will be the output, when we add a number and a string

console.log("Abhijeet " + "Age : " + 21)

var num = 21;
var str = "Abhijeet ";
console.log(str + num);

// write a program to swap two number
var a = 12;
var b = 23;
var c = b;
b = a;
a = c;
console.log(a);
console.log(b);

// write a program to swap two number without using third variable

var a = 5;
var b = 10;

a = a+b // a = 15
b = a-b // b = 5
a = a-b // a = 10
console.log(a); // a = 10
console.log(b); // b = 5

//====================================================================================================================================================


// write a program to check give year is leap year or not

var year = 2023;
if(year%4 == 0){
    if(year%100==0){
        if(year%400==0){
            console.log('year is not a leap year');
        }
    }else{
        console.log("Year" + year + "is leap year")
    }
}else{
    console.log("Year" + year + "Not a leap year");
}

// What is truthy and falsy values in javascript

// we have five falsy values in javascript
// 0, " ", undefined, null, Nan, false is always false
if(score = 0){    //Here 0 is represent like false
    console.log("Yeah we won the game");
}else{
    console.log("Oh No we lost the game")
}


// all other are truty value except above value 
if(score = 5){
    console.log("Yeah we won the game");
}else{
    console.log("Oh No we lost the game");
}
