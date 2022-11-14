const CentroCalidad = require("../src/CentroCalidad");
const CentroDistribucion = require("../src/CentroDistribucion");
const CentroFacturacion = require("../src/CentroFacturacion");

test("Que la cantidad de lineas de produccion sean mayor o igual a la cantidad de locales",()=>{
    var mapaDeProduccion= new MapaDeProduccion();
    expect(mapaDeProduccion.cantidadDeCentros).toBeGreaterThanOrEqual(mapaDeProduccion.filasDeProduccion.length);
    
})