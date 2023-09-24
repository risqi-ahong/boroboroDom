// document.addEventListener("DOMContentLoaded", () => {
//     const passwordInput = document.querySelector("#password");
//     const toogleButton = document.querySelector("#toogle-password");
//     const eye = document.querySelector(".eye");
//     const eyeOff = document.querySelector(".eye-off");

//     toogleButton.addEventListener("click", () => {
//       if (passwordInput.type === "password") {
//         passwordInput.type = "text";
//         eye.style.display = "none";
//         eyeOff.style.display = "block";
//       } else {
//         passwordInput.type = "password";
//         eye.style.display = "block";
//         eyeOff.style.display = "none";
//       }
//     });
//     formLogin.addEventListener("submit", (e) => {
//       e.preventDefault();
//       console.log("password yg di input", passwordInput.value);
//     });
//   });

document.addEventListener("DOMContentLoaded", () => {
  const password1 = document.querySelector("#password1");
  const password2 = document.querySelector("#password2");
  const toogleButton1 = document.querySelector("#toogle-password1");
  const toogleButton2 = document.querySelector("#toogle-password2");
  const eye1 = document.querySelector(".eye1");
  const eyeOff1 = document.querySelector(".eye-off1");
  const eye2 = document.querySelector(".eye2");
  const eyeOff2 = document.querySelector(".eye-off2");

  toogleButton1.addEventListener("click", () => {
    if (password1.type === "password") {
      password1.type = "text";
      eye1.style.display = "none";
      eyeOff1.style.display = "block";
    } else {
      password1.type = "password";
      eye1.style.display = "block";
      eyeOff1.style.display = "none";
    }
  });

  toogleButton2.addEventListener("click", () => {
      if (password2.type === "password") {
        password2.type = "text";
      eye2.style.display = "none";
      eyeOff2.style.display = "block";
    }
     else {
        password2.type = "password";
        eye2.style.display = "block";
        eyeOff2.style.display = "none";
    }
  });

});
