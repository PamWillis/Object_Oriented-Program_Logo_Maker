const CLI = require("./cli.js");
const { Circle, Square, Triangle } = require("./Shapes.js");

//Defines, (letters and letter color) and (shape and shape color)

class SVG {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
  }
  settextElement(text, color) {
    if (message.length > 3) {
      throw new Error('Letters must not be more than 3 characters.');
    }
    else {
      this.textElement = `<text x="150" y="100" font-size="40" text-anchor="middle" fill="${color}" >${text}</text>`;
    }
  }
console.log(color, text);

    setshapeElement(Shape) {
    this.shapeElement = Shape.render();
  }
}


module.exports = SVG;
