//Async and Await
//For more information regarding async and await refer this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
async function vibhor() {
  console.log("Inside function");
  const response = await fetch("https://api.github.com/users");
  console.log("Before response");
  const users = await response.json();
  console.log("users resolved");
  return users;
  // return "vibhor";
}

console.log("Before calling function");
let a = vibhor();
console.log("After calling function");
console.log(a);
a.then((data) => console.log(data));
console.log("Last line of the code");
