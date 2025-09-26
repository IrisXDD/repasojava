document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("errorMessage");

  const validUser = "Iris";
  const validPass = "12345";

  if (username === validUser && password === validPass) {
    window.location.href = "bienvenida.html";
  } else {
    errorMessage.textContent = "Usuario o contraseña incorrectos.";
  }
});