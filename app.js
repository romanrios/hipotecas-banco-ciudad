const usuarios = [
  {
    usuario: "daniel_admin",
    clave: "1234",
    rol: "admin"
  },
  {
    usuario: "daniel",
    clave: "1234",
    rol: "escribano"
  }
];

function login() {

  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;

  const encontrado = usuarios.find(u =>
    u.usuario === usuario && u.clave === clave
  );

  if (!encontrado) {
    alert("Usuario o clave incorrectos");
    return;
  }

  document.getElementById("login-section").classList.add("hidden");

  if (encontrado.rol === "admin") {
    document.getElementById("admin-panel").classList.remove("hidden");
  }

  if (encontrado.rol === "escribano") {
    document.getElementById("escribano-panel").classList.remove("hidden");
  }
}

function logout() {

  document.getElementById("admin-panel").classList.add("hidden");
  document.getElementById("escribano-panel").classList.add("hidden");

  document.getElementById("login-section").classList.remove("hidden");

  document.getElementById("usuario").value = "";
  document.getElementById("clave").value = "";
}