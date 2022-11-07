const Local = require("../src/Local");

test("Generar paquete en local", () =>  {
    localInicial = new Local();
    localInicial.generarPaquete();
    expect(localInicial.paquetesEnCola.length).toBe(1); 
}) 