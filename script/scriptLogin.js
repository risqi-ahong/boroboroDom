document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.querySelector("#password");
  const toogleButton = document.querySelector("#toogle-password");
  const eye = document.querySelector(".eye");
  const eyeOff = document.querySelector(".eye-off");

  toogleButton.addEventListener("click", () => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eye.style.display = "none";
      eyeOff.style.display = "block";
    } else {
      passwordInput.type = "password";
      eye.style.display = "block";
      eyeOff.style.display = "none";
    }
  });
  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("password yg di input", passwordInput.value);
  });
});
