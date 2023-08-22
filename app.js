// console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))
 
 const emailRef = document.querySelector(".email");


/* 1. Then
fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
response.json().then(data => {
    emailRef.innerHTML = data.email;
})
})

//Cleaner/More maintainable

fetch ("https://jsonplaceholder.typicode.com/users/1")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    emailRef.innerHTML = data.email
});

*/

//  2. Async/Await

async function main() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
const data = await response.json()
console.log(data)
emailRef.innerHTML = data.email
}

main();

//Creating promise

 function getSubscriptionStatus () {
    return new Promise ((resolve, reject) => {
        resolve("VIP")

    })
 }

 //1. Then
 getSubscriptionStatus().then(response =>console.log(response))

//2. Async/Await
async function main () {
    console.log(await getSubscriptionStatus())
}
main ();