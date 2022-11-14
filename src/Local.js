const Paquete = require("./Paquete");

function Local(){
    this.paquetesEnCola = new Array();

    this.generarPaquetes = function(largoLineaDeProduccion){
        cantidadPaquetes = Math.random() * (6 - 1) + 1;
        for(var i = 0; i<cantidadPaquetes; i++){
            this.paquetesEnCola.push(new Paquete(largoLineaDeProduccion));
        }
        this.ordenarPaquetesSegunUrgencia();
    }

    this.pasarPaqueteA = function(siguiente){
        if(siguiente.puedeRecibirPaquetes()){
            paqueteAPasar = this.paquetesEnCola.pop();
            siguiente.recibirPaquete(paqueteAPasar);
        }
    }

    this.ordenarPaquetesSegunUrgencia = function(){
        this.paquetesEnCola.sort(((a, b) => b.urgencia - a.urgencia));
    }

    this.soyCentro = function(){
        return false;
    }

}

module.exports = Local;