const Local = require("../src/Local");
const MapaDeProduccion = require("../src/MapaDeProduccion");
const Movedor = require("../src/Movedor");
const Paquete = require("../src/Paquete");
const CentroDistribucion = require("../src/CentroDistribucion");

test("Que la cantidad de lineas de produccion sean mayor o igual a la cantidad de locales",()=>{
    var mapaDeProduccion= new MapaDeProduccion();
    mapaDeProduccion.crearMapa();
    expect(mapaDeProduccion.cantidadCentros()).toBeGreaterThanOrEqual(mapaDeProduccion.cantidadDeFilasDeProduccion);
    
})

test("Que cada paquete tenga un destino",()=>{
    var paquete=new Paquete(6,4);
    expect(paquete.destino).toBeLessThanOrEqual(4);
})

test("Mover paquetes hasta su destino CASO LINEAL",()=>{
    var mapaDeProduccion= new MapaDeProduccion();
    var movedor = new Movedor();

    mapaDeProduccion.crearMapa();

    var cantCreados = mapaDeProduccion.contarCantidadDePaquetes(0);
    mapaDeProduccion.llevarPaquetesADestino(movedor);
    var cantRecibidos = mapaDeProduccion.contarCantidadDePaquetes(5);

    expect(cantCreados).toBeGreaterThanOrEqual(cantRecibidos);
})

test("Mover paquetes hasta su destino CASO NO LINEAL SIN NUMEROS FIJOS, CON RANDOM",()=>{
    var mapaDeProduccion= new MapaDeProduccion();
    var movedor = new Movedor();

    mapaDeProduccion.crearMapa();
    var cantCreados = mapaDeProduccion.contarCantidadDePaquetes(0);
    mapaDeProduccion.llevarPaquetesADestino(movedor);
    var cantRecibidos = mapaDeProduccion.contarCantidadDePaquetes(mapaDeProduccion.lineasDeProduccion[0].circuito.length-1);
    expect(cantRecibidos).toBeLessThanOrEqual(cantCreados);
})

test("Unir paquetes con mismo destino",()=>{
    var centroDistribucion= new CentroDistribucion();
    centroDistribucion.paquetesEnCola.push(new Paquete(5,1));
    centroDistribucion.paquetesEnCola.push(new Paquete(5,1));
    centroDistribucion.paquetesEnCola.push(new Paquete(5,1));
    centroDistribucion.paquetesEnCola.push(new Paquete(5,1));
    centroDistribucion.paquetesEnCola.push(new Paquete(5,1));
    centroDistribucion.paquetesEnCola.push(new Paquete(5,1));
    centroDistribucion.paquetesEnCola.push(new Paquete(5,1));
    centroDistribucion.paquetesEnCola.push(new Paquete(5,1));
    centroDistribucion.paquetesEnCola.push(new Paquete(5,1));
    centroDistribucion.paquetesEnCola.push(new Paquete(5,1));

    centroDistribucion.procesarPaquetesEnEspera();
    expect(centroDistribucion.paquetesProcesados.length).toBe(1);
    
    
})
