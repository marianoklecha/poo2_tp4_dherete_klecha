
const CentroCalidad = require("../src/CentroCalidad");
const CentroFacturacion = require("../src/CentroFacturacion");
const Paquete = require("../src/Paquete");

test("Que centro de facturacion tenga como minimo 3 paquetes y maximo 6 en espera",()=>{
    var centroFacturacion= new CentroFacturacion();
    var paquetes=[new Paquete(),new Paquete()];  
    expect(()=>{centroFacturacion.recibirPaquete(paquetes)}).toThrow(new Error("El centro supera el maximo o no llega al minimo de paquetes"));
    var paquetes= paquetes[0];
    expect(()=>{centroFacturacion.recibirPaquete(paquetes)}).toThrow(new Error("El centro supera el maximo o no llega al minimo de paquetes"));
    paquetes=[new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete()];
    expect(()=>{centroFacturacion.recibirPaquete(paquetes)}).toThrow(new Error("El centro supera el maximo o no llega al minimo de paquetes"));
})

test("Que centro de facturacion tenga como minimo 2 paquetes y maximo 5 en espera",()=>{
    var centroDeCalidad= new CentroCalidad();
    var paquete=new Paquete();  
    expect(()=>{CentroCalidad.recibirPaquete(paquetes)}).toThrow(new Error("El centro supera el maximo o no llega al minimo de paquetes"));
    var paquetes=[new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete(),new Paquete()];
    expect(()=>{centroCalidad.recibirPaquete(paquetes)}).toThrow(new Error("El centro supera el maximo o no llega al minimo de paquetes"));
   
})