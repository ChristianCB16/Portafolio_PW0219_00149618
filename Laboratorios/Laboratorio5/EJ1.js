var arr =[1, "hola", 3, true, [1,2,3], "hola2"]; 

var funcion = x => {
    let typeArr = []; 
    let counts = {}; 

    x.array.forEach(element => {
        typeArr.push(typeof element); 
    });

    typeArr.forEach(element =>{
        counts[element] = (counts[elemnet] || 0) +1; 
    }); 

    console.log(typeArr); 
    console.log(counts); 

}