window.addEventListener('load', function(){

const proxy = 'https://cors-anywhere.herokuapp.com/';

let queryString = location.search
let objetoQuery = new URLSearchParams(queryString)
let idTrack = objetoQuery.get('id')

let paloma = document.querySelector('.paloma')

fetch(proxy+'https://api.deezer.com/track/'+idTrack)
.then(function (response) {
   // console.log(response); //
    return response.json();
})
.then(function (datos) {
    console.log(datos);
paloma.innerHTML+= `<img class="camion" src="${datos.album.cover_big}" alt="">
<div>
    <h1>${datos.title}</h1>
    <a class="lit" href="detalle-artistas.html?id=${datos.artist.id}"><h2>${datos.artist.name}</h2></a>
    <a class="lit" href=""><h2>${datos.album.title}</h2></a>
    <br><br>
    <div class="centro"><button class="button button1"><ion-icon name="play-circle-outline"></ion-icon></button></div>
    <br><br><br><br><br><br><br>
    <button class="button2" type="button" onclick="alert('Agregado a Mi Música')">Agregar a Mi Música</button>
    
</div>
<div>
    <h3>Canciones que te pueden interesar:</h3>
    <div class="orden">
        <div><a class="lit" href="detalle-canciones.html"><img class="ayuda" src="img/lilnax.jpeg" alt=""><h3 class="lit">Old Time Road</h3></a></div>
        <div><a class="lit" href="detalle-canciones.html"><img class="ayuda" src="img/pink.jpeg" alt=""><h3 class="lit">Money</h3></a></div>
        <div><a class="lit" href="detalle-canciones.html"><img class="ayuda" src="img/ed.jpeg" alt=""><h3 class="lit">Perfect</h3></a></div>
        <div><a class="lit" href="detalle-canciones.html"><img class="ayuda" src="img/harry.jpeg" alt=""><h3 class="lit">Watermelon Sugar</h3></a></div>
    </div>
</div>`


})

.catch(function (error) {
    console.log('Tu error es: ' + error);
})

})