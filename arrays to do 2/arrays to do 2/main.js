function reverse(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}

// Test cases
console.log(reverse([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverse([7, 8, 9])); // [9, 8, 7]

function rotateArr(arr, shiftBy) {
    const len = arr.length;
    shiftBy = shiftBy % len; // Normalize the shift
    if (shiftBy < 0) {
        shiftBy += len; // Handle negative shifts
    }

    reverseSegment(arr, 0, len - 1);
    reverseSegment(arr, 0, shiftBy - 1);
    reverseSegment(arr, shiftBy, len - 1);

    return arr;
}

function reverseSegment(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

// Test cases
console.log(rotateArr([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
console.log(rotateArr([1, 2, 3, 4, 5], -2)); // [3, 4, 5, 1, 2]
console.log(rotateArr([1, 2, 3], 1)); // [3, 1, 2]

function filterRange(arr, min, max) {
    let writeIndex = 0;
    for (let readIndex = 0; readIndex < arr.length; readIndex++) {
        if (arr[readIndex] >= min && arr[readIndex] <= max) {
            arr[writeIndex] = arr[readIndex];
            writeIndex++;
        }
    }
    arr.length = writeIndex;
    return arr;
}

// Test cases
console.log(filterRange([1, 2, 3, 4, 5], 2, 4)); // [2, 3, 4]
console.log(filterRange([7, 8, 9, 1, 2], 5, 8)); // [7, 8]

function concat(arr1, arr2) {
    const len1 = arr1.length;
    const len2 = arr2.length;
    const result = new Array(len1 + len2);

    for (let i = 0; i < len1; i++) {
        result[i] = arr1[i];
    }
    for (let i = 0; i < len2; i++) {
        result[len1 + i] = arr2[i];
    }

    return result;
}

// Test cases
console.log(concat([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(concat([7, 8], [9])); // [7, 8, 9]
