/*
    maxChar("abcccccccccd") === "c"
    maxChar("apple 1231111") === "1"
 */
const maxChar = (_str) => {
    let maxChar = '';
    let maxCount = 0;
    let charMap = {};
    const charArr = _str.split('');

    for(let char of charArr) {
        charMap[char] = charMap[char] +1 || 1
    }
    console.log(charMap);
    for(let char in charMap) {
        if (charMap[char] > maxCount) {
            maxChar = char;
            maxCount = charMap[char];
        }
    }

    return maxChar
};

export default maxChar;