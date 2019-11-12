/*
    reverseInt(12345) => 54321
    reverseInt(500) => 5
    reverseInt(-15) => -51
    reverseInt(-90) => -9
 */
export const reverseInteger = (_num) => {
    return Math.sign(_num)
        * parseInt(Math.abs(_num)
            .toString()
            .split('')
            .reverse()
            .join(''))
};