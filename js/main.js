const calcBtn = document.getElementById("calculate");
const inputs = document.querySelectorAll(".content__input");

calcBtn.addEventListener("click", calculatePrice);

function calculatePrice() {
  let lineLength = inputs[0].value;
  let buildLength = inputs[1].value;
  let weldLoss = inputs[2].value;
  let attenuationCoef = inputs[3].value;
  let plugLoss = inputs[4].value;
  let plugCount = inputs[5].value;
  let totalLoss =
    lineLength * attenuationCoef +
    (lineLength / buildLength + 1) * weldLoss +
    plugCount * plugLoss;
  displayPrice(totalLoss.toFixed(3));
}

function displayPrice(totalLoss) {
  if (isNaN(totalLoss)) {
    totalLoss = "неверное значение";
    document.getElementById("price").style.color = "rgb(149, 31, 31)";
    document.getElementById("price").innerHTML = totalLoss;
  } else {
    document.getElementById("price").style.color = "#26aa26";
    document.getElementById("price").innerHTML = totalLoss;
  }
}
