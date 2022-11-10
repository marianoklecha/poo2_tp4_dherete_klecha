const Producto = require('./Producto.js');

function Paquete(){
    this.productos = new Array(new Producto("Tijera",5));
    this.urgencia=Math.floor(Math.random() * (4 - 1) + 1);
}

module.exports = Paquete;