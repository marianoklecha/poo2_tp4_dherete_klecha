function CentroDistribucion(){
    this.paquetesEnCola = new Array();

    this.recibirPaquete = function(nuevoPaquete){
        this.paquetesEnCola.push(nuevoPaquete);
    }
}

module.exports = CentroDistribucion;