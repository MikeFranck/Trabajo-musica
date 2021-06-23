window.addEventListener('load', function(){

    const proxy = 'https://cors-anywhere.herokuapp.com/';

    let queryString = location.search
    let objetoQuery = new URLSearchParams(queryString)
    let idArtist = objetoQuery.get('id')
    
    let paloma = document.querySelector('.paloma')
    
    fetch(proxy+'https://api.deezer.com/artist/'+idArtist)
    .then(function (response) {
       // console.log(response); //
        return response.json();
    })
    .then(function (datos) {
        console.log(datos);
        paloma.innerHTML+= `  <div><img class="camion" src="${datos.picture_big}" alt=""></div>
        <div>
            <h1>${datos.name}</h1>
            <h2>${datos.type}</h2>
            <h2>Fans: <a class="lit" href="">${datos.nb_fan}</a></h2>
            <h3>La canción mas escuchada de Bad Bunny:</h3>
            <div class="undia"><a class="lit" href="detalle-canciones.html"><img src="img/undia.jpeg" alt=""><h2 class="lit">Un día</h2></a></div>
            <h3>El single es una colaboración entre Bad y múltiples artistas famosos, tanto latinos como estadounidenses.</h3>
            
        </div>
        <div>
            <h3>5 albums de ${datos.name} mas escuchadas de Rythm:</h3>
            <div class="orden">
               
                
            </div>
        </div>`
        let orden = document.querySelector (".orden")

        fetch(proxy+'https://api.deezer.com/artist/'+idArtist+'/albums')
        .then(function (response) {
           // console.log(response); //
            return response.json();
        })
        .then(function (datos) {
            console.log(datos);
            for (let i = 0; i < 5; i++) {
                const album = datos.data[i];
               orden.innerHTML+=`<div><a class="lit" href="detalle-album.html?id=${album.id}"><img src="${album.cover_big}" alt=""><h3 class="lit">${album.title}</h3></a></div>` 
            }
        })
    })


  


    
})

