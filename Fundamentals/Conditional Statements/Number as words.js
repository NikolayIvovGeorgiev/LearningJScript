function numAsWord(params) {
  //Write a script that converts a number in the range [0…999] to words, corresponding to its English pronunciation.
  let a = params[0];
  let charOne = a.charAt(0);
  let charTwo = a.charAt(1);
  let charThree = a.charAt(2);

  let isThreeDig = charOne && charTwo && charThree;
  let isTwoDig = charOne && charTwo;
  let isOneDig = charOne;

  let secondAndThirthDig = +charTwo.concat(charThree);
  let firstAndSecondDIg = +charOne.concat(charTwo);


  if (isThreeDig) {
    if (charTwo != 1 && charThree != 0) {
      console.log(
        `${digToWord(charOne)} hundred ${digToWord2(charTwo)} ${digToWord(
          charThree
        )}`
      );
    } else if (+charTwo === 1 && charThree != 0) {
      switch (secondAndThirthDig) {
        case 11:
          secondAndThirthDig = "eleven";
          break;
        case 12:
          secondAndThirthDig = "twelve";
          break;
        case 13:
          secondAndThirthDig = "thirteen";
          break;
        case 14:
          secondAndThirthDig = "fourteen";
          break;
        case 15:
          secondAndThirthDig = "fiveteen";
          break;
        case 16:
          secondAndThirthDig = "sixteen";
          break;
        case 17:
          secondAndThirthDig = "seventeen";
          break;
        case 18:
          secondAndThirthDig = "eightteen";
          break;
        case 19:
          secondAndThirthDig = "nineteen";
          break;
      }
      console.log(`${digToWord(charOne)} hundred and ${secondAndThirthDig}`);
    } else if (secondAndThirthDig != 00) {
      console.log(`${digToWord(charOne)} hundred and ${digToWord2(charTwo)}`);
    } else {
      console.log(`${digToWord(charOne)} hundred`);
    }
  } else if (isTwoDig) {
    if (+charOne != 1 && +charTwo != 0) {
      console.log(`${digToWord2(charOne)}${digToWord(charTwo)}`);
    } else if (firstAndSecondDIg < 20 && firstAndSecondDIg > 10) {
      switch (firstAndSecondDIg) {
        case 11:
          firstAndSecondDIg = "eleven";
          break;
        case 12:
          firstAndSecondDIg = "twelve";
          break;
        case 13:
          firstAndSecondDIg = "thirteen";
          break;
        case 14:
          firstAndSecondDIg = "fourteen";
          break;
        case 15:
          firstAndSecondDIg = "fiveteen";
          break;
        case 16:
          firstAndSecondDIg = "sixteen";
          break;
        case 17:
          firstAndSecondDIg = "seventeen";
          break;
        case 18:
          firstAndSecondDIg = "eightteen";
          break;
        case 19:
          firstAndSecondDIg = "nineteen";
          break;
      }
      console.log(`${firstAndSecondDIg}`);
    } else {
      console.log(`${digToWord2(charOne)}`);
    }
  } else if (isOneDig) {
    console.log(`${digToWord(charOne)}`);
  }
}
numAsWord(["0"]); //Zero
numAsWord(["9"]); //Nine
numAsWord(["10"]); //Ten
numAsWord(["12"]); //Twelve
numAsWord(["19"]); //Nineteen
numAsWord(["25"]); //Twenty five
numAsWord(["98"]); //Ninety eight
numAsWord(["273"]); //Two hundred and seventy three
numAsWord(["400"]); //Four hundred
numAsWord(["501"]); //Five hundred and one
numAsWord(["617"]); //Six hundred and seventeen
numAsWord(["711"]); //Seven hundred and eleven
numAsWord(["999"]); //Nine hundred and ninety nine

// switch (charOne) {
//     case 1:
//       firstDigToString = "one hundred";
//       break;
//     case 2:
//       firstDigToString = "two hundred";
//       break;
//     case 3:
//       firstDigToString = "three hundred";
//       break;
//     case 4:
//       firstDigToString = "four hundred";
//       break;
//     case 5:
//       firstDigToString = "five hundred";
//       break;
//     case 6:
//       firstDigToString = "six hundred";
//       break;
//     case 7:
//       firstDigToString = "seven hundred";
//       break;
//     case 8:
//       firstDigToString = "eight hundred";
//       break;
//     case 9:
//       firstDigToString = "nine hundred";
//       break;
//     default:
//       break;
//   }

function digToWord(str) {
  let charToWord = +str;
  switch (charToWord) {
    case 1:
      charToWord = "one";
      break;
    case 2:
      charToWord = "two";
      break;
    case 3:
      charToWord = "three";
      break;
    case 4:
      charToWord = "four";
      break;
    case 5:
      charToWord = "five";
      break;
    case 6:
      charToWord = "six";
      break;
    case 7:
      charToWord = "seven";
      break;
    case 8:
      charToWord = "eight";
      break;
    case 9:
      charToWord = "nine";
      break;
  }
  return charToWord;
}
function digToWord2(int) {
  let charToWord2 = +int;
  switch (charToWord2) {
    case 0:
        charToWord2="";
        break;
    case 1:
      charToWord2 = "ten";
      break;
    case 2:
      charToWord2 = "twenty";
      break;
    case 3:
      charToWord2 = "thirty";
      break;
    case 4:
      charToWord2 = "forty";
      break;
    case 5:
      charToWord2 = "fifty";
      break;
    case 6:
      charToWord2 = "sixty";
      break;
    case 7:
      charToWord2 = "seventy";
      break;
    case 8:
      charToWord2 = "eighty";
      break;
    case 9:
      charToWord2 = "ninety";
      break;
  }
  return charToWord2;
}

//    else if (isTwoDig) {

//    if (isThreeDig) {
//     switch (charOne) {
//         case 1:
//           firstDigToString = "one";
//           break;
//         case 2:
//           firstDigToString = "two";
//           break;
//         case 3:
//           firstDigToString = "three";
//           break;
//         case 4:
//           firstDigToString = "four";
//           break;
//         case 5:
//           firstDigToString = "five";
//           break;
//         case 6:
//           firstDigToString = "six";
//           break;
//         case 7:
//           firstDigToString = "seven";
//           break;
//         case 8:
//           firstDigToString = "eight";
//           break;
//         case 9:
//           firstDigToString = "nine";
//           break;
//         }
//   }

//   console.log(`${firstDigToString} hundred`);

//   if (a < 10) {
//     switch (a) {
//       case 0:
//         console.log("zero");
//         break;
//       case 1:
//         console.log("one");
//         break;
//       case 2:
//         console.log("two");
//         break;
//       case 3:
//         console.log("three");
//         break;
//       case 4:
//         console.log("four");
//         break;
//       case 5:
//         console.log("five");
//         break;
//       case 6:
//         console.log("six");
//         break;
//       case 7:
//         console.log("seven");
//         break;
//       case 8:
//         console.log("eight");
//         break;
//       case 9:
//         console.log("nine");
//         break;
//     }
