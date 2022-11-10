function Centro() {
    if(!(this instanceof Centro)){
        return new Centro();
    }

    this.paquetesEnCola = new Array();
    this.capacidadMaximaEnEspera;
    this.capacidadMinima;

    Centro.prototype.recibirPaquete = function(nuevoPaquete){
        if(capacidadMaximaEnEspera>=this.paquetesEnCola.length && capacidadMinima<=this.paquetesEnCola.length){
            this.paquetesEnCola.push(nuevoPaquete);
        }
        else{
            throw new Error("El centro supera el maximo o no llega al minimo de paquetes")
        }

    }

    Centro.prototype.pasarPaqueteA = function(siguiente){
        paqueteAPasar = this.paquetesEnCola.pop();
        siguiente.recibirPaquete(paqueteAPasar);
    }
}


module.exports = Centro;