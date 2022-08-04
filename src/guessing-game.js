class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() {
        this.gNum = Math.round ((this.max - this.min) / 2 + this.min)
        return this.gNum
    }

    lower() {
        this.max = this.gNum
    }

    greater() {
        this.min = this.gNum
    }
}

module.exports = GuessingGame;
