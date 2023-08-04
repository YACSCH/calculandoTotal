let precio = document.querySelector(".precio").innerText
let cantidad = document.querySelector("#txtcantidad")
let color = document.querySelector("#txtcolor")
let displayColor = document.querySelector(".card-result-circle")
let displayPrice = document.querySelector(".card-result-total")
let displayAmount = document.querySelector(".card-result-amount")


function TotalCalculate() {
    displayColor.style.backgroundColor = color.value;
    displayPrice.innerText = "$" + precio * cantidad.value
    displayAmount.innerText = cantidad.value
}