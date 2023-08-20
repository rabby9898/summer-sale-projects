function productNameElement(inputId) {
  const element = document.getElementById(inputId);
  const elementText = element.innerText;
  return elementText;
}
function productPriceElement(inputId) {
  const element = document.getElementById(inputId);
  const elementValueString = element.innerText;
  const elementValue = parseFloat(elementValueString);
  return elementValue;
}

function showProductName(areaId, name) {
  const areaElement = document.getElementById(areaId);
  const count = areaElement.childElementCount;

  const p = document.createElement("p");
  p.innerText = `${count + 1}. ${name}`;

  areaElement.appendChild(p);
}
let total = 0;
function totalPriceCalculate(priceId, price) {
  const totalPriceElement = document.getElementById(priceId);
  total = total + price;
  const totalPrice = total.toFixed(2);
  totalPriceElement.innerText = totalPrice;

  // apply button
  const purchaseBtn = document.getElementById("purchase-btn");
  if (totalPrice > 0) {
    purchaseBtn.removeAttribute("disabled");
  }

  const totalELement = document.getElementById("total");
  totalELement.innerText = totalPrice;

  const applyBtnElement = document.getElementById("apply-btn");

  if (totalPrice > 200) {
    applyBtnElement.removeAttribute("disabled");
  } else {
    applyBtnElement.setAttribute("disabled", true);
  }
}

// apply button confirmation
// document
//   .getElementById("input-coupon")
//   .addEventListener("keyup", function (event) {
//     const elementValue = event.target.value;
//     console.log(elementValue);
//     const applyBtnElement = document.getElementById("apply-btn");
//     if (elementValue === "SELL20") {

//   });

document.getElementById("apply-btn").addEventListener("click", function () {
  const totalPrice = productPriceElement("total-price");

  const discountPrice = totalPrice - totalPrice * 0.2;
  const finalDiscount = discountPrice.toFixed(2);

  const discountAmountElement = document.getElementById("discount");
  const discountAmount = totalPrice - finalDiscount;
  const discountAmountFixed = discountAmount.toFixed(2);
  discountAmountElement.innerText = discountAmountFixed;

  const total = document.getElementById("total");
  total.innerText = finalDiscount;
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
