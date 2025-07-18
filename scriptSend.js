const section = document.querySelector("section"),
        overlay = document.querySelector(".overlay"),
        showBtn = document.querySelector(".show-modal"),
        closeBtn = document.querySelector(".close-btn");
      showBtn.addEventListener("click", () => section.classList.add("active"));
      overlay.addEventListener("click", () =>
        section.classList.remove("active")
        
      );
      closeBtn.addEventListener("click", () =>
        section.classList.remove("active")
      );

      
      const coupon = document.querySelector('.coupon');
      const couponFooter = document.querySelector('.coupon-footer');
      
      // Zoom in the coupon when the page loads
      coupon.style.animation = 'zoomIn 1s forwards';
      
      // Show the footer after a delay
      setTimeout(() => {
        couponFooter.classList.add('show');
      }, 2000);
      