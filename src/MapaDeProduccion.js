const Local = require("./Local");
const CentroCalidad = require("../src/CentroCalidad");
const CentroDistribucion = require("./CentroDistribucion");
const CentroFacturacion = require("./CentroFacturacion");
const Centro = require("./Centro");
const Destino = require("../src/Destino");
const LineaDeProduccion=require("../src/LineaDeProduccion");
const tiempoActual= require("../src/Tiempo");


function MapaDeProduccion(){
    this.cantidadCentros=function(){
        return 6
    }

    this.cantidadDeFilasDeProduccion =Math.floor( Math.random() * (this.cantidadCentros()+1 - 2) + 2);
    this.lineasDeProduccion= new Array();
    

    
    this.contarCantidadDePaquetes = function(indiceDeArr){
        var cont = 0;
        for(var i = 0; i<this.cantidadDeFilasDeProduccion;i++){

            if(this.lineasDeProduccion[i].circuito[indiceDeArr].soyCentro()){
             cont+= this.lineasDeProduccion[i].circuito[indiceDeArr].paquetesEnCola.length+this.lineasDeProduccion[i].circuito[indiceDeArr].paquetesProcesados.length;
            }
            else{
                cont+= this.lineasDeProduccion[i].circuito[indiceDeArr].paquetesEnCola.length
            }  
        }
        return cont;
    }

    this.contarPaquetesEnTotal=function(){
        var cont = 0;
        for(var i=0; i<this.cantidadCentros();i++){
            cont+=this.contarCantidadDePaquetes(i);
        }
        return cont;
    }

    this.crearMapa=function(){
        
        for (var i=0;i< this.cantidadDeFilasDeProduccion;i++){
            this.lineasDeProduccion.push(new LineaDeProduccion(new Local(),new CentroCalidad(), new CentroDistribucion(),new CentroFacturacion(), new CentroCalidad(), new Destino()));

            this.lineasDeProduccion[i].circuito[0].generarPaquetes(this.cantidadCentros(),this.cantidadDeFilasDeProduccion);
        }

    }

    this.subeBajaOContinua = function(lineaActual,destinoPaquete){
        var valorASumar; 
        if(lineaActual>destinoPaquete){
            valorASumar = -1; //Sube diagonalmente
        } else if(lineaActual<destinoPaquete){
            valorASumar = 1; //Baja diagonalmente
        } else if(lineaActual==destinoPaquete){
            valorASumar = 0; //Sigue en la misma
        }
        return valorASumar;
    }
    
    this.llevarPaquetesADestino=function (movedor){ 
        for(var j=0; j<this.cantidadCentros()-1; j++){ // Repite cantidadDeCentros veces para que todos lleguen a destino
            for(var i = 0; i<this.cantidadDeFilasDeProduccion;i++){ //Recorre cada una de las filas
                for(var k = this.cantidadCentros()-1;k>0;k--){ // Moviendo paquetes de cada local o centro al siguiente
                    origen = this.lineasDeProduccion[i].circuito[k-1];

                    if(origen.soyCentro()){
                        origen.procesarPaquetesEnEspera();
                        paquetesParaMover = origen.paquetesProcesados;
                    }else{
                        paquetesParaMover = origen.paquetesEnCola;
                    }

                    if(paquetesParaMover.length != 0){
                        paqueteAPasar = paquetesParaMover.pop();
                        destinoDelPaquete = paqueteAPasar.destino;
                        paquetesParaMover.push(paqueteAPasar);

                        var cambioDeLinea = this.subeBajaOContinua(i,destinoDelPaquete);
                        destino = this.lineasDeProduccion[i+cambioDeLinea].circuito[k];

                        while(paquetesParaMover.length != 0 && destino.puedeRecibirPaquetes()){

                            origen.pasarPaqueteA(destino);

                            if(paquetesParaMover.length != 0){
                                paqueteAPasar = paquetesParaMover.pop();
                                destinoDelPaquete = paqueteAPasar.destino;
                                paquetesParaMover.push(paqueteAPasar);

                                var cambioDeLinea = this.subeBajaOContinua(i,destinoDelPaquete);
                                destino = this.lineasDeProduccion[i+cambioDeLinea].circuito[k];
                            }
                        }
                    }
                }
                tiempoActual.sumarTiempo();
            }
        }

    }

}

module.exports=MapaDeProduccion;