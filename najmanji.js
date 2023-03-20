function najmanji(popis) {
    let najmanji = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < popis.length; i++) {
        if (popis[i] < najmanji) {
            najmanji = popis[i];
        }
    }
    return najmanji;
}

module.exports = najmanji;
