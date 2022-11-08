function Tiempo(){
    this.tiempoActual = 0;

    this.moverPaquete = function(origen,destino){
        origen.pasarPaqueteA(destino);
        this.tiempoActual++;
    }
}

module.exports = Tiempo;