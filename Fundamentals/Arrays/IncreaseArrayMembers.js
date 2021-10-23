function allocateArray(params) {
    let arrayLenght = +params;
    let array = new Array(arrayLenght);
    
    for (let index = 0; index < array.length; index++) {
         array[index] = index * 5;
        console.log(array[index]);
    }




}
allocateArray([`5`]);




