
const current = new Date().getHours();

let message;

if(current<12){
    message="Good Morning !!";
    console.log("Good Morning !!");
} else if(current<18){
    message="Good Afternoon !!";
    console.log("Good After !!");
}else{
    message="Good Night";
    console.log("Good Night !!");
}

alert(message);