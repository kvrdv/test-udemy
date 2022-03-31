function button() {
  return 'button';
}

export default class Slider {
  constructor(width, height, count) {
    this.width = width;
    this.height = height;
    this.count = count;
  }

  nextSlide() {
    console.log('Moving forward');
  }

  prevSlide() {
    console.log('Moving back');
  }

  whoAmI() {
    console.log(this.width, this.height, this.count);
  }
}

// const slider1 = new Slider(600, 400, 5);
// const slider2 = new Slider(500, 300, 15);
// slider1.whoAmI();
// slider2.whoAmI();

class AutoSlider extends Slider {
  constructor(width, height, count, auto) {
    super(width, height, count);
    this.auto = auto;
  }
  play() {
    console.log(`Autoplay: ${this.auto}`);
  }
}

// const slider3 = new AutoSlider(200, 100, 4, true);
// slider3.whoAmI();
// slider3.play();

export { button };
