const product = [
    {
        id: 0,
        image: 'images/ov1.webp',
        title: "Gear 5 T-shirt",
        price: 500
    },
    {
        id: 1,
        image: 'images/ov2.webp',
        title: "Jawan T-shirt",
        price: 500
    },
    {
        id: 2,
        image: 'images/ov3.webp',
        title: "Mickey Mouse T-shirt",
        price: 500
    },
    {
        id: 3,
        image: 'images/ov4.webp',
        title: "Flash T-shirt",
        price: 500
    },
    {
        id: 4,
        image: 'images/ov5.webp',
        title: "Moon Knight T-shirt",
        price: 500
    },
    {
        id: 5,
        image: 'images/hoodie.webp',
        title: "Hoddie",
        price: 850
    },
    {
        id: 6,
        image: 'images/ww2.webp',
        title: "Grey Jacket",
        price: 850
    },
    {
        id: 7,
        image: 'images/ww3.webp',
        title: "Orange Jacket",
        price: 850
    },
    {
        id: 8,
        image: 'images/ww4.webp',
        title: "Blue Jacket",
        price: 850
    },
    {
        id: 9,
        image: 'images/ww5.webp',
        title: "Brown Jacket",
        price: 850
    },
    {
        id: 10,
        image: 'images/trouser.webp',
        title: "Trouser",
        price: 950
    },
    {
        id: 11,
        image: 'images/trouser.webp',
        title: "Trouser",
        price: 950
    },
    {
        id: 12,
        image: 'images/tr3.webp',
        title: "Batman Joggers",
        price: 950
    },
    {
        id: 13,
        image: 'images/tr4.webp',
        title: "White Jogger",
        price: 950
    },
    {
        id: 14,
        image: 'images/tr5.webp',
        title: "Brown Jogger",
        price: 950
    },

];


cart = JSON.parse(localStorage.getItem('cart'));
let cartItemCount = cart.length;
updateCartItemCount();

function Addtocart(a) {

    cart.push(product[a]);
    alert("Item added to cart");
    console.log(product[a])
    cartItemCount++;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartItemCount();

}
function pass() {
    console.log(cart)
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = "cart.html";

}

function updateCartItemCount() {
    console.log(cart);
    const cartItemCountElement = document.getElementById('cart-item-count');
    cartItemCountElement.textContent = cartItemCount.toString();
}

