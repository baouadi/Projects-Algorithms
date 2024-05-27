function removeBlanks(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result += str[i];
        }
    }
    return result;
}


function getDigits(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i]) && str[i] !== ' ') {
            result += str[i];
        }
    }
    return Number(result);
}

function acronym(str) {
    let words = str.split(' ');
    let result = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            result += words[i][0].toUpperCase();
        }
    }
    return result;
}


function countNonSpaces(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            count++;
        }
    }
    return count;
}

function removeShorterStrings(arr, minLength) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= minLength) {
            result.push(arr[i]);
        }
    }
    return result;
}

//Test Cases

console.log(removeBlanks(" HG  nk ggfff ky ll"));
console.log(getDigits("abc8c0d1ngd0j0!8"));
console.log(acronym(" there's no free lunch - gotta pay yer way. ")); 
console.log(countNonSpaces("Hello world !")); 
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));
