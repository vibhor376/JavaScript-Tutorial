//Fetch Api

//Button with id myBtn
let myBtn = document.getElementById("myBtn");

// div with id content
let content = document.getElementById("content");

// function getData() {
//     url="vegetables.json";
//     console.log("Started get data");
//     fetch(url).then((response)=>{
//         console.log("Inside first then");
//         return response.text();
//     }).then((data)=>{
//         console.log("Inside second then");
//         console.log(data);
//     })
// }
function getData() {
  url = "https://api.github.com/users";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}

function postData() {
  url = "https://node-fake-api-server.herokuapp.com/";
  data = {
    username: "7b1b5334-090b-4814-b3ed-9b8add09d8b8",
    password: "64acfa78-bf31-445f-8427-838bbb121dd2",
    auth_token:
      "N2IxYjUzMzQtMDkwYi00ODE0LWIzZWQtOWI4YWRkMDlkOGI4OjY0YWNmYTc4LWJmMzEtNDQ1Zi04NDI3LTgzOGJiYjEyMWRkMg==",
  };
  params = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), //if data is object use stringify function
  };
  fetch(url, params)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
// console.log("Before running getData");
postData();
// console.log("After running getData");
