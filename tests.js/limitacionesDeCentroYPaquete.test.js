
const CentroCalidad = require("../src/CentroCalidad");
const CentroFacturacion = require("../src/CentroFacturacion");
const CentroDistribucion = require("../src/CentroDistribucion");
const Paquete = require("../src/Paquete");

test("Que centro de facturacion tenga como minimo 3 paquetes y maximo 6 en espera",()=>{
    var centroFacturacion= new CentroFacturacion();
    paquetes=[new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete()];
    expect(()=>{centroFacturacion.recibirPaquete(paquetes)}).toThrow(new Error("El centro supera el maximo de paquetes"));
})

test("Que centro de facturacion tenga como minimo 2 paquetes y maximo 5 en espera",()=>{
    var centroDeCalidad= new CentroCalidad();
    var paquete=new Paquete();  
    expect(()=>{centroDeCalidad.recibirPaquete(paquete)}).toThrow(new Error("El centro supera el maximo de paquetes"));
    var paquetes=[new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete()];
    expect(()=>{centroDeCalidad.recibirPaquete(paquetes)}).toThrow(new Error("El centro supera el maximo de paquetes"));
   
})

test("Que centro de facturacion tenga como minimo 10 paquetes y maximo 30 en espera",()=>{
    var centroDeDistribucion= new CentroDistribucion();
    var paquete=new Paquete();  
    expect(()=>{centroDeDistribucion.recibirPaquete(paquete)}).toThrow(new Error("El centro supera el maximo de paquetes"));
    var paquetes=[new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete()];
    expect(()=>{centroDeDistribucion.recibirPaquete(paquetes)}).toThrow(new Error("El centro supera el maximo de paquetes"));
   
})


