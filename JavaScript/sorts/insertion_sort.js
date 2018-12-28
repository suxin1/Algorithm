/**
 *  Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time.
 *  It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.
 *
 * Worst case performance  O(n^2)
 * Best case performance  O(n)
 * Average case performance  O(n^2)
 *
 * @param collection {Array}
 * @returns {Array}
 */
function insertionSort(collection) {
  for (let i = 0; i < collection.length; i++) {
    let index = i;
    while (index > 0 && collection[index - 1] > collection[index]) {
      let temp = collection[index - 1];
      collection[index - 1] = collection[index];
      collection[index] = temp;
      index--;
    }
  }
  return collection;
}

console.log("Insertion Sort: [1, 0, -23, 78, 100, 11, -78]", insertionSort([1, 0, -23, 78, 100, 11, -78]));