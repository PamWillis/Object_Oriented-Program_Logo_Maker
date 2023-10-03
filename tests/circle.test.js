const {Circle}  = require("../lib/Shapes")

test('renders', () => {
  const anyShape = new Circle('RPW', 'red', 'blue');

  expect(anyShape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="112" font-size="40" text-anchor="middle" fill="red" >RPW</text></svg> `);
});









