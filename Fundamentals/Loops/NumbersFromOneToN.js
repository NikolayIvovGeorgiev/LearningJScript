function numbers(params) {
    let a = +params[0];
    let b = ` `;

    for (let i = 1; i <= a; i++) {
        b = b + ` ` + i;
    }
    console.log(b);


}
numbers(['5']); //1 2 3 4 5
numbers(['1']); //1