const applyCouponBtn = document.getElementById("apply-coupon-btn");
const couponModal = document.getElementById("coupon-modal");
const couponCode = document.getElementById("coupon-code");

applyCouponBtn.addEventListener("click", function() {
  couponCode.innerText = "MYCOUPON"; // update coupon code
  couponModal.style.display = "block"; // show the coupon modal
});

// When the user clicks on <span> (x), close the modal
const closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
  couponModal.style.display = "none"; // hide the coupon modal
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == couponModal) {
    couponModal.style.display = "none"; // hide the coupon modal
  }
}
