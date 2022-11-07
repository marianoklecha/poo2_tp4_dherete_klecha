const Local = require("../src/Local");

test("Primer test", () =>  {
    localInicial = new Local();
    localInicial.generarPaquete();
    expect(localInicial.paquetesEnCola).toBe(1); 
}) 