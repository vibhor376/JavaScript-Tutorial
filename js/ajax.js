//Ajax 

let fetchBtn=document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonHandler);

function buttonHandler() {
    console.log('You have clicked the fetchBtn');

    // Instantiate the object 
    let xhr = new XMLHttpRequest();

    // Open the object 
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);//async value is true


    //Use this for post request
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('Content-type','application/json');
    // xhr ready states
    // learn more about xhr ready states here - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

    xhr.onreadystatechange = function(){
        // console.log("xhr state is ", xhr.readyState);
    }
    //What to do on progress (optional)
    xhr.onprogress = function() {
        console.log('On progress');
    }

    //What to do when response is ready
    xhr.onload = function(){
        if(this.status==200){//Http status code which means OK
        console.log(this.responseText);
        }else{
            console.log('Some eror occured');
        }
    }
    //You can refer this to know more about http status codes 
    // https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
    
    //send the data
    paramater = `{"name":"test34sad545","salary":"123","age":"23"}`;
    xhr.send(paramater);
    console.log('Done');//this statement is printed first because async value is true

}

let populateBtn= document.getElementById('populateBtn');
populateBtn.addEventListener('click', populateHandler);

function populateHandler() {
    console.log('You have clicked the populateBtn');

    // Instantiate the object 
    let xhr = new XMLHttpRequest();

    // Open the object 
    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);//async value is true

    //What to do on progress (optional)
    xhr.onprogress = function() {
        console.log('On progress');
    }

    //What to do when response is ready
    xhr.onload = function(){
        if(this.status==200){//Http status code which means OK
        let obj=JSON.parse(this.responseText);
        // console.log(obj);
        let list=document.getElementById('list');
        html="";
        obj=obj.data;
        console.log(obj);
        for (key in obj) {
            // console.log(key);
            html+=`<li> ${obj[key].first_name}</li>`;
        }
        list.innerHTML=html;
        // console.log(html);
        }else{
            console.log('Some eror occured');
        }
    }
    //send the data
    xhr.send();
    console.log('Done');//this statement is printed first because async value is true

}