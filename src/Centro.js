function Centro() {
    if(!(this instanceof Centro)){
        return new Centro();
    }

    this.paquetesEnCola = new Array();
    this.capacidadMaximaEnEspera;

    Centro.prototype.recibirPaquete = function(nuevoPaquete){
        if(this.capacidadMaximaEnEspera < this.paquetesEnCola.length+nuevoPaquete.length){
            this.paquetesEnCola.push(nuevoPaquete);
        }
        else{
            throw new Error("El centro supera el maximo de paquetes");
        }

    }

    Centro.prototype.pasarPaqueteA = function(siguiente){
        paqueteAPasar = this.paquetesEnCola.pop();
        siguiente.recibirPaquete(paqueteAPasar);
    }
}


module.exports = Centro;