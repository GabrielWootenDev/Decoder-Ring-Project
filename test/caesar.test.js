const expect = require("chai").expect;
const  { caesar } = require("../src/caesar");

describe ("caesar", () => {
    it("should return false if the shift value is 0", () => {
        const input = "Scrambled";

        const actual = caesar(input, 0);
        const expected = false;
        expect(actual).to.equal(expected);
    })

    it("should return false if the shift value is greater than 25", () => {
        const input = "SCRambled Message!";

        const actual = caesar(input, 26);
        const expected = false;
        expect(actual).to.equal(expected);
    });

    it("should return false if the shift value is less than -25", () => {
        const input = "SCRambled Message!";

        const actual = caesar(input, -26);
        const expected = false;
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters in the input and encode the input message", () => {
        const input = "SCRambled Message!";

        const actual = caesar(input, 4);
        const expected = "wgveqfpih qiwweki!";
        expect(actual).to.equal(expected);
    });

    it("should return should correctly decode an input based on negative the shift", () => {
        const input = "wgveqfpih qiwweki!";

        const actual = caesar(input, 4, false);
        const expected = "scrambled message!";
        expect(actual).to.equal(expected);
    });

})