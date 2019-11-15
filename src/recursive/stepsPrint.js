/*
    계단 만들기
    steps(3)
    '#  '
    '## '
    '###'
    steps4(4)
    '#   '
    '##  '
    '### '
    '####'
 */

export const uglyStepsSolution = (n) => {
    let steps = '';

    for (let i = 0; i < n; i++) {
        if(i !== 0) steps += '\n';
        for (let j = 0; j < n; j++) {
            if (j <= i) {
                steps += '#';
            } else {
                steps += ' ';
            }
        }
    }
    return steps;
};

export const steps = (n, row = 0, stair = '') => {
    if(n === row) return;

    if(n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }
    const added = stair.length <= row ? '#' : ' ';
    steps(n, row, stair + added);
};
