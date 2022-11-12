const Centro = require('./Centro.js');

function CentroDistribucion(){
    Centro.call();
    if(!(this instanceof CentroDistribucion)){
        return new CentroDistribucion();
    }
    this.paquetesEnCola = new Array();
    this.paquetesProcesados = new Array();
    this.maximoAProcesar = 10;

    this.capacidadMaximaEnEspera=Math.floor(Math.random() * (30 - 10) + 10);
}


CentroDistribucion.prototype = Object.create(Centro.prototype);
CentroDistribucion.prototype.constructor = CentroDistribucion;

module.exports = CentroDistribucion;