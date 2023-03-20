function najveci(popis) {
    let najveci = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < popis.length; i++) {
        if (popis[i] > najveci) {
            najveci = popis[i];
        }
    }
    return najveci;
}

module.exports = najveci;
