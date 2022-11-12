const { Random, Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const Publish = require('./Publish');

class App {
  play() {
    this.purchase();
  }

  purchase() {
    Console.readLine('구입금액을 입력해 주세요.', (money) => {
      this.money = money;
      this.purchaseException();
    });
  }

  purchaseException() {
    if (this.money % 1000 !== 0) {
      throw new Error('[ERROR] 금액은 천원 단위로 입력해주세요.');
    }
    this.makeLotto();
  }

  makeLotto() {
    this.quantity = this.money / 1000;
    this.publish = new Publish(this.quantity);
    this.printLottoQuantity();
  }

  printLottoQuantity() {
    Console.print(`${this.quantity}개를 구매했습니다.`);
    this.printAllLotto();
  }

  printAllLotto() {
    this.publishResult = this.publish.result;
    for (let numberofLotto in this.publishResult) {
      Console.print(`[${this.publishResult[numberofLotto].join(', ')}]`);
    }
    this.enterWinningNumber();
  }

  enterWinningNumber() {
    Console.readLine('당첨 번호를 입력해 주세요.', (winNumber) => {
      this.numbertoArray(winNumber);
      this.lotto = new Lotto(this.winningArray);
      this.enterBonusNumber();
    });
  }

  numbertoArray(winNumber) {
    this.winningArray = winNumber.split(',').map((number) => {
      return parseInt(number, 10);
    });
  }

  enterBonusNumber() {
    Console.readLine('보너스 번호를 입력해 주세요.', (bonusNumber) => {
      this.lotto.bonusExecption(bonusNumber);
      this.winningResult();
    });
  }

  winningResult() {
    this.lotto.compare(this.publishResult);
    this.printWinningResult();
  }

  printWinningResult() {
    Console.print(`3개 일치 (5,000원) - ${this.lotto.fifthCount}개`);
    Console.print(`4개 일치 (50,000원) - ${this.lotto.fourthCount}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.lotto.thirdCount}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.lotto.secondCount}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.lotto.firstCount}개`);
    this.totalReturn();
  }

  totalReturn() {
    Console.print(
      `총 수익률은 ${this.lotto.profitCalculator(this.money)}%입니다.`
    );
  }
}

const app = new App();
app.play();
module.exports = App;
