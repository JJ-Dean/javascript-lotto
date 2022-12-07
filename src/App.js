const Input = require('./UiLogic/Input');

class App {
  play() {
    try {
      Input.purchase();
    } catch (err) {
      Console.print(err);
    }
  }
}

const app = new App();
app.play();
module.exports = App;
