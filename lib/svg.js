class SVG {
   constructor(){
    this.text = ''
    this.shape = ''
    
   }
   setText(chosenText, chosenColor){
    this.text = `<text x="150" y="125" font-size="2em" text-anchor=
    "middle" fill="${chosenColor}">${chosenText}</text>`

   }
   setShape(chosenShape){
    this.shape = chosenShape.render()
   }
   render(){
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ${this.shape}${this.text}</svg>`
   }
}
module.exports = SVG