import {NEW, ADD} from "../../Js/Tool";
import { setStyle, removeStyle } from "../../Js/Style";
import SignUp from "./SignUp/SignUp";

class Form {
    constructor(){
        this.box = NEW('div')
        this.version = 'PREV'
        this.signUp = new SignUp()
        this.style = ['w-72', 'mx-auto' ,'h-72']
    }
    render(){
        setStyle(this.style, this.box)
        ADD(this.box,this.signUp.render(this.version))
        return this.box
    }
}
export default Form