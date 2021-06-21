window.addEventListener('load', function(){

let busqueda = document.getElementById("busqueda");
let busquedamusica = document.querySelector(".busquedamusica");

busqueda.addEventListener("submit", function(e){
  e.preventDefault()
  if (busquedamusica.value.length < 3 || busquedamusica.value === ""){ // si la busqueda tiene menos de 3 caracteres o esta vacia
    alert ("El largo de la busqueda debe ser mayor a 2 caracteres"); //avisar al usuario
	
      }


   else {    // si la busqueda es mayor o igual a 3 caracteres
	   this.submit()    // hacer la busqueda
      }
  
})

//termina header y empieza home

	const proxy = 'https://cors-anywhere.herokuapp.com/';
	let api = `${proxy}https://api.deezer.com/track`;

	fetch(api)
		.then(function (response) {
			console.log(response);
			return response.json();
		})
		.then(function (datos) {
			console.log(datos);
			console.log(datos.name);

			 let cancion1  = document.querySelector('.cancion1');
			 let cancion2= document.querySelector('.cancion2');
		     let cancion3 = document.querySelector('.cancion3');
			 let cancion4 = document.querySelector('.cancion4');
			 let cancion5 = document.querySelector('.cancion5');

			// // Agregar imagenes a mi HMTL con el endpoint
			cancion1.innerHTML = `
			<a href="detalle-canciones.html"><img class="ayuda" src="${datos.data[1].picture_medium}" alt="">
			<div class="texto"></a><a class="lit"href="detalle-canciones.html"><h2>DÁKITI</h2></a>
			<a class="lit"href="detalle-artistas.html"><h4>${datos.data[1].name}</h4></a></div>
			<h2>${datos.data[1].name} </h2>
			`;
			caja_2.innerHTML += `
			<h2>${datos.data[2].name} </h2>
			<img src="${datos.data[2].picture_medium}">
			`;
			caja_3.innerHTML += `
			<h2>${datos.data[3].name} </h2>
			<img src="${datos.data[3].picture_medium}">
			`;
			caja_4.innerHTML += `
			<h2>${datos.data[4].name} </h2>
			<img src="${datos.data[4].picture_medium}">
			`;
		
		})
		.catch(function (error) {
			console.log('Tu error es: ' + error);
		})


})

 