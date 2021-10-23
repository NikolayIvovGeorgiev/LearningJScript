function sequence(params) {
  let previousNumber = +params[0];
  let currentNumber;
  let sequence = 0;
  let longestSequence = 1;

  for (let i = 0; i < params.length; i++) {
    currentNumber = +params[i];

    if (currentNumber === previousNumber) {
      sequence = sequence + 1;
      if (longestSequence <= sequence) {
        longestSequence = sequence;
      }
    } else {
      sequence = 1;
    }
    previousNumber = currentNumber;
  }

  console.log(longestSequence);
}

sequence(["1", "2", "2", "2", "3", "3"]);
sequence(["10", "2", "1", "1", "2", "3", "3", "2", "2", "2", "2"]); //3
