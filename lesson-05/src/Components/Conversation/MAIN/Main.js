import { NEW } from "../../../Js/Tool";
import {setStyle} from '../../../Js/Style'
class Main {
    constructor(){
        this.box = NEW('div')
        this.box.textContent = 'Main'
        this.style = [
            'w-7/12'
        ]
    }
    render(){
        setStyle(this.style,this.box)
        return this.box
    }
}
export default Main