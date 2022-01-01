export function DNAtoRNA(dna) {
    if (!dna) {
        return "";
    }
    if (dna === "T") {
        return "U"
    }
    return dna;
}
