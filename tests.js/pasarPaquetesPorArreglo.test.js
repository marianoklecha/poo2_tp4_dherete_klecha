// LineaDeProduccion  = [ localInicial, centroFacturacion, centroCalidad, centroDistribucion, destino ] 

// LargoLinea = lineaDeProduccion.obtenerLargo(); 

// for(var i = LargoLinea; i--;i>0){ 

// Tiempo.moverPaquetes(lineadeProduccion[i-1],lineadeProduccion[i]); 

// } 

const Local = require("../src/Local");
const Destino = require("../src/Destino");
const CentroFacturacion = require("../src/CentroFacturacion");
const CentroCalidad = require("../src/CentroCalidad");
const CentroDistribucion = require("../src/CentroDistribucion");


test("Crear linea de produccion mínima",()=>{
    var local=new Local();
    var destino=new Destino();
    var centroDeFacturacion=new CentroFacturacion();
    var centroDeCalidad=new CentroCalidad();
    var centroDistribucion= new CentroDistribucion();
    var lineaDeProduccion= new LineaDeProduccion(local,centroDeFacturacion,centroDeCalidad,centroDistribucion,destino);
    expect(lineaDeProduccion.circuito.length).toBe(5);
})