

 

const Local = require("../src/Local");
const Destino = require("../src/Destino");
const CentroFacturacion = require("../src/CentroFacturacion");
const CentroCalidad = require("../src/CentroCalidad");
const CentroDistribucion = require("../src/CentroDistribucion");
const LineaDeProduccion=require("../src/LineaDeProduccion");
const Movedor = require("../src/Movedor");
const { default: expect } = require("expect");
const tiempoActual = require("../src/Tiempo");


test("Crear linea de produccion mínima",()=>{
    var local=new Local();
    var destino=new Destino();
    var centroDeFacturacion=new CentroFacturacion();
    var centroDeCalidad=new CentroCalidad();
    var centroDistribucion= new CentroDistribucion();
    var lineaDeProduccion= new LineaDeProduccion(local,centroDeFacturacion,centroDeCalidad,centroDistribucion,destino);
    expect(lineaDeProduccion.circuito.length).toBe(5);
})

test("Mover paquete desde local hasta destino",()=>{
    var local=new Local();
    var destino=new Destino();
    var centroDeFacturacion=new CentroFacturacion();
    var centroDeCalidad=new CentroCalidad();
    var centroDistribucion= new CentroDistribucion();
    var lineaDeProduccion= new LineaDeProduccion(local,centroDeFacturacion,centroDeCalidad,centroDistribucion,destino);
    var movedor=new Movedor();
    lineaDeProduccion.recorrerCircuito(movedor);
    expect(tiempoActual.cuantoTiempoPaso()).toBe(lineaDeProduccion.circuito.length-1);
    
})