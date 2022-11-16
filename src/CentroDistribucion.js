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
    }
    

    this.unificar=function(){
        if(this.paquetesProcesados.lenght>=2){
        console.log("ENTRAAAAAAAAAAAAA")
        this.paquetesProcesados.sort(((a, b) => b.destino - a.destino));
        for(var i=this.paquetesProcesados.length-1;i>=1;i--){
            if(this.paquetesProcesados[i].urgencia>this.paquetesProcesados[i-1].urgencia && this.paquetesProcesados[i].destino==this.paquetesProcesados[i-1].destino){
                
                var paqueteUnificado=new Paquete();
                this.paqueteUnificado.destino= this.paquetesProcesados[i].destino;
                this.paqueteUnificado.urgencia=this.paquetesProcesados[i-1].urgencia;
                this.paquetesProcesados.splice((i-1),2);
                this.paqueteUnificado.productos=this.paquetesProcesados[i].productos.concat(this.paquetesProcesados[i-1].productos);
                this.paquetesProcesados.pop(paqueteUnificado);

                this.paquetesProcesados.sort(((a, b) => b.destino - a.destino));
            }
        }
        this.ordenarPaquetesSegunUrgencia();
    }
    }
}


CentroDistribucion.prototype = Object.create(Centro.prototype);
CentroDistribucion.prototype.constructor = CentroDistribucion;

module.exports = CentroDistribucion;