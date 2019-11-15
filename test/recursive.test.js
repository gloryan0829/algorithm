import {chunkSolution1, chunkSolution2} from "../src/array/chunk";

const chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

describe('Array Test', () => {
    it('Chunk Test',  (done) => {
        const result = chunkSolution1([1,2,3,4,5],2);
        const result2 = chunkSolution2([1,2,3,4,5],2);
        console.log(result);
        console.log(result2);
        done();
    });
});