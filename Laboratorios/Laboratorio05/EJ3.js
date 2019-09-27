
function ocurr(dato){

var cont=0;
    for(var i=0; i<dato[0].length;i++){
       if(dato[0][i]==dato[1]){
           cont ++;
       }

 
     }
     console.log(cont);
     
    }
ocurr([[1,5,"palabra",5], 5]);