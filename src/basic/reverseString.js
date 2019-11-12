/*
    input : Apple
    Output : elppA
 */

export const reverseStringSolution1 = (_inputStr) => {
    return _inputStr.split('').reverse().join('')
};

export const reverseStringSolution2 = (_inputStr) => {
    const strArr = _inputStr.split('');
    let reversed = '';

    for (let character of strArr) {
        reversed = character + reversed;
    }

    return reversed;
};

export const reverseStringSolution3 = (_inputStr) => {
    return _inputStr.split('').reduce((rev, char) => char + rev, '')
};