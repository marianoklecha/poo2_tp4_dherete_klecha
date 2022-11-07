const Local = require("../src/Local");

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