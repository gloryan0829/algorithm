import fizzBuzz from '../src/basic/fizzBuzz'
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
});
