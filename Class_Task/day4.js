// const username = "Harsh";
// const password = "1234";

// function login(resolve, reject) {
//     const enterUser = prompt("Enter Username:");
//     const enterPass = prompt("Enter Password:");

//     if (enterUser === username && enterPass === password) {
//         console.log("Login Success");
//         if (resolve) resolve("Login Success");
//     } else {
//         console.log("Login Failed");
//         if (reject) reject("Login Failed");
//     }
// }

// login();

async function test(){
    console.log("1");
    await console.log("2");
    console.log("3");
    console.log("4");
}

test();