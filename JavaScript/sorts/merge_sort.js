/**
 * 合并排序是一个有效，通用，比较型的排序算法。大多的实现都会产生稳定排序，指相等项目的顺序输出与输入相同。
 * 合并排序是一个分治算法，由 John von Neumann 在1945年发明。
 *
 * Worst case performance  O(n log n)
 * Best case performance  O(n log n)
 * Average case performance  O(n log n)
 *
 * @param collection {Array}
 * @returns {Array}
 */
function mergeSort(collection) {
  if (collection.length > 1) {
    // Find middle index
    let midPoint = Math.floor(collection.length / 2);

    // Recursively split collection to smaller chucks.
    let leftHalf = mergeSort(collection.slice(0, midPoint));
    let rightHalf = mergeSort(collection.slice(midPoint));

    let i = j = k = 0;
    while (i < leftHalf.length && j < rightHalf.length) {
      if (leftHalf[i] < rightHalf[j]) {
        collection[k] = leftHalf[i];
        i++;
        k++;
      } else {
        collection[k] = rightHalf[j];
        j++;
        k++;
      }
    }

    while (i < leftHalf.length) {
      collection[k] = leftHalf[i];
      i++;
      k++;
    }

    while (j < rightHalf.length) {
      collection[k] = rightHalf[j];
      j++;
      k++;
    }
  }
  return collection;
}

console.log("Merge Sort: [1, 0, -23, 78, 100, 11, -78]", mergeSort([1, 0, -23, 78, 100, 11, -78]));