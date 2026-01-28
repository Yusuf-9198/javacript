"use strict"; // treat all JS code as newer version
// alert(5+7) // not use as it is(in NodeJs) but used in differnt way

// also read from (https://developer.mozilla.org/en-US/docs/Web/JavaScript)

/* DataTypes:
01. number-> 2 to power 53
02. bigint 
03. string => ""
04. boolean => true/false
05 null => standalone value , we can also asign null value 
06. undefined => abhi value defined nhi hoi hai!
06. symbol => unique

07. object 
*/
let age= 43;
console.log(typeof(age)) //[also]console.log(typeof age )// type batata hai 
console.log(typeof(undefined)) // undefined 
console.log(typeof(null))   // object

/* Types of DataTypes

01. Primitive { IT USE stack(copy of value ) MEOMORY TYPE}
   string, number , boolean, null , undefined, symbole ,Bigint

02. Non primitive(refernce type){ IT USE heap MEOMORY TYPE}
   Array , Objects , Functions*/

/*
const id =Symbol('123')
const id2 =Symbol('123')
console.log(id===id2) // false
*/

const friends =["yusuf" , "kaif", "farhan"];
let myobj ={
    name : "me",
    age : 34
}
const myfunc = function(){
    console.log("hello everyone")
}
console.log(typeof myfunc) // Object Function

// for more knowleadge
// https://262.ecma-international.org/5.1/#sec-11.4.3