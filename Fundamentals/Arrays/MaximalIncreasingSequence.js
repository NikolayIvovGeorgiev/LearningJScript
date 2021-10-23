function sequence(params) {
  let number = +params[0];
  let currentNumber;
  let sequence = 0;
  let longestSequence = 1;

  for (let i = 0; i < params.length; i++) {
    currentNumber = +params[i];

    if ((number  === currentNumber - 1)) {
      sequence = sequence + 1;
      if (longestSequence <= sequence) {
        longestSequence = sequence;
      }
    } else {
      sequence = 1;
    }

    number = currentNumber;
  }
  console.log(longestSequence);
}
sequence(["8", "7", "3", "2", "3", "4", "2", "2", "4"]); // 3 (2,3,4)
