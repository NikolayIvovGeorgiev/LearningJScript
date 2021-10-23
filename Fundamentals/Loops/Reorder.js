function reorder(params) {
let value;
let print = ' ';
let bigger = +params[0];
for (let i = 0; i < params.length; i++) {
    value = +params[i];
    if (bigger < value) {
        bigger = value;
    }
    print += value + ' ';
    console.log(print);
}

}
reorder(['2', '11', '7', '42', '21', '15'])