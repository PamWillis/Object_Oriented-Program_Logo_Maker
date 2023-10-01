


class Shape {
  constructor(Text, FinalShape, shapeColor) {
    this.Text = Text; 
    this.FinalShape = FinalShape;
    this.shapeColor = shapeColor;
  }
}

//define attributes for text using get/set method

class Text extends Shape {
  get msg() {
    return this.Text;
  }
  set msg(Text) {
    if (message.length > 3) {
      throw new Error('Letters must not be more than 3 characters.');
    }
    else {
      this.Text = `<text x="150" y="100" font-size="40" text-anchor="middle" fill="${textColor}" >${text}</text>`;
    }
  }
};

// define attribute for the color of the shape using get/set method

class ShapeColor extends Shape {
  get msg() {
    return this.ShapeColor;
  }
  set msg(shapeColor) {
    this.ShapeColor = `fill="${shapeColor}">`;
  }
}


//classes for shapes

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" `;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="90" y="40" width="120" height="120" `;
  }
}

class Triangle extends Shape {
  render() {
    return ` <polygon points="150, 18 244, 182 56, 182" `;
  }
};

// class for FinalShape using get/set method

class FinalShape extends Shape {

  get msg() {
    switch (answers.shape) {
      case `Circle`:
        shape = new Circle();
        break;
      case `Square`:
        shape = new Square();
        break;
      case `Triangel`:
        shape = new Triangle();
        break;
    }
  }
  set msg(shape) {
      this.FinalShape = shape;
    }
  }


const generateLogo = (answers) => {

  console.log(answers.shape);

}



/* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
Shape
</svg> */


module.exports = generateLogo;