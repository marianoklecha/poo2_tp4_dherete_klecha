const Centro = require('./Centro.js');
const Paquete = require('./Paquete.js');

function CentroDistribucion(){
    Centro.call();
    if(!(this instanceof CentroDistribucion)){
        return new CentroDistribucion();
    }
    this.paquetesEnCola = new Array();
    this.paquetesProcesados = new Array();
    this.maximoAProcesar = 10;

    this.capacidadMaximaEnEspera=Math.floor(Math.random() * (30 - 10) + 10);

    this.procesarPaquetesEnEspera=function(){
        var cont=0;
        while(cont<this.maximoAProcesar && this.paquetesEnCola.length!=0){
            if(this.paquetesEnCola.length!=0){
                var paquete=this.paquetesEnCola.pop()
                this.paquetesProcesados.push(paquete);
            }
            cont+=1;
            
        }
        this.ordenarPaquetesSegunUrgencia(this.paquetesProcesados);
        this.unificar();
        this.ordenarPaquetesSegunUrgencia(this.paquetesProcesados);
    }
    

    this.unificar=function(){
        if(this.paquetesProcesados.length>1){
            this.paquetesProcesados.sort(((a, b) => b.destino - a.destino));
            
            for(var i=0;i<this.paquetesProcesados.length-1;i++){
                var paqueteUnificado=new Paquete();
                if(this.paquetesProcesados[i].destino==this.paquetesProcesados[i+1].destino){
                    paqueteUnificado.destino=(this.paquetesProcesados[i].destino);
                    paqueteUnificado.urgencia=this.paquetesProcesados[i+1].urgencia;
                    paqueteUnificado.productos=this.paquetesProcesados[i].productos.concat(this.paquetesProcesados[i+1].productos);
                    
                    this.paquetesProcesados.splice(i,2,paqueteUnificado);
                    i=-1;
                }
                this.paquetesProcesados.sort(((a, b) => b.destino - a.destino));
            }
            this.ordenarPaquetesSegunUrgencia(this.paquetesProcesados);
        }
    }
    
}


CentroDistribucion.prototype = Object.create(Centro.prototype);
CentroDistribucion.prototype.constructor = CentroDistribucion;

module.exports = CentroDistribucion;