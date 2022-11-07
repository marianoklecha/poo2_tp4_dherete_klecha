function CentroCalidad(){
    this.paquetesEnCola = new Array();

    this.recibirPaquete = function(nuevoPaquete){
        this.paquetesEnCola.push(nuevoPaquete);
    }

    this.pasarPaqueteA = function(siguiente){
        paqueteAPasar = this.paquetesEnCola.pop();
        siguiente.recibirPaquete(paqueteAPasar);
    }
}

module.exports = CentroCalidad;