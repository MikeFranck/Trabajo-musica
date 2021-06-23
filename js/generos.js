//pide la info a la api
fetch('https://cors-anywhere.herokuapp.com/http://api.deezer.com/genre')
.then(res => res.json())
.then(datos => {
//iteramos la informasion para buscar el nombre del genero y su foto    
let generos ='';
    for(let i of datos["data"]){
     generos += `<li><img src=${i.picture_medium}><br>${i.name}<br><br></li>`
}
// linea codigo boton <button onclick="addToFavorites(${i.id})" type="button">Add to favorites!</button> 
//pego la informasion que traje en el html en div con id "result"
document.getElementById('result').innerHTML = generos;
})
//genero una variable para guardar el id de los favoritos
var favoritos = [ ];
//genero una funcion para guardar los favoritos en el array "favoritos"
function addToFavorites(x){
favoritos.push(x)
console.log(favoritos)
}
//guardo en el localstorage el array de favoritos
localStorage.setItem('datos', JSON.stringify(favoritos));
//traigo los datos del localstorage para verlos y luego poder usarlos
var guardado = localStorage.getItem('datos');
console.log(JSON.parse(guardado));
