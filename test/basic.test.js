import fizzBuzz from '../src/basic/fizzBuzz'
import fibonacci from "../src/basic/fibonacci";
import {reverseStringSolution1, reverseStringSolution2, reverseStringSolution3} from "../src/basic/reverseString";
import {palindromeSolution1, palindromeSolution2} from "../src/basic/palindrome";
import {reverseInteger} from "../src/basic/reverseInteger";
import maxChar from "../src/basic/maxChar";

const chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

describe("Basic Test", () => {
    it('FizzBuzz Test',  (done) => {
        const result = fizzBuzz(1000);
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

    it('Palindrome Test', (done) => {
        palindromeSolution1('civic').should.equal(true);
        palindromeSolution1('apple').should.equal(false);
        palindromeSolution2('civic').should.equal(true);
        palindromeSolution2('apple').should.equal(false);
        done();
    });

    it('Reverse Integer Test', (done) => {
        reverseInteger(54321).should.equal(12345);
        reverseInteger(500).should.equal(5);
        reverseInteger(-90).should.equal(-9);
        reverseInteger(-15).should.equal(-51);
        done();
    });

    it('Max Character Test',  (done) => {
        maxChar('aaadbbbbddddddeeeeewwqqqqq').should.equal("d");
        done();
    });
});
