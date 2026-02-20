document.getElementById('cashOut-btn').addEventListener('click', () => {
  const agentNumber = getInputValue('agentNumber');
  if (agentNumber != '01234567890') {
    alert('Please enter a valid agent number.');
    return;
  }
  const cashOutPin = getInputValue('cashoutPin');
  if (cashOutPin != 1234) {
    alert('Incorrect PIN. Please try again.');
    return;
  }
  const cashOutAmount = getInputValue('cashOutAmount');
  const currentBalanceValue = currentBalance();
  if (cashOutAmount > currentBalanceValue) {
    alert('Insufficient balance for this cash out amount.');
    return;
  }
  const newBalance = currentBalanceValue - cashOutAmount;
  document.getElementById('currentBalance').innerText = newBalance;

  // Transection history update
  let transection = document.getElementById('transection');
  let newTransection = document.createElement('div');
  newTransection.innerHTML = `<div
  id="transaction-list"
  class="bg-white w-11/12 mx-auto p-4 rounded-3xl mb-4"
>Cash Out Amount: ${cashOutAmount} Taka</div>`;
  transection.appendChild(newTransection);
});



