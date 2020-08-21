export default class FlagGame {
  constructor(initNum) {
    this.now = 0;
    this.prev = 0;
    this.orderNum = initNum;
    this.correct = '';
    this.count = 0;
  }
  changeAngle(node) {
    let angle = node.dataset.angle;
    document
      .getElementById('flag')
      .classList.remove(
        'r0',
        'r30',
        'r60',
        'r90',
        'r120',
        'r150',
        'r180',
        'active'
      );
    document.getElementById('flag').classList.add(angle);
    node.classList.add('active');
  }
  order() {
    let max = 3 - this.now,
      min = -3 - this.now,
      high = Math.round(Math.random() * max),
      low = Math.round(Math.random() * min),
      random = high + low;
    this.orderNum = random;
    Math.sign(this.orderNum) == 1
      ? (document.getElementById('order').textContent = '+' + this.orderNum)
      : (document.getElementById('order').textContent = this.orderNum);
  }
  updateNum(dataPoint) {
    this.correct = Number(this.now) + Number(this.orderNum);
    this.prev = this.now;
    this.now = dataPoint;
  }
  judgment() {
    if (this.count >= 9) this.clear();
    this.now == this.correct ? this.count++ : this.wrong();
    console.log('judge');
  }
  wrong() {
    console.log('wrong');
    setTimeout(() => {
      document.querySelector('.resultText-flag').textContent = '残念 ..';
      document.querySelector('.result-flag').classList.add('is-active');
    }, 1000);
  }
  clear() {
    setTimeout(() => {
      document.querySelector('.resultText-flag').textContent = 'クリア！';
      document.querySelector('.result-flag').classList.add('is-active');
    }, 1000);
  }
  reload() {
    document
      .getElementById('flag')
      .classList.remove(
        'r0',
        'r30',
        'r60',
        'r90',
        'r120',
        'r150',
        'r180',
        'active'
      );
    document.getElementById('flag').classList.add('r90');
    document.querySelector('.resultText-flag').textContent = '';
    document.querySelector('.result-flag').classList.remove('is-active');
  }
}
