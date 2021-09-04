function coordinates(params) {
  let x = +params[0]; //expression to checks for given point (x, y) if it is within the circle K({1, 1}, 1.5)
  let y = +params[1]; //and out of the rectangle R(top=1, left=-1, width=6, height=2).
  let pointLocationForCircle = Math.pow(x - 1, 2) + Math.pow(y - 1, 2);
  let circleRadius = Math.pow(1.5, 2);
  let isInsideCircle = pointLocationForCircle <= circleRadius;

  let xMax = -1;
  let xMin = 5;
  let yMax = 1;
  let yMin = -1;
  let isInsideRectangle = x <= xMin && x >= xMax && y <= yMax && y >= yMin;

  if (isInsideRectangle) {
    if (isInsideCircle) {
      console.log(`inside circle & inside rectangle`);
    } else {
      console.log(`outside circle & inside rectangle`);
    }
  } else if (isInsideCircle) {
    console.log(`inside circle & outside rectangle`);
  } else {
    console.log(`outside circle & outside rectangle`);
  }
}
//   if (x <= xMin && x >= xMax && y <= yMax && y >= yMin) {
//     if (pointLocationForCircle <= circleRadius) {
//       console.log(`inside circle & inside rectangle`);
//     } else {
//       console.log(`outside circle & inside rectangle`);
//     }
//   } else if (pointLocationForCircle <= circleRadius) {
//     console.log(`inside circle & outside rectangle`);
//   } else {
//     console.log(`outside circle & outside rectangle`);
//   }

coordinates(["2.5", "2"]); //outside circle outside rectangle
coordinates(["0", "1"]); //inside circle inside rectangle
coordinates(["2.5", "1"]); //inside circle inside rectangle
coordinates(["1", "2"]); //inside circle outside rectangle
