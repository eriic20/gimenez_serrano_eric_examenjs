document.querySelector("#btnGenerar").addEventListener("click", function () {
  var nombre = document.querySelector("#nombre").value;
  var apellidos = document.querySelector("#apellidos").value;
  var email = document.querySelector("#email").value;
  var telefono = document.querySelector("#telefono").value;
  var sobreMi = document.querySelector("#sobreMi").value;

  document.querySelector("#cvPreview").innerHTML =
    "<h2>" + nombre + " " + apellidos + "</h2>" +
    "<p>Email: " + email + "</p>" +
    "<p>Teléfono: " + telefono + "</p>" +
    "<p>Sobre mí: " + sobreMi + "</p>";
});
