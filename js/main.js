// Объявление констант и переменных
const calcVolsBtn = document.getElementById("calculate-vols"),
  calcGen5Btn = document.getElementById("calculate-gen5"),
  vols = document.getElementById("vols-btn"),
  gen5 = document.getElementById("gen5-btn"),
  inputsVols = document.querySelectorAll(".content__input-vols"),
  inputsGen5 = document.querySelectorAll(".content__input-gen5"),
  menu = document.getElementById("menu"),
  volsTitle = document.getElementById("content__title-vols"),
  gen5Title = document.getElementById("content__title-gen5"),
  volsForm = document.getElementById("vols-form"),
  gen5Form = document.getElementById("gen5-form"),
  heightControl = document.getElementById("content-height"),
  volsLossOutput = document.getElementById("vols-loss-out"),
  gen5BudgetOutput = document.getElementById("gen5-power-out"),
  volsLossText = document.getElementById("vols-loss-text"),
  gen5BudgetText = document.getElementById("gen5-power-text"),
  connectionBg = document.getElementById("bg-block");

let lastKnownPos = 0;

// ~~~~~~~~~~~~
// Мониторинг событий на кпопке, при клике вызывается определенная функция
calcVolsBtn.addEventListener("click", calculateVolsLoss);
calcGen5Btn.addEventListener("click", calculateGen5Budget);
vols.addEventListener("click", displayVols);
gen5.addEventListener("click", displayGen5);

// ~~~~~~~~~~~~
// Украшалка, чтобы меню исчезало и появлялось при скролле
window.addEventListener("scroll", () => {
  if (window.scrollY > lastKnownPos) {
    menu.style.transform = "translateY(-45px)";
    menu.style.transition = "transform .133s ease-in-out";
    lastKnownPos = window.scrollY;
  } else {
    menu.style.transform = "translateX(0)";
    lastKnownPos = window.scrollY;
  }
});

// ~~~~~~~~~~~~
// Функции, выполняющиеся при смене типа калькулятора

function displayVols() {
  for (let item of [
    gen5Title,
    gen5Form,
    calcGen5Btn,
    gen5BudgetOutput,
    gen5BudgetText,
    connectionBg,
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
  for (let item of [gen5Form, calcGen5Btn, gen5BudgetText, connectionBg]) {
    item.style.display = "block";
  }
  for (let item of [gen5BudgetOutput, gen5Title]) {
    item.style.display = "inline-block";
  }
  heightControl.style.height = "1130px";
}

// ~~~~~~~~~~~~
// ВЫЧИСЛЕНИЯ

// Рассчёт для ВОЛС
function calculateVolsLoss() {
  let totalLoss =
    inputsVols[0].value * inputsVols[3].value +
    (inputsVols[0].value / inputsVols[1].value + 1) * inputsVols[2].value +
    inputsVols[5].value * inputsVols[4].value;
  displayOutput(totalLoss.toFixed(3), volsLossOutput);
}

// Рассчёт для 5G
function calculateGen5Budget() {
  let actx = 0,
    grx = 0,
    totalBudget =
      inputsGen5[1].value -
      inputsGen5[0].value +
      parseInt(inputsGen5[2].value) -
      actx +
      grx -
      inputsGen5[3].value -
      inputsGen5[4].value -
      inputsGen5[5].value -
      inputsGen5[6].value -
      inputsGen5[7].value -
      inputsGen5[8].value -
      inputsGen5[9].value;
  displayOutput(totalBudget.toFixed(3), gen5BudgetOutput);
}

// ~~~~~~~~~~~~
// Выходные значения

function displayOutput(totalValue, totalText) {
  if (isNaN(totalValue)) {
    totalValue = "неверное значение";
    totalText.style.color = "rgb(149, 31, 31)";
    totalText.innerHTML = totalValue;
  } else if (totalValue < 0) {
    totalText.style.color = "rgb(149, 31, 31)";
    totalText.innerHTML = totalValue;
  } else {
    totalText.style.color = "#26aa26";
    totalText.innerHTML = totalValue;
  }
}
