const Local = require("../src/Local");
const Destino = require("../src/Destino");
const CentroFacturacion = require("../src/CentroFacturacion");
const CentroCalidad = require("../src/CentroCalidad");
const CentroDistribucion = require("../src/CentroDistribucion");
const LineaDeProduccion=require("../src/LineaDeProduccion");

test("Paquete con productos", () =>  {
    localInicial = new Local();
    localInicial.generarPaquetes();

    (localInicial.paquetesEnCola).forEach(paquete => {
        expect(paquete.productos.length).toBe(2)
    });


})

test("Paquete con tiempo de urgencia largoLinea*(1, 1.5 o 2)", ()=>{
    var local=new Local();
    var destino=new Destino();
    var centroDeFacturacion=new CentroFacturacion();
    var centroDeCalidad=new CentroCalidad();
    var centroDistribucion= new CentroDistribucion();
    var lineaDeProduccion= new LineaDeProduccion(local,centroDeFacturacion,centroDeCalidad,centroDistribucion,destino);
    var largoLineaDeProduccion = lineaDeProduccion.queLargoTiene();

    local.generarPaquetes(largoLineaDeProduccion);
    (local.paquetesEnCola).forEach(paquete => {

        expect(paquete.urgencia).toBeGreaterThanOrEqual(largoLineaDeProduccion);
        expect(paquete.urgencia).toBeLessThanOrEqual(largoLineaDeProduccion*2);
    });

})
