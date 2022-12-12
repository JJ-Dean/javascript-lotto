const { Random } = require('@woowacourse/mission-utils');

class LottoMaker {
  constructor(number) {
    this.amount = number / 1000;
    this.lottoObj = {};
    this.publish();
  }

  publish() {
    for (let i = 0; i < this.amount; i++) {
      let lottoArr = [];
      this.createNumber(lottoArr);
      this.lottoObj[i] = lottoArr;
    }
  }

  createNumber(lottoArr) {
    while (lottoArr.length < 6) {
      const number = Random.pickNumberInRange(1, 45);
      if (!lottoArr.includes(number)) {
        lottoArr.push(number);
      }
    }
  }
}

module.exports = LottoMaker;
