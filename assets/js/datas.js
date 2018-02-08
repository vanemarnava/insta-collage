saveLocaStorage();
function saveLocaStorage() {
	let person = {
		name: "Fernando",
		edad: 31,
		correo: "asd@asd.com",
	}
	let name = 'juan';
	localStorage.setItem('name', JSON.stringify(person));
}