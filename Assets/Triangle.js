const Component = require('./component.js');
const Triangle = require('./cli.jsjs');

class Triangle extends Component {
    constructor(children) {
        this.Triangle = Triangle;
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <triangle points = 150,25 275,175 25,175 fill="${shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">SVG</text>
      
      </svg>`;
    }

}

module.exports = Triangle;