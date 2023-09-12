const{Triangle, Square, Circle} = require('./shapes')

// These tests will test each shape class for a render method that returns a string for the corresponding SVG file with the given color.

// All tests pass.

test("creates Triangle", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');    
});


test("creates Circle", () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<circle cx="150" cy="115" r="80" fill="blue" />');    
});

test("creates Square", () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<rect width="110" height="110" x="95" y="55" fill="blue" />');    
});