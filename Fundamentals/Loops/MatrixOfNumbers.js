function matrix(params) {
    let input = +params[0];
    let print = " "; 

    for (let row = 1; row <= input; row++) {
        
        for (let column = 1; column <= input; column++) {
            print += (row + column - 1) + " ";
        }
        console.log(print);
        print = " ";
    }
    


}   
matrix(['5']);
// matrix(['5']);


// var s = "";
    // for(var i = 1; i < 11; i += 1) {
    //   s += i + " ";
    //console.log(s);


    // for (var i = 1; i <= n; i++) {
    //     var result = "";
    //     for (var j = 1; j <= n; j++) {
    //       result += (i + j - 1);


    // for (let row = 0; row < input; row++) {
       
    //     for (let column = 1; column <= input; column++) {
            
    //           print += (column + ``) ;
    //          }
       
    //     console.log(print)
    //     print = " ";
        
    // }
    
    // }