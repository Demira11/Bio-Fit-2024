const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
//  use this function to add stuff to local since we arent gonna use user accounts since the product amount is small no need to save to dbs ect. though Im wondering how they will keep track of orders. 
function addToLocalStorage(productId, quantity) {
  // Get the current cart from local storage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Add the new item to the cart
  cart.push({ productId, quantity });

  // Save the updated cart back to local storage
  localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
  //getting cart data from local
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  //adding each item in cart to the page
  for (let item of cart) {
    // add the logic to add items to page
  }
}

loadCartFromLocalStorage()