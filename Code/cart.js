let total = 0;
function displaycart() {
    var rcart = JSON.parse(localStorage.getItem('cart'));
    if (rcart.length == 0) {
        document.getElementById('cartItem').innerHTML = "your cart is Empty ";
    }
    else {
        for (let index = 0; index < rcart.length; index++) {
            document.write(`<div class='container' ><div class='box' data-price="${parseInt(rcart[index].price)}">
        <div class = 'img-box same'>
            <img class='images' src =${rcart[index].image}></img>
        </div>
        <div class='same'>
             <h2>${rcart[index].title}</h2>
        </div>
        <div class='same'  >
            <h2 id='price' id='${index}'>₹ ${rcart[index].price}</h2> 
        </div>
        <a onclick='deleteitem(this)'><img class="del" src='images/delete.jpg'></a>
        </div>`)
            total = total + rcart[index].price;
        }
        document.write(` <div class='box-main'>
    <div class = 'head'>
        <h1></h1>
    </div>
    <div class='head'>
         <h2>Total Amount</h2>
    </div>
    <div class='head'>
        <h2 id ='total-price'> ₹ ${total}</h2> 
    </div>
    </div>`)
    }
    document.write(`<br><br><button class='js-button' onclick="location.href=('payment.html')">Proceed to pay</button><br><br><br><br>
     <div id="six">
    <img src="images/Black & White Minimalist Business Logo.png" style="height: 200px;width: 200px;">
    <br>

    <div id="footer">
        <div class="six1">
            <h3 style="color:aqua">Customer Services</h2>
                <br>
                <a href="support.html">Contact Us</a><br><br>
                <a href="">Track Order</a><br><br>
                <a href="">Return Order</a><br><br>
                <a href="">Cancel order</a>
        </div>
        <div class="six1">
            <h3 style="color:aqua">Company</h2>
                <br>
                <a href="about.html">About Us</a><br><br>
                <a href="">We are Hiring</a><br><br>
                <a href="tc.html">Terms & Conditions</a><br><br>
                <a href="priv.html">Privacy Policy</a><br><br>
                <a href="blog.html">Blog</a>
        </div>
        <div class="six1">
            <h3 style="color:aqua">Connect With Us</h2>
                <br>
                <a href=""><img src="images/facebook.svg"></a> Facebook<br><br>
                <a href=""><img src="images/instagram.svg"></a> Instagram<br><br>
                <a href=""><img src="images/twitter.svg"></a> Twitter<br><br>

        </div>
        <div class="six1">
            <h3 style="color:aqua">Keep Up to Date</h2>
                <br>
                <form action="">
                    <input style="height: 30px;" type="email" placeholder="Enter email"><input style="height: 30px;"
                        type="submit" value="Subscribe">
                </form>
                <br><br>
                <a href=""><img style="height: 50px;width: 150px;" src="images/downloadApple.svg"></a><br>
                <a href=""><img style="height: 50px;width: 150px;" src="images/downloadGoogle.svg"></a>
        </div>


    </div>

</div>`)

}
function deleteitem(item) {
    var cartItem = item.parentNode;
    //var price = document.getElementById('price')
   //var itemPrice = parseFloat(price.innerText.replace('₹', ''));
    var itemPrice = cartItem.getAttribute('data-price');
    console.log(itemPrice);
    cartItem.parentNode.removeChild(cartItem);
    updateTotalPrice(-itemPrice);
    removeFromCart();
}


function updateTotalPrice(change) {
    var totalPriceElement = document.getElementById('total-price');
    var currentTotal = parseFloat(totalPriceElement.innerText.replace('₹', ''));
    console.log(currentTotal)
    var newTotal = currentTotal + change;
    totalPriceElement.innerText = '₹' + newTotal.toFixed(2);
}


console.log()


cartItemCount = JSON.parse(localStorage.getItem('cart')).length;

function updateCartItemCount() {
    const cartItemCountElement = document.getElementById('cart-item-count');
    cartItemCountElement.textContent = cartItemCount.toString();
}


function removeFromCart() {
    if (cartItemCount > 0) {
        cartItemCount--;
        updateCartItemCount();
    }
}
displaycart();
updateCartItemCount();