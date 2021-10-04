//Promises
// -resolve
// -reject
// -pending

// function func() {
//     return new Promise(function(resolve,reject){
//          setTimeout(() => {
//              const error=true;
//              if(!error){
//                  console.log('Function : Your promise has been resolved');
//                  resolve();
//              }else{
//                 console.log('Function : Your promise has not been resolved');
//                 reject('Sorry pls pardon me');
//              }
//          }, 2000);
//     })
// }
// func().then(function () {
//     console.log("Vibhor: Thanks for resolving")
// }).catch(function (error){
//     console.log('Vibhor: Very bad bro! '+error);
// })
function maths() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (100 + 100 > 9999) {
        reject();
      } else {
        resolve("This is impossible");
      }
    }, 1000);
  });
}

maths()
  .then(function (string) {
    console.log(string + " You have done it!");
  })
  .catch(function () {
    console.log("Well I did not expect this from you!");
  });
