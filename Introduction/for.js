// 

// function sumToN(n){
//     let i = 1, sum =0;
//     while(i<=n){
//         sum += i;
//         i++;
//     }
//     console.log(sum);
// }

// let num=10;
// sumToN(num);

// function printMultiplesOf3(n){
//     for ( let i = 1 ; i<= n ; i++){
//         if(i%3===0 && i!==15){
//             console.log(i);   
//         }
//     }
// }

// printMultiplesOf3(20);

function checkPassword(password){
    if(password.length<6){
        console.log("Password too short");
        
    }else if (password === "123456" || password === "password"){
        console.log("Weak password");
    }else{
        console.log("Password accepted");
        
    }
}

checkPassword("123");        // Password too short
checkPassword("123456");     // Weak password
checkPassword("password");   // Weak password
checkPassword("mySecret1");  // Password accepted


