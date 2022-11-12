const CentroCalidad = require("../src/CentroCalidad");
const CentroFacturacion = require("../src/CentroFacturacion");
const CentroDistribucion = require("../src/CentroDistribucion");
const Destino = require("../src/Destino");
const Paquete = require("../src/Paquete");
const Movedor = require("../src/Movedor");
const Local = require("../src/Local");

test("Que centro de facturacion tenga como maximo entre 3 y 6 en espera",()=>{
    var centroFacturacion= new CentroFacturacion();
    paquetes=[new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete()];
    expect(()=>{centroFacturacion.recibirPaquete(paquetes)}).toThrow(new Error("El centro supera el maximo de paquetes"));
})

test("Que centro de facturacion tenga como maximo entre 2 y 5 en espera",()=>{
    var centroDeCalidad= new CentroCalidad();
    var paquetes=[new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete()];
    expect(()=>{centroDeCalidad.recibirPaquete(paquetes)}).toThrow(new Error("El centro supera el maximo de paquetes"));
   
})

test("Que centro de facturacion tenga como maximo entre 10 y 30 en espera",()=>{
    var centroDeDistribucion= new CentroDistribucion();
    var paquetes=[new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete()];
    expect(()=>{centroDeDistribucion.recibirPaquete(paquetes)}).toThrow(new Error("El centro supera el maximo de paquetes"));
   
})


test("Que centro de facturacion pueda procesar solo hasta 3 paquetes",()=>{
    var centroFacturacion= new CentroFacturacion();
    centroFacturacion.paquetesEnCola=[new Paquete(), new Paquete(),new Paquete(),new Paquete()];
    centroFacturacion.procesarPaquetesEnEspera();
    
    expect(centroFacturacion.paquetesProcesados.length).toBeLessThanOrEqual(3);
   
})

test("Que centro de calidad pueda procesar solo 1 paquete",()=>{
    var centroDeCalidad= new CentroCalidad();
    centroDeCalidad.paquetesEnCola=[new Paquete(), new Paquete(),new Paquete(),new Paquete()];
    centroDeCalidad.procesarPaquetesEnEspera();
    
    expect(centroDeCalidad.paquetesProcesados.length).toBeLessThanOrEqual(1);
   
})

test("Que centro de distribución pueda procesar solo hasta 10 paquetes",()=>{
    var centroDeDistribucion= new CentroDistribucion();
    centroDeDistribucion.paquetesEnCola=[new Paquete(), new Paquete(),new Paquete(),new Paquete(),
        new Paquete(), new Paquete(),new Paquete(),new Paquete(),
        new Paquete(), new Paquete(),new Paquete(),new Paquete()];
    centroDeDistribucion.procesarPaquetesEnEspera();
    
    expect(centroDeDistribucion.paquetesProcesados.length).toBeLessThanOrEqual(10);
   
})

test("Ordenar Paquetes en Local",()=>{
    var local=new Local();
    var destino=new Destino();
    var centroDeFacturacion=new CentroFacturacion();
    var centroDeCalidad=new CentroCalidad();
    var centroDistribucion= new CentroDistribucion();
    var lineaDeProduccion= new LineaDeProduccion(local,centroDeFacturacion,centroDeCalidad,centroDistribucion,destino);

    local.generarPaquetes(lineaDeProduccion.queLargoTiene());

    for (let i = 0; i < local.paquetesEnCola.length-1; i++) {
        expect(paquetesEnCola[i].urgencia).toBeLessThanOrEqual(paquetesEnCola[i].urgencia);
    }
})