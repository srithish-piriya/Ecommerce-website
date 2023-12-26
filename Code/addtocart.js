const product =[
    {
        id:0,
        image:'images/ov1.webp',
        title:"gear 5 T shirt",
        price:500
    },
    {
        id:1,
        image:'images/ov1.webp',
        title:"gear 5 T shirt",
        price:500
    },
    {
        id:2,
        image:'images/ov1.webp',
        title:"gear 5 T shirt",
        price:500
    },
    {
        id:3,
        image:'images/ov1.webp',
        title:"gear 5 T shirt",
        price:500
    },
    {
        id:4,
        image:'images/ov1.webp',
        title:"gear 5 T shirt",
        price:500
    },
    {
        id:5,
        image:'images/ov1.webp',
        title:"gear 5 T shirt",
        price:500
    },
];


var cart=[];


function Addtocart(a){
    
    cart.push(product[a]);
    alert("Item added to cart");

} 
let total=0;
function displaycart(){

    if (cart.length==0){
        document.getElementById('cartItem').innerHTML="your cart is Empty ";
    }
    else{
        for(let index=0;index<cart.length;index++){
            document.write(`<div class='box'>
            <div class = 'img-box same'>
                <img class='images' src =${cart[index].image}></img>
            </div>
            <div class='same'>
                 <h2>${cart[index].title}</h2>
            </div>
            <div class='same'>
                <h2>₹ ${cart[index].price}.00</h2> 
            </div>
            </div>`) 
            total=total+cart[index].price;
        }
        document.write(` <div class='box-main'>
        <div class = 'head'>
            <h1></h1>
        </div>
        <div class='head'>
             <h2>Total Amout</h2>
        </div>
        <div class='head'>
            <h2> ₹ ${total}.00</h2> 
        </div>
        </div>`)
    }
    document.write(`<button class='js-button' onclick="location.href=('payment.html')">Buy Now</button>`)

}




// const categories = [...new set(product.map((item)=>
//     {return item}))]
//     let i=0;
// document.getElementById('root').innerHTML =categories.map((item)=>{
//     var{image,title,price}=item;
//     return(
//         `<div class='box'>
//             <div class = 'img-box'>
//                 <img class='images' src =${image}></img>
//             </div>
//         <div class='bottom'>
//             <p>${title}</p>
//             <h2>₹ ${price}.00</h2> `+ 
//             "<button> onclick ='addtocart("+(i++)+")'>Add to cart </button>"+
//             `<div>
//             </div>` 
//     )
// })







// function displaycart(a){
//     let j=0;
//     if (cart.length==0){
//         document.getElementById('cartItem').innerHTML="your cart is Empty ";
    
//     }
//     else{
//         document.getElementById("cartItem").innerHTML=cart.map(items)=>{
//             var{image,title,price}= items;
//             return(
//                 `<div class ='cart-item'>
//                 <div class='row-img'>
//                     <img class='rowing' src=${image}>
//                 </div>
//                 <p style = 'font-sixe:12px;'>${title}</p>
//                 <h2 style='font-size : 15px;'>₹ ${price}.00</h2>`

//             );
//         }
//     }
// }

