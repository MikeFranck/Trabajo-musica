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
    
    //termina header 
    
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        let api = `${proxy}https://api.deezer.com/playlist/3453772742`; //playlist con todas la canciones que aparecen en el home
    
        fetch(api)
            .then(function (response) {
                console.log(response);
                return response.json();
            })
            .then(function (datos) {
                console.log(datos);
    
                let album1 = document.querySelector('.album1');
                let album2 = document.querySelector('.album2');
                let album3 = document.querySelector('.album3');
                let album4 = document.querySelector('.album4');
                let album5 = document.querySelector('.album5');
                let album6 = document.querySelector('.album6');
                let album7 = document.querySelector('.album7');
                let album8 = document.querySelector('.album8');
                let album9 = document.querySelector('.album9');
                let album10 = document.querySelector('.album10');
    
                album1.innerHTML += `
                <a href="detalle-album.html?id=${datos.tracks.data[0].album.id}"><img class="ayuda" src="${datos.tracks.data[0].album.cover_xl}" alt="">
                <div class="texto"></a><a class="lit"href="detalle-album.html?id=${datos.tracks.data[0].album.id}"><h2>${datos.tracks.data[0].album.title}</h2></a>
                <a class="lit"href="detalle-artistas.html?id=${datos.tracks.data[0].artist.id}"><h4>${datos.tracks.data[0].artist.name}</h4></a></div>
                `;
    
                album2.innerHTML += `
                <a href="detalle-album.html?id=${datos.tracks.data[1].album.id}"><img class="ayuda" src="${datos.tracks.data[1].album.cover_xl}" alt="">
                <div class="texto"></a><a class="lit"href="detalle-album.html?id=${datos.tracks.data[1].album.id}"><h2>${datos.tracks.data[1].album.title}</h2></a>
                <a class="lit"href="detalle-artistas.html?id=${datos.tracks.data[1].artist.id}"><h4>${datos.tracks.data[1].artist.name}</h4></a></div>
                `;
    
                album3.innerHTML += `
                <a href="detalle-album.html?id=${datos.tracks.data[6].album.id}"><img class="ayuda" src="${datos.tracks.data[6].album.cover_xl}" alt="">
                <div class="texto"></a><a class="lit"href="detalle-album.html?id=${datos.tracks.data[6].album.id}"><h2>${datos.tracks.data[6].album.title}</h2></a>
                <a class="lit"href="detalle-artistas.html?id=${datos.tracks.data[6].artist.id}"><h4>${datos.tracks.data[6].artist.name}</h4></a></div>
                `;
    
                album4.innerHTML += `
                <a href="detalle-album.html?id=${datos.tracks.data[13].album.id}"><img class="ayuda" src="${datos.tracks.data[13].album.cover_xl}" alt="">
                <div class="texto"></a><a class="lit"href="detalle-album.html?id=${datos.tracks.data[13].album.id}"><h2>${datos.tracks.data[13].album.title}</h2></a>
                <a class="lit"href="detalle-artistas.html?id=${datos.tracks.data[13].artist.id}"><h4>${datos.tracks.data[13].artist.name}</h4></a></div>
                `;
    
                album5.innerHTML += `
                <a href="detalle-album.html?id=${datos.tracks.data[9].album.id}"><img class="ayuda" src="${datos.tracks.data[9].album.cover_xl}" alt="">
                <div class="texto"></a><a class="lit"href="detalle-album.html?id=${datos.tracks.data[9].album.id}"><h2>${datos.tracks.data[9].album.title}</h2></a>
                <a class="lit"href="detalle-artistas.html?id=${datos.tracks.data[9].artist.id}"><h4>${datos.tracks.data[9].artist.name}</h4></a></div>
                `;

                album6.innerHTML += `
                <a href="detalle-album.html?id=${datos.tracks.data[16].album.id}"><img class="ayuda" src="${datos.tracks.data[16].album.cover_xl}" alt="">
                <div class="texto"></a><a class="lit"href="detalle-album.html?id=${datos.tracks.data[16].album.id}"><h2>${datos.tracks.data[16].album.title}</h2></a>
                <a class="lit"href="detalle-artistas.html?id=${datos.tracks.data[16].artist.id}"><h4>${datos.tracks.data[16].artist.name}</h4></a></div>
                `;
    
                album7.innerHTML += `
                <a href="detalle-album.html?id=${datos.tracks.data[1].album.id}"><img class="ayuda" src="${datos.tracks.data[1].album.cover_xl}" alt="">
                <div class="texto"></a><a class="lit"href="detalle-album.html?id=${datos.tracks.data[1].album.id}"><h2>${datos.tracks.data[1].album.title}</h2></a>
                <a class="lit"href="detalle-artistas.html?id=${datos.tracks.data[1].artist.id}"><h4>${datos.tracks.data[1].artist.name}</h4></a></div>
                `;
    
                album8.innerHTML += `
                <a href="detalle-album.html?id=${datos.tracks.data[6].album.id}"><img class="ayuda" src="${datos.tracks.data[6].album.cover_xl}" alt="">
                <div class="texto"></a><a class="lit"href="detalle-album.html?id=${datos.tracks.data[6].album.id}"><h2>${datos.tracks.data[6].album.title}</h2></a>
                <a class="lit"href="detalle-artistas.html?id=${datos.tracks.data[6].artist.id}"><h4>${datos.tracks.data[6].artist.name}</h4></a></div>
                `;
    
                album9.innerHTML += `
                <a href="detalle-album.html?id=${datos.tracks.data[13].album.id}"><img class="ayuda" src="${datos.tracks.data[13].album.cover_xl}" alt="">
                <div class="texto"></a><a class="lit"href="detalle-album.html?id=${datos.tracks.data[13].album.id}"><h2>${datos.tracks.data[13].album.title}</h2></a>
                <a class="lit"href="detalle-artistas.html?id=${datos.tracks.data[13].artist.id}"><h4>${datos.tracks.data[13].artist.name}</h4></a></div>
                `;
    
                album10.innerHTML += `
                <a href="detalle-album.html?id=${datos.tracks.data[9].album.id}"><img class="ayuda" src="${datos.tracks.data[9].album.cover_xl}" alt="">
                <div class="texto"></a><a class="lit"href="detalle-album.html?id=${datos.tracks.data[9].album.id}"><h2>${datos.tracks.data[9].album.title}</h2></a>
                <a class="lit"href="detalle-artistas.html?id=${datos.tracks.data[9].artist.id}"><h4>${datos.tracks.data[9].artist.name}</h4></a></div>
                `;
    
            })
            .catch(function (error) {
                console.log('Tu error es: ' + error);
            })
        })