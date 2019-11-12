/*
    anagram('rail safety', 'fairy tales')
    anagram('RAIL SAFETY!', 'fairy tales!')
    anagram('hi there!', 'bye there!')
 */

// Solution 1
export const anagramSolution1 = (_stringA, _stringB) => {
    const mapA = stringToCharMap(_stringA);
    const mapB = stringToCharMap(_stringB);

    if(Object.keys(mapA).length !== Object.keys(mapB).length) {
        return false;
    }

    for (let char in mapA) {
        if(mapA[char] !== mapB[char]) {
            return false;
        }
    }

    return true;
};

// String to CharMap convert Helper
export const stringToCharMap = _str => {
    const charMap = {};
    for (let char of _str.replace(/[^\w]/g, '').toLocaleLowerCase().split('')) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap
};

// Solution 2
export const anagramSolution2 = (_stringA, _stringB) => {
    return cleanAndSortString(_stringA) === cleanAndSortString(_stringB)
};

const cleanAndSortString = _str => {
    return _str.replace(/[^\w]/g, '').toLocaleLowerCase().split('').sort().join('')
};



