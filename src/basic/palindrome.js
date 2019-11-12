/*
    palindrome('abba') => 'abba' 앞으로나 뒤로나 같은 문자열을 나타내는 알고리즘
    palindrome 이 맞다면 true 틀리다면 false 를 출력
*/

export const palindromeSolution1 = (_inputStr) => {
    return _inputStr === _inputStr.split('').reverse().join('');
};

export const palindromeSolution2 = (_inputStr) => {
    return _inputStr.split('').every((char, idx) => {
        return char === _inputStr[_inputStr.length - idx - 1]
    });
};

