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
