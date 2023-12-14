function togglePasswordVisibility(inputId) {
    var passwordInput = document.getElementById(inputId);
    var passwordToggle = document.querySelector(".password-toggle");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordToggle.textContent = "Приховати";
    } else {
      passwordInput.type = "password";
      passwordToggle.textContent = "Показати";
    }
  }

  function registerUser() {
    var agreementCheckbox = document.getElementById("agreementCheckbox");

    if (!agreementCheckbox.checked) {
      alert("Please accept the terms and conditions.");
      return false;
    }
    alert("User Registered!");
  }