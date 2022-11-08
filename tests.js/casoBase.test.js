const Local = require("../src/Local");
const Destino = require("../src/Destino");
const CentroFacturacion = require("../src/CentroFacturacion");
const CentroCalidad = require("../src/CentroCalidad");
const CentroDistribucion = require("../src/CentroDistribucion");

test("Generar paquete en local", () =>  {
    localInicial = new Local();
    localInicial.generarPaquete();
    expect(localInicial.paquetesEnCola.length).toBe(1); 
})

test("Pasar paquete de local a centro de facturación", () =>  {
    localInicial = new Local();
    localInicial.generarPaquete();

    centroFacturacion = new CentroFacturacion();
    localInicial.pasarPaqueteA(centroFacturacion);
    
    expect(localInicial.paquetesEnCola.length).toBe(0); 
    expect(centroFacturacion.paquetesEnCola.length).toBe(1); 
})

test("Pasar paquete de centro de facturación a centro de calidad", () =>  {
    localInicial = new Local();
    localInicial.generarPaquete();

    centroFacturacion = new CentroFacturacion();
    localInicial.pasarPaqueteA(centroFacturacion);

    centroCalidad = new CentroCalidad();
    centroFacturacion.pasarPaqueteA(centroCalidad);

    expect(centroFacturacion.paquetesEnCola.length).toBe(0);
    expect(centroCalidad.paquetesEnCola.length).toBe(1); 
})

test("Pasar paquete de centro de calidad a centro de distribución", () =>  {
    localInicial = new Local();
    localInicial.generarPaquete();

    centroFacturacion = new CentroFacturacion();
    localInicial.pasarPaqueteA(centroFacturacion);

    centroCalidad = new CentroCalidad();
    centroFacturacion.pasarPaqueteA(centroCalidad);

    centroDistribucion = new CentroDistribucion();
    centroCalidad.pasarPaqueteA(centroDistribucion);

    expect(centroCalidad.paquetesEnCola.length).toBe(0);
    expect(centroDistribucion.paquetesEnCola.length).toBe(1); 
})

test("Pasar paquete de centro de distribución a Destino", () =>  {
    localInicial = new Local();
    localInicial.generarPaquete();

    centroFacturacion = new CentroFacturacion();
    localInicial.pasarPaqueteA(centroFacturacion);

    centroCalidad = new CentroCalidad();
    centroFacturacion.pasarPaqueteA(centroCalidad);

    centroDistribucion = new CentroDistribucion();
    centroCalidad.pasarPaqueteA(centroDistribucion);

    destino = new Destino();
    centroDistribucion.pasarPaqueteA(destino);

    expect(centroDistribucion.paquetesEnCola.length).toBe(0);
    expect(destino.paquetesEnCola.length).toBe(1); 
})