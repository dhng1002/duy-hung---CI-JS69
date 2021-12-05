import {NEW , ADD, EVENT} from './Tool'
import {setStyle, removeStyle} from './Style'
class Button {
    constructor(name){
        this.btn = NEW('button')
        this.btn.textContent = name
        this.btn.style.backgroundColor = 'rgba(234, 76, 137, 0.165)'
    }

    setStyle(arr){
        setStyle(arr, this.btn)
    }
    removeStyle(arr){
        removeStyle(arr,this.btn)
    }
    click(callback){
        EVENT(this.btn, 'click', callback )
    }
    mouseOver(callback){
        EVENT(this.btn, 'mouseover', callback )
    }
    mouseOut(callback){
        EVENT(this.btn, 'mouseout', callback )
    }
    render(){
        return this.btn
    }
}
export default Button