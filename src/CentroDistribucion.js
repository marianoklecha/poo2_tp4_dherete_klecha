const Centro = require('./Centro.js');

function CentroDistribucion(){
    Centro.call();
    if(!(this instanceof CentroDistribucion)){
        return new CentroDistribucion();
    }
    this.paquetesEnCola = new Array();
    this.capacidadMaximaEnEspera=30;
    this.capacidadMinima=10;
}


CentroDistribucion.prototype = Object.create(Centro.prototype);
CentroDistribucion.prototype.constructor = CentroDistribucion;

module.exports = CentroDistribucion;