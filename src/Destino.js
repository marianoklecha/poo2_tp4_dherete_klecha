function Destino(){
    this.paquetesEnCola = new Array();
    this.cantidadPaquetesDemorados;

    this.recibirPaquete = function(nuevoPaquete){
        this.paquetesEnCola.push(nuevoPaquete);
        if(nuevoPaquete.urgencia<1){
            console.log("El Paquete "+nuevoPaquete.idPaquete+" llegó demorado")
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