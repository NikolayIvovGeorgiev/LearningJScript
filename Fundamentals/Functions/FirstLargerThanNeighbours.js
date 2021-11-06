function FirstLargerThanNeighbours(params) {
    let toArray = params.split(' ');
    toArray.forEach((element, i) => {
        toArray[i] = +element;
    });
    console.log(comparison(toArray));
    
}

function comparison(array) {
    let FirstBiggerThanNeighboursCounter = 0;
    for (let i = 0; i < array.length; i++) {
        let firstNumber = array[i];
        let secondNumber = array[i+1];
           let thirdNumber = array[i+2];
            if (secondNumber > firstNumber && secondNumber > thirdNumber) {
                FirstBiggerThanNeighboursCounter = i+1;
                break;
            } else {
                FirstBiggerThanNeighboursCounter = -1;
            } 
        
    }
    return FirstBiggerThanNeighboursCounter;
}
FirstLargerThanNeighbours('-26 -25 -28 31 2 27')

// Write a method that returns the index of the first element in array that is larger than its neighbours, or -1, if there is no such element.

// Input
// On the first line you will receive the number N - the size of the array
// On the second line you will receive N numbers sepated by spaces - the array