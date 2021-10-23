function mmsa(params) { // Min, Max, Sum, Average
    let number = +params[0];
    let sum = 0;
    let ave = 0;
    let max = number;
    let min = number; 


    for (let index = 0; index < params.length; index++) {
        number = +params[index];
        sum = sum + number;
        
        if (number>max) {
            max = number;
        }
        
        if (min>number) {
            min = number;
        }
    }
    ave = sum / params.length;
    console.log(min.toFixed(2));
    console.log(max.toFixed(2));
    console.log(sum.toFixed(2));
    console.log(ave.toFixed(2));

    




}
mmsa(['2', '5', '1']);
mmsa([`-2`, '-1', '4']);
