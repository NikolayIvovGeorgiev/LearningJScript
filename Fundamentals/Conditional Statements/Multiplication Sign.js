function sign(params) {
  //Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it. Use a sequence of if operators.
  let a = +params[0]; // Input   ['-2', '-2', '1'] Output   -
  let b = +params[1];
  let c = +params[2];

  switch (true) {
    case a < 0 && b < 0 && c < 0:
      console.log("-");
      break;
    case a < 0 && b < 0 && c > 0:
      console.log("+");
      break;
    case a < 0 && b > 0 && c > 0:
      console.log("-");
      break;
    case a > 0 && b > 0 && c > 0:
      console.log("+");
      break;
    case a > 0 && b > 0 && c < 0:
      console.log("-");
      break;
    case a > 0 && b < 0 && c < 0:
      console.log("+");
      break;
    case a === 0 || b === 0 || c === 0:
      console.log("0");
      break;
    default:
      console.log("Error");
      break;
  }
}

sign(["5", "2", "2"]); // +
sign(["-2", "-2", "1"]); // +
sign(["-2", "4", "3"]); // -
sign(["0", "-2.5", "4"]); // 0
sign(["-1", "-0.5", "-5.1"]); // -

// if (a>0 ) {                  IT WORKS BUT IT IS HARD FOR READING
//     if (b>0) {
//         if (c>0) {
//             console.log("+");
//         } else {
//             if (c=0) {
//                 console.log("0");
//             } else {
//                 console.log("-");
//             }
//         }

//     } else if (b<0) {
//         if (c>0) {
//             console.log("-");
//         } else {
//             if (c<0) {
//                 console.log("+");
//             } else {
//                 console.log("0");
//             }
//             }
//     } else {
//         console.log('0');
//             }
// }else if (a<0) {
//         if (b>0) {
//             if (c>0) {
//                 console.log("-");
//             } else {
//                 if (c=0) {
//                     console.log("0");
//                 } else {
//                     console.log("+");
//                 }
//             }

//         } else if (b<0) {
//             if (c>0) {
//                 console.log("+");
//             } else {
//                 if (c<0) {
//                     console.log("-");
//                 } else {
//                     console.log("0");
//                 }
//             }
//         } else {
//             console.log('0');
//             }
// }else {
//     console.log('0');
// }
