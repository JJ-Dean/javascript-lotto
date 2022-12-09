const { Console } = require('@woowacourse/mission-utils');
const Input = {
  purchase(publish) {
    Console.readLine('구입금액을 입력해 주세요.', (money) => {
      try {
        this.purchaseException(money, publish);
        publish(money);
      } catch (err) {
        Console.print('오류 : ' + err);
        this.purchase(publish);
      }
    });
  },

  purchaseException(money) {
    if (money % 1000 !== 0) throw '천원 단위로 입력해주세요.';
  },

  winningNumber(bonus) {
    Console.readLine('당첨 번호를 입력해 주세요.', (number) => {
      this.tryWinningNumber(number, bonus);
    });
  },

  tryWinningNumber(number, bonus) {
    try {
      this.winningExcepttion(number);
      bonus(number);
    } catch (err) {
      Console.print('오류 : ' + err);
      this.winningNumber(bonus);
    }
  },

  winningExcepttion(number) {
    const replaced_number = number.replace(/,/g, '');
    const numberArr = number.split(',').map((number) => {
      return parseInt(number, 10);
    });
    this.winningNum = numberArr;
    this.winningSeperateException(replaced_number);
    this.winningDupException(numberArr);
    this.winningisNumException(numberArr);
  },

  winningSeperateException(number) {
    if (number.length > 6 || number.length < 1)
      throw "','로 구분된 숫자를 입력해주세요.";
  },

  winningDupException(numberArr) {
    const numberAfterRemoving = new Set(numberArr);
    if (numberAfterRemoving.size !== 6) throw '숫자 6개를 입력해주세요.';
  },

  winningisNumException(numberArr) {
    const isNum = /^[1-9]{1}$|^[1-3]{1}[0-9]{1}$|^4{1}[0-5]{1}$/;
    numberArr.forEach((number) => {
      if (!isNum.test(number)) throw '숫자를 입력해주세요.';
    });
  },
};

module.exports = Input;
