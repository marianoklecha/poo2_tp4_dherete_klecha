const Centro = require('./Centro.js');

function CentroFacturacion(){
    Centro.call();
    if(!(this instanceof CentroFacturacion)){
        return new CentroFacturacion();
    }
    this.paquetesEnCola = new Array();
    this.paquetesProcesados = new Array();
    this.maximoAProcesar = 3;

    this.capacidadMaximaEnEspera=Math.floor(Math.random() * (7 - 3) + 3);
}

CentroFacturacion.prototype = Object.create(Centro.prototype);
CentroFacturacion.prototype.constructor = CentroFacturacion;

module.exports = CentroFacturacion;