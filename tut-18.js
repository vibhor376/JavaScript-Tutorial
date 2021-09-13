// Local and Session storage

// Add a key value inside local storage
localStorage.setItem('Name', 'Vibhor');
localStorage.setItem('Name2','Naman');

// Clears the enitre local storage
// localStorage.clear();

// Clear a particular key-value pair
localStorage.removeItem('Name2');

// Retrieve an item from the local storage
let name =localStorage.getItem('Name');
console.log(name);

let imp=['ghiya','bhindi','torayi','tinda'];
// Store an array in local storage
localStorage.setItem('Sabzi',JSON.stringify(imp));
// Retrieve an array from the local storage
name=JSON.parse(localStorage.getItem('Sabzi'));
console.log(name);

// Add a key value inside session storage
sessionStorage.setItem('Name', 'Vibhor');
sessionStorage.setItem('Name2','Naman');

// Clears the entire session storage
// sessionStorage.clear();

// Clear a particular key-value pair
sessionStorage.removeItem('Name2');

// Retrieve an item from the session storage
name =localStorage.getItem('Name');
console.log(name);