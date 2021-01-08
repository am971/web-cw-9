let products = [{name:"Creme Brulee Cookie",price:1.000},
{ name:"White Choco Orea Cookie" , price:.9}, 
{name:"Mixed Dates Cookie" ,price:.75}];

let cart =[];

function clearcart(){
    cart =[];

}
function addtoCart(index) { 
    let product = products [index];
    let quantity = document.getElementById(index).value;
    // add quantity to product object
    product.quantity = quantity;
    cart.push(product);

let total=0;
 for (let index = 0; index < cart.length; index++) {
     let element = cart[index];
     let price = element.price * element.quantity;
     total= total+ price;
     
 }
 document.getElementById ("totalcart").innerText=`${total} K.D`

 }
 document.getElementById(`list`).innerHTML=`<li>${product.name}</li>`

function submit() {
    let email = document.getElementById("email").value;
    let addcookie = document.getElementById("Add cookie").value;
    window.open(`mailto:${email}?subject`)
}

 