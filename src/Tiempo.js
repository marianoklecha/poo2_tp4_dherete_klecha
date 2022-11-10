var tiempoActual = (function(){
    var tiempo = 0;
    function sumarTiempo(){
        tiempo++;
    }
    function cuantoTiempoPaso() {
        return tiempo;
    }
    return {
        sumarTiempo:sumarTiempo,
        cuantoTiempoPaso:cuantoTiempoPaso
    }
})();

module.exports = tiempoActual;
