const Centro = require('./Centro.js');

function CentroFacturacion(){
    Centro.call();
    if(!(this instanceof CentroFacturacion)){
        return new CentroFacturacion();
    }
    this.paquetesEnCola = new Array();
    this.capacidadMaximaEnEspera=6;
<<<<<<< HEAD
    
=======

>>>>>>> a23c880a7ee11553df7d35bdb8b76adf55510ba4
}

CentroFacturacion.prototype = Object.create(Centro.prototype);
CentroFacturacion.prototype.constructor = CentroFacturacion;

module.exports = CentroFacturacion;