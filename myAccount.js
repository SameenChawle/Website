var sidebarButtons = document.querySelectorAll(".sidebar");

sidebarButtons.forEach((button) => {
  button.addEventListener("click", function () {
    sidebarButtons.forEach((div) => div.classList.remove("sidebarActive"));

    this.classList.add("sidebarActive");
  });
});

var order = document.getElementById("showOrder");
var orderStyle = document.getElementById("zeroOrders");
var ordersStyle = document.getElementById("orders");

var address = document.getElementById("showAddress");
var addressStyle = document.getElementById("address");

var accDetails = document.getElementById("showAccDetails");
var accDetailsStyle = document.getElementById("accountDetails");

var changePass = document.getElementById("showPassword");
var changePassStyle = document.getElementById("changePass");

var wishlist = document.getElementById("showWishlist");
var wishlistStyle = document.getElementById("wishlist");

var logout = document.getElementById("showLogout");

window.onload = function () {
  order.click();
};

order.onclick = function () {
  addressStyle.style.display = "none";
  accDetailsStyle.style.display = "none";
  changePassStyle.style.display = "none";
  wishlistStyle.style.display = "none";

  if (ordersStyle.getElementsByClassName("order").length > 0) {
    ordersStyle.style.display = "flex";
  } else {
    orderStyle.style.display = "flex";
  }
};

address.onclick = function () {
  orderStyle.style.display = "none";
  addressStyle.style.display = "flex";
  accDetailsStyle.style.display = "none";
  changePassStyle.style.display = "none";
  ordersStyle.style.display = "none";
  wishlistStyle.style.display = "none";
};

accDetails.onclick = function () {
  orderStyle.style.display = "none";
  addressStyle.style.display = "none";
  accDetailsStyle.style.display = "flex";
  changePassStyle.style.display = "none";
  ordersStyle.style.display = "none";
  wishlistStyle.style.display = "none";
};

changePass.onclick = function () {
  orderStyle.style.display = "none";
  addressStyle.style.display = "none";
  accDetailsStyle.style.display = "none";
  changePassStyle.style.display = "flex";
  ordersStyle.style.display = "none";
  wishlistStyle.style.display = "none";
};

wishlist.onclick = function () {
  orderStyle.style.display = "none";
  addressStyle.style.display = "none";
  accDetailsStyle.style.display = "none";
  changePassStyle.style.display = "none";
  ordersStyle.style.display = "none";
  wishlistStyle.style.display = "flex";
};

logout.onclick = function () {
  orderStyle.style.display = "none";
  addressStyle.style.display = "none";
  accDetailsStyle.style.display = "none";
  changePassStyle.style.display = "none";
  ordersStyle.style.display = "none";
  wishlistStyle.style.display = "none";
};

const items = document.querySelectorAll(".wishlistItem");
items.forEach((item) => {
  const removeButton = item.querySelector(".removeItem");

  removeButton.onclick = function () {
    item.remove();
  };
});

function showProduct(productNumber){
  localStorage.setItem('SelectedProduct', productNumber);
  window.location.href='productDescription.html';
}

