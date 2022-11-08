const Centro = require('./Centro.js');

function CentroDistribucion(){
    this.paquetesEnCola = new Array();
}


CentroDistribucion.prototype = Object.create(Centro.prototype);
CentroDistribucion.prototype.constructor = CentroDistribucion;

module.exports = CentroDistribucion;