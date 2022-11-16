const Paquete = require("./Paquete");

function Local(idDelLocal){
    this.paquetesEnCola = new Array();
    this.cantidadPaquetesCreados = 0;
    this.idLocal = String.fromCharCode(idDelLocal);

    this.generarPaquetes = function(largoLineaDeProduccion,maximo){
        cantidadPaquetes = Math.random() * (6 - 1) + 1;
        for(var i = 0; i<cantidadPaquetes; i++){
            this.cantidadPaquetesCreados =this.cantidadPaquetesCreados + 1;
            this.paquetesEnCola.push(new Paquete(largoLineaDeProduccion,Math.floor(Math.random() * (maximo - 0) + 0),this.cantidadPaquetesCreados+"-"+this.idLocal));
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