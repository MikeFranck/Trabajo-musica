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


let apiBadBunny = `${proxy}https://api.deezer.com/artist/10583405`;
let apiEdSheeran = `${proxy}https://api.deezer.com/artist/384236`;
let apiHarryStyles = `${proxy}https://api.deezer.com/artist/5313805`;
let apiLilNasX = `${proxy}https://api.deezer.com/artist/15166511`;
let apiPinkFloyd = `${proxy}https://api.deezer.com/artist/860`;	

fetch(apiBadBunny)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (datos) {
            let cantante1 = document.querySelector('.cantante1');
            cantante1.innerHTML += `
            <a href="detalle-artistas.html?id=${datos.id}"><img class="ayuda" src="${datos.picture_xl}" alt="">
            </a><div class="texto"><a class="lit" href="detalle-artistas.html?id=${datos.id}"><h2>${datos.name}</h2></a></div>
            `;

        })
        .catch(function (error) {
            console.log('Tu error es: ' + error);
        })

fetch(apiEdSheeran)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (datos) {
            let cantante2 = document.querySelector('.cantante2');
            cantante2.innerHTML += `
            <a href="detalle-artistas.html?id=${datos.id}"><img class="ayuda" src="${datos.picture_xl}" alt="">
            </a><div class="texto"><a class="lit" href="detalle-artistas.html?id=${datos.id}"><h2>${datos.name}</h2></a></div>
            `;

        })
        .catch(function (error) {
            console.log('Tu error es: ' + error);
        })

fetch(apiHarryStyles)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (datos) {
            let cantante3 = document.querySelector('.cantante3');
            cantante3.innerHTML += `
            <a href="detalle-artistas.html?id=${datos.id}"><img class="ayuda" src="${datos.picture_xl}" alt="">
            </a><div class="texto"><a class="lit" href="detalle-artistas.html?id=${datos.id}"><h2>${datos.name}</h2></a></div>
            `;

        })
        .catch(function (error) {
            console.log('Tu error es: ' + error);
        })

fetch(apiLilNasX)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (datos) {
            let cantante4 = document.querySelector('.cantante4');
            cantante4.innerHTML += `
            <a href="detalle-artistas.html?id=${datos.id}"><img class="ayuda" src="${datos.picture_xl}" alt="">
            </a><div class="texto"><a class="lit" href="detalle-artistas.html?id=${datos.id}"><h2>${datos.name}</h2></a></div>
            `;

        })
        .catch(function (error) {
            console.log('Tu error es: ' + error);
        })

fetch(apiPinkFloyd)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (datos) {
            let cantante5 = document.querySelector('.cantante5');
            cantante5.innerHTML += `
            <a href="detalle-artistas.html?id=${datos.id}"><img class="ayuda" src="${datos.picture_xl}" alt="">
            </a><div class="texto"><a class="lit" href="detalle-artistas.html?id=${datos.id}"><h2>${datos.name}</h2></a></div>
            `;

        })
        .catch(function (error) {
            console.log('Tu error es: ' + error);
        })

let apiTini = `${proxy}https://api.deezer.com/artist/2252591`;
let apiDuaLipa = `${proxy}https://api.deezer.com/artist/8706544`;
let apiJBalvin = `${proxy}https://api.deezer.com/artist/4860761`;
let apiAitana = `${proxy}https://api.deezer.com/artist/11928391`;
let apiMariaBecerra = `${proxy}https://api.deezer.com/artist/14343187`;

fetch(apiTini)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (datos) {
            let cantante6 = document.querySelector('.cantante6');
            cantante6.innerHTML += `
            <a href="detalle-artistas.html?id=${datos.id}"><img class="ayuda" src="${datos.picture_xl}" alt="">
            </a><div class="texto"><a class="lit" href="detalle-artistas.html?id=${datos.id}"><h2>${datos.name}</h2></a></div>
            `;

        })
        .catch(function (error) {
            console.log('Tu error es: ' + error);
        })

fetch(apiDuaLipa)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (datos) {
            let cantante7 = document.querySelector('.cantante7');
            cantante7.innerHTML += `
            <a href="detalle-artistas.html?id=${datos.id}"><img class="ayuda" src="${datos.picture_xl}" alt="">
            </a><div class="texto"><a class="lit" href="detalle-artistas.html?id=${datos.id}"><h2>${datos.name}</h2></a></div>
            `;

        })
        .catch(function (error) {
            console.log('Tu error es: ' + error);
        })

fetch(apiJBalvin)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (datos) {
            let cantante8 = document.querySelector('.cantante8');
            cantante8.innerHTML += `
            <a href="detalle-artistas.html?id=${datos.id}"><img class="ayuda" src="${datos.picture_xl}" alt="">
            </a><div class="texto"><a class="lit" href="detalle-artistas.html?id=${datos.id}"><h2>${datos.name}</h2></a></div>
            `;

        })
        .catch(function (error) {
            console.log('Tu error es: ' + error);
        })

fetch(apiAitana)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (datos) {
            let cantante9 = document.querySelector('.cantante9');
            cantante9.innerHTML += `
            <a href="detalle-artistas.html?id=${datos.id}"><img class="ayuda" src="${datos.picture_xl}" alt="">
            </a><div class="texto"><a class="lit" href="detalle-artistas.html?id=${datos.id}"><h2>${datos.name}</h2></a></div>
            `;

        })
        .catch(function (error) {
            console.log('Tu error es: ' + error);
        })

fetch(apiMariaBecerra)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (datos) {
            let cantante10 = document.querySelector('.cantante10');
            cantante10.innerHTML += `
            <a href="detalle-artistas.html?id=${datos.id}"><img class="ayuda" src="${datos.picture_xl}" alt="">
            </a><div class="texto"><a class="lit" href="detalle-artistas.html?id=${datos.id}"><h2>${datos.name}</h2></a></div>
            `;

        })
        .catch(function (error) {
            console.log('Tu error es: ' + error);
        })


    })