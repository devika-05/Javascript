// function outer(){
//     let count = 0;
//     return function inner(){
//         count ++
//         console.log(count);
//     }
// }

// const counter=outer();
// counter();
// counter();

// function outer (){
//     let count = 0;

//     return{
//         increment : function(){
//         count ++;
//         console.log(count);
        
//         },

//         reset : function (){
//         count = 0;
//         console.log(count);
//         }
//     };
// }

// const counter = outer();
// counter.increment();
// counter.increment();
// counter.reset();

// function createSecret(secret) {
//     return{
//         revealSecret : function () {
//             console.log(secret);            
//         },
//         changeSecret : function (newSecret){
//             secret=newSecret
//             console.log(secret);
//         }
//     }
// }

// const mySecret = createSecret("I love JavaScript");

// mySecret.revealSecret();       // I love JavaScript
// mySecret.changeSecret("Closures are cool");
// mySecret.revealSecret();       // Closures are cool

// const anotherSecret = createSecret("This is hidden");
// anotherSecret.revealSecret();  // This is hidden
// mySecret.revealSecret();       // Closures are cool (still separate)


function createLimitedCounter(limit){
    let count = 0;
    return {
        checkLimit : function (){
            if(limit>count){
                count++;
                console.log(count);
                
            }else{
                console.log("Limit Reached");
                
            }
        },

        reset : function(){
            count = 0;
            console.log(count);
        }
    }
}

const counter = createLimitedCounter(2);
counter.checkLimit(); // 1
counter.checkLimit(); // 2
counter.checkLimit(); // Limit Reached
counter.reset();      // 0
counter.checkLimit(); // 1
