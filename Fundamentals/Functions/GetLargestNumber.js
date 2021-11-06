function GetLargestNumber(params) {
    let int = +params [0];
    let int2 = +params [1];
    let int3 = +params [2];
    console.log(int,int2,int3);

    
   
      console.log(getMax(getMax(int,int2),int3));

    
    // let bigger = getMax(int,int2);
    // console.log(getMax(bigger,int3));
    // 
    // 

    //    
    //
}

function getMax(firstNumber, secondNumber) {
    if (firstNumber < secondNumber) {
        firstNumber = secondNumber;
    }
    return firstNumber;
}
GetLargestNumber(['13','8','6']);
GetLargestNumber(['7', '19', '19']);
// Write a method GetMax() with two parameters that returns the larger of two integers. 
// Write a program that reads 3 integers from the console and prints the largest
//  of them using the method GetMax().

// 8 3 6	8
// 7 19 19	19