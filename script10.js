
var buyNowButton = document.getElementById('buy-now-button');

var paymentOptionsDiv = document.getElementById('payment-options');
var creditCardButton = document.getElementById('credit-card-button');
var googlePayButton = document.getElementById('google-pay-button');
var creditCardForm = document.getElementById('credit-card-form');
var googlePayQRCode = document.getElementById('google-pay-qrcode');

buyNowButton.addEventListener('click', function() {
	// Show the payment options
  window.location.href="Reg.html";
  window.location.href="shopping.html";
	paymentOptionsDiv.style.display = 'block';
});

creditCardButton.addEventListener('click', function() {
	// Show the credit card payment form and hide the Google Pay QR code
	creditCardForm.style.display = 'block';
	googlePayQRCode.style.display = 'none';
});

googlePayButton.addEventListener('click', function() {
	// Show the Google Pay QR code and hide the credit card payment form
	googlePayQRCode.style.display = 'block';
	creditCardForm.style.display = 'none';
});
const applyCouponBtn = document.getElementById("apply-coupon-btn");
const couponSection = document.getElementById("coupon-section");

applyCouponBtn.addEventListener("click", function() {
  const couponCode = prompt("Enter coupon code:"); // prompt the user to enter coupon code
  
  // validate coupon code
  if (couponCode === "COUPON123") {
    couponSection.innerHTML = "Coupon code applied: COUPON123"; 
    couponSection.style.display = "block"; 
  } else {
    alert("Invalid coupon code"); 
  }
});
