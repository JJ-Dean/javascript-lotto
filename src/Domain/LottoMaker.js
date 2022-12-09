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
    for (let j = 0; j < 6; j++) {
      const number = Random.pickNumberInRange(1, 45);
      lottoArr.push(number);
    }
  }
}

module.exports = LottoMaker;
