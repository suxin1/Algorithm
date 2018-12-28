/**
 * Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps
 * through the list, compares adjacent pairs and swaps them if they are in the wrong order. The pass through
 * the list is repeated until no swaps are needed, which indicates that the list is sorted.
 *
 * Worst case performance  O(n^2)
 * Best case performance  O(n)
 * Average case performance  O(n^2)
 *
 * @param collection {Array}
 * @returns {Array}
 */
function bubbleSort(collection) {
  for (let i = 0; i < collection.length - 1; i++) {
    let swaped = false;
    for (let k = 0; k < collection.length - 1 - i; k++) {
      if (collection[k] > collection[k + 1]) {
        let temp = collection[k];
        collection[k] = collection[k + 1];
        collection[k + 1] = temp;
        swaped = true;
      }
    }
    if (!swaped) break;
  }
  return collection;
}

console.log("Bubble Sort: [1, 0, -23, 78, 100, 11, -78]", bubbleSort([1, 0, -23, 78, 100, 11, -78]));