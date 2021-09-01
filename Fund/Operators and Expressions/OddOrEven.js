function oddOrEven(args) {
    let a = +args[0];
        a % 2 === 0 ?
        console.log('even number '+a):
        console.log(`odd number ${a}`);

}


oddOrEven(['-1']);