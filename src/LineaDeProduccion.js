
function LineaDeProduccion(...estaciones){
    this.circuito= estaciones;
    
    this.recorrerCircuito=function(movedor){
        for(var i = this.circuito.length-1;i>0;i--){ 
            if(this.circuito[i].soyCentro()){
                this.circuito[i].procesarPaquetesEnEspera();
            }
            movedor.moverPaquetes(this.circuito[i-1],this.circuito[i]);
       }
   }
   this.queLargoTiene = function(){
        return this.circuito.length;
   }
}
module.exports=LineaDeProduccion;