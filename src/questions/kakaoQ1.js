const chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

function getBinaryNumber(num) {
    if(num <= 0) return '';
    return getBinaryNumber(parseInt(num/2)) + String(num % 2);
}

function lpadWithZero(str, padLength) {
    if(str.length === padLength) return str;
    return `0` +  lpadWithZero(str, padLength-1);
}

function makeMapFromNumOfArray(arr = [], padLength) {
    if(arr.length < 1 || arr.length > 16)
        throw Error('n 의 범위가 벗어났습니다.');

    return arr.reduce((acc, item) => {
        const binary = lpadWithZero(getBinaryNumber(item), padLength);
        return [...acc, binary]
    },[]);
}

function execOrOperationForMaps(_arr1 = [], _arr2 = []) {
    const finalMap = [];
    for (let i = 0; i < _arr1.length; i++) {
        const eleOfArr1 = _arr1[i].split('');
        const eleOfArr2 = _arr2[i].split('');
        const lineMap = eleOfArr1.map((ele1,idx) => Number(ele1) || Number(eleOfArr2[idx]) ? '#' : ' ').join('');
        finalMap.push(lineMap);
    }
    return finalMap;
}

function solution(n, arr1, arr2) {
    let answer = [];

    if(n < 1 || n > 16) return Error('변의 길이가 범위에 부합 되지 않습니다. 1 <= n <= 16');
    if(arr1.length !== arr2.length) return Error('지도1과 지도2의 길이가 같아야 합니다.');

    const map1 = makeMapFromNumOfArray(arr1, n);
    const map2 = makeMapFromNumOfArray(arr2, n);
    answer = execOrOperationForMaps(map1, map2);
    return answer;
}

describe('[1차] 비밀지도 : ', () => {

    it('최종 : ', done => {
        console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
        done();
    });

    it('merge Map : ', done => {
        const map1 = makeMapFromNumOfArray([9, 20, 28, 18, 11], 5);
        const map2 = makeMapFromNumOfArray([30, 1, 21, 17, 28], 5);
        const finalMap = execOrOperationForMaps(map1, map2);

        console.log(finalMap);
        done();
    });

    it('makeMap : ', done => {
        const map1 = makeMapFromNumOfArray([9, 20, 28, 18, 11], 5);
        console.log(map1);
        const map2 = makeMapFromNumOfArray([30, 1, 21, 17, 28], 5);
        console.log(map2);
        done();
    });

    it('getBinaryNumber : ', done => {
        const str = lpadWithZero(getBinaryNumber(17), 5);
        console.log(str);
        done();
    });


})