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


test("Que lleguen TODOS los paquetes a destino",()=>{
    var mapaDeProduccion= new MapaDeProduccion();
    var movedor = new Movedor();

    mapaDeProduccion.crearMapa();

    var cantCreados = mapaDeProduccion.contarCantidadDePaquetes(0);

    mapaDeProduccion.llevarPaquetesADestino(movedor);

    var cantidadTotal = mapaDeProduccion.contarPaquetesEnTotal();
    expect(cantCreados).toBe(cantidadTotal);
})

test("Que lleguen TODOS los paquetes a destino",()=>{
    var mapaDeProduccion= new MapaDeProduccion();
    var movedor = new Movedor();

    mapaDeProduccion.crearMapa();

    var cantidadTotal = mapaDeProduccion.contarPaquetesEnTotal();
    var cantRecibidos = mapaDeProduccion.contarCantidadDePaquetes(mapaDeProduccion.lineasDeProduccion[0].circuito.length-1);
    while(cantidadTotal-cantRecibidos!=0){
        mapaDeProduccion.llevarPaquetesADestino(movedor);
        cantRecibidos = mapaDeProduccion.contarCantidadDePaquetes(mapaDeProduccion.lineasDeProduccion[0].circuito.length-1);
    }

  
    
    expect(cantidadTotal).toBe(cantRecibidos);
})

test("Que lleguen TODOS los paquetes a destino con tiempo restando urgencia",()=>{
    var mapaDeProduccion= new MapaDeProduccion();
    var movedor = new Movedor();

    mapaDeProduccion.crearMapa();
    var cantidadTotal = mapaDeProduccion.contarPaquetesEnTotal();
    cantRecibidos = mapaDeProduccion.contarCantidadDePaquetes(mapaDeProduccion.lineasDeProduccion[0].circuito.length-1);

    while(cantidadTotal-cantRecibidos!=0){
        mapaDeProduccion.llevarPaquetesADestino(movedor);
        cantRecibidos = mapaDeProduccion.contarCantidadDePaquetes(mapaDeProduccion.lineasDeProduccion[0].circuito.length-1);
    }

    for(var i=0;i<mapaDeProduccion.cantidadDeFilasDeProduccion;i++){
        (mapaDeProduccion.lineasDeProduccion[i].circuito[5].paquetesEnCola).forEach(paquete => {
            expect(paquete.urgencia).toBeLessThanOrEqual(7);
        });
    
    }
    
})
