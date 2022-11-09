/* View */

class SliderView {
  #buttonPrev;
  #buttonNext;
  #slider;
  #sliderItems;
  #sliderComputedStyles;

  constructor() {
    this.#buttonPrev = document.getElementById('button-slider_prev');
    this.#buttonNext = document.getElementById('button-slider_next');
    this.#slider = document.getElementsByClassName('slider-items')[0];
    this.#sliderItems = Array.from(this.#slider.children);

    this.#sliderComputedStyles = getComputedStyle(this.#slider);

    for (let i = 0; i < this.#sliderItems.length; ++i) {
      this.updateItemOffset(i, i);
    }
  }

  getItemCount() {
    return this.#sliderItems.length;
  }

  setButtonClickListeners(buttonPrevAction, buttonNextAction) {
    this.#buttonPrev.onclick = buttonPrevAction;
    this.#buttonNext.onclick = buttonNextAction;
  }

  updateSliderOffset(amount) {
    this.#slider.style.left = `${amount}00%`;
  }

  updateItemOffset(itemIndex, amount) {
    this.#sliderItems[itemIndex].style.left = `${amount}00%`;
  }

  isItemOnScreen(itemIndex) {
    const sliderOffset =
      (100 * parseInt(this.#sliderComputedStyles.left.slice(0, -2))) /
      parseInt(this.#sliderComputedStyles.width.slice(0, -2));

    const itemOffset = parseInt(
      this.#sliderItems[itemIndex].style.left.slice(0, -1)
    );

    const offset = itemOffset + sliderOffset;

    return -100 < offset && offset < 100;
  }
}

/* Controller */

class SliderController {
  #sliderView;
  #itemCount;
  #itemsOffset = 0;
  #currentItem = 0;
  #timeout = null;
  #delayedAutoNext = null;

  constructor(sliderView) {
    this.#sliderView = sliderView;
    this.#sliderView.setButtonClickListeners(
      () => this.clickOnPrev(),
      () => this.clickOnNext()
    );
    this.#itemCount = this.#sliderView.getItemCount();
    this.#loadState();
  }

  #loadState() {
    const offset = localStorage.getItem('offset');
    const offsetValue = offset === null ? 0 : parseInt(offset);
    this.#itemsOffset = this.#currentItem = offsetValue;
    this.#sliderView.updateSliderOffset(-offsetValue);
  }

  #saveState() {
    localStorage.setItem('offset', this.#modLength(this.#itemsOffset));
  }

  clickOnPrev() {
    this.#delayAutoNext();
    if (this.#currentItem > 0) this.#currentItem--;
    else {
      const moved = this.#moveItemToOppositeSide(-1);
      if (!moved) return;
    }
    this.#transitionToLeft();
    this.#saveState();
  }

  clickOnNext() {
    this.#delayAutoNext();
    if (this.#currentItem < this.#itemCount - 1) this.#currentItem++;
    else {
      const moved = this.#moveItemToOppositeSide(1);
      if (!moved) return;
    }
    this.#transitionToRight();
    this.#saveState();
  }

  #delayAutoNext() {
    if (this.#delayedAutoNext !== null) clearTimeout(this.#delayedAutoNext);
    if (this.#timeout === null) return;
    this.#delayedAutoNext = setTimeout(() => this.clickOnNext(), this.#timeout);
  }

  setAutoNextTimeout(timeout) {
    this.#timeout = timeout;
    this.#delayAutoNext();
  }

  #moveItemToOppositeSide(direction) {
    const offset = this.#itemsOffset + direction;
    const itemIndex = this.#modLength(offset);

    if (this.#sliderView.isItemOnScreen(itemIndex)) return false;

    this.#sliderView.updateItemOffset(itemIndex, offset);
    return true;
  }

  #modLength(value) {
    return ((value % this.#itemCount) + this.#itemCount) % this.#itemCount;
  }

  #transitionToLeft() {
    this.#itemsOffset--;
    this.#sliderView.updateSliderOffset(-this.#itemsOffset);
  }

  #transitionToRight() {
    this.#itemsOffset++;
    this.#sliderView.updateSliderOffset(-this.#itemsOffset);
  }
}

/* Main */

const sliderView = new SliderView();
const sliderController = new SliderController(sliderView);
sliderController.setAutoNextTimeout(3000);

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight' || event.code === 'Space') {
    if (event.code === 'Space' && document.activeElement !== null) {
      document.activeElement.blur();
    }
    sliderController.clickOnNext();
  } else if (event.key === 'ArrowLeft') sliderController.clickOnPrev();
});
