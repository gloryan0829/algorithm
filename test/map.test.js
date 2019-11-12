import {anagramSolution1, anagramSolution2, stringToCharMap} from "../src/map/anagram";
const chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

describe('map test...', () => {

    it('Regex Test', done => {
        const word = 'HI CONGRATULATIONS!!!!!';
        const lowerWord = word.replace(/[^\w]/g, "").toLocaleLowerCase();
        console.log(lowerWord);
        done();
    });

    it('Anagram Helper StringToCharMap func() Test',  done => {
        const charMap = stringToCharMap('Hi Congratulations!!!@#TXCV');
        console.log(charMap);
        done();
    });

    it('Anagram Solution 1 Test  ', done => {
        anagramSolution1('rail safety', 'fairy tales').should.equal(true);
        anagramSolution1('RAIL SAFETY!', 'fairy tales!').should.equal(true);
        anagramSolution1('hi there!', 'bye there!').should.equal(false);
        done();
    });

    it('Anagram Solution 2 Test with sort ', done => {
        anagramSolution2('rail safety', 'fairy tales').should.equal(true);
        anagramSolution2('RAIL SAFETY!', 'fairy tales!').should.equal(true);
        anagramSolution2('hi there!', 'bye there!').should.equal(false);
        done();
    });


});