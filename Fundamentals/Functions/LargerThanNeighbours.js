function LargerThanNeighbours(params) {
    let toArray = params.split(' ');
    toArray.forEach((element, i) => {
        toArray[i] = +element;
    });
    comparison(toArray);
}

function comparison(array) {
    let biggerThanNeighboursCounter = 0;
    for (let i = 0; i < array.length; i++) {
        let firstNumber = array[i];
        let secondNumber = array[i+1];
           let thirdNumber = array[i+2];
            if (secondNumber > firstNumber && secondNumber > thirdNumber) {
                biggerThanNeighboursCounter = biggerThanNeighboursCounter +1;
            }  
        
    }
    console.log(biggerThanNeighboursCounter);

}
        LargerThanNeighbours('-26 -25 -28 31 2 27')

//Write a method that checks if the element at given position in given array of
//  integers is larger than its two neighbours (when such exist). 
//  Write program that reads an  array of numbers and prints how many
//   of them are larger than their neighbours.
//On the first line you will receive the number N - the size of the array
//On the second line you will receive N numbers separated by spaces - the array
// 6 /  -26 -25 -28 31 2 27 / 2	
