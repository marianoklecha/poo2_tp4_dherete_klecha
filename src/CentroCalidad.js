const Centro = require('./Centro.js');

function CentroCalidad(){
    this.paquetesEnCola = new Array();
}

CentroCalidad.prototype = Object.create(Centro.prototype);
CentroCalidad.prototype.constructor = CentroCalidad;

module.exports = CentroCalidad;