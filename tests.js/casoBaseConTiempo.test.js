const Local = require("../src/Local");
const Destino = require("../src/Destino");
const CentroFacturacion = require("../src/CentroFacturacion");
const CentroCalidad = require("../src/CentroCalidad");
const CentroDistribucion = require("../src/CentroDistribucion");
const tiempoActual= require("../src/Tiempo");
const Movedor= require("../src/Movedor");


test("Crear paquetes con tiempo en 0", () =>  {
    localInicial = new Local();
    localInicial.generarPaquetes();
    cantPaquetes = localInicial.paquetesEnCola.length;
    expect(localInicial.paquetesEnCola.length).toBe(cantPaquetes);
    expect(tiempoActual.cuantoTiempoPaso()).toBe(0);
})

test("Pasar paquete y sumar tiempo", () =>  {
    localInicial = new Local();
    localInicial.generarPaquetes();
    cantPaquetes = localInicial.paquetesEnCola.length;
    centroFacturacion = new CentroFacturacion();
    movedor=new Movedor();
  
    movedor.moverPaquetes(localInicial,centroFacturacion);

    expect(localInicial.paquetesEnCola.length).toBe(0);

    expect(centroFacturacion.paquetesEnCola.length).toBe(cantPaquetes);
    expect(tiempoActual.cuantoTiempoPaso()).toBe(1);
})

test("Pasar paquete hasta Centro de Calidad y tiempo en 2", () =>  {
    localInicial = new Local();
    centroFacturacion = new CentroFacturacion();
    centroCalidad = new CentroCalidad();
    movedor=new Movedor();
    tiempoActual.resetearTiempo();

    localInicial.generarPaquetes();
    cantPaquetes = localInicial.paquetesEnCola.length;
    movedor.moverPaquetes(localInicial,centroFacturacion);
    movedor.moverPaquetes(centroFacturacion,centroCalidad);

    expect(centroFacturacion.paquetesEnCola.length).toBe(0);
    expect(centroCalidad.paquetesEnCola.length).toBe(cantPaquetes);
    expect(tiempoActual.cuantoTiempoPaso()).toBe(2);
})

test("Pasar paquete hasta Centro de Distribución y tiempo en 3", () =>  {
    localInicial = new Local();
    centroFacturacion = new CentroFacturacion();
    centroCalidad = new CentroCalidad();
    centroDistribucion = new CentroDistribucion();
    movedor=new Movedor();
    tiempoActual.resetearTiempo();

    localInicial.generarPaquetes();
    cantPaquetes = localInicial.paquetesEnCola.length;
    movedor.moverPaquetes(localInicial,centroFacturacion);
    movedor.moverPaquetes(centroFacturacion,centroCalidad);
    movedor.moverPaquetes(centroCalidad,centroDistribucion);

    expect(centroCalidad.paquetesEnCola.length).toBe(0);
    expect(centroDistribucion.paquetesEnCola.length).toBe(cantPaquetes);
    expect(tiempoActual.cuantoTiempoPaso()).toBe(3);
})

test("Pasar paquete hasta Destino y tiempo en 4", () =>  {
    localInicial = new Local();
    centroFacturacion = new CentroFacturacion();
    centroCalidad = new CentroCalidad();
    centroDistribucion = new CentroDistribucion();
    destino = new Destino();
    movedor=new Movedor();
    tiempoActual.resetearTiempo();

    localInicial.generarPaquetes();
    cantPaquetes = localInicial.paquetesEnCola.length;
    movedor.moverPaquetes(localInicial,centroFacturacion);
    movedor.moverPaquetes(centroFacturacion,centroCalidad);
    movedor.moverPaquetes(centroCalidad,centroDistribucion);
    movedor.moverPaquetes(centroDistribucion,destino);

    expect(centroDistribucion.paquetesEnCola.length).toBe(0);
    expect(destino.paquetesEnCola.length).toBe(cantPaquetes);
    expect(tiempoActual.cuantoTiempoPaso()).toBe(4);
})

test("Pasar cantidad random de paquetes hasta Destino", () =>  {
    localInicial = new Local();
    centroFacturacion = new CentroFacturacion();
    centroCalidad = new CentroCalidad();
    centroDistribucion = new CentroDistribucion();
    destino = new Destino();
    movedor=new Movedor();

    localInicial.generarPaquetes();
    cantPaquetes = localInicial.paquetesEnCola.length;
    movedor.moverPaquetes(localInicial,centroFacturacion);
    movedor.moverPaquetes(centroFacturacion,centroCalidad);
    movedor.moverPaquetes(centroCalidad,centroDistribucion);
    movedor.moverPaquetes(centroDistribucion,destino);

    expect(centroDistribucion.paquetesEnCola.length).toBe(0);
    expect(destino.paquetesEnCola.length).toBe(cantPaquetes);
    expect(tiempoActual.cuantoTiempoPaso()).toBe(4);
})