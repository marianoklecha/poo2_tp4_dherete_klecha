const Paquete = require("./Paquete");

function Local(){
    this.paquetesEnCola = new Array();

    this.generarPaquete = function(){
        this.paquetesEnCola.push(new Paquete());
    }

    this.generarPaquetes = function(){
        cantidadPaquetes = Math.random() * (6 - 1) + 1;
        for(var i = 0; i<cantidadPaquetes; i++){
            this.generarPaquete();
        }
    }

    this.pasarPaqueteA = function(siguiente){
        paqueteAPasar = this.paquetesEnCola.pop();
        siguiente.recibirPaquete(paqueteAPasar);
    }
}

module.exports = Local;