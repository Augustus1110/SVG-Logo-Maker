class SVG {
   constructor(){
    this.text = ''
    this.shape = ''
    // this.textColor = ''
   }
   setText(chosenText, chosenColor){
    this.text = `<text x="0" y="15" fill="${chosenColor}">${chosenText}</text>`

   }
   setShape(chosenShape){
    this.shape = chosenShape.render()
   }
   render(){
    return `<svg width="300" height="300">${this.shape}${this.text}</svg>`
   }
}
module.exports = SVG