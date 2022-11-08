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

test("Pasar paquete hasta Centro de Calidad y tiempo en 2", () =>  {
    localInicial = new Local();
    centroFacturacion = new CentroFacturacion();
    centroCalidad = new CentroCalidad();
    tiempo = new Tiempo();

    localInicial.generarPaquete();
    tiempo.moverPaquete(localInicial,centroFacturacion);
    tiempo.moverPaquete(centroFacturacion,centroCalidad);

    expect(centroFacturacion.paquetesEnCola.length).toBe(0);
    expect(centroCalidad.paquetesEnCola.length).toBe(1);
    expect(tiempo.tiempoActual).toBe(2);
})

test("Pasar paquete hasta Centro de Distribución y tiempo en 3", () =>  {
    localInicial = new Local();
    centroFacturacion = new CentroFacturacion();
    centroCalidad = new CentroCalidad();
    centroDistribucion = new CentroDistribucion();
    tiempo = new Tiempo();

    localInicial.generarPaquete();
    tiempo.moverPaquete(localInicial,centroFacturacion);
    tiempo.moverPaquete(centroFacturacion,centroCalidad);
    tiempo.moverPaquete(centroCalidad,centroDistribucion);

    expect(centroCalidad.paquetesEnCola.length).toBe(0);
    expect(centroDistribucion.paquetesEnCola.length).toBe(1);
    expect(tiempo.tiempoActual).toBe(3);
})