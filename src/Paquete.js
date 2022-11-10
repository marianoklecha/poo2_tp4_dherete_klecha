const Producto = require('./Producto.js');

function Paquete(){
    this.productos = new Array(new Producto("Tijera",5));
    this.urgencia= 1;
}

module.exports = Paquete;