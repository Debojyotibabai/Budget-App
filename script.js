//inputs
const budgetValue = document.querySelector("#budget-value");
const expenceItem = document.querySelector("#expence-item");
const expenceValue = document.querySelector("#expence-value");
//buttons
const budgetButton = document.querySelector("#budget-button");
const expenceButton = document.querySelector("#expence-button");
//total values
const totalBudget = document.querySelector("#total-budget");
const totalExpence = document.querySelector("#total-expence");
const totalBalance = document.querySelector("#total-balance");
//expence list
const expenceList = document.querySelector("#expence-list");
//budget
budgetButton.addEventListener("click", budgetCalculation);
function budgetCalculation() {
  if (budgetValue.value === "") {
    budgetValue.setAttribute("placeholder", "Please add an amount");
  } else {
    var totalBudgetValue = totalBudget.textContent;
    totalBudget.textContent =
      Number(budgetValue.value) + Number(totalBudgetValue);
    budgetValue.value = "";
    budgetValue.setAttribute("placeholder", "Amount");
    totalBalance.textContent =
      Number(totalBudget.textContent) - Number(totalExpence.textContent);
  }
}
//expence
expenceButton.addEventListener("click", expenceCalculation);
function expenceCalculation() {
  if (expenceItem.value === "") {
    expenceItem.setAttribute("placeholder", "Please add an item");
  } else if (expenceValue.value === "") {
    expenceValue.setAttribute("placeholder", "Please add an amount");
  } else {
    var totalExpenceValue = totalExpence.textContent;
    totalExpence.textContent =
      Number(expenceValue.value) + Number(totalExpenceValue);
    var expenceListItem = document.createElement("li");
    expenceListItem.innerHTML = `${expenceItem.value}<span>₹ -${expenceValue.value}</span>`;
    expenceListItem.classList.add("expence-list-item");
    expenceList.appendChild(expenceListItem);
    expenceItem.setAttribute("placeholder", "Item");
    expenceValue.setAttribute("placeholder", "Amount");
    totalBalance.textContent =
      Number(totalBalance.textContent) - Number(expenceValue.value);
    expenceItem.value = "";
    expenceValue.value = "";
  }
}
