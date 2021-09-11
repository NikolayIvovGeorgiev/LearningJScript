function bigThree(params) {
  let a = +params[0];
  let b = +params[1];
  let c = +params[2];

  if (a>b && a>c) {
      console.log(a);
  } else if(b>a && b>c) {
      console.log(b);
  }else if(c>a && c>b){
      console.log(c);
  }
   
}
 bigThree(["5", "2", "2"]);  //5
 bigThree(["-2", "-2", "1"]); //1
 bigThree(["-2", "4", "3"]); //4
bigThree(["0", "-2.5", "5"]); //5
bigThree(["-0.1", "-0.5", "-1.1"]); //-0.1


// if (a > c && b >= c) {
//   if (a > b) {
//     console.log(a);
//   } else {
//     console.log(b);
//   }
// } else if (c > a ) {
//   if (c > b) {
//     console.log(c);
//   } else {
//     console.log(b);
//   }
// } else if (b > a && c >= a) {
//   if (b > c) {
//     console.log(b);
//   } else {
//     console.log(c);
//   }