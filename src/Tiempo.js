function Tiempo(){
    this.tiempoActual = 0;

    this.moverPaquete = function(origen,destino){
        origen.pasarPaqueteA(destino);
    }

    this.moverPaquetes = function(origen,destino){
        while(origen.paquetesEnCola.length != 0){
            origen.pasarPaqueteA(destino);
        }
        this.tiempoActual++;
    }
}

module.exports = Tiempo;