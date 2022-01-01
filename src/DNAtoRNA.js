export function DNAtoRNA(dna) {
    let result = "";
    for (const acid of dna) {
        if (acid === "T") {
            result += "U"
        } else {
            result += acid;
        }
    }

    return result;
}
