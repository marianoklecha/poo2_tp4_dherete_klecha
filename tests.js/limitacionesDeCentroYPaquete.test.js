
const CentroFacturacion = require("../src/CentroFacturacion");
const Paquete = require("../src/Paquete");

test("Que centro de facturacion tenga como minimo 3 paquetes",()=>{
    var centroFacturacion= new CentroFacturacion();
    var paquetes=[new Paquete(), new Paquete()];   
    expect(centroFacturacion.recibirPaquete()).toThrow(new Error("El centro de facturacion tiene que recibir minimo 3 paquetes"));
})