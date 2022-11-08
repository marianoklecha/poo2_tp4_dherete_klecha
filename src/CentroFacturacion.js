const Centro = require('./Centro.js');

function CentroFacturacion(){
    this.paquetesEnCola = new Array();
}

CentroFacturacion.prototype = Object.create(Centro.prototype);
CentroFacturacion.prototype.constructor = CentroFacturacion;

module.exports = CentroFacturacion;