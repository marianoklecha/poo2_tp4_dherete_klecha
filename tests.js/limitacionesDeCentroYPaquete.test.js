
const CentroCalidad = require("../src/CentroCalidad");
const CentroFacturacion = require("../src/CentroFacturacion");
const CentroDistribucion = require("../src/CentroDistribucion");
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


test("Que centro de facturacion pueda procesar hasta 3 paquetes",()=>{
    var centroFacturacion= new CentroFacturacion();
    var local=new Local();
    local.generarPaquetes();
    var movedor=new Movedor();
    movedor.moverPaquetes(local,centroFacturacion);
    
    centroFacturacion.procesar();
    
    expect(centroFacturacion.paquetesProcesados.length).toBeLessThanOrEqual(3);
   
})


