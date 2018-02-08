$(document).ready(function(){

// INICIAR SESION
//validar no estar vacio
//validar password no sea 123456
//minimo permitido 6 caracteres

	$('#btnSign').click(function(){
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
// 
function drag(ev) {
  console.log(ev.target.src);
  ev.dataTransfer.setData('text', ev.target.id);
}

// 
function allowDrop(ev){
  ev.preventDefault();
}

// 
function drop(ev) {
  ev.preventDefault();
  var id_foto = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(id_foto));
}

