const generateLogo = require("../lib/Shapes")


test('renders shape', () => {
  const shape = ('Circle');

  this.shapeColor = ('blue');
  this.textColor = ('red');
  this.text = ('RPW');

  expect(generateLogo(shape)).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="("${this.shapeColor}")" />
      <text x="150" y="112" font-size="40" text-anchor="middle" fill="${this.textColor}" >${this.text}</text>
      </svg> `);
});



//review