function validarFormulario() {

  var nombre      = document.getElementById("nombre").value;
  var ciudad      = document.getElementById("ciudad").value;
  var email       = document.getElementById("email").value;
  var asunto      = document.getElementById("asunto").value;
  var descripcion = document.getElementById("descripcion").value;

  document.getElementById("errorNombre").textContent      = "";
  document.getElementById("errorCiudad").textContent      = "";
  document.getElementById("errorEmail").textContent       = "";
  document.getElementById("errorAsunto").textContent      = "";
  document.getElementById("errorDescripcion").textContent = "";

  var formularioValido = true;

  if (nombre === "") {
    document.getElementById("errorNombre").textContent = "El nombre es obligatorio.";
    formularioValido = false;
  } else if (nombre.length < 3) {
    document.getElementById("errorNombre").textContent = "El nombre debe tener al menos 3 caracteres.";
    formularioValido = false;
  }

  if (ciudad === "") {
    document.getElementById("errorCiudad").textContent = "La ciudad es obligatoria.";
    formularioValido = false;
  }

  if (email === "") {
    document.getElementById("errorEmail").textContent = "El email es obligatorio.";
    formularioValido = false;
  } else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    document.getElementById("errorEmail").textContent = "Ingresa un email válido (ejemplo@correo.com).";
    formularioValido = false;
  }

  if (asunto === "") {
    document.getElementById("errorAsunto").textContent = "El asunto es obligatorio.";
    formularioValido = false;
  }

  if (descripcion === "") {
    document.getElementById("errorDescripcion").textContent = "La descripción es obligatoria.";
    formularioValido = false;
  } else if (descripcion.length < 10) {
    document.getElementById("errorDescripcion").textContent = "La descripción debe tener al menos 10 caracteres.";
    formularioValido = false;
  }

  if (formularioValido) {
    document.getElementById("formulario").style.display = "none";
    document.getElementById("mensajeExito").style.display = "block";
  }

}