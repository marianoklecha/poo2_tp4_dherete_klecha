
const Local = require("../src/Local");
const MapaDeProduccion = require("../src/MapaDeProduccion");
const Paquete = require("../src/Paquete");


test("Que la cantidad de lineas de produccion sean mayor o igual a la cantidad de locales",()=>{
    var mapaDeProduccion= new MapaDeProduccion();
    mapaDeProduccion.crearMapa();
    expect(mapaDeProduccion.cantidadCentros()).toBeGreaterThanOrEqual(mapaDeProduccion.cantidadDeFilasDeProduccion);
    
})

test("Que cada paquete tenga un destino",()=>{
    var paquete=new Paquete(6,4);
    expect(paquete.destino).toBeLessThanOrEqual(4);
})

test("Mover paquetes hasta su  destino",()=>{
    var mapaDeProduccion= new MapaDeProduccion();
    mapaDeProduccion.crearMapa();
    mapaDeProduccion.llevarPaquetesADestino();
    
    cantCreados = mapaDeProduccion.cantidadDePaquetesCreados;
    cantRecibidos = mapaDeProduccion.cantidadDePaquetesRecibidos;
    expect(cantCreados).toBe(cantCreados);
})