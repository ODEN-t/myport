export default class DriveGame {
  constructor(
    speed,
    presentPoint,
    batteryImg1,
    batteryImg2,
    batteryImg3,
    batteryImg4,
    batteryImg5,
    batteryImg6
  ) {
    this.speed = speed;
    this.presentPoint = presentPoint;
    this.batteryAmount = 10;
    this.batteryImg1 = batteryImg1;
    this.batteryImg2 = batteryImg2;
    this.batteryImg3 = batteryImg3;
    this.batteryImg4 = batteryImg4;
    this.batteryImg5 = batteryImg5;
    this.batteryImg6 = batteryImg6;
  }

  btnToggle() {
    const btns = document.getElementsByName('btn');
    for (const b of btns) {
      b.classList.toggle('is-prevent');
    }
  }
  forward() {
    this.presentPoint += this.speed;
    document.querySelector('.townBg').style.transform =
      'translateX(-' + this.presentPoint + 'px)';
    this.batteryAmount -= 1;
    this.btnToggle();
    this.checkBattery();
    setTimeout(() => {
      this.btnToggle();
    }, 1000);
  }
  back() {
    this.presentPoint -= this.speed;
    document.querySelector('.townBg').style.transform =
      'translateX(-' + this.presentPoint + 'px)';
    this.batteryAmount -= 1;
    this.btnToggle();
    this.checkBattery();
    setTimeout(() => {
      this.btnToggle();
    }, 1000);
  }
  checkBattery() {
    const battery = document.querySelector('.battery');
    switch (this.batteryAmount) {
      case 8:
        battery.src = this.batteryImg2;
        break;
      case 6:
        battery.src = this.batteryImg3;
        break;
      case 4:
        battery.src = this.batteryImg4;
        break;
      case 2:
        battery.src = this.batteryImg5;
        break;
      case 0:
        battery.src = this.batteryImg6;
        this.done();
        break;
    }
  }
  init() {
    document.querySelector('.battery').src = this.batteryImg1;
    document.querySelector('.townBg').style.transform =
      'translateX(-' + this.presentPoint + 'px)';
    document.getElementById('init').classList.add('is-active');
    setTimeout(() => {
      document.getElementById('init').classList.remove('is-active');
    }, 2000);
  }
  done() {
    setTimeout(() => {
      document.getElementById('result').textContent = 'ドライブ終了';
      document.getElementById('showresult').classList.add('is-active');
    }, 1000);
  }
}
