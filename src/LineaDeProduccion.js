function LineaDeProduccion(...estaciones){
    this.circuito= estaciones;
    this.recorrerCircuito=function(movedor){
        for(var i = circuito.length; i--;i>0){ 

         movedor.moverPaquetes(this.circuito[i-1],this.circuito[i]); 

       }
   }
    

}
module.exports=LineaDeProduccion;