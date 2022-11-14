
const MapaDeProduccion = require("../src/MapaDeProduccion");



test("Que la cantidad de lineas de produccion sean mayor o igual a la cantidad de locales",()=>{
    var mapaDeProduccion= new MapaDeProduccion();
    mapaDeProduccion.crearMapa();
    expect(mapaDeProduccion.centros.length).toBeGreaterThanOrEqual(mapaDeProduccion.cantidadDeFilasDeProduccion.length);
    
})