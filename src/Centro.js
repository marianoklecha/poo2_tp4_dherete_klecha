function Centro() {
    if(!(this instanceof Centro)){
        return new Centro();
    }

    this.paquetesEnCola = new Array();
    this.paquetesProcesados = new Array();
    this.capacidadMaximaEnEspera;
    this.maximoAProcesar;

    Centro.prototype.recibirPaquete = function(nuevoPaquete){
        if(this.capacidadMaximaEnEspera>= this.paquetesEnCola.length+nuevoPaquete.length){
            this.paquetesEnCola.push(nuevoPaquete);
        }
        else{
            throw new Error("El centro supera el maximo de paquetes");
        }

    }

    Centro.prototype.pasarPaqueteA = function(siguiente){

        paqueteAPasar = this.paquetesProcesados.pop();
        siguiente.recibirPaquete(paqueteAPasar);
    }

    Centro.prototype.procesarPaquetesEnEspera=function(){
        for(var i =0; i<this.maximoAProcesar;i++){
            if(this.paquetesEnCola.length!=0){
                this.paquetesProcesados.push(this.paquetesEnCola[i]);
            }
        }
    }
}


module.exports = Centro;