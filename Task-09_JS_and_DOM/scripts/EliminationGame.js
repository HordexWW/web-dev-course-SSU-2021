function startEliminationGame(n, step) {
    const digits = Array.from({length: n}, (_, i) => i + 1)
    let counterEveryN = 0;
    let elementCounter = 0;
    while (digits.length != 1) {
        while (elementCounter < digits.length) {
            if (counterEveryN != step - 1) {
                elementCounter++
                counterEveryN++
            } else {
                let elementToDelete = digits[elementCounter];
                digits.splice(elementCounter, 1);
                counterEveryN = 0;
                if (digits.length == 1) {
                    break
                }
            }
        }
        elementCounter = 0;
    }
    return digits[0];
}
