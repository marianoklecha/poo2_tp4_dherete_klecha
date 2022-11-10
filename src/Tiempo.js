var tiempoActual = (function(){
    var tiempo = 0;
    function sumarTiempo(){
        tiempo++;
    }
    function cuantoTiempoPaso() {
        return tiempo;
    }
    function resetearTiempo() {
        tiempo=0;
    }
    return {
        sumarTiempo:sumarTiempo,
        cuantoTiempoPaso:cuantoTiempoPaso,
        resetearTiempo:resetearTiempo
    }
})();

module.exports = tiempoActual;
