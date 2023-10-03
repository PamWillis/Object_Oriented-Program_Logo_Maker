const {Square}  = require("../lib/Shapes")

test('renders shape', () => {
    const square = new Square('RPW', 'red', 'blue');
  
    expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="blue" /><text x="150" y="115" font-size="40" text-anchor="middle" fill="red" >RPW</text></svg> `);
  });