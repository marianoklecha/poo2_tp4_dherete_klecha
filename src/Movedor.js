const tiempoActual= require("../src/Tiempo");
function Movedor(){
    this.moverPaquetes = function(origen,destino){

        if(origen.soyCentro()){
            while(origen.paquetesProcesados.length != 0 &&  destino.puedeRecibirPaquetes()){
                origen.pasarPaqueteA(destino);
            }
            tiempoActual.sumarTiempo();
        }
        else{
            while(origen.paquetesEnCola.length!=0 &&  destino.puedeRecibirPaquetes()){
                origen.pasarPaqueteA(destino);
            }
            tiempoActual.sumarTiempo();
            
        }
  
      
    }
}

module.exports = Movedor;