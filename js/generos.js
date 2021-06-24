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

//pide la info a la api
fetch('https://cors-anywhere.herokuapp.com/http://api.deezer.com/genre/')
.then(res => res.json())
.then(datos => {
//iteramos la informasion para buscar el nombre del genero y su foto    
let generos ='';
    for(let i of datos["data"]){
     generos += `<div> <img onclick="redirect(${i.id})" src=${i.picture_medium}><br>${i.name}<br><br></div>`
}
 
//pego la informasion que traje en el html en div con id "result"
document.getElementById('result').innerHTML = generos;
})

function redirect(x){
  console.log(x)
  fetch(`https://cors-anywhere.herokuapp.com/http://api.deezer.com/genre/${x}/artists`)
.then(res => res.json())
.then(dato => {
  let canciones ='';
  for(let i of dato["data"]){
    canciones += `<div class=""><img src=${i.picture_medium}><br>${i.name}<br><br></div>`
}
     document.getElementById("result").style.display = "none";
     document.getElementById('palito').innerHTML = canciones;

 })
  
}