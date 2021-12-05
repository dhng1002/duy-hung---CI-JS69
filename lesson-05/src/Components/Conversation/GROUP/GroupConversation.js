import { NEW } from "../../../Js/Tool";
import {setStyle} from '../../../Js/Style'
class Group {
    constructor(){
        this.box = NEW('div')
        this.box.textContent= 'Group Conversation'
        this.style = [
            'w-3/12'
        ]
    }
    render(){
        setStyle(this.style,this.box)
        return this.box
    }
}
export default Group