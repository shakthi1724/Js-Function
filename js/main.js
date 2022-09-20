
// Function expression

// const siva= function shakthi(a,b) {
//     let c=a+b;
//     return c;
// }
// const x=siva(2,3);
// console.log(siva);
// console.log(x);

// // Function declaration

// function myFunction() {
//     let a="Shakthi";
//     let b="Official";
//     console.log(a+" "+b);
// }
// myFunction();

//Arrow function

// const a=()=>2+8;

// console.log(a())

var a=parseInt(prompt("Enter the number of a"));
var b=parseInt(prompt("Enter the value of b"));
var c=prompt("Enter the operator");

function operation(op) {
    if(op=="+")
    {
        console.log(a+b);
    }
    else if(op=="-")
    {
        console.log(a-b);
    }
    else if(op=="*")
    {
        console.log(a*b);
    }
    else if(op=="/")
    {
        console.log(a/b);
    }
    else if(op=="%")
    {
        console.log(a%b);
    }
}
operation(c);
