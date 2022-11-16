function Destino(idDelDestino){
    this.paquetesEnCola = new Array();
    this.cantidadPaquetesDemorados = 0;
    this.idDestino = idDelDestino;

    this.recibirPaquete = function(nuevoPaquete){
        this.paquetesEnCola.push(nuevoPaquete);
        if(nuevoPaquete.urgencia<1){
            console.log("El Paquete "+nuevoPaquete.idPaquete+" llegó demorado al destino " + this.idDestino);
            this.cantidadPaquetesDemorados++;
        }
        
    }

    this.soyCentro = function(){
        return false;
    }

    this.puedeRecibirPaquetes = function(){
        return true;
    }

    
}

module.exports = Destino;