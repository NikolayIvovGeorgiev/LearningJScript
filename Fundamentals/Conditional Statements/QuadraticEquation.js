function calc(params) {  //Write a script that reads the coefficients 
    let a = +params[0];  //a, b and c of a quadratic equation ax2 + bx + c = 0 and solves it (prints its real roots). Calculates and prints its real roots.
    let b = +params[1];
    let c = +params[2];
    let discriminant = b * b - 4 * a * c;


    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log(`x1=${root1.toFixed(2)}; x2=${root2.toFixed(2)}`);
    } else if(discriminant === 0) {
        root1 = root2 = -b / (2 * a);
        console.log(`x1=x2=${root1.toFixed(2)}`);
    }else{
        console.log("no real roots");
    }

}


calc(['2', '5', '-3']); //x1=-3.00; x2=0.50
calc(['-1', '3', '0']); //x1=0.00; x2=3.00
calc(['-0.5', '4', '-8']); //x1=x2=4.00
calc(['5', '2', '8']); //no real roots
calc(['0.2', '9.572', '0.2']); //x1=-47.84; x2=-0.02
