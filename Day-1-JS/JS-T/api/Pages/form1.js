const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  alert("Login data saved");
});