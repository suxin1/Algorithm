/**
 * Cocktail shaker sort, also known as bidirectional bubble sort, cocktail sort,
 * shaker sort (which can also refer to a variant of selection sort), ripple sort, shuffle sort, or shuttle sort,
 * is a variation of bubble sort that is both a stable sorting algorithm and a comparison sort.
 * The algorithm differs from a bubble sort in that it sorts in both directions on each pass through the list.
 *
 * Worst case performance  O(n^2)
 * Best case performance  O(n)
 * Average case performance  O(n^2)
 *
 * @param collection {Array}
 * @returns {Array}
 */
function cocktailShaker(collection) {
  let offset = 0;
  for (let i = collection.length - 1; i > 0; i--) {
    let swapped = false;
    for (let k = i; k > 0; k--) {
      if (collection[k] < collection[k - 1]) {
        let temp = collection[k];
        collection[k] = collection[k - 1];
        collection[k - 1] = temp;
        swapped = true;
      }
    }

    for (let k = offset; k < i; k++) {
      if (collection[k] > collection[k + 1]) {
        let temp = collection[k];
        collection[k] = collection[k + 1];
        collection[k + 1] = temp;
        swapped = true;
      }
    }
    offset++;
    if (!swapped) break;
  }

  return collection;
}

console.log("Cocktail Shaker Sort: [1, 0, -23, 78, 100, 11, -78]", cocktailShaker([1, 0, -23, 78, 100, 11, -78]));