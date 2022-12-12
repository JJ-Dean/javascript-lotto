const { winningCount } = require('./Constant');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.count = 0;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현

  compare(publish, bonus) {
    for (const key in publish) {
      this.count = 0;
      this.compareWithWinningNum(publish[key], bonus);
    }
  }

  compareWithWinningNum(publish, bonus) {
    this.#numbers.forEach((number) => {
      if (publish.includes(number)) {
        this.count += 1;
      }
    });
    this.increaseWinningCount(publish, bonus);
  }

  increaseWinningCount(publish, bonus) {
    if (this.count === 6) return (winningCount.fisrt += 1);
    if (this.count === 5 && publish.includes(Number(bonus)))
      return (winningCount.second += 1);
    if (this.count === 5) return (winningCount.third += 1);
    if (this.count === 4) return (winningCount.fourth += 1);
    if (this.count === 3) return (winningCount.fifth += 1);
  }
}

module.exports = Lotto;
