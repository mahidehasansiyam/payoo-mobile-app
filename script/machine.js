// get input value 
function getInputValue(id) {
  let input = document.getElementById(id);
  let inputValue = input.value;
  console.log(id, inputValue);
  return Number(inputValue);
}

// get curent balance 
function currentBalance() {
  let currentBalance = document.getElementById('currentBalance');
  let currentBalanceValue = parseInt(currentBalance.innerText);
  console.log(currentBalanceValue);
  return currentBalanceValue;
}
 
// toggle buton 
function showOnly(id) {
  const addMoney = document.getElementById('addMoney');
  const cashOut = document.getElementById('cashOut');
  const transection = document.getElementById('transection');
  
  //  hide all section 
  addMoney.classList.add('hidden');
  cashOut.classList.add('hidden');
  transection.classList.add('hidden');
  
  // show one section 
  document.getElementById(id).classList.remove('hidden');
}