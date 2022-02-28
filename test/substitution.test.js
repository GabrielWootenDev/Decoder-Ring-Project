const expect = require("chai").expect;
const  { substitution } = require("../src/substitution");

describe ("susbstitution", () => {
    it("should return a coded message with spaces maintained and capital letters ignored and should still be a string", () => {
        const input = "Hello world";
        const alphabet = "poiuytrewqlkjhgfdsamnbvcx";
        const actual = substitution(input);
        const expected = "eykkg vgsku";
        expect(actual).to.equal(expected);
        expect(actual).to.be.a.string;
    })

    it("should return a coded message when using an alphabet parameter with special characters included", () => {
        const input = "Hello world";
        const alphabet = "poiuytr!wql%jhgfdsamnbvcxz";
        const actual = substitution(input, alphabet);
        const expected = "!y%%g vgs%u";
        expect(actual).to.equal(expected);
    })

    it("should return a decoded message that keeps spaces when using an alphabet parameter with special characters included", () => {
        const input = "!y%%g vgs%u";
        const alphabet = "poiuytr!wql%jhgfdsamnbvcxz";
        const actual = substitution(input, alphabet, false);
        const expected = "hello world";
        expect(actual).to.equal(expected);
    })

    it("should return false if the alphabet parameter is not exactly 26 characters", () => {
        const input = "hello world";
        const alphabet = "poiuytrewqlkjhgfdsamnbvcx";
        const actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    });

    it("should return false if the alphabet parameter contains duplicate characters", () => {
        const input = "hello world";
        const alphabet = "poiuytrewqlkjhggfdsamnbvxx";
        const actual = substitution(input, false);
        expect(actual).to.be.false;
    });
})
