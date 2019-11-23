
function llenar(num){
    var arreglo= Array();
    var correct = false;
    for(var i=0; i<20; i++){
        arreglo[i]=(Math.floor(Math.random()*100)+1);
        console.log(arreglo[i]);
    }
  for(var j=0; j<arreglo.length;j++){
    if(arreglo[j]==num){
        console.log("Has acertado");
        correct  = true;
        break;
        
    }
}
if(correct==false){
    console.log("No has acertado");
    
}
}

llenar(3);