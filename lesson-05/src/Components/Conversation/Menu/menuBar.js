import { setStyle } from "../../../Js/Style";
import { ADD, NEW } from "../../../Js/Tool";

class Menu {
    constructor(){
        this.box = NEW('div')
        this.box.textContent = 'MENU'
        this.style = [
            'w-2/12'
        ]
    }
    render(){
        setStyle(this.style,this.box)
        return this.box
    }
}
export default Menu