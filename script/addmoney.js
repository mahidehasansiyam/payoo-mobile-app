document.getElementById('addMoneyBtn').addEventListener('click', () => {
  const bankName = getInputValue('bankname');
  if (bankName === 'Pick a Bank') {
    alert('Please select a bank before adding money.');
    return;
  }
  const bankAccountNo = getInputValue('bankAcNo');
  if (bankAccountNo != '01234567890') {
    alert('Please enter a valid bank account number.');
    return; 
  }
  const addMoneyPin = getInputValue('add-money-pin');
  if (addMoneyPin != 1234) {
    alert('Incorrect PIN. Please try again.');
    return;
  }
  const AddmoneyAmount = parseInt(getInputValue('add-money-amount'));
  const currentBalanceValue = currentBalance();
  let newBalance = currentBalanceValue + AddmoneyAmount;
  document.getElementById('currentBalance').innerText = newBalance;

  // Transection history update
   let transection = document.getElementById('transection');
   let newTransection = document.createElement('div');
   newTransection.innerHTML = `<div
  id="transaction-list"
  class="bg-white w-11/12 mx-auto p-4 rounded-3xl mb-4"
>Add Money Amount: ${AddmoneyAmount} Taka</div>`;
   transection.appendChild(newTransection);
});

