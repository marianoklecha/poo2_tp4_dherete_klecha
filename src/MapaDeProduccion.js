const Local = require("./Local");
const CentroCalidad = require("../src/CentroCalidad");
const CentroDistribucion = require("./CentroDistribucion");
const CentroFacturacion = require("./CentroFacturacion");
const Centro = require("./Centro");
const Destino = require("../src/Destino");
function MapaDeProduccion(){
    this.cantidadDeFilasDeProduccion=Math.random() * (6 - 1) + 1;

    this.lineasDeProduccion= new Array();
    this.crearMapa=function(){
        for (var i=0;i<4+ 1;i++){
            this.lineasDeProduccion.push(new LineaDeProduccion(new Local(),new CentroCalidad(), new CentroDistribucion(),new CentroFacturacion(), new CentroCalidad(), new Destino() ));
        }

    }
}

module.exports=MapaDeProduccion;