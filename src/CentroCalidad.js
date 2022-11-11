const Centro = require('./Centro.js');

function CentroCalidad(){
    Centro.call();
    if(!(this instanceof CentroCalidad)){
        return new CentroCalidad();
    }
    this.paquetesEnCola = new Array();
    this.paquetesProcesados=new Array();
    this.capacidadMaximaEnEspera = Math.floor(Math.random() * (6 - 2) + 2);

    this.procesar=function(){
        if(this.paquetesEnCola.length!=0){
            this.paquetesProcesados.push(this.paquetesEnCola[0]);
        }
    }
}
CentroCalidad.prototype = Object.create(Centro.prototype);
CentroCalidad.prototype.constructor = CentroCalidad;

module.exports = CentroCalidad;