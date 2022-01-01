export function DNAtoRNA(dna) {
    if (dna === "T") {
        return "U"
    }

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
