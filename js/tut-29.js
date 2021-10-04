
let fruits=document.getElementById('fruits');
fruits.addEventListener('click',fruitsPopulate);

function fruitsPopulate() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'fruits.json', true);

    xhr.onload = function(){
        if(this.status==200){
        let obj=JSON.parse(this.responseText);
        console.log(obj);
        let list=document.getElementById('frt');
        html="";
        obj=obj.fruits;
        console.log(obj.fru);
        for (key in obj) {
            console.log(obj[key]);
            html+=`<li> Current price of ${obj[key].name} is ${obj[key].price}.</li>`;
        }
        frt.innerHTML=html;
        // console.log(html);
        }else{
            console.log('Some eror occured');
        }
    }
    xhr.send();

}
let vegetables=document.getElementById('vegetables');
vegetables.addEventListener('click',vegetablesPopulate);

function vegetablesPopulate() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'vegetables.json', true);

    xhr.onload = function(){
        if(this.status==200){
        let obj=JSON.parse(this.responseText);
        console.log(obj);
        let list=document.getElementById('vege');
        html="";
        obj=obj.vegetables;
        // console.log(obj.veg
        for (key in obj) {
            console.log(obj[key]);
            html+=`<li> Current price of ${obj[key].name} is ${obj[key].price}.</li>`;
        }
        vege.innerHTML=html;
        // console.log(html);
        }else{
            console.log('Some eror occured');
        }
    }
    xhr.send();

}