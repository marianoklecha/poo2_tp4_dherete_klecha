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
        for(var i =0; i<3;i++){
            if(this.paquetesEnCola.length!=0){
                this.paquetesProcesados.push(this.paquetesEnCola[i]);
            }
        }
    }
}
CentroCalidad.prototype = Object.create(Centro.prototype);
CentroCalidad.prototype.constructor = CentroCalidad;

module.exports = CentroCalidad;