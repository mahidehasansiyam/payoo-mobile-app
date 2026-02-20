document.getElementById('logIn-btn').addEventListener('click', () => {
  const mobileNumber =  getInputValue('input-mobile-number');
  const pin = getInputValue('input-pin');
  if (mobileNumber === 01234567890 && pin === 1234) {
    window.location.assign('./home.html');
  }
  else {
    alert("Invalid Information");
    return;
  }

});