$(document).ready(function(){

// INICIAR SESION
//validar no estar vacio
//validar password no sea 123456
//minimo permitido 6 caracteres

	$('#btnSign').click(function(){

		var passVal = $('#passInput').val();

		// la contrasena no debe estar vacia, debe tener mas de 6 caracteres, no debe ser 123456
		if (passVal !== '' && passVal.length >= 6 && passVal !== '123456') {

	  } else {
	    alert('Ingrese contrasena valida.');
	  }

	});


});


// MOVER LAS FOTOS DE UN CONTENEDOR A OTRO
// 
function drag(ev) {
  console.log(ev.target.src);
  ev.dataTransfer.setData('text', ev.target.id);
}

// 
function permitirDrop(ev){
  ev.preventDefault();
}

// 
function drop(ev) {
  ev.preventDefault();
  var id_foto = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(id_foto));
}

