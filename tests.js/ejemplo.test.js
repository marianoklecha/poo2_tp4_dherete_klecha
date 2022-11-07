
test("Primer test", () =>  {
    localInicial = new Local();
    localInicial.generarPaquete();
    Expect(localInicial.paquetesEnCola).toBe(1); 
}) 