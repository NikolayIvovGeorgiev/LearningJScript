function primeCheck(params) {
    let number = +params[0];
  
    if (number > 0){
        for (let i = 2; i < number; i++) {
            if (number%i === 0) {
                console.log("it is not prime");
                return;
        }                                        //ако няма остатък е делител
            
        } console.log(`it is prime`);
    } else{
        console.log("It not positive");
    }

    
}
primeCheck(['2']);
primeCheck(['23']);
primeCheck(['-3']);
primeCheck(['0']);
primeCheck([`14`]);


