const Component = require('./component.js');
const Square = require('./cli.jsjs');

class Square extends Component {
    constructor(children) {
        this.Square = Square;
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <square x="25" y="75" height="150" widht="150" fill="${shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">SVG</text>
      
      </svg>`;
    }

}

module.exports = Square;