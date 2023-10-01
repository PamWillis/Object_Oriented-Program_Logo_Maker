const answers = require('./index.js');

class Shape {
  constructor(children) {
    this.children = children;
    this.textElement = '';
    this.shapeElement = '';
  }
  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${shapeColor}">`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="90" y="40" width="120" height="120" fill="${shapeColor}">`;
  }
}

class Triangle extends Shape {
  render() {
    return ` <polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}">`;
  }
};


const generateLogo = (answers) => {

  settextElement(answers.text, answers.textColor)  
    if (message.length > 3) {
      throw new Error('Letters must not be more than 3 characters.');
    }
    else {
      this.textElement = `<text x="150" y="100" font-size="40" text-anchor="middle" fill="${textColor}" >${text}</text>`;
    }
  

  setshapeElement(answers.shape) 

return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
};


module.exports = generateLogo;