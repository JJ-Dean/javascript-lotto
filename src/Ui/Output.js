const { Console } = require('@woowacourse/mission-utils');

const Output = {
  printLotto(lottoObj) {
    const objLength = Object.keys(lottoObj).length;
    for (let i = 0; i < objLength; i++) {
      Console.print(Object.values(lottoObj)[i]);
    }
  },
};

module.exports = Output;
