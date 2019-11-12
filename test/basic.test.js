import fizzBuzz from '../src/basic/fizzBuzz'
import fibonacci from "../src/basic/fibonacci";
import {reverseStringSolution1, reverseStringSolution2, reverseStringSolution3} from "../src/basic/reverseString";
const chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

describe("Basic Test", () => {
    it('FizzBuzz Test',  (done) => {
        const result = fizzBuzz();
        result.map(i => console.log(i));
        result[14].should.equal('FizzBuzz');
        result[2].should.equal('Fizz');
        result[4].should.equal('Buzz');
        done();
    });

    it('Fibonacci Test', (done) => {
        should.Throw(() => fibonacci(-1), 'index는 0 이하가 될 수 없습니다.');
        const result = fibonacci(13);
        result.should.equal(144);
        done();
    });

    it('Reverse String Test',  (done) => {
        reverseStringSolution1('Apple').should.equal('elppA');
        reverseStringSolution2('Apple').should.equal('elppA');
        reverseStringSolution3('Apple').should.equal('elppA');
        done();
    });
});
