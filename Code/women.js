
const product = [
    {
        id: 0,
        image: 'images/girls new.webp',
        title: "Demon Slayer T-shirt",
        price: 500
    },
    {
        id: 1,
        image: 'images/wmo2.webp',
        title: "Tom & jerry T-shirt",
        price: 500
    },
    {
        id: 2,
        image: 'images/wmo3.webp',
        title: "Taylor swift T-shirt",
        price: 500
    },
    {
        id: 3,
        image: 'images/wmo4.webp',
        title: "BTS T-shirt",
        price: 500
    },
    {
        id: 4,
        image: 'images/wmo5.webp',
        title: "Minnie mouse T-shirt",
        price: 500
    },
    {
        id: 5,
        image: 'images/hoodie.webp',
        title: "Hoddie",
        price: 900
    },
    {
        id: 6,
        image: 'images/www2.webp',
        title: "BTS Hoddie",
        price: 900
    },
    {
        id: 7,
        image: 'images/www3.webp',
        title: "Green Zipper Jacket",
        price: 900
    },
    {
        id: 8,
        image: 'images/www4.webp',
        title: "Black Zipper Jacket",
        price: 900
    },
    {
        id: 9,
        image: 'images/www5.webp',
        title: "Pink Zipper Jacket",
        price: 900
    },
    {
        id: 10,
        image: 'images/womtrouser.webp',
        title: "Black Jogger",
        price: 600
    },
    {
        id: 11,
        image: 'images/wj2.webp',
        title: "Black Jogger",
        price: 600
    },
    {
        id: 12,
        image: 'images/wj3.webp',
        title: "Green Joggers",
        price: 600
    },
    {
        id: 13,
        image: 'images/wj4.webp',
        title: "Light green Jogger",
        price: 600
    },
    {
        id: 14,
        image: 'images/wj5.webp',
        title: "Pink Jogger",
        price: 600
    },

];


cart = JSON.parse(localStorage.getItem('cart'));
let cartItemCount =cart.length;
updateCartItemCount()

function Addtocart(a) {
    cart.push(product[a]);
    alert("Item added to cart");
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
    const cartItemCountElement = document.getElementById('cart-item-count');
    cartItemCountElement.textContent = cartItemCount.toString();
}