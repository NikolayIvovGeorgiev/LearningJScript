function thirdDigit(params) {
    let toString = String(params[0]);
    //let theDigit = toString.split('').reverse().join('').charAt(2);
   let theLenght = toString.length;
   let theDigit = toString.charAt(theLenght - 3);
      
    theDigit == 7 ?
            console.log(`true`):
            console.log(`false ${theDigit}`);
}
thirdDigit([5])
thirdDigit([701])
thirdDigit([9703])
thirdDigit([877])
thirdDigit([777877])
thirdDigit([9999799])


