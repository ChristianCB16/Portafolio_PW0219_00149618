function circulo(r){
    var area=0;
    area=Math.PI*(r*r);
    
    if(r<0 || r==0){
        console.log(-1);
    }
    else{
        console.log(area);
    }
    }
    circulo(0)