function sort(params) {
    let a = +params[0];             //Sort 3 real values in descending order. Use nested if statements.
  let b = +params[1];
  let c = +params[2];

    if (a > b && a> c) {
        if (b>c) {
            console.log(a,b,c);
        } else {
            console.log(a,c,b);
        }
    } else if (b>a && b>c) {
        if (a>c) {
            console.log(b,a,c);
        } else {
            console.log(b,c,a);
        }
    } else if (c>a && c>b) {
            if (a>b) {
                console.log(c,a,b);
            } else {
                console.log(c,b,a);
            }
    } else {
        console.log(a,b,c);
    } 
}
sort(['5', '1', '2']); //5 2 1
sort(['-2', '-2', '1']); //1 -2 -2
sort(['-2', '4', '3']); //4 3 -2
sort(['0', '-2.5', '5']); //5 0 -2.5
sort(['10', '20', '30']); //30 20 10
sort(['1', '1', '1']); //1 1 1