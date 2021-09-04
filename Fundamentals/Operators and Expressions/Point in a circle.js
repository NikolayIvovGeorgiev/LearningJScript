function circle(params) {
    let x = +params[0];  // -2
    let y = +params[1];  // 0
        let smetka = Math.pow(x,2) + Math.pow(y,2);
        xDistance = x - 0;
        yDistance = y - 0;
        let distance = Math.sqrt((xDistance * xDistance) + (yDistance * yDistance));
    if (smetka <= Math.pow(2,2)) {
        console.log(`yes ${distance.toFixed(2)}`);
    } else {
        console.log(`no ${distance.toFixed(2)}`);
    }
}

circle(['-2', '0']); // yes 2.00
circle(['-1', '2']); // no 2.24
circle(['1.5', '-1']);

//K({0, 0}, 2)
//(x-center_x)^2 + (y - center_y)^2 < radius^2
//d(P, Q) = p(x2 − x1)2 + (y2 − y1)2