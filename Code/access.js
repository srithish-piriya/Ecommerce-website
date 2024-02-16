const product = [
    {
        id: 0,
        image: 'images/cap.webp',
        title: "Man of Steel Cap",
        price: 500
    },
    {
        id: 1,
        image: 'images/cap2.webp',
        title: "Punisher Cap",
        price: 500
    },
    {
        id: 2,
        image: 'images/cap3.webp',
        title: "Super Solider Cap",
        price: 500
    },
    {
        id: 3,
        image: 'images/cap4.webp',
        title: "Weed-leaf Cap",
        price: 500
    },
    {
        id: 4,
        image: 'images/cap5.webp',
        title: "Wakanda Forever Cap",
        price: 500
    },
    {
        id: 5,
        image: 'images/lp.webp',
        title: "Green laptop Bag",
        price: 700
    },
    {
        id: 6,
        image: 'images/bag2.webp',
        title: "F.R.I.E.N.D.S Bag",
        price: 700
    },
    {
        id: 7,
        image: 'images/bag3.webp',
        title: "Superheroe Bag",
        price: 700
    },
    {
        id: 8,
        image: 'images/bag4.webp',
        title: "Brown Backpack",
        price: 700
    },
    {
        id: 9,
        image: 'images/bag5.webp',
        title: "Mickeymouse Bag",
        price: 700
    },
    {
        id: 10,
        image: 'images/audio.webp',
        title: "Grey sliders",
        price: 600
    },
    {
        id: 11,
        image: 'images/ff2.webp',
        title: "White Sneakers",
        price: 800
    },
    {
        id: 12,
        image: 'images/ff3.webp',
        title: "Black Foam Runner",
        price: 800
    },
    {
        id: 13,
        image: 'images/ff4.webp',
        title: "Black Sliders",
        price: 600
    },
    {
        id: 14,
        image: 'images/ff5.webp',
        title: "Superman sliders",
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
