function trapezoidsArea(params) {
    let a = +params[0];
    let b = +params[1];
    let h = +params[2];
        let area = ((a+b)/2 *h)
    console.log(area.toPrecision(7));
    
}
trapezoidsArea(['5', '7', '12']);
trapezoidsArea(['2', '1', '33']);
trapezoidsArea(['8.5', '4.3', '2.7']);
trapezoidsArea(['100', '200', '300']);
trapezoidsArea(['0.222', '0.333', '0.555']);