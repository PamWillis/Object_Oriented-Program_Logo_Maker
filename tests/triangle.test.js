const {Triangle}  = require("../lib/Shapes")

test('renders', () => {
    const triangle = new Triangle('RPW', 'red', 'blue');
  
    expect(triangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182"  fill="blue" /><text x="150" y="160" font-size="40" text-anchor="middle" fill="red" >RPW</text></svg> `);
  });