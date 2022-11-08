const Centro = require('./Centro.js');

function CentroDistribucion(){

    if(!(this instanceof CentroDistribucion)){
        return new CentroDistribucion();
    }
    
    this.paquetesEnCola = new Array();
}


CentroDistribucion.prototype = Object.create(Centro.prototype);
CentroDistribucion.prototype.constructor = CentroDistribucion;

module.exports = CentroDistribucion;