const calcVolsBtn = document.getElementById("calculate-vols"),
  calcGen5Btn = document.getElementById("calculate-gen5"),
  vols = document.getElementById("vols-btn"),
  gen5 = document.getElementById("gen5-btn"),
  inputs = document.querySelectorAll(".content__input"),
  menu = document.getElementById("menu"),
  volsTitle = document.getElementById("content__title-vols"),
  gen5Title = document.getElementById("content__title-gen5"),
  volsForm = document.getElementById("vols-form"),
  gen5Form = document.getElementById("gen5-form"),
  heightControl = document.getElementById("content-height"),
  volsLossOutput = document.getElementById("vols-loss-out"),
  gen5BudgetOutput = document.getElementById("gen5-power-out"),
  volsLossText = document.getElementById("vols-loss-text"),
  gen5BudgetText = document.getElementById("gen5-power-text");

let lastKnownPos = 0;

calcVolsBtn.addEventListener("click", calculateVolsLoss);
calcGen5Btn.addEventListener("click", calculateGen5Budget);
vols.addEventListener("click", displayVols);
gen5.addEventListener("click", displayGen5);
window.addEventListener("scroll", () => {
  if (window.scrollY > lastKnownPos) {
    menu.style.transform = "translate(0, -45px)";
    menu.style.transition = "transform .133s ease-in-out";
    lastKnownPos = window.scrollY;
  } else {
    menu.style.transform = "translateX(0)";
    lastKnownPos = window.scrollY;
  }
});

function displayVols() {
  for (let item of [
    gen5Title,
    gen5Form,
    calcGen5Btn,
    gen5BudgetOutput,
    gen5BudgetText,
  ]) {
    item.style.display = "none";
  }
  for (let item of [volsForm, calcVolsBtn, volsLossText]) {
    item.style.display = "block";
  }
  for (let item of [volsLossOutput, volsTitle]) {
    item.style.display = "inline-block";
  }
  heightControl.style.height = "768px";
}

function displayGen5() {
  for (let item of [
    volsTitle,
    volsForm,
    calcVolsBtn,
    volsLossOutput,
    volsLossText,
  ]) {
    item.style.display = "none";
  }
  for (let item of [gen5Form, calcGen5Btn, gen5BudgetText]) {
    item.style.display = "block";
  }
  for (let item of [gen5BudgetOutput, gen5Title]) {
    item.style.display = "inline-block";
  }
  heightControl.style.height = "1130px";
}

function calculateVolsLoss() {
  let totalLoss =
    inputs[0].value * inputs[3].value +
    (inputs[0].value / inputs[1].value + 1) * inputs[2].value +
    inputs[5].value * inputs[4].value;
  displayLoss(totalLoss.toFixed(3));
}

function calculateGen5Budget() {
  console.log("hi");
}

function displayLoss(totalLoss) {
  if (isNaN(totalLoss)) {
    totalLoss = "неверное значение";
    volsLossOutput.style.color = "rgb(149, 31, 31)";
    volsLossOutput.innerHTML = totalLoss;
  } else {
    volsLossOutput.style.color = "#26aa26";
    volsLossOutput.innerHTML = totalLoss;
  }
}
