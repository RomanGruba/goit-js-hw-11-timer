class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate.getTime();
    this.renderTimer();
  }

  calculateTime(targetDate) {
    let currentDate = new Date();
    let time = targetDate - currentDate.getTime();
    return time;
  }

  updateTimer() {
    let time = this.calculateTime(this.targetDate);
    let days = Math.floor(time / (1000 * 60 * 60 * 24));
    let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((time % (1000 * 60)) / 1000);

    return { days, hours, mins, secs };
  }

  pad(str) {
    return String(str).padStart(2, '0');
  }

  renderTimer() {
    setInterval(() => {
      let { days, hours, mins, secs } = this.updateTimer();
      let parent = document.querySelector(this.selector);
      parent.querySelector('span[data-value="days"]').textContent = this.pad(
        days,
      );
      parent.querySelector('span[data-value="hours"]').textContent = this.pad(
        hours,
      );
      parent.querySelector('span[data-value="mins"]').textContent = this.pad(
        mins,
      );
      parent.querySelector('span[data-value="secs"]').textContent = this.pad(
        secs,
      );
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 4, 2019'),
});
