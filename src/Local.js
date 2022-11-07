const Paquete = require("./Paquete");

function Local(){
    this.paquetesEnCola = new Array();
    this.generarPaquete = function(){

        this.paquetesEnCola.push(new Paquete());
        return this.paquetesEnCola.length;
    }
}

module.exports = Local;