const Local = require("../src/Local");
const MapaDeProduccion = require("../src/MapaDeProduccion");
const Movedor = require("../src/Movedor");
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
    var movedor = new Movedor();

    mapaDeProduccion.crearMapa();

    var cantCreados = mapaDeProduccion.contarCantidadDePaquetes(0);
    //mapaDeProduccion.llevarPaquetesADestino(movedor);
    var cantRecibidos = mapaDeProduccion.cantidadDePaquetesRecibidos(5);

    expect(cantCreados).toBeLessThanOrEqual(cantRecibidos);
})