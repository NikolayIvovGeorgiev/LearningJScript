function exchange(params) {
  let a = +params[0];
  let b = +params[1];
  let c;

  if (a > b) {
    c = a;
    a = b;
    b = c;
    console.log(a + " " + b);
  } else console.log(a + " " + b);
}
exchange(["5", "2"]);
exchange(["3", "4"]);
exchange(["5.5", "4.5"]);
