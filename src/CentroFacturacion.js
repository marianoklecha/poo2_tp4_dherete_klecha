const Centro = require('./Centro.js');

function CentroFacturacion(){
    Centro.call();
    if(!(this instanceof CentroFacturacion)){
        return new CentroFacturacion();
    }
    this.paquetesEnCola = new Array();
    this.paquetesProcesados = new Array();
    this.capacidadMaximaEnEspera=Math.floor(Math.random() * (7 - 3) + 3);

    this.procesar=function(){
        for(var i =0; i<3;i++){
            if(this.paquetesEnCola.length!=0){
                this.paquetesProcesados.push(this.paquetesEnCola[i]);
            }
        }
    }
}

CentroFacturacion.prototype = Object.create(Centro.prototype);
CentroFacturacion.prototype.constructor = CentroFacturacion;

module.exports = CentroFacturacion;