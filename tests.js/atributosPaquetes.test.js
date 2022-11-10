const Local = require("../src/Local");
const Destino = require("../src/Destino");
const CentroFacturacion = require("../src/CentroFacturacion");
const CentroCalidad = require("../src/CentroCalidad");
const CentroDistribucion = require("../src/CentroDistribucion");

test("Paquete con productos", () =>  {
    localInicial = new Local();
    localInicial.generarPaquetes();

    (localInicial.paquetesEnCola).forEach(paquete => {
        expect(paquete.productos.length).toBe(1)
    });


})

test("Paquete con urgencia 1", ()=>{
    localInicial = new Local();
    localInicial.generarPaquetes();
    (localInicial.paquetesEnCola).forEach(paquete => {
        
        expect(paquete.urgencia).toBe(1)
    });

})