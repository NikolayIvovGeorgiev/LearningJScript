function biggestofFive(params) {
    let a = +params[0];
    let b = +params[1];
    let c = +params[2];
    let d = +params[3];
    let e = +params[4];

    let aIsBiggest = a>b && a>c && a>d && a>e;
    let bIsBiggest = b>a && b>c && b>d && b>e;
    let cIsBiggest = c>a && c>b && c>d && c>e;
    let dIsBiggest = d>a && d>b && d>c && d>e;
    let eIsBiggest = e>a && e>b && e>c && e>d;
    
    if (aIsBiggest) {
        console.log(a);
    } else if (bIsBiggest) {
        console.log(b);
    } else if (cIsBiggest){
        console.log(c);
    } else if (dIsBiggest){
        console.log(d);
    }else if (eIsBiggest){
        console.log(e);
    }
    
}
biggestofFive(['5', '2', '2', '4', '1']); //5
biggestofFive(['-2', '-22', '1', '0', '0']); //1
biggestofFive(['-2', '4', '3', '2', '0']); //4
biggestofFive(['0', '-2.5', '0', '5', '5']); //5
biggestofFive(['-3', '-0.5', '-1.1', '-2', '-0.1']); //-0.1