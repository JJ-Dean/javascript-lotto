const Input = require('./Ui/Input');
const LottoMaker = require('./Domain/LottoMaker');
const Output = require('./Ui/Output');

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
    app.winningArr = numbers.split(',').map((number) => {
      return parseInt(number, 10);
    });
    console.log(app.winningArr);
    app.getBonusNumber();
  }

  getBonusNumber() {
    console.log('짜잔');
  }
}

const app = new App();
app.play();
module.exports = App;
