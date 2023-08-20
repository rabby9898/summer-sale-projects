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
