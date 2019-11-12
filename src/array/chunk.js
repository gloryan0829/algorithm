/*
    [[a,b,c,d],2] ==> [[a,b],[c,d]]
    [[a,b,c,d,e],2] ==> [[a,b],[c,d],[e]]
 */
export const chunkSolution1 = (arr, size) => {
    const chunked = [];

    for (let ele of arr) {
        const last = chunked[chunked.length - 1];
        if(!last || last.length === size) {
            chunked.push([ele])
        } else {
            last.push(ele);
        }
    }
    return chunked
};

export const chunkSolution2 = (arr, size) => {
    const chunked = [];
    let startIndex = 0;

    while (startIndex < arr.length) {
        chunked.push(arr.slice(startIndex, startIndex+ size));
        startIndex += size;
    }

    return chunked;
};
