function sort(params) {
  let unsortedArray = +params[0];
  let sortedArray = [+params[0]];

  let currentSortedNumber;

  for (let i = 1; i < params.length; i++) {
    let currentNumber = +params[i]; //5
    for (let j = 0; j <= sortedArray.length; j++) {
      currentSortedNumber = +sortedArray[j];
      if (currentNumber <= currentSortedNumber) {
        sortedArray.splice(j, 0, currentNumber);
        break;
      } else if (j + 1 === sortedArray.length) {
        sortedArray.push(currentNumber);
        break;
      }
    }
  }
  sortedArray.forEach((element) => {
    console.log(element);
  });
}
//sort(['2', '5', '4']);
sort(["6", "3", "4", "1", "5", "2", "6"]); //1,2,3,4,5,6
//sort(['10', '36', '10', '1', '34', '28', '38', '31', '27', '30', '20']); //
// Идеята тук е да не използваме готовите методи за сортиране,
//  а сами да си разпишем алгоритъма. Инициализираме си масив с несортирани
//  стойности и го принтираме. След това пускаме два форцикъла и сравняваме
//  елементите един по един, когато намерим такъв който е най-малък от
//  останалите го местим на предна позиция и продължаваме проверките за
//  останалите елеминти.

// function bubbleSort(array) {
//     var done = false;
//     while (!done) {
//       done = true;
//       for (var i = 1; i < array.length; i += 1) {
//         if (array[i - 1] > array[i]) {
//           done = false;
//           var tmp = array[i - 1];
//           array[i - 1] = array[i];
//           array[i] = tmp;
//         }
//       }
//     }

//     return array;
