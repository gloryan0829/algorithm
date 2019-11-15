import {steps , uglyStepsSolution} from "../src/recursive/stepsPrint";

const chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

describe('Recursive Test', () => {
    it('steps Test',  (done) => {
        // console.log(uglyStepsSolution(10));
        steps(10);
        done();
    });
});