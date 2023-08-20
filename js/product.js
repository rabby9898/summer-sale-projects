document.getElementById("apply-btn").addEventListener("click", function () {
  const inputElement = document.getElementById("input-coupon");
  const inputValue = inputElement.value;
  if (inputValue === "SELL20") {
    const totalPrice = productPriceElement("total-price");

    const discountPrice = totalPrice - totalPrice * 0.2;
    const finalDiscount = discountPrice.toFixed(2);

    const discountAmountElement = document.getElementById("discount");
    const discountAmount = totalPrice - finalDiscount;
    const discountAmountFixed = discountAmount.toFixed(2);
    discountAmountElement.innerText = discountAmountFixed;

    const total = document.getElementById("total");
    total.innerText = finalDiscount;
  } else {
    alert("Invalid Coupon Code!");
  }
});

// product button 1-6
function productBtn() {
  const name = productNameElement("product-name");
  const price = productPriceElement("product-price");

  showProductName("name-area", name);
  totalPriceCalculate("total-price", price);
}

function productBtn2() {
  const name = productNameElement("product-name-2");
  const price = productPriceElement("product-price-2");

  showProductName("name-area", name);
  totalPriceCalculate("total-price", price);
}

function productBtn3() {
  const name = productNameElement("product-name-3");
  const price = productPriceElement("product-price-3");

  showProductName("name-area", name);
  totalPriceCalculate("total-price", price);
}

function productBtn4() {
  const name = productNameElement("product-name-4");
  const price = productPriceElement("product-price-4");

  showProductName("name-area", name);
  totalPriceCalculate("total-price", price);
}
function productBtn5() {
  const name = productNameElement("product-name-5");
  const price = productPriceElement("product-price-5");

  showProductName("name-area", name);
  totalPriceCalculate("total-price", price);
}
function productBtn6() {
  const name = productNameElement("product-name-6");
  const price = productPriceElement("product-price-6");

  showProductName("name-area", name);
  totalPriceCalculate("total-price", price);
}

// go home
function goHomeElement() {
  window.location.href = "index.html";
}
