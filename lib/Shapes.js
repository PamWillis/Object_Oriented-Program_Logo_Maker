
const CLI = require('./cli.js');

class Shapes extends Component {

render(shape) {
console.log(shape);

  switch (shape) {
    case 'Circle':
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${shapeColor}" />       
          </svg>`;

    case 'Square':
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="90" y="40" width="120" height="120" fill="${shapeColor}" />         
          </svg>`;

    case 'Triange':
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">;
            <polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />        
          </svg>`;
  }

}
}


module.exports = Shapes;