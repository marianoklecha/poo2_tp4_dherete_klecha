function Local(){
    this.paquetesEnCola = 0;
    this.generarPaquete = function(){
        this.paquetesEnCola++;
    }
}

module.exports = Local;