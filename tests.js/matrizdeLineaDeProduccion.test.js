
const MapaDeProduccion = require("../src/MapaDeProduccion");

test("Que la cantidad de lineas de produccion sean mayor o igual a la cantidad de locales",()=>{
    var mapaDeProduccion= new MapaDeProduccion();
    mapaDeProduccion.crearMapa();
    expect(mapaDeProduccion.cantidadCentros()).toBeGreaterThanOrEqual(mapaDeProduccion.cantidadDeFilasDeProduccion);
    
})

test("Que cada paquete tenga un destino",()=>{
    var paquete=new Paquete(6);
    expect(paquete.destino.valor).toBeLessOrEqual(4);
})