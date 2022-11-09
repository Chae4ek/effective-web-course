/* View */

class TimerView {
  #buttonPreset1 = document.getElementById('button-preset_1');
  #buttonPreset2 = document.getElementById('button-preset_2');
  #buttonPreset3 = document.getElementById('button-preset_3');
  #inputMinutes = document.getElementById('input-minutes');
  #inputSeconds = document.getElementById('input-seconds');
  #buttonStart = document.getElementById('button-start');
  #buttonStop = document.getElementById('button-stop');
  #buttonReset = document.getElementById('button-reset');
  #audioTimeIsUp = document.getElementById('audio-time_is_up');

  setButtonClickListeners(
    buttonPreset1Action,
    buttonPreset2Action,
    buttonPreset3Action,
    buttonStartAction,
    buttonStopAction,
    buttonResetAction
  ) {
    this.#buttonPreset1.onclick = buttonPreset1Action;
    this.#buttonPreset2.onclick = buttonPreset2Action;
    this.#buttonPreset3.onclick = buttonPreset3Action;
    this.#buttonStart.onclick = buttonStartAction;
    this.#buttonStop.onclick = buttonStopAction;
    this.#buttonReset.onclick = buttonResetAction;
  }

  setMinutes(value) {
    this.#inputMinutes.value = value;
  }

  setSeconds(value) {
    this.#inputSeconds.value = value;
  }

  getMinutes() {
    const number = this.#inputMinutes.value.replace(/[^0-9]/g, '');
    return number === '' ? 0 : parseInt(number);
  }

  getSeconds() {
    const number = this.#inputSeconds.value.replace(/[^0-9]/g, '');
    return number === '' ? 0 : parseInt(number);
  }

  toggleInputs(enable) {
    this.#inputMinutes.disabled = !enable;
    this.#inputSeconds.disabled = !enable;
  }

  togglePresetButtons(enable) {
    this.#buttonPreset1.disabled = !enable;
    this.#buttonPreset2.disabled = !enable;
    this.#buttonPreset3.disabled = !enable;
  }

  toggleStartButton(enable) {
    this.#buttonStart.disabled = !enable;
  }

  toggleStopButton(enable) {
    this.#buttonStop.disabled = !enable;
  }

  notifyTimer() {
    document.body.classList.add('body-time_is_up');
    this.#audioTimeIsUp.play();
  }

  resetTimerNotification() {
    document.body.classList.remove('body-time_is_up');
    this.#audioTimeIsUp.pause();
    this.#audioTimeIsUp.currentTime = 0;
  }
}

/* Controller */

class TimerController {
  #timerView;
  #seconds;
  #initTime;
  #wasStarted;
  #timerCounter = null;

  constructor(timerView) {
    this.#timerView = timerView;
    this.#timerView.setButtonClickListeners(
      () => this.clickOnPreset1(),
      () => this.clickOnPreset2(),
      () => this.clickOnPreset3(),
      () => this.clickOnStart(),
      () => this.clickOnStop(),
      () => this.clickOnReset()
    );
    this.#loadState();
  }

  #loadState() {
    const initTime = localStorage.getItem('initTime');
    const seconds = localStorage.getItem('seconds');
    const wasStarted = localStorage.getItem('wasStarted');
    let paused = localStorage.getItem('paused');

    this.#initTime = initTime === null ? 60 : parseInt(initTime);
    this.#seconds = seconds === null ? this.#initTime : parseInt(seconds);
    this.#wasStarted = wasStarted === null ? false : wasStarted === 'true';
    paused = paused === null ? true : paused === 'true';

    if (this.#seconds === 0) {
      this.#seconds = this.#initTime;
      this.#wasStarted = false;
      paused = true;
    }

    this.#updateTime(this.#seconds);
    if (this.#wasStarted && !paused) this.clickOnStart();

    if (this.#wasStarted) {
      this.#timerView.toggleInputs(false);
      this.#timerView.togglePresetButtons(false);
    }
    if (paused) this.#timerView.toggleStopButton(false);
    else this.#timerView.toggleStartButton(false);
  }

  #saveState(saveInitTime, saveSeconds, saveWasStarted, savePaused) {
    if (saveInitTime) localStorage.setItem('initTime', this.#initTime);
    if (saveSeconds) localStorage.setItem('seconds', this.#seconds);
    if (saveWasStarted) localStorage.setItem('wasStarted', this.#wasStarted);
    if (savePaused) localStorage.setItem('paused', this.#timerCounter === null);
  }

  clickOnPreset1() {
    this.#initTime = 60;
    this.#saveState(true, false, false, false);
    this.clickOnReset();
  }

  clickOnPreset2() {
    this.#initTime = 5 * 60;
    this.#saveState(true, false, false, false);
    this.clickOnReset();
  }

  clickOnPreset3() {
    this.#initTime = 10 * 60;
    this.#saveState(true, false, false, false);
    this.clickOnReset();
  }

  clickOnStart() {
    this.#timerView.toggleInputs(false);
    this.#timerView.togglePresetButtons(false);
    this.#timerView.toggleStartButton(false);
    this.#timerView.toggleStopButton(true);

    if (!this.#wasStarted) {
      this.#wasStarted = true;

      const rawMinutes = Math.abs(this.#timerView.getMinutes());
      const rawSeconds = Math.abs(this.#timerView.getSeconds());

      this.#initTime = this.#seconds = rawMinutes * 60 + rawSeconds;
      this.#updateTime(this.#initTime);

      this.#saveState(true, true, true, false);
    }

    if (this.#timerCounter === null) {
      if (this.#seconds === 0) {
        this.#timeIsUp();
        return;
      }

      this.#timerCounter = setInterval(() => this.#decreaseTime(), 1000);
      this.#saveState(false, false, false, true);
    }
  }

  #decreaseTime() {
    this.#seconds--;
    this.#updateTime(this.#seconds);

    if (this.#seconds === 0) {
      this.#timeIsUp();
      return;
    }

    this.#saveState(false, true, false, false);
  }

  #updateTime(seconds) {
    this.#timerView.setMinutes(Math.floor(seconds / 60));
    this.#timerView.setSeconds(seconds % 60);
  }

  #timeIsUp() {
    this.#timerView.notifyTimer();

    this.#saveState(false, true, false, false);
    this.clickOnStop();
  }

  clickOnStop() {
    if (this.#seconds !== 0) this.#timerView.toggleStartButton(true);
    this.#timerView.toggleStopButton(false);

    if (this.#timerCounter !== null) {
      clearInterval(this.#timerCounter);
      this.#timerCounter = null;
      this.#saveState(false, false, false, true);
    }
  }

  clickOnReset() {
    this.#timerView.toggleInputs(true);
    this.#timerView.togglePresetButtons(true);
    this.#timerView.toggleStartButton(true);
    this.#timerView.toggleStopButton(false);

    this.#timerView.resetTimerNotification();

    this.clickOnStop();
    this.#updateTime(this.#initTime);
    this.#wasStarted = false;
    this.#seconds = this.#initTime;
    this.#saveState(false, true, true, false);
  }
}

/* Main */

const timerView = new TimerView();
const timerController = new TimerController(timerView);
