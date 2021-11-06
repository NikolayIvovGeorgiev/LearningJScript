function arrayManupulation(params) {
    let numArray = params.split(' ');
    numArray.forEach((element, i ) => {
        numArray[i] = +element;
    });    
    //console.log(numArray);

   console.log(sortingArrayAscending(numArray));
   console.log(sortingArrayBothSides(numArray, true));
   console.log(sortingArrayBothSides(numArray, false));
   console.log(sortingArrayFromIndex(numArray, 0));
}

function sortingArrayAscending(unsortedArray) {
    let array = unsortedArray;
    array.sort((a, b) => a - b);
    return array;
}

function sortingArrayBothSides(unsortedArray, boolean) {
    
    if (boolean) return unsortedArray.sort((a,b) => a - b); 
    return unsortedArray.sort((a,b) => b - a);
}

function sortingArrayFromIndex(unsortedArray,index) {
    let newArray =  unsortedArray.slice(index);
    let max = Math.max.apply(null, newArray);
    return max;
}





arrayManupulation('3 4 1 5 2 6');
arrayManupulation('36 10 1 34 28 34 31 27 30 20');
// Write a method that returns the maximal element in a portion of array of integers 
// starting at given index. Using it write another method that sorts an array in 
// ascending / descending order. Write a program that sorts a given array.

// Input
// On the first line you will receive the number N - the size of the array
// On the second line you will receive N numbers separated by spaces - the array
// function getMaxOfArray(numArray) {
//     return Math.max.apply(null, numArray);
//   }