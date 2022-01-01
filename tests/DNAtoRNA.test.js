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

   test("DNAtoRNA returns 'U' when provided 'T'", () => {
      expect(DNAtoRNA("T")).toBe("U");
   });
});
