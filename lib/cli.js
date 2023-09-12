const inquirer = require("inquirer");
const SVG = require("./svg");
const { Triangle, Circle, Square } = require("./shapes");
const fs = require("fs");

class CLI {
  init() {
    return inquirer
      .prompt([
        {
          name: "text",
          type: "input",
          message:
            "Enter text for the logo. (Must not be more than 3 characters.)",
          
        },
        {
          name: "textColor",
          type: "input",
          message: "Enter a color for the text.",
        },
        {
          name: "shapeType",
          type: "list",
          message: "Select a shape for the logo",
          choices: ["triangle", "circle", "square"],
        },
        {
          name: "shapeColor",
          type: "input",
          message: "Enter a color for the shape.",
        },
      ])
      .then((response) => {
        let shape;
      if(response.shapeType === "triangle"){
        shape = new Triangle()
      }
      else if(response.shapeType === "circle"){
        shape = new Circle()
      }
      else if(response.shapeType === "square"){
        shape = new Square()
      }
        shape.setColor(response.shapeColor);

        const svg = new SVG();
        svg.setText(response.text, response.textColor);
        svg.setShape(shape);
        return fs.writeFileSync("logo.svg", svg.render());
      })
      .then(() => {
        console.log("Generated logo.svg!");
      })
  }
}

module.exports = CLI;