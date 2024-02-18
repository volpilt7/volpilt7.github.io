
function greenfee(){
  var nombre = document.getElementById("nombre").value
  var edad = document.getElementById("edad").value
  var socio = document.getElementById("socio").checked
  var resultadof
  resultadof = parseInt(resultadof)
  var jugadores = document.querySelector('input[name="personas"]:checked').value;
  
  edad = parseInt(edad)

  if ((edad<=0)){
      alert("Debe ingresae un numero mayor a cero.")
  }
  if(edad > 35){
      resultadof = 3000
  }else{
      resultadof = 2500
  } 
  if(jugadores == 1){
    resultadof = resultadof + 1000 
  }
  if(jugadores == 2){
    resultadof = resultadof + 500
  }
  if(jugadores == 3){
    resultadof = resultadof + 250
  }
  if(jugadores == 4){
    resultadof = resultadof + 100
  }
  
  if (socio){
      resultadof = resultadof /2
  }
  document.getElementById("resultadof").innerHTML ="El precio a pagar de "+ nombre + " es: " + resultadof;
  } 
  
function borrar(){
    document.getElementById("nombre").value = " ";
    document.getElementById("edad").value = " ";
    document.getElementById("socio").checked = false;
    document.querySelector('input[name="personas"]:checked').checked = false;
  }
  