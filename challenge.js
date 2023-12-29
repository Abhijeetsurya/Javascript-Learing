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

//================================================================================================

// write table of 8 using for loop

for(var a = 8; a<=80; a+=8){
    console.log(a);
}

//write table of 15 using for loop

for(var a = 15; a<=150; a+=15){
    console.log(a);
}

//write table of 9 using for loop

for(var a = 9; a<=90; a+=9){
    console.log(a);
}

//write table of 12 using for loop

for(var a=12; a<=120; a+=12){
    console.log(a);
}


//Add Dec at the end of array

// const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov"];

// console.log(months);

// months.splice("Jan");
// console.log(months)months.push("Dec");

// 


//what is the return value of splice method

// const splicemonth = months.splice(months.splice(months.length, 3, "Feb"));

// console.log(splicemonth);

//Replace March to march

const months = ["Jan", "Feb", "mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov"];


months.splice(2, 1, "March");

console.log(months);


//-------------------------------------------------------------------


let arr = [2, 4, 9, 14, 16]

// let newArr = arr.map((value)=>{
//     return value > 9
// })
// 
// console.log(newArr)

let newArr = arr.map((value, index, arr)=>{
    return `index of ${index} and the value is ${value} belong to ${arr}`
})

console.log(newArr)


//---------------------------------------------------------------------


let arr1 = [2, 4, 9, 14, 16]

let newArr1 = arr1.filter((value)=>{
    return value > 9
})

console.log(newArr1)


//-----------------------------------------------------------------------------------------------


// Que 1. Find the square root of each element in an array?

let Arr_Num = [25, 36, 49, 64, 81]

let Square_Arr = Arr_Num.map((value)=>{
    return Math.sqrt(value)
})

console.log(Square_Arr)


// Que 2. Multiply each element by 2 and return only those elements which are greater than 10 ?

let num_1 = [2, 3, 4, 6, 8]

let multiple_of = num_1.map((value)=>{
    return value*2
}).filter((value)=>{
    return value > 10
})

console.log(multiple_of)


//-------------------------------------------------------------------------------------------------


// Que:- Display only 280 characters of a string like the one used in Twitter?

let myTwitte = " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam velit excepturi beatae eum nostrum consequuntur esse officia illo sint exercitationem est eveniet unde, voluptates fuga amet qui voluptate, saepe consequatur? Distinctio ut voluptatem et alias minima tempore architecto, rerum quo illum commodi ea autem repudiandae magni nihil itaque, veritatis quasi perspiciatis quibusdam vitae dolore consequatur ullam voluptas excepturi eum? Quisquam laudantium illum alias doloribus vero iure nulla minus perferendis amet delectus soluta ipsa error natus sint ex earum nostrum consequatur, eaque mollitia cumque exercitationem harum. Nisi fugiat possimus a asperiores doloribus! Eveniet ducimus magni consectetur commodi voluptate quae nemo esse ut temporibus. Perferendis, magnam laudantium! Voluptate cum sit facere odit laudantium? Ratione debitis quam cum sit laborum facere molestiae, aspernatur quos a! Cupiditate, maxime nostrum laboriosam laudantium doloribus quas accusamus tempore placeat commodi vero ipsum libero odio ducimus possimus, minus odit labore, facilis similique? Tempora ad excepturi corporis quis voluptas suscipit inventore quaerat distinctio, exercitationem, ipsum ipsa, quasi adipisci esse laborum id! Obcaecati officiis eveniet molestias repellendus quas ab dolorum error iusto quod iste doloremque, architecto eius mollitia aliquid ipsam corrupti voluptatem sed dicta. Iure alias porro dolorum quis! Rerum, nulla! Optio ducimus rem laudantium est maiores doloremque consequuntur beatae quisquam necessitatibus voluptates error, quas repudiandae esse libero fuga quo eos nam alias impedit, non consectetur architecto accusantium enim laboriosam? Omnis laudantium aperiam repellendus. Ullam debitis aut rem, exercitationem ad sed ipsa velit ducimus cum neque nihil sequi totam illum doloremque ratione iure libero, eos nesciunt commodi numquam impedit molestiae quasi quam deserunt. Minima ducimus nam, eligendi dicta quis eum, consequuntur cupiditate eos soluta vero corporis tenetur, veritatis nemo blanditiis sunt placeat voluptatum quod mollitia! Libero exercitationem suscipit tempora dignissimos voluptatibus error ad aliquid iure dicta, distinctio iste, voluptas quia?"

let myActualTweet = myTwitte.slice(0, 280)

console.log(myActualTweet)

console.log(myActualTweet.length)


//-------------------------------------------------------------------------------------------------------



//Que:- Return the unicode of the last character in a string

let str_1 = "HELLO WORLD";
let last_index = str_1.length-1;
console.log(last_index)

console.log(str_1.charCodeAt(10))


//------------------------------------------------------------------------------------------------------------------------


console.log(new Date().toLocaleDateString()); // return only current date in format of M/D/Y

console.log(new Date().toLocaleTimeString()); // return only current time in format of H/M/S

console.log(new Date().toLocaleString()); // return Date and time in format of M/D/Y, H/M/S





