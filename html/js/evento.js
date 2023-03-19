function redireccion(){
    location.href = "formulario.html"
}

function redireccion2(){
    location.href = "calculadora.html"
}

var boton = document.getElementById('numero1');
 var resultado = document.getElementById('numeroa');

    boton.onclick = function(e){
      numeroa.value +=  this.value;
 }