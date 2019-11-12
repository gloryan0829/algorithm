// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

const fibonacci = (_index) => {
    if(_index < 0 ) throw 'index는 0 이하가 될 수 없습니다.';
    if(_index === 1 ) return 0;
    else if (_index === 2) return 1;

    return fibonacci(_index - 2) + fibonacci(_index - 1)
};

export default fibonacci
