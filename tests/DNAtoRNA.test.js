import {DNAtoRNA} from "../src/DNAtoRNA";

describe("For DNAtoRNA, ", () => {
    test("DNAtoRNA does throw", () => {
        expect(() => {
            DNAtoRNA("")
        }).not.toThrow();
    });

    test("DNAtoRNA returns an empty string if provided an empty string", () => {
        expect(DNAtoRNA("")).toBe("");
    });

    test(`DNAtoRNA returns "U" when provided "T"`, () => {
        expect(DNAtoRNA("T")).toBe("U");
    });

    test.each([
        "G",
        "C",
        "A"
    ])(`DNA returns the acid base for "%i"`, (acidBase) => {
        expect(DNAtoRNA(acidBase)).toBe(acidBase);
    })

    test(`DNAtoRNA returns "GU" when provide "GT`, () => {
        expect(DNAtoRNA("GT")).toBe("GU");
    })
});
