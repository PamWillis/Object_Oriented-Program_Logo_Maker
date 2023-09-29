const Component = require('./component.js');
const Circle = require("./Circle.js")
const Square = require("./Square.js")
const Triangle = require("./Triangle.js")
const Shape = require('./cli.jsjs');

class Shape extends Component {
    constructor(children) {
        this.Shape = Shape;
    }
}
renderShape(Shape) {
function renderShape(shape) {
    switch (shape) {
        case 'Circle':
            return "Circle.js";

        case 'Square':
            return "Square.js";

        case 'Triange':
            return "Triangle.js";

    }
}
}

module.exports = Shape;