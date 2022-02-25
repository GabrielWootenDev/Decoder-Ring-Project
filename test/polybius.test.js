const expect = require("chai").expect;
const  { polybius } = require("../src/polybius");

describe ("polybius", () => {
    it("should return a coded message with spaces maintained and capital letters ignored and should still be a string", () => {
        const input = "Hello world";

        const actual = polybius(input);
        const expected = '3251131343 2543241341';
        expect(actual).to.equal(expected);
        expect(actual).to.be.a.string;
    })

    it("should return (i/j) when decoding the number 42 as those letters share a code number", () => {
        const input = "4432423352125413";

        const actual = polybius(input, false);
        const expected = "th(i/j)nkful";
        expect(actual).to.equal(expected);
    });

    it("should return false if the number of characters in the input when decoding is not even", () => {
        const input = '3251131343 25432413411';

        const actual = polybius(input, false);
        const expected = false;
        expect(actual).to.equal(expected);
    });
})
