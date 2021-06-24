window.addEventListener('load', function(){

    let busqueda = document.getElementById("busqueda");
    let busquedamusica = document.querySelector(".busquedamusica");
    
    busqueda.addEventListener("submit", function(e){
      e.preventDefault()
      if (busquedamusica.value.length < 3 || busquedamusica.value == ""){ // si la busqueda tiene menos de 3 caracteres o esta vacia
        alert ("El largo de la busqueda debe ser mayor a 2 caracteres"); //avisar al usuario
        
          }
    
    
       else {    // si la busqueda es mayor o igual a 3 caracteres
           this.submit()    // hacer la busqueda
          }
      
    })

    const proxy = 'https://cors-anywhere.herokuapp.com/';

    let api = `${proxy}https://api.deezer.com/playlist/1273315391`; //playlist con todas la canciones que aparecen en el home

	fetch(api)
		.then(function (response) {
			console.log(response);
			return response.json();
		})
		.then(function (datos) {
			console.log(datos);

			 let cancion1 = document.querySelector('.cancion1');
			 let cancion2 = document.querySelector('.cancion2');
		     let cancion3 = document.querySelector('.cancion3');
			 let cancion4 = document.querySelector('.cancion4');
             let cancion5 = document.querySelector('.cancion5');
             let cancion6 = document.querySelector('.cancion6');
			 let cancion7 = document.querySelector('.cancion7');
		     let cancion8 = document.querySelector('.cancion8');
			 let cancion9 = document.querySelector('.cancion9');
			 let cancion10 = document.querySelector('.cancion10');

			cancion1.innerHTML += `
			<a href="detalle-canciones.html?id=${datos.tracks.data[0].id}"><img class="ayuda" src="${datos.tracks.data[0].album.cover_xl}" alt="">
			<div class="texto"></a><a class="lit"href="detalle-canciones.html?id=${datos.tracks.data[0].id}"><h2>${datos.tracks.data[0].title}</h2></a>
			<a class="lit"href="detalle-artistas.html"><h4>${datos.tracks.data[0].artist.name}</h4></a></div>
			`;
			cancion2.innerHTML += `
			<a href="detalle-canciones.html?id=${datos.tracks.data[1].id}"><img class="ayuda" src="${datos.tracks.data[1].album.cover_xl}" alt="">
			<div class="texto"></a><a class="lit"href="detalle-canciones.html?id=${datos.tracks.data[1].id}"><h2>${datos.tracks.data[1].title}</h2></a>
			<a class="lit"href="detalle-artistas.html"><h4>${datos.tracks.data[1].artist.name}</h4></a></div>
			`;
			cancion3.innerHTML += `
			<a href="detalle-canciones.html?id=${datos.tracks.data[2].id}"><img class="ayuda" src="${datos.tracks.data[2].album.cover_xl}" alt="">
			<div class="texto"></a><a class="lit"href="detalle-canciones.html?id=${datos.tracks.data[2].id}"><h2>${datos.tracks.data[2].title}</h2></a>
			<a class="lit"href="detalle-artistas.html"><h4>${datos.tracks.data[2].artist.name}</h4></a></div>
			`;
			cancion4.innerHTML += `
			<a href="detalle-canciones.html?id=${datos.tracks.data[3].id}"><img class="ayuda" src="${datos.tracks.data[3].album.cover_xl}" alt="">
			<div class="texto"></a><a class="lit"href="detalle-canciones.html?id=${datos.tracks.data[3].id}"><h2>${datos.tracks.data[3].title}</h2></a>
			<a class="lit"href="detalle-artistas.html"><h4>${datos.tracks.data[3].artist.name}</h4></a></div>
			`;

			cancion5.innerHTML += `
			<a href="detalle-canciones.html?id=${datos.tracks.data[4].id}"><img class="ayuda" src="${datos.tracks.data[4].album.cover_xl}" alt="">
			<div class="texto"></a><a class="lit"href="detalle-canciones.html?id=${datos.tracks.data[4].id}"><h2>${datos.tracks.data[4].title}</h2></a>
			<a class="lit"href="detalle-artistas.html"><h4>${datos.tracks.data[4].artist.name}</h4></a></div>
            `;
            
            cancion6.innerHTML += `
			<a href="detalle-canciones.html?id=${datos.tracks.data[5].id}"><img class="ayuda" src="${datos.tracks.data[5].album.cover_xl}" alt="">
			<div class="texto"></a><a class="lit"href="detalle-canciones.html?id=${datos.tracks.data[5].id}"><h2>${datos.tracks.data[5].title}</h2></a>
			<a class="lit"href="detalle-artistas.html"><h4>${datos.tracks.data[5].artist.name}</h4></a></div>
			`;
			cancion7.innerHTML += `
			<a href="detalle-canciones.html?id=${datos.tracks.data[6].id}"><img class="ayuda" src="${datos.tracks.data[6].album.cover_xl}" alt="">
			<div class="texto"></a><a class="lit"href="detalle-canciones.html?id=${datos.tracks.data[6].id}"><h2>${datos.tracks.data[6].title}</h2></a>
			<a class="lit"href="detalle-artistas.html"><h4>${datos.tracks.data[6].artist.name}</h4></a></div>
			`;
			cancion8.innerHTML += `
			<a href="detalle-canciones.html?id=${datos.tracks.data[7].id}"><img class="ayuda" src="${datos.tracks.data[7].album.cover_xl}" alt="">
			<div class="texto"></a><a class="lit"href="detalle-canciones.html?id=${datos.tracks.data[7].id}"><h2>${datos.tracks.data[7].title}</h2></a>
			<a class="lit"href="detalle-artistas.html"><h4>${datos.tracks.data[7].artist.name}</h4></a></div>
			`;
			cancion9.innerHTML += `
			<a href="detalle-canciones.html?id=${datos.tracks.data[8].id}"><img class="ayuda" src="${datos.tracks.data[8].album.cover_xl}" alt="">
			<div class="texto"></a><a class="lit"href="detalle-canciones.html?id=${datos.tracks.data[8].id}"><h2>${datos.tracks.data[8].title}</h2></a>
			<a class="lit"href="detalle-artistas.html"><h4>${datos.tracks.data[8].artist.name}</h4></a></div>
			`;

			cancion10.innerHTML += `
			<a href="detalle-canciones.html?id=${datos.tracks.data[9].id}"><img class="ayuda" src="${datos.tracks.data[9].album.cover_xl}" alt="">
			<div class="texto"></a><a class="lit"href="detalle-canciones.html?id=${datos.tracks.data[9].id}"><h2>${datos.tracks.data[9].title}</h2></a>
			<a class="lit"href="detalle-artistas.html"><h4>${datos.tracks.data[9].artist.name}</h4></a></div>
			`;
        })
})