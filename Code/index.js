var cart = [];
let cartItemCount = 0;
localStorage.setItem('cart', JSON.stringify(cart));


function pass() {
    window.location.href = "cart.html";

}