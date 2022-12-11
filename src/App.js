const Input = require('./Ui/Input');
const LottoMaker = require('./Domain/LottoMaker');
const Output = require('./Ui/Output');
const Lotto = require('./Lotto');

class App {
  play() {
    Input.purchase(this.printPublish);
  }

  printPublish(money) {
    const lottoMaker = new LottoMaker(money);
    let lottoObj = lottoMaker.lottoObj;
    Output.printLotto(lottoObj);
    app.getWinningNumber(lottoObj);
  }

  getWinningNumber(lottoObj) {
    this.lottoObj = lottoObj;
    Input.winningNumber(this.numbertoArr);
  }

  numbertoArr(numbers) {
    app.winningNum = numbers.split(',').map((number) => {
      return parseInt(number, 10);
    });
    app.getBonusNumber();
  }

  getBonusNumber() {
    Input.bonusNumber(this.saveBonusNumber);
  }

  saveBonusNumber(number) {
    app.bonusNum = number;
    app.compare();
  }

  compare() {
    console.log(this);
    const lotto = new Lotto(this.winningNum);
    lotto.compare(this.lottoObj, this.bonusNum);
  }
}

const app = new App();
app.play();
module.exports = App;
