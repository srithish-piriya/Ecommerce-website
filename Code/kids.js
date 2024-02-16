const product = [
    {
        id: 0,
        image: 'images/2-6.webp',
        title: "Ironman T-shirtt",
        price: 900
    },
    {
        id: 1,
        image: 'images/2-61.webp',
        title: "Cars T-shirt",
        price: 900
    },
    {
        id: 2,
        image: 'images/2-62.webp',
        title: "Lilo & Stitch T-shirt",
        price: 900
    },
    {
        id: 3,
        image: 'images/2-63.webp',
        title: "Minions T-shirt",
        price: 900
    },
    {
        id: 4,
        image: 'images/2-64.webp',
        title: "Spider-man shorts",
        price: 900
    },
    {
        id: 5,
        image: 'images/6-10.webp',
        title: "Batman T -shirt",
        price: 600
    },
    {
        id: 6,
        image: 'images/6-102.webp',
        title: "Spiderman T-shirt",
        price: 600
    },
    {
        id: 7,
        image: 'images/6-103.webp',
        title: "Marvel T-shirt",
        price: 600
    },
    {
        id: 8,
        image: 'images/6-104.webp',
        title: "short 95",
        price: 600
    },
    {
        id: 9,
        image: 'images/6-105.webp',
        title: "Batman T-shirt",
        price: 600
    },
    {
        id: 10,
        image: 'images/10-14.webp',
        title: "Ironman T-shirt",
        price: 600
    },
    {
        id: 11,
        image: 'images/10-142.webp',
        title: "Batman T-shirt",
        price: 600
    },
    {
        id: 12,
        image: 'images/10-143.webp',
        title: "Superman T-shirt",
        price: 600
    },
    {
        id: 13,
        image: 'images/10-144.webp',
        title: "Superhero T-shirt",
        price: 600
    },
    {
        id: 14,
        image: 'images/10-145.webp',
        title: "Donald duck T-shirt",
        price: 600
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
