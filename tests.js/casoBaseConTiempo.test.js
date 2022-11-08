const Local = require("../src/Local");
const Destino = require("../src/Destino");
const CentroFacturacion = require("../src/CentroFacturacion");
const CentroCalidad = require("../src/CentroCalidad");
const CentroDistribucion = require("../src/CentroDistribucion");
const Tiempo = require("../src/Tiempo");

test("Crear paquete con tiempo en 0", () =>  {
    localInicial = new Local();
    localInicial.generarPaquete();
    tiempo = new Tiempo();

    expect(localInicial.paquetesEnCola.length).toBe(1);
    expect(tiempo.tiempoActual).toBe(0);
})

test("Pasar paquete y sumar tiempo", () =>  {
    localInicial = new Local();
    localInicial.generarPaquete();
    centroFacturacion = new CentroFacturacion();
    
    tiempo = new Tiempo();
    tiempo.moverPaquete(localInicial,centroFacturacion);

    expect(localInicial.paquetesEnCola.length).toBe(0);
    expect(centroFacturacion.paquetesEnCola.length).toBe(1);
    expect(tiempo.tiempoActual).toBe(1);
})