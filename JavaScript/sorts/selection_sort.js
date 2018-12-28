/**
 * Selection sort is an algorithm that divides the input list into two parts: the sublist of items already sorted,
 * which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be
 * sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the
 * entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element
 * in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order),
 * and moving the sublist boundaries one element to the right.
 *
 * Worst case performance  O(n^2)
 * Best case performance  O(n^2)
 * Average case performance  O(n^2)
 *
 * @param collection {Array}
 * @returns {Array}
 */
function selectionSort(collection) {
  for (let i = 0; i < collection.length - 1; i++) {
    let least = i;
    for (let k = i + 1; k < collection.length; k++) {
      if (collection[least] > collection[k]) least = k;
    }
    let temp = collection[least];
    collection[least] = collection[i];
    collection[i] = temp;
  }
  return collection;
}

console.log("Selection Sort: [1, 0, -23, 78, 100, 11, -78]", selectionSort([1, 0, -23, 78, 100, 11, -78]));