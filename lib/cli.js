const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
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
          message: "Enter a text color",
        },
        {
          name: "shapeType",
          type: "list",
          message: "Select a shape for the logo",
          choices: ["circle", "square", "triangle"],
        },
        {
          name: "shapeColor",
          type: "input",
          message: "Enter a shape color",
        },
      ])
      .then((response) => {
        let shape;
      if(response.shapeType === "circle"){
        shape = new Circle()
      }
      else if(response.shapeType === "square"){
        shape = new Square()
      }
      else if(response.shapeType === "triangle"){
        shape = new Triangle()
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