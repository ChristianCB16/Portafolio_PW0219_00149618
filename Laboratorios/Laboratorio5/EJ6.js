function ordenarASC (array = [1,8,6,2,4,5]){
let a, b; 
for(j=0; j<array.length -1; j++){
    for(i=1; i<array.length -1; i++ ){

        if(arra[i]>array[i+1]){
        a=array[i]; 
        b= array[i+1];
        array[i]=b; 
        array[i+1]=a;  
        }
    }
}
console.log(array); 



}