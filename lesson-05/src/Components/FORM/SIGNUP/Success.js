import { setStyle } from "../../../Js/Style";
import { ADD, NEW } from "../../../Js/Tool";
import Logo from "../../../Asset/image/Verify.png"
class Success{
    constructor(){
        this.box = NEW('div')
        this.icon = NEW('img')
        this.icon.setAttribute('src', Logo)
        this.title = NEW('p')
        this.title.textContent = 'Please check your mail to verify your account'
        this.iconStyle = ['w-12', 'mt-16', 'mb-10']
        this.style = ['h-full','w-full', 'block' ,'bg-transparent', 'text-center', 'flex', 'flex-col', 'items-center', 'text-white']
        setStyle(this.style, this.box)
        setStyle(this.iconStyle, this.icon)
        
    }
    render(){
        ADD(this.box,this.icon)
        ADD(this.box,this.title)
        return this.box
    }
}
export default Success