function rBinarySearch(arr, value, start = 0, end = arr.length - 1) {
    // Base case: if start is greater than end, value is not found
    if (start > end) {
        return false;
    }
    
    // Calculate mid index
    const mid = Math.floor((start + end) / 2);

    // Base case: if value is found at mid index, return true
    if (arr[mid] === value) {
        return true;
    } 
    // Recursive cases: search left or right half of the array
    else if (arr[mid] > value) {
        return rBinarySearch(arr, value, start, mid - 1);
    } else {
        return rBinarySearch(arr, value, mid + 1, end);
    }
}

function rGCF(num1, num2) {
    // Base case: if num2 is 0, return num1 (num1 is the greatest common factor)
    if (num2 === 0) {
        return num1;
    }
    // Recursive case: calculate gcf using Euclid's algorithm
    return rGCF(num2, num1 % num2);
}

// Test cases
console.log(rBinarySearch([1, 3, 5, 6], 4)); // false
console.log(rBinarySearch([4, 5, 6, 8, 12], 5)); // true

console.log(rGCF(8, 12)); // 4
