class Shape {
    constructor(){
        this.color = ''
    }
    setColor(selectedColor){
        this.color = selectedColor
    }
}

class Triangle extends Shape {
render(){
   return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />` 
}
}
class Circle extends Shape {
render(){
    return `<circle cx="150" cy="115" r="80" fill="${this.color}" />` 
}
}
class Square extends Shape {
render(){
   return `<rect width="110" height="110" x="95" y="55" fill="${this.color}" />` 
}
}

module.exports = {Triangle, Circle, Square}



