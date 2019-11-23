function Palindrome(palabra){
    var siesPAL=true;
    var original =palabra.split("");
    console.log("Original  " +  original);
    var invertido=palabra.split("").reverse();
    console.log("Invertido  " + invertido);
    
    for( var i=0; i<original.length; i++){
        if(invertido[i]!=original[i]){
            console.log("NO es palindrome");
            siesPAL=false;
            break;
        }
        console.log("Es palindrome");
    }
    }
    Palindrome("oso");
