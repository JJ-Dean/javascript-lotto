const { Console } = require('@woowacourse/mission-utils');
const Input = {
  purchase(publish) {
    Console.readLine('구입금액을 입력해 주세요.', (money) => {
      try {
        this.purchaseException(money, publish);
      } catch (err) {
        Console.print('오류 : ' + err);
        this.purchase(publish);
      }
    });
  },

  purchaseException(money, publish) {
    if (money % 1000 !== 0) throw '천원 단위로 입력해주세요.';
    publish(money);
  },
};

module.exports = Input;
