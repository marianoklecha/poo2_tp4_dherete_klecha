const Local = require("./Local");
const CentroCalidad = require("../src/CentroCalidad");
const CentroDistribucion = require("./CentroDistribucion");
const CentroFacturacion = require("./CentroFacturacion");
const Centro = require("./Centro");
const Destino = require("../src/Destino");
const LineaDeProduccion=require("../src/LineaDeProduccion");

function MapaDeProduccion(){
    this.cantidadDeFilasDeProduccion=4;
    this.lineasDeProduccion= new Array();
    
    
    this.contarCantidadDePaquetes = function(indiceDeArr){
        var cont = 0;
        for(var i = 0; i<this.cantidadDeFilasDeProduccion;i++){
            cont+= this.lineasDeProduccion[i].circuito[indiceDeArr].paquetesEnCola.length;
        }
        return cont;
    }

    this.crearMapa=function(){
        for (var i=0;i< this.cantidadDeFilasDeProduccion;i++){
            this.lineasDeProduccion.push(new LineaDeProduccion(new Local(),new CentroCalidad(), new CentroDistribucion(),new CentroFacturacion(), new CentroCalidad(), new Destino()));
            this.lineasDeProduccion[i].circuito[0].generarPaquetes();
        }

    }
    this.cantidadCentros=function(){
        return 6;
    }

    this.llevarPaquetesADestino=function (movedor){
        for(var j=0; j<this.cantidadCentros()-1; j++){

            for(var i = 0; i<this.cantidadDeFilasDeProduccion;i++){

                for(var k = this.lineasDeProduccion[i].circuito.length-1;k>0;k--){ 
                    if(this.lineasDeProduccion[i].circuito[k-1].soyCentro()){
                        this.lineasDeProduccion[i].circuito[k-1].procesarPaquetesEnEspera();
                    }
                    movedor.moverPaquetes(this.lineasDeProduccion[i].circuito[k-1],this.lineasDeProduccion[i].circuito[k]);
               }

            }
        }
    }

}

module.exports=MapaDeProduccion;