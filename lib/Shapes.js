


class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}


class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor)
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
<text x="150" y="115" font-size="40" text-anchor="middle" fill="${this.textColor}" >${this.text}</text>
</svg> `
  }
}

class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor)
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />
    <text x="150" y="115" font-size="40" text-anchor="middle" fill="${this.textColor}" >${this.text}</text>
</svg> `
  }
}

class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor)
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
     <polygon points="150, 18 244, 182 56, 182"  fill="${this.shapeColor}" />
     <text x="150" y="160" font-size="40" text-anchor="middle" fill="${this.textColor}" >${this.text}</text>
     </svg> `
  }
};


const generateLogo = (answers) => {
  let shape;
  switch (answers.shape) {
    case `Circle`:
      shape = new Circle(answers.text, answers.textColor, answers.shapeColor);
      break;
    case `Square`:
      shape = new Square(answers.text, answers.textColor, answers.shapeColor);
      break;
    case `Triangle`:
      shape = new Triangle(answers.text, answers.textColor, answers.shapeColor);
      break;
  }

  console.log(shape);
  console.log(shape.render());
  return shape.render()

}


module.exports = generateLogo;