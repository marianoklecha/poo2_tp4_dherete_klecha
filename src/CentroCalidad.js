const Centro = require('./Centro.js');

function CentroCalidad(){
    Centro.call();
    if(!(this instanceof CentroCalidad)){
        return new CentroCalidad();
    }
    this.paquetesEnCola = new Array();
    this.paquetesProcesados=new Array();
    this.maximoAProcesar = 1;

    this.capacidadMaximaEnEspera = Math.floor(Math.random() * (6 - 2) + 2);

   
}
CentroCalidad.prototype = Object.create(Centro.prototype);
CentroCalidad.prototype.constructor = CentroCalidad;

module.exports = CentroCalidad;