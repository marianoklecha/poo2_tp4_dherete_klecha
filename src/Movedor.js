const tiempoActual= require("../src/Tiempo");
function Movedor(){

    this.moverPaquetes = function(origen,destino){
        while(origen.paquetesEnCola.length != 0){
            origen.pasarPaqueteA(destino);
        }
        tiempoActual.sumarTiempo();
    }
}

module.exports = Movedor;