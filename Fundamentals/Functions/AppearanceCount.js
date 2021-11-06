function AppearanceCount(arraySize, array, numberX) {


console.log(numberInArrayCount(array,numberX));

}

function numberInArrayCount(array, Xnumber) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];
        if (Xnumber === currentNumber) {
            counter++;
        }
    }
    return counter;

}
AppearanceCount(8, [28, 6, 21, 6, -7856, 73, 73, -56], 73);






// Write a method that counts how many times given number appears in a given array.
// Write a test program to check if the method is working correctly.

//On the first line you will receive a number N - the size of the array
// On the second line you will receive N numbers separated by spaces - 
// the numbers in the array
// On the third line you will receive a number X

// 8
// 28 6 21 6 -7856 73 73 -56
// 73