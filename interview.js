// difference between null and undefined 
// var a = null // null is like empty box 
// console.log(a);
// console.log(typeof (a)); // type is object

// var a = undefined // undefined is like you haven't used yet 
// console.log(a);
// console.log(typeof (a)); // type is undefined

//------------------------------------------------------------------------------

//What is Nan?

// The initial value is Not-A-Number(Nan)

// var a = "Java" - "script"; //Here both are string, so return Nan(Not-a-number)
// console.log(a);
// console.log(typeof (a)); //but type is number
// console.log(isNaN(a));

//=====================================================================================================

// What is the difference between == and === ?


// == is checking value is equal or not
// var a = 10;
// var b = '10';
// console.log(a==b); // checking value is equal or not

// === is checking value and data type is equal or not

// var a = 10;
// var b = "10";
// console.log(a===b); //cheking value and data type is equal or not



//================================================================================================================

//  Que:- why use function ?
//  Ans:- We can reuse the code define once and use anytime we need, we can use same code many times with differnet arguments for different result 

// function myfun(a, b){
//     console.log(a+b)
// }

// myfun(2, 3)


// myfun(67, 53);


//---------------------------------------------------------------------------------------


// const obj = {
//     myName: 'Abhijeet',
//     Age: 21,
//     city: "Bhopal",
//     myData : () =>{
//         console.log(this)
//     }
// }

// obj.myData();

  
//-----------------------------------------------------------------------------------------------------------


// let bioData = {
//     myName: {
//         realName: "Abhijeet",
//         NickName: "Chottu"
//     },

//     myAge: 26,

//     getData(){
//         console.log(`My name is ${this.myName.realName} and my age is ${this.myAge}`)
//     }
// }

// bioData.getData()


// ---------------------------------------------------------------------------------------------------------------

// Difference Between Asynchronous and synchronous Javascript

// Synchronous Javascript - program run line by line

// const fun2 = () => {
//     console.log('fucntion 2 is called')
// }


// const fun1 = () => {
//     console.log('function 1 is called');
//     fun2()
//     console.log('Function 1 is called again')
// }
// fun1()


// Asynchronous Javascript - don't wait for other operation it will run 

// const fun2 = () => {
//        setTimeout(()=>{
//         console.log('fucntion 2 is called')
//        }, 2000)  // run after 2 second
//     }
    
//     const fun1 = () => {
//         console.log('function 1 is called');
//         fun2()
//         console.log('Function 1 is called again')
//     }

//     fun1()
    

// --------------------------------------------------------------------------------------------------------


// What is the output of sum(5)(3)(8) ?


