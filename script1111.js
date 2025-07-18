function validateForm() {
    // Get the value of the selected radio button
    var selectedValue = document.querySelector('input[name="payment-type"]:checked').value;
    
    // Show the corresponding form block based on the selected radio button
    if (selectedValue === 'credit-card') {
      document.getElementById('credit-card-form').style.display = 'block';
    } else if (selectedValue === 'paypal') {
      document.getElementById('paypal-form').style.display = 'block';
    } else if (selectedValue === 'bitcoin') {
      document.getElementById('bitcoin-form').style.display = 'block';
    }
    
    // Prevent the form from submitting
    return false;
  }
  