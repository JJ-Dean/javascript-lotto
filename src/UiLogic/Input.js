const { Console } = require('@woowacourse/mission-utils');

const Input = {
  purchase() {
    Console.readLine('구입금액을 입력해 주세요.', (money) => {
      this.purchaseException(money);
    });
  },

  purchaseException(money) {
    if (money % 1000 !== 0) throw '천원 단위로 입력해주세요.';
  },
};

module.exports = Input;
