const expect = require("chai").expect;
const  caesar = require("../src/caesar");

describe ("caesar", () => {
    it("should return false if the shift value is 0", () => {
        const input = "Scrambled";

        const actual = caesar(input);
        const expected = false;
    })

    it("should return false if the shift value is greater than 25", () => {
        const input = "SCRambled Message!";

        const actual = caesar(input, 26);
        const expected = false;
    })

    it("should return false if the shift value is less than -25", () => {
        const input = "SCRambled Message!";

        const actual = caesar(input, -26);
        const expected = false;
    })

    it("should ignore capital letters in the input", () => {
        const input = "SCRambled Message!";

        const actual = caesar(input, 4);
        const expected = "wgveqfpih qiwweki!";
    })

    it("should return should correctly decode an input based on the shift", () => {
        
    })

    it("should return should correctly encode an input based on the shift", () => {
        
    })
})