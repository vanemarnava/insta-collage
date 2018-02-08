getLocalStorage();
		function getLocalStorage() {
			if(localStorage.getItem('passVal')) {
				let passVal = localStorage.getItem('passVal');
				let user = localStorage.getItem('user');
				$('#userName').append(user);
			} else {
				console.log('no hay info guardada');
			}	

		}
		