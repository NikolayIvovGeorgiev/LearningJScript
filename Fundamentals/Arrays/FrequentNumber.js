function frequentNumber(params) {
  let longestFrequentLenght = 0;
  let longestFrequentNumber;

  let currentFrequentLenght = 1;
  let currentFrequentNumber;

  let iterationNumber;

  for (let i = 0; i < params.length; i++) {
    currentFrequentNumber = +params[i];
    for (let j = i + 1; j < params.length; j++) {
      iterationNumber = +params[j];
      if (currentFrequentNumber === iterationNumber) {
        currentFrequentLenght += 1;
      }
    }
    if (currentFrequentLenght > longestFrequentLenght) {
      longestFrequentLenght = currentFrequentLenght;
      longestFrequentNumber = currentFrequentNumber;
    }
    currentFrequentLenght = 1;
  }
  console.log(`${longestFrequentNumber} (${longestFrequentLenght} times)`);
}

frequentNumber([
  "13",
  "4",
  "1",
  "1",
  "4",
  "2",
  "3",
  "4",
  "4",
  "1",
  "2",
  "4",
  "9",
  "3",
]); //4 (5 times)
//REPEATING_NUMBER (REPEATED_TIMES times)
