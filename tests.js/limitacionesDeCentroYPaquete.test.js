
const CentroFacturacion = require("../src/CentroFacturacion");
const Paquete = require("../src/Paquete");

test("Que centro de facturacion tenga como minimo 3 paquetes",()=>{
    var centroFacturacion= new CentroFacturacion();
    var paquetes=[new Paquete(), new Paquete()];   
    expect(centroFacturacion.recibirPaquete(paquetes)).toThrow(new Error("El centro supera el maximo o no llega al minimo de paquetes"));
})