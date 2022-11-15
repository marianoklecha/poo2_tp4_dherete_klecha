const Local = require("./Local");
const CentroCalidad = require("../src/CentroCalidad");
const CentroDistribucion = require("./CentroDistribucion");
const CentroFacturacion = require("./CentroFacturacion");
const Centro = require("./Centro");
const Destino = require("../src/Destino");
const LineaDeProduccion=require("../src/LineaDeProduccion");

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
        for(var i=0; i<this.cantidadCentros()-1;i++){
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


    this.llevarPaquetesADestino=function (movedor){
        for(var j=0; j<this.cantidadCentros()-1; j++){

            for(var i = 0; i<this.cantidadDeFilasDeProduccion;i++){

                for(var k = this.cantidadCentros()-1;k>0;k--){ //Recorriendo paquetes
                    origen = this.lineasDeProduccion[i].circuito[k-1];

                    if(origen.soyCentro()){
                        origen.procesarPaquetesEnEspera();

                        if(origen.paquetesProcesados.length != 0){
                            paqueteAPasar = origen.paquetesProcesados.pop();
                            destinoDelPaquete = paqueteAPasar.destino;
                            origen.paquetesProcesados.push(paqueteAPasar);

                            if(i>destinoDelPaquete){
                                destino = this.lineasDeProduccion[i-1].circuito[k];
                            } else if(i<destinoDelPaquete){
                                destino = this.lineasDeProduccion[i+1].circuito[k];
                            } else if(i==destinoDelPaquete){
                                destino = this.lineasDeProduccion[i].circuito[k];
                            } 

                            while(origen.paquetesProcesados.length != 0 && destino.puedeRecibirPaquetes()){

                                if(i>destinoDelPaquete){
                                    origen.pasarPaqueteA(this.lineasDeProduccion[i-1].circuito[k]);
                                } else if(i<destinoDelPaquete){
                                    origen.pasarPaqueteA(this.lineasDeProduccion[i+1].circuito[k]);
                                } else if(i==destinoDelPaquete){
                                    origen.pasarPaqueteA(this.lineasDeProduccion[i].circuito[k]);
                                }

                                if(origen.paquetesProcesados.length != 0){
                                    paqueteAPasar = origen.paquetesProcesados.pop();
                                    destinoDelPaquete = paqueteAPasar.destino;
                                    origen.paquetesProcesados.push(paqueteAPasar);

                                    if(i>destinoDelPaquete){
                                        destino = this.lineasDeProduccion[i-1].circuito[k];
                                    } else if(i<destinoDelPaquete){
                                        destino = this.lineasDeProduccion[i+1].circuito[k];
                                    } else if(i==destinoDelPaquete){
                                        destino = this.lineasDeProduccion[i].circuito[k];
                                    } 
                                }
                            }
                        }
                        
                    } else{
                        if(origen.paquetesEnCola.length != 0){
                            paqueteAPasar = origen.paquetesEnCola.pop();
                            destinoDelPaquete = paqueteAPasar.destino;
                            origen.paquetesEnCola.push(paqueteAPasar);

                            if(i>destinoDelPaquete){
                                destino = this.lineasDeProduccion[i-1].circuito[k];
                            } else if(i<destinoDelPaquete){
                                destino = this.lineasDeProduccion[i+1].circuito[k];
                            } else if(i==destinoDelPaquete){
                                destino = this.lineasDeProduccion[i].circuito[k];
                            } 

                            while(origen.paquetesEnCola.length!=0 &&  destino.puedeRecibirPaquetes()){
                                paqueteAPasar = origen.paquetesEnCola.pop();
                                destinoDelPaquete = paqueteAPasar.destino;
                                origen.paquetesEnCola.push(paqueteAPasar);

                                if(i>destinoDelPaquete){
                                    origen.pasarPaqueteA(this.lineasDeProduccion[i-1].circuito[k]);
                                } else if(i<destinoDelPaquete){
                                    origen.pasarPaqueteA(this.lineasDeProduccion[i+1].circuito[k]);
                                } else if(i==destinoDelPaquete){
                                    origen.pasarPaqueteA(this.lineasDeProduccion[i].circuito[k]);
                                }
                                if(origen.paquetesEnCola.length != 0){
                                    paqueteAPasar = origen.paquetesEnCola.pop();
                                    destinoDelPaquete = paqueteAPasar.destino;
                                    origen.paquetesEnCola.push(paqueteAPasar);

                                    if(i>destinoDelPaquete){
                                        destino = this.lineasDeProduccion[i-1].circuito[k];
                                    } else if(i<destinoDelPaquete){
                                        destino = this.lineasDeProduccion[i+1].circuito[k];
                                    } else if(i==destinoDelPaquete){
                                        destino = this.lineasDeProduccion[i].circuito[k];
                                    } 
                                }
                            }
                        }
                    }

                    
               }

            }
        }
    }

}

module.exports=MapaDeProduccion;