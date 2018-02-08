$(document).ready(function() {
// INICIAR SESION
  $('#btnSign').click(function() {
    saveLocaStorage();
    function saveLocaStorage() {
      let user = $('#user').val();
      var passVal = $('#passInput').val();
      localStorage.setItem('user', user);
      localStorage.setItem('passVal', passVal);
    }

    var passVal = $('#passInput').val();

    // la contrasena no debe estar vacia, debe tener mas de 6 caracteres, no debe ser 123456
    if (passVal !== '' && passVal.length >= 6 && passVal !== '123456') {
      window.location = 'gallery.html';
    } else {
      alert('Ingrese contrasena valida.');
    }
  });
});


// MOVER LAS FOTOS DE UN CONTENEDOR A OTRO
function drag(evento) {
  console.log(evento.target.src);
  evento.dataTransfer.setData('text', evento.target.id);
}

function allowDrop(evento) {
  evento.preventDefault();
}

function drop(evento) {
  evento.preventDefault();
  var idFoto = evento.dataTransfer.getData('text');
  evento.target.appendChild(document.getElementById(idFoto));
}

