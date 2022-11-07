const Paquete = require("./Paquete");

function Local(){
    this.paquetesEnCola = new Array();

    this.generarPaquete = function(){
        this.paquetesEnCola.push(new Paquete());
    }

    this.pasarPaqueteA = function(siguiente){
        paqueteAPasar = this.paquetesEnCola.pop();
        siguiente.recibirPaquete(paqueteAPasar);
    }
}

module.exports = Local;