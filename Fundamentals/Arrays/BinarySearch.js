function BinarySearch(params, wantedNumber) {
  let sortedArray = params.map(strToInt);
  sortedArray.sort((a, b) => a - b);

  let mid = Math.floor((sortedArray.length - 1) / 2);
  let start = 0;
  let end = sortedArray.length - 1;
  console.log(params);
  console.log(sortedArray);
  for (;start <= end;) {
    if (wantedNumber < params[mid]) {
      end = mid - 1;

      mid = Math.floor((start + end) / 2);
    } else if (wantedNumber > params[mid]) {
      start = mid + 1;

      mid = Math.floor((start + end) / 2);
    } else {
      console.log(mid);
      break;
    }
  }

  function strToInt(element, index) {
    return +element;
  }
}

BinarySearch(
  ["10", "1", "2", "4", "8", "16", "31", "32", "64", "77", "99"],
  32

);
