const quantitySelections = document.querySelectorAll(".quantitySelection");

quantitySelections.forEach((selection) => {
  const counter = selection.querySelector(".quantity");
  const decreaseBtn = selection.querySelector(".minus");
  const increaseBtn = selection.querySelector(".plus");

  let count = 0;

  increaseBtn.onclick = function () {
    count++;
    counter.textContent = count;
    updateCheckout();
  };

  decreaseBtn.onclick = function () {
    if (count > 1) {
      count--;
      counter.textContent = count;
      updateCheckout();
    }
  };
});

function updateCheckout(){

    var subtotal = document.getElementById("subtotal");
    var total = document.getElementById("total");
    var shipping = document.getElementById("shipping");
    const tax = document.getElementById("tax").textContent.replace('AED', '');

    let shippingCost = parseFloat(shipping.textContent.replace('AED', '').trim());

    const items = document.querySelectorAll(".container");

    let sTotal = 0;

    items.forEach((item) => {
    const quantity = parseInt(item.querySelector(".quantity").textContent); 
    const price = parseFloat(item.querySelector(".productPrice").textContent.replace('AED', ''));
    

    sTotal += quantity * price;
    
    });

    subtotal.textContent =  "AED " + sTotal.toFixed(2);
    total.textContent = "AED " + (sTotal + shippingCost + parseFloat(tax)).toFixed(2);


}

const items = document.querySelectorAll(".item");
items.forEach((item) => {
    const removeButton = item.querySelector(".removeFromCart");

    removeButton.onclick = function(){
        item.remove();
        updateCheckout();
    }
})
