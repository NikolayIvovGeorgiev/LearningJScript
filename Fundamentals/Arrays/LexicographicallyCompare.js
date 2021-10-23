function compare(params) {
    let value;
    let second = params[1];

    for (let i = 0; i < params.length; i++) {
        value = params[i];
        if (value < second) {
            console.log('<');
            break;
        }else if (value > second){
            console.log('>');
            break;
        }else {
            console.log('=');
            break;
        } 
    }
}



compare(['hello', 'halo']);
compare(['food', 'food']);
compare(['good', 'gooood']);