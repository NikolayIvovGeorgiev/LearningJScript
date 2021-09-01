function dividingBy7And5(args) {
    let a = +args[0];
    (a % 7 === 0 && a % 5 === 0)?
        console.log(`true ${a}`):
        console.log(`false ${a}`);


}
dividingBy7And5(['3']);
dividingBy7And5(['0']);
dividingBy7And5(['5']);
dividingBy7And5(['7']);
dividingBy7And5(['35']);