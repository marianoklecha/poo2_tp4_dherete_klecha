const Centro = require('./Centro.js');

function CentroDistribucion(){
    Centro.call();
    if(!(this instanceof CentroDistribucion)){
        return new CentroDistribucion();
    }
    this.paquetesEnCola = new Array();
    this.paquetesProcesados = new Array();

    this.capacidadMaximaEnEspera=Math.floor(Math.random() * (30 - 10) + 10);

    this.procesarPaquetesEnEspera=function(){
        for(var i =0; i<10;i++){
            if(this.paquetesEnCola.length!=0){
                this.paquetesProcesados.push(this.paquetesEnCola[i]);
            }
        }
    }
}


CentroDistribucion.prototype = Object.create(Centro.prototype);
CentroDistribucion.prototype.constructor = CentroDistribucion;

module.exports = CentroDistribucion;