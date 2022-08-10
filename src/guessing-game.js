class GuessingGame {
  constructor() {}
  #min;
  #max;
  #candidate;

  setRange(min, max) {
    this.#min = min;
    this.#max = max;
  }

  guess() {
    return this.#candidate = Math.ceil((this.#min + this.#max) / 2);
  }

  lower() {
    this.#max = this.#candidate;
  }

  greater() {
    this.#min = this.#candidate;
  }
}

module.exports = GuessingGame;
