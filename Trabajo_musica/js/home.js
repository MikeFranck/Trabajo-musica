window.addEventListener('load', function(){

let busqueda = document.getElementById("busqueda");

busqueda.addEventListener("submit", function(e){
  e.preventDefault()
  console.log(busqueda.value)

  // if (busqueda.value.length < 3){ 
  //   alert ("El largo de la busqueda debe ser mayor a 2 caracteres")
  //   console.log(busqueda)
  //     }
  // else if  (busqueda.value === ""){
  //   alert ("La busqueda no puede quedar vacía")
  //   console.log(busqueda)
  //     }
  //  else {
  //   alert ("La busqueda fue exitosa")
  //     }
  
})

})

 