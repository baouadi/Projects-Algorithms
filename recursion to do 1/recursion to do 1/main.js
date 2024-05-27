function rSigma(num) {
    // Base case: if num is less than or equal to 0, return 0
    if (num <= 0) {
        return 0;
    }
    // Recursive case: sum num with rSigma(num - 1)
    return num + rSigma(num - 1);
}

function rFact(num) {
    // Base case: if num is less than or equal to 1, return 1
    if (num <= 1) {
        return 1;
    }
    // Recursive case: multiply num with rFact(num - 1)
    return num * rFact(num - 1);
}

// Test cases
console.log(rSigma(5)); // 15
console.log(rSigma(2.5)); // 3
console.log(rSigma(-1)); // 0

console.log(rFact(3)); // 6
console.log(rFact(6.5)); // 720
