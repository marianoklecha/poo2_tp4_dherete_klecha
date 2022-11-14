function Destino(){
    this.paquetesEnCola = new Array();

    this.recibirPaquete = function(nuevoPaquete){
        this.paquetesEnCola.push(nuevoPaquete);
    }

    this.soyCentro = function(){
        return false;
    }

    this.puedeRecibirPaquetes = function(){
        return true;
    }
}

module.exports = Destino;