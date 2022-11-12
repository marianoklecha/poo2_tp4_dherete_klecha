const Paquete = require("./Paquete");

function Local(){
    this.paquetesEnCola = new Array();

    this.generarPaquetes = function(largoLineaDeProduccion){
        cantidadPaquetes = Math.random() * (6 - 1) + 1;
        for(var i = 0; i<cantidadPaquetes; i++){
            this.paquetesEnCola.push(new Paquete(largoLineaDeProduccion));
        }
    }

    this.pasarPaqueteA = function(siguiente){
        paqueteAPasar = this.paquetesEnCola.pop();
        siguiente.recibirPaquete(paqueteAPasar);
    }
}

module.exports = Local;