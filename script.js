document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('cars-table');
    const modal = document.getElementById('details-modal');
    const closeButton = document.getElementsByClassName('close')[0];
    const carImage = document.getElementById('car-image');
    const carDetails = document.getElementById('car-details');
    const carPrice = document.getElementById('car-price');

    table.addEventListener('click', function(event) {
        if (event.target.tagName === 'IMG') {
            const imageSrc = event.target.getAttribute('src');
            const carType = event.target.parentNode.parentNode.childNodes[0].innerText;
            const carManufactureDate = event.target.parentNode.parentNode.childNodes[1].innerText;
            carImage.setAttribute('src', imageSrc);
            carDetails.innerText = `نوع السيارة: ${carType}\n  ${carManufactureDate}`;
            

            modal.style.display = 'block';
        }
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {

    const followCheckbox = document.getElementById('follow-checkbox');
    const requestForm = document.getElementById('car-request-form');
    const captchaContainer = document.getElementById('captcha-container');

    followCheckbox.addEventListener('change', function() {
        if (followCheckbox.checked) {
            requestForm.style.display = 'block';
         
        }
    });

    const carRequestForm = document.getElementById('car-request-form');
    carRequestForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const fullName = document.getElementById('full-name').value;
        const nationalID = document.getElementById('national-id').value;
        const birthDate = document.getElementById('birth-date').value;
        const mobileNumber = document.getElementById('mobile-number').value;
        const email = document.getElementById('email').value;
        const duration = document.getElementById('duration').value;
        const finalValue = calculateFinalValue(duration);
        alert(`القيمة النهائية: ${finalValue}`);
    });
});
function calculateFinalValue(duration) {
    return duration * 150000; 
}
function generateCaptcha() {
    var captcha = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 6; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return captcha;
  }
  function displayCaptcha() {
    var captchaElement = document.getElementById("captcha");
    captchaElement.textContent = generateCaptcha();
  }
  function checkCaptcha() {
    var userInput = document.getElementById("userInput").value;
    var captcha = document.getElementById("captcha").textContent;
  
    if (userInput === captcha) {
      alert("CAPTCHA code is correct!");
    } else {
      alert("CAPTCHA code is incorrect. Please try again.");
    }
  }
  function refreshCaptcha() {
    displayCaptcha();
    document.getElementById("userInput").value = ""; 
  }
  window.onload = function() {
    displayCaptcha();
  };