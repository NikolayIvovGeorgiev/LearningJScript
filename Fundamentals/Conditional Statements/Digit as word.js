function digToWord(params) {
  let a = +params[0]; //Write a script that asks for a digit (0-9), and depending on the input, shows the digit as a word (in English). Print not a digit in case of invalid input. Use a switch statement.

  switch (a) {
    case 0:
        console.log('zero');
      break;
    case 1:
        console.log('one');
      break;
    case 2:
        console.log('two');
      break;
    case 3:
        console.log('three');
      break;
    case 4:
        console.log('four');
      break;
    case 5:
        console.log('five');
      break;
    case 6:
        console.log('six');
      break;
    case 7:
        console.log('seven');
      break;
    case 8:
        console.log('eight');
      break;
    case 9:
        console.log('nine');
      break;
    default:
      console.log("NaN");
      break;
  }
}
digToWord(["2"]);
digToWord(["1"]);
digToWord(["0"]);
digToWord(["5"]);
digToWord(["hi"]);
digToWord(["9"]);
digToWord(["10"]);
