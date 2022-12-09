const Input = require('./Ui/Input');
const LottoMaker = require('./Domain/LottoMaker');
const Output = require('./Ui/Output');

class App {
  play() {
    Input.purchase(this.printPublish);
  }

  printPublish(money) {
    const lottoMaker = new LottoMaker(money);
    Output.printLotto(lottoMaker.lottoObj);
  }
}

const app = new App();
app.play();
module.exports = App;
