import Button from "../../Js/Button";
class Prev extends Button {
    constructor(name){
        super(name)
        this.btnOpacity = 0.165
        this.btn.textContent = name
        this.btn.style.backgroundColor = `rgba(234, 76, 137, ${this.btnOpacity})`
        this.btn.addEventListener('mouseover', this.handleAnimationIn.bind(this))
        this.btn.addEventListener('mouseout', this.handleAnimationOut.bind(this))
    }
    handleAnimationIn(e){
        cancelAnimationFrame(this.animate)
        if(this.btnOpacity <= 1){
        this.btnOpacity += 0.03
        e.target.style.backgroundColor = `rgba(234, 76, 137, ${this.btnOpacity})`
        this.animate = requestAnimationFrame(this.handleAnimationIn.bind(this,e))
        }
        if(this.btnOpacity > 1){
            cancelAnimationFrame(this.animate)
        }
    }
    handleAnimationOut(e){
        cancelAnimationFrame(this.animate)
        if(this.btnOpacity > 0.165){
        this.btnOpacity -= 0.03
        e.target.style.backgroundColor = `rgba(234, 76, 137, ${this.btnOpacity})`
        this.animate = requestAnimationFrame(this.handleAnimationOut.bind(this,e))
        }
        if(this.btnOpacity < 0.165){
            cancelAnimationFrame(this.animate)
        }
    }
}
export default Prev