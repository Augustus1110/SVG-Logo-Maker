class SVG {
   constructor(){
    this.text = ''
    this.shape = ''
    // this.textColor = ''
   }
   setText(chosenText, chosenColor){
    this.text = `<text x="150" y="125" font-size="2em" text-anchor=
    "middle" fill="${chosenColor}">${chosenText}</text>`

   }
   setShape(chosenShape){
    this.shape = chosenShape.render()
   }
   render(){
    return `<svg width="300" height="200">${this.shape}${this.text}</svg>`
   }
}
module.exports = SVG