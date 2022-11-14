const tiempoActual= require("../src/Tiempo");
function Movedor(){
    this.moverPaquetes = function(origen,destino){

        while(destino.puedeRecibirPaquetes()){
            origen.pasarPaqueteA(destino);
        }
        tiempoActual.sumarTiempo();
        
  
      
    }
}

module.exports = Movedor;