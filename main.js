var contenedor= document.querySelector("body")
var botonCalculador= document.querySelector(".calculadora")

contenedor.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        calc();
    }
})

botonCalculador.onclick= function() {
    
        calc();
    
}




//Funcion que determina las papayas necesarias
function CalcularPapayas(tamaño,papaya,surtido,especial){
    if(tamaño=="mediana"){
    return (!Number.isInteger((papaya*6+surtido*3+especial*3)/27)?((papaya*6+surtido*3+especial*3)/27).toFixed(2):(papaya*6+surtido*3+especial*3)/27) + " papayas"
    }  

}
//Funcion que determina las piñas necesarias
function CalcularPiñas(tamaño,piña,surtido){
    if(tamaño=="mediana"){
        return (!Number.isInteger((surtido*2)/20+ (piña/3))? ((surtido*2)/20+ (piña/3)).toFixed(2):(surtido*2)/20+ (piña/3)) + " piñas"
    }  

}
//Funcion que determina las manzanas necesarias
function CalcularManzanas(surtido,especial){
    return Math.ceil((surtido/10)+(especial/10)) + " manzanas"
}

//Funcion que determina los plátanos necesarios
function CalcularPlatanos(surtido,especial){
    return Math.ceil((surtido/5)+((especial*2)/5)) + " plátanos"
}

//Funcion que determina las beterragas necesarias
function CalcularBeterragas(surtido){
    if(surtido>70){
    return "2 beterragas grandes o 3 medianas "  
    }
    else{
    return "2 beterragas medianas "  
    }
}

// Función que determina qué comprar

function calc(){

    //Obteniendo el div donde ira la orden
    var orden = document.querySelector(".orden")

    var piñaJugo = document.querySelector(".piña").value
    var tamañoPiña= document.querySelector(".tamañoPiña").value
    var surtidoJugo = document.querySelector(".surtido").value
    var especialJugo = document.querySelector(".especial").value
    var papayaJugo = document.querySelector(".papaya").value
    var tamañoPapaya= document.querySelector(".tamañoPapaya").value

    //llamando las funciones
    var totalPapayas= CalcularPapayas(tamañoPapaya,papayaJugo,surtidoJugo,especialJugo)
    var totalPiñas= CalcularPiñas(tamañoPiña,piñaJugo,surtidoJugo)
    var totalManzanas= CalcularManzanas(surtidoJugo,especialJugo)
    var totalPlatanos= CalcularPlatanos(surtidoJugo,especialJugo)
    var totalBeterragas= CalcularBeterragas(surtidoJugo)
    var lista= [totalPapayas,totalPiñas,totalManzanas, totalPlatanos]
    surtidoJugo!=0 || surtidoJugo!=""? lista.push(totalBeterragas):0 
    var texto;

    
    //Haciendo la orden
    for (let i = 0; i < lista.length; i++) {
        if(lista[i][0]==0) continue
        if((i + 1) == (lista.length)){
            texto+=" y "+ lista[i]
            break
        }
        if(i==0){
            texto= "Compra ";
            texto += lista[i] ;
            
        }
        else{
            texto += ", "+lista[i] ;
        }
      }
    orden.innerHTML=texto
 
}