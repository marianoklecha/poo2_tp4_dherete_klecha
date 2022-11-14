function Centro() {
    if(!(this instanceof Centro)){
        return new Centro();
    }

    this.paquetesEnCola = new Array();
    this.paquetesProcesados = new Array();
    this.capacidadMaximaEnEspera;
    this.maximoAProcesar;

    Centro.prototype.recibirPaquete = function(nuevoPaquete){
        
        this.paquetesEnCola.push(nuevoPaquete);
        this.ordenarPaquetesSegunUrgencia(this.paquetesEnCola);
        
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
        while(cont<this.maximoAProcesar && this.paquetesEnCola.length!=0){
            if(this.paquetesEnCola.length!=0){
                var paquete=this.paquetesEnCola.pop()
                this.paquetesProcesados.push(paquete);
            }
            cont+=1;
            
        }
        this.ordenarPaquetesSegunUrgencia(this.paquetesProcesados);
    }

    Centro.prototype.puedeRecibirPaquetes = function(){
        if(this.capacidadMaximaEnEspera <= this.paquetesEnCola.length){
            return false;
        } else {
            return true;
        }
    }


    Centro.prototype.soyCentro = function(){
        return true;
    }


    this.ordenarPaquetesSegunUrgencia = function(paquetesAOrdenar){
        this.paquetesAOrdenar.sort(((a, b) => b.urgencia - a.urgencia));
    }
}


module.exports = Centro;