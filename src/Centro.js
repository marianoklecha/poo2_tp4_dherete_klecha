function Centro(nombre,apellido,dni) {

    if(!(this instanceof Centro)){
        return new Centro(nombre,apellido,dni);
    }

    this.paquetesEnCola = new Array();

    this.recibirPaquete = function(nuevoPaquete){
        this.paquetesEnCola.push(nuevoPaquete);
    }

    this.pasarPaqueteA = function(siguiente){
        paqueteAPasar = this.paquetesEnCola.pop();
        siguiente.recibirPaquete(paqueteAPasar);
    }
}


module.exports = Centro;