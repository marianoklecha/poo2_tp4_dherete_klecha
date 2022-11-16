const MapaDeProduccion = require("../src/MapaDeProduccion");

test("Que lleguen paquetes y saber si llegó demorado",()=>{
    var mapaDeProduccion= new MapaDeProduccion();
    mapaDeProduccion.crearMapa();
    var cont = 1;
    var cantidadDeEnviosDePaquetes = 0;
    while(cont != 0){
        mapaDeProduccion.llevarPaquetesADestino();
        cont = 0;
        for (let index = 0; index < 5; index++) {
            cont+=mapaDeProduccion.contarCantidadDePaquetes(index);
        }
        if(cantidadDeEnviosDePaquetes < mapaDeProduccion.cantidadDeFilasDeProduccion){
            mapaDeProduccion.despacharPaquetes();
            cantidadDeEnviosDePaquetes+=1;
        }
    }
    expect(cont).toBe(0);
    expect(mapaDeProduccion.lineasDeProduccion[0].circuito[5].cantidadPaquetesDemorados).toBeGreaterThanOrEqual(0);
    expect(mapaDeProduccion.contarCantidadDePaquetes(5)).toBeGreaterThanOrEqual(1);
});