import { setStyle } from "../../Js/Style";
import { ADD, NEW } from "../../Js/Tool";
import Group from "./GROUP/GroupConversation";
import Main from "./MAIN/Main";
import Menu from "./Menu/menuBar";

class Conversation {
    constructor(){
        this.box = NEW('div')
        this.menu = new Menu()
        this.group = new Group()
        this.main = new Main()
        this.style = [
            'w-full',
            'h-full',
            'flex',
            'flex-row'
        ]
    }
    render(){
        setStyle(this.style, this.box)
        ADD(this.box, this.menu.render())
        ADD(this.box, this.group.render())
        ADD(this.box, this.main.render())
        return this.box
    }
}
export default Conversation