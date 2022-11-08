function Centro() {

    if(!(this instanceof Centro)){
        return new Centro();
    }

    this.paquetesEnCola = new Array();

    Centro.prototype.recibirPaquete = function(nuevoPaquete){
        this.paquetesEnCola.push(nuevoPaquete);
    }

    Centro.prototype.pasarPaqueteA = function(siguiente){
        paqueteAPasar = this.paquetesEnCola.pop();
        siguiente.recibirPaquete(paqueteAPasar);
    }
}


module.exports = Centro;