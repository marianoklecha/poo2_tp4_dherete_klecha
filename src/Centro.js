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
    }

    Centro.prototype.pasarPaqueteA = function(siguiente){
        if(siguiente.puedeRecibirPaquetes()){
            paqueteAPasar = this.paquetesProcesados.pop();
            siguiente.recibirPaquete(paqueteAPasar);
        }
    }

    Centro.prototype.procesarPaquetesEnEspera=function(){
        // for(var i =0; i<this.maximoAProcesar;i++){
        //     if(this.paquetesEnCola.length!=0){
        //         this.paquetesProcesados.push(this.paquetesEnCola[i]);
        //     }
        // }
        var cont=0;
        while(cont<this.maximoAProcesar){
            for(var i=this.paquetesEnCola.length-1;i>0;i--){
                if(this.paquetesEnCola.length!=0){
                    this.paquetesProcesados.push(this.paquetesEnCola[i]);
                }
            }
        }
    }

    Centro.prototype.puedeRecibirPaquetes = function(){
        if(this.capacidadMaximaEnEspera == this.paquetesEnCola.length){
            return false;
        } else {
            return true;
        }
    }


    Centro.prototype.soyCentro = function(){
        return true;
    }
}


module.exports = Centro;