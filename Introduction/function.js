// const square = function (num){
//     return num * num;
// }

// console.log(square(4)); 
// const greetMessage = (name)=> `Hello, ${name}`;

// console.log(greetMessage("Devika"));


// const add = (a,b)=> a+b;

// console.log(add(5,7));

let global="devika";
function scope(){
    let local = "best";
    console.log(global,local);
}

scope();